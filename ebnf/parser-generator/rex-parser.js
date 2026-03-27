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
    const result = this.parseGrammar();
    if (this.peek().type !== 'EOF') {
      throw new Error(`Unexpected token at end: ${this.peek().type}`);
    }
    return result;
  }
  parseGrammar() {
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

  }
  parseProlog() {
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

  }
  parseProcessingInstruction() {
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

  }
  parseSyntaxDefinition() {
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

  }
  parseSyntaxProduction() {
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

  }
  parseSyntaxChoice() {
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

  }
  parseSyntaxSequence() {
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

  }
  parseSyntaxItem() {
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

  }
  parseSyntaxPrimary() {
        const _ruleStart = this.position;
    try {
    this.parseNameOrString();
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
    try {
    this.consume('TOKEN__28_');
    this.parseSyntaxChoice();
    this.consume('TOKEN__29_');
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
    try {
    this.parseProcessingInstruction();
      return;
    } catch (e) {
      this.position = _ruleStart;
      throw new Error(`Expected one of: 3 alternatives`);
    }

  }
  parseLexicalDefinition() {
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

  }
  parseLexicalProduction() {
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

  }
  parseContextChoice() {
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

  }
  parseLexicalChoice() {
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

  }
  parseContextExpression() {
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

  }
  parseLexicalSequence() {
        const _ruleStart = this.position;
    try {
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
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
      return;
    } catch (e) {
      this.position = _ruleStart;
      throw new Error(`Expected one of: 2 alternatives`);
    }

  }
  parseLexicalItem() {
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

  }
  parseLexicalPrimary() {
        const _ruleStart = this.position;
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
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
    try {
    this.consume('StringLiteral');
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
    try {
    this.consume('TOKEN__28_');
    this.parseLexicalChoice();
    this.consume('TOKEN__29_');
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
    try {
    this.consume('TOKEN__24_');
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
    try {
    this.consume('CharCode');
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
    try {
    this.parseCharClass();
      return;
    } catch (e) {
      this.position = _ruleStart;
      throw new Error(`Expected one of: 6 alternatives`);
    }

  }
  parseNameOrString() {
        const _ruleStart = this.position;
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
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
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
      return;
    } catch (e) {
      this.position = _ruleStart;
      throw new Error(`Expected one of: 2 alternatives`);
    }

  }
  parseContext() {
        this.consume('CaretName');

  }
  parseCharClass() {
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

  }
  parseOption() {
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

  }
  parsePreference() {
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

  }
  parseDelimiter() {
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

  }
  parseEquivalence() {
        this.consume('EquivalenceLookAhead');
    this.parseEquivalenceCharRange();
    this.consume('TOKEN__3D__3D_');
    this.parseEquivalenceCharRange();

  }
  parseEquivalenceCharRange() {
        const _ruleStart = this.position;
    try {
    this.consume('StringLiteral');
      return;
    } catch (e) {
      this.position = _ruleStart;
    }
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
      return;
    } catch (e) {
      this.position = _ruleStart;
      throw new Error(`Expected one of: 2 alternatives`);
    }

  }
  parseEncore() {
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

  }
}

module.exports = Parser;