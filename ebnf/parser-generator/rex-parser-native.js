class Lexer {
  constructor(input) {
    this.input = input;
    this.position = 0;
    this.tokens = [];
    this.tokenPatterns = [    { type: 'TOKEN__3C__3F_', regex: /^<\?/ },    { type: 'TOKEN__3F__3E_', regex: /^\?>/ },    ];
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
        throw new Error(`Unexpected character at position ${this.position}: '${this.input[this.position]}'`);
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
}

class Parser {
  constructor(input, eventHandler = null) {
    this.lexer = new Lexer(input);
    this.tokens = this.lexer.tokenize();
    this.position = 0;
    this.errors = [];
    this.eventHandler = eventHandler;
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
      throw new Error(`Expected '${expectedType}', got '${token ? token.type : 'EOF'}'`);
    }
    if (this.eventHandler && typeof this.eventHandler.terminal === 'function') {
      this.eventHandler.terminal(expectedType, token.value, this.position);
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
    const result = this.parseGrammar();
    if (this.peek().type !== 'EOF') {
      throw new Error(`Unexpected token at end: ${this.peek().type}`);
    }
    return result;
  }
  parseGrammar() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Grammar', this.position);
    }
    let __ok = false;
    try {
    this.parseProlog();
    this.parseSyntaxDefinition();
    // Optional: try parsing LexicalDefinition
    {
      const savePos = this.position;
      try {
        this.parseLexicalDefinition();
      } catch(e) {
        this.position = savePos;
      }
    }
    // Optional: try parsing Encore
    {
      const savePos = this.position;
      try {
        this.parseEncore();
      } catch(e) {
        this.position = savePos;
      }
    }
    this.parseEOF();
    this.parseProlog();

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Grammar', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Grammar', this.position);
        }
      }
    }
  }
  parseProlog() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Prolog', this.position);
    }
    let __ok = false;
    try {
    while (true) {
      const savePos = this.position;
      try {
        this.parseProcessingInstruction();
        // Heuristic: avoid consuming the Name from a "Name ::= ..." header
        if (this.peek() && this.peek().type === 'TOKEN__3A__3A__3D_') {
          this.position = savePos;
          break;
        }
        if (this.position === savePos) break;
      } catch(e) {
        this.position = savePos;
        break;
      }
    }
    this.parseProcessingInstruction();

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Prolog', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Prolog', this.position);
        }
      }
    }
  }
  parseProcessingInstruction() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('ProcessingInstruction', this.position);
    }
    let __ok = false;
    try {
    this.consume('TOKEN__3C__3F_');
    this.parseName();
    // Group ?
    {
      const _optStart = this.position;
      try {
    let count = 0;
    while (true) {
      const savePos = this.position;
      try {
        this.parseSpace();
        // Heuristic: avoid consuming the Name from a "Name ::= ..." header
        if (this.peek() && this.peek().type === 'TOKEN__3A__3A__3D_') {
          this.position = savePos;
          break;
        }
        if (this.position === savePos) break;
        count++;
      } catch(e) {
        this.position = savePos;
        break;
      }
    }
    if (count === 0) {
      throw new Error('Expected at least one Space');
    }
    // Optional: try parsing DirPIContents
    {
      const savePos = this.position;
      try {
        this.parseDirPIContents();
      } catch(e) {
        this.position = savePos;
      }
    }
      } catch (e) {
        this.position = _optStart;
      }
    }
    this.consume('TOKEN__3F__3E_');

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('ProcessingInstruction', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('ProcessingInstruction', this.position);
        }
      }
    }
  }
}

module.exports = Parser;