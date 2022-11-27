// This file was generated on Sat Nov 26, 2022 21:34 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
// REx command line: MaiaScript.ebnf -backtrack -javascript -tree -main

function MaiaScript(string, parsingEventHandler)
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
    eventHandler.startNonterminal("Program", e0);
    lookahead1W(33);                // END | EOF | Identifier | Character | String | Integer | Complex | Real |
                                    // Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(29);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 == 1)                // END
        {
          break;
        }
        whitespace();
        parse_Expression();
      }
    }
    eventHandler.endNonterminal("Program", e0);
  };

  function parse_Expression()
  {
    eventHandler.startNonterminal("Expression", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 10115:                   // Identifier '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 79:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 463:                     // '{' Identifier
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 719:                     // '{' String
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'export' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6479:                    // '{' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10703:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 591:                     // '{' Character
      case 847:                     // '{' Integer
      case 975:                     // '{' Complex
      case 1103:                    // '{' Real
        lookahead3W(41);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'export' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 8015:                    // '{' 'f32'
      case 8143:                    // '{' 'f64'
      case 8655:                    // '{' 'i32'
      case 8783:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1231:                    // '{' Comment
      case 4815:                    // '{' ';'
      case 6991:                    // '{' 'break'
      case 7375:                    // '{' 'continue'
      case 10191:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1615:                    // '{' '!'
      case 3279:                    // '{' '+'
      case 3407:                    // '{' '++'
      case 3791:                    // '{' '-'
      case 3919:                    // '{' '--'
      case 10831:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8271:                    // '{' 'for'
      case 8399:                    // '{' 'foreach'
      case 8911:                    // '{' 'if'
      case 9551:                    // '{' 'switch'
      case 9679:                    // '{' 'test'
      case 10063:                   // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2639:                    // '{' '('
      case 7631:                    // '{' 'do'
      case 7887:                    // '{' 'export'
      case 8527:                    // '{' 'global'
      case 9039:                    // '{' 'import'
      case 9167:                    // '{' 'include'
      case 9295:                    // '{' 'local'
      case 9423:                    // '{' 'return'
      case 9807:                    // '{' 'throw'
      case 9935:                    // '{' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 446:                     // 'f32' Identifier
      case 447:                     // 'f64' Identifier
      case 451:                     // 'i32' Identifier
      case 452:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Complex
     && lk != 8                     // Real
     && lk != 9                     // Comment
     && lk != 12                    // '!'
     && lk != 20                    // '('
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 37                    // ';'
     && lk != 50                    // '['
     && lk != 54                    // 'break'
     && lk != 57                    // 'continue'
     && lk != 59                    // 'do'
     && lk != 61                    // 'export'
     && lk != 64                    // 'for'
     && lk != 65                    // 'foreach'
     && lk != 66                    // 'global'
     && lk != 69                    // 'if'
     && lk != 70                    // 'import'
     && lk != 71                    // 'include'
     && lk != 72                    // 'local'
     && lk != 73                    // 'return'
     && lk != 74                    // 'switch'
     && lk != 75                    // 'test'
     && lk != 76                    // 'throw'
     && lk != 77                    // 'try'
     && lk != 78                    // 'while'
     && lk != 84                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Character
     && lk != 643                   // Identifier String
     && lk != 771                   // Identifier Integer
     && lk != 899                   // Identifier Complex
     && lk != 1027                  // Identifier Real
     && lk != 1155                  // Identifier Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1923                  // Identifier '%'
     && lk != 2051                  // Identifier '%='
     && lk != 2179                  // Identifier '&'
     && lk != 2307                  // Identifier '&&'
     && lk != 2435                  // Identifier '&='
     && lk != 2691                  // Identifier ')'
     && lk != 2819                  // Identifier '*'
     && lk != 2947                  // Identifier '**'
     && lk != 3075                  // Identifier '*='
     && lk != 3203                  // Identifier '+'
     && lk != 3331                  // Identifier '++'
     && lk != 3459                  // Identifier '+='
     && lk != 3587                  // Identifier ','
     && lk != 3663                  // '{' ','
     && lk != 3715                  // Identifier '-'
     && lk != 3843                  // Identifier '--'
     && lk != 3971                  // Identifier '-='
     && lk != 4227                  // Identifier '/'
     && lk != 4355                  // Identifier '/='
     && lk != 4483                  // Identifier ':'
     && lk != 4611                  // Identifier ':='
     && lk != 4739                  // Identifier ';'
     && lk != 4867                  // Identifier '<'
     && lk != 4995                  // Identifier '<<'
     && lk != 5123                  // Identifier '<<='
     && lk != 5251                  // Identifier '<='
     && lk != 5379                  // Identifier '='
     && lk != 5507                  // Identifier '=='
     && lk != 5635                  // Identifier '>'
     && lk != 5763                  // Identifier '>='
     && lk != 5891                  // Identifier '>>'
     && lk != 6019                  // Identifier '>>='
     && lk != 6147                  // Identifier '?'
     && lk != 6275                  // Identifier '?='
     && lk != 6403                  // Identifier '['
     && lk != 6531                  // Identifier ']'
     && lk != 6659                  // Identifier '^'
     && lk != 6787                  // Identifier '^='
     && lk != 6915                  // Identifier 'break'
     && lk != 7043                  // Identifier 'case'
     && lk != 7171                  // Identifier 'catch'
     && lk != 7299                  // Identifier 'continue'
     && lk != 7427                  // Identifier 'default'
     && lk != 7555                  // Identifier 'do'
     && lk != 7683                  // Identifier 'else'
     && lk != 7811                  // Identifier 'export'
     && lk != 7939                  // Identifier 'f32'
     && lk != 8067                  // Identifier 'f64'
     && lk != 8195                  // Identifier 'for'
     && lk != 8323                  // Identifier 'foreach'
     && lk != 8451                  // Identifier 'global'
     && lk != 8579                  // Identifier 'i32'
     && lk != 8707                  // Identifier 'i64'
     && lk != 8835                  // Identifier 'if'
     && lk != 8963                  // Identifier 'import'
     && lk != 9091                  // Identifier 'include'
     && lk != 9219                  // Identifier 'local'
     && lk != 9347                  // Identifier 'return'
     && lk != 9475                  // Identifier 'switch'
     && lk != 9603                  // Identifier 'test'
     && lk != 9731                  // Identifier 'throw'
     && lk != 9859                  // Identifier 'try'
     && lk != 9987                  // Identifier 'while'
     && lk != 10243                 // Identifier '|'
     && lk != 10371                 // Identifier '|='
     && lk != 10499                 // Identifier '||'
     && lk != 10627                 // Identifier '}'
     && lk != 10755                 // Identifier '~'
     && lk != 16830                 // 'f32' Identifier END
     && lk != 16831                 // 'f64' Identifier END
     && lk != 16835                 // 'i32' Identifier END
     && lk != 16836                 // 'i64' Identifier END
     && lk != 49598                 // 'f32' Identifier Identifier
     && lk != 49599                 // 'f64' Identifier Identifier
     && lk != 49603                 // 'i32' Identifier Identifier
     && lk != 49604                 // 'i64' Identifier Identifier
     && lk != 49615                 // '{' Identifier Identifier
     && lk != 49743                 // '{' Character Identifier
     && lk != 49871                 // '{' String Identifier
     && lk != 49999                 // '{' Integer Identifier
     && lk != 50127                 // '{' Complex Identifier
     && lk != 50255                 // '{' Real Identifier
     && lk != 50383                 // '{' Comment Identifier
     && lk != 53967                 // '{' ';' Identifier
     && lk != 56143                 // '{' 'break' Identifier
     && lk != 56527                 // '{' 'continue' Identifier
     && lk != 65982                 // 'f32' Identifier Character
     && lk != 65983                 // 'f64' Identifier Character
     && lk != 65987                 // 'i32' Identifier Character
     && lk != 65988                 // 'i64' Identifier Character
     && lk != 65999                 // '{' Identifier Character
     && lk != 66127                 // '{' Character Character
     && lk != 66255                 // '{' String Character
     && lk != 66383                 // '{' Integer Character
     && lk != 66511                 // '{' Complex Character
     && lk != 66639                 // '{' Real Character
     && lk != 66767                 // '{' Comment Character
     && lk != 70351                 // '{' ';' Character
     && lk != 72527                 // '{' 'break' Character
     && lk != 72911                 // '{' 'continue' Character
     && lk != 82366                 // 'f32' Identifier String
     && lk != 82367                 // 'f64' Identifier String
     && lk != 82371                 // 'i32' Identifier String
     && lk != 82372                 // 'i64' Identifier String
     && lk != 82383                 // '{' Identifier String
     && lk != 82511                 // '{' Character String
     && lk != 82639                 // '{' String String
     && lk != 82767                 // '{' Integer String
     && lk != 82895                 // '{' Complex String
     && lk != 83023                 // '{' Real String
     && lk != 83151                 // '{' Comment String
     && lk != 86735                 // '{' ';' String
     && lk != 88911                 // '{' 'break' String
     && lk != 89295                 // '{' 'continue' String
     && lk != 98750                 // 'f32' Identifier Integer
     && lk != 98751                 // 'f64' Identifier Integer
     && lk != 98755                 // 'i32' Identifier Integer
     && lk != 98756                 // 'i64' Identifier Integer
     && lk != 98767                 // '{' Identifier Integer
     && lk != 98895                 // '{' Character Integer
     && lk != 99023                 // '{' String Integer
     && lk != 99151                 // '{' Integer Integer
     && lk != 99279                 // '{' Complex Integer
     && lk != 99407                 // '{' Real Integer
     && lk != 99535                 // '{' Comment Integer
     && lk != 103119                // '{' ';' Integer
     && lk != 105295                // '{' 'break' Integer
     && lk != 105679                // '{' 'continue' Integer
     && lk != 115134                // 'f32' Identifier Complex
     && lk != 115135                // 'f64' Identifier Complex
     && lk != 115139                // 'i32' Identifier Complex
     && lk != 115140                // 'i64' Identifier Complex
     && lk != 115151                // '{' Identifier Complex
     && lk != 115279                // '{' Character Complex
     && lk != 115407                // '{' String Complex
     && lk != 115535                // '{' Integer Complex
     && lk != 115663                // '{' Complex Complex
     && lk != 115791                // '{' Real Complex
     && lk != 115919                // '{' Comment Complex
     && lk != 119503                // '{' ';' Complex
     && lk != 121679                // '{' 'break' Complex
     && lk != 122063                // '{' 'continue' Complex
     && lk != 131518                // 'f32' Identifier Real
     && lk != 131519                // 'f64' Identifier Real
     && lk != 131523                // 'i32' Identifier Real
     && lk != 131524                // 'i64' Identifier Real
     && lk != 131535                // '{' Identifier Real
     && lk != 131663                // '{' Character Real
     && lk != 131791                // '{' String Real
     && lk != 131919                // '{' Integer Real
     && lk != 132047                // '{' Complex Real
     && lk != 132175                // '{' Real Real
     && lk != 132303                // '{' Comment Real
     && lk != 135887                // '{' ';' Real
     && lk != 138063                // '{' 'break' Real
     && lk != 138447                // '{' 'continue' Real
     && lk != 147902                // 'f32' Identifier Comment
     && lk != 147903                // 'f64' Identifier Comment
     && lk != 147907                // 'i32' Identifier Comment
     && lk != 147908                // 'i64' Identifier Comment
     && lk != 147919                // '{' Identifier Comment
     && lk != 148047                // '{' Character Comment
     && lk != 148175                // '{' String Comment
     && lk != 148303                // '{' Integer Comment
     && lk != 148431                // '{' Complex Comment
     && lk != 148559                // '{' Real Comment
     && lk != 148687                // '{' Comment Comment
     && lk != 152271                // '{' ';' Comment
     && lk != 154447                // '{' 'break' Comment
     && lk != 154831                // '{' 'continue' Comment
     && lk != 197054                // 'f32' Identifier '!'
     && lk != 197055                // 'f64' Identifier '!'
     && lk != 197059                // 'i32' Identifier '!'
     && lk != 197060                // 'i64' Identifier '!'
     && lk != 197071                // '{' Identifier '!'
     && lk != 197199                // '{' Character '!'
     && lk != 197327                // '{' String '!'
     && lk != 197455                // '{' Integer '!'
     && lk != 197583                // '{' Complex '!'
     && lk != 197711                // '{' Real '!'
     && lk != 197839                // '{' Comment '!'
     && lk != 201423                // '{' ';' '!'
     && lk != 203599                // '{' 'break' '!'
     && lk != 203983                // '{' 'continue' '!'
     && lk != 213438                // 'f32' Identifier '!='
     && lk != 213439                // 'f64' Identifier '!='
     && lk != 213443                // 'i32' Identifier '!='
     && lk != 213444                // 'i64' Identifier '!='
     && lk != 223695                // '{' '}' '!='
     && lk != 246206                // 'f32' Identifier '%'
     && lk != 246207                // 'f64' Identifier '%'
     && lk != 246211                // 'i32' Identifier '%'
     && lk != 246212                // 'i64' Identifier '%'
     && lk != 256463                // '{' '}' '%'
     && lk != 262590                // 'f32' Identifier '%='
     && lk != 262591                // 'f64' Identifier '%='
     && lk != 262595                // 'i32' Identifier '%='
     && lk != 262596                // 'i64' Identifier '%='
     && lk != 272847                // '{' '}' '%='
     && lk != 278974                // 'f32' Identifier '&'
     && lk != 278975                // 'f64' Identifier '&'
     && lk != 278979                // 'i32' Identifier '&'
     && lk != 278980                // 'i64' Identifier '&'
     && lk != 289231                // '{' '}' '&'
     && lk != 295358                // 'f32' Identifier '&&'
     && lk != 295359                // 'f64' Identifier '&&'
     && lk != 295363                // 'i32' Identifier '&&'
     && lk != 295364                // 'i64' Identifier '&&'
     && lk != 305615                // '{' '}' '&&'
     && lk != 311742                // 'f32' Identifier '&='
     && lk != 311743                // 'f64' Identifier '&='
     && lk != 311747                // 'i32' Identifier '&='
     && lk != 311748                // 'i64' Identifier '&='
     && lk != 321999                // '{' '}' '&='
     && lk != 328271                // '{' Character '('
     && lk != 328399                // '{' String '('
     && lk != 328527                // '{' Integer '('
     && lk != 328655                // '{' Complex '('
     && lk != 328783                // '{' Real '('
     && lk != 328911                // '{' Comment '('
     && lk != 332495                // '{' ';' '('
     && lk != 334671                // '{' 'break' '('
     && lk != 335055                // '{' 'continue' '('
     && lk != 344510                // 'f32' Identifier ')'
     && lk != 344511                // 'f64' Identifier ')'
     && lk != 344515                // 'i32' Identifier ')'
     && lk != 344516                // 'i64' Identifier ')'
     && lk != 360894                // 'f32' Identifier '*'
     && lk != 360895                // 'f64' Identifier '*'
     && lk != 360899                // 'i32' Identifier '*'
     && lk != 360900                // 'i64' Identifier '*'
     && lk != 371151                // '{' '}' '*'
     && lk != 377278                // 'f32' Identifier '**'
     && lk != 377279                // 'f64' Identifier '**'
     && lk != 377283                // 'i32' Identifier '**'
     && lk != 377284                // 'i64' Identifier '**'
     && lk != 387535                // '{' '}' '**'
     && lk != 393662                // 'f32' Identifier '*='
     && lk != 393663                // 'f64' Identifier '*='
     && lk != 393667                // 'i32' Identifier '*='
     && lk != 393668                // 'i64' Identifier '*='
     && lk != 403919                // '{' '}' '*='
     && lk != 410046                // 'f32' Identifier '+'
     && lk != 410047                // 'f64' Identifier '+'
     && lk != 410051                // 'i32' Identifier '+'
     && lk != 410052                // 'i64' Identifier '+'
     && lk != 410831                // '{' Comment '+'
     && lk != 414415                // '{' ';' '+'
     && lk != 416591                // '{' 'break' '+'
     && lk != 416975                // '{' 'continue' '+'
     && lk != 426430                // 'f32' Identifier '++'
     && lk != 426431                // 'f64' Identifier '++'
     && lk != 426435                // 'i32' Identifier '++'
     && lk != 426436                // 'i64' Identifier '++'
     && lk != 427215                // '{' Comment '++'
     && lk != 430799                // '{' ';' '++'
     && lk != 432975                // '{' 'break' '++'
     && lk != 433359                // '{' 'continue' '++'
     && lk != 442814                // 'f32' Identifier '+='
     && lk != 442815                // 'f64' Identifier '+='
     && lk != 442819                // 'i32' Identifier '+='
     && lk != 442820                // 'i64' Identifier '+='
     && lk != 453071                // '{' '}' '+='
     && lk != 459198                // 'f32' Identifier ','
     && lk != 459199                // 'f64' Identifier ','
     && lk != 459203                // 'i32' Identifier ','
     && lk != 459204                // 'i64' Identifier ','
     && lk != 459215                // '{' Identifier ','
     && lk != 459343                // '{' Character ','
     && lk != 459471                // '{' String ','
     && lk != 459599                // '{' Integer ','
     && lk != 459727                // '{' Complex ','
     && lk != 459855                // '{' Real ','
     && lk != 459983                // '{' Comment ','
     && lk != 463567                // '{' ';' ','
     && lk != 465743                // '{' 'break' ','
     && lk != 466127                // '{' 'continue' ','
     && lk != 468867                // Identifier '{' ','
     && lk != 475582                // 'f32' Identifier '-'
     && lk != 475583                // 'f64' Identifier '-'
     && lk != 475587                // 'i32' Identifier '-'
     && lk != 475588                // 'i64' Identifier '-'
     && lk != 476367                // '{' Comment '-'
     && lk != 479951                // '{' ';' '-'
     && lk != 482127                // '{' 'break' '-'
     && lk != 482511                // '{' 'continue' '-'
     && lk != 491966                // 'f32' Identifier '--'
     && lk != 491967                // 'f64' Identifier '--'
     && lk != 491971                // 'i32' Identifier '--'
     && lk != 491972                // 'i64' Identifier '--'
     && lk != 492751                // '{' Comment '--'
     && lk != 496335                // '{' ';' '--'
     && lk != 498511                // '{' 'break' '--'
     && lk != 498895                // '{' 'continue' '--'
     && lk != 508350                // 'f32' Identifier '-='
     && lk != 508351                // 'f64' Identifier '-='
     && lk != 508355                // 'i32' Identifier '-='
     && lk != 508356                // 'i64' Identifier '-='
     && lk != 518607                // '{' '}' '-='
     && lk != 541118                // 'f32' Identifier '/'
     && lk != 541119                // 'f64' Identifier '/'
     && lk != 541123                // 'i32' Identifier '/'
     && lk != 541124                // 'i64' Identifier '/'
     && lk != 551375                // '{' '}' '/'
     && lk != 557502                // 'f32' Identifier '/='
     && lk != 557503                // 'f64' Identifier '/='
     && lk != 557507                // 'i32' Identifier '/='
     && lk != 557508                // 'i64' Identifier '/='
     && lk != 567759                // '{' '}' '/='
     && lk != 573886                // 'f32' Identifier ':'
     && lk != 573887                // 'f64' Identifier ':'
     && lk != 573891                // 'i32' Identifier ':'
     && lk != 573892                // 'i64' Identifier ':'
     && lk != 573903                // '{' Identifier ':'
     && lk != 574159                // '{' String ':'
     && lk != 590270                // 'f32' Identifier ':='
     && lk != 590271                // 'f64' Identifier ':='
     && lk != 590275                // 'i32' Identifier ':='
     && lk != 590276                // 'i64' Identifier ':='
     && lk != 600527                // '{' '}' ':='
     && lk != 606654                // 'f32' Identifier ';'
     && lk != 606655                // 'f64' Identifier ';'
     && lk != 606659                // 'i32' Identifier ';'
     && lk != 606660                // 'i64' Identifier ';'
     && lk != 606671                // '{' Identifier ';'
     && lk != 606799                // '{' Character ';'
     && lk != 606927                // '{' String ';'
     && lk != 607055                // '{' Integer ';'
     && lk != 607183                // '{' Complex ';'
     && lk != 607311                // '{' Real ';'
     && lk != 607439                // '{' Comment ';'
     && lk != 611023                // '{' ';' ';'
     && lk != 613199                // '{' 'break' ';'
     && lk != 613583                // '{' 'continue' ';'
     && lk != 623038                // 'f32' Identifier '<'
     && lk != 623039                // 'f64' Identifier '<'
     && lk != 623043                // 'i32' Identifier '<'
     && lk != 623044                // 'i64' Identifier '<'
     && lk != 633295                // '{' '}' '<'
     && lk != 639422                // 'f32' Identifier '<<'
     && lk != 639423                // 'f64' Identifier '<<'
     && lk != 639427                // 'i32' Identifier '<<'
     && lk != 639428                // 'i64' Identifier '<<'
     && lk != 649679                // '{' '}' '<<'
     && lk != 655806                // 'f32' Identifier '<<='
     && lk != 655807                // 'f64' Identifier '<<='
     && lk != 655811                // 'i32' Identifier '<<='
     && lk != 655812                // 'i64' Identifier '<<='
     && lk != 666063                // '{' '}' '<<='
     && lk != 672190                // 'f32' Identifier '<='
     && lk != 672191                // 'f64' Identifier '<='
     && lk != 672195                // 'i32' Identifier '<='
     && lk != 672196                // 'i64' Identifier '<='
     && lk != 682447                // '{' '}' '<='
     && lk != 688574                // 'f32' Identifier '='
     && lk != 688575                // 'f64' Identifier '='
     && lk != 688579                // 'i32' Identifier '='
     && lk != 688580                // 'i64' Identifier '='
     && lk != 698831                // '{' '}' '='
     && lk != 704958                // 'f32' Identifier '=='
     && lk != 704959                // 'f64' Identifier '=='
     && lk != 704963                // 'i32' Identifier '=='
     && lk != 704964                // 'i64' Identifier '=='
     && lk != 715215                // '{' '}' '=='
     && lk != 721342                // 'f32' Identifier '>'
     && lk != 721343                // 'f64' Identifier '>'
     && lk != 721347                // 'i32' Identifier '>'
     && lk != 721348                // 'i64' Identifier '>'
     && lk != 731599                // '{' '}' '>'
     && lk != 737726                // 'f32' Identifier '>='
     && lk != 737727                // 'f64' Identifier '>='
     && lk != 737731                // 'i32' Identifier '>='
     && lk != 737732                // 'i64' Identifier '>='
     && lk != 747983                // '{' '}' '>='
     && lk != 754110                // 'f32' Identifier '>>'
     && lk != 754111                // 'f64' Identifier '>>'
     && lk != 754115                // 'i32' Identifier '>>'
     && lk != 754116                // 'i64' Identifier '>>'
     && lk != 764367                // '{' '}' '>>'
     && lk != 770494                // 'f32' Identifier '>>='
     && lk != 770495                // 'f64' Identifier '>>='
     && lk != 770499                // 'i32' Identifier '>>='
     && lk != 770500                // 'i64' Identifier '>>='
     && lk != 780751                // '{' '}' '>>='
     && lk != 786878                // 'f32' Identifier '?'
     && lk != 786879                // 'f64' Identifier '?'
     && lk != 786883                // 'i32' Identifier '?'
     && lk != 786884                // 'i64' Identifier '?'
     && lk != 797135                // '{' '}' '?'
     && lk != 803262                // 'f32' Identifier '?='
     && lk != 803263                // 'f64' Identifier '?='
     && lk != 803267                // 'i32' Identifier '?='
     && lk != 803268                // 'i64' Identifier '?='
     && lk != 813519                // '{' '}' '?='
     && lk != 819646                // 'f32' Identifier '['
     && lk != 819647                // 'f64' Identifier '['
     && lk != 819651                // 'i32' Identifier '['
     && lk != 819652                // 'i64' Identifier '['
     && lk != 819791                // '{' Character '['
     && lk != 819919                // '{' String '['
     && lk != 820047                // '{' Integer '['
     && lk != 820175                // '{' Complex '['
     && lk != 820303                // '{' Real '['
     && lk != 820431                // '{' Comment '['
     && lk != 824015                // '{' ';' '['
     && lk != 826191                // '{' 'break' '['
     && lk != 826575                // '{' 'continue' '['
     && lk != 836030                // 'f32' Identifier ']'
     && lk != 836031                // 'f64' Identifier ']'
     && lk != 836035                // 'i32' Identifier ']'
     && lk != 836036                // 'i64' Identifier ']'
     && lk != 852414                // 'f32' Identifier '^'
     && lk != 852415                // 'f64' Identifier '^'
     && lk != 852419                // 'i32' Identifier '^'
     && lk != 852420                // 'i64' Identifier '^'
     && lk != 862671                // '{' '}' '^'
     && lk != 868798                // 'f32' Identifier '^='
     && lk != 868799                // 'f64' Identifier '^='
     && lk != 868803                // 'i32' Identifier '^='
     && lk != 868804                // 'i64' Identifier '^='
     && lk != 879055                // '{' '}' '^='
     && lk != 885182                // 'f32' Identifier 'break'
     && lk != 885183                // 'f64' Identifier 'break'
     && lk != 885187                // 'i32' Identifier 'break'
     && lk != 885188                // 'i64' Identifier 'break'
     && lk != 885199                // '{' Identifier 'break'
     && lk != 885327                // '{' Character 'break'
     && lk != 885455                // '{' String 'break'
     && lk != 885583                // '{' Integer 'break'
     && lk != 885711                // '{' Complex 'break'
     && lk != 885839                // '{' Real 'break'
     && lk != 885967                // '{' Comment 'break'
     && lk != 889551                // '{' ';' 'break'
     && lk != 891727                // '{' 'break' 'break'
     && lk != 892111                // '{' 'continue' 'break'
     && lk != 901566                // 'f32' Identifier 'case'
     && lk != 901567                // 'f64' Identifier 'case'
     && lk != 901571                // 'i32' Identifier 'case'
     && lk != 901572                // 'i64' Identifier 'case'
     && lk != 917950                // 'f32' Identifier 'catch'
     && lk != 917951                // 'f64' Identifier 'catch'
     && lk != 917955                // 'i32' Identifier 'catch'
     && lk != 917956                // 'i64' Identifier 'catch'
     && lk != 934334                // 'f32' Identifier 'continue'
     && lk != 934335                // 'f64' Identifier 'continue'
     && lk != 934339                // 'i32' Identifier 'continue'
     && lk != 934340                // 'i64' Identifier 'continue'
     && lk != 934351                // '{' Identifier 'continue'
     && lk != 934479                // '{' Character 'continue'
     && lk != 934607                // '{' String 'continue'
     && lk != 934735                // '{' Integer 'continue'
     && lk != 934863                // '{' Complex 'continue'
     && lk != 934991                // '{' Real 'continue'
     && lk != 935119                // '{' Comment 'continue'
     && lk != 938703                // '{' ';' 'continue'
     && lk != 940879                // '{' 'break' 'continue'
     && lk != 941263                // '{' 'continue' 'continue'
     && lk != 950718                // 'f32' Identifier 'default'
     && lk != 950719                // 'f64' Identifier 'default'
     && lk != 950723                // 'i32' Identifier 'default'
     && lk != 950724                // 'i64' Identifier 'default'
     && lk != 967102                // 'f32' Identifier 'do'
     && lk != 967103                // 'f64' Identifier 'do'
     && lk != 967107                // 'i32' Identifier 'do'
     && lk != 967108                // 'i64' Identifier 'do'
     && lk != 967119                // '{' Identifier 'do'
     && lk != 967247                // '{' Character 'do'
     && lk != 967375                // '{' String 'do'
     && lk != 967503                // '{' Integer 'do'
     && lk != 967631                // '{' Complex 'do'
     && lk != 967759                // '{' Real 'do'
     && lk != 967887                // '{' Comment 'do'
     && lk != 971471                // '{' ';' 'do'
     && lk != 973647                // '{' 'break' 'do'
     && lk != 974031                // '{' 'continue' 'do'
     && lk != 983486                // 'f32' Identifier 'else'
     && lk != 983487                // 'f64' Identifier 'else'
     && lk != 983491                // 'i32' Identifier 'else'
     && lk != 983492                // 'i64' Identifier 'else'
     && lk != 999870                // 'f32' Identifier 'export'
     && lk != 999871                // 'f64' Identifier 'export'
     && lk != 999875                // 'i32' Identifier 'export'
     && lk != 999876                // 'i64' Identifier 'export'
     && lk != 999887                // '{' Identifier 'export'
     && lk != 1000015               // '{' Character 'export'
     && lk != 1000143               // '{' String 'export'
     && lk != 1000271               // '{' Integer 'export'
     && lk != 1000399               // '{' Complex 'export'
     && lk != 1000527               // '{' Real 'export'
     && lk != 1000655               // '{' Comment 'export'
     && lk != 1004239               // '{' ';' 'export'
     && lk != 1006415               // '{' 'break' 'export'
     && lk != 1006799               // '{' 'continue' 'export'
     && lk != 1016254               // 'f32' Identifier 'f32'
     && lk != 1016255               // 'f64' Identifier 'f32'
     && lk != 1016259               // 'i32' Identifier 'f32'
     && lk != 1016260               // 'i64' Identifier 'f32'
     && lk != 1016271               // '{' Identifier 'f32'
     && lk != 1016399               // '{' Character 'f32'
     && lk != 1016527               // '{' String 'f32'
     && lk != 1016655               // '{' Integer 'f32'
     && lk != 1016783               // '{' Complex 'f32'
     && lk != 1016911               // '{' Real 'f32'
     && lk != 1017039               // '{' Comment 'f32'
     && lk != 1020623               // '{' ';' 'f32'
     && lk != 1022799               // '{' 'break' 'f32'
     && lk != 1023183               // '{' 'continue' 'f32'
     && lk != 1032638               // 'f32' Identifier 'f64'
     && lk != 1032639               // 'f64' Identifier 'f64'
     && lk != 1032643               // 'i32' Identifier 'f64'
     && lk != 1032644               // 'i64' Identifier 'f64'
     && lk != 1032655               // '{' Identifier 'f64'
     && lk != 1032783               // '{' Character 'f64'
     && lk != 1032911               // '{' String 'f64'
     && lk != 1033039               // '{' Integer 'f64'
     && lk != 1033167               // '{' Complex 'f64'
     && lk != 1033295               // '{' Real 'f64'
     && lk != 1033423               // '{' Comment 'f64'
     && lk != 1037007               // '{' ';' 'f64'
     && lk != 1039183               // '{' 'break' 'f64'
     && lk != 1039567               // '{' 'continue' 'f64'
     && lk != 1049022               // 'f32' Identifier 'for'
     && lk != 1049023               // 'f64' Identifier 'for'
     && lk != 1049027               // 'i32' Identifier 'for'
     && lk != 1049028               // 'i64' Identifier 'for'
     && lk != 1049039               // '{' Identifier 'for'
     && lk != 1049167               // '{' Character 'for'
     && lk != 1049295               // '{' String 'for'
     && lk != 1049423               // '{' Integer 'for'
     && lk != 1049551               // '{' Complex 'for'
     && lk != 1049679               // '{' Real 'for'
     && lk != 1049807               // '{' Comment 'for'
     && lk != 1053391               // '{' ';' 'for'
     && lk != 1055567               // '{' 'break' 'for'
     && lk != 1055951               // '{' 'continue' 'for'
     && lk != 1065406               // 'f32' Identifier 'foreach'
     && lk != 1065407               // 'f64' Identifier 'foreach'
     && lk != 1065411               // 'i32' Identifier 'foreach'
     && lk != 1065412               // 'i64' Identifier 'foreach'
     && lk != 1065423               // '{' Identifier 'foreach'
     && lk != 1065551               // '{' Character 'foreach'
     && lk != 1065679               // '{' String 'foreach'
     && lk != 1065807               // '{' Integer 'foreach'
     && lk != 1065935               // '{' Complex 'foreach'
     && lk != 1066063               // '{' Real 'foreach'
     && lk != 1066191               // '{' Comment 'foreach'
     && lk != 1069775               // '{' ';' 'foreach'
     && lk != 1071951               // '{' 'break' 'foreach'
     && lk != 1072335               // '{' 'continue' 'foreach'
     && lk != 1081790               // 'f32' Identifier 'global'
     && lk != 1081791               // 'f64' Identifier 'global'
     && lk != 1081795               // 'i32' Identifier 'global'
     && lk != 1081796               // 'i64' Identifier 'global'
     && lk != 1081807               // '{' Identifier 'global'
     && lk != 1081935               // '{' Character 'global'
     && lk != 1082063               // '{' String 'global'
     && lk != 1082191               // '{' Integer 'global'
     && lk != 1082319               // '{' Complex 'global'
     && lk != 1082447               // '{' Real 'global'
     && lk != 1082575               // '{' Comment 'global'
     && lk != 1086159               // '{' ';' 'global'
     && lk != 1088335               // '{' 'break' 'global'
     && lk != 1088719               // '{' 'continue' 'global'
     && lk != 1098174               // 'f32' Identifier 'i32'
     && lk != 1098175               // 'f64' Identifier 'i32'
     && lk != 1098179               // 'i32' Identifier 'i32'
     && lk != 1098180               // 'i64' Identifier 'i32'
     && lk != 1098191               // '{' Identifier 'i32'
     && lk != 1098319               // '{' Character 'i32'
     && lk != 1098447               // '{' String 'i32'
     && lk != 1098575               // '{' Integer 'i32'
     && lk != 1098703               // '{' Complex 'i32'
     && lk != 1098831               // '{' Real 'i32'
     && lk != 1098959               // '{' Comment 'i32'
     && lk != 1102543               // '{' ';' 'i32'
     && lk != 1104719               // '{' 'break' 'i32'
     && lk != 1105103               // '{' 'continue' 'i32'
     && lk != 1114558               // 'f32' Identifier 'i64'
     && lk != 1114559               // 'f64' Identifier 'i64'
     && lk != 1114563               // 'i32' Identifier 'i64'
     && lk != 1114564               // 'i64' Identifier 'i64'
     && lk != 1114575               // '{' Identifier 'i64'
     && lk != 1114703               // '{' Character 'i64'
     && lk != 1114831               // '{' String 'i64'
     && lk != 1114959               // '{' Integer 'i64'
     && lk != 1115087               // '{' Complex 'i64'
     && lk != 1115215               // '{' Real 'i64'
     && lk != 1115343               // '{' Comment 'i64'
     && lk != 1118927               // '{' ';' 'i64'
     && lk != 1121103               // '{' 'break' 'i64'
     && lk != 1121487               // '{' 'continue' 'i64'
     && lk != 1130942               // 'f32' Identifier 'if'
     && lk != 1130943               // 'f64' Identifier 'if'
     && lk != 1130947               // 'i32' Identifier 'if'
     && lk != 1130948               // 'i64' Identifier 'if'
     && lk != 1130959               // '{' Identifier 'if'
     && lk != 1131087               // '{' Character 'if'
     && lk != 1131215               // '{' String 'if'
     && lk != 1131343               // '{' Integer 'if'
     && lk != 1131471               // '{' Complex 'if'
     && lk != 1131599               // '{' Real 'if'
     && lk != 1131727               // '{' Comment 'if'
     && lk != 1135311               // '{' ';' 'if'
     && lk != 1137487               // '{' 'break' 'if'
     && lk != 1137871               // '{' 'continue' 'if'
     && lk != 1147326               // 'f32' Identifier 'import'
     && lk != 1147327               // 'f64' Identifier 'import'
     && lk != 1147331               // 'i32' Identifier 'import'
     && lk != 1147332               // 'i64' Identifier 'import'
     && lk != 1147343               // '{' Identifier 'import'
     && lk != 1147471               // '{' Character 'import'
     && lk != 1147599               // '{' String 'import'
     && lk != 1147727               // '{' Integer 'import'
     && lk != 1147855               // '{' Complex 'import'
     && lk != 1147983               // '{' Real 'import'
     && lk != 1148111               // '{' Comment 'import'
     && lk != 1151695               // '{' ';' 'import'
     && lk != 1153871               // '{' 'break' 'import'
     && lk != 1154255               // '{' 'continue' 'import'
     && lk != 1163710               // 'f32' Identifier 'include'
     && lk != 1163711               // 'f64' Identifier 'include'
     && lk != 1163715               // 'i32' Identifier 'include'
     && lk != 1163716               // 'i64' Identifier 'include'
     && lk != 1163727               // '{' Identifier 'include'
     && lk != 1163855               // '{' Character 'include'
     && lk != 1163983               // '{' String 'include'
     && lk != 1164111               // '{' Integer 'include'
     && lk != 1164239               // '{' Complex 'include'
     && lk != 1164367               // '{' Real 'include'
     && lk != 1164495               // '{' Comment 'include'
     && lk != 1168079               // '{' ';' 'include'
     && lk != 1170255               // '{' 'break' 'include'
     && lk != 1170639               // '{' 'continue' 'include'
     && lk != 1180094               // 'f32' Identifier 'local'
     && lk != 1180095               // 'f64' Identifier 'local'
     && lk != 1180099               // 'i32' Identifier 'local'
     && lk != 1180100               // 'i64' Identifier 'local'
     && lk != 1180111               // '{' Identifier 'local'
     && lk != 1180239               // '{' Character 'local'
     && lk != 1180367               // '{' String 'local'
     && lk != 1180495               // '{' Integer 'local'
     && lk != 1180623               // '{' Complex 'local'
     && lk != 1180751               // '{' Real 'local'
     && lk != 1180879               // '{' Comment 'local'
     && lk != 1184463               // '{' ';' 'local'
     && lk != 1186639               // '{' 'break' 'local'
     && lk != 1187023               // '{' 'continue' 'local'
     && lk != 1196478               // 'f32' Identifier 'return'
     && lk != 1196479               // 'f64' Identifier 'return'
     && lk != 1196483               // 'i32' Identifier 'return'
     && lk != 1196484               // 'i64' Identifier 'return'
     && lk != 1196495               // '{' Identifier 'return'
     && lk != 1196623               // '{' Character 'return'
     && lk != 1196751               // '{' String 'return'
     && lk != 1196879               // '{' Integer 'return'
     && lk != 1197007               // '{' Complex 'return'
     && lk != 1197135               // '{' Real 'return'
     && lk != 1197263               // '{' Comment 'return'
     && lk != 1200847               // '{' ';' 'return'
     && lk != 1203023               // '{' 'break' 'return'
     && lk != 1203407               // '{' 'continue' 'return'
     && lk != 1212862               // 'f32' Identifier 'switch'
     && lk != 1212863               // 'f64' Identifier 'switch'
     && lk != 1212867               // 'i32' Identifier 'switch'
     && lk != 1212868               // 'i64' Identifier 'switch'
     && lk != 1212879               // '{' Identifier 'switch'
     && lk != 1213007               // '{' Character 'switch'
     && lk != 1213135               // '{' String 'switch'
     && lk != 1213263               // '{' Integer 'switch'
     && lk != 1213391               // '{' Complex 'switch'
     && lk != 1213519               // '{' Real 'switch'
     && lk != 1213647               // '{' Comment 'switch'
     && lk != 1217231               // '{' ';' 'switch'
     && lk != 1219407               // '{' 'break' 'switch'
     && lk != 1219791               // '{' 'continue' 'switch'
     && lk != 1229246               // 'f32' Identifier 'test'
     && lk != 1229247               // 'f64' Identifier 'test'
     && lk != 1229251               // 'i32' Identifier 'test'
     && lk != 1229252               // 'i64' Identifier 'test'
     && lk != 1229263               // '{' Identifier 'test'
     && lk != 1229391               // '{' Character 'test'
     && lk != 1229519               // '{' String 'test'
     && lk != 1229647               // '{' Integer 'test'
     && lk != 1229775               // '{' Complex 'test'
     && lk != 1229903               // '{' Real 'test'
     && lk != 1230031               // '{' Comment 'test'
     && lk != 1233615               // '{' ';' 'test'
     && lk != 1235791               // '{' 'break' 'test'
     && lk != 1236175               // '{' 'continue' 'test'
     && lk != 1245630               // 'f32' Identifier 'throw'
     && lk != 1245631               // 'f64' Identifier 'throw'
     && lk != 1245635               // 'i32' Identifier 'throw'
     && lk != 1245636               // 'i64' Identifier 'throw'
     && lk != 1245647               // '{' Identifier 'throw'
     && lk != 1245775               // '{' Character 'throw'
     && lk != 1245903               // '{' String 'throw'
     && lk != 1246031               // '{' Integer 'throw'
     && lk != 1246159               // '{' Complex 'throw'
     && lk != 1246287               // '{' Real 'throw'
     && lk != 1246415               // '{' Comment 'throw'
     && lk != 1249999               // '{' ';' 'throw'
     && lk != 1252175               // '{' 'break' 'throw'
     && lk != 1252559               // '{' 'continue' 'throw'
     && lk != 1262014               // 'f32' Identifier 'try'
     && lk != 1262015               // 'f64' Identifier 'try'
     && lk != 1262019               // 'i32' Identifier 'try'
     && lk != 1262020               // 'i64' Identifier 'try'
     && lk != 1262031               // '{' Identifier 'try'
     && lk != 1262159               // '{' Character 'try'
     && lk != 1262287               // '{' String 'try'
     && lk != 1262415               // '{' Integer 'try'
     && lk != 1262543               // '{' Complex 'try'
     && lk != 1262671               // '{' Real 'try'
     && lk != 1262799               // '{' Comment 'try'
     && lk != 1266383               // '{' ';' 'try'
     && lk != 1268559               // '{' 'break' 'try'
     && lk != 1268943               // '{' 'continue' 'try'
     && lk != 1278398               // 'f32' Identifier 'while'
     && lk != 1278399               // 'f64' Identifier 'while'
     && lk != 1278403               // 'i32' Identifier 'while'
     && lk != 1278404               // 'i64' Identifier 'while'
     && lk != 1278415               // '{' Identifier 'while'
     && lk != 1278543               // '{' Character 'while'
     && lk != 1278671               // '{' String 'while'
     && lk != 1278799               // '{' Integer 'while'
     && lk != 1278927               // '{' Complex 'while'
     && lk != 1279055               // '{' Real 'while'
     && lk != 1279183               // '{' Comment 'while'
     && lk != 1282767               // '{' ';' 'while'
     && lk != 1284943               // '{' 'break' 'while'
     && lk != 1285327               // '{' 'continue' 'while'
     && lk != 1294782               // 'f32' Identifier '{'
     && lk != 1294783               // 'f64' Identifier '{'
     && lk != 1294787               // 'i32' Identifier '{'
     && lk != 1294788               // 'i64' Identifier '{'
     && lk != 1294927               // '{' Character '{'
     && lk != 1295055               // '{' String '{'
     && lk != 1295183               // '{' Integer '{'
     && lk != 1295311               // '{' Complex '{'
     && lk != 1295439               // '{' Real '{'
     && lk != 1295567               // '{' Comment '{'
     && lk != 1299151               // '{' ';' '{'
     && lk != 1301327               // '{' 'break' '{'
     && lk != 1301711               // '{' 'continue' '{'
     && lk != 1311166               // 'f32' Identifier '|'
     && lk != 1311167               // 'f64' Identifier '|'
     && lk != 1311171               // 'i32' Identifier '|'
     && lk != 1311172               // 'i64' Identifier '|'
     && lk != 1321423               // '{' '}' '|'
     && lk != 1327550               // 'f32' Identifier '|='
     && lk != 1327551               // 'f64' Identifier '|='
     && lk != 1327555               // 'i32' Identifier '|='
     && lk != 1327556               // 'i64' Identifier '|='
     && lk != 1337807               // '{' '}' '|='
     && lk != 1343934               // 'f32' Identifier '||'
     && lk != 1343935               // 'f64' Identifier '||'
     && lk != 1343939               // 'i32' Identifier '||'
     && lk != 1343940               // 'i64' Identifier '||'
     && lk != 1354191               // '{' '}' '||'
     && lk != 1360318               // 'f32' Identifier '}'
     && lk != 1360319               // 'f64' Identifier '}'
     && lk != 1360323               // 'i32' Identifier '}'
     && lk != 1360324               // 'i64' Identifier '}'
     && lk != 1376702               // 'f32' Identifier '~'
     && lk != 1376703               // 'f64' Identifier '~'
     && lk != 1376707               // 'i32' Identifier '~'
     && lk != 1376708               // 'i64' Identifier '~'
     && lk != 1376719               // '{' Identifier '~'
     && lk != 1376847               // '{' Character '~'
     && lk != 1376975               // '{' String '~'
     && lk != 1377103               // '{' Integer '~'
     && lk != 1377231               // '{' Complex '~'
     && lk != 1377359               // '{' Real '~'
     && lk != 1377487               // '{' Comment '~'
     && lk != 1381071               // '{' ';' '~'
     && lk != 1383247               // '{' 'break' '~'
     && lk != 1383631)              // '{' 'continue' '~'
    {
      lk = memoized(0, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
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
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
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
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(0, e0, lk);
      }
    }
    switch (lk)
    {
    case 9:                         // Comment
      consume(9);                   // Comment
      break;
    case -2:
    case 49615:                     // '{' Identifier Identifier
    case 49743:                     // '{' Character Identifier
    case 49871:                     // '{' String Identifier
    case 49999:                     // '{' Integer Identifier
    case 50127:                     // '{' Complex Identifier
    case 50255:                     // '{' Real Identifier
    case 50383:                     // '{' Comment Identifier
    case 53967:                     // '{' ';' Identifier
    case 56143:                     // '{' 'break' Identifier
    case 56527:                     // '{' 'continue' Identifier
    case 65999:                     // '{' Identifier Character
    case 66127:                     // '{' Character Character
    case 66255:                     // '{' String Character
    case 66383:                     // '{' Integer Character
    case 66511:                     // '{' Complex Character
    case 66639:                     // '{' Real Character
    case 66767:                     // '{' Comment Character
    case 70351:                     // '{' ';' Character
    case 72527:                     // '{' 'break' Character
    case 72911:                     // '{' 'continue' Character
    case 82383:                     // '{' Identifier String
    case 82511:                     // '{' Character String
    case 82639:                     // '{' String String
    case 82767:                     // '{' Integer String
    case 82895:                     // '{' Complex String
    case 83023:                     // '{' Real String
    case 83151:                     // '{' Comment String
    case 86735:                     // '{' ';' String
    case 88911:                     // '{' 'break' String
    case 89295:                     // '{' 'continue' String
    case 98767:                     // '{' Identifier Integer
    case 98895:                     // '{' Character Integer
    case 99023:                     // '{' String Integer
    case 99151:                     // '{' Integer Integer
    case 99279:                     // '{' Complex Integer
    case 99407:                     // '{' Real Integer
    case 99535:                     // '{' Comment Integer
    case 103119:                    // '{' ';' Integer
    case 105295:                    // '{' 'break' Integer
    case 105679:                    // '{' 'continue' Integer
    case 115151:                    // '{' Identifier Complex
    case 115279:                    // '{' Character Complex
    case 115407:                    // '{' String Complex
    case 115535:                    // '{' Integer Complex
    case 115663:                    // '{' Complex Complex
    case 115791:                    // '{' Real Complex
    case 115919:                    // '{' Comment Complex
    case 119503:                    // '{' ';' Complex
    case 121679:                    // '{' 'break' Complex
    case 122063:                    // '{' 'continue' Complex
    case 131535:                    // '{' Identifier Real
    case 131663:                    // '{' Character Real
    case 131791:                    // '{' String Real
    case 131919:                    // '{' Integer Real
    case 132047:                    // '{' Complex Real
    case 132175:                    // '{' Real Real
    case 132303:                    // '{' Comment Real
    case 135887:                    // '{' ';' Real
    case 138063:                    // '{' 'break' Real
    case 138447:                    // '{' 'continue' Real
    case 147919:                    // '{' Identifier Comment
    case 148047:                    // '{' Character Comment
    case 148175:                    // '{' String Comment
    case 148303:                    // '{' Integer Comment
    case 148431:                    // '{' Complex Comment
    case 148559:                    // '{' Real Comment
    case 148687:                    // '{' Comment Comment
    case 152271:                    // '{' ';' Comment
    case 154447:                    // '{' 'break' Comment
    case 154831:                    // '{' 'continue' Comment
    case 197071:                    // '{' Identifier '!'
    case 197199:                    // '{' Character '!'
    case 197327:                    // '{' String '!'
    case 197455:                    // '{' Integer '!'
    case 197583:                    // '{' Complex '!'
    case 197711:                    // '{' Real '!'
    case 197839:                    // '{' Comment '!'
    case 201423:                    // '{' ';' '!'
    case 203599:                    // '{' 'break' '!'
    case 203983:                    // '{' 'continue' '!'
    case 328271:                    // '{' Character '('
    case 328399:                    // '{' String '('
    case 328527:                    // '{' Integer '('
    case 328655:                    // '{' Complex '('
    case 328783:                    // '{' Real '('
    case 328911:                    // '{' Comment '('
    case 332495:                    // '{' ';' '('
    case 334671:                    // '{' 'break' '('
    case 335055:                    // '{' 'continue' '('
    case 410831:                    // '{' Comment '+'
    case 414415:                    // '{' ';' '+'
    case 416591:                    // '{' 'break' '+'
    case 416975:                    // '{' 'continue' '+'
    case 427215:                    // '{' Comment '++'
    case 430799:                    // '{' ';' '++'
    case 432975:                    // '{' 'break' '++'
    case 433359:                    // '{' 'continue' '++'
    case 476367:                    // '{' Comment '-'
    case 479951:                    // '{' ';' '-'
    case 482127:                    // '{' 'break' '-'
    case 482511:                    // '{' 'continue' '-'
    case 492751:                    // '{' Comment '--'
    case 496335:                    // '{' ';' '--'
    case 498511:                    // '{' 'break' '--'
    case 498895:                    // '{' 'continue' '--'
    case 606671:                    // '{' Identifier ';'
    case 606799:                    // '{' Character ';'
    case 606927:                    // '{' String ';'
    case 607055:                    // '{' Integer ';'
    case 607183:                    // '{' Complex ';'
    case 607311:                    // '{' Real ';'
    case 607439:                    // '{' Comment ';'
    case 611023:                    // '{' ';' ';'
    case 613199:                    // '{' 'break' ';'
    case 613583:                    // '{' 'continue' ';'
    case 819791:                    // '{' Character '['
    case 819919:                    // '{' String '['
    case 820047:                    // '{' Integer '['
    case 820175:                    // '{' Complex '['
    case 820303:                    // '{' Real '['
    case 820431:                    // '{' Comment '['
    case 824015:                    // '{' ';' '['
    case 826191:                    // '{' 'break' '['
    case 826575:                    // '{' 'continue' '['
    case 885199:                    // '{' Identifier 'break'
    case 885327:                    // '{' Character 'break'
    case 885455:                    // '{' String 'break'
    case 885583:                    // '{' Integer 'break'
    case 885711:                    // '{' Complex 'break'
    case 885839:                    // '{' Real 'break'
    case 885967:                    // '{' Comment 'break'
    case 889551:                    // '{' ';' 'break'
    case 891727:                    // '{' 'break' 'break'
    case 892111:                    // '{' 'continue' 'break'
    case 934351:                    // '{' Identifier 'continue'
    case 934479:                    // '{' Character 'continue'
    case 934607:                    // '{' String 'continue'
    case 934735:                    // '{' Integer 'continue'
    case 934863:                    // '{' Complex 'continue'
    case 934991:                    // '{' Real 'continue'
    case 935119:                    // '{' Comment 'continue'
    case 938703:                    // '{' ';' 'continue'
    case 940879:                    // '{' 'break' 'continue'
    case 941263:                    // '{' 'continue' 'continue'
    case 967119:                    // '{' Identifier 'do'
    case 967247:                    // '{' Character 'do'
    case 967375:                    // '{' String 'do'
    case 967503:                    // '{' Integer 'do'
    case 967631:                    // '{' Complex 'do'
    case 967759:                    // '{' Real 'do'
    case 967887:                    // '{' Comment 'do'
    case 971471:                    // '{' ';' 'do'
    case 973647:                    // '{' 'break' 'do'
    case 974031:                    // '{' 'continue' 'do'
    case 999887:                    // '{' Identifier 'export'
    case 1000015:                   // '{' Character 'export'
    case 1000143:                   // '{' String 'export'
    case 1000271:                   // '{' Integer 'export'
    case 1000399:                   // '{' Complex 'export'
    case 1000527:                   // '{' Real 'export'
    case 1000655:                   // '{' Comment 'export'
    case 1004239:                   // '{' ';' 'export'
    case 1006415:                   // '{' 'break' 'export'
    case 1006799:                   // '{' 'continue' 'export'
    case 1016271:                   // '{' Identifier 'f32'
    case 1016399:                   // '{' Character 'f32'
    case 1016527:                   // '{' String 'f32'
    case 1016655:                   // '{' Integer 'f32'
    case 1016783:                   // '{' Complex 'f32'
    case 1016911:                   // '{' Real 'f32'
    case 1017039:                   // '{' Comment 'f32'
    case 1020623:                   // '{' ';' 'f32'
    case 1022799:                   // '{' 'break' 'f32'
    case 1023183:                   // '{' 'continue' 'f32'
    case 1032655:                   // '{' Identifier 'f64'
    case 1032783:                   // '{' Character 'f64'
    case 1032911:                   // '{' String 'f64'
    case 1033039:                   // '{' Integer 'f64'
    case 1033167:                   // '{' Complex 'f64'
    case 1033295:                   // '{' Real 'f64'
    case 1033423:                   // '{' Comment 'f64'
    case 1037007:                   // '{' ';' 'f64'
    case 1039183:                   // '{' 'break' 'f64'
    case 1039567:                   // '{' 'continue' 'f64'
    case 1049039:                   // '{' Identifier 'for'
    case 1049167:                   // '{' Character 'for'
    case 1049295:                   // '{' String 'for'
    case 1049423:                   // '{' Integer 'for'
    case 1049551:                   // '{' Complex 'for'
    case 1049679:                   // '{' Real 'for'
    case 1049807:                   // '{' Comment 'for'
    case 1053391:                   // '{' ';' 'for'
    case 1055567:                   // '{' 'break' 'for'
    case 1055951:                   // '{' 'continue' 'for'
    case 1065423:                   // '{' Identifier 'foreach'
    case 1065551:                   // '{' Character 'foreach'
    case 1065679:                   // '{' String 'foreach'
    case 1065807:                   // '{' Integer 'foreach'
    case 1065935:                   // '{' Complex 'foreach'
    case 1066063:                   // '{' Real 'foreach'
    case 1066191:                   // '{' Comment 'foreach'
    case 1069775:                   // '{' ';' 'foreach'
    case 1071951:                   // '{' 'break' 'foreach'
    case 1072335:                   // '{' 'continue' 'foreach'
    case 1081807:                   // '{' Identifier 'global'
    case 1081935:                   // '{' Character 'global'
    case 1082063:                   // '{' String 'global'
    case 1082191:                   // '{' Integer 'global'
    case 1082319:                   // '{' Complex 'global'
    case 1082447:                   // '{' Real 'global'
    case 1082575:                   // '{' Comment 'global'
    case 1086159:                   // '{' ';' 'global'
    case 1088335:                   // '{' 'break' 'global'
    case 1088719:                   // '{' 'continue' 'global'
    case 1098191:                   // '{' Identifier 'i32'
    case 1098319:                   // '{' Character 'i32'
    case 1098447:                   // '{' String 'i32'
    case 1098575:                   // '{' Integer 'i32'
    case 1098703:                   // '{' Complex 'i32'
    case 1098831:                   // '{' Real 'i32'
    case 1098959:                   // '{' Comment 'i32'
    case 1102543:                   // '{' ';' 'i32'
    case 1104719:                   // '{' 'break' 'i32'
    case 1105103:                   // '{' 'continue' 'i32'
    case 1114575:                   // '{' Identifier 'i64'
    case 1114703:                   // '{' Character 'i64'
    case 1114831:                   // '{' String 'i64'
    case 1114959:                   // '{' Integer 'i64'
    case 1115087:                   // '{' Complex 'i64'
    case 1115215:                   // '{' Real 'i64'
    case 1115343:                   // '{' Comment 'i64'
    case 1118927:                   // '{' ';' 'i64'
    case 1121103:                   // '{' 'break' 'i64'
    case 1121487:                   // '{' 'continue' 'i64'
    case 1130959:                   // '{' Identifier 'if'
    case 1131087:                   // '{' Character 'if'
    case 1131215:                   // '{' String 'if'
    case 1131343:                   // '{' Integer 'if'
    case 1131471:                   // '{' Complex 'if'
    case 1131599:                   // '{' Real 'if'
    case 1131727:                   // '{' Comment 'if'
    case 1135311:                   // '{' ';' 'if'
    case 1137487:                   // '{' 'break' 'if'
    case 1137871:                   // '{' 'continue' 'if'
    case 1147343:                   // '{' Identifier 'import'
    case 1147471:                   // '{' Character 'import'
    case 1147599:                   // '{' String 'import'
    case 1147727:                   // '{' Integer 'import'
    case 1147855:                   // '{' Complex 'import'
    case 1147983:                   // '{' Real 'import'
    case 1148111:                   // '{' Comment 'import'
    case 1151695:                   // '{' ';' 'import'
    case 1153871:                   // '{' 'break' 'import'
    case 1154255:                   // '{' 'continue' 'import'
    case 1163727:                   // '{' Identifier 'include'
    case 1163855:                   // '{' Character 'include'
    case 1163983:                   // '{' String 'include'
    case 1164111:                   // '{' Integer 'include'
    case 1164239:                   // '{' Complex 'include'
    case 1164367:                   // '{' Real 'include'
    case 1164495:                   // '{' Comment 'include'
    case 1168079:                   // '{' ';' 'include'
    case 1170255:                   // '{' 'break' 'include'
    case 1170639:                   // '{' 'continue' 'include'
    case 1180111:                   // '{' Identifier 'local'
    case 1180239:                   // '{' Character 'local'
    case 1180367:                   // '{' String 'local'
    case 1180495:                   // '{' Integer 'local'
    case 1180623:                   // '{' Complex 'local'
    case 1180751:                   // '{' Real 'local'
    case 1180879:                   // '{' Comment 'local'
    case 1184463:                   // '{' ';' 'local'
    case 1186639:                   // '{' 'break' 'local'
    case 1187023:                   // '{' 'continue' 'local'
    case 1196495:                   // '{' Identifier 'return'
    case 1196623:                   // '{' Character 'return'
    case 1196751:                   // '{' String 'return'
    case 1196879:                   // '{' Integer 'return'
    case 1197007:                   // '{' Complex 'return'
    case 1197135:                   // '{' Real 'return'
    case 1197263:                   // '{' Comment 'return'
    case 1200847:                   // '{' ';' 'return'
    case 1203023:                   // '{' 'break' 'return'
    case 1203407:                   // '{' 'continue' 'return'
    case 1212879:                   // '{' Identifier 'switch'
    case 1213007:                   // '{' Character 'switch'
    case 1213135:                   // '{' String 'switch'
    case 1213263:                   // '{' Integer 'switch'
    case 1213391:                   // '{' Complex 'switch'
    case 1213519:                   // '{' Real 'switch'
    case 1213647:                   // '{' Comment 'switch'
    case 1217231:                   // '{' ';' 'switch'
    case 1219407:                   // '{' 'break' 'switch'
    case 1219791:                   // '{' 'continue' 'switch'
    case 1229263:                   // '{' Identifier 'test'
    case 1229391:                   // '{' Character 'test'
    case 1229519:                   // '{' String 'test'
    case 1229647:                   // '{' Integer 'test'
    case 1229775:                   // '{' Complex 'test'
    case 1229903:                   // '{' Real 'test'
    case 1230031:                   // '{' Comment 'test'
    case 1233615:                   // '{' ';' 'test'
    case 1235791:                   // '{' 'break' 'test'
    case 1236175:                   // '{' 'continue' 'test'
    case 1245647:                   // '{' Identifier 'throw'
    case 1245775:                   // '{' Character 'throw'
    case 1245903:                   // '{' String 'throw'
    case 1246031:                   // '{' Integer 'throw'
    case 1246159:                   // '{' Complex 'throw'
    case 1246287:                   // '{' Real 'throw'
    case 1246415:                   // '{' Comment 'throw'
    case 1249999:                   // '{' ';' 'throw'
    case 1252175:                   // '{' 'break' 'throw'
    case 1252559:                   // '{' 'continue' 'throw'
    case 1262031:                   // '{' Identifier 'try'
    case 1262159:                   // '{' Character 'try'
    case 1262287:                   // '{' String 'try'
    case 1262415:                   // '{' Integer 'try'
    case 1262543:                   // '{' Complex 'try'
    case 1262671:                   // '{' Real 'try'
    case 1262799:                   // '{' Comment 'try'
    case 1266383:                   // '{' ';' 'try'
    case 1268559:                   // '{' 'break' 'try'
    case 1268943:                   // '{' 'continue' 'try'
    case 1278415:                   // '{' Identifier 'while'
    case 1278543:                   // '{' Character 'while'
    case 1278671:                   // '{' String 'while'
    case 1278799:                   // '{' Integer 'while'
    case 1278927:                   // '{' Complex 'while'
    case 1279055:                   // '{' Real 'while'
    case 1279183:                   // '{' Comment 'while'
    case 1282767:                   // '{' ';' 'while'
    case 1284943:                   // '{' 'break' 'while'
    case 1285327:                   // '{' 'continue' 'while'
    case 1294927:                   // '{' Character '{'
    case 1295055:                   // '{' String '{'
    case 1295183:                   // '{' Integer '{'
    case 1295311:                   // '{' Complex '{'
    case 1295439:                   // '{' Real '{'
    case 1295567:                   // '{' Comment '{'
    case 1299151:                   // '{' ';' '{'
    case 1301327:                   // '{' 'break' '{'
    case 1301711:                   // '{' 'continue' '{'
    case 1376719:                   // '{' Identifier '~'
    case 1376847:                   // '{' Character '~'
    case 1376975:                   // '{' String '~'
    case 1377103:                   // '{' Integer '~'
    case 1377231:                   // '{' Complex '~'
    case 1377359:                   // '{' Real '~'
    case 1377487:                   // '{' Comment '~'
    case 1381071:                   // '{' ';' '~'
    case 1383247:                   // '{' 'break' '~'
    case 1383631:                   // '{' 'continue' '~'
      parse_Block();
      break;
    case -3:
    case 37:                        // ';'
    case 54:                        // 'break'
    case 57:                        // 'continue'
    case 59:                        // 'do'
    case 61:                        // 'export'
    case 64:                        // 'for'
    case 65:                        // 'foreach'
    case 66:                        // 'global'
    case 69:                        // 'if'
    case 70:                        // 'import'
    case 71:                        // 'include'
    case 72:                        // 'local'
    case 73:                        // 'return'
    case 74:                        // 'switch'
    case 75:                        // 'test'
    case 76:                        // 'throw'
    case 77:                        // 'try'
    case 78:                        // 'while'
      parse_Statement();
      break;
    default:
      parse_Operation();
    }
    eventHandler.endNonterminal("Expression", e0);
  }

  function try_Expression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 10115:                   // Identifier '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 79:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 463:                     // '{' Identifier
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'export' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 719:                     // '{' String
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'export' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6479:                    // '{' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10703:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 591:                     // '{' Character
      case 847:                     // '{' Integer
      case 975:                     // '{' Complex
      case 1103:                    // '{' Real
        lookahead3W(41);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'export' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 8015:                    // '{' 'f32'
      case 8143:                    // '{' 'f64'
      case 8655:                    // '{' 'i32'
      case 8783:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1231:                    // '{' Comment
      case 4815:                    // '{' ';'
      case 6991:                    // '{' 'break'
      case 7375:                    // '{' 'continue'
      case 10191:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1615:                    // '{' '!'
      case 3279:                    // '{' '+'
      case 3407:                    // '{' '++'
      case 3791:                    // '{' '-'
      case 3919:                    // '{' '--'
      case 10831:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8271:                    // '{' 'for'
      case 8399:                    // '{' 'foreach'
      case 8911:                    // '{' 'if'
      case 9551:                    // '{' 'switch'
      case 9679:                    // '{' 'test'
      case 10063:                   // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2639:                    // '{' '('
      case 7631:                    // '{' 'do'
      case 7887:                    // '{' 'export'
      case 8527:                    // '{' 'global'
      case 9039:                    // '{' 'import'
      case 9167:                    // '{' 'include'
      case 9295:                    // '{' 'local'
      case 9423:                    // '{' 'return'
      case 9807:                    // '{' 'throw'
      case 9935:                    // '{' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 446:                     // 'f32' Identifier
      case 447:                     // 'f64' Identifier
      case 451:                     // 'i32' Identifier
      case 452:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Complex
     && lk != 8                     // Real
     && lk != 9                     // Comment
     && lk != 12                    // '!'
     && lk != 20                    // '('
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 37                    // ';'
     && lk != 50                    // '['
     && lk != 54                    // 'break'
     && lk != 57                    // 'continue'
     && lk != 59                    // 'do'
     && lk != 61                    // 'export'
     && lk != 64                    // 'for'
     && lk != 65                    // 'foreach'
     && lk != 66                    // 'global'
     && lk != 69                    // 'if'
     && lk != 70                    // 'import'
     && lk != 71                    // 'include'
     && lk != 72                    // 'local'
     && lk != 73                    // 'return'
     && lk != 74                    // 'switch'
     && lk != 75                    // 'test'
     && lk != 76                    // 'throw'
     && lk != 77                    // 'try'
     && lk != 78                    // 'while'
     && lk != 84                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Character
     && lk != 643                   // Identifier String
     && lk != 771                   // Identifier Integer
     && lk != 899                   // Identifier Complex
     && lk != 1027                  // Identifier Real
     && lk != 1155                  // Identifier Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1923                  // Identifier '%'
     && lk != 2051                  // Identifier '%='
     && lk != 2179                  // Identifier '&'
     && lk != 2307                  // Identifier '&&'
     && lk != 2435                  // Identifier '&='
     && lk != 2691                  // Identifier ')'
     && lk != 2819                  // Identifier '*'
     && lk != 2947                  // Identifier '**'
     && lk != 3075                  // Identifier '*='
     && lk != 3203                  // Identifier '+'
     && lk != 3331                  // Identifier '++'
     && lk != 3459                  // Identifier '+='
     && lk != 3587                  // Identifier ','
     && lk != 3663                  // '{' ','
     && lk != 3715                  // Identifier '-'
     && lk != 3843                  // Identifier '--'
     && lk != 3971                  // Identifier '-='
     && lk != 4227                  // Identifier '/'
     && lk != 4355                  // Identifier '/='
     && lk != 4483                  // Identifier ':'
     && lk != 4611                  // Identifier ':='
     && lk != 4739                  // Identifier ';'
     && lk != 4867                  // Identifier '<'
     && lk != 4995                  // Identifier '<<'
     && lk != 5123                  // Identifier '<<='
     && lk != 5251                  // Identifier '<='
     && lk != 5379                  // Identifier '='
     && lk != 5507                  // Identifier '=='
     && lk != 5635                  // Identifier '>'
     && lk != 5763                  // Identifier '>='
     && lk != 5891                  // Identifier '>>'
     && lk != 6019                  // Identifier '>>='
     && lk != 6147                  // Identifier '?'
     && lk != 6275                  // Identifier '?='
     && lk != 6403                  // Identifier '['
     && lk != 6531                  // Identifier ']'
     && lk != 6659                  // Identifier '^'
     && lk != 6787                  // Identifier '^='
     && lk != 6915                  // Identifier 'break'
     && lk != 7043                  // Identifier 'case'
     && lk != 7171                  // Identifier 'catch'
     && lk != 7299                  // Identifier 'continue'
     && lk != 7427                  // Identifier 'default'
     && lk != 7555                  // Identifier 'do'
     && lk != 7683                  // Identifier 'else'
     && lk != 7811                  // Identifier 'export'
     && lk != 7939                  // Identifier 'f32'
     && lk != 8067                  // Identifier 'f64'
     && lk != 8195                  // Identifier 'for'
     && lk != 8323                  // Identifier 'foreach'
     && lk != 8451                  // Identifier 'global'
     && lk != 8579                  // Identifier 'i32'
     && lk != 8707                  // Identifier 'i64'
     && lk != 8835                  // Identifier 'if'
     && lk != 8963                  // Identifier 'import'
     && lk != 9091                  // Identifier 'include'
     && lk != 9219                  // Identifier 'local'
     && lk != 9347                  // Identifier 'return'
     && lk != 9475                  // Identifier 'switch'
     && lk != 9603                  // Identifier 'test'
     && lk != 9731                  // Identifier 'throw'
     && lk != 9859                  // Identifier 'try'
     && lk != 9987                  // Identifier 'while'
     && lk != 10243                 // Identifier '|'
     && lk != 10371                 // Identifier '|='
     && lk != 10499                 // Identifier '||'
     && lk != 10627                 // Identifier '}'
     && lk != 10755                 // Identifier '~'
     && lk != 16830                 // 'f32' Identifier END
     && lk != 16831                 // 'f64' Identifier END
     && lk != 16835                 // 'i32' Identifier END
     && lk != 16836                 // 'i64' Identifier END
     && lk != 49598                 // 'f32' Identifier Identifier
     && lk != 49599                 // 'f64' Identifier Identifier
     && lk != 49603                 // 'i32' Identifier Identifier
     && lk != 49604                 // 'i64' Identifier Identifier
     && lk != 49615                 // '{' Identifier Identifier
     && lk != 49743                 // '{' Character Identifier
     && lk != 49871                 // '{' String Identifier
     && lk != 49999                 // '{' Integer Identifier
     && lk != 50127                 // '{' Complex Identifier
     && lk != 50255                 // '{' Real Identifier
     && lk != 50383                 // '{' Comment Identifier
     && lk != 53967                 // '{' ';' Identifier
     && lk != 56143                 // '{' 'break' Identifier
     && lk != 56527                 // '{' 'continue' Identifier
     && lk != 65982                 // 'f32' Identifier Character
     && lk != 65983                 // 'f64' Identifier Character
     && lk != 65987                 // 'i32' Identifier Character
     && lk != 65988                 // 'i64' Identifier Character
     && lk != 65999                 // '{' Identifier Character
     && lk != 66127                 // '{' Character Character
     && lk != 66255                 // '{' String Character
     && lk != 66383                 // '{' Integer Character
     && lk != 66511                 // '{' Complex Character
     && lk != 66639                 // '{' Real Character
     && lk != 66767                 // '{' Comment Character
     && lk != 70351                 // '{' ';' Character
     && lk != 72527                 // '{' 'break' Character
     && lk != 72911                 // '{' 'continue' Character
     && lk != 82366                 // 'f32' Identifier String
     && lk != 82367                 // 'f64' Identifier String
     && lk != 82371                 // 'i32' Identifier String
     && lk != 82372                 // 'i64' Identifier String
     && lk != 82383                 // '{' Identifier String
     && lk != 82511                 // '{' Character String
     && lk != 82639                 // '{' String String
     && lk != 82767                 // '{' Integer String
     && lk != 82895                 // '{' Complex String
     && lk != 83023                 // '{' Real String
     && lk != 83151                 // '{' Comment String
     && lk != 86735                 // '{' ';' String
     && lk != 88911                 // '{' 'break' String
     && lk != 89295                 // '{' 'continue' String
     && lk != 98750                 // 'f32' Identifier Integer
     && lk != 98751                 // 'f64' Identifier Integer
     && lk != 98755                 // 'i32' Identifier Integer
     && lk != 98756                 // 'i64' Identifier Integer
     && lk != 98767                 // '{' Identifier Integer
     && lk != 98895                 // '{' Character Integer
     && lk != 99023                 // '{' String Integer
     && lk != 99151                 // '{' Integer Integer
     && lk != 99279                 // '{' Complex Integer
     && lk != 99407                 // '{' Real Integer
     && lk != 99535                 // '{' Comment Integer
     && lk != 103119                // '{' ';' Integer
     && lk != 105295                // '{' 'break' Integer
     && lk != 105679                // '{' 'continue' Integer
     && lk != 115134                // 'f32' Identifier Complex
     && lk != 115135                // 'f64' Identifier Complex
     && lk != 115139                // 'i32' Identifier Complex
     && lk != 115140                // 'i64' Identifier Complex
     && lk != 115151                // '{' Identifier Complex
     && lk != 115279                // '{' Character Complex
     && lk != 115407                // '{' String Complex
     && lk != 115535                // '{' Integer Complex
     && lk != 115663                // '{' Complex Complex
     && lk != 115791                // '{' Real Complex
     && lk != 115919                // '{' Comment Complex
     && lk != 119503                // '{' ';' Complex
     && lk != 121679                // '{' 'break' Complex
     && lk != 122063                // '{' 'continue' Complex
     && lk != 131518                // 'f32' Identifier Real
     && lk != 131519                // 'f64' Identifier Real
     && lk != 131523                // 'i32' Identifier Real
     && lk != 131524                // 'i64' Identifier Real
     && lk != 131535                // '{' Identifier Real
     && lk != 131663                // '{' Character Real
     && lk != 131791                // '{' String Real
     && lk != 131919                // '{' Integer Real
     && lk != 132047                // '{' Complex Real
     && lk != 132175                // '{' Real Real
     && lk != 132303                // '{' Comment Real
     && lk != 135887                // '{' ';' Real
     && lk != 138063                // '{' 'break' Real
     && lk != 138447                // '{' 'continue' Real
     && lk != 147902                // 'f32' Identifier Comment
     && lk != 147903                // 'f64' Identifier Comment
     && lk != 147907                // 'i32' Identifier Comment
     && lk != 147908                // 'i64' Identifier Comment
     && lk != 147919                // '{' Identifier Comment
     && lk != 148047                // '{' Character Comment
     && lk != 148175                // '{' String Comment
     && lk != 148303                // '{' Integer Comment
     && lk != 148431                // '{' Complex Comment
     && lk != 148559                // '{' Real Comment
     && lk != 148687                // '{' Comment Comment
     && lk != 152271                // '{' ';' Comment
     && lk != 154447                // '{' 'break' Comment
     && lk != 154831                // '{' 'continue' Comment
     && lk != 197054                // 'f32' Identifier '!'
     && lk != 197055                // 'f64' Identifier '!'
     && lk != 197059                // 'i32' Identifier '!'
     && lk != 197060                // 'i64' Identifier '!'
     && lk != 197071                // '{' Identifier '!'
     && lk != 197199                // '{' Character '!'
     && lk != 197327                // '{' String '!'
     && lk != 197455                // '{' Integer '!'
     && lk != 197583                // '{' Complex '!'
     && lk != 197711                // '{' Real '!'
     && lk != 197839                // '{' Comment '!'
     && lk != 201423                // '{' ';' '!'
     && lk != 203599                // '{' 'break' '!'
     && lk != 203983                // '{' 'continue' '!'
     && lk != 213438                // 'f32' Identifier '!='
     && lk != 213439                // 'f64' Identifier '!='
     && lk != 213443                // 'i32' Identifier '!='
     && lk != 213444                // 'i64' Identifier '!='
     && lk != 223695                // '{' '}' '!='
     && lk != 246206                // 'f32' Identifier '%'
     && lk != 246207                // 'f64' Identifier '%'
     && lk != 246211                // 'i32' Identifier '%'
     && lk != 246212                // 'i64' Identifier '%'
     && lk != 256463                // '{' '}' '%'
     && lk != 262590                // 'f32' Identifier '%='
     && lk != 262591                // 'f64' Identifier '%='
     && lk != 262595                // 'i32' Identifier '%='
     && lk != 262596                // 'i64' Identifier '%='
     && lk != 272847                // '{' '}' '%='
     && lk != 278974                // 'f32' Identifier '&'
     && lk != 278975                // 'f64' Identifier '&'
     && lk != 278979                // 'i32' Identifier '&'
     && lk != 278980                // 'i64' Identifier '&'
     && lk != 289231                // '{' '}' '&'
     && lk != 295358                // 'f32' Identifier '&&'
     && lk != 295359                // 'f64' Identifier '&&'
     && lk != 295363                // 'i32' Identifier '&&'
     && lk != 295364                // 'i64' Identifier '&&'
     && lk != 305615                // '{' '}' '&&'
     && lk != 311742                // 'f32' Identifier '&='
     && lk != 311743                // 'f64' Identifier '&='
     && lk != 311747                // 'i32' Identifier '&='
     && lk != 311748                // 'i64' Identifier '&='
     && lk != 321999                // '{' '}' '&='
     && lk != 328271                // '{' Character '('
     && lk != 328399                // '{' String '('
     && lk != 328527                // '{' Integer '('
     && lk != 328655                // '{' Complex '('
     && lk != 328783                // '{' Real '('
     && lk != 328911                // '{' Comment '('
     && lk != 332495                // '{' ';' '('
     && lk != 334671                // '{' 'break' '('
     && lk != 335055                // '{' 'continue' '('
     && lk != 344510                // 'f32' Identifier ')'
     && lk != 344511                // 'f64' Identifier ')'
     && lk != 344515                // 'i32' Identifier ')'
     && lk != 344516                // 'i64' Identifier ')'
     && lk != 360894                // 'f32' Identifier '*'
     && lk != 360895                // 'f64' Identifier '*'
     && lk != 360899                // 'i32' Identifier '*'
     && lk != 360900                // 'i64' Identifier '*'
     && lk != 371151                // '{' '}' '*'
     && lk != 377278                // 'f32' Identifier '**'
     && lk != 377279                // 'f64' Identifier '**'
     && lk != 377283                // 'i32' Identifier '**'
     && lk != 377284                // 'i64' Identifier '**'
     && lk != 387535                // '{' '}' '**'
     && lk != 393662                // 'f32' Identifier '*='
     && lk != 393663                // 'f64' Identifier '*='
     && lk != 393667                // 'i32' Identifier '*='
     && lk != 393668                // 'i64' Identifier '*='
     && lk != 403919                // '{' '}' '*='
     && lk != 410046                // 'f32' Identifier '+'
     && lk != 410047                // 'f64' Identifier '+'
     && lk != 410051                // 'i32' Identifier '+'
     && lk != 410052                // 'i64' Identifier '+'
     && lk != 410831                // '{' Comment '+'
     && lk != 414415                // '{' ';' '+'
     && lk != 416591                // '{' 'break' '+'
     && lk != 416975                // '{' 'continue' '+'
     && lk != 426430                // 'f32' Identifier '++'
     && lk != 426431                // 'f64' Identifier '++'
     && lk != 426435                // 'i32' Identifier '++'
     && lk != 426436                // 'i64' Identifier '++'
     && lk != 427215                // '{' Comment '++'
     && lk != 430799                // '{' ';' '++'
     && lk != 432975                // '{' 'break' '++'
     && lk != 433359                // '{' 'continue' '++'
     && lk != 442814                // 'f32' Identifier '+='
     && lk != 442815                // 'f64' Identifier '+='
     && lk != 442819                // 'i32' Identifier '+='
     && lk != 442820                // 'i64' Identifier '+='
     && lk != 453071                // '{' '}' '+='
     && lk != 459198                // 'f32' Identifier ','
     && lk != 459199                // 'f64' Identifier ','
     && lk != 459203                // 'i32' Identifier ','
     && lk != 459204                // 'i64' Identifier ','
     && lk != 459215                // '{' Identifier ','
     && lk != 459343                // '{' Character ','
     && lk != 459471                // '{' String ','
     && lk != 459599                // '{' Integer ','
     && lk != 459727                // '{' Complex ','
     && lk != 459855                // '{' Real ','
     && lk != 459983                // '{' Comment ','
     && lk != 463567                // '{' ';' ','
     && lk != 465743                // '{' 'break' ','
     && lk != 466127                // '{' 'continue' ','
     && lk != 468867                // Identifier '{' ','
     && lk != 475582                // 'f32' Identifier '-'
     && lk != 475583                // 'f64' Identifier '-'
     && lk != 475587                // 'i32' Identifier '-'
     && lk != 475588                // 'i64' Identifier '-'
     && lk != 476367                // '{' Comment '-'
     && lk != 479951                // '{' ';' '-'
     && lk != 482127                // '{' 'break' '-'
     && lk != 482511                // '{' 'continue' '-'
     && lk != 491966                // 'f32' Identifier '--'
     && lk != 491967                // 'f64' Identifier '--'
     && lk != 491971                // 'i32' Identifier '--'
     && lk != 491972                // 'i64' Identifier '--'
     && lk != 492751                // '{' Comment '--'
     && lk != 496335                // '{' ';' '--'
     && lk != 498511                // '{' 'break' '--'
     && lk != 498895                // '{' 'continue' '--'
     && lk != 508350                // 'f32' Identifier '-='
     && lk != 508351                // 'f64' Identifier '-='
     && lk != 508355                // 'i32' Identifier '-='
     && lk != 508356                // 'i64' Identifier '-='
     && lk != 518607                // '{' '}' '-='
     && lk != 541118                // 'f32' Identifier '/'
     && lk != 541119                // 'f64' Identifier '/'
     && lk != 541123                // 'i32' Identifier '/'
     && lk != 541124                // 'i64' Identifier '/'
     && lk != 551375                // '{' '}' '/'
     && lk != 557502                // 'f32' Identifier '/='
     && lk != 557503                // 'f64' Identifier '/='
     && lk != 557507                // 'i32' Identifier '/='
     && lk != 557508                // 'i64' Identifier '/='
     && lk != 567759                // '{' '}' '/='
     && lk != 573886                // 'f32' Identifier ':'
     && lk != 573887                // 'f64' Identifier ':'
     && lk != 573891                // 'i32' Identifier ':'
     && lk != 573892                // 'i64' Identifier ':'
     && lk != 573903                // '{' Identifier ':'
     && lk != 574159                // '{' String ':'
     && lk != 590270                // 'f32' Identifier ':='
     && lk != 590271                // 'f64' Identifier ':='
     && lk != 590275                // 'i32' Identifier ':='
     && lk != 590276                // 'i64' Identifier ':='
     && lk != 600527                // '{' '}' ':='
     && lk != 606654                // 'f32' Identifier ';'
     && lk != 606655                // 'f64' Identifier ';'
     && lk != 606659                // 'i32' Identifier ';'
     && lk != 606660                // 'i64' Identifier ';'
     && lk != 606671                // '{' Identifier ';'
     && lk != 606799                // '{' Character ';'
     && lk != 606927                // '{' String ';'
     && lk != 607055                // '{' Integer ';'
     && lk != 607183                // '{' Complex ';'
     && lk != 607311                // '{' Real ';'
     && lk != 607439                // '{' Comment ';'
     && lk != 611023                // '{' ';' ';'
     && lk != 613199                // '{' 'break' ';'
     && lk != 613583                // '{' 'continue' ';'
     && lk != 623038                // 'f32' Identifier '<'
     && lk != 623039                // 'f64' Identifier '<'
     && lk != 623043                // 'i32' Identifier '<'
     && lk != 623044                // 'i64' Identifier '<'
     && lk != 633295                // '{' '}' '<'
     && lk != 639422                // 'f32' Identifier '<<'
     && lk != 639423                // 'f64' Identifier '<<'
     && lk != 639427                // 'i32' Identifier '<<'
     && lk != 639428                // 'i64' Identifier '<<'
     && lk != 649679                // '{' '}' '<<'
     && lk != 655806                // 'f32' Identifier '<<='
     && lk != 655807                // 'f64' Identifier '<<='
     && lk != 655811                // 'i32' Identifier '<<='
     && lk != 655812                // 'i64' Identifier '<<='
     && lk != 666063                // '{' '}' '<<='
     && lk != 672190                // 'f32' Identifier '<='
     && lk != 672191                // 'f64' Identifier '<='
     && lk != 672195                // 'i32' Identifier '<='
     && lk != 672196                // 'i64' Identifier '<='
     && lk != 682447                // '{' '}' '<='
     && lk != 688574                // 'f32' Identifier '='
     && lk != 688575                // 'f64' Identifier '='
     && lk != 688579                // 'i32' Identifier '='
     && lk != 688580                // 'i64' Identifier '='
     && lk != 698831                // '{' '}' '='
     && lk != 704958                // 'f32' Identifier '=='
     && lk != 704959                // 'f64' Identifier '=='
     && lk != 704963                // 'i32' Identifier '=='
     && lk != 704964                // 'i64' Identifier '=='
     && lk != 715215                // '{' '}' '=='
     && lk != 721342                // 'f32' Identifier '>'
     && lk != 721343                // 'f64' Identifier '>'
     && lk != 721347                // 'i32' Identifier '>'
     && lk != 721348                // 'i64' Identifier '>'
     && lk != 731599                // '{' '}' '>'
     && lk != 737726                // 'f32' Identifier '>='
     && lk != 737727                // 'f64' Identifier '>='
     && lk != 737731                // 'i32' Identifier '>='
     && lk != 737732                // 'i64' Identifier '>='
     && lk != 747983                // '{' '}' '>='
     && lk != 754110                // 'f32' Identifier '>>'
     && lk != 754111                // 'f64' Identifier '>>'
     && lk != 754115                // 'i32' Identifier '>>'
     && lk != 754116                // 'i64' Identifier '>>'
     && lk != 764367                // '{' '}' '>>'
     && lk != 770494                // 'f32' Identifier '>>='
     && lk != 770495                // 'f64' Identifier '>>='
     && lk != 770499                // 'i32' Identifier '>>='
     && lk != 770500                // 'i64' Identifier '>>='
     && lk != 780751                // '{' '}' '>>='
     && lk != 786878                // 'f32' Identifier '?'
     && lk != 786879                // 'f64' Identifier '?'
     && lk != 786883                // 'i32' Identifier '?'
     && lk != 786884                // 'i64' Identifier '?'
     && lk != 797135                // '{' '}' '?'
     && lk != 803262                // 'f32' Identifier '?='
     && lk != 803263                // 'f64' Identifier '?='
     && lk != 803267                // 'i32' Identifier '?='
     && lk != 803268                // 'i64' Identifier '?='
     && lk != 813519                // '{' '}' '?='
     && lk != 819646                // 'f32' Identifier '['
     && lk != 819647                // 'f64' Identifier '['
     && lk != 819651                // 'i32' Identifier '['
     && lk != 819652                // 'i64' Identifier '['
     && lk != 819791                // '{' Character '['
     && lk != 819919                // '{' String '['
     && lk != 820047                // '{' Integer '['
     && lk != 820175                // '{' Complex '['
     && lk != 820303                // '{' Real '['
     && lk != 820431                // '{' Comment '['
     && lk != 824015                // '{' ';' '['
     && lk != 826191                // '{' 'break' '['
     && lk != 826575                // '{' 'continue' '['
     && lk != 836030                // 'f32' Identifier ']'
     && lk != 836031                // 'f64' Identifier ']'
     && lk != 836035                // 'i32' Identifier ']'
     && lk != 836036                // 'i64' Identifier ']'
     && lk != 852414                // 'f32' Identifier '^'
     && lk != 852415                // 'f64' Identifier '^'
     && lk != 852419                // 'i32' Identifier '^'
     && lk != 852420                // 'i64' Identifier '^'
     && lk != 862671                // '{' '}' '^'
     && lk != 868798                // 'f32' Identifier '^='
     && lk != 868799                // 'f64' Identifier '^='
     && lk != 868803                // 'i32' Identifier '^='
     && lk != 868804                // 'i64' Identifier '^='
     && lk != 879055                // '{' '}' '^='
     && lk != 885182                // 'f32' Identifier 'break'
     && lk != 885183                // 'f64' Identifier 'break'
     && lk != 885187                // 'i32' Identifier 'break'
     && lk != 885188                // 'i64' Identifier 'break'
     && lk != 885199                // '{' Identifier 'break'
     && lk != 885327                // '{' Character 'break'
     && lk != 885455                // '{' String 'break'
     && lk != 885583                // '{' Integer 'break'
     && lk != 885711                // '{' Complex 'break'
     && lk != 885839                // '{' Real 'break'
     && lk != 885967                // '{' Comment 'break'
     && lk != 889551                // '{' ';' 'break'
     && lk != 891727                // '{' 'break' 'break'
     && lk != 892111                // '{' 'continue' 'break'
     && lk != 901566                // 'f32' Identifier 'case'
     && lk != 901567                // 'f64' Identifier 'case'
     && lk != 901571                // 'i32' Identifier 'case'
     && lk != 901572                // 'i64' Identifier 'case'
     && lk != 917950                // 'f32' Identifier 'catch'
     && lk != 917951                // 'f64' Identifier 'catch'
     && lk != 917955                // 'i32' Identifier 'catch'
     && lk != 917956                // 'i64' Identifier 'catch'
     && lk != 934334                // 'f32' Identifier 'continue'
     && lk != 934335                // 'f64' Identifier 'continue'
     && lk != 934339                // 'i32' Identifier 'continue'
     && lk != 934340                // 'i64' Identifier 'continue'
     && lk != 934351                // '{' Identifier 'continue'
     && lk != 934479                // '{' Character 'continue'
     && lk != 934607                // '{' String 'continue'
     && lk != 934735                // '{' Integer 'continue'
     && lk != 934863                // '{' Complex 'continue'
     && lk != 934991                // '{' Real 'continue'
     && lk != 935119                // '{' Comment 'continue'
     && lk != 938703                // '{' ';' 'continue'
     && lk != 940879                // '{' 'break' 'continue'
     && lk != 941263                // '{' 'continue' 'continue'
     && lk != 950718                // 'f32' Identifier 'default'
     && lk != 950719                // 'f64' Identifier 'default'
     && lk != 950723                // 'i32' Identifier 'default'
     && lk != 950724                // 'i64' Identifier 'default'
     && lk != 967102                // 'f32' Identifier 'do'
     && lk != 967103                // 'f64' Identifier 'do'
     && lk != 967107                // 'i32' Identifier 'do'
     && lk != 967108                // 'i64' Identifier 'do'
     && lk != 967119                // '{' Identifier 'do'
     && lk != 967247                // '{' Character 'do'
     && lk != 967375                // '{' String 'do'
     && lk != 967503                // '{' Integer 'do'
     && lk != 967631                // '{' Complex 'do'
     && lk != 967759                // '{' Real 'do'
     && lk != 967887                // '{' Comment 'do'
     && lk != 971471                // '{' ';' 'do'
     && lk != 973647                // '{' 'break' 'do'
     && lk != 974031                // '{' 'continue' 'do'
     && lk != 983486                // 'f32' Identifier 'else'
     && lk != 983487                // 'f64' Identifier 'else'
     && lk != 983491                // 'i32' Identifier 'else'
     && lk != 983492                // 'i64' Identifier 'else'
     && lk != 999870                // 'f32' Identifier 'export'
     && lk != 999871                // 'f64' Identifier 'export'
     && lk != 999875                // 'i32' Identifier 'export'
     && lk != 999876                // 'i64' Identifier 'export'
     && lk != 999887                // '{' Identifier 'export'
     && lk != 1000015               // '{' Character 'export'
     && lk != 1000143               // '{' String 'export'
     && lk != 1000271               // '{' Integer 'export'
     && lk != 1000399               // '{' Complex 'export'
     && lk != 1000527               // '{' Real 'export'
     && lk != 1000655               // '{' Comment 'export'
     && lk != 1004239               // '{' ';' 'export'
     && lk != 1006415               // '{' 'break' 'export'
     && lk != 1006799               // '{' 'continue' 'export'
     && lk != 1016254               // 'f32' Identifier 'f32'
     && lk != 1016255               // 'f64' Identifier 'f32'
     && lk != 1016259               // 'i32' Identifier 'f32'
     && lk != 1016260               // 'i64' Identifier 'f32'
     && lk != 1016271               // '{' Identifier 'f32'
     && lk != 1016399               // '{' Character 'f32'
     && lk != 1016527               // '{' String 'f32'
     && lk != 1016655               // '{' Integer 'f32'
     && lk != 1016783               // '{' Complex 'f32'
     && lk != 1016911               // '{' Real 'f32'
     && lk != 1017039               // '{' Comment 'f32'
     && lk != 1020623               // '{' ';' 'f32'
     && lk != 1022799               // '{' 'break' 'f32'
     && lk != 1023183               // '{' 'continue' 'f32'
     && lk != 1032638               // 'f32' Identifier 'f64'
     && lk != 1032639               // 'f64' Identifier 'f64'
     && lk != 1032643               // 'i32' Identifier 'f64'
     && lk != 1032644               // 'i64' Identifier 'f64'
     && lk != 1032655               // '{' Identifier 'f64'
     && lk != 1032783               // '{' Character 'f64'
     && lk != 1032911               // '{' String 'f64'
     && lk != 1033039               // '{' Integer 'f64'
     && lk != 1033167               // '{' Complex 'f64'
     && lk != 1033295               // '{' Real 'f64'
     && lk != 1033423               // '{' Comment 'f64'
     && lk != 1037007               // '{' ';' 'f64'
     && lk != 1039183               // '{' 'break' 'f64'
     && lk != 1039567               // '{' 'continue' 'f64'
     && lk != 1049022               // 'f32' Identifier 'for'
     && lk != 1049023               // 'f64' Identifier 'for'
     && lk != 1049027               // 'i32' Identifier 'for'
     && lk != 1049028               // 'i64' Identifier 'for'
     && lk != 1049039               // '{' Identifier 'for'
     && lk != 1049167               // '{' Character 'for'
     && lk != 1049295               // '{' String 'for'
     && lk != 1049423               // '{' Integer 'for'
     && lk != 1049551               // '{' Complex 'for'
     && lk != 1049679               // '{' Real 'for'
     && lk != 1049807               // '{' Comment 'for'
     && lk != 1053391               // '{' ';' 'for'
     && lk != 1055567               // '{' 'break' 'for'
     && lk != 1055951               // '{' 'continue' 'for'
     && lk != 1065406               // 'f32' Identifier 'foreach'
     && lk != 1065407               // 'f64' Identifier 'foreach'
     && lk != 1065411               // 'i32' Identifier 'foreach'
     && lk != 1065412               // 'i64' Identifier 'foreach'
     && lk != 1065423               // '{' Identifier 'foreach'
     && lk != 1065551               // '{' Character 'foreach'
     && lk != 1065679               // '{' String 'foreach'
     && lk != 1065807               // '{' Integer 'foreach'
     && lk != 1065935               // '{' Complex 'foreach'
     && lk != 1066063               // '{' Real 'foreach'
     && lk != 1066191               // '{' Comment 'foreach'
     && lk != 1069775               // '{' ';' 'foreach'
     && lk != 1071951               // '{' 'break' 'foreach'
     && lk != 1072335               // '{' 'continue' 'foreach'
     && lk != 1081790               // 'f32' Identifier 'global'
     && lk != 1081791               // 'f64' Identifier 'global'
     && lk != 1081795               // 'i32' Identifier 'global'
     && lk != 1081796               // 'i64' Identifier 'global'
     && lk != 1081807               // '{' Identifier 'global'
     && lk != 1081935               // '{' Character 'global'
     && lk != 1082063               // '{' String 'global'
     && lk != 1082191               // '{' Integer 'global'
     && lk != 1082319               // '{' Complex 'global'
     && lk != 1082447               // '{' Real 'global'
     && lk != 1082575               // '{' Comment 'global'
     && lk != 1086159               // '{' ';' 'global'
     && lk != 1088335               // '{' 'break' 'global'
     && lk != 1088719               // '{' 'continue' 'global'
     && lk != 1098174               // 'f32' Identifier 'i32'
     && lk != 1098175               // 'f64' Identifier 'i32'
     && lk != 1098179               // 'i32' Identifier 'i32'
     && lk != 1098180               // 'i64' Identifier 'i32'
     && lk != 1098191               // '{' Identifier 'i32'
     && lk != 1098319               // '{' Character 'i32'
     && lk != 1098447               // '{' String 'i32'
     && lk != 1098575               // '{' Integer 'i32'
     && lk != 1098703               // '{' Complex 'i32'
     && lk != 1098831               // '{' Real 'i32'
     && lk != 1098959               // '{' Comment 'i32'
     && lk != 1102543               // '{' ';' 'i32'
     && lk != 1104719               // '{' 'break' 'i32'
     && lk != 1105103               // '{' 'continue' 'i32'
     && lk != 1114558               // 'f32' Identifier 'i64'
     && lk != 1114559               // 'f64' Identifier 'i64'
     && lk != 1114563               // 'i32' Identifier 'i64'
     && lk != 1114564               // 'i64' Identifier 'i64'
     && lk != 1114575               // '{' Identifier 'i64'
     && lk != 1114703               // '{' Character 'i64'
     && lk != 1114831               // '{' String 'i64'
     && lk != 1114959               // '{' Integer 'i64'
     && lk != 1115087               // '{' Complex 'i64'
     && lk != 1115215               // '{' Real 'i64'
     && lk != 1115343               // '{' Comment 'i64'
     && lk != 1118927               // '{' ';' 'i64'
     && lk != 1121103               // '{' 'break' 'i64'
     && lk != 1121487               // '{' 'continue' 'i64'
     && lk != 1130942               // 'f32' Identifier 'if'
     && lk != 1130943               // 'f64' Identifier 'if'
     && lk != 1130947               // 'i32' Identifier 'if'
     && lk != 1130948               // 'i64' Identifier 'if'
     && lk != 1130959               // '{' Identifier 'if'
     && lk != 1131087               // '{' Character 'if'
     && lk != 1131215               // '{' String 'if'
     && lk != 1131343               // '{' Integer 'if'
     && lk != 1131471               // '{' Complex 'if'
     && lk != 1131599               // '{' Real 'if'
     && lk != 1131727               // '{' Comment 'if'
     && lk != 1135311               // '{' ';' 'if'
     && lk != 1137487               // '{' 'break' 'if'
     && lk != 1137871               // '{' 'continue' 'if'
     && lk != 1147326               // 'f32' Identifier 'import'
     && lk != 1147327               // 'f64' Identifier 'import'
     && lk != 1147331               // 'i32' Identifier 'import'
     && lk != 1147332               // 'i64' Identifier 'import'
     && lk != 1147343               // '{' Identifier 'import'
     && lk != 1147471               // '{' Character 'import'
     && lk != 1147599               // '{' String 'import'
     && lk != 1147727               // '{' Integer 'import'
     && lk != 1147855               // '{' Complex 'import'
     && lk != 1147983               // '{' Real 'import'
     && lk != 1148111               // '{' Comment 'import'
     && lk != 1151695               // '{' ';' 'import'
     && lk != 1153871               // '{' 'break' 'import'
     && lk != 1154255               // '{' 'continue' 'import'
     && lk != 1163710               // 'f32' Identifier 'include'
     && lk != 1163711               // 'f64' Identifier 'include'
     && lk != 1163715               // 'i32' Identifier 'include'
     && lk != 1163716               // 'i64' Identifier 'include'
     && lk != 1163727               // '{' Identifier 'include'
     && lk != 1163855               // '{' Character 'include'
     && lk != 1163983               // '{' String 'include'
     && lk != 1164111               // '{' Integer 'include'
     && lk != 1164239               // '{' Complex 'include'
     && lk != 1164367               // '{' Real 'include'
     && lk != 1164495               // '{' Comment 'include'
     && lk != 1168079               // '{' ';' 'include'
     && lk != 1170255               // '{' 'break' 'include'
     && lk != 1170639               // '{' 'continue' 'include'
     && lk != 1180094               // 'f32' Identifier 'local'
     && lk != 1180095               // 'f64' Identifier 'local'
     && lk != 1180099               // 'i32' Identifier 'local'
     && lk != 1180100               // 'i64' Identifier 'local'
     && lk != 1180111               // '{' Identifier 'local'
     && lk != 1180239               // '{' Character 'local'
     && lk != 1180367               // '{' String 'local'
     && lk != 1180495               // '{' Integer 'local'
     && lk != 1180623               // '{' Complex 'local'
     && lk != 1180751               // '{' Real 'local'
     && lk != 1180879               // '{' Comment 'local'
     && lk != 1184463               // '{' ';' 'local'
     && lk != 1186639               // '{' 'break' 'local'
     && lk != 1187023               // '{' 'continue' 'local'
     && lk != 1196478               // 'f32' Identifier 'return'
     && lk != 1196479               // 'f64' Identifier 'return'
     && lk != 1196483               // 'i32' Identifier 'return'
     && lk != 1196484               // 'i64' Identifier 'return'
     && lk != 1196495               // '{' Identifier 'return'
     && lk != 1196623               // '{' Character 'return'
     && lk != 1196751               // '{' String 'return'
     && lk != 1196879               // '{' Integer 'return'
     && lk != 1197007               // '{' Complex 'return'
     && lk != 1197135               // '{' Real 'return'
     && lk != 1197263               // '{' Comment 'return'
     && lk != 1200847               // '{' ';' 'return'
     && lk != 1203023               // '{' 'break' 'return'
     && lk != 1203407               // '{' 'continue' 'return'
     && lk != 1212862               // 'f32' Identifier 'switch'
     && lk != 1212863               // 'f64' Identifier 'switch'
     && lk != 1212867               // 'i32' Identifier 'switch'
     && lk != 1212868               // 'i64' Identifier 'switch'
     && lk != 1212879               // '{' Identifier 'switch'
     && lk != 1213007               // '{' Character 'switch'
     && lk != 1213135               // '{' String 'switch'
     && lk != 1213263               // '{' Integer 'switch'
     && lk != 1213391               // '{' Complex 'switch'
     && lk != 1213519               // '{' Real 'switch'
     && lk != 1213647               // '{' Comment 'switch'
     && lk != 1217231               // '{' ';' 'switch'
     && lk != 1219407               // '{' 'break' 'switch'
     && lk != 1219791               // '{' 'continue' 'switch'
     && lk != 1229246               // 'f32' Identifier 'test'
     && lk != 1229247               // 'f64' Identifier 'test'
     && lk != 1229251               // 'i32' Identifier 'test'
     && lk != 1229252               // 'i64' Identifier 'test'
     && lk != 1229263               // '{' Identifier 'test'
     && lk != 1229391               // '{' Character 'test'
     && lk != 1229519               // '{' String 'test'
     && lk != 1229647               // '{' Integer 'test'
     && lk != 1229775               // '{' Complex 'test'
     && lk != 1229903               // '{' Real 'test'
     && lk != 1230031               // '{' Comment 'test'
     && lk != 1233615               // '{' ';' 'test'
     && lk != 1235791               // '{' 'break' 'test'
     && lk != 1236175               // '{' 'continue' 'test'
     && lk != 1245630               // 'f32' Identifier 'throw'
     && lk != 1245631               // 'f64' Identifier 'throw'
     && lk != 1245635               // 'i32' Identifier 'throw'
     && lk != 1245636               // 'i64' Identifier 'throw'
     && lk != 1245647               // '{' Identifier 'throw'
     && lk != 1245775               // '{' Character 'throw'
     && lk != 1245903               // '{' String 'throw'
     && lk != 1246031               // '{' Integer 'throw'
     && lk != 1246159               // '{' Complex 'throw'
     && lk != 1246287               // '{' Real 'throw'
     && lk != 1246415               // '{' Comment 'throw'
     && lk != 1249999               // '{' ';' 'throw'
     && lk != 1252175               // '{' 'break' 'throw'
     && lk != 1252559               // '{' 'continue' 'throw'
     && lk != 1262014               // 'f32' Identifier 'try'
     && lk != 1262015               // 'f64' Identifier 'try'
     && lk != 1262019               // 'i32' Identifier 'try'
     && lk != 1262020               // 'i64' Identifier 'try'
     && lk != 1262031               // '{' Identifier 'try'
     && lk != 1262159               // '{' Character 'try'
     && lk != 1262287               // '{' String 'try'
     && lk != 1262415               // '{' Integer 'try'
     && lk != 1262543               // '{' Complex 'try'
     && lk != 1262671               // '{' Real 'try'
     && lk != 1262799               // '{' Comment 'try'
     && lk != 1266383               // '{' ';' 'try'
     && lk != 1268559               // '{' 'break' 'try'
     && lk != 1268943               // '{' 'continue' 'try'
     && lk != 1278398               // 'f32' Identifier 'while'
     && lk != 1278399               // 'f64' Identifier 'while'
     && lk != 1278403               // 'i32' Identifier 'while'
     && lk != 1278404               // 'i64' Identifier 'while'
     && lk != 1278415               // '{' Identifier 'while'
     && lk != 1278543               // '{' Character 'while'
     && lk != 1278671               // '{' String 'while'
     && lk != 1278799               // '{' Integer 'while'
     && lk != 1278927               // '{' Complex 'while'
     && lk != 1279055               // '{' Real 'while'
     && lk != 1279183               // '{' Comment 'while'
     && lk != 1282767               // '{' ';' 'while'
     && lk != 1284943               // '{' 'break' 'while'
     && lk != 1285327               // '{' 'continue' 'while'
     && lk != 1294782               // 'f32' Identifier '{'
     && lk != 1294783               // 'f64' Identifier '{'
     && lk != 1294787               // 'i32' Identifier '{'
     && lk != 1294788               // 'i64' Identifier '{'
     && lk != 1294927               // '{' Character '{'
     && lk != 1295055               // '{' String '{'
     && lk != 1295183               // '{' Integer '{'
     && lk != 1295311               // '{' Complex '{'
     && lk != 1295439               // '{' Real '{'
     && lk != 1295567               // '{' Comment '{'
     && lk != 1299151               // '{' ';' '{'
     && lk != 1301327               // '{' 'break' '{'
     && lk != 1301711               // '{' 'continue' '{'
     && lk != 1311166               // 'f32' Identifier '|'
     && lk != 1311167               // 'f64' Identifier '|'
     && lk != 1311171               // 'i32' Identifier '|'
     && lk != 1311172               // 'i64' Identifier '|'
     && lk != 1321423               // '{' '}' '|'
     && lk != 1327550               // 'f32' Identifier '|='
     && lk != 1327551               // 'f64' Identifier '|='
     && lk != 1327555               // 'i32' Identifier '|='
     && lk != 1327556               // 'i64' Identifier '|='
     && lk != 1337807               // '{' '}' '|='
     && lk != 1343934               // 'f32' Identifier '||'
     && lk != 1343935               // 'f64' Identifier '||'
     && lk != 1343939               // 'i32' Identifier '||'
     && lk != 1343940               // 'i64' Identifier '||'
     && lk != 1354191               // '{' '}' '||'
     && lk != 1360318               // 'f32' Identifier '}'
     && lk != 1360319               // 'f64' Identifier '}'
     && lk != 1360323               // 'i32' Identifier '}'
     && lk != 1360324               // 'i64' Identifier '}'
     && lk != 1376702               // 'f32' Identifier '~'
     && lk != 1376703               // 'f64' Identifier '~'
     && lk != 1376707               // 'i32' Identifier '~'
     && lk != 1376708               // 'i64' Identifier '~'
     && lk != 1376719               // '{' Identifier '~'
     && lk != 1376847               // '{' Character '~'
     && lk != 1376975               // '{' String '~'
     && lk != 1377103               // '{' Integer '~'
     && lk != 1377231               // '{' Complex '~'
     && lk != 1377359               // '{' Real '~'
     && lk != 1377487               // '{' Comment '~'
     && lk != 1381071               // '{' ';' '~'
     && lk != 1383247               // '{' 'break' '~'
     && lk != 1383631)              // '{' 'continue' '~'
    {
      lk = memoized(0, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
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
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            try_Statement();
            memoize(0, e0A, -3);
            lk = -5;
          }
          catch (p3A)
          {
            lk = -4;
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(0, e0A, -4);
          }
        }
      }
    }
    switch (lk)
    {
    case 9:                         // Comment
      consumeT(9);                  // Comment
      break;
    case -2:
    case 49615:                     // '{' Identifier Identifier
    case 49743:                     // '{' Character Identifier
    case 49871:                     // '{' String Identifier
    case 49999:                     // '{' Integer Identifier
    case 50127:                     // '{' Complex Identifier
    case 50255:                     // '{' Real Identifier
    case 50383:                     // '{' Comment Identifier
    case 53967:                     // '{' ';' Identifier
    case 56143:                     // '{' 'break' Identifier
    case 56527:                     // '{' 'continue' Identifier
    case 65999:                     // '{' Identifier Character
    case 66127:                     // '{' Character Character
    case 66255:                     // '{' String Character
    case 66383:                     // '{' Integer Character
    case 66511:                     // '{' Complex Character
    case 66639:                     // '{' Real Character
    case 66767:                     // '{' Comment Character
    case 70351:                     // '{' ';' Character
    case 72527:                     // '{' 'break' Character
    case 72911:                     // '{' 'continue' Character
    case 82383:                     // '{' Identifier String
    case 82511:                     // '{' Character String
    case 82639:                     // '{' String String
    case 82767:                     // '{' Integer String
    case 82895:                     // '{' Complex String
    case 83023:                     // '{' Real String
    case 83151:                     // '{' Comment String
    case 86735:                     // '{' ';' String
    case 88911:                     // '{' 'break' String
    case 89295:                     // '{' 'continue' String
    case 98767:                     // '{' Identifier Integer
    case 98895:                     // '{' Character Integer
    case 99023:                     // '{' String Integer
    case 99151:                     // '{' Integer Integer
    case 99279:                     // '{' Complex Integer
    case 99407:                     // '{' Real Integer
    case 99535:                     // '{' Comment Integer
    case 103119:                    // '{' ';' Integer
    case 105295:                    // '{' 'break' Integer
    case 105679:                    // '{' 'continue' Integer
    case 115151:                    // '{' Identifier Complex
    case 115279:                    // '{' Character Complex
    case 115407:                    // '{' String Complex
    case 115535:                    // '{' Integer Complex
    case 115663:                    // '{' Complex Complex
    case 115791:                    // '{' Real Complex
    case 115919:                    // '{' Comment Complex
    case 119503:                    // '{' ';' Complex
    case 121679:                    // '{' 'break' Complex
    case 122063:                    // '{' 'continue' Complex
    case 131535:                    // '{' Identifier Real
    case 131663:                    // '{' Character Real
    case 131791:                    // '{' String Real
    case 131919:                    // '{' Integer Real
    case 132047:                    // '{' Complex Real
    case 132175:                    // '{' Real Real
    case 132303:                    // '{' Comment Real
    case 135887:                    // '{' ';' Real
    case 138063:                    // '{' 'break' Real
    case 138447:                    // '{' 'continue' Real
    case 147919:                    // '{' Identifier Comment
    case 148047:                    // '{' Character Comment
    case 148175:                    // '{' String Comment
    case 148303:                    // '{' Integer Comment
    case 148431:                    // '{' Complex Comment
    case 148559:                    // '{' Real Comment
    case 148687:                    // '{' Comment Comment
    case 152271:                    // '{' ';' Comment
    case 154447:                    // '{' 'break' Comment
    case 154831:                    // '{' 'continue' Comment
    case 197071:                    // '{' Identifier '!'
    case 197199:                    // '{' Character '!'
    case 197327:                    // '{' String '!'
    case 197455:                    // '{' Integer '!'
    case 197583:                    // '{' Complex '!'
    case 197711:                    // '{' Real '!'
    case 197839:                    // '{' Comment '!'
    case 201423:                    // '{' ';' '!'
    case 203599:                    // '{' 'break' '!'
    case 203983:                    // '{' 'continue' '!'
    case 328271:                    // '{' Character '('
    case 328399:                    // '{' String '('
    case 328527:                    // '{' Integer '('
    case 328655:                    // '{' Complex '('
    case 328783:                    // '{' Real '('
    case 328911:                    // '{' Comment '('
    case 332495:                    // '{' ';' '('
    case 334671:                    // '{' 'break' '('
    case 335055:                    // '{' 'continue' '('
    case 410831:                    // '{' Comment '+'
    case 414415:                    // '{' ';' '+'
    case 416591:                    // '{' 'break' '+'
    case 416975:                    // '{' 'continue' '+'
    case 427215:                    // '{' Comment '++'
    case 430799:                    // '{' ';' '++'
    case 432975:                    // '{' 'break' '++'
    case 433359:                    // '{' 'continue' '++'
    case 476367:                    // '{' Comment '-'
    case 479951:                    // '{' ';' '-'
    case 482127:                    // '{' 'break' '-'
    case 482511:                    // '{' 'continue' '-'
    case 492751:                    // '{' Comment '--'
    case 496335:                    // '{' ';' '--'
    case 498511:                    // '{' 'break' '--'
    case 498895:                    // '{' 'continue' '--'
    case 606671:                    // '{' Identifier ';'
    case 606799:                    // '{' Character ';'
    case 606927:                    // '{' String ';'
    case 607055:                    // '{' Integer ';'
    case 607183:                    // '{' Complex ';'
    case 607311:                    // '{' Real ';'
    case 607439:                    // '{' Comment ';'
    case 611023:                    // '{' ';' ';'
    case 613199:                    // '{' 'break' ';'
    case 613583:                    // '{' 'continue' ';'
    case 819791:                    // '{' Character '['
    case 819919:                    // '{' String '['
    case 820047:                    // '{' Integer '['
    case 820175:                    // '{' Complex '['
    case 820303:                    // '{' Real '['
    case 820431:                    // '{' Comment '['
    case 824015:                    // '{' ';' '['
    case 826191:                    // '{' 'break' '['
    case 826575:                    // '{' 'continue' '['
    case 885199:                    // '{' Identifier 'break'
    case 885327:                    // '{' Character 'break'
    case 885455:                    // '{' String 'break'
    case 885583:                    // '{' Integer 'break'
    case 885711:                    // '{' Complex 'break'
    case 885839:                    // '{' Real 'break'
    case 885967:                    // '{' Comment 'break'
    case 889551:                    // '{' ';' 'break'
    case 891727:                    // '{' 'break' 'break'
    case 892111:                    // '{' 'continue' 'break'
    case 934351:                    // '{' Identifier 'continue'
    case 934479:                    // '{' Character 'continue'
    case 934607:                    // '{' String 'continue'
    case 934735:                    // '{' Integer 'continue'
    case 934863:                    // '{' Complex 'continue'
    case 934991:                    // '{' Real 'continue'
    case 935119:                    // '{' Comment 'continue'
    case 938703:                    // '{' ';' 'continue'
    case 940879:                    // '{' 'break' 'continue'
    case 941263:                    // '{' 'continue' 'continue'
    case 967119:                    // '{' Identifier 'do'
    case 967247:                    // '{' Character 'do'
    case 967375:                    // '{' String 'do'
    case 967503:                    // '{' Integer 'do'
    case 967631:                    // '{' Complex 'do'
    case 967759:                    // '{' Real 'do'
    case 967887:                    // '{' Comment 'do'
    case 971471:                    // '{' ';' 'do'
    case 973647:                    // '{' 'break' 'do'
    case 974031:                    // '{' 'continue' 'do'
    case 999887:                    // '{' Identifier 'export'
    case 1000015:                   // '{' Character 'export'
    case 1000143:                   // '{' String 'export'
    case 1000271:                   // '{' Integer 'export'
    case 1000399:                   // '{' Complex 'export'
    case 1000527:                   // '{' Real 'export'
    case 1000655:                   // '{' Comment 'export'
    case 1004239:                   // '{' ';' 'export'
    case 1006415:                   // '{' 'break' 'export'
    case 1006799:                   // '{' 'continue' 'export'
    case 1016271:                   // '{' Identifier 'f32'
    case 1016399:                   // '{' Character 'f32'
    case 1016527:                   // '{' String 'f32'
    case 1016655:                   // '{' Integer 'f32'
    case 1016783:                   // '{' Complex 'f32'
    case 1016911:                   // '{' Real 'f32'
    case 1017039:                   // '{' Comment 'f32'
    case 1020623:                   // '{' ';' 'f32'
    case 1022799:                   // '{' 'break' 'f32'
    case 1023183:                   // '{' 'continue' 'f32'
    case 1032655:                   // '{' Identifier 'f64'
    case 1032783:                   // '{' Character 'f64'
    case 1032911:                   // '{' String 'f64'
    case 1033039:                   // '{' Integer 'f64'
    case 1033167:                   // '{' Complex 'f64'
    case 1033295:                   // '{' Real 'f64'
    case 1033423:                   // '{' Comment 'f64'
    case 1037007:                   // '{' ';' 'f64'
    case 1039183:                   // '{' 'break' 'f64'
    case 1039567:                   // '{' 'continue' 'f64'
    case 1049039:                   // '{' Identifier 'for'
    case 1049167:                   // '{' Character 'for'
    case 1049295:                   // '{' String 'for'
    case 1049423:                   // '{' Integer 'for'
    case 1049551:                   // '{' Complex 'for'
    case 1049679:                   // '{' Real 'for'
    case 1049807:                   // '{' Comment 'for'
    case 1053391:                   // '{' ';' 'for'
    case 1055567:                   // '{' 'break' 'for'
    case 1055951:                   // '{' 'continue' 'for'
    case 1065423:                   // '{' Identifier 'foreach'
    case 1065551:                   // '{' Character 'foreach'
    case 1065679:                   // '{' String 'foreach'
    case 1065807:                   // '{' Integer 'foreach'
    case 1065935:                   // '{' Complex 'foreach'
    case 1066063:                   // '{' Real 'foreach'
    case 1066191:                   // '{' Comment 'foreach'
    case 1069775:                   // '{' ';' 'foreach'
    case 1071951:                   // '{' 'break' 'foreach'
    case 1072335:                   // '{' 'continue' 'foreach'
    case 1081807:                   // '{' Identifier 'global'
    case 1081935:                   // '{' Character 'global'
    case 1082063:                   // '{' String 'global'
    case 1082191:                   // '{' Integer 'global'
    case 1082319:                   // '{' Complex 'global'
    case 1082447:                   // '{' Real 'global'
    case 1082575:                   // '{' Comment 'global'
    case 1086159:                   // '{' ';' 'global'
    case 1088335:                   // '{' 'break' 'global'
    case 1088719:                   // '{' 'continue' 'global'
    case 1098191:                   // '{' Identifier 'i32'
    case 1098319:                   // '{' Character 'i32'
    case 1098447:                   // '{' String 'i32'
    case 1098575:                   // '{' Integer 'i32'
    case 1098703:                   // '{' Complex 'i32'
    case 1098831:                   // '{' Real 'i32'
    case 1098959:                   // '{' Comment 'i32'
    case 1102543:                   // '{' ';' 'i32'
    case 1104719:                   // '{' 'break' 'i32'
    case 1105103:                   // '{' 'continue' 'i32'
    case 1114575:                   // '{' Identifier 'i64'
    case 1114703:                   // '{' Character 'i64'
    case 1114831:                   // '{' String 'i64'
    case 1114959:                   // '{' Integer 'i64'
    case 1115087:                   // '{' Complex 'i64'
    case 1115215:                   // '{' Real 'i64'
    case 1115343:                   // '{' Comment 'i64'
    case 1118927:                   // '{' ';' 'i64'
    case 1121103:                   // '{' 'break' 'i64'
    case 1121487:                   // '{' 'continue' 'i64'
    case 1130959:                   // '{' Identifier 'if'
    case 1131087:                   // '{' Character 'if'
    case 1131215:                   // '{' String 'if'
    case 1131343:                   // '{' Integer 'if'
    case 1131471:                   // '{' Complex 'if'
    case 1131599:                   // '{' Real 'if'
    case 1131727:                   // '{' Comment 'if'
    case 1135311:                   // '{' ';' 'if'
    case 1137487:                   // '{' 'break' 'if'
    case 1137871:                   // '{' 'continue' 'if'
    case 1147343:                   // '{' Identifier 'import'
    case 1147471:                   // '{' Character 'import'
    case 1147599:                   // '{' String 'import'
    case 1147727:                   // '{' Integer 'import'
    case 1147855:                   // '{' Complex 'import'
    case 1147983:                   // '{' Real 'import'
    case 1148111:                   // '{' Comment 'import'
    case 1151695:                   // '{' ';' 'import'
    case 1153871:                   // '{' 'break' 'import'
    case 1154255:                   // '{' 'continue' 'import'
    case 1163727:                   // '{' Identifier 'include'
    case 1163855:                   // '{' Character 'include'
    case 1163983:                   // '{' String 'include'
    case 1164111:                   // '{' Integer 'include'
    case 1164239:                   // '{' Complex 'include'
    case 1164367:                   // '{' Real 'include'
    case 1164495:                   // '{' Comment 'include'
    case 1168079:                   // '{' ';' 'include'
    case 1170255:                   // '{' 'break' 'include'
    case 1170639:                   // '{' 'continue' 'include'
    case 1180111:                   // '{' Identifier 'local'
    case 1180239:                   // '{' Character 'local'
    case 1180367:                   // '{' String 'local'
    case 1180495:                   // '{' Integer 'local'
    case 1180623:                   // '{' Complex 'local'
    case 1180751:                   // '{' Real 'local'
    case 1180879:                   // '{' Comment 'local'
    case 1184463:                   // '{' ';' 'local'
    case 1186639:                   // '{' 'break' 'local'
    case 1187023:                   // '{' 'continue' 'local'
    case 1196495:                   // '{' Identifier 'return'
    case 1196623:                   // '{' Character 'return'
    case 1196751:                   // '{' String 'return'
    case 1196879:                   // '{' Integer 'return'
    case 1197007:                   // '{' Complex 'return'
    case 1197135:                   // '{' Real 'return'
    case 1197263:                   // '{' Comment 'return'
    case 1200847:                   // '{' ';' 'return'
    case 1203023:                   // '{' 'break' 'return'
    case 1203407:                   // '{' 'continue' 'return'
    case 1212879:                   // '{' Identifier 'switch'
    case 1213007:                   // '{' Character 'switch'
    case 1213135:                   // '{' String 'switch'
    case 1213263:                   // '{' Integer 'switch'
    case 1213391:                   // '{' Complex 'switch'
    case 1213519:                   // '{' Real 'switch'
    case 1213647:                   // '{' Comment 'switch'
    case 1217231:                   // '{' ';' 'switch'
    case 1219407:                   // '{' 'break' 'switch'
    case 1219791:                   // '{' 'continue' 'switch'
    case 1229263:                   // '{' Identifier 'test'
    case 1229391:                   // '{' Character 'test'
    case 1229519:                   // '{' String 'test'
    case 1229647:                   // '{' Integer 'test'
    case 1229775:                   // '{' Complex 'test'
    case 1229903:                   // '{' Real 'test'
    case 1230031:                   // '{' Comment 'test'
    case 1233615:                   // '{' ';' 'test'
    case 1235791:                   // '{' 'break' 'test'
    case 1236175:                   // '{' 'continue' 'test'
    case 1245647:                   // '{' Identifier 'throw'
    case 1245775:                   // '{' Character 'throw'
    case 1245903:                   // '{' String 'throw'
    case 1246031:                   // '{' Integer 'throw'
    case 1246159:                   // '{' Complex 'throw'
    case 1246287:                   // '{' Real 'throw'
    case 1246415:                   // '{' Comment 'throw'
    case 1249999:                   // '{' ';' 'throw'
    case 1252175:                   // '{' 'break' 'throw'
    case 1252559:                   // '{' 'continue' 'throw'
    case 1262031:                   // '{' Identifier 'try'
    case 1262159:                   // '{' Character 'try'
    case 1262287:                   // '{' String 'try'
    case 1262415:                   // '{' Integer 'try'
    case 1262543:                   // '{' Complex 'try'
    case 1262671:                   // '{' Real 'try'
    case 1262799:                   // '{' Comment 'try'
    case 1266383:                   // '{' ';' 'try'
    case 1268559:                   // '{' 'break' 'try'
    case 1268943:                   // '{' 'continue' 'try'
    case 1278415:                   // '{' Identifier 'while'
    case 1278543:                   // '{' Character 'while'
    case 1278671:                   // '{' String 'while'
    case 1278799:                   // '{' Integer 'while'
    case 1278927:                   // '{' Complex 'while'
    case 1279055:                   // '{' Real 'while'
    case 1279183:                   // '{' Comment 'while'
    case 1282767:                   // '{' ';' 'while'
    case 1284943:                   // '{' 'break' 'while'
    case 1285327:                   // '{' 'continue' 'while'
    case 1294927:                   // '{' Character '{'
    case 1295055:                   // '{' String '{'
    case 1295183:                   // '{' Integer '{'
    case 1295311:                   // '{' Complex '{'
    case 1295439:                   // '{' Real '{'
    case 1295567:                   // '{' Comment '{'
    case 1299151:                   // '{' ';' '{'
    case 1301327:                   // '{' 'break' '{'
    case 1301711:                   // '{' 'continue' '{'
    case 1376719:                   // '{' Identifier '~'
    case 1376847:                   // '{' Character '~'
    case 1376975:                   // '{' String '~'
    case 1377103:                   // '{' Integer '~'
    case 1377231:                   // '{' Complex '~'
    case 1377359:                   // '{' Real '~'
    case 1377487:                   // '{' Comment '~'
    case 1381071:                   // '{' ';' '~'
    case 1383247:                   // '{' 'break' '~'
    case 1383631:                   // '{' 'continue' '~'
      try_Block();
      break;
    case -3:
    case 37:                        // ';'
    case 54:                        // 'break'
    case 57:                        // 'continue'
    case 59:                        // 'do'
    case 61:                        // 'export'
    case 64:                        // 'for'
    case 65:                        // 'foreach'
    case 66:                        // 'global'
    case 69:                        // 'if'
    case 70:                        // 'import'
    case 71:                        // 'include'
    case 72:                        // 'local'
    case 73:                        // 'return'
    case 74:                        // 'switch'
    case 75:                        // 'test'
    case 76:                        // 'throw'
    case 77:                        // 'try'
    case 78:                        // 'while'
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
    eventHandler.startNonterminal("Block", e0);
    consume(79);                    // '{'
    for (;;)
    {
      lookahead1W(32);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 83)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(83);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(79);                   // '{'
    for (;;)
    {
      lookahead1W(32);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 83)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(83);                   // '}'
  }

  function parse_Operation()
  {
    eventHandler.startNonterminal("Operation", e0);
    parse_VariableAssignment();
    eventHandler.endNonterminal("Operation", e0);
  }

  function try_Operation()
  {
    try_VariableAssignment();
  }

  function parse_VariableAssignment()
  {
    eventHandler.startNonterminal("VariableAssignment", e0);
    parse_ConditionalExpression();
    for (;;)
    {
      switch (l1)
      {
      case 16:                      // '%='
      case 19:                      // '&='
      case 24:                      // '*='
      case 27:                      // '+='
      case 31:                      // '-='
      case 34:                      // '/='
      case 36:                      // ':='
      case 40:                      // '<<='
      case 42:                      // '='
      case 47:                      // '>>='
      case 49:                      // '?='
      case 53:                      // '^='
      case 81:                      // '|='
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
        switch (lk)
        {
        case 400:                   // '%=' Identifier
        case 403:                   // '&=' Identifier
        case 408:                   // '*=' Identifier
        case 411:                   // '+=' Identifier
        case 415:                   // '-=' Identifier
        case 418:                   // '/=' Identifier
        case 420:                   // ':=' Identifier
        case 424:                   // '<<=' Identifier
        case 426:                   // '=' Identifier
        case 431:                   // '>>=' Identifier
        case 433:                   // '?=' Identifier
        case 437:                   // '^=' Identifier
        case 465:                   // '|=' Identifier
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        case 2576:                  // '%=' '('
        case 2579:                  // '&=' '('
        case 2584:                  // '*=' '('
        case 2587:                  // '+=' '('
        case 2591:                  // '-=' '('
        case 2594:                  // '/=' '('
        case 2596:                  // ':=' '('
        case 2600:                  // '<<=' '('
        case 2602:                  // '=' '('
        case 2607:                  // '>>=' '('
        case 2609:                  // '?=' '('
        case 2613:                  // '^=' '('
        case 2641:                  // '|=' '('
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 6416:                  // '%=' '['
        case 6419:                  // '&=' '['
        case 6424:                  // '*=' '['
        case 6427:                  // '+=' '['
        case 6431:                  // '-=' '['
        case 6434:                  // '/=' '['
        case 6436:                  // ':=' '['
        case 6440:                  // '<<=' '['
        case 6442:                  // '=' '['
        case 6447:                  // '>>=' '['
        case 6449:                  // '?=' '['
        case 6453:                  // '^=' '['
        case 6481:                  // '|=' '['
          lookahead3W(31);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10128:                 // '%=' '{'
        case 10131:                 // '&=' '{'
        case 10136:                 // '*=' '{'
        case 10139:                 // '+=' '{'
        case 10143:                 // '-=' '{'
        case 10146:                 // '/=' '{'
        case 10148:                 // ':=' '{'
        case 10152:                 // '<<=' '{'
        case 10154:                 // '=' '{'
        case 10159:                 // '>>=' '{'
        case 10161:                 // '?=' '{'
        case 10165:                 // '^=' '{'
        case 10193:                 // '|=' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7952:                  // '%=' 'f32'
        case 8080:                  // '%=' 'f64'
        case 8592:                  // '%=' 'i32'
        case 8720:                  // '%=' 'i64'
        case 7955:                  // '&=' 'f32'
        case 8083:                  // '&=' 'f64'
        case 8595:                  // '&=' 'i32'
        case 8723:                  // '&=' 'i64'
        case 7960:                  // '*=' 'f32'
        case 8088:                  // '*=' 'f64'
        case 8600:                  // '*=' 'i32'
        case 8728:                  // '*=' 'i64'
        case 7963:                  // '+=' 'f32'
        case 8091:                  // '+=' 'f64'
        case 8603:                  // '+=' 'i32'
        case 8731:                  // '+=' 'i64'
        case 7967:                  // '-=' 'f32'
        case 8095:                  // '-=' 'f64'
        case 8607:                  // '-=' 'i32'
        case 8735:                  // '-=' 'i64'
        case 7970:                  // '/=' 'f32'
        case 8098:                  // '/=' 'f64'
        case 8610:                  // '/=' 'i32'
        case 8738:                  // '/=' 'i64'
        case 7972:                  // ':=' 'f32'
        case 8100:                  // ':=' 'f64'
        case 8612:                  // ':=' 'i32'
        case 8740:                  // ':=' 'i64'
        case 7976:                  // '<<=' 'f32'
        case 8104:                  // '<<=' 'f64'
        case 8616:                  // '<<=' 'i32'
        case 8744:                  // '<<=' 'i64'
        case 7978:                  // '=' 'f32'
        case 8106:                  // '=' 'f64'
        case 8618:                  // '=' 'i32'
        case 8746:                  // '=' 'i64'
        case 7983:                  // '>>=' 'f32'
        case 8111:                  // '>>=' 'f64'
        case 8623:                  // '>>=' 'i32'
        case 8751:                  // '>>=' 'i64'
        case 7985:                  // '?=' 'f32'
        case 8113:                  // '?=' 'f64'
        case 8625:                  // '?=' 'i32'
        case 8753:                  // '?=' 'i64'
        case 7989:                  // '^=' 'f32'
        case 8117:                  // '^=' 'f64'
        case 8629:                  // '^=' 'i32'
        case 8757:                  // '^=' 'i64'
        case 8017:                  // '|=' 'f32'
        case 8145:                  // '|=' 'f64'
        case 8657:                  // '|=' 'i32'
        case 8785:                  // '|=' 'i64'
          lookahead3W(0);           // Identifier | WhiteSpace^token
          break;
        case 528:                   // '%=' Character
        case 656:                   // '%=' String
        case 784:                   // '%=' Integer
        case 912:                   // '%=' Complex
        case 1040:                  // '%=' Real
        case 531:                   // '&=' Character
        case 659:                   // '&=' String
        case 787:                   // '&=' Integer
        case 915:                   // '&=' Complex
        case 1043:                  // '&=' Real
        case 536:                   // '*=' Character
        case 664:                   // '*=' String
        case 792:                   // '*=' Integer
        case 920:                   // '*=' Complex
        case 1048:                  // '*=' Real
        case 539:                   // '+=' Character
        case 667:                   // '+=' String
        case 795:                   // '+=' Integer
        case 923:                   // '+=' Complex
        case 1051:                  // '+=' Real
        case 543:                   // '-=' Character
        case 671:                   // '-=' String
        case 799:                   // '-=' Integer
        case 927:                   // '-=' Complex
        case 1055:                  // '-=' Real
        case 546:                   // '/=' Character
        case 674:                   // '/=' String
        case 802:                   // '/=' Integer
        case 930:                   // '/=' Complex
        case 1058:                  // '/=' Real
        case 548:                   // ':=' Character
        case 676:                   // ':=' String
        case 804:                   // ':=' Integer
        case 932:                   // ':=' Complex
        case 1060:                  // ':=' Real
        case 552:                   // '<<=' Character
        case 680:                   // '<<=' String
        case 808:                   // '<<=' Integer
        case 936:                   // '<<=' Complex
        case 1064:                  // '<<=' Real
        case 554:                   // '=' Character
        case 682:                   // '=' String
        case 810:                   // '=' Integer
        case 938:                   // '=' Complex
        case 1066:                  // '=' Real
        case 559:                   // '>>=' Character
        case 687:                   // '>>=' String
        case 815:                   // '>>=' Integer
        case 943:                   // '>>=' Complex
        case 1071:                  // '>>=' Real
        case 561:                   // '?=' Character
        case 689:                   // '?=' String
        case 817:                   // '?=' Integer
        case 945:                   // '?=' Complex
        case 1073:                  // '?=' Real
        case 565:                   // '^=' Character
        case 693:                   // '^=' String
        case 821:                   // '^=' Integer
        case 949:                   // '^=' Complex
        case 1077:                  // '^=' Real
        case 593:                   // '|=' Character
        case 721:                   // '|=' String
        case 849:                   // '|=' Integer
        case 977:                   // '|=' Complex
        case 1105:                  // '|=' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10768:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10771:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10776:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10779:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10783:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10786:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10788:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10792:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10794:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10799:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10801:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10805:                 // '^=' '~'
        case 1617:                  // '|=' '!'
        case 3281:                  // '|=' '+'
        case 3409:                  // '|=' '++'
        case 3793:                  // '|=' '-'
        case 3921:                  // '|=' '--'
        case 10833:                 // '|=' '~'
          lookahead3W(22);          // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Complex
       && lk != 8                   // Real
       && lk != 9                   // Comment
       && lk != 12                  // '!'
       && lk != 20                  // '('
       && lk != 21                  // ')'
       && lk != 25                  // '+'
       && lk != 26                  // '++'
       && lk != 28                  // ','
       && lk != 29                  // '-'
       && lk != 30                  // '--'
       && lk != 35                  // ':'
       && lk != 37                  // ';'
       && lk != 50                  // '['
       && lk != 51                  // ']'
       && lk != 54                  // 'break'
       && lk != 55                  // 'case'
       && lk != 56                  // 'catch'
       && lk != 57                  // 'continue'
       && lk != 58                  // 'default'
       && lk != 59                  // 'do'
       && lk != 60                  // 'else'
       && lk != 61                  // 'export'
       && lk != 62                  // 'f32'
       && lk != 63                  // 'f64'
       && lk != 64                  // 'for'
       && lk != 65                  // 'foreach'
       && lk != 66                  // 'global'
       && lk != 67                  // 'i32'
       && lk != 68                  // 'i64'
       && lk != 69                  // 'if'
       && lk != 70                  // 'import'
       && lk != 71                  // 'include'
       && lk != 72                  // 'local'
       && lk != 73                  // 'return'
       && lk != 74                  // 'switch'
       && lk != 75                  // 'test'
       && lk != 76                  // 'throw'
       && lk != 77                  // 'try'
       && lk != 78                  // 'while'
       && lk != 79                  // '{'
       && lk != 83                  // '}'
       && lk != 84)                 // '~'
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
            switch (l1)
            {
            case 42:                // '='
              consumeT(42);         // '='
              break;
            case 24:                // '*='
              consumeT(24);         // '*='
              break;
            case 34:                // '/='
              consumeT(34);         // '/='
              break;
            case 16:                // '%='
              consumeT(16);         // '%='
              break;
            case 27:                // '+='
              consumeT(27);         // '+='
              break;
            case 31:                // '-='
              consumeT(31);         // '-='
              break;
            case 40:                // '<<='
              consumeT(40);         // '<<='
              break;
            case 47:                // '>>='
              consumeT(47);         // '>>='
              break;
            case 19:                // '&='
              consumeT(19);         // '&='
              break;
            case 53:                // '^='
              consumeT(53);         // '^='
              break;
            case 81:                // '|='
              consumeT(81);         // '|='
              break;
            case 49:                // '?='
              consumeT(49);         // '?='
              break;
            default:
              consumeT(36);         // ':='
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
            try_ConditionalExpression();
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
      if (lk != -1)
      {
        break;
      }
      switch (l1)
      {
      case 42:                      // '='
        consume(42);                // '='
        break;
      case 24:                      // '*='
        consume(24);                // '*='
        break;
      case 34:                      // '/='
        consume(34);                // '/='
        break;
      case 16:                      // '%='
        consume(16);                // '%='
        break;
      case 27:                      // '+='
        consume(27);                // '+='
        break;
      case 31:                      // '-='
        consume(31);                // '-='
        break;
      case 40:                      // '<<='
        consume(40);                // '<<='
        break;
      case 47:                      // '>>='
        consume(47);                // '>>='
        break;
      case 19:                      // '&='
        consume(19);                // '&='
        break;
      case 53:                      // '^='
        consume(53);                // '^='
        break;
      case 81:                      // '|='
        consume(81);                // '|='
        break;
      case 49:                      // '?='
        consume(49);                // '?='
        break;
      default:
        consume(36);                // ':='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_ConditionalExpression();
    }
    eventHandler.endNonterminal("VariableAssignment", e0);
  }

  function try_VariableAssignment()
  {
    try_ConditionalExpression();
    for (;;)
    {
      switch (l1)
      {
      case 16:                      // '%='
      case 19:                      // '&='
      case 24:                      // '*='
      case 27:                      // '+='
      case 31:                      // '-='
      case 34:                      // '/='
      case 36:                      // ':='
      case 40:                      // '<<='
      case 42:                      // '='
      case 47:                      // '>>='
      case 49:                      // '?='
      case 53:                      // '^='
      case 81:                      // '|='
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
        switch (lk)
        {
        case 400:                   // '%=' Identifier
        case 403:                   // '&=' Identifier
        case 408:                   // '*=' Identifier
        case 411:                   // '+=' Identifier
        case 415:                   // '-=' Identifier
        case 418:                   // '/=' Identifier
        case 420:                   // ':=' Identifier
        case 424:                   // '<<=' Identifier
        case 426:                   // '=' Identifier
        case 431:                   // '>>=' Identifier
        case 433:                   // '?=' Identifier
        case 437:                   // '^=' Identifier
        case 465:                   // '|=' Identifier
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        case 2576:                  // '%=' '('
        case 2579:                  // '&=' '('
        case 2584:                  // '*=' '('
        case 2587:                  // '+=' '('
        case 2591:                  // '-=' '('
        case 2594:                  // '/=' '('
        case 2596:                  // ':=' '('
        case 2600:                  // '<<=' '('
        case 2602:                  // '=' '('
        case 2607:                  // '>>=' '('
        case 2609:                  // '?=' '('
        case 2613:                  // '^=' '('
        case 2641:                  // '|=' '('
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 6416:                  // '%=' '['
        case 6419:                  // '&=' '['
        case 6424:                  // '*=' '['
        case 6427:                  // '+=' '['
        case 6431:                  // '-=' '['
        case 6434:                  // '/=' '['
        case 6436:                  // ':=' '['
        case 6440:                  // '<<=' '['
        case 6442:                  // '=' '['
        case 6447:                  // '>>=' '['
        case 6449:                  // '?=' '['
        case 6453:                  // '^=' '['
        case 6481:                  // '|=' '['
          lookahead3W(31);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10128:                 // '%=' '{'
        case 10131:                 // '&=' '{'
        case 10136:                 // '*=' '{'
        case 10139:                 // '+=' '{'
        case 10143:                 // '-=' '{'
        case 10146:                 // '/=' '{'
        case 10148:                 // ':=' '{'
        case 10152:                 // '<<=' '{'
        case 10154:                 // '=' '{'
        case 10159:                 // '>>=' '{'
        case 10161:                 // '?=' '{'
        case 10165:                 // '^=' '{'
        case 10193:                 // '|=' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7952:                  // '%=' 'f32'
        case 8080:                  // '%=' 'f64'
        case 8592:                  // '%=' 'i32'
        case 8720:                  // '%=' 'i64'
        case 7955:                  // '&=' 'f32'
        case 8083:                  // '&=' 'f64'
        case 8595:                  // '&=' 'i32'
        case 8723:                  // '&=' 'i64'
        case 7960:                  // '*=' 'f32'
        case 8088:                  // '*=' 'f64'
        case 8600:                  // '*=' 'i32'
        case 8728:                  // '*=' 'i64'
        case 7963:                  // '+=' 'f32'
        case 8091:                  // '+=' 'f64'
        case 8603:                  // '+=' 'i32'
        case 8731:                  // '+=' 'i64'
        case 7967:                  // '-=' 'f32'
        case 8095:                  // '-=' 'f64'
        case 8607:                  // '-=' 'i32'
        case 8735:                  // '-=' 'i64'
        case 7970:                  // '/=' 'f32'
        case 8098:                  // '/=' 'f64'
        case 8610:                  // '/=' 'i32'
        case 8738:                  // '/=' 'i64'
        case 7972:                  // ':=' 'f32'
        case 8100:                  // ':=' 'f64'
        case 8612:                  // ':=' 'i32'
        case 8740:                  // ':=' 'i64'
        case 7976:                  // '<<=' 'f32'
        case 8104:                  // '<<=' 'f64'
        case 8616:                  // '<<=' 'i32'
        case 8744:                  // '<<=' 'i64'
        case 7978:                  // '=' 'f32'
        case 8106:                  // '=' 'f64'
        case 8618:                  // '=' 'i32'
        case 8746:                  // '=' 'i64'
        case 7983:                  // '>>=' 'f32'
        case 8111:                  // '>>=' 'f64'
        case 8623:                  // '>>=' 'i32'
        case 8751:                  // '>>=' 'i64'
        case 7985:                  // '?=' 'f32'
        case 8113:                  // '?=' 'f64'
        case 8625:                  // '?=' 'i32'
        case 8753:                  // '?=' 'i64'
        case 7989:                  // '^=' 'f32'
        case 8117:                  // '^=' 'f64'
        case 8629:                  // '^=' 'i32'
        case 8757:                  // '^=' 'i64'
        case 8017:                  // '|=' 'f32'
        case 8145:                  // '|=' 'f64'
        case 8657:                  // '|=' 'i32'
        case 8785:                  // '|=' 'i64'
          lookahead3W(0);           // Identifier | WhiteSpace^token
          break;
        case 528:                   // '%=' Character
        case 656:                   // '%=' String
        case 784:                   // '%=' Integer
        case 912:                   // '%=' Complex
        case 1040:                  // '%=' Real
        case 531:                   // '&=' Character
        case 659:                   // '&=' String
        case 787:                   // '&=' Integer
        case 915:                   // '&=' Complex
        case 1043:                  // '&=' Real
        case 536:                   // '*=' Character
        case 664:                   // '*=' String
        case 792:                   // '*=' Integer
        case 920:                   // '*=' Complex
        case 1048:                  // '*=' Real
        case 539:                   // '+=' Character
        case 667:                   // '+=' String
        case 795:                   // '+=' Integer
        case 923:                   // '+=' Complex
        case 1051:                  // '+=' Real
        case 543:                   // '-=' Character
        case 671:                   // '-=' String
        case 799:                   // '-=' Integer
        case 927:                   // '-=' Complex
        case 1055:                  // '-=' Real
        case 546:                   // '/=' Character
        case 674:                   // '/=' String
        case 802:                   // '/=' Integer
        case 930:                   // '/=' Complex
        case 1058:                  // '/=' Real
        case 548:                   // ':=' Character
        case 676:                   // ':=' String
        case 804:                   // ':=' Integer
        case 932:                   // ':=' Complex
        case 1060:                  // ':=' Real
        case 552:                   // '<<=' Character
        case 680:                   // '<<=' String
        case 808:                   // '<<=' Integer
        case 936:                   // '<<=' Complex
        case 1064:                  // '<<=' Real
        case 554:                   // '=' Character
        case 682:                   // '=' String
        case 810:                   // '=' Integer
        case 938:                   // '=' Complex
        case 1066:                  // '=' Real
        case 559:                   // '>>=' Character
        case 687:                   // '>>=' String
        case 815:                   // '>>=' Integer
        case 943:                   // '>>=' Complex
        case 1071:                  // '>>=' Real
        case 561:                   // '?=' Character
        case 689:                   // '?=' String
        case 817:                   // '?=' Integer
        case 945:                   // '?=' Complex
        case 1073:                  // '?=' Real
        case 565:                   // '^=' Character
        case 693:                   // '^=' String
        case 821:                   // '^=' Integer
        case 949:                   // '^=' Complex
        case 1077:                  // '^=' Real
        case 593:                   // '|=' Character
        case 721:                   // '|=' String
        case 849:                   // '|=' Integer
        case 977:                   // '|=' Complex
        case 1105:                  // '|=' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10768:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10771:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10776:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10779:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10783:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10786:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10788:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10792:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10794:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10799:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10801:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10805:                 // '^=' '~'
        case 1617:                  // '|=' '!'
        case 3281:                  // '|=' '+'
        case 3409:                  // '|=' '++'
        case 3793:                  // '|=' '-'
        case 3921:                  // '|=' '--'
        case 10833:                 // '|=' '~'
          lookahead3W(22);          // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Complex
       && lk != 8                   // Real
       && lk != 9                   // Comment
       && lk != 12                  // '!'
       && lk != 20                  // '('
       && lk != 21                  // ')'
       && lk != 25                  // '+'
       && lk != 26                  // '++'
       && lk != 28                  // ','
       && lk != 29                  // '-'
       && lk != 30                  // '--'
       && lk != 35                  // ':'
       && lk != 37                  // ';'
       && lk != 50                  // '['
       && lk != 51                  // ']'
       && lk != 54                  // 'break'
       && lk != 55                  // 'case'
       && lk != 56                  // 'catch'
       && lk != 57                  // 'continue'
       && lk != 58                  // 'default'
       && lk != 59                  // 'do'
       && lk != 60                  // 'else'
       && lk != 61                  // 'export'
       && lk != 62                  // 'f32'
       && lk != 63                  // 'f64'
       && lk != 64                  // 'for'
       && lk != 65                  // 'foreach'
       && lk != 66                  // 'global'
       && lk != 67                  // 'i32'
       && lk != 68                  // 'i64'
       && lk != 69                  // 'if'
       && lk != 70                  // 'import'
       && lk != 71                  // 'include'
       && lk != 72                  // 'local'
       && lk != 73                  // 'return'
       && lk != 74                  // 'switch'
       && lk != 75                  // 'test'
       && lk != 76                  // 'throw'
       && lk != 77                  // 'try'
       && lk != 78                  // 'while'
       && lk != 79                  // '{'
       && lk != 83                  // '}'
       && lk != 84)                 // '~'
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
            switch (l1)
            {
            case 42:                // '='
              consumeT(42);         // '='
              break;
            case 24:                // '*='
              consumeT(24);         // '*='
              break;
            case 34:                // '/='
              consumeT(34);         // '/='
              break;
            case 16:                // '%='
              consumeT(16);         // '%='
              break;
            case 27:                // '+='
              consumeT(27);         // '+='
              break;
            case 31:                // '-='
              consumeT(31);         // '-='
              break;
            case 40:                // '<<='
              consumeT(40);         // '<<='
              break;
            case 47:                // '>>='
              consumeT(47);         // '>>='
              break;
            case 19:                // '&='
              consumeT(19);         // '&='
              break;
            case 53:                // '^='
              consumeT(53);         // '^='
              break;
            case 81:                // '|='
              consumeT(81);         // '|='
              break;
            case 49:                // '?='
              consumeT(49);         // '?='
              break;
            default:
              consumeT(36);         // ':='
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
            try_ConditionalExpression();
            memoize(1, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
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
      case 42:                      // '='
        consumeT(42);               // '='
        break;
      case 24:                      // '*='
        consumeT(24);               // '*='
        break;
      case 34:                      // '/='
        consumeT(34);               // '/='
        break;
      case 16:                      // '%='
        consumeT(16);               // '%='
        break;
      case 27:                      // '+='
        consumeT(27);               // '+='
        break;
      case 31:                      // '-='
        consumeT(31);               // '-='
        break;
      case 40:                      // '<<='
        consumeT(40);               // '<<='
        break;
      case 47:                      // '>>='
        consumeT(47);               // '>>='
        break;
      case 19:                      // '&='
        consumeT(19);               // '&='
        break;
      case 53:                      // '^='
        consumeT(53);               // '^='
        break;
      case 81:                      // '|='
        consumeT(81);               // '|='
        break;
      case 49:                      // '?='
        consumeT(49);               // '?='
        break;
      default:
        consumeT(36);               // ':='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_ConditionalExpression();
    }
  }

  function parse_ConditionalExpression()
  {
    eventHandler.startNonterminal("ConditionalExpression", e0);
    parse_LogicalORExpression();
    if (l1 == 48)                   // '?'
    {
      consume(48);                  // '?'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_VariableAssignment();
      consume(35);                  // ':'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_VariableAssignment();
    }
    eventHandler.endNonterminal("ConditionalExpression", e0);
  }

  function try_ConditionalExpression()
  {
    try_LogicalORExpression();
    if (l1 == 48)                   // '?'
    {
      consumeT(48);                 // '?'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_VariableAssignment();
      consumeT(35);                 // ':'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_VariableAssignment();
    }
  }

  function parse_LogicalORExpression()
  {
    eventHandler.startNonterminal("LogicalORExpression", e0);
    parse_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 82)                 // '||'
      {
        break;
      }
      consume(82);                  // '||'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_LogicalANDExpression();
    }
    eventHandler.endNonterminal("LogicalORExpression", e0);
  }

  function try_LogicalORExpression()
  {
    try_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 82)                 // '||'
      {
        break;
      }
      consumeT(82);                 // '||'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_LogicalANDExpression();
    }
  }

  function parse_LogicalANDExpression()
  {
    eventHandler.startNonterminal("LogicalANDExpression", e0);
    parse_BitwiseORExpression();
    for (;;)
    {
      if (l1 != 18)                 // '&&'
      {
        break;
      }
      consume(18);                  // '&&'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_BitwiseORExpression();
    }
    eventHandler.endNonterminal("LogicalANDExpression", e0);
  }

  function try_LogicalANDExpression()
  {
    try_BitwiseORExpression();
    for (;;)
    {
      if (l1 != 18)                 // '&&'
      {
        break;
      }
      consumeT(18);                 // '&&'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_BitwiseORExpression();
    }
  }

  function parse_BitwiseORExpression()
  {
    eventHandler.startNonterminal("BitwiseORExpression", e0);
    parse_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 80)                 // '|'
      {
        break;
      }
      consume(80);                  // '|'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_BitwiseXORExpression();
    }
    eventHandler.endNonterminal("BitwiseORExpression", e0);
  }

  function try_BitwiseORExpression()
  {
    try_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 80)                 // '|'
      {
        break;
      }
      consumeT(80);                 // '|'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_BitwiseXORExpression();
    }
  }

  function parse_BitwiseXORExpression()
  {
    eventHandler.startNonterminal("BitwiseXORExpression", e0);
    parse_BitwiseANDExpression();
    for (;;)
    {
      if (l1 != 52)                 // '^'
      {
        break;
      }
      consume(52);                  // '^'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_BitwiseANDExpression();
    }
    eventHandler.endNonterminal("BitwiseXORExpression", e0);
  }

  function try_BitwiseXORExpression()
  {
    try_BitwiseANDExpression();
    for (;;)
    {
      if (l1 != 52)                 // '^'
      {
        break;
      }
      consumeT(52);                 // '^'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_BitwiseANDExpression();
    }
  }

  function parse_BitwiseANDExpression()
  {
    eventHandler.startNonterminal("BitwiseANDExpression", e0);
    parse_EqualityExpression();
    for (;;)
    {
      if (l1 != 17)                 // '&'
      {
        break;
      }
      consume(17);                  // '&'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_EqualityExpression();
    }
    eventHandler.endNonterminal("BitwiseANDExpression", e0);
  }

  function try_BitwiseANDExpression()
  {
    try_EqualityExpression();
    for (;;)
    {
      if (l1 != 17)                 // '&'
      {
        break;
      }
      consumeT(17);                 // '&'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_EqualityExpression();
    }
  }

  function parse_EqualityExpression()
  {
    eventHandler.startNonterminal("EqualityExpression", e0);
    parse_RelationalExpression();
    for (;;)
    {
      if (l1 != 13                  // '!='
       && l1 != 43)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 43:                      // '=='
        consume(43);                // '=='
        break;
      default:
        consume(13);                // '!='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_RelationalExpression();
    }
    eventHandler.endNonterminal("EqualityExpression", e0);
  }

  function try_EqualityExpression()
  {
    try_RelationalExpression();
    for (;;)
    {
      if (l1 != 13                  // '!='
       && l1 != 43)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 43:                      // '=='
        consumeT(43);               // '=='
        break;
      default:
        consumeT(13);               // '!='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_RelationalExpression();
    }
  }

  function parse_RelationalExpression()
  {
    eventHandler.startNonterminal("RelationalExpression", e0);
    parse_ShiftExpression();
    for (;;)
    {
      if (l1 != 38                  // '<'
       && l1 != 41                  // '<='
       && l1 != 44                  // '>'
       && l1 != 45)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 38:                      // '<'
        consume(38);                // '<'
        break;
      case 44:                      // '>'
        consume(44);                // '>'
        break;
      case 41:                      // '<='
        consume(41);                // '<='
        break;
      default:
        consume(45);                // '>='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_ShiftExpression();
    }
    eventHandler.endNonterminal("RelationalExpression", e0);
  }

  function try_RelationalExpression()
  {
    try_ShiftExpression();
    for (;;)
    {
      if (l1 != 38                  // '<'
       && l1 != 41                  // '<='
       && l1 != 44                  // '>'
       && l1 != 45)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 38:                      // '<'
        consumeT(38);               // '<'
        break;
      case 44:                      // '>'
        consumeT(44);               // '>'
        break;
      case 41:                      // '<='
        consumeT(41);               // '<='
        break;
      default:
        consumeT(45);               // '>='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_ShiftExpression();
    }
  }

  function parse_ShiftExpression()
  {
    eventHandler.startNonterminal("ShiftExpression", e0);
    parse_AdditiveExpression();
    for (;;)
    {
      if (l1 != 39                  // '<<'
       && l1 != 46)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 39:                      // '<<'
        consume(39);                // '<<'
        break;
      default:
        consume(46);                // '>>'
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_AdditiveExpression();
    }
    eventHandler.endNonterminal("ShiftExpression", e0);
  }

  function try_ShiftExpression()
  {
    try_AdditiveExpression();
    for (;;)
    {
      if (l1 != 39                  // '<<'
       && l1 != 46)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 39:                      // '<<'
        consumeT(39);               // '<<'
        break;
      default:
        consumeT(46);               // '>>'
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_AdditiveExpression();
    }
  }

  function parse_AdditiveExpression()
  {
    eventHandler.startNonterminal("AdditiveExpression", e0);
    parse_PowerExpression();
    for (;;)
    {
      switch (l1)
      {
      case 25:                      // '+'
      case 29:                      // '-'
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
        switch (lk)
        {
        case 409:                   // '+' Identifier
        case 413:                   // '-' Identifier
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        case 2585:                  // '+' '('
        case 2589:                  // '-' '('
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(31);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10137:                 // '+' '{'
        case 10141:                 // '-' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7961:                  // '+' 'f32'
        case 8089:                  // '+' 'f64'
        case 8601:                  // '+' 'i32'
        case 8729:                  // '+' 'i64'
        case 7965:                  // '-' 'f32'
        case 8093:                  // '-' 'f64'
        case 8605:                  // '-' 'i32'
        case 8733:                  // '-' 'i64'
          lookahead3W(0);           // Identifier | WhiteSpace^token
          break;
        case 537:                   // '+' Character
        case 665:                   // '+' String
        case 793:                   // '+' Integer
        case 921:                   // '+' Complex
        case 1049:                  // '+' Real
        case 541:                   // '-' Character
        case 669:                   // '-' String
        case 797:                   // '-' Integer
        case 925:                   // '-' Complex
        case 1053:                  // '-' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Complex
       && lk != 8                   // Real
       && lk != 9                   // Comment
       && lk != 12                  // '!'
       && lk != 13                  // '!='
       && lk != 16                  // '%='
       && lk != 17                  // '&'
       && lk != 18                  // '&&'
       && lk != 19                  // '&='
       && lk != 20                  // '('
       && lk != 21                  // ')'
       && lk != 24                  // '*='
       && lk != 26                  // '++'
       && lk != 27                  // '+='
       && lk != 28                  // ','
       && lk != 30                  // '--'
       && lk != 31                  // '-='
       && lk != 34                  // '/='
       && lk != 35                  // ':'
       && lk != 36                  // ':='
       && lk != 37                  // ';'
       && lk != 38                  // '<'
       && lk != 39                  // '<<'
       && lk != 40                  // '<<='
       && lk != 41                  // '<='
       && lk != 42                  // '='
       && lk != 43                  // '=='
       && lk != 44                  // '>'
       && lk != 45                  // '>='
       && lk != 46                  // '>>'
       && lk != 47                  // '>>='
       && lk != 48                  // '?'
       && lk != 49                  // '?='
       && lk != 50                  // '['
       && lk != 51                  // ']'
       && lk != 52                  // '^'
       && lk != 53                  // '^='
       && lk != 54                  // 'break'
       && lk != 55                  // 'case'
       && lk != 56                  // 'catch'
       && lk != 57                  // 'continue'
       && lk != 58                  // 'default'
       && lk != 59                  // 'do'
       && lk != 60                  // 'else'
       && lk != 61                  // 'export'
       && lk != 62                  // 'f32'
       && lk != 63                  // 'f64'
       && lk != 64                  // 'for'
       && lk != 65                  // 'foreach'
       && lk != 66                  // 'global'
       && lk != 67                  // 'i32'
       && lk != 68                  // 'i64'
       && lk != 69                  // 'if'
       && lk != 70                  // 'import'
       && lk != 71                  // 'include'
       && lk != 72                  // 'local'
       && lk != 73                  // 'return'
       && lk != 74                  // 'switch'
       && lk != 75                  // 'test'
       && lk != 76                  // 'throw'
       && lk != 77                  // 'try'
       && lk != 78                  // 'while'
       && lk != 79                  // '{'
       && lk != 80                  // '|'
       && lk != 81                  // '|='
       && lk != 82                  // '||'
       && lk != 83                  // '}'
       && lk != 84                  // '~'
       && lk != 1561                // '+' '!'
       && lk != 1565                // '-' '!'
       && lk != 3225                // '+' '+'
       && lk != 3229                // '-' '+'
       && lk != 3353                // '+' '++'
       && lk != 3357                // '-' '++'
       && lk != 3737                // '+' '-'
       && lk != 3741                // '-' '-'
       && lk != 3865                // '+' '--'
       && lk != 3869                // '-' '--'
       && lk != 10777               // '+' '~'
       && lk != 10781               // '-' '~'
       && lk != 344473              // '+' Identifier ')'
       && lk != 344477              // '-' Identifier ')'
       && lk != 344601              // '+' Character ')'
       && lk != 344605              // '-' Character ')'
       && lk != 344729              // '+' String ')'
       && lk != 344733              // '-' String ')'
       && lk != 344857              // '+' Integer ')'
       && lk != 344861              // '-' Integer ')'
       && lk != 344985              // '+' Complex ')'
       && lk != 344989              // '-' Complex ')'
       && lk != 345113              // '+' Real ')'
       && lk != 345117              // '-' Real ')'
       && lk != 459161              // '+' Identifier ','
       && lk != 459165              // '-' Identifier ','
       && lk != 459289              // '+' Character ','
       && lk != 459293              // '-' Character ','
       && lk != 459417              // '+' String ','
       && lk != 459421              // '-' String ','
       && lk != 459545              // '+' Integer ','
       && lk != 459549              // '-' Integer ','
       && lk != 459673              // '+' Complex ','
       && lk != 459677              // '-' Complex ','
       && lk != 459801              // '+' Real ','
       && lk != 459805              // '-' Real ','
       && lk != 573849              // '+' Identifier ':'
       && lk != 573853              // '-' Identifier ':'
       && lk != 573977              // '+' Character ':'
       && lk != 573981              // '-' Character ':'
       && lk != 574105              // '+' String ':'
       && lk != 574109              // '-' String ':'
       && lk != 574233              // '+' Integer ':'
       && lk != 574237              // '-' Integer ':'
       && lk != 574361              // '+' Complex ':'
       && lk != 574365              // '-' Complex ':'
       && lk != 574489              // '+' Real ':'
       && lk != 574493              // '-' Real ':'
       && lk != 835993              // '+' Identifier ']'
       && lk != 835997              // '-' Identifier ']'
       && lk != 836121              // '+' Character ']'
       && lk != 836125              // '-' Character ']'
       && lk != 836249              // '+' String ']'
       && lk != 836253              // '-' String ']'
       && lk != 836377              // '+' Integer ']'
       && lk != 836381              // '-' Integer ']'
       && lk != 836505              // '+' Complex ']'
       && lk != 836509              // '-' Complex ']'
       && lk != 836633              // '+' Real ']'
       && lk != 836637              // '-' Real ']'
       && lk != 917913              // '+' Identifier 'catch'
       && lk != 917917              // '-' Identifier 'catch'
       && lk != 918041              // '+' Character 'catch'
       && lk != 918045              // '-' Character 'catch'
       && lk != 918169              // '+' String 'catch'
       && lk != 918173              // '-' String 'catch'
       && lk != 918297              // '+' Integer 'catch'
       && lk != 918301              // '-' Integer 'catch'
       && lk != 918425              // '+' Complex 'catch'
       && lk != 918429              // '-' Complex 'catch'
       && lk != 918553              // '+' Real 'catch'
       && lk != 918557              // '-' Real 'catch'
       && lk != 983449              // '+' Identifier 'else'
       && lk != 983453              // '-' Identifier 'else'
       && lk != 983577              // '+' Character 'else'
       && lk != 983581              // '-' Character 'else'
       && lk != 983705              // '+' String 'else'
       && lk != 983709              // '-' String 'else'
       && lk != 983833              // '+' Integer 'else'
       && lk != 983837              // '-' Integer 'else'
       && lk != 983961              // '+' Complex 'else'
       && lk != 983965              // '-' Complex 'else'
       && lk != 984089              // '+' Real 'else'
       && lk != 984093)             // '-' Real 'else'
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
            switch (l1)
            {
            case 25:                // '+'
              consumeT(25);         // '+'
              break;
            default:
              consumeT(29);         // '-'
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
            try_PowerExpression();
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
          memoize(2, e0, lk);
        }
      }
      if (lk == -2
       || lk == 1                   // END
       || lk == 3                   // Identifier
       || lk == 4                   // Character
       || lk == 5                   // String
       || lk == 6                   // Integer
       || lk == 7                   // Complex
       || lk == 8                   // Real
       || lk == 9                   // Comment
       || lk == 12                  // '!'
       || lk == 13                  // '!='
       || lk == 16                  // '%='
       || lk == 17                  // '&'
       || lk == 18                  // '&&'
       || lk == 19                  // '&='
       || lk == 20                  // '('
       || lk == 21                  // ')'
       || lk == 24                  // '*='
       || lk == 26                  // '++'
       || lk == 27                  // '+='
       || lk == 28                  // ','
       || lk == 30                  // '--'
       || lk == 31                  // '-='
       || lk == 34                  // '/='
       || lk == 35                  // ':'
       || lk == 36                  // ':='
       || lk == 37                  // ';'
       || lk == 38                  // '<'
       || lk == 39                  // '<<'
       || lk == 40                  // '<<='
       || lk == 41                  // '<='
       || lk == 42                  // '='
       || lk == 43                  // '=='
       || lk == 44                  // '>'
       || lk == 45                  // '>='
       || lk == 46                  // '>>'
       || lk == 47                  // '>>='
       || lk == 48                  // '?'
       || lk == 49                  // '?='
       || lk == 50                  // '['
       || lk == 51                  // ']'
       || lk == 52                  // '^'
       || lk == 53                  // '^='
       || lk == 54                  // 'break'
       || lk == 55                  // 'case'
       || lk == 56                  // 'catch'
       || lk == 57                  // 'continue'
       || lk == 58                  // 'default'
       || lk == 59                  // 'do'
       || lk == 60                  // 'else'
       || lk == 61                  // 'export'
       || lk == 62                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 64                  // 'for'
       || lk == 65                  // 'foreach'
       || lk == 66                  // 'global'
       || lk == 67                  // 'i32'
       || lk == 68                  // 'i64'
       || lk == 69                  // 'if'
       || lk == 70                  // 'import'
       || lk == 71                  // 'include'
       || lk == 72                  // 'local'
       || lk == 73                  // 'return'
       || lk == 74                  // 'switch'
       || lk == 75                  // 'test'
       || lk == 76                  // 'throw'
       || lk == 77                  // 'try'
       || lk == 78                  // 'while'
       || lk == 79                  // '{'
       || lk == 80                  // '|'
       || lk == 81                  // '|='
       || lk == 82                  // '||'
       || lk == 83                  // '}'
       || lk == 84)                 // '~'
      {
        break;
      }
      switch (l1)
      {
      case 25:                      // '+'
        consume(25);                // '+'
        break;
      default:
        consume(29);                // '-'
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_PowerExpression();
    }
    eventHandler.endNonterminal("AdditiveExpression", e0);
  }

  function try_AdditiveExpression()
  {
    try_PowerExpression();
    for (;;)
    {
      switch (l1)
      {
      case 25:                      // '+'
      case 29:                      // '-'
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
        switch (lk)
        {
        case 409:                   // '+' Identifier
        case 413:                   // '-' Identifier
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        case 2585:                  // '+' '('
        case 2589:                  // '-' '('
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(31);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10137:                 // '+' '{'
        case 10141:                 // '-' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7961:                  // '+' 'f32'
        case 8089:                  // '+' 'f64'
        case 8601:                  // '+' 'i32'
        case 8729:                  // '+' 'i64'
        case 7965:                  // '-' 'f32'
        case 8093:                  // '-' 'f64'
        case 8605:                  // '-' 'i32'
        case 8733:                  // '-' 'i64'
          lookahead3W(0);           // Identifier | WhiteSpace^token
          break;
        case 537:                   // '+' Character
        case 665:                   // '+' String
        case 793:                   // '+' Integer
        case 921:                   // '+' Complex
        case 1049:                  // '+' Real
        case 541:                   // '-' Character
        case 669:                   // '-' String
        case 797:                   // '-' Integer
        case 925:                   // '-' Complex
        case 1053:                  // '-' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Complex
       && lk != 8                   // Real
       && lk != 9                   // Comment
       && lk != 12                  // '!'
       && lk != 13                  // '!='
       && lk != 16                  // '%='
       && lk != 17                  // '&'
       && lk != 18                  // '&&'
       && lk != 19                  // '&='
       && lk != 20                  // '('
       && lk != 21                  // ')'
       && lk != 24                  // '*='
       && lk != 26                  // '++'
       && lk != 27                  // '+='
       && lk != 28                  // ','
       && lk != 30                  // '--'
       && lk != 31                  // '-='
       && lk != 34                  // '/='
       && lk != 35                  // ':'
       && lk != 36                  // ':='
       && lk != 37                  // ';'
       && lk != 38                  // '<'
       && lk != 39                  // '<<'
       && lk != 40                  // '<<='
       && lk != 41                  // '<='
       && lk != 42                  // '='
       && lk != 43                  // '=='
       && lk != 44                  // '>'
       && lk != 45                  // '>='
       && lk != 46                  // '>>'
       && lk != 47                  // '>>='
       && lk != 48                  // '?'
       && lk != 49                  // '?='
       && lk != 50                  // '['
       && lk != 51                  // ']'
       && lk != 52                  // '^'
       && lk != 53                  // '^='
       && lk != 54                  // 'break'
       && lk != 55                  // 'case'
       && lk != 56                  // 'catch'
       && lk != 57                  // 'continue'
       && lk != 58                  // 'default'
       && lk != 59                  // 'do'
       && lk != 60                  // 'else'
       && lk != 61                  // 'export'
       && lk != 62                  // 'f32'
       && lk != 63                  // 'f64'
       && lk != 64                  // 'for'
       && lk != 65                  // 'foreach'
       && lk != 66                  // 'global'
       && lk != 67                  // 'i32'
       && lk != 68                  // 'i64'
       && lk != 69                  // 'if'
       && lk != 70                  // 'import'
       && lk != 71                  // 'include'
       && lk != 72                  // 'local'
       && lk != 73                  // 'return'
       && lk != 74                  // 'switch'
       && lk != 75                  // 'test'
       && lk != 76                  // 'throw'
       && lk != 77                  // 'try'
       && lk != 78                  // 'while'
       && lk != 79                  // '{'
       && lk != 80                  // '|'
       && lk != 81                  // '|='
       && lk != 82                  // '||'
       && lk != 83                  // '}'
       && lk != 84                  // '~'
       && lk != 1561                // '+' '!'
       && lk != 1565                // '-' '!'
       && lk != 3225                // '+' '+'
       && lk != 3229                // '-' '+'
       && lk != 3353                // '+' '++'
       && lk != 3357                // '-' '++'
       && lk != 3737                // '+' '-'
       && lk != 3741                // '-' '-'
       && lk != 3865                // '+' '--'
       && lk != 3869                // '-' '--'
       && lk != 10777               // '+' '~'
       && lk != 10781               // '-' '~'
       && lk != 344473              // '+' Identifier ')'
       && lk != 344477              // '-' Identifier ')'
       && lk != 344601              // '+' Character ')'
       && lk != 344605              // '-' Character ')'
       && lk != 344729              // '+' String ')'
       && lk != 344733              // '-' String ')'
       && lk != 344857              // '+' Integer ')'
       && lk != 344861              // '-' Integer ')'
       && lk != 344985              // '+' Complex ')'
       && lk != 344989              // '-' Complex ')'
       && lk != 345113              // '+' Real ')'
       && lk != 345117              // '-' Real ')'
       && lk != 459161              // '+' Identifier ','
       && lk != 459165              // '-' Identifier ','
       && lk != 459289              // '+' Character ','
       && lk != 459293              // '-' Character ','
       && lk != 459417              // '+' String ','
       && lk != 459421              // '-' String ','
       && lk != 459545              // '+' Integer ','
       && lk != 459549              // '-' Integer ','
       && lk != 459673              // '+' Complex ','
       && lk != 459677              // '-' Complex ','
       && lk != 459801              // '+' Real ','
       && lk != 459805              // '-' Real ','
       && lk != 573849              // '+' Identifier ':'
       && lk != 573853              // '-' Identifier ':'
       && lk != 573977              // '+' Character ':'
       && lk != 573981              // '-' Character ':'
       && lk != 574105              // '+' String ':'
       && lk != 574109              // '-' String ':'
       && lk != 574233              // '+' Integer ':'
       && lk != 574237              // '-' Integer ':'
       && lk != 574361              // '+' Complex ':'
       && lk != 574365              // '-' Complex ':'
       && lk != 574489              // '+' Real ':'
       && lk != 574493              // '-' Real ':'
       && lk != 835993              // '+' Identifier ']'
       && lk != 835997              // '-' Identifier ']'
       && lk != 836121              // '+' Character ']'
       && lk != 836125              // '-' Character ']'
       && lk != 836249              // '+' String ']'
       && lk != 836253              // '-' String ']'
       && lk != 836377              // '+' Integer ']'
       && lk != 836381              // '-' Integer ']'
       && lk != 836505              // '+' Complex ']'
       && lk != 836509              // '-' Complex ']'
       && lk != 836633              // '+' Real ']'
       && lk != 836637              // '-' Real ']'
       && lk != 917913              // '+' Identifier 'catch'
       && lk != 917917              // '-' Identifier 'catch'
       && lk != 918041              // '+' Character 'catch'
       && lk != 918045              // '-' Character 'catch'
       && lk != 918169              // '+' String 'catch'
       && lk != 918173              // '-' String 'catch'
       && lk != 918297              // '+' Integer 'catch'
       && lk != 918301              // '-' Integer 'catch'
       && lk != 918425              // '+' Complex 'catch'
       && lk != 918429              // '-' Complex 'catch'
       && lk != 918553              // '+' Real 'catch'
       && lk != 918557              // '-' Real 'catch'
       && lk != 983449              // '+' Identifier 'else'
       && lk != 983453              // '-' Identifier 'else'
       && lk != 983577              // '+' Character 'else'
       && lk != 983581              // '-' Character 'else'
       && lk != 983705              // '+' String 'else'
       && lk != 983709              // '-' String 'else'
       && lk != 983833              // '+' Integer 'else'
       && lk != 983837              // '-' Integer 'else'
       && lk != 983961              // '+' Complex 'else'
       && lk != 983965              // '-' Complex 'else'
       && lk != 984089              // '+' Real 'else'
       && lk != 984093)             // '-' Real 'else'
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
            switch (l1)
            {
            case 25:                // '+'
              consumeT(25);         // '+'
              break;
            default:
              consumeT(29);         // '-'
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
            try_PowerExpression();
            memoize(2, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(2, e0A, -2);
            break;
          }
        }
      }
      if (lk == -2
       || lk == 1                   // END
       || lk == 3                   // Identifier
       || lk == 4                   // Character
       || lk == 5                   // String
       || lk == 6                   // Integer
       || lk == 7                   // Complex
       || lk == 8                   // Real
       || lk == 9                   // Comment
       || lk == 12                  // '!'
       || lk == 13                  // '!='
       || lk == 16                  // '%='
       || lk == 17                  // '&'
       || lk == 18                  // '&&'
       || lk == 19                  // '&='
       || lk == 20                  // '('
       || lk == 21                  // ')'
       || lk == 24                  // '*='
       || lk == 26                  // '++'
       || lk == 27                  // '+='
       || lk == 28                  // ','
       || lk == 30                  // '--'
       || lk == 31                  // '-='
       || lk == 34                  // '/='
       || lk == 35                  // ':'
       || lk == 36                  // ':='
       || lk == 37                  // ';'
       || lk == 38                  // '<'
       || lk == 39                  // '<<'
       || lk == 40                  // '<<='
       || lk == 41                  // '<='
       || lk == 42                  // '='
       || lk == 43                  // '=='
       || lk == 44                  // '>'
       || lk == 45                  // '>='
       || lk == 46                  // '>>'
       || lk == 47                  // '>>='
       || lk == 48                  // '?'
       || lk == 49                  // '?='
       || lk == 50                  // '['
       || lk == 51                  // ']'
       || lk == 52                  // '^'
       || lk == 53                  // '^='
       || lk == 54                  // 'break'
       || lk == 55                  // 'case'
       || lk == 56                  // 'catch'
       || lk == 57                  // 'continue'
       || lk == 58                  // 'default'
       || lk == 59                  // 'do'
       || lk == 60                  // 'else'
       || lk == 61                  // 'export'
       || lk == 62                  // 'f32'
       || lk == 63                  // 'f64'
       || lk == 64                  // 'for'
       || lk == 65                  // 'foreach'
       || lk == 66                  // 'global'
       || lk == 67                  // 'i32'
       || lk == 68                  // 'i64'
       || lk == 69                  // 'if'
       || lk == 70                  // 'import'
       || lk == 71                  // 'include'
       || lk == 72                  // 'local'
       || lk == 73                  // 'return'
       || lk == 74                  // 'switch'
       || lk == 75                  // 'test'
       || lk == 76                  // 'throw'
       || lk == 77                  // 'try'
       || lk == 78                  // 'while'
       || lk == 79                  // '{'
       || lk == 80                  // '|'
       || lk == 81                  // '|='
       || lk == 82                  // '||'
       || lk == 83                  // '}'
       || lk == 84)                 // '~'
      {
        break;
      }
      switch (l1)
      {
      case 25:                      // '+'
        consumeT(25);               // '+'
        break;
      default:
        consumeT(29);               // '-'
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_PowerExpression();
    }
  }

  function parse_PowerExpression()
  {
    eventHandler.startNonterminal("PowerExpression", e0);
    parse_MultiplicativeExpression();
    for (;;)
    {
      if (l1 != 23)                 // '**'
      {
        break;
      }
      consume(23);                  // '**'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_MultiplicativeExpression();
    }
    eventHandler.endNonterminal("PowerExpression", e0);
  }

  function try_PowerExpression()
  {
    try_MultiplicativeExpression();
    for (;;)
    {
      if (l1 != 23)                 // '**'
      {
        break;
      }
      consumeT(23);                 // '**'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_MultiplicativeExpression();
    }
  }

  function parse_MultiplicativeExpression()
  {
    eventHandler.startNonterminal("MultiplicativeExpression", e0);
    parse_UnaryExpression();
    for (;;)
    {
      lookahead1W(44);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      if (l1 != 15                  // '%'
       && l1 != 22                  // '*'
       && l1 != 33)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 22:                      // '*'
        consume(22);                // '*'
        break;
      case 33:                      // '/'
        consume(33);                // '/'
        break;
      default:
        consume(15);                // '%'
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      whitespace();
      parse_UnaryExpression();
    }
    eventHandler.endNonterminal("MultiplicativeExpression", e0);
  }

  function try_MultiplicativeExpression()
  {
    try_UnaryExpression();
    for (;;)
    {
      lookahead1W(44);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      if (l1 != 15                  // '%'
       && l1 != 22                  // '*'
       && l1 != 33)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 22:                      // '*'
        consumeT(22);               // '*'
        break;
      case 33:                      // '/'
        consumeT(33);               // '/'
        break;
      default:
        consumeT(15);               // '%'
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{' |
                                    // '~'
      try_UnaryExpression();
    }
  }

  function parse_UnaryExpression()
  {
    eventHandler.startNonterminal("UnaryExpression", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(36);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10132:                   // '(' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(4);             // WhiteSpace^token | ')'
        break;
      case 7956:                    // '(' 'f32'
      case 8084:                    // '(' 'f64'
      case 8596:                    // '(' 'i32'
      case 8724:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 916:                     // '(' Complex
      case 1044:                    // '(' Real
        lookahead3W(24);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10772:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8212:                    // '(' 'for'
      case 8340:                    // '(' 'foreach'
      case 8852:                    // '(' 'if'
      case 9492:                    // '(' 'switch'
      case 9620:                    // '(' 'test'
      case 10004:                   // '(' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 7828:                    // '(' 'export'
      case 8468:                    // '(' 'global'
      case 8980:                    // '(' 'import'
      case 9108:                    // '(' 'include'
      case 9236:                    // '(' 'local'
      case 9364:                    // '(' 'return'
      case 9748:                    // '(' 'throw'
      case 9876:                    // '(' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(31);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(39);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(34);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 10162:                   // '[' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 7986:                    // '[' 'f32'
      case 8114:                    // '[' 'f64'
      case 8626:                    // '[' 'i32'
      case 8754:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 946:                     // '[' Complex
      case 1074:                    // '[' Real
        lookahead3W(28);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10802:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8242:                    // '[' 'for'
      case 8370:                    // '[' 'foreach'
      case 8882:                    // '[' 'if'
      case 9522:                    // '[' 'switch'
      case 9650:                    // '[' 'test'
      case 10034:                   // '[' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 7858:                    // '[' 'export'
      case 8498:                    // '[' 'global'
      case 9010:                    // '[' 'import'
      case 9138:                    // '[' 'include'
      case 9266:                    // '[' 'local'
      case 9394:                    // '[' 'return'
      case 9778:                    // '[' 'throw'
      case 9906:                    // '[' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 79:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 463:                     // '{' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 719:                     // '{' String
        lookahead3W(27);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6479:                    // '{' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10191:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 10703:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 591:                     // '{' Character
      case 847:                     // '{' Integer
      case 975:                     // '{' Complex
      case 1103:                    // '{' Real
        lookahead3W(25);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1231:                    // '{' Comment
      case 4815:                    // '{' ';'
      case 6991:                    // '{' 'break'
      case 7375:                    // '{' 'continue'
        lookahead3W(17);            // WhiteSpace^token | ',' | '}'
        break;
      case 8015:                    // '{' 'f32'
      case 8143:                    // '{' 'f64'
      case 8655:                    // '{' 'i32'
      case 8783:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1615:                    // '{' '!'
      case 3279:                    // '{' '+'
      case 3407:                    // '{' '++'
      case 3791:                    // '{' '-'
      case 3919:                    // '{' '--'
      case 10831:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8271:                    // '{' 'for'
      case 8399:                    // '{' 'foreach'
      case 8911:                    // '{' 'if'
      case 9551:                    // '{' 'switch'
      case 9679:                    // '{' 'test'
      case 10063:                   // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2639:                    // '{' '('
      case 3663:                    // '{' ','
      case 7631:                    // '{' 'do'
      case 7887:                    // '{' 'export'
      case 8527:                    // '{' 'global'
      case 9039:                    // '{' 'import'
      case 9167:                    // '{' 'include'
      case 9295:                    // '{' 'local'
      case 9423:                    // '{' 'return'
      case 9807:                    // '{' 'throw'
      case 9935:                    // '{' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 446:                     // 'f32' Identifier
      case 447:                     // 'f64' Identifier
      case 451:                     // 'i32' Identifier
      case 452:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Complex
    case 8:                         // Real
      lookahead2W(44);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 3332:                    // Character '++'
      case 3844:                    // Character '--'
      case 3333:                    // String '++'
      case 3845:                    // String '--'
      case 3334:                    // Integer '++'
      case 3846:                    // Integer '--'
      case 3335:                    // Complex '++'
      case 3847:                    // Complex '--'
      case 3336:                    // Real '++'
      case 3848:                    // Real '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 12                    // '!'
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 84                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Character END
     && lk != 133                   // String END
     && lk != 134                   // Integer END
     && lk != 135                   // Complex END
     && lk != 136                   // Real END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Character Identifier
     && lk != 389                   // String Identifier
     && lk != 390                   // Integer Identifier
     && lk != 391                   // Complex Identifier
     && lk != 392                   // Real Identifier
     && lk != 515                   // Identifier Character
     && lk != 516                   // Character Character
     && lk != 517                   // String Character
     && lk != 518                   // Integer Character
     && lk != 519                   // Complex Character
     && lk != 520                   // Real Character
     && lk != 643                   // Identifier String
     && lk != 644                   // Character String
     && lk != 645                   // String String
     && lk != 646                   // Integer String
     && lk != 647                   // Complex String
     && lk != 648                   // Real String
     && lk != 771                   // Identifier Integer
     && lk != 772                   // Character Integer
     && lk != 773                   // String Integer
     && lk != 774                   // Integer Integer
     && lk != 775                   // Complex Integer
     && lk != 776                   // Real Integer
     && lk != 899                   // Identifier Complex
     && lk != 900                   // Character Complex
     && lk != 901                   // String Complex
     && lk != 902                   // Integer Complex
     && lk != 903                   // Complex Complex
     && lk != 904                   // Real Complex
     && lk != 1027                  // Identifier Real
     && lk != 1028                  // Character Real
     && lk != 1029                  // String Real
     && lk != 1030                  // Integer Real
     && lk != 1031                  // Complex Real
     && lk != 1032                  // Real Real
     && lk != 1155                  // Identifier Comment
     && lk != 1156                  // Character Comment
     && lk != 1157                  // String Comment
     && lk != 1158                  // Integer Comment
     && lk != 1159                  // Complex Comment
     && lk != 1160                  // Real Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1540                  // Character '!'
     && lk != 1541                  // String '!'
     && lk != 1542                  // Integer '!'
     && lk != 1543                  // Complex '!'
     && lk != 1544                  // Real '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1668                  // Character '!='
     && lk != 1669                  // String '!='
     && lk != 1670                  // Integer '!='
     && lk != 1671                  // Complex '!='
     && lk != 1672                  // Real '!='
     && lk != 1923                  // Identifier '%'
     && lk != 1924                  // Character '%'
     && lk != 1925                  // String '%'
     && lk != 1926                  // Integer '%'
     && lk != 1927                  // Complex '%'
     && lk != 1928                  // Real '%'
     && lk != 2051                  // Identifier '%='
     && lk != 2052                  // Character '%='
     && lk != 2053                  // String '%='
     && lk != 2054                  // Integer '%='
     && lk != 2055                  // Complex '%='
     && lk != 2056                  // Real '%='
     && lk != 2179                  // Identifier '&'
     && lk != 2180                  // Character '&'
     && lk != 2181                  // String '&'
     && lk != 2182                  // Integer '&'
     && lk != 2183                  // Complex '&'
     && lk != 2184                  // Real '&'
     && lk != 2307                  // Identifier '&&'
     && lk != 2308                  // Character '&&'
     && lk != 2309                  // String '&&'
     && lk != 2310                  // Integer '&&'
     && lk != 2311                  // Complex '&&'
     && lk != 2312                  // Real '&&'
     && lk != 2435                  // Identifier '&='
     && lk != 2436                  // Character '&='
     && lk != 2437                  // String '&='
     && lk != 2438                  // Integer '&='
     && lk != 2439                  // Complex '&='
     && lk != 2440                  // Real '&='
     && lk != 2564                  // Character '('
     && lk != 2565                  // String '('
     && lk != 2566                  // Integer '('
     && lk != 2567                  // Complex '('
     && lk != 2568                  // Real '('
     && lk != 2691                  // Identifier ')'
     && lk != 2692                  // Character ')'
     && lk != 2693                  // String ')'
     && lk != 2694                  // Integer ')'
     && lk != 2695                  // Complex ')'
     && lk != 2696                  // Real ')'
     && lk != 2819                  // Identifier '*'
     && lk != 2820                  // Character '*'
     && lk != 2821                  // String '*'
     && lk != 2822                  // Integer '*'
     && lk != 2823                  // Complex '*'
     && lk != 2824                  // Real '*'
     && lk != 2947                  // Identifier '**'
     && lk != 2948                  // Character '**'
     && lk != 2949                  // String '**'
     && lk != 2950                  // Integer '**'
     && lk != 2951                  // Complex '**'
     && lk != 2952                  // Real '**'
     && lk != 3075                  // Identifier '*='
     && lk != 3076                  // Character '*='
     && lk != 3077                  // String '*='
     && lk != 3078                  // Integer '*='
     && lk != 3079                  // Complex '*='
     && lk != 3080                  // Real '*='
     && lk != 3203                  // Identifier '+'
     && lk != 3204                  // Character '+'
     && lk != 3205                  // String '+'
     && lk != 3206                  // Integer '+'
     && lk != 3207                  // Complex '+'
     && lk != 3208                  // Real '+'
     && lk != 3459                  // Identifier '+='
     && lk != 3460                  // Character '+='
     && lk != 3461                  // String '+='
     && lk != 3462                  // Integer '+='
     && lk != 3463                  // Complex '+='
     && lk != 3464                  // Real '+='
     && lk != 3587                  // Identifier ','
     && lk != 3588                  // Character ','
     && lk != 3589                  // String ','
     && lk != 3590                  // Integer ','
     && lk != 3591                  // Complex ','
     && lk != 3592                  // Real ','
     && lk != 3715                  // Identifier '-'
     && lk != 3716                  // Character '-'
     && lk != 3717                  // String '-'
     && lk != 3718                  // Integer '-'
     && lk != 3719                  // Complex '-'
     && lk != 3720                  // Real '-'
     && lk != 3971                  // Identifier '-='
     && lk != 3972                  // Character '-='
     && lk != 3973                  // String '-='
     && lk != 3974                  // Integer '-='
     && lk != 3975                  // Complex '-='
     && lk != 3976                  // Real '-='
     && lk != 4227                  // Identifier '/'
     && lk != 4228                  // Character '/'
     && lk != 4229                  // String '/'
     && lk != 4230                  // Integer '/'
     && lk != 4231                  // Complex '/'
     && lk != 4232                  // Real '/'
     && lk != 4355                  // Identifier '/='
     && lk != 4356                  // Character '/='
     && lk != 4357                  // String '/='
     && lk != 4358                  // Integer '/='
     && lk != 4359                  // Complex '/='
     && lk != 4360                  // Real '/='
     && lk != 4483                  // Identifier ':'
     && lk != 4484                  // Character ':'
     && lk != 4485                  // String ':'
     && lk != 4486                  // Integer ':'
     && lk != 4487                  // Complex ':'
     && lk != 4488                  // Real ':'
     && lk != 4611                  // Identifier ':='
     && lk != 4612                  // Character ':='
     && lk != 4613                  // String ':='
     && lk != 4614                  // Integer ':='
     && lk != 4615                  // Complex ':='
     && lk != 4616                  // Real ':='
     && lk != 4739                  // Identifier ';'
     && lk != 4740                  // Character ';'
     && lk != 4741                  // String ';'
     && lk != 4742                  // Integer ';'
     && lk != 4743                  // Complex ';'
     && lk != 4744                  // Real ';'
     && lk != 4867                  // Identifier '<'
     && lk != 4868                  // Character '<'
     && lk != 4869                  // String '<'
     && lk != 4870                  // Integer '<'
     && lk != 4871                  // Complex '<'
     && lk != 4872                  // Real '<'
     && lk != 4995                  // Identifier '<<'
     && lk != 4996                  // Character '<<'
     && lk != 4997                  // String '<<'
     && lk != 4998                  // Integer '<<'
     && lk != 4999                  // Complex '<<'
     && lk != 5000                  // Real '<<'
     && lk != 5123                  // Identifier '<<='
     && lk != 5124                  // Character '<<='
     && lk != 5125                  // String '<<='
     && lk != 5126                  // Integer '<<='
     && lk != 5127                  // Complex '<<='
     && lk != 5128                  // Real '<<='
     && lk != 5251                  // Identifier '<='
     && lk != 5252                  // Character '<='
     && lk != 5253                  // String '<='
     && lk != 5254                  // Integer '<='
     && lk != 5255                  // Complex '<='
     && lk != 5256                  // Real '<='
     && lk != 5379                  // Identifier '='
     && lk != 5380                  // Character '='
     && lk != 5381                  // String '='
     && lk != 5382                  // Integer '='
     && lk != 5383                  // Complex '='
     && lk != 5384                  // Real '='
     && lk != 5507                  // Identifier '=='
     && lk != 5508                  // Character '=='
     && lk != 5509                  // String '=='
     && lk != 5510                  // Integer '=='
     && lk != 5511                  // Complex '=='
     && lk != 5512                  // Real '=='
     && lk != 5635                  // Identifier '>'
     && lk != 5636                  // Character '>'
     && lk != 5637                  // String '>'
     && lk != 5638                  // Integer '>'
     && lk != 5639                  // Complex '>'
     && lk != 5640                  // Real '>'
     && lk != 5763                  // Identifier '>='
     && lk != 5764                  // Character '>='
     && lk != 5765                  // String '>='
     && lk != 5766                  // Integer '>='
     && lk != 5767                  // Complex '>='
     && lk != 5768                  // Real '>='
     && lk != 5891                  // Identifier '>>'
     && lk != 5892                  // Character '>>'
     && lk != 5893                  // String '>>'
     && lk != 5894                  // Integer '>>'
     && lk != 5895                  // Complex '>>'
     && lk != 5896                  // Real '>>'
     && lk != 6019                  // Identifier '>>='
     && lk != 6020                  // Character '>>='
     && lk != 6021                  // String '>>='
     && lk != 6022                  // Integer '>>='
     && lk != 6023                  // Complex '>>='
     && lk != 6024                  // Real '>>='
     && lk != 6147                  // Identifier '?'
     && lk != 6148                  // Character '?'
     && lk != 6149                  // String '?'
     && lk != 6150                  // Integer '?'
     && lk != 6151                  // Complex '?'
     && lk != 6152                  // Real '?'
     && lk != 6275                  // Identifier '?='
     && lk != 6276                  // Character '?='
     && lk != 6277                  // String '?='
     && lk != 6278                  // Integer '?='
     && lk != 6279                  // Complex '?='
     && lk != 6280                  // Real '?='
     && lk != 6404                  // Character '['
     && lk != 6405                  // String '['
     && lk != 6406                  // Integer '['
     && lk != 6407                  // Complex '['
     && lk != 6408                  // Real '['
     && lk != 6531                  // Identifier ']'
     && lk != 6532                  // Character ']'
     && lk != 6533                  // String ']'
     && lk != 6534                  // Integer ']'
     && lk != 6535                  // Complex ']'
     && lk != 6536                  // Real ']'
     && lk != 6659                  // Identifier '^'
     && lk != 6660                  // Character '^'
     && lk != 6661                  // String '^'
     && lk != 6662                  // Integer '^'
     && lk != 6663                  // Complex '^'
     && lk != 6664                  // Real '^'
     && lk != 6787                  // Identifier '^='
     && lk != 6788                  // Character '^='
     && lk != 6789                  // String '^='
     && lk != 6790                  // Integer '^='
     && lk != 6791                  // Complex '^='
     && lk != 6792                  // Real '^='
     && lk != 6915                  // Identifier 'break'
     && lk != 6916                  // Character 'break'
     && lk != 6917                  // String 'break'
     && lk != 6918                  // Integer 'break'
     && lk != 6919                  // Complex 'break'
     && lk != 6920                  // Real 'break'
     && lk != 7043                  // Identifier 'case'
     && lk != 7044                  // Character 'case'
     && lk != 7045                  // String 'case'
     && lk != 7046                  // Integer 'case'
     && lk != 7047                  // Complex 'case'
     && lk != 7048                  // Real 'case'
     && lk != 7171                  // Identifier 'catch'
     && lk != 7172                  // Character 'catch'
     && lk != 7173                  // String 'catch'
     && lk != 7174                  // Integer 'catch'
     && lk != 7175                  // Complex 'catch'
     && lk != 7176                  // Real 'catch'
     && lk != 7299                  // Identifier 'continue'
     && lk != 7300                  // Character 'continue'
     && lk != 7301                  // String 'continue'
     && lk != 7302                  // Integer 'continue'
     && lk != 7303                  // Complex 'continue'
     && lk != 7304                  // Real 'continue'
     && lk != 7427                  // Identifier 'default'
     && lk != 7428                  // Character 'default'
     && lk != 7429                  // String 'default'
     && lk != 7430                  // Integer 'default'
     && lk != 7431                  // Complex 'default'
     && lk != 7432                  // Real 'default'
     && lk != 7555                  // Identifier 'do'
     && lk != 7556                  // Character 'do'
     && lk != 7557                  // String 'do'
     && lk != 7558                  // Integer 'do'
     && lk != 7559                  // Complex 'do'
     && lk != 7560                  // Real 'do'
     && lk != 7683                  // Identifier 'else'
     && lk != 7684                  // Character 'else'
     && lk != 7685                  // String 'else'
     && lk != 7686                  // Integer 'else'
     && lk != 7687                  // Complex 'else'
     && lk != 7688                  // Real 'else'
     && lk != 7811                  // Identifier 'export'
     && lk != 7812                  // Character 'export'
     && lk != 7813                  // String 'export'
     && lk != 7814                  // Integer 'export'
     && lk != 7815                  // Complex 'export'
     && lk != 7816                  // Real 'export'
     && lk != 7939                  // Identifier 'f32'
     && lk != 7940                  // Character 'f32'
     && lk != 7941                  // String 'f32'
     && lk != 7942                  // Integer 'f32'
     && lk != 7943                  // Complex 'f32'
     && lk != 7944                  // Real 'f32'
     && lk != 8067                  // Identifier 'f64'
     && lk != 8068                  // Character 'f64'
     && lk != 8069                  // String 'f64'
     && lk != 8070                  // Integer 'f64'
     && lk != 8071                  // Complex 'f64'
     && lk != 8072                  // Real 'f64'
     && lk != 8195                  // Identifier 'for'
     && lk != 8196                  // Character 'for'
     && lk != 8197                  // String 'for'
     && lk != 8198                  // Integer 'for'
     && lk != 8199                  // Complex 'for'
     && lk != 8200                  // Real 'for'
     && lk != 8323                  // Identifier 'foreach'
     && lk != 8324                  // Character 'foreach'
     && lk != 8325                  // String 'foreach'
     && lk != 8326                  // Integer 'foreach'
     && lk != 8327                  // Complex 'foreach'
     && lk != 8328                  // Real 'foreach'
     && lk != 8451                  // Identifier 'global'
     && lk != 8452                  // Character 'global'
     && lk != 8453                  // String 'global'
     && lk != 8454                  // Integer 'global'
     && lk != 8455                  // Complex 'global'
     && lk != 8456                  // Real 'global'
     && lk != 8579                  // Identifier 'i32'
     && lk != 8580                  // Character 'i32'
     && lk != 8581                  // String 'i32'
     && lk != 8582                  // Integer 'i32'
     && lk != 8583                  // Complex 'i32'
     && lk != 8584                  // Real 'i32'
     && lk != 8707                  // Identifier 'i64'
     && lk != 8708                  // Character 'i64'
     && lk != 8709                  // String 'i64'
     && lk != 8710                  // Integer 'i64'
     && lk != 8711                  // Complex 'i64'
     && lk != 8712                  // Real 'i64'
     && lk != 8835                  // Identifier 'if'
     && lk != 8836                  // Character 'if'
     && lk != 8837                  // String 'if'
     && lk != 8838                  // Integer 'if'
     && lk != 8839                  // Complex 'if'
     && lk != 8840                  // Real 'if'
     && lk != 8963                  // Identifier 'import'
     && lk != 8964                  // Character 'import'
     && lk != 8965                  // String 'import'
     && lk != 8966                  // Integer 'import'
     && lk != 8967                  // Complex 'import'
     && lk != 8968                  // Real 'import'
     && lk != 9091                  // Identifier 'include'
     && lk != 9092                  // Character 'include'
     && lk != 9093                  // String 'include'
     && lk != 9094                  // Integer 'include'
     && lk != 9095                  // Complex 'include'
     && lk != 9096                  // Real 'include'
     && lk != 9219                  // Identifier 'local'
     && lk != 9220                  // Character 'local'
     && lk != 9221                  // String 'local'
     && lk != 9222                  // Integer 'local'
     && lk != 9223                  // Complex 'local'
     && lk != 9224                  // Real 'local'
     && lk != 9347                  // Identifier 'return'
     && lk != 9348                  // Character 'return'
     && lk != 9349                  // String 'return'
     && lk != 9350                  // Integer 'return'
     && lk != 9351                  // Complex 'return'
     && lk != 9352                  // Real 'return'
     && lk != 9475                  // Identifier 'switch'
     && lk != 9476                  // Character 'switch'
     && lk != 9477                  // String 'switch'
     && lk != 9478                  // Integer 'switch'
     && lk != 9479                  // Complex 'switch'
     && lk != 9480                  // Real 'switch'
     && lk != 9603                  // Identifier 'test'
     && lk != 9604                  // Character 'test'
     && lk != 9605                  // String 'test'
     && lk != 9606                  // Integer 'test'
     && lk != 9607                  // Complex 'test'
     && lk != 9608                  // Real 'test'
     && lk != 9731                  // Identifier 'throw'
     && lk != 9732                  // Character 'throw'
     && lk != 9733                  // String 'throw'
     && lk != 9734                  // Integer 'throw'
     && lk != 9735                  // Complex 'throw'
     && lk != 9736                  // Real 'throw'
     && lk != 9859                  // Identifier 'try'
     && lk != 9860                  // Character 'try'
     && lk != 9861                  // String 'try'
     && lk != 9862                  // Integer 'try'
     && lk != 9863                  // Complex 'try'
     && lk != 9864                  // Real 'try'
     && lk != 9987                  // Identifier 'while'
     && lk != 9988                  // Character 'while'
     && lk != 9989                  // String 'while'
     && lk != 9990                  // Integer 'while'
     && lk != 9991                  // Complex 'while'
     && lk != 9992                  // Real 'while'
     && lk != 10115                 // Identifier '{'
     && lk != 10116                 // Character '{'
     && lk != 10117                 // String '{'
     && lk != 10118                 // Integer '{'
     && lk != 10119                 // Complex '{'
     && lk != 10120                 // Real '{'
     && lk != 10243                 // Identifier '|'
     && lk != 10244                 // Character '|'
     && lk != 10245                 // String '|'
     && lk != 10246                 // Integer '|'
     && lk != 10247                 // Complex '|'
     && lk != 10248                 // Real '|'
     && lk != 10371                 // Identifier '|='
     && lk != 10372                 // Character '|='
     && lk != 10373                 // String '|='
     && lk != 10374                 // Integer '|='
     && lk != 10375                 // Complex '|='
     && lk != 10376                 // Real '|='
     && lk != 10499                 // Identifier '||'
     && lk != 10500                 // Character '||'
     && lk != 10501                 // String '||'
     && lk != 10502                 // Integer '||'
     && lk != 10503                 // Complex '||'
     && lk != 10504                 // Real '||'
     && lk != 10627                 // Identifier '}'
     && lk != 10628                 // Character '}'
     && lk != 10629                 // String '}'
     && lk != 10630                 // Integer '}'
     && lk != 10631                 // Complex '}'
     && lk != 10632                 // Real '}'
     && lk != 10755                 // Identifier '~'
     && lk != 10756                 // Character '~'
     && lk != 10757                 // String '~'
     && lk != 10758                 // Integer '~'
     && lk != 10759                 // Complex '~'
     && lk != 10760                 // Real '~'
     && lk != 16830                 // 'f32' Identifier END
     && lk != 16831                 // 'f64' Identifier END
     && lk != 16835                 // 'i32' Identifier END
     && lk != 16836                 // 'i64' Identifier END
     && lk != 19715                 // Identifier '++' END
     && lk != 19716                 // Character '++' END
     && lk != 19717                 // String '++' END
     && lk != 19718                 // Integer '++' END
     && lk != 19719                 // Complex '++' END
     && lk != 19720                 // Real '++' END
     && lk != 20227                 // Identifier '--' END
     && lk != 20228                 // Character '--' END
     && lk != 20229                 // String '--' END
     && lk != 20230                 // Integer '--' END
     && lk != 20231                 // Complex '--' END
     && lk != 20232                 // Real '--' END
     && lk != 22962                 // '[' ']' END
     && lk != 27087                 // '{' '}' END
     && lk != 49598                 // 'f32' Identifier Identifier
     && lk != 49599                 // 'f64' Identifier Identifier
     && lk != 49603                 // 'i32' Identifier Identifier
     && lk != 49604                 // 'i64' Identifier Identifier
     && lk != 55730                 // '[' ']' Identifier
     && lk != 59855                 // '{' '}' Identifier
     && lk != 65982                 // 'f32' Identifier Character
     && lk != 65983                 // 'f64' Identifier Character
     && lk != 65987                 // 'i32' Identifier Character
     && lk != 65988                 // 'i64' Identifier Character
     && lk != 72114                 // '[' ']' Character
     && lk != 76239                 // '{' '}' Character
     && lk != 82366                 // 'f32' Identifier String
     && lk != 82367                 // 'f64' Identifier String
     && lk != 82371                 // 'i32' Identifier String
     && lk != 82372                 // 'i64' Identifier String
     && lk != 88498                 // '[' ']' String
     && lk != 92623                 // '{' '}' String
     && lk != 98750                 // 'f32' Identifier Integer
     && lk != 98751                 // 'f64' Identifier Integer
     && lk != 98755                 // 'i32' Identifier Integer
     && lk != 98756                 // 'i64' Identifier Integer
     && lk != 104882                // '[' ']' Integer
     && lk != 109007                // '{' '}' Integer
     && lk != 115134                // 'f32' Identifier Complex
     && lk != 115135                // 'f64' Identifier Complex
     && lk != 115139                // 'i32' Identifier Complex
     && lk != 115140                // 'i64' Identifier Complex
     && lk != 121266                // '[' ']' Complex
     && lk != 125391                // '{' '}' Complex
     && lk != 131518                // 'f32' Identifier Real
     && lk != 131519                // 'f64' Identifier Real
     && lk != 131523                // 'i32' Identifier Real
     && lk != 131524                // 'i64' Identifier Real
     && lk != 137650                // '[' ']' Real
     && lk != 141775                // '{' '}' Real
     && lk != 147902                // 'f32' Identifier Comment
     && lk != 147903                // 'f64' Identifier Comment
     && lk != 147907                // 'i32' Identifier Comment
     && lk != 147908                // 'i64' Identifier Comment
     && lk != 150787                // Identifier '++' Comment
     && lk != 150788                // Character '++' Comment
     && lk != 150789                // String '++' Comment
     && lk != 150790                // Integer '++' Comment
     && lk != 150791                // Complex '++' Comment
     && lk != 150792                // Real '++' Comment
     && lk != 151299                // Identifier '--' Comment
     && lk != 151300                // Character '--' Comment
     && lk != 151301                // String '--' Comment
     && lk != 151302                // Integer '--' Comment
     && lk != 151303                // Complex '--' Comment
     && lk != 151304                // Real '--' Comment
     && lk != 154034                // '[' ']' Comment
     && lk != 158159                // '{' '}' Comment
     && lk != 197054                // 'f32' Identifier '!'
     && lk != 197055                // 'f64' Identifier '!'
     && lk != 197059                // 'i32' Identifier '!'
     && lk != 197060                // 'i64' Identifier '!'
     && lk != 199939                // Identifier '++' '!'
     && lk != 199940                // Character '++' '!'
     && lk != 199941                // String '++' '!'
     && lk != 199942                // Integer '++' '!'
     && lk != 199943                // Complex '++' '!'
     && lk != 199944                // Real '++' '!'
     && lk != 200451                // Identifier '--' '!'
     && lk != 200452                // Character '--' '!'
     && lk != 200453                // String '--' '!'
     && lk != 200454                // Integer '--' '!'
     && lk != 200455                // Complex '--' '!'
     && lk != 200456                // Real '--' '!'
     && lk != 203186                // '[' ']' '!'
     && lk != 207311                // '{' '}' '!'
     && lk != 213438                // 'f32' Identifier '!='
     && lk != 213439                // 'f64' Identifier '!='
     && lk != 213443                // 'i32' Identifier '!='
     && lk != 213444                // 'i64' Identifier '!='
     && lk != 216323                // Identifier '++' '!='
     && lk != 216324                // Character '++' '!='
     && lk != 216325                // String '++' '!='
     && lk != 216326                // Integer '++' '!='
     && lk != 216327                // Complex '++' '!='
     && lk != 216328                // Real '++' '!='
     && lk != 216835                // Identifier '--' '!='
     && lk != 216836                // Character '--' '!='
     && lk != 216837                // String '--' '!='
     && lk != 216838                // Integer '--' '!='
     && lk != 216839                // Complex '--' '!='
     && lk != 216840                // Real '--' '!='
     && lk != 219570                // '[' ']' '!='
     && lk != 223695                // '{' '}' '!='
     && lk != 246206                // 'f32' Identifier '%'
     && lk != 246207                // 'f64' Identifier '%'
     && lk != 246211                // 'i32' Identifier '%'
     && lk != 246212                // 'i64' Identifier '%'
     && lk != 249091                // Identifier '++' '%'
     && lk != 249092                // Character '++' '%'
     && lk != 249093                // String '++' '%'
     && lk != 249094                // Integer '++' '%'
     && lk != 249095                // Complex '++' '%'
     && lk != 249096                // Real '++' '%'
     && lk != 249603                // Identifier '--' '%'
     && lk != 249604                // Character '--' '%'
     && lk != 249605                // String '--' '%'
     && lk != 249606                // Integer '--' '%'
     && lk != 249607                // Complex '--' '%'
     && lk != 249608                // Real '--' '%'
     && lk != 252338                // '[' ']' '%'
     && lk != 256463                // '{' '}' '%'
     && lk != 262590                // 'f32' Identifier '%='
     && lk != 262591                // 'f64' Identifier '%='
     && lk != 262595                // 'i32' Identifier '%='
     && lk != 262596                // 'i64' Identifier '%='
     && lk != 265475                // Identifier '++' '%='
     && lk != 265476                // Character '++' '%='
     && lk != 265477                // String '++' '%='
     && lk != 265478                // Integer '++' '%='
     && lk != 265479                // Complex '++' '%='
     && lk != 265480                // Real '++' '%='
     && lk != 265987                // Identifier '--' '%='
     && lk != 265988                // Character '--' '%='
     && lk != 265989                // String '--' '%='
     && lk != 265990                // Integer '--' '%='
     && lk != 265991                // Complex '--' '%='
     && lk != 265992                // Real '--' '%='
     && lk != 268722                // '[' ']' '%='
     && lk != 272847                // '{' '}' '%='
     && lk != 278974                // 'f32' Identifier '&'
     && lk != 278975                // 'f64' Identifier '&'
     && lk != 278979                // 'i32' Identifier '&'
     && lk != 278980                // 'i64' Identifier '&'
     && lk != 281859                // Identifier '++' '&'
     && lk != 281860                // Character '++' '&'
     && lk != 281861                // String '++' '&'
     && lk != 281862                // Integer '++' '&'
     && lk != 281863                // Complex '++' '&'
     && lk != 281864                // Real '++' '&'
     && lk != 282371                // Identifier '--' '&'
     && lk != 282372                // Character '--' '&'
     && lk != 282373                // String '--' '&'
     && lk != 282374                // Integer '--' '&'
     && lk != 282375                // Complex '--' '&'
     && lk != 282376                // Real '--' '&'
     && lk != 285106                // '[' ']' '&'
     && lk != 289231                // '{' '}' '&'
     && lk != 295358                // 'f32' Identifier '&&'
     && lk != 295359                // 'f64' Identifier '&&'
     && lk != 295363                // 'i32' Identifier '&&'
     && lk != 295364                // 'i64' Identifier '&&'
     && lk != 298243                // Identifier '++' '&&'
     && lk != 298244                // Character '++' '&&'
     && lk != 298245                // String '++' '&&'
     && lk != 298246                // Integer '++' '&&'
     && lk != 298247                // Complex '++' '&&'
     && lk != 298248                // Real '++' '&&'
     && lk != 298755                // Identifier '--' '&&'
     && lk != 298756                // Character '--' '&&'
     && lk != 298757                // String '--' '&&'
     && lk != 298758                // Integer '--' '&&'
     && lk != 298759                // Complex '--' '&&'
     && lk != 298760                // Real '--' '&&'
     && lk != 301490                // '[' ']' '&&'
     && lk != 305615                // '{' '}' '&&'
     && lk != 311742                // 'f32' Identifier '&='
     && lk != 311743                // 'f64' Identifier '&='
     && lk != 311747                // 'i32' Identifier '&='
     && lk != 311748                // 'i64' Identifier '&='
     && lk != 314627                // Identifier '++' '&='
     && lk != 314628                // Character '++' '&='
     && lk != 314629                // String '++' '&='
     && lk != 314630                // Integer '++' '&='
     && lk != 314631                // Complex '++' '&='
     && lk != 314632                // Real '++' '&='
     && lk != 315139                // Identifier '--' '&='
     && lk != 315140                // Character '--' '&='
     && lk != 315141                // String '--' '&='
     && lk != 315142                // Integer '--' '&='
     && lk != 315143                // Complex '--' '&='
     && lk != 315144                // Real '--' '&='
     && lk != 317874                // '[' ']' '&='
     && lk != 321999                // '{' '}' '&='
     && lk != 334258                // '[' ']' '('
     && lk != 338383                // '{' '}' '('
     && lk != 344510                // 'f32' Identifier ')'
     && lk != 344511                // 'f64' Identifier ')'
     && lk != 344515                // 'i32' Identifier ')'
     && lk != 344516                // 'i64' Identifier ')'
     && lk != 347395                // Identifier '++' ')'
     && lk != 347396                // Character '++' ')'
     && lk != 347397                // String '++' ')'
     && lk != 347398                // Integer '++' ')'
     && lk != 347399                // Complex '++' ')'
     && lk != 347400                // Real '++' ')'
     && lk != 347907                // Identifier '--' ')'
     && lk != 347908                // Character '--' ')'
     && lk != 347909                // String '--' ')'
     && lk != 347910                // Integer '--' ')'
     && lk != 347911                // Complex '--' ')'
     && lk != 347912                // Real '--' ')'
     && lk != 350642                // '[' ']' ')'
     && lk != 354767                // '{' '}' ')'
     && lk != 360894                // 'f32' Identifier '*'
     && lk != 360895                // 'f64' Identifier '*'
     && lk != 360899                // 'i32' Identifier '*'
     && lk != 360900                // 'i64' Identifier '*'
     && lk != 363779                // Identifier '++' '*'
     && lk != 363780                // Character '++' '*'
     && lk != 363781                // String '++' '*'
     && lk != 363782                // Integer '++' '*'
     && lk != 363783                // Complex '++' '*'
     && lk != 363784                // Real '++' '*'
     && lk != 364291                // Identifier '--' '*'
     && lk != 364292                // Character '--' '*'
     && lk != 364293                // String '--' '*'
     && lk != 364294                // Integer '--' '*'
     && lk != 364295                // Complex '--' '*'
     && lk != 364296                // Real '--' '*'
     && lk != 367026                // '[' ']' '*'
     && lk != 371151                // '{' '}' '*'
     && lk != 377278                // 'f32' Identifier '**'
     && lk != 377279                // 'f64' Identifier '**'
     && lk != 377283                // 'i32' Identifier '**'
     && lk != 377284                // 'i64' Identifier '**'
     && lk != 380163                // Identifier '++' '**'
     && lk != 380164                // Character '++' '**'
     && lk != 380165                // String '++' '**'
     && lk != 380166                // Integer '++' '**'
     && lk != 380167                // Complex '++' '**'
     && lk != 380168                // Real '++' '**'
     && lk != 380675                // Identifier '--' '**'
     && lk != 380676                // Character '--' '**'
     && lk != 380677                // String '--' '**'
     && lk != 380678                // Integer '--' '**'
     && lk != 380679                // Complex '--' '**'
     && lk != 380680                // Real '--' '**'
     && lk != 383410                // '[' ']' '**'
     && lk != 387535                // '{' '}' '**'
     && lk != 393662                // 'f32' Identifier '*='
     && lk != 393663                // 'f64' Identifier '*='
     && lk != 393667                // 'i32' Identifier '*='
     && lk != 393668                // 'i64' Identifier '*='
     && lk != 396547                // Identifier '++' '*='
     && lk != 396548                // Character '++' '*='
     && lk != 396549                // String '++' '*='
     && lk != 396550                // Integer '++' '*='
     && lk != 396551                // Complex '++' '*='
     && lk != 396552                // Real '++' '*='
     && lk != 397059                // Identifier '--' '*='
     && lk != 397060                // Character '--' '*='
     && lk != 397061                // String '--' '*='
     && lk != 397062                // Integer '--' '*='
     && lk != 397063                // Complex '--' '*='
     && lk != 397064                // Real '--' '*='
     && lk != 399794                // '[' ']' '*='
     && lk != 403919                // '{' '}' '*='
     && lk != 410046                // 'f32' Identifier '+'
     && lk != 410047                // 'f64' Identifier '+'
     && lk != 410051                // 'i32' Identifier '+'
     && lk != 410052                // 'i64' Identifier '+'
     && lk != 412931                // Identifier '++' '+'
     && lk != 412932                // Character '++' '+'
     && lk != 412933                // String '++' '+'
     && lk != 412934                // Integer '++' '+'
     && lk != 412935                // Complex '++' '+'
     && lk != 412936                // Real '++' '+'
     && lk != 413443                // Identifier '--' '+'
     && lk != 413444                // Character '--' '+'
     && lk != 413445                // String '--' '+'
     && lk != 413446                // Integer '--' '+'
     && lk != 413447                // Complex '--' '+'
     && lk != 413448                // Real '--' '+'
     && lk != 416178                // '[' ']' '+'
     && lk != 420303                // '{' '}' '+'
     && lk != 429315                // Identifier '++' '++'
     && lk != 429316                // Character '++' '++'
     && lk != 429317                // String '++' '++'
     && lk != 429318                // Integer '++' '++'
     && lk != 429319                // Complex '++' '++'
     && lk != 429320                // Real '++' '++'
     && lk != 429827                // Identifier '--' '++'
     && lk != 429828                // Character '--' '++'
     && lk != 429829                // String '--' '++'
     && lk != 429830                // Integer '--' '++'
     && lk != 429831                // Complex '--' '++'
     && lk != 429832                // Real '--' '++'
     && lk != 442814                // 'f32' Identifier '+='
     && lk != 442815                // 'f64' Identifier '+='
     && lk != 442819                // 'i32' Identifier '+='
     && lk != 442820                // 'i64' Identifier '+='
     && lk != 445699                // Identifier '++' '+='
     && lk != 445700                // Character '++' '+='
     && lk != 445701                // String '++' '+='
     && lk != 445702                // Integer '++' '+='
     && lk != 445703                // Complex '++' '+='
     && lk != 445704                // Real '++' '+='
     && lk != 446211                // Identifier '--' '+='
     && lk != 446212                // Character '--' '+='
     && lk != 446213                // String '--' '+='
     && lk != 446214                // Integer '--' '+='
     && lk != 446215                // Complex '--' '+='
     && lk != 446216                // Real '--' '+='
     && lk != 448946                // '[' ']' '+='
     && lk != 453071                // '{' '}' '+='
     && lk != 459198                // 'f32' Identifier ','
     && lk != 459199                // 'f64' Identifier ','
     && lk != 459203                // 'i32' Identifier ','
     && lk != 459204                // 'i64' Identifier ','
     && lk != 462083                // Identifier '++' ','
     && lk != 462084                // Character '++' ','
     && lk != 462085                // String '++' ','
     && lk != 462086                // Integer '++' ','
     && lk != 462087                // Complex '++' ','
     && lk != 462088                // Real '++' ','
     && lk != 462595                // Identifier '--' ','
     && lk != 462596                // Character '--' ','
     && lk != 462597                // String '--' ','
     && lk != 462598                // Integer '--' ','
     && lk != 462599                // Complex '--' ','
     && lk != 462600                // Real '--' ','
     && lk != 465330                // '[' ']' ','
     && lk != 469455                // '{' '}' ','
     && lk != 475582                // 'f32' Identifier '-'
     && lk != 475583                // 'f64' Identifier '-'
     && lk != 475587                // 'i32' Identifier '-'
     && lk != 475588                // 'i64' Identifier '-'
     && lk != 478467                // Identifier '++' '-'
     && lk != 478468                // Character '++' '-'
     && lk != 478469                // String '++' '-'
     && lk != 478470                // Integer '++' '-'
     && lk != 478471                // Complex '++' '-'
     && lk != 478472                // Real '++' '-'
     && lk != 478979                // Identifier '--' '-'
     && lk != 478980                // Character '--' '-'
     && lk != 478981                // String '--' '-'
     && lk != 478982                // Integer '--' '-'
     && lk != 478983                // Complex '--' '-'
     && lk != 478984                // Real '--' '-'
     && lk != 481714                // '[' ']' '-'
     && lk != 485839                // '{' '}' '-'
     && lk != 494851                // Identifier '++' '--'
     && lk != 494852                // Character '++' '--'
     && lk != 494853                // String '++' '--'
     && lk != 494854                // Integer '++' '--'
     && lk != 494855                // Complex '++' '--'
     && lk != 494856                // Real '++' '--'
     && lk != 495363                // Identifier '--' '--'
     && lk != 495364                // Character '--' '--'
     && lk != 495365                // String '--' '--'
     && lk != 495366                // Integer '--' '--'
     && lk != 495367                // Complex '--' '--'
     && lk != 495368                // Real '--' '--'
     && lk != 508350                // 'f32' Identifier '-='
     && lk != 508351                // 'f64' Identifier '-='
     && lk != 508355                // 'i32' Identifier '-='
     && lk != 508356                // 'i64' Identifier '-='
     && lk != 511235                // Identifier '++' '-='
     && lk != 511236                // Character '++' '-='
     && lk != 511237                // String '++' '-='
     && lk != 511238                // Integer '++' '-='
     && lk != 511239                // Complex '++' '-='
     && lk != 511240                // Real '++' '-='
     && lk != 511747                // Identifier '--' '-='
     && lk != 511748                // Character '--' '-='
     && lk != 511749                // String '--' '-='
     && lk != 511750                // Integer '--' '-='
     && lk != 511751                // Complex '--' '-='
     && lk != 511752                // Real '--' '-='
     && lk != 514482                // '[' ']' '-='
     && lk != 518607                // '{' '}' '-='
     && lk != 541118                // 'f32' Identifier '/'
     && lk != 541119                // 'f64' Identifier '/'
     && lk != 541123                // 'i32' Identifier '/'
     && lk != 541124                // 'i64' Identifier '/'
     && lk != 544003                // Identifier '++' '/'
     && lk != 544004                // Character '++' '/'
     && lk != 544005                // String '++' '/'
     && lk != 544006                // Integer '++' '/'
     && lk != 544007                // Complex '++' '/'
     && lk != 544008                // Real '++' '/'
     && lk != 544515                // Identifier '--' '/'
     && lk != 544516                // Character '--' '/'
     && lk != 544517                // String '--' '/'
     && lk != 544518                // Integer '--' '/'
     && lk != 544519                // Complex '--' '/'
     && lk != 544520                // Real '--' '/'
     && lk != 547250                // '[' ']' '/'
     && lk != 551375                // '{' '}' '/'
     && lk != 557502                // 'f32' Identifier '/='
     && lk != 557503                // 'f64' Identifier '/='
     && lk != 557507                // 'i32' Identifier '/='
     && lk != 557508                // 'i64' Identifier '/='
     && lk != 560387                // Identifier '++' '/='
     && lk != 560388                // Character '++' '/='
     && lk != 560389                // String '++' '/='
     && lk != 560390                // Integer '++' '/='
     && lk != 560391                // Complex '++' '/='
     && lk != 560392                // Real '++' '/='
     && lk != 560899                // Identifier '--' '/='
     && lk != 560900                // Character '--' '/='
     && lk != 560901                // String '--' '/='
     && lk != 560902                // Integer '--' '/='
     && lk != 560903                // Complex '--' '/='
     && lk != 560904                // Real '--' '/='
     && lk != 563634                // '[' ']' '/='
     && lk != 567759                // '{' '}' '/='
     && lk != 573886                // 'f32' Identifier ':'
     && lk != 573887                // 'f64' Identifier ':'
     && lk != 573891                // 'i32' Identifier ':'
     && lk != 573892                // 'i64' Identifier ':'
     && lk != 576771                // Identifier '++' ':'
     && lk != 576772                // Character '++' ':'
     && lk != 576773                // String '++' ':'
     && lk != 576774                // Integer '++' ':'
     && lk != 576775                // Complex '++' ':'
     && lk != 576776                // Real '++' ':'
     && lk != 577283                // Identifier '--' ':'
     && lk != 577284                // Character '--' ':'
     && lk != 577285                // String '--' ':'
     && lk != 577286                // Integer '--' ':'
     && lk != 577287                // Complex '--' ':'
     && lk != 577288                // Real '--' ':'
     && lk != 580018                // '[' ']' ':'
     && lk != 584143                // '{' '}' ':'
     && lk != 590270                // 'f32' Identifier ':='
     && lk != 590271                // 'f64' Identifier ':='
     && lk != 590275                // 'i32' Identifier ':='
     && lk != 590276                // 'i64' Identifier ':='
     && lk != 593155                // Identifier '++' ':='
     && lk != 593156                // Character '++' ':='
     && lk != 593157                // String '++' ':='
     && lk != 593158                // Integer '++' ':='
     && lk != 593159                // Complex '++' ':='
     && lk != 593160                // Real '++' ':='
     && lk != 593667                // Identifier '--' ':='
     && lk != 593668                // Character '--' ':='
     && lk != 593669                // String '--' ':='
     && lk != 593670                // Integer '--' ':='
     && lk != 593671                // Complex '--' ':='
     && lk != 593672                // Real '--' ':='
     && lk != 596402                // '[' ']' ':='
     && lk != 600527                // '{' '}' ':='
     && lk != 606654                // 'f32' Identifier ';'
     && lk != 606655                // 'f64' Identifier ';'
     && lk != 606659                // 'i32' Identifier ';'
     && lk != 606660                // 'i64' Identifier ';'
     && lk != 609539                // Identifier '++' ';'
     && lk != 609540                // Character '++' ';'
     && lk != 609541                // String '++' ';'
     && lk != 609542                // Integer '++' ';'
     && lk != 609543                // Complex '++' ';'
     && lk != 609544                // Real '++' ';'
     && lk != 610051                // Identifier '--' ';'
     && lk != 610052                // Character '--' ';'
     && lk != 610053                // String '--' ';'
     && lk != 610054                // Integer '--' ';'
     && lk != 610055                // Complex '--' ';'
     && lk != 610056                // Real '--' ';'
     && lk != 612786                // '[' ']' ';'
     && lk != 616911                // '{' '}' ';'
     && lk != 623038                // 'f32' Identifier '<'
     && lk != 623039                // 'f64' Identifier '<'
     && lk != 623043                // 'i32' Identifier '<'
     && lk != 623044                // 'i64' Identifier '<'
     && lk != 625923                // Identifier '++' '<'
     && lk != 625924                // Character '++' '<'
     && lk != 625925                // String '++' '<'
     && lk != 625926                // Integer '++' '<'
     && lk != 625927                // Complex '++' '<'
     && lk != 625928                // Real '++' '<'
     && lk != 626435                // Identifier '--' '<'
     && lk != 626436                // Character '--' '<'
     && lk != 626437                // String '--' '<'
     && lk != 626438                // Integer '--' '<'
     && lk != 626439                // Complex '--' '<'
     && lk != 626440                // Real '--' '<'
     && lk != 629170                // '[' ']' '<'
     && lk != 633295                // '{' '}' '<'
     && lk != 639422                // 'f32' Identifier '<<'
     && lk != 639423                // 'f64' Identifier '<<'
     && lk != 639427                // 'i32' Identifier '<<'
     && lk != 639428                // 'i64' Identifier '<<'
     && lk != 642307                // Identifier '++' '<<'
     && lk != 642308                // Character '++' '<<'
     && lk != 642309                // String '++' '<<'
     && lk != 642310                // Integer '++' '<<'
     && lk != 642311                // Complex '++' '<<'
     && lk != 642312                // Real '++' '<<'
     && lk != 642819                // Identifier '--' '<<'
     && lk != 642820                // Character '--' '<<'
     && lk != 642821                // String '--' '<<'
     && lk != 642822                // Integer '--' '<<'
     && lk != 642823                // Complex '--' '<<'
     && lk != 642824                // Real '--' '<<'
     && lk != 645554                // '[' ']' '<<'
     && lk != 649679                // '{' '}' '<<'
     && lk != 655806                // 'f32' Identifier '<<='
     && lk != 655807                // 'f64' Identifier '<<='
     && lk != 655811                // 'i32' Identifier '<<='
     && lk != 655812                // 'i64' Identifier '<<='
     && lk != 658691                // Identifier '++' '<<='
     && lk != 658692                // Character '++' '<<='
     && lk != 658693                // String '++' '<<='
     && lk != 658694                // Integer '++' '<<='
     && lk != 658695                // Complex '++' '<<='
     && lk != 658696                // Real '++' '<<='
     && lk != 659203                // Identifier '--' '<<='
     && lk != 659204                // Character '--' '<<='
     && lk != 659205                // String '--' '<<='
     && lk != 659206                // Integer '--' '<<='
     && lk != 659207                // Complex '--' '<<='
     && lk != 659208                // Real '--' '<<='
     && lk != 661938                // '[' ']' '<<='
     && lk != 666063                // '{' '}' '<<='
     && lk != 672190                // 'f32' Identifier '<='
     && lk != 672191                // 'f64' Identifier '<='
     && lk != 672195                // 'i32' Identifier '<='
     && lk != 672196                // 'i64' Identifier '<='
     && lk != 675075                // Identifier '++' '<='
     && lk != 675076                // Character '++' '<='
     && lk != 675077                // String '++' '<='
     && lk != 675078                // Integer '++' '<='
     && lk != 675079                // Complex '++' '<='
     && lk != 675080                // Real '++' '<='
     && lk != 675587                // Identifier '--' '<='
     && lk != 675588                // Character '--' '<='
     && lk != 675589                // String '--' '<='
     && lk != 675590                // Integer '--' '<='
     && lk != 675591                // Complex '--' '<='
     && lk != 675592                // Real '--' '<='
     && lk != 678322                // '[' ']' '<='
     && lk != 682447                // '{' '}' '<='
     && lk != 688574                // 'f32' Identifier '='
     && lk != 688575                // 'f64' Identifier '='
     && lk != 688579                // 'i32' Identifier '='
     && lk != 688580                // 'i64' Identifier '='
     && lk != 691459                // Identifier '++' '='
     && lk != 691460                // Character '++' '='
     && lk != 691461                // String '++' '='
     && lk != 691462                // Integer '++' '='
     && lk != 691463                // Complex '++' '='
     && lk != 691464                // Real '++' '='
     && lk != 691971                // Identifier '--' '='
     && lk != 691972                // Character '--' '='
     && lk != 691973                // String '--' '='
     && lk != 691974                // Integer '--' '='
     && lk != 691975                // Complex '--' '='
     && lk != 691976                // Real '--' '='
     && lk != 694706                // '[' ']' '='
     && lk != 698831                // '{' '}' '='
     && lk != 704958                // 'f32' Identifier '=='
     && lk != 704959                // 'f64' Identifier '=='
     && lk != 704963                // 'i32' Identifier '=='
     && lk != 704964                // 'i64' Identifier '=='
     && lk != 707843                // Identifier '++' '=='
     && lk != 707844                // Character '++' '=='
     && lk != 707845                // String '++' '=='
     && lk != 707846                // Integer '++' '=='
     && lk != 707847                // Complex '++' '=='
     && lk != 707848                // Real '++' '=='
     && lk != 708355                // Identifier '--' '=='
     && lk != 708356                // Character '--' '=='
     && lk != 708357                // String '--' '=='
     && lk != 708358                // Integer '--' '=='
     && lk != 708359                // Complex '--' '=='
     && lk != 708360                // Real '--' '=='
     && lk != 711090                // '[' ']' '=='
     && lk != 715215                // '{' '}' '=='
     && lk != 721342                // 'f32' Identifier '>'
     && lk != 721343                // 'f64' Identifier '>'
     && lk != 721347                // 'i32' Identifier '>'
     && lk != 721348                // 'i64' Identifier '>'
     && lk != 724227                // Identifier '++' '>'
     && lk != 724228                // Character '++' '>'
     && lk != 724229                // String '++' '>'
     && lk != 724230                // Integer '++' '>'
     && lk != 724231                // Complex '++' '>'
     && lk != 724232                // Real '++' '>'
     && lk != 724739                // Identifier '--' '>'
     && lk != 724740                // Character '--' '>'
     && lk != 724741                // String '--' '>'
     && lk != 724742                // Integer '--' '>'
     && lk != 724743                // Complex '--' '>'
     && lk != 724744                // Real '--' '>'
     && lk != 727474                // '[' ']' '>'
     && lk != 731599                // '{' '}' '>'
     && lk != 737726                // 'f32' Identifier '>='
     && lk != 737727                // 'f64' Identifier '>='
     && lk != 737731                // 'i32' Identifier '>='
     && lk != 737732                // 'i64' Identifier '>='
     && lk != 740611                // Identifier '++' '>='
     && lk != 740612                // Character '++' '>='
     && lk != 740613                // String '++' '>='
     && lk != 740614                // Integer '++' '>='
     && lk != 740615                // Complex '++' '>='
     && lk != 740616                // Real '++' '>='
     && lk != 741123                // Identifier '--' '>='
     && lk != 741124                // Character '--' '>='
     && lk != 741125                // String '--' '>='
     && lk != 741126                // Integer '--' '>='
     && lk != 741127                // Complex '--' '>='
     && lk != 741128                // Real '--' '>='
     && lk != 743858                // '[' ']' '>='
     && lk != 747983                // '{' '}' '>='
     && lk != 754110                // 'f32' Identifier '>>'
     && lk != 754111                // 'f64' Identifier '>>'
     && lk != 754115                // 'i32' Identifier '>>'
     && lk != 754116                // 'i64' Identifier '>>'
     && lk != 756995                // Identifier '++' '>>'
     && lk != 756996                // Character '++' '>>'
     && lk != 756997                // String '++' '>>'
     && lk != 756998                // Integer '++' '>>'
     && lk != 756999                // Complex '++' '>>'
     && lk != 757000                // Real '++' '>>'
     && lk != 757507                // Identifier '--' '>>'
     && lk != 757508                // Character '--' '>>'
     && lk != 757509                // String '--' '>>'
     && lk != 757510                // Integer '--' '>>'
     && lk != 757511                // Complex '--' '>>'
     && lk != 757512                // Real '--' '>>'
     && lk != 760242                // '[' ']' '>>'
     && lk != 764367                // '{' '}' '>>'
     && lk != 770494                // 'f32' Identifier '>>='
     && lk != 770495                // 'f64' Identifier '>>='
     && lk != 770499                // 'i32' Identifier '>>='
     && lk != 770500                // 'i64' Identifier '>>='
     && lk != 773379                // Identifier '++' '>>='
     && lk != 773380                // Character '++' '>>='
     && lk != 773381                // String '++' '>>='
     && lk != 773382                // Integer '++' '>>='
     && lk != 773383                // Complex '++' '>>='
     && lk != 773384                // Real '++' '>>='
     && lk != 773891                // Identifier '--' '>>='
     && lk != 773892                // Character '--' '>>='
     && lk != 773893                // String '--' '>>='
     && lk != 773894                // Integer '--' '>>='
     && lk != 773895                // Complex '--' '>>='
     && lk != 773896                // Real '--' '>>='
     && lk != 776626                // '[' ']' '>>='
     && lk != 780751                // '{' '}' '>>='
     && lk != 786878                // 'f32' Identifier '?'
     && lk != 786879                // 'f64' Identifier '?'
     && lk != 786883                // 'i32' Identifier '?'
     && lk != 786884                // 'i64' Identifier '?'
     && lk != 789763                // Identifier '++' '?'
     && lk != 789764                // Character '++' '?'
     && lk != 789765                // String '++' '?'
     && lk != 789766                // Integer '++' '?'
     && lk != 789767                // Complex '++' '?'
     && lk != 789768                // Real '++' '?'
     && lk != 790275                // Identifier '--' '?'
     && lk != 790276                // Character '--' '?'
     && lk != 790277                // String '--' '?'
     && lk != 790278                // Integer '--' '?'
     && lk != 790279                // Complex '--' '?'
     && lk != 790280                // Real '--' '?'
     && lk != 793010                // '[' ']' '?'
     && lk != 797135                // '{' '}' '?'
     && lk != 803262                // 'f32' Identifier '?='
     && lk != 803263                // 'f64' Identifier '?='
     && lk != 803267                // 'i32' Identifier '?='
     && lk != 803268                // 'i64' Identifier '?='
     && lk != 806147                // Identifier '++' '?='
     && lk != 806148                // Character '++' '?='
     && lk != 806149                // String '++' '?='
     && lk != 806150                // Integer '++' '?='
     && lk != 806151                // Complex '++' '?='
     && lk != 806152                // Real '++' '?='
     && lk != 806659                // Identifier '--' '?='
     && lk != 806660                // Character '--' '?='
     && lk != 806661                // String '--' '?='
     && lk != 806662                // Integer '--' '?='
     && lk != 806663                // Complex '--' '?='
     && lk != 806664                // Real '--' '?='
     && lk != 809394                // '[' ']' '?='
     && lk != 813519                // '{' '}' '?='
     && lk != 825778                // '[' ']' '['
     && lk != 829903                // '{' '}' '['
     && lk != 836030                // 'f32' Identifier ']'
     && lk != 836031                // 'f64' Identifier ']'
     && lk != 836035                // 'i32' Identifier ']'
     && lk != 836036                // 'i64' Identifier ']'
     && lk != 838915                // Identifier '++' ']'
     && lk != 838916                // Character '++' ']'
     && lk != 838917                // String '++' ']'
     && lk != 838918                // Integer '++' ']'
     && lk != 838919                // Complex '++' ']'
     && lk != 838920                // Real '++' ']'
     && lk != 839427                // Identifier '--' ']'
     && lk != 839428                // Character '--' ']'
     && lk != 839429                // String '--' ']'
     && lk != 839430                // Integer '--' ']'
     && lk != 839431                // Complex '--' ']'
     && lk != 839432                // Real '--' ']'
     && lk != 842162                // '[' ']' ']'
     && lk != 846287                // '{' '}' ']'
     && lk != 852414                // 'f32' Identifier '^'
     && lk != 852415                // 'f64' Identifier '^'
     && lk != 852419                // 'i32' Identifier '^'
     && lk != 852420                // 'i64' Identifier '^'
     && lk != 855299                // Identifier '++' '^'
     && lk != 855300                // Character '++' '^'
     && lk != 855301                // String '++' '^'
     && lk != 855302                // Integer '++' '^'
     && lk != 855303                // Complex '++' '^'
     && lk != 855304                // Real '++' '^'
     && lk != 855811                // Identifier '--' '^'
     && lk != 855812                // Character '--' '^'
     && lk != 855813                // String '--' '^'
     && lk != 855814                // Integer '--' '^'
     && lk != 855815                // Complex '--' '^'
     && lk != 855816                // Real '--' '^'
     && lk != 858546                // '[' ']' '^'
     && lk != 862671                // '{' '}' '^'
     && lk != 868798                // 'f32' Identifier '^='
     && lk != 868799                // 'f64' Identifier '^='
     && lk != 868803                // 'i32' Identifier '^='
     && lk != 868804                // 'i64' Identifier '^='
     && lk != 871683                // Identifier '++' '^='
     && lk != 871684                // Character '++' '^='
     && lk != 871685                // String '++' '^='
     && lk != 871686                // Integer '++' '^='
     && lk != 871687                // Complex '++' '^='
     && lk != 871688                // Real '++' '^='
     && lk != 872195                // Identifier '--' '^='
     && lk != 872196                // Character '--' '^='
     && lk != 872197                // String '--' '^='
     && lk != 872198                // Integer '--' '^='
     && lk != 872199                // Complex '--' '^='
     && lk != 872200                // Real '--' '^='
     && lk != 874930                // '[' ']' '^='
     && lk != 879055                // '{' '}' '^='
     && lk != 885182                // 'f32' Identifier 'break'
     && lk != 885183                // 'f64' Identifier 'break'
     && lk != 885187                // 'i32' Identifier 'break'
     && lk != 885188                // 'i64' Identifier 'break'
     && lk != 888067                // Identifier '++' 'break'
     && lk != 888068                // Character '++' 'break'
     && lk != 888069                // String '++' 'break'
     && lk != 888070                // Integer '++' 'break'
     && lk != 888071                // Complex '++' 'break'
     && lk != 888072                // Real '++' 'break'
     && lk != 888579                // Identifier '--' 'break'
     && lk != 888580                // Character '--' 'break'
     && lk != 888581                // String '--' 'break'
     && lk != 888582                // Integer '--' 'break'
     && lk != 888583                // Complex '--' 'break'
     && lk != 888584                // Real '--' 'break'
     && lk != 891314                // '[' ']' 'break'
     && lk != 895439                // '{' '}' 'break'
     && lk != 901566                // 'f32' Identifier 'case'
     && lk != 901567                // 'f64' Identifier 'case'
     && lk != 901571                // 'i32' Identifier 'case'
     && lk != 901572                // 'i64' Identifier 'case'
     && lk != 904451                // Identifier '++' 'case'
     && lk != 904452                // Character '++' 'case'
     && lk != 904453                // String '++' 'case'
     && lk != 904454                // Integer '++' 'case'
     && lk != 904455                // Complex '++' 'case'
     && lk != 904456                // Real '++' 'case'
     && lk != 904963                // Identifier '--' 'case'
     && lk != 904964                // Character '--' 'case'
     && lk != 904965                // String '--' 'case'
     && lk != 904966                // Integer '--' 'case'
     && lk != 904967                // Complex '--' 'case'
     && lk != 904968                // Real '--' 'case'
     && lk != 907698                // '[' ']' 'case'
     && lk != 911823                // '{' '}' 'case'
     && lk != 917950                // 'f32' Identifier 'catch'
     && lk != 917951                // 'f64' Identifier 'catch'
     && lk != 917955                // 'i32' Identifier 'catch'
     && lk != 917956                // 'i64' Identifier 'catch'
     && lk != 920835                // Identifier '++' 'catch'
     && lk != 920836                // Character '++' 'catch'
     && lk != 920837                // String '++' 'catch'
     && lk != 920838                // Integer '++' 'catch'
     && lk != 920839                // Complex '++' 'catch'
     && lk != 920840                // Real '++' 'catch'
     && lk != 921347                // Identifier '--' 'catch'
     && lk != 921348                // Character '--' 'catch'
     && lk != 921349                // String '--' 'catch'
     && lk != 921350                // Integer '--' 'catch'
     && lk != 921351                // Complex '--' 'catch'
     && lk != 921352                // Real '--' 'catch'
     && lk != 924082                // '[' ']' 'catch'
     && lk != 928207                // '{' '}' 'catch'
     && lk != 934334                // 'f32' Identifier 'continue'
     && lk != 934335                // 'f64' Identifier 'continue'
     && lk != 934339                // 'i32' Identifier 'continue'
     && lk != 934340                // 'i64' Identifier 'continue'
     && lk != 937219                // Identifier '++' 'continue'
     && lk != 937220                // Character '++' 'continue'
     && lk != 937221                // String '++' 'continue'
     && lk != 937222                // Integer '++' 'continue'
     && lk != 937223                // Complex '++' 'continue'
     && lk != 937224                // Real '++' 'continue'
     && lk != 937731                // Identifier '--' 'continue'
     && lk != 937732                // Character '--' 'continue'
     && lk != 937733                // String '--' 'continue'
     && lk != 937734                // Integer '--' 'continue'
     && lk != 937735                // Complex '--' 'continue'
     && lk != 937736                // Real '--' 'continue'
     && lk != 940466                // '[' ']' 'continue'
     && lk != 944591                // '{' '}' 'continue'
     && lk != 950718                // 'f32' Identifier 'default'
     && lk != 950719                // 'f64' Identifier 'default'
     && lk != 950723                // 'i32' Identifier 'default'
     && lk != 950724                // 'i64' Identifier 'default'
     && lk != 953603                // Identifier '++' 'default'
     && lk != 953604                // Character '++' 'default'
     && lk != 953605                // String '++' 'default'
     && lk != 953606                // Integer '++' 'default'
     && lk != 953607                // Complex '++' 'default'
     && lk != 953608                // Real '++' 'default'
     && lk != 954115                // Identifier '--' 'default'
     && lk != 954116                // Character '--' 'default'
     && lk != 954117                // String '--' 'default'
     && lk != 954118                // Integer '--' 'default'
     && lk != 954119                // Complex '--' 'default'
     && lk != 954120                // Real '--' 'default'
     && lk != 956850                // '[' ']' 'default'
     && lk != 960975                // '{' '}' 'default'
     && lk != 967102                // 'f32' Identifier 'do'
     && lk != 967103                // 'f64' Identifier 'do'
     && lk != 967107                // 'i32' Identifier 'do'
     && lk != 967108                // 'i64' Identifier 'do'
     && lk != 969987                // Identifier '++' 'do'
     && lk != 969988                // Character '++' 'do'
     && lk != 969989                // String '++' 'do'
     && lk != 969990                // Integer '++' 'do'
     && lk != 969991                // Complex '++' 'do'
     && lk != 969992                // Real '++' 'do'
     && lk != 970499                // Identifier '--' 'do'
     && lk != 970500                // Character '--' 'do'
     && lk != 970501                // String '--' 'do'
     && lk != 970502                // Integer '--' 'do'
     && lk != 970503                // Complex '--' 'do'
     && lk != 970504                // Real '--' 'do'
     && lk != 973234                // '[' ']' 'do'
     && lk != 977359                // '{' '}' 'do'
     && lk != 983486                // 'f32' Identifier 'else'
     && lk != 983487                // 'f64' Identifier 'else'
     && lk != 983491                // 'i32' Identifier 'else'
     && lk != 983492                // 'i64' Identifier 'else'
     && lk != 986371                // Identifier '++' 'else'
     && lk != 986372                // Character '++' 'else'
     && lk != 986373                // String '++' 'else'
     && lk != 986374                // Integer '++' 'else'
     && lk != 986375                // Complex '++' 'else'
     && lk != 986376                // Real '++' 'else'
     && lk != 986883                // Identifier '--' 'else'
     && lk != 986884                // Character '--' 'else'
     && lk != 986885                // String '--' 'else'
     && lk != 986886                // Integer '--' 'else'
     && lk != 986887                // Complex '--' 'else'
     && lk != 986888                // Real '--' 'else'
     && lk != 989618                // '[' ']' 'else'
     && lk != 993743                // '{' '}' 'else'
     && lk != 999870                // 'f32' Identifier 'export'
     && lk != 999871                // 'f64' Identifier 'export'
     && lk != 999875                // 'i32' Identifier 'export'
     && lk != 999876                // 'i64' Identifier 'export'
     && lk != 1002755               // Identifier '++' 'export'
     && lk != 1002756               // Character '++' 'export'
     && lk != 1002757               // String '++' 'export'
     && lk != 1002758               // Integer '++' 'export'
     && lk != 1002759               // Complex '++' 'export'
     && lk != 1002760               // Real '++' 'export'
     && lk != 1003267               // Identifier '--' 'export'
     && lk != 1003268               // Character '--' 'export'
     && lk != 1003269               // String '--' 'export'
     && lk != 1003270               // Integer '--' 'export'
     && lk != 1003271               // Complex '--' 'export'
     && lk != 1003272               // Real '--' 'export'
     && lk != 1006002               // '[' ']' 'export'
     && lk != 1010127               // '{' '}' 'export'
     && lk != 1016254               // 'f32' Identifier 'f32'
     && lk != 1016255               // 'f64' Identifier 'f32'
     && lk != 1016259               // 'i32' Identifier 'f32'
     && lk != 1016260               // 'i64' Identifier 'f32'
     && lk != 1022386               // '[' ']' 'f32'
     && lk != 1026511               // '{' '}' 'f32'
     && lk != 1032638               // 'f32' Identifier 'f64'
     && lk != 1032639               // 'f64' Identifier 'f64'
     && lk != 1032643               // 'i32' Identifier 'f64'
     && lk != 1032644               // 'i64' Identifier 'f64'
     && lk != 1038770               // '[' ']' 'f64'
     && lk != 1042895               // '{' '}' 'f64'
     && lk != 1049022               // 'f32' Identifier 'for'
     && lk != 1049023               // 'f64' Identifier 'for'
     && lk != 1049027               // 'i32' Identifier 'for'
     && lk != 1049028               // 'i64' Identifier 'for'
     && lk != 1051907               // Identifier '++' 'for'
     && lk != 1051908               // Character '++' 'for'
     && lk != 1051909               // String '++' 'for'
     && lk != 1051910               // Integer '++' 'for'
     && lk != 1051911               // Complex '++' 'for'
     && lk != 1051912               // Real '++' 'for'
     && lk != 1052419               // Identifier '--' 'for'
     && lk != 1052420               // Character '--' 'for'
     && lk != 1052421               // String '--' 'for'
     && lk != 1052422               // Integer '--' 'for'
     && lk != 1052423               // Complex '--' 'for'
     && lk != 1052424               // Real '--' 'for'
     && lk != 1055154               // '[' ']' 'for'
     && lk != 1059279               // '{' '}' 'for'
     && lk != 1065406               // 'f32' Identifier 'foreach'
     && lk != 1065407               // 'f64' Identifier 'foreach'
     && lk != 1065411               // 'i32' Identifier 'foreach'
     && lk != 1065412               // 'i64' Identifier 'foreach'
     && lk != 1068291               // Identifier '++' 'foreach'
     && lk != 1068292               // Character '++' 'foreach'
     && lk != 1068293               // String '++' 'foreach'
     && lk != 1068294               // Integer '++' 'foreach'
     && lk != 1068295               // Complex '++' 'foreach'
     && lk != 1068296               // Real '++' 'foreach'
     && lk != 1068803               // Identifier '--' 'foreach'
     && lk != 1068804               // Character '--' 'foreach'
     && lk != 1068805               // String '--' 'foreach'
     && lk != 1068806               // Integer '--' 'foreach'
     && lk != 1068807               // Complex '--' 'foreach'
     && lk != 1068808               // Real '--' 'foreach'
     && lk != 1071538               // '[' ']' 'foreach'
     && lk != 1075663               // '{' '}' 'foreach'
     && lk != 1081790               // 'f32' Identifier 'global'
     && lk != 1081791               // 'f64' Identifier 'global'
     && lk != 1081795               // 'i32' Identifier 'global'
     && lk != 1081796               // 'i64' Identifier 'global'
     && lk != 1084675               // Identifier '++' 'global'
     && lk != 1084676               // Character '++' 'global'
     && lk != 1084677               // String '++' 'global'
     && lk != 1084678               // Integer '++' 'global'
     && lk != 1084679               // Complex '++' 'global'
     && lk != 1084680               // Real '++' 'global'
     && lk != 1085187               // Identifier '--' 'global'
     && lk != 1085188               // Character '--' 'global'
     && lk != 1085189               // String '--' 'global'
     && lk != 1085190               // Integer '--' 'global'
     && lk != 1085191               // Complex '--' 'global'
     && lk != 1085192               // Real '--' 'global'
     && lk != 1087922               // '[' ']' 'global'
     && lk != 1092047               // '{' '}' 'global'
     && lk != 1098174               // 'f32' Identifier 'i32'
     && lk != 1098175               // 'f64' Identifier 'i32'
     && lk != 1098179               // 'i32' Identifier 'i32'
     && lk != 1098180               // 'i64' Identifier 'i32'
     && lk != 1104306               // '[' ']' 'i32'
     && lk != 1108431               // '{' '}' 'i32'
     && lk != 1114558               // 'f32' Identifier 'i64'
     && lk != 1114559               // 'f64' Identifier 'i64'
     && lk != 1114563               // 'i32' Identifier 'i64'
     && lk != 1114564               // 'i64' Identifier 'i64'
     && lk != 1120690               // '[' ']' 'i64'
     && lk != 1124815               // '{' '}' 'i64'
     && lk != 1130942               // 'f32' Identifier 'if'
     && lk != 1130943               // 'f64' Identifier 'if'
     && lk != 1130947               // 'i32' Identifier 'if'
     && lk != 1130948               // 'i64' Identifier 'if'
     && lk != 1133827               // Identifier '++' 'if'
     && lk != 1133828               // Character '++' 'if'
     && lk != 1133829               // String '++' 'if'
     && lk != 1133830               // Integer '++' 'if'
     && lk != 1133831               // Complex '++' 'if'
     && lk != 1133832               // Real '++' 'if'
     && lk != 1134339               // Identifier '--' 'if'
     && lk != 1134340               // Character '--' 'if'
     && lk != 1134341               // String '--' 'if'
     && lk != 1134342               // Integer '--' 'if'
     && lk != 1134343               // Complex '--' 'if'
     && lk != 1134344               // Real '--' 'if'
     && lk != 1137074               // '[' ']' 'if'
     && lk != 1141199               // '{' '}' 'if'
     && lk != 1147326               // 'f32' Identifier 'import'
     && lk != 1147327               // 'f64' Identifier 'import'
     && lk != 1147331               // 'i32' Identifier 'import'
     && lk != 1147332               // 'i64' Identifier 'import'
     && lk != 1150211               // Identifier '++' 'import'
     && lk != 1150212               // Character '++' 'import'
     && lk != 1150213               // String '++' 'import'
     && lk != 1150214               // Integer '++' 'import'
     && lk != 1150215               // Complex '++' 'import'
     && lk != 1150216               // Real '++' 'import'
     && lk != 1150723               // Identifier '--' 'import'
     && lk != 1150724               // Character '--' 'import'
     && lk != 1150725               // String '--' 'import'
     && lk != 1150726               // Integer '--' 'import'
     && lk != 1150727               // Complex '--' 'import'
     && lk != 1150728               // Real '--' 'import'
     && lk != 1153458               // '[' ']' 'import'
     && lk != 1157583               // '{' '}' 'import'
     && lk != 1163710               // 'f32' Identifier 'include'
     && lk != 1163711               // 'f64' Identifier 'include'
     && lk != 1163715               // 'i32' Identifier 'include'
     && lk != 1163716               // 'i64' Identifier 'include'
     && lk != 1166595               // Identifier '++' 'include'
     && lk != 1166596               // Character '++' 'include'
     && lk != 1166597               // String '++' 'include'
     && lk != 1166598               // Integer '++' 'include'
     && lk != 1166599               // Complex '++' 'include'
     && lk != 1166600               // Real '++' 'include'
     && lk != 1167107               // Identifier '--' 'include'
     && lk != 1167108               // Character '--' 'include'
     && lk != 1167109               // String '--' 'include'
     && lk != 1167110               // Integer '--' 'include'
     && lk != 1167111               // Complex '--' 'include'
     && lk != 1167112               // Real '--' 'include'
     && lk != 1169842               // '[' ']' 'include'
     && lk != 1173967               // '{' '}' 'include'
     && lk != 1180094               // 'f32' Identifier 'local'
     && lk != 1180095               // 'f64' Identifier 'local'
     && lk != 1180099               // 'i32' Identifier 'local'
     && lk != 1180100               // 'i64' Identifier 'local'
     && lk != 1182979               // Identifier '++' 'local'
     && lk != 1182980               // Character '++' 'local'
     && lk != 1182981               // String '++' 'local'
     && lk != 1182982               // Integer '++' 'local'
     && lk != 1182983               // Complex '++' 'local'
     && lk != 1182984               // Real '++' 'local'
     && lk != 1183491               // Identifier '--' 'local'
     && lk != 1183492               // Character '--' 'local'
     && lk != 1183493               // String '--' 'local'
     && lk != 1183494               // Integer '--' 'local'
     && lk != 1183495               // Complex '--' 'local'
     && lk != 1183496               // Real '--' 'local'
     && lk != 1186226               // '[' ']' 'local'
     && lk != 1190351               // '{' '}' 'local'
     && lk != 1196478               // 'f32' Identifier 'return'
     && lk != 1196479               // 'f64' Identifier 'return'
     && lk != 1196483               // 'i32' Identifier 'return'
     && lk != 1196484               // 'i64' Identifier 'return'
     && lk != 1199363               // Identifier '++' 'return'
     && lk != 1199364               // Character '++' 'return'
     && lk != 1199365               // String '++' 'return'
     && lk != 1199366               // Integer '++' 'return'
     && lk != 1199367               // Complex '++' 'return'
     && lk != 1199368               // Real '++' 'return'
     && lk != 1199875               // Identifier '--' 'return'
     && lk != 1199876               // Character '--' 'return'
     && lk != 1199877               // String '--' 'return'
     && lk != 1199878               // Integer '--' 'return'
     && lk != 1199879               // Complex '--' 'return'
     && lk != 1199880               // Real '--' 'return'
     && lk != 1202610               // '[' ']' 'return'
     && lk != 1206735               // '{' '}' 'return'
     && lk != 1212862               // 'f32' Identifier 'switch'
     && lk != 1212863               // 'f64' Identifier 'switch'
     && lk != 1212867               // 'i32' Identifier 'switch'
     && lk != 1212868               // 'i64' Identifier 'switch'
     && lk != 1215747               // Identifier '++' 'switch'
     && lk != 1215748               // Character '++' 'switch'
     && lk != 1215749               // String '++' 'switch'
     && lk != 1215750               // Integer '++' 'switch'
     && lk != 1215751               // Complex '++' 'switch'
     && lk != 1215752               // Real '++' 'switch'
     && lk != 1216259               // Identifier '--' 'switch'
     && lk != 1216260               // Character '--' 'switch'
     && lk != 1216261               // String '--' 'switch'
     && lk != 1216262               // Integer '--' 'switch'
     && lk != 1216263               // Complex '--' 'switch'
     && lk != 1216264               // Real '--' 'switch'
     && lk != 1218994               // '[' ']' 'switch'
     && lk != 1223119               // '{' '}' 'switch'
     && lk != 1229246               // 'f32' Identifier 'test'
     && lk != 1229247               // 'f64' Identifier 'test'
     && lk != 1229251               // 'i32' Identifier 'test'
     && lk != 1229252               // 'i64' Identifier 'test'
     && lk != 1232131               // Identifier '++' 'test'
     && lk != 1232132               // Character '++' 'test'
     && lk != 1232133               // String '++' 'test'
     && lk != 1232134               // Integer '++' 'test'
     && lk != 1232135               // Complex '++' 'test'
     && lk != 1232136               // Real '++' 'test'
     && lk != 1232643               // Identifier '--' 'test'
     && lk != 1232644               // Character '--' 'test'
     && lk != 1232645               // String '--' 'test'
     && lk != 1232646               // Integer '--' 'test'
     && lk != 1232647               // Complex '--' 'test'
     && lk != 1232648               // Real '--' 'test'
     && lk != 1235378               // '[' ']' 'test'
     && lk != 1239503               // '{' '}' 'test'
     && lk != 1245630               // 'f32' Identifier 'throw'
     && lk != 1245631               // 'f64' Identifier 'throw'
     && lk != 1245635               // 'i32' Identifier 'throw'
     && lk != 1245636               // 'i64' Identifier 'throw'
     && lk != 1248515               // Identifier '++' 'throw'
     && lk != 1248516               // Character '++' 'throw'
     && lk != 1248517               // String '++' 'throw'
     && lk != 1248518               // Integer '++' 'throw'
     && lk != 1248519               // Complex '++' 'throw'
     && lk != 1248520               // Real '++' 'throw'
     && lk != 1249027               // Identifier '--' 'throw'
     && lk != 1249028               // Character '--' 'throw'
     && lk != 1249029               // String '--' 'throw'
     && lk != 1249030               // Integer '--' 'throw'
     && lk != 1249031               // Complex '--' 'throw'
     && lk != 1249032               // Real '--' 'throw'
     && lk != 1251762               // '[' ']' 'throw'
     && lk != 1255887               // '{' '}' 'throw'
     && lk != 1262014               // 'f32' Identifier 'try'
     && lk != 1262015               // 'f64' Identifier 'try'
     && lk != 1262019               // 'i32' Identifier 'try'
     && lk != 1262020               // 'i64' Identifier 'try'
     && lk != 1264899               // Identifier '++' 'try'
     && lk != 1264900               // Character '++' 'try'
     && lk != 1264901               // String '++' 'try'
     && lk != 1264902               // Integer '++' 'try'
     && lk != 1264903               // Complex '++' 'try'
     && lk != 1264904               // Real '++' 'try'
     && lk != 1265411               // Identifier '--' 'try'
     && lk != 1265412               // Character '--' 'try'
     && lk != 1265413               // String '--' 'try'
     && lk != 1265414               // Integer '--' 'try'
     && lk != 1265415               // Complex '--' 'try'
     && lk != 1265416               // Real '--' 'try'
     && lk != 1268146               // '[' ']' 'try'
     && lk != 1272271               // '{' '}' 'try'
     && lk != 1278398               // 'f32' Identifier 'while'
     && lk != 1278399               // 'f64' Identifier 'while'
     && lk != 1278403               // 'i32' Identifier 'while'
     && lk != 1278404               // 'i64' Identifier 'while'
     && lk != 1281283               // Identifier '++' 'while'
     && lk != 1281284               // Character '++' 'while'
     && lk != 1281285               // String '++' 'while'
     && lk != 1281286               // Integer '++' 'while'
     && lk != 1281287               // Complex '++' 'while'
     && lk != 1281288               // Real '++' 'while'
     && lk != 1281795               // Identifier '--' 'while'
     && lk != 1281796               // Character '--' 'while'
     && lk != 1281797               // String '--' 'while'
     && lk != 1281798               // Integer '--' 'while'
     && lk != 1281799               // Complex '--' 'while'
     && lk != 1281800               // Real '--' 'while'
     && lk != 1284530               // '[' ']' 'while'
     && lk != 1288655               // '{' '}' 'while'
     && lk != 1294782               // 'f32' Identifier '{'
     && lk != 1294783               // 'f64' Identifier '{'
     && lk != 1294787               // 'i32' Identifier '{'
     && lk != 1294788               // 'i64' Identifier '{'
     && lk != 1300914               // '[' ']' '{'
     && lk != 1305039               // '{' '}' '{'
     && lk != 1311166               // 'f32' Identifier '|'
     && lk != 1311167               // 'f64' Identifier '|'
     && lk != 1311171               // 'i32' Identifier '|'
     && lk != 1311172               // 'i64' Identifier '|'
     && lk != 1314051               // Identifier '++' '|'
     && lk != 1314052               // Character '++' '|'
     && lk != 1314053               // String '++' '|'
     && lk != 1314054               // Integer '++' '|'
     && lk != 1314055               // Complex '++' '|'
     && lk != 1314056               // Real '++' '|'
     && lk != 1314563               // Identifier '--' '|'
     && lk != 1314564               // Character '--' '|'
     && lk != 1314565               // String '--' '|'
     && lk != 1314566               // Integer '--' '|'
     && lk != 1314567               // Complex '--' '|'
     && lk != 1314568               // Real '--' '|'
     && lk != 1317298               // '[' ']' '|'
     && lk != 1321423               // '{' '}' '|'
     && lk != 1327550               // 'f32' Identifier '|='
     && lk != 1327551               // 'f64' Identifier '|='
     && lk != 1327555               // 'i32' Identifier '|='
     && lk != 1327556               // 'i64' Identifier '|='
     && lk != 1330435               // Identifier '++' '|='
     && lk != 1330436               // Character '++' '|='
     && lk != 1330437               // String '++' '|='
     && lk != 1330438               // Integer '++' '|='
     && lk != 1330439               // Complex '++' '|='
     && lk != 1330440               // Real '++' '|='
     && lk != 1330947               // Identifier '--' '|='
     && lk != 1330948               // Character '--' '|='
     && lk != 1330949               // String '--' '|='
     && lk != 1330950               // Integer '--' '|='
     && lk != 1330951               // Complex '--' '|='
     && lk != 1330952               // Real '--' '|='
     && lk != 1333682               // '[' ']' '|='
     && lk != 1337807               // '{' '}' '|='
     && lk != 1343934               // 'f32' Identifier '||'
     && lk != 1343935               // 'f64' Identifier '||'
     && lk != 1343939               // 'i32' Identifier '||'
     && lk != 1343940               // 'i64' Identifier '||'
     && lk != 1346819               // Identifier '++' '||'
     && lk != 1346820               // Character '++' '||'
     && lk != 1346821               // String '++' '||'
     && lk != 1346822               // Integer '++' '||'
     && lk != 1346823               // Complex '++' '||'
     && lk != 1346824               // Real '++' '||'
     && lk != 1347331               // Identifier '--' '||'
     && lk != 1347332               // Character '--' '||'
     && lk != 1347333               // String '--' '||'
     && lk != 1347334               // Integer '--' '||'
     && lk != 1347335               // Complex '--' '||'
     && lk != 1347336               // Real '--' '||'
     && lk != 1350066               // '[' ']' '||'
     && lk != 1354191               // '{' '}' '||'
     && lk != 1360318               // 'f32' Identifier '}'
     && lk != 1360319               // 'f64' Identifier '}'
     && lk != 1360323               // 'i32' Identifier '}'
     && lk != 1360324               // 'i64' Identifier '}'
     && lk != 1363203               // Identifier '++' '}'
     && lk != 1363204               // Character '++' '}'
     && lk != 1363205               // String '++' '}'
     && lk != 1363206               // Integer '++' '}'
     && lk != 1363207               // Complex '++' '}'
     && lk != 1363208               // Real '++' '}'
     && lk != 1363715               // Identifier '--' '}'
     && lk != 1363716               // Character '--' '}'
     && lk != 1363717               // String '--' '}'
     && lk != 1363718               // Integer '--' '}'
     && lk != 1363719               // Complex '--' '}'
     && lk != 1363720               // Real '--' '}'
     && lk != 1366450               // '[' ']' '}'
     && lk != 1370575               // '{' '}' '}'
     && lk != 1376702               // 'f32' Identifier '~'
     && lk != 1376703               // 'f64' Identifier '~'
     && lk != 1376707               // 'i32' Identifier '~'
     && lk != 1376708               // 'i64' Identifier '~'
     && lk != 1379587               // Identifier '++' '~'
     && lk != 1379588               // Character '++' '~'
     && lk != 1379589               // String '++' '~'
     && lk != 1379590               // Integer '++' '~'
     && lk != 1379591               // Complex '++' '~'
     && lk != 1379592               // Real '++' '~'
     && lk != 1380099               // Identifier '--' '~'
     && lk != 1380100               // Character '--' '~'
     && lk != 1380101               // String '--' '~'
     && lk != 1380102               // Integer '--' '~'
     && lk != 1380103               // Complex '--' '~'
     && lk != 1380104               // Real '--' '~'
     && lk != 1382834               // '[' ']' '~'
     && lk != 1386959)              // '{' '}' '~'
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
          try_Primary();
          lookahead1W(5);           // WhiteSpace^token | '++'
          consumeT(26);             // '++'
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
            try_Primary();
            lookahead1W(6);         // WhiteSpace^token | '--'
            consumeT(30);           // '--'
            lk = -2;
          }
          catch (p2A)
          {
            lk = -9;
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
    case 19715:                     // Identifier '++' END
    case 19716:                     // Character '++' END
    case 19717:                     // String '++' END
    case 19718:                     // Integer '++' END
    case 19719:                     // Complex '++' END
    case 19720:                     // Real '++' END
    case 150787:                    // Identifier '++' Comment
    case 150788:                    // Character '++' Comment
    case 150789:                    // String '++' Comment
    case 150790:                    // Integer '++' Comment
    case 150791:                    // Complex '++' Comment
    case 150792:                    // Real '++' Comment
    case 199939:                    // Identifier '++' '!'
    case 199940:                    // Character '++' '!'
    case 199941:                    // String '++' '!'
    case 199942:                    // Integer '++' '!'
    case 199943:                    // Complex '++' '!'
    case 199944:                    // Real '++' '!'
    case 216323:                    // Identifier '++' '!='
    case 216324:                    // Character '++' '!='
    case 216325:                    // String '++' '!='
    case 216326:                    // Integer '++' '!='
    case 216327:                    // Complex '++' '!='
    case 216328:                    // Real '++' '!='
    case 249091:                    // Identifier '++' '%'
    case 249092:                    // Character '++' '%'
    case 249093:                    // String '++' '%'
    case 249094:                    // Integer '++' '%'
    case 249095:                    // Complex '++' '%'
    case 249096:                    // Real '++' '%'
    case 265475:                    // Identifier '++' '%='
    case 265476:                    // Character '++' '%='
    case 265477:                    // String '++' '%='
    case 265478:                    // Integer '++' '%='
    case 265479:                    // Complex '++' '%='
    case 265480:                    // Real '++' '%='
    case 281859:                    // Identifier '++' '&'
    case 281860:                    // Character '++' '&'
    case 281861:                    // String '++' '&'
    case 281862:                    // Integer '++' '&'
    case 281863:                    // Complex '++' '&'
    case 281864:                    // Real '++' '&'
    case 298243:                    // Identifier '++' '&&'
    case 298244:                    // Character '++' '&&'
    case 298245:                    // String '++' '&&'
    case 298246:                    // Integer '++' '&&'
    case 298247:                    // Complex '++' '&&'
    case 298248:                    // Real '++' '&&'
    case 314627:                    // Identifier '++' '&='
    case 314628:                    // Character '++' '&='
    case 314629:                    // String '++' '&='
    case 314630:                    // Integer '++' '&='
    case 314631:                    // Complex '++' '&='
    case 314632:                    // Real '++' '&='
    case 347395:                    // Identifier '++' ')'
    case 347396:                    // Character '++' ')'
    case 347397:                    // String '++' ')'
    case 347398:                    // Integer '++' ')'
    case 347399:                    // Complex '++' ')'
    case 347400:                    // Real '++' ')'
    case 363779:                    // Identifier '++' '*'
    case 363780:                    // Character '++' '*'
    case 363781:                    // String '++' '*'
    case 363782:                    // Integer '++' '*'
    case 363783:                    // Complex '++' '*'
    case 363784:                    // Real '++' '*'
    case 380163:                    // Identifier '++' '**'
    case 380164:                    // Character '++' '**'
    case 380165:                    // String '++' '**'
    case 380166:                    // Integer '++' '**'
    case 380167:                    // Complex '++' '**'
    case 380168:                    // Real '++' '**'
    case 396547:                    // Identifier '++' '*='
    case 396548:                    // Character '++' '*='
    case 396549:                    // String '++' '*='
    case 396550:                    // Integer '++' '*='
    case 396551:                    // Complex '++' '*='
    case 396552:                    // Real '++' '*='
    case 412931:                    // Identifier '++' '+'
    case 412932:                    // Character '++' '+'
    case 412933:                    // String '++' '+'
    case 412934:                    // Integer '++' '+'
    case 412935:                    // Complex '++' '+'
    case 412936:                    // Real '++' '+'
    case 429315:                    // Identifier '++' '++'
    case 429316:                    // Character '++' '++'
    case 429317:                    // String '++' '++'
    case 429318:                    // Integer '++' '++'
    case 429319:                    // Complex '++' '++'
    case 429320:                    // Real '++' '++'
    case 445699:                    // Identifier '++' '+='
    case 445700:                    // Character '++' '+='
    case 445701:                    // String '++' '+='
    case 445702:                    // Integer '++' '+='
    case 445703:                    // Complex '++' '+='
    case 445704:                    // Real '++' '+='
    case 462083:                    // Identifier '++' ','
    case 462084:                    // Character '++' ','
    case 462085:                    // String '++' ','
    case 462086:                    // Integer '++' ','
    case 462087:                    // Complex '++' ','
    case 462088:                    // Real '++' ','
    case 478467:                    // Identifier '++' '-'
    case 478468:                    // Character '++' '-'
    case 478469:                    // String '++' '-'
    case 478470:                    // Integer '++' '-'
    case 478471:                    // Complex '++' '-'
    case 478472:                    // Real '++' '-'
    case 494851:                    // Identifier '++' '--'
    case 494852:                    // Character '++' '--'
    case 494853:                    // String '++' '--'
    case 494854:                    // Integer '++' '--'
    case 494855:                    // Complex '++' '--'
    case 494856:                    // Real '++' '--'
    case 511235:                    // Identifier '++' '-='
    case 511236:                    // Character '++' '-='
    case 511237:                    // String '++' '-='
    case 511238:                    // Integer '++' '-='
    case 511239:                    // Complex '++' '-='
    case 511240:                    // Real '++' '-='
    case 544003:                    // Identifier '++' '/'
    case 544004:                    // Character '++' '/'
    case 544005:                    // String '++' '/'
    case 544006:                    // Integer '++' '/'
    case 544007:                    // Complex '++' '/'
    case 544008:                    // Real '++' '/'
    case 560387:                    // Identifier '++' '/='
    case 560388:                    // Character '++' '/='
    case 560389:                    // String '++' '/='
    case 560390:                    // Integer '++' '/='
    case 560391:                    // Complex '++' '/='
    case 560392:                    // Real '++' '/='
    case 576771:                    // Identifier '++' ':'
    case 576772:                    // Character '++' ':'
    case 576773:                    // String '++' ':'
    case 576774:                    // Integer '++' ':'
    case 576775:                    // Complex '++' ':'
    case 576776:                    // Real '++' ':'
    case 593155:                    // Identifier '++' ':='
    case 593156:                    // Character '++' ':='
    case 593157:                    // String '++' ':='
    case 593158:                    // Integer '++' ':='
    case 593159:                    // Complex '++' ':='
    case 593160:                    // Real '++' ':='
    case 609539:                    // Identifier '++' ';'
    case 609540:                    // Character '++' ';'
    case 609541:                    // String '++' ';'
    case 609542:                    // Integer '++' ';'
    case 609543:                    // Complex '++' ';'
    case 609544:                    // Real '++' ';'
    case 625923:                    // Identifier '++' '<'
    case 625924:                    // Character '++' '<'
    case 625925:                    // String '++' '<'
    case 625926:                    // Integer '++' '<'
    case 625927:                    // Complex '++' '<'
    case 625928:                    // Real '++' '<'
    case 642307:                    // Identifier '++' '<<'
    case 642308:                    // Character '++' '<<'
    case 642309:                    // String '++' '<<'
    case 642310:                    // Integer '++' '<<'
    case 642311:                    // Complex '++' '<<'
    case 642312:                    // Real '++' '<<'
    case 658691:                    // Identifier '++' '<<='
    case 658692:                    // Character '++' '<<='
    case 658693:                    // String '++' '<<='
    case 658694:                    // Integer '++' '<<='
    case 658695:                    // Complex '++' '<<='
    case 658696:                    // Real '++' '<<='
    case 675075:                    // Identifier '++' '<='
    case 675076:                    // Character '++' '<='
    case 675077:                    // String '++' '<='
    case 675078:                    // Integer '++' '<='
    case 675079:                    // Complex '++' '<='
    case 675080:                    // Real '++' '<='
    case 691459:                    // Identifier '++' '='
    case 691460:                    // Character '++' '='
    case 691461:                    // String '++' '='
    case 691462:                    // Integer '++' '='
    case 691463:                    // Complex '++' '='
    case 691464:                    // Real '++' '='
    case 707843:                    // Identifier '++' '=='
    case 707844:                    // Character '++' '=='
    case 707845:                    // String '++' '=='
    case 707846:                    // Integer '++' '=='
    case 707847:                    // Complex '++' '=='
    case 707848:                    // Real '++' '=='
    case 724227:                    // Identifier '++' '>'
    case 724228:                    // Character '++' '>'
    case 724229:                    // String '++' '>'
    case 724230:                    // Integer '++' '>'
    case 724231:                    // Complex '++' '>'
    case 724232:                    // Real '++' '>'
    case 740611:                    // Identifier '++' '>='
    case 740612:                    // Character '++' '>='
    case 740613:                    // String '++' '>='
    case 740614:                    // Integer '++' '>='
    case 740615:                    // Complex '++' '>='
    case 740616:                    // Real '++' '>='
    case 756995:                    // Identifier '++' '>>'
    case 756996:                    // Character '++' '>>'
    case 756997:                    // String '++' '>>'
    case 756998:                    // Integer '++' '>>'
    case 756999:                    // Complex '++' '>>'
    case 757000:                    // Real '++' '>>'
    case 773379:                    // Identifier '++' '>>='
    case 773380:                    // Character '++' '>>='
    case 773381:                    // String '++' '>>='
    case 773382:                    // Integer '++' '>>='
    case 773383:                    // Complex '++' '>>='
    case 773384:                    // Real '++' '>>='
    case 789763:                    // Identifier '++' '?'
    case 789764:                    // Character '++' '?'
    case 789765:                    // String '++' '?'
    case 789766:                    // Integer '++' '?'
    case 789767:                    // Complex '++' '?'
    case 789768:                    // Real '++' '?'
    case 806147:                    // Identifier '++' '?='
    case 806148:                    // Character '++' '?='
    case 806149:                    // String '++' '?='
    case 806150:                    // Integer '++' '?='
    case 806151:                    // Complex '++' '?='
    case 806152:                    // Real '++' '?='
    case 838915:                    // Identifier '++' ']'
    case 838916:                    // Character '++' ']'
    case 838917:                    // String '++' ']'
    case 838918:                    // Integer '++' ']'
    case 838919:                    // Complex '++' ']'
    case 838920:                    // Real '++' ']'
    case 855299:                    // Identifier '++' '^'
    case 855300:                    // Character '++' '^'
    case 855301:                    // String '++' '^'
    case 855302:                    // Integer '++' '^'
    case 855303:                    // Complex '++' '^'
    case 855304:                    // Real '++' '^'
    case 871683:                    // Identifier '++' '^='
    case 871684:                    // Character '++' '^='
    case 871685:                    // String '++' '^='
    case 871686:                    // Integer '++' '^='
    case 871687:                    // Complex '++' '^='
    case 871688:                    // Real '++' '^='
    case 888067:                    // Identifier '++' 'break'
    case 888068:                    // Character '++' 'break'
    case 888069:                    // String '++' 'break'
    case 888070:                    // Integer '++' 'break'
    case 888071:                    // Complex '++' 'break'
    case 888072:                    // Real '++' 'break'
    case 904451:                    // Identifier '++' 'case'
    case 904452:                    // Character '++' 'case'
    case 904453:                    // String '++' 'case'
    case 904454:                    // Integer '++' 'case'
    case 904455:                    // Complex '++' 'case'
    case 904456:                    // Real '++' 'case'
    case 920835:                    // Identifier '++' 'catch'
    case 920836:                    // Character '++' 'catch'
    case 920837:                    // String '++' 'catch'
    case 920838:                    // Integer '++' 'catch'
    case 920839:                    // Complex '++' 'catch'
    case 920840:                    // Real '++' 'catch'
    case 937219:                    // Identifier '++' 'continue'
    case 937220:                    // Character '++' 'continue'
    case 937221:                    // String '++' 'continue'
    case 937222:                    // Integer '++' 'continue'
    case 937223:                    // Complex '++' 'continue'
    case 937224:                    // Real '++' 'continue'
    case 953603:                    // Identifier '++' 'default'
    case 953604:                    // Character '++' 'default'
    case 953605:                    // String '++' 'default'
    case 953606:                    // Integer '++' 'default'
    case 953607:                    // Complex '++' 'default'
    case 953608:                    // Real '++' 'default'
    case 969987:                    // Identifier '++' 'do'
    case 969988:                    // Character '++' 'do'
    case 969989:                    // String '++' 'do'
    case 969990:                    // Integer '++' 'do'
    case 969991:                    // Complex '++' 'do'
    case 969992:                    // Real '++' 'do'
    case 986371:                    // Identifier '++' 'else'
    case 986372:                    // Character '++' 'else'
    case 986373:                    // String '++' 'else'
    case 986374:                    // Integer '++' 'else'
    case 986375:                    // Complex '++' 'else'
    case 986376:                    // Real '++' 'else'
    case 1002755:                   // Identifier '++' 'export'
    case 1002756:                   // Character '++' 'export'
    case 1002757:                   // String '++' 'export'
    case 1002758:                   // Integer '++' 'export'
    case 1002759:                   // Complex '++' 'export'
    case 1002760:                   // Real '++' 'export'
    case 1051907:                   // Identifier '++' 'for'
    case 1051908:                   // Character '++' 'for'
    case 1051909:                   // String '++' 'for'
    case 1051910:                   // Integer '++' 'for'
    case 1051911:                   // Complex '++' 'for'
    case 1051912:                   // Real '++' 'for'
    case 1068291:                   // Identifier '++' 'foreach'
    case 1068292:                   // Character '++' 'foreach'
    case 1068293:                   // String '++' 'foreach'
    case 1068294:                   // Integer '++' 'foreach'
    case 1068295:                   // Complex '++' 'foreach'
    case 1068296:                   // Real '++' 'foreach'
    case 1084675:                   // Identifier '++' 'global'
    case 1084676:                   // Character '++' 'global'
    case 1084677:                   // String '++' 'global'
    case 1084678:                   // Integer '++' 'global'
    case 1084679:                   // Complex '++' 'global'
    case 1084680:                   // Real '++' 'global'
    case 1133827:                   // Identifier '++' 'if'
    case 1133828:                   // Character '++' 'if'
    case 1133829:                   // String '++' 'if'
    case 1133830:                   // Integer '++' 'if'
    case 1133831:                   // Complex '++' 'if'
    case 1133832:                   // Real '++' 'if'
    case 1150211:                   // Identifier '++' 'import'
    case 1150212:                   // Character '++' 'import'
    case 1150213:                   // String '++' 'import'
    case 1150214:                   // Integer '++' 'import'
    case 1150215:                   // Complex '++' 'import'
    case 1150216:                   // Real '++' 'import'
    case 1166595:                   // Identifier '++' 'include'
    case 1166596:                   // Character '++' 'include'
    case 1166597:                   // String '++' 'include'
    case 1166598:                   // Integer '++' 'include'
    case 1166599:                   // Complex '++' 'include'
    case 1166600:                   // Real '++' 'include'
    case 1182979:                   // Identifier '++' 'local'
    case 1182980:                   // Character '++' 'local'
    case 1182981:                   // String '++' 'local'
    case 1182982:                   // Integer '++' 'local'
    case 1182983:                   // Complex '++' 'local'
    case 1182984:                   // Real '++' 'local'
    case 1199363:                   // Identifier '++' 'return'
    case 1199364:                   // Character '++' 'return'
    case 1199365:                   // String '++' 'return'
    case 1199366:                   // Integer '++' 'return'
    case 1199367:                   // Complex '++' 'return'
    case 1199368:                   // Real '++' 'return'
    case 1215747:                   // Identifier '++' 'switch'
    case 1215748:                   // Character '++' 'switch'
    case 1215749:                   // String '++' 'switch'
    case 1215750:                   // Integer '++' 'switch'
    case 1215751:                   // Complex '++' 'switch'
    case 1215752:                   // Real '++' 'switch'
    case 1232131:                   // Identifier '++' 'test'
    case 1232132:                   // Character '++' 'test'
    case 1232133:                   // String '++' 'test'
    case 1232134:                   // Integer '++' 'test'
    case 1232135:                   // Complex '++' 'test'
    case 1232136:                   // Real '++' 'test'
    case 1248515:                   // Identifier '++' 'throw'
    case 1248516:                   // Character '++' 'throw'
    case 1248517:                   // String '++' 'throw'
    case 1248518:                   // Integer '++' 'throw'
    case 1248519:                   // Complex '++' 'throw'
    case 1248520:                   // Real '++' 'throw'
    case 1264899:                   // Identifier '++' 'try'
    case 1264900:                   // Character '++' 'try'
    case 1264901:                   // String '++' 'try'
    case 1264902:                   // Integer '++' 'try'
    case 1264903:                   // Complex '++' 'try'
    case 1264904:                   // Real '++' 'try'
    case 1281283:                   // Identifier '++' 'while'
    case 1281284:                   // Character '++' 'while'
    case 1281285:                   // String '++' 'while'
    case 1281286:                   // Integer '++' 'while'
    case 1281287:                   // Complex '++' 'while'
    case 1281288:                   // Real '++' 'while'
    case 1314051:                   // Identifier '++' '|'
    case 1314052:                   // Character '++' '|'
    case 1314053:                   // String '++' '|'
    case 1314054:                   // Integer '++' '|'
    case 1314055:                   // Complex '++' '|'
    case 1314056:                   // Real '++' '|'
    case 1330435:                   // Identifier '++' '|='
    case 1330436:                   // Character '++' '|='
    case 1330437:                   // String '++' '|='
    case 1330438:                   // Integer '++' '|='
    case 1330439:                   // Complex '++' '|='
    case 1330440:                   // Real '++' '|='
    case 1346819:                   // Identifier '++' '||'
    case 1346820:                   // Character '++' '||'
    case 1346821:                   // String '++' '||'
    case 1346822:                   // Integer '++' '||'
    case 1346823:                   // Complex '++' '||'
    case 1346824:                   // Real '++' '||'
    case 1363203:                   // Identifier '++' '}'
    case 1363204:                   // Character '++' '}'
    case 1363205:                   // String '++' '}'
    case 1363206:                   // Integer '++' '}'
    case 1363207:                   // Complex '++' '}'
    case 1363208:                   // Real '++' '}'
    case 1379587:                   // Identifier '++' '~'
    case 1379588:                   // Character '++' '~'
    case 1379589:                   // String '++' '~'
    case 1379590:                   // Integer '++' '~'
    case 1379591:                   // Complex '++' '~'
    case 1379592:                   // Real '++' '~'
      parse_Primary();
      lookahead1W(5);               // WhiteSpace^token | '++'
      consume(26);                  // '++'
      break;
    case -2:
    case 20227:                     // Identifier '--' END
    case 20228:                     // Character '--' END
    case 20229:                     // String '--' END
    case 20230:                     // Integer '--' END
    case 20231:                     // Complex '--' END
    case 20232:                     // Real '--' END
    case 151299:                    // Identifier '--' Comment
    case 151300:                    // Character '--' Comment
    case 151301:                    // String '--' Comment
    case 151302:                    // Integer '--' Comment
    case 151303:                    // Complex '--' Comment
    case 151304:                    // Real '--' Comment
    case 200451:                    // Identifier '--' '!'
    case 200452:                    // Character '--' '!'
    case 200453:                    // String '--' '!'
    case 200454:                    // Integer '--' '!'
    case 200455:                    // Complex '--' '!'
    case 200456:                    // Real '--' '!'
    case 216835:                    // Identifier '--' '!='
    case 216836:                    // Character '--' '!='
    case 216837:                    // String '--' '!='
    case 216838:                    // Integer '--' '!='
    case 216839:                    // Complex '--' '!='
    case 216840:                    // Real '--' '!='
    case 249603:                    // Identifier '--' '%'
    case 249604:                    // Character '--' '%'
    case 249605:                    // String '--' '%'
    case 249606:                    // Integer '--' '%'
    case 249607:                    // Complex '--' '%'
    case 249608:                    // Real '--' '%'
    case 265987:                    // Identifier '--' '%='
    case 265988:                    // Character '--' '%='
    case 265989:                    // String '--' '%='
    case 265990:                    // Integer '--' '%='
    case 265991:                    // Complex '--' '%='
    case 265992:                    // Real '--' '%='
    case 282371:                    // Identifier '--' '&'
    case 282372:                    // Character '--' '&'
    case 282373:                    // String '--' '&'
    case 282374:                    // Integer '--' '&'
    case 282375:                    // Complex '--' '&'
    case 282376:                    // Real '--' '&'
    case 298755:                    // Identifier '--' '&&'
    case 298756:                    // Character '--' '&&'
    case 298757:                    // String '--' '&&'
    case 298758:                    // Integer '--' '&&'
    case 298759:                    // Complex '--' '&&'
    case 298760:                    // Real '--' '&&'
    case 315139:                    // Identifier '--' '&='
    case 315140:                    // Character '--' '&='
    case 315141:                    // String '--' '&='
    case 315142:                    // Integer '--' '&='
    case 315143:                    // Complex '--' '&='
    case 315144:                    // Real '--' '&='
    case 347907:                    // Identifier '--' ')'
    case 347908:                    // Character '--' ')'
    case 347909:                    // String '--' ')'
    case 347910:                    // Integer '--' ')'
    case 347911:                    // Complex '--' ')'
    case 347912:                    // Real '--' ')'
    case 364291:                    // Identifier '--' '*'
    case 364292:                    // Character '--' '*'
    case 364293:                    // String '--' '*'
    case 364294:                    // Integer '--' '*'
    case 364295:                    // Complex '--' '*'
    case 364296:                    // Real '--' '*'
    case 380675:                    // Identifier '--' '**'
    case 380676:                    // Character '--' '**'
    case 380677:                    // String '--' '**'
    case 380678:                    // Integer '--' '**'
    case 380679:                    // Complex '--' '**'
    case 380680:                    // Real '--' '**'
    case 397059:                    // Identifier '--' '*='
    case 397060:                    // Character '--' '*='
    case 397061:                    // String '--' '*='
    case 397062:                    // Integer '--' '*='
    case 397063:                    // Complex '--' '*='
    case 397064:                    // Real '--' '*='
    case 413443:                    // Identifier '--' '+'
    case 413444:                    // Character '--' '+'
    case 413445:                    // String '--' '+'
    case 413446:                    // Integer '--' '+'
    case 413447:                    // Complex '--' '+'
    case 413448:                    // Real '--' '+'
    case 429827:                    // Identifier '--' '++'
    case 429828:                    // Character '--' '++'
    case 429829:                    // String '--' '++'
    case 429830:                    // Integer '--' '++'
    case 429831:                    // Complex '--' '++'
    case 429832:                    // Real '--' '++'
    case 446211:                    // Identifier '--' '+='
    case 446212:                    // Character '--' '+='
    case 446213:                    // String '--' '+='
    case 446214:                    // Integer '--' '+='
    case 446215:                    // Complex '--' '+='
    case 446216:                    // Real '--' '+='
    case 462595:                    // Identifier '--' ','
    case 462596:                    // Character '--' ','
    case 462597:                    // String '--' ','
    case 462598:                    // Integer '--' ','
    case 462599:                    // Complex '--' ','
    case 462600:                    // Real '--' ','
    case 478979:                    // Identifier '--' '-'
    case 478980:                    // Character '--' '-'
    case 478981:                    // String '--' '-'
    case 478982:                    // Integer '--' '-'
    case 478983:                    // Complex '--' '-'
    case 478984:                    // Real '--' '-'
    case 495363:                    // Identifier '--' '--'
    case 495364:                    // Character '--' '--'
    case 495365:                    // String '--' '--'
    case 495366:                    // Integer '--' '--'
    case 495367:                    // Complex '--' '--'
    case 495368:                    // Real '--' '--'
    case 511747:                    // Identifier '--' '-='
    case 511748:                    // Character '--' '-='
    case 511749:                    // String '--' '-='
    case 511750:                    // Integer '--' '-='
    case 511751:                    // Complex '--' '-='
    case 511752:                    // Real '--' '-='
    case 544515:                    // Identifier '--' '/'
    case 544516:                    // Character '--' '/'
    case 544517:                    // String '--' '/'
    case 544518:                    // Integer '--' '/'
    case 544519:                    // Complex '--' '/'
    case 544520:                    // Real '--' '/'
    case 560899:                    // Identifier '--' '/='
    case 560900:                    // Character '--' '/='
    case 560901:                    // String '--' '/='
    case 560902:                    // Integer '--' '/='
    case 560903:                    // Complex '--' '/='
    case 560904:                    // Real '--' '/='
    case 577283:                    // Identifier '--' ':'
    case 577284:                    // Character '--' ':'
    case 577285:                    // String '--' ':'
    case 577286:                    // Integer '--' ':'
    case 577287:                    // Complex '--' ':'
    case 577288:                    // Real '--' ':'
    case 593667:                    // Identifier '--' ':='
    case 593668:                    // Character '--' ':='
    case 593669:                    // String '--' ':='
    case 593670:                    // Integer '--' ':='
    case 593671:                    // Complex '--' ':='
    case 593672:                    // Real '--' ':='
    case 610051:                    // Identifier '--' ';'
    case 610052:                    // Character '--' ';'
    case 610053:                    // String '--' ';'
    case 610054:                    // Integer '--' ';'
    case 610055:                    // Complex '--' ';'
    case 610056:                    // Real '--' ';'
    case 626435:                    // Identifier '--' '<'
    case 626436:                    // Character '--' '<'
    case 626437:                    // String '--' '<'
    case 626438:                    // Integer '--' '<'
    case 626439:                    // Complex '--' '<'
    case 626440:                    // Real '--' '<'
    case 642819:                    // Identifier '--' '<<'
    case 642820:                    // Character '--' '<<'
    case 642821:                    // String '--' '<<'
    case 642822:                    // Integer '--' '<<'
    case 642823:                    // Complex '--' '<<'
    case 642824:                    // Real '--' '<<'
    case 659203:                    // Identifier '--' '<<='
    case 659204:                    // Character '--' '<<='
    case 659205:                    // String '--' '<<='
    case 659206:                    // Integer '--' '<<='
    case 659207:                    // Complex '--' '<<='
    case 659208:                    // Real '--' '<<='
    case 675587:                    // Identifier '--' '<='
    case 675588:                    // Character '--' '<='
    case 675589:                    // String '--' '<='
    case 675590:                    // Integer '--' '<='
    case 675591:                    // Complex '--' '<='
    case 675592:                    // Real '--' '<='
    case 691971:                    // Identifier '--' '='
    case 691972:                    // Character '--' '='
    case 691973:                    // String '--' '='
    case 691974:                    // Integer '--' '='
    case 691975:                    // Complex '--' '='
    case 691976:                    // Real '--' '='
    case 708355:                    // Identifier '--' '=='
    case 708356:                    // Character '--' '=='
    case 708357:                    // String '--' '=='
    case 708358:                    // Integer '--' '=='
    case 708359:                    // Complex '--' '=='
    case 708360:                    // Real '--' '=='
    case 724739:                    // Identifier '--' '>'
    case 724740:                    // Character '--' '>'
    case 724741:                    // String '--' '>'
    case 724742:                    // Integer '--' '>'
    case 724743:                    // Complex '--' '>'
    case 724744:                    // Real '--' '>'
    case 741123:                    // Identifier '--' '>='
    case 741124:                    // Character '--' '>='
    case 741125:                    // String '--' '>='
    case 741126:                    // Integer '--' '>='
    case 741127:                    // Complex '--' '>='
    case 741128:                    // Real '--' '>='
    case 757507:                    // Identifier '--' '>>'
    case 757508:                    // Character '--' '>>'
    case 757509:                    // String '--' '>>'
    case 757510:                    // Integer '--' '>>'
    case 757511:                    // Complex '--' '>>'
    case 757512:                    // Real '--' '>>'
    case 773891:                    // Identifier '--' '>>='
    case 773892:                    // Character '--' '>>='
    case 773893:                    // String '--' '>>='
    case 773894:                    // Integer '--' '>>='
    case 773895:                    // Complex '--' '>>='
    case 773896:                    // Real '--' '>>='
    case 790275:                    // Identifier '--' '?'
    case 790276:                    // Character '--' '?'
    case 790277:                    // String '--' '?'
    case 790278:                    // Integer '--' '?'
    case 790279:                    // Complex '--' '?'
    case 790280:                    // Real '--' '?'
    case 806659:                    // Identifier '--' '?='
    case 806660:                    // Character '--' '?='
    case 806661:                    // String '--' '?='
    case 806662:                    // Integer '--' '?='
    case 806663:                    // Complex '--' '?='
    case 806664:                    // Real '--' '?='
    case 839427:                    // Identifier '--' ']'
    case 839428:                    // Character '--' ']'
    case 839429:                    // String '--' ']'
    case 839430:                    // Integer '--' ']'
    case 839431:                    // Complex '--' ']'
    case 839432:                    // Real '--' ']'
    case 855811:                    // Identifier '--' '^'
    case 855812:                    // Character '--' '^'
    case 855813:                    // String '--' '^'
    case 855814:                    // Integer '--' '^'
    case 855815:                    // Complex '--' '^'
    case 855816:                    // Real '--' '^'
    case 872195:                    // Identifier '--' '^='
    case 872196:                    // Character '--' '^='
    case 872197:                    // String '--' '^='
    case 872198:                    // Integer '--' '^='
    case 872199:                    // Complex '--' '^='
    case 872200:                    // Real '--' '^='
    case 888579:                    // Identifier '--' 'break'
    case 888580:                    // Character '--' 'break'
    case 888581:                    // String '--' 'break'
    case 888582:                    // Integer '--' 'break'
    case 888583:                    // Complex '--' 'break'
    case 888584:                    // Real '--' 'break'
    case 904963:                    // Identifier '--' 'case'
    case 904964:                    // Character '--' 'case'
    case 904965:                    // String '--' 'case'
    case 904966:                    // Integer '--' 'case'
    case 904967:                    // Complex '--' 'case'
    case 904968:                    // Real '--' 'case'
    case 921347:                    // Identifier '--' 'catch'
    case 921348:                    // Character '--' 'catch'
    case 921349:                    // String '--' 'catch'
    case 921350:                    // Integer '--' 'catch'
    case 921351:                    // Complex '--' 'catch'
    case 921352:                    // Real '--' 'catch'
    case 937731:                    // Identifier '--' 'continue'
    case 937732:                    // Character '--' 'continue'
    case 937733:                    // String '--' 'continue'
    case 937734:                    // Integer '--' 'continue'
    case 937735:                    // Complex '--' 'continue'
    case 937736:                    // Real '--' 'continue'
    case 954115:                    // Identifier '--' 'default'
    case 954116:                    // Character '--' 'default'
    case 954117:                    // String '--' 'default'
    case 954118:                    // Integer '--' 'default'
    case 954119:                    // Complex '--' 'default'
    case 954120:                    // Real '--' 'default'
    case 970499:                    // Identifier '--' 'do'
    case 970500:                    // Character '--' 'do'
    case 970501:                    // String '--' 'do'
    case 970502:                    // Integer '--' 'do'
    case 970503:                    // Complex '--' 'do'
    case 970504:                    // Real '--' 'do'
    case 986883:                    // Identifier '--' 'else'
    case 986884:                    // Character '--' 'else'
    case 986885:                    // String '--' 'else'
    case 986886:                    // Integer '--' 'else'
    case 986887:                    // Complex '--' 'else'
    case 986888:                    // Real '--' 'else'
    case 1003267:                   // Identifier '--' 'export'
    case 1003268:                   // Character '--' 'export'
    case 1003269:                   // String '--' 'export'
    case 1003270:                   // Integer '--' 'export'
    case 1003271:                   // Complex '--' 'export'
    case 1003272:                   // Real '--' 'export'
    case 1052419:                   // Identifier '--' 'for'
    case 1052420:                   // Character '--' 'for'
    case 1052421:                   // String '--' 'for'
    case 1052422:                   // Integer '--' 'for'
    case 1052423:                   // Complex '--' 'for'
    case 1052424:                   // Real '--' 'for'
    case 1068803:                   // Identifier '--' 'foreach'
    case 1068804:                   // Character '--' 'foreach'
    case 1068805:                   // String '--' 'foreach'
    case 1068806:                   // Integer '--' 'foreach'
    case 1068807:                   // Complex '--' 'foreach'
    case 1068808:                   // Real '--' 'foreach'
    case 1085187:                   // Identifier '--' 'global'
    case 1085188:                   // Character '--' 'global'
    case 1085189:                   // String '--' 'global'
    case 1085190:                   // Integer '--' 'global'
    case 1085191:                   // Complex '--' 'global'
    case 1085192:                   // Real '--' 'global'
    case 1134339:                   // Identifier '--' 'if'
    case 1134340:                   // Character '--' 'if'
    case 1134341:                   // String '--' 'if'
    case 1134342:                   // Integer '--' 'if'
    case 1134343:                   // Complex '--' 'if'
    case 1134344:                   // Real '--' 'if'
    case 1150723:                   // Identifier '--' 'import'
    case 1150724:                   // Character '--' 'import'
    case 1150725:                   // String '--' 'import'
    case 1150726:                   // Integer '--' 'import'
    case 1150727:                   // Complex '--' 'import'
    case 1150728:                   // Real '--' 'import'
    case 1167107:                   // Identifier '--' 'include'
    case 1167108:                   // Character '--' 'include'
    case 1167109:                   // String '--' 'include'
    case 1167110:                   // Integer '--' 'include'
    case 1167111:                   // Complex '--' 'include'
    case 1167112:                   // Real '--' 'include'
    case 1183491:                   // Identifier '--' 'local'
    case 1183492:                   // Character '--' 'local'
    case 1183493:                   // String '--' 'local'
    case 1183494:                   // Integer '--' 'local'
    case 1183495:                   // Complex '--' 'local'
    case 1183496:                   // Real '--' 'local'
    case 1199875:                   // Identifier '--' 'return'
    case 1199876:                   // Character '--' 'return'
    case 1199877:                   // String '--' 'return'
    case 1199878:                   // Integer '--' 'return'
    case 1199879:                   // Complex '--' 'return'
    case 1199880:                   // Real '--' 'return'
    case 1216259:                   // Identifier '--' 'switch'
    case 1216260:                   // Character '--' 'switch'
    case 1216261:                   // String '--' 'switch'
    case 1216262:                   // Integer '--' 'switch'
    case 1216263:                   // Complex '--' 'switch'
    case 1216264:                   // Real '--' 'switch'
    case 1232643:                   // Identifier '--' 'test'
    case 1232644:                   // Character '--' 'test'
    case 1232645:                   // String '--' 'test'
    case 1232646:                   // Integer '--' 'test'
    case 1232647:                   // Complex '--' 'test'
    case 1232648:                   // Real '--' 'test'
    case 1249027:                   // Identifier '--' 'throw'
    case 1249028:                   // Character '--' 'throw'
    case 1249029:                   // String '--' 'throw'
    case 1249030:                   // Integer '--' 'throw'
    case 1249031:                   // Complex '--' 'throw'
    case 1249032:                   // Real '--' 'throw'
    case 1265411:                   // Identifier '--' 'try'
    case 1265412:                   // Character '--' 'try'
    case 1265413:                   // String '--' 'try'
    case 1265414:                   // Integer '--' 'try'
    case 1265415:                   // Complex '--' 'try'
    case 1265416:                   // Real '--' 'try'
    case 1281795:                   // Identifier '--' 'while'
    case 1281796:                   // Character '--' 'while'
    case 1281797:                   // String '--' 'while'
    case 1281798:                   // Integer '--' 'while'
    case 1281799:                   // Complex '--' 'while'
    case 1281800:                   // Real '--' 'while'
    case 1314563:                   // Identifier '--' '|'
    case 1314564:                   // Character '--' '|'
    case 1314565:                   // String '--' '|'
    case 1314566:                   // Integer '--' '|'
    case 1314567:                   // Complex '--' '|'
    case 1314568:                   // Real '--' '|'
    case 1330947:                   // Identifier '--' '|='
    case 1330948:                   // Character '--' '|='
    case 1330949:                   // String '--' '|='
    case 1330950:                   // Integer '--' '|='
    case 1330951:                   // Complex '--' '|='
    case 1330952:                   // Real '--' '|='
    case 1347331:                   // Identifier '--' '||'
    case 1347332:                   // Character '--' '||'
    case 1347333:                   // String '--' '||'
    case 1347334:                   // Integer '--' '||'
    case 1347335:                   // Complex '--' '||'
    case 1347336:                   // Real '--' '||'
    case 1363715:                   // Identifier '--' '}'
    case 1363716:                   // Character '--' '}'
    case 1363717:                   // String '--' '}'
    case 1363718:                   // Integer '--' '}'
    case 1363719:                   // Complex '--' '}'
    case 1363720:                   // Real '--' '}'
    case 1380099:                   // Identifier '--' '~'
    case 1380100:                   // Character '--' '~'
    case 1380101:                   // String '--' '~'
    case 1380102:                   // Integer '--' '~'
    case 1380103:                   // Complex '--' '~'
    case 1380104:                   // Real '--' '~'
      parse_Primary();
      lookahead1W(6);               // WhiteSpace^token | '--'
      consume(30);                  // '--'
      break;
    case 26:                        // '++'
      consume(26);                  // '++'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      whitespace();
      parse_Primary();
      break;
    case 30:                        // '--'
      consume(30);                  // '--'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      whitespace();
      parse_Primary();
      break;
    case 25:                        // '+'
      consume(25);                  // '+'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      whitespace();
      parse_Primary();
      break;
    case 29:                        // '-'
      consume(29);                  // '-'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      whitespace();
      parse_Primary();
      break;
    case 84:                        // '~'
      consume(84);                  // '~'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      whitespace();
      parse_Primary();
      break;
    case 12:                        // '!'
      consume(12);                  // '!'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      whitespace();
      parse_Primary();
      break;
    default:
      parse_Primary();
    }
    eventHandler.endNonterminal("UnaryExpression", e0);
  }

  function try_UnaryExpression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(36);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10132:                   // '(' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(4);             // WhiteSpace^token | ')'
        break;
      case 7956:                    // '(' 'f32'
      case 8084:                    // '(' 'f64'
      case 8596:                    // '(' 'i32'
      case 8724:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 916:                     // '(' Complex
      case 1044:                    // '(' Real
        lookahead3W(24);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10772:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8212:                    // '(' 'for'
      case 8340:                    // '(' 'foreach'
      case 8852:                    // '(' 'if'
      case 9492:                    // '(' 'switch'
      case 9620:                    // '(' 'test'
      case 10004:                   // '(' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 7828:                    // '(' 'export'
      case 8468:                    // '(' 'global'
      case 8980:                    // '(' 'import'
      case 9108:                    // '(' 'include'
      case 9236:                    // '(' 'local'
      case 9364:                    // '(' 'return'
      case 9748:                    // '(' 'throw'
      case 9876:                    // '(' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(31);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(39);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(34);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 10162:                   // '[' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 7986:                    // '[' 'f32'
      case 8114:                    // '[' 'f64'
      case 8626:                    // '[' 'i32'
      case 8754:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 946:                     // '[' Complex
      case 1074:                    // '[' Real
        lookahead3W(28);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10802:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8242:                    // '[' 'for'
      case 8370:                    // '[' 'foreach'
      case 8882:                    // '[' 'if'
      case 9522:                    // '[' 'switch'
      case 9650:                    // '[' 'test'
      case 10034:                   // '[' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 7858:                    // '[' 'export'
      case 8498:                    // '[' 'global'
      case 9010:                    // '[' 'import'
      case 9138:                    // '[' 'include'
      case 9266:                    // '[' 'local'
      case 9394:                    // '[' 'return'
      case 9778:                    // '[' 'throw'
      case 9906:                    // '[' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 79:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 463:                     // '{' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 719:                     // '{' String
        lookahead3W(27);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6479:                    // '{' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10191:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 10703:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 591:                     // '{' Character
      case 847:                     // '{' Integer
      case 975:                     // '{' Complex
      case 1103:                    // '{' Real
        lookahead3W(25);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1231:                    // '{' Comment
      case 4815:                    // '{' ';'
      case 6991:                    // '{' 'break'
      case 7375:                    // '{' 'continue'
        lookahead3W(17);            // WhiteSpace^token | ',' | '}'
        break;
      case 8015:                    // '{' 'f32'
      case 8143:                    // '{' 'f64'
      case 8655:                    // '{' 'i32'
      case 8783:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1615:                    // '{' '!'
      case 3279:                    // '{' '+'
      case 3407:                    // '{' '++'
      case 3791:                    // '{' '-'
      case 3919:                    // '{' '--'
      case 10831:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8271:                    // '{' 'for'
      case 8399:                    // '{' 'foreach'
      case 8911:                    // '{' 'if'
      case 9551:                    // '{' 'switch'
      case 9679:                    // '{' 'test'
      case 10063:                   // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2639:                    // '{' '('
      case 3663:                    // '{' ','
      case 7631:                    // '{' 'do'
      case 7887:                    // '{' 'export'
      case 8527:                    // '{' 'global'
      case 9039:                    // '{' 'import'
      case 9167:                    // '{' 'include'
      case 9295:                    // '{' 'local'
      case 9423:                    // '{' 'return'
      case 9807:                    // '{' 'throw'
      case 9935:                    // '{' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 446:                     // 'f32' Identifier
      case 447:                     // 'f64' Identifier
      case 451:                     // 'i32' Identifier
      case 452:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Complex
    case 8:                         // Real
      lookahead2W(44);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 3332:                    // Character '++'
      case 3844:                    // Character '--'
      case 3333:                    // String '++'
      case 3845:                    // String '--'
      case 3334:                    // Integer '++'
      case 3846:                    // Integer '--'
      case 3335:                    // Complex '++'
      case 3847:                    // Complex '--'
      case 3336:                    // Real '++'
      case 3848:                    // Real '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 12                    // '!'
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 84                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Character END
     && lk != 133                   // String END
     && lk != 134                   // Integer END
     && lk != 135                   // Complex END
     && lk != 136                   // Real END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Character Identifier
     && lk != 389                   // String Identifier
     && lk != 390                   // Integer Identifier
     && lk != 391                   // Complex Identifier
     && lk != 392                   // Real Identifier
     && lk != 515                   // Identifier Character
     && lk != 516                   // Character Character
     && lk != 517                   // String Character
     && lk != 518                   // Integer Character
     && lk != 519                   // Complex Character
     && lk != 520                   // Real Character
     && lk != 643                   // Identifier String
     && lk != 644                   // Character String
     && lk != 645                   // String String
     && lk != 646                   // Integer String
     && lk != 647                   // Complex String
     && lk != 648                   // Real String
     && lk != 771                   // Identifier Integer
     && lk != 772                   // Character Integer
     && lk != 773                   // String Integer
     && lk != 774                   // Integer Integer
     && lk != 775                   // Complex Integer
     && lk != 776                   // Real Integer
     && lk != 899                   // Identifier Complex
     && lk != 900                   // Character Complex
     && lk != 901                   // String Complex
     && lk != 902                   // Integer Complex
     && lk != 903                   // Complex Complex
     && lk != 904                   // Real Complex
     && lk != 1027                  // Identifier Real
     && lk != 1028                  // Character Real
     && lk != 1029                  // String Real
     && lk != 1030                  // Integer Real
     && lk != 1031                  // Complex Real
     && lk != 1032                  // Real Real
     && lk != 1155                  // Identifier Comment
     && lk != 1156                  // Character Comment
     && lk != 1157                  // String Comment
     && lk != 1158                  // Integer Comment
     && lk != 1159                  // Complex Comment
     && lk != 1160                  // Real Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1540                  // Character '!'
     && lk != 1541                  // String '!'
     && lk != 1542                  // Integer '!'
     && lk != 1543                  // Complex '!'
     && lk != 1544                  // Real '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1668                  // Character '!='
     && lk != 1669                  // String '!='
     && lk != 1670                  // Integer '!='
     && lk != 1671                  // Complex '!='
     && lk != 1672                  // Real '!='
     && lk != 1923                  // Identifier '%'
     && lk != 1924                  // Character '%'
     && lk != 1925                  // String '%'
     && lk != 1926                  // Integer '%'
     && lk != 1927                  // Complex '%'
     && lk != 1928                  // Real '%'
     && lk != 2051                  // Identifier '%='
     && lk != 2052                  // Character '%='
     && lk != 2053                  // String '%='
     && lk != 2054                  // Integer '%='
     && lk != 2055                  // Complex '%='
     && lk != 2056                  // Real '%='
     && lk != 2179                  // Identifier '&'
     && lk != 2180                  // Character '&'
     && lk != 2181                  // String '&'
     && lk != 2182                  // Integer '&'
     && lk != 2183                  // Complex '&'
     && lk != 2184                  // Real '&'
     && lk != 2307                  // Identifier '&&'
     && lk != 2308                  // Character '&&'
     && lk != 2309                  // String '&&'
     && lk != 2310                  // Integer '&&'
     && lk != 2311                  // Complex '&&'
     && lk != 2312                  // Real '&&'
     && lk != 2435                  // Identifier '&='
     && lk != 2436                  // Character '&='
     && lk != 2437                  // String '&='
     && lk != 2438                  // Integer '&='
     && lk != 2439                  // Complex '&='
     && lk != 2440                  // Real '&='
     && lk != 2564                  // Character '('
     && lk != 2565                  // String '('
     && lk != 2566                  // Integer '('
     && lk != 2567                  // Complex '('
     && lk != 2568                  // Real '('
     && lk != 2691                  // Identifier ')'
     && lk != 2692                  // Character ')'
     && lk != 2693                  // String ')'
     && lk != 2694                  // Integer ')'
     && lk != 2695                  // Complex ')'
     && lk != 2696                  // Real ')'
     && lk != 2819                  // Identifier '*'
     && lk != 2820                  // Character '*'
     && lk != 2821                  // String '*'
     && lk != 2822                  // Integer '*'
     && lk != 2823                  // Complex '*'
     && lk != 2824                  // Real '*'
     && lk != 2947                  // Identifier '**'
     && lk != 2948                  // Character '**'
     && lk != 2949                  // String '**'
     && lk != 2950                  // Integer '**'
     && lk != 2951                  // Complex '**'
     && lk != 2952                  // Real '**'
     && lk != 3075                  // Identifier '*='
     && lk != 3076                  // Character '*='
     && lk != 3077                  // String '*='
     && lk != 3078                  // Integer '*='
     && lk != 3079                  // Complex '*='
     && lk != 3080                  // Real '*='
     && lk != 3203                  // Identifier '+'
     && lk != 3204                  // Character '+'
     && lk != 3205                  // String '+'
     && lk != 3206                  // Integer '+'
     && lk != 3207                  // Complex '+'
     && lk != 3208                  // Real '+'
     && lk != 3459                  // Identifier '+='
     && lk != 3460                  // Character '+='
     && lk != 3461                  // String '+='
     && lk != 3462                  // Integer '+='
     && lk != 3463                  // Complex '+='
     && lk != 3464                  // Real '+='
     && lk != 3587                  // Identifier ','
     && lk != 3588                  // Character ','
     && lk != 3589                  // String ','
     && lk != 3590                  // Integer ','
     && lk != 3591                  // Complex ','
     && lk != 3592                  // Real ','
     && lk != 3715                  // Identifier '-'
     && lk != 3716                  // Character '-'
     && lk != 3717                  // String '-'
     && lk != 3718                  // Integer '-'
     && lk != 3719                  // Complex '-'
     && lk != 3720                  // Real '-'
     && lk != 3971                  // Identifier '-='
     && lk != 3972                  // Character '-='
     && lk != 3973                  // String '-='
     && lk != 3974                  // Integer '-='
     && lk != 3975                  // Complex '-='
     && lk != 3976                  // Real '-='
     && lk != 4227                  // Identifier '/'
     && lk != 4228                  // Character '/'
     && lk != 4229                  // String '/'
     && lk != 4230                  // Integer '/'
     && lk != 4231                  // Complex '/'
     && lk != 4232                  // Real '/'
     && lk != 4355                  // Identifier '/='
     && lk != 4356                  // Character '/='
     && lk != 4357                  // String '/='
     && lk != 4358                  // Integer '/='
     && lk != 4359                  // Complex '/='
     && lk != 4360                  // Real '/='
     && lk != 4483                  // Identifier ':'
     && lk != 4484                  // Character ':'
     && lk != 4485                  // String ':'
     && lk != 4486                  // Integer ':'
     && lk != 4487                  // Complex ':'
     && lk != 4488                  // Real ':'
     && lk != 4611                  // Identifier ':='
     && lk != 4612                  // Character ':='
     && lk != 4613                  // String ':='
     && lk != 4614                  // Integer ':='
     && lk != 4615                  // Complex ':='
     && lk != 4616                  // Real ':='
     && lk != 4739                  // Identifier ';'
     && lk != 4740                  // Character ';'
     && lk != 4741                  // String ';'
     && lk != 4742                  // Integer ';'
     && lk != 4743                  // Complex ';'
     && lk != 4744                  // Real ';'
     && lk != 4867                  // Identifier '<'
     && lk != 4868                  // Character '<'
     && lk != 4869                  // String '<'
     && lk != 4870                  // Integer '<'
     && lk != 4871                  // Complex '<'
     && lk != 4872                  // Real '<'
     && lk != 4995                  // Identifier '<<'
     && lk != 4996                  // Character '<<'
     && lk != 4997                  // String '<<'
     && lk != 4998                  // Integer '<<'
     && lk != 4999                  // Complex '<<'
     && lk != 5000                  // Real '<<'
     && lk != 5123                  // Identifier '<<='
     && lk != 5124                  // Character '<<='
     && lk != 5125                  // String '<<='
     && lk != 5126                  // Integer '<<='
     && lk != 5127                  // Complex '<<='
     && lk != 5128                  // Real '<<='
     && lk != 5251                  // Identifier '<='
     && lk != 5252                  // Character '<='
     && lk != 5253                  // String '<='
     && lk != 5254                  // Integer '<='
     && lk != 5255                  // Complex '<='
     && lk != 5256                  // Real '<='
     && lk != 5379                  // Identifier '='
     && lk != 5380                  // Character '='
     && lk != 5381                  // String '='
     && lk != 5382                  // Integer '='
     && lk != 5383                  // Complex '='
     && lk != 5384                  // Real '='
     && lk != 5507                  // Identifier '=='
     && lk != 5508                  // Character '=='
     && lk != 5509                  // String '=='
     && lk != 5510                  // Integer '=='
     && lk != 5511                  // Complex '=='
     && lk != 5512                  // Real '=='
     && lk != 5635                  // Identifier '>'
     && lk != 5636                  // Character '>'
     && lk != 5637                  // String '>'
     && lk != 5638                  // Integer '>'
     && lk != 5639                  // Complex '>'
     && lk != 5640                  // Real '>'
     && lk != 5763                  // Identifier '>='
     && lk != 5764                  // Character '>='
     && lk != 5765                  // String '>='
     && lk != 5766                  // Integer '>='
     && lk != 5767                  // Complex '>='
     && lk != 5768                  // Real '>='
     && lk != 5891                  // Identifier '>>'
     && lk != 5892                  // Character '>>'
     && lk != 5893                  // String '>>'
     && lk != 5894                  // Integer '>>'
     && lk != 5895                  // Complex '>>'
     && lk != 5896                  // Real '>>'
     && lk != 6019                  // Identifier '>>='
     && lk != 6020                  // Character '>>='
     && lk != 6021                  // String '>>='
     && lk != 6022                  // Integer '>>='
     && lk != 6023                  // Complex '>>='
     && lk != 6024                  // Real '>>='
     && lk != 6147                  // Identifier '?'
     && lk != 6148                  // Character '?'
     && lk != 6149                  // String '?'
     && lk != 6150                  // Integer '?'
     && lk != 6151                  // Complex '?'
     && lk != 6152                  // Real '?'
     && lk != 6275                  // Identifier '?='
     && lk != 6276                  // Character '?='
     && lk != 6277                  // String '?='
     && lk != 6278                  // Integer '?='
     && lk != 6279                  // Complex '?='
     && lk != 6280                  // Real '?='
     && lk != 6404                  // Character '['
     && lk != 6405                  // String '['
     && lk != 6406                  // Integer '['
     && lk != 6407                  // Complex '['
     && lk != 6408                  // Real '['
     && lk != 6531                  // Identifier ']'
     && lk != 6532                  // Character ']'
     && lk != 6533                  // String ']'
     && lk != 6534                  // Integer ']'
     && lk != 6535                  // Complex ']'
     && lk != 6536                  // Real ']'
     && lk != 6659                  // Identifier '^'
     && lk != 6660                  // Character '^'
     && lk != 6661                  // String '^'
     && lk != 6662                  // Integer '^'
     && lk != 6663                  // Complex '^'
     && lk != 6664                  // Real '^'
     && lk != 6787                  // Identifier '^='
     && lk != 6788                  // Character '^='
     && lk != 6789                  // String '^='
     && lk != 6790                  // Integer '^='
     && lk != 6791                  // Complex '^='
     && lk != 6792                  // Real '^='
     && lk != 6915                  // Identifier 'break'
     && lk != 6916                  // Character 'break'
     && lk != 6917                  // String 'break'
     && lk != 6918                  // Integer 'break'
     && lk != 6919                  // Complex 'break'
     && lk != 6920                  // Real 'break'
     && lk != 7043                  // Identifier 'case'
     && lk != 7044                  // Character 'case'
     && lk != 7045                  // String 'case'
     && lk != 7046                  // Integer 'case'
     && lk != 7047                  // Complex 'case'
     && lk != 7048                  // Real 'case'
     && lk != 7171                  // Identifier 'catch'
     && lk != 7172                  // Character 'catch'
     && lk != 7173                  // String 'catch'
     && lk != 7174                  // Integer 'catch'
     && lk != 7175                  // Complex 'catch'
     && lk != 7176                  // Real 'catch'
     && lk != 7299                  // Identifier 'continue'
     && lk != 7300                  // Character 'continue'
     && lk != 7301                  // String 'continue'
     && lk != 7302                  // Integer 'continue'
     && lk != 7303                  // Complex 'continue'
     && lk != 7304                  // Real 'continue'
     && lk != 7427                  // Identifier 'default'
     && lk != 7428                  // Character 'default'
     && lk != 7429                  // String 'default'
     && lk != 7430                  // Integer 'default'
     && lk != 7431                  // Complex 'default'
     && lk != 7432                  // Real 'default'
     && lk != 7555                  // Identifier 'do'
     && lk != 7556                  // Character 'do'
     && lk != 7557                  // String 'do'
     && lk != 7558                  // Integer 'do'
     && lk != 7559                  // Complex 'do'
     && lk != 7560                  // Real 'do'
     && lk != 7683                  // Identifier 'else'
     && lk != 7684                  // Character 'else'
     && lk != 7685                  // String 'else'
     && lk != 7686                  // Integer 'else'
     && lk != 7687                  // Complex 'else'
     && lk != 7688                  // Real 'else'
     && lk != 7811                  // Identifier 'export'
     && lk != 7812                  // Character 'export'
     && lk != 7813                  // String 'export'
     && lk != 7814                  // Integer 'export'
     && lk != 7815                  // Complex 'export'
     && lk != 7816                  // Real 'export'
     && lk != 7939                  // Identifier 'f32'
     && lk != 7940                  // Character 'f32'
     && lk != 7941                  // String 'f32'
     && lk != 7942                  // Integer 'f32'
     && lk != 7943                  // Complex 'f32'
     && lk != 7944                  // Real 'f32'
     && lk != 8067                  // Identifier 'f64'
     && lk != 8068                  // Character 'f64'
     && lk != 8069                  // String 'f64'
     && lk != 8070                  // Integer 'f64'
     && lk != 8071                  // Complex 'f64'
     && lk != 8072                  // Real 'f64'
     && lk != 8195                  // Identifier 'for'
     && lk != 8196                  // Character 'for'
     && lk != 8197                  // String 'for'
     && lk != 8198                  // Integer 'for'
     && lk != 8199                  // Complex 'for'
     && lk != 8200                  // Real 'for'
     && lk != 8323                  // Identifier 'foreach'
     && lk != 8324                  // Character 'foreach'
     && lk != 8325                  // String 'foreach'
     && lk != 8326                  // Integer 'foreach'
     && lk != 8327                  // Complex 'foreach'
     && lk != 8328                  // Real 'foreach'
     && lk != 8451                  // Identifier 'global'
     && lk != 8452                  // Character 'global'
     && lk != 8453                  // String 'global'
     && lk != 8454                  // Integer 'global'
     && lk != 8455                  // Complex 'global'
     && lk != 8456                  // Real 'global'
     && lk != 8579                  // Identifier 'i32'
     && lk != 8580                  // Character 'i32'
     && lk != 8581                  // String 'i32'
     && lk != 8582                  // Integer 'i32'
     && lk != 8583                  // Complex 'i32'
     && lk != 8584                  // Real 'i32'
     && lk != 8707                  // Identifier 'i64'
     && lk != 8708                  // Character 'i64'
     && lk != 8709                  // String 'i64'
     && lk != 8710                  // Integer 'i64'
     && lk != 8711                  // Complex 'i64'
     && lk != 8712                  // Real 'i64'
     && lk != 8835                  // Identifier 'if'
     && lk != 8836                  // Character 'if'
     && lk != 8837                  // String 'if'
     && lk != 8838                  // Integer 'if'
     && lk != 8839                  // Complex 'if'
     && lk != 8840                  // Real 'if'
     && lk != 8963                  // Identifier 'import'
     && lk != 8964                  // Character 'import'
     && lk != 8965                  // String 'import'
     && lk != 8966                  // Integer 'import'
     && lk != 8967                  // Complex 'import'
     && lk != 8968                  // Real 'import'
     && lk != 9091                  // Identifier 'include'
     && lk != 9092                  // Character 'include'
     && lk != 9093                  // String 'include'
     && lk != 9094                  // Integer 'include'
     && lk != 9095                  // Complex 'include'
     && lk != 9096                  // Real 'include'
     && lk != 9219                  // Identifier 'local'
     && lk != 9220                  // Character 'local'
     && lk != 9221                  // String 'local'
     && lk != 9222                  // Integer 'local'
     && lk != 9223                  // Complex 'local'
     && lk != 9224                  // Real 'local'
     && lk != 9347                  // Identifier 'return'
     && lk != 9348                  // Character 'return'
     && lk != 9349                  // String 'return'
     && lk != 9350                  // Integer 'return'
     && lk != 9351                  // Complex 'return'
     && lk != 9352                  // Real 'return'
     && lk != 9475                  // Identifier 'switch'
     && lk != 9476                  // Character 'switch'
     && lk != 9477                  // String 'switch'
     && lk != 9478                  // Integer 'switch'
     && lk != 9479                  // Complex 'switch'
     && lk != 9480                  // Real 'switch'
     && lk != 9603                  // Identifier 'test'
     && lk != 9604                  // Character 'test'
     && lk != 9605                  // String 'test'
     && lk != 9606                  // Integer 'test'
     && lk != 9607                  // Complex 'test'
     && lk != 9608                  // Real 'test'
     && lk != 9731                  // Identifier 'throw'
     && lk != 9732                  // Character 'throw'
     && lk != 9733                  // String 'throw'
     && lk != 9734                  // Integer 'throw'
     && lk != 9735                  // Complex 'throw'
     && lk != 9736                  // Real 'throw'
     && lk != 9859                  // Identifier 'try'
     && lk != 9860                  // Character 'try'
     && lk != 9861                  // String 'try'
     && lk != 9862                  // Integer 'try'
     && lk != 9863                  // Complex 'try'
     && lk != 9864                  // Real 'try'
     && lk != 9987                  // Identifier 'while'
     && lk != 9988                  // Character 'while'
     && lk != 9989                  // String 'while'
     && lk != 9990                  // Integer 'while'
     && lk != 9991                  // Complex 'while'
     && lk != 9992                  // Real 'while'
     && lk != 10115                 // Identifier '{'
     && lk != 10116                 // Character '{'
     && lk != 10117                 // String '{'
     && lk != 10118                 // Integer '{'
     && lk != 10119                 // Complex '{'
     && lk != 10120                 // Real '{'
     && lk != 10243                 // Identifier '|'
     && lk != 10244                 // Character '|'
     && lk != 10245                 // String '|'
     && lk != 10246                 // Integer '|'
     && lk != 10247                 // Complex '|'
     && lk != 10248                 // Real '|'
     && lk != 10371                 // Identifier '|='
     && lk != 10372                 // Character '|='
     && lk != 10373                 // String '|='
     && lk != 10374                 // Integer '|='
     && lk != 10375                 // Complex '|='
     && lk != 10376                 // Real '|='
     && lk != 10499                 // Identifier '||'
     && lk != 10500                 // Character '||'
     && lk != 10501                 // String '||'
     && lk != 10502                 // Integer '||'
     && lk != 10503                 // Complex '||'
     && lk != 10504                 // Real '||'
     && lk != 10627                 // Identifier '}'
     && lk != 10628                 // Character '}'
     && lk != 10629                 // String '}'
     && lk != 10630                 // Integer '}'
     && lk != 10631                 // Complex '}'
     && lk != 10632                 // Real '}'
     && lk != 10755                 // Identifier '~'
     && lk != 10756                 // Character '~'
     && lk != 10757                 // String '~'
     && lk != 10758                 // Integer '~'
     && lk != 10759                 // Complex '~'
     && lk != 10760                 // Real '~'
     && lk != 16830                 // 'f32' Identifier END
     && lk != 16831                 // 'f64' Identifier END
     && lk != 16835                 // 'i32' Identifier END
     && lk != 16836                 // 'i64' Identifier END
     && lk != 19715                 // Identifier '++' END
     && lk != 19716                 // Character '++' END
     && lk != 19717                 // String '++' END
     && lk != 19718                 // Integer '++' END
     && lk != 19719                 // Complex '++' END
     && lk != 19720                 // Real '++' END
     && lk != 20227                 // Identifier '--' END
     && lk != 20228                 // Character '--' END
     && lk != 20229                 // String '--' END
     && lk != 20230                 // Integer '--' END
     && lk != 20231                 // Complex '--' END
     && lk != 20232                 // Real '--' END
     && lk != 22962                 // '[' ']' END
     && lk != 27087                 // '{' '}' END
     && lk != 49598                 // 'f32' Identifier Identifier
     && lk != 49599                 // 'f64' Identifier Identifier
     && lk != 49603                 // 'i32' Identifier Identifier
     && lk != 49604                 // 'i64' Identifier Identifier
     && lk != 55730                 // '[' ']' Identifier
     && lk != 59855                 // '{' '}' Identifier
     && lk != 65982                 // 'f32' Identifier Character
     && lk != 65983                 // 'f64' Identifier Character
     && lk != 65987                 // 'i32' Identifier Character
     && lk != 65988                 // 'i64' Identifier Character
     && lk != 72114                 // '[' ']' Character
     && lk != 76239                 // '{' '}' Character
     && lk != 82366                 // 'f32' Identifier String
     && lk != 82367                 // 'f64' Identifier String
     && lk != 82371                 // 'i32' Identifier String
     && lk != 82372                 // 'i64' Identifier String
     && lk != 88498                 // '[' ']' String
     && lk != 92623                 // '{' '}' String
     && lk != 98750                 // 'f32' Identifier Integer
     && lk != 98751                 // 'f64' Identifier Integer
     && lk != 98755                 // 'i32' Identifier Integer
     && lk != 98756                 // 'i64' Identifier Integer
     && lk != 104882                // '[' ']' Integer
     && lk != 109007                // '{' '}' Integer
     && lk != 115134                // 'f32' Identifier Complex
     && lk != 115135                // 'f64' Identifier Complex
     && lk != 115139                // 'i32' Identifier Complex
     && lk != 115140                // 'i64' Identifier Complex
     && lk != 121266                // '[' ']' Complex
     && lk != 125391                // '{' '}' Complex
     && lk != 131518                // 'f32' Identifier Real
     && lk != 131519                // 'f64' Identifier Real
     && lk != 131523                // 'i32' Identifier Real
     && lk != 131524                // 'i64' Identifier Real
     && lk != 137650                // '[' ']' Real
     && lk != 141775                // '{' '}' Real
     && lk != 147902                // 'f32' Identifier Comment
     && lk != 147903                // 'f64' Identifier Comment
     && lk != 147907                // 'i32' Identifier Comment
     && lk != 147908                // 'i64' Identifier Comment
     && lk != 150787                // Identifier '++' Comment
     && lk != 150788                // Character '++' Comment
     && lk != 150789                // String '++' Comment
     && lk != 150790                // Integer '++' Comment
     && lk != 150791                // Complex '++' Comment
     && lk != 150792                // Real '++' Comment
     && lk != 151299                // Identifier '--' Comment
     && lk != 151300                // Character '--' Comment
     && lk != 151301                // String '--' Comment
     && lk != 151302                // Integer '--' Comment
     && lk != 151303                // Complex '--' Comment
     && lk != 151304                // Real '--' Comment
     && lk != 154034                // '[' ']' Comment
     && lk != 158159                // '{' '}' Comment
     && lk != 197054                // 'f32' Identifier '!'
     && lk != 197055                // 'f64' Identifier '!'
     && lk != 197059                // 'i32' Identifier '!'
     && lk != 197060                // 'i64' Identifier '!'
     && lk != 199939                // Identifier '++' '!'
     && lk != 199940                // Character '++' '!'
     && lk != 199941                // String '++' '!'
     && lk != 199942                // Integer '++' '!'
     && lk != 199943                // Complex '++' '!'
     && lk != 199944                // Real '++' '!'
     && lk != 200451                // Identifier '--' '!'
     && lk != 200452                // Character '--' '!'
     && lk != 200453                // String '--' '!'
     && lk != 200454                // Integer '--' '!'
     && lk != 200455                // Complex '--' '!'
     && lk != 200456                // Real '--' '!'
     && lk != 203186                // '[' ']' '!'
     && lk != 207311                // '{' '}' '!'
     && lk != 213438                // 'f32' Identifier '!='
     && lk != 213439                // 'f64' Identifier '!='
     && lk != 213443                // 'i32' Identifier '!='
     && lk != 213444                // 'i64' Identifier '!='
     && lk != 216323                // Identifier '++' '!='
     && lk != 216324                // Character '++' '!='
     && lk != 216325                // String '++' '!='
     && lk != 216326                // Integer '++' '!='
     && lk != 216327                // Complex '++' '!='
     && lk != 216328                // Real '++' '!='
     && lk != 216835                // Identifier '--' '!='
     && lk != 216836                // Character '--' '!='
     && lk != 216837                // String '--' '!='
     && lk != 216838                // Integer '--' '!='
     && lk != 216839                // Complex '--' '!='
     && lk != 216840                // Real '--' '!='
     && lk != 219570                // '[' ']' '!='
     && lk != 223695                // '{' '}' '!='
     && lk != 246206                // 'f32' Identifier '%'
     && lk != 246207                // 'f64' Identifier '%'
     && lk != 246211                // 'i32' Identifier '%'
     && lk != 246212                // 'i64' Identifier '%'
     && lk != 249091                // Identifier '++' '%'
     && lk != 249092                // Character '++' '%'
     && lk != 249093                // String '++' '%'
     && lk != 249094                // Integer '++' '%'
     && lk != 249095                // Complex '++' '%'
     && lk != 249096                // Real '++' '%'
     && lk != 249603                // Identifier '--' '%'
     && lk != 249604                // Character '--' '%'
     && lk != 249605                // String '--' '%'
     && lk != 249606                // Integer '--' '%'
     && lk != 249607                // Complex '--' '%'
     && lk != 249608                // Real '--' '%'
     && lk != 252338                // '[' ']' '%'
     && lk != 256463                // '{' '}' '%'
     && lk != 262590                // 'f32' Identifier '%='
     && lk != 262591                // 'f64' Identifier '%='
     && lk != 262595                // 'i32' Identifier '%='
     && lk != 262596                // 'i64' Identifier '%='
     && lk != 265475                // Identifier '++' '%='
     && lk != 265476                // Character '++' '%='
     && lk != 265477                // String '++' '%='
     && lk != 265478                // Integer '++' '%='
     && lk != 265479                // Complex '++' '%='
     && lk != 265480                // Real '++' '%='
     && lk != 265987                // Identifier '--' '%='
     && lk != 265988                // Character '--' '%='
     && lk != 265989                // String '--' '%='
     && lk != 265990                // Integer '--' '%='
     && lk != 265991                // Complex '--' '%='
     && lk != 265992                // Real '--' '%='
     && lk != 268722                // '[' ']' '%='
     && lk != 272847                // '{' '}' '%='
     && lk != 278974                // 'f32' Identifier '&'
     && lk != 278975                // 'f64' Identifier '&'
     && lk != 278979                // 'i32' Identifier '&'
     && lk != 278980                // 'i64' Identifier '&'
     && lk != 281859                // Identifier '++' '&'
     && lk != 281860                // Character '++' '&'
     && lk != 281861                // String '++' '&'
     && lk != 281862                // Integer '++' '&'
     && lk != 281863                // Complex '++' '&'
     && lk != 281864                // Real '++' '&'
     && lk != 282371                // Identifier '--' '&'
     && lk != 282372                // Character '--' '&'
     && lk != 282373                // String '--' '&'
     && lk != 282374                // Integer '--' '&'
     && lk != 282375                // Complex '--' '&'
     && lk != 282376                // Real '--' '&'
     && lk != 285106                // '[' ']' '&'
     && lk != 289231                // '{' '}' '&'
     && lk != 295358                // 'f32' Identifier '&&'
     && lk != 295359                // 'f64' Identifier '&&'
     && lk != 295363                // 'i32' Identifier '&&'
     && lk != 295364                // 'i64' Identifier '&&'
     && lk != 298243                // Identifier '++' '&&'
     && lk != 298244                // Character '++' '&&'
     && lk != 298245                // String '++' '&&'
     && lk != 298246                // Integer '++' '&&'
     && lk != 298247                // Complex '++' '&&'
     && lk != 298248                // Real '++' '&&'
     && lk != 298755                // Identifier '--' '&&'
     && lk != 298756                // Character '--' '&&'
     && lk != 298757                // String '--' '&&'
     && lk != 298758                // Integer '--' '&&'
     && lk != 298759                // Complex '--' '&&'
     && lk != 298760                // Real '--' '&&'
     && lk != 301490                // '[' ']' '&&'
     && lk != 305615                // '{' '}' '&&'
     && lk != 311742                // 'f32' Identifier '&='
     && lk != 311743                // 'f64' Identifier '&='
     && lk != 311747                // 'i32' Identifier '&='
     && lk != 311748                // 'i64' Identifier '&='
     && lk != 314627                // Identifier '++' '&='
     && lk != 314628                // Character '++' '&='
     && lk != 314629                // String '++' '&='
     && lk != 314630                // Integer '++' '&='
     && lk != 314631                // Complex '++' '&='
     && lk != 314632                // Real '++' '&='
     && lk != 315139                // Identifier '--' '&='
     && lk != 315140                // Character '--' '&='
     && lk != 315141                // String '--' '&='
     && lk != 315142                // Integer '--' '&='
     && lk != 315143                // Complex '--' '&='
     && lk != 315144                // Real '--' '&='
     && lk != 317874                // '[' ']' '&='
     && lk != 321999                // '{' '}' '&='
     && lk != 334258                // '[' ']' '('
     && lk != 338383                // '{' '}' '('
     && lk != 344510                // 'f32' Identifier ')'
     && lk != 344511                // 'f64' Identifier ')'
     && lk != 344515                // 'i32' Identifier ')'
     && lk != 344516                // 'i64' Identifier ')'
     && lk != 347395                // Identifier '++' ')'
     && lk != 347396                // Character '++' ')'
     && lk != 347397                // String '++' ')'
     && lk != 347398                // Integer '++' ')'
     && lk != 347399                // Complex '++' ')'
     && lk != 347400                // Real '++' ')'
     && lk != 347907                // Identifier '--' ')'
     && lk != 347908                // Character '--' ')'
     && lk != 347909                // String '--' ')'
     && lk != 347910                // Integer '--' ')'
     && lk != 347911                // Complex '--' ')'
     && lk != 347912                // Real '--' ')'
     && lk != 350642                // '[' ']' ')'
     && lk != 354767                // '{' '}' ')'
     && lk != 360894                // 'f32' Identifier '*'
     && lk != 360895                // 'f64' Identifier '*'
     && lk != 360899                // 'i32' Identifier '*'
     && lk != 360900                // 'i64' Identifier '*'
     && lk != 363779                // Identifier '++' '*'
     && lk != 363780                // Character '++' '*'
     && lk != 363781                // String '++' '*'
     && lk != 363782                // Integer '++' '*'
     && lk != 363783                // Complex '++' '*'
     && lk != 363784                // Real '++' '*'
     && lk != 364291                // Identifier '--' '*'
     && lk != 364292                // Character '--' '*'
     && lk != 364293                // String '--' '*'
     && lk != 364294                // Integer '--' '*'
     && lk != 364295                // Complex '--' '*'
     && lk != 364296                // Real '--' '*'
     && lk != 367026                // '[' ']' '*'
     && lk != 371151                // '{' '}' '*'
     && lk != 377278                // 'f32' Identifier '**'
     && lk != 377279                // 'f64' Identifier '**'
     && lk != 377283                // 'i32' Identifier '**'
     && lk != 377284                // 'i64' Identifier '**'
     && lk != 380163                // Identifier '++' '**'
     && lk != 380164                // Character '++' '**'
     && lk != 380165                // String '++' '**'
     && lk != 380166                // Integer '++' '**'
     && lk != 380167                // Complex '++' '**'
     && lk != 380168                // Real '++' '**'
     && lk != 380675                // Identifier '--' '**'
     && lk != 380676                // Character '--' '**'
     && lk != 380677                // String '--' '**'
     && lk != 380678                // Integer '--' '**'
     && lk != 380679                // Complex '--' '**'
     && lk != 380680                // Real '--' '**'
     && lk != 383410                // '[' ']' '**'
     && lk != 387535                // '{' '}' '**'
     && lk != 393662                // 'f32' Identifier '*='
     && lk != 393663                // 'f64' Identifier '*='
     && lk != 393667                // 'i32' Identifier '*='
     && lk != 393668                // 'i64' Identifier '*='
     && lk != 396547                // Identifier '++' '*='
     && lk != 396548                // Character '++' '*='
     && lk != 396549                // String '++' '*='
     && lk != 396550                // Integer '++' '*='
     && lk != 396551                // Complex '++' '*='
     && lk != 396552                // Real '++' '*='
     && lk != 397059                // Identifier '--' '*='
     && lk != 397060                // Character '--' '*='
     && lk != 397061                // String '--' '*='
     && lk != 397062                // Integer '--' '*='
     && lk != 397063                // Complex '--' '*='
     && lk != 397064                // Real '--' '*='
     && lk != 399794                // '[' ']' '*='
     && lk != 403919                // '{' '}' '*='
     && lk != 410046                // 'f32' Identifier '+'
     && lk != 410047                // 'f64' Identifier '+'
     && lk != 410051                // 'i32' Identifier '+'
     && lk != 410052                // 'i64' Identifier '+'
     && lk != 412931                // Identifier '++' '+'
     && lk != 412932                // Character '++' '+'
     && lk != 412933                // String '++' '+'
     && lk != 412934                // Integer '++' '+'
     && lk != 412935                // Complex '++' '+'
     && lk != 412936                // Real '++' '+'
     && lk != 413443                // Identifier '--' '+'
     && lk != 413444                // Character '--' '+'
     && lk != 413445                // String '--' '+'
     && lk != 413446                // Integer '--' '+'
     && lk != 413447                // Complex '--' '+'
     && lk != 413448                // Real '--' '+'
     && lk != 416178                // '[' ']' '+'
     && lk != 420303                // '{' '}' '+'
     && lk != 429315                // Identifier '++' '++'
     && lk != 429316                // Character '++' '++'
     && lk != 429317                // String '++' '++'
     && lk != 429318                // Integer '++' '++'
     && lk != 429319                // Complex '++' '++'
     && lk != 429320                // Real '++' '++'
     && lk != 429827                // Identifier '--' '++'
     && lk != 429828                // Character '--' '++'
     && lk != 429829                // String '--' '++'
     && lk != 429830                // Integer '--' '++'
     && lk != 429831                // Complex '--' '++'
     && lk != 429832                // Real '--' '++'
     && lk != 442814                // 'f32' Identifier '+='
     && lk != 442815                // 'f64' Identifier '+='
     && lk != 442819                // 'i32' Identifier '+='
     && lk != 442820                // 'i64' Identifier '+='
     && lk != 445699                // Identifier '++' '+='
     && lk != 445700                // Character '++' '+='
     && lk != 445701                // String '++' '+='
     && lk != 445702                // Integer '++' '+='
     && lk != 445703                // Complex '++' '+='
     && lk != 445704                // Real '++' '+='
     && lk != 446211                // Identifier '--' '+='
     && lk != 446212                // Character '--' '+='
     && lk != 446213                // String '--' '+='
     && lk != 446214                // Integer '--' '+='
     && lk != 446215                // Complex '--' '+='
     && lk != 446216                // Real '--' '+='
     && lk != 448946                // '[' ']' '+='
     && lk != 453071                // '{' '}' '+='
     && lk != 459198                // 'f32' Identifier ','
     && lk != 459199                // 'f64' Identifier ','
     && lk != 459203                // 'i32' Identifier ','
     && lk != 459204                // 'i64' Identifier ','
     && lk != 462083                // Identifier '++' ','
     && lk != 462084                // Character '++' ','
     && lk != 462085                // String '++' ','
     && lk != 462086                // Integer '++' ','
     && lk != 462087                // Complex '++' ','
     && lk != 462088                // Real '++' ','
     && lk != 462595                // Identifier '--' ','
     && lk != 462596                // Character '--' ','
     && lk != 462597                // String '--' ','
     && lk != 462598                // Integer '--' ','
     && lk != 462599                // Complex '--' ','
     && lk != 462600                // Real '--' ','
     && lk != 465330                // '[' ']' ','
     && lk != 469455                // '{' '}' ','
     && lk != 475582                // 'f32' Identifier '-'
     && lk != 475583                // 'f64' Identifier '-'
     && lk != 475587                // 'i32' Identifier '-'
     && lk != 475588                // 'i64' Identifier '-'
     && lk != 478467                // Identifier '++' '-'
     && lk != 478468                // Character '++' '-'
     && lk != 478469                // String '++' '-'
     && lk != 478470                // Integer '++' '-'
     && lk != 478471                // Complex '++' '-'
     && lk != 478472                // Real '++' '-'
     && lk != 478979                // Identifier '--' '-'
     && lk != 478980                // Character '--' '-'
     && lk != 478981                // String '--' '-'
     && lk != 478982                // Integer '--' '-'
     && lk != 478983                // Complex '--' '-'
     && lk != 478984                // Real '--' '-'
     && lk != 481714                // '[' ']' '-'
     && lk != 485839                // '{' '}' '-'
     && lk != 494851                // Identifier '++' '--'
     && lk != 494852                // Character '++' '--'
     && lk != 494853                // String '++' '--'
     && lk != 494854                // Integer '++' '--'
     && lk != 494855                // Complex '++' '--'
     && lk != 494856                // Real '++' '--'
     && lk != 495363                // Identifier '--' '--'
     && lk != 495364                // Character '--' '--'
     && lk != 495365                // String '--' '--'
     && lk != 495366                // Integer '--' '--'
     && lk != 495367                // Complex '--' '--'
     && lk != 495368                // Real '--' '--'
     && lk != 508350                // 'f32' Identifier '-='
     && lk != 508351                // 'f64' Identifier '-='
     && lk != 508355                // 'i32' Identifier '-='
     && lk != 508356                // 'i64' Identifier '-='
     && lk != 511235                // Identifier '++' '-='
     && lk != 511236                // Character '++' '-='
     && lk != 511237                // String '++' '-='
     && lk != 511238                // Integer '++' '-='
     && lk != 511239                // Complex '++' '-='
     && lk != 511240                // Real '++' '-='
     && lk != 511747                // Identifier '--' '-='
     && lk != 511748                // Character '--' '-='
     && lk != 511749                // String '--' '-='
     && lk != 511750                // Integer '--' '-='
     && lk != 511751                // Complex '--' '-='
     && lk != 511752                // Real '--' '-='
     && lk != 514482                // '[' ']' '-='
     && lk != 518607                // '{' '}' '-='
     && lk != 541118                // 'f32' Identifier '/'
     && lk != 541119                // 'f64' Identifier '/'
     && lk != 541123                // 'i32' Identifier '/'
     && lk != 541124                // 'i64' Identifier '/'
     && lk != 544003                // Identifier '++' '/'
     && lk != 544004                // Character '++' '/'
     && lk != 544005                // String '++' '/'
     && lk != 544006                // Integer '++' '/'
     && lk != 544007                // Complex '++' '/'
     && lk != 544008                // Real '++' '/'
     && lk != 544515                // Identifier '--' '/'
     && lk != 544516                // Character '--' '/'
     && lk != 544517                // String '--' '/'
     && lk != 544518                // Integer '--' '/'
     && lk != 544519                // Complex '--' '/'
     && lk != 544520                // Real '--' '/'
     && lk != 547250                // '[' ']' '/'
     && lk != 551375                // '{' '}' '/'
     && lk != 557502                // 'f32' Identifier '/='
     && lk != 557503                // 'f64' Identifier '/='
     && lk != 557507                // 'i32' Identifier '/='
     && lk != 557508                // 'i64' Identifier '/='
     && lk != 560387                // Identifier '++' '/='
     && lk != 560388                // Character '++' '/='
     && lk != 560389                // String '++' '/='
     && lk != 560390                // Integer '++' '/='
     && lk != 560391                // Complex '++' '/='
     && lk != 560392                // Real '++' '/='
     && lk != 560899                // Identifier '--' '/='
     && lk != 560900                // Character '--' '/='
     && lk != 560901                // String '--' '/='
     && lk != 560902                // Integer '--' '/='
     && lk != 560903                // Complex '--' '/='
     && lk != 560904                // Real '--' '/='
     && lk != 563634                // '[' ']' '/='
     && lk != 567759                // '{' '}' '/='
     && lk != 573886                // 'f32' Identifier ':'
     && lk != 573887                // 'f64' Identifier ':'
     && lk != 573891                // 'i32' Identifier ':'
     && lk != 573892                // 'i64' Identifier ':'
     && lk != 576771                // Identifier '++' ':'
     && lk != 576772                // Character '++' ':'
     && lk != 576773                // String '++' ':'
     && lk != 576774                // Integer '++' ':'
     && lk != 576775                // Complex '++' ':'
     && lk != 576776                // Real '++' ':'
     && lk != 577283                // Identifier '--' ':'
     && lk != 577284                // Character '--' ':'
     && lk != 577285                // String '--' ':'
     && lk != 577286                // Integer '--' ':'
     && lk != 577287                // Complex '--' ':'
     && lk != 577288                // Real '--' ':'
     && lk != 580018                // '[' ']' ':'
     && lk != 584143                // '{' '}' ':'
     && lk != 590270                // 'f32' Identifier ':='
     && lk != 590271                // 'f64' Identifier ':='
     && lk != 590275                // 'i32' Identifier ':='
     && lk != 590276                // 'i64' Identifier ':='
     && lk != 593155                // Identifier '++' ':='
     && lk != 593156                // Character '++' ':='
     && lk != 593157                // String '++' ':='
     && lk != 593158                // Integer '++' ':='
     && lk != 593159                // Complex '++' ':='
     && lk != 593160                // Real '++' ':='
     && lk != 593667                // Identifier '--' ':='
     && lk != 593668                // Character '--' ':='
     && lk != 593669                // String '--' ':='
     && lk != 593670                // Integer '--' ':='
     && lk != 593671                // Complex '--' ':='
     && lk != 593672                // Real '--' ':='
     && lk != 596402                // '[' ']' ':='
     && lk != 600527                // '{' '}' ':='
     && lk != 606654                // 'f32' Identifier ';'
     && lk != 606655                // 'f64' Identifier ';'
     && lk != 606659                // 'i32' Identifier ';'
     && lk != 606660                // 'i64' Identifier ';'
     && lk != 609539                // Identifier '++' ';'
     && lk != 609540                // Character '++' ';'
     && lk != 609541                // String '++' ';'
     && lk != 609542                // Integer '++' ';'
     && lk != 609543                // Complex '++' ';'
     && lk != 609544                // Real '++' ';'
     && lk != 610051                // Identifier '--' ';'
     && lk != 610052                // Character '--' ';'
     && lk != 610053                // String '--' ';'
     && lk != 610054                // Integer '--' ';'
     && lk != 610055                // Complex '--' ';'
     && lk != 610056                // Real '--' ';'
     && lk != 612786                // '[' ']' ';'
     && lk != 616911                // '{' '}' ';'
     && lk != 623038                // 'f32' Identifier '<'
     && lk != 623039                // 'f64' Identifier '<'
     && lk != 623043                // 'i32' Identifier '<'
     && lk != 623044                // 'i64' Identifier '<'
     && lk != 625923                // Identifier '++' '<'
     && lk != 625924                // Character '++' '<'
     && lk != 625925                // String '++' '<'
     && lk != 625926                // Integer '++' '<'
     && lk != 625927                // Complex '++' '<'
     && lk != 625928                // Real '++' '<'
     && lk != 626435                // Identifier '--' '<'
     && lk != 626436                // Character '--' '<'
     && lk != 626437                // String '--' '<'
     && lk != 626438                // Integer '--' '<'
     && lk != 626439                // Complex '--' '<'
     && lk != 626440                // Real '--' '<'
     && lk != 629170                // '[' ']' '<'
     && lk != 633295                // '{' '}' '<'
     && lk != 639422                // 'f32' Identifier '<<'
     && lk != 639423                // 'f64' Identifier '<<'
     && lk != 639427                // 'i32' Identifier '<<'
     && lk != 639428                // 'i64' Identifier '<<'
     && lk != 642307                // Identifier '++' '<<'
     && lk != 642308                // Character '++' '<<'
     && lk != 642309                // String '++' '<<'
     && lk != 642310                // Integer '++' '<<'
     && lk != 642311                // Complex '++' '<<'
     && lk != 642312                // Real '++' '<<'
     && lk != 642819                // Identifier '--' '<<'
     && lk != 642820                // Character '--' '<<'
     && lk != 642821                // String '--' '<<'
     && lk != 642822                // Integer '--' '<<'
     && lk != 642823                // Complex '--' '<<'
     && lk != 642824                // Real '--' '<<'
     && lk != 645554                // '[' ']' '<<'
     && lk != 649679                // '{' '}' '<<'
     && lk != 655806                // 'f32' Identifier '<<='
     && lk != 655807                // 'f64' Identifier '<<='
     && lk != 655811                // 'i32' Identifier '<<='
     && lk != 655812                // 'i64' Identifier '<<='
     && lk != 658691                // Identifier '++' '<<='
     && lk != 658692                // Character '++' '<<='
     && lk != 658693                // String '++' '<<='
     && lk != 658694                // Integer '++' '<<='
     && lk != 658695                // Complex '++' '<<='
     && lk != 658696                // Real '++' '<<='
     && lk != 659203                // Identifier '--' '<<='
     && lk != 659204                // Character '--' '<<='
     && lk != 659205                // String '--' '<<='
     && lk != 659206                // Integer '--' '<<='
     && lk != 659207                // Complex '--' '<<='
     && lk != 659208                // Real '--' '<<='
     && lk != 661938                // '[' ']' '<<='
     && lk != 666063                // '{' '}' '<<='
     && lk != 672190                // 'f32' Identifier '<='
     && lk != 672191                // 'f64' Identifier '<='
     && lk != 672195                // 'i32' Identifier '<='
     && lk != 672196                // 'i64' Identifier '<='
     && lk != 675075                // Identifier '++' '<='
     && lk != 675076                // Character '++' '<='
     && lk != 675077                // String '++' '<='
     && lk != 675078                // Integer '++' '<='
     && lk != 675079                // Complex '++' '<='
     && lk != 675080                // Real '++' '<='
     && lk != 675587                // Identifier '--' '<='
     && lk != 675588                // Character '--' '<='
     && lk != 675589                // String '--' '<='
     && lk != 675590                // Integer '--' '<='
     && lk != 675591                // Complex '--' '<='
     && lk != 675592                // Real '--' '<='
     && lk != 678322                // '[' ']' '<='
     && lk != 682447                // '{' '}' '<='
     && lk != 688574                // 'f32' Identifier '='
     && lk != 688575                // 'f64' Identifier '='
     && lk != 688579                // 'i32' Identifier '='
     && lk != 688580                // 'i64' Identifier '='
     && lk != 691459                // Identifier '++' '='
     && lk != 691460                // Character '++' '='
     && lk != 691461                // String '++' '='
     && lk != 691462                // Integer '++' '='
     && lk != 691463                // Complex '++' '='
     && lk != 691464                // Real '++' '='
     && lk != 691971                // Identifier '--' '='
     && lk != 691972                // Character '--' '='
     && lk != 691973                // String '--' '='
     && lk != 691974                // Integer '--' '='
     && lk != 691975                // Complex '--' '='
     && lk != 691976                // Real '--' '='
     && lk != 694706                // '[' ']' '='
     && lk != 698831                // '{' '}' '='
     && lk != 704958                // 'f32' Identifier '=='
     && lk != 704959                // 'f64' Identifier '=='
     && lk != 704963                // 'i32' Identifier '=='
     && lk != 704964                // 'i64' Identifier '=='
     && lk != 707843                // Identifier '++' '=='
     && lk != 707844                // Character '++' '=='
     && lk != 707845                // String '++' '=='
     && lk != 707846                // Integer '++' '=='
     && lk != 707847                // Complex '++' '=='
     && lk != 707848                // Real '++' '=='
     && lk != 708355                // Identifier '--' '=='
     && lk != 708356                // Character '--' '=='
     && lk != 708357                // String '--' '=='
     && lk != 708358                // Integer '--' '=='
     && lk != 708359                // Complex '--' '=='
     && lk != 708360                // Real '--' '=='
     && lk != 711090                // '[' ']' '=='
     && lk != 715215                // '{' '}' '=='
     && lk != 721342                // 'f32' Identifier '>'
     && lk != 721343                // 'f64' Identifier '>'
     && lk != 721347                // 'i32' Identifier '>'
     && lk != 721348                // 'i64' Identifier '>'
     && lk != 724227                // Identifier '++' '>'
     && lk != 724228                // Character '++' '>'
     && lk != 724229                // String '++' '>'
     && lk != 724230                // Integer '++' '>'
     && lk != 724231                // Complex '++' '>'
     && lk != 724232                // Real '++' '>'
     && lk != 724739                // Identifier '--' '>'
     && lk != 724740                // Character '--' '>'
     && lk != 724741                // String '--' '>'
     && lk != 724742                // Integer '--' '>'
     && lk != 724743                // Complex '--' '>'
     && lk != 724744                // Real '--' '>'
     && lk != 727474                // '[' ']' '>'
     && lk != 731599                // '{' '}' '>'
     && lk != 737726                // 'f32' Identifier '>='
     && lk != 737727                // 'f64' Identifier '>='
     && lk != 737731                // 'i32' Identifier '>='
     && lk != 737732                // 'i64' Identifier '>='
     && lk != 740611                // Identifier '++' '>='
     && lk != 740612                // Character '++' '>='
     && lk != 740613                // String '++' '>='
     && lk != 740614                // Integer '++' '>='
     && lk != 740615                // Complex '++' '>='
     && lk != 740616                // Real '++' '>='
     && lk != 741123                // Identifier '--' '>='
     && lk != 741124                // Character '--' '>='
     && lk != 741125                // String '--' '>='
     && lk != 741126                // Integer '--' '>='
     && lk != 741127                // Complex '--' '>='
     && lk != 741128                // Real '--' '>='
     && lk != 743858                // '[' ']' '>='
     && lk != 747983                // '{' '}' '>='
     && lk != 754110                // 'f32' Identifier '>>'
     && lk != 754111                // 'f64' Identifier '>>'
     && lk != 754115                // 'i32' Identifier '>>'
     && lk != 754116                // 'i64' Identifier '>>'
     && lk != 756995                // Identifier '++' '>>'
     && lk != 756996                // Character '++' '>>'
     && lk != 756997                // String '++' '>>'
     && lk != 756998                // Integer '++' '>>'
     && lk != 756999                // Complex '++' '>>'
     && lk != 757000                // Real '++' '>>'
     && lk != 757507                // Identifier '--' '>>'
     && lk != 757508                // Character '--' '>>'
     && lk != 757509                // String '--' '>>'
     && lk != 757510                // Integer '--' '>>'
     && lk != 757511                // Complex '--' '>>'
     && lk != 757512                // Real '--' '>>'
     && lk != 760242                // '[' ']' '>>'
     && lk != 764367                // '{' '}' '>>'
     && lk != 770494                // 'f32' Identifier '>>='
     && lk != 770495                // 'f64' Identifier '>>='
     && lk != 770499                // 'i32' Identifier '>>='
     && lk != 770500                // 'i64' Identifier '>>='
     && lk != 773379                // Identifier '++' '>>='
     && lk != 773380                // Character '++' '>>='
     && lk != 773381                // String '++' '>>='
     && lk != 773382                // Integer '++' '>>='
     && lk != 773383                // Complex '++' '>>='
     && lk != 773384                // Real '++' '>>='
     && lk != 773891                // Identifier '--' '>>='
     && lk != 773892                // Character '--' '>>='
     && lk != 773893                // String '--' '>>='
     && lk != 773894                // Integer '--' '>>='
     && lk != 773895                // Complex '--' '>>='
     && lk != 773896                // Real '--' '>>='
     && lk != 776626                // '[' ']' '>>='
     && lk != 780751                // '{' '}' '>>='
     && lk != 786878                // 'f32' Identifier '?'
     && lk != 786879                // 'f64' Identifier '?'
     && lk != 786883                // 'i32' Identifier '?'
     && lk != 786884                // 'i64' Identifier '?'
     && lk != 789763                // Identifier '++' '?'
     && lk != 789764                // Character '++' '?'
     && lk != 789765                // String '++' '?'
     && lk != 789766                // Integer '++' '?'
     && lk != 789767                // Complex '++' '?'
     && lk != 789768                // Real '++' '?'
     && lk != 790275                // Identifier '--' '?'
     && lk != 790276                // Character '--' '?'
     && lk != 790277                // String '--' '?'
     && lk != 790278                // Integer '--' '?'
     && lk != 790279                // Complex '--' '?'
     && lk != 790280                // Real '--' '?'
     && lk != 793010                // '[' ']' '?'
     && lk != 797135                // '{' '}' '?'
     && lk != 803262                // 'f32' Identifier '?='
     && lk != 803263                // 'f64' Identifier '?='
     && lk != 803267                // 'i32' Identifier '?='
     && lk != 803268                // 'i64' Identifier '?='
     && lk != 806147                // Identifier '++' '?='
     && lk != 806148                // Character '++' '?='
     && lk != 806149                // String '++' '?='
     && lk != 806150                // Integer '++' '?='
     && lk != 806151                // Complex '++' '?='
     && lk != 806152                // Real '++' '?='
     && lk != 806659                // Identifier '--' '?='
     && lk != 806660                // Character '--' '?='
     && lk != 806661                // String '--' '?='
     && lk != 806662                // Integer '--' '?='
     && lk != 806663                // Complex '--' '?='
     && lk != 806664                // Real '--' '?='
     && lk != 809394                // '[' ']' '?='
     && lk != 813519                // '{' '}' '?='
     && lk != 825778                // '[' ']' '['
     && lk != 829903                // '{' '}' '['
     && lk != 836030                // 'f32' Identifier ']'
     && lk != 836031                // 'f64' Identifier ']'
     && lk != 836035                // 'i32' Identifier ']'
     && lk != 836036                // 'i64' Identifier ']'
     && lk != 838915                // Identifier '++' ']'
     && lk != 838916                // Character '++' ']'
     && lk != 838917                // String '++' ']'
     && lk != 838918                // Integer '++' ']'
     && lk != 838919                // Complex '++' ']'
     && lk != 838920                // Real '++' ']'
     && lk != 839427                // Identifier '--' ']'
     && lk != 839428                // Character '--' ']'
     && lk != 839429                // String '--' ']'
     && lk != 839430                // Integer '--' ']'
     && lk != 839431                // Complex '--' ']'
     && lk != 839432                // Real '--' ']'
     && lk != 842162                // '[' ']' ']'
     && lk != 846287                // '{' '}' ']'
     && lk != 852414                // 'f32' Identifier '^'
     && lk != 852415                // 'f64' Identifier '^'
     && lk != 852419                // 'i32' Identifier '^'
     && lk != 852420                // 'i64' Identifier '^'
     && lk != 855299                // Identifier '++' '^'
     && lk != 855300                // Character '++' '^'
     && lk != 855301                // String '++' '^'
     && lk != 855302                // Integer '++' '^'
     && lk != 855303                // Complex '++' '^'
     && lk != 855304                // Real '++' '^'
     && lk != 855811                // Identifier '--' '^'
     && lk != 855812                // Character '--' '^'
     && lk != 855813                // String '--' '^'
     && lk != 855814                // Integer '--' '^'
     && lk != 855815                // Complex '--' '^'
     && lk != 855816                // Real '--' '^'
     && lk != 858546                // '[' ']' '^'
     && lk != 862671                // '{' '}' '^'
     && lk != 868798                // 'f32' Identifier '^='
     && lk != 868799                // 'f64' Identifier '^='
     && lk != 868803                // 'i32' Identifier '^='
     && lk != 868804                // 'i64' Identifier '^='
     && lk != 871683                // Identifier '++' '^='
     && lk != 871684                // Character '++' '^='
     && lk != 871685                // String '++' '^='
     && lk != 871686                // Integer '++' '^='
     && lk != 871687                // Complex '++' '^='
     && lk != 871688                // Real '++' '^='
     && lk != 872195                // Identifier '--' '^='
     && lk != 872196                // Character '--' '^='
     && lk != 872197                // String '--' '^='
     && lk != 872198                // Integer '--' '^='
     && lk != 872199                // Complex '--' '^='
     && lk != 872200                // Real '--' '^='
     && lk != 874930                // '[' ']' '^='
     && lk != 879055                // '{' '}' '^='
     && lk != 885182                // 'f32' Identifier 'break'
     && lk != 885183                // 'f64' Identifier 'break'
     && lk != 885187                // 'i32' Identifier 'break'
     && lk != 885188                // 'i64' Identifier 'break'
     && lk != 888067                // Identifier '++' 'break'
     && lk != 888068                // Character '++' 'break'
     && lk != 888069                // String '++' 'break'
     && lk != 888070                // Integer '++' 'break'
     && lk != 888071                // Complex '++' 'break'
     && lk != 888072                // Real '++' 'break'
     && lk != 888579                // Identifier '--' 'break'
     && lk != 888580                // Character '--' 'break'
     && lk != 888581                // String '--' 'break'
     && lk != 888582                // Integer '--' 'break'
     && lk != 888583                // Complex '--' 'break'
     && lk != 888584                // Real '--' 'break'
     && lk != 891314                // '[' ']' 'break'
     && lk != 895439                // '{' '}' 'break'
     && lk != 901566                // 'f32' Identifier 'case'
     && lk != 901567                // 'f64' Identifier 'case'
     && lk != 901571                // 'i32' Identifier 'case'
     && lk != 901572                // 'i64' Identifier 'case'
     && lk != 904451                // Identifier '++' 'case'
     && lk != 904452                // Character '++' 'case'
     && lk != 904453                // String '++' 'case'
     && lk != 904454                // Integer '++' 'case'
     && lk != 904455                // Complex '++' 'case'
     && lk != 904456                // Real '++' 'case'
     && lk != 904963                // Identifier '--' 'case'
     && lk != 904964                // Character '--' 'case'
     && lk != 904965                // String '--' 'case'
     && lk != 904966                // Integer '--' 'case'
     && lk != 904967                // Complex '--' 'case'
     && lk != 904968                // Real '--' 'case'
     && lk != 907698                // '[' ']' 'case'
     && lk != 911823                // '{' '}' 'case'
     && lk != 917950                // 'f32' Identifier 'catch'
     && lk != 917951                // 'f64' Identifier 'catch'
     && lk != 917955                // 'i32' Identifier 'catch'
     && lk != 917956                // 'i64' Identifier 'catch'
     && lk != 920835                // Identifier '++' 'catch'
     && lk != 920836                // Character '++' 'catch'
     && lk != 920837                // String '++' 'catch'
     && lk != 920838                // Integer '++' 'catch'
     && lk != 920839                // Complex '++' 'catch'
     && lk != 920840                // Real '++' 'catch'
     && lk != 921347                // Identifier '--' 'catch'
     && lk != 921348                // Character '--' 'catch'
     && lk != 921349                // String '--' 'catch'
     && lk != 921350                // Integer '--' 'catch'
     && lk != 921351                // Complex '--' 'catch'
     && lk != 921352                // Real '--' 'catch'
     && lk != 924082                // '[' ']' 'catch'
     && lk != 928207                // '{' '}' 'catch'
     && lk != 934334                // 'f32' Identifier 'continue'
     && lk != 934335                // 'f64' Identifier 'continue'
     && lk != 934339                // 'i32' Identifier 'continue'
     && lk != 934340                // 'i64' Identifier 'continue'
     && lk != 937219                // Identifier '++' 'continue'
     && lk != 937220                // Character '++' 'continue'
     && lk != 937221                // String '++' 'continue'
     && lk != 937222                // Integer '++' 'continue'
     && lk != 937223                // Complex '++' 'continue'
     && lk != 937224                // Real '++' 'continue'
     && lk != 937731                // Identifier '--' 'continue'
     && lk != 937732                // Character '--' 'continue'
     && lk != 937733                // String '--' 'continue'
     && lk != 937734                // Integer '--' 'continue'
     && lk != 937735                // Complex '--' 'continue'
     && lk != 937736                // Real '--' 'continue'
     && lk != 940466                // '[' ']' 'continue'
     && lk != 944591                // '{' '}' 'continue'
     && lk != 950718                // 'f32' Identifier 'default'
     && lk != 950719                // 'f64' Identifier 'default'
     && lk != 950723                // 'i32' Identifier 'default'
     && lk != 950724                // 'i64' Identifier 'default'
     && lk != 953603                // Identifier '++' 'default'
     && lk != 953604                // Character '++' 'default'
     && lk != 953605                // String '++' 'default'
     && lk != 953606                // Integer '++' 'default'
     && lk != 953607                // Complex '++' 'default'
     && lk != 953608                // Real '++' 'default'
     && lk != 954115                // Identifier '--' 'default'
     && lk != 954116                // Character '--' 'default'
     && lk != 954117                // String '--' 'default'
     && lk != 954118                // Integer '--' 'default'
     && lk != 954119                // Complex '--' 'default'
     && lk != 954120                // Real '--' 'default'
     && lk != 956850                // '[' ']' 'default'
     && lk != 960975                // '{' '}' 'default'
     && lk != 967102                // 'f32' Identifier 'do'
     && lk != 967103                // 'f64' Identifier 'do'
     && lk != 967107                // 'i32' Identifier 'do'
     && lk != 967108                // 'i64' Identifier 'do'
     && lk != 969987                // Identifier '++' 'do'
     && lk != 969988                // Character '++' 'do'
     && lk != 969989                // String '++' 'do'
     && lk != 969990                // Integer '++' 'do'
     && lk != 969991                // Complex '++' 'do'
     && lk != 969992                // Real '++' 'do'
     && lk != 970499                // Identifier '--' 'do'
     && lk != 970500                // Character '--' 'do'
     && lk != 970501                // String '--' 'do'
     && lk != 970502                // Integer '--' 'do'
     && lk != 970503                // Complex '--' 'do'
     && lk != 970504                // Real '--' 'do'
     && lk != 973234                // '[' ']' 'do'
     && lk != 977359                // '{' '}' 'do'
     && lk != 983486                // 'f32' Identifier 'else'
     && lk != 983487                // 'f64' Identifier 'else'
     && lk != 983491                // 'i32' Identifier 'else'
     && lk != 983492                // 'i64' Identifier 'else'
     && lk != 986371                // Identifier '++' 'else'
     && lk != 986372                // Character '++' 'else'
     && lk != 986373                // String '++' 'else'
     && lk != 986374                // Integer '++' 'else'
     && lk != 986375                // Complex '++' 'else'
     && lk != 986376                // Real '++' 'else'
     && lk != 986883                // Identifier '--' 'else'
     && lk != 986884                // Character '--' 'else'
     && lk != 986885                // String '--' 'else'
     && lk != 986886                // Integer '--' 'else'
     && lk != 986887                // Complex '--' 'else'
     && lk != 986888                // Real '--' 'else'
     && lk != 989618                // '[' ']' 'else'
     && lk != 993743                // '{' '}' 'else'
     && lk != 999870                // 'f32' Identifier 'export'
     && lk != 999871                // 'f64' Identifier 'export'
     && lk != 999875                // 'i32' Identifier 'export'
     && lk != 999876                // 'i64' Identifier 'export'
     && lk != 1002755               // Identifier '++' 'export'
     && lk != 1002756               // Character '++' 'export'
     && lk != 1002757               // String '++' 'export'
     && lk != 1002758               // Integer '++' 'export'
     && lk != 1002759               // Complex '++' 'export'
     && lk != 1002760               // Real '++' 'export'
     && lk != 1003267               // Identifier '--' 'export'
     && lk != 1003268               // Character '--' 'export'
     && lk != 1003269               // String '--' 'export'
     && lk != 1003270               // Integer '--' 'export'
     && lk != 1003271               // Complex '--' 'export'
     && lk != 1003272               // Real '--' 'export'
     && lk != 1006002               // '[' ']' 'export'
     && lk != 1010127               // '{' '}' 'export'
     && lk != 1016254               // 'f32' Identifier 'f32'
     && lk != 1016255               // 'f64' Identifier 'f32'
     && lk != 1016259               // 'i32' Identifier 'f32'
     && lk != 1016260               // 'i64' Identifier 'f32'
     && lk != 1022386               // '[' ']' 'f32'
     && lk != 1026511               // '{' '}' 'f32'
     && lk != 1032638               // 'f32' Identifier 'f64'
     && lk != 1032639               // 'f64' Identifier 'f64'
     && lk != 1032643               // 'i32' Identifier 'f64'
     && lk != 1032644               // 'i64' Identifier 'f64'
     && lk != 1038770               // '[' ']' 'f64'
     && lk != 1042895               // '{' '}' 'f64'
     && lk != 1049022               // 'f32' Identifier 'for'
     && lk != 1049023               // 'f64' Identifier 'for'
     && lk != 1049027               // 'i32' Identifier 'for'
     && lk != 1049028               // 'i64' Identifier 'for'
     && lk != 1051907               // Identifier '++' 'for'
     && lk != 1051908               // Character '++' 'for'
     && lk != 1051909               // String '++' 'for'
     && lk != 1051910               // Integer '++' 'for'
     && lk != 1051911               // Complex '++' 'for'
     && lk != 1051912               // Real '++' 'for'
     && lk != 1052419               // Identifier '--' 'for'
     && lk != 1052420               // Character '--' 'for'
     && lk != 1052421               // String '--' 'for'
     && lk != 1052422               // Integer '--' 'for'
     && lk != 1052423               // Complex '--' 'for'
     && lk != 1052424               // Real '--' 'for'
     && lk != 1055154               // '[' ']' 'for'
     && lk != 1059279               // '{' '}' 'for'
     && lk != 1065406               // 'f32' Identifier 'foreach'
     && lk != 1065407               // 'f64' Identifier 'foreach'
     && lk != 1065411               // 'i32' Identifier 'foreach'
     && lk != 1065412               // 'i64' Identifier 'foreach'
     && lk != 1068291               // Identifier '++' 'foreach'
     && lk != 1068292               // Character '++' 'foreach'
     && lk != 1068293               // String '++' 'foreach'
     && lk != 1068294               // Integer '++' 'foreach'
     && lk != 1068295               // Complex '++' 'foreach'
     && lk != 1068296               // Real '++' 'foreach'
     && lk != 1068803               // Identifier '--' 'foreach'
     && lk != 1068804               // Character '--' 'foreach'
     && lk != 1068805               // String '--' 'foreach'
     && lk != 1068806               // Integer '--' 'foreach'
     && lk != 1068807               // Complex '--' 'foreach'
     && lk != 1068808               // Real '--' 'foreach'
     && lk != 1071538               // '[' ']' 'foreach'
     && lk != 1075663               // '{' '}' 'foreach'
     && lk != 1081790               // 'f32' Identifier 'global'
     && lk != 1081791               // 'f64' Identifier 'global'
     && lk != 1081795               // 'i32' Identifier 'global'
     && lk != 1081796               // 'i64' Identifier 'global'
     && lk != 1084675               // Identifier '++' 'global'
     && lk != 1084676               // Character '++' 'global'
     && lk != 1084677               // String '++' 'global'
     && lk != 1084678               // Integer '++' 'global'
     && lk != 1084679               // Complex '++' 'global'
     && lk != 1084680               // Real '++' 'global'
     && lk != 1085187               // Identifier '--' 'global'
     && lk != 1085188               // Character '--' 'global'
     && lk != 1085189               // String '--' 'global'
     && lk != 1085190               // Integer '--' 'global'
     && lk != 1085191               // Complex '--' 'global'
     && lk != 1085192               // Real '--' 'global'
     && lk != 1087922               // '[' ']' 'global'
     && lk != 1092047               // '{' '}' 'global'
     && lk != 1098174               // 'f32' Identifier 'i32'
     && lk != 1098175               // 'f64' Identifier 'i32'
     && lk != 1098179               // 'i32' Identifier 'i32'
     && lk != 1098180               // 'i64' Identifier 'i32'
     && lk != 1104306               // '[' ']' 'i32'
     && lk != 1108431               // '{' '}' 'i32'
     && lk != 1114558               // 'f32' Identifier 'i64'
     && lk != 1114559               // 'f64' Identifier 'i64'
     && lk != 1114563               // 'i32' Identifier 'i64'
     && lk != 1114564               // 'i64' Identifier 'i64'
     && lk != 1120690               // '[' ']' 'i64'
     && lk != 1124815               // '{' '}' 'i64'
     && lk != 1130942               // 'f32' Identifier 'if'
     && lk != 1130943               // 'f64' Identifier 'if'
     && lk != 1130947               // 'i32' Identifier 'if'
     && lk != 1130948               // 'i64' Identifier 'if'
     && lk != 1133827               // Identifier '++' 'if'
     && lk != 1133828               // Character '++' 'if'
     && lk != 1133829               // String '++' 'if'
     && lk != 1133830               // Integer '++' 'if'
     && lk != 1133831               // Complex '++' 'if'
     && lk != 1133832               // Real '++' 'if'
     && lk != 1134339               // Identifier '--' 'if'
     && lk != 1134340               // Character '--' 'if'
     && lk != 1134341               // String '--' 'if'
     && lk != 1134342               // Integer '--' 'if'
     && lk != 1134343               // Complex '--' 'if'
     && lk != 1134344               // Real '--' 'if'
     && lk != 1137074               // '[' ']' 'if'
     && lk != 1141199               // '{' '}' 'if'
     && lk != 1147326               // 'f32' Identifier 'import'
     && lk != 1147327               // 'f64' Identifier 'import'
     && lk != 1147331               // 'i32' Identifier 'import'
     && lk != 1147332               // 'i64' Identifier 'import'
     && lk != 1150211               // Identifier '++' 'import'
     && lk != 1150212               // Character '++' 'import'
     && lk != 1150213               // String '++' 'import'
     && lk != 1150214               // Integer '++' 'import'
     && lk != 1150215               // Complex '++' 'import'
     && lk != 1150216               // Real '++' 'import'
     && lk != 1150723               // Identifier '--' 'import'
     && lk != 1150724               // Character '--' 'import'
     && lk != 1150725               // String '--' 'import'
     && lk != 1150726               // Integer '--' 'import'
     && lk != 1150727               // Complex '--' 'import'
     && lk != 1150728               // Real '--' 'import'
     && lk != 1153458               // '[' ']' 'import'
     && lk != 1157583               // '{' '}' 'import'
     && lk != 1163710               // 'f32' Identifier 'include'
     && lk != 1163711               // 'f64' Identifier 'include'
     && lk != 1163715               // 'i32' Identifier 'include'
     && lk != 1163716               // 'i64' Identifier 'include'
     && lk != 1166595               // Identifier '++' 'include'
     && lk != 1166596               // Character '++' 'include'
     && lk != 1166597               // String '++' 'include'
     && lk != 1166598               // Integer '++' 'include'
     && lk != 1166599               // Complex '++' 'include'
     && lk != 1166600               // Real '++' 'include'
     && lk != 1167107               // Identifier '--' 'include'
     && lk != 1167108               // Character '--' 'include'
     && lk != 1167109               // String '--' 'include'
     && lk != 1167110               // Integer '--' 'include'
     && lk != 1167111               // Complex '--' 'include'
     && lk != 1167112               // Real '--' 'include'
     && lk != 1169842               // '[' ']' 'include'
     && lk != 1173967               // '{' '}' 'include'
     && lk != 1180094               // 'f32' Identifier 'local'
     && lk != 1180095               // 'f64' Identifier 'local'
     && lk != 1180099               // 'i32' Identifier 'local'
     && lk != 1180100               // 'i64' Identifier 'local'
     && lk != 1182979               // Identifier '++' 'local'
     && lk != 1182980               // Character '++' 'local'
     && lk != 1182981               // String '++' 'local'
     && lk != 1182982               // Integer '++' 'local'
     && lk != 1182983               // Complex '++' 'local'
     && lk != 1182984               // Real '++' 'local'
     && lk != 1183491               // Identifier '--' 'local'
     && lk != 1183492               // Character '--' 'local'
     && lk != 1183493               // String '--' 'local'
     && lk != 1183494               // Integer '--' 'local'
     && lk != 1183495               // Complex '--' 'local'
     && lk != 1183496               // Real '--' 'local'
     && lk != 1186226               // '[' ']' 'local'
     && lk != 1190351               // '{' '}' 'local'
     && lk != 1196478               // 'f32' Identifier 'return'
     && lk != 1196479               // 'f64' Identifier 'return'
     && lk != 1196483               // 'i32' Identifier 'return'
     && lk != 1196484               // 'i64' Identifier 'return'
     && lk != 1199363               // Identifier '++' 'return'
     && lk != 1199364               // Character '++' 'return'
     && lk != 1199365               // String '++' 'return'
     && lk != 1199366               // Integer '++' 'return'
     && lk != 1199367               // Complex '++' 'return'
     && lk != 1199368               // Real '++' 'return'
     && lk != 1199875               // Identifier '--' 'return'
     && lk != 1199876               // Character '--' 'return'
     && lk != 1199877               // String '--' 'return'
     && lk != 1199878               // Integer '--' 'return'
     && lk != 1199879               // Complex '--' 'return'
     && lk != 1199880               // Real '--' 'return'
     && lk != 1202610               // '[' ']' 'return'
     && lk != 1206735               // '{' '}' 'return'
     && lk != 1212862               // 'f32' Identifier 'switch'
     && lk != 1212863               // 'f64' Identifier 'switch'
     && lk != 1212867               // 'i32' Identifier 'switch'
     && lk != 1212868               // 'i64' Identifier 'switch'
     && lk != 1215747               // Identifier '++' 'switch'
     && lk != 1215748               // Character '++' 'switch'
     && lk != 1215749               // String '++' 'switch'
     && lk != 1215750               // Integer '++' 'switch'
     && lk != 1215751               // Complex '++' 'switch'
     && lk != 1215752               // Real '++' 'switch'
     && lk != 1216259               // Identifier '--' 'switch'
     && lk != 1216260               // Character '--' 'switch'
     && lk != 1216261               // String '--' 'switch'
     && lk != 1216262               // Integer '--' 'switch'
     && lk != 1216263               // Complex '--' 'switch'
     && lk != 1216264               // Real '--' 'switch'
     && lk != 1218994               // '[' ']' 'switch'
     && lk != 1223119               // '{' '}' 'switch'
     && lk != 1229246               // 'f32' Identifier 'test'
     && lk != 1229247               // 'f64' Identifier 'test'
     && lk != 1229251               // 'i32' Identifier 'test'
     && lk != 1229252               // 'i64' Identifier 'test'
     && lk != 1232131               // Identifier '++' 'test'
     && lk != 1232132               // Character '++' 'test'
     && lk != 1232133               // String '++' 'test'
     && lk != 1232134               // Integer '++' 'test'
     && lk != 1232135               // Complex '++' 'test'
     && lk != 1232136               // Real '++' 'test'
     && lk != 1232643               // Identifier '--' 'test'
     && lk != 1232644               // Character '--' 'test'
     && lk != 1232645               // String '--' 'test'
     && lk != 1232646               // Integer '--' 'test'
     && lk != 1232647               // Complex '--' 'test'
     && lk != 1232648               // Real '--' 'test'
     && lk != 1235378               // '[' ']' 'test'
     && lk != 1239503               // '{' '}' 'test'
     && lk != 1245630               // 'f32' Identifier 'throw'
     && lk != 1245631               // 'f64' Identifier 'throw'
     && lk != 1245635               // 'i32' Identifier 'throw'
     && lk != 1245636               // 'i64' Identifier 'throw'
     && lk != 1248515               // Identifier '++' 'throw'
     && lk != 1248516               // Character '++' 'throw'
     && lk != 1248517               // String '++' 'throw'
     && lk != 1248518               // Integer '++' 'throw'
     && lk != 1248519               // Complex '++' 'throw'
     && lk != 1248520               // Real '++' 'throw'
     && lk != 1249027               // Identifier '--' 'throw'
     && lk != 1249028               // Character '--' 'throw'
     && lk != 1249029               // String '--' 'throw'
     && lk != 1249030               // Integer '--' 'throw'
     && lk != 1249031               // Complex '--' 'throw'
     && lk != 1249032               // Real '--' 'throw'
     && lk != 1251762               // '[' ']' 'throw'
     && lk != 1255887               // '{' '}' 'throw'
     && lk != 1262014               // 'f32' Identifier 'try'
     && lk != 1262015               // 'f64' Identifier 'try'
     && lk != 1262019               // 'i32' Identifier 'try'
     && lk != 1262020               // 'i64' Identifier 'try'
     && lk != 1264899               // Identifier '++' 'try'
     && lk != 1264900               // Character '++' 'try'
     && lk != 1264901               // String '++' 'try'
     && lk != 1264902               // Integer '++' 'try'
     && lk != 1264903               // Complex '++' 'try'
     && lk != 1264904               // Real '++' 'try'
     && lk != 1265411               // Identifier '--' 'try'
     && lk != 1265412               // Character '--' 'try'
     && lk != 1265413               // String '--' 'try'
     && lk != 1265414               // Integer '--' 'try'
     && lk != 1265415               // Complex '--' 'try'
     && lk != 1265416               // Real '--' 'try'
     && lk != 1268146               // '[' ']' 'try'
     && lk != 1272271               // '{' '}' 'try'
     && lk != 1278398               // 'f32' Identifier 'while'
     && lk != 1278399               // 'f64' Identifier 'while'
     && lk != 1278403               // 'i32' Identifier 'while'
     && lk != 1278404               // 'i64' Identifier 'while'
     && lk != 1281283               // Identifier '++' 'while'
     && lk != 1281284               // Character '++' 'while'
     && lk != 1281285               // String '++' 'while'
     && lk != 1281286               // Integer '++' 'while'
     && lk != 1281287               // Complex '++' 'while'
     && lk != 1281288               // Real '++' 'while'
     && lk != 1281795               // Identifier '--' 'while'
     && lk != 1281796               // Character '--' 'while'
     && lk != 1281797               // String '--' 'while'
     && lk != 1281798               // Integer '--' 'while'
     && lk != 1281799               // Complex '--' 'while'
     && lk != 1281800               // Real '--' 'while'
     && lk != 1284530               // '[' ']' 'while'
     && lk != 1288655               // '{' '}' 'while'
     && lk != 1294782               // 'f32' Identifier '{'
     && lk != 1294783               // 'f64' Identifier '{'
     && lk != 1294787               // 'i32' Identifier '{'
     && lk != 1294788               // 'i64' Identifier '{'
     && lk != 1300914               // '[' ']' '{'
     && lk != 1305039               // '{' '}' '{'
     && lk != 1311166               // 'f32' Identifier '|'
     && lk != 1311167               // 'f64' Identifier '|'
     && lk != 1311171               // 'i32' Identifier '|'
     && lk != 1311172               // 'i64' Identifier '|'
     && lk != 1314051               // Identifier '++' '|'
     && lk != 1314052               // Character '++' '|'
     && lk != 1314053               // String '++' '|'
     && lk != 1314054               // Integer '++' '|'
     && lk != 1314055               // Complex '++' '|'
     && lk != 1314056               // Real '++' '|'
     && lk != 1314563               // Identifier '--' '|'
     && lk != 1314564               // Character '--' '|'
     && lk != 1314565               // String '--' '|'
     && lk != 1314566               // Integer '--' '|'
     && lk != 1314567               // Complex '--' '|'
     && lk != 1314568               // Real '--' '|'
     && lk != 1317298               // '[' ']' '|'
     && lk != 1321423               // '{' '}' '|'
     && lk != 1327550               // 'f32' Identifier '|='
     && lk != 1327551               // 'f64' Identifier '|='
     && lk != 1327555               // 'i32' Identifier '|='
     && lk != 1327556               // 'i64' Identifier '|='
     && lk != 1330435               // Identifier '++' '|='
     && lk != 1330436               // Character '++' '|='
     && lk != 1330437               // String '++' '|='
     && lk != 1330438               // Integer '++' '|='
     && lk != 1330439               // Complex '++' '|='
     && lk != 1330440               // Real '++' '|='
     && lk != 1330947               // Identifier '--' '|='
     && lk != 1330948               // Character '--' '|='
     && lk != 1330949               // String '--' '|='
     && lk != 1330950               // Integer '--' '|='
     && lk != 1330951               // Complex '--' '|='
     && lk != 1330952               // Real '--' '|='
     && lk != 1333682               // '[' ']' '|='
     && lk != 1337807               // '{' '}' '|='
     && lk != 1343934               // 'f32' Identifier '||'
     && lk != 1343935               // 'f64' Identifier '||'
     && lk != 1343939               // 'i32' Identifier '||'
     && lk != 1343940               // 'i64' Identifier '||'
     && lk != 1346819               // Identifier '++' '||'
     && lk != 1346820               // Character '++' '||'
     && lk != 1346821               // String '++' '||'
     && lk != 1346822               // Integer '++' '||'
     && lk != 1346823               // Complex '++' '||'
     && lk != 1346824               // Real '++' '||'
     && lk != 1347331               // Identifier '--' '||'
     && lk != 1347332               // Character '--' '||'
     && lk != 1347333               // String '--' '||'
     && lk != 1347334               // Integer '--' '||'
     && lk != 1347335               // Complex '--' '||'
     && lk != 1347336               // Real '--' '||'
     && lk != 1350066               // '[' ']' '||'
     && lk != 1354191               // '{' '}' '||'
     && lk != 1360318               // 'f32' Identifier '}'
     && lk != 1360319               // 'f64' Identifier '}'
     && lk != 1360323               // 'i32' Identifier '}'
     && lk != 1360324               // 'i64' Identifier '}'
     && lk != 1363203               // Identifier '++' '}'
     && lk != 1363204               // Character '++' '}'
     && lk != 1363205               // String '++' '}'
     && lk != 1363206               // Integer '++' '}'
     && lk != 1363207               // Complex '++' '}'
     && lk != 1363208               // Real '++' '}'
     && lk != 1363715               // Identifier '--' '}'
     && lk != 1363716               // Character '--' '}'
     && lk != 1363717               // String '--' '}'
     && lk != 1363718               // Integer '--' '}'
     && lk != 1363719               // Complex '--' '}'
     && lk != 1363720               // Real '--' '}'
     && lk != 1366450               // '[' ']' '}'
     && lk != 1370575               // '{' '}' '}'
     && lk != 1376702               // 'f32' Identifier '~'
     && lk != 1376703               // 'f64' Identifier '~'
     && lk != 1376707               // 'i32' Identifier '~'
     && lk != 1376708               // 'i64' Identifier '~'
     && lk != 1379587               // Identifier '++' '~'
     && lk != 1379588               // Character '++' '~'
     && lk != 1379589               // String '++' '~'
     && lk != 1379590               // Integer '++' '~'
     && lk != 1379591               // Complex '++' '~'
     && lk != 1379592               // Real '++' '~'
     && lk != 1380099               // Identifier '--' '~'
     && lk != 1380100               // Character '--' '~'
     && lk != 1380101               // String '--' '~'
     && lk != 1380102               // Integer '--' '~'
     && lk != 1380103               // Complex '--' '~'
     && lk != 1380104               // Real '--' '~'
     && lk != 1382834               // '[' ']' '~'
     && lk != 1386959)              // '{' '}' '~'
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
          try_Primary();
          lookahead1W(5);           // WhiteSpace^token | '++'
          consumeT(26);             // '++'
          memoize(3, e0A, -1);
          lk = -10;
        }
        catch (p1A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            try_Primary();
            lookahead1W(6);         // WhiteSpace^token | '--'
            consumeT(30);           // '--'
            memoize(3, e0A, -2);
            lk = -10;
          }
          catch (p2A)
          {
            lk = -9;
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(3, e0A, -9);
          }
        }
      }
    }
    switch (lk)
    {
    case -1:
    case 19715:                     // Identifier '++' END
    case 19716:                     // Character '++' END
    case 19717:                     // String '++' END
    case 19718:                     // Integer '++' END
    case 19719:                     // Complex '++' END
    case 19720:                     // Real '++' END
    case 150787:                    // Identifier '++' Comment
    case 150788:                    // Character '++' Comment
    case 150789:                    // String '++' Comment
    case 150790:                    // Integer '++' Comment
    case 150791:                    // Complex '++' Comment
    case 150792:                    // Real '++' Comment
    case 199939:                    // Identifier '++' '!'
    case 199940:                    // Character '++' '!'
    case 199941:                    // String '++' '!'
    case 199942:                    // Integer '++' '!'
    case 199943:                    // Complex '++' '!'
    case 199944:                    // Real '++' '!'
    case 216323:                    // Identifier '++' '!='
    case 216324:                    // Character '++' '!='
    case 216325:                    // String '++' '!='
    case 216326:                    // Integer '++' '!='
    case 216327:                    // Complex '++' '!='
    case 216328:                    // Real '++' '!='
    case 249091:                    // Identifier '++' '%'
    case 249092:                    // Character '++' '%'
    case 249093:                    // String '++' '%'
    case 249094:                    // Integer '++' '%'
    case 249095:                    // Complex '++' '%'
    case 249096:                    // Real '++' '%'
    case 265475:                    // Identifier '++' '%='
    case 265476:                    // Character '++' '%='
    case 265477:                    // String '++' '%='
    case 265478:                    // Integer '++' '%='
    case 265479:                    // Complex '++' '%='
    case 265480:                    // Real '++' '%='
    case 281859:                    // Identifier '++' '&'
    case 281860:                    // Character '++' '&'
    case 281861:                    // String '++' '&'
    case 281862:                    // Integer '++' '&'
    case 281863:                    // Complex '++' '&'
    case 281864:                    // Real '++' '&'
    case 298243:                    // Identifier '++' '&&'
    case 298244:                    // Character '++' '&&'
    case 298245:                    // String '++' '&&'
    case 298246:                    // Integer '++' '&&'
    case 298247:                    // Complex '++' '&&'
    case 298248:                    // Real '++' '&&'
    case 314627:                    // Identifier '++' '&='
    case 314628:                    // Character '++' '&='
    case 314629:                    // String '++' '&='
    case 314630:                    // Integer '++' '&='
    case 314631:                    // Complex '++' '&='
    case 314632:                    // Real '++' '&='
    case 347395:                    // Identifier '++' ')'
    case 347396:                    // Character '++' ')'
    case 347397:                    // String '++' ')'
    case 347398:                    // Integer '++' ')'
    case 347399:                    // Complex '++' ')'
    case 347400:                    // Real '++' ')'
    case 363779:                    // Identifier '++' '*'
    case 363780:                    // Character '++' '*'
    case 363781:                    // String '++' '*'
    case 363782:                    // Integer '++' '*'
    case 363783:                    // Complex '++' '*'
    case 363784:                    // Real '++' '*'
    case 380163:                    // Identifier '++' '**'
    case 380164:                    // Character '++' '**'
    case 380165:                    // String '++' '**'
    case 380166:                    // Integer '++' '**'
    case 380167:                    // Complex '++' '**'
    case 380168:                    // Real '++' '**'
    case 396547:                    // Identifier '++' '*='
    case 396548:                    // Character '++' '*='
    case 396549:                    // String '++' '*='
    case 396550:                    // Integer '++' '*='
    case 396551:                    // Complex '++' '*='
    case 396552:                    // Real '++' '*='
    case 412931:                    // Identifier '++' '+'
    case 412932:                    // Character '++' '+'
    case 412933:                    // String '++' '+'
    case 412934:                    // Integer '++' '+'
    case 412935:                    // Complex '++' '+'
    case 412936:                    // Real '++' '+'
    case 429315:                    // Identifier '++' '++'
    case 429316:                    // Character '++' '++'
    case 429317:                    // String '++' '++'
    case 429318:                    // Integer '++' '++'
    case 429319:                    // Complex '++' '++'
    case 429320:                    // Real '++' '++'
    case 445699:                    // Identifier '++' '+='
    case 445700:                    // Character '++' '+='
    case 445701:                    // String '++' '+='
    case 445702:                    // Integer '++' '+='
    case 445703:                    // Complex '++' '+='
    case 445704:                    // Real '++' '+='
    case 462083:                    // Identifier '++' ','
    case 462084:                    // Character '++' ','
    case 462085:                    // String '++' ','
    case 462086:                    // Integer '++' ','
    case 462087:                    // Complex '++' ','
    case 462088:                    // Real '++' ','
    case 478467:                    // Identifier '++' '-'
    case 478468:                    // Character '++' '-'
    case 478469:                    // String '++' '-'
    case 478470:                    // Integer '++' '-'
    case 478471:                    // Complex '++' '-'
    case 478472:                    // Real '++' '-'
    case 494851:                    // Identifier '++' '--'
    case 494852:                    // Character '++' '--'
    case 494853:                    // String '++' '--'
    case 494854:                    // Integer '++' '--'
    case 494855:                    // Complex '++' '--'
    case 494856:                    // Real '++' '--'
    case 511235:                    // Identifier '++' '-='
    case 511236:                    // Character '++' '-='
    case 511237:                    // String '++' '-='
    case 511238:                    // Integer '++' '-='
    case 511239:                    // Complex '++' '-='
    case 511240:                    // Real '++' '-='
    case 544003:                    // Identifier '++' '/'
    case 544004:                    // Character '++' '/'
    case 544005:                    // String '++' '/'
    case 544006:                    // Integer '++' '/'
    case 544007:                    // Complex '++' '/'
    case 544008:                    // Real '++' '/'
    case 560387:                    // Identifier '++' '/='
    case 560388:                    // Character '++' '/='
    case 560389:                    // String '++' '/='
    case 560390:                    // Integer '++' '/='
    case 560391:                    // Complex '++' '/='
    case 560392:                    // Real '++' '/='
    case 576771:                    // Identifier '++' ':'
    case 576772:                    // Character '++' ':'
    case 576773:                    // String '++' ':'
    case 576774:                    // Integer '++' ':'
    case 576775:                    // Complex '++' ':'
    case 576776:                    // Real '++' ':'
    case 593155:                    // Identifier '++' ':='
    case 593156:                    // Character '++' ':='
    case 593157:                    // String '++' ':='
    case 593158:                    // Integer '++' ':='
    case 593159:                    // Complex '++' ':='
    case 593160:                    // Real '++' ':='
    case 609539:                    // Identifier '++' ';'
    case 609540:                    // Character '++' ';'
    case 609541:                    // String '++' ';'
    case 609542:                    // Integer '++' ';'
    case 609543:                    // Complex '++' ';'
    case 609544:                    // Real '++' ';'
    case 625923:                    // Identifier '++' '<'
    case 625924:                    // Character '++' '<'
    case 625925:                    // String '++' '<'
    case 625926:                    // Integer '++' '<'
    case 625927:                    // Complex '++' '<'
    case 625928:                    // Real '++' '<'
    case 642307:                    // Identifier '++' '<<'
    case 642308:                    // Character '++' '<<'
    case 642309:                    // String '++' '<<'
    case 642310:                    // Integer '++' '<<'
    case 642311:                    // Complex '++' '<<'
    case 642312:                    // Real '++' '<<'
    case 658691:                    // Identifier '++' '<<='
    case 658692:                    // Character '++' '<<='
    case 658693:                    // String '++' '<<='
    case 658694:                    // Integer '++' '<<='
    case 658695:                    // Complex '++' '<<='
    case 658696:                    // Real '++' '<<='
    case 675075:                    // Identifier '++' '<='
    case 675076:                    // Character '++' '<='
    case 675077:                    // String '++' '<='
    case 675078:                    // Integer '++' '<='
    case 675079:                    // Complex '++' '<='
    case 675080:                    // Real '++' '<='
    case 691459:                    // Identifier '++' '='
    case 691460:                    // Character '++' '='
    case 691461:                    // String '++' '='
    case 691462:                    // Integer '++' '='
    case 691463:                    // Complex '++' '='
    case 691464:                    // Real '++' '='
    case 707843:                    // Identifier '++' '=='
    case 707844:                    // Character '++' '=='
    case 707845:                    // String '++' '=='
    case 707846:                    // Integer '++' '=='
    case 707847:                    // Complex '++' '=='
    case 707848:                    // Real '++' '=='
    case 724227:                    // Identifier '++' '>'
    case 724228:                    // Character '++' '>'
    case 724229:                    // String '++' '>'
    case 724230:                    // Integer '++' '>'
    case 724231:                    // Complex '++' '>'
    case 724232:                    // Real '++' '>'
    case 740611:                    // Identifier '++' '>='
    case 740612:                    // Character '++' '>='
    case 740613:                    // String '++' '>='
    case 740614:                    // Integer '++' '>='
    case 740615:                    // Complex '++' '>='
    case 740616:                    // Real '++' '>='
    case 756995:                    // Identifier '++' '>>'
    case 756996:                    // Character '++' '>>'
    case 756997:                    // String '++' '>>'
    case 756998:                    // Integer '++' '>>'
    case 756999:                    // Complex '++' '>>'
    case 757000:                    // Real '++' '>>'
    case 773379:                    // Identifier '++' '>>='
    case 773380:                    // Character '++' '>>='
    case 773381:                    // String '++' '>>='
    case 773382:                    // Integer '++' '>>='
    case 773383:                    // Complex '++' '>>='
    case 773384:                    // Real '++' '>>='
    case 789763:                    // Identifier '++' '?'
    case 789764:                    // Character '++' '?'
    case 789765:                    // String '++' '?'
    case 789766:                    // Integer '++' '?'
    case 789767:                    // Complex '++' '?'
    case 789768:                    // Real '++' '?'
    case 806147:                    // Identifier '++' '?='
    case 806148:                    // Character '++' '?='
    case 806149:                    // String '++' '?='
    case 806150:                    // Integer '++' '?='
    case 806151:                    // Complex '++' '?='
    case 806152:                    // Real '++' '?='
    case 838915:                    // Identifier '++' ']'
    case 838916:                    // Character '++' ']'
    case 838917:                    // String '++' ']'
    case 838918:                    // Integer '++' ']'
    case 838919:                    // Complex '++' ']'
    case 838920:                    // Real '++' ']'
    case 855299:                    // Identifier '++' '^'
    case 855300:                    // Character '++' '^'
    case 855301:                    // String '++' '^'
    case 855302:                    // Integer '++' '^'
    case 855303:                    // Complex '++' '^'
    case 855304:                    // Real '++' '^'
    case 871683:                    // Identifier '++' '^='
    case 871684:                    // Character '++' '^='
    case 871685:                    // String '++' '^='
    case 871686:                    // Integer '++' '^='
    case 871687:                    // Complex '++' '^='
    case 871688:                    // Real '++' '^='
    case 888067:                    // Identifier '++' 'break'
    case 888068:                    // Character '++' 'break'
    case 888069:                    // String '++' 'break'
    case 888070:                    // Integer '++' 'break'
    case 888071:                    // Complex '++' 'break'
    case 888072:                    // Real '++' 'break'
    case 904451:                    // Identifier '++' 'case'
    case 904452:                    // Character '++' 'case'
    case 904453:                    // String '++' 'case'
    case 904454:                    // Integer '++' 'case'
    case 904455:                    // Complex '++' 'case'
    case 904456:                    // Real '++' 'case'
    case 920835:                    // Identifier '++' 'catch'
    case 920836:                    // Character '++' 'catch'
    case 920837:                    // String '++' 'catch'
    case 920838:                    // Integer '++' 'catch'
    case 920839:                    // Complex '++' 'catch'
    case 920840:                    // Real '++' 'catch'
    case 937219:                    // Identifier '++' 'continue'
    case 937220:                    // Character '++' 'continue'
    case 937221:                    // String '++' 'continue'
    case 937222:                    // Integer '++' 'continue'
    case 937223:                    // Complex '++' 'continue'
    case 937224:                    // Real '++' 'continue'
    case 953603:                    // Identifier '++' 'default'
    case 953604:                    // Character '++' 'default'
    case 953605:                    // String '++' 'default'
    case 953606:                    // Integer '++' 'default'
    case 953607:                    // Complex '++' 'default'
    case 953608:                    // Real '++' 'default'
    case 969987:                    // Identifier '++' 'do'
    case 969988:                    // Character '++' 'do'
    case 969989:                    // String '++' 'do'
    case 969990:                    // Integer '++' 'do'
    case 969991:                    // Complex '++' 'do'
    case 969992:                    // Real '++' 'do'
    case 986371:                    // Identifier '++' 'else'
    case 986372:                    // Character '++' 'else'
    case 986373:                    // String '++' 'else'
    case 986374:                    // Integer '++' 'else'
    case 986375:                    // Complex '++' 'else'
    case 986376:                    // Real '++' 'else'
    case 1002755:                   // Identifier '++' 'export'
    case 1002756:                   // Character '++' 'export'
    case 1002757:                   // String '++' 'export'
    case 1002758:                   // Integer '++' 'export'
    case 1002759:                   // Complex '++' 'export'
    case 1002760:                   // Real '++' 'export'
    case 1051907:                   // Identifier '++' 'for'
    case 1051908:                   // Character '++' 'for'
    case 1051909:                   // String '++' 'for'
    case 1051910:                   // Integer '++' 'for'
    case 1051911:                   // Complex '++' 'for'
    case 1051912:                   // Real '++' 'for'
    case 1068291:                   // Identifier '++' 'foreach'
    case 1068292:                   // Character '++' 'foreach'
    case 1068293:                   // String '++' 'foreach'
    case 1068294:                   // Integer '++' 'foreach'
    case 1068295:                   // Complex '++' 'foreach'
    case 1068296:                   // Real '++' 'foreach'
    case 1084675:                   // Identifier '++' 'global'
    case 1084676:                   // Character '++' 'global'
    case 1084677:                   // String '++' 'global'
    case 1084678:                   // Integer '++' 'global'
    case 1084679:                   // Complex '++' 'global'
    case 1084680:                   // Real '++' 'global'
    case 1133827:                   // Identifier '++' 'if'
    case 1133828:                   // Character '++' 'if'
    case 1133829:                   // String '++' 'if'
    case 1133830:                   // Integer '++' 'if'
    case 1133831:                   // Complex '++' 'if'
    case 1133832:                   // Real '++' 'if'
    case 1150211:                   // Identifier '++' 'import'
    case 1150212:                   // Character '++' 'import'
    case 1150213:                   // String '++' 'import'
    case 1150214:                   // Integer '++' 'import'
    case 1150215:                   // Complex '++' 'import'
    case 1150216:                   // Real '++' 'import'
    case 1166595:                   // Identifier '++' 'include'
    case 1166596:                   // Character '++' 'include'
    case 1166597:                   // String '++' 'include'
    case 1166598:                   // Integer '++' 'include'
    case 1166599:                   // Complex '++' 'include'
    case 1166600:                   // Real '++' 'include'
    case 1182979:                   // Identifier '++' 'local'
    case 1182980:                   // Character '++' 'local'
    case 1182981:                   // String '++' 'local'
    case 1182982:                   // Integer '++' 'local'
    case 1182983:                   // Complex '++' 'local'
    case 1182984:                   // Real '++' 'local'
    case 1199363:                   // Identifier '++' 'return'
    case 1199364:                   // Character '++' 'return'
    case 1199365:                   // String '++' 'return'
    case 1199366:                   // Integer '++' 'return'
    case 1199367:                   // Complex '++' 'return'
    case 1199368:                   // Real '++' 'return'
    case 1215747:                   // Identifier '++' 'switch'
    case 1215748:                   // Character '++' 'switch'
    case 1215749:                   // String '++' 'switch'
    case 1215750:                   // Integer '++' 'switch'
    case 1215751:                   // Complex '++' 'switch'
    case 1215752:                   // Real '++' 'switch'
    case 1232131:                   // Identifier '++' 'test'
    case 1232132:                   // Character '++' 'test'
    case 1232133:                   // String '++' 'test'
    case 1232134:                   // Integer '++' 'test'
    case 1232135:                   // Complex '++' 'test'
    case 1232136:                   // Real '++' 'test'
    case 1248515:                   // Identifier '++' 'throw'
    case 1248516:                   // Character '++' 'throw'
    case 1248517:                   // String '++' 'throw'
    case 1248518:                   // Integer '++' 'throw'
    case 1248519:                   // Complex '++' 'throw'
    case 1248520:                   // Real '++' 'throw'
    case 1264899:                   // Identifier '++' 'try'
    case 1264900:                   // Character '++' 'try'
    case 1264901:                   // String '++' 'try'
    case 1264902:                   // Integer '++' 'try'
    case 1264903:                   // Complex '++' 'try'
    case 1264904:                   // Real '++' 'try'
    case 1281283:                   // Identifier '++' 'while'
    case 1281284:                   // Character '++' 'while'
    case 1281285:                   // String '++' 'while'
    case 1281286:                   // Integer '++' 'while'
    case 1281287:                   // Complex '++' 'while'
    case 1281288:                   // Real '++' 'while'
    case 1314051:                   // Identifier '++' '|'
    case 1314052:                   // Character '++' '|'
    case 1314053:                   // String '++' '|'
    case 1314054:                   // Integer '++' '|'
    case 1314055:                   // Complex '++' '|'
    case 1314056:                   // Real '++' '|'
    case 1330435:                   // Identifier '++' '|='
    case 1330436:                   // Character '++' '|='
    case 1330437:                   // String '++' '|='
    case 1330438:                   // Integer '++' '|='
    case 1330439:                   // Complex '++' '|='
    case 1330440:                   // Real '++' '|='
    case 1346819:                   // Identifier '++' '||'
    case 1346820:                   // Character '++' '||'
    case 1346821:                   // String '++' '||'
    case 1346822:                   // Integer '++' '||'
    case 1346823:                   // Complex '++' '||'
    case 1346824:                   // Real '++' '||'
    case 1363203:                   // Identifier '++' '}'
    case 1363204:                   // Character '++' '}'
    case 1363205:                   // String '++' '}'
    case 1363206:                   // Integer '++' '}'
    case 1363207:                   // Complex '++' '}'
    case 1363208:                   // Real '++' '}'
    case 1379587:                   // Identifier '++' '~'
    case 1379588:                   // Character '++' '~'
    case 1379589:                   // String '++' '~'
    case 1379590:                   // Integer '++' '~'
    case 1379591:                   // Complex '++' '~'
    case 1379592:                   // Real '++' '~'
      try_Primary();
      lookahead1W(5);               // WhiteSpace^token | '++'
      consumeT(26);                 // '++'
      break;
    case -2:
    case 20227:                     // Identifier '--' END
    case 20228:                     // Character '--' END
    case 20229:                     // String '--' END
    case 20230:                     // Integer '--' END
    case 20231:                     // Complex '--' END
    case 20232:                     // Real '--' END
    case 151299:                    // Identifier '--' Comment
    case 151300:                    // Character '--' Comment
    case 151301:                    // String '--' Comment
    case 151302:                    // Integer '--' Comment
    case 151303:                    // Complex '--' Comment
    case 151304:                    // Real '--' Comment
    case 200451:                    // Identifier '--' '!'
    case 200452:                    // Character '--' '!'
    case 200453:                    // String '--' '!'
    case 200454:                    // Integer '--' '!'
    case 200455:                    // Complex '--' '!'
    case 200456:                    // Real '--' '!'
    case 216835:                    // Identifier '--' '!='
    case 216836:                    // Character '--' '!='
    case 216837:                    // String '--' '!='
    case 216838:                    // Integer '--' '!='
    case 216839:                    // Complex '--' '!='
    case 216840:                    // Real '--' '!='
    case 249603:                    // Identifier '--' '%'
    case 249604:                    // Character '--' '%'
    case 249605:                    // String '--' '%'
    case 249606:                    // Integer '--' '%'
    case 249607:                    // Complex '--' '%'
    case 249608:                    // Real '--' '%'
    case 265987:                    // Identifier '--' '%='
    case 265988:                    // Character '--' '%='
    case 265989:                    // String '--' '%='
    case 265990:                    // Integer '--' '%='
    case 265991:                    // Complex '--' '%='
    case 265992:                    // Real '--' '%='
    case 282371:                    // Identifier '--' '&'
    case 282372:                    // Character '--' '&'
    case 282373:                    // String '--' '&'
    case 282374:                    // Integer '--' '&'
    case 282375:                    // Complex '--' '&'
    case 282376:                    // Real '--' '&'
    case 298755:                    // Identifier '--' '&&'
    case 298756:                    // Character '--' '&&'
    case 298757:                    // String '--' '&&'
    case 298758:                    // Integer '--' '&&'
    case 298759:                    // Complex '--' '&&'
    case 298760:                    // Real '--' '&&'
    case 315139:                    // Identifier '--' '&='
    case 315140:                    // Character '--' '&='
    case 315141:                    // String '--' '&='
    case 315142:                    // Integer '--' '&='
    case 315143:                    // Complex '--' '&='
    case 315144:                    // Real '--' '&='
    case 347907:                    // Identifier '--' ')'
    case 347908:                    // Character '--' ')'
    case 347909:                    // String '--' ')'
    case 347910:                    // Integer '--' ')'
    case 347911:                    // Complex '--' ')'
    case 347912:                    // Real '--' ')'
    case 364291:                    // Identifier '--' '*'
    case 364292:                    // Character '--' '*'
    case 364293:                    // String '--' '*'
    case 364294:                    // Integer '--' '*'
    case 364295:                    // Complex '--' '*'
    case 364296:                    // Real '--' '*'
    case 380675:                    // Identifier '--' '**'
    case 380676:                    // Character '--' '**'
    case 380677:                    // String '--' '**'
    case 380678:                    // Integer '--' '**'
    case 380679:                    // Complex '--' '**'
    case 380680:                    // Real '--' '**'
    case 397059:                    // Identifier '--' '*='
    case 397060:                    // Character '--' '*='
    case 397061:                    // String '--' '*='
    case 397062:                    // Integer '--' '*='
    case 397063:                    // Complex '--' '*='
    case 397064:                    // Real '--' '*='
    case 413443:                    // Identifier '--' '+'
    case 413444:                    // Character '--' '+'
    case 413445:                    // String '--' '+'
    case 413446:                    // Integer '--' '+'
    case 413447:                    // Complex '--' '+'
    case 413448:                    // Real '--' '+'
    case 429827:                    // Identifier '--' '++'
    case 429828:                    // Character '--' '++'
    case 429829:                    // String '--' '++'
    case 429830:                    // Integer '--' '++'
    case 429831:                    // Complex '--' '++'
    case 429832:                    // Real '--' '++'
    case 446211:                    // Identifier '--' '+='
    case 446212:                    // Character '--' '+='
    case 446213:                    // String '--' '+='
    case 446214:                    // Integer '--' '+='
    case 446215:                    // Complex '--' '+='
    case 446216:                    // Real '--' '+='
    case 462595:                    // Identifier '--' ','
    case 462596:                    // Character '--' ','
    case 462597:                    // String '--' ','
    case 462598:                    // Integer '--' ','
    case 462599:                    // Complex '--' ','
    case 462600:                    // Real '--' ','
    case 478979:                    // Identifier '--' '-'
    case 478980:                    // Character '--' '-'
    case 478981:                    // String '--' '-'
    case 478982:                    // Integer '--' '-'
    case 478983:                    // Complex '--' '-'
    case 478984:                    // Real '--' '-'
    case 495363:                    // Identifier '--' '--'
    case 495364:                    // Character '--' '--'
    case 495365:                    // String '--' '--'
    case 495366:                    // Integer '--' '--'
    case 495367:                    // Complex '--' '--'
    case 495368:                    // Real '--' '--'
    case 511747:                    // Identifier '--' '-='
    case 511748:                    // Character '--' '-='
    case 511749:                    // String '--' '-='
    case 511750:                    // Integer '--' '-='
    case 511751:                    // Complex '--' '-='
    case 511752:                    // Real '--' '-='
    case 544515:                    // Identifier '--' '/'
    case 544516:                    // Character '--' '/'
    case 544517:                    // String '--' '/'
    case 544518:                    // Integer '--' '/'
    case 544519:                    // Complex '--' '/'
    case 544520:                    // Real '--' '/'
    case 560899:                    // Identifier '--' '/='
    case 560900:                    // Character '--' '/='
    case 560901:                    // String '--' '/='
    case 560902:                    // Integer '--' '/='
    case 560903:                    // Complex '--' '/='
    case 560904:                    // Real '--' '/='
    case 577283:                    // Identifier '--' ':'
    case 577284:                    // Character '--' ':'
    case 577285:                    // String '--' ':'
    case 577286:                    // Integer '--' ':'
    case 577287:                    // Complex '--' ':'
    case 577288:                    // Real '--' ':'
    case 593667:                    // Identifier '--' ':='
    case 593668:                    // Character '--' ':='
    case 593669:                    // String '--' ':='
    case 593670:                    // Integer '--' ':='
    case 593671:                    // Complex '--' ':='
    case 593672:                    // Real '--' ':='
    case 610051:                    // Identifier '--' ';'
    case 610052:                    // Character '--' ';'
    case 610053:                    // String '--' ';'
    case 610054:                    // Integer '--' ';'
    case 610055:                    // Complex '--' ';'
    case 610056:                    // Real '--' ';'
    case 626435:                    // Identifier '--' '<'
    case 626436:                    // Character '--' '<'
    case 626437:                    // String '--' '<'
    case 626438:                    // Integer '--' '<'
    case 626439:                    // Complex '--' '<'
    case 626440:                    // Real '--' '<'
    case 642819:                    // Identifier '--' '<<'
    case 642820:                    // Character '--' '<<'
    case 642821:                    // String '--' '<<'
    case 642822:                    // Integer '--' '<<'
    case 642823:                    // Complex '--' '<<'
    case 642824:                    // Real '--' '<<'
    case 659203:                    // Identifier '--' '<<='
    case 659204:                    // Character '--' '<<='
    case 659205:                    // String '--' '<<='
    case 659206:                    // Integer '--' '<<='
    case 659207:                    // Complex '--' '<<='
    case 659208:                    // Real '--' '<<='
    case 675587:                    // Identifier '--' '<='
    case 675588:                    // Character '--' '<='
    case 675589:                    // String '--' '<='
    case 675590:                    // Integer '--' '<='
    case 675591:                    // Complex '--' '<='
    case 675592:                    // Real '--' '<='
    case 691971:                    // Identifier '--' '='
    case 691972:                    // Character '--' '='
    case 691973:                    // String '--' '='
    case 691974:                    // Integer '--' '='
    case 691975:                    // Complex '--' '='
    case 691976:                    // Real '--' '='
    case 708355:                    // Identifier '--' '=='
    case 708356:                    // Character '--' '=='
    case 708357:                    // String '--' '=='
    case 708358:                    // Integer '--' '=='
    case 708359:                    // Complex '--' '=='
    case 708360:                    // Real '--' '=='
    case 724739:                    // Identifier '--' '>'
    case 724740:                    // Character '--' '>'
    case 724741:                    // String '--' '>'
    case 724742:                    // Integer '--' '>'
    case 724743:                    // Complex '--' '>'
    case 724744:                    // Real '--' '>'
    case 741123:                    // Identifier '--' '>='
    case 741124:                    // Character '--' '>='
    case 741125:                    // String '--' '>='
    case 741126:                    // Integer '--' '>='
    case 741127:                    // Complex '--' '>='
    case 741128:                    // Real '--' '>='
    case 757507:                    // Identifier '--' '>>'
    case 757508:                    // Character '--' '>>'
    case 757509:                    // String '--' '>>'
    case 757510:                    // Integer '--' '>>'
    case 757511:                    // Complex '--' '>>'
    case 757512:                    // Real '--' '>>'
    case 773891:                    // Identifier '--' '>>='
    case 773892:                    // Character '--' '>>='
    case 773893:                    // String '--' '>>='
    case 773894:                    // Integer '--' '>>='
    case 773895:                    // Complex '--' '>>='
    case 773896:                    // Real '--' '>>='
    case 790275:                    // Identifier '--' '?'
    case 790276:                    // Character '--' '?'
    case 790277:                    // String '--' '?'
    case 790278:                    // Integer '--' '?'
    case 790279:                    // Complex '--' '?'
    case 790280:                    // Real '--' '?'
    case 806659:                    // Identifier '--' '?='
    case 806660:                    // Character '--' '?='
    case 806661:                    // String '--' '?='
    case 806662:                    // Integer '--' '?='
    case 806663:                    // Complex '--' '?='
    case 806664:                    // Real '--' '?='
    case 839427:                    // Identifier '--' ']'
    case 839428:                    // Character '--' ']'
    case 839429:                    // String '--' ']'
    case 839430:                    // Integer '--' ']'
    case 839431:                    // Complex '--' ']'
    case 839432:                    // Real '--' ']'
    case 855811:                    // Identifier '--' '^'
    case 855812:                    // Character '--' '^'
    case 855813:                    // String '--' '^'
    case 855814:                    // Integer '--' '^'
    case 855815:                    // Complex '--' '^'
    case 855816:                    // Real '--' '^'
    case 872195:                    // Identifier '--' '^='
    case 872196:                    // Character '--' '^='
    case 872197:                    // String '--' '^='
    case 872198:                    // Integer '--' '^='
    case 872199:                    // Complex '--' '^='
    case 872200:                    // Real '--' '^='
    case 888579:                    // Identifier '--' 'break'
    case 888580:                    // Character '--' 'break'
    case 888581:                    // String '--' 'break'
    case 888582:                    // Integer '--' 'break'
    case 888583:                    // Complex '--' 'break'
    case 888584:                    // Real '--' 'break'
    case 904963:                    // Identifier '--' 'case'
    case 904964:                    // Character '--' 'case'
    case 904965:                    // String '--' 'case'
    case 904966:                    // Integer '--' 'case'
    case 904967:                    // Complex '--' 'case'
    case 904968:                    // Real '--' 'case'
    case 921347:                    // Identifier '--' 'catch'
    case 921348:                    // Character '--' 'catch'
    case 921349:                    // String '--' 'catch'
    case 921350:                    // Integer '--' 'catch'
    case 921351:                    // Complex '--' 'catch'
    case 921352:                    // Real '--' 'catch'
    case 937731:                    // Identifier '--' 'continue'
    case 937732:                    // Character '--' 'continue'
    case 937733:                    // String '--' 'continue'
    case 937734:                    // Integer '--' 'continue'
    case 937735:                    // Complex '--' 'continue'
    case 937736:                    // Real '--' 'continue'
    case 954115:                    // Identifier '--' 'default'
    case 954116:                    // Character '--' 'default'
    case 954117:                    // String '--' 'default'
    case 954118:                    // Integer '--' 'default'
    case 954119:                    // Complex '--' 'default'
    case 954120:                    // Real '--' 'default'
    case 970499:                    // Identifier '--' 'do'
    case 970500:                    // Character '--' 'do'
    case 970501:                    // String '--' 'do'
    case 970502:                    // Integer '--' 'do'
    case 970503:                    // Complex '--' 'do'
    case 970504:                    // Real '--' 'do'
    case 986883:                    // Identifier '--' 'else'
    case 986884:                    // Character '--' 'else'
    case 986885:                    // String '--' 'else'
    case 986886:                    // Integer '--' 'else'
    case 986887:                    // Complex '--' 'else'
    case 986888:                    // Real '--' 'else'
    case 1003267:                   // Identifier '--' 'export'
    case 1003268:                   // Character '--' 'export'
    case 1003269:                   // String '--' 'export'
    case 1003270:                   // Integer '--' 'export'
    case 1003271:                   // Complex '--' 'export'
    case 1003272:                   // Real '--' 'export'
    case 1052419:                   // Identifier '--' 'for'
    case 1052420:                   // Character '--' 'for'
    case 1052421:                   // String '--' 'for'
    case 1052422:                   // Integer '--' 'for'
    case 1052423:                   // Complex '--' 'for'
    case 1052424:                   // Real '--' 'for'
    case 1068803:                   // Identifier '--' 'foreach'
    case 1068804:                   // Character '--' 'foreach'
    case 1068805:                   // String '--' 'foreach'
    case 1068806:                   // Integer '--' 'foreach'
    case 1068807:                   // Complex '--' 'foreach'
    case 1068808:                   // Real '--' 'foreach'
    case 1085187:                   // Identifier '--' 'global'
    case 1085188:                   // Character '--' 'global'
    case 1085189:                   // String '--' 'global'
    case 1085190:                   // Integer '--' 'global'
    case 1085191:                   // Complex '--' 'global'
    case 1085192:                   // Real '--' 'global'
    case 1134339:                   // Identifier '--' 'if'
    case 1134340:                   // Character '--' 'if'
    case 1134341:                   // String '--' 'if'
    case 1134342:                   // Integer '--' 'if'
    case 1134343:                   // Complex '--' 'if'
    case 1134344:                   // Real '--' 'if'
    case 1150723:                   // Identifier '--' 'import'
    case 1150724:                   // Character '--' 'import'
    case 1150725:                   // String '--' 'import'
    case 1150726:                   // Integer '--' 'import'
    case 1150727:                   // Complex '--' 'import'
    case 1150728:                   // Real '--' 'import'
    case 1167107:                   // Identifier '--' 'include'
    case 1167108:                   // Character '--' 'include'
    case 1167109:                   // String '--' 'include'
    case 1167110:                   // Integer '--' 'include'
    case 1167111:                   // Complex '--' 'include'
    case 1167112:                   // Real '--' 'include'
    case 1183491:                   // Identifier '--' 'local'
    case 1183492:                   // Character '--' 'local'
    case 1183493:                   // String '--' 'local'
    case 1183494:                   // Integer '--' 'local'
    case 1183495:                   // Complex '--' 'local'
    case 1183496:                   // Real '--' 'local'
    case 1199875:                   // Identifier '--' 'return'
    case 1199876:                   // Character '--' 'return'
    case 1199877:                   // String '--' 'return'
    case 1199878:                   // Integer '--' 'return'
    case 1199879:                   // Complex '--' 'return'
    case 1199880:                   // Real '--' 'return'
    case 1216259:                   // Identifier '--' 'switch'
    case 1216260:                   // Character '--' 'switch'
    case 1216261:                   // String '--' 'switch'
    case 1216262:                   // Integer '--' 'switch'
    case 1216263:                   // Complex '--' 'switch'
    case 1216264:                   // Real '--' 'switch'
    case 1232643:                   // Identifier '--' 'test'
    case 1232644:                   // Character '--' 'test'
    case 1232645:                   // String '--' 'test'
    case 1232646:                   // Integer '--' 'test'
    case 1232647:                   // Complex '--' 'test'
    case 1232648:                   // Real '--' 'test'
    case 1249027:                   // Identifier '--' 'throw'
    case 1249028:                   // Character '--' 'throw'
    case 1249029:                   // String '--' 'throw'
    case 1249030:                   // Integer '--' 'throw'
    case 1249031:                   // Complex '--' 'throw'
    case 1249032:                   // Real '--' 'throw'
    case 1265411:                   // Identifier '--' 'try'
    case 1265412:                   // Character '--' 'try'
    case 1265413:                   // String '--' 'try'
    case 1265414:                   // Integer '--' 'try'
    case 1265415:                   // Complex '--' 'try'
    case 1265416:                   // Real '--' 'try'
    case 1281795:                   // Identifier '--' 'while'
    case 1281796:                   // Character '--' 'while'
    case 1281797:                   // String '--' 'while'
    case 1281798:                   // Integer '--' 'while'
    case 1281799:                   // Complex '--' 'while'
    case 1281800:                   // Real '--' 'while'
    case 1314563:                   // Identifier '--' '|'
    case 1314564:                   // Character '--' '|'
    case 1314565:                   // String '--' '|'
    case 1314566:                   // Integer '--' '|'
    case 1314567:                   // Complex '--' '|'
    case 1314568:                   // Real '--' '|'
    case 1330947:                   // Identifier '--' '|='
    case 1330948:                   // Character '--' '|='
    case 1330949:                   // String '--' '|='
    case 1330950:                   // Integer '--' '|='
    case 1330951:                   // Complex '--' '|='
    case 1330952:                   // Real '--' '|='
    case 1347331:                   // Identifier '--' '||'
    case 1347332:                   // Character '--' '||'
    case 1347333:                   // String '--' '||'
    case 1347334:                   // Integer '--' '||'
    case 1347335:                   // Complex '--' '||'
    case 1347336:                   // Real '--' '||'
    case 1363715:                   // Identifier '--' '}'
    case 1363716:                   // Character '--' '}'
    case 1363717:                   // String '--' '}'
    case 1363718:                   // Integer '--' '}'
    case 1363719:                   // Complex '--' '}'
    case 1363720:                   // Real '--' '}'
    case 1380099:                   // Identifier '--' '~'
    case 1380100:                   // Character '--' '~'
    case 1380101:                   // String '--' '~'
    case 1380102:                   // Integer '--' '~'
    case 1380103:                   // Complex '--' '~'
    case 1380104:                   // Real '--' '~'
      try_Primary();
      lookahead1W(6);               // WhiteSpace^token | '--'
      consumeT(30);                 // '--'
      break;
    case 26:                        // '++'
      consumeT(26);                 // '++'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 30:                        // '--'
      consumeT(30);                 // '--'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 25:                        // '+'
      consumeT(25);                 // '+'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 29:                        // '-'
      consumeT(29);                 // '-'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 84:                        // '~'
      consumeT(84);                 // '~'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
      try_Primary();
      break;
    case 12:                        // '!'
      consumeT(12);                 // '!'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
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
    eventHandler.startNonterminal("Primary", e0);
    switch (l1)
    {
    case 3:                         // Identifier
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      if (l1 != 3)                  // Identifier
      {
        whitespace();
        parse_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      whitespace();
      parse_Member();
      break;
    case 20:                        // '('
      parse_ParenthesizedExpression();
      break;
    default:
      parse_Value();
    }
    eventHandler.endNonterminal("Primary", e0);
  }

  function try_Primary()
  {
    switch (l1)
    {
    case 3:                         // Identifier
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      if (l1 != 3)                  // Identifier
      {
        try_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      try_Member();
      break;
    case 20:                        // '('
      try_ParenthesizedExpression();
      break;
    default:
      try_Value();
    }
  }

  function parse_Statement()
  {
    eventHandler.startNonterminal("Statement", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(19);              // WhiteSpace^token | '(' | '.' | '{'
      switch (lk)
      {
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 53251)                // Identifier '.' Identifier
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
          try_NamespaceDeclaration();
          lk = -11;
        }
        catch (p11A)
        {
          lk = -12;
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
    case 59:                        // 'do'
      parse_Do();
      break;
    case 78:                        // 'while'
      parse_While();
      break;
    case 64:                        // 'for'
      parse_For();
      break;
    case 65:                        // 'foreach'
      parse_ForEach();
      break;
    case 54:                        // 'break'
      parse_Break();
      break;
    case 57:                        // 'continue'
      parse_Continue();
      break;
    case 69:                        // 'if'
      parse_If();
      break;
    case 74:                        // 'switch'
      parse_Switch();
      break;
    case 77:                        // 'try'
      parse_Try();
      break;
    case 75:                        // 'test'
      parse_Test();
      break;
    case -11:
    case 10115:                     // Identifier '{'
      parse_NamespaceDeclaration();
      break;
    case 73:                        // 'return'
      parse_Return();
      break;
    case 61:                        // 'export'
      parse_Export();
      break;
    case 70:                        // 'import'
      parse_Import();
      break;
    case 71:                        // 'include'
      parse_Include();
      break;
    case 66:                        // 'global'
      parse_Global();
      break;
    case 72:                        // 'local'
      parse_Local();
      break;
    case 76:                        // 'throw'
      parse_Throw();
      break;
    case 37:                        // ';'
      parse_EmptyStatement();
      break;
    default:
      parse_FunctionDeclaration();
    }
    eventHandler.endNonterminal("Statement", e0);
  }

  function try_Statement()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(19);              // WhiteSpace^token | '(' | '.' | '{'
      switch (lk)
      {
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 53251)                // Identifier '.' Identifier
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
          try_NamespaceDeclaration();
          memoize(4, e0A, -11);
          lk = -21;
        }
        catch (p11A)
        {
          lk = -12;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(4, e0A, -12);
        }
      }
    }
    switch (lk)
    {
    case 59:                        // 'do'
      try_Do();
      break;
    case 78:                        // 'while'
      try_While();
      break;
    case 64:                        // 'for'
      try_For();
      break;
    case 65:                        // 'foreach'
      try_ForEach();
      break;
    case 54:                        // 'break'
      try_Break();
      break;
    case 57:                        // 'continue'
      try_Continue();
      break;
    case 69:                        // 'if'
      try_If();
      break;
    case 74:                        // 'switch'
      try_Switch();
      break;
    case 77:                        // 'try'
      try_Try();
      break;
    case 75:                        // 'test'
      try_Test();
      break;
    case -11:
    case 10115:                     // Identifier '{'
      try_NamespaceDeclaration();
      break;
    case 73:                        // 'return'
      try_Return();
      break;
    case 61:                        // 'export'
      try_Export();
      break;
    case 70:                        // 'import'
      try_Import();
      break;
    case 71:                        // 'include'
      try_Include();
      break;
    case 66:                        // 'global'
      try_Global();
      break;
    case 72:                        // 'local'
      try_Local();
      break;
    case 76:                        // 'throw'
      try_Throw();
      break;
    case 37:                        // ';'
      try_EmptyStatement();
      break;
    case -21:
      break;
    default:
      try_FunctionDeclaration();
    }
  }

  function parse_Do()
  {
    eventHandler.startNonterminal("Do", e0);
    consume(59);                    // 'do'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consume(78);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(59);                   // 'do'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consumeT(78);                   // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(78);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(78);                   // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    eventHandler.startNonterminal("For", e0);
    consume(64);                    // 'for'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("For", e0);
  }

  function try_For()
  {
    consumeT(64);                   // 'for'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_ForEach()
  {
    eventHandler.startNonterminal("ForEach", e0);
    consume(65);                    // 'foreach'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("ForEach", e0);
  }

  function try_ForEach()
  {
    consumeT(65);                   // 'foreach'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Break()
  {
    eventHandler.startNonterminal("Break", e0);
    consume(54);                    // 'break'
    eventHandler.endNonterminal("Break", e0);
  }

  function try_Break()
  {
    consumeT(54);                   // 'break'
  }

  function parse_Continue()
  {
    eventHandler.startNonterminal("Continue", e0);
    consume(57);                    // 'continue'
    eventHandler.endNonterminal("Continue", e0);
  }

  function try_Continue()
  {
    consumeT(57);                   // 'continue'
  }

  function parse_If()
  {
    eventHandler.startNonterminal("If", e0);
    consume(69);                    // 'if'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10172:                   // 'else' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 7996:                    // 'else' 'f32'
      case 8124:                    // 'else' 'f64'
      case 8636:                    // 'else' 'i32'
      case 8764:                    // 'else' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 572:                     // 'else' Character
      case 700:                     // 'else' String
      case 828:                     // 'else' Integer
      case 956:                     // 'else' Complex
      case 1084:                    // 'else' Real
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10812:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8252:                    // 'else' 'for'
      case 8380:                    // 'else' 'foreach'
      case 8892:                    // 'else' 'if'
      case 9532:                    // 'else' 'switch'
      case 9660:                    // 'else' 'test'
      case 10044:                   // 'else' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 7868:                    // 'else' 'export'
      case 8508:                    // 'else' 'global'
      case 9020:                    // 'else' 'import'
      case 9148:                    // 'else' 'include'
      case 9276:                    // 'else' 'local'
      case 9404:                    // 'else' 'return'
      case 9788:                    // 'else' 'throw'
      case 9916:                    // 'else' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 1                     // END
     && lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Complex
     && lk != 8                     // Real
     && lk != 9                     // Comment
     && lk != 12                    // '!'
     && lk != 20                    // '('
     && lk != 21                    // ')'
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 28                    // ','
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 35                    // ':'
     && lk != 37                    // ';'
     && lk != 50                    // '['
     && lk != 51                    // ']'
     && lk != 54                    // 'break'
     && lk != 55                    // 'case'
     && lk != 56                    // 'catch'
     && lk != 57                    // 'continue'
     && lk != 58                    // 'default'
     && lk != 59                    // 'do'
     && lk != 61                    // 'export'
     && lk != 62                    // 'f32'
     && lk != 63                    // 'f64'
     && lk != 64                    // 'for'
     && lk != 65                    // 'foreach'
     && lk != 66                    // 'global'
     && lk != 67                    // 'i32'
     && lk != 68                    // 'i64'
     && lk != 69                    // 'if'
     && lk != 70                    // 'import'
     && lk != 71                    // 'include'
     && lk != 72                    // 'local'
     && lk != 73                    // 'return'
     && lk != 74                    // 'switch'
     && lk != 75                    // 'test'
     && lk != 76                    // 'throw'
     && lk != 77                    // 'try'
     && lk != 78                    // 'while'
     && lk != 79                    // '{'
     && lk != 83                    // '}'
     && lk != 84)                   // '~'
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
          try_Else();
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
    if (lk == -1)
    {
      whitespace();
      parse_Else();
    }
    eventHandler.endNonterminal("If", e0);
  }

  function try_If()
  {
    consumeT(69);                   // 'if'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10172:                   // 'else' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 7996:                    // 'else' 'f32'
      case 8124:                    // 'else' 'f64'
      case 8636:                    // 'else' 'i32'
      case 8764:                    // 'else' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 572:                     // 'else' Character
      case 700:                     // 'else' String
      case 828:                     // 'else' Integer
      case 956:                     // 'else' Complex
      case 1084:                    // 'else' Real
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10812:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8252:                    // 'else' 'for'
      case 8380:                    // 'else' 'foreach'
      case 8892:                    // 'else' 'if'
      case 9532:                    // 'else' 'switch'
      case 9660:                    // 'else' 'test'
      case 10044:                   // 'else' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 7868:                    // 'else' 'export'
      case 8508:                    // 'else' 'global'
      case 9020:                    // 'else' 'import'
      case 9148:                    // 'else' 'include'
      case 9276:                    // 'else' 'local'
      case 9404:                    // 'else' 'return'
      case 9788:                    // 'else' 'throw'
      case 9916:                    // 'else' 'try'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 1                     // END
     && lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Complex
     && lk != 8                     // Real
     && lk != 9                     // Comment
     && lk != 12                    // '!'
     && lk != 20                    // '('
     && lk != 21                    // ')'
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 28                    // ','
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 35                    // ':'
     && lk != 37                    // ';'
     && lk != 50                    // '['
     && lk != 51                    // ']'
     && lk != 54                    // 'break'
     && lk != 55                    // 'case'
     && lk != 56                    // 'catch'
     && lk != 57                    // 'continue'
     && lk != 58                    // 'default'
     && lk != 59                    // 'do'
     && lk != 61                    // 'export'
     && lk != 62                    // 'f32'
     && lk != 63                    // 'f64'
     && lk != 64                    // 'for'
     && lk != 65                    // 'foreach'
     && lk != 66                    // 'global'
     && lk != 67                    // 'i32'
     && lk != 68                    // 'i64'
     && lk != 69                    // 'if'
     && lk != 70                    // 'import'
     && lk != 71                    // 'include'
     && lk != 72                    // 'local'
     && lk != 73                    // 'return'
     && lk != 74                    // 'switch'
     && lk != 75                    // 'test'
     && lk != 76                    // 'throw'
     && lk != 77                    // 'try'
     && lk != 78                    // 'while'
     && lk != 79                    // '{'
     && lk != 83                    // '}'
     && lk != 84)                   // '~'
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
          try_Else();
          memoize(5, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
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
    eventHandler.startNonterminal("Else", e0);
    consume(60);                    // 'else'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Else", e0);
  }

  function try_Else()
  {
    consumeT(60);                   // 'else'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(74);                    // 'switch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consume(79);                    // '{'
    for (;;)
    {
      lookahead1W(12);              // WhiteSpace^token | 'case'
      whitespace();
      parse_Case();
      if (l1 != 55)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 58)                   // 'default'
    {
      whitespace();
      parse_Default();
    }
    consume(83);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(74);                   // 'switch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consumeT(79);                   // '{'
    for (;;)
    {
      lookahead1W(12);              // WhiteSpace^token | 'case'
      try_Case();
      if (l1 != 55)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 58)                   // 'default'
    {
      try_Default();
    }
    consumeT(83);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(55);                    // 'case'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(37);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 83)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Case", e0);
  }

  function try_Case()
  {
    consumeT(55);                   // 'case'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(37);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 83)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Default()
  {
    eventHandler.startNonterminal("Default", e0);
    consume(58);                    // 'default'
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(32);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 83)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Default", e0);
  }

  function try_Default()
  {
    consumeT(58);                   // 'default'
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(32);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 83)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Try()
  {
    eventHandler.startNonterminal("Try", e0);
    consume(77);                    // 'try'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51768                 // 'catch' '(' Identifier
     || lk == 68152                 // 'catch' '(' Character
     || lk == 84536                 // 'catch' '(' String
     || lk == 100920                // 'catch' '(' Integer
     || lk == 117304                // 'catch' '(' Complex
     || lk == 133688                // 'catch' '(' Real
     || lk == 150072                // 'catch' '(' Comment
     || lk == 199224                // 'catch' '(' '!'
     || lk == 330296                // 'catch' '(' '('
     || lk == 412216                // 'catch' '(' '+'
     || lk == 428600                // 'catch' '(' '++'
     || lk == 477752                // 'catch' '(' '-'
     || lk == 494136                // 'catch' '(' '--'
     || lk == 608824                // 'catch' '(' ';'
     || lk == 821816                // 'catch' '(' '['
     || lk == 887352                // 'catch' '(' 'break'
     || lk == 936504                // 'catch' '(' 'continue'
     || lk == 969272                // 'catch' '(' 'do'
     || lk == 1002040               // 'catch' '(' 'export'
     || lk == 1018424               // 'catch' '(' 'f32'
     || lk == 1034808               // 'catch' '(' 'f64'
     || lk == 1051192               // 'catch' '(' 'for'
     || lk == 1067576               // 'catch' '(' 'foreach'
     || lk == 1083960               // 'catch' '(' 'global'
     || lk == 1100344               // 'catch' '(' 'i32'
     || lk == 1116728               // 'catch' '(' 'i64'
     || lk == 1133112               // 'catch' '(' 'if'
     || lk == 1149496               // 'catch' '(' 'import'
     || lk == 1165880               // 'catch' '(' 'include'
     || lk == 1182264               // 'catch' '(' 'local'
     || lk == 1198648               // 'catch' '(' 'return'
     || lk == 1215032               // 'catch' '(' 'switch'
     || lk == 1231416               // 'catch' '(' 'test'
     || lk == 1247800               // 'catch' '(' 'throw'
     || lk == 1264184               // 'catch' '(' 'try'
     || lk == 1280568               // 'catch' '(' 'while'
     || lk == 1296952               // 'catch' '(' '{'
     || lk == 1378872)              // 'catch' '(' '~'
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
          try_Catch();
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
    if (lk == -1)
    {
      whitespace();
      parse_Catch();
    }
    eventHandler.endNonterminal("Try", e0);
  }

  function try_Try()
  {
    consumeT(77);                   // 'try'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51768                 // 'catch' '(' Identifier
     || lk == 68152                 // 'catch' '(' Character
     || lk == 84536                 // 'catch' '(' String
     || lk == 100920                // 'catch' '(' Integer
     || lk == 117304                // 'catch' '(' Complex
     || lk == 133688                // 'catch' '(' Real
     || lk == 150072                // 'catch' '(' Comment
     || lk == 199224                // 'catch' '(' '!'
     || lk == 330296                // 'catch' '(' '('
     || lk == 412216                // 'catch' '(' '+'
     || lk == 428600                // 'catch' '(' '++'
     || lk == 477752                // 'catch' '(' '-'
     || lk == 494136                // 'catch' '(' '--'
     || lk == 608824                // 'catch' '(' ';'
     || lk == 821816                // 'catch' '(' '['
     || lk == 887352                // 'catch' '(' 'break'
     || lk == 936504                // 'catch' '(' 'continue'
     || lk == 969272                // 'catch' '(' 'do'
     || lk == 1002040               // 'catch' '(' 'export'
     || lk == 1018424               // 'catch' '(' 'f32'
     || lk == 1034808               // 'catch' '(' 'f64'
     || lk == 1051192               // 'catch' '(' 'for'
     || lk == 1067576               // 'catch' '(' 'foreach'
     || lk == 1083960               // 'catch' '(' 'global'
     || lk == 1100344               // 'catch' '(' 'i32'
     || lk == 1116728               // 'catch' '(' 'i64'
     || lk == 1133112               // 'catch' '(' 'if'
     || lk == 1149496               // 'catch' '(' 'import'
     || lk == 1165880               // 'catch' '(' 'include'
     || lk == 1182264               // 'catch' '(' 'local'
     || lk == 1198648               // 'catch' '(' 'return'
     || lk == 1215032               // 'catch' '(' 'switch'
     || lk == 1231416               // 'catch' '(' 'test'
     || lk == 1247800               // 'catch' '(' 'throw'
     || lk == 1264184               // 'catch' '(' 'try'
     || lk == 1280568               // 'catch' '(' 'while'
     || lk == 1296952               // 'catch' '(' '{'
     || lk == 1378872)              // 'catch' '(' '~'
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
          try_Catch();
          memoize(6, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
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
    eventHandler.startNonterminal("Test", e0);
    consume(75);                    // 'test'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(30);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Complex
     && lk != 8                     // Real
     && lk != 9                     // Comment
     && lk != 12                    // '!'
     && lk != 20                    // '('
     && lk != 21                    // ')'
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 50                    // '['
     && lk != 54                    // 'break'
     && lk != 57                    // 'continue'
     && lk != 59                    // 'do'
     && lk != 61                    // 'export'
     && lk != 62                    // 'f32'
     && lk != 63                    // 'f64'
     && lk != 64                    // 'for'
     && lk != 65                    // 'foreach'
     && lk != 66                    // 'global'
     && lk != 67                    // 'i32'
     && lk != 68                    // 'i64'
     && lk != 69                    // 'if'
     && lk != 70                    // 'import'
     && lk != 71                    // 'include'
     && lk != 72                    // 'local'
     && lk != 73                    // 'return'
     && lk != 74                    // 'switch'
     && lk != 75                    // 'test'
     && lk != 76                    // 'throw'
     && lk != 77                    // 'try'
     && lk != 78                    // 'while'
     && lk != 79                    // '{'
     && lk != 84                    // '~'
     && lk != 421                   // ';' Identifier
     && lk != 549                   // ';' Character
     && lk != 677                   // ';' String
     && lk != 805                   // ';' Integer
     && lk != 933                   // ';' Complex
     && lk != 1061                  // ';' Real
     && lk != 1189                  // ';' Comment
     && lk != 1573                  // ';' '!'
     && lk != 2597                  // ';' '('
     && lk != 3237                  // ';' '+'
     && lk != 3365                  // ';' '++'
     && lk != 3749                  // ';' '-'
     && lk != 3877                  // ';' '--'
     && lk != 6437                  // ';' '['
     && lk != 6949                  // ';' 'break'
     && lk != 7333                  // ';' 'continue'
     && lk != 7589                  // ';' 'do'
     && lk != 7845                  // ';' 'export'
     && lk != 7973                  // ';' 'f32'
     && lk != 8101                  // ';' 'f64'
     && lk != 8229                  // ';' 'for'
     && lk != 8357                  // ';' 'foreach'
     && lk != 8485                  // ';' 'global'
     && lk != 8613                  // ';' 'i32'
     && lk != 8741                  // ';' 'i64'
     && lk != 8869                  // ';' 'if'
     && lk != 8997                  // ';' 'import'
     && lk != 9125                  // ';' 'include'
     && lk != 9253                  // ';' 'local'
     && lk != 9381                  // ';' 'return'
     && lk != 9509                  // ';' 'switch'
     && lk != 9637                  // ';' 'test'
     && lk != 9765                  // ';' 'throw'
     && lk != 9893                  // ';' 'try'
     && lk != 10021                 // ';' 'while'
     && lk != 10149                 // ';' '{'
     && lk != 10789)                // ';' '~'
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
          try_Expression();
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
    if (lk == -1
     || lk == 3                     // Identifier
     || lk == 4                     // Character
     || lk == 5                     // String
     || lk == 6                     // Integer
     || lk == 7                     // Complex
     || lk == 8                     // Real
     || lk == 9                     // Comment
     || lk == 12                    // '!'
     || lk == 20                    // '('
     || lk == 25                    // '+'
     || lk == 26                    // '++'
     || lk == 29                    // '-'
     || lk == 30                    // '--'
     || lk == 50                    // '['
     || lk == 54                    // 'break'
     || lk == 57                    // 'continue'
     || lk == 59                    // 'do'
     || lk == 61                    // 'export'
     || lk == 62                    // 'f32'
     || lk == 63                    // 'f64'
     || lk == 64                    // 'for'
     || lk == 65                    // 'foreach'
     || lk == 66                    // 'global'
     || lk == 67                    // 'i32'
     || lk == 68                    // 'i64'
     || lk == 69                    // 'if'
     || lk == 70                    // 'import'
     || lk == 71                    // 'include'
     || lk == 72                    // 'local'
     || lk == 73                    // 'return'
     || lk == 74                    // 'switch'
     || lk == 75                    // 'test'
     || lk == 76                    // 'throw'
     || lk == 77                    // 'try'
     || lk == 78                    // 'while'
     || lk == 79                    // '{'
     || lk == 84)                   // '~'
    {
      whitespace();
      parse_Expression();
    }
    lookahead1W(16);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consume(37);                  // ';'
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(30);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 51877               // ';' ')' Identifier
       || lk == 68261               // ';' ')' Character
       || lk == 84645               // ';' ')' String
       || lk == 101029              // ';' ')' Integer
       || lk == 117413              // ';' ')' Complex
       || lk == 133797              // ';' ')' Real
       || lk == 150181              // ';' ')' Comment
       || lk == 199333              // ';' ')' '!'
       || lk == 330405              // ';' ')' '('
       || lk == 348837              // ';' ';' ')'
       || lk == 412325              // ';' ')' '+'
       || lk == 428709              // ';' ')' '++'
       || lk == 477861              // ';' ')' '-'
       || lk == 494245              // ';' ')' '--'
       || lk == 608933              // ';' ')' ';'
       || lk == 821925              // ';' ')' '['
       || lk == 887461              // ';' ')' 'break'
       || lk == 936613              // ';' ')' 'continue'
       || lk == 969381              // ';' ')' 'do'
       || lk == 1002149             // ';' ')' 'export'
       || lk == 1018533             // ';' ')' 'f32'
       || lk == 1034917             // ';' ')' 'f64'
       || lk == 1051301             // ';' ')' 'for'
       || lk == 1067685             // ';' ')' 'foreach'
       || lk == 1084069             // ';' ')' 'global'
       || lk == 1100453             // ';' ')' 'i32'
       || lk == 1116837             // ';' ')' 'i64'
       || lk == 1133221             // ';' ')' 'if'
       || lk == 1149605             // ';' ')' 'import'
       || lk == 1165989             // ';' ')' 'include'
       || lk == 1182373             // ';' ')' 'local'
       || lk == 1198757             // ';' ')' 'return'
       || lk == 1215141             // ';' ')' 'switch'
       || lk == 1231525             // ';' ')' 'test'
       || lk == 1247909             // ';' ')' 'throw'
       || lk == 1264293             // ';' ')' 'try'
       || lk == 1280677             // ';' ')' 'while'
       || lk == 1297061             // ';' ')' '{'
       || lk == 1378981)            // ';' ')' '~'
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
            try_Expression();
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
      if (lk != -2
       && lk != 21                  // ')'
       && lk != 421                 // ';' Identifier
       && lk != 549                 // ';' Character
       && lk != 677                 // ';' String
       && lk != 805                 // ';' Integer
       && lk != 933                 // ';' Complex
       && lk != 1061                // ';' Real
       && lk != 1189                // ';' Comment
       && lk != 1573                // ';' '!'
       && lk != 2597                // ';' '('
       && lk != 3237                // ';' '+'
       && lk != 3365                // ';' '++'
       && lk != 3749                // ';' '-'
       && lk != 3877                // ';' '--'
       && lk != 6437                // ';' '['
       && lk != 6949                // ';' 'break'
       && lk != 7333                // ';' 'continue'
       && lk != 7589                // ';' 'do'
       && lk != 7845                // ';' 'export'
       && lk != 7973                // ';' 'f32'
       && lk != 8101                // ';' 'f64'
       && lk != 8229                // ';' 'for'
       && lk != 8357                // ';' 'foreach'
       && lk != 8485                // ';' 'global'
       && lk != 8613                // ';' 'i32'
       && lk != 8741                // ';' 'i64'
       && lk != 8869                // ';' 'if'
       && lk != 8997                // ';' 'import'
       && lk != 9125                // ';' 'include'
       && lk != 9253                // ';' 'local'
       && lk != 9381                // ';' 'return'
       && lk != 9509                // ';' 'switch'
       && lk != 9637                // ';' 'test'
       && lk != 9765                // ';' 'throw'
       && lk != 9893                // ';' 'try'
       && lk != 10021               // ';' 'while'
       && lk != 10149               // ';' '{'
       && lk != 10789)              // ';' '~'
      {
        whitespace();
        parse_Expression();
      }
      lookahead1W(16);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consume(37);                // ';'
        lookahead1W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          whitespace();
          parse_Expression();
        }
      }
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51768                 // 'catch' '(' Identifier
     || lk == 68152                 // 'catch' '(' Character
     || lk == 84536                 // 'catch' '(' String
     || lk == 100920                // 'catch' '(' Integer
     || lk == 117304                // 'catch' '(' Complex
     || lk == 133688                // 'catch' '(' Real
     || lk == 150072                // 'catch' '(' Comment
     || lk == 199224                // 'catch' '(' '!'
     || lk == 330296                // 'catch' '(' '('
     || lk == 412216                // 'catch' '(' '+'
     || lk == 428600                // 'catch' '(' '++'
     || lk == 477752                // 'catch' '(' '-'
     || lk == 494136                // 'catch' '(' '--'
     || lk == 608824                // 'catch' '(' ';'
     || lk == 821816                // 'catch' '(' '['
     || lk == 887352                // 'catch' '(' 'break'
     || lk == 936504                // 'catch' '(' 'continue'
     || lk == 969272                // 'catch' '(' 'do'
     || lk == 1002040               // 'catch' '(' 'export'
     || lk == 1018424               // 'catch' '(' 'f32'
     || lk == 1034808               // 'catch' '(' 'f64'
     || lk == 1051192               // 'catch' '(' 'for'
     || lk == 1067576               // 'catch' '(' 'foreach'
     || lk == 1083960               // 'catch' '(' 'global'
     || lk == 1100344               // 'catch' '(' 'i32'
     || lk == 1116728               // 'catch' '(' 'i64'
     || lk == 1133112               // 'catch' '(' 'if'
     || lk == 1149496               // 'catch' '(' 'import'
     || lk == 1165880               // 'catch' '(' 'include'
     || lk == 1182264               // 'catch' '(' 'local'
     || lk == 1198648               // 'catch' '(' 'return'
     || lk == 1215032               // 'catch' '(' 'switch'
     || lk == 1231416               // 'catch' '(' 'test'
     || lk == 1247800               // 'catch' '(' 'throw'
     || lk == 1264184               // 'catch' '(' 'try'
     || lk == 1280568               // 'catch' '(' 'while'
     || lk == 1296952               // 'catch' '(' '{'
     || lk == 1378872)              // 'catch' '(' '~'
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
          try_Catch();
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
    if (lk == -1)
    {
      whitespace();
      parse_Catch();
    }
    eventHandler.endNonterminal("Test", e0);
  }

  function try_Test()
  {
    consumeT(75);                   // 'test'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(30);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Complex
     && lk != 8                     // Real
     && lk != 9                     // Comment
     && lk != 12                    // '!'
     && lk != 20                    // '('
     && lk != 21                    // ')'
     && lk != 25                    // '+'
     && lk != 26                    // '++'
     && lk != 29                    // '-'
     && lk != 30                    // '--'
     && lk != 50                    // '['
     && lk != 54                    // 'break'
     && lk != 57                    // 'continue'
     && lk != 59                    // 'do'
     && lk != 61                    // 'export'
     && lk != 62                    // 'f32'
     && lk != 63                    // 'f64'
     && lk != 64                    // 'for'
     && lk != 65                    // 'foreach'
     && lk != 66                    // 'global'
     && lk != 67                    // 'i32'
     && lk != 68                    // 'i64'
     && lk != 69                    // 'if'
     && lk != 70                    // 'import'
     && lk != 71                    // 'include'
     && lk != 72                    // 'local'
     && lk != 73                    // 'return'
     && lk != 74                    // 'switch'
     && lk != 75                    // 'test'
     && lk != 76                    // 'throw'
     && lk != 77                    // 'try'
     && lk != 78                    // 'while'
     && lk != 79                    // '{'
     && lk != 84                    // '~'
     && lk != 421                   // ';' Identifier
     && lk != 549                   // ';' Character
     && lk != 677                   // ';' String
     && lk != 805                   // ';' Integer
     && lk != 933                   // ';' Complex
     && lk != 1061                  // ';' Real
     && lk != 1189                  // ';' Comment
     && lk != 1573                  // ';' '!'
     && lk != 2597                  // ';' '('
     && lk != 3237                  // ';' '+'
     && lk != 3365                  // ';' '++'
     && lk != 3749                  // ';' '-'
     && lk != 3877                  // ';' '--'
     && lk != 6437                  // ';' '['
     && lk != 6949                  // ';' 'break'
     && lk != 7333                  // ';' 'continue'
     && lk != 7589                  // ';' 'do'
     && lk != 7845                  // ';' 'export'
     && lk != 7973                  // ';' 'f32'
     && lk != 8101                  // ';' 'f64'
     && lk != 8229                  // ';' 'for'
     && lk != 8357                  // ';' 'foreach'
     && lk != 8485                  // ';' 'global'
     && lk != 8613                  // ';' 'i32'
     && lk != 8741                  // ';' 'i64'
     && lk != 8869                  // ';' 'if'
     && lk != 8997                  // ';' 'import'
     && lk != 9125                  // ';' 'include'
     && lk != 9253                  // ';' 'local'
     && lk != 9381                  // ';' 'return'
     && lk != 9509                  // ';' 'switch'
     && lk != 9637                  // ';' 'test'
     && lk != 9765                  // ';' 'throw'
     && lk != 9893                  // ';' 'try'
     && lk != 10021                 // ';' 'while'
     && lk != 10149                 // ';' '{'
     && lk != 10789)                // ';' '~'
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
          try_Expression();
          memoize(7, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(7, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk == -1
     || lk == 3                     // Identifier
     || lk == 4                     // Character
     || lk == 5                     // String
     || lk == 6                     // Integer
     || lk == 7                     // Complex
     || lk == 8                     // Real
     || lk == 9                     // Comment
     || lk == 12                    // '!'
     || lk == 20                    // '('
     || lk == 25                    // '+'
     || lk == 26                    // '++'
     || lk == 29                    // '-'
     || lk == 30                    // '--'
     || lk == 50                    // '['
     || lk == 54                    // 'break'
     || lk == 57                    // 'continue'
     || lk == 59                    // 'do'
     || lk == 61                    // 'export'
     || lk == 62                    // 'f32'
     || lk == 63                    // 'f64'
     || lk == 64                    // 'for'
     || lk == 65                    // 'foreach'
     || lk == 66                    // 'global'
     || lk == 67                    // 'i32'
     || lk == 68                    // 'i64'
     || lk == 69                    // 'if'
     || lk == 70                    // 'import'
     || lk == 71                    // 'include'
     || lk == 72                    // 'local'
     || lk == 73                    // 'return'
     || lk == 74                    // 'switch'
     || lk == 75                    // 'test'
     || lk == 76                    // 'throw'
     || lk == 77                    // 'try'
     || lk == 78                    // 'while'
     || lk == 79                    // '{'
     || lk == 84)                   // '~'
    {
      try_Expression();
    }
    lookahead1W(16);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consumeT(37);                 // ';'
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(30);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 51877               // ';' ')' Identifier
       || lk == 68261               // ';' ')' Character
       || lk == 84645               // ';' ')' String
       || lk == 101029              // ';' ')' Integer
       || lk == 117413              // ';' ')' Complex
       || lk == 133797              // ';' ')' Real
       || lk == 150181              // ';' ')' Comment
       || lk == 199333              // ';' ')' '!'
       || lk == 330405              // ';' ')' '('
       || lk == 348837              // ';' ';' ')'
       || lk == 412325              // ';' ')' '+'
       || lk == 428709              // ';' ')' '++'
       || lk == 477861              // ';' ')' '-'
       || lk == 494245              // ';' ')' '--'
       || lk == 608933              // ';' ')' ';'
       || lk == 821925              // ';' ')' '['
       || lk == 887461              // ';' ')' 'break'
       || lk == 936613              // ';' ')' 'continue'
       || lk == 969381              // ';' ')' 'do'
       || lk == 1002149             // ';' ')' 'export'
       || lk == 1018533             // ';' ')' 'f32'
       || lk == 1034917             // ';' ')' 'f64'
       || lk == 1051301             // ';' ')' 'for'
       || lk == 1067685             // ';' ')' 'foreach'
       || lk == 1084069             // ';' ')' 'global'
       || lk == 1100453             // ';' ')' 'i32'
       || lk == 1116837             // ';' ')' 'i64'
       || lk == 1133221             // ';' ')' 'if'
       || lk == 1149605             // ';' ')' 'import'
       || lk == 1165989             // ';' ')' 'include'
       || lk == 1182373             // ';' ')' 'local'
       || lk == 1198757             // ';' ')' 'return'
       || lk == 1215141             // ';' ')' 'switch'
       || lk == 1231525             // ';' ')' 'test'
       || lk == 1247909             // ';' ')' 'throw'
       || lk == 1264293             // ';' ')' 'try'
       || lk == 1280677             // ';' ')' 'while'
       || lk == 1297061             // ';' ')' '{'
       || lk == 1378981)            // ';' ')' '~'
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
            try_Expression();
            memoize(8, e0A, -1);
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(8, e0A, -2);
          }
          lk = -2;
        }
      }
      if (lk != -2
       && lk != 21                  // ')'
       && lk != 421                 // ';' Identifier
       && lk != 549                 // ';' Character
       && lk != 677                 // ';' String
       && lk != 805                 // ';' Integer
       && lk != 933                 // ';' Complex
       && lk != 1061                // ';' Real
       && lk != 1189                // ';' Comment
       && lk != 1573                // ';' '!'
       && lk != 2597                // ';' '('
       && lk != 3237                // ';' '+'
       && lk != 3365                // ';' '++'
       && lk != 3749                // ';' '-'
       && lk != 3877                // ';' '--'
       && lk != 6437                // ';' '['
       && lk != 6949                // ';' 'break'
       && lk != 7333                // ';' 'continue'
       && lk != 7589                // ';' 'do'
       && lk != 7845                // ';' 'export'
       && lk != 7973                // ';' 'f32'
       && lk != 8101                // ';' 'f64'
       && lk != 8229                // ';' 'for'
       && lk != 8357                // ';' 'foreach'
       && lk != 8485                // ';' 'global'
       && lk != 8613                // ';' 'i32'
       && lk != 8741                // ';' 'i64'
       && lk != 8869                // ';' 'if'
       && lk != 8997                // ';' 'import'
       && lk != 9125                // ';' 'include'
       && lk != 9253                // ';' 'local'
       && lk != 9381                // ';' 'return'
       && lk != 9509                // ';' 'switch'
       && lk != 9637                // ';' 'test'
       && lk != 9765                // ';' 'throw'
       && lk != 9893                // ';' 'try'
       && lk != 10021               // ';' 'while'
       && lk != 10149               // ';' '{'
       && lk != 10789)              // ';' '~'
      {
        try_Expression();
      }
      lookahead1W(16);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consumeT(37);               // ';'
        lookahead1W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Expression();
        }
      }
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51768                 // 'catch' '(' Identifier
     || lk == 68152                 // 'catch' '(' Character
     || lk == 84536                 // 'catch' '(' String
     || lk == 100920                // 'catch' '(' Integer
     || lk == 117304                // 'catch' '(' Complex
     || lk == 133688                // 'catch' '(' Real
     || lk == 150072                // 'catch' '(' Comment
     || lk == 199224                // 'catch' '(' '!'
     || lk == 330296                // 'catch' '(' '('
     || lk == 412216                // 'catch' '(' '+'
     || lk == 428600                // 'catch' '(' '++'
     || lk == 477752                // 'catch' '(' '-'
     || lk == 494136                // 'catch' '(' '--'
     || lk == 608824                // 'catch' '(' ';'
     || lk == 821816                // 'catch' '(' '['
     || lk == 887352                // 'catch' '(' 'break'
     || lk == 936504                // 'catch' '(' 'continue'
     || lk == 969272                // 'catch' '(' 'do'
     || lk == 1002040               // 'catch' '(' 'export'
     || lk == 1018424               // 'catch' '(' 'f32'
     || lk == 1034808               // 'catch' '(' 'f64'
     || lk == 1051192               // 'catch' '(' 'for'
     || lk == 1067576               // 'catch' '(' 'foreach'
     || lk == 1083960               // 'catch' '(' 'global'
     || lk == 1100344               // 'catch' '(' 'i32'
     || lk == 1116728               // 'catch' '(' 'i64'
     || lk == 1133112               // 'catch' '(' 'if'
     || lk == 1149496               // 'catch' '(' 'import'
     || lk == 1165880               // 'catch' '(' 'include'
     || lk == 1182264               // 'catch' '(' 'local'
     || lk == 1198648               // 'catch' '(' 'return'
     || lk == 1215032               // 'catch' '(' 'switch'
     || lk == 1231416               // 'catch' '(' 'test'
     || lk == 1247800               // 'catch' '(' 'throw'
     || lk == 1264184               // 'catch' '(' 'try'
     || lk == 1280568               // 'catch' '(' 'while'
     || lk == 1296952               // 'catch' '(' '{'
     || lk == 1378872)              // 'catch' '(' '~'
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
          try_Catch();
          memoize(9, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
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
    eventHandler.startNonterminal("Catch", e0);
    consume(56);                    // 'catch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Catch", e0);
  }

  function try_Catch()
  {
    consumeT(56);                   // 'catch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_NamespaceDeclaration()
  {
    eventHandler.startNonterminal("NamespaceDeclaration", e0);
    consume(3);                     // Identifier
    for (;;)
    {
      lookahead1W(18);              // WhiteSpace^token | '.' | '{'
      if (l1 != 32)                 // '.'
      {
        break;
      }
      consume(32);                  // '.'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
    }
    whitespace();
    parse_Block();
    eventHandler.endNonterminal("NamespaceDeclaration", e0);
  }

  function try_NamespaceDeclaration()
  {
    consumeT(3);                    // Identifier
    for (;;)
    {
      lookahead1W(18);              // WhiteSpace^token | '.' | '{'
      if (l1 != 32)                 // '.'
      {
        break;
      }
      consumeT(32);                 // '.'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consumeT(3);                  // Identifier
    }
    try_Block();
  }

  function parse_FunctionDeclaration()
  {
    eventHandler.startNonterminal("FunctionDeclaration", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(15);              // WhiteSpace^token | '(' | '.'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 446:                     // 'f32' Identifier
      case 447:                     // 'f64' Identifier
      case 451:                     // 'i32' Identifier
      case 452:                     // 'i64' Identifier
        lookahead3W(15);            // WhiteSpace^token | '(' | '.'
        break;
      }
      break;
    default:
      lk = l1;
    }
    lk = memoized(10, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2; var l3A = l3;
      var b3A = b3; var e3A = e3;
      try
      {
        consumeT(3);                // Identifier
        for (;;)
        {
          lookahead1W(15);          // WhiteSpace^token | '(' | '.'
          if (l1 != 32)             // '.'
          {
            break;
          }
          consumeT(32);             // '.'
          lookahead1W(0);           // Identifier | WhiteSpace^token
          consumeT(3);              // Identifier
        }
        consumeT(20);               // '('
        lookahead1W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Arguments();
        }
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        try_Expression();
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
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(15);        // WhiteSpace^token | '(' | '.'
            if (l1 != 32)           // '.'
            {
              break;
            }
            consumeT(32);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(20);             // '('
          lookahead1W(30);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          if (l1 != 21)             // ')'
          {
            try_Arguments();
          }
          consumeT(21);             // ')'
          lookahead1W(11);          // WhiteSpace^token | '?='
          consumeT(49);             // '?='
          lookahead1W(14);          // WhiteSpace^token | '{'
          try_Block();
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
            consumeT(3);            // Identifier
            for (;;)
            {
              lookahead1W(15);      // WhiteSpace^token | '(' | '.'
              if (l1 != 32)         // '.'
              {
                break;
              }
              consumeT(32);         // '.'
              lookahead1W(0);       // Identifier | WhiteSpace^token
              consumeT(3);          // Identifier
            }
            consumeT(20);           // '('
            lookahead1W(30);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            if (l1 != 21)           // ')'
            {
              try_Arguments();
            }
            consumeT(21);           // ')'
            lookahead1W(2);         // WhiteSpace^token | '#='
            consumeT(14);           // '#='
            lookahead1W(14);        // WhiteSpace^token | '{'
            try_Block();
            lk = -3;
          }
          catch (p3A)
          {
            try
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              consumeT(3);          // Identifier
              for (;;)
              {
                lookahead1W(15);    // WhiteSpace^token | '(' | '.'
                if (l1 != 32)       // '.'
                {
                  break;
                }
                consumeT(32);       // '.'
                lookahead1W(0);     // Identifier | WhiteSpace^token
                consumeT(3);        // Identifier
              }
              consumeT(20);         // '('
              lookahead1W(30);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
              if (l1 != 21)         // ')'
              {
                try_Arguments();
              }
              consumeT(21);         // ')'
              lookahead1W(8);       // WhiteSpace^token | ':='
              consumeT(36);         // ':='
              lookahead1W(14);      // WhiteSpace^token | '{'
              try_Block();
              lk = -4;
            }
            catch (p4A)
            {
              try
              {
                b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
                b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
                b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
                b3 = b3A; e3 = e3A; end = e3A; }}}
                if (l1 != 3)        // Identifier
                {
                  try_Type();
                }
                lookahead1W(0);     // Identifier | WhiteSpace^token
                consumeT(3);        // Identifier
                for (;;)
                {
                  lookahead1W(15);  // WhiteSpace^token | '(' | '.'
                  if (l1 != 32)     // '.'
                  {
                    break;
                  }
                  consumeT(32);     // '.'
                  lookahead1W(0);   // Identifier | WhiteSpace^token
                  consumeT(3);      // Identifier
                }
                consumeT(20);       // '('
                lookahead1W(30);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
                if (l1 != 21)       // ')'
                {
                  try_Arguments();
                }
                consumeT(21);       // ')'
                lookahead1W(14);    // WhiteSpace^token | '{'
                try_Block();
                lk = -5;
              }
              catch (p5A)
              {
                lk = -6;
              }
            }
          }
        }
      }
      b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
      b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
      b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
      b3 = b3A; e3 = e3A; end = e3A; }}}
      memoize(10, e0, lk);
    }
    switch (lk)
    {
    case -1:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consume(42);                  // '='
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Expression();
      break;
    case -2:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(11);              // WhiteSpace^token | '?='
      consume(49);                  // '?='
      lookahead1W(14);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -3:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(2);               // WhiteSpace^token | '#='
      consume(14);                  // '#='
      lookahead1W(14);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -4:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(8);               // WhiteSpace^token | ':='
      consume(36);                  // ':='
      lookahead1W(14);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -5:
      if (l1 != 3)                  // Identifier
      {
        whitespace();
        parse_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(14);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    default:
      if (l1 != 3)                  // Identifier
      {
        whitespace();
        parse_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(1);               // Script | WhiteSpace^token
      consume(10);                  // Script
    }
    eventHandler.endNonterminal("FunctionDeclaration", e0);
  }

  function try_FunctionDeclaration()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(15);              // WhiteSpace^token | '(' | '.'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    case 62:                        // 'f32'
    case 63:                        // 'f64'
    case 67:                        // 'i32'
    case 68:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 446:                     // 'f32' Identifier
      case 447:                     // 'f64' Identifier
      case 451:                     // 'i32' Identifier
      case 452:                     // 'i64' Identifier
        lookahead3W(15);            // WhiteSpace^token | '(' | '.'
        break;
      }
      break;
    default:
      lk = l1;
    }
    lk = memoized(10, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2; var l3A = l3;
      var b3A = b3; var e3A = e3;
      try
      {
        consumeT(3);                // Identifier
        for (;;)
        {
          lookahead1W(15);          // WhiteSpace^token | '(' | '.'
          if (l1 != 32)             // '.'
          {
            break;
          }
          consumeT(32);             // '.'
          lookahead1W(0);           // Identifier | WhiteSpace^token
          consumeT(3);              // Identifier
        }
        consumeT(20);               // '('
        lookahead1W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Arguments();
        }
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        try_Expression();
        memoize(10, e0A, -1);
        lk = -7;
      }
      catch (p1A)
      {
        try
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(15);        // WhiteSpace^token | '(' | '.'
            if (l1 != 32)           // '.'
            {
              break;
            }
            consumeT(32);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(20);             // '('
          lookahead1W(30);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          if (l1 != 21)             // ')'
          {
            try_Arguments();
          }
          consumeT(21);             // ')'
          lookahead1W(11);          // WhiteSpace^token | '?='
          consumeT(49);             // '?='
          lookahead1W(14);          // WhiteSpace^token | '{'
          try_Block();
          memoize(10, e0A, -2);
          lk = -7;
        }
        catch (p2A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            consumeT(3);            // Identifier
            for (;;)
            {
              lookahead1W(15);      // WhiteSpace^token | '(' | '.'
              if (l1 != 32)         // '.'
              {
                break;
              }
              consumeT(32);         // '.'
              lookahead1W(0);       // Identifier | WhiteSpace^token
              consumeT(3);          // Identifier
            }
            consumeT(20);           // '('
            lookahead1W(30);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            if (l1 != 21)           // ')'
            {
              try_Arguments();
            }
            consumeT(21);           // ')'
            lookahead1W(2);         // WhiteSpace^token | '#='
            consumeT(14);           // '#='
            lookahead1W(14);        // WhiteSpace^token | '{'
            try_Block();
            memoize(10, e0A, -3);
            lk = -7;
          }
          catch (p3A)
          {
            try
            {
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              consumeT(3);          // Identifier
              for (;;)
              {
                lookahead1W(15);    // WhiteSpace^token | '(' | '.'
                if (l1 != 32)       // '.'
                {
                  break;
                }
                consumeT(32);       // '.'
                lookahead1W(0);     // Identifier | WhiteSpace^token
                consumeT(3);        // Identifier
              }
              consumeT(20);         // '('
              lookahead1W(30);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
              if (l1 != 21)         // ')'
              {
                try_Arguments();
              }
              consumeT(21);         // ')'
              lookahead1W(8);       // WhiteSpace^token | ':='
              consumeT(36);         // ':='
              lookahead1W(14);      // WhiteSpace^token | '{'
              try_Block();
              memoize(10, e0A, -4);
              lk = -7;
            }
            catch (p4A)
            {
              try
              {
                b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
                b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
                b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
                b3 = b3A; e3 = e3A; end = e3A; }}}
                if (l1 != 3)        // Identifier
                {
                  try_Type();
                }
                lookahead1W(0);     // Identifier | WhiteSpace^token
                consumeT(3);        // Identifier
                for (;;)
                {
                  lookahead1W(15);  // WhiteSpace^token | '(' | '.'
                  if (l1 != 32)     // '.'
                  {
                    break;
                  }
                  consumeT(32);     // '.'
                  lookahead1W(0);   // Identifier | WhiteSpace^token
                  consumeT(3);      // Identifier
                }
                consumeT(20);       // '('
                lookahead1W(30);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
                if (l1 != 21)       // ')'
                {
                  try_Arguments();
                }
                consumeT(21);       // ')'
                lookahead1W(14);    // WhiteSpace^token | '{'
                try_Block();
                memoize(10, e0A, -5);
                lk = -7;
              }
              catch (p5A)
              {
                lk = -6;
                b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
                b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
                b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
                b3 = b3A; e3 = e3A; end = e3A; }}}
                memoize(10, e0A, -6);
              }
            }
          }
        }
      }
    }
    switch (lk)
    {
    case -1:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consumeT(42);                 // '='
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      try_Expression();
      break;
    case -2:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(11);              // WhiteSpace^token | '?='
      consumeT(49);                 // '?='
      lookahead1W(14);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -3:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(2);               // WhiteSpace^token | '#='
      consumeT(14);                 // '#='
      lookahead1W(14);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -4:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(8);               // WhiteSpace^token | ':='
      consumeT(36);                 // ':='
      lookahead1W(14);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -5:
      if (l1 != 3)                  // Identifier
      {
        try_Type();
      }
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(14);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -7:
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
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(1);               // Script | WhiteSpace^token
      consumeT(10);                 // Script
    }
  }

  function parse_Return()
  {
    eventHandler.startNonterminal("Return", e0);
    consume(73);                    // 'return'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(73);                   // 'return'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Export()
  {
    eventHandler.startNonterminal("Export", e0);
    consume(61);                    // 'export'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Export", e0);
  }

  function try_Export()
  {
    consumeT(61);                   // 'export'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Import()
  {
    eventHandler.startNonterminal("Import", e0);
    consume(70);                    // 'import'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Import", e0);
  }

  function try_Import()
  {
    consumeT(70);                   // 'import'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Include()
  {
    eventHandler.startNonterminal("Include", e0);
    consume(71);                    // 'include'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Include", e0);
  }

  function try_Include()
  {
    consumeT(71);                   // 'include'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Global()
  {
    eventHandler.startNonterminal("Global", e0);
    consume(66);                    // 'global'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Global", e0);
  }

  function try_Global()
  {
    consumeT(66);                   // 'global'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Local()
  {
    eventHandler.startNonterminal("Local", e0);
    consume(72);                    // 'local'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Local", e0);
  }

  function try_Local()
  {
    consumeT(72);                   // 'local'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Throw()
  {
    eventHandler.startNonterminal("Throw", e0);
    consume(76);                    // 'throw'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Throw", e0);
  }

  function try_Throw()
  {
    consumeT(76);                   // 'throw'
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_EmptyStatement()
  {
    eventHandler.startNonterminal("EmptyStatement", e0);
    consume(37);                    // ';'
    eventHandler.endNonterminal("EmptyStatement", e0);
  }

  function try_EmptyStatement()
  {
    consumeT(37);                   // ';'
  }

  function parse_Type()
  {
    eventHandler.startNonterminal("Type", e0);
    switch (l1)
    {
    case 67:                        // 'i32'
      consume(67);                  // 'i32'
      break;
    case 68:                        // 'i64'
      consume(68);                  // 'i64'
      break;
    case 62:                        // 'f32'
      consume(62);                  // 'f32'
      break;
    default:
      consume(63);                  // 'f64'
    }
    eventHandler.endNonterminal("Type", e0);
  }

  function try_Type()
  {
    switch (l1)
    {
    case 67:                        // 'i32'
      consumeT(67);                 // 'i32'
      break;
    case 68:                        // 'i64'
      consumeT(68);                 // 'i64'
      break;
    case 62:                        // 'f32'
      consumeT(62);                 // 'f32'
      break;
    default:
      consumeT(63);                 // 'f64'
    }
  }

  function parse_Arguments()
  {
    eventHandler.startNonterminal("Arguments", e0);
    parse_Expression();
    for (;;)
    {
      lookahead1W(20);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Arguments", e0);
  }

  function try_Arguments()
  {
    try_Expression();
    for (;;)
    {
      lookahead1W(20);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      try_Expression();
    }
  }

  function parse_Member()
  {
    eventHandler.startNonterminal("Member", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51715                 // Identifier '(' Identifier
     || lk == 53251                 // Identifier '.' Identifier
     || lk == 68099                 // Identifier '(' Character
     || lk == 84483                 // Identifier '(' String
     || lk == 100867                // Identifier '(' Integer
     || lk == 117251                // Identifier '(' Complex
     || lk == 133635                // Identifier '(' Real
     || lk == 150019                // Identifier '(' Comment
     || lk == 199171                // Identifier '(' '!'
     || lk == 330243                // Identifier '(' '('
     || lk == 412163                // Identifier '(' '+'
     || lk == 428547                // Identifier '(' '++'
     || lk == 477699                // Identifier '(' '-'
     || lk == 494083                // Identifier '(' '--'
     || lk == 608771                // Identifier '(' ';'
     || lk == 821763                // Identifier '(' '['
     || lk == 887299                // Identifier '(' 'break'
     || lk == 936451                // Identifier '(' 'continue'
     || lk == 969219                // Identifier '(' 'do'
     || lk == 1001987               // Identifier '(' 'export'
     || lk == 1018371               // Identifier '(' 'f32'
     || lk == 1034755               // Identifier '(' 'f64'
     || lk == 1051139               // Identifier '(' 'for'
     || lk == 1067523               // Identifier '(' 'foreach'
     || lk == 1083907               // Identifier '(' 'global'
     || lk == 1100291               // Identifier '(' 'i32'
     || lk == 1116675               // Identifier '(' 'i64'
     || lk == 1133059               // Identifier '(' 'if'
     || lk == 1149443               // Identifier '(' 'import'
     || lk == 1165827               // Identifier '(' 'include'
     || lk == 1182211               // Identifier '(' 'local'
     || lk == 1198595               // Identifier '(' 'return'
     || lk == 1214979               // Identifier '(' 'switch'
     || lk == 1231363               // Identifier '(' 'test'
     || lk == 1247747               // Identifier '(' 'throw'
     || lk == 1264131               // Identifier '(' 'try'
     || lk == 1280515               // Identifier '(' 'while'
     || lk == 1296899               // Identifier '(' '{'
     || lk == 1378819)              // Identifier '(' '~'
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
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(15);        // WhiteSpace^token | '(' | '.'
            if (l1 != 32)           // '.'
            {
              break;
            }
            consumeT(32);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(20);             // '('
          lookahead1W(30);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          if (l1 != 21)             // ')'
          {
            try_Arguments();
          }
          consumeT(21);             // ')'
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
    switch (lk)
    {
    case -1:
    case 346627:                    // Identifier '(' ')'
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      break;
    default:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      for (;;)
      {
        lookahead1W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(31);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(39);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(34);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(31);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(44);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
            break;
          case 10162:               // '[' '{'
            lookahead3W(35);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 7986:                // '[' 'f32'
          case 8114:                // '[' 'f64'
          case 8626:                // '[' 'i32'
          case 8754:                // '[' 'i64'
            lookahead3W(0);         // Identifier | WhiteSpace^token
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 946:                 // '[' Complex
          case 1074:                // '[' Real
            lookahead3W(28);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 1586:                // '[' '!'
          case 3250:                // '[' '+'
          case 3378:                // '[' '++'
          case 3762:                // '[' '-'
          case 3890:                // '[' '--'
          case 10802:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
            break;
          case 8242:                // '[' 'for'
          case 8370:                // '[' 'foreach'
          case 8882:                // '[' 'if'
          case 9522:                // '[' 'switch'
          case 9650:                // '[' 'test'
          case 10034:               // '[' 'while'
            lookahead3W(3);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'export'
          case 8498:                // '[' 'global'
          case 9010:                // '[' 'import'
          case 9138:                // '[' 'include'
          case 9266:                // '[' 'local'
          case 9394:                // '[' 'return'
          case 9778:                // '[' 'throw'
          case 9906:                // '[' 'try'
            lookahead3W(26);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk != 1                 // END
         && lk != 3                 // Identifier
         && lk != 4                 // Character
         && lk != 5                 // String
         && lk != 6                 // Integer
         && lk != 7                 // Complex
         && lk != 8                 // Real
         && lk != 9                 // Comment
         && lk != 12                // '!'
         && lk != 13                // '!='
         && lk != 15                // '%'
         && lk != 16                // '%='
         && lk != 17                // '&'
         && lk != 18                // '&&'
         && lk != 19                // '&='
         && lk != 20                // '('
         && lk != 21                // ')'
         && lk != 22                // '*'
         && lk != 23                // '**'
         && lk != 24                // '*='
         && lk != 25                // '+'
         && lk != 26                // '++'
         && lk != 27                // '+='
         && lk != 28                // ','
         && lk != 29                // '-'
         && lk != 30                // '--'
         && lk != 31                // '-='
         && lk != 33                // '/'
         && lk != 34                // '/='
         && lk != 35                // ':'
         && lk != 36                // ':='
         && lk != 37                // ';'
         && lk != 38                // '<'
         && lk != 39                // '<<'
         && lk != 40                // '<<='
         && lk != 41                // '<='
         && lk != 42                // '='
         && lk != 43                // '=='
         && lk != 44                // '>'
         && lk != 45                // '>='
         && lk != 46                // '>>'
         && lk != 47                // '>>='
         && lk != 48                // '?'
         && lk != 49                // '?='
         && lk != 51                // ']'
         && lk != 52                // '^'
         && lk != 53                // '^='
         && lk != 54                // 'break'
         && lk != 55                // 'case'
         && lk != 56                // 'catch'
         && lk != 57                // 'continue'
         && lk != 58                // 'default'
         && lk != 59                // 'do'
         && lk != 60                // 'else'
         && lk != 61                // 'export'
         && lk != 62                // 'f32'
         && lk != 63                // 'f64'
         && lk != 64                // 'for'
         && lk != 65                // 'foreach'
         && lk != 66                // 'global'
         && lk != 67                // 'i32'
         && lk != 68                // 'i64'
         && lk != 69                // 'if'
         && lk != 70                // 'import'
         && lk != 71                // 'include'
         && lk != 72                // 'local'
         && lk != 73                // 'return'
         && lk != 74                // 'switch'
         && lk != 75                // 'test'
         && lk != 76                // 'throw'
         && lk != 77                // 'try'
         && lk != 78                // 'while'
         && lk != 79                // '{'
         && lk != 80                // '|'
         && lk != 81                // '|='
         && lk != 82                // '||'
         && lk != 83                // '}'
         && lk != 84                // '~'
         && lk != 53938             // '[' ';' Identifier
         && lk != 70322             // '[' ';' Character
         && lk != 86706             // '[' ';' String
         && lk != 103090            // '[' ';' Integer
         && lk != 119474            // '[' ';' Complex
         && lk != 135858            // '[' ';' Real
         && lk != 152242            // '[' ';' Comment
         && lk != 201394            // '[' ';' '!'
         && lk != 332466            // '[' ';' '('
         && lk != 350642            // '[' ']' ')'
         && lk != 414386            // '[' ';' '+'
         && lk != 430770            // '[' ';' '++'
         && lk != 465330            // '[' ']' ','
         && lk != 479922            // '[' ';' '-'
         && lk != 496306            // '[' ';' '--'
         && lk != 580018            // '[' ']' ':'
         && lk != 606642            // '[' Identifier ';'
         && lk != 606770            // '[' Character ';'
         && lk != 606898            // '[' String ';'
         && lk != 607026            // '[' Integer ';'
         && lk != 607154            // '[' Complex ';'
         && lk != 607282            // '[' Real ';'
         && lk != 607410            // '[' Comment ';'
         && lk != 610994            // '[' ';' ';'
         && lk != 613170            // '[' 'break' ';'
         && lk != 613554            // '[' 'continue' ';'
         && lk != 823986            // '[' ';' '['
         && lk != 842162            // '[' ']' ']'
         && lk != 889522            // '[' ';' 'break'
         && lk != 924082            // '[' ']' 'catch'
         && lk != 938674            // '[' ';' 'continue'
         && lk != 971442            // '[' ';' 'do'
         && lk != 989618            // '[' ']' 'else'
         && lk != 1004210           // '[' ';' 'export'
         && lk != 1020594           // '[' ';' 'f32'
         && lk != 1036978           // '[' ';' 'f64'
         && lk != 1053362           // '[' ';' 'for'
         && lk != 1069746           // '[' ';' 'foreach'
         && lk != 1086130           // '[' ';' 'global'
         && lk != 1102514           // '[' ';' 'i32'
         && lk != 1118898           // '[' ';' 'i64'
         && lk != 1135282           // '[' ';' 'if'
         && lk != 1151666           // '[' ';' 'import'
         && lk != 1168050           // '[' ';' 'include'
         && lk != 1184434           // '[' ';' 'local'
         && lk != 1200818           // '[' ';' 'return'
         && lk != 1217202           // '[' ';' 'switch'
         && lk != 1233586           // '[' ';' 'test'
         && lk != 1249970           // '[' ';' 'throw'
         && lk != 1266354           // '[' ';' 'try'
         && lk != 1282738           // '[' ';' 'while'
         && lk != 1299122           // '[' ';' '{'
         && lk != 1381042)          // '[' ';' '~'
        {
          lk = memoized(12, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(50);         // '['
              lookahead1W(31);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
              if (l1 != 51)         // ']'
              {
                try_Arguments();
              }
              consumeT(51);         // ']'
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
            memoize(12, e0, lk);
          }
        }
        if (lk != -1
         && lk != 350642            // '[' ']' ')'
         && lk != 465330            // '[' ']' ','
         && lk != 580018            // '[' ']' ':'
         && lk != 842162            // '[' ']' ']'
         && lk != 924082            // '[' ']' 'catch'
         && lk != 989618)           // '[' ']' 'else'
        {
          break;
        }
        consume(50);                // '['
        lookahead1W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 51)               // ']'
        {
          whitespace();
          parse_Arguments();
        }
        consume(51);                // ']'
      }
    }
    eventHandler.endNonterminal("Member", e0);
  }

  function try_Member()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51715                 // Identifier '(' Identifier
     || lk == 53251                 // Identifier '.' Identifier
     || lk == 68099                 // Identifier '(' Character
     || lk == 84483                 // Identifier '(' String
     || lk == 100867                // Identifier '(' Integer
     || lk == 117251                // Identifier '(' Complex
     || lk == 133635                // Identifier '(' Real
     || lk == 150019                // Identifier '(' Comment
     || lk == 199171                // Identifier '(' '!'
     || lk == 330243                // Identifier '(' '('
     || lk == 412163                // Identifier '(' '+'
     || lk == 428547                // Identifier '(' '++'
     || lk == 477699                // Identifier '(' '-'
     || lk == 494083                // Identifier '(' '--'
     || lk == 608771                // Identifier '(' ';'
     || lk == 821763                // Identifier '(' '['
     || lk == 887299                // Identifier '(' 'break'
     || lk == 936451                // Identifier '(' 'continue'
     || lk == 969219                // Identifier '(' 'do'
     || lk == 1001987               // Identifier '(' 'export'
     || lk == 1018371               // Identifier '(' 'f32'
     || lk == 1034755               // Identifier '(' 'f64'
     || lk == 1051139               // Identifier '(' 'for'
     || lk == 1067523               // Identifier '(' 'foreach'
     || lk == 1083907               // Identifier '(' 'global'
     || lk == 1100291               // Identifier '(' 'i32'
     || lk == 1116675               // Identifier '(' 'i64'
     || lk == 1133059               // Identifier '(' 'if'
     || lk == 1149443               // Identifier '(' 'import'
     || lk == 1165827               // Identifier '(' 'include'
     || lk == 1182211               // Identifier '(' 'local'
     || lk == 1198595               // Identifier '(' 'return'
     || lk == 1214979               // Identifier '(' 'switch'
     || lk == 1231363               // Identifier '(' 'test'
     || lk == 1247747               // Identifier '(' 'throw'
     || lk == 1264131               // Identifier '(' 'try'
     || lk == 1280515               // Identifier '(' 'while'
     || lk == 1296899               // Identifier '(' '{'
     || lk == 1378819)              // Identifier '(' '~'
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
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(15);        // WhiteSpace^token | '(' | '.'
            if (l1 != 32)           // '.'
            {
              break;
            }
            consumeT(32);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(20);             // '('
          lookahead1W(30);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          if (l1 != 21)             // ')'
          {
            try_Arguments();
          }
          consumeT(21);             // ')'
          memoize(11, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(11, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
    case 346627:                    // Identifier '(' ')'
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      break;
    case -3:
      break;
    default:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      for (;;)
      {
        lookahead1W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(31);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(39);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(34);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(31);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(44);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'export' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
            break;
          case 10162:               // '[' '{'
            lookahead3W(35);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 7986:                // '[' 'f32'
          case 8114:                // '[' 'f64'
          case 8626:                // '[' 'i32'
          case 8754:                // '[' 'i64'
            lookahead3W(0);         // Identifier | WhiteSpace^token
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 946:                 // '[' Complex
          case 1074:                // '[' Real
            lookahead3W(28);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 1586:                // '[' '!'
          case 3250:                // '[' '+'
          case 3378:                // '[' '++'
          case 3762:                // '[' '-'
          case 3890:                // '[' '--'
          case 10802:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
            break;
          case 8242:                // '[' 'for'
          case 8370:                // '[' 'foreach'
          case 8882:                // '[' 'if'
          case 9522:                // '[' 'switch'
          case 9650:                // '[' 'test'
          case 10034:               // '[' 'while'
            lookahead3W(3);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'export'
          case 8498:                // '[' 'global'
          case 9010:                // '[' 'import'
          case 9138:                // '[' 'include'
          case 9266:                // '[' 'local'
          case 9394:                // '[' 'return'
          case 9778:                // '[' 'throw'
          case 9906:                // '[' 'try'
            lookahead3W(26);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk != 1                 // END
         && lk != 3                 // Identifier
         && lk != 4                 // Character
         && lk != 5                 // String
         && lk != 6                 // Integer
         && lk != 7                 // Complex
         && lk != 8                 // Real
         && lk != 9                 // Comment
         && lk != 12                // '!'
         && lk != 13                // '!='
         && lk != 15                // '%'
         && lk != 16                // '%='
         && lk != 17                // '&'
         && lk != 18                // '&&'
         && lk != 19                // '&='
         && lk != 20                // '('
         && lk != 21                // ')'
         && lk != 22                // '*'
         && lk != 23                // '**'
         && lk != 24                // '*='
         && lk != 25                // '+'
         && lk != 26                // '++'
         && lk != 27                // '+='
         && lk != 28                // ','
         && lk != 29                // '-'
         && lk != 30                // '--'
         && lk != 31                // '-='
         && lk != 33                // '/'
         && lk != 34                // '/='
         && lk != 35                // ':'
         && lk != 36                // ':='
         && lk != 37                // ';'
         && lk != 38                // '<'
         && lk != 39                // '<<'
         && lk != 40                // '<<='
         && lk != 41                // '<='
         && lk != 42                // '='
         && lk != 43                // '=='
         && lk != 44                // '>'
         && lk != 45                // '>='
         && lk != 46                // '>>'
         && lk != 47                // '>>='
         && lk != 48                // '?'
         && lk != 49                // '?='
         && lk != 51                // ']'
         && lk != 52                // '^'
         && lk != 53                // '^='
         && lk != 54                // 'break'
         && lk != 55                // 'case'
         && lk != 56                // 'catch'
         && lk != 57                // 'continue'
         && lk != 58                // 'default'
         && lk != 59                // 'do'
         && lk != 60                // 'else'
         && lk != 61                // 'export'
         && lk != 62                // 'f32'
         && lk != 63                // 'f64'
         && lk != 64                // 'for'
         && lk != 65                // 'foreach'
         && lk != 66                // 'global'
         && lk != 67                // 'i32'
         && lk != 68                // 'i64'
         && lk != 69                // 'if'
         && lk != 70                // 'import'
         && lk != 71                // 'include'
         && lk != 72                // 'local'
         && lk != 73                // 'return'
         && lk != 74                // 'switch'
         && lk != 75                // 'test'
         && lk != 76                // 'throw'
         && lk != 77                // 'try'
         && lk != 78                // 'while'
         && lk != 79                // '{'
         && lk != 80                // '|'
         && lk != 81                // '|='
         && lk != 82                // '||'
         && lk != 83                // '}'
         && lk != 84                // '~'
         && lk != 53938             // '[' ';' Identifier
         && lk != 70322             // '[' ';' Character
         && lk != 86706             // '[' ';' String
         && lk != 103090            // '[' ';' Integer
         && lk != 119474            // '[' ';' Complex
         && lk != 135858            // '[' ';' Real
         && lk != 152242            // '[' ';' Comment
         && lk != 201394            // '[' ';' '!'
         && lk != 332466            // '[' ';' '('
         && lk != 350642            // '[' ']' ')'
         && lk != 414386            // '[' ';' '+'
         && lk != 430770            // '[' ';' '++'
         && lk != 465330            // '[' ']' ','
         && lk != 479922            // '[' ';' '-'
         && lk != 496306            // '[' ';' '--'
         && lk != 580018            // '[' ']' ':'
         && lk != 606642            // '[' Identifier ';'
         && lk != 606770            // '[' Character ';'
         && lk != 606898            // '[' String ';'
         && lk != 607026            // '[' Integer ';'
         && lk != 607154            // '[' Complex ';'
         && lk != 607282            // '[' Real ';'
         && lk != 607410            // '[' Comment ';'
         && lk != 610994            // '[' ';' ';'
         && lk != 613170            // '[' 'break' ';'
         && lk != 613554            // '[' 'continue' ';'
         && lk != 823986            // '[' ';' '['
         && lk != 842162            // '[' ']' ']'
         && lk != 889522            // '[' ';' 'break'
         && lk != 924082            // '[' ']' 'catch'
         && lk != 938674            // '[' ';' 'continue'
         && lk != 971442            // '[' ';' 'do'
         && lk != 989618            // '[' ']' 'else'
         && lk != 1004210           // '[' ';' 'export'
         && lk != 1020594           // '[' ';' 'f32'
         && lk != 1036978           // '[' ';' 'f64'
         && lk != 1053362           // '[' ';' 'for'
         && lk != 1069746           // '[' ';' 'foreach'
         && lk != 1086130           // '[' ';' 'global'
         && lk != 1102514           // '[' ';' 'i32'
         && lk != 1118898           // '[' ';' 'i64'
         && lk != 1135282           // '[' ';' 'if'
         && lk != 1151666           // '[' ';' 'import'
         && lk != 1168050           // '[' ';' 'include'
         && lk != 1184434           // '[' ';' 'local'
         && lk != 1200818           // '[' ';' 'return'
         && lk != 1217202           // '[' ';' 'switch'
         && lk != 1233586           // '[' ';' 'test'
         && lk != 1249970           // '[' ';' 'throw'
         && lk != 1266354           // '[' ';' 'try'
         && lk != 1282738           // '[' ';' 'while'
         && lk != 1299122           // '[' ';' '{'
         && lk != 1381042)          // '[' ';' '~'
        {
          lk = memoized(12, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(50);         // '['
              lookahead1W(31);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
              if (l1 != 51)         // ']'
              {
                try_Arguments();
              }
              consumeT(51);         // ']'
              memoize(12, e0B, -1);
              continue;
            }
            catch (p1B)
            {
              b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
              b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
              b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
              b3 = b3B; e3 = e3B; end = e3B; }}}
              memoize(12, e0B, -2);
              break;
            }
          }
        }
        if (lk != -1
         && lk != 350642            // '[' ']' ')'
         && lk != 465330            // '[' ']' ','
         && lk != 580018            // '[' ']' ':'
         && lk != 842162            // '[' ']' ']'
         && lk != 924082            // '[' ']' 'catch'
         && lk != 989618)           // '[' ']' 'else'
        {
          break;
        }
        consumeT(50);               // '['
        lookahead1W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 51)               // ']'
        {
          try_Arguments();
        }
        consumeT(51);               // ']'
      }
    }
  }

  function parse_Array()
  {
    eventHandler.startNonterminal("Array", e0);
    consume(79);                    // '{'
    lookahead1W(35);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    if (l1 != 28                    // ','
     && l1 != 83)                   // '}'
    {
      whitespace();
      parse_Element();
    }
    for (;;)
    {
      lookahead1W(17);              // WhiteSpace^token | ',' | '}'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(83);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(79);                   // '{'
    lookahead1W(35);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    if (l1 != 28                    // ','
     && l1 != 83)                   // '}'
    {
      try_Element();
    }
    for (;;)
    {
      lookahead1W(17);              // WhiteSpace^token | ',' | '}'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      try_Element();
    }
    consumeT(83);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(50);                    // '['
    lookahead1W(31);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(34);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(34);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 610981)               // ';' ';' ';'
    {
      lk = memoized(13, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
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
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(13, e0, lk);
      }
    }
    if (lk != -2
     && lk != 51                    // ']'
     && lk != 421                   // ';' Identifier
     && lk != 549                   // ';' Character
     && lk != 677                   // ';' String
     && lk != 805                   // ';' Integer
     && lk != 933                   // ';' Complex
     && lk != 1061                  // ';' Real
     && lk != 1189                  // ';' Comment
     && lk != 1573                  // ';' '!'
     && lk != 2597                  // ';' '('
     && lk != 3237                  // ';' '+'
     && lk != 3365                  // ';' '++'
     && lk != 3749                  // ';' '-'
     && lk != 3877                  // ';' '--'
     && lk != 6437                  // ';' '['
     && lk != 6949                  // ';' 'break'
     && lk != 7333                  // ';' 'continue'
     && lk != 7589                  // ';' 'do'
     && lk != 7845                  // ';' 'export'
     && lk != 7973                  // ';' 'f32'
     && lk != 8101                  // ';' 'f64'
     && lk != 8229                  // ';' 'for'
     && lk != 8357                  // ';' 'foreach'
     && lk != 8485                  // ';' 'global'
     && lk != 8613                  // ';' 'i32'
     && lk != 8741                  // ';' 'i64'
     && lk != 8869                  // ';' 'if'
     && lk != 8997                  // ';' 'import'
     && lk != 9125                  // ';' 'include'
     && lk != 9253                  // ';' 'local'
     && lk != 9381                  // ';' 'return'
     && lk != 9509                  // ';' 'switch'
     && lk != 9637                  // ';' 'test'
     && lk != 9765                  // ';' 'throw'
     && lk != 9893                  // ';' 'try'
     && lk != 10021                 // ';' 'while'
     && lk != 10149                 // ';' '{'
     && lk != 10789                 // ';' '~'
     && lk != 463525                // ';' ';' ','
     && lk != 840357)               // ';' ';' ']'
    {
      whitespace();
      parse_Row();
    }
    for (;;)
    {
      if (l1 != 37)                 // ';'
      {
        break;
      }
      consume(37);                  // ';'
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Row();
    }
    consume(51);                    // ']'
    eventHandler.endNonterminal("Matrix", e0);
  }

  function try_Matrix()
  {
    consumeT(50);                   // '['
    lookahead1W(31);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(34);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(34);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 610981)               // ';' ';' ';'
    {
      lk = memoized(13, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Row();
          memoize(13, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(13, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk != -2
     && lk != 51                    // ']'
     && lk != 421                   // ';' Identifier
     && lk != 549                   // ';' Character
     && lk != 677                   // ';' String
     && lk != 805                   // ';' Integer
     && lk != 933                   // ';' Complex
     && lk != 1061                  // ';' Real
     && lk != 1189                  // ';' Comment
     && lk != 1573                  // ';' '!'
     && lk != 2597                  // ';' '('
     && lk != 3237                  // ';' '+'
     && lk != 3365                  // ';' '++'
     && lk != 3749                  // ';' '-'
     && lk != 3877                  // ';' '--'
     && lk != 6437                  // ';' '['
     && lk != 6949                  // ';' 'break'
     && lk != 7333                  // ';' 'continue'
     && lk != 7589                  // ';' 'do'
     && lk != 7845                  // ';' 'export'
     && lk != 7973                  // ';' 'f32'
     && lk != 8101                  // ';' 'f64'
     && lk != 8229                  // ';' 'for'
     && lk != 8357                  // ';' 'foreach'
     && lk != 8485                  // ';' 'global'
     && lk != 8613                  // ';' 'i32'
     && lk != 8741                  // ';' 'i64'
     && lk != 8869                  // ';' 'if'
     && lk != 8997                  // ';' 'import'
     && lk != 9125                  // ';' 'include'
     && lk != 9253                  // ';' 'local'
     && lk != 9381                  // ';' 'return'
     && lk != 9509                  // ';' 'switch'
     && lk != 9637                  // ';' 'test'
     && lk != 9765                  // ';' 'throw'
     && lk != 9893                  // ';' 'try'
     && lk != 10021                 // ';' 'while'
     && lk != 10149                 // ';' '{'
     && lk != 10789                 // ';' '~'
     && lk != 463525                // ';' ';' ','
     && lk != 840357)               // ';' ';' ']'
    {
      try_Row();
    }
    for (;;)
    {
      if (l1 != 37)                 // ';'
      {
        break;
      }
      consumeT(37);                 // ';'
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      try_Row();
    }
    consumeT(51);                   // ']'
  }

  function parse_Element()
  {
    eventHandler.startNonterminal("Element", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(38);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(27);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4483                  // Identifier ':'
     || lk == 4485)                 // String ':'
    {
      whitespace();
      parse_Key();
      lookahead1W(7);               // WhiteSpace^token | ':'
      consume(35);                  // ':'
    }
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Element", e0);
  }

  function try_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(38);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(27);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4483                  // Identifier ':'
     || lk == 4485)                 // String ':'
    {
      try_Key();
      lookahead1W(7);               // WhiteSpace^token | ':'
      consumeT(35);                 // ':'
    }
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Key()
  {
    eventHandler.startNonterminal("Key", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      consume(3);                   // Identifier
      break;
    default:
      consume(5);                   // String
    }
    eventHandler.endNonterminal("Key", e0);
  }

  function try_Key()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      consumeT(3);                  // Identifier
      break;
    default:
      consumeT(5);                  // String
    }
  }

  function parse_Row()
  {
    eventHandler.startNonterminal("Row", e0);
    parse_Column();
    for (;;)
    {
      lookahead1W(21);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Column();
    }
    eventHandler.endNonterminal("Row", e0);
  }

  function try_Row()
  {
    try_Column();
    for (;;)
    {
      lookahead1W(21);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      try_Column();
    }
  }

  function parse_Column()
  {
    eventHandler.startNonterminal("Column", e0);
    parse_Expression();
    eventHandler.endNonterminal("Column", e0);
  }

  function try_Column()
  {
    try_Expression();
  }

  function parse_ParenthesizedExpression()
  {
    eventHandler.startNonterminal("ParenthesizedExpression", e0);
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'export' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_Value()
  {
    eventHandler.startNonterminal("Value", e0);
    switch (l1)
    {
    case 6:                         // Integer
      consume(6);                   // Integer
      break;
    case 8:                         // Real
      consume(8);                   // Real
      break;
    case 7:                         // Complex
      consume(7);                   // Complex
      break;
    case 4:                         // Character
      consume(4);                   // Character
      break;
    case 5:                         // String
      consume(5);                   // String
      break;
    case 79:                        // '{'
      parse_Array();
      break;
    default:
      parse_Matrix();
    }
    eventHandler.endNonterminal("Value", e0);
  }

  function try_Value()
  {
    switch (l1)
    {
    case 6:                         // Integer
      consumeT(6);                  // Integer
      break;
    case 8:                         // Real
      consumeT(8);                  // Real
      break;
    case 7:                         // Complex
      consumeT(7);                  // Complex
      break;
    case 4:                         // Character
      consumeT(4);                  // Character
      break;
    case 5:                         // String
      consumeT(5);                  // String
      break;
    case 79:                        // '{'
      try_Array();
      break;
    default:
      try_Matrix();
    }
  }

  function consume(t)
  {
    if (l1 == t)
    {
      whitespace();
      eventHandler.terminal(MaiaScript.TOKEN[l1], b1, e1);
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
      if (code != 11)               // WhiteSpace^token
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

  function lookahead3W(tokenSetId)
  {
    if (l3 == 0)
    {
      l3 = matchW(tokenSetId);
      b3 = begin;
      e3 = end;
    }
    lk |= l3 << 14;
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

MaiaScript.XmlSerializer = function(log, indent)
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

MaiaScript.getTokenSet = function(tokenSetId)
{
  var set = [];
  var s = tokenSetId < 0 ? - tokenSetId : MaiaScript.INITIAL[tokenSetId] & 511;
  for (var i = 0; i < 85; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 288 + s - 1;
    var f = MaiaScript.EXPECTED[(i0 & 3) + MaiaScript.EXPECTED[i0 >> 2]];
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

MaiaScript.TopDownTreeBuilder = function()
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
    var nonterminal = new MaiaScript.Nonterminal(name, begin, begin, []);
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
    addChild(new MaiaScript.Terminal(name, begin, end));
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

MaiaScript.Terminal = function(name, begin, end)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.terminal(name, begin, end);
  };
};

MaiaScript.Nonterminal = function(name, begin, end, children)
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
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  /* 29 */ 1051, 30, 31, 32, 1057, 34, 35, 36, 37, 38, 39, 1064, 41, 42, 43, 1068, 1069
];

MaiaScript.TRANSITION =
[
  /*    0 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*   18 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*   36 */ 2607, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142,
  /*   54 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 2304, 2304, 2306, 4142, 2607, 2473, 4142, 4142,
  /*   72 */ 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*   90 */ 4142, 4142, 4142, 4142, 4142, 4142, 2304, 2304, 2306, 4142, 4142, 4142, 4142, 4142, 4141, 4736, 4142, 3915,
  /*  108 */ 4739, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  126 */ 4142, 4142, 4142, 4001, 2322, 4142, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142,
  /*  144 */ 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6277,
  /*  162 */ 2594, 4142, 3905, 2473, 4142, 4142, 2368, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 5446, 4142, 4142,
  /*  180 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4461, 4109, 2390, 4142, 2607, 2473,
  /*  198 */ 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  216 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3749, 6564, 6420, 3308, 5517, 5644, 3039,
  /*  234 */ 5517, 4135, 3042, 3747, 5650, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  252 */ 4142, 4142, 4142, 4142, 4142, 3939, 3968, 4142, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142,
  /*  270 */ 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  288 */ 4142, 4212, 6551, 4142, 2403, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650,
  /*  306 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5310, 2419, 4142,
  /*  324 */ 2348, 2473, 4142, 4142, 2466, 4736, 4142, 6331, 4739, 4142, 6636, 4142, 4142, 2910, 4142, 4142, 4142, 4142,
  /*  342 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4337, 4349, 2489, 4142, 2607, 2473, 4142, 4142,
  /*  360 */ 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  378 */ 4142, 4142, 4142, 4142, 4142, 4142, 3426, 3417, 3405, 4142, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915,
  /*  396 */ 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  414 */ 4142, 4142, 4142, 4488, 5212, 4142, 2607, 2529, 4464, 4142, 4141, 6413, 4142, 3915, 2563, 4142, 4098, 4142,
  /*  432 */ 4103, 2581, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5567, 5829,
  /*  450 */ 2628, 2669, 3981, 3991, 2671, 4142, 4141, 4736, 4142, 3915, 2666, 4142, 5893, 4143, 2687, 4882, 4142, 4142,
  /*  468 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 2710, 2763, 4142, 2607, 2473,
  /*  486 */ 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  504 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 3676, 6196, 2803, 4741, 2962, 2843, 6641, 4142, 4141, 4736,
  /*  522 */ 4142, 3915, 2666, 4142, 5893, 4143, 2687, 4882, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  540 */ 4142, 4142, 4142, 4142, 5080, 2878, 5699, 4142, 2641, 2473, 4142, 4142, 2901, 4736, 4142, 3915, 4739, 4142,
  /*  558 */ 2540, 4142, 4142, 6143, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  576 */ 2926, 4552, 2949, 4142, 2607, 3706, 4106, 4142, 4141, 4736, 4142, 2443, 3002, 4142, 4142, 4142, 4142, 2650,
  /*  594 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5723, 3025, 3749,
  /*  612 */ 4608, 6420, 6441, 5517, 3060, 3039, 5517, 4528, 3090, 4928, 3108, 5969, 3132, 3175, 4142, 4142, 4142, 4142,
  /*  630 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6034, 3191, 3749, 4608, 6420, 6441, 5517,
  /*  648 */ 3060, 3039, 5517, 6170, 3090, 5183, 3221, 4249, 3132, 3245, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  666 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6034, 3191, 3749, 4608, 6420, 6441, 6062, 3261, 3303, 5517, 6170,
  /*  684 */ 3090, 5183, 3221, 4249, 3132, 3245, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  702 */ 4142, 4142, 4142, 6034, 3191, 3324, 4621, 5574, 3351, 5517, 3060, 3039, 5517, 6170, 3090, 5183, 3221, 4249,
  /*  720 */ 3132, 3245, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6034,
  /*  738 */ 3191, 3749, 4608, 6420, 6441, 6061, 3447, 3463, 5517, 6170, 3090, 5183, 3221, 4249, 3132, 3245, 4142, 4142,
  /*  756 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6034, 3191, 3749, 4608, 6420,
  /*  774 */ 6441, 5517, 3060, 3039, 5517, 6170, 3090, 5183, 3221, 3229, 3484, 3500, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  792 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6034, 3191, 3516, 4634, 2694, 3543, 5517, 3060, 3039,
  /*  810 */ 5517, 6170, 3090, 5183, 3221, 4249, 3132, 3245, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  828 */ 4142, 4142, 4142, 4142, 4142, 6034, 3191, 3749, 4608, 6420, 6441, 5517, 3583, 3039, 5517, 3567, 3090, 5183,
  /*  846 */ 3221, 4249, 3132, 3245, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  864 */ 2853, 5901, 2335, 4142, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650,
  /*  882 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4654, 3634, 3622, 4142,
  /*  900 */ 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142,
  /*  918 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4838, 4595, 4142, 2607, 4405, 4142, 4142,
  /*  936 */ 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  954 */ 4142, 4142, 4142, 4142, 4142, 4142, 2374, 5013, 6360, 2352, 3650, 3666, 3431, 4142, 4141, 3699, 4142, 3915,
  /*  972 */ 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /*  990 */ 4142, 4142, 4142, 5104, 6483, 4142, 2607, 6267, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142,
  /* 1008 */ 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 2612, 5270,
  /* 1026 */ 6623, 4142, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142,
  /* 1044 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 2607, 2473,
  /* 1062 */ 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1080 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3749, 6564, 6420, 3308, 5517, 6084, 3039,
  /* 1098 */ 5517, 5246, 3042, 5183, 3722, 4308, 3728, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1116 */ 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3749, 6564, 6420, 3308, 5517, 6084, 3039, 5517, 5246, 3042, 5183,
  /* 1134 */ 3722, 4308, 3854, 3287, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1152 */ 5079, 5946, 4188, 3749, 6564, 6420, 3308, 5517, 6084, 3039, 5517, 5246, 3744, 5183, 3766, 4308, 3728, 5054,
  /* 1170 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3749,
  /* 1188 */ 2776, 6420, 3308, 5517, 3790, 3039, 5517, 5246, 3042, 5183, 3722, 4308, 3728, 5054, 4142, 4142, 4142, 4142,
  /* 1206 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3749, 2816, 6420, 3308, 5517,
  /* 1224 */ 3842, 3039, 5517, 4135, 3042, 3747, 5650, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1242 */ 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3749, 6564, 6420, 3308, 5517, 5644, 3039, 5517, 4135,
  /* 1260 */ 3744, 3747, 5614, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1278 */ 4142, 4142, 5079, 5946, 4188, 3749, 2975, 6420, 3308, 5517, 3870, 3039, 5517, 4968, 3042, 3747, 5650, 3750,
  /* 1296 */ 5656, 4909, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 2513,
  /* 1314 */ 3892, 4142, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142,
  /* 1332 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4647, 2473,
  /* 1350 */ 4142, 4142, 3931, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2862, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1368 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 3159, 3955, 4142, 2607, 2473, 4142, 4142, 4141, 4736,
  /* 1386 */ 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1404 */ 4142, 4142, 4142, 4142, 4142, 5767, 6538, 4142, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142,
  /* 1422 */ 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1440 */ 5079, 5946, 4188, 4017, 4044, 2933, 5043, 5517, 6084, 3039, 5394, 4071, 4125, 4159, 4175, 4308, 3728, 5054,
  /* 1458 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4204, 3335, 4228, 3749,
  /* 1476 */ 6564, 6420, 3308, 5517, 4265, 3039, 3092, 5246, 4301, 5183, 3722, 4308, 3728, 5364, 4142, 4142, 4142, 4142,
  /* 1494 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4324, 3527, 4365, 3749, 6564, 6420, 3308, 4958,
  /* 1512 */ 6084, 3379, 4518, 5246, 3042, 4431, 3722, 4447, 6226, 3287, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1530 */ 4142, 4142, 4142, 4142, 4142, 4142, 4480, 2787, 4504, 3749, 6564, 6420, 3308, 5517, 6084, 3039, 5517, 5246,
  /* 1548 */ 3042, 5183, 3722, 4868, 6305, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1566 */ 4142, 4142, 4544, 2827, 4568, 4670, 6564, 2547, 4697, 5517, 6084, 4279, 3116, 6113, 4757, 4773, 3766, 4789,
  /* 1584 */ 3728, 5500, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4830, 4814,
  /* 1602 */ 4854, 3815, 2736, 6420, 4898, 4925, 4944, 3039, 4984, 5246, 3042, 5183, 3722, 4308, 3728, 5364, 4142, 4142,
  /* 1620 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5005, 2986, 5029, 3749, 6564, 6420,
  /* 1638 */ 3308, 5517, 5644, 3039, 5517, 4135, 3042, 3747, 5650, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1656 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3606, 4803, 6420, 3276, 5517, 5644, 3039,
  /* 1674 */ 5517, 4135, 3042, 5406, 5650, 5070, 4724, 6373, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1692 */ 4142, 4142, 4142, 4142, 5096, 5337, 5120, 3749, 6564, 6420, 3308, 3774, 5158, 3205, 5180, 4135, 3042, 5199,
  /* 1710 */ 5236, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1728 */ 5079, 5946, 4188, 3749, 6564, 6420, 3308, 5517, 5644, 3039, 5517, 4135, 3042, 3392, 5853, 3750, 5656, 5054,
  /* 1746 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5262, 4028, 5286, 5326,
  /* 1764 */ 5712, 3683, 5353, 5517, 5380, 3039, 5518, 5437, 5422, 4285, 3876, 5300, 6401, 5054, 4142, 4142, 4142, 4142,
  /* 1782 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 6023, 2432, 6420, 5462, 5517,
  /* 1800 */ 5644, 3039, 5517, 4135, 3042, 3747, 5650, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1818 */ 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 6256, 2502, 6420, 5489, 5516, 5534, 4242, 5517, 4135,
  /* 1836 */ 3042, 3747, 5650, 5883, 4086, 5364, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1854 */ 4142, 4142, 5079, 5946, 4188, 5556, 5225, 2450, 5590, 5134, 5644, 3557, 5803, 5638, 5672, 3747, 5650, 3750,
  /* 1872 */ 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946,
  /* 1890 */ 4188, 3749, 6564, 6420, 3308, 5739, 5644, 3804, 5517, 4135, 3744, 3747, 5614, 3750, 5656, 5054, 4142, 4142,
  /* 1908 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5759, 4055, 5783, 4393, 6564, 3009,
  /* 1926 */ 4712, 4379, 5534, 3597, 5799, 4135, 3042, 5922, 5540, 5819, 5656, 5364, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1944 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5845, 4681, 5869, 3749, 6564, 6420, 3468, 5917, 5938, 3074,
  /* 1962 */ 5962, 4135, 3042, 3747, 5650, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 1980 */ 4142, 4142, 4142, 4142, 5985, 3826, 6009, 3749, 6564, 6420, 4989, 5142, 5534, 3365, 6050, 6078, 6100, 3747,
  /* 1998 */ 5650, 3750, 3147, 5473, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 2016 */ 5079, 5946, 4188, 3749, 2975, 6420, 3308, 5517, 3870, 3039, 5517, 6129, 6159, 5686, 5164, 6186, 5602, 6496,
  /* 2034 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6212, 2747, 6242, 4582,
  /* 2052 */ 6564, 6420, 6293, 5517, 5644, 3039, 5517, 4135, 3042, 5743, 5650, 6321, 5656, 5054, 4142, 4142, 4142, 4142,
  /* 2070 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 6347, 2723, 2885, 5622, 5517,
  /* 2088 */ 6389, 3039, 5517, 4135, 3042, 3747, 5650, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 2106 */ 4142, 4142, 4142, 4142, 4142, 4142, 5079, 5946, 4188, 3749, 6564, 6420, 3308, 3044, 5644, 3039, 6436, 4135,
  /* 2124 */ 3042, 3747, 5650, 3750, 5656, 5054, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 2142 */ 4142, 4142, 2565, 6457, 6470, 3910, 2607, 2473, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142,
  /* 2160 */ 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 5993,
  /* 2178 */ 6610, 4142, 2607, 6665, 4142, 4142, 4141, 4736, 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142,
  /* 2196 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 6512, 6525, 4142, 2607, 2473,
  /* 2214 */ 4142, 4142, 6581, 4736, 4142, 6575, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 2232 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4415, 6597, 4142, 2607, 2473, 4142, 4142, 4141, 4736,
  /* 2250 */ 4142, 3915, 4739, 4142, 4142, 4142, 4142, 2650, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 2268 */ 4142, 4142, 4142, 4142, 4142, 4142, 6657, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 2286 */ 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142, 4142,
  /* 2304 */ 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 0, 0, 6656,
  /* 2323 */ 6656, 6656, 78, 6656, 78, 78, 6656, 6734, 6734, 6734, 6734, 6734, 0, 0, 0, 64, 0, 18496, 64, 18432, 64,
  /* 2344 */ 18496, 18496, 18496, 18496, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7680, 0, 0, 18944, 129, 0, 0,
  /* 2371 */ 68, 0, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22016, 0, 0, 0, 0, 0, 5210, 5210, 5210, 0, 5210, 0, 0, 5210,
  /* 2398 */ 5210, 5210, 5210, 5210, 5210, 0, 0, 0, 68, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9728, 69, 69, 69, 0, 69, 0,
  /* 2425 */ 0, 69, 69, 69, 69, 69, 69, 0, 0, 0, 68, 133, 0, 0, 0, 0, 2095, 2164, 0, 0, 0, 0, 0, 0, 5632, 0, 0, 0, 0, 0,
  /* 2455 */ 0, 0, 0, 0, 5210, 0, 2095, 2199, 30767, 2095, 2201, 129, 0, 0, 68, 2560, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2482 */ 5210, 0, 0, 0, 0, 0, 0, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752,
  /* 2501 */ 10752, 0, 0, 0, 68, 133, 0, 0, 0, 0, 2095, 2169, 0, 0, 0, 0, 0, 0, 26112, 26112, 0, 0, 26112, 0, 0, 26112,
  /* 2527 */ 26112, 26112, 12288, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 149, 0, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2556 */ 5210, 0, 2095, 2095, 2162, 2095, 2095, 230, 194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40960, 0, 0,
  /* 2582 */ 230, 230, 0, 0, 0, 0, 68, 0, 0, 0, 68, 68, 68, 68, 68, 0, 68, 0, 0, 68, 68, 68, 68, 68, 68, 0, 0, 0, 68,
  /* 2611 */ 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 13388, 13388, 13388, 13394, 13388, 13394, 13394,
  /* 2635 */ 13388, 13420, 13420, 13420, 13420, 13420, 0, 0, 0, 68, 133, 0, 0, 138, 138, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0,
  /* 2660 */ 0, 68, 68, 68, 68, 68, 70, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13824, 0, 0, 0, 0, 0, 70, 0, 0,
  /* 2691 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2095, 2095, 2192, 0, 14848, 0, 0, 14848, 14848, 0,
  /* 2717 */ 0, 0, 14848, 0, 14848, 14848, 0, 0, 0, 68, 133, 0, 0, 142, 0, 2095, 2095, 0, 0, 0, 0, 0, 68, 133, 0, 0,
  /* 2743 */ 3584, 3584, 2095, 47, 0, 0, 0, 0, 0, 0, 2107, 2107, 0, 0, 2151, 0, 0, 2151, 2151, 2151, 0, 14848, 14848, 0,
  /* 2767 */ 0, 14848, 14848, 14848, 14848, 14848, 14848, 14848, 14848, 0, 0, 0, 68, 133, 0, 0, 3584, 3584, 2095, 2095,
  /* 2787 */ 0, 0, 0, 0, 0, 0, 2098, 2098, 0, 0, 2142, 0, 0, 2142, 2142, 2142, 15437, 15437, 15437, 15443, 15437, 15443,
  /* 2809 */ 15443, 15437, 15469, 15469, 15469, 15469, 15469, 0, 0, 0, 68, 133, 0, 0, 3723, 3723, 2095, 2095, 0, 0, 0,
  /* 2830 */ 0, 0, 0, 2099, 2099, 0, 0, 2143, 0, 0, 2143, 2143, 2143, 0, 0, 15872, 0, 0, 0, 0, 0, 0, 5210, 0, 0, 0, 0,
  /* 2857 */ 0, 0, 0, 18432, 64, 0, 0, 0, 0, 0, 0, 0, 284, 190, 0, 0, 284, 132, 132, 132, 132, 0, 0, 16896, 16896, 0, 0,
  /* 2884 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2095, 2200, 2095, 129, 0, 0, 0, 0, 0, 0, 192, 138, 0, 0,
  /* 2912 */ 0, 0, 0, 0, 0, 68, 2693, 0, 0, 68, 68, 68, 68, 68, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210,
  /* 2943 */ 0, 2095, 2160, 2095, 2095, 2095, 91, 91, 91, 17492, 91, 17492, 17492, 91, 17518, 17518, 17518, 17518,
  /* 2961 */ 17518, 0, 0, 0, 68, 133, 135, 135, 0, 0, 0, 0, 135, 16007, 0, 0, 0, 68, 133, 0, 0, 3724, 3724, 2095, 2095,
  /* 2986 */ 0, 0, 0, 0, 0, 0, 2101, 2101, 0, 0, 2145, 0, 0, 2145, 2145, 2145, 0, 5120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3015 */ 0, 0, 0, 5210, 0, 2198, 2095, 2095, 2095, 2095, 3656, 3656, 3656, 0, 3656, 0, 0, 3656, 3656, 3656, 3656,
  /* 3036 */ 3656, 3656, 0, 2095, 2095, 0, 0, 149, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3055 */ 2095, 2095, 2095, 47, 2095, 129, 0, 0, 68, 0, 188, 136, 136, 137, 4801, 0, 0, 0, 3726, 2095, 2095, 0, 0,
  /* 3078 */ 149, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2253, 4839, 149, 2095, 2095, 2095, 2095,
  /* 3096 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2225, 2095, 253, 254, 255, 228, 229, 0, 4839,
  /* 3115 */ 4866, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095, 2265, 2095, 2095, 4866,
  /* 3133 */ 4883, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 68, 133, 133, 0, 0, 2095, 31791, 2095,
  /* 3152 */ 2095, 36399, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 26624, 26624, 0, 0, 0, 0, 0, 0, 26624, 0, 26624, 0,
  /* 3175 */ 274, 274, 4883, 2095, 2095, 2095, 2095, 68, 0, 0, 2095, 68, 286, 287, 68, 68, 3657, 3657, 3657, 0, 3657, 0,
  /* 3197 */ 0, 3657, 3657, 3657, 3657, 3657, 3657, 0, 2095, 2095, 0, 0, 149, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3217 */ 2095, 2095, 2252, 2095, 254, 254, 0, 228, 229, 0, 4839, 4866, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3236 */ 2095, 2095, 2095, 269, 187, 271, 270, 0, 274, 274, 274, 4883, 2095, 2095, 2095, 2095, 68, 0, 0, 2095, 68,
  /* 3257 */ 68, 68, 68, 68, 129, 0, 0, 68, 0, 188, 136, 136, 137, 4801, 0, 0, 0, 3726, 32303, 2095, 2095, 2095, 2095,
  /* 3280 */ 2095, 2209, 2211, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 68, 0, 133, 2095, 68, 68, 68,
  /* 3301 */ 68, 280, 34863, 2095, 0, 0, 149, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0,
  /* 3322 */ 2095, 2095, 2095, 2095, 2095, 2165, 2095, 2165, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 2096, 2096,
  /* 3343 */ 0, 0, 2140, 0, 0, 2140, 2140, 2140, 2095, 2193, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 136,
  /* 3363 */ 137, 0, 2095, 2095, 0, 0, 149, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2251, 2095, 2095, 0, 0, 149,
  /* 3384 */ 2095, 2095, 2095, 2095, 2095, 2095, 2249, 2250, 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3402 */ 2095, 2095, 2095, 0, 0, 0, 11264, 0, 0, 0, 11264, 0, 0, 0, 11264, 11264, 0, 0, 0, 11264, 0, 0, 0, 11264, 0,
  /* 3427 */ 0, 0, 0, 11264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14336, 16384, 17920, 0, 0, 129, 0, 0, 68, 0, 188, 136,
  /* 3454 */ 136, 137, 4801, 0, 0, 0, 3726, 2095, 32815, 2095, 35375, 0, 0, 149, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3474 */ 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2217, 4866, 4883, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3493 */ 2095, 2095, 2095, 68, 133, 133, 282, 274, 274, 4883, 2095, 2095, 2095, 2095, 68, 0, 0, 2095, 68, 68, 68,
  /* 3514 */ 288, 68, 2095, 2095, 2095, 2166, 2095, 2166, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 2097, 2097, 0,
  /* 3536 */ 0, 2141, 0, 0, 2141, 2141, 2141, 2095, 2194, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 136,
  /* 3555 */ 137, 0, 2095, 2095, 0, 0, 149, 2095, 2095, 2095, 2095, 2247, 2095, 2095, 2095, 2095, 2095, 2095, 129, 0, 0,
  /* 3576 */ 224, 68, 0, 226, 0, 228, 229, 129, 0, 0, 0, 0, 0, 136, 136, 137, 4801, 0, 0, 0, 3726, 2095, 2095, 0, 0,
  /* 3601 */ 149, 2095, 2095, 2095, 33478, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2174, 2176, 0, 0, 0, 0,
  /* 3621 */ 0, 19456, 19456, 19456, 0, 19456, 0, 19456, 19456, 19456, 19456, 19456, 19456, 19456, 0, 0, 0, 0, 19456, 0,
  /* 3641 */ 0, 0, 0, 19456, 0, 19456, 19456, 19456, 19456, 25600, 0, 0, 68, 133, 0, 0, 0, 0, 0, 0, 0, 0, 7168, 8704,
  /* 3665 */ 10240, 12800, 14336, 16384, 17920, 21504, 22528, 23552, 27648, 41984, 5210, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0,
  /* 3686 */ 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2095, 2163, 2095, 0, 0, 20992, 24576, 149, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3712 */ 0, 0, 0, 5210, 5210, 0, 0, 0, 0, 0, 254, 254, 0, 228, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3737 */ 2095, 2095, 2095, 68, 133, 133, 0, 232, 149, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3756 */ 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 254, 254, 0, 228, 256, 0, 232, 0, 2095, 2095, 2095, 2095, 2095,
  /* 3779 */ 2095, 2095, 2095, 2095, 2095, 2095, 2227, 2095, 2095, 2095, 2230, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3584,
  /* 3802 */ 0, 3726, 2095, 2095, 0, 0, 149, 2095, 2095, 2245, 2095, 2095, 2248, 2095, 2095, 2095, 2095, 2095, 47, 2095,
  /* 3822 */ 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 2106, 2106, 0, 0, 2150, 0, 0, 2150, 2150, 2150, 129, 0, 0, 0, 0,
  /* 3847 */ 0, 0, 0, 0, 0, 3584, 3723, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 280, 133, 281,
  /* 3869 */ 0, 129, 0, 0, 186, 0, 189, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 37423, 26112,
  /* 3893 */ 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 0, 0, 0, 3072, 133, 0,
  /* 3911 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 0, 0, 68, 0, 190, 0, 0, 0, 0, 0, 0, 0,
  /* 3944 */ 0, 0, 0, 8271, 8271, 0, 8271, 8271, 0, 0, 0, 0, 26624, 0, 0, 0, 0, 26624, 26624, 0, 0, 0, 26624, 26624, 0,
  /* 3969 */ 0, 0, 8271, 0, 8271, 8271, 0, 8271, 8271, 8271, 8271, 8271, 0, 0, 0, 68, 133, 0, 0, 0, 0, 0, 0, 13824, 0,
  /* 3994 */ 0, 0, 0, 0, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 0, 6656, 78, 78, 6656, 78, 78, 6656, 6656, 6656, 2160, 2095,
  /* 4019 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 2103, 2103, 0, 0, 2147, 0, 0, 2147,
  /* 4042 */ 2147, 2147, 0, 130, 0, 68, 133, 0, 0, 0, 0, 2095, 2095, 0, 0, 0, 0, 0, 0, 2104, 2104, 0, 0, 2148, 0, 0,
  /* 4068 */ 2148, 2148, 2148, 2267, 2095, 2095, 2095, 2095, 2095, 129, 0, 0, 224, 68, 0, 226, 0, 228, 0, 0, 2324, 2095,
  /* 4090 */ 2095, 2095, 2095, 2095, 37935, 2095, 2095, 2095, 0, 0, 0, 0, 230, 0, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4116 */ 0, 0, 0, 5210, 0, 0, 5210, 5210, 5210, 0, 149, 2281, 2095, 2095, 2095, 2095, 2095, 2095, 2288, 2095, 2095,
  /* 4137 */ 2095, 2095, 2095, 2095, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 273, 2293, 2095, 2095, 2095,
  /* 4163 */ 2095, 2095, 2095, 2095, 2218, 2095, 2095, 2095, 2095, 0, 252, 252, 254, 254, 0, 228, 0, 0, 0, 0, 2095,
  /* 4184 */ 2095, 2095, 2309, 2310, 2095, 2095, 2095, 0, 2095, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 0, 2095, 2095,
  /* 4204 */ 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9296, 9296, 0, 9296, 9296, 0, 0, 0, 2140, 2140, 2140, 0,
  /* 4232 */ 2140, 0, 0, 2140, 2140, 2140, 2140, 2140, 2140, 0, 2095, 2095, 0, 0, 149, 2095, 2244, 2095, 2095, 2095,
  /* 4252 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 187, 187, 270, 270, 0, 274, 129, 0, 0, 68, 0, 133, 0, 0, 0, 0, 0,
  /* 4276 */ 0, 0, 3726, 2095, 2095, 0, 0, 149, 2243, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 47,
  /* 4296 */ 2095, 2095, 0, 0, 0, 0, 149, 2095, 2095, 2095, 2095, 2285, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4316 */ 2095, 2095, 187, 187, 270, 270, 0, 0, 2097, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 10752, 0, 0, 0,
  /* 4344 */ 0, 0, 0, 0, 0, 0, 0, 0, 10752, 0, 0, 10752, 10752, 0, 0, 10752, 0, 0, 10752, 10752, 10752, 2141, 2141,
  /* 4367 */ 2141, 0, 2152, 0, 0, 2154, 2141, 2141, 2141, 2154, 2154, 0, 2095, 2095, 2095, 2095, 2095, 2095, 174, 2095,
  /* 4387 */ 2095, 2095, 2095, 2095, 2095, 2229, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2175, 2095, 0, 0,
  /* 4406 */ 0, 0, 0, 20627, 0, 0, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 0, 43520, 0, 0, 43520, 0, 0, 43520, 43520, 43520, 2095,
  /* 4432 */ 2294, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 252, 252, 2095, 2314, 2095,
  /* 4450 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 187, 187, 270, 270, 0, 0, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4476 */ 0, 149, 0, 0, 2098, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11857, 11857, 0, 11857, 11857, 0, 0, 0,
  /* 4504 */ 2142, 2142, 2142, 0, 2153, 0, 0, 2153, 2142, 2142, 2142, 2153, 2153, 0, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4524 */ 2095, 2095, 2095, 2261, 2095, 2095, 2095, 2095, 2095, 2095, 129, 0, 0, 223, 68, 188, 225, 0, 228, 229,
  /* 4544 */ 2099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17492, 17492, 91, 17492, 17492, 91, 91, 91, 2143, 2143,
  /* 4570 */ 2143, 0, 2143, 0, 0, 2155, 2143, 2143, 2143, 2155, 2155, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4590 */ 2172, 2095, 2095, 0, 0, 0, 0, 0, 20053, 0, 20053, 20053, 0, 20053, 20053, 20053, 20053, 20053, 0, 0, 0, 68,
  /* 4612 */ 133, 136, 137, 3657, 3657, 2095, 2095, 136, 137, 0, 0, 0, 68, 133, 136, 137, 3657, 3657, 2191, 2193, 136,
  /* 4633 */ 137, 0, 0, 0, 68, 133, 136, 137, 3657, 3657, 2192, 2194, 136, 137, 0, 0, 0, 132, 134, 0, 0, 0, 0, 0, 0, 0,
  /* 4659 */ 0, 0, 0, 0, 19456, 0, 0, 0, 0, 0, 0, 2095, 2162, 2095, 2095, 2095, 2095, 2095, 2171, 2095, 2173, 2095, 0,
  /* 4682 */ 0, 0, 0, 0, 0, 2105, 2105, 0, 0, 2149, 0, 0, 2149, 2149, 2149, 2095, 2095, 2095, 2206, 2095, 2208, 2095,
  /* 4704 */ 2095, 2213, 2095, 2095, 0, 0, 0, 2216, 2095, 2095, 2095, 2095, 2095, 2210, 2095, 2095, 2095, 2095, 2095, 0,
  /* 4724 */ 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 38447, 2095, 2095, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4749 */ 0, 0, 0, 0, 0, 0, 15872, 0, 232, 149, 2095, 2095, 2095, 2284, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4770 */ 2095, 2095, 28719, 2095, 2095, 31279, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 40448,
  /* 4787 */ 252, 252, 2095, 2095, 2095, 40495, 2095, 2095, 2095, 2095, 2095, 2095, 187, 187, 270, 270, 0, 0, 131, 68,
  /* 4807 */ 133, 0, 0, 0, 0, 2095, 2095, 0, 0, 0, 0, 0, 0, 2122, 2122, 0, 0, 2144, 0, 0, 2144, 2144, 2144, 2100, 0, 0,
  /* 4833 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20053, 20053, 0, 20053, 20053, 0, 0, 0, 2144, 2144, 2144, 0, 2144,
  /* 4859 */ 0, 0, 2144, 2144, 2144, 2144, 2144, 2144, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2217, 2095,
  /* 4878 */ 187, 187, 270, 270, 0, 0, 70, 0, 0, 0, 0, 68, 0, 0, 0, 68, 68, 68, 68, 68, 2095, 35887, 2095, 2095, 2095,
  /* 4903 */ 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 68, 0, 0, 2095, 285, 68, 68, 68, 68,
  /* 4925 */ 2095, 2220, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 251,
  /* 4943 */ 252, 129, 0, 0, 68, 0, 133, 0, 0, 0, 0, 0, 3584, 0, 3726, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4966 */ 2224, 2225, 2095, 2095, 2095, 2095, 2095, 2095, 129, 0, 0, 0, 0, 0, 0, 227, 0, 0, 2095, 2095, 2095, 2095,
  /* 4988 */ 2257, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2218, 2101, 0, 0, 0,
  /* 5009 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22102, 22102, 0, 22102, 22102, 0, 0, 0, 2145, 2145, 2145, 0, 2145, 0,
  /* 5035 */ 0, 2145, 2145, 2145, 2145, 2145, 2145, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2212, 2095, 2214, 2095,
  /* 5054 */ 0, 0, 0, 2095, 2095, 2095, 2095, 68, 0, 0, 2095, 68, 68, 68, 68, 68, 2095, 2095, 2095, 2095, 2095, 29231,
  /* 5076 */ 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16896, 2102, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5105 */ 0, 0, 0, 0, 0, 0, 0, 23127, 23127, 0, 23127, 23127, 0, 0, 0, 2146, 2146, 2146, 0, 2146, 0, 0, 2146, 2146,
  /* 5129 */ 2146, 2146, 2146, 2146, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2223, 2095, 2095, 2095, 2095, 2095,
  /* 5147 */ 2095, 2095, 2095, 2095, 2095, 2226, 2095, 2095, 2095, 2095, 2095, 129, 0, 185, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5170 */ 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2312, 2095, 2095, 2095, 2255, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5189 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 252, 252, 2095, 2095, 2095, 2095, 2095, 2295, 2095, 2095,
  /* 5207 */ 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 11857, 0, 11857, 11857, 0, 11857, 11857, 11857, 11857, 11857, 0, 0,
  /* 5227 */ 0, 68, 133, 0, 0, 0, 0, 2167, 2095, 0, 0, 0, 0, 0, 4096, 0, 0, 2095, 2307, 2095, 2095, 2095, 2095, 2095,
  /* 5251 */ 2095, 129, 0, 0, 224, 68, 0, 226, 0, 228, 0, 2103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25153,
  /* 5279 */ 25153, 0, 25153, 25153, 0, 0, 0, 2147, 2147, 2147, 0, 2147, 0, 0, 2147, 2147, 2147, 2147, 2147, 2147, 0,
  /* 5300 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2228, 2095, 2095, 0, 0, 0, 0, 0, 0, 69, 69, 0, 0, 69, 0, 0, 69,
  /* 5324 */ 69, 69, 2095, 2095, 2163, 2095, 2168, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 2123, 2123, 0,
  /* 5346 */ 0, 2146, 0, 0, 2146, 2146, 2146, 2202, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2215, 0, 0, 0,
  /* 5367 */ 2095, 2095, 2095, 2095, 68, 133, 0, 2095, 68, 68, 68, 68, 68, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3725,
  /* 5392 */ 3584, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2260, 2095, 2095, 2095, 2263, 2095, 2095, 2095, 2095,
  /* 5410 */ 47, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 149, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5430 */ 2287, 2095, 2095, 2095, 2095, 2095, 2292, 2095, 2095, 2095, 2095, 2095, 2217, 129, 0, 222, 0, 0, 0, 0, 0,
  /* 5451 */ 0, 0, 3140, 133, 0, 0, 3140, 3072, 3072, 3072, 3072, 2095, 2203, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5471 */ 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 30255, 68, 133, 0, 2095, 68, 68, 68, 68, 68, 2095, 2204, 2095, 2095,
  /* 5493 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 36911, 2095, 68, 0, 0, 29743, 68, 68, 68,
  /* 5514 */ 68, 68, 2219, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5532 */ 2095, 2266, 129, 0, 0, 68, 0, 133, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2308, 2095, 2095, 2311, 2095, 2095,
  /* 5556 */ 2161, 47, 2095, 2167, 2095, 2095, 2170, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 62, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5581 */ 0, 0, 5210, 0, 2095, 2095, 2095, 2095, 2191, 2095, 2095, 2205, 2095, 2095, 2095, 2095, 2199, 30767, 2199,
  /* 5600 */ 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2217, 0, 0, 0, 0, 256, 0, 232, 0,
  /* 5622 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2200, 0, 0, 0, 2095, 2095, 2095, 2095, 2095,
  /* 5641 */ 2095, 2269, 2095, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5665 */ 2095, 2095, 2095, 0, 0, 0, 0, 0, 149, 2095, 2095, 2283, 2095, 2095, 2286, 2095, 2095, 2095, 2095, 2095,
  /* 5685 */ 2291, 2095, 2095, 2095, 2095, 2095, 2095, 2296, 2095, 2095, 2297, 2095, 2095, 2095, 0, 0, 0, 16896, 0,
  /* 5704 */ 16896, 16896, 0, 0, 0, 16896, 0, 16896, 0, 0, 0, 68, 133, 0, 0, 3725, 3725, 2095, 2095, 0, 0, 0, 0, 0, 0,
  /* 5729 */ 3656, 3656, 0, 0, 3656, 0, 0, 3656, 3656, 3656, 2095, 2095, 2095, 2221, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5749 */ 2095, 2095, 2095, 2095, 2095, 2095, 47, 0, 0, 0, 2104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27224,
  /* 5776 */ 27224, 0, 27224, 27224, 0, 0, 0, 2148, 2148, 2148, 0, 2148, 0, 0, 2148, 2148, 2148, 2148, 2148, 2148, 0,
  /* 5797 */ 2095, 2159, 2254, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5815 */ 2264, 2095, 2095, 2095, 2313, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 70,
  /* 5836 */ 13388, 13394, 13394, 13388, 13394, 13394, 13388, 13388, 13388, 2105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5859 */ 0, 0, 28207, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2149, 2149, 2149, 0, 2149, 0, 0, 2149, 2149, 2149,
  /* 5879 */ 2149, 2149, 2149, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2316, 2095, 2095, 47, 0, 0, 0, 0, 0, 0, 70, 257,
  /* 5901 */ 0, 0, 0, 0, 0, 0, 0, 0, 64, 64, 0, 18496, 64, 0, 0, 0, 2095, 2095, 2217, 2095, 2095, 2095, 2095, 2095,
  /* 5925 */ 2095, 2095, 2095, 2095, 2228, 2095, 2095, 2095, 2298, 2095, 0, 0, 0, 129, 184, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5949 */ 0, 0, 0, 2095, 2095, 0, 0, 2095, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2256, 2095, 2256, 2259, 2095,
  /* 5970 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 187, 187, 270, 270, 272, 274, 2106, 0, 0, 0, 0, 0, 0,
  /* 5992 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 41561, 41561, 0, 41561, 41561, 0, 0, 0, 2150, 2150, 2150, 0, 2150, 0, 0, 2150,
  /* 6017 */ 2150, 2150, 2150, 2150, 2150, 0, 2095, 2095, 2095, 2095, 2095, 2164, 2095, 2095, 2095, 2095, 2095, 0, 0, 0,
  /* 6037 */ 0, 0, 0, 3657, 3657, 0, 0, 3657, 0, 0, 3657, 3657, 3657, 2095, 2095, 2095, 2218, 2095, 2258, 2095, 2095,
  /* 6058 */ 2095, 2095, 2262, 2095, 2095, 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 6076 */ 2095, 2095, 2095, 2095, 2218, 47, 2095, 2095, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3726, 2095, 2095, 0,
  /* 6101 */ 149, 2095, 2282, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2290, 38959, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 6119 */ 129, 28672, 0, 224, 68, 0, 226, 0, 228, 0, 2095, 2268, 2095, 2095, 2095, 2095, 129, 0, 0, 0, 0, 0, 0, 227,
  /* 6143 */ 0, 0, 192, 0, 0, 0, 0, 68, 0, 0, 0, 68, 68, 68, 68, 68, 0, 149, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 6168 */ 2095, 2289, 2095, 2095, 2095, 2095, 2095, 2095, 129, 0, 0, 224, 68, 188, 226, 0, 228, 229, 2095, 2095,
  /* 6188 */ 2095, 2095, 2315, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 71, 15437, 15443, 15443, 15437, 15443,
  /* 6208 */ 15443, 15437, 15437, 15437, 2107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 2095, 2095, 2325, 2095,
  /* 6232 */ 2095, 2095, 2095, 2095, 2095, 2095, 280, 133, 281, 0, 2151, 2151, 2151, 0, 2151, 0, 0, 2151, 2151, 2151,
  /* 6252 */ 2151, 2151, 2151, 0, 2095, 2095, 2095, 2095, 2095, 2169, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0,
  /* 6273 */ 24212, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 68, 68, 0, 0, 68, 0, 0, 68, 68, 68, 2095, 2095, 2095, 2095, 2207,
  /* 6298 */ 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2326, 2095, 2095, 2095, 2095,
  /* 6317 */ 68, 133, 133, 0, 2095, 2095, 39471, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 129, 0, 0,
  /* 6340 */ 0, 0, 2560, 0, 2560, 0, 0, 2095, 2095, 2164, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0,
  /* 6363 */ 22102, 0, 22102, 22102, 0, 22102, 22102, 22102, 22102, 22102, 0, 0, 0, 2095, 33839, 2095, 2095, 68, 0, 0,
  /* 6383 */ 2095, 68, 68, 68, 68, 68, 129, 0, 0, 187, 0, 191, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 34351, 2095,
  /* 6408 */ 2095, 2095, 2095, 2327, 2095, 0, 0, 0, 0, 194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2095,
  /* 6434 */ 2095, 2095, 2095, 39983, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 6451 */ 2095, 136, 137, 0, 2095, 2095, 0, 0, 40960, 40960, 0, 0, 40960, 40960, 0, 0, 40960, 0, 0, 40960, 40960,
  /* 6472 */ 40960, 40960, 40960, 40960, 40960, 40960, 40960, 40960, 40960, 40960, 40960, 0, 0, 0, 23127, 0, 23127,
  /* 6489 */ 23127, 0, 23127, 23127, 23127, 23127, 23127, 0, 0, 0, 2331, 2095, 2095, 2095, 68, 0, 0, 2095, 285, 68, 68,
  /* 6510 */ 68, 68, 0, 43008, 0, 0, 0, 0, 0, 0, 0, 43008, 0, 43008, 0, 0, 0, 43008, 0, 43008, 43008, 0, 43008, 43008,
  /* 6534 */ 43008, 43008, 43008, 43008, 0, 0, 0, 27224, 0, 27224, 27224, 0, 27224, 27224, 27224, 27224, 27224, 0, 0, 0,
  /* 6554 */ 9296, 0, 9296, 9296, 0, 9296, 9296, 9296, 9296, 9296, 0, 0, 0, 68, 133, 0, 0, 0, 0, 2095, 2095, 0, 0, 0, 0,
  /* 6579 */ 0, 0, 183, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43520, 43520, 43520, 0, 43520, 0, 0, 43520, 43520,
  /* 6606 */ 43520, 43520, 43520, 43520, 0, 0, 0, 41561, 0, 41561, 41561, 0, 41561, 41561, 41561, 41561, 41561, 0, 0, 0,
  /* 6626 */ 25153, 0, 25153, 25153, 0, 25153, 25153, 25153, 25153, 25153, 0, 0, 0, 2560, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 6650 */ 0, 0, 135, 16007, 0, 0, 0, 1536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42496, 5210, 0, 0, 0, 0, 0,
  /* 6680 */ 0
];

MaiaScript.EXPECTED =
[
  /*   0 */ 216, 220, 223, 224, 228, 232, 236, 239, 246, 242, 250, 253, 284, 284, 294, 501, 257, 261, 264, 268, 272,
  /*  21 */ 367, 474, 284, 284, 284, 301, 282, 284, 284, 284, 284, 448, 333, 290, 292, 255, 283, 284, 284, 284, 284,
  /*  42 */ 284, 284, 284, 295, 478, 332, 299, 284, 284, 284, 284, 284, 284, 477, 331, 305, 284, 284, 284, 284, 286,
  /*  63 */ 332, 307, 284, 284, 330, 311, 285, 320, 327, 367, 278, 337, 341, 323, 345, 349, 353, 354, 358, 362, 366,
  /*  84 */ 367, 367, 367, 440, 340, 367, 504, 367, 435, 372, 506, 376, 367, 410, 380, 455, 367, 367, 367, 367, 459,
  /* 105 */ 367, 367, 404, 515, 508, 367, 367, 457, 387, 367, 367, 367, 457, 367, 367, 507, 393, 367, 457, 398, 367,
  /* 126 */ 367, 367, 367, 367, 509, 367, 367, 408, 367, 367, 390, 367, 401, 367, 461, 401, 462, 367, 367, 367, 367,
  /* 147 */ 490, 414, 383, 418, 422, 423, 427, 431, 434, 367, 367, 367, 367, 275, 367, 316, 367, 367, 367, 439, 394,
  /* 168 */ 444, 452, 367, 367, 367, 367, 367, 367, 275, 367, 367, 367, 314, 367, 466, 483, 471, 367, 367, 367, 367,
  /* 189 */ 367, 277, 367, 367, 493, 482, 487, 367, 367, 367, 276, 367, 367, 368, 467, 498, 367, 367, 367, 367, 494,
  /* 210 */ 447, 367, 367, 513, 367, 367, 2056, 3072, 18432, 1050624, 2099200, 67110912, 1073743872, 2048, 2048, 2048,
  /* 226 */ 2048, 1050624, 2099200, 268437504, 2048, 1050624, 270534656, 268437504, 1051128, 1712331256, -269506560,
  /* 237 */ -3168256, 1712331768, -3168256, 1714428920, 1712331768, 1712331768, -2119680, -2119680, 1982864376,
  /* 246 */ 1712331772, 1980767224, 1980767224, -268457984, -2114568, -2114568, -2114568, -17416, 2048, 8, 8, 0, 0, 0,
  /* 260 */ 32, 16, 128, 384, 448, 8, 8, 67108992, 1073742208, 8192, 65536, 786432, 25165824, 201326592, -1073741824, 0,
  /* 276 */ 0, 16384, 0, 0, 0, 8, -1073741440, 512, 8, 8, 8, 8, 32, 32, 384, 384, 64, 64, 8, 8, 8, 1024, 0, 384, 512, 8,
  /* 302 */ 8, 8, 201326720, 128, 128, 384, 384, 8, 8, 128, 128, 384, 8, 16, 0, 0, 24, 0, 16, 16, 8, 32, 0, 1, 1, 32,
  /* 328 */ 32, 32, 32, 16, 16, 16, 16, 128, 128, 16, 32, 1024, 131072, 8388608, 0, 0, 1, 524288, 524320, -1073479680,
  /* 348 */ -1073479680, 3407830, 3407830, -364642272, 3407838, 3932150, -364642272, -364117984, -364642272, 3669975,
  /* 358 */ -289144800, 3669983, 4194295, -3407832, -361234442, -361234434, -361234433, -2, -1, 0, 0, 0, 0, 2, 896,
  /* 373 */ 2048, 57344, 2097152, 33554432, 134217728, 536870912, -1073741824, 201326592, 58720256, 805306368, 0, 0,
  /* 385 */ 32792, 1081368, 67108864, 25165824, 268435456, 0, 0, 33554432, 536870912, 0, 0, 0, 3, 67108864, 16777216,
  /* 400 */ 268435456, 0, 0, 67108864, 0, 0, 1073741824, 0x80000000, 67108864, 16777216, 0, 0, 0, 41943040, 0, 524288,
  /* 416 */ 32768, 32768, 458752, 983040, 1114111, 983040, 458752, 1114111, 1114111, 1638399, 491520, 1638399, 1015808,
  /* 429 */ 491520, 1638399, 2097151, 2097151, 2097151, 2097151, 0, 0, 0, 4, 393216, 0, 0, 0, 16, 4, 248, 256, 512,
  /* 448 */ 1024, 0, 0, 32, 1024, 14336, 16384, 0, 4, 0, 0, 0, 8388608, 0, 0, 0, 33554432, 0, 3, 4, 64, 128, 256, 4096,
  /* 472 */ 8192, 16384, 0, 512, 512, 8, 0, 32, 32, 16, 128, 256, 512, 1024, 2048, 2048, 4096, 16384, 0, 16384, 32768,
  /* 493 */ 0, 2, 4, 64, 128, 512, 1024, 4096, 16384, 67108864, 1073741824, 0, -1073741824, 0, 0, 0, 4194304, 33554432,
  /* 511 */ 536870912, 0, 2, 128, 0, 0, 256, 32768
];

MaiaScript.TOKEN =
[
  "(0)",
  "END",
  "EOF",
  "Identifier",
  "Character",
  "String",
  "Integer",
  "Complex",
  "Real",
  "Comment",
  "Script",
  "WhiteSpace",
  "'!'",
  "'!='",
  "'#='",
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
  "'^'",
  "'^='",
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
    log("Usage: " + command + " MaiaScript.js [-i] INPUT...\n");
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
      var s = new MaiaScript.XmlSerializer(log, indent);
      var parser = new MaiaScript(input, s);
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
