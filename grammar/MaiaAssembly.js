// This file was generated on Fri Mar 13, 2026 13:51 (UTC-03) by REx v6.1 which is Copyright (c) 1979-2025 by Gunther Rademacher <grd@gmx.net>
// REx command line: MaiaAssembly.ebnf -javascript -tree -main -name MaiaAssembly

function MaiaAssembly(string, parsingEventHandler)
{
  init(string, parsingEventHandler);

  var thisParser = this;

  this.ParseException = function(b, e, s, o, x)
  {
    var begin = b;
    var end = e;
    var state = s;
    var offending = o;
    var expected = x;

    this.getBegin = function() {return begin;};
    this.getEnd = function() {return end;};
    this.getState = function() {return state;};
    this.getExpected = function() {return expected;};
    this.getOffending = function() {return offending;};
    this.isAmbiguousInput = function() {return false;};

    this.getMessage = function()
    {
      return offending < 0
           ? "lexical analysis failed"
           : "syntax error";
    };
  };

  function init(source, parsingEventHandler)
  {
    eventHandler = parsingEventHandler;
    input = source;
    size = source.length;
    reset(0, 0, 0);
  }

  this.getInput = function()
  {
    return input;
  };

  this.getTokenOffset = function()
  {
    return b0;
  };

  this.getTokenEnd = function()
  {
    return e0;
  };

  function reset(l, b, e)
  {
            b0 = b; e0 = b;
    l1 = l; b1 = b; e1 = e;
    l2 = 0; b2 = 0; e2 = 0;
    end = e;
    eventHandler.reset(input);
  }

  this.reset = function(l, b, e)
  {
    reset(l, b, e);
  };

  this.getOffendingToken = function(e)
  {
    var o = e.getOffending();
    return o >= 0 ? MaiaAssembly.TOKEN[o] : null;
  };

  this.getExpectedTokenSet = function(e)
  {
    var expected;
    if (e.getExpected() < 0)
    {
      expected = MaiaAssembly.getTokenSet(- e.getState());
    }
    else
    {
      expected = [MaiaAssembly.TOKEN[e.getExpected()]];
    }
    return expected;
  };

  this.getErrorMessage = function(e)
  {
    var message = e.getMessage();
    var found = this.getOffendingToken(e);
    var tokenSet = this.getExpectedTokenSet(e);
    var size = e.getEnd() - e.getBegin();
    message += (found == null ? "" : ", found " + found)
            + "\nwhile expecting "
            + (tokenSet.length == 1 ? tokenSet[0] : ("[" + tokenSet.join(", ") + "]"))
            + "\n"
            + (size == 0 || found != null ? "" : "after successfully scanning " + size + " characters beginning ");
    var prefix = input.substring(0, e.getBegin());
    var lines = prefix.split("\n");
    var line = lines.length;
    var column = lines[line - 1].length + 1;
    return message
         + "at line " + line + ", column " + column + ":\n..."
         + input.substring(e.getBegin(), Math.min(input.length, e.getBegin() + 64))
         + "...";
  };

  this.parse_maiaassembly = function()
  {
    eventHandler.startNonterminal("maiaassembly", e0);
    lookahead1W(22);                // eof | whitespace^token | 'module'
    switch (l1)
    {
    case 48:                        // 'module'
      parse_module();
      break;
    default:
      consume(1);                   // eof
    }
    eventHandler.endNonterminal("maiaassembly", e0);
  };

  this.parse_literalValue = function()
  {
    eventHandler.startNonterminal("literalValue", e0);
    lookahead1W(30);                // integer | float | whitespace^token
    switch (l1)
    {
    case 5:                         // integer
      consume(5);                   // integer
      break;
    default:
      consume(6);                   // float
    }
    eventHandler.endNonterminal("literalValue", e0);
  };

  function parse_module()
  {
    eventHandler.startNonterminal("module", e0);
    consume(48);                    // 'module'
    lookahead1W(29);                // identifier | whitespace^token | '{'
    if (l1 == 4)                    // identifier
    {
      consume(4);                   // identifier
    }
    lookahead1W(21);                // whitespace^token | '{'
    consume(57);                    // '{'
    for (;;)
    {
      lookahead1W(55);              // comment | whitespace^token | 'data' | 'elem' | 'export' | 'func' | 'global' |
                                    // 'import' | 'memory' | 'start' | 'table' | 'type' | '}'
      if (l1 == 58)                 // '}'
      {
        break;
      }
      whitespace();
      parse_moduleField();
    }
    consume(58);                    // '}'
    eventHandler.endNonterminal("module", e0);
  }

  function parse_moduleField()
  {
    eventHandler.startNonterminal("moduleField", e0);
    switch (l1)
    {
    case 55:                        // 'type'
      parse_typeDeclaration();
      break;
    case 42:                        // 'import'
      parse_importDeclaration();
      break;
    case 46:                        // 'memory'
      parse_memoryDeclaration();
      break;
    case 54:                        // 'table'
      parse_tableDeclaration();
      break;
    case 34:                        // 'global'
      parse_globalDeclaration();
      break;
    case 23:                        // 'data'
      parse_dataDeclaration();
      break;
    case 25:                        // 'elem'
      parse_elemDeclaration();
      break;
    case 33:                        // 'func'
      parse_functionDeclaration();
      break;
    case 27:                        // 'export'
      parse_exportDeclaration();
      break;
    case 53:                        // 'start'
      parse_startDeclaration();
      break;
    default:
      consume(8);                   // comment
    }
    eventHandler.endNonterminal("moduleField", e0);
  }

  function parse_typeDeclaration()
  {
    eventHandler.startNonterminal("typeDeclaration", e0);
    consume(55);                    // 'type'
    lookahead1W(2);                 // identifier | whitespace^token
    consume(4);                     // identifier
    lookahead1W(11);                // whitespace^token | '='
    consume(16);                    // '='
    lookahead1W(6);                 // whitespace^token | '('
    whitespace();
    parse_functionType();
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("typeDeclaration", e0);
  }

  function parse_functionType()
  {
    eventHandler.startNonterminal("functionType", e0);
    consume(10);                    // '('
    lookahead1W(23);                // valueType | whitespace^token | ')'
    if (l1 == 2)                    // valueType
    {
      whitespace();
      parse_typeList();
    }
    consume(11);                    // ')'
    lookahead1W(8);                 // whitespace^token | '->'
    consume(13);                    // '->'
    lookahead1W(37);                // valueType | whitespace^token | '(' | 'void'
    whitespace();
    parse_returnType();
    eventHandler.endNonterminal("functionType", e0);
  }

  function parse_returnType()
  {
    eventHandler.startNonterminal("returnType", e0);
    switch (l1)
    {
    case 56:                        // 'void'
      consume(56);                  // 'void'
      break;
    case 2:                         // valueType
      consume(2);                   // valueType
      break;
    default:
      consume(10);                  // '('
      lookahead1W(0);               // valueType | whitespace^token
      whitespace();
      parse_typeList();
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("returnType", e0);
  }

  function parse_typeList()
  {
    eventHandler.startNonterminal("typeList", e0);
    consume(2);                     // valueType
    for (;;)
    {
      lookahead1W(31);              // whitespace^token | ')' | ','
      if (l1 != 12)                 // ','
      {
        break;
      }
      consume(12);                  // ','
      lookahead1W(0);               // valueType | whitespace^token
      consume(2);                   // valueType
    }
    eventHandler.endNonterminal("typeList", e0);
  }

  function parse_importDeclaration()
  {
    eventHandler.startNonterminal("importDeclaration", e0);
    switch (l1)
    {
    case 42:                        // 'import'
      lookahead2W(44);              // whitespace^token | 'func' | 'global' | 'memory' | 'table'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 2154:                      // 'import' 'func'
      consume(42);                  // 'import'
      lookahead1W(16);              // whitespace^token | 'func'
      consume(33);                  // 'func'
      lookahead1W(2);               // identifier | whitespace^token
      consume(4);                   // identifier
      lookahead1W(15);              // whitespace^token | 'from'
      consume(32);                  // 'from'
      lookahead1W(5);               // string | whitespace^token
      consume(7);                   // string
      lookahead1W(6);               // whitespace^token | '('
      whitespace();
      parse_functionType();
      lookahead1W(10);              // whitespace^token | ';'
      consume(15);                  // ';'
      break;
    case 2986:                      // 'import' 'memory'
      consume(42);                  // 'import'
      lookahead1W(18);              // whitespace^token | 'memory'
      consume(46);                  // 'memory'
      lookahead1W(2);               // identifier | whitespace^token
      consume(4);                   // identifier
      lookahead1W(15);              // whitespace^token | 'from'
      consume(32);                  // 'from'
      lookahead1W(5);               // string | whitespace^token
      consume(7);                   // string
      lookahead1W(19);              // whitespace^token | 'min'
      whitespace();
      parse_memoryType();
      lookahead1W(10);              // whitespace^token | ';'
      consume(15);                  // ';'
      break;
    case 3498:                      // 'import' 'table'
      consume(42);                  // 'import'
      lookahead1W(20);              // whitespace^token | 'table'
      consume(54);                  // 'table'
      lookahead1W(2);               // identifier | whitespace^token
      consume(4);                   // identifier
      lookahead1W(15);              // whitespace^token | 'from'
      consume(32);                  // 'from'
      lookahead1W(5);               // string | whitespace^token
      consume(7);                   // string
      lookahead1W(19);              // whitespace^token | 'min'
      whitespace();
      parse_tableType();
      lookahead1W(10);              // whitespace^token | ';'
      consume(15);                  // ';'
      break;
    default:
      consume(42);                  // 'import'
      lookahead1W(17);              // whitespace^token | 'global'
      consume(34);                  // 'global'
      lookahead1W(2);               // identifier | whitespace^token
      consume(4);                   // identifier
      lookahead1W(15);              // whitespace^token | 'from'
      consume(32);                  // 'from'
      lookahead1W(5);               // string | whitespace^token
      consume(7);                   // string
      lookahead1W(24);              // valueType | whitespace^token | 'mut'
      whitespace();
      parse_globalType();
      lookahead1W(10);              // whitespace^token | ';'
      consume(15);                  // ';'
    }
    eventHandler.endNonterminal("importDeclaration", e0);
  }

  function parse_exportDeclaration()
  {
    eventHandler.startNonterminal("exportDeclaration", e0);
    consume(27);                    // 'export'
    lookahead1W(44);                // whitespace^token | 'func' | 'global' | 'memory' | 'table'
    whitespace();
    parse_exportKind();
    lookahead1W(2);                 // identifier | whitespace^token
    whitespace();
    parse_reference();
    lookahead1W(13);                // whitespace^token | 'as'
    consume(20);                    // 'as'
    lookahead1W(5);                 // string | whitespace^token
    consume(7);                     // string
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("exportDeclaration", e0);
  }

  function parse_exportKind()
  {
    eventHandler.startNonterminal("exportKind", e0);
    switch (l1)
    {
    case 33:                        // 'func'
      consume(33);                  // 'func'
      break;
    case 46:                        // 'memory'
      consume(46);                  // 'memory'
      break;
    case 54:                        // 'table'
      consume(54);                  // 'table'
      break;
    default:
      consume(34);                  // 'global'
    }
    eventHandler.endNonterminal("exportKind", e0);
  }

  function parse_startDeclaration()
  {
    eventHandler.startNonterminal("startDeclaration", e0);
    consume(53);                    // 'start'
    lookahead1W(2);                 // identifier | whitespace^token
    whitespace();
    parse_reference();
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("startDeclaration", e0);
  }

  function parse_memoryDeclaration()
  {
    eventHandler.startNonterminal("memoryDeclaration", e0);
    consume(46);                    // 'memory'
    lookahead1W(28);                // identifier | whitespace^token | 'min'
    if (l1 == 4)                    // identifier
    {
      consume(4);                   // identifier
    }
    lookahead1W(19);                // whitespace^token | 'min'
    whitespace();
    parse_memoryType();
    lookahead1W(33);                // whitespace^token | ';' | 'export'
    if (l1 == 27)                   // 'export'
    {
      consume(27);                  // 'export'
      lookahead1W(5);               // string | whitespace^token
      consume(7);                   // string
    }
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("memoryDeclaration", e0);
  }

  function parse_memoryType()
  {
    eventHandler.startNonterminal("memoryType", e0);
    consume(47);                    // 'min'
    lookahead1W(3);                 // integer | whitespace^token
    consume(5);                     // integer
    lookahead1W(41);                // whitespace^token | ';' | 'export' | 'max'
    if (l1 == 45)                   // 'max'
    {
      consume(45);                  // 'max'
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
    }
    eventHandler.endNonterminal("memoryType", e0);
  }

  function parse_tableDeclaration()
  {
    eventHandler.startNonterminal("tableDeclaration", e0);
    consume(54);                    // 'table'
    lookahead1W(28);                // identifier | whitespace^token | 'min'
    if (l1 == 4)                    // identifier
    {
      consume(4);                   // identifier
    }
    lookahead1W(19);                // whitespace^token | 'min'
    whitespace();
    parse_tableType();
    lookahead1W(33);                // whitespace^token | ';' | 'export'
    if (l1 == 27)                   // 'export'
    {
      consume(27);                  // 'export'
      lookahead1W(5);               // string | whitespace^token
      consume(7);                   // string
    }
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("tableDeclaration", e0);
  }

  function parse_tableType()
  {
    eventHandler.startNonterminal("tableType", e0);
    consume(47);                    // 'min'
    lookahead1W(3);                 // integer | whitespace^token
    consume(5);                     // integer
    lookahead1W(25);                // referenceType | whitespace^token | 'max'
    if (l1 == 45)                   // 'max'
    {
      consume(45);                  // 'max'
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
    }
    lookahead1W(1);                 // referenceType | whitespace^token
    consume(3);                     // referenceType
    eventHandler.endNonterminal("tableType", e0);
  }

  function parse_globalDeclaration()
  {
    eventHandler.startNonterminal("globalDeclaration", e0);
    consume(34);                    // 'global'
    lookahead1W(2);                 // identifier | whitespace^token
    consume(4);                     // identifier
    lookahead1W(24);                // valueType | whitespace^token | 'mut'
    whitespace();
    parse_globalType();
    lookahead1W(11);                // whitespace^token | '='
    consume(16);                    // '='
    lookahead1W(6);                 // whitespace^token | '('
    whitespace();
    parse_constExpression();
    lookahead1W(33);                // whitespace^token | ';' | 'export'
    if (l1 == 27)                   // 'export'
    {
      consume(27);                  // 'export'
      lookahead1W(5);               // string | whitespace^token
      consume(7);                   // string
    }
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("globalDeclaration", e0);
  }

  function parse_globalType()
  {
    eventHandler.startNonterminal("globalType", e0);
    switch (l1)
    {
    case 49:                        // 'mut'
      consume(49);                  // 'mut'
      lookahead1W(0);               // valueType | whitespace^token
      consume(2);                   // valueType
      break;
    default:
      consume(2);                   // valueType
    }
    eventHandler.endNonterminal("globalType", e0);
  }

  function parse_dataDeclaration()
  {
    eventHandler.startNonterminal("dataDeclaration", e0);
    consume(23);                    // 'data'
    lookahead1W(27);                // identifier | whitespace^token | 'at'
    if (l1 == 4)                    // identifier
    {
      consume(4);                   // identifier
    }
    lookahead1W(14);                // whitespace^token | 'at'
    consume(21);                    // 'at'
    lookahead1W(6);                 // whitespace^token | '('
    whitespace();
    parse_constExpression();
    lookahead1W(5);                 // string | whitespace^token
    consume(7);                     // string
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("dataDeclaration", e0);
  }

  function parse_elemDeclaration()
  {
    eventHandler.startNonterminal("elemDeclaration", e0);
    consume(25);                    // 'elem'
    lookahead1W(38);                // identifier | whitespace^token | 'at' | 'table'
    if (l1 == 4)                    // identifier
    {
      consume(4);                   // identifier
    }
    lookahead1W(34);                // whitespace^token | 'at' | 'table'
    if (l1 == 54)                   // 'table'
    {
      consume(54);                  // 'table'
      lookahead1W(2);               // identifier | whitespace^token
      whitespace();
      parse_reference();
    }
    lookahead1W(14);                // whitespace^token | 'at'
    consume(21);                    // 'at'
    lookahead1W(6);                 // whitespace^token | '('
    whitespace();
    parse_constExpression();
    lookahead1W(16);                // whitespace^token | 'func'
    consume(33);                    // 'func'
    lookahead1W(12);                // whitespace^token | '['
    consume(17);                    // '['
    lookahead1W(26);                // identifier | whitespace^token | ']'
    if (l1 == 4)                    // identifier
    {
      whitespace();
      parse_referenceList();
    }
    consume(18);                    // ']'
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("elemDeclaration", e0);
  }

  function parse_referenceList()
  {
    eventHandler.startNonterminal("referenceList", e0);
    parse_reference();
    for (;;)
    {
      lookahead1W(32);              // whitespace^token | ',' | ']'
      if (l1 != 12)                 // ','
      {
        break;
      }
      consume(12);                  // ','
      lookahead1W(2);               // identifier | whitespace^token
      whitespace();
      parse_reference();
    }
    eventHandler.endNonterminal("referenceList", e0);
  }

  function parse_functionDeclaration()
  {
    eventHandler.startNonterminal("functionDeclaration", e0);
    consume(33);                    // 'func'
    lookahead1W(47);                // identifier | whitespace^token | 'export' | 'params' | 'result' | 'type' | '{'
    if (l1 == 4)                    // identifier
    {
      consume(4);                   // identifier
    }
    lookahead1W(45);                // whitespace^token | 'export' | 'params' | 'result' | 'type' | '{'
    if (l1 == 51)                   // 'params'
    {
      whitespace();
      parse_parameterSection();
    }
    lookahead1W(43);                // whitespace^token | 'export' | 'result' | 'type' | '{'
    if (l1 == 52)                   // 'result'
    {
      whitespace();
      parse_resultSection();
    }
    lookahead1W(42);                // whitespace^token | 'export' | 'type' | '{'
    if (l1 == 55)                   // 'type'
    {
      whitespace();
      parse_typeUse();
    }
    lookahead1W(35);                // whitespace^token | 'export' | '{'
    if (l1 == 27)                   // 'export'
    {
      whitespace();
      parse_inlineExport();
    }
    lookahead1W(21);                // whitespace^token | '{'
    consume(57);                    // '{'
    for (;;)
    {
      lookahead1W(49);              // identifier | comment | whitespace^token | 'block' | 'if' | 'local' | 'loop' | '}'
      if (l1 != 43)                 // 'local'
      {
        break;
      }
      whitespace();
      parse_localDeclaration();
    }
    for (;;)
    {
      lookahead1W(46);              // identifier | comment | whitespace^token | 'block' | 'if' | 'loop' | '}'
      if (l1 == 58)                 // '}'
      {
        break;
      }
      whitespace();
      parse_instruction();
    }
    consume(58);                    // '}'
    eventHandler.endNonterminal("functionDeclaration", e0);
  }

  function parse_parameterSection()
  {
    eventHandler.startNonterminal("parameterSection", e0);
    consume(51);                    // 'params'
    lookahead1W(6);                 // whitespace^token | '('
    consume(10);                    // '('
    lookahead1W(2);                 // identifier | whitespace^token
    whitespace();
    parse_parameterDeclaration();
    for (;;)
    {
      lookahead1W(31);              // whitespace^token | ')' | ','
      if (l1 != 12)                 // ','
      {
        break;
      }
      consume(12);                  // ','
      lookahead1W(2);               // identifier | whitespace^token
      whitespace();
      parse_parameterDeclaration();
    }
    consume(11);                    // ')'
    eventHandler.endNonterminal("parameterSection", e0);
  }

  function parse_parameterDeclaration()
  {
    eventHandler.startNonterminal("parameterDeclaration", e0);
    consume(4);                     // identifier
    lookahead1W(9);                 // whitespace^token | ':'
    consume(14);                    // ':'
    lookahead1W(0);                 // valueType | whitespace^token
    consume(2);                     // valueType
    eventHandler.endNonterminal("parameterDeclaration", e0);
  }

  function parse_resultSection()
  {
    eventHandler.startNonterminal("resultSection", e0);
    consume(52);                    // 'result'
    lookahead1W(37);                // valueType | whitespace^token | '(' | 'void'
    whitespace();
    parse_returnType();
    eventHandler.endNonterminal("resultSection", e0);
  }

  function parse_typeUse()
  {
    eventHandler.startNonterminal("typeUse", e0);
    consume(55);                    // 'type'
    lookahead1W(2);                 // identifier | whitespace^token
    whitespace();
    parse_reference();
    eventHandler.endNonterminal("typeUse", e0);
  }

  function parse_inlineExport()
  {
    eventHandler.startNonterminal("inlineExport", e0);
    consume(27);                    // 'export'
    lookahead1W(5);                 // string | whitespace^token
    consume(7);                     // string
    eventHandler.endNonterminal("inlineExport", e0);
  }

  function parse_localDeclaration()
  {
    eventHandler.startNonterminal("localDeclaration", e0);
    consume(43);                    // 'local'
    lookahead1W(2);                 // identifier | whitespace^token
    consume(4);                     // identifier
    lookahead1W(9);                 // whitespace^token | ':'
    consume(14);                    // ':'
    lookahead1W(0);                 // valueType | whitespace^token
    consume(2);                     // valueType
    lookahead1W(10);                // whitespace^token | ';'
    consume(15);                    // ';'
    eventHandler.endNonterminal("localDeclaration", e0);
  }

  function parse_instruction()
  {
    eventHandler.startNonterminal("instruction", e0);
    switch (l1)
    {
    case 4:                         // identifier
      parse_operationInstruction();
      break;
    case 8:                         // comment
      consume(8);                   // comment
      break;
    default:
      parse_controlInstruction();
    }
    eventHandler.endNonterminal("instruction", e0);
  }

  function parse_controlInstruction()
  {
    eventHandler.startNonterminal("controlInstruction", e0);
    switch (l1)
    {
    case 22:                        // 'block'
      parse_blockInstruction();
      break;
    case 44:                        // 'loop'
      parse_loopInstruction();
      break;
    default:
      parse_ifInstruction();
    }
    eventHandler.endNonterminal("controlInstruction", e0);
  }

  function parse_blockInstruction()
  {
    eventHandler.startNonterminal("blockInstruction", e0);
    consume(22);                    // 'block'
    lookahead1W(39);                // identifier | whitespace^token | 'result' | '{'
    if (l1 == 4)                    // identifier
    {
      whitespace();
      parse_label();
    }
    lookahead1W(36);                // whitespace^token | 'result' | '{'
    if (l1 == 52)                   // 'result'
    {
      whitespace();
      parse_resultAnnotation();
    }
    lookahead1W(21);                // whitespace^token | '{'
    consume(57);                    // '{'
    for (;;)
    {
      lookahead1W(46);              // identifier | comment | whitespace^token | 'block' | 'if' | 'loop' | '}'
      if (l1 == 58)                 // '}'
      {
        break;
      }
      whitespace();
      parse_instruction();
    }
    consume(58);                    // '}'
    eventHandler.endNonterminal("blockInstruction", e0);
  }

  function parse_loopInstruction()
  {
    eventHandler.startNonterminal("loopInstruction", e0);
    consume(44);                    // 'loop'
    lookahead1W(39);                // identifier | whitespace^token | 'result' | '{'
    if (l1 == 4)                    // identifier
    {
      whitespace();
      parse_label();
    }
    lookahead1W(36);                // whitespace^token | 'result' | '{'
    if (l1 == 52)                   // 'result'
    {
      whitespace();
      parse_resultAnnotation();
    }
    lookahead1W(21);                // whitespace^token | '{'
    consume(57);                    // '{'
    for (;;)
    {
      lookahead1W(46);              // identifier | comment | whitespace^token | 'block' | 'if' | 'loop' | '}'
      if (l1 == 58)                 // '}'
      {
        break;
      }
      whitespace();
      parse_instruction();
    }
    consume(58);                    // '}'
    eventHandler.endNonterminal("loopInstruction", e0);
  }

  function parse_ifInstruction()
  {
    eventHandler.startNonterminal("ifInstruction", e0);
    consume(41);                    // 'if'
    lookahead1W(36);                // whitespace^token | 'result' | '{'
    if (l1 == 52)                   // 'result'
    {
      whitespace();
      parse_resultAnnotation();
    }
    lookahead1W(21);                // whitespace^token | '{'
    consume(57);                    // '{'
    for (;;)
    {
      lookahead1W(46);              // identifier | comment | whitespace^token | 'block' | 'if' | 'loop' | '}'
      if (l1 == 58)                 // '}'
      {
        break;
      }
      whitespace();
      parse_instruction();
    }
    consume(58);                    // '}'
    lookahead1W(48);                // identifier | comment | whitespace^token | 'block' | 'else' | 'if' | 'loop' | '}'
    if (l1 == 26)                   // 'else'
    {
      consume(26);                  // 'else'
      lookahead1W(21);              // whitespace^token | '{'
      consume(57);                  // '{'
      for (;;)
      {
        lookahead1W(46);            // identifier | comment | whitespace^token | 'block' | 'if' | 'loop' | '}'
        if (l1 == 58)               // '}'
        {
          break;
        }
        whitespace();
        parse_instruction();
      }
      consume(58);                  // '}'
    }
    eventHandler.endNonterminal("ifInstruction", e0);
  }

  function parse_resultAnnotation()
  {
    eventHandler.startNonterminal("resultAnnotation", e0);
    consume(52);                    // 'result'
    lookahead1W(0);                 // valueType | whitespace^token
    consume(2);                     // valueType
    eventHandler.endNonterminal("resultAnnotation", e0);
  }

  function parse_label()
  {
    eventHandler.startNonterminal("label", e0);
    consume(4);                     // identifier
    eventHandler.endNonterminal("label", e0);
  }

  function parse_operationInstruction()
  {
    eventHandler.startNonterminal("operationInstruction", e0);
    parse_opcode();
    for (;;)
    {
      lookahead1W(52);              // identifier | integer | float | string | whitespace^token | '(' | ';' | '[' |
                                    // 'align' | 'default' | 'offset'
      if (l1 == 15)                 // ';'
      {
        break;
      }
      whitespace();
      parse_operand();
    }
    consume(15);                    // ';'
    eventHandler.endNonterminal("operationInstruction", e0);
  }

  function parse_opcode()
  {
    eventHandler.startNonterminal("opcode", e0);
    consume(4);                     // identifier
    eventHandler.endNonterminal("opcode", e0);
  }

  function parse_operand()
  {
    eventHandler.startNonterminal("operand", e0);
    switch (l1)
    {
    case 4:                         // identifier
      parse_reference();
      break;
    case 5:                         // integer
      consume(5);                   // integer
      break;
    case 6:                         // float
      consume(6);                   // float
      break;
    case 7:                         // string
      consume(7);                   // string
      break;
    case 24:                        // 'default'
      consume(24);                  // 'default'
      break;
    case 17:                        // '['
      consume(17);                  // '['
      lookahead1W(53);              // identifier | integer | float | string | whitespace^token | '(' | '[' | ']' |
                                    // 'align' | 'default' | 'offset'
      if (l1 != 18)                 // ']'
      {
        whitespace();
        parse_operandList();
      }
      consume(18);                  // ']'
      break;
    case 10:                        // '('
      consume(10);                  // '('
      lookahead1W(51);              // identifier | integer | float | string | whitespace^token | '(' | ')' | '[' |
                                    // 'align' | 'default' | 'offset'
      if (l1 != 11)                 // ')'
      {
        whitespace();
        parse_operandList();
      }
      consume(11);                  // ')'
      break;
    default:
      parse_memoryArgument();
    }
    eventHandler.endNonterminal("operand", e0);
  }

  function parse_memoryArgument()
  {
    eventHandler.startNonterminal("memoryArgument", e0);
    switch (l1)
    {
    case 50:                        // 'offset'
      consume(50);                  // 'offset'
      lookahead1W(11);              // whitespace^token | '='
      consume(16);                  // '='
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
      break;
    default:
      consume(19);                  // 'align'
      lookahead1W(11);              // whitespace^token | '='
      consume(16);                  // '='
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
    }
    eventHandler.endNonterminal("memoryArgument", e0);
  }

  function parse_operandList()
  {
    eventHandler.startNonterminal("operandList", e0);
    parse_operand();
    for (;;)
    {
      lookahead1W(40);              // whitespace^token | ')' | ',' | ']'
      if (l1 != 12)                 // ','
      {
        break;
      }
      consume(12);                  // ','
      lookahead1W(50);              // identifier | integer | float | string | whitespace^token | '(' | '[' | 'align' |
                                    // 'default' | 'offset'
      whitespace();
      parse_operand();
    }
    eventHandler.endNonterminal("operandList", e0);
  }

  function parse_constExpression()
  {
    eventHandler.startNonterminal("constExpression", e0);
    consume(10);                    // '('
    lookahead1W(54);                // whitespace^token | 'f32.const' | 'f32_const' | 'f64.const' | 'f64_const' |
                                    // 'global.get' | 'global_get' | 'i32.const' | 'i32_const' | 'i64.const' |
                                    // 'i64_const'
    whitespace();
    parse_constExpressionCore();
    lookahead1W(7);                 // whitespace^token | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("constExpression", e0);
  }

  function parse_constExpressionCore()
  {
    eventHandler.startNonterminal("constExpressionCore", e0);
    switch (l1)
    {
    case 37:                        // 'i32.const'
      consume(37);                  // 'i32.const'
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
      break;
    case 39:                        // 'i64.const'
      consume(39);                  // 'i64.const'
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
      break;
    case 28:                        // 'f32.const'
      consume(28);                  // 'f32.const'
      lookahead1W(4);               // float | whitespace^token
      consume(6);                   // float
      break;
    case 30:                        // 'f64.const'
      consume(30);                  // 'f64.const'
      lookahead1W(4);               // float | whitespace^token
      consume(6);                   // float
      break;
    case 38:                        // 'i32_const'
      consume(38);                  // 'i32_const'
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
      break;
    case 40:                        // 'i64_const'
      consume(40);                  // 'i64_const'
      lookahead1W(3);               // integer | whitespace^token
      consume(5);                   // integer
      break;
    case 29:                        // 'f32_const'
      consume(29);                  // 'f32_const'
      lookahead1W(4);               // float | whitespace^token
      consume(6);                   // float
      break;
    case 31:                        // 'f64_const'
      consume(31);                  // 'f64_const'
      lookahead1W(4);               // float | whitespace^token
      consume(6);                   // float
      break;
    case 35:                        // 'global.get'
      consume(35);                  // 'global.get'
      lookahead1W(2);               // identifier | whitespace^token
      whitespace();
      parse_reference();
      break;
    default:
      consume(36);                  // 'global_get'
      lookahead1W(2);               // identifier | whitespace^token
      whitespace();
      parse_reference();
    }
    eventHandler.endNonterminal("constExpressionCore", e0);
  }

  function parse_reference()
  {
    eventHandler.startNonterminal("reference", e0);
    consume(4);                     // identifier
    eventHandler.endNonterminal("reference", e0);
  }

  function consume(t)
  {
    if (l1 == t)
    {
      whitespace();
      eventHandler.terminal(MaiaAssembly.TOKEN[l1], b1, e1);
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = 0; }
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function whitespace()
  {
    if (e0 != b1)
    {
      eventHandler.whitespace(e0, b1);
      e0 = b1;
    }
  }

  function matchW(tokenSetId)
  {
    var code;
    for (;;)
    {
      code = match(tokenSetId);
      if (code != 9)                // whitespace^token
      {
        break;
      }
    }
    return code;
  }

  function lookahead1W(tokenSetId)
  {
    if (l1 == 0)
    {
      l1 = matchW(tokenSetId);
      b1 = begin;
      e1 = end;
    }
  }

  function lookahead2W(tokenSetId)
  {
    if (l2 == 0)
    {
      l2 = matchW(tokenSetId);
      b2 = begin;
      e2 = end;
    }
    lk = (l2 << 6) | l1;
  }

  function error(b, e, s, l, t)
  {
    throw new thisParser.ParseException(b, e, s, l, t);
  }

  var lk, b0, e0;
  var l1, b1, e1;
  var l2, b2, e2;
  var eventHandler;

  var input;
  var size;

  var begin;
  var end;

  function match(tokenSetId)
  {
    begin = end;
    var current = end;
    var result = MaiaAssembly.INITIAL[tokenSetId];
    var state = 0;

    for (var code = result & 511; code != 0; )
    {
      var charclass;
      var c0 = current < size ? input.charCodeAt(current) : 0;
      ++current;
      if (c0 < 0x80)
      {
        charclass = MaiaAssembly.MAP0[c0];
      }
      else if (c0 < 0xd800)
      {
        var c1 = c0 >> 5;
        charclass = MaiaAssembly.MAP1[(c0 & 31) + MaiaAssembly.MAP1[(c1 & 31) + MaiaAssembly.MAP1[c1 >> 5]]];
      }
      else
      {
        if (c0 < 0xdc00)
        {
          var c1 = current < size ? input.charCodeAt(current) : 0;
          if (c1 >= 0xdc00 && c1 < 0xe000)
          {
            ++current;
            c0 = ((c0 & 0x3ff) << 10) + (c1 & 0x3ff) + 0x10000;
          }
        }

        var lo = 0, hi = 1;
        for (var m = 1; ; m = (hi + lo) >> 1)
        {
          if (MaiaAssembly.MAP2[m] > c0) hi = m - 1;
          else if (MaiaAssembly.MAP2[2 + m] < c0) lo = m + 1;
          else {charclass = MaiaAssembly.MAP2[4 + m]; break;}
          if (lo > hi) {charclass = 0; break;}
        }
      }

      state = code;
      var i0 = (charclass << 9) + code - 1;
      code = MaiaAssembly.TRANSITION[(i0 & 15) + MaiaAssembly.TRANSITION[i0 >> 4]];

      if (code > 511)
      {
        result = code;
        code &= 511;
        end = current;
      }
    }

    result >>= 9;
    if (result == 0)
    {
      end = current - 1;
      var c1 = end < size ? input.charCodeAt(end) : 0;
      if (c1 >= 0xdc00 && c1 < 0xe000) --end;
      return error(begin, end, state, -1, -1);
    }

    if (end > size) end = size;
    return (result & 63) - 1;
  }

}

MaiaAssembly.XmlSerializer = function(log, indent)
{
  var input = null;
  var delayedTag = null;
  var hasChildElement = false;
  var depth = 0;

  this.reset = function(string)
  {
    log("<?xml version=\"1.0\" encoding=\"UTF-8\"?" + ">");
    input = string;
    delayedTag = null;
    hasChildElement = false;
    depth = 0;
  };

  this.startNonterminal = function(tag, begin)
  {
    if (delayedTag != null)
    {
      log("<");
      log(delayedTag);
      log(">");
    }
    delayedTag = tag;
    if (indent)
    {
      log("\n");
      for (var i = 0; i < depth; ++i)
      {
        log("  ");
      }
    }
    hasChildElement = false;
    ++depth;
  };

  this.endNonterminal = function(tag, end)
  {
    --depth;
    if (delayedTag != null)
    {
      delayedTag = null;
      log("<");
      log(tag);
      log("/>");
    }
    else
    {
      if (indent)
      {
        if (hasChildElement)
        {
          log("\n");
          for (var i = 0; i < depth; ++i)
          {
            log("  ");
          }
        }
      }
      log("</");
      log(tag);
      log(">");
    }
    hasChildElement = true;
  };

  this.terminal = function(tag, begin, end)
  {
    if (tag.charAt(0) == '\'') tag = "TOKEN";
    this.startNonterminal(tag, begin);
    characters(begin, end);
    this.endNonterminal(tag, end);
  };

  this.whitespace = function(begin, end)
  {
    characters(begin, end);
  };

  function characters(begin, end)
  {
    if (begin < end)
    {
      if (delayedTag != null)
      {
        log("<");
        log(delayedTag);
        log(">");
        delayedTag = null;
      }
      log(input.substring(begin, end)
               .replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;"));
    }
  }
};

MaiaAssembly.getTokenSet = function(tokenSetId)
{
  var set = [];
  var s = tokenSetId < 0 ? - tokenSetId : MaiaAssembly.INITIAL[tokenSetId] & 511;
  for (var i = 0; i < 59; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 362 + s - 1;
    var f = MaiaAssembly.EXPECTED[(i0 & 3) + MaiaAssembly.EXPECTED[i0 >> 2]];
    for ( ; f != 0; f >>>= 1, ++j)
    {
      if ((f & 1) != 0)
      {
        set.push(MaiaAssembly.TOKEN[j]);
      }
    }
  }
  return set;
};

MaiaAssembly.TopDownTreeBuilder = function()
{
  var input = null;
  var stack = null;

  this.reset = function(i)
  {
    input = i;
    stack = [];
  };

  this.startNonterminal = function(name, begin)
  {
    var nonterminal = new MaiaAssembly.Nonterminal(name, begin, begin, []);
    if (stack.length > 0) addChild(nonterminal);
    stack.push(nonterminal);
  };

  this.endNonterminal = function(name, end)
  {
    stack[stack.length - 1].end = end;
    if (stack.length > 1) stack.pop();
  };

  this.terminal = function(name, begin, end)
  {
    addChild(new MaiaAssembly.Terminal(name, begin, end));
  };

  this.whitespace = function(begin, end)
  {
  };

  function addChild(s)
  {
    var current = stack[stack.length - 1];
    current.children.push(s);
  }

  this.serialize = function(e)
  {
    e.reset(input);
    stack[0].send(e);
  };
};

MaiaAssembly.Terminal = function(name, begin, end)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.terminal(name, begin, end);
  };
};

MaiaAssembly.Nonterminal = function(name, begin, end, children)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.startNonterminal(name, begin);
    var pos = begin;
    children.forEach
    (
      function(c)
      {
        if (pos < c.begin) e.whitespace(pos, c.begin);
        c.send(e);
        pos = c.end;
      }
    );
    if (pos < end) e.whitespace(pos, end);
    e.endNonterminal(name, end);
  };
};

