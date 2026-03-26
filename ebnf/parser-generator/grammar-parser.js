// grammar-parser.js - Processa o XML gerado pelo REx
const xml2js = require('xml2js');

class GrammarParser {
  constructor(xmlString) {
    this.xmlString = xmlString;
    this.rules = new Map();
    this.tokens = new Map();
    this.startSymbol = null;
  }
  
  async parse() {
    const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
    const result = await parser.parseStringPromise(this.xmlString);
    
    // Extrai regras sintáticas
    const syntaxDefinition = result.Grammar.SyntaxDefinition;
    if (syntaxDefinition && syntaxDefinition.SyntaxProduction) {
      const productions = Array.isArray(syntaxDefinition.SyntaxProduction) 
        ? syntaxDefinition.SyntaxProduction 
        : [syntaxDefinition.SyntaxProduction];
      
      for (const prod of productions) {
        const rule = this.parseSyntaxProduction(prod);
        this.rules.set(rule.name, rule);
        
        // Define start symbol como primeira regra
        if (!this.startSymbol) {
          this.startSymbol = rule.name;
        }
      }
    }
    
    // Extrai regras léxicas
    const lexicalDefinition = result.Grammar.LexicalDefinition;
    if (lexicalDefinition && lexicalDefinition.LexicalProduction) {
      const productions = Array.isArray(lexicalDefinition.LexicalProduction)
        ? lexicalDefinition.LexicalProduction
        : [lexicalDefinition.LexicalProduction];
      
      for (const prod of productions) {
        const token = this.parseLexicalProduction(prod);
        this.tokens.set(token.name, token);
      }
    }
    
    return {
      rules: this.rules,
      tokens: this.tokens,
      startSymbol: this.startSymbol
    };
  }
  
  parseSyntaxProduction(prod) {
    const name = prod.Name;
    const syntaxChoice = prod.SyntaxChoice;
    const sequences = this.parseSyntaxChoice(syntaxChoice);
    const options = this.parseOptions(prod.Option);
    
    return {
      type: 'syntax',
      name: name,
      sequences: sequences,
      options: options
    };
  }
  
  parseSyntaxChoice(choice) {
    const sequences = [];
    
    // Se não tem SyntaxSequence, retorna vazio
    if (!choice || !choice.SyntaxSequence) {
      return sequences;
    }
    
    const seqElements = Array.isArray(choice.SyntaxSequence) 
      ? choice.SyntaxSequence 
      : [choice.SyntaxSequence];
    
    for (const seq of seqElements) {
      const items = this.parseSyntaxSequence(seq);
      sequences.push(items);
    }
    
    return sequences;
  }
  
  parseSyntaxSequence(seq) {
    const items = [];
    
    if (!seq.SyntaxItem) {
      return items;
    }
    
    const itemElements = Array.isArray(seq.SyntaxItem) 
      ? seq.SyntaxItem 
      : [seq.SyntaxItem];
    
    for (const item of itemElements) {
      const parsedItem = this.parseSyntaxItem(item);
      if (parsedItem) {
        items.push(parsedItem);
      }
    }
    
    return items;
  }
  
  parseSyntaxItem(item) {
    const primary = item.SyntaxPrimary;
    if (!primary) return null;
    
    // Extrai quantificador
    let quantifier = 'exactly1';
    const tokenElements = item.TOKEN;
    if (tokenElements) {
      const tokens = Array.isArray(tokenElements) ? tokenElements : [tokenElements];
      for (const token of tokens) {
        if (token === '?' && quantifier === 'exactly1') quantifier = 'optional';
        if (token === '*') quantifier = 'zeroOrMore';
        if (token === '+') quantifier = 'oneOrMore';
      }
    }
    
    const primaryContent = this.parseSyntaxPrimary(primary);
    
    return {
      ...primaryContent,
      quantifier: quantifier
    };
  }
  
  parseSyntaxPrimary(primary) {
    // NameOrString
    if (primary.NameOrString) {
      const nos = primary.NameOrString;
      if (nos.Name) {
        return { type: 'nonterminal', value: nos.Name };
      }
      if (nos.StringLiteral) {
        return { type: 'terminal', value: this.unescapeString(nos.StringLiteral) };
      }
    }
    
    // StringLiteral direto
    if (primary.StringLiteral) {
      return { type: 'terminal', value: this.unescapeString(primary.StringLiteral) };
    }
    
    // Name direto
    if (primary.Name) {
      return { type: 'nonterminal', value: primary.Name };
    }
    
    // Grupo entre parênteses
    if (primary.SyntaxChoice) {
      return {
        type: 'group',
        sequences: this.parseSyntaxChoice(primary.SyntaxChoice)
      };
    }
    
    return null;
  }
  
