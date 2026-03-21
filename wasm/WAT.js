// This file was generated on Sat Mar 21, 2026 19:48 (UTC-03) by REx v6.1 which is Copyright (c) 1979-2025 by Gunther Rademacher <grd@gmx.net>
// REx command line: WAT.ebnf -backtrack -javascript -tree

function WAT(string, parsingEventHandler)
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
    l3 = 0; b3 = 0; e3 = 0;
    end = e;
    ex = -1;
    memo = {};
    eventHandler.reset(input);
  }

  this.reset = function(l, b, e)
  {
    reset(l, b, e);
  };

  this.getOffendingToken = function(e)
  {
    var o = e.getOffending();
    return o >= 0 ? WAT.TOKEN[o] : null;
  };

  this.getExpectedTokenSet = function(e)
  {
    var expected;
    if (e.getExpected() < 0)
    {
      expected = WAT.getTokenSet(- e.getState());
    }
    else
    {
      expected = [WAT.TOKEN[e.getExpected()]];
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

  this.parse_wat = function()
  {
    eventHandler.startNonterminal("wat", e0);
    lookahead1W(42);                // whitespace | eof | '('
    whitespace();
    parse_watBody();
    eventHandler.endNonterminal("wat", e0);
  };

  this.parse_nt = function()
  {
    eventHandler.startNonterminal("nt", e0);
    lookahead1W(65);                // whitespace | 'f32' | 'f64' | 'i32' | 'i64'
    switch (l1)
    {
    case 77:                        // 'i32'
      consume(77);                  // 'i32'
      break;
    case 79:                        // 'i64'
      consume(79);                  // 'i64'
      break;
    case 61:                        // 'f32'
      consume(61);                  // 'f32'
      break;
    default:
      consume(63);                  // 'f64'
    }
    eventHandler.endNonterminal("nt", e0);
  };

  this.parse_sz = function()
  {
    eventHandler.startNonterminal("sz", e0);
    lookahead1W(1);                 // whitespace | nat
    consume(4);                     // nat
    eventHandler.endNonterminal("sz", e0);
  };

  this.parse_sx = function()
  {
    eventHandler.startNonterminal("sx", e0);
    lookahead1W(51);                // whitespace | '_s' | '_u'
    switch (l1)
    {
    case 11:                        // '_s'
      consume(11);                  // '_s'
      break;
    default:
      consume(12);                  // '_u'
    }
    eventHandler.endNonterminal("sx", e0);
  };

  function parse_watBody()
  {
    eventHandler.startNonterminal("watBody", e0);
    switch (l1)
    {
    case 9:                         // '('
      parse_module();
      break;
    default:
      consume(2);                   // eof
    }
    eventHandler.endNonterminal("watBody", e0);
  }

  function parse_module()
  {
    eventHandler.startNonterminal("module", e0);
    consume(9);                     // '('
    lookahead1W(27);                // whitespace | 'module'
    consume(98);                    // 'module'
    lookahead1W(58);                // whitespace | identifier^token | '(' | ')'
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    for (;;)
    {
      lookahead1W(49);              // whitespace | '(' | ')'
      if (l1 != 9)                  // '('
      {
        break;
      }
      whitespace();
      parse_moduleField();
    }
    consume(10);                    // ')'
    eventHandler.endNonterminal("module", e0);
  }

  function parse_moduleField()
  {
    eventHandler.startNonterminal("moduleField", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(78);              // whitespace | 'data' | 'elem' | 'export' | 'func' | 'global' | 'import' |
                                    // 'memory' | 'start' | 'table' | 'tag' | 'type'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 37641:                     // '(' 'type'
      parse_typeDef();
      break;
    case 21769:                     // '(' 'import'
      parse_importDef();
      break;
    case 36361:                     // '(' 'tag'
      parse_tagDef();
      break;
    case 17673:                     // '(' 'global'
      parse_globalDef();
      break;
    case 23561:                     // '(' 'memory'
      parse_memDef();
      break;
    case 34313:                     // '(' 'table'
      parse_tableDef();
      break;
    case 17161:                     // '(' 'func'
      parse_funcDef();
      break;
    case 11785:                     // '(' 'data'
      parse_dataDef();
      break;
    case 12809:                     // '(' 'elem'
      parse_elemDef();
      break;
    case 32009:                     // '(' 'start'
      parse_startDef();
      break;
    default:
      parse_exportDef();
    }
    eventHandler.endNonterminal("moduleField", e0);
  }

  function parse_typeDef()
  {
    eventHandler.startNonterminal("typeDef", e0);
    consume(9);                     // '('
    lookahead1W(41);                // whitespace | 'type'
    consume(147);                   // 'type'
    lookahead1W(47);                // whitespace | identifier^token | '('
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    lookahead1W(4);                 // whitespace | '('
    whitespace();
    parse_rectype();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("typeDef", e0);
  }

  function parse_rectype()
  {
    eventHandler.startNonterminal("rectype", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(68);              // whitespace | 'array' | 'func' | 'rec' | 'struct' | 'sub'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 27913:                     // '(' 'rec'
      consume(9);                   // '('
      lookahead1W(31);              // whitespace | 'rec'
      consume(109);                 // 'rec'
      for (;;)
      {
        lookahead1W(4);             // whitespace | '('
        whitespace();
        parse_subtype();
        lookahead1W(49);            // whitespace | '(' | ')'
        if (l1 != 9)                // '('
        {
          break;
        }
      }
      consume(10);                  // ')'
      break;
    default:
      parse_subtype();
    }
    eventHandler.endNonterminal("rectype", e0);
  }

  function parse_subtype()
  {
    eventHandler.startNonterminal("subtype", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(63);              // whitespace | 'array' | 'func' | 'struct' | 'sub'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 34057:                     // '(' 'sub'
      consume(9);                   // '('
      lookahead1W(36);              // whitespace | 'sub'
      consume(133);                 // 'sub'
      lookahead1W(50);              // whitespace | '(' | 'final'
      if (l1 == 66)                 // 'final'
      {
        whitespace();
        parse_final();
      }
      for (;;)
      {
        lookahead1W(4);             // whitespace | '('
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(72);          // whitespace | 'array' | 'func' | 'param' | 'result' | 'struct' | 'type'
          break;
        default:
          lk = l1;
        }
        if (lk != 27657             // '(' 'param'
         && lk != 30473             // '(' 'result'
         && lk != 37641)            // '(' 'type'
        {
          break;
        }
        whitespace();
        parse_supertype();
      }
      whitespace();
      parse_comptype();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    default:
      parse_comptype();
    }
    eventHandler.endNonterminal("subtype", e0);
  }

  function parse_final()
  {
    eventHandler.startNonterminal("final", e0);
    consume(66);                    // 'final'
    eventHandler.endNonterminal("final", e0);
  }

  function parse_supertype()
  {
    eventHandler.startNonterminal("supertype", e0);
    parse_typeuse();
    eventHandler.endNonterminal("supertype", e0);
  }

  function parse_comptype()
  {
    eventHandler.startNonterminal("comptype", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(59);              // whitespace | 'array' | 'func' | 'struct'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 17161:                     // '(' 'func'
      parse_funcType();
      break;
    case 32265:                     // '(' 'struct'
      parse_structType();
      break;
    default:
      parse_arrayType();
    }
    eventHandler.endNonterminal("comptype", e0);
  }

  function parse_funcType()
  {
    eventHandler.startNonterminal("funcType", e0);
    consume(9);                     // '('
    lookahead1W(19);                // whitespace | 'func'
    consume(67);                    // 'func'
    for (;;)
    {
      lookahead1W(49);              // whitespace | '(' | ')'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(54);            // whitespace | 'param' | 'result'
        break;
      default:
        lk = l1;
      }
      if (lk != 27657)              // '(' 'param'
      {
        break;
      }
      whitespace();
      parse_paramDecl();
    }
    for (;;)
    {
      lookahead1W(49);              // whitespace | '(' | ')'
      if (l1 != 9)                  // '('
      {
        break;
      }
      whitespace();
      parse_resultDecl();
    }
    consume(10);                    // ')'
    eventHandler.endNonterminal("funcType", e0);
  }

  function parse_structType()
  {
    eventHandler.startNonterminal("structType", e0);
    consume(9);                     // '('
    lookahead1W(35);                // whitespace | 'struct'
    consume(126);                   // 'struct'
    for (;;)
    {
      lookahead1W(49);              // whitespace | '(' | ')'
      if (l1 != 9)                  // '('
      {
        break;
      }
      whitespace();
      parse_fieldDecl();
    }
    consume(10);                    // ')'
    eventHandler.endNonterminal("structType", e0);
  }

  function parse_arrayType()
  {
    eventHandler.startNonterminal("arrayType", e0);
    consume(9);                     // '('
    lookahead1W(7);                 // whitespace | 'array'
    consume(16);                    // 'array'
    lookahead1W(4);                 // whitespace | '('
    whitespace();
    parse_fieldDecl();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("arrayType", e0);
  }

  function parse_fieldDecl()
  {
    eventHandler.startNonterminal("fieldDecl", e0);
    consume(9);                     // '('
    lookahead1W(18);                // whitespace | 'field'
    consume(65);                    // 'field'
    lookahead1W(79);                // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i16' | 'i32' | 'i64' | 'i8' | 'v128'
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    lookahead1W(77);                // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i16' |
                                    // 'i32' | 'i64' | 'i8' | 'v128'
    whitespace();
    parse_storagetype();
    lookahead1W(49);                // whitespace | '(' | ')'
    if (l1 == 9)                    // '('
    {
      whitespace();
      parse_mutField();
    }
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("fieldDecl", e0);
  }

  function parse_mutField()
  {
    eventHandler.startNonterminal("mutField", e0);
    consume(9);                     // '('
    lookahead1W(28);                // whitespace | 'mut'
    consume(99);                    // 'mut'
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("mutField", e0);
  }

  function parse_storagetype()
  {
    eventHandler.startNonterminal("storagetype", e0);
    switch (l1)
    {
    case 72:                        // 'i16'
    case 81:                        // 'i8'
      parse_packType();
      break;
    default:
      parse_valueType();
    }
    eventHandler.endNonterminal("storagetype", e0);
  }

  function parse_packType()
  {
    eventHandler.startNonterminal("packType", e0);
    switch (l1)
    {
    case 81:                        // 'i8'
      consume(81);                  // 'i8'
      break;
    default:
      consume(72);                  // 'i16'
    }
    eventHandler.endNonterminal("packType", e0);
  }

  function parse_tagDef()
  {
    eventHandler.startNonterminal("tagDef", e0);
    consume(9);                     // '('
    lookahead1W(38);                // whitespace | 'tag'
    consume(142);                   // 'tag'
    lookahead1W(47);                // whitespace | identifier^token | '('
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    lookahead1W(4);                 // whitespace | '('
    whitespace();
    parse_tagType();
    consume(10);                    // ')'
    eventHandler.endNonterminal("tagDef", e0);
  }

  function parse_tagType()
  {
    eventHandler.startNonterminal("tagType", e0);
    parse_typeuse();
    eventHandler.endNonterminal("tagType", e0);
  }

  function parse_globalDef()
  {
    eventHandler.startNonterminal("globalDef", e0);
    consume(9);                     // '('
    lookahead1W(20);                // whitespace | 'global'
    consume(69);                    // 'global'
    lookahead1W(75);                // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    lookahead1W(74);                // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
    whitespace();
    parse_globalType();
    lookahead1W(89);                // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
    whitespace();
    parse_expr();
    consume(10);                    // ')'
    eventHandler.endNonterminal("globalDef", e0);
  }

  function parse_globalType()
  {
    eventHandler.startNonterminal("globalType", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(53);              // whitespace | 'mut' | 'ref'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 25353:                     // '(' 'mut'
      consume(9);                   // '('
      lookahead1W(28);              // whitespace | 'mut'
      consume(99);                  // 'mut'
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    default:
      parse_valueType();
    }
    eventHandler.endNonterminal("globalType", e0);
  }

  function parse_memDef()
  {
    eventHandler.startNonterminal("memDef", e0);
    consume(9);                     // '('
    lookahead1W(26);                // whitespace | 'memory'
    consume(92);                    // 'memory'
    lookahead1W(61);                // whitespace | nat | identifier^token | 'i32' | 'i64'
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    lookahead1W(57);                // whitespace | nat | 'i32' | 'i64'
    whitespace();
    parse_limits();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("memDef", e0);
  }

  function parse_tableDef()
  {
    eventHandler.startNonterminal("tableDef", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(37);              // whitespace | 'table'
      switch (lk)
      {
      case 34313:                   // '(' 'table'
        lookahead3W(61);            // whitespace | nat | identifier^token | 'i32' | 'i64'
        break;
      }
      break;
    default:
      lk = l1;
    }
    lk = memoized(0, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2; var l3A = l3;
      var b3A = b3; var e3A = e3;
      try
      {
        consumeT(9);                // '('
        lookahead1W(37);            // whitespace | 'table'
        consumeT(134);              // 'table'
        lookahead1W(61);            // whitespace | nat | identifier^token | 'i32' | 'i64'
        if (l1 == 7)                // identifier^token
        {
          try_id();
        }
        lookahead1W(57);            // whitespace | nat | 'i32' | 'i64'
        try_limits();
        lookahead1W(62);            // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
        try_reftype();
        lookahead1W(5);             // whitespace | ')'
        consumeT(10);               // ')'
        lk = -1;
      }
      catch (p1A)
      {
        lk = -2;
      }
      b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
      b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
      b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
      b3 = b3A; e3 = e3A; end = e3A; }}}
      memoize(0, e0, lk);
    }
    switch (lk)
    {
    case -1:
      consume(9);                   // '('
      lookahead1W(37);              // whitespace | 'table'
      consume(134);                 // 'table'
      lookahead1W(61);              // whitespace | nat | identifier^token | 'i32' | 'i64'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(57);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(37);              // whitespace | 'table'
      consume(134);                 // 'table'
      lookahead1W(61);              // whitespace | nat | identifier^token | 'i32' | 'i64'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(57);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      lookahead1W(89);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      whitespace();
      parse_tableExpr();
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("tableDef", e0);
  }

  function parse_tableExpr()
  {
    eventHandler.startNonterminal("tableExpr", e0);
    parse_expr();
    eventHandler.endNonterminal("tableExpr", e0);
  }

  function parse_funcDef()
  {
    eventHandler.startNonterminal("funcDef", e0);
    consume(9);                     // '('
    lookahead1W(19);                // whitespace | 'func'
    consume(67);                    // 'func'
    lookahead1W(93);                // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    lookahead1W(89);                // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(99);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    if (lk == 27657                 // '(' 'param'
     || lk == 30473                 // '(' 'result'
     || lk == 37641)                // '(' 'type'
    {
      whitespace();
      parse_typeuse();
    }
    for (;;)
    {
      lookahead1W(89);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(85);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk != 22281)              // '(' 'local'
      {
        break;
      }
      whitespace();
      parse_localDecl();
    }
    whitespace();
    parse_expr();
    consume(10);                    // ')'
    eventHandler.endNonterminal("funcDef", e0);
  }

  function parse_localDecl()
  {
    eventHandler.startNonterminal("localDecl", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(24);              // whitespace | 'local'
      switch (lk)
      {
      case 22281:                   // '(' 'local'
        lookahead3W(75);            // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 481033)               // '(' 'local' identifier^token
    {
      lk = memoized(1, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(9);              // '('
          lookahead1W(24);          // whitespace | 'local'
          consumeT(87);             // 'local'
          lookahead1W(75);          // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
          if (l1 == 7)              // identifier^token
          {
            try_id();
          }
          lookahead1W(74);          // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
          try_valueType();
          lookahead1W(5);           // whitespace | ')'
          consumeT(10);             // ')'
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(1, e0, lk);
      }
    }
    switch (lk)
    {
    case -2:
      consume(9);                   // '('
      lookahead1W(24);              // whitespace | 'local'
      consume(87);                  // 'local'
      for (;;)
      {
        lookahead1W(74);            // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
        whitespace();
        parse_valueType();
        lookahead1W(76);            // whitespace | '(' | ')' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' |
                                    // 'i32' | 'i64' | 'v128'
        if (l1 == 10)               // ')'
        {
          break;
        }
      }
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(24);              // whitespace | 'local'
      consume(87);                  // 'local'
      lookahead1W(75);              // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("localDecl", e0);
  }

  function parse_importDef()
  {
    eventHandler.startNonterminal("importDef", e0);
    consume(9);                     // '('
    lookahead1W(22);                // whitespace | 'import'
    consume(85);                    // 'import'
    lookahead1W(0);                 // whitespace | string
    consume(3);                     // string
    lookahead1W(0);                 // whitespace | string
    consume(3);                     // string
    lookahead1W(4);                 // whitespace | '('
    whitespace();
    parse_importDesc();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("importDef", e0);
  }

  function parse_importDesc()
  {
    eventHandler.startNonterminal("importDesc", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(69);              // whitespace | 'func' | 'global' | 'memory' | 'table' | 'tag'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 17161:                     // '(' 'func'
      consume(9);                   // '('
      lookahead1W(19);              // whitespace | 'func'
      consume(67);                  // 'func'
      lookahead1W(58);              // whitespace | identifier^token | '(' | ')'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(49);              // whitespace | '(' | ')'
      if (l1 == 9)                  // '('
      {
        whitespace();
        parse_typeuse();
      }
      consume(10);                  // ')'
      break;
    case 34313:                     // '(' 'table'
      consume(9);                   // '('
      lookahead1W(37);              // whitespace | 'table'
      consume(134);                 // 'table'
      lookahead1W(61);              // whitespace | nat | identifier^token | 'i32' | 'i64'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(57);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 23561:                     // '(' 'memory'
      consume(9);                   // '('
      lookahead1W(26);              // whitespace | 'memory'
      consume(92);                  // 'memory'
      lookahead1W(61);              // whitespace | nat | identifier^token | 'i32' | 'i64'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(57);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 17673:                     // '(' 'global'
      consume(9);                   // '('
      lookahead1W(20);              // whitespace | 'global'
      consume(69);                  // 'global'
      lookahead1W(75);              // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      whitespace();
      parse_globalType();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(38);              // whitespace | 'tag'
      consume(142);                 // 'tag'
      lookahead1W(47);              // whitespace | identifier^token | '('
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(4);               // whitespace | '('
      whitespace();
      parse_tagType();
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("importDesc", e0);
  }

  function parse_exportDef()
  {
    eventHandler.startNonterminal("exportDef", e0);
    consume(9);                     // '('
    lookahead1W(17);                // whitespace | 'export'
    consume(57);                    // 'export'
    lookahead1W(0);                 // whitespace | string
    consume(3);                     // string
    lookahead1W(4);                 // whitespace | '('
    whitespace();
    parse_exportDesc();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("exportDef", e0);
  }

  function parse_exportDesc()
  {
    eventHandler.startNonterminal("exportDesc", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(69);              // whitespace | 'func' | 'global' | 'memory' | 'table' | 'tag'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 17161:                     // '(' 'func'
      consume(9);                   // '('
      lookahead1W(19);              // whitespace | 'func'
      consume(67);                  // 'func'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 34313:                     // '(' 'table'
      consume(9);                   // '('
      lookahead1W(37);              // whitespace | 'table'
      consume(134);                 // 'table'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 23561:                     // '(' 'memory'
      consume(9);                   // '('
      lookahead1W(26);              // whitespace | 'memory'
      consume(92);                  // 'memory'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 17673:                     // '(' 'global'
      consume(9);                   // '('
      lookahead1W(20);              // whitespace | 'global'
      consume(69);                  // 'global'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(38);              // whitespace | 'tag'
      consume(142);                 // 'tag'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("exportDesc", e0);
  }

  function parse_startDef()
  {
    eventHandler.startNonterminal("startDef", e0);
    consume(9);                     // '('
    lookahead1W(34);                // whitespace | 'start'
    consume(125);                   // 'start'
    lookahead1W(46);                // whitespace | nat | identifier^token
    whitespace();
    parse_index();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("startDef", e0);
  }

  function parse_dataDef()
  {
    eventHandler.startNonterminal("dataDef", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(13);              // whitespace | 'data'
      switch (lk)
      {
      case 11785:                   // '(' 'data'
        lookahead3W(92);            // whitespace | string | identifier^token | dottedName | '(' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 208393                // '(' 'data' string
     || lk == 470537                // '(' 'data' identifier^token
     || lk == 601609)               // '(' 'data' '('
    {
      lk = memoized(2, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(9);              // '('
          lookahead1W(13);          // whitespace | 'data'
          consumeT(46);             // 'data'
          lookahead1W(43);          // whitespace | string | identifier^token
          if (l1 == 7)              // identifier^token
          {
            try_id();
          }
          lookahead1W(0);           // whitespace | string
          try_datastring();
          consumeT(10);             // ')'
          lk = -1;
        }
        catch (p1A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            consumeT(9);            // '('
            lookahead1W(13);        // whitespace | 'data'
            consumeT(46);           // 'data'
            lookahead1W(47);        // whitespace | identifier^token | '('
            if (l1 == 7)            // identifier^token
            {
              try_id();
            }
            lookahead1W(4);         // whitespace | '('
            try_memUse();
            lookahead1W(88);        // whitespace | string | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
            try_offset();
            lookahead1W(0);         // whitespace | string
            try_datastring();
            consumeT(10);           // ')'
            lk = -2;
          }
          catch (p2A)
          {
            lk = -3;
          }
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(2, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
      consume(9);                   // '('
      lookahead1W(13);              // whitespace | 'data'
      consume(46);                  // 'data'
      lookahead1W(43);              // whitespace | string | identifier^token
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(0);               // whitespace | string
      whitespace();
      parse_datastring();
      consume(10);                  // ')'
      break;
    case -2:
      consume(9);                   // '('
      lookahead1W(13);              // whitespace | 'data'
      consume(46);                  // 'data'
      lookahead1W(47);              // whitespace | identifier^token | '('
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(4);               // whitespace | '('
      whitespace();
      parse_memUse();
      lookahead1W(88);              // whitespace | string | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      whitespace();
      parse_offset();
      lookahead1W(0);               // whitespace | string
      whitespace();
      parse_datastring();
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(13);              // whitespace | 'data'
      consume(46);                  // 'data'
      lookahead1W(92);              // whitespace | string | identifier^token | dottedName | '(' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(88);              // whitespace | string | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      whitespace();
      parse_offset();
      lookahead1W(0);               // whitespace | string
      whitespace();
      parse_datastring();
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("dataDef", e0);
  }

  function parse_datastring()
  {
    eventHandler.startNonterminal("datastring", e0);
    for (;;)
    {
      consume(3);                   // string
      lookahead1W(44);              // whitespace | string | ')'
      if (l1 != 3)                  // string
      {
        break;
      }
    }
    eventHandler.endNonterminal("datastring", e0);
  }

  function try_datastring()
  {
    for (;;)
    {
      consumeT(3);                  // string
      lookahead1W(44);              // whitespace | string | ')'
      if (l1 != 3)                  // string
      {
        break;
      }
    }
  }

  function parse_elemDef()
  {
    eventHandler.startNonterminal("elemDef", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(15);              // whitespace | 'elem'
      switch (lk)
      {
      case 12809:                   // '(' 'elem'
        lookahead3W(105);           // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'declare' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 471561                // '(' 'elem' identifier^token
     || lk == 602633                // '(' 'elem' '('
     || lk == 3682825               // '(' 'elem' 'exnref'
     || lk == 3944969               // '(' 'elem' 'externref'
     || lk == 4403721               // '(' 'elem' 'func'
     || lk == 4469257)              // '(' 'elem' 'funcref'
    {
      lk = memoized(3, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(9);              // '('
          lookahead1W(15);          // whitespace | 'elem'
          consumeT(50);             // 'elem'
          lookahead1W(71);          // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
          if (l1 == 7)              // identifier^token
          {
            try_id();
          }
          lookahead1W(67);          // whitespace | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
          try_elemList();
          consumeT(10);             // ')'
          lk = -1;
        }
        catch (p1A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            consumeT(9);            // '('
            lookahead1W(15);        // whitespace | 'elem'
            consumeT(50);           // 'elem'
            lookahead1W(47);        // whitespace | identifier^token | '('
            if (l1 == 7)            // identifier^token
            {
              try_id();
            }
            lookahead1W(4);         // whitespace | '('
            try_tableUse();
            lookahead1W(101);       // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
            try_offset();
            lookahead1W(67);        // whitespace | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
            try_elemList();
            consumeT(10);           // ')'
            lk = -2;
          }
          catch (p2A)
          {
            try
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              consumeT(9);          // '('
              lookahead1W(15);      // whitespace | 'elem'
              consumeT(50);         // 'elem'
              lookahead1W(103);     // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
              if (l1 == 7)          // identifier^token
              {
                try_id();
              }
              lookahead1W(101);     // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
              try_offset();
              lookahead1W(67);      // whitespace | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
              try_elemList();
              consumeT(10);         // ')'
              lk = -3;
            }
            catch (p3A)
            {
              lk = -4;
            }
          }
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(3, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
      consume(9);                   // '('
      lookahead1W(15);              // whitespace | 'elem'
      consume(50);                  // 'elem'
      lookahead1W(71);              // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(67);              // whitespace | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
      whitespace();
      parse_elemList();
      consume(10);                  // ')'
      break;
    case -2:
      consume(9);                   // '('
      lookahead1W(15);              // whitespace | 'elem'
      consume(50);                  // 'elem'
      lookahead1W(47);              // whitespace | identifier^token | '('
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(4);               // whitespace | '('
      whitespace();
      parse_tableUse();
      lookahead1W(101);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      whitespace();
      parse_offset();
      lookahead1W(67);              // whitespace | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
      whitespace();
      parse_elemList();
      consume(10);                  // ')'
      break;
    case -4:
    case 3158537:                   // '(' 'elem' 'declare'
      consume(9);                   // '('
      lookahead1W(15);              // whitespace | 'elem'
      consume(50);                  // 'elem'
      lookahead1W(48);              // whitespace | identifier^token | 'declare'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(14);              // whitespace | 'declare'
      consume(48);                  // 'declare'
      lookahead1W(67);              // whitespace | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
      whitespace();
      parse_elemList();
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(15);              // whitespace | 'elem'
      consume(50);                  // 'elem'
      lookahead1W(103);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      lookahead1W(101);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      whitespace();
      parse_offset();
      lookahead1W(67);              // whitespace | '(' | 'exnref' | 'externref' | 'func' | 'funcref'
      whitespace();
      parse_elemList();
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("elemDef", e0);
  }

  function parse_elemList()
  {
    eventHandler.startNonterminal("elemList", e0);
    switch (l1)
    {
    case 67:                        // 'func'
      consume(67);                  // 'func'
      for (;;)
      {
        lookahead1W(56);            // whitespace | nat | identifier^token | ')'
        if (l1 == 10)               // ')'
        {
          break;
        }
        whitespace();
        parse_funcidx();
      }
      break;
    default:
      parse_reftype();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        whitespace();
        parse_elemExpr();
      }
    }
    eventHandler.endNonterminal("elemList", e0);
  }

  function try_elemList()
  {
    switch (l1)
    {
    case 67:                        // 'func'
      consumeT(67);                 // 'func'
      for (;;)
      {
        lookahead1W(56);            // whitespace | nat | identifier^token | ')'
        if (l1 == 10)               // ')'
        {
          break;
        }
        try_funcidx();
      }
      break;
    default:
      try_reftype();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        try_elemExpr();
      }
    }
  }

  function parse_elemExpr()
  {
    eventHandler.startNonterminal("elemExpr", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(84);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 22025:                     // '(' 'item'
      consume(9);                   // '('
      lookahead1W(23);              // whitespace | 'item'
      consume(86);                  // 'item'
      lookahead1W(89);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      whitespace();
      parse_expr();
      consume(10);                  // ')'
      break;
    default:
      parse_instr();
    }
    eventHandler.endNonterminal("elemExpr", e0);
  }

  function try_elemExpr()
  {
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(84);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 22025:                     // '(' 'item'
      consumeT(9);                  // '('
      lookahead1W(23);              // whitespace | 'item'
      consumeT(86);                 // 'item'
      lookahead1W(89);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      try_expr();
      consumeT(10);                 // ')'
      break;
    default:
      try_instr();
    }
  }

  function parse_memUse()
  {
    eventHandler.startNonterminal("memUse", e0);
    consume(9);                     // '('
    lookahead1W(26);                // whitespace | 'memory'
    consume(92);                    // 'memory'
    lookahead1W(46);                // whitespace | nat | identifier^token
    whitespace();
    parse_memidx();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("memUse", e0);
  }

  function try_memUse()
  {
    consumeT(9);                    // '('
    lookahead1W(26);                // whitespace | 'memory'
    consumeT(92);                   // 'memory'
    lookahead1W(46);                // whitespace | nat | identifier^token
    try_memidx();
    lookahead1W(5);                 // whitespace | ')'
    consumeT(10);                   // ')'
  }

  function parse_tableUse()
  {
    eventHandler.startNonterminal("tableUse", e0);
    consume(9);                     // '('
    lookahead1W(37);                // whitespace | 'table'
    consume(134);                   // 'table'
    lookahead1W(46);                // whitespace | nat | identifier^token
    whitespace();
    parse_tableidx();
    lookahead1W(5);                 // whitespace | ')'
    consume(10);                    // ')'
    eventHandler.endNonterminal("tableUse", e0);
  }

  function try_tableUse()
  {
    consumeT(9);                    // '('
    lookahead1W(37);                // whitespace | 'table'
    consumeT(134);                  // 'table'
    lookahead1W(46);                // whitespace | nat | identifier^token
    try_tableidx();
    lookahead1W(5);                 // whitespace | ')'
    consumeT(10);                   // ')'
  }

  function parse_offset()
  {
    eventHandler.startNonterminal("offset", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(91);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'offset' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 27145:                     // '(' 'offset'
      consume(9);                   // '('
      lookahead1W(29);              // whitespace | 'offset'
      consume(106);                 // 'offset'
      lookahead1W(89);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      whitespace();
      parse_expr();
      consume(10);                  // ')'
      break;
    default:
      parse_expr();
    }
    eventHandler.endNonterminal("offset", e0);
  }

  function try_offset()
  {
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(91);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'offset' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 27145:                     // '(' 'offset'
      consumeT(9);                  // '('
      lookahead1W(29);              // whitespace | 'offset'
      consumeT(106);                // 'offset'
      lookahead1W(89);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      try_expr();
      consumeT(10);                 // ')'
      break;
    default:
      try_expr();
    }
  }

  function parse_instr()
  {
    eventHandler.startNonterminal("instr", e0);
    switch (l1)
    {
    case 9:                         // '('
      parse_foldedInstr();
      break;
    default:
      parse_seqInstr();
    }
    eventHandler.endNonterminal("instr", e0);
  }

  function try_instr()
  {
    switch (l1)
    {
    case 9:                         // '('
      try_foldedInstr();
      break;
    default:
      try_seqInstr();
    }
  }

  function parse_foldedInstr()
  {
    eventHandler.startNonterminal("foldedInstr", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(83);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 7945:                      // '(' 'block'
      consume(9);                   // '('
      lookahead1W(8);               // whitespace | 'block'
      consume(31);                  // 'block'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(10);                  // ')'
      break;
    case 23305:                     // '(' 'loop'
      consume(9);                   // '('
      lookahead1W(25);              // whitespace | 'loop'
      consume(91);                  // 'loop'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(10);                  // ')'
      break;
    case 21513:                     // '(' 'if'
      consume(9);                   // '('
      lookahead1W(21);              // whitespace | 'if'
      consume(84);                  // 'if'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(102);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' | 'type' |
                                    // 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(87);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk == 10                // ')'
         || lk == 36617)            // '(' 'then'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      if (l1 == 9)                  // '('
      {
        consume(9);                 // '('
        lookahead1W(39);            // whitespace | 'then'
        consume(143);               // 'then'
        for (;;)
        {
          lookahead1W(89);          // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          if (l1 == 10)             // ')'
          {
            break;
          }
          whitespace();
          parse_instr();
        }
        consume(10);                // ')'
        lookahead1W(49);            // whitespace | '(' | ')'
        if (l1 == 9)                // '('
        {
          consume(9);               // '('
          lookahead1W(16);          // whitespace | 'else'
          consume(52);              // 'else'
          for (;;)
          {
            lookahead1W(89);        // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
            if (l1 == 10)           // ')'
            {
              break;
            }
            whitespace();
            parse_instr();
          }
          consume(10);              // ')'
        }
      }
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 37385:                     // '(' 'try_table'
      consume(9);                   // '('
      lookahead1W(40);              // whitespace | 'try_table'
      consume(146);                 // 'try_table'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(106);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(97);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk != 10761             // '(' 'catch'
         && lk != 11017             // '(' 'catch_all'
         && lk != 11273             // '(' 'catch_all_ref'
         && lk != 11529)            // '(' 'catch_ref'
        {
          break;
        }
        whitespace();
        parse_catchClause();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(82);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'br' |
                                    // 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' |
                                    // 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' |
                                    // 'unreachable' | 'v128.const'
      whitespace();
      parse_nonBlockInstr();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("foldedInstr", e0);
  }

  function try_foldedInstr()
  {
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(83);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 7945:                      // '(' 'block'
      consumeT(9);                  // '('
      lookahead1W(8);               // whitespace | 'block'
      consumeT(31);                 // 'block'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(10);                 // ')'
      break;
    case 23305:                     // '(' 'loop'
      consumeT(9);                  // '('
      lookahead1W(25);              // whitespace | 'loop'
      consumeT(91);                 // 'loop'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(10);                 // ')'
      break;
    case 21513:                     // '(' 'if'
      consumeT(9);                  // '('
      lookahead1W(21);              // whitespace | 'if'
      consumeT(84);                 // 'if'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(102);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' | 'type' |
                                    // 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(87);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk == 10                // ')'
         || lk == 36617)            // '(' 'then'
        {
          break;
        }
        try_instr();
      }
      if (l1 == 9)                  // '('
      {
        consumeT(9);                // '('
        lookahead1W(39);            // whitespace | 'then'
        consumeT(143);              // 'then'
        for (;;)
        {
          lookahead1W(89);          // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          if (l1 == 10)             // ')'
          {
            break;
          }
          try_instr();
        }
        consumeT(10);               // ')'
        lookahead1W(49);            // whitespace | '(' | ')'
        if (l1 == 9)                // '('
        {
          consumeT(9);              // '('
          lookahead1W(16);          // whitespace | 'else'
          consumeT(52);             // 'else'
          for (;;)
          {
            lookahead1W(89);        // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
            if (l1 == 10)           // ')'
            {
              break;
            }
            try_instr();
          }
          consumeT(10);             // ')'
        }
      }
      lookahead1W(5);               // whitespace | ')'
      consumeT(10);                 // ')'
      break;
    case 37385:                     // '(' 'try_table'
      consumeT(9);                  // '('
      lookahead1W(40);              // whitespace | 'try_table'
      consumeT(146);                // 'try_table'
      lookahead1W(114);             // whitespace | identifier^token | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(110);             // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'exnref' | 'extern.convert_any' | 'externref' | 'f32' |
                                    // 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(106);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(97);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk != 10761             // '(' 'catch'
         && lk != 11017             // '(' 'catch_all'
         && lk != 11273             // '(' 'catch_all_ref'
         && lk != 11529)            // '(' 'catch_ref'
        {
          break;
        }
        try_catchClause();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(10);                 // ')'
      break;
    default:
      consumeT(9);                  // '('
      lookahead1W(82);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'br' |
                                    // 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' |
                                    // 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' |
                                    // 'unreachable' | 'v128.const'
      try_nonBlockInstr();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 10)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(10);                 // ')'
    }
  }

  function parse_catchClause()
  {
    eventHandler.startNonterminal("catchClause", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(64);              // whitespace | 'catch' | 'catch_all' | 'catch_all_ref' | 'catch_ref'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 10761:                     // '(' 'catch'
      consume(9);                   // '('
      lookahead1W(9);               // whitespace | 'catch'
      consume(42);                  // 'catch'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tagidx();
      lookahead1W(3);               // whitespace | identifier^token
      whitespace();
      parse_label();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 11529:                     // '(' 'catch_ref'
      consume(9);                   // '('
      lookahead1W(12);              // whitespace | 'catch_ref'
      consume(45);                  // 'catch_ref'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tagidx();
      lookahead1W(3);               // whitespace | identifier^token
      whitespace();
      parse_label();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 11017:                     // '(' 'catch_all'
      consume(9);                   // '('
      lookahead1W(10);              // whitespace | 'catch_all'
      consume(43);                  // 'catch_all'
      lookahead1W(3);               // whitespace | identifier^token
      whitespace();
      parse_label();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    default:
      consume(9);                   // '('
      lookahead1W(11);              // whitespace | 'catch_all_ref'
      consume(44);                  // 'catch_all_ref'
      lookahead1W(3);               // whitespace | identifier^token
      whitespace();
      parse_label();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
    }
    eventHandler.endNonterminal("catchClause", e0);
  }

  function try_catchClause()
  {
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(64);              // whitespace | 'catch' | 'catch_all' | 'catch_all_ref' | 'catch_ref'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 10761:                     // '(' 'catch'
      consumeT(9);                  // '('
      lookahead1W(9);               // whitespace | 'catch'
      consumeT(42);                 // 'catch'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tagidx();
      lookahead1W(3);               // whitespace | identifier^token
      try_label();
      lookahead1W(5);               // whitespace | ')'
      consumeT(10);                 // ')'
      break;
    case 11529:                     // '(' 'catch_ref'
      consumeT(9);                  // '('
      lookahead1W(12);              // whitespace | 'catch_ref'
      consumeT(45);                 // 'catch_ref'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tagidx();
      lookahead1W(3);               // whitespace | identifier^token
      try_label();
      lookahead1W(5);               // whitespace | ')'
      consumeT(10);                 // ')'
      break;
    case 11017:                     // '(' 'catch_all'
      consumeT(9);                  // '('
      lookahead1W(10);              // whitespace | 'catch_all'
      consumeT(43);                 // 'catch_all'
      lookahead1W(3);               // whitespace | identifier^token
      try_label();
      lookahead1W(5);               // whitespace | ')'
      consumeT(10);                 // ')'
      break;
    default:
      consumeT(9);                  // '('
      lookahead1W(11);              // whitespace | 'catch_all_ref'
      consumeT(44);                 // 'catch_all_ref'
      lookahead1W(3);               // whitespace | identifier^token
      try_label();
      lookahead1W(5);               // whitespace | ')'
      consumeT(10);                 // ')'
    }
  }

  function parse_seqInstr()
  {
    eventHandler.startNonterminal("seqInstr", e0);
    switch (l1)
    {
    case 31:                        // 'block'
      consume(31);                  // 'block'
      lookahead1W(115);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(111);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' |
                                    // 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128' |
                                    // 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 53)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(53);                  // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      break;
    case 91:                        // 'loop'
      consume(91);                  // 'loop'
      lookahead1W(115);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(111);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' |
                                    // 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128' |
                                    // 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 53)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(53);                  // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      break;
    case 84:                        // 'if'
      consume(84);                  // 'if'
      lookahead1W(118);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(116);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' | 'extern.convert_any' |
                                    // 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(95);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'else' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 52                // 'else'
         || l1 == 53)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      if (l1 == 52)                 // 'else'
      {
        consume(52);                // 'else'
        lookahead1W(94);            // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        if (l1 == 7)                // identifier^token
        {
          whitespace();
          parse_id();
        }
        for (;;)
        {
          lookahead1W(90);          // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          if (l1 == 53)             // 'end'
          {
            break;
          }
          whitespace();
          parse_instr();
        }
      }
      consume(53);                  // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      break;
    case 146:                       // 'try_table'
      consume(146);                 // 'try_table'
      lookahead1W(115);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_label();
      }
      lookahead1W(111);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' |
                                    // 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128' |
                                    // 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(106);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        whitespace();
        parse_blockType();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(97);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk != 10761             // '(' 'catch'
         && lk != 11017             // '(' 'catch_all'
         && lk != 11273             // '(' 'catch_all_ref'
         && lk != 11529)            // '(' 'catch_ref'
        {
          break;
        }
        whitespace();
        parse_catchClause();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 53)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(53);                  // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_id();
      }
      break;
    default:
      parse_nonBlockInstr();
    }
    eventHandler.endNonterminal("seqInstr", e0);
  }

  function try_seqInstr()
  {
    switch (l1)
    {
    case 31:                        // 'block'
      consumeT(31);                 // 'block'
      lookahead1W(115);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(111);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' |
                                    // 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128' |
                                    // 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 53)               // 'end'
        {
          break;
        }
        try_instr();
      }
      consumeT(53);                 // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_id();
      }
      break;
    case 91:                        // 'loop'
      consumeT(91);                 // 'loop'
      lookahead1W(115);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(111);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' |
                                    // 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128' |
                                    // 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 53)               // 'end'
        {
          break;
        }
        try_instr();
      }
      consumeT(53);                 // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_id();
      }
      break;
    case 84:                        // 'if'
      consumeT(84);                 // 'if'
      lookahead1W(118);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(116);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' | 'extern.convert_any' |
                                    // 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(95);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'else' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 52                // 'else'
         || l1 == 53)               // 'end'
        {
          break;
        }
        try_instr();
      }
      if (l1 == 52)                 // 'else'
      {
        consumeT(52);               // 'else'
        lookahead1W(94);            // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        if (l1 == 7)                // identifier^token
        {
          try_id();
        }
        for (;;)
        {
          lookahead1W(90);          // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          if (l1 == 53)             // 'end'
          {
            break;
          }
          try_instr();
        }
      }
      consumeT(53);                 // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_id();
      }
      break;
    case 146:                       // 'try_table'
      consumeT(146);                // 'try_table'
      lookahead1W(115);             // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_label();
      }
      lookahead1W(111);             // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' |
                                    // 'f32' | 'f64' | 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128' |
                                    // 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(106);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable' |
                                    // 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 61                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 68                  // 'funcref'
       || lk == 77                  // 'i32'
       || lk == 79                  // 'i64'
       || lk == 149                 // 'v128'
       || lk == 27657               // '(' 'param'
       || lk == 28169               // '(' 'ref'
       || lk == 30473               // '(' 'result'
       || lk == 37641)              // '(' 'type'
      {
        try_blockType();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(97);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk != 10761             // '(' 'catch'
         && lk != 11017             // '(' 'catch_all'
         && lk != 11273             // '(' 'catch_all_ref'
         && lk != 11529)            // '(' 'catch_ref'
        {
          break;
        }
        try_catchClause();
      }
      for (;;)
      {
        lookahead1W(90);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        if (l1 == 53)               // 'end'
        {
          break;
        }
        try_instr();
      }
      consumeT(53);                 // 'end'
      lookahead1W(108);             // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 7)                  // identifier^token
      {
        try_id();
      }
      break;
    default:
      try_nonBlockInstr();
    }
  }

  function parse_nonBlockInstr()
  {
    eventHandler.startNonterminal("nonBlockInstr", e0);
    switch (l1)
    {
    case 8:                         // dottedName
      lookahead2W(119);             // whitespace | string | nat | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      switch (lk)
      {
      case 776:                     // dottedName string
        lookahead3W(44);            // whitespace | string | ')'
        break;
      case 2056:                    // dottedName dottedName
        lookahead3W(119);           // whitespace | string | nat | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 2312:                    // dottedName '('
        lookahead3W(96);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable' | 'v128.const'
        break;
      case 13320:                   // dottedName 'else'
        lookahead3W(94);            // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 13576:                   // dottedName 'end'
        lookahead3W(108);           // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 17160:                   // dottedName 'func'
        lookahead3W(56);            // whitespace | nat | identifier^token | ')'
        break;
      case 21512:                   // dottedName 'if'
        lookahead3W(118);           // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
        break;
      case 29960:                   // dottedName 'ref.null'
        lookahead3W(80);            // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
        break;
      case 38408:                   // dottedName 'v128.const'
        lookahead3W(73);            // whitespace | 'f32x4' | 'f64x2' | 'i16x8' | 'i32x4' | 'i64x2' | 'i8x16'
        break;
      case 10248:                   // dottedName 'call_indirect'
      case 31240:                   // dottedName 'return_call_indirect'
        lookahead3W(55);            // whitespace | nat | identifier^token | '('
        break;
      case 28680:                   // dottedName 'ref.cast'
      case 30216:                   // dottedName 'ref.test'
        lookahead3W(62);            // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
        break;
      case 3336:                    // dottedName 'align='
      case 21256:                   // dottedName 'i8x16.shuffle'
      case 27400:                   // dottedName 'offset='
        lookahead3W(1);             // whitespace | nat
        break;
      case 7944:                    // dottedName 'block'
      case 23304:                   // dottedName 'loop'
      case 37384:                   // dottedName 'try_table'
        lookahead3W(115);           // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
        break;
      case 14344:                   // dottedName 'exnref'
      case 15368:                   // dottedName 'externref'
      case 17416:                   // dottedName 'funcref'
        lookahead3W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      case 23816:                   // dottedName 'memory.copy'
      case 24072:                   // dottedName 'memory.fill'
      case 24328:                   // dottedName 'memory.grow'
      case 24840:                   // dottedName 'memory.size'
        lookahead3W(112);           // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 2568:                    // dottedName ')'
      case 3848:                    // dottedName 'any.convert_extern'
      case 6152:                    // dottedName 'array.len'
      case 12552:                   // dottedName 'drop'
      case 15112:                   // dottedName 'extern.convert_any'
      case 19208:                   // dottedName 'i31.get_s'
      case 19464:                   // dottedName 'i31.get_u'
      case 26632:                   // dottedName 'nop'
      case 28424:                   // dottedName 'ref.as_non_null'
      case 28936:                   // dottedName 'ref.eq'
      case 29448:                   // dottedName 'ref.i31'
      case 29704:                   // dottedName 'ref.is_null'
      case 30728:                   // dottedName 'return'
      case 31752:                   // dottedName 'select'
      case 37128:                   // dottedName 'throw_ref'
      case 37896:                   // dottedName 'unreachable'
        lookahead3W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      case 4360:                    // dottedName 'array.copy'
      case 4616:                    // dottedName 'array.fill'
      case 4872:                    // dottedName 'array.get'
      case 5128:                    // dottedName 'array.get_s'
      case 5384:                    // dottedName 'array.get_u'
      case 5640:                    // dottedName 'array.init_data'
      case 5896:                    // dottedName 'array.init_elem'
      case 6408:                    // dottedName 'array.new'
      case 6664:                    // dottedName 'array.new_data'
      case 6920:                    // dottedName 'array.new_default'
      case 7176:                    // dottedName 'array.new_elem'
      case 7432:                    // dottedName 'array.new_fixed'
      case 7688:                    // dottedName 'array.set'
      case 8200:                    // dottedName 'br'
      case 8456:                    // dottedName 'br_if'
      case 8712:                    // dottedName 'br_on_cast'
      case 8968:                    // dottedName 'br_on_cast_fail'
      case 9224:                    // dottedName 'br_on_non_null'
      case 9480:                    // dottedName 'br_on_null'
      case 9736:                    // dottedName 'br_table'
      case 9992:                    // dottedName 'call'
      case 10504:                   // dottedName 'call_ref'
      case 12040:                   // dottedName 'data.drop'
      case 13064:                   // dottedName 'elem.drop'
      case 17928:                   // dottedName 'global.get'
      case 18184:                   // dottedName 'global.set'
      case 22536:                   // dottedName 'local.get'
      case 22792:                   // dottedName 'local.set'
      case 23048:                   // dottedName 'local.tee'
      case 24584:                   // dottedName 'memory.init'
      case 29192:                   // dottedName 'ref.func'
      case 30984:                   // dottedName 'return_call'
      case 31496:                   // dottedName 'return_call_ref'
      case 32520:                   // dottedName 'struct.get'
      case 32776:                   // dottedName 'struct.get_s'
      case 33032:                   // dottedName 'struct.get_u'
      case 33288:                   // dottedName 'struct.new'
      case 33544:                   // dottedName 'struct.new_default'
      case 33800:                   // dottedName 'struct.set'
      case 34568:                   // dottedName 'table.copy'
      case 34824:                   // dottedName 'table.fill'
      case 35080:                   // dottedName 'table.get'
      case 35336:                   // dottedName 'table.grow'
      case 35592:                   // dottedName 'table.init'
      case 35848:                   // dottedName 'table.set'
      case 36104:                   // dottedName 'table.size'
      case 36872:                   // dottedName 'throw'
        lookahead3W(46);            // whitespace | nat | identifier^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 15                    // 'any.convert_extern'
     && lk != 17                    // 'array.copy'
     && lk != 18                    // 'array.fill'
     && lk != 19                    // 'array.get'
     && lk != 20                    // 'array.get_s'
     && lk != 21                    // 'array.get_u'
     && lk != 22                    // 'array.init_data'
     && lk != 23                    // 'array.init_elem'
     && lk != 24                    // 'array.len'
     && lk != 25                    // 'array.new'
     && lk != 26                    // 'array.new_data'
     && lk != 27                    // 'array.new_default'
     && lk != 28                    // 'array.new_elem'
     && lk != 29                    // 'array.new_fixed'
     && lk != 30                    // 'array.set'
     && lk != 32                    // 'br'
     && lk != 33                    // 'br_if'
     && lk != 34                    // 'br_on_cast'
     && lk != 35                    // 'br_on_cast_fail'
     && lk != 36                    // 'br_on_non_null'
     && lk != 37                    // 'br_on_null'
     && lk != 38                    // 'br_table'
     && lk != 39                    // 'call'
     && lk != 40                    // 'call_indirect'
     && lk != 41                    // 'call_ref'
     && lk != 47                    // 'data.drop'
     && lk != 49                    // 'drop'
     && lk != 51                    // 'elem.drop'
     && lk != 59                    // 'extern.convert_any'
     && lk != 70                    // 'global.get'
     && lk != 71                    // 'global.set'
     && lk != 75                    // 'i31.get_s'
     && lk != 76                    // 'i31.get_u'
     && lk != 83                    // 'i8x16.shuffle'
     && lk != 88                    // 'local.get'
     && lk != 89                    // 'local.set'
     && lk != 90                    // 'local.tee'
     && lk != 93                    // 'memory.copy'
     && lk != 94                    // 'memory.fill'
     && lk != 95                    // 'memory.grow'
     && lk != 96                    // 'memory.init'
     && lk != 97                    // 'memory.size'
     && lk != 104                   // 'nop'
     && lk != 111                   // 'ref.as_non_null'
     && lk != 112                   // 'ref.cast'
     && lk != 113                   // 'ref.eq'
     && lk != 114                   // 'ref.func'
     && lk != 115                   // 'ref.i31'
     && lk != 116                   // 'ref.is_null'
     && lk != 117                   // 'ref.null'
     && lk != 118                   // 'ref.test'
     && lk != 120                   // 'return'
     && lk != 121                   // 'return_call'
     && lk != 122                   // 'return_call_indirect'
     && lk != 123                   // 'return_call_ref'
     && lk != 124                   // 'select'
     && lk != 127                   // 'struct.get'
     && lk != 128                   // 'struct.get_s'
     && lk != 129                   // 'struct.get_u'
     && lk != 130                   // 'struct.new'
     && lk != 131                   // 'struct.new_default'
     && lk != 132                   // 'struct.set'
     && lk != 135                   // 'table.copy'
     && lk != 136                   // 'table.fill'
     && lk != 137                   // 'table.get'
     && lk != 138                   // 'table.grow'
     && lk != 139                   // 'table.init'
     && lk != 140                   // 'table.set'
     && lk != 141                   // 'table.size'
     && lk != 144                   // 'throw'
     && lk != 145                   // 'throw_ref'
     && lk != 148                   // 'unreachable'
     && lk != 150                   // 'v128.const'
     && lk != 1032                  // dottedName nat
     && lk != 1288)                 // dottedName float
    {
      lk = memoized(4, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_memLikeInstr();
          lk = -8;
        }
        catch (p8A)
        {
          lk = -9;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(4, e0, lk);
      }
    }
    switch (lk)
    {
    case 104:                       // 'nop'
      consume(104);                 // 'nop'
      break;
    case 148:                       // 'unreachable'
      consume(148);                 // 'unreachable'
      break;
    case 49:                        // 'drop'
      consume(49);                  // 'drop'
      break;
    case 120:                       // 'return'
      consume(120);                 // 'return'
      break;
    case 145:                       // 'throw_ref'
      consume(145);                 // 'throw_ref'
      break;
    case 124:                       // 'select'
      consume(124);                 // 'select'
      lookahead1W(107);             // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(98);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 30473)              // '(' 'result'
      {
        whitespace();
        parse_resultTypes();
      }
      break;
    case -8:
      parse_memLikeInstr();
      break;
    case -9:
    case 1288:                      // dottedName float
      parse_numericLikeInstr();
      break;
    case 88:                        // 'local.get'
      consume(88);                  // 'local.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      break;
    case 89:                        // 'local.set'
      consume(89);                  // 'local.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      break;
    case 90:                        // 'local.tee'
      consume(90);                  // 'local.tee'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      break;
    case 70:                        // 'global.get'
      consume(70);                  // 'global.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      break;
    case 71:                        // 'global.set'
      consume(71);                  // 'global.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_index();
      break;
    case 137:                       // 'table.get'
      consume(137);                 // 'table.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      break;
    case 140:                       // 'table.set'
      consume(140);                 // 'table.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      break;
    case 141:                       // 'table.size'
      consume(141);                 // 'table.size'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      break;
    case 138:                       // 'table.grow'
      consume(138);                 // 'table.grow'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      break;
    case 136:                       // 'table.fill'
      consume(136);                 // 'table.fill'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      break;
    case 135:                       // 'table.copy'
      consume(135);                 // 'table.copy'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      break;
    case 139:                       // 'table.init'
      consume(139);                 // 'table.init'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tableidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_elemidx();
      break;
    case 51:                        // 'elem.drop'
      consume(51);                  // 'elem.drop'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_elemidx();
      break;
    case 97:                        // 'memory.size'
      consume(97);                  // 'memory.size'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_memidx();
      }
      break;
    case 95:                        // 'memory.grow'
      consume(95);                  // 'memory.grow'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_memidx();
      }
      break;
    case 94:                        // 'memory.fill'
      consume(94);                  // 'memory.fill'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_memidx();
      }
      break;
    case 93:                        // 'memory.copy'
      consume(93);                  // 'memory.copy'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      switch (l1)
      {
      case 4:                       // nat
      case 7:                       // identifier^token
        lookahead2W(112);           // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        switch (lk)
        {
        case 772:                   // nat string
        case 775:                   // identifier^token string
          lookahead3W(44);          // whitespace | string | ')'
          break;
        case 2052:                  // nat dottedName
        case 2055:                  // identifier^token dottedName
          lookahead3W(119);         // whitespace | string | nat | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 2308:                  // nat '('
        case 2311:                  // identifier^token '('
          lookahead3W(96);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable' | 'v128.const'
          break;
        case 13316:                 // nat 'else'
        case 13319:                 // identifier^token 'else'
          lookahead3W(94);          // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 13572:                 // nat 'end'
        case 13575:                 // identifier^token 'end'
          lookahead3W(108);         // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 17156:                 // nat 'func'
        case 17159:                 // identifier^token 'func'
          lookahead3W(56);          // whitespace | nat | identifier^token | ')'
          break;
        case 21252:                 // nat 'i8x16.shuffle'
        case 21255:                 // identifier^token 'i8x16.shuffle'
          lookahead3W(1);           // whitespace | nat
          break;
        case 21508:                 // nat 'if'
        case 21511:                 // identifier^token 'if'
          lookahead3W(118);         // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
          break;
        case 29956:                 // nat 'ref.null'
        case 29959:                 // identifier^token 'ref.null'
          lookahead3W(80);          // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
          break;
        case 38404:                 // nat 'v128.const'
        case 38407:                 // identifier^token 'v128.const'
          lookahead3W(73);          // whitespace | 'f32x4' | 'f64x2' | 'i16x8' | 'i32x4' | 'i64x2' | 'i8x16'
          break;
        case 10244:                 // nat 'call_indirect'
        case 31236:                 // nat 'return_call_indirect'
        case 10247:                 // identifier^token 'call_indirect'
        case 31239:                 // identifier^token 'return_call_indirect'
          lookahead3W(55);          // whitespace | nat | identifier^token | '('
          break;
        case 28676:                 // nat 'ref.cast'
        case 30212:                 // nat 'ref.test'
        case 28679:                 // identifier^token 'ref.cast'
        case 30215:                 // identifier^token 'ref.test'
          lookahead3W(62);          // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
          break;
        case 7940:                  // nat 'block'
        case 23300:                 // nat 'loop'
        case 37380:                 // nat 'try_table'
        case 7943:                  // identifier^token 'block'
        case 23303:                 // identifier^token 'loop'
        case 37383:                 // identifier^token 'try_table'
          lookahead3W(115);         // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
          break;
        case 14340:                 // nat 'exnref'
        case 15364:                 // nat 'externref'
        case 17412:                 // nat 'funcref'
        case 14343:                 // identifier^token 'exnref'
        case 15367:                 // identifier^token 'externref'
        case 17415:                 // identifier^token 'funcref'
          lookahead3W(89);          // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          break;
        case 23812:                 // nat 'memory.copy'
        case 24068:                 // nat 'memory.fill'
        case 24324:                 // nat 'memory.grow'
        case 24836:                 // nat 'memory.size'
        case 23815:                 // identifier^token 'memory.copy'
        case 24071:                 // identifier^token 'memory.fill'
        case 24327:                 // identifier^token 'memory.grow'
        case 24839:                 // identifier^token 'memory.size'
          lookahead3W(112);         // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 2564:                  // nat ')'
        case 3844:                  // nat 'any.convert_extern'
        case 6148:                  // nat 'array.len'
        case 12548:                 // nat 'drop'
        case 15108:                 // nat 'extern.convert_any'
        case 19204:                 // nat 'i31.get_s'
        case 19460:                 // nat 'i31.get_u'
        case 26628:                 // nat 'nop'
        case 28420:                 // nat 'ref.as_non_null'
        case 28932:                 // nat 'ref.eq'
        case 29444:                 // nat 'ref.i31'
        case 29700:                 // nat 'ref.is_null'
        case 30724:                 // nat 'return'
        case 31748:                 // nat 'select'
        case 37124:                 // nat 'throw_ref'
        case 37892:                 // nat 'unreachable'
        case 2567:                  // identifier^token ')'
        case 3847:                  // identifier^token 'any.convert_extern'
        case 6151:                  // identifier^token 'array.len'
        case 12551:                 // identifier^token 'drop'
        case 15111:                 // identifier^token 'extern.convert_any'
        case 19207:                 // identifier^token 'i31.get_s'
        case 19463:                 // identifier^token 'i31.get_u'
        case 26631:                 // identifier^token 'nop'
        case 28423:                 // identifier^token 'ref.as_non_null'
        case 28935:                 // identifier^token 'ref.eq'
        case 29447:                 // identifier^token 'ref.i31'
        case 29703:                 // identifier^token 'ref.is_null'
        case 30727:                 // identifier^token 'return'
        case 31751:                 // identifier^token 'select'
        case 37127:                 // identifier^token 'throw_ref'
        case 37895:                 // identifier^token 'unreachable'
          lookahead3W(107);         // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          break;
        case 4356:                  // nat 'array.copy'
        case 4612:                  // nat 'array.fill'
        case 4868:                  // nat 'array.get'
        case 5124:                  // nat 'array.get_s'
        case 5380:                  // nat 'array.get_u'
        case 5636:                  // nat 'array.init_data'
        case 5892:                  // nat 'array.init_elem'
        case 6404:                  // nat 'array.new'
        case 6660:                  // nat 'array.new_data'
        case 6916:                  // nat 'array.new_default'
        case 7172:                  // nat 'array.new_elem'
        case 7428:                  // nat 'array.new_fixed'
        case 7684:                  // nat 'array.set'
        case 8196:                  // nat 'br'
        case 8452:                  // nat 'br_if'
        case 8708:                  // nat 'br_on_cast'
        case 8964:                  // nat 'br_on_cast_fail'
        case 9220:                  // nat 'br_on_non_null'
        case 9476:                  // nat 'br_on_null'
        case 9732:                  // nat 'br_table'
        case 9988:                  // nat 'call'
        case 10500:                 // nat 'call_ref'
        case 12036:                 // nat 'data.drop'
        case 13060:                 // nat 'elem.drop'
        case 17924:                 // nat 'global.get'
        case 18180:                 // nat 'global.set'
        case 22532:                 // nat 'local.get'
        case 22788:                 // nat 'local.set'
        case 23044:                 // nat 'local.tee'
        case 24580:                 // nat 'memory.init'
        case 29188:                 // nat 'ref.func'
        case 30980:                 // nat 'return_call'
        case 31492:                 // nat 'return_call_ref'
        case 32516:                 // nat 'struct.get'
        case 32772:                 // nat 'struct.get_s'
        case 33028:                 // nat 'struct.get_u'
        case 33284:                 // nat 'struct.new'
        case 33540:                 // nat 'struct.new_default'
        case 33796:                 // nat 'struct.set'
        case 34564:                 // nat 'table.copy'
        case 34820:                 // nat 'table.fill'
        case 35076:                 // nat 'table.get'
        case 35332:                 // nat 'table.grow'
        case 35588:                 // nat 'table.init'
        case 35844:                 // nat 'table.set'
        case 36100:                 // nat 'table.size'
        case 36868:                 // nat 'throw'
        case 4359:                  // identifier^token 'array.copy'
        case 4615:                  // identifier^token 'array.fill'
        case 4871:                  // identifier^token 'array.get'
        case 5127:                  // identifier^token 'array.get_s'
        case 5383:                  // identifier^token 'array.get_u'
        case 5639:                  // identifier^token 'array.init_data'
        case 5895:                  // identifier^token 'array.init_elem'
        case 6407:                  // identifier^token 'array.new'
        case 6663:                  // identifier^token 'array.new_data'
        case 6919:                  // identifier^token 'array.new_default'
        case 7175:                  // identifier^token 'array.new_elem'
        case 7431:                  // identifier^token 'array.new_fixed'
        case 7687:                  // identifier^token 'array.set'
        case 8199:                  // identifier^token 'br'
        case 8455:                  // identifier^token 'br_if'
        case 8711:                  // identifier^token 'br_on_cast'
        case 8967:                  // identifier^token 'br_on_cast_fail'
        case 9223:                  // identifier^token 'br_on_non_null'
        case 9479:                  // identifier^token 'br_on_null'
        case 9735:                  // identifier^token 'br_table'
        case 9991:                  // identifier^token 'call'
        case 10503:                 // identifier^token 'call_ref'
        case 12039:                 // identifier^token 'data.drop'
        case 13063:                 // identifier^token 'elem.drop'
        case 17927:                 // identifier^token 'global.get'
        case 18183:                 // identifier^token 'global.set'
        case 22535:                 // identifier^token 'local.get'
        case 22791:                 // identifier^token 'local.set'
        case 23047:                 // identifier^token 'local.tee'
        case 24583:                 // identifier^token 'memory.init'
        case 29191:                 // identifier^token 'ref.func'
        case 30983:                 // identifier^token 'return_call'
        case 31495:                 // identifier^token 'return_call_ref'
        case 32519:                 // identifier^token 'struct.get'
        case 32775:                 // identifier^token 'struct.get_s'
        case 33031:                 // identifier^token 'struct.get_u'
        case 33287:                 // identifier^token 'struct.new'
        case 33543:                 // identifier^token 'struct.new_default'
        case 33799:                 // identifier^token 'struct.set'
        case 34567:                 // identifier^token 'table.copy'
        case 34823:                 // identifier^token 'table.fill'
        case 35079:                 // identifier^token 'table.get'
        case 35335:                 // identifier^token 'table.grow'
        case 35591:                 // identifier^token 'table.init'
        case 35847:                 // identifier^token 'table.set'
        case 36103:                 // identifier^token 'table.size'
        case 36871:                 // identifier^token 'throw'
          lookahead3W(46);          // whitespace | nat | identifier^token
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 3                   // string
       && lk != 8                   // dottedName
       && lk != 9                   // '('
       && lk != 10                  // ')'
       && lk != 15                  // 'any.convert_extern'
       && lk != 17                  // 'array.copy'
       && lk != 18                  // 'array.fill'
       && lk != 19                  // 'array.get'
       && lk != 20                  // 'array.get_s'
       && lk != 21                  // 'array.get_u'
       && lk != 22                  // 'array.init_data'
       && lk != 23                  // 'array.init_elem'
       && lk != 24                  // 'array.len'
       && lk != 25                  // 'array.new'
       && lk != 26                  // 'array.new_data'
       && lk != 27                  // 'array.new_default'
       && lk != 28                  // 'array.new_elem'
       && lk != 29                  // 'array.new_fixed'
       && lk != 30                  // 'array.set'
       && lk != 31                  // 'block'
       && lk != 32                  // 'br'
       && lk != 33                  // 'br_if'
       && lk != 34                  // 'br_on_cast'
       && lk != 35                  // 'br_on_cast_fail'
       && lk != 36                  // 'br_on_non_null'
       && lk != 37                  // 'br_on_null'
       && lk != 38                  // 'br_table'
       && lk != 39                  // 'call'
       && lk != 40                  // 'call_indirect'
       && lk != 41                  // 'call_ref'
       && lk != 47                  // 'data.drop'
       && lk != 49                  // 'drop'
       && lk != 51                  // 'elem.drop'
       && lk != 52                  // 'else'
       && lk != 53                  // 'end'
       && lk != 56                  // 'exnref'
       && lk != 59                  // 'extern.convert_any'
       && lk != 60                  // 'externref'
       && lk != 67                  // 'func'
       && lk != 68                  // 'funcref'
       && lk != 70                  // 'global.get'
       && lk != 71                  // 'global.set'
       && lk != 75                  // 'i31.get_s'
       && lk != 76                  // 'i31.get_u'
       && lk != 83                  // 'i8x16.shuffle'
       && lk != 84                  // 'if'
       && lk != 88                  // 'local.get'
       && lk != 89                  // 'local.set'
       && lk != 90                  // 'local.tee'
       && lk != 91                  // 'loop'
       && lk != 93                  // 'memory.copy'
       && lk != 94                  // 'memory.fill'
       && lk != 95                  // 'memory.grow'
       && lk != 96                  // 'memory.init'
       && lk != 97                  // 'memory.size'
       && lk != 104                 // 'nop'
       && lk != 111                 // 'ref.as_non_null'
       && lk != 112                 // 'ref.cast'
       && lk != 113                 // 'ref.eq'
       && lk != 114                 // 'ref.func'
       && lk != 115                 // 'ref.i31'
       && lk != 116                 // 'ref.is_null'
       && lk != 117                 // 'ref.null'
       && lk != 118                 // 'ref.test'
       && lk != 120                 // 'return'
       && lk != 121                 // 'return_call'
       && lk != 122                 // 'return_call_indirect'
       && lk != 123                 // 'return_call_ref'
       && lk != 124                 // 'select'
       && lk != 127                 // 'struct.get'
       && lk != 128                 // 'struct.get_s'
       && lk != 129                 // 'struct.get_u'
       && lk != 130                 // 'struct.new'
       && lk != 131                 // 'struct.new_default'
       && lk != 132                 // 'struct.set'
       && lk != 135                 // 'table.copy'
       && lk != 136                 // 'table.fill'
       && lk != 137                 // 'table.get'
       && lk != 138                 // 'table.grow'
       && lk != 139                 // 'table.init'
       && lk != 140                 // 'table.set'
       && lk != 141                 // 'table.size'
       && lk != 144                 // 'throw'
       && lk != 145                 // 'throw_ref'
       && lk != 146                 // 'try_table'
       && lk != 148                 // 'unreachable'
       && lk != 150                 // 'v128.const'
       && lk != 1028                // nat nat
       && lk != 1031                // identifier^token nat
       && lk != 1796                // nat identifier^token
       && lk != 1799)               // identifier^token identifier^token
      {
        lk = memoized(5, e0);
        if (lk == 0)
        {
          var b0B = b0; var e0B = e0; var l1B = l1;
          var b1B = b1; var e1B = e1; var l2B = l2;
          var b2B = b2; var e2B = e2; var l3B = l3;
          var b3B = b3; var e3B = e3;
          try
          {
            try_memidx();
            lk = -1;
          }
          catch (p1B)
          {
            lk = -2;
          }
          b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
          b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
          b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
          b3 = b3B; e3 = e3B; end = e3B; }}}
          memoize(5, e0, lk);
        }
      }
      if (lk == -1
       || lk == 1028                // nat nat
       || lk == 1031                // identifier^token nat
       || lk == 1796                // nat identifier^token
       || lk == 1799)               // identifier^token identifier^token
      {
        whitespace();
        parse_memidx();
      }
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        whitespace();
        parse_memidx();
      }
      break;
    case 96:                        // 'memory.init'
      consume(96);                  // 'memory.init'
      lookahead1W(46);              // whitespace | nat | identifier^token
      switch (l1)
      {
      case 4:                       // nat
      case 7:                       // identifier^token
        lookahead2W(112);           // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 1028                // nat nat
       || lk == 1031                // identifier^token nat
       || lk == 1796                // nat identifier^token
       || lk == 1799)               // identifier^token identifier^token
      {
        whitespace();
        parse_memidx();
      }
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_dataidx();
      break;
    case 47:                        // 'data.drop'
      consume(47);                  // 'data.drop'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_dataidx();
      break;
    case 117:                       // 'ref.null'
      consume(117);                 // 'ref.null'
      lookahead1W(80);              // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
      whitespace();
      parse_heaptype();
      break;
    case 114:                       // 'ref.func'
      consume(114);                 // 'ref.func'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_funcidx();
      break;
    case 116:                       // 'ref.is_null'
      consume(116);                 // 'ref.is_null'
      break;
    case 111:                       // 'ref.as_non_null'
      consume(111);                 // 'ref.as_non_null'
      break;
    case 113:                       // 'ref.eq'
      consume(113);                 // 'ref.eq'
      break;
    case 118:                       // 'ref.test'
      consume(118);                 // 'ref.test'
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      break;
    case 112:                       // 'ref.cast'
      consume(112);                 // 'ref.cast'
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      break;
    case 130:                       // 'struct.new'
      consume(130);                 // 'struct.new'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 131:                       // 'struct.new_default'
      consume(131);                 // 'struct.new_default'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 127:                       // 'struct.get'
      consume(127);                 // 'struct.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_fieldidx();
      break;
    case 128:                       // 'struct.get_s'
      consume(128);                 // 'struct.get_s'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_fieldidx();
      break;
    case 129:                       // 'struct.get_u'
      consume(129);                 // 'struct.get_u'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_fieldidx();
      break;
    case 132:                       // 'struct.set'
      consume(132);                 // 'struct.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_fieldidx();
      break;
    case 25:                        // 'array.new'
      consume(25);                  // 'array.new'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 27:                        // 'array.new_default'
      consume(27);                  // 'array.new_default'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 29:                        // 'array.new_fixed'
      consume(29);                  // 'array.new_fixed'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(1);               // whitespace | nat
      consume(4);                   // nat
      break;
    case 26:                        // 'array.new_data'
      consume(26);                  // 'array.new_data'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_dataidx();
      break;
    case 28:                        // 'array.new_elem'
      consume(28);                  // 'array.new_elem'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_elemidx();
      break;
    case 19:                        // 'array.get'
      consume(19);                  // 'array.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 20:                        // 'array.get_s'
      consume(20);                  // 'array.get_s'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 21:                        // 'array.get_u'
      consume(21);                  // 'array.get_u'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 30:                        // 'array.set'
      consume(30);                  // 'array.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 24:                        // 'array.len'
      consume(24);                  // 'array.len'
      break;
    case 18:                        // 'array.fill'
      consume(18);                  // 'array.fill'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 17:                        // 'array.copy'
      consume(17);                  // 'array.copy'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 22:                        // 'array.init_data'
      consume(22);                  // 'array.init_data'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_dataidx();
      break;
    case 23:                        // 'array.init_elem'
      consume(23);                  // 'array.init_elem'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_elemidx();
      break;
    case 115:                       // 'ref.i31'
      consume(115);                 // 'ref.i31'
      break;
    case 75:                        // 'i31.get_s'
      consume(75);                  // 'i31.get_s'
      break;
    case 76:                        // 'i31.get_u'
      consume(76);                  // 'i31.get_u'
      break;
    case 15:                        // 'any.convert_extern'
      consume(15);                  // 'any.convert_extern'
      break;
    case 59:                        // 'extern.convert_any'
      consume(59);                  // 'extern.convert_any'
      break;
    case 39:                        // 'call'
      consume(39);                  // 'call'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_funcidx();
      break;
    case 41:                        // 'call_ref'
      consume(41);                  // 'call_ref'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 40:                        // 'call_indirect'
      consume(40);                  // 'call_indirect'
      lookahead1W(55);              // whitespace | nat | identifier^token | '('
      if (l1 != 9)                  // '('
      {
        whitespace();
        parse_tableidx();
      }
      lookahead1W(4);               // whitespace | '('
      whitespace();
      parse_typeuse();
      break;
    case 121:                       // 'return_call'
      consume(121);                 // 'return_call'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_funcidx();
      break;
    case 123:                       // 'return_call_ref'
      consume(123);                 // 'return_call_ref'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      break;
    case 122:                       // 'return_call_indirect'
      consume(122);                 // 'return_call_indirect'
      lookahead1W(55);              // whitespace | nat | identifier^token | '('
      if (l1 != 9)                  // '('
      {
        whitespace();
        parse_tableidx();
      }
      lookahead1W(4);               // whitespace | '('
      whitespace();
      parse_typeuse();
      break;
    case 32:                        // 'br'
      consume(32);                  // 'br'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_labelidx();
      break;
    case 33:                        // 'br_if'
      consume(33);                  // 'br_if'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_labelidx();
      break;
    case 38:                        // 'br_table'
      consume(38);                  // 'br_table'
      for (;;)
      {
        lookahead1W(46);            // whitespace | nat | identifier^token
        whitespace();
        parse_labelidx();
        lookahead1W(46);            // whitespace | nat | identifier^token
        switch (l1)
        {
        case 4:                     // nat
        case 7:                     // identifier^token
          lookahead2W(112);         // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk != 1028              // nat nat
         && lk != 1031              // identifier^token nat
         && lk != 1796              // nat identifier^token
         && lk != 1799)             // identifier^token identifier^token
        {
          break;
        }
      }
      whitespace();
      parse_labelidx();
      break;
    case 37:                        // 'br_on_null'
      consume(37);                  // 'br_on_null'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_labelidx();
      break;
    case 36:                        // 'br_on_non_null'
      consume(36);                  // 'br_on_non_null'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_labelidx();
      break;
    case 34:                        // 'br_on_cast'
      consume(34);                  // 'br_on_cast'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_labelidx();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      break;
    case 35:                        // 'br_on_cast_fail'
      consume(35);                  // 'br_on_cast_fail'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_labelidx();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      whitespace();
      parse_reftype();
      break;
    case 144:                       // 'throw'
      consume(144);                 // 'throw'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_tagidx();
      break;
    default:
      parse_simdLikeInstr();
    }
    eventHandler.endNonterminal("nonBlockInstr", e0);
  }

  function try_nonBlockInstr()
  {
    switch (l1)
    {
    case 8:                         // dottedName
      lookahead2W(119);             // whitespace | string | nat | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      switch (lk)
      {
      case 776:                     // dottedName string
        lookahead3W(44);            // whitespace | string | ')'
        break;
      case 2056:                    // dottedName dottedName
        lookahead3W(119);           // whitespace | string | nat | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 2312:                    // dottedName '('
        lookahead3W(96);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable' | 'v128.const'
        break;
      case 13320:                   // dottedName 'else'
        lookahead3W(94);            // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 13576:                   // dottedName 'end'
        lookahead3W(108);           // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 17160:                   // dottedName 'func'
        lookahead3W(56);            // whitespace | nat | identifier^token | ')'
        break;
      case 21512:                   // dottedName 'if'
        lookahead3W(118);           // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
        break;
      case 29960:                   // dottedName 'ref.null'
        lookahead3W(80);            // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
        break;
      case 38408:                   // dottedName 'v128.const'
        lookahead3W(73);            // whitespace | 'f32x4' | 'f64x2' | 'i16x8' | 'i32x4' | 'i64x2' | 'i8x16'
        break;
      case 10248:                   // dottedName 'call_indirect'
      case 31240:                   // dottedName 'return_call_indirect'
        lookahead3W(55);            // whitespace | nat | identifier^token | '('
        break;
      case 28680:                   // dottedName 'ref.cast'
      case 30216:                   // dottedName 'ref.test'
        lookahead3W(62);            // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
        break;
      case 3336:                    // dottedName 'align='
      case 21256:                   // dottedName 'i8x16.shuffle'
      case 27400:                   // dottedName 'offset='
        lookahead3W(1);             // whitespace | nat
        break;
      case 7944:                    // dottedName 'block'
      case 23304:                   // dottedName 'loop'
      case 37384:                   // dottedName 'try_table'
        lookahead3W(115);           // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
        break;
      case 14344:                   // dottedName 'exnref'
      case 15368:                   // dottedName 'externref'
      case 17416:                   // dottedName 'funcref'
        lookahead3W(89);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      case 23816:                   // dottedName 'memory.copy'
      case 24072:                   // dottedName 'memory.fill'
      case 24328:                   // dottedName 'memory.grow'
      case 24840:                   // dottedName 'memory.size'
        lookahead3W(112);           // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      case 2568:                    // dottedName ')'
      case 3848:                    // dottedName 'any.convert_extern'
      case 6152:                    // dottedName 'array.len'
      case 12552:                   // dottedName 'drop'
      case 15112:                   // dottedName 'extern.convert_any'
      case 19208:                   // dottedName 'i31.get_s'
      case 19464:                   // dottedName 'i31.get_u'
      case 26632:                   // dottedName 'nop'
      case 28424:                   // dottedName 'ref.as_non_null'
      case 28936:                   // dottedName 'ref.eq'
      case 29448:                   // dottedName 'ref.i31'
      case 29704:                   // dottedName 'ref.is_null'
      case 30728:                   // dottedName 'return'
      case 31752:                   // dottedName 'select'
      case 37128:                   // dottedName 'throw_ref'
      case 37896:                   // dottedName 'unreachable'
        lookahead3W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      case 4360:                    // dottedName 'array.copy'
      case 4616:                    // dottedName 'array.fill'
      case 4872:                    // dottedName 'array.get'
      case 5128:                    // dottedName 'array.get_s'
      case 5384:                    // dottedName 'array.get_u'
      case 5640:                    // dottedName 'array.init_data'
      case 5896:                    // dottedName 'array.init_elem'
      case 6408:                    // dottedName 'array.new'
      case 6664:                    // dottedName 'array.new_data'
      case 6920:                    // dottedName 'array.new_default'
      case 7176:                    // dottedName 'array.new_elem'
      case 7432:                    // dottedName 'array.new_fixed'
      case 7688:                    // dottedName 'array.set'
      case 8200:                    // dottedName 'br'
      case 8456:                    // dottedName 'br_if'
      case 8712:                    // dottedName 'br_on_cast'
      case 8968:                    // dottedName 'br_on_cast_fail'
      case 9224:                    // dottedName 'br_on_non_null'
      case 9480:                    // dottedName 'br_on_null'
      case 9736:                    // dottedName 'br_table'
      case 9992:                    // dottedName 'call'
      case 10504:                   // dottedName 'call_ref'
      case 12040:                   // dottedName 'data.drop'
      case 13064:                   // dottedName 'elem.drop'
      case 17928:                   // dottedName 'global.get'
      case 18184:                   // dottedName 'global.set'
      case 22536:                   // dottedName 'local.get'
      case 22792:                   // dottedName 'local.set'
      case 23048:                   // dottedName 'local.tee'
      case 24584:                   // dottedName 'memory.init'
      case 29192:                   // dottedName 'ref.func'
      case 30984:                   // dottedName 'return_call'
      case 31496:                   // dottedName 'return_call_ref'
      case 32520:                   // dottedName 'struct.get'
      case 32776:                   // dottedName 'struct.get_s'
      case 33032:                   // dottedName 'struct.get_u'
      case 33288:                   // dottedName 'struct.new'
      case 33544:                   // dottedName 'struct.new_default'
      case 33800:                   // dottedName 'struct.set'
      case 34568:                   // dottedName 'table.copy'
      case 34824:                   // dottedName 'table.fill'
      case 35080:                   // dottedName 'table.get'
      case 35336:                   // dottedName 'table.grow'
      case 35592:                   // dottedName 'table.init'
      case 35848:                   // dottedName 'table.set'
      case 36104:                   // dottedName 'table.size'
      case 36872:                   // dottedName 'throw'
        lookahead3W(46);            // whitespace | nat | identifier^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 15                    // 'any.convert_extern'
     && lk != 17                    // 'array.copy'
     && lk != 18                    // 'array.fill'
     && lk != 19                    // 'array.get'
     && lk != 20                    // 'array.get_s'
     && lk != 21                    // 'array.get_u'
     && lk != 22                    // 'array.init_data'
     && lk != 23                    // 'array.init_elem'
     && lk != 24                    // 'array.len'
     && lk != 25                    // 'array.new'
     && lk != 26                    // 'array.new_data'
     && lk != 27                    // 'array.new_default'
     && lk != 28                    // 'array.new_elem'
     && lk != 29                    // 'array.new_fixed'
     && lk != 30                    // 'array.set'
     && lk != 32                    // 'br'
     && lk != 33                    // 'br_if'
     && lk != 34                    // 'br_on_cast'
     && lk != 35                    // 'br_on_cast_fail'
     && lk != 36                    // 'br_on_non_null'
     && lk != 37                    // 'br_on_null'
     && lk != 38                    // 'br_table'
     && lk != 39                    // 'call'
     && lk != 40                    // 'call_indirect'
     && lk != 41                    // 'call_ref'
     && lk != 47                    // 'data.drop'
     && lk != 49                    // 'drop'
     && lk != 51                    // 'elem.drop'
     && lk != 59                    // 'extern.convert_any'
     && lk != 70                    // 'global.get'
     && lk != 71                    // 'global.set'
     && lk != 75                    // 'i31.get_s'
     && lk != 76                    // 'i31.get_u'
     && lk != 83                    // 'i8x16.shuffle'
     && lk != 88                    // 'local.get'
     && lk != 89                    // 'local.set'
     && lk != 90                    // 'local.tee'
     && lk != 93                    // 'memory.copy'
     && lk != 94                    // 'memory.fill'
     && lk != 95                    // 'memory.grow'
     && lk != 96                    // 'memory.init'
     && lk != 97                    // 'memory.size'
     && lk != 104                   // 'nop'
     && lk != 111                   // 'ref.as_non_null'
     && lk != 112                   // 'ref.cast'
     && lk != 113                   // 'ref.eq'
     && lk != 114                   // 'ref.func'
     && lk != 115                   // 'ref.i31'
     && lk != 116                   // 'ref.is_null'
     && lk != 117                   // 'ref.null'
     && lk != 118                   // 'ref.test'
     && lk != 120                   // 'return'
     && lk != 121                   // 'return_call'
     && lk != 122                   // 'return_call_indirect'
     && lk != 123                   // 'return_call_ref'
     && lk != 124                   // 'select'
     && lk != 127                   // 'struct.get'
     && lk != 128                   // 'struct.get_s'
     && lk != 129                   // 'struct.get_u'
     && lk != 130                   // 'struct.new'
     && lk != 131                   // 'struct.new_default'
     && lk != 132                   // 'struct.set'
     && lk != 135                   // 'table.copy'
     && lk != 136                   // 'table.fill'
     && lk != 137                   // 'table.get'
     && lk != 138                   // 'table.grow'
     && lk != 139                   // 'table.init'
     && lk != 140                   // 'table.set'
     && lk != 141                   // 'table.size'
     && lk != 144                   // 'throw'
     && lk != 145                   // 'throw_ref'
     && lk != 148                   // 'unreachable'
     && lk != 150                   // 'v128.const'
     && lk != 1032                  // dottedName nat
     && lk != 1288)                 // dottedName float
    {
      lk = memoized(4, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_memLikeInstr();
          memoize(4, e0A, -8);
          lk = -75;
        }
        catch (p8A)
        {
          lk = -9;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(4, e0A, -9);
        }
      }
    }
    switch (lk)
    {
    case 104:                       // 'nop'
      consumeT(104);                // 'nop'
      break;
    case 148:                       // 'unreachable'
      consumeT(148);                // 'unreachable'
      break;
    case 49:                        // 'drop'
      consumeT(49);                 // 'drop'
      break;
    case 120:                       // 'return'
      consumeT(120);                // 'return'
      break;
    case 145:                       // 'throw_ref'
      consumeT(145);                // 'throw_ref'
      break;
    case 124:                       // 'select'
      consumeT(124);                // 'select'
      lookahead1W(107);             // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(98);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 30473)              // '(' 'result'
      {
        try_resultTypes();
      }
      break;
    case -8:
      try_memLikeInstr();
      break;
    case -9:
    case 1288:                      // dottedName float
      try_numericLikeInstr();
      break;
    case 88:                        // 'local.get'
      consumeT(88);                 // 'local.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_index();
      break;
    case 89:                        // 'local.set'
      consumeT(89);                 // 'local.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_index();
      break;
    case 90:                        // 'local.tee'
      consumeT(90);                 // 'local.tee'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_index();
      break;
    case 70:                        // 'global.get'
      consumeT(70);                 // 'global.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_index();
      break;
    case 71:                        // 'global.set'
      consumeT(71);                 // 'global.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_index();
      break;
    case 137:                       // 'table.get'
      consumeT(137);                // 'table.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      break;
    case 140:                       // 'table.set'
      consumeT(140);                // 'table.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      break;
    case 141:                       // 'table.size'
      consumeT(141);                // 'table.size'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      break;
    case 138:                       // 'table.grow'
      consumeT(138);                // 'table.grow'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      break;
    case 136:                       // 'table.fill'
      consumeT(136);                // 'table.fill'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      break;
    case 135:                       // 'table.copy'
      consumeT(135);                // 'table.copy'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      break;
    case 139:                       // 'table.init'
      consumeT(139);                // 'table.init'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tableidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_elemidx();
      break;
    case 51:                        // 'elem.drop'
      consumeT(51);                 // 'elem.drop'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_elemidx();
      break;
    case 97:                        // 'memory.size'
      consumeT(97);                 // 'memory.size'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        try_memidx();
      }
      break;
    case 95:                        // 'memory.grow'
      consumeT(95);                 // 'memory.grow'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        try_memidx();
      }
      break;
    case 94:                        // 'memory.fill'
      consumeT(94);                 // 'memory.fill'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        try_memidx();
      }
      break;
    case 93:                        // 'memory.copy'
      consumeT(93);                 // 'memory.copy'
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      switch (l1)
      {
      case 4:                       // nat
      case 7:                       // identifier^token
        lookahead2W(112);           // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        switch (lk)
        {
        case 772:                   // nat string
        case 775:                   // identifier^token string
          lookahead3W(44);          // whitespace | string | ')'
          break;
        case 2052:                  // nat dottedName
        case 2055:                  // identifier^token dottedName
          lookahead3W(119);         // whitespace | string | nat | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 2308:                  // nat '('
        case 2311:                  // identifier^token '('
          lookahead3W(96);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable' | 'v128.const'
          break;
        case 13316:                 // nat 'else'
        case 13319:                 // identifier^token 'else'
          lookahead3W(94);          // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 13572:                 // nat 'end'
        case 13575:                 // identifier^token 'end'
          lookahead3W(108);         // whitespace | string | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 17156:                 // nat 'func'
        case 17159:                 // identifier^token 'func'
          lookahead3W(56);          // whitespace | nat | identifier^token | ')'
          break;
        case 21252:                 // nat 'i8x16.shuffle'
        case 21255:                 // identifier^token 'i8x16.shuffle'
          lookahead3W(1);           // whitespace | nat
          break;
        case 21508:                 // nat 'if'
        case 21511:                 // identifier^token 'if'
          lookahead3W(118);         // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
          break;
        case 29956:                 // nat 'ref.null'
        case 29959:                 // identifier^token 'ref.null'
          lookahead3W(80);          // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
          break;
        case 38404:                 // nat 'v128.const'
        case 38407:                 // identifier^token 'v128.const'
          lookahead3W(73);          // whitespace | 'f32x4' | 'f64x2' | 'i16x8' | 'i32x4' | 'i64x2' | 'i8x16'
          break;
        case 10244:                 // nat 'call_indirect'
        case 31236:                 // nat 'return_call_indirect'
        case 10247:                 // identifier^token 'call_indirect'
        case 31239:                 // identifier^token 'return_call_indirect'
          lookahead3W(55);          // whitespace | nat | identifier^token | '('
          break;
        case 28676:                 // nat 'ref.cast'
        case 30212:                 // nat 'ref.test'
        case 28679:                 // identifier^token 'ref.cast'
        case 30215:                 // identifier^token 'ref.test'
          lookahead3W(62);          // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
          break;
        case 7940:                  // nat 'block'
        case 23300:                 // nat 'loop'
        case 37380:                 // nat 'try_table'
        case 7943:                  // identifier^token 'block'
        case 23303:                 // identifier^token 'loop'
        case 37383:                 // identifier^token 'try_table'
          lookahead3W(115);         // whitespace | identifier^token | dottedName | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'f32' | 'f64' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i32' | 'i64' | 'i8x16.shuffle' |
                                    // 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128' | 'v128.const'
          break;
        case 14340:                 // nat 'exnref'
        case 15364:                 // nat 'externref'
        case 17412:                 // nat 'funcref'
        case 14343:                 // identifier^token 'exnref'
        case 15367:                 // identifier^token 'externref'
        case 17415:                 // identifier^token 'funcref'
          lookahead3W(89);          // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          break;
        case 23812:                 // nat 'memory.copy'
        case 24068:                 // nat 'memory.fill'
        case 24324:                 // nat 'memory.grow'
        case 24836:                 // nat 'memory.size'
        case 23815:                 // identifier^token 'memory.copy'
        case 24071:                 // identifier^token 'memory.fill'
        case 24327:                 // identifier^token 'memory.grow'
        case 24839:                 // identifier^token 'memory.size'
          lookahead3W(112);         // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        case 2564:                  // nat ')'
        case 3844:                  // nat 'any.convert_extern'
        case 6148:                  // nat 'array.len'
        case 12548:                 // nat 'drop'
        case 15108:                 // nat 'extern.convert_any'
        case 19204:                 // nat 'i31.get_s'
        case 19460:                 // nat 'i31.get_u'
        case 26628:                 // nat 'nop'
        case 28420:                 // nat 'ref.as_non_null'
        case 28932:                 // nat 'ref.eq'
        case 29444:                 // nat 'ref.i31'
        case 29700:                 // nat 'ref.is_null'
        case 30724:                 // nat 'return'
        case 31748:                 // nat 'select'
        case 37124:                 // nat 'throw_ref'
        case 37892:                 // nat 'unreachable'
        case 2567:                  // identifier^token ')'
        case 3847:                  // identifier^token 'any.convert_extern'
        case 6151:                  // identifier^token 'array.len'
        case 12551:                 // identifier^token 'drop'
        case 15111:                 // identifier^token 'extern.convert_any'
        case 19207:                 // identifier^token 'i31.get_s'
        case 19463:                 // identifier^token 'i31.get_u'
        case 26631:                 // identifier^token 'nop'
        case 28423:                 // identifier^token 'ref.as_non_null'
        case 28935:                 // identifier^token 'ref.eq'
        case 29447:                 // identifier^token 'ref.i31'
        case 29703:                 // identifier^token 'ref.is_null'
        case 30727:                 // identifier^token 'return'
        case 31751:                 // identifier^token 'select'
        case 37127:                 // identifier^token 'throw_ref'
        case 37895:                 // identifier^token 'unreachable'
          lookahead3W(107);         // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
          break;
        case 4356:                  // nat 'array.copy'
        case 4612:                  // nat 'array.fill'
        case 4868:                  // nat 'array.get'
        case 5124:                  // nat 'array.get_s'
        case 5380:                  // nat 'array.get_u'
        case 5636:                  // nat 'array.init_data'
        case 5892:                  // nat 'array.init_elem'
        case 6404:                  // nat 'array.new'
        case 6660:                  // nat 'array.new_data'
        case 6916:                  // nat 'array.new_default'
        case 7172:                  // nat 'array.new_elem'
        case 7428:                  // nat 'array.new_fixed'
        case 7684:                  // nat 'array.set'
        case 8196:                  // nat 'br'
        case 8452:                  // nat 'br_if'
        case 8708:                  // nat 'br_on_cast'
        case 8964:                  // nat 'br_on_cast_fail'
        case 9220:                  // nat 'br_on_non_null'
        case 9476:                  // nat 'br_on_null'
        case 9732:                  // nat 'br_table'
        case 9988:                  // nat 'call'
        case 10500:                 // nat 'call_ref'
        case 12036:                 // nat 'data.drop'
        case 13060:                 // nat 'elem.drop'
        case 17924:                 // nat 'global.get'
        case 18180:                 // nat 'global.set'
        case 22532:                 // nat 'local.get'
        case 22788:                 // nat 'local.set'
        case 23044:                 // nat 'local.tee'
        case 24580:                 // nat 'memory.init'
        case 29188:                 // nat 'ref.func'
        case 30980:                 // nat 'return_call'
        case 31492:                 // nat 'return_call_ref'
        case 32516:                 // nat 'struct.get'
        case 32772:                 // nat 'struct.get_s'
        case 33028:                 // nat 'struct.get_u'
        case 33284:                 // nat 'struct.new'
        case 33540:                 // nat 'struct.new_default'
        case 33796:                 // nat 'struct.set'
        case 34564:                 // nat 'table.copy'
        case 34820:                 // nat 'table.fill'
        case 35076:                 // nat 'table.get'
        case 35332:                 // nat 'table.grow'
        case 35588:                 // nat 'table.init'
        case 35844:                 // nat 'table.set'
        case 36100:                 // nat 'table.size'
        case 36868:                 // nat 'throw'
        case 4359:                  // identifier^token 'array.copy'
        case 4615:                  // identifier^token 'array.fill'
        case 4871:                  // identifier^token 'array.get'
        case 5127:                  // identifier^token 'array.get_s'
        case 5383:                  // identifier^token 'array.get_u'
        case 5639:                  // identifier^token 'array.init_data'
        case 5895:                  // identifier^token 'array.init_elem'
        case 6407:                  // identifier^token 'array.new'
        case 6663:                  // identifier^token 'array.new_data'
        case 6919:                  // identifier^token 'array.new_default'
        case 7175:                  // identifier^token 'array.new_elem'
        case 7431:                  // identifier^token 'array.new_fixed'
        case 7687:                  // identifier^token 'array.set'
        case 8199:                  // identifier^token 'br'
        case 8455:                  // identifier^token 'br_if'
        case 8711:                  // identifier^token 'br_on_cast'
        case 8967:                  // identifier^token 'br_on_cast_fail'
        case 9223:                  // identifier^token 'br_on_non_null'
        case 9479:                  // identifier^token 'br_on_null'
        case 9735:                  // identifier^token 'br_table'
        case 9991:                  // identifier^token 'call'
        case 10503:                 // identifier^token 'call_ref'
        case 12039:                 // identifier^token 'data.drop'
        case 13063:                 // identifier^token 'elem.drop'
        case 17927:                 // identifier^token 'global.get'
        case 18183:                 // identifier^token 'global.set'
        case 22535:                 // identifier^token 'local.get'
        case 22791:                 // identifier^token 'local.set'
        case 23047:                 // identifier^token 'local.tee'
        case 24583:                 // identifier^token 'memory.init'
        case 29191:                 // identifier^token 'ref.func'
        case 30983:                 // identifier^token 'return_call'
        case 31495:                 // identifier^token 'return_call_ref'
        case 32519:                 // identifier^token 'struct.get'
        case 32775:                 // identifier^token 'struct.get_s'
        case 33031:                 // identifier^token 'struct.get_u'
        case 33287:                 // identifier^token 'struct.new'
        case 33543:                 // identifier^token 'struct.new_default'
        case 33799:                 // identifier^token 'struct.set'
        case 34567:                 // identifier^token 'table.copy'
        case 34823:                 // identifier^token 'table.fill'
        case 35079:                 // identifier^token 'table.get'
        case 35335:                 // identifier^token 'table.grow'
        case 35591:                 // identifier^token 'table.init'
        case 35847:                 // identifier^token 'table.set'
        case 36103:                 // identifier^token 'table.size'
        case 36871:                 // identifier^token 'throw'
          lookahead3W(46);          // whitespace | nat | identifier^token
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 3                   // string
       && lk != 8                   // dottedName
       && lk != 9                   // '('
       && lk != 10                  // ')'
       && lk != 15                  // 'any.convert_extern'
       && lk != 17                  // 'array.copy'
       && lk != 18                  // 'array.fill'
       && lk != 19                  // 'array.get'
       && lk != 20                  // 'array.get_s'
       && lk != 21                  // 'array.get_u'
       && lk != 22                  // 'array.init_data'
       && lk != 23                  // 'array.init_elem'
       && lk != 24                  // 'array.len'
       && lk != 25                  // 'array.new'
       && lk != 26                  // 'array.new_data'
       && lk != 27                  // 'array.new_default'
       && lk != 28                  // 'array.new_elem'
       && lk != 29                  // 'array.new_fixed'
       && lk != 30                  // 'array.set'
       && lk != 31                  // 'block'
       && lk != 32                  // 'br'
       && lk != 33                  // 'br_if'
       && lk != 34                  // 'br_on_cast'
       && lk != 35                  // 'br_on_cast_fail'
       && lk != 36                  // 'br_on_non_null'
       && lk != 37                  // 'br_on_null'
       && lk != 38                  // 'br_table'
       && lk != 39                  // 'call'
       && lk != 40                  // 'call_indirect'
       && lk != 41                  // 'call_ref'
       && lk != 47                  // 'data.drop'
       && lk != 49                  // 'drop'
       && lk != 51                  // 'elem.drop'
       && lk != 52                  // 'else'
       && lk != 53                  // 'end'
       && lk != 56                  // 'exnref'
       && lk != 59                  // 'extern.convert_any'
       && lk != 60                  // 'externref'
       && lk != 67                  // 'func'
       && lk != 68                  // 'funcref'
       && lk != 70                  // 'global.get'
       && lk != 71                  // 'global.set'
       && lk != 75                  // 'i31.get_s'
       && lk != 76                  // 'i31.get_u'
       && lk != 83                  // 'i8x16.shuffle'
       && lk != 84                  // 'if'
       && lk != 88                  // 'local.get'
       && lk != 89                  // 'local.set'
       && lk != 90                  // 'local.tee'
       && lk != 91                  // 'loop'
       && lk != 93                  // 'memory.copy'
       && lk != 94                  // 'memory.fill'
       && lk != 95                  // 'memory.grow'
       && lk != 96                  // 'memory.init'
       && lk != 97                  // 'memory.size'
       && lk != 104                 // 'nop'
       && lk != 111                 // 'ref.as_non_null'
       && lk != 112                 // 'ref.cast'
       && lk != 113                 // 'ref.eq'
       && lk != 114                 // 'ref.func'
       && lk != 115                 // 'ref.i31'
       && lk != 116                 // 'ref.is_null'
       && lk != 117                 // 'ref.null'
       && lk != 118                 // 'ref.test'
       && lk != 120                 // 'return'
       && lk != 121                 // 'return_call'
       && lk != 122                 // 'return_call_indirect'
       && lk != 123                 // 'return_call_ref'
       && lk != 124                 // 'select'
       && lk != 127                 // 'struct.get'
       && lk != 128                 // 'struct.get_s'
       && lk != 129                 // 'struct.get_u'
       && lk != 130                 // 'struct.new'
       && lk != 131                 // 'struct.new_default'
       && lk != 132                 // 'struct.set'
       && lk != 135                 // 'table.copy'
       && lk != 136                 // 'table.fill'
       && lk != 137                 // 'table.get'
       && lk != 138                 // 'table.grow'
       && lk != 139                 // 'table.init'
       && lk != 140                 // 'table.set'
       && lk != 141                 // 'table.size'
       && lk != 144                 // 'throw'
       && lk != 145                 // 'throw_ref'
       && lk != 146                 // 'try_table'
       && lk != 148                 // 'unreachable'
       && lk != 150                 // 'v128.const'
       && lk != 1028                // nat nat
       && lk != 1031                // identifier^token nat
       && lk != 1796                // nat identifier^token
       && lk != 1799)               // identifier^token identifier^token
      {
        lk = memoized(5, e0);
        if (lk == 0)
        {
          var b0B = b0; var e0B = e0; var l1B = l1;
          var b1B = b1; var e1B = e1; var l2B = l2;
          var b2B = b2; var e2B = e2; var l3B = l3;
          var b3B = b3; var e3B = e3;
          try
          {
            try_memidx();
            memoize(5, e0B, -1);
          }
          catch (p1B)
          {
            b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
            b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
            b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
            b3 = b3B; e3 = e3B; end = e3B; }}}
            memoize(5, e0B, -2);
          }
          lk = -2;
        }
      }
      if (lk == -1
       || lk == 1028                // nat nat
       || lk == 1031                // identifier^token nat
       || lk == 1796                // nat identifier^token
       || lk == 1799)               // identifier^token identifier^token
      {
        try_memidx();
      }
      lookahead1W(112);             // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      if (l1 == 4                   // nat
       || l1 == 7)                  // identifier^token
      {
        try_memidx();
      }
      break;
    case 96:                        // 'memory.init'
      consumeT(96);                 // 'memory.init'
      lookahead1W(46);              // whitespace | nat | identifier^token
      switch (l1)
      {
      case 4:                       // nat
      case 7:                       // identifier^token
        lookahead2W(112);           // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 1028                // nat nat
       || lk == 1031                // identifier^token nat
       || lk == 1796                // nat identifier^token
       || lk == 1799)               // identifier^token identifier^token
      {
        try_memidx();
      }
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_dataidx();
      break;
    case 47:                        // 'data.drop'
      consumeT(47);                 // 'data.drop'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_dataidx();
      break;
    case 117:                       // 'ref.null'
      consumeT(117);                // 'ref.null'
      lookahead1W(80);              // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
      try_heaptype();
      break;
    case 114:                       // 'ref.func'
      consumeT(114);                // 'ref.func'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_funcidx();
      break;
    case 116:                       // 'ref.is_null'
      consumeT(116);                // 'ref.is_null'
      break;
    case 111:                       // 'ref.as_non_null'
      consumeT(111);                // 'ref.as_non_null'
      break;
    case 113:                       // 'ref.eq'
      consumeT(113);                // 'ref.eq'
      break;
    case 118:                       // 'ref.test'
      consumeT(118);                // 'ref.test'
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      try_reftype();
      break;
    case 112:                       // 'ref.cast'
      consumeT(112);                // 'ref.cast'
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      try_reftype();
      break;
    case 130:                       // 'struct.new'
      consumeT(130);                // 'struct.new'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 131:                       // 'struct.new_default'
      consumeT(131);                // 'struct.new_default'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 127:                       // 'struct.get'
      consumeT(127);                // 'struct.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_fieldidx();
      break;
    case 128:                       // 'struct.get_s'
      consumeT(128);                // 'struct.get_s'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_fieldidx();
      break;
    case 129:                       // 'struct.get_u'
      consumeT(129);                // 'struct.get_u'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_fieldidx();
      break;
    case 132:                       // 'struct.set'
      consumeT(132);                // 'struct.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_fieldidx();
      break;
    case 25:                        // 'array.new'
      consumeT(25);                 // 'array.new'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 27:                        // 'array.new_default'
      consumeT(27);                 // 'array.new_default'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 29:                        // 'array.new_fixed'
      consumeT(29);                 // 'array.new_fixed'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(1);               // whitespace | nat
      consumeT(4);                  // nat
      break;
    case 26:                        // 'array.new_data'
      consumeT(26);                 // 'array.new_data'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_dataidx();
      break;
    case 28:                        // 'array.new_elem'
      consumeT(28);                 // 'array.new_elem'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_elemidx();
      break;
    case 19:                        // 'array.get'
      consumeT(19);                 // 'array.get'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 20:                        // 'array.get_s'
      consumeT(20);                 // 'array.get_s'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 21:                        // 'array.get_u'
      consumeT(21);                 // 'array.get_u'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 30:                        // 'array.set'
      consumeT(30);                 // 'array.set'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 24:                        // 'array.len'
      consumeT(24);                 // 'array.len'
      break;
    case 18:                        // 'array.fill'
      consumeT(18);                 // 'array.fill'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 17:                        // 'array.copy'
      consumeT(17);                 // 'array.copy'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 22:                        // 'array.init_data'
      consumeT(22);                 // 'array.init_data'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_dataidx();
      break;
    case 23:                        // 'array.init_elem'
      consumeT(23);                 // 'array.init_elem'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_elemidx();
      break;
    case 115:                       // 'ref.i31'
      consumeT(115);                // 'ref.i31'
      break;
    case 75:                        // 'i31.get_s'
      consumeT(75);                 // 'i31.get_s'
      break;
    case 76:                        // 'i31.get_u'
      consumeT(76);                 // 'i31.get_u'
      break;
    case 15:                        // 'any.convert_extern'
      consumeT(15);                 // 'any.convert_extern'
      break;
    case 59:                        // 'extern.convert_any'
      consumeT(59);                 // 'extern.convert_any'
      break;
    case 39:                        // 'call'
      consumeT(39);                 // 'call'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_funcidx();
      break;
    case 41:                        // 'call_ref'
      consumeT(41);                 // 'call_ref'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 40:                        // 'call_indirect'
      consumeT(40);                 // 'call_indirect'
      lookahead1W(55);              // whitespace | nat | identifier^token | '('
      if (l1 != 9)                  // '('
      {
        try_tableidx();
      }
      lookahead1W(4);               // whitespace | '('
      try_typeuse();
      break;
    case 121:                       // 'return_call'
      consumeT(121);                // 'return_call'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_funcidx();
      break;
    case 123:                       // 'return_call_ref'
      consumeT(123);                // 'return_call_ref'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      break;
    case 122:                       // 'return_call_indirect'
      consumeT(122);                // 'return_call_indirect'
      lookahead1W(55);              // whitespace | nat | identifier^token | '('
      if (l1 != 9)                  // '('
      {
        try_tableidx();
      }
      lookahead1W(4);               // whitespace | '('
      try_typeuse();
      break;
    case 32:                        // 'br'
      consumeT(32);                 // 'br'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_labelidx();
      break;
    case 33:                        // 'br_if'
      consumeT(33);                 // 'br_if'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_labelidx();
      break;
    case 38:                        // 'br_table'
      consumeT(38);                 // 'br_table'
      for (;;)
      {
        lookahead1W(46);            // whitespace | nat | identifier^token
        try_labelidx();
        lookahead1W(46);            // whitespace | nat | identifier^token
        switch (l1)
        {
        case 4:                     // nat
        case 7:                     // identifier^token
          lookahead2W(112);         // whitespace | string | nat | identifier^token | dottedName | '(' | ')' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
          break;
        default:
          lk = l1;
        }
        if (lk != 1028              // nat nat
         && lk != 1031              // identifier^token nat
         && lk != 1796              // nat identifier^token
         && lk != 1799)             // identifier^token identifier^token
        {
          break;
        }
      }
      try_labelidx();
      break;
    case 37:                        // 'br_on_null'
      consumeT(37);                 // 'br_on_null'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_labelidx();
      break;
    case 36:                        // 'br_on_non_null'
      consumeT(36);                 // 'br_on_non_null'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_labelidx();
      break;
    case 34:                        // 'br_on_cast'
      consumeT(34);                 // 'br_on_cast'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_labelidx();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      try_reftype();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      try_reftype();
      break;
    case 35:                        // 'br_on_cast_fail'
      consumeT(35);                 // 'br_on_cast_fail'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_labelidx();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      try_reftype();
      lookahead1W(62);              // whitespace | '(' | 'exnref' | 'externref' | 'funcref'
      try_reftype();
      break;
    case 144:                       // 'throw'
      consumeT(144);                // 'throw'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_tagidx();
      break;
    case -75:
      break;
    default:
      try_simdLikeInstr();
    }
  }

  function parse_numericLikeInstr()
  {
    eventHandler.startNonterminal("numericLikeInstr", e0);
    switch (l1)
    {
    case 8:                         // dottedName
      lookahead2W(117);             // whitespace | string | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 3336:                      // dottedName 'align='
    case 27400:                     // dottedName 'offset='
      consume(8);                   // dottedName
      lookahead1W(52);              // whitespace | 'align=' | 'offset='
      whitespace();
      parse_memarg();
      break;
    case 1288:                      // dottedName float
      consume(8);                   // dottedName
      lookahead1W(2);               // whitespace | float
      consume(5);                   // float
      break;
    default:
      consume(8);                   // dottedName
    }
    eventHandler.endNonterminal("numericLikeInstr", e0);
  }

  function try_numericLikeInstr()
  {
    switch (l1)
    {
    case 8:                         // dottedName
      lookahead2W(117);             // whitespace | string | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'exnref' | 'extern.convert_any' | 'externref' | 'func' |
                                    // 'funcref' | 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' |
                                    // 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 3336:                      // dottedName 'align='
    case 27400:                     // dottedName 'offset='
      consumeT(8);                  // dottedName
      lookahead1W(52);              // whitespace | 'align=' | 'offset='
      try_memarg();
      break;
    case 1288:                      // dottedName float
      consumeT(8);                  // dottedName
      lookahead1W(2);               // whitespace | float
      consumeT(5);                  // float
      break;
    default:
      consumeT(8);                  // dottedName
    }
  }

  function parse_memLikeInstr()
  {
    eventHandler.startNonterminal("memLikeInstr", e0);
    consume(8);                     // dottedName
    lookahead1W(113);               // whitespace | string | dottedName | '(' | ')' | 'align=' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'offset=' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
    if (l1 == 13                    // 'align='
     || l1 == 107)                  // 'offset='
    {
      whitespace();
      parse_memarg();
    }
    eventHandler.endNonterminal("memLikeInstr", e0);
  }

  function try_memLikeInstr()
  {
    consumeT(8);                    // dottedName
    lookahead1W(113);               // whitespace | string | dottedName | '(' | ')' | 'align=' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'offset=' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable' | 'v128.const'
    if (l1 == 13                    // 'align='
     || l1 == 107)                  // 'offset='
    {
      try_memarg();
    }
  }

  function parse_simdLikeInstr()
  {
    eventHandler.startNonterminal("simdLikeInstr", e0);
    switch (l1)
    {
    case 150:                       // 'v128.const'
      consume(150);                 // 'v128.const'
      lookahead1W(73);              // whitespace | 'f32x4' | 'f64x2' | 'i16x8' | 'i32x4' | 'i64x2' | 'i8x16'
      whitespace();
      parse_simdConst();
      break;
    case 8:                         // dottedName
      consume(8);                   // dottedName
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      break;
    default:
      consume(83);                  // 'i8x16.shuffle'
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
      lookahead1W(1);               // whitespace | nat
      whitespace();
      parse_laneidx();
    }
    eventHandler.endNonterminal("simdLikeInstr", e0);
  }

  function try_simdLikeInstr()
  {
    switch (l1)
    {
    case 150:                       // 'v128.const'
      consumeT(150);                // 'v128.const'
      lookahead1W(73);              // whitespace | 'f32x4' | 'f64x2' | 'i16x8' | 'i32x4' | 'i64x2' | 'i8x16'
      try_simdConst();
      break;
    case 8:                         // dottedName
      consumeT(8);                  // dottedName
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      break;
    default:
      consumeT(83);                 // 'i8x16.shuffle'
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
      lookahead1W(1);               // whitespace | nat
      try_laneidx();
    }
  }

  function parse_blockType()
  {
    eventHandler.startNonterminal("blockType", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(66);              // whitespace | 'param' | 'ref' | 'result' | 'type'
      switch (lk)
      {
      case 30473:                   // '(' 'result'
        lookahead3W(74);            // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 620297                // '(' 'result' '('
     || lk == 3700489               // '(' 'result' 'exnref'
     || lk == 3962633               // '(' 'result' 'externref'
     || lk == 4028169               // '(' 'result' 'f32'
     || lk == 4159241               // '(' 'result' 'f64'
     || lk == 4486921               // '(' 'result' 'funcref'
     || lk == 5076745               // '(' 'result' 'i32'
     || lk == 5207817               // '(' 'result' 'i64'
     || lk == 9795337)              // '(' 'result' 'v128'
    {
      lk = memoized(6, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_typeuse();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(6, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
    case 27657:                     // '(' 'param'
    case 37641:                     // '(' 'type'
      parse_typeuse();
      break;
    case -2:
      parse_resultTypes();
      break;
    default:
      parse_valueType();
    }
    eventHandler.endNonterminal("blockType", e0);
  }

  function try_blockType()
  {
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(66);              // whitespace | 'param' | 'ref' | 'result' | 'type'
      switch (lk)
      {
      case 30473:                   // '(' 'result'
        lookahead3W(74);            // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 620297                // '(' 'result' '('
     || lk == 3700489               // '(' 'result' 'exnref'
     || lk == 3962633               // '(' 'result' 'externref'
     || lk == 4028169               // '(' 'result' 'f32'
     || lk == 4159241               // '(' 'result' 'f64'
     || lk == 4486921               // '(' 'result' 'funcref'
     || lk == 5076745               // '(' 'result' 'i32'
     || lk == 5207817               // '(' 'result' 'i64'
     || lk == 9795337)              // '(' 'result' 'v128'
    {
      lk = memoized(6, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_typeuse();
          memoize(6, e0A, -1);
          lk = -4;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(6, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
    case 27657:                     // '(' 'param'
    case 37641:                     // '(' 'type'
      try_typeuse();
      break;
    case -2:
      try_resultTypes();
      break;
    case -4:
      break;
    default:
      try_valueType();
    }
  }

  function parse_label()
  {
    eventHandler.startNonterminal("label", e0);
    parse_id();
    eventHandler.endNonterminal("label", e0);
  }

  function try_label()
  {
    try_id();
  }

  function parse_simdConst()
  {
    eventHandler.startNonterminal("simdConst", e0);
    switch (l1)
    {
    case 82:                        // 'i8x16'
      consume(82);                  // 'i8x16'
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 73:                        // 'i16x8'
      consume(73);                  // 'i16x8'
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 78:                        // 'i32x4'
      consume(78);                  // 'i32x4'
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 80:                        // 'i64x2'
      consume(80);                  // 'i64x2'
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 62:                        // 'f32x4'
      consume(62);                  // 'f32x4'
      lookahead1W(2);               // whitespace | float
      consume(5);                   // float
      lookahead1W(2);               // whitespace | float
      consume(5);                   // float
      lookahead1W(2);               // whitespace | float
      consume(5);                   // float
      lookahead1W(2);               // whitespace | float
      consume(5);                   // float
      break;
    default:
      consume(64);                  // 'f64x2'
      lookahead1W(2);               // whitespace | float
      consume(5);                   // float
      lookahead1W(2);               // whitespace | float
      consume(5);                   // float
    }
    eventHandler.endNonterminal("simdConst", e0);
  }

  function try_simdConst()
  {
    switch (l1)
    {
    case 82:                        // 'i8x16'
      consumeT(82);                 // 'i8x16'
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      break;
    case 73:                        // 'i16x8'
      consumeT(73);                 // 'i16x8'
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      break;
    case 78:                        // 'i32x4'
      consumeT(78);                 // 'i32x4'
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      break;
    case 80:                        // 'i64x2'
      consumeT(80);                 // 'i64x2'
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      lookahead1W(45);              // whitespace | nat | sign
      try_signedNat();
      break;
    case 62:                        // 'f32x4'
      consumeT(62);                 // 'f32x4'
      lookahead1W(2);               // whitespace | float
      consumeT(5);                  // float
      lookahead1W(2);               // whitespace | float
      consumeT(5);                  // float
      lookahead1W(2);               // whitespace | float
      consumeT(5);                  // float
      lookahead1W(2);               // whitespace | float
      consumeT(5);                  // float
      break;
    default:
      consumeT(64);                 // 'f64x2'
      lookahead1W(2);               // whitespace | float
      consumeT(5);                  // float
      lookahead1W(2);               // whitespace | float
      consumeT(5);                  // float
    }
  }

  function parse_typeuse()
  {
    eventHandler.startNonterminal("typeuse", e0);
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(60);              // whitespace | 'param' | 'result' | 'type'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 37641:                     // '(' 'type'
      consume(9);                   // '('
      lookahead1W(41);              // whitespace | 'type'
      consume(147);                 // 'type'
      lookahead1W(46);              // whitespace | nat | identifier^token
      whitespace();
      parse_typeidx();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 27657:               // '(' 'param'
            lookahead3W(75);        // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 486409            // '(' 'param' identifier^token
         || lk == 617481            // '(' 'param' '('
         || lk == 3697673           // '(' 'param' 'exnref'
         || lk == 3959817           // '(' 'param' 'externref'
         || lk == 4025353           // '(' 'param' 'f32'
         || lk == 4156425           // '(' 'param' 'f64'
         || lk == 4484105           // '(' 'param' 'funcref'
         || lk == 5073929           // '(' 'param' 'i32'
         || lk == 5205001           // '(' 'param' 'i64'
         || lk == 9792521)          // '(' 'param' 'v128'
        {
          lk = memoized(7, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_paramDecl();
              lk = -1;
            }
            catch (p1A)
            {
              lk = -2;
            }
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(7, e0, lk);
          }
        }
        if (lk != -1)
        {
          break;
        }
        whitespace();
        parse_paramDecl();
      }
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 30473:               // '(' 'result'
            lookahead3W(74);        // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 620297            // '(' 'result' '('
         || lk == 3700489           // '(' 'result' 'exnref'
         || lk == 3962633           // '(' 'result' 'externref'
         || lk == 4028169           // '(' 'result' 'f32'
         || lk == 4159241           // '(' 'result' 'f64'
         || lk == 4486921           // '(' 'result' 'funcref'
         || lk == 5076745           // '(' 'result' 'i32'
         || lk == 5207817           // '(' 'result' 'i64'
         || lk == 9795337)          // '(' 'result' 'v128'
        {
          lk = memoized(8, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_resultDecl();
              lk = -1;
            }
            catch (p1A)
            {
              lk = -2;
            }
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(8, e0, lk);
          }
        }
        if (lk != -1)
        {
          break;
        }
        whitespace();
        parse_resultDecl();
      }
      break;
    case 27657:                     // '(' 'param'
      for (;;)
      {
        whitespace();
        parse_paramDecl();
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 27657:               // '(' 'param'
            lookahead3W(75);        // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 486409            // '(' 'param' identifier^token
         || lk == 617481            // '(' 'param' '('
         || lk == 3697673           // '(' 'param' 'exnref'
         || lk == 3959817           // '(' 'param' 'externref'
         || lk == 4025353           // '(' 'param' 'f32'
         || lk == 4156425           // '(' 'param' 'f64'
         || lk == 4484105           // '(' 'param' 'funcref'
         || lk == 5073929           // '(' 'param' 'i32'
         || lk == 5205001           // '(' 'param' 'i64'
         || lk == 9792521)          // '(' 'param' 'v128'
        {
          lk = memoized(9, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_paramDecl();
              lk = -1;
            }
            catch (p1A)
            {
              lk = -2;
            }
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(9, e0, lk);
          }
        }
        if (lk != -1)
        {
          break;
        }
      }
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 30473:               // '(' 'result'
            lookahead3W(74);        // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 620297            // '(' 'result' '('
         || lk == 3700489           // '(' 'result' 'exnref'
         || lk == 3962633           // '(' 'result' 'externref'
         || lk == 4028169           // '(' 'result' 'f32'
         || lk == 4159241           // '(' 'result' 'f64'
         || lk == 4486921           // '(' 'result' 'funcref'
         || lk == 5076745           // '(' 'result' 'i32'
         || lk == 5207817           // '(' 'result' 'i64'
         || lk == 9795337)          // '(' 'result' 'v128'
        {
          lk = memoized(10, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_resultDecl();
              lk = -1;
            }
            catch (p1A)
            {
              lk = -2;
            }
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(10, e0, lk);
          }
        }
        if (lk != -1)
        {
          break;
        }
        whitespace();
        parse_resultDecl();
      }
      break;
    default:
      for (;;)
      {
        whitespace();
        parse_resultDecl();
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 30473:               // '(' 'result'
            lookahead3W(74);        // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 620297            // '(' 'result' '('
         || lk == 3700489           // '(' 'result' 'exnref'
         || lk == 3962633           // '(' 'result' 'externref'
         || lk == 4028169           // '(' 'result' 'f32'
         || lk == 4159241           // '(' 'result' 'f64'
         || lk == 4486921           // '(' 'result' 'funcref'
         || lk == 5076745           // '(' 'result' 'i32'
         || lk == 5207817           // '(' 'result' 'i64'
         || lk == 9795337)          // '(' 'result' 'v128'
        {
          lk = memoized(11, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_resultDecl();
              lk = -1;
            }
            catch (p1A)
            {
              lk = -2;
            }
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(11, e0, lk);
          }
        }
        if (lk != -1)
        {
          break;
        }
      }
    }
    eventHandler.endNonterminal("typeuse", e0);
  }

  function try_typeuse()
  {
    switch (l1)
    {
    case 9:                         // '('
      lookahead2W(60);              // whitespace | 'param' | 'result' | 'type'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 37641:                     // '(' 'type'
      consumeT(9);                  // '('
      lookahead1W(41);              // whitespace | 'type'
      consumeT(147);                // 'type'
      lookahead1W(46);              // whitespace | nat | identifier^token
      try_typeidx();
      lookahead1W(5);               // whitespace | ')'
      consumeT(10);                 // ')'
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 27657:               // '(' 'param'
            lookahead3W(75);        // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 486409            // '(' 'param' identifier^token
         || lk == 617481            // '(' 'param' '('
         || lk == 3697673           // '(' 'param' 'exnref'
         || lk == 3959817           // '(' 'param' 'externref'
         || lk == 4025353           // '(' 'param' 'f32'
         || lk == 4156425           // '(' 'param' 'f64'
         || lk == 4484105           // '(' 'param' 'funcref'
         || lk == 5073929           // '(' 'param' 'i32'
         || lk == 5205001           // '(' 'param' 'i64'
         || lk == 9792521)          // '(' 'param' 'v128'
        {
          lk = memoized(7, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_paramDecl();
              memoize(7, e0A, -1);
              continue;
            }
            catch (p1A)
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(7, e0A, -2);
              break;
            }
          }
        }
        if (lk != -1)
        {
          break;
        }
        try_paramDecl();
      }
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 30473:               // '(' 'result'
            lookahead3W(74);        // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 620297            // '(' 'result' '('
         || lk == 3700489           // '(' 'result' 'exnref'
         || lk == 3962633           // '(' 'result' 'externref'
         || lk == 4028169           // '(' 'result' 'f32'
         || lk == 4159241           // '(' 'result' 'f64'
         || lk == 4486921           // '(' 'result' 'funcref'
         || lk == 5076745           // '(' 'result' 'i32'
         || lk == 5207817           // '(' 'result' 'i64'
         || lk == 9795337)          // '(' 'result' 'v128'
        {
          lk = memoized(8, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_resultDecl();
              memoize(8, e0A, -1);
              continue;
            }
            catch (p1A)
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(8, e0A, -2);
              break;
            }
          }
        }
        if (lk != -1)
        {
          break;
        }
        try_resultDecl();
      }
      break;
    case 27657:                     // '(' 'param'
      try_paramDecl();
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 27657:               // '(' 'param'
            lookahead3W(75);        // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 486409            // '(' 'param' identifier^token
         || lk == 617481            // '(' 'param' '('
         || lk == 3697673           // '(' 'param' 'exnref'
         || lk == 3959817           // '(' 'param' 'externref'
         || lk == 4025353           // '(' 'param' 'f32'
         || lk == 4156425           // '(' 'param' 'f64'
         || lk == 4484105           // '(' 'param' 'funcref'
         || lk == 5073929           // '(' 'param' 'i32'
         || lk == 5205001           // '(' 'param' 'i64'
         || lk == 9792521)          // '(' 'param' 'v128'
        {
          lk = memoized(9, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_paramDecl();
              memoize(9, e0A, -1);
              continue;
            }
            catch (p1A)
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(9, e0A, -2);
              break;
            }
          }
        }
        if (lk != -1)
        {
          break;
        }
        try_paramDecl();
      }
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 30473:               // '(' 'result'
            lookahead3W(74);        // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 620297            // '(' 'result' '('
         || lk == 3700489           // '(' 'result' 'exnref'
         || lk == 3962633           // '(' 'result' 'externref'
         || lk == 4028169           // '(' 'result' 'f32'
         || lk == 4159241           // '(' 'result' 'f64'
         || lk == 4486921           // '(' 'result' 'funcref'
         || lk == 5076745           // '(' 'result' 'i32'
         || lk == 5207817           // '(' 'result' 'i64'
         || lk == 9795337)          // '(' 'result' 'v128'
        {
          lk = memoized(10, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_resultDecl();
              memoize(10, e0A, -1);
              continue;
            }
            catch (p1A)
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(10, e0A, -2);
              break;
            }
          }
        }
        if (lk != -1)
        {
          break;
        }
        try_resultDecl();
      }
      break;
    default:
      try_resultDecl();
      for (;;)
      {
        lookahead1W(107);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        switch (l1)
        {
        case 9:                     // '('
          lookahead2W(120);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'item' | 'local' |
                                    // 'local.get' | 'local.set' | 'local.tee' | 'loop' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'param' |
                                    // 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'result' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'type' | 'unreachable' | 'v128.const'
          switch (lk)
          {
          case 30473:               // '(' 'result'
            lookahead3W(74);        // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 620297            // '(' 'result' '('
         || lk == 3700489           // '(' 'result' 'exnref'
         || lk == 3962633           // '(' 'result' 'externref'
         || lk == 4028169           // '(' 'result' 'f32'
         || lk == 4159241           // '(' 'result' 'f64'
         || lk == 4486921           // '(' 'result' 'funcref'
         || lk == 5076745           // '(' 'result' 'i32'
         || lk == 5207817           // '(' 'result' 'i64'
         || lk == 9795337)          // '(' 'result' 'v128'
        {
          lk = memoized(11, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_resultDecl();
              memoize(11, e0A, -1);
              continue;
            }
            catch (p1A)
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(11, e0A, -2);
              break;
            }
          }
        }
        if (lk != -1)
        {
          break;
        }
        try_resultDecl();
      }
    }
  }

  function parse_paramDecl()
  {
    eventHandler.startNonterminal("paramDecl", e0);
    consume(9);                     // '('
    lookahead1W(30);                // whitespace | 'param'
    consume(108);                   // 'param'
    lookahead1W(75);                // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
    if (l1 == 7)                    // identifier^token
    {
      whitespace();
      parse_id();
    }
    for (;;)
    {
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(76);              // whitespace | '(' | ')' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' |
                                    // 'i32' | 'i64' | 'v128'
      if (l1 == 10)                 // ')'
      {
        break;
      }
    }
    consume(10);                    // ')'
    eventHandler.endNonterminal("paramDecl", e0);
  }

  function try_paramDecl()
  {
    consumeT(9);                    // '('
    lookahead1W(30);                // whitespace | 'param'
    consumeT(108);                  // 'param'
    lookahead1W(75);                // whitespace | identifier^token | '(' | 'exnref' | 'externref' | 'f32' | 'f64' |
                                    // 'funcref' | 'i32' | 'i64' | 'v128'
    if (l1 == 7)                    // identifier^token
    {
      try_id();
    }
    for (;;)
    {
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      try_valueType();
      lookahead1W(76);              // whitespace | '(' | ')' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' |
                                    // 'i32' | 'i64' | 'v128'
      if (l1 == 10)                 // ')'
      {
        break;
      }
    }
    consumeT(10);                   // ')'
  }

  function parse_resultDecl()
  {
    eventHandler.startNonterminal("resultDecl", e0);
    consume(9);                     // '('
    lookahead1W(33);                // whitespace | 'result'
    consume(119);                   // 'result'
    for (;;)
    {
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(76);              // whitespace | '(' | ')' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' |
                                    // 'i32' | 'i64' | 'v128'
      if (l1 == 10)                 // ')'
      {
        break;
      }
    }
    consume(10);                    // ')'
    eventHandler.endNonterminal("resultDecl", e0);
  }

  function try_resultDecl()
  {
    consumeT(9);                    // '('
    lookahead1W(33);                // whitespace | 'result'
    consumeT(119);                  // 'result'
    for (;;)
    {
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      try_valueType();
      lookahead1W(76);              // whitespace | '(' | ')' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' |
                                    // 'i32' | 'i64' | 'v128'
      if (l1 == 10)                 // ')'
      {
        break;
      }
    }
    consumeT(10);                   // ')'
  }

  function parse_resultTypes()
  {
    eventHandler.startNonterminal("resultTypes", e0);
    consume(9);                     // '('
    lookahead1W(33);                // whitespace | 'result'
    consume(119);                   // 'result'
    for (;;)
    {
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(76);              // whitespace | '(' | ')' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' |
                                    // 'i32' | 'i64' | 'v128'
      if (l1 == 10)                 // ')'
      {
        break;
      }
    }
    consume(10);                    // ')'
    eventHandler.endNonterminal("resultTypes", e0);
  }

  function try_resultTypes()
  {
    consumeT(9);                    // '('
    lookahead1W(33);                // whitespace | 'result'
    consumeT(119);                  // 'result'
    for (;;)
    {
      lookahead1W(74);              // whitespace | '(' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' | 'i32' |
                                    // 'i64' | 'v128'
      try_valueType();
      lookahead1W(76);              // whitespace | '(' | ')' | 'exnref' | 'externref' | 'f32' | 'f64' | 'funcref' |
                                    // 'i32' | 'i64' | 'v128'
      if (l1 == 10)                 // ')'
      {
        break;
      }
    }
    consumeT(10);                   // ')'
  }

  function parse_heaptype()
  {
    eventHandler.startNonterminal("heaptype", e0);
    switch (l1)
    {
    case 14:                        // 'any'
      consume(14);                  // 'any'
      break;
    case 54:                        // 'eq'
      consume(54);                  // 'eq'
      break;
    case 74:                        // 'i31'
      consume(74);                  // 'i31'
      break;
    case 126:                       // 'struct'
      consume(126);                 // 'struct'
      break;
    case 16:                        // 'array'
      consume(16);                  // 'array'
      break;
    case 103:                       // 'none'
      consume(103);                 // 'none'
      break;
    case 67:                        // 'func'
      consume(67);                  // 'func'
      break;
    case 102:                       // 'nofunc'
      consume(102);                 // 'nofunc'
      break;
    case 55:                        // 'exn'
      consume(55);                  // 'exn'
      break;
    case 100:                       // 'noexn'
      consume(100);                 // 'noexn'
      break;
    case 58:                        // 'extern'
      consume(58);                  // 'extern'
      break;
    case 101:                       // 'noextern'
      consume(101);                 // 'noextern'
      break;
    case 68:                        // 'funcref'
      consume(68);                  // 'funcref'
      break;
    case 60:                        // 'externref'
      consume(60);                  // 'externref'
      break;
    case 56:                        // 'exnref'
      consume(56);                  // 'exnref'
      break;
    default:
      parse_typeidx();
    }
    eventHandler.endNonterminal("heaptype", e0);
  }

  function try_heaptype()
  {
    switch (l1)
    {
    case 14:                        // 'any'
      consumeT(14);                 // 'any'
      break;
    case 54:                        // 'eq'
      consumeT(54);                 // 'eq'
      break;
    case 74:                        // 'i31'
      consumeT(74);                 // 'i31'
      break;
    case 126:                       // 'struct'
      consumeT(126);                // 'struct'
      break;
    case 16:                        // 'array'
      consumeT(16);                 // 'array'
      break;
    case 103:                       // 'none'
      consumeT(103);                // 'none'
      break;
    case 67:                        // 'func'
      consumeT(67);                 // 'func'
      break;
    case 102:                       // 'nofunc'
      consumeT(102);                // 'nofunc'
      break;
    case 55:                        // 'exn'
      consumeT(55);                 // 'exn'
      break;
    case 100:                       // 'noexn'
      consumeT(100);                // 'noexn'
      break;
    case 58:                        // 'extern'
      consumeT(58);                 // 'extern'
      break;
    case 101:                       // 'noextern'
      consumeT(101);                // 'noextern'
      break;
    case 68:                        // 'funcref'
      consumeT(68);                 // 'funcref'
      break;
    case 60:                        // 'externref'
      consumeT(60);                 // 'externref'
      break;
    case 56:                        // 'exnref'
      consumeT(56);                 // 'exnref'
      break;
    default:
      try_typeidx();
    }
  }

  function parse_reftype()
  {
    eventHandler.startNonterminal("reftype", e0);
    switch (l1)
    {
    case 9:                         // '('
      consume(9);                   // '('
      lookahead1W(32);              // whitespace | 'ref'
      consume(110);                 // 'ref'
      lookahead1W(81);              // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'null' | 'struct'
      if (l1 == 105)                // 'null'
      {
        consume(105);               // 'null'
      }
      lookahead1W(80);              // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
      whitespace();
      parse_heaptype();
      lookahead1W(5);               // whitespace | ')'
      consume(10);                  // ')'
      break;
    case 68:                        // 'funcref'
      consume(68);                  // 'funcref'
      break;
    case 60:                        // 'externref'
      consume(60);                  // 'externref'
      break;
    default:
      consume(56);                  // 'exnref'
    }
    eventHandler.endNonterminal("reftype", e0);
  }

  function try_reftype()
  {
    switch (l1)
    {
    case 9:                         // '('
      consumeT(9);                  // '('
      lookahead1W(32);              // whitespace | 'ref'
      consumeT(110);                // 'ref'
      lookahead1W(81);              // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'null' | 'struct'
      if (l1 == 105)                // 'null'
      {
        consumeT(105);              // 'null'
      }
      lookahead1W(80);              // whitespace | nat | identifier^token | 'any' | 'array' | 'eq' | 'exn' | 'exnref' |
                                    // 'extern' | 'externref' | 'func' | 'funcref' | 'i31' | 'noexn' | 'noextern' |
                                    // 'nofunc' | 'none' | 'struct'
      try_heaptype();
      lookahead1W(5);               // whitespace | ')'
      consumeT(10);                 // ')'
      break;
    case 68:                        // 'funcref'
      consumeT(68);                 // 'funcref'
      break;
    case 60:                        // 'externref'
      consumeT(60);                 // 'externref'
      break;
    default:
      consumeT(56);                 // 'exnref'
    }
  }

  function parse_valueType()
  {
    eventHandler.startNonterminal("valueType", e0);
    switch (l1)
    {
    case 77:                        // 'i32'
      consume(77);                  // 'i32'
      break;
    case 79:                        // 'i64'
      consume(79);                  // 'i64'
      break;
    case 61:                        // 'f32'
      consume(61);                  // 'f32'
      break;
    case 63:                        // 'f64'
      consume(63);                  // 'f64'
      break;
    case 149:                       // 'v128'
      consume(149);                 // 'v128'
      break;
    default:
      parse_reftype();
    }
    eventHandler.endNonterminal("valueType", e0);
  }

  function try_valueType()
  {
    switch (l1)
    {
    case 77:                        // 'i32'
      consumeT(77);                 // 'i32'
      break;
    case 79:                        // 'i64'
      consumeT(79);                 // 'i64'
      break;
    case 61:                        // 'f32'
      consumeT(61);                 // 'f32'
      break;
    case 63:                        // 'f64'
      consumeT(63);                 // 'f64'
      break;
    case 149:                       // 'v128'
      consumeT(149);                // 'v128'
      break;
    default:
      try_reftype();
    }
  }

  function parse_id()
  {
    eventHandler.startNonterminal("id", e0);
    consume(7);                     // identifier^token
    eventHandler.endNonterminal("id", e0);
  }

  function try_id()
  {
    consumeT(7);                    // identifier^token
  }

  function parse_index()
  {
    eventHandler.startNonterminal("index", e0);
    switch (l1)
    {
    case 7:                         // identifier^token
      parse_id();
      break;
    default:
      consume(4);                   // nat
    }
    eventHandler.endNonterminal("index", e0);
  }

  function try_index()
  {
    switch (l1)
    {
    case 7:                         // identifier^token
      try_id();
      break;
    default:
      consumeT(4);                  // nat
    }
  }

  function parse_typeidx()
  {
    eventHandler.startNonterminal("typeidx", e0);
    parse_index();
    eventHandler.endNonterminal("typeidx", e0);
  }

  function try_typeidx()
  {
    try_index();
  }

  function parse_funcidx()
  {
    eventHandler.startNonterminal("funcidx", e0);
    parse_index();
    eventHandler.endNonterminal("funcidx", e0);
  }

  function try_funcidx()
  {
    try_index();
  }

  function parse_tableidx()
  {
    eventHandler.startNonterminal("tableidx", e0);
    parse_index();
    eventHandler.endNonterminal("tableidx", e0);
  }

  function try_tableidx()
  {
    try_index();
  }

  function parse_memidx()
  {
    eventHandler.startNonterminal("memidx", e0);
    parse_index();
    eventHandler.endNonterminal("memidx", e0);
  }

  function try_memidx()
  {
    try_index();
  }

  function parse_tagidx()
  {
    eventHandler.startNonterminal("tagidx", e0);
    parse_index();
    eventHandler.endNonterminal("tagidx", e0);
  }

  function try_tagidx()
  {
    try_index();
  }

  function parse_elemidx()
  {
    eventHandler.startNonterminal("elemidx", e0);
    parse_index();
    eventHandler.endNonterminal("elemidx", e0);
  }

  function try_elemidx()
  {
    try_index();
  }

  function parse_dataidx()
  {
    eventHandler.startNonterminal("dataidx", e0);
    parse_index();
    eventHandler.endNonterminal("dataidx", e0);
  }

  function try_dataidx()
  {
    try_index();
  }

  function parse_labelidx()
  {
    eventHandler.startNonterminal("labelidx", e0);
    parse_index();
    eventHandler.endNonterminal("labelidx", e0);
  }

  function try_labelidx()
  {
    try_index();
  }

  function parse_fieldidx()
  {
    eventHandler.startNonterminal("fieldidx", e0);
    parse_index();
    eventHandler.endNonterminal("fieldidx", e0);
  }

  function try_fieldidx()
  {
    try_index();
  }

  function parse_signedNat()
  {
    eventHandler.startNonterminal("signedNat", e0);
    if (l1 == 6)                    // sign
    {
      consume(6);                   // sign
    }
    lookahead1W(1);                 // whitespace | nat
    consume(4);                     // nat
    eventHandler.endNonterminal("signedNat", e0);
  }

  function try_signedNat()
  {
    if (l1 == 6)                    // sign
    {
      consumeT(6);                  // sign
    }
    lookahead1W(1);                 // whitespace | nat
    consumeT(4);                    // nat
  }

  function parse_limits()
  {
    eventHandler.startNonterminal("limits", e0);
    if (l1 != 4)                    // nat
    {
      whitespace();
      parse_addrtype();
    }
    lookahead1W(1);                 // whitespace | nat
    consume(4);                     // nat
    lookahead1W(70);                // whitespace | nat | '(' | ')' | 'exnref' | 'externref' | 'funcref'
    if (l1 == 4)                    // nat
    {
      consume(4);                   // nat
    }
    eventHandler.endNonterminal("limits", e0);
  }

  function try_limits()
  {
    if (l1 != 4)                    // nat
    {
      try_addrtype();
    }
    lookahead1W(1);                 // whitespace | nat
    consumeT(4);                    // nat
    lookahead1W(70);                // whitespace | nat | '(' | ')' | 'exnref' | 'externref' | 'funcref'
    if (l1 == 4)                    // nat
    {
      consumeT(4);                  // nat
    }
  }

  function parse_addrtype()
  {
    eventHandler.startNonterminal("addrtype", e0);
    switch (l1)
    {
    case 77:                        // 'i32'
      consume(77);                  // 'i32'
      break;
    default:
      consume(79);                  // 'i64'
    }
    eventHandler.endNonterminal("addrtype", e0);
  }

  function try_addrtype()
  {
    switch (l1)
    {
    case 77:                        // 'i32'
      consumeT(77);                 // 'i32'
      break;
    default:
      consumeT(79);                 // 'i64'
    }
  }

  function parse_memarg()
  {
    eventHandler.startNonterminal("memarg", e0);
    switch (l1)
    {
    case 107:                       // 'offset='
      lookahead2W(1);               // whitespace | nat
      switch (lk)
      {
      case 1131:                    // 'offset=' nat
        lookahead3W(109);           // whitespace | string | dottedName | '(' | ')' | 'align=' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      }
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 853099:                    // 'offset=' nat 'align='
      consume(107);                 // 'offset='
      lookahead1W(1);               // whitespace | nat
      consume(4);                   // nat
      lookahead1W(6);               // whitespace | 'align='
      consume(13);                  // 'align='
      lookahead1W(1);               // whitespace | nat
      consume(4);                   // nat
      break;
    case 13:                        // 'align='
      consume(13);                  // 'align='
      lookahead1W(1);               // whitespace | nat
      consume(4);                   // nat
      break;
    default:
      consume(107);                 // 'offset='
      lookahead1W(1);               // whitespace | nat
      consume(4);                   // nat
    }
    eventHandler.endNonterminal("memarg", e0);
  }

  function try_memarg()
  {
    switch (l1)
    {
    case 107:                       // 'offset='
      lookahead2W(1);               // whitespace | nat
      switch (lk)
      {
      case 1131:                    // 'offset=' nat
        lookahead3W(109);           // whitespace | string | dottedName | '(' | ')' | 'align=' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      }
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 853099:                    // 'offset=' nat 'align='
      consumeT(107);                // 'offset='
      lookahead1W(1);               // whitespace | nat
      consumeT(4);                  // nat
      lookahead1W(6);               // whitespace | 'align='
      consumeT(13);                 // 'align='
      lookahead1W(1);               // whitespace | nat
      consumeT(4);                  // nat
      break;
    case 13:                        // 'align='
      consumeT(13);                 // 'align='
      lookahead1W(1);               // whitespace | nat
      consumeT(4);                  // nat
      break;
    default:
      consumeT(107);                // 'offset='
      lookahead1W(1);               // whitespace | nat
      consumeT(4);                  // nat
    }
  }

  function parse_laneidx()
  {
    eventHandler.startNonterminal("laneidx", e0);
    consume(4);                     // nat
    eventHandler.endNonterminal("laneidx", e0);
  }

  function try_laneidx()
  {
    consumeT(4);                    // nat
  }

  function parse_expr()
  {
    eventHandler.startNonterminal("expr", e0);
    for (;;)
    {
      lookahead1W(104);             // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(86);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 3                   // string
       || lk == 10                  // ')'
       || lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 67                  // 'func'
       || lk == 68                  // 'funcref'
       || lk == 28169)              // '(' 'ref'
      {
        break;
      }
      whitespace();
      parse_instr();
    }
    eventHandler.endNonterminal("expr", e0);
  }

  function try_expr()
  {
    for (;;)
    {
      lookahead1W(104);             // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'exnref' |
                                    // 'extern.convert_any' | 'externref' | 'func' | 'funcref' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
      switch (l1)
      {
      case 9:                       // '('
        lookahead2W(86);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'i8x16.shuffle' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable' | 'v128.const'
        break;
      default:
        lk = l1;
      }
      if (lk == 3                   // string
       || lk == 10                  // ')'
       || lk == 56                  // 'exnref'
       || lk == 60                  // 'externref'
       || lk == 67                  // 'func'
       || lk == 68                  // 'funcref'
       || lk == 28169)              // '(' 'ref'
      {
        break;
      }
      try_instr();
    }
  }

  function consume(t)
  {
    if (l1 == t)
    {
      whitespace();
      eventHandler.terminal(WAT.TOKEN[l1], b1, e1);
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = l3; if (l2 != 0) {
      b2 = b3; e2 = e3; l3 = 0; }}
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function consumeT(t)
  {
    if (l1 == t)
    {
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = l3; if (l2 != 0) {
      b2 = b3; e2 = e3; l3 = 0; }}
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
      if (code != 1)                // whitespace
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
    lk = (l2 << 8) | l1;
  }

  function lookahead3W(tokenSetId)
  {
    if (l3 == 0)
    {
      l3 = matchW(tokenSetId);
      b3 = begin;
      e3 = end;
    }
    lk |= l3 << 16;
  }

  function error(b, e, s, l, t)
  {
    if (e >= ex)
    {
      bx = b;
      ex = e;
      sx = s;
      lx = l;
      tx = t;
    }
    throw new thisParser.ParseException(bx, ex, sx, lx, tx);
  }

  var lk, b0, e0;
  var l1, b1, e1;
  var l2, b2, e2;
  var l3, b3, e3;
  var bx, ex, sx, lx, tx;
  var eventHandler;
  var memo;

  function memoize(i, e, v)
  {
    memo[(e << 4) + i] = v;
  }

  function memoized(i, e)
  {
    var v = memo[(e << 4) + i];
    return typeof v != "undefined" ? v : 0;
  }

  var input;
  var size;

  var begin;
  var end;

  function match(tokenSetId)
  {
    begin = end;
    var current = end;
    var result = WAT.INITIAL[tokenSetId];
    var state = 0;

    for (var code = result & 1023; code != 0; )
    {
      var charclass;
      var c0 = current < size ? input.charCodeAt(current) : 0;
      ++current;
      if (c0 < 0x80)
      {
        charclass = WAT.MAP0[c0];
      }
      else if (c0 < 0xd800)
      {
        var c1 = c0 >> 5;
        charclass = WAT.MAP1[(c0 & 31) + WAT.MAP1[(c1 & 31) + WAT.MAP1[c1 >> 5]]];
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
          if (WAT.MAP2[m] > c0) hi = m - 1;
          else if (WAT.MAP2[2 + m] < c0) lo = m + 1;
          else {charclass = WAT.MAP2[4 + m]; break;}
          if (lo > hi) {charclass = 0; break;}
        }
      }

      state = code;
      var i0 = (charclass << 10) + code - 1;
      code = WAT.TRANSITION[(i0 & 7) + WAT.TRANSITION[i0 >> 3]];

      if (code > 1023)
      {
        result = code;
        code &= 1023;
        end = current;
      }
    }

    result >>= 10;
    if (result == 0)
    {
      end = current - 1;
      var c1 = end < size ? input.charCodeAt(end) : 0;
      if (c1 >= 0xdc00 && c1 < 0xe000) --end;
      return error(begin, end, state, -1, -1);
    }

    if (end > size) end = size;
    return (result & 255) - 1;
  }

}

