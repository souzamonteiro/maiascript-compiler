// code-generator.js - Gera código JavaScript a partir da gramática parseada
const templates = require('./templates/javascript');

class CodeGenerator {
  constructor(grammar) {
    this.grammar = grammar;
    this.tokenMap = this.buildTokenMap();
  }
  
  buildTokenMap() {
    const tokenMap = new Map();
    let tokenId = 1;
    
    // Primeiro, mapeia tokens literais das regras sintáticas
    for (const [name, rule] of this.grammar.rules) {
      for (const sequence of rule.sequences) {
        for (const item of sequence) {
          if (item.type === 'terminal' && !tokenMap.has(item.value)) {
            tokenMap.set(item.value, {
              id: tokenId++,
              name: `TOKEN_${this.sanitizeName(item.value)}`,
              pattern: this.escapeRegex(item.value)
            });
          }
        }
      }
    }
    
    // Depois, adiciona tokens léxicos
    for (const [name, token] of this.grammar.tokens) {
      if (!tokenMap.has(name)) {
        tokenMap.set(name, {
          id: tokenId++,
          name: name,
          pattern: this.tokenPatternToRegex(token),
          isSkip: token.isSkip
        });
      }
    }
    
    return tokenMap;
  }
  
  tokenPatternToRegex(token) {
    if (token.patterns.length === 0) return '';
    
    const pattern = token.patterns[0];
    let regex = '';
    
    for (const item of pattern) {
      if (item.type === 'literal') {
        regex += this.escapeRegex(item.value);
      } else if (item.type === 'tokenRef') {
        const refToken = this.grammar.tokens.get(item.value);
        if (refToken) {
          regex += this.tokenPatternToRegex(refToken);
        }
      } else if (item.type === 'charclass') {
        regex += `[${item.value}]`;
      }
    }
    
    // Aplica quantificadores
    for (const item of pattern) {
      if (item.quantifier === 'optional') {
        regex = `(?:${regex})?`;
      } else if (item.quantifier === 'zeroOrMore') {
        regex = `(?:${regex})*`;
      } else if (item.quantifier === 'oneOrMore') {
        regex = `(?:${regex})+`;
      }
    }
    
    return regex;
  }
  
  escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  sanitizeName(name) {
    return name.replace(/[^a-zA-Z0-9]/g, '_');
  }
  
  generate() {
    const lexerCode = this.generateLexer();
    const parserCode = this.generateParser();
    
    return `${lexerCode}\n\n${parserCode}`;
  }
  
  generateLexer() {
    let code = templates.lexerHeader;
    
    // Adiciona tokens literais
    for (const [value, token] of this.tokenMap) {
      if (token.pattern && !token.isSkip) {
        code += templates.token
          .replace(/{{name}}/g, token.name)
          .replace(/{{pattern}}/g, token.pattern);
      }
    }
    
    // Adiciona tokens léxicos
    for (const [name, token] of this.grammar.tokens) {
      if (token.patterns.length > 0) {
        const pattern = this.tokenPatternToRegex(token);
        if (pattern) {
          if (token.isSkip) {
            code += templates.skipToken
              .replace(/{{name}}/g, name)
              .replace(/{{pattern}}/g, pattern);
          } else {
            code += templates.token
              .replace(/{{name}}/g, name)
              .replace(/{{pattern}}/g, pattern);
          }
        }
      }
    }
    
    code += templates.lexerFooter;
    return code;
  }
  
  generateParser() {
    let code = templates.parserHeader;
    
    // Adiciona método de parsing inicial
    code += templates.startRule
      .replace(/{{startRule}}/g, this.grammar.startSymbol);
    
    // Gera funções para cada regra
    for (const [name, rule] of this.grammar.rules) {
      code += this.generateRuleFunction(rule);
    }
    
    code += templates.parserFooter;
    return code;
  }
  
  generateRuleFunction(rule) {
    const body = this.generateRuleBody(rule);
    
    return templates.ruleFunction
      .replace(/{{ruleName}}/g, rule.name)
      .replace(/{{ruleBody}}/g, body);
  }
  