  parseLexicalProduction(prod) {
    const name = prod.Name;
    const contextChoice = prod.ContextChoice;
    const patterns = this.parseContextChoice(contextChoice);
    const options = this.parseOptions(prod.Option);
    
    // Verifica se é skip (whitespace)
    const isSkip = options && options.some(opt => opt === 'definition');
    
    return {
      type: 'lexical',
      name: name,
      patterns: patterns,
      isSkip: isSkip
    };
  }
  
  parseContextChoice(choice) {
    const patterns = [];
    
    if (!choice || !choice.ContextExpression) {
      return patterns;
    }
    
    const expressions = Array.isArray(choice.ContextExpression)
      ? choice.ContextExpression
      : [choice.ContextExpression];
    
    for (const expr of expressions) {
      const pattern = this.parseContextExpression(expr);
      patterns.push(pattern);
    }
    
    return patterns;
  }
  
  parseContextExpression(expr) {
    const lexicalSequence = expr.LexicalSequence;
    const patterns = this.parseLexicalSequence(lexicalSequence);
    return patterns;
  }
  
  parseLexicalSequence(seq) {
    const items = [];
    
    if (!seq || !seq.LexicalItem) {
      return items;
    }
    
    const itemElements = Array.isArray(seq.LexicalItem)
      ? seq.LexicalItem
      : [seq.LexicalItem];
    
    for (const item of itemElements) {
      const parsedItem = this.parseLexicalItem(item);
      if (parsedItem) {
        items.push(parsedItem);
      }
    }
    
    return items;
  }
  
  parseLexicalItem(item) {
    const primary = item.LexicalPrimary;
    if (!primary) return null;
    
    let quantifier = 'exactly1';
    const tokenElements = item.TOKEN;
    if (tokenElements) {
      const tokens = Array.isArray(tokenElements) ? tokenElements : [tokenElements];
      for (const token of tokens) {
        if (token === '?' && quantifier === 'exactly1') quantifier = 'optional';
        if (token === '*') quantifier = 'zeroOrMore';
        if (token === '+') quantifier = 'oneOrMore';
      }
    }
    
    const primaryContent = this.parseLexicalPrimary(primary);
    
    return {
      ...primaryContent,
      quantifier: quantifier
    };
  }
  
  parseLexicalPrimary(primary) {
    // Name (referência a outro token)
    if (primary.Name) {
      return { type: 'tokenRef', value: primary.Name };
    }
    
    // StringLiteral
    if (primary.StringLiteral) {
      return { type: 'literal', value: this.unescapeString(primary.StringLiteral) };
    }
    
    // CharClass
    if (primary.CharClass) {
      return { type: 'charclass', value: this.parseCharClass(primary.CharClass) };
    }
    
    // CharCode
    if (primary.CharCode) {
      return { type: 'literal', value: this.parseCharCode(primary.CharCode) };
    }
    
    // Char
    if (primary.Char) {
      return { type: 'literal', value: primary.Char };
    }
    
    // Grupo entre parênteses
    if (primary.LexicalChoice) {
      return {
        type: 'group',
        patterns: this.parseLexicalChoice(primary.LexicalChoice)
      };
    }
    
    return null;
  }
  
  parseLexicalChoice(choice) {
    const patterns = [];
    
    if (!choice || !choice.LexicalSequence) {
      return patterns;
    }
    
    const sequences = Array.isArray(choice.LexicalSequence)
      ? choice.LexicalSequence
      : [choice.LexicalSequence];
    
    for (const seq of sequences) {
      const pattern = this.parseLexicalSequence(seq);
      patterns.push(pattern);
    }
    
    return patterns;
  }
  
  parseCharClass(charClass) {
    // Extrai o conteúdo da classe de caracteres
    let content = '';
    if (charClass.CharRange) {
      content += charClass.CharRange;
    }
    if (charClass.Char) {
      content += charClass.Char;
    }
    if (charClass.CharCode) {
      content += this.parseCharCode(charClass.CharCode);
    }
    if (charClass.CharCodeRange) {
      content += charClass.CharCodeRange;
    }
    return content;
  }
  
  parseCharCode(code) {
    // Converte #xNN para caractere Unicode
    const match = code.match(/#x([0-9a-fA-F]+)/);
    if (match) {
      return String.fromCodePoint(parseInt(match[1], 16));
    }
    return code;
  }
  
  parseOptions(options) {
    if (!options) return [];
    
    const opts = Array.isArray(options) ? options : [options];
    return opts.map(opt => {
      if (opt === 'explicit') return 'explicit';
      if (opt === 'definition') return 'definition';
      return null;
    }).filter(Boolean);
  }
  
  unescapeString(str) {
    // Remove aspas e escapa caracteres
    if (str.startsWith("'") && str.endsWith("'")) {
      return str.slice(1, -1);
    }
    if (str.startsWith('"') && str.endsWith('"')) {
      return str.slice(1, -1);
    }
    return str;
  }
}

module.exports = GrammarParser;