WAT.XmlSerializer = function(log, indent)
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

WAT.getTokenSet = function(tokenSetId)
{
  var set = [];
  var s = tokenSetId < 0 ? - tokenSetId : WAT.INITIAL[tokenSetId] & 1023;
  for (var i = 0; i < 151; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 876 + s - 1;
    var i1 = i0 >> 2;
    var f = WAT.EXPECTED[(i0 & 3) + WAT.EXPECTED[(i1 & 3) + WAT.EXPECTED[i1 >> 2]]];
    for ( ; f != 0; f >>>= 1, ++j)
    {
      if ((f & 1) != 0)
      {
        set.push(WAT.TOKEN[j]);
      }
    }
  }
  return set;
};

WAT.TopDownTreeBuilder = function()
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
    var nonterminal = new WAT.Nonterminal(name, begin, begin, []);
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
    addChild(new WAT.Terminal(name, begin, end));
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

WAT.Terminal = function(name, begin, end)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.terminal(name, begin, end);
  };
};

WAT.Nonterminal = function(name, begin, end, children)
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

WAT.MAP0 =
[
  /*   0 */ 54, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 4,
  /*  36 */ 6, 4, 4, 4, 7, 8, 4, 9, 4, 9, 10, 4, 11, 12, 13, 14, 15, 16, 17, 16, 18, 16, 19, 20, 4, 21, 4, 4, 4, 22, 22,
  /*  67 */ 22, 22, 23, 22, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 4, 26, 4, 4,
  /*  95 */ 27, 4, 28, 29, 30, 31, 32, 33, 34, 35, 36, 24, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  /* 122 */ 52, 4, 4, 4, 4, 4
];

