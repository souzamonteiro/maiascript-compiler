class Lexer {
  constructor(input) {
    this.input = input;
    this.position = 0;
    this.tokens = [];
    this.tokenPatterns = [    { type: 'TOKEN__3C__3F_', regex: /^<\?/ },    { type: 'TOKEN__3F__3E_', regex: /^\?>/ },    { type: 'TOKEN__3A__3A__3D_', regex: /^::=/ },    { type: 'TOKEN__7C_', regex: /^\|/ },    { type: 'TOKEN__2F_', regex: /^\// },    { type: 'TOKEN__3F_', regex: /^\?/ },    { type: 'TOKEN__2A_', regex: /^\*/ },    { type: 'TOKEN__2B_', regex: /^\+/ },    { type: 'TOKEN__28_', regex: /^\(/ },    { type: 'TOKEN__29_', regex: /^\)/ },    { type: 'TOKEN__3C__3F_TOKENS_3F__3E_', regex: /^<\?TOKENS\?>/ },    { type: 'TOKEN__2E_', regex: /^\./ },    { type: 'TOKEN__26_', regex: /^&/ },    { type: 'TOKEN__2D_', regex: /^-/ },    { type: 'TOKEN__24_', regex: /^\$/ },    { type: 'TOKEN__5B_', regex: /^\[/ },    { type: 'TOKEN__5B__5E_', regex: /^\[\^/ },    { type: 'TOKEN__5D_', regex: /^\]/ },    { type: 'TOKEN__2F__2A_', regex: /^\/\*/ },    { type: 'TOKEN_ws', regex: /^ws/ },    { type: 'TOKEN__3A_', regex: /^:/ },    { type: 'TOKEN_explicit', regex: /^explicit/ },    { type: 'TOKEN_definition', regex: /^definition/ },    { type: 'TOKEN__2A__2F_', regex: /^\*\// },    { type: 'TOKEN__3E__3E_', regex: /^>>/ },    { type: 'TOKEN__3C__3C_', regex: /^<</ },    { type: 'TOKEN__5C__5C_', regex: /^\\\\/ },    { type: 'TOKEN__3D__3D_', regex: /^==/ },    { type: 'TOKEN__3C__3F_ENCORE_3F__3E_', regex: /^<\?ENCORE\?>/ },    { type: 'Name', regex: /^(?:[A-Z]|_|[a-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�])(?:(?:(?:[A-Z]|_|[a-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�])|-|\.|[0-9]|·|[̀-ͯ]|[‿-⁀]))*/ },    { type: 'Space', regex: /^(?:(?:(?:\u0009|\u000d| ))+|\u000a)/ },    { type: 'StringLiteral', regex: /^(?:"(?:[^"\u0009\u000a\u000d])*"|'(?:[^'\u0009\u000a\u000d])*')/ },    { type: 'CaretName', regex: /^\^(?:(?:[A-Z]|_|[a-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�])(?:(?:(?:[A-Z]|_|[a-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�])|-|\.|[0-9]|·|[̀-ͯ]|[‿-⁀]))*)?/ },    { type: 'CharCode', regex: /^#x(?:[0-9a-fA-F])+/ },    { type: 'Char', regex: /^(?:[^\u0009\u000a\u000d#\]]|#)/ },    { type: 'CharRange', regex: /^(?:[^\u0009\u000a\u000d#\]]|#)-(?:[^\u0009\u000a\u000d#\]]|#)/ },    { type: 'CharCodeRange', regex: /^#x(?:[0-9a-fA-F])+-#x(?:[0-9a-fA-F])+/ },    { type: 'skip', regex: /^(?:(?:(?:(?:(?:\u0009|\u000d| ))+|\u000a)|\/\/(?:[^\u000a])*(?:\u000a)?|\/\*(?:(?:(?:[\s\S])*(?:(?:[\s\S])*\*\/(?:[\s\S])*))(?:(?:(?:(?:(?:\u0009|\u000d| ))+|\u000a))*ws(?:(?:(?:(?:\u0009|\u000d| ))+|\u000a))*:(?:[\s\S])*))\*\/))+/, skip: true },    ];
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
    this.consume('EOF');

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
    this.consume('Name');
    // Group ?
    {
      const _optStart = this.position;
      try {
    this.consume('Space');
    while (this.match('Space')) { /* one or more */ }
    if (this.match('DirPIContents')) { /* optional token matched */ }
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
  parseSyntaxDefinition() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('SyntaxDefinition', this.position);
    }
    let __ok = false;
    try {
    let count = 0;
    while (true) {
      const savePos = this.position;
      try {
        this.parseSyntaxProduction();
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
      throw new Error('Expected at least one SyntaxProduction');
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('SyntaxDefinition', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('SyntaxDefinition', this.position);
        }
      }
    }
  }
  parseSyntaxProduction() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('SyntaxProduction', this.position);
    }
    let __ok = false;
    try {
    this.consume('Name');
    this.consume('TOKEN__3A__3A__3D_');
    this.parseSyntaxChoice();
    while (true) {
      const savePos = this.position;
      try {
        this.parseOption();
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

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('SyntaxProduction', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('SyntaxProduction', this.position);
        }
      }
    }
  }
  parseSyntaxChoice() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('SyntaxChoice', this.position);
    }
    let __ok = false;
    try {
    this.parseSyntaxSequence();
    // Group ?
    {
      const _optStart = this.position;
      try {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    // Group +
    {
      let _count = 0;
      while (true) {
        const _loopStart = this.position;
        try {
    this.consume('TOKEN__7C_');
    this.parseSyntaxSequence();
        } catch (e) {
          this.position = _loopStart;
          break;
        }
        if (this.position === _loopStart) break;
        _count++;
      }
      if (_count === 0) throw new Error('Expected at least one group match');
    }
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    // Group +
    {
      let _count = 0;
      while (true) {
        const _loopStart = this.position;
        try {
    this.consume('TOKEN__2F_');
    this.parseSyntaxSequence();
        } catch (e) {
          this.position = _loopStart;
          break;
        }
        if (this.position === _loopStart) break;
        _count++;
      }
      if (_count === 0) throw new Error('Expected at least one group match');
    }
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
      } catch (e) {
        this.position = _optStart;
      }
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('SyntaxChoice', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('SyntaxChoice', this.position);
        }
      }
    }
  }
  parseSyntaxSequence() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('SyntaxSequence', this.position);
    }
    let __ok = false;
    try {
    while (true) {
      const savePos = this.position;
      try {
        this.parseSyntaxItem();
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

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('SyntaxSequence', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('SyntaxSequence', this.position);
        }
      }
    }
  }
  parseSyntaxItem() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('SyntaxItem', this.position);
    }
    let __ok = false;
    try {
    this.parseSyntaxPrimary();
    // Group ?
    {
      const _optStart = this.position;
      try {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__3F_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__2A_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__2B_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
      } catch (e) {
        this.position = _optStart;
      }
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('SyntaxItem', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('SyntaxItem', this.position);
        }
      }
    }
  }
  parseSyntaxPrimary() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('SyntaxPrimary', this.position);
    }
    let __ok = false;
    try {
    const _ruleStart = this.position;
    let _matched = false;
    if (!_matched) {
      try {
    this.parseNameOrString();
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.consume('TOKEN__28_');
    this.parseSyntaxChoice();
    this.consume('TOKEN__29_');
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.parseProcessingInstruction();
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      throw new Error(`Expected one of: 3 alternatives`);
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('SyntaxPrimary', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('SyntaxPrimary', this.position);
        }
      }
    }
  }
  parseLexicalDefinition() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('LexicalDefinition', this.position);
    }
    let __ok = false;
    try {
    this.consume('TOKEN__3C__3F_TOKENS_3F__3E_');
    // Group *
    while (true) {
      const _loopStart = this.position;
      try {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.parseLexicalProduction();
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.parsePreference();
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.parseDelimiter();
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.parseEquivalence();
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
      } catch (e) {
        this.position = _loopStart;
        break;
      }
      if (this.position === _loopStart) break;
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('LexicalDefinition', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('LexicalDefinition', this.position);
        }
      }
    }
  }
  parseLexicalProduction() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('LexicalProduction', this.position);
    }
    let __ok = false;
    try {
    // Group
    {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('Name');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__2E_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
    }
    if (this.match('TOKEN__3F_')) { /* optional matched */ }
    this.consume('TOKEN__3A__3A__3D_');
    this.parseContextChoice();
    while (true) {
      const savePos = this.position;
      try {
        this.parseOption();
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

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('LexicalProduction', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('LexicalProduction', this.position);
        }
      }
    }
  }
  parseContextChoice() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('ContextChoice', this.position);
    }
    let __ok = false;
    try {
    this.parseContextExpression();
    // Group *
    while (true) {
      const _loopStart = this.position;
      try {
    this.consume('TOKEN__7C_');
    this.parseContextExpression();
      } catch (e) {
        this.position = _loopStart;
        break;
      }
      if (this.position === _loopStart) break;
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('ContextChoice', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('ContextChoice', this.position);
        }
      }
    }
  }
  parseLexicalChoice() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('LexicalChoice', this.position);
    }
    let __ok = false;
    try {
    this.parseLexicalSequence();
    // Group *
    while (true) {
      const _loopStart = this.position;
      try {
    this.consume('TOKEN__7C_');
    this.parseLexicalSequence();
      } catch (e) {
        this.position = _loopStart;
        break;
      }
      if (this.position === _loopStart) break;
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('LexicalChoice', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('LexicalChoice', this.position);
        }
      }
    }
  }
  parseContextExpression() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('ContextExpression', this.position);
    }
    let __ok = false;
    try {
    this.parseLexicalSequence();
    // Group ?
    {
      const _optStart = this.position;
      try {
    this.consume('TOKEN__26_');
    this.parseLexicalItem();
      } catch (e) {
        this.position = _optStart;
      }
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('ContextExpression', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('ContextExpression', this.position);
        }
      }
    }
  }
  parseLexicalSequence() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('LexicalSequence', this.position);
    }
    let __ok = false;
    try {
    const _ruleStart = this.position;
    let _matched = false;
    if (!_matched) {
      try {
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.parseLexicalItem();
    // Group
    {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__2D_');
    this.parseLexicalItem();
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    while (true) {
      const savePos = this.position;
      try {
        this.parseLexicalItem();
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
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
    }
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      throw new Error(`Expected one of: 2 alternatives`);
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('LexicalSequence', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('LexicalSequence', this.position);
        }
      }
    }
  }
  parseLexicalItem() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('LexicalItem', this.position);
    }
    let __ok = false;
    try {
    this.parseLexicalPrimary();
    // Group ?
    {
      const _optStart = this.position;
      try {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__3F_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__2A_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__2B_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
      } catch (e) {
        this.position = _optStart;
      }
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('LexicalItem', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('LexicalItem', this.position);
        }
      }
    }
  }
  parseLexicalPrimary() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('LexicalPrimary', this.position);
    }
    let __ok = false;
    try {
    const _ruleStart = this.position;
    let _matched = false;
    if (!_matched) {
      try {
    // Group
    {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('Name');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__2E_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
    }
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.consume('StringLiteral');
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.consume('TOKEN__28_');
    this.parseLexicalChoice();
    this.consume('TOKEN__29_');
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.consume('TOKEN__24_');
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.consume('CharCode');
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.parseCharClass();
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      throw new Error(`Expected one of: 6 alternatives`);
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('LexicalPrimary', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('LexicalPrimary', this.position);
        }
      }
    }
  }
  parseNameOrString() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('NameOrString', this.position);
    }
    let __ok = false;
    try {
    const _ruleStart = this.position;
    let _matched = false;
    if (!_matched) {
      try {
    this.consume('Name');
    // Optional: try parsing Context
    {
      const savePos = this.position;
      try {
        this.parseContext();
      } catch(e) {
        this.position = savePos;
      }
    }
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.consume('StringLiteral');
    // Optional: try parsing Context
    {
      const savePos = this.position;
      try {
        this.parseContext();
      } catch(e) {
        this.position = savePos;
      }
    }
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      throw new Error(`Expected one of: 2 alternatives`);
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('NameOrString', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('NameOrString', this.position);
        }
      }
    }
  }
  parseContext() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Context', this.position);
    }
    let __ok = false;
    try {
    this.consume('CaretName');

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Context', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Context', this.position);
        }
      }
    }
  }
  parseCharClass() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('CharClass', this.position);
    }
    let __ok = false;
    try {
    // Group
    {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__5B_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__5B__5E_');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
    }
    // Group +
    {
      let _count = 0;
      while (true) {
        const _loopStart = this.position;
        try {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('Char');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('CharCode');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('CharRange');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('CharCodeRange');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
        } catch (e) {
          this.position = _loopStart;
          break;
        }
        if (this.position === _loopStart) break;
        _count++;
      }
      if (_count === 0) throw new Error('Expected at least one group match');
    }
    this.consume('TOKEN__5D_');

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('CharClass', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('CharClass', this.position);
        }
      }
    }
  }
  parseOption() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Option', this.position);
    }
    let __ok = false;
    try {
    this.consume('TOKEN__2F__2A_');
    while (this.match('Space')) { /* zero or more */ }
    this.consume('TOKEN_ws');
    this.consume('TOKEN__3A_');
    while (this.match('Space')) { /* zero or more */ }
    // Group
    {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN_explicit');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN_definition');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
    }
    while (this.match('Space')) { /* zero or more */ }
    this.consume('TOKEN__2A__2F_');

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Option', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Option', this.position);
        }
      }
    }
  }
  parsePreference() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Preference', this.position);
    }
    let __ok = false;
    try {
    this.parseNameOrString();
    // Group
    {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__3E__3E_');
    let count = 0;
    while (true) {
      const savePos = this.position;
      try {
        this.parseNameOrString();
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
      throw new Error('Expected at least one NameOrString');
    }
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('TOKEN__3C__3C_');
    let count = 0;
    while (true) {
      const savePos = this.position;
      try {
        this.parseNameOrString();
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
      throw new Error('Expected at least one NameOrString');
    }
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Preference', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Preference', this.position);
        }
      }
    }
  }
  parseDelimiter() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Delimiter', this.position);
    }
    let __ok = false;
    try {
    this.consume('Name');
    this.consume('TOKEN__5C__5C_');
    let count = 0;
    while (true) {
      const savePos = this.position;
      try {
        this.parseNameOrString();
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
      throw new Error('Expected at least one NameOrString');
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Delimiter', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Delimiter', this.position);
        }
      }
    }
  }
  parseEquivalence() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Equivalence', this.position);
    }
    let __ok = false;
    try {
    this.consume('EquivalenceLookAhead');
    this.parseEquivalenceCharRange();
    this.consume('TOKEN__3D__3D_');
    this.parseEquivalenceCharRange();

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Equivalence', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Equivalence', this.position);
        }
      }
    }
  }
  parseEquivalenceCharRange() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('EquivalenceCharRange', this.position);
    }
    let __ok = false;
    try {
    const _ruleStart = this.position;
    let _matched = false;
    if (!_matched) {
      try {
    this.consume('StringLiteral');
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      try {
    this.consume('TOKEN__5B_');
    // Group
    {
      let _matchedAlt = false;
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('Char');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('CharCode');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('CharRange');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) {
        const _altStart = this.position;
        try {
    this.consume('CharCodeRange');
          _matchedAlt = true;
        } catch (e) {
          this.position = _altStart;
        }
      }
      if (!_matchedAlt) { throw new Error('No group alternative matched'); }
    }
    this.consume('TOKEN__5D_');
        _matched = true;
      } catch (e) {
        this.position = _ruleStart;
      }
    }
    if (!_matched) {
      throw new Error(`Expected one of: 2 alternatives`);
    }

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('EquivalenceCharRange', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('EquivalenceCharRange', this.position);
        }
      }
    }
  }
  parseEncore() {
    if (this.eventHandler && typeof this.eventHandler.startNonterminal === 'function') {
      this.eventHandler.startNonterminal('Encore', this.position);
    }
    let __ok = false;
    try {
    this.consume('TOKEN__3C__3F_ENCORE_3F__3E_');
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

      __ok = true;
    } finally {
      if (this.eventHandler) {
        if (__ok && typeof this.eventHandler.endNonterminal === 'function') {
          this.eventHandler.endNonterminal('Encore', this.position);
        }
        if (!__ok && typeof this.eventHandler.abortNonterminal === 'function') {
          this.eventHandler.abortNonterminal('Encore', this.position);
        }
      }
    }
  }
}

module.exports = Parser;