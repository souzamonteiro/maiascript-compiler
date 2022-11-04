// This file was generated on Fri Nov 4, 2022 19:28 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
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
    lookahead1W(30);                // END | EOF | Identifier | Character | String | Integer | Real | Imaginary |
                                    // Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9731:                    // Identifier '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(47);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 716:                     // '{' String
        lookahead3W(46);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 6476:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 972:                     // '{' Real
      case 1100:                    // '{' Imaginary
        lookahead3W(45);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1228:                    // '{' Comment
      case 4812:                    // '{' ';'
      case 6988:                    // '{' 'break'
      case 7372:                    // '{' 'continue'
        lookahead3W(32);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 7884:                    // '{' 'f32'
      case 8012:                    // '{' 'f64'
      case 8396:                    // '{' 'i32'
      case 8524:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2636:                    // '{' '('
      case 7628:                    // '{' 'do'
      case 8908:                    // '{' 'local'
      case 9036:                    // '{' 'return'
      case 9548:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1612:                    // '{' '!'
      case 3276:                    // '{' '+'
      case 3404:                    // '{' '++'
      case 3788:                    // '{' '-'
      case 3916:                    // '{' '--'
      case 10444:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8140:                    // '{' 'for'
      case 8268:                    // '{' 'foreach'
      case 8652:                    // '{' 'if'
      case 8780:                    // '{' 'include'
      case 9164:                    // '{' 'switch'
      case 9292:                    // '{' 'test'
      case 9420:                    // '{' 'throw'
      case 9676:                    // '{' 'while'
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 81                    // '~'
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
     && lk != 8707                  // Identifier 'include'
     && lk != 8835                  // Identifier 'local'
     && lk != 8963                  // Identifier 'return'
     && lk != 9091                  // Identifier 'switch'
     && lk != 9219                  // Identifier 'test'
     && lk != 9347                  // Identifier 'throw'
     && lk != 9475                  // Identifier 'try'
     && lk != 9603                  // Identifier 'while'
     && lk != 9859                  // Identifier '|'
     && lk != 9987                  // Identifier '|='
     && lk != 10115                 // Identifier '||'
     && lk != 10243                 // Identifier '}'
     && lk != 10316                 // '{' '}'
     && lk != 10371                 // Identifier '~'
     && lk != 49612                 // '{' Identifier Identifier
     && lk != 49740                 // '{' Character Identifier
     && lk != 49868                 // '{' String Identifier
     && lk != 49996                 // '{' Integer Identifier
     && lk != 50124                 // '{' Real Identifier
     && lk != 50252                 // '{' Imaginary Identifier
     && lk != 50380                 // '{' Comment Identifier
     && lk != 53964                 // '{' ';' Identifier
     && lk != 56140                 // '{' 'break' Identifier
     && lk != 56524                 // '{' 'continue' Identifier
     && lk != 65996                 // '{' Identifier Character
     && lk != 66124                 // '{' Character Character
     && lk != 66252                 // '{' String Character
     && lk != 66380                 // '{' Integer Character
     && lk != 66508                 // '{' Real Character
     && lk != 66636                 // '{' Imaginary Character
     && lk != 66764                 // '{' Comment Character
     && lk != 70348                 // '{' ';' Character
     && lk != 72524                 // '{' 'break' Character
     && lk != 72908                 // '{' 'continue' Character
     && lk != 82380                 // '{' Identifier String
     && lk != 82508                 // '{' Character String
     && lk != 82636                 // '{' String String
     && lk != 82764                 // '{' Integer String
     && lk != 82892                 // '{' Real String
     && lk != 83020                 // '{' Imaginary String
     && lk != 83148                 // '{' Comment String
     && lk != 86732                 // '{' ';' String
     && lk != 88908                 // '{' 'break' String
     && lk != 89292                 // '{' 'continue' String
     && lk != 98764                 // '{' Identifier Integer
     && lk != 98892                 // '{' Character Integer
     && lk != 99020                 // '{' String Integer
     && lk != 99148                 // '{' Integer Integer
     && lk != 99276                 // '{' Real Integer
     && lk != 99404                 // '{' Imaginary Integer
     && lk != 99532                 // '{' Comment Integer
     && lk != 103116                // '{' ';' Integer
     && lk != 105292                // '{' 'break' Integer
     && lk != 105676                // '{' 'continue' Integer
     && lk != 115148                // '{' Identifier Real
     && lk != 115276                // '{' Character Real
     && lk != 115404                // '{' String Real
     && lk != 115532                // '{' Integer Real
     && lk != 115660                // '{' Real Real
     && lk != 115788                // '{' Imaginary Real
     && lk != 115916                // '{' Comment Real
     && lk != 119500                // '{' ';' Real
     && lk != 121676                // '{' 'break' Real
     && lk != 122060                // '{' 'continue' Real
     && lk != 131532                // '{' Identifier Imaginary
     && lk != 131660                // '{' Character Imaginary
     && lk != 131788                // '{' String Imaginary
     && lk != 131916                // '{' Integer Imaginary
     && lk != 132172                // '{' Imaginary Imaginary
     && lk != 132300                // '{' Comment Imaginary
     && lk != 135884                // '{' ';' Imaginary
     && lk != 138060                // '{' 'break' Imaginary
     && lk != 138444                // '{' 'continue' Imaginary
     && lk != 147916                // '{' Identifier Comment
     && lk != 148044                // '{' Character Comment
     && lk != 148172                // '{' String Comment
     && lk != 148300                // '{' Integer Comment
     && lk != 148428                // '{' Real Comment
     && lk != 148556                // '{' Imaginary Comment
     && lk != 148684                // '{' Comment Comment
     && lk != 152268                // '{' ';' Comment
     && lk != 154444                // '{' 'break' Comment
     && lk != 154828                // '{' 'continue' Comment
     && lk != 197068                // '{' Identifier '!'
     && lk != 197196                // '{' Character '!'
     && lk != 197324                // '{' String '!'
     && lk != 197452                // '{' Integer '!'
     && lk != 197580                // '{' Real '!'
     && lk != 197708                // '{' Imaginary '!'
     && lk != 197836                // '{' Comment '!'
     && lk != 201420                // '{' ';' '!'
     && lk != 203596                // '{' 'break' '!'
     && lk != 203980                // '{' 'continue' '!'
     && lk != 328268                // '{' Character '('
     && lk != 328396                // '{' String '('
     && lk != 328524                // '{' Integer '('
     && lk != 328652                // '{' Real '('
     && lk != 328780                // '{' Imaginary '('
     && lk != 328908                // '{' Comment '('
     && lk != 332492                // '{' ';' '('
     && lk != 334668                // '{' 'break' '('
     && lk != 335052                // '{' 'continue' '('
     && lk != 346627                // Identifier '(' ')'
     && lk != 410828                // '{' Comment '+'
     && lk != 414412                // '{' ';' '+'
     && lk != 416588                // '{' 'break' '+'
     && lk != 416972                // '{' 'continue' '+'
     && lk != 427212                // '{' Comment '++'
     && lk != 430796                // '{' ';' '++'
     && lk != 432972                // '{' 'break' '++'
     && lk != 433356                // '{' 'continue' '++'
     && lk != 459212                // '{' Identifier ','
     && lk != 459340                // '{' Character ','
     && lk != 459468                // '{' String ','
     && lk != 459596                // '{' Integer ','
     && lk != 459724                // '{' Real ','
     && lk != 459852                // '{' Imaginary ','
     && lk != 459980                // '{' Comment ','
     && lk != 463564                // '{' ';' ','
     && lk != 465740                // '{' 'break' ','
     && lk != 466124                // '{' 'continue' ','
     && lk != 476364                // '{' Comment '-'
     && lk != 479948                // '{' ';' '-'
     && lk != 482124                // '{' 'break' '-'
     && lk != 482508                // '{' 'continue' '-'
     && lk != 492748                // '{' Comment '--'
     && lk != 496332                // '{' ';' '--'
     && lk != 498508                // '{' 'break' '--'
     && lk != 498892                // '{' 'continue' '--'
     && lk != 573900                // '{' Identifier ':'
     && lk != 574156                // '{' String ':'
     && lk != 606668                // '{' Identifier ';'
     && lk != 606796                // '{' Character ';'
     && lk != 606924                // '{' String ';'
     && lk != 607052                // '{' Integer ';'
     && lk != 607180                // '{' Real ';'
     && lk != 607308                // '{' Imaginary ';'
     && lk != 607436                // '{' Comment ';'
     && lk != 611020                // '{' ';' ';'
     && lk != 613196                // '{' 'break' ';'
     && lk != 613580                // '{' 'continue' ';'
     && lk != 819788                // '{' Character '['
     && lk != 819916                // '{' String '['
     && lk != 820044                // '{' Integer '['
     && lk != 820172                // '{' Real '['
     && lk != 820300                // '{' Imaginary '['
     && lk != 820428                // '{' Comment '['
     && lk != 824012                // '{' ';' '['
     && lk != 826188                // '{' 'break' '['
     && lk != 826572                // '{' 'continue' '['
     && lk != 885196                // '{' Identifier 'break'
     && lk != 885324                // '{' Character 'break'
     && lk != 885452                // '{' String 'break'
     && lk != 885580                // '{' Integer 'break'
     && lk != 885708                // '{' Real 'break'
     && lk != 885836                // '{' Imaginary 'break'
     && lk != 885964                // '{' Comment 'break'
     && lk != 889548                // '{' ';' 'break'
     && lk != 891724                // '{' 'break' 'break'
     && lk != 892108                // '{' 'continue' 'break'
     && lk != 934348                // '{' Identifier 'continue'
     && lk != 934476                // '{' Character 'continue'
     && lk != 934604                // '{' String 'continue'
     && lk != 934732                // '{' Integer 'continue'
     && lk != 934860                // '{' Real 'continue'
     && lk != 934988                // '{' Imaginary 'continue'
     && lk != 935116                // '{' Comment 'continue'
     && lk != 938700                // '{' ';' 'continue'
     && lk != 940876                // '{' 'break' 'continue'
     && lk != 941260                // '{' 'continue' 'continue'
     && lk != 967116                // '{' Identifier 'do'
     && lk != 967244                // '{' Character 'do'
     && lk != 967372                // '{' String 'do'
     && lk != 967500                // '{' Integer 'do'
     && lk != 967628                // '{' Real 'do'
     && lk != 967756                // '{' Imaginary 'do'
     && lk != 967884                // '{' Comment 'do'
     && lk != 971468                // '{' ';' 'do'
     && lk != 973644                // '{' 'break' 'do'
     && lk != 974028                // '{' 'continue' 'do'
     && lk != 999884                // '{' Identifier 'f32'
     && lk != 1000012               // '{' Character 'f32'
     && lk != 1000140               // '{' String 'f32'
     && lk != 1000268               // '{' Integer 'f32'
     && lk != 1000396               // '{' Real 'f32'
     && lk != 1000524               // '{' Imaginary 'f32'
     && lk != 1000652               // '{' Comment 'f32'
     && lk != 1004236               // '{' ';' 'f32'
     && lk != 1006412               // '{' 'break' 'f32'
     && lk != 1006796               // '{' 'continue' 'f32'
     && lk != 1016268               // '{' Identifier 'f64'
     && lk != 1016396               // '{' Character 'f64'
     && lk != 1016524               // '{' String 'f64'
     && lk != 1016652               // '{' Integer 'f64'
     && lk != 1016780               // '{' Real 'f64'
     && lk != 1016908               // '{' Imaginary 'f64'
     && lk != 1017036               // '{' Comment 'f64'
     && lk != 1020620               // '{' ';' 'f64'
     && lk != 1022796               // '{' 'break' 'f64'
     && lk != 1023180               // '{' 'continue' 'f64'
     && lk != 1032652               // '{' Identifier 'for'
     && lk != 1032780               // '{' Character 'for'
     && lk != 1032908               // '{' String 'for'
     && lk != 1033036               // '{' Integer 'for'
     && lk != 1033164               // '{' Real 'for'
     && lk != 1033292               // '{' Imaginary 'for'
     && lk != 1033420               // '{' Comment 'for'
     && lk != 1037004               // '{' ';' 'for'
     && lk != 1039180               // '{' 'break' 'for'
     && lk != 1039564               // '{' 'continue' 'for'
     && lk != 1049036               // '{' Identifier 'foreach'
     && lk != 1049164               // '{' Character 'foreach'
     && lk != 1049292               // '{' String 'foreach'
     && lk != 1049420               // '{' Integer 'foreach'
     && lk != 1049548               // '{' Real 'foreach'
     && lk != 1049676               // '{' Imaginary 'foreach'
     && lk != 1049804               // '{' Comment 'foreach'
     && lk != 1053388               // '{' ';' 'foreach'
     && lk != 1055564               // '{' 'break' 'foreach'
     && lk != 1055948               // '{' 'continue' 'foreach'
     && lk != 1065420               // '{' Identifier 'i32'
     && lk != 1065548               // '{' Character 'i32'
     && lk != 1065676               // '{' String 'i32'
     && lk != 1065804               // '{' Integer 'i32'
     && lk != 1065932               // '{' Real 'i32'
     && lk != 1066060               // '{' Imaginary 'i32'
     && lk != 1066188               // '{' Comment 'i32'
     && lk != 1069772               // '{' ';' 'i32'
     && lk != 1071948               // '{' 'break' 'i32'
     && lk != 1072332               // '{' 'continue' 'i32'
     && lk != 1081804               // '{' Identifier 'i64'
     && lk != 1081932               // '{' Character 'i64'
     && lk != 1082060               // '{' String 'i64'
     && lk != 1082188               // '{' Integer 'i64'
     && lk != 1082316               // '{' Real 'i64'
     && lk != 1082444               // '{' Imaginary 'i64'
     && lk != 1082572               // '{' Comment 'i64'
     && lk != 1086156               // '{' ';' 'i64'
     && lk != 1088332               // '{' 'break' 'i64'
     && lk != 1088716               // '{' 'continue' 'i64'
     && lk != 1098188               // '{' Identifier 'if'
     && lk != 1098316               // '{' Character 'if'
     && lk != 1098444               // '{' String 'if'
     && lk != 1098572               // '{' Integer 'if'
     && lk != 1098700               // '{' Real 'if'
     && lk != 1098828               // '{' Imaginary 'if'
     && lk != 1098956               // '{' Comment 'if'
     && lk != 1102540               // '{' ';' 'if'
     && lk != 1104716               // '{' 'break' 'if'
     && lk != 1105100               // '{' 'continue' 'if'
     && lk != 1114572               // '{' Identifier 'include'
     && lk != 1114700               // '{' Character 'include'
     && lk != 1114828               // '{' String 'include'
     && lk != 1114956               // '{' Integer 'include'
     && lk != 1115084               // '{' Real 'include'
     && lk != 1115212               // '{' Imaginary 'include'
     && lk != 1115340               // '{' Comment 'include'
     && lk != 1118924               // '{' ';' 'include'
     && lk != 1121100               // '{' 'break' 'include'
     && lk != 1121484               // '{' 'continue' 'include'
     && lk != 1130956               // '{' Identifier 'local'
     && lk != 1131084               // '{' Character 'local'
     && lk != 1131212               // '{' String 'local'
     && lk != 1131340               // '{' Integer 'local'
     && lk != 1131468               // '{' Real 'local'
     && lk != 1131596               // '{' Imaginary 'local'
     && lk != 1131724               // '{' Comment 'local'
     && lk != 1135308               // '{' ';' 'local'
     && lk != 1137484               // '{' 'break' 'local'
     && lk != 1137868               // '{' 'continue' 'local'
     && lk != 1147340               // '{' Identifier 'return'
     && lk != 1147468               // '{' Character 'return'
     && lk != 1147596               // '{' String 'return'
     && lk != 1147724               // '{' Integer 'return'
     && lk != 1147852               // '{' Real 'return'
     && lk != 1147980               // '{' Imaginary 'return'
     && lk != 1148108               // '{' Comment 'return'
     && lk != 1151692               // '{' ';' 'return'
     && lk != 1153868               // '{' 'break' 'return'
     && lk != 1154252               // '{' 'continue' 'return'
     && lk != 1163724               // '{' Identifier 'switch'
     && lk != 1163852               // '{' Character 'switch'
     && lk != 1163980               // '{' String 'switch'
     && lk != 1164108               // '{' Integer 'switch'
     && lk != 1164236               // '{' Real 'switch'
     && lk != 1164364               // '{' Imaginary 'switch'
     && lk != 1164492               // '{' Comment 'switch'
     && lk != 1168076               // '{' ';' 'switch'
     && lk != 1170252               // '{' 'break' 'switch'
     && lk != 1170636               // '{' 'continue' 'switch'
     && lk != 1180108               // '{' Identifier 'test'
     && lk != 1180236               // '{' Character 'test'
     && lk != 1180364               // '{' String 'test'
     && lk != 1180492               // '{' Integer 'test'
     && lk != 1180620               // '{' Real 'test'
     && lk != 1180748               // '{' Imaginary 'test'
     && lk != 1180876               // '{' Comment 'test'
     && lk != 1184460               // '{' ';' 'test'
     && lk != 1186636               // '{' 'break' 'test'
     && lk != 1187020               // '{' 'continue' 'test'
     && lk != 1196492               // '{' Identifier 'throw'
     && lk != 1196620               // '{' Character 'throw'
     && lk != 1196748               // '{' String 'throw'
     && lk != 1196876               // '{' Integer 'throw'
     && lk != 1197004               // '{' Real 'throw'
     && lk != 1197132               // '{' Imaginary 'throw'
     && lk != 1197260               // '{' Comment 'throw'
     && lk != 1200844               // '{' ';' 'throw'
     && lk != 1203020               // '{' 'break' 'throw'
     && lk != 1203404               // '{' 'continue' 'throw'
     && lk != 1212876               // '{' Identifier 'try'
     && lk != 1213004               // '{' Character 'try'
     && lk != 1213132               // '{' String 'try'
     && lk != 1213260               // '{' Integer 'try'
     && lk != 1213388               // '{' Real 'try'
     && lk != 1213516               // '{' Imaginary 'try'
     && lk != 1213644               // '{' Comment 'try'
     && lk != 1217228               // '{' ';' 'try'
     && lk != 1219404               // '{' 'break' 'try'
     && lk != 1219788               // '{' 'continue' 'try'
     && lk != 1229260               // '{' Identifier 'while'
     && lk != 1229388               // '{' Character 'while'
     && lk != 1229516               // '{' String 'while'
     && lk != 1229644               // '{' Integer 'while'
     && lk != 1229772               // '{' Real 'while'
     && lk != 1229900               // '{' Imaginary 'while'
     && lk != 1230028               // '{' Comment 'while'
     && lk != 1233612               // '{' ';' 'while'
     && lk != 1235788               // '{' 'break' 'while'
     && lk != 1236172               // '{' 'continue' 'while'
     && lk != 1245772               // '{' Character '{'
     && lk != 1245900               // '{' String '{'
     && lk != 1246028               // '{' Integer '{'
     && lk != 1246156               // '{' Real '{'
     && lk != 1246284               // '{' Imaginary '{'
     && lk != 1246412               // '{' Comment '{'
     && lk != 1249996               // '{' ';' '{'
     && lk != 1252172               // '{' 'break' '{'
     && lk != 1252556               // '{' 'continue' '{'
     && lk != 1327564               // '{' Identifier '~'
     && lk != 1327692               // '{' Character '~'
     && lk != 1327820               // '{' String '~'
     && lk != 1327948               // '{' Integer '~'
     && lk != 1328076               // '{' Real '~'
     && lk != 1328204               // '{' Imaginary '~'
     && lk != 1328332               // '{' Comment '~'
     && lk != 1331916               // '{' ';' '~'
     && lk != 1334092               // '{' 'break' '~'
     && lk != 1334476)              // '{' 'continue' '~'
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
    case 68:                        // 'include'
    case 69:                        // 'local'
    case 70:                        // 'return'
    case 71:                        // 'switch'
    case 72:                        // 'test'
    case 73:                        // 'throw'
    case 74:                        // 'try'
    case 75:                        // 'while'
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
    case 81:                        // '~'
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
    case 8707:                      // Identifier 'include'
    case 8835:                      // Identifier 'local'
    case 8963:                      // Identifier 'return'
    case 9091:                      // Identifier 'switch'
    case 9219:                      // Identifier 'test'
    case 9347:                      // Identifier 'throw'
    case 9475:                      // Identifier 'try'
    case 9603:                      // Identifier 'while'
    case 9859:                      // Identifier '|'
    case 9987:                      // Identifier '|='
    case 10115:                     // Identifier '||'
    case 10243:                     // Identifier '}'
    case 10371:                     // Identifier '~'
    case 346627:                    // Identifier '(' ')'
    case 459212:                    // '{' Identifier ','
    case 459340:                    // '{' Character ','
    case 459468:                    // '{' String ','
    case 459596:                    // '{' Integer ','
    case 459724:                    // '{' Real ','
    case 459852:                    // '{' Imaginary ','
    case 459980:                    // '{' Comment ','
    case 463564:                    // '{' ';' ','
    case 465740:                    // '{' 'break' ','
    case 466124:                    // '{' 'continue' ','
    case 573900:                    // '{' Identifier ':'
    case 574156:                    // '{' String ':'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9731:                    // Identifier '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(47);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 716:                     // '{' String
        lookahead3W(46);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 6476:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 972:                     // '{' Real
      case 1100:                    // '{' Imaginary
        lookahead3W(45);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1228:                    // '{' Comment
      case 4812:                    // '{' ';'
      case 6988:                    // '{' 'break'
      case 7372:                    // '{' 'continue'
        lookahead3W(32);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 7884:                    // '{' 'f32'
      case 8012:                    // '{' 'f64'
      case 8396:                    // '{' 'i32'
      case 8524:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2636:                    // '{' '('
      case 7628:                    // '{' 'do'
      case 8908:                    // '{' 'local'
      case 9036:                    // '{' 'return'
      case 9548:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1612:                    // '{' '!'
      case 3276:                    // '{' '+'
      case 3404:                    // '{' '++'
      case 3788:                    // '{' '-'
      case 3916:                    // '{' '--'
      case 10444:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8140:                    // '{' 'for'
      case 8268:                    // '{' 'foreach'
      case 8652:                    // '{' 'if'
      case 8780:                    // '{' 'include'
      case 9164:                    // '{' 'switch'
      case 9292:                    // '{' 'test'
      case 9420:                    // '{' 'throw'
      case 9676:                    // '{' 'while'
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 81                    // '~'
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
     && lk != 8707                  // Identifier 'include'
     && lk != 8835                  // Identifier 'local'
     && lk != 8963                  // Identifier 'return'
     && lk != 9091                  // Identifier 'switch'
     && lk != 9219                  // Identifier 'test'
     && lk != 9347                  // Identifier 'throw'
     && lk != 9475                  // Identifier 'try'
     && lk != 9603                  // Identifier 'while'
     && lk != 9859                  // Identifier '|'
     && lk != 9987                  // Identifier '|='
     && lk != 10115                 // Identifier '||'
     && lk != 10243                 // Identifier '}'
     && lk != 10316                 // '{' '}'
     && lk != 10371                 // Identifier '~'
     && lk != 49612                 // '{' Identifier Identifier
     && lk != 49740                 // '{' Character Identifier
     && lk != 49868                 // '{' String Identifier
     && lk != 49996                 // '{' Integer Identifier
     && lk != 50124                 // '{' Real Identifier
     && lk != 50252                 // '{' Imaginary Identifier
     && lk != 50380                 // '{' Comment Identifier
     && lk != 53964                 // '{' ';' Identifier
     && lk != 56140                 // '{' 'break' Identifier
     && lk != 56524                 // '{' 'continue' Identifier
     && lk != 65996                 // '{' Identifier Character
     && lk != 66124                 // '{' Character Character
     && lk != 66252                 // '{' String Character
     && lk != 66380                 // '{' Integer Character
     && lk != 66508                 // '{' Real Character
     && lk != 66636                 // '{' Imaginary Character
     && lk != 66764                 // '{' Comment Character
     && lk != 70348                 // '{' ';' Character
     && lk != 72524                 // '{' 'break' Character
     && lk != 72908                 // '{' 'continue' Character
     && lk != 82380                 // '{' Identifier String
     && lk != 82508                 // '{' Character String
     && lk != 82636                 // '{' String String
     && lk != 82764                 // '{' Integer String
     && lk != 82892                 // '{' Real String
     && lk != 83020                 // '{' Imaginary String
     && lk != 83148                 // '{' Comment String
     && lk != 86732                 // '{' ';' String
     && lk != 88908                 // '{' 'break' String
     && lk != 89292                 // '{' 'continue' String
     && lk != 98764                 // '{' Identifier Integer
     && lk != 98892                 // '{' Character Integer
     && lk != 99020                 // '{' String Integer
     && lk != 99148                 // '{' Integer Integer
     && lk != 99276                 // '{' Real Integer
     && lk != 99404                 // '{' Imaginary Integer
     && lk != 99532                 // '{' Comment Integer
     && lk != 103116                // '{' ';' Integer
     && lk != 105292                // '{' 'break' Integer
     && lk != 105676                // '{' 'continue' Integer
     && lk != 115148                // '{' Identifier Real
     && lk != 115276                // '{' Character Real
     && lk != 115404                // '{' String Real
     && lk != 115532                // '{' Integer Real
     && lk != 115660                // '{' Real Real
     && lk != 115788                // '{' Imaginary Real
     && lk != 115916                // '{' Comment Real
     && lk != 119500                // '{' ';' Real
     && lk != 121676                // '{' 'break' Real
     && lk != 122060                // '{' 'continue' Real
     && lk != 131532                // '{' Identifier Imaginary
     && lk != 131660                // '{' Character Imaginary
     && lk != 131788                // '{' String Imaginary
     && lk != 131916                // '{' Integer Imaginary
     && lk != 132172                // '{' Imaginary Imaginary
     && lk != 132300                // '{' Comment Imaginary
     && lk != 135884                // '{' ';' Imaginary
     && lk != 138060                // '{' 'break' Imaginary
     && lk != 138444                // '{' 'continue' Imaginary
     && lk != 147916                // '{' Identifier Comment
     && lk != 148044                // '{' Character Comment
     && lk != 148172                // '{' String Comment
     && lk != 148300                // '{' Integer Comment
     && lk != 148428                // '{' Real Comment
     && lk != 148556                // '{' Imaginary Comment
     && lk != 148684                // '{' Comment Comment
     && lk != 152268                // '{' ';' Comment
     && lk != 154444                // '{' 'break' Comment
     && lk != 154828                // '{' 'continue' Comment
     && lk != 197068                // '{' Identifier '!'
     && lk != 197196                // '{' Character '!'
     && lk != 197324                // '{' String '!'
     && lk != 197452                // '{' Integer '!'
     && lk != 197580                // '{' Real '!'
     && lk != 197708                // '{' Imaginary '!'
     && lk != 197836                // '{' Comment '!'
     && lk != 201420                // '{' ';' '!'
     && lk != 203596                // '{' 'break' '!'
     && lk != 203980                // '{' 'continue' '!'
     && lk != 328268                // '{' Character '('
     && lk != 328396                // '{' String '('
     && lk != 328524                // '{' Integer '('
     && lk != 328652                // '{' Real '('
     && lk != 328780                // '{' Imaginary '('
     && lk != 328908                // '{' Comment '('
     && lk != 332492                // '{' ';' '('
     && lk != 334668                // '{' 'break' '('
     && lk != 335052                // '{' 'continue' '('
     && lk != 346627                // Identifier '(' ')'
     && lk != 410828                // '{' Comment '+'
     && lk != 414412                // '{' ';' '+'
     && lk != 416588                // '{' 'break' '+'
     && lk != 416972                // '{' 'continue' '+'
     && lk != 427212                // '{' Comment '++'
     && lk != 430796                // '{' ';' '++'
     && lk != 432972                // '{' 'break' '++'
     && lk != 433356                // '{' 'continue' '++'
     && lk != 459212                // '{' Identifier ','
     && lk != 459340                // '{' Character ','
     && lk != 459468                // '{' String ','
     && lk != 459596                // '{' Integer ','
     && lk != 459724                // '{' Real ','
     && lk != 459852                // '{' Imaginary ','
     && lk != 459980                // '{' Comment ','
     && lk != 463564                // '{' ';' ','
     && lk != 465740                // '{' 'break' ','
     && lk != 466124                // '{' 'continue' ','
     && lk != 476364                // '{' Comment '-'
     && lk != 479948                // '{' ';' '-'
     && lk != 482124                // '{' 'break' '-'
     && lk != 482508                // '{' 'continue' '-'
     && lk != 492748                // '{' Comment '--'
     && lk != 496332                // '{' ';' '--'
     && lk != 498508                // '{' 'break' '--'
     && lk != 498892                // '{' 'continue' '--'
     && lk != 573900                // '{' Identifier ':'
     && lk != 574156                // '{' String ':'
     && lk != 606668                // '{' Identifier ';'
     && lk != 606796                // '{' Character ';'
     && lk != 606924                // '{' String ';'
     && lk != 607052                // '{' Integer ';'
     && lk != 607180                // '{' Real ';'
     && lk != 607308                // '{' Imaginary ';'
     && lk != 607436                // '{' Comment ';'
     && lk != 611020                // '{' ';' ';'
     && lk != 613196                // '{' 'break' ';'
     && lk != 613580                // '{' 'continue' ';'
     && lk != 819788                // '{' Character '['
     && lk != 819916                // '{' String '['
     && lk != 820044                // '{' Integer '['
     && lk != 820172                // '{' Real '['
     && lk != 820300                // '{' Imaginary '['
     && lk != 820428                // '{' Comment '['
     && lk != 824012                // '{' ';' '['
     && lk != 826188                // '{' 'break' '['
     && lk != 826572                // '{' 'continue' '['
     && lk != 885196                // '{' Identifier 'break'
     && lk != 885324                // '{' Character 'break'
     && lk != 885452                // '{' String 'break'
     && lk != 885580                // '{' Integer 'break'
     && lk != 885708                // '{' Real 'break'
     && lk != 885836                // '{' Imaginary 'break'
     && lk != 885964                // '{' Comment 'break'
     && lk != 889548                // '{' ';' 'break'
     && lk != 891724                // '{' 'break' 'break'
     && lk != 892108                // '{' 'continue' 'break'
     && lk != 934348                // '{' Identifier 'continue'
     && lk != 934476                // '{' Character 'continue'
     && lk != 934604                // '{' String 'continue'
     && lk != 934732                // '{' Integer 'continue'
     && lk != 934860                // '{' Real 'continue'
     && lk != 934988                // '{' Imaginary 'continue'
     && lk != 935116                // '{' Comment 'continue'
     && lk != 938700                // '{' ';' 'continue'
     && lk != 940876                // '{' 'break' 'continue'
     && lk != 941260                // '{' 'continue' 'continue'
     && lk != 967116                // '{' Identifier 'do'
     && lk != 967244                // '{' Character 'do'
     && lk != 967372                // '{' String 'do'
     && lk != 967500                // '{' Integer 'do'
     && lk != 967628                // '{' Real 'do'
     && lk != 967756                // '{' Imaginary 'do'
     && lk != 967884                // '{' Comment 'do'
     && lk != 971468                // '{' ';' 'do'
     && lk != 973644                // '{' 'break' 'do'
     && lk != 974028                // '{' 'continue' 'do'
     && lk != 999884                // '{' Identifier 'f32'
     && lk != 1000012               // '{' Character 'f32'
     && lk != 1000140               // '{' String 'f32'
     && lk != 1000268               // '{' Integer 'f32'
     && lk != 1000396               // '{' Real 'f32'
     && lk != 1000524               // '{' Imaginary 'f32'
     && lk != 1000652               // '{' Comment 'f32'
     && lk != 1004236               // '{' ';' 'f32'
     && lk != 1006412               // '{' 'break' 'f32'
     && lk != 1006796               // '{' 'continue' 'f32'
     && lk != 1016268               // '{' Identifier 'f64'
     && lk != 1016396               // '{' Character 'f64'
     && lk != 1016524               // '{' String 'f64'
     && lk != 1016652               // '{' Integer 'f64'
     && lk != 1016780               // '{' Real 'f64'
     && lk != 1016908               // '{' Imaginary 'f64'
     && lk != 1017036               // '{' Comment 'f64'
     && lk != 1020620               // '{' ';' 'f64'
     && lk != 1022796               // '{' 'break' 'f64'
     && lk != 1023180               // '{' 'continue' 'f64'
     && lk != 1032652               // '{' Identifier 'for'
     && lk != 1032780               // '{' Character 'for'
     && lk != 1032908               // '{' String 'for'
     && lk != 1033036               // '{' Integer 'for'
     && lk != 1033164               // '{' Real 'for'
     && lk != 1033292               // '{' Imaginary 'for'
     && lk != 1033420               // '{' Comment 'for'
     && lk != 1037004               // '{' ';' 'for'
     && lk != 1039180               // '{' 'break' 'for'
     && lk != 1039564               // '{' 'continue' 'for'
     && lk != 1049036               // '{' Identifier 'foreach'
     && lk != 1049164               // '{' Character 'foreach'
     && lk != 1049292               // '{' String 'foreach'
     && lk != 1049420               // '{' Integer 'foreach'
     && lk != 1049548               // '{' Real 'foreach'
     && lk != 1049676               // '{' Imaginary 'foreach'
     && lk != 1049804               // '{' Comment 'foreach'
     && lk != 1053388               // '{' ';' 'foreach'
     && lk != 1055564               // '{' 'break' 'foreach'
     && lk != 1055948               // '{' 'continue' 'foreach'
     && lk != 1065420               // '{' Identifier 'i32'
     && lk != 1065548               // '{' Character 'i32'
     && lk != 1065676               // '{' String 'i32'
     && lk != 1065804               // '{' Integer 'i32'
     && lk != 1065932               // '{' Real 'i32'
     && lk != 1066060               // '{' Imaginary 'i32'
     && lk != 1066188               // '{' Comment 'i32'
     && lk != 1069772               // '{' ';' 'i32'
     && lk != 1071948               // '{' 'break' 'i32'
     && lk != 1072332               // '{' 'continue' 'i32'
     && lk != 1081804               // '{' Identifier 'i64'
     && lk != 1081932               // '{' Character 'i64'
     && lk != 1082060               // '{' String 'i64'
     && lk != 1082188               // '{' Integer 'i64'
     && lk != 1082316               // '{' Real 'i64'
     && lk != 1082444               // '{' Imaginary 'i64'
     && lk != 1082572               // '{' Comment 'i64'
     && lk != 1086156               // '{' ';' 'i64'
     && lk != 1088332               // '{' 'break' 'i64'
     && lk != 1088716               // '{' 'continue' 'i64'
     && lk != 1098188               // '{' Identifier 'if'
     && lk != 1098316               // '{' Character 'if'
     && lk != 1098444               // '{' String 'if'
     && lk != 1098572               // '{' Integer 'if'
     && lk != 1098700               // '{' Real 'if'
     && lk != 1098828               // '{' Imaginary 'if'
     && lk != 1098956               // '{' Comment 'if'
     && lk != 1102540               // '{' ';' 'if'
     && lk != 1104716               // '{' 'break' 'if'
     && lk != 1105100               // '{' 'continue' 'if'
     && lk != 1114572               // '{' Identifier 'include'
     && lk != 1114700               // '{' Character 'include'
     && lk != 1114828               // '{' String 'include'
     && lk != 1114956               // '{' Integer 'include'
     && lk != 1115084               // '{' Real 'include'
     && lk != 1115212               // '{' Imaginary 'include'
     && lk != 1115340               // '{' Comment 'include'
     && lk != 1118924               // '{' ';' 'include'
     && lk != 1121100               // '{' 'break' 'include'
     && lk != 1121484               // '{' 'continue' 'include'
     && lk != 1130956               // '{' Identifier 'local'
     && lk != 1131084               // '{' Character 'local'
     && lk != 1131212               // '{' String 'local'
     && lk != 1131340               // '{' Integer 'local'
     && lk != 1131468               // '{' Real 'local'
     && lk != 1131596               // '{' Imaginary 'local'
     && lk != 1131724               // '{' Comment 'local'
     && lk != 1135308               // '{' ';' 'local'
     && lk != 1137484               // '{' 'break' 'local'
     && lk != 1137868               // '{' 'continue' 'local'
     && lk != 1147340               // '{' Identifier 'return'
     && lk != 1147468               // '{' Character 'return'
     && lk != 1147596               // '{' String 'return'
     && lk != 1147724               // '{' Integer 'return'
     && lk != 1147852               // '{' Real 'return'
     && lk != 1147980               // '{' Imaginary 'return'
     && lk != 1148108               // '{' Comment 'return'
     && lk != 1151692               // '{' ';' 'return'
     && lk != 1153868               // '{' 'break' 'return'
     && lk != 1154252               // '{' 'continue' 'return'
     && lk != 1163724               // '{' Identifier 'switch'
     && lk != 1163852               // '{' Character 'switch'
     && lk != 1163980               // '{' String 'switch'
     && lk != 1164108               // '{' Integer 'switch'
     && lk != 1164236               // '{' Real 'switch'
     && lk != 1164364               // '{' Imaginary 'switch'
     && lk != 1164492               // '{' Comment 'switch'
     && lk != 1168076               // '{' ';' 'switch'
     && lk != 1170252               // '{' 'break' 'switch'
     && lk != 1170636               // '{' 'continue' 'switch'
     && lk != 1180108               // '{' Identifier 'test'
     && lk != 1180236               // '{' Character 'test'
     && lk != 1180364               // '{' String 'test'
     && lk != 1180492               // '{' Integer 'test'
     && lk != 1180620               // '{' Real 'test'
     && lk != 1180748               // '{' Imaginary 'test'
     && lk != 1180876               // '{' Comment 'test'
     && lk != 1184460               // '{' ';' 'test'
     && lk != 1186636               // '{' 'break' 'test'
     && lk != 1187020               // '{' 'continue' 'test'
     && lk != 1196492               // '{' Identifier 'throw'
     && lk != 1196620               // '{' Character 'throw'
     && lk != 1196748               // '{' String 'throw'
     && lk != 1196876               // '{' Integer 'throw'
     && lk != 1197004               // '{' Real 'throw'
     && lk != 1197132               // '{' Imaginary 'throw'
     && lk != 1197260               // '{' Comment 'throw'
     && lk != 1200844               // '{' ';' 'throw'
     && lk != 1203020               // '{' 'break' 'throw'
     && lk != 1203404               // '{' 'continue' 'throw'
     && lk != 1212876               // '{' Identifier 'try'
     && lk != 1213004               // '{' Character 'try'
     && lk != 1213132               // '{' String 'try'
     && lk != 1213260               // '{' Integer 'try'
     && lk != 1213388               // '{' Real 'try'
     && lk != 1213516               // '{' Imaginary 'try'
     && lk != 1213644               // '{' Comment 'try'
     && lk != 1217228               // '{' ';' 'try'
     && lk != 1219404               // '{' 'break' 'try'
     && lk != 1219788               // '{' 'continue' 'try'
     && lk != 1229260               // '{' Identifier 'while'
     && lk != 1229388               // '{' Character 'while'
     && lk != 1229516               // '{' String 'while'
     && lk != 1229644               // '{' Integer 'while'
     && lk != 1229772               // '{' Real 'while'
     && lk != 1229900               // '{' Imaginary 'while'
     && lk != 1230028               // '{' Comment 'while'
     && lk != 1233612               // '{' ';' 'while'
     && lk != 1235788               // '{' 'break' 'while'
     && lk != 1236172               // '{' 'continue' 'while'
     && lk != 1245772               // '{' Character '{'
     && lk != 1245900               // '{' String '{'
     && lk != 1246028               // '{' Integer '{'
     && lk != 1246156               // '{' Real '{'
     && lk != 1246284               // '{' Imaginary '{'
     && lk != 1246412               // '{' Comment '{'
     && lk != 1249996               // '{' ';' '{'
     && lk != 1252172               // '{' 'break' '{'
     && lk != 1252556               // '{' 'continue' '{'
     && lk != 1327564               // '{' Identifier '~'
     && lk != 1327692               // '{' Character '~'
     && lk != 1327820               // '{' String '~'
     && lk != 1327948               // '{' Integer '~'
     && lk != 1328076               // '{' Real '~'
     && lk != 1328204               // '{' Imaginary '~'
     && lk != 1328332               // '{' Comment '~'
     && lk != 1331916               // '{' ';' '~'
     && lk != 1334092               // '{' 'break' '~'
     && lk != 1334476)              // '{' 'continue' '~'
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
    case 68:                        // 'include'
    case 69:                        // 'local'
    case 70:                        // 'return'
    case 71:                        // 'switch'
    case 72:                        // 'test'
    case 73:                        // 'throw'
    case 74:                        // 'try'
    case 75:                        // 'while'
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
    case 81:                        // '~'
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
    case 8707:                      // Identifier 'include'
    case 8835:                      // Identifier 'local'
    case 8963:                      // Identifier 'return'
    case 9091:                      // Identifier 'switch'
    case 9219:                      // Identifier 'test'
    case 9347:                      // Identifier 'throw'
    case 9475:                      // Identifier 'try'
    case 9603:                      // Identifier 'while'
    case 9859:                      // Identifier '|'
    case 9987:                      // Identifier '|='
    case 10115:                     // Identifier '||'
    case 10243:                     // Identifier '}'
    case 10371:                     // Identifier '~'
    case 346627:                    // Identifier '(' ')'
    case 459212:                    // '{' Identifier ','
    case 459340:                    // '{' Character ','
    case 459468:                    // '{' String ','
    case 459596:                    // '{' Integer ','
    case 459724:                    // '{' Real ','
    case 459852:                    // '{' Imaginary ','
    case 459980:                    // '{' Comment ','
    case 463564:                    // '{' ';' ','
    case 465740:                    // '{' 'break' ','
    case 466124:                    // '{' 'continue' ','
    case 573900:                    // '{' Identifier ':'
    case 574156:                    // '{' String ':'
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
    consume(76);                    // '{'
    for (;;)
    {
      lookahead1W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 80)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(80);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(76);                   // '{'
    for (;;)
    {
      lookahead1W(28);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 80)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(80);                   // '}'
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
      case 78:                      // '|='
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
        case 462:                   // '|=' Identifier
          lookahead3W(49);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        case 6478:                  // '|=' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 2576:                  // '%=' '('
        case 9744:                  // '%=' '{'
        case 2579:                  // '&=' '('
        case 9747:                  // '&=' '{'
        case 2584:                  // '*=' '('
        case 9752:                  // '*=' '{'
        case 2587:                  // '+=' '('
        case 9755:                  // '+=' '{'
        case 2591:                  // '-=' '('
        case 9759:                  // '-=' '{'
        case 2594:                  // '/=' '('
        case 9762:                  // '/=' '{'
        case 2596:                  // ':=' '('
        case 9764:                  // ':=' '{'
        case 2600:                  // '<<=' '('
        case 9768:                  // '<<=' '{'
        case 2602:                  // '=' '('
        case 9770:                  // '=' '{'
        case 2607:                  // '>>=' '('
        case 9775:                  // '>>=' '{'
        case 2609:                  // '?=' '('
        case 9777:                  // '?=' '{'
        case 2613:                  // '^=' '('
        case 9781:                  // '^=' '{'
        case 2638:                  // '|=' '('
        case 9806:                  // '|=' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
        case 590:                   // '|=' Character
        case 718:                   // '|=' String
        case 846:                   // '|=' Integer
        case 974:                   // '|=' Real
        case 1102:                  // '|=' Imaginary
          lookahead3W(48);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10384:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10387:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10392:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10395:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10399:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10402:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10404:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10408:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10410:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10415:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10417:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10421:                 // '^=' '~'
        case 1614:                  // '|=' '!'
        case 3278:                  // '|=' '+'
        case 3406:                  // '|=' '++'
        case 3790:                  // '|=' '-'
        case 3918:                  // '|=' '--'
        case 10446:                 // '|=' '~'
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
       && lk != 68                  // 'include'
       && lk != 69                  // 'local'
       && lk != 70                  // 'return'
       && lk != 71                  // 'switch'
       && lk != 72                  // 'test'
       && lk != 73                  // 'throw'
       && lk != 74                  // 'try'
       && lk != 75                  // 'while'
       && lk != 76                  // '{'
       && lk != 80                  // '}'
       && lk != 81)                 // '~'
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
            case 78:                // '|='
              consumeT(78);         // '|='
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
      case 78:                      // '|='
        consume(78);                // '|='
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
      case 78:                      // '|='
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
        case 462:                   // '|=' Identifier
          lookahead3W(49);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        case 6478:                  // '|=' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 2576:                  // '%=' '('
        case 9744:                  // '%=' '{'
        case 2579:                  // '&=' '('
        case 9747:                  // '&=' '{'
        case 2584:                  // '*=' '('
        case 9752:                  // '*=' '{'
        case 2587:                  // '+=' '('
        case 9755:                  // '+=' '{'
        case 2591:                  // '-=' '('
        case 9759:                  // '-=' '{'
        case 2594:                  // '/=' '('
        case 9762:                  // '/=' '{'
        case 2596:                  // ':=' '('
        case 9764:                  // ':=' '{'
        case 2600:                  // '<<=' '('
        case 9768:                  // '<<=' '{'
        case 2602:                  // '=' '('
        case 9770:                  // '=' '{'
        case 2607:                  // '>>=' '('
        case 9775:                  // '>>=' '{'
        case 2609:                  // '?=' '('
        case 9777:                  // '?=' '{'
        case 2613:                  // '^=' '('
        case 9781:                  // '^=' '{'
        case 2638:                  // '|=' '('
        case 9806:                  // '|=' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
        case 590:                   // '|=' Character
        case 718:                   // '|=' String
        case 846:                   // '|=' Integer
        case 974:                   // '|=' Real
        case 1102:                  // '|=' Imaginary
          lookahead3W(48);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10384:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10387:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10392:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10395:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10399:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10402:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10404:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10408:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10410:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10415:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10417:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10421:                 // '^=' '~'
        case 1614:                  // '|=' '!'
        case 3278:                  // '|=' '+'
        case 3406:                  // '|=' '++'
        case 3790:                  // '|=' '-'
        case 3918:                  // '|=' '--'
        case 10446:                 // '|=' '~'
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
       && lk != 68                  // 'include'
       && lk != 69                  // 'local'
       && lk != 70                  // 'return'
       && lk != 71                  // 'switch'
       && lk != 72                  // 'test'
       && lk != 73                  // 'throw'
       && lk != 74                  // 'try'
       && lk != 75                  // 'while'
       && lk != 76                  // '{'
       && lk != 80                  // '}'
       && lk != 81)                 // '~'
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
            case 78:                // '|='
              consumeT(78);         // '|='
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
      case 78:                      // '|='
        consumeT(78);               // '|='
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
      if (l1 != 79)                 // '||'
      {
        break;
      }
      consume(79);                  // '||'
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
      if (l1 != 79)                 // '||'
      {
        break;
      }
      consumeT(79);                 // '||'
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
      if (l1 != 77)                 // '|'
      {
        break;
      }
      consume(77);                  // '|'
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
      if (l1 != 77)                 // '|'
      {
        break;
      }
      consumeT(77);                 // '|'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 2585:                  // '+' '('
        case 9753:                  // '+' '{'
        case 2589:                  // '-' '('
        case 9757:                  // '-' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 68                  // 'include'
       && lk != 69                  // 'local'
       && lk != 70                  // 'return'
       && lk != 71                  // 'switch'
       && lk != 72                  // 'test'
       && lk != 73                  // 'throw'
       && lk != 74                  // 'try'
       && lk != 75                  // 'while'
       && lk != 76                  // '{'
       && lk != 77                  // '|'
       && lk != 78                  // '|='
       && lk != 79                  // '||'
       && lk != 80                  // '}'
       && lk != 81                  // '~'
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
       && lk != 10393               // '+' '~'
       && lk != 10397               // '-' '~'
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
       || lk == 68                  // 'include'
       || lk == 69                  // 'local'
       || lk == 70                  // 'return'
       || lk == 71                  // 'switch'
       || lk == 72                  // 'test'
       || lk == 73                  // 'throw'
       || lk == 74                  // 'try'
       || lk == 75                  // 'while'
       || lk == 76                  // '{'
       || lk == 77                  // '|'
       || lk == 78                  // '|='
       || lk == 79                  // '||'
       || lk == 80                  // '}'
       || lk == 81)                 // '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 2585:                  // '+' '('
        case 9753:                  // '+' '{'
        case 2589:                  // '-' '('
        case 9757:                  // '-' '{'
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 68                  // 'include'
       && lk != 69                  // 'local'
       && lk != 70                  // 'return'
       && lk != 71                  // 'switch'
       && lk != 72                  // 'test'
       && lk != 73                  // 'throw'
       && lk != 74                  // 'try'
       && lk != 75                  // 'while'
       && lk != 76                  // '{'
       && lk != 77                  // '|'
       && lk != 78                  // '|='
       && lk != 79                  // '||'
       && lk != 80                  // '}'
       && lk != 81                  // '~'
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
       && lk != 10393               // '+' '~'
       && lk != 10397               // '-' '~'
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
       || lk == 68                  // 'include'
       || lk == 69                  // 'local'
       || lk == 70                  // 'return'
       || lk == 71                  // 'switch'
       || lk == 72                  // 'test'
       || lk == 73                  // 'throw'
       || lk == 74                  // 'try'
       || lk == 75                  // 'while'
       || lk == 76                  // '{'
       || lk == 77                  // '|'
       || lk == 78                  // '|='
       || lk == 79                  // '||'
       || lk == 80                  // '}'
       || lk == 81)                 // '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(40);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 916:                     // '(' Real
        lookahead3W(33);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9748:                    // '(' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 1044:                    // '(' Imaginary
        lookahead3W(29);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
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
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8340:                    // '(' 'i32'
      case 8468:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8852:                    // '(' 'local'
      case 8980:                    // '(' 'return'
      case 9492:                    // '(' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10388:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8596:                    // '(' 'if'
      case 8724:                    // '(' 'include'
      case 9108:                    // '(' 'switch'
      case 9236:                    // '(' 'test'
      case 9364:                    // '(' 'throw'
      case 9620:                    // '(' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(27);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(43);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
        lookahead3W(31);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 9778:                    // '[' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
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
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8370:                    // '[' 'i32'
      case 8498:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8882:                    // '[' 'local'
      case 9010:                    // '[' 'return'
      case 9522:                    // '[' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10418:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8626:                    // '[' 'if'
      case 8754:                    // '[' 'include'
      case 9138:                    // '[' 'switch'
      case 9266:                    // '[' 'test'
      case 9394:                    // '[' 'throw'
      case 9650:                    // '[' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(42);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 716:                     // '{' String
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 972:                     // '{' Real
        lookahead3W(36);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6476:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 1100:                    // '{' Imaginary
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1228:                    // '{' Comment
      case 4812:                    // '{' ';'
      case 6988:                    // '{' 'break'
      case 7372:                    // '{' 'continue'
        lookahead3W(19);            // WhiteSpace^token | ',' | '}'
        break;
      case 7884:                    // '{' 'f32'
      case 8012:                    // '{' 'f64'
      case 8396:                    // '{' 'i32'
      case 8524:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2636:                    // '{' '('
      case 7628:                    // '{' 'do'
      case 8908:                    // '{' 'local'
      case 9036:                    // '{' 'return'
      case 9548:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1612:                    // '{' '!'
      case 3276:                    // '{' '+'
      case 3404:                    // '{' '++'
      case 3788:                    // '{' '-'
      case 3916:                    // '{' '--'
      case 10444:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8140:                    // '{' 'for'
      case 8268:                    // '{' 'foreach'
      case 8652:                    // '{' 'if'
      case 8780:                    // '{' 'include'
      case 9164:                    // '{' 'switch'
      case 9292:                    // '{' 'test'
      case 9420:                    // '{' 'throw'
      case 9676:                    // '{' 'while'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
     && lk != 81                    // '~'
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
     && lk != 8707                  // Identifier 'include'
     && lk != 8708                  // Character 'include'
     && lk != 8709                  // String 'include'
     && lk != 8710                  // Integer 'include'
     && lk != 8711                  // Real 'include'
     && lk != 8712                  // Imaginary 'include'
     && lk != 8835                  // Identifier 'local'
     && lk != 8836                  // Character 'local'
     && lk != 8837                  // String 'local'
     && lk != 8838                  // Integer 'local'
     && lk != 8839                  // Real 'local'
     && lk != 8840                  // Imaginary 'local'
     && lk != 8963                  // Identifier 'return'
     && lk != 8964                  // Character 'return'
     && lk != 8965                  // String 'return'
     && lk != 8966                  // Integer 'return'
     && lk != 8967                  // Real 'return'
     && lk != 8968                  // Imaginary 'return'
     && lk != 9091                  // Identifier 'switch'
     && lk != 9092                  // Character 'switch'
     && lk != 9093                  // String 'switch'
     && lk != 9094                  // Integer 'switch'
     && lk != 9095                  // Real 'switch'
     && lk != 9096                  // Imaginary 'switch'
     && lk != 9219                  // Identifier 'test'
     && lk != 9220                  // Character 'test'
     && lk != 9221                  // String 'test'
     && lk != 9222                  // Integer 'test'
     && lk != 9223                  // Real 'test'
     && lk != 9224                  // Imaginary 'test'
     && lk != 9347                  // Identifier 'throw'
     && lk != 9348                  // Character 'throw'
     && lk != 9349                  // String 'throw'
     && lk != 9350                  // Integer 'throw'
     && lk != 9351                  // Real 'throw'
     && lk != 9352                  // Imaginary 'throw'
     && lk != 9475                  // Identifier 'try'
     && lk != 9476                  // Character 'try'
     && lk != 9477                  // String 'try'
     && lk != 9478                  // Integer 'try'
     && lk != 9479                  // Real 'try'
     && lk != 9480                  // Imaginary 'try'
     && lk != 9603                  // Identifier 'while'
     && lk != 9604                  // Character 'while'
     && lk != 9605                  // String 'while'
     && lk != 9606                  // Integer 'while'
     && lk != 9607                  // Real 'while'
     && lk != 9608                  // Imaginary 'while'
     && lk != 9731                  // Identifier '{'
     && lk != 9732                  // Character '{'
     && lk != 9733                  // String '{'
     && lk != 9734                  // Integer '{'
     && lk != 9735                  // Real '{'
     && lk != 9736                  // Imaginary '{'
     && lk != 9859                  // Identifier '|'
     && lk != 9860                  // Character '|'
     && lk != 9861                  // String '|'
     && lk != 9862                  // Integer '|'
     && lk != 9863                  // Real '|'
     && lk != 9864                  // Imaginary '|'
     && lk != 9987                  // Identifier '|='
     && lk != 9988                  // Character '|='
     && lk != 9989                  // String '|='
     && lk != 9990                  // Integer '|='
     && lk != 9991                  // Real '|='
     && lk != 9992                  // Imaginary '|='
     && lk != 10115                 // Identifier '||'
     && lk != 10116                 // Character '||'
     && lk != 10117                 // String '||'
     && lk != 10118                 // Integer '||'
     && lk != 10119                 // Real '||'
     && lk != 10120                 // Imaginary '||'
     && lk != 10243                 // Identifier '}'
     && lk != 10244                 // Character '}'
     && lk != 10245                 // String '}'
     && lk != 10246                 // Integer '}'
     && lk != 10247                 // Real '}'
     && lk != 10248                 // Imaginary '}'
     && lk != 10371                 // Identifier '~'
     && lk != 10372                 // Character '~'
     && lk != 10373                 // String '~'
     && lk != 10374                 // Integer '~'
     && lk != 10375                 // Real '~'
     && lk != 10376                 // Imaginary '~'
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
     && lk != 1115143               // Real Imaginary 'include'
     && lk != 1117443               // Identifier '++' 'include'
     && lk != 1117444               // Character '++' 'include'
     && lk != 1117445               // String '++' 'include'
     && lk != 1117446               // Integer '++' 'include'
     && lk != 1117447               // Real '++' 'include'
     && lk != 1117448               // Imaginary '++' 'include'
     && lk != 1117955               // Identifier '--' 'include'
     && lk != 1117956               // Character '--' 'include'
     && lk != 1117957               // String '--' 'include'
     && lk != 1117958               // Integer '--' 'include'
     && lk != 1117959               // Real '--' 'include'
     && lk != 1117960               // Imaginary '--' 'include'
     && lk != 1120690               // '[' ']' 'include'
     && lk != 1131527               // Real Imaginary 'local'
     && lk != 1133827               // Identifier '++' 'local'
     && lk != 1133828               // Character '++' 'local'
     && lk != 1133829               // String '++' 'local'
     && lk != 1133830               // Integer '++' 'local'
     && lk != 1133831               // Real '++' 'local'
     && lk != 1133832               // Imaginary '++' 'local'
     && lk != 1134339               // Identifier '--' 'local'
     && lk != 1134340               // Character '--' 'local'
     && lk != 1134341               // String '--' 'local'
     && lk != 1134342               // Integer '--' 'local'
     && lk != 1134343               // Real '--' 'local'
     && lk != 1134344               // Imaginary '--' 'local'
     && lk != 1137074               // '[' ']' 'local'
     && lk != 1147911               // Real Imaginary 'return'
     && lk != 1150211               // Identifier '++' 'return'
     && lk != 1150212               // Character '++' 'return'
     && lk != 1150213               // String '++' 'return'
     && lk != 1150214               // Integer '++' 'return'
     && lk != 1150215               // Real '++' 'return'
     && lk != 1150216               // Imaginary '++' 'return'
     && lk != 1150723               // Identifier '--' 'return'
     && lk != 1150724               // Character '--' 'return'
     && lk != 1150725               // String '--' 'return'
     && lk != 1150726               // Integer '--' 'return'
     && lk != 1150727               // Real '--' 'return'
     && lk != 1150728               // Imaginary '--' 'return'
     && lk != 1153458               // '[' ']' 'return'
     && lk != 1164295               // Real Imaginary 'switch'
     && lk != 1166595               // Identifier '++' 'switch'
     && lk != 1166596               // Character '++' 'switch'
     && lk != 1166597               // String '++' 'switch'
     && lk != 1166598               // Integer '++' 'switch'
     && lk != 1166599               // Real '++' 'switch'
     && lk != 1166600               // Imaginary '++' 'switch'
     && lk != 1167107               // Identifier '--' 'switch'
     && lk != 1167108               // Character '--' 'switch'
     && lk != 1167109               // String '--' 'switch'
     && lk != 1167110               // Integer '--' 'switch'
     && lk != 1167111               // Real '--' 'switch'
     && lk != 1167112               // Imaginary '--' 'switch'
     && lk != 1169842               // '[' ']' 'switch'
     && lk != 1180679               // Real Imaginary 'test'
     && lk != 1182979               // Identifier '++' 'test'
     && lk != 1182980               // Character '++' 'test'
     && lk != 1182981               // String '++' 'test'
     && lk != 1182982               // Integer '++' 'test'
     && lk != 1182983               // Real '++' 'test'
     && lk != 1182984               // Imaginary '++' 'test'
     && lk != 1183491               // Identifier '--' 'test'
     && lk != 1183492               // Character '--' 'test'
     && lk != 1183493               // String '--' 'test'
     && lk != 1183494               // Integer '--' 'test'
     && lk != 1183495               // Real '--' 'test'
     && lk != 1183496               // Imaginary '--' 'test'
     && lk != 1186226               // '[' ']' 'test'
     && lk != 1197063               // Real Imaginary 'throw'
     && lk != 1199363               // Identifier '++' 'throw'
     && lk != 1199364               // Character '++' 'throw'
     && lk != 1199365               // String '++' 'throw'
     && lk != 1199366               // Integer '++' 'throw'
     && lk != 1199367               // Real '++' 'throw'
     && lk != 1199368               // Imaginary '++' 'throw'
     && lk != 1199875               // Identifier '--' 'throw'
     && lk != 1199876               // Character '--' 'throw'
     && lk != 1199877               // String '--' 'throw'
     && lk != 1199878               // Integer '--' 'throw'
     && lk != 1199879               // Real '--' 'throw'
     && lk != 1199880               // Imaginary '--' 'throw'
     && lk != 1202610               // '[' ']' 'throw'
     && lk != 1213447               // Real Imaginary 'try'
     && lk != 1215747               // Identifier '++' 'try'
     && lk != 1215748               // Character '++' 'try'
     && lk != 1215749               // String '++' 'try'
     && lk != 1215750               // Integer '++' 'try'
     && lk != 1215751               // Real '++' 'try'
     && lk != 1215752               // Imaginary '++' 'try'
     && lk != 1216259               // Identifier '--' 'try'
     && lk != 1216260               // Character '--' 'try'
     && lk != 1216261               // String '--' 'try'
     && lk != 1216262               // Integer '--' 'try'
     && lk != 1216263               // Real '--' 'try'
     && lk != 1216264               // Imaginary '--' 'try'
     && lk != 1218994               // '[' ']' 'try'
     && lk != 1229831               // Real Imaginary 'while'
     && lk != 1232131               // Identifier '++' 'while'
     && lk != 1232132               // Character '++' 'while'
     && lk != 1232133               // String '++' 'while'
     && lk != 1232134               // Integer '++' 'while'
     && lk != 1232135               // Real '++' 'while'
     && lk != 1232136               // Imaginary '++' 'while'
     && lk != 1232643               // Identifier '--' 'while'
     && lk != 1232644               // Character '--' 'while'
     && lk != 1232645               // String '--' 'while'
     && lk != 1232646               // Integer '--' 'while'
     && lk != 1232647               // Real '--' 'while'
     && lk != 1232648               // Imaginary '--' 'while'
     && lk != 1235378               // '[' ']' 'while'
     && lk != 1246215               // Real Imaginary '{'
     && lk != 1251762               // '[' ']' '{'
     && lk != 1262599               // Real Imaginary '|'
     && lk != 1264899               // Identifier '++' '|'
     && lk != 1264900               // Character '++' '|'
     && lk != 1264901               // String '++' '|'
     && lk != 1264902               // Integer '++' '|'
     && lk != 1264903               // Real '++' '|'
     && lk != 1264904               // Imaginary '++' '|'
     && lk != 1265411               // Identifier '--' '|'
     && lk != 1265412               // Character '--' '|'
     && lk != 1265413               // String '--' '|'
     && lk != 1265414               // Integer '--' '|'
     && lk != 1265415               // Real '--' '|'
     && lk != 1265416               // Imaginary '--' '|'
     && lk != 1268146               // '[' ']' '|'
     && lk != 1278983               // Real Imaginary '|='
     && lk != 1281283               // Identifier '++' '|='
     && lk != 1281284               // Character '++' '|='
     && lk != 1281285               // String '++' '|='
     && lk != 1281286               // Integer '++' '|='
     && lk != 1281287               // Real '++' '|='
     && lk != 1281288               // Imaginary '++' '|='
     && lk != 1281795               // Identifier '--' '|='
     && lk != 1281796               // Character '--' '|='
     && lk != 1281797               // String '--' '|='
     && lk != 1281798               // Integer '--' '|='
     && lk != 1281799               // Real '--' '|='
     && lk != 1281800               // Imaginary '--' '|='
     && lk != 1284530               // '[' ']' '|='
     && lk != 1295367               // Real Imaginary '||'
     && lk != 1297667               // Identifier '++' '||'
     && lk != 1297668               // Character '++' '||'
     && lk != 1297669               // String '++' '||'
     && lk != 1297670               // Integer '++' '||'
     && lk != 1297671               // Real '++' '||'
     && lk != 1297672               // Imaginary '++' '||'
     && lk != 1298179               // Identifier '--' '||'
     && lk != 1298180               // Character '--' '||'
     && lk != 1298181               // String '--' '||'
     && lk != 1298182               // Integer '--' '||'
     && lk != 1298183               // Real '--' '||'
     && lk != 1298184               // Imaginary '--' '||'
     && lk != 1300914               // '[' ']' '||'
     && lk != 1311751               // Real Imaginary '}'
     && lk != 1314051               // Identifier '++' '}'
     && lk != 1314052               // Character '++' '}'
     && lk != 1314053               // String '++' '}'
     && lk != 1314054               // Integer '++' '}'
     && lk != 1314055               // Real '++' '}'
     && lk != 1314056               // Imaginary '++' '}'
     && lk != 1314563               // Identifier '--' '}'
     && lk != 1314564               // Character '--' '}'
     && lk != 1314565               // String '--' '}'
     && lk != 1314566               // Integer '--' '}'
     && lk != 1314567               // Real '--' '}'
     && lk != 1314568               // Imaginary '--' '}'
     && lk != 1317298               // '[' ']' '}'
     && lk != 1328135               // Real Imaginary '~'
     && lk != 1330435               // Identifier '++' '~'
     && lk != 1330436               // Character '++' '~'
     && lk != 1330437               // String '++' '~'
     && lk != 1330438               // Integer '++' '~'
     && lk != 1330439               // Real '++' '~'
     && lk != 1330440               // Imaginary '++' '~'
     && lk != 1330947               // Identifier '--' '~'
     && lk != 1330948               // Character '--' '~'
     && lk != 1330949               // String '--' '~'
     && lk != 1330950               // Integer '--' '~'
     && lk != 1330951               // Real '--' '~'
     && lk != 1330952               // Imaginary '--' '~'
     && lk != 1333682)              // '[' ']' '~'
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
          lookahead1W(6);           // WhiteSpace^token | '++'
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
            lookahead1W(7);         // WhiteSpace^token | '--'
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
    case 1117443:                   // Identifier '++' 'include'
    case 1117444:                   // Character '++' 'include'
    case 1117445:                   // String '++' 'include'
    case 1117446:                   // Integer '++' 'include'
    case 1117447:                   // Real '++' 'include'
    case 1117448:                   // Imaginary '++' 'include'
    case 1133827:                   // Identifier '++' 'local'
    case 1133828:                   // Character '++' 'local'
    case 1133829:                   // String '++' 'local'
    case 1133830:                   // Integer '++' 'local'
    case 1133831:                   // Real '++' 'local'
    case 1133832:                   // Imaginary '++' 'local'
    case 1150211:                   // Identifier '++' 'return'
    case 1150212:                   // Character '++' 'return'
    case 1150213:                   // String '++' 'return'
    case 1150214:                   // Integer '++' 'return'
    case 1150215:                   // Real '++' 'return'
    case 1150216:                   // Imaginary '++' 'return'
    case 1166595:                   // Identifier '++' 'switch'
    case 1166596:                   // Character '++' 'switch'
    case 1166597:                   // String '++' 'switch'
    case 1166598:                   // Integer '++' 'switch'
    case 1166599:                   // Real '++' 'switch'
    case 1166600:                   // Imaginary '++' 'switch'
    case 1182979:                   // Identifier '++' 'test'
    case 1182980:                   // Character '++' 'test'
    case 1182981:                   // String '++' 'test'
    case 1182982:                   // Integer '++' 'test'
    case 1182983:                   // Real '++' 'test'
    case 1182984:                   // Imaginary '++' 'test'
    case 1199363:                   // Identifier '++' 'throw'
    case 1199364:                   // Character '++' 'throw'
    case 1199365:                   // String '++' 'throw'
    case 1199366:                   // Integer '++' 'throw'
    case 1199367:                   // Real '++' 'throw'
    case 1199368:                   // Imaginary '++' 'throw'
    case 1215747:                   // Identifier '++' 'try'
    case 1215748:                   // Character '++' 'try'
    case 1215749:                   // String '++' 'try'
    case 1215750:                   // Integer '++' 'try'
    case 1215751:                   // Real '++' 'try'
    case 1215752:                   // Imaginary '++' 'try'
    case 1232131:                   // Identifier '++' 'while'
    case 1232132:                   // Character '++' 'while'
    case 1232133:                   // String '++' 'while'
    case 1232134:                   // Integer '++' 'while'
    case 1232135:                   // Real '++' 'while'
    case 1232136:                   // Imaginary '++' 'while'
    case 1264899:                   // Identifier '++' '|'
    case 1264900:                   // Character '++' '|'
    case 1264901:                   // String '++' '|'
    case 1264902:                   // Integer '++' '|'
    case 1264903:                   // Real '++' '|'
    case 1264904:                   // Imaginary '++' '|'
    case 1281283:                   // Identifier '++' '|='
    case 1281284:                   // Character '++' '|='
    case 1281285:                   // String '++' '|='
    case 1281286:                   // Integer '++' '|='
    case 1281287:                   // Real '++' '|='
    case 1281288:                   // Imaginary '++' '|='
    case 1297667:                   // Identifier '++' '||'
    case 1297668:                   // Character '++' '||'
    case 1297669:                   // String '++' '||'
    case 1297670:                   // Integer '++' '||'
    case 1297671:                   // Real '++' '||'
    case 1297672:                   // Imaginary '++' '||'
    case 1314051:                   // Identifier '++' '}'
    case 1314052:                   // Character '++' '}'
    case 1314053:                   // String '++' '}'
    case 1314054:                   // Integer '++' '}'
    case 1314055:                   // Real '++' '}'
    case 1314056:                   // Imaginary '++' '}'
    case 1330435:                   // Identifier '++' '~'
    case 1330436:                   // Character '++' '~'
    case 1330437:                   // String '++' '~'
    case 1330438:                   // Integer '++' '~'
    case 1330439:                   // Real '++' '~'
    case 1330440:                   // Imaginary '++' '~'
      parse_Primary();
      lookahead1W(6);               // WhiteSpace^token | '++'
      consume(26);                  // '++'
      break;
    case -2:
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
    case 1117955:                   // Identifier '--' 'include'
    case 1117956:                   // Character '--' 'include'
    case 1117957:                   // String '--' 'include'
    case 1117958:                   // Integer '--' 'include'
    case 1117959:                   // Real '--' 'include'
    case 1117960:                   // Imaginary '--' 'include'
    case 1134339:                   // Identifier '--' 'local'
    case 1134340:                   // Character '--' 'local'
    case 1134341:                   // String '--' 'local'
    case 1134342:                   // Integer '--' 'local'
    case 1134343:                   // Real '--' 'local'
    case 1134344:                   // Imaginary '--' 'local'
    case 1150723:                   // Identifier '--' 'return'
    case 1150724:                   // Character '--' 'return'
    case 1150725:                   // String '--' 'return'
    case 1150726:                   // Integer '--' 'return'
    case 1150727:                   // Real '--' 'return'
    case 1150728:                   // Imaginary '--' 'return'
    case 1167107:                   // Identifier '--' 'switch'
    case 1167108:                   // Character '--' 'switch'
    case 1167109:                   // String '--' 'switch'
    case 1167110:                   // Integer '--' 'switch'
    case 1167111:                   // Real '--' 'switch'
    case 1167112:                   // Imaginary '--' 'switch'
    case 1183491:                   // Identifier '--' 'test'
    case 1183492:                   // Character '--' 'test'
    case 1183493:                   // String '--' 'test'
    case 1183494:                   // Integer '--' 'test'
    case 1183495:                   // Real '--' 'test'
    case 1183496:                   // Imaginary '--' 'test'
    case 1199875:                   // Identifier '--' 'throw'
    case 1199876:                   // Character '--' 'throw'
    case 1199877:                   // String '--' 'throw'
    case 1199878:                   // Integer '--' 'throw'
    case 1199879:                   // Real '--' 'throw'
    case 1199880:                   // Imaginary '--' 'throw'
    case 1216259:                   // Identifier '--' 'try'
    case 1216260:                   // Character '--' 'try'
    case 1216261:                   // String '--' 'try'
    case 1216262:                   // Integer '--' 'try'
    case 1216263:                   // Real '--' 'try'
    case 1216264:                   // Imaginary '--' 'try'
    case 1232643:                   // Identifier '--' 'while'
    case 1232644:                   // Character '--' 'while'
    case 1232645:                   // String '--' 'while'
    case 1232646:                   // Integer '--' 'while'
    case 1232647:                   // Real '--' 'while'
    case 1232648:                   // Imaginary '--' 'while'
    case 1265411:                   // Identifier '--' '|'
    case 1265412:                   // Character '--' '|'
    case 1265413:                   // String '--' '|'
    case 1265414:                   // Integer '--' '|'
    case 1265415:                   // Real '--' '|'
    case 1265416:                   // Imaginary '--' '|'
    case 1281795:                   // Identifier '--' '|='
    case 1281796:                   // Character '--' '|='
    case 1281797:                   // String '--' '|='
    case 1281798:                   // Integer '--' '|='
    case 1281799:                   // Real '--' '|='
    case 1281800:                   // Imaginary '--' '|='
    case 1298179:                   // Identifier '--' '||'
    case 1298180:                   // Character '--' '||'
    case 1298181:                   // String '--' '||'
    case 1298182:                   // Integer '--' '||'
    case 1298183:                   // Real '--' '||'
    case 1298184:                   // Imaginary '--' '||'
    case 1314563:                   // Identifier '--' '}'
    case 1314564:                   // Character '--' '}'
    case 1314565:                   // String '--' '}'
    case 1314566:                   // Integer '--' '}'
    case 1314567:                   // Real '--' '}'
    case 1314568:                   // Imaginary '--' '}'
    case 1330947:                   // Identifier '--' '~'
    case 1330948:                   // Character '--' '~'
    case 1330949:                   // String '--' '~'
    case 1330950:                   // Integer '--' '~'
    case 1330951:                   // Real '--' '~'
    case 1330952:                   // Imaginary '--' '~'
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
    case 81:                        // '~'
      consume(81);                  // '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(40);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 916:                     // '(' Real
        lookahead3W(33);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9748:                    // '(' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 1044:                    // '(' Imaginary
        lookahead3W(29);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
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
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8340:                    // '(' 'i32'
      case 8468:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8852:                    // '(' 'local'
      case 8980:                    // '(' 'return'
      case 9492:                    // '(' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10388:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8596:                    // '(' 'if'
      case 8724:                    // '(' 'include'
      case 9108:                    // '(' 'switch'
      case 9236:                    // '(' 'test'
      case 9364:                    // '(' 'throw'
      case 9620:                    // '(' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(27);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(43);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
        lookahead3W(31);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 9778:                    // '[' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
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
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8370:                    // '[' 'i32'
      case 8498:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8882:                    // '[' 'local'
      case 9010:                    // '[' 'return'
      case 9522:                    // '[' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10418:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8626:                    // '[' 'if'
      case 8754:                    // '[' 'include'
      case 9138:                    // '[' 'switch'
      case 9266:                    // '[' 'test'
      case 9394:                    // '[' 'throw'
      case 9650:                    // '[' 'while'
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(42);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 716:                     // '{' String
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 972:                     // '{' Real
        lookahead3W(36);            // Imaginary | WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6476:                    // '{' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 1100:                    // '{' Imaginary
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1228:                    // '{' Comment
      case 4812:                    // '{' ';'
      case 6988:                    // '{' 'break'
      case 7372:                    // '{' 'continue'
        lookahead3W(19);            // WhiteSpace^token | ',' | '}'
        break;
      case 7884:                    // '{' 'f32'
      case 8012:                    // '{' 'f64'
      case 8396:                    // '{' 'i32'
      case 8524:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 2636:                    // '{' '('
      case 7628:                    // '{' 'do'
      case 8908:                    // '{' 'local'
      case 9036:                    // '{' 'return'
      case 9548:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1612:                    // '{' '!'
      case 3276:                    // '{' '+'
      case 3404:                    // '{' '++'
      case 3788:                    // '{' '-'
      case 3916:                    // '{' '--'
      case 10444:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8140:                    // '{' 'for'
      case 8268:                    // '{' 'foreach'
      case 8652:                    // '{' 'if'
      case 8780:                    // '{' 'include'
      case 9164:                    // '{' 'switch'
      case 9292:                    // '{' 'test'
      case 9420:                    // '{' 'throw'
      case 9676:                    // '{' 'while'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
     && lk != 81                    // '~'
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
     && lk != 8707                  // Identifier 'include'
     && lk != 8708                  // Character 'include'
     && lk != 8709                  // String 'include'
     && lk != 8710                  // Integer 'include'
     && lk != 8711                  // Real 'include'
     && lk != 8712                  // Imaginary 'include'
     && lk != 8835                  // Identifier 'local'
     && lk != 8836                  // Character 'local'
     && lk != 8837                  // String 'local'
     && lk != 8838                  // Integer 'local'
     && lk != 8839                  // Real 'local'
     && lk != 8840                  // Imaginary 'local'
     && lk != 8963                  // Identifier 'return'
     && lk != 8964                  // Character 'return'
     && lk != 8965                  // String 'return'
     && lk != 8966                  // Integer 'return'
     && lk != 8967                  // Real 'return'
     && lk != 8968                  // Imaginary 'return'
     && lk != 9091                  // Identifier 'switch'
     && lk != 9092                  // Character 'switch'
     && lk != 9093                  // String 'switch'
     && lk != 9094                  // Integer 'switch'
     && lk != 9095                  // Real 'switch'
     && lk != 9096                  // Imaginary 'switch'
     && lk != 9219                  // Identifier 'test'
     && lk != 9220                  // Character 'test'
     && lk != 9221                  // String 'test'
     && lk != 9222                  // Integer 'test'
     && lk != 9223                  // Real 'test'
     && lk != 9224                  // Imaginary 'test'
     && lk != 9347                  // Identifier 'throw'
     && lk != 9348                  // Character 'throw'
     && lk != 9349                  // String 'throw'
     && lk != 9350                  // Integer 'throw'
     && lk != 9351                  // Real 'throw'
     && lk != 9352                  // Imaginary 'throw'
     && lk != 9475                  // Identifier 'try'
     && lk != 9476                  // Character 'try'
     && lk != 9477                  // String 'try'
     && lk != 9478                  // Integer 'try'
     && lk != 9479                  // Real 'try'
     && lk != 9480                  // Imaginary 'try'
     && lk != 9603                  // Identifier 'while'
     && lk != 9604                  // Character 'while'
     && lk != 9605                  // String 'while'
     && lk != 9606                  // Integer 'while'
     && lk != 9607                  // Real 'while'
     && lk != 9608                  // Imaginary 'while'
     && lk != 9731                  // Identifier '{'
     && lk != 9732                  // Character '{'
     && lk != 9733                  // String '{'
     && lk != 9734                  // Integer '{'
     && lk != 9735                  // Real '{'
     && lk != 9736                  // Imaginary '{'
     && lk != 9859                  // Identifier '|'
     && lk != 9860                  // Character '|'
     && lk != 9861                  // String '|'
     && lk != 9862                  // Integer '|'
     && lk != 9863                  // Real '|'
     && lk != 9864                  // Imaginary '|'
     && lk != 9987                  // Identifier '|='
     && lk != 9988                  // Character '|='
     && lk != 9989                  // String '|='
     && lk != 9990                  // Integer '|='
     && lk != 9991                  // Real '|='
     && lk != 9992                  // Imaginary '|='
     && lk != 10115                 // Identifier '||'
     && lk != 10116                 // Character '||'
     && lk != 10117                 // String '||'
     && lk != 10118                 // Integer '||'
     && lk != 10119                 // Real '||'
     && lk != 10120                 // Imaginary '||'
     && lk != 10243                 // Identifier '}'
     && lk != 10244                 // Character '}'
     && lk != 10245                 // String '}'
     && lk != 10246                 // Integer '}'
     && lk != 10247                 // Real '}'
     && lk != 10248                 // Imaginary '}'
     && lk != 10371                 // Identifier '~'
     && lk != 10372                 // Character '~'
     && lk != 10373                 // String '~'
     && lk != 10374                 // Integer '~'
     && lk != 10375                 // Real '~'
     && lk != 10376                 // Imaginary '~'
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
     && lk != 1115143               // Real Imaginary 'include'
     && lk != 1117443               // Identifier '++' 'include'
     && lk != 1117444               // Character '++' 'include'
     && lk != 1117445               // String '++' 'include'
     && lk != 1117446               // Integer '++' 'include'
     && lk != 1117447               // Real '++' 'include'
     && lk != 1117448               // Imaginary '++' 'include'
     && lk != 1117955               // Identifier '--' 'include'
     && lk != 1117956               // Character '--' 'include'
     && lk != 1117957               // String '--' 'include'
     && lk != 1117958               // Integer '--' 'include'
     && lk != 1117959               // Real '--' 'include'
     && lk != 1117960               // Imaginary '--' 'include'
     && lk != 1120690               // '[' ']' 'include'
     && lk != 1131527               // Real Imaginary 'local'
     && lk != 1133827               // Identifier '++' 'local'
     && lk != 1133828               // Character '++' 'local'
     && lk != 1133829               // String '++' 'local'
     && lk != 1133830               // Integer '++' 'local'
     && lk != 1133831               // Real '++' 'local'
     && lk != 1133832               // Imaginary '++' 'local'
     && lk != 1134339               // Identifier '--' 'local'
     && lk != 1134340               // Character '--' 'local'
     && lk != 1134341               // String '--' 'local'
     && lk != 1134342               // Integer '--' 'local'
     && lk != 1134343               // Real '--' 'local'
     && lk != 1134344               // Imaginary '--' 'local'
     && lk != 1137074               // '[' ']' 'local'
     && lk != 1147911               // Real Imaginary 'return'
     && lk != 1150211               // Identifier '++' 'return'
     && lk != 1150212               // Character '++' 'return'
     && lk != 1150213               // String '++' 'return'
     && lk != 1150214               // Integer '++' 'return'
     && lk != 1150215               // Real '++' 'return'
     && lk != 1150216               // Imaginary '++' 'return'
     && lk != 1150723               // Identifier '--' 'return'
     && lk != 1150724               // Character '--' 'return'
     && lk != 1150725               // String '--' 'return'
     && lk != 1150726               // Integer '--' 'return'
     && lk != 1150727               // Real '--' 'return'
     && lk != 1150728               // Imaginary '--' 'return'
     && lk != 1153458               // '[' ']' 'return'
     && lk != 1164295               // Real Imaginary 'switch'
     && lk != 1166595               // Identifier '++' 'switch'
     && lk != 1166596               // Character '++' 'switch'
     && lk != 1166597               // String '++' 'switch'
     && lk != 1166598               // Integer '++' 'switch'
     && lk != 1166599               // Real '++' 'switch'
     && lk != 1166600               // Imaginary '++' 'switch'
     && lk != 1167107               // Identifier '--' 'switch'
     && lk != 1167108               // Character '--' 'switch'
     && lk != 1167109               // String '--' 'switch'
     && lk != 1167110               // Integer '--' 'switch'
     && lk != 1167111               // Real '--' 'switch'
     && lk != 1167112               // Imaginary '--' 'switch'
     && lk != 1169842               // '[' ']' 'switch'
     && lk != 1180679               // Real Imaginary 'test'
     && lk != 1182979               // Identifier '++' 'test'
     && lk != 1182980               // Character '++' 'test'
     && lk != 1182981               // String '++' 'test'
     && lk != 1182982               // Integer '++' 'test'
     && lk != 1182983               // Real '++' 'test'
     && lk != 1182984               // Imaginary '++' 'test'
     && lk != 1183491               // Identifier '--' 'test'
     && lk != 1183492               // Character '--' 'test'
     && lk != 1183493               // String '--' 'test'
     && lk != 1183494               // Integer '--' 'test'
     && lk != 1183495               // Real '--' 'test'
     && lk != 1183496               // Imaginary '--' 'test'
     && lk != 1186226               // '[' ']' 'test'
     && lk != 1197063               // Real Imaginary 'throw'
     && lk != 1199363               // Identifier '++' 'throw'
     && lk != 1199364               // Character '++' 'throw'
     && lk != 1199365               // String '++' 'throw'
     && lk != 1199366               // Integer '++' 'throw'
     && lk != 1199367               // Real '++' 'throw'
     && lk != 1199368               // Imaginary '++' 'throw'
     && lk != 1199875               // Identifier '--' 'throw'
     && lk != 1199876               // Character '--' 'throw'
     && lk != 1199877               // String '--' 'throw'
     && lk != 1199878               // Integer '--' 'throw'
     && lk != 1199879               // Real '--' 'throw'
     && lk != 1199880               // Imaginary '--' 'throw'
     && lk != 1202610               // '[' ']' 'throw'
     && lk != 1213447               // Real Imaginary 'try'
     && lk != 1215747               // Identifier '++' 'try'
     && lk != 1215748               // Character '++' 'try'
     && lk != 1215749               // String '++' 'try'
     && lk != 1215750               // Integer '++' 'try'
     && lk != 1215751               // Real '++' 'try'
     && lk != 1215752               // Imaginary '++' 'try'
     && lk != 1216259               // Identifier '--' 'try'
     && lk != 1216260               // Character '--' 'try'
     && lk != 1216261               // String '--' 'try'
     && lk != 1216262               // Integer '--' 'try'
     && lk != 1216263               // Real '--' 'try'
     && lk != 1216264               // Imaginary '--' 'try'
     && lk != 1218994               // '[' ']' 'try'
     && lk != 1229831               // Real Imaginary 'while'
     && lk != 1232131               // Identifier '++' 'while'
     && lk != 1232132               // Character '++' 'while'
     && lk != 1232133               // String '++' 'while'
     && lk != 1232134               // Integer '++' 'while'
     && lk != 1232135               // Real '++' 'while'
     && lk != 1232136               // Imaginary '++' 'while'
     && lk != 1232643               // Identifier '--' 'while'
     && lk != 1232644               // Character '--' 'while'
     && lk != 1232645               // String '--' 'while'
     && lk != 1232646               // Integer '--' 'while'
     && lk != 1232647               // Real '--' 'while'
     && lk != 1232648               // Imaginary '--' 'while'
     && lk != 1235378               // '[' ']' 'while'
     && lk != 1246215               // Real Imaginary '{'
     && lk != 1251762               // '[' ']' '{'
     && lk != 1262599               // Real Imaginary '|'
     && lk != 1264899               // Identifier '++' '|'
     && lk != 1264900               // Character '++' '|'
     && lk != 1264901               // String '++' '|'
     && lk != 1264902               // Integer '++' '|'
     && lk != 1264903               // Real '++' '|'
     && lk != 1264904               // Imaginary '++' '|'
     && lk != 1265411               // Identifier '--' '|'
     && lk != 1265412               // Character '--' '|'
     && lk != 1265413               // String '--' '|'
     && lk != 1265414               // Integer '--' '|'
     && lk != 1265415               // Real '--' '|'
     && lk != 1265416               // Imaginary '--' '|'
     && lk != 1268146               // '[' ']' '|'
     && lk != 1278983               // Real Imaginary '|='
     && lk != 1281283               // Identifier '++' '|='
     && lk != 1281284               // Character '++' '|='
     && lk != 1281285               // String '++' '|='
     && lk != 1281286               // Integer '++' '|='
     && lk != 1281287               // Real '++' '|='
     && lk != 1281288               // Imaginary '++' '|='
     && lk != 1281795               // Identifier '--' '|='
     && lk != 1281796               // Character '--' '|='
     && lk != 1281797               // String '--' '|='
     && lk != 1281798               // Integer '--' '|='
     && lk != 1281799               // Real '--' '|='
     && lk != 1281800               // Imaginary '--' '|='
     && lk != 1284530               // '[' ']' '|='
     && lk != 1295367               // Real Imaginary '||'
     && lk != 1297667               // Identifier '++' '||'
     && lk != 1297668               // Character '++' '||'
     && lk != 1297669               // String '++' '||'
     && lk != 1297670               // Integer '++' '||'
     && lk != 1297671               // Real '++' '||'
     && lk != 1297672               // Imaginary '++' '||'
     && lk != 1298179               // Identifier '--' '||'
     && lk != 1298180               // Character '--' '||'
     && lk != 1298181               // String '--' '||'
     && lk != 1298182               // Integer '--' '||'
     && lk != 1298183               // Real '--' '||'
     && lk != 1298184               // Imaginary '--' '||'
     && lk != 1300914               // '[' ']' '||'
     && lk != 1311751               // Real Imaginary '}'
     && lk != 1314051               // Identifier '++' '}'
     && lk != 1314052               // Character '++' '}'
     && lk != 1314053               // String '++' '}'
     && lk != 1314054               // Integer '++' '}'
     && lk != 1314055               // Real '++' '}'
     && lk != 1314056               // Imaginary '++' '}'
     && lk != 1314563               // Identifier '--' '}'
     && lk != 1314564               // Character '--' '}'
     && lk != 1314565               // String '--' '}'
     && lk != 1314566               // Integer '--' '}'
     && lk != 1314567               // Real '--' '}'
     && lk != 1314568               // Imaginary '--' '}'
     && lk != 1317298               // '[' ']' '}'
     && lk != 1328135               // Real Imaginary '~'
     && lk != 1330435               // Identifier '++' '~'
     && lk != 1330436               // Character '++' '~'
     && lk != 1330437               // String '++' '~'
     && lk != 1330438               // Integer '++' '~'
     && lk != 1330439               // Real '++' '~'
     && lk != 1330440               // Imaginary '++' '~'
     && lk != 1330947               // Identifier '--' '~'
     && lk != 1330948               // Character '--' '~'
     && lk != 1330949               // String '--' '~'
     && lk != 1330950               // Integer '--' '~'
     && lk != 1330951               // Real '--' '~'
     && lk != 1330952               // Imaginary '--' '~'
     && lk != 1333682)              // '[' ']' '~'
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
          lookahead1W(6);           // WhiteSpace^token | '++'
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
            lookahead1W(7);         // WhiteSpace^token | '--'
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
    case 1117443:                   // Identifier '++' 'include'
    case 1117444:                   // Character '++' 'include'
    case 1117445:                   // String '++' 'include'
    case 1117446:                   // Integer '++' 'include'
    case 1117447:                   // Real '++' 'include'
    case 1117448:                   // Imaginary '++' 'include'
    case 1133827:                   // Identifier '++' 'local'
    case 1133828:                   // Character '++' 'local'
    case 1133829:                   // String '++' 'local'
    case 1133830:                   // Integer '++' 'local'
    case 1133831:                   // Real '++' 'local'
    case 1133832:                   // Imaginary '++' 'local'
    case 1150211:                   // Identifier '++' 'return'
    case 1150212:                   // Character '++' 'return'
    case 1150213:                   // String '++' 'return'
    case 1150214:                   // Integer '++' 'return'
    case 1150215:                   // Real '++' 'return'
    case 1150216:                   // Imaginary '++' 'return'
    case 1166595:                   // Identifier '++' 'switch'
    case 1166596:                   // Character '++' 'switch'
    case 1166597:                   // String '++' 'switch'
    case 1166598:                   // Integer '++' 'switch'
    case 1166599:                   // Real '++' 'switch'
    case 1166600:                   // Imaginary '++' 'switch'
    case 1182979:                   // Identifier '++' 'test'
    case 1182980:                   // Character '++' 'test'
    case 1182981:                   // String '++' 'test'
    case 1182982:                   // Integer '++' 'test'
    case 1182983:                   // Real '++' 'test'
    case 1182984:                   // Imaginary '++' 'test'
    case 1199363:                   // Identifier '++' 'throw'
    case 1199364:                   // Character '++' 'throw'
    case 1199365:                   // String '++' 'throw'
    case 1199366:                   // Integer '++' 'throw'
    case 1199367:                   // Real '++' 'throw'
    case 1199368:                   // Imaginary '++' 'throw'
    case 1215747:                   // Identifier '++' 'try'
    case 1215748:                   // Character '++' 'try'
    case 1215749:                   // String '++' 'try'
    case 1215750:                   // Integer '++' 'try'
    case 1215751:                   // Real '++' 'try'
    case 1215752:                   // Imaginary '++' 'try'
    case 1232131:                   // Identifier '++' 'while'
    case 1232132:                   // Character '++' 'while'
    case 1232133:                   // String '++' 'while'
    case 1232134:                   // Integer '++' 'while'
    case 1232135:                   // Real '++' 'while'
    case 1232136:                   // Imaginary '++' 'while'
    case 1264899:                   // Identifier '++' '|'
    case 1264900:                   // Character '++' '|'
    case 1264901:                   // String '++' '|'
    case 1264902:                   // Integer '++' '|'
    case 1264903:                   // Real '++' '|'
    case 1264904:                   // Imaginary '++' '|'
    case 1281283:                   // Identifier '++' '|='
    case 1281284:                   // Character '++' '|='
    case 1281285:                   // String '++' '|='
    case 1281286:                   // Integer '++' '|='
    case 1281287:                   // Real '++' '|='
    case 1281288:                   // Imaginary '++' '|='
    case 1297667:                   // Identifier '++' '||'
    case 1297668:                   // Character '++' '||'
    case 1297669:                   // String '++' '||'
    case 1297670:                   // Integer '++' '||'
    case 1297671:                   // Real '++' '||'
    case 1297672:                   // Imaginary '++' '||'
    case 1314051:                   // Identifier '++' '}'
    case 1314052:                   // Character '++' '}'
    case 1314053:                   // String '++' '}'
    case 1314054:                   // Integer '++' '}'
    case 1314055:                   // Real '++' '}'
    case 1314056:                   // Imaginary '++' '}'
    case 1330435:                   // Identifier '++' '~'
    case 1330436:                   // Character '++' '~'
    case 1330437:                   // String '++' '~'
    case 1330438:                   // Integer '++' '~'
    case 1330439:                   // Real '++' '~'
    case 1330440:                   // Imaginary '++' '~'
      try_Primary();
      lookahead1W(6);               // WhiteSpace^token | '++'
      consumeT(26);                 // '++'
      break;
    case -2:
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
    case 1117955:                   // Identifier '--' 'include'
    case 1117956:                   // Character '--' 'include'
    case 1117957:                   // String '--' 'include'
    case 1117958:                   // Integer '--' 'include'
    case 1117959:                   // Real '--' 'include'
    case 1117960:                   // Imaginary '--' 'include'
    case 1134339:                   // Identifier '--' 'local'
    case 1134340:                   // Character '--' 'local'
    case 1134341:                   // String '--' 'local'
    case 1134342:                   // Integer '--' 'local'
    case 1134343:                   // Real '--' 'local'
    case 1134344:                   // Imaginary '--' 'local'
    case 1150723:                   // Identifier '--' 'return'
    case 1150724:                   // Character '--' 'return'
    case 1150725:                   // String '--' 'return'
    case 1150726:                   // Integer '--' 'return'
    case 1150727:                   // Real '--' 'return'
    case 1150728:                   // Imaginary '--' 'return'
    case 1167107:                   // Identifier '--' 'switch'
    case 1167108:                   // Character '--' 'switch'
    case 1167109:                   // String '--' 'switch'
    case 1167110:                   // Integer '--' 'switch'
    case 1167111:                   // Real '--' 'switch'
    case 1167112:                   // Imaginary '--' 'switch'
    case 1183491:                   // Identifier '--' 'test'
    case 1183492:                   // Character '--' 'test'
    case 1183493:                   // String '--' 'test'
    case 1183494:                   // Integer '--' 'test'
    case 1183495:                   // Real '--' 'test'
    case 1183496:                   // Imaginary '--' 'test'
    case 1199875:                   // Identifier '--' 'throw'
    case 1199876:                   // Character '--' 'throw'
    case 1199877:                   // String '--' 'throw'
    case 1199878:                   // Integer '--' 'throw'
    case 1199879:                   // Real '--' 'throw'
    case 1199880:                   // Imaginary '--' 'throw'
    case 1216259:                   // Identifier '--' 'try'
    case 1216260:                   // Character '--' 'try'
    case 1216261:                   // String '--' 'try'
    case 1216262:                   // Integer '--' 'try'
    case 1216263:                   // Real '--' 'try'
    case 1216264:                   // Imaginary '--' 'try'
    case 1232643:                   // Identifier '--' 'while'
    case 1232644:                   // Character '--' 'while'
    case 1232645:                   // String '--' 'while'
    case 1232646:                   // Integer '--' 'while'
    case 1232647:                   // Real '--' 'while'
    case 1232648:                   // Imaginary '--' 'while'
    case 1265411:                   // Identifier '--' '|'
    case 1265412:                   // Character '--' '|'
    case 1265413:                   // String '--' '|'
    case 1265414:                   // Integer '--' '|'
    case 1265415:                   // Real '--' '|'
    case 1265416:                   // Imaginary '--' '|'
    case 1281795:                   // Identifier '--' '|='
    case 1281796:                   // Character '--' '|='
    case 1281797:                   // String '--' '|='
    case 1281798:                   // Integer '--' '|='
    case 1281799:                   // Real '--' '|='
    case 1281800:                   // Imaginary '--' '|='
    case 1298179:                   // Identifier '--' '||'
    case 1298180:                   // Character '--' '||'
    case 1298181:                   // String '--' '||'
    case 1298182:                   // Integer '--' '||'
    case 1298183:                   // Real '--' '||'
    case 1298184:                   // Imaginary '--' '||'
    case 1314563:                   // Identifier '--' '}'
    case 1314564:                   // Character '--' '}'
    case 1314565:                   // String '--' '}'
    case 1314566:                   // Integer '--' '}'
    case 1314567:                   // Real '--' '}'
    case 1314568:                   // Imaginary '--' '}'
    case 1330947:                   // Identifier '--' '~'
    case 1330948:                   // Character '--' '~'
    case 1330949:                   // String '--' '~'
    case 1330950:                   // Integer '--' '~'
    case 1330951:                   // Real '--' '~'
    case 1330952:                   // Imaginary '--' '~'
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
    case 81:                        // '~'
      consumeT(81);                 // '~'
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
    case 75:                        // 'while'
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
    case 71:                        // 'switch'
      parse_Switch();
      break;
    case 74:                        // 'try'
      parse_Try();
      break;
    case 72:                        // 'test'
      parse_Test();
      break;
    case 9731:                      // Identifier '{'
      parse_NamespaceDeclaration();
      break;
    case 70:                        // 'return'
      parse_Return();
      break;
    case 68:                        // 'include'
      parse_Include();
      break;
    case 69:                        // 'local'
      parse_Local();
      break;
    case 73:                        // 'throw'
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
    case 75:                        // 'while'
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
    case 71:                        // 'switch'
      try_Switch();
      break;
    case 74:                        // 'try'
      try_Try();
      break;
    case 72:                        // 'test'
      try_Test();
      break;
    case 9731:                      // Identifier '{'
      try_NamespaceDeclaration();
      break;
    case 70:                        // 'return'
      try_Return();
      break;
    case 68:                        // 'include'
      try_Include();
      break;
    case 69:                        // 'local'
      try_Local();
      break;
    case 73:                        // 'throw'
      try_Throw();
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(14);                // WhiteSpace^token | 'while'
    consume(75);                    // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(14);                // WhiteSpace^token | 'while'
    consumeT(75);                   // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(75);                    // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(75);                   // 'while'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(10);                // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(44);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(49);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9788:                    // 'else' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8892:                    // 'else' 'local'
      case 9020:                    // 'else' 'return'
      case 9532:                    // 'else' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10428:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8636:                    // 'else' 'if'
      case 8764:                    // 'else' 'include'
      case 9148:                    // 'else' 'switch'
      case 9276:                    // 'else' 'test'
      case 9404:                    // 'else' 'throw'
      case 9660:                    // 'else' 'while'
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 76                    // '{'
     && lk != 80                    // '}'
     && lk != 81)                   // '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(44);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(49);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9788:                    // 'else' '{'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8892:                    // 'else' 'local'
      case 9020:                    // 'else' 'return'
      case 9532:                    // 'else' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10428:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8636:                    // 'else' 'if'
      case 8764:                    // 'else' 'include'
      case 9148:                    // 'else' 'switch'
      case 9276:                    // 'else' 'test'
      case 9404:                    // 'else' 'throw'
      case 9660:                    // 'else' 'while'
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 76                    // '{'
     && lk != 80                    // '}'
     && lk != 81)                   // '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(71);                    // 'switch'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(15);                // WhiteSpace^token | '{'
    consume(76);                    // '{'
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
    consume(80);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(71);                   // 'switch'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(15);                // WhiteSpace^token | '{'
    consumeT(76);                   // '{'
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
    consumeT(80);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(55);                    // 'case'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(35);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 80)                 // '}'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(35);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 80)                 // '}'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 80)                 // '}'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 80)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Try()
  {
    eventHandler.startNonterminal("Try", e0);
    consume(74);                    // 'try'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(44);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'include'
     || lk == 1133112               // 'catch' '(' 'local'
     || lk == 1149496               // 'catch' '(' 'return'
     || lk == 1165880               // 'catch' '(' 'switch'
     || lk == 1182264               // 'catch' '(' 'test'
     || lk == 1198648               // 'catch' '(' 'throw'
     || lk == 1215032               // 'catch' '(' 'try'
     || lk == 1231416               // 'catch' '(' 'while'
     || lk == 1247800               // 'catch' '(' '{'
     || lk == 1329720)              // 'catch' '(' '~'
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
    consumeT(74);                   // 'try'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(44);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'include'
     || lk == 1133112               // 'catch' '(' 'local'
     || lk == 1149496               // 'catch' '(' 'return'
     || lk == 1165880               // 'catch' '(' 'switch'
     || lk == 1182264               // 'catch' '(' 'test'
     || lk == 1198648               // 'catch' '(' 'throw'
     || lk == 1215032               // 'catch' '(' 'try'
     || lk == 1231416               // 'catch' '(' 'while'
     || lk == 1247800               // 'catch' '(' '{'
     || lk == 1329720)              // 'catch' '(' '~'
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
    consume(72);                    // 'test'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 76                    // '{'
     && lk != 81                    // '~'
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
     && lk != 8741                  // ';' 'include'
     && lk != 8869                  // ';' 'local'
     && lk != 8997                  // ';' 'return'
     && lk != 9125                  // ';' 'switch'
     && lk != 9253                  // ';' 'test'
     && lk != 9381                  // ';' 'throw'
     && lk != 9509                  // ';' 'try'
     && lk != 9637                  // ';' 'while'
     && lk != 9765                  // ';' '{'
     && lk != 10405)                // ';' '~'
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
     || lk == 68                    // 'include'
     || lk == 69                    // 'local'
     || lk == 70                    // 'return'
     || lk == 71                    // 'switch'
     || lk == 72                    // 'test'
     || lk == 73                    // 'throw'
     || lk == 74                    // 'try'
     || lk == 75                    // 'while'
     || lk == 76                    // '{'
     || lk == 81)                   // '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(26);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
       || lk == 1116837             // ';' ')' 'include'
       || lk == 1133221             // ';' ')' 'local'
       || lk == 1149605             // ';' ')' 'return'
       || lk == 1165989             // ';' ')' 'switch'
       || lk == 1182373             // ';' ')' 'test'
       || lk == 1198757             // ';' ')' 'throw'
       || lk == 1215141             // ';' ')' 'try'
       || lk == 1231525             // ';' ')' 'while'
       || lk == 1247909             // ';' ')' '{'
       || lk == 1313445             // ';' ')' '}'
       || lk == 1329829)            // ';' ')' '~'
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
       && lk != 8741                // ';' 'include'
       && lk != 8869                // ';' 'local'
       && lk != 8997                // ';' 'return'
       && lk != 9125                // ';' 'switch'
       && lk != 9253                // ';' 'test'
       && lk != 9381                // ';' 'throw'
       && lk != 9509                // ';' 'try'
       && lk != 9637                // ';' 'while'
       && lk != 9765                // ';' '{'
       && lk != 10405)              // ';' '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          whitespace();
          parse_Expression();
        }
      }
    }
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(44);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'include'
     || lk == 1133112               // 'catch' '(' 'local'
     || lk == 1149496               // 'catch' '(' 'return'
     || lk == 1165880               // 'catch' '(' 'switch'
     || lk == 1182264               // 'catch' '(' 'test'
     || lk == 1198648               // 'catch' '(' 'throw'
     || lk == 1215032               // 'catch' '(' 'try'
     || lk == 1231416               // 'catch' '(' 'while'
     || lk == 1247800               // 'catch' '(' '{'
     || lk == 1329720)              // 'catch' '(' '~'
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
    consumeT(72);                   // 'test'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(26);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 76                    // '{'
     && lk != 81                    // '~'
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
     && lk != 8741                  // ';' 'include'
     && lk != 8869                  // ';' 'local'
     && lk != 8997                  // ';' 'return'
     && lk != 9125                  // ';' 'switch'
     && lk != 9253                  // ';' 'test'
     && lk != 9381                  // ';' 'throw'
     && lk != 9509                  // ';' 'try'
     && lk != 9637                  // ';' 'while'
     && lk != 9765                  // ';' '{'
     && lk != 10405)                // ';' '~'
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
     || lk == 68                    // 'include'
     || lk == 69                    // 'local'
     || lk == 70                    // 'return'
     || lk == 71                    // 'switch'
     || lk == 72                    // 'test'
     || lk == 73                    // 'throw'
     || lk == 74                    // 'try'
     || lk == 75                    // 'while'
     || lk == 76                    // '{'
     || lk == 81)                   // '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(26);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
       || lk == 1116837             // ';' ')' 'include'
       || lk == 1133221             // ';' ')' 'local'
       || lk == 1149605             // ';' ')' 'return'
       || lk == 1165989             // ';' ')' 'switch'
       || lk == 1182373             // ';' ')' 'test'
       || lk == 1198757             // ';' ')' 'throw'
       || lk == 1215141             // ';' ')' 'try'
       || lk == 1231525             // ';' ')' 'while'
       || lk == 1247909             // ';' ')' '{'
       || lk == 1313445             // ';' ')' '}'
       || lk == 1329829)            // ';' ')' '~'
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
       && lk != 8741                // ';' 'include'
       && lk != 8869                // ';' 'local'
       && lk != 8997                // ';' 'return'
       && lk != 9125                // ';' 'switch'
       && lk != 9253                // ';' 'test'
       && lk != 9381                // ';' 'throw'
       && lk != 9509                // ';' 'try'
       && lk != 9637                // ';' 'while'
       && lk != 9765                // ';' '{'
       && lk != 10405)              // ';' '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Expression();
        }
      }
    }
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(44);                // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'include'
     || lk == 1133112               // 'catch' '(' 'local'
     || lk == 1149496               // 'catch' '(' 'return'
     || lk == 1165880               // 'catch' '(' 'switch'
     || lk == 1182264               // 'catch' '(' 'test'
     || lk == 1198648               // 'catch' '(' 'throw'
     || lk == 1215032               // 'catch' '(' 'try'
     || lk == 1231416               // 'catch' '(' 'while'
     || lk == 1247800               // 'catch' '(' '{'
     || lk == 1329720)              // 'catch' '(' '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 65:                        // 'i32'
    case 66:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    default:
      lk = l1;
    }
    lk = memoized(9, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2; var l3A = l3;
      var b3A = b3; var e3A = e3;
      try
      {
        consumeT(3);                // Identifier
        lookahead1W(4);             // WhiteSpace^token | '('
        consumeT(20);               // '('
        lookahead1W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        try_Arguments();
        consumeT(21);               // ')'
        lookahead1W(11);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
          lookahead1W(4);           // WhiteSpace^token | '('
          consumeT(20);             // '('
          lookahead1W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
          try_Arguments();
          consumeT(21);             // ')'
          lookahead1W(12);          // WhiteSpace^token | '?='
          consumeT(49);             // '?='
          lookahead1W(15);          // WhiteSpace^token | '{'
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
            lookahead1W(4);         // WhiteSpace^token | '('
            consumeT(20);           // '('
            lookahead1W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
            try_Arguments();
            consumeT(21);           // ')'
            lookahead1W(3);         // WhiteSpace^token | '#='
            consumeT(14);           // '#='
            lookahead1W(15);        // WhiteSpace^token | '{'
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
              lookahead1W(4);       // WhiteSpace^token | '('
              consumeT(20);         // '('
              lookahead1W(24);      // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
              try_Arguments();
              consumeT(21);         // ')'
              lookahead1W(9);       // WhiteSpace^token | ':='
              consumeT(36);         // ':='
              lookahead1W(15);      // WhiteSpace^token | '{'
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
                lookahead1W(4);     // WhiteSpace^token | '('
                consumeT(20);       // '('
                lookahead1W(24);    // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
                try_Arguments();
                consumeT(21);       // ')'
                lookahead1W(15);    // WhiteSpace^token | '{'
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
    switch (lk)
    {
    case -1:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(11);              // WhiteSpace^token | '='
      consume(42);                  // '='
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Expression();
      break;
    case -2:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(12);              // WhiteSpace^token | '?='
      consume(49);                  // '?='
      lookahead1W(15);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -3:
      consume(3);                   // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(3);               // WhiteSpace^token | '#='
      consume(14);                  // '#='
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(9);               // WhiteSpace^token | ':='
      consume(36);                  // ':='
      lookahead1W(15);              // WhiteSpace^token | '{'
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
      lookahead1W(4);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        break;
      }
      break;
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 65:                        // 'i32'
    case 66:                        // 'i64'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(4);             // WhiteSpace^token | '('
        break;
      }
      break;
    default:
      lk = l1;
    }
    lk = memoized(9, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2; var l3A = l3;
      var b3A = b3; var e3A = e3;
      try
      {
        consumeT(3);                // Identifier
        lookahead1W(4);             // WhiteSpace^token | '('
        consumeT(20);               // '('
        lookahead1W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        try_Arguments();
        consumeT(21);               // ')'
        lookahead1W(11);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        try_Expression();
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
          consumeT(3);              // Identifier
          lookahead1W(4);           // WhiteSpace^token | '('
          consumeT(20);             // '('
          lookahead1W(24);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
          try_Arguments();
          consumeT(21);             // ')'
          lookahead1W(12);          // WhiteSpace^token | '?='
          consumeT(49);             // '?='
          lookahead1W(15);          // WhiteSpace^token | '{'
          try_Block();
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
            consumeT(3);            // Identifier
            lookahead1W(4);         // WhiteSpace^token | '('
            consumeT(20);           // '('
            lookahead1W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
            try_Arguments();
            consumeT(21);           // ')'
            lookahead1W(3);         // WhiteSpace^token | '#='
            consumeT(14);           // '#='
            lookahead1W(15);        // WhiteSpace^token | '{'
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
              consumeT(3);          // Identifier
              lookahead1W(4);       // WhiteSpace^token | '('
              consumeT(20);         // '('
              lookahead1W(24);      // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
              try_Arguments();
              consumeT(21);         // ')'
              lookahead1W(9);       // WhiteSpace^token | ':='
              consumeT(36);         // ':='
              lookahead1W(15);      // WhiteSpace^token | '{'
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
                if (l1 != 3)        // Identifier
                {
                  try_Type();
                }
                lookahead1W(0);     // Identifier | WhiteSpace^token
                consumeT(3);        // Identifier
                lookahead1W(4);     // WhiteSpace^token | '('
                consumeT(20);       // '('
                lookahead1W(24);    // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
                try_Arguments();
                consumeT(21);       // ')'
                lookahead1W(15);    // WhiteSpace^token | '{'
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
    switch (lk)
    {
    case -1:
      consumeT(3);                  // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(11);              // WhiteSpace^token | '='
      consumeT(42);                 // '='
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Expression();
      break;
    case -2:
      consumeT(3);                  // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(12);              // WhiteSpace^token | '?='
      consumeT(49);                 // '?='
      lookahead1W(15);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -3:
      consumeT(3);                  // Identifier
      lookahead1W(4);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(3);               // WhiteSpace^token | '#='
      consumeT(14);                 // '#='
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(9);               // WhiteSpace^token | ':='
      consumeT(36);                 // ':='
      lookahead1W(15);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -5:
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(2);               // Script | WhiteSpace^token
      consumeT(10);                 // Script
    }
  }

  function parse_Return()
  {
    eventHandler.startNonterminal("Return", e0);
    consume(70);                    // 'return'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(70);                   // 'return'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_Include()
  {
    eventHandler.startNonterminal("Include", e0);
    consume(68);                    // 'include'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Include", e0);
  }

  function try_Include()
  {
    consumeT(68);                   // 'include'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_Local()
  {
    eventHandler.startNonterminal("Local", e0);
    consume(69);                    // 'local'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Local", e0);
  }

  function try_Local()
  {
    consumeT(69);                   // 'local'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_Throw()
  {
    eventHandler.startNonterminal("Throw", e0);
    consume(73);                    // 'throw'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    if (l1 != 21)                   // ')'
    {
      whitespace();
      parse_Expression();
    }
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Throw", e0);
  }

  function try_Throw()
  {
    consumeT(73);                   // 'throw'
    lookahead1W(4);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(26);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    if (l1 != 21)                   // ')'
    {
      try_Expression();
    }
    lookahead1W(5);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(41);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 76                    // '{'
     && lk != 81)                   // '~'
    {
      whitespace();
      parse_Type();
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (l1)
      {
      case 61:                      // 'f32'
      case 62:                      // 'f64'
      case 65:                      // 'i32'
      case 66:                      // 'i64'
        lookahead2W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        switch (lk)
        {
        case 445:                   // 'f32' Identifier
        case 446:                   // 'f64' Identifier
        case 449:                   // 'i32' Identifier
        case 450:                   // 'i64' Identifier
          lookahead3W(41);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
       && lk != 68                  // 'include'
       && lk != 69                  // 'local'
       && lk != 70                  // 'return'
       && lk != 71                  // 'switch'
       && lk != 72                  // 'test'
       && lk != 73                  // 'throw'
       && lk != 74                  // 'try'
       && lk != 75                  // 'while'
       && lk != 76                  // '{'
       && lk != 81                  // '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(41);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
     && lk != 68                    // 'include'
     && lk != 69                    // 'local'
     && lk != 70                    // 'return'
     && lk != 71                    // 'switch'
     && lk != 72                    // 'test'
     && lk != 73                    // 'throw'
     && lk != 74                    // 'try'
     && lk != 75                    // 'while'
     && lk != 76                    // '{'
     && lk != 81)                   // '~'
    {
      try_Type();
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (l1)
      {
      case 61:                      // 'f32'
      case 62:                      // 'f64'
      case 65:                      // 'i32'
      case 66:                      // 'i64'
        lookahead2W(24);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        switch (lk)
        {
        case 445:                   // 'f32' Identifier
        case 446:                   // 'f64' Identifier
        case 449:                   // 'i32' Identifier
        case 450:                   // 'i64' Identifier
          lookahead3W(41);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
       && lk != 68                  // 'include'
       && lk != 69                  // 'local'
       && lk != 70                  // 'return'
       && lk != 71                  // 'switch'
       && lk != 72                  // 'test'
       && lk != 73                  // 'throw'
       && lk != 74                  // 'try'
       && lk != 75                  // 'while'
       && lk != 76                  // '{'
       && lk != 81                  // '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     || lk == 1116675               // Identifier '(' 'include'
     || lk == 1133059               // Identifier '(' 'local'
     || lk == 1149443               // Identifier '(' 'return'
     || lk == 1165827               // Identifier '(' 'switch'
     || lk == 1182211               // Identifier '(' 'test'
     || lk == 1198595               // Identifier '(' 'throw'
     || lk == 1214979               // Identifier '(' 'try'
     || lk == 1231363               // Identifier '(' 'while'
     || lk == 1247747               // Identifier '(' '{'
     || lk == 1329667)              // Identifier '(' '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(43);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
            lookahead3W(31);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(27);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(48);        // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 9778:                // '[' '{'
            lookahead3W(28);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
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
          case 10418:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8626:                // '[' 'if'
          case 8754:                // '[' 'include'
          case 9138:                // '[' 'switch'
          case 9266:                // '[' 'test'
          case 9394:                // '[' 'throw'
          case 9650:                // '[' 'while'
            lookahead3W(4);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8370:                // '[' 'i32'
          case 8498:                // '[' 'i64'
          case 8882:                // '[' 'local'
          case 9010:                // '[' 'return'
          case 9522:                // '[' 'try'
            lookahead3W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
         && lk != 68                // 'include'
         && lk != 69                // 'local'
         && lk != 70                // 'return'
         && lk != 71                // 'switch'
         && lk != 72                // 'test'
         && lk != 73                // 'throw'
         && lk != 74                // 'try'
         && lk != 75                // 'while'
         && lk != 76                // '{'
         && lk != 77                // '|'
         && lk != 78                // '|='
         && lk != 79                // '||'
         && lk != 80                // '}'
         && lk != 81                // '~'
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
         && lk != 1118898           // '[' ';' 'include'
         && lk != 1121970           // '[' 'f32' 'include'
         && lk != 1122098           // '[' 'f64' 'include'
         && lk != 1122482           // '[' 'i32' 'include'
         && lk != 1122610           // '[' 'i64' 'include'
         && lk != 1135282           // '[' ';' 'local'
         && lk != 1138354           // '[' 'f32' 'local'
         && lk != 1138482           // '[' 'f64' 'local'
         && lk != 1138866           // '[' 'i32' 'local'
         && lk != 1138994           // '[' 'i64' 'local'
         && lk != 1151666           // '[' ';' 'return'
         && lk != 1154738           // '[' 'f32' 'return'
         && lk != 1154866           // '[' 'f64' 'return'
         && lk != 1155250           // '[' 'i32' 'return'
         && lk != 1155378           // '[' 'i64' 'return'
         && lk != 1168050           // '[' ';' 'switch'
         && lk != 1171122           // '[' 'f32' 'switch'
         && lk != 1171250           // '[' 'f64' 'switch'
         && lk != 1171634           // '[' 'i32' 'switch'
         && lk != 1171762           // '[' 'i64' 'switch'
         && lk != 1184434           // '[' ';' 'test'
         && lk != 1187506           // '[' 'f32' 'test'
         && lk != 1187634           // '[' 'f64' 'test'
         && lk != 1188018           // '[' 'i32' 'test'
         && lk != 1188146           // '[' 'i64' 'test'
         && lk != 1200818           // '[' ';' 'throw'
         && lk != 1203890           // '[' 'f32' 'throw'
         && lk != 1204018           // '[' 'f64' 'throw'
         && lk != 1204402           // '[' 'i32' 'throw'
         && lk != 1204530           // '[' 'i64' 'throw'
         && lk != 1217202           // '[' ';' 'try'
         && lk != 1220274           // '[' 'f32' 'try'
         && lk != 1220402           // '[' 'f64' 'try'
         && lk != 1220786           // '[' 'i32' 'try'
         && lk != 1220914           // '[' 'i64' 'try'
         && lk != 1233586           // '[' ';' 'while'
         && lk != 1236658           // '[' 'f32' 'while'
         && lk != 1236786           // '[' 'f64' 'while'
         && lk != 1237170           // '[' 'i32' 'while'
         && lk != 1237298           // '[' 'i64' 'while'
         && lk != 1249970           // '[' ';' '{'
         && lk != 1253042           // '[' 'f32' '{'
         && lk != 1253170           // '[' 'f64' '{'
         && lk != 1253554           // '[' 'i32' '{'
         && lk != 1253682           // '[' 'i64' '{'
         && lk != 1331890           // '[' ';' '~'
         && lk != 1334962           // '[' 'f32' '~'
         && lk != 1335090           // '[' 'f64' '~'
         && lk != 1335474           // '[' 'i32' '~'
         && lk != 1335602)          // '[' 'i64' '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
         || lk == 68                // 'include'
         || lk == 69                // 'local'
         || lk == 70                // 'return'
         || lk == 71                // 'switch'
         || lk == 72                // 'test'
         || lk == 73                // 'throw'
         || lk == 74                // 'try'
         || lk == 75                // 'while'
         || lk == 76                // '{'
         || lk == 77                // '|'
         || lk == 78                // '|='
         || lk == 79                // '||'
         || lk == 80                // '}'
         || lk == 81                // '~'
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
         || lk == 1118898           // '[' ';' 'include'
         || lk == 1135282           // '[' ';' 'local'
         || lk == 1151666           // '[' ';' 'return'
         || lk == 1168050           // '[' ';' 'switch'
         || lk == 1184434           // '[' ';' 'test'
         || lk == 1200818           // '[' ';' 'throw'
         || lk == 1217202           // '[' ';' 'try'
         || lk == 1233586           // '[' ';' 'while'
         || lk == 1249970           // '[' ';' '{'
         || lk == 1331890)          // '[' ';' '~'
        {
          break;
        }
        consume(50);                // '['
        lookahead1W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(26);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     || lk == 1116675               // Identifier '(' 'include'
     || lk == 1133059               // Identifier '(' 'local'
     || lk == 1149443               // Identifier '(' 'return'
     || lk == 1165827               // Identifier '(' 'switch'
     || lk == 1182211               // Identifier '(' 'test'
     || lk == 1198595               // Identifier '(' 'throw'
     || lk == 1214979               // Identifier '(' 'try'
     || lk == 1231363               // Identifier '(' 'while'
     || lk == 1247747               // Identifier '(' '{'
     || lk == 1329667)              // Identifier '(' '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(27);          // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(43);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
            lookahead3W(31);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(27);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(48);        // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 9778:                // '[' '{'
            lookahead3W(28);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
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
          case 10418:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Real | Imaginary | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8626:                // '[' 'if'
          case 8754:                // '[' 'include'
          case 9138:                // '[' 'switch'
          case 9266:                // '[' 'test'
          case 9394:                // '[' 'throw'
          case 9650:                // '[' 'while'
            lookahead3W(4);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8370:                // '[' 'i32'
          case 8498:                // '[' 'i64'
          case 8882:                // '[' 'local'
          case 9010:                // '[' 'return'
          case 9522:                // '[' 'try'
            lookahead3W(24);        // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
         && lk != 68                // 'include'
         && lk != 69                // 'local'
         && lk != 70                // 'return'
         && lk != 71                // 'switch'
         && lk != 72                // 'test'
         && lk != 73                // 'throw'
         && lk != 74                // 'try'
         && lk != 75                // 'while'
         && lk != 76                // '{'
         && lk != 77                // '|'
         && lk != 78                // '|='
         && lk != 79                // '||'
         && lk != 80                // '}'
         && lk != 81                // '~'
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
         && lk != 1118898           // '[' ';' 'include'
         && lk != 1121970           // '[' 'f32' 'include'
         && lk != 1122098           // '[' 'f64' 'include'
         && lk != 1122482           // '[' 'i32' 'include'
         && lk != 1122610           // '[' 'i64' 'include'
         && lk != 1135282           // '[' ';' 'local'
         && lk != 1138354           // '[' 'f32' 'local'
         && lk != 1138482           // '[' 'f64' 'local'
         && lk != 1138866           // '[' 'i32' 'local'
         && lk != 1138994           // '[' 'i64' 'local'
         && lk != 1151666           // '[' ';' 'return'
         && lk != 1154738           // '[' 'f32' 'return'
         && lk != 1154866           // '[' 'f64' 'return'
         && lk != 1155250           // '[' 'i32' 'return'
         && lk != 1155378           // '[' 'i64' 'return'
         && lk != 1168050           // '[' ';' 'switch'
         && lk != 1171122           // '[' 'f32' 'switch'
         && lk != 1171250           // '[' 'f64' 'switch'
         && lk != 1171634           // '[' 'i32' 'switch'
         && lk != 1171762           // '[' 'i64' 'switch'
         && lk != 1184434           // '[' ';' 'test'
         && lk != 1187506           // '[' 'f32' 'test'
         && lk != 1187634           // '[' 'f64' 'test'
         && lk != 1188018           // '[' 'i32' 'test'
         && lk != 1188146           // '[' 'i64' 'test'
         && lk != 1200818           // '[' ';' 'throw'
         && lk != 1203890           // '[' 'f32' 'throw'
         && lk != 1204018           // '[' 'f64' 'throw'
         && lk != 1204402           // '[' 'i32' 'throw'
         && lk != 1204530           // '[' 'i64' 'throw'
         && lk != 1217202           // '[' ';' 'try'
         && lk != 1220274           // '[' 'f32' 'try'
         && lk != 1220402           // '[' 'f64' 'try'
         && lk != 1220786           // '[' 'i32' 'try'
         && lk != 1220914           // '[' 'i64' 'try'
         && lk != 1233586           // '[' ';' 'while'
         && lk != 1236658           // '[' 'f32' 'while'
         && lk != 1236786           // '[' 'f64' 'while'
         && lk != 1237170           // '[' 'i32' 'while'
         && lk != 1237298           // '[' 'i64' 'while'
         && lk != 1249970           // '[' ';' '{'
         && lk != 1253042           // '[' 'f32' '{'
         && lk != 1253170           // '[' 'f64' '{'
         && lk != 1253554           // '[' 'i32' '{'
         && lk != 1253682           // '[' 'i64' '{'
         && lk != 1331890           // '[' ';' '~'
         && lk != 1334962           // '[' 'f32' '~'
         && lk != 1335090           // '[' 'f64' '~'
         && lk != 1335474           // '[' 'i32' '~'
         && lk != 1335602)          // '[' 'i64' '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
         || lk == 68                // 'include'
         || lk == 69                // 'local'
         || lk == 70                // 'return'
         || lk == 71                // 'switch'
         || lk == 72                // 'test'
         || lk == 73                // 'throw'
         || lk == 74                // 'try'
         || lk == 75                // 'while'
         || lk == 76                // '{'
         || lk == 77                // '|'
         || lk == 78                // '|='
         || lk == 79                // '||'
         || lk == 80                // '}'
         || lk == 81                // '~'
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
         || lk == 1118898           // '[' ';' 'include'
         || lk == 1135282           // '[' ';' 'local'
         || lk == 1151666           // '[' ';' 'return'
         || lk == 1168050           // '[' ';' 'switch'
         || lk == 1184434           // '[' ';' 'test'
         || lk == 1200818           // '[' ';' 'throw'
         || lk == 1217202           // '[' ';' 'try'
         || lk == 1233586           // '[' ';' 'while'
         || lk == 1249970           // '[' ';' '{'
         || lk == 1331890)          // '[' ';' '~'
        {
          break;
        }
        consumeT(50);               // '['
        lookahead1W(27);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
    consume(76);                    // '{'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(80);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(76);                   // '{'
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Element();
    }
    consumeT(80);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(50);                    // '['
    lookahead1W(27);                // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(31);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(31);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 8741                  // ';' 'include'
     && lk != 8869                  // ';' 'local'
     && lk != 8997                  // ';' 'return'
     && lk != 9125                  // ';' 'switch'
     && lk != 9253                  // ';' 'test'
     && lk != 9381                  // ';' 'throw'
     && lk != 9509                  // ';' 'try'
     && lk != 9637                  // ';' 'while'
     && lk != 9765                  // ';' '{'
     && lk != 10405                 // ';' '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(31);              // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(31);            // Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 8741                  // ';' 'include'
     && lk != 8869                  // ';' 'local'
     && lk != 8997                  // ';' 'return'
     && lk != 9125                  // ';' 'switch'
     && lk != 9253                  // ';' 'test'
     && lk != 9381                  // ';' 'throw'
     && lk != 9509                  // ';' 'try'
     && lk != 9637                  // ';' 'while'
     && lk != 9765                  // ';' '{'
     && lk != 10405                 // ';' '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
      lookahead2W(42);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Element", e0);
  }

  function try_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(42);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 1031:                    // Real Imaginary
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
     || lk == 1115143               // Real Imaginary 'include'
     || lk == 1131527               // Real Imaginary 'local'
     || lk == 1147911               // Real Imaginary 'return'
     || lk == 1164295               // Real Imaginary 'switch'
     || lk == 1180679               // Real Imaginary 'test'
     || lk == 1197063               // Real Imaginary 'throw'
     || lk == 1213447               // Real Imaginary 'try'
     || lk == 1229831               // Real Imaginary 'while'
     || lk == 1246215               // Real Imaginary '{'
     || lk == 1262599               // Real Imaginary '|'
     || lk == 1278983               // Real Imaginary '|='
     || lk == 1295367               // Real Imaginary '||'
     || lk == 1311751               // Real Imaginary '}'
     || lk == 1328135)              // Real Imaginary '~'
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
    case 76:                        // '{'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 1031:                    // Real Imaginary
        lookahead3W(48);            // END | Identifier | Character | String | Integer | Real | Imaginary | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
     || lk == 1115143               // Real Imaginary 'include'
     || lk == 1131527               // Real Imaginary 'local'
     || lk == 1147911               // Real Imaginary 'return'
     || lk == 1164295               // Real Imaginary 'switch'
     || lk == 1180679               // Real Imaginary 'test'
     || lk == 1197063               // Real Imaginary 'throw'
     || lk == 1213447               // Real Imaginary 'try'
     || lk == 1229831               // Real Imaginary 'while'
     || lk == 1246215               // Real Imaginary '{'
     || lk == 1262599               // Real Imaginary '|'
     || lk == 1278983               // Real Imaginary '|='
     || lk == 1295367               // Real Imaginary '||'
     || lk == 1311751               // Real Imaginary '}'
     || lk == 1328135)              // Real Imaginary '~'
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
    case 76:                        // '{'
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
  for (var i = 0; i < 82; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 269 + s - 1;
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
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 1049, 26, 27, 28,
  /* 29 */ 29, 1054, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 1068, 45, 46, 47, 1072, 1073
];