WAT.MAP1 =
[
  /*   0 */ 54, 87, 87, 87, 87, 87, 87, 87, 85, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,
  /*  27 */ 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,
  /*  54 */ 119, 151, 182, 214, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251,
  /*  75 */ 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 241, 251, 251, 251, 251, 251, 251, 251, 251, 251,
  /*  96 */ 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251,
  /* 117 */ 251, 251, 54, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  /* 151 */ 2, 4, 5, 4, 6, 4, 4, 4, 7, 8, 4, 9, 4, 9, 10, 4, 11, 12, 13, 14, 15, 16, 17, 16, 18, 16, 19, 20, 4, 21, 4,
  /* 182 */ 4, 22, 22, 22, 22, 23, 22, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  /* 209 */ 4, 26, 4, 4, 27, 4, 28, 29, 30, 31, 32, 33, 34, 35, 36, 24, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  /* 237 */ 49, 50, 51, 52, 4, 4, 4, 4, 4, 4, 4, 4, 53, 53, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  /* 271 */ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4
];

WAT.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 4, 4
];

WAT.INITIAL =
[
  /*   0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  /*  29 */ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  /*  56 */ 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  /*  83 */ 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
  /* 108 */ 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 118, 120
];

WAT.TRANSITION =
[
  /*     0 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*    17 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*    34 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*    51 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*    68 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*    85 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   102 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   119 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   136 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   153 */ 7049, 7049, 7049, 7049, 7050, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   170 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   187 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   204 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   221 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   238 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   255 */ 7049, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7047,
  /*   272 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733, 7049, 7049,
  /*   289 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049, 7049,
  /*   306 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   323 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   340 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   357 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   374 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7040, 7040, 7040, 7040, 7040, 7040, 7040,
  /*   391 */ 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7040, 7047, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   408 */ 7049, 7049, 7049, 7049, 7049, 7050, 7068, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   425 */ 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   442 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   459 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   476 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   493 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   510 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   527 */ 7080, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733, 7049,
  /*   544 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049,
  /*   561 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   578 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   595 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   612 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   629 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7048, 7049, 7049, 7049, 7049, 7256,
  /*   646 */ 7049, 7049, 7049, 7049, 7049, 7260, 7049, 9224, 7259, 7091, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   663 */ 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   680 */ 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   697 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   714 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   731 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   748 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   765 */ 7049, 7049, 7049, 7435, 7049, 7049, 7049, 7049, 7682, 7109, 7123, 7301, 7431, 7108, 7439, 7301, 7124,
  /*   782 */ 7117, 7080, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733,
  /*   799 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049,
  /*   816 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   833 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   850 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   867 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   884 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7146, 7132, 7132, 7132, 7132,
  /*   901 */ 7148, 7143, 7156, 7159, 7167, 7132, 7170, 7135, 7171, 7179, 7186, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   918 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   935 */ 7049, 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   952 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   969 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*   986 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1003 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1020 */ 7049, 7049, 7049, 7049, 8460, 7049, 7049, 7049, 7049, 8461, 7197, 7196, 8459, 8461, 7049, 7213, 7049,
  /*  1037 */ 7205, 7209, 7080, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050,
  /*  1054 */ 7733, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7221, 7049,
  /*  1071 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1088 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1105 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1122 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1139 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 9459, 7049, 7049, 7049,
  /*  1156 */ 7049, 9738, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 9462, 7080, 7049, 7049, 7049, 7049, 7049,
  /*  1173 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7231, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1190 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1207 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1224 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1241 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1258 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1275 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1292 */ 7049, 7049, 7049, 7243, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 8563, 7359, 7359, 7359, 7359, 7359,
  /*  1309 */ 7269, 7733, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 9176, 7359, 7359, 7359, 7359, 7359, 7359, 7251,
  /*  1326 */ 7049, 7049, 7049, 7049, 7049, 8563, 7268, 7277, 7359, 7359, 7359, 7312, 7049, 7049, 7049, 7049, 9176,
  /*  1343 */ 7289, 7323, 7309, 7359, 7300, 7049, 7049, 7295, 7283, 7359, 7322, 7360, 7049, 7331, 7348, 7359, 7343,
  /*  1360 */ 7314, 7357, 7359, 7356, 7358, 7358, 7312, 9178, 7359, 7359, 7359, 7359, 7359, 7323, 7359, 7359, 7359,
  /*  1377 */ 7335, 7359, 7359, 7323, 7359, 7323, 7359, 7359, 7359, 7359, 7359, 7359, 7313, 7049, 7049, 7049, 7049,
  /*  1394 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7368, 7049, 7049,
  /*  1411 */ 7049, 7049, 9566, 8776, 7379, 8777, 7049, 7392, 7049, 7049, 7049, 7384, 7402, 7049, 7049, 7049, 7049,
  /*  1428 */ 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7410, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1445 */ 7049, 9800, 8224, 8224, 8224, 8224, 8224, 8224, 7426, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224,
  /*  1462 */ 8224, 8224, 8224, 9658, 7049, 7049, 7049, 7049, 9800, 8226, 11854, 8224, 8224, 9478, 7049, 7049, 7524,
  /*  1479 */ 9715, 8960, 11853, 8591, 7049, 7447, 10085, 8958, 7940, 10277, 7966, 7796, 7965, 7967, 11883, 7525, 11881,
  /*  1496 */ 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954,
  /*  1513 */ 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1530 */ 7049, 7049, 7049, 7049, 7049, 7049, 7459, 7049, 7049, 7049, 7049, 9566, 8776, 7379, 8777, 7049, 7392,
  /*  1547 */ 7049, 7049, 7049, 7470, 7488, 7049, 7049, 7049, 7049, 7049, 7049, 8299, 8235, 8224, 11864, 8224, 8224,
  /*  1564 */ 10896, 7510, 7410, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7496, 8708, 8224, 8224, 8224, 8224, 7509,
  /*  1581 */ 7426, 7049, 7049, 7049, 7049, 7049, 7518, 8224, 7533, 8224, 8224, 8224, 9474, 7049, 7049, 7049, 7049,
  /*  1598 */ 9800, 8226, 11854, 8224, 8224, 9478, 7049, 7049, 7524, 9715, 8960, 11853, 8591, 7049, 7447, 10085, 8802,
  /*  1615 */ 7940, 10277, 7966, 7796, 7965, 7967, 11883, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957,
  /*  1632 */ 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049,
  /*  1649 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7459, 7049,
  /*  1666 */ 7049, 7049, 7049, 9566, 8776, 7379, 8777, 7049, 7392, 7049, 7049, 7049, 7470, 7488, 7049, 7049, 7049,
  /*  1683 */ 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7410, 7049, 7049, 7049, 7049, 9830,
  /*  1700 */ 7544, 7552, 9800, 8224, 8224, 7566, 8224, 8501, 7576, 7426, 7049, 7049, 7049, 7049, 7049, 9624, 8224,
  /*  1717 */ 8224, 8224, 8224, 8224, 9474, 7049, 7049, 7049, 11434, 9800, 8226, 11854, 8224, 8224, 9478, 7049, 7049,
  /*  1734 */ 7524, 9715, 8960, 11853, 8591, 7049, 7447, 10085, 8958, 7940, 10277, 7966, 7796, 7965, 7967, 11883, 7525,
  /*  1751 */ 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994,
  /*  1768 */ 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  1785 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7459, 7049, 7049, 7049, 7049, 9566, 8776, 7379, 8777, 7049,
  /*  1802 */ 7392, 7049, 7049, 7049, 7470, 7488, 7049, 7049, 7049, 7049, 7049, 7587, 10364, 9117, 10163, 8224, 7595,
  /*  1819 */ 8224, 7451, 7596, 7410, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 9800, 8224, 8224, 8224, 8224, 8224,
  /*  1836 */ 8224, 7426, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 9474, 7049, 7049, 7049,
  /*  1853 */ 7049, 9800, 8226, 11854, 8224, 8224, 9478, 7049, 7049, 7524, 9715, 10635, 11853, 8591, 7049, 7447, 10085,
  /*  1870 */ 8958, 7940, 10277, 7966, 7796, 7965, 7967, 11883, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755,
  /*  1887 */ 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049,
  /*  1904 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7459,
  /*  1921 */ 7049, 7049, 7049, 7049, 9566, 8776, 7379, 8777, 7049, 7392, 7049, 7049, 7049, 7470, 7488, 7049, 7049,
  /*  1938 */ 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7410, 7049, 7049, 7049, 7049,
  /*  1955 */ 8645, 8417, 7604, 9800, 8224, 8224, 8224, 8224, 10560, 7620, 7426, 7049, 7049, 7049, 7049, 7049, 9624,
  /*  1972 */ 8224, 8224, 8224, 8224, 8224, 9474, 7049, 7049, 7049, 8168, 9800, 8226, 11854, 8224, 8224, 9478, 7049,
  /*  1989 */ 7049, 7524, 9715, 8960, 11853, 8591, 7049, 7447, 10085, 8958, 7940, 10277, 7966, 7796, 7965, 7967, 11883,
  /*  2006 */ 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774,
  /*  2023 */ 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2040 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7459, 7049, 7049, 7049, 7049, 9566, 8776, 7379, 8777,
  /*  2057 */ 7049, 7392, 7049, 7049, 7049, 7470, 7488, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224,
  /*  2074 */ 8224, 8224, 8224, 7510, 7410, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 9800, 8224, 8224, 8224, 8224,
  /*  2091 */ 8224, 8224, 7426, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 9474, 7049, 7049,
  /*  2108 */ 7049, 7049, 9800, 8226, 11854, 8224, 8224, 9478, 7049, 7049, 7524, 9715, 8960, 11853, 8591, 7049, 7447,
  /*  2125 */ 10085, 8958, 7940, 10277, 7966, 7796, 7965, 7967, 11883, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446,
  /*  2142 */ 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049,
  /*  2159 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2176 */ 7459, 7049, 7049, 7049, 7049, 9566, 8776, 7379, 8777, 7049, 7392, 7049, 7049, 7049, 7470, 7488, 7049,
  /*  2193 */ 7049, 7049, 7049, 7049, 7630, 11610, 8235, 8224, 8224, 8224, 8224, 8074, 7510, 7410, 7049, 7049, 7049,
  /*  2210 */ 7049, 7049, 7049, 7638, 9800, 8224, 8224, 8224, 8224, 8224, 8224, 7426, 7049, 7049, 7049, 7049, 7049,
  /*  2227 */ 9624, 8224, 8224, 8224, 8224, 8224, 9474, 7049, 7049, 7049, 7049, 7662, 7568, 11854, 8224, 8224, 9478,
  /*  2244 */ 7049, 7049, 7524, 9715, 8960, 11853, 8591, 7049, 7447, 10085, 8958, 7940, 10277, 7966, 7796, 7965, 7967,
  /*  2261 */ 11883, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834,
  /*  2278 */ 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2295 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7459, 7049, 7049, 7049, 7049, 9566, 8776, 7379,
  /*  2312 */ 8777, 7049, 7392, 7049, 7049, 7049, 7470, 7488, 7049, 7049, 7049, 7049, 7049, 7049, 7480, 8235, 10439,
  /*  2329 */ 8224, 7690, 8224, 10439, 7691, 7410, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 9800, 8224, 8224, 8224,
  /*  2346 */ 8224, 8224, 8224, 7426, 7049, 7049, 7049, 7049, 7049, 7699, 8224, 8224, 7667, 8224, 10055, 9474, 7049,
  /*  2363 */ 7049, 7049, 9790, 9800, 8226, 11854, 8224, 8224, 9478, 7049, 7049, 7524, 9715, 8960, 11853, 8591, 7049,
  /*  2380 */ 7447, 10085, 8958, 7940, 10277, 7966, 7796, 7965, 7967, 11883, 7525, 11881, 10784, 8957, 8957, 8956, 8806,
  /*  2397 */ 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107,
  /*  2414 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2431 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7080,
  /*  2448 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733, 7049, 7049,
  /*  2465 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7710, 7049, 7049, 7049, 7049,
  /*  2482 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7714, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2499 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2516 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2533 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2550 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7724, 7724, 7724, 7724, 7724, 7724, 7724,
  /*  2567 */ 7724, 7724, 7724, 7724, 7724, 7724, 7724, 7724, 7731, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2584 */ 7049, 7049, 7049, 7049, 7049, 7050, 7743, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2601 */ 7049, 7049, 7049, 7049, 7753, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2618 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2635 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2652 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2669 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2686 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2703 */ 7080, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733, 7049,
  /*  2720 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049,
  /*  2737 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2754 */ 7049, 11323, 7049, 7049, 7049, 7049, 7049, 7049, 11322, 10117, 7049, 7049, 7049, 7049, 10120, 7049, 7049,
  /*  2771 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2788 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2805 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2822 */ 7049, 7049, 7049, 7049, 7499, 8224, 8224, 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2839 */ 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7763, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224,
  /*  2856 */ 8224, 8224, 8224, 8224, 8224, 7781, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224,
  /*  2873 */ 9474, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224, 8224, 9478, 7049, 7049, 8754, 9715, 8960, 9900,
  /*  2890 */ 8591, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957,
  /*  2907 */ 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922,
  /*  2924 */ 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  2941 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7499, 8224, 8224, 8224,
  /*  2958 */ 8224, 7804, 7415, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7763,
  /*  2975 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 7812, 7049, 7049,
  /*  2992 */ 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 9474, 7049, 7049, 7049, 7049, 7521, 9897, 9901,
  /*  3009 */ 8224, 8224, 9478, 7049, 7049, 8754, 9715, 8960, 9900, 8591, 7049, 7794, 10337, 8958, 9713, 10277, 7966,
  /*  3026 */ 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995,
  /*  3043 */ 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3060 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3077 */ 7049, 7049, 7049, 7049, 7049, 7499, 8224, 8224, 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7049, 7049,
  /*  3094 */ 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521,
  /*  3111 */ 8224, 8224, 8224, 8224, 8224, 8224, 7842, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224,
  /*  3128 */ 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224, 8224, 10279, 7049, 7049, 8754, 9715, 8960,
  /*  3145 */ 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957,
  /*  3162 */ 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334,
  /*  3179 */ 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3196 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7499, 8224, 8224,
  /*  3213 */ 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510,
  /*  3230 */ 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 7852, 7049,
  /*  3247 */ 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897,
  /*  3264 */ 9901, 8224, 8224, 7869, 7049, 7049, 8754, 9715, 8960, 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277,
  /*  3281 */ 7966, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772,
  /*  3298 */ 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049,
  /*  3315 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3332 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7879, 7049, 7049, 7049, 7049, 7049,
  /*  3349 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7733, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3366 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7058, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3383 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3400 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3417 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3434 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3451 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7817, 7049, 7049, 7049, 7499, 8224,
  /*  3468 */ 8224, 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224,
  /*  3485 */ 7510, 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7702, 8224, 8224, 8224, 8224, 8224, 8224, 7842,
  /*  3502 */ 7049, 7049, 7049, 7889, 7049, 9624, 8224, 8224, 7501, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521,
  /*  3519 */ 7900, 9901, 8224, 8224, 10376, 7049, 9615, 7911, 9715, 8960, 7933, 8225, 7049, 7794, 10337, 7950, 9713,
  /*  3536 */ 10277, 7966, 7796, 11629, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 7958, 7976, 8957, 8956,
  /*  3553 */ 9428, 7988, 9977, 8399, 8908, 10774, 9994, 8954, 9687, 9501, 7922, 9336, 11107, 7049, 7049, 7049, 7049,
  /*  3570 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7735, 7049, 7049,
  /*  3587 */ 7049, 7049, 7049, 7235, 11112, 11111, 7999, 8008, 8010, 8010, 8018, 8022, 7080, 8030, 8038, 7049, 8721,
  /*  3604 */ 8049, 9480, 8061, 8062, 8070, 11006, 11008, 8082, 8102, 11403, 7763, 7049, 7049, 7049, 11178, 7049, 7049,
  /*  3621 */ 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 8113, 9760, 8734, 10549, 10710, 7049, 9624, 8121, 10874,
  /*  3638 */ 8224, 8154, 8224, 8162, 8245, 8176, 7049, 7049, 7521, 8186, 8212, 8223, 8136, 9478, 7049, 8234, 8754,
  /*  3655 */ 8511, 8960, 9034, 8591, 8243, 8253, 10337, 8958, 11446, 10277, 7966, 9030, 8957, 8958, 7968, 7525, 11881,
  /*  3672 */ 10784, 8957, 8957, 8263, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 10404, 11834, 10026, 9093,
  /*  3688 */ 10390, 9687, 10767, 10310, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3705 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 8272, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3722 */ 11127, 11130, 11130, 11130, 11130, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224,
  /*  3739 */ 8224, 8224, 7510, 7763, 7049, 7049, 7049, 10134, 7049, 7844, 7049, 7521, 8224, 8820, 8224, 8224, 8224,
  /*  3756 */ 8224, 7781, 7049, 10480, 7049, 7049, 7049, 9624, 8224, 8281, 8224, 8224, 8224, 9474, 7049, 7049, 7049,
  /*  3773 */ 7049, 7521, 9897, 9901, 8224, 8224, 9478, 7049, 7049, 8791, 9715, 8960, 9900, 8591, 10983, 7794, 10337,
  /*  3790 */ 8958, 10667, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956, 10504, 8446, 8755,
  /*  3807 */ 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049,
  /*  3824 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3841 */ 8290, 7049, 7049, 7049, 7049, 7049, 7049, 8307, 7049, 11802, 11804, 8317, 8316, 11805, 7080, 7415, 7049,
  /*  3858 */ 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7763, 7049, 8325, 8334, 8344,
  /*  3875 */ 7049, 7049, 7049, 7521, 8224, 8353, 8835, 8224, 10519, 8224, 7781, 8362, 9536, 7049, 7049, 8381, 9624,
  /*  3892 */ 8224, 8224, 8697, 11667, 8392, 8411, 7049, 7049, 8429, 7049, 11310, 9897, 8440, 8224, 8224, 8457, 7049,
  /*  3909 */ 7049, 8469, 9715, 8960, 8480, 8591, 7049, 8492, 10337, 8958, 8509, 10277, 7966, 7796, 8519, 8529, 8959,
  /*  3926 */ 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 8537, 10774,
  /*  3943 */ 9994, 8954, 9687, 9334, 7922, 9336, 8550, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  3960 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7371, 7049, 7049, 7049, 7049, 8562, 7049, 7049,
  /*  3977 */ 7060, 8571, 8573, 8573, 8581, 8573, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224,
  /*  3994 */ 8224, 8224, 8224, 7510, 7763, 7049, 7049, 11591, 7049, 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8589,
  /*  4011 */ 8224, 8224, 7781, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 9474, 7049, 8599,
  /*  4028 */ 7049, 7049, 7521, 9897, 9901, 8224, 8224, 9478, 7049, 7049, 9255, 9715, 8960, 9900, 8591, 7049, 7794,
  /*  4045 */ 10337, 8958, 9713, 10277, 7966, 10638, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446,
  /*  4062 */ 8755, 8957, 8956, 10772, 8608, 9335, 11624, 11834, 8620, 9994, 8954, 9687, 9358, 8631, 9336, 11107, 7049,
  /*  4079 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4096 */ 7049, 10280, 8643, 7049, 7049, 7049, 7049, 7188, 7857, 7861, 8653, 8664, 8656, 8672, 8676, 7804, 7415,
  /*  4113 */ 8295, 8308, 9540, 7049, 7049, 8684, 8235, 8224, 8693, 11414, 11336, 8705, 10958, 7763, 7049, 8716, 8733,
  /*  4130 */ 7049, 8742, 7049, 7049, 8751, 11663, 8224, 8484, 8763, 8224, 8224, 7812, 7049, 8775, 7049, 10537, 7049,
  /*  4147 */ 8785, 11650, 7622, 10932, 8141, 8817, 9474, 7049, 8336, 10193, 7049, 7521, 9897, 8828, 10936, 8886, 9478,
  /*  4164 */ 11507, 10948, 8754, 8905, 11633, 9900, 8916, 7476, 8924, 10337, 8958, 9713, 8932, 8940, 8948, 8623, 8958,
  /*  4181 */ 9404, 10354, 8968, 10784, 10611, 8980, 8990, 8635, 8446, 8755, 8957, 8956, 9002, 9012, 8866, 9024, 9042,
  /*  4198 */ 9055, 9067, 9087, 9105, 9334, 9074, 9336, 9113, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4215 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 11587, 7049, 7049, 7049, 9951, 7773,
  /*  4232 */ 9125, 9142, 9132, 8224, 10721, 9150, 9154, 7080, 7415, 7049, 9162, 9173, 7049, 9186, 7049, 8235, 8224,
  /*  4249 */ 8224, 9196, 9208, 10571, 9217, 9244, 7049, 7049, 7755, 11532, 10224, 11529, 7049, 9252, 8224, 8893, 9861,
  /*  4266 */ 9263, 8224, 10839, 7781, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 9474, 7049,
  /*  4283 */ 7049, 7049, 7049, 11165, 9897, 9271, 8224, 8224, 9478, 7049, 9282, 8754, 9715, 8960, 9900, 9293, 7100,
  /*  4300 */ 9301, 10337, 8958, 9313, 9323, 7966, 8255, 8957, 9333, 8959, 11046, 9344, 10784, 8957, 8957, 8956, 11103,
  /*  4317 */ 9355, 8755, 9366, 8956, 10772, 9376, 9335, 8446, 9394, 11697, 9994, 9412, 9687, 9423, 11477, 9336, 11107,
  /*  4334 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4351 */ 7049, 7049, 7049, 7072, 7049, 7049, 7049, 7049, 7049, 7071, 7070, 9436, 9438, 9438, 9438, 9438, 7080,
  /*  4368 */ 7415, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 7049,
  /*  4385 */ 7049, 10794, 7049, 10795, 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 9446, 7049, 7049, 7049, 7049,
  /*  4402 */ 7049, 9624, 8224, 8224, 8224, 8224, 8767, 10275, 7049, 7049, 7049, 7049, 7521, 10235, 9901, 8224, 8224,
  /*  4419 */ 10279, 7049, 7049, 8754, 9715, 8960, 9900, 8225, 7049, 9470, 11059, 8958, 9488, 10277, 7966, 7796, 10009,
  /*  4436 */ 9500, 9509, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446,
  /*  4453 */ 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4470 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4487 */ 7049, 7049, 7049, 7499, 8224, 8224, 8224, 8224, 7080, 7415, 7049, 7049, 7049, 8554, 7049, 7049, 8235,
  /*  4504 */ 8224, 11364, 11366, 11362, 9520, 7510, 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224, 8224,
  /*  4521 */ 8224, 8224, 8224, 8224, 7842, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 10275,
  /*  4538 */ 9530, 7049, 7049, 9548, 7521, 9897, 9901, 10254, 8224, 10279, 7049, 7049, 8754, 9715, 8960, 9900, 8225,
  /*  4555 */ 7049, 7794, 10337, 8958, 10416, 10277, 7966, 7796, 8403, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956,
  /*  4572 */ 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336,
  /*  4589 */ 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4606 */ 7049, 7049, 9612, 7049, 7462, 7049, 7049, 7049, 7049, 9559, 9563, 9574, 9582, 9599, 9596, 9601, 9588,
  /*  4623 */ 9609, 7415, 8273, 7049, 7049, 8345, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 9623,
  /*  4640 */ 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8224, 10153, 8224, 7842, 7049, 7049, 7049,
  /*  4657 */ 7049, 7049, 9624, 9632, 8224, 8224, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897, 9643, 8224,
  /*  4674 */ 8224, 10279, 7049, 7049, 10204, 9715, 8960, 9900, 8225, 7049, 9654, 10337, 8958, 9666, 10277, 9678, 7796,
  /*  4691 */ 8957, 9699, 10591, 7525, 9886, 10649, 8957, 10629, 8956, 9709, 8446, 8755, 8972, 8956, 10772, 9995, 9335,
  /*  4708 */ 10597, 11834, 10774, 9994, 9725, 9382, 9334, 10324, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4725 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4742 */ 7049, 7049, 7049, 7049, 7499, 8224, 8224, 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4759 */ 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224,
  /*  4776 */ 8224, 8224, 8224, 8224, 8224, 7842, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224,
  /*  4793 */ 10275, 9735, 7049, 7049, 7049, 7521, 9897, 9901, 9746, 8224, 10279, 7049, 7049, 8754, 9715, 8960, 9900,
  /*  4810 */ 8225, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957,
  /*  4827 */ 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922,
  /*  4844 */ 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  4861 */ 7049, 7049, 7049, 7049, 7049, 7049, 9757, 7049, 7049, 7049, 7049, 7049, 7049, 9768, 9778, 9774, 9778,
  /*  4878 */ 9779, 7080, 7834, 8053, 9787, 7049, 7049, 7049, 7049, 9798, 9811, 10064, 8354, 9808, 11231, 9819, 7829,
  /*  4895 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 11547, 11217, 11194, 8224, 11213, 8224, 8224, 7842, 7871, 9827,
  /*  4912 */ 7049, 9838, 7049, 11534, 9847, 8224, 9859, 8224, 7672, 10275, 7049, 9875, 9869, 7049, 7521, 9897, 9894,
  /*  4929 */ 8146, 8224, 10279, 9909, 7049, 8754, 9920, 8960, 9900, 8225, 7049, 9930, 10337, 8449, 9713, 9944, 9962,
  /*  4946 */ 7796, 8957, 9415, 8959, 11732, 9985, 11260, 8957, 8957, 7991, 10341, 10494, 10682, 10753, 10003, 11773,
  /*  4962 */ 9717, 9059, 9936, 10035, 8192, 8797, 8954, 8872, 8982, 10020, 7925, 11107, 7049, 7049, 7049, 7049, 7049,
  /*  4979 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 11605,
  /*  4996 */ 7049, 7049, 10123, 7049, 7083, 7082, 10043, 10045, 10045, 10045, 10045, 7080, 7415, 7049, 8367, 7049,
  /*  5012 */ 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 7049, 7650, 7049, 7049, 7049,
  /*  5029 */ 7049, 7521, 8224, 10053, 8224, 8224, 8224, 8224, 7842, 10429, 9188, 7049, 7049, 7049, 9624, 9635, 8224,
  /*  5046 */ 8224, 10063, 8224, 10275, 7049, 10739, 7049, 7049, 7521, 9897, 9901, 8224, 10072, 10279, 7049, 7049, 8754,
  /*  5063 */ 9715, 8960, 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881,
  /*  5080 */ 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954,
  /*  5097 */ 10081, 11778, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  5114 */ 7049, 7049, 7049, 7049, 7049, 7049, 10114, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 10093,
  /*  5131 */ 10095, 10095, 10095, 10103, 10111, 10131, 7049, 7049, 7049, 7049, 7049, 7049, 10142, 10895, 11377, 10073,
  /*  5147 */ 10161, 10891, 10171, 10179, 7049, 9285, 7049, 7049, 11390, 10187, 7049, 10201, 8224, 8224, 8224, 8224,
  /*  5163 */ 10212, 9305, 7842, 7049, 7049, 7049, 10220, 7049, 9624, 8224, 8224, 8224, 10232, 8224, 7536, 7049, 7049,
  /*  5180 */ 7049, 7049, 10243, 9897, 10251, 8224, 9200, 10279, 7049, 11896, 8754, 10262, 10012, 9900, 10273, 7049,
  /*  5196 */ 10288, 10337, 10500, 9713, 10277, 10303, 7796, 8957, 10332, 10349, 10372, 11881, 10384, 8957, 8612, 8956,
  /*  5212 */ 8806, 8446, 9492, 8521, 8956, 10772, 11098, 9335, 8446, 10265, 10774, 9994, 8954, 9079, 9334, 7922, 10687,
  /*  5229 */ 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  5246 */ 7049, 7049, 7049, 7049, 7049, 7418, 7049, 7049, 7821, 7049, 7049, 7049, 7499, 8497, 8224, 8224, 10398,
  /*  5263 */ 7080, 7415, 7049, 8384, 10428, 7049, 7049, 7049, 9165, 11218, 10437, 10447, 8224, 8224, 11236, 7829,
  /*  5279 */ 10464, 7745, 10476, 7049, 7049, 7049, 7049, 7521, 10488, 8224, 10512, 8224, 8224, 8224, 7842, 7049, 10531,
  /*  5296 */ 10545, 7049, 7049, 9624, 10557, 11824, 10568, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897, 9901,
  /*  5313 */ 8224, 8224, 10279, 7049, 7049, 10579, 9715, 8960, 9900, 8225, 7049, 7794, 10337, 8958, 8131, 10277, 10605,
  /*  5330 */ 8204, 10623, 8958, 10646, 7525, 11881, 10784, 10657, 10675, 9727, 8806, 8446, 8755, 9972, 8956, 10772,
  /*  5346 */ 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049,
  /*  5363 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7093,
  /*  5380 */ 7049, 7049, 7093, 7095, 7097, 7099, 7499, 8224, 10844, 10695, 8282, 7080, 7415, 7049, 7049, 7049, 7049,
  /*  5397 */ 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 10971, 7049, 7049, 10706, 7049, 7049,
  /*  5414 */ 7521, 8224, 10718, 8224, 8224, 10729, 8224, 7852, 7049, 7049, 10738, 7049, 7049, 9624, 9851, 8224, 10698,
  /*  5431 */ 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224, 8224, 7869, 7049, 7049, 8754, 9715,
  /*  5448 */ 8960, 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 9230, 9512,
  /*  5465 */ 10747, 8957, 7980, 8806, 8446, 8755, 10761, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687,
  /*  5482 */ 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  5499 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7499, 8224,
  /*  5516 */ 8224, 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049, 7558, 8224, 8224, 8224, 8224, 8224,
  /*  5533 */ 7510, 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 7842,
  /*  5550 */ 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521,
  /*  5567 */ 9897, 9901, 8224, 8224, 10279, 7049, 7049, 8754, 9715, 10782, 9900, 8225, 7049, 7794, 10337, 8958, 9713,
  /*  5584 */ 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956,
  /*  5601 */ 10772, 9995, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049,
  /*  5618 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  5635 */ 8000, 10792, 7049, 7892, 8421, 11739, 10793, 10803, 10806, 10814, 10821, 10824, 7080, 7768, 7049, 7049,
  /*  5651 */ 7049, 9954, 7049, 7049, 10832, 10852, 9522, 10867, 7579, 10886, 11020, 7829, 10904, 7049, 8600, 7654,
  /*  5667 */ 7049, 7049, 7049, 11153, 8224, 10523, 10916, 10925, 8224, 9274, 10944, 7049, 7049, 7881, 8178, 7049, 9624,
  /*  5684 */ 8224, 8224, 8224, 8224, 10956, 10275, 8743, 10966, 7049, 10979, 10991, 8126, 11002, 8224, 11016, 9325,
  /*  5700 */ 7049, 7049, 10994, 9715, 8960, 9900, 11849, 11028, 11043, 11054, 8958, 11758, 10277, 7966, 7796, 8957,
  /*  5716 */ 8958, 9683, 7525, 11881, 10784, 8957, 9967, 8956, 8806, 8842, 10420, 8957, 8956, 9399, 9995, 9335, 11067,
  /*  5733 */ 11834, 10774, 9386, 11081, 9687, 9334, 7922, 11091, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  5750 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7645, 7049, 7049,
  /*  5767 */ 7786, 8725, 11120, 11138, 11140, 11140, 11140, 11141, 7080, 7415, 7049, 7049, 7049, 7049, 11149, 7049,
  /*  5783 */ 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 11161, 7049, 8373, 7049, 8371, 7049, 7521, 8224,
  /*  5800 */ 8224, 8224, 10295, 8224, 8224, 7842, 7049, 7049, 11569, 9551, 7049, 9624, 8224, 8224, 8224, 11209, 8224,
  /*  5817 */ 11173, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224, 8224, 10279, 7049, 7049, 8754, 9315, 9991, 9900,
  /*  5834 */ 8225, 7049, 11190, 11249, 11202, 11226, 10277, 7966, 7796, 10585, 11244, 11257, 7525, 11881, 10031, 8994,
  /*  5850 */ 8957, 8956, 11481, 8446, 8755, 8957, 8956, 8542, 9995, 9335, 8446, 8472, 10774, 9994, 8954, 9687, 9334,
  /*  5867 */ 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  5884 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 8041, 11268, 7049, 7608, 9453, 7612, 11280, 11297, 11287,
  /*  5901 */ 11294, 11298, 7080, 7415, 7049, 11182, 8326, 11306, 8432, 7049, 8235, 8224, 11552, 10452, 8224, 8224,
  /*  5917 */ 8215, 7829, 11744, 7049, 9912, 7049, 8685, 11318, 7049, 11331, 11344, 10149, 10917, 10456, 11360, 8224,
  /*  5933 */ 7842, 7049, 7049, 7049, 7049, 7049, 9624, 11374, 8224, 8224, 8224, 8224, 10275, 7049, 7049, 11385, 7049,
  /*  5950 */ 11398, 9897, 11411, 11820, 8224, 10279, 11422, 11430, 8754, 9715, 9701, 7903, 8897, 7049, 7794, 9236,
  /*  5966 */ 8958, 9713, 10277, 7966, 7796, 8957, 11073, 8959, 7525, 11909, 8854, 9368, 8957, 11083, 11442, 8878,
  /*  5982 */ 11454, 8957, 11462, 11690, 9995, 11470, 8446, 11834, 9004, 8198, 8860, 7917, 11489, 7922, 8848, 11503,
  /*  5998 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6015 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 11515, 11517, 11517, 11517, 11517, 7080,
  /*  6032 */ 7415, 7049, 11525, 11542, 11564, 11581, 11599, 7716, 8224, 8224, 8224, 8224, 11618, 10878, 7829, 7049,
  /*  6048 */ 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 7842, 7049, 7049, 11641,
  /*  6065 */ 7049, 7049, 10908, 8224, 9646, 11649, 9749, 8224, 7677, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224,
  /*  6082 */ 8224, 10279, 7049, 7049, 8754, 9715, 11658, 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 10410,
  /*  6099 */ 8957, 8958, 8959, 7525, 11881, 10784, 9016, 8264, 8956, 8806, 8446, 8755, 8957, 8956, 9047, 9995, 9335,
  /*  6116 */ 8446, 11675, 10774, 9691, 8954, 9687, 10615, 7922, 11683, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6133 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6150 */ 7049, 7049, 7049, 11035, 11705, 11707, 11707, 11709, 11717, 7080, 7415, 7049, 7049, 7049, 7049, 7049,
  /*  6166 */ 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521,
  /*  6183 */ 8224, 8224, 8224, 8224, 8224, 8224, 7842, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224,
  /*  6200 */ 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224, 8224, 10279, 7049, 7049, 8754, 9715, 8960,
  /*  6217 */ 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277, 11725, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957,
  /*  6234 */ 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9670, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334,
  /*  6251 */ 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6268 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7499, 8224, 8224,
  /*  6285 */ 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510,
  /*  6302 */ 7829, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 7842, 7049,
  /*  6319 */ 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897,
  /*  6336 */ 7942, 8224, 8224, 10279, 7049, 7049, 8754, 9715, 8960, 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277,
  /*  6353 */ 7966, 7796, 8957, 8958, 8959, 7525, 11881, 11752, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 11766, 10772,
  /*  6370 */ 9995, 11786, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049,
  /*  6387 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6404 */ 7049, 7049, 7049, 7049, 7049, 7049, 7499, 8224, 8224, 8224, 8224, 11795, 7415, 7223, 7049, 7049, 7049,
  /*  6421 */ 10359, 7049, 11813, 10856, 8224, 9209, 10859, 11349, 11352, 7829, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6437 */ 10468, 7521, 10730, 8224, 8224, 8224, 8224, 8224, 7842, 7049, 7049, 7049, 7049, 8094, 11877, 8224, 8224,
  /*  6454 */ 8224, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224, 8224, 8089, 7049, 7049, 8754,
  /*  6471 */ 9715, 8960, 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881,
  /*  6488 */ 10784, 8957, 8957, 8956, 8806, 8446, 8755, 8957, 8956, 10772, 9995, 9335, 8446, 11834, 10774, 11832,
  /*  6504 */ 11495, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6521 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6538 */ 7499, 8224, 8224, 8224, 8224, 7080, 7415, 7049, 7049, 7049, 7394, 7049, 7049, 11842, 8224, 8224, 8224,
  /*  6555 */ 8105, 11862, 7510, 7829, 7049, 7049, 7049, 7049, 11872, 7049, 9839, 11573, 8224, 8224, 11556, 8224, 8224,
  /*  6572 */ 8224, 7842, 7049, 7049, 7049, 7049, 7049, 9624, 8224, 8224, 8224, 8224, 8224, 10275, 11891, 7049, 7049,
  /*  6589 */ 7049, 11272, 9897, 9901, 8224, 9134, 10279, 9881, 7049, 8754, 8809, 8960, 9900, 8225, 7049, 7794, 10337,
  /*  6606 */ 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959, 7525, 11881, 10784, 8957, 8957, 8956, 8806, 10317, 8755,
  /*  6623 */ 8957, 9097, 10772, 9922, 9335, 8446, 11834, 10774, 9994, 8954, 9687, 9334, 7922, 11787, 11107, 7049, 7049,
  /*  6640 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6657 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7499, 8224, 8224, 8224, 8224, 7080, 7415, 7049,
  /*  6674 */ 7049, 7049, 7049, 7049, 7049, 8235, 8224, 8224, 8224, 8224, 8224, 7510, 7829, 7049, 7049, 7049, 7049,
  /*  6691 */ 7049, 7049, 7049, 7521, 8224, 8224, 8224, 8224, 8224, 8224, 7842, 7049, 7049, 7049, 7049, 7049, 9624,
  /*  6708 */ 8224, 8224, 8224, 8224, 8224, 10275, 7049, 7049, 7049, 7049, 7521, 9897, 9901, 8224, 8224, 10279, 7049,
  /*  6725 */ 7049, 8754, 9715, 8960, 9900, 8225, 7049, 7794, 10337, 8958, 9713, 10277, 7966, 7796, 8957, 8958, 8959,
  /*  6742 */ 7525, 11881, 10784, 8957, 8957, 8956, 10663, 8446, 8755, 9347, 8956, 10772, 9995, 9335, 8446, 11834,
  /*  6758 */ 10774, 9994, 8954, 9687, 9334, 7922, 9336, 11107, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6775 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6792 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7080, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6809 */ 7049, 7049, 7049, 7049, 7050, 7068, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6826 */ 7049, 7049, 7049, 7058, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6843 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6860 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6877 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6894 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6911 */ 7049, 7049, 7049, 7049, 7049, 7049, 11904, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6928 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7050, 7221, 7049, 7049,
  /*  6945 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6962 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6979 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  6996 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  7013 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049,
  /*  7030 */ 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 7049, 2169, 2169, 2169, 2169, 2169, 2169, 2169,
  /*  7047 */ 2169, 122, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 241, 0, 0, 0, 0, 0, 0, 139, 0, 241, 2169, 0, 0, 0, 0, 0, 0,
  /*  7076 */ 146, 0, 0, 0, 0, 122, 0, 0, 0, 0, 0, 0, 152, 0, 0, 0, 4096, 0, 0, 0, 0, 0, 0, 156, 0, 0, 0, 0, 0, 0, 0,
  /*  7107 */ 70656, 131, 131, 0, 0, 0, 0, 0, 0, 131, 131, 0, 131, 131, 0, 0, 131, 0, 131, 0, 0, 131, 0, 0, 0, 123, 123,
  /*  7134 */ 123, 123, 123, 123, 123, 123, 10363, 123, 10363, 123, 10363, 10363, 123, 123, 123, 123, 10363, 123, 123,
  /*  7153 */ 123, 123, 10363, 123, 123, 10363, 123, 123, 123, 10363, 123, 123, 10363, 10363, 123, 123, 10363, 10363,
  /*  7171 */ 10363, 10363, 123, 10363, 10363, 10363, 10363, 10363, 10363, 10363, 10363, 10363, 10363, 10363, 10363,
  /*  7186 */ 123, 122, 0, 0, 0, 0, 0, 0, 172, 0, 11264, 0, 11264, 0, 0, 0, 0, 0, 0, 11264, 0, 0, 11264, 11264, 11264,
  /*  7211 */ 11264, 0, 0, 11264, 0, 0, 0, 11264, 0, 0, 0, 2169, 0, 0, 0, 0, 0, 0, 260, 0, 241, 242, 0, 364, 0, 0, 0, 0,
  /*  7239 */ 132, 0, 0, 0, 0, 122, 0, 0, 0, 0, 243, 243, 309, 241, 0, 0, 462, 0, 0, 0, 122, 122, 0, 0, 0, 122, 0, 0, 0,
  /*  7268 */ 501, 309, 309, 309, 309, 309, 309, 309, 122, 309, 511, 309, 309, 309, 515, 309, 309, 309, 622, 623, 309,
  /*  7289 */ 309, 309, 567, 568, 309, 309, 0, 309, 612, 309, 309, 309, 0, 0, 0, 0, 0, 0, 0, 131, 309, 588, 309, 309,
  /*  7313 */ 309, 309, 309, 309, 0, 0, 0, 0, 0, 634, 309, 309, 0, 309, 309, 309, 309, 309, 0, 0, 309, 0, 309, 309, 309,
  /*  7338 */ 309, 0, 309, 309, 309, 681, 0, 309, 309, 309, 309, 309, 666, 667, 309, 0, 0, 673, 309, 0, 0, 309, 309,
  /*  7361 */ 309, 309, 309, 309, 309, 309, 0, 0, 5245, 6271, 0, 0, 0, 0, 0, 139, 140, 0, 5245, 5245, 0, 0, 0, 5245, 0,
  /*  7386 */ 0, 0, 0, 6271, 0, 0, 5245, 5245, 0, 0, 0, 0, 0, 0, 283, 0, 0, 122, 0, 0, 5245, 6271, 6272, 6272, 241, 242,
  /*  7412 */ 6507, 6508, 6509, 0, 0, 8440, 0, 0, 0, 0, 0, 155, 0, 0, 192, 241, 6507, 6508, 6509, 0, 0, 0, 131, 0, 0, 0,
  /*  7438 */ 131, 0, 0, 0, 0, 131, 131, 131, 0, 0, 0, 9632, 0, 192, 192, 192, 192, 192, 350, 353, 192, 0, 5245, 6272,
  /*  7462 */ 0, 0, 0, 0, 0, 147, 148, 149, 5245, 0, 0, 0, 0, 6272, 0, 0, 0, 50176, 0, 0, 0, 0, 301, 0, 0, 83968, 0,
  /*  7489 */ 122, 0, 0, 5245, 6272, 6272, 6272, 0, 76800, 0, 0, 0, 192, 192, 192, 192, 192, 192, 192, 524, 426, 192,
  /*  7511 */ 192, 192, 192, 192, 192, 192, 122, 497, 0, 0, 0, 0, 0, 0, 9632, 192, 192, 192, 192, 0, 0, 0, 192, 192,
  /*  7535 */ 512, 192, 192, 192, 192, 192, 0, 0, 540, 0, 0, 63488, 0, 0, 0, 0, 404, 0, 0, 407, 0, 0, 410, 0, 0, 0,
  /*  7561 */ 56320, 0, 0, 0, 192, 192, 437, 192, 192, 192, 192, 192, 192, 0, 572, 80064, 192, 456, 192, 192, 192, 192,
  /*  7583 */ 192, 192, 333, 192, 0, 0, 286, 0, 0, 0, 0, 291, 319, 192, 192, 319, 192, 192, 192, 192, 122, 405, 0, 0,
  /*  7607 */ 408, 0, 0, 0, 0, 167, 0, 0, 0, 0, 0, 186, 0, 192, 82112, 192, 192, 192, 192, 192, 192, 192, 517, 0, 0,
  /*  7632 */ 287, 0, 0, 0, 0, 292, 0, 406, 0, 0, 0, 0, 74752, 0, 0, 160, 161, 162, 0, 0, 0, 386, 0, 0, 0, 0, 392, 0, 0,
  /*  7661 */ 0, 84992, 0, 0, 0, 0, 192, 192, 192, 192, 522, 192, 192, 192, 192, 533, 192, 192, 192, 192, 537, 0, 0, 0,
  /*  7685 */ 131, 0, 0, 131, 131, 320, 192, 192, 320, 192, 192, 192, 192, 122, 0, 153600, 0, 0, 0, 0, 0, 9632, 192,
  /*  7708 */ 192, 419, 0, 241, 0, 0, 0, 463, 0, 0, 0, 0, 0, 0, 308, 192, 124, 124, 124, 124, 124, 124, 124, 124, 122,
  /*  7733 */ 241, 242, 0, 0, 0, 0, 0, 0, 132, 133, 362, 242, 0, 0, 0, 0, 0, 0, 381, 0, 0, 362, 0, 0, 0, 0, 0, 0, 388,
  /*  7762 */ 0, 241, 242, 0, 0, 6509, 0, 0, 8440, 0, 250, 0, 0, 0, 145, 0, 0, 173, 145, 192, 241, 0, 0, 6509, 0, 0, 0,
  /*  7789 */ 161, 0, 0, 0, 174, 0, 0, 9632, 9632, 192, 192, 192, 192, 192, 9632, 0, 122, 0, 0, 0, 0, 244, 244, 192,
  /*  7813 */ 241, 244, 0, 6509, 0, 0, 0, 169, 0, 0, 0, 0, 170, 0, 0, 0, 241, 242, 0, 0, 0, 0, 0, 8440, 249, 0, 251, 0,
  /*  7841 */ 0, 192, 241, 0, 0, 0, 0, 0, 0, 393, 0, 192, 241, 0, 0, 244, 0, 0, 0, 172, 0, 0, 172, 172, 172, 172, 185,
  /*  7868 */ 172, 192, 244, 0, 0, 0, 0, 0, 0, 471, 0, 0, 240, 0, 0, 0, 0, 0, 0, 482, 0, 0, 0, 485, 0, 0, 0, 0, 0, 158,
  /*  7898 */ 159, 0, 192, 566, 192, 192, 192, 192, 9632, 192, 109760, 192, 123072, 0, 9632, 192, 613, 192, 192, 9632,
  /*  7918 */ 9632, 192, 192, 10072, 9632, 192, 192, 9632, 9632, 9632, 9632, 192, 10090, 9632, 9632, 192, 635, 192,
  /*  7936 */ 9632, 192, 192, 639, 192, 0, 192, 192, 9632, 192, 192, 192, 192, 149066, 9890, 9632, 9632, 9632, 9893,
  /*  7955 */ 9632, 9632, 680, 192, 192, 781, 9632, 9632, 9632, 9999, 9632, 0, 0, 9632, 9632, 9632, 9632, 9632, 9632,
  /*  7974 */ 192, 741, 10001, 192, 787, 192, 192, 9632, 9632, 9632, 9989, 9632, 9632, 9632, 9632, 809, 192, 192, 9632,
  /*  7993 */ 9632, 9632, 9632, 9990, 9632, 9632, 133, 0, 0, 0, 0, 0, 0, 0, 157, 187, 187, 193, 193, 193, 193, 193, 193,
  /*  8016 */ 193, 193, 193, 193, 193, 193, 193, 229, 193, 193, 193, 229, 193, 237, 0, 247, 8440, 0, 0, 0, 252, 253,
  /*  8038 */ 254, 255, 256, 0, 0, 0, 0, 0, 163, 164, 165, 0, 0, 279, 280, 0, 0, 0, 0, 258, 259, 0, 0, 0, 0, 295, 0, 0,
  /*  8066 */ 0, 0, 0, 192, 192, 192, 313, 314, 192, 192, 192, 192, 192, 351, 354, 192, 192, 192, 341, 192, 343, 192,
  /*  8088 */ 327, 192, 0, 600, 0, 0, 0, 0, 0, 492, 493, 494, 495, 496, 192, 327, 314, 192, 192, 192, 192, 192, 192,
  /*  8111 */ 345, 192, 192, 241, 0, 0, 6509, 0, 0, 465, 192, 502, 192, 192, 507, 192, 192, 192, 192, 569, 192, 9632,
  /*  8133 */ 192, 192, 9905, 192, 192, 192, 192, 596, 192, 192, 192, 192, 54464, 192, 192, 192, 192, 90685, 192, 192,
  /*  8153 */ 592, 192, 525, 192, 192, 192, 192, 192, 529, 192, 192, 536, 192, 192, 6682, 0, 0, 0, 64512, 0, 0, 80896,
  /*  8175 */ 0, 0, 546, 0, 0, 0, 0, 0, 0, 488, 0, 565, 192, 192, 192, 192, 570, 9632, 192, 0, 9632, 9632, 10054, 9632,
  /*  8199 */ 9632, 192, 192, 42176, 9632, 9632, 9632, 192, 709, 192, 192, 192, 9928, 192, 192, 9791, 192, 192, 192,
  /*  8218 */ 192, 192, 192, 361, 122, 587, 192, 192, 192, 192, 192, 192, 192, 192, 0, 192, 605, 0, 0, 0, 0, 0, 0, 0,
  /*  8242 */ 192, 644, 645, 0, 0, 0, 0, 0, 0, 544, 0, 649, 0, 9632, 9632, 192, 192, 192, 192, 43200, 9632, 769, 9632,
  /*  8265 */ 9632, 9632, 9632, 9632, 9632, 9632, 9984, 134, 0, 0, 0, 0, 0, 0, 0, 261, 510, 192, 192, 192, 192, 192,
  /*  8287 */ 192, 192, 221, 0, 135, 136, 137, 138, 0, 0, 0, 257, 0, 0, 0, 0, 298, 0, 302, 303, 175, 0, 0, 0, 0, 0, 0,
  /*  8314 */ 0, 268, 195, 195, 219, 195, 195, 195, 195, 195, 195, 375, 0, 0, 0, 0, 0, 0, 0, 276, 0, 384, 0, 0, 0, 0, 0,
  /*  8341 */ 0, 550, 0, 112640, 0, 0, 0, 0, 0, 0, 0, 284, 428, 192, 192, 192, 192, 192, 192, 192, 316, 466, 467, 468,
  /*  8365 */ 469, 470, 0, 0, 0, 264, 0, 0, 0, 0, 390, 0, 0, 0, 0, 0, 490, 491, 70122, 0, 0, 0, 0, 0, 266, 267, 0, 192,
  /*  8393 */ 192, 192, 70164, 192, 192, 532, 192, 192, 0, 10036, 9632, 9632, 9632, 9632, 9934, 9632, 9632, 9632, 192,
  /*  8412 */ 192, 192, 69824, 192, 6682, 0, 0, 0, 65536, 0, 0, 0, 0, 159, 0, 0, 0, 0, 0, 552, 0, 0, 0, 0, 0, 277, 0, 0,
  /*  8440 */ 192, 192, 9792, 192, 583, 584, 192, 192, 0, 9632, 9632, 9632, 9632, 9632, 9894, 9632, 192, 599, 6682, 0,
  /*  8460 */ 0, 0, 0, 0, 0, 11264, 0, 0, 0, 105472, 9632, 192, 192, 192, 192, 9632, 9632, 9632, 192, 132512, 192, 192,
  /*  8482 */ 636, 9853, 192, 192, 192, 192, 192, 441, 192, 192, 0, 0, 9632, 9868, 659, 192, 192, 192, 217, 192, 192,
  /*  8503 */ 192, 192, 192, 63680, 192, 192, 192, 9898, 192, 192, 9632, 192, 192, 192, 9632, 9842, 9632, 9930, 9632,
  /*  8522 */ 9632, 9632, 9632, 9632, 9632, 10012, 9632, 9938, 9632, 9632, 118176, 9632, 9632, 9632, 729, 192, 192, 829,
  /*  8540 */ 9632, 9632, 9632, 192, 9632, 192, 0, 9632, 21920, 9632, 192, 9632, 876, 192, 0, 0, 0, 0, 281, 0, 0, 0,
  /*  8562 */ 140, 0, 0, 0, 0, 0, 0, 0, 309, 0, 0, 196, 196, 196, 196, 196, 196, 196, 196, 196, 227, 196, 196, 196, 196,
  /*  8587 */ 196, 196, 192, 55488, 192, 192, 192, 192, 192, 192, 192, 6744, 67584, 0, 0, 0, 0, 0, 0, 0, 389, 10022,
  /*  8609 */ 192, 192, 192, 9632, 9632, 9632, 9632, 9981, 9632, 9632, 9632, 10050, 192, 0, 9632, 9632, 9632, 9632,
  /*  8627 */ 9632, 9935, 9936, 9937, 9632, 864, 192, 9632, 9632, 9632, 9632, 192, 192, 9632, 150720, 192, 142, 143, 0,
  /*  8646 */ 0, 0, 0, 0, 0, 81920, 0, 188, 188, 197, 197, 197, 197, 197, 197, 224, 197, 224, 197, 197, 216, 197, 197,
  /*  8669 */ 197, 216, 218, 224, 224, 197, 228, 228, 228, 224, 233, 228, 228, 228, 197, 293, 0, 0, 0, 0, 0, 0, 0, 400,
  /*  8693 */ 322, 192, 324, 325, 192, 192, 192, 192, 192, 523, 192, 192, 192, 192, 348, 192, 192, 192, 192, 192, 192,
  /*  8714 */ 426, 192, 0, 376, 0, 0, 379, 0, 0, 0, 272, 0, 0, 0, 0, 174, 0, 0, 0, 383, 0, 0, 0, 0, 0, 0, 0, 476, 394,
  /*  8743 */ 0, 0, 0, 0, 0, 0, 0, 545, 0, 0, 412, 0, 9632, 192, 192, 192, 192, 9632, 9632, 9632, 443, 192, 192, 423,
  /*  8767 */ 192, 192, 192, 192, 192, 534, 192, 192, 54272, 0, 0, 0, 0, 0, 0, 0, 5245, 0, 0, 0, 498, 0, 0, 106496, 0,
  /*  8792 */ 9632, 192, 192, 614, 192, 9632, 9632, 192, 844, 192, 9632, 9632, 9632, 119200, 9632, 9632, 9632, 192, 192,
  /*  8811 */ 9632, 192, 192, 624, 9632, 9632, 151744, 192, 531, 192, 192, 192, 192, 192, 192, 434, 192, 192, 192, 9793,
  /*  8831 */ 192, 192, 192, 585, 192, 192, 192, 428, 192, 192, 442, 192, 192, 0, 9998, 9632, 9632, 9632, 9632, 29088,
  /*  8851 */ 9632, 192, 9632, 9632, 9632, 32160, 192, 192, 192, 192, 9632, 192, 9632, 10067, 9632, 9632, 9632, 100768,
  /*  8869 */ 9632, 9632, 192, 9632, 9632, 192, 38080, 9632, 10073, 192, 192, 0, 9632, 9632, 9632, 9632, 10000, 192,
  /*  8887 */ 593, 192, 192, 192, 192, 598, 192, 192, 192, 430, 192, 192, 192, 192, 192, 643, 130681, 0, 192, 192, 9837,
  /*  8908 */ 192, 192, 192, 9632, 9632, 9632, 833, 9632, 192, 192, 641, 192, 192, 192, 192, 6744, 0, 0, 9632, 9632,
  /*  8928 */ 192, 192, 192, 663, 192, 50368, 192, 0, 0, 696, 0, 698, 0, 0, 9632, 9632, 9632, 9919, 9632, 9921, 9922,
  /*  8949 */ 9923, 192, 192, 40128, 192, 192, 9632, 192, 9632, 9632, 9632, 9632, 9632, 9632, 9632, 9632, 192, 192, 192,
  /*  8968 */ 150528, 0, 0, 9964, 9632, 9632, 9632, 9632, 10010, 9632, 9632, 9632, 93600, 9632, 9632, 9632, 9632, 9632,
  /*  8986 */ 9632, 9632, 37056, 9632, 192, 9986, 9987, 9988, 9632, 9632, 9632, 9632, 78240, 9632, 9632, 9632, 145824,
  /*  9003 */ 192, 9632, 192, 0, 9632, 9632, 9632, 10055, 9632, 10023, 192, 192, 811, 9632, 9632, 9632, 9632, 79264,
  /*  9021 */ 9977, 9632, 9632, 152768, 192, 819, 9632, 10038, 10040, 9632, 9632, 708, 192, 192, 192, 192, 9632, 638,
  /*  9039 */ 192, 192, 192, 192, 192, 192, 10046, 9632, 9632, 192, 9632, 192, 0, 9632, 22944, 9632, 9632, 835, 0,
  /*  9058 */ 10052, 9632, 9632, 9632, 9632, 120224, 125743, 9632, 9632, 10057, 9632, 192, 192, 192, 9632, 86432, 9632,
  /*  9075 */ 192, 192, 9632, 10082, 9632, 9632, 192, 192, 9632, 9632, 858, 192, 192, 10065, 192, 9632, 9632, 10068,
  /*  9093 */ 9632, 9632, 843, 192, 192, 9632, 9632, 9632, 139680, 9632, 9632, 9632, 9632, 10070, 192, 192, 9632, 9632,
  /*  9111 */ 192, 859, 875, 9632, 192, 192, 0, 0, 0, 0, 306, 0, 0, 192, 0, 176, 0, 178, 145, 145, 173, 178, 178, 192,
  /*  9135 */ 192, 192, 192, 192, 192, 192, 17971, 145, 180, 182, 182, 182, 182, 145, 182, 225, 225, 192, 225, 225, 225,
  /*  9156 */ 230, 230, 230, 225, 230, 238, 0, 0, 87040, 0, 0, 0, 0, 0, 307, 307, 192, 0, 0, 271, 0, 0, 0, 0, 0, 309,
  /*  9182 */ 309, 309, 309, 309, 0, 285, 0, 0, 0, 0, 0, 0, 89088, 0, 87232, 192, 192, 87232, 192, 192, 192, 192, 192,
  /*  9205 */ 597, 192, 192, 339, 192, 192, 192, 192, 192, 192, 192, 317, 192, 356, 87232, 192, 192, 192, 192, 122, 0,
  /*  9226 */ 0, 122, 122, 122, 0, 0, 0, 9632, 9965, 9632, 9632, 9632, 192, 192, 9884, 9632, 9888, 192, 241, 242, 0, 0,
  /*  9248 */ 6509, 6144, 0, 8440, 0, 0, 413, 0, 9632, 192, 192, 192, 192, 9833, 9834, 192, 192, 444, 192, 192, 114094,
  /*  9269 */ 192, 430, 192, 192, 9794, 192, 192, 192, 192, 192, 192, 459, 192, 0, 0, 58368, 0, 0, 0, 0, 0, 380, 0, 0,
  /*  9293 */ 58560, 192, 192, 192, 192, 192, 192, 6744, 0, 0, 9632, 9869, 192, 192, 192, 192, 192, 6602, 192, 460, 192,
  /*  9314 */ 9899, 192, 192, 9632, 192, 192, 192, 9841, 9632, 70848, 192, 192, 0, 0, 0, 0, 0, 0, 604, 9939, 9632, 9632,
  /*  9336 */ 9632, 9632, 9632, 9632, 192, 9632, 9632, 9632, 0, 62464, 0, 9632, 9632, 9632, 9632, 9632, 10011, 9632,
  /*  9354 */ 9632, 47296, 62656, 0, 9632, 9632, 9632, 9632, 9632, 31136, 192, 9632, 10006, 9632, 9632, 9632, 9632,
  /*  9371 */ 9632, 9632, 9632, 91552, 92576, 10024, 192, 192, 192, 9632, 10029, 9632, 9632, 855, 192, 9632, 9632, 192,
  /*  9389 */ 192, 192, 10061, 9632, 9632, 827, 192, 192, 9632, 9632, 9632, 192, 9632, 192, 803, 9632, 9632, 9632, 9951,
  /*  9408 */ 9632, 9954, 740, 192, 192, 9632, 46272, 9632, 9632, 9632, 9632, 9632, 121248, 9632, 192, 10076, 9632,
  /*  9425 */ 9632, 9632, 9632, 9632, 192, 9632, 802, 0, 9632, 9632, 10021, 0, 0, 198, 198, 198, 198, 198, 198, 198,
  /*  9445 */ 198, 192, 241, 0, 0, 0, 0, 464, 0, 0, 167, 0, 0, 179, 0, 0, 126, 0, 0, 0, 0, 0, 126, 0, 0, 0, 0, 9632,
  /*  9473 */ 9870, 192, 192, 192, 192, 192, 6682, 0, 0, 0, 0, 0, 0, 290, 0, 192, 9900, 192, 192, 9632, 192, 192, 192,
  /*  9496 */ 192, 10005, 9632, 9632, 9940, 9632, 9632, 9632, 9632, 9632, 9632, 192, 10079, 9946, 9632, 9632, 9632,
  /*  9513 */ 9632, 9632, 192, 192, 192, 192, 49568, 192, 337, 192, 192, 192, 192, 192, 192, 192, 34104, 0, 0, 44032,
  /*  9533 */ 541, 542, 543, 0, 0, 0, 69632, 0, 0, 0, 0, 273, 274, 275, 0, 0, 0, 44590, 0, 0, 0, 0, 0, 487, 0, 0, 0,
  /*  9560 */ 171, 0, 0, 0, 171, 0, 0, 0, 0, 0, 0, 5245, 5245, 0, 0, 181, 171, 171, 171, 184, 148, 184, 189, 189, 199,
  /*  9585 */ 209, 212, 209, 209, 209, 231, 231, 231, 235, 231, 212, 212, 209, 212, 209, 209, 209, 209, 209, 209, 209,
  /*  9606 */ 209, 231, 231, 0, 122, 0, 0, 0, 129, 0, 0, 0, 0, 0, 609, 0, 0, 367, 0, 0, 0, 0, 0, 0, 0, 9632, 192, 192,
  /*  9634 */ 503, 192, 192, 192, 192, 192, 192, 508, 192, 192, 192, 9795, 192, 192, 192, 192, 192, 192, 516, 192, 0, 0,
  /*  9656 */ 9632, 9871, 192, 192, 192, 192, 192, 6682, 539, 0, 192, 9901, 192, 192, 9632, 192, 192, 192, 10028, 9632,
  /*  9676 */ 9632, 9632, 0, 0, 9632, 9632, 9918, 9632, 9632, 9632, 9952, 9632, 9632, 192, 192, 9632, 9632, 192, 192,
  /*  9695 */ 192, 9632, 9632, 10062, 9941, 9632, 9632, 9632, 9632, 9632, 9632, 192, 128192, 633, 9992, 9632, 9632, 192,
  /*  9713 */ 192, 9632, 192, 192, 9632, 192, 192, 192, 9632, 9632, 9632, 97696, 847, 9632, 192, 9632, 9632, 9632, 9632,
  /*  9732 */ 9632, 9632, 9991, 0, 32768, 0, 0, 0, 0, 0, 0, 7168, 0, 0, 192, 192, 32960, 192, 192, 192, 192, 192, 192,
  /*  9755 */ 528, 192, 150, 151, 0, 0, 0, 0, 0, 0, 48128, 0, 0, 0, 0, 200, 210, 210, 213, 210, 210, 210, 213, 210, 210,
  /*  9780 */ 210, 210, 210, 210, 210, 210, 213, 0, 263, 0, 0, 0, 0, 0, 0, 75776, 0, 0, 258, 0, 0, 0, 0, 0, 0, 192, 192,
  /*  9807 */ 192, 192, 340, 192, 192, 192, 192, 192, 316, 318, 192, 192, 316, 192, 192, 192, 192, 192, 192, 122, 0, 0,
  /*  9829 */ 473, 0, 0, 0, 0, 0, 79872, 0, 0, 484, 0, 0, 0, 0, 0, 0, 0, 15360, 192, 192, 192, 41466, 192, 192, 192,
  /*  9854 */ 192, 192, 51392, 192, 192, 192, 519, 192, 192, 192, 192, 192, 192, 192, 114094, 551, 0, 0, 0, 0, 68608, 0,
  /*  9876 */ 0, 0, 90112, 0, 549, 0, 0, 0, 95232, 0, 0, 0, 0, 9632, 9632, 9632, 9632, 9968, 573, 192, 9632, 192, 192,
  /*  9899 */ 192, 192, 192, 192, 9632, 192, 192, 192, 192, 192, 0, 71680, 0, 0, 0, 0, 0, 0, 102400, 0, 0, 192, 620,
  /*  9922 */ 9632, 192, 192, 192, 9632, 9632, 96672, 9632, 0, 0, 9632, 9872, 192, 661, 192, 192, 0, 9632, 9632, 9632,
  /*  9942 */ 10041, 9632, 192, 192, 192, 694, 695, 0, 697, 0, 0, 168, 0, 0, 0, 0, 0, 282, 0, 0, 699, 0, 9632, 9632,
  /*  9966 */ 9632, 9632, 9632, 9632, 9980, 9632, 9632, 9632, 9632, 10009, 9632, 9632, 9632, 9632, 10030, 9632, 192,
  /*  9983 */ 10032, 10033, 0, 0, 45803, 9632, 9632, 9966, 9632, 9632, 9845, 9632, 9632, 192, 192, 192, 9632, 9632,
  /* 10001 */ 9632, 9632, 798, 9632, 9632, 9632, 9632, 140704, 9632, 9632, 9931, 9632, 9632, 9632, 9632, 9632, 124536,
  /* 10018 */ 192, 192, 115104, 192, 192, 9632, 9632, 10083, 9632, 192, 0, 9632, 10053, 9632, 9632, 9632, 754, 192, 192,
  /* 10037 */ 192, 9632, 10047, 9632, 192, 9632, 0, 0, 201, 201, 201, 201, 201, 201, 201, 201, 192, 429, 192, 192, 192,
  /* 10058 */ 192, 192, 192, 192, 154122, 89280, 192, 192, 192, 192, 192, 192, 192, 331, 111808, 192, 192, 192, 192,
  /* 10077 */ 192, 192, 192, 338, 30112, 9632, 192, 192, 9632, 9632, 192, 192, 9632, 0, 0, 192, 190, 191, 202, 202, 202,
  /* 10098 */ 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 236, 202, 202, 0, 122, 0, 0, 0, 130, 0, 0, 0, 0, 0,
  /* 10122 */ 110592, 0, 0, 0, 0, 0, 154, 0, 0, 246, 0, 8440, 0, 0, 0, 0, 0, 137216, 393, 0, 0, 0, 304, 0, 0, 0, 0, 192,
  /* 10150 */ 192, 192, 431, 192, 192, 192, 192, 454, 192, 192, 192, 192, 338, 192, 192, 192, 192, 192, 192, 319, 192,
  /* 10171 */ 338, 192, 357, 192, 310, 192, 192, 122, 241, 242, 0, 0, 0, 0, 6510, 8440, 401, 0, 0, 0, 0, 403, 0, 0, 0,
  /* 10196 */ 138240, 0, 0, 554, 555, 57743, 0, 414, 0, 9632, 192, 192, 192, 615, 9632, 9632, 192, 450, 452, 192, 192,
  /* 10217 */ 192, 192, 455, 0, 147456, 0, 0, 0, 0, 0, 0, 398, 0, 0, 0, 192, 192, 147648, 192, 192, 192, 192, 192, 192,
  /* 10241 */ 9787, 192, 0, 0, 103424, 561, 9632, 192, 192, 564, 192, 192, 9796, 192, 192, 192, 192, 192, 192, 44623,
  /* 10261 */ 192, 619, 192, 9632, 192, 192, 192, 9632, 9632, 10048, 192, 9632, 192, 640, 192, 192, 192, 192, 192, 0, 0,
  /* 10282 */ 0, 0, 0, 0, 0, 141, 0, 0, 9867, 9873, 660, 192, 662, 192, 192, 192, 445, 192, 447, 192, 447, 0, 104448,
  /* 10305 */ 9632, 9632, 9632, 9632, 9920, 9632, 192, 192, 10081, 9632, 9632, 10084, 192, 192, 0, 9632, 18848, 9632,
  /* 10323 */ 9632, 9632, 192, 192, 9632, 9632, 9632, 9632, 869, 9632, 9943, 9632, 9632, 9944, 9632, 9632, 192, 192,
  /* 10341 */ 9632, 9632, 9632, 192, 192, 9632, 192, 45836, 9947, 9632, 9632, 9632, 9953, 9632, 192, 192, 745, 746, 0,
  /* 10360 */ 0, 0, 288, 0, 0, 0, 0, 296, 299, 291, 0, 286, 9958, 192, 192, 192, 192, 0, 0, 0, 601, 602, 603, 0, 26016,
  /* 10385 */ 9632, 9632, 192, 755, 192, 192, 9632, 192, 9632, 9632, 9632, 28064, 10069, 192, 234, 192, 192, 192, 234,
  /* 10404 */ 192, 192, 0, 9632, 9632, 10039, 9632, 9632, 192, 710, 192, 192, 192, 9632, 192, 688, 9632, 192, 192, 192,
  /* 10424 */ 788, 9632, 9632, 9632, 269, 0, 0, 0, 0, 0, 0, 0, 52224, 192, 323, 192, 192, 192, 192, 192, 192, 320, 192,
  /* 10447 */ 192, 332, 192, 192, 335, 192, 192, 192, 334, 192, 192, 192, 192, 446, 431, 192, 431, 0, 0, 369, 0, 0, 0,
  /* 10470 */ 0, 0, 409, 0, 0, 0, 0, 0, 385, 0, 0, 0, 0, 0, 474, 0, 0, 0, 192, 192, 422, 192, 192, 425, 192, 192, 0,
  /* 10497 */ 9632, 9632, 19872, 9632, 9632, 9892, 9632, 9632, 9632, 9632, 192, 778, 9632, 192, 192, 192, 192, 438, 439,
  /* 10516 */ 192, 192, 439, 192, 192, 192, 453, 192, 192, 192, 192, 192, 433, 192, 435, 0, 472, 0, 0, 0, 475, 0, 0, 0,
  /* 10540 */ 151552, 0, 0, 0, 489, 0, 477, 0, 0, 0, 0, 0, 0, 480, 0, 0, 0, 192, 192, 504, 192, 192, 192, 192, 192, 192,
  /* 10566 */ 65728, 192, 192, 192, 520, 192, 192, 192, 192, 192, 192, 87232, 192, 0, 9827, 192, 192, 192, 192, 9632,
  /* 10586 */ 9632, 9932, 9632, 9632, 9632, 9632, 9632, 9950, 9632, 9632, 9955, 192, 192, 0, 9632, 9632, 9632, 9632,
  /* 10604 */ 10042, 0, 0, 9632, 9917, 9632, 9632, 9632, 9632, 9975, 9976, 9632, 9632, 9632, 9632, 10078, 9632, 192,
  /* 10622 */ 9632, 9929, 9632, 9632, 9632, 9632, 9632, 9632, 9632, 9979, 9632, 9632, 9982, 9632, 9632, 9844, 9632,
  /* 10639 */ 9632, 192, 192, 192, 711, 192, 9632, 9632, 9949, 9632, 9632, 9632, 9632, 192, 192, 192, 757, 9632, 9632,
  /* 10658 */ 9974, 9632, 9632, 9632, 9632, 9632, 9632, 9993, 192, 192, 9632, 192, 192, 9632, 690, 192, 192, 9632, 9978,
  /* 10677 */ 9632, 9632, 9632, 9632, 9983, 9632, 192, 192, 39104, 192, 9632, 9632, 9632, 10088, 192, 9632, 16800, 9632,
  /* 10695 */ 192, 192, 221, 192, 192, 192, 192, 192, 192, 94400, 192, 0, 0, 396, 0, 0, 0, 0, 0, 486, 0, 0, 0, 192, 192,
  /* 10720 */ 107712, 192, 192, 192, 192, 192, 225, 192, 225, 449, 192, 192, 192, 192, 192, 192, 192, 427, 94208, 0, 0,
  /* 10741 */ 0, 0, 0, 0, 0, 111616, 53664, 9632, 9632, 9632, 9632, 9632, 9632, 9632, 10008, 9632, 9632, 9632, 9632,
  /* 10760 */ 10013, 9632, 10007, 9632, 9632, 9632, 9632, 9632, 9632, 23968, 9632, 9632, 9632, 192, 9632, 192, 0, 9632,
  /* 10778 */ 9632, 9632, 9632, 9632, 117152, 9632, 9632, 9632, 9632, 192, 192, 192, 192, 9632, 158, 159, 0, 0, 0, 0, 0,
  /* 10799 */ 0, 0, 146432, 0, 0, 0, 203, 203, 203, 203, 214, 203, 203, 203, 203, 214, 203, 220, 222, 220, 203, 220,
  /* 10821 */ 203, 203, 220, 203, 203, 203, 203, 203, 203, 203, 220, 0, 0, 250, 0, 0, 0, 0, 192, 192, 192, 457, 6336,
  /* 10844 */ 192, 192, 192, 221, 221, 192, 221, 192, 311, 34104, 192, 315, 192, 192, 192, 192, 317, 192, 192, 192, 192,
  /* 10865 */ 192, 346, 192, 192, 333, 192, 192, 192, 333, 192, 192, 192, 513, 192, 192, 192, 192, 192, 360, 192, 122,
  /* 10886 */ 192, 333, 315, 192, 311, 192, 192, 192, 338, 310, 192, 192, 192, 192, 192, 192, 192, 355, 0, 368, 0, 0, 0,
  /* 10909 */ 0, 0, 0, 500, 0, 0, 9632, 436, 192, 192, 192, 192, 192, 192, 192, 431, 435, 192, 192, 192, 192, 192, 448,
  /* 10932 */ 192, 192, 192, 521, 192, 192, 192, 192, 192, 590, 192, 192, 461, 241, 0, 0, 0, 0, 0, 0, 608, 0, 0, 610,
  /* 10956 */ 192, 530, 192, 192, 192, 192, 192, 192, 325, 122, 0, 0, 547, 0, 548, 0, 0, 0, 378, 0, 0, 0, 382, 556, 557,
  /* 10981 */ 0, 0, 0, 0, 0, 0, 647, 0, 0, 0, 0, 559, 0, 0, 9632, 192, 192, 192, 616, 9632, 9632, 192, 574, 9632, 582,
  /* 11006 */ 192, 192, 192, 192, 327, 192, 192, 192, 327, 192, 192, 192, 594, 595, 192, 192, 192, 192, 359, 192, 192,
  /* 11027 */ 122, 0, 0, 646, 0, 0, 0, 648, 0, 0, 183, 183, 183, 183, 0, 183, 646, 650, 9632, 9632, 192, 192, 192, 192,
  /* 11051 */ 0, 0, 47104, 9880, 9881, 192, 192, 9632, 9632, 9632, 192, 192, 9632, 9632, 9886, 192, 192, 818, 0, 9632,
  /* 11071 */ 9632, 9632, 9632, 9632, 116128, 9632, 9632, 9632, 122272, 192, 848, 9632, 192, 9632, 9632, 9632, 9632,
  /* 11088 */ 9632, 141728, 9632, 9632, 10087, 9632, 9632, 873, 9632, 9632, 9632, 192, 810, 192, 9632, 9632, 9632, 9632,
  /* 11106 */ 149696, 192, 9632, 192, 192, 0, 0, 0, 0, 133, 0, 0, 0, 133, 161, 0, 0, 0, 0, 0, 160, 0, 0, 194, 208, 208,
  /* 11132 */ 208, 208, 208, 208, 208, 208, 161, 161, 204, 204, 204, 204, 204, 204, 204, 204, 239, 12288, 0, 0, 0, 0, 0,
  /* 11155 */ 0, 0, 9632, 192, 418, 192, 0, 0, 377, 0, 0, 0, 0, 0, 9632, 192, 35008, 192, 535, 192, 192, 192, 192, 0, 0,
  /* 11180 */ 0, 391, 0, 0, 0, 0, 265, 0, 0, 0, 0, 0, 9632, 9874, 192, 192, 192, 192, 432, 192, 192, 192, 9632, 9891,
  /* 11204 */ 9632, 9632, 9632, 9632, 9895, 192, 192, 192, 526, 192, 192, 192, 192, 420, 192, 192, 192, 192, 192, 192,
  /* 11224 */ 192, 321, 192, 9902, 192, 192, 9632, 192, 192, 192, 340, 349, 192, 192, 192, 323, 192, 192, 192, 122,
  /* 11244 */ 9942, 9632, 9632, 9632, 9632, 9632, 9632, 192, 192, 9632, 9885, 9887, 192, 9948, 9632, 9632, 9632, 9632,
  /* 11262 */ 9632, 192, 192, 756, 192, 9632, 166, 167, 0, 0, 0, 0, 0, 0, 9632, 563, 192, 192, 0, 0, 205, 211, 211, 211,
  /* 11286 */ 211, 215, 211, 215, 223, 223, 211, 226, 211, 211, 223, 211, 211, 211, 211, 211, 211, 211, 211, 226, 277,
  /* 11307 */ 0, 0, 0, 0, 0, 0, 0, 9778, 192, 192, 192, 0, 402, 0, 0, 0, 0, 0, 0, 14336, 0, 0, 0, 0, 411, 0, 0, 0, 9632,
  /* 11336 */ 192, 192, 192, 342, 192, 344, 192, 192, 192, 421, 192, 192, 424, 192, 192, 192, 346, 192, 192, 192, 192,
  /* 11357 */ 192, 192, 122, 192, 451, 192, 192, 192, 192, 192, 192, 328, 192, 192, 192, 337, 192, 192, 192, 505, 192,
  /* 11378 */ 192, 192, 192, 192, 329, 192, 192, 0, 129024, 0, 0, 553, 0, 0, 0, 397, 0, 0, 0, 399, 0, 0, 560, 0, 9632,
  /* 11403 */ 192, 192, 192, 358, 192, 192, 192, 122, 192, 192, 9797, 192, 192, 192, 192, 192, 336, 192, 192, 59392, 0,
  /* 11424 */ 88064, 0, 0, 109568, 122880, 130048, 0, 606, 0, 0, 0, 0, 0, 0, 66560, 0, 0, 82944, 9632, 144800, 9632,
  /* 11445 */ 192, 192, 9632, 192, 192, 9632, 192, 691, 192, 9632, 36626, 192, 192, 192, 9632, 73120, 74144, 192,
  /* 11463 */ 131871, 9632, 136608, 9632, 9632, 9632, 143776, 9632, 99744, 9632, 9632, 9632, 192, 9632, 9632, 192,
  /* 11479 */ 127168, 9632, 9632, 9632, 9632, 192, 192, 9995, 192, 192, 9632, 10077, 9632, 9632, 9632, 9632, 192, 9632,
  /* 11497 */ 192, 10066, 9632, 9632, 9632, 9632, 192, 135584, 192, 126144, 0, 0, 0, 0, 101376, 0, 0, 0, 0, 0, 206, 206,
  /* 11519 */ 206, 206, 206, 206, 206, 206, 262, 0, 0, 0, 0, 0, 0, 0, 113664, 0, 0, 0, 0, 0, 0, 108544, 9632, 0, 270, 0,
  /* 11545 */ 0, 0, 0, 0, 0, 415, 9632, 192, 192, 192, 326, 192, 192, 192, 192, 440, 192, 192, 192, 0, 278, 0, 0, 0, 0,
  /* 11570 */ 0, 0, 479, 0, 0, 0, 0, 9632, 417, 192, 192, 13312, 0, 0, 0, 289, 278, 0, 0, 144, 145, 0, 0, 0, 0, 387, 0,
  /* 11597 */ 0, 0, 0, 294, 0, 0, 0, 289, 0, 0, 152, 153, 154, 0, 0, 0, 297, 300, 292, 0, 287, 347, 192, 192, 192, 192,
  /* 11623 */ 352, 192, 192, 0, 9632, 10037, 9632, 9632, 9632, 9933, 9632, 9632, 9632, 9632, 9847, 192, 192, 192, 0, 0,
  /* 11643 */ 478, 0, 0, 481, 0, 483, 518, 192, 192, 192, 192, 192, 192, 192, 509, 9632, 9843, 9632, 9846, 9632, 192,
  /* 11664 */ 192, 192, 423, 192, 192, 192, 192, 192, 527, 192, 192, 192, 828, 192, 9632, 9632, 9632, 192, 133536,
  /* 11683 */ 10086, 9632, 9632, 9632, 192, 9632, 9632, 9632, 192, 155040, 192, 0, 10020, 9632, 9632, 192, 46080, 9632,
  /* 11701 */ 9632, 9632, 9632, 10056, 0, 0, 207, 207, 207, 207, 207, 207, 207, 207, 232, 232, 207, 207, 232, 232, 232,
  /* 11722 */ 207, 232, 207, 0, 0, 9916, 9632, 9632, 9632, 9632, 9632, 743, 744, 192, 192, 45056, 747, 0, 0, 177, 0,
  /* 11743 */ 157, 0, 0, 0, 370, 371, 372, 373, 374, 9632, 27377, 9632, 192, 192, 192, 192, 9632, 687, 192, 9632, 192,
  /* 11764 */ 692, 693, 192, 9632, 134944, 9632, 9632, 9632, 142752, 9632, 801, 9632, 192, 0, 9632, 9632, 9632, 24992,
  /* 11782 */ 9632, 9632, 192, 9632, 98720, 9632, 9632, 9632, 9632, 192, 9632, 9632, 61856, 0, 122, 0, 0, 0, 0, 245, 0,
  /* 11803 */ 0, 195, 195, 195, 195, 195, 195, 195, 195, 219, 260, 0, 0, 305, 0, 0, 0, 192, 192, 192, 589, 192, 192,
  /* 11826 */ 192, 192, 514, 192, 192, 192, 9632, 10058, 192, 192, 192, 9632, 9632, 9632, 192, 9632, 0, 283, 0, 0, 0, 0,
  /* 11848 */ 0, 192, 192, 192, 642, 192, 192, 192, 0, 192, 192, 192, 192, 192, 192, 345, 192, 192, 192, 192, 192, 192,
  /* 11870 */ 330, 192, 0, 395, 0, 0, 0, 0, 0, 0, 499, 0, 0, 0, 9632, 9632, 9632, 9632, 9632, 192, 192, 17408, 0, 0, 0,
  /* 11895 */ 0, 0, 0, 0, 607, 0, 0, 61023, 0, 0, 0, 3072, 0, 0, 0, 0, 0, 9632, 9632, 9632, 21231, 9632
];

