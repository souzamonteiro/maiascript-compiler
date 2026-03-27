class Lexer {
  constructor(input) {
    this.input = input;
    this.position = 0;
    this.tokens = [];
    this.tokenPatterns = [    { type: 'TOKEN__2B_', regex: /^\+/ },    { type: 'TOKEN__2A_', regex: /^\*/ },    { type: 'TOKEN__28_', regex: /^\(/ },    { type: 'TOKEN__29_', regex: /^\)/ },    { type: 'Number', regex: /^(?:[0-9])+/ },    { type: 'skip', regex: /^(?:[\u0009\u000a\u000d ])+/, skip: true },    ];
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
        throw new Error(`Unexpected character at position ${this.position}: '${this.input[this.position]}'`);
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
}

class Parser {
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
      throw new Error(`Expected '${expectedType}', got '${token ? token.type : 'EOF'}'`);
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
    return `Syntax error: expected ${err.expected}, got ${err.found}`;
  }
  parse() {
    const result = this.parseExpression();
    if (this.peek().type !== 'EOF') {
      throw new Error(`Unexpected token at end: ${this.peek().type}`);
    }
    return result;
  }
  parseExpression() {
        this.parseTerm();
    // Group *
    while (true) {
      try {
    this.consume('TOKEN__2B_');
    this.parseTerm();
      } catch(e) { break; }
    }

  }
  parseTerm() {
        this.parseFactor();
    // Group *
    while (true) {
      try {
    this.consume('TOKEN__2A_');
    this.parseFactor();
      } catch(e) { break; }
    }

  }
  parseFactor() {
        if (true /* Try alternative 1 */) {
    this.consume('Number');
      return;
    } else     if (this.peek().type === 'TOKEN__28_') {
    this.consume('TOKEN__28_');
    this.parseExpression();
    this.consume('TOKEN__29_');
      return;
    } else {
      throw new Error(`Expected one of: 2 alternatives`);
    }
  }
}

module.exports = Parser;