MaiaAssembly.MAP0 =
[
  /*   0 */ 54, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 5,
  /*  36 */ 6, 3, 3, 3, 7, 8, 3, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 14, 19, 14, 20, 14, 21, 22, 3, 23, 24, 3, 3, 6,
  /*  66 */ 6, 6, 6, 25, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 26, 27, 28, 3, 29, 3, 30, 31,
  /*  99 */ 32, 33, 34, 35, 36, 6, 37, 6, 38, 39, 40, 41, 42, 43, 6, 44, 45, 46, 47, 48, 6, 49, 50, 6, 51, 3, 52, 3, 3
];

MaiaAssembly.MAP1 =
[
  /*   0 */ 54, 87, 87, 87, 87, 87, 87, 87, 85, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,
  /*  27 */ 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,
  /*  54 */ 119, 151, 182, 214, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254,
  /*  75 */ 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 244, 254, 254, 254, 254, 254, 254, 254, 254, 254,
  /*  96 */ 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254,
  /* 117 */ 254, 254, 54, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 151 */ 1, 3, 4, 5, 6, 3, 3, 3, 7, 8, 3, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 14, 19, 14, 20, 14, 21, 22, 3, 23,
  /* 181 */ 24, 3, 6, 6, 6, 6, 25, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 26, 27, 28, 3, 29, 3,
  /* 215 */ 30, 31, 32, 33, 34, 35, 36, 6, 37, 6, 38, 39, 40, 41, 42, 43, 6, 44, 45, 46, 47, 48, 6, 49, 50, 6, 51, 3,
  /* 243 */ 52, 3, 3, 3, 3, 3, 3, 3, 3, 53, 53, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  /* 278 */ 3, 3, 3, 3, 3, 3, 3, 3
];