WAT.EXPECTED =
[
  /*    0 */ 274, 277, 279, 283, 287, 291, 295, 299, 303, 305, 519, 805, 310, 404, 349, 314, 305, 305, 495, 375, 377,
  /*   21 */ 405, 384, 939, 305, 474, 403, 336, 356, 304, 305, 402, 377, 372, 305, 328, 404, 363, 333, 404, 342, 346,
  /*   42 */ 404, 391, 353, 404, 338, 360, 329, 360, 369, 381, 388, 395, 399, 846, 305, 562, 793, 409, 413, 417, 421,
  /*   63 */ 481, 305, 883, 426, 430, 439, 443, 743, 305, 770, 886, 449, 940, 458, 665, 848, 699, 914, 473, 850, 478,
  /*   84 */ 494, 499, 503, 490, 509, 760, 504, 946, 513, 517, 469, 523, 527, 324, 533, 537, 305, 544, 548, 660, 505,
  /*  105 */ 787, 753, 690, 553, 556, 365, 561, 641, 566, 570, 574, 578, 305, 320, 588, 582, 614, 647, 603, 586, 549,
  /*  126 */ 323, 592, 657, 596, 601, 607, 305, 611, 654, 895, 618, 622, 952, 626, 630, 596, 724, 435, 540, 597, 529,
  /*  147 */ 633, 639, 539, 305, 645, 305, 305, 651, 305, 306, 664, 896, 939, 869, 433, 305, 305, 305, 588, 669, 671,
  /*  168 */ 675, 679, 683, 687, 305, 953, 717, 697, 703, 454, 707, 711, 305, 716, 750, 452, 784, 721, 464, 305, 461,
  /*  189 */ 731, 735, 741, 747, 467, 757, 484, 843, 764, 737, 768, 774, 781, 791, 936, 693, 305, 876, 305, 305, 486,
  /*  210 */ 305, 305, 488, 712, 797, 803, 809, 815, 819, 305, 305, 911, 422, 823, 827, 831, 834, 305, 305, 904, 840,
  /*  231 */ 635, 854, 858, 305, 305, 903, 777, 305, 864, 868, 873, 305, 811, 445, 305, 880, 890, 305, 894, 305, 900,
  /*  252 */ 799, 317, 305, 727, 860, 305, 836, 927, 305, 929, 908, 305, 920, 918, 305, 924, 557, 933, 944, 587, 950,
  /*  273 */ 957, 960, 967, 974, 975, 975, 975, 975, 980, 984, 963, 988, 992, 999, 976, 995, 970, 1003, 1007, 1010,
  /*  293 */ 1017, 1021, 1010, 1013, 1028, 1032, 1036, 1024, 1040, 1307, 1309, 1070, 1072, 1072, 1072, 1072, 1216, 1046,
  /*  311 */ 1054, 1054, 1047, 1042, 1308, 1069, 1072, 1072, 1857, 1072, 1073, 1063, 1420, 1072, 1072, 1072, 1483, 1759,
  /*  329 */ 1054, 1054, 1054, 1125, 1758, 1054, 1054, 1054, 1049, 1054, 1054, 1056, 1108, 1055, 1072, 1496, 1099, 1104,
  /*  347 */ 1054, 1054, 1054, 1053, 1119, 1060, 1103, 1054, 1054, 1054, 1089, 1626, 1138, 1117, 1054, 1054, 1054, 1090,
  /*  365 */ 1072, 1072, 1074, 1064, 1056, 1111, 1054, 1054, 1094, 1138, 1072, 1078, 1054, 1054, 1048, 1054, 1056, 1131,
  /*  383 */ 1113, 1054, 1121, 1629, 1139, 1084, 1131, 1113, 1054, 1467, 1495, 1098, 1129, 1135, 1054, 1144, 1143, 1085,
  /*  401 */ 1054, 1072, 1079, 1054, 1054, 1054, 1054, 1083, 1612, 1532, 1534, 1171, 1173, 1175, 1150, 1148, 1154, 1157,
  /*  419 */ 1160, 1160, 1164, 1072, 1072, 1072, 1281, 1243, 1168, 1072, 1179, 1183, 1072, 1191, 1072, 1279, 1072, 1072,
  /*  437 */ 1504, 1072, 1605, 1188, 1724, 1816, 1243, 1195, 1072, 1072, 1330, 1072, 1265, 1220, 1264, 1072, 1285, 1072,
  /*  455 */ 1072, 1616, 1831, 1190, 1229, 1240, 1072, 1315, 1643, 1072, 1386, 1072, 1235, 1072, 1072, 1072, 1683, 1231,
  /*  473 */ 1221, 1072, 1072, 1072, 1301, 1451, 1072, 1072, 1618, 1509, 1202, 1072, 1197, 1072, 1072, 1696, 1687, 1072,
  /*  491 */ 1072, 1702, 1255, 1867, 1072, 1072, 1072, 1412, 1539, 1557, 1072, 1651, 1251, 1260, 1264, 1072, 1072, 1320,
  /*  509 */ 1451, 1072, 1866, 1204, 1072, 1866, 1555, 1839, 1289, 1262, 1072, 1072, 1442, 1072, 1438, 1442, 1072, 1206,
  /*  527 */ 1290, 1263, 1072, 1072, 1453, 1072, 1507, 1440, 1072, 1205, 1294, 1263, 1072, 1072, 1455, 1072, 1072, 1482,
  /*  545 */ 1298, 1072, 1305, 1313, 1072, 1072, 1072, 1416, 1489, 1072, 1600, 1599, 1072, 1072, 1072, 1444, 1421, 1072,
  /*  563 */ 1072, 1072, 1451, 1773, 1334, 1344, 1348, 1337, 1340, 1352, 1358, 1360, 1360, 1356, 1366, 1364, 1370, 1370,
  /*  581 */ 1373, 1772, 1455, 1824, 1377, 1326, 1410, 1072, 1072, 1072, 1468, 1468, 1432, 1455, 1458, 1072, 1842, 1384,
  /*  599 */ 1072, 1072, 1236, 1479, 1072, 1072, 1459, 1399, 1457, 1452, 1487, 1472, 1074, 1418, 1422, 1072, 1427, 1072,
  /*  617 */ 1381, 1843, 1385, 1072, 1600, 1493, 1072, 1456, 1453, 1500, 1423, 1072, 1470, 1454, 1448, 1857, 1072, 1452,
  /*  635 */ 1072, 1072, 1460, 1763, 1840, 1844, 1072, 1072, 1469, 1072, 1841, 1515, 1385, 1072, 1395, 1481, 1216, 1514,
  /*  653 */ 1519, 1072, 1471, 1823, 1448, 1465, 1426, 1072, 1390, 1300, 1474, 1524, 1072, 1072, 1072, 1619, 1587, 1592,
  /*  671 */ 1072, 1072, 1528, 1783, 1530, 1552, 1538, 1544, 1549, 1561, 1576, 1564, 1563, 1578, 1570, 1568, 1563, 1574,
  /*  689 */ 1582, 1072, 1473, 1264, 1072, 1387, 1072, 1283, 1597, 1604, 1072, 1072, 1540, 1703, 1609, 1072, 1072, 1639,
  /*  707 */ 1835, 1072, 1072, 1623, 1245, 1072, 1072, 1072, 1695, 1586, 1591, 1598, 1072, 1388, 1669, 1425, 1833, 1072,
  /*  725 */ 1494, 1452, 1072, 1460, 1803, 1857, 1388, 1072, 1072, 1196, 1647, 1072, 1072, 1072, 1664, 1388, 1656, 1071,
  /*  743 */ 1072, 1424, 1508, 1201, 1435, 1072, 1072, 1389, 1072, 1604, 1072, 1473, 1313, 1391, 1316, 1593, 1387, 1072,
  /*  761 */ 1540, 1270, 1428, 1660, 1300, 1387, 1235, 1184, 1668, 1072, 1072, 1710, 1210, 1673, 1851, 1679, 1072, 1634,
  /*  779 */ 1072, 1330, 1660, 1072, 1233, 1072, 1638, 1681, 1072, 1475, 1072, 1320, 1388, 1283, 1072, 1072, 1711, 1691,
  /*  797 */ 1700, 1072, 1072, 1072, 1787, 1072, 1707, 1072, 1072, 1072, 1789, 1301, 1858, 1709, 1072, 1072, 1793, 1072,
  /*  815 */ 1715, 1072, 1072, 1716, 1545, 1072, 1723, 1720, 1279, 1632, 1728, 1730, 1402, 1406, 1405, 1405, 1734, 1740,
  /*  833 */ 1738, 1744, 1747, 1072, 1072, 1802, 1856, 1634, 1329, 1756, 1072, 1655, 1681, 1072, 1619, 1510, 1203, 1072,
  /*  851 */ 1072, 1249, 1255, 1273, 1276, 1072, 1323, 1770, 1797, 1072, 1461, 1072, 1857, 1072, 1777, 1764, 1857, 1782,
  /*  869 */ 1072, 1796, 1072, 1072, 1798, 1072, 1787, 1072, 1674, 1065, 1071, 1778, 1765, 1859, 1072, 1710, 1689, 1783,
  /*  887 */ 1072, 1072, 1214, 1796, 1797, 1072, 1787, 1215, 1857, 1072, 1072, 1072, 1523, 1072, 1777, 1872, 1072, 1751,
  /*  905 */ 1794, 1072, 1283, 1856, 1072, 1857, 1072, 1752, 1795, 1072, 1650, 1072, 1266, 1848, 1855, 1072, 1072, 1820,
  /*  923 */ 1828, 1820, 1863, 1871, 1072, 1766, 1072, 1072, 1807, 1811, 1814, 1072, 1072, 1443, 1675, 1065, 1071, 1072,
  /*  941 */ 1072, 1072, 1225, 1411, 1072, 1072, 1072, 1837, 1256, 1411, 1072, 1472, 1072, 1072, 1072, 1586, 1411, 1410,
  /*  959 */ 1410, 10, 18, 34, 130, 1538, 514, 6146, 514, 1026, 8194, 65538, 2, 514, 642, -2147483646, 2, 2, 2, 2, 514,
  /*  980 */ 2, 2, 518, 138, 1034, 82, 146, 642, 8194, 2, 2, 658, 1170, 18, 1666, 65538, 2, 1554, 642, 2, 146, 514,
  /* 1002 */ 65538, 1538, 514, 2, 642, 82066, 82066, 2147385602, -98046, -98046, -98046, -98046, -97534, -98046, -97406,
  /* 1017 */ -97526, -96510, -97534, -98046, -97398, -96382, -97406, -97534, -88278, -97406, -32510, -96502, -97406,
  /* 1030 */ -98046, -96502, -96374, -88310, -96510, -97534, -96358, -88310, -96382, -97406, 2, 8, 2, 2, 32, 32,
  /* 1046 */ 2147385600, 256, 256, 256, -2147483392, 256, 256, 2147393792, 256, 256, 256, 256, 0, 33024, 2147451136,
  /* 1061 */ 256, 256, 8, 32, 1048576, 2097152, 4194304, 234881024, 8192, 65536, 0x80000000, 0, 0, 0, 0, 2, 8, 256,
  /* 1079 */ 33024, 2147352832, 256, 256, 8448, 256, 256, 256, 33024, 256, 256, 8448, 256, 256, 32, 256, 8448, 256,
  /* 1097 */ 2147418368, 131328, 262400, 3670272, 12583168, 16777472, 16777472, 1040187648, 1073742080, 256, 256,
  /* 1108 */ 131328, 262400, 3145984, 12583168, 201326848, 268435712, 536871168, 256, 256, 1006633216, 256, 256, 256,
  /* 1121 */ 288, 288, 2147418368, 256, 0, 33024, 3145984, 12583168, 256, 33024, 4194560, 8388864, 67109120, 134217984,
  /* 1135 */ 134217984, 536871168, 256, 256, 32, 32, 8192, 65536, 256, 33024, 134217984, 256, 256, 134906879, 134922239,
  /* 1150 */ 134906879, 134906879, 137004031, 138052607, 134906879, 420119551, 134906879, 420119551, 420185087,
  /* 1159 */ 134922239, 423265279, 423265279, -1190493185, -1188396033, -1187347457, 423265279, -1187347457, 134922239,
  /* 1168 */ 33816576, 0, 0, 364904448, 364904448, 134906879, 134906879, 134906879, 134906879, 137004031, 134906879, 0,
  /* 1180 */ 127, 896, 163840, 134742016, 0, 0, 0, 32, 0, 137887744, 16256, 0, 0, 0, 127, 422051840, 0, 0, 0, 48, 64,
  /* 1201 */ 65536, 262144, 1048576, 33554432, 0, 0, 0, 12, 48, 0, 15360, 536870912, 0x80000000, 360710144, 0, 0, 0, 64,
  /* 1219 */ 128, 896, 32768, 131072, 524288, 134217728, 0, 2097152, 0, 1572864, 0, 419430400, 0, 65536, 0, 2048,
  /* 1235 */ -1073741824, 0, 0, 0, 251658240, 0, 536870912, 0x80000000, 0, -1610612736, 0, 0, -805306368, 0, 1048576,
  /* 1250 */ 15360, 0, 0, 2, 60, 0, 16777216, 402653184, 0, 65536, 64, 768, 32768, 524288, 134217728, 0, 0, 0, 126, 896,
  /* 1270 */ 0, 14336, 335544320, 0, 0, 475008, 0, 0, 507776, 0, 0, 524288, 0, 0, 32, 0, 0, 240, 512, 60, 64, 256, 512,
  /* 1293 */ 32768, 16, 32, 256, 32768, 8192, 268435456, 4096, 0, 0, 0, 256, 0, 12, 16, 32, 32, 32, 128, 8192, 256,
  /* 1314 */ 134217728, 0, 0, 4, 1024, 4096, 0, 4096, 4096, 0, 0, 999296, 0, 0, 1579008, 0, 0, 2097152, 0, 0, 0, 40960,
  /* 1336 */ 16, 8, 344577, 40976, 40976, 172304, 270532648, 172304, 0, 40960, 0, 24, 8, 268435496, 16, 24, 1048, 1048,
  /* 1354 */ -418899776, -283633472, -279439168, -283633472, -279439168, -275244864, -283633472, -283633472, -283633472,
  /* 1363 */ -283633472, -283633448, -283633448, -283633472, -283633448, -283633472, -283633448, -283633448, -283633448,
  /* 1372 */ -283592496, -283592496, -283633448, -283592496, -271050552, 344576, 16, 0, 172288, 0, 192, 530432,
  /* 1384 */ 117440512, -536870912, 0, 0, 0, 2048, 0, 0, 0, 4096, 0, 1579008, 251658240, 0, 5773312, 0, 16, 1619968, 0,
  /* 1403 */ 0, 5455775, 5717919, 5717919, 5717919, 5717919, 5750687, 0, 8, 0, 0, 0, 16384, 2, 8, 32, 2097152, 4194304,
  /* 1421 */ 8388608, 134217728, 268435456, 0, 0, 0, 1024, 0, 0, 0, 60, 0, 8192, 32768, 0, 0, 8388608, 4096, 8192, 0,
  /* 1441 */ 268435456, 6144, 0, 0, 0, 3, 8, 1, 512, 16384, 65536, 0, 0, 0, 16, 0, 0, 0, 24, 0, 0, 0, 31, 0, 262144, 0,
  /* 1467 */ 256, 0, 0, 0, 4, 0, 0, 0, 8, 16, 256, 134217728, 0, 4194304, 260046848, 0, 0, 0, 6144, 8192, 14336, 32768,
  /* 1489 */ 0, 0, 8, 134217728, 4194304, 125829120, 0, 0, 0, 33024, 131328, 2, 32, 2097152, 8388608, 0, 32, 2097152,
  /* 1507 */ 268435456, 2048, 4096, 8192, 16384, 65536, 262144, 6144, 524288, 16777216, 33554432, 67108864, 67108864,
  /* 1520 */ 536870912, 1073741824, 0x80000000, 0, 524288, 536870912, 1073741824, 0x80000000, 2048, 16392, 8392704, 0,
  /* 1532 */ 0, 1073741824, -1325400064, -1325400064, 33832960, -1325400064, 1073750016, 0, 0, 0, 16777216, 268435456,
  /* 1544 */ 1082134528, 0, 0, 0, 67108864, 0, 0, 536870912, 0, 0, 8409088, 0, 0, 268435456, 0, 15360, 1073741824,
  /* 1561 */ 1073742064, 1073742576, -1619033853, -1619033853, -1619033853, -1619033853, -1619016445, -1619033853,
  /* 1569 */ -1619033853, -1610624765, -1619033853, -1610624765, -1619033853, -1619033853, -1619031805, -1619033853,
  /* 1577 */ -1619033853, -1619017469, -1619033853, -1610628861, -1610641149, -1619033853, -1619031805, -1619033853,
  /* 1585 */ -536882941, 4, 8, 1024, 4096, 8192, 8192, 16384, 8388608, 536870912, 1073741824, 0, 0, 1073741824, 0, 0, 0,
  /* 1602 */ 134217728, 0, 8404992, 0, 0, 0, 136839168, 0, 240, 752, 0, 0, 285212672, 285212672, 0, 260030464, 0, 0,
  /* 1620 */ 1024, 2048, 4096, 0, 2048, 0, 256, 288, 2147418368, 256, 2, 32, 32, 16448, 0, 0, 16448, 0, 0, 3, 256,
  /* 1641 */ 260014080, -1879048192, 4096, 8388608, 536870912, 1073741824, 64, 128, 512, 0, 0, 335544320, 0, 0, 0, 3,
  /* 1657 */ 8355840, 251658240, 268435456, 0, 1024, 0, 8388608, 4, 1024, 8388608, 1073741824, 64, 0, 0, 0, 260030464,
  /* 1673 */ 0, 3, 32768, 65536, 262144, 524288, 4194304, 251658240, 268435456, 0x80000000, 0, 0, 14336, 402653184,
  /* 1687 */ 234881024, 0x80000000, 0, 0, 15360, -1610612736, 0, 285212672, 0, 1, 2, 32768, 1048576, 1048576, 234881024,
  /* 1702 */ 0, 0, 15360, 0, 1073741824, 0, 32768, 201326592, 0, 0, 0, 285212672, 0, 0, 32768, 67108864, 134217728, 0,
  /* 1720 */ 67108864, 0, 67108864, 67108864, 0, 0, 0, 419954688, 524288, 0, 2097152, 2097152, 540736, 2097152, 5750687,
  /* 1735 */ 5717919, 5750687, 6242207, 5717919, 5717919, 6242207, 5717919, 6274975, 5717919, 5717919, 5717919, 7815071,
  /* 1747 */ 7815071, 5717919, 7815071, 6274975, 0, 32, 64, 16384, 32768, 0, 540736, 0, 0, 33024, 2147352832, 256,
  /* 1763 */ 212864, 1048576, 4194304, 0, 0, 262144, 0, 0, 1032064, 0, 0, 40960, 0, 8, 0, 31, 16256, 196608, 1048576,
  /* 1782 */ 229376, 0, 0, 0, 1073741824, 31, 0, 0, 0, 81920, 0, 64, 32768, 262144, 524288, 0, 0, 0, 6291456, 0, 31,
  /* 1803 */ 16256, 131072, 1048576, 4194304, 31, 128, 256, 1536, 2048, 12288, 131072, 1048576, 0, 0, 0, 229376,
  /* 1819 */ 423100416, 0, 3, 12, 16, 0, 24, 0, 1, 128, 256, 512, 1024, 0, 0, 268419072, 4096, 268402688, 0, 0, 14336,
  /* 1840 */ 0, 0, 0, 192, 6144, 524288, 117440512, -536870912, 2048, 4096, 8192, 131072, 262144, 1572864, 2097152,
  /* 1855 */ 1048576, 4194304, 262144, 0, 0, 0, 32768, 0, 128, 256, 1024, 2048, 4096, 8192, 65536, 33554432, 8192,
  /* 1872 */ 1048576, 4194304, 0, 262144
];

