// This file was generated on Thu Mar 5, 2026 14:57 (UTC-03) by REx v6.1 which is Copyright (c) 1979-2025 by Gunther Rademacher <grd@gmx.net>
// REx command line: MaiaScript.ebnf -ll -tree -javascript -main -ll 3 -ll 2 -backtrack

function MaiaScript(string)
{
  init(string);

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

  function init(source)
  {
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
    ex = -1;
    memo = {};
  }

  this.reset = function(l, b, e)
  {
    reset(l, b, e);
  };

  this.getOffendingToken = function(e)
  {
    var o = e.getOffending();
    return o >= 0 ? MaiaScript.TOKEN[o] : null;
  };

  this.getExpectedTokenSet = function(e)
  {
    var expected;
    if (e.getExpected() < 0)
    {
      expected = MaiaScript.getTokenSet(- e.getState());
    }
    else
    {
      expected = [MaiaScript.TOKEN[e.getExpected()]];
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

  this.parse_Program = function()
  {
    lookahead1W(27);                // %OTHER | EOF | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' |
                                    // '--' | ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' |
                                    // '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(23);            // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' |
                                    // '--' | ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' |
                                    // '{' | '~'
        if (l1 == 1)                // %OTHER
        {
          break;
        }
        parse_Expression();
      }
    }
  };

  function parse_Expression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(33);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    case 81:                        // '{'
      lookahead2W(29);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      break;
    case 63:                        // 'f32'
    case 64:                        // 'f64'
    case 68:                        // 'i32'
    case 69:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      break;
    default:
      lk = l1;
    }
    if (lk == 447                   // 'f32' Identifier
     || lk == 448                   // 'f64' Identifier
     || lk == 452                   // 'i32' Identifier
     || lk == 453                   // 'i64' Identifier
     || lk == 465                   // '{' Identifier
     || lk == 593                   // '{' Null
     || lk == 721                   // '{' True
     || lk == 849                   // '{' False
     || lk == 977                   // '{' Character
     || lk == 1105                  // '{' String
     || lk == 1233                  // '{' Integer
     || lk == 1361                  // '{' Complex
     || lk == 1489                  // '{' Real
     || lk == 1617                  // '{' Comment
     || lk == 1873                  // '{' '!'
     || lk == 2691                  // Identifier '('
     || lk == 2769                  // '{' '('
     || lk == 3409                  // '{' '+'
     || lk == 3537                  // '{' '++'
     || lk == 3921                  // '{' '-'
     || lk == 4049                  // '{' '--'
     || lk == 4227                  // Identifier '.'
     || lk == 4945                  // '{' ';'
     || lk == 6609                  // '{' '['
     || lk == 7121                  // '{' 'break'
     || lk == 7505                  // '{' 'continue'
     || lk == 7761                  // '{' 'do'
     || lk == 8017                  // '{' 'export'
     || lk == 8145                  // '{' 'f32'
     || lk == 8273                  // '{' 'f64'
     || lk == 8401                  // '{' 'for'
     || lk == 8529                  // '{' 'foreach'
     || lk == 8657                  // '{' 'global'
     || lk == 8785                  // '{' 'i32'
     || lk == 8913                  // '{' 'i64'
     || lk == 9041                  // '{' 'if'
     || lk == 9169                  // '{' 'import'
     || lk == 9297                  // '{' 'include'
     || lk == 9425                  // '{' 'local'
     || lk == 9553                  // '{' 'return'
     || lk == 9681                  // '{' 'switch'
     || lk == 9809                  // '{' 'test'
     || lk == 9937                  // '{' 'throw'
     || lk == 10065                 // '{' 'try'
     || lk == 10193                 // '{' 'typeof'
     || lk == 10321                 // '{' 'while'
     || lk == 10371                 // Identifier '{'
     || lk == 10449                 // '{' '{'
     || lk == 10961                 // '{' '}'
     || lk == 11089)                // '{' '~'
    {
      lk = memoized(0, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Block();
          lk = -2;
        }
        catch (p2A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            try_Statement();
            lk = -3;
          }
          catch (p3A)
          {
            lk = -4;
          }
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(0, e0, lk);
      }
    }
    switch (lk)
    {
    case 12:                        // Comment
      consume(12);                  // Comment
      break;
    case -2:
      parse_Block();
      break;
    case -3:
    case 38:                        // ';'
    case 55:                        // 'break'
    case 58:                        // 'continue'
    case 60:                        // 'do'
    case 62:                        // 'export'
    case 65:                        // 'for'
    case 66:                        // 'foreach'
    case 67:                        // 'global'
    case 70:                        // 'if'
    case 71:                        // 'import'
    case 72:                        // 'include'
    case 73:                        // 'local'
    case 74:                        // 'return'
    case 75:                        // 'switch'
    case 76:                        // 'test'
    case 77:                        // 'throw'
    case 78:                        // 'try'
    case 79:                        // 'typeof'
    case 80:                        // 'while'
      parse_Statement();
      break;
    default:
      parse_Operation();
    }
  }

  function try_Expression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(33);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    case 81:                        // '{'
      lookahead2W(29);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      break;
    case 63:                        // 'f32'
    case 64:                        // 'f64'
    case 68:                        // 'i32'
    case 69:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      break;
    default:
      lk = l1;
    }
    if (lk == 447                   // 'f32' Identifier
     || lk == 448                   // 'f64' Identifier
     || lk == 452                   // 'i32' Identifier
     || lk == 453                   // 'i64' Identifier
     || lk == 465                   // '{' Identifier
     || lk == 593                   // '{' Null
     || lk == 721                   // '{' True
     || lk == 849                   // '{' False
     || lk == 977                   // '{' Character
     || lk == 1105                  // '{' String
     || lk == 1233                  // '{' Integer
     || lk == 1361                  // '{' Complex
     || lk == 1489                  // '{' Real
     || lk == 1617                  // '{' Comment
     || lk == 1873                  // '{' '!'
     || lk == 2691                  // Identifier '('
     || lk == 2769                  // '{' '('
     || lk == 3409                  // '{' '+'
     || lk == 3537                  // '{' '++'
     || lk == 3921                  // '{' '-'
     || lk == 4049                  // '{' '--'
     || lk == 4227                  // Identifier '.'
     || lk == 4945                  // '{' ';'
     || lk == 6609                  // '{' '['
     || lk == 7121                  // '{' 'break'
     || lk == 7505                  // '{' 'continue'
     || lk == 7761                  // '{' 'do'
     || lk == 8017                  // '{' 'export'
     || lk == 8145                  // '{' 'f32'
     || lk == 8273                  // '{' 'f64'
     || lk == 8401                  // '{' 'for'
     || lk == 8529                  // '{' 'foreach'
     || lk == 8657                  // '{' 'global'
     || lk == 8785                  // '{' 'i32'
     || lk == 8913                  // '{' 'i64'
     || lk == 9041                  // '{' 'if'
     || lk == 9169                  // '{' 'import'
     || lk == 9297                  // '{' 'include'
     || lk == 9425                  // '{' 'local'
     || lk == 9553                  // '{' 'return'
     || lk == 9681                  // '{' 'switch'
     || lk == 9809                  // '{' 'test'
     || lk == 9937                  // '{' 'throw'
     || lk == 10065                 // '{' 'try'
     || lk == 10193                 // '{' 'typeof'
     || lk == 10321                 // '{' 'while'
     || lk == 10371                 // Identifier '{'
     || lk == 10449                 // '{' '{'
     || lk == 10961                 // '{' '}'
     || lk == 11089)                // '{' '~'
    {
      lk = memoized(0, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Block();
          memoize(0, e0A, -2);
          lk = -5;
        }
        catch (p2A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            try_Statement();
            memoize(0, e0A, -3);
            lk = -5;
          }
          catch (p3A)
          {
            lk = -4;
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            memoize(0, e0A, -4);
          }
        }
      }
    }
    switch (lk)
    {
    case 12:                        // Comment
      consumeT(12);                 // Comment
      break;
    case -2:
      try_Block();
      break;
    case -3:
    case 38:                        // ';'
    case 55:                        // 'break'
    case 58:                        // 'continue'
    case 60:                        // 'do'
    case 62:                        // 'export'
    case 65:                        // 'for'
    case 66:                        // 'foreach'
    case 67:                        // 'global'
    case 70:                        // 'if'
    case 71:                        // 'import'
    case 72:                        // 'include'
    case 73:                        // 'local'
    case 74:                        // 'return'
    case 75:                        // 'switch'
    case 76:                        // 'test'
    case 77:                        // 'throw'
    case 78:                        // 'try'
    case 79:                        // 'typeof'
    case 80:                        // 'while'
      try_Statement();
      break;
    case -5:
      break;
    default:
      try_Operation();
    }
  }

  function parse_Block()
  {
    consume(81);                    // '{'
    for (;;)
    {
      lookahead1W(26);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      if (l1 == 85)                 // '}'
      {
        break;
      }
      parse_Expression();
    }
    consume(85);                    // '}'
  }

  function try_Block()
  {
    consumeT(81);                   // '{'
    for (;;)
    {
      lookahead1W(26);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      if (l1 == 85)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(85);                   // '}'
  }

  function parse_Operation()
  {
    parse_VariableAssignment();
  }

  function try_Operation()
  {
    try_VariableAssignment();
  }

  function parse_VariableAssignment()
  {
    parse_ConditionalExpression();
    for (;;)
    {
      switch (l1)
      {
      case 17:                      // '%='
      case 20:                      // '&='
      case 25:                      // '*='
      case 28:                      // '+='
      case 32:                      // '-='
      case 35:                      // '/='
      case 37:                      // ':='
      case 41:                      // '<<='
      case 43:                      // '='
      case 48:                      // '>>='
      case 50:                      // '?='
      case 53:                      // '^='
      case 83:                      // '|='
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // %OTHER
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Integer
       && lk != 10                  // Complex
       && lk != 11                  // Real
       && lk != 12                  // Comment
       && lk != 14                  // '!'
       && lk != 21                  // '('
       && lk != 22                  // ')'
       && lk != 26                  // '+'
       && lk != 27                  // '++'
       && lk != 29                  // ','
       && lk != 30                  // '-'
       && lk != 31                  // '--'
       && lk != 36                  // ':'
       && lk != 38                  // ';'
       && lk != 51                  // '['
       && lk != 52                  // ']'
       && lk != 55                  // 'break'
       && lk != 56                  // 'case'
       && lk != 57                  // 'catch'
       && lk != 58                  // 'continue'
       && lk != 59                  // 'default'
       && lk != 60                  // 'do'
       && lk != 61                  // 'else'
       && lk != 62                  // 'export'
       && lk != 63                  // 'f32'
       && lk != 64                  // 'f64'
       && lk != 65                  // 'for'
       && lk != 66                  // 'foreach'
       && lk != 67                  // 'global'
       && lk != 68                  // 'i32'
       && lk != 69                  // 'i64'
       && lk != 70                  // 'if'
       && lk != 71                  // 'import'
       && lk != 72                  // 'include'
       && lk != 73                  // 'local'
       && lk != 74                  // 'return'
       && lk != 75                  // 'switch'
       && lk != 76                  // 'test'
       && lk != 77                  // 'throw'
       && lk != 78                  // 'try'
       && lk != 79                  // 'typeof'
       && lk != 80                  // 'while'
       && lk != 81                  // '{'
       && lk != 85                  // '}'
       && lk != 86)                 // '~'
      {
        lk = memoized(1, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2;
          try
          {
            switch (l1)
            {
            case 43:                // '='
              consumeT(43);         // '='
              break;
            case 25:                // '*='
              consumeT(25);         // '*='
              break;
            case 35:                // '/='
              consumeT(35);         // '/='
              break;
            case 17:                // '%='
              consumeT(17);         // '%='
              break;
            case 28:                // '+='
              consumeT(28);         // '+='
              break;
            case 32:                // '-='
              consumeT(32);         // '-='
              break;
            case 41:                // '<<='
              consumeT(41);         // '<<='
              break;
            case 48:                // '>>='
              consumeT(48);         // '>>='
              break;
            case 20:                // '&='
              consumeT(20);         // '&='
              break;
            case 53:                // '^='
              consumeT(53);         // '^='
              break;
            case 83:                // '|='
              consumeT(83);         // '|='
              break;
            case 50:                // '?='
              consumeT(50);         // '?='
              break;
            default:
              consumeT(37);         // ':='
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
            try_ConditionalExpression();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(1, e0, lk);
        }
      }
      if (lk != -1)
      {
        break;
      }
      switch (l1)
      {
      case 43:                      // '='
        consume(43);                // '='
        break;
      case 25:                      // '*='
        consume(25);                // '*='
        break;
      case 35:                      // '/='
        consume(35);                // '/='
        break;
      case 17:                      // '%='
        consume(17);                // '%='
        break;
      case 28:                      // '+='
        consume(28);                // '+='
        break;
      case 32:                      // '-='
        consume(32);                // '-='
        break;
      case 41:                      // '<<='
        consume(41);                // '<<='
        break;
      case 48:                      // '>>='
        consume(48);                // '>>='
        break;
      case 20:                      // '&='
        consume(20);                // '&='
        break;
      case 53:                      // '^='
        consume(53);                // '^='
        break;
      case 83:                      // '|='
        consume(83);                // '|='
        break;
      case 50:                      // '?='
        consume(50);                // '?='
        break;
      default:
        consume(37);                // ':='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_ConditionalExpression();
    }
  }

  function try_VariableAssignment()
  {
    try_ConditionalExpression();
    for (;;)
    {
      switch (l1)
      {
      case 17:                      // '%='
      case 20:                      // '&='
      case 25:                      // '*='
      case 28:                      // '+='
      case 32:                      // '-='
      case 35:                      // '/='
      case 37:                      // ':='
      case 41:                      // '<<='
      case 43:                      // '='
      case 48:                      // '>>='
      case 50:                      // '?='
      case 53:                      // '^='
      case 83:                      // '|='
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // %OTHER
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Integer
       && lk != 10                  // Complex
       && lk != 11                  // Real
       && lk != 12                  // Comment
       && lk != 14                  // '!'
       && lk != 21                  // '('
       && lk != 22                  // ')'
       && lk != 26                  // '+'
       && lk != 27                  // '++'
       && lk != 29                  // ','
       && lk != 30                  // '-'
       && lk != 31                  // '--'
       && lk != 36                  // ':'
       && lk != 38                  // ';'
       && lk != 51                  // '['
       && lk != 52                  // ']'
       && lk != 55                  // 'break'
       && lk != 56                  // 'case'
       && lk != 57                  // 'catch'
       && lk != 58                  // 'continue'
       && lk != 59                  // 'default'
       && lk != 60                  // 'do'
       && lk != 61                  // 'else'
       && lk != 62                  // 'export'
       && lk != 63                  // 'f32'
       && lk != 64                  // 'f64'
       && lk != 65                  // 'for'
       && lk != 66                  // 'foreach'
       && lk != 67                  // 'global'
       && lk != 68                  // 'i32'
       && lk != 69                  // 'i64'
       && lk != 70                  // 'if'
       && lk != 71                  // 'import'
       && lk != 72                  // 'include'
       && lk != 73                  // 'local'
       && lk != 74                  // 'return'
       && lk != 75                  // 'switch'
       && lk != 76                  // 'test'
       && lk != 77                  // 'throw'
       && lk != 78                  // 'try'
       && lk != 79                  // 'typeof'
       && lk != 80                  // 'while'
       && lk != 81                  // '{'
       && lk != 85                  // '}'
       && lk != 86)                 // '~'
      {
        lk = memoized(1, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2;
          try
          {
            switch (l1)
            {
            case 43:                // '='
              consumeT(43);         // '='
              break;
            case 25:                // '*='
              consumeT(25);         // '*='
              break;
            case 35:                // '/='
              consumeT(35);         // '/='
              break;
            case 17:                // '%='
              consumeT(17);         // '%='
              break;
            case 28:                // '+='
              consumeT(28);         // '+='
              break;
            case 32:                // '-='
              consumeT(32);         // '-='
              break;
            case 41:                // '<<='
              consumeT(41);         // '<<='
              break;
            case 48:                // '>>='
              consumeT(48);         // '>>='
              break;
            case 20:                // '&='
              consumeT(20);         // '&='
              break;
            case 53:                // '^='
              consumeT(53);         // '^='
              break;
            case 83:                // '|='
              consumeT(83);         // '|='
              break;
            case 50:                // '?='
              consumeT(50);         // '?='
              break;
            default:
              consumeT(37);         // ':='
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
            try_ConditionalExpression();
            memoize(1, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            memoize(1, e0A, -2);
            break;
          }
        }
      }
      if (lk != -1)
      {
        break;
      }
      switch (l1)
      {
      case 43:                      // '='
        consumeT(43);               // '='
        break;
      case 25:                      // '*='
        consumeT(25);               // '*='
        break;
      case 35:                      // '/='
        consumeT(35);               // '/='
        break;
      case 17:                      // '%='
        consumeT(17);               // '%='
        break;
      case 28:                      // '+='
        consumeT(28);               // '+='
        break;
      case 32:                      // '-='
        consumeT(32);               // '-='
        break;
      case 41:                      // '<<='
        consumeT(41);               // '<<='
        break;
      case 48:                      // '>>='
        consumeT(48);               // '>>='
        break;
      case 20:                      // '&='
        consumeT(20);               // '&='
        break;
      case 53:                      // '^='
        consumeT(53);               // '^='
        break;
      case 83:                      // '|='
        consumeT(83);               // '|='
        break;
      case 50:                      // '?='
        consumeT(50);               // '?='
        break;
      default:
        consumeT(37);               // ':='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_ConditionalExpression();
    }
  }

  function parse_ConditionalExpression()
  {
    parse_LogicalORExpression();
    if (l1 == 49)                   // '?'
    {
      consume(49);                  // '?'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_VariableAssignment();
      consume(36);                  // ':'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_VariableAssignment();
    }
  }

  function try_ConditionalExpression()
  {
    try_LogicalORExpression();
    if (l1 == 49)                   // '?'
    {
      consumeT(49);                 // '?'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_VariableAssignment();
      consumeT(36);                 // ':'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_VariableAssignment();
    }
  }

  function parse_LogicalORExpression()
  {
    parse_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 84)                 // '||'
      {
        break;
      }
      consume(84);                  // '||'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_LogicalANDExpression();
    }
  }

  function try_LogicalORExpression()
  {
    try_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 84)                 // '||'
      {
        break;
      }
      consumeT(84);                 // '||'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_LogicalANDExpression();
    }
  }

  function parse_LogicalANDExpression()
  {
    parse_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 19)                 // '&&'
      {
        break;
      }
      consume(19);                  // '&&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_BitwiseXORExpression();
    }
  }

  function try_LogicalANDExpression()
  {
    try_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 19)                 // '&&'
      {
        break;
      }
      consumeT(19);                 // '&&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_BitwiseXORExpression();
    }
  }

  function parse_BitwiseXORExpression()
  {
    parse_BitwiseORExpression();
    for (;;)
    {
      if (l1 != 54)                 // '^^'
      {
        break;
      }
      consume(54);                  // '^^'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_BitwiseORExpression();
    }
  }

  function try_BitwiseXORExpression()
  {
    try_BitwiseORExpression();
    for (;;)
    {
      if (l1 != 54)                 // '^^'
      {
        break;
      }
      consumeT(54);                 // '^^'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_BitwiseORExpression();
    }
  }

  function parse_BitwiseORExpression()
  {
    parse_BitwiseANDExpression();
    for (;;)
    {
      if (l1 != 82)                 // '|'
      {
        break;
      }
      consume(82);                  // '|'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_BitwiseANDExpression();
    }
  }

  function try_BitwiseORExpression()
  {
    try_BitwiseANDExpression();
    for (;;)
    {
      if (l1 != 82)                 // '|'
      {
        break;
      }
      consumeT(82);                 // '|'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_BitwiseANDExpression();
    }
  }

  function parse_BitwiseANDExpression()
  {
    parse_EqualityExpression();
    for (;;)
    {
      if (l1 != 18)                 // '&'
      {
        break;
      }
      consume(18);                  // '&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_EqualityExpression();
    }
  }

  function try_BitwiseANDExpression()
  {
    try_EqualityExpression();
    for (;;)
    {
      if (l1 != 18)                 // '&'
      {
        break;
      }
      consumeT(18);                 // '&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_EqualityExpression();
    }
  }

  function parse_EqualityExpression()
  {
    parse_RelationalExpression();
    for (;;)
    {
      if (l1 != 15                  // '!='
       && l1 != 44)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 44:                      // '=='
        consume(44);                // '=='
        break;
      default:
        consume(15);                // '!='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_RelationalExpression();
    }
  }

  function try_EqualityExpression()
  {
    try_RelationalExpression();
    for (;;)
    {
      if (l1 != 15                  // '!='
       && l1 != 44)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 44:                      // '=='
        consumeT(44);               // '=='
        break;
      default:
        consumeT(15);               // '!='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_RelationalExpression();
    }
  }

  function parse_RelationalExpression()
  {
    parse_ShiftExpression();
    for (;;)
    {
      if (l1 != 39                  // '<'
       && l1 != 42                  // '<='
       && l1 != 45                  // '>'
       && l1 != 46)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 39:                      // '<'
        consume(39);                // '<'
        break;
      case 45:                      // '>'
        consume(45);                // '>'
        break;
      case 42:                      // '<='
        consume(42);                // '<='
        break;
      default:
        consume(46);                // '>='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_ShiftExpression();
    }
  }

  function try_RelationalExpression()
  {
    try_ShiftExpression();
    for (;;)
    {
      if (l1 != 39                  // '<'
       && l1 != 42                  // '<='
       && l1 != 45                  // '>'
       && l1 != 46)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 39:                      // '<'
        consumeT(39);               // '<'
        break;
      case 45:                      // '>'
        consumeT(45);               // '>'
        break;
      case 42:                      // '<='
        consumeT(42);               // '<='
        break;
      default:
        consumeT(46);               // '>='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_ShiftExpression();
    }
  }

  function parse_ShiftExpression()
  {
    parse_AdditiveExpression();
    for (;;)
    {
      if (l1 != 40                  // '<<'
       && l1 != 47)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 40:                      // '<<'
        consume(40);                // '<<'
        break;
      default:
        consume(47);                // '>>'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_AdditiveExpression();
    }
  }

  function try_ShiftExpression()
  {
    try_AdditiveExpression();
    for (;;)
    {
      if (l1 != 40                  // '<<'
       && l1 != 47)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 40:                      // '<<'
        consumeT(40);               // '<<'
        break;
      default:
        consumeT(47);               // '>>'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_AdditiveExpression();
    }
  }

  function parse_AdditiveExpression()
  {
    parse_PowerExpression();
    for (;;)
    {
      switch (l1)
      {
      case 26:                      // '+'
      case 30:                      // '-'
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      if (lk == 410                 // '+' Identifier
       || lk == 414                 // '-' Identifier
       || lk == 538                 // '+' Null
       || lk == 542                 // '-' Null
       || lk == 666                 // '+' True
       || lk == 670                 // '-' True
       || lk == 794                 // '+' False
       || lk == 798                 // '-' False
       || lk == 922                 // '+' Character
       || lk == 926                 // '-' Character
       || lk == 1050                // '+' String
       || lk == 1054                // '-' String
       || lk == 1178                // '+' Integer
       || lk == 1182                // '-' Integer
       || lk == 1306                // '+' Complex
       || lk == 1310                // '-' Complex
       || lk == 1434                // '+' Real
       || lk == 1438                // '-' Real
       || lk == 2714                // '+' '('
       || lk == 2718                // '-' '('
       || lk == 6554                // '+' '['
       || lk == 6558                // '-' '['
       || lk == 8090                // '+' 'f32'
       || lk == 8094                // '-' 'f32'
       || lk == 8218                // '+' 'f64'
       || lk == 8222                // '-' 'f64'
       || lk == 8730                // '+' 'i32'
       || lk == 8734                // '-' 'i32'
       || lk == 8858                // '+' 'i64'
       || lk == 8862                // '-' 'i64'
       || lk == 10394               // '+' '{'
       || lk == 10398)              // '-' '{'
      {
        lk = memoized(2, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2;
          try
          {
            switch (l1)
            {
            case 26:                // '+'
              consumeT(26);         // '+'
              break;
            default:
              consumeT(30);         // '-'
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
            try_PowerExpression();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(2, e0, lk);
        }
      }
      if (lk != -1
       && lk != 1818                // '+' '!'
       && lk != 1822                // '-' '!'
       && lk != 3354                // '+' '+'
       && lk != 3358                // '-' '+'
       && lk != 3482                // '+' '++'
       && lk != 3486                // '-' '++'
       && lk != 3866                // '+' '-'
       && lk != 3870                // '-' '-'
       && lk != 3994                // '+' '--'
       && lk != 3998                // '-' '--'
       && lk != 11034               // '+' '~'
       && lk != 11038)              // '-' '~'
      {
        break;
      }
      switch (l1)
      {
      case 26:                      // '+'
        consume(26);                // '+'
        break;
      default:
        consume(30);                // '-'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_PowerExpression();
    }
  }

  function try_AdditiveExpression()
  {
    try_PowerExpression();
    for (;;)
    {
      switch (l1)
      {
      case 26:                      // '+'
      case 30:                      // '-'
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      if (lk == 410                 // '+' Identifier
       || lk == 414                 // '-' Identifier
       || lk == 538                 // '+' Null
       || lk == 542                 // '-' Null
       || lk == 666                 // '+' True
       || lk == 670                 // '-' True
       || lk == 794                 // '+' False
       || lk == 798                 // '-' False
       || lk == 922                 // '+' Character
       || lk == 926                 // '-' Character
       || lk == 1050                // '+' String
       || lk == 1054                // '-' String
       || lk == 1178                // '+' Integer
       || lk == 1182                // '-' Integer
       || lk == 1306                // '+' Complex
       || lk == 1310                // '-' Complex
       || lk == 1434                // '+' Real
       || lk == 1438                // '-' Real
       || lk == 2714                // '+' '('
       || lk == 2718                // '-' '('
       || lk == 6554                // '+' '['
       || lk == 6558                // '-' '['
       || lk == 8090                // '+' 'f32'
       || lk == 8094                // '-' 'f32'
       || lk == 8218                // '+' 'f64'
       || lk == 8222                // '-' 'f64'
       || lk == 8730                // '+' 'i32'
       || lk == 8734                // '-' 'i32'
       || lk == 8858                // '+' 'i64'
       || lk == 8862                // '-' 'i64'
       || lk == 10394               // '+' '{'
       || lk == 10398)              // '-' '{'
      {
        lk = memoized(2, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2;
          try
          {
            switch (l1)
            {
            case 26:                // '+'
              consumeT(26);         // '+'
              break;
            default:
              consumeT(30);         // '-'
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
            try_PowerExpression();
            memoize(2, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            memoize(2, e0A, -2);
            break;
          }
        }
      }
      if (lk != -1
       && lk != 1818                // '+' '!'
       && lk != 1822                // '-' '!'
       && lk != 3354                // '+' '+'
       && lk != 3358                // '-' '+'
       && lk != 3482                // '+' '++'
       && lk != 3486                // '-' '++'
       && lk != 3866                // '+' '-'
       && lk != 3870                // '-' '-'
       && lk != 3994                // '+' '--'
       && lk != 3998                // '-' '--'
       && lk != 11034               // '+' '~'
       && lk != 11038)              // '-' '~'
      {
        break;
      }
      switch (l1)
      {
      case 26:                      // '+'
        consumeT(26);               // '+'
        break;
      default:
        consumeT(30);               // '-'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_PowerExpression();
    }
  }

  function parse_PowerExpression()
  {
    parse_MultiplicativeExpression();
    for (;;)
    {
      if (l1 != 24)                 // '**'
      {
        break;
      }
      consume(24);                  // '**'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_MultiplicativeExpression();
    }
  }

  function try_PowerExpression()
  {
    try_MultiplicativeExpression();
    for (;;)
    {
      if (l1 != 24)                 // '**'
      {
        break;
      }
      consumeT(24);                 // '**'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_MultiplicativeExpression();
    }
  }

  function parse_MultiplicativeExpression()
  {
    parse_UnaryExpression();
    for (;;)
    {
      lookahead1W(32);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' |
                                    // '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      if (l1 != 16                  // '%'
       && l1 != 23                  // '*'
       && l1 != 34)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 23:                      // '*'
        consume(23);                // '*'
        break;
      case 34:                      // '/'
        consume(34);                // '/'
        break;
      default:
        consume(16);                // '%'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      parse_UnaryExpression();
    }
  }

  function try_MultiplicativeExpression()
  {
    try_UnaryExpression();
    for (;;)
    {
      lookahead1W(32);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' |
                                    // '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      if (l1 != 16                  // '%'
       && l1 != 23                  // '*'
       && l1 != 34)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 23:                      // '*'
        consumeT(23);               // '*'
        break;
      case 34:                      // '/'
        consumeT(34);               // '/'
        break;
      default:
        consumeT(16);               // '%'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' |
                                    // 'f64' | 'i32' | 'i64' | '{' | '~'
      try_UnaryExpression();
    }
  }

  function parse_UnaryExpression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(33);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    case 21:                        // '('
      lookahead2W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    case 51:                        // '['
      lookahead2W(25);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    case 81:                        // '{'
      lookahead2W(29);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      break;
    case 63:                        // 'f32'
    case 64:                        // 'f64'
    case 68:                        // 'i32'
    case 69:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      break;
    case 4:                         // Null
    case 5:                         // True
    case 6:                         // False
    case 7:                         // Character
    case 8:                         // String
    case 9:                         // Integer
    case 10:                        // Complex
    case 11:                        // Real
      lookahead2W(32);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' |
                                    // '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 405                   // '(' Identifier
     || lk == 435                   // '[' Identifier
     || lk == 447                   // 'f32' Identifier
     || lk == 448                   // 'f64' Identifier
     || lk == 452                   // 'i32' Identifier
     || lk == 453                   // 'i64' Identifier
     || lk == 465                   // '{' Identifier
     || lk == 533                   // '(' Null
     || lk == 563                   // '[' Null
     || lk == 593                   // '{' Null
     || lk == 661                   // '(' True
     || lk == 691                   // '[' True
     || lk == 721                   // '{' True
     || lk == 789                   // '(' False
     || lk == 819                   // '[' False
     || lk == 849                   // '{' False
     || lk == 917                   // '(' Character
     || lk == 947                   // '[' Character
     || lk == 977                   // '{' Character
     || lk == 1045                  // '(' String
     || lk == 1075                  // '[' String
     || lk == 1105                  // '{' String
     || lk == 1173                  // '(' Integer
     || lk == 1203                  // '[' Integer
     || lk == 1233                  // '{' Integer
     || lk == 1301                  // '(' Complex
     || lk == 1331                  // '[' Complex
     || lk == 1361                  // '{' Complex
     || lk == 1429                  // '(' Real
     || lk == 1459                  // '[' Real
     || lk == 1489                  // '{' Real
     || lk == 1557                  // '(' Comment
     || lk == 1587                  // '[' Comment
     || lk == 1617                  // '{' Comment
     || lk == 1813                  // '(' '!'
     || lk == 1843                  // '[' '!'
     || lk == 1873                  // '{' '!'
     || lk == 2691                  // Identifier '('
     || lk == 2709                  // '(' '('
     || lk == 2739                  // '[' '('
     || lk == 2769                  // '{' '('
     || lk == 3349                  // '(' '+'
     || lk == 3379                  // '[' '+'
     || lk == 3409                  // '{' '+'
     || lk == 3459                  // Identifier '++'
     || lk == 3460                  // Null '++'
     || lk == 3461                  // True '++'
     || lk == 3462                  // False '++'
     || lk == 3463                  // Character '++'
     || lk == 3464                  // String '++'
     || lk == 3465                  // Integer '++'
     || lk == 3466                  // Complex '++'
     || lk == 3467                  // Real '++'
     || lk == 3477                  // '(' '++'
     || lk == 3507                  // '[' '++'
     || lk == 3537                  // '{' '++'
     || lk == 3793                  // '{' ','
     || lk == 3861                  // '(' '-'
     || lk == 3891                  // '[' '-'
     || lk == 3921                  // '{' '-'
     || lk == 3971                  // Identifier '--'
     || lk == 3972                  // Null '--'
     || lk == 3973                  // True '--'
     || lk == 3974                  // False '--'
     || lk == 3975                  // Character '--'
     || lk == 3976                  // String '--'
     || lk == 3977                  // Integer '--'
     || lk == 3978                  // Complex '--'
     || lk == 3979                  // Real '--'
     || lk == 3989                  // '(' '--'
     || lk == 4019                  // '[' '--'
     || lk == 4049                  // '{' '--'
     || lk == 4227                  // Identifier '.'
     || lk == 4885                  // '(' ';'
     || lk == 4915                  // '[' ';'
     || lk == 4945                  // '{' ';'
     || lk == 6531                  // Identifier '['
     || lk == 6549                  // '(' '['
     || lk == 6579                  // '[' '['
     || lk == 6609                  // '{' '['
     || lk == 6707                  // '[' ']'
     || lk == 7061                  // '(' 'break'
     || lk == 7091                  // '[' 'break'
     || lk == 7121                  // '{' 'break'
     || lk == 7445                  // '(' 'continue'
     || lk == 7475                  // '[' 'continue'
     || lk == 7505                  // '{' 'continue'
     || lk == 7701                  // '(' 'do'
     || lk == 7731                  // '[' 'do'
     || lk == 7761                  // '{' 'do'
     || lk == 7957                  // '(' 'export'
     || lk == 7987                  // '[' 'export'
     || lk == 8017                  // '{' 'export'
     || lk == 8085                  // '(' 'f32'
     || lk == 8115                  // '[' 'f32'
     || lk == 8145                  // '{' 'f32'
     || lk == 8213                  // '(' 'f64'
     || lk == 8243                  // '[' 'f64'
     || lk == 8273                  // '{' 'f64'
     || lk == 8341                  // '(' 'for'
     || lk == 8371                  // '[' 'for'
     || lk == 8401                  // '{' 'for'
     || lk == 8469                  // '(' 'foreach'
     || lk == 8499                  // '[' 'foreach'
     || lk == 8529                  // '{' 'foreach'
     || lk == 8597                  // '(' 'global'
     || lk == 8627                  // '[' 'global'
     || lk == 8657                  // '{' 'global'
     || lk == 8725                  // '(' 'i32'
     || lk == 8755                  // '[' 'i32'
     || lk == 8785                  // '{' 'i32'
     || lk == 8853                  // '(' 'i64'
     || lk == 8883                  // '[' 'i64'
     || lk == 8913                  // '{' 'i64'
     || lk == 8981                  // '(' 'if'
     || lk == 9011                  // '[' 'if'
     || lk == 9041                  // '{' 'if'
     || lk == 9109                  // '(' 'import'
     || lk == 9139                  // '[' 'import'
     || lk == 9169                  // '{' 'import'
     || lk == 9237                  // '(' 'include'
     || lk == 9267                  // '[' 'include'
     || lk == 9297                  // '{' 'include'
     || lk == 9365                  // '(' 'local'
     || lk == 9395                  // '[' 'local'
     || lk == 9425                  // '{' 'local'
     || lk == 9493                  // '(' 'return'
     || lk == 9523                  // '[' 'return'
     || lk == 9553                  // '{' 'return'
     || lk == 9621                  // '(' 'switch'
     || lk == 9651                  // '[' 'switch'
     || lk == 9681                  // '{' 'switch'
     || lk == 9749                  // '(' 'test'
     || lk == 9779                  // '[' 'test'
     || lk == 9809                  // '{' 'test'
     || lk == 9877                  // '(' 'throw'
     || lk == 9907                  // '[' 'throw'
     || lk == 9937                  // '{' 'throw'
     || lk == 10005                 // '(' 'try'
     || lk == 10035                 // '[' 'try'
     || lk == 10065                 // '{' 'try'
     || lk == 10133                 // '(' 'typeof'
     || lk == 10163                 // '[' 'typeof'
     || lk == 10193                 // '{' 'typeof'
     || lk == 10261                 // '(' 'while'
     || lk == 10291                 // '[' 'while'
     || lk == 10321                 // '{' 'while'
     || lk == 10389                 // '(' '{'
     || lk == 10419                 // '[' '{'
     || lk == 10449                 // '{' '{'
     || lk == 10961                 // '{' '}'
     || lk == 11029                 // '(' '~'
     || lk == 11059                 // '[' '~'
     || lk == 11089)                // '{' '~'
    {
      lk = memoized(3, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Primary();
          lookahead1W(3);           // WhiteSpace^token | '++'
          consumeT(27);             // '++'
          lk = -1;
        }
        catch (p1A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            try_Primary();
            lookahead1W(4);         // WhiteSpace^token | '--'
            consumeT(31);           // '--'
            lk = -2;
          }
          catch (p2A)
          {
            lk = -9;
          }
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(3, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
      parse_Primary();
      lookahead1W(3);               // WhiteSpace^token | '++'
      consume(27);                  // '++'
      break;
    case -2:
      parse_Primary();
      lookahead1W(4);               // WhiteSpace^token | '--'
      consume(31);                  // '--'
      break;
    case 27:                        // '++'
      consume(27);                  // '++'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      parse_Primary();
      break;
    case 31:                        // '--'
      consume(31);                  // '--'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      parse_Primary();
      break;
    case 26:                        // '+'
      consume(26);                  // '+'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      parse_Primary();
      break;
    case 30:                        // '-'
      consume(30);                  // '-'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      parse_Primary();
      break;
    case 86:                        // '~'
      consume(86);                  // '~'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      parse_Primary();
      break;
    case 14:                        // '!'
      consume(14);                  // '!'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      parse_Primary();
      break;
    default:
      parse_Primary();
    }
  }

  function try_UnaryExpression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(33);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    case 21:                        // '('
      lookahead2W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    case 51:                        // '['
      lookahead2W(25);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    case 81:                        // '{'
      lookahead2W(29);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      break;
    case 63:                        // 'f32'
    case 64:                        // 'f64'
    case 68:                        // 'i32'
    case 69:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      break;
    case 4:                         // Null
    case 5:                         // True
    case 6:                         // False
    case 7:                         // Character
    case 8:                         // String
    case 9:                         // Integer
    case 10:                        // Complex
    case 11:                        // Real
      lookahead2W(32);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' |
                                    // '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 405                   // '(' Identifier
     || lk == 435                   // '[' Identifier
     || lk == 447                   // 'f32' Identifier
     || lk == 448                   // 'f64' Identifier
     || lk == 452                   // 'i32' Identifier
     || lk == 453                   // 'i64' Identifier
     || lk == 465                   // '{' Identifier
     || lk == 533                   // '(' Null
     || lk == 563                   // '[' Null
     || lk == 593                   // '{' Null
     || lk == 661                   // '(' True
     || lk == 691                   // '[' True
     || lk == 721                   // '{' True
     || lk == 789                   // '(' False
     || lk == 819                   // '[' False
     || lk == 849                   // '{' False
     || lk == 917                   // '(' Character
     || lk == 947                   // '[' Character
     || lk == 977                   // '{' Character
     || lk == 1045                  // '(' String
     || lk == 1075                  // '[' String
     || lk == 1105                  // '{' String
     || lk == 1173                  // '(' Integer
     || lk == 1203                  // '[' Integer
     || lk == 1233                  // '{' Integer
     || lk == 1301                  // '(' Complex
     || lk == 1331                  // '[' Complex
     || lk == 1361                  // '{' Complex
     || lk == 1429                  // '(' Real
     || lk == 1459                  // '[' Real
     || lk == 1489                  // '{' Real
     || lk == 1557                  // '(' Comment
     || lk == 1587                  // '[' Comment
     || lk == 1617                  // '{' Comment
     || lk == 1813                  // '(' '!'
     || lk == 1843                  // '[' '!'
     || lk == 1873                  // '{' '!'
     || lk == 2691                  // Identifier '('
     || lk == 2709                  // '(' '('
     || lk == 2739                  // '[' '('
     || lk == 2769                  // '{' '('
     || lk == 3349                  // '(' '+'
     || lk == 3379                  // '[' '+'
     || lk == 3409                  // '{' '+'
     || lk == 3459                  // Identifier '++'
     || lk == 3460                  // Null '++'
     || lk == 3461                  // True '++'
     || lk == 3462                  // False '++'
     || lk == 3463                  // Character '++'
     || lk == 3464                  // String '++'
     || lk == 3465                  // Integer '++'
     || lk == 3466                  // Complex '++'
     || lk == 3467                  // Real '++'
     || lk == 3477                  // '(' '++'
     || lk == 3507                  // '[' '++'
     || lk == 3537                  // '{' '++'
     || lk == 3793                  // '{' ','
     || lk == 3861                  // '(' '-'
     || lk == 3891                  // '[' '-'
     || lk == 3921                  // '{' '-'
     || lk == 3971                  // Identifier '--'
     || lk == 3972                  // Null '--'
     || lk == 3973                  // True '--'
     || lk == 3974                  // False '--'
     || lk == 3975                  // Character '--'
     || lk == 3976                  // String '--'
     || lk == 3977                  // Integer '--'
     || lk == 3978                  // Complex '--'
     || lk == 3979                  // Real '--'
     || lk == 3989                  // '(' '--'
     || lk == 4019                  // '[' '--'
     || lk == 4049                  // '{' '--'
     || lk == 4227                  // Identifier '.'
     || lk == 4885                  // '(' ';'
     || lk == 4915                  // '[' ';'
     || lk == 4945                  // '{' ';'
     || lk == 6531                  // Identifier '['
     || lk == 6549                  // '(' '['
     || lk == 6579                  // '[' '['
     || lk == 6609                  // '{' '['
     || lk == 6707                  // '[' ']'
     || lk == 7061                  // '(' 'break'
     || lk == 7091                  // '[' 'break'
     || lk == 7121                  // '{' 'break'
     || lk == 7445                  // '(' 'continue'
     || lk == 7475                  // '[' 'continue'
     || lk == 7505                  // '{' 'continue'
     || lk == 7701                  // '(' 'do'
     || lk == 7731                  // '[' 'do'
     || lk == 7761                  // '{' 'do'
     || lk == 7957                  // '(' 'export'
     || lk == 7987                  // '[' 'export'
     || lk == 8017                  // '{' 'export'
     || lk == 8085                  // '(' 'f32'
     || lk == 8115                  // '[' 'f32'
     || lk == 8145                  // '{' 'f32'
     || lk == 8213                  // '(' 'f64'
     || lk == 8243                  // '[' 'f64'
     || lk == 8273                  // '{' 'f64'
     || lk == 8341                  // '(' 'for'
     || lk == 8371                  // '[' 'for'
     || lk == 8401                  // '{' 'for'
     || lk == 8469                  // '(' 'foreach'
     || lk == 8499                  // '[' 'foreach'
     || lk == 8529                  // '{' 'foreach'
     || lk == 8597                  // '(' 'global'
     || lk == 8627                  // '[' 'global'
     || lk == 8657                  // '{' 'global'
     || lk == 8725                  // '(' 'i32'
     || lk == 8755                  // '[' 'i32'
     || lk == 8785                  // '{' 'i32'
     || lk == 8853                  // '(' 'i64'
     || lk == 8883                  // '[' 'i64'
     || lk == 8913                  // '{' 'i64'
     || lk == 8981                  // '(' 'if'
     || lk == 9011                  // '[' 'if'
     || lk == 9041                  // '{' 'if'
     || lk == 9109                  // '(' 'import'
     || lk == 9139                  // '[' 'import'
     || lk == 9169                  // '{' 'import'
     || lk == 9237                  // '(' 'include'
     || lk == 9267                  // '[' 'include'
     || lk == 9297                  // '{' 'include'
     || lk == 9365                  // '(' 'local'
     || lk == 9395                  // '[' 'local'
     || lk == 9425                  // '{' 'local'
     || lk == 9493                  // '(' 'return'
     || lk == 9523                  // '[' 'return'
     || lk == 9553                  // '{' 'return'
     || lk == 9621                  // '(' 'switch'
     || lk == 9651                  // '[' 'switch'
     || lk == 9681                  // '{' 'switch'
     || lk == 9749                  // '(' 'test'
     || lk == 9779                  // '[' 'test'
     || lk == 9809                  // '{' 'test'
     || lk == 9877                  // '(' 'throw'
     || lk == 9907                  // '[' 'throw'
     || lk == 9937                  // '{' 'throw'
     || lk == 10005                 // '(' 'try'
     || lk == 10035                 // '[' 'try'
     || lk == 10065                 // '{' 'try'
     || lk == 10133                 // '(' 'typeof'
     || lk == 10163                 // '[' 'typeof'
     || lk == 10193                 // '{' 'typeof'
     || lk == 10261                 // '(' 'while'
     || lk == 10291                 // '[' 'while'
     || lk == 10321                 // '{' 'while'
     || lk == 10389                 // '(' '{'
     || lk == 10419                 // '[' '{'
     || lk == 10449                 // '{' '{'
     || lk == 10961                 // '{' '}'
     || lk == 11029                 // '(' '~'
     || lk == 11059                 // '[' '~'
     || lk == 11089)                // '{' '~'
    {
      lk = memoized(3, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Primary();
          lookahead1W(3);           // WhiteSpace^token | '++'
          consumeT(27);             // '++'
          memoize(3, e0A, -1);
          lk = -10;
        }
        catch (p1A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            try_Primary();
            lookahead1W(4);         // WhiteSpace^token | '--'
            consumeT(31);           // '--'
            memoize(3, e0A, -2);
            lk = -10;
          }
          catch (p2A)
          {
            lk = -9;
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            memoize(3, e0A, -9);
          }
        }
      }
    }
    switch (lk)
    {
    case -1:
      try_Primary();
      lookahead1W(3);               // WhiteSpace^token | '++'
      consumeT(27);                 // '++'
      break;
    case -2:
      try_Primary();
      lookahead1W(4);               // WhiteSpace^token | '--'
      consumeT(31);                 // '--'
      break;
    case 27:                        // '++'
      consumeT(27);                 // '++'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 31:                        // '--'
      consumeT(31);                 // '--'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 26:                        // '+'
      consumeT(26);                 // '+'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 30:                        // '-'
      consumeT(30);                 // '-'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 86:                        // '~'
      consumeT(86);                 // '~'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 14:                        // '!'
      consumeT(14);                 // '!'
      lookahead1W(18);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | WhiteSpace^token | '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case -10:
      break;
    default:
      try_Primary();
    }
  }

  function parse_Primary()
  {
    switch (l1)
    {
    case 3:                         // Identifier
    case 63:                        // 'f32'
    case 64:                        // 'f64'
    case 68:                        // 'i32'
    case 69:                        // 'i64'
      if (l1 != 3)                  // Identifier
      {
        parse_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      parse_Member();
      break;
    case 21:                        // '('
      parse_ParenthesizedExpression();
      break;
    default:
      parse_Value();
    }
  }

  function try_Primary()
  {
    switch (l1)
    {
    case 3:                         // Identifier
    case 63:                        // 'f32'
    case 64:                        // 'f64'
    case 68:                        // 'i32'
    case 69:                        // 'i64'
      if (l1 != 3)                  // Identifier
      {
        try_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      try_Member();
      break;
    case 21:                        // '('
      try_ParenthesizedExpression();
      break;
    default:
      try_Value();
    }
  }

  function parse_Statement()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(15);              // WhiteSpace^token | '(' | '.' | '{'
      break;
    default:
      lk = l1;
    }
    if (lk == 4227)                 // Identifier '.'
    {
      lk = memoized(4, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_NamespaceDeclaration();
          lk = -11;
        }
        catch (p11A)
        {
          lk = -12;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(4, e0, lk);
      }
    }
    switch (lk)
    {
    case 60:                        // 'do'
      parse_Do();
      break;
    case 80:                        // 'while'
      parse_While();
      break;
    case 65:                        // 'for'
      parse_For();
      break;
    case 66:                        // 'foreach'
      parse_ForEach();
      break;
    case 55:                        // 'break'
      parse_Break();
      break;
    case 58:                        // 'continue'
      parse_Continue();
      break;
    case 70:                        // 'if'
      parse_If();
      break;
    case 75:                        // 'switch'
      parse_Switch();
      break;
    case 78:                        // 'try'
      parse_Try();
      break;
    case 76:                        // 'test'
      parse_Test();
      break;
    case -11:
    case 10371:                     // Identifier '{'
      parse_NamespaceDeclaration();
      break;
    case 74:                        // 'return'
      parse_Return();
      break;
    case 62:                        // 'export'
      parse_Export();
      break;
    case 71:                        // 'import'
      parse_Import();
      break;
    case 72:                        // 'include'
      parse_Include();
      break;
    case 67:                        // 'global'
      parse_Global();
      break;
    case 73:                        // 'local'
      parse_Local();
      break;
    case 77:                        // 'throw'
      parse_Throw();
      break;
    case 79:                        // 'typeof'
      parse_TypeOf();
      break;
    case 38:                        // ';'
      parse_EmptyStatement();
      break;
    default:
      parse_FunctionDeclaration();
    }
  }

  function try_Statement()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(15);              // WhiteSpace^token | '(' | '.' | '{'
      break;
    default:
      lk = l1;
    }
    if (lk == 4227)                 // Identifier '.'
    {
      lk = memoized(4, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_NamespaceDeclaration();
          memoize(4, e0A, -11);
          lk = -22;
        }
        catch (p11A)
        {
          lk = -12;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(4, e0A, -12);
        }
      }
    }
    switch (lk)
    {
    case 60:                        // 'do'
      try_Do();
      break;
    case 80:                        // 'while'
      try_While();
      break;
    case 65:                        // 'for'
      try_For();
      break;
    case 66:                        // 'foreach'
      try_ForEach();
      break;
    case 55:                        // 'break'
      try_Break();
      break;
    case 58:                        // 'continue'
      try_Continue();
      break;
    case 70:                        // 'if'
      try_If();
      break;
    case 75:                        // 'switch'
      try_Switch();
      break;
    case 78:                        // 'try'
      try_Try();
      break;
    case 76:                        // 'test'
      try_Test();
      break;
    case -11:
    case 10371:                     // Identifier '{'
      try_NamespaceDeclaration();
      break;
    case 74:                        // 'return'
      try_Return();
      break;
    case 62:                        // 'export'
      try_Export();
      break;
    case 71:                        // 'import'
      try_Import();
      break;
    case 72:                        // 'include'
      try_Include();
      break;
    case 67:                        // 'global'
      try_Global();
      break;
    case 73:                        // 'local'
      try_Local();
      break;
    case 77:                        // 'throw'
      try_Throw();
      break;
    case 79:                        // 'typeof'
      try_TypeOf();
      break;
    case 38:                        // ';'
      try_EmptyStatement();
      break;
    case -22:
      break;
    default:
      try_FunctionDeclaration();
    }
  }

  function parse_Do()
  {
    consume(60);                    // 'do'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | 'while'
    consume(80);                    // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
  }

  function try_Do()
  {
    consumeT(60);                   // 'do'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | 'while'
    consumeT(80);                   // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
  }

  function parse_While()
  {
    consume(80);                    // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_While()
  {
    consumeT(80);                   // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    consume(65);                    // 'for'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(38);                    // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(38);                    // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_For()
  {
    consumeT(65);                   // 'for'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(38);                   // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(38);                   // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_ForEach()
  {
    consume(66);                    // 'foreach'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(38);                    // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(38);                    // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_ForEach()
  {
    consumeT(66);                   // 'foreach'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(38);                   // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(38);                   // ';'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Break()
  {
    consume(55);                    // 'break'
  }

  function try_Break()
  {
    consumeT(55);                   // 'break'
  }

  function parse_Continue()
  {
    consume(58);                    // 'continue'
  }

  function try_Continue()
  {
    consumeT(58);                   // 'continue'
  }

  function parse_If()
  {
    consume(70);                    // 'if'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(31);                // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' |
                                    // ',' | '-' | '--' | ':' | ';' | '[' | ']' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 61:                        // 'else'
      lookahead2W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 445                   // 'else' Identifier
     || lk == 573                   // 'else' Null
     || lk == 701                   // 'else' True
     || lk == 829                   // 'else' False
     || lk == 957                   // 'else' Character
     || lk == 1085                  // 'else' String
     || lk == 1213                  // 'else' Integer
     || lk == 1341                  // 'else' Complex
     || lk == 1469                  // 'else' Real
     || lk == 1597                  // 'else' Comment
     || lk == 1853                  // 'else' '!'
     || lk == 2749                  // 'else' '('
     || lk == 3389                  // 'else' '+'
     || lk == 3517                  // 'else' '++'
     || lk == 3901                  // 'else' '-'
     || lk == 4029                  // 'else' '--'
     || lk == 4925                  // 'else' ';'
     || lk == 6589                  // 'else' '['
     || lk == 7101                  // 'else' 'break'
     || lk == 7485                  // 'else' 'continue'
     || lk == 7741                  // 'else' 'do'
     || lk == 7997                  // 'else' 'export'
     || lk == 8125                  // 'else' 'f32'
     || lk == 8253                  // 'else' 'f64'
     || lk == 8381                  // 'else' 'for'
     || lk == 8509                  // 'else' 'foreach'
     || lk == 8637                  // 'else' 'global'
     || lk == 8765                  // 'else' 'i32'
     || lk == 8893                  // 'else' 'i64'
     || lk == 9021                  // 'else' 'if'
     || lk == 9149                  // 'else' 'import'
     || lk == 9277                  // 'else' 'include'
     || lk == 9405                  // 'else' 'local'
     || lk == 9533                  // 'else' 'return'
     || lk == 9661                  // 'else' 'switch'
     || lk == 9789                  // 'else' 'test'
     || lk == 9917                  // 'else' 'throw'
     || lk == 10045                 // 'else' 'try'
     || lk == 10173                 // 'else' 'typeof'
     || lk == 10301                 // 'else' 'while'
     || lk == 10429                 // 'else' '{'
     || lk == 11069)                // 'else' '~'
    {
      lk = memoized(5, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Else();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(5, e0, lk);
      }
    }
    if (lk == -1)
    {
      parse_Else();
    }
  }

  function try_If()
  {
    consumeT(70);                   // 'if'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(31);                // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' |
                                    // ',' | '-' | '--' | ':' | ';' | '[' | ']' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 61:                        // 'else'
      lookahead2W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 445                   // 'else' Identifier
     || lk == 573                   // 'else' Null
     || lk == 701                   // 'else' True
     || lk == 829                   // 'else' False
     || lk == 957                   // 'else' Character
     || lk == 1085                  // 'else' String
     || lk == 1213                  // 'else' Integer
     || lk == 1341                  // 'else' Complex
     || lk == 1469                  // 'else' Real
     || lk == 1597                  // 'else' Comment
     || lk == 1853                  // 'else' '!'
     || lk == 2749                  // 'else' '('
     || lk == 3389                  // 'else' '+'
     || lk == 3517                  // 'else' '++'
     || lk == 3901                  // 'else' '-'
     || lk == 4029                  // 'else' '--'
     || lk == 4925                  // 'else' ';'
     || lk == 6589                  // 'else' '['
     || lk == 7101                  // 'else' 'break'
     || lk == 7485                  // 'else' 'continue'
     || lk == 7741                  // 'else' 'do'
     || lk == 7997                  // 'else' 'export'
     || lk == 8125                  // 'else' 'f32'
     || lk == 8253                  // 'else' 'f64'
     || lk == 8381                  // 'else' 'for'
     || lk == 8509                  // 'else' 'foreach'
     || lk == 8637                  // 'else' 'global'
     || lk == 8765                  // 'else' 'i32'
     || lk == 8893                  // 'else' 'i64'
     || lk == 9021                  // 'else' 'if'
     || lk == 9149                  // 'else' 'import'
     || lk == 9277                  // 'else' 'include'
     || lk == 9405                  // 'else' 'local'
     || lk == 9533                  // 'else' 'return'
     || lk == 9661                  // 'else' 'switch'
     || lk == 9789                  // 'else' 'test'
     || lk == 9917                  // 'else' 'throw'
     || lk == 10045                 // 'else' 'try'
     || lk == 10173                 // 'else' 'typeof'
     || lk == 10301                 // 'else' 'while'
     || lk == 10429                 // 'else' '{'
     || lk == 11069)                // 'else' '~'
    {
      lk = memoized(5, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Else();
          memoize(5, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(5, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk == -1)
    {
      try_Else();
    }
  }

  function parse_Else()
  {
    consume(61);                    // 'else'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Else()
  {
    consumeT(61);                   // 'else'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    consume(75);                    // 'switch'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
    lookahead1W(10);                // WhiteSpace^token | '{'
    consume(81);                    // '{'
    for (;;)
    {
      lookahead1W(8);               // WhiteSpace^token | 'case'
      parse_Case();
      if (l1 != 56)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 59)                   // 'default'
    {
      parse_Default();
    }
    consume(85);                    // '}'
  }

  function try_Switch()
  {
    consumeT(75);                   // 'switch'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
    lookahead1W(10);                // WhiteSpace^token | '{'
    consumeT(81);                   // '{'
    for (;;)
    {
      lookahead1W(8);               // WhiteSpace^token | 'case'
      try_Case();
      if (l1 != 56)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 59)                   // 'default'
    {
      try_Default();
    }
    consumeT(85);                   // '}'
  }

  function parse_Case()
  {
    consume(56);                    // 'case'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consume(36);                    // ':'
    for (;;)
    {
      lookahead1W(30);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'export' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 56                  // 'case'
       || l1 == 59                  // 'default'
       || l1 == 85)                 // '}'
      {
        break;
      }
      parse_Expression();
    }
  }

  function try_Case()
  {
    consumeT(56);                   // 'case'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consumeT(36);                   // ':'
    for (;;)
    {
      lookahead1W(30);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'export' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 56                  // 'case'
       || l1 == 59                  // 'default'
       || l1 == 85)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Default()
  {
    consume(59);                    // 'default'
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consume(36);                    // ':'
    for (;;)
    {
      lookahead1W(26);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      if (l1 == 85)                 // '}'
      {
        break;
      }
      parse_Expression();
    }
  }

  function try_Default()
  {
    consumeT(59);                   // 'default'
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consumeT(36);                   // ':'
    for (;;)
    {
      lookahead1W(26);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
      if (l1 == 85)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Try()
  {
    consume(78);                    // 'try'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(31);                // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' |
                                    // ',' | '-' | '--' | ':' | ';' | '[' | ']' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 57:                        // 'catch'
      lookahead2W(1);               // WhiteSpace^token | '('
      break;
    default:
      lk = l1;
    }
    if (lk == 2745)                 // 'catch' '('
    {
      lk = memoized(6, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Catch();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(6, e0, lk);
      }
    }
    if (lk == -1)
    {
      parse_Catch();
    }
  }

  function try_Try()
  {
    consumeT(78);                   // 'try'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(31);                // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' |
                                    // ',' | '-' | '--' | ':' | ';' | '[' | ']' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 57:                        // 'catch'
      lookahead2W(1);               // WhiteSpace^token | '('
      break;
    default:
      lk = l1;
    }
    if (lk == 2745)                 // 'catch' '('
    {
      lk = memoized(6, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Catch();
          memoize(6, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(6, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk == -1)
    {
      try_Catch();
    }
  }

  function parse_Test()
  {
    consume(76);                    // 'test'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(24);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    switch (l1)
    {
    case 38:                        // ';'
      lookahead2W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 2854                  // ';' ')'
     || lk == 4902)                 // ';' ';'
    {
      lk = memoized(7, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Expression();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(7, e0, lk);
      }
    }
    if (lk == -1
     || lk == 3                     // Identifier
     || lk == 4                     // Null
     || lk == 5                     // True
     || lk == 6                     // False
     || lk == 7                     // Character
     || lk == 8                     // String
     || lk == 9                     // Integer
     || lk == 10                    // Complex
     || lk == 11                    // Real
     || lk == 12                    // Comment
     || lk == 14                    // '!'
     || lk == 21                    // '('
     || lk == 26                    // '+'
     || lk == 27                    // '++'
     || lk == 30                    // '-'
     || lk == 31                    // '--'
     || lk == 51                    // '['
     || lk == 55                    // 'break'
     || lk == 58                    // 'continue'
     || lk == 60                    // 'do'
     || lk == 62                    // 'export'
     || lk == 63                    // 'f32'
     || lk == 64                    // 'f64'
     || lk == 65                    // 'for'
     || lk == 66                    // 'foreach'
     || lk == 67                    // 'global'
     || lk == 68                    // 'i32'
     || lk == 69                    // 'i64'
     || lk == 70                    // 'if'
     || lk == 71                    // 'import'
     || lk == 72                    // 'include'
     || lk == 73                    // 'local'
     || lk == 74                    // 'return'
     || lk == 75                    // 'switch'
     || lk == 76                    // 'test'
     || lk == 77                    // 'throw'
     || lk == 78                    // 'try'
     || lk == 79                    // 'typeof'
     || lk == 80                    // 'while'
     || lk == 81                    // '{'
     || lk == 86)                   // '~'
    {
      parse_Expression();
    }
    lookahead1W(12);                // WhiteSpace^token | ')' | ';'
    if (l1 == 38)                   // ';'
    {
      consume(38);                  // ';'
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      switch (l1)
      {
      case 38:                      // ';'
        lookahead2W(24);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      if (lk == 2854                // ';' ')'
       || lk == 4902)               // ';' ';'
      {
        lk = memoized(8, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2;
          try
          {
            try_Expression();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(8, e0, lk);
        }
      }
      if (lk == -1
       || lk == 3                   // Identifier
       || lk == 4                   // Null
       || lk == 5                   // True
       || lk == 6                   // False
       || lk == 7                   // Character
       || lk == 8                   // String
       || lk == 9                   // Integer
       || lk == 10                  // Complex
       || lk == 11                  // Real
       || lk == 12                  // Comment
       || lk == 14                  // '!'
       || lk == 21                  // '('
       || lk == 26                  // '+'
       || lk == 27                  // '++'
       || lk == 30                  // '-'
       || lk == 31                  // '--'
       || lk == 51                  // '['
       || lk == 55                  // 'break'
       || lk == 58                  // 'continue'
       || lk == 60                  // 'do'
       || lk == 62                  // 'export'
       || lk == 63                  // 'f32'
       || lk == 64                  // 'f64'
       || lk == 65                  // 'for'
       || lk == 66                  // 'foreach'
       || lk == 67                  // 'global'
       || lk == 68                  // 'i32'
       || lk == 69                  // 'i64'
       || lk == 70                  // 'if'
       || lk == 71                  // 'import'
       || lk == 72                  // 'include'
       || lk == 73                  // 'local'
       || lk == 74                  // 'return'
       || lk == 75                  // 'switch'
       || lk == 76                  // 'test'
       || lk == 77                  // 'throw'
       || lk == 78                  // 'try'
       || lk == 79                  // 'typeof'
       || lk == 80                  // 'while'
       || lk == 81                  // '{'
       || lk == 86)                 // '~'
      {
        parse_Expression();
      }
      lookahead1W(12);              // WhiteSpace^token | ')' | ';'
      if (l1 == 38)                 // ';'
      {
        consume(38);                // ';'
        lookahead1W(24);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
        if (l1 != 22)               // ')'
        {
          parse_Expression();
        }
      }
    }
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(31);                // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' |
                                    // ',' | '-' | '--' | ':' | ';' | '[' | ']' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 57:                        // 'catch'
      lookahead2W(1);               // WhiteSpace^token | '('
      break;
    default:
      lk = l1;
    }
    if (lk == 2745)                 // 'catch' '('
    {
      lk = memoized(9, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Catch();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(9, e0, lk);
      }
    }
    if (lk == -1)
    {
      parse_Catch();
    }
  }

  function try_Test()
  {
    consumeT(76);                   // 'test'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(24);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    switch (l1)
    {
    case 38:                        // ';'
      lookahead2W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 2854                  // ';' ')'
     || lk == 4902)                 // ';' ';'
    {
      lk = memoized(7, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Expression();
          memoize(7, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(7, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk == -1
     || lk == 3                     // Identifier
     || lk == 4                     // Null
     || lk == 5                     // True
     || lk == 6                     // False
     || lk == 7                     // Character
     || lk == 8                     // String
     || lk == 9                     // Integer
     || lk == 10                    // Complex
     || lk == 11                    // Real
     || lk == 12                    // Comment
     || lk == 14                    // '!'
     || lk == 21                    // '('
     || lk == 26                    // '+'
     || lk == 27                    // '++'
     || lk == 30                    // '-'
     || lk == 31                    // '--'
     || lk == 51                    // '['
     || lk == 55                    // 'break'
     || lk == 58                    // 'continue'
     || lk == 60                    // 'do'
     || lk == 62                    // 'export'
     || lk == 63                    // 'f32'
     || lk == 64                    // 'f64'
     || lk == 65                    // 'for'
     || lk == 66                    // 'foreach'
     || lk == 67                    // 'global'
     || lk == 68                    // 'i32'
     || lk == 69                    // 'i64'
     || lk == 70                    // 'if'
     || lk == 71                    // 'import'
     || lk == 72                    // 'include'
     || lk == 73                    // 'local'
     || lk == 74                    // 'return'
     || lk == 75                    // 'switch'
     || lk == 76                    // 'test'
     || lk == 77                    // 'throw'
     || lk == 78                    // 'try'
     || lk == 79                    // 'typeof'
     || lk == 80                    // 'while'
     || lk == 81                    // '{'
     || lk == 86)                   // '~'
    {
      try_Expression();
    }
    lookahead1W(12);                // WhiteSpace^token | ')' | ';'
    if (l1 == 38)                   // ';'
    {
      consumeT(38);                 // ';'
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      switch (l1)
      {
      case 38:                      // ';'
        lookahead2W(24);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      if (lk == 2854                // ';' ')'
       || lk == 4902)               // ';' ';'
      {
        lk = memoized(8, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2;
          try
          {
            try_Expression();
            memoize(8, e0A, -1);
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            memoize(8, e0A, -2);
          }
          lk = -2;
        }
      }
      if (lk == -1
       || lk == 3                   // Identifier
       || lk == 4                   // Null
       || lk == 5                   // True
       || lk == 6                   // False
       || lk == 7                   // Character
       || lk == 8                   // String
       || lk == 9                   // Integer
       || lk == 10                  // Complex
       || lk == 11                  // Real
       || lk == 12                  // Comment
       || lk == 14                  // '!'
       || lk == 21                  // '('
       || lk == 26                  // '+'
       || lk == 27                  // '++'
       || lk == 30                  // '-'
       || lk == 31                  // '--'
       || lk == 51                  // '['
       || lk == 55                  // 'break'
       || lk == 58                  // 'continue'
       || lk == 60                  // 'do'
       || lk == 62                  // 'export'
       || lk == 63                  // 'f32'
       || lk == 64                  // 'f64'
       || lk == 65                  // 'for'
       || lk == 66                  // 'foreach'
       || lk == 67                  // 'global'
       || lk == 68                  // 'i32'
       || lk == 69                  // 'i64'
       || lk == 70                  // 'if'
       || lk == 71                  // 'import'
       || lk == 72                  // 'include'
       || lk == 73                  // 'local'
       || lk == 74                  // 'return'
       || lk == 75                  // 'switch'
       || lk == 76                  // 'test'
       || lk == 77                  // 'throw'
       || lk == 78                  // 'try'
       || lk == 79                  // 'typeof'
       || lk == 80                  // 'while'
       || lk == 81                  // '{'
       || lk == 86)                 // '~'
      {
        try_Expression();
      }
      lookahead1W(12);              // WhiteSpace^token | ')' | ';'
      if (l1 == 38)                 // ';'
      {
        consumeT(38);               // ';'
        lookahead1W(24);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
        if (l1 != 22)               // ')'
        {
          try_Expression();
        }
      }
    }
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(31);                // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' |
                                    // ',' | '-' | '--' | ':' | ';' | '[' | ']' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 57:                        // 'catch'
      lookahead2W(1);               // WhiteSpace^token | '('
      break;
    default:
      lk = l1;
    }
    if (lk == 2745)                 // 'catch' '('
    {
      lk = memoized(9, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Catch();
          memoize(9, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(9, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk == -1)
    {
      try_Catch();
    }
  }

  function parse_Catch()
  {
    consume(57);                    // 'catch'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Catch()
  {
    consumeT(57);                   // 'catch'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_NamespaceDeclaration()
  {
    consume(3);                     // Identifier
    for (;;)
    {
      lookahead1W(14);              // WhiteSpace^token | '.' | '{'
      if (l1 != 33)                 // '.'
      {
        break;
      }
      consume(33);                  // '.'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
    }
    parse_Block();
  }

  function try_NamespaceDeclaration()
  {
    consumeT(3);                    // Identifier
    for (;;)
    {
      lookahead1W(14);              // WhiteSpace^token | '.' | '{'
      if (l1 != 33)                 // '.'
      {
        break;
      }
      consumeT(33);                 // '.'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consumeT(3);                  // Identifier
    }
    try_Block();
  }

  function parse_FunctionDeclaration()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(11);              // WhiteSpace^token | '(' | '.'
      break;
    default:
      lk = l1;
    }
    if (lk == 2691                  // Identifier '('
     || lk == 4227)                 // Identifier '.'
    {
      lk = memoized(10, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(11);        // WhiteSpace^token | '(' | '.'
            if (l1 != 33)           // '.'
            {
              break;
            }
            consumeT(33);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(21);             // '('
          lookahead1W(24);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          if (l1 != 22)             // ')'
          {
            try_Arguments();
          }
          consumeT(22);             // ')'
          lookahead1W(7);           // WhiteSpace^token | '='
          consumeT(43);             // '='
          lookahead1W(21);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          try_Expression();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(10, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(11);            // WhiteSpace^token | '(' | '.'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consume(33);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(21);                  // '('
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      if (l1 != 22)                 // ')'
      {
        parse_Arguments();
      }
      consume(22);                  // ')'
      lookahead1W(7);               // WhiteSpace^token | '='
      consume(43);                  // '='
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      parse_Expression();
      break;
    default:
      if (l1 != 3)                  // Identifier
      {
        parse_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(11);            // WhiteSpace^token | '(' | '.'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consume(33);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(21);                  // '('
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      if (l1 != 22)                 // ')'
      {
        parse_Arguments();
      }
      consume(22);                  // ')'
      lookahead1W(10);              // WhiteSpace^token | '{'
      parse_Block();
    }
  }

  function try_FunctionDeclaration()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(11);              // WhiteSpace^token | '(' | '.'
      break;
    default:
      lk = l1;
    }
    if (lk == 2691                  // Identifier '('
     || lk == 4227)                 // Identifier '.'
    {
      lk = memoized(10, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(11);        // WhiteSpace^token | '(' | '.'
            if (l1 != 33)           // '.'
            {
              break;
            }
            consumeT(33);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(21);             // '('
          lookahead1W(24);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          if (l1 != 22)             // ')'
          {
            try_Arguments();
          }
          consumeT(22);             // ')'
          lookahead1W(7);           // WhiteSpace^token | '='
          consumeT(43);             // '='
          lookahead1W(21);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          try_Expression();
          memoize(10, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(10, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(11);            // WhiteSpace^token | '(' | '.'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consumeT(33);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(21);                 // '('
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      if (l1 != 22)                 // ')'
      {
        try_Arguments();
      }
      consumeT(22);                 // ')'
      lookahead1W(7);               // WhiteSpace^token | '='
      consumeT(43);                 // '='
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      try_Expression();
      break;
    case -3:
      break;
    default:
      if (l1 != 3)                  // Identifier
      {
        try_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(11);            // WhiteSpace^token | '(' | '.'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consumeT(33);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(21);                 // '('
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      if (l1 != 22)                 // ')'
      {
        try_Arguments();
      }
      consumeT(22);                 // ')'
      lookahead1W(10);              // WhiteSpace^token | '{'
      try_Block();
    }
  }

  function parse_Return()
  {
    consume(74);                    // 'return'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Return()
  {
    consumeT(74);                   // 'return'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Export()
  {
    consume(62);                    // 'export'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Export()
  {
    consumeT(62);                   // 'export'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Import()
  {
    consume(71);                    // 'import'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Import()
  {
    consumeT(71);                   // 'import'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Include()
  {
    consume(72);                    // 'include'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Include()
  {
    consumeT(72);                   // 'include'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Global()
  {
    consume(67);                    // 'global'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Global()
  {
    consumeT(67);                   // 'global'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Local()
  {
    consume(73);                    // 'local'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Local()
  {
    consumeT(73);                   // 'local'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Throw()
  {
    consume(77);                    // 'throw'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Throw()
  {
    consumeT(77);                   // 'throw'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_TypeOf()
  {
    consume(79);                    // 'typeof'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_TypeOf()
  {
    consumeT(79);                   // 'typeof'
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_EmptyStatement()
  {
    consume(38);                    // ';'
  }

  function try_EmptyStatement()
  {
    consumeT(38);                   // ';'
  }

  function parse_Type()
  {
    switch (l1)
    {
    case 68:                        // 'i32'
      consume(68);                  // 'i32'
      break;
    case 69:                        // 'i64'
      consume(69);                  // 'i64'
      break;
    case 63:                        // 'f32'
      consume(63);                  // 'f32'
      break;
    default:
      consume(64);                  // 'f64'
    }
  }

  function try_Type()
  {
    switch (l1)
    {
    case 68:                        // 'i32'
      consumeT(68);                 // 'i32'
      break;
    case 69:                        // 'i64'
      consumeT(69);                 // 'i64'
      break;
    case 63:                        // 'f32'
      consumeT(63);                 // 'f32'
      break;
    default:
      consumeT(64);                 // 'f64'
    }
  }

  function parse_Arguments()
  {
    parse_Expression();
    for (;;)
    {
      lookahead1W(16);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 29)                 // ','
      {
        break;
      }
      consume(29);                  // ','
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      parse_Expression();
    }
  }

  function try_Arguments()
  {
    try_Expression();
    for (;;)
    {
      lookahead1W(16);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 29)                 // ','
      {
        break;
      }
      consumeT(29);                 // ','
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      try_Expression();
    }
  }

  function parse_Member()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(33);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 2691                  // Identifier '('
     || lk == 4227)                 // Identifier '.'
    {
      lk = memoized(11, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(11);        // WhiteSpace^token | '(' | '.'
            if (l1 != 33)           // '.'
            {
              break;
            }
            consumeT(33);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(21);             // '('
          lookahead1W(24);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          if (l1 != 22)             // ')'
          {
            try_Arguments();
          }
          consumeT(22);             // ')'
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(11, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(11);            // WhiteSpace^token | '(' | '.'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consume(33);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(21);                  // '('
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      if (l1 != 22)                 // ')'
      {
        parse_Arguments();
      }
      consume(22);                  // ')'
      break;
    default:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(33);            // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consume(33);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      for (;;)
      {
        lookahead1W(32);            // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' |
                                    // '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 51:                    // '['
          lookahead2W(25);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          break;
        default:
          lk = l1;
        }
        if (lk == 435               // '[' Identifier
         || lk == 563               // '[' Null
         || lk == 691               // '[' True
         || lk == 819               // '[' False
         || lk == 947               // '[' Character
         || lk == 1075              // '[' String
         || lk == 1203              // '[' Integer
         || lk == 1331              // '[' Complex
         || lk == 1459              // '[' Real
         || lk == 1587              // '[' Comment
         || lk == 1843              // '[' '!'
         || lk == 2739              // '[' '('
         || lk == 3379              // '[' '+'
         || lk == 3507              // '[' '++'
         || lk == 3891              // '[' '-'
         || lk == 4019              // '[' '--'
         || lk == 4915              // '[' ';'
         || lk == 6579              // '[' '['
         || lk == 6707              // '[' ']'
         || lk == 7091              // '[' 'break'
         || lk == 7475              // '[' 'continue'
         || lk == 7731              // '[' 'do'
         || lk == 7987              // '[' 'export'
         || lk == 8115              // '[' 'f32'
         || lk == 8243              // '[' 'f64'
         || lk == 8371              // '[' 'for'
         || lk == 8499              // '[' 'foreach'
         || lk == 8627              // '[' 'global'
         || lk == 8755              // '[' 'i32'
         || lk == 8883              // '[' 'i64'
         || lk == 9011              // '[' 'if'
         || lk == 9139              // '[' 'import'
         || lk == 9267              // '[' 'include'
         || lk == 9395              // '[' 'local'
         || lk == 9523              // '[' 'return'
         || lk == 9651              // '[' 'switch'
         || lk == 9779              // '[' 'test'
         || lk == 9907              // '[' 'throw'
         || lk == 10035             // '[' 'try'
         || lk == 10163             // '[' 'typeof'
         || lk == 10291             // '[' 'while'
         || lk == 10419             // '[' '{'
         || lk == 11059)            // '[' '~'
        {
          lk = memoized(12, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2;
            try
            {
              consumeT(51);         // '['
              lookahead1W(25);      // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
              if (l1 != 52)         // ']'
              {
                try_Arguments();
              }
              consumeT(52);         // ']'
              lk = -1;
            }
            catch (p1B)
            {
              lk = -2;
            }
            b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
            b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
            b2 = b2B; e2 = e2B; end = e2B; }}
            memoize(12, e0, lk);
          }
        }
        if (lk != -1)
        {
          break;
        }
        consume(51);                // '['
        lookahead1W(25);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
        if (l1 != 52)               // ']'
        {
          parse_Arguments();
        }
        consume(52);                // ']'
      }
    }
  }

  function try_Member()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(33);              // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 2691                  // Identifier '('
     || lk == 4227)                 // Identifier '.'
    {
      lk = memoized(11, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(11);        // WhiteSpace^token | '(' | '.'
            if (l1 != 33)           // '.'
            {
              break;
            }
            consumeT(33);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(21);             // '('
          lookahead1W(24);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          if (l1 != 22)             // ')'
          {
            try_Arguments();
          }
          consumeT(22);             // ')'
          memoize(11, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(11, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(11);            // WhiteSpace^token | '(' | '.'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consumeT(33);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(21);                 // '('
      lookahead1W(24);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      if (l1 != 22)                 // ')'
      {
        try_Arguments();
      }
      consumeT(22);                 // ')'
      break;
    case -3:
      break;
    default:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(33);            // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        if (l1 != 33)               // '.'
        {
          break;
        }
        consumeT(33);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      for (;;)
      {
        lookahead1W(32);            // %OTHER | Identifier | Null | True | False | Character | String | Integer |
                                    // Complex | Real | Comment | WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' |
                                    // '&&' | '&=' | '(' | ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' |
                                    // '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' |
                                    // '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^=' | '^^' |
                                    // 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 51:                    // '['
          lookahead2W(25);          // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
          break;
        default:
          lk = l1;
        }
        if (lk == 435               // '[' Identifier
         || lk == 563               // '[' Null
         || lk == 691               // '[' True
         || lk == 819               // '[' False
         || lk == 947               // '[' Character
         || lk == 1075              // '[' String
         || lk == 1203              // '[' Integer
         || lk == 1331              // '[' Complex
         || lk == 1459              // '[' Real
         || lk == 1587              // '[' Comment
         || lk == 1843              // '[' '!'
         || lk == 2739              // '[' '('
         || lk == 3379              // '[' '+'
         || lk == 3507              // '[' '++'
         || lk == 3891              // '[' '-'
         || lk == 4019              // '[' '--'
         || lk == 4915              // '[' ';'
         || lk == 6579              // '[' '['
         || lk == 6707              // '[' ']'
         || lk == 7091              // '[' 'break'
         || lk == 7475              // '[' 'continue'
         || lk == 7731              // '[' 'do'
         || lk == 7987              // '[' 'export'
         || lk == 8115              // '[' 'f32'
         || lk == 8243              // '[' 'f64'
         || lk == 8371              // '[' 'for'
         || lk == 8499              // '[' 'foreach'
         || lk == 8627              // '[' 'global'
         || lk == 8755              // '[' 'i32'
         || lk == 8883              // '[' 'i64'
         || lk == 9011              // '[' 'if'
         || lk == 9139              // '[' 'import'
         || lk == 9267              // '[' 'include'
         || lk == 9395              // '[' 'local'
         || lk == 9523              // '[' 'return'
         || lk == 9651              // '[' 'switch'
         || lk == 9779              // '[' 'test'
         || lk == 9907              // '[' 'throw'
         || lk == 10035             // '[' 'try'
         || lk == 10163             // '[' 'typeof'
         || lk == 10291             // '[' 'while'
         || lk == 10419             // '[' '{'
         || lk == 11059)            // '[' '~'
        {
          lk = memoized(12, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2;
            try
            {
              consumeT(51);         // '['
              lookahead1W(25);      // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
              if (l1 != 52)         // ']'
              {
                try_Arguments();
              }
              consumeT(52);         // ']'
              memoize(12, e0B, -1);
              continue;
            }
            catch (p1B)
            {
              b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
              b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
              b2 = b2B; e2 = e2B; end = e2B; }}
              memoize(12, e0B, -2);
              break;
            }
          }
        }
        if (lk != -1)
        {
          break;
        }
        consumeT(51);               // '['
        lookahead1W(25);            // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
        if (l1 != 52)               // ']'
        {
          try_Arguments();
        }
        consumeT(52);               // ']'
      }
    }
  }

  function parse_Array()
  {
    consume(81);                    // '{'
    lookahead1W(29);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    if (l1 != 29                    // ','
     && l1 != 85)                   // '}'
    {
      parse_Element();
    }
    for (;;)
    {
      lookahead1W(13);              // WhiteSpace^token | ',' | '}'
      if (l1 != 29)                 // ','
      {
        break;
      }
      consume(29);                  // ','
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      parse_Element();
    }
    consume(85);                    // '}'
  }

  function try_Array()
  {
    consumeT(81);                   // '{'
    lookahead1W(29);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '}' |
                                    // '~'
    if (l1 != 29                    // ','
     && l1 != 85)                   // '}'
    {
      try_Element();
    }
    for (;;)
    {
      lookahead1W(13);              // WhiteSpace^token | ',' | '}'
      if (l1 != 29)                 // ','
      {
        break;
      }
      consumeT(29);                 // ','
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      try_Element();
    }
    consumeT(85);                   // '}'
  }

  function parse_Matrix()
  {
    consume(51);                    // '['
    lookahead1W(25);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    switch (l1)
    {
    case 38:                        // ';'
      lookahead2W(28);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' |
                                    // '{' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 4902)                 // ';' ';'
    {
      lk = memoized(13, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Row();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(13, e0, lk);
      }
    }
    if (lk != -2
     && lk != 52                    // ']'
     && lk != 422                   // ';' Identifier
     && lk != 550                   // ';' Null
     && lk != 678                   // ';' True
     && lk != 806                   // ';' False
     && lk != 934                   // ';' Character
     && lk != 1062                  // ';' String
     && lk != 1190                  // ';' Integer
     && lk != 1318                  // ';' Complex
     && lk != 1446                  // ';' Real
     && lk != 1574                  // ';' Comment
     && lk != 1830                  // ';' '!'
     && lk != 2726                  // ';' '('
     && lk != 3366                  // ';' '+'
     && lk != 3494                  // ';' '++'
     && lk != 3878                  // ';' '-'
     && lk != 4006                  // ';' '--'
     && lk != 6566                  // ';' '['
     && lk != 7078                  // ';' 'break'
     && lk != 7462                  // ';' 'continue'
     && lk != 7718                  // ';' 'do'
     && lk != 7974                  // ';' 'export'
     && lk != 8102                  // ';' 'f32'
     && lk != 8230                  // ';' 'f64'
     && lk != 8358                  // ';' 'for'
     && lk != 8486                  // ';' 'foreach'
     && lk != 8614                  // ';' 'global'
     && lk != 8742                  // ';' 'i32'
     && lk != 8870                  // ';' 'i64'
     && lk != 8998                  // ';' 'if'
     && lk != 9126                  // ';' 'import'
     && lk != 9254                  // ';' 'include'
     && lk != 9382                  // ';' 'local'
     && lk != 9510                  // ';' 'return'
     && lk != 9638                  // ';' 'switch'
     && lk != 9766                  // ';' 'test'
     && lk != 9894                  // ';' 'throw'
     && lk != 10022                 // ';' 'try'
     && lk != 10150                 // ';' 'typeof'
     && lk != 10278                 // ';' 'while'
     && lk != 10406                 // ';' '{'
     && lk != 11046)                // ';' '~'
    {
      parse_Row();
    }
    for (;;)
    {
      if (l1 != 38)                 // ';'
      {
        break;
      }
      consume(38);                  // ';'
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      parse_Row();
    }
    consume(52);                    // ']'
  }

  function try_Matrix()
  {
    consumeT(51);                   // '['
    lookahead1W(25);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    switch (l1)
    {
    case 38:                        // ';'
      lookahead2W(28);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' |
                                    // ';' | '[' | ']' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' |
                                    // '{' | '~'
      break;
    default:
      lk = l1;
    }
    if (lk == 4902)                 // ';' ';'
    {
      lk = memoized(13, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_Row();
          memoize(13, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(13, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk != -2
     && lk != 52                    // ']'
     && lk != 422                   // ';' Identifier
     && lk != 550                   // ';' Null
     && lk != 678                   // ';' True
     && lk != 806                   // ';' False
     && lk != 934                   // ';' Character
     && lk != 1062                  // ';' String
     && lk != 1190                  // ';' Integer
     && lk != 1318                  // ';' Complex
     && lk != 1446                  // ';' Real
     && lk != 1574                  // ';' Comment
     && lk != 1830                  // ';' '!'
     && lk != 2726                  // ';' '('
     && lk != 3366                  // ';' '+'
     && lk != 3494                  // ';' '++'
     && lk != 3878                  // ';' '-'
     && lk != 4006                  // ';' '--'
     && lk != 6566                  // ';' '['
     && lk != 7078                  // ';' 'break'
     && lk != 7462                  // ';' 'continue'
     && lk != 7718                  // ';' 'do'
     && lk != 7974                  // ';' 'export'
     && lk != 8102                  // ';' 'f32'
     && lk != 8230                  // ';' 'f64'
     && lk != 8358                  // ';' 'for'
     && lk != 8486                  // ';' 'foreach'
     && lk != 8614                  // ';' 'global'
     && lk != 8742                  // ';' 'i32'
     && lk != 8870                  // ';' 'i64'
     && lk != 8998                  // ';' 'if'
     && lk != 9126                  // ';' 'import'
     && lk != 9254                  // ';' 'include'
     && lk != 9382                  // ';' 'local'
     && lk != 9510                  // ';' 'return'
     && lk != 9638                  // ';' 'switch'
     && lk != 9766                  // ';' 'test'
     && lk != 9894                  // ';' 'throw'
     && lk != 10022                 // ';' 'try'
     && lk != 10150                 // ';' 'typeof'
     && lk != 10278                 // ';' 'while'
     && lk != 10406                 // ';' '{'
     && lk != 11046)                // ';' '~'
    {
      try_Row();
    }
    for (;;)
    {
      if (l1 != 38)                 // ';'
      {
        break;
      }
      consumeT(38);                 // ';'
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      try_Row();
    }
    consumeT(52);                   // ']'
  }

  function parse_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(22);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^=' | '^^' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 8:                         // String
      lookahead2W(20);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^=' | '^^' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4611                  // Identifier ':'
     || lk == 4616)                 // String ':'
    {
      parse_Key();
      lookahead1W(5);               // WhiteSpace^token | ':'
      consume(36);                  // ':'
    }
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
  }

  function try_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(22);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^=' | '^^' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 8:                         // String
      lookahead2W(20);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^=' | '^^' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4611                  // Identifier ':'
     || lk == 4616)                 // String ':'
    {
      try_Key();
      lookahead1W(5);               // WhiteSpace^token | ':'
      consumeT(36);                 // ':'
    }
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Key()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      consume(3);                   // Identifier
      break;
    default:
      consume(8);                   // String
    }
  }

  function try_Key()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      consumeT(3);                  // Identifier
      break;
    default:
      consumeT(8);                  // String
    }
  }

  function parse_Row()
  {
    parse_Column();
    for (;;)
    {
      lookahead1W(17);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 29)                 // ','
      {
        break;
      }
      consume(29);                  // ','
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      parse_Column();
    }
  }

  function try_Row()
  {
    try_Column();
    for (;;)
    {
      lookahead1W(17);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 29)                 // ','
      {
        break;
      }
      consumeT(29);                 // ','
      lookahead1W(21);              // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
      try_Column();
    }
  }

  function parse_Column()
  {
    parse_Expression();
  }

  function try_Column()
  {
    try_Expression();
  }

  function parse_ParenthesizedExpression()
  {
    consume(21);                    // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(22);                    // ')'
  }

  function try_ParenthesizedExpression()
  {
    consumeT(21);                   // '('
    lookahead1W(21);                // Identifier | Null | True | False | Character | String | Integer | Complex |
                                    // Real | Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' |
                                    // '[' | 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'typeof' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(22);                   // ')'
  }

  function parse_Value()
  {
    switch (l1)
    {
    case 9:                         // Integer
      consume(9);                   // Integer
      break;
    case 11:                        // Real
      consume(11);                  // Real
      break;
    case 10:                        // Complex
      consume(10);                  // Complex
      break;
    case 7:                         // Character
      consume(7);                   // Character
      break;
    case 8:                         // String
      consume(8);                   // String
      break;
    case 81:                        // '{'
      parse_Array();
      break;
    case 51:                        // '['
      parse_Matrix();
      break;
    case 4:                         // Null
      consume(4);                   // Null
      break;
    case 5:                         // True
      consume(5);                   // True
      break;
    default:
      consume(6);                   // False
    }
  }

  function try_Value()
  {
    switch (l1)
    {
    case 9:                         // Integer
      consumeT(9);                  // Integer
      break;
    case 11:                        // Real
      consumeT(11);                 // Real
      break;
    case 10:                        // Complex
      consumeT(10);                 // Complex
      break;
    case 7:                         // Character
      consumeT(7);                  // Character
      break;
    case 8:                         // String
      consumeT(8);                  // String
      break;
    case 81:                        // '{'
      try_Array();
      break;
    case 51:                        // '['
      try_Matrix();
      break;
    case 4:                         // Null
      consumeT(4);                  // Null
      break;
    case 5:                         // True
      consumeT(5);                  // True
      break;
    default:
      consumeT(6);                  // False
    }
  }

  function consume(t)
  {
    if (l1 == t)
    {
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = 0; }
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
      b1 = b2; e1 = e2; l2 = 0; }
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function matchW(tokenSetId)
  {
    var code;
    for (;;)
    {
      code = match(tokenSetId);
      if (code != 13)               // WhiteSpace^token
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
    lk = (l2 << 7) | l1;
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
  var bx, ex, sx, lx, tx;
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
    var result = MaiaScript.INITIAL[tokenSetId];
    var state = 0;

    for (var code = result & 511; code != 0; )
    {
      var charclass;
      var c0 = current < size ? input.charCodeAt(current) : 0;
      ++current;
      if (c0 < 0x80)
      {
        charclass = MaiaScript.MAP0[c0];
      }
      else if (c0 < 0xd800)
      {
        var c1 = c0 >> 5;
        charclass = MaiaScript.MAP1[(c0 & 31) + MaiaScript.MAP1[(c1 & 31) + MaiaScript.MAP1[c1 >> 5]]];
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
          if (MaiaScript.MAP2[m] > c0) hi = m - 1;
          else if (MaiaScript.MAP2[2 + m] < c0) lo = m + 1;
          else {charclass = MaiaScript.MAP2[4 + m]; break;}
          if (lo > hi) {charclass = 0; break;}
        }
      }

      state = code;
      var i0 = (charclass << 9) + code - 1;
      code = MaiaScript.TRANSITION[(i0 & 15) + MaiaScript.TRANSITION[i0 >> 4]];

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
    return (result & 127) - 1;
  }

}

MaiaScript.getTokenSet = function(tokenSetId)
{
  var set = [];
  var s = tokenSetId < 0 ? - tokenSetId : MaiaScript.INITIAL[tokenSetId] & 511;
  for (var i = 0; i < 87; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 292 + s - 1;
    var i1 = i0 >> 1;
    var f = MaiaScript.EXPECTED[(i0 & 1) + MaiaScript.EXPECTED[(i1 & 3) + MaiaScript.EXPECTED[i1 >> 2]]];
    for ( ; f != 0; f >>>= 1, ++j)
    {
      if ((f & 1) != 0)
      {
        set.push(MaiaScript.TOKEN[j]);
      }
    }
  }
  return set;
};

MaiaScript.MAP0 =
[
  /*   0 */ 71, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6,
  /*  36 */ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32,
  /*  64 */ 33, 34, 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44,
  /*  95 */ 7, 33, 45, 46, 47, 48, 49, 50, 51, 52, 53, 7, 54, 55, 56, 57, 58, 59, 7, 60, 61, 62, 63, 7, 64, 65, 66, 7,
  /* 123 */ 67, 68, 69, 70, 33
];

MaiaScript.MAP1 =
[
  /*   0 */ 54, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  27 */ 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  54 */ 90, 122, 216, 154, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185,
  /*  76 */ 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 71, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1,
  /* 102 */ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  /* 136 */ 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32, 33, 45, 46, 47, 48, 49, 50, 51, 52,
  /* 163 */ 53, 7, 54, 55, 56, 57, 58, 59, 7, 60, 61, 62, 63, 7, 64, 65, 66, 7, 67, 68, 69, 70, 33, 33, 33, 33, 33, 33,
  /* 191 */ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34,
  /* 218 */ 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44, 7
];

MaiaScript.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 33, 33
];

MaiaScript.INITIAL =
[
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1046, 24, 25, 26, 1051,
  /* 28 */ 28, 29, 30, 1055, 1056, 1057
];

MaiaScript.TRANSITION =
[
  /*    0 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*   18 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5252,
  /*   36 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791,
  /*   54 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2304, 2304, 2318, 5252, 3161, 2791, 2791, 2791,
  /*   72 */ 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*   90 */ 2791, 2791, 2791, 2791, 2791, 2791, 2304, 2304, 2318, 2791, 2791, 2791, 2791, 2791, 2320, 2791, 2791, 2791,
  /*  108 */ 2790, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  126 */ 2791, 2791, 2791, 2336, 2351, 5252, 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791,
  /*  144 */ 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2369,
  /*  162 */ 2384, 2402, 3161, 2791, 2791, 5258, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 2857, 2424, 2791,
  /*  180 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2545, 3159, 5252, 3161, 2791,
  /*  198 */ 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791,
  /*  216 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 2449, 5392, 3161, 3270, 5364, 5349, 4031, 3270,
  /*  234 */ 3270, 5354, 3269, 2452, 5359, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  252 */ 2791, 2791, 2791, 2791, 2791, 2468, 2483, 5252, 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791,
  /*  270 */ 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  288 */ 2791, 2502, 2517, 5252, 2536, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080,
  /*  306 */ 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2561, 2576, 5075,
  /*  324 */ 3161, 2791, 2791, 2915, 2320, 2791, 2791, 3641, 2790, 2791, 2595, 2791, 2791, 2732, 2381, 2791, 2791, 2791,
  /*  342 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2615, 2628, 2644, 5252, 3161, 2791, 2791, 2791,
  /*  360 */ 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  378 */ 2791, 2791, 2791, 2791, 2791, 2791, 2664, 2696, 2676, 5252, 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791,
  /*  396 */ 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  414 */ 2791, 2791, 2791, 2712, 2727, 5252, 2748, 2791, 2788, 2791, 2386, 2791, 2791, 2599, 2807, 2791, 2828, 2791,
  /*  432 */ 2852, 3571, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2873, 2894,
  /*  450 */ 2909, 2931, 2941, 2791, 2957, 2791, 2320, 2791, 2791, 2428, 2790, 2791, 3718, 2791, 2979, 6219, 2381, 2791,
  /*  468 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2486, 3001, 3016, 5252, 3161, 2791,
  /*  486 */ 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791,
  /*  504 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 4874, 3038, 3053, 3078, 4674, 2791, 3092, 2791, 2320, 2791,
  /*  522 */ 2791, 2428, 2790, 2791, 3718, 2791, 2979, 6219, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  540 */ 2791, 2791, 2791, 2791, 2878, 3858, 3864, 6209, 3161, 2791, 2791, 2353, 2320, 2791, 2791, 2791, 2790, 2791,
  /*  558 */ 3767, 2791, 2791, 3817, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  576 */ 2791, 3117, 3132, 5252, 3533, 2791, 3157, 2791, 2320, 2791, 2791, 2791, 3177, 2791, 2791, 2791, 2791, 5080,
  /*  594 */ 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3202, 3217, 5979,
  /*  612 */ 3161, 3270, 3236, 3399, 3255, 3270, 3270, 5403, 3269, 3220, 3287, 3375, 3311, 4182, 3332, 2791, 2791, 2791,
  /*  630 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3357, 3372, 5979, 3161, 3270, 3236, 3399,
  /*  648 */ 3255, 3270, 3270, 4510, 3269, 3239, 3391, 3375, 3415, 4182, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  666 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3357, 3372, 5979, 3161, 3270, 5339, 3399, 3436, 3270, 3270, 4510,
  /*  684 */ 3269, 3239, 3391, 3375, 3415, 4182, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  702 */ 2791, 2791, 2791, 3357, 3494, 6278, 3161, 5538, 3236, 3399, 3255, 3270, 3270, 4510, 3269, 3239, 3391, 3375,
  /*  720 */ 3415, 4182, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3357,
  /*  738 */ 3372, 5979, 3161, 3270, 3549, 3399, 3587, 3270, 3270, 4510, 3269, 3239, 3391, 3375, 3415, 4182, 2381, 2791,
  /*  756 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3357, 3372, 5979, 3161, 3270,
  /*  774 */ 3236, 3399, 3255, 3270, 3270, 4510, 3269, 3239, 3391, 4647, 3415, 3617, 3632, 2791, 2791, 2791, 2791, 2791,
  /*  792 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3357, 3657, 5325, 3161, 4970, 3236, 3399, 3255, 3270,
  /*  810 */ 3270, 4510, 3269, 3239, 3391, 3375, 3415, 4182, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  828 */ 2791, 2791, 2791, 2791, 2791, 3357, 3372, 5979, 3161, 3270, 3236, 5122, 3255, 3270, 3270, 6630, 3269, 3239,
  /*  846 */ 3391, 3375, 3415, 4182, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  864 */ 4775, 3693, 3708, 5252, 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080,
  /*  882 */ 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3947, 3742, 3757, 5252,
  /*  900 */ 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791,
  /*  918 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3792, 3807, 5252, 4882, 2791, 2791, 2791,
  /*  936 */ 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  954 */ 2791, 2791, 2791, 2791, 2791, 2791, 4784, 3833, 3848, 5252, 3880, 2791, 3937, 2791, 2648, 2791, 2791, 2791,
  /*  972 */ 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /*  990 */ 2791, 2791, 2791, 3963, 3978, 5252, 2985, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791,
  /* 1008 */ 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 4005,
  /* 1026 */ 4020, 5252, 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791,
  /* 1044 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5252, 3161, 2791,
  /* 1062 */ 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791,
  /* 1080 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 2449, 5392, 3161, 3270, 5364, 5349, 4047, 3270,
  /* 1098 */ 3270, 6522, 3269, 3239, 4083, 3375, 4104, 4137, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1116 */ 2791, 2791, 2791, 2791, 3531, 2444, 2449, 5392, 3161, 3270, 5364, 5349, 4047, 3270, 3270, 6522, 3269, 3239,
  /* 1134 */ 4083, 3375, 4104, 4122, 4197, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1152 */ 3531, 2444, 2449, 5392, 3161, 3270, 5364, 5349, 4047, 3270, 3270, 6576, 3269, 3239, 4229, 3375, 4104, 4137,
  /* 1170 */ 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 2449, 6511,
  /* 1188 */ 3161, 3270, 5364, 5349, 4253, 3270, 3270, 6522, 3269, 3239, 4083, 3375, 4104, 4137, 2381, 2791, 2791, 2791,
  /* 1206 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 2449, 6565, 3161, 3270, 5364, 5349,
  /* 1224 */ 4283, 3270, 3270, 5354, 3269, 2452, 5359, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1242 */ 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 2449, 5392, 3161, 3270, 5364, 5349, 4031, 3270, 3270, 3677,
  /* 1260 */ 3269, 2452, 4326, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1278 */ 2791, 2791, 3531, 2444, 2449, 6619, 3161, 3270, 5364, 4237, 4031, 3270, 3270, 5168, 3269, 2452, 5359, 2452,
  /* 1296 */ 5362, 3101, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 4350,
  /* 1314 */ 4365, 5252, 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791,
  /* 1332 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 4392, 3161, 2791,
  /* 1350 */ 2791, 2408, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 2812, 4419, 2791, 2791, 2791, 2791, 2791,
  /* 1368 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 4446, 4461, 5252, 3161, 2791, 2791, 2791, 2320, 2791,
  /* 1386 */ 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1404 */ 2791, 2791, 2791, 2791, 2791, 3895, 3910, 5252, 2680, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791,
  /* 1422 */ 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1440 */ 3531, 2444, 6173, 4499, 3161, 6097, 5364, 5349, 4047, 3270, 5208, 6522, 2763, 4526, 4542, 3375, 4104, 4137,
  /* 1458 */ 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 4584, 4629, 4644, 5392,
  /* 1476 */ 3161, 3270, 5364, 3295, 4047, 3270, 4977, 6522, 4061, 3239, 4083, 3375, 4104, 4152, 2381, 2791, 2791, 2791,
  /* 1494 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 4663, 4690, 4705, 5392, 3161, 3270, 4106, 5349,
  /* 1512 */ 4047, 4606, 5717, 6522, 3269, 4724, 4083, 5589, 4740, 4122, 4197, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1530 */ 2791, 2791, 2791, 2791, 2791, 2791, 4764, 4800, 4815, 5392, 3161, 3270, 5364, 5349, 4047, 3270, 3270, 6522,
  /* 1548 */ 3269, 3239, 4083, 4213, 4835, 4137, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1566 */ 2791, 2791, 4862, 4898, 4913, 4568, 3161, 3464, 4993, 5349, 5013, 3270, 5899, 6425, 4267, 6066, 5029, 5510,
  /* 1584 */ 4104, 4167, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5063, 5096,
  /* 1602 */ 5111, 6468, 3161, 5148, 5138, 3295, 4253, 3271, 3270, 6522, 3269, 3239, 4083, 4819, 5194, 4152, 2381, 2791,
  /* 1620 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5240, 5274, 5289, 5392, 3161, 3270,
  /* 1638 */ 5364, 5349, 4031, 3270, 3270, 5354, 3269, 2452, 5359, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791,
  /* 1656 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 6112, 5311, 3161, 4067, 5364, 5349, 4031, 3270,
  /* 1674 */ 3270, 5354, 3269, 5344, 5359, 5047, 4376, 3186, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1692 */ 2791, 2791, 2791, 2791, 5380, 5419, 5434, 5392, 3161, 3270, 5364, 4556, 4031, 6181, 3270, 5354, 3269, 4846,
  /* 1710 */ 4595, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1728 */ 3531, 2444, 2449, 5392, 3161, 3270, 5364, 5349, 4031, 3270, 3270, 5354, 3269, 5117, 3726, 2452, 5362, 3062,
  /* 1746 */ 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5456, 5484, 5499, 5950,
  /* 1764 */ 3161, 6335, 5526, 5219, 5561, 3270, 5440, 3478, 3601, 2452, 5359, 5605, 4430, 3062, 2381, 2791, 2791, 2791,
  /* 1782 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 4958, 5840, 3161, 3504, 5364, 5349,
  /* 1800 */ 4031, 3270, 3270, 5354, 3269, 2452, 5359, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1818 */ 2791, 2791, 2791, 2791, 2791, 2791, 5634, 5662, 5677, 6007, 3161, 3514, 5705, 3295, 4031, 5738, 3270, 5354,
  /* 1836 */ 3269, 2452, 5359, 4748, 3921, 3776, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1854 */ 2791, 2791, 3531, 2444, 5886, 5812, 3161, 6143, 5178, 5349, 4031, 6322, 5038, 5766, 4297, 4997, 5359, 5750,
  /* 1872 */ 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444,
  /* 1890 */ 2449, 5392, 3161, 3270, 5787, 3524, 4031, 6309, 3270, 3677, 3269, 2452, 4326, 2452, 5362, 3062, 2381, 2791,
  /* 1908 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5828, 5856, 5871, 5646, 3161, 5924,
  /* 1926 */ 4088, 5689, 4031, 6052, 3270, 5354, 3269, 2772, 2836, 5966, 5362, 3776, 2381, 2791, 2791, 2791, 2791, 2791,
  /* 1944 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 5995, 6023, 6038, 5392, 3161, 3270, 6082, 5800, 4031, 4613,
  /* 1962 */ 6128, 5224, 3269, 2452, 5359, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 1980 */ 2791, 2791, 2791, 2791, 6197, 6235, 6250, 5392, 3161, 3270, 6294, 6265, 4031, 5908, 6351, 5354, 5575, 2452,
  /* 1998 */ 5359, 2452, 4472, 3141, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 2016 */ 3531, 2444, 4943, 5618, 3161, 3270, 5364, 4483, 4403, 3420, 4708, 5168, 3450, 3667, 5771, 5158, 4208, 3341,
  /* 2034 */ 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 6367, 6395, 6410, 5392,
  /* 2052 */ 3161, 5545, 5364, 5349, 4031, 3270, 3270, 5354, 3269, 3316, 5359, 5937, 5362, 3062, 2381, 2791, 2791, 2791,
  /* 2070 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 6158, 6379, 3161, 4310, 5364, 4334,
  /* 2088 */ 4031, 3270, 3270, 5354, 3269, 2452, 5359, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 2106 */ 2791, 2791, 2791, 2791, 2791, 2791, 3531, 2444, 4928, 5468, 3161, 5295, 5364, 3560, 3989, 5722, 3270, 5354,
  /* 2124 */ 3269, 2452, 5359, 2452, 5362, 3062, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 2142 */ 2791, 2791, 3022, 6441, 6456, 5252, 3161, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791,
  /* 2160 */ 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 6484,
  /* 2178 */ 6499, 5252, 2520, 2791, 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791,
  /* 2196 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2579, 6538, 6553, 5252, 3161, 2791,
  /* 2214 */ 2791, 2791, 2320, 2791, 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791,
  /* 2232 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 6592, 6607, 5252, 3161, 2791, 2791, 2791, 2320, 2791,
  /* 2250 */ 2791, 2791, 2790, 2791, 2791, 2791, 2791, 5080, 2381, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 2268 */ 2791, 2791, 2791, 2791, 2791, 2963, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 2286 */ 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791, 2791,
  /* 2304 */ 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 7202, 0, 0, 0, 0,
  /* 2324 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 7680, 65, 7680, 65, 7680, 7680, 7680, 7680, 7680, 7680,
  /* 2349 */ 7680, 7680, 7745, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 129, 0, 0, 53, 53, 0, 53, 0, 53, 53,
  /* 2378 */ 53, 53, 53, 53, 53, 53, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 0, 0, 0, 0, 0, 4608, 124, 0,
  /* 2409 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 0, 186, 0, 0, 0, 4608, 4608, 4608, 4608, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2440 */ 55, 0, 0, 0, 0, 0, 2083, 2083, 0, 2083, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 2461 */ 2083, 2083, 2083, 2083, 0, 0, 0, 0, 0, 0, 0, 8770, 0, 8770, 0, 0, 0, 0, 0, 0, 0, 0, 8770, 0, 0, 0, 0, 0, 0,
  /* 2490 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 15360, 0, 0, 0, 0, 0, 0, 9795, 0, 9795, 0, 0, 0, 0, 0, 0, 0, 0, 9795, 0, 0, 0,
  /* 2521 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43520, 6735, 0, 0, 0, 10240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6735, 0,
  /* 2552 */ 6735, 6735, 6735, 6735, 6735, 6735, 6735, 6735, 6735, 0, 0, 54, 54, 0, 54, 0, 54, 54, 54, 54, 54, 54, 54,
  /* 2575 */ 54, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44032, 0, 0, 0, 0, 0, 4096, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2608 */ 0, 0, 0, 230, 0, 0, 0, 0, 11264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11264, 0, 0, 0, 11264, 11264, 0, 11264, 11264,
  /* 2635 */ 11264, 11264, 11264, 11264, 11264, 11264, 11264, 11264, 11264, 11264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2657 */ 0, 0, 0, 21504, 25088, 143, 0, 0, 0, 11776, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11776, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2687 */ 0, 0, 0, 0, 0, 28160, 0, 6735, 0, 11776, 0, 0, 0, 0, 0, 0, 11776, 0, 0, 0, 0, 0, 0, 11776, 11776, 0, 0, 0,
  /* 2715 */ 0, 12356, 0, 12356, 0, 0, 0, 0, 0, 0, 0, 0, 12356, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 4220,
  /* 2745 */ 0, 0, 53, 0, 0, 0, 12800, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6735, 143, 2282, 2083, 2083, 2083, 2083, 2083,
  /* 2770 */ 2083, 2289, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2224, 2083, 2083, 2300, 2083, 2083, 0, 0, 0, 0, 0,
  /* 2790 */ 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 288,
  /* 2824 */ 186, 0, 0, 288, 0, 0, 0, 0, 230, 0, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2311, 2083, 2083,
  /* 2850 */ 2314, 2083, 0, 0, 0, 0, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4661, 124, 0, 0, 4661, 0, 0, 0, 49, 0, 0, 0,
  /* 2880 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 17408, 0, 0, 17408, 17408, 0, 0, 55, 13887, 13893, 13887, 13893, 13887, 13887,
  /* 2903 */ 13887, 13887, 13887, 13887, 13887, 13887, 13921, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 4096,
  /* 2927 */ 124, 0, 0, 0, 14336, 0, 0, 0, 53, 124, 0, 0, 0, 0, 0, 0, 0, 0, 14336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6735, 0,
  /* 2957 */ 14336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536, 0, 0, 0, 0, 0, 0, 0, 277, 0, 55, 0, 0, 0, 0, 0,
  /* 2989 */ 0, 0, 0, 0, 0, 0, 24718, 0, 0, 0, 6735, 0, 15360, 15360, 0, 0, 15360, 0, 15360, 0, 0, 0, 0, 15360, 15360,
  /* 3014 */ 0, 15360, 15360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41984, 0, 0, 0, 41984, 41984, 0, 0, 56,
  /* 3041 */ 15936, 15942, 15936, 15942, 15936, 15936, 15936, 15936, 15936, 15936, 15936, 15936, 15970, 0, 0, 0, 0, 0,
  /* 3059 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 53, 0, 0, 2083, 53, 0, 16384, 0, 0, 53, 124, 126,
  /* 3085 */ 126, 0, 0, 0, 0, 0, 0, 126, 16510, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 53, 0,
  /* 3114 */ 0, 2083, 289, 0, 0, 0, 0, 17991, 80, 17991, 80, 80, 80, 80, 80, 80, 80, 80, 18019, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3141 */ 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 30755, 53, 124, 0, 2083, 53, 0, 0, 6735, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3169 */ 0, 0, 0, 0, 0, 0, 6735, 0, 6656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 34339, 2083, 2083, 53,
  /* 3198 */ 0, 0, 2083, 53, 0, 0, 5177, 5177, 0, 5177, 0, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 5177, 0,
  /* 3219 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 254, 255, 127, 128,
  /* 3238 */ 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 255, 255, 6333, 0, 0,
  /* 3258 */ 0, 5253, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 143, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 3277 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2257, 256, 257, 258, 228, 229, 0, 6375, 6405, 2083,
  /* 3296 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 53, 0, 124, 0, 0, 0, 274, 276, 278, 6405, 6423, 2083, 2083,
  /* 3318 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 35, 2083, 0, 0, 0, 290, 291, 53, 53, 0, 0, 0, 0, 0,
  /* 3341 */ 0, 0, 0, 0, 0, 0, 0, 2335, 2083, 2083, 2083, 53, 0, 0, 2083, 289, 0, 0, 5178, 5178, 0, 5178, 0, 5178, 5178,
  /* 3366 */ 5178, 5178, 5178, 5178, 5178, 5178, 5178, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 3384 */ 2083, 2083, 2083, 2083, 183, 183, 274, 257, 257, 0, 228, 229, 0, 6375, 6405, 2083, 2083, 2083, 2083, 2083,
  /* 3404 */ 2083, 2083, 2083, 0, 0, 53, 0, 184, 127, 127, 128, 274, 0, 278, 6405, 6423, 2083, 2083, 2083, 2083, 2083,
  /* 3425 */ 2083, 2083, 2083, 2083, 2083, 2083, 2240, 2083, 2083, 2083, 2083, 6333, 0, 0, 0, 5253, 32803, 2083, 2083,
  /* 3444 */ 35363, 2083, 2083, 2083, 0, 0, 143, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2290, 2083, 2083, 2083,
  /* 3463 */ 2083, 2083, 2083, 2151, 2083, 2083, 2083, 2083, 2083, 2200, 2083, 2202, 2083, 2083, 2208, 2083, 2083, 2212,
  /* 3481 */ 0, 222, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2595, 2083, 5178, 0, 2083, 2083, 2083, 2083, 2083, 2154, 2083, 2154,
  /* 3504 */ 2083, 2083, 2083, 2083, 2083, 2083, 2197, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2198, 2083,
  /* 3522 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2226, 2083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3547 */ 6735, 6735, 127, 128, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 35, 2083, 2083, 2083, 2083, 2083, 35,
  /* 3566 */ 2083, 2083, 0, 0, 0, 0, 0, 0, 0, 0, 230, 230, 0, 0, 0, 0, 53, 0, 0, 0, 53, 6333, 0, 0, 0, 5253, 2083,
  /* 3593 */ 33315, 2083, 2083, 35875, 2083, 2083, 0, 0, 143, 2083, 2083, 2083, 2083, 2083, 2083, 2288, 2083, 2083,
  /* 3611 */ 2083, 2083, 2083, 2083, 2294, 2083, 53, 124, 124, 286, 278, 278, 6423, 2083, 2083, 2083, 2083, 53, 0, 0,
  /* 3631 */ 2083, 53, 53, 292, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4096, 0, 4096, 0, 0, 0, 0, 0, 0, 5178, 0, 2083,
  /* 3660 */ 2083, 2083, 2083, 2083, 2155, 2083, 2155, 2083, 2083, 2083, 2083, 2083, 2083, 2298, 2083, 2083, 2299, 2083,
  /* 3678 */ 2083, 2083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 232, 2083, 2083, 2083, 0, 0, 0, 0, 19016, 0, 19016, 0, 0, 0, 0, 0,
  /* 3705 */ 0, 0, 18944, 19016, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 260, 0, 0, 0, 0, 0, 0, 0, 0, 2083,
  /* 3735 */ 28707, 2083, 2083, 2083, 2083, 2083, 2083, 0, 19968, 0, 0, 0, 19968, 0, 19968, 19968, 19968, 19968, 19968,
  /* 3754 */ 19968, 19968, 19968, 19968, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3783 */ 2083, 2083, 2083, 2083, 53, 124, 0, 2083, 53, 0, 0, 0, 0, 20553, 0, 20553, 0, 0, 0, 0, 0, 0, 0, 0, 20553,
  /* 3808 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 0, 0, 0, 0, 53, 0, 0, 0, 53, 0, 0, 0, 0, 22602, 0, 22602,
  /* 3840 */ 0, 0, 0, 0, 0, 0, 0, 0, 22602, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17408, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3873 */ 0, 0, 0, 0, 0, 0, 0, 8192, 9216, 10752, 13312, 14848, 16896, 18432, 19456, 22016, 23040, 24064, 26112,
  /* 3892 */ 27648, 43008, 6735, 0, 0, 0, 0, 77, 0, 77, 0, 0, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3923 */ 0, 0, 0, 2328, 2083, 2083, 2083, 2083, 2083, 38435, 2083, 2083, 2083, 2083, 14848, 16896, 18432, 0, 0, 0,
  /* 3943 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19968, 0, 0, 0, 0, 0, 19968, 0, 0, 0, 0, 0, 0, 0, 23627, 0, 23627, 0, 0, 0,
  /* 3973 */ 0, 0, 0, 0, 0, 23627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 35,
  /* 4001 */ 0, 0, 143, 2083, 0, 0, 0, 0, 25676, 0, 25676, 0, 0, 0, 0, 0, 0, 0, 0, 25676, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4031 */ 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 143, 2083, 0, 0, 0, 0, 5253, 2083, 2083,
  /* 4054 */ 2083, 2083, 2083, 2083, 2083, 0, 0, 143, 2083, 2083, 2083, 2083, 2286, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 4073 */ 2083, 2083, 2083, 2083, 2203, 2206, 2083, 2083, 2083, 2083, 257, 257, 0, 228, 0, 0, 0, 0, 2083, 2083, 2083,
  /* 4094 */ 2083, 2083, 2083, 2083, 2083, 2083, 169, 2083, 2083, 2083, 274, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083,
  /* 4114 */ 2083, 2083, 2083, 2083, 2083, 2083, 2219, 2220, 284, 124, 285, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 53, 0,
  /* 4135 */ 124, 2083, 53, 124, 124, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 53, 0, 0, 2083, 53, 124, 124, 0, 0, 0, 0,
  /* 4159 */ 2083, 2083, 2083, 2083, 53, 124, 0, 2083, 53, 124, 124, 0, 0, 0, 0, 2083, 2083, 37411, 2083, 53, 0, 0,
  /* 4181 */ 30243, 53, 124, 124, 0, 278, 278, 6423, 2083, 2083, 2083, 2083, 53, 0, 0, 2083, 53, 53, 53, 284, 0, 0, 0,
  /* 4204 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2212, 2083, 2083,
  /* 4226 */ 183, 183, 274, 257, 257, 0, 228, 259, 0, 232, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 182,
  /* 4248 */ 0, 185, 0, 0, 0, 0, 0, 5120, 0, 5253, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 143, 2083, 2083,
  /* 4270 */ 2083, 2285, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2293, 2083, 29219, 0, 5120, 5250, 0, 0, 2083,
  /* 4289 */ 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 143, 2083, 2083, 2284, 2083, 2083, 2287, 2083, 2083, 2083, 2083,
  /* 4308 */ 2083, 2292, 2083, 2083, 2083, 2194, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2194,
  /* 4326 */ 0, 0, 0, 0, 259, 0, 232, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 183, 0, 187, 0, 0, 0, 0,
  /* 4351 */ 0, 26624, 26624, 0, 26624, 26624, 26624, 26624, 26624, 26624, 26624, 26624, 26624, 26624, 26624, 0, 0, 0,
  /* 4369 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 38947, 2083, 2083, 2083, 0,
  /* 4393 */ 0, 0, 0, 123, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2240, 0, 0, 143, 2083,
  /* 4419 */ 123, 123, 123, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 34851, 2083, 2083, 2083, 2083,
  /* 4443 */ 2083, 2331, 2083, 27136, 27136, 0, 0, 0, 0, 0, 0, 27136, 0, 0, 27136, 0, 0, 27136, 27136, 0, 0, 0, 0, 0, 0,
  /* 4468 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 32291, 2083, 2083, 36899, 2083, 2083, 2083, 2083, 2083, 2083, 2212, 2083,
  /* 4490 */ 2083, 0, 0, 182, 0, 185, 0, 0, 0, 0, 0, 121, 0, 53, 124, 0, 0, 0, 0, 2184, 2083, 2083, 2083, 0, 0, 224, 53,
  /* 4517 */ 184, 226, 0, 228, 229, 6375, 2083, 2083, 2083, 2295, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2213, 2083,
  /* 4536 */ 2083, 2083, 2083, 0, 255, 255, 257, 257, 0, 228, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2312, 2313, 2083,
  /* 4557 */ 2083, 2223, 2083, 2083, 2083, 2083, 2227, 0, 181, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 0, 0, 2083, 2083, 2083,
  /* 4581 */ 2164, 0, 0, 2084, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5632, 0, 0, 2083, 2083, 2310, 2083, 2083,
  /* 4608 */ 2083, 2083, 2083, 2248, 2249, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2252, 2083, 2083, 2083,
  /* 4626 */ 2083, 2256, 2083, 0, 0, 2084, 2084, 0, 2129, 0, 2129, 2129, 2129, 2129, 2129, 2129, 2129, 2129, 2129, 0,
  /* 4646 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 273, 183, 275, 2085, 0,
  /* 4665 */ 0, 0, 0, 0, 0, 0, 51, 0, 0, 0, 0, 0, 0, 0, 16384, 0, 0, 0, 0, 0, 0, 0, 0, 6735, 0, 0, 0, 2085, 2085, 0,
  /* 4695 */ 2130, 0, 2130, 2130, 2130, 2130, 2130, 2130, 2141, 2143, 2143, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 4714 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2267, 2083, 2083, 2083, 2296, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 4732 */ 2083, 2083, 2083, 2083, 2083, 0, 255, 255, 274, 0, 0, 0, 0, 2083, 2083, 2329, 2083, 2083, 2083, 2083, 2083,
  /* 4753 */ 2083, 2083, 2083, 2320, 2083, 2083, 35, 2083, 0, 0, 0, 2086, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4780 */ 18944, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2086, 2086, 0, 2131, 0, 2131,
  /* 4808 */ 2131, 2131, 2131, 2131, 2131, 2142, 2142, 2142, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 4826 */ 2083, 2083, 2083, 2083, 2083, 35, 183, 183, 274, 274, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2330, 2083,
  /* 4847 */ 2083, 2083, 2083, 2083, 2297, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 0, 2087, 0, 0, 0, 0, 0, 0, 0,
  /* 4870 */ 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21133, 0, 0, 0, 0, 0, 6735, 0, 0, 0, 2087,
  /* 4901 */ 2087, 0, 2132, 0, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2144, 2144, 0, 2083, 2083, 2083, 2151, 2083,
  /* 4920 */ 2083, 2083, 2083, 2083, 2083, 2162, 2083, 2164, 2083, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 4938 */ 2083, 2083, 2083, 2083, 2167, 2083, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2161, 2083,
  /* 4956 */ 2083, 2083, 2083, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2153, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 4974 */ 2183, 2083, 2186, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2220, 2083, 2083, 2083, 2083, 2083,
  /* 4992 */ 2083, 0, 0, 0, 2211, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2301, 0, 0, 0,
  /* 5013 */ 0, 0, 0, 0, 5253, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 143, 2242, 257, 257, 0, 228, 259, 0, 232,
  /* 5036 */ 0, 3619, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2264, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 5054 */ 29731, 2083, 2083, 2083, 2083, 2083, 0, 0, 0, 2088, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 0, 0,
  /* 5082 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 0, 0, 0, 53, 0, 0, 2107, 2107, 0, 2133, 0, 2133, 2133, 2133, 2133, 2133,
  /* 5108 */ 2133, 2133, 2133, 2133, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 35, 2083, 2083, 2083, 2083, 2083,
  /* 5126 */ 2083, 2083, 2083, 2083, 0, 0, 0, 0, 0, 127, 127, 128, 0, 0, 0, 2083, 2083, 2083, 2215, 2083, 2083, 2083,
  /* 5148 */ 2083, 2083, 2083, 2083, 2083, 2083, 36387, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2319,
  /* 5165 */ 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 0, 0, 0, 0, 227, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 5187 */ 2083, 2083, 2083, 2083, 2218, 2083, 2083, 274, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 5207 */ 40995, 2083, 2083, 2260, 2083, 2083, 2083, 2263, 2083, 2083, 2083, 2083, 2221, 2083, 2083, 2083, 2083,
  /* 5224 */ 2083, 2083, 2083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2281, 2083, 2083, 2089, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5253 */ 0, 0, 0, 53, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 0, 124, 0, 0, 0, 0, 0, 2089, 2089, 0, 2134, 0, 2134,
  /* 5282 */ 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 5300 */ 2083, 2083, 2083, 2083, 2083, 2205, 2083, 2083, 2083, 2083, 2083, 0, 0, 0, 122, 53, 124, 0, 0, 0, 0, 2083,
  /* 5322 */ 2083, 2083, 2165, 0, 0, 0, 0, 53, 124, 127, 128, 5178, 5178, 2183, 2186, 2083, 2083, 127, 128, 0, 2083,
  /* 5343 */ 2083, 2083, 2083, 2083, 2083, 35, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5365 */ 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2090, 0, 0, 0, 0, 0, 0,
  /* 5387 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 0, 0, 2083, 2083, 2083, 2083, 0, 0, 223, 53, 184, 225, 0, 228,
  /* 5414 */ 229, 6375, 2083, 2083, 2083, 0, 0, 2108, 2108, 0, 2135, 0, 2135, 2135, 2135, 2135, 2135, 2135, 2135, 2135,
  /* 5434 */ 2135, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2266, 2083,
  /* 5452 */ 35, 2083, 2083, 2083, 2091, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 0, 0, 2083, 2083,
  /* 5480 */ 2083, 2167, 0, 0, 0, 0, 2091, 2091, 0, 2136, 0, 2136, 2136, 2136, 2136, 2136, 2136, 2136, 2136, 2136, 0,
  /* 5501 */ 2083, 2083, 2083, 2083, 2152, 2083, 2158, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 41507, 2083, 2083,
  /* 5518 */ 2083, 2083, 2083, 2083, 2083, 183, 183, 274, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2152,
  /* 5538 */ 2083, 2083, 2083, 2083, 2182, 2083, 2185, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2201, 2083,
  /* 5556 */ 2083, 2083, 2083, 2083, 2083, 0, 0, 5252, 5120, 0, 2083, 2083, 2238, 2083, 2083, 2239, 2083, 0, 0, 143,
  /* 5576 */ 2083, 2283, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2291, 39459, 2083, 2083, 2083, 2083, 2317, 2083,
  /* 5593 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 183, 183, 274, 37923, 2083, 2083, 2083, 2083, 2083,
  /* 5611 */ 2083, 2083, 2083, 2224, 2083, 2083, 2083, 0, 0, 0, 0, 53, 124, 0, 0, 5251, 5251, 2083, 2083, 2187, 2083, 0,
  /* 5633 */ 0, 2092, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 0, 0, 2083, 2083, 2083, 2188, 0, 0, 0,
  /* 5663 */ 0, 2109, 2109, 0, 2109, 0, 2109, 2109, 2109, 2109, 2109, 2109, 2109, 2109, 2109, 0, 2083, 2083, 2083, 2083,
  /* 5683 */ 2083, 2083, 2083, 2159, 2083, 2083, 2083, 2083, 2083, 2083, 2225, 2083, 2083, 2083, 0, 0, 53, 0, 124, 0, 0,
  /* 5704 */ 0, 0, 0, 0, 2083, 2083, 2214, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2261, 2083, 2083,
  /* 5724 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 40483, 2083, 2083, 2083, 2083, 2243, 2083, 2083,
  /* 5741 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2318, 2083, 2083, 2083, 2083,
  /* 5759 */ 2083, 2083, 2083, 2083, 0, 0, 0, 2268, 2083, 2083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2083, 2083, 2083, 2083,
  /* 5783 */ 2083, 2083, 2083, 2315, 0, 0, 0, 2083, 2083, 2083, 2083, 2083, 2216, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 5802 */ 2083, 2224, 2083, 2083, 2083, 2083, 180, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 0, 0, 2157, 2083, 2083, 2083,
  /* 5826 */ 0, 0, 2093, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 0, 0, 2083, 2153, 2083, 2083, 0, 0,
  /* 5856 */ 0, 0, 2093, 2093, 0, 2137, 0, 2137, 2137, 2137, 2137, 2137, 2137, 2137, 2137, 2137, 0, 2083, 2148, 2083,
  /* 5876 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2166, 2083, 0, 2083, 2083, 2150, 35, 2083, 2157,
  /* 5894 */ 2083, 2083, 2160, 2083, 2083, 2083, 2083, 2083, 35, 2083, 2083, 2083, 2083, 2265, 2083, 2083, 2083, 2083,
  /* 5912 */ 2083, 2083, 2083, 2250, 2083, 2083, 2083, 2083, 2083, 2083, 2213, 2083, 2192, 2083, 2083, 2083, 2083, 2083,
  /* 5930 */ 2083, 2083, 2083, 2083, 2204, 2083, 2083, 2083, 2083, 2083, 39971, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 5947 */ 2083, 2083, 2083, 0, 0, 0, 0, 53, 124, 0, 0, 5252, 5252, 2083, 2083, 2083, 2083, 0, 0, 2083, 2316, 2083,
  /* 5969 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 0, 0, 0, 53, 124, 127, 128, 5178, 5178,
  /* 5989 */ 2083, 2083, 2083, 2083, 127, 128, 2094, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 0, 0,
  /* 6017 */ 2083, 2159, 2083, 2083, 0, 0, 0, 0, 2094, 2094, 0, 2138, 0, 2138, 2138, 2138, 2138, 2138, 2138, 2138, 2138,
  /* 6038 */ 2138, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 33989, 2083,
  /* 6056 */ 2083, 2083, 2083, 2083, 2083, 2083, 2253, 2083, 2083, 2083, 2083, 2083, 31779, 2083, 2083, 2083, 2083,
  /* 6073 */ 2083, 2083, 2083, 2083, 2083, 2083, 41472, 255, 255, 0, 0, 0, 2083, 2212, 2083, 2083, 2212, 2083, 2083,
  /* 6092 */ 2083, 2083, 2083, 2083, 2083, 2083, 2149, 2083, 2083, 2184, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2207,
  /* 6110 */ 2083, 2209, 2083, 0, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2165, 2168,
  /* 6128 */ 2256, 2259, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2193,
  /* 6145 */ 31267, 2083, 2195, 2083, 2083, 2199, 2083, 2083, 2083, 2083, 2193, 31267, 2193, 2083, 0, 2083, 2083, 2083,
  /* 6163 */ 2083, 2153, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 0, 2083, 2083, 2149, 2083, 2083, 2156,
  /* 6181 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2251, 2083, 2083, 2083, 2083, 2255, 2083, 2083, 2095, 0, 0,
  /* 6200 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 129, 129, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 0, 53, 0, 0,
  /* 6233 */ 0, 53, 0, 0, 2110, 2110, 0, 2139, 0, 2139, 2139, 2139, 2139, 2139, 2139, 2139, 2139, 2139, 0, 2083, 2083,
  /* 6254 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2222, 2083, 2083, 2083, 2083, 2083,
  /* 6272 */ 2083, 0, 0, 53, 0, 124, 0, 0, 0, 0, 53, 124, 127, 128, 5178, 5178, 2182, 2185, 2083, 2083, 127, 128, 0, 0,
  /* 6296 */ 0, 2083, 2213, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2244, 2083, 2083, 2247,
  /* 6314 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2254, 2083, 2083, 2083, 2246, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 6332 */ 2083, 2083, 2083, 2083, 2083, 2083, 2152, 2083, 2196, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083,
  /* 6350 */ 2210, 2258, 2083, 2083, 2083, 2083, 2262, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2213, 35, 2096,
  /* 6368 */ 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 133, 0, 2083, 2083, 2083, 2083, 0, 0, 0, 0,
  /* 6397 */ 2096, 2096, 0, 2140, 0, 2140, 2140, 2140, 2140, 2140, 2140, 2140, 2140, 2140, 0, 2083, 2083, 2083, 2083,
  /* 6416 */ 2083, 2083, 2083, 2083, 2083, 2083, 2083, 2163, 2083, 2083, 2269, 2083, 29184, 0, 224, 53, 0, 226, 0, 228,
  /* 6436 */ 0, 232, 2083, 2083, 3107, 0, 0, 41984, 41984, 0, 41984, 41984, 41984, 41984, 41984, 41984, 41984, 41984,
  /* 6454 */ 41984, 41984, 41984, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 5120, 5120, 2083, 35,
  /* 6480 */ 2083, 2083, 0, 0, 0, 0, 0, 0, 42574, 0, 42574, 0, 0, 0, 0, 0, 0, 0, 0, 42574, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 6510 */ 0, 0, 0, 0, 0, 53, 124, 0, 0, 5120, 5120, 2083, 2083, 2083, 2083, 0, 0, 224, 53, 0, 226, 0, 228, 0, 0,
  /* 6535 */ 2083, 2083, 2083, 0, 0, 0, 0, 44032, 0, 44032, 0, 0, 44032, 0, 0, 44032, 44032, 44032, 44032, 0, 0, 0, 0,
  /* 6558 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 5250, 5250, 2083, 2083, 2083, 2083, 0, 0, 224, 53, 0, 226,
  /* 6585 */ 0, 228, 0, 232, 2083, 2083, 2083, 0, 0, 0, 44544, 0, 44544, 0, 44544, 44544, 44544, 44544, 44544, 44544,
  /* 6605 */ 44544, 44544, 44544, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 124, 0, 0, 5251, 5251, 2083, 2083,
  /* 6631 */ 2083, 2083, 0, 0, 224, 53, 0, 226, 0, 228, 229, 6375, 2083, 2083, 2083
];

MaiaScript.EXPECTED =
[
  /*   0 */ 110, 113, 117, 121, 125, 126, 130, 134, 138, 222, 162, 145, 151, 126, 126, 141, 156, 188, 126, 160, 126,
  /*  21 */ 126, 170, 177, 152, 126, 126, 147, 181, 164, 126, 166, 185, 126, 173, 192, 196, 202, 206, 210, 214, 235,
  /*  42 */ 327, 236, 235, 226, 230, 234, 240, 235, 235, 328, 235, 244, 249, 235, 278, 235, 290, 235, 285, 235, 252,
  /*  63 */ 235, 235, 285, 235, 300, 235, 256, 283, 281, 217, 235, 262, 309, 266, 270, 235, 220, 320, 235, 302, 322,
  /*  84 */ 275, 235, 235, 235, 221, 245, 289, 294, 306, 235, 235, 198, 235, 258, 313, 235, 219, 235, 258, 297, 235,
  /* 105 */ 271, 317, 235, 326, 198, 332, 334, 336, 337, 384, 340, 384, 342, 344, 346, 349, 347, 351, 352, 354, 355,
  /* 126 */ 401, 401, 401, 401, 449, 361, 392, 475, 367, 480, 369, 371, 489, 388, 442, 361, 392, 482, 475, 401, 478,
  /* 147 */ 401, 401, 402, 395, 373, 400, 401, 401, 401, 375, 473, 376, 479, 401, 477, 401, 401, 480, 401, 401, 401,
  /* 168 */ 377, 392, 401, 402, 391, 392, 393, 397, 476, 393, 482, 380, 369, 393, 393, 397, 379, 393, 475, 476, 401,
  /* 189 */ 369, 361, 400, 401, 377, 393, 377, 395, 395, 361, 361, 358, 361, 491, 382, 433, 364, 386, 365, 407, 409,
  /* 210 */ 411, 416, 413, 412, 414, 418, 420, 361, 431, 361, 361, 434, 361, 361, 361, 424, 362, 405, 423, 426, 428,
  /* 231 */ 361, 430, 436, 360, 361, 361, 361, 361, 360, 441, 444, 362, 402, 359, 361, 361, 361, 363, 446, 429, 439,
  /* 252 */ 361, 432, 451, 390, 438, 437, 361, 361, 404, 394, 434, 490, 421, 455, 461, 460, 462, 463, 464, 361, 361,
  /* 273 */ 361, 403, 398, 484, 361, 361, 448, 389, 361, 438, 361, 453, 361, 361, 429, 439, 492, 361, 361, 361, 432,
  /* 294 */ 361, 486, 394, 474, 383, 357, 361, 451, 361, 361, 387, 361, 399, 338, 357, 361, 457, 459, 466, 474, 399,
  /* 315 */ 356, 358, 481, 396, 488, 361, 468, 361, 361, 470, 472, 494, 361, 361, 361, 433, 361, 8200, 2105344, 4202496,
  /* 335 */ 134225920, -2147475456, 8192, 8192, 16384, 4202496, 536879104, 541073408, 536879104, 2109432, -870289416,
  /* 346 */ -6316032, -870285320, -870285320, -4218880, -866091016, -870285316, -333414408, -870285320, -329220104, -8,
  /* 356 */ 8192, 32768, 65536, 0, 0x80000000, 0, 0, 1, 0, 2, 2, 3584, 3584, 24, 40, 134218752, -2147480576, 402654208,
  /* 374 */ -2147480576, 3072, 512, 8, 256, 3072, 3072, 72, 64, 2048, 8192, 2105344, 64, 0, 1572864, 50331648,
  /* 390 */ 536870912, 0, 256, 128, 128, 256, 256, 1024, 1024, 2048, 4096, 8, 8, 0, 4, 8, 32, 1048576, 1048640,
  /* 409 */ -2146959360, -2146959360, 6815677, -729284544, -728235968, -729284544, -578289600, 7339967, -729284544,
  /* 418 */ -6815664, -3, -1, 0, 2097152, 1792, 4096, 4096, 114688, 262144, 6291456, 0, 8388608, 67108864, 0, 16777216,
  /* 434 */ 0, 65536, 268435456, 1073741824, 0, 67108864, 1073741824, 83886080, 402653184, 0x80000000, 117440512,
  /* 445 */ 1610612736, 512, 65536, 16777216, 134217728, 0x80000000, 134217728, 33554432, 134217728, 0, 131072, 131072,
  /* 457 */ 131121, 4325425, 3932160, 4456447, 4456447, 6553599, 6553599, 8388607, 0, 4063232, 4456447, 1, 48, 7, 8,
  /* 472 */ 496, 512, 512, 1024, 3072, 8, 40, 8, 72, 8, 128, 1024, 61440, 65536, 6, 8, 2048, 32768, 131072, 0, 16, 32,
  /* 494 */ 4, 256
];

MaiaScript.TOKEN =
[
  "%ERROR",
  "%OTHER",
  "EOF",
  "Identifier",
  "'null'",
  "'true'",
  "'false'",
  "Character",
  "String",
  "Integer",
  "Complex",
  "Real",
  "Comment",
  "WhiteSpace",
  "'!'",
  "'!='",
  "'%'",
  "'%='",
  "'&'",
  "'&&'",
  "'&='",
  "'('",
  "')'",
  "'*'",
  "'**'",
  "'*='",
  "'+'",
  "'++'",
  "'+='",
  "','",
  "'-'",
  "'--'",
  "'-='",
  "'.'",
  "'/'",
  "'/='",
  "':'",
  "':='",
  "';'",
  "'<'",
  "'<<'",
  "'<<='",
  "'<='",
  "'='",
  "'=='",
  "'>'",
  "'>='",
  "'>>'",
  "'>>='",
  "'?'",
  "'?='",
  "'['",
  "']'",
  "'^='",
  "'^^'",
  "'break'",
  "'case'",
  "'catch'",
  "'continue'",
  "'default'",
  "'do'",
  "'else'",
  "'export'",
  "'f32'",
  "'f64'",
  "'for'",
  "'foreach'",
  "'global'",
  "'i32'",
  "'i64'",
  "'if'",
  "'import'",
  "'include'",
  "'local'",
  "'return'",
  "'switch'",
  "'test'",
  "'throw'",
  "'try'",
  "'typeof'",
  "'while'",
  "'{'",
  "'|'",
  "'|='",
  "'||'",
  "'}'",
  "'~'"
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
    log("Usage: " + command + " MaiaScript.js INPUT...\n");
    log("\n");
    log("  parse INPUT, which is either a filename or literal text enclosed in curly braces\n");
  }
  else
  {
    var indent = false;
    for (var i = 0; i < arguments.length; ++i)
    {
      var input = read(String(arguments[i]));
      var parser = new MaiaScript(input);
      try
      {
        parser.parse_Program();
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