MaiaAssembly.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 3, 3
];

MaiaAssembly.INITIAL =
[
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  /* 29 */ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56
];

MaiaAssembly.TRANSITION =
[
  /*    0 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*   18 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1760, 1760, 1760, 1767,
  /*   36 */ 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*   54 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1760, 1760, 1760, 1767, 1913, 4435, 1913, 1913,
  /*   72 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*   90 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913,
  /*  108 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  126 */ 1913, 1913, 4432, 1913, 1913, 1783, 1913, 1805, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  144 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  162 */ 2946, 1824, 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  180 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895, 4528, 5138, 4698, 1848,
  /*  198 */ 2999, 5137, 4766, 4697, 1851, 5130, 1893, 4697, 4522, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913,
  /*  216 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2808, 1913, 2809, 1867, 1913, 4435, 4485, 1913, 1913, 1913,
  /*  234 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  252 */ 1913, 1913, 1913, 1913, 1941, 3703, 1940, 1889, 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  270 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  288 */ 1913, 1913, 1913, 1913, 1913, 4435, 4485, 1913, 1913, 1913, 1911, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  306 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4438, 1931, 1913,
  /*  324 */ 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  342 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1957, 1808, 1913, 1982, 1913, 4435, 4485, 1913,
  /*  360 */ 1913, 1913, 1911, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  378 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1914, 4698, 2004, 3904, 5137, 4766, 4697, 1851, 5130,
  /*  396 */ 1893, 4697, 4522, 4772, 2308, 3220, 1915, 3969, 2176, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  414 */ 1913, 1913, 1913, 1913, 2157, 2023, 1913, 4435, 4660, 1913, 1913, 1913, 4435, 1913, 1913, 1913, 1913, 1913,
  /*  432 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2047, 2636,
  /*  450 */ 1913, 2068, 2343, 2092, 2111, 5137, 4766, 4697, 2144, 5130, 1893, 4697, 2173, 5134, 2308, 3220, 1915, 3969,
  /*  468 */ 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2047, 2636, 1913, 2192, 2128, 2092,
  /*  486 */ 2247, 5137, 4766, 4697, 2144, 5130, 1893, 4697, 2173, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913,
  /*  504 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2047, 2636, 1913, 2068, 2343, 2092, 2111, 5137, 2275, 2693,
  /*  522 */ 2144, 5491, 2303, 4697, 2173, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  540 */ 1913, 1913, 1913, 1913, 2047, 2636, 1913, 2324, 4729, 2092, 2359, 4602, 4766, 4697, 2144, 5130, 1893, 4697,
  /*  558 */ 2173, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  576 */ 2047, 2636, 1913, 2068, 2343, 2092, 2111, 5137, 2425, 4697, 2144, 2409, 2451, 4697, 2173, 5134, 2308, 3220,
  /*  594 */ 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2047, 2636, 1913, 2472,
  /*  612 */ 5029, 2092, 2506, 5380, 4766, 4697, 2144, 5130, 1893, 4697, 2173, 5134, 2308, 3220, 1915, 3969, 4525, 1913,
  /*  630 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2047, 2636, 1913, 2068, 2343, 2092, 2111, 5137,
  /*  648 */ 4766, 4697, 2144, 5130, 3018, 4073, 2173, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913,
  /*  666 */ 1913, 1913, 1913, 1913, 1913, 1913, 5328, 1913, 1913, 1913, 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913,
  /*  684 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  702 */ 1913, 1913, 4853, 1913, 2546, 2551, 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  720 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2556, 1913,
  /*  738 */ 1913, 1913, 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  756 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2572,
  /*  774 */ 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  792 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895, 4528, 5138, 4698, 2592, 4572, 5137, 4766, 4697,
  /*  810 */ 1851, 5130, 1893, 4697, 2487, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  828 */ 1913, 1913, 1913, 1913, 3430, 1913, 1913, 2611, 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  846 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  864 */ 1913, 1913, 1913, 1913, 1913, 2633, 4485, 1913, 1913, 1913, 4435, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  882 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4982, 2652, 2655,
  /*  900 */ 1913, 4435, 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  918 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895, 4528, 5138, 4698, 1848, 2999, 5137,
  /*  936 */ 4766, 4697, 1851, 5130, 1893, 4697, 4522, 4231, 2308, 3220, 1915, 3969, 2490, 1913, 1913, 1913, 1913, 1913,
  /*  954 */ 1913, 1913, 1913, 1913, 1913, 1913, 2671, 1873, 2709, 2723, 2748, 2778, 2825, 2864, 4766, 4584, 1851, 5130,
  /*  972 */ 2890, 4262, 4307, 2906, 2456, 3220, 2922, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /*  990 */ 1913, 1913, 2943, 1988, 5408, 2962, 4698, 1848, 2999, 5137, 4766, 2259, 2987, 3034, 1893, 4691, 5118, 3038,
  /* 1008 */ 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895,
  /* 1026 */ 4528, 5138, 4698, 1848, 2999, 5137, 4766, 4694, 1851, 2397, 1832, 2123, 5479, 3054, 2308, 3292, 3079, 3969,
  /* 1044 */ 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 3103, 2617, 4149, 3122, 4698, 1848,
  /* 1062 */ 2999, 5137, 4766, 4224, 3665, 5130, 1893, 4697, 3147, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913,
  /* 1080 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 3175, 1966, 3194, 3210, 3245, 3282, 3308, 4516, 3087, 4697,
  /* 1098 */ 1851, 3808, 5439, 2339, 2793, 3346, 4375, 3371, 2052, 4905, 4525, 1913, 3426, 1913, 1913, 1913, 1913, 1913,
  /* 1116 */ 1913, 1913, 1913, 1913, 3446, 3462, 3386, 3400, 3330, 1848, 3944, 3658, 2971, 5371, 3516, 3159, 1893, 4697,
  /* 1134 */ 4522, 5134, 2308, 3220, 1915, 3969, 4628, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1152 */ 3544, 3565, 3476, 3490, 4698, 1848, 2999, 5137, 4766, 4697, 1851, 5130, 2576, 4697, 4522, 2520, 2308, 3220,
  /* 1170 */ 1915, 3969, 4525, 5531, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 3595, 2530, 4104, 3617,
  /* 1188 */ 2231, 3643, 3681, 5137, 2686, 4326, 2007, 3820, 1893, 4697, 4522, 5134, 2308, 3220, 1915, 3969, 4525, 1913,
  /* 1206 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895, 4528, 5138, 4698, 1848, 2999, 5137,
  /* 1224 */ 4766, 4697, 1851, 5130, 1893, 4697, 4522, 5134, 4877, 3627, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913,
  /* 1242 */ 1913, 1913, 1913, 1913, 1913, 1913, 3719, 3601, 3579, 3741, 3782, 3767, 4354, 3855, 4766, 4697, 1851, 5130,
  /* 1260 */ 1893, 4056, 3355, 5134, 2076, 3890, 1915, 3932, 3960, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1278 */ 1913, 1913, 3985, 4007, 4021, 4035, 4558, 1848, 3528, 3839, 4766, 4051, 5186, 5130, 1893, 4072, 3796, 5134,
  /* 1296 */ 4089, 3751, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895,
  /* 1314 */ 4528, 5138, 4698, 1848, 2999, 5137, 4120, 2433, 4136, 5130, 1893, 4697, 4522, 5134, 2308, 3500, 1789, 3969,
  /* 1332 */ 2927, 4165, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4187, 3725, 4946, 4960, 5305, 4209,
  /* 1350 */ 4247, 4301, 3131, 4323, 4342, 2385, 4370, 4593, 4638, 4391, 4417, 3220, 1915, 4463, 4454, 1913, 1913, 1913,
  /* 1368 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4479, 3991, 5074, 4501, 4698, 1848, 2999, 5137, 5160, 4544,
  /* 1386 */ 2595, 2373, 4760, 2431, 4522, 4618, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1404 */ 1913, 1913, 1913, 1913, 4654, 4171, 5217, 4676, 5248, 4714, 2999, 5137, 4766, 3320, 3516, 3258, 1893, 2848,
  /* 1422 */ 4522, 5134, 4745, 4788, 2031, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1440 */ 4847, 4193, 4817, 4831, 2287, 4869, 2999, 3011, 2732, 2837, 2095, 4893, 1893, 4274, 4522, 3693, 2308, 3220,
  /* 1458 */ 1915, 2207, 4525, 4932, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4976, 5060, 4998, 5014,
  /* 1476 */ 5045, 5090, 2999, 3916, 5359, 2431, 5106, 3832, 5154, 4697, 4522, 5134, 2308, 3220, 3874, 4916, 2879, 3106,
  /* 1494 */ 5176, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895, 4528, 3266, 5202, 5233, 5293, 5137,
  /* 1512 */ 4766, 4697, 1851, 5130, 1893, 5451, 3063, 5134, 2308, 3410, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913,
  /* 1530 */ 1913, 1913, 1913, 1913, 1913, 1913, 5321, 4401, 5263, 5277, 4698, 1848, 2999, 5137, 4766, 4697, 1851, 5130,
  /* 1548 */ 1893, 4697, 4522, 5134, 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1566 */ 1913, 1913, 2154, 1895, 4528, 3229, 5344, 1848, 2762, 5396, 4766, 2435, 3549, 5130, 1893, 4697, 4522, 5134,
  /* 1584 */ 2308, 3220, 1915, 3969, 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 2154, 1895,
  /* 1602 */ 4528, 5138, 4285, 1848, 2219, 5424, 4766, 4697, 1851, 5130, 1893, 4697, 4522, 5134, 2308, 3220, 1915, 5467,
  /* 1620 */ 4525, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4803, 5507, 1913, 1913, 4435,
  /* 1638 */ 4485, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1656 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 3178, 5523, 1913, 4435, 4485, 1913, 1913, 1913,
  /* 1674 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1692 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 4435, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1710 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1728 */ 1913, 3867, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913,
  /* 1746 */ 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 1913, 5177, 5177, 5177, 5177,
  /* 1764 */ 5177, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 83,
  /* 1787 */ 83, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 261, 0, 263, 0, 2826, 2624, 0, 0, 4179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 1818 */ 0, 0, 0, 0, 98, 0, 4715, 4715, 0, 0, 0, 0, 0, 4715, 0, 0, 0, 0, 0, 0, 0, 0, 261, 0, 0, 263, 2624, 2824,
  /* 1846 */ 2624, 2624, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 0, 0, 0, 0, 0, 5632, 5632, 5632, 5632, 0,
  /* 1874 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2625, 2656, 2625, 2625, 0, 0, 0, 0, 0, 6144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 1905 */ 2624, 2624, 2624, 2624, 0, 0, 0, 227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 6656, 0,
  /* 1933 */ 0, 0, 0, 0, 0, 0, 6656, 0, 0, 0, 0, 0, 0, 0, 0, 6144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 81, 0, 0, 0, 84,
  /* 1966 */ 0, 0, 0, 0, 0, 0, 0, 58, 58, 62, 2628, 2628, 2628, 2628, 0, 0, 0, 0, 98, 98, 98, 98, 0, 0, 0, 0, 0, 0, 0,
  /* 1995 */ 0, 0, 0, 2626, 2626, 2626, 2626, 0, 0, 0, 161, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 0, 0, 236,
  /* 2023 */ 108, 108, 0, 0, 0, 0, 0, 108, 0, 0, 0, 0, 0, 0, 0, 0, 327, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 0, 3152, 82, 0,
  /* 2053 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 328, 0, 329, 2624, 2890, 0, 0, 3171, 3171, 3171, 3171, 0, 0, 0, 0, 0, 0, 0,
  /* 2081 */ 0, 0, 2624, 2624, 2624, 64, 2624, 2624, 2624, 2712, 0, 82, 82, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2107 */ 2624, 0, 235, 0, 2624, 3171, 3171, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2624, 2624, 2624, 266, 2624,
  /* 2129 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2719, 3152, 3810, 3811, 0, 0,
  /* 2148 */ 0, 0, 0, 0, 0, 0, 0, 0, 2624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 2624, 3810, 3811, 0, 0, 0,
  /* 2179 */ 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 0, 0, 345, 0, 0, 3171, 3171, 3171, 3171, 0, 0, 0, 0, 0, 0, 132, 0, 0,
  /* 2207 */ 2624, 64, 0, 0, 0, 0, 0, 2624, 26624, 2624, 26688, 2624, 2624, 0, 0, 0, 0, 0, 2718, 2624, 179, 0, 4715, 0,
  /* 2231 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2710, 2624, 2624, 2624, 2624, 2624, 2624, 0, 2624, 3171,
  /* 2249 */ 3171, 0, 0, 132, 2624, 2624, 0, 0, 4715, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 2269 */ 2624, 2624, 2783, 2624, 2624, 2624, 1536, 0, 0, 202, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 64, 2624,
  /* 2289 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 254, 0, 0, 0, 0, 0, 0,
  /* 2311 */ 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 3171, 3171, 3171, 3171, 0, 0, 0, 0,
  /* 2334 */ 129, 129, 0, 0, 0, 2624, 64, 2624, 2825, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 2354 */ 2624, 2624, 2624, 2624, 3152, 2624, 3171, 3171, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2701, 2624, 2624,
  /* 2375 */ 239, 0, 2624, 2624, 2803, 2624, 2805, 2624, 2624, 2624, 2624, 2624, 0, 0, 2801, 2802, 2624, 2624, 2624,
  /* 2394 */ 2624, 2802, 2624, 2624, 2624, 0, 0, 2624, 2775, 2624, 2624, 2624, 2624, 2807, 2624, 2624, 2624, 0, 0, 2624,
  /* 2414 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 252, 0, 1536, 0, 0, 0, 0, 2624, 2624, 2624, 2624,
  /* 2435 */ 2624, 2624, 2624, 64, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 255, 0,
  /* 2455 */ 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 307, 0, 0, 3171, 3171, 3171, 3171,
  /* 2478 */ 0, 0, 0, 0, 130, 130, 0, 0, 0, 2624, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 0, 0, 346, 2624,
  /* 2507 */ 3171, 3171, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2702, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2845,
  /* 2528 */ 2624, 2624, 0, 0, 0, 0, 0, 0, 0, 60, 60, 0, 2631, 2631, 2631, 2631, 0, 0, 0, 8192, 0, 0, 0, 0, 0, 0, 0,
  /* 2555 */ 8192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 0, 0, 0, 0, 0, 0, 83, 7168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2587 */ 0, 2710, 2624, 2624, 2624, 0, 162, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 234, 0, 0, 0, 0, 9216,
  /* 2614 */ 9216, 9216, 9216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2627, 2627, 2627, 2627, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0,
  /* 2642 */ 0, 0, 0, 0, 0, 0, 0, 0, 3171, 0, 9728, 0, 0, 0, 0, 0, 0, 0, 9728, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2625,
  /* 2674 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 86, 0, 0, 0, 0, 0, 0, 2765, 2624, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 2700 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2784, 2624, 0, 0, 86, 0, 0, 0, 2656, 2625, 0, 0, 0, 0, 0, 0,
  /* 2723 */ 2625, 2625, 2677, 2677, 2677, 2677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2770, 2624, 2624,
  /* 2745 */ 2624, 2624, 2624, 2624, 2624, 2697, 2624, 2624, 2624, 2624, 2624, 2708, 2624, 2714, 2624, 2624, 2717, 2624,
  /* 2763 */ 0, 0, 174, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2624, 2624, 2743, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 169,
  /* 2790 */ 0, 0, 172, 2624, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 28672, 0, 0, 0, 0, 0, 0, 5632, 0, 0, 0, 0,
  /* 2819 */ 0, 0, 0, 0, 0, 0, 2708, 0, 0, 0, 0, 0, 2737, 2624, 0, 180, 4715, 0, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 2843 */ 2624, 2624, 2624, 2624, 2781, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 2861 */ 2712, 2624, 2624, 2744, 2717, 2624, 2624, 2624, 2697, 2624, 0, 0, 0, 196, 0, 0, 0, 169, 0, 0, 0, 0, 0, 0,
  /* 2885 */ 22016, 0, 0, 2624, 12864, 0, 0, 0, 0, 0, 0, 259, 0, 0, 0, 0, 0, 2624, 2624, 64, 2781, 2624, 2624, 2624,
  /* 2909 */ 2843, 2624, 2624, 2844, 2624, 2846, 2624, 0, 0, 0, 0, 0, 12288, 0, 0, 0, 322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2936 */ 2624, 2624, 341, 342, 343, 344, 0, 0, 0, 2626, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4715, 0, 2669,
  /* 2963 */ 2669, 2626, 2626, 2626, 2626, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2768, 2624, 2624, 2624, 2624,
  /* 2985 */ 2624, 2624, 0, 0, 83, 0, 0, 0, 0, 0, 232, 0, 0, 0, 2624, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624,
  /* 3012 */ 2624, 2624, 2624, 64, 2624, 2624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536, 0, 0, 2624, 2624, 2624, 2624, 2797,
  /* 3035 */ 2624, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 292, 0, 0, 0, 2841, 2624,
  /* 3056 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 0, 0, 0, 0, 275, 0, 277, 0, 2624, 2839, 0, 0, 319,
  /* 3080 */ 320, 321, 0, 323, 324, 325, 326, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2769, 2624, 2624, 2624, 2624,
  /* 3102 */ 2624, 0, 0, 2627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14848, 15360, 2627, 2627, 2678, 2678, 2678,
  /* 3127 */ 2678, 0, 123, 0, 0, 0, 0, 0, 0, 0, 2624, 2766, 2624, 2624, 2624, 2624, 2624, 2624, 2769, 2624, 64, 0, 0, 0,
  /* 3151 */ 0, 0, 0, 0, 0, 0, 0, 29184, 2624, 2624, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2809, 2810,
  /* 3173 */ 0, 0, 58, 62, 2628, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30208, 0, 0, 100, 0, 100, 0, 58, 2628, 2628,
  /* 3202 */ 0, 100, 100, 100, 0, 100, 2628, 2672, 2675, 2628, 2628, 2628, 2628, 2628, 0, 124, 0, 0, 0, 0, 0, 0, 0,
  /* 3225 */ 2624, 2624, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 128, 0, 0, 0, 133, 0, 2624, 2624, 2624,
  /* 3247 */ 2698, 2624, 2624, 2624, 2624, 2624, 2709, 2624, 2624, 2715, 2624, 2624, 2624, 0, 240, 2624, 2624, 2624,
  /* 3265 */ 2804, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 0, 131, 0, 0, 0, 134, 2624, 0, 162, 83, 0, 0, 0, 0, 0,
  /* 3290 */ 0, 167, 0, 0, 0, 0, 0, 2624, 2624, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 318, 2709, 0, 162, 0, 175,
  /* 3313 */ 0, 2624, 2738, 0, 0, 4715, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2780, 2624, 2624, 2624,
  /* 3333 */ 2624, 2624, 2624, 64, 2624, 2624, 2713, 2624, 2624, 2624, 2624, 2624, 0, 2624, 2624, 2624, 2624, 28736,
  /* 3351 */ 13888, 2624, 2624, 2624, 2624, 0, 0, 0, 0, 0, 0, 274, 0, 0, 0, 0, 2838, 2624, 0, 0, 0, 28160, 0, 0, 0,
  /* 3376 */ 28224, 2624, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2877, 0, 0, 0, 0, 0, 59, 2629, 2629, 0, 0, 0, 0, 88, 0,
  /* 3400 */ 2629, 2629, 2629, 2629, 2629, 2629, 120, 88, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 2624, 2624, 2624, 2624,
  /* 3422 */ 2624, 2876, 2624, 0, 0, 0, 361, 362, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9216, 0, 0, 0, 59, 63, 2629, 0, 0,
  /* 3451 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 88, 0, 0, 0, 0, 0, 0, 59, 59, 63, 2629, 2629, 2629, 2629, 0, 0, 0, 0, 0,
  /* 3481 */ 0, 2630, 2630, 0, 0, 0, 0, 89, 0, 2630, 2630, 2630, 2630, 2630, 2630, 121, 89, 0, 0, 0, 0, 0, 0, 0, 2624,
  /* 3506 */ 2624, 0, 2624, 2624, 2624, 2624, 10304, 2624, 2624, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 0, 0, 0,
  /* 3532 */ 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2706, 2624, 2624, 0, 0, 2630, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3560 */ 23552, 2624, 0, 0, 0, 0, 89, 0, 0, 0, 0, 0, 0, 0, 0, 2630, 2630, 2630, 2630, 0, 0, 0, 0, 0, 0, 2632, 2632,
  /* 3587 */ 0, 0, 0, 0, 0, 0, 2671, 2632, 60, 0, 2631, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2632, 2632, 2632, 2632,
  /* 3615 */ 0, 0, 2670, 2670, 2631, 2631, 2631, 2631, 122, 125, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 11840, 2624, 2624,
  /* 3638 */ 2624, 2624, 2624, 2624, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624,
  /* 3663 */ 2624, 2750, 0, 0, 0, 0, 0, 0, 0, 0, 0, 233, 0, 0, 2624, 0, 0, 0, 2733, 0, 0, 0, 0, 0, 2624, 2624, 0, 0,
  /* 3691 */ 4715, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2847, 0, 0, 0, 0, 0, 0, 0, 6144, 0, 0, 0, 0,
  /* 3715 */ 0, 0, 0, 6144, 0, 0, 2632, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2634, 2634, 2634, 2634, 0, 0, 2671, 2676,
  /* 3743 */ 2632, 2632, 2632, 2632, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 313, 2624, 2624, 315, 2624, 2624, 2624,
  /* 3765 */ 2624, 0, 0, 0, 83, 0, 0, 0, 0, 0, 166, 0, 0, 0, 0, 0, 0, 2695, 2696, 2624, 2699, 2624, 2705, 2624, 2624,
  /* 3790 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 16896, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 2624,
  /* 3813 */ 2624, 2624, 2624, 2624, 2769, 2624, 2624, 2624, 2624, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2808,
  /* 3832 */ 2624, 2624, 0, 0, 2624, 2624, 2772, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 0, 0, 198, 0, 0, 0,
  /* 3855 */ 2624, 2624, 2746, 2624, 2748, 2624, 2624, 0, 193, 0, 0, 197, 0, 0, 0, 0, 0, 0, 1024, 0, 0, 0, 0, 0, 0, 0,
  /* 3881 */ 0, 0, 27648, 0, 0, 0, 0, 2624, 2624, 0, 0, 309, 0, 311, 2624, 2872, 0, 2624, 2624, 2624, 22592, 2624, 2624,
  /* 3904 */ 2624, 0, 161, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2624, 2624, 2624, 64, 2624, 2624, 0, 0, 0, 0, 0, 0,
  /* 3929 */ 199, 0, 200, 2624, 2624, 17920, 0, 0, 0, 0, 2624, 0, 2624, 2624, 2891, 2624, 0, 0, 0, 0, 0, 2624, 2624, 0,
  /* 3953 */ 0, 4715, 0, 2624, 21568, 2624, 2624, 0, 336, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 0, 0, 0, 2624, 0, 2624,
  /* 3979 */ 2624, 2624, 2624, 0, 0, 0, 0, 0, 2633, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2635, 2635, 2635, 2635, 0, 0,
  /* 4007 */ 0, 0, 90, 91, 0, 0, 93, 0, 94, 95, 2633, 2633, 2657, 2633, 0, 0, 0, 0, 0, 0, 2633, 2633, 0, 95, 0, 0, 90,
  /* 4034 */ 0, 2633, 2633, 2633, 2633, 2633, 2633, 0, 90, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2777,
  /* 4056 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2770, 2624, 64, 2624,
  /* 4074 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 64, 13312, 0, 0, 0, 0,
  /* 4094 */ 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 306, 2624, 0, 0, 0, 0, 0, 60, 2631, 2631, 0, 0, 0, 0, 0, 0, 2670,
  /* 4119 */ 2631, 0, 0, 201, 0, 0, 204, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2773, 0, 0, 83, 0, 229,
  /* 4141 */ 0, 0, 24576, 0, 0, 0, 0, 24640, 0, 0, 0, 0, 0, 0, 2627, 2627, 0, 0, 0, 0, 0, 0, 2627, 2627, 347, 348, 349,
  /* 4168 */ 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2636, 2636, 2636, 2636, 0, 0, 0, 0, 2634, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4198 */ 0, 0, 0, 0, 0, 2637, 2637, 2637, 2637, 0, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 170, 0, 0, 2624, 2624,
  /* 4226 */ 2624, 2624, 2624, 2624, 2778, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 289, 291, 0, 294,
  /* 4245 */ 296, 0, 2711, 0, 0, 0, 0, 176, 2624, 2624, 0, 0, 4715, 0, 2624, 2624, 2742, 2624, 2624, 2624, 2624, 2624,
  /* 4267 */ 2624, 2827, 2624, 2624, 2624, 2624, 2830, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2829,
  /* 4285 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2718, 2624, 0, 2624, 2624,
  /* 4303 */ 2624, 2747, 2624, 2624, 2624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 280, 2774, 2624, 2776, 2624,
  /* 4327 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2785, 0, 0, 0, 228, 0,
  /* 4347 */ 230, 0, 0, 0, 0, 0, 0, 2624, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2741, 2624, 2624, 2699, 253, 0, 0,
  /* 4373 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2712, 2624, 2624, 0, 2624, 2624, 2842, 2624, 2624,
  /* 4396 */ 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 0, 0, 0, 0, 61, 61, 0, 2639, 2639, 2639, 2639, 0, 0, 0, 297, 0, 0,
  /* 4421 */ 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4448 */ 0, 0, 0, 0, 0, 6656, 335, 0, 337, 338, 339, 340, 0, 0, 0, 2624, 2624, 0, 0, 0, 0, 0, 2624, 0, 2624, 2624,
  /* 4474 */ 2624, 2624, 332, 333, 334, 0, 0, 2635, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4715, 0, 0, 0, 0, 0, 2635,
  /* 4502 */ 2635, 2635, 2635, 2635, 2635, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2749, 2624, 0, 0, 0,
  /* 4526 */ 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2771, 2624, 2624, 2624, 2624, 2624,
  /* 4551 */ 2624, 2624, 2624, 2624, 2624, 2624, 2770, 2624, 2624, 2624, 2624, 2624, 2624, 2706, 2624, 2624, 2624, 2624,
  /* 4569 */ 2624, 2624, 2624, 2624, 0, 162, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 4590 */ 2624, 2624, 2624, 2624, 2624, 2782, 2624, 2624, 2624, 2624, 2624, 2828, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 4608 */ 2624, 191, 0, 194, 0, 0, 0, 0, 0, 0, 2624, 23104, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0,
  /* 4631 */ 0, 0, 0, 0, 1536, 2048, 64, 2624, 0, 0, 0, 0, 0, 273, 0, 0, 276, 0, 0, 2624, 2624, 0, 0, 0, 0, 2636, 0, 0,
  /* 4659 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4715, 4715, 0, 0, 0, 0, 2636, 2636, 2636, 2636, 2636, 2636, 0, 0, 0, 0, 0,
  /* 4687 */ 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2775, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624,
  /* 4707 */ 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 83, 0, 0, 0, 164, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624,
  /* 4732 */ 2624, 2701, 2624, 2701, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 3152, 0, 0, 298, 299, 300, 301,
  /* 4751 */ 302, 2624, 2863, 2864, 2624, 2865, 2624, 2624, 2624, 0, 0, 0, 0, 0, 258, 0, 0, 0, 0, 0, 0, 2624, 2624,
  /* 4774 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 288, 290, 0, 293, 295, 0, 308, 0, 0, 310, 0, 2624, 2624, 0,
  /* 4796 */ 2624, 2874, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 0, 0, 29696, 0, 0, 0, 0, 0, 0, 0, 29696, 0, 0, 0, 0, 0,
  /* 4822 */ 0, 2637, 2637, 0, 0, 0, 0, 0, 0, 2637, 2637, 2637, 2637, 2637, 2637, 0, 126, 0, 0, 0, 0, 0, 0, 0, 2624, 0,
  /* 4848 */ 0, 2637, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 0, 0, 0, 0, 0, 0, 83, 0, 10752, 0, 0, 0, 0, 0, 0,
  /* 4880 */ 0, 0, 0, 0, 64, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 2624, 2798, 0, 0, 2624, 2624, 2624, 2624,
  /* 4901 */ 2624, 2806, 2624, 2624, 2624, 2624, 0, 0, 25088, 0, 0, 2624, 0, 2624, 2624, 2624, 2624, 0, 0, 0, 14336,
  /* 4922 */ 27136, 27200, 0, 14400, 2624, 2624, 26176, 0, 0, 0, 0, 0, 0, 0, 351, 352, 353, 354, 0, 0, 357, 358, 359,
  /* 4945 */ 360, 0, 0, 0, 0, 0, 0, 2634, 2634, 0, 0, 0, 0, 0, 0, 2634, 2634, 2679, 2679, 2679, 2679, 0, 0, 0, 0, 0, 0,
  /* 4972 */ 0, 0, 0, 2624, 0, 0, 2638, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9728, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0,
  /* 5004 */ 2663, 2638, 0, 0, 105, 105, 92, 105, 2638, 2674, 2638, 2638, 2638, 2638, 2638, 2638, 0, 127, 0, 0, 0, 0, 0,
  /* 5027 */ 0, 0, 2624, 2624, 2624, 2624, 2702, 2624, 2702, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 3152, 64,
  /* 5046 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2716, 2624, 2624, 0, 0, 0, 0, 92, 0, 0,
  /* 5067 */ 0, 0, 0, 2638, 2638, 2638, 2638, 0, 0, 0, 0, 0, 0, 2635, 2635, 0, 0, 0, 0, 0, 106, 2635, 2673, 0, 0, 83, 0,
  /* 5094 */ 0, 11264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11328, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 25600, 0, 2624, 0, 0, 0, 0, 272,
  /* 5124 */ 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0, 0, 0, 0,
  /* 5148 */ 0, 0, 0, 0, 0, 2624, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 2624, 2624, 2624, 2771, 2624, 2624,
  /* 5174 */ 2624, 2624, 15872, 16384, 0, 0, 19456, 19968, 20480, 20992, 18432, 18944, 0, 0, 0, 0, 0, 0, 231, 0, 0, 0,
  /* 5196 */ 0, 0, 2624, 0, 0, 0, 2624, 2624, 2624, 2624, 2704, 2624, 2624, 2624, 2712, 2624, 2624, 2624, 2624, 2624,
  /* 5216 */ 2624, 0, 0, 0, 0, 101, 0, 2636, 2664, 0, 0, 0, 101, 0, 101, 2636, 2664, 0, 0, 83, 0, 0, 0, 0, 165, 0, 0, 0,
  /* 5244 */ 0, 0, 171, 0, 2624, 2624, 2624, 2624, 2703, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0,
  /* 5264 */ 0, 0, 0, 0, 102, 2639, 2639, 0, 0, 0, 0, 0, 0, 2639, 2639, 2639, 2639, 2639, 2639, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5291 */ 0, 2624, 2712, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 4715, 0, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2707,
  /* 5313 */ 2711, 2624, 2624, 2624, 2624, 2624, 2720, 0, 61, 0, 2639, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7680, 0,
  /* 5339 */ 0, 0, 0, 0, 0, 2624, 2624, 2624, 2700, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 0,
  /* 5360 */ 0, 0, 0, 203, 0, 2624, 2624, 2767, 2624, 2624, 2772, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2779,
  /* 5380 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 192, 0, 195, 0, 0, 0, 0, 0, 0, 2624, 2624, 2700, 2624, 2624,
  /* 5401 */ 2624, 2624, 0, 0, 0, 0, 174, 0, 0, 0, 0, 0, 0, 2626, 2626, 0, 0, 0, 0, 0, 0, 2669, 2626, 2624, 2745, 2624,
  /* 5427 */ 2624, 2624, 2624, 2624, 0, 0, 0, 0, 0, 0, 0, 179, 0, 0, 0, 0, 257, 0, 0, 260, 0, 0, 262, 0, 2624, 2624,
  /* 5453 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2783, 2624, 2624, 2831, 2624, 2624, 2624, 64, 2624, 0, 24064, 0,
  /* 5472 */ 0, 0, 2624, 0, 2624, 2624, 2624, 2624, 0, 0, 0, 17408, 0, 0, 0, 0, 0, 0, 0, 2624, 2624, 0, 0, 2624, 2624,
  /* 5497 */ 2624, 2624, 2624, 2624, 2624, 2624, 2624, 2624, 251, 0, 0, 0, 0, 29696, 29696, 0, 0, 29696, 0, 0, 29696,
  /* 5518 */ 29696, 0, 29696, 0, 29696, 30208, 30208, 0, 0, 0, 0, 0, 30208, 0, 0, 0, 0, 0, 0, 0, 0, 355, 356, 0, 0, 0,
  /* 5544 */ 0, 0, 0
];