WAT.TOKEN =
[
  "%ERROR",
  "whitespace",
  "eof",
  "string",
  "nat",
  "float",
  "sign",
  "identifier",
  "dottedName",
  "'('",
  "')'",
  "'_s'",
  "'_u'",
  "'align='",
  "'any'",
  "'any.convert_extern'",
  "'array'",
  "'array.copy'",
  "'array.fill'",
  "'array.get'",
  "'array.get_s'",
  "'array.get_u'",
  "'array.init_data'",
  "'array.init_elem'",
  "'array.len'",
  "'array.new'",
  "'array.new_data'",
  "'array.new_default'",
  "'array.new_elem'",
  "'array.new_fixed'",
  "'array.set'",
  "'block'",
  "'br'",
  "'br_if'",
  "'br_on_cast'",
  "'br_on_cast_fail'",
  "'br_on_non_null'",
  "'br_on_null'",
  "'br_table'",
  "'call'",
  "'call_indirect'",
  "'call_ref'",
  "'catch'",
  "'catch_all'",
  "'catch_all_ref'",
  "'catch_ref'",
  "'data'",
  "'data.drop'",
  "'declare'",
  "'drop'",
  "'elem'",
  "'elem.drop'",
  "'else'",
  "'end'",
  "'eq'",
  "'exn'",
  "'exnref'",
  "'export'",
  "'extern'",
  "'extern.convert_any'",
  "'externref'",
  "'f32'",
  "'f32x4'",
  "'f64'",
  "'f64x2'",
  "'field'",
  "'final'",
  "'func'",
  "'funcref'",
  "'global'",
  "'global.get'",
  "'global.set'",
  "'i16'",
  "'i16x8'",
  "'i31'",
  "'i31.get_s'",
  "'i31.get_u'",
  "'i32'",
  "'i32x4'",
  "'i64'",
  "'i64x2'",
  "'i8'",
  "'i8x16'",
  "'i8x16.shuffle'",
  "'if'",
  "'import'",
  "'item'",
  "'local'",
  "'local.get'",
  "'local.set'",
  "'local.tee'",
  "'loop'",
  "'memory'",
  "'memory.copy'",
  "'memory.fill'",
  "'memory.grow'",
  "'memory.init'",
  "'memory.size'",
  "'module'",
  "'mut'",
  "'noexn'",
  "'noextern'",
  "'nofunc'",
  "'none'",
  "'nop'",
  "'null'",
  "'offset'",
  "'offset='",
  "'param'",
  "'rec'",
  "'ref'",
  "'ref.as_non_null'",
  "'ref.cast'",
  "'ref.eq'",
  "'ref.func'",
  "'ref.i31'",
  "'ref.is_null'",
  "'ref.null'",
  "'ref.test'",
  "'result'",
  "'return'",
  "'return_call'",
  "'return_call_indirect'",
  "'return_call_ref'",
  "'select'",
  "'start'",
  "'struct'",
  "'struct.get'",
  "'struct.get_s'",
  "'struct.get_u'",
  "'struct.new'",
  "'struct.new_default'",
  "'struct.set'",
  "'sub'",
  "'table'",
  "'table.copy'",
  "'table.fill'",
  "'table.get'",
  "'table.grow'",
  "'table.init'",
  "'table.set'",
  "'table.size'",
  "'tag'",
  "'then'",
  "'throw'",
  "'throw_ref'",
  "'try_table'",
  "'type'",
  "'unreachable'",
  "'v128'",
  "'v128.const'"
];

// End

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WAT;
}
