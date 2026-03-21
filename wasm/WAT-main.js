// This file was generated on Sat Mar 21, 2026 19:39 (UTC-03) by REx v6.1 which is Copyright (c) 1979-2025 by Gunther Rademacher <grd@gmx.net>
// REx command line: WAT.ebnf -backtrack -javascript -tree -main

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
    lookahead1W(43);                // whitespace | eof | '('
    whitespace();
    parse_watBody();
    eventHandler.endNonterminal("wat", e0);
  };

  this.parse_simdConst = function()
  {
    eventHandler.startNonterminal("simdConst", e0);
    lookahead1W(73);                // whitespace | 'f32x4' | 'f64x2' | 'i16x8' | 'i32x4' | 'i64x2' | 'i8x16'
    switch (l1)
    {
    case 80:                        // 'i8x16'
      consume(80);                  // 'i8x16'
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 71:                        // 'i16x8'
      consume(71);                  // 'i16x8'
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 76:                        // 'i32x4'
      consume(76);                  // 'i32x4'
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 78:                        // 'i64x2'
      consume(78);                  // 'i64x2'
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      lookahead1W(46);              // whitespace | nat | sign
      whitespace();
      parse_signedNat();
      break;
    case 61:                        // 'f32x4'
      consume(61);                  // 'f32x4'
      lookahead1W(3);               // whitespace | float
      consume(6);                   // float
      lookahead1W(3);               // whitespace | float
      consume(6);                   // float
      lookahead1W(3);               // whitespace | float
      consume(6);                   // float
      lookahead1W(3);               // whitespace | float
      consume(6);                   // float
      break;
    default:
      consume(63);                  // 'f64x2'
      lookahead1W(3);               // whitespace | float
      consume(6);                   // float
      lookahead1W(3);               // whitespace | float
      consume(6);                   // float
    }
    eventHandler.endNonterminal("simdConst", e0);
  };

  this.parse_nt = function()
  {
    eventHandler.startNonterminal("nt", e0);
    lookahead1W(67);                // whitespace | 'f32' | 'f64' | 'i32' | 'i64'
    switch (l1)
    {
    case 75:                        // 'i32'
      consume(75);                  // 'i32'
      break;
    case 77:                        // 'i64'
      consume(77);                  // 'i64'
      break;
    case 60:                        // 'f32'
      consume(60);                  // 'f32'
      break;
    default:
      consume(62);                  // 'f64'
    }
    eventHandler.endNonterminal("nt", e0);
  };

  this.parse_sz = function()
  {
    eventHandler.startNonterminal("sz", e0);
    lookahead1W(2);                 // whitespace | nat
    consume(5);                     // nat
    eventHandler.endNonterminal("sz", e0);
  };

  this.parse_sx = function()
  {
    eventHandler.startNonterminal("sx", e0);
    lookahead1W(53);                // whitespace | '_s' | '_u'
    switch (l1)
    {
    case 12:                        // '_s'
      consume(12);                  // '_s'
      break;
    default:
      consume(13);                  // '_u'
    }
    eventHandler.endNonterminal("sx", e0);
  };

  this.parse_laneidx = function()
  {
    eventHandler.startNonterminal("laneidx", e0);
    lookahead1W(2);                 // whitespace | nat
    consume(5);                     // nat
    eventHandler.endNonterminal("laneidx", e0);
  };

  function parse_watBody()
  {
    eventHandler.startNonterminal("watBody", e0);
    switch (l1)
    {
    case 10:                        // '('
      parse_module();
      break;
    default:
      consume(3);                   // eof
    }
    eventHandler.endNonterminal("watBody", e0);
  }

  function parse_module()
  {
    eventHandler.startNonterminal("module", e0);
    consume(10);                    // '('
    lookahead1W(28);                // whitespace | 'module'
    consume(95);                    // 'module'
    lookahead1W(60);                // whitespace | '$' | '(' | ')'
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    for (;;)
    {
      lookahead1W(50);              // whitespace | '(' | ')'
      if (l1 != 10)                 // '('
      {
        break;
      }
      whitespace();
      parse_moduleField();
    }
    consume(11);                    // ')'
    eventHandler.endNonterminal("module", e0);
  }

  function parse_moduleField()
  {
    eventHandler.startNonterminal("moduleField", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(78);              // whitespace | 'data' | 'elem' | 'export' | 'func' | 'global' | 'import' |
                                    // 'memory' | 'start' | 'table' | 'tag' | 'type'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 36874:                     // '(' 'type'
      parse_typeDef();
      break;
    case 21002:                     // '(' 'import'
      parse_importDef();
      break;
    case 35594:                     // '(' 'tag'
      parse_tagDef();
      break;
    case 17162:                     // '(' 'global'
      parse_globalDef();
      break;
    case 22794:                     // '(' 'memory'
      parse_memDef();
      break;
    case 33546:                     // '(' 'table'
      parse_tableDef();
      break;
    case 16906:                     // '(' 'func'
      parse_funcDef();
      break;
    case 12042:                     // '(' 'data'
      parse_dataDef();
      break;
    case 13066:                     // '(' 'elem'
      parse_elemDef();
      break;
    case 31242:                     // '(' 'start'
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
    consume(10);                    // '('
    lookahead1W(42);                // whitespace | 'type'
    consume(144);                   // 'type'
    lookahead1W(48);                // whitespace | '$' | '('
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    lookahead1W(5);                 // whitespace | '('
    whitespace();
    parse_rectype();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("typeDef", e0);
  }

  function parse_rectype()
  {
    eventHandler.startNonterminal("rectype", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(69);              // whitespace | 'array' | 'func' | 'rec' | 'struct' | 'sub'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 27146:                     // '(' 'rec'
      consume(10);                  // '('
      lookahead1W(32);              // whitespace | 'rec'
      consume(106);                 // 'rec'
      for (;;)
      {
        lookahead1W(5);             // whitespace | '('
        whitespace();
        parse_subtype();
        lookahead1W(50);            // whitespace | '(' | ')'
        if (l1 != 10)               // '('
        {
          break;
        }
      }
      consume(11);                  // ')'
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
    case 10:                        // '('
      lookahead2W(65);              // whitespace | 'array' | 'func' | 'struct' | 'sub'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 33290:                     // '(' 'sub'
      consume(10);                  // '('
      lookahead1W(37);              // whitespace | 'sub'
      consume(130);                 // 'sub'
      lookahead1W(51);              // whitespace | '(' | 'final'
      if (l1 == 65)                 // 'final'
      {
        whitespace();
        parse_final();
      }
      for (;;)
      {
        lookahead1W(5);             // whitespace | '('
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(72);          // whitespace | 'array' | 'func' | 'param' | 'result' | 'struct' | 'type'
          break;
        default:
          lk = l1;
        }
        if (lk != 26890             // '(' 'param'
         && lk != 29706             // '(' 'result'
         && lk != 36874)            // '(' 'type'
        {
          break;
        }
        whitespace();
        parse_supertype();
      }
      whitespace();
      parse_comptype();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    default:
      parse_comptype();
    }
    eventHandler.endNonterminal("subtype", e0);
  }

  function parse_final()
  {
    eventHandler.startNonterminal("final", e0);
    consume(65);                    // 'final'
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
    case 10:                        // '('
      lookahead2W(62);              // whitespace | 'array' | 'func' | 'struct'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 16906:                     // '(' 'func'
      parse_funcType();
      break;
    case 31498:                     // '(' 'struct'
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
    consume(10);                    // '('
    lookahead1W(20);                // whitespace | 'func'
    consume(66);                    // 'func'
    for (;;)
    {
      lookahead1W(50);              // whitespace | '(' | ')'
      switch (l1)
      {
      case 10:                      // '('
        lookahead2W(56);            // whitespace | 'param' | 'result'
        break;
      default:
        lk = l1;
      }
      if (lk != 26890)              // '(' 'param'
      {
        break;
      }
      whitespace();
      parse_paramDecl();
    }
    for (;;)
    {
      lookahead1W(50);              // whitespace | '(' | ')'
      if (l1 != 10)                 // '('
      {
        break;
      }
      whitespace();
      parse_resultDecl();
    }
    consume(11);                    // ')'
    eventHandler.endNonterminal("funcType", e0);
  }

  function parse_structType()
  {
    eventHandler.startNonterminal("structType", e0);
    consume(10);                    // '('
    lookahead1W(36);                // whitespace | 'struct'
    consume(123);                   // 'struct'
    for (;;)
    {
      lookahead1W(50);              // whitespace | '(' | ')'
      if (l1 != 10)                 // '('
      {
        break;
      }
      whitespace();
      parse_fieldDecl();
    }
    consume(11);                    // ')'
    eventHandler.endNonterminal("structType", e0);
  }

  function parse_arrayType()
  {
    eventHandler.startNonterminal("arrayType", e0);
    consume(10);                    // '('
    lookahead1W(8);                 // whitespace | 'array'
    consume(17);                    // 'array'
    lookahead1W(5);                 // whitespace | '('
    whitespace();
    parse_fieldDecl();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("arrayType", e0);
  }

  function parse_fieldDecl()
  {
    eventHandler.startNonterminal("fieldDecl", e0);
    consume(10);                    // '('
    lookahead1W(19);                // whitespace | 'field'
    consume(64);                    // 'field'
    lookahead1W(77);                // whitespace | '$' | '(' | 'f32' | 'f64' | 'i16' | 'i32' | 'i64' | 'i8' | 'v128'
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    lookahead1W(76);                // whitespace | '(' | 'f32' | 'f64' | 'i16' | 'i32' | 'i64' | 'i8' | 'v128'
    whitespace();
    parse_storagetype();
    lookahead1W(50);                // whitespace | '(' | ')'
    if (l1 == 10)                   // '('
    {
      whitespace();
      parse_mutField();
    }
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("fieldDecl", e0);
  }

  function parse_mutField()
  {
    eventHandler.startNonterminal("mutField", e0);
    consume(10);                    // '('
    lookahead1W(29);                // whitespace | 'mut'
    consume(96);                    // 'mut'
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("mutField", e0);
  }

  function parse_storagetype()
  {
    eventHandler.startNonterminal("storagetype", e0);
    switch (l1)
    {
    case 70:                        // 'i16'
    case 79:                        // 'i8'
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
    case 79:                        // 'i8'
      consume(79);                  // 'i8'
      break;
    default:
      consume(70);                  // 'i16'
    }
    eventHandler.endNonterminal("packType", e0);
  }

  function parse_tagDef()
  {
    eventHandler.startNonterminal("tagDef", e0);
    consume(10);                    // '('
    lookahead1W(39);                // whitespace | 'tag'
    consume(139);                   // 'tag'
    lookahead1W(48);                // whitespace | '$' | '('
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    lookahead1W(5);                 // whitespace | '('
    whitespace();
    parse_tagType();
    consume(11);                    // ')'
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
    consume(10);                    // '('
    lookahead1W(21);                // whitespace | 'global'
    consume(67);                    // 'global'
    lookahead1W(74);                // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    lookahead1W(71);                // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
    whitespace();
    parse_globalType();
    lookahead1W(88);                // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
    whitespace();
    parse_expr();
    consume(11);                    // ')'
    eventHandler.endNonterminal("globalDef", e0);
  }

  function parse_globalType()
  {
    eventHandler.startNonterminal("globalType", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(55);              // whitespace | 'mut' | 'ref'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 24586:                     // '(' 'mut'
      consume(10);                  // '('
      lookahead1W(29);              // whitespace | 'mut'
      consume(96);                  // 'mut'
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    default:
      parse_valueType();
    }
    eventHandler.endNonterminal("globalType", e0);
  }

  function parse_memDef()
  {
    eventHandler.startNonterminal("memDef", e0);
    consume(10);                    // '('
    lookahead1W(27);                // whitespace | 'memory'
    consume(89);                    // 'memory'
    lookahead1W(64);                // whitespace | nat | '$' | 'i32' | 'i64'
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    lookahead1W(59);                // whitespace | nat | 'i32' | 'i64'
    whitespace();
    parse_limits();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("memDef", e0);
  }

  function parse_tableDef()
  {
    eventHandler.startNonterminal("tableDef", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(38);              // whitespace | 'table'
      switch (lk)
      {
      case 33546:                   // '(' 'table'
        lookahead3W(64);            // whitespace | nat | '$' | 'i32' | 'i64'
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
        consumeT(10);               // '('
        lookahead1W(38);            // whitespace | 'table'
        consumeT(131);              // 'table'
        lookahead1W(64);            // whitespace | nat | '$' | 'i32' | 'i64'
        if (l1 == 9)                // '$'
        {
          try_id();
        }
        lookahead1W(59);            // whitespace | nat | 'i32' | 'i64'
        try_limits();
        lookahead1W(5);             // whitespace | '('
        try_reftype();
        lookahead1W(6);             // whitespace | ')'
        consumeT(11);               // ')'
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
      consume(10);                  // '('
      lookahead1W(38);              // whitespace | 'table'
      consume(131);                 // 'table'
      lookahead1W(64);              // whitespace | nat | '$' | 'i32' | 'i64'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(59);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(38);              // whitespace | 'table'
      consume(131);                 // 'table'
      lookahead1W(64);              // whitespace | nat | '$' | 'i32' | 'i64'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(59);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      lookahead1W(88);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      whitespace();
      parse_tableExpr();
      consume(11);                  // ')'
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
    consume(10);                    // '('
    lookahead1W(20);                // whitespace | 'func'
    consume(66);                    // 'func'
    lookahead1W(93);                // whitespace | dottedName | '$' | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    lookahead1W(88);                // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(101);             // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'type' | 'unreachable'
      break;
    default:
      lk = l1;
    }
    if (lk == 26890                 // '(' 'param'
     || lk == 29706                 // '(' 'result'
     || lk == 36874)                // '(' 'type'
    {
      whitespace();
      parse_typeuse();
    }
    for (;;)
    {
      lookahead1W(88);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      switch (l1)
      {
      case 10:                      // '('
        lookahead2W(84);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        break;
      default:
        lk = l1;
      }
      if (lk != 21514)              // '(' 'local'
      {
        break;
      }
      whitespace();
      parse_localDecl();
    }
    whitespace();
    parse_expr();
    consume(11);                    // ')'
    eventHandler.endNonterminal("funcDef", e0);
  }

  function parse_localDecl()
  {
    eventHandler.startNonterminal("localDecl", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(25);              // whitespace | 'local'
      switch (lk)
      {
      case 21514:                   // '(' 'local'
        lookahead3W(74);            // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 611338)               // '(' 'local' '$'
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
          consumeT(10);             // '('
          lookahead1W(25);          // whitespace | 'local'
          consumeT(84);             // 'local'
          lookahead1W(74);          // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
          if (l1 == 9)              // '$'
          {
            try_id();
          }
          lookahead1W(71);          // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
          try_valueType();
          lookahead1W(6);           // whitespace | ')'
          consumeT(11);             // ')'
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
      consume(10);                  // '('
      lookahead1W(25);              // whitespace | 'local'
      consume(84);                  // 'local'
      for (;;)
      {
        lookahead1W(71);            // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
        whitespace();
        parse_valueType();
        lookahead1W(75);            // whitespace | '(' | ')' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
        if (l1 == 11)               // ')'
        {
          break;
        }
      }
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(25);              // whitespace | 'local'
      consume(84);                  // 'local'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("localDecl", e0);
  }

  function parse_importDef()
  {
    eventHandler.startNonterminal("importDef", e0);
    consume(10);                    // '('
    lookahead1W(23);                // whitespace | 'import'
    consume(82);                    // 'import'
    lookahead1W(1);                 // whitespace | string
    consume(4);                     // string
    lookahead1W(1);                 // whitespace | string
    consume(4);                     // string
    lookahead1W(5);                 // whitespace | '('
    whitespace();
    parse_importDesc();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("importDef", e0);
  }

  function parse_importDesc()
  {
    eventHandler.startNonterminal("importDesc", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(70);              // whitespace | 'func' | 'global' | 'memory' | 'table' | 'tag'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 16906:                     // '(' 'func'
      consume(10);                  // '('
      lookahead1W(20);              // whitespace | 'func'
      consume(66);                  // 'func'
      lookahead1W(60);              // whitespace | '$' | '(' | ')'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(50);              // whitespace | '(' | ')'
      if (l1 == 10)                 // '('
      {
        whitespace();
        parse_typeuse();
      }
      consume(11);                  // ')'
      break;
    case 33546:                     // '(' 'table'
      consume(10);                  // '('
      lookahead1W(38);              // whitespace | 'table'
      consume(131);                 // 'table'
      lookahead1W(64);              // whitespace | nat | '$' | 'i32' | 'i64'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(59);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 22794:                     // '(' 'memory'
      consume(10);                  // '('
      lookahead1W(27);              // whitespace | 'memory'
      consume(89);                  // 'memory'
      lookahead1W(64);              // whitespace | nat | '$' | 'i32' | 'i64'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(59);              // whitespace | nat | 'i32' | 'i64'
      whitespace();
      parse_limits();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 17162:                     // '(' 'global'
      consume(10);                  // '('
      lookahead1W(21);              // whitespace | 'global'
      consume(67);                  // 'global'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_globalType();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(39);              // whitespace | 'tag'
      consume(139);                 // 'tag'
      lookahead1W(48);              // whitespace | '$' | '('
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_tagType();
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("importDesc", e0);
  }

  function parse_exportDef()
  {
    eventHandler.startNonterminal("exportDef", e0);
    consume(10);                    // '('
    lookahead1W(18);                // whitespace | 'export'
    consume(57);                    // 'export'
    lookahead1W(1);                 // whitespace | string
    consume(4);                     // string
    lookahead1W(5);                 // whitespace | '('
    whitespace();
    parse_exportDesc();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("exportDef", e0);
  }

  function parse_exportDesc()
  {
    eventHandler.startNonterminal("exportDesc", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(70);              // whitespace | 'func' | 'global' | 'memory' | 'table' | 'tag'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 16906:                     // '(' 'func'
      consume(10);                  // '('
      lookahead1W(20);              // whitespace | 'func'
      consume(66);                  // 'func'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 33546:                     // '(' 'table'
      consume(10);                  // '('
      lookahead1W(38);              // whitespace | 'table'
      consume(131);                 // 'table'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 22794:                     // '(' 'memory'
      consume(10);                  // '('
      lookahead1W(27);              // whitespace | 'memory'
      consume(89);                  // 'memory'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 17162:                     // '(' 'global'
      consume(10);                  // '('
      lookahead1W(21);              // whitespace | 'global'
      consume(67);                  // 'global'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(39);              // whitespace | 'tag'
      consume(139);                 // 'tag'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("exportDesc", e0);
  }

  function parse_startDef()
  {
    eventHandler.startNonterminal("startDef", e0);
    consume(10);                    // '('
    lookahead1W(35);                // whitespace | 'start'
    consume(122);                   // 'start'
    lookahead1W(47);                // whitespace | nat | '$'
    whitespace();
    parse_index();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("startDef", e0);
  }

  function parse_dataDef()
  {
    eventHandler.startNonterminal("dataDef", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(14);              // whitespace | 'data'
      switch (lk)
      {
      case 12042:                   // '(' 'data'
        lookahead3W(92);            // whitespace | string | dottedName | '$' | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 274186                // '(' 'data' string
     || lk == 601866                // '(' 'data' '$'
     || lk == 667402)               // '(' 'data' '('
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
          consumeT(10);             // '('
          lookahead1W(14);          // whitespace | 'data'
          consumeT(47);             // 'data'
          lookahead1W(44);          // whitespace | string | '$'
          if (l1 == 9)              // '$'
          {
            try_id();
          }
          lookahead1W(1);           // whitespace | string
          try_datastring();
          consumeT(11);             // ')'
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
            consumeT(10);           // '('
            lookahead1W(14);        // whitespace | 'data'
            consumeT(47);           // 'data'
            lookahead1W(48);        // whitespace | '$' | '('
            if (l1 == 9)            // '$'
            {
              try_id();
            }
            lookahead1W(5);         // whitespace | '('
            try_memUse();
            lookahead1W(87);        // whitespace | string | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
            try_offset();
            lookahead1W(1);         // whitespace | string
            try_datastring();
            consumeT(11);           // ')'
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
      consume(10);                  // '('
      lookahead1W(14);              // whitespace | 'data'
      consume(47);                  // 'data'
      lookahead1W(44);              // whitespace | string | '$'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(1);               // whitespace | string
      whitespace();
      parse_datastring();
      consume(11);                  // ')'
      break;
    case -2:
      consume(10);                  // '('
      lookahead1W(14);              // whitespace | 'data'
      consume(47);                  // 'data'
      lookahead1W(48);              // whitespace | '$' | '('
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_memUse();
      lookahead1W(87);              // whitespace | string | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      whitespace();
      parse_offset();
      lookahead1W(1);               // whitespace | string
      whitespace();
      parse_datastring();
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(14);              // whitespace | 'data'
      consume(47);                  // 'data'
      lookahead1W(92);              // whitespace | string | dottedName | '$' | '(' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'extern.convert_any' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(87);              // whitespace | string | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      whitespace();
      parse_offset();
      lookahead1W(1);               // whitespace | string
      whitespace();
      parse_datastring();
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("dataDef", e0);
  }

  function parse_datastring()
  {
    eventHandler.startNonterminal("datastring", e0);
    for (;;)
    {
      consume(4);                   // string
      lookahead1W(45);              // whitespace | string | ')'
      if (l1 != 4)                  // string
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
      consumeT(4);                  // string
      lookahead1W(45);              // whitespace | string | ')'
      if (l1 != 4)                  // string
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
    case 10:                        // '('
      lookahead2W(16);              // whitespace | 'elem'
      switch (lk)
      {
      case 13066:                   // '(' 'elem'
        lookahead3W(98);            // whitespace | dottedName | '$' | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'declare' | 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 602890                // '(' 'elem' '$'
     || lk == 668426                // '(' 'elem' '('
     || lk == 4338442)              // '(' 'elem' 'func'
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
          consumeT(10);             // '('
          lookahead1W(16);          // whitespace | 'elem'
          consumeT(51);             // 'elem'
          lookahead1W(61);          // whitespace | '$' | '(' | 'func'
          if (l1 == 9)              // '$'
          {
            try_id();
          }
          lookahead1W(52);          // whitespace | '(' | 'func'
          try_elemList();
          consumeT(11);             // ')'
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
            consumeT(10);           // '('
            lookahead1W(16);        // whitespace | 'elem'
            consumeT(51);           // 'elem'
            lookahead1W(48);        // whitespace | '$' | '('
            if (l1 == 9)            // '$'
            {
              try_id();
            }
            lookahead1W(5);         // whitespace | '('
            try_tableUse();
            lookahead1W(90);        // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
            try_offset();
            lookahead1W(52);        // whitespace | '(' | 'func'
            try_elemList();
            consumeT(11);           // ')'
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
              consumeT(10);         // '('
              lookahead1W(16);      // whitespace | 'elem'
              consumeT(51);         // 'elem'
              lookahead1W(95);      // whitespace | dottedName | '$' | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
              if (l1 == 9)          // '$'
              {
                try_id();
              }
              lookahead1W(90);      // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
              try_offset();
              lookahead1W(52);      // whitespace | '(' | 'func'
              try_elemList();
              consumeT(11);         // ')'
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
      consume(10);                  // '('
      lookahead1W(16);              // whitespace | 'elem'
      consume(51);                  // 'elem'
      lookahead1W(61);              // whitespace | '$' | '(' | 'func'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(52);              // whitespace | '(' | 'func'
      whitespace();
      parse_elemList();
      consume(11);                  // ')'
      break;
    case -2:
      consume(10);                  // '('
      lookahead1W(16);              // whitespace | 'elem'
      consume(51);                  // 'elem'
      lookahead1W(48);              // whitespace | '$' | '('
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_tableUse();
      lookahead1W(90);              // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      whitespace();
      parse_offset();
      lookahead1W(52);              // whitespace | '(' | 'func'
      whitespace();
      parse_elemList();
      consume(11);                  // ')'
      break;
    case -4:
    case 3224330:                   // '(' 'elem' 'declare'
      consume(10);                  // '('
      lookahead1W(16);              // whitespace | 'elem'
      consume(51);                  // 'elem'
      lookahead1W(49);              // whitespace | '$' | 'declare'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(15);              // whitespace | 'declare'
      consume(49);                  // 'declare'
      lookahead1W(52);              // whitespace | '(' | 'func'
      whitespace();
      parse_elemList();
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(16);              // whitespace | 'elem'
      consume(51);                  // 'elem'
      lookahead1W(95);              // whitespace | dottedName | '$' | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      lookahead1W(90);              // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      whitespace();
      parse_offset();
      lookahead1W(52);              // whitespace | '(' | 'func'
      whitespace();
      parse_elemList();
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("elemDef", e0);
  }

  function parse_elemList()
  {
    eventHandler.startNonterminal("elemList", e0);
    switch (l1)
    {
    case 10:                        // '('
      parse_reftype();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        whitespace();
        parse_elemExpr();
      }
      break;
    default:
      consume(66);                  // 'func'
      for (;;)
      {
        lookahead1W(57);            // whitespace | nat | '$' | ')'
        if (l1 == 11)               // ')'
        {
          break;
        }
        whitespace();
        parse_funcidx();
      }
    }
    eventHandler.endNonterminal("elemList", e0);
  }

  function try_elemList()
  {
    switch (l1)
    {
    case 10:                        // '('
      try_reftype();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        try_elemExpr();
      }
      break;
    default:
      consumeT(66);                 // 'func'
      for (;;)
      {
        lookahead1W(57);            // whitespace | nat | '$' | ')'
        if (l1 == 11)               // ')'
        {
          break;
        }
        try_funcidx();
      }
    }
  }

  function parse_elemExpr()
  {
    eventHandler.startNonterminal("elemExpr", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(83);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 21258:                     // '(' 'item'
      consume(10);                  // '('
      lookahead1W(24);              // whitespace | 'item'
      consume(83);                  // 'item'
      lookahead1W(88);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      whitespace();
      parse_expr();
      consume(11);                  // ')'
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
    case 10:                        // '('
      lookahead2W(83);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 21258:                     // '(' 'item'
      consumeT(10);                 // '('
      lookahead1W(24);              // whitespace | 'item'
      consumeT(83);                 // 'item'
      lookahead1W(88);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      try_expr();
      consumeT(11);                 // ')'
      break;
    default:
      try_instr();
    }
  }

  function parse_memUse()
  {
    eventHandler.startNonterminal("memUse", e0);
    consume(10);                    // '('
    lookahead1W(27);                // whitespace | 'memory'
    consume(89);                    // 'memory'
    lookahead1W(47);                // whitespace | nat | '$'
    whitespace();
    parse_memidx();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("memUse", e0);
  }

  function try_memUse()
  {
    consumeT(10);                   // '('
    lookahead1W(27);                // whitespace | 'memory'
    consumeT(89);                   // 'memory'
    lookahead1W(47);                // whitespace | nat | '$'
    try_memidx();
    lookahead1W(6);                 // whitespace | ')'
    consumeT(11);                   // ')'
  }

  function parse_tableUse()
  {
    eventHandler.startNonterminal("tableUse", e0);
    consume(10);                    // '('
    lookahead1W(38);                // whitespace | 'table'
    consume(131);                   // 'table'
    lookahead1W(47);                // whitespace | nat | '$'
    whitespace();
    parse_tableidx();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("tableUse", e0);
  }

  function try_tableUse()
  {
    consumeT(10);                   // '('
    lookahead1W(38);                // whitespace | 'table'
    consumeT(131);                  // 'table'
    lookahead1W(47);                // whitespace | nat | '$'
    try_tableidx();
    lookahead1W(6);                 // whitespace | ')'
    consumeT(11);                   // ')'
  }

  function parse_offset()
  {
    eventHandler.startNonterminal("offset", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(91);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'offset' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 26378:                     // '(' 'offset'
      consume(10);                  // '('
      lookahead1W(30);              // whitespace | 'offset'
      consume(103);                 // 'offset'
      lookahead1W(88);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      whitespace();
      parse_expr();
      consume(11);                  // ')'
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
    case 10:                        // '('
      lookahead2W(91);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'offset' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 26378:                     // '(' 'offset'
      consumeT(10);                 // '('
      lookahead1W(30);              // whitespace | 'offset'
      consumeT(103);                // 'offset'
      lookahead1W(88);              // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      try_expr();
      consumeT(11);                 // ')'
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
    case 10:                        // '('
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
    case 10:                        // '('
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
    case 10:                        // '('
      lookahead2W(82);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8202:                      // '(' 'block'
      consume(10);                  // '('
      lookahead1W(9);               // whitespace | 'block'
      consume(32);                  // 'block'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(11);                  // ')'
      break;
    case 22538:                     // '(' 'loop'
      consume(10);                  // '('
      lookahead1W(26);              // whitespace | 'loop'
      consume(88);                  // 'loop'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(11);                  // ')'
      break;
    case 20746:                     // '(' 'if'
      consume(10);                  // '('
      lookahead1W(22);              // whitespace | 'if'
      consume(81);                  // 'if'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(86);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable'
          break;
        default:
          lk = l1;
        }
        if (lk == 11                // ')'
         || lk == 35850)            // '(' 'then'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      if (l1 == 10)                 // '('
      {
        consume(10);                // '('
        lookahead1W(40);            // whitespace | 'then'
        consume(140);               // 'then'
        for (;;)
        {
          lookahead1W(88);          // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          if (l1 == 11)             // ')'
          {
            break;
          }
          whitespace();
          parse_instr();
        }
        consume(11);                // ')'
        lookahead1W(50);            // whitespace | '(' | ')'
        if (l1 == 10)               // '('
        {
          consume(10);              // '('
          lookahead1W(17);          // whitespace | 'else'
          consume(53);              // 'else'
          for (;;)
          {
            lookahead1W(88);        // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
            if (l1 == 11)           // ')'
            {
              break;
            }
            whitespace();
            parse_instr();
          }
          consume(11);              // ')'
        }
      }
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 36618:                     // '(' 'try_table'
      consume(10);                  // '('
      lookahead1W(41);              // whitespace | 'try_table'
      consume(143);                 // 'try_table'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(99);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          break;
        default:
          lk = l1;
        }
        if (lk != 11018             // '(' 'catch'
         && lk != 11274             // '(' 'catch_all'
         && lk != 11530             // '(' 'catch_all_ref'
         && lk != 11786)            // '(' 'catch_ref'
        {
          break;
        }
        whitespace();
        parse_catchClause();
      }
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(81);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'br' |
                                    // 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' |
                                    // 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'local.get' | 'local.set' | 'local.tee' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'unreachable'
      whitespace();
      parse_nonBlockInstr();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("foldedInstr", e0);
  }

  function try_foldedInstr()
  {
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(82);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8202:                      // '(' 'block'
      consumeT(10);                 // '('
      lookahead1W(9);               // whitespace | 'block'
      consumeT(32);                 // 'block'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(11);                 // ')'
      break;
    case 22538:                     // '(' 'loop'
      consumeT(10);                 // '('
      lookahead1W(26);              // whitespace | 'loop'
      consumeT(88);                 // 'loop'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(11);                 // ')'
      break;
    case 20746:                     // '(' 'if'
      consumeT(10);                 // '('
      lookahead1W(22);              // whitespace | 'if'
      consumeT(81);                 // 'if'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(86);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' |
                                    // 'try_table' | 'unreachable'
          break;
        default:
          lk = l1;
        }
        if (lk == 11                // ')'
         || lk == 35850)            // '(' 'then'
        {
          break;
        }
        try_instr();
      }
      if (l1 == 10)                 // '('
      {
        consumeT(10);               // '('
        lookahead1W(40);            // whitespace | 'then'
        consumeT(140);              // 'then'
        for (;;)
        {
          lookahead1W(88);          // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          if (l1 == 11)             // ')'
          {
            break;
          }
          try_instr();
        }
        consumeT(11);               // ')'
        lookahead1W(50);            // whitespace | '(' | ')'
        if (l1 == 10)               // '('
        {
          consumeT(10);             // '('
          lookahead1W(17);          // whitespace | 'else'
          consumeT(53);             // 'else'
          for (;;)
          {
            lookahead1W(88);        // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
            if (l1 == 11)           // ')'
            {
              break;
            }
            try_instr();
          }
          consumeT(11);             // ')'
        }
      }
      lookahead1W(6);               // whitespace | ')'
      consumeT(11);                 // ')'
      break;
    case 36618:                     // '(' 'try_table'
      consumeT(10);                 // '('
      lookahead1W(41);              // whitespace | 'try_table'
      consumeT(143);                // 'try_table'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(99);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          break;
        default:
          lk = l1;
        }
        if (lk != 11018             // '(' 'catch'
         && lk != 11274             // '(' 'catch_all'
         && lk != 11530             // '(' 'catch_all_ref'
         && lk != 11786)            // '(' 'catch_ref'
        {
          break;
        }
        try_catchClause();
      }
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(11);                 // ')'
      break;
    default:
      consumeT(10);                 // '('
      lookahead1W(81);              // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'br' |
                                    // 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' |
                                    // 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'local.get' | 'local.set' | 'local.tee' | 'memory.copy' |
                                    // 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' |
                                    // 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'unreachable'
      try_nonBlockInstr();
      for (;;)
      {
        lookahead1W(88);            // whitespace | dottedName | '(' | ')' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' |
                                    // 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        if (l1 == 11)               // ')'
        {
          break;
        }
        try_instr();
      }
      consumeT(11);                 // ')'
    }
  }

  function parse_catchClause()
  {
    eventHandler.startNonterminal("catchClause", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(66);              // whitespace | 'catch' | 'catch_all' | 'catch_all_ref' | 'catch_ref'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 11018:                     // '(' 'catch'
      consume(10);                  // '('
      lookahead1W(10);              // whitespace | 'catch'
      consume(43);                  // 'catch'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tagidx();
      lookahead1W(4);               // whitespace | '$'
      whitespace();
      parse_label();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 11786:                     // '(' 'catch_ref'
      consume(10);                  // '('
      lookahead1W(13);              // whitespace | 'catch_ref'
      consume(46);                  // 'catch_ref'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tagidx();
      lookahead1W(4);               // whitespace | '$'
      whitespace();
      parse_label();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    case 11274:                     // '(' 'catch_all'
      consume(10);                  // '('
      lookahead1W(11);              // whitespace | 'catch_all'
      consume(44);                  // 'catch_all'
      lookahead1W(4);               // whitespace | '$'
      whitespace();
      parse_label();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      break;
    default:
      consume(10);                  // '('
      lookahead1W(12);              // whitespace | 'catch_all_ref'
      consume(45);                  // 'catch_all_ref'
      lookahead1W(4);               // whitespace | '$'
      whitespace();
      parse_label();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
    }
    eventHandler.endNonterminal("catchClause", e0);
  }

  function try_catchClause()
  {
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(66);              // whitespace | 'catch' | 'catch_all' | 'catch_all_ref' | 'catch_ref'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 11018:                     // '(' 'catch'
      consumeT(10);                 // '('
      lookahead1W(10);              // whitespace | 'catch'
      consumeT(43);                 // 'catch'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tagidx();
      lookahead1W(4);               // whitespace | '$'
      try_label();
      lookahead1W(6);               // whitespace | ')'
      consumeT(11);                 // ')'
      break;
    case 11786:                     // '(' 'catch_ref'
      consumeT(10);                 // '('
      lookahead1W(13);              // whitespace | 'catch_ref'
      consumeT(46);                 // 'catch_ref'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tagidx();
      lookahead1W(4);               // whitespace | '$'
      try_label();
      lookahead1W(6);               // whitespace | ')'
      consumeT(11);                 // ')'
      break;
    case 11274:                     // '(' 'catch_all'
      consumeT(10);                 // '('
      lookahead1W(11);              // whitespace | 'catch_all'
      consumeT(44);                 // 'catch_all'
      lookahead1W(4);               // whitespace | '$'
      try_label();
      lookahead1W(6);               // whitespace | ')'
      consumeT(11);                 // ')'
      break;
    default:
      consumeT(10);                 // '('
      lookahead1W(12);              // whitespace | 'catch_all_ref'
      consumeT(45);                 // 'catch_all_ref'
      lookahead1W(4);               // whitespace | '$'
      try_label();
      lookahead1W(6);               // whitespace | ')'
      consumeT(11);                 // ')'
    }
  }

  function parse_seqInstr()
  {
    eventHandler.startNonterminal("seqInstr", e0);
    switch (l1)
    {
    case 32:                        // 'block'
      consume(32);                  // 'block'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 54)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(54);                  // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      break;
    case 88:                        // 'loop'
      consume(88);                  // 'loop'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 54)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(54);                  // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      break;
    case 81:                        // 'if'
      consume(81);                  // 'if'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(96);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'else' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 53                // 'else'
         || l1 == 54)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      if (l1 == 53)                 // 'else'
      {
        consume(53);                // 'else'
        lookahead1W(94);            // whitespace | dottedName | '$' | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 9)                // '$'
        {
          whitespace();
          parse_id();
        }
        for (;;)
        {
          lookahead1W(89);          // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
          if (l1 == 54)             // 'end'
          {
            break;
          }
          whitespace();
          parse_instr();
        }
      }
      consume(54);                  // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_id();
      }
      break;
    case 143:                       // 'try_table'
      consume(143);                 // 'try_table'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        whitespace();
        parse_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_blockType();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(99);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          break;
        default:
          lk = l1;
        }
        if (lk != 11018             // '(' 'catch'
         && lk != 11274             // '(' 'catch_all'
         && lk != 11530             // '(' 'catch_all_ref'
         && lk != 11786)            // '(' 'catch_ref'
        {
          break;
        }
        whitespace();
        parse_catchClause();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 54)               // 'end'
        {
          break;
        }
        whitespace();
        parse_instr();
      }
      consume(54);                  // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
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
    case 32:                        // 'block'
      consumeT(32);                 // 'block'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 54)               // 'end'
        {
          break;
        }
        try_instr();
      }
      consumeT(54);                 // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
      {
        try_id();
      }
      break;
    case 88:                        // 'loop'
      consumeT(88);                 // 'loop'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 54)               // 'end'
        {
          break;
        }
        try_instr();
      }
      consumeT(54);                 // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
      {
        try_id();
      }
      break;
    case 81:                        // 'if'
      consumeT(81);                 // 'if'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(96);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'else' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 53                // 'else'
         || l1 == 54)               // 'end'
        {
          break;
        }
        try_instr();
      }
      if (l1 == 53)                 // 'else'
      {
        consumeT(53);               // 'else'
        lookahead1W(94);            // whitespace | dottedName | '$' | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 9)                // '$'
        {
          try_id();
        }
        for (;;)
        {
          lookahead1W(89);          // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
          if (l1 == 54)             // 'end'
          {
            break;
          }
          try_instr();
        }
      }
      consumeT(54);                 // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
      {
        try_id();
      }
      break;
    case 143:                       // 'try_table'
      consumeT(143);                // 'try_table'
      lookahead1W(74);              // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 9)                  // '$'
      {
        try_label();
      }
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_blockType();
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(99);          // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          break;
        default:
          lk = l1;
        }
        if (lk != 11018             // '(' 'catch'
         && lk != 11274             // '(' 'catch_all'
         && lk != 11530             // '(' 'catch_all_ref'
         && lk != 11786)            // '(' 'catch_ref'
        {
          break;
        }
        try_catchClause();
      }
      for (;;)
      {
        lookahead1W(89);            // whitespace | dottedName | '(' | 'any.convert_extern' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'end' | 'extern.convert_any' | 'global.get' |
                                    // 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'return' | 'return_call' | 'return_call_indirect' | 'return_call_ref' |
                                    // 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        if (l1 == 54)               // 'end'
        {
          break;
        }
        try_instr();
      }
      consumeT(54);                 // 'end'
      lookahead1W(103);             // whitespace | string | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      if (l1 == 9)                  // '$'
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
    case 101:                       // 'nop'
      consume(101);                 // 'nop'
      break;
    case 145:                       // 'unreachable'
      consume(145);                 // 'unreachable'
      break;
    case 50:                        // 'drop'
      consume(50);                  // 'drop'
      break;
    case 117:                       // 'return'
      consume(117);                 // 'return'
      break;
    case 142:                       // 'throw_ref'
      consume(142);                 // 'throw_ref'
      break;
    case 121:                       // 'select'
      consume(121);                 // 'select'
      lookahead1W(102);             // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      switch (l1)
      {
      case 10:                      // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable'
        break;
      default:
        lk = l1;
      }
      if (lk == 29706)              // '(' 'result'
      {
        whitespace();
        parse_resultTypes();
      }
      break;
    case 8:                         // dottedName
      parse_numericLikeInstr();
      break;
    case 85:                        // 'local.get'
      consume(85);                  // 'local.get'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      break;
    case 86:                        // 'local.set'
      consume(86);                  // 'local.set'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      break;
    case 87:                        // 'local.tee'
      consume(87);                  // 'local.tee'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      break;
    case 68:                        // 'global.get'
      consume(68);                  // 'global.get'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      break;
    case 69:                        // 'global.set'
      consume(69);                  // 'global.set'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_index();
      break;
    case 134:                       // 'table.get'
      consume(134);                 // 'table.get'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      break;
    case 137:                       // 'table.set'
      consume(137);                 // 'table.set'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      break;
    case 138:                       // 'table.size'
      consume(138);                 // 'table.size'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      break;
    case 135:                       // 'table.grow'
      consume(135);                 // 'table.grow'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      break;
    case 133:                       // 'table.fill'
      consume(133);                 // 'table.fill'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      break;
    case 132:                       // 'table.copy'
      consume(132);                 // 'table.copy'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      break;
    case 136:                       // 'table.init'
      consume(136);                 // 'table.init'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_elemidx();
      break;
    case 52:                        // 'elem.drop'
      consume(52);                  // 'elem.drop'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_elemidx();
      break;
    case 94:                        // 'memory.size'
      consume(94);                  // 'memory.size'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_memidx();
      break;
    case 92:                        // 'memory.grow'
      consume(92);                  // 'memory.grow'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_memidx();
      break;
    case 91:                        // 'memory.fill'
      consume(91);                  // 'memory.fill'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_memidx();
      break;
    case 90:                        // 'memory.copy'
      consume(90);                  // 'memory.copy'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_memidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_memidx();
      break;
    case 93:                        // 'memory.init'
      consume(93);                  // 'memory.init'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_memidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_dataidx();
      break;
    case 48:                        // 'data.drop'
      consume(48);                  // 'data.drop'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_dataidx();
      break;
    case 114:                       // 'ref.null'
      consume(114);                 // 'ref.null'
      lookahead1W(79);              // whitespace | nat | '$' | 'any' | 'array' | 'eq' | 'exn' | 'extern' | 'func' |
                                    // 'i31' | 'noexn' | 'noextern' | 'nofunc' | 'none' | 'struct'
      whitespace();
      parse_heaptype();
      break;
    case 111:                       // 'ref.func'
      consume(111);                 // 'ref.func'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_funcidx();
      break;
    case 113:                       // 'ref.is_null'
      consume(113);                 // 'ref.is_null'
      break;
    case 108:                       // 'ref.as_non_null'
      consume(108);                 // 'ref.as_non_null'
      break;
    case 110:                       // 'ref.eq'
      consume(110);                 // 'ref.eq'
      break;
    case 115:                       // 'ref.test'
      consume(115);                 // 'ref.test'
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      break;
    case 109:                       // 'ref.cast'
      consume(109);                 // 'ref.cast'
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      break;
    case 127:                       // 'struct.new'
      consume(127);                 // 'struct.new'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 128:                       // 'struct.new_default'
      consume(128);                 // 'struct.new_default'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 124:                       // 'struct.get'
      consume(124);                 // 'struct.get'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_fieldidx();
      break;
    case 125:                       // 'struct.get_s'
      consume(125);                 // 'struct.get_s'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_fieldidx();
      break;
    case 126:                       // 'struct.get_u'
      consume(126);                 // 'struct.get_u'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_fieldidx();
      break;
    case 129:                       // 'struct.set'
      consume(129);                 // 'struct.set'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_fieldidx();
      break;
    case 26:                        // 'array.new'
      consume(26);                  // 'array.new'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 28:                        // 'array.new_default'
      consume(28);                  // 'array.new_default'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 30:                        // 'array.new_fixed'
      consume(30);                  // 'array.new_fixed'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(2);               // whitespace | nat
      consume(5);                   // nat
      break;
    case 27:                        // 'array.new_data'
      consume(27);                  // 'array.new_data'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_dataidx();
      break;
    case 29:                        // 'array.new_elem'
      consume(29);                  // 'array.new_elem'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_elemidx();
      break;
    case 20:                        // 'array.get'
      consume(20);                  // 'array.get'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 21:                        // 'array.get_s'
      consume(21);                  // 'array.get_s'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 22:                        // 'array.get_u'
      consume(22);                  // 'array.get_u'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 31:                        // 'array.set'
      consume(31);                  // 'array.set'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 25:                        // 'array.len'
      consume(25);                  // 'array.len'
      break;
    case 19:                        // 'array.fill'
      consume(19);                  // 'array.fill'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 18:                        // 'array.copy'
      consume(18);                  // 'array.copy'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 23:                        // 'array.init_data'
      consume(23);                  // 'array.init_data'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_dataidx();
      break;
    case 24:                        // 'array.init_elem'
      consume(24);                  // 'array.init_elem'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_elemidx();
      break;
    case 112:                       // 'ref.i31'
      consume(112);                 // 'ref.i31'
      break;
    case 73:                        // 'i31.get_s'
      consume(73);                  // 'i31.get_s'
      break;
    case 74:                        // 'i31.get_u'
      consume(74);                  // 'i31.get_u'
      break;
    case 16:                        // 'any.convert_extern'
      consume(16);                  // 'any.convert_extern'
      break;
    case 59:                        // 'extern.convert_any'
      consume(59);                  // 'extern.convert_any'
      break;
    case 40:                        // 'call'
      consume(40);                  // 'call'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_funcidx();
      break;
    case 42:                        // 'call_ref'
      consume(42);                  // 'call_ref'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 41:                        // 'call_indirect'
      consume(41);                  // 'call_indirect'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_typeuse();
      break;
    case 118:                       // 'return_call'
      consume(118);                 // 'return_call'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_funcidx();
      break;
    case 120:                       // 'return_call_ref'
      consume(120);                 // 'return_call_ref'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      break;
    case 119:                       // 'return_call_indirect'
      consume(119);                 // 'return_call_indirect'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tableidx();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_typeuse();
      break;
    case 33:                        // 'br'
      consume(33);                  // 'br'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_labelidx();
      break;
    case 34:                        // 'br_if'
      consume(34);                  // 'br_if'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_labelidx();
      break;
    case 39:                        // 'br_table'
      consume(39);                  // 'br_table'
      for (;;)
      {
        lookahead1W(47);            // whitespace | nat | '$'
        whitespace();
        parse_labelidx();
        lookahead1W(47);            // whitespace | nat | '$'
        switch (l1)
        {
        case 5:                     // nat
          lookahead2W(105);         // whitespace | string | nat | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          break;
        case 9:                     // '$'
          lookahead2W(0);           // whitespace | namePart
          switch (lk)
          {
          case 521:                 // '$' namePart
            lookahead3W(105);       // whitespace | string | nat | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk != 1285              // nat nat
         && lk != 2309              // nat '$'
         && lk != 328201            // '$' namePart nat
         && lk != 590345)           // '$' namePart '$'
        {
          break;
        }
      }
      whitespace();
      parse_labelidx();
      break;
    case 38:                        // 'br_on_null'
      consume(38);                  // 'br_on_null'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_labelidx();
      break;
    case 37:                        // 'br_on_non_null'
      consume(37);                  // 'br_on_non_null'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_labelidx();
      break;
    case 35:                        // 'br_on_cast'
      consume(35);                  // 'br_on_cast'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_labelidx();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      break;
    case 36:                        // 'br_on_cast_fail'
      consume(36);                  // 'br_on_cast_fail'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_labelidx();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      lookahead1W(5);               // whitespace | '('
      whitespace();
      parse_reftype();
      break;
    default:
      consume(141);                 // 'throw'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_tagidx();
    }
    eventHandler.endNonterminal("nonBlockInstr", e0);
  }

  function try_nonBlockInstr()
  {
    switch (l1)
    {
    case 101:                       // 'nop'
      consumeT(101);                // 'nop'
      break;
    case 145:                       // 'unreachable'
      consumeT(145);                // 'unreachable'
      break;
    case 50:                        // 'drop'
      consumeT(50);                 // 'drop'
      break;
    case 117:                       // 'return'
      consumeT(117);                // 'return'
      break;
    case 142:                       // 'throw_ref'
      consumeT(142);                // 'throw_ref'
      break;
    case 121:                       // 'select'
      consumeT(121);                // 'select'
      lookahead1W(102);             // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
      switch (l1)
      {
      case 10:                      // '('
        lookahead2W(100);           // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'ref' | 'ref.as_non_null' | 'ref.cast' |
                                    // 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' |
                                    // 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable'
        break;
      default:
        lk = l1;
      }
      if (lk == 29706)              // '(' 'result'
      {
        try_resultTypes();
      }
      break;
    case 8:                         // dottedName
      try_numericLikeInstr();
      break;
    case 85:                        // 'local.get'
      consumeT(85);                 // 'local.get'
      lookahead1W(47);              // whitespace | nat | '$'
      try_index();
      break;
    case 86:                        // 'local.set'
      consumeT(86);                 // 'local.set'
      lookahead1W(47);              // whitespace | nat | '$'
      try_index();
      break;
    case 87:                        // 'local.tee'
      consumeT(87);                 // 'local.tee'
      lookahead1W(47);              // whitespace | nat | '$'
      try_index();
      break;
    case 68:                        // 'global.get'
      consumeT(68);                 // 'global.get'
      lookahead1W(47);              // whitespace | nat | '$'
      try_index();
      break;
    case 69:                        // 'global.set'
      consumeT(69);                 // 'global.set'
      lookahead1W(47);              // whitespace | nat | '$'
      try_index();
      break;
    case 134:                       // 'table.get'
      consumeT(134);                // 'table.get'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      break;
    case 137:                       // 'table.set'
      consumeT(137);                // 'table.set'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      break;
    case 138:                       // 'table.size'
      consumeT(138);                // 'table.size'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      break;
    case 135:                       // 'table.grow'
      consumeT(135);                // 'table.grow'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      break;
    case 133:                       // 'table.fill'
      consumeT(133);                // 'table.fill'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      break;
    case 132:                       // 'table.copy'
      consumeT(132);                // 'table.copy'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      break;
    case 136:                       // 'table.init'
      consumeT(136);                // 'table.init'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_elemidx();
      break;
    case 52:                        // 'elem.drop'
      consumeT(52);                 // 'elem.drop'
      lookahead1W(47);              // whitespace | nat | '$'
      try_elemidx();
      break;
    case 94:                        // 'memory.size'
      consumeT(94);                 // 'memory.size'
      lookahead1W(47);              // whitespace | nat | '$'
      try_memidx();
      break;
    case 92:                        // 'memory.grow'
      consumeT(92);                 // 'memory.grow'
      lookahead1W(47);              // whitespace | nat | '$'
      try_memidx();
      break;
    case 91:                        // 'memory.fill'
      consumeT(91);                 // 'memory.fill'
      lookahead1W(47);              // whitespace | nat | '$'
      try_memidx();
      break;
    case 90:                        // 'memory.copy'
      consumeT(90);                 // 'memory.copy'
      lookahead1W(47);              // whitespace | nat | '$'
      try_memidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_memidx();
      break;
    case 93:                        // 'memory.init'
      consumeT(93);                 // 'memory.init'
      lookahead1W(47);              // whitespace | nat | '$'
      try_memidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_dataidx();
      break;
    case 48:                        // 'data.drop'
      consumeT(48);                 // 'data.drop'
      lookahead1W(47);              // whitespace | nat | '$'
      try_dataidx();
      break;
    case 114:                       // 'ref.null'
      consumeT(114);                // 'ref.null'
      lookahead1W(79);              // whitespace | nat | '$' | 'any' | 'array' | 'eq' | 'exn' | 'extern' | 'func' |
                                    // 'i31' | 'noexn' | 'noextern' | 'nofunc' | 'none' | 'struct'
      try_heaptype();
      break;
    case 111:                       // 'ref.func'
      consumeT(111);                // 'ref.func'
      lookahead1W(47);              // whitespace | nat | '$'
      try_funcidx();
      break;
    case 113:                       // 'ref.is_null'
      consumeT(113);                // 'ref.is_null'
      break;
    case 108:                       // 'ref.as_non_null'
      consumeT(108);                // 'ref.as_non_null'
      break;
    case 110:                       // 'ref.eq'
      consumeT(110);                // 'ref.eq'
      break;
    case 115:                       // 'ref.test'
      consumeT(115);                // 'ref.test'
      lookahead1W(5);               // whitespace | '('
      try_reftype();
      break;
    case 109:                       // 'ref.cast'
      consumeT(109);                // 'ref.cast'
      lookahead1W(5);               // whitespace | '('
      try_reftype();
      break;
    case 127:                       // 'struct.new'
      consumeT(127);                // 'struct.new'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 128:                       // 'struct.new_default'
      consumeT(128);                // 'struct.new_default'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 124:                       // 'struct.get'
      consumeT(124);                // 'struct.get'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_fieldidx();
      break;
    case 125:                       // 'struct.get_s'
      consumeT(125);                // 'struct.get_s'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_fieldidx();
      break;
    case 126:                       // 'struct.get_u'
      consumeT(126);                // 'struct.get_u'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_fieldidx();
      break;
    case 129:                       // 'struct.set'
      consumeT(129);                // 'struct.set'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_fieldidx();
      break;
    case 26:                        // 'array.new'
      consumeT(26);                 // 'array.new'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 28:                        // 'array.new_default'
      consumeT(28);                 // 'array.new_default'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 30:                        // 'array.new_fixed'
      consumeT(30);                 // 'array.new_fixed'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(2);               // whitespace | nat
      consumeT(5);                  // nat
      break;
    case 27:                        // 'array.new_data'
      consumeT(27);                 // 'array.new_data'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_dataidx();
      break;
    case 29:                        // 'array.new_elem'
      consumeT(29);                 // 'array.new_elem'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_elemidx();
      break;
    case 20:                        // 'array.get'
      consumeT(20);                 // 'array.get'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 21:                        // 'array.get_s'
      consumeT(21);                 // 'array.get_s'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 22:                        // 'array.get_u'
      consumeT(22);                 // 'array.get_u'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 31:                        // 'array.set'
      consumeT(31);                 // 'array.set'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 25:                        // 'array.len'
      consumeT(25);                 // 'array.len'
      break;
    case 19:                        // 'array.fill'
      consumeT(19);                 // 'array.fill'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 18:                        // 'array.copy'
      consumeT(18);                 // 'array.copy'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 23:                        // 'array.init_data'
      consumeT(23);                 // 'array.init_data'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_dataidx();
      break;
    case 24:                        // 'array.init_elem'
      consumeT(24);                 // 'array.init_elem'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(47);              // whitespace | nat | '$'
      try_elemidx();
      break;
    case 112:                       // 'ref.i31'
      consumeT(112);                // 'ref.i31'
      break;
    case 73:                        // 'i31.get_s'
      consumeT(73);                 // 'i31.get_s'
      break;
    case 74:                        // 'i31.get_u'
      consumeT(74);                 // 'i31.get_u'
      break;
    case 16:                        // 'any.convert_extern'
      consumeT(16);                 // 'any.convert_extern'
      break;
    case 59:                        // 'extern.convert_any'
      consumeT(59);                 // 'extern.convert_any'
      break;
    case 40:                        // 'call'
      consumeT(40);                 // 'call'
      lookahead1W(47);              // whitespace | nat | '$'
      try_funcidx();
      break;
    case 42:                        // 'call_ref'
      consumeT(42);                 // 'call_ref'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 41:                        // 'call_indirect'
      consumeT(41);                 // 'call_indirect'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      lookahead1W(5);               // whitespace | '('
      try_typeuse();
      break;
    case 118:                       // 'return_call'
      consumeT(118);                // 'return_call'
      lookahead1W(47);              // whitespace | nat | '$'
      try_funcidx();
      break;
    case 120:                       // 'return_call_ref'
      consumeT(120);                // 'return_call_ref'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      break;
    case 119:                       // 'return_call_indirect'
      consumeT(119);                // 'return_call_indirect'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tableidx();
      lookahead1W(5);               // whitespace | '('
      try_typeuse();
      break;
    case 33:                        // 'br'
      consumeT(33);                 // 'br'
      lookahead1W(47);              // whitespace | nat | '$'
      try_labelidx();
      break;
    case 34:                        // 'br_if'
      consumeT(34);                 // 'br_if'
      lookahead1W(47);              // whitespace | nat | '$'
      try_labelidx();
      break;
    case 39:                        // 'br_table'
      consumeT(39);                 // 'br_table'
      for (;;)
      {
        lookahead1W(47);            // whitespace | nat | '$'
        try_labelidx();
        lookahead1W(47);            // whitespace | nat | '$'
        switch (l1)
        {
        case 5:                     // nat
          lookahead2W(105);         // whitespace | string | nat | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
          break;
        case 9:                     // '$'
          lookahead2W(0);           // whitespace | namePart
          switch (lk)
          {
          case 521:                 // '$' namePart
            lookahead3W(105);       // whitespace | string | nat | dottedName | '$' | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk != 1285              // nat nat
         && lk != 2309              // nat '$'
         && lk != 328201            // '$' namePart nat
         && lk != 590345)           // '$' namePart '$'
        {
          break;
        }
      }
      try_labelidx();
      break;
    case 38:                        // 'br_on_null'
      consumeT(38);                 // 'br_on_null'
      lookahead1W(47);              // whitespace | nat | '$'
      try_labelidx();
      break;
    case 37:                        // 'br_on_non_null'
      consumeT(37);                 // 'br_on_non_null'
      lookahead1W(47);              // whitespace | nat | '$'
      try_labelidx();
      break;
    case 35:                        // 'br_on_cast'
      consumeT(35);                 // 'br_on_cast'
      lookahead1W(47);              // whitespace | nat | '$'
      try_labelidx();
      lookahead1W(5);               // whitespace | '('
      try_reftype();
      lookahead1W(5);               // whitespace | '('
      try_reftype();
      break;
    case 36:                        // 'br_on_cast_fail'
      consumeT(36);                 // 'br_on_cast_fail'
      lookahead1W(47);              // whitespace | nat | '$'
      try_labelidx();
      lookahead1W(5);               // whitespace | '('
      try_reftype();
      lookahead1W(5);               // whitespace | '('
      try_reftype();
      break;
    default:
      consumeT(141);                // 'throw'
      lookahead1W(47);              // whitespace | nat | '$'
      try_tagidx();
    }
  }

  function parse_numericLikeInstr()
  {
    eventHandler.startNonterminal("numericLikeInstr", e0);
    switch (l1)
    {
    case 8:                         // dottedName
      lookahead2W(106);             // whitespace | string | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' |
                                    // 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' |
                                    // 'return_call' | 'return_call_indirect' | 'return_call_ref' | 'select' |
                                    // 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 3592:                      // dottedName 'align='
    case 26632:                     // dottedName 'offset='
      consume(8);                   // dottedName
      lookahead1W(54);              // whitespace | 'align=' | 'offset='
      whitespace();
      parse_memarg();
      break;
    case 1544:                      // dottedName float
      consume(8);                   // dottedName
      lookahead1W(3);               // whitespace | float
      consume(6);                   // float
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
      lookahead2W(106);             // whitespace | string | float | dottedName | '(' | ')' | 'align=' |
                                    // 'any.convert_extern' | 'array.copy' | 'array.fill' | 'array.get' |
                                    // 'array.get_s' | 'array.get_u' | 'array.init_data' | 'array.init_elem' |
                                    // 'array.len' | 'array.new' | 'array.new_data' | 'array.new_default' |
                                    // 'array.new_elem' | 'array.new_fixed' | 'array.set' | 'block' | 'br' | 'br_if' |
                                    // 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' | 'br_on_null' | 'br_table' |
                                    // 'call' | 'call_indirect' | 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' |
                                    // 'else' | 'end' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'offset=' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' |
                                    // 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' |
                                    // 'return_call' | 'return_call_indirect' | 'return_call_ref' | 'select' |
                                    // 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 3592:                      // dottedName 'align='
    case 26632:                     // dottedName 'offset='
      consumeT(8);                  // dottedName
      lookahead1W(54);              // whitespace | 'align=' | 'offset='
      try_memarg();
      break;
    case 1544:                      // dottedName float
      consumeT(8);                  // dottedName
      lookahead1W(3);               // whitespace | float
      consumeT(6);                  // float
      break;
    default:
      consumeT(8);                  // dottedName
    }
  }

  function parse_blockType()
  {
    eventHandler.startNonterminal("blockType", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(68);              // whitespace | 'param' | 'ref' | 'result' | 'type'
      switch (lk)
      {
      case 29706:                   // '(' 'result'
        lookahead3W(71);            // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 685066                // '(' 'result' '('
     || lk == 3961866               // '(' 'result' 'f32'
     || lk == 4092938               // '(' 'result' 'f64'
     || lk == 4944906               // '(' 'result' 'i32'
     || lk == 5075978               // '(' 'result' 'i64'
     || lk == 9597962)              // '(' 'result' 'v128'
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
        memoize(4, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
    case 26890:                     // '(' 'param'
    case 36874:                     // '(' 'type'
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
    case 10:                        // '('
      lookahead2W(68);              // whitespace | 'param' | 'ref' | 'result' | 'type'
      switch (lk)
      {
      case 29706:                   // '(' 'result'
        lookahead3W(71);            // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 685066                // '(' 'result' '('
     || lk == 3961866               // '(' 'result' 'f32'
     || lk == 4092938               // '(' 'result' 'f64'
     || lk == 4944906               // '(' 'result' 'i32'
     || lk == 5075978               // '(' 'result' 'i64'
     || lk == 9597962)              // '(' 'result' 'v128'
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
          try_typeuse();
          memoize(4, e0A, -1);
          lk = -4;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(4, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
    case 26890:                     // '(' 'param'
    case 36874:                     // '(' 'type'
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

  function parse_typeuse()
  {
    eventHandler.startNonterminal("typeuse", e0);
    switch (l1)
    {
    case 10:                        // '('
      lookahead2W(63);              // whitespace | 'param' | 'result' | 'type'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 36874:                     // '(' 'type'
      consume(10);                  // '('
      lookahead1W(42);              // whitespace | 'type'
      consume(144);                 // 'type'
      lookahead1W(47);              // whitespace | nat | '$'
      whitespace();
      parse_typeidx();
      lookahead1W(6);               // whitespace | ')'
      consume(11);                  // ')'
      for (;;)
      {
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 26890:               // '(' 'param'
            lookahead3W(74);        // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 616714            // '(' 'param' '$'
         || lk == 682250            // '(' 'param' '('
         || lk == 3959050           // '(' 'param' 'f32'
         || lk == 4090122           // '(' 'param' 'f64'
         || lk == 4942090           // '(' 'param' 'i32'
         || lk == 5073162           // '(' 'param' 'i64'
         || lk == 9595146)          // '(' 'param' 'v128'
        {
          lk = memoized(5, e0);
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
            memoize(5, e0, lk);
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
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 29706:               // '(' 'result'
            lookahead3W(71);        // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 685066            // '(' 'result' '('
         || lk == 3961866           // '(' 'result' 'f32'
         || lk == 4092938           // '(' 'result' 'f64'
         || lk == 4944906           // '(' 'result' 'i32'
         || lk == 5075978           // '(' 'result' 'i64'
         || lk == 9597962)          // '(' 'result' 'v128'
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
            memoize(6, e0, lk);
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
    case 26890:                     // '(' 'param'
      for (;;)
      {
        whitespace();
        parse_paramDecl();
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 26890:               // '(' 'param'
            lookahead3W(74);        // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 616714            // '(' 'param' '$'
         || lk == 682250            // '(' 'param' '('
         || lk == 3959050           // '(' 'param' 'f32'
         || lk == 4090122           // '(' 'param' 'f64'
         || lk == 4942090           // '(' 'param' 'i32'
         || lk == 5073162           // '(' 'param' 'i64'
         || lk == 9595146)          // '(' 'param' 'v128'
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
      }
      for (;;)
      {
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 29706:               // '(' 'result'
            lookahead3W(71);        // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 685066            // '(' 'result' '('
         || lk == 3961866           // '(' 'result' 'f32'
         || lk == 4092938           // '(' 'result' 'f64'
         || lk == 4944906           // '(' 'result' 'i32'
         || lk == 5075978           // '(' 'result' 'i64'
         || lk == 9597962)          // '(' 'result' 'v128'
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
    default:
      for (;;)
      {
        whitespace();
        parse_resultDecl();
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 29706:               // '(' 'result'
            lookahead3W(71);        // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 685066            // '(' 'result' '('
         || lk == 3961866           // '(' 'result' 'f32'
         || lk == 4092938           // '(' 'result' 'f64'
         || lk == 4944906           // '(' 'result' 'i32'
         || lk == 5075978           // '(' 'result' 'i64'
         || lk == 9597962)          // '(' 'result' 'v128'
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
            memoize(9, e0, lk);
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
    case 10:                        // '('
      lookahead2W(63);              // whitespace | 'param' | 'result' | 'type'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 36874:                     // '(' 'type'
      consumeT(10);                 // '('
      lookahead1W(42);              // whitespace | 'type'
      consumeT(144);                // 'type'
      lookahead1W(47);              // whitespace | nat | '$'
      try_typeidx();
      lookahead1W(6);               // whitespace | ')'
      consumeT(11);                 // ')'
      for (;;)
      {
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 26890:               // '(' 'param'
            lookahead3W(74);        // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 616714            // '(' 'param' '$'
         || lk == 682250            // '(' 'param' '('
         || lk == 3959050           // '(' 'param' 'f32'
         || lk == 4090122           // '(' 'param' 'f64'
         || lk == 4942090           // '(' 'param' 'i32'
         || lk == 5073162           // '(' 'param' 'i64'
         || lk == 9595146)          // '(' 'param' 'v128'
        {
          lk = memoized(5, e0);
          if (lk == 0)
          {
            var b0A = b0; var e0A = e0; var l1A = l1;
            var b1A = b1; var e1A = e1; var l2A = l2;
            var b2A = b2; var e2A = e2; var l3A = l3;
            var b3A = b3; var e3A = e3;
            try
            {
              try_paramDecl();
              memoize(5, e0A, -1);
              continue;
            }
            catch (p1A)
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(5, e0A, -2);
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
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 29706:               // '(' 'result'
            lookahead3W(71);        // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 685066            // '(' 'result' '('
         || lk == 3961866           // '(' 'result' 'f32'
         || lk == 4092938           // '(' 'result' 'f64'
         || lk == 4944906           // '(' 'result' 'i32'
         || lk == 5075978           // '(' 'result' 'i64'
         || lk == 9597962)          // '(' 'result' 'v128'
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
              try_resultDecl();
              memoize(6, e0A, -1);
              continue;
            }
            catch (p1A)
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(6, e0A, -2);
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
    case 26890:                     // '(' 'param'
      try_paramDecl();
      for (;;)
      {
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 26890:               // '(' 'param'
            lookahead3W(74);        // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 616714            // '(' 'param' '$'
         || lk == 682250            // '(' 'param' '('
         || lk == 3959050           // '(' 'param' 'f32'
         || lk == 4090122           // '(' 'param' 'f64'
         || lk == 4942090           // '(' 'param' 'i32'
         || lk == 5073162           // '(' 'param' 'i64'
         || lk == 9595146)          // '(' 'param' 'v128'
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
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 29706:               // '(' 'result'
            lookahead3W(71);        // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 685066            // '(' 'result' '('
         || lk == 3961866           // '(' 'result' 'f32'
         || lk == 4092938           // '(' 'result' 'f64'
         || lk == 4944906           // '(' 'result' 'i32'
         || lk == 5075978           // '(' 'result' 'i64'
         || lk == 9597962)          // '(' 'result' 'v128'
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
    default:
      try_resultDecl();
      for (;;)
      {
        lookahead1W(102);           // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        switch (l1)
        {
        case 10:                    // '('
          lookahead2W(107);         // whitespace | dottedName | 'any.convert_extern' | 'array' | 'array.copy' |
                                    // 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'catch' |
                                    // 'catch_all' | 'catch_all_ref' | 'catch_ref' | 'data.drop' | 'drop' |
                                    // 'elem.drop' | 'extern.convert_any' | 'func' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'item' | 'local' | 'local.get' | 'local.set' |
                                    // 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' |
                                    // 'memory.init' | 'memory.size' | 'nop' | 'param' | 'ref' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'result' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct' | 'struct.get' | 'struct.get_s' |
                                    // 'struct.get_u' | 'struct.new' | 'struct.new_default' | 'struct.set' |
                                    // 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' | 'table.init' |
                                    // 'table.set' | 'table.size' | 'then' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'type' | 'unreachable'
          switch (lk)
          {
          case 29706:               // '(' 'result'
            lookahead3W(71);        // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk == 685066            // '(' 'result' '('
         || lk == 3961866           // '(' 'result' 'f32'
         || lk == 4092938           // '(' 'result' 'f64'
         || lk == 4944906           // '(' 'result' 'i32'
         || lk == 5075978           // '(' 'result' 'i64'
         || lk == 9597962)          // '(' 'result' 'v128'
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
              try_resultDecl();
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
        try_resultDecl();
      }
    }
  }

  function parse_paramDecl()
  {
    eventHandler.startNonterminal("paramDecl", e0);
    consume(10);                    // '('
    lookahead1W(31);                // whitespace | 'param'
    consume(105);                   // 'param'
    lookahead1W(74);                // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
    if (l1 == 9)                    // '$'
    {
      whitespace();
      parse_id();
    }
    for (;;)
    {
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(75);              // whitespace | '(' | ')' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 11)                 // ')'
      {
        break;
      }
    }
    consume(11);                    // ')'
    eventHandler.endNonterminal("paramDecl", e0);
  }

  function try_paramDecl()
  {
    consumeT(10);                   // '('
    lookahead1W(31);                // whitespace | 'param'
    consumeT(105);                  // 'param'
    lookahead1W(74);                // whitespace | '$' | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
    if (l1 == 9)                    // '$'
    {
      try_id();
    }
    for (;;)
    {
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_valueType();
      lookahead1W(75);              // whitespace | '(' | ')' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 11)                 // ')'
      {
        break;
      }
    }
    consumeT(11);                   // ')'
  }

  function parse_resultDecl()
  {
    eventHandler.startNonterminal("resultDecl", e0);
    consume(10);                    // '('
    lookahead1W(34);                // whitespace | 'result'
    consume(116);                   // 'result'
    for (;;)
    {
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(75);              // whitespace | '(' | ')' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 11)                 // ')'
      {
        break;
      }
    }
    consume(11);                    // ')'
    eventHandler.endNonterminal("resultDecl", e0);
  }

  function try_resultDecl()
  {
    consumeT(10);                   // '('
    lookahead1W(34);                // whitespace | 'result'
    consumeT(116);                  // 'result'
    for (;;)
    {
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_valueType();
      lookahead1W(75);              // whitespace | '(' | ')' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 11)                 // ')'
      {
        break;
      }
    }
    consumeT(11);                   // ')'
  }

  function parse_resultTypes()
  {
    eventHandler.startNonterminal("resultTypes", e0);
    consume(10);                    // '('
    lookahead1W(34);                // whitespace | 'result'
    consume(116);                   // 'result'
    for (;;)
    {
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      whitespace();
      parse_valueType();
      lookahead1W(75);              // whitespace | '(' | ')' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 11)                 // ')'
      {
        break;
      }
    }
    consume(11);                    // ')'
    eventHandler.endNonterminal("resultTypes", e0);
  }

  function try_resultTypes()
  {
    consumeT(10);                   // '('
    lookahead1W(34);                // whitespace | 'result'
    consumeT(116);                  // 'result'
    for (;;)
    {
      lookahead1W(71);              // whitespace | '(' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      try_valueType();
      lookahead1W(75);              // whitespace | '(' | ')' | 'f32' | 'f64' | 'i32' | 'i64' | 'v128'
      if (l1 == 11)                 // ')'
      {
        break;
      }
    }
    consumeT(11);                   // ')'
  }

  function parse_heaptype()
  {
    eventHandler.startNonterminal("heaptype", e0);
    switch (l1)
    {
    case 15:                        // 'any'
      consume(15);                  // 'any'
      break;
    case 55:                        // 'eq'
      consume(55);                  // 'eq'
      break;
    case 72:                        // 'i31'
      consume(72);                  // 'i31'
      break;
    case 123:                       // 'struct'
      consume(123);                 // 'struct'
      break;
    case 17:                        // 'array'
      consume(17);                  // 'array'
      break;
    case 100:                       // 'none'
      consume(100);                 // 'none'
      break;
    case 66:                        // 'func'
      consume(66);                  // 'func'
      break;
    case 99:                        // 'nofunc'
      consume(99);                  // 'nofunc'
      break;
    case 56:                        // 'exn'
      consume(56);                  // 'exn'
      break;
    case 97:                        // 'noexn'
      consume(97);                  // 'noexn'
      break;
    case 58:                        // 'extern'
      consume(58);                  // 'extern'
      break;
    case 98:                        // 'noextern'
      consume(98);                  // 'noextern'
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
    case 15:                        // 'any'
      consumeT(15);                 // 'any'
      break;
    case 55:                        // 'eq'
      consumeT(55);                 // 'eq'
      break;
    case 72:                        // 'i31'
      consumeT(72);                 // 'i31'
      break;
    case 123:                       // 'struct'
      consumeT(123);                // 'struct'
      break;
    case 17:                        // 'array'
      consumeT(17);                 // 'array'
      break;
    case 100:                       // 'none'
      consumeT(100);                // 'none'
      break;
    case 66:                        // 'func'
      consumeT(66);                 // 'func'
      break;
    case 99:                        // 'nofunc'
      consumeT(99);                 // 'nofunc'
      break;
    case 56:                        // 'exn'
      consumeT(56);                 // 'exn'
      break;
    case 97:                        // 'noexn'
      consumeT(97);                 // 'noexn'
      break;
    case 58:                        // 'extern'
      consumeT(58);                 // 'extern'
      break;
    case 98:                        // 'noextern'
      consumeT(98);                 // 'noextern'
      break;
    default:
      try_typeidx();
    }
  }

  function parse_reftype()
  {
    eventHandler.startNonterminal("reftype", e0);
    consume(10);                    // '('
    lookahead1W(33);                // whitespace | 'ref'
    consume(107);                   // 'ref'
    lookahead1W(80);                // whitespace | nat | '$' | 'any' | 'array' | 'eq' | 'exn' | 'extern' | 'func' |
                                    // 'i31' | 'noexn' | 'noextern' | 'nofunc' | 'none' | 'null' | 'struct'
    if (l1 == 102)                  // 'null'
    {
      consume(102);                 // 'null'
    }
    lookahead1W(79);                // whitespace | nat | '$' | 'any' | 'array' | 'eq' | 'exn' | 'extern' | 'func' |
                                    // 'i31' | 'noexn' | 'noextern' | 'nofunc' | 'none' | 'struct'
    whitespace();
    parse_heaptype();
    lookahead1W(6);                 // whitespace | ')'
    consume(11);                    // ')'
    eventHandler.endNonterminal("reftype", e0);
  }

  function try_reftype()
  {
    consumeT(10);                   // '('
    lookahead1W(33);                // whitespace | 'ref'
    consumeT(107);                  // 'ref'
    lookahead1W(80);                // whitespace | nat | '$' | 'any' | 'array' | 'eq' | 'exn' | 'extern' | 'func' |
                                    // 'i31' | 'noexn' | 'noextern' | 'nofunc' | 'none' | 'null' | 'struct'
    if (l1 == 102)                  // 'null'
    {
      consumeT(102);                // 'null'
    }
    lookahead1W(79);                // whitespace | nat | '$' | 'any' | 'array' | 'eq' | 'exn' | 'extern' | 'func' |
                                    // 'i31' | 'noexn' | 'noextern' | 'nofunc' | 'none' | 'struct'
    try_heaptype();
    lookahead1W(6);                 // whitespace | ')'
    consumeT(11);                   // ')'
  }

  function parse_valueType()
  {
    eventHandler.startNonterminal("valueType", e0);
    switch (l1)
    {
    case 75:                        // 'i32'
      consume(75);                  // 'i32'
      break;
    case 77:                        // 'i64'
      consume(77);                  // 'i64'
      break;
    case 60:                        // 'f32'
      consume(60);                  // 'f32'
      break;
    case 62:                        // 'f64'
      consume(62);                  // 'f64'
      break;
    case 146:                       // 'v128'
      consume(146);                 // 'v128'
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
    case 75:                        // 'i32'
      consumeT(75);                 // 'i32'
      break;
    case 77:                        // 'i64'
      consumeT(77);                 // 'i64'
      break;
    case 60:                        // 'f32'
      consumeT(60);                 // 'f32'
      break;
    case 62:                        // 'f64'
      consumeT(62);                 // 'f64'
      break;
    case 146:                       // 'v128'
      consumeT(146);                // 'v128'
      break;
    default:
      try_reftype();
    }
  }

  function parse_id()
  {
    eventHandler.startNonterminal("id", e0);
    consume(9);                     // '$'
    lookahead1W(0);                 // whitespace | namePart
    consume(2);                     // namePart
    eventHandler.endNonterminal("id", e0);
  }

  function try_id()
  {
    consumeT(9);                    // '$'
    lookahead1W(0);                 // whitespace | namePart
    consumeT(2);                    // namePart
  }

  function parse_index()
  {
    eventHandler.startNonterminal("index", e0);
    switch (l1)
    {
    case 9:                         // '$'
      parse_id();
      break;
    default:
      consume(5);                   // nat
    }
    eventHandler.endNonterminal("index", e0);
  }

  function try_index()
  {
    switch (l1)
    {
    case 9:                         // '$'
      try_id();
      break;
    default:
      consumeT(5);                  // nat
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
    if (l1 == 7)                    // sign
    {
      consume(7);                   // sign
    }
    lookahead1W(2);                 // whitespace | nat
    consume(5);                     // nat
    eventHandler.endNonterminal("signedNat", e0);
  }

  function parse_limits()
  {
    eventHandler.startNonterminal("limits", e0);
    if (l1 != 5)                    // nat
    {
      whitespace();
      parse_addrtype();
    }
    lookahead1W(2);                 // whitespace | nat
    consume(5);                     // nat
    lookahead1W(58);                // whitespace | nat | '(' | ')'
    if (l1 == 5)                    // nat
    {
      consume(5);                   // nat
    }
    eventHandler.endNonterminal("limits", e0);
  }

  function try_limits()
  {
    if (l1 != 5)                    // nat
    {
      try_addrtype();
    }
    lookahead1W(2);                 // whitespace | nat
    consumeT(5);                    // nat
    lookahead1W(58);                // whitespace | nat | '(' | ')'
    if (l1 == 5)                    // nat
    {
      consumeT(5);                  // nat
    }
  }

  function parse_addrtype()
  {
    eventHandler.startNonterminal("addrtype", e0);
    switch (l1)
    {
    case 75:                        // 'i32'
      consume(75);                  // 'i32'
      break;
    default:
      consume(77);                  // 'i64'
    }
    eventHandler.endNonterminal("addrtype", e0);
  }

  function try_addrtype()
  {
    switch (l1)
    {
    case 75:                        // 'i32'
      consumeT(75);                 // 'i32'
      break;
    default:
      consumeT(77);                 // 'i64'
    }
  }

  function parse_memarg()
  {
    eventHandler.startNonterminal("memarg", e0);
    switch (l1)
    {
    case 104:                       // 'offset='
      lookahead2W(2);               // whitespace | nat
      switch (lk)
      {
      case 1384:                    // 'offset=' nat
        lookahead3W(104);           // whitespace | string | dottedName | '(' | ')' | 'align=' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        break;
      }
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 918888:                    // 'offset=' nat 'align='
      consume(104);                 // 'offset='
      lookahead1W(2);               // whitespace | nat
      consume(5);                   // nat
      lookahead1W(7);               // whitespace | 'align='
      consume(14);                  // 'align='
      lookahead1W(2);               // whitespace | nat
      consume(5);                   // nat
      break;
    case 14:                        // 'align='
      consume(14);                  // 'align='
      lookahead1W(2);               // whitespace | nat
      consume(5);                   // nat
      break;
    default:
      consume(104);                 // 'offset='
      lookahead1W(2);               // whitespace | nat
      consume(5);                   // nat
    }
    eventHandler.endNonterminal("memarg", e0);
  }

  function try_memarg()
  {
    switch (l1)
    {
    case 104:                       // 'offset='
      lookahead2W(2);               // whitespace | nat
      switch (lk)
      {
      case 1384:                    // 'offset=' nat
        lookahead3W(104);           // whitespace | string | dottedName | '(' | ')' | 'align=' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'else' | 'end' |
                                    // 'extern.convert_any' | 'func' | 'global.get' | 'global.set' | 'i31.get_s' |
                                    // 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' | 'loop' |
                                    // 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' | 'memory.size' |
                                    // 'nop' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' |
                                    // 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' | 'return_call' |
                                    // 'return_call_indirect' | 'return_call_ref' | 'select' | 'struct.get' |
                                    // 'struct.get_s' | 'struct.get_u' | 'struct.new' | 'struct.new_default' |
                                    // 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' | 'table.grow' |
                                    // 'table.init' | 'table.set' | 'table.size' | 'throw' | 'throw_ref' | 'try_table' |
                                    // 'unreachable'
        break;
      }
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 918888:                    // 'offset=' nat 'align='
      consumeT(104);                // 'offset='
      lookahead1W(2);               // whitespace | nat
      consumeT(5);                  // nat
      lookahead1W(7);               // whitespace | 'align='
      consumeT(14);                 // 'align='
      lookahead1W(2);               // whitespace | nat
      consumeT(5);                  // nat
      break;
    case 14:                        // 'align='
      consumeT(14);                 // 'align='
      lookahead1W(2);               // whitespace | nat
      consumeT(5);                  // nat
      break;
    default:
      consumeT(104);                // 'offset='
      lookahead1W(2);               // whitespace | nat
      consumeT(5);                  // nat
    }
  }

  function parse_expr()
  {
    eventHandler.startNonterminal("expr", e0);
    for (;;)
    {
      lookahead1W(97);              // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable'
      switch (l1)
      {
      case 10:                      // '('
        lookahead2W(85);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' |
                                    // 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' |
                                    // 'return_call' | 'return_call_indirect' | 'return_call_ref' | 'select' |
                                    // 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        break;
      default:
        lk = l1;
      }
      if (lk == 4                   // string
       || lk == 11                  // ')'
       || lk == 66                  // 'func'
       || lk == 27402)              // '(' 'ref'
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
      lookahead1W(97);              // whitespace | string | dottedName | '(' | ')' | 'any.convert_extern' |
                                    // 'array.copy' | 'array.fill' | 'array.get' | 'array.get_s' | 'array.get_u' |
                                    // 'array.init_data' | 'array.init_elem' | 'array.len' | 'array.new' |
                                    // 'array.new_data' | 'array.new_default' | 'array.new_elem' | 'array.new_fixed' |
                                    // 'array.set' | 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' |
                                    // 'br_on_non_null' | 'br_on_null' | 'br_table' | 'call' | 'call_indirect' |
                                    // 'call_ref' | 'data.drop' | 'drop' | 'elem.drop' | 'extern.convert_any' | 'func' |
                                    // 'global.get' | 'global.set' | 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' |
                                    // 'local.set' | 'local.tee' | 'loop' | 'memory.copy' | 'memory.fill' |
                                    // 'memory.grow' | 'memory.init' | 'memory.size' | 'nop' | 'ref.as_non_null' |
                                    // 'ref.cast' | 'ref.eq' | 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' |
                                    // 'ref.test' | 'return' | 'return_call' | 'return_call_indirect' |
                                    // 'return_call_ref' | 'select' | 'struct.get' | 'struct.get_s' | 'struct.get_u' |
                                    // 'struct.new' | 'struct.new_default' | 'struct.set' | 'table.copy' |
                                    // 'table.fill' | 'table.get' | 'table.grow' | 'table.init' | 'table.set' |
                                    // 'table.size' | 'throw' | 'throw_ref' | 'try_table' | 'unreachable'
      switch (l1)
      {
      case 10:                      // '('
        lookahead2W(85);            // whitespace | dottedName | 'any.convert_extern' | 'array.copy' | 'array.fill' |
                                    // 'array.get' | 'array.get_s' | 'array.get_u' | 'array.init_data' |
                                    // 'array.init_elem' | 'array.len' | 'array.new' | 'array.new_data' |
                                    // 'array.new_default' | 'array.new_elem' | 'array.new_fixed' | 'array.set' |
                                    // 'block' | 'br' | 'br_if' | 'br_on_cast' | 'br_on_cast_fail' | 'br_on_non_null' |
                                    // 'br_on_null' | 'br_table' | 'call' | 'call_indirect' | 'call_ref' | 'data.drop' |
                                    // 'drop' | 'elem.drop' | 'extern.convert_any' | 'global.get' | 'global.set' |
                                    // 'i31.get_s' | 'i31.get_u' | 'if' | 'local.get' | 'local.set' | 'local.tee' |
                                    // 'loop' | 'memory.copy' | 'memory.fill' | 'memory.grow' | 'memory.init' |
                                    // 'memory.size' | 'nop' | 'ref' | 'ref.as_non_null' | 'ref.cast' | 'ref.eq' |
                                    // 'ref.func' | 'ref.i31' | 'ref.is_null' | 'ref.null' | 'ref.test' | 'return' |
                                    // 'return_call' | 'return_call_indirect' | 'return_call_ref' | 'select' |
                                    // 'struct.get' | 'struct.get_s' | 'struct.get_u' | 'struct.new' |
                                    // 'struct.new_default' | 'struct.set' | 'table.copy' | 'table.fill' | 'table.get' |
                                    // 'table.grow' | 'table.init' | 'table.set' | 'table.size' | 'throw' |
                                    // 'throw_ref' | 'try_table' | 'unreachable'
        break;
      default:
        lk = l1;
      }
      if (lk == 4                   // string
       || lk == 11                  // ')'
       || lk == 66                  // 'func'
       || lk == 27402)              // '(' 'ref'
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
      code = WAT.TRANSITION[(i0 & 15) + WAT.TRANSITION[i0 >> 4]];

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
  for (var i = 0; i < 147; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 792 + s - 1;
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
  /*  83 */ 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108
];

WAT.TRANSITION =
[
  /*     0 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*    17 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*    34 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*    51 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*    68 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 4004, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*    85 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   102 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   119 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3520, 3520, 3520, 3520, 3520, 3520, 3523, 3560,
  /*   136 */ 3561, 3561, 3561, 3561, 3561, 7270, 3561, 3561, 3561, 3561, 3561, 3561, 3539, 3561, 3561, 3561, 3561,
  /*   153 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   170 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   187 */ 3561, 3561, 3561, 3561, 3561, 3520, 3520, 3520, 3520, 3520, 3520, 3523, 3560, 3561, 3561, 3561, 3561,
  /*   204 */ 3561, 8411, 3561, 3561, 3561, 3561, 3561, 3561, 3539, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   221 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   238 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   255 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3560, 3561, 3561, 3561, 3561, 3561, 7270, 3561, 3561,
  /*   272 */ 3561, 3561, 3561, 3561, 3539, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   289 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   306 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3559, 3561, 3543,
  /*   323 */ 3561, 3561, 7288, 3578, 3604, 3561, 3561, 3561, 3561, 3561, 7270, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   340 */ 3539, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   357 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   374 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 5316, 3561, 4139, 3621, 3666, 5320, 3657,
  /*   391 */ 3560, 3561, 3561, 3561, 3561, 3561, 7270, 3561, 3561, 3561, 3561, 3561, 3561, 3539, 3561, 3561, 3561,
  /*   408 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   425 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   442 */ 3561, 3561, 3561, 3561, 3561, 3561, 3682, 3688, 3693, 3724, 3738, 3709, 3749, 3560, 3561, 3561, 3561,
  /*   459 */ 3561, 3561, 7270, 3561, 3561, 3561, 3561, 3561, 3561, 3539, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   476 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   493 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   510 */ 3561, 3561, 3997, 3561, 8622, 3765, 8624, 5539, 3776, 3560, 3561, 3561, 3561, 3561, 3561, 7270, 3561,
  /*   527 */ 3561, 3561, 3561, 3561, 3561, 3812, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   544 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   561 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3832, 3561,
  /*   578 */ 11087, 3561, 3561, 3561, 10815, 3560, 3561, 3561, 3561, 3561, 3561, 6997, 3561, 3561, 3561, 3561, 3561,
  /*   595 */ 3561, 3539, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   612 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   629 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   646 */ 3561, 3852, 3561, 3561, 4604, 3876, 3876, 3959, 3561, 3561, 3561, 4627, 3876, 3876, 3924, 3561, 3561,
  /*   663 */ 6350, 3873, 3892, 3561, 3561, 3910, 3876, 3561, 7106, 3947, 4119, 4101, 3985, 4634, 4020, 3894, 3876,
  /*   680 */ 3876, 4090, 3876, 4090, 3876, 4635, 3876, 3876, 3876, 4117, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   697 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 4135, 3561, 4156, 7051, 4155, 4172, 4824, 4189, 3561, 3561,
  /*   714 */ 5431, 4380, 4380, 4872, 3561, 3561, 3561, 6224, 4380, 4380, 4210, 3561, 3561, 5223, 4380, 11035, 3561,
  /*   731 */ 3561, 5167, 4380, 5430, 7751, 8105, 5213, 4063, 4760, 10268, 5389, 7741, 10454, 9621, 8742, 10459, 8312,
  /*   748 */ 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   765 */ 3561, 3561, 3561, 4233, 3561, 4156, 7051, 4155, 4172, 8503, 4253, 3561, 3561, 4049, 4380, 4380, 4872,
  /*   782 */ 3561, 3561, 3561, 5159, 4274, 4380, 4210, 3561, 7833, 5223, 4380, 10653, 3561, 3561, 5167, 4380, 5430,
  /*   799 */ 7751, 8105, 5213, 4307, 4760, 10268, 5389, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301,
  /*   816 */ 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 4233,
  /*   833 */ 3561, 4156, 7051, 4155, 4172, 8503, 4253, 3561, 3561, 5431, 4380, 4380, 4872, 3561, 3561, 6734, 6224,
  /*   850 */ 4380, 4380, 4210, 3561, 3561, 5223, 4380, 10653, 3561, 10740, 5167, 4380, 5430, 7751, 8105, 5213, 4063,
  /*   867 */ 4760, 10268, 5389, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561,
  /*   884 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 4233, 3561, 4156, 7051, 4155,
  /*   901 */ 4172, 8503, 4253, 3561, 9471, 4293, 11123, 4323, 4342, 3561, 3561, 3561, 6224, 4380, 4380, 4210, 3561,
  /*   918 */ 3561, 5223, 4380, 10653, 3561, 3561, 5167, 4380, 5430, 7751, 7315, 5213, 4063, 4760, 10268, 5389, 7741,
  /*   935 */ 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561,
  /*   952 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 4233, 3561, 4156, 7051, 4155, 4172, 8503, 4253, 3561,
  /*   969 */ 3561, 5431, 4380, 4380, 4872, 3561, 3561, 8546, 4371, 4380, 4380, 4210, 3561, 3561, 5223, 4380, 10653,
  /*   986 */ 3561, 9794, 5167, 4380, 5430, 7751, 8105, 5213, 4063, 4760, 10268, 5389, 7741, 10454, 9621, 8742, 10459,
  /*  1003 */ 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1020 */ 3561, 3561, 3561, 3561, 4233, 3561, 4156, 7051, 4155, 4172, 8503, 4253, 3561, 3561, 5431, 4380, 4380,
  /*  1037 */ 4872, 3561, 3561, 3561, 6224, 4380, 4380, 4210, 3561, 3561, 5223, 4380, 10653, 3561, 3561, 5167, 4380,
  /*  1054 */ 5430, 7751, 8105, 5213, 4063, 4760, 10268, 5389, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401,
  /*  1071 */ 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1088 */ 4233, 3561, 4156, 7051, 4155, 4172, 8503, 4253, 3561, 9566, 4397, 4380, 4380, 4872, 3561, 3561, 11053,
  /*  1105 */ 4434, 4380, 4380, 4210, 3561, 3561, 5223, 4380, 10653, 3561, 4505, 5167, 4380, 5430, 7751, 8105, 5213,
  /*  1122 */ 4063, 4760, 10268, 5389, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561,
  /*  1139 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 4233, 3561, 4156, 7051,
  /*  1156 */ 4155, 4172, 8503, 4253, 3561, 3561, 6667, 4380, 4380, 4872, 3561, 3561, 3561, 6224, 4380, 4380, 4210,
  /*  1173 */ 3561, 8956, 5223, 4380, 10653, 3561, 8647, 5167, 4380, 5430, 7751, 8105, 5213, 4063, 4760, 10268, 5389,
  /*  1190 */ 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561,
  /*  1207 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3560,
  /*  1224 */ 3561, 3561, 3561, 3561, 3561, 7270, 3561, 3561, 3561, 3561, 3561, 3561, 4458, 3561, 3561, 3561, 3561,
  /*  1241 */ 10100, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1258 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1275 */ 3561, 3561, 3561, 3561, 3561, 4482, 4482, 4482, 4482, 4482, 4482, 4485, 3560, 3561, 3561, 3561, 3561,
  /*  1292 */ 3561, 8995, 3561, 3561, 3561, 3561, 3561, 3561, 4501, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1309 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1326 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1343 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3560, 3561, 3561, 3561, 3561, 3561, 7270, 3561, 3561,
  /*  1360 */ 3561, 3561, 3561, 3561, 3539, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 4521, 3561, 3561,
  /*  1377 */ 4540, 3561, 7412, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1394 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561,
  /*  1411 */ 3561, 3561, 4379, 8923, 3560, 3561, 3561, 5431, 4380, 4380, 5718, 3561, 3561, 3561, 5220, 4380, 4380,
  /*  1428 */ 4576, 3561, 3561, 5223, 4380, 10653, 3561, 3561, 8112, 4380, 5430, 8824, 8105, 5213, 8169, 9926, 10268,
  /*  1445 */ 9618, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561,
  /*  1462 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561, 3561, 3561, 4379, 8923,
  /*  1479 */ 4599, 3561, 3561, 5431, 4380, 4380, 5718, 3561, 3561, 3561, 5220, 4380, 4380, 4620, 3561, 3561, 5223,
  /*  1496 */ 4380, 10653, 3561, 3561, 8112, 4380, 5430, 8824, 8105, 5213, 8169, 9926, 10268, 9618, 7741, 10454, 9621,
  /*  1513 */ 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1530 */ 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561, 3561, 3561, 4379, 8923, 3560, 3561, 3561, 5431,
  /*  1547 */ 4380, 4380, 6932, 3561, 3561, 3561, 5220, 4380, 4380, 4651, 3561, 3561, 5223, 4380, 5998, 3561, 3561,
  /*  1564 */ 8112, 4380, 3561, 8824, 8105, 4766, 8169, 9926, 10268, 9618, 7741, 10454, 9621, 8742, 10459, 8312, 8273,
  /*  1581 */ 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1598 */ 3561, 3561, 6166, 3561, 3561, 3561, 3561, 4379, 8923, 3560, 3561, 3561, 5431, 4380, 4380, 6932, 3561,
  /*  1615 */ 3561, 3561, 5220, 4380, 4380, 4671, 3561, 3561, 5223, 4380, 5998, 3561, 3561, 8112, 4380, 4603, 8824,
  /*  1632 */ 8105, 4766, 8169, 9926, 10268, 9618, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903,
  /*  1649 */ 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1666 */ 3561, 3561, 3561, 3561, 3561, 4694, 3561, 3561, 3561, 3561, 3561, 7270, 3561, 3561, 3561, 3561, 3561,
  /*  1683 */ 3561, 3539, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1700 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1717 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561, 10809, 3561, 4379,
  /*  1734 */ 8923, 3560, 3561, 3561, 5431, 4380, 4380, 6932, 3561, 3561, 3561, 10312, 4380, 4380, 4651, 3561, 4962,
  /*  1751 */ 5223, 4931, 5998, 3561, 3561, 8156, 4380, 4711, 4733, 10927, 4782, 4747, 4805, 10268, 4840, 7741, 10454,
  /*  1768 */ 9621, 8701, 4888, 5893, 4910, 4947, 10401, 8301, 4983, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1785 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 5010, 3561, 3561, 3969, 5043, 5058, 5066, 3588, 6167, 9445,
  /*  1802 */ 5082, 5119, 5130, 5146, 3561, 5472, 3561, 5220, 4380, 4380, 5183, 10994, 9508, 10681, 5199, 5418, 7440,
  /*  1819 */ 3561, 10241, 5239, 5746, 8824, 10518, 6296, 8169, 9290, 5264, 9618, 7779, 10454, 4894, 8742, 10459, 8312,
  /*  1836 */ 8273, 5301, 5336, 5374, 6585, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1853 */ 3561, 3561, 3561, 5447, 3561, 3561, 3561, 3561, 5488, 5492, 3560, 3561, 3561, 5431, 4380, 4380, 5718,
  /*  1870 */ 3561, 4655, 7471, 5220, 6441, 4380, 4576, 10987, 3561, 11013, 4380, 10653, 3561, 3561, 8112, 4380, 5430,
  /*  1887 */ 9960, 8105, 10255, 8169, 10797, 10268, 9618, 7741, 10454, 9621, 10560, 10459, 8312, 8273, 8323, 10401,
  /*  1903 */ 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  1920 */ 5508, 3561, 3561, 3561, 5555, 5574, 5587, 3560, 3561, 3561, 5431, 4380, 4380, 5718, 9540, 5603, 3561,
  /*  1937 */ 5220, 5627, 5670, 5694, 4553, 6772, 5223, 9104, 5734, 3561, 5762, 5780, 5796, 5430, 8577, 8850, 5213,
  /*  1954 */ 5812, 5839, 10268, 5867, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 7180, 10401, 8301, 8903, 6028, 3561,
  /*  1971 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 5909, 3561, 3561, 5925,
  /*  1988 */ 5764, 5943, 5957, 3560, 3561, 3561, 5431, 4380, 4380, 5718, 3561, 5973, 3561, 5220, 4380, 5994, 4576,
  /*  2005 */ 3561, 3561, 5223, 4380, 10653, 10092, 3561, 8112, 4380, 5430, 9684, 8105, 5213, 8169, 9926, 6014, 9618,
  /*  2022 */ 7741, 10454, 9621, 8742, 10459, 8180, 8273, 6052, 10401, 8301, 6089, 5350, 3561, 3561, 3561, 3561, 3561,
  /*  2039 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 6116, 3561, 3561, 9261, 6135, 6151, 6183,
  /*  2056 */ 4258, 6199, 6218, 5248, 6472, 8533, 6036, 4695, 3561, 6557, 9043, 6240, 4620, 6263, 3635, 6282, 9385,
  /*  2073 */ 6326, 7970, 6366, 7322, 6388, 6338, 6457, 7145, 5641, 5882, 10488, 6523, 6573, 6612, 10004, 6628, 9205,
  /*  2090 */ 10459, 7078, 6683, 6719, 6750, 6788, 4852, 6764, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2107 */ 3561, 3561, 3561, 3561, 3561, 6166, 6816, 3561, 6837, 6878, 6893, 6907, 3560, 9302, 6202, 5431, 4277,
  /*  2124 */ 6923, 6948, 3561, 7350, 6978, 10953, 10163, 7013, 7044, 3561, 3561, 5223, 4380, 10653, 3561, 3561, 7211,
  /*  2141 */ 4380, 5430, 8824, 8105, 5213, 7067, 7094, 5654, 7122, 6800, 10454, 9621, 7169, 10459, 4994, 8273, 8223,
  /*  2158 */ 7196, 8878, 7134, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2175 */ 3561, 6166, 5466, 3561, 3561, 5457, 7241, 7245, 3560, 3561, 3561, 5431, 4380, 4380, 6932, 3561, 6119,
  /*  2192 */ 8458, 5220, 4380, 4380, 7261, 3561, 3561, 5223, 4380, 10211, 3561, 3561, 11146, 4380, 3561, 8824, 8105,
  /*  2209 */ 4766, 7304, 7338, 10268, 7375, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350,
  /*  2226 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561,
  /*  2243 */ 3561, 3561, 4379, 8923, 3560, 3561, 5611, 5431, 5103, 7391, 10692, 3561, 3561, 3561, 5220, 4380, 4380,
  /*  2260 */ 4651, 3561, 3561, 5223, 4380, 5998, 7407, 4817, 8112, 9860, 3561, 8824, 8105, 4766, 8169, 7428, 10268,
  /*  2277 */ 9618, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561,
  /*  2294 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 7465, 6988, 3561, 4194, 7487, 7502, 7514,
  /*  2311 */ 7530, 7549, 4967, 5431, 4380, 4380, 9080, 3561, 3561, 3561, 5220, 4380, 6507, 4651, 3561, 3561, 9071,
  /*  2328 */ 4380, 5998, 3561, 3561, 10349, 4380, 3561, 7611, 8105, 4766, 7571, 7599, 7627, 7667, 7704, 7730, 7767,
  /*  2345 */ 7805, 9913, 8312, 8273, 9243, 10429, 9712, 8079, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2362 */ 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561, 3561, 3561, 4379, 8923, 3560, 3561, 3561, 5431,
  /*  2379 */ 4380, 4380, 6932, 3561, 3561, 3561, 5220, 4380, 4380, 4651, 3561, 3561, 5223, 4380, 5998, 7832, 3561,
  /*  2396 */ 8112, 7849, 3561, 8824, 8105, 4766, 8169, 9926, 10268, 9618, 7741, 10454, 9621, 8742, 10459, 8312, 8273,
  /*  2413 */ 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2430 */ 3561, 3561, 6166, 3931, 3561, 3561, 3561, 7870, 7881, 8420, 7897, 3561, 4466, 6487, 6423, 7919, 3561,
  /*  2447 */ 3561, 3561, 3796, 6433, 9394, 4651, 7945, 7967, 10201, 4924, 7986, 7903, 6067, 7688, 6402, 9326, 9165,
  /*  2464 */ 8105, 4766, 8014, 8042, 8058, 11174, 7583, 8095, 9621, 8128, 8196, 8212, 7639, 6310, 8239, 8689, 8289,
  /*  2481 */ 8339, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3857,
  /*  2498 */ 3561, 5019, 10702, 8363, 8367, 3560, 5531, 3561, 5431, 4380, 4380, 6932, 3561, 8383, 3561, 5220, 6698,
  /*  2515 */ 4380, 4651, 8402, 3561, 7789, 6247, 5998, 5558, 3561, 8112, 10123, 3561, 8824, 8105, 4766, 8169, 9926,
  /*  2532 */ 10268, 9618, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8436, 8903, 5350, 3561, 3561, 3561,
  /*  2549 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 8452, 3561, 3561, 3561, 4173, 8474,
  /*  2566 */ 8480, 8496, 3561, 3561, 3641, 8519, 6413, 8562, 3816, 3561, 8619, 5709, 4380, 7028, 4651, 3561, 8640,
  /*  2583 */ 5223, 10901, 6703, 3561, 4524, 6643, 10631, 3561, 8663, 4863, 9932, 8717, 9926, 8758, 8798, 8814, 8840,
  /*  2600 */ 8866, 8742, 9597, 8312, 8894, 9216, 10401, 9193, 10289, 10732, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2617 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 5927, 3561, 8949, 3561, 4442, 5678, 3560, 4217, 3561,
  /*  2634 */ 6266, 9658, 8919, 8939, 8972, 9011, 3561, 4789, 9029, 9042, 4651, 9059, 3561, 9649, 9096, 5998, 3561,
  /*  2651 */ 3561, 8112, 4380, 3561, 4355, 8105, 4766, 8169, 9926, 9120, 9136, 9155, 8603, 9181, 9232, 10548, 8312,
  /*  2668 */ 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2685 */ 3561, 3561, 3561, 6166, 3562, 3561, 5358, 5522, 4379, 7225, 3560, 3561, 3561, 5431, 4380, 4380, 6932,
  /*  2702 */ 6372, 3561, 9259, 5220, 5097, 4418, 4671, 7951, 3561, 7714, 7153, 5998, 3561, 3561, 8112, 4380, 4603,
  /*  2719 */ 8824, 8105, 4766, 8169, 9926, 10268, 9618, 7741, 9277, 9139, 8742, 8732, 8312, 8273, 8323, 10401, 8301,
  /*  2736 */ 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166,
  /*  2753 */ 3561, 3561, 3561, 3561, 4379, 8923, 3560, 3561, 3561, 6821, 4380, 4380, 6932, 3561, 3561, 3561, 5220,
  /*  2770 */ 4380, 4380, 4651, 3561, 3561, 5223, 4380, 5998, 3561, 3561, 8112, 4380, 3561, 8824, 10342, 4766, 8169,
  /*  2787 */ 9926, 10268, 9618, 7741, 10454, 9621, 8742, 10459, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561,
  /*  2804 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 9318, 7449, 8986,
  /*  2821 */ 9342, 9354, 7279, 3561, 4583, 4717, 9370, 9419, 9435, 9469, 6862, 3561, 5027, 9403, 9487, 9531, 3561,
  /*  2838 */ 9564, 5223, 4380, 5998, 8782, 8386, 10961, 4380, 3787, 7998, 8105, 9582, 8677, 9637, 10268, 9618, 9674,
  /*  2855 */ 10454, 9700, 8026, 9612, 6100, 10373, 8323, 10857, 8301, 5285, 9740, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2872 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 9785, 9013, 9774, 9810, 9815, 3560, 3561,
  /*  2889 */ 4237, 5431, 4380, 4380, 6932, 4678, 9515, 9515, 5220, 4380, 10151, 4651, 7533, 9749, 5223, 4380, 9831,
  /*  2906 */ 3561, 3561, 8112, 4380, 3561, 8824, 9876, 4766, 9899, 9948, 10268, 9976, 7741, 8265, 9992, 8742, 10459,
  /*  2923 */ 6596, 8273, 10571, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  2940 */ 3561, 3561, 3561, 3561, 6166, 3561, 7929, 3605, 6962, 10020, 10032, 3560, 9548, 10048, 5431, 10170, 10064,
  /*  2957 */ 6657, 10083, 6852, 6547, 5404, 10116, 10139, 4651, 3561, 3561, 9843, 4380, 5998, 3561, 10186, 9883, 4412,
  /*  2974 */ 9758, 10227, 4074, 10305, 8591, 9926, 10268, 10328, 7741, 10365, 10389, 10417, 10445, 10475, 10280, 8323,
  /*  2990 */ 10504, 10534, 10882, 6537, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3007 */ 3561, 6166, 3561, 3561, 3561, 3561, 10587, 10591, 3560, 4035, 5851, 10609, 4380, 9852, 6932, 3561, 3561,
  /*  3024 */ 3561, 5220, 4380, 4380, 4651, 3836, 10607, 10625, 10647, 10669, 3561, 3561, 8112, 4380, 3561, 8824, 7681,
  /*  3041 */ 4766, 8169, 9926, 10718, 9618, 7741, 10454, 10756, 8742, 10459, 5823, 8273, 7816, 10768, 8301, 10784,
  /*  3057 */ 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561,
  /*  3074 */ 3561, 3561, 7359, 4379, 8923, 3560, 3561, 3561, 5431, 4380, 4380, 6932, 3561, 3561, 3561, 5220, 4380,
  /*  3091 */ 4380, 4651, 3561, 3561, 5223, 4380, 5998, 3561, 3561, 8112, 4380, 3561, 8824, 8105, 4766, 8169, 9926,
  /*  3108 */ 10831, 9618, 7741, 10454, 9621, 8742, 10459, 8312, 10873, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561,
  /*  3125 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561, 3561, 3561, 4379,
  /*  3142 */ 8923, 3560, 3561, 3561, 5431, 4380, 4380, 6932, 3561, 3561, 3561, 5220, 4380, 4380, 4651, 3561, 3561,
  /*  3159 */ 5223, 4380, 5998, 3561, 3561, 8112, 10898, 3561, 8824, 8105, 4766, 8169, 9926, 10268, 9618, 7741, 10917,
  /*  3176 */ 9621, 8742, 10459, 10845, 5276, 8323, 10401, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3193 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166, 3561, 3561, 3561, 3561, 4379, 8923, 10943, 10977, 3561,
  /*  3210 */ 9453, 6502, 11113, 6932, 3561, 3561, 3561, 11010, 4380, 4380, 4651, 3561, 7555, 11029, 4380, 5998, 3561,
  /*  3227 */ 3561, 8112, 4380, 11051, 8824, 8105, 4766, 8169, 9926, 10268, 9618, 7741, 10454, 9621, 8742, 10459, 8312,
  /*  3244 */ 8273, 8323, 11069, 8301, 8903, 5350, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3261 */ 3561, 3561, 3561, 6166, 3561, 3561, 3561, 3561, 4379, 8923, 3560, 3561, 4559, 4560, 4380, 4381, 9498,
  /*  3278 */ 3561, 3561, 11085, 11103, 4326, 4380, 4651, 3561, 3561, 5223, 4380, 7854, 3561, 3561, 8143, 10067, 6073,
  /*  3295 */ 8824, 11139, 4766, 8169, 9926, 10268, 9618, 7741, 10454, 9621, 9724, 10459, 8253, 8070, 8323, 10401, 8301,
  /*  3312 */ 8903, 8772, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 6166,
  /*  3329 */ 3561, 3561, 3561, 3561, 4379, 8923, 3560, 3561, 3561, 5431, 4380, 4380, 6932, 3561, 3561, 3561, 5220,
  /*  3346 */ 4380, 4380, 4651, 3561, 3561, 5223, 4380, 5998, 3561, 3561, 8112, 4380, 3561, 8824, 8105, 4766, 8169,
  /*  3363 */ 9926, 10268, 9618, 7741, 10454, 9621, 11162, 7651, 8312, 8273, 8323, 10401, 8301, 8903, 5350, 3561, 3561,
  /*  3380 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3397 */ 3561, 3561, 3560, 3561, 3561, 3561, 3561, 3561, 8411, 3561, 3561, 3561, 3561, 3561, 3561, 3539, 3561,
  /*  3414 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3431 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3448 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 5978, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3465 */ 3561, 3561, 3561, 3561, 8347, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3482 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3499 */ 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561, 3561,
  /*  3516 */ 3561, 3561, 3561, 3561, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 2157,
  /*  3533 */ 2157, 2157, 2157, 0, 0, 0, 0, 0, 0, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 113, 0, 0, 0, 113, 0, 0,
  /*  3563 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 113, 0, 0, 0, 0, 113, 113, 113, 113, 113, 0, 0, 0, 0, 0,
  /*  3594 */ 223, 0, 0, 0, 227, 228, 229, 230, 231, 0, 5120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 10240,
  /*  3622 */ 10240, 0, 0, 0, 0, 0, 0, 0, 10240, 0, 0, 10240, 10240, 0, 0, 0, 0, 0, 148480, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  3650 */ 0, 276, 0, 0, 0, 0, 176, 0, 0, 10240, 0, 0, 0, 0, 10240, 0, 10240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10240, 0, 0,
  /*  3679 */ 10240, 0, 10240, 110, 110, 110, 110, 110, 11374, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110,
  /*  3699 */ 110, 110, 110, 110, 110, 11374, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 11374, 11374,
  /*  3718 */ 11374, 11374, 110, 11374, 11374, 11374, 11374, 110, 11374, 11374, 11374, 110, 110, 110, 110, 110, 11374,
  /*  3735 */ 110, 11374, 11374, 110, 110, 110, 110, 110, 110, 110, 11374, 110, 110, 11374, 11374, 11374, 11374, 110,
  /*  3753 */ 110, 110, 11374, 11374, 11374, 11374, 11374, 110, 110, 0, 0, 0, 0, 0, 12288, 0, 0, 0, 0, 0, 0, 12288,
  /*  3775 */ 12288, 0, 12288, 0, 0, 0, 0, 12288, 12288, 12288, 12288, 12288, 0, 0, 0, 0, 0, 0, 539, 0, 0, 0, 0, 0, 0,
  /*  3800 */ 0, 0, 0, 373, 9590, 176, 176, 176, 378, 176, 176, 176, 0, 0, 0, 2157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  3828 */ 342, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 429, 0, 0, 432, 113, 0, 0, 219, 219, 0, 0,
  /*  3859 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 141, 142, 0, 0, 281, 281, 462, 281, 281, 281, 281, 281, 281, 281, 281,
  /*  3884 */ 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 0, 0,
  /*  3906 */ 0, 0, 0, 281, 0, 281, 281, 281, 281, 281, 507, 508, 281, 281, 0, 281, 281, 0, 281, 281, 281, 216, 0, 0,
  /*  3930 */ 413, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 139, 0, 0, 0, 0, 0, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281,
  /*  3957 */ 281, 566, 281, 281, 281, 281, 281, 281, 281, 216, 217, 113, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0,
  /*  3983 */ 121, 0, 281, 281, 281, 281, 608, 0, 281, 281, 281, 281, 281, 281, 0, 0, 0, 0, 0, 0, 12288, 0, 0, 0, 0, 0,
  /*  4009 */ 0, 0, 0, 0, 113, 0, 0, 0, 0, 0, 0, 281, 0, 0, 281, 281, 281, 281, 0, 281, 281, 281, 281, 281, 281, 281, 0,
  /*  4036 */ 0, 0, 0, 237, 0, 0, 0, 0, 0, 0, 0, 0, 245, 0, 0, 0, 0, 268, 0, 271, 275, 0, 0, 0, 0, 0, 0, 0, 176, 176,
  /*  4066 */ 176, 176, 9590, 9590, 176, 176, 9590, 0, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 125104, 565,
  /*  4085 */ 176, 176, 176, 176, 106672, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 0, 281, 281, 281, 281,
  /*  4106 */ 281, 281, 594, 595, 281, 0, 600, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 0, 0, 0, 0,
  /*  4129 */ 0, 0, 0, 0, 0, 281, 0, 0, 6258, 7284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10240, 0, 0, 10240, 6258, 0, 0,
  /*  4158 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6258, 6258, 6258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 174,
  /*  4189 */ 113, 6258, 7284, 7285, 7285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 0, 0, 0, 0, 176, 176, 176, 216, 7493,
  /*  4215 */ 7494, 7495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 241, 242, 0, 244, 0, 0, 0, 0, 0, 6258, 7285, 0, 0, 0, 0, 0, 0, 0,
  /*  4244 */ 0, 0, 0, 0, 0, 13312, 0, 0, 0, 113, 6258, 7285, 7285, 7285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0,
  /*  4273 */ 0, 176, 176, 384, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 84144, 0,
  /*  4294 */ 264, 0, 0, 0, 269, 272, 261, 0, 0, 0, 0, 278, 0, 0, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 0,
  /*  4318 */ 176, 9590, 9590, 9590, 116086, 176, 176, 291, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  4338 */ 176, 176, 396, 176, 176, 291, 176, 176, 176, 176, 176, 216, 217, 113, 7493, 7494, 7495, 0, 0, 0, 0, 0,
  /*  4360 */ 9760, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 176, 367, 0, 0, 0, 0, 0, 0, 0, 0, 176, 176, 176,
  /*  4383 */ 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 317, 0, 265, 0, 0, 0, 270, 273, 262, 0,
  /*  4406 */ 0, 0, 0, 0, 0, 0, 176, 176, 176, 176, 176, 527, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  4429 */ 176, 407, 176, 176, 176, 0, 0, 72704, 0, 0, 0, 0, 0, 0, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  4453 */ 201, 176, 176, 176, 176, 0, 0, 0, 216, 0, 0, 0, 414, 0, 0, 0, 0, 0, 0, 0, 0, 233, 0, 0, 0, 0, 0, 0, 176,
  /*  4482 */ 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 216, 217, 0, 0, 0, 0, 324,
  /*  4505 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82944, 0, 0, 0, 0, 0, 15360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  4538 */ 100352, 501, 0, 0, 0, 15360, 0, 0, 0, 0, 0, 0, 0, 0, 107520, 0, 0, 0, 0, 0, 68608, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  4567 */ 0, 0, 258, 0, 0, 0, 0, 0, 176, 176, 176, 176, 216, 0, 0, 7495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0,
  /*  4597 */ 0, 0, 113, 0, 0, 220, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 176, 176, 176, 216, 220, 0,
  /*  4626 */ 7495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 281, 0,
  /*  4651 */ 176, 176, 176, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134144, 355, 0, 0, 176, 176, 176, 216, 0, 0, 220,
  /*  4678 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 339, 0, 0, 0, 0, 0, 0, 218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 356,
  /*  4711 */ 0, 0, 0, 536, 537, 538, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 0, 0, 0, 0, 176, 0, 542, 0, 0, 0, 9590, 176,
  /*  4740 */ 546, 176, 176, 9590, 9590, 176, 176, 9590, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 9590, 176,
  /*  4759 */ 9817, 9590, 9590, 9590, 176, 176, 0, 176, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9590, 176,
  /*  4783 */ 571, 176, 176, 176, 176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9590, 176, 176, 176, 176, 176, 380, 176, 9820, 9590,
  /*  4807 */ 9590, 607, 176, 9590, 176, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 0, 45554, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  4833 */ 6258, 7284, 0, 0, 0, 0, 3184, 9590, 9590, 9590, 9857, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  4852 */ 9590, 9590, 176, 9590, 9590, 176, 176, 9590, 9998, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  4870 */ 9590, 121396, 176, 176, 176, 176, 176, 176, 176, 216, 217, 113, 7493, 7494, 7495, 0, 0, 0, 9590, 9920,
  /*  4890 */ 176, 706, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 689, 9590, 9590,
  /*  4908 */ 9590, 9590, 727, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9947, 9590, 176, 9949, 9950, 176, 176, 176,
  /*  4927 */ 176, 176, 176, 466, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 470, 176, 176, 176, 176, 0,
  /*  4948 */ 9953, 9590, 9590, 9590, 9590, 176, 176, 176, 9590, 9590, 749, 9590, 9590, 176, 0, 0, 0, 0, 436, 0, 0, 0,
  /*  4970 */ 0, 0, 0, 0, 0, 0, 0, 0, 259, 0, 0, 0, 0, 9590, 9590, 176, 9995, 9590, 176, 176, 9590, 9590, 9590, 9590,
  /*  4994 */ 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 0, 9590, 9590, 9590, 9942, 3184, 0, 0, 0,
  /*  5014 */ 0, 0, 0, 120, 121, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 0, 0, 0, 9590, 176, 376, 176, 176, 176, 176,
  /*  5042 */ 176, 0, 121, 0, 0, 0, 121, 0, 0, 121, 0, 0, 0, 0, 0, 0, 171, 177, 177, 177, 177, 177, 177, 177, 177, 177,
  /*  5068 */ 177, 177, 177, 177, 177, 177, 209, 177, 209, 213, 0, 0, 0, 3184, 263, 0, 0, 267, 0, 0, 0, 0, 0, 267, 0, 0,
  /*  5094 */ 0, 0, 0, 176, 176, 176, 176, 176, 104624, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 299,
  /*  5116 */ 176, 176, 176, 176, 176, 285, 286, 176, 176, 176, 176, 176, 176, 176, 176, 298, 176, 176, 176, 298, 176,
  /*  5137 */ 176, 176, 176, 286, 313, 176, 315, 176, 298, 176, 176, 320, 176, 176, 176, 298, 216, 217, 113, 0, 0, 7495,
  /*  5159 */ 0, 0, 0, 0, 0, 74752, 0, 0, 0, 176, 176, 176, 176, 176, 176, 176, 176, 176, 0, 176, 176, 0, 176, 176, 176,
  /*  5184 */ 176, 176, 216, 0, 0, 7495, 0, 0, 416, 0, 0, 0, 0, 0, 49152, 460, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  5208 */ 176, 176, 176, 176, 471, 176, 176, 176, 176, 176, 176, 7703, 0, 0, 0, 0, 0, 0, 0, 0, 9590, 176, 176, 176,
  /*  5232 */ 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 526, 176, 176, 176, 176, 529, 176, 176, 176, 176, 176,
  /*  5253 */ 176, 176, 176, 293, 176, 295, 296, 176, 176, 176, 176, 0, 0, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  5273 */ 9590, 632, 176, 176, 176, 176, 9590, 9590, 9590, 95606, 9590, 9590, 9590, 9590, 176, 9590, 9590, 176, 176,
  /*  5292 */ 9590, 9590, 9590, 9590, 176, 9590, 10003, 9590, 9590, 0, 9590, 9590, 9956, 9590, 9590, 176, 176, 176,
  /*  5310 */ 9590, 9590, 176, 9590, 9590, 176, 0, 0, 0, 0, 10240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10240, 10240, 10240,
  /*  5335 */ 10240, 9590, 9969, 9590, 9590, 9590, 9590, 9590, 759, 176, 176, 9590, 9590, 176, 9590, 176, 9590, 9590,
  /*  5353 */ 9590, 176, 9590, 176, 176, 0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 144, 9590, 9590, 29046, 9985,
  /*  5378 */ 9590, 9590, 176, 176, 9590, 9590, 176, 176, 9590, 9590, 24950, 9590, 0, 0, 9590, 9590, 9590, 9590, 0,
  /*  5397 */ 9590, 9590, 9590, 9590, 9590, 9590, 176, 0, 0, 0, 0, 369, 0, 0, 0, 9590, 176, 176, 176, 176, 379, 176,
  /*  5419 */ 176, 176, 176, 176, 476, 176, 176, 176, 176, 479, 176, 7649, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  5446 */ 176, 3184, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 0, 0, 0,
  /*  5478 */ 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 178, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191,
  /*  5503 */ 191, 0, 0, 0, 3184, 3184, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 124, 125, 126, 0, 0, 0, 0, 144, 0, 0, 0, 144, 0,
  /*  5532 */ 0, 0, 0, 0, 0, 0, 239, 0, 0, 0, 0, 0, 0, 0, 0, 12288, 0, 0, 0, 0, 12288, 0, 0, 0, 0, 161, 0, 0, 0, 0, 0,
  /*  5563 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 108544, 0, 0, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179,
  /*  5588 */ 179, 179, 204, 179, 179, 179, 179, 179, 179, 179, 204, 0, 0, 0, 3184, 346, 0, 0, 0, 0, 0, 0, 109568, 0, 0,
  /*  5613 */ 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 176, 176, 176, 385, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  5639 */ 176, 385, 176, 176, 176, 176, 176, 176, 7703, 0, 0, 0, 51200, 0, 0, 0, 0, 9590, 9590, 9590, 9590, 9590,
  /*  5661 */ 9590, 9590, 9590, 176, 176, 176, 176, 44208, 9590, 398, 176, 176, 176, 176, 176, 176, 403, 176, 176, 176,
  /*  5681 */ 176, 176, 176, 176, 176, 176, 176, 212, 176, 0, 0, 0, 3184, 176, 176, 176, 216, 0, 0, 7495, 0, 0, 0, 417,
  /*  5705 */ 418, 419, 420, 421, 0, 0, 0, 0, 58368, 0, 372, 0, 9590, 176, 176, 176, 176, 176, 176, 176, 216, 217, 113,
  /*  5728 */ 0, 0, 7495, 0, 0, 0, 176, 176, 176, 474, 176, 176, 176, 176, 176, 176, 176, 176, 7649, 0, 0, 0, 0, 0, 0,
  /*  5753 */ 0, 0, 0, 0, 0, 0, 0, 0, 540, 0, 495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 9718, 176, 176,
  /*  5783 */ 176, 176, 176, 176, 176, 176, 176, 9590, 176, 176, 9731, 176, 522, 523, 176, 176, 176, 176, 176, 176, 176,
  /*  5804 */ 176, 176, 176, 176, 176, 176, 176, 534, 9796, 587, 176, 176, 176, 9590, 9590, 176, 176, 9590, 9590, 176,
  /*  5824 */ 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 0, 9590, 23926, 9590, 9590, 9590, 9590, 9590,
  /*  5842 */ 176, 176, 9825, 176, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 253, 0, 0, 0, 0, 0, 0, 14336, 0, 0, 253,
  /*  5867 */ 9590, 9854, 9590, 9590, 9590, 9590, 9590, 9861, 9590, 9590, 115062, 9590, 9590, 9590, 652, 9590, 176, 176,
  /*  5885 */ 176, 591, 9590, 9590, 176, 176, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 720,
  /*  5904 */ 0, 9590, 9590, 9939, 9590, 3184, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 128, 0, 128, 0, 0, 0, 0, 0,
  /*  5932 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
  /*  5957 */ 180, 180, 203, 180, 180, 180, 180, 180, 180, 180, 180, 180, 0, 0, 0, 3184, 0, 0, 0, 349, 0, 0, 0, 0, 0, 0,
  /*  5983 */ 0, 0, 0, 0, 0, 0, 4096, 0, 0, 0, 0, 176, 176, 176, 56496, 176, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  6007 */ 176, 176, 176, 0, 0, 0, 0, 0, 0, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 635, 176,
  /*  6029 */ 9590, 9590, 9590, 176, 9590, 792, 176, 0, 0, 0, 0, 0, 0, 0, 0, 338, 0, 0, 341, 0, 0, 0, 345, 0, 9590,
  /*  6054 */ 9954, 9590, 9590, 9590, 176, 176, 176, 9590, 9590, 176, 9590, 9966, 176, 0, 0, 0, 0, 67584, 0, 0, 0, 0, 0,
  /*  6077 */ 0, 0, 0, 0, 0, 0, 92160, 0, 0, 0, 0, 0, 9590, 32118, 176, 9590, 9590, 780, 176, 9590, 9590, 9590, 9590,
  /*  6100 */ 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 721, 9590, 9590, 9590, 9590, 129, 130, 131,
  /*  6119 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143360, 0, 172, 181, 181, 181, 181, 181, 181, 181, 181, 199,
  /*  6145 */ 181, 181, 181, 181, 199, 181, 202, 181, 181, 181, 181, 181, 202, 202, 202, 202, 202, 181, 0, 0, 0, 3184,
  /*  6167 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 247, 113, 0, 0, 220, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 232,
  /*  6199 */ 248, 249, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 260, 0, 0, 0, 0, 266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  6231 */ 0, 0, 176, 176, 176, 176, 176, 176, 176, 176, 176, 399, 176, 176, 176, 381, 176, 176, 176, 176, 176, 176,
  /*  6253 */ 176, 176, 176, 176, 176, 176, 86192, 176, 176, 176, 0, 0, 55296, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  6279 */ 279, 279, 176, 446, 0, 0, 103424, 0, 9590, 176, 176, 176, 176, 176, 176, 176, 457, 176, 176, 176, 176,
  /*  6300 */ 176, 176, 7703, 573, 574, 0, 0, 0, 0, 577, 0, 9590, 9590, 9590, 9958, 9590, 176, 176, 176, 9590, 9590,
  /*  6321 */ 176, 9590, 9590, 176, 0, 176, 55472, 176, 176, 176, 176, 148656, 176, 176, 176, 176, 176, 7649, 0, 0, 0,
  /*  6342 */ 0, 0, 0, 0, 0, 0, 0, 98304, 0, 0, 0, 0, 0, 281, 449, 281, 281, 281, 281, 281, 281, 281, 281, 459, 0, 0,
  /*  6368 */ 135168, 0, 0, 497, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 340, 0, 0, 0, 344, 0, 176, 524, 176, 176, 176, 176, 176,
  /*  6395 */ 528, 176, 176, 176, 176, 176, 533, 176, 176, 176, 176, 176, 176, 87552, 176, 176, 176, 531, 176, 176, 176,
  /*  6416 */ 176, 176, 176, 308, 176, 176, 308, 176, 176, 176, 176, 176, 176, 288, 176, 176, 311, 176, 176, 176, 176,
  /*  6437 */ 176, 176, 176, 389, 176, 176, 176, 176, 176, 176, 176, 176, 176, 391, 176, 176, 176, 176, 176, 176, 0, 0,
  /*  6459 */ 0, 543, 0, 9590, 176, 176, 176, 176, 9590, 9590, 176, 176, 9770, 176, 176, 176, 176, 306, 176, 176, 176,
  /*  6480 */ 176, 176, 312, 176, 314, 176, 316, 176, 176, 176, 176, 288, 290, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  6501 */ 301, 176, 176, 176, 176, 289, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 408, 176,
  /*  6522 */ 176, 0, 0, 9590, 9590, 9590, 9843, 9590, 9845, 9846, 9847, 176, 176, 41136, 176, 176, 9590, 9590, 9590,
  /*  6541 */ 176, 132470, 176, 123056, 0, 0, 0, 0, 0, 0, 0, 0, 361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 370, 0, 9590, 176, 176,
  /*  6568 */ 176, 176, 176, 176, 381, 9590, 9590, 9590, 9590, 9858, 9859, 9860, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  6586 */ 9590, 176, 9590, 9590, 176, 176, 9997, 9590, 9590, 10000, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  6604 */ 9590, 176, 176, 0, 9590, 22902, 9590, 9590, 9590, 9590, 9874, 9590, 9877, 663, 176, 176, 176, 667, 0, 0,
  /*  6624 */ 0, 147456, 0, 9885, 9590, 9590, 9590, 90486, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9906, 9907,
  /*  6642 */ 9908, 9590, 176, 176, 504, 176, 176, 176, 176, 176, 176, 9590, 176, 176, 9735, 176, 176, 176, 176, 176,
  /*  6662 */ 323, 176, 216, 217, 113, 0, 0, 0, 0, 0, 0, 274, 81920, 0, 0, 0, 0, 0, 0, 0, 176, 176, 176, 729, 9590,
  /*  6687 */ 9590, 9590, 9590, 9590, 97654, 9590, 9590, 176, 9590, 9590, 149680, 176, 176, 176, 176, 386, 176, 176,
  /*  6705 */ 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 0, 0, 483, 0, 736, 9590, 9955, 9957, 9590, 9590, 176,
  /*  6726 */ 176, 176, 9963, 9590, 176, 9590, 9590, 751, 0, 0, 0, 0, 77824, 0, 0, 62464, 0, 0, 0, 362, 363, 0, 0, 366,
  /*  6750 */ 9968, 9590, 9590, 9590, 9590, 9973, 9590, 176, 176, 176, 9590, 9590, 176, 9981, 176, 9590, 9590, 9590,
  /*  6768 */ 791, 9590, 176, 176, 0, 0, 0, 0, 0, 0, 0, 0, 439, 0, 0, 0, 0, 0, 0, 0, 9590, 9984, 9590, 9590, 9590, 9986,
  /*  6794 */ 176, 176, 9590, 9590, 176, 775, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 0, 0, 48128, 0, 0,
  /*  6815 */ 9590, 0, 0, 0, 132, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57344, 0, 0, 0, 176, 0, 0, 0, 156, 133, 0, 0, 0,
  /*  6845 */ 0, 0, 0, 0, 0, 133, 133, 0, 0, 0, 0, 99328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 351, 0, 0, 0, 0, 354, 0, 0,
  /*  6876 */ 0, 0, 0, 133, 0, 162, 0, 133, 133, 162, 133, 166, 162, 162, 162, 162, 133, 133, 176, 176, 176, 176, 176,
  /*  6899 */ 176, 176, 176, 176, 200, 176, 176, 176, 176, 200, 200, 176, 176, 176, 200, 200, 200, 200, 200, 200, 0, 0,
  /*  6921 */ 0, 3184, 176, 176, 84144, 176, 176, 176, 176, 176, 310, 176, 176, 176, 176, 176, 176, 176, 216, 217, 113,
  /*  6942 */ 0, 0, 0, 0, 0, 0, 176, 84144, 176, 321, 176, 176, 176, 216, 217, 113, 0, 0, 7495, 7168, 0, 0, 0, 0, 155,
  /*  6967 */ 0, 164, 0, 155, 0, 0, 0, 0, 0, 170, 0, 0, 0, 0, 360, 0, 0, 0, 0, 0, 110592, 0, 0, 0, 0, 0, 0, 135, 136,
  /*  6996 */ 137, 0, 0, 0, 0, 0, 0, 0, 216, 217, 113, 0, 326, 0, 0, 0, 0, 176, 110979, 176, 176, 176, 401, 176, 176,
  /*  7021 */ 176, 110979, 176, 387, 176, 176, 7344, 176, 176, 176, 176, 400, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  7041 */ 176, 176, 7577, 410, 176, 176, 216, 0, 0, 7495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6258, 6258, 6258, 0, 0, 0, 0,
  /*  7067 */ 9797, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  7086 */ 142710, 176, 176, 0, 9590, 9590, 9590, 9941, 9590, 9590, 9590, 176, 176, 9826, 176, 176, 176, 176, 176,
  /*  7105 */ 176, 0, 0, 0, 0, 0, 281, 545, 281, 281, 281, 0, 0, 281, 281, 281, 555, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  7128 */ 9590, 9862, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590, 9590, 176, 124080, 9590, 9590, 9590, 9590, 176,
  /*  7146 */ 9590, 9590, 9590, 9590, 9590, 9590, 9779, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 91312, 176,
  /*  7165 */ 176, 176, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 146608, 176, 176, 176, 48304, 0, 9590, 9590, 9590,
  /*  7184 */ 9590, 9590, 176, 176, 746, 9590, 9590, 176, 9590, 9590, 176, 0, 9590, 9590, 9590, 9590, 9972, 9590, 9590,
  /*  7203 */ 176, 176, 176, 9590, 9590, 176, 9590, 47280, 9590, 176, 36016, 176, 176, 176, 176, 176, 176, 176, 9590,
  /*  7222 */ 176, 176, 9733, 176, 176, 176, 176, 176, 206, 176, 176, 176, 176, 176, 206, 0, 0, 0, 3184, 0, 182, 182,
  /*  7244 */ 182, 182, 182, 182, 182, 182, 182, 182, 182, 182, 182, 182, 182, 0, 0, 0, 3184, 176, 176, 176, 216, 0, 0,
  /*  7267 */ 0, 0, 415, 0, 0, 0, 0, 0, 0, 0, 216, 217, 113, 0, 0, 0, 0, 0, 0, 0, 225, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0,
  /*  7298 */ 0, 0, 113, 0, 0, 0, 9798, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 9813, 176, 9590, 9590, 9590,
  /*  7319 */ 9590, 9776, 9590, 9590, 176, 176, 176, 176, 176, 176, 176, 176, 176, 9590, 176, 176, 9732, 176, 176, 9590,
  /*  7339 */ 9590, 9590, 176, 176, 9827, 176, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 350, 0, 0, 110592, 0, 0, 0, 0, 0,
  /*  7364 */ 0, 0, 165, 0, 0, 165, 165, 165, 165, 0, 0, 9590, 9590, 9855, 9590, 9590, 9590, 9590, 9863, 9590, 9590,
  /*  7385 */ 9590, 9590, 9590, 9590, 176, 9869, 176, 299, 176, 176, 176, 307, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  7405 */ 176, 299, 0, 45056, 484, 485, 486, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107520, 0, 0, 0, 0, 9590, 9590, 9590,
  /*  7431 */ 176, 176, 9590, 176, 615, 176, 176, 176, 176, 0, 0, 0, 0, 0, 487, 0, 0, 489, 0, 0, 0, 0, 0, 0, 0, 146,
  /*  7457 */ 147, 0, 0, 0, 0, 0, 0, 147, 3184, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 355, 0, 0, 0, 0, 0, 159,
  /*  7488 */ 0, 0, 159, 0, 0, 0, 159, 0, 167, 159, 159, 168, 168, 136, 173, 183, 192, 195, 192, 192, 192, 192, 192,
  /*  7511 */ 192, 192, 192, 192, 192, 192, 192, 195, 192, 192, 192, 192, 192, 210, 195, 0, 0, 0, 3184, 113, 0, 118, 0,
  /*  7534 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 430, 0, 0, 0, 0, 0, 236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 440, 441,
  /*  7567 */ 442, 443, 444, 0, 9799, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 9590, 176, 9590, 9590, 9590, 9590,
  /*  7587 */ 9590, 176, 176, 665, 666, 176, 46080, 668, 0, 0, 46748, 9590, 9590, 9590, 9590, 176, 176, 9828, 176, 176,
  /*  7607 */ 176, 176, 176, 176, 0, 0, 0, 0, 0, 9590, 176, 176, 176, 548, 9590, 9590, 176, 176, 9590, 176, 0, 0, 9590,
  /*  7630 */ 9590, 9842, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 9590, 9590, 94582, 9590, 9590, 9590,
  /*  7648 */ 9590, 117110, 122588, 9590, 9590, 176, 176, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9929,
  /*  7665 */ 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9864, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590,
  /*  7683 */ 9590, 9590, 9775, 9590, 9778, 9590, 176, 176, 176, 176, 176, 176, 176, 176, 176, 9590, 512, 176, 9590,
  /*  7702 */ 176, 176, 9590, 9873, 9590, 9590, 9878, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 9590, 176, 176, 176, 176,
  /*  7724 */ 176, 52400, 176, 176, 176, 176, 9590, 9590, 9590, 9889, 9590, 9590, 9590, 176, 176, 176, 678, 9590, 9590,
  /*  7743 */ 9590, 9590, 9590, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 9590, 176, 176, 176, 176, 0, 0, 176, 176, 9590,
  /*  7766 */ 176, 9590, 9590, 9590, 9590, 9590, 9899, 9590, 9590, 9902, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590,
  /*  7784 */ 176, 664, 176, 176, 176, 0, 0, 0, 0, 0, 9590, 176, 176, 176, 176, 176, 176, 456, 176, 176, 176, 9590,
  /*  7806 */ 9590, 9590, 9912, 9590, 9590, 176, 176, 176, 176, 176, 0, 9590, 9590, 9590, 9590, 9590, 176, 745, 176,
  /*  7825 */ 9590, 9590, 176, 130422, 9590, 176, 0, 33792, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 445, 176, 176,
  /*  7851 */ 176, 176, 33968, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 0, 0, 0, 18432, 0, 184, 193,
  /*  7873 */ 193, 196, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 196, 193, 193, 193, 193, 193, 196, 0, 0,
  /*  7895 */ 0, 3184, 233, 234, 0, 0, 0, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87040, 0, 492, 0, 0, 494, 318, 176, 176,
  /*  7922 */ 176, 176, 176, 176, 216, 217, 113, 0, 0, 0, 0, 0, 0, 151, 152, 153, 154, 155, 0, 0, 0, 0, 0, 422, 0, 0, 0,
  /*  7949 */ 424, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91136, 0, 0, 0, 0, 0, 0, 0, 435, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  7982 */ 0, 493, 0, 0, 176, 176, 473, 176, 176, 176, 176, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 9590, 176, 176,
  /*  8006 */ 176, 549, 9590, 9590, 176, 176, 9590, 176, 9800, 176, 589, 176, 176, 9590, 9590, 176, 176, 9590, 9590,
  /*  8025 */ 176, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 0, 9917, 9590, 9590, 9590, 9590, 9821,
  /*  8044 */ 9590, 176, 176, 9590, 176, 176, 176, 176, 176, 176, 619, 620, 0, 622, 623, 0, 9590, 9590, 9590, 9590,
  /*  8064 */ 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 9590, 93558, 9590, 9590, 9590, 9590, 9590, 9590, 176,
  /*  8082 */ 9590, 9590, 176, 176, 9590, 9590, 9590, 9590, 785, 9590, 9590, 9590, 9590, 9590, 9887, 9590, 9590, 9590,
  /*  8100 */ 9590, 9590, 176, 176, 677, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 176,
  /*  8119 */ 176, 176, 176, 9590, 176, 176, 9590, 176, 176, 9910, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 46779,
  /*  8138 */ 176, 0, 9590, 9590, 20854, 9590, 503, 176, 176, 176, 176, 176, 176, 176, 176, 9590, 176, 176, 9590, 176,
  /*  8158 */ 176, 176, 176, 506, 176, 176, 176, 176, 9590, 176, 176, 9590, 176, 176, 176, 176, 9590, 9590, 176, 176,
  /*  8178 */ 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 0, 9590, 9590, 9590, 9940,
  /*  8196 */ 9590, 9590, 176, 176, 40112, 176, 9590, 9590, 9590, 9590, 9926, 9590, 9590, 9590, 9590, 9931, 716, 9590,
  /*  8214 */ 9590, 9590, 9590, 137590, 9590, 9590, 9590, 719, 176, 0, 9590, 9590, 9590, 9590, 9590, 744, 176, 176,
  /*  8232 */ 9590, 9590, 176, 9590, 9590, 176, 47104, 9590, 9590, 9970, 9590, 9590, 9590, 9590, 176, 760, 176, 9590,
  /*  8250 */ 9590, 176, 9590, 176, 9590, 9590, 9590, 136566, 9590, 9590, 9590, 9590, 176, 176, 0, 9590, 9590, 9590,
  /*  8268 */ 9590, 9590, 9590, 9590, 675, 176, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590,
  /*  8286 */ 9590, 176, 176, 9590, 9590, 38064, 9590, 111990, 176, 176, 9590, 9590, 9999, 9590, 176, 9590, 9590, 9590,
  /*  8304 */ 9590, 9590, 9590, 176, 176, 9590, 9590, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176,
  /*  8322 */ 176, 0, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 9590, 9590, 176, 9590, 9590, 176, 0, 176, 10006,
  /*  8341 */ 9590, 9590, 176, 9590, 176, 176, 0, 0, 0, 0, 0, 0, 0, 0, 2157, 113, 0, 0, 0, 0, 0, 0, 0, 185, 185, 185,
  /*  8367 */ 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 0, 0, 0, 3184, 0, 0, 348, 0, 0, 0, 0, 0, 0, 0,
  /*  8393 */ 0, 0, 0, 0, 0, 0, 499, 0, 0, 0, 53248, 0, 0, 0, 0, 0, 0, 86016, 0, 0, 0, 0, 0, 0, 0, 216, 2157, 113, 0, 0,
  /*  8423 */ 0, 0, 0, 0, 224, 0, 226, 0, 0, 0, 0, 0, 0, 9590, 9590, 9590, 9590, 31094, 9590, 176, 176, 9590, 9590, 176,
  /*  8447 */ 176, 9590, 9590, 9590, 25974, 3184, 0, 0, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143360, 0, 0, 0, 0, 0,
  /*  8474 */ 175, 186, 186, 186, 186, 186, 186, 186, 186, 186, 186, 186, 186, 186, 186, 186, 211, 186, 0, 0, 0, 3184,
  /*  8496 */ 113, 0, 119, 0, 0, 222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6258, 7285, 0, 0, 0, 0, 3184, 282, 176, 176, 176,
  /*  8523 */ 176, 176, 176, 176, 176, 176, 176, 176, 176, 300, 176, 176, 176, 176, 176, 296, 176, 216, 217, 113, 0, 0,
  /*  8545 */ 7495, 0, 0, 0, 0, 0, 79872, 0, 0, 64512, 0, 0, 0, 0, 364, 0, 0, 282, 319, 176, 176, 282, 176, 176, 216,
  /*  8570 */ 217, 113, 0, 0, 0, 0, 7496, 0, 0, 0, 0, 102400, 9590, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 176,
  /*  8593 */ 176, 176, 176, 9590, 9590, 176, 176, 9812, 9815, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176,
  /*  8612 */ 176, 176, 9590, 9590, 9895, 9590, 9590, 0, 0, 359, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12288, 0, 0, 0,
  /*  8639 */ 0, 0, 0, 0, 144384, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73728, 0, 0, 0, 0, 0, 0, 0, 0, 60416, 0, 0, 9590,
  /*  8669 */ 176, 176, 176, 176, 9590, 9590, 552, 176, 9590, 176, 176, 176, 176, 9808, 9809, 176, 176, 9590, 9590, 176,
  /*  8689 */ 9590, 9590, 9590, 9590, 9590, 9590, 176, 39088, 9590, 9989, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  8707 */ 176, 176, 176, 176, 176, 700, 9590, 9590, 9590, 9918, 9801, 588, 176, 590, 176, 9590, 9590, 176, 176,
  /*  8726 */ 9590, 9590, 176, 9590, 9590, 9819, 9590, 9590, 176, 176, 176, 176, 9590, 9590, 9590, 9925, 9590, 9590,
  /*  8744 */ 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 0, 9590, 9590, 9590, 9590, 0, 101376, 9590, 9590, 9590,
  /*  8763 */ 9590, 9844, 9590, 9590, 9590, 176, 176, 176, 176, 176, 9590, 9590, 61814, 176, 9590, 176, 176, 0, 0, 0, 0,
  /*  8784 */ 0, 0, 0, 0, 488, 0, 0, 490, 0, 491, 0, 0, 0, 0, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9866,
  /*  8807 */ 9590, 9590, 9867, 9590, 9590, 176, 9870, 9590, 9590, 9590, 9876, 9590, 176, 176, 176, 176, 176, 0, 0, 0,
  /*  8827 */ 0, 0, 9590, 176, 176, 176, 176, 9590, 9590, 176, 176, 9590, 176, 9590, 9590, 9590, 9590, 26998, 9590,
  /*  8846 */ 9590, 176, 676, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 568, 176,
  /*  8865 */ 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9901, 9590, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590,
  /*  8883 */ 9590, 176, 176, 9590, 9590, 176, 176, 9992, 9590, 9590, 9590, 176, 728, 176, 9590, 9590, 9590, 9590, 9590,
  /*  8902 */ 9590, 9590, 9590, 176, 9590, 9590, 176, 176, 9590, 9590, 9590, 9590, 176, 9590, 9590, 9590, 9590, 302,
  /*  8920 */ 176, 176, 305, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 0, 0, 0, 3184, 176, 176, 294,
  /*  8942 */ 176, 176, 176, 176, 216, 217, 113, 0, 0, 0, 0, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150528, 0, 0, 0, 0,
  /*  8970 */ 0, 0, 0, 331, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 343, 0, 0, 0, 0, 163, 145, 0, 0, 147, 0, 0, 0, 0, 0, 0, 0,
  /*  9002 */ 324, 217, 113, 0, 0, 0, 0, 0, 0, 0, 347, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 176, 383, 176,
  /*  9032 */ 176, 176, 176, 176, 176, 176, 176, 176, 176, 394, 395, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  9053 */ 176, 176, 176, 176, 176, 397, 0, 0, 0, 423, 0, 0, 0, 426, 0, 0, 0, 428, 0, 0, 0, 0, 0, 9590, 176, 176,
  /*  9079 */ 451, 176, 176, 176, 176, 176, 176, 176, 216, 217, 113, 0, 0, 0, 0, 0, 329, 176, 461, 176, 176, 176, 176,
  /*  9102 */ 176, 467, 176, 176, 176, 176, 176, 176, 176, 176, 176, 469, 176, 176, 176, 176, 176, 68784, 0, 0, 9590,
  /*  9123 */ 9841, 9590, 9590, 9590, 9590, 9590, 9590, 176, 633, 176, 176, 176, 9852, 9853, 9590, 9590, 9590, 9590,
  /*  9141 */ 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590, 9590, 9590, 9909, 9872, 9590, 9590, 9590,
  /*  9159 */ 9590, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 9590, 176, 176, 176, 176, 9590, 9590, 176, 553, 9590, 176,
  /*  9181 */ 9590, 9590, 9590, 9590, 9898, 9590, 9590, 9590, 9590, 9903, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  9199 */ 176, 176, 9590, 9590, 774, 176, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 147632, 176, 176, 0, 9590,
  /*  9218 */ 9590, 9590, 9590, 9590, 176, 176, 176, 9590, 9964, 176, 9590, 9590, 176, 0, 9590, 9590, 9911, 9590, 9590,
  /*  9237 */ 9590, 176, 176, 176, 176, 176, 0, 9590, 9590, 9590, 9590, 9959, 176, 176, 176, 9590, 9590, 176, 9590,
  /*  9256 */ 9590, 176, 0, 0, 358, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 169, 172, 9886, 9590, 9590, 9590, 9590,
  /*  9282 */ 9590, 9590, 176, 176, 176, 176, 50550, 54646, 9590, 9590, 9590, 176, 176, 9590, 176, 176, 176, 176, 617,
  /*  9301 */ 176, 0, 0, 0, 0, 0, 0, 83968, 0, 0, 0, 0, 0, 0, 0, 246, 0, 145, 146, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  9332 */ 0, 0, 69632, 0, 0, 0, 0, 0, 0, 0, 0, 187, 187, 187, 187, 197, 187, 187, 187, 187, 187, 197, 187, 187, 187,
  /*  9357 */ 187, 205, 207, 187, 187, 187, 187, 187, 205, 0, 0, 0, 3184, 283, 35100, 176, 287, 176, 176, 176, 176, 176,
  /*  9379 */ 176, 176, 176, 176, 176, 35100, 176, 176, 176, 176, 464, 176, 176, 176, 468, 176, 176, 176, 176, 176, 176,
  /*  9400 */ 176, 176, 378, 176, 176, 176, 176, 176, 176, 176, 176, 390, 176, 392, 393, 176, 176, 176, 176, 176, 303,
  /*  9421 */ 176, 176, 176, 303, 176, 176, 176, 176, 287, 176, 176, 176, 176, 303, 283, 176, 176, 176, 322, 176, 303,
  /*  9442 */ 216, 217, 113, 0, 0, 0, 0, 0, 0, 254, 255, 0, 0, 0, 0, 0, 0, 0, 0, 235, 0, 0, 277, 0, 0, 0, 176, 330, 0,
  /*  9471 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 261, 0, 176, 176, 392, 176, 176, 176, 176, 176, 176, 176, 406,
  /*  9498 */ 176, 176, 176, 176, 176, 176, 317, 216, 217, 113, 0, 0, 0, 0, 0, 0, 437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 352,
  /*  9525 */ 0, 0, 0, 0, 0, 0, 176, 411, 412, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 337, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  9556 */ 240, 0, 0, 0, 0, 0, 0, 0, 433, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 262, 0, 570, 176, 176, 176,
  /*  9586 */ 176, 176, 0, 0, 0, 575, 0, 0, 0, 575, 578, 9590, 9590, 176, 176, 176, 176, 9924, 9590, 9590, 9590, 9590,
  /*  9608 */ 9590, 9590, 9590, 9930, 9590, 9590, 176, 176, 176, 707, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  9626 */ 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 9590, 614,
  /*  9644 */ 176, 176, 176, 618, 176, 0, 0, 0, 0, 0, 9590, 176, 176, 452, 176, 176, 176, 176, 176, 176, 176, 292, 176,
  /*  9667 */ 294, 176, 176, 176, 176, 176, 176, 9590, 9590, 9875, 9590, 9590, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0,
  /*  9689 */ 9590, 176, 176, 176, 176, 9766, 9767, 176, 176, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9900, 9590,
  /*  9708 */ 9590, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590, 771, 176, 9590, 9590, 176, 176, 9590, 9590,
  /*  9726 */ 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 0, 9590, 19830, 9590, 9590, 789, 9590, 9590, 9590, 176,
  /*  9745 */ 9590, 176, 176, 0, 0, 0, 0, 0, 0, 0, 0, 438, 0, 0, 0, 0, 0, 0, 0, 0, 59392, 0, 84992, 0, 0, 106496,
  /*  9771 */ 119808, 126976, 0, 0, 160, 0, 0, 0, 160, 0, 0, 149, 0, 0, 0, 0, 0, 148, 149, 150, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  9799 */ 0, 0, 63488, 0, 0, 78848, 0, 0, 0, 0, 0, 149, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188,
  /*  9823 */ 188, 188, 188, 214, 0, 0, 0, 3184, 472, 176, 176, 176, 176, 176, 176, 176, 176, 478, 176, 176, 0, 0, 0, 0,
  /*  9847 */ 0, 9590, 176, 176, 453, 176, 176, 176, 176, 176, 176, 176, 309, 176, 176, 176, 176, 176, 176, 176, 176,
  /*  9868 */ 176, 45586, 176, 176, 176, 176, 176, 176, 176, 9773, 9590, 9590, 9590, 9777, 9590, 9590, 176, 176, 176,
  /*  9887 */ 176, 176, 176, 176, 176, 176, 9590, 176, 176, 9736, 176, 176, 9802, 176, 176, 176, 176, 9590, 9590, 176,
  /*  9907 */ 176, 9590, 9814, 176, 9590, 9818, 9590, 9590, 176, 176, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590,
  /*  9925 */ 9928, 9590, 9590, 9590, 176, 176, 9590, 176, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9795,
  /*  9948 */ 9590, 9590, 9822, 176, 176, 9829, 176, 176, 176, 176, 176, 176, 0, 0, 0, 0, 0, 9590, 176, 176, 547, 176,
  /*  9970 */ 9590, 9590, 176, 176, 9590, 176, 9590, 9590, 9856, 9590, 9590, 9590, 9590, 9865, 9590, 9590, 9590, 9590,
  /*  9988 */ 9590, 9590, 176, 9871, 76150, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590, 9590,
  /* 10006 */ 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 9590, 9590, 9590, 9896, 9897, 0, 189, 194, 194, 194,
  /* 10025 */ 194, 198, 194, 194, 194, 194, 194, 194, 194, 194, 194, 198, 208, 194, 194, 194, 194, 194, 215, 0, 0, 0,
  /* 10047 */ 3184, 0, 0, 0, 251, 252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 176, 176, 304, 176, 176, 176, 176, 176, 176,
  /* 10073 */ 176, 176, 176, 176, 176, 176, 176, 176, 18935, 176, 0, 0, 332, 333, 334, 335, 336, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 10098 */ 0, 66560, 0, 0, 0, 0, 0, 0, 0, 0, 414, 0, 0, 0, 0, 0, 0, 0, 382, 176, 176, 176, 176, 176, 388, 176, 176,
  /* 10125 */ 176, 176, 176, 176, 176, 176, 176, 176, 176, 108720, 176, 176, 176, 176, 176, 388, 176, 176, 176, 176,
  /* 10145 */ 176, 176, 404, 388, 176, 388, 176, 176, 176, 176, 176, 176, 402, 176, 176, 405, 176, 405, 176, 176, 176,
  /* 10166 */ 176, 176, 176, 387, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 297, 176, 176, 176, 176,
  /* 10186 */ 125952, 0, 0, 496, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 0, 0, 0, 0, 105472, 9590, 176, 176, 176, 42438, 176,
  /* 10212 */ 176, 176, 176, 176, 176, 176, 477, 176, 176, 176, 176, 0, 0, 0, 0, 541, 0, 0, 0, 0, 9590, 176, 176, 176,
  /* 10236 */ 176, 9590, 9590, 176, 176, 9590, 176, 176, 176, 505, 176, 176, 176, 176, 510, 9590, 176, 176, 9730, 176,
  /* 10256 */ 176, 176, 176, 176, 176, 7703, 0, 0, 0, 0, 576, 0, 0, 0, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /* 10278 */ 176, 176, 176, 176, 176, 9590, 9590, 9590, 9590, 96630, 9590, 9590, 9590, 176, 9590, 9590, 176, 176, 9590,
  /* 10297 */ 9590, 9590, 9590, 176, 9590, 9590, 9590, 10004, 176, 176, 119984, 176, 572, 127541, 0, 0, 0, 0, 0, 0, 0,
  /* 10318 */ 0, 0, 9590, 176, 176, 377, 176, 176, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /* 10337 */ 113014, 9590, 9590, 9590, 119158, 176, 9590, 9590, 114038, 9590, 9590, 9590, 9590, 176, 176, 176, 176,
  /* 10354 */ 176, 176, 176, 176, 176, 9590, 176, 176, 9734, 176, 176, 9590, 9590, 22176, 9590, 9590, 9590, 33142, 176,
  /* 10373 */ 176, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590, 9590, 176, 735, 9590, 88438,
  /* 10391 */ 89462, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176,
  /* 10409 */ 176, 176, 9590, 9590, 176, 9590, 176, 9590, 9590, 138614, 9590, 9590, 141686, 9590, 176, 176, 176, 176,
  /* 10427 */ 176, 0, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 9590, 9590, 763, 9590, 176, 9590, 9919,
  /* 10446 */ 9590, 37569, 176, 176, 176, 9590, 71030, 72054, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176,
  /* 10464 */ 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 128717, 9590, 133494, 9590, 9590,
  /* 10481 */ 9590, 140662, 9590, 176, 176, 0, 9938, 9590, 9590, 9590, 176, 176, 9590, 176, 176, 176, 51376, 176, 176,
  /* 10500 */ 0, 0, 621, 0, 9590, 9590, 9590, 9971, 9590, 9590, 9590, 176, 176, 43184, 9590, 9590, 176, 9590, 176, 9590,
  /* 10520 */ 9774, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 176, 569, 176, 9983, 9590, 9590, 9590, 9590,
  /* 10539 */ 9590, 176, 176, 9988, 9590, 176, 176, 9590, 9993, 9590, 9590, 176, 176, 176, 176, 9590, 9590, 9590, 9590,
  /* 10558 */ 9590, 9927, 9590, 9590, 9590, 9590, 9590, 9590, 176, 698, 176, 176, 176, 0, 9590, 9590, 9590, 9590, 9590,
  /* 10577 */ 176, 176, 176, 9590, 9590, 176, 129398, 9590, 176, 0, 0, 190, 190, 190, 190, 190, 190, 190, 190, 190, 190,
  /* 10598 */ 190, 190, 190, 190, 190, 0, 0, 0, 3184, 0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 280, 176, 0, 0,
  /* 10627 */ 448, 0, 0, 9590, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 532, 176, 176, 176, 176, 176,
  /* 10649 */ 176, 463, 176, 465, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 7649, 0, 0, 0, 176, 176,
  /* 10671 */ 176, 176, 475, 176, 176, 176, 176, 176, 176, 480, 0, 0, 0, 0, 0, 9590, 176, 450, 176, 176, 455, 176, 176,
  /* 10694 */ 176, 176, 176, 176, 307, 216, 217, 113, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 9590,
  /* 10721 */ 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 634, 176, 176, 176, 9590, 17782, 9590, 176, 9590, 176, 176,
  /* 10740 */ 0, 0, 0, 0, 0, 0, 0, 0, 65536, 0, 0, 80896, 0, 0, 0, 0, 77174, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /* 10764 */ 9590, 9590, 9904, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 9590, 9978, 176, 9590,
  /* 10782 */ 176, 9590, 9994, 9590, 176, 9590, 9590, 176, 176, 9590, 9590, 9590, 9590, 176, 10002, 9590, 9590, 9590,
  /* 10800 */ 176, 176, 9590, 176, 176, 616, 176, 176, 176, 0, 0, 0, 0, 0, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0,
  /* 10828 */ 0, 0, 0, 0, 0, 9840, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 9590, 131790,
  /* 10848 */ 9590, 9590, 9590, 139638, 9590, 9590, 176, 176, 0, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176,
  /* 10866 */ 176, 9977, 9590, 764, 9590, 176, 9590, 176, 176, 176, 9946, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176,
  /* 10885 */ 9590, 9590, 176, 176, 9590, 9590, 9590, 9590, 176, 9590, 9590, 30070, 9590, 176, 176, 145933, 176, 176,
  /* 10903 */ 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 144560, 176, 9590, 9590, 9590, 9590, 9590,
  /* 10922 */ 28322, 9590, 176, 176, 176, 176, 9590, 9590, 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 567, 176,
  /* 10941 */ 176, 176, 113, 0, 0, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 371, 0, 9590, 176, 176, 176, 176, 176, 176,
  /* 10968 */ 176, 509, 176, 9590, 176, 513, 9590, 521, 176, 0, 0, 235, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 425, 0,
  /* 10995 */ 0, 0, 0, 0, 0, 0, 0, 0, 427, 0, 0, 0, 0, 431, 0, 0, 368, 0, 0, 0, 0, 0, 0, 9590, 176, 176, 176, 176, 176,
  /* 11024 */ 176, 176, 176, 458, 176, 0, 447, 0, 0, 0, 9590, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176,
  /* 11046 */ 176, 7649, 482, 0, 0, 0, 535, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 365, 0, 9590, 9590, 9590, 9590,
  /* 11073 */ 9590, 9590, 9974, 176, 176, 176, 9590, 9590, 176, 9590, 176, 9982, 357, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 11097 */ 0, 0, 0, 0, 8192, 0, 0, 0, 0, 16384, 0, 0, 0, 0, 9590, 375, 176, 176, 176, 176, 176, 176, 289, 176, 176,
  /* 11122 */ 289, 176, 176, 176, 176, 176, 176, 291, 176, 176, 176, 176, 176, 176, 176, 176, 291, 556, 9590, 9590,
  /* 11142 */ 9590, 9590, 9590, 9590, 9590, 176, 176, 176, 176, 176, 176, 176, 176, 176, 9727, 176, 176, 9590, 176, 176,
  /* 11162 */ 9590, 9590, 9590, 9590, 9590, 9913, 176, 176, 176, 176, 176, 0, 9590, 9590, 9590, 9590, 9590, 9590, 9590,
  /* 11181 */ 9590, 9590, 9590, 9590, 9590, 118134, 9590, 176, 9590
];

WAT.EXPECTED =
[
  /*    0 */ 248, 251, 253, 257, 261, 265, 269, 273, 393, 356, 666, 280, 281, 286, 275, 393, 393, 404, 281, 312, 290,
  /*   21 */ 393, 393, 411, 281, 319, 393, 393, 297, 282, 302, 434, 281, 307, 311, 298, 316, 281, 325, 323, 281, 413,
  /*   42 */ 329, 436, 281, 333, 337, 341, 345, 349, 353, 393, 455, 513, 360, 364, 368, 353, 393, 581, 373, 826, 377,
  /*   63 */ 351, 355, 574, 382, 386, 631, 392, 399, 393, 408, 417, 823, 419, 604, 490, 494, 423, 523, 493, 543, 427,
  /*   84 */ 393, 431, 440, 393, 449, 453, 393, 459, 393, 463, 715, 470, 476, 388, 480, 393, 487, 393, 498, 502, 506,
  /*  105 */ 510, 393, 487, 553, 517, 789, 521, 527, 445, 532, 537, 541, 547, 551, 393, 742, 466, 768, 557, 393, 679,
  /*  126 */ 293, 788, 561, 691, 787, 567, 393, 752, 393, 393, 572, 393, 276, 578, 393, 472, 393, 775, 393, 393, 393,
  /*  147 */ 393, 393, 393, 808, 378, 585, 589, 593, 597, 393, 808, 815, 602, 608, 612, 393, 598, 616, 622, 645, 660,
  /*  168 */ 626, 393, 635, 672, 685, 697, 644, 639, 729, 759, 643, 649, 483, 653, 443, 657, 618, 393, 664, 393, 393,
  /*  189 */ 670, 393, 676, 393, 683, 689, 695, 701, 705, 393, 393, 709, 533, 719, 723, 726, 393, 393, 735, 739, 395,
  /*  210 */ 746, 750, 393, 563, 756, 393, 818, 763, 767, 393, 772, 393, 782, 712, 393, 786, 393, 793, 568, 393, 778,
  /*  231 */ 402, 393, 797, 393, 394, 801, 393, 528, 805, 393, 812, 731, 303, 303, 369, 629, 822, 830, 834, 842, 843,
  /*  252 */ 843, 843, 843, 928, 838, 848, 872, 859, 863, 841, 869, 865, 851, 854, 855, 881, 888, 892, 884, 896, 844,
  /*  273 */ 900, 903, 1172, 1173, 1173, 1173, 1044, 908, 942, 942, 942, 942, 947, 918, 925, 932, 903, 921, 902, 1171,
  /*  293 */ 1173, 875, 1069, 1516, 940, 942, 942, 942, 1173, 904, 1173, 1173, 1173, 1087, 943, 985, 1173, 876, 941,
  /*  312 */ 942, 942, 942, 1588, 877, 968, 973, 942, 943, 920, 934, 967, 972, 942, 942, 910, 876, 983, 942, 942, 942,
  /*  333 */ 995, 1000, 942, 909, 1601, 999, 942, 1006, 1602, 1000, 942, 1600, 1004, 942, 1610, 1609, 1007, 942, 1173,
  /*  352 */ 1173, 990, 1146, 1572, 1173, 1173, 1173, 1152, 1051, 1053, 1029, 1031, 1034, 1033, 1016, 1020, 1022, 1173,
  /*  370 */ 1173, 1173, 1088, 1026, 1173, 1038, 1042, 1057, 1173, 1173, 1173, 1090, 1321, 1076, 1173, 1066, 1433, 1083,
  /*  388 */ 1432, 1173, 1348, 1173, 1060, 1173, 1173, 1173, 1173, 912, 1541, 989, 1145, 1571, 1173, 914, 1285, 1173,
  /*  406 */ 939, 942, 1074, 1173, 1103, 1173, 938, 942, 942, 909, 977, 1082, 1431, 1173, 1173, 991, 1114, 1096, 1173,
  /*  425 */ 1104, 1113, 1170, 1537, 1127, 1134, 1138, 1446, 1152, 1173, 956, 942, 942, 909, 981, 1123, 1329, 1431,
  /*  443 */ 1173, 959, 1173, 1173, 1174, 1279, 1143, 1150, 1173, 1322, 1158, 1431, 1173, 1173, 1011, 1173, 1167, 1173,
  /*  461 */ 1323, 1180, 1505, 1173, 1185, 1173, 1154, 1173, 1070, 1181, 1505, 1173, 1043, 1315, 1320, 1186, 1248, 1173,
  /*  479 */ 1044, 1405, 1404, 1404, 1173, 1173, 1445, 1450, 1174, 1190, 1273, 1077, 1102, 1290, 1109, 1432, 1173, 1173,
  /*  497 */ 1088, 1153, 961, 962, 1455, 1200, 1197, 1204, 1208, 1211, 1220, 1222, 1221, 1226, 1214, 1216, 1173, 1173,
  /*  515 */ 1555, 1462, 1173, 1616, 1173, 911, 1230, 1289, 1173, 1173, 1118, 1078, 1239, 1173, 1173, 1173, 1176, 1274,
  /*  533 */ 1173, 1173, 1173, 1234, 1154, 1245, 1173, 1068, 1252, 1265, 1173, 1173, 1139, 1104, 1440, 1284, 1173, 1270,
  /*  551 */ 1233, 961, 1173, 1173, 1153, 963, 1283, 1173, 1294, 1453, 1173, 1623, 1173, 1173, 1173, 1510, 1284, 1173,
  /*  569 */ 1173, 1173, 1285, 1439, 1311, 1173, 1173, 1173, 1543, 1310, 1316, 1321, 1173, 1173, 1557, 1258, 1341, 1338,
  /*  587 */ 1406, 1346, 1352, 1357, 1361, 1370, 1363, 1362, 1362, 1367, 1372, 1173, 1173, 1173, 1328, 1173, 1380, 1173,
  /*  605 */ 1173, 1173, 1549, 1388, 1173, 1173, 1397, 1403, 1411, 1633, 1121, 1334, 1173, 1089, 1173, 960, 1173, 1384,
  /*  623 */ 1173, 1173, 1421, 1410, 1173, 1426, 1173, 1174, 1173, 1088, 1353, 1568, 1173, 1415, 1419, 1089, 1173, 1415,
  /*  641 */ 1419, 1265, 1629, 1425, 1173, 1173, 1173, 1392, 1173, 1430, 1266, 1437, 1459, 1067, 1626, 950, 1173, 1466,
  /*  659 */ 1192, 1461, 1173, 1396, 1402, 1473, 1193, 1173, 1173, 1255, 1089, 1485, 1478, 1173, 1173, 1261, 987, 1173,
  /*  677 */ 1484, 1477, 1173, 1174, 1302, 1077, 1485, 1482, 1173, 1173, 1297, 1460, 1491, 1482, 1173, 1173, 1306, 1173,
  /*  695 */ 1104, 1489, 1173, 1173, 1403, 1631, 1495, 1173, 1173, 1496, 1398, 1173, 1503, 1500, 1173, 1509, 1514, 1173,
  /*  713 */ 1235, 912, 1173, 1247, 1246, 1044, 960, 1469, 1161, 1163, 1521, 1530, 1523, 1523, 1528, 1524, 1173, 1260,
  /*  731 */ 1173, 1173, 1173, 1620, 1173, 1509, 1514, 1289, 1061, 1577, 1534, 1173, 1278, 1273, 1077, 1547, 1553, 1173,
  /*  749 */ 1517, 1173, 1565, 1173, 1173, 1441, 1173, 1515, 1173, 1062, 1173, 1298, 1461, 1067, 1536, 1173, 1173, 1516,
  /*  767 */ 913, 1173, 1173, 1173, 1439, 1098, 1515, 1576, 1173, 1316, 1321, 1173, 1173, 1559, 1593, 1173, 1560, 1012,
  /*  785 */ 1105, 1241, 1173, 1173, 1173, 1440, 1284, 1342, 1561, 1287, 1173, 912, 1173, 1581, 1288, 1285, 1585, 1592,
  /*  803 */ 1173, 1287, 1597, 1130, 1288, 1173, 1327, 1333, 1432, 1175, 1606, 1614, 1173, 1376, 1383, 1173, 1173, 1561,
  /*  821 */ 1286, 1087, 1087, 1173, 1094, 1173, 952, 1173, 1048, 6, 18, 34, 66, 514, 1026, 2050, 16386, 530, 2066, 162,
  /*  841 */ 546, 131074, 2, 2, 2, 2, 4, 1538, 514, 3074, 1026, 1538, 2, 164386, -196350, -196350, -196350, -195310, 2,
  /*  860 */ 2594, 3106, 34, 3586, 1538, 131074, 2, 1538, 3074, 2, 131074, 2, 1026, 12290, 16386, 2, 0, 0, 0, 65792,
  /*  880 */ 262400, -193278, -195326, -195326, -196350, -196350, -193262, -192750, -194798, -192766, -194814, -194814,
  /*  892 */ -195326, -193262, -194814, -196350, -176878, -192718, -176814, -65278, 16, 32, 64, 64, 64, 64, 16384, 0,
  /*  908 */ -196352, 256, 256, 256, 0, 0, 0, 3, 0, 0, -179968, 320, 320, 256, -130816, 256, 2, -65280, 256, 256, 2, 2,
  /*  930 */ 2, 1034, 2, 16, 64, 64, 16384, 131072, 0, 256, 65792, -261888, 256, 256, 256, 256, 16640, 16640, 256,
  /*  949 */ -130816, 256, -134217728, 0, 0, 255, 0, 0, 65792, -261888, 256, 0, 4, 0, 0, 0, 10240, 0, 262400, 524544,
  /*  969 */ 7340288, 25166080, 33554688, 33554688, 2080375040, -2147483392, 256, 256, 65792, 262400, 524544, 6291712,
  /*  981 */ 65792, 6291712, 25166080, 2013266176, 256, 256, 64, 0, 0, 0, 1, 2048, 4096, 8192, 0, 65792, 25166080,
  /*  998 */ 402653440, 268435712, 536871168, 1073742080, 256, 256, 268435712, 1073742080, 256, 256, 256, 65792, 256, 0,
  /* 1012 */ 131072, 0, 0, 32768, 141887487, 135596031, 135727103, 135626751, 135596031, 135596031, 141887487,
  /* 1023 */ 141887487, 141887487, 135626751, 34078720, 0, 0, 92274688, 135596030, 135596031, 135596031, 135596031,
  /* 1034 */ 135596031, 139790335, 135596031, 135596031, 0, 254, 1792, 327680, 135266304, 0, 0, 0, 16, 32, 0, 0,
  /* 1050 */ 139460608, 0, -1610612736, 1342177280, 1342177280, 34111488, 92274688, 0, 141557760, 458752, 32512, 0, 0,
  /* 1063 */ 0, 2056, 262144, 83886080, 0, 0, 0, 128, 4096, 16384, 65536, 30720, 0, 536870912, 0x80000000, 0, 0, 0, 120,
  /* 1082 */ 252, 1792, 65536, 262144, 1048576, 0, 1, 0, 0, 0, 256, 2049, 0, 2097152, 131072, 30720, 0, 0, 8, 4096, 0,
  /* 1103 */ 67108864, 0, 0, 0, 4096, 0, 128, 1536, 65536, 1048576, 8192, 16384, 131072, 33554432, 0, 0, 28672,
  /* 1120 */ 67108864, 0, -100663296, 0, 0, 24, 96, 0, 120, 128, 512, 1024, 16384, 131072, 1024, 65536, 1048576,
  /* 1137 */ 134217728, 0, 131072, 28672, 0, 0, 12288, 16384, 4096, 8192, 16384, 32768, 131072, 16384, 0, 12288, 0, 0,
  /* 1155 */ 0, 2, 0, 32, 64, 512, 65536, 0, 262144, 262144, 67592, 0, 0, 12288, 16384, 8192, 16384, 131072, 0, 0, 0, 0,
  /* 1177 */ 1, 2, 16, 64, 512, 134217728, 0, 0, 16, 32, 512, 134217728, 0, 4, 8, 131072, 262144, 524288, 29360128,
  /* 1196 */ -268435456, 0, 4, 33554444, 10240, 4, 0, 10240, 4, 86144, 10240, 10240, 43072, 43072, 33816588, 260,
  /* 1212 */ 2095056432, 2111964720, 2112489008, 2113013296, 2111964724, 2111964724, 2111964724, 2113537588, 2113013296,
  /* 1221 */ 2111964720, 2111964720, 2111964720, 2111964724, 2111964720, 2111964720, 2111964724, 2111964724, 2111964720,
  /* 1230 */ 31457280, 0, 656896, 32505856, 0, 0, 0, 65536, 0, 0, 132608, 0, 0, 8, 32768, 2048, 8192, 0, 0, 0, 8192, 0,
  /* 1252 */ 16384, 65536, 64, 0, 0, 163840, 0, -1610612736, 0, 0, 6, 8, 16, 0, 256, 0, 0, 4, 0, 31457280, 0, 524288,
  /* 1274 */ 1048576, 16777216, 33554432, 0x80000000, 1, 4, 8, 262144, 524288, 14680064, 2080374784, 0, 0, 0, 32768, 0,
  /* 1290 */ 0, 0, 4, 120, 0, 0, 16777216, 0, 0, 1044480, 31457280, 33554432, 8, 262144, 1048576, 33554432, 8, 262144,
  /* 1308 */ 33554432, 0x80000000, 1536, 2097152, 4194304, 8388608, 2080374784, 32, 67108864, 134217728, 268435456,
  /* 1319 */ 536870912, 536870912, 1073741824, 0, 0, 0, 24, 32, 0, 1, 128, 512, 1024, 65536, 1024, 2048, 1048576,
  /* 1336 */ 67108864, 134217728, 0, 0, 134217728, 1049088, 0, 0, 0, 132608, 1051136, 134218752, 0, 0, 16, 134217728,
  /* 1352 */ 135266816, 0, 0, 0, 4194304, 0, 0, 67108864, 134217758, 134217822, -202379232, -202379232, -202379232,
  /* 1365 */ -202379232, -202377056, -201328608, -201330144, -202379232, -202379232, -202377184, -202379232, -202379232,
  /* 1374 */ -202378976, -67110368, 0, 256, 0, 134217728, 0, 30, 94, 0, 0, 1050624, 0, 0, 0, 32, 32501760, -234881024,
  /* 1392 */ 0, 32, 32501760, 33554432, 0, 32503808, 0, 0, 0, 8388608, 0, 128, 0, 0, 0, 134217728, 0, 0, 0, 33552384,
  /* 1412 */ 512, 33550336, 0, 0, 128, 512, 1048576, 67108864, 134217728, 0, 0, 30, 64, 0, 256, 0, -134217728, 0, 128,
  /* 1431 */ 1048576, 134217728, 0, 0, 0, 252, 8, 0, 0, 0, 48, 1536, 14680064, 2080374784, 0, 4096, 8192, 16384, 0,
  /* 1450 */ 32768, 196608, 262144, 524288, 15728640, 0, 4, 4, 0, 31457280, 33554432, -268435456, 0, 0, 0, 1342177280,
  /* 1466 */ 4096, 8192, 32768, 65536, 4, 2056, 262144, 4096, 8192, 32768, 131072, 29360128, 1879048192, 0x80000000, 0,
  /* 1481 */ 0, 1610612736, 0, 0, 0, 4096, 131072, 29360128, 25165824, 0, 0, 0, 4096, 25165824, 0, 4096, 8388608,
  /* 1498 */ 16777216, 0, 8388608, 0, 8388608, 8388608, 0, 0, 0, 8192, 8192, 0, 4, 8, 2048, 4096, 4096, 32768, 65536, 0,
  /* 1518 */ 0, 0, 124912, 0, 157683, 190451, 190451, 190451, 190451, 260083, 194547, 255987, 190451, 190451, 194547,
  /* 1533 */ 190451, 0, 67592, 0, 0, 28672, 0, 0, 26608, 131072, 0, 0, 30720, 268435456, 0, 59376, 0, 0, 30720,
  /* 1552 */ 536870912, 0, 63472, 0, 0, 30720, 1342177280, 0, 0, 3, 2032, 24576, 131072, 0, 3, 129008, 0, 0, 3145728,
  /* 1571 */ 131072, 524288, 2097152, 33554432, 0, 0, 262144, 0, 0, 0, 3, 2032, 16384, 131072, 16, 32, 192, 256, 16640,
  /* 1590 */ 320, 320, 1536, 16384, 131072, 32768, 0, 32, 64, 128, 256, 65792, 8388864, 16777472, 134217984, 268435712,
  /* 1606 */ 16, 32, 128, 256, 65792, 268435712, 256, 256, 1024, 131072, 0, 0, 86144, 43072, 0, 1, 131072, 0, 0,
  /* 1625 */ 15728640, 0, 0, 1048576, 0, 0, 1048576, 512, 0, 0, 32, 256
];

WAT.TOKEN =
[
  "%ERROR",
  "whitespace",
  "namePart",
  "eof",
  "string",
  "nat",
  "float",
  "sign",
  "dottedName",
  "'$'",
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
  "'export'",
  "'extern'",
  "'extern.convert_any'",
  "'f32'",
  "'f32x4'",
  "'f64'",
  "'f64x2'",
  "'field'",
  "'final'",
  "'func'",
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
  "'v128'"
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
    log("Usage: " + command + " WAT.js [-i] INPUT...\n");
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
      var s = new WAT.XmlSerializer(log, indent);
      var parser = new WAT(input, s);
      try
      {
        parser.parse_wat();
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