MaiaScript.TRANSITION =
[
  /*    0 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*   18 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*   36 */ 2799, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321,
  /*   54 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2208, 2208, 2208, 2222, 2360, 2321, 2321, 2321,
  /*   72 */ 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*   90 */ 2321, 2321, 2321, 2321, 2321, 2321, 2208, 2208, 2208, 2222, 2321, 2321, 2321, 2321, 2240, 2321, 2321, 2278,
  /*  108 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  126 */ 2321, 2321, 2321, 6374, 2305, 2320, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321,
  /*  144 */ 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 4715,
  /*  162 */ 4710, 5078, 5244, 2321, 2321, 2321, 2338, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 6125, 2321, 2321, 2321,
  /*  180 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2650, 5465, 3666, 3712, 2360, 2321,
  /*  198 */ 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  216 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 2360, 3397, 3409, 5965, 2376, 5376,
  /*  234 */ 5964, 2406, 5964, 3405, 4380, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  252 */ 2321, 2321, 2321, 2321, 2321, 6147, 2434, 2449, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321,
  /*  270 */ 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  288 */ 2321, 2620, 2468, 2483, 2360, 2486, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321,
  /*  306 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 4922, 4917, 2502,
  /*  324 */ 5687, 2321, 2321, 2321, 2521, 2321, 2321, 2573, 2321, 4863, 2321, 2321, 6027, 2321, 2321, 2321, 2321, 2321,
  /*  342 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2254, 3162, 3148, 2258, 2360, 2321, 2321, 2321,
  /*  360 */ 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  378 */ 2321, 2321, 2321, 2321, 2321, 2321, 6138, 3221, 3233, 6143, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278,
  /*  396 */ 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  414 */ 2321, 2321, 2321, 2740, 2601, 2616, 2360, 2289, 2224, 2321, 2636, 2321, 2321, 2670, 2321, 2321, 3470, 4858,
  /*  432 */ 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2698, 6515,
  /*  450 */ 2721, 2736, 3697, 2322, 5679, 2321, 2240, 2321, 2321, 2278, 2321, 5053, 2321, 2321, 5066, 2321, 2321, 2321,
  /*  468 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2901, 2756, 2771, 2360, 2321,
  /*  486 */ 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  504 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2791, 4266, 2815, 2830, 2967, 2321, 2887, 2321, 2240, 2321,
  /*  522 */ 2321, 2278, 2321, 5053, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  540 */ 2321, 2321, 2321, 2321, 2321, 2917, 6399, 2937, 3791, 2321, 2321, 2321, 2953, 2321, 2321, 2278, 2321, 2321,
  /*  558 */ 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  576 */ 4494, 4887, 2983, 2998, 2360, 3712, 3714, 2321, 2240, 2321, 2321, 3018, 2321, 2321, 2321, 2321, 5066, 2321,
  /*  594 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3046, 5358, 3298, 3313,
  /*  612 */ 4680, 3397, 5865, 5024, 3066, 5376, 5964, 3096, 5964, 4464, 5985, 3133, 3849, 2321, 2321, 2321, 2321, 2321,
  /*  630 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3046, 6096, 3328, 3343, 4680, 3397, 5865, 5024,
  /*  648 */ 3066, 5376, 5964, 3178, 5964, 4977, 5985, 3206, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  666 */ 2321, 2321, 2321, 2321, 2321, 2321, 3046, 6096, 3328, 3343, 4680, 3397, 5865, 2418, 3066, 3249, 5964, 3178,
  /*  684 */ 5964, 4977, 5985, 3206, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  702 */ 2321, 2321, 3046, 6096, 3328, 3283, 4680, 3359, 5865, 5024, 3066, 5376, 5964, 3178, 5964, 4977, 5985, 3206,
  /*  720 */ 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3046, 6096,
  /*  738 */ 3328, 3343, 4680, 3397, 5865, 4293, 3066, 3383, 5964, 3178, 5964, 4977, 5985, 3206, 3190, 2321, 2321, 2321,
  /*  756 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3046, 6096, 3328, 3343, 4680, 3397,
  /*  774 */ 5865, 5024, 3066, 5376, 5964, 3178, 5964, 4977, 5821, 3425, 3528, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  792 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3046, 6096, 3328, 3441, 4680, 3457, 5865, 5024, 3066, 5376,
  /*  810 */ 5964, 3178, 5964, 4977, 5985, 3206, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  828 */ 2321, 2321, 2321, 2321, 3046, 6096, 3328, 3343, 4680, 3397, 5865, 5024, 3486, 5376, 5964, 3516, 5964, 4977,
  /*  846 */ 5985, 3206, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  864 */ 5711, 2654, 3544, 3559, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321,
  /*  882 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 4578, 3880, 3931, 3895,
  /*  900 */ 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321,
  /*  918 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2775, 3579, 3594, 2360, 2321, 4572, 2321,
  /*  936 */ 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  954 */ 2321, 2321, 2321, 2321, 2321, 2321, 3599, 2921, 3615, 3630, 3653, 3900, 3682, 2321, 2240, 2505, 2321, 2278,
  /*  972 */ 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /*  990 */ 2321, 2321, 2321, 4498, 3730, 3745, 2360, 2321, 2352, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321,
  /* 1008 */ 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2262, 3002,
  /* 1026 */ 3768, 3783, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321,
  /* 1044 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2360, 2321,
  /* 1062 */ 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1080 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 2360, 3397, 3409, 5965, 3807, 5376,
  /* 1098 */ 5964, 3837, 5964, 4829, 4422, 3865, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1116 */ 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 2360, 3397, 3409, 5965, 3807, 5376, 5964, 3837, 5964, 4829,
  /* 1134 */ 4422, 3916, 4081, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1152 */ 3467, 3267, 3262, 4378, 2360, 3397, 3409, 5965, 3807, 5376, 5964, 3947, 5964, 4829, 4422, 3865, 3190, 2321,
  /* 1170 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378,
  /* 1188 */ 2557, 3397, 3409, 5965, 3975, 5376, 5964, 3837, 5964, 4829, 4422, 3865, 3190, 2321, 2321, 2321, 2321, 2321,
  /* 1206 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 4239, 3397, 3409, 5965,
  /* 1224 */ 4030, 5376, 5964, 2406, 5964, 3405, 4380, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1242 */ 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 2360, 3397, 3409, 5965, 2376, 5376, 5964, 4069,
  /* 1260 */ 5964, 3405, 4380, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1278 */ 2321, 2321, 3467, 3267, 3262, 4378, 4404, 3397, 3409, 5965, 4097, 5376, 5964, 4144, 5964, 3405, 4380, 5642,
  /* 1296 */ 3959, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 6469,
  /* 1314 */ 4633, 4648, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321,
  /* 1332 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 5103, 2321,
  /* 1350 */ 2321, 2321, 4172, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 6014, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1368 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2535, 6040, 2549, 2360, 2321, 2321, 2321, 2240, 2321,
  /* 1386 */ 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1404 */ 2321, 2321, 2321, 2321, 2321, 3050, 4216, 4231, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321,
  /* 1422 */ 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1440 */ 3467, 3267, 3262, 4818, 4742, 4255, 3752, 5965, 3807, 5376, 4282, 4309, 4350, 4525, 4422, 3865, 3190, 2321,
  /* 1458 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 4396, 4949, 5133, 4420,
  /* 1476 */ 2360, 3397, 3409, 5965, 4438, 5376, 5964, 3837, 5964, 4829, 4422, 3865, 4156, 2321, 2321, 2321, 2321, 2321,
  /* 1494 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 4480, 4014, 6429, 4514, 2360, 3397, 3409, 4452,
  /* 1512 */ 3807, 5552, 5815, 3837, 4044, 4829, 4541, 4557, 4081, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1530 */ 2321, 2321, 2321, 2321, 2321, 2321, 4594, 5618, 2845, 2860, 2360, 3397, 3409, 5965, 3807, 5376, 5964, 3837,
  /* 1548 */ 5964, 4829, 2390, 4618, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1566 */ 2321, 2321, 4672, 5419, 5785, 4696, 2360, 4731, 2705, 5965, 4758, 5376, 3108, 4803, 5304, 2871, 6302, 3865,
  /* 1584 */ 4845, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 4879, 5522,
  /* 1602 */ 5274, 4903, 2557, 4938, 3409, 4965, 4993, 5376, 5023, 3837, 5964, 4829, 4422, 3865, 4156, 2321, 2321, 2321,
  /* 1620 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 5771, 6202, 4003,
  /* 1638 */ 3409, 5965, 2376, 5376, 5964, 2406, 5440, 3405, 5163, 6260, 5040, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1656 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 5095, 5577, 4787, 5119, 2360, 3397, 3409, 3080, 5149, 3989,
  /* 1674 */ 5964, 2406, 3117, 5191, 4380, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1692 */ 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 2360, 3397, 3409, 5965, 2376, 5376, 5964, 2406, 5441, 3367,
  /* 1710 */ 4380, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1728 */ 5236, 2585, 5220, 5260, 4602, 3397, 5928, 5965, 5290, 5376, 3821, 5330, 5958, 5924, 5346, 6084, 3190, 2321,
  /* 1746 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4773,
  /* 1764 */ 2360, 5607, 3409, 5374, 5392, 5376, 5964, 2406, 5964, 3405, 4111, 6457, 4156, 2321, 2321, 2321, 2321, 2321,
  /* 1782 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 5206, 2360, 5408, 3637, 5965,
  /* 1800 */ 2376, 5376, 4053, 2406, 5435, 3405, 4380, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1818 */ 2321, 2321, 2321, 2321, 2321, 2321, 5457, 2682, 5495, 5481, 2360, 5511, 3409, 5314, 5538, 5593, 5964, 2406,
  /* 1836 */ 5964, 5634, 5658, 5642, 4156, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1854 */ 2321, 2321, 5703, 3030, 5741, 5727, 2360, 3397, 3409, 5757, 5801, 3500, 5837, 2406, 5964, 3405, 4380, 5642,
  /* 1872 */ 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 5856, 5175,
  /* 1890 */ 5895, 5881, 2360, 3397, 3409, 4364, 5538, 5007, 5911, 5944, 5981, 3405, 4380, 5642, 6001, 2321, 2321, 2321,
  /* 1908 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 4404, 3397,
  /* 1926 */ 3409, 5965, 4097, 5376, 4322, 4144, 6056, 3405, 6072, 4128, 6112, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1944 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 6163, 6272, 6232, 6218, 2360, 5566, 3409, 5965, 2376, 5376,
  /* 1962 */ 5964, 2406, 5964, 4120, 6248, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 1980 */ 2321, 2321, 2321, 2321, 3467, 3267, 3262, 4378, 4656, 3397, 3409, 5965, 6288, 5376, 5964, 2406, 5964, 3405,
  /* 1998 */ 4380, 5642, 3190, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 2016 */ 3467, 3267, 3262, 4378, 2360, 3397, 3409, 5840, 2376, 4334, 5964, 2406, 5964, 3405, 4380, 5642, 3190, 2321,
  /* 2034 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 5079, 6318, 6178, 6193,
  /* 2052 */ 6334, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321,
  /* 2070 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 3563, 6350, 6365, 2360, 2321, 5670, 2321,
  /* 2088 */ 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 2106 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 4186, 4200, 6390, 2360, 2321, 2321, 2321, 6415, 2321, 2321, 6445,
  /* 2124 */ 2321, 2321, 2321, 2321, 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 2142 */ 2321, 2321, 2321, 6489, 6485, 6505, 2360, 2321, 2321, 2321, 2240, 2321, 2321, 2278, 2321, 2321, 2321, 2321,
  /* 2160 */ 5066, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2452,
  /* 2178 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321,
  /* 2196 */ 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 2321, 6194, 6194, 6194, 6194, 6194, 6194,
  /* 2214 */ 6194, 6194, 6194, 6194, 6194, 6194, 6194, 6194, 6194, 6194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142,
  /* 2239 */ 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 10752, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2272 */ 0, 0, 70, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12288, 0,
  /* 2305 */ 92, 92, 6656, 92, 92, 92, 92, 92, 92, 92, 92, 6656, 6748, 6748, 6748, 6748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2331 */ 0, 0, 0, 0, 0, 0, 13824, 0, 130, 0, 0, 73, 0, 134, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 24223, 0, 0, 0, 0, 0,
  /* 2362 */ 0, 0, 0, 0, 0, 0, 73, 134, 0, 0, 0, 0, 0, 5200, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 2099, 2099,
  /* 2392 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2213, 2099, 0, 0, 182, 182, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2416 */ 0, 142, 2099, 2099, 2099, 2099, 51, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 64, 8285,
  /* 2435 */ 8285, 0, 8285, 8285, 8285, 8285, 8285, 8285, 8285, 8285, 0, 8285, 8285, 8285, 8285, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2458 */ 0, 0, 0, 0, 0, 0, 0, 1536, 0, 0, 9310, 9310, 0, 9310, 9310, 9310, 9310, 9310, 9310, 9310, 9310, 0, 9310,
  /* 2481 */ 9310, 9310, 9310, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9728, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2512 */ 0, 0, 0, 0, 0, 0, 20992, 24576, 0, 0, 130, 0, 0, 73, 2560, 134, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 26624,
  /* 2540 */ 26624, 0, 0, 0, 0, 26624, 0, 0, 0, 26624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 134, 0, 3584,
  /* 2569 */ 3584, 0, 0, 5200, 0, 130, 0, 0, 0, 0, 2560, 0, 2560, 0, 0, 142, 0, 0, 0, 0, 0, 0, 2106, 2106, 2135, 2135,
  /* 2595 */ 2135, 2135, 0, 2135, 2135, 2135, 11871, 11871, 0, 11871, 11871, 11871, 11871, 11871, 11871, 11871, 11871,
  /* 2612 */ 0, 11871, 11871, 11871, 11871, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9310, 0, 0, 0, 0, 130, 0, 0, 0,
  /* 2641 */ 0, 0, 0, 0, 0, 0, 0, 0, 188, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 212, 130, 0, 0,
  /* 2674 */ 0, 0, 0, 0, 0, 0, 212, 188, 0, 0, 0, 0, 0, 0, 2107, 2107, 2136, 2136, 2136, 2136, 0, 2136, 2136, 2136, 0,
  /* 2699 */ 63, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2099, 2209, 2099, 2099, 0, 0, 2212, 13416, 13408, 13390,
  /* 2724 */ 13416, 13408, 13408, 13416, 13408, 13408, 13408, 13408, 13390, 13416, 13416, 13416, 13416, 0, 0, 0, 0, 0,
  /* 2742 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11871, 0, 0, 0, 0, 14848, 0, 14848, 14848, 14848, 14848, 0, 14848, 14848,
  /* 2766 */ 14848, 14848, 14848, 14848, 14848, 14848, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20067, 0, 0, 0, 0,
  /* 2792 */ 63, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 73, 134, 0, 0, 0, 0, 0, 0, 15465, 15457, 15439, 15465,
  /* 2819 */ 15457, 15457, 15465, 15457, 15457, 15457, 15457, 15439, 15470, 15470, 15470, 15470, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2839 */ 0, 0, 0, 0, 0, 128, 0, 0, 2155, 0, 0, 0, 0, 0, 0, 0, 0, 2155, 2132, 2132, 2132, 2155, 0, 2099, 2099, 2099,
  /* 2865 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 38912, 240, 240, 242, 242, 0, 220, 0, 2099,
  /* 2885 */ 2099, 2099, 15872, 0, 0, 0, 0, 0, 0, 128, 16000, 0, 0, 0, 0, 16000, 0, 0, 0, 14848, 14848, 14848, 0, 0, 0,
  /* 2910 */ 0, 0, 0, 0, 0, 14848, 14848, 16896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22116, 0, 0, 0, 16896, 0,
  /* 2939 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 0, 130, 0, 0, 0, 0, 0, 137, 0, 0, 0, 0, 0, 142, 0, 0, 0, 15872,
  /* 2971 */ 0, 0, 0, 0, 73, 134, 128, 0, 0, 128, 16000, 5200, 17506, 17506, 81, 17506, 17506, 17506, 17506, 17506,
  /* 2991 */ 17506, 17506, 17506, 81, 17519, 17519, 17519, 17519, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25158, 0,
  /* 3016 */ 0, 0, 0, 5632, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5120, 0, 0, 0, 0, 0, 0, 2108, 2108, 2137, 2137, 2137, 2137, 0,
  /* 3043 */ 2137, 2137, 2137, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27238, 0, 0, 0, 177, 130, 0, 0, 73, 0,
  /* 3072 */ 183, 136, 4283, 0, 0, 0, 3725, 142, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2221, 2099,
  /* 3092 */ 2099, 2099, 2224, 0, 177, 130, 0, 0, 215, 73, 183, 217, 0, 220, 4283, 142, 2099, 2099, 2099, 2099, 51,
  /* 3113 */ 2099, 2099, 2099, 2255, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2281, 2099,
  /* 3131 */ 2099, 2099, 254, 254, 256, 4341, 4341, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 73, 134, 134, 0, 0, 10752,
  /* 3151 */ 0, 0, 0, 0, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 0, 0, 0, 0, 10752, 10752, 10752,
  /* 3171 */ 10752, 10752, 10752, 0, 10752, 10752, 10752, 177, 130, 0, 0, 216, 73, 183, 218, 0, 220, 4283, 142, 2099,
  /* 3191 */ 2099, 2099, 2099, 73, 0, 0, 2099, 73, 73, 73, 73, 73, 0, 0, 0, 254, 254, 0, 4341, 4341, 2099, 2099, 2099,
  /* 3214 */ 2099, 2099, 2099, 2099, 73, 134, 134, 0, 0, 11264, 0, 11264, 0, 0, 0, 0, 11264, 0, 0, 11264, 0, 0, 0, 0, 0,
  /* 3239 */ 0, 11264, 11264, 0, 0, 11264, 0, 0, 0, 11264, 31795, 2099, 2099, 33843, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 3259 */ 2099, 2099, 2099, 0, 0, 2099, 0, 0, 0, 0, 0, 0, 0, 0, 2099, 2099, 2099, 2099, 2099, 2099, 0, 2099, 2099,
  /* 3282 */ 2099, 3661, 0, 2099, 2099, 2099, 2099, 2099, 2165, 2165, 2099, 2099, 2099, 2099, 2099, 64, 64, 0, 3660, 64,
  /* 3302 */ 0, 0, 64, 0, 0, 0, 0, 3660, 3660, 3660, 3660, 3660, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 3323 */ 2099, 2099, 2099, 2099, 64, 64, 0, 3661, 64, 0, 0, 64, 0, 0, 0, 0, 3661, 3661, 3661, 3661, 3661, 0, 2099,
  /* 3346 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 64, 64, 0, 2099, 2099, 2099, 2193, 2196,
  /* 3365 */ 2099, 2099, 2099, 2099, 2099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28211, 2099, 2099, 2099, 32307, 2099, 2099,
  /* 3387 */ 34355, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 3405 */ 2099, 2099, 2099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2099, 2099, 2099, 2099, 0, 0, 2099, 255, 254, 0, 4341,
  /* 3429 */ 4341, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 73, 134, 134, 263, 3661, 0, 2099, 2099, 2099, 2099, 2099,
  /* 3448 */ 2166, 2166, 2099, 2099, 2099, 2099, 2099, 64, 64, 0, 2099, 2099, 2099, 2194, 2197, 2099, 2099, 2099, 2099,
  /* 3467 */ 2099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 177, 130, 0, 0, 0, 0, 0, 136, 4283, 0, 0, 0,
  /* 3498 */ 3725, 142, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2244, 2099, 2099, 2099, 0, 0, 2247, 177,
  /* 3517 */ 130, 0, 0, 216, 73, 0, 218, 0, 220, 4283, 142, 2099, 2099, 2099, 2099, 73, 0, 0, 2099, 73, 73, 73, 269, 73,
  /* 3541 */ 0, 0, 0, 69, 69, 0, 69, 18501, 69, 69, 69, 69, 18501, 69, 18432, 69, 18501, 18501, 18501, 0, 0, 0, 0, 0, 0,
  /* 3566 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 40039, 0, 0, 0, 20067, 20067, 0, 20067, 20067, 20067, 20067, 20067, 20067,
  /* 3588 */ 20067, 20067, 0, 20067, 20067, 20067, 20067, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22016, 0, 0, 0,
  /* 3614 */ 0, 22116, 22116, 0, 22116, 22116, 22116, 22116, 22116, 22116, 22116, 22116, 0, 22116, 22116, 22116, 22116,
  /* 3631 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2192, 30771, 2192, 2099, 0, 0, 2099, 0, 7680, 0, 0, 18944,
  /* 3658 */ 25600, 0, 0, 73, 134, 0, 0, 0, 0, 0, 5200, 0, 0, 0, 0, 0, 0, 0, 0, 5200, 5200, 5200, 5200, 5200, 16384,
  /* 3683 */ 17920, 21504, 22528, 23552, 27648, 40448, 14336, 16384, 0, 0, 0, 0, 16384, 17920, 0, 0, 13824, 0, 0, 0, 0,
  /* 3704 */ 0, 73, 134, 0, 0, 0, 13824, 0, 5200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5200, 0, 23141, 23141, 0,
  /* 3733 */ 23141, 23141, 23141, 23141, 23141, 23141, 23141, 23141, 0, 23141, 23141, 23141, 23141, 0, 0, 0, 0, 0, 0, 0,
  /* 3753 */ 0, 0, 0, 0, 0, 0, 0, 0, 2208, 2099, 2210, 2099, 0, 0, 2099, 25158, 25158, 0, 25158, 25158, 25158, 25158,
  /* 3775 */ 25158, 25158, 25158, 25158, 0, 25158, 25158, 25158, 25158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73,
  /* 3800 */ 134, 0, 137, 137, 0, 0, 5200, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3725, 142, 2099, 2099, 2099, 2099,
  /* 3825 */ 2099, 2099, 2099, 2099, 2099, 2256, 2099, 2099, 2099, 2099, 2099, 2213, 0, 130, 0, 0, 216, 73, 0, 218, 0,
  /* 3846 */ 220, 0, 142, 2099, 2099, 2099, 2099, 73, 0, 0, 2099, 73, 267, 268, 73, 73, 0, 0, 0, 254, 254, 0, 0, 0,
  /* 3870 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 73, 134, 134, 0, 0, 19456, 0, 0, 19456, 0, 0, 19456, 19456,
  /* 3890 */ 19456, 19456, 0, 19456, 19456, 19456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7168, 8704, 10240,
  /* 3914 */ 12800, 14336, 254, 254, 0, 0, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 261, 134, 262, 0, 0, 19456, 0,
  /* 3935 */ 0, 19456, 19456, 0, 0, 0, 19456, 19456, 19456, 19456, 19456, 19456, 213, 130, 0, 0, 216, 73, 0, 218, 0,
  /* 3956 */ 220, 221, 142, 2099, 2099, 2099, 2099, 73, 0, 0, 2099, 266, 73, 73, 73, 73, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0,
  /* 3982 */ 0, 0, 0, 3584, 0, 3725, 142, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2243, 2099, 2099, 2099, 2246,
  /* 4002 */ 0, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2203, 2205, 0, 0, 0, 0, 0, 0, 2101, 2101, 2131, 2131,
  /* 4024 */ 2131, 2131, 0, 2131, 2131, 2131, 0, 130, 0, 0, 0, 0, 0, 0, 0, 3584, 3722, 0, 0, 142, 2099, 2099, 2099,
  /* 4047 */ 2099, 2099, 2099, 2099, 2099, 2280, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 4065 */ 2099, 2099, 2259, 2099, 213, 130, 0, 0, 0, 0, 0, 0, 0, 0, 221, 142, 2099, 2099, 2099, 2099, 73, 0, 134,
  /* 4088 */ 2099, 73, 73, 73, 73, 261, 0, 0, 0, 0, 130, 0, 0, 181, 0, 184, 0, 0, 0, 0, 0, 0, 142, 2099, 2099, 2099,
  /* 4114 */ 2099, 2099, 2099, 2099, 2099, 2300, 2099, 2099, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2099, 2099, 2099, 2099,
  /* 4137 */ 2099, 2099, 2213, 0, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 219, 0, 0, 142, 2099, 2099, 2099, 2099, 73, 134, 0,
  /* 4163 */ 2099, 73, 73, 73, 73, 73, 0, 0, 0, 0, 130, 0, 0, 73, 0, 185, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 41472, 0, 0,
  /* 4192 */ 0, 0, 0, 0, 0, 41472, 0, 0, 0, 41472, 41472, 41472, 41472, 0, 0, 0, 0, 41472, 0, 41472, 41472, 41472,
  /* 4214 */ 41472, 41472, 27238, 27238, 0, 27238, 27238, 27238, 27238, 27238, 27238, 27238, 27238, 0, 27238, 27238,
  /* 4230 */ 27238, 27238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 134, 0, 3722, 3722, 0, 0, 5200, 0, 2099,
  /* 4257 */ 2161, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 0, 0, 0, 0, 75, 15439, 15439, 15439, 15439,
  /* 4277 */ 15439, 15457, 15439, 15439, 15439, 2099, 2099, 2099, 2251, 2099, 2099, 2099, 2254, 2099, 2099, 2257, 2099,
  /* 4294 */ 2099, 2099, 2099, 2099, 51, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 64, 0, 130, 0, 0, 216,
  /* 4314 */ 73, 0, 218, 0, 220, 0, 142, 2270, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2258,
  /* 4334 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 38451, 2099, 0, 0, 2099, 2274, 2099,
  /* 4352 */ 2099, 2099, 2099, 2099, 2099, 2279, 2099, 2099, 2099, 2099, 2099, 2099, 2214, 2099, 2099, 2099, 2099, 2099,
  /* 4370 */ 2099, 2099, 2099, 2220, 2099, 2099, 2099, 2099, 2099, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 4388 */ 2099, 2099, 2099, 2099, 0, 0, 0, 0, 2100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 134, 0, 3723,
  /* 4416 */ 3723, 0, 0, 5200, 2130, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0,
  /* 4436 */ 182, 182, 0, 130, 0, 0, 73, 0, 134, 0, 0, 0, 0, 0, 3725, 142, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 4459 */ 2218, 2219, 2099, 2099, 2099, 2099, 2099, 2099, 0, 238, 0, 239, 240, 241, 242, 243, 220, 4341, 2099, 2099,
  /* 4479 */ 2099, 2101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 0, 0, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23141,
  /* 4511 */ 0, 0, 0, 2156, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 0, 240,
  /* 4532 */ 240, 242, 242, 0, 220, 0, 2099, 2099, 2295, 2099, 2099, 2099, 2298, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 4551 */ 2099, 2099, 0, 0, 182, 182, 254, 254, 0, 0, 0, 2099, 2306, 2099, 2099, 2099, 2099, 2099, 261, 134, 262, 0,
  /* 4573 */ 0, 20638, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19456, 0, 0, 0, 0, 0, 2102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4605 */ 0, 0, 0, 0, 0, 73, 134, 0, 3724, 3724, 0, 0, 5200, 254, 254, 0, 0, 0, 2099, 2099, 2307, 2099, 2099, 2099,
  /* 4629 */ 2099, 73, 134, 134, 0, 0, 26112, 0, 0, 0, 0, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112,
  /* 4649 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 134, 0, 141, 0, 0, 0, 5200, 2103, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4681 */ 0, 0, 0, 0, 0, 0, 0, 73, 134, 136, 3661, 3661, 64, 136, 5200, 2157, 0, 2099, 2099, 2099, 2163, 2099, 2099,
  /* 4704 */ 2099, 2099, 2170, 2099, 2172, 2099, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 0, 73, 73, 73, 73, 73, 73, 0, 73, 73,
  /* 4730 */ 73, 0, 2099, 2099, 2163, 2099, 2099, 2099, 2200, 2099, 2202, 2099, 0, 0, 0, 0, 0, 0, 131, 0, 73, 134, 0, 0,
  /* 4754 */ 0, 0, 0, 5200, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3725, 142, 2237, 2099, 0, 2099, 2099, 2099, 2099,
  /* 4779 */ 2099, 2099, 2168, 2099, 2099, 2099, 2099, 2099, 0, 0, 2134, 0, 0, 0, 0, 0, 0, 0, 0, 2134, 2134, 2134, 2134,
  /* 4802 */ 2134, 213, 130, 28672, 0, 216, 73, 0, 218, 0, 220, 221, 142, 2099, 2099, 2272, 2099, 0, 2099, 2099, 2161,
  /* 4823 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 0, 240, 240, 242, 242, 0, 220, 0, 2099, 2099,
  /* 4844 */ 2099, 2099, 2099, 35379, 2099, 73, 0, 0, 29747, 73, 73, 73, 73, 73, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0,
  /* 4870 */ 0, 0, 0, 0, 2560, 0, 0, 0, 0, 2104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 17506, 81,
  /* 4901 */ 81, 81, 2133, 0, 2099, 2099, 2099, 2099, 2099, 2099, 51, 2099, 2099, 2099, 2099, 2099, 0, 0, 74, 0, 0, 0,
  /* 4923 */ 0, 0, 0, 0, 0, 74, 74, 74, 74, 74, 74, 0, 74, 74, 74, 0, 2099, 2099, 2099, 2099, 34867, 2099, 2099, 2099,
  /* 4947 */ 2099, 2099, 0, 0, 0, 0, 0, 0, 2100, 2100, 2130, 2130, 2130, 2130, 0, 2130, 2130, 2130, 2099, 2099, 2216,
  /* 4968 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 238, 0, 240, 240, 242, 242, 0,
  /* 4988 */ 220, 4341, 2099, 2099, 2099, 0, 130, 0, 0, 73, 0, 134, 0, 0, 0, 3584, 0, 3725, 142, 2099, 2099, 2099, 2099,
  /* 5011 */ 2099, 2099, 2099, 2242, 2099, 2099, 2099, 2099, 2099, 0, 0, 2214, 2248, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5030 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 64, 2099, 33331, 2099, 2099, 73, 0, 0, 2099, 73, 73,
  /* 5050 */ 73, 73, 73, 0, 0, 0, 0, 237, 0, 0, 0, 0, 0, 0, 0, 244, 0, 0, 0, 0, 73, 0, 0, 0, 73, 73, 73, 73, 73, 0, 0,
  /* 5081 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39424, 2105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 135,
  /* 5113 */ 0, 0, 0, 0, 0, 5200, 2134, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0,
  /* 5135 */ 2130, 0, 0, 0, 0, 0, 0, 0, 0, 2130, 2130, 2130, 2130, 2130, 0, 130, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142,
  /* 5163 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 29235, 2099, 2099, 2099, 2099, 0, 0, 0, 0, 0, 0, 2109, 2109,
  /* 5183 */ 2138, 2138, 2138, 2138, 0, 2138, 2138, 2138, 2099, 2099, 2099, 4608, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2099, 2294,
  /* 5206 */ 2099, 0, 2099, 2099, 2162, 51, 2099, 2167, 2099, 2169, 2099, 2099, 2099, 2099, 0, 0, 2135, 0, 0, 0, 0, 0,
  /* 5228 */ 0, 0, 0, 2135, 2135, 2135, 2135, 2135, 2106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3072, 134, 0, 0,
  /* 5256 */ 0, 0, 0, 5200, 2135, 0, 2099, 2099, 2099, 2099, 2164, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 2133,
  /* 5277 */ 0, 0, 0, 0, 0, 0, 0, 0, 2133, 2133, 2133, 2133, 2133, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 3724, 3584, 0, 142,
  /* 5304 */ 2099, 2099, 2099, 2099, 2099, 2099, 28723, 2099, 2099, 31283, 2099, 2099, 2099, 2099, 2099, 2099, 169,
  /* 5321 */ 2099, 2099, 2099, 2099, 2099, 2223, 2099, 2099, 0, 0, 130, 0, 214, 0, 0, 0, 0, 0, 0, 0, 142, 2099, 2099,
  /* 5344 */ 2099, 2273, 2099, 35891, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2222, 2099, 2099, 0, 0, 0, 0, 0, 0,
  /* 5364 */ 3660, 3660, 3660, 3660, 3660, 3660, 0, 3660, 3660, 3660, 2099, 2215, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5382 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 2099, 0, 130, 0, 0, 73, 0, 134, 0, 0, 0, 0, 0, 0, 142,
  /* 5406 */ 2099, 2238, 0, 2099, 2192, 30771, 2195, 2099, 2199, 2099, 2099, 2099, 2099, 0, 0, 0, 0, 0, 0, 2103, 2103,
  /* 5427 */ 2103, 2103, 2103, 2103, 0, 2103, 2103, 2103, 2099, 2099, 2099, 2099, 2277, 2099, 2099, 2099, 2099, 2099,
  /* 5445 */ 2099, 2099, 2099, 2099, 2099, 2099, 51, 2099, 2099, 2099, 2099, 2099, 2107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5468 */ 0, 0, 0, 0, 0, 5200, 5200, 5200, 5200, 0, 5200, 5200, 5200, 2136, 0, 2099, 2160, 2099, 2099, 2099, 2099,
  /* 5489 */ 2099, 2099, 2099, 2099, 2174, 2099, 0, 0, 2136, 0, 0, 0, 0, 0, 0, 0, 0, 2136, 2136, 2136, 2136, 2136, 0,
  /* 5512 */ 2191, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2204, 2099, 0, 0, 0, 0, 0, 0, 2104, 2104, 2133, 2133, 2133,
  /* 5533 */ 2133, 0, 2133, 2133, 2133, 0, 130, 0, 0, 73, 0, 134, 0, 0, 0, 0, 0, 0, 142, 2099, 2099, 2099, 2099, 2099,
  /* 5557 */ 2240, 2241, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2201, 2099,
  /* 5576 */ 2099, 0, 0, 0, 0, 0, 0, 2105, 2105, 2134, 2134, 2134, 2134, 0, 2134, 2134, 2134, 2099, 2099, 32959, 2099,
  /* 5597 */ 2099, 2099, 2099, 2099, 2099, 2099, 2245, 2099, 2099, 0, 0, 2099, 2099, 2099, 2099, 2198, 2099, 2099, 2099,
  /* 5616 */ 2099, 2099, 0, 0, 0, 0, 0, 0, 2102, 2102, 2132, 2132, 2132, 2132, 0, 2132, 2132, 2132, 2099, 2284, 2099, 0,
  /* 5638 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 0, 0, 2099, 2099, 2297, 2099,
  /* 5662 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 0, 0, 0, 0, 40960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13824,
  /* 5687 */ 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 5200, 2108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5719 */ 18432, 69, 0, 0, 0, 0, 0, 0, 2137, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5740 */ 2099, 0, 0, 2137, 0, 0, 0, 0, 0, 0, 0, 0, 2137, 2137, 2137, 2137, 2137, 2213, 2099, 2099, 2213, 2099, 2099,
  /* 5763 */ 2099, 2099, 2099, 2099, 2099, 2222, 2099, 2099, 2099, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5781 */ 2099, 2099, 2173, 2175, 0, 0, 2103, 0, 0, 0, 0, 0, 0, 0, 0, 2157, 2103, 2103, 2103, 2157, 0, 130, 179, 0,
  /* 5805 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 2099, 2099, 2099, 2099, 2099, 2252, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5827 */ 2099, 2099, 2099, 2099, 2099, 2099, 238, 238, 253, 182, 2099, 2247, 2250, 2099, 2099, 2099, 2099, 2099,
  /* 5845 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 51, 2099, 0, 2109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5870 */ 0, 0, 64, 64, 2099, 2099, 2099, 2099, 136, 0, 2099, 2138, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5890 */ 2099, 2099, 2099, 2099, 2099, 0, 0, 2138, 0, 0, 0, 0, 0, 0, 0, 0, 2138, 2138, 2138, 2138, 2138, 2099, 2249,
  /* 5913 */ 2099, 2099, 2099, 2099, 2253, 2099, 2099, 2099, 2099, 2099, 2214, 51, 2099, 2099, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5935 */ 0, 0, 2099, 2099, 2099, 2211, 0, 0, 2099, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 2099, 2271, 2099, 2099,
  /* 5960 */ 2099, 2099, 2099, 2278, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5978 */ 2099, 2099, 0, 2099, 2099, 2276, 37427, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 5996 */ 2099, 238, 238, 182, 182, 2099, 2099, 2099, 30259, 73, 134, 0, 2099, 73, 73, 73, 73, 73, 0, 0, 0, 0, 265,
  /* 6019 */ 185, 0, 0, 265, 133, 133, 133, 133, 0, 0, 0, 0, 73, 2694, 0, 0, 73, 73, 73, 73, 73, 0, 0, 0, 0, 0, 26624,
  /* 6046 */ 26624, 0, 26624, 0, 26624, 26624, 0, 0, 0, 26624, 2099, 2275, 2099, 2099, 2099, 2099, 2099, 2099, 2099,
  /* 6065 */ 2099, 2099, 2099, 2099, 2282, 2099, 2283, 2296, 2099, 2099, 2099, 2099, 2099, 2299, 2099, 2099, 2099, 2099,
  /* 6083 */ 2099, 0, 0, 0, 0, 0, 2099, 2099, 2099, 2099, 2099, 2308, 2099, 0, 0, 0, 0, 0, 0, 3661, 3661, 3661, 3661,
  /* 6106 */ 3661, 3661, 0, 3661, 3661, 3661, 2312, 2099, 2099, 2099, 73, 0, 0, 2099, 266, 73, 73, 73, 73, 0, 0, 0, 0,
  /* 6129 */ 3145, 134, 0, 0, 3145, 3072, 3072, 3072, 3072, 0, 0, 0, 0, 0, 11264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 6157 */ 0, 0, 8285, 0, 0, 0, 2110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 39424, 0, 0, 0, 0, 39424,
  /* 6186 */ 39424, 39424, 39424, 39424, 39424, 39424, 39424, 39424, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132,
  /* 6210 */ 73, 134, 0, 0, 0, 0, 0, 5200, 2139, 0, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2099, 2171, 2099,
  /* 6231 */ 2099, 0, 0, 2139, 0, 0, 0, 0, 0, 0, 0, 0, 2139, 2139, 2139, 2139, 2139, 2099, 2099, 2099, 2099, 37939,
  /* 6253 */ 2099, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 0, 0, 0, 2099, 2099, 2099, 2099, 36915, 2099, 2099, 0, 0,
  /* 6274 */ 0, 0, 0, 0, 2110, 2110, 2139, 2139, 2139, 2139, 0, 2139, 2139, 2139, 0, 130, 0, 0, 182, 0, 186, 0, 0, 0, 0,
  /* 6299 */ 0, 0, 142, 2099, 2099, 2099, 2099, 2099, 38963, 2099, 2099, 2099, 2099, 2099, 2099, 0, 0, 182, 182, 0,
  /* 6319 */ 39424, 0, 0, 0, 0, 39424, 39424, 39424, 39424, 39424, 39424, 0, 39424, 39424, 39424, 130, 0, 0, 0, 0, 0, 0,
  /* 6341 */ 0, 73, 134, 0, 0, 0, 0, 0, 5200, 40039, 40039, 0, 40039, 40039, 40039, 40039, 40039, 40039, 40039, 40039,
  /* 6361 */ 0, 40039, 40039, 40039, 40039, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6656, 6656, 6656, 6656, 6656,
  /* 6386 */ 92, 6656, 6656, 6656, 41472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16896, 16896, 16896, 16896, 0, 0,
  /* 6412 */ 0, 16896, 0, 0, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 2154, 0, 0, 0, 0, 0, 0, 0, 0, 2156, 2131,
  /* 6442 */ 2131, 2131, 2156, 0, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 2305, 2099, 2099, 36403, 2099,
  /* 6467 */ 2099, 2099, 0, 0, 0, 0, 0, 0, 26112, 26112, 26112, 26112, 26112, 26112, 0, 26112, 26112, 26112, 0, 0,
  /* 6487 */ 41984, 0, 0, 0, 0, 0, 0, 0, 0, 41984, 41984, 41984, 41984, 41984, 0, 41984, 41984, 41984, 41984, 0, 0, 0,
  /* 6509 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 13390, 13390, 13390, 13390, 13390, 13408, 13390, 13390, 13390
];

MaiaScript.EXPECTED =
[
  /*   0 */ 202, 206, 210, 210, 223, 227, 231, 235, 239, 243, 247, 251, 254, 319, 319, 321, 266, 292, 270, 273, 318,
  /*  21 */ 319, 299, 287, 291, 414, 298, 257, 319, 319, 319, 320, 303, 309, 314, 317, 319, 319, 319, 260, 319, 319,
  /*  42 */ 319, 319, 303, 327, 310, 319, 319, 319, 319, 319, 320, 325, 343, 332, 319, 319, 319, 336, 344, 332, 319,
  /*  63 */ 342, 319, 328, 338, 282, 292, 262, 348, 279, 466, 469, 356, 360, 364, 368, 372, 376, 292, 292, 292, 292,
  /*  84 */ 394, 292, 292, 420, 382, 292, 292, 305, 391, 456, 401, 292, 292, 292, 292, 387, 292, 292, 419, 405, 292,
  /* 105 */ 292, 378, 397, 292, 292, 292, 387, 292, 292, 421, 292, 387, 409, 292, 292, 292, 292, 420, 292, 426, 418,
  /* 126 */ 292, 292, 384, 426, 292, 385, 425, 386, 292, 292, 292, 292, 213, 454, 216, 430, 219, 434, 437, 441, 443,
  /* 147 */ 292, 292, 292, 292, 292, 412, 292, 292, 294, 447, 413, 292, 292, 451, 292, 292, 292, 292, 292, 292, 412,
  /* 168 */ 292, 292, 292, 460, 473, 276, 292, 292, 292, 292, 292, 412, 292, 292, 352, 475, 292, 292, 292, 283, 292,
  /* 189 */ 292, 351, 481, 292, 292, 292, 292, 479, 292, 293, 463, 292, 292, 2056, 2304, 3072, 18432, 1050624, 2099200,
  /* 208 */ 67110912, 1073743872, 2048, 2048, 2048, 2048, 4096, 0, 4096, 135168, 139263, 139263, 204799, 57344, 122880,
  /* 223 */ 1050624, 1050624, 2099200, 268437504, 270534656, 268437504, 1051128, 1712331256, 1712331768, 1714428920,
  /* 233 */ 1712331768, 1712331768, -269506560, 1712331772, 1980767224, 1980767224, -269506304, -3168256, 1712331768,
  /* 242 */ -3168000, -3168256, -3168256, -3168000, -268457984, -22528, -2119680, -2119680, 1982864376, -2114568,
  /* 252 */ -2114568, -2114568, -17416, 2048, 8, 8, -1073741440, 512, 8, 0, 0, 8, 16, 32, 1024, 16384, 67108864,
  /* 269 */ 1073741824, 32, 16, 384, 448, 67109120, 1073742208, 512, 1024, 2048, 0, 1, 0, 32, 0, 0, 0, 2048, 65536,
  /* 288 */ 786432, 25165824, 201326592, -1073741824, 0, 0, 0, 0, 1, 30, -1073741568, 8, 8, 8, 8192, 256, 1024, 0, 0, 4,
  /* 308 */ 896, 32, 16, 16, 384, 512, 384, 64, 64, 64, 512, 8, 8, 8, 8, 256, 256, 256, 0, 32, 32, 16, 16, 8, 384, 8, 8,
  /* 335 */ 8, 256, 256, 32, 32, 32, 32, 32, 16, 16, 16, 16, 384, 1024, 131072, 8388608, 0, 1, 16, 32, 64, -364642272,
  /* 357 */ 3407830, -364642272, -364117984, -364642272, 3407830, 3407830, -289144800, 3407830, 3407838, 3932150,
  /* 367 */ 3932150, 3669975, 4194263, 3669983, 4194295, -3407832, -361234442, -361234434, -361234433, -2, -1, 0, 0,
  /* 380 */ 256, 32768, 134217728, -536870912, 0, 0, 33554432, 0, 0, 0, 8388608, 2048, 57344, 2097152, 0, 16, 131072,
  /* 397 */ 8388608, 67108864, 25165824, 268435456, 58720256, 268435456, 0, 4, 33554432, 536870912, 1073741824,
  /* 408 */ 0x80000000, 67108864, 16777216, 268435456, 0, 2048, 0, 0, 0, 201326848, 16777216, 0, 0, 0, 4194304,
  /* 423 */ 33554432, 0, 67108864, 0, 0, 0, 67108864, 139263, 204799, 57344, 139263, 204799, 122880, 122880, 57344,
  /* 438 */ 61440, 61440, 126976, 61440, 204799, 262143, 262143, 262143, 0, 32, 64, 128, 1792, 49152, 0, 0, 0, 65536, 0,
  /* 457 */ 0, 41943040, 201326592, 1, 2, 4, 16, 0, 0, 0, 524288, 524320, 262144, -364642272, -364642272, -364117984,
  /* 473 */ 32, 64, 128, 256, 512, 2048, 1, 16, 64, 128, 512, 2048
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
