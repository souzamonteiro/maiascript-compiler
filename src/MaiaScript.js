// This file was generated on Wed Nov 23, 2022 12:58 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
// REx command line: MaiaScript.ebnf -backtrack -javascript -tree

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
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(27);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9987:                    // Identifier '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 78:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 462:                     // '{' Identifier
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 718:                     // '{' String
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' |
                                    // '|=' | '||' | '}' | '~'
        break;
      case 6478:                    // '{' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10574:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 590:                     // '{' Character
      case 846:                     // '{' Integer
      case 974:                     // '{' Complex
      case 1102:                    // '{' Real
        lookahead3W(41);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 7886:                    // '{' 'f32'
      case 8014:                    // '{' 'f64'
      case 8526:                    // '{' 'i32'
      case 8654:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1230:                    // '{' Comment
      case 4814:                    // '{' ';'
      case 6990:                    // '{' 'break'
      case 7374:                    // '{' 'continue'
      case 10062:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1614:                    // '{' '!'
      case 3278:                    // '{' '+'
      case 3406:                    // '{' '++'
      case 3790:                    // '{' '-'
      case 3918:                    // '{' '--'
      case 10702:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8142:                    // '{' 'for'
      case 8270:                    // '{' 'foreach'
      case 8782:                    // '{' 'if'
      case 9422:                    // '{' 'switch'
      case 9550:                    // '{' 'test'
      case 9934:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2638:                    // '{' '('
      case 7630:                    // '{' 'do'
      case 8398:                    // '{' 'global'
      case 8910:                    // '{' 'import'
      case 9038:                    // '{' 'include'
      case 9166:                    // '{' 'local'
      case 9294:                    // '{' 'return'
      case 9678:                    // '{' 'throw'
      case 9806:                    // '{' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 450:                     // 'i32' Identifier
      case 451:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'global'
     && lk != 68                    // 'if'
     && lk != 69                    // 'import'
     && lk != 70                    // 'include'
     && lk != 71                    // 'local'
     && lk != 72                    // 'return'
     && lk != 73                    // 'switch'
     && lk != 74                    // 'test'
     && lk != 75                    // 'throw'
     && lk != 76                    // 'try'
     && lk != 77                    // 'while'
     && lk != 83                    // '~'
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
     && lk != 3662                  // '{' ','
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
     && lk != 7811                  // Identifier 'f32'
     && lk != 7939                  // Identifier 'f64'
     && lk != 8067                  // Identifier 'for'
     && lk != 8195                  // Identifier 'foreach'
     && lk != 8323                  // Identifier 'global'
     && lk != 8451                  // Identifier 'i32'
     && lk != 8579                  // Identifier 'i64'
     && lk != 8707                  // Identifier 'if'
     && lk != 8835                  // Identifier 'import'
     && lk != 8963                  // Identifier 'include'
     && lk != 9091                  // Identifier 'local'
     && lk != 9219                  // Identifier 'return'
     && lk != 9347                  // Identifier 'switch'
     && lk != 9475                  // Identifier 'test'
     && lk != 9603                  // Identifier 'throw'
     && lk != 9731                  // Identifier 'try'
     && lk != 9859                  // Identifier 'while'
     && lk != 10115                 // Identifier '|'
     && lk != 10243                 // Identifier '|='
     && lk != 10371                 // Identifier '||'
     && lk != 10499                 // Identifier '}'
     && lk != 10627                 // Identifier '~'
     && lk != 16829                 // 'f32' Identifier END
     && lk != 16830                 // 'f64' Identifier END
     && lk != 16834                 // 'i32' Identifier END
     && lk != 16835                 // 'i64' Identifier END
     && lk != 49597                 // 'f32' Identifier Identifier
     && lk != 49598                 // 'f64' Identifier Identifier
     && lk != 49602                 // 'i32' Identifier Identifier
     && lk != 49603                 // 'i64' Identifier Identifier
     && lk != 49614                 // '{' Identifier Identifier
     && lk != 49742                 // '{' Character Identifier
     && lk != 49870                 // '{' String Identifier
     && lk != 49998                 // '{' Integer Identifier
     && lk != 50126                 // '{' Complex Identifier
     && lk != 50254                 // '{' Real Identifier
     && lk != 50382                 // '{' Comment Identifier
     && lk != 53966                 // '{' ';' Identifier
     && lk != 56142                 // '{' 'break' Identifier
     && lk != 56526                 // '{' 'continue' Identifier
     && lk != 65981                 // 'f32' Identifier Character
     && lk != 65982                 // 'f64' Identifier Character
     && lk != 65986                 // 'i32' Identifier Character
     && lk != 65987                 // 'i64' Identifier Character
     && lk != 65998                 // '{' Identifier Character
     && lk != 66126                 // '{' Character Character
     && lk != 66254                 // '{' String Character
     && lk != 66382                 // '{' Integer Character
     && lk != 66510                 // '{' Complex Character
     && lk != 66638                 // '{' Real Character
     && lk != 66766                 // '{' Comment Character
     && lk != 70350                 // '{' ';' Character
     && lk != 72526                 // '{' 'break' Character
     && lk != 72910                 // '{' 'continue' Character
     && lk != 82365                 // 'f32' Identifier String
     && lk != 82366                 // 'f64' Identifier String
     && lk != 82370                 // 'i32' Identifier String
     && lk != 82371                 // 'i64' Identifier String
     && lk != 82382                 // '{' Identifier String
     && lk != 82510                 // '{' Character String
     && lk != 82638                 // '{' String String
     && lk != 82766                 // '{' Integer String
     && lk != 82894                 // '{' Complex String
     && lk != 83022                 // '{' Real String
     && lk != 83150                 // '{' Comment String
     && lk != 86734                 // '{' ';' String
     && lk != 88910                 // '{' 'break' String
     && lk != 89294                 // '{' 'continue' String
     && lk != 98749                 // 'f32' Identifier Integer
     && lk != 98750                 // 'f64' Identifier Integer
     && lk != 98754                 // 'i32' Identifier Integer
     && lk != 98755                 // 'i64' Identifier Integer
     && lk != 98766                 // '{' Identifier Integer
     && lk != 98894                 // '{' Character Integer
     && lk != 99022                 // '{' String Integer
     && lk != 99150                 // '{' Integer Integer
     && lk != 99278                 // '{' Complex Integer
     && lk != 99406                 // '{' Real Integer
     && lk != 99534                 // '{' Comment Integer
     && lk != 103118                // '{' ';' Integer
     && lk != 105294                // '{' 'break' Integer
     && lk != 105678                // '{' 'continue' Integer
     && lk != 115133                // 'f32' Identifier Complex
     && lk != 115134                // 'f64' Identifier Complex
     && lk != 115138                // 'i32' Identifier Complex
     && lk != 115139                // 'i64' Identifier Complex
     && lk != 115150                // '{' Identifier Complex
     && lk != 115278                // '{' Character Complex
     && lk != 115406                // '{' String Complex
     && lk != 115534                // '{' Integer Complex
     && lk != 115662                // '{' Complex Complex
     && lk != 115790                // '{' Real Complex
     && lk != 115918                // '{' Comment Complex
     && lk != 119502                // '{' ';' Complex
     && lk != 121678                // '{' 'break' Complex
     && lk != 122062                // '{' 'continue' Complex
     && lk != 131517                // 'f32' Identifier Real
     && lk != 131518                // 'f64' Identifier Real
     && lk != 131522                // 'i32' Identifier Real
     && lk != 131523                // 'i64' Identifier Real
     && lk != 131534                // '{' Identifier Real
     && lk != 131662                // '{' Character Real
     && lk != 131790                // '{' String Real
     && lk != 131918                // '{' Integer Real
     && lk != 132046                // '{' Complex Real
     && lk != 132174                // '{' Real Real
     && lk != 132302                // '{' Comment Real
     && lk != 135886                // '{' ';' Real
     && lk != 138062                // '{' 'break' Real
     && lk != 138446                // '{' 'continue' Real
     && lk != 147901                // 'f32' Identifier Comment
     && lk != 147902                // 'f64' Identifier Comment
     && lk != 147906                // 'i32' Identifier Comment
     && lk != 147907                // 'i64' Identifier Comment
     && lk != 147918                // '{' Identifier Comment
     && lk != 148046                // '{' Character Comment
     && lk != 148174                // '{' String Comment
     && lk != 148302                // '{' Integer Comment
     && lk != 148430                // '{' Complex Comment
     && lk != 148558                // '{' Real Comment
     && lk != 148686                // '{' Comment Comment
     && lk != 152270                // '{' ';' Comment
     && lk != 154446                // '{' 'break' Comment
     && lk != 154830                // '{' 'continue' Comment
     && lk != 197053                // 'f32' Identifier '!'
     && lk != 197054                // 'f64' Identifier '!'
     && lk != 197058                // 'i32' Identifier '!'
     && lk != 197059                // 'i64' Identifier '!'
     && lk != 197070                // '{' Identifier '!'
     && lk != 197198                // '{' Character '!'
     && lk != 197326                // '{' String '!'
     && lk != 197454                // '{' Integer '!'
     && lk != 197582                // '{' Complex '!'
     && lk != 197710                // '{' Real '!'
     && lk != 197838                // '{' Comment '!'
     && lk != 201422                // '{' ';' '!'
     && lk != 203598                // '{' 'break' '!'
     && lk != 203982                // '{' 'continue' '!'
     && lk != 213437                // 'f32' Identifier '!='
     && lk != 213438                // 'f64' Identifier '!='
     && lk != 213442                // 'i32' Identifier '!='
     && lk != 213443                // 'i64' Identifier '!='
     && lk != 223566                // '{' '}' '!='
     && lk != 246205                // 'f32' Identifier '%'
     && lk != 246206                // 'f64' Identifier '%'
     && lk != 246210                // 'i32' Identifier '%'
     && lk != 246211                // 'i64' Identifier '%'
     && lk != 256334                // '{' '}' '%'
     && lk != 262589                // 'f32' Identifier '%='
     && lk != 262590                // 'f64' Identifier '%='
     && lk != 262594                // 'i32' Identifier '%='
     && lk != 262595                // 'i64' Identifier '%='
     && lk != 272718                // '{' '}' '%='
     && lk != 278973                // 'f32' Identifier '&'
     && lk != 278974                // 'f64' Identifier '&'
     && lk != 278978                // 'i32' Identifier '&'
     && lk != 278979                // 'i64' Identifier '&'
     && lk != 289102                // '{' '}' '&'
     && lk != 295357                // 'f32' Identifier '&&'
     && lk != 295358                // 'f64' Identifier '&&'
     && lk != 295362                // 'i32' Identifier '&&'
     && lk != 295363                // 'i64' Identifier '&&'
     && lk != 305486                // '{' '}' '&&'
     && lk != 311741                // 'f32' Identifier '&='
     && lk != 311742                // 'f64' Identifier '&='
     && lk != 311746                // 'i32' Identifier '&='
     && lk != 311747                // 'i64' Identifier '&='
     && lk != 321870                // '{' '}' '&='
     && lk != 328270                // '{' Character '('
     && lk != 328398                // '{' String '('
     && lk != 328526                // '{' Integer '('
     && lk != 328654                // '{' Complex '('
     && lk != 328782                // '{' Real '('
     && lk != 328910                // '{' Comment '('
     && lk != 332494                // '{' ';' '('
     && lk != 334670                // '{' 'break' '('
     && lk != 335054                // '{' 'continue' '('
     && lk != 344509                // 'f32' Identifier ')'
     && lk != 344510                // 'f64' Identifier ')'
     && lk != 344514                // 'i32' Identifier ')'
     && lk != 344515                // 'i64' Identifier ')'
     && lk != 360893                // 'f32' Identifier '*'
     && lk != 360894                // 'f64' Identifier '*'
     && lk != 360898                // 'i32' Identifier '*'
     && lk != 360899                // 'i64' Identifier '*'
     && lk != 371022                // '{' '}' '*'
     && lk != 377277                // 'f32' Identifier '**'
     && lk != 377278                // 'f64' Identifier '**'
     && lk != 377282                // 'i32' Identifier '**'
     && lk != 377283                // 'i64' Identifier '**'
     && lk != 387406                // '{' '}' '**'
     && lk != 393661                // 'f32' Identifier '*='
     && lk != 393662                // 'f64' Identifier '*='
     && lk != 393666                // 'i32' Identifier '*='
     && lk != 393667                // 'i64' Identifier '*='
     && lk != 403790                // '{' '}' '*='
     && lk != 410045                // 'f32' Identifier '+'
     && lk != 410046                // 'f64' Identifier '+'
     && lk != 410050                // 'i32' Identifier '+'
     && lk != 410051                // 'i64' Identifier '+'
     && lk != 410830                // '{' Comment '+'
     && lk != 414414                // '{' ';' '+'
     && lk != 416590                // '{' 'break' '+'
     && lk != 416974                // '{' 'continue' '+'
     && lk != 426429                // 'f32' Identifier '++'
     && lk != 426430                // 'f64' Identifier '++'
     && lk != 426434                // 'i32' Identifier '++'
     && lk != 426435                // 'i64' Identifier '++'
     && lk != 427214                // '{' Comment '++'
     && lk != 430798                // '{' ';' '++'
     && lk != 432974                // '{' 'break' '++'
     && lk != 433358                // '{' 'continue' '++'
     && lk != 442813                // 'f32' Identifier '+='
     && lk != 442814                // 'f64' Identifier '+='
     && lk != 442818                // 'i32' Identifier '+='
     && lk != 442819                // 'i64' Identifier '+='
     && lk != 452942                // '{' '}' '+='
     && lk != 459197                // 'f32' Identifier ','
     && lk != 459198                // 'f64' Identifier ','
     && lk != 459202                // 'i32' Identifier ','
     && lk != 459203                // 'i64' Identifier ','
     && lk != 459214                // '{' Identifier ','
     && lk != 459342                // '{' Character ','
     && lk != 459470                // '{' String ','
     && lk != 459598                // '{' Integer ','
     && lk != 459726                // '{' Complex ','
     && lk != 459854                // '{' Real ','
     && lk != 459982                // '{' Comment ','
     && lk != 463566                // '{' ';' ','
     && lk != 465742                // '{' 'break' ','
     && lk != 466126                // '{' 'continue' ','
     && lk != 468739                // Identifier '{' ','
     && lk != 475581                // 'f32' Identifier '-'
     && lk != 475582                // 'f64' Identifier '-'
     && lk != 475586                // 'i32' Identifier '-'
     && lk != 475587                // 'i64' Identifier '-'
     && lk != 476366                // '{' Comment '-'
     && lk != 479950                // '{' ';' '-'
     && lk != 482126                // '{' 'break' '-'
     && lk != 482510                // '{' 'continue' '-'
     && lk != 491965                // 'f32' Identifier '--'
     && lk != 491966                // 'f64' Identifier '--'
     && lk != 491970                // 'i32' Identifier '--'
     && lk != 491971                // 'i64' Identifier '--'
     && lk != 492750                // '{' Comment '--'
     && lk != 496334                // '{' ';' '--'
     && lk != 498510                // '{' 'break' '--'
     && lk != 498894                // '{' 'continue' '--'
     && lk != 508349                // 'f32' Identifier '-='
     && lk != 508350                // 'f64' Identifier '-='
     && lk != 508354                // 'i32' Identifier '-='
     && lk != 508355                // 'i64' Identifier '-='
     && lk != 518478                // '{' '}' '-='
     && lk != 541117                // 'f32' Identifier '/'
     && lk != 541118                // 'f64' Identifier '/'
     && lk != 541122                // 'i32' Identifier '/'
     && lk != 541123                // 'i64' Identifier '/'
     && lk != 551246                // '{' '}' '/'
     && lk != 557501                // 'f32' Identifier '/='
     && lk != 557502                // 'f64' Identifier '/='
     && lk != 557506                // 'i32' Identifier '/='
     && lk != 557507                // 'i64' Identifier '/='
     && lk != 567630                // '{' '}' '/='
     && lk != 573885                // 'f32' Identifier ':'
     && lk != 573886                // 'f64' Identifier ':'
     && lk != 573890                // 'i32' Identifier ':'
     && lk != 573891                // 'i64' Identifier ':'
     && lk != 573902                // '{' Identifier ':'
     && lk != 574158                // '{' String ':'
     && lk != 590269                // 'f32' Identifier ':='
     && lk != 590270                // 'f64' Identifier ':='
     && lk != 590274                // 'i32' Identifier ':='
     && lk != 590275                // 'i64' Identifier ':='
     && lk != 600398                // '{' '}' ':='
     && lk != 606653                // 'f32' Identifier ';'
     && lk != 606654                // 'f64' Identifier ';'
     && lk != 606658                // 'i32' Identifier ';'
     && lk != 606659                // 'i64' Identifier ';'
     && lk != 606670                // '{' Identifier ';'
     && lk != 606798                // '{' Character ';'
     && lk != 606926                // '{' String ';'
     && lk != 607054                // '{' Integer ';'
     && lk != 607182                // '{' Complex ';'
     && lk != 607310                // '{' Real ';'
     && lk != 607438                // '{' Comment ';'
     && lk != 611022                // '{' ';' ';'
     && lk != 613198                // '{' 'break' ';'
     && lk != 613582                // '{' 'continue' ';'
     && lk != 623037                // 'f32' Identifier '<'
     && lk != 623038                // 'f64' Identifier '<'
     && lk != 623042                // 'i32' Identifier '<'
     && lk != 623043                // 'i64' Identifier '<'
     && lk != 633166                // '{' '}' '<'
     && lk != 639421                // 'f32' Identifier '<<'
     && lk != 639422                // 'f64' Identifier '<<'
     && lk != 639426                // 'i32' Identifier '<<'
     && lk != 639427                // 'i64' Identifier '<<'
     && lk != 649550                // '{' '}' '<<'
     && lk != 655805                // 'f32' Identifier '<<='
     && lk != 655806                // 'f64' Identifier '<<='
     && lk != 655810                // 'i32' Identifier '<<='
     && lk != 655811                // 'i64' Identifier '<<='
     && lk != 665934                // '{' '}' '<<='
     && lk != 672189                // 'f32' Identifier '<='
     && lk != 672190                // 'f64' Identifier '<='
     && lk != 672194                // 'i32' Identifier '<='
     && lk != 672195                // 'i64' Identifier '<='
     && lk != 682318                // '{' '}' '<='
     && lk != 688573                // 'f32' Identifier '='
     && lk != 688574                // 'f64' Identifier '='
     && lk != 688578                // 'i32' Identifier '='
     && lk != 688579                // 'i64' Identifier '='
     && lk != 698702                // '{' '}' '='
     && lk != 704957                // 'f32' Identifier '=='
     && lk != 704958                // 'f64' Identifier '=='
     && lk != 704962                // 'i32' Identifier '=='
     && lk != 704963                // 'i64' Identifier '=='
     && lk != 715086                // '{' '}' '=='
     && lk != 721341                // 'f32' Identifier '>'
     && lk != 721342                // 'f64' Identifier '>'
     && lk != 721346                // 'i32' Identifier '>'
     && lk != 721347                // 'i64' Identifier '>'
     && lk != 731470                // '{' '}' '>'
     && lk != 737725                // 'f32' Identifier '>='
     && lk != 737726                // 'f64' Identifier '>='
     && lk != 737730                // 'i32' Identifier '>='
     && lk != 737731                // 'i64' Identifier '>='
     && lk != 747854                // '{' '}' '>='
     && lk != 754109                // 'f32' Identifier '>>'
     && lk != 754110                // 'f64' Identifier '>>'
     && lk != 754114                // 'i32' Identifier '>>'
     && lk != 754115                // 'i64' Identifier '>>'
     && lk != 764238                // '{' '}' '>>'
     && lk != 770493                // 'f32' Identifier '>>='
     && lk != 770494                // 'f64' Identifier '>>='
     && lk != 770498                // 'i32' Identifier '>>='
     && lk != 770499                // 'i64' Identifier '>>='
     && lk != 780622                // '{' '}' '>>='
     && lk != 786877                // 'f32' Identifier '?'
     && lk != 786878                // 'f64' Identifier '?'
     && lk != 786882                // 'i32' Identifier '?'
     && lk != 786883                // 'i64' Identifier '?'
     && lk != 797006                // '{' '}' '?'
     && lk != 803261                // 'f32' Identifier '?='
     && lk != 803262                // 'f64' Identifier '?='
     && lk != 803266                // 'i32' Identifier '?='
     && lk != 803267                // 'i64' Identifier '?='
     && lk != 813390                // '{' '}' '?='
     && lk != 819645                // 'f32' Identifier '['
     && lk != 819646                // 'f64' Identifier '['
     && lk != 819650                // 'i32' Identifier '['
     && lk != 819651                // 'i64' Identifier '['
     && lk != 819790                // '{' Character '['
     && lk != 819918                // '{' String '['
     && lk != 820046                // '{' Integer '['
     && lk != 820174                // '{' Complex '['
     && lk != 820302                // '{' Real '['
     && lk != 820430                // '{' Comment '['
     && lk != 824014                // '{' ';' '['
     && lk != 826190                // '{' 'break' '['
     && lk != 826574                // '{' 'continue' '['
     && lk != 836029                // 'f32' Identifier ']'
     && lk != 836030                // 'f64' Identifier ']'
     && lk != 836034                // 'i32' Identifier ']'
     && lk != 836035                // 'i64' Identifier ']'
     && lk != 852413                // 'f32' Identifier '^'
     && lk != 852414                // 'f64' Identifier '^'
     && lk != 852418                // 'i32' Identifier '^'
     && lk != 852419                // 'i64' Identifier '^'
     && lk != 862542                // '{' '}' '^'
     && lk != 868797                // 'f32' Identifier '^='
     && lk != 868798                // 'f64' Identifier '^='
     && lk != 868802                // 'i32' Identifier '^='
     && lk != 868803                // 'i64' Identifier '^='
     && lk != 878926                // '{' '}' '^='
     && lk != 885181                // 'f32' Identifier 'break'
     && lk != 885182                // 'f64' Identifier 'break'
     && lk != 885186                // 'i32' Identifier 'break'
     && lk != 885187                // 'i64' Identifier 'break'
     && lk != 885198                // '{' Identifier 'break'
     && lk != 885326                // '{' Character 'break'
     && lk != 885454                // '{' String 'break'
     && lk != 885582                // '{' Integer 'break'
     && lk != 885710                // '{' Complex 'break'
     && lk != 885838                // '{' Real 'break'
     && lk != 885966                // '{' Comment 'break'
     && lk != 889550                // '{' ';' 'break'
     && lk != 891726                // '{' 'break' 'break'
     && lk != 892110                // '{' 'continue' 'break'
     && lk != 901565                // 'f32' Identifier 'case'
     && lk != 901566                // 'f64' Identifier 'case'
     && lk != 901570                // 'i32' Identifier 'case'
     && lk != 901571                // 'i64' Identifier 'case'
     && lk != 917949                // 'f32' Identifier 'catch'
     && lk != 917950                // 'f64' Identifier 'catch'
     && lk != 917954                // 'i32' Identifier 'catch'
     && lk != 917955                // 'i64' Identifier 'catch'
     && lk != 934333                // 'f32' Identifier 'continue'
     && lk != 934334                // 'f64' Identifier 'continue'
     && lk != 934338                // 'i32' Identifier 'continue'
     && lk != 934339                // 'i64' Identifier 'continue'
     && lk != 934350                // '{' Identifier 'continue'
     && lk != 934478                // '{' Character 'continue'
     && lk != 934606                // '{' String 'continue'
     && lk != 934734                // '{' Integer 'continue'
     && lk != 934862                // '{' Complex 'continue'
     && lk != 934990                // '{' Real 'continue'
     && lk != 935118                // '{' Comment 'continue'
     && lk != 938702                // '{' ';' 'continue'
     && lk != 940878                // '{' 'break' 'continue'
     && lk != 941262                // '{' 'continue' 'continue'
     && lk != 950717                // 'f32' Identifier 'default'
     && lk != 950718                // 'f64' Identifier 'default'
     && lk != 950722                // 'i32' Identifier 'default'
     && lk != 950723                // 'i64' Identifier 'default'
     && lk != 967101                // 'f32' Identifier 'do'
     && lk != 967102                // 'f64' Identifier 'do'
     && lk != 967106                // 'i32' Identifier 'do'
     && lk != 967107                // 'i64' Identifier 'do'
     && lk != 967118                // '{' Identifier 'do'
     && lk != 967246                // '{' Character 'do'
     && lk != 967374                // '{' String 'do'
     && lk != 967502                // '{' Integer 'do'
     && lk != 967630                // '{' Complex 'do'
     && lk != 967758                // '{' Real 'do'
     && lk != 967886                // '{' Comment 'do'
     && lk != 971470                // '{' ';' 'do'
     && lk != 973646                // '{' 'break' 'do'
     && lk != 974030                // '{' 'continue' 'do'
     && lk != 983485                // 'f32' Identifier 'else'
     && lk != 983486                // 'f64' Identifier 'else'
     && lk != 983490                // 'i32' Identifier 'else'
     && lk != 983491                // 'i64' Identifier 'else'
     && lk != 999869                // 'f32' Identifier 'f32'
     && lk != 999870                // 'f64' Identifier 'f32'
     && lk != 999874                // 'i32' Identifier 'f32'
     && lk != 999875                // 'i64' Identifier 'f32'
     && lk != 999886                // '{' Identifier 'f32'
     && lk != 1000014               // '{' Character 'f32'
     && lk != 1000142               // '{' String 'f32'
     && lk != 1000270               // '{' Integer 'f32'
     && lk != 1000398               // '{' Complex 'f32'
     && lk != 1000526               // '{' Real 'f32'
     && lk != 1000654               // '{' Comment 'f32'
     && lk != 1004238               // '{' ';' 'f32'
     && lk != 1006414               // '{' 'break' 'f32'
     && lk != 1006798               // '{' 'continue' 'f32'
     && lk != 1016253               // 'f32' Identifier 'f64'
     && lk != 1016254               // 'f64' Identifier 'f64'
     && lk != 1016258               // 'i32' Identifier 'f64'
     && lk != 1016259               // 'i64' Identifier 'f64'
     && lk != 1016270               // '{' Identifier 'f64'
     && lk != 1016398               // '{' Character 'f64'
     && lk != 1016526               // '{' String 'f64'
     && lk != 1016654               // '{' Integer 'f64'
     && lk != 1016782               // '{' Complex 'f64'
     && lk != 1016910               // '{' Real 'f64'
     && lk != 1017038               // '{' Comment 'f64'
     && lk != 1020622               // '{' ';' 'f64'
     && lk != 1022798               // '{' 'break' 'f64'
     && lk != 1023182               // '{' 'continue' 'f64'
     && lk != 1032637               // 'f32' Identifier 'for'
     && lk != 1032638               // 'f64' Identifier 'for'
     && lk != 1032642               // 'i32' Identifier 'for'
     && lk != 1032643               // 'i64' Identifier 'for'
     && lk != 1032654               // '{' Identifier 'for'
     && lk != 1032782               // '{' Character 'for'
     && lk != 1032910               // '{' String 'for'
     && lk != 1033038               // '{' Integer 'for'
     && lk != 1033166               // '{' Complex 'for'
     && lk != 1033294               // '{' Real 'for'
     && lk != 1033422               // '{' Comment 'for'
     && lk != 1037006               // '{' ';' 'for'
     && lk != 1039182               // '{' 'break' 'for'
     && lk != 1039566               // '{' 'continue' 'for'
     && lk != 1049021               // 'f32' Identifier 'foreach'
     && lk != 1049022               // 'f64' Identifier 'foreach'
     && lk != 1049026               // 'i32' Identifier 'foreach'
     && lk != 1049027               // 'i64' Identifier 'foreach'
     && lk != 1049038               // '{' Identifier 'foreach'
     && lk != 1049166               // '{' Character 'foreach'
     && lk != 1049294               // '{' String 'foreach'
     && lk != 1049422               // '{' Integer 'foreach'
     && lk != 1049550               // '{' Complex 'foreach'
     && lk != 1049678               // '{' Real 'foreach'
     && lk != 1049806               // '{' Comment 'foreach'
     && lk != 1053390               // '{' ';' 'foreach'
     && lk != 1055566               // '{' 'break' 'foreach'
     && lk != 1055950               // '{' 'continue' 'foreach'
     && lk != 1065405               // 'f32' Identifier 'global'
     && lk != 1065406               // 'f64' Identifier 'global'
     && lk != 1065410               // 'i32' Identifier 'global'
     && lk != 1065411               // 'i64' Identifier 'global'
     && lk != 1065422               // '{' Identifier 'global'
     && lk != 1065550               // '{' Character 'global'
     && lk != 1065678               // '{' String 'global'
     && lk != 1065806               // '{' Integer 'global'
     && lk != 1065934               // '{' Complex 'global'
     && lk != 1066062               // '{' Real 'global'
     && lk != 1066190               // '{' Comment 'global'
     && lk != 1069774               // '{' ';' 'global'
     && lk != 1071950               // '{' 'break' 'global'
     && lk != 1072334               // '{' 'continue' 'global'
     && lk != 1081789               // 'f32' Identifier 'i32'
     && lk != 1081790               // 'f64' Identifier 'i32'
     && lk != 1081794               // 'i32' Identifier 'i32'
     && lk != 1081795               // 'i64' Identifier 'i32'
     && lk != 1081806               // '{' Identifier 'i32'
     && lk != 1081934               // '{' Character 'i32'
     && lk != 1082062               // '{' String 'i32'
     && lk != 1082190               // '{' Integer 'i32'
     && lk != 1082318               // '{' Complex 'i32'
     && lk != 1082446               // '{' Real 'i32'
     && lk != 1082574               // '{' Comment 'i32'
     && lk != 1086158               // '{' ';' 'i32'
     && lk != 1088334               // '{' 'break' 'i32'
     && lk != 1088718               // '{' 'continue' 'i32'
     && lk != 1098173               // 'f32' Identifier 'i64'
     && lk != 1098174               // 'f64' Identifier 'i64'
     && lk != 1098178               // 'i32' Identifier 'i64'
     && lk != 1098179               // 'i64' Identifier 'i64'
     && lk != 1098190               // '{' Identifier 'i64'
     && lk != 1098318               // '{' Character 'i64'
     && lk != 1098446               // '{' String 'i64'
     && lk != 1098574               // '{' Integer 'i64'
     && lk != 1098702               // '{' Complex 'i64'
     && lk != 1098830               // '{' Real 'i64'
     && lk != 1098958               // '{' Comment 'i64'
     && lk != 1102542               // '{' ';' 'i64'
     && lk != 1104718               // '{' 'break' 'i64'
     && lk != 1105102               // '{' 'continue' 'i64'
     && lk != 1114557               // 'f32' Identifier 'if'
     && lk != 1114558               // 'f64' Identifier 'if'
     && lk != 1114562               // 'i32' Identifier 'if'
     && lk != 1114563               // 'i64' Identifier 'if'
     && lk != 1114574               // '{' Identifier 'if'
     && lk != 1114702               // '{' Character 'if'
     && lk != 1114830               // '{' String 'if'
     && lk != 1114958               // '{' Integer 'if'
     && lk != 1115086               // '{' Complex 'if'
     && lk != 1115214               // '{' Real 'if'
     && lk != 1115342               // '{' Comment 'if'
     && lk != 1118926               // '{' ';' 'if'
     && lk != 1121102               // '{' 'break' 'if'
     && lk != 1121486               // '{' 'continue' 'if'
     && lk != 1130941               // 'f32' Identifier 'import'
     && lk != 1130942               // 'f64' Identifier 'import'
     && lk != 1130946               // 'i32' Identifier 'import'
     && lk != 1130947               // 'i64' Identifier 'import'
     && lk != 1130958               // '{' Identifier 'import'
     && lk != 1131086               // '{' Character 'import'
     && lk != 1131214               // '{' String 'import'
     && lk != 1131342               // '{' Integer 'import'
     && lk != 1131470               // '{' Complex 'import'
     && lk != 1131598               // '{' Real 'import'
     && lk != 1131726               // '{' Comment 'import'
     && lk != 1135310               // '{' ';' 'import'
     && lk != 1137486               // '{' 'break' 'import'
     && lk != 1137870               // '{' 'continue' 'import'
     && lk != 1147325               // 'f32' Identifier 'include'
     && lk != 1147326               // 'f64' Identifier 'include'
     && lk != 1147330               // 'i32' Identifier 'include'
     && lk != 1147331               // 'i64' Identifier 'include'
     && lk != 1147342               // '{' Identifier 'include'
     && lk != 1147470               // '{' Character 'include'
     && lk != 1147598               // '{' String 'include'
     && lk != 1147726               // '{' Integer 'include'
     && lk != 1147854               // '{' Complex 'include'
     && lk != 1147982               // '{' Real 'include'
     && lk != 1148110               // '{' Comment 'include'
     && lk != 1151694               // '{' ';' 'include'
     && lk != 1153870               // '{' 'break' 'include'
     && lk != 1154254               // '{' 'continue' 'include'
     && lk != 1163709               // 'f32' Identifier 'local'
     && lk != 1163710               // 'f64' Identifier 'local'
     && lk != 1163714               // 'i32' Identifier 'local'
     && lk != 1163715               // 'i64' Identifier 'local'
     && lk != 1163726               // '{' Identifier 'local'
     && lk != 1163854               // '{' Character 'local'
     && lk != 1163982               // '{' String 'local'
     && lk != 1164110               // '{' Integer 'local'
     && lk != 1164238               // '{' Complex 'local'
     && lk != 1164366               // '{' Real 'local'
     && lk != 1164494               // '{' Comment 'local'
     && lk != 1168078               // '{' ';' 'local'
     && lk != 1170254               // '{' 'break' 'local'
     && lk != 1170638               // '{' 'continue' 'local'
     && lk != 1180093               // 'f32' Identifier 'return'
     && lk != 1180094               // 'f64' Identifier 'return'
     && lk != 1180098               // 'i32' Identifier 'return'
     && lk != 1180099               // 'i64' Identifier 'return'
     && lk != 1180110               // '{' Identifier 'return'
     && lk != 1180238               // '{' Character 'return'
     && lk != 1180366               // '{' String 'return'
     && lk != 1180494               // '{' Integer 'return'
     && lk != 1180622               // '{' Complex 'return'
     && lk != 1180750               // '{' Real 'return'
     && lk != 1180878               // '{' Comment 'return'
     && lk != 1184462               // '{' ';' 'return'
     && lk != 1186638               // '{' 'break' 'return'
     && lk != 1187022               // '{' 'continue' 'return'
     && lk != 1196477               // 'f32' Identifier 'switch'
     && lk != 1196478               // 'f64' Identifier 'switch'
     && lk != 1196482               // 'i32' Identifier 'switch'
     && lk != 1196483               // 'i64' Identifier 'switch'
     && lk != 1196494               // '{' Identifier 'switch'
     && lk != 1196622               // '{' Character 'switch'
     && lk != 1196750               // '{' String 'switch'
     && lk != 1196878               // '{' Integer 'switch'
     && lk != 1197006               // '{' Complex 'switch'
     && lk != 1197134               // '{' Real 'switch'
     && lk != 1197262               // '{' Comment 'switch'
     && lk != 1200846               // '{' ';' 'switch'
     && lk != 1203022               // '{' 'break' 'switch'
     && lk != 1203406               // '{' 'continue' 'switch'
     && lk != 1212861               // 'f32' Identifier 'test'
     && lk != 1212862               // 'f64' Identifier 'test'
     && lk != 1212866               // 'i32' Identifier 'test'
     && lk != 1212867               // 'i64' Identifier 'test'
     && lk != 1212878               // '{' Identifier 'test'
     && lk != 1213006               // '{' Character 'test'
     && lk != 1213134               // '{' String 'test'
     && lk != 1213262               // '{' Integer 'test'
     && lk != 1213390               // '{' Complex 'test'
     && lk != 1213518               // '{' Real 'test'
     && lk != 1213646               // '{' Comment 'test'
     && lk != 1217230               // '{' ';' 'test'
     && lk != 1219406               // '{' 'break' 'test'
     && lk != 1219790               // '{' 'continue' 'test'
     && lk != 1229245               // 'f32' Identifier 'throw'
     && lk != 1229246               // 'f64' Identifier 'throw'
     && lk != 1229250               // 'i32' Identifier 'throw'
     && lk != 1229251               // 'i64' Identifier 'throw'
     && lk != 1229262               // '{' Identifier 'throw'
     && lk != 1229390               // '{' Character 'throw'
     && lk != 1229518               // '{' String 'throw'
     && lk != 1229646               // '{' Integer 'throw'
     && lk != 1229774               // '{' Complex 'throw'
     && lk != 1229902               // '{' Real 'throw'
     && lk != 1230030               // '{' Comment 'throw'
     && lk != 1233614               // '{' ';' 'throw'
     && lk != 1235790               // '{' 'break' 'throw'
     && lk != 1236174               // '{' 'continue' 'throw'
     && lk != 1245629               // 'f32' Identifier 'try'
     && lk != 1245630               // 'f64' Identifier 'try'
     && lk != 1245634               // 'i32' Identifier 'try'
     && lk != 1245635               // 'i64' Identifier 'try'
     && lk != 1245646               // '{' Identifier 'try'
     && lk != 1245774               // '{' Character 'try'
     && lk != 1245902               // '{' String 'try'
     && lk != 1246030               // '{' Integer 'try'
     && lk != 1246158               // '{' Complex 'try'
     && lk != 1246286               // '{' Real 'try'
     && lk != 1246414               // '{' Comment 'try'
     && lk != 1249998               // '{' ';' 'try'
     && lk != 1252174               // '{' 'break' 'try'
     && lk != 1252558               // '{' 'continue' 'try'
     && lk != 1262013               // 'f32' Identifier 'while'
     && lk != 1262014               // 'f64' Identifier 'while'
     && lk != 1262018               // 'i32' Identifier 'while'
     && lk != 1262019               // 'i64' Identifier 'while'
     && lk != 1262030               // '{' Identifier 'while'
     && lk != 1262158               // '{' Character 'while'
     && lk != 1262286               // '{' String 'while'
     && lk != 1262414               // '{' Integer 'while'
     && lk != 1262542               // '{' Complex 'while'
     && lk != 1262670               // '{' Real 'while'
     && lk != 1262798               // '{' Comment 'while'
     && lk != 1266382               // '{' ';' 'while'
     && lk != 1268558               // '{' 'break' 'while'
     && lk != 1268942               // '{' 'continue' 'while'
     && lk != 1278397               // 'f32' Identifier '{'
     && lk != 1278398               // 'f64' Identifier '{'
     && lk != 1278402               // 'i32' Identifier '{'
     && lk != 1278403               // 'i64' Identifier '{'
     && lk != 1278542               // '{' Character '{'
     && lk != 1278670               // '{' String '{'
     && lk != 1278798               // '{' Integer '{'
     && lk != 1278926               // '{' Complex '{'
     && lk != 1279054               // '{' Real '{'
     && lk != 1279182               // '{' Comment '{'
     && lk != 1282766               // '{' ';' '{'
     && lk != 1284942               // '{' 'break' '{'
     && lk != 1285326               // '{' 'continue' '{'
     && lk != 1294781               // 'f32' Identifier '|'
     && lk != 1294782               // 'f64' Identifier '|'
     && lk != 1294786               // 'i32' Identifier '|'
     && lk != 1294787               // 'i64' Identifier '|'
     && lk != 1304910               // '{' '}' '|'
     && lk != 1311165               // 'f32' Identifier '|='
     && lk != 1311166               // 'f64' Identifier '|='
     && lk != 1311170               // 'i32' Identifier '|='
     && lk != 1311171               // 'i64' Identifier '|='
     && lk != 1321294               // '{' '}' '|='
     && lk != 1327549               // 'f32' Identifier '||'
     && lk != 1327550               // 'f64' Identifier '||'
     && lk != 1327554               // 'i32' Identifier '||'
     && lk != 1327555               // 'i64' Identifier '||'
     && lk != 1337678               // '{' '}' '||'
     && lk != 1343933               // 'f32' Identifier '}'
     && lk != 1343934               // 'f64' Identifier '}'
     && lk != 1343938               // 'i32' Identifier '}'
     && lk != 1343939               // 'i64' Identifier '}'
     && lk != 1360317               // 'f32' Identifier '~'
     && lk != 1360318               // 'f64' Identifier '~'
     && lk != 1360322               // 'i32' Identifier '~'
     && lk != 1360323               // 'i64' Identifier '~'
     && lk != 1360334               // '{' Identifier '~'
     && lk != 1360462               // '{' Character '~'
     && lk != 1360590               // '{' String '~'
     && lk != 1360718               // '{' Integer '~'
     && lk != 1360846               // '{' Complex '~'
     && lk != 1360974               // '{' Real '~'
     && lk != 1361102               // '{' Comment '~'
     && lk != 1364686               // '{' ';' '~'
     && lk != 1366862               // '{' 'break' '~'
     && lk != 1367246)              // '{' 'continue' '~'
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
    case 49614:                     // '{' Identifier Identifier
    case 49742:                     // '{' Character Identifier
    case 49870:                     // '{' String Identifier
    case 49998:                     // '{' Integer Identifier
    case 50126:                     // '{' Complex Identifier
    case 50254:                     // '{' Real Identifier
    case 50382:                     // '{' Comment Identifier
    case 53966:                     // '{' ';' Identifier
    case 56142:                     // '{' 'break' Identifier
    case 56526:                     // '{' 'continue' Identifier
    case 65998:                     // '{' Identifier Character
    case 66126:                     // '{' Character Character
    case 66254:                     // '{' String Character
    case 66382:                     // '{' Integer Character
    case 66510:                     // '{' Complex Character
    case 66638:                     // '{' Real Character
    case 66766:                     // '{' Comment Character
    case 70350:                     // '{' ';' Character
    case 72526:                     // '{' 'break' Character
    case 72910:                     // '{' 'continue' Character
    case 82382:                     // '{' Identifier String
    case 82510:                     // '{' Character String
    case 82638:                     // '{' String String
    case 82766:                     // '{' Integer String
    case 82894:                     // '{' Complex String
    case 83022:                     // '{' Real String
    case 83150:                     // '{' Comment String
    case 86734:                     // '{' ';' String
    case 88910:                     // '{' 'break' String
    case 89294:                     // '{' 'continue' String
    case 98766:                     // '{' Identifier Integer
    case 98894:                     // '{' Character Integer
    case 99022:                     // '{' String Integer
    case 99150:                     // '{' Integer Integer
    case 99278:                     // '{' Complex Integer
    case 99406:                     // '{' Real Integer
    case 99534:                     // '{' Comment Integer
    case 103118:                    // '{' ';' Integer
    case 105294:                    // '{' 'break' Integer
    case 105678:                    // '{' 'continue' Integer
    case 115150:                    // '{' Identifier Complex
    case 115278:                    // '{' Character Complex
    case 115406:                    // '{' String Complex
    case 115534:                    // '{' Integer Complex
    case 115662:                    // '{' Complex Complex
    case 115790:                    // '{' Real Complex
    case 115918:                    // '{' Comment Complex
    case 119502:                    // '{' ';' Complex
    case 121678:                    // '{' 'break' Complex
    case 122062:                    // '{' 'continue' Complex
    case 131534:                    // '{' Identifier Real
    case 131662:                    // '{' Character Real
    case 131790:                    // '{' String Real
    case 131918:                    // '{' Integer Real
    case 132046:                    // '{' Complex Real
    case 132174:                    // '{' Real Real
    case 132302:                    // '{' Comment Real
    case 135886:                    // '{' ';' Real
    case 138062:                    // '{' 'break' Real
    case 138446:                    // '{' 'continue' Real
    case 147918:                    // '{' Identifier Comment
    case 148046:                    // '{' Character Comment
    case 148174:                    // '{' String Comment
    case 148302:                    // '{' Integer Comment
    case 148430:                    // '{' Complex Comment
    case 148558:                    // '{' Real Comment
    case 148686:                    // '{' Comment Comment
    case 152270:                    // '{' ';' Comment
    case 154446:                    // '{' 'break' Comment
    case 154830:                    // '{' 'continue' Comment
    case 197070:                    // '{' Identifier '!'
    case 197198:                    // '{' Character '!'
    case 197326:                    // '{' String '!'
    case 197454:                    // '{' Integer '!'
    case 197582:                    // '{' Complex '!'
    case 197710:                    // '{' Real '!'
    case 197838:                    // '{' Comment '!'
    case 201422:                    // '{' ';' '!'
    case 203598:                    // '{' 'break' '!'
    case 203982:                    // '{' 'continue' '!'
    case 328270:                    // '{' Character '('
    case 328398:                    // '{' String '('
    case 328526:                    // '{' Integer '('
    case 328654:                    // '{' Complex '('
    case 328782:                    // '{' Real '('
    case 328910:                    // '{' Comment '('
    case 332494:                    // '{' ';' '('
    case 334670:                    // '{' 'break' '('
    case 335054:                    // '{' 'continue' '('
    case 410830:                    // '{' Comment '+'
    case 414414:                    // '{' ';' '+'
    case 416590:                    // '{' 'break' '+'
    case 416974:                    // '{' 'continue' '+'
    case 427214:                    // '{' Comment '++'
    case 430798:                    // '{' ';' '++'
    case 432974:                    // '{' 'break' '++'
    case 433358:                    // '{' 'continue' '++'
    case 476366:                    // '{' Comment '-'
    case 479950:                    // '{' ';' '-'
    case 482126:                    // '{' 'break' '-'
    case 482510:                    // '{' 'continue' '-'
    case 492750:                    // '{' Comment '--'
    case 496334:                    // '{' ';' '--'
    case 498510:                    // '{' 'break' '--'
    case 498894:                    // '{' 'continue' '--'
    case 606670:                    // '{' Identifier ';'
    case 606798:                    // '{' Character ';'
    case 606926:                    // '{' String ';'
    case 607054:                    // '{' Integer ';'
    case 607182:                    // '{' Complex ';'
    case 607310:                    // '{' Real ';'
    case 607438:                    // '{' Comment ';'
    case 611022:                    // '{' ';' ';'
    case 613198:                    // '{' 'break' ';'
    case 613582:                    // '{' 'continue' ';'
    case 819790:                    // '{' Character '['
    case 819918:                    // '{' String '['
    case 820046:                    // '{' Integer '['
    case 820174:                    // '{' Complex '['
    case 820302:                    // '{' Real '['
    case 820430:                    // '{' Comment '['
    case 824014:                    // '{' ';' '['
    case 826190:                    // '{' 'break' '['
    case 826574:                    // '{' 'continue' '['
    case 885198:                    // '{' Identifier 'break'
    case 885326:                    // '{' Character 'break'
    case 885454:                    // '{' String 'break'
    case 885582:                    // '{' Integer 'break'
    case 885710:                    // '{' Complex 'break'
    case 885838:                    // '{' Real 'break'
    case 885966:                    // '{' Comment 'break'
    case 889550:                    // '{' ';' 'break'
    case 891726:                    // '{' 'break' 'break'
    case 892110:                    // '{' 'continue' 'break'
    case 934350:                    // '{' Identifier 'continue'
    case 934478:                    // '{' Character 'continue'
    case 934606:                    // '{' String 'continue'
    case 934734:                    // '{' Integer 'continue'
    case 934862:                    // '{' Complex 'continue'
    case 934990:                    // '{' Real 'continue'
    case 935118:                    // '{' Comment 'continue'
    case 938702:                    // '{' ';' 'continue'
    case 940878:                    // '{' 'break' 'continue'
    case 941262:                    // '{' 'continue' 'continue'
    case 967118:                    // '{' Identifier 'do'
    case 967246:                    // '{' Character 'do'
    case 967374:                    // '{' String 'do'
    case 967502:                    // '{' Integer 'do'
    case 967630:                    // '{' Complex 'do'
    case 967758:                    // '{' Real 'do'
    case 967886:                    // '{' Comment 'do'
    case 971470:                    // '{' ';' 'do'
    case 973646:                    // '{' 'break' 'do'
    case 974030:                    // '{' 'continue' 'do'
    case 999886:                    // '{' Identifier 'f32'
    case 1000014:                   // '{' Character 'f32'
    case 1000142:                   // '{' String 'f32'
    case 1000270:                   // '{' Integer 'f32'
    case 1000398:                   // '{' Complex 'f32'
    case 1000526:                   // '{' Real 'f32'
    case 1000654:                   // '{' Comment 'f32'
    case 1004238:                   // '{' ';' 'f32'
    case 1006414:                   // '{' 'break' 'f32'
    case 1006798:                   // '{' 'continue' 'f32'
    case 1016270:                   // '{' Identifier 'f64'
    case 1016398:                   // '{' Character 'f64'
    case 1016526:                   // '{' String 'f64'
    case 1016654:                   // '{' Integer 'f64'
    case 1016782:                   // '{' Complex 'f64'
    case 1016910:                   // '{' Real 'f64'
    case 1017038:                   // '{' Comment 'f64'
    case 1020622:                   // '{' ';' 'f64'
    case 1022798:                   // '{' 'break' 'f64'
    case 1023182:                   // '{' 'continue' 'f64'
    case 1032654:                   // '{' Identifier 'for'
    case 1032782:                   // '{' Character 'for'
    case 1032910:                   // '{' String 'for'
    case 1033038:                   // '{' Integer 'for'
    case 1033166:                   // '{' Complex 'for'
    case 1033294:                   // '{' Real 'for'
    case 1033422:                   // '{' Comment 'for'
    case 1037006:                   // '{' ';' 'for'
    case 1039182:                   // '{' 'break' 'for'
    case 1039566:                   // '{' 'continue' 'for'
    case 1049038:                   // '{' Identifier 'foreach'
    case 1049166:                   // '{' Character 'foreach'
    case 1049294:                   // '{' String 'foreach'
    case 1049422:                   // '{' Integer 'foreach'
    case 1049550:                   // '{' Complex 'foreach'
    case 1049678:                   // '{' Real 'foreach'
    case 1049806:                   // '{' Comment 'foreach'
    case 1053390:                   // '{' ';' 'foreach'
    case 1055566:                   // '{' 'break' 'foreach'
    case 1055950:                   // '{' 'continue' 'foreach'
    case 1065422:                   // '{' Identifier 'global'
    case 1065550:                   // '{' Character 'global'
    case 1065678:                   // '{' String 'global'
    case 1065806:                   // '{' Integer 'global'
    case 1065934:                   // '{' Complex 'global'
    case 1066062:                   // '{' Real 'global'
    case 1066190:                   // '{' Comment 'global'
    case 1069774:                   // '{' ';' 'global'
    case 1071950:                   // '{' 'break' 'global'
    case 1072334:                   // '{' 'continue' 'global'
    case 1081806:                   // '{' Identifier 'i32'
    case 1081934:                   // '{' Character 'i32'
    case 1082062:                   // '{' String 'i32'
    case 1082190:                   // '{' Integer 'i32'
    case 1082318:                   // '{' Complex 'i32'
    case 1082446:                   // '{' Real 'i32'
    case 1082574:                   // '{' Comment 'i32'
    case 1086158:                   // '{' ';' 'i32'
    case 1088334:                   // '{' 'break' 'i32'
    case 1088718:                   // '{' 'continue' 'i32'
    case 1098190:                   // '{' Identifier 'i64'
    case 1098318:                   // '{' Character 'i64'
    case 1098446:                   // '{' String 'i64'
    case 1098574:                   // '{' Integer 'i64'
    case 1098702:                   // '{' Complex 'i64'
    case 1098830:                   // '{' Real 'i64'
    case 1098958:                   // '{' Comment 'i64'
    case 1102542:                   // '{' ';' 'i64'
    case 1104718:                   // '{' 'break' 'i64'
    case 1105102:                   // '{' 'continue' 'i64'
    case 1114574:                   // '{' Identifier 'if'
    case 1114702:                   // '{' Character 'if'
    case 1114830:                   // '{' String 'if'
    case 1114958:                   // '{' Integer 'if'
    case 1115086:                   // '{' Complex 'if'
    case 1115214:                   // '{' Real 'if'
    case 1115342:                   // '{' Comment 'if'
    case 1118926:                   // '{' ';' 'if'
    case 1121102:                   // '{' 'break' 'if'
    case 1121486:                   // '{' 'continue' 'if'
    case 1130958:                   // '{' Identifier 'import'
    case 1131086:                   // '{' Character 'import'
    case 1131214:                   // '{' String 'import'
    case 1131342:                   // '{' Integer 'import'
    case 1131470:                   // '{' Complex 'import'
    case 1131598:                   // '{' Real 'import'
    case 1131726:                   // '{' Comment 'import'
    case 1135310:                   // '{' ';' 'import'
    case 1137486:                   // '{' 'break' 'import'
    case 1137870:                   // '{' 'continue' 'import'
    case 1147342:                   // '{' Identifier 'include'
    case 1147470:                   // '{' Character 'include'
    case 1147598:                   // '{' String 'include'
    case 1147726:                   // '{' Integer 'include'
    case 1147854:                   // '{' Complex 'include'
    case 1147982:                   // '{' Real 'include'
    case 1148110:                   // '{' Comment 'include'
    case 1151694:                   // '{' ';' 'include'
    case 1153870:                   // '{' 'break' 'include'
    case 1154254:                   // '{' 'continue' 'include'
    case 1163726:                   // '{' Identifier 'local'
    case 1163854:                   // '{' Character 'local'
    case 1163982:                   // '{' String 'local'
    case 1164110:                   // '{' Integer 'local'
    case 1164238:                   // '{' Complex 'local'
    case 1164366:                   // '{' Real 'local'
    case 1164494:                   // '{' Comment 'local'
    case 1168078:                   // '{' ';' 'local'
    case 1170254:                   // '{' 'break' 'local'
    case 1170638:                   // '{' 'continue' 'local'
    case 1180110:                   // '{' Identifier 'return'
    case 1180238:                   // '{' Character 'return'
    case 1180366:                   // '{' String 'return'
    case 1180494:                   // '{' Integer 'return'
    case 1180622:                   // '{' Complex 'return'
    case 1180750:                   // '{' Real 'return'
    case 1180878:                   // '{' Comment 'return'
    case 1184462:                   // '{' ';' 'return'
    case 1186638:                   // '{' 'break' 'return'
    case 1187022:                   // '{' 'continue' 'return'
    case 1196494:                   // '{' Identifier 'switch'
    case 1196622:                   // '{' Character 'switch'
    case 1196750:                   // '{' String 'switch'
    case 1196878:                   // '{' Integer 'switch'
    case 1197006:                   // '{' Complex 'switch'
    case 1197134:                   // '{' Real 'switch'
    case 1197262:                   // '{' Comment 'switch'
    case 1200846:                   // '{' ';' 'switch'
    case 1203022:                   // '{' 'break' 'switch'
    case 1203406:                   // '{' 'continue' 'switch'
    case 1212878:                   // '{' Identifier 'test'
    case 1213006:                   // '{' Character 'test'
    case 1213134:                   // '{' String 'test'
    case 1213262:                   // '{' Integer 'test'
    case 1213390:                   // '{' Complex 'test'
    case 1213518:                   // '{' Real 'test'
    case 1213646:                   // '{' Comment 'test'
    case 1217230:                   // '{' ';' 'test'
    case 1219406:                   // '{' 'break' 'test'
    case 1219790:                   // '{' 'continue' 'test'
    case 1229262:                   // '{' Identifier 'throw'
    case 1229390:                   // '{' Character 'throw'
    case 1229518:                   // '{' String 'throw'
    case 1229646:                   // '{' Integer 'throw'
    case 1229774:                   // '{' Complex 'throw'
    case 1229902:                   // '{' Real 'throw'
    case 1230030:                   // '{' Comment 'throw'
    case 1233614:                   // '{' ';' 'throw'
    case 1235790:                   // '{' 'break' 'throw'
    case 1236174:                   // '{' 'continue' 'throw'
    case 1245646:                   // '{' Identifier 'try'
    case 1245774:                   // '{' Character 'try'
    case 1245902:                   // '{' String 'try'
    case 1246030:                   // '{' Integer 'try'
    case 1246158:                   // '{' Complex 'try'
    case 1246286:                   // '{' Real 'try'
    case 1246414:                   // '{' Comment 'try'
    case 1249998:                   // '{' ';' 'try'
    case 1252174:                   // '{' 'break' 'try'
    case 1252558:                   // '{' 'continue' 'try'
    case 1262030:                   // '{' Identifier 'while'
    case 1262158:                   // '{' Character 'while'
    case 1262286:                   // '{' String 'while'
    case 1262414:                   // '{' Integer 'while'
    case 1262542:                   // '{' Complex 'while'
    case 1262670:                   // '{' Real 'while'
    case 1262798:                   // '{' Comment 'while'
    case 1266382:                   // '{' ';' 'while'
    case 1268558:                   // '{' 'break' 'while'
    case 1268942:                   // '{' 'continue' 'while'
    case 1278542:                   // '{' Character '{'
    case 1278670:                   // '{' String '{'
    case 1278798:                   // '{' Integer '{'
    case 1278926:                   // '{' Complex '{'
    case 1279054:                   // '{' Real '{'
    case 1279182:                   // '{' Comment '{'
    case 1282766:                   // '{' ';' '{'
    case 1284942:                   // '{' 'break' '{'
    case 1285326:                   // '{' 'continue' '{'
    case 1360334:                   // '{' Identifier '~'
    case 1360462:                   // '{' Character '~'
    case 1360590:                   // '{' String '~'
    case 1360718:                   // '{' Integer '~'
    case 1360846:                   // '{' Complex '~'
    case 1360974:                   // '{' Real '~'
    case 1361102:                   // '{' Comment '~'
    case 1364686:                   // '{' ';' '~'
    case 1366862:                   // '{' 'break' '~'
    case 1367246:                   // '{' 'continue' '~'
      parse_Block();
      break;
    case -3:
    case 37:                        // ';'
    case 54:                        // 'break'
    case 57:                        // 'continue'
    case 59:                        // 'do'
    case 63:                        // 'for'
    case 64:                        // 'foreach'
    case 65:                        // 'global'
    case 68:                        // 'if'
    case 69:                        // 'import'
    case 70:                        // 'include'
    case 71:                        // 'local'
    case 72:                        // 'return'
    case 73:                        // 'switch'
    case 74:                        // 'test'
    case 75:                        // 'throw'
    case 76:                        // 'try'
    case 77:                        // 'while'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9987:                    // Identifier '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 78:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 462:                     // '{' Identifier
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 718:                     // '{' String
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' |
                                    // '|=' | '||' | '}' | '~'
        break;
      case 6478:                    // '{' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10574:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 590:                     // '{' Character
      case 846:                     // '{' Integer
      case 974:                     // '{' Complex
      case 1102:                    // '{' Real
        lookahead3W(41);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 7886:                    // '{' 'f32'
      case 8014:                    // '{' 'f64'
      case 8526:                    // '{' 'i32'
      case 8654:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1230:                    // '{' Comment
      case 4814:                    // '{' ';'
      case 6990:                    // '{' 'break'
      case 7374:                    // '{' 'continue'
      case 10062:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1614:                    // '{' '!'
      case 3278:                    // '{' '+'
      case 3406:                    // '{' '++'
      case 3790:                    // '{' '-'
      case 3918:                    // '{' '--'
      case 10702:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8142:                    // '{' 'for'
      case 8270:                    // '{' 'foreach'
      case 8782:                    // '{' 'if'
      case 9422:                    // '{' 'switch'
      case 9550:                    // '{' 'test'
      case 9934:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2638:                    // '{' '('
      case 7630:                    // '{' 'do'
      case 8398:                    // '{' 'global'
      case 8910:                    // '{' 'import'
      case 9038:                    // '{' 'include'
      case 9166:                    // '{' 'local'
      case 9294:                    // '{' 'return'
      case 9678:                    // '{' 'throw'
      case 9806:                    // '{' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 450:                     // 'i32' Identifier
      case 451:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'global'
     && lk != 68                    // 'if'
     && lk != 69                    // 'import'
     && lk != 70                    // 'include'
     && lk != 71                    // 'local'
     && lk != 72                    // 'return'
     && lk != 73                    // 'switch'
     && lk != 74                    // 'test'
     && lk != 75                    // 'throw'
     && lk != 76                    // 'try'
     && lk != 77                    // 'while'
     && lk != 83                    // '~'
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
     && lk != 3662                  // '{' ','
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
     && lk != 7811                  // Identifier 'f32'
     && lk != 7939                  // Identifier 'f64'
     && lk != 8067                  // Identifier 'for'
     && lk != 8195                  // Identifier 'foreach'
     && lk != 8323                  // Identifier 'global'
     && lk != 8451                  // Identifier 'i32'
     && lk != 8579                  // Identifier 'i64'
     && lk != 8707                  // Identifier 'if'
     && lk != 8835                  // Identifier 'import'
     && lk != 8963                  // Identifier 'include'
     && lk != 9091                  // Identifier 'local'
     && lk != 9219                  // Identifier 'return'
     && lk != 9347                  // Identifier 'switch'
     && lk != 9475                  // Identifier 'test'
     && lk != 9603                  // Identifier 'throw'
     && lk != 9731                  // Identifier 'try'
     && lk != 9859                  // Identifier 'while'
     && lk != 10115                 // Identifier '|'
     && lk != 10243                 // Identifier '|='
     && lk != 10371                 // Identifier '||'
     && lk != 10499                 // Identifier '}'
     && lk != 10627                 // Identifier '~'
     && lk != 16829                 // 'f32' Identifier END
     && lk != 16830                 // 'f64' Identifier END
     && lk != 16834                 // 'i32' Identifier END
     && lk != 16835                 // 'i64' Identifier END
     && lk != 49597                 // 'f32' Identifier Identifier
     && lk != 49598                 // 'f64' Identifier Identifier
     && lk != 49602                 // 'i32' Identifier Identifier
     && lk != 49603                 // 'i64' Identifier Identifier
     && lk != 49614                 // '{' Identifier Identifier
     && lk != 49742                 // '{' Character Identifier
     && lk != 49870                 // '{' String Identifier
     && lk != 49998                 // '{' Integer Identifier
     && lk != 50126                 // '{' Complex Identifier
     && lk != 50254                 // '{' Real Identifier
     && lk != 50382                 // '{' Comment Identifier
     && lk != 53966                 // '{' ';' Identifier
     && lk != 56142                 // '{' 'break' Identifier
     && lk != 56526                 // '{' 'continue' Identifier
     && lk != 65981                 // 'f32' Identifier Character
     && lk != 65982                 // 'f64' Identifier Character
     && lk != 65986                 // 'i32' Identifier Character
     && lk != 65987                 // 'i64' Identifier Character
     && lk != 65998                 // '{' Identifier Character
     && lk != 66126                 // '{' Character Character
     && lk != 66254                 // '{' String Character
     && lk != 66382                 // '{' Integer Character
     && lk != 66510                 // '{' Complex Character
     && lk != 66638                 // '{' Real Character
     && lk != 66766                 // '{' Comment Character
     && lk != 70350                 // '{' ';' Character
     && lk != 72526                 // '{' 'break' Character
     && lk != 72910                 // '{' 'continue' Character
     && lk != 82365                 // 'f32' Identifier String
     && lk != 82366                 // 'f64' Identifier String
     && lk != 82370                 // 'i32' Identifier String
     && lk != 82371                 // 'i64' Identifier String
     && lk != 82382                 // '{' Identifier String
     && lk != 82510                 // '{' Character String
     && lk != 82638                 // '{' String String
     && lk != 82766                 // '{' Integer String
     && lk != 82894                 // '{' Complex String
     && lk != 83022                 // '{' Real String
     && lk != 83150                 // '{' Comment String
     && lk != 86734                 // '{' ';' String
     && lk != 88910                 // '{' 'break' String
     && lk != 89294                 // '{' 'continue' String
     && lk != 98749                 // 'f32' Identifier Integer
     && lk != 98750                 // 'f64' Identifier Integer
     && lk != 98754                 // 'i32' Identifier Integer
     && lk != 98755                 // 'i64' Identifier Integer
     && lk != 98766                 // '{' Identifier Integer
     && lk != 98894                 // '{' Character Integer
     && lk != 99022                 // '{' String Integer
     && lk != 99150                 // '{' Integer Integer
     && lk != 99278                 // '{' Complex Integer
     && lk != 99406                 // '{' Real Integer
     && lk != 99534                 // '{' Comment Integer
     && lk != 103118                // '{' ';' Integer
     && lk != 105294                // '{' 'break' Integer
     && lk != 105678                // '{' 'continue' Integer
     && lk != 115133                // 'f32' Identifier Complex
     && lk != 115134                // 'f64' Identifier Complex
     && lk != 115138                // 'i32' Identifier Complex
     && lk != 115139                // 'i64' Identifier Complex
     && lk != 115150                // '{' Identifier Complex
     && lk != 115278                // '{' Character Complex
     && lk != 115406                // '{' String Complex
     && lk != 115534                // '{' Integer Complex
     && lk != 115662                // '{' Complex Complex
     && lk != 115790                // '{' Real Complex
     && lk != 115918                // '{' Comment Complex
     && lk != 119502                // '{' ';' Complex
     && lk != 121678                // '{' 'break' Complex
     && lk != 122062                // '{' 'continue' Complex
     && lk != 131517                // 'f32' Identifier Real
     && lk != 131518                // 'f64' Identifier Real
     && lk != 131522                // 'i32' Identifier Real
     && lk != 131523                // 'i64' Identifier Real
     && lk != 131534                // '{' Identifier Real
     && lk != 131662                // '{' Character Real
     && lk != 131790                // '{' String Real
     && lk != 131918                // '{' Integer Real
     && lk != 132046                // '{' Complex Real
     && lk != 132174                // '{' Real Real
     && lk != 132302                // '{' Comment Real
     && lk != 135886                // '{' ';' Real
     && lk != 138062                // '{' 'break' Real
     && lk != 138446                // '{' 'continue' Real
     && lk != 147901                // 'f32' Identifier Comment
     && lk != 147902                // 'f64' Identifier Comment
     && lk != 147906                // 'i32' Identifier Comment
     && lk != 147907                // 'i64' Identifier Comment
     && lk != 147918                // '{' Identifier Comment
     && lk != 148046                // '{' Character Comment
     && lk != 148174                // '{' String Comment
     && lk != 148302                // '{' Integer Comment
     && lk != 148430                // '{' Complex Comment
     && lk != 148558                // '{' Real Comment
     && lk != 148686                // '{' Comment Comment
     && lk != 152270                // '{' ';' Comment
     && lk != 154446                // '{' 'break' Comment
     && lk != 154830                // '{' 'continue' Comment
     && lk != 197053                // 'f32' Identifier '!'
     && lk != 197054                // 'f64' Identifier '!'
     && lk != 197058                // 'i32' Identifier '!'
     && lk != 197059                // 'i64' Identifier '!'
     && lk != 197070                // '{' Identifier '!'
     && lk != 197198                // '{' Character '!'
     && lk != 197326                // '{' String '!'
     && lk != 197454                // '{' Integer '!'
     && lk != 197582                // '{' Complex '!'
     && lk != 197710                // '{' Real '!'
     && lk != 197838                // '{' Comment '!'
     && lk != 201422                // '{' ';' '!'
     && lk != 203598                // '{' 'break' '!'
     && lk != 203982                // '{' 'continue' '!'
     && lk != 213437                // 'f32' Identifier '!='
     && lk != 213438                // 'f64' Identifier '!='
     && lk != 213442                // 'i32' Identifier '!='
     && lk != 213443                // 'i64' Identifier '!='
     && lk != 223566                // '{' '}' '!='
     && lk != 246205                // 'f32' Identifier '%'
     && lk != 246206                // 'f64' Identifier '%'
     && lk != 246210                // 'i32' Identifier '%'
     && lk != 246211                // 'i64' Identifier '%'
     && lk != 256334                // '{' '}' '%'
     && lk != 262589                // 'f32' Identifier '%='
     && lk != 262590                // 'f64' Identifier '%='
     && lk != 262594                // 'i32' Identifier '%='
     && lk != 262595                // 'i64' Identifier '%='
     && lk != 272718                // '{' '}' '%='
     && lk != 278973                // 'f32' Identifier '&'
     && lk != 278974                // 'f64' Identifier '&'
     && lk != 278978                // 'i32' Identifier '&'
     && lk != 278979                // 'i64' Identifier '&'
     && lk != 289102                // '{' '}' '&'
     && lk != 295357                // 'f32' Identifier '&&'
     && lk != 295358                // 'f64' Identifier '&&'
     && lk != 295362                // 'i32' Identifier '&&'
     && lk != 295363                // 'i64' Identifier '&&'
     && lk != 305486                // '{' '}' '&&'
     && lk != 311741                // 'f32' Identifier '&='
     && lk != 311742                // 'f64' Identifier '&='
     && lk != 311746                // 'i32' Identifier '&='
     && lk != 311747                // 'i64' Identifier '&='
     && lk != 321870                // '{' '}' '&='
     && lk != 328270                // '{' Character '('
     && lk != 328398                // '{' String '('
     && lk != 328526                // '{' Integer '('
     && lk != 328654                // '{' Complex '('
     && lk != 328782                // '{' Real '('
     && lk != 328910                // '{' Comment '('
     && lk != 332494                // '{' ';' '('
     && lk != 334670                // '{' 'break' '('
     && lk != 335054                // '{' 'continue' '('
     && lk != 344509                // 'f32' Identifier ')'
     && lk != 344510                // 'f64' Identifier ')'
     && lk != 344514                // 'i32' Identifier ')'
     && lk != 344515                // 'i64' Identifier ')'
     && lk != 360893                // 'f32' Identifier '*'
     && lk != 360894                // 'f64' Identifier '*'
     && lk != 360898                // 'i32' Identifier '*'
     && lk != 360899                // 'i64' Identifier '*'
     && lk != 371022                // '{' '}' '*'
     && lk != 377277                // 'f32' Identifier '**'
     && lk != 377278                // 'f64' Identifier '**'
     && lk != 377282                // 'i32' Identifier '**'
     && lk != 377283                // 'i64' Identifier '**'
     && lk != 387406                // '{' '}' '**'
     && lk != 393661                // 'f32' Identifier '*='
     && lk != 393662                // 'f64' Identifier '*='
     && lk != 393666                // 'i32' Identifier '*='
     && lk != 393667                // 'i64' Identifier '*='
     && lk != 403790                // '{' '}' '*='
     && lk != 410045                // 'f32' Identifier '+'
     && lk != 410046                // 'f64' Identifier '+'
     && lk != 410050                // 'i32' Identifier '+'
     && lk != 410051                // 'i64' Identifier '+'
     && lk != 410830                // '{' Comment '+'
     && lk != 414414                // '{' ';' '+'
     && lk != 416590                // '{' 'break' '+'
     && lk != 416974                // '{' 'continue' '+'
     && lk != 426429                // 'f32' Identifier '++'
     && lk != 426430                // 'f64' Identifier '++'
     && lk != 426434                // 'i32' Identifier '++'
     && lk != 426435                // 'i64' Identifier '++'
     && lk != 427214                // '{' Comment '++'
     && lk != 430798                // '{' ';' '++'
     && lk != 432974                // '{' 'break' '++'
     && lk != 433358                // '{' 'continue' '++'
     && lk != 442813                // 'f32' Identifier '+='
     && lk != 442814                // 'f64' Identifier '+='
     && lk != 442818                // 'i32' Identifier '+='
     && lk != 442819                // 'i64' Identifier '+='
     && lk != 452942                // '{' '}' '+='
     && lk != 459197                // 'f32' Identifier ','
     && lk != 459198                // 'f64' Identifier ','
     && lk != 459202                // 'i32' Identifier ','
     && lk != 459203                // 'i64' Identifier ','
     && lk != 459214                // '{' Identifier ','
     && lk != 459342                // '{' Character ','
     && lk != 459470                // '{' String ','
     && lk != 459598                // '{' Integer ','
     && lk != 459726                // '{' Complex ','
     && lk != 459854                // '{' Real ','
     && lk != 459982                // '{' Comment ','
     && lk != 463566                // '{' ';' ','
     && lk != 465742                // '{' 'break' ','
     && lk != 466126                // '{' 'continue' ','
     && lk != 468739                // Identifier '{' ','
     && lk != 475581                // 'f32' Identifier '-'
     && lk != 475582                // 'f64' Identifier '-'
     && lk != 475586                // 'i32' Identifier '-'
     && lk != 475587                // 'i64' Identifier '-'
     && lk != 476366                // '{' Comment '-'
     && lk != 479950                // '{' ';' '-'
     && lk != 482126                // '{' 'break' '-'
     && lk != 482510                // '{' 'continue' '-'
     && lk != 491965                // 'f32' Identifier '--'
     && lk != 491966                // 'f64' Identifier '--'
     && lk != 491970                // 'i32' Identifier '--'
     && lk != 491971                // 'i64' Identifier '--'
     && lk != 492750                // '{' Comment '--'
     && lk != 496334                // '{' ';' '--'
     && lk != 498510                // '{' 'break' '--'
     && lk != 498894                // '{' 'continue' '--'
     && lk != 508349                // 'f32' Identifier '-='
     && lk != 508350                // 'f64' Identifier '-='
     && lk != 508354                // 'i32' Identifier '-='
     && lk != 508355                // 'i64' Identifier '-='
     && lk != 518478                // '{' '}' '-='
     && lk != 541117                // 'f32' Identifier '/'
     && lk != 541118                // 'f64' Identifier '/'
     && lk != 541122                // 'i32' Identifier '/'
     && lk != 541123                // 'i64' Identifier '/'
     && lk != 551246                // '{' '}' '/'
     && lk != 557501                // 'f32' Identifier '/='
     && lk != 557502                // 'f64' Identifier '/='
     && lk != 557506                // 'i32' Identifier '/='
     && lk != 557507                // 'i64' Identifier '/='
     && lk != 567630                // '{' '}' '/='
     && lk != 573885                // 'f32' Identifier ':'
     && lk != 573886                // 'f64' Identifier ':'
     && lk != 573890                // 'i32' Identifier ':'
     && lk != 573891                // 'i64' Identifier ':'
     && lk != 573902                // '{' Identifier ':'
     && lk != 574158                // '{' String ':'
     && lk != 590269                // 'f32' Identifier ':='
     && lk != 590270                // 'f64' Identifier ':='
     && lk != 590274                // 'i32' Identifier ':='
     && lk != 590275                // 'i64' Identifier ':='
     && lk != 600398                // '{' '}' ':='
     && lk != 606653                // 'f32' Identifier ';'
     && lk != 606654                // 'f64' Identifier ';'
     && lk != 606658                // 'i32' Identifier ';'
     && lk != 606659                // 'i64' Identifier ';'
     && lk != 606670                // '{' Identifier ';'
     && lk != 606798                // '{' Character ';'
     && lk != 606926                // '{' String ';'
     && lk != 607054                // '{' Integer ';'
     && lk != 607182                // '{' Complex ';'
     && lk != 607310                // '{' Real ';'
     && lk != 607438                // '{' Comment ';'
     && lk != 611022                // '{' ';' ';'
     && lk != 613198                // '{' 'break' ';'
     && lk != 613582                // '{' 'continue' ';'
     && lk != 623037                // 'f32' Identifier '<'
     && lk != 623038                // 'f64' Identifier '<'
     && lk != 623042                // 'i32' Identifier '<'
     && lk != 623043                // 'i64' Identifier '<'
     && lk != 633166                // '{' '}' '<'
     && lk != 639421                // 'f32' Identifier '<<'
     && lk != 639422                // 'f64' Identifier '<<'
     && lk != 639426                // 'i32' Identifier '<<'
     && lk != 639427                // 'i64' Identifier '<<'
     && lk != 649550                // '{' '}' '<<'
     && lk != 655805                // 'f32' Identifier '<<='
     && lk != 655806                // 'f64' Identifier '<<='
     && lk != 655810                // 'i32' Identifier '<<='
     && lk != 655811                // 'i64' Identifier '<<='
     && lk != 665934                // '{' '}' '<<='
     && lk != 672189                // 'f32' Identifier '<='
     && lk != 672190                // 'f64' Identifier '<='
     && lk != 672194                // 'i32' Identifier '<='
     && lk != 672195                // 'i64' Identifier '<='
     && lk != 682318                // '{' '}' '<='
     && lk != 688573                // 'f32' Identifier '='
     && lk != 688574                // 'f64' Identifier '='
     && lk != 688578                // 'i32' Identifier '='
     && lk != 688579                // 'i64' Identifier '='
     && lk != 698702                // '{' '}' '='
     && lk != 704957                // 'f32' Identifier '=='
     && lk != 704958                // 'f64' Identifier '=='
     && lk != 704962                // 'i32' Identifier '=='
     && lk != 704963                // 'i64' Identifier '=='
     && lk != 715086                // '{' '}' '=='
     && lk != 721341                // 'f32' Identifier '>'
     && lk != 721342                // 'f64' Identifier '>'
     && lk != 721346                // 'i32' Identifier '>'
     && lk != 721347                // 'i64' Identifier '>'
     && lk != 731470                // '{' '}' '>'
     && lk != 737725                // 'f32' Identifier '>='
     && lk != 737726                // 'f64' Identifier '>='
     && lk != 737730                // 'i32' Identifier '>='
     && lk != 737731                // 'i64' Identifier '>='
     && lk != 747854                // '{' '}' '>='
     && lk != 754109                // 'f32' Identifier '>>'
     && lk != 754110                // 'f64' Identifier '>>'
     && lk != 754114                // 'i32' Identifier '>>'
     && lk != 754115                // 'i64' Identifier '>>'
     && lk != 764238                // '{' '}' '>>'
     && lk != 770493                // 'f32' Identifier '>>='
     && lk != 770494                // 'f64' Identifier '>>='
     && lk != 770498                // 'i32' Identifier '>>='
     && lk != 770499                // 'i64' Identifier '>>='
     && lk != 780622                // '{' '}' '>>='
     && lk != 786877                // 'f32' Identifier '?'
     && lk != 786878                // 'f64' Identifier '?'
     && lk != 786882                // 'i32' Identifier '?'
     && lk != 786883                // 'i64' Identifier '?'
     && lk != 797006                // '{' '}' '?'
     && lk != 803261                // 'f32' Identifier '?='
     && lk != 803262                // 'f64' Identifier '?='
     && lk != 803266                // 'i32' Identifier '?='
     && lk != 803267                // 'i64' Identifier '?='
     && lk != 813390                // '{' '}' '?='
     && lk != 819645                // 'f32' Identifier '['
     && lk != 819646                // 'f64' Identifier '['
     && lk != 819650                // 'i32' Identifier '['
     && lk != 819651                // 'i64' Identifier '['
     && lk != 819790                // '{' Character '['
     && lk != 819918                // '{' String '['
     && lk != 820046                // '{' Integer '['
     && lk != 820174                // '{' Complex '['
     && lk != 820302                // '{' Real '['
     && lk != 820430                // '{' Comment '['
     && lk != 824014                // '{' ';' '['
     && lk != 826190                // '{' 'break' '['
     && lk != 826574                // '{' 'continue' '['
     && lk != 836029                // 'f32' Identifier ']'
     && lk != 836030                // 'f64' Identifier ']'
     && lk != 836034                // 'i32' Identifier ']'
     && lk != 836035                // 'i64' Identifier ']'
     && lk != 852413                // 'f32' Identifier '^'
     && lk != 852414                // 'f64' Identifier '^'
     && lk != 852418                // 'i32' Identifier '^'
     && lk != 852419                // 'i64' Identifier '^'
     && lk != 862542                // '{' '}' '^'
     && lk != 868797                // 'f32' Identifier '^='
     && lk != 868798                // 'f64' Identifier '^='
     && lk != 868802                // 'i32' Identifier '^='
     && lk != 868803                // 'i64' Identifier '^='
     && lk != 878926                // '{' '}' '^='
     && lk != 885181                // 'f32' Identifier 'break'
     && lk != 885182                // 'f64' Identifier 'break'
     && lk != 885186                // 'i32' Identifier 'break'
     && lk != 885187                // 'i64' Identifier 'break'
     && lk != 885198                // '{' Identifier 'break'
     && lk != 885326                // '{' Character 'break'
     && lk != 885454                // '{' String 'break'
     && lk != 885582                // '{' Integer 'break'
     && lk != 885710                // '{' Complex 'break'
     && lk != 885838                // '{' Real 'break'
     && lk != 885966                // '{' Comment 'break'
     && lk != 889550                // '{' ';' 'break'
     && lk != 891726                // '{' 'break' 'break'
     && lk != 892110                // '{' 'continue' 'break'
     && lk != 901565                // 'f32' Identifier 'case'
     && lk != 901566                // 'f64' Identifier 'case'
     && lk != 901570                // 'i32' Identifier 'case'
     && lk != 901571                // 'i64' Identifier 'case'
     && lk != 917949                // 'f32' Identifier 'catch'
     && lk != 917950                // 'f64' Identifier 'catch'
     && lk != 917954                // 'i32' Identifier 'catch'
     && lk != 917955                // 'i64' Identifier 'catch'
     && lk != 934333                // 'f32' Identifier 'continue'
     && lk != 934334                // 'f64' Identifier 'continue'
     && lk != 934338                // 'i32' Identifier 'continue'
     && lk != 934339                // 'i64' Identifier 'continue'
     && lk != 934350                // '{' Identifier 'continue'
     && lk != 934478                // '{' Character 'continue'
     && lk != 934606                // '{' String 'continue'
     && lk != 934734                // '{' Integer 'continue'
     && lk != 934862                // '{' Complex 'continue'
     && lk != 934990                // '{' Real 'continue'
     && lk != 935118                // '{' Comment 'continue'
     && lk != 938702                // '{' ';' 'continue'
     && lk != 940878                // '{' 'break' 'continue'
     && lk != 941262                // '{' 'continue' 'continue'
     && lk != 950717                // 'f32' Identifier 'default'
     && lk != 950718                // 'f64' Identifier 'default'
     && lk != 950722                // 'i32' Identifier 'default'
     && lk != 950723                // 'i64' Identifier 'default'
     && lk != 967101                // 'f32' Identifier 'do'
     && lk != 967102                // 'f64' Identifier 'do'
     && lk != 967106                // 'i32' Identifier 'do'
     && lk != 967107                // 'i64' Identifier 'do'
     && lk != 967118                // '{' Identifier 'do'
     && lk != 967246                // '{' Character 'do'
     && lk != 967374                // '{' String 'do'
     && lk != 967502                // '{' Integer 'do'
     && lk != 967630                // '{' Complex 'do'
     && lk != 967758                // '{' Real 'do'
     && lk != 967886                // '{' Comment 'do'
     && lk != 971470                // '{' ';' 'do'
     && lk != 973646                // '{' 'break' 'do'
     && lk != 974030                // '{' 'continue' 'do'
     && lk != 983485                // 'f32' Identifier 'else'
     && lk != 983486                // 'f64' Identifier 'else'
     && lk != 983490                // 'i32' Identifier 'else'
     && lk != 983491                // 'i64' Identifier 'else'
     && lk != 999869                // 'f32' Identifier 'f32'
     && lk != 999870                // 'f64' Identifier 'f32'
     && lk != 999874                // 'i32' Identifier 'f32'
     && lk != 999875                // 'i64' Identifier 'f32'
     && lk != 999886                // '{' Identifier 'f32'
     && lk != 1000014               // '{' Character 'f32'
     && lk != 1000142               // '{' String 'f32'
     && lk != 1000270               // '{' Integer 'f32'
     && lk != 1000398               // '{' Complex 'f32'
     && lk != 1000526               // '{' Real 'f32'
     && lk != 1000654               // '{' Comment 'f32'
     && lk != 1004238               // '{' ';' 'f32'
     && lk != 1006414               // '{' 'break' 'f32'
     && lk != 1006798               // '{' 'continue' 'f32'
     && lk != 1016253               // 'f32' Identifier 'f64'
     && lk != 1016254               // 'f64' Identifier 'f64'
     && lk != 1016258               // 'i32' Identifier 'f64'
     && lk != 1016259               // 'i64' Identifier 'f64'
     && lk != 1016270               // '{' Identifier 'f64'
     && lk != 1016398               // '{' Character 'f64'
     && lk != 1016526               // '{' String 'f64'
     && lk != 1016654               // '{' Integer 'f64'
     && lk != 1016782               // '{' Complex 'f64'
     && lk != 1016910               // '{' Real 'f64'
     && lk != 1017038               // '{' Comment 'f64'
     && lk != 1020622               // '{' ';' 'f64'
     && lk != 1022798               // '{' 'break' 'f64'
     && lk != 1023182               // '{' 'continue' 'f64'
     && lk != 1032637               // 'f32' Identifier 'for'
     && lk != 1032638               // 'f64' Identifier 'for'
     && lk != 1032642               // 'i32' Identifier 'for'
     && lk != 1032643               // 'i64' Identifier 'for'
     && lk != 1032654               // '{' Identifier 'for'
     && lk != 1032782               // '{' Character 'for'
     && lk != 1032910               // '{' String 'for'
     && lk != 1033038               // '{' Integer 'for'
     && lk != 1033166               // '{' Complex 'for'
     && lk != 1033294               // '{' Real 'for'
     && lk != 1033422               // '{' Comment 'for'
     && lk != 1037006               // '{' ';' 'for'
     && lk != 1039182               // '{' 'break' 'for'
     && lk != 1039566               // '{' 'continue' 'for'
     && lk != 1049021               // 'f32' Identifier 'foreach'
     && lk != 1049022               // 'f64' Identifier 'foreach'
     && lk != 1049026               // 'i32' Identifier 'foreach'
     && lk != 1049027               // 'i64' Identifier 'foreach'
     && lk != 1049038               // '{' Identifier 'foreach'
     && lk != 1049166               // '{' Character 'foreach'
     && lk != 1049294               // '{' String 'foreach'
     && lk != 1049422               // '{' Integer 'foreach'
     && lk != 1049550               // '{' Complex 'foreach'
     && lk != 1049678               // '{' Real 'foreach'
     && lk != 1049806               // '{' Comment 'foreach'
     && lk != 1053390               // '{' ';' 'foreach'
     && lk != 1055566               // '{' 'break' 'foreach'
     && lk != 1055950               // '{' 'continue' 'foreach'
     && lk != 1065405               // 'f32' Identifier 'global'
     && lk != 1065406               // 'f64' Identifier 'global'
     && lk != 1065410               // 'i32' Identifier 'global'
     && lk != 1065411               // 'i64' Identifier 'global'
     && lk != 1065422               // '{' Identifier 'global'
     && lk != 1065550               // '{' Character 'global'
     && lk != 1065678               // '{' String 'global'
     && lk != 1065806               // '{' Integer 'global'
     && lk != 1065934               // '{' Complex 'global'
     && lk != 1066062               // '{' Real 'global'
     && lk != 1066190               // '{' Comment 'global'
     && lk != 1069774               // '{' ';' 'global'
     && lk != 1071950               // '{' 'break' 'global'
     && lk != 1072334               // '{' 'continue' 'global'
     && lk != 1081789               // 'f32' Identifier 'i32'
     && lk != 1081790               // 'f64' Identifier 'i32'
     && lk != 1081794               // 'i32' Identifier 'i32'
     && lk != 1081795               // 'i64' Identifier 'i32'
     && lk != 1081806               // '{' Identifier 'i32'
     && lk != 1081934               // '{' Character 'i32'
     && lk != 1082062               // '{' String 'i32'
     && lk != 1082190               // '{' Integer 'i32'
     && lk != 1082318               // '{' Complex 'i32'
     && lk != 1082446               // '{' Real 'i32'
     && lk != 1082574               // '{' Comment 'i32'
     && lk != 1086158               // '{' ';' 'i32'
     && lk != 1088334               // '{' 'break' 'i32'
     && lk != 1088718               // '{' 'continue' 'i32'
     && lk != 1098173               // 'f32' Identifier 'i64'
     && lk != 1098174               // 'f64' Identifier 'i64'
     && lk != 1098178               // 'i32' Identifier 'i64'
     && lk != 1098179               // 'i64' Identifier 'i64'
     && lk != 1098190               // '{' Identifier 'i64'
     && lk != 1098318               // '{' Character 'i64'
     && lk != 1098446               // '{' String 'i64'
     && lk != 1098574               // '{' Integer 'i64'
     && lk != 1098702               // '{' Complex 'i64'
     && lk != 1098830               // '{' Real 'i64'
     && lk != 1098958               // '{' Comment 'i64'
     && lk != 1102542               // '{' ';' 'i64'
     && lk != 1104718               // '{' 'break' 'i64'
     && lk != 1105102               // '{' 'continue' 'i64'
     && lk != 1114557               // 'f32' Identifier 'if'
     && lk != 1114558               // 'f64' Identifier 'if'
     && lk != 1114562               // 'i32' Identifier 'if'
     && lk != 1114563               // 'i64' Identifier 'if'
     && lk != 1114574               // '{' Identifier 'if'
     && lk != 1114702               // '{' Character 'if'
     && lk != 1114830               // '{' String 'if'
     && lk != 1114958               // '{' Integer 'if'
     && lk != 1115086               // '{' Complex 'if'
     && lk != 1115214               // '{' Real 'if'
     && lk != 1115342               // '{' Comment 'if'
     && lk != 1118926               // '{' ';' 'if'
     && lk != 1121102               // '{' 'break' 'if'
     && lk != 1121486               // '{' 'continue' 'if'
     && lk != 1130941               // 'f32' Identifier 'import'
     && lk != 1130942               // 'f64' Identifier 'import'
     && lk != 1130946               // 'i32' Identifier 'import'
     && lk != 1130947               // 'i64' Identifier 'import'
     && lk != 1130958               // '{' Identifier 'import'
     && lk != 1131086               // '{' Character 'import'
     && lk != 1131214               // '{' String 'import'
     && lk != 1131342               // '{' Integer 'import'
     && lk != 1131470               // '{' Complex 'import'
     && lk != 1131598               // '{' Real 'import'
     && lk != 1131726               // '{' Comment 'import'
     && lk != 1135310               // '{' ';' 'import'
     && lk != 1137486               // '{' 'break' 'import'
     && lk != 1137870               // '{' 'continue' 'import'
     && lk != 1147325               // 'f32' Identifier 'include'
     && lk != 1147326               // 'f64' Identifier 'include'
     && lk != 1147330               // 'i32' Identifier 'include'
     && lk != 1147331               // 'i64' Identifier 'include'
     && lk != 1147342               // '{' Identifier 'include'
     && lk != 1147470               // '{' Character 'include'
     && lk != 1147598               // '{' String 'include'
     && lk != 1147726               // '{' Integer 'include'
     && lk != 1147854               // '{' Complex 'include'
     && lk != 1147982               // '{' Real 'include'
     && lk != 1148110               // '{' Comment 'include'
     && lk != 1151694               // '{' ';' 'include'
     && lk != 1153870               // '{' 'break' 'include'
     && lk != 1154254               // '{' 'continue' 'include'
     && lk != 1163709               // 'f32' Identifier 'local'
     && lk != 1163710               // 'f64' Identifier 'local'
     && lk != 1163714               // 'i32' Identifier 'local'
     && lk != 1163715               // 'i64' Identifier 'local'
     && lk != 1163726               // '{' Identifier 'local'
     && lk != 1163854               // '{' Character 'local'
     && lk != 1163982               // '{' String 'local'
     && lk != 1164110               // '{' Integer 'local'
     && lk != 1164238               // '{' Complex 'local'
     && lk != 1164366               // '{' Real 'local'
     && lk != 1164494               // '{' Comment 'local'
     && lk != 1168078               // '{' ';' 'local'
     && lk != 1170254               // '{' 'break' 'local'
     && lk != 1170638               // '{' 'continue' 'local'
     && lk != 1180093               // 'f32' Identifier 'return'
     && lk != 1180094               // 'f64' Identifier 'return'
     && lk != 1180098               // 'i32' Identifier 'return'
     && lk != 1180099               // 'i64' Identifier 'return'
     && lk != 1180110               // '{' Identifier 'return'
     && lk != 1180238               // '{' Character 'return'
     && lk != 1180366               // '{' String 'return'
     && lk != 1180494               // '{' Integer 'return'
     && lk != 1180622               // '{' Complex 'return'
     && lk != 1180750               // '{' Real 'return'
     && lk != 1180878               // '{' Comment 'return'
     && lk != 1184462               // '{' ';' 'return'
     && lk != 1186638               // '{' 'break' 'return'
     && lk != 1187022               // '{' 'continue' 'return'
     && lk != 1196477               // 'f32' Identifier 'switch'
     && lk != 1196478               // 'f64' Identifier 'switch'
     && lk != 1196482               // 'i32' Identifier 'switch'
     && lk != 1196483               // 'i64' Identifier 'switch'
     && lk != 1196494               // '{' Identifier 'switch'
     && lk != 1196622               // '{' Character 'switch'
     && lk != 1196750               // '{' String 'switch'
     && lk != 1196878               // '{' Integer 'switch'
     && lk != 1197006               // '{' Complex 'switch'
     && lk != 1197134               // '{' Real 'switch'
     && lk != 1197262               // '{' Comment 'switch'
     && lk != 1200846               // '{' ';' 'switch'
     && lk != 1203022               // '{' 'break' 'switch'
     && lk != 1203406               // '{' 'continue' 'switch'
     && lk != 1212861               // 'f32' Identifier 'test'
     && lk != 1212862               // 'f64' Identifier 'test'
     && lk != 1212866               // 'i32' Identifier 'test'
     && lk != 1212867               // 'i64' Identifier 'test'
     && lk != 1212878               // '{' Identifier 'test'
     && lk != 1213006               // '{' Character 'test'
     && lk != 1213134               // '{' String 'test'
     && lk != 1213262               // '{' Integer 'test'
     && lk != 1213390               // '{' Complex 'test'
     && lk != 1213518               // '{' Real 'test'
     && lk != 1213646               // '{' Comment 'test'
     && lk != 1217230               // '{' ';' 'test'
     && lk != 1219406               // '{' 'break' 'test'
     && lk != 1219790               // '{' 'continue' 'test'
     && lk != 1229245               // 'f32' Identifier 'throw'
     && lk != 1229246               // 'f64' Identifier 'throw'
     && lk != 1229250               // 'i32' Identifier 'throw'
     && lk != 1229251               // 'i64' Identifier 'throw'
     && lk != 1229262               // '{' Identifier 'throw'
     && lk != 1229390               // '{' Character 'throw'
     && lk != 1229518               // '{' String 'throw'
     && lk != 1229646               // '{' Integer 'throw'
     && lk != 1229774               // '{' Complex 'throw'
     && lk != 1229902               // '{' Real 'throw'
     && lk != 1230030               // '{' Comment 'throw'
     && lk != 1233614               // '{' ';' 'throw'
     && lk != 1235790               // '{' 'break' 'throw'
     && lk != 1236174               // '{' 'continue' 'throw'
     && lk != 1245629               // 'f32' Identifier 'try'
     && lk != 1245630               // 'f64' Identifier 'try'
     && lk != 1245634               // 'i32' Identifier 'try'
     && lk != 1245635               // 'i64' Identifier 'try'
     && lk != 1245646               // '{' Identifier 'try'
     && lk != 1245774               // '{' Character 'try'
     && lk != 1245902               // '{' String 'try'
     && lk != 1246030               // '{' Integer 'try'
     && lk != 1246158               // '{' Complex 'try'
     && lk != 1246286               // '{' Real 'try'
     && lk != 1246414               // '{' Comment 'try'
     && lk != 1249998               // '{' ';' 'try'
     && lk != 1252174               // '{' 'break' 'try'
     && lk != 1252558               // '{' 'continue' 'try'
     && lk != 1262013               // 'f32' Identifier 'while'
     && lk != 1262014               // 'f64' Identifier 'while'
     && lk != 1262018               // 'i32' Identifier 'while'
     && lk != 1262019               // 'i64' Identifier 'while'
     && lk != 1262030               // '{' Identifier 'while'
     && lk != 1262158               // '{' Character 'while'
     && lk != 1262286               // '{' String 'while'
     && lk != 1262414               // '{' Integer 'while'
     && lk != 1262542               // '{' Complex 'while'
     && lk != 1262670               // '{' Real 'while'
     && lk != 1262798               // '{' Comment 'while'
     && lk != 1266382               // '{' ';' 'while'
     && lk != 1268558               // '{' 'break' 'while'
     && lk != 1268942               // '{' 'continue' 'while'
     && lk != 1278397               // 'f32' Identifier '{'
     && lk != 1278398               // 'f64' Identifier '{'
     && lk != 1278402               // 'i32' Identifier '{'
     && lk != 1278403               // 'i64' Identifier '{'
     && lk != 1278542               // '{' Character '{'
     && lk != 1278670               // '{' String '{'
     && lk != 1278798               // '{' Integer '{'
     && lk != 1278926               // '{' Complex '{'
     && lk != 1279054               // '{' Real '{'
     && lk != 1279182               // '{' Comment '{'
     && lk != 1282766               // '{' ';' '{'
     && lk != 1284942               // '{' 'break' '{'
     && lk != 1285326               // '{' 'continue' '{'
     && lk != 1294781               // 'f32' Identifier '|'
     && lk != 1294782               // 'f64' Identifier '|'
     && lk != 1294786               // 'i32' Identifier '|'
     && lk != 1294787               // 'i64' Identifier '|'
     && lk != 1304910               // '{' '}' '|'
     && lk != 1311165               // 'f32' Identifier '|='
     && lk != 1311166               // 'f64' Identifier '|='
     && lk != 1311170               // 'i32' Identifier '|='
     && lk != 1311171               // 'i64' Identifier '|='
     && lk != 1321294               // '{' '}' '|='
     && lk != 1327549               // 'f32' Identifier '||'
     && lk != 1327550               // 'f64' Identifier '||'
     && lk != 1327554               // 'i32' Identifier '||'
     && lk != 1327555               // 'i64' Identifier '||'
     && lk != 1337678               // '{' '}' '||'
     && lk != 1343933               // 'f32' Identifier '}'
     && lk != 1343934               // 'f64' Identifier '}'
     && lk != 1343938               // 'i32' Identifier '}'
     && lk != 1343939               // 'i64' Identifier '}'
     && lk != 1360317               // 'f32' Identifier '~'
     && lk != 1360318               // 'f64' Identifier '~'
     && lk != 1360322               // 'i32' Identifier '~'
     && lk != 1360323               // 'i64' Identifier '~'
     && lk != 1360334               // '{' Identifier '~'
     && lk != 1360462               // '{' Character '~'
     && lk != 1360590               // '{' String '~'
     && lk != 1360718               // '{' Integer '~'
     && lk != 1360846               // '{' Complex '~'
     && lk != 1360974               // '{' Real '~'
     && lk != 1361102               // '{' Comment '~'
     && lk != 1364686               // '{' ';' '~'
     && lk != 1366862               // '{' 'break' '~'
     && lk != 1367246)              // '{' 'continue' '~'
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
    case 49614:                     // '{' Identifier Identifier
    case 49742:                     // '{' Character Identifier
    case 49870:                     // '{' String Identifier
    case 49998:                     // '{' Integer Identifier
    case 50126:                     // '{' Complex Identifier
    case 50254:                     // '{' Real Identifier
    case 50382:                     // '{' Comment Identifier
    case 53966:                     // '{' ';' Identifier
    case 56142:                     // '{' 'break' Identifier
    case 56526:                     // '{' 'continue' Identifier
    case 65998:                     // '{' Identifier Character
    case 66126:                     // '{' Character Character
    case 66254:                     // '{' String Character
    case 66382:                     // '{' Integer Character
    case 66510:                     // '{' Complex Character
    case 66638:                     // '{' Real Character
    case 66766:                     // '{' Comment Character
    case 70350:                     // '{' ';' Character
    case 72526:                     // '{' 'break' Character
    case 72910:                     // '{' 'continue' Character
    case 82382:                     // '{' Identifier String
    case 82510:                     // '{' Character String
    case 82638:                     // '{' String String
    case 82766:                     // '{' Integer String
    case 82894:                     // '{' Complex String
    case 83022:                     // '{' Real String
    case 83150:                     // '{' Comment String
    case 86734:                     // '{' ';' String
    case 88910:                     // '{' 'break' String
    case 89294:                     // '{' 'continue' String
    case 98766:                     // '{' Identifier Integer
    case 98894:                     // '{' Character Integer
    case 99022:                     // '{' String Integer
    case 99150:                     // '{' Integer Integer
    case 99278:                     // '{' Complex Integer
    case 99406:                     // '{' Real Integer
    case 99534:                     // '{' Comment Integer
    case 103118:                    // '{' ';' Integer
    case 105294:                    // '{' 'break' Integer
    case 105678:                    // '{' 'continue' Integer
    case 115150:                    // '{' Identifier Complex
    case 115278:                    // '{' Character Complex
    case 115406:                    // '{' String Complex
    case 115534:                    // '{' Integer Complex
    case 115662:                    // '{' Complex Complex
    case 115790:                    // '{' Real Complex
    case 115918:                    // '{' Comment Complex
    case 119502:                    // '{' ';' Complex
    case 121678:                    // '{' 'break' Complex
    case 122062:                    // '{' 'continue' Complex
    case 131534:                    // '{' Identifier Real
    case 131662:                    // '{' Character Real
    case 131790:                    // '{' String Real
    case 131918:                    // '{' Integer Real
    case 132046:                    // '{' Complex Real
    case 132174:                    // '{' Real Real
    case 132302:                    // '{' Comment Real
    case 135886:                    // '{' ';' Real
    case 138062:                    // '{' 'break' Real
    case 138446:                    // '{' 'continue' Real
    case 147918:                    // '{' Identifier Comment
    case 148046:                    // '{' Character Comment
    case 148174:                    // '{' String Comment
    case 148302:                    // '{' Integer Comment
    case 148430:                    // '{' Complex Comment
    case 148558:                    // '{' Real Comment
    case 148686:                    // '{' Comment Comment
    case 152270:                    // '{' ';' Comment
    case 154446:                    // '{' 'break' Comment
    case 154830:                    // '{' 'continue' Comment
    case 197070:                    // '{' Identifier '!'
    case 197198:                    // '{' Character '!'
    case 197326:                    // '{' String '!'
    case 197454:                    // '{' Integer '!'
    case 197582:                    // '{' Complex '!'
    case 197710:                    // '{' Real '!'
    case 197838:                    // '{' Comment '!'
    case 201422:                    // '{' ';' '!'
    case 203598:                    // '{' 'break' '!'
    case 203982:                    // '{' 'continue' '!'
    case 328270:                    // '{' Character '('
    case 328398:                    // '{' String '('
    case 328526:                    // '{' Integer '('
    case 328654:                    // '{' Complex '('
    case 328782:                    // '{' Real '('
    case 328910:                    // '{' Comment '('
    case 332494:                    // '{' ';' '('
    case 334670:                    // '{' 'break' '('
    case 335054:                    // '{' 'continue' '('
    case 410830:                    // '{' Comment '+'
    case 414414:                    // '{' ';' '+'
    case 416590:                    // '{' 'break' '+'
    case 416974:                    // '{' 'continue' '+'
    case 427214:                    // '{' Comment '++'
    case 430798:                    // '{' ';' '++'
    case 432974:                    // '{' 'break' '++'
    case 433358:                    // '{' 'continue' '++'
    case 476366:                    // '{' Comment '-'
    case 479950:                    // '{' ';' '-'
    case 482126:                    // '{' 'break' '-'
    case 482510:                    // '{' 'continue' '-'
    case 492750:                    // '{' Comment '--'
    case 496334:                    // '{' ';' '--'
    case 498510:                    // '{' 'break' '--'
    case 498894:                    // '{' 'continue' '--'
    case 606670:                    // '{' Identifier ';'
    case 606798:                    // '{' Character ';'
    case 606926:                    // '{' String ';'
    case 607054:                    // '{' Integer ';'
    case 607182:                    // '{' Complex ';'
    case 607310:                    // '{' Real ';'
    case 607438:                    // '{' Comment ';'
    case 611022:                    // '{' ';' ';'
    case 613198:                    // '{' 'break' ';'
    case 613582:                    // '{' 'continue' ';'
    case 819790:                    // '{' Character '['
    case 819918:                    // '{' String '['
    case 820046:                    // '{' Integer '['
    case 820174:                    // '{' Complex '['
    case 820302:                    // '{' Real '['
    case 820430:                    // '{' Comment '['
    case 824014:                    // '{' ';' '['
    case 826190:                    // '{' 'break' '['
    case 826574:                    // '{' 'continue' '['
    case 885198:                    // '{' Identifier 'break'
    case 885326:                    // '{' Character 'break'
    case 885454:                    // '{' String 'break'
    case 885582:                    // '{' Integer 'break'
    case 885710:                    // '{' Complex 'break'
    case 885838:                    // '{' Real 'break'
    case 885966:                    // '{' Comment 'break'
    case 889550:                    // '{' ';' 'break'
    case 891726:                    // '{' 'break' 'break'
    case 892110:                    // '{' 'continue' 'break'
    case 934350:                    // '{' Identifier 'continue'
    case 934478:                    // '{' Character 'continue'
    case 934606:                    // '{' String 'continue'
    case 934734:                    // '{' Integer 'continue'
    case 934862:                    // '{' Complex 'continue'
    case 934990:                    // '{' Real 'continue'
    case 935118:                    // '{' Comment 'continue'
    case 938702:                    // '{' ';' 'continue'
    case 940878:                    // '{' 'break' 'continue'
    case 941262:                    // '{' 'continue' 'continue'
    case 967118:                    // '{' Identifier 'do'
    case 967246:                    // '{' Character 'do'
    case 967374:                    // '{' String 'do'
    case 967502:                    // '{' Integer 'do'
    case 967630:                    // '{' Complex 'do'
    case 967758:                    // '{' Real 'do'
    case 967886:                    // '{' Comment 'do'
    case 971470:                    // '{' ';' 'do'
    case 973646:                    // '{' 'break' 'do'
    case 974030:                    // '{' 'continue' 'do'
    case 999886:                    // '{' Identifier 'f32'
    case 1000014:                   // '{' Character 'f32'
    case 1000142:                   // '{' String 'f32'
    case 1000270:                   // '{' Integer 'f32'
    case 1000398:                   // '{' Complex 'f32'
    case 1000526:                   // '{' Real 'f32'
    case 1000654:                   // '{' Comment 'f32'
    case 1004238:                   // '{' ';' 'f32'
    case 1006414:                   // '{' 'break' 'f32'
    case 1006798:                   // '{' 'continue' 'f32'
    case 1016270:                   // '{' Identifier 'f64'
    case 1016398:                   // '{' Character 'f64'
    case 1016526:                   // '{' String 'f64'
    case 1016654:                   // '{' Integer 'f64'
    case 1016782:                   // '{' Complex 'f64'
    case 1016910:                   // '{' Real 'f64'
    case 1017038:                   // '{' Comment 'f64'
    case 1020622:                   // '{' ';' 'f64'
    case 1022798:                   // '{' 'break' 'f64'
    case 1023182:                   // '{' 'continue' 'f64'
    case 1032654:                   // '{' Identifier 'for'
    case 1032782:                   // '{' Character 'for'
    case 1032910:                   // '{' String 'for'
    case 1033038:                   // '{' Integer 'for'
    case 1033166:                   // '{' Complex 'for'
    case 1033294:                   // '{' Real 'for'
    case 1033422:                   // '{' Comment 'for'
    case 1037006:                   // '{' ';' 'for'
    case 1039182:                   // '{' 'break' 'for'
    case 1039566:                   // '{' 'continue' 'for'
    case 1049038:                   // '{' Identifier 'foreach'
    case 1049166:                   // '{' Character 'foreach'
    case 1049294:                   // '{' String 'foreach'
    case 1049422:                   // '{' Integer 'foreach'
    case 1049550:                   // '{' Complex 'foreach'
    case 1049678:                   // '{' Real 'foreach'
    case 1049806:                   // '{' Comment 'foreach'
    case 1053390:                   // '{' ';' 'foreach'
    case 1055566:                   // '{' 'break' 'foreach'
    case 1055950:                   // '{' 'continue' 'foreach'
    case 1065422:                   // '{' Identifier 'global'
    case 1065550:                   // '{' Character 'global'
    case 1065678:                   // '{' String 'global'
    case 1065806:                   // '{' Integer 'global'
    case 1065934:                   // '{' Complex 'global'
    case 1066062:                   // '{' Real 'global'
    case 1066190:                   // '{' Comment 'global'
    case 1069774:                   // '{' ';' 'global'
    case 1071950:                   // '{' 'break' 'global'
    case 1072334:                   // '{' 'continue' 'global'
    case 1081806:                   // '{' Identifier 'i32'
    case 1081934:                   // '{' Character 'i32'
    case 1082062:                   // '{' String 'i32'
    case 1082190:                   // '{' Integer 'i32'
    case 1082318:                   // '{' Complex 'i32'
    case 1082446:                   // '{' Real 'i32'
    case 1082574:                   // '{' Comment 'i32'
    case 1086158:                   // '{' ';' 'i32'
    case 1088334:                   // '{' 'break' 'i32'
    case 1088718:                   // '{' 'continue' 'i32'
    case 1098190:                   // '{' Identifier 'i64'
    case 1098318:                   // '{' Character 'i64'
    case 1098446:                   // '{' String 'i64'
    case 1098574:                   // '{' Integer 'i64'
    case 1098702:                   // '{' Complex 'i64'
    case 1098830:                   // '{' Real 'i64'
    case 1098958:                   // '{' Comment 'i64'
    case 1102542:                   // '{' ';' 'i64'
    case 1104718:                   // '{' 'break' 'i64'
    case 1105102:                   // '{' 'continue' 'i64'
    case 1114574:                   // '{' Identifier 'if'
    case 1114702:                   // '{' Character 'if'
    case 1114830:                   // '{' String 'if'
    case 1114958:                   // '{' Integer 'if'
    case 1115086:                   // '{' Complex 'if'
    case 1115214:                   // '{' Real 'if'
    case 1115342:                   // '{' Comment 'if'
    case 1118926:                   // '{' ';' 'if'
    case 1121102:                   // '{' 'break' 'if'
    case 1121486:                   // '{' 'continue' 'if'
    case 1130958:                   // '{' Identifier 'import'
    case 1131086:                   // '{' Character 'import'
    case 1131214:                   // '{' String 'import'
    case 1131342:                   // '{' Integer 'import'
    case 1131470:                   // '{' Complex 'import'
    case 1131598:                   // '{' Real 'import'
    case 1131726:                   // '{' Comment 'import'
    case 1135310:                   // '{' ';' 'import'
    case 1137486:                   // '{' 'break' 'import'
    case 1137870:                   // '{' 'continue' 'import'
    case 1147342:                   // '{' Identifier 'include'
    case 1147470:                   // '{' Character 'include'
    case 1147598:                   // '{' String 'include'
    case 1147726:                   // '{' Integer 'include'
    case 1147854:                   // '{' Complex 'include'
    case 1147982:                   // '{' Real 'include'
    case 1148110:                   // '{' Comment 'include'
    case 1151694:                   // '{' ';' 'include'
    case 1153870:                   // '{' 'break' 'include'
    case 1154254:                   // '{' 'continue' 'include'
    case 1163726:                   // '{' Identifier 'local'
    case 1163854:                   // '{' Character 'local'
    case 1163982:                   // '{' String 'local'
    case 1164110:                   // '{' Integer 'local'
    case 1164238:                   // '{' Complex 'local'
    case 1164366:                   // '{' Real 'local'
    case 1164494:                   // '{' Comment 'local'
    case 1168078:                   // '{' ';' 'local'
    case 1170254:                   // '{' 'break' 'local'
    case 1170638:                   // '{' 'continue' 'local'
    case 1180110:                   // '{' Identifier 'return'
    case 1180238:                   // '{' Character 'return'
    case 1180366:                   // '{' String 'return'
    case 1180494:                   // '{' Integer 'return'
    case 1180622:                   // '{' Complex 'return'
    case 1180750:                   // '{' Real 'return'
    case 1180878:                   // '{' Comment 'return'
    case 1184462:                   // '{' ';' 'return'
    case 1186638:                   // '{' 'break' 'return'
    case 1187022:                   // '{' 'continue' 'return'
    case 1196494:                   // '{' Identifier 'switch'
    case 1196622:                   // '{' Character 'switch'
    case 1196750:                   // '{' String 'switch'
    case 1196878:                   // '{' Integer 'switch'
    case 1197006:                   // '{' Complex 'switch'
    case 1197134:                   // '{' Real 'switch'
    case 1197262:                   // '{' Comment 'switch'
    case 1200846:                   // '{' ';' 'switch'
    case 1203022:                   // '{' 'break' 'switch'
    case 1203406:                   // '{' 'continue' 'switch'
    case 1212878:                   // '{' Identifier 'test'
    case 1213006:                   // '{' Character 'test'
    case 1213134:                   // '{' String 'test'
    case 1213262:                   // '{' Integer 'test'
    case 1213390:                   // '{' Complex 'test'
    case 1213518:                   // '{' Real 'test'
    case 1213646:                   // '{' Comment 'test'
    case 1217230:                   // '{' ';' 'test'
    case 1219406:                   // '{' 'break' 'test'
    case 1219790:                   // '{' 'continue' 'test'
    case 1229262:                   // '{' Identifier 'throw'
    case 1229390:                   // '{' Character 'throw'
    case 1229518:                   // '{' String 'throw'
    case 1229646:                   // '{' Integer 'throw'
    case 1229774:                   // '{' Complex 'throw'
    case 1229902:                   // '{' Real 'throw'
    case 1230030:                   // '{' Comment 'throw'
    case 1233614:                   // '{' ';' 'throw'
    case 1235790:                   // '{' 'break' 'throw'
    case 1236174:                   // '{' 'continue' 'throw'
    case 1245646:                   // '{' Identifier 'try'
    case 1245774:                   // '{' Character 'try'
    case 1245902:                   // '{' String 'try'
    case 1246030:                   // '{' Integer 'try'
    case 1246158:                   // '{' Complex 'try'
    case 1246286:                   // '{' Real 'try'
    case 1246414:                   // '{' Comment 'try'
    case 1249998:                   // '{' ';' 'try'
    case 1252174:                   // '{' 'break' 'try'
    case 1252558:                   // '{' 'continue' 'try'
    case 1262030:                   // '{' Identifier 'while'
    case 1262158:                   // '{' Character 'while'
    case 1262286:                   // '{' String 'while'
    case 1262414:                   // '{' Integer 'while'
    case 1262542:                   // '{' Complex 'while'
    case 1262670:                   // '{' Real 'while'
    case 1262798:                   // '{' Comment 'while'
    case 1266382:                   // '{' ';' 'while'
    case 1268558:                   // '{' 'break' 'while'
    case 1268942:                   // '{' 'continue' 'while'
    case 1278542:                   // '{' Character '{'
    case 1278670:                   // '{' String '{'
    case 1278798:                   // '{' Integer '{'
    case 1278926:                   // '{' Complex '{'
    case 1279054:                   // '{' Real '{'
    case 1279182:                   // '{' Comment '{'
    case 1282766:                   // '{' ';' '{'
    case 1284942:                   // '{' 'break' '{'
    case 1285326:                   // '{' 'continue' '{'
    case 1360334:                   // '{' Identifier '~'
    case 1360462:                   // '{' Character '~'
    case 1360590:                   // '{' String '~'
    case 1360718:                   // '{' Integer '~'
    case 1360846:                   // '{' Complex '~'
    case 1360974:                   // '{' Real '~'
    case 1361102:                   // '{' Comment '~'
    case 1364686:                   // '{' ';' '~'
    case 1366862:                   // '{' 'break' '~'
    case 1367246:                   // '{' 'continue' '~'
      try_Block();
      break;
    case -3:
    case 37:                        // ';'
    case 54:                        // 'break'
    case 57:                        // 'continue'
    case 59:                        // 'do'
    case 63:                        // 'for'
    case 64:                        // 'foreach'
    case 65:                        // 'global'
    case 68:                        // 'if'
    case 69:                        // 'import'
    case 70:                        // 'include'
    case 71:                        // 'local'
    case 72:                        // 'return'
    case 73:                        // 'switch'
    case 74:                        // 'test'
    case 75:                        // 'throw'
    case 76:                        // 'try'
    case 77:                        // 'while'
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
    consume(78);                    // '{'
    for (;;)
    {
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 82)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(82);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(78);                   // '{'
    for (;;)
    {
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 82)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(82);                   // '}'
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
      case 80:                      // '|='
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
        case 464:                   // '|=' Identifier
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
        case 2640:                  // '|=' '('
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
        case 6480:                  // '|=' '['
          lookahead3W(29);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10000:                 // '%=' '{'
        case 10003:                 // '&=' '{'
        case 10008:                 // '*=' '{'
        case 10011:                 // '+=' '{'
        case 10015:                 // '-=' '{'
        case 10018:                 // '/=' '{'
        case 10020:                 // ':=' '{'
        case 10024:                 // '<<=' '{'
        case 10026:                 // '=' '{'
        case 10031:                 // '>>=' '{'
        case 10033:                 // '?=' '{'
        case 10037:                 // '^=' '{'
        case 10064:                 // '|=' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7824:                  // '%=' 'f32'
        case 7952:                  // '%=' 'f64'
        case 8464:                  // '%=' 'i32'
        case 8592:                  // '%=' 'i64'
        case 7827:                  // '&=' 'f32'
        case 7955:                  // '&=' 'f64'
        case 8467:                  // '&=' 'i32'
        case 8595:                  // '&=' 'i64'
        case 7832:                  // '*=' 'f32'
        case 7960:                  // '*=' 'f64'
        case 8472:                  // '*=' 'i32'
        case 8600:                  // '*=' 'i64'
        case 7835:                  // '+=' 'f32'
        case 7963:                  // '+=' 'f64'
        case 8475:                  // '+=' 'i32'
        case 8603:                  // '+=' 'i64'
        case 7839:                  // '-=' 'f32'
        case 7967:                  // '-=' 'f64'
        case 8479:                  // '-=' 'i32'
        case 8607:                  // '-=' 'i64'
        case 7842:                  // '/=' 'f32'
        case 7970:                  // '/=' 'f64'
        case 8482:                  // '/=' 'i32'
        case 8610:                  // '/=' 'i64'
        case 7844:                  // ':=' 'f32'
        case 7972:                  // ':=' 'f64'
        case 8484:                  // ':=' 'i32'
        case 8612:                  // ':=' 'i64'
        case 7848:                  // '<<=' 'f32'
        case 7976:                  // '<<=' 'f64'
        case 8488:                  // '<<=' 'i32'
        case 8616:                  // '<<=' 'i64'
        case 7850:                  // '=' 'f32'
        case 7978:                  // '=' 'f64'
        case 8490:                  // '=' 'i32'
        case 8618:                  // '=' 'i64'
        case 7855:                  // '>>=' 'f32'
        case 7983:                  // '>>=' 'f64'
        case 8495:                  // '>>=' 'i32'
        case 8623:                  // '>>=' 'i64'
        case 7857:                  // '?=' 'f32'
        case 7985:                  // '?=' 'f64'
        case 8497:                  // '?=' 'i32'
        case 8625:                  // '?=' 'i64'
        case 7861:                  // '^=' 'f32'
        case 7989:                  // '^=' 'f64'
        case 8501:                  // '^=' 'i32'
        case 8629:                  // '^=' 'i64'
        case 7888:                  // '|=' 'f32'
        case 8016:                  // '|=' 'f64'
        case 8528:                  // '|=' 'i32'
        case 8656:                  // '|=' 'i64'
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
        case 592:                   // '|=' Character
        case 720:                   // '|=' String
        case 848:                   // '|=' Integer
        case 976:                   // '|=' Complex
        case 1104:                  // '|=' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10640:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10643:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10648:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10651:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10655:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10658:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10660:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10664:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10666:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10671:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10673:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10677:                 // '^=' '~'
        case 1616:                  // '|=' '!'
        case 3280:                  // '|=' '+'
        case 3408:                  // '|=' '++'
        case 3792:                  // '|=' '-'
        case 3920:                  // '|=' '--'
        case 10704:                 // '|=' '~'
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
       && lk != 61                  // 'f32'
       && lk != 62                  // 'f64'
       && lk != 63                  // 'for'
       && lk != 64                  // 'foreach'
       && lk != 65                  // 'global'
       && lk != 66                  // 'i32'
       && lk != 67                  // 'i64'
       && lk != 68                  // 'if'
       && lk != 69                  // 'import'
       && lk != 70                  // 'include'
       && lk != 71                  // 'local'
       && lk != 72                  // 'return'
       && lk != 73                  // 'switch'
       && lk != 74                  // 'test'
       && lk != 75                  // 'throw'
       && lk != 76                  // 'try'
       && lk != 77                  // 'while'
       && lk != 78                  // '{'
       && lk != 82                  // '}'
       && lk != 83)                 // '~'
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
            case 80:                // '|='
              consumeT(80);         // '|='
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
      case 80:                      // '|='
        consume(80);                // '|='
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
      case 80:                      // '|='
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
        case 464:                   // '|=' Identifier
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
        case 2640:                  // '|=' '('
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
        case 6480:                  // '|=' '['
          lookahead3W(29);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10000:                 // '%=' '{'
        case 10003:                 // '&=' '{'
        case 10008:                 // '*=' '{'
        case 10011:                 // '+=' '{'
        case 10015:                 // '-=' '{'
        case 10018:                 // '/=' '{'
        case 10020:                 // ':=' '{'
        case 10024:                 // '<<=' '{'
        case 10026:                 // '=' '{'
        case 10031:                 // '>>=' '{'
        case 10033:                 // '?=' '{'
        case 10037:                 // '^=' '{'
        case 10064:                 // '|=' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7824:                  // '%=' 'f32'
        case 7952:                  // '%=' 'f64'
        case 8464:                  // '%=' 'i32'
        case 8592:                  // '%=' 'i64'
        case 7827:                  // '&=' 'f32'
        case 7955:                  // '&=' 'f64'
        case 8467:                  // '&=' 'i32'
        case 8595:                  // '&=' 'i64'
        case 7832:                  // '*=' 'f32'
        case 7960:                  // '*=' 'f64'
        case 8472:                  // '*=' 'i32'
        case 8600:                  // '*=' 'i64'
        case 7835:                  // '+=' 'f32'
        case 7963:                  // '+=' 'f64'
        case 8475:                  // '+=' 'i32'
        case 8603:                  // '+=' 'i64'
        case 7839:                  // '-=' 'f32'
        case 7967:                  // '-=' 'f64'
        case 8479:                  // '-=' 'i32'
        case 8607:                  // '-=' 'i64'
        case 7842:                  // '/=' 'f32'
        case 7970:                  // '/=' 'f64'
        case 8482:                  // '/=' 'i32'
        case 8610:                  // '/=' 'i64'
        case 7844:                  // ':=' 'f32'
        case 7972:                  // ':=' 'f64'
        case 8484:                  // ':=' 'i32'
        case 8612:                  // ':=' 'i64'
        case 7848:                  // '<<=' 'f32'
        case 7976:                  // '<<=' 'f64'
        case 8488:                  // '<<=' 'i32'
        case 8616:                  // '<<=' 'i64'
        case 7850:                  // '=' 'f32'
        case 7978:                  // '=' 'f64'
        case 8490:                  // '=' 'i32'
        case 8618:                  // '=' 'i64'
        case 7855:                  // '>>=' 'f32'
        case 7983:                  // '>>=' 'f64'
        case 8495:                  // '>>=' 'i32'
        case 8623:                  // '>>=' 'i64'
        case 7857:                  // '?=' 'f32'
        case 7985:                  // '?=' 'f64'
        case 8497:                  // '?=' 'i32'
        case 8625:                  // '?=' 'i64'
        case 7861:                  // '^=' 'f32'
        case 7989:                  // '^=' 'f64'
        case 8501:                  // '^=' 'i32'
        case 8629:                  // '^=' 'i64'
        case 7888:                  // '|=' 'f32'
        case 8016:                  // '|=' 'f64'
        case 8528:                  // '|=' 'i32'
        case 8656:                  // '|=' 'i64'
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
        case 592:                   // '|=' Character
        case 720:                   // '|=' String
        case 848:                   // '|=' Integer
        case 976:                   // '|=' Complex
        case 1104:                  // '|=' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10640:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10643:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10648:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10651:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10655:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10658:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10660:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10664:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10666:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10671:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10673:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10677:                 // '^=' '~'
        case 1616:                  // '|=' '!'
        case 3280:                  // '|=' '+'
        case 3408:                  // '|=' '++'
        case 3792:                  // '|=' '-'
        case 3920:                  // '|=' '--'
        case 10704:                 // '|=' '~'
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
       && lk != 61                  // 'f32'
       && lk != 62                  // 'f64'
       && lk != 63                  // 'for'
       && lk != 64                  // 'foreach'
       && lk != 65                  // 'global'
       && lk != 66                  // 'i32'
       && lk != 67                  // 'i64'
       && lk != 68                  // 'if'
       && lk != 69                  // 'import'
       && lk != 70                  // 'include'
       && lk != 71                  // 'local'
       && lk != 72                  // 'return'
       && lk != 73                  // 'switch'
       && lk != 74                  // 'test'
       && lk != 75                  // 'throw'
       && lk != 76                  // 'try'
       && lk != 77                  // 'while'
       && lk != 78                  // '{'
       && lk != 82                  // '}'
       && lk != 83)                 // '~'
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
            case 80:                // '|='
              consumeT(80);         // '|='
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
      case 80:                      // '|='
        consumeT(80);               // '|='
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
      if (l1 != 81)                 // '||'
      {
        break;
      }
      consume(81);                  // '||'
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
      if (l1 != 81)                 // '||'
      {
        break;
      }
      consumeT(81);                 // '||'
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
      if (l1 != 79)                 // '|'
      {
        break;
      }
      consume(79);                  // '|'
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
      if (l1 != 79)                 // '|'
      {
        break;
      }
      consumeT(79);                 // '|'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
          break;
        case 2585:                  // '+' '('
        case 2589:                  // '-' '('
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(29);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10009:                 // '+' '{'
        case 10013:                 // '-' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7833:                  // '+' 'f32'
        case 7961:                  // '+' 'f64'
        case 8473:                  // '+' 'i32'
        case 8601:                  // '+' 'i64'
        case 7837:                  // '-' 'f32'
        case 7965:                  // '-' 'f64'
        case 8477:                  // '-' 'i32'
        case 8605:                  // '-' 'i64'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
       && lk != 61                  // 'f32'
       && lk != 62                  // 'f64'
       && lk != 63                  // 'for'
       && lk != 64                  // 'foreach'
       && lk != 65                  // 'global'
       && lk != 66                  // 'i32'
       && lk != 67                  // 'i64'
       && lk != 68                  // 'if'
       && lk != 69                  // 'import'
       && lk != 70                  // 'include'
       && lk != 71                  // 'local'
       && lk != 72                  // 'return'
       && lk != 73                  // 'switch'
       && lk != 74                  // 'test'
       && lk != 75                  // 'throw'
       && lk != 76                  // 'try'
       && lk != 77                  // 'while'
       && lk != 78                  // '{'
       && lk != 79                  // '|'
       && lk != 80                  // '|='
       && lk != 81                  // '||'
       && lk != 82                  // '}'
       && lk != 83                  // '~'
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
       && lk != 10649               // '+' '~'
       && lk != 10653               // '-' '~'
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
       || lk == 61                  // 'f32'
       || lk == 62                  // 'f64'
       || lk == 63                  // 'for'
       || lk == 64                  // 'foreach'
       || lk == 65                  // 'global'
       || lk == 66                  // 'i32'
       || lk == 67                  // 'i64'
       || lk == 68                  // 'if'
       || lk == 69                  // 'import'
       || lk == 70                  // 'include'
       || lk == 71                  // 'local'
       || lk == 72                  // 'return'
       || lk == 73                  // 'switch'
       || lk == 74                  // 'test'
       || lk == 75                  // 'throw'
       || lk == 76                  // 'try'
       || lk == 77                  // 'while'
       || lk == 78                  // '{'
       || lk == 79                  // '|'
       || lk == 80                  // '|='
       || lk == 81                  // '||'
       || lk == 82                  // '}'
       || lk == 83)                 // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
          break;
        case 2585:                  // '+' '('
        case 2589:                  // '-' '('
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(29);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 10009:                 // '+' '{'
        case 10013:                 // '-' '{'
          lookahead3W(35);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 7833:                  // '+' 'f32'
        case 7961:                  // '+' 'f64'
        case 8473:                  // '+' 'i32'
        case 8601:                  // '+' 'i64'
        case 7837:                  // '-' 'f32'
        case 7965:                  // '-' 'f64'
        case 8477:                  // '-' 'i32'
        case 8605:                  // '-' 'i64'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
       && lk != 61                  // 'f32'
       && lk != 62                  // 'f64'
       && lk != 63                  // 'for'
       && lk != 64                  // 'foreach'
       && lk != 65                  // 'global'
       && lk != 66                  // 'i32'
       && lk != 67                  // 'i64'
       && lk != 68                  // 'if'
       && lk != 69                  // 'import'
       && lk != 70                  // 'include'
       && lk != 71                  // 'local'
       && lk != 72                  // 'return'
       && lk != 73                  // 'switch'
       && lk != 74                  // 'test'
       && lk != 75                  // 'throw'
       && lk != 76                  // 'try'
       && lk != 77                  // 'while'
       && lk != 78                  // '{'
       && lk != 79                  // '|'
       && lk != 80                  // '|='
       && lk != 81                  // '||'
       && lk != 82                  // '}'
       && lk != 83                  // '~'
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
       && lk != 10649               // '+' '~'
       && lk != 10653               // '-' '~'
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
       || lk == 61                  // 'f32'
       || lk == 62                  // 'f64'
       || lk == 63                  // 'for'
       || lk == 64                  // 'foreach'
       || lk == 65                  // 'global'
       || lk == 66                  // 'i32'
       || lk == 67                  // 'i64'
       || lk == 68                  // 'if'
       || lk == 69                  // 'import'
       || lk == 70                  // 'include'
       || lk == 71                  // 'local'
       || lk == 72                  // 'return'
       || lk == 73                  // 'switch'
       || lk == 74                  // 'test'
       || lk == 75                  // 'throw'
       || lk == 76                  // 'try'
       || lk == 77                  // 'while'
       || lk == 78                  // '{'
       || lk == 79                  // '|'
       || lk == 80                  // '|='
       || lk == 81                  // '||'
       || lk == 82                  // '}'
       || lk == 83)                 // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10004:                   // '(' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(4);             // WhiteSpace^token | ')'
        break;
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8468:                    // '(' 'i32'
      case 8596:                    // '(' 'i64'
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
      case 10644:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8724:                    // '(' 'if'
      case 9364:                    // '(' 'switch'
      case 9492:                    // '(' 'test'
      case 9876:                    // '(' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8340:                    // '(' 'global'
      case 8852:                    // '(' 'import'
      case 8980:                    // '(' 'include'
      case 9108:                    // '(' 'local'
      case 9236:                    // '(' 'return'
      case 9620:                    // '(' 'throw'
      case 9748:                    // '(' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(29);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 10034:                   // '[' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8498:                    // '[' 'i32'
      case 8626:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 946:                     // '[' Complex
      case 1074:                    // '[' Real
        lookahead3W(32);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10674:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8754:                    // '[' 'if'
      case 9394:                    // '[' 'switch'
      case 9522:                    // '[' 'test'
      case 9906:                    // '[' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8370:                    // '[' 'global'
      case 8882:                    // '[' 'import'
      case 9010:                    // '[' 'include'
      case 9138:                    // '[' 'local'
      case 9266:                    // '[' 'return'
      case 9650:                    // '[' 'throw'
      case 9778:                    // '[' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 78:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 462:                     // '{' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 718:                     // '{' String
        lookahead3W(31);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6478:                    // '{' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10062:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 10574:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 590:                     // '{' Character
      case 846:                     // '{' Integer
      case 974:                     // '{' Complex
      case 1102:                    // '{' Real
        lookahead3W(26);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1230:                    // '{' Comment
      case 4814:                    // '{' ';'
      case 6990:                    // '{' 'break'
      case 7374:                    // '{' 'continue'
        lookahead3W(17);            // WhiteSpace^token | ',' | '}'
        break;
      case 7886:                    // '{' 'f32'
      case 8014:                    // '{' 'f64'
      case 8526:                    // '{' 'i32'
      case 8654:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1614:                    // '{' '!'
      case 3278:                    // '{' '+'
      case 3406:                    // '{' '++'
      case 3790:                    // '{' '-'
      case 3918:                    // '{' '--'
      case 10702:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8142:                    // '{' 'for'
      case 8270:                    // '{' 'foreach'
      case 8782:                    // '{' 'if'
      case 9422:                    // '{' 'switch'
      case 9550:                    // '{' 'test'
      case 9934:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2638:                    // '{' '('
      case 3662:                    // '{' ','
      case 7630:                    // '{' 'do'
      case 8398:                    // '{' 'global'
      case 8910:                    // '{' 'import'
      case 9038:                    // '{' 'include'
      case 9166:                    // '{' 'local'
      case 9294:                    // '{' 'return'
      case 9678:                    // '{' 'throw'
      case 9806:                    // '{' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 450:                     // 'i32' Identifier
      case 451:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
     && lk != 83                    // '~'
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
     && lk != 7811                  // Identifier 'f32'
     && lk != 7812                  // Character 'f32'
     && lk != 7813                  // String 'f32'
     && lk != 7814                  // Integer 'f32'
     && lk != 7815                  // Complex 'f32'
     && lk != 7816                  // Real 'f32'
     && lk != 7939                  // Identifier 'f64'
     && lk != 7940                  // Character 'f64'
     && lk != 7941                  // String 'f64'
     && lk != 7942                  // Integer 'f64'
     && lk != 7943                  // Complex 'f64'
     && lk != 7944                  // Real 'f64'
     && lk != 8067                  // Identifier 'for'
     && lk != 8068                  // Character 'for'
     && lk != 8069                  // String 'for'
     && lk != 8070                  // Integer 'for'
     && lk != 8071                  // Complex 'for'
     && lk != 8072                  // Real 'for'
     && lk != 8195                  // Identifier 'foreach'
     && lk != 8196                  // Character 'foreach'
     && lk != 8197                  // String 'foreach'
     && lk != 8198                  // Integer 'foreach'
     && lk != 8199                  // Complex 'foreach'
     && lk != 8200                  // Real 'foreach'
     && lk != 8323                  // Identifier 'global'
     && lk != 8324                  // Character 'global'
     && lk != 8325                  // String 'global'
     && lk != 8326                  // Integer 'global'
     && lk != 8327                  // Complex 'global'
     && lk != 8328                  // Real 'global'
     && lk != 8451                  // Identifier 'i32'
     && lk != 8452                  // Character 'i32'
     && lk != 8453                  // String 'i32'
     && lk != 8454                  // Integer 'i32'
     && lk != 8455                  // Complex 'i32'
     && lk != 8456                  // Real 'i32'
     && lk != 8579                  // Identifier 'i64'
     && lk != 8580                  // Character 'i64'
     && lk != 8581                  // String 'i64'
     && lk != 8582                  // Integer 'i64'
     && lk != 8583                  // Complex 'i64'
     && lk != 8584                  // Real 'i64'
     && lk != 8707                  // Identifier 'if'
     && lk != 8708                  // Character 'if'
     && lk != 8709                  // String 'if'
     && lk != 8710                  // Integer 'if'
     && lk != 8711                  // Complex 'if'
     && lk != 8712                  // Real 'if'
     && lk != 8835                  // Identifier 'import'
     && lk != 8836                  // Character 'import'
     && lk != 8837                  // String 'import'
     && lk != 8838                  // Integer 'import'
     && lk != 8839                  // Complex 'import'
     && lk != 8840                  // Real 'import'
     && lk != 8963                  // Identifier 'include'
     && lk != 8964                  // Character 'include'
     && lk != 8965                  // String 'include'
     && lk != 8966                  // Integer 'include'
     && lk != 8967                  // Complex 'include'
     && lk != 8968                  // Real 'include'
     && lk != 9091                  // Identifier 'local'
     && lk != 9092                  // Character 'local'
     && lk != 9093                  // String 'local'
     && lk != 9094                  // Integer 'local'
     && lk != 9095                  // Complex 'local'
     && lk != 9096                  // Real 'local'
     && lk != 9219                  // Identifier 'return'
     && lk != 9220                  // Character 'return'
     && lk != 9221                  // String 'return'
     && lk != 9222                  // Integer 'return'
     && lk != 9223                  // Complex 'return'
     && lk != 9224                  // Real 'return'
     && lk != 9347                  // Identifier 'switch'
     && lk != 9348                  // Character 'switch'
     && lk != 9349                  // String 'switch'
     && lk != 9350                  // Integer 'switch'
     && lk != 9351                  // Complex 'switch'
     && lk != 9352                  // Real 'switch'
     && lk != 9475                  // Identifier 'test'
     && lk != 9476                  // Character 'test'
     && lk != 9477                  // String 'test'
     && lk != 9478                  // Integer 'test'
     && lk != 9479                  // Complex 'test'
     && lk != 9480                  // Real 'test'
     && lk != 9603                  // Identifier 'throw'
     && lk != 9604                  // Character 'throw'
     && lk != 9605                  // String 'throw'
     && lk != 9606                  // Integer 'throw'
     && lk != 9607                  // Complex 'throw'
     && lk != 9608                  // Real 'throw'
     && lk != 9731                  // Identifier 'try'
     && lk != 9732                  // Character 'try'
     && lk != 9733                  // String 'try'
     && lk != 9734                  // Integer 'try'
     && lk != 9735                  // Complex 'try'
     && lk != 9736                  // Real 'try'
     && lk != 9859                  // Identifier 'while'
     && lk != 9860                  // Character 'while'
     && lk != 9861                  // String 'while'
     && lk != 9862                  // Integer 'while'
     && lk != 9863                  // Complex 'while'
     && lk != 9864                  // Real 'while'
     && lk != 9987                  // Identifier '{'
     && lk != 9988                  // Character '{'
     && lk != 9989                  // String '{'
     && lk != 9990                  // Integer '{'
     && lk != 9991                  // Complex '{'
     && lk != 9992                  // Real '{'
     && lk != 10115                 // Identifier '|'
     && lk != 10116                 // Character '|'
     && lk != 10117                 // String '|'
     && lk != 10118                 // Integer '|'
     && lk != 10119                 // Complex '|'
     && lk != 10120                 // Real '|'
     && lk != 10243                 // Identifier '|='
     && lk != 10244                 // Character '|='
     && lk != 10245                 // String '|='
     && lk != 10246                 // Integer '|='
     && lk != 10247                 // Complex '|='
     && lk != 10248                 // Real '|='
     && lk != 10371                 // Identifier '||'
     && lk != 10372                 // Character '||'
     && lk != 10373                 // String '||'
     && lk != 10374                 // Integer '||'
     && lk != 10375                 // Complex '||'
     && lk != 10376                 // Real '||'
     && lk != 10499                 // Identifier '}'
     && lk != 10500                 // Character '}'
     && lk != 10501                 // String '}'
     && lk != 10502                 // Integer '}'
     && lk != 10503                 // Complex '}'
     && lk != 10504                 // Real '}'
     && lk != 10627                 // Identifier '~'
     && lk != 10628                 // Character '~'
     && lk != 10629                 // String '~'
     && lk != 10630                 // Integer '~'
     && lk != 10631                 // Complex '~'
     && lk != 10632                 // Real '~'
     && lk != 16829                 // 'f32' Identifier END
     && lk != 16830                 // 'f64' Identifier END
     && lk != 16834                 // 'i32' Identifier END
     && lk != 16835                 // 'i64' Identifier END
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
     && lk != 26958                 // '{' '}' END
     && lk != 49597                 // 'f32' Identifier Identifier
     && lk != 49598                 // 'f64' Identifier Identifier
     && lk != 49602                 // 'i32' Identifier Identifier
     && lk != 49603                 // 'i64' Identifier Identifier
     && lk != 55730                 // '[' ']' Identifier
     && lk != 59726                 // '{' '}' Identifier
     && lk != 65981                 // 'f32' Identifier Character
     && lk != 65982                 // 'f64' Identifier Character
     && lk != 65986                 // 'i32' Identifier Character
     && lk != 65987                 // 'i64' Identifier Character
     && lk != 72114                 // '[' ']' Character
     && lk != 76110                 // '{' '}' Character
     && lk != 82365                 // 'f32' Identifier String
     && lk != 82366                 // 'f64' Identifier String
     && lk != 82370                 // 'i32' Identifier String
     && lk != 82371                 // 'i64' Identifier String
     && lk != 88498                 // '[' ']' String
     && lk != 92494                 // '{' '}' String
     && lk != 98749                 // 'f32' Identifier Integer
     && lk != 98750                 // 'f64' Identifier Integer
     && lk != 98754                 // 'i32' Identifier Integer
     && lk != 98755                 // 'i64' Identifier Integer
     && lk != 104882                // '[' ']' Integer
     && lk != 108878                // '{' '}' Integer
     && lk != 115133                // 'f32' Identifier Complex
     && lk != 115134                // 'f64' Identifier Complex
     && lk != 115138                // 'i32' Identifier Complex
     && lk != 115139                // 'i64' Identifier Complex
     && lk != 121266                // '[' ']' Complex
     && lk != 125262                // '{' '}' Complex
     && lk != 131517                // 'f32' Identifier Real
     && lk != 131518                // 'f64' Identifier Real
     && lk != 131522                // 'i32' Identifier Real
     && lk != 131523                // 'i64' Identifier Real
     && lk != 137650                // '[' ']' Real
     && lk != 141646                // '{' '}' Real
     && lk != 147901                // 'f32' Identifier Comment
     && lk != 147902                // 'f64' Identifier Comment
     && lk != 147906                // 'i32' Identifier Comment
     && lk != 147907                // 'i64' Identifier Comment
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
     && lk != 158030                // '{' '}' Comment
     && lk != 197053                // 'f32' Identifier '!'
     && lk != 197054                // 'f64' Identifier '!'
     && lk != 197058                // 'i32' Identifier '!'
     && lk != 197059                // 'i64' Identifier '!'
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
     && lk != 207182                // '{' '}' '!'
     && lk != 213437                // 'f32' Identifier '!='
     && lk != 213438                // 'f64' Identifier '!='
     && lk != 213442                // 'i32' Identifier '!='
     && lk != 213443                // 'i64' Identifier '!='
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
     && lk != 223566                // '{' '}' '!='
     && lk != 246205                // 'f32' Identifier '%'
     && lk != 246206                // 'f64' Identifier '%'
     && lk != 246210                // 'i32' Identifier '%'
     && lk != 246211                // 'i64' Identifier '%'
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
     && lk != 256334                // '{' '}' '%'
     && lk != 262589                // 'f32' Identifier '%='
     && lk != 262590                // 'f64' Identifier '%='
     && lk != 262594                // 'i32' Identifier '%='
     && lk != 262595                // 'i64' Identifier '%='
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
     && lk != 272718                // '{' '}' '%='
     && lk != 278973                // 'f32' Identifier '&'
     && lk != 278974                // 'f64' Identifier '&'
     && lk != 278978                // 'i32' Identifier '&'
     && lk != 278979                // 'i64' Identifier '&'
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
     && lk != 289102                // '{' '}' '&'
     && lk != 295357                // 'f32' Identifier '&&'
     && lk != 295358                // 'f64' Identifier '&&'
     && lk != 295362                // 'i32' Identifier '&&'
     && lk != 295363                // 'i64' Identifier '&&'
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
     && lk != 305486                // '{' '}' '&&'
     && lk != 311741                // 'f32' Identifier '&='
     && lk != 311742                // 'f64' Identifier '&='
     && lk != 311746                // 'i32' Identifier '&='
     && lk != 311747                // 'i64' Identifier '&='
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
     && lk != 321870                // '{' '}' '&='
     && lk != 334258                // '[' ']' '('
     && lk != 338254                // '{' '}' '('
     && lk != 344509                // 'f32' Identifier ')'
     && lk != 344510                // 'f64' Identifier ')'
     && lk != 344514                // 'i32' Identifier ')'
     && lk != 344515                // 'i64' Identifier ')'
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
     && lk != 354638                // '{' '}' ')'
     && lk != 360893                // 'f32' Identifier '*'
     && lk != 360894                // 'f64' Identifier '*'
     && lk != 360898                // 'i32' Identifier '*'
     && lk != 360899                // 'i64' Identifier '*'
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
     && lk != 371022                // '{' '}' '*'
     && lk != 377277                // 'f32' Identifier '**'
     && lk != 377278                // 'f64' Identifier '**'
     && lk != 377282                // 'i32' Identifier '**'
     && lk != 377283                // 'i64' Identifier '**'
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
     && lk != 387406                // '{' '}' '**'
     && lk != 393661                // 'f32' Identifier '*='
     && lk != 393662                // 'f64' Identifier '*='
     && lk != 393666                // 'i32' Identifier '*='
     && lk != 393667                // 'i64' Identifier '*='
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
     && lk != 403790                // '{' '}' '*='
     && lk != 410045                // 'f32' Identifier '+'
     && lk != 410046                // 'f64' Identifier '+'
     && lk != 410050                // 'i32' Identifier '+'
     && lk != 410051                // 'i64' Identifier '+'
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
     && lk != 420174                // '{' '}' '+'
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
     && lk != 442813                // 'f32' Identifier '+='
     && lk != 442814                // 'f64' Identifier '+='
     && lk != 442818                // 'i32' Identifier '+='
     && lk != 442819                // 'i64' Identifier '+='
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
     && lk != 452942                // '{' '}' '+='
     && lk != 459197                // 'f32' Identifier ','
     && lk != 459198                // 'f64' Identifier ','
     && lk != 459202                // 'i32' Identifier ','
     && lk != 459203                // 'i64' Identifier ','
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
     && lk != 469326                // '{' '}' ','
     && lk != 475581                // 'f32' Identifier '-'
     && lk != 475582                // 'f64' Identifier '-'
     && lk != 475586                // 'i32' Identifier '-'
     && lk != 475587                // 'i64' Identifier '-'
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
     && lk != 485710                // '{' '}' '-'
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
     && lk != 508349                // 'f32' Identifier '-='
     && lk != 508350                // 'f64' Identifier '-='
     && lk != 508354                // 'i32' Identifier '-='
     && lk != 508355                // 'i64' Identifier '-='
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
     && lk != 518478                // '{' '}' '-='
     && lk != 541117                // 'f32' Identifier '/'
     && lk != 541118                // 'f64' Identifier '/'
     && lk != 541122                // 'i32' Identifier '/'
     && lk != 541123                // 'i64' Identifier '/'
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
     && lk != 551246                // '{' '}' '/'
     && lk != 557501                // 'f32' Identifier '/='
     && lk != 557502                // 'f64' Identifier '/='
     && lk != 557506                // 'i32' Identifier '/='
     && lk != 557507                // 'i64' Identifier '/='
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
     && lk != 567630                // '{' '}' '/='
     && lk != 573885                // 'f32' Identifier ':'
     && lk != 573886                // 'f64' Identifier ':'
     && lk != 573890                // 'i32' Identifier ':'
     && lk != 573891                // 'i64' Identifier ':'
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
     && lk != 584014                // '{' '}' ':'
     && lk != 590269                // 'f32' Identifier ':='
     && lk != 590270                // 'f64' Identifier ':='
     && lk != 590274                // 'i32' Identifier ':='
     && lk != 590275                // 'i64' Identifier ':='
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
     && lk != 600398                // '{' '}' ':='
     && lk != 606653                // 'f32' Identifier ';'
     && lk != 606654                // 'f64' Identifier ';'
     && lk != 606658                // 'i32' Identifier ';'
     && lk != 606659                // 'i64' Identifier ';'
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
     && lk != 616782                // '{' '}' ';'
     && lk != 623037                // 'f32' Identifier '<'
     && lk != 623038                // 'f64' Identifier '<'
     && lk != 623042                // 'i32' Identifier '<'
     && lk != 623043                // 'i64' Identifier '<'
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
     && lk != 633166                // '{' '}' '<'
     && lk != 639421                // 'f32' Identifier '<<'
     && lk != 639422                // 'f64' Identifier '<<'
     && lk != 639426                // 'i32' Identifier '<<'
     && lk != 639427                // 'i64' Identifier '<<'
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
     && lk != 649550                // '{' '}' '<<'
     && lk != 655805                // 'f32' Identifier '<<='
     && lk != 655806                // 'f64' Identifier '<<='
     && lk != 655810                // 'i32' Identifier '<<='
     && lk != 655811                // 'i64' Identifier '<<='
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
     && lk != 665934                // '{' '}' '<<='
     && lk != 672189                // 'f32' Identifier '<='
     && lk != 672190                // 'f64' Identifier '<='
     && lk != 672194                // 'i32' Identifier '<='
     && lk != 672195                // 'i64' Identifier '<='
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
     && lk != 682318                // '{' '}' '<='
     && lk != 688573                // 'f32' Identifier '='
     && lk != 688574                // 'f64' Identifier '='
     && lk != 688578                // 'i32' Identifier '='
     && lk != 688579                // 'i64' Identifier '='
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
     && lk != 698702                // '{' '}' '='
     && lk != 704957                // 'f32' Identifier '=='
     && lk != 704958                // 'f64' Identifier '=='
     && lk != 704962                // 'i32' Identifier '=='
     && lk != 704963                // 'i64' Identifier '=='
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
     && lk != 715086                // '{' '}' '=='
     && lk != 721341                // 'f32' Identifier '>'
     && lk != 721342                // 'f64' Identifier '>'
     && lk != 721346                // 'i32' Identifier '>'
     && lk != 721347                // 'i64' Identifier '>'
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
     && lk != 731470                // '{' '}' '>'
     && lk != 737725                // 'f32' Identifier '>='
     && lk != 737726                // 'f64' Identifier '>='
     && lk != 737730                // 'i32' Identifier '>='
     && lk != 737731                // 'i64' Identifier '>='
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
     && lk != 747854                // '{' '}' '>='
     && lk != 754109                // 'f32' Identifier '>>'
     && lk != 754110                // 'f64' Identifier '>>'
     && lk != 754114                // 'i32' Identifier '>>'
     && lk != 754115                // 'i64' Identifier '>>'
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
     && lk != 764238                // '{' '}' '>>'
     && lk != 770493                // 'f32' Identifier '>>='
     && lk != 770494                // 'f64' Identifier '>>='
     && lk != 770498                // 'i32' Identifier '>>='
     && lk != 770499                // 'i64' Identifier '>>='
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
     && lk != 780622                // '{' '}' '>>='
     && lk != 786877                // 'f32' Identifier '?'
     && lk != 786878                // 'f64' Identifier '?'
     && lk != 786882                // 'i32' Identifier '?'
     && lk != 786883                // 'i64' Identifier '?'
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
     && lk != 797006                // '{' '}' '?'
     && lk != 803261                // 'f32' Identifier '?='
     && lk != 803262                // 'f64' Identifier '?='
     && lk != 803266                // 'i32' Identifier '?='
     && lk != 803267                // 'i64' Identifier '?='
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
     && lk != 813390                // '{' '}' '?='
     && lk != 825778                // '[' ']' '['
     && lk != 829774                // '{' '}' '['
     && lk != 836029                // 'f32' Identifier ']'
     && lk != 836030                // 'f64' Identifier ']'
     && lk != 836034                // 'i32' Identifier ']'
     && lk != 836035                // 'i64' Identifier ']'
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
     && lk != 846158                // '{' '}' ']'
     && lk != 852413                // 'f32' Identifier '^'
     && lk != 852414                // 'f64' Identifier '^'
     && lk != 852418                // 'i32' Identifier '^'
     && lk != 852419                // 'i64' Identifier '^'
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
     && lk != 862542                // '{' '}' '^'
     && lk != 868797                // 'f32' Identifier '^='
     && lk != 868798                // 'f64' Identifier '^='
     && lk != 868802                // 'i32' Identifier '^='
     && lk != 868803                // 'i64' Identifier '^='
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
     && lk != 878926                // '{' '}' '^='
     && lk != 885181                // 'f32' Identifier 'break'
     && lk != 885182                // 'f64' Identifier 'break'
     && lk != 885186                // 'i32' Identifier 'break'
     && lk != 885187                // 'i64' Identifier 'break'
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
     && lk != 895310                // '{' '}' 'break'
     && lk != 901565                // 'f32' Identifier 'case'
     && lk != 901566                // 'f64' Identifier 'case'
     && lk != 901570                // 'i32' Identifier 'case'
     && lk != 901571                // 'i64' Identifier 'case'
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
     && lk != 911694                // '{' '}' 'case'
     && lk != 917949                // 'f32' Identifier 'catch'
     && lk != 917950                // 'f64' Identifier 'catch'
     && lk != 917954                // 'i32' Identifier 'catch'
     && lk != 917955                // 'i64' Identifier 'catch'
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
     && lk != 928078                // '{' '}' 'catch'
     && lk != 934333                // 'f32' Identifier 'continue'
     && lk != 934334                // 'f64' Identifier 'continue'
     && lk != 934338                // 'i32' Identifier 'continue'
     && lk != 934339                // 'i64' Identifier 'continue'
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
     && lk != 944462                // '{' '}' 'continue'
     && lk != 950717                // 'f32' Identifier 'default'
     && lk != 950718                // 'f64' Identifier 'default'
     && lk != 950722                // 'i32' Identifier 'default'
     && lk != 950723                // 'i64' Identifier 'default'
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
     && lk != 960846                // '{' '}' 'default'
     && lk != 967101                // 'f32' Identifier 'do'
     && lk != 967102                // 'f64' Identifier 'do'
     && lk != 967106                // 'i32' Identifier 'do'
     && lk != 967107                // 'i64' Identifier 'do'
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
     && lk != 977230                // '{' '}' 'do'
     && lk != 983485                // 'f32' Identifier 'else'
     && lk != 983486                // 'f64' Identifier 'else'
     && lk != 983490                // 'i32' Identifier 'else'
     && lk != 983491                // 'i64' Identifier 'else'
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
     && lk != 993614                // '{' '}' 'else'
     && lk != 999869                // 'f32' Identifier 'f32'
     && lk != 999870                // 'f64' Identifier 'f32'
     && lk != 999874                // 'i32' Identifier 'f32'
     && lk != 999875                // 'i64' Identifier 'f32'
     && lk != 1006002               // '[' ']' 'f32'
     && lk != 1009998               // '{' '}' 'f32'
     && lk != 1016253               // 'f32' Identifier 'f64'
     && lk != 1016254               // 'f64' Identifier 'f64'
     && lk != 1016258               // 'i32' Identifier 'f64'
     && lk != 1016259               // 'i64' Identifier 'f64'
     && lk != 1022386               // '[' ']' 'f64'
     && lk != 1026382               // '{' '}' 'f64'
     && lk != 1032637               // 'f32' Identifier 'for'
     && lk != 1032638               // 'f64' Identifier 'for'
     && lk != 1032642               // 'i32' Identifier 'for'
     && lk != 1032643               // 'i64' Identifier 'for'
     && lk != 1035523               // Identifier '++' 'for'
     && lk != 1035524               // Character '++' 'for'
     && lk != 1035525               // String '++' 'for'
     && lk != 1035526               // Integer '++' 'for'
     && lk != 1035527               // Complex '++' 'for'
     && lk != 1035528               // Real '++' 'for'
     && lk != 1036035               // Identifier '--' 'for'
     && lk != 1036036               // Character '--' 'for'
     && lk != 1036037               // String '--' 'for'
     && lk != 1036038               // Integer '--' 'for'
     && lk != 1036039               // Complex '--' 'for'
     && lk != 1036040               // Real '--' 'for'
     && lk != 1038770               // '[' ']' 'for'
     && lk != 1042766               // '{' '}' 'for'
     && lk != 1049021               // 'f32' Identifier 'foreach'
     && lk != 1049022               // 'f64' Identifier 'foreach'
     && lk != 1049026               // 'i32' Identifier 'foreach'
     && lk != 1049027               // 'i64' Identifier 'foreach'
     && lk != 1051907               // Identifier '++' 'foreach'
     && lk != 1051908               // Character '++' 'foreach'
     && lk != 1051909               // String '++' 'foreach'
     && lk != 1051910               // Integer '++' 'foreach'
     && lk != 1051911               // Complex '++' 'foreach'
     && lk != 1051912               // Real '++' 'foreach'
     && lk != 1052419               // Identifier '--' 'foreach'
     && lk != 1052420               // Character '--' 'foreach'
     && lk != 1052421               // String '--' 'foreach'
     && lk != 1052422               // Integer '--' 'foreach'
     && lk != 1052423               // Complex '--' 'foreach'
     && lk != 1052424               // Real '--' 'foreach'
     && lk != 1055154               // '[' ']' 'foreach'
     && lk != 1059150               // '{' '}' 'foreach'
     && lk != 1065405               // 'f32' Identifier 'global'
     && lk != 1065406               // 'f64' Identifier 'global'
     && lk != 1065410               // 'i32' Identifier 'global'
     && lk != 1065411               // 'i64' Identifier 'global'
     && lk != 1068291               // Identifier '++' 'global'
     && lk != 1068292               // Character '++' 'global'
     && lk != 1068293               // String '++' 'global'
     && lk != 1068294               // Integer '++' 'global'
     && lk != 1068295               // Complex '++' 'global'
     && lk != 1068296               // Real '++' 'global'
     && lk != 1068803               // Identifier '--' 'global'
     && lk != 1068804               // Character '--' 'global'
     && lk != 1068805               // String '--' 'global'
     && lk != 1068806               // Integer '--' 'global'
     && lk != 1068807               // Complex '--' 'global'
     && lk != 1068808               // Real '--' 'global'
     && lk != 1071538               // '[' ']' 'global'
     && lk != 1075534               // '{' '}' 'global'
     && lk != 1081789               // 'f32' Identifier 'i32'
     && lk != 1081790               // 'f64' Identifier 'i32'
     && lk != 1081794               // 'i32' Identifier 'i32'
     && lk != 1081795               // 'i64' Identifier 'i32'
     && lk != 1087922               // '[' ']' 'i32'
     && lk != 1091918               // '{' '}' 'i32'
     && lk != 1098173               // 'f32' Identifier 'i64'
     && lk != 1098174               // 'f64' Identifier 'i64'
     && lk != 1098178               // 'i32' Identifier 'i64'
     && lk != 1098179               // 'i64' Identifier 'i64'
     && lk != 1104306               // '[' ']' 'i64'
     && lk != 1108302               // '{' '}' 'i64'
     && lk != 1114557               // 'f32' Identifier 'if'
     && lk != 1114558               // 'f64' Identifier 'if'
     && lk != 1114562               // 'i32' Identifier 'if'
     && lk != 1114563               // 'i64' Identifier 'if'
     && lk != 1117443               // Identifier '++' 'if'
     && lk != 1117444               // Character '++' 'if'
     && lk != 1117445               // String '++' 'if'
     && lk != 1117446               // Integer '++' 'if'
     && lk != 1117447               // Complex '++' 'if'
     && lk != 1117448               // Real '++' 'if'
     && lk != 1117955               // Identifier '--' 'if'
     && lk != 1117956               // Character '--' 'if'
     && lk != 1117957               // String '--' 'if'
     && lk != 1117958               // Integer '--' 'if'
     && lk != 1117959               // Complex '--' 'if'
     && lk != 1117960               // Real '--' 'if'
     && lk != 1120690               // '[' ']' 'if'
     && lk != 1124686               // '{' '}' 'if'
     && lk != 1130941               // 'f32' Identifier 'import'
     && lk != 1130942               // 'f64' Identifier 'import'
     && lk != 1130946               // 'i32' Identifier 'import'
     && lk != 1130947               // 'i64' Identifier 'import'
     && lk != 1133827               // Identifier '++' 'import'
     && lk != 1133828               // Character '++' 'import'
     && lk != 1133829               // String '++' 'import'
     && lk != 1133830               // Integer '++' 'import'
     && lk != 1133831               // Complex '++' 'import'
     && lk != 1133832               // Real '++' 'import'
     && lk != 1134339               // Identifier '--' 'import'
     && lk != 1134340               // Character '--' 'import'
     && lk != 1134341               // String '--' 'import'
     && lk != 1134342               // Integer '--' 'import'
     && lk != 1134343               // Complex '--' 'import'
     && lk != 1134344               // Real '--' 'import'
     && lk != 1137074               // '[' ']' 'import'
     && lk != 1141070               // '{' '}' 'import'
     && lk != 1147325               // 'f32' Identifier 'include'
     && lk != 1147326               // 'f64' Identifier 'include'
     && lk != 1147330               // 'i32' Identifier 'include'
     && lk != 1147331               // 'i64' Identifier 'include'
     && lk != 1150211               // Identifier '++' 'include'
     && lk != 1150212               // Character '++' 'include'
     && lk != 1150213               // String '++' 'include'
     && lk != 1150214               // Integer '++' 'include'
     && lk != 1150215               // Complex '++' 'include'
     && lk != 1150216               // Real '++' 'include'
     && lk != 1150723               // Identifier '--' 'include'
     && lk != 1150724               // Character '--' 'include'
     && lk != 1150725               // String '--' 'include'
     && lk != 1150726               // Integer '--' 'include'
     && lk != 1150727               // Complex '--' 'include'
     && lk != 1150728               // Real '--' 'include'
     && lk != 1153458               // '[' ']' 'include'
     && lk != 1157454               // '{' '}' 'include'
     && lk != 1163709               // 'f32' Identifier 'local'
     && lk != 1163710               // 'f64' Identifier 'local'
     && lk != 1163714               // 'i32' Identifier 'local'
     && lk != 1163715               // 'i64' Identifier 'local'
     && lk != 1166595               // Identifier '++' 'local'
     && lk != 1166596               // Character '++' 'local'
     && lk != 1166597               // String '++' 'local'
     && lk != 1166598               // Integer '++' 'local'
     && lk != 1166599               // Complex '++' 'local'
     && lk != 1166600               // Real '++' 'local'
     && lk != 1167107               // Identifier '--' 'local'
     && lk != 1167108               // Character '--' 'local'
     && lk != 1167109               // String '--' 'local'
     && lk != 1167110               // Integer '--' 'local'
     && lk != 1167111               // Complex '--' 'local'
     && lk != 1167112               // Real '--' 'local'
     && lk != 1169842               // '[' ']' 'local'
     && lk != 1173838               // '{' '}' 'local'
     && lk != 1180093               // 'f32' Identifier 'return'
     && lk != 1180094               // 'f64' Identifier 'return'
     && lk != 1180098               // 'i32' Identifier 'return'
     && lk != 1180099               // 'i64' Identifier 'return'
     && lk != 1182979               // Identifier '++' 'return'
     && lk != 1182980               // Character '++' 'return'
     && lk != 1182981               // String '++' 'return'
     && lk != 1182982               // Integer '++' 'return'
     && lk != 1182983               // Complex '++' 'return'
     && lk != 1182984               // Real '++' 'return'
     && lk != 1183491               // Identifier '--' 'return'
     && lk != 1183492               // Character '--' 'return'
     && lk != 1183493               // String '--' 'return'
     && lk != 1183494               // Integer '--' 'return'
     && lk != 1183495               // Complex '--' 'return'
     && lk != 1183496               // Real '--' 'return'
     && lk != 1186226               // '[' ']' 'return'
     && lk != 1190222               // '{' '}' 'return'
     && lk != 1196477               // 'f32' Identifier 'switch'
     && lk != 1196478               // 'f64' Identifier 'switch'
     && lk != 1196482               // 'i32' Identifier 'switch'
     && lk != 1196483               // 'i64' Identifier 'switch'
     && lk != 1199363               // Identifier '++' 'switch'
     && lk != 1199364               // Character '++' 'switch'
     && lk != 1199365               // String '++' 'switch'
     && lk != 1199366               // Integer '++' 'switch'
     && lk != 1199367               // Complex '++' 'switch'
     && lk != 1199368               // Real '++' 'switch'
     && lk != 1199875               // Identifier '--' 'switch'
     && lk != 1199876               // Character '--' 'switch'
     && lk != 1199877               // String '--' 'switch'
     && lk != 1199878               // Integer '--' 'switch'
     && lk != 1199879               // Complex '--' 'switch'
     && lk != 1199880               // Real '--' 'switch'
     && lk != 1202610               // '[' ']' 'switch'
     && lk != 1206606               // '{' '}' 'switch'
     && lk != 1212861               // 'f32' Identifier 'test'
     && lk != 1212862               // 'f64' Identifier 'test'
     && lk != 1212866               // 'i32' Identifier 'test'
     && lk != 1212867               // 'i64' Identifier 'test'
     && lk != 1215747               // Identifier '++' 'test'
     && lk != 1215748               // Character '++' 'test'
     && lk != 1215749               // String '++' 'test'
     && lk != 1215750               // Integer '++' 'test'
     && lk != 1215751               // Complex '++' 'test'
     && lk != 1215752               // Real '++' 'test'
     && lk != 1216259               // Identifier '--' 'test'
     && lk != 1216260               // Character '--' 'test'
     && lk != 1216261               // String '--' 'test'
     && lk != 1216262               // Integer '--' 'test'
     && lk != 1216263               // Complex '--' 'test'
     && lk != 1216264               // Real '--' 'test'
     && lk != 1218994               // '[' ']' 'test'
     && lk != 1222990               // '{' '}' 'test'
     && lk != 1229245               // 'f32' Identifier 'throw'
     && lk != 1229246               // 'f64' Identifier 'throw'
     && lk != 1229250               // 'i32' Identifier 'throw'
     && lk != 1229251               // 'i64' Identifier 'throw'
     && lk != 1232131               // Identifier '++' 'throw'
     && lk != 1232132               // Character '++' 'throw'
     && lk != 1232133               // String '++' 'throw'
     && lk != 1232134               // Integer '++' 'throw'
     && lk != 1232135               // Complex '++' 'throw'
     && lk != 1232136               // Real '++' 'throw'
     && lk != 1232643               // Identifier '--' 'throw'
     && lk != 1232644               // Character '--' 'throw'
     && lk != 1232645               // String '--' 'throw'
     && lk != 1232646               // Integer '--' 'throw'
     && lk != 1232647               // Complex '--' 'throw'
     && lk != 1232648               // Real '--' 'throw'
     && lk != 1235378               // '[' ']' 'throw'
     && lk != 1239374               // '{' '}' 'throw'
     && lk != 1245629               // 'f32' Identifier 'try'
     && lk != 1245630               // 'f64' Identifier 'try'
     && lk != 1245634               // 'i32' Identifier 'try'
     && lk != 1245635               // 'i64' Identifier 'try'
     && lk != 1248515               // Identifier '++' 'try'
     && lk != 1248516               // Character '++' 'try'
     && lk != 1248517               // String '++' 'try'
     && lk != 1248518               // Integer '++' 'try'
     && lk != 1248519               // Complex '++' 'try'
     && lk != 1248520               // Real '++' 'try'
     && lk != 1249027               // Identifier '--' 'try'
     && lk != 1249028               // Character '--' 'try'
     && lk != 1249029               // String '--' 'try'
     && lk != 1249030               // Integer '--' 'try'
     && lk != 1249031               // Complex '--' 'try'
     && lk != 1249032               // Real '--' 'try'
     && lk != 1251762               // '[' ']' 'try'
     && lk != 1255758               // '{' '}' 'try'
     && lk != 1262013               // 'f32' Identifier 'while'
     && lk != 1262014               // 'f64' Identifier 'while'
     && lk != 1262018               // 'i32' Identifier 'while'
     && lk != 1262019               // 'i64' Identifier 'while'
     && lk != 1264899               // Identifier '++' 'while'
     && lk != 1264900               // Character '++' 'while'
     && lk != 1264901               // String '++' 'while'
     && lk != 1264902               // Integer '++' 'while'
     && lk != 1264903               // Complex '++' 'while'
     && lk != 1264904               // Real '++' 'while'
     && lk != 1265411               // Identifier '--' 'while'
     && lk != 1265412               // Character '--' 'while'
     && lk != 1265413               // String '--' 'while'
     && lk != 1265414               // Integer '--' 'while'
     && lk != 1265415               // Complex '--' 'while'
     && lk != 1265416               // Real '--' 'while'
     && lk != 1268146               // '[' ']' 'while'
     && lk != 1272142               // '{' '}' 'while'
     && lk != 1278397               // 'f32' Identifier '{'
     && lk != 1278398               // 'f64' Identifier '{'
     && lk != 1278402               // 'i32' Identifier '{'
     && lk != 1278403               // 'i64' Identifier '{'
     && lk != 1284530               // '[' ']' '{'
     && lk != 1288526               // '{' '}' '{'
     && lk != 1294781               // 'f32' Identifier '|'
     && lk != 1294782               // 'f64' Identifier '|'
     && lk != 1294786               // 'i32' Identifier '|'
     && lk != 1294787               // 'i64' Identifier '|'
     && lk != 1297667               // Identifier '++' '|'
     && lk != 1297668               // Character '++' '|'
     && lk != 1297669               // String '++' '|'
     && lk != 1297670               // Integer '++' '|'
     && lk != 1297671               // Complex '++' '|'
     && lk != 1297672               // Real '++' '|'
     && lk != 1298179               // Identifier '--' '|'
     && lk != 1298180               // Character '--' '|'
     && lk != 1298181               // String '--' '|'
     && lk != 1298182               // Integer '--' '|'
     && lk != 1298183               // Complex '--' '|'
     && lk != 1298184               // Real '--' '|'
     && lk != 1300914               // '[' ']' '|'
     && lk != 1304910               // '{' '}' '|'
     && lk != 1311165               // 'f32' Identifier '|='
     && lk != 1311166               // 'f64' Identifier '|='
     && lk != 1311170               // 'i32' Identifier '|='
     && lk != 1311171               // 'i64' Identifier '|='
     && lk != 1314051               // Identifier '++' '|='
     && lk != 1314052               // Character '++' '|='
     && lk != 1314053               // String '++' '|='
     && lk != 1314054               // Integer '++' '|='
     && lk != 1314055               // Complex '++' '|='
     && lk != 1314056               // Real '++' '|='
     && lk != 1314563               // Identifier '--' '|='
     && lk != 1314564               // Character '--' '|='
     && lk != 1314565               // String '--' '|='
     && lk != 1314566               // Integer '--' '|='
     && lk != 1314567               // Complex '--' '|='
     && lk != 1314568               // Real '--' '|='
     && lk != 1317298               // '[' ']' '|='
     && lk != 1321294               // '{' '}' '|='
     && lk != 1327549               // 'f32' Identifier '||'
     && lk != 1327550               // 'f64' Identifier '||'
     && lk != 1327554               // 'i32' Identifier '||'
     && lk != 1327555               // 'i64' Identifier '||'
     && lk != 1330435               // Identifier '++' '||'
     && lk != 1330436               // Character '++' '||'
     && lk != 1330437               // String '++' '||'
     && lk != 1330438               // Integer '++' '||'
     && lk != 1330439               // Complex '++' '||'
     && lk != 1330440               // Real '++' '||'
     && lk != 1330947               // Identifier '--' '||'
     && lk != 1330948               // Character '--' '||'
     && lk != 1330949               // String '--' '||'
     && lk != 1330950               // Integer '--' '||'
     && lk != 1330951               // Complex '--' '||'
     && lk != 1330952               // Real '--' '||'
     && lk != 1333682               // '[' ']' '||'
     && lk != 1337678               // '{' '}' '||'
     && lk != 1343933               // 'f32' Identifier '}'
     && lk != 1343934               // 'f64' Identifier '}'
     && lk != 1343938               // 'i32' Identifier '}'
     && lk != 1343939               // 'i64' Identifier '}'
     && lk != 1346819               // Identifier '++' '}'
     && lk != 1346820               // Character '++' '}'
     && lk != 1346821               // String '++' '}'
     && lk != 1346822               // Integer '++' '}'
     && lk != 1346823               // Complex '++' '}'
     && lk != 1346824               // Real '++' '}'
     && lk != 1347331               // Identifier '--' '}'
     && lk != 1347332               // Character '--' '}'
     && lk != 1347333               // String '--' '}'
     && lk != 1347334               // Integer '--' '}'
     && lk != 1347335               // Complex '--' '}'
     && lk != 1347336               // Real '--' '}'
     && lk != 1350066               // '[' ']' '}'
     && lk != 1354062               // '{' '}' '}'
     && lk != 1360317               // 'f32' Identifier '~'
     && lk != 1360318               // 'f64' Identifier '~'
     && lk != 1360322               // 'i32' Identifier '~'
     && lk != 1360323               // 'i64' Identifier '~'
     && lk != 1363203               // Identifier '++' '~'
     && lk != 1363204               // Character '++' '~'
     && lk != 1363205               // String '++' '~'
     && lk != 1363206               // Integer '++' '~'
     && lk != 1363207               // Complex '++' '~'
     && lk != 1363208               // Real '++' '~'
     && lk != 1363715               // Identifier '--' '~'
     && lk != 1363716               // Character '--' '~'
     && lk != 1363717               // String '--' '~'
     && lk != 1363718               // Integer '--' '~'
     && lk != 1363719               // Complex '--' '~'
     && lk != 1363720               // Real '--' '~'
     && lk != 1366450               // '[' ']' '~'
     && lk != 1370446)              // '{' '}' '~'
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
    case 1035523:                   // Identifier '++' 'for'
    case 1035524:                   // Character '++' 'for'
    case 1035525:                   // String '++' 'for'
    case 1035526:                   // Integer '++' 'for'
    case 1035527:                   // Complex '++' 'for'
    case 1035528:                   // Real '++' 'for'
    case 1051907:                   // Identifier '++' 'foreach'
    case 1051908:                   // Character '++' 'foreach'
    case 1051909:                   // String '++' 'foreach'
    case 1051910:                   // Integer '++' 'foreach'
    case 1051911:                   // Complex '++' 'foreach'
    case 1051912:                   // Real '++' 'foreach'
    case 1068291:                   // Identifier '++' 'global'
    case 1068292:                   // Character '++' 'global'
    case 1068293:                   // String '++' 'global'
    case 1068294:                   // Integer '++' 'global'
    case 1068295:                   // Complex '++' 'global'
    case 1068296:                   // Real '++' 'global'
    case 1117443:                   // Identifier '++' 'if'
    case 1117444:                   // Character '++' 'if'
    case 1117445:                   // String '++' 'if'
    case 1117446:                   // Integer '++' 'if'
    case 1117447:                   // Complex '++' 'if'
    case 1117448:                   // Real '++' 'if'
    case 1133827:                   // Identifier '++' 'import'
    case 1133828:                   // Character '++' 'import'
    case 1133829:                   // String '++' 'import'
    case 1133830:                   // Integer '++' 'import'
    case 1133831:                   // Complex '++' 'import'
    case 1133832:                   // Real '++' 'import'
    case 1150211:                   // Identifier '++' 'include'
    case 1150212:                   // Character '++' 'include'
    case 1150213:                   // String '++' 'include'
    case 1150214:                   // Integer '++' 'include'
    case 1150215:                   // Complex '++' 'include'
    case 1150216:                   // Real '++' 'include'
    case 1166595:                   // Identifier '++' 'local'
    case 1166596:                   // Character '++' 'local'
    case 1166597:                   // String '++' 'local'
    case 1166598:                   // Integer '++' 'local'
    case 1166599:                   // Complex '++' 'local'
    case 1166600:                   // Real '++' 'local'
    case 1182979:                   // Identifier '++' 'return'
    case 1182980:                   // Character '++' 'return'
    case 1182981:                   // String '++' 'return'
    case 1182982:                   // Integer '++' 'return'
    case 1182983:                   // Complex '++' 'return'
    case 1182984:                   // Real '++' 'return'
    case 1199363:                   // Identifier '++' 'switch'
    case 1199364:                   // Character '++' 'switch'
    case 1199365:                   // String '++' 'switch'
    case 1199366:                   // Integer '++' 'switch'
    case 1199367:                   // Complex '++' 'switch'
    case 1199368:                   // Real '++' 'switch'
    case 1215747:                   // Identifier '++' 'test'
    case 1215748:                   // Character '++' 'test'
    case 1215749:                   // String '++' 'test'
    case 1215750:                   // Integer '++' 'test'
    case 1215751:                   // Complex '++' 'test'
    case 1215752:                   // Real '++' 'test'
    case 1232131:                   // Identifier '++' 'throw'
    case 1232132:                   // Character '++' 'throw'
    case 1232133:                   // String '++' 'throw'
    case 1232134:                   // Integer '++' 'throw'
    case 1232135:                   // Complex '++' 'throw'
    case 1232136:                   // Real '++' 'throw'
    case 1248515:                   // Identifier '++' 'try'
    case 1248516:                   // Character '++' 'try'
    case 1248517:                   // String '++' 'try'
    case 1248518:                   // Integer '++' 'try'
    case 1248519:                   // Complex '++' 'try'
    case 1248520:                   // Real '++' 'try'
    case 1264899:                   // Identifier '++' 'while'
    case 1264900:                   // Character '++' 'while'
    case 1264901:                   // String '++' 'while'
    case 1264902:                   // Integer '++' 'while'
    case 1264903:                   // Complex '++' 'while'
    case 1264904:                   // Real '++' 'while'
    case 1297667:                   // Identifier '++' '|'
    case 1297668:                   // Character '++' '|'
    case 1297669:                   // String '++' '|'
    case 1297670:                   // Integer '++' '|'
    case 1297671:                   // Complex '++' '|'
    case 1297672:                   // Real '++' '|'
    case 1314051:                   // Identifier '++' '|='
    case 1314052:                   // Character '++' '|='
    case 1314053:                   // String '++' '|='
    case 1314054:                   // Integer '++' '|='
    case 1314055:                   // Complex '++' '|='
    case 1314056:                   // Real '++' '|='
    case 1330435:                   // Identifier '++' '||'
    case 1330436:                   // Character '++' '||'
    case 1330437:                   // String '++' '||'
    case 1330438:                   // Integer '++' '||'
    case 1330439:                   // Complex '++' '||'
    case 1330440:                   // Real '++' '||'
    case 1346819:                   // Identifier '++' '}'
    case 1346820:                   // Character '++' '}'
    case 1346821:                   // String '++' '}'
    case 1346822:                   // Integer '++' '}'
    case 1346823:                   // Complex '++' '}'
    case 1346824:                   // Real '++' '}'
    case 1363203:                   // Identifier '++' '~'
    case 1363204:                   // Character '++' '~'
    case 1363205:                   // String '++' '~'
    case 1363206:                   // Integer '++' '~'
    case 1363207:                   // Complex '++' '~'
    case 1363208:                   // Real '++' '~'
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
    case 1036035:                   // Identifier '--' 'for'
    case 1036036:                   // Character '--' 'for'
    case 1036037:                   // String '--' 'for'
    case 1036038:                   // Integer '--' 'for'
    case 1036039:                   // Complex '--' 'for'
    case 1036040:                   // Real '--' 'for'
    case 1052419:                   // Identifier '--' 'foreach'
    case 1052420:                   // Character '--' 'foreach'
    case 1052421:                   // String '--' 'foreach'
    case 1052422:                   // Integer '--' 'foreach'
    case 1052423:                   // Complex '--' 'foreach'
    case 1052424:                   // Real '--' 'foreach'
    case 1068803:                   // Identifier '--' 'global'
    case 1068804:                   // Character '--' 'global'
    case 1068805:                   // String '--' 'global'
    case 1068806:                   // Integer '--' 'global'
    case 1068807:                   // Complex '--' 'global'
    case 1068808:                   // Real '--' 'global'
    case 1117955:                   // Identifier '--' 'if'
    case 1117956:                   // Character '--' 'if'
    case 1117957:                   // String '--' 'if'
    case 1117958:                   // Integer '--' 'if'
    case 1117959:                   // Complex '--' 'if'
    case 1117960:                   // Real '--' 'if'
    case 1134339:                   // Identifier '--' 'import'
    case 1134340:                   // Character '--' 'import'
    case 1134341:                   // String '--' 'import'
    case 1134342:                   // Integer '--' 'import'
    case 1134343:                   // Complex '--' 'import'
    case 1134344:                   // Real '--' 'import'
    case 1150723:                   // Identifier '--' 'include'
    case 1150724:                   // Character '--' 'include'
    case 1150725:                   // String '--' 'include'
    case 1150726:                   // Integer '--' 'include'
    case 1150727:                   // Complex '--' 'include'
    case 1150728:                   // Real '--' 'include'
    case 1167107:                   // Identifier '--' 'local'
    case 1167108:                   // Character '--' 'local'
    case 1167109:                   // String '--' 'local'
    case 1167110:                   // Integer '--' 'local'
    case 1167111:                   // Complex '--' 'local'
    case 1167112:                   // Real '--' 'local'
    case 1183491:                   // Identifier '--' 'return'
    case 1183492:                   // Character '--' 'return'
    case 1183493:                   // String '--' 'return'
    case 1183494:                   // Integer '--' 'return'
    case 1183495:                   // Complex '--' 'return'
    case 1183496:                   // Real '--' 'return'
    case 1199875:                   // Identifier '--' 'switch'
    case 1199876:                   // Character '--' 'switch'
    case 1199877:                   // String '--' 'switch'
    case 1199878:                   // Integer '--' 'switch'
    case 1199879:                   // Complex '--' 'switch'
    case 1199880:                   // Real '--' 'switch'
    case 1216259:                   // Identifier '--' 'test'
    case 1216260:                   // Character '--' 'test'
    case 1216261:                   // String '--' 'test'
    case 1216262:                   // Integer '--' 'test'
    case 1216263:                   // Complex '--' 'test'
    case 1216264:                   // Real '--' 'test'
    case 1232643:                   // Identifier '--' 'throw'
    case 1232644:                   // Character '--' 'throw'
    case 1232645:                   // String '--' 'throw'
    case 1232646:                   // Integer '--' 'throw'
    case 1232647:                   // Complex '--' 'throw'
    case 1232648:                   // Real '--' 'throw'
    case 1249027:                   // Identifier '--' 'try'
    case 1249028:                   // Character '--' 'try'
    case 1249029:                   // String '--' 'try'
    case 1249030:                   // Integer '--' 'try'
    case 1249031:                   // Complex '--' 'try'
    case 1249032:                   // Real '--' 'try'
    case 1265411:                   // Identifier '--' 'while'
    case 1265412:                   // Character '--' 'while'
    case 1265413:                   // String '--' 'while'
    case 1265414:                   // Integer '--' 'while'
    case 1265415:                   // Complex '--' 'while'
    case 1265416:                   // Real '--' 'while'
    case 1298179:                   // Identifier '--' '|'
    case 1298180:                   // Character '--' '|'
    case 1298181:                   // String '--' '|'
    case 1298182:                   // Integer '--' '|'
    case 1298183:                   // Complex '--' '|'
    case 1298184:                   // Real '--' '|'
    case 1314563:                   // Identifier '--' '|='
    case 1314564:                   // Character '--' '|='
    case 1314565:                   // String '--' '|='
    case 1314566:                   // Integer '--' '|='
    case 1314567:                   // Complex '--' '|='
    case 1314568:                   // Real '--' '|='
    case 1330947:                   // Identifier '--' '||'
    case 1330948:                   // Character '--' '||'
    case 1330949:                   // String '--' '||'
    case 1330950:                   // Integer '--' '||'
    case 1330951:                   // Complex '--' '||'
    case 1330952:                   // Real '--' '||'
    case 1347331:                   // Identifier '--' '}'
    case 1347332:                   // Character '--' '}'
    case 1347333:                   // String '--' '}'
    case 1347334:                   // Integer '--' '}'
    case 1347335:                   // Complex '--' '}'
    case 1347336:                   // Real '--' '}'
    case 1363715:                   // Identifier '--' '~'
    case 1363716:                   // Character '--' '~'
    case 1363717:                   // String '--' '~'
    case 1363718:                   // Integer '--' '~'
    case 1363719:                   // Complex '--' '~'
    case 1363720:                   // Real '--' '~'
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
    case 83:                        // '~'
      consume(83);                  // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10004:                   // '(' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(4);             // WhiteSpace^token | ')'
        break;
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8468:                    // '(' 'i32'
      case 8596:                    // '(' 'i64'
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
      case 10644:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8724:                    // '(' 'if'
      case 9364:                    // '(' 'switch'
      case 9492:                    // '(' 'test'
      case 9876:                    // '(' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8340:                    // '(' 'global'
      case 8852:                    // '(' 'import'
      case 8980:                    // '(' 'include'
      case 9108:                    // '(' 'local'
      case 9236:                    // '(' 'return'
      case 9620:                    // '(' 'throw'
      case 9748:                    // '(' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(29);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 10034:                   // '[' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8498:                    // '[' 'i32'
      case 8626:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 946:                     // '[' Complex
      case 1074:                    // '[' Real
        lookahead3W(32);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10674:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8754:                    // '[' 'if'
      case 9394:                    // '[' 'switch'
      case 9522:                    // '[' 'test'
      case 9906:                    // '[' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8370:                    // '[' 'global'
      case 8882:                    // '[' 'import'
      case 9010:                    // '[' 'include'
      case 9138:                    // '[' 'local'
      case 9266:                    // '[' 'return'
      case 9650:                    // '[' 'throw'
      case 9778:                    // '[' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 78:                        // '{'
      lookahead2W(35);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 462:                     // '{' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 718:                     // '{' String
        lookahead3W(31);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6478:                    // '{' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10062:                   // '{' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 10574:                   // '{' '}'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 590:                     // '{' Character
      case 846:                     // '{' Integer
      case 974:                     // '{' Complex
      case 1102:                    // '{' Real
        lookahead3W(26);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1230:                    // '{' Comment
      case 4814:                    // '{' ';'
      case 6990:                    // '{' 'break'
      case 7374:                    // '{' 'continue'
        lookahead3W(17);            // WhiteSpace^token | ',' | '}'
        break;
      case 7886:                    // '{' 'f32'
      case 8014:                    // '{' 'f64'
      case 8526:                    // '{' 'i32'
      case 8654:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1614:                    // '{' '!'
      case 3278:                    // '{' '+'
      case 3406:                    // '{' '++'
      case 3790:                    // '{' '-'
      case 3918:                    // '{' '--'
      case 10702:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8142:                    // '{' 'for'
      case 8270:                    // '{' 'foreach'
      case 8782:                    // '{' 'if'
      case 9422:                    // '{' 'switch'
      case 9550:                    // '{' 'test'
      case 9934:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2638:                    // '{' '('
      case 3662:                    // '{' ','
      case 7630:                    // '{' 'do'
      case 8398:                    // '{' 'global'
      case 8910:                    // '{' 'import'
      case 9038:                    // '{' 'include'
      case 9166:                    // '{' 'local'
      case 9294:                    // '{' 'return'
      case 9678:                    // '{' 'throw'
      case 9806:                    // '{' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 450:                     // 'i32' Identifier
      case 451:                     // 'i64' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
     && lk != 83                    // '~'
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
     && lk != 7811                  // Identifier 'f32'
     && lk != 7812                  // Character 'f32'
     && lk != 7813                  // String 'f32'
     && lk != 7814                  // Integer 'f32'
     && lk != 7815                  // Complex 'f32'
     && lk != 7816                  // Real 'f32'
     && lk != 7939                  // Identifier 'f64'
     && lk != 7940                  // Character 'f64'
     && lk != 7941                  // String 'f64'
     && lk != 7942                  // Integer 'f64'
     && lk != 7943                  // Complex 'f64'
     && lk != 7944                  // Real 'f64'
     && lk != 8067                  // Identifier 'for'
     && lk != 8068                  // Character 'for'
     && lk != 8069                  // String 'for'
     && lk != 8070                  // Integer 'for'
     && lk != 8071                  // Complex 'for'
     && lk != 8072                  // Real 'for'
     && lk != 8195                  // Identifier 'foreach'
     && lk != 8196                  // Character 'foreach'
     && lk != 8197                  // String 'foreach'
     && lk != 8198                  // Integer 'foreach'
     && lk != 8199                  // Complex 'foreach'
     && lk != 8200                  // Real 'foreach'
     && lk != 8323                  // Identifier 'global'
     && lk != 8324                  // Character 'global'
     && lk != 8325                  // String 'global'
     && lk != 8326                  // Integer 'global'
     && lk != 8327                  // Complex 'global'
     && lk != 8328                  // Real 'global'
     && lk != 8451                  // Identifier 'i32'
     && lk != 8452                  // Character 'i32'
     && lk != 8453                  // String 'i32'
     && lk != 8454                  // Integer 'i32'
     && lk != 8455                  // Complex 'i32'
     && lk != 8456                  // Real 'i32'
     && lk != 8579                  // Identifier 'i64'
     && lk != 8580                  // Character 'i64'
     && lk != 8581                  // String 'i64'
     && lk != 8582                  // Integer 'i64'
     && lk != 8583                  // Complex 'i64'
     && lk != 8584                  // Real 'i64'
     && lk != 8707                  // Identifier 'if'
     && lk != 8708                  // Character 'if'
     && lk != 8709                  // String 'if'
     && lk != 8710                  // Integer 'if'
     && lk != 8711                  // Complex 'if'
     && lk != 8712                  // Real 'if'
     && lk != 8835                  // Identifier 'import'
     && lk != 8836                  // Character 'import'
     && lk != 8837                  // String 'import'
     && lk != 8838                  // Integer 'import'
     && lk != 8839                  // Complex 'import'
     && lk != 8840                  // Real 'import'
     && lk != 8963                  // Identifier 'include'
     && lk != 8964                  // Character 'include'
     && lk != 8965                  // String 'include'
     && lk != 8966                  // Integer 'include'
     && lk != 8967                  // Complex 'include'
     && lk != 8968                  // Real 'include'
     && lk != 9091                  // Identifier 'local'
     && lk != 9092                  // Character 'local'
     && lk != 9093                  // String 'local'
     && lk != 9094                  // Integer 'local'
     && lk != 9095                  // Complex 'local'
     && lk != 9096                  // Real 'local'
     && lk != 9219                  // Identifier 'return'
     && lk != 9220                  // Character 'return'
     && lk != 9221                  // String 'return'
     && lk != 9222                  // Integer 'return'
     && lk != 9223                  // Complex 'return'
     && lk != 9224                  // Real 'return'
     && lk != 9347                  // Identifier 'switch'
     && lk != 9348                  // Character 'switch'
     && lk != 9349                  // String 'switch'
     && lk != 9350                  // Integer 'switch'
     && lk != 9351                  // Complex 'switch'
     && lk != 9352                  // Real 'switch'
     && lk != 9475                  // Identifier 'test'
     && lk != 9476                  // Character 'test'
     && lk != 9477                  // String 'test'
     && lk != 9478                  // Integer 'test'
     && lk != 9479                  // Complex 'test'
     && lk != 9480                  // Real 'test'
     && lk != 9603                  // Identifier 'throw'
     && lk != 9604                  // Character 'throw'
     && lk != 9605                  // String 'throw'
     && lk != 9606                  // Integer 'throw'
     && lk != 9607                  // Complex 'throw'
     && lk != 9608                  // Real 'throw'
     && lk != 9731                  // Identifier 'try'
     && lk != 9732                  // Character 'try'
     && lk != 9733                  // String 'try'
     && lk != 9734                  // Integer 'try'
     && lk != 9735                  // Complex 'try'
     && lk != 9736                  // Real 'try'
     && lk != 9859                  // Identifier 'while'
     && lk != 9860                  // Character 'while'
     && lk != 9861                  // String 'while'
     && lk != 9862                  // Integer 'while'
     && lk != 9863                  // Complex 'while'
     && lk != 9864                  // Real 'while'
     && lk != 9987                  // Identifier '{'
     && lk != 9988                  // Character '{'
     && lk != 9989                  // String '{'
     && lk != 9990                  // Integer '{'
     && lk != 9991                  // Complex '{'
     && lk != 9992                  // Real '{'
     && lk != 10115                 // Identifier '|'
     && lk != 10116                 // Character '|'
     && lk != 10117                 // String '|'
     && lk != 10118                 // Integer '|'
     && lk != 10119                 // Complex '|'
     && lk != 10120                 // Real '|'
     && lk != 10243                 // Identifier '|='
     && lk != 10244                 // Character '|='
     && lk != 10245                 // String '|='
     && lk != 10246                 // Integer '|='
     && lk != 10247                 // Complex '|='
     && lk != 10248                 // Real '|='
     && lk != 10371                 // Identifier '||'
     && lk != 10372                 // Character '||'
     && lk != 10373                 // String '||'
     && lk != 10374                 // Integer '||'
     && lk != 10375                 // Complex '||'
     && lk != 10376                 // Real '||'
     && lk != 10499                 // Identifier '}'
     && lk != 10500                 // Character '}'
     && lk != 10501                 // String '}'
     && lk != 10502                 // Integer '}'
     && lk != 10503                 // Complex '}'
     && lk != 10504                 // Real '}'
     && lk != 10627                 // Identifier '~'
     && lk != 10628                 // Character '~'
     && lk != 10629                 // String '~'
     && lk != 10630                 // Integer '~'
     && lk != 10631                 // Complex '~'
     && lk != 10632                 // Real '~'
     && lk != 16829                 // 'f32' Identifier END
     && lk != 16830                 // 'f64' Identifier END
     && lk != 16834                 // 'i32' Identifier END
     && lk != 16835                 // 'i64' Identifier END
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
     && lk != 26958                 // '{' '}' END
     && lk != 49597                 // 'f32' Identifier Identifier
     && lk != 49598                 // 'f64' Identifier Identifier
     && lk != 49602                 // 'i32' Identifier Identifier
     && lk != 49603                 // 'i64' Identifier Identifier
     && lk != 55730                 // '[' ']' Identifier
     && lk != 59726                 // '{' '}' Identifier
     && lk != 65981                 // 'f32' Identifier Character
     && lk != 65982                 // 'f64' Identifier Character
     && lk != 65986                 // 'i32' Identifier Character
     && lk != 65987                 // 'i64' Identifier Character
     && lk != 72114                 // '[' ']' Character
     && lk != 76110                 // '{' '}' Character
     && lk != 82365                 // 'f32' Identifier String
     && lk != 82366                 // 'f64' Identifier String
     && lk != 82370                 // 'i32' Identifier String
     && lk != 82371                 // 'i64' Identifier String
     && lk != 88498                 // '[' ']' String
     && lk != 92494                 // '{' '}' String
     && lk != 98749                 // 'f32' Identifier Integer
     && lk != 98750                 // 'f64' Identifier Integer
     && lk != 98754                 // 'i32' Identifier Integer
     && lk != 98755                 // 'i64' Identifier Integer
     && lk != 104882                // '[' ']' Integer
     && lk != 108878                // '{' '}' Integer
     && lk != 115133                // 'f32' Identifier Complex
     && lk != 115134                // 'f64' Identifier Complex
     && lk != 115138                // 'i32' Identifier Complex
     && lk != 115139                // 'i64' Identifier Complex
     && lk != 121266                // '[' ']' Complex
     && lk != 125262                // '{' '}' Complex
     && lk != 131517                // 'f32' Identifier Real
     && lk != 131518                // 'f64' Identifier Real
     && lk != 131522                // 'i32' Identifier Real
     && lk != 131523                // 'i64' Identifier Real
     && lk != 137650                // '[' ']' Real
     && lk != 141646                // '{' '}' Real
     && lk != 147901                // 'f32' Identifier Comment
     && lk != 147902                // 'f64' Identifier Comment
     && lk != 147906                // 'i32' Identifier Comment
     && lk != 147907                // 'i64' Identifier Comment
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
     && lk != 158030                // '{' '}' Comment
     && lk != 197053                // 'f32' Identifier '!'
     && lk != 197054                // 'f64' Identifier '!'
     && lk != 197058                // 'i32' Identifier '!'
     && lk != 197059                // 'i64' Identifier '!'
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
     && lk != 207182                // '{' '}' '!'
     && lk != 213437                // 'f32' Identifier '!='
     && lk != 213438                // 'f64' Identifier '!='
     && lk != 213442                // 'i32' Identifier '!='
     && lk != 213443                // 'i64' Identifier '!='
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
     && lk != 223566                // '{' '}' '!='
     && lk != 246205                // 'f32' Identifier '%'
     && lk != 246206                // 'f64' Identifier '%'
     && lk != 246210                // 'i32' Identifier '%'
     && lk != 246211                // 'i64' Identifier '%'
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
     && lk != 256334                // '{' '}' '%'
     && lk != 262589                // 'f32' Identifier '%='
     && lk != 262590                // 'f64' Identifier '%='
     && lk != 262594                // 'i32' Identifier '%='
     && lk != 262595                // 'i64' Identifier '%='
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
     && lk != 272718                // '{' '}' '%='
     && lk != 278973                // 'f32' Identifier '&'
     && lk != 278974                // 'f64' Identifier '&'
     && lk != 278978                // 'i32' Identifier '&'
     && lk != 278979                // 'i64' Identifier '&'
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
     && lk != 289102                // '{' '}' '&'
     && lk != 295357                // 'f32' Identifier '&&'
     && lk != 295358                // 'f64' Identifier '&&'
     && lk != 295362                // 'i32' Identifier '&&'
     && lk != 295363                // 'i64' Identifier '&&'
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
     && lk != 305486                // '{' '}' '&&'
     && lk != 311741                // 'f32' Identifier '&='
     && lk != 311742                // 'f64' Identifier '&='
     && lk != 311746                // 'i32' Identifier '&='
     && lk != 311747                // 'i64' Identifier '&='
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
     && lk != 321870                // '{' '}' '&='
     && lk != 334258                // '[' ']' '('
     && lk != 338254                // '{' '}' '('
     && lk != 344509                // 'f32' Identifier ')'
     && lk != 344510                // 'f64' Identifier ')'
     && lk != 344514                // 'i32' Identifier ')'
     && lk != 344515                // 'i64' Identifier ')'
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
     && lk != 354638                // '{' '}' ')'
     && lk != 360893                // 'f32' Identifier '*'
     && lk != 360894                // 'f64' Identifier '*'
     && lk != 360898                // 'i32' Identifier '*'
     && lk != 360899                // 'i64' Identifier '*'
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
     && lk != 371022                // '{' '}' '*'
     && lk != 377277                // 'f32' Identifier '**'
     && lk != 377278                // 'f64' Identifier '**'
     && lk != 377282                // 'i32' Identifier '**'
     && lk != 377283                // 'i64' Identifier '**'
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
     && lk != 387406                // '{' '}' '**'
     && lk != 393661                // 'f32' Identifier '*='
     && lk != 393662                // 'f64' Identifier '*='
     && lk != 393666                // 'i32' Identifier '*='
     && lk != 393667                // 'i64' Identifier '*='
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
     && lk != 403790                // '{' '}' '*='
     && lk != 410045                // 'f32' Identifier '+'
     && lk != 410046                // 'f64' Identifier '+'
     && lk != 410050                // 'i32' Identifier '+'
     && lk != 410051                // 'i64' Identifier '+'
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
     && lk != 420174                // '{' '}' '+'
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
     && lk != 442813                // 'f32' Identifier '+='
     && lk != 442814                // 'f64' Identifier '+='
     && lk != 442818                // 'i32' Identifier '+='
     && lk != 442819                // 'i64' Identifier '+='
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
     && lk != 452942                // '{' '}' '+='
     && lk != 459197                // 'f32' Identifier ','
     && lk != 459198                // 'f64' Identifier ','
     && lk != 459202                // 'i32' Identifier ','
     && lk != 459203                // 'i64' Identifier ','
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
     && lk != 469326                // '{' '}' ','
     && lk != 475581                // 'f32' Identifier '-'
     && lk != 475582                // 'f64' Identifier '-'
     && lk != 475586                // 'i32' Identifier '-'
     && lk != 475587                // 'i64' Identifier '-'
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
     && lk != 485710                // '{' '}' '-'
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
     && lk != 508349                // 'f32' Identifier '-='
     && lk != 508350                // 'f64' Identifier '-='
     && lk != 508354                // 'i32' Identifier '-='
     && lk != 508355                // 'i64' Identifier '-='
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
     && lk != 518478                // '{' '}' '-='
     && lk != 541117                // 'f32' Identifier '/'
     && lk != 541118                // 'f64' Identifier '/'
     && lk != 541122                // 'i32' Identifier '/'
     && lk != 541123                // 'i64' Identifier '/'
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
     && lk != 551246                // '{' '}' '/'
     && lk != 557501                // 'f32' Identifier '/='
     && lk != 557502                // 'f64' Identifier '/='
     && lk != 557506                // 'i32' Identifier '/='
     && lk != 557507                // 'i64' Identifier '/='
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
     && lk != 567630                // '{' '}' '/='
     && lk != 573885                // 'f32' Identifier ':'
     && lk != 573886                // 'f64' Identifier ':'
     && lk != 573890                // 'i32' Identifier ':'
     && lk != 573891                // 'i64' Identifier ':'
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
     && lk != 584014                // '{' '}' ':'
     && lk != 590269                // 'f32' Identifier ':='
     && lk != 590270                // 'f64' Identifier ':='
     && lk != 590274                // 'i32' Identifier ':='
     && lk != 590275                // 'i64' Identifier ':='
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
     && lk != 600398                // '{' '}' ':='
     && lk != 606653                // 'f32' Identifier ';'
     && lk != 606654                // 'f64' Identifier ';'
     && lk != 606658                // 'i32' Identifier ';'
     && lk != 606659                // 'i64' Identifier ';'
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
     && lk != 616782                // '{' '}' ';'
     && lk != 623037                // 'f32' Identifier '<'
     && lk != 623038                // 'f64' Identifier '<'
     && lk != 623042                // 'i32' Identifier '<'
     && lk != 623043                // 'i64' Identifier '<'
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
     && lk != 633166                // '{' '}' '<'
     && lk != 639421                // 'f32' Identifier '<<'
     && lk != 639422                // 'f64' Identifier '<<'
     && lk != 639426                // 'i32' Identifier '<<'
     && lk != 639427                // 'i64' Identifier '<<'
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
     && lk != 649550                // '{' '}' '<<'
     && lk != 655805                // 'f32' Identifier '<<='
     && lk != 655806                // 'f64' Identifier '<<='
     && lk != 655810                // 'i32' Identifier '<<='
     && lk != 655811                // 'i64' Identifier '<<='
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
     && lk != 665934                // '{' '}' '<<='
     && lk != 672189                // 'f32' Identifier '<='
     && lk != 672190                // 'f64' Identifier '<='
     && lk != 672194                // 'i32' Identifier '<='
     && lk != 672195                // 'i64' Identifier '<='
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
     && lk != 682318                // '{' '}' '<='
     && lk != 688573                // 'f32' Identifier '='
     && lk != 688574                // 'f64' Identifier '='
     && lk != 688578                // 'i32' Identifier '='
     && lk != 688579                // 'i64' Identifier '='
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
     && lk != 698702                // '{' '}' '='
     && lk != 704957                // 'f32' Identifier '=='
     && lk != 704958                // 'f64' Identifier '=='
     && lk != 704962                // 'i32' Identifier '=='
     && lk != 704963                // 'i64' Identifier '=='
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
     && lk != 715086                // '{' '}' '=='
     && lk != 721341                // 'f32' Identifier '>'
     && lk != 721342                // 'f64' Identifier '>'
     && lk != 721346                // 'i32' Identifier '>'
     && lk != 721347                // 'i64' Identifier '>'
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
     && lk != 731470                // '{' '}' '>'
     && lk != 737725                // 'f32' Identifier '>='
     && lk != 737726                // 'f64' Identifier '>='
     && lk != 737730                // 'i32' Identifier '>='
     && lk != 737731                // 'i64' Identifier '>='
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
     && lk != 747854                // '{' '}' '>='
     && lk != 754109                // 'f32' Identifier '>>'
     && lk != 754110                // 'f64' Identifier '>>'
     && lk != 754114                // 'i32' Identifier '>>'
     && lk != 754115                // 'i64' Identifier '>>'
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
     && lk != 764238                // '{' '}' '>>'
     && lk != 770493                // 'f32' Identifier '>>='
     && lk != 770494                // 'f64' Identifier '>>='
     && lk != 770498                // 'i32' Identifier '>>='
     && lk != 770499                // 'i64' Identifier '>>='
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
     && lk != 780622                // '{' '}' '>>='
     && lk != 786877                // 'f32' Identifier '?'
     && lk != 786878                // 'f64' Identifier '?'
     && lk != 786882                // 'i32' Identifier '?'
     && lk != 786883                // 'i64' Identifier '?'
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
     && lk != 797006                // '{' '}' '?'
     && lk != 803261                // 'f32' Identifier '?='
     && lk != 803262                // 'f64' Identifier '?='
     && lk != 803266                // 'i32' Identifier '?='
     && lk != 803267                // 'i64' Identifier '?='
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
     && lk != 813390                // '{' '}' '?='
     && lk != 825778                // '[' ']' '['
     && lk != 829774                // '{' '}' '['
     && lk != 836029                // 'f32' Identifier ']'
     && lk != 836030                // 'f64' Identifier ']'
     && lk != 836034                // 'i32' Identifier ']'
     && lk != 836035                // 'i64' Identifier ']'
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
     && lk != 846158                // '{' '}' ']'
     && lk != 852413                // 'f32' Identifier '^'
     && lk != 852414                // 'f64' Identifier '^'
     && lk != 852418                // 'i32' Identifier '^'
     && lk != 852419                // 'i64' Identifier '^'
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
     && lk != 862542                // '{' '}' '^'
     && lk != 868797                // 'f32' Identifier '^='
     && lk != 868798                // 'f64' Identifier '^='
     && lk != 868802                // 'i32' Identifier '^='
     && lk != 868803                // 'i64' Identifier '^='
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
     && lk != 878926                // '{' '}' '^='
     && lk != 885181                // 'f32' Identifier 'break'
     && lk != 885182                // 'f64' Identifier 'break'
     && lk != 885186                // 'i32' Identifier 'break'
     && lk != 885187                // 'i64' Identifier 'break'
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
     && lk != 895310                // '{' '}' 'break'
     && lk != 901565                // 'f32' Identifier 'case'
     && lk != 901566                // 'f64' Identifier 'case'
     && lk != 901570                // 'i32' Identifier 'case'
     && lk != 901571                // 'i64' Identifier 'case'
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
     && lk != 911694                // '{' '}' 'case'
     && lk != 917949                // 'f32' Identifier 'catch'
     && lk != 917950                // 'f64' Identifier 'catch'
     && lk != 917954                // 'i32' Identifier 'catch'
     && lk != 917955                // 'i64' Identifier 'catch'
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
     && lk != 928078                // '{' '}' 'catch'
     && lk != 934333                // 'f32' Identifier 'continue'
     && lk != 934334                // 'f64' Identifier 'continue'
     && lk != 934338                // 'i32' Identifier 'continue'
     && lk != 934339                // 'i64' Identifier 'continue'
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
     && lk != 944462                // '{' '}' 'continue'
     && lk != 950717                // 'f32' Identifier 'default'
     && lk != 950718                // 'f64' Identifier 'default'
     && lk != 950722                // 'i32' Identifier 'default'
     && lk != 950723                // 'i64' Identifier 'default'
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
     && lk != 960846                // '{' '}' 'default'
     && lk != 967101                // 'f32' Identifier 'do'
     && lk != 967102                // 'f64' Identifier 'do'
     && lk != 967106                // 'i32' Identifier 'do'
     && lk != 967107                // 'i64' Identifier 'do'
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
     && lk != 977230                // '{' '}' 'do'
     && lk != 983485                // 'f32' Identifier 'else'
     && lk != 983486                // 'f64' Identifier 'else'
     && lk != 983490                // 'i32' Identifier 'else'
     && lk != 983491                // 'i64' Identifier 'else'
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
     && lk != 993614                // '{' '}' 'else'
     && lk != 999869                // 'f32' Identifier 'f32'
     && lk != 999870                // 'f64' Identifier 'f32'
     && lk != 999874                // 'i32' Identifier 'f32'
     && lk != 999875                // 'i64' Identifier 'f32'
     && lk != 1006002               // '[' ']' 'f32'
     && lk != 1009998               // '{' '}' 'f32'
     && lk != 1016253               // 'f32' Identifier 'f64'
     && lk != 1016254               // 'f64' Identifier 'f64'
     && lk != 1016258               // 'i32' Identifier 'f64'
     && lk != 1016259               // 'i64' Identifier 'f64'
     && lk != 1022386               // '[' ']' 'f64'
     && lk != 1026382               // '{' '}' 'f64'
     && lk != 1032637               // 'f32' Identifier 'for'
     && lk != 1032638               // 'f64' Identifier 'for'
     && lk != 1032642               // 'i32' Identifier 'for'
     && lk != 1032643               // 'i64' Identifier 'for'
     && lk != 1035523               // Identifier '++' 'for'
     && lk != 1035524               // Character '++' 'for'
     && lk != 1035525               // String '++' 'for'
     && lk != 1035526               // Integer '++' 'for'
     && lk != 1035527               // Complex '++' 'for'
     && lk != 1035528               // Real '++' 'for'
     && lk != 1036035               // Identifier '--' 'for'
     && lk != 1036036               // Character '--' 'for'
     && lk != 1036037               // String '--' 'for'
     && lk != 1036038               // Integer '--' 'for'
     && lk != 1036039               // Complex '--' 'for'
     && lk != 1036040               // Real '--' 'for'
     && lk != 1038770               // '[' ']' 'for'
     && lk != 1042766               // '{' '}' 'for'
     && lk != 1049021               // 'f32' Identifier 'foreach'
     && lk != 1049022               // 'f64' Identifier 'foreach'
     && lk != 1049026               // 'i32' Identifier 'foreach'
     && lk != 1049027               // 'i64' Identifier 'foreach'
     && lk != 1051907               // Identifier '++' 'foreach'
     && lk != 1051908               // Character '++' 'foreach'
     && lk != 1051909               // String '++' 'foreach'
     && lk != 1051910               // Integer '++' 'foreach'
     && lk != 1051911               // Complex '++' 'foreach'
     && lk != 1051912               // Real '++' 'foreach'
     && lk != 1052419               // Identifier '--' 'foreach'
     && lk != 1052420               // Character '--' 'foreach'
     && lk != 1052421               // String '--' 'foreach'
     && lk != 1052422               // Integer '--' 'foreach'
     && lk != 1052423               // Complex '--' 'foreach'
     && lk != 1052424               // Real '--' 'foreach'
     && lk != 1055154               // '[' ']' 'foreach'
     && lk != 1059150               // '{' '}' 'foreach'
     && lk != 1065405               // 'f32' Identifier 'global'
     && lk != 1065406               // 'f64' Identifier 'global'
     && lk != 1065410               // 'i32' Identifier 'global'
     && lk != 1065411               // 'i64' Identifier 'global'
     && lk != 1068291               // Identifier '++' 'global'
     && lk != 1068292               // Character '++' 'global'
     && lk != 1068293               // String '++' 'global'
     && lk != 1068294               // Integer '++' 'global'
     && lk != 1068295               // Complex '++' 'global'
     && lk != 1068296               // Real '++' 'global'
     && lk != 1068803               // Identifier '--' 'global'
     && lk != 1068804               // Character '--' 'global'
     && lk != 1068805               // String '--' 'global'
     && lk != 1068806               // Integer '--' 'global'
     && lk != 1068807               // Complex '--' 'global'
     && lk != 1068808               // Real '--' 'global'
     && lk != 1071538               // '[' ']' 'global'
     && lk != 1075534               // '{' '}' 'global'
     && lk != 1081789               // 'f32' Identifier 'i32'
     && lk != 1081790               // 'f64' Identifier 'i32'
     && lk != 1081794               // 'i32' Identifier 'i32'
     && lk != 1081795               // 'i64' Identifier 'i32'
     && lk != 1087922               // '[' ']' 'i32'
     && lk != 1091918               // '{' '}' 'i32'
     && lk != 1098173               // 'f32' Identifier 'i64'
     && lk != 1098174               // 'f64' Identifier 'i64'
     && lk != 1098178               // 'i32' Identifier 'i64'
     && lk != 1098179               // 'i64' Identifier 'i64'
     && lk != 1104306               // '[' ']' 'i64'
     && lk != 1108302               // '{' '}' 'i64'
     && lk != 1114557               // 'f32' Identifier 'if'
     && lk != 1114558               // 'f64' Identifier 'if'
     && lk != 1114562               // 'i32' Identifier 'if'
     && lk != 1114563               // 'i64' Identifier 'if'
     && lk != 1117443               // Identifier '++' 'if'
     && lk != 1117444               // Character '++' 'if'
     && lk != 1117445               // String '++' 'if'
     && lk != 1117446               // Integer '++' 'if'
     && lk != 1117447               // Complex '++' 'if'
     && lk != 1117448               // Real '++' 'if'
     && lk != 1117955               // Identifier '--' 'if'
     && lk != 1117956               // Character '--' 'if'
     && lk != 1117957               // String '--' 'if'
     && lk != 1117958               // Integer '--' 'if'
     && lk != 1117959               // Complex '--' 'if'
     && lk != 1117960               // Real '--' 'if'
     && lk != 1120690               // '[' ']' 'if'
     && lk != 1124686               // '{' '}' 'if'
     && lk != 1130941               // 'f32' Identifier 'import'
     && lk != 1130942               // 'f64' Identifier 'import'
     && lk != 1130946               // 'i32' Identifier 'import'
     && lk != 1130947               // 'i64' Identifier 'import'
     && lk != 1133827               // Identifier '++' 'import'
     && lk != 1133828               // Character '++' 'import'
     && lk != 1133829               // String '++' 'import'
     && lk != 1133830               // Integer '++' 'import'
     && lk != 1133831               // Complex '++' 'import'
     && lk != 1133832               // Real '++' 'import'
     && lk != 1134339               // Identifier '--' 'import'
     && lk != 1134340               // Character '--' 'import'
     && lk != 1134341               // String '--' 'import'
     && lk != 1134342               // Integer '--' 'import'
     && lk != 1134343               // Complex '--' 'import'
     && lk != 1134344               // Real '--' 'import'
     && lk != 1137074               // '[' ']' 'import'
     && lk != 1141070               // '{' '}' 'import'
     && lk != 1147325               // 'f32' Identifier 'include'
     && lk != 1147326               // 'f64' Identifier 'include'
     && lk != 1147330               // 'i32' Identifier 'include'
     && lk != 1147331               // 'i64' Identifier 'include'
     && lk != 1150211               // Identifier '++' 'include'
     && lk != 1150212               // Character '++' 'include'
     && lk != 1150213               // String '++' 'include'
     && lk != 1150214               // Integer '++' 'include'
     && lk != 1150215               // Complex '++' 'include'
     && lk != 1150216               // Real '++' 'include'
     && lk != 1150723               // Identifier '--' 'include'
     && lk != 1150724               // Character '--' 'include'
     && lk != 1150725               // String '--' 'include'
     && lk != 1150726               // Integer '--' 'include'
     && lk != 1150727               // Complex '--' 'include'
     && lk != 1150728               // Real '--' 'include'
     && lk != 1153458               // '[' ']' 'include'
     && lk != 1157454               // '{' '}' 'include'
     && lk != 1163709               // 'f32' Identifier 'local'
     && lk != 1163710               // 'f64' Identifier 'local'
     && lk != 1163714               // 'i32' Identifier 'local'
     && lk != 1163715               // 'i64' Identifier 'local'
     && lk != 1166595               // Identifier '++' 'local'
     && lk != 1166596               // Character '++' 'local'
     && lk != 1166597               // String '++' 'local'
     && lk != 1166598               // Integer '++' 'local'
     && lk != 1166599               // Complex '++' 'local'
     && lk != 1166600               // Real '++' 'local'
     && lk != 1167107               // Identifier '--' 'local'
     && lk != 1167108               // Character '--' 'local'
     && lk != 1167109               // String '--' 'local'
     && lk != 1167110               // Integer '--' 'local'
     && lk != 1167111               // Complex '--' 'local'
     && lk != 1167112               // Real '--' 'local'
     && lk != 1169842               // '[' ']' 'local'
     && lk != 1173838               // '{' '}' 'local'
     && lk != 1180093               // 'f32' Identifier 'return'
     && lk != 1180094               // 'f64' Identifier 'return'
     && lk != 1180098               // 'i32' Identifier 'return'
     && lk != 1180099               // 'i64' Identifier 'return'
     && lk != 1182979               // Identifier '++' 'return'
     && lk != 1182980               // Character '++' 'return'
     && lk != 1182981               // String '++' 'return'
     && lk != 1182982               // Integer '++' 'return'
     && lk != 1182983               // Complex '++' 'return'
     && lk != 1182984               // Real '++' 'return'
     && lk != 1183491               // Identifier '--' 'return'
     && lk != 1183492               // Character '--' 'return'
     && lk != 1183493               // String '--' 'return'
     && lk != 1183494               // Integer '--' 'return'
     && lk != 1183495               // Complex '--' 'return'
     && lk != 1183496               // Real '--' 'return'
     && lk != 1186226               // '[' ']' 'return'
     && lk != 1190222               // '{' '}' 'return'
     && lk != 1196477               // 'f32' Identifier 'switch'
     && lk != 1196478               // 'f64' Identifier 'switch'
     && lk != 1196482               // 'i32' Identifier 'switch'
     && lk != 1196483               // 'i64' Identifier 'switch'
     && lk != 1199363               // Identifier '++' 'switch'
     && lk != 1199364               // Character '++' 'switch'
     && lk != 1199365               // String '++' 'switch'
     && lk != 1199366               // Integer '++' 'switch'
     && lk != 1199367               // Complex '++' 'switch'
     && lk != 1199368               // Real '++' 'switch'
     && lk != 1199875               // Identifier '--' 'switch'
     && lk != 1199876               // Character '--' 'switch'
     && lk != 1199877               // String '--' 'switch'
     && lk != 1199878               // Integer '--' 'switch'
     && lk != 1199879               // Complex '--' 'switch'
     && lk != 1199880               // Real '--' 'switch'
     && lk != 1202610               // '[' ']' 'switch'
     && lk != 1206606               // '{' '}' 'switch'
     && lk != 1212861               // 'f32' Identifier 'test'
     && lk != 1212862               // 'f64' Identifier 'test'
     && lk != 1212866               // 'i32' Identifier 'test'
     && lk != 1212867               // 'i64' Identifier 'test'
     && lk != 1215747               // Identifier '++' 'test'
     && lk != 1215748               // Character '++' 'test'
     && lk != 1215749               // String '++' 'test'
     && lk != 1215750               // Integer '++' 'test'
     && lk != 1215751               // Complex '++' 'test'
     && lk != 1215752               // Real '++' 'test'
     && lk != 1216259               // Identifier '--' 'test'
     && lk != 1216260               // Character '--' 'test'
     && lk != 1216261               // String '--' 'test'
     && lk != 1216262               // Integer '--' 'test'
     && lk != 1216263               // Complex '--' 'test'
     && lk != 1216264               // Real '--' 'test'
     && lk != 1218994               // '[' ']' 'test'
     && lk != 1222990               // '{' '}' 'test'
     && lk != 1229245               // 'f32' Identifier 'throw'
     && lk != 1229246               // 'f64' Identifier 'throw'
     && lk != 1229250               // 'i32' Identifier 'throw'
     && lk != 1229251               // 'i64' Identifier 'throw'
     && lk != 1232131               // Identifier '++' 'throw'
     && lk != 1232132               // Character '++' 'throw'
     && lk != 1232133               // String '++' 'throw'
     && lk != 1232134               // Integer '++' 'throw'
     && lk != 1232135               // Complex '++' 'throw'
     && lk != 1232136               // Real '++' 'throw'
     && lk != 1232643               // Identifier '--' 'throw'
     && lk != 1232644               // Character '--' 'throw'
     && lk != 1232645               // String '--' 'throw'
     && lk != 1232646               // Integer '--' 'throw'
     && lk != 1232647               // Complex '--' 'throw'
     && lk != 1232648               // Real '--' 'throw'
     && lk != 1235378               // '[' ']' 'throw'
     && lk != 1239374               // '{' '}' 'throw'
     && lk != 1245629               // 'f32' Identifier 'try'
     && lk != 1245630               // 'f64' Identifier 'try'
     && lk != 1245634               // 'i32' Identifier 'try'
     && lk != 1245635               // 'i64' Identifier 'try'
     && lk != 1248515               // Identifier '++' 'try'
     && lk != 1248516               // Character '++' 'try'
     && lk != 1248517               // String '++' 'try'
     && lk != 1248518               // Integer '++' 'try'
     && lk != 1248519               // Complex '++' 'try'
     && lk != 1248520               // Real '++' 'try'
     && lk != 1249027               // Identifier '--' 'try'
     && lk != 1249028               // Character '--' 'try'
     && lk != 1249029               // String '--' 'try'
     && lk != 1249030               // Integer '--' 'try'
     && lk != 1249031               // Complex '--' 'try'
     && lk != 1249032               // Real '--' 'try'
     && lk != 1251762               // '[' ']' 'try'
     && lk != 1255758               // '{' '}' 'try'
     && lk != 1262013               // 'f32' Identifier 'while'
     && lk != 1262014               // 'f64' Identifier 'while'
     && lk != 1262018               // 'i32' Identifier 'while'
     && lk != 1262019               // 'i64' Identifier 'while'
     && lk != 1264899               // Identifier '++' 'while'
     && lk != 1264900               // Character '++' 'while'
     && lk != 1264901               // String '++' 'while'
     && lk != 1264902               // Integer '++' 'while'
     && lk != 1264903               // Complex '++' 'while'
     && lk != 1264904               // Real '++' 'while'
     && lk != 1265411               // Identifier '--' 'while'
     && lk != 1265412               // Character '--' 'while'
     && lk != 1265413               // String '--' 'while'
     && lk != 1265414               // Integer '--' 'while'
     && lk != 1265415               // Complex '--' 'while'
     && lk != 1265416               // Real '--' 'while'
     && lk != 1268146               // '[' ']' 'while'
     && lk != 1272142               // '{' '}' 'while'
     && lk != 1278397               // 'f32' Identifier '{'
     && lk != 1278398               // 'f64' Identifier '{'
     && lk != 1278402               // 'i32' Identifier '{'
     && lk != 1278403               // 'i64' Identifier '{'
     && lk != 1284530               // '[' ']' '{'
     && lk != 1288526               // '{' '}' '{'
     && lk != 1294781               // 'f32' Identifier '|'
     && lk != 1294782               // 'f64' Identifier '|'
     && lk != 1294786               // 'i32' Identifier '|'
     && lk != 1294787               // 'i64' Identifier '|'
     && lk != 1297667               // Identifier '++' '|'
     && lk != 1297668               // Character '++' '|'
     && lk != 1297669               // String '++' '|'
     && lk != 1297670               // Integer '++' '|'
     && lk != 1297671               // Complex '++' '|'
     && lk != 1297672               // Real '++' '|'
     && lk != 1298179               // Identifier '--' '|'
     && lk != 1298180               // Character '--' '|'
     && lk != 1298181               // String '--' '|'
     && lk != 1298182               // Integer '--' '|'
     && lk != 1298183               // Complex '--' '|'
     && lk != 1298184               // Real '--' '|'
     && lk != 1300914               // '[' ']' '|'
     && lk != 1304910               // '{' '}' '|'
     && lk != 1311165               // 'f32' Identifier '|='
     && lk != 1311166               // 'f64' Identifier '|='
     && lk != 1311170               // 'i32' Identifier '|='
     && lk != 1311171               // 'i64' Identifier '|='
     && lk != 1314051               // Identifier '++' '|='
     && lk != 1314052               // Character '++' '|='
     && lk != 1314053               // String '++' '|='
     && lk != 1314054               // Integer '++' '|='
     && lk != 1314055               // Complex '++' '|='
     && lk != 1314056               // Real '++' '|='
     && lk != 1314563               // Identifier '--' '|='
     && lk != 1314564               // Character '--' '|='
     && lk != 1314565               // String '--' '|='
     && lk != 1314566               // Integer '--' '|='
     && lk != 1314567               // Complex '--' '|='
     && lk != 1314568               // Real '--' '|='
     && lk != 1317298               // '[' ']' '|='
     && lk != 1321294               // '{' '}' '|='
     && lk != 1327549               // 'f32' Identifier '||'
     && lk != 1327550               // 'f64' Identifier '||'
     && lk != 1327554               // 'i32' Identifier '||'
     && lk != 1327555               // 'i64' Identifier '||'
     && lk != 1330435               // Identifier '++' '||'
     && lk != 1330436               // Character '++' '||'
     && lk != 1330437               // String '++' '||'
     && lk != 1330438               // Integer '++' '||'
     && lk != 1330439               // Complex '++' '||'
     && lk != 1330440               // Real '++' '||'
     && lk != 1330947               // Identifier '--' '||'
     && lk != 1330948               // Character '--' '||'
     && lk != 1330949               // String '--' '||'
     && lk != 1330950               // Integer '--' '||'
     && lk != 1330951               // Complex '--' '||'
     && lk != 1330952               // Real '--' '||'
     && lk != 1333682               // '[' ']' '||'
     && lk != 1337678               // '{' '}' '||'
     && lk != 1343933               // 'f32' Identifier '}'
     && lk != 1343934               // 'f64' Identifier '}'
     && lk != 1343938               // 'i32' Identifier '}'
     && lk != 1343939               // 'i64' Identifier '}'
     && lk != 1346819               // Identifier '++' '}'
     && lk != 1346820               // Character '++' '}'
     && lk != 1346821               // String '++' '}'
     && lk != 1346822               // Integer '++' '}'
     && lk != 1346823               // Complex '++' '}'
     && lk != 1346824               // Real '++' '}'
     && lk != 1347331               // Identifier '--' '}'
     && lk != 1347332               // Character '--' '}'
     && lk != 1347333               // String '--' '}'
     && lk != 1347334               // Integer '--' '}'
     && lk != 1347335               // Complex '--' '}'
     && lk != 1347336               // Real '--' '}'
     && lk != 1350066               // '[' ']' '}'
     && lk != 1354062               // '{' '}' '}'
     && lk != 1360317               // 'f32' Identifier '~'
     && lk != 1360318               // 'f64' Identifier '~'
     && lk != 1360322               // 'i32' Identifier '~'
     && lk != 1360323               // 'i64' Identifier '~'
     && lk != 1363203               // Identifier '++' '~'
     && lk != 1363204               // Character '++' '~'
     && lk != 1363205               // String '++' '~'
     && lk != 1363206               // Integer '++' '~'
     && lk != 1363207               // Complex '++' '~'
     && lk != 1363208               // Real '++' '~'
     && lk != 1363715               // Identifier '--' '~'
     && lk != 1363716               // Character '--' '~'
     && lk != 1363717               // String '--' '~'
     && lk != 1363718               // Integer '--' '~'
     && lk != 1363719               // Complex '--' '~'
     && lk != 1363720               // Real '--' '~'
     && lk != 1366450               // '[' ']' '~'
     && lk != 1370446)              // '{' '}' '~'
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
    case 1035523:                   // Identifier '++' 'for'
    case 1035524:                   // Character '++' 'for'
    case 1035525:                   // String '++' 'for'
    case 1035526:                   // Integer '++' 'for'
    case 1035527:                   // Complex '++' 'for'
    case 1035528:                   // Real '++' 'for'
    case 1051907:                   // Identifier '++' 'foreach'
    case 1051908:                   // Character '++' 'foreach'
    case 1051909:                   // String '++' 'foreach'
    case 1051910:                   // Integer '++' 'foreach'
    case 1051911:                   // Complex '++' 'foreach'
    case 1051912:                   // Real '++' 'foreach'
    case 1068291:                   // Identifier '++' 'global'
    case 1068292:                   // Character '++' 'global'
    case 1068293:                   // String '++' 'global'
    case 1068294:                   // Integer '++' 'global'
    case 1068295:                   // Complex '++' 'global'
    case 1068296:                   // Real '++' 'global'
    case 1117443:                   // Identifier '++' 'if'
    case 1117444:                   // Character '++' 'if'
    case 1117445:                   // String '++' 'if'
    case 1117446:                   // Integer '++' 'if'
    case 1117447:                   // Complex '++' 'if'
    case 1117448:                   // Real '++' 'if'
    case 1133827:                   // Identifier '++' 'import'
    case 1133828:                   // Character '++' 'import'
    case 1133829:                   // String '++' 'import'
    case 1133830:                   // Integer '++' 'import'
    case 1133831:                   // Complex '++' 'import'
    case 1133832:                   // Real '++' 'import'
    case 1150211:                   // Identifier '++' 'include'
    case 1150212:                   // Character '++' 'include'
    case 1150213:                   // String '++' 'include'
    case 1150214:                   // Integer '++' 'include'
    case 1150215:                   // Complex '++' 'include'
    case 1150216:                   // Real '++' 'include'
    case 1166595:                   // Identifier '++' 'local'
    case 1166596:                   // Character '++' 'local'
    case 1166597:                   // String '++' 'local'
    case 1166598:                   // Integer '++' 'local'
    case 1166599:                   // Complex '++' 'local'
    case 1166600:                   // Real '++' 'local'
    case 1182979:                   // Identifier '++' 'return'
    case 1182980:                   // Character '++' 'return'
    case 1182981:                   // String '++' 'return'
    case 1182982:                   // Integer '++' 'return'
    case 1182983:                   // Complex '++' 'return'
    case 1182984:                   // Real '++' 'return'
    case 1199363:                   // Identifier '++' 'switch'
    case 1199364:                   // Character '++' 'switch'
    case 1199365:                   // String '++' 'switch'
    case 1199366:                   // Integer '++' 'switch'
    case 1199367:                   // Complex '++' 'switch'
    case 1199368:                   // Real '++' 'switch'
    case 1215747:                   // Identifier '++' 'test'
    case 1215748:                   // Character '++' 'test'
    case 1215749:                   // String '++' 'test'
    case 1215750:                   // Integer '++' 'test'
    case 1215751:                   // Complex '++' 'test'
    case 1215752:                   // Real '++' 'test'
    case 1232131:                   // Identifier '++' 'throw'
    case 1232132:                   // Character '++' 'throw'
    case 1232133:                   // String '++' 'throw'
    case 1232134:                   // Integer '++' 'throw'
    case 1232135:                   // Complex '++' 'throw'
    case 1232136:                   // Real '++' 'throw'
    case 1248515:                   // Identifier '++' 'try'
    case 1248516:                   // Character '++' 'try'
    case 1248517:                   // String '++' 'try'
    case 1248518:                   // Integer '++' 'try'
    case 1248519:                   // Complex '++' 'try'
    case 1248520:                   // Real '++' 'try'
    case 1264899:                   // Identifier '++' 'while'
    case 1264900:                   // Character '++' 'while'
    case 1264901:                   // String '++' 'while'
    case 1264902:                   // Integer '++' 'while'
    case 1264903:                   // Complex '++' 'while'
    case 1264904:                   // Real '++' 'while'
    case 1297667:                   // Identifier '++' '|'
    case 1297668:                   // Character '++' '|'
    case 1297669:                   // String '++' '|'
    case 1297670:                   // Integer '++' '|'
    case 1297671:                   // Complex '++' '|'
    case 1297672:                   // Real '++' '|'
    case 1314051:                   // Identifier '++' '|='
    case 1314052:                   // Character '++' '|='
    case 1314053:                   // String '++' '|='
    case 1314054:                   // Integer '++' '|='
    case 1314055:                   // Complex '++' '|='
    case 1314056:                   // Real '++' '|='
    case 1330435:                   // Identifier '++' '||'
    case 1330436:                   // Character '++' '||'
    case 1330437:                   // String '++' '||'
    case 1330438:                   // Integer '++' '||'
    case 1330439:                   // Complex '++' '||'
    case 1330440:                   // Real '++' '||'
    case 1346819:                   // Identifier '++' '}'
    case 1346820:                   // Character '++' '}'
    case 1346821:                   // String '++' '}'
    case 1346822:                   // Integer '++' '}'
    case 1346823:                   // Complex '++' '}'
    case 1346824:                   // Real '++' '}'
    case 1363203:                   // Identifier '++' '~'
    case 1363204:                   // Character '++' '~'
    case 1363205:                   // String '++' '~'
    case 1363206:                   // Integer '++' '~'
    case 1363207:                   // Complex '++' '~'
    case 1363208:                   // Real '++' '~'
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
    case 1036035:                   // Identifier '--' 'for'
    case 1036036:                   // Character '--' 'for'
    case 1036037:                   // String '--' 'for'
    case 1036038:                   // Integer '--' 'for'
    case 1036039:                   // Complex '--' 'for'
    case 1036040:                   // Real '--' 'for'
    case 1052419:                   // Identifier '--' 'foreach'
    case 1052420:                   // Character '--' 'foreach'
    case 1052421:                   // String '--' 'foreach'
    case 1052422:                   // Integer '--' 'foreach'
    case 1052423:                   // Complex '--' 'foreach'
    case 1052424:                   // Real '--' 'foreach'
    case 1068803:                   // Identifier '--' 'global'
    case 1068804:                   // Character '--' 'global'
    case 1068805:                   // String '--' 'global'
    case 1068806:                   // Integer '--' 'global'
    case 1068807:                   // Complex '--' 'global'
    case 1068808:                   // Real '--' 'global'
    case 1117955:                   // Identifier '--' 'if'
    case 1117956:                   // Character '--' 'if'
    case 1117957:                   // String '--' 'if'
    case 1117958:                   // Integer '--' 'if'
    case 1117959:                   // Complex '--' 'if'
    case 1117960:                   // Real '--' 'if'
    case 1134339:                   // Identifier '--' 'import'
    case 1134340:                   // Character '--' 'import'
    case 1134341:                   // String '--' 'import'
    case 1134342:                   // Integer '--' 'import'
    case 1134343:                   // Complex '--' 'import'
    case 1134344:                   // Real '--' 'import'
    case 1150723:                   // Identifier '--' 'include'
    case 1150724:                   // Character '--' 'include'
    case 1150725:                   // String '--' 'include'
    case 1150726:                   // Integer '--' 'include'
    case 1150727:                   // Complex '--' 'include'
    case 1150728:                   // Real '--' 'include'
    case 1167107:                   // Identifier '--' 'local'
    case 1167108:                   // Character '--' 'local'
    case 1167109:                   // String '--' 'local'
    case 1167110:                   // Integer '--' 'local'
    case 1167111:                   // Complex '--' 'local'
    case 1167112:                   // Real '--' 'local'
    case 1183491:                   // Identifier '--' 'return'
    case 1183492:                   // Character '--' 'return'
    case 1183493:                   // String '--' 'return'
    case 1183494:                   // Integer '--' 'return'
    case 1183495:                   // Complex '--' 'return'
    case 1183496:                   // Real '--' 'return'
    case 1199875:                   // Identifier '--' 'switch'
    case 1199876:                   // Character '--' 'switch'
    case 1199877:                   // String '--' 'switch'
    case 1199878:                   // Integer '--' 'switch'
    case 1199879:                   // Complex '--' 'switch'
    case 1199880:                   // Real '--' 'switch'
    case 1216259:                   // Identifier '--' 'test'
    case 1216260:                   // Character '--' 'test'
    case 1216261:                   // String '--' 'test'
    case 1216262:                   // Integer '--' 'test'
    case 1216263:                   // Complex '--' 'test'
    case 1216264:                   // Real '--' 'test'
    case 1232643:                   // Identifier '--' 'throw'
    case 1232644:                   // Character '--' 'throw'
    case 1232645:                   // String '--' 'throw'
    case 1232646:                   // Integer '--' 'throw'
    case 1232647:                   // Complex '--' 'throw'
    case 1232648:                   // Real '--' 'throw'
    case 1249027:                   // Identifier '--' 'try'
    case 1249028:                   // Character '--' 'try'
    case 1249029:                   // String '--' 'try'
    case 1249030:                   // Integer '--' 'try'
    case 1249031:                   // Complex '--' 'try'
    case 1249032:                   // Real '--' 'try'
    case 1265411:                   // Identifier '--' 'while'
    case 1265412:                   // Character '--' 'while'
    case 1265413:                   // String '--' 'while'
    case 1265414:                   // Integer '--' 'while'
    case 1265415:                   // Complex '--' 'while'
    case 1265416:                   // Real '--' 'while'
    case 1298179:                   // Identifier '--' '|'
    case 1298180:                   // Character '--' '|'
    case 1298181:                   // String '--' '|'
    case 1298182:                   // Integer '--' '|'
    case 1298183:                   // Complex '--' '|'
    case 1298184:                   // Real '--' '|'
    case 1314563:                   // Identifier '--' '|='
    case 1314564:                   // Character '--' '|='
    case 1314565:                   // String '--' '|='
    case 1314566:                   // Integer '--' '|='
    case 1314567:                   // Complex '--' '|='
    case 1314568:                   // Real '--' '|='
    case 1330947:                   // Identifier '--' '||'
    case 1330948:                   // Character '--' '||'
    case 1330949:                   // String '--' '||'
    case 1330950:                   // Integer '--' '||'
    case 1330951:                   // Complex '--' '||'
    case 1330952:                   // Real '--' '||'
    case 1347331:                   // Identifier '--' '}'
    case 1347332:                   // Character '--' '}'
    case 1347333:                   // String '--' '}'
    case 1347334:                   // Integer '--' '}'
    case 1347335:                   // Complex '--' '}'
    case 1347336:                   // Real '--' '}'
    case 1363715:                   // Identifier '--' '~'
    case 1363716:                   // Character '--' '~'
    case 1363717:                   // String '--' '~'
    case 1363718:                   // Integer '--' '~'
    case 1363719:                   // Complex '--' '~'
    case 1363720:                   // Real '--' '~'
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
    case 83:                        // '~'
      consumeT(83);                 // '~'
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
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
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
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
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
    case 77:                        // 'while'
      parse_While();
      break;
    case 63:                        // 'for'
      parse_For();
      break;
    case 64:                        // 'foreach'
      parse_ForEach();
      break;
    case 54:                        // 'break'
      parse_Break();
      break;
    case 57:                        // 'continue'
      parse_Continue();
      break;
    case 68:                        // 'if'
      parse_If();
      break;
    case 73:                        // 'switch'
      parse_Switch();
      break;
    case 76:                        // 'try'
      parse_Try();
      break;
    case 74:                        // 'test'
      parse_Test();
      break;
    case -11:
    case 9987:                      // Identifier '{'
      parse_NamespaceDeclaration();
      break;
    case 72:                        // 'return'
      parse_Return();
      break;
    case 69:                        // 'import'
      parse_Import();
      break;
    case 70:                        // 'include'
      parse_Include();
      break;
    case 65:                        // 'global'
      parse_Global();
      break;
    case 71:                        // 'local'
      parse_Local();
      break;
    case 75:                        // 'throw'
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
          lk = -20;
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
    case 77:                        // 'while'
      try_While();
      break;
    case 63:                        // 'for'
      try_For();
      break;
    case 64:                        // 'foreach'
      try_ForEach();
      break;
    case 54:                        // 'break'
      try_Break();
      break;
    case 57:                        // 'continue'
      try_Continue();
      break;
    case 68:                        // 'if'
      try_If();
      break;
    case 73:                        // 'switch'
      try_Switch();
      break;
    case 76:                        // 'try'
      try_Try();
      break;
    case 74:                        // 'test'
      try_Test();
      break;
    case -11:
    case 9987:                      // Identifier '{'
      try_NamespaceDeclaration();
      break;
    case 72:                        // 'return'
      try_Return();
      break;
    case 69:                        // 'import'
      try_Import();
      break;
    case 70:                        // 'include'
      try_Include();
      break;
    case 65:                        // 'global'
      try_Global();
      break;
    case 71:                        // 'local'
      try_Local();
      break;
    case 75:                        // 'throw'
      try_Throw();
      break;
    case 37:                        // ';'
      try_EmptyStatement();
      break;
    case -20:
      break;
    default:
      try_FunctionDeclaration();
    }
  }

  function parse_Do()
  {
    eventHandler.startNonterminal("Do", e0);
    consume(59);                    // 'do'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consume(77);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(59);                   // 'do'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consumeT(77);                   // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(77);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(77);                   // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    eventHandler.startNonterminal("For", e0);
    consume(63);                    // 'for'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("For", e0);
  }

  function try_For()
  {
    consumeT(63);                   // 'for'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_ForEach()
  {
    eventHandler.startNonterminal("ForEach", e0);
    consume(64);                    // 'foreach'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("ForEach", e0);
  }

  function try_ForEach()
  {
    consumeT(64);                   // 'foreach'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
    consume(68);                    // 'if'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10044:                   // 'else' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 7868:                    // 'else' 'f32'
      case 7996:                    // 'else' 'f64'
      case 8508:                    // 'else' 'i32'
      case 8636:                    // 'else' 'i64'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10684:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8764:                    // 'else' 'if'
      case 9404:                    // 'else' 'switch'
      case 9532:                    // 'else' 'test'
      case 9916:                    // 'else' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8380:                    // 'else' 'global'
      case 8892:                    // 'else' 'import'
      case 9020:                    // 'else' 'include'
      case 9148:                    // 'else' 'local'
      case 9276:                    // 'else' 'return'
      case 9660:                    // 'else' 'throw'
      case 9788:                    // 'else' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
     && lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'global'
     && lk != 66                    // 'i32'
     && lk != 67                    // 'i64'
     && lk != 68                    // 'if'
     && lk != 69                    // 'import'
     && lk != 70                    // 'include'
     && lk != 71                    // 'local'
     && lk != 72                    // 'return'
     && lk != 73                    // 'switch'
     && lk != 74                    // 'test'
     && lk != 75                    // 'throw'
     && lk != 76                    // 'try'
     && lk != 77                    // 'while'
     && lk != 78                    // '{'
     && lk != 82                    // '}'
     && lk != 83)                   // '~'
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
    consumeT(68);                   // 'if'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 10044:                   // 'else' '{'
        lookahead3W(35);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 7868:                    // 'else' 'f32'
      case 7996:                    // 'else' 'f64'
      case 8508:                    // 'else' 'i32'
      case 8636:                    // 'else' 'i64'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10684:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8764:                    // 'else' 'if'
      case 9404:                    // 'else' 'switch'
      case 9532:                    // 'else' 'test'
      case 9916:                    // 'else' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8380:                    // 'else' 'global'
      case 8892:                    // 'else' 'import'
      case 9020:                    // 'else' 'include'
      case 9148:                    // 'else' 'local'
      case 9276:                    // 'else' 'return'
      case 9660:                    // 'else' 'throw'
      case 9788:                    // 'else' 'try'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
     && lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'global'
     && lk != 66                    // 'i32'
     && lk != 67                    // 'i64'
     && lk != 68                    // 'if'
     && lk != 69                    // 'import'
     && lk != 70                    // 'include'
     && lk != 71                    // 'local'
     && lk != 72                    // 'return'
     && lk != 73                    // 'switch'
     && lk != 74                    // 'test'
     && lk != 75                    // 'throw'
     && lk != 76                    // 'try'
     && lk != 77                    // 'while'
     && lk != 78                    // '{'
     && lk != 82                    // '}'
     && lk != 83)                   // '~'
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
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Else", e0);
  }

  function try_Else()
  {
    consumeT(60);                   // 'else'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(73);                    // 'switch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consume(78);                    // '{'
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
    consume(82);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(73);                   // 'switch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consumeT(78);                   // '{'
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
    consumeT(82);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(55);                    // 'case'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(36);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 82)                 // '}'
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
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(36);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 82)                 // '}'
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
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 82)                 // '}'
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
      lookahead1W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 82)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Try()
  {
    eventHandler.startNonterminal("Try", e0);
    consume(76);                    // 'try'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
     || lk == 1002040               // 'catch' '(' 'f32'
     || lk == 1018424               // 'catch' '(' 'f64'
     || lk == 1034808               // 'catch' '(' 'for'
     || lk == 1051192               // 'catch' '(' 'foreach'
     || lk == 1067576               // 'catch' '(' 'global'
     || lk == 1083960               // 'catch' '(' 'i32'
     || lk == 1100344               // 'catch' '(' 'i64'
     || lk == 1116728               // 'catch' '(' 'if'
     || lk == 1133112               // 'catch' '(' 'import'
     || lk == 1149496               // 'catch' '(' 'include'
     || lk == 1165880               // 'catch' '(' 'local'
     || lk == 1182264               // 'catch' '(' 'return'
     || lk == 1198648               // 'catch' '(' 'switch'
     || lk == 1215032               // 'catch' '(' 'test'
     || lk == 1231416               // 'catch' '(' 'throw'
     || lk == 1247800               // 'catch' '(' 'try'
     || lk == 1264184               // 'catch' '(' 'while'
     || lk == 1280568               // 'catch' '(' '{'
     || lk == 1362488)              // 'catch' '(' '~'
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
    consumeT(76);                   // 'try'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
     || lk == 1002040               // 'catch' '(' 'f32'
     || lk == 1018424               // 'catch' '(' 'f64'
     || lk == 1034808               // 'catch' '(' 'for'
     || lk == 1051192               // 'catch' '(' 'foreach'
     || lk == 1067576               // 'catch' '(' 'global'
     || lk == 1083960               // 'catch' '(' 'i32'
     || lk == 1100344               // 'catch' '(' 'i64'
     || lk == 1116728               // 'catch' '(' 'if'
     || lk == 1133112               // 'catch' '(' 'import'
     || lk == 1149496               // 'catch' '(' 'include'
     || lk == 1165880               // 'catch' '(' 'local'
     || lk == 1182264               // 'catch' '(' 'return'
     || lk == 1198648               // 'catch' '(' 'switch'
     || lk == 1215032               // 'catch' '(' 'test'
     || lk == 1231416               // 'catch' '(' 'throw'
     || lk == 1247800               // 'catch' '(' 'try'
     || lk == 1264184               // 'catch' '(' 'while'
     || lk == 1280568               // 'catch' '(' '{'
     || lk == 1362488)              // 'catch' '(' '~'
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
    consume(74);                    // 'test'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(28);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
     && lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'global'
     && lk != 66                    // 'i32'
     && lk != 67                    // 'i64'
     && lk != 68                    // 'if'
     && lk != 69                    // 'import'
     && lk != 70                    // 'include'
     && lk != 71                    // 'local'
     && lk != 72                    // 'return'
     && lk != 73                    // 'switch'
     && lk != 74                    // 'test'
     && lk != 75                    // 'throw'
     && lk != 76                    // 'try'
     && lk != 77                    // 'while'
     && lk != 78                    // '{'
     && lk != 83                    // '~'
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
     && lk != 7845                  // ';' 'f32'
     && lk != 7973                  // ';' 'f64'
     && lk != 8101                  // ';' 'for'
     && lk != 8229                  // ';' 'foreach'
     && lk != 8357                  // ';' 'global'
     && lk != 8485                  // ';' 'i32'
     && lk != 8613                  // ';' 'i64'
     && lk != 8741                  // ';' 'if'
     && lk != 8869                  // ';' 'import'
     && lk != 8997                  // ';' 'include'
     && lk != 9125                  // ';' 'local'
     && lk != 9253                  // ';' 'return'
     && lk != 9381                  // ';' 'switch'
     && lk != 9509                  // ';' 'test'
     && lk != 9637                  // ';' 'throw'
     && lk != 9765                  // ';' 'try'
     && lk != 9893                  // ';' 'while'
     && lk != 10021                 // ';' '{'
     && lk != 10661)                // ';' '~'
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
     || lk == 61                    // 'f32'
     || lk == 62                    // 'f64'
     || lk == 63                    // 'for'
     || lk == 64                    // 'foreach'
     || lk == 65                    // 'global'
     || lk == 66                    // 'i32'
     || lk == 67                    // 'i64'
     || lk == 68                    // 'if'
     || lk == 69                    // 'import'
     || lk == 70                    // 'include'
     || lk == 71                    // 'local'
     || lk == 72                    // 'return'
     || lk == 73                    // 'switch'
     || lk == 74                    // 'test'
     || lk == 75                    // 'throw'
     || lk == 76                    // 'try'
     || lk == 77                    // 'while'
     || lk == 78                    // '{'
     || lk == 83)                   // '~'
    {
      whitespace();
      parse_Expression();
    }
    lookahead1W(16);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consume(37);                  // ';'
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
       || lk == 1002149             // ';' ')' 'f32'
       || lk == 1018533             // ';' ')' 'f64'
       || lk == 1034917             // ';' ')' 'for'
       || lk == 1051301             // ';' ')' 'foreach'
       || lk == 1067685             // ';' ')' 'global'
       || lk == 1084069             // ';' ')' 'i32'
       || lk == 1100453             // ';' ')' 'i64'
       || lk == 1116837             // ';' ')' 'if'
       || lk == 1133221             // ';' ')' 'import'
       || lk == 1149605             // ';' ')' 'include'
       || lk == 1165989             // ';' ')' 'local'
       || lk == 1182373             // ';' ')' 'return'
       || lk == 1198757             // ';' ')' 'switch'
       || lk == 1215141             // ';' ')' 'test'
       || lk == 1231525             // ';' ')' 'throw'
       || lk == 1247909             // ';' ')' 'try'
       || lk == 1264293             // ';' ')' 'while'
       || lk == 1280677             // ';' ')' '{'
       || lk == 1362597)            // ';' ')' '~'
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
       && lk != 7845                // ';' 'f32'
       && lk != 7973                // ';' 'f64'
       && lk != 8101                // ';' 'for'
       && lk != 8229                // ';' 'foreach'
       && lk != 8357                // ';' 'global'
       && lk != 8485                // ';' 'i32'
       && lk != 8613                // ';' 'i64'
       && lk != 8741                // ';' 'if'
       && lk != 8869                // ';' 'import'
       && lk != 8997                // ';' 'include'
       && lk != 9125                // ';' 'local'
       && lk != 9253                // ';' 'return'
       && lk != 9381                // ';' 'switch'
       && lk != 9509                // ';' 'test'
       && lk != 9637                // ';' 'throw'
       && lk != 9765                // ';' 'try'
       && lk != 9893                // ';' 'while'
       && lk != 10021               // ';' '{'
       && lk != 10661)              // ';' '~'
      {
        whitespace();
        parse_Expression();
      }
      lookahead1W(16);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consume(37);                // ';'
        lookahead1W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          whitespace();
          parse_Expression();
        }
      }
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
     || lk == 1002040               // 'catch' '(' 'f32'
     || lk == 1018424               // 'catch' '(' 'f64'
     || lk == 1034808               // 'catch' '(' 'for'
     || lk == 1051192               // 'catch' '(' 'foreach'
     || lk == 1067576               // 'catch' '(' 'global'
     || lk == 1083960               // 'catch' '(' 'i32'
     || lk == 1100344               // 'catch' '(' 'i64'
     || lk == 1116728               // 'catch' '(' 'if'
     || lk == 1133112               // 'catch' '(' 'import'
     || lk == 1149496               // 'catch' '(' 'include'
     || lk == 1165880               // 'catch' '(' 'local'
     || lk == 1182264               // 'catch' '(' 'return'
     || lk == 1198648               // 'catch' '(' 'switch'
     || lk == 1215032               // 'catch' '(' 'test'
     || lk == 1231416               // 'catch' '(' 'throw'
     || lk == 1247800               // 'catch' '(' 'try'
     || lk == 1264184               // 'catch' '(' 'while'
     || lk == 1280568               // 'catch' '(' '{'
     || lk == 1362488)              // 'catch' '(' '~'
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
    consumeT(74);                   // 'test'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(28);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
     && lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'global'
     && lk != 66                    // 'i32'
     && lk != 67                    // 'i64'
     && lk != 68                    // 'if'
     && lk != 69                    // 'import'
     && lk != 70                    // 'include'
     && lk != 71                    // 'local'
     && lk != 72                    // 'return'
     && lk != 73                    // 'switch'
     && lk != 74                    // 'test'
     && lk != 75                    // 'throw'
     && lk != 76                    // 'try'
     && lk != 77                    // 'while'
     && lk != 78                    // '{'
     && lk != 83                    // '~'
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
     && lk != 7845                  // ';' 'f32'
     && lk != 7973                  // ';' 'f64'
     && lk != 8101                  // ';' 'for'
     && lk != 8229                  // ';' 'foreach'
     && lk != 8357                  // ';' 'global'
     && lk != 8485                  // ';' 'i32'
     && lk != 8613                  // ';' 'i64'
     && lk != 8741                  // ';' 'if'
     && lk != 8869                  // ';' 'import'
     && lk != 8997                  // ';' 'include'
     && lk != 9125                  // ';' 'local'
     && lk != 9253                  // ';' 'return'
     && lk != 9381                  // ';' 'switch'
     && lk != 9509                  // ';' 'test'
     && lk != 9637                  // ';' 'throw'
     && lk != 9765                  // ';' 'try'
     && lk != 9893                  // ';' 'while'
     && lk != 10021                 // ';' '{'
     && lk != 10661)                // ';' '~'
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
     || lk == 61                    // 'f32'
     || lk == 62                    // 'f64'
     || lk == 63                    // 'for'
     || lk == 64                    // 'foreach'
     || lk == 65                    // 'global'
     || lk == 66                    // 'i32'
     || lk == 67                    // 'i64'
     || lk == 68                    // 'if'
     || lk == 69                    // 'import'
     || lk == 70                    // 'include'
     || lk == 71                    // 'local'
     || lk == 72                    // 'return'
     || lk == 73                    // 'switch'
     || lk == 74                    // 'test'
     || lk == 75                    // 'throw'
     || lk == 76                    // 'try'
     || lk == 77                    // 'while'
     || lk == 78                    // '{'
     || lk == 83)                   // '~'
    {
      try_Expression();
    }
    lookahead1W(16);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consumeT(37);                 // ';'
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
       || lk == 1002149             // ';' ')' 'f32'
       || lk == 1018533             // ';' ')' 'f64'
       || lk == 1034917             // ';' ')' 'for'
       || lk == 1051301             // ';' ')' 'foreach'
       || lk == 1067685             // ';' ')' 'global'
       || lk == 1084069             // ';' ')' 'i32'
       || lk == 1100453             // ';' ')' 'i64'
       || lk == 1116837             // ';' ')' 'if'
       || lk == 1133221             // ';' ')' 'import'
       || lk == 1149605             // ';' ')' 'include'
       || lk == 1165989             // ';' ')' 'local'
       || lk == 1182373             // ';' ')' 'return'
       || lk == 1198757             // ';' ')' 'switch'
       || lk == 1215141             // ';' ')' 'test'
       || lk == 1231525             // ';' ')' 'throw'
       || lk == 1247909             // ';' ')' 'try'
       || lk == 1264293             // ';' ')' 'while'
       || lk == 1280677             // ';' ')' '{'
       || lk == 1362597)            // ';' ')' '~'
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
       && lk != 7845                // ';' 'f32'
       && lk != 7973                // ';' 'f64'
       && lk != 8101                // ';' 'for'
       && lk != 8229                // ';' 'foreach'
       && lk != 8357                // ';' 'global'
       && lk != 8485                // ';' 'i32'
       && lk != 8613                // ';' 'i64'
       && lk != 8741                // ';' 'if'
       && lk != 8869                // ';' 'import'
       && lk != 8997                // ';' 'include'
       && lk != 9125                // ';' 'local'
       && lk != 9253                // ';' 'return'
       && lk != 9381                // ';' 'switch'
       && lk != 9509                // ';' 'test'
       && lk != 9637                // ';' 'throw'
       && lk != 9765                // ';' 'try'
       && lk != 9893                // ';' 'while'
       && lk != 10021               // ';' '{'
       && lk != 10661)              // ';' '~'
      {
        try_Expression();
      }
      lookahead1W(16);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consumeT(37);               // ';'
        lookahead1W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Expression();
        }
      }
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' | 'i64' | 'if' | 'import' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
     || lk == 1002040               // 'catch' '(' 'f32'
     || lk == 1018424               // 'catch' '(' 'f64'
     || lk == 1034808               // 'catch' '(' 'for'
     || lk == 1051192               // 'catch' '(' 'foreach'
     || lk == 1067576               // 'catch' '(' 'global'
     || lk == 1083960               // 'catch' '(' 'i32'
     || lk == 1100344               // 'catch' '(' 'i64'
     || lk == 1116728               // 'catch' '(' 'if'
     || lk == 1133112               // 'catch' '(' 'import'
     || lk == 1149496               // 'catch' '(' 'include'
     || lk == 1165880               // 'catch' '(' 'local'
     || lk == 1182264               // 'catch' '(' 'return'
     || lk == 1198648               // 'catch' '(' 'switch'
     || lk == 1215032               // 'catch' '(' 'test'
     || lk == 1231416               // 'catch' '(' 'throw'
     || lk == 1247800               // 'catch' '(' 'try'
     || lk == 1264184               // 'catch' '(' 'while'
     || lk == 1280568               // 'catch' '(' '{'
     || lk == 1362488)              // 'catch' '(' '~'
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
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Catch", e0);
  }

  function try_Catch()
  {
    consumeT(56);                   // 'catch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 450:                     // 'i32' Identifier
      case 451:                     // 'i64' Identifier
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
        lookahead1W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Arguments();
        }
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
          lookahead1W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
            lookahead1W(28);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
              lookahead1W(28);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                lookahead1W(28);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consume(42);                  // '='
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 66:                        // 'i32'
    case 67:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 450:                     // 'i32' Identifier
      case 451:                     // 'i64' Identifier
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
        lookahead1W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Arguments();
        }
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
          lookahead1W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
            lookahead1W(28);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
              lookahead1W(28);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                lookahead1W(28);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consumeT(42);                 // '='
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
    consume(72);                    // 'return'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(72);                   // 'return'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Import()
  {
    eventHandler.startNonterminal("Import", e0);
    consume(69);                    // 'import'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Import", e0);
  }

  function try_Import()
  {
    consumeT(69);                   // 'import'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Include()
  {
    eventHandler.startNonterminal("Include", e0);
    consume(70);                    // 'include'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Include", e0);
  }

  function try_Include()
  {
    consumeT(70);                   // 'include'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Global()
  {
    eventHandler.startNonterminal("Global", e0);
    consume(65);                    // 'global'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Global", e0);
  }

  function try_Global()
  {
    consumeT(65);                   // 'global'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Local()
  {
    eventHandler.startNonterminal("Local", e0);
    consume(71);                    // 'local'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Local", e0);
  }

  function try_Local()
  {
    consumeT(71);                   // 'local'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Throw()
  {
    eventHandler.startNonterminal("Throw", e0);
    consume(75);                    // 'throw'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Throw", e0);
  }

  function try_Throw()
  {
    consumeT(75);                   // 'throw'
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
    case 66:                        // 'i32'
      consume(66);                  // 'i32'
      break;
    case 67:                        // 'i64'
      consume(67);                  // 'i64'
      break;
    case 61:                        // 'f32'
      consume(61);                  // 'f32'
      break;
    default:
      consume(62);                  // 'f64'
    }
    eventHandler.endNonterminal("Type", e0);
  }

  function try_Type()
  {
    switch (l1)
    {
    case 66:                        // 'i32'
      consumeT(66);                 // 'i32'
      break;
    case 67:                        // 'i64'
      consumeT(67);                 // 'i64'
      break;
    case 61:                        // 'f32'
      consumeT(61);                 // 'f32'
      break;
    default:
      consumeT(62);                 // 'f64'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
     || lk == 1001987               // Identifier '(' 'f32'
     || lk == 1018371               // Identifier '(' 'f64'
     || lk == 1034755               // Identifier '(' 'for'
     || lk == 1051139               // Identifier '(' 'foreach'
     || lk == 1067523               // Identifier '(' 'global'
     || lk == 1083907               // Identifier '(' 'i32'
     || lk == 1100291               // Identifier '(' 'i64'
     || lk == 1116675               // Identifier '(' 'if'
     || lk == 1133059               // Identifier '(' 'import'
     || lk == 1149443               // Identifier '(' 'include'
     || lk == 1165827               // Identifier '(' 'local'
     || lk == 1182211               // Identifier '(' 'return'
     || lk == 1198595               // Identifier '(' 'switch'
     || lk == 1214979               // Identifier '(' 'test'
     || lk == 1231363               // Identifier '(' 'throw'
     || lk == 1247747               // Identifier '(' 'try'
     || lk == 1264131               // Identifier '(' 'while'
     || lk == 1280515               // Identifier '(' '{'
     || lk == 1362435)              // Identifier '(' '~'
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
          lookahead1W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(29);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(29);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(44);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
            break;
          case 10034:               // '[' '{'
            lookahead3W(35);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8498:                // '[' 'i32'
          case 8626:                // '[' 'i64'
            lookahead3W(0);         // Identifier | WhiteSpace^token
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 946:                 // '[' Complex
          case 1074:                // '[' Real
            lookahead3W(32);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 1586:                // '[' '!'
          case 3250:                // '[' '+'
          case 3378:                // '[' '++'
          case 3762:                // '[' '-'
          case 3890:                // '[' '--'
          case 10674:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8754:                // '[' 'if'
          case 9394:                // '[' 'switch'
          case 9522:                // '[' 'test'
          case 9906:                // '[' 'while'
            lookahead3W(3);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 8370:                // '[' 'global'
          case 8882:                // '[' 'import'
          case 9010:                // '[' 'include'
          case 9138:                // '[' 'local'
          case 9266:                // '[' 'return'
          case 9650:                // '[' 'throw'
          case 9778:                // '[' 'try'
            lookahead3W(25);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
         && lk != 61                // 'f32'
         && lk != 62                // 'f64'
         && lk != 63                // 'for'
         && lk != 64                // 'foreach'
         && lk != 65                // 'global'
         && lk != 66                // 'i32'
         && lk != 67                // 'i64'
         && lk != 68                // 'if'
         && lk != 69                // 'import'
         && lk != 70                // 'include'
         && lk != 71                // 'local'
         && lk != 72                // 'return'
         && lk != 73                // 'switch'
         && lk != 74                // 'test'
         && lk != 75                // 'throw'
         && lk != 76                // 'try'
         && lk != 77                // 'while'
         && lk != 78                // '{'
         && lk != 79                // '|'
         && lk != 80                // '|='
         && lk != 81                // '||'
         && lk != 82                // '}'
         && lk != 83                // '~'
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
         && lk != 1004210           // '[' ';' 'f32'
         && lk != 1020594           // '[' ';' 'f64'
         && lk != 1036978           // '[' ';' 'for'
         && lk != 1053362           // '[' ';' 'foreach'
         && lk != 1069746           // '[' ';' 'global'
         && lk != 1086130           // '[' ';' 'i32'
         && lk != 1102514           // '[' ';' 'i64'
         && lk != 1118898           // '[' ';' 'if'
         && lk != 1135282           // '[' ';' 'import'
         && lk != 1151666           // '[' ';' 'include'
         && lk != 1168050           // '[' ';' 'local'
         && lk != 1184434           // '[' ';' 'return'
         && lk != 1200818           // '[' ';' 'switch'
         && lk != 1217202           // '[' ';' 'test'
         && lk != 1233586           // '[' ';' 'throw'
         && lk != 1249970           // '[' ';' 'try'
         && lk != 1266354           // '[' ';' 'while'
         && lk != 1282738           // '[' ';' '{'
         && lk != 1364658)          // '[' ';' '~'
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
              lookahead1W(29);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
        lookahead1W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
     || lk == 1001987               // Identifier '(' 'f32'
     || lk == 1018371               // Identifier '(' 'f64'
     || lk == 1034755               // Identifier '(' 'for'
     || lk == 1051139               // Identifier '(' 'foreach'
     || lk == 1067523               // Identifier '(' 'global'
     || lk == 1083907               // Identifier '(' 'i32'
     || lk == 1100291               // Identifier '(' 'i64'
     || lk == 1116675               // Identifier '(' 'if'
     || lk == 1133059               // Identifier '(' 'import'
     || lk == 1149443               // Identifier '(' 'include'
     || lk == 1165827               // Identifier '(' 'local'
     || lk == 1182211               // Identifier '(' 'return'
     || lk == 1198595               // Identifier '(' 'switch'
     || lk == 1214979               // Identifier '(' 'test'
     || lk == 1231363               // Identifier '(' 'throw'
     || lk == 1247747               // Identifier '(' 'try'
     || lk == 1264131               // Identifier '(' 'while'
     || lk == 1280515               // Identifier '(' '{'
     || lk == 1362435)              // Identifier '(' '~'
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
          lookahead1W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
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
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(29);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(29);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(44);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'global' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
            break;
          case 10034:               // '[' '{'
            lookahead3W(35);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8498:                // '[' 'i32'
          case 8626:                // '[' 'i64'
            lookahead3W(0);         // Identifier | WhiteSpace^token
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 946:                 // '[' Complex
          case 1074:                // '[' Real
            lookahead3W(32);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 1586:                // '[' '!'
          case 3250:                // '[' '+'
          case 3378:                // '[' '++'
          case 3762:                // '[' '-'
          case 3890:                // '[' '--'
          case 10674:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | 'f32' | 'f64' | 'i32' | 'i64' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8754:                // '[' 'if'
          case 9394:                // '[' 'switch'
          case 9522:                // '[' 'test'
          case 9906:                // '[' 'while'
            lookahead3W(3);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 8370:                // '[' 'global'
          case 8882:                // '[' 'import'
          case 9010:                // '[' 'include'
          case 9138:                // '[' 'local'
          case 9266:                // '[' 'return'
          case 9650:                // '[' 'throw'
          case 9778:                // '[' 'try'
            lookahead3W(25);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
         && lk != 61                // 'f32'
         && lk != 62                // 'f64'
         && lk != 63                // 'for'
         && lk != 64                // 'foreach'
         && lk != 65                // 'global'
         && lk != 66                // 'i32'
         && lk != 67                // 'i64'
         && lk != 68                // 'if'
         && lk != 69                // 'import'
         && lk != 70                // 'include'
         && lk != 71                // 'local'
         && lk != 72                // 'return'
         && lk != 73                // 'switch'
         && lk != 74                // 'test'
         && lk != 75                // 'throw'
         && lk != 76                // 'try'
         && lk != 77                // 'while'
         && lk != 78                // '{'
         && lk != 79                // '|'
         && lk != 80                // '|='
         && lk != 81                // '||'
         && lk != 82                // '}'
         && lk != 83                // '~'
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
         && lk != 1004210           // '[' ';' 'f32'
         && lk != 1020594           // '[' ';' 'f64'
         && lk != 1036978           // '[' ';' 'for'
         && lk != 1053362           // '[' ';' 'foreach'
         && lk != 1069746           // '[' ';' 'global'
         && lk != 1086130           // '[' ';' 'i32'
         && lk != 1102514           // '[' ';' 'i64'
         && lk != 1118898           // '[' ';' 'if'
         && lk != 1135282           // '[' ';' 'import'
         && lk != 1151666           // '[' ';' 'include'
         && lk != 1168050           // '[' ';' 'local'
         && lk != 1184434           // '[' ';' 'return'
         && lk != 1200818           // '[' ';' 'switch'
         && lk != 1217202           // '[' ';' 'test'
         && lk != 1233586           // '[' ';' 'throw'
         && lk != 1249970           // '[' ';' 'try'
         && lk != 1266354           // '[' ';' 'while'
         && lk != 1282738           // '[' ';' '{'
         && lk != 1364658)          // '[' ';' '~'
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
              lookahead1W(29);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
        lookahead1W(29);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
    consume(78);                    // '{'
    lookahead1W(35);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    if (l1 != 28                    // ','
     && l1 != 82)                   // '}'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(82);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(78);                   // '{'
    lookahead1W(35);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    if (l1 != 28                    // ','
     && l1 != 82)                   // '}'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
      try_Element();
    }
    consumeT(82);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(50);                    // '['
    lookahead1W(29);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(34);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(34);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
     && lk != 7845                  // ';' 'f32'
     && lk != 7973                  // ';' 'f64'
     && lk != 8101                  // ';' 'for'
     && lk != 8229                  // ';' 'foreach'
     && lk != 8357                  // ';' 'global'
     && lk != 8485                  // ';' 'i32'
     && lk != 8613                  // ';' 'i64'
     && lk != 8741                  // ';' 'if'
     && lk != 8869                  // ';' 'import'
     && lk != 8997                  // ';' 'include'
     && lk != 9125                  // ';' 'local'
     && lk != 9253                  // ';' 'return'
     && lk != 9381                  // ';' 'switch'
     && lk != 9509                  // ';' 'test'
     && lk != 9637                  // ';' 'throw'
     && lk != 9765                  // ';' 'try'
     && lk != 9893                  // ';' 'while'
     && lk != 10021                 // ';' '{'
     && lk != 10661                 // ';' '~'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Row();
    }
    consume(51);                    // ']'
    eventHandler.endNonterminal("Matrix", e0);
  }

  function try_Matrix()
  {
    consumeT(50);                   // '['
    lookahead1W(29);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(34);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(34);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '~'
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
     && lk != 7845                  // ';' 'f32'
     && lk != 7973                  // ';' 'f64'
     && lk != 8101                  // ';' 'for'
     && lk != 8229                  // ';' 'foreach'
     && lk != 8357                  // ';' 'global'
     && lk != 8485                  // ';' 'i32'
     && lk != 8613                  // ';' 'i64'
     && lk != 8741                  // ';' 'if'
     && lk != 8869                  // ';' 'import'
     && lk != 8997                  // ';' 'include'
     && lk != 9125                  // ';' 'local'
     && lk != 9253                  // ';' 'return'
     && lk != 9381                  // ';' 'switch'
     && lk != 9509                  // ';' 'test'
     && lk != 9637                  // ';' 'throw'
     && lk != 9765                  // ';' 'try'
     && lk != 9893                  // ';' 'while'
     && lk != 10021                 // ';' '{'
     && lk != 10661                 // ';' '~'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead2W(31);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead2W(31);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'global' | 'i32' |
                                    // 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '~'
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
    case 78:                        // '{'
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
    case 78:                        // '{'
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
  for (var i = 0; i < 84; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 283 + s - 1;
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
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 1050, 28,
  /* 29 */ 29, 30, 31, 32, 1057, 34, 35, 36, 37, 38, 39, 1064, 41, 42, 43, 1068, 1069
];

MaiaScript.TRANSITION =
[
  /*    0 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*   18 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*   36 */ 3006, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137,
  /*   54 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2331, 2331, 2333, 4137, 3006, 2883, 4137, 4138,
  /*   72 */ 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*   90 */ 4137, 4137, 4137, 4137, 4137, 4137, 2331, 2331, 2333, 4137, 4137, 4137, 4137, 4138, 4137, 3628, 4137, 3616,
  /*  108 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  126 */ 4137, 4137, 4137, 3408, 2349, 4137, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137,
  /*  144 */ 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6343,
  /*  162 */ 2378, 4137, 2439, 2883, 4137, 4138, 2460, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2481, 4137, 4137,
  /*  180 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2508, 6493, 2527, 4137, 3006, 2883,
  /*  198 */ 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  216 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854, 3204, 3754, 3797, 5168, 4905, 3524,
  /*  234 */ 5167, 3266, 5167, 3855, 3849, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  252 */ 4137, 4137, 4137, 4137, 4137, 3115, 2391, 4137, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137,
  /*  270 */ 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  288 */ 4137, 2642, 2404, 4137, 3040, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304,
  /*  306 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4102, 2580, 4137,
  /*  324 */ 2938, 2883, 4137, 4138, 2658, 3628, 4137, 5678, 4137, 4137, 2680, 4137, 4137, 2697, 4137, 4137, 4137, 4137,
  /*  342 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2733, 2745, 2761, 4137, 3006, 2883, 4137, 4138,
  /*  360 */ 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  378 */ 4137, 4137, 4137, 4137, 4137, 4137, 2417, 2552, 2540, 4137, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616,
  /*  396 */ 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  414 */ 4137, 4137, 4137, 3731, 2593, 4137, 3006, 2829, 3632, 4138, 4137, 2856, 4137, 6205, 4137, 4137, 2876, 4731,
  /*  432 */ 2942, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4946, 3575,
  /*  450 */ 2899, 5041, 3069, 3079, 5044, 4138, 4137, 3628, 4137, 5150, 4137, 4137, 2958, 2465, 2511, 2304, 4137, 4137,
  /*  468 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2980, 2993, 4137, 3006, 2883,
  /*  486 */ 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  504 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4196, 4412, 3027, 3175, 3056, 3105, 2664, 4138, 4137, 3628,
  /*  522 */ 4137, 5150, 4137, 4137, 2958, 2465, 2511, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  540 */ 4137, 4137, 4137, 4137, 4155, 3131, 2606, 4137, 3884, 2883, 4137, 4138, 6485, 3628, 4137, 3616, 4137, 4137,
  /*  558 */ 3151, 4137, 4533, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  576 */ 3173, 4782, 3191, 4137, 3006, 3893, 2880, 4138, 4137, 3628, 4137, 2362, 4137, 4137, 4137, 4137, 4137, 2304,
  /*  594 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 5327, 3241, 3854,
  /*  612 */ 3282, 3754, 5988, 5168, 3322, 3524, 5167, 4838, 5167, 5637, 3362, 4232, 6094, 4185, 4137, 4137, 4137, 4137,
  /*  630 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6445, 3383, 3854, 3282, 3754, 5988, 5168,
  /*  648 */ 3322, 3524, 5167, 5415, 5167, 5530, 3362, 4514, 6094, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  666 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6445, 3383, 3854, 3282, 3754, 5988, 3255, 3424, 3524, 5167, 5415,
  /*  684 */ 5167, 5530, 3362, 4514, 6094, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  702 */ 4137, 4137, 4137, 6445, 3383, 6332, 3440, 3939, 3480, 5168, 3322, 3524, 5167, 5415, 5167, 5530, 3362, 4514,
  /*  720 */ 6094, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6445,
  /*  738 */ 3383, 3854, 3282, 3754, 5988, 3335, 3509, 3544, 5167, 5415, 5167, 5530, 3362, 4514, 6094, 3397, 4137, 4137,
  /*  756 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6445, 3383, 3854, 3282, 3754,
  /*  774 */ 5988, 5168, 3322, 3524, 5167, 5415, 5167, 5530, 3362, 4811, 4867, 4091, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  792 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6445, 3383, 3564, 3591, 5260, 3648, 5168, 3322, 3524,
  /*  810 */ 5167, 5415, 5167, 5530, 3362, 4514, 6094, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  828 */ 4137, 4137, 4137, 4137, 4137, 6445, 3383, 3854, 3282, 3754, 5988, 5168, 3464, 3524, 5167, 5468, 5167, 5530,
  /*  846 */ 3362, 4514, 6094, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  864 */ 2708, 3089, 2564, 4137, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304,
  /*  882 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2717, 3689, 3677, 4137,
  /*  900 */ 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137,
  /*  918 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 5237, 2619, 4137, 3006, 2632, 4137, 4138,
  /*  936 */ 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  954 */ 4137, 4137, 4137, 4137, 4137, 4137, 3157, 5300, 2774, 3135, 3705, 3721, 2964, 4138, 4137, 3747, 4137, 3616,
  /*  972 */ 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /*  990 */ 4137, 4137, 4137, 6231, 2787, 4137, 3006, 4772, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137,
  /* 1008 */ 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 3011, 3225,
  /* 1026 */ 2800, 4137, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137,
  /* 1044 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 3006, 2883,
  /* 1062 */ 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1080 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854, 3204, 3754, 3797, 5168, 2860, 3524,
  /* 1098 */ 5167, 5085, 5167, 5530, 3770, 6177, 5743, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1116 */ 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854, 3204, 3754, 3797, 5168, 2860, 3524, 5167, 5085, 5167, 5530,
  /* 1134 */ 3770, 6177, 5604, 4401, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1152 */ 4136, 5022, 3803, 3854, 3204, 3754, 3797, 5168, 2860, 3524, 5167, 4631, 5167, 5530, 3791, 6177, 5743, 3397,
  /* 1170 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854,
  /* 1188 */ 6474, 3754, 3797, 5168, 2423, 3524, 5167, 5085, 5167, 5530, 3770, 6177, 5743, 3397, 4137, 4137, 4137, 4137,
  /* 1206 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854, 6549, 3754, 3797, 5168,
  /* 1224 */ 4203, 3524, 5167, 3266, 5167, 3855, 3849, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1242 */ 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854, 3204, 3754, 3797, 5168, 4905, 3524, 5167, 3346,
  /* 1260 */ 5167, 3855, 3819, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1278 */ 4137, 4137, 4136, 5022, 3803, 3854, 6291, 3754, 3797, 5168, 3841, 3524, 5167, 5926, 5167, 3855, 3849, 5188,
  /* 1296 */ 4998, 4322, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 3306,
  /* 1314 */ 3871, 4137, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137,
  /* 1332 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 3909, 2883,
  /* 1350 */ 4137, 4138, 3932, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 3955, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1368 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2813, 3982, 4137, 3006, 2883, 4137, 4138, 4137, 3628,
  /* 1386 */ 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1404 */ 4137, 4137, 4137, 4137, 4137, 2315, 2912, 4137, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137,
  /* 1422 */ 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1440 */ 4136, 5022, 3803, 4023, 4050, 5872, 4501, 5168, 2860, 3524, 5373, 5085, 4077, 6041, 4118, 6177, 5743, 3397,
  /* 1458 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4154, 6560, 4171, 3854,
  /* 1476 */ 3204, 3754, 3797, 5168, 4219, 3524, 3775, 5085, 4248, 5530, 3770, 6177, 5743, 4460, 4137, 4137, 4137, 4137,
  /* 1494 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4268, 6302, 4308, 3854, 3204, 3754, 3797, 5915,
  /* 1512 */ 2860, 4349, 6372, 5085, 3548, 5530, 4387, 3661, 5604, 4401, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1530 */ 4137, 4137, 4137, 4137, 4137, 4137, 4428, 4333, 4446, 3854, 3204, 3754, 3797, 5168, 2860, 3524, 5167, 5085,
  /* 1548 */ 5167, 5530, 3770, 5827, 4487, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1566 */ 4137, 4137, 4530, 3966, 4549, 4579, 3204, 5766, 4606, 5168, 2860, 4647, 6136, 6069, 4669, 5702, 4685, 6177,
  /* 1584 */ 5743, 4701, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4728, 4292,
  /* 1602 */ 4747, 4360, 4281, 3754, 4798, 4827, 4854, 3524, 4883, 5085, 5167, 5530, 3770, 6177, 5743, 4460, 4137, 4137,
  /* 1620 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4902, 4034, 4921, 3854, 3204, 3754,
  /* 1638 */ 3797, 5168, 4905, 3524, 5167, 3266, 5167, 3855, 3849, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1656 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 5849, 4968, 3754, 5591, 5168, 4905, 3524,
  /* 1674 */ 5167, 3266, 5167, 4995, 3849, 5014, 6261, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1692 */ 4137, 4137, 4137, 4137, 5038, 4979, 5060, 3854, 3204, 3754, 3797, 6380, 5101, 5125, 5166, 3266, 5167, 5184,
  /* 1710 */ 5204, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1728 */ 4136, 5022, 3803, 3854, 3204, 3754, 3797, 5168, 4905, 3524, 5167, 3266, 5167, 5227, 5631, 5188, 4998, 3397,
  /* 1746 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 5253, 4061, 5276, 5316,
  /* 1764 */ 6434, 3916, 5444, 5168, 4952, 3524, 4252, 5343, 5403, 4127, 5508, 5359, 5389, 3397, 4137, 4137, 4137, 4137,
  /* 1782 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 4761, 3295, 3754, 5431, 5168,
  /* 1800 */ 4905, 3524, 5167, 3266, 5167, 3855, 3849, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1818 */ 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 4935, 3453, 3754, 5484, 5168, 5500, 5524, 5167, 3266,
  /* 1836 */ 5167, 3855, 3849, 5546, 5577, 4460, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1854 */ 4137, 4137, 4136, 5022, 3803, 5620, 3604, 6011, 5653, 5074, 4905, 5694, 3367, 5718, 6166, 3855, 3849, 5188,
  /* 1872 */ 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022,
  /* 1890 */ 3803, 3854, 3204, 3754, 3797, 4620, 4905, 5734, 5167, 3346, 5167, 3855, 3819, 5188, 4998, 3397, 4137, 4137,
  /* 1908 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 5759, 4471, 5782, 5138, 3204, 6583,
  /* 1926 */ 5902, 3493, 5500, 5798, 5167, 3266, 5167, 5290, 6404, 5188, 4998, 4460, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1944 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 5865, 4371, 5888, 3854, 3204, 3754, 3825, 5942, 5958, 5813,
  /* 1962 */ 5982, 3266, 5167, 3855, 3849, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 1980 */ 4137, 4137, 4137, 4137, 6004, 4590, 6027, 3854, 3204, 3754, 4653, 5457, 5500, 6057, 6085, 6110, 6126, 3855,
  /* 1998 */ 3849, 5188, 6152, 6193, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 2016 */ 4136, 5022, 3803, 3854, 6291, 3754, 3797, 5168, 3841, 3524, 3528, 5926, 5841, 6221, 5966, 6247, 4563, 4322,
  /* 2034 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6277, 4712, 6318, 5666,
  /* 2052 */ 3204, 3754, 6359, 5168, 4905, 3524, 5167, 3266, 5167, 5211, 5109, 5188, 4998, 3397, 4137, 4137, 4137, 4137,
  /* 2070 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854, 3995, 3754, 3797, 5168,
  /* 2088 */ 6396, 3524, 5167, 3266, 5167, 3855, 3849, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 2106 */ 4137, 4137, 4137, 4137, 4137, 4137, 4136, 5022, 3803, 3854, 3204, 3754, 3797, 4886, 4905, 5561, 5167, 3266,
  /* 2124 */ 5167, 3855, 3849, 5188, 4998, 3397, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 2142 */ 4137, 4137, 4430, 6420, 6461, 2444, 3006, 2883, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137,
  /* 2160 */ 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2492,
  /* 2178 */ 2925, 4137, 3006, 3215, 4137, 4138, 4137, 3628, 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137,
  /* 2196 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 6509, 6520, 4137, 3006, 2883,
  /* 2214 */ 4137, 2681, 4137, 3628, 4137, 4007, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 2232 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 2840, 6536, 4137, 3006, 2883, 4137, 4138, 4137, 3628,
  /* 2250 */ 4137, 3616, 4137, 4137, 4137, 4137, 4137, 2304, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 2268 */ 4137, 4137, 4137, 4137, 4137, 4137, 6576, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 2286 */ 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137, 4137,
  /* 2304 */ 0, 0, 68, 0, 0, 0, 68, 68, 68, 68, 68, 0, 0, 0, 0, 0, 0, 0, 0, 27224, 0, 27224, 0, 0, 0, 27224, 27224,
  /* 2331 */ 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 0, 0, 6656,
  /* 2350 */ 6656, 6656, 6656, 78, 78, 78, 6656, 6734, 6734, 6734, 6734, 6734, 0, 0, 0, 0, 5632, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2375 */ 0, 0, 5120, 68, 68, 68, 68, 0, 0, 0, 68, 68, 68, 68, 68, 68, 0, 0, 0, 0, 8271, 8271, 8271, 0, 8271, 8271,
  /* 2401 */ 8271, 8271, 8271, 0, 0, 0, 0, 9296, 9296, 9296, 0, 9296, 9296, 9296, 9296, 9296, 0, 0, 0, 0, 11264, 0, 0,
  /* 2424 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 3584, 0, 3725, 2095, 2095, 2095, 0, 0, 0, 3072, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2453 */ 0, 0, 128, 0, 0, 0, 0, 0, 0, 68, 0, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 268, 0, 70, 0, 0, 0, 0, 3140,
  /* 2484 */ 132, 0, 0, 3140, 3072, 3072, 3072, 3072, 0, 0, 0, 0, 0, 0, 0, 0, 41049, 0, 41049, 0, 0, 0, 41049, 41049, 0,
  /* 2509 */ 0, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 5210, 5210, 5210, 5210, 0, 0, 0, 5210, 5210, 5210,
  /* 2537 */ 5210, 5210, 5210, 0, 0, 0, 0, 11264, 0, 0, 11264, 0, 0, 0, 11264, 11264, 0, 0, 0, 11264, 0, 0, 0, 11264, 0,
  /* 2562 */ 0, 11264, 0, 0, 0, 0, 64, 18496, 64, 18432, 64, 18496, 18496, 18496, 18496, 0, 0, 0, 69, 69, 69, 69, 0, 0,
  /* 2586 */ 0, 69, 69, 69, 69, 69, 69, 0, 0, 0, 0, 11857, 11857, 11857, 0, 11857, 11857, 11857, 11857, 11857, 0, 0, 0,
  /* 2609 */ 0, 16896, 16896, 16896, 0, 0, 0, 16896, 0, 16896, 0, 0, 0, 0, 20053, 20053, 20053, 0, 20053, 20053, 20053,
  /* 2630 */ 20053, 20053, 0, 0, 0, 0, 20626, 0, 0, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 0, 0, 9296, 0, 9296, 0, 0, 0, 9296,
  /* 2657 */ 9296, 0, 0, 68, 2560, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 16006, 0, 0, 0, 0, 2560, 0, 0, 0, 0, 0, 0,
  /* 2687 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 181, 0, 0, 68, 2692, 0, 0, 68, 68, 68, 68, 68, 0, 0, 0, 0, 0, 0, 0, 18432, 64,
  /* 2717 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 19456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10752, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10752,
  /* 2749 */ 0, 0, 10752, 10752, 0, 10752, 0, 10752, 10752, 10752, 0, 0, 10752, 10752, 10752, 10752, 10752, 10752,
  /* 2767 */ 10752, 10752, 10752, 10752, 10752, 10752, 10752, 0, 0, 0, 0, 22102, 22102, 22102, 0, 22102, 22102, 22102,
  /* 2785 */ 22102, 22102, 0, 0, 0, 0, 23127, 23127, 23127, 0, 23127, 23127, 23127, 23127, 23127, 0, 0, 0, 0, 25153,
  /* 2805 */ 25153, 25153, 0, 25153, 25153, 25153, 25153, 25153, 0, 0, 0, 0, 26624, 26624, 0, 0, 0, 0, 0, 0, 26624, 0,
  /* 2827 */ 0, 26624, 12288, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 148, 0, 0, 0, 0, 0, 0, 0, 43008, 0, 43008, 0, 43008, 43008,
  /* 2853 */ 43008, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3725, 2095, 2095, 2095, 0, 227, 0, 227, 0,
  /* 2881 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 13388, 13388, 13388, 13388, 13394, 13394, 13394,
  /* 2906 */ 13388, 13419, 13419, 13419, 13419, 13419, 0, 0, 0, 0, 27224, 27224, 27224, 0, 27224, 27224, 27224, 27224,
  /* 2924 */ 27224, 0, 0, 0, 0, 41049, 41049, 41049, 0, 41049, 41049, 41049, 41049, 41049, 0, 0, 0, 68, 0, 0, 0, 0, 0,
  /* 2947 */ 0, 0, 0, 0, 0, 0, 0, 227, 227, 0, 0, 0, 0, 0, 70, 253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14336, 16384,
  /* 2976 */ 17920, 0, 0, 0, 0, 14848, 0, 0, 14848, 14848, 0, 0, 0, 0, 14848, 0, 0, 0, 14848, 14848, 0, 0, 14848, 14848,
  /* 3000 */ 14848, 14848, 14848, 14848, 14848, 14848, 0, 0, 0, 68, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0,
  /* 3026 */ 0, 15437, 15437, 15437, 15437, 15443, 15443, 15443, 15437, 15468, 15468, 15468, 15468, 15468, 0, 0, 0, 68,
  /* 3044 */ 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9728, 0, 0, 0, 68, 132, 134, 134, 0, 0, 0, 0, 134, 16006, 0, 0, 0, 68,
  /* 3073 */ 132, 0, 0, 0, 0, 0, 0, 13824, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 64, 0, 0, 0, 18496,
  /* 3104 */ 64, 0, 0, 15872, 0, 0, 0, 0, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 0, 0, 8271, 0, 8271, 0, 0, 0, 8271, 8271, 0, 0,
  /* 3133 */ 16896, 16896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7680, 0, 0, 18944, 0, 0, 0, 190, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3163 */ 0, 0, 0, 0, 22016, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15872, 0, 91, 91, 91,
  /* 3194 */ 91, 17492, 17492, 17492, 91, 17517, 17517, 17517, 17517, 17517, 0, 0, 0, 68, 132, 0, 0, 0, 0, 2095, 2095,
  /* 3215 */ 0, 0, 0, 0, 0, 0, 0, 0, 41984, 5210, 0, 0, 0, 0, 0, 0, 0, 0, 25153, 0, 25153, 0, 0, 0, 25153, 25153, 3656,
  /* 3242 */ 3656, 3656, 3656, 0, 0, 0, 3656, 3656, 3656, 3656, 3656, 3656, 0, 2095, 2095, 47, 2095, 2095, 2095, 2095,
  /* 3262 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 0, 0, 0, 68, 132,
  /* 3287 */ 135, 136, 3657, 3657, 2095, 2095, 135, 136, 0, 0, 0, 68, 132, 0, 0, 0, 0, 2095, 2167, 0, 0, 0, 0, 0, 0,
  /* 3312 */ 26112, 26112, 0, 26112, 0, 26112, 26112, 26112, 0, 0, 0, 0, 68, 0, 186, 135, 135, 136, 4799, 0, 0, 0, 3725,
  /* 3335 */ 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 128, 0, 0, 0, 0, 0,
  /* 3356 */ 0, 0, 0, 0, 229, 148, 225, 226, 0, 4836, 4862, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3377 */ 2095, 2095, 2262, 2095, 2095, 2095, 3657, 3657, 3657, 3657, 0, 0, 0, 3657, 3657, 3657, 3657, 3657, 3657, 0,
  /* 3397 */ 2095, 2095, 68, 0, 0, 2095, 68, 68, 68, 68, 68, 0, 0, 0, 0, 0, 0, 0, 6656, 78, 6656, 78, 6656, 6656, 6656,
  /* 3422 */ 78, 78, 0, 0, 68, 0, 186, 135, 135, 136, 4799, 0, 0, 0, 3725, 31791, 2095, 34351, 0, 0, 0, 68, 132, 135,
  /* 3446 */ 136, 3657, 3657, 2190, 2192, 135, 136, 0, 0, 0, 68, 132, 0, 0, 0, 0, 2095, 2168, 0, 0, 0, 0, 0, 135, 135,
  /* 3471 */ 136, 4799, 0, 0, 0, 3725, 2095, 2095, 2095, 2192, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3490 */ 135, 136, 0, 2095, 2095, 2095, 2095, 171, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2227, 2095, 2095, 128,
  /* 3509 */ 0, 0, 68, 0, 186, 135, 135, 136, 4799, 0, 0, 0, 3725, 2095, 32303, 2095, 0, 0, 148, 2095, 2095, 2095, 2095,
  /* 3532 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2265, 34863, 0, 0, 148, 2095, 2095, 2095,
  /* 3551 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2290, 2095, 2095, 2095, 2095, 2164, 2095,
  /* 3569 */ 2164, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 70, 13388, 13394, 13388, 13394, 13388, 13388, 13388,
  /* 3589 */ 13394, 13394, 0, 0, 0, 68, 132, 135, 136, 3657, 3657, 2191, 2193, 135, 136, 0, 0, 0, 68, 132, 0, 0, 0, 0,
  /* 3613 */ 2165, 2095, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148,
  /* 3645 */ 0, 0, 0, 2193, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 135, 136, 0, 2095, 2095, 2095, 2095,
  /* 3665 */ 2095, 2095, 185, 185, 265, 265, 0, 0, 0, 0, 2095, 2320, 19456, 19456, 19456, 19456, 0, 0, 19456, 19456,
  /* 3685 */ 19456, 19456, 19456, 19456, 19456, 0, 0, 0, 0, 19456, 0, 0, 0, 19456, 0, 19456, 19456, 19456, 0, 19456,
  /* 3705 */ 25600, 0, 0, 68, 132, 0, 0, 0, 0, 0, 0, 0, 0, 7168, 8704, 10240, 12800, 14336, 16384, 17920, 21504, 22528,
  /* 3727 */ 23552, 27648, 41472, 5210, 0, 0, 0, 0, 0, 0, 0, 0, 11857, 0, 11857, 0, 0, 0, 11857, 11857, 0, 20992, 24576,
  /* 3750 */ 148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2095, 2095, 2095, 225, 0, 0, 0, 0, 2095,
  /* 3776 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2223, 2095, 2095, 2095, 2095, 225, 252, 0, 229,
  /* 3795 */ 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 2095,
  /* 3815 */ 2095, 0, 2095, 2095, 0, 252, 0, 229, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3835 */ 0, 0, 0, 2095, 2215, 2095, 0, 0, 184, 0, 187, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3860 */ 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112,
  /* 3879 */ 26112, 26112, 26112, 26112, 26112, 0, 0, 0, 68, 132, 0, 0, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 5210,
  /* 3904 */ 0, 0, 0, 0, 0, 0, 0, 0, 131, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2095, 2095, 2200,
  /* 3932 */ 0, 0, 68, 0, 188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2095, 2190, 2095, 0, 0, 279, 188,
  /* 3959 */ 0, 0, 279, 131, 131, 131, 131, 0, 0, 0, 0, 0, 0, 2099, 2099, 0, 2099, 0, 2099, 2099, 2099, 0, 0, 0, 26624,
  /* 3984 */ 0, 0, 0, 0, 26624, 26624, 0, 0, 0, 26624, 26624, 0, 0, 0, 68, 132, 0, 0, 141, 0, 2095, 2095, 0, 0, 0, 0, 0,
  /* 4011 */ 181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 2159, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4034 */ 0, 0, 0, 0, 0, 0, 2101, 2101, 0, 2144, 0, 2144, 2144, 2144, 0, 0, 0, 129, 0, 68, 132, 0, 0, 0, 0, 2095,
  /* 4060 */ 2095, 0, 0, 0, 0, 0, 0, 2103, 2103, 0, 2146, 0, 2146, 2146, 2146, 0, 0, 2278, 2095, 2095, 2095, 2095, 2095,
  /* 4083 */ 2284, 2095, 2095, 2095, 2095, 2095, 2095, 2289, 2095, 2095, 68, 0, 0, 2095, 68, 68, 68, 283, 68, 0, 0, 0,
  /* 4105 */ 0, 0, 0, 69, 69, 0, 69, 0, 69, 69, 69, 0, 0, 225, 0, 0, 0, 0, 2095, 2095, 2304, 2305, 2095, 2095, 2095,
  /* 4130 */ 2095, 2095, 2095, 2095, 47, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 2096, 0, 0, 0,
  /* 4158 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16896, 2140, 2140, 2140, 2140, 0, 0, 0, 2140, 2140, 2140, 2140, 2140,
  /* 4183 */ 2140, 0, 2095, 2095, 68, 0, 0, 2095, 68, 281, 282, 68, 68, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4212 */ 3584, 3722, 0, 0, 2095, 2095, 2095, 0, 0, 68, 0, 132, 0, 0, 0, 0, 0, 0, 0, 3725, 2095, 2095, 2095, 2095,
  /* 4236 */ 2095, 2095, 185, 185, 265, 265, 267, 269, 4862, 4878, 2095, 2095, 2095, 2095, 2095, 2281, 2095, 2095, 2095,
  /* 4255 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2263, 2095, 2095, 2097, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4277 */ 0, 0, 0, 66, 0, 0, 0, 68, 132, 0, 0, 3584, 3584, 2095, 47, 0, 0, 0, 0, 0, 0, 2122, 2122, 0, 2143, 0, 2143,
  /* 4304 */ 2143, 2143, 0, 0, 2141, 2141, 2141, 2151, 0, 0, 0, 2153, 2141, 2141, 2141, 2153, 2153, 0, 2095, 2095, 68,
  /* 4325 */ 0, 0, 2095, 280, 68, 68, 68, 68, 0, 0, 0, 0, 0, 0, 2098, 2098, 0, 2142, 0, 2142, 2142, 2142, 0, 0, 2095, 0,
  /* 4351 */ 0, 148, 2095, 2095, 2095, 2095, 2095, 2246, 2247, 2095, 2095, 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095,
  /* 4370 */ 2095, 0, 0, 0, 0, 0, 0, 2105, 2105, 0, 2148, 0, 2148, 2148, 2148, 0, 0, 225, 0, 0, 0, 0, 2095, 2095, 2095,
  /* 4395 */ 2095, 2095, 2095, 2095, 2095, 2309, 2095, 2095, 68, 0, 132, 2095, 68, 68, 68, 68, 275, 0, 0, 0, 0, 0, 0,
  /* 4418 */ 71, 15437, 15443, 15437, 15443, 15437, 15437, 15437, 15443, 15443, 2098, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4440 */ 0, 0, 0, 0, 40448, 0, 2142, 2142, 2142, 2152, 0, 0, 0, 2152, 2142, 2142, 2142, 2152, 2152, 0, 2095, 2095,
  /* 4462 */ 68, 132, 0, 2095, 68, 68, 68, 68, 68, 0, 0, 0, 0, 0, 0, 2104, 2104, 0, 2147, 0, 2147, 2147, 2147, 0, 0,
  /* 4487 */ 2095, 2095, 2321, 2095, 2095, 2095, 2095, 68, 132, 132, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4507 */ 2210, 2095, 2212, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 185, 185, 265, 265, 0, 269, 4862,
  /* 4527 */ 4878, 2095, 2095, 2099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 190, 0, 0, 2099, 2099, 2099, 2099, 0,
  /* 4554 */ 0, 0, 2154, 2099, 2099, 2099, 2154, 2154, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2215, 0, 0, 0, 0, 0, 0, 0,
  /* 4577 */ 2326, 2095, 2095, 2161, 2095, 2095, 2095, 2095, 2095, 2170, 2095, 2172, 2095, 0, 0, 0, 0, 0, 0, 2106, 2106,
  /* 4598 */ 0, 2149, 0, 2149, 2149, 2149, 0, 0, 2095, 2095, 2204, 2095, 2206, 2095, 2095, 2211, 2095, 2095, 0, 0, 0,
  /* 4619 */ 2214, 2095, 2095, 2095, 2095, 2095, 2095, 2221, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 128, 0, 0,
  /* 4638 */ 221, 68, 0, 223, 0, 225, 0, 229, 148, 2095, 0, 0, 148, 2241, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4659 */ 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2216, 2095, 2095, 2095, 2280, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4678 */ 2095, 2095, 2095, 28719, 2095, 2095, 31279, 225, 252, 0, 229, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4697 */ 2095, 2095, 2095, 39983, 36399, 2095, 68, 0, 0, 29743, 68, 68, 68, 68, 68, 0, 0, 0, 0, 0, 0, 2107, 2107, 0,
  /* 4721 */ 2150, 0, 2150, 2150, 2150, 0, 0, 2100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 0, 0, 2143, 2143,
  /* 4749 */ 2143, 2143, 0, 0, 0, 2143, 2143, 2143, 2143, 2143, 2143, 0, 2095, 2095, 2095, 2095, 2095, 2167, 2095, 2095,
  /* 4769 */ 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 24211, 0, 0, 5210, 0, 0, 0, 0, 0, 0, 0, 0, 17492, 91, 17492, 91, 91,
  /* 4795 */ 91, 17492, 17492, 35375, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095,
  /* 4814 */ 2095, 2095, 2095, 264, 185, 266, 265, 0, 269, 4862, 4878, 2095, 2095, 2218, 2095, 2095, 2095, 2095, 2095,
  /* 4833 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 128, 0, 0, 220, 68, 186, 222, 0, 225, 226, 4836, 148,
  /* 4854 */ 0, 0, 68, 0, 132, 0, 0, 0, 0, 0, 3584, 0, 3725, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 68, 132, 132,
  /* 4877 */ 277, 269, 269, 4878, 2095, 2095, 2095, 2095, 2254, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4895 */ 2095, 2095, 2095, 2095, 47, 2095, 128, 2101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095,
  /* 4921 */ 2144, 2144, 2144, 2144, 0, 0, 0, 2144, 2144, 2144, 2144, 2144, 2144, 0, 2095, 2095, 2095, 2095, 2095, 2168,
  /* 4941 */ 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3724, 3584, 0, 2095, 2095,
  /* 4967 */ 2095, 0, 0, 130, 68, 132, 0, 0, 0, 0, 2095, 2095, 0, 0, 0, 0, 0, 0, 2123, 2123, 0, 2145, 0, 2145, 2145,
  /* 4992 */ 2145, 0, 0, 2095, 47, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 2095, 2095,
  /* 5014 */ 2095, 29231, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 0, 2095, 0, 2095, 2095, 2095, 0,
  /* 5037 */ 0, 2102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13824, 0, 0, 0, 0, 0, 2145, 2145, 2145, 2145, 0, 0,
  /* 5066 */ 0, 2145, 2145, 2145, 2145, 2145, 2145, 0, 2095, 2095, 2095, 2095, 2095, 2220, 2095, 2095, 2095, 2095, 2095,
  /* 5085 */ 2095, 2095, 2095, 2095, 128, 0, 0, 221, 68, 0, 223, 0, 225, 0, 0, 148, 0, 183, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5112 */ 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 38959, 2095, 2095, 0, 0, 148, 2095, 2095, 2095,
  /* 5132 */ 2095, 2095, 2095, 2095, 2095, 2249, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2174, 2095, 0, 0,
  /* 5151 */ 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 148, 2252, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5175 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 128, 2095, 2095, 2291, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5193 */ 2095, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 0, 0, 4096, 0, 0, 2095, 2303, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5217 */ 2095, 2095, 2095, 47, 0, 0, 0, 0, 0, 0, 47, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0,
  /* 5240 */ 0, 0, 0, 0, 0, 20053, 0, 20053, 0, 0, 0, 20053, 20053, 2103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5269 */ 5210, 0, 2095, 2095, 2095, 2191, 2095, 2146, 2146, 2146, 2146, 0, 0, 0, 2146, 2146, 2146, 2146, 2146, 2146,
  /* 5289 */ 0, 2095, 2095, 2095, 2095, 2095, 2226, 2095, 2095, 2294, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 22102, 0, 22102, 0,
  /* 5312 */ 0, 0, 22102, 22102, 2095, 2095, 2162, 2095, 2166, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0,
  /* 5333 */ 3656, 3656, 0, 3656, 0, 3656, 3656, 3656, 0, 0, 2095, 2095, 2095, 2215, 128, 0, 219, 0, 0, 0, 0, 0, 0, 0,
  /* 5357 */ 0, 148, 2095, 2095, 2095, 2226, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2257,
  /* 5379 */ 2095, 2095, 2095, 2260, 2095, 2095, 2095, 2095, 2264, 2095, 33839, 2095, 2095, 2095, 2095, 2322, 2095, 0,
  /* 5397 */ 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2283, 2095, 2095, 2095, 2095, 2095, 2288, 2095, 2095, 2095,
  /* 5418 */ 2095, 128, 0, 0, 221, 68, 186, 223, 0, 225, 226, 4836, 148, 2201, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5439 */ 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2213, 0, 0, 0, 2095, 2095, 2095,
  /* 5460 */ 2095, 2095, 2095, 2095, 2095, 2095, 2224, 2095, 2095, 2095, 2095, 2095, 128, 0, 0, 221, 68, 0, 223, 0, 225,
  /* 5481 */ 226, 4836, 148, 2202, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2217, 0,
  /* 5501 */ 0, 68, 0, 132, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 36911, 2095, 2095, 2095, 2095,
  /* 5524 */ 2095, 0, 0, 148, 2095, 2242, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 248, 248, 250,
  /* 5544 */ 250, 0, 2095, 2095, 2311, 2095, 2095, 47, 0, 0, 0, 0, 0, 0, 0, 0, 2319, 2095, 0, 0, 148, 2095, 2095, 2095,
  /* 5568 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 39471, 2095, 2095, 2095, 37423, 2095, 2095, 2095, 0, 0, 0,
  /* 5587 */ 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2207, 2209, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2095,
  /* 5608 */ 2095, 2095, 2095, 275, 132, 276, 0, 0, 0, 0, 2095, 2095, 2160, 47, 2095, 2165, 2095, 2095, 2169, 2095,
  /* 5628 */ 2095, 2095, 2095, 0, 0, 0, 0, 0, 28207, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 247,
  /* 5649 */ 248, 249, 250, 251, 2095, 2203, 2095, 2095, 2095, 2095, 2198, 30767, 2198, 2095, 0, 0, 0, 2095, 2095, 2095,
  /* 5669 */ 2095, 2095, 2095, 2095, 2095, 2171, 2095, 2095, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 2560, 0, 2560, 0, 0, 0,
  /* 5693 */ 148, 2095, 0, 0, 148, 2095, 2095, 2095, 2244, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5712 */ 39936, 248, 248, 250, 250, 0, 2095, 2095, 2266, 2095, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 2095, 0, 0,
  /* 5737 */ 148, 2095, 2095, 2095, 2095, 2245, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 68, 132, 132, 0, 0, 0, 0,
  /* 5757 */ 2095, 2095, 2104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2095, 2161, 2095, 2095, 2147,
  /* 5783 */ 2147, 2147, 2147, 0, 0, 0, 2147, 2147, 2147, 2147, 2147, 2147, 0, 2095, 2158, 2095, 0, 0, 148, 2095, 2095,
  /* 5804 */ 32963, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2251, 2095, 0, 0, 148, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5823 */ 2095, 2095, 2095, 2250, 2095, 2095, 2095, 2095, 2215, 2095, 185, 185, 265, 265, 0, 0, 0, 0, 2095, 2095,
  /* 5843 */ 2095, 2095, 2095, 2095, 2095, 2285, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2173, 2175, 0, 0,
  /* 5862 */ 0, 0, 0, 2105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2095, 2159, 2095, 2095, 2095, 2148,
  /* 5889 */ 2148, 2148, 2148, 0, 0, 0, 2148, 2148, 2148, 2148, 2148, 2148, 0, 2095, 2095, 2095, 2095, 2208, 2095, 2095,
  /* 5909 */ 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2222, 2223, 2095, 2095, 2095, 2095,
  /* 5928 */ 2095, 2095, 128, 0, 0, 0, 0, 0, 0, 224, 0, 0, 0, 148, 2095, 2215, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5951 */ 2095, 2095, 2226, 2095, 2095, 2095, 128, 182, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095,
  /* 5975 */ 2095, 2307, 2095, 2095, 2095, 2095, 2095, 2095, 2253, 2095, 2253, 2256, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 5993 */ 2095, 2095, 2095, 2095, 2095, 135, 136, 0, 2095, 2095, 2095, 2106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 6018 */ 0, 0, 5210, 0, 2095, 2198, 30767, 2199, 2095, 2149, 2149, 2149, 2149, 0, 0, 0, 2149, 2149, 2149, 2149,
  /* 6038 */ 2149, 2149, 0, 2095, 2095, 2095, 2095, 2216, 2095, 2095, 2095, 2095, 2095, 0, 248, 248, 250, 250, 0, 2095,
  /* 6058 */ 0, 0, 148, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2248, 2095, 2095, 2095, 2095, 128, 28672, 0, 221, 68,
  /* 6078 */ 0, 223, 0, 225, 0, 229, 148, 2095, 2216, 2095, 2255, 2095, 2095, 2095, 2095, 2259, 2095, 2095, 2095, 2095,
  /* 6098 */ 2095, 2095, 2095, 68, 132, 132, 0, 269, 269, 4878, 2095, 2095, 2216, 47, 2095, 2095, 128, 0, 0, 0, 0, 0, 0,
  /* 6121 */ 0, 0, 0, 0, 148, 2095, 2279, 2095, 2095, 2095, 2095, 2095, 2095, 2286, 38447, 2095, 2095, 2095, 2095, 2095,
  /* 6141 */ 2095, 47, 2095, 2095, 2095, 2261, 2095, 2095, 2095, 2095, 2095, 2095, 35887, 2095, 2095, 2095, 2095, 2095,
  /* 6159 */ 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2282, 2095, 2095, 2095, 2095, 2095, 2287, 2095, 2095, 2095,
  /* 6180 */ 2095, 2095, 2095, 185, 185, 265, 265, 0, 0, 0, 0, 2095, 2095, 2095, 30255, 68, 132, 0, 2095, 68, 68, 68,
  /* 6202 */ 68, 68, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 192, 2095, 2095, 2095, 2292, 2095, 2095, 2293,
  /* 6228 */ 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 23127, 0, 23127, 0, 0, 0, 23127, 23127, 2310, 2095, 2095, 2095,
  /* 6251 */ 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 37935, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 2095,
  /* 6276 */ 33327, 2107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 68, 132, 0, 0, 3723, 3723, 2095, 2095, 0, 0,
  /* 6304 */ 0, 0, 0, 0, 2097, 2097, 0, 2141, 0, 2141, 2141, 2141, 0, 0, 2150, 2150, 2150, 2150, 0, 0, 0, 2150, 2150,
  /* 6327 */ 2150, 2150, 2150, 2150, 0, 2095, 2095, 2095, 2163, 2095, 2163, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0,
  /* 6348 */ 0, 68, 68, 0, 68, 0, 68, 68, 68, 0, 0, 2095, 2095, 2095, 2205, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0,
  /* 6372 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2258, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 6390 */ 2225, 2095, 2095, 2095, 2228, 128, 0, 0, 185, 0, 189, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2306,
  /* 6414 */ 2095, 2095, 2308, 2095, 2095, 2095, 0, 0, 40448, 40448, 0, 0, 40448, 40448, 0, 40448, 0, 40448, 40448,
  /* 6433 */ 40448, 0, 0, 0, 68, 132, 0, 0, 3724, 3724, 2095, 2095, 0, 0, 0, 0, 0, 0, 3657, 3657, 0, 3657, 0, 3657,
  /* 6457 */ 3657, 3657, 0, 0, 40448, 40448, 40448, 40448, 40448, 40448, 40448, 40448, 40448, 40448, 40448, 40448,
  /* 6473 */ 40448, 0, 0, 0, 68, 132, 0, 0, 3584, 3584, 2095, 2095, 0, 0, 0, 0, 0, 0, 190, 137, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 6501 */ 0, 5210, 0, 5210, 5210, 5210, 0, 0, 0, 42496, 0, 0, 0, 0, 0, 0, 0, 0, 42496, 0, 0, 42496, 42496, 0, 42496,
  /* 6526 */ 0, 42496, 42496, 42496, 42496, 42496, 42496, 0, 0, 0, 43008, 43008, 43008, 43008, 0, 0, 0, 43008, 43008,
  /* 6545 */ 43008, 43008, 43008, 43008, 0, 0, 0, 68, 132, 0, 0, 3722, 3722, 2095, 2095, 0, 0, 0, 0, 0, 0, 2096, 2096,
  /* 6568 */ 0, 2140, 0, 2140, 2140, 2140, 0, 0, 1536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5210, 0, 2197, 2095,
  /* 6596 */ 2095, 2095, 2095
];

MaiaScript.EXPECTED =
[
  /*   0 */ 213, 217, 220, 221, 225, 229, 233, 240, 237, 244, 248, 251, 375, 375, 301, 257, 330, 264, 267, 271, 275,
  /*  21 */ 329, 372, 375, 375, 375, 283, 374, 375, 375, 375, 301, 331, 287, 297, 300, 370, 375, 375, 375, 375, 375,
  /*  42 */ 375, 375, 375, 305, 308, 313, 375, 375, 375, 375, 375, 375, 253, 308, 287, 318, 375, 375, 375, 291, 309,
  /*  63 */ 317, 375, 376, 309, 289, 377, 322, 293, 329, 389, 325, 383, 260, 335, 342, 339, 345, 349, 353, 329, 329,
  /*  84 */ 329, 329, 405, 328, 329, 357, 329, 416, 362, 399, 381, 329, 476, 415, 329, 329, 329, 329, 421, 329, 329,
  /* 105 */ 329, 387, 393, 403, 329, 329, 409, 329, 329, 329, 329, 328, 329, 398, 397, 329, 421, 413, 329, 329, 329,
  /* 126 */ 329, 329, 396, 329, 426, 420, 329, 329, 459, 329, 425, 329, 459, 425, 397, 329, 329, 329, 358, 431, 430,
  /* 147 */ 435, 439, 446, 442, 450, 452, 329, 329, 329, 329, 329, 481, 329, 456, 329, 329, 461, 329, 465, 469, 329,
  /* 168 */ 329, 329, 329, 329, 329, 358, 329, 329, 329, 368, 329, 279, 486, 473, 329, 329, 329, 329, 329, 481, 329,
  /* 189 */ 329, 279, 486, 480, 329, 329, 329, 481, 329, 329, 278, 485, 480, 329, 329, 329, 278, 490, 329, 329, 365,
  /* 210 */ 329, 329, 329, 2056, 3072, 18432, 1050624, 2099200, 67110912, 1073743872, 2048, 2048, 2048, 2048, 1050624,
  /* 225 */ 2099200, 268437504, 2048, 1050624, 270534656, 268437504, 1051128, 1712331256, -269506560, 1712331768,
  /* 235 */ -3168256, 1714428920, 1712331772, 1980767224, 1980767224, 1712331768, 1712331768, -3168256, -3168256,
  /* 244 */ -268457984, -2119680, -2119680, 1982864376, -2114568, -2114568, -2114568, -17416, 2048, 8, 8, 0, 32, 16384,
  /* 258 */ 67108864, 1073741824, 0, 1, 1, 524288, 16, 128, 384, 448, 8, 8, 67108992, 1073742208, 8192, 65536, 786432,
  /* 275 */ 25165824, 201326592, -1073741824, 0, 1, 2, 32, 64, 8, 8, 201326720, -1073741440, 16, 128, 128, 384, 8, 8,
  /* 293 */ 32, 32, 32, 0, 384, 64, 64, 64, 8, 8, 8, 1024, 1024, 0, 0, 32, 16, 16, 16, 128, 16, 128, 384, 512, 384, 384,
  /* 319 */ 8, 8, 8, 16, 8, 32, 32, 1024, 131072, 8388608, 0, 0, 0, 0, 32, 16, 524320, 1610874880, 1610874880, 3407830,
  /* 339 */ -364642272, 3407838, 3932150, -364642272, 3407830, -364642272, -364117984, -364642272, -289144800, 3669975,
  /* 349 */ 3669983, 4194295, -3407832, -361234442, -361234434, -361234433, -2, -1, 1610612736, 0, 0, 0, 8192, 2048,
  /* 363 */ 57344, 2097152, 0, 1, 64, 0, 4, 8, 0, 0, 512, 512, 8, 8, 8, 8, 32, 16, 134217728, -536870912, 0, 0, 1, 32,
  /* 387 */ 536870912, 1073741824, 0, 0, 8, 16, 256, 32768, 0, 4194304, 33554432, 0, 0, 0, 4194304, 33554432, 33554432,
  /* 404 */ 0x80000000, 0, 0, 16, 131072, 8388608, 67108864, 25165824, 268435456, 67108864, 16777216, 268435456, 0, 0,
  /* 418 */ 4, 896, 16777216, 0, 0, 0, 8388608, 67108864, 0, 0, 0, 67108864, 16384, 16384, 0, 0, 262144, 16396, 540684,
  /* 437 */ 229376, 557055, 491520, 557055, 557055, 819199, 819199, 245760, 507904, 491520, 229376, 557055, 557055,
  /* 450 */ 245760, 819199, 1048575, 1048575, 1048575, 0, 12, 0, 0, 0, 33554432, 0, 0, 196608, 0, 1, 2, 124, 128, 256,
  /* 470 */ 512, 7168, 8192, 2048, 4096, 8192, 0, 41943040, 201326592, 58720256, 2048, 8192, 0, 0, 0, 64, 128, 256, 512,
  /* 489 */ 1024, 64, 256, 512, 0
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

// End