MaiaAssembly.EXPECTED =
[
  /*   0 */ 181, 185, 189, 193, 201, 203, 207, 218, 211, 215, 222, 226, 230, 234, 196, 311, 304, 304, 304, 326, 238,
  /*  21 */ 254, 256, 454, 262, 302, 288, 266, 295, 270, 460, 257, 197, 312, 304, 304, 304, 304, 304, 304, 429, 256,
  /*  42 */ 256, 274, 306, 292, 296, 351, 459, 300, 310, 304, 304, 304, 304, 304, 316, 256, 278, 306, 292, 296, 351,
  /*  63 */ 459, 300, 311, 304, 305, 276, 344, 324, 330, 334, 256, 258, 312, 306, 342, 348, 332, 336, 257, 466, 334,
  /*  84 */ 256, 333, 256, 432, 335, 256, 256, 256, 256, 256, 319, 355, 415, 382, 256, 357, 361, 365, 369, 373, 380,
  /* 105 */ 256, 256, 256, 256, 256, 256, 256, 320, 402, 241, 244, 248, 397, 386, 391, 376, 407, 396, 256, 256, 256,
  /* 126 */ 256, 256, 256, 256, 256, 319, 401, 417, 246, 250, 387, 392, 338, 406, 255, 256, 256, 256, 256, 256, 256,
  /* 147 */ 319, 413, 246, 250, 387, 422, 338, 406, 255, 256, 256, 411, 442, 447, 421, 453, 426, 436, 256, 256, 440,
  /* 168 */ 446, 451, 337, 284, 458, 256, 426, 286, 280, 284, 256, 282, 464, 516, 520, 528, 544, 576, 640, 1536, 2560,
  /* 189 */ 8704, 16896, 33280, 66048, 131584, 1049088, 2097664, 512, 4, 4, 4, 4, 512, 512, 512, 512, 514, 2564, 516,
  /* 208 */ 520, 262672, 2097680, 266752, 134251008, 2097664, 134218240, 512, 1540, 2097680, 528, 528, 608, 6656,
  /* 222 */ 268800, 134251008, 134218240, 134218240, 512, 134218240, 4195088, 134218256, 71303952, 4195088, 17434352,
  /* 233 */ 17436400, 17467120, 17696496, -268434944, 176161536, 64, 64, 128, 8192, 0, 32768, 0, 0, 1048576, 16777216,
  /* 248 */ 4194304, 1048576, 8388608, 524288, 0, 4096, 1048576, 2097152, 0, 0, 0, 0, 4, 4, 16, 96, 96, 134217728,
  /* 266 */ 4194320, 16, 16, 134217744, 524304, 16777232, 16, -268435456, 16, 134217728, 0, 0, 0, 134217728, 0, 0, 8,
  /* 283 */ 16, 32, 64, 128, 256, 0, 0, 256, 256, 4194320, 16, 134217744, 16, 16, 67108880, 16, 524304, 33554432, 0, 0,
  /* 303 */ 4, 16, 16, 16, 16, 0, 0, 4, 4, 8, 8, 16, 16, 16, 64, 64, 0, 1, 2, 4, 16384, 4194320, 134217744, 16, 16, 16,
  /* 329 */ 32, 524304, 16777232, 16, 268435456, 536870912, 1073741824, 0x80000000, 0, 0, 0, 24, 96, 0, 134217728, 0,
  /* 345 */ 16, 16, 0, 0, 134217744, 16, 16777232, 16, 805306368, -1073741824, 16384, 32768, 4194304, 33554432,
  /* 359 */ 34603008, 16777216, 4194304, 34603008, 0, 8192, 41943040, 42991616, 4210694, 43515904, 67113472, 43515904,
  /* 371 */ 67113472, 67115520, 262144, 262144, 262144, 262144, 0, 24, 480, 504, 81806342, 0, 0, 32768, 33554432, 4096,
  /* 387 */ 0, 524288, 8388608, 0, 0, 6144, 0, 0, 262144, 12582912, 0, 0, 0, 512, 16384, 32768, 4194304, 65536, 131072,
  /* 406 */ 384, 0, 0, 1024, 2097152, 0, 4, 16384, 4194304, 65536, 0, 131072, 8192, 32768, 0, 524288, 2048, 0, 0,
  /* 425 */ 262144, 0, 24, 32, 64, 64, 128, 0, 0, 268435456, 536870912, 128, 256, 1024, 2097152, 4, 16384, 65536, 0,
  /* 444 */ 1048576, 4194304, 1048576, 1048576, 524288, 0, 0, 524288, 0, 262144, 0, 0, 0, 2097168, 1024, 0, 0, 0,
  /* 462 */ 8388608, 167772160, 128, 256, 8, 16, 16777232, 268435456
];

