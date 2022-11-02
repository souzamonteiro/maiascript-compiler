// This file was generated on Wed Nov 2, 2022 15:14 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
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
    lookahead1W(29);                // END | EOF | Identifier | Character | String | Integer | Real | Imaginary |
                                    // Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(25);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
      lookahead2W(49);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9347:                    // Identifier '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 73:                        // '{'
      lookahead2W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 457:                     // '{' Identifier
        lookahead3W(47);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' |
                                    // 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 713:                     // '{' String
        lookahead3W(46);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6473:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9417:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 585:                     // '{' Character
      case 841:                     // '{' Integer
      case 969:                     // '{' Real
      case 1097:                    // '{' Imaginary
        lookahead3W(45);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1225:                    // '{' Comment
      case 4809:                    // '{' ';'
      case 6985:                    // '{' 'break'
      case 7369:                    // '{' 'continue'
        lookahead3W(31);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 2633:                    // '{' '('
      case 7625:                    // '{' 'do'
      case 8777:                    // '{' 'return'
      case 9161:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7881:                    // '{' 'f32'
      case 8009:                    // '{' 'f64'
      case 8393:                    // '{' 'i32'
      case 8521:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1609:                    // '{' '!'
      case 3273:                    // '{' '+'
      case 3401:                    // '{' '++'
      case 3785:                    // '{' '-'
      case 3913:                    // '{' '--'
      case 10057:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8137:                    // '{' 'for'
      case 8265:                    // '{' 'foreach'
      case 8649:                    // '{' 'if'
      case 8905:                    // '{' 'switch'
      case 9033:                    // '{' 'test'
      case 9289:                    // '{' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'i32'
     && lk != 66                    // 'i64'
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 78                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Character
     && lk != 643                   // Identifier String
     && lk != 771                   // Identifier Integer
     && lk != 899                   // Identifier Real
     && lk != 1027                  // Identifier Imaginary
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
     && lk != 3715                  // Identifier '-'
     && lk != 3843                  // Identifier '--'
     && lk != 3971                  // Identifier '-='
     && lk != 4099                  // Identifier '.'
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
     && lk != 8323                  // Identifier 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8707                  // Identifier 'return'
     && lk != 8835                  // Identifier 'switch'
     && lk != 8963                  // Identifier 'test'
     && lk != 9091                  // Identifier 'try'
     && lk != 9219                  // Identifier 'while'
     && lk != 9475                  // Identifier '|'
     && lk != 9603                  // Identifier '|='
     && lk != 9731                  // Identifier '||'
     && lk != 9859                  // Identifier '}'
     && lk != 9929                  // '{' '}'
     && lk != 9987                  // Identifier '~'
     && lk != 49609                 // '{' Identifier Identifier
     && lk != 49737                 // '{' Character Identifier
     && lk != 49865                 // '{' String Identifier
     && lk != 49993                 // '{' Integer Identifier
     && lk != 50121                 // '{' Real Identifier
     && lk != 50249                 // '{' Imaginary Identifier
     && lk != 50377                 // '{' Comment Identifier
     && lk != 53961                 // '{' ';' Identifier
     && lk != 56137                 // '{' 'break' Identifier
     && lk != 56521                 // '{' 'continue' Identifier
     && lk != 65993                 // '{' Identifier Character
     && lk != 66121                 // '{' Character Character
     && lk != 66249                 // '{' String Character
     && lk != 66377                 // '{' Integer Character
     && lk != 66505                 // '{' Real Character
     && lk != 66633                 // '{' Imaginary Character
     && lk != 66761                 // '{' Comment Character
     && lk != 70345                 // '{' ';' Character
     && lk != 72521                 // '{' 'break' Character
     && lk != 72905                 // '{' 'continue' Character
     && lk != 82377                 // '{' Identifier String
     && lk != 82505                 // '{' Character String
     && lk != 82633                 // '{' String String
     && lk != 82761                 // '{' Integer String
     && lk != 82889                 // '{' Real String
     && lk != 83017                 // '{' Imaginary String
     && lk != 83145                 // '{' Comment String
     && lk != 86729                 // '{' ';' String
     && lk != 88905                 // '{' 'break' String
     && lk != 89289                 // '{' 'continue' String
     && lk != 98761                 // '{' Identifier Integer
     && lk != 98889                 // '{' Character Integer
     && lk != 99017                 // '{' String Integer
     && lk != 99145                 // '{' Integer Integer
     && lk != 99273                 // '{' Real Integer
     && lk != 99401                 // '{' Imaginary Integer
     && lk != 99529                 // '{' Comment Integer
     && lk != 103113                // '{' ';' Integer
     && lk != 105289                // '{' 'break' Integer
     && lk != 105673                // '{' 'continue' Integer
     && lk != 115145                // '{' Identifier Real
     && lk != 115273                // '{' Character Real
     && lk != 115401                // '{' String Real
     && lk != 115529                // '{' Integer Real
     && lk != 115657                // '{' Real Real
     && lk != 115785                // '{' Imaginary Real
     && lk != 115913                // '{' Comment Real
     && lk != 119497                // '{' ';' Real
     && lk != 121673                // '{' 'break' Real
     && lk != 122057                // '{' 'continue' Real
     && lk != 131529                // '{' Identifier Imaginary
     && lk != 131657                // '{' Character Imaginary
     && lk != 131785                // '{' String Imaginary
     && lk != 131913                // '{' Integer Imaginary
     && lk != 132169                // '{' Imaginary Imaginary
     && lk != 132297                // '{' Comment Imaginary
     && lk != 135881                // '{' ';' Imaginary
     && lk != 138057                // '{' 'break' Imaginary
     && lk != 138441                // '{' 'continue' Imaginary
     && lk != 147913                // '{' Identifier Comment
     && lk != 148041                // '{' Character Comment
     && lk != 148169                // '{' String Comment
     && lk != 148297                // '{' Integer Comment
     && lk != 148425                // '{' Real Comment
     && lk != 148553                // '{' Imaginary Comment
     && lk != 148681                // '{' Comment Comment
     && lk != 152265                // '{' ';' Comment
     && lk != 154441                // '{' 'break' Comment
     && lk != 154825                // '{' 'continue' Comment
     && lk != 197065                // '{' Identifier '!'
     && lk != 197193                // '{' Character '!'
     && lk != 197321                // '{' String '!'
     && lk != 197449                // '{' Integer '!'
     && lk != 197577                // '{' Real '!'
     && lk != 197705                // '{' Imaginary '!'
     && lk != 197833                // '{' Comment '!'
     && lk != 201417                // '{' ';' '!'
     && lk != 203593                // '{' 'break' '!'
     && lk != 203977                // '{' 'continue' '!'
     && lk != 328265                // '{' Character '('
     && lk != 328393                // '{' String '('
     && lk != 328521                // '{' Integer '('
     && lk != 328649                // '{' Real '('
     && lk != 328777                // '{' Imaginary '('
     && lk != 328905                // '{' Comment '('
     && lk != 332489                // '{' ';' '('
     && lk != 334665                // '{' 'break' '('
     && lk != 335049                // '{' 'continue' '('
     && lk != 346627                // Identifier '(' ')'
     && lk != 410825                // '{' Comment '+'
     && lk != 414409                // '{' ';' '+'
     && lk != 416585                // '{' 'break' '+'
     && lk != 416969                // '{' 'continue' '+'
     && lk != 427209                // '{' Comment '++'
     && lk != 430793                // '{' ';' '++'
     && lk != 432969                // '{' 'break' '++'
     && lk != 433353                // '{' 'continue' '++'
     && lk != 459209                // '{' Identifier ','
     && lk != 459337                // '{' Character ','
     && lk != 459465                // '{' String ','
     && lk != 459593                // '{' Integer ','
     && lk != 459721                // '{' Real ','
     && lk != 459849                // '{' Imaginary ','
     && lk != 459977                // '{' Comment ','
     && lk != 463561                // '{' ';' ','
     && lk != 465737                // '{' 'break' ','
     && lk != 466121                // '{' 'continue' ','
     && lk != 476361                // '{' Comment '-'
     && lk != 479945                // '{' ';' '-'
     && lk != 482121                // '{' 'break' '-'
     && lk != 482505                // '{' 'continue' '-'
     && lk != 492745                // '{' Comment '--'
     && lk != 496329                // '{' ';' '--'
     && lk != 498505                // '{' 'break' '--'
     && lk != 498889                // '{' 'continue' '--'
     && lk != 573897                // '{' Identifier ':'
     && lk != 574153                // '{' String ':'
     && lk != 606665                // '{' Identifier ';'
     && lk != 606793                // '{' Character ';'
     && lk != 606921                // '{' String ';'
     && lk != 607049                // '{' Integer ';'
     && lk != 607177                // '{' Real ';'
     && lk != 607305                // '{' Imaginary ';'
     && lk != 607433                // '{' Comment ';'
     && lk != 611017                // '{' ';' ';'
     && lk != 613193                // '{' 'break' ';'
     && lk != 613577                // '{' 'continue' ';'
     && lk != 819785                // '{' Character '['
     && lk != 819913                // '{' String '['
     && lk != 820041                // '{' Integer '['
     && lk != 820169                // '{' Real '['
     && lk != 820297                // '{' Imaginary '['
     && lk != 820425                // '{' Comment '['
     && lk != 824009                // '{' ';' '['
     && lk != 826185                // '{' 'break' '['
     && lk != 826569                // '{' 'continue' '['
     && lk != 885193                // '{' Identifier 'break'
     && lk != 885321                // '{' Character 'break'
     && lk != 885449                // '{' String 'break'
     && lk != 885577                // '{' Integer 'break'
     && lk != 885705                // '{' Real 'break'
     && lk != 885833                // '{' Imaginary 'break'
     && lk != 885961                // '{' Comment 'break'
     && lk != 889545                // '{' ';' 'break'
     && lk != 891721                // '{' 'break' 'break'
     && lk != 892105                // '{' 'continue' 'break'
     && lk != 934345                // '{' Identifier 'continue'
     && lk != 934473                // '{' Character 'continue'
     && lk != 934601                // '{' String 'continue'
     && lk != 934729                // '{' Integer 'continue'
     && lk != 934857                // '{' Real 'continue'
     && lk != 934985                // '{' Imaginary 'continue'
     && lk != 935113                // '{' Comment 'continue'
     && lk != 938697                // '{' ';' 'continue'
     && lk != 940873                // '{' 'break' 'continue'
     && lk != 941257                // '{' 'continue' 'continue'
     && lk != 967113                // '{' Identifier 'do'
     && lk != 967241                // '{' Character 'do'
     && lk != 967369                // '{' String 'do'
     && lk != 967497                // '{' Integer 'do'
     && lk != 967625                // '{' Real 'do'
     && lk != 967753                // '{' Imaginary 'do'
     && lk != 967881                // '{' Comment 'do'
     && lk != 971465                // '{' ';' 'do'
     && lk != 973641                // '{' 'break' 'do'
     && lk != 974025                // '{' 'continue' 'do'
     && lk != 999881                // '{' Identifier 'f32'
     && lk != 1000009               // '{' Character 'f32'
     && lk != 1000137               // '{' String 'f32'
     && lk != 1000265               // '{' Integer 'f32'
     && lk != 1000393               // '{' Real 'f32'
     && lk != 1000521               // '{' Imaginary 'f32'
     && lk != 1000649               // '{' Comment 'f32'
     && lk != 1004233               // '{' ';' 'f32'
     && lk != 1006409               // '{' 'break' 'f32'
     && lk != 1006793               // '{' 'continue' 'f32'
     && lk != 1016265               // '{' Identifier 'f64'
     && lk != 1016393               // '{' Character 'f64'
     && lk != 1016521               // '{' String 'f64'
     && lk != 1016649               // '{' Integer 'f64'
     && lk != 1016777               // '{' Real 'f64'
     && lk != 1016905               // '{' Imaginary 'f64'
     && lk != 1017033               // '{' Comment 'f64'
     && lk != 1020617               // '{' ';' 'f64'
     && lk != 1022793               // '{' 'break' 'f64'
     && lk != 1023177               // '{' 'continue' 'f64'
     && lk != 1032649               // '{' Identifier 'for'
     && lk != 1032777               // '{' Character 'for'
     && lk != 1032905               // '{' String 'for'
     && lk != 1033033               // '{' Integer 'for'
     && lk != 1033161               // '{' Real 'for'
     && lk != 1033289               // '{' Imaginary 'for'
     && lk != 1033417               // '{' Comment 'for'
     && lk != 1037001               // '{' ';' 'for'
     && lk != 1039177               // '{' 'break' 'for'
     && lk != 1039561               // '{' 'continue' 'for'
     && lk != 1049033               // '{' Identifier 'foreach'
     && lk != 1049161               // '{' Character 'foreach'
     && lk != 1049289               // '{' String 'foreach'
     && lk != 1049417               // '{' Integer 'foreach'
     && lk != 1049545               // '{' Real 'foreach'
     && lk != 1049673               // '{' Imaginary 'foreach'
     && lk != 1049801               // '{' Comment 'foreach'
     && lk != 1053385               // '{' ';' 'foreach'
     && lk != 1055561               // '{' 'break' 'foreach'
     && lk != 1055945               // '{' 'continue' 'foreach'
     && lk != 1065417               // '{' Identifier 'i32'
     && lk != 1065545               // '{' Character 'i32'
     && lk != 1065673               // '{' String 'i32'
     && lk != 1065801               // '{' Integer 'i32'
     && lk != 1065929               // '{' Real 'i32'
     && lk != 1066057               // '{' Imaginary 'i32'
     && lk != 1066185               // '{' Comment 'i32'
     && lk != 1069769               // '{' ';' 'i32'
     && lk != 1071945               // '{' 'break' 'i32'
     && lk != 1072329               // '{' 'continue' 'i32'
     && lk != 1081801               // '{' Identifier 'i64'
     && lk != 1081929               // '{' Character 'i64'
     && lk != 1082057               // '{' String 'i64'
     && lk != 1082185               // '{' Integer 'i64'
     && lk != 1082313               // '{' Real 'i64'
     && lk != 1082441               // '{' Imaginary 'i64'
     && lk != 1082569               // '{' Comment 'i64'
     && lk != 1086153               // '{' ';' 'i64'
     && lk != 1088329               // '{' 'break' 'i64'
     && lk != 1088713               // '{' 'continue' 'i64'
     && lk != 1098185               // '{' Identifier 'if'
     && lk != 1098313               // '{' Character 'if'
     && lk != 1098441               // '{' String 'if'
     && lk != 1098569               // '{' Integer 'if'
     && lk != 1098697               // '{' Real 'if'
     && lk != 1098825               // '{' Imaginary 'if'
     && lk != 1098953               // '{' Comment 'if'
     && lk != 1102537               // '{' ';' 'if'
     && lk != 1104713               // '{' 'break' 'if'
     && lk != 1105097               // '{' 'continue' 'if'
     && lk != 1114569               // '{' Identifier 'return'
     && lk != 1114697               // '{' Character 'return'
     && lk != 1114825               // '{' String 'return'
     && lk != 1114953               // '{' Integer 'return'
     && lk != 1115081               // '{' Real 'return'
     && lk != 1115209               // '{' Imaginary 'return'
     && lk != 1115337               // '{' Comment 'return'
     && lk != 1118921               // '{' ';' 'return'
     && lk != 1121097               // '{' 'break' 'return'
     && lk != 1121481               // '{' 'continue' 'return'
     && lk != 1130953               // '{' Identifier 'switch'
     && lk != 1131081               // '{' Character 'switch'
     && lk != 1131209               // '{' String 'switch'
     && lk != 1131337               // '{' Integer 'switch'
     && lk != 1131465               // '{' Real 'switch'
     && lk != 1131593               // '{' Imaginary 'switch'
     && lk != 1131721               // '{' Comment 'switch'
     && lk != 1135305               // '{' ';' 'switch'
     && lk != 1137481               // '{' 'break' 'switch'
     && lk != 1137865               // '{' 'continue' 'switch'
     && lk != 1147337               // '{' Identifier 'test'
     && lk != 1147465               // '{' Character 'test'
     && lk != 1147593               // '{' String 'test'
     && lk != 1147721               // '{' Integer 'test'
     && lk != 1147849               // '{' Real 'test'
     && lk != 1147977               // '{' Imaginary 'test'
     && lk != 1148105               // '{' Comment 'test'
     && lk != 1151689               // '{' ';' 'test'
     && lk != 1153865               // '{' 'break' 'test'
     && lk != 1154249               // '{' 'continue' 'test'
     && lk != 1163721               // '{' Identifier 'try'
     && lk != 1163849               // '{' Character 'try'
     && lk != 1163977               // '{' String 'try'
     && lk != 1164105               // '{' Integer 'try'
     && lk != 1164233               // '{' Real 'try'
     && lk != 1164361               // '{' Imaginary 'try'
     && lk != 1164489               // '{' Comment 'try'
     && lk != 1168073               // '{' ';' 'try'
     && lk != 1170249               // '{' 'break' 'try'
     && lk != 1170633               // '{' 'continue' 'try'
     && lk != 1180105               // '{' Identifier 'while'
     && lk != 1180233               // '{' Character 'while'
     && lk != 1180361               // '{' String 'while'
     && lk != 1180489               // '{' Integer 'while'
     && lk != 1180617               // '{' Real 'while'
     && lk != 1180745               // '{' Imaginary 'while'
     && lk != 1180873               // '{' Comment 'while'
     && lk != 1184457               // '{' ';' 'while'
     && lk != 1186633               // '{' 'break' 'while'
     && lk != 1187017               // '{' 'continue' 'while'
     && lk != 1196617               // '{' Character '{'
     && lk != 1196745               // '{' String '{'
     && lk != 1196873               // '{' Integer '{'
     && lk != 1197001               // '{' Real '{'
     && lk != 1197129               // '{' Imaginary '{'
     && lk != 1197257               // '{' Comment '{'
     && lk != 1200841               // '{' ';' '{'
     && lk != 1203017               // '{' 'break' '{'
     && lk != 1203401               // '{' 'continue' '{'
     && lk != 1278409               // '{' Identifier '~'
     && lk != 1278537               // '{' Character '~'
     && lk != 1278665               // '{' String '~'
     && lk != 1278793               // '{' Integer '~'
     && lk != 1278921               // '{' Real '~'
     && lk != 1279049               // '{' Imaginary '~'
     && lk != 1279177               // '{' Comment '~'
     && lk != 1282761               // '{' ';' '~'
     && lk != 1284937               // '{' 'break' '~'
     && lk != 1285321)              // '{' 'continue' '~'
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
    case -3:
    case 37:                        // ';'
    case 54:                        // 'break'
    case 57:                        // 'continue'
    case 59:                        // 'do'
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 63:                        // 'for'
    case 64:                        // 'foreach'
    case 65:                        // 'i32'
    case 66:                        // 'i64'
    case 67:                        // 'if'
    case 68:                        // 'return'
    case 69:                        // 'switch'
    case 70:                        // 'test'
    case 71:                        // 'try'
    case 72:                        // 'while'
      parse_Statement();
      break;
    case -4:
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
    case 8:                         // Imaginary
    case 12:                        // '!'
    case 20:                        // '('
    case 25:                        // '+'
    case 26:                        // '++'
    case 29:                        // '-'
    case 30:                        // '--'
    case 50:                        // '['
    case 78:                        // '~'
    case 131:                       // Identifier END
    case 387:                       // Identifier Identifier
    case 515:                       // Identifier Character
    case 643:                       // Identifier String
    case 771:                       // Identifier Integer
    case 899:                       // Identifier Real
    case 1027:                      // Identifier Imaginary
    case 1155:                      // Identifier Comment
    case 1539:                      // Identifier '!'
    case 1667:                      // Identifier '!='
    case 1923:                      // Identifier '%'
    case 2051:                      // Identifier '%='
    case 2179:                      // Identifier '&'
    case 2307:                      // Identifier '&&'
    case 2435:                      // Identifier '&='
    case 2691:                      // Identifier ')'
    case 2819:                      // Identifier '*'
    case 2947:                      // Identifier '**'
    case 3075:                      // Identifier '*='
    case 3203:                      // Identifier '+'
    case 3331:                      // Identifier '++'
    case 3459:                      // Identifier '+='
    case 3587:                      // Identifier ','
    case 3715:                      // Identifier '-'
    case 3843:                      // Identifier '--'
    case 3971:                      // Identifier '-='
    case 4099:                      // Identifier '.'
    case 4227:                      // Identifier '/'
    case 4355:                      // Identifier '/='
    case 4483:                      // Identifier ':'
    case 4611:                      // Identifier ':='
    case 4739:                      // Identifier ';'
    case 4867:                      // Identifier '<'
    case 4995:                      // Identifier '<<'
    case 5123:                      // Identifier '<<='
    case 5251:                      // Identifier '<='
    case 5379:                      // Identifier '='
    case 5507:                      // Identifier '=='
    case 5635:                      // Identifier '>'
    case 5763:                      // Identifier '>='
    case 5891:                      // Identifier '>>'
    case 6019:                      // Identifier '>>='
    case 6147:                      // Identifier '?'
    case 6275:                      // Identifier '?='
    case 6403:                      // Identifier '['
    case 6531:                      // Identifier ']'
    case 6659:                      // Identifier '^'
    case 6787:                      // Identifier '^='
    case 6915:                      // Identifier 'break'
    case 7043:                      // Identifier 'case'
    case 7171:                      // Identifier 'catch'
    case 7299:                      // Identifier 'continue'
    case 7427:                      // Identifier 'default'
    case 7555:                      // Identifier 'do'
    case 7683:                      // Identifier 'else'
    case 7811:                      // Identifier 'f32'
    case 7939:                      // Identifier 'f64'
    case 8067:                      // Identifier 'for'
    case 8195:                      // Identifier 'foreach'
    case 8323:                      // Identifier 'i32'
    case 8451:                      // Identifier 'i64'
    case 8579:                      // Identifier 'if'
    case 8707:                      // Identifier 'return'
    case 8835:                      // Identifier 'switch'
    case 8963:                      // Identifier 'test'
    case 9091:                      // Identifier 'try'
    case 9219:                      // Identifier 'while'
    case 9475:                      // Identifier '|'
    case 9603:                      // Identifier '|='
    case 9731:                      // Identifier '||'
    case 9859:                      // Identifier '}'
    case 9987:                      // Identifier '~'
    case 346627:                    // Identifier '(' ')'
    case 459209:                    // '{' Identifier ','
    case 459337:                    // '{' Character ','
    case 459465:                    // '{' String ','
    case 459593:                    // '{' Integer ','
    case 459721:                    // '{' Real ','
    case 459849:                    // '{' Imaginary ','
    case 459977:                    // '{' Comment ','
    case 463561:                    // '{' ';' ','
    case 465737:                    // '{' 'break' ','
    case 466121:                    // '{' 'continue' ','
    case 573897:                    // '{' Identifier ':'
    case 574153:                    // '{' String ':'
      parse_Operation();
      break;
    default:
      parse_Block();
    }
    eventHandler.endNonterminal("Expression", e0);
  }

  function try_Expression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(49);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9347:                    // Identifier '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 73:                        // '{'
      lookahead2W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 457:                     // '{' Identifier
        lookahead3W(47);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' |
                                    // 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 713:                     // '{' String
        lookahead3W(46);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6473:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9417:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 585:                     // '{' Character
      case 841:                     // '{' Integer
      case 969:                     // '{' Real
      case 1097:                    // '{' Imaginary
        lookahead3W(45);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' |
                                    // 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1225:                    // '{' Comment
      case 4809:                    // '{' ';'
      case 6985:                    // '{' 'break'
      case 7369:                    // '{' 'continue'
        lookahead3W(31);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 2633:                    // '{' '('
      case 7625:                    // '{' 'do'
      case 8777:                    // '{' 'return'
      case 9161:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7881:                    // '{' 'f32'
      case 8009:                    // '{' 'f64'
      case 8393:                    // '{' 'i32'
      case 8521:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1609:                    // '{' '!'
      case 3273:                    // '{' '+'
      case 3401:                    // '{' '++'
      case 3785:                    // '{' '-'
      case 3913:                    // '{' '--'
      case 10057:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8137:                    // '{' 'for'
      case 8265:                    // '{' 'foreach'
      case 8649:                    // '{' 'if'
      case 8905:                    // '{' 'switch'
      case 9033:                    // '{' 'test'
      case 9289:                    // '{' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 63                    // 'for'
     && lk != 64                    // 'foreach'
     && lk != 65                    // 'i32'
     && lk != 66                    // 'i64'
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 78                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Character
     && lk != 643                   // Identifier String
     && lk != 771                   // Identifier Integer
     && lk != 899                   // Identifier Real
     && lk != 1027                  // Identifier Imaginary
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
     && lk != 3715                  // Identifier '-'
     && lk != 3843                  // Identifier '--'
     && lk != 3971                  // Identifier '-='
     && lk != 4099                  // Identifier '.'
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
     && lk != 8323                  // Identifier 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8707                  // Identifier 'return'
     && lk != 8835                  // Identifier 'switch'
     && lk != 8963                  // Identifier 'test'
     && lk != 9091                  // Identifier 'try'
     && lk != 9219                  // Identifier 'while'
     && lk != 9475                  // Identifier '|'
     && lk != 9603                  // Identifier '|='
     && lk != 9731                  // Identifier '||'
     && lk != 9859                  // Identifier '}'
     && lk != 9929                  // '{' '}'
     && lk != 9987                  // Identifier '~'
     && lk != 49609                 // '{' Identifier Identifier
     && lk != 49737                 // '{' Character Identifier
     && lk != 49865                 // '{' String Identifier
     && lk != 49993                 // '{' Integer Identifier
     && lk != 50121                 // '{' Real Identifier
     && lk != 50249                 // '{' Imaginary Identifier
     && lk != 50377                 // '{' Comment Identifier
     && lk != 53961                 // '{' ';' Identifier
     && lk != 56137                 // '{' 'break' Identifier
     && lk != 56521                 // '{' 'continue' Identifier
     && lk != 65993                 // '{' Identifier Character
     && lk != 66121                 // '{' Character Character
     && lk != 66249                 // '{' String Character
     && lk != 66377                 // '{' Integer Character
     && lk != 66505                 // '{' Real Character
     && lk != 66633                 // '{' Imaginary Character
     && lk != 66761                 // '{' Comment Character
     && lk != 70345                 // '{' ';' Character
     && lk != 72521                 // '{' 'break' Character
     && lk != 72905                 // '{' 'continue' Character
     && lk != 82377                 // '{' Identifier String
     && lk != 82505                 // '{' Character String
     && lk != 82633                 // '{' String String
     && lk != 82761                 // '{' Integer String
     && lk != 82889                 // '{' Real String
     && lk != 83017                 // '{' Imaginary String
     && lk != 83145                 // '{' Comment String
     && lk != 86729                 // '{' ';' String
     && lk != 88905                 // '{' 'break' String
     && lk != 89289                 // '{' 'continue' String
     && lk != 98761                 // '{' Identifier Integer
     && lk != 98889                 // '{' Character Integer
     && lk != 99017                 // '{' String Integer
     && lk != 99145                 // '{' Integer Integer
     && lk != 99273                 // '{' Real Integer
     && lk != 99401                 // '{' Imaginary Integer
     && lk != 99529                 // '{' Comment Integer
     && lk != 103113                // '{' ';' Integer
     && lk != 105289                // '{' 'break' Integer
     && lk != 105673                // '{' 'continue' Integer
     && lk != 115145                // '{' Identifier Real
     && lk != 115273                // '{' Character Real
     && lk != 115401                // '{' String Real
     && lk != 115529                // '{' Integer Real
     && lk != 115657                // '{' Real Real
     && lk != 115785                // '{' Imaginary Real
     && lk != 115913                // '{' Comment Real
     && lk != 119497                // '{' ';' Real
     && lk != 121673                // '{' 'break' Real
     && lk != 122057                // '{' 'continue' Real
     && lk != 131529                // '{' Identifier Imaginary
     && lk != 131657                // '{' Character Imaginary
     && lk != 131785                // '{' String Imaginary
     && lk != 131913                // '{' Integer Imaginary
     && lk != 132169                // '{' Imaginary Imaginary
     && lk != 132297                // '{' Comment Imaginary
     && lk != 135881                // '{' ';' Imaginary
     && lk != 138057                // '{' 'break' Imaginary
     && lk != 138441                // '{' 'continue' Imaginary
     && lk != 147913                // '{' Identifier Comment
     && lk != 148041                // '{' Character Comment
     && lk != 148169                // '{' String Comment
     && lk != 148297                // '{' Integer Comment
     && lk != 148425                // '{' Real Comment
     && lk != 148553                // '{' Imaginary Comment
     && lk != 148681                // '{' Comment Comment
     && lk != 152265                // '{' ';' Comment
     && lk != 154441                // '{' 'break' Comment
     && lk != 154825                // '{' 'continue' Comment
     && lk != 197065                // '{' Identifier '!'
     && lk != 197193                // '{' Character '!'
     && lk != 197321                // '{' String '!'
     && lk != 197449                // '{' Integer '!'
     && lk != 197577                // '{' Real '!'
     && lk != 197705                // '{' Imaginary '!'
     && lk != 197833                // '{' Comment '!'
     && lk != 201417                // '{' ';' '!'
     && lk != 203593                // '{' 'break' '!'
     && lk != 203977                // '{' 'continue' '!'
     && lk != 328265                // '{' Character '('
     && lk != 328393                // '{' String '('
     && lk != 328521                // '{' Integer '('
     && lk != 328649                // '{' Real '('
     && lk != 328777                // '{' Imaginary '('
     && lk != 328905                // '{' Comment '('
     && lk != 332489                // '{' ';' '('
     && lk != 334665                // '{' 'break' '('
     && lk != 335049                // '{' 'continue' '('
     && lk != 346627                // Identifier '(' ')'
     && lk != 410825                // '{' Comment '+'
     && lk != 414409                // '{' ';' '+'
     && lk != 416585                // '{' 'break' '+'
     && lk != 416969                // '{' 'continue' '+'
     && lk != 427209                // '{' Comment '++'
     && lk != 430793                // '{' ';' '++'
     && lk != 432969                // '{' 'break' '++'
     && lk != 433353                // '{' 'continue' '++'
     && lk != 459209                // '{' Identifier ','
     && lk != 459337                // '{' Character ','
     && lk != 459465                // '{' String ','
     && lk != 459593                // '{' Integer ','
     && lk != 459721                // '{' Real ','
     && lk != 459849                // '{' Imaginary ','
     && lk != 459977                // '{' Comment ','
     && lk != 463561                // '{' ';' ','
     && lk != 465737                // '{' 'break' ','
     && lk != 466121                // '{' 'continue' ','
     && lk != 476361                // '{' Comment '-'
     && lk != 479945                // '{' ';' '-'
     && lk != 482121                // '{' 'break' '-'
     && lk != 482505                // '{' 'continue' '-'
     && lk != 492745                // '{' Comment '--'
     && lk != 496329                // '{' ';' '--'
     && lk != 498505                // '{' 'break' '--'
     && lk != 498889                // '{' 'continue' '--'
     && lk != 573897                // '{' Identifier ':'
     && lk != 574153                // '{' String ':'
     && lk != 606665                // '{' Identifier ';'
     && lk != 606793                // '{' Character ';'
     && lk != 606921                // '{' String ';'
     && lk != 607049                // '{' Integer ';'
     && lk != 607177                // '{' Real ';'
     && lk != 607305                // '{' Imaginary ';'
     && lk != 607433                // '{' Comment ';'
     && lk != 611017                // '{' ';' ';'
     && lk != 613193                // '{' 'break' ';'
     && lk != 613577                // '{' 'continue' ';'
     && lk != 819785                // '{' Character '['
     && lk != 819913                // '{' String '['
     && lk != 820041                // '{' Integer '['
     && lk != 820169                // '{' Real '['
     && lk != 820297                // '{' Imaginary '['
     && lk != 820425                // '{' Comment '['
     && lk != 824009                // '{' ';' '['
     && lk != 826185                // '{' 'break' '['
     && lk != 826569                // '{' 'continue' '['
     && lk != 885193                // '{' Identifier 'break'
     && lk != 885321                // '{' Character 'break'
     && lk != 885449                // '{' String 'break'
     && lk != 885577                // '{' Integer 'break'
     && lk != 885705                // '{' Real 'break'
     && lk != 885833                // '{' Imaginary 'break'
     && lk != 885961                // '{' Comment 'break'
     && lk != 889545                // '{' ';' 'break'
     && lk != 891721                // '{' 'break' 'break'
     && lk != 892105                // '{' 'continue' 'break'
     && lk != 934345                // '{' Identifier 'continue'
     && lk != 934473                // '{' Character 'continue'
     && lk != 934601                // '{' String 'continue'
     && lk != 934729                // '{' Integer 'continue'
     && lk != 934857                // '{' Real 'continue'
     && lk != 934985                // '{' Imaginary 'continue'
     && lk != 935113                // '{' Comment 'continue'
     && lk != 938697                // '{' ';' 'continue'
     && lk != 940873                // '{' 'break' 'continue'
     && lk != 941257                // '{' 'continue' 'continue'
     && lk != 967113                // '{' Identifier 'do'
     && lk != 967241                // '{' Character 'do'
     && lk != 967369                // '{' String 'do'
     && lk != 967497                // '{' Integer 'do'
     && lk != 967625                // '{' Real 'do'
     && lk != 967753                // '{' Imaginary 'do'
     && lk != 967881                // '{' Comment 'do'
     && lk != 971465                // '{' ';' 'do'
     && lk != 973641                // '{' 'break' 'do'
     && lk != 974025                // '{' 'continue' 'do'
     && lk != 999881                // '{' Identifier 'f32'
     && lk != 1000009               // '{' Character 'f32'
     && lk != 1000137               // '{' String 'f32'
     && lk != 1000265               // '{' Integer 'f32'
     && lk != 1000393               // '{' Real 'f32'
     && lk != 1000521               // '{' Imaginary 'f32'
     && lk != 1000649               // '{' Comment 'f32'
     && lk != 1004233               // '{' ';' 'f32'
     && lk != 1006409               // '{' 'break' 'f32'
     && lk != 1006793               // '{' 'continue' 'f32'
     && lk != 1016265               // '{' Identifier 'f64'
     && lk != 1016393               // '{' Character 'f64'
     && lk != 1016521               // '{' String 'f64'
     && lk != 1016649               // '{' Integer 'f64'
     && lk != 1016777               // '{' Real 'f64'
     && lk != 1016905               // '{' Imaginary 'f64'
     && lk != 1017033               // '{' Comment 'f64'
     && lk != 1020617               // '{' ';' 'f64'
     && lk != 1022793               // '{' 'break' 'f64'
     && lk != 1023177               // '{' 'continue' 'f64'
     && lk != 1032649               // '{' Identifier 'for'
     && lk != 1032777               // '{' Character 'for'
     && lk != 1032905               // '{' String 'for'
     && lk != 1033033               // '{' Integer 'for'
     && lk != 1033161               // '{' Real 'for'
     && lk != 1033289               // '{' Imaginary 'for'
     && lk != 1033417               // '{' Comment 'for'
     && lk != 1037001               // '{' ';' 'for'
     && lk != 1039177               // '{' 'break' 'for'
     && lk != 1039561               // '{' 'continue' 'for'
     && lk != 1049033               // '{' Identifier 'foreach'
     && lk != 1049161               // '{' Character 'foreach'
     && lk != 1049289               // '{' String 'foreach'
     && lk != 1049417               // '{' Integer 'foreach'
     && lk != 1049545               // '{' Real 'foreach'
     && lk != 1049673               // '{' Imaginary 'foreach'
     && lk != 1049801               // '{' Comment 'foreach'
     && lk != 1053385               // '{' ';' 'foreach'
     && lk != 1055561               // '{' 'break' 'foreach'
     && lk != 1055945               // '{' 'continue' 'foreach'
     && lk != 1065417               // '{' Identifier 'i32'
     && lk != 1065545               // '{' Character 'i32'
     && lk != 1065673               // '{' String 'i32'
     && lk != 1065801               // '{' Integer 'i32'
     && lk != 1065929               // '{' Real 'i32'
     && lk != 1066057               // '{' Imaginary 'i32'
     && lk != 1066185               // '{' Comment 'i32'
     && lk != 1069769               // '{' ';' 'i32'
     && lk != 1071945               // '{' 'break' 'i32'
     && lk != 1072329               // '{' 'continue' 'i32'
     && lk != 1081801               // '{' Identifier 'i64'
     && lk != 1081929               // '{' Character 'i64'
     && lk != 1082057               // '{' String 'i64'
     && lk != 1082185               // '{' Integer 'i64'
     && lk != 1082313               // '{' Real 'i64'
     && lk != 1082441               // '{' Imaginary 'i64'
     && lk != 1082569               // '{' Comment 'i64'
     && lk != 1086153               // '{' ';' 'i64'
     && lk != 1088329               // '{' 'break' 'i64'
     && lk != 1088713               // '{' 'continue' 'i64'
     && lk != 1098185               // '{' Identifier 'if'
     && lk != 1098313               // '{' Character 'if'
     && lk != 1098441               // '{' String 'if'
     && lk != 1098569               // '{' Integer 'if'
     && lk != 1098697               // '{' Real 'if'
     && lk != 1098825               // '{' Imaginary 'if'
     && lk != 1098953               // '{' Comment 'if'
     && lk != 1102537               // '{' ';' 'if'
     && lk != 1104713               // '{' 'break' 'if'
     && lk != 1105097               // '{' 'continue' 'if'
     && lk != 1114569               // '{' Identifier 'return'
     && lk != 1114697               // '{' Character 'return'
     && lk != 1114825               // '{' String 'return'
     && lk != 1114953               // '{' Integer 'return'
     && lk != 1115081               // '{' Real 'return'
     && lk != 1115209               // '{' Imaginary 'return'
     && lk != 1115337               // '{' Comment 'return'
     && lk != 1118921               // '{' ';' 'return'
     && lk != 1121097               // '{' 'break' 'return'
     && lk != 1121481               // '{' 'continue' 'return'
     && lk != 1130953               // '{' Identifier 'switch'
     && lk != 1131081               // '{' Character 'switch'
     && lk != 1131209               // '{' String 'switch'
     && lk != 1131337               // '{' Integer 'switch'
     && lk != 1131465               // '{' Real 'switch'
     && lk != 1131593               // '{' Imaginary 'switch'
     && lk != 1131721               // '{' Comment 'switch'
     && lk != 1135305               // '{' ';' 'switch'
     && lk != 1137481               // '{' 'break' 'switch'
     && lk != 1137865               // '{' 'continue' 'switch'
     && lk != 1147337               // '{' Identifier 'test'
     && lk != 1147465               // '{' Character 'test'
     && lk != 1147593               // '{' String 'test'
     && lk != 1147721               // '{' Integer 'test'
     && lk != 1147849               // '{' Real 'test'
     && lk != 1147977               // '{' Imaginary 'test'
     && lk != 1148105               // '{' Comment 'test'
     && lk != 1151689               // '{' ';' 'test'
     && lk != 1153865               // '{' 'break' 'test'
     && lk != 1154249               // '{' 'continue' 'test'
     && lk != 1163721               // '{' Identifier 'try'
     && lk != 1163849               // '{' Character 'try'
     && lk != 1163977               // '{' String 'try'
     && lk != 1164105               // '{' Integer 'try'
     && lk != 1164233               // '{' Real 'try'
     && lk != 1164361               // '{' Imaginary 'try'
     && lk != 1164489               // '{' Comment 'try'
     && lk != 1168073               // '{' ';' 'try'
     && lk != 1170249               // '{' 'break' 'try'
     && lk != 1170633               // '{' 'continue' 'try'
     && lk != 1180105               // '{' Identifier 'while'
     && lk != 1180233               // '{' Character 'while'
     && lk != 1180361               // '{' String 'while'
     && lk != 1180489               // '{' Integer 'while'
     && lk != 1180617               // '{' Real 'while'
     && lk != 1180745               // '{' Imaginary 'while'
     && lk != 1180873               // '{' Comment 'while'
     && lk != 1184457               // '{' ';' 'while'
     && lk != 1186633               // '{' 'break' 'while'
     && lk != 1187017               // '{' 'continue' 'while'
     && lk != 1196617               // '{' Character '{'
     && lk != 1196745               // '{' String '{'
     && lk != 1196873               // '{' Integer '{'
     && lk != 1197001               // '{' Real '{'
     && lk != 1197129               // '{' Imaginary '{'
     && lk != 1197257               // '{' Comment '{'
     && lk != 1200841               // '{' ';' '{'
     && lk != 1203017               // '{' 'break' '{'
     && lk != 1203401               // '{' 'continue' '{'
     && lk != 1278409               // '{' Identifier '~'
     && lk != 1278537               // '{' Character '~'
     && lk != 1278665               // '{' String '~'
     && lk != 1278793               // '{' Integer '~'
     && lk != 1278921               // '{' Real '~'
     && lk != 1279049               // '{' Imaginary '~'
     && lk != 1279177               // '{' Comment '~'
     && lk != 1282761               // '{' ';' '~'
     && lk != 1284937               // '{' 'break' '~'
     && lk != 1285321)              // '{' 'continue' '~'
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
    case -3:
    case 37:                        // ';'
    case 54:                        // 'break'
    case 57:                        // 'continue'
    case 59:                        // 'do'
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 63:                        // 'for'
    case 64:                        // 'foreach'
    case 65:                        // 'i32'
    case 66:                        // 'i64'
    case 67:                        // 'if'
    case 68:                        // 'return'
    case 69:                        // 'switch'
    case 70:                        // 'test'
    case 71:                        // 'try'
    case 72:                        // 'while'
      try_Statement();
      break;
    case -4:
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
    case 8:                         // Imaginary
    case 12:                        // '!'
    case 20:                        // '('
    case 25:                        // '+'
    case 26:                        // '++'
    case 29:                        // '-'
    case 30:                        // '--'
    case 50:                        // '['
    case 78:                        // '~'
    case 131:                       // Identifier END
    case 387:                       // Identifier Identifier
    case 515:                       // Identifier Character
    case 643:                       // Identifier String
    case 771:                       // Identifier Integer
    case 899:                       // Identifier Real
    case 1027:                      // Identifier Imaginary
    case 1155:                      // Identifier Comment
    case 1539:                      // Identifier '!'
    case 1667:                      // Identifier '!='
    case 1923:                      // Identifier '%'
    case 2051:                      // Identifier '%='
    case 2179:                      // Identifier '&'
    case 2307:                      // Identifier '&&'
    case 2435:                      // Identifier '&='
    case 2691:                      // Identifier ')'
    case 2819:                      // Identifier '*'
    case 2947:                      // Identifier '**'
    case 3075:                      // Identifier '*='
    case 3203:                      // Identifier '+'
    case 3331:                      // Identifier '++'
    case 3459:                      // Identifier '+='
    case 3587:                      // Identifier ','
    case 3715:                      // Identifier '-'
    case 3843:                      // Identifier '--'
    case 3971:                      // Identifier '-='
    case 4099:                      // Identifier '.'
    case 4227:                      // Identifier '/'
    case 4355:                      // Identifier '/='
    case 4483:                      // Identifier ':'
    case 4611:                      // Identifier ':='
    case 4739:                      // Identifier ';'
    case 4867:                      // Identifier '<'
    case 4995:                      // Identifier '<<'
    case 5123:                      // Identifier '<<='
    case 5251:                      // Identifier '<='
    case 5379:                      // Identifier '='
    case 5507:                      // Identifier '=='
    case 5635:                      // Identifier '>'
    case 5763:                      // Identifier '>='
    case 5891:                      // Identifier '>>'
    case 6019:                      // Identifier '>>='
    case 6147:                      // Identifier '?'
    case 6275:                      // Identifier '?='
    case 6403:                      // Identifier '['
    case 6531:                      // Identifier ']'
    case 6659:                      // Identifier '^'
    case 6787:                      // Identifier '^='
    case 6915:                      // Identifier 'break'
    case 7043:                      // Identifier 'case'
    case 7171:                      // Identifier 'catch'
    case 7299:                      // Identifier 'continue'
    case 7427:                      // Identifier 'default'
    case 7555:                      // Identifier 'do'
    case 7683:                      // Identifier 'else'
    case 7811:                      // Identifier 'f32'
    case 7939:                      // Identifier 'f64'
    case 8067:                      // Identifier 'for'
    case 8195:                      // Identifier 'foreach'
    case 8323:                      // Identifier 'i32'
    case 8451:                      // Identifier 'i64'
    case 8579:                      // Identifier 'if'
    case 8707:                      // Identifier 'return'
    case 8835:                      // Identifier 'switch'
    case 8963:                      // Identifier 'test'
    case 9091:                      // Identifier 'try'
    case 9219:                      // Identifier 'while'
    case 9475:                      // Identifier '|'
    case 9603:                      // Identifier '|='
    case 9731:                      // Identifier '||'
    case 9859:                      // Identifier '}'
    case 9987:                      // Identifier '~'
    case 346627:                    // Identifier '(' ')'
    case 459209:                    // '{' Identifier ','
    case 459337:                    // '{' Character ','
    case 459465:                    // '{' String ','
    case 459593:                    // '{' Integer ','
    case 459721:                    // '{' Real ','
    case 459849:                    // '{' Imaginary ','
    case 459977:                    // '{' Comment ','
    case 463561:                    // '{' ';' ','
    case 465737:                    // '{' 'break' ','
    case 466121:                    // '{' 'continue' ','
    case 573897:                    // '{' Identifier ':'
    case 574153:                    // '{' String ':'
      try_Operation();
      break;
    case -5:
      break;
    default:
      try_Block();
    }
  }

  function parse_Block()
  {
    eventHandler.startNonterminal("Block", e0);
    consume(73);                    // '{'
    for (;;)
    {
      lookahead1W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 77)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(77);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(73);                   // '{'
    for (;;)
    {
      lookahead1W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 77)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(77);                   // '}'
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
      case 75:                      // '|='
        lookahead2W(23);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
        case 459:                   // '|=' Identifier
          lookahead3W(49);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
        case 6475:                  // '|=' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 2576:                  // '%=' '('
        case 9360:                  // '%=' '{'
        case 2579:                  // '&=' '('
        case 9363:                  // '&=' '{'
        case 2584:                  // '*=' '('
        case 9368:                  // '*=' '{'
        case 2587:                  // '+=' '('
        case 9371:                  // '+=' '{'
        case 2591:                  // '-=' '('
        case 9375:                  // '-=' '{'
        case 2594:                  // '/=' '('
        case 9378:                  // '/=' '{'
        case 2596:                  // ':=' '('
        case 9380:                  // ':=' '{'
        case 2600:                  // '<<=' '('
        case 9384:                  // '<<=' '{'
        case 2602:                  // '=' '('
        case 9386:                  // '=' '{'
        case 2607:                  // '>>=' '('
        case 9391:                  // '>>=' '{'
        case 2609:                  // '?=' '('
        case 9393:                  // '?=' '{'
        case 2613:                  // '^=' '('
        case 9397:                  // '^=' '{'
        case 2635:                  // '|=' '('
        case 9419:                  // '|=' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 528:                   // '%=' Character
        case 656:                   // '%=' String
        case 784:                   // '%=' Integer
        case 912:                   // '%=' Real
        case 1040:                  // '%=' Imaginary
        case 531:                   // '&=' Character
        case 659:                   // '&=' String
        case 787:                   // '&=' Integer
        case 915:                   // '&=' Real
        case 1043:                  // '&=' Imaginary
        case 536:                   // '*=' Character
        case 664:                   // '*=' String
        case 792:                   // '*=' Integer
        case 920:                   // '*=' Real
        case 1048:                  // '*=' Imaginary
        case 539:                   // '+=' Character
        case 667:                   // '+=' String
        case 795:                   // '+=' Integer
        case 923:                   // '+=' Real
        case 1051:                  // '+=' Imaginary
        case 543:                   // '-=' Character
        case 671:                   // '-=' String
        case 799:                   // '-=' Integer
        case 927:                   // '-=' Real
        case 1055:                  // '-=' Imaginary
        case 546:                   // '/=' Character
        case 674:                   // '/=' String
        case 802:                   // '/=' Integer
        case 930:                   // '/=' Real
        case 1058:                  // '/=' Imaginary
        case 548:                   // ':=' Character
        case 676:                   // ':=' String
        case 804:                   // ':=' Integer
        case 932:                   // ':=' Real
        case 1060:                  // ':=' Imaginary
        case 552:                   // '<<=' Character
        case 680:                   // '<<=' String
        case 808:                   // '<<=' Integer
        case 936:                   // '<<=' Real
        case 1064:                  // '<<=' Imaginary
        case 554:                   // '=' Character
        case 682:                   // '=' String
        case 810:                   // '=' Integer
        case 938:                   // '=' Real
        case 1066:                  // '=' Imaginary
        case 559:                   // '>>=' Character
        case 687:                   // '>>=' String
        case 815:                   // '>>=' Integer
        case 943:                   // '>>=' Real
        case 1071:                  // '>>=' Imaginary
        case 561:                   // '?=' Character
        case 689:                   // '?=' String
        case 817:                   // '?=' Integer
        case 945:                   // '?=' Real
        case 1073:                  // '?=' Imaginary
        case 565:                   // '^=' Character
        case 693:                   // '^=' String
        case 821:                   // '^=' Integer
        case 949:                   // '^=' Real
        case 1077:                  // '^=' Imaginary
        case 587:                   // '|=' Character
        case 715:                   // '|=' String
        case 843:                   // '|=' Integer
        case 971:                   // '|=' Real
        case 1099:                  // '|=' Imaginary
          lookahead3W(48);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10000:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10003:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10008:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10011:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10015:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10018:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10020:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10024:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10026:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10031:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10033:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10037:                 // '^=' '~'
        case 1611:                  // '|=' '!'
        case 3275:                  // '|=' '+'
        case 3403:                  // '|=' '++'
        case 3787:                  // '|=' '-'
        case 3915:                  // '|=' '--'
        case 10059:                 // '|=' '~'
          lookahead3W(22);          // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
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
       && lk != 7                   // Real
       && lk != 8                   // Imaginary
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
       && lk != 65                  // 'i32'
       && lk != 66                  // 'i64'
       && lk != 67                  // 'if'
       && lk != 68                  // 'return'
       && lk != 69                  // 'switch'
       && lk != 70                  // 'test'
       && lk != 71                  // 'try'
       && lk != 72                  // 'while'
       && lk != 73                  // '{'
       && lk != 77                  // '}'
       && lk != 78)                 // '~'
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
            case 75:                // '|='
              consumeT(75);         // '|='
              break;
            case 49:                // '?='
              consumeT(49);         // '?='
              break;
            default:
              consumeT(36);         // ':='
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      case 75:                      // '|='
        consume(75);                // '|='
        break;
      case 49:                      // '?='
        consume(49);                // '?='
        break;
      default:
        consume(36);                // ':='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      case 75:                      // '|='
        lookahead2W(23);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
        case 459:                   // '|=' Identifier
          lookahead3W(49);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
        case 6475:                  // '|=' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 2576:                  // '%=' '('
        case 9360:                  // '%=' '{'
        case 2579:                  // '&=' '('
        case 9363:                  // '&=' '{'
        case 2584:                  // '*=' '('
        case 9368:                  // '*=' '{'
        case 2587:                  // '+=' '('
        case 9371:                  // '+=' '{'
        case 2591:                  // '-=' '('
        case 9375:                  // '-=' '{'
        case 2594:                  // '/=' '('
        case 9378:                  // '/=' '{'
        case 2596:                  // ':=' '('
        case 9380:                  // ':=' '{'
        case 2600:                  // '<<=' '('
        case 9384:                  // '<<=' '{'
        case 2602:                  // '=' '('
        case 9386:                  // '=' '{'
        case 2607:                  // '>>=' '('
        case 9391:                  // '>>=' '{'
        case 2609:                  // '?=' '('
        case 9393:                  // '?=' '{'
        case 2613:                  // '^=' '('
        case 9397:                  // '^=' '{'
        case 2635:                  // '|=' '('
        case 9419:                  // '|=' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 528:                   // '%=' Character
        case 656:                   // '%=' String
        case 784:                   // '%=' Integer
        case 912:                   // '%=' Real
        case 1040:                  // '%=' Imaginary
        case 531:                   // '&=' Character
        case 659:                   // '&=' String
        case 787:                   // '&=' Integer
        case 915:                   // '&=' Real
        case 1043:                  // '&=' Imaginary
        case 536:                   // '*=' Character
        case 664:                   // '*=' String
        case 792:                   // '*=' Integer
        case 920:                   // '*=' Real
        case 1048:                  // '*=' Imaginary
        case 539:                   // '+=' Character
        case 667:                   // '+=' String
        case 795:                   // '+=' Integer
        case 923:                   // '+=' Real
        case 1051:                  // '+=' Imaginary
        case 543:                   // '-=' Character
        case 671:                   // '-=' String
        case 799:                   // '-=' Integer
        case 927:                   // '-=' Real
        case 1055:                  // '-=' Imaginary
        case 546:                   // '/=' Character
        case 674:                   // '/=' String
        case 802:                   // '/=' Integer
        case 930:                   // '/=' Real
        case 1058:                  // '/=' Imaginary
        case 548:                   // ':=' Character
        case 676:                   // ':=' String
        case 804:                   // ':=' Integer
        case 932:                   // ':=' Real
        case 1060:                  // ':=' Imaginary
        case 552:                   // '<<=' Character
        case 680:                   // '<<=' String
        case 808:                   // '<<=' Integer
        case 936:                   // '<<=' Real
        case 1064:                  // '<<=' Imaginary
        case 554:                   // '=' Character
        case 682:                   // '=' String
        case 810:                   // '=' Integer
        case 938:                   // '=' Real
        case 1066:                  // '=' Imaginary
        case 559:                   // '>>=' Character
        case 687:                   // '>>=' String
        case 815:                   // '>>=' Integer
        case 943:                   // '>>=' Real
        case 1071:                  // '>>=' Imaginary
        case 561:                   // '?=' Character
        case 689:                   // '?=' String
        case 817:                   // '?=' Integer
        case 945:                   // '?=' Real
        case 1073:                  // '?=' Imaginary
        case 565:                   // '^=' Character
        case 693:                   // '^=' String
        case 821:                   // '^=' Integer
        case 949:                   // '^=' Real
        case 1077:                  // '^=' Imaginary
        case 587:                   // '|=' Character
        case 715:                   // '|=' String
        case 843:                   // '|=' Integer
        case 971:                   // '|=' Real
        case 1099:                  // '|=' Imaginary
          lookahead3W(48);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10000:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10003:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10008:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10011:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10015:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10018:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10020:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10024:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10026:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10031:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10033:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10037:                 // '^=' '~'
        case 1611:                  // '|=' '!'
        case 3275:                  // '|=' '+'
        case 3403:                  // '|=' '++'
        case 3787:                  // '|=' '-'
        case 3915:                  // '|=' '--'
        case 10059:                 // '|=' '~'
          lookahead3W(22);          // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
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
       && lk != 7                   // Real
       && lk != 8                   // Imaginary
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
       && lk != 65                  // 'i32'
       && lk != 66                  // 'i64'
       && lk != 67                  // 'if'
       && lk != 68                  // 'return'
       && lk != 69                  // 'switch'
       && lk != 70                  // 'test'
       && lk != 71                  // 'try'
       && lk != 72                  // 'while'
       && lk != 73                  // '{'
       && lk != 77                  // '}'
       && lk != 78)                 // '~'
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
            case 75:                // '|='
              consumeT(75);         // '|='
              break;
            case 49:                // '?='
              consumeT(49);         // '?='
              break;
            default:
              consumeT(36);         // ':='
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      case 75:                      // '|='
        consumeT(75);               // '|='
        break;
      case 49:                      // '?='
        consumeT(49);               // '?='
        break;
      default:
        consumeT(36);               // ':='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
      consume(35);                  // ':'
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_VariableAssignment();
      consumeT(35);                 // ':'
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_VariableAssignment();
    }
  }

  function parse_LogicalORExpression()
  {
    eventHandler.startNonterminal("LogicalORExpression", e0);
    parse_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 76)                 // '||'
      {
        break;
      }
      consume(76);                  // '||'
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 76)                 // '||'
      {
        break;
      }
      consumeT(76);                 // '||'
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_BitwiseORExpression();
    }
  }

  function parse_BitwiseORExpression()
  {
    eventHandler.startNonterminal("BitwiseORExpression", e0);
    parse_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 74)                 // '|'
      {
        break;
      }
      consume(74);                  // '|'
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 74)                 // '|'
      {
        break;
      }
      consumeT(74);                 // '|'
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
        lookahead2W(23);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 409:                   // '+' Identifier
        case 413:                   // '-' Identifier
          lookahead3W(49);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 2585:                  // '+' '('
        case 9369:                  // '+' '{'
        case 2589:                  // '-' '('
        case 9373:                  // '-' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 537:                   // '+' Character
        case 665:                   // '+' String
        case 793:                   // '+' Integer
        case 921:                   // '+' Real
        case 1049:                  // '+' Imaginary
        case 541:                   // '-' Character
        case 669:                   // '-' String
        case 797:                   // '-' Integer
        case 925:                   // '-' Real
        case 1053:                  // '-' Imaginary
          lookahead3W(48);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
       && lk != 7                   // Real
       && lk != 8                   // Imaginary
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
       && lk != 65                  // 'i32'
       && lk != 66                  // 'i64'
       && lk != 67                  // 'if'
       && lk != 68                  // 'return'
       && lk != 69                  // 'switch'
       && lk != 70                  // 'test'
       && lk != 71                  // 'try'
       && lk != 72                  // 'while'
       && lk != 73                  // '{'
       && lk != 74                  // '|'
       && lk != 75                  // '|='
       && lk != 76                  // '||'
       && lk != 77                  // '}'
       && lk != 78                  // '~'
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
       && lk != 10009               // '+' '~'
       && lk != 10013               // '-' '~'
       && lk != 344473              // '+' Identifier ')'
       && lk != 344477              // '-' Identifier ')'
       && lk != 344601              // '+' Character ')'
       && lk != 344605              // '-' Character ')'
       && lk != 344729              // '+' String ')'
       && lk != 344733              // '-' String ')'
       && lk != 344857              // '+' Integer ')'
       && lk != 344861              // '-' Integer ')'
       && lk != 344985              // '+' Real ')'
       && lk != 344989              // '-' Real ')'
       && lk != 345113              // '+' Imaginary ')'
       && lk != 345117              // '-' Imaginary ')'
       && lk != 459161              // '+' Identifier ','
       && lk != 459165              // '-' Identifier ','
       && lk != 459289              // '+' Character ','
       && lk != 459293              // '-' Character ','
       && lk != 459417              // '+' String ','
       && lk != 459421              // '-' String ','
       && lk != 459545              // '+' Integer ','
       && lk != 459549              // '-' Integer ','
       && lk != 459673              // '+' Real ','
       && lk != 459677              // '-' Real ','
       && lk != 459801              // '+' Imaginary ','
       && lk != 459805              // '-' Imaginary ','
       && lk != 573849              // '+' Identifier ':'
       && lk != 573853              // '-' Identifier ':'
       && lk != 573977              // '+' Character ':'
       && lk != 573981              // '-' Character ':'
       && lk != 574105              // '+' String ':'
       && lk != 574109              // '-' String ':'
       && lk != 574233              // '+' Integer ':'
       && lk != 574237              // '-' Integer ':'
       && lk != 574361              // '+' Real ':'
       && lk != 574365              // '-' Real ':'
       && lk != 574489              // '+' Imaginary ':'
       && lk != 574493              // '-' Imaginary ':'
       && lk != 835993              // '+' Identifier ']'
       && lk != 835997              // '-' Identifier ']'
       && lk != 836121              // '+' Character ']'
       && lk != 836125              // '-' Character ']'
       && lk != 836249              // '+' String ']'
       && lk != 836253              // '-' String ']'
       && lk != 836377              // '+' Integer ']'
       && lk != 836381              // '-' Integer ']'
       && lk != 836505              // '+' Real ']'
       && lk != 836509              // '-' Real ']'
       && lk != 836633              // '+' Imaginary ']'
       && lk != 836637              // '-' Imaginary ']'
       && lk != 917913              // '+' Identifier 'catch'
       && lk != 917917              // '-' Identifier 'catch'
       && lk != 918041              // '+' Character 'catch'
       && lk != 918045              // '-' Character 'catch'
       && lk != 918169              // '+' String 'catch'
       && lk != 918173              // '-' String 'catch'
       && lk != 918297              // '+' Integer 'catch'
       && lk != 918301              // '-' Integer 'catch'
       && lk != 918425              // '+' Real 'catch'
       && lk != 918429              // '-' Real 'catch'
       && lk != 918553              // '+' Imaginary 'catch'
       && lk != 918557              // '-' Imaginary 'catch'
       && lk != 983449              // '+' Identifier 'else'
       && lk != 983453              // '-' Identifier 'else'
       && lk != 983577              // '+' Character 'else'
       && lk != 983581              // '-' Character 'else'
       && lk != 983705              // '+' String 'else'
       && lk != 983709              // '-' String 'else'
       && lk != 983833              // '+' Integer 'else'
       && lk != 983837              // '-' Integer 'else'
       && lk != 983961              // '+' Real 'else'
       && lk != 983965              // '-' Real 'else'
       && lk != 984089              // '+' Imaginary 'else'
       && lk != 984093)             // '-' Imaginary 'else'
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
            lookahead1W(23);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
       || lk == 7                   // Real
       || lk == 8                   // Imaginary
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
       || lk == 65                  // 'i32'
       || lk == 66                  // 'i64'
       || lk == 67                  // 'if'
       || lk == 68                  // 'return'
       || lk == 69                  // 'switch'
       || lk == 70                  // 'test'
       || lk == 71                  // 'try'
       || lk == 72                  // 'while'
       || lk == 73                  // '{'
       || lk == 74                  // '|'
       || lk == 75                  // '|='
       || lk == 76                  // '||'
       || lk == 77                  // '}'
       || lk == 78)                 // '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
        lookahead2W(23);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 409:                   // '+' Identifier
        case 413:                   // '-' Identifier
          lookahead3W(49);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 2585:                  // '+' '('
        case 9369:                  // '+' '{'
        case 2589:                  // '-' '('
        case 9373:                  // '-' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        case 537:                   // '+' Character
        case 665:                   // '+' String
        case 793:                   // '+' Integer
        case 921:                   // '+' Real
        case 1049:                  // '+' Imaginary
        case 541:                   // '-' Character
        case 669:                   // '-' String
        case 797:                   // '-' Integer
        case 925:                   // '-' Real
        case 1053:                  // '-' Imaginary
          lookahead3W(48);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
       && lk != 7                   // Real
       && lk != 8                   // Imaginary
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
       && lk != 65                  // 'i32'
       && lk != 66                  // 'i64'
       && lk != 67                  // 'if'
       && lk != 68                  // 'return'
       && lk != 69                  // 'switch'
       && lk != 70                  // 'test'
       && lk != 71                  // 'try'
       && lk != 72                  // 'while'
       && lk != 73                  // '{'
       && lk != 74                  // '|'
       && lk != 75                  // '|='
       && lk != 76                  // '||'
       && lk != 77                  // '}'
       && lk != 78                  // '~'
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
       && lk != 10009               // '+' '~'
       && lk != 10013               // '-' '~'
       && lk != 344473              // '+' Identifier ')'
       && lk != 344477              // '-' Identifier ')'
       && lk != 344601              // '+' Character ')'
       && lk != 344605              // '-' Character ')'
       && lk != 344729              // '+' String ')'
       && lk != 344733              // '-' String ')'
       && lk != 344857              // '+' Integer ')'
       && lk != 344861              // '-' Integer ')'
       && lk != 344985              // '+' Real ')'
       && lk != 344989              // '-' Real ')'
       && lk != 345113              // '+' Imaginary ')'
       && lk != 345117              // '-' Imaginary ')'
       && lk != 459161              // '+' Identifier ','
       && lk != 459165              // '-' Identifier ','
       && lk != 459289              // '+' Character ','
       && lk != 459293              // '-' Character ','
       && lk != 459417              // '+' String ','
       && lk != 459421              // '-' String ','
       && lk != 459545              // '+' Integer ','
       && lk != 459549              // '-' Integer ','
       && lk != 459673              // '+' Real ','
       && lk != 459677              // '-' Real ','
       && lk != 459801              // '+' Imaginary ','
       && lk != 459805              // '-' Imaginary ','
       && lk != 573849              // '+' Identifier ':'
       && lk != 573853              // '-' Identifier ':'
       && lk != 573977              // '+' Character ':'
       && lk != 573981              // '-' Character ':'
       && lk != 574105              // '+' String ':'
       && lk != 574109              // '-' String ':'
       && lk != 574233              // '+' Integer ':'
       && lk != 574237              // '-' Integer ':'
       && lk != 574361              // '+' Real ':'
       && lk != 574365              // '-' Real ':'
       && lk != 574489              // '+' Imaginary ':'
       && lk != 574493              // '-' Imaginary ':'
       && lk != 835993              // '+' Identifier ']'
       && lk != 835997              // '-' Identifier ']'
       && lk != 836121              // '+' Character ']'
       && lk != 836125              // '-' Character ']'
       && lk != 836249              // '+' String ']'
       && lk != 836253              // '-' String ']'
       && lk != 836377              // '+' Integer ']'
       && lk != 836381              // '-' Integer ']'
       && lk != 836505              // '+' Real ']'
       && lk != 836509              // '-' Real ']'
       && lk != 836633              // '+' Imaginary ']'
       && lk != 836637              // '-' Imaginary ']'
       && lk != 917913              // '+' Identifier 'catch'
       && lk != 917917              // '-' Identifier 'catch'
       && lk != 918041              // '+' Character 'catch'
       && lk != 918045              // '-' Character 'catch'
       && lk != 918169              // '+' String 'catch'
       && lk != 918173              // '-' String 'catch'
       && lk != 918297              // '+' Integer 'catch'
       && lk != 918301              // '-' Integer 'catch'
       && lk != 918425              // '+' Real 'catch'
       && lk != 918429              // '-' Real 'catch'
       && lk != 918553              // '+' Imaginary 'catch'
       && lk != 918557              // '-' Imaginary 'catch'
       && lk != 983449              // '+' Identifier 'else'
       && lk != 983453              // '-' Identifier 'else'
       && lk != 983577              // '+' Character 'else'
       && lk != 983581              // '-' Character 'else'
       && lk != 983705              // '+' String 'else'
       && lk != 983709              // '-' String 'else'
       && lk != 983833              // '+' Integer 'else'
       && lk != 983837              // '-' Integer 'else'
       && lk != 983961              // '+' Real 'else'
       && lk != 983965              // '-' Real 'else'
       && lk != 984089              // '+' Imaginary 'else'
       && lk != 984093)             // '-' Imaginary 'else'
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
            lookahead1W(23);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
       || lk == 7                   // Real
       || lk == 8                   // Imaginary
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
       || lk == 65                  // 'i32'
       || lk == 66                  // 'i64'
       || lk == 67                  // 'if'
       || lk == 68                  // 'return'
       || lk == 69                  // 'switch'
       || lk == 70                  // 'test'
       || lk == 71                  // 'try'
       || lk == 72                  // 'while'
       || lk == 73                  // '{'
       || lk == 74                  // '|'
       || lk == 75                  // '|='
       || lk == 76                  // '||'
       || lk == 77                  // '}'
       || lk == 78)                 // '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_MultiplicativeExpression();
    }
  }

  function parse_MultiplicativeExpression()
  {
    eventHandler.startNonterminal("MultiplicativeExpression", e0);
    parse_UnaryExpression();
    for (;;)
    {
      lookahead1W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      lookahead1W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_UnaryExpression();
    }
  }

  function parse_UnaryExpression()
  {
    eventHandler.startNonterminal("UnaryExpression", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(49);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 7:                         // Real
      lookahead2W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 1031:                    // Real Imaginary
      case 3335:                    // Real '++'
      case 3847:                    // Real '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(40);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 916:                     // '(' Real
        lookahead3W(34);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9364:                    // '(' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 1044:                    // '(' Imaginary
        lookahead3W(33);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(5);             // WhiteSpace^token | ')'
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8724:                    // '(' 'return'
      case 9108:                    // '(' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8340:                    // '(' 'i32'
      case 8468:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10004:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8596:                    // '(' 'if'
      case 8852:                    // '(' 'switch'
      case 8980:                    // '(' 'test'
      case 9236:                    // '(' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(27);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(44);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 946:                     // '[' Real
        lookahead3W(39);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      case 9394:                    // '[' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 1074:                    // '[' Imaginary
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8754:                    // '[' 'return'
      case 9138:                    // '[' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8370:                    // '[' 'i32'
      case 8498:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10034:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8626:                    // '[' 'if'
      case 8882:                    // '[' 'switch'
      case 9010:                    // '[' 'test'
      case 9266:                    // '[' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 73:                        // '{'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 457:                     // '{' Identifier
        lookahead3W(43);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 713:                     // '{' String
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 969:                     // '{' Real
        lookahead3W(36);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6473:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9417:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 585:                     // '{' Character
      case 841:                     // '{' Integer
      case 1097:                    // '{' Imaginary
        lookahead3W(35);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1225:                    // '{' Comment
      case 4809:                    // '{' ';'
      case 6985:                    // '{' 'break'
      case 7369:                    // '{' 'continue'
        lookahead3W(19);            // WhiteSpace^token | ',' | '}'
        break;
      case 2633:                    // '{' '('
      case 7625:                    // '{' 'do'
      case 8777:                    // '{' 'return'
      case 9161:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7881:                    // '{' 'f32'
      case 8009:                    // '{' 'f64'
      case 8393:                    // '{' 'i32'
      case 8521:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1609:                    // '{' '!'
      case 3273:                    // '{' '+'
      case 3401:                    // '{' '++'
      case 3785:                    // '{' '-'
      case 3913:                    // '{' '--'
      case 10057:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8137:                    // '{' 'for'
      case 8265:                    // '{' 'foreach'
      case 8649:                    // '{' 'if'
      case 8905:                    // '{' 'switch'
      case 9033:                    // '{' 'test'
      case 9289:                    // '{' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 8:                         // Imaginary
      lookahead2W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 3332:                    // Character '++'
      case 3844:                    // Character '--'
      case 3333:                    // String '++'
      case 3845:                    // String '--'
      case 3334:                    // Integer '++'
      case 3846:                    // Integer '--'
      case 3336:                    // Imaginary '++'
      case 3848:                    // Imaginary '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
     && lk != 78                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Character END
     && lk != 133                   // String END
     && lk != 134                   // Integer END
     && lk != 135                   // Real END
     && lk != 136                   // Imaginary END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Character Identifier
     && lk != 389                   // String Identifier
     && lk != 390                   // Integer Identifier
     && lk != 391                   // Real Identifier
     && lk != 392                   // Imaginary Identifier
     && lk != 515                   // Identifier Character
     && lk != 516                   // Character Character
     && lk != 517                   // String Character
     && lk != 518                   // Integer Character
     && lk != 519                   // Real Character
     && lk != 520                   // Imaginary Character
     && lk != 643                   // Identifier String
     && lk != 644                   // Character String
     && lk != 645                   // String String
     && lk != 646                   // Integer String
     && lk != 647                   // Real String
     && lk != 648                   // Imaginary String
     && lk != 771                   // Identifier Integer
     && lk != 772                   // Character Integer
     && lk != 773                   // String Integer
     && lk != 774                   // Integer Integer
     && lk != 775                   // Real Integer
     && lk != 776                   // Imaginary Integer
     && lk != 899                   // Identifier Real
     && lk != 900                   // Character Real
     && lk != 901                   // String Real
     && lk != 902                   // Integer Real
     && lk != 903                   // Real Real
     && lk != 904                   // Imaginary Real
     && lk != 1027                  // Identifier Imaginary
     && lk != 1028                  // Character Imaginary
     && lk != 1029                  // String Imaginary
     && lk != 1030                  // Integer Imaginary
     && lk != 1032                  // Imaginary Imaginary
     && lk != 1155                  // Identifier Comment
     && lk != 1156                  // Character Comment
     && lk != 1157                  // String Comment
     && lk != 1158                  // Integer Comment
     && lk != 1159                  // Real Comment
     && lk != 1160                  // Imaginary Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1540                  // Character '!'
     && lk != 1541                  // String '!'
     && lk != 1542                  // Integer '!'
     && lk != 1543                  // Real '!'
     && lk != 1544                  // Imaginary '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1668                  // Character '!='
     && lk != 1669                  // String '!='
     && lk != 1670                  // Integer '!='
     && lk != 1671                  // Real '!='
     && lk != 1672                  // Imaginary '!='
     && lk != 1923                  // Identifier '%'
     && lk != 1924                  // Character '%'
     && lk != 1925                  // String '%'
     && lk != 1926                  // Integer '%'
     && lk != 1927                  // Real '%'
     && lk != 1928                  // Imaginary '%'
     && lk != 2051                  // Identifier '%='
     && lk != 2052                  // Character '%='
     && lk != 2053                  // String '%='
     && lk != 2054                  // Integer '%='
     && lk != 2055                  // Real '%='
     && lk != 2056                  // Imaginary '%='
     && lk != 2179                  // Identifier '&'
     && lk != 2180                  // Character '&'
     && lk != 2181                  // String '&'
     && lk != 2182                  // Integer '&'
     && lk != 2183                  // Real '&'
     && lk != 2184                  // Imaginary '&'
     && lk != 2307                  // Identifier '&&'
     && lk != 2308                  // Character '&&'
     && lk != 2309                  // String '&&'
     && lk != 2310                  // Integer '&&'
     && lk != 2311                  // Real '&&'
     && lk != 2312                  // Imaginary '&&'
     && lk != 2435                  // Identifier '&='
     && lk != 2436                  // Character '&='
     && lk != 2437                  // String '&='
     && lk != 2438                  // Integer '&='
     && lk != 2439                  // Real '&='
     && lk != 2440                  // Imaginary '&='
     && lk != 2564                  // Character '('
     && lk != 2565                  // String '('
     && lk != 2566                  // Integer '('
     && lk != 2567                  // Real '('
     && lk != 2568                  // Imaginary '('
     && lk != 2691                  // Identifier ')'
     && lk != 2692                  // Character ')'
     && lk != 2693                  // String ')'
     && lk != 2694                  // Integer ')'
     && lk != 2695                  // Real ')'
     && lk != 2696                  // Imaginary ')'
     && lk != 2819                  // Identifier '*'
     && lk != 2820                  // Character '*'
     && lk != 2821                  // String '*'
     && lk != 2822                  // Integer '*'
     && lk != 2823                  // Real '*'
     && lk != 2824                  // Imaginary '*'
     && lk != 2947                  // Identifier '**'
     && lk != 2948                  // Character '**'
     && lk != 2949                  // String '**'
     && lk != 2950                  // Integer '**'
     && lk != 2951                  // Real '**'
     && lk != 2952                  // Imaginary '**'
     && lk != 3075                  // Identifier '*='
     && lk != 3076                  // Character '*='
     && lk != 3077                  // String '*='
     && lk != 3078                  // Integer '*='
     && lk != 3079                  // Real '*='
     && lk != 3080                  // Imaginary '*='
     && lk != 3203                  // Identifier '+'
     && lk != 3204                  // Character '+'
     && lk != 3205                  // String '+'
     && lk != 3206                  // Integer '+'
     && lk != 3207                  // Real '+'
     && lk != 3208                  // Imaginary '+'
     && lk != 3459                  // Identifier '+='
     && lk != 3460                  // Character '+='
     && lk != 3461                  // String '+='
     && lk != 3462                  // Integer '+='
     && lk != 3463                  // Real '+='
     && lk != 3464                  // Imaginary '+='
     && lk != 3587                  // Identifier ','
     && lk != 3588                  // Character ','
     && lk != 3589                  // String ','
     && lk != 3590                  // Integer ','
     && lk != 3591                  // Real ','
     && lk != 3592                  // Imaginary ','
     && lk != 3715                  // Identifier '-'
     && lk != 3716                  // Character '-'
     && lk != 3717                  // String '-'
     && lk != 3718                  // Integer '-'
     && lk != 3719                  // Real '-'
     && lk != 3720                  // Imaginary '-'
     && lk != 3971                  // Identifier '-='
     && lk != 3972                  // Character '-='
     && lk != 3973                  // String '-='
     && lk != 3974                  // Integer '-='
     && lk != 3975                  // Real '-='
     && lk != 3976                  // Imaginary '-='
     && lk != 4227                  // Identifier '/'
     && lk != 4228                  // Character '/'
     && lk != 4229                  // String '/'
     && lk != 4230                  // Integer '/'
     && lk != 4231                  // Real '/'
     && lk != 4232                  // Imaginary '/'
     && lk != 4355                  // Identifier '/='
     && lk != 4356                  // Character '/='
     && lk != 4357                  // String '/='
     && lk != 4358                  // Integer '/='
     && lk != 4359                  // Real '/='
     && lk != 4360                  // Imaginary '/='
     && lk != 4483                  // Identifier ':'
     && lk != 4484                  // Character ':'
     && lk != 4485                  // String ':'
     && lk != 4486                  // Integer ':'
     && lk != 4487                  // Real ':'
     && lk != 4488                  // Imaginary ':'
     && lk != 4611                  // Identifier ':='
     && lk != 4612                  // Character ':='
     && lk != 4613                  // String ':='
     && lk != 4614                  // Integer ':='
     && lk != 4615                  // Real ':='
     && lk != 4616                  // Imaginary ':='
     && lk != 4739                  // Identifier ';'
     && lk != 4740                  // Character ';'
     && lk != 4741                  // String ';'
     && lk != 4742                  // Integer ';'
     && lk != 4743                  // Real ';'
     && lk != 4744                  // Imaginary ';'
     && lk != 4867                  // Identifier '<'
     && lk != 4868                  // Character '<'
     && lk != 4869                  // String '<'
     && lk != 4870                  // Integer '<'
     && lk != 4871                  // Real '<'
     && lk != 4872                  // Imaginary '<'
     && lk != 4995                  // Identifier '<<'
     && lk != 4996                  // Character '<<'
     && lk != 4997                  // String '<<'
     && lk != 4998                  // Integer '<<'
     && lk != 4999                  // Real '<<'
     && lk != 5000                  // Imaginary '<<'
     && lk != 5123                  // Identifier '<<='
     && lk != 5124                  // Character '<<='
     && lk != 5125                  // String '<<='
     && lk != 5126                  // Integer '<<='
     && lk != 5127                  // Real '<<='
     && lk != 5128                  // Imaginary '<<='
     && lk != 5251                  // Identifier '<='
     && lk != 5252                  // Character '<='
     && lk != 5253                  // String '<='
     && lk != 5254                  // Integer '<='
     && lk != 5255                  // Real '<='
     && lk != 5256                  // Imaginary '<='
     && lk != 5379                  // Identifier '='
     && lk != 5380                  // Character '='
     && lk != 5381                  // String '='
     && lk != 5382                  // Integer '='
     && lk != 5383                  // Real '='
     && lk != 5384                  // Imaginary '='
     && lk != 5507                  // Identifier '=='
     && lk != 5508                  // Character '=='
     && lk != 5509                  // String '=='
     && lk != 5510                  // Integer '=='
     && lk != 5511                  // Real '=='
     && lk != 5512                  // Imaginary '=='
     && lk != 5635                  // Identifier '>'
     && lk != 5636                  // Character '>'
     && lk != 5637                  // String '>'
     && lk != 5638                  // Integer '>'
     && lk != 5639                  // Real '>'
     && lk != 5640                  // Imaginary '>'
     && lk != 5763                  // Identifier '>='
     && lk != 5764                  // Character '>='
     && lk != 5765                  // String '>='
     && lk != 5766                  // Integer '>='
     && lk != 5767                  // Real '>='
     && lk != 5768                  // Imaginary '>='
     && lk != 5891                  // Identifier '>>'
     && lk != 5892                  // Character '>>'
     && lk != 5893                  // String '>>'
     && lk != 5894                  // Integer '>>'
     && lk != 5895                  // Real '>>'
     && lk != 5896                  // Imaginary '>>'
     && lk != 6019                  // Identifier '>>='
     && lk != 6020                  // Character '>>='
     && lk != 6021                  // String '>>='
     && lk != 6022                  // Integer '>>='
     && lk != 6023                  // Real '>>='
     && lk != 6024                  // Imaginary '>>='
     && lk != 6147                  // Identifier '?'
     && lk != 6148                  // Character '?'
     && lk != 6149                  // String '?'
     && lk != 6150                  // Integer '?'
     && lk != 6151                  // Real '?'
     && lk != 6152                  // Imaginary '?'
     && lk != 6275                  // Identifier '?='
     && lk != 6276                  // Character '?='
     && lk != 6277                  // String '?='
     && lk != 6278                  // Integer '?='
     && lk != 6279                  // Real '?='
     && lk != 6280                  // Imaginary '?='
     && lk != 6404                  // Character '['
     && lk != 6405                  // String '['
     && lk != 6406                  // Integer '['
     && lk != 6407                  // Real '['
     && lk != 6408                  // Imaginary '['
     && lk != 6531                  // Identifier ']'
     && lk != 6532                  // Character ']'
     && lk != 6533                  // String ']'
     && lk != 6534                  // Integer ']'
     && lk != 6535                  // Real ']'
     && lk != 6536                  // Imaginary ']'
     && lk != 6659                  // Identifier '^'
     && lk != 6660                  // Character '^'
     && lk != 6661                  // String '^'
     && lk != 6662                  // Integer '^'
     && lk != 6663                  // Real '^'
     && lk != 6664                  // Imaginary '^'
     && lk != 6787                  // Identifier '^='
     && lk != 6788                  // Character '^='
     && lk != 6789                  // String '^='
     && lk != 6790                  // Integer '^='
     && lk != 6791                  // Real '^='
     && lk != 6792                  // Imaginary '^='
     && lk != 6915                  // Identifier 'break'
     && lk != 6916                  // Character 'break'
     && lk != 6917                  // String 'break'
     && lk != 6918                  // Integer 'break'
     && lk != 6919                  // Real 'break'
     && lk != 6920                  // Imaginary 'break'
     && lk != 7043                  // Identifier 'case'
     && lk != 7044                  // Character 'case'
     && lk != 7045                  // String 'case'
     && lk != 7046                  // Integer 'case'
     && lk != 7047                  // Real 'case'
     && lk != 7048                  // Imaginary 'case'
     && lk != 7171                  // Identifier 'catch'
     && lk != 7172                  // Character 'catch'
     && lk != 7173                  // String 'catch'
     && lk != 7174                  // Integer 'catch'
     && lk != 7175                  // Real 'catch'
     && lk != 7176                  // Imaginary 'catch'
     && lk != 7299                  // Identifier 'continue'
     && lk != 7300                  // Character 'continue'
     && lk != 7301                  // String 'continue'
     && lk != 7302                  // Integer 'continue'
     && lk != 7303                  // Real 'continue'
     && lk != 7304                  // Imaginary 'continue'
     && lk != 7427                  // Identifier 'default'
     && lk != 7428                  // Character 'default'
     && lk != 7429                  // String 'default'
     && lk != 7430                  // Integer 'default'
     && lk != 7431                  // Real 'default'
     && lk != 7432                  // Imaginary 'default'
     && lk != 7555                  // Identifier 'do'
     && lk != 7556                  // Character 'do'
     && lk != 7557                  // String 'do'
     && lk != 7558                  // Integer 'do'
     && lk != 7559                  // Real 'do'
     && lk != 7560                  // Imaginary 'do'
     && lk != 7683                  // Identifier 'else'
     && lk != 7684                  // Character 'else'
     && lk != 7685                  // String 'else'
     && lk != 7686                  // Integer 'else'
     && lk != 7687                  // Real 'else'
     && lk != 7688                  // Imaginary 'else'
     && lk != 7811                  // Identifier 'f32'
     && lk != 7812                  // Character 'f32'
     && lk != 7813                  // String 'f32'
     && lk != 7814                  // Integer 'f32'
     && lk != 7815                  // Real 'f32'
     && lk != 7816                  // Imaginary 'f32'
     && lk != 7939                  // Identifier 'f64'
     && lk != 7940                  // Character 'f64'
     && lk != 7941                  // String 'f64'
     && lk != 7942                  // Integer 'f64'
     && lk != 7943                  // Real 'f64'
     && lk != 7944                  // Imaginary 'f64'
     && lk != 8067                  // Identifier 'for'
     && lk != 8068                  // Character 'for'
     && lk != 8069                  // String 'for'
     && lk != 8070                  // Integer 'for'
     && lk != 8071                  // Real 'for'
     && lk != 8072                  // Imaginary 'for'
     && lk != 8195                  // Identifier 'foreach'
     && lk != 8196                  // Character 'foreach'
     && lk != 8197                  // String 'foreach'
     && lk != 8198                  // Integer 'foreach'
     && lk != 8199                  // Real 'foreach'
     && lk != 8200                  // Imaginary 'foreach'
     && lk != 8323                  // Identifier 'i32'
     && lk != 8324                  // Character 'i32'
     && lk != 8325                  // String 'i32'
     && lk != 8326                  // Integer 'i32'
     && lk != 8327                  // Real 'i32'
     && lk != 8328                  // Imaginary 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8452                  // Character 'i64'
     && lk != 8453                  // String 'i64'
     && lk != 8454                  // Integer 'i64'
     && lk != 8455                  // Real 'i64'
     && lk != 8456                  // Imaginary 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8580                  // Character 'if'
     && lk != 8581                  // String 'if'
     && lk != 8582                  // Integer 'if'
     && lk != 8583                  // Real 'if'
     && lk != 8584                  // Imaginary 'if'
     && lk != 8707                  // Identifier 'return'
     && lk != 8708                  // Character 'return'
     && lk != 8709                  // String 'return'
     && lk != 8710                  // Integer 'return'
     && lk != 8711                  // Real 'return'
     && lk != 8712                  // Imaginary 'return'
     && lk != 8835                  // Identifier 'switch'
     && lk != 8836                  // Character 'switch'
     && lk != 8837                  // String 'switch'
     && lk != 8838                  // Integer 'switch'
     && lk != 8839                  // Real 'switch'
     && lk != 8840                  // Imaginary 'switch'
     && lk != 8963                  // Identifier 'test'
     && lk != 8964                  // Character 'test'
     && lk != 8965                  // String 'test'
     && lk != 8966                  // Integer 'test'
     && lk != 8967                  // Real 'test'
     && lk != 8968                  // Imaginary 'test'
     && lk != 9091                  // Identifier 'try'
     && lk != 9092                  // Character 'try'
     && lk != 9093                  // String 'try'
     && lk != 9094                  // Integer 'try'
     && lk != 9095                  // Real 'try'
     && lk != 9096                  // Imaginary 'try'
     && lk != 9219                  // Identifier 'while'
     && lk != 9220                  // Character 'while'
     && lk != 9221                  // String 'while'
     && lk != 9222                  // Integer 'while'
     && lk != 9223                  // Real 'while'
     && lk != 9224                  // Imaginary 'while'
     && lk != 9347                  // Identifier '{'
     && lk != 9348                  // Character '{'
     && lk != 9349                  // String '{'
     && lk != 9350                  // Integer '{'
     && lk != 9351                  // Real '{'
     && lk != 9352                  // Imaginary '{'
     && lk != 9475                  // Identifier '|'
     && lk != 9476                  // Character '|'
     && lk != 9477                  // String '|'
     && lk != 9478                  // Integer '|'
     && lk != 9479                  // Real '|'
     && lk != 9480                  // Imaginary '|'
     && lk != 9603                  // Identifier '|='
     && lk != 9604                  // Character '|='
     && lk != 9605                  // String '|='
     && lk != 9606                  // Integer '|='
     && lk != 9607                  // Real '|='
     && lk != 9608                  // Imaginary '|='
     && lk != 9731                  // Identifier '||'
     && lk != 9732                  // Character '||'
     && lk != 9733                  // String '||'
     && lk != 9734                  // Integer '||'
     && lk != 9735                  // Real '||'
     && lk != 9736                  // Imaginary '||'
     && lk != 9859                  // Identifier '}'
     && lk != 9860                  // Character '}'
     && lk != 9861                  // String '}'
     && lk != 9862                  // Integer '}'
     && lk != 9863                  // Real '}'
     && lk != 9864                  // Imaginary '}'
     && lk != 9987                  // Identifier '~'
     && lk != 9988                  // Character '~'
     && lk != 9989                  // String '~'
     && lk != 9990                  // Integer '~'
     && lk != 9991                  // Real '~'
     && lk != 9992                  // Imaginary '~'
     && lk != 17415                 // Real Imaginary END
     && lk != 19715                 // Identifier '++' END
     && lk != 19716                 // Character '++' END
     && lk != 19717                 // String '++' END
     && lk != 19718                 // Integer '++' END
     && lk != 19719                 // Real '++' END
     && lk != 19720                 // Imaginary '++' END
     && lk != 20227                 // Identifier '--' END
     && lk != 20228                 // Character '--' END
     && lk != 20229                 // String '--' END
     && lk != 20230                 // Integer '--' END
     && lk != 20231                 // Real '--' END
     && lk != 20232                 // Imaginary '--' END
     && lk != 22962                 // '[' ']' END
     && lk != 50183                 // Real Imaginary Identifier
     && lk != 55730                 // '[' ']' Identifier
     && lk != 66567                 // Real Imaginary Character
     && lk != 72114                 // '[' ']' Character
     && lk != 82951                 // Real Imaginary String
     && lk != 88498                 // '[' ']' String
     && lk != 99335                 // Real Imaginary Integer
     && lk != 104882                // '[' ']' Integer
     && lk != 115719                // Real Imaginary Real
     && lk != 121266                // '[' ']' Real
     && lk != 132103                // Real Imaginary Imaginary
     && lk != 137650                // '[' ']' Imaginary
     && lk != 148487                // Real Imaginary Comment
     && lk != 150787                // Identifier '++' Comment
     && lk != 150788                // Character '++' Comment
     && lk != 150789                // String '++' Comment
     && lk != 150790                // Integer '++' Comment
     && lk != 150791                // Real '++' Comment
     && lk != 150792                // Imaginary '++' Comment
     && lk != 151299                // Identifier '--' Comment
     && lk != 151300                // Character '--' Comment
     && lk != 151301                // String '--' Comment
     && lk != 151302                // Integer '--' Comment
     && lk != 151303                // Real '--' Comment
     && lk != 151304                // Imaginary '--' Comment
     && lk != 154034                // '[' ']' Comment
     && lk != 197639                // Real Imaginary '!'
     && lk != 199939                // Identifier '++' '!'
     && lk != 199940                // Character '++' '!'
     && lk != 199941                // String '++' '!'
     && lk != 199942                // Integer '++' '!'
     && lk != 199943                // Real '++' '!'
     && lk != 199944                // Imaginary '++' '!'
     && lk != 200451                // Identifier '--' '!'
     && lk != 200452                // Character '--' '!'
     && lk != 200453                // String '--' '!'
     && lk != 200454                // Integer '--' '!'
     && lk != 200455                // Real '--' '!'
     && lk != 200456                // Imaginary '--' '!'
     && lk != 203186                // '[' ']' '!'
     && lk != 214023                // Real Imaginary '!='
     && lk != 216323                // Identifier '++' '!='
     && lk != 216324                // Character '++' '!='
     && lk != 216325                // String '++' '!='
     && lk != 216326                // Integer '++' '!='
     && lk != 216327                // Real '++' '!='
     && lk != 216328                // Imaginary '++' '!='
     && lk != 216835                // Identifier '--' '!='
     && lk != 216836                // Character '--' '!='
     && lk != 216837                // String '--' '!='
     && lk != 216838                // Integer '--' '!='
     && lk != 216839                // Real '--' '!='
     && lk != 216840                // Imaginary '--' '!='
     && lk != 219570                // '[' ']' '!='
     && lk != 246791                // Real Imaginary '%'
     && lk != 249091                // Identifier '++' '%'
     && lk != 249092                // Character '++' '%'
     && lk != 249093                // String '++' '%'
     && lk != 249094                // Integer '++' '%'
     && lk != 249095                // Real '++' '%'
     && lk != 249096                // Imaginary '++' '%'
     && lk != 249603                // Identifier '--' '%'
     && lk != 249604                // Character '--' '%'
     && lk != 249605                // String '--' '%'
     && lk != 249606                // Integer '--' '%'
     && lk != 249607                // Real '--' '%'
     && lk != 249608                // Imaginary '--' '%'
     && lk != 252338                // '[' ']' '%'
     && lk != 263175                // Real Imaginary '%='
     && lk != 265475                // Identifier '++' '%='
     && lk != 265476                // Character '++' '%='
     && lk != 265477                // String '++' '%='
     && lk != 265478                // Integer '++' '%='
     && lk != 265479                // Real '++' '%='
     && lk != 265480                // Imaginary '++' '%='
     && lk != 265987                // Identifier '--' '%='
     && lk != 265988                // Character '--' '%='
     && lk != 265989                // String '--' '%='
     && lk != 265990                // Integer '--' '%='
     && lk != 265991                // Real '--' '%='
     && lk != 265992                // Imaginary '--' '%='
     && lk != 268722                // '[' ']' '%='
     && lk != 279559                // Real Imaginary '&'
     && lk != 281859                // Identifier '++' '&'
     && lk != 281860                // Character '++' '&'
     && lk != 281861                // String '++' '&'
     && lk != 281862                // Integer '++' '&'
     && lk != 281863                // Real '++' '&'
     && lk != 281864                // Imaginary '++' '&'
     && lk != 282371                // Identifier '--' '&'
     && lk != 282372                // Character '--' '&'
     && lk != 282373                // String '--' '&'
     && lk != 282374                // Integer '--' '&'
     && lk != 282375                // Real '--' '&'
     && lk != 282376                // Imaginary '--' '&'
     && lk != 285106                // '[' ']' '&'
     && lk != 295943                // Real Imaginary '&&'
     && lk != 298243                // Identifier '++' '&&'
     && lk != 298244                // Character '++' '&&'
     && lk != 298245                // String '++' '&&'
     && lk != 298246                // Integer '++' '&&'
     && lk != 298247                // Real '++' '&&'
     && lk != 298248                // Imaginary '++' '&&'
     && lk != 298755                // Identifier '--' '&&'
     && lk != 298756                // Character '--' '&&'
     && lk != 298757                // String '--' '&&'
     && lk != 298758                // Integer '--' '&&'
     && lk != 298759                // Real '--' '&&'
     && lk != 298760                // Imaginary '--' '&&'
     && lk != 301490                // '[' ']' '&&'
     && lk != 312327                // Real Imaginary '&='
     && lk != 314627                // Identifier '++' '&='
     && lk != 314628                // Character '++' '&='
     && lk != 314629                // String '++' '&='
     && lk != 314630                // Integer '++' '&='
     && lk != 314631                // Real '++' '&='
     && lk != 314632                // Imaginary '++' '&='
     && lk != 315139                // Identifier '--' '&='
     && lk != 315140                // Character '--' '&='
     && lk != 315141                // String '--' '&='
     && lk != 315142                // Integer '--' '&='
     && lk != 315143                // Real '--' '&='
     && lk != 315144                // Imaginary '--' '&='
     && lk != 317874                // '[' ']' '&='
     && lk != 328711                // Real Imaginary '('
     && lk != 334258                // '[' ']' '('
     && lk != 345095                // Real Imaginary ')'
     && lk != 347395                // Identifier '++' ')'
     && lk != 347396                // Character '++' ')'
     && lk != 347397                // String '++' ')'
     && lk != 347398                // Integer '++' ')'
     && lk != 347399                // Real '++' ')'
     && lk != 347400                // Imaginary '++' ')'
     && lk != 347907                // Identifier '--' ')'
     && lk != 347908                // Character '--' ')'
     && lk != 347909                // String '--' ')'
     && lk != 347910                // Integer '--' ')'
     && lk != 347911                // Real '--' ')'
     && lk != 347912                // Imaginary '--' ')'
     && lk != 350642                // '[' ']' ')'
     && lk != 361479                // Real Imaginary '*'
     && lk != 363779                // Identifier '++' '*'
     && lk != 363780                // Character '++' '*'
     && lk != 363781                // String '++' '*'
     && lk != 363782                // Integer '++' '*'
     && lk != 363783                // Real '++' '*'
     && lk != 363784                // Imaginary '++' '*'
     && lk != 364291                // Identifier '--' '*'
     && lk != 364292                // Character '--' '*'
     && lk != 364293                // String '--' '*'
     && lk != 364294                // Integer '--' '*'
     && lk != 364295                // Real '--' '*'
     && lk != 364296                // Imaginary '--' '*'
     && lk != 367026                // '[' ']' '*'
     && lk != 377863                // Real Imaginary '**'
     && lk != 380163                // Identifier '++' '**'
     && lk != 380164                // Character '++' '**'
     && lk != 380165                // String '++' '**'
     && lk != 380166                // Integer '++' '**'
     && lk != 380167                // Real '++' '**'
     && lk != 380168                // Imaginary '++' '**'
     && lk != 380675                // Identifier '--' '**'
     && lk != 380676                // Character '--' '**'
     && lk != 380677                // String '--' '**'
     && lk != 380678                // Integer '--' '**'
     && lk != 380679                // Real '--' '**'
     && lk != 380680                // Imaginary '--' '**'
     && lk != 383410                // '[' ']' '**'
     && lk != 394247                // Real Imaginary '*='
     && lk != 396547                // Identifier '++' '*='
     && lk != 396548                // Character '++' '*='
     && lk != 396549                // String '++' '*='
     && lk != 396550                // Integer '++' '*='
     && lk != 396551                // Real '++' '*='
     && lk != 396552                // Imaginary '++' '*='
     && lk != 397059                // Identifier '--' '*='
     && lk != 397060                // Character '--' '*='
     && lk != 397061                // String '--' '*='
     && lk != 397062                // Integer '--' '*='
     && lk != 397063                // Real '--' '*='
     && lk != 397064                // Imaginary '--' '*='
     && lk != 399794                // '[' ']' '*='
     && lk != 410631                // Real Imaginary '+'
     && lk != 412931                // Identifier '++' '+'
     && lk != 412932                // Character '++' '+'
     && lk != 412933                // String '++' '+'
     && lk != 412934                // Integer '++' '+'
     && lk != 412935                // Real '++' '+'
     && lk != 412936                // Imaginary '++' '+'
     && lk != 413443                // Identifier '--' '+'
     && lk != 413444                // Character '--' '+'
     && lk != 413445                // String '--' '+'
     && lk != 413446                // Integer '--' '+'
     && lk != 413447                // Real '--' '+'
     && lk != 413448                // Imaginary '--' '+'
     && lk != 416178                // '[' ']' '+'
     && lk != 429315                // Identifier '++' '++'
     && lk != 429316                // Character '++' '++'
     && lk != 429317                // String '++' '++'
     && lk != 429318                // Integer '++' '++'
     && lk != 429319                // Real '++' '++'
     && lk != 429320                // Imaginary '++' '++'
     && lk != 429827                // Identifier '--' '++'
     && lk != 429828                // Character '--' '++'
     && lk != 429829                // String '--' '++'
     && lk != 429830                // Integer '--' '++'
     && lk != 429831                // Real '--' '++'
     && lk != 429832                // Imaginary '--' '++'
     && lk != 443399                // Real Imaginary '+='
     && lk != 445699                // Identifier '++' '+='
     && lk != 445700                // Character '++' '+='
     && lk != 445701                // String '++' '+='
     && lk != 445702                // Integer '++' '+='
     && lk != 445703                // Real '++' '+='
     && lk != 445704                // Imaginary '++' '+='
     && lk != 446211                // Identifier '--' '+='
     && lk != 446212                // Character '--' '+='
     && lk != 446213                // String '--' '+='
     && lk != 446214                // Integer '--' '+='
     && lk != 446215                // Real '--' '+='
     && lk != 446216                // Imaginary '--' '+='
     && lk != 448946                // '[' ']' '+='
     && lk != 459783                // Real Imaginary ','
     && lk != 462083                // Identifier '++' ','
     && lk != 462084                // Character '++' ','
     && lk != 462085                // String '++' ','
     && lk != 462086                // Integer '++' ','
     && lk != 462087                // Real '++' ','
     && lk != 462088                // Imaginary '++' ','
     && lk != 462595                // Identifier '--' ','
     && lk != 462596                // Character '--' ','
     && lk != 462597                // String '--' ','
     && lk != 462598                // Integer '--' ','
     && lk != 462599                // Real '--' ','
     && lk != 462600                // Imaginary '--' ','
     && lk != 465330                // '[' ']' ','
     && lk != 476167                // Real Imaginary '-'
     && lk != 478467                // Identifier '++' '-'
     && lk != 478468                // Character '++' '-'
     && lk != 478469                // String '++' '-'
     && lk != 478470                // Integer '++' '-'
     && lk != 478471                // Real '++' '-'
     && lk != 478472                // Imaginary '++' '-'
     && lk != 478979                // Identifier '--' '-'
     && lk != 478980                // Character '--' '-'
     && lk != 478981                // String '--' '-'
     && lk != 478982                // Integer '--' '-'
     && lk != 478983                // Real '--' '-'
     && lk != 478984                // Imaginary '--' '-'
     && lk != 481714                // '[' ']' '-'
     && lk != 494851                // Identifier '++' '--'
     && lk != 494852                // Character '++' '--'
     && lk != 494853                // String '++' '--'
     && lk != 494854                // Integer '++' '--'
     && lk != 494855                // Real '++' '--'
     && lk != 494856                // Imaginary '++' '--'
     && lk != 495363                // Identifier '--' '--'
     && lk != 495364                // Character '--' '--'
     && lk != 495365                // String '--' '--'
     && lk != 495366                // Integer '--' '--'
     && lk != 495367                // Real '--' '--'
     && lk != 495368                // Imaginary '--' '--'
     && lk != 508935                // Real Imaginary '-='
     && lk != 511235                // Identifier '++' '-='
     && lk != 511236                // Character '++' '-='
     && lk != 511237                // String '++' '-='
     && lk != 511238                // Integer '++' '-='
     && lk != 511239                // Real '++' '-='
     && lk != 511240                // Imaginary '++' '-='
     && lk != 511747                // Identifier '--' '-='
     && lk != 511748                // Character '--' '-='
     && lk != 511749                // String '--' '-='
     && lk != 511750                // Integer '--' '-='
     && lk != 511751                // Real '--' '-='
     && lk != 511752                // Imaginary '--' '-='
     && lk != 514482                // '[' ']' '-='
     && lk != 541703                // Real Imaginary '/'
     && lk != 544003                // Identifier '++' '/'
     && lk != 544004                // Character '++' '/'
     && lk != 544005                // String '++' '/'
     && lk != 544006                // Integer '++' '/'
     && lk != 544007                // Real '++' '/'
     && lk != 544008                // Imaginary '++' '/'
     && lk != 544515                // Identifier '--' '/'
     && lk != 544516                // Character '--' '/'
     && lk != 544517                // String '--' '/'
     && lk != 544518                // Integer '--' '/'
     && lk != 544519                // Real '--' '/'
     && lk != 544520                // Imaginary '--' '/'
     && lk != 547250                // '[' ']' '/'
     && lk != 558087                // Real Imaginary '/='
     && lk != 560387                // Identifier '++' '/='
     && lk != 560388                // Character '++' '/='
     && lk != 560389                // String '++' '/='
     && lk != 560390                // Integer '++' '/='
     && lk != 560391                // Real '++' '/='
     && lk != 560392                // Imaginary '++' '/='
     && lk != 560899                // Identifier '--' '/='
     && lk != 560900                // Character '--' '/='
     && lk != 560901                // String '--' '/='
     && lk != 560902                // Integer '--' '/='
     && lk != 560903                // Real '--' '/='
     && lk != 560904                // Imaginary '--' '/='
     && lk != 563634                // '[' ']' '/='
     && lk != 574471                // Real Imaginary ':'
     && lk != 576771                // Identifier '++' ':'
     && lk != 576772                // Character '++' ':'
     && lk != 576773                // String '++' ':'
     && lk != 576774                // Integer '++' ':'
     && lk != 576775                // Real '++' ':'
     && lk != 576776                // Imaginary '++' ':'
     && lk != 577283                // Identifier '--' ':'
     && lk != 577284                // Character '--' ':'
     && lk != 577285                // String '--' ':'
     && lk != 577286                // Integer '--' ':'
     && lk != 577287                // Real '--' ':'
     && lk != 577288                // Imaginary '--' ':'
     && lk != 580018                // '[' ']' ':'
     && lk != 590855                // Real Imaginary ':='
     && lk != 593155                // Identifier '++' ':='
     && lk != 593156                // Character '++' ':='
     && lk != 593157                // String '++' ':='
     && lk != 593158                // Integer '++' ':='
     && lk != 593159                // Real '++' ':='
     && lk != 593160                // Imaginary '++' ':='
     && lk != 593667                // Identifier '--' ':='
     && lk != 593668                // Character '--' ':='
     && lk != 593669                // String '--' ':='
     && lk != 593670                // Integer '--' ':='
     && lk != 593671                // Real '--' ':='
     && lk != 593672                // Imaginary '--' ':='
     && lk != 596402                // '[' ']' ':='
     && lk != 607239                // Real Imaginary ';'
     && lk != 609539                // Identifier '++' ';'
     && lk != 609540                // Character '++' ';'
     && lk != 609541                // String '++' ';'
     && lk != 609542                // Integer '++' ';'
     && lk != 609543                // Real '++' ';'
     && lk != 609544                // Imaginary '++' ';'
     && lk != 610051                // Identifier '--' ';'
     && lk != 610052                // Character '--' ';'
     && lk != 610053                // String '--' ';'
     && lk != 610054                // Integer '--' ';'
     && lk != 610055                // Real '--' ';'
     && lk != 610056                // Imaginary '--' ';'
     && lk != 612786                // '[' ']' ';'
     && lk != 623623                // Real Imaginary '<'
     && lk != 625923                // Identifier '++' '<'
     && lk != 625924                // Character '++' '<'
     && lk != 625925                // String '++' '<'
     && lk != 625926                // Integer '++' '<'
     && lk != 625927                // Real '++' '<'
     && lk != 625928                // Imaginary '++' '<'
     && lk != 626435                // Identifier '--' '<'
     && lk != 626436                // Character '--' '<'
     && lk != 626437                // String '--' '<'
     && lk != 626438                // Integer '--' '<'
     && lk != 626439                // Real '--' '<'
     && lk != 626440                // Imaginary '--' '<'
     && lk != 629170                // '[' ']' '<'
     && lk != 640007                // Real Imaginary '<<'
     && lk != 642307                // Identifier '++' '<<'
     && lk != 642308                // Character '++' '<<'
     && lk != 642309                // String '++' '<<'
     && lk != 642310                // Integer '++' '<<'
     && lk != 642311                // Real '++' '<<'
     && lk != 642312                // Imaginary '++' '<<'
     && lk != 642819                // Identifier '--' '<<'
     && lk != 642820                // Character '--' '<<'
     && lk != 642821                // String '--' '<<'
     && lk != 642822                // Integer '--' '<<'
     && lk != 642823                // Real '--' '<<'
     && lk != 642824                // Imaginary '--' '<<'
     && lk != 645554                // '[' ']' '<<'
     && lk != 656391                // Real Imaginary '<<='
     && lk != 658691                // Identifier '++' '<<='
     && lk != 658692                // Character '++' '<<='
     && lk != 658693                // String '++' '<<='
     && lk != 658694                // Integer '++' '<<='
     && lk != 658695                // Real '++' '<<='
     && lk != 658696                // Imaginary '++' '<<='
     && lk != 659203                // Identifier '--' '<<='
     && lk != 659204                // Character '--' '<<='
     && lk != 659205                // String '--' '<<='
     && lk != 659206                // Integer '--' '<<='
     && lk != 659207                // Real '--' '<<='
     && lk != 659208                // Imaginary '--' '<<='
     && lk != 661938                // '[' ']' '<<='
     && lk != 672775                // Real Imaginary '<='
     && lk != 675075                // Identifier '++' '<='
     && lk != 675076                // Character '++' '<='
     && lk != 675077                // String '++' '<='
     && lk != 675078                // Integer '++' '<='
     && lk != 675079                // Real '++' '<='
     && lk != 675080                // Imaginary '++' '<='
     && lk != 675587                // Identifier '--' '<='
     && lk != 675588                // Character '--' '<='
     && lk != 675589                // String '--' '<='
     && lk != 675590                // Integer '--' '<='
     && lk != 675591                // Real '--' '<='
     && lk != 675592                // Imaginary '--' '<='
     && lk != 678322                // '[' ']' '<='
     && lk != 689159                // Real Imaginary '='
     && lk != 691459                // Identifier '++' '='
     && lk != 691460                // Character '++' '='
     && lk != 691461                // String '++' '='
     && lk != 691462                // Integer '++' '='
     && lk != 691463                // Real '++' '='
     && lk != 691464                // Imaginary '++' '='
     && lk != 691971                // Identifier '--' '='
     && lk != 691972                // Character '--' '='
     && lk != 691973                // String '--' '='
     && lk != 691974                // Integer '--' '='
     && lk != 691975                // Real '--' '='
     && lk != 691976                // Imaginary '--' '='
     && lk != 694706                // '[' ']' '='
     && lk != 705543                // Real Imaginary '=='
     && lk != 707843                // Identifier '++' '=='
     && lk != 707844                // Character '++' '=='
     && lk != 707845                // String '++' '=='
     && lk != 707846                // Integer '++' '=='
     && lk != 707847                // Real '++' '=='
     && lk != 707848                // Imaginary '++' '=='
     && lk != 708355                // Identifier '--' '=='
     && lk != 708356                // Character '--' '=='
     && lk != 708357                // String '--' '=='
     && lk != 708358                // Integer '--' '=='
     && lk != 708359                // Real '--' '=='
     && lk != 708360                // Imaginary '--' '=='
     && lk != 711090                // '[' ']' '=='
     && lk != 721927                // Real Imaginary '>'
     && lk != 724227                // Identifier '++' '>'
     && lk != 724228                // Character '++' '>'
     && lk != 724229                // String '++' '>'
     && lk != 724230                // Integer '++' '>'
     && lk != 724231                // Real '++' '>'
     && lk != 724232                // Imaginary '++' '>'
     && lk != 724739                // Identifier '--' '>'
     && lk != 724740                // Character '--' '>'
     && lk != 724741                // String '--' '>'
     && lk != 724742                // Integer '--' '>'
     && lk != 724743                // Real '--' '>'
     && lk != 724744                // Imaginary '--' '>'
     && lk != 727474                // '[' ']' '>'
     && lk != 738311                // Real Imaginary '>='
     && lk != 740611                // Identifier '++' '>='
     && lk != 740612                // Character '++' '>='
     && lk != 740613                // String '++' '>='
     && lk != 740614                // Integer '++' '>='
     && lk != 740615                // Real '++' '>='
     && lk != 740616                // Imaginary '++' '>='
     && lk != 741123                // Identifier '--' '>='
     && lk != 741124                // Character '--' '>='
     && lk != 741125                // String '--' '>='
     && lk != 741126                // Integer '--' '>='
     && lk != 741127                // Real '--' '>='
     && lk != 741128                // Imaginary '--' '>='
     && lk != 743858                // '[' ']' '>='
     && lk != 754695                // Real Imaginary '>>'
     && lk != 756995                // Identifier '++' '>>'
     && lk != 756996                // Character '++' '>>'
     && lk != 756997                // String '++' '>>'
     && lk != 756998                // Integer '++' '>>'
     && lk != 756999                // Real '++' '>>'
     && lk != 757000                // Imaginary '++' '>>'
     && lk != 757507                // Identifier '--' '>>'
     && lk != 757508                // Character '--' '>>'
     && lk != 757509                // String '--' '>>'
     && lk != 757510                // Integer '--' '>>'
     && lk != 757511                // Real '--' '>>'
     && lk != 757512                // Imaginary '--' '>>'
     && lk != 760242                // '[' ']' '>>'
     && lk != 771079                // Real Imaginary '>>='
     && lk != 773379                // Identifier '++' '>>='
     && lk != 773380                // Character '++' '>>='
     && lk != 773381                // String '++' '>>='
     && lk != 773382                // Integer '++' '>>='
     && lk != 773383                // Real '++' '>>='
     && lk != 773384                // Imaginary '++' '>>='
     && lk != 773891                // Identifier '--' '>>='
     && lk != 773892                // Character '--' '>>='
     && lk != 773893                // String '--' '>>='
     && lk != 773894                // Integer '--' '>>='
     && lk != 773895                // Real '--' '>>='
     && lk != 773896                // Imaginary '--' '>>='
     && lk != 776626                // '[' ']' '>>='
     && lk != 787463                // Real Imaginary '?'
     && lk != 789763                // Identifier '++' '?'
     && lk != 789764                // Character '++' '?'
     && lk != 789765                // String '++' '?'
     && lk != 789766                // Integer '++' '?'
     && lk != 789767                // Real '++' '?'
     && lk != 789768                // Imaginary '++' '?'
     && lk != 790275                // Identifier '--' '?'
     && lk != 790276                // Character '--' '?'
     && lk != 790277                // String '--' '?'
     && lk != 790278                // Integer '--' '?'
     && lk != 790279                // Real '--' '?'
     && lk != 790280                // Imaginary '--' '?'
     && lk != 793010                // '[' ']' '?'
     && lk != 803847                // Real Imaginary '?='
     && lk != 806147                // Identifier '++' '?='
     && lk != 806148                // Character '++' '?='
     && lk != 806149                // String '++' '?='
     && lk != 806150                // Integer '++' '?='
     && lk != 806151                // Real '++' '?='
     && lk != 806152                // Imaginary '++' '?='
     && lk != 806659                // Identifier '--' '?='
     && lk != 806660                // Character '--' '?='
     && lk != 806661                // String '--' '?='
     && lk != 806662                // Integer '--' '?='
     && lk != 806663                // Real '--' '?='
     && lk != 806664                // Imaginary '--' '?='
     && lk != 809394                // '[' ']' '?='
     && lk != 820231                // Real Imaginary '['
     && lk != 825778                // '[' ']' '['
     && lk != 836615                // Real Imaginary ']'
     && lk != 838915                // Identifier '++' ']'
     && lk != 838916                // Character '++' ']'
     && lk != 838917                // String '++' ']'
     && lk != 838918                // Integer '++' ']'
     && lk != 838919                // Real '++' ']'
     && lk != 838920                // Imaginary '++' ']'
     && lk != 839427                // Identifier '--' ']'
     && lk != 839428                // Character '--' ']'
     && lk != 839429                // String '--' ']'
     && lk != 839430                // Integer '--' ']'
     && lk != 839431                // Real '--' ']'
     && lk != 839432                // Imaginary '--' ']'
     && lk != 842162                // '[' ']' ']'
     && lk != 852999                // Real Imaginary '^'
     && lk != 855299                // Identifier '++' '^'
     && lk != 855300                // Character '++' '^'
     && lk != 855301                // String '++' '^'
     && lk != 855302                // Integer '++' '^'
     && lk != 855303                // Real '++' '^'
     && lk != 855304                // Imaginary '++' '^'
     && lk != 855811                // Identifier '--' '^'
     && lk != 855812                // Character '--' '^'
     && lk != 855813                // String '--' '^'
     && lk != 855814                // Integer '--' '^'
     && lk != 855815                // Real '--' '^'
     && lk != 855816                // Imaginary '--' '^'
     && lk != 858546                // '[' ']' '^'
     && lk != 869383                // Real Imaginary '^='
     && lk != 871683                // Identifier '++' '^='
     && lk != 871684                // Character '++' '^='
     && lk != 871685                // String '++' '^='
     && lk != 871686                // Integer '++' '^='
     && lk != 871687                // Real '++' '^='
     && lk != 871688                // Imaginary '++' '^='
     && lk != 872195                // Identifier '--' '^='
     && lk != 872196                // Character '--' '^='
     && lk != 872197                // String '--' '^='
     && lk != 872198                // Integer '--' '^='
     && lk != 872199                // Real '--' '^='
     && lk != 872200                // Imaginary '--' '^='
     && lk != 874930                // '[' ']' '^='
     && lk != 885767                // Real Imaginary 'break'
     && lk != 888067                // Identifier '++' 'break'
     && lk != 888068                // Character '++' 'break'
     && lk != 888069                // String '++' 'break'
     && lk != 888070                // Integer '++' 'break'
     && lk != 888071                // Real '++' 'break'
     && lk != 888072                // Imaginary '++' 'break'
     && lk != 888579                // Identifier '--' 'break'
     && lk != 888580                // Character '--' 'break'
     && lk != 888581                // String '--' 'break'
     && lk != 888582                // Integer '--' 'break'
     && lk != 888583                // Real '--' 'break'
     && lk != 888584                // Imaginary '--' 'break'
     && lk != 891314                // '[' ']' 'break'
     && lk != 902151                // Real Imaginary 'case'
     && lk != 904451                // Identifier '++' 'case'
     && lk != 904452                // Character '++' 'case'
     && lk != 904453                // String '++' 'case'
     && lk != 904454                // Integer '++' 'case'
     && lk != 904455                // Real '++' 'case'
     && lk != 904456                // Imaginary '++' 'case'
     && lk != 904963                // Identifier '--' 'case'
     && lk != 904964                // Character '--' 'case'
     && lk != 904965                // String '--' 'case'
     && lk != 904966                // Integer '--' 'case'
     && lk != 904967                // Real '--' 'case'
     && lk != 904968                // Imaginary '--' 'case'
     && lk != 907698                // '[' ']' 'case'
     && lk != 918535                // Real Imaginary 'catch'
     && lk != 920835                // Identifier '++' 'catch'
     && lk != 920836                // Character '++' 'catch'
     && lk != 920837                // String '++' 'catch'
     && lk != 920838                // Integer '++' 'catch'
     && lk != 920839                // Real '++' 'catch'
     && lk != 920840                // Imaginary '++' 'catch'
     && lk != 921347                // Identifier '--' 'catch'
     && lk != 921348                // Character '--' 'catch'
     && lk != 921349                // String '--' 'catch'
     && lk != 921350                // Integer '--' 'catch'
     && lk != 921351                // Real '--' 'catch'
     && lk != 921352                // Imaginary '--' 'catch'
     && lk != 924082                // '[' ']' 'catch'
     && lk != 934919                // Real Imaginary 'continue'
     && lk != 937219                // Identifier '++' 'continue'
     && lk != 937220                // Character '++' 'continue'
     && lk != 937221                // String '++' 'continue'
     && lk != 937222                // Integer '++' 'continue'
     && lk != 937223                // Real '++' 'continue'
     && lk != 937224                // Imaginary '++' 'continue'
     && lk != 937731                // Identifier '--' 'continue'
     && lk != 937732                // Character '--' 'continue'
     && lk != 937733                // String '--' 'continue'
     && lk != 937734                // Integer '--' 'continue'
     && lk != 937735                // Real '--' 'continue'
     && lk != 937736                // Imaginary '--' 'continue'
     && lk != 940466                // '[' ']' 'continue'
     && lk != 951303                // Real Imaginary 'default'
     && lk != 953603                // Identifier '++' 'default'
     && lk != 953604                // Character '++' 'default'
     && lk != 953605                // String '++' 'default'
     && lk != 953606                // Integer '++' 'default'
     && lk != 953607                // Real '++' 'default'
     && lk != 953608                // Imaginary '++' 'default'
     && lk != 954115                // Identifier '--' 'default'
     && lk != 954116                // Character '--' 'default'
     && lk != 954117                // String '--' 'default'
     && lk != 954118                // Integer '--' 'default'
     && lk != 954119                // Real '--' 'default'
     && lk != 954120                // Imaginary '--' 'default'
     && lk != 956850                // '[' ']' 'default'
     && lk != 967687                // Real Imaginary 'do'
     && lk != 969987                // Identifier '++' 'do'
     && lk != 969988                // Character '++' 'do'
     && lk != 969989                // String '++' 'do'
     && lk != 969990                // Integer '++' 'do'
     && lk != 969991                // Real '++' 'do'
     && lk != 969992                // Imaginary '++' 'do'
     && lk != 970499                // Identifier '--' 'do'
     && lk != 970500                // Character '--' 'do'
     && lk != 970501                // String '--' 'do'
     && lk != 970502                // Integer '--' 'do'
     && lk != 970503                // Real '--' 'do'
     && lk != 970504                // Imaginary '--' 'do'
     && lk != 973234                // '[' ']' 'do'
     && lk != 984071                // Real Imaginary 'else'
     && lk != 986371                // Identifier '++' 'else'
     && lk != 986372                // Character '++' 'else'
     && lk != 986373                // String '++' 'else'
     && lk != 986374                // Integer '++' 'else'
     && lk != 986375                // Real '++' 'else'
     && lk != 986376                // Imaginary '++' 'else'
     && lk != 986883                // Identifier '--' 'else'
     && lk != 986884                // Character '--' 'else'
     && lk != 986885                // String '--' 'else'
     && lk != 986886                // Integer '--' 'else'
     && lk != 986887                // Real '--' 'else'
     && lk != 986888                // Imaginary '--' 'else'
     && lk != 989618                // '[' ']' 'else'
     && lk != 1000455               // Real Imaginary 'f32'
     && lk != 1002755               // Identifier '++' 'f32'
     && lk != 1002756               // Character '++' 'f32'
     && lk != 1002757               // String '++' 'f32'
     && lk != 1002758               // Integer '++' 'f32'
     && lk != 1002759               // Real '++' 'f32'
     && lk != 1002760               // Imaginary '++' 'f32'
     && lk != 1003267               // Identifier '--' 'f32'
     && lk != 1003268               // Character '--' 'f32'
     && lk != 1003269               // String '--' 'f32'
     && lk != 1003270               // Integer '--' 'f32'
     && lk != 1003271               // Real '--' 'f32'
     && lk != 1003272               // Imaginary '--' 'f32'
     && lk != 1006002               // '[' ']' 'f32'
     && lk != 1016839               // Real Imaginary 'f64'
     && lk != 1019139               // Identifier '++' 'f64'
     && lk != 1019140               // Character '++' 'f64'
     && lk != 1019141               // String '++' 'f64'
     && lk != 1019142               // Integer '++' 'f64'
     && lk != 1019143               // Real '++' 'f64'
     && lk != 1019144               // Imaginary '++' 'f64'
     && lk != 1019651               // Identifier '--' 'f64'
     && lk != 1019652               // Character '--' 'f64'
     && lk != 1019653               // String '--' 'f64'
     && lk != 1019654               // Integer '--' 'f64'
     && lk != 1019655               // Real '--' 'f64'
     && lk != 1019656               // Imaginary '--' 'f64'
     && lk != 1022386               // '[' ']' 'f64'
     && lk != 1033223               // Real Imaginary 'for'
     && lk != 1035523               // Identifier '++' 'for'
     && lk != 1035524               // Character '++' 'for'
     && lk != 1035525               // String '++' 'for'
     && lk != 1035526               // Integer '++' 'for'
     && lk != 1035527               // Real '++' 'for'
     && lk != 1035528               // Imaginary '++' 'for'
     && lk != 1036035               // Identifier '--' 'for'
     && lk != 1036036               // Character '--' 'for'
     && lk != 1036037               // String '--' 'for'
     && lk != 1036038               // Integer '--' 'for'
     && lk != 1036039               // Real '--' 'for'
     && lk != 1036040               // Imaginary '--' 'for'
     && lk != 1038770               // '[' ']' 'for'
     && lk != 1049607               // Real Imaginary 'foreach'
     && lk != 1051907               // Identifier '++' 'foreach'
     && lk != 1051908               // Character '++' 'foreach'
     && lk != 1051909               // String '++' 'foreach'
     && lk != 1051910               // Integer '++' 'foreach'
     && lk != 1051911               // Real '++' 'foreach'
     && lk != 1051912               // Imaginary '++' 'foreach'
     && lk != 1052419               // Identifier '--' 'foreach'
     && lk != 1052420               // Character '--' 'foreach'
     && lk != 1052421               // String '--' 'foreach'
     && lk != 1052422               // Integer '--' 'foreach'
     && lk != 1052423               // Real '--' 'foreach'
     && lk != 1052424               // Imaginary '--' 'foreach'
     && lk != 1055154               // '[' ']' 'foreach'
     && lk != 1065991               // Real Imaginary 'i32'
     && lk != 1068291               // Identifier '++' 'i32'
     && lk != 1068292               // Character '++' 'i32'
     && lk != 1068293               // String '++' 'i32'
     && lk != 1068294               // Integer '++' 'i32'
     && lk != 1068295               // Real '++' 'i32'
     && lk != 1068296               // Imaginary '++' 'i32'
     && lk != 1068803               // Identifier '--' 'i32'
     && lk != 1068804               // Character '--' 'i32'
     && lk != 1068805               // String '--' 'i32'
     && lk != 1068806               // Integer '--' 'i32'
     && lk != 1068807               // Real '--' 'i32'
     && lk != 1068808               // Imaginary '--' 'i32'
     && lk != 1071538               // '[' ']' 'i32'
     && lk != 1082375               // Real Imaginary 'i64'
     && lk != 1084675               // Identifier '++' 'i64'
     && lk != 1084676               // Character '++' 'i64'
     && lk != 1084677               // String '++' 'i64'
     && lk != 1084678               // Integer '++' 'i64'
     && lk != 1084679               // Real '++' 'i64'
     && lk != 1084680               // Imaginary '++' 'i64'
     && lk != 1085187               // Identifier '--' 'i64'
     && lk != 1085188               // Character '--' 'i64'
     && lk != 1085189               // String '--' 'i64'
     && lk != 1085190               // Integer '--' 'i64'
     && lk != 1085191               // Real '--' 'i64'
     && lk != 1085192               // Imaginary '--' 'i64'
     && lk != 1087922               // '[' ']' 'i64'
     && lk != 1098759               // Real Imaginary 'if'
     && lk != 1101059               // Identifier '++' 'if'
     && lk != 1101060               // Character '++' 'if'
     && lk != 1101061               // String '++' 'if'
     && lk != 1101062               // Integer '++' 'if'
     && lk != 1101063               // Real '++' 'if'
     && lk != 1101064               // Imaginary '++' 'if'
     && lk != 1101571               // Identifier '--' 'if'
     && lk != 1101572               // Character '--' 'if'
     && lk != 1101573               // String '--' 'if'
     && lk != 1101574               // Integer '--' 'if'
     && lk != 1101575               // Real '--' 'if'
     && lk != 1101576               // Imaginary '--' 'if'
     && lk != 1104306               // '[' ']' 'if'
     && lk != 1115143               // Real Imaginary 'return'
     && lk != 1117443               // Identifier '++' 'return'
     && lk != 1117444               // Character '++' 'return'
     && lk != 1117445               // String '++' 'return'
     && lk != 1117446               // Integer '++' 'return'
     && lk != 1117447               // Real '++' 'return'
     && lk != 1117448               // Imaginary '++' 'return'
     && lk != 1117955               // Identifier '--' 'return'
     && lk != 1117956               // Character '--' 'return'
     && lk != 1117957               // String '--' 'return'
     && lk != 1117958               // Integer '--' 'return'
     && lk != 1117959               // Real '--' 'return'
     && lk != 1117960               // Imaginary '--' 'return'
     && lk != 1120690               // '[' ']' 'return'
     && lk != 1131527               // Real Imaginary 'switch'
     && lk != 1133827               // Identifier '++' 'switch'
     && lk != 1133828               // Character '++' 'switch'
     && lk != 1133829               // String '++' 'switch'
     && lk != 1133830               // Integer '++' 'switch'
     && lk != 1133831               // Real '++' 'switch'
     && lk != 1133832               // Imaginary '++' 'switch'
     && lk != 1134339               // Identifier '--' 'switch'
     && lk != 1134340               // Character '--' 'switch'
     && lk != 1134341               // String '--' 'switch'
     && lk != 1134342               // Integer '--' 'switch'
     && lk != 1134343               // Real '--' 'switch'
     && lk != 1134344               // Imaginary '--' 'switch'
     && lk != 1137074               // '[' ']' 'switch'
     && lk != 1147911               // Real Imaginary 'test'
     && lk != 1150211               // Identifier '++' 'test'
     && lk != 1150212               // Character '++' 'test'
     && lk != 1150213               // String '++' 'test'
     && lk != 1150214               // Integer '++' 'test'
     && lk != 1150215               // Real '++' 'test'
     && lk != 1150216               // Imaginary '++' 'test'
     && lk != 1150723               // Identifier '--' 'test'
     && lk != 1150724               // Character '--' 'test'
     && lk != 1150725               // String '--' 'test'
     && lk != 1150726               // Integer '--' 'test'
     && lk != 1150727               // Real '--' 'test'
     && lk != 1150728               // Imaginary '--' 'test'
     && lk != 1153458               // '[' ']' 'test'
     && lk != 1164295               // Real Imaginary 'try'
     && lk != 1166595               // Identifier '++' 'try'
     && lk != 1166596               // Character '++' 'try'
     && lk != 1166597               // String '++' 'try'
     && lk != 1166598               // Integer '++' 'try'
     && lk != 1166599               // Real '++' 'try'
     && lk != 1166600               // Imaginary '++' 'try'
     && lk != 1167107               // Identifier '--' 'try'
     && lk != 1167108               // Character '--' 'try'
     && lk != 1167109               // String '--' 'try'
     && lk != 1167110               // Integer '--' 'try'
     && lk != 1167111               // Real '--' 'try'
     && lk != 1167112               // Imaginary '--' 'try'
     && lk != 1169842               // '[' ']' 'try'
     && lk != 1180679               // Real Imaginary 'while'
     && lk != 1182979               // Identifier '++' 'while'
     && lk != 1182980               // Character '++' 'while'
     && lk != 1182981               // String '++' 'while'
     && lk != 1182982               // Integer '++' 'while'
     && lk != 1182983               // Real '++' 'while'
     && lk != 1182984               // Imaginary '++' 'while'
     && lk != 1183491               // Identifier '--' 'while'
     && lk != 1183492               // Character '--' 'while'
     && lk != 1183493               // String '--' 'while'
     && lk != 1183494               // Integer '--' 'while'
     && lk != 1183495               // Real '--' 'while'
     && lk != 1183496               // Imaginary '--' 'while'
     && lk != 1186226               // '[' ']' 'while'
     && lk != 1197063               // Real Imaginary '{'
     && lk != 1202610               // '[' ']' '{'
     && lk != 1213447               // Real Imaginary '|'
     && lk != 1215747               // Identifier '++' '|'
     && lk != 1215748               // Character '++' '|'
     && lk != 1215749               // String '++' '|'
     && lk != 1215750               // Integer '++' '|'
     && lk != 1215751               // Real '++' '|'
     && lk != 1215752               // Imaginary '++' '|'
     && lk != 1216259               // Identifier '--' '|'
     && lk != 1216260               // Character '--' '|'
     && lk != 1216261               // String '--' '|'
     && lk != 1216262               // Integer '--' '|'
     && lk != 1216263               // Real '--' '|'
     && lk != 1216264               // Imaginary '--' '|'
     && lk != 1218994               // '[' ']' '|'
     && lk != 1229831               // Real Imaginary '|='
     && lk != 1232131               // Identifier '++' '|='
     && lk != 1232132               // Character '++' '|='
     && lk != 1232133               // String '++' '|='
     && lk != 1232134               // Integer '++' '|='
     && lk != 1232135               // Real '++' '|='
     && lk != 1232136               // Imaginary '++' '|='
     && lk != 1232643               // Identifier '--' '|='
     && lk != 1232644               // Character '--' '|='
     && lk != 1232645               // String '--' '|='
     && lk != 1232646               // Integer '--' '|='
     && lk != 1232647               // Real '--' '|='
     && lk != 1232648               // Imaginary '--' '|='
     && lk != 1235378               // '[' ']' '|='
     && lk != 1246215               // Real Imaginary '||'
     && lk != 1248515               // Identifier '++' '||'
     && lk != 1248516               // Character '++' '||'
     && lk != 1248517               // String '++' '||'
     && lk != 1248518               // Integer '++' '||'
     && lk != 1248519               // Real '++' '||'
     && lk != 1248520               // Imaginary '++' '||'
     && lk != 1249027               // Identifier '--' '||'
     && lk != 1249028               // Character '--' '||'
     && lk != 1249029               // String '--' '||'
     && lk != 1249030               // Integer '--' '||'
     && lk != 1249031               // Real '--' '||'
     && lk != 1249032               // Imaginary '--' '||'
     && lk != 1251762               // '[' ']' '||'
     && lk != 1262599               // Real Imaginary '}'
     && lk != 1264899               // Identifier '++' '}'
     && lk != 1264900               // Character '++' '}'
     && lk != 1264901               // String '++' '}'
     && lk != 1264902               // Integer '++' '}'
     && lk != 1264903               // Real '++' '}'
     && lk != 1264904               // Imaginary '++' '}'
     && lk != 1265411               // Identifier '--' '}'
     && lk != 1265412               // Character '--' '}'
     && lk != 1265413               // String '--' '}'
     && lk != 1265414               // Integer '--' '}'
     && lk != 1265415               // Real '--' '}'
     && lk != 1265416               // Imaginary '--' '}'
     && lk != 1268146               // '[' ']' '}'
     && lk != 1278983               // Real Imaginary '~'
     && lk != 1281283               // Identifier '++' '~'
     && lk != 1281284               // Character '++' '~'
     && lk != 1281285               // String '++' '~'
     && lk != 1281286               // Integer '++' '~'
     && lk != 1281287               // Real '++' '~'
     && lk != 1281288               // Imaginary '++' '~'
     && lk != 1281795               // Identifier '--' '~'
     && lk != 1281796               // Character '--' '~'
     && lk != 1281797               // String '--' '~'
     && lk != 1281798               // Integer '--' '~'
     && lk != 1281799               // Real '--' '~'
     && lk != 1281800               // Imaginary '--' '~'
     && lk != 1284530)              // '[' ']' '~'
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
            lookahead1W(6);         // WhiteSpace^token | '++'
            consumeT(26);           // '++'
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
        memoize(3, e0, lk);
      }
    }
    switch (lk)
    {
    case -2:
    case 19715:                     // Identifier '++' END
    case 19716:                     // Character '++' END
    case 19717:                     // String '++' END
    case 19718:                     // Integer '++' END
    case 19719:                     // Real '++' END
    case 19720:                     // Imaginary '++' END
    case 150787:                    // Identifier '++' Comment
    case 150788:                    // Character '++' Comment
    case 150789:                    // String '++' Comment
    case 150790:                    // Integer '++' Comment
    case 150791:                    // Real '++' Comment
    case 150792:                    // Imaginary '++' Comment
    case 199939:                    // Identifier '++' '!'
    case 199940:                    // Character '++' '!'
    case 199941:                    // String '++' '!'
    case 199942:                    // Integer '++' '!'
    case 199943:                    // Real '++' '!'
    case 199944:                    // Imaginary '++' '!'
    case 216323:                    // Identifier '++' '!='
    case 216324:                    // Character '++' '!='
    case 216325:                    // String '++' '!='
    case 216326:                    // Integer '++' '!='
    case 216327:                    // Real '++' '!='
    case 216328:                    // Imaginary '++' '!='
    case 249091:                    // Identifier '++' '%'
    case 249092:                    // Character '++' '%'
    case 249093:                    // String '++' '%'
    case 249094:                    // Integer '++' '%'
    case 249095:                    // Real '++' '%'
    case 249096:                    // Imaginary '++' '%'
    case 265475:                    // Identifier '++' '%='
    case 265476:                    // Character '++' '%='
    case 265477:                    // String '++' '%='
    case 265478:                    // Integer '++' '%='
    case 265479:                    // Real '++' '%='
    case 265480:                    // Imaginary '++' '%='
    case 281859:                    // Identifier '++' '&'
    case 281860:                    // Character '++' '&'
    case 281861:                    // String '++' '&'
    case 281862:                    // Integer '++' '&'
    case 281863:                    // Real '++' '&'
    case 281864:                    // Imaginary '++' '&'
    case 298243:                    // Identifier '++' '&&'
    case 298244:                    // Character '++' '&&'
    case 298245:                    // String '++' '&&'
    case 298246:                    // Integer '++' '&&'
    case 298247:                    // Real '++' '&&'
    case 298248:                    // Imaginary '++' '&&'
    case 314627:                    // Identifier '++' '&='
    case 314628:                    // Character '++' '&='
    case 314629:                    // String '++' '&='
    case 314630:                    // Integer '++' '&='
    case 314631:                    // Real '++' '&='
    case 314632:                    // Imaginary '++' '&='
    case 347395:                    // Identifier '++' ')'
    case 347396:                    // Character '++' ')'
    case 347397:                    // String '++' ')'
    case 347398:                    // Integer '++' ')'
    case 347399:                    // Real '++' ')'
    case 347400:                    // Imaginary '++' ')'
    case 363779:                    // Identifier '++' '*'
    case 363780:                    // Character '++' '*'
    case 363781:                    // String '++' '*'
    case 363782:                    // Integer '++' '*'
    case 363783:                    // Real '++' '*'
    case 363784:                    // Imaginary '++' '*'
    case 380163:                    // Identifier '++' '**'
    case 380164:                    // Character '++' '**'
    case 380165:                    // String '++' '**'
    case 380166:                    // Integer '++' '**'
    case 380167:                    // Real '++' '**'
    case 380168:                    // Imaginary '++' '**'
    case 396547:                    // Identifier '++' '*='
    case 396548:                    // Character '++' '*='
    case 396549:                    // String '++' '*='
    case 396550:                    // Integer '++' '*='
    case 396551:                    // Real '++' '*='
    case 396552:                    // Imaginary '++' '*='
    case 412931:                    // Identifier '++' '+'
    case 412932:                    // Character '++' '+'
    case 412933:                    // String '++' '+'
    case 412934:                    // Integer '++' '+'
    case 412935:                    // Real '++' '+'
    case 412936:                    // Imaginary '++' '+'
    case 429315:                    // Identifier '++' '++'
    case 429316:                    // Character '++' '++'
    case 429317:                    // String '++' '++'
    case 429318:                    // Integer '++' '++'
    case 429319:                    // Real '++' '++'
    case 429320:                    // Imaginary '++' '++'
    case 445699:                    // Identifier '++' '+='
    case 445700:                    // Character '++' '+='
    case 445701:                    // String '++' '+='
    case 445702:                    // Integer '++' '+='
    case 445703:                    // Real '++' '+='
    case 445704:                    // Imaginary '++' '+='
    case 462083:                    // Identifier '++' ','
    case 462084:                    // Character '++' ','
    case 462085:                    // String '++' ','
    case 462086:                    // Integer '++' ','
    case 462087:                    // Real '++' ','
    case 462088:                    // Imaginary '++' ','
    case 478467:                    // Identifier '++' '-'
    case 478468:                    // Character '++' '-'
    case 478469:                    // String '++' '-'
    case 478470:                    // Integer '++' '-'
    case 478471:                    // Real '++' '-'
    case 478472:                    // Imaginary '++' '-'
    case 494851:                    // Identifier '++' '--'
    case 494852:                    // Character '++' '--'
    case 494853:                    // String '++' '--'
    case 494854:                    // Integer '++' '--'
    case 494855:                    // Real '++' '--'
    case 494856:                    // Imaginary '++' '--'
    case 511235:                    // Identifier '++' '-='
    case 511236:                    // Character '++' '-='
    case 511237:                    // String '++' '-='
    case 511238:                    // Integer '++' '-='
    case 511239:                    // Real '++' '-='
    case 511240:                    // Imaginary '++' '-='
    case 544003:                    // Identifier '++' '/'
    case 544004:                    // Character '++' '/'
    case 544005:                    // String '++' '/'
    case 544006:                    // Integer '++' '/'
    case 544007:                    // Real '++' '/'
    case 544008:                    // Imaginary '++' '/'
    case 560387:                    // Identifier '++' '/='
    case 560388:                    // Character '++' '/='
    case 560389:                    // String '++' '/='
    case 560390:                    // Integer '++' '/='
    case 560391:                    // Real '++' '/='
    case 560392:                    // Imaginary '++' '/='
    case 576771:                    // Identifier '++' ':'
    case 576772:                    // Character '++' ':'
    case 576773:                    // String '++' ':'
    case 576774:                    // Integer '++' ':'
    case 576775:                    // Real '++' ':'
    case 576776:                    // Imaginary '++' ':'
    case 593155:                    // Identifier '++' ':='
    case 593156:                    // Character '++' ':='
    case 593157:                    // String '++' ':='
    case 593158:                    // Integer '++' ':='
    case 593159:                    // Real '++' ':='
    case 593160:                    // Imaginary '++' ':='
    case 609539:                    // Identifier '++' ';'
    case 609540:                    // Character '++' ';'
    case 609541:                    // String '++' ';'
    case 609542:                    // Integer '++' ';'
    case 609543:                    // Real '++' ';'
    case 609544:                    // Imaginary '++' ';'
    case 625923:                    // Identifier '++' '<'
    case 625924:                    // Character '++' '<'
    case 625925:                    // String '++' '<'
    case 625926:                    // Integer '++' '<'
    case 625927:                    // Real '++' '<'
    case 625928:                    // Imaginary '++' '<'
    case 642307:                    // Identifier '++' '<<'
    case 642308:                    // Character '++' '<<'
    case 642309:                    // String '++' '<<'
    case 642310:                    // Integer '++' '<<'
    case 642311:                    // Real '++' '<<'
    case 642312:                    // Imaginary '++' '<<'
    case 658691:                    // Identifier '++' '<<='
    case 658692:                    // Character '++' '<<='
    case 658693:                    // String '++' '<<='
    case 658694:                    // Integer '++' '<<='
    case 658695:                    // Real '++' '<<='
    case 658696:                    // Imaginary '++' '<<='
    case 675075:                    // Identifier '++' '<='
    case 675076:                    // Character '++' '<='
    case 675077:                    // String '++' '<='
    case 675078:                    // Integer '++' '<='
    case 675079:                    // Real '++' '<='
    case 675080:                    // Imaginary '++' '<='
    case 691459:                    // Identifier '++' '='
    case 691460:                    // Character '++' '='
    case 691461:                    // String '++' '='
    case 691462:                    // Integer '++' '='
    case 691463:                    // Real '++' '='
    case 691464:                    // Imaginary '++' '='
    case 707843:                    // Identifier '++' '=='
    case 707844:                    // Character '++' '=='
    case 707845:                    // String '++' '=='
    case 707846:                    // Integer '++' '=='
    case 707847:                    // Real '++' '=='
    case 707848:                    // Imaginary '++' '=='
    case 724227:                    // Identifier '++' '>'
    case 724228:                    // Character '++' '>'
    case 724229:                    // String '++' '>'
    case 724230:                    // Integer '++' '>'
    case 724231:                    // Real '++' '>'
    case 724232:                    // Imaginary '++' '>'
    case 740611:                    // Identifier '++' '>='
    case 740612:                    // Character '++' '>='
    case 740613:                    // String '++' '>='
    case 740614:                    // Integer '++' '>='
    case 740615:                    // Real '++' '>='
    case 740616:                    // Imaginary '++' '>='
    case 756995:                    // Identifier '++' '>>'
    case 756996:                    // Character '++' '>>'
    case 756997:                    // String '++' '>>'
    case 756998:                    // Integer '++' '>>'
    case 756999:                    // Real '++' '>>'
    case 757000:                    // Imaginary '++' '>>'
    case 773379:                    // Identifier '++' '>>='
    case 773380:                    // Character '++' '>>='
    case 773381:                    // String '++' '>>='
    case 773382:                    // Integer '++' '>>='
    case 773383:                    // Real '++' '>>='
    case 773384:                    // Imaginary '++' '>>='
    case 789763:                    // Identifier '++' '?'
    case 789764:                    // Character '++' '?'
    case 789765:                    // String '++' '?'
    case 789766:                    // Integer '++' '?'
    case 789767:                    // Real '++' '?'
    case 789768:                    // Imaginary '++' '?'
    case 806147:                    // Identifier '++' '?='
    case 806148:                    // Character '++' '?='
    case 806149:                    // String '++' '?='
    case 806150:                    // Integer '++' '?='
    case 806151:                    // Real '++' '?='
    case 806152:                    // Imaginary '++' '?='
    case 838915:                    // Identifier '++' ']'
    case 838916:                    // Character '++' ']'
    case 838917:                    // String '++' ']'
    case 838918:                    // Integer '++' ']'
    case 838919:                    // Real '++' ']'
    case 838920:                    // Imaginary '++' ']'
    case 855299:                    // Identifier '++' '^'
    case 855300:                    // Character '++' '^'
    case 855301:                    // String '++' '^'
    case 855302:                    // Integer '++' '^'
    case 855303:                    // Real '++' '^'
    case 855304:                    // Imaginary '++' '^'
    case 871683:                    // Identifier '++' '^='
    case 871684:                    // Character '++' '^='
    case 871685:                    // String '++' '^='
    case 871686:                    // Integer '++' '^='
    case 871687:                    // Real '++' '^='
    case 871688:                    // Imaginary '++' '^='
    case 888067:                    // Identifier '++' 'break'
    case 888068:                    // Character '++' 'break'
    case 888069:                    // String '++' 'break'
    case 888070:                    // Integer '++' 'break'
    case 888071:                    // Real '++' 'break'
    case 888072:                    // Imaginary '++' 'break'
    case 904451:                    // Identifier '++' 'case'
    case 904452:                    // Character '++' 'case'
    case 904453:                    // String '++' 'case'
    case 904454:                    // Integer '++' 'case'
    case 904455:                    // Real '++' 'case'
    case 904456:                    // Imaginary '++' 'case'
    case 920835:                    // Identifier '++' 'catch'
    case 920836:                    // Character '++' 'catch'
    case 920837:                    // String '++' 'catch'
    case 920838:                    // Integer '++' 'catch'
    case 920839:                    // Real '++' 'catch'
    case 920840:                    // Imaginary '++' 'catch'
    case 937219:                    // Identifier '++' 'continue'
    case 937220:                    // Character '++' 'continue'
    case 937221:                    // String '++' 'continue'
    case 937222:                    // Integer '++' 'continue'
    case 937223:                    // Real '++' 'continue'
    case 937224:                    // Imaginary '++' 'continue'
    case 953603:                    // Identifier '++' 'default'
    case 953604:                    // Character '++' 'default'
    case 953605:                    // String '++' 'default'
    case 953606:                    // Integer '++' 'default'
    case 953607:                    // Real '++' 'default'
    case 953608:                    // Imaginary '++' 'default'
    case 969987:                    // Identifier '++' 'do'
    case 969988:                    // Character '++' 'do'
    case 969989:                    // String '++' 'do'
    case 969990:                    // Integer '++' 'do'
    case 969991:                    // Real '++' 'do'
    case 969992:                    // Imaginary '++' 'do'
    case 986371:                    // Identifier '++' 'else'
    case 986372:                    // Character '++' 'else'
    case 986373:                    // String '++' 'else'
    case 986374:                    // Integer '++' 'else'
    case 986375:                    // Real '++' 'else'
    case 986376:                    // Imaginary '++' 'else'
    case 1002755:                   // Identifier '++' 'f32'
    case 1002756:                   // Character '++' 'f32'
    case 1002757:                   // String '++' 'f32'
    case 1002758:                   // Integer '++' 'f32'
    case 1002759:                   // Real '++' 'f32'
    case 1002760:                   // Imaginary '++' 'f32'
    case 1019139:                   // Identifier '++' 'f64'
    case 1019140:                   // Character '++' 'f64'
    case 1019141:                   // String '++' 'f64'
    case 1019142:                   // Integer '++' 'f64'
    case 1019143:                   // Real '++' 'f64'
    case 1019144:                   // Imaginary '++' 'f64'
    case 1035523:                   // Identifier '++' 'for'
    case 1035524:                   // Character '++' 'for'
    case 1035525:                   // String '++' 'for'
    case 1035526:                   // Integer '++' 'for'
    case 1035527:                   // Real '++' 'for'
    case 1035528:                   // Imaginary '++' 'for'
    case 1051907:                   // Identifier '++' 'foreach'
    case 1051908:                   // Character '++' 'foreach'
    case 1051909:                   // String '++' 'foreach'
    case 1051910:                   // Integer '++' 'foreach'
    case 1051911:                   // Real '++' 'foreach'
    case 1051912:                   // Imaginary '++' 'foreach'
    case 1068291:                   // Identifier '++' 'i32'
    case 1068292:                   // Character '++' 'i32'
    case 1068293:                   // String '++' 'i32'
    case 1068294:                   // Integer '++' 'i32'
    case 1068295:                   // Real '++' 'i32'
    case 1068296:                   // Imaginary '++' 'i32'
    case 1084675:                   // Identifier '++' 'i64'
    case 1084676:                   // Character '++' 'i64'
    case 1084677:                   // String '++' 'i64'
    case 1084678:                   // Integer '++' 'i64'
    case 1084679:                   // Real '++' 'i64'
    case 1084680:                   // Imaginary '++' 'i64'
    case 1101059:                   // Identifier '++' 'if'
    case 1101060:                   // Character '++' 'if'
    case 1101061:                   // String '++' 'if'
    case 1101062:                   // Integer '++' 'if'
    case 1101063:                   // Real '++' 'if'
    case 1101064:                   // Imaginary '++' 'if'
    case 1117443:                   // Identifier '++' 'return'
    case 1117444:                   // Character '++' 'return'
    case 1117445:                   // String '++' 'return'
    case 1117446:                   // Integer '++' 'return'
    case 1117447:                   // Real '++' 'return'
    case 1117448:                   // Imaginary '++' 'return'
    case 1133827:                   // Identifier '++' 'switch'
    case 1133828:                   // Character '++' 'switch'
    case 1133829:                   // String '++' 'switch'
    case 1133830:                   // Integer '++' 'switch'
    case 1133831:                   // Real '++' 'switch'
    case 1133832:                   // Imaginary '++' 'switch'
    case 1150211:                   // Identifier '++' 'test'
    case 1150212:                   // Character '++' 'test'
    case 1150213:                   // String '++' 'test'
    case 1150214:                   // Integer '++' 'test'
    case 1150215:                   // Real '++' 'test'
    case 1150216:                   // Imaginary '++' 'test'
    case 1166595:                   // Identifier '++' 'try'
    case 1166596:                   // Character '++' 'try'
    case 1166597:                   // String '++' 'try'
    case 1166598:                   // Integer '++' 'try'
    case 1166599:                   // Real '++' 'try'
    case 1166600:                   // Imaginary '++' 'try'
    case 1182979:                   // Identifier '++' 'while'
    case 1182980:                   // Character '++' 'while'
    case 1182981:                   // String '++' 'while'
    case 1182982:                   // Integer '++' 'while'
    case 1182983:                   // Real '++' 'while'
    case 1182984:                   // Imaginary '++' 'while'
    case 1215747:                   // Identifier '++' '|'
    case 1215748:                   // Character '++' '|'
    case 1215749:                   // String '++' '|'
    case 1215750:                   // Integer '++' '|'
    case 1215751:                   // Real '++' '|'
    case 1215752:                   // Imaginary '++' '|'
    case 1232131:                   // Identifier '++' '|='
    case 1232132:                   // Character '++' '|='
    case 1232133:                   // String '++' '|='
    case 1232134:                   // Integer '++' '|='
    case 1232135:                   // Real '++' '|='
    case 1232136:                   // Imaginary '++' '|='
    case 1248515:                   // Identifier '++' '||'
    case 1248516:                   // Character '++' '||'
    case 1248517:                   // String '++' '||'
    case 1248518:                   // Integer '++' '||'
    case 1248519:                   // Real '++' '||'
    case 1248520:                   // Imaginary '++' '||'
    case 1264899:                   // Identifier '++' '}'
    case 1264900:                   // Character '++' '}'
    case 1264901:                   // String '++' '}'
    case 1264902:                   // Integer '++' '}'
    case 1264903:                   // Real '++' '}'
    case 1264904:                   // Imaginary '++' '}'
    case 1281283:                   // Identifier '++' '~'
    case 1281284:                   // Character '++' '~'
    case 1281285:                   // String '++' '~'
    case 1281286:                   // Integer '++' '~'
    case 1281287:                   // Real '++' '~'
    case 1281288:                   // Imaginary '++' '~'
      parse_Primary();
      lookahead1W(6);               // WhiteSpace^token | '++'
      consume(26);                  // '++'
      break;
    case -3:
    case 20227:                     // Identifier '--' END
    case 20228:                     // Character '--' END
    case 20229:                     // String '--' END
    case 20230:                     // Integer '--' END
    case 20231:                     // Real '--' END
    case 20232:                     // Imaginary '--' END
    case 151299:                    // Identifier '--' Comment
    case 151300:                    // Character '--' Comment
    case 151301:                    // String '--' Comment
    case 151302:                    // Integer '--' Comment
    case 151303:                    // Real '--' Comment
    case 151304:                    // Imaginary '--' Comment
    case 200451:                    // Identifier '--' '!'
    case 200452:                    // Character '--' '!'
    case 200453:                    // String '--' '!'
    case 200454:                    // Integer '--' '!'
    case 200455:                    // Real '--' '!'
    case 200456:                    // Imaginary '--' '!'
    case 216835:                    // Identifier '--' '!='
    case 216836:                    // Character '--' '!='
    case 216837:                    // String '--' '!='
    case 216838:                    // Integer '--' '!='
    case 216839:                    // Real '--' '!='
    case 216840:                    // Imaginary '--' '!='
    case 249603:                    // Identifier '--' '%'
    case 249604:                    // Character '--' '%'
    case 249605:                    // String '--' '%'
    case 249606:                    // Integer '--' '%'
    case 249607:                    // Real '--' '%'
    case 249608:                    // Imaginary '--' '%'
    case 265987:                    // Identifier '--' '%='
    case 265988:                    // Character '--' '%='
    case 265989:                    // String '--' '%='
    case 265990:                    // Integer '--' '%='
    case 265991:                    // Real '--' '%='
    case 265992:                    // Imaginary '--' '%='
    case 282371:                    // Identifier '--' '&'
    case 282372:                    // Character '--' '&'
    case 282373:                    // String '--' '&'
    case 282374:                    // Integer '--' '&'
    case 282375:                    // Real '--' '&'
    case 282376:                    // Imaginary '--' '&'
    case 298755:                    // Identifier '--' '&&'
    case 298756:                    // Character '--' '&&'
    case 298757:                    // String '--' '&&'
    case 298758:                    // Integer '--' '&&'
    case 298759:                    // Real '--' '&&'
    case 298760:                    // Imaginary '--' '&&'
    case 315139:                    // Identifier '--' '&='
    case 315140:                    // Character '--' '&='
    case 315141:                    // String '--' '&='
    case 315142:                    // Integer '--' '&='
    case 315143:                    // Real '--' '&='
    case 315144:                    // Imaginary '--' '&='
    case 347907:                    // Identifier '--' ')'
    case 347908:                    // Character '--' ')'
    case 347909:                    // String '--' ')'
    case 347910:                    // Integer '--' ')'
    case 347911:                    // Real '--' ')'
    case 347912:                    // Imaginary '--' ')'
    case 364291:                    // Identifier '--' '*'
    case 364292:                    // Character '--' '*'
    case 364293:                    // String '--' '*'
    case 364294:                    // Integer '--' '*'
    case 364295:                    // Real '--' '*'
    case 364296:                    // Imaginary '--' '*'
    case 380675:                    // Identifier '--' '**'
    case 380676:                    // Character '--' '**'
    case 380677:                    // String '--' '**'
    case 380678:                    // Integer '--' '**'
    case 380679:                    // Real '--' '**'
    case 380680:                    // Imaginary '--' '**'
    case 397059:                    // Identifier '--' '*='
    case 397060:                    // Character '--' '*='
    case 397061:                    // String '--' '*='
    case 397062:                    // Integer '--' '*='
    case 397063:                    // Real '--' '*='
    case 397064:                    // Imaginary '--' '*='
    case 413443:                    // Identifier '--' '+'
    case 413444:                    // Character '--' '+'
    case 413445:                    // String '--' '+'
    case 413446:                    // Integer '--' '+'
    case 413447:                    // Real '--' '+'
    case 413448:                    // Imaginary '--' '+'
    case 429827:                    // Identifier '--' '++'
    case 429828:                    // Character '--' '++'
    case 429829:                    // String '--' '++'
    case 429830:                    // Integer '--' '++'
    case 429831:                    // Real '--' '++'
    case 429832:                    // Imaginary '--' '++'
    case 446211:                    // Identifier '--' '+='
    case 446212:                    // Character '--' '+='
    case 446213:                    // String '--' '+='
    case 446214:                    // Integer '--' '+='
    case 446215:                    // Real '--' '+='
    case 446216:                    // Imaginary '--' '+='
    case 462595:                    // Identifier '--' ','
    case 462596:                    // Character '--' ','
    case 462597:                    // String '--' ','
    case 462598:                    // Integer '--' ','
    case 462599:                    // Real '--' ','
    case 462600:                    // Imaginary '--' ','
    case 478979:                    // Identifier '--' '-'
    case 478980:                    // Character '--' '-'
    case 478981:                    // String '--' '-'
    case 478982:                    // Integer '--' '-'
    case 478983:                    // Real '--' '-'
    case 478984:                    // Imaginary '--' '-'
    case 495363:                    // Identifier '--' '--'
    case 495364:                    // Character '--' '--'
    case 495365:                    // String '--' '--'
    case 495366:                    // Integer '--' '--'
    case 495367:                    // Real '--' '--'
    case 495368:                    // Imaginary '--' '--'
    case 511747:                    // Identifier '--' '-='
    case 511748:                    // Character '--' '-='
    case 511749:                    // String '--' '-='
    case 511750:                    // Integer '--' '-='
    case 511751:                    // Real '--' '-='
    case 511752:                    // Imaginary '--' '-='
    case 544515:                    // Identifier '--' '/'
    case 544516:                    // Character '--' '/'
    case 544517:                    // String '--' '/'
    case 544518:                    // Integer '--' '/'
    case 544519:                    // Real '--' '/'
    case 544520:                    // Imaginary '--' '/'
    case 560899:                    // Identifier '--' '/='
    case 560900:                    // Character '--' '/='
    case 560901:                    // String '--' '/='
    case 560902:                    // Integer '--' '/='
    case 560903:                    // Real '--' '/='
    case 560904:                    // Imaginary '--' '/='
    case 577283:                    // Identifier '--' ':'
    case 577284:                    // Character '--' ':'
    case 577285:                    // String '--' ':'
    case 577286:                    // Integer '--' ':'
    case 577287:                    // Real '--' ':'
    case 577288:                    // Imaginary '--' ':'
    case 593667:                    // Identifier '--' ':='
    case 593668:                    // Character '--' ':='
    case 593669:                    // String '--' ':='
    case 593670:                    // Integer '--' ':='
    case 593671:                    // Real '--' ':='
    case 593672:                    // Imaginary '--' ':='
    case 610051:                    // Identifier '--' ';'
    case 610052:                    // Character '--' ';'
    case 610053:                    // String '--' ';'
    case 610054:                    // Integer '--' ';'
    case 610055:                    // Real '--' ';'
    case 610056:                    // Imaginary '--' ';'
    case 626435:                    // Identifier '--' '<'
    case 626436:                    // Character '--' '<'
    case 626437:                    // String '--' '<'
    case 626438:                    // Integer '--' '<'
    case 626439:                    // Real '--' '<'
    case 626440:                    // Imaginary '--' '<'
    case 642819:                    // Identifier '--' '<<'
    case 642820:                    // Character '--' '<<'
    case 642821:                    // String '--' '<<'
    case 642822:                    // Integer '--' '<<'
    case 642823:                    // Real '--' '<<'
    case 642824:                    // Imaginary '--' '<<'
    case 659203:                    // Identifier '--' '<<='
    case 659204:                    // Character '--' '<<='
    case 659205:                    // String '--' '<<='
    case 659206:                    // Integer '--' '<<='
    case 659207:                    // Real '--' '<<='
    case 659208:                    // Imaginary '--' '<<='
    case 675587:                    // Identifier '--' '<='
    case 675588:                    // Character '--' '<='
    case 675589:                    // String '--' '<='
    case 675590:                    // Integer '--' '<='
    case 675591:                    // Real '--' '<='
    case 675592:                    // Imaginary '--' '<='
    case 691971:                    // Identifier '--' '='
    case 691972:                    // Character '--' '='
    case 691973:                    // String '--' '='
    case 691974:                    // Integer '--' '='
    case 691975:                    // Real '--' '='
    case 691976:                    // Imaginary '--' '='
    case 708355:                    // Identifier '--' '=='
    case 708356:                    // Character '--' '=='
    case 708357:                    // String '--' '=='
    case 708358:                    // Integer '--' '=='
    case 708359:                    // Real '--' '=='
    case 708360:                    // Imaginary '--' '=='
    case 724739:                    // Identifier '--' '>'
    case 724740:                    // Character '--' '>'
    case 724741:                    // String '--' '>'
    case 724742:                    // Integer '--' '>'
    case 724743:                    // Real '--' '>'
    case 724744:                    // Imaginary '--' '>'
    case 741123:                    // Identifier '--' '>='
    case 741124:                    // Character '--' '>='
    case 741125:                    // String '--' '>='
    case 741126:                    // Integer '--' '>='
    case 741127:                    // Real '--' '>='
    case 741128:                    // Imaginary '--' '>='
    case 757507:                    // Identifier '--' '>>'
    case 757508:                    // Character '--' '>>'
    case 757509:                    // String '--' '>>'
    case 757510:                    // Integer '--' '>>'
    case 757511:                    // Real '--' '>>'
    case 757512:                    // Imaginary '--' '>>'
    case 773891:                    // Identifier '--' '>>='
    case 773892:                    // Character '--' '>>='
    case 773893:                    // String '--' '>>='
    case 773894:                    // Integer '--' '>>='
    case 773895:                    // Real '--' '>>='
    case 773896:                    // Imaginary '--' '>>='
    case 790275:                    // Identifier '--' '?'
    case 790276:                    // Character '--' '?'
    case 790277:                    // String '--' '?'
    case 790278:                    // Integer '--' '?'
    case 790279:                    // Real '--' '?'
    case 790280:                    // Imaginary '--' '?'
    case 806659:                    // Identifier '--' '?='
    case 806660:                    // Character '--' '?='
    case 806661:                    // String '--' '?='
    case 806662:                    // Integer '--' '?='
    case 806663:                    // Real '--' '?='
    case 806664:                    // Imaginary '--' '?='
    case 839427:                    // Identifier '--' ']'
    case 839428:                    // Character '--' ']'
    case 839429:                    // String '--' ']'
    case 839430:                    // Integer '--' ']'
    case 839431:                    // Real '--' ']'
    case 839432:                    // Imaginary '--' ']'
    case 855811:                    // Identifier '--' '^'
    case 855812:                    // Character '--' '^'
    case 855813:                    // String '--' '^'
    case 855814:                    // Integer '--' '^'
    case 855815:                    // Real '--' '^'
    case 855816:                    // Imaginary '--' '^'
    case 872195:                    // Identifier '--' '^='
    case 872196:                    // Character '--' '^='
    case 872197:                    // String '--' '^='
    case 872198:                    // Integer '--' '^='
    case 872199:                    // Real '--' '^='
    case 872200:                    // Imaginary '--' '^='
    case 888579:                    // Identifier '--' 'break'
    case 888580:                    // Character '--' 'break'
    case 888581:                    // String '--' 'break'
    case 888582:                    // Integer '--' 'break'
    case 888583:                    // Real '--' 'break'
    case 888584:                    // Imaginary '--' 'break'
    case 904963:                    // Identifier '--' 'case'
    case 904964:                    // Character '--' 'case'
    case 904965:                    // String '--' 'case'
    case 904966:                    // Integer '--' 'case'
    case 904967:                    // Real '--' 'case'
    case 904968:                    // Imaginary '--' 'case'
    case 921347:                    // Identifier '--' 'catch'
    case 921348:                    // Character '--' 'catch'
    case 921349:                    // String '--' 'catch'
    case 921350:                    // Integer '--' 'catch'
    case 921351:                    // Real '--' 'catch'
    case 921352:                    // Imaginary '--' 'catch'
    case 937731:                    // Identifier '--' 'continue'
    case 937732:                    // Character '--' 'continue'
    case 937733:                    // String '--' 'continue'
    case 937734:                    // Integer '--' 'continue'
    case 937735:                    // Real '--' 'continue'
    case 937736:                    // Imaginary '--' 'continue'
    case 954115:                    // Identifier '--' 'default'
    case 954116:                    // Character '--' 'default'
    case 954117:                    // String '--' 'default'
    case 954118:                    // Integer '--' 'default'
    case 954119:                    // Real '--' 'default'
    case 954120:                    // Imaginary '--' 'default'
    case 970499:                    // Identifier '--' 'do'
    case 970500:                    // Character '--' 'do'
    case 970501:                    // String '--' 'do'
    case 970502:                    // Integer '--' 'do'
    case 970503:                    // Real '--' 'do'
    case 970504:                    // Imaginary '--' 'do'
    case 986883:                    // Identifier '--' 'else'
    case 986884:                    // Character '--' 'else'
    case 986885:                    // String '--' 'else'
    case 986886:                    // Integer '--' 'else'
    case 986887:                    // Real '--' 'else'
    case 986888:                    // Imaginary '--' 'else'
    case 1003267:                   // Identifier '--' 'f32'
    case 1003268:                   // Character '--' 'f32'
    case 1003269:                   // String '--' 'f32'
    case 1003270:                   // Integer '--' 'f32'
    case 1003271:                   // Real '--' 'f32'
    case 1003272:                   // Imaginary '--' 'f32'
    case 1019651:                   // Identifier '--' 'f64'
    case 1019652:                   // Character '--' 'f64'
    case 1019653:                   // String '--' 'f64'
    case 1019654:                   // Integer '--' 'f64'
    case 1019655:                   // Real '--' 'f64'
    case 1019656:                   // Imaginary '--' 'f64'
    case 1036035:                   // Identifier '--' 'for'
    case 1036036:                   // Character '--' 'for'
    case 1036037:                   // String '--' 'for'
    case 1036038:                   // Integer '--' 'for'
    case 1036039:                   // Real '--' 'for'
    case 1036040:                   // Imaginary '--' 'for'
    case 1052419:                   // Identifier '--' 'foreach'
    case 1052420:                   // Character '--' 'foreach'
    case 1052421:                   // String '--' 'foreach'
    case 1052422:                   // Integer '--' 'foreach'
    case 1052423:                   // Real '--' 'foreach'
    case 1052424:                   // Imaginary '--' 'foreach'
    case 1068803:                   // Identifier '--' 'i32'
    case 1068804:                   // Character '--' 'i32'
    case 1068805:                   // String '--' 'i32'
    case 1068806:                   // Integer '--' 'i32'
    case 1068807:                   // Real '--' 'i32'
    case 1068808:                   // Imaginary '--' 'i32'
    case 1085187:                   // Identifier '--' 'i64'
    case 1085188:                   // Character '--' 'i64'
    case 1085189:                   // String '--' 'i64'
    case 1085190:                   // Integer '--' 'i64'
    case 1085191:                   // Real '--' 'i64'
    case 1085192:                   // Imaginary '--' 'i64'
    case 1101571:                   // Identifier '--' 'if'
    case 1101572:                   // Character '--' 'if'
    case 1101573:                   // String '--' 'if'
    case 1101574:                   // Integer '--' 'if'
    case 1101575:                   // Real '--' 'if'
    case 1101576:                   // Imaginary '--' 'if'
    case 1117955:                   // Identifier '--' 'return'
    case 1117956:                   // Character '--' 'return'
    case 1117957:                   // String '--' 'return'
    case 1117958:                   // Integer '--' 'return'
    case 1117959:                   // Real '--' 'return'
    case 1117960:                   // Imaginary '--' 'return'
    case 1134339:                   // Identifier '--' 'switch'
    case 1134340:                   // Character '--' 'switch'
    case 1134341:                   // String '--' 'switch'
    case 1134342:                   // Integer '--' 'switch'
    case 1134343:                   // Real '--' 'switch'
    case 1134344:                   // Imaginary '--' 'switch'
    case 1150723:                   // Identifier '--' 'test'
    case 1150724:                   // Character '--' 'test'
    case 1150725:                   // String '--' 'test'
    case 1150726:                   // Integer '--' 'test'
    case 1150727:                   // Real '--' 'test'
    case 1150728:                   // Imaginary '--' 'test'
    case 1167107:                   // Identifier '--' 'try'
    case 1167108:                   // Character '--' 'try'
    case 1167109:                   // String '--' 'try'
    case 1167110:                   // Integer '--' 'try'
    case 1167111:                   // Real '--' 'try'
    case 1167112:                   // Imaginary '--' 'try'
    case 1183491:                   // Identifier '--' 'while'
    case 1183492:                   // Character '--' 'while'
    case 1183493:                   // String '--' 'while'
    case 1183494:                   // Integer '--' 'while'
    case 1183495:                   // Real '--' 'while'
    case 1183496:                   // Imaginary '--' 'while'
    case 1216259:                   // Identifier '--' '|'
    case 1216260:                   // Character '--' '|'
    case 1216261:                   // String '--' '|'
    case 1216262:                   // Integer '--' '|'
    case 1216263:                   // Real '--' '|'
    case 1216264:                   // Imaginary '--' '|'
    case 1232643:                   // Identifier '--' '|='
    case 1232644:                   // Character '--' '|='
    case 1232645:                   // String '--' '|='
    case 1232646:                   // Integer '--' '|='
    case 1232647:                   // Real '--' '|='
    case 1232648:                   // Imaginary '--' '|='
    case 1249027:                   // Identifier '--' '||'
    case 1249028:                   // Character '--' '||'
    case 1249029:                   // String '--' '||'
    case 1249030:                   // Integer '--' '||'
    case 1249031:                   // Real '--' '||'
    case 1249032:                   // Imaginary '--' '||'
    case 1265411:                   // Identifier '--' '}'
    case 1265412:                   // Character '--' '}'
    case 1265413:                   // String '--' '}'
    case 1265414:                   // Integer '--' '}'
    case 1265415:                   // Real '--' '}'
    case 1265416:                   // Imaginary '--' '}'
    case 1281795:                   // Identifier '--' '~'
    case 1281796:                   // Character '--' '~'
    case 1281797:                   // String '--' '~'
    case 1281798:                   // Integer '--' '~'
    case 1281799:                   // Real '--' '~'
    case 1281800:                   // Imaginary '--' '~'
      parse_Primary();
      lookahead1W(7);               // WhiteSpace^token | '--'
      consume(30);                  // '--'
      break;
    case 26:                        // '++'
      consume(26);                  // '++'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 30:                        // '--'
      consume(30);                  // '--'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 25:                        // '+'
      consume(25);                  // '+'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 29:                        // '-'
      consume(29);                  // '-'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 78:                        // '~'
      consume(78);                  // '~'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 12:                        // '!'
      consume(12);                  // '!'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
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
      lookahead2W(49);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 7:                         // Real
      lookahead2W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 1031:                    // Real Imaginary
      case 3335:                    // Real '++'
      case 3847:                    // Real '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(40);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 916:                     // '(' Real
        lookahead3W(34);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9364:                    // '(' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 1044:                    // '(' Imaginary
        lookahead3W(33);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(5);             // WhiteSpace^token | ')'
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8724:                    // '(' 'return'
      case 9108:                    // '(' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8340:                    // '(' 'i32'
      case 8468:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10004:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8596:                    // '(' 'if'
      case 8852:                    // '(' 'switch'
      case 8980:                    // '(' 'test'
      case 9236:                    // '(' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(27);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(44);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 946:                     // '[' Real
        lookahead3W(39);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      case 9394:                    // '[' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 1074:                    // '[' Imaginary
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8754:                    // '[' 'return'
      case 9138:                    // '[' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8370:                    // '[' 'i32'
      case 8498:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10034:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8626:                    // '[' 'if'
      case 8882:                    // '[' 'switch'
      case 9010:                    // '[' 'test'
      case 9266:                    // '[' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 73:                        // '{'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 457:                     // '{' Identifier
        lookahead3W(43);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 713:                     // '{' String
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 969:                     // '{' Real
        lookahead3W(36);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6473:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9417:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 585:                     // '{' Character
      case 841:                     // '{' Integer
      case 1097:                    // '{' Imaginary
        lookahead3W(35);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1225:                    // '{' Comment
      case 4809:                    // '{' ';'
      case 6985:                    // '{' 'break'
      case 7369:                    // '{' 'continue'
        lookahead3W(19);            // WhiteSpace^token | ',' | '}'
        break;
      case 2633:                    // '{' '('
      case 7625:                    // '{' 'do'
      case 8777:                    // '{' 'return'
      case 9161:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7881:                    // '{' 'f32'
      case 8009:                    // '{' 'f64'
      case 8393:                    // '{' 'i32'
      case 8521:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1609:                    // '{' '!'
      case 3273:                    // '{' '+'
      case 3401:                    // '{' '++'
      case 3785:                    // '{' '-'
      case 3913:                    // '{' '--'
      case 10057:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8137:                    // '{' 'for'
      case 8265:                    // '{' 'foreach'
      case 8649:                    // '{' 'if'
      case 8905:                    // '{' 'switch'
      case 9033:                    // '{' 'test'
      case 9289:                    // '{' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 8:                         // Imaginary
      lookahead2W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 3332:                    // Character '++'
      case 3844:                    // Character '--'
      case 3333:                    // String '++'
      case 3845:                    // String '--'
      case 3334:                    // Integer '++'
      case 3846:                    // Integer '--'
      case 3336:                    // Imaginary '++'
      case 3848:                    // Imaginary '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
     && lk != 78                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Character END
     && lk != 133                   // String END
     && lk != 134                   // Integer END
     && lk != 135                   // Real END
     && lk != 136                   // Imaginary END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Character Identifier
     && lk != 389                   // String Identifier
     && lk != 390                   // Integer Identifier
     && lk != 391                   // Real Identifier
     && lk != 392                   // Imaginary Identifier
     && lk != 515                   // Identifier Character
     && lk != 516                   // Character Character
     && lk != 517                   // String Character
     && lk != 518                   // Integer Character
     && lk != 519                   // Real Character
     && lk != 520                   // Imaginary Character
     && lk != 643                   // Identifier String
     && lk != 644                   // Character String
     && lk != 645                   // String String
     && lk != 646                   // Integer String
     && lk != 647                   // Real String
     && lk != 648                   // Imaginary String
     && lk != 771                   // Identifier Integer
     && lk != 772                   // Character Integer
     && lk != 773                   // String Integer
     && lk != 774                   // Integer Integer
     && lk != 775                   // Real Integer
     && lk != 776                   // Imaginary Integer
     && lk != 899                   // Identifier Real
     && lk != 900                   // Character Real
     && lk != 901                   // String Real
     && lk != 902                   // Integer Real
     && lk != 903                   // Real Real
     && lk != 904                   // Imaginary Real
     && lk != 1027                  // Identifier Imaginary
     && lk != 1028                  // Character Imaginary
     && lk != 1029                  // String Imaginary
     && lk != 1030                  // Integer Imaginary
     && lk != 1032                  // Imaginary Imaginary
     && lk != 1155                  // Identifier Comment
     && lk != 1156                  // Character Comment
     && lk != 1157                  // String Comment
     && lk != 1158                  // Integer Comment
     && lk != 1159                  // Real Comment
     && lk != 1160                  // Imaginary Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1540                  // Character '!'
     && lk != 1541                  // String '!'
     && lk != 1542                  // Integer '!'
     && lk != 1543                  // Real '!'
     && lk != 1544                  // Imaginary '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1668                  // Character '!='
     && lk != 1669                  // String '!='
     && lk != 1670                  // Integer '!='
     && lk != 1671                  // Real '!='
     && lk != 1672                  // Imaginary '!='
     && lk != 1923                  // Identifier '%'
     && lk != 1924                  // Character '%'
     && lk != 1925                  // String '%'
     && lk != 1926                  // Integer '%'
     && lk != 1927                  // Real '%'
     && lk != 1928                  // Imaginary '%'
     && lk != 2051                  // Identifier '%='
     && lk != 2052                  // Character '%='
     && lk != 2053                  // String '%='
     && lk != 2054                  // Integer '%='
     && lk != 2055                  // Real '%='
     && lk != 2056                  // Imaginary '%='
     && lk != 2179                  // Identifier '&'
     && lk != 2180                  // Character '&'
     && lk != 2181                  // String '&'
     && lk != 2182                  // Integer '&'
     && lk != 2183                  // Real '&'
     && lk != 2184                  // Imaginary '&'
     && lk != 2307                  // Identifier '&&'
     && lk != 2308                  // Character '&&'
     && lk != 2309                  // String '&&'
     && lk != 2310                  // Integer '&&'
     && lk != 2311                  // Real '&&'
     && lk != 2312                  // Imaginary '&&'
     && lk != 2435                  // Identifier '&='
     && lk != 2436                  // Character '&='
     && lk != 2437                  // String '&='
     && lk != 2438                  // Integer '&='
     && lk != 2439                  // Real '&='
     && lk != 2440                  // Imaginary '&='
     && lk != 2564                  // Character '('
     && lk != 2565                  // String '('
     && lk != 2566                  // Integer '('
     && lk != 2567                  // Real '('
     && lk != 2568                  // Imaginary '('
     && lk != 2691                  // Identifier ')'
     && lk != 2692                  // Character ')'
     && lk != 2693                  // String ')'
     && lk != 2694                  // Integer ')'
     && lk != 2695                  // Real ')'
     && lk != 2696                  // Imaginary ')'
     && lk != 2819                  // Identifier '*'
     && lk != 2820                  // Character '*'
     && lk != 2821                  // String '*'
     && lk != 2822                  // Integer '*'
     && lk != 2823                  // Real '*'
     && lk != 2824                  // Imaginary '*'
     && lk != 2947                  // Identifier '**'
     && lk != 2948                  // Character '**'
     && lk != 2949                  // String '**'
     && lk != 2950                  // Integer '**'
     && lk != 2951                  // Real '**'
     && lk != 2952                  // Imaginary '**'
     && lk != 3075                  // Identifier '*='
     && lk != 3076                  // Character '*='
     && lk != 3077                  // String '*='
     && lk != 3078                  // Integer '*='
     && lk != 3079                  // Real '*='
     && lk != 3080                  // Imaginary '*='
     && lk != 3203                  // Identifier '+'
     && lk != 3204                  // Character '+'
     && lk != 3205                  // String '+'
     && lk != 3206                  // Integer '+'
     && lk != 3207                  // Real '+'
     && lk != 3208                  // Imaginary '+'
     && lk != 3459                  // Identifier '+='
     && lk != 3460                  // Character '+='
     && lk != 3461                  // String '+='
     && lk != 3462                  // Integer '+='
     && lk != 3463                  // Real '+='
     && lk != 3464                  // Imaginary '+='
     && lk != 3587                  // Identifier ','
     && lk != 3588                  // Character ','
     && lk != 3589                  // String ','
     && lk != 3590                  // Integer ','
     && lk != 3591                  // Real ','
     && lk != 3592                  // Imaginary ','
     && lk != 3715                  // Identifier '-'
     && lk != 3716                  // Character '-'
     && lk != 3717                  // String '-'
     && lk != 3718                  // Integer '-'
     && lk != 3719                  // Real '-'
     && lk != 3720                  // Imaginary '-'
     && lk != 3971                  // Identifier '-='
     && lk != 3972                  // Character '-='
     && lk != 3973                  // String '-='
     && lk != 3974                  // Integer '-='
     && lk != 3975                  // Real '-='
     && lk != 3976                  // Imaginary '-='
     && lk != 4227                  // Identifier '/'
     && lk != 4228                  // Character '/'
     && lk != 4229                  // String '/'
     && lk != 4230                  // Integer '/'
     && lk != 4231                  // Real '/'
     && lk != 4232                  // Imaginary '/'
     && lk != 4355                  // Identifier '/='
     && lk != 4356                  // Character '/='
     && lk != 4357                  // String '/='
     && lk != 4358                  // Integer '/='
     && lk != 4359                  // Real '/='
     && lk != 4360                  // Imaginary '/='
     && lk != 4483                  // Identifier ':'
     && lk != 4484                  // Character ':'
     && lk != 4485                  // String ':'
     && lk != 4486                  // Integer ':'
     && lk != 4487                  // Real ':'
     && lk != 4488                  // Imaginary ':'
     && lk != 4611                  // Identifier ':='
     && lk != 4612                  // Character ':='
     && lk != 4613                  // String ':='
     && lk != 4614                  // Integer ':='
     && lk != 4615                  // Real ':='
     && lk != 4616                  // Imaginary ':='
     && lk != 4739                  // Identifier ';'
     && lk != 4740                  // Character ';'
     && lk != 4741                  // String ';'
     && lk != 4742                  // Integer ';'
     && lk != 4743                  // Real ';'
     && lk != 4744                  // Imaginary ';'
     && lk != 4867                  // Identifier '<'
     && lk != 4868                  // Character '<'
     && lk != 4869                  // String '<'
     && lk != 4870                  // Integer '<'
     && lk != 4871                  // Real '<'
     && lk != 4872                  // Imaginary '<'
     && lk != 4995                  // Identifier '<<'
     && lk != 4996                  // Character '<<'
     && lk != 4997                  // String '<<'
     && lk != 4998                  // Integer '<<'
     && lk != 4999                  // Real '<<'
     && lk != 5000                  // Imaginary '<<'
     && lk != 5123                  // Identifier '<<='
     && lk != 5124                  // Character '<<='
     && lk != 5125                  // String '<<='
     && lk != 5126                  // Integer '<<='
     && lk != 5127                  // Real '<<='
     && lk != 5128                  // Imaginary '<<='
     && lk != 5251                  // Identifier '<='
     && lk != 5252                  // Character '<='
     && lk != 5253                  // String '<='
     && lk != 5254                  // Integer '<='
     && lk != 5255                  // Real '<='
     && lk != 5256                  // Imaginary '<='
     && lk != 5379                  // Identifier '='
     && lk != 5380                  // Character '='
     && lk != 5381                  // String '='
     && lk != 5382                  // Integer '='
     && lk != 5383                  // Real '='
     && lk != 5384                  // Imaginary '='
     && lk != 5507                  // Identifier '=='
     && lk != 5508                  // Character '=='
     && lk != 5509                  // String '=='
     && lk != 5510                  // Integer '=='
     && lk != 5511                  // Real '=='
     && lk != 5512                  // Imaginary '=='
     && lk != 5635                  // Identifier '>'
     && lk != 5636                  // Character '>'
     && lk != 5637                  // String '>'
     && lk != 5638                  // Integer '>'
     && lk != 5639                  // Real '>'
     && lk != 5640                  // Imaginary '>'
     && lk != 5763                  // Identifier '>='
     && lk != 5764                  // Character '>='
     && lk != 5765                  // String '>='
     && lk != 5766                  // Integer '>='
     && lk != 5767                  // Real '>='
     && lk != 5768                  // Imaginary '>='
     && lk != 5891                  // Identifier '>>'
     && lk != 5892                  // Character '>>'
     && lk != 5893                  // String '>>'
     && lk != 5894                  // Integer '>>'
     && lk != 5895                  // Real '>>'
     && lk != 5896                  // Imaginary '>>'
     && lk != 6019                  // Identifier '>>='
     && lk != 6020                  // Character '>>='
     && lk != 6021                  // String '>>='
     && lk != 6022                  // Integer '>>='
     && lk != 6023                  // Real '>>='
     && lk != 6024                  // Imaginary '>>='
     && lk != 6147                  // Identifier '?'
     && lk != 6148                  // Character '?'
     && lk != 6149                  // String '?'
     && lk != 6150                  // Integer '?'
     && lk != 6151                  // Real '?'
     && lk != 6152                  // Imaginary '?'
     && lk != 6275                  // Identifier '?='
     && lk != 6276                  // Character '?='
     && lk != 6277                  // String '?='
     && lk != 6278                  // Integer '?='
     && lk != 6279                  // Real '?='
     && lk != 6280                  // Imaginary '?='
     && lk != 6404                  // Character '['
     && lk != 6405                  // String '['
     && lk != 6406                  // Integer '['
     && lk != 6407                  // Real '['
     && lk != 6408                  // Imaginary '['
     && lk != 6531                  // Identifier ']'
     && lk != 6532                  // Character ']'
     && lk != 6533                  // String ']'
     && lk != 6534                  // Integer ']'
     && lk != 6535                  // Real ']'
     && lk != 6536                  // Imaginary ']'
     && lk != 6659                  // Identifier '^'
     && lk != 6660                  // Character '^'
     && lk != 6661                  // String '^'
     && lk != 6662                  // Integer '^'
     && lk != 6663                  // Real '^'
     && lk != 6664                  // Imaginary '^'
     && lk != 6787                  // Identifier '^='
     && lk != 6788                  // Character '^='
     && lk != 6789                  // String '^='
     && lk != 6790                  // Integer '^='
     && lk != 6791                  // Real '^='
     && lk != 6792                  // Imaginary '^='
     && lk != 6915                  // Identifier 'break'
     && lk != 6916                  // Character 'break'
     && lk != 6917                  // String 'break'
     && lk != 6918                  // Integer 'break'
     && lk != 6919                  // Real 'break'
     && lk != 6920                  // Imaginary 'break'
     && lk != 7043                  // Identifier 'case'
     && lk != 7044                  // Character 'case'
     && lk != 7045                  // String 'case'
     && lk != 7046                  // Integer 'case'
     && lk != 7047                  // Real 'case'
     && lk != 7048                  // Imaginary 'case'
     && lk != 7171                  // Identifier 'catch'
     && lk != 7172                  // Character 'catch'
     && lk != 7173                  // String 'catch'
     && lk != 7174                  // Integer 'catch'
     && lk != 7175                  // Real 'catch'
     && lk != 7176                  // Imaginary 'catch'
     && lk != 7299                  // Identifier 'continue'
     && lk != 7300                  // Character 'continue'
     && lk != 7301                  // String 'continue'
     && lk != 7302                  // Integer 'continue'
     && lk != 7303                  // Real 'continue'
     && lk != 7304                  // Imaginary 'continue'
     && lk != 7427                  // Identifier 'default'
     && lk != 7428                  // Character 'default'
     && lk != 7429                  // String 'default'
     && lk != 7430                  // Integer 'default'
     && lk != 7431                  // Real 'default'
     && lk != 7432                  // Imaginary 'default'
     && lk != 7555                  // Identifier 'do'
     && lk != 7556                  // Character 'do'
     && lk != 7557                  // String 'do'
     && lk != 7558                  // Integer 'do'
     && lk != 7559                  // Real 'do'
     && lk != 7560                  // Imaginary 'do'
     && lk != 7683                  // Identifier 'else'
     && lk != 7684                  // Character 'else'
     && lk != 7685                  // String 'else'
     && lk != 7686                  // Integer 'else'
     && lk != 7687                  // Real 'else'
     && lk != 7688                  // Imaginary 'else'
     && lk != 7811                  // Identifier 'f32'
     && lk != 7812                  // Character 'f32'
     && lk != 7813                  // String 'f32'
     && lk != 7814                  // Integer 'f32'
     && lk != 7815                  // Real 'f32'
     && lk != 7816                  // Imaginary 'f32'
     && lk != 7939                  // Identifier 'f64'
     && lk != 7940                  // Character 'f64'
     && lk != 7941                  // String 'f64'
     && lk != 7942                  // Integer 'f64'
     && lk != 7943                  // Real 'f64'
     && lk != 7944                  // Imaginary 'f64'
     && lk != 8067                  // Identifier 'for'
     && lk != 8068                  // Character 'for'
     && lk != 8069                  // String 'for'
     && lk != 8070                  // Integer 'for'
     && lk != 8071                  // Real 'for'
     && lk != 8072                  // Imaginary 'for'
     && lk != 8195                  // Identifier 'foreach'
     && lk != 8196                  // Character 'foreach'
     && lk != 8197                  // String 'foreach'
     && lk != 8198                  // Integer 'foreach'
     && lk != 8199                  // Real 'foreach'
     && lk != 8200                  // Imaginary 'foreach'
     && lk != 8323                  // Identifier 'i32'
     && lk != 8324                  // Character 'i32'
     && lk != 8325                  // String 'i32'
     && lk != 8326                  // Integer 'i32'
     && lk != 8327                  // Real 'i32'
     && lk != 8328                  // Imaginary 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8452                  // Character 'i64'
     && lk != 8453                  // String 'i64'
     && lk != 8454                  // Integer 'i64'
     && lk != 8455                  // Real 'i64'
     && lk != 8456                  // Imaginary 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8580                  // Character 'if'
     && lk != 8581                  // String 'if'
     && lk != 8582                  // Integer 'if'
     && lk != 8583                  // Real 'if'
     && lk != 8584                  // Imaginary 'if'
     && lk != 8707                  // Identifier 'return'
     && lk != 8708                  // Character 'return'
     && lk != 8709                  // String 'return'
     && lk != 8710                  // Integer 'return'
     && lk != 8711                  // Real 'return'
     && lk != 8712                  // Imaginary 'return'
     && lk != 8835                  // Identifier 'switch'
     && lk != 8836                  // Character 'switch'
     && lk != 8837                  // String 'switch'
     && lk != 8838                  // Integer 'switch'
     && lk != 8839                  // Real 'switch'
     && lk != 8840                  // Imaginary 'switch'
     && lk != 8963                  // Identifier 'test'
     && lk != 8964                  // Character 'test'
     && lk != 8965                  // String 'test'
     && lk != 8966                  // Integer 'test'
     && lk != 8967                  // Real 'test'
     && lk != 8968                  // Imaginary 'test'
     && lk != 9091                  // Identifier 'try'
     && lk != 9092                  // Character 'try'
     && lk != 9093                  // String 'try'
     && lk != 9094                  // Integer 'try'
     && lk != 9095                  // Real 'try'
     && lk != 9096                  // Imaginary 'try'
     && lk != 9219                  // Identifier 'while'
     && lk != 9220                  // Character 'while'
     && lk != 9221                  // String 'while'
     && lk != 9222                  // Integer 'while'
     && lk != 9223                  // Real 'while'
     && lk != 9224                  // Imaginary 'while'
     && lk != 9347                  // Identifier '{'
     && lk != 9348                  // Character '{'
     && lk != 9349                  // String '{'
     && lk != 9350                  // Integer '{'
     && lk != 9351                  // Real '{'
     && lk != 9352                  // Imaginary '{'
     && lk != 9475                  // Identifier '|'
     && lk != 9476                  // Character '|'
     && lk != 9477                  // String '|'
     && lk != 9478                  // Integer '|'
     && lk != 9479                  // Real '|'
     && lk != 9480                  // Imaginary '|'
     && lk != 9603                  // Identifier '|='
     && lk != 9604                  // Character '|='
     && lk != 9605                  // String '|='
     && lk != 9606                  // Integer '|='
     && lk != 9607                  // Real '|='
     && lk != 9608                  // Imaginary '|='
     && lk != 9731                  // Identifier '||'
     && lk != 9732                  // Character '||'
     && lk != 9733                  // String '||'
     && lk != 9734                  // Integer '||'
     && lk != 9735                  // Real '||'
     && lk != 9736                  // Imaginary '||'
     && lk != 9859                  // Identifier '}'
     && lk != 9860                  // Character '}'
     && lk != 9861                  // String '}'
     && lk != 9862                  // Integer '}'
     && lk != 9863                  // Real '}'
     && lk != 9864                  // Imaginary '}'
     && lk != 9987                  // Identifier '~'
     && lk != 9988                  // Character '~'
     && lk != 9989                  // String '~'
     && lk != 9990                  // Integer '~'
     && lk != 9991                  // Real '~'
     && lk != 9992                  // Imaginary '~'
     && lk != 17415                 // Real Imaginary END
     && lk != 19715                 // Identifier '++' END
     && lk != 19716                 // Character '++' END
     && lk != 19717                 // String '++' END
     && lk != 19718                 // Integer '++' END
     && lk != 19719                 // Real '++' END
     && lk != 19720                 // Imaginary '++' END
     && lk != 20227                 // Identifier '--' END
     && lk != 20228                 // Character '--' END
     && lk != 20229                 // String '--' END
     && lk != 20230                 // Integer '--' END
     && lk != 20231                 // Real '--' END
     && lk != 20232                 // Imaginary '--' END
     && lk != 22962                 // '[' ']' END
     && lk != 50183                 // Real Imaginary Identifier
     && lk != 55730                 // '[' ']' Identifier
     && lk != 66567                 // Real Imaginary Character
     && lk != 72114                 // '[' ']' Character
     && lk != 82951                 // Real Imaginary String
     && lk != 88498                 // '[' ']' String
     && lk != 99335                 // Real Imaginary Integer
     && lk != 104882                // '[' ']' Integer
     && lk != 115719                // Real Imaginary Real
     && lk != 121266                // '[' ']' Real
     && lk != 132103                // Real Imaginary Imaginary
     && lk != 137650                // '[' ']' Imaginary
     && lk != 148487                // Real Imaginary Comment
     && lk != 150787                // Identifier '++' Comment
     && lk != 150788                // Character '++' Comment
     && lk != 150789                // String '++' Comment
     && lk != 150790                // Integer '++' Comment
     && lk != 150791                // Real '++' Comment
     && lk != 150792                // Imaginary '++' Comment
     && lk != 151299                // Identifier '--' Comment
     && lk != 151300                // Character '--' Comment
     && lk != 151301                // String '--' Comment
     && lk != 151302                // Integer '--' Comment
     && lk != 151303                // Real '--' Comment
     && lk != 151304                // Imaginary '--' Comment
     && lk != 154034                // '[' ']' Comment
     && lk != 197639                // Real Imaginary '!'
     && lk != 199939                // Identifier '++' '!'
     && lk != 199940                // Character '++' '!'
     && lk != 199941                // String '++' '!'
     && lk != 199942                // Integer '++' '!'
     && lk != 199943                // Real '++' '!'
     && lk != 199944                // Imaginary '++' '!'
     && lk != 200451                // Identifier '--' '!'
     && lk != 200452                // Character '--' '!'
     && lk != 200453                // String '--' '!'
     && lk != 200454                // Integer '--' '!'
     && lk != 200455                // Real '--' '!'
     && lk != 200456                // Imaginary '--' '!'
     && lk != 203186                // '[' ']' '!'
     && lk != 214023                // Real Imaginary '!='
     && lk != 216323                // Identifier '++' '!='
     && lk != 216324                // Character '++' '!='
     && lk != 216325                // String '++' '!='
     && lk != 216326                // Integer '++' '!='
     && lk != 216327                // Real '++' '!='
     && lk != 216328                // Imaginary '++' '!='
     && lk != 216835                // Identifier '--' '!='
     && lk != 216836                // Character '--' '!='
     && lk != 216837                // String '--' '!='
     && lk != 216838                // Integer '--' '!='
     && lk != 216839                // Real '--' '!='
     && lk != 216840                // Imaginary '--' '!='
     && lk != 219570                // '[' ']' '!='
     && lk != 246791                // Real Imaginary '%'
     && lk != 249091                // Identifier '++' '%'
     && lk != 249092                // Character '++' '%'
     && lk != 249093                // String '++' '%'
     && lk != 249094                // Integer '++' '%'
     && lk != 249095                // Real '++' '%'
     && lk != 249096                // Imaginary '++' '%'
     && lk != 249603                // Identifier '--' '%'
     && lk != 249604                // Character '--' '%'
     && lk != 249605                // String '--' '%'
     && lk != 249606                // Integer '--' '%'
     && lk != 249607                // Real '--' '%'
     && lk != 249608                // Imaginary '--' '%'
     && lk != 252338                // '[' ']' '%'
     && lk != 263175                // Real Imaginary '%='
     && lk != 265475                // Identifier '++' '%='
     && lk != 265476                // Character '++' '%='
     && lk != 265477                // String '++' '%='
     && lk != 265478                // Integer '++' '%='
     && lk != 265479                // Real '++' '%='
     && lk != 265480                // Imaginary '++' '%='
     && lk != 265987                // Identifier '--' '%='
     && lk != 265988                // Character '--' '%='
     && lk != 265989                // String '--' '%='
     && lk != 265990                // Integer '--' '%='
     && lk != 265991                // Real '--' '%='
     && lk != 265992                // Imaginary '--' '%='
     && lk != 268722                // '[' ']' '%='
     && lk != 279559                // Real Imaginary '&'
     && lk != 281859                // Identifier '++' '&'
     && lk != 281860                // Character '++' '&'
     && lk != 281861                // String '++' '&'
     && lk != 281862                // Integer '++' '&'
     && lk != 281863                // Real '++' '&'
     && lk != 281864                // Imaginary '++' '&'
     && lk != 282371                // Identifier '--' '&'
     && lk != 282372                // Character '--' '&'
     && lk != 282373                // String '--' '&'
     && lk != 282374                // Integer '--' '&'
     && lk != 282375                // Real '--' '&'
     && lk != 282376                // Imaginary '--' '&'
     && lk != 285106                // '[' ']' '&'
     && lk != 295943                // Real Imaginary '&&'
     && lk != 298243                // Identifier '++' '&&'
     && lk != 298244                // Character '++' '&&'
     && lk != 298245                // String '++' '&&'
     && lk != 298246                // Integer '++' '&&'
     && lk != 298247                // Real '++' '&&'
     && lk != 298248                // Imaginary '++' '&&'
     && lk != 298755                // Identifier '--' '&&'
     && lk != 298756                // Character '--' '&&'
     && lk != 298757                // String '--' '&&'
     && lk != 298758                // Integer '--' '&&'
     && lk != 298759                // Real '--' '&&'
     && lk != 298760                // Imaginary '--' '&&'
     && lk != 301490                // '[' ']' '&&'
     && lk != 312327                // Real Imaginary '&='
     && lk != 314627                // Identifier '++' '&='
     && lk != 314628                // Character '++' '&='
     && lk != 314629                // String '++' '&='
     && lk != 314630                // Integer '++' '&='
     && lk != 314631                // Real '++' '&='
     && lk != 314632                // Imaginary '++' '&='
     && lk != 315139                // Identifier '--' '&='
     && lk != 315140                // Character '--' '&='
     && lk != 315141                // String '--' '&='
     && lk != 315142                // Integer '--' '&='
     && lk != 315143                // Real '--' '&='
     && lk != 315144                // Imaginary '--' '&='
     && lk != 317874                // '[' ']' '&='
     && lk != 328711                // Real Imaginary '('
     && lk != 334258                // '[' ']' '('
     && lk != 345095                // Real Imaginary ')'
     && lk != 347395                // Identifier '++' ')'
     && lk != 347396                // Character '++' ')'
     && lk != 347397                // String '++' ')'
     && lk != 347398                // Integer '++' ')'
     && lk != 347399                // Real '++' ')'
     && lk != 347400                // Imaginary '++' ')'
     && lk != 347907                // Identifier '--' ')'
     && lk != 347908                // Character '--' ')'
     && lk != 347909                // String '--' ')'
     && lk != 347910                // Integer '--' ')'
     && lk != 347911                // Real '--' ')'
     && lk != 347912                // Imaginary '--' ')'
     && lk != 350642                // '[' ']' ')'
     && lk != 361479                // Real Imaginary '*'
     && lk != 363779                // Identifier '++' '*'
     && lk != 363780                // Character '++' '*'
     && lk != 363781                // String '++' '*'
     && lk != 363782                // Integer '++' '*'
     && lk != 363783                // Real '++' '*'
     && lk != 363784                // Imaginary '++' '*'
     && lk != 364291                // Identifier '--' '*'
     && lk != 364292                // Character '--' '*'
     && lk != 364293                // String '--' '*'
     && lk != 364294                // Integer '--' '*'
     && lk != 364295                // Real '--' '*'
     && lk != 364296                // Imaginary '--' '*'
     && lk != 367026                // '[' ']' '*'
     && lk != 377863                // Real Imaginary '**'
     && lk != 380163                // Identifier '++' '**'
     && lk != 380164                // Character '++' '**'
     && lk != 380165                // String '++' '**'
     && lk != 380166                // Integer '++' '**'
     && lk != 380167                // Real '++' '**'
     && lk != 380168                // Imaginary '++' '**'
     && lk != 380675                // Identifier '--' '**'
     && lk != 380676                // Character '--' '**'
     && lk != 380677                // String '--' '**'
     && lk != 380678                // Integer '--' '**'
     && lk != 380679                // Real '--' '**'
     && lk != 380680                // Imaginary '--' '**'
     && lk != 383410                // '[' ']' '**'
     && lk != 394247                // Real Imaginary '*='
     && lk != 396547                // Identifier '++' '*='
     && lk != 396548                // Character '++' '*='
     && lk != 396549                // String '++' '*='
     && lk != 396550                // Integer '++' '*='
     && lk != 396551                // Real '++' '*='
     && lk != 396552                // Imaginary '++' '*='
     && lk != 397059                // Identifier '--' '*='
     && lk != 397060                // Character '--' '*='
     && lk != 397061                // String '--' '*='
     && lk != 397062                // Integer '--' '*='
     && lk != 397063                // Real '--' '*='
     && lk != 397064                // Imaginary '--' '*='
     && lk != 399794                // '[' ']' '*='
     && lk != 410631                // Real Imaginary '+'
     && lk != 412931                // Identifier '++' '+'
     && lk != 412932                // Character '++' '+'
     && lk != 412933                // String '++' '+'
     && lk != 412934                // Integer '++' '+'
     && lk != 412935                // Real '++' '+'
     && lk != 412936                // Imaginary '++' '+'
     && lk != 413443                // Identifier '--' '+'
     && lk != 413444                // Character '--' '+'
     && lk != 413445                // String '--' '+'
     && lk != 413446                // Integer '--' '+'
     && lk != 413447                // Real '--' '+'
     && lk != 413448                // Imaginary '--' '+'
     && lk != 416178                // '[' ']' '+'
     && lk != 429315                // Identifier '++' '++'
     && lk != 429316                // Character '++' '++'
     && lk != 429317                // String '++' '++'
     && lk != 429318                // Integer '++' '++'
     && lk != 429319                // Real '++' '++'
     && lk != 429320                // Imaginary '++' '++'
     && lk != 429827                // Identifier '--' '++'
     && lk != 429828                // Character '--' '++'
     && lk != 429829                // String '--' '++'
     && lk != 429830                // Integer '--' '++'
     && lk != 429831                // Real '--' '++'
     && lk != 429832                // Imaginary '--' '++'
     && lk != 443399                // Real Imaginary '+='
     && lk != 445699                // Identifier '++' '+='
     && lk != 445700                // Character '++' '+='
     && lk != 445701                // String '++' '+='
     && lk != 445702                // Integer '++' '+='
     && lk != 445703                // Real '++' '+='
     && lk != 445704                // Imaginary '++' '+='
     && lk != 446211                // Identifier '--' '+='
     && lk != 446212                // Character '--' '+='
     && lk != 446213                // String '--' '+='
     && lk != 446214                // Integer '--' '+='
     && lk != 446215                // Real '--' '+='
     && lk != 446216                // Imaginary '--' '+='
     && lk != 448946                // '[' ']' '+='
     && lk != 459783                // Real Imaginary ','
     && lk != 462083                // Identifier '++' ','
     && lk != 462084                // Character '++' ','
     && lk != 462085                // String '++' ','
     && lk != 462086                // Integer '++' ','
     && lk != 462087                // Real '++' ','
     && lk != 462088                // Imaginary '++' ','
     && lk != 462595                // Identifier '--' ','
     && lk != 462596                // Character '--' ','
     && lk != 462597                // String '--' ','
     && lk != 462598                // Integer '--' ','
     && lk != 462599                // Real '--' ','
     && lk != 462600                // Imaginary '--' ','
     && lk != 465330                // '[' ']' ','
     && lk != 476167                // Real Imaginary '-'
     && lk != 478467                // Identifier '++' '-'
     && lk != 478468                // Character '++' '-'
     && lk != 478469                // String '++' '-'
     && lk != 478470                // Integer '++' '-'
     && lk != 478471                // Real '++' '-'
     && lk != 478472                // Imaginary '++' '-'
     && lk != 478979                // Identifier '--' '-'
     && lk != 478980                // Character '--' '-'
     && lk != 478981                // String '--' '-'
     && lk != 478982                // Integer '--' '-'
     && lk != 478983                // Real '--' '-'
     && lk != 478984                // Imaginary '--' '-'
     && lk != 481714                // '[' ']' '-'
     && lk != 494851                // Identifier '++' '--'
     && lk != 494852                // Character '++' '--'
     && lk != 494853                // String '++' '--'
     && lk != 494854                // Integer '++' '--'
     && lk != 494855                // Real '++' '--'
     && lk != 494856                // Imaginary '++' '--'
     && lk != 495363                // Identifier '--' '--'
     && lk != 495364                // Character '--' '--'
     && lk != 495365                // String '--' '--'
     && lk != 495366                // Integer '--' '--'
     && lk != 495367                // Real '--' '--'
     && lk != 495368                // Imaginary '--' '--'
     && lk != 508935                // Real Imaginary '-='
     && lk != 511235                // Identifier '++' '-='
     && lk != 511236                // Character '++' '-='
     && lk != 511237                // String '++' '-='
     && lk != 511238                // Integer '++' '-='
     && lk != 511239                // Real '++' '-='
     && lk != 511240                // Imaginary '++' '-='
     && lk != 511747                // Identifier '--' '-='
     && lk != 511748                // Character '--' '-='
     && lk != 511749                // String '--' '-='
     && lk != 511750                // Integer '--' '-='
     && lk != 511751                // Real '--' '-='
     && lk != 511752                // Imaginary '--' '-='
     && lk != 514482                // '[' ']' '-='
     && lk != 541703                // Real Imaginary '/'
     && lk != 544003                // Identifier '++' '/'
     && lk != 544004                // Character '++' '/'
     && lk != 544005                // String '++' '/'
     && lk != 544006                // Integer '++' '/'
     && lk != 544007                // Real '++' '/'
     && lk != 544008                // Imaginary '++' '/'
     && lk != 544515                // Identifier '--' '/'
     && lk != 544516                // Character '--' '/'
     && lk != 544517                // String '--' '/'
     && lk != 544518                // Integer '--' '/'
     && lk != 544519                // Real '--' '/'
     && lk != 544520                // Imaginary '--' '/'
     && lk != 547250                // '[' ']' '/'
     && lk != 558087                // Real Imaginary '/='
     && lk != 560387                // Identifier '++' '/='
     && lk != 560388                // Character '++' '/='
     && lk != 560389                // String '++' '/='
     && lk != 560390                // Integer '++' '/='
     && lk != 560391                // Real '++' '/='
     && lk != 560392                // Imaginary '++' '/='
     && lk != 560899                // Identifier '--' '/='
     && lk != 560900                // Character '--' '/='
     && lk != 560901                // String '--' '/='
     && lk != 560902                // Integer '--' '/='
     && lk != 560903                // Real '--' '/='
     && lk != 560904                // Imaginary '--' '/='
     && lk != 563634                // '[' ']' '/='
     && lk != 574471                // Real Imaginary ':'
     && lk != 576771                // Identifier '++' ':'
     && lk != 576772                // Character '++' ':'
     && lk != 576773                // String '++' ':'
     && lk != 576774                // Integer '++' ':'
     && lk != 576775                // Real '++' ':'
     && lk != 576776                // Imaginary '++' ':'
     && lk != 577283                // Identifier '--' ':'
     && lk != 577284                // Character '--' ':'
     && lk != 577285                // String '--' ':'
     && lk != 577286                // Integer '--' ':'
     && lk != 577287                // Real '--' ':'
     && lk != 577288                // Imaginary '--' ':'
     && lk != 580018                // '[' ']' ':'
     && lk != 590855                // Real Imaginary ':='
     && lk != 593155                // Identifier '++' ':='
     && lk != 593156                // Character '++' ':='
     && lk != 593157                // String '++' ':='
     && lk != 593158                // Integer '++' ':='
     && lk != 593159                // Real '++' ':='
     && lk != 593160                // Imaginary '++' ':='
     && lk != 593667                // Identifier '--' ':='
     && lk != 593668                // Character '--' ':='
     && lk != 593669                // String '--' ':='
     && lk != 593670                // Integer '--' ':='
     && lk != 593671                // Real '--' ':='
     && lk != 593672                // Imaginary '--' ':='
     && lk != 596402                // '[' ']' ':='
     && lk != 607239                // Real Imaginary ';'
     && lk != 609539                // Identifier '++' ';'
     && lk != 609540                // Character '++' ';'
     && lk != 609541                // String '++' ';'
     && lk != 609542                // Integer '++' ';'
     && lk != 609543                // Real '++' ';'
     && lk != 609544                // Imaginary '++' ';'
     && lk != 610051                // Identifier '--' ';'
     && lk != 610052                // Character '--' ';'
     && lk != 610053                // String '--' ';'
     && lk != 610054                // Integer '--' ';'
     && lk != 610055                // Real '--' ';'
     && lk != 610056                // Imaginary '--' ';'
     && lk != 612786                // '[' ']' ';'
     && lk != 623623                // Real Imaginary '<'
     && lk != 625923                // Identifier '++' '<'
     && lk != 625924                // Character '++' '<'
     && lk != 625925                // String '++' '<'
     && lk != 625926                // Integer '++' '<'
     && lk != 625927                // Real '++' '<'
     && lk != 625928                // Imaginary '++' '<'
     && lk != 626435                // Identifier '--' '<'
     && lk != 626436                // Character '--' '<'
     && lk != 626437                // String '--' '<'
     && lk != 626438                // Integer '--' '<'
     && lk != 626439                // Real '--' '<'
     && lk != 626440                // Imaginary '--' '<'
     && lk != 629170                // '[' ']' '<'
     && lk != 640007                // Real Imaginary '<<'
     && lk != 642307                // Identifier '++' '<<'
     && lk != 642308                // Character '++' '<<'
     && lk != 642309                // String '++' '<<'
     && lk != 642310                // Integer '++' '<<'
     && lk != 642311                // Real '++' '<<'
     && lk != 642312                // Imaginary '++' '<<'
     && lk != 642819                // Identifier '--' '<<'
     && lk != 642820                // Character '--' '<<'
     && lk != 642821                // String '--' '<<'
     && lk != 642822                // Integer '--' '<<'
     && lk != 642823                // Real '--' '<<'
     && lk != 642824                // Imaginary '--' '<<'
     && lk != 645554                // '[' ']' '<<'
     && lk != 656391                // Real Imaginary '<<='
     && lk != 658691                // Identifier '++' '<<='
     && lk != 658692                // Character '++' '<<='
     && lk != 658693                // String '++' '<<='
     && lk != 658694                // Integer '++' '<<='
     && lk != 658695                // Real '++' '<<='
     && lk != 658696                // Imaginary '++' '<<='
     && lk != 659203                // Identifier '--' '<<='
     && lk != 659204                // Character '--' '<<='
     && lk != 659205                // String '--' '<<='
     && lk != 659206                // Integer '--' '<<='
     && lk != 659207                // Real '--' '<<='
     && lk != 659208                // Imaginary '--' '<<='
     && lk != 661938                // '[' ']' '<<='
     && lk != 672775                // Real Imaginary '<='
     && lk != 675075                // Identifier '++' '<='
     && lk != 675076                // Character '++' '<='
     && lk != 675077                // String '++' '<='
     && lk != 675078                // Integer '++' '<='
     && lk != 675079                // Real '++' '<='
     && lk != 675080                // Imaginary '++' '<='
     && lk != 675587                // Identifier '--' '<='
     && lk != 675588                // Character '--' '<='
     && lk != 675589                // String '--' '<='
     && lk != 675590                // Integer '--' '<='
     && lk != 675591                // Real '--' '<='
     && lk != 675592                // Imaginary '--' '<='
     && lk != 678322                // '[' ']' '<='
     && lk != 689159                // Real Imaginary '='
     && lk != 691459                // Identifier '++' '='
     && lk != 691460                // Character '++' '='
     && lk != 691461                // String '++' '='
     && lk != 691462                // Integer '++' '='
     && lk != 691463                // Real '++' '='
     && lk != 691464                // Imaginary '++' '='
     && lk != 691971                // Identifier '--' '='
     && lk != 691972                // Character '--' '='
     && lk != 691973                // String '--' '='
     && lk != 691974                // Integer '--' '='
     && lk != 691975                // Real '--' '='
     && lk != 691976                // Imaginary '--' '='
     && lk != 694706                // '[' ']' '='
     && lk != 705543                // Real Imaginary '=='
     && lk != 707843                // Identifier '++' '=='
     && lk != 707844                // Character '++' '=='
     && lk != 707845                // String '++' '=='
     && lk != 707846                // Integer '++' '=='
     && lk != 707847                // Real '++' '=='
     && lk != 707848                // Imaginary '++' '=='
     && lk != 708355                // Identifier '--' '=='
     && lk != 708356                // Character '--' '=='
     && lk != 708357                // String '--' '=='
     && lk != 708358                // Integer '--' '=='
     && lk != 708359                // Real '--' '=='
     && lk != 708360                // Imaginary '--' '=='
     && lk != 711090                // '[' ']' '=='
     && lk != 721927                // Real Imaginary '>'
     && lk != 724227                // Identifier '++' '>'
     && lk != 724228                // Character '++' '>'
     && lk != 724229                // String '++' '>'
     && lk != 724230                // Integer '++' '>'
     && lk != 724231                // Real '++' '>'
     && lk != 724232                // Imaginary '++' '>'
     && lk != 724739                // Identifier '--' '>'
     && lk != 724740                // Character '--' '>'
     && lk != 724741                // String '--' '>'
     && lk != 724742                // Integer '--' '>'
     && lk != 724743                // Real '--' '>'
     && lk != 724744                // Imaginary '--' '>'
     && lk != 727474                // '[' ']' '>'
     && lk != 738311                // Real Imaginary '>='
     && lk != 740611                // Identifier '++' '>='
     && lk != 740612                // Character '++' '>='
     && lk != 740613                // String '++' '>='
     && lk != 740614                // Integer '++' '>='
     && lk != 740615                // Real '++' '>='
     && lk != 740616                // Imaginary '++' '>='
     && lk != 741123                // Identifier '--' '>='
     && lk != 741124                // Character '--' '>='
     && lk != 741125                // String '--' '>='
     && lk != 741126                // Integer '--' '>='
     && lk != 741127                // Real '--' '>='
     && lk != 741128                // Imaginary '--' '>='
     && lk != 743858                // '[' ']' '>='
     && lk != 754695                // Real Imaginary '>>'
     && lk != 756995                // Identifier '++' '>>'
     && lk != 756996                // Character '++' '>>'
     && lk != 756997                // String '++' '>>'
     && lk != 756998                // Integer '++' '>>'
     && lk != 756999                // Real '++' '>>'
     && lk != 757000                // Imaginary '++' '>>'
     && lk != 757507                // Identifier '--' '>>'
     && lk != 757508                // Character '--' '>>'
     && lk != 757509                // String '--' '>>'
     && lk != 757510                // Integer '--' '>>'
     && lk != 757511                // Real '--' '>>'
     && lk != 757512                // Imaginary '--' '>>'
     && lk != 760242                // '[' ']' '>>'
     && lk != 771079                // Real Imaginary '>>='
     && lk != 773379                // Identifier '++' '>>='
     && lk != 773380                // Character '++' '>>='
     && lk != 773381                // String '++' '>>='
     && lk != 773382                // Integer '++' '>>='
     && lk != 773383                // Real '++' '>>='
     && lk != 773384                // Imaginary '++' '>>='
     && lk != 773891                // Identifier '--' '>>='
     && lk != 773892                // Character '--' '>>='
     && lk != 773893                // String '--' '>>='
     && lk != 773894                // Integer '--' '>>='
     && lk != 773895                // Real '--' '>>='
     && lk != 773896                // Imaginary '--' '>>='
     && lk != 776626                // '[' ']' '>>='
     && lk != 787463                // Real Imaginary '?'
     && lk != 789763                // Identifier '++' '?'
     && lk != 789764                // Character '++' '?'
     && lk != 789765                // String '++' '?'
     && lk != 789766                // Integer '++' '?'
     && lk != 789767                // Real '++' '?'
     && lk != 789768                // Imaginary '++' '?'
     && lk != 790275                // Identifier '--' '?'
     && lk != 790276                // Character '--' '?'
     && lk != 790277                // String '--' '?'
     && lk != 790278                // Integer '--' '?'
     && lk != 790279                // Real '--' '?'
     && lk != 790280                // Imaginary '--' '?'
     && lk != 793010                // '[' ']' '?'
     && lk != 803847                // Real Imaginary '?='
     && lk != 806147                // Identifier '++' '?='
     && lk != 806148                // Character '++' '?='
     && lk != 806149                // String '++' '?='
     && lk != 806150                // Integer '++' '?='
     && lk != 806151                // Real '++' '?='
     && lk != 806152                // Imaginary '++' '?='
     && lk != 806659                // Identifier '--' '?='
     && lk != 806660                // Character '--' '?='
     && lk != 806661                // String '--' '?='
     && lk != 806662                // Integer '--' '?='
     && lk != 806663                // Real '--' '?='
     && lk != 806664                // Imaginary '--' '?='
     && lk != 809394                // '[' ']' '?='
     && lk != 820231                // Real Imaginary '['
     && lk != 825778                // '[' ']' '['
     && lk != 836615                // Real Imaginary ']'
     && lk != 838915                // Identifier '++' ']'
     && lk != 838916                // Character '++' ']'
     && lk != 838917                // String '++' ']'
     && lk != 838918                // Integer '++' ']'
     && lk != 838919                // Real '++' ']'
     && lk != 838920                // Imaginary '++' ']'
     && lk != 839427                // Identifier '--' ']'
     && lk != 839428                // Character '--' ']'
     && lk != 839429                // String '--' ']'
     && lk != 839430                // Integer '--' ']'
     && lk != 839431                // Real '--' ']'
     && lk != 839432                // Imaginary '--' ']'
     && lk != 842162                // '[' ']' ']'
     && lk != 852999                // Real Imaginary '^'
     && lk != 855299                // Identifier '++' '^'
     && lk != 855300                // Character '++' '^'
     && lk != 855301                // String '++' '^'
     && lk != 855302                // Integer '++' '^'
     && lk != 855303                // Real '++' '^'
     && lk != 855304                // Imaginary '++' '^'
     && lk != 855811                // Identifier '--' '^'
     && lk != 855812                // Character '--' '^'
     && lk != 855813                // String '--' '^'
     && lk != 855814                // Integer '--' '^'
     && lk != 855815                // Real '--' '^'
     && lk != 855816                // Imaginary '--' '^'
     && lk != 858546                // '[' ']' '^'
     && lk != 869383                // Real Imaginary '^='
     && lk != 871683                // Identifier '++' '^='
     && lk != 871684                // Character '++' '^='
     && lk != 871685                // String '++' '^='
     && lk != 871686                // Integer '++' '^='
     && lk != 871687                // Real '++' '^='
     && lk != 871688                // Imaginary '++' '^='
     && lk != 872195                // Identifier '--' '^='
     && lk != 872196                // Character '--' '^='
     && lk != 872197                // String '--' '^='
     && lk != 872198                // Integer '--' '^='
     && lk != 872199                // Real '--' '^='
     && lk != 872200                // Imaginary '--' '^='
     && lk != 874930                // '[' ']' '^='
     && lk != 885767                // Real Imaginary 'break'
     && lk != 888067                // Identifier '++' 'break'
     && lk != 888068                // Character '++' 'break'
     && lk != 888069                // String '++' 'break'
     && lk != 888070                // Integer '++' 'break'
     && lk != 888071                // Real '++' 'break'
     && lk != 888072                // Imaginary '++' 'break'
     && lk != 888579                // Identifier '--' 'break'
     && lk != 888580                // Character '--' 'break'
     && lk != 888581                // String '--' 'break'
     && lk != 888582                // Integer '--' 'break'
     && lk != 888583                // Real '--' 'break'
     && lk != 888584                // Imaginary '--' 'break'
     && lk != 891314                // '[' ']' 'break'
     && lk != 902151                // Real Imaginary 'case'
     && lk != 904451                // Identifier '++' 'case'
     && lk != 904452                // Character '++' 'case'
     && lk != 904453                // String '++' 'case'
     && lk != 904454                // Integer '++' 'case'
     && lk != 904455                // Real '++' 'case'
     && lk != 904456                // Imaginary '++' 'case'
     && lk != 904963                // Identifier '--' 'case'
     && lk != 904964                // Character '--' 'case'
     && lk != 904965                // String '--' 'case'
     && lk != 904966                // Integer '--' 'case'
     && lk != 904967                // Real '--' 'case'
     && lk != 904968                // Imaginary '--' 'case'
     && lk != 907698                // '[' ']' 'case'
     && lk != 918535                // Real Imaginary 'catch'
     && lk != 920835                // Identifier '++' 'catch'
     && lk != 920836                // Character '++' 'catch'
     && lk != 920837                // String '++' 'catch'
     && lk != 920838                // Integer '++' 'catch'
     && lk != 920839                // Real '++' 'catch'
     && lk != 920840                // Imaginary '++' 'catch'
     && lk != 921347                // Identifier '--' 'catch'
     && lk != 921348                // Character '--' 'catch'
     && lk != 921349                // String '--' 'catch'
     && lk != 921350                // Integer '--' 'catch'
     && lk != 921351                // Real '--' 'catch'
     && lk != 921352                // Imaginary '--' 'catch'
     && lk != 924082                // '[' ']' 'catch'
     && lk != 934919                // Real Imaginary 'continue'
     && lk != 937219                // Identifier '++' 'continue'
     && lk != 937220                // Character '++' 'continue'
     && lk != 937221                // String '++' 'continue'
     && lk != 937222                // Integer '++' 'continue'
     && lk != 937223                // Real '++' 'continue'
     && lk != 937224                // Imaginary '++' 'continue'
     && lk != 937731                // Identifier '--' 'continue'
     && lk != 937732                // Character '--' 'continue'
     && lk != 937733                // String '--' 'continue'
     && lk != 937734                // Integer '--' 'continue'
     && lk != 937735                // Real '--' 'continue'
     && lk != 937736                // Imaginary '--' 'continue'
     && lk != 940466                // '[' ']' 'continue'
     && lk != 951303                // Real Imaginary 'default'
     && lk != 953603                // Identifier '++' 'default'
     && lk != 953604                // Character '++' 'default'
     && lk != 953605                // String '++' 'default'
     && lk != 953606                // Integer '++' 'default'
     && lk != 953607                // Real '++' 'default'
     && lk != 953608                // Imaginary '++' 'default'
     && lk != 954115                // Identifier '--' 'default'
     && lk != 954116                // Character '--' 'default'
     && lk != 954117                // String '--' 'default'
     && lk != 954118                // Integer '--' 'default'
     && lk != 954119                // Real '--' 'default'
     && lk != 954120                // Imaginary '--' 'default'
     && lk != 956850                // '[' ']' 'default'
     && lk != 967687                // Real Imaginary 'do'
     && lk != 969987                // Identifier '++' 'do'
     && lk != 969988                // Character '++' 'do'
     && lk != 969989                // String '++' 'do'
     && lk != 969990                // Integer '++' 'do'
     && lk != 969991                // Real '++' 'do'
     && lk != 969992                // Imaginary '++' 'do'
     && lk != 970499                // Identifier '--' 'do'
     && lk != 970500                // Character '--' 'do'
     && lk != 970501                // String '--' 'do'
     && lk != 970502                // Integer '--' 'do'
     && lk != 970503                // Real '--' 'do'
     && lk != 970504                // Imaginary '--' 'do'
     && lk != 973234                // '[' ']' 'do'
     && lk != 984071                // Real Imaginary 'else'
     && lk != 986371                // Identifier '++' 'else'
     && lk != 986372                // Character '++' 'else'
     && lk != 986373                // String '++' 'else'
     && lk != 986374                // Integer '++' 'else'
     && lk != 986375                // Real '++' 'else'
     && lk != 986376                // Imaginary '++' 'else'
     && lk != 986883                // Identifier '--' 'else'
     && lk != 986884                // Character '--' 'else'
     && lk != 986885                // String '--' 'else'
     && lk != 986886                // Integer '--' 'else'
     && lk != 986887                // Real '--' 'else'
     && lk != 986888                // Imaginary '--' 'else'
     && lk != 989618                // '[' ']' 'else'
     && lk != 1000455               // Real Imaginary 'f32'
     && lk != 1002755               // Identifier '++' 'f32'
     && lk != 1002756               // Character '++' 'f32'
     && lk != 1002757               // String '++' 'f32'
     && lk != 1002758               // Integer '++' 'f32'
     && lk != 1002759               // Real '++' 'f32'
     && lk != 1002760               // Imaginary '++' 'f32'
     && lk != 1003267               // Identifier '--' 'f32'
     && lk != 1003268               // Character '--' 'f32'
     && lk != 1003269               // String '--' 'f32'
     && lk != 1003270               // Integer '--' 'f32'
     && lk != 1003271               // Real '--' 'f32'
     && lk != 1003272               // Imaginary '--' 'f32'
     && lk != 1006002               // '[' ']' 'f32'
     && lk != 1016839               // Real Imaginary 'f64'
     && lk != 1019139               // Identifier '++' 'f64'
     && lk != 1019140               // Character '++' 'f64'
     && lk != 1019141               // String '++' 'f64'
     && lk != 1019142               // Integer '++' 'f64'
     && lk != 1019143               // Real '++' 'f64'
     && lk != 1019144               // Imaginary '++' 'f64'
     && lk != 1019651               // Identifier '--' 'f64'
     && lk != 1019652               // Character '--' 'f64'
     && lk != 1019653               // String '--' 'f64'
     && lk != 1019654               // Integer '--' 'f64'
     && lk != 1019655               // Real '--' 'f64'
     && lk != 1019656               // Imaginary '--' 'f64'
     && lk != 1022386               // '[' ']' 'f64'
     && lk != 1033223               // Real Imaginary 'for'
     && lk != 1035523               // Identifier '++' 'for'
     && lk != 1035524               // Character '++' 'for'
     && lk != 1035525               // String '++' 'for'
     && lk != 1035526               // Integer '++' 'for'
     && lk != 1035527               // Real '++' 'for'
     && lk != 1035528               // Imaginary '++' 'for'
     && lk != 1036035               // Identifier '--' 'for'
     && lk != 1036036               // Character '--' 'for'
     && lk != 1036037               // String '--' 'for'
     && lk != 1036038               // Integer '--' 'for'
     && lk != 1036039               // Real '--' 'for'
     && lk != 1036040               // Imaginary '--' 'for'
     && lk != 1038770               // '[' ']' 'for'
     && lk != 1049607               // Real Imaginary 'foreach'
     && lk != 1051907               // Identifier '++' 'foreach'
     && lk != 1051908               // Character '++' 'foreach'
     && lk != 1051909               // String '++' 'foreach'
     && lk != 1051910               // Integer '++' 'foreach'
     && lk != 1051911               // Real '++' 'foreach'
     && lk != 1051912               // Imaginary '++' 'foreach'
     && lk != 1052419               // Identifier '--' 'foreach'
     && lk != 1052420               // Character '--' 'foreach'
     && lk != 1052421               // String '--' 'foreach'
     && lk != 1052422               // Integer '--' 'foreach'
     && lk != 1052423               // Real '--' 'foreach'
     && lk != 1052424               // Imaginary '--' 'foreach'
     && lk != 1055154               // '[' ']' 'foreach'
     && lk != 1065991               // Real Imaginary 'i32'
     && lk != 1068291               // Identifier '++' 'i32'
     && lk != 1068292               // Character '++' 'i32'
     && lk != 1068293               // String '++' 'i32'
     && lk != 1068294               // Integer '++' 'i32'
     && lk != 1068295               // Real '++' 'i32'
     && lk != 1068296               // Imaginary '++' 'i32'
     && lk != 1068803               // Identifier '--' 'i32'
     && lk != 1068804               // Character '--' 'i32'
     && lk != 1068805               // String '--' 'i32'
     && lk != 1068806               // Integer '--' 'i32'
     && lk != 1068807               // Real '--' 'i32'
     && lk != 1068808               // Imaginary '--' 'i32'
     && lk != 1071538               // '[' ']' 'i32'
     && lk != 1082375               // Real Imaginary 'i64'
     && lk != 1084675               // Identifier '++' 'i64'
     && lk != 1084676               // Character '++' 'i64'
     && lk != 1084677               // String '++' 'i64'
     && lk != 1084678               // Integer '++' 'i64'
     && lk != 1084679               // Real '++' 'i64'
     && lk != 1084680               // Imaginary '++' 'i64'
     && lk != 1085187               // Identifier '--' 'i64'
     && lk != 1085188               // Character '--' 'i64'
     && lk != 1085189               // String '--' 'i64'
     && lk != 1085190               // Integer '--' 'i64'
     && lk != 1085191               // Real '--' 'i64'
     && lk != 1085192               // Imaginary '--' 'i64'
     && lk != 1087922               // '[' ']' 'i64'
     && lk != 1098759               // Real Imaginary 'if'
     && lk != 1101059               // Identifier '++' 'if'
     && lk != 1101060               // Character '++' 'if'
     && lk != 1101061               // String '++' 'if'
     && lk != 1101062               // Integer '++' 'if'
     && lk != 1101063               // Real '++' 'if'
     && lk != 1101064               // Imaginary '++' 'if'
     && lk != 1101571               // Identifier '--' 'if'
     && lk != 1101572               // Character '--' 'if'
     && lk != 1101573               // String '--' 'if'
     && lk != 1101574               // Integer '--' 'if'
     && lk != 1101575               // Real '--' 'if'
     && lk != 1101576               // Imaginary '--' 'if'
     && lk != 1104306               // '[' ']' 'if'
     && lk != 1115143               // Real Imaginary 'return'
     && lk != 1117443               // Identifier '++' 'return'
     && lk != 1117444               // Character '++' 'return'
     && lk != 1117445               // String '++' 'return'
     && lk != 1117446               // Integer '++' 'return'
     && lk != 1117447               // Real '++' 'return'
     && lk != 1117448               // Imaginary '++' 'return'
     && lk != 1117955               // Identifier '--' 'return'
     && lk != 1117956               // Character '--' 'return'
     && lk != 1117957               // String '--' 'return'
     && lk != 1117958               // Integer '--' 'return'
     && lk != 1117959               // Real '--' 'return'
     && lk != 1117960               // Imaginary '--' 'return'
     && lk != 1120690               // '[' ']' 'return'
     && lk != 1131527               // Real Imaginary 'switch'
     && lk != 1133827               // Identifier '++' 'switch'
     && lk != 1133828               // Character '++' 'switch'
     && lk != 1133829               // String '++' 'switch'
     && lk != 1133830               // Integer '++' 'switch'
     && lk != 1133831               // Real '++' 'switch'
     && lk != 1133832               // Imaginary '++' 'switch'
     && lk != 1134339               // Identifier '--' 'switch'
     && lk != 1134340               // Character '--' 'switch'
     && lk != 1134341               // String '--' 'switch'
     && lk != 1134342               // Integer '--' 'switch'
     && lk != 1134343               // Real '--' 'switch'
     && lk != 1134344               // Imaginary '--' 'switch'
     && lk != 1137074               // '[' ']' 'switch'
     && lk != 1147911               // Real Imaginary 'test'
     && lk != 1150211               // Identifier '++' 'test'
     && lk != 1150212               // Character '++' 'test'
     && lk != 1150213               // String '++' 'test'
     && lk != 1150214               // Integer '++' 'test'
     && lk != 1150215               // Real '++' 'test'
     && lk != 1150216               // Imaginary '++' 'test'
     && lk != 1150723               // Identifier '--' 'test'
     && lk != 1150724               // Character '--' 'test'
     && lk != 1150725               // String '--' 'test'
     && lk != 1150726               // Integer '--' 'test'
     && lk != 1150727               // Real '--' 'test'
     && lk != 1150728               // Imaginary '--' 'test'
     && lk != 1153458               // '[' ']' 'test'
     && lk != 1164295               // Real Imaginary 'try'
     && lk != 1166595               // Identifier '++' 'try'
     && lk != 1166596               // Character '++' 'try'
     && lk != 1166597               // String '++' 'try'
     && lk != 1166598               // Integer '++' 'try'
     && lk != 1166599               // Real '++' 'try'
     && lk != 1166600               // Imaginary '++' 'try'
     && lk != 1167107               // Identifier '--' 'try'
     && lk != 1167108               // Character '--' 'try'
     && lk != 1167109               // String '--' 'try'
     && lk != 1167110               // Integer '--' 'try'
     && lk != 1167111               // Real '--' 'try'
     && lk != 1167112               // Imaginary '--' 'try'
     && lk != 1169842               // '[' ']' 'try'
     && lk != 1180679               // Real Imaginary 'while'
     && lk != 1182979               // Identifier '++' 'while'
     && lk != 1182980               // Character '++' 'while'
     && lk != 1182981               // String '++' 'while'
     && lk != 1182982               // Integer '++' 'while'
     && lk != 1182983               // Real '++' 'while'
     && lk != 1182984               // Imaginary '++' 'while'
     && lk != 1183491               // Identifier '--' 'while'
     && lk != 1183492               // Character '--' 'while'
     && lk != 1183493               // String '--' 'while'
     && lk != 1183494               // Integer '--' 'while'
     && lk != 1183495               // Real '--' 'while'
     && lk != 1183496               // Imaginary '--' 'while'
     && lk != 1186226               // '[' ']' 'while'
     && lk != 1197063               // Real Imaginary '{'
     && lk != 1202610               // '[' ']' '{'
     && lk != 1213447               // Real Imaginary '|'
     && lk != 1215747               // Identifier '++' '|'
     && lk != 1215748               // Character '++' '|'
     && lk != 1215749               // String '++' '|'
     && lk != 1215750               // Integer '++' '|'
     && lk != 1215751               // Real '++' '|'
     && lk != 1215752               // Imaginary '++' '|'
     && lk != 1216259               // Identifier '--' '|'
     && lk != 1216260               // Character '--' '|'
     && lk != 1216261               // String '--' '|'
     && lk != 1216262               // Integer '--' '|'
     && lk != 1216263               // Real '--' '|'
     && lk != 1216264               // Imaginary '--' '|'
     && lk != 1218994               // '[' ']' '|'
     && lk != 1229831               // Real Imaginary '|='
     && lk != 1232131               // Identifier '++' '|='
     && lk != 1232132               // Character '++' '|='
     && lk != 1232133               // String '++' '|='
     && lk != 1232134               // Integer '++' '|='
     && lk != 1232135               // Real '++' '|='
     && lk != 1232136               // Imaginary '++' '|='
     && lk != 1232643               // Identifier '--' '|='
     && lk != 1232644               // Character '--' '|='
     && lk != 1232645               // String '--' '|='
     && lk != 1232646               // Integer '--' '|='
     && lk != 1232647               // Real '--' '|='
     && lk != 1232648               // Imaginary '--' '|='
     && lk != 1235378               // '[' ']' '|='
     && lk != 1246215               // Real Imaginary '||'
     && lk != 1248515               // Identifier '++' '||'
     && lk != 1248516               // Character '++' '||'
     && lk != 1248517               // String '++' '||'
     && lk != 1248518               // Integer '++' '||'
     && lk != 1248519               // Real '++' '||'
     && lk != 1248520               // Imaginary '++' '||'
     && lk != 1249027               // Identifier '--' '||'
     && lk != 1249028               // Character '--' '||'
     && lk != 1249029               // String '--' '||'
     && lk != 1249030               // Integer '--' '||'
     && lk != 1249031               // Real '--' '||'
     && lk != 1249032               // Imaginary '--' '||'
     && lk != 1251762               // '[' ']' '||'
     && lk != 1262599               // Real Imaginary '}'
     && lk != 1264899               // Identifier '++' '}'
     && lk != 1264900               // Character '++' '}'
     && lk != 1264901               // String '++' '}'
     && lk != 1264902               // Integer '++' '}'
     && lk != 1264903               // Real '++' '}'
     && lk != 1264904               // Imaginary '++' '}'
     && lk != 1265411               // Identifier '--' '}'
     && lk != 1265412               // Character '--' '}'
     && lk != 1265413               // String '--' '}'
     && lk != 1265414               // Integer '--' '}'
     && lk != 1265415               // Real '--' '}'
     && lk != 1265416               // Imaginary '--' '}'
     && lk != 1268146               // '[' ']' '}'
     && lk != 1278983               // Real Imaginary '~'
     && lk != 1281283               // Identifier '++' '~'
     && lk != 1281284               // Character '++' '~'
     && lk != 1281285               // String '++' '~'
     && lk != 1281286               // Integer '++' '~'
     && lk != 1281287               // Real '++' '~'
     && lk != 1281288               // Imaginary '++' '~'
     && lk != 1281795               // Identifier '--' '~'
     && lk != 1281796               // Character '--' '~'
     && lk != 1281797               // String '--' '~'
     && lk != 1281798               // Integer '--' '~'
     && lk != 1281799               // Real '--' '~'
     && lk != 1281800               // Imaginary '--' '~'
     && lk != 1284530)              // '[' ']' '~'
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
            lookahead1W(6);         // WhiteSpace^token | '++'
            consumeT(26);           // '++'
            memoize(3, e0A, -2);
            lk = -10;
          }
          catch (p2A)
          {
            lk = -3;
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(3, e0A, -3);
          }
        }
      }
    }
    switch (lk)
    {
    case -2:
    case 19715:                     // Identifier '++' END
    case 19716:                     // Character '++' END
    case 19717:                     // String '++' END
    case 19718:                     // Integer '++' END
    case 19719:                     // Real '++' END
    case 19720:                     // Imaginary '++' END
    case 150787:                    // Identifier '++' Comment
    case 150788:                    // Character '++' Comment
    case 150789:                    // String '++' Comment
    case 150790:                    // Integer '++' Comment
    case 150791:                    // Real '++' Comment
    case 150792:                    // Imaginary '++' Comment
    case 199939:                    // Identifier '++' '!'
    case 199940:                    // Character '++' '!'
    case 199941:                    // String '++' '!'
    case 199942:                    // Integer '++' '!'
    case 199943:                    // Real '++' '!'
    case 199944:                    // Imaginary '++' '!'
    case 216323:                    // Identifier '++' '!='
    case 216324:                    // Character '++' '!='
    case 216325:                    // String '++' '!='
    case 216326:                    // Integer '++' '!='
    case 216327:                    // Real '++' '!='
    case 216328:                    // Imaginary '++' '!='
    case 249091:                    // Identifier '++' '%'
    case 249092:                    // Character '++' '%'
    case 249093:                    // String '++' '%'
    case 249094:                    // Integer '++' '%'
    case 249095:                    // Real '++' '%'
    case 249096:                    // Imaginary '++' '%'
    case 265475:                    // Identifier '++' '%='
    case 265476:                    // Character '++' '%='
    case 265477:                    // String '++' '%='
    case 265478:                    // Integer '++' '%='
    case 265479:                    // Real '++' '%='
    case 265480:                    // Imaginary '++' '%='
    case 281859:                    // Identifier '++' '&'
    case 281860:                    // Character '++' '&'
    case 281861:                    // String '++' '&'
    case 281862:                    // Integer '++' '&'
    case 281863:                    // Real '++' '&'
    case 281864:                    // Imaginary '++' '&'
    case 298243:                    // Identifier '++' '&&'
    case 298244:                    // Character '++' '&&'
    case 298245:                    // String '++' '&&'
    case 298246:                    // Integer '++' '&&'
    case 298247:                    // Real '++' '&&'
    case 298248:                    // Imaginary '++' '&&'
    case 314627:                    // Identifier '++' '&='
    case 314628:                    // Character '++' '&='
    case 314629:                    // String '++' '&='
    case 314630:                    // Integer '++' '&='
    case 314631:                    // Real '++' '&='
    case 314632:                    // Imaginary '++' '&='
    case 347395:                    // Identifier '++' ')'
    case 347396:                    // Character '++' ')'
    case 347397:                    // String '++' ')'
    case 347398:                    // Integer '++' ')'
    case 347399:                    // Real '++' ')'
    case 347400:                    // Imaginary '++' ')'
    case 363779:                    // Identifier '++' '*'
    case 363780:                    // Character '++' '*'
    case 363781:                    // String '++' '*'
    case 363782:                    // Integer '++' '*'
    case 363783:                    // Real '++' '*'
    case 363784:                    // Imaginary '++' '*'
    case 380163:                    // Identifier '++' '**'
    case 380164:                    // Character '++' '**'
    case 380165:                    // String '++' '**'
    case 380166:                    // Integer '++' '**'
    case 380167:                    // Real '++' '**'
    case 380168:                    // Imaginary '++' '**'
    case 396547:                    // Identifier '++' '*='
    case 396548:                    // Character '++' '*='
    case 396549:                    // String '++' '*='
    case 396550:                    // Integer '++' '*='
    case 396551:                    // Real '++' '*='
    case 396552:                    // Imaginary '++' '*='
    case 412931:                    // Identifier '++' '+'
    case 412932:                    // Character '++' '+'
    case 412933:                    // String '++' '+'
    case 412934:                    // Integer '++' '+'
    case 412935:                    // Real '++' '+'
    case 412936:                    // Imaginary '++' '+'
    case 429315:                    // Identifier '++' '++'
    case 429316:                    // Character '++' '++'
    case 429317:                    // String '++' '++'
    case 429318:                    // Integer '++' '++'
    case 429319:                    // Real '++' '++'
    case 429320:                    // Imaginary '++' '++'
    case 445699:                    // Identifier '++' '+='
    case 445700:                    // Character '++' '+='
    case 445701:                    // String '++' '+='
    case 445702:                    // Integer '++' '+='
    case 445703:                    // Real '++' '+='
    case 445704:                    // Imaginary '++' '+='
    case 462083:                    // Identifier '++' ','
    case 462084:                    // Character '++' ','
    case 462085:                    // String '++' ','
    case 462086:                    // Integer '++' ','
    case 462087:                    // Real '++' ','
    case 462088:                    // Imaginary '++' ','
    case 478467:                    // Identifier '++' '-'
    case 478468:                    // Character '++' '-'
    case 478469:                    // String '++' '-'
    case 478470:                    // Integer '++' '-'
    case 478471:                    // Real '++' '-'
    case 478472:                    // Imaginary '++' '-'
    case 494851:                    // Identifier '++' '--'
    case 494852:                    // Character '++' '--'
    case 494853:                    // String '++' '--'
    case 494854:                    // Integer '++' '--'
    case 494855:                    // Real '++' '--'
    case 494856:                    // Imaginary '++' '--'
    case 511235:                    // Identifier '++' '-='
    case 511236:                    // Character '++' '-='
    case 511237:                    // String '++' '-='
    case 511238:                    // Integer '++' '-='
    case 511239:                    // Real '++' '-='
    case 511240:                    // Imaginary '++' '-='
    case 544003:                    // Identifier '++' '/'
    case 544004:                    // Character '++' '/'
    case 544005:                    // String '++' '/'
    case 544006:                    // Integer '++' '/'
    case 544007:                    // Real '++' '/'
    case 544008:                    // Imaginary '++' '/'
    case 560387:                    // Identifier '++' '/='
    case 560388:                    // Character '++' '/='
    case 560389:                    // String '++' '/='
    case 560390:                    // Integer '++' '/='
    case 560391:                    // Real '++' '/='
    case 560392:                    // Imaginary '++' '/='
    case 576771:                    // Identifier '++' ':'
    case 576772:                    // Character '++' ':'
    case 576773:                    // String '++' ':'
    case 576774:                    // Integer '++' ':'
    case 576775:                    // Real '++' ':'
    case 576776:                    // Imaginary '++' ':'
    case 593155:                    // Identifier '++' ':='
    case 593156:                    // Character '++' ':='
    case 593157:                    // String '++' ':='
    case 593158:                    // Integer '++' ':='
    case 593159:                    // Real '++' ':='
    case 593160:                    // Imaginary '++' ':='
    case 609539:                    // Identifier '++' ';'
    case 609540:                    // Character '++' ';'
    case 609541:                    // String '++' ';'
    case 609542:                    // Integer '++' ';'
    case 609543:                    // Real '++' ';'
    case 609544:                    // Imaginary '++' ';'
    case 625923:                    // Identifier '++' '<'
    case 625924:                    // Character '++' '<'
    case 625925:                    // String '++' '<'
    case 625926:                    // Integer '++' '<'
    case 625927:                    // Real '++' '<'
    case 625928:                    // Imaginary '++' '<'
    case 642307:                    // Identifier '++' '<<'
    case 642308:                    // Character '++' '<<'
    case 642309:                    // String '++' '<<'
    case 642310:                    // Integer '++' '<<'
    case 642311:                    // Real '++' '<<'
    case 642312:                    // Imaginary '++' '<<'
    case 658691:                    // Identifier '++' '<<='
    case 658692:                    // Character '++' '<<='
    case 658693:                    // String '++' '<<='
    case 658694:                    // Integer '++' '<<='
    case 658695:                    // Real '++' '<<='
    case 658696:                    // Imaginary '++' '<<='
    case 675075:                    // Identifier '++' '<='
    case 675076:                    // Character '++' '<='
    case 675077:                    // String '++' '<='
    case 675078:                    // Integer '++' '<='
    case 675079:                    // Real '++' '<='
    case 675080:                    // Imaginary '++' '<='
    case 691459:                    // Identifier '++' '='
    case 691460:                    // Character '++' '='
    case 691461:                    // String '++' '='
    case 691462:                    // Integer '++' '='
    case 691463:                    // Real '++' '='
    case 691464:                    // Imaginary '++' '='
    case 707843:                    // Identifier '++' '=='
    case 707844:                    // Character '++' '=='
    case 707845:                    // String '++' '=='
    case 707846:                    // Integer '++' '=='
    case 707847:                    // Real '++' '=='
    case 707848:                    // Imaginary '++' '=='
    case 724227:                    // Identifier '++' '>'
    case 724228:                    // Character '++' '>'
    case 724229:                    // String '++' '>'
    case 724230:                    // Integer '++' '>'
    case 724231:                    // Real '++' '>'
    case 724232:                    // Imaginary '++' '>'
    case 740611:                    // Identifier '++' '>='
    case 740612:                    // Character '++' '>='
    case 740613:                    // String '++' '>='
    case 740614:                    // Integer '++' '>='
    case 740615:                    // Real '++' '>='
    case 740616:                    // Imaginary '++' '>='
    case 756995:                    // Identifier '++' '>>'
    case 756996:                    // Character '++' '>>'
    case 756997:                    // String '++' '>>'
    case 756998:                    // Integer '++' '>>'
    case 756999:                    // Real '++' '>>'
    case 757000:                    // Imaginary '++' '>>'
    case 773379:                    // Identifier '++' '>>='
    case 773380:                    // Character '++' '>>='
    case 773381:                    // String '++' '>>='
    case 773382:                    // Integer '++' '>>='
    case 773383:                    // Real '++' '>>='
    case 773384:                    // Imaginary '++' '>>='
    case 789763:                    // Identifier '++' '?'
    case 789764:                    // Character '++' '?'
    case 789765:                    // String '++' '?'
    case 789766:                    // Integer '++' '?'
    case 789767:                    // Real '++' '?'
    case 789768:                    // Imaginary '++' '?'
    case 806147:                    // Identifier '++' '?='
    case 806148:                    // Character '++' '?='
    case 806149:                    // String '++' '?='
    case 806150:                    // Integer '++' '?='
    case 806151:                    // Real '++' '?='
    case 806152:                    // Imaginary '++' '?='
    case 838915:                    // Identifier '++' ']'
    case 838916:                    // Character '++' ']'
    case 838917:                    // String '++' ']'
    case 838918:                    // Integer '++' ']'
    case 838919:                    // Real '++' ']'
    case 838920:                    // Imaginary '++' ']'
    case 855299:                    // Identifier '++' '^'
    case 855300:                    // Character '++' '^'
    case 855301:                    // String '++' '^'
    case 855302:                    // Integer '++' '^'
    case 855303:                    // Real '++' '^'
    case 855304:                    // Imaginary '++' '^'
    case 871683:                    // Identifier '++' '^='
    case 871684:                    // Character '++' '^='
    case 871685:                    // String '++' '^='
    case 871686:                    // Integer '++' '^='
    case 871687:                    // Real '++' '^='
    case 871688:                    // Imaginary '++' '^='
    case 888067:                    // Identifier '++' 'break'
    case 888068:                    // Character '++' 'break'
    case 888069:                    // String '++' 'break'
    case 888070:                    // Integer '++' 'break'
    case 888071:                    // Real '++' 'break'
    case 888072:                    // Imaginary '++' 'break'
    case 904451:                    // Identifier '++' 'case'
    case 904452:                    // Character '++' 'case'
    case 904453:                    // String '++' 'case'
    case 904454:                    // Integer '++' 'case'
    case 904455:                    // Real '++' 'case'
    case 904456:                    // Imaginary '++' 'case'
    case 920835:                    // Identifier '++' 'catch'
    case 920836:                    // Character '++' 'catch'
    case 920837:                    // String '++' 'catch'
    case 920838:                    // Integer '++' 'catch'
    case 920839:                    // Real '++' 'catch'
    case 920840:                    // Imaginary '++' 'catch'
    case 937219:                    // Identifier '++' 'continue'
    case 937220:                    // Character '++' 'continue'
    case 937221:                    // String '++' 'continue'
    case 937222:                    // Integer '++' 'continue'
    case 937223:                    // Real '++' 'continue'
    case 937224:                    // Imaginary '++' 'continue'
    case 953603:                    // Identifier '++' 'default'
    case 953604:                    // Character '++' 'default'
    case 953605:                    // String '++' 'default'
    case 953606:                    // Integer '++' 'default'
    case 953607:                    // Real '++' 'default'
    case 953608:                    // Imaginary '++' 'default'
    case 969987:                    // Identifier '++' 'do'
    case 969988:                    // Character '++' 'do'
    case 969989:                    // String '++' 'do'
    case 969990:                    // Integer '++' 'do'
    case 969991:                    // Real '++' 'do'
    case 969992:                    // Imaginary '++' 'do'
    case 986371:                    // Identifier '++' 'else'
    case 986372:                    // Character '++' 'else'
    case 986373:                    // String '++' 'else'
    case 986374:                    // Integer '++' 'else'
    case 986375:                    // Real '++' 'else'
    case 986376:                    // Imaginary '++' 'else'
    case 1002755:                   // Identifier '++' 'f32'
    case 1002756:                   // Character '++' 'f32'
    case 1002757:                   // String '++' 'f32'
    case 1002758:                   // Integer '++' 'f32'
    case 1002759:                   // Real '++' 'f32'
    case 1002760:                   // Imaginary '++' 'f32'
    case 1019139:                   // Identifier '++' 'f64'
    case 1019140:                   // Character '++' 'f64'
    case 1019141:                   // String '++' 'f64'
    case 1019142:                   // Integer '++' 'f64'
    case 1019143:                   // Real '++' 'f64'
    case 1019144:                   // Imaginary '++' 'f64'
    case 1035523:                   // Identifier '++' 'for'
    case 1035524:                   // Character '++' 'for'
    case 1035525:                   // String '++' 'for'
    case 1035526:                   // Integer '++' 'for'
    case 1035527:                   // Real '++' 'for'
    case 1035528:                   // Imaginary '++' 'for'
    case 1051907:                   // Identifier '++' 'foreach'
    case 1051908:                   // Character '++' 'foreach'
    case 1051909:                   // String '++' 'foreach'
    case 1051910:                   // Integer '++' 'foreach'
    case 1051911:                   // Real '++' 'foreach'
    case 1051912:                   // Imaginary '++' 'foreach'
    case 1068291:                   // Identifier '++' 'i32'
    case 1068292:                   // Character '++' 'i32'
    case 1068293:                   // String '++' 'i32'
    case 1068294:                   // Integer '++' 'i32'
    case 1068295:                   // Real '++' 'i32'
    case 1068296:                   // Imaginary '++' 'i32'
    case 1084675:                   // Identifier '++' 'i64'
    case 1084676:                   // Character '++' 'i64'
    case 1084677:                   // String '++' 'i64'
    case 1084678:                   // Integer '++' 'i64'
    case 1084679:                   // Real '++' 'i64'
    case 1084680:                   // Imaginary '++' 'i64'
    case 1101059:                   // Identifier '++' 'if'
    case 1101060:                   // Character '++' 'if'
    case 1101061:                   // String '++' 'if'
    case 1101062:                   // Integer '++' 'if'
    case 1101063:                   // Real '++' 'if'
    case 1101064:                   // Imaginary '++' 'if'
    case 1117443:                   // Identifier '++' 'return'
    case 1117444:                   // Character '++' 'return'
    case 1117445:                   // String '++' 'return'
    case 1117446:                   // Integer '++' 'return'
    case 1117447:                   // Real '++' 'return'
    case 1117448:                   // Imaginary '++' 'return'
    case 1133827:                   // Identifier '++' 'switch'
    case 1133828:                   // Character '++' 'switch'
    case 1133829:                   // String '++' 'switch'
    case 1133830:                   // Integer '++' 'switch'
    case 1133831:                   // Real '++' 'switch'
    case 1133832:                   // Imaginary '++' 'switch'
    case 1150211:                   // Identifier '++' 'test'
    case 1150212:                   // Character '++' 'test'
    case 1150213:                   // String '++' 'test'
    case 1150214:                   // Integer '++' 'test'
    case 1150215:                   // Real '++' 'test'
    case 1150216:                   // Imaginary '++' 'test'
    case 1166595:                   // Identifier '++' 'try'
    case 1166596:                   // Character '++' 'try'
    case 1166597:                   // String '++' 'try'
    case 1166598:                   // Integer '++' 'try'
    case 1166599:                   // Real '++' 'try'
    case 1166600:                   // Imaginary '++' 'try'
    case 1182979:                   // Identifier '++' 'while'
    case 1182980:                   // Character '++' 'while'
    case 1182981:                   // String '++' 'while'
    case 1182982:                   // Integer '++' 'while'
    case 1182983:                   // Real '++' 'while'
    case 1182984:                   // Imaginary '++' 'while'
    case 1215747:                   // Identifier '++' '|'
    case 1215748:                   // Character '++' '|'
    case 1215749:                   // String '++' '|'
    case 1215750:                   // Integer '++' '|'
    case 1215751:                   // Real '++' '|'
    case 1215752:                   // Imaginary '++' '|'
    case 1232131:                   // Identifier '++' '|='
    case 1232132:                   // Character '++' '|='
    case 1232133:                   // String '++' '|='
    case 1232134:                   // Integer '++' '|='
    case 1232135:                   // Real '++' '|='
    case 1232136:                   // Imaginary '++' '|='
    case 1248515:                   // Identifier '++' '||'
    case 1248516:                   // Character '++' '||'
    case 1248517:                   // String '++' '||'
    case 1248518:                   // Integer '++' '||'
    case 1248519:                   // Real '++' '||'
    case 1248520:                   // Imaginary '++' '||'
    case 1264899:                   // Identifier '++' '}'
    case 1264900:                   // Character '++' '}'
    case 1264901:                   // String '++' '}'
    case 1264902:                   // Integer '++' '}'
    case 1264903:                   // Real '++' '}'
    case 1264904:                   // Imaginary '++' '}'
    case 1281283:                   // Identifier '++' '~'
    case 1281284:                   // Character '++' '~'
    case 1281285:                   // String '++' '~'
    case 1281286:                   // Integer '++' '~'
    case 1281287:                   // Real '++' '~'
    case 1281288:                   // Imaginary '++' '~'
      try_Primary();
      lookahead1W(6);               // WhiteSpace^token | '++'
      consumeT(26);                 // '++'
      break;
    case -3:
    case 20227:                     // Identifier '--' END
    case 20228:                     // Character '--' END
    case 20229:                     // String '--' END
    case 20230:                     // Integer '--' END
    case 20231:                     // Real '--' END
    case 20232:                     // Imaginary '--' END
    case 151299:                    // Identifier '--' Comment
    case 151300:                    // Character '--' Comment
    case 151301:                    // String '--' Comment
    case 151302:                    // Integer '--' Comment
    case 151303:                    // Real '--' Comment
    case 151304:                    // Imaginary '--' Comment
    case 200451:                    // Identifier '--' '!'
    case 200452:                    // Character '--' '!'
    case 200453:                    // String '--' '!'
    case 200454:                    // Integer '--' '!'
    case 200455:                    // Real '--' '!'
    case 200456:                    // Imaginary '--' '!'
    case 216835:                    // Identifier '--' '!='
    case 216836:                    // Character '--' '!='
    case 216837:                    // String '--' '!='
    case 216838:                    // Integer '--' '!='
    case 216839:                    // Real '--' '!='
    case 216840:                    // Imaginary '--' '!='
    case 249603:                    // Identifier '--' '%'
    case 249604:                    // Character '--' '%'
    case 249605:                    // String '--' '%'
    case 249606:                    // Integer '--' '%'
    case 249607:                    // Real '--' '%'
    case 249608:                    // Imaginary '--' '%'
    case 265987:                    // Identifier '--' '%='
    case 265988:                    // Character '--' '%='
    case 265989:                    // String '--' '%='
    case 265990:                    // Integer '--' '%='
    case 265991:                    // Real '--' '%='
    case 265992:                    // Imaginary '--' '%='
    case 282371:                    // Identifier '--' '&'
    case 282372:                    // Character '--' '&'
    case 282373:                    // String '--' '&'
    case 282374:                    // Integer '--' '&'
    case 282375:                    // Real '--' '&'
    case 282376:                    // Imaginary '--' '&'
    case 298755:                    // Identifier '--' '&&'
    case 298756:                    // Character '--' '&&'
    case 298757:                    // String '--' '&&'
    case 298758:                    // Integer '--' '&&'
    case 298759:                    // Real '--' '&&'
    case 298760:                    // Imaginary '--' '&&'
    case 315139:                    // Identifier '--' '&='
    case 315140:                    // Character '--' '&='
    case 315141:                    // String '--' '&='
    case 315142:                    // Integer '--' '&='
    case 315143:                    // Real '--' '&='
    case 315144:                    // Imaginary '--' '&='
    case 347907:                    // Identifier '--' ')'
    case 347908:                    // Character '--' ')'
    case 347909:                    // String '--' ')'
    case 347910:                    // Integer '--' ')'
    case 347911:                    // Real '--' ')'
    case 347912:                    // Imaginary '--' ')'
    case 364291:                    // Identifier '--' '*'
    case 364292:                    // Character '--' '*'
    case 364293:                    // String '--' '*'
    case 364294:                    // Integer '--' '*'
    case 364295:                    // Real '--' '*'
    case 364296:                    // Imaginary '--' '*'
    case 380675:                    // Identifier '--' '**'
    case 380676:                    // Character '--' '**'
    case 380677:                    // String '--' '**'
    case 380678:                    // Integer '--' '**'
    case 380679:                    // Real '--' '**'
    case 380680:                    // Imaginary '--' '**'
    case 397059:                    // Identifier '--' '*='
    case 397060:                    // Character '--' '*='
    case 397061:                    // String '--' '*='
    case 397062:                    // Integer '--' '*='
    case 397063:                    // Real '--' '*='
    case 397064:                    // Imaginary '--' '*='
    case 413443:                    // Identifier '--' '+'
    case 413444:                    // Character '--' '+'
    case 413445:                    // String '--' '+'
    case 413446:                    // Integer '--' '+'
    case 413447:                    // Real '--' '+'
    case 413448:                    // Imaginary '--' '+'
    case 429827:                    // Identifier '--' '++'
    case 429828:                    // Character '--' '++'
    case 429829:                    // String '--' '++'
    case 429830:                    // Integer '--' '++'
    case 429831:                    // Real '--' '++'
    case 429832:                    // Imaginary '--' '++'
    case 446211:                    // Identifier '--' '+='
    case 446212:                    // Character '--' '+='
    case 446213:                    // String '--' '+='
    case 446214:                    // Integer '--' '+='
    case 446215:                    // Real '--' '+='
    case 446216:                    // Imaginary '--' '+='
    case 462595:                    // Identifier '--' ','
    case 462596:                    // Character '--' ','
    case 462597:                    // String '--' ','
    case 462598:                    // Integer '--' ','
    case 462599:                    // Real '--' ','
    case 462600:                    // Imaginary '--' ','
    case 478979:                    // Identifier '--' '-'
    case 478980:                    // Character '--' '-'
    case 478981:                    // String '--' '-'
    case 478982:                    // Integer '--' '-'
    case 478983:                    // Real '--' '-'
    case 478984:                    // Imaginary '--' '-'
    case 495363:                    // Identifier '--' '--'
    case 495364:                    // Character '--' '--'
    case 495365:                    // String '--' '--'
    case 495366:                    // Integer '--' '--'
    case 495367:                    // Real '--' '--'
    case 495368:                    // Imaginary '--' '--'
    case 511747:                    // Identifier '--' '-='
    case 511748:                    // Character '--' '-='
    case 511749:                    // String '--' '-='
    case 511750:                    // Integer '--' '-='
    case 511751:                    // Real '--' '-='
    case 511752:                    // Imaginary '--' '-='
    case 544515:                    // Identifier '--' '/'
    case 544516:                    // Character '--' '/'
    case 544517:                    // String '--' '/'
    case 544518:                    // Integer '--' '/'
    case 544519:                    // Real '--' '/'
    case 544520:                    // Imaginary '--' '/'
    case 560899:                    // Identifier '--' '/='
    case 560900:                    // Character '--' '/='
    case 560901:                    // String '--' '/='
    case 560902:                    // Integer '--' '/='
    case 560903:                    // Real '--' '/='
    case 560904:                    // Imaginary '--' '/='
    case 577283:                    // Identifier '--' ':'
    case 577284:                    // Character '--' ':'
    case 577285:                    // String '--' ':'
    case 577286:                    // Integer '--' ':'
    case 577287:                    // Real '--' ':'
    case 577288:                    // Imaginary '--' ':'
    case 593667:                    // Identifier '--' ':='
    case 593668:                    // Character '--' ':='
    case 593669:                    // String '--' ':='
    case 593670:                    // Integer '--' ':='
    case 593671:                    // Real '--' ':='
    case 593672:                    // Imaginary '--' ':='
    case 610051:                    // Identifier '--' ';'
    case 610052:                    // Character '--' ';'
    case 610053:                    // String '--' ';'
    case 610054:                    // Integer '--' ';'
    case 610055:                    // Real '--' ';'
    case 610056:                    // Imaginary '--' ';'
    case 626435:                    // Identifier '--' '<'
    case 626436:                    // Character '--' '<'
    case 626437:                    // String '--' '<'
    case 626438:                    // Integer '--' '<'
    case 626439:                    // Real '--' '<'
    case 626440:                    // Imaginary '--' '<'
    case 642819:                    // Identifier '--' '<<'
    case 642820:                    // Character '--' '<<'
    case 642821:                    // String '--' '<<'
    case 642822:                    // Integer '--' '<<'
    case 642823:                    // Real '--' '<<'
    case 642824:                    // Imaginary '--' '<<'
    case 659203:                    // Identifier '--' '<<='
    case 659204:                    // Character '--' '<<='
    case 659205:                    // String '--' '<<='
    case 659206:                    // Integer '--' '<<='
    case 659207:                    // Real '--' '<<='
    case 659208:                    // Imaginary '--' '<<='
    case 675587:                    // Identifier '--' '<='
    case 675588:                    // Character '--' '<='
    case 675589:                    // String '--' '<='
    case 675590:                    // Integer '--' '<='
    case 675591:                    // Real '--' '<='
    case 675592:                    // Imaginary '--' '<='
    case 691971:                    // Identifier '--' '='
    case 691972:                    // Character '--' '='
    case 691973:                    // String '--' '='
    case 691974:                    // Integer '--' '='
    case 691975:                    // Real '--' '='
    case 691976:                    // Imaginary '--' '='
    case 708355:                    // Identifier '--' '=='
    case 708356:                    // Character '--' '=='
    case 708357:                    // String '--' '=='
    case 708358:                    // Integer '--' '=='
    case 708359:                    // Real '--' '=='
    case 708360:                    // Imaginary '--' '=='
    case 724739:                    // Identifier '--' '>'
    case 724740:                    // Character '--' '>'
    case 724741:                    // String '--' '>'
    case 724742:                    // Integer '--' '>'
    case 724743:                    // Real '--' '>'
    case 724744:                    // Imaginary '--' '>'
    case 741123:                    // Identifier '--' '>='
    case 741124:                    // Character '--' '>='
    case 741125:                    // String '--' '>='
    case 741126:                    // Integer '--' '>='
    case 741127:                    // Real '--' '>='
    case 741128:                    // Imaginary '--' '>='
    case 757507:                    // Identifier '--' '>>'
    case 757508:                    // Character '--' '>>'
    case 757509:                    // String '--' '>>'
    case 757510:                    // Integer '--' '>>'
    case 757511:                    // Real '--' '>>'
    case 757512:                    // Imaginary '--' '>>'
    case 773891:                    // Identifier '--' '>>='
    case 773892:                    // Character '--' '>>='
    case 773893:                    // String '--' '>>='
    case 773894:                    // Integer '--' '>>='
    case 773895:                    // Real '--' '>>='
    case 773896:                    // Imaginary '--' '>>='
    case 790275:                    // Identifier '--' '?'
    case 790276:                    // Character '--' '?'
    case 790277:                    // String '--' '?'
    case 790278:                    // Integer '--' '?'
    case 790279:                    // Real '--' '?'
    case 790280:                    // Imaginary '--' '?'
    case 806659:                    // Identifier '--' '?='
    case 806660:                    // Character '--' '?='
    case 806661:                    // String '--' '?='
    case 806662:                    // Integer '--' '?='
    case 806663:                    // Real '--' '?='
    case 806664:                    // Imaginary '--' '?='
    case 839427:                    // Identifier '--' ']'
    case 839428:                    // Character '--' ']'
    case 839429:                    // String '--' ']'
    case 839430:                    // Integer '--' ']'
    case 839431:                    // Real '--' ']'
    case 839432:                    // Imaginary '--' ']'
    case 855811:                    // Identifier '--' '^'
    case 855812:                    // Character '--' '^'
    case 855813:                    // String '--' '^'
    case 855814:                    // Integer '--' '^'
    case 855815:                    // Real '--' '^'
    case 855816:                    // Imaginary '--' '^'
    case 872195:                    // Identifier '--' '^='
    case 872196:                    // Character '--' '^='
    case 872197:                    // String '--' '^='
    case 872198:                    // Integer '--' '^='
    case 872199:                    // Real '--' '^='
    case 872200:                    // Imaginary '--' '^='
    case 888579:                    // Identifier '--' 'break'
    case 888580:                    // Character '--' 'break'
    case 888581:                    // String '--' 'break'
    case 888582:                    // Integer '--' 'break'
    case 888583:                    // Real '--' 'break'
    case 888584:                    // Imaginary '--' 'break'
    case 904963:                    // Identifier '--' 'case'
    case 904964:                    // Character '--' 'case'
    case 904965:                    // String '--' 'case'
    case 904966:                    // Integer '--' 'case'
    case 904967:                    // Real '--' 'case'
    case 904968:                    // Imaginary '--' 'case'
    case 921347:                    // Identifier '--' 'catch'
    case 921348:                    // Character '--' 'catch'
    case 921349:                    // String '--' 'catch'
    case 921350:                    // Integer '--' 'catch'
    case 921351:                    // Real '--' 'catch'
    case 921352:                    // Imaginary '--' 'catch'
    case 937731:                    // Identifier '--' 'continue'
    case 937732:                    // Character '--' 'continue'
    case 937733:                    // String '--' 'continue'
    case 937734:                    // Integer '--' 'continue'
    case 937735:                    // Real '--' 'continue'
    case 937736:                    // Imaginary '--' 'continue'
    case 954115:                    // Identifier '--' 'default'
    case 954116:                    // Character '--' 'default'
    case 954117:                    // String '--' 'default'
    case 954118:                    // Integer '--' 'default'
    case 954119:                    // Real '--' 'default'
    case 954120:                    // Imaginary '--' 'default'
    case 970499:                    // Identifier '--' 'do'
    case 970500:                    // Character '--' 'do'
    case 970501:                    // String '--' 'do'
    case 970502:                    // Integer '--' 'do'
    case 970503:                    // Real '--' 'do'
    case 970504:                    // Imaginary '--' 'do'
    case 986883:                    // Identifier '--' 'else'
    case 986884:                    // Character '--' 'else'
    case 986885:                    // String '--' 'else'
    case 986886:                    // Integer '--' 'else'
    case 986887:                    // Real '--' 'else'
    case 986888:                    // Imaginary '--' 'else'
    case 1003267:                   // Identifier '--' 'f32'
    case 1003268:                   // Character '--' 'f32'
    case 1003269:                   // String '--' 'f32'
    case 1003270:                   // Integer '--' 'f32'
    case 1003271:                   // Real '--' 'f32'
    case 1003272:                   // Imaginary '--' 'f32'
    case 1019651:                   // Identifier '--' 'f64'
    case 1019652:                   // Character '--' 'f64'
    case 1019653:                   // String '--' 'f64'
    case 1019654:                   // Integer '--' 'f64'
    case 1019655:                   // Real '--' 'f64'
    case 1019656:                   // Imaginary '--' 'f64'
    case 1036035:                   // Identifier '--' 'for'
    case 1036036:                   // Character '--' 'for'
    case 1036037:                   // String '--' 'for'
    case 1036038:                   // Integer '--' 'for'
    case 1036039:                   // Real '--' 'for'
    case 1036040:                   // Imaginary '--' 'for'
    case 1052419:                   // Identifier '--' 'foreach'
    case 1052420:                   // Character '--' 'foreach'
    case 1052421:                   // String '--' 'foreach'
    case 1052422:                   // Integer '--' 'foreach'
    case 1052423:                   // Real '--' 'foreach'
    case 1052424:                   // Imaginary '--' 'foreach'
    case 1068803:                   // Identifier '--' 'i32'
    case 1068804:                   // Character '--' 'i32'
    case 1068805:                   // String '--' 'i32'
    case 1068806:                   // Integer '--' 'i32'
    case 1068807:                   // Real '--' 'i32'
    case 1068808:                   // Imaginary '--' 'i32'
    case 1085187:                   // Identifier '--' 'i64'
    case 1085188:                   // Character '--' 'i64'
    case 1085189:                   // String '--' 'i64'
    case 1085190:                   // Integer '--' 'i64'
    case 1085191:                   // Real '--' 'i64'
    case 1085192:                   // Imaginary '--' 'i64'
    case 1101571:                   // Identifier '--' 'if'
    case 1101572:                   // Character '--' 'if'
    case 1101573:                   // String '--' 'if'
    case 1101574:                   // Integer '--' 'if'
    case 1101575:                   // Real '--' 'if'
    case 1101576:                   // Imaginary '--' 'if'
    case 1117955:                   // Identifier '--' 'return'
    case 1117956:                   // Character '--' 'return'
    case 1117957:                   // String '--' 'return'
    case 1117958:                   // Integer '--' 'return'
    case 1117959:                   // Real '--' 'return'
    case 1117960:                   // Imaginary '--' 'return'
    case 1134339:                   // Identifier '--' 'switch'
    case 1134340:                   // Character '--' 'switch'
    case 1134341:                   // String '--' 'switch'
    case 1134342:                   // Integer '--' 'switch'
    case 1134343:                   // Real '--' 'switch'
    case 1134344:                   // Imaginary '--' 'switch'
    case 1150723:                   // Identifier '--' 'test'
    case 1150724:                   // Character '--' 'test'
    case 1150725:                   // String '--' 'test'
    case 1150726:                   // Integer '--' 'test'
    case 1150727:                   // Real '--' 'test'
    case 1150728:                   // Imaginary '--' 'test'
    case 1167107:                   // Identifier '--' 'try'
    case 1167108:                   // Character '--' 'try'
    case 1167109:                   // String '--' 'try'
    case 1167110:                   // Integer '--' 'try'
    case 1167111:                   // Real '--' 'try'
    case 1167112:                   // Imaginary '--' 'try'
    case 1183491:                   // Identifier '--' 'while'
    case 1183492:                   // Character '--' 'while'
    case 1183493:                   // String '--' 'while'
    case 1183494:                   // Integer '--' 'while'
    case 1183495:                   // Real '--' 'while'
    case 1183496:                   // Imaginary '--' 'while'
    case 1216259:                   // Identifier '--' '|'
    case 1216260:                   // Character '--' '|'
    case 1216261:                   // String '--' '|'
    case 1216262:                   // Integer '--' '|'
    case 1216263:                   // Real '--' '|'
    case 1216264:                   // Imaginary '--' '|'
    case 1232643:                   // Identifier '--' '|='
    case 1232644:                   // Character '--' '|='
    case 1232645:                   // String '--' '|='
    case 1232646:                   // Integer '--' '|='
    case 1232647:                   // Real '--' '|='
    case 1232648:                   // Imaginary '--' '|='
    case 1249027:                   // Identifier '--' '||'
    case 1249028:                   // Character '--' '||'
    case 1249029:                   // String '--' '||'
    case 1249030:                   // Integer '--' '||'
    case 1249031:                   // Real '--' '||'
    case 1249032:                   // Imaginary '--' '||'
    case 1265411:                   // Identifier '--' '}'
    case 1265412:                   // Character '--' '}'
    case 1265413:                   // String '--' '}'
    case 1265414:                   // Integer '--' '}'
    case 1265415:                   // Real '--' '}'
    case 1265416:                   // Imaginary '--' '}'
    case 1281795:                   // Identifier '--' '~'
    case 1281796:                   // Character '--' '~'
    case 1281797:                   // String '--' '~'
    case 1281798:                   // Integer '--' '~'
    case 1281799:                   // Real '--' '~'
    case 1281800:                   // Imaginary '--' '~'
      try_Primary();
      lookahead1W(7);               // WhiteSpace^token | '--'
      consumeT(30);                 // '--'
      break;
    case 26:                        // '++'
      consumeT(26);                 // '++'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 30:                        // '--'
      consumeT(30);                 // '--'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 25:                        // '+'
      consumeT(25);                 // '+'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 29:                        // '-'
      consumeT(29);                 // '-'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 78:                        // '~'
      consumeT(78);                 // '~'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 12:                        // '!'
      consumeT(12);                 // '!'
      lookahead1W(22);              // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
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
      lookahead2W(17);              // WhiteSpace^token | '(' | '{'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 59:                        // 'do'
      parse_Do();
      break;
    case 72:                        // 'while'
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
    case 67:                        // 'if'
      parse_If();
      break;
    case 69:                        // 'switch'
      parse_Switch();
      break;
    case 71:                        // 'try'
      parse_Try();
      break;
    case 70:                        // 'test'
      parse_Test();
      break;
    case 9347:                      // Identifier '{'
      parse_NamespaceDeclaration();
      break;
    case 68:                        // 'return'
      parse_Return();
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
      lookahead2W(17);              // WhiteSpace^token | '(' | '{'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 59:                        // 'do'
      try_Do();
      break;
    case 72:                        // 'while'
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
    case 67:                        // 'if'
      try_If();
      break;
    case 69:                        // 'switch'
      try_Switch();
      break;
    case 71:                        // 'try'
      try_Try();
      break;
    case 70:                        // 'test'
      try_Test();
      break;
    case 9347:                      // Identifier '{'
      try_NamespaceDeclaration();
      break;
    case 68:                        // 'return'
      try_Return();
      break;
    case 37:                        // ';'
      try_EmptyStatement();
      break;
    default:
      try_FunctionDeclaration();
    }
  }

  function parse_Do()
  {
    eventHandler.startNonterminal("Do", e0);
    consume(59);                    // 'do'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(14);                // WhiteSpace^token | 'while'
    consume(72);                    // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(59);                   // 'do'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(14);                // WhiteSpace^token | 'while'
    consumeT(72);                   // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(72);                    // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(72);                   // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    eventHandler.startNonterminal("For", e0);
    consume(63);                    // 'for'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("For", e0);
  }

  function try_For()
  {
    consumeT(63);                   // 'for'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_ForEach()
  {
    eventHandler.startNonterminal("ForEach", e0);
    consume(64);                    // 'foreach'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("ForEach", e0);
  }

  function try_ForEach()
  {
    consumeT(64);                   // 'foreach'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
    consume(67);                    // 'if'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(49);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9404:                    // 'else' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(41);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8764:                    // 'else' 'return'
      case 9148:                    // 'else' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7868:                    // 'else' 'f32'
      case 7996:                    // 'else' 'f64'
      case 8380:                    // 'else' 'i32'
      case 8508:                    // 'else' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 572:                     // 'else' Character
      case 700:                     // 'else' String
      case 828:                     // 'else' Integer
      case 956:                     // 'else' Real
      case 1084:                    // 'else' Imaginary
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10044:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8636:                    // 'else' 'if'
      case 8892:                    // 'else' 'switch'
      case 9020:                    // 'else' 'test'
      case 9276:                    // 'else' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
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
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 65                    // 'i32'
     && lk != 66                    // 'i64'
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 73                    // '{'
     && lk != 77                    // '}'
     && lk != 78)                   // '~'
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
        memoize(4, e0, lk);
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
    consumeT(67);                   // 'if'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(49);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 9404:                    // 'else' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(41);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8764:                    // 'else' 'return'
      case 9148:                    // 'else' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      case 7868:                    // 'else' 'f32'
      case 7996:                    // 'else' 'f64'
      case 8380:                    // 'else' 'i32'
      case 8508:                    // 'else' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 572:                     // 'else' Character
      case 700:                     // 'else' String
      case 828:                     // 'else' Integer
      case 956:                     // 'else' Real
      case 1084:                    // 'else' Imaginary
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10044:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8636:                    // 'else' 'if'
      case 8892:                    // 'else' 'switch'
      case 9020:                    // 'else' 'test'
      case 9276:                    // 'else' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
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
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 65                    // 'i32'
     && lk != 66                    // 'i64'
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 73                    // '{'
     && lk != 77                    // '}'
     && lk != 78)                   // '~'
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
          try_Else();
          memoize(4, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(4, e0A, -2);
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Else", e0);
  }

  function try_Else()
  {
    consumeT(60);                   // 'else'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(69);                    // 'switch'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(15);                // WhiteSpace^token | '{'
    consume(73);                    // '{'
    for (;;)
    {
      lookahead1W(13);              // WhiteSpace^token | 'case'
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
    consume(77);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(69);                   // 'switch'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(15);                // WhiteSpace^token | '{'
    consumeT(73);                   // '{'
    for (;;)
    {
      lookahead1W(13);              // WhiteSpace^token | 'case'
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
    consumeT(77);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(55);                    // 'case'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(32);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 77)                 // '}'
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(32);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 77)                 // '}'
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
    lookahead1W(8);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 77)                 // '}'
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
    lookahead1W(8);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 77)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Try()
  {
    eventHandler.startNonterminal("Try", e0);
    consume(71);                    // 'try'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(4);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     || lk == 117304                // 'catch' '(' Real
     || lk == 133688                // 'catch' '(' Imaginary
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
     || lk == 1067576               // 'catch' '(' 'i32'
     || lk == 1083960               // 'catch' '(' 'i64'
     || lk == 1100344               // 'catch' '(' 'if'
     || lk == 1116728               // 'catch' '(' 'return'
     || lk == 1133112               // 'catch' '(' 'switch'
     || lk == 1149496               // 'catch' '(' 'test'
     || lk == 1165880               // 'catch' '(' 'try'
     || lk == 1182264               // 'catch' '(' 'while'
     || lk == 1198648               // 'catch' '(' '{'
     || lk == 1280568)              // 'catch' '(' '~'
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
        memoize(5, e0, lk);
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
    consumeT(71);                   // 'try'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(4);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     || lk == 117304                // 'catch' '(' Real
     || lk == 133688                // 'catch' '(' Imaginary
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
     || lk == 1067576               // 'catch' '(' 'i32'
     || lk == 1083960               // 'catch' '(' 'i64'
     || lk == 1100344               // 'catch' '(' 'if'
     || lk == 1116728               // 'catch' '(' 'return'
     || lk == 1133112               // 'catch' '(' 'switch'
     || lk == 1149496               // 'catch' '(' 'test'
     || lk == 1165880               // 'catch' '(' 'try'
     || lk == 1182264               // 'catch' '(' 'while'
     || lk == 1198648               // 'catch' '(' '{'
     || lk == 1280568)              // 'catch' '(' '~'
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
          try_Catch();
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
      try_Catch();
    }
  }

  function parse_Test()
  {
    eventHandler.startNonterminal("Test", e0);
    consume(70);                    // 'test'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(41);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 65                    // 'i32'
     && lk != 66                    // 'i64'
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 73                    // '{'
     && lk != 78                    // '~'
     && lk != 421                   // ';' Identifier
     && lk != 549                   // ';' Character
     && lk != 677                   // ';' String
     && lk != 805                   // ';' Integer
     && lk != 933                   // ';' Real
     && lk != 1061                  // ';' Imaginary
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
     && lk != 8357                  // ';' 'i32'
     && lk != 8485                  // ';' 'i64'
     && lk != 8613                  // ';' 'if'
     && lk != 8741                  // ';' 'return'
     && lk != 8869                  // ';' 'switch'
     && lk != 8997                  // ';' 'test'
     && lk != 9125                  // ';' 'try'
     && lk != 9253                  // ';' 'while'
     && lk != 9381                  // ';' '{'
     && lk != 10021)                // ';' '~'
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
        memoize(6, e0, lk);
      }
    }
    if (lk == -1
     || lk == 3                     // Identifier
     || lk == 4                     // Character
     || lk == 5                     // String
     || lk == 6                     // Integer
     || lk == 7                     // Real
     || lk == 8                     // Imaginary
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
     || lk == 65                    // 'i32'
     || lk == 66                    // 'i64'
     || lk == 67                    // 'if'
     || lk == 68                    // 'return'
     || lk == 69                    // 'switch'
     || lk == 70                    // 'test'
     || lk == 71                    // 'try'
     || lk == 72                    // 'while'
     || lk == 73                    // '{'
     || lk == 78)                   // '~'
    {
      whitespace();
      parse_Expression();
    }
    lookahead1W(18);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consume(37);                  // ';'
      lookahead1W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(41);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(26);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 19109               // ';' ')' END
       || lk == 51877               // ';' ')' Identifier
       || lk == 68261               // ';' ')' Character
       || lk == 84645               // ';' ')' String
       || lk == 101029              // ';' ')' Integer
       || lk == 117413              // ';' ')' Real
       || lk == 133797              // ';' ')' Imaginary
       || lk == 150181              // ';' ')' Comment
       || lk == 199333              // ';' ')' '!'
       || lk == 330405              // ';' ')' '('
       || lk == 346789              // ';' ')' ')'
       || lk == 348837              // ';' ';' ')'
       || lk == 412325              // ';' ')' '+'
       || lk == 428709              // ';' ')' '++'
       || lk == 461477              // ';' ')' ','
       || lk == 477861              // ';' ')' '-'
       || lk == 494245              // ';' ')' '--'
       || lk == 576165              // ';' ')' ':'
       || lk == 608933              // ';' ')' ';'
       || lk == 821925              // ';' ')' '['
       || lk == 838309              // ';' ')' ']'
       || lk == 887461              // ';' ')' 'break'
       || lk == 903845              // ';' ')' 'case'
       || lk == 920229              // ';' ')' 'catch'
       || lk == 936613              // ';' ')' 'continue'
       || lk == 952997              // ';' ')' 'default'
       || lk == 969381              // ';' ')' 'do'
       || lk == 985765              // ';' ')' 'else'
       || lk == 1002149             // ';' ')' 'f32'
       || lk == 1018533             // ';' ')' 'f64'
       || lk == 1034917             // ';' ')' 'for'
       || lk == 1051301             // ';' ')' 'foreach'
       || lk == 1067685             // ';' ')' 'i32'
       || lk == 1084069             // ';' ')' 'i64'
       || lk == 1100453             // ';' ')' 'if'
       || lk == 1116837             // ';' ')' 'return'
       || lk == 1133221             // ';' ')' 'switch'
       || lk == 1149605             // ';' ')' 'test'
       || lk == 1165989             // ';' ')' 'try'
       || lk == 1182373             // ';' ')' 'while'
       || lk == 1198757             // ';' ')' '{'
       || lk == 1264293             // ';' ')' '}'
       || lk == 1280677)            // ';' ')' '~'
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
      if (lk != -2
       && lk != 21                  // ')'
       && lk != 421                 // ';' Identifier
       && lk != 549                 // ';' Character
       && lk != 677                 // ';' String
       && lk != 805                 // ';' Integer
       && lk != 933                 // ';' Real
       && lk != 1061                // ';' Imaginary
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
       && lk != 8357                // ';' 'i32'
       && lk != 8485                // ';' 'i64'
       && lk != 8613                // ';' 'if'
       && lk != 8741                // ';' 'return'
       && lk != 8869                // ';' 'switch'
       && lk != 8997                // ';' 'test'
       && lk != 9125                // ';' 'try'
       && lk != 9253                // ';' 'while'
       && lk != 9381                // ';' '{'
       && lk != 10021)              // ';' '~'
      {
        whitespace();
        parse_Expression();
      }
      lookahead1W(18);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consume(37);                // ';'
        lookahead1W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          whitespace();
          parse_Expression();
        }
      }
    }
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(4);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     || lk == 117304                // 'catch' '(' Real
     || lk == 133688                // 'catch' '(' Imaginary
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
     || lk == 1067576               // 'catch' '(' 'i32'
     || lk == 1083960               // 'catch' '(' 'i64'
     || lk == 1100344               // 'catch' '(' 'if'
     || lk == 1116728               // 'catch' '(' 'return'
     || lk == 1133112               // 'catch' '(' 'switch'
     || lk == 1149496               // 'catch' '(' 'test'
     || lk == 1165880               // 'catch' '(' 'try'
     || lk == 1182264               // 'catch' '(' 'while'
     || lk == 1198648               // 'catch' '(' '{'
     || lk == 1280568)              // 'catch' '(' '~'
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
        memoize(8, e0, lk);
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
    consumeT(70);                   // 'test'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(41);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 65                    // 'i32'
     && lk != 66                    // 'i64'
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 73                    // '{'
     && lk != 78                    // '~'
     && lk != 421                   // ';' Identifier
     && lk != 549                   // ';' Character
     && lk != 677                   // ';' String
     && lk != 805                   // ';' Integer
     && lk != 933                   // ';' Real
     && lk != 1061                  // ';' Imaginary
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
     && lk != 8357                  // ';' 'i32'
     && lk != 8485                  // ';' 'i64'
     && lk != 8613                  // ';' 'if'
     && lk != 8741                  // ';' 'return'
     && lk != 8869                  // ';' 'switch'
     && lk != 8997                  // ';' 'test'
     && lk != 9125                  // ';' 'try'
     && lk != 9253                  // ';' 'while'
     && lk != 9381                  // ';' '{'
     && lk != 10021)                // ';' '~'
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
          try_Expression();
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
    if (lk == -1
     || lk == 3                     // Identifier
     || lk == 4                     // Character
     || lk == 5                     // String
     || lk == 6                     // Integer
     || lk == 7                     // Real
     || lk == 8                     // Imaginary
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
     || lk == 65                    // 'i32'
     || lk == 66                    // 'i64'
     || lk == 67                    // 'if'
     || lk == 68                    // 'return'
     || lk == 69                    // 'switch'
     || lk == 70                    // 'test'
     || lk == 71                    // 'try'
     || lk == 72                    // 'while'
     || lk == 73                    // '{'
     || lk == 78)                   // '~'
    {
      try_Expression();
    }
    lookahead1W(18);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consumeT(37);                 // ';'
      lookahead1W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(41);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(26);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 19109               // ';' ')' END
       || lk == 51877               // ';' ')' Identifier
       || lk == 68261               // ';' ')' Character
       || lk == 84645               // ';' ')' String
       || lk == 101029              // ';' ')' Integer
       || lk == 117413              // ';' ')' Real
       || lk == 133797              // ';' ')' Imaginary
       || lk == 150181              // ';' ')' Comment
       || lk == 199333              // ';' ')' '!'
       || lk == 330405              // ';' ')' '('
       || lk == 346789              // ';' ')' ')'
       || lk == 348837              // ';' ';' ')'
       || lk == 412325              // ';' ')' '+'
       || lk == 428709              // ';' ')' '++'
       || lk == 461477              // ';' ')' ','
       || lk == 477861              // ';' ')' '-'
       || lk == 494245              // ';' ')' '--'
       || lk == 576165              // ';' ')' ':'
       || lk == 608933              // ';' ')' ';'
       || lk == 821925              // ';' ')' '['
       || lk == 838309              // ';' ')' ']'
       || lk == 887461              // ';' ')' 'break'
       || lk == 903845              // ';' ')' 'case'
       || lk == 920229              // ';' ')' 'catch'
       || lk == 936613              // ';' ')' 'continue'
       || lk == 952997              // ';' ')' 'default'
       || lk == 969381              // ';' ')' 'do'
       || lk == 985765              // ';' ')' 'else'
       || lk == 1002149             // ';' ')' 'f32'
       || lk == 1018533             // ';' ')' 'f64'
       || lk == 1034917             // ';' ')' 'for'
       || lk == 1051301             // ';' ')' 'foreach'
       || lk == 1067685             // ';' ')' 'i32'
       || lk == 1084069             // ';' ')' 'i64'
       || lk == 1100453             // ';' ')' 'if'
       || lk == 1116837             // ';' ')' 'return'
       || lk == 1133221             // ';' ')' 'switch'
       || lk == 1149605             // ';' ')' 'test'
       || lk == 1165989             // ';' ')' 'try'
       || lk == 1182373             // ';' ')' 'while'
       || lk == 1198757             // ';' ')' '{'
       || lk == 1264293             // ';' ')' '}'
       || lk == 1280677)            // ';' ')' '~'
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
      if (lk != -2
       && lk != 21                  // ')'
       && lk != 421                 // ';' Identifier
       && lk != 549                 // ';' Character
       && lk != 677                 // ';' String
       && lk != 805                 // ';' Integer
       && lk != 933                 // ';' Real
       && lk != 1061                // ';' Imaginary
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
       && lk != 8357                // ';' 'i32'
       && lk != 8485                // ';' 'i64'
       && lk != 8613                // ';' 'if'
       && lk != 8741                // ';' 'return'
       && lk != 8869                // ';' 'switch'
       && lk != 8997                // ';' 'test'
       && lk != 9125                // ';' 'try'
       && lk != 9253                // ';' 'while'
       && lk != 9381                // ';' '{'
       && lk != 10021)              // ';' '~'
      {
        try_Expression();
      }
      lookahead1W(18);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consumeT(37);               // ';'
        lookahead1W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Expression();
        }
      }
    }
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'test' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(4);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     || lk == 117304                // 'catch' '(' Real
     || lk == 133688                // 'catch' '(' Imaginary
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
     || lk == 1067576               // 'catch' '(' 'i32'
     || lk == 1083960               // 'catch' '(' 'i64'
     || lk == 1100344               // 'catch' '(' 'if'
     || lk == 1116728               // 'catch' '(' 'return'
     || lk == 1133112               // 'catch' '(' 'switch'
     || lk == 1149496               // 'catch' '(' 'test'
     || lk == 1165880               // 'catch' '(' 'try'
     || lk == 1182264               // 'catch' '(' 'while'
     || lk == 1198648               // 'catch' '(' '{'
     || lk == 1280568)              // 'catch' '(' '~'
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
          try_Catch();
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
    if (lk == -1)
    {
      try_Catch();
    }
  }

  function parse_Catch()
  {
    eventHandler.startNonterminal("Catch", e0);
    consume(56);                    // 'catch'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Catch", e0);
  }

  function try_Catch()
  {
    consumeT(56);                   // 'catch'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_NamespaceDeclaration()
  {
    eventHandler.startNonterminal("NamespaceDeclaration", e0);
    consume(3);                     // Identifier
    lookahead1W(15);                // WhiteSpace^token | '{'
    whitespace();
    parse_Block();
    eventHandler.endNonterminal("NamespaceDeclaration", e0);
  }

  function try_NamespaceDeclaration()
  {
    consumeT(3);                    // Identifier
    lookahead1W(15);                // WhiteSpace^token | '{'
    try_Block();
  }

  function parse_FunctionDeclaration()
  {
    eventHandler.startNonterminal("FunctionDeclaration", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(4);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 65                    // 'i32'
     && lk != 66)                   // 'i64'
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
          consumeT(3);              // Identifier
          lookahead1W(4);           // WhiteSpace^token | '('
          consumeT(20);             // '('
          lookahead1W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          try_Arguments();
          consumeT(21);             // ')'
          lookahead1W(15);          // WhiteSpace^token | '{'
          try_Block();
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
            consumeT(3);            // Identifier
            lookahead1W(4);         // WhiteSpace^token | '('
            consumeT(20);           // '('
            lookahead1W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            try_Arguments();
            consumeT(21);           // ')'
            lookahead1W(11);        // WhiteSpace^token | '='
            consumeT(42);           // '='
            lookahead1W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            try_Expression();
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
              consumeT(3);          // Identifier
              lookahead1W(4);       // WhiteSpace^token | '('
              consumeT(20);         // '('
              lookahead1W(24);      // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
              try_Arguments();
              consumeT(21);         // ')'
              lookahead1W(12);      // WhiteSpace^token | '?='
              consumeT(49);         // '?='
              lookahead1W(15);      // WhiteSpace^token | '{'
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
                consumeT(3);        // Identifier
                lookahead1W(4);     // WhiteSpace^token | '('
                consumeT(20);       // '('
                lookahead1W(24);    // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
                try_Arguments();
                consumeT(21);       // ')'
                lookahead1W(3);     // WhiteSpace^token | '#='
                consumeT(14);       // '#='
                lookahead1W(15);    // WhiteSpace^token | '{'
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
                  consumeT(3);      // Identifier
                  lookahead1W(4);   // WhiteSpace^token | '('
                  consumeT(20);     // '('
                  lookahead1W(24);  // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
                  try_Arguments();
                  consumeT(21);     // ')'
                  lookahead1W(9);   // WhiteSpace^token | ':='
                  consumeT(36);     // ':='
                  lookahead1W(15);  // WhiteSpace^token | '{'
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
        memoize(9, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(15);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -2:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(11);              // WhiteSpace^token | '='
      consume(42);                  // '='
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Expression();
      break;
    case -3:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(12);              // WhiteSpace^token | '?='
      consume(49);                  // '?='
      lookahead1W(15);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -4:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(3);               // WhiteSpace^token | '#='
      consume(14);                  // '#='
      lookahead1W(15);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -5:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(9);               // WhiteSpace^token | ':='
      consume(36);                  // ':='
      lookahead1W(15);              // WhiteSpace^token | '{'
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
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(2);               // Script | WhiteSpace^token
      consume(10);                  // Script
    }
    eventHandler.endNonterminal("FunctionDeclaration", e0);
  }

  function try_FunctionDeclaration()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(4);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 61                    // 'f32'
     && lk != 62                    // 'f64'
     && lk != 65                    // 'i32'
     && lk != 66)                   // 'i64'
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
          consumeT(3);              // Identifier
          lookahead1W(4);           // WhiteSpace^token | '('
          consumeT(20);             // '('
          lookahead1W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          try_Arguments();
          consumeT(21);             // ')'
          lookahead1W(15);          // WhiteSpace^token | '{'
          try_Block();
          memoize(9, e0A, -1);
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
            consumeT(3);            // Identifier
            lookahead1W(4);         // WhiteSpace^token | '('
            consumeT(20);           // '('
            lookahead1W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            try_Arguments();
            consumeT(21);           // ')'
            lookahead1W(11);        // WhiteSpace^token | '='
            consumeT(42);           // '='
            lookahead1W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            try_Expression();
            memoize(9, e0A, -2);
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
              consumeT(3);          // Identifier
              lookahead1W(4);       // WhiteSpace^token | '('
              consumeT(20);         // '('
              lookahead1W(24);      // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
              try_Arguments();
              consumeT(21);         // ')'
              lookahead1W(12);      // WhiteSpace^token | '?='
              consumeT(49);         // '?='
              lookahead1W(15);      // WhiteSpace^token | '{'
              try_Block();
              memoize(9, e0A, -3);
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
                consumeT(3);        // Identifier
                lookahead1W(4);     // WhiteSpace^token | '('
                consumeT(20);       // '('
                lookahead1W(24);    // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
                try_Arguments();
                consumeT(21);       // ')'
                lookahead1W(3);     // WhiteSpace^token | '#='
                consumeT(14);       // '#='
                lookahead1W(15);    // WhiteSpace^token | '{'
                try_Block();
                memoize(9, e0A, -4);
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
                  consumeT(3);      // Identifier
                  lookahead1W(4);   // WhiteSpace^token | '('
                  consumeT(20);     // '('
                  lookahead1W(24);  // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
                  try_Arguments();
                  consumeT(21);     // ')'
                  lookahead1W(9);   // WhiteSpace^token | ':='
                  consumeT(36);     // ':='
                  lookahead1W(15);  // WhiteSpace^token | '{'
                  try_Block();
                  memoize(9, e0A, -5);
                  lk = -7;
                }
                catch (p5A)
                {
                  lk = -6;
                  b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
                  b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
                  b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
                  b3 = b3A; e3 = e3A; end = e3A; }}}
                  memoize(9, e0A, -6);
                }
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
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(15);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -2:
      consumeT(3);                  // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(11);              // WhiteSpace^token | '='
      consumeT(42);                 // '='
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Expression();
      break;
    case -3:
      consumeT(3);                  // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(12);              // WhiteSpace^token | '?='
      consumeT(49);                 // '?='
      lookahead1W(15);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -4:
      consumeT(3);                  // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(3);               // WhiteSpace^token | '#='
      consumeT(14);                 // '#='
      lookahead1W(15);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -5:
      consumeT(3);                  // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(9);               // WhiteSpace^token | ':='
      consumeT(36);                 // ':='
      lookahead1W(15);              // WhiteSpace^token | '{'
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
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(2);               // Script | WhiteSpace^token
      consumeT(10);                 // Script
    }
  }

  function parse_Return()
  {
    eventHandler.startNonterminal("Return", e0);
    consume(68);                    // 'return'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(68);                   // 'return'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
    case 65:                        // 'i32'
      consume(65);                  // 'i32'
      break;
    case 66:                        // 'i64'
      consume(66);                  // 'i64'
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
    case 65:                        // 'i32'
      consumeT(65);                 // 'i32'
      break;
    case 66:                        // 'i64'
      consumeT(66);                 // 'i64'
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
    switch (l1)
    {
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 65:                        // 'i32'
    case 66:                        // 'i64'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(42);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 328125                // 'f32' Identifier '('
     || lk == 328126                // 'f64' Identifier '('
     || lk == 328129                // 'i32' Identifier '('
     || lk == 328130)               // 'i64' Identifier '('
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
          try_Type();
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
    if (lk != -2
     && lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 73                    // '{'
     && lk != 78)                   // '~'
    {
      whitespace();
      parse_Type();
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    for (;;)
    {
      lookahead1W(20);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 61:                      // 'f32'
      case 62:                      // 'f64'
      case 65:                      // 'i32'
      case 66:                      // 'i64'
        lookahead2W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 445:                   // 'f32' Identifier
        case 446:                   // 'f64' Identifier
        case 449:                   // 'i32' Identifier
        case 450:                   // 'i64' Identifier
          lookahead3W(42);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 328125              // 'f32' Identifier '('
       || lk == 328126              // 'f64' Identifier '('
       || lk == 328129              // 'i32' Identifier '('
       || lk == 328130)             // 'i64' Identifier '('
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
            try_Type();
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
      if (lk != -2
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Real
       && lk != 8                   // Imaginary
       && lk != 9                   // Comment
       && lk != 12                  // '!'
       && lk != 20                  // '('
       && lk != 25                  // '+'
       && lk != 26                  // '++'
       && lk != 29                  // '-'
       && lk != 30                  // '--'
       && lk != 37                  // ';'
       && lk != 50                  // '['
       && lk != 54                  // 'break'
       && lk != 57                  // 'continue'
       && lk != 59                  // 'do'
       && lk != 63                  // 'for'
       && lk != 64                  // 'foreach'
       && lk != 67                  // 'if'
       && lk != 68                  // 'return'
       && lk != 69                  // 'switch'
       && lk != 70                  // 'test'
       && lk != 71                  // 'try'
       && lk != 72                  // 'while'
       && lk != 73                  // '{'
       && lk != 78                  // '~'
       && lk != 459197              // 'f32' Identifier ','
       && lk != 459198              // 'f64' Identifier ','
       && lk != 459201              // 'i32' Identifier ','
       && lk != 459202)             // 'i64' Identifier ','
      {
        whitespace();
        parse_Type();
      }
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Arguments", e0);
  }

  function try_Arguments()
  {
    switch (l1)
    {
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 65:                        // 'i32'
    case 66:                        // 'i64'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(42);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 328125                // 'f32' Identifier '('
     || lk == 328126                // 'f64' Identifier '('
     || lk == 328129                // 'i32' Identifier '('
     || lk == 328130)               // 'i64' Identifier '('
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
          try_Type();
          memoize(10, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(10, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk != -2
     && lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Real
     && lk != 8                     // Imaginary
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
     && lk != 67                    // 'if'
     && lk != 68                    // 'return'
     && lk != 69                    // 'switch'
     && lk != 70                    // 'test'
     && lk != 71                    // 'try'
     && lk != 72                    // 'while'
     && lk != 73                    // '{'
     && lk != 78)                   // '~'
    {
      try_Type();
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    for (;;)
    {
      lookahead1W(20);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 61:                      // 'f32'
      case 62:                      // 'f64'
      case 65:                      // 'i32'
      case 66:                      // 'i64'
        lookahead2W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 445:                   // 'f32' Identifier
        case 446:                   // 'f64' Identifier
        case 449:                   // 'i32' Identifier
        case 450:                   // 'i64' Identifier
          lookahead3W(42);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 328125              // 'f32' Identifier '('
       || lk == 328126              // 'f64' Identifier '('
       || lk == 328129              // 'i32' Identifier '('
       || lk == 328130)             // 'i64' Identifier '('
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
            try_Type();
            memoize(11, e0A, -1);
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(11, e0A, -2);
          }
          lk = -2;
        }
      }
      if (lk != -2
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Real
       && lk != 8                   // Imaginary
       && lk != 9                   // Comment
       && lk != 12                  // '!'
       && lk != 20                  // '('
       && lk != 25                  // '+'
       && lk != 26                  // '++'
       && lk != 29                  // '-'
       && lk != 30                  // '--'
       && lk != 37                  // ';'
       && lk != 50                  // '['
       && lk != 54                  // 'break'
       && lk != 57                  // 'continue'
       && lk != 59                  // 'do'
       && lk != 63                  // 'for'
       && lk != 64                  // 'foreach'
       && lk != 67                  // 'if'
       && lk != 68                  // 'return'
       && lk != 69                  // 'switch'
       && lk != 70                  // 'test'
       && lk != 71                  // 'try'
       && lk != 72                  // 'while'
       && lk != 73                  // '{'
       && lk != 78                  // '~'
       && lk != 459197              // 'f32' Identifier ','
       && lk != 459198              // 'f64' Identifier ','
       && lk != 459201              // 'i32' Identifier ','
       && lk != 459202)             // 'i64' Identifier ','
      {
        try_Type();
      }
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Expression();
    }
  }

  function parse_Member()
  {
    eventHandler.startNonterminal("Member", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(49);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     || lk == 117251                // Identifier '(' Real
     || lk == 133635                // Identifier '(' Imaginary
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
     || lk == 1067523               // Identifier '(' 'i32'
     || lk == 1083907               // Identifier '(' 'i64'
     || lk == 1100291               // Identifier '(' 'if'
     || lk == 1116675               // Identifier '(' 'return'
     || lk == 1133059               // Identifier '(' 'switch'
     || lk == 1149443               // Identifier '(' 'test'
     || lk == 1165827               // Identifier '(' 'try'
     || lk == 1182211               // Identifier '(' 'while'
     || lk == 1198595               // Identifier '(' '{'
     || lk == 1280515)              // Identifier '(' '~'
    {
      lk = memoized(12, e0);
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
            lookahead1W(16);        // WhiteSpace^token | '(' | '.'
            if (l1 != 32)           // '.'
            {
              break;
            }
            consumeT(32);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(20);             // '('
          lookahead1W(26);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
        memoize(12, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
    case 346627:                    // Identifier '(' ')'
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(16);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consume(32);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(20);                  // '('
      lookahead1W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
        lookahead1W(49);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
        lookahead1W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(44);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 946:                 // '[' Real
            lookahead3W(39);        // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(30);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(27);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(48);        // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
            break;
          case 9394:                // '[' '{'
            lookahead3W(28);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 1074:                // '[' Imaginary
            lookahead3W(38);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 1586:                // '[' '!'
          case 3250:                // '[' '+'
          case 3378:                // '[' '++'
          case 3762:                // '[' '-'
          case 3890:                // '[' '--'
          case 10034:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8626:                // '[' 'if'
          case 8882:                // '[' 'switch'
          case 9010:                // '[' 'test'
          case 9266:                // '[' 'while'
            lookahead3W(4);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8370:                // '[' 'i32'
          case 8498:                // '[' 'i64'
          case 8754:                // '[' 'return'
          case 9138:                // '[' 'try'
            lookahead3W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
         && lk != 7                 // Real
         && lk != 8                 // Imaginary
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
         && lk != 65                // 'i32'
         && lk != 66                // 'i64'
         && lk != 67                // 'if'
         && lk != 68                // 'return'
         && lk != 69                // 'switch'
         && lk != 70                // 'test'
         && lk != 71                // 'try'
         && lk != 72                // 'while'
         && lk != 73                // '{'
         && lk != 74                // '|'
         && lk != 75                // '|='
         && lk != 76                // '||'
         && lk != 77                // '}'
         && lk != 78                // '~'
         && lk != 53938             // '[' ';' Identifier
         && lk != 70322             // '[' ';' Character
         && lk != 73394             // '[' 'f32' Character
         && lk != 73522             // '[' 'f64' Character
         && lk != 73906             // '[' 'i32' Character
         && lk != 74034             // '[' 'i64' Character
         && lk != 86706             // '[' ';' String
         && lk != 89778             // '[' 'f32' String
         && lk != 89906             // '[' 'f64' String
         && lk != 90290             // '[' 'i32' String
         && lk != 90418             // '[' 'i64' String
         && lk != 103090            // '[' ';' Integer
         && lk != 106162            // '[' 'f32' Integer
         && lk != 106290            // '[' 'f64' Integer
         && lk != 106674            // '[' 'i32' Integer
         && lk != 106802            // '[' 'i64' Integer
         && lk != 119474            // '[' ';' Real
         && lk != 122546            // '[' 'f32' Real
         && lk != 122674            // '[' 'f64' Real
         && lk != 123058            // '[' 'i32' Real
         && lk != 123186            // '[' 'i64' Real
         && lk != 135858            // '[' ';' Imaginary
         && lk != 138930            // '[' 'f32' Imaginary
         && lk != 139058            // '[' 'f64' Imaginary
         && lk != 139442            // '[' 'i32' Imaginary
         && lk != 139570            // '[' 'i64' Imaginary
         && lk != 152242            // '[' ';' Comment
         && lk != 155314            // '[' 'f32' Comment
         && lk != 155442            // '[' 'f64' Comment
         && lk != 155826            // '[' 'i32' Comment
         && lk != 155954            // '[' 'i64' Comment
         && lk != 201394            // '[' ';' '!'
         && lk != 204466            // '[' 'f32' '!'
         && lk != 204594            // '[' 'f64' '!'
         && lk != 204978            // '[' 'i32' '!'
         && lk != 205106            // '[' 'i64' '!'
         && lk != 332466            // '[' ';' '('
         && lk != 335538            // '[' 'f32' '('
         && lk != 335666            // '[' 'f64' '('
         && lk != 336050            // '[' 'i32' '('
         && lk != 336178            // '[' 'i64' '('
         && lk != 350642            // '[' ']' ')'
         && lk != 414386            // '[' ';' '+'
         && lk != 417458            // '[' 'f32' '+'
         && lk != 417586            // '[' 'f64' '+'
         && lk != 417970            // '[' 'i32' '+'
         && lk != 418098            // '[' 'i64' '+'
         && lk != 430770            // '[' ';' '++'
         && lk != 433842            // '[' 'f32' '++'
         && lk != 433970            // '[' 'f64' '++'
         && lk != 434354            // '[' 'i32' '++'
         && lk != 434482            // '[' 'i64' '++'
         && lk != 465330            // '[' ']' ','
         && lk != 479922            // '[' ';' '-'
         && lk != 482994            // '[' 'f32' '-'
         && lk != 483122            // '[' 'f64' '-'
         && lk != 483506            // '[' 'i32' '-'
         && lk != 483634            // '[' 'i64' '-'
         && lk != 496306            // '[' ';' '--'
         && lk != 499378            // '[' 'f32' '--'
         && lk != 499506            // '[' 'f64' '--'
         && lk != 499890            // '[' 'i32' '--'
         && lk != 500018            // '[' 'i64' '--'
         && lk != 580018            // '[' ']' ':'
         && lk != 606642            // '[' Identifier ';'
         && lk != 606770            // '[' Character ';'
         && lk != 606898            // '[' String ';'
         && lk != 607026            // '[' Integer ';'
         && lk != 607154            // '[' Real ';'
         && lk != 607282            // '[' Imaginary ';'
         && lk != 607410            // '[' Comment ';'
         && lk != 610994            // '[' ';' ';'
         && lk != 613170            // '[' 'break' ';'
         && lk != 613554            // '[' 'continue' ';'
         && lk != 614066            // '[' 'f32' ';'
         && lk != 614194            // '[' 'f64' ';'
         && lk != 614578            // '[' 'i32' ';'
         && lk != 614706            // '[' 'i64' ';'
         && lk != 823986            // '[' ';' '['
         && lk != 827058            // '[' 'f32' '['
         && lk != 827186            // '[' 'f64' '['
         && lk != 827570            // '[' 'i32' '['
         && lk != 827698            // '[' 'i64' '['
         && lk != 842162            // '[' ']' ']'
         && lk != 889522            // '[' ';' 'break'
         && lk != 892594            // '[' 'f32' 'break'
         && lk != 892722            // '[' 'f64' 'break'
         && lk != 893106            // '[' 'i32' 'break'
         && lk != 893234            // '[' 'i64' 'break'
         && lk != 924082            // '[' ']' 'catch'
         && lk != 938674            // '[' ';' 'continue'
         && lk != 941746            // '[' 'f32' 'continue'
         && lk != 941874            // '[' 'f64' 'continue'
         && lk != 942258            // '[' 'i32' 'continue'
         && lk != 942386            // '[' 'i64' 'continue'
         && lk != 971442            // '[' ';' 'do'
         && lk != 974514            // '[' 'f32' 'do'
         && lk != 974642            // '[' 'f64' 'do'
         && lk != 975026            // '[' 'i32' 'do'
         && lk != 975154            // '[' 'i64' 'do'
         && lk != 989618            // '[' ']' 'else'
         && lk != 1004210           // '[' ';' 'f32'
         && lk != 1007282           // '[' 'f32' 'f32'
         && lk != 1007410           // '[' 'f64' 'f32'
         && lk != 1007794           // '[' 'i32' 'f32'
         && lk != 1007922           // '[' 'i64' 'f32'
         && lk != 1020594           // '[' ';' 'f64'
         && lk != 1023666           // '[' 'f32' 'f64'
         && lk != 1023794           // '[' 'f64' 'f64'
         && lk != 1024178           // '[' 'i32' 'f64'
         && lk != 1024306           // '[' 'i64' 'f64'
         && lk != 1036978           // '[' ';' 'for'
         && lk != 1040050           // '[' 'f32' 'for'
         && lk != 1040178           // '[' 'f64' 'for'
         && lk != 1040562           // '[' 'i32' 'for'
         && lk != 1040690           // '[' 'i64' 'for'
         && lk != 1053362           // '[' ';' 'foreach'
         && lk != 1056434           // '[' 'f32' 'foreach'
         && lk != 1056562           // '[' 'f64' 'foreach'
         && lk != 1056946           // '[' 'i32' 'foreach'
         && lk != 1057074           // '[' 'i64' 'foreach'
         && lk != 1069746           // '[' ';' 'i32'
         && lk != 1072818           // '[' 'f32' 'i32'
         && lk != 1072946           // '[' 'f64' 'i32'
         && lk != 1073330           // '[' 'i32' 'i32'
         && lk != 1073458           // '[' 'i64' 'i32'
         && lk != 1086130           // '[' ';' 'i64'
         && lk != 1089202           // '[' 'f32' 'i64'
         && lk != 1089330           // '[' 'f64' 'i64'
         && lk != 1089714           // '[' 'i32' 'i64'
         && lk != 1089842           // '[' 'i64' 'i64'
         && lk != 1102514           // '[' ';' 'if'
         && lk != 1105586           // '[' 'f32' 'if'
         && lk != 1105714           // '[' 'f64' 'if'
         && lk != 1106098           // '[' 'i32' 'if'
         && lk != 1106226           // '[' 'i64' 'if'
         && lk != 1118898           // '[' ';' 'return'
         && lk != 1121970           // '[' 'f32' 'return'
         && lk != 1122098           // '[' 'f64' 'return'
         && lk != 1122482           // '[' 'i32' 'return'
         && lk != 1122610           // '[' 'i64' 'return'
         && lk != 1135282           // '[' ';' 'switch'
         && lk != 1138354           // '[' 'f32' 'switch'
         && lk != 1138482           // '[' 'f64' 'switch'
         && lk != 1138866           // '[' 'i32' 'switch'
         && lk != 1138994           // '[' 'i64' 'switch'
         && lk != 1151666           // '[' ';' 'test'
         && lk != 1154738           // '[' 'f32' 'test'
         && lk != 1154866           // '[' 'f64' 'test'
         && lk != 1155250           // '[' 'i32' 'test'
         && lk != 1155378           // '[' 'i64' 'test'
         && lk != 1168050           // '[' ';' 'try'
         && lk != 1171122           // '[' 'f32' 'try'
         && lk != 1171250           // '[' 'f64' 'try'
         && lk != 1171634           // '[' 'i32' 'try'
         && lk != 1171762           // '[' 'i64' 'try'
         && lk != 1184434           // '[' ';' 'while'
         && lk != 1187506           // '[' 'f32' 'while'
         && lk != 1187634           // '[' 'f64' 'while'
         && lk != 1188018           // '[' 'i32' 'while'
         && lk != 1188146           // '[' 'i64' 'while'
         && lk != 1200818           // '[' ';' '{'
         && lk != 1203890           // '[' 'f32' '{'
         && lk != 1204018           // '[' 'f64' '{'
         && lk != 1204402           // '[' 'i32' '{'
         && lk != 1204530           // '[' 'i64' '{'
         && lk != 1282738           // '[' ';' '~'
         && lk != 1285810           // '[' 'f32' '~'
         && lk != 1285938           // '[' 'f64' '~'
         && lk != 1286322           // '[' 'i32' '~'
         && lk != 1286450)          // '[' 'i64' '~'
        {
          lk = memoized(13, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(50);         // '['
              lookahead1W(27);      // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
            memoize(13, e0, lk);
          }
        }
        if (lk == -2
         || lk == 1                 // END
         || lk == 3                 // Identifier
         || lk == 4                 // Character
         || lk == 5                 // String
         || lk == 6                 // Integer
         || lk == 7                 // Real
         || lk == 8                 // Imaginary
         || lk == 9                 // Comment
         || lk == 12                // '!'
         || lk == 13                // '!='
         || lk == 15                // '%'
         || lk == 16                // '%='
         || lk == 17                // '&'
         || lk == 18                // '&&'
         || lk == 19                // '&='
         || lk == 20                // '('
         || lk == 21                // ')'
         || lk == 22                // '*'
         || lk == 23                // '**'
         || lk == 24                // '*='
         || lk == 25                // '+'
         || lk == 26                // '++'
         || lk == 27                // '+='
         || lk == 28                // ','
         || lk == 29                // '-'
         || lk == 30                // '--'
         || lk == 31                // '-='
         || lk == 33                // '/'
         || lk == 34                // '/='
         || lk == 35                // ':'
         || lk == 36                // ':='
         || lk == 37                // ';'
         || lk == 38                // '<'
         || lk == 39                // '<<'
         || lk == 40                // '<<='
         || lk == 41                // '<='
         || lk == 42                // '='
         || lk == 43                // '=='
         || lk == 44                // '>'
         || lk == 45                // '>='
         || lk == 46                // '>>'
         || lk == 47                // '>>='
         || lk == 48                // '?'
         || lk == 49                // '?='
         || lk == 51                // ']'
         || lk == 52                // '^'
         || lk == 53                // '^='
         || lk == 54                // 'break'
         || lk == 55                // 'case'
         || lk == 56                // 'catch'
         || lk == 57                // 'continue'
         || lk == 58                // 'default'
         || lk == 59                // 'do'
         || lk == 60                // 'else'
         || lk == 61                // 'f32'
         || lk == 62                // 'f64'
         || lk == 63                // 'for'
         || lk == 64                // 'foreach'
         || lk == 65                // 'i32'
         || lk == 66                // 'i64'
         || lk == 67                // 'if'
         || lk == 68                // 'return'
         || lk == 69                // 'switch'
         || lk == 70                // 'test'
         || lk == 71                // 'try'
         || lk == 72                // 'while'
         || lk == 73                // '{'
         || lk == 74                // '|'
         || lk == 75                // '|='
         || lk == 76                // '||'
         || lk == 77                // '}'
         || lk == 78                // '~'
         || lk == 53938             // '[' ';' Identifier
         || lk == 70322             // '[' ';' Character
         || lk == 86706             // '[' ';' String
         || lk == 103090            // '[' ';' Integer
         || lk == 119474            // '[' ';' Real
         || lk == 135858            // '[' ';' Imaginary
         || lk == 152242            // '[' ';' Comment
         || lk == 201394            // '[' ';' '!'
         || lk == 332466            // '[' ';' '('
         || lk == 414386            // '[' ';' '+'
         || lk == 430770            // '[' ';' '++'
         || lk == 479922            // '[' ';' '-'
         || lk == 496306            // '[' ';' '--'
         || lk == 606642            // '[' Identifier ';'
         || lk == 606770            // '[' Character ';'
         || lk == 606898            // '[' String ';'
         || lk == 607026            // '[' Integer ';'
         || lk == 607154            // '[' Real ';'
         || lk == 607282            // '[' Imaginary ';'
         || lk == 607410            // '[' Comment ';'
         || lk == 610994            // '[' ';' ';'
         || lk == 613170            // '[' 'break' ';'
         || lk == 613554            // '[' 'continue' ';'
         || lk == 823986            // '[' ';' '['
         || lk == 889522            // '[' ';' 'break'
         || lk == 938674            // '[' ';' 'continue'
         || lk == 971442            // '[' ';' 'do'
         || lk == 1004210           // '[' ';' 'f32'
         || lk == 1020594           // '[' ';' 'f64'
         || lk == 1036978           // '[' ';' 'for'
         || lk == 1053362           // '[' ';' 'foreach'
         || lk == 1069746           // '[' ';' 'i32'
         || lk == 1086130           // '[' ';' 'i64'
         || lk == 1102514           // '[' ';' 'if'
         || lk == 1118898           // '[' ';' 'return'
         || lk == 1135282           // '[' ';' 'switch'
         || lk == 1151666           // '[' ';' 'test'
         || lk == 1168050           // '[' ';' 'try'
         || lk == 1184434           // '[' ';' 'while'
         || lk == 1200818           // '[' ';' '{'
         || lk == 1282738)          // '[' ';' '~'
        {
          break;
        }
        consume(50);                // '['
        lookahead1W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
      lookahead2W(49);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
     || lk == 117251                // Identifier '(' Real
     || lk == 133635                // Identifier '(' Imaginary
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
     || lk == 1067523               // Identifier '(' 'i32'
     || lk == 1083907               // Identifier '(' 'i64'
     || lk == 1100291               // Identifier '(' 'if'
     || lk == 1116675               // Identifier '(' 'return'
     || lk == 1133059               // Identifier '(' 'switch'
     || lk == 1149443               // Identifier '(' 'test'
     || lk == 1165827               // Identifier '(' 'try'
     || lk == 1182211               // Identifier '(' 'while'
     || lk == 1198595               // Identifier '(' '{'
     || lk == 1280515)              // Identifier '(' '~'
    {
      lk = memoized(12, e0);
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
            lookahead1W(16);        // WhiteSpace^token | '(' | '.'
            if (l1 != 32)           // '.'
            {
              break;
            }
            consumeT(32);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(20);             // '('
          lookahead1W(26);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          if (l1 != 21)             // ')'
          {
            try_Arguments();
          }
          consumeT(21);             // ')'
          memoize(12, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(12, e0A, -2);
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
        lookahead1W(16);            // WhiteSpace^token | '(' | '.'
        if (l1 != 32)               // '.'
        {
          break;
        }
        consumeT(32);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(20);                 // '('
      lookahead1W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
        lookahead1W(49);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
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
        lookahead1W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(44);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 946:                 // '[' Real
            lookahead3W(39);        // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(30);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(27);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(48);        // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
            break;
          case 9394:                // '[' '{'
            lookahead3W(28);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 1074:                // '[' Imaginary
            lookahead3W(38);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 1586:                // '[' '!'
          case 3250:                // '[' '+'
          case 3378:                // '[' '++'
          case 3762:                // '[' '-'
          case 3890:                // '[' '--'
          case 10034:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8626:                // '[' 'if'
          case 8882:                // '[' 'switch'
          case 9010:                // '[' 'test'
          case 9266:                // '[' 'while'
            lookahead3W(4);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8370:                // '[' 'i32'
          case 8498:                // '[' 'i64'
          case 8754:                // '[' 'return'
          case 9138:                // '[' 'try'
            lookahead3W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
         && lk != 7                 // Real
         && lk != 8                 // Imaginary
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
         && lk != 65                // 'i32'
         && lk != 66                // 'i64'
         && lk != 67                // 'if'
         && lk != 68                // 'return'
         && lk != 69                // 'switch'
         && lk != 70                // 'test'
         && lk != 71                // 'try'
         && lk != 72                // 'while'
         && lk != 73                // '{'
         && lk != 74                // '|'
         && lk != 75                // '|='
         && lk != 76                // '||'
         && lk != 77                // '}'
         && lk != 78                // '~'
         && lk != 53938             // '[' ';' Identifier
         && lk != 70322             // '[' ';' Character
         && lk != 73394             // '[' 'f32' Character
         && lk != 73522             // '[' 'f64' Character
         && lk != 73906             // '[' 'i32' Character
         && lk != 74034             // '[' 'i64' Character
         && lk != 86706             // '[' ';' String
         && lk != 89778             // '[' 'f32' String
         && lk != 89906             // '[' 'f64' String
         && lk != 90290             // '[' 'i32' String
         && lk != 90418             // '[' 'i64' String
         && lk != 103090            // '[' ';' Integer
         && lk != 106162            // '[' 'f32' Integer
         && lk != 106290            // '[' 'f64' Integer
         && lk != 106674            // '[' 'i32' Integer
         && lk != 106802            // '[' 'i64' Integer
         && lk != 119474            // '[' ';' Real
         && lk != 122546            // '[' 'f32' Real
         && lk != 122674            // '[' 'f64' Real
         && lk != 123058            // '[' 'i32' Real
         && lk != 123186            // '[' 'i64' Real
         && lk != 135858            // '[' ';' Imaginary
         && lk != 138930            // '[' 'f32' Imaginary
         && lk != 139058            // '[' 'f64' Imaginary
         && lk != 139442            // '[' 'i32' Imaginary
         && lk != 139570            // '[' 'i64' Imaginary
         && lk != 152242            // '[' ';' Comment
         && lk != 155314            // '[' 'f32' Comment
         && lk != 155442            // '[' 'f64' Comment
         && lk != 155826            // '[' 'i32' Comment
         && lk != 155954            // '[' 'i64' Comment
         && lk != 201394            // '[' ';' '!'
         && lk != 204466            // '[' 'f32' '!'
         && lk != 204594            // '[' 'f64' '!'
         && lk != 204978            // '[' 'i32' '!'
         && lk != 205106            // '[' 'i64' '!'
         && lk != 332466            // '[' ';' '('
         && lk != 335538            // '[' 'f32' '('
         && lk != 335666            // '[' 'f64' '('
         && lk != 336050            // '[' 'i32' '('
         && lk != 336178            // '[' 'i64' '('
         && lk != 350642            // '[' ']' ')'
         && lk != 414386            // '[' ';' '+'
         && lk != 417458            // '[' 'f32' '+'
         && lk != 417586            // '[' 'f64' '+'
         && lk != 417970            // '[' 'i32' '+'
         && lk != 418098            // '[' 'i64' '+'
         && lk != 430770            // '[' ';' '++'
         && lk != 433842            // '[' 'f32' '++'
         && lk != 433970            // '[' 'f64' '++'
         && lk != 434354            // '[' 'i32' '++'
         && lk != 434482            // '[' 'i64' '++'
         && lk != 465330            // '[' ']' ','
         && lk != 479922            // '[' ';' '-'
         && lk != 482994            // '[' 'f32' '-'
         && lk != 483122            // '[' 'f64' '-'
         && lk != 483506            // '[' 'i32' '-'
         && lk != 483634            // '[' 'i64' '-'
         && lk != 496306            // '[' ';' '--'
         && lk != 499378            // '[' 'f32' '--'
         && lk != 499506            // '[' 'f64' '--'
         && lk != 499890            // '[' 'i32' '--'
         && lk != 500018            // '[' 'i64' '--'
         && lk != 580018            // '[' ']' ':'
         && lk != 606642            // '[' Identifier ';'
         && lk != 606770            // '[' Character ';'
         && lk != 606898            // '[' String ';'
         && lk != 607026            // '[' Integer ';'
         && lk != 607154            // '[' Real ';'
         && lk != 607282            // '[' Imaginary ';'
         && lk != 607410            // '[' Comment ';'
         && lk != 610994            // '[' ';' ';'
         && lk != 613170            // '[' 'break' ';'
         && lk != 613554            // '[' 'continue' ';'
         && lk != 614066            // '[' 'f32' ';'
         && lk != 614194            // '[' 'f64' ';'
         && lk != 614578            // '[' 'i32' ';'
         && lk != 614706            // '[' 'i64' ';'
         && lk != 823986            // '[' ';' '['
         && lk != 827058            // '[' 'f32' '['
         && lk != 827186            // '[' 'f64' '['
         && lk != 827570            // '[' 'i32' '['
         && lk != 827698            // '[' 'i64' '['
         && lk != 842162            // '[' ']' ']'
         && lk != 889522            // '[' ';' 'break'
         && lk != 892594            // '[' 'f32' 'break'
         && lk != 892722            // '[' 'f64' 'break'
         && lk != 893106            // '[' 'i32' 'break'
         && lk != 893234            // '[' 'i64' 'break'
         && lk != 924082            // '[' ']' 'catch'
         && lk != 938674            // '[' ';' 'continue'
         && lk != 941746            // '[' 'f32' 'continue'
         && lk != 941874            // '[' 'f64' 'continue'
         && lk != 942258            // '[' 'i32' 'continue'
         && lk != 942386            // '[' 'i64' 'continue'
         && lk != 971442            // '[' ';' 'do'
         && lk != 974514            // '[' 'f32' 'do'
         && lk != 974642            // '[' 'f64' 'do'
         && lk != 975026            // '[' 'i32' 'do'
         && lk != 975154            // '[' 'i64' 'do'
         && lk != 989618            // '[' ']' 'else'
         && lk != 1004210           // '[' ';' 'f32'
         && lk != 1007282           // '[' 'f32' 'f32'
         && lk != 1007410           // '[' 'f64' 'f32'
         && lk != 1007794           // '[' 'i32' 'f32'
         && lk != 1007922           // '[' 'i64' 'f32'
         && lk != 1020594           // '[' ';' 'f64'
         && lk != 1023666           // '[' 'f32' 'f64'
         && lk != 1023794           // '[' 'f64' 'f64'
         && lk != 1024178           // '[' 'i32' 'f64'
         && lk != 1024306           // '[' 'i64' 'f64'
         && lk != 1036978           // '[' ';' 'for'
         && lk != 1040050           // '[' 'f32' 'for'
         && lk != 1040178           // '[' 'f64' 'for'
         && lk != 1040562           // '[' 'i32' 'for'
         && lk != 1040690           // '[' 'i64' 'for'
         && lk != 1053362           // '[' ';' 'foreach'
         && lk != 1056434           // '[' 'f32' 'foreach'
         && lk != 1056562           // '[' 'f64' 'foreach'
         && lk != 1056946           // '[' 'i32' 'foreach'
         && lk != 1057074           // '[' 'i64' 'foreach'
         && lk != 1069746           // '[' ';' 'i32'
         && lk != 1072818           // '[' 'f32' 'i32'
         && lk != 1072946           // '[' 'f64' 'i32'
         && lk != 1073330           // '[' 'i32' 'i32'
         && lk != 1073458           // '[' 'i64' 'i32'
         && lk != 1086130           // '[' ';' 'i64'
         && lk != 1089202           // '[' 'f32' 'i64'
         && lk != 1089330           // '[' 'f64' 'i64'
         && lk != 1089714           // '[' 'i32' 'i64'
         && lk != 1089842           // '[' 'i64' 'i64'
         && lk != 1102514           // '[' ';' 'if'
         && lk != 1105586           // '[' 'f32' 'if'
         && lk != 1105714           // '[' 'f64' 'if'
         && lk != 1106098           // '[' 'i32' 'if'
         && lk != 1106226           // '[' 'i64' 'if'
         && lk != 1118898           // '[' ';' 'return'
         && lk != 1121970           // '[' 'f32' 'return'
         && lk != 1122098           // '[' 'f64' 'return'
         && lk != 1122482           // '[' 'i32' 'return'
         && lk != 1122610           // '[' 'i64' 'return'
         && lk != 1135282           // '[' ';' 'switch'
         && lk != 1138354           // '[' 'f32' 'switch'
         && lk != 1138482           // '[' 'f64' 'switch'
         && lk != 1138866           // '[' 'i32' 'switch'
         && lk != 1138994           // '[' 'i64' 'switch'
         && lk != 1151666           // '[' ';' 'test'
         && lk != 1154738           // '[' 'f32' 'test'
         && lk != 1154866           // '[' 'f64' 'test'
         && lk != 1155250           // '[' 'i32' 'test'
         && lk != 1155378           // '[' 'i64' 'test'
         && lk != 1168050           // '[' ';' 'try'
         && lk != 1171122           // '[' 'f32' 'try'
         && lk != 1171250           // '[' 'f64' 'try'
         && lk != 1171634           // '[' 'i32' 'try'
         && lk != 1171762           // '[' 'i64' 'try'
         && lk != 1184434           // '[' ';' 'while'
         && lk != 1187506           // '[' 'f32' 'while'
         && lk != 1187634           // '[' 'f64' 'while'
         && lk != 1188018           // '[' 'i32' 'while'
         && lk != 1188146           // '[' 'i64' 'while'
         && lk != 1200818           // '[' ';' '{'
         && lk != 1203890           // '[' 'f32' '{'
         && lk != 1204018           // '[' 'f64' '{'
         && lk != 1204402           // '[' 'i32' '{'
         && lk != 1204530           // '[' 'i64' '{'
         && lk != 1282738           // '[' ';' '~'
         && lk != 1285810           // '[' 'f32' '~'
         && lk != 1285938           // '[' 'f64' '~'
         && lk != 1286322           // '[' 'i32' '~'
         && lk != 1286450)          // '[' 'i64' '~'
        {
          lk = memoized(13, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(50);         // '['
              lookahead1W(27);      // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
              if (l1 != 51)         // ']'
              {
                try_Arguments();
              }
              consumeT(51);         // ']'
              memoize(13, e0B, -1);
              continue;
            }
            catch (p1B)
            {
              b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
              b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
              b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
              b3 = b3B; e3 = e3B; end = e3B; }}}
              memoize(13, e0B, -2);
              break;
            }
          }
        }
        if (lk == -2
         || lk == 1                 // END
         || lk == 3                 // Identifier
         || lk == 4                 // Character
         || lk == 5                 // String
         || lk == 6                 // Integer
         || lk == 7                 // Real
         || lk == 8                 // Imaginary
         || lk == 9                 // Comment
         || lk == 12                // '!'
         || lk == 13                // '!='
         || lk == 15                // '%'
         || lk == 16                // '%='
         || lk == 17                // '&'
         || lk == 18                // '&&'
         || lk == 19                // '&='
         || lk == 20                // '('
         || lk == 21                // ')'
         || lk == 22                // '*'
         || lk == 23                // '**'
         || lk == 24                // '*='
         || lk == 25                // '+'
         || lk == 26                // '++'
         || lk == 27                // '+='
         || lk == 28                // ','
         || lk == 29                // '-'
         || lk == 30                // '--'
         || lk == 31                // '-='
         || lk == 33                // '/'
         || lk == 34                // '/='
         || lk == 35                // ':'
         || lk == 36                // ':='
         || lk == 37                // ';'
         || lk == 38                // '<'
         || lk == 39                // '<<'
         || lk == 40                // '<<='
         || lk == 41                // '<='
         || lk == 42                // '='
         || lk == 43                // '=='
         || lk == 44                // '>'
         || lk == 45                // '>='
         || lk == 46                // '>>'
         || lk == 47                // '>>='
         || lk == 48                // '?'
         || lk == 49                // '?='
         || lk == 51                // ']'
         || lk == 52                // '^'
         || lk == 53                // '^='
         || lk == 54                // 'break'
         || lk == 55                // 'case'
         || lk == 56                // 'catch'
         || lk == 57                // 'continue'
         || lk == 58                // 'default'
         || lk == 59                // 'do'
         || lk == 60                // 'else'
         || lk == 61                // 'f32'
         || lk == 62                // 'f64'
         || lk == 63                // 'for'
         || lk == 64                // 'foreach'
         || lk == 65                // 'i32'
         || lk == 66                // 'i64'
         || lk == 67                // 'if'
         || lk == 68                // 'return'
         || lk == 69                // 'switch'
         || lk == 70                // 'test'
         || lk == 71                // 'try'
         || lk == 72                // 'while'
         || lk == 73                // '{'
         || lk == 74                // '|'
         || lk == 75                // '|='
         || lk == 76                // '||'
         || lk == 77                // '}'
         || lk == 78                // '~'
         || lk == 53938             // '[' ';' Identifier
         || lk == 70322             // '[' ';' Character
         || lk == 86706             // '[' ';' String
         || lk == 103090            // '[' ';' Integer
         || lk == 119474            // '[' ';' Real
         || lk == 135858            // '[' ';' Imaginary
         || lk == 152242            // '[' ';' Comment
         || lk == 201394            // '[' ';' '!'
         || lk == 332466            // '[' ';' '('
         || lk == 414386            // '[' ';' '+'
         || lk == 430770            // '[' ';' '++'
         || lk == 479922            // '[' ';' '-'
         || lk == 496306            // '[' ';' '--'
         || lk == 606642            // '[' Identifier ';'
         || lk == 606770            // '[' Character ';'
         || lk == 606898            // '[' String ';'
         || lk == 607026            // '[' Integer ';'
         || lk == 607154            // '[' Real ';'
         || lk == 607282            // '[' Imaginary ';'
         || lk == 607410            // '[' Comment ';'
         || lk == 610994            // '[' ';' ';'
         || lk == 613170            // '[' 'break' ';'
         || lk == 613554            // '[' 'continue' ';'
         || lk == 823986            // '[' ';' '['
         || lk == 889522            // '[' ';' 'break'
         || lk == 938674            // '[' ';' 'continue'
         || lk == 971442            // '[' ';' 'do'
         || lk == 1004210           // '[' ';' 'f32'
         || lk == 1020594           // '[' ';' 'f64'
         || lk == 1036978           // '[' ';' 'for'
         || lk == 1053362           // '[' ';' 'foreach'
         || lk == 1069746           // '[' ';' 'i32'
         || lk == 1086130           // '[' ';' 'i64'
         || lk == 1102514           // '[' ';' 'if'
         || lk == 1118898           // '[' ';' 'return'
         || lk == 1135282           // '[' ';' 'switch'
         || lk == 1151666           // '[' ';' 'test'
         || lk == 1168050           // '[' ';' 'try'
         || lk == 1184434           // '[' ';' 'while'
         || lk == 1200818           // '[' ';' '{'
         || lk == 1282738)          // '[' ';' '~'
        {
          break;
        }
        consumeT(50);               // '['
        lookahead1W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
    consume(73);                    // '{'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Element();
    for (;;)
    {
      lookahead1W(19);              // WhiteSpace^token | ',' | '}'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(77);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(73);                   // '{'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Element();
    for (;;)
    {
      lookahead1W(19);              // WhiteSpace^token | ',' | '}'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      try_Element();
    }
    consumeT(77);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(50);                    // '['
    lookahead1W(27);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(30);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 610981)               // ';' ';' ';'
    {
      lk = memoized(14, e0);
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
        memoize(14, e0, lk);
      }
    }
    if (lk != -2
     && lk != 51                    // ']'
     && lk != 421                   // ';' Identifier
     && lk != 549                   // ';' Character
     && lk != 677                   // ';' String
     && lk != 805                   // ';' Integer
     && lk != 933                   // ';' Real
     && lk != 1061                  // ';' Imaginary
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
     && lk != 8357                  // ';' 'i32'
     && lk != 8485                  // ';' 'i64'
     && lk != 8613                  // ';' 'if'
     && lk != 8741                  // ';' 'return'
     && lk != 8869                  // ';' 'switch'
     && lk != 8997                  // ';' 'test'
     && lk != 9125                  // ';' 'try'
     && lk != 9253                  // ';' 'while'
     && lk != 9381                  // ';' '{'
     && lk != 10021                 // ';' '~'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      whitespace();
      parse_Row();
    }
    consume(51);                    // ']'
    eventHandler.endNonterminal("Matrix", e0);
  }

  function try_Matrix()
  {
    consumeT(50);                   // '['
    lookahead1W(27);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(30);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 610981)               // ';' ';' ';'
    {
      lk = memoized(14, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Row();
          memoize(14, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(14, e0A, -2);
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
     && lk != 933                   // ';' Real
     && lk != 1061                  // ';' Imaginary
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
     && lk != 8357                  // ';' 'i32'
     && lk != 8485                  // ';' 'i64'
     && lk != 8613                  // ';' 'if'
     && lk != 8741                  // ';' 'return'
     && lk != 8869                  // ';' 'switch'
     && lk != 8997                  // ';' 'test'
     && lk != 9125                  // ';' 'try'
     && lk != 9253                  // ';' 'while'
     && lk != 9381                  // ';' '{'
     && lk != 10021                 // ';' '~'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
      lookahead2W(43);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(37);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
      lookahead1W(8);               // WhiteSpace^token | ':'
      consume(35);                  // ':'
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Element", e0);
  }

  function try_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(43);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(37);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
      lookahead1W(8);               // WhiteSpace^token | ':'
      consumeT(35);                 // ':'
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'test' | 'try' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_Value()
  {
    eventHandler.startNonterminal("Value", e0);
    switch (l1)
    {
    case 7:                         // Real
      lookahead2W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 1031:                    // Real Imaginary
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 17415                 // Real Imaginary END
     || lk == 50183                 // Real Imaginary Identifier
     || lk == 66567                 // Real Imaginary Character
     || lk == 82951                 // Real Imaginary String
     || lk == 99335                 // Real Imaginary Integer
     || lk == 115719                // Real Imaginary Real
     || lk == 132103                // Real Imaginary Imaginary
     || lk == 148487                // Real Imaginary Comment
     || lk == 197639                // Real Imaginary '!'
     || lk == 214023                // Real Imaginary '!='
     || lk == 246791                // Real Imaginary '%'
     || lk == 263175                // Real Imaginary '%='
     || lk == 279559                // Real Imaginary '&'
     || lk == 295943                // Real Imaginary '&&'
     || lk == 312327                // Real Imaginary '&='
     || lk == 328711                // Real Imaginary '('
     || lk == 361479                // Real Imaginary '*'
     || lk == 377863                // Real Imaginary '**'
     || lk == 394247                // Real Imaginary '*='
     || lk == 410631                // Real Imaginary '+'
     || lk == 427015                // Real Imaginary '++'
     || lk == 443399                // Real Imaginary '+='
     || lk == 476167                // Real Imaginary '-'
     || lk == 492551                // Real Imaginary '--'
     || lk == 508935                // Real Imaginary '-='
     || lk == 541703                // Real Imaginary '/'
     || lk == 558087                // Real Imaginary '/='
     || lk == 590855                // Real Imaginary ':='
     || lk == 607239                // Real Imaginary ';'
     || lk == 623623                // Real Imaginary '<'
     || lk == 640007                // Real Imaginary '<<'
     || lk == 656391                // Real Imaginary '<<='
     || lk == 672775                // Real Imaginary '<='
     || lk == 689159                // Real Imaginary '='
     || lk == 705543                // Real Imaginary '=='
     || lk == 721927                // Real Imaginary '>'
     || lk == 738311                // Real Imaginary '>='
     || lk == 754695                // Real Imaginary '>>'
     || lk == 771079                // Real Imaginary '>>='
     || lk == 787463                // Real Imaginary '?'
     || lk == 803847                // Real Imaginary '?='
     || lk == 820231                // Real Imaginary '['
     || lk == 852999                // Real Imaginary '^'
     || lk == 869383                // Real Imaginary '^='
     || lk == 885767                // Real Imaginary 'break'
     || lk == 902151                // Real Imaginary 'case'
     || lk == 934919                // Real Imaginary 'continue'
     || lk == 951303                // Real Imaginary 'default'
     || lk == 967687                // Real Imaginary 'do'
     || lk == 1000455               // Real Imaginary 'f32'
     || lk == 1016839               // Real Imaginary 'f64'
     || lk == 1033223               // Real Imaginary 'for'
     || lk == 1049607               // Real Imaginary 'foreach'
     || lk == 1065991               // Real Imaginary 'i32'
     || lk == 1082375               // Real Imaginary 'i64'
     || lk == 1098759               // Real Imaginary 'if'
     || lk == 1115143               // Real Imaginary 'return'
     || lk == 1131527               // Real Imaginary 'switch'
     || lk == 1147911               // Real Imaginary 'test'
     || lk == 1164295               // Real Imaginary 'try'
     || lk == 1180679               // Real Imaginary 'while'
     || lk == 1197063               // Real Imaginary '{'
     || lk == 1213447               // Real Imaginary '|'
     || lk == 1229831               // Real Imaginary '|='
     || lk == 1246215               // Real Imaginary '||'
     || lk == 1262599               // Real Imaginary '}'
     || lk == 1278983)              // Real Imaginary '~'
    {
      lk = memoized(15, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(7);              // Real
          lk = -2;
        }
        catch (p2A)
        {
          lk = -3;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(15, e0, lk);
      }
    }
    switch (lk)
    {
    case 6:                         // Integer
      consume(6);                   // Integer
      break;
    case -3:
    case 8:                         // Imaginary
    case 345095:                    // Real Imaginary ')'
    case 459783:                    // Real Imaginary ','
    case 574471:                    // Real Imaginary ':'
    case 836615:                    // Real Imaginary ']'
    case 918535:                    // Real Imaginary 'catch'
    case 984071:                    // Real Imaginary 'else'
      parse_Complex();
      break;
    case 4:                         // Character
      consume(4);                   // Character
      break;
    case 5:                         // String
      consume(5);                   // String
      break;
    case 73:                        // '{'
      parse_Array();
      break;
    case 50:                        // '['
      parse_Matrix();
      break;
    default:
      consume(7);                   // Real
    }
    eventHandler.endNonterminal("Value", e0);
  }

  function try_Value()
  {
    switch (l1)
    {
    case 7:                         // Real
      lookahead2W(48);              // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 1031:                    // Real Imaginary
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'test' | 'try' | 'while' | '{' |
                                    // '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 17415                 // Real Imaginary END
     || lk == 50183                 // Real Imaginary Identifier
     || lk == 66567                 // Real Imaginary Character
     || lk == 82951                 // Real Imaginary String
     || lk == 99335                 // Real Imaginary Integer
     || lk == 115719                // Real Imaginary Real
     || lk == 132103                // Real Imaginary Imaginary
     || lk == 148487                // Real Imaginary Comment
     || lk == 197639                // Real Imaginary '!'
     || lk == 214023                // Real Imaginary '!='
     || lk == 246791                // Real Imaginary '%'
     || lk == 263175                // Real Imaginary '%='
     || lk == 279559                // Real Imaginary '&'
     || lk == 295943                // Real Imaginary '&&'
     || lk == 312327                // Real Imaginary '&='
     || lk == 328711                // Real Imaginary '('
     || lk == 361479                // Real Imaginary '*'
     || lk == 377863                // Real Imaginary '**'
     || lk == 394247                // Real Imaginary '*='
     || lk == 410631                // Real Imaginary '+'
     || lk == 427015                // Real Imaginary '++'
     || lk == 443399                // Real Imaginary '+='
     || lk == 476167                // Real Imaginary '-'
     || lk == 492551                // Real Imaginary '--'
     || lk == 508935                // Real Imaginary '-='
     || lk == 541703                // Real Imaginary '/'
     || lk == 558087                // Real Imaginary '/='
     || lk == 590855                // Real Imaginary ':='
     || lk == 607239                // Real Imaginary ';'
     || lk == 623623                // Real Imaginary '<'
     || lk == 640007                // Real Imaginary '<<'
     || lk == 656391                // Real Imaginary '<<='
     || lk == 672775                // Real Imaginary '<='
     || lk == 689159                // Real Imaginary '='
     || lk == 705543                // Real Imaginary '=='
     || lk == 721927                // Real Imaginary '>'
     || lk == 738311                // Real Imaginary '>='
     || lk == 754695                // Real Imaginary '>>'
     || lk == 771079                // Real Imaginary '>>='
     || lk == 787463                // Real Imaginary '?'
     || lk == 803847                // Real Imaginary '?='
     || lk == 820231                // Real Imaginary '['
     || lk == 852999                // Real Imaginary '^'
     || lk == 869383                // Real Imaginary '^='
     || lk == 885767                // Real Imaginary 'break'
     || lk == 902151                // Real Imaginary 'case'
     || lk == 934919                // Real Imaginary 'continue'
     || lk == 951303                // Real Imaginary 'default'
     || lk == 967687                // Real Imaginary 'do'
     || lk == 1000455               // Real Imaginary 'f32'
     || lk == 1016839               // Real Imaginary 'f64'
     || lk == 1033223               // Real Imaginary 'for'
     || lk == 1049607               // Real Imaginary 'foreach'
     || lk == 1065991               // Real Imaginary 'i32'
     || lk == 1082375               // Real Imaginary 'i64'
     || lk == 1098759               // Real Imaginary 'if'
     || lk == 1115143               // Real Imaginary 'return'
     || lk == 1131527               // Real Imaginary 'switch'
     || lk == 1147911               // Real Imaginary 'test'
     || lk == 1164295               // Real Imaginary 'try'
     || lk == 1180679               // Real Imaginary 'while'
     || lk == 1197063               // Real Imaginary '{'
     || lk == 1213447               // Real Imaginary '|'
     || lk == 1229831               // Real Imaginary '|='
     || lk == 1246215               // Real Imaginary '||'
     || lk == 1262599               // Real Imaginary '}'
     || lk == 1278983)              // Real Imaginary '~'
    {
      lk = memoized(15, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(7);              // Real
          memoize(15, e0A, -2);
          lk = -8;
        }
        catch (p2A)
        {
          lk = -3;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(15, e0A, -3);
        }
      }
    }
    switch (lk)
    {
    case 6:                         // Integer
      consumeT(6);                  // Integer
      break;
    case -3:
    case 8:                         // Imaginary
    case 345095:                    // Real Imaginary ')'
    case 459783:                    // Real Imaginary ','
    case 574471:                    // Real Imaginary ':'
    case 836615:                    // Real Imaginary ']'
    case 918535:                    // Real Imaginary 'catch'
    case 984071:                    // Real Imaginary 'else'
      try_Complex();
      break;
    case 4:                         // Character
      consumeT(4);                  // Character
      break;
    case 5:                         // String
      consumeT(5);                  // String
      break;
    case 73:                        // '{'
      try_Array();
      break;
    case 50:                        // '['
      try_Matrix();
      break;
    case -8:
      break;
    default:
      consumeT(7);                  // Real
    }
  }

  function parse_Complex()
  {
    eventHandler.startNonterminal("Complex", e0);
    if (l1 == 7)                    // Real
    {
      consume(7);                   // Real
    }
    lookahead1W(1);                 // Imaginary | WhiteSpace^token
    consume(8);                     // Imaginary
    eventHandler.endNonterminal("Complex", e0);
  }

  function try_Complex()
  {
    if (l1 == 7)                    // Real
    {
      consumeT(7);                  // Real
    }
    lookahead1W(1);                 // Imaginary | WhiteSpace^token
    consumeT(8);                    // Imaginary
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

    for (var code = result & 255; code != 0; )
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
      var i0 = (charclass << 8) + code - 1;
      code = MaiaScript.TRANSITION[(i0 & 7) + MaiaScript.TRANSITION[i0 >> 3]];

      if (code > 255)
      {
        result = code;
        code &= 255;
        end = current;
      }
    }

    result >>= 8;
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
  var s = tokenSetId < 0 ? - tokenSetId : MaiaScript.INITIAL[tokenSetId] & 255;
  for (var i = 0; i < 79; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 246 + s - 1;
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
  /*   0 */ 68, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6,
  /*  36 */ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32,
  /*  64 */ 33, 34, 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44,
  /*  95 */ 7, 33, 45, 46, 47, 48, 49, 50, 7, 51, 52, 7, 53, 54, 7, 55, 56, 39, 7, 57, 58, 59, 60, 7, 61, 62, 63, 7, 64,
  /* 124 */ 65, 66, 67, 33
];

MaiaScript.MAP1 =
[
  /*   0 */ 54, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  27 */ 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  54 */ 90, 122, 216, 154, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185,
  /*  76 */ 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 68, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1,
  /* 102 */ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  /* 136 */ 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32, 33, 45, 46, 47, 48, 49, 50, 7, 51,
  /* 163 */ 52, 7, 53, 54, 7, 55, 56, 39, 7, 57, 58, 59, 60, 7, 61, 62, 63, 7, 64, 65, 66, 67, 33, 33, 33, 33, 33, 33,
  /* 191 */ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34,
  /* 218 */ 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44, 7
];

MaiaScript.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 33, 33
];

MaiaScript.INITIAL =
[
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 537, 26, 27, 28,
  /* 29 */ 541, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 553, 42, 43, 44, 45, 46, 47, 560, 561
];

MaiaScript.TRANSITION =
[
  /*    0 */ 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148,
  /*   18 */ 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148,
  /*   36 */ 3148, 3148, 3148, 3148, 2557, 3147, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148,
  /*   54 */ 3148, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 2208, 2208, 2208, 2208, 2208, 2208, 2214, 3148,
  /*   72 */ 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148,
  /*   90 */ 3148, 3148, 3148, 2458, 2728, 3148, 2208, 2208, 2208, 2208, 2208, 2208, 2214, 3148, 3148, 3148, 3148, 3148,
  /*  108 */ 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 3148,
  /*  126 */ 3148, 3148, 3148, 3148, 2345, 2224, 2248, 2231, 2238, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047,
  /*  144 */ 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148,
  /*  162 */ 2558, 2921, 3148, 2725, 4190, 3148, 2306, 3227, 3148, 3148, 3148, 3148, 3148, 3050, 3146, 2556, 3148, 3148,
  /*  180 */ 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 4170, 2256, 3148, 3873, 3148, 3148, 2530, 3148, 2526,
  /*  198 */ 2472, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148,
  /*  216 */ 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3227,
  /*  234 */ 2285, 3730, 3148, 2273, 2285, 3974, 3148, 2284, 2286, 4345, 3498, 3148, 2284, 2285, 3731, 2968, 2286, 3148,
  /*  252 */ 2287, 2276, 4185, 3148, 3148, 3148, 3148, 3148, 2297, 2296, 2305, 3148, 2557, 3227, 3148, 3148, 3148, 3148,
  /*  270 */ 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148,
  /*  288 */ 3148, 3148, 3148, 3148, 2315, 2314, 2323, 3148, 2557, 3227, 3148, 3828, 3148, 3148, 3148, 4047, 3148, 2556,
  /*  306 */ 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148, 2574, 2336,
  /*  324 */ 3148, 2332, 2344, 3148, 2557, 3450, 3148, 3148, 3148, 3148, 3148, 3050, 2353, 2556, 3148, 3148, 2240, 3207,
  /*  342 */ 2556, 3148, 3148, 3287, 3148, 3148, 3148, 4228, 2728, 3148, 4307, 3148, 2363, 2369, 4312, 2369, 4311, 3148,
  /*  360 */ 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148,
  /*  378 */ 3148, 3148, 3148, 2458, 2728, 3148, 2379, 3148, 3682, 3685, 2377, 2377, 3686, 3148, 2557, 3227, 3148, 3148,
  /*  396 */ 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458,
  /*  414 */ 2728, 3148, 3148, 3148, 3148, 3148, 2388, 2387, 2396, 3148, 2557, 3440, 3148, 3565, 3148, 2552, 3148, 4047,
  /*  432 */ 3148, 2405, 3148, 3148, 2416, 2473, 2405, 3148, 3148, 3148, 3148, 2414, 3148, 2458, 2728, 3148, 2900, 3148,
  /*  450 */ 2216, 2424, 2448, 2431, 2438, 3148, 2456, 2466, 3148, 3687, 3687, 3148, 3148, 4047, 3148, 2556, 3148, 3148,
  /*  468 */ 2240, 3148, 2556, 3148, 4043, 3046, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148, 4422, 3888, 2907, 2481,
  /*  486 */ 4427, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148,
  /*  504 */ 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 2845, 3148, 2620, 2489, 2512, 2496, 2503, 2540, 2914, 2520,
  /*  522 */ 3148, 3148, 2538, 2548, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 4043, 3046, 3148, 3148,
  /*  540 */ 3148, 2458, 2728, 3148, 3148, 3148, 2572, 3148, 2397, 2566, 2572, 2638, 2557, 2582, 3148, 3148, 3148, 3148,
  /*  558 */ 3148, 4047, 4225, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148,
  /*  576 */ 2875, 3148, 3148, 2604, 2628, 2611, 2618, 3148, 2557, 3513, 3148, 3148, 3148, 3229, 3148, 4047, 3148, 2556,
  /*  594 */ 3148, 3148, 3523, 3148, 2636, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3118, 3148, 3329, 2650,
  /*  612 */ 3113, 2646, 2658, 3488, 2557, 2668, 2285, 3730, 3149, 2686, 2285, 4097, 3261, 2284, 2286, 4345, 3548, 4361,
  /*  630 */ 2284, 2285, 4295, 2700, 4346, 2712, 2660, 2720, 2736, 3148, 3118, 3148, 3404, 2758, 3113, 2754, 2766, 3488,
  /*  648 */ 2557, 2668, 2285, 3730, 3149, 2686, 2285, 4097, 3261, 2284, 2286, 4345, 3548, 2776, 2284, 2285, 3612, 2784,
  /*  666 */ 4346, 2796, 2660, 2720, 4185, 3148, 3118, 3148, 3404, 2758, 3113, 2754, 2766, 3488, 2557, 2668, 2285, 3730,
  /*  684 */ 3149, 2686, 2692, 4097, 3261, 2804, 2286, 4345, 3548, 2776, 2284, 2285, 3612, 2784, 4346, 2796, 2660, 2720,
  /*  702 */ 4185, 3148, 3118, 3148, 3404, 2758, 3113, 2754, 2831, 2838, 2557, 2668, 3863, 3730, 3149, 2686, 2285, 4097,
  /*  720 */ 3261, 2284, 2286, 4345, 3548, 2776, 2284, 2285, 3612, 2784, 4346, 2796, 2660, 2720, 4185, 3148, 3118, 3148,
  /*  738 */ 3404, 2758, 3113, 2754, 2766, 3488, 2557, 2668, 2285, 3730, 3149, 2686, 2691, 4097, 3261, 2853, 2286, 4345,
  /*  756 */ 3548, 2776, 2284, 2285, 3612, 2784, 4346, 2796, 2660, 2720, 4185, 3148, 3118, 3148, 3404, 2758, 3113, 2754,
  /*  774 */ 2766, 3488, 2557, 2668, 2285, 3730, 3149, 2686, 2285, 4097, 3261, 2284, 2286, 4345, 3548, 2776, 2284, 2285,
  /*  792 */ 3612, 2784, 4346, 2861, 2660, 2869, 4243, 3148, 3118, 3148, 3404, 2758, 3113, 2754, 2886, 2893, 2557, 2668,
  /*  810 */ 3858, 3730, 3149, 2686, 2285, 4097, 3261, 2284, 2286, 4345, 3548, 2776, 2284, 2285, 3612, 2784, 4346, 2796,
  /*  828 */ 2660, 2720, 4185, 3148, 3118, 3148, 3404, 2758, 3113, 2754, 2766, 3488, 2557, 2668, 2285, 3730, 3149, 2686,
  /*  846 */ 2285, 4038, 4249, 2284, 2286, 4345, 3548, 2929, 2284, 2285, 3612, 2784, 4346, 2796, 2660, 2720, 4185, 3148,
  /*  864 */ 3148, 2937, 3148, 3148, 2949, 2957, 2964, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556,
  /*  882 */ 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 2592, 2589, 2979,
  /*  900 */ 3957, 2976, 2594, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148,
  /*  918 */ 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148, 3148, 3148, 2988, 2987, 2996, 3148,
  /*  936 */ 2557, 3227, 3148, 3148, 2675, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148,
  /*  954 */ 3148, 3148, 3148, 2458, 2728, 3148, 3148, 4461, 3148, 3148, 3007, 3006, 3015, 3148, 3025, 3227, 3148, 4374,
  /*  972 */ 3033, 3041, 3148, 4047, 3148, 2556, 2406, 3058, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458,
  /*  990 */ 2728, 3148, 3148, 3148, 3148, 3148, 3069, 3068, 3077, 3148, 2557, 3227, 3148, 3148, 4268, 3148, 3148, 4047,
  /* 1008 */ 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3877,
  /* 1026 */ 3148, 3148, 3088, 3087, 3096, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148,
  /* 1044 */ 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148, 3148, 3148, 3148, 3148,
  /* 1062 */ 3148, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148,
  /* 1080 */ 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3227,
  /* 1098 */ 2285, 3730, 3148, 2273, 2285, 3974, 2324, 2284, 2286, 4345, 3498, 3106, 2284, 2285, 4129, 3128, 2286, 3202,
  /* 1116 */ 2660, 2720, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3227, 2285, 3730, 3148, 2273,
  /* 1134 */ 2285, 3974, 2324, 2284, 2286, 4345, 3498, 3106, 2284, 2285, 4129, 3128, 2286, 3202, 2768, 3140, 4219, 3148,
  /* 1152 */ 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3227, 2285, 3730, 3148, 2273, 2285, 3974, 2324, 2284,
  /* 1170 */ 2286, 4345, 3623, 3157, 2284, 2285, 4129, 3128, 2286, 3202, 2660, 2720, 4185, 3148, 3732, 3148, 2966, 2285,
  /* 1188 */ 3148, 3595, 4344, 2288, 2557, 3165, 2285, 3730, 3148, 2273, 2285, 3974, 3753, 2284, 2286, 4345, 3498, 3106,
  /* 1206 */ 2284, 2285, 4129, 3128, 2286, 3202, 2660, 2720, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288,
  /* 1224 */ 2557, 3180, 2285, 3730, 3148, 2273, 2285, 3974, 4141, 2284, 2286, 4345, 3498, 3148, 2284, 2285, 3731, 2968,
  /* 1242 */ 2286, 3148, 2287, 2276, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3227, 2285, 3730,
  /* 1260 */ 3148, 2273, 2285, 3974, 3148, 2284, 2286, 4345, 3623, 3733, 2284, 2285, 3731, 2968, 2286, 3148, 2287, 2276,
  /* 1278 */ 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3195, 2285, 3730, 3148, 2273, 2285, 3668,
  /* 1296 */ 3802, 2284, 2286, 4345, 3498, 2678, 2284, 2285, 3731, 2968, 2286, 3148, 2287, 2276, 3215, 3148, 3148, 3148,
  /* 1314 */ 2440, 3237, 2439, 3237, 3244, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148,
  /* 1332 */ 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148, 3148, 3148, 3148, 3148,
  /* 1350 */ 3148, 3148, 4191, 3254, 3148, 3148, 3148, 3148, 3148, 3050, 3843, 2556, 3148, 3148, 2240, 3148, 2556, 3148,
  /* 1368 */ 3148, 3148, 3148, 3148, 3148, 3340, 3269, 3148, 3148, 3148, 3986, 3303, 3985, 3298, 3308, 3148, 2557, 3227,
  /* 1386 */ 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148,
  /* 1404 */ 3148, 2458, 2728, 3148, 3148, 3148, 3148, 3148, 3319, 3318, 3327, 3148, 2557, 3227, 3148, 3148, 3148, 3148,
  /* 1422 */ 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148,
  /* 1440 */ 3732, 3148, 2966, 2285, 3148, 3595, 2818, 2288, 2878, 3227, 2821, 3337, 3148, 3348, 2285, 3974, 2324, 2284,
  /* 1458 */ 2286, 3359, 3498, 3106, 3367, 3377, 4204, 3387, 2286, 3202, 2660, 2720, 4185, 3148, 3402, 3148, 2596, 3416,
  /* 1476 */ 3148, 3412, 3424, 2288, 2557, 3227, 2285, 3730, 3148, 2273, 2285, 3928, 3172, 2284, 2286, 4345, 3498, 3106,
  /* 1494 */ 2284, 2285, 4129, 3128, 2286, 3202, 2660, 3434, 4185, 3148, 3448, 3290, 2998, 3458, 3148, 3466, 3473, 2288,
  /* 1512 */ 2557, 3227, 2285, 3730, 3148, 2273, 2285, 3974, 2324, 2284, 2286, 3598, 3498, 3106, 2284, 3485, 4129, 3128,
  /* 1530 */ 3496, 3202, 3506, 3140, 4219, 3148, 3521, 3148, 3017, 3531, 3148, 3538, 3545, 2288, 2557, 3227, 2285, 3730,
  /* 1548 */ 3148, 2273, 2285, 3974, 2324, 2284, 2286, 4345, 3498, 3106, 2284, 2285, 4129, 3128, 2286, 3202, 2660, 2720,
  /* 1566 */ 4185, 3148, 3563, 3148, 3060, 3556, 3148, 3573, 3580, 3591, 2557, 3227, 3583, 4167, 3148, 3606, 2285, 3974,
  /* 1584 */ 2324, 3620, 2286, 2690, 3631, 3157, 3639, 3651, 4016, 3128, 3663, 3202, 2660, 2720, 3676, 3148, 3695, 3148,
  /* 1602 */ 3079, 3709, 3148, 3705, 3717, 3728, 2557, 3165, 3916, 3730, 3148, 2273, 3741, 3928, 3187, 2284, 3379, 4345,
  /* 1620 */ 3498, 3106, 2284, 2285, 4129, 3128, 2286, 3202, 2660, 3434, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595,
  /* 1638 */ 4344, 2788, 3120, 3227, 2285, 3750, 3148, 2273, 2285, 3974, 3148, 2284, 2286, 4345, 3498, 3148, 2284, 3476,
  /* 1656 */ 3731, 2968, 3941, 3148, 3970, 3275, 4185, 3148, 3761, 3148, 3098, 3776, 3148, 3772, 3784, 2288, 2557, 3227,
  /* 1674 */ 2285, 3730, 3148, 2273, 3369, 3795, 3148, 2284, 3812, 4345, 3498, 3148, 2284, 3426, 3825, 4071, 2286, 3148,
  /* 1692 */ 2287, 2276, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3227, 2285, 3730, 3148, 2273,
  /* 1710 */ 2285, 3974, 3148, 2284, 2286, 4345, 3498, 3148, 2284, 3477, 3731, 4400, 2286, 3148, 2287, 2276, 4185, 3148,
  /* 1728 */ 3732, 3148, 2966, 2285, 3148, 3595, 2811, 2288, 2557, 3836, 2285, 3730, 3148, 3853, 2285, 3974, 3764, 2284,
  /* 1746 */ 2286, 4345, 3132, 3885, 3896, 2285, 3731, 2968, 4112, 3148, 3655, 2276, 4185, 3148, 3732, 3148, 2966, 2285,
  /* 1764 */ 3148, 3595, 4344, 2288, 2557, 3227, 2285, 3730, 3148, 3904, 2285, 3928, 3146, 3912, 2286, 4345, 3498, 3148,
  /* 1782 */ 2284, 2285, 3731, 2968, 3643, 3148, 3924, 3351, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 3394, 2288,
  /* 1800 */ 2557, 3227, 3936, 3954, 3148, 3965, 2285, 3974, 3148, 2284, 2286, 4345, 3498, 3148, 2284, 2285, 3731, 2968,
  /* 1818 */ 2286, 3148, 2287, 2276, 4185, 3148, 3982, 3148, 3804, 3998, 3148, 3994, 4006, 3868, 2557, 3227, 4024, 3730,
  /* 1836 */ 3148, 2273, 2704, 3928, 3146, 4032, 2286, 4345, 3498, 3148, 2284, 2285, 4055, 4059, 2286, 3148, 2287, 3351,
  /* 1854 */ 4185, 3148, 4067, 3148, 3246, 4083, 3148, 4079, 4091, 2288, 2557, 3227, 2285, 3730, 3148, 4105, 4110, 3817,
  /* 1872 */ 3148, 2284, 4338, 4120, 3498, 3148, 2284, 2285, 3731, 2968, 2286, 3148, 2287, 2276, 4185, 3148, 4137, 3148,
  /* 1890 */ 3845, 4153, 3148, 4149, 4161, 2288, 2557, 3227, 2285, 3730, 3148, 4178, 3787, 3928, 3146, 2284, 4199, 4212,
  /* 1908 */ 4282, 3148, 4236, 2285, 3731, 2968, 2286, 3148, 2287, 3221, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595,
  /* 1926 */ 4344, 2288, 2557, 3195, 2285, 3730, 3148, 2273, 2285, 3668, 3802, 2284, 2286, 4345, 4257, 2678, 4276, 3742,
  /* 1944 */ 3731, 2968, 4290, 3148, 3720, 3281, 3215, 3148, 4303, 2355, 3310, 4324, 3148, 4320, 4332, 4126, 2557, 3227,
  /* 1962 */ 2823, 3730, 3148, 2273, 2285, 3974, 3148, 2284, 2286, 4345, 3498, 3148, 2284, 2285, 3731, 2968, 2286, 3148,
  /* 1980 */ 2287, 2276, 4185, 3148, 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 4354, 2285, 3730, 3148, 2273,
  /* 1998 */ 2285, 3946, 4264, 2284, 2286, 4345, 3498, 3148, 2284, 2285, 3731, 2968, 2286, 3148, 2287, 2276, 4185, 3148,
  /* 2016 */ 3732, 3148, 2966, 2285, 3148, 3595, 4344, 2288, 2557, 3227, 2285, 3730, 3148, 2273, 2285, 4369, 3148, 2284,
  /* 2034 */ 4011, 4345, 3498, 3148, 2284, 2285, 3731, 2968, 2286, 3148, 2287, 2276, 4185, 3148, 3148, 4428, 4382, 4388,
  /* 2052 */ 4428, 4388, 4396, 2239, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148,
  /* 2070 */ 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148, 3148, 3148, 4409, 4408, 4417, 3148,
  /* 2088 */ 2557, 3227, 3148, 3148, 3697, 3148, 3148, 4047, 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148,
  /* 2106 */ 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148, 2262, 2742, 2746, 4436, 2265, 3148, 2557, 3227, 3148, 3148,
  /* 2124 */ 3148, 3148, 3148, 2941, 3148, 2556, 3148, 3148, 2939, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458,
  /* 2142 */ 2728, 3148, 3148, 3148, 2504, 4448, 3148, 4444, 4456, 3148, 2557, 3227, 3148, 3148, 3148, 3148, 3148, 4047,
  /* 2160 */ 3148, 2556, 3148, 3148, 2240, 3148, 2556, 3148, 3148, 3148, 3148, 3148, 3148, 2458, 2728, 3148, 3148, 3148,
  /* 2178 */ 3148, 4465, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148,
  /* 2196 */ 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3148, 3122, 3122, 3122, 3122, 3122, 3122,
  /* 2214 */ 3122, 3122, 0, 0, 0, 0, 0, 0, 62, 6733, 3328, 3328, 3328, 3328, 3328, 3328, 3328, 3328, 92, 92, 92, 3420,
  /* 2236 */ 3420, 3420, 3420, 0, 0, 0, 0, 0, 0, 0, 125, 0, 92, 92, 92, 92, 92, 92, 92, 92, 0, 1608, 1536, 1536, 1536,
  /* 2261 */ 1536, 0, 0, 0, 19968, 0, 0, 0, 0, 0, 0, 0, 0, 1075, 1075, 0, 0, 1075, 1075, 1075, 72, 0, 0, 137, 1075,
  /* 2286 */ 1075, 1075, 1075, 1075, 1075, 1075, 1075, 0, 0, 0, 0, 4189, 4189, 4189, 4189, 4189, 4189, 4189, 4189, 4189,
  /* 2306 */ 0, 0, 0, 0, 0, 0, 0, 1536, 0, 4702, 4702, 4702, 4702, 4702, 4702, 4702, 4702, 4702, 0, 0, 0, 0, 0, 0, 0,
  /* 2331 */ 1928, 73, 0, 0, 0, 73, 73, 73, 73, 73, 73, 73, 73, 73, 0, 0, 0, 0, 0, 0, 0, 3328, 1280, 129, 0, 0, 0, 0, 0,
  /* 2360 */ 0, 71, 0, 5376, 5376, 0, 0, 0, 0, 5376, 5376, 5376, 5376, 5376, 5376, 5376, 5376, 5632, 5632, 0, 0, 0, 0,
  /* 2383 */ 0, 5632, 0, 0, 0, 5983, 5983, 5983, 5983, 5983, 5983, 5983, 5983, 5983, 0, 0, 0, 0, 0, 0, 0, 8448, 177, 0,
  /* 2407 */ 0, 0, 0, 0, 0, 0, 10496, 195, 0, 0, 0, 0, 0, 0, 195, 125, 0, 6733, 6733, 6733, 6733, 6733, 6733, 6733,
  /* 2431 */ 6733, 6752, 6752, 6752, 6760, 6760, 6760, 6760, 0, 0, 0, 0, 0, 0, 0, 13056, 13056, 6752, 6760, 6752, 6760,
  /* 2452 */ 6752, 6752, 6760, 6752, 0, 6912, 0, 0, 0, 0, 0, 72, 0, 0, 129, 0, 0, 0, 6912, 0, 2639, 0, 0, 0, 0, 0, 0, 0,
  /* 2480 */ 195, 7424, 7424, 7424, 7424, 7424, 7424, 7424, 7424, 7758, 7758, 7758, 7758, 7758, 7758, 7758, 7758, 7777,
  /* 2498 */ 7777, 7777, 7788, 7788, 7788, 7788, 0, 0, 0, 0, 0, 0, 0, 20224, 7777, 7785, 7777, 7785, 7777, 7777, 7785,
  /* 2519 */ 7777, 129, 123, 0, 0, 123, 8059, 2639, 0, 0, 0, 2639, 2639, 2639, 2639, 2639, 2639, 2639, 2639, 7936, 0, 0,
  /* 2541 */ 0, 0, 0, 0, 123, 0, 0, 8059, 0, 0, 8059, 0, 0, 0, 0, 137, 0, 0, 0, 0, 0, 0, 0, 72, 72, 0, 8448, 8448, 8448,
  /* 2570 */ 0, 0, 8448, 0, 0, 0, 0, 0, 0, 0, 73, 73, 129, 0, 132, 132, 0, 0, 2639, 0, 0, 9728, 0, 0, 9728, 0, 0, 0, 0,
  /* 2599 */ 0, 0, 0, 1076, 1076, 80, 80, 80, 80, 80, 80, 80, 80, 8802, 8802, 8802, 8813, 8813, 8813, 8813, 0, 0, 0, 0,
  /* 2623 */ 0, 0, 0, 74, 7758, 8802, 8802, 8802, 8802, 8802, 8802, 8802, 8802, 2560, 0, 0, 0, 0, 0, 0, 0, 124, 0, 1867,
  /* 2647 */ 0, 0, 0, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 0, 1075, 1075, 1075, 1075, 1075, 1075, 72,
  /* 2667 */ 129, 129, 131, 1868, 1868, 63, 131, 2639, 0, 0, 10392, 0, 0, 0, 0, 0, 202, 0, 0, 63, 1075, 1075, 131, 0,
  /* 2691 */ 1075, 1075, 1075, 51, 1075, 1075, 1075, 1075, 1075, 221, 222, 203, 2272, 1075, 1075, 1075, 1075, 161, 1075,
  /* 2710 */ 1075, 1075, 217, 171, 171, 232, 232, 234, 2272, 2272, 129, 0, 1075, 1075, 1075, 72, 0, 0, 0, 72, 72, 72,
  /* 2732 */ 72, 72, 0, 0, 1075, 72, 244, 245, 72, 72, 0, 0, 0, 19968, 0, 0, 19968, 19968, 19968, 0, 0, 0, 1868, 0, 0,
  /* 2757 */ 0, 1868, 1868, 1868, 1868, 1868, 1868, 1868, 1868, 1868, 0, 1075, 1075, 1075, 1075, 1075, 1075, 238, 129,
  /* 2776 */ 0, 199, 72, 172, 201, 0, 203, 2224, 221, 0, 203, 2272, 1075, 1075, 1075, 1075, 1146, 0, 0, 0, 217, 171,
  /* 2798 */ 171, 232, 232, 0, 2272, 2272, 137, 1075, 1075, 15923, 1075, 1075, 16947, 1075, 0, 1075, 1075, 1075, 1075,
  /* 2817 */ 1138, 1075, 0, 1075, 1075, 1135, 1075, 1075, 1075, 1075, 1075, 1075, 1170, 1075, 1868, 0, 1075, 1075, 1075,
  /* 2836 */ 1075, 1075, 1139, 1075, 1075, 1075, 1075, 63, 63, 0, 62, 0, 0, 0, 0, 0, 67, 137, 1075, 1075, 1075, 16179,
  /* 2858 */ 1075, 1075, 17203, 217, 231, 171, 233, 232, 0, 2272, 2272, 129, 240, 1075, 1075, 1075, 72, 0, 0, 64, 0, 0,
  /* 2880 */ 0, 0, 0, 126, 0, 72, 1868, 0, 1075, 1075, 1075, 1075, 1075, 1140, 1075, 1075, 1075, 1075, 63, 63, 0, 62, 0,
  /* 2903 */ 0, 0, 0, 66, 0, 0, 7424, 7424, 7424, 7424, 7424, 0, 0, 7936, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 72, 0,
  /* 2930 */ 199, 72, 0, 201, 0, 203, 2224, 9216, 68, 0, 0, 0, 0, 0, 0, 167, 0, 0, 0, 68, 68, 68, 68, 9284, 68, 68, 68,
  /* 2957 */ 9216, 68, 9284, 68, 68, 9284, 9284, 9284, 0, 0, 0, 0, 0, 0, 0, 1075, 1075, 1075, 1075, 9728, 0, 0, 9728,
  /* 2980 */ 9728, 9728, 9728, 9728, 9728, 9728, 9728, 0, 10083, 10083, 10083, 10083, 10083, 10083, 10083, 10083, 10083,
  /* 2997 */ 0, 0, 0, 0, 0, 0, 0, 1077, 1077, 0, 11108, 11108, 11108, 11108, 11108, 11108, 11108, 11108, 11108, 0, 0, 0,
  /* 3019 */ 0, 0, 0, 0, 1078, 1078, 3840, 0, 0, 9472, 12800, 0, 0, 72, 8192, 8960, 10752, 11264, 11776, 13824, 19456,
  /* 3040 */ 7168, 8192, 0, 0, 8192, 8960, 0, 0, 0, 223, 0, 0, 0, 0, 125, 0, 0, 72, 12288, 0, 0, 0, 0, 0, 0, 0, 1079,
  /* 3067 */ 1079, 0, 11621, 11621, 11621, 11621, 11621, 11621, 11621, 11621, 11621, 0, 0, 0, 0, 0, 0, 0, 1080, 1080, 0,
  /* 3088 */ 12613, 12613, 12613, 12613, 12613, 12613, 12613, 12613, 12613, 0, 0, 0, 0, 0, 0, 0, 1081, 1081, 0, 199, 72,
  /* 3109 */ 0, 201, 0, 203, 0, 63, 0, 63, 0, 0, 63, 0, 0, 0, 0, 0, 0, 127, 72, 221, 0, 203, 0, 1075, 1075, 1075, 1075,
  /* 3136 */ 1181, 0, 125, 0, 239, 0, 1075, 1075, 1075, 72, 0, 129, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 199, 72, 0, 201, 0,
  /* 3163 */ 203, 204, 129, 0, 1792, 1792, 0, 0, 2639, 0, 129, 0, 0, 0, 0, 0, 1928, 129, 0, 1925, 1925, 0, 0, 2639, 0,
  /* 3188 */ 129, 0, 0, 0, 1792, 0, 1928, 129, 0, 1926, 1926, 0, 0, 2639, 0, 171, 171, 232, 232, 0, 0, 0, 1280, 0, 1280,
  /* 3213 */ 0, 0, 1075, 243, 72, 72, 72, 72, 0, 0, 1075, 1075, 15155, 72, 129, 0, 0, 0, 0, 0, 2639, 0, 0, 0, 13056,
  /* 3238 */ 13056, 13056, 13056, 13056, 13056, 13056, 13056, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 130, 0, 0, 0, 0, 0, 2639,
  /* 3261 */ 0, 172, 131, 2224, 0, 0, 0, 1928, 0, 242, 128, 128, 128, 128, 0, 0, 1075, 16691, 1075, 72, 0, 0, 1265,
  /* 3284 */ 1075, 1075, 72, 0, 0, 1280, 0, 0, 0, 0, 0, 70, 0, 0, 13312, 13312, 0, 13312, 0, 0, 0, 13312, 0, 0, 13312,
  /* 3309 */ 0, 0, 0, 0, 0, 0, 0, 1085, 1085, 0, 13670, 13670, 13670, 13670, 13670, 13670, 13670, 13670, 13670, 0, 0, 0,
  /* 3331 */ 0, 0, 0, 0, 1867, 1867, 1075, 1174, 1075, 0, 0, 0, 0, 0, 242, 174, 0, 0, 1178, 1075, 0, 0, 1075, 1075,
  /* 3355 */ 1075, 72, 129, 0, 0, 1075, 1075, 1213, 1075, 1075, 1075, 1216, 137, 1229, 1075, 1075, 1075, 1075, 1075,
  /* 3374 */ 1075, 1187, 1075, 1075, 1235, 1075, 1075, 1075, 1075, 1075, 1075, 1210, 0, 221, 0, 203, 0, 1075, 1075,
  /* 3393 */ 1250, 1075, 0, 1075, 1075, 1136, 51, 1075, 1141, 1076, 0, 0, 0, 0, 0, 0, 0, 1868, 1868, 1105, 0, 0, 0,
  /* 3416 */ 1105, 1105, 1105, 1105, 1105, 1105, 1105, 1105, 1105, 0, 1075, 1075, 1075, 1075, 1075, 1075, 1237, 1075,
  /* 3434 */ 129, 0, 1075, 1075, 1075, 72, 129, 0, 0, 0, 0, 0, 2639, 137, 1077, 0, 0, 0, 0, 0, 0, 0, 2639, 0, 1106,
  /* 3459 */ 1106, 1106, 1106, 1106, 1106, 1106, 1114, 1130, 0, 0, 0, 1106, 1106, 1106, 1130, 0, 1075, 1075, 1075, 1075,
  /* 3479 */ 1075, 1075, 51, 1075, 1075, 1075, 1075, 1075, 1236, 1075, 1075, 1075, 1075, 1075, 63, 63, 0, 1252, 1075,
  /* 3498 */ 1075, 1075, 1075, 1075, 1075, 0, 125, 0, 1075, 1260, 1075, 1075, 1075, 1075, 238, 129, 0, 0, 0, 0, 0, 2639,
  /* 3520 */ 2639, 1078, 0, 0, 0, 0, 0, 0, 0, 2816, 0, 1107, 1107, 1107, 1107, 1107, 1107, 1107, 1115, 0, 0, 0, 1107,
  /* 3543 */ 1107, 1107, 1115, 0, 1075, 1075, 1075, 1075, 1075, 1075, 166, 125, 0, 1079, 1079, 1079, 1079, 1079, 1079,
  /* 3562 */ 1079, 1079, 0, 0, 0, 0, 0, 0, 0, 6144, 0, 1131, 0, 0, 0, 1079, 1079, 1079, 1131, 0, 1075, 1075, 1075, 1137,
  /* 3586 */ 1075, 1075, 1169, 1075, 1171, 1075, 1142, 1075, 1144, 1075, 0, 0, 0, 1075, 1075, 1075, 1075, 1214, 1075,
  /* 3605 */ 1075, 0, 1075, 1075, 0, 0, 1180, 1075, 1075, 0, 217, 0, 219, 219, 221, 137, 1202, 1075, 1075, 1075, 1075,
  /* 3626 */ 1075, 1075, 196, 125, 0, 1217, 1075, 1075, 1075, 1075, 196, 125, 14336, 137, 1075, 1075, 1231, 1075, 1075,
  /* 3645 */ 1075, 1075, 1254, 1075, 51, 0, 14387, 1075, 1075, 15667, 1075, 1075, 1075, 1075, 1261, 1075, 0, 0, 1075,
  /* 3664 */ 18739, 1075, 1075, 1075, 1075, 1075, 0, 0, 125, 0, 0, 170, 14899, 72, 72, 72, 72, 72, 0, 0, 5632, 0, 5632,
  /* 3687 */ 0, 0, 0, 0, 0, 0, 0, 6912, 1080, 0, 0, 0, 0, 0, 0, 0, 19712, 0, 1108, 0, 0, 0, 1108, 1108, 1108, 1108,
  /* 3713 */ 1108, 1108, 1108, 1108, 1108, 0, 1075, 1075, 1075, 1075, 1075, 1075, 1181, 0, 0, 51, 1075, 1075, 1075,
  /* 3732 */ 1075, 0, 0, 0, 0, 0, 0, 0, 204, 1184, 1075, 1075, 1075, 1075, 1075, 1075, 1075, 1238, 1173, 1075, 1075, 0,
  /* 3754 */ 0, 0, 0, 0, 1792, 0, 1928, 1081, 0, 0, 0, 0, 0, 0, 0, 1927, 1792, 0, 1109, 0, 0, 0, 1109, 1109, 1109, 1109,
  /* 3780 */ 1109, 1109, 1109, 1109, 1109, 0, 1075, 1075, 1075, 1075, 1075, 1075, 1186, 1075, 1075, 1075, 1189, 0, 0,
  /* 3799 */ 125, 0, 169, 0, 173, 0, 0, 0, 0, 0, 0, 1082, 1082, 1075, 1206, 1075, 1075, 1208, 1075, 1075, 0, 0, 125,
  /* 3822 */ 168, 0, 0, 1075, 1075, 2304, 0, 0, 0, 0, 0, 4864, 0, 0, 129, 0, 1927, 1927, 0, 0, 2639, 0, 174, 0, 0, 0, 0,
  /* 3849 */ 0, 0, 1084, 1084, 0, 1075, 1179, 0, 0, 1075, 1075, 1075, 1165, 1168, 1075, 1075, 1075, 1164, 1167, 1075,
  /* 3869 */ 1075, 1075, 1145, 1075, 0, 0, 0, 65, 0, 0, 0, 0, 69, 0, 0, 0, 197, 0, 0, 0, 0, 0, 0, 0, 7424, 7424, 0, 137,
  /* 3897 */ 1075, 1075, 1075, 1075, 1075, 1075, 1234, 0, 1075, 1075, 0, 0, 1075, 1075, 1183, 137, 1075, 1203, 1075,
  /* 3916 */ 1075, 1075, 1075, 1075, 17459, 1075, 1075, 1075, 1259, 1075, 17715, 1075, 1075, 1075, 0, 0, 125, 0, 0, 72,
  /* 3936 */ 1075, 1163, 15411, 1166, 1075, 1075, 1075, 1075, 14643, 1075, 1075, 1075, 0, 0, 125, 0, 0, 171, 1075, 1163,
  /* 3956 */ 15411, 0, 0, 0, 0, 0, 9728, 9728, 0, 0, 1163, 1075, 0, 0, 1075, 1075, 1075, 17971, 1075, 1075, 0, 0, 125,
  /* 3979 */ 0, 0, 0, 1082, 0, 0, 0, 0, 0, 0, 0, 13312, 13312, 0, 0, 1110, 0, 0, 0, 1110, 1110, 1110, 1110, 1110, 1110,
  /* 4004 */ 1110, 1110, 1110, 0, 1075, 1134, 1075, 1075, 1075, 1075, 18483, 1075, 1075, 1075, 0, 0, 18688, 219, 219,
  /* 4023 */ 221, 1162, 1075, 1075, 1075, 1075, 1075, 1075, 1172, 137, 1075, 1075, 1075, 1075, 16564, 1075, 1075, 63,
  /* 4041 */ 166, 125, 0, 0, 0, 216, 0, 0, 0, 0, 125, 0, 0, 0, 1075, 1239, 0, 0, 0, 0, 0, 0, 1075, 1075, 1075, 1251,
  /* 4067 */ 1083, 0, 0, 0, 0, 0, 0, 0, 1075, 1249, 1075, 1075, 1111, 0, 0, 0, 1111, 1111, 1111, 1111, 1111, 1111, 1111,
  /* 4090 */ 1111, 1111, 0, 1075, 1075, 1075, 1075, 1075, 1075, 63, 166, 125, 0, 0, 72, 0, 1075, 1075, 0, 0, 1075, 1181,
  /* 4112 */ 1075, 1075, 1075, 1075, 1075, 1188, 1075, 0, 0, 1209, 1212, 1075, 1075, 1075, 1075, 1075, 1143, 1075, 1075,
  /* 4131 */ 0, 0, 0, 219, 219, 221, 1084, 0, 0, 0, 0, 0, 0, 0, 1792, 1925, 0, 0, 1112, 0, 0, 0, 1112, 1112, 1112, 1112,
  /* 4157 */ 1112, 1112, 1112, 1112, 1112, 0, 1075, 1075, 1075, 1075, 1075, 1075, 1175, 0, 0, 0, 0, 0, 1608, 129, 0, 0,
  /* 4179 */ 1075, 1075, 0, 0, 1075, 1182, 1075, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 128, 1205, 1075, 1075, 1075,
  /* 4203 */ 1075, 1182, 1075, 0, 0, 0, 219, 219, 221, 0, 1211, 1075, 1075, 1075, 1075, 1215, 1075, 72, 72, 72, 72, 238,
  /* 4225 */ 0, 0, 132, 0, 0, 0, 0, 0, 72, 1409, 0, 137, 1075, 1230, 1075, 1075, 1233, 18227, 1075, 72, 72, 72, 246, 72,
  /* 4249 */ 0, 0, 131, 2224, 0, 0, 0, 1928, 1075, 1218, 1075, 1075, 1075, 0, 125, 0, 175, 0, 0, 0, 0, 0, 0, 12185, 0,
  /* 4274 */ 0, 0, 137, 1075, 1075, 1075, 1232, 1075, 1075, 1075, 1182, 51, 1075, 0, 125, 0, 1075, 1075, 1253, 1075,
  /* 4294 */ 1075, 1075, 1075, 0, 217, 0, 218, 219, 220, 1085, 0, 0, 0, 0, 0, 0, 0, 5376, 0, 0, 0, 0, 0, 0, 0, 5376,
  /* 4320 */ 1113, 0, 0, 0, 1113, 1113, 1113, 1113, 1113, 1113, 1113, 1113, 1113, 0, 1075, 1075, 1075, 1075, 1075, 1075,
  /* 4340 */ 1207, 1075, 1075, 1209, 1075, 0, 1075, 1075, 1075, 1075, 1075, 1075, 1075, 217, 129, 0, 136, 0, 0, 0, 2639,
  /* 4361 */ 0, 198, 72, 172, 200, 0, 203, 2224, 51, 1075, 0, 0, 125, 0, 0, 0, 3584, 4352, 5120, 6400, 7168, 0, 18944,
  /* 4384 */ 0, 0, 0, 0, 18944, 18944, 18944, 18944, 18944, 18944, 18944, 18944, 18944, 0, 0, 0, 0, 0, 0, 0, 14131,
  /* 4405 */ 1075, 1075, 1075, 0, 19303, 19303, 19303, 19303, 19303, 19303, 19303, 19303, 19303, 0, 0, 0, 0, 0, 0, 0,
  /* 4425 */ 7424, 7424, 7424, 0, 0, 0, 0, 0, 0, 0, 18944, 19968, 0, 19968, 0, 19968, 19968, 19968, 19968, 20224, 0, 0,
  /* 4447 */ 0, 20224, 20224, 20224, 20224, 20224, 20224, 20224, 20224, 20224, 0, 0, 0, 0, 0, 0, 0, 11008, 0, 0, 0, 0,
  /* 4469 */ 768, 0, 0, 0
];

MaiaScript.EXPECTED =
[
  /*   0 */ 185, 189, 193, 193, 197, 201, 208, 205, 212, 216, 220, 224, 227, 243, 243, 282, 233, 388, 248, 252, 243,
  /*  21 */ 243, 229, 256, 264, 349, 271, 242, 243, 243, 281, 288, 295, 275, 242, 243, 243, 244, 279, 243, 243, 286,
  /*  42 */ 290, 294, 242, 243, 243, 243, 281, 290, 294, 243, 243, 280, 448, 295, 243, 453, 451, 454, 299, 301, 265,
  /*  63 */ 394, 307, 267, 311, 315, 324, 318, 320, 328, 332, 336, 265, 265, 265, 265, 343, 265, 265, 367, 347, 460,
  /*  84 */ 259, 260, 353, 303, 357, 265, 265, 265, 432, 265, 265, 366, 371, 265, 432, 375, 387, 265, 265, 379, 265,
  /* 105 */ 366, 365, 433, 386, 265, 265, 265, 367, 265, 392, 265, 265, 363, 401, 265, 398, 363, 265, 265, 265, 265,
  /* 126 */ 239, 408, 339, 412, 413, 417, 420, 424, 428, 431, 265, 265, 265, 265, 236, 265, 265, 266, 437, 459, 265,
  /* 147 */ 265, 360, 265, 265, 265, 265, 265, 236, 265, 265, 265, 404, 441, 459, 265, 265, 265, 265, 459, 265, 266,
  /* 168 */ 445, 265, 265, 265, 459, 265, 381, 458, 265, 265, 265, 382, 265, 266, 265, 265, 265, 2056, 2304, 3072,
  /* 188 */ 18432, 1050624, 2099200, 67110912, 1073743872, 2048, 2048, 2048, 2048, 1050624, 1050624, 2099200, 268437504,
  /* 201 */ 270534656, 268437504, 1051128, 1712331256, 1712331772, 1980767224, 1980767224, 1712331768, 1714428920,
  /* 210 */ 1712331768, 1712331768, -269506560, -269506304, -3168256, -3168000, -3168256, -3168256, -3168000,
  /* 219 */ -268457984, 1982864376, -22528, -2119680, -2119680, -2114568, -2114568, -2114568, -17416, 2048, 8, 8, 8,
  /* 232 */ 8192, 16384, 67108864, 1073741824, 0, 0, 256, 0, 0, 256, 512, 8, 8, 8, 8, 0, 16, 384, 448, 448, 67109120,
  /* 253 */ 1073742208, 512, 512, 65536, 786432, 25165824, 201326592, 0, 0, 0, 4, -1073741824, 0, 0, 0, 0, 1, 0,
  /* 271 */ -1073741568, 8, 8, -1073741440, 64, 64, 64, 64, 0, 8, 8, 8, 256, 256, 1024, 8, 256, 1024, 0, 0, 32, 32, 16,
  /* 294 */ 16, 16, 16, 384, 384, 8, 32, 32, 32, 0, 0, 0, 58720256, 32, 1024, 131072, 8388608, 32, 0, 524288, 524320,
  /* 315 */ 262144, 262144, -364642272, -364642272, -289144800, 3407830, 3407830, 3407838, 3932150, -364117984,
  /* 325 */ -364642272, -364642272, -364117984, 3932150, 3669975, -3407832, 4194263, 3669983, 4194295, -361234442,
  /* 335 */ -361234434, -361234433, -2, -1, 0, 0, 512, 16896, 0, 16, 131072, 8388608, 134217728, -536870912, 0, 0, 0,
  /* 352 */ 201326848, 896, 2048, 57344, 2097152, 268435456, 0, 4, 0, 0, 6144, 0, 0, 33554432, 0, 0, 0, 4194304,
  /* 370 */ 33554432, 33554432, 536870912, 1073741824, 0x80000000, 67108864, 256, 32768, 25165824, 0, 8388608, 0, 0, 1,
  /* 384 */ 16, 32, 16777216, 268435456, 0, 0, 0, 32, 67108864, 16777216, 0, 0, 8, 16, 33554432, 0, 67108864, 0, 0,
  /* 403 */ 67108864, 0, 1, 2, 4, 0, 512, 0, 8192, 17407, 17407, 17407, 25599, 25599, 7168, 7168, 15360, 15360, 7168,
  /* 422 */ 7168, 7680, 25599, 7680, 15872, 7680, 32767, 32767, 32767, 32767, 0, 0, 0, 8388608, 67108864, 14, 16, 32,
  /* 440 */ 192, 16, 32, 64, 128, 16, 32, 64, 256, 32, 32, 16, 16, 8, 8, 32, 16, 16, 32, 256, 0, 0, 0, 41943040
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
  "Real",
  "Imaginary",
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
  "'i32'",
  "'i64'",
  "'if'",
  "'return'",
  "'switch'",
  "'test'",
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
