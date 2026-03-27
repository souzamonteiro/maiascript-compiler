// templates/javascript.js
module.exports = {
  // Lexer header
  lexerHeader: `class Lexer {
  constructor(input) {
    this.input = input;
    this.position = 0;
    this.tokens = [];
    this.tokenPatterns = [`,
  
  // Token definition
  token: `    { type: '{{name}}', regex: /^{{pattern}}/ },`,
  
  // Token that should be skipped (whitespace)
  skipToken: `    { type: 'skip', regex: /^{{pattern}}/, skip: true },`,
  
  // Lexer footer
  lexerFooter: `    ];
  }
  
  tokenize() {
    while (this.position < this.input.length) {
      let bestPattern = null;
      let bestMatch = null;

      for (const pattern of this.tokenPatterns) {
        const regex = pattern.regex;
        const match = this.input.substring(this.position).match(regex);

        if (match && match.index === 0 && match[0].length > 0) {
          if (!bestMatch
              || match[0].length > bestMatch[0].length
              || (match[0].length === bestMatch[0].length && pattern.skip && !bestPattern.skip)) {
            bestPattern = pattern;
            bestMatch = match;
          }
        }
      }

      if (!bestMatch) {
        throw new Error(\`Unexpected character at position \${this.position}: '\${this.input[this.position]}'\`);
      }

      if (!bestPattern.skip) {
        const matchedToken = {
          type: bestPattern.type,
          value: bestMatch[0],
          start: this.position,
          end: this.position + bestMatch[0].length
        };
        this.tokens.push(matchedToken);
      }

      this.position += bestMatch[0].length;
    }
    
    // Add EOF token
    this.tokens.push({
      type: 'EOF',
      value: '',
      start: this.position,
      end: this.position
    });
    
    return this.tokens;
  }
}`,
  
  // Parser header
  parserHeader: `class Parser {
  constructor(input) {
    this.lexer = new Lexer(input);
    this.tokens = this.lexer.tokenize();
    this.position = 0;
    this.errors = [];
  }
  
  peek() {
    return this.tokens[this.position] || {
      type: 'EOF',
      value: '',
      start: this.tokens.length > 0 ? this.tokens[this.tokens.length - 1].end : 0,
      end: this.tokens.length > 0 ? this.tokens[this.tokens.length - 1].end : 0
    };
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
  
  // Entry parse method
  startRule: `
  parse() {
    const result = this.parse{{startRule}}();
    if (this.peek().type !== 'EOF') {
      throw new Error(\`Unexpected token at end: \${this.peek().type}\`);
    }
    return result;
  }`,
  
  // Rule function template
  ruleFunction: `
  parse{{ruleName}}() {
    {{ruleBody}}
  }`,
  
  // Sequence template (AND)
  sequence: `    // Sequence
    {{items}}`,
  
  // Alternatives template (OR)
  alternatives: `    // Alternatives
    {{#each alternatives}}
    if ({{condition}}) {
      {{body}}
    }{{#unless @last}} else {{/unless}}
    {{/each}}
    else {
      throw new Error(\`Expected one of: {{expected}}\`);
    }`,
  
  // Consume token
  consumeToken: `    this.consume('{{token}}');`,
  
  // Optional match
  optional: `    if (this.match('{{token}}')) {
      // Optional matched
    }`,
  
  // Zero-or-more match
  zeroOrMore: `    while (this.match('{{token}}')) {
      // Zero or more matched
    }`,
  
  // One-or-more match
  oneOrMore: `    do {
      // One or more matched
    } while (this.match('{{token}}'));`,
  
  // Call rule
  parseRule: `    this.parse{{rule}}();`,
  
  // Parser footer
  parserFooter: `
}

module.exports = Parser;`
};