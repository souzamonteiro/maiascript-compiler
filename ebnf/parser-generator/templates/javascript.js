// templates/javascript.js
module.exports = {
  // Cabeçalho do lexer
  lexerHeader: `class Lexer {
  constructor(input) {
    this.input = input;
    this.position = 0;
    this.tokens = [];
    this.tokenPatterns = [`,
  
  // Definição de token
  token: `    { type: '{{name}}', regex: /^{{pattern}}/ },`,
  
  // Token que deve ser ignorado (whitespace)
  skipToken: `    { type: 'skip', regex: /^{{pattern}}/, skip: true },`,
  
  // Rodapé do lexer
  lexerFooter: `    ];
  }
  
  tokenize() {
    while (this.position < this.input.length) {
      let matched = false;
      let matchedToken = null;
      
      for (const pattern of this.tokenPatterns) {
        const regex = pattern.regex;
        const match = this.input.substring(this.position).match(regex);
        
        if (match && match.index === 0) {
          matched = true;
          if (!pattern.skip) {
            matchedToken = {
              type: pattern.type,
              value: match[0],
              start: this.position,
              end: this.position + match[0].length
            };
          }
          this.position += match[0].length;
          break;
        }
      }
      
      if (!matched) {
        throw new Error(\`Unexpected character at position \${this.position}: '\${this.input[this.position]}'\`);
      }
      
      if (matchedToken) {
        this.tokens.push(matchedToken);
      }
    }
    
    // Adiciona token EOF
    this.tokens.push({
      type: 'EOF',
      value: '',
      start: this.position,
      end: this.position
    });
    
    return this.tokens;
  }
}`,
  
  // Cabeçalho do parser
  parserHeader: `class Parser {
  constructor(input) {
    this.lexer = new Lexer(input);
    this.tokens = this.lexer.tokenize();
    this.position = 0;
    this.errors = [];
  }
  
  peek() {
    return this.tokens[this.position];
  }
  
  consume(expectedType) {
    const token = this.peek();
    if (!token || token.type !== expectedType) {
      this.errors.push({
        expected: expectedType,
        found: token ? token.type : 'EOF',
        position: this.position
      });
      throw new Error(\`Expected '\${expectedType}', got '\${token ? token.type : 'EOF'}'\`);
    }
    this.position++;
    return token;
  }
  
  match(expectedType) {
    const token = this.peek();
    if (token && token.type === expectedType) {
      this.position++;
      return true;
    }
    return false;
  }
  
  getErrorMessage() {
    if (this.errors.length === 0) return 'No errors';
    const err = this.errors[0];
    return \`Syntax error: expected \${err.expected}, got \${err.found}\`;
  }`,
  
  // Método de parsing inicial
  startRule: `
  parse() {
    const result = this.parse{{startRule}}();
    if (this.peek().type !== 'EOF') {
      throw new Error(\`Unexpected token at end: \${this.peek().type}\`);
    }
    return result;
  }`,
  
  // Template para função de regra
  ruleFunction: `
  parse{{ruleName}}() {
    {{ruleBody}}
  }`,
  
  // Template para sequência (AND)
  sequence: `    // Sequence
    {{items}}`,
  
  // Template para alternativas (OR)
  alternatives: `    // Alternatives
    {{#each alternatives}}
    if ({{condition}}) {
      {{body}}
    }{{#unless @last}} else {{/unless}}
    {{/each}}
    else {
      throw new Error(\`Expected one of: {{expected}}\`);
    }`,
  
  // Consumir token
  consumeToken: `    this.consume('{{token}}');`,
  
  // Match opcional
  optional: `    if (this.match('{{token}}')) {
      // Optional matched
    }`,
  
  // Match zero ou mais
  zeroOrMore: `    while (this.match('{{token}}')) {
      // Zero or more matched
    }`,
  
  // Match um ou mais
  oneOrMore: `    do {
      // One or more matched
    } while (this.match('{{token}}'));`,
  
  // Chamar regra
  parseRule: `    this.parse{{rule}}();`,
  
  // Rodapé do parser
  parserFooter: `}
  
module.exports = Parser;`
};