MaiaAssembly.TOKEN =
[
  "%ERROR",
  "eof",
  "valueType",
  "referenceType",
  "identifier",
  "integer",
  "float",
  "string",
  "comment",
  "whitespace",
  "'('",
  "')'",
  "','",
  "'->'",
  "':'",
  "';'",
  "'='",
  "'['",
  "']'",
  "'align'",
  "'as'",
  "'at'",
  "'block'",
  "'data'",
  "'default'",
  "'elem'",
  "'else'",
  "'export'",
  "'f32.const'",
  "'f32_const'",
  "'f64.const'",
  "'f64_const'",
  "'from'",
  "'func'",
  "'global'",
  "'global.get'",
  "'global_get'",
  "'i32.const'",
  "'i32_const'",
  "'i64.const'",
  "'i64_const'",
  "'if'",
  "'import'",
  "'local'",
  "'loop'",
  "'max'",
  "'memory'",
  "'min'",
  "'module'",
  "'mut'",
  "'offset'",
  "'params'",
  "'result'",
  "'start'",
  "'table'",
  "'type'",
  "'void'",
  "'{'",
  "'}'"
];

// main program for use with node.js, rhino, or jrunscript

function main(args)
{
  if (typeof process !== "undefined")   // assume node.js
  {
    var command = "node";
    var arguments = process.argv.slice(2);
    var log = function(string) {process.stdout.write(string);};
    var fs = require("fs");
    var readTextFile = fs.readFileSync;
  }
  else                                  // assume rhino or jrunscript
  {
    var arguments = function()
                    {
                      var strings = [];
                      for (var i = 0; i < args.length; ++i)
                      {
                        strings[i] = String(args[i]);
                      }
                      return strings;
                    }();

    if (typeof println == "undefined")  // assume rhino
    {
      var command = "java -jar js.jar";
      var log = function(string) {java.lang.System.out.write(java.lang.String(string).getBytes("utf-8"));};
      var readTextFile = readFile;
    }
    else                                // assume jrunscript
    {
      var command = "jrunscript";
      var log = function(string) {java.lang.System.out.print(string);};
      var readTextFile = function(filename, encoding)
                         {
                           var file = new java.io.File(filename);
                           var buffer = javaByteArray(file.length());
                           new java.io.FileInputStream(file).read(buffer);
                           return String(new java.lang.String(buffer, encoding));
                         };
    }
  }

  function read(input)
  {
    if (/^{.*}$/.test(input))
    {
      return input.substring(1, input.length - 1);
    }
    else
    {
      var content = readTextFile(input, "utf-8");
      return content.length > 0 && content.charCodeAt(0) == 0xFEFF
           ? content.substring(1)
           : content;
    }
  }

  if (arguments.length == 0)
  {
    log("Usage: " + command + " MaiaAssembly.js [-i] INPUT...\n");
    log("\n");
    log("  parse INPUT, which is either a filename or literal text enclosed in curly braces\n");
    log("\n");
    log("  Option:\n");
    log("    -i     indented parse tree\n");
  }
  else
  {
    var indent = false;
    for (var i = 0; i < arguments.length; ++i)
    {
      if (arguments[i] === "-i")
      {
        indent = true;
        continue;
      }
      var input = read(String(arguments[i]));
      var s = new MaiaAssembly.XmlSerializer(log, indent);
      var parser = new MaiaAssembly(input, s);
      try
      {
        parser.parse_maiaassembly();
      }
      catch (pe)
      {
        if (! (pe instanceof parser.ParseException))
        {
          throw pe;
        }
        else
        {
          throw parser.getErrorMessage(pe);
        }
      }
    }
  }
}

main(arguments);

// End