  generateRuleBody(rule) {
    if (rule.sequences.length === 0) {
      return '    // Empty rule';
    }
    
    if (rule.sequences.length === 1) {
      return this.generateSequence(rule.sequences[0]);
    }
    
    // Múltiplas alternativas
    let alternatives = '';
    for (let i = 0; i < rule.sequences.length; i++) {
      const seq = rule.sequences[i];
      const firstItem = seq[0];
      
      let condition;
      if (firstItem && firstItem.type === 'terminal') {
        condition = `this.peek().type === '${this.getTokenName(firstItem.value)}'`;
      } else if (firstItem && firstItem.type === 'nonterminal') {
        // Para não-terminais, precisamos de lookahead mais complexo
        condition = `true // Try alternative ${i + 1}`;
      } else {
        condition = `true // Try alternative ${i + 1}`;
      }
      
      alternatives += `    if (${condition}) {\n`;
      alternatives += this.generateSequence(seq);
      alternatives += `      return;\n    }`;
      
      if (i < rule.sequences.length - 1) {
        alternatives += ` else `;
      }
    }
    
    alternatives += ` else {\n      throw new Error(\`Expected one of: ${rule.sequences.length} alternatives\`);\n    }`;
    
    return alternatives;
  }
  
  generateSequence(sequence) {
    let code = '';
    
    for (const item of sequence) {
      code += this.generateItem(item);
    }
    
    return code;
  }
  
  generateItem(item) {
    switch (item.type) {
      case 'terminal':
        return this.generateTerminal(item);
      case 'nonterminal':
        return this.generateNonterminal(item);
      case 'group':
        return this.generateGroup(item);
      default:
        return '';
    }
  }
  
  generateTerminal(item) {
    const tokenName = this.getTokenName(item.value);
    
    switch (item.quantifier) {
      case 'optional':
        return `    if (this.match('${tokenName}')) { /* optional matched */ }\n`;
      case 'zeroOrMore':
        return `    while (this.match('${tokenName}')) { /* zero or more matched */ }\n`;
      case 'oneOrMore':
        return `    do { /* one or more matched */ } while (this.match('${tokenName}'));\n`;
      default:
        return `    this.consume('${tokenName}');\n`;
    }
  }
  
  generateNonterminal(item) {
    switch (item.quantifier) {
      case 'optional':
        return `    // Optional: try parsing ${item.value}\n` +
               `    try {\n` +
               `      const savePos = this.position;\n` +
               `      this.parse${item.value}();\n` +
               `    } catch(e) {\n` +
               `      this.position = savePos;\n` +
               `    }\n`;
      case 'zeroOrMore':
        return `    while (true) {\n` +
               `      try {\n` +
               `        const savePos = this.position;\n` +
               `        this.parse${item.value}();\n` +
               `      } catch(e) {\n` +
               `        break;\n` +
               `      }\n` +
               `    }\n`;
      case 'oneOrMore':
        return `    let count = 0;\n` +
               `    while (true) {\n` +
               `      try {\n` +
               `        const savePos = this.position;\n` +
               `        this.parse${item.value}();\n` +
               `        count++;\n` +
               `      } catch(e) {\n` +
               `        break;\n` +
               `      }\n` +
               `    }\n` +
               `    if (count === 0) {\n` +
               `      throw new Error('Expected at least one ${item.value}');\n` +
               `    }\n`;
      default:
        return `    this.parse${item.value}();\n`;
    }
  }
  
  generateGroup(item) {
    // Para grupos, geramos uma função inline
    let code = `    // Group\n`;
    for (const seq of item.sequences) {
      code += `    try {\n`;
      code += this.generateSequence(seq);
      code += `      // Group matched\n`;
      code += `    } catch(e) {\n`;
      code += `      // Try next alternative\n`;
      code += `    }\n`;
    }
    return code;
  }
  
  getTokenName(value) {
    // Busca o nome do token mapeado
    for (const [tokenValue, token] of this.tokenMap) {
      if (tokenValue === value) {
        return token.name;
      }
    }
    // Se não encontrar, cria um nome baseado no valor
    return `TOKEN_${this.sanitizeName(value)}`;
  }
}

module.exports = CodeGenerator;