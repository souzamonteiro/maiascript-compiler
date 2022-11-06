// This file was generated on Sun Nov 6, 2022 14:15 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
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
    lookahead1W(29);                // END | EOF | Identifier | Character | String | Integer | Complex | Real |
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
        lookahead1W(24);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9731:                    // Identifier '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 716:                     // '{' String
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 6476:                    // '{' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 972:                     // '{' Complex
      case 1100:                    // '{' Real
        lookahead3W(41);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
     && lk != 50124                 // '{' Complex Identifier
     && lk != 50252                 // '{' Real Identifier
     && lk != 50380                 // '{' Comment Identifier
     && lk != 53964                 // '{' ';' Identifier
     && lk != 56140                 // '{' 'break' Identifier
     && lk != 56524                 // '{' 'continue' Identifier
     && lk != 65996                 // '{' Identifier Character
     && lk != 66124                 // '{' Character Character
     && lk != 66252                 // '{' String Character
     && lk != 66380                 // '{' Integer Character
     && lk != 66508                 // '{' Complex Character
     && lk != 66636                 // '{' Real Character
     && lk != 66764                 // '{' Comment Character
     && lk != 70348                 // '{' ';' Character
     && lk != 72524                 // '{' 'break' Character
     && lk != 72908                 // '{' 'continue' Character
     && lk != 82380                 // '{' Identifier String
     && lk != 82508                 // '{' Character String
     && lk != 82636                 // '{' String String
     && lk != 82764                 // '{' Integer String
     && lk != 82892                 // '{' Complex String
     && lk != 83020                 // '{' Real String
     && lk != 83148                 // '{' Comment String
     && lk != 86732                 // '{' ';' String
     && lk != 88908                 // '{' 'break' String
     && lk != 89292                 // '{' 'continue' String
     && lk != 98764                 // '{' Identifier Integer
     && lk != 98892                 // '{' Character Integer
     && lk != 99020                 // '{' String Integer
     && lk != 99148                 // '{' Integer Integer
     && lk != 99276                 // '{' Complex Integer
     && lk != 99404                 // '{' Real Integer
     && lk != 99532                 // '{' Comment Integer
     && lk != 103116                // '{' ';' Integer
     && lk != 105292                // '{' 'break' Integer
     && lk != 105676                // '{' 'continue' Integer
     && lk != 115148                // '{' Identifier Complex
     && lk != 115276                // '{' Character Complex
     && lk != 115404                // '{' String Complex
     && lk != 115532                // '{' Integer Complex
     && lk != 115660                // '{' Complex Complex
     && lk != 115788                // '{' Real Complex
     && lk != 115916                // '{' Comment Complex
     && lk != 119500                // '{' ';' Complex
     && lk != 121676                // '{' 'break' Complex
     && lk != 122060                // '{' 'continue' Complex
     && lk != 131532                // '{' Identifier Real
     && lk != 131660                // '{' Character Real
     && lk != 131788                // '{' String Real
     && lk != 131916                // '{' Integer Real
     && lk != 132044                // '{' Complex Real
     && lk != 132172                // '{' Real Real
     && lk != 132300                // '{' Comment Real
     && lk != 135884                // '{' ';' Real
     && lk != 138060                // '{' 'break' Real
     && lk != 138444                // '{' 'continue' Real
     && lk != 147916                // '{' Identifier Comment
     && lk != 148044                // '{' Character Comment
     && lk != 148172                // '{' String Comment
     && lk != 148300                // '{' Integer Comment
     && lk != 148428                // '{' Complex Comment
     && lk != 148556                // '{' Real Comment
     && lk != 148684                // '{' Comment Comment
     && lk != 152268                // '{' ';' Comment
     && lk != 154444                // '{' 'break' Comment
     && lk != 154828                // '{' 'continue' Comment
     && lk != 197068                // '{' Identifier '!'
     && lk != 197196                // '{' Character '!'
     && lk != 197324                // '{' String '!'
     && lk != 197452                // '{' Integer '!'
     && lk != 197580                // '{' Complex '!'
     && lk != 197708                // '{' Real '!'
     && lk != 197836                // '{' Comment '!'
     && lk != 201420                // '{' ';' '!'
     && lk != 203596                // '{' 'break' '!'
     && lk != 203980                // '{' 'continue' '!'
     && lk != 328268                // '{' Character '('
     && lk != 328396                // '{' String '('
     && lk != 328524                // '{' Integer '('
     && lk != 328652                // '{' Complex '('
     && lk != 328780                // '{' Real '('
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
     && lk != 459724                // '{' Complex ','
     && lk != 459852                // '{' Real ','
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
     && lk != 607180                // '{' Complex ';'
     && lk != 607308                // '{' Real ';'
     && lk != 607436                // '{' Comment ';'
     && lk != 611020                // '{' ';' ';'
     && lk != 613196                // '{' 'break' ';'
     && lk != 613580                // '{' 'continue' ';'
     && lk != 819788                // '{' Character '['
     && lk != 819916                // '{' String '['
     && lk != 820044                // '{' Integer '['
     && lk != 820172                // '{' Complex '['
     && lk != 820300                // '{' Real '['
     && lk != 820428                // '{' Comment '['
     && lk != 824012                // '{' ';' '['
     && lk != 826188                // '{' 'break' '['
     && lk != 826572                // '{' 'continue' '['
     && lk != 885196                // '{' Identifier 'break'
     && lk != 885324                // '{' Character 'break'
     && lk != 885452                // '{' String 'break'
     && lk != 885580                // '{' Integer 'break'
     && lk != 885708                // '{' Complex 'break'
     && lk != 885836                // '{' Real 'break'
     && lk != 885964                // '{' Comment 'break'
     && lk != 889548                // '{' ';' 'break'
     && lk != 891724                // '{' 'break' 'break'
     && lk != 892108                // '{' 'continue' 'break'
     && lk != 934348                // '{' Identifier 'continue'
     && lk != 934476                // '{' Character 'continue'
     && lk != 934604                // '{' String 'continue'
     && lk != 934732                // '{' Integer 'continue'
     && lk != 934860                // '{' Complex 'continue'
     && lk != 934988                // '{' Real 'continue'
     && lk != 935116                // '{' Comment 'continue'
     && lk != 938700                // '{' ';' 'continue'
     && lk != 940876                // '{' 'break' 'continue'
     && lk != 941260                // '{' 'continue' 'continue'
     && lk != 967116                // '{' Identifier 'do'
     && lk != 967244                // '{' Character 'do'
     && lk != 967372                // '{' String 'do'
     && lk != 967500                // '{' Integer 'do'
     && lk != 967628                // '{' Complex 'do'
     && lk != 967756                // '{' Real 'do'
     && lk != 967884                // '{' Comment 'do'
     && lk != 971468                // '{' ';' 'do'
     && lk != 973644                // '{' 'break' 'do'
     && lk != 974028                // '{' 'continue' 'do'
     && lk != 999884                // '{' Identifier 'f32'
     && lk != 1000012               // '{' Character 'f32'
     && lk != 1000140               // '{' String 'f32'
     && lk != 1000268               // '{' Integer 'f32'
     && lk != 1000396               // '{' Complex 'f32'
     && lk != 1000524               // '{' Real 'f32'
     && lk != 1000652               // '{' Comment 'f32'
     && lk != 1004236               // '{' ';' 'f32'
     && lk != 1006412               // '{' 'break' 'f32'
     && lk != 1006796               // '{' 'continue' 'f32'
     && lk != 1016268               // '{' Identifier 'f64'
     && lk != 1016396               // '{' Character 'f64'
     && lk != 1016524               // '{' String 'f64'
     && lk != 1016652               // '{' Integer 'f64'
     && lk != 1016780               // '{' Complex 'f64'
     && lk != 1016908               // '{' Real 'f64'
     && lk != 1017036               // '{' Comment 'f64'
     && lk != 1020620               // '{' ';' 'f64'
     && lk != 1022796               // '{' 'break' 'f64'
     && lk != 1023180               // '{' 'continue' 'f64'
     && lk != 1032652               // '{' Identifier 'for'
     && lk != 1032780               // '{' Character 'for'
     && lk != 1032908               // '{' String 'for'
     && lk != 1033036               // '{' Integer 'for'
     && lk != 1033164               // '{' Complex 'for'
     && lk != 1033292               // '{' Real 'for'
     && lk != 1033420               // '{' Comment 'for'
     && lk != 1037004               // '{' ';' 'for'
     && lk != 1039180               // '{' 'break' 'for'
     && lk != 1039564               // '{' 'continue' 'for'
     && lk != 1049036               // '{' Identifier 'foreach'
     && lk != 1049164               // '{' Character 'foreach'
     && lk != 1049292               // '{' String 'foreach'
     && lk != 1049420               // '{' Integer 'foreach'
     && lk != 1049548               // '{' Complex 'foreach'
     && lk != 1049676               // '{' Real 'foreach'
     && lk != 1049804               // '{' Comment 'foreach'
     && lk != 1053388               // '{' ';' 'foreach'
     && lk != 1055564               // '{' 'break' 'foreach'
     && lk != 1055948               // '{' 'continue' 'foreach'
     && lk != 1065420               // '{' Identifier 'i32'
     && lk != 1065548               // '{' Character 'i32'
     && lk != 1065676               // '{' String 'i32'
     && lk != 1065804               // '{' Integer 'i32'
     && lk != 1065932               // '{' Complex 'i32'
     && lk != 1066060               // '{' Real 'i32'
     && lk != 1066188               // '{' Comment 'i32'
     && lk != 1069772               // '{' ';' 'i32'
     && lk != 1071948               // '{' 'break' 'i32'
     && lk != 1072332               // '{' 'continue' 'i32'
     && lk != 1081804               // '{' Identifier 'i64'
     && lk != 1081932               // '{' Character 'i64'
     && lk != 1082060               // '{' String 'i64'
     && lk != 1082188               // '{' Integer 'i64'
     && lk != 1082316               // '{' Complex 'i64'
     && lk != 1082444               // '{' Real 'i64'
     && lk != 1082572               // '{' Comment 'i64'
     && lk != 1086156               // '{' ';' 'i64'
     && lk != 1088332               // '{' 'break' 'i64'
     && lk != 1088716               // '{' 'continue' 'i64'
     && lk != 1098188               // '{' Identifier 'if'
     && lk != 1098316               // '{' Character 'if'
     && lk != 1098444               // '{' String 'if'
     && lk != 1098572               // '{' Integer 'if'
     && lk != 1098700               // '{' Complex 'if'
     && lk != 1098828               // '{' Real 'if'
     && lk != 1098956               // '{' Comment 'if'
     && lk != 1102540               // '{' ';' 'if'
     && lk != 1104716               // '{' 'break' 'if'
     && lk != 1105100               // '{' 'continue' 'if'
     && lk != 1114572               // '{' Identifier 'include'
     && lk != 1114700               // '{' Character 'include'
     && lk != 1114828               // '{' String 'include'
     && lk != 1114956               // '{' Integer 'include'
     && lk != 1115084               // '{' Complex 'include'
     && lk != 1115212               // '{' Real 'include'
     && lk != 1115340               // '{' Comment 'include'
     && lk != 1118924               // '{' ';' 'include'
     && lk != 1121100               // '{' 'break' 'include'
     && lk != 1121484               // '{' 'continue' 'include'
     && lk != 1130956               // '{' Identifier 'local'
     && lk != 1131084               // '{' Character 'local'
     && lk != 1131212               // '{' String 'local'
     && lk != 1131340               // '{' Integer 'local'
     && lk != 1131468               // '{' Complex 'local'
     && lk != 1131596               // '{' Real 'local'
     && lk != 1131724               // '{' Comment 'local'
     && lk != 1135308               // '{' ';' 'local'
     && lk != 1137484               // '{' 'break' 'local'
     && lk != 1137868               // '{' 'continue' 'local'
     && lk != 1147340               // '{' Identifier 'return'
     && lk != 1147468               // '{' Character 'return'
     && lk != 1147596               // '{' String 'return'
     && lk != 1147724               // '{' Integer 'return'
     && lk != 1147852               // '{' Complex 'return'
     && lk != 1147980               // '{' Real 'return'
     && lk != 1148108               // '{' Comment 'return'
     && lk != 1151692               // '{' ';' 'return'
     && lk != 1153868               // '{' 'break' 'return'
     && lk != 1154252               // '{' 'continue' 'return'
     && lk != 1163724               // '{' Identifier 'switch'
     && lk != 1163852               // '{' Character 'switch'
     && lk != 1163980               // '{' String 'switch'
     && lk != 1164108               // '{' Integer 'switch'
     && lk != 1164236               // '{' Complex 'switch'
     && lk != 1164364               // '{' Real 'switch'
     && lk != 1164492               // '{' Comment 'switch'
     && lk != 1168076               // '{' ';' 'switch'
     && lk != 1170252               // '{' 'break' 'switch'
     && lk != 1170636               // '{' 'continue' 'switch'
     && lk != 1180108               // '{' Identifier 'test'
     && lk != 1180236               // '{' Character 'test'
     && lk != 1180364               // '{' String 'test'
     && lk != 1180492               // '{' Integer 'test'
     && lk != 1180620               // '{' Complex 'test'
     && lk != 1180748               // '{' Real 'test'
     && lk != 1180876               // '{' Comment 'test'
     && lk != 1184460               // '{' ';' 'test'
     && lk != 1186636               // '{' 'break' 'test'
     && lk != 1187020               // '{' 'continue' 'test'
     && lk != 1196492               // '{' Identifier 'throw'
     && lk != 1196620               // '{' Character 'throw'
     && lk != 1196748               // '{' String 'throw'
     && lk != 1196876               // '{' Integer 'throw'
     && lk != 1197004               // '{' Complex 'throw'
     && lk != 1197132               // '{' Real 'throw'
     && lk != 1197260               // '{' Comment 'throw'
     && lk != 1200844               // '{' ';' 'throw'
     && lk != 1203020               // '{' 'break' 'throw'
     && lk != 1203404               // '{' 'continue' 'throw'
     && lk != 1212876               // '{' Identifier 'try'
     && lk != 1213004               // '{' Character 'try'
     && lk != 1213132               // '{' String 'try'
     && lk != 1213260               // '{' Integer 'try'
     && lk != 1213388               // '{' Complex 'try'
     && lk != 1213516               // '{' Real 'try'
     && lk != 1213644               // '{' Comment 'try'
     && lk != 1217228               // '{' ';' 'try'
     && lk != 1219404               // '{' 'break' 'try'
     && lk != 1219788               // '{' 'continue' 'try'
     && lk != 1229260               // '{' Identifier 'while'
     && lk != 1229388               // '{' Character 'while'
     && lk != 1229516               // '{' String 'while'
     && lk != 1229644               // '{' Integer 'while'
     && lk != 1229772               // '{' Complex 'while'
     && lk != 1229900               // '{' Real 'while'
     && lk != 1230028               // '{' Comment 'while'
     && lk != 1233612               // '{' ';' 'while'
     && lk != 1235788               // '{' 'break' 'while'
     && lk != 1236172               // '{' 'continue' 'while'
     && lk != 1245772               // '{' Character '{'
     && lk != 1245900               // '{' String '{'
     && lk != 1246028               // '{' Integer '{'
     && lk != 1246156               // '{' Complex '{'
     && lk != 1246284               // '{' Real '{'
     && lk != 1246412               // '{' Comment '{'
     && lk != 1249996               // '{' ';' '{'
     && lk != 1252172               // '{' 'break' '{'
     && lk != 1252556               // '{' 'continue' '{'
     && lk != 1327564               // '{' Identifier '~'
     && lk != 1327692               // '{' Character '~'
     && lk != 1327820               // '{' String '~'
     && lk != 1327948               // '{' Integer '~'
     && lk != 1328076               // '{' Complex '~'
     && lk != 1328204               // '{' Real '~'
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
    case 7:                         // Complex
    case 8:                         // Real
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
    case 899:                       // Identifier Complex
    case 1027:                      // Identifier Real
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
    case 459724:                    // '{' Complex ','
    case 459852:                    // '{' Real ','
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
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9731:                    // Identifier '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 716:                     // '{' String
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 6476:                    // '{' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 972:                     // '{' Complex
      case 1100:                    // '{' Real
        lookahead3W(41);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(31);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
     && lk != 50124                 // '{' Complex Identifier
     && lk != 50252                 // '{' Real Identifier
     && lk != 50380                 // '{' Comment Identifier
     && lk != 53964                 // '{' ';' Identifier
     && lk != 56140                 // '{' 'break' Identifier
     && lk != 56524                 // '{' 'continue' Identifier
     && lk != 65996                 // '{' Identifier Character
     && lk != 66124                 // '{' Character Character
     && lk != 66252                 // '{' String Character
     && lk != 66380                 // '{' Integer Character
     && lk != 66508                 // '{' Complex Character
     && lk != 66636                 // '{' Real Character
     && lk != 66764                 // '{' Comment Character
     && lk != 70348                 // '{' ';' Character
     && lk != 72524                 // '{' 'break' Character
     && lk != 72908                 // '{' 'continue' Character
     && lk != 82380                 // '{' Identifier String
     && lk != 82508                 // '{' Character String
     && lk != 82636                 // '{' String String
     && lk != 82764                 // '{' Integer String
     && lk != 82892                 // '{' Complex String
     && lk != 83020                 // '{' Real String
     && lk != 83148                 // '{' Comment String
     && lk != 86732                 // '{' ';' String
     && lk != 88908                 // '{' 'break' String
     && lk != 89292                 // '{' 'continue' String
     && lk != 98764                 // '{' Identifier Integer
     && lk != 98892                 // '{' Character Integer
     && lk != 99020                 // '{' String Integer
     && lk != 99148                 // '{' Integer Integer
     && lk != 99276                 // '{' Complex Integer
     && lk != 99404                 // '{' Real Integer
     && lk != 99532                 // '{' Comment Integer
     && lk != 103116                // '{' ';' Integer
     && lk != 105292                // '{' 'break' Integer
     && lk != 105676                // '{' 'continue' Integer
     && lk != 115148                // '{' Identifier Complex
     && lk != 115276                // '{' Character Complex
     && lk != 115404                // '{' String Complex
     && lk != 115532                // '{' Integer Complex
     && lk != 115660                // '{' Complex Complex
     && lk != 115788                // '{' Real Complex
     && lk != 115916                // '{' Comment Complex
     && lk != 119500                // '{' ';' Complex
     && lk != 121676                // '{' 'break' Complex
     && lk != 122060                // '{' 'continue' Complex
     && lk != 131532                // '{' Identifier Real
     && lk != 131660                // '{' Character Real
     && lk != 131788                // '{' String Real
     && lk != 131916                // '{' Integer Real
     && lk != 132044                // '{' Complex Real
     && lk != 132172                // '{' Real Real
     && lk != 132300                // '{' Comment Real
     && lk != 135884                // '{' ';' Real
     && lk != 138060                // '{' 'break' Real
     && lk != 138444                // '{' 'continue' Real
     && lk != 147916                // '{' Identifier Comment
     && lk != 148044                // '{' Character Comment
     && lk != 148172                // '{' String Comment
     && lk != 148300                // '{' Integer Comment
     && lk != 148428                // '{' Complex Comment
     && lk != 148556                // '{' Real Comment
     && lk != 148684                // '{' Comment Comment
     && lk != 152268                // '{' ';' Comment
     && lk != 154444                // '{' 'break' Comment
     && lk != 154828                // '{' 'continue' Comment
     && lk != 197068                // '{' Identifier '!'
     && lk != 197196                // '{' Character '!'
     && lk != 197324                // '{' String '!'
     && lk != 197452                // '{' Integer '!'
     && lk != 197580                // '{' Complex '!'
     && lk != 197708                // '{' Real '!'
     && lk != 197836                // '{' Comment '!'
     && lk != 201420                // '{' ';' '!'
     && lk != 203596                // '{' 'break' '!'
     && lk != 203980                // '{' 'continue' '!'
     && lk != 328268                // '{' Character '('
     && lk != 328396                // '{' String '('
     && lk != 328524                // '{' Integer '('
     && lk != 328652                // '{' Complex '('
     && lk != 328780                // '{' Real '('
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
     && lk != 459724                // '{' Complex ','
     && lk != 459852                // '{' Real ','
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
     && lk != 607180                // '{' Complex ';'
     && lk != 607308                // '{' Real ';'
     && lk != 607436                // '{' Comment ';'
     && lk != 611020                // '{' ';' ';'
     && lk != 613196                // '{' 'break' ';'
     && lk != 613580                // '{' 'continue' ';'
     && lk != 819788                // '{' Character '['
     && lk != 819916                // '{' String '['
     && lk != 820044                // '{' Integer '['
     && lk != 820172                // '{' Complex '['
     && lk != 820300                // '{' Real '['
     && lk != 820428                // '{' Comment '['
     && lk != 824012                // '{' ';' '['
     && lk != 826188                // '{' 'break' '['
     && lk != 826572                // '{' 'continue' '['
     && lk != 885196                // '{' Identifier 'break'
     && lk != 885324                // '{' Character 'break'
     && lk != 885452                // '{' String 'break'
     && lk != 885580                // '{' Integer 'break'
     && lk != 885708                // '{' Complex 'break'
     && lk != 885836                // '{' Real 'break'
     && lk != 885964                // '{' Comment 'break'
     && lk != 889548                // '{' ';' 'break'
     && lk != 891724                // '{' 'break' 'break'
     && lk != 892108                // '{' 'continue' 'break'
     && lk != 934348                // '{' Identifier 'continue'
     && lk != 934476                // '{' Character 'continue'
     && lk != 934604                // '{' String 'continue'
     && lk != 934732                // '{' Integer 'continue'
     && lk != 934860                // '{' Complex 'continue'
     && lk != 934988                // '{' Real 'continue'
     && lk != 935116                // '{' Comment 'continue'
     && lk != 938700                // '{' ';' 'continue'
     && lk != 940876                // '{' 'break' 'continue'
     && lk != 941260                // '{' 'continue' 'continue'
     && lk != 967116                // '{' Identifier 'do'
     && lk != 967244                // '{' Character 'do'
     && lk != 967372                // '{' String 'do'
     && lk != 967500                // '{' Integer 'do'
     && lk != 967628                // '{' Complex 'do'
     && lk != 967756                // '{' Real 'do'
     && lk != 967884                // '{' Comment 'do'
     && lk != 971468                // '{' ';' 'do'
     && lk != 973644                // '{' 'break' 'do'
     && lk != 974028                // '{' 'continue' 'do'
     && lk != 999884                // '{' Identifier 'f32'
     && lk != 1000012               // '{' Character 'f32'
     && lk != 1000140               // '{' String 'f32'
     && lk != 1000268               // '{' Integer 'f32'
     && lk != 1000396               // '{' Complex 'f32'
     && lk != 1000524               // '{' Real 'f32'
     && lk != 1000652               // '{' Comment 'f32'
     && lk != 1004236               // '{' ';' 'f32'
     && lk != 1006412               // '{' 'break' 'f32'
     && lk != 1006796               // '{' 'continue' 'f32'
     && lk != 1016268               // '{' Identifier 'f64'
     && lk != 1016396               // '{' Character 'f64'
     && lk != 1016524               // '{' String 'f64'
     && lk != 1016652               // '{' Integer 'f64'
     && lk != 1016780               // '{' Complex 'f64'
     && lk != 1016908               // '{' Real 'f64'
     && lk != 1017036               // '{' Comment 'f64'
     && lk != 1020620               // '{' ';' 'f64'
     && lk != 1022796               // '{' 'break' 'f64'
     && lk != 1023180               // '{' 'continue' 'f64'
     && lk != 1032652               // '{' Identifier 'for'
     && lk != 1032780               // '{' Character 'for'
     && lk != 1032908               // '{' String 'for'
     && lk != 1033036               // '{' Integer 'for'
     && lk != 1033164               // '{' Complex 'for'
     && lk != 1033292               // '{' Real 'for'
     && lk != 1033420               // '{' Comment 'for'
     && lk != 1037004               // '{' ';' 'for'
     && lk != 1039180               // '{' 'break' 'for'
     && lk != 1039564               // '{' 'continue' 'for'
     && lk != 1049036               // '{' Identifier 'foreach'
     && lk != 1049164               // '{' Character 'foreach'
     && lk != 1049292               // '{' String 'foreach'
     && lk != 1049420               // '{' Integer 'foreach'
     && lk != 1049548               // '{' Complex 'foreach'
     && lk != 1049676               // '{' Real 'foreach'
     && lk != 1049804               // '{' Comment 'foreach'
     && lk != 1053388               // '{' ';' 'foreach'
     && lk != 1055564               // '{' 'break' 'foreach'
     && lk != 1055948               // '{' 'continue' 'foreach'
     && lk != 1065420               // '{' Identifier 'i32'
     && lk != 1065548               // '{' Character 'i32'
     && lk != 1065676               // '{' String 'i32'
     && lk != 1065804               // '{' Integer 'i32'
     && lk != 1065932               // '{' Complex 'i32'
     && lk != 1066060               // '{' Real 'i32'
     && lk != 1066188               // '{' Comment 'i32'
     && lk != 1069772               // '{' ';' 'i32'
     && lk != 1071948               // '{' 'break' 'i32'
     && lk != 1072332               // '{' 'continue' 'i32'
     && lk != 1081804               // '{' Identifier 'i64'
     && lk != 1081932               // '{' Character 'i64'
     && lk != 1082060               // '{' String 'i64'
     && lk != 1082188               // '{' Integer 'i64'
     && lk != 1082316               // '{' Complex 'i64'
     && lk != 1082444               // '{' Real 'i64'
     && lk != 1082572               // '{' Comment 'i64'
     && lk != 1086156               // '{' ';' 'i64'
     && lk != 1088332               // '{' 'break' 'i64'
     && lk != 1088716               // '{' 'continue' 'i64'
     && lk != 1098188               // '{' Identifier 'if'
     && lk != 1098316               // '{' Character 'if'
     && lk != 1098444               // '{' String 'if'
     && lk != 1098572               // '{' Integer 'if'
     && lk != 1098700               // '{' Complex 'if'
     && lk != 1098828               // '{' Real 'if'
     && lk != 1098956               // '{' Comment 'if'
     && lk != 1102540               // '{' ';' 'if'
     && lk != 1104716               // '{' 'break' 'if'
     && lk != 1105100               // '{' 'continue' 'if'
     && lk != 1114572               // '{' Identifier 'include'
     && lk != 1114700               // '{' Character 'include'
     && lk != 1114828               // '{' String 'include'
     && lk != 1114956               // '{' Integer 'include'
     && lk != 1115084               // '{' Complex 'include'
     && lk != 1115212               // '{' Real 'include'
     && lk != 1115340               // '{' Comment 'include'
     && lk != 1118924               // '{' ';' 'include'
     && lk != 1121100               // '{' 'break' 'include'
     && lk != 1121484               // '{' 'continue' 'include'
     && lk != 1130956               // '{' Identifier 'local'
     && lk != 1131084               // '{' Character 'local'
     && lk != 1131212               // '{' String 'local'
     && lk != 1131340               // '{' Integer 'local'
     && lk != 1131468               // '{' Complex 'local'
     && lk != 1131596               // '{' Real 'local'
     && lk != 1131724               // '{' Comment 'local'
     && lk != 1135308               // '{' ';' 'local'
     && lk != 1137484               // '{' 'break' 'local'
     && lk != 1137868               // '{' 'continue' 'local'
     && lk != 1147340               // '{' Identifier 'return'
     && lk != 1147468               // '{' Character 'return'
     && lk != 1147596               // '{' String 'return'
     && lk != 1147724               // '{' Integer 'return'
     && lk != 1147852               // '{' Complex 'return'
     && lk != 1147980               // '{' Real 'return'
     && lk != 1148108               // '{' Comment 'return'
     && lk != 1151692               // '{' ';' 'return'
     && lk != 1153868               // '{' 'break' 'return'
     && lk != 1154252               // '{' 'continue' 'return'
     && lk != 1163724               // '{' Identifier 'switch'
     && lk != 1163852               // '{' Character 'switch'
     && lk != 1163980               // '{' String 'switch'
     && lk != 1164108               // '{' Integer 'switch'
     && lk != 1164236               // '{' Complex 'switch'
     && lk != 1164364               // '{' Real 'switch'
     && lk != 1164492               // '{' Comment 'switch'
     && lk != 1168076               // '{' ';' 'switch'
     && lk != 1170252               // '{' 'break' 'switch'
     && lk != 1170636               // '{' 'continue' 'switch'
     && lk != 1180108               // '{' Identifier 'test'
     && lk != 1180236               // '{' Character 'test'
     && lk != 1180364               // '{' String 'test'
     && lk != 1180492               // '{' Integer 'test'
     && lk != 1180620               // '{' Complex 'test'
     && lk != 1180748               // '{' Real 'test'
     && lk != 1180876               // '{' Comment 'test'
     && lk != 1184460               // '{' ';' 'test'
     && lk != 1186636               // '{' 'break' 'test'
     && lk != 1187020               // '{' 'continue' 'test'
     && lk != 1196492               // '{' Identifier 'throw'
     && lk != 1196620               // '{' Character 'throw'
     && lk != 1196748               // '{' String 'throw'
     && lk != 1196876               // '{' Integer 'throw'
     && lk != 1197004               // '{' Complex 'throw'
     && lk != 1197132               // '{' Real 'throw'
     && lk != 1197260               // '{' Comment 'throw'
     && lk != 1200844               // '{' ';' 'throw'
     && lk != 1203020               // '{' 'break' 'throw'
     && lk != 1203404               // '{' 'continue' 'throw'
     && lk != 1212876               // '{' Identifier 'try'
     && lk != 1213004               // '{' Character 'try'
     && lk != 1213132               // '{' String 'try'
     && lk != 1213260               // '{' Integer 'try'
     && lk != 1213388               // '{' Complex 'try'
     && lk != 1213516               // '{' Real 'try'
     && lk != 1213644               // '{' Comment 'try'
     && lk != 1217228               // '{' ';' 'try'
     && lk != 1219404               // '{' 'break' 'try'
     && lk != 1219788               // '{' 'continue' 'try'
     && lk != 1229260               // '{' Identifier 'while'
     && lk != 1229388               // '{' Character 'while'
     && lk != 1229516               // '{' String 'while'
     && lk != 1229644               // '{' Integer 'while'
     && lk != 1229772               // '{' Complex 'while'
     && lk != 1229900               // '{' Real 'while'
     && lk != 1230028               // '{' Comment 'while'
     && lk != 1233612               // '{' ';' 'while'
     && lk != 1235788               // '{' 'break' 'while'
     && lk != 1236172               // '{' 'continue' 'while'
     && lk != 1245772               // '{' Character '{'
     && lk != 1245900               // '{' String '{'
     && lk != 1246028               // '{' Integer '{'
     && lk != 1246156               // '{' Complex '{'
     && lk != 1246284               // '{' Real '{'
     && lk != 1246412               // '{' Comment '{'
     && lk != 1249996               // '{' ';' '{'
     && lk != 1252172               // '{' 'break' '{'
     && lk != 1252556               // '{' 'continue' '{'
     && lk != 1327564               // '{' Identifier '~'
     && lk != 1327692               // '{' Character '~'
     && lk != 1327820               // '{' String '~'
     && lk != 1327948               // '{' Integer '~'
     && lk != 1328076               // '{' Complex '~'
     && lk != 1328204               // '{' Real '~'
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
    case 7:                         // Complex
    case 8:                         // Real
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
    case 899:                       // Identifier Complex
    case 1027:                      // Identifier Real
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
    case 459724:                    // '{' Complex ','
    case 459852:                    // '{' Real ','
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead2W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(23);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
        case 590:                   // '|=' Character
        case 718:                   // '|=' String
        case 846:                   // '|=' Integer
        case 974:                   // '|=' Complex
        case 1102:                  // '|=' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(21);          // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
            lookahead1W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead2W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(23);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
        case 590:                   // '|=' Character
        case 718:                   // '|=' String
        case 846:                   // '|=' Integer
        case 974:                   // '|=' Complex
        case 1102:                  // '|=' Real
          lookahead3W(44);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(21);          // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
            lookahead1W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
      consume(35);                  // ':'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_VariableAssignment();
      consumeT(35);                 // ':'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead2W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 2585:                  // '+' '('
        case 9753:                  // '+' '{'
        case 2589:                  // '-' '('
        case 9757:                  // '-' '{'
          lookahead3W(23);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
            lookahead1W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead2W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 2585:                  // '+' '('
        case 9753:                  // '+' '{'
        case 2589:                  // '-' '('
        case 9757:                  // '-' '{'
          lookahead3W(23);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
            lookahead1W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(44);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(44);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(36);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9748:                    // '(' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(4);             // WhiteSpace^token | ')'
        break;
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8340:                    // '(' 'i32'
      case 8468:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 916:                     // '(' Complex
      case 1044:                    // '(' Real
        lookahead3W(28);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8852:                    // '(' 'local'
      case 8980:                    // '(' 'return'
      case 9492:                    // '(' 'try'
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(39);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 9778:                    // '[' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(20);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8370:                    // '[' 'i32'
      case 8498:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 946:                     // '[' Complex
      case 1074:                    // '[' Real
        lookahead3W(35);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8882:                    // '[' 'local'
      case 9010:                    // '[' 'return'
      case 9522:                    // '[' 'try'
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 716:                     // '{' String
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6476:                    // '{' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 972:                     // '{' Complex
      case 1100:                    // '{' Real
        lookahead3W(32);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1228:                    // '{' Comment
      case 4812:                    // '{' ';'
      case 6988:                    // '{' 'break'
      case 7372:                    // '{' 'continue'
        lookahead3W(18);            // WhiteSpace^token | ',' | '}'
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
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
     && lk != 8323                  // Identifier 'i32'
     && lk != 8324                  // Character 'i32'
     && lk != 8325                  // String 'i32'
     && lk != 8326                  // Integer 'i32'
     && lk != 8327                  // Complex 'i32'
     && lk != 8328                  // Real 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8452                  // Character 'i64'
     && lk != 8453                  // String 'i64'
     && lk != 8454                  // Integer 'i64'
     && lk != 8455                  // Complex 'i64'
     && lk != 8456                  // Real 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8580                  // Character 'if'
     && lk != 8581                  // String 'if'
     && lk != 8582                  // Integer 'if'
     && lk != 8583                  // Complex 'if'
     && lk != 8584                  // Real 'if'
     && lk != 8707                  // Identifier 'include'
     && lk != 8708                  // Character 'include'
     && lk != 8709                  // String 'include'
     && lk != 8710                  // Integer 'include'
     && lk != 8711                  // Complex 'include'
     && lk != 8712                  // Real 'include'
     && lk != 8835                  // Identifier 'local'
     && lk != 8836                  // Character 'local'
     && lk != 8837                  // String 'local'
     && lk != 8838                  // Integer 'local'
     && lk != 8839                  // Complex 'local'
     && lk != 8840                  // Real 'local'
     && lk != 8963                  // Identifier 'return'
     && lk != 8964                  // Character 'return'
     && lk != 8965                  // String 'return'
     && lk != 8966                  // Integer 'return'
     && lk != 8967                  // Complex 'return'
     && lk != 8968                  // Real 'return'
     && lk != 9091                  // Identifier 'switch'
     && lk != 9092                  // Character 'switch'
     && lk != 9093                  // String 'switch'
     && lk != 9094                  // Integer 'switch'
     && lk != 9095                  // Complex 'switch'
     && lk != 9096                  // Real 'switch'
     && lk != 9219                  // Identifier 'test'
     && lk != 9220                  // Character 'test'
     && lk != 9221                  // String 'test'
     && lk != 9222                  // Integer 'test'
     && lk != 9223                  // Complex 'test'
     && lk != 9224                  // Real 'test'
     && lk != 9347                  // Identifier 'throw'
     && lk != 9348                  // Character 'throw'
     && lk != 9349                  // String 'throw'
     && lk != 9350                  // Integer 'throw'
     && lk != 9351                  // Complex 'throw'
     && lk != 9352                  // Real 'throw'
     && lk != 9475                  // Identifier 'try'
     && lk != 9476                  // Character 'try'
     && lk != 9477                  // String 'try'
     && lk != 9478                  // Integer 'try'
     && lk != 9479                  // Complex 'try'
     && lk != 9480                  // Real 'try'
     && lk != 9603                  // Identifier 'while'
     && lk != 9604                  // Character 'while'
     && lk != 9605                  // String 'while'
     && lk != 9606                  // Integer 'while'
     && lk != 9607                  // Complex 'while'
     && lk != 9608                  // Real 'while'
     && lk != 9731                  // Identifier '{'
     && lk != 9732                  // Character '{'
     && lk != 9733                  // String '{'
     && lk != 9734                  // Integer '{'
     && lk != 9735                  // Complex '{'
     && lk != 9736                  // Real '{'
     && lk != 9859                  // Identifier '|'
     && lk != 9860                  // Character '|'
     && lk != 9861                  // String '|'
     && lk != 9862                  // Integer '|'
     && lk != 9863                  // Complex '|'
     && lk != 9864                  // Real '|'
     && lk != 9987                  // Identifier '|='
     && lk != 9988                  // Character '|='
     && lk != 9989                  // String '|='
     && lk != 9990                  // Integer '|='
     && lk != 9991                  // Complex '|='
     && lk != 9992                  // Real '|='
     && lk != 10115                 // Identifier '||'
     && lk != 10116                 // Character '||'
     && lk != 10117                 // String '||'
     && lk != 10118                 // Integer '||'
     && lk != 10119                 // Complex '||'
     && lk != 10120                 // Real '||'
     && lk != 10243                 // Identifier '}'
     && lk != 10244                 // Character '}'
     && lk != 10245                 // String '}'
     && lk != 10246                 // Integer '}'
     && lk != 10247                 // Complex '}'
     && lk != 10248                 // Real '}'
     && lk != 10371                 // Identifier '~'
     && lk != 10372                 // Character '~'
     && lk != 10373                 // String '~'
     && lk != 10374                 // Integer '~'
     && lk != 10375                 // Complex '~'
     && lk != 10376                 // Real '~'
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
     && lk != 55730                 // '[' ']' Identifier
     && lk != 72114                 // '[' ']' Character
     && lk != 88498                 // '[' ']' String
     && lk != 104882                // '[' ']' Integer
     && lk != 121266                // '[' ']' Complex
     && lk != 137650                // '[' ']' Real
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
     && lk != 334258                // '[' ']' '('
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
     && lk != 825778                // '[' ']' '['
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
     && lk != 1002755               // Identifier '++' 'f32'
     && lk != 1002756               // Character '++' 'f32'
     && lk != 1002757               // String '++' 'f32'
     && lk != 1002758               // Integer '++' 'f32'
     && lk != 1002759               // Complex '++' 'f32'
     && lk != 1002760               // Real '++' 'f32'
     && lk != 1003267               // Identifier '--' 'f32'
     && lk != 1003268               // Character '--' 'f32'
     && lk != 1003269               // String '--' 'f32'
     && lk != 1003270               // Integer '--' 'f32'
     && lk != 1003271               // Complex '--' 'f32'
     && lk != 1003272               // Real '--' 'f32'
     && lk != 1006002               // '[' ']' 'f32'
     && lk != 1019139               // Identifier '++' 'f64'
     && lk != 1019140               // Character '++' 'f64'
     && lk != 1019141               // String '++' 'f64'
     && lk != 1019142               // Integer '++' 'f64'
     && lk != 1019143               // Complex '++' 'f64'
     && lk != 1019144               // Real '++' 'f64'
     && lk != 1019651               // Identifier '--' 'f64'
     && lk != 1019652               // Character '--' 'f64'
     && lk != 1019653               // String '--' 'f64'
     && lk != 1019654               // Integer '--' 'f64'
     && lk != 1019655               // Complex '--' 'f64'
     && lk != 1019656               // Real '--' 'f64'
     && lk != 1022386               // '[' ']' 'f64'
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
     && lk != 1068291               // Identifier '++' 'i32'
     && lk != 1068292               // Character '++' 'i32'
     && lk != 1068293               // String '++' 'i32'
     && lk != 1068294               // Integer '++' 'i32'
     && lk != 1068295               // Complex '++' 'i32'
     && lk != 1068296               // Real '++' 'i32'
     && lk != 1068803               // Identifier '--' 'i32'
     && lk != 1068804               // Character '--' 'i32'
     && lk != 1068805               // String '--' 'i32'
     && lk != 1068806               // Integer '--' 'i32'
     && lk != 1068807               // Complex '--' 'i32'
     && lk != 1068808               // Real '--' 'i32'
     && lk != 1071538               // '[' ']' 'i32'
     && lk != 1084675               // Identifier '++' 'i64'
     && lk != 1084676               // Character '++' 'i64'
     && lk != 1084677               // String '++' 'i64'
     && lk != 1084678               // Integer '++' 'i64'
     && lk != 1084679               // Complex '++' 'i64'
     && lk != 1084680               // Real '++' 'i64'
     && lk != 1085187               // Identifier '--' 'i64'
     && lk != 1085188               // Character '--' 'i64'
     && lk != 1085189               // String '--' 'i64'
     && lk != 1085190               // Integer '--' 'i64'
     && lk != 1085191               // Complex '--' 'i64'
     && lk != 1085192               // Real '--' 'i64'
     && lk != 1087922               // '[' ']' 'i64'
     && lk != 1101059               // Identifier '++' 'if'
     && lk != 1101060               // Character '++' 'if'
     && lk != 1101061               // String '++' 'if'
     && lk != 1101062               // Integer '++' 'if'
     && lk != 1101063               // Complex '++' 'if'
     && lk != 1101064               // Real '++' 'if'
     && lk != 1101571               // Identifier '--' 'if'
     && lk != 1101572               // Character '--' 'if'
     && lk != 1101573               // String '--' 'if'
     && lk != 1101574               // Integer '--' 'if'
     && lk != 1101575               // Complex '--' 'if'
     && lk != 1101576               // Real '--' 'if'
     && lk != 1104306               // '[' ']' 'if'
     && lk != 1117443               // Identifier '++' 'include'
     && lk != 1117444               // Character '++' 'include'
     && lk != 1117445               // String '++' 'include'
     && lk != 1117446               // Integer '++' 'include'
     && lk != 1117447               // Complex '++' 'include'
     && lk != 1117448               // Real '++' 'include'
     && lk != 1117955               // Identifier '--' 'include'
     && lk != 1117956               // Character '--' 'include'
     && lk != 1117957               // String '--' 'include'
     && lk != 1117958               // Integer '--' 'include'
     && lk != 1117959               // Complex '--' 'include'
     && lk != 1117960               // Real '--' 'include'
     && lk != 1120690               // '[' ']' 'include'
     && lk != 1133827               // Identifier '++' 'local'
     && lk != 1133828               // Character '++' 'local'
     && lk != 1133829               // String '++' 'local'
     && lk != 1133830               // Integer '++' 'local'
     && lk != 1133831               // Complex '++' 'local'
     && lk != 1133832               // Real '++' 'local'
     && lk != 1134339               // Identifier '--' 'local'
     && lk != 1134340               // Character '--' 'local'
     && lk != 1134341               // String '--' 'local'
     && lk != 1134342               // Integer '--' 'local'
     && lk != 1134343               // Complex '--' 'local'
     && lk != 1134344               // Real '--' 'local'
     && lk != 1137074               // '[' ']' 'local'
     && lk != 1150211               // Identifier '++' 'return'
     && lk != 1150212               // Character '++' 'return'
     && lk != 1150213               // String '++' 'return'
     && lk != 1150214               // Integer '++' 'return'
     && lk != 1150215               // Complex '++' 'return'
     && lk != 1150216               // Real '++' 'return'
     && lk != 1150723               // Identifier '--' 'return'
     && lk != 1150724               // Character '--' 'return'
     && lk != 1150725               // String '--' 'return'
     && lk != 1150726               // Integer '--' 'return'
     && lk != 1150727               // Complex '--' 'return'
     && lk != 1150728               // Real '--' 'return'
     && lk != 1153458               // '[' ']' 'return'
     && lk != 1166595               // Identifier '++' 'switch'
     && lk != 1166596               // Character '++' 'switch'
     && lk != 1166597               // String '++' 'switch'
     && lk != 1166598               // Integer '++' 'switch'
     && lk != 1166599               // Complex '++' 'switch'
     && lk != 1166600               // Real '++' 'switch'
     && lk != 1167107               // Identifier '--' 'switch'
     && lk != 1167108               // Character '--' 'switch'
     && lk != 1167109               // String '--' 'switch'
     && lk != 1167110               // Integer '--' 'switch'
     && lk != 1167111               // Complex '--' 'switch'
     && lk != 1167112               // Real '--' 'switch'
     && lk != 1169842               // '[' ']' 'switch'
     && lk != 1182979               // Identifier '++' 'test'
     && lk != 1182980               // Character '++' 'test'
     && lk != 1182981               // String '++' 'test'
     && lk != 1182982               // Integer '++' 'test'
     && lk != 1182983               // Complex '++' 'test'
     && lk != 1182984               // Real '++' 'test'
     && lk != 1183491               // Identifier '--' 'test'
     && lk != 1183492               // Character '--' 'test'
     && lk != 1183493               // String '--' 'test'
     && lk != 1183494               // Integer '--' 'test'
     && lk != 1183495               // Complex '--' 'test'
     && lk != 1183496               // Real '--' 'test'
     && lk != 1186226               // '[' ']' 'test'
     && lk != 1199363               // Identifier '++' 'throw'
     && lk != 1199364               // Character '++' 'throw'
     && lk != 1199365               // String '++' 'throw'
     && lk != 1199366               // Integer '++' 'throw'
     && lk != 1199367               // Complex '++' 'throw'
     && lk != 1199368               // Real '++' 'throw'
     && lk != 1199875               // Identifier '--' 'throw'
     && lk != 1199876               // Character '--' 'throw'
     && lk != 1199877               // String '--' 'throw'
     && lk != 1199878               // Integer '--' 'throw'
     && lk != 1199879               // Complex '--' 'throw'
     && lk != 1199880               // Real '--' 'throw'
     && lk != 1202610               // '[' ']' 'throw'
     && lk != 1215747               // Identifier '++' 'try'
     && lk != 1215748               // Character '++' 'try'
     && lk != 1215749               // String '++' 'try'
     && lk != 1215750               // Integer '++' 'try'
     && lk != 1215751               // Complex '++' 'try'
     && lk != 1215752               // Real '++' 'try'
     && lk != 1216259               // Identifier '--' 'try'
     && lk != 1216260               // Character '--' 'try'
     && lk != 1216261               // String '--' 'try'
     && lk != 1216262               // Integer '--' 'try'
     && lk != 1216263               // Complex '--' 'try'
     && lk != 1216264               // Real '--' 'try'
     && lk != 1218994               // '[' ']' 'try'
     && lk != 1232131               // Identifier '++' 'while'
     && lk != 1232132               // Character '++' 'while'
     && lk != 1232133               // String '++' 'while'
     && lk != 1232134               // Integer '++' 'while'
     && lk != 1232135               // Complex '++' 'while'
     && lk != 1232136               // Real '++' 'while'
     && lk != 1232643               // Identifier '--' 'while'
     && lk != 1232644               // Character '--' 'while'
     && lk != 1232645               // String '--' 'while'
     && lk != 1232646               // Integer '--' 'while'
     && lk != 1232647               // Complex '--' 'while'
     && lk != 1232648               // Real '--' 'while'
     && lk != 1235378               // '[' ']' 'while'
     && lk != 1251762               // '[' ']' '{'
     && lk != 1264899               // Identifier '++' '|'
     && lk != 1264900               // Character '++' '|'
     && lk != 1264901               // String '++' '|'
     && lk != 1264902               // Integer '++' '|'
     && lk != 1264903               // Complex '++' '|'
     && lk != 1264904               // Real '++' '|'
     && lk != 1265411               // Identifier '--' '|'
     && lk != 1265412               // Character '--' '|'
     && lk != 1265413               // String '--' '|'
     && lk != 1265414               // Integer '--' '|'
     && lk != 1265415               // Complex '--' '|'
     && lk != 1265416               // Real '--' '|'
     && lk != 1268146               // '[' ']' '|'
     && lk != 1281283               // Identifier '++' '|='
     && lk != 1281284               // Character '++' '|='
     && lk != 1281285               // String '++' '|='
     && lk != 1281286               // Integer '++' '|='
     && lk != 1281287               // Complex '++' '|='
     && lk != 1281288               // Real '++' '|='
     && lk != 1281795               // Identifier '--' '|='
     && lk != 1281796               // Character '--' '|='
     && lk != 1281797               // String '--' '|='
     && lk != 1281798               // Integer '--' '|='
     && lk != 1281799               // Complex '--' '|='
     && lk != 1281800               // Real '--' '|='
     && lk != 1284530               // '[' ']' '|='
     && lk != 1297667               // Identifier '++' '||'
     && lk != 1297668               // Character '++' '||'
     && lk != 1297669               // String '++' '||'
     && lk != 1297670               // Integer '++' '||'
     && lk != 1297671               // Complex '++' '||'
     && lk != 1297672               // Real '++' '||'
     && lk != 1298179               // Identifier '--' '||'
     && lk != 1298180               // Character '--' '||'
     && lk != 1298181               // String '--' '||'
     && lk != 1298182               // Integer '--' '||'
     && lk != 1298183               // Complex '--' '||'
     && lk != 1298184               // Real '--' '||'
     && lk != 1300914               // '[' ']' '||'
     && lk != 1314051               // Identifier '++' '}'
     && lk != 1314052               // Character '++' '}'
     && lk != 1314053               // String '++' '}'
     && lk != 1314054               // Integer '++' '}'
     && lk != 1314055               // Complex '++' '}'
     && lk != 1314056               // Real '++' '}'
     && lk != 1314563               // Identifier '--' '}'
     && lk != 1314564               // Character '--' '}'
     && lk != 1314565               // String '--' '}'
     && lk != 1314566               // Integer '--' '}'
     && lk != 1314567               // Complex '--' '}'
     && lk != 1314568               // Real '--' '}'
     && lk != 1317298               // '[' ']' '}'
     && lk != 1330435               // Identifier '++' '~'
     && lk != 1330436               // Character '++' '~'
     && lk != 1330437               // String '++' '~'
     && lk != 1330438               // Integer '++' '~'
     && lk != 1330439               // Complex '++' '~'
     && lk != 1330440               // Real '++' '~'
     && lk != 1330947               // Identifier '--' '~'
     && lk != 1330948               // Character '--' '~'
     && lk != 1330949               // String '--' '~'
     && lk != 1330950               // Integer '--' '~'
     && lk != 1330951               // Complex '--' '~'
     && lk != 1330952               // Real '--' '~'
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
    case 1002755:                   // Identifier '++' 'f32'
    case 1002756:                   // Character '++' 'f32'
    case 1002757:                   // String '++' 'f32'
    case 1002758:                   // Integer '++' 'f32'
    case 1002759:                   // Complex '++' 'f32'
    case 1002760:                   // Real '++' 'f32'
    case 1019139:                   // Identifier '++' 'f64'
    case 1019140:                   // Character '++' 'f64'
    case 1019141:                   // String '++' 'f64'
    case 1019142:                   // Integer '++' 'f64'
    case 1019143:                   // Complex '++' 'f64'
    case 1019144:                   // Real '++' 'f64'
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
    case 1068291:                   // Identifier '++' 'i32'
    case 1068292:                   // Character '++' 'i32'
    case 1068293:                   // String '++' 'i32'
    case 1068294:                   // Integer '++' 'i32'
    case 1068295:                   // Complex '++' 'i32'
    case 1068296:                   // Real '++' 'i32'
    case 1084675:                   // Identifier '++' 'i64'
    case 1084676:                   // Character '++' 'i64'
    case 1084677:                   // String '++' 'i64'
    case 1084678:                   // Integer '++' 'i64'
    case 1084679:                   // Complex '++' 'i64'
    case 1084680:                   // Real '++' 'i64'
    case 1101059:                   // Identifier '++' 'if'
    case 1101060:                   // Character '++' 'if'
    case 1101061:                   // String '++' 'if'
    case 1101062:                   // Integer '++' 'if'
    case 1101063:                   // Complex '++' 'if'
    case 1101064:                   // Real '++' 'if'
    case 1117443:                   // Identifier '++' 'include'
    case 1117444:                   // Character '++' 'include'
    case 1117445:                   // String '++' 'include'
    case 1117446:                   // Integer '++' 'include'
    case 1117447:                   // Complex '++' 'include'
    case 1117448:                   // Real '++' 'include'
    case 1133827:                   // Identifier '++' 'local'
    case 1133828:                   // Character '++' 'local'
    case 1133829:                   // String '++' 'local'
    case 1133830:                   // Integer '++' 'local'
    case 1133831:                   // Complex '++' 'local'
    case 1133832:                   // Real '++' 'local'
    case 1150211:                   // Identifier '++' 'return'
    case 1150212:                   // Character '++' 'return'
    case 1150213:                   // String '++' 'return'
    case 1150214:                   // Integer '++' 'return'
    case 1150215:                   // Complex '++' 'return'
    case 1150216:                   // Real '++' 'return'
    case 1166595:                   // Identifier '++' 'switch'
    case 1166596:                   // Character '++' 'switch'
    case 1166597:                   // String '++' 'switch'
    case 1166598:                   // Integer '++' 'switch'
    case 1166599:                   // Complex '++' 'switch'
    case 1166600:                   // Real '++' 'switch'
    case 1182979:                   // Identifier '++' 'test'
    case 1182980:                   // Character '++' 'test'
    case 1182981:                   // String '++' 'test'
    case 1182982:                   // Integer '++' 'test'
    case 1182983:                   // Complex '++' 'test'
    case 1182984:                   // Real '++' 'test'
    case 1199363:                   // Identifier '++' 'throw'
    case 1199364:                   // Character '++' 'throw'
    case 1199365:                   // String '++' 'throw'
    case 1199366:                   // Integer '++' 'throw'
    case 1199367:                   // Complex '++' 'throw'
    case 1199368:                   // Real '++' 'throw'
    case 1215747:                   // Identifier '++' 'try'
    case 1215748:                   // Character '++' 'try'
    case 1215749:                   // String '++' 'try'
    case 1215750:                   // Integer '++' 'try'
    case 1215751:                   // Complex '++' 'try'
    case 1215752:                   // Real '++' 'try'
    case 1232131:                   // Identifier '++' 'while'
    case 1232132:                   // Character '++' 'while'
    case 1232133:                   // String '++' 'while'
    case 1232134:                   // Integer '++' 'while'
    case 1232135:                   // Complex '++' 'while'
    case 1232136:                   // Real '++' 'while'
    case 1264899:                   // Identifier '++' '|'
    case 1264900:                   // Character '++' '|'
    case 1264901:                   // String '++' '|'
    case 1264902:                   // Integer '++' '|'
    case 1264903:                   // Complex '++' '|'
    case 1264904:                   // Real '++' '|'
    case 1281283:                   // Identifier '++' '|='
    case 1281284:                   // Character '++' '|='
    case 1281285:                   // String '++' '|='
    case 1281286:                   // Integer '++' '|='
    case 1281287:                   // Complex '++' '|='
    case 1281288:                   // Real '++' '|='
    case 1297667:                   // Identifier '++' '||'
    case 1297668:                   // Character '++' '||'
    case 1297669:                   // String '++' '||'
    case 1297670:                   // Integer '++' '||'
    case 1297671:                   // Complex '++' '||'
    case 1297672:                   // Real '++' '||'
    case 1314051:                   // Identifier '++' '}'
    case 1314052:                   // Character '++' '}'
    case 1314053:                   // String '++' '}'
    case 1314054:                   // Integer '++' '}'
    case 1314055:                   // Complex '++' '}'
    case 1314056:                   // Real '++' '}'
    case 1330435:                   // Identifier '++' '~'
    case 1330436:                   // Character '++' '~'
    case 1330437:                   // String '++' '~'
    case 1330438:                   // Integer '++' '~'
    case 1330439:                   // Complex '++' '~'
    case 1330440:                   // Real '++' '~'
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
    case 1003267:                   // Identifier '--' 'f32'
    case 1003268:                   // Character '--' 'f32'
    case 1003269:                   // String '--' 'f32'
    case 1003270:                   // Integer '--' 'f32'
    case 1003271:                   // Complex '--' 'f32'
    case 1003272:                   // Real '--' 'f32'
    case 1019651:                   // Identifier '--' 'f64'
    case 1019652:                   // Character '--' 'f64'
    case 1019653:                   // String '--' 'f64'
    case 1019654:                   // Integer '--' 'f64'
    case 1019655:                   // Complex '--' 'f64'
    case 1019656:                   // Real '--' 'f64'
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
    case 1068803:                   // Identifier '--' 'i32'
    case 1068804:                   // Character '--' 'i32'
    case 1068805:                   // String '--' 'i32'
    case 1068806:                   // Integer '--' 'i32'
    case 1068807:                   // Complex '--' 'i32'
    case 1068808:                   // Real '--' 'i32'
    case 1085187:                   // Identifier '--' 'i64'
    case 1085188:                   // Character '--' 'i64'
    case 1085189:                   // String '--' 'i64'
    case 1085190:                   // Integer '--' 'i64'
    case 1085191:                   // Complex '--' 'i64'
    case 1085192:                   // Real '--' 'i64'
    case 1101571:                   // Identifier '--' 'if'
    case 1101572:                   // Character '--' 'if'
    case 1101573:                   // String '--' 'if'
    case 1101574:                   // Integer '--' 'if'
    case 1101575:                   // Complex '--' 'if'
    case 1101576:                   // Real '--' 'if'
    case 1117955:                   // Identifier '--' 'include'
    case 1117956:                   // Character '--' 'include'
    case 1117957:                   // String '--' 'include'
    case 1117958:                   // Integer '--' 'include'
    case 1117959:                   // Complex '--' 'include'
    case 1117960:                   // Real '--' 'include'
    case 1134339:                   // Identifier '--' 'local'
    case 1134340:                   // Character '--' 'local'
    case 1134341:                   // String '--' 'local'
    case 1134342:                   // Integer '--' 'local'
    case 1134343:                   // Complex '--' 'local'
    case 1134344:                   // Real '--' 'local'
    case 1150723:                   // Identifier '--' 'return'
    case 1150724:                   // Character '--' 'return'
    case 1150725:                   // String '--' 'return'
    case 1150726:                   // Integer '--' 'return'
    case 1150727:                   // Complex '--' 'return'
    case 1150728:                   // Real '--' 'return'
    case 1167107:                   // Identifier '--' 'switch'
    case 1167108:                   // Character '--' 'switch'
    case 1167109:                   // String '--' 'switch'
    case 1167110:                   // Integer '--' 'switch'
    case 1167111:                   // Complex '--' 'switch'
    case 1167112:                   // Real '--' 'switch'
    case 1183491:                   // Identifier '--' 'test'
    case 1183492:                   // Character '--' 'test'
    case 1183493:                   // String '--' 'test'
    case 1183494:                   // Integer '--' 'test'
    case 1183495:                   // Complex '--' 'test'
    case 1183496:                   // Real '--' 'test'
    case 1199875:                   // Identifier '--' 'throw'
    case 1199876:                   // Character '--' 'throw'
    case 1199877:                   // String '--' 'throw'
    case 1199878:                   // Integer '--' 'throw'
    case 1199879:                   // Complex '--' 'throw'
    case 1199880:                   // Real '--' 'throw'
    case 1216259:                   // Identifier '--' 'try'
    case 1216260:                   // Character '--' 'try'
    case 1216261:                   // String '--' 'try'
    case 1216262:                   // Integer '--' 'try'
    case 1216263:                   // Complex '--' 'try'
    case 1216264:                   // Real '--' 'try'
    case 1232643:                   // Identifier '--' 'while'
    case 1232644:                   // Character '--' 'while'
    case 1232645:                   // String '--' 'while'
    case 1232646:                   // Integer '--' 'while'
    case 1232647:                   // Complex '--' 'while'
    case 1232648:                   // Real '--' 'while'
    case 1265411:                   // Identifier '--' '|'
    case 1265412:                   // Character '--' '|'
    case 1265413:                   // String '--' '|'
    case 1265414:                   // Integer '--' '|'
    case 1265415:                   // Complex '--' '|'
    case 1265416:                   // Real '--' '|'
    case 1281795:                   // Identifier '--' '|='
    case 1281796:                   // Character '--' '|='
    case 1281797:                   // String '--' '|='
    case 1281798:                   // Integer '--' '|='
    case 1281799:                   // Complex '--' '|='
    case 1281800:                   // Real '--' '|='
    case 1298179:                   // Identifier '--' '||'
    case 1298180:                   // Character '--' '||'
    case 1298181:                   // String '--' '||'
    case 1298182:                   // Integer '--' '||'
    case 1298183:                   // Complex '--' '||'
    case 1298184:                   // Real '--' '||'
    case 1314563:                   // Identifier '--' '}'
    case 1314564:                   // Character '--' '}'
    case 1314565:                   // String '--' '}'
    case 1314566:                   // Integer '--' '}'
    case 1314567:                   // Complex '--' '}'
    case 1314568:                   // Real '--' '}'
    case 1330947:                   // Identifier '--' '~'
    case 1330948:                   // Character '--' '~'
    case 1330949:                   // String '--' '~'
    case 1330950:                   // Integer '--' '~'
    case 1330951:                   // Complex '--' '~'
    case 1330952:                   // Real '--' '~'
      parse_Primary();
      lookahead1W(6);               // WhiteSpace^token | '--'
      consume(30);                  // '--'
      break;
    case 26:                        // '++'
      consume(26);                  // '++'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 30:                        // '--'
      consume(30);                  // '--'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 25:                        // '+'
      consume(25);                  // '+'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 29:                        // '-'
      consume(29);                  // '-'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 81:                        // '~'
      consume(81);                  // '~'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 12:                        // '!'
      consume(12);                  // '!'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(36);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9748:                    // '(' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1172:                    // '(' Comment
      case 4756:                    // '(' ';'
      case 6932:                    // '(' 'break'
      case 7316:                    // '(' 'continue'
        lookahead3W(4);             // WhiteSpace^token | ')'
        break;
      case 7828:                    // '(' 'f32'
      case 7956:                    // '(' 'f64'
      case 8340:                    // '(' 'i32'
      case 8468:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 532:                     // '(' Character
      case 660:                     // '(' String
      case 788:                     // '(' Integer
      case 916:                     // '(' Complex
      case 1044:                    // '(' Real
        lookahead3W(28);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8852:                    // '(' 'local'
      case 8980:                    // '(' 'return'
      case 9492:                    // '(' 'try'
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(26);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(39);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 9778:                    // '[' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(20);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 7858:                    // '[' 'f32'
      case 7986:                    // '[' 'f64'
      case 8370:                    // '[' 'i32'
      case 8498:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 562:                     // '[' Character
      case 690:                     // '[' String
      case 818:                     // '[' Integer
      case 946:                     // '[' Complex
      case 1074:                    // '[' Real
        lookahead3W(35);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8882:                    // '[' 'local'
      case 9010:                    // '[' 'return'
      case 9522:                    // '[' 'try'
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      }
      break;
    case 76:                        // '{'
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 460:                     // '{' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 716:                     // '{' String
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6476:                    // '{' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9804:                    // '{' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 588:                     // '{' Character
      case 844:                     // '{' Integer
      case 972:                     // '{' Complex
      case 1100:                    // '{' Real
        lookahead3W(32);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1228:                    // '{' Comment
      case 4812:                    // '{' ';'
      case 6988:                    // '{' 'break'
      case 7372:                    // '{' 'continue'
        lookahead3W(18);            // WhiteSpace^token | ',' | '}'
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
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
     && lk != 8323                  // Identifier 'i32'
     && lk != 8324                  // Character 'i32'
     && lk != 8325                  // String 'i32'
     && lk != 8326                  // Integer 'i32'
     && lk != 8327                  // Complex 'i32'
     && lk != 8328                  // Real 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8452                  // Character 'i64'
     && lk != 8453                  // String 'i64'
     && lk != 8454                  // Integer 'i64'
     && lk != 8455                  // Complex 'i64'
     && lk != 8456                  // Real 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8580                  // Character 'if'
     && lk != 8581                  // String 'if'
     && lk != 8582                  // Integer 'if'
     && lk != 8583                  // Complex 'if'
     && lk != 8584                  // Real 'if'
     && lk != 8707                  // Identifier 'include'
     && lk != 8708                  // Character 'include'
     && lk != 8709                  // String 'include'
     && lk != 8710                  // Integer 'include'
     && lk != 8711                  // Complex 'include'
     && lk != 8712                  // Real 'include'
     && lk != 8835                  // Identifier 'local'
     && lk != 8836                  // Character 'local'
     && lk != 8837                  // String 'local'
     && lk != 8838                  // Integer 'local'
     && lk != 8839                  // Complex 'local'
     && lk != 8840                  // Real 'local'
     && lk != 8963                  // Identifier 'return'
     && lk != 8964                  // Character 'return'
     && lk != 8965                  // String 'return'
     && lk != 8966                  // Integer 'return'
     && lk != 8967                  // Complex 'return'
     && lk != 8968                  // Real 'return'
     && lk != 9091                  // Identifier 'switch'
     && lk != 9092                  // Character 'switch'
     && lk != 9093                  // String 'switch'
     && lk != 9094                  // Integer 'switch'
     && lk != 9095                  // Complex 'switch'
     && lk != 9096                  // Real 'switch'
     && lk != 9219                  // Identifier 'test'
     && lk != 9220                  // Character 'test'
     && lk != 9221                  // String 'test'
     && lk != 9222                  // Integer 'test'
     && lk != 9223                  // Complex 'test'
     && lk != 9224                  // Real 'test'
     && lk != 9347                  // Identifier 'throw'
     && lk != 9348                  // Character 'throw'
     && lk != 9349                  // String 'throw'
     && lk != 9350                  // Integer 'throw'
     && lk != 9351                  // Complex 'throw'
     && lk != 9352                  // Real 'throw'
     && lk != 9475                  // Identifier 'try'
     && lk != 9476                  // Character 'try'
     && lk != 9477                  // String 'try'
     && lk != 9478                  // Integer 'try'
     && lk != 9479                  // Complex 'try'
     && lk != 9480                  // Real 'try'
     && lk != 9603                  // Identifier 'while'
     && lk != 9604                  // Character 'while'
     && lk != 9605                  // String 'while'
     && lk != 9606                  // Integer 'while'
     && lk != 9607                  // Complex 'while'
     && lk != 9608                  // Real 'while'
     && lk != 9731                  // Identifier '{'
     && lk != 9732                  // Character '{'
     && lk != 9733                  // String '{'
     && lk != 9734                  // Integer '{'
     && lk != 9735                  // Complex '{'
     && lk != 9736                  // Real '{'
     && lk != 9859                  // Identifier '|'
     && lk != 9860                  // Character '|'
     && lk != 9861                  // String '|'
     && lk != 9862                  // Integer '|'
     && lk != 9863                  // Complex '|'
     && lk != 9864                  // Real '|'
     && lk != 9987                  // Identifier '|='
     && lk != 9988                  // Character '|='
     && lk != 9989                  // String '|='
     && lk != 9990                  // Integer '|='
     && lk != 9991                  // Complex '|='
     && lk != 9992                  // Real '|='
     && lk != 10115                 // Identifier '||'
     && lk != 10116                 // Character '||'
     && lk != 10117                 // String '||'
     && lk != 10118                 // Integer '||'
     && lk != 10119                 // Complex '||'
     && lk != 10120                 // Real '||'
     && lk != 10243                 // Identifier '}'
     && lk != 10244                 // Character '}'
     && lk != 10245                 // String '}'
     && lk != 10246                 // Integer '}'
     && lk != 10247                 // Complex '}'
     && lk != 10248                 // Real '}'
     && lk != 10371                 // Identifier '~'
     && lk != 10372                 // Character '~'
     && lk != 10373                 // String '~'
     && lk != 10374                 // Integer '~'
     && lk != 10375                 // Complex '~'
     && lk != 10376                 // Real '~'
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
     && lk != 55730                 // '[' ']' Identifier
     && lk != 72114                 // '[' ']' Character
     && lk != 88498                 // '[' ']' String
     && lk != 104882                // '[' ']' Integer
     && lk != 121266                // '[' ']' Complex
     && lk != 137650                // '[' ']' Real
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
     && lk != 334258                // '[' ']' '('
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
     && lk != 825778                // '[' ']' '['
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
     && lk != 1002755               // Identifier '++' 'f32'
     && lk != 1002756               // Character '++' 'f32'
     && lk != 1002757               // String '++' 'f32'
     && lk != 1002758               // Integer '++' 'f32'
     && lk != 1002759               // Complex '++' 'f32'
     && lk != 1002760               // Real '++' 'f32'
     && lk != 1003267               // Identifier '--' 'f32'
     && lk != 1003268               // Character '--' 'f32'
     && lk != 1003269               // String '--' 'f32'
     && lk != 1003270               // Integer '--' 'f32'
     && lk != 1003271               // Complex '--' 'f32'
     && lk != 1003272               // Real '--' 'f32'
     && lk != 1006002               // '[' ']' 'f32'
     && lk != 1019139               // Identifier '++' 'f64'
     && lk != 1019140               // Character '++' 'f64'
     && lk != 1019141               // String '++' 'f64'
     && lk != 1019142               // Integer '++' 'f64'
     && lk != 1019143               // Complex '++' 'f64'
     && lk != 1019144               // Real '++' 'f64'
     && lk != 1019651               // Identifier '--' 'f64'
     && lk != 1019652               // Character '--' 'f64'
     && lk != 1019653               // String '--' 'f64'
     && lk != 1019654               // Integer '--' 'f64'
     && lk != 1019655               // Complex '--' 'f64'
     && lk != 1019656               // Real '--' 'f64'
     && lk != 1022386               // '[' ']' 'f64'
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
     && lk != 1068291               // Identifier '++' 'i32'
     && lk != 1068292               // Character '++' 'i32'
     && lk != 1068293               // String '++' 'i32'
     && lk != 1068294               // Integer '++' 'i32'
     && lk != 1068295               // Complex '++' 'i32'
     && lk != 1068296               // Real '++' 'i32'
     && lk != 1068803               // Identifier '--' 'i32'
     && lk != 1068804               // Character '--' 'i32'
     && lk != 1068805               // String '--' 'i32'
     && lk != 1068806               // Integer '--' 'i32'
     && lk != 1068807               // Complex '--' 'i32'
     && lk != 1068808               // Real '--' 'i32'
     && lk != 1071538               // '[' ']' 'i32'
     && lk != 1084675               // Identifier '++' 'i64'
     && lk != 1084676               // Character '++' 'i64'
     && lk != 1084677               // String '++' 'i64'
     && lk != 1084678               // Integer '++' 'i64'
     && lk != 1084679               // Complex '++' 'i64'
     && lk != 1084680               // Real '++' 'i64'
     && lk != 1085187               // Identifier '--' 'i64'
     && lk != 1085188               // Character '--' 'i64'
     && lk != 1085189               // String '--' 'i64'
     && lk != 1085190               // Integer '--' 'i64'
     && lk != 1085191               // Complex '--' 'i64'
     && lk != 1085192               // Real '--' 'i64'
     && lk != 1087922               // '[' ']' 'i64'
     && lk != 1101059               // Identifier '++' 'if'
     && lk != 1101060               // Character '++' 'if'
     && lk != 1101061               // String '++' 'if'
     && lk != 1101062               // Integer '++' 'if'
     && lk != 1101063               // Complex '++' 'if'
     && lk != 1101064               // Real '++' 'if'
     && lk != 1101571               // Identifier '--' 'if'
     && lk != 1101572               // Character '--' 'if'
     && lk != 1101573               // String '--' 'if'
     && lk != 1101574               // Integer '--' 'if'
     && lk != 1101575               // Complex '--' 'if'
     && lk != 1101576               // Real '--' 'if'
     && lk != 1104306               // '[' ']' 'if'
     && lk != 1117443               // Identifier '++' 'include'
     && lk != 1117444               // Character '++' 'include'
     && lk != 1117445               // String '++' 'include'
     && lk != 1117446               // Integer '++' 'include'
     && lk != 1117447               // Complex '++' 'include'
     && lk != 1117448               // Real '++' 'include'
     && lk != 1117955               // Identifier '--' 'include'
     && lk != 1117956               // Character '--' 'include'
     && lk != 1117957               // String '--' 'include'
     && lk != 1117958               // Integer '--' 'include'
     && lk != 1117959               // Complex '--' 'include'
     && lk != 1117960               // Real '--' 'include'
     && lk != 1120690               // '[' ']' 'include'
     && lk != 1133827               // Identifier '++' 'local'
     && lk != 1133828               // Character '++' 'local'
     && lk != 1133829               // String '++' 'local'
     && lk != 1133830               // Integer '++' 'local'
     && lk != 1133831               // Complex '++' 'local'
     && lk != 1133832               // Real '++' 'local'
     && lk != 1134339               // Identifier '--' 'local'
     && lk != 1134340               // Character '--' 'local'
     && lk != 1134341               // String '--' 'local'
     && lk != 1134342               // Integer '--' 'local'
     && lk != 1134343               // Complex '--' 'local'
     && lk != 1134344               // Real '--' 'local'
     && lk != 1137074               // '[' ']' 'local'
     && lk != 1150211               // Identifier '++' 'return'
     && lk != 1150212               // Character '++' 'return'
     && lk != 1150213               // String '++' 'return'
     && lk != 1150214               // Integer '++' 'return'
     && lk != 1150215               // Complex '++' 'return'
     && lk != 1150216               // Real '++' 'return'
     && lk != 1150723               // Identifier '--' 'return'
     && lk != 1150724               // Character '--' 'return'
     && lk != 1150725               // String '--' 'return'
     && lk != 1150726               // Integer '--' 'return'
     && lk != 1150727               // Complex '--' 'return'
     && lk != 1150728               // Real '--' 'return'
     && lk != 1153458               // '[' ']' 'return'
     && lk != 1166595               // Identifier '++' 'switch'
     && lk != 1166596               // Character '++' 'switch'
     && lk != 1166597               // String '++' 'switch'
     && lk != 1166598               // Integer '++' 'switch'
     && lk != 1166599               // Complex '++' 'switch'
     && lk != 1166600               // Real '++' 'switch'
     && lk != 1167107               // Identifier '--' 'switch'
     && lk != 1167108               // Character '--' 'switch'
     && lk != 1167109               // String '--' 'switch'
     && lk != 1167110               // Integer '--' 'switch'
     && lk != 1167111               // Complex '--' 'switch'
     && lk != 1167112               // Real '--' 'switch'
     && lk != 1169842               // '[' ']' 'switch'
     && lk != 1182979               // Identifier '++' 'test'
     && lk != 1182980               // Character '++' 'test'
     && lk != 1182981               // String '++' 'test'
     && lk != 1182982               // Integer '++' 'test'
     && lk != 1182983               // Complex '++' 'test'
     && lk != 1182984               // Real '++' 'test'
     && lk != 1183491               // Identifier '--' 'test'
     && lk != 1183492               // Character '--' 'test'
     && lk != 1183493               // String '--' 'test'
     && lk != 1183494               // Integer '--' 'test'
     && lk != 1183495               // Complex '--' 'test'
     && lk != 1183496               // Real '--' 'test'
     && lk != 1186226               // '[' ']' 'test'
     && lk != 1199363               // Identifier '++' 'throw'
     && lk != 1199364               // Character '++' 'throw'
     && lk != 1199365               // String '++' 'throw'
     && lk != 1199366               // Integer '++' 'throw'
     && lk != 1199367               // Complex '++' 'throw'
     && lk != 1199368               // Real '++' 'throw'
     && lk != 1199875               // Identifier '--' 'throw'
     && lk != 1199876               // Character '--' 'throw'
     && lk != 1199877               // String '--' 'throw'
     && lk != 1199878               // Integer '--' 'throw'
     && lk != 1199879               // Complex '--' 'throw'
     && lk != 1199880               // Real '--' 'throw'
     && lk != 1202610               // '[' ']' 'throw'
     && lk != 1215747               // Identifier '++' 'try'
     && lk != 1215748               // Character '++' 'try'
     && lk != 1215749               // String '++' 'try'
     && lk != 1215750               // Integer '++' 'try'
     && lk != 1215751               // Complex '++' 'try'
     && lk != 1215752               // Real '++' 'try'
     && lk != 1216259               // Identifier '--' 'try'
     && lk != 1216260               // Character '--' 'try'
     && lk != 1216261               // String '--' 'try'
     && lk != 1216262               // Integer '--' 'try'
     && lk != 1216263               // Complex '--' 'try'
     && lk != 1216264               // Real '--' 'try'
     && lk != 1218994               // '[' ']' 'try'
     && lk != 1232131               // Identifier '++' 'while'
     && lk != 1232132               // Character '++' 'while'
     && lk != 1232133               // String '++' 'while'
     && lk != 1232134               // Integer '++' 'while'
     && lk != 1232135               // Complex '++' 'while'
     && lk != 1232136               // Real '++' 'while'
     && lk != 1232643               // Identifier '--' 'while'
     && lk != 1232644               // Character '--' 'while'
     && lk != 1232645               // String '--' 'while'
     && lk != 1232646               // Integer '--' 'while'
     && lk != 1232647               // Complex '--' 'while'
     && lk != 1232648               // Real '--' 'while'
     && lk != 1235378               // '[' ']' 'while'
     && lk != 1251762               // '[' ']' '{'
     && lk != 1264899               // Identifier '++' '|'
     && lk != 1264900               // Character '++' '|'
     && lk != 1264901               // String '++' '|'
     && lk != 1264902               // Integer '++' '|'
     && lk != 1264903               // Complex '++' '|'
     && lk != 1264904               // Real '++' '|'
     && lk != 1265411               // Identifier '--' '|'
     && lk != 1265412               // Character '--' '|'
     && lk != 1265413               // String '--' '|'
     && lk != 1265414               // Integer '--' '|'
     && lk != 1265415               // Complex '--' '|'
     && lk != 1265416               // Real '--' '|'
     && lk != 1268146               // '[' ']' '|'
     && lk != 1281283               // Identifier '++' '|='
     && lk != 1281284               // Character '++' '|='
     && lk != 1281285               // String '++' '|='
     && lk != 1281286               // Integer '++' '|='
     && lk != 1281287               // Complex '++' '|='
     && lk != 1281288               // Real '++' '|='
     && lk != 1281795               // Identifier '--' '|='
     && lk != 1281796               // Character '--' '|='
     && lk != 1281797               // String '--' '|='
     && lk != 1281798               // Integer '--' '|='
     && lk != 1281799               // Complex '--' '|='
     && lk != 1281800               // Real '--' '|='
     && lk != 1284530               // '[' ']' '|='
     && lk != 1297667               // Identifier '++' '||'
     && lk != 1297668               // Character '++' '||'
     && lk != 1297669               // String '++' '||'
     && lk != 1297670               // Integer '++' '||'
     && lk != 1297671               // Complex '++' '||'
     && lk != 1297672               // Real '++' '||'
     && lk != 1298179               // Identifier '--' '||'
     && lk != 1298180               // Character '--' '||'
     && lk != 1298181               // String '--' '||'
     && lk != 1298182               // Integer '--' '||'
     && lk != 1298183               // Complex '--' '||'
     && lk != 1298184               // Real '--' '||'
     && lk != 1300914               // '[' ']' '||'
     && lk != 1314051               // Identifier '++' '}'
     && lk != 1314052               // Character '++' '}'
     && lk != 1314053               // String '++' '}'
     && lk != 1314054               // Integer '++' '}'
     && lk != 1314055               // Complex '++' '}'
     && lk != 1314056               // Real '++' '}'
     && lk != 1314563               // Identifier '--' '}'
     && lk != 1314564               // Character '--' '}'
     && lk != 1314565               // String '--' '}'
     && lk != 1314566               // Integer '--' '}'
     && lk != 1314567               // Complex '--' '}'
     && lk != 1314568               // Real '--' '}'
     && lk != 1317298               // '[' ']' '}'
     && lk != 1330435               // Identifier '++' '~'
     && lk != 1330436               // Character '++' '~'
     && lk != 1330437               // String '++' '~'
     && lk != 1330438               // Integer '++' '~'
     && lk != 1330439               // Complex '++' '~'
     && lk != 1330440               // Real '++' '~'
     && lk != 1330947               // Identifier '--' '~'
     && lk != 1330948               // Character '--' '~'
     && lk != 1330949               // String '--' '~'
     && lk != 1330950               // Integer '--' '~'
     && lk != 1330951               // Complex '--' '~'
     && lk != 1330952               // Real '--' '~'
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
    case 1002755:                   // Identifier '++' 'f32'
    case 1002756:                   // Character '++' 'f32'
    case 1002757:                   // String '++' 'f32'
    case 1002758:                   // Integer '++' 'f32'
    case 1002759:                   // Complex '++' 'f32'
    case 1002760:                   // Real '++' 'f32'
    case 1019139:                   // Identifier '++' 'f64'
    case 1019140:                   // Character '++' 'f64'
    case 1019141:                   // String '++' 'f64'
    case 1019142:                   // Integer '++' 'f64'
    case 1019143:                   // Complex '++' 'f64'
    case 1019144:                   // Real '++' 'f64'
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
    case 1068291:                   // Identifier '++' 'i32'
    case 1068292:                   // Character '++' 'i32'
    case 1068293:                   // String '++' 'i32'
    case 1068294:                   // Integer '++' 'i32'
    case 1068295:                   // Complex '++' 'i32'
    case 1068296:                   // Real '++' 'i32'
    case 1084675:                   // Identifier '++' 'i64'
    case 1084676:                   // Character '++' 'i64'
    case 1084677:                   // String '++' 'i64'
    case 1084678:                   // Integer '++' 'i64'
    case 1084679:                   // Complex '++' 'i64'
    case 1084680:                   // Real '++' 'i64'
    case 1101059:                   // Identifier '++' 'if'
    case 1101060:                   // Character '++' 'if'
    case 1101061:                   // String '++' 'if'
    case 1101062:                   // Integer '++' 'if'
    case 1101063:                   // Complex '++' 'if'
    case 1101064:                   // Real '++' 'if'
    case 1117443:                   // Identifier '++' 'include'
    case 1117444:                   // Character '++' 'include'
    case 1117445:                   // String '++' 'include'
    case 1117446:                   // Integer '++' 'include'
    case 1117447:                   // Complex '++' 'include'
    case 1117448:                   // Real '++' 'include'
    case 1133827:                   // Identifier '++' 'local'
    case 1133828:                   // Character '++' 'local'
    case 1133829:                   // String '++' 'local'
    case 1133830:                   // Integer '++' 'local'
    case 1133831:                   // Complex '++' 'local'
    case 1133832:                   // Real '++' 'local'
    case 1150211:                   // Identifier '++' 'return'
    case 1150212:                   // Character '++' 'return'
    case 1150213:                   // String '++' 'return'
    case 1150214:                   // Integer '++' 'return'
    case 1150215:                   // Complex '++' 'return'
    case 1150216:                   // Real '++' 'return'
    case 1166595:                   // Identifier '++' 'switch'
    case 1166596:                   // Character '++' 'switch'
    case 1166597:                   // String '++' 'switch'
    case 1166598:                   // Integer '++' 'switch'
    case 1166599:                   // Complex '++' 'switch'
    case 1166600:                   // Real '++' 'switch'
    case 1182979:                   // Identifier '++' 'test'
    case 1182980:                   // Character '++' 'test'
    case 1182981:                   // String '++' 'test'
    case 1182982:                   // Integer '++' 'test'
    case 1182983:                   // Complex '++' 'test'
    case 1182984:                   // Real '++' 'test'
    case 1199363:                   // Identifier '++' 'throw'
    case 1199364:                   // Character '++' 'throw'
    case 1199365:                   // String '++' 'throw'
    case 1199366:                   // Integer '++' 'throw'
    case 1199367:                   // Complex '++' 'throw'
    case 1199368:                   // Real '++' 'throw'
    case 1215747:                   // Identifier '++' 'try'
    case 1215748:                   // Character '++' 'try'
    case 1215749:                   // String '++' 'try'
    case 1215750:                   // Integer '++' 'try'
    case 1215751:                   // Complex '++' 'try'
    case 1215752:                   // Real '++' 'try'
    case 1232131:                   // Identifier '++' 'while'
    case 1232132:                   // Character '++' 'while'
    case 1232133:                   // String '++' 'while'
    case 1232134:                   // Integer '++' 'while'
    case 1232135:                   // Complex '++' 'while'
    case 1232136:                   // Real '++' 'while'
    case 1264899:                   // Identifier '++' '|'
    case 1264900:                   // Character '++' '|'
    case 1264901:                   // String '++' '|'
    case 1264902:                   // Integer '++' '|'
    case 1264903:                   // Complex '++' '|'
    case 1264904:                   // Real '++' '|'
    case 1281283:                   // Identifier '++' '|='
    case 1281284:                   // Character '++' '|='
    case 1281285:                   // String '++' '|='
    case 1281286:                   // Integer '++' '|='
    case 1281287:                   // Complex '++' '|='
    case 1281288:                   // Real '++' '|='
    case 1297667:                   // Identifier '++' '||'
    case 1297668:                   // Character '++' '||'
    case 1297669:                   // String '++' '||'
    case 1297670:                   // Integer '++' '||'
    case 1297671:                   // Complex '++' '||'
    case 1297672:                   // Real '++' '||'
    case 1314051:                   // Identifier '++' '}'
    case 1314052:                   // Character '++' '}'
    case 1314053:                   // String '++' '}'
    case 1314054:                   // Integer '++' '}'
    case 1314055:                   // Complex '++' '}'
    case 1314056:                   // Real '++' '}'
    case 1330435:                   // Identifier '++' '~'
    case 1330436:                   // Character '++' '~'
    case 1330437:                   // String '++' '~'
    case 1330438:                   // Integer '++' '~'
    case 1330439:                   // Complex '++' '~'
    case 1330440:                   // Real '++' '~'
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
    case 1003267:                   // Identifier '--' 'f32'
    case 1003268:                   // Character '--' 'f32'
    case 1003269:                   // String '--' 'f32'
    case 1003270:                   // Integer '--' 'f32'
    case 1003271:                   // Complex '--' 'f32'
    case 1003272:                   // Real '--' 'f32'
    case 1019651:                   // Identifier '--' 'f64'
    case 1019652:                   // Character '--' 'f64'
    case 1019653:                   // String '--' 'f64'
    case 1019654:                   // Integer '--' 'f64'
    case 1019655:                   // Complex '--' 'f64'
    case 1019656:                   // Real '--' 'f64'
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
    case 1068803:                   // Identifier '--' 'i32'
    case 1068804:                   // Character '--' 'i32'
    case 1068805:                   // String '--' 'i32'
    case 1068806:                   // Integer '--' 'i32'
    case 1068807:                   // Complex '--' 'i32'
    case 1068808:                   // Real '--' 'i32'
    case 1085187:                   // Identifier '--' 'i64'
    case 1085188:                   // Character '--' 'i64'
    case 1085189:                   // String '--' 'i64'
    case 1085190:                   // Integer '--' 'i64'
    case 1085191:                   // Complex '--' 'i64'
    case 1085192:                   // Real '--' 'i64'
    case 1101571:                   // Identifier '--' 'if'
    case 1101572:                   // Character '--' 'if'
    case 1101573:                   // String '--' 'if'
    case 1101574:                   // Integer '--' 'if'
    case 1101575:                   // Complex '--' 'if'
    case 1101576:                   // Real '--' 'if'
    case 1117955:                   // Identifier '--' 'include'
    case 1117956:                   // Character '--' 'include'
    case 1117957:                   // String '--' 'include'
    case 1117958:                   // Integer '--' 'include'
    case 1117959:                   // Complex '--' 'include'
    case 1117960:                   // Real '--' 'include'
    case 1134339:                   // Identifier '--' 'local'
    case 1134340:                   // Character '--' 'local'
    case 1134341:                   // String '--' 'local'
    case 1134342:                   // Integer '--' 'local'
    case 1134343:                   // Complex '--' 'local'
    case 1134344:                   // Real '--' 'local'
    case 1150723:                   // Identifier '--' 'return'
    case 1150724:                   // Character '--' 'return'
    case 1150725:                   // String '--' 'return'
    case 1150726:                   // Integer '--' 'return'
    case 1150727:                   // Complex '--' 'return'
    case 1150728:                   // Real '--' 'return'
    case 1167107:                   // Identifier '--' 'switch'
    case 1167108:                   // Character '--' 'switch'
    case 1167109:                   // String '--' 'switch'
    case 1167110:                   // Integer '--' 'switch'
    case 1167111:                   // Complex '--' 'switch'
    case 1167112:                   // Real '--' 'switch'
    case 1183491:                   // Identifier '--' 'test'
    case 1183492:                   // Character '--' 'test'
    case 1183493:                   // String '--' 'test'
    case 1183494:                   // Integer '--' 'test'
    case 1183495:                   // Complex '--' 'test'
    case 1183496:                   // Real '--' 'test'
    case 1199875:                   // Identifier '--' 'throw'
    case 1199876:                   // Character '--' 'throw'
    case 1199877:                   // String '--' 'throw'
    case 1199878:                   // Integer '--' 'throw'
    case 1199879:                   // Complex '--' 'throw'
    case 1199880:                   // Real '--' 'throw'
    case 1216259:                   // Identifier '--' 'try'
    case 1216260:                   // Character '--' 'try'
    case 1216261:                   // String '--' 'try'
    case 1216262:                   // Integer '--' 'try'
    case 1216263:                   // Complex '--' 'try'
    case 1216264:                   // Real '--' 'try'
    case 1232643:                   // Identifier '--' 'while'
    case 1232644:                   // Character '--' 'while'
    case 1232645:                   // String '--' 'while'
    case 1232646:                   // Integer '--' 'while'
    case 1232647:                   // Complex '--' 'while'
    case 1232648:                   // Real '--' 'while'
    case 1265411:                   // Identifier '--' '|'
    case 1265412:                   // Character '--' '|'
    case 1265413:                   // String '--' '|'
    case 1265414:                   // Integer '--' '|'
    case 1265415:                   // Complex '--' '|'
    case 1265416:                   // Real '--' '|'
    case 1281795:                   // Identifier '--' '|='
    case 1281796:                   // Character '--' '|='
    case 1281797:                   // String '--' '|='
    case 1281798:                   // Integer '--' '|='
    case 1281799:                   // Complex '--' '|='
    case 1281800:                   // Real '--' '|='
    case 1298179:                   // Identifier '--' '||'
    case 1298180:                   // Character '--' '||'
    case 1298181:                   // String '--' '||'
    case 1298182:                   // Integer '--' '||'
    case 1298183:                   // Complex '--' '||'
    case 1298184:                   // Real '--' '||'
    case 1314563:                   // Identifier '--' '}'
    case 1314564:                   // Character '--' '}'
    case 1314565:                   // String '--' '}'
    case 1314566:                   // Integer '--' '}'
    case 1314567:                   // Complex '--' '}'
    case 1314568:                   // Real '--' '}'
    case 1330947:                   // Identifier '--' '~'
    case 1330948:                   // Character '--' '~'
    case 1330949:                   // String '--' '~'
    case 1330950:                   // Integer '--' '~'
    case 1330951:                   // Complex '--' '~'
    case 1330952:                   // Real '--' '~'
      try_Primary();
      lookahead1W(6);               // WhiteSpace^token | '--'
      consumeT(30);                 // '--'
      break;
    case 26:                        // '++'
      consumeT(26);                 // '++'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 30:                        // '--'
      consumeT(30);                 // '--'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 25:                        // '+'
      consumeT(25);                 // '+'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 29:                        // '-'
      consumeT(29);                 // '-'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 81:                        // '~'
      consumeT(81);                 // '~'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 12:                        // '!'
      consumeT(12);                 // '!'
      lookahead1W(21);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead2W(16);              // WhiteSpace^token | '(' | '{'
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
      lookahead2W(16);              // WhiteSpace^token | '(' | '{'
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consume(75);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(59);                   // 'do'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consumeT(75);                   // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(75);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9788:                    // 'else' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
      case 956:                     // 'else' Complex
      case 1084:                    // 'else' Real
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 9788:                    // 'else' '{'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
      case 956:                     // 'else' Complex
      case 1084:                    // 'else' Real
        lookahead3W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(21);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consume(76);                    // '{'
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
    consume(80);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(71);                   // 'switch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consumeT(76);                   // '{'
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
    consumeT(80);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(55);                    // 'case'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(17);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consume(37);                  // ';'
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(40);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
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
       || lk == 117413              // ';' ')' Complex
       || lk == 133797              // ';' ')' Real
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
      lookahead1W(17);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consume(37);                // ';'
        lookahead1W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(40);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(17);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consumeT(37);                 // ';'
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(40);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
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
       || lk == 117413              // ';' ')' Complex
       || lk == 133797              // ';' ')' Real
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
      lookahead1W(17);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consumeT(37);               // ';'
        lookahead1W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(40);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(14);                // WhiteSpace^token | '{'
    whitespace();
    parse_Block();
    eventHandler.endNonterminal("NamespaceDeclaration", e0);
  }

  function try_NamespaceDeclaration()
  {
    consumeT(3);                    // Identifier
    lookahead1W(14);                // WhiteSpace^token | '{'
    try_Block();
  }

  function parse_FunctionDeclaration()
  {
    eventHandler.startNonterminal("FunctionDeclaration", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
        lookahead1W(3);             // WhiteSpace^token | '('
        consumeT(20);               // '('
        lookahead1W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        try_Arguments();
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead1W(3);           // WhiteSpace^token | '('
          consumeT(20);             // '('
          lookahead1W(23);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
          try_Arguments();
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
            lookahead1W(3);         // WhiteSpace^token | '('
            consumeT(20);           // '('
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
            try_Arguments();
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
              lookahead1W(3);       // WhiteSpace^token | '('
              consumeT(20);         // '('
              lookahead1W(23);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
              try_Arguments();
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
                lookahead1W(3);     // WhiteSpace^token | '('
                consumeT(20);       // '('
                lookahead1W(23);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
                try_Arguments();
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
      memoize(9, e0, lk);
    }
    switch (lk)
    {
    case -1:
      consume(3);                   // Identifier
      lookahead1W(3);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consume(42);                  // '='
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Expression();
      break;
    case -2:
      consume(3);                   // Identifier
      lookahead1W(3);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(11);              // WhiteSpace^token | '?='
      consume(49);                  // '?='
      lookahead1W(14);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -3:
      consume(3);                   // Identifier
      lookahead1W(3);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
      consume(21);                  // ')'
      lookahead1W(2);               // WhiteSpace^token | '#='
      consume(14);                  // '#='
      lookahead1W(14);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -4:
      consume(3);                   // Identifier
      lookahead1W(3);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
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
      lookahead1W(3);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
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
      lookahead1W(3);               // WhiteSpace^token | '('
      consume(20);                  // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Arguments();
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
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(3);             // WhiteSpace^token | '('
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
        lookahead1W(3);             // WhiteSpace^token | '('
        consumeT(20);               // '('
        lookahead1W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
        try_Arguments();
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead1W(3);           // WhiteSpace^token | '('
          consumeT(20);             // '('
          lookahead1W(23);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
          try_Arguments();
          consumeT(21);             // ')'
          lookahead1W(11);          // WhiteSpace^token | '?='
          consumeT(49);             // '?='
          lookahead1W(14);          // WhiteSpace^token | '{'
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
            lookahead1W(3);         // WhiteSpace^token | '('
            consumeT(20);           // '('
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
            try_Arguments();
            consumeT(21);           // ')'
            lookahead1W(2);         // WhiteSpace^token | '#='
            consumeT(14);           // '#='
            lookahead1W(14);        // WhiteSpace^token | '{'
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
              lookahead1W(3);       // WhiteSpace^token | '('
              consumeT(20);         // '('
              lookahead1W(23);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
              try_Arguments();
              consumeT(21);         // ')'
              lookahead1W(8);       // WhiteSpace^token | ':='
              consumeT(36);         // ':='
              lookahead1W(14);      // WhiteSpace^token | '{'
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
                lookahead1W(3);     // WhiteSpace^token | '('
                consumeT(20);       // '('
                lookahead1W(23);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
                try_Arguments();
                consumeT(21);       // ')'
                lookahead1W(14);    // WhiteSpace^token | '{'
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
      lookahead1W(3);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consumeT(42);                 // '='
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Expression();
      break;
    case -2:
      consumeT(3);                  // Identifier
      lookahead1W(3);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(11);              // WhiteSpace^token | '?='
      consumeT(49);                 // '?='
      lookahead1W(14);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -3:
      consumeT(3);                  // Identifier
      lookahead1W(3);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(2);               // WhiteSpace^token | '#='
      consumeT(14);                 // '#='
      lookahead1W(14);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -4:
      consumeT(3);                  // Identifier
      lookahead1W(3);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
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
      lookahead1W(3);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
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
      lookahead1W(3);               // WhiteSpace^token | '('
      consumeT(20);                 // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
      try_Arguments();
      consumeT(21);                 // ')'
      lookahead1W(1);               // Script | WhiteSpace^token
      consumeT(10);                 // Script
    }
  }

  function parse_Return()
  {
    eventHandler.startNonterminal("Return", e0);
    consume(70);                    // 'return'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Include", e0);
  }

  function try_Include()
  {
    consumeT(68);                   // 'include'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_Local()
  {
    eventHandler.startNonterminal("Local", e0);
    consume(69);                    // 'local'
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    if (l1 != 21)                   // ')'
    {
      whitespace();
      parse_Expression();
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Throw", e0);
  }

  function try_Throw()
  {
    consumeT(73);                   // 'throw'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(25);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    if (l1 != 21)                   // ')'
    {
      try_Expression();
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
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
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    for (;;)
    {
      lookahead1W(19);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(37);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
       && lk != 7                   // Complex
       && lk != 8                   // Real
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Expression();
    for (;;)
    {
      lookahead1W(19);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead3W(37);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
       && lk != 7                   // Complex
       && lk != 8                   // Real
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead1W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead1W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead1W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead2W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(39);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(30);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(26);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(44);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 9778:                // '[' '{'
            lookahead3W(27);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(20);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 946:                 // '[' Complex
          case 1074:                // '[' Real
            lookahead3W(35);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
            lookahead3W(21);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
            lookahead3W(3);         // WhiteSpace^token | '('
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
            lookahead3W(23);        // Identifier | Character | String | Integer | Complex | Real | Comment |
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
         && lk != 119474            // '[' ';' Complex
         && lk != 122546            // '[' 'f32' Complex
         && lk != 122674            // '[' 'f64' Complex
         && lk != 123058            // '[' 'i32' Complex
         && lk != 123186            // '[' 'i64' Complex
         && lk != 135858            // '[' ';' Real
         && lk != 138930            // '[' 'f32' Real
         && lk != 139058            // '[' 'f64' Real
         && lk != 139442            // '[' 'i32' Real
         && lk != 139570            // '[' 'i64' Real
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
         && lk != 607154            // '[' Complex ';'
         && lk != 607282            // '[' Real ';'
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
              lookahead1W(26);      // Identifier | Character | String | Integer | Complex | Real | Comment |
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
         || lk == 7                 // Complex
         || lk == 8                 // Real
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
         || lk == 119474            // '[' ';' Complex
         || lk == 135858            // '[' ';' Real
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
         || lk == 607154            // '[' Complex ';'
         || lk == 607282            // '[' Real ';'
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
        lookahead1W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead3W(25);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead1W(25);          // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(25);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead1W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
        lookahead1W(44);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
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
          lookahead2W(26);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(39);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(30);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(26);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(44);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' |
                                    // 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 9778:                // '[' '{'
            lookahead3W(27);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(20);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 562:                 // '[' Character
          case 690:                 // '[' String
          case 818:                 // '[' Integer
          case 946:                 // '[' Complex
          case 1074:                // '[' Real
            lookahead3W(35);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
            lookahead3W(21);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
            lookahead3W(3);         // WhiteSpace^token | '('
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
            lookahead3W(23);        // Identifier | Character | String | Integer | Complex | Real | Comment |
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
         && lk != 119474            // '[' ';' Complex
         && lk != 122546            // '[' 'f32' Complex
         && lk != 122674            // '[' 'f64' Complex
         && lk != 123058            // '[' 'i32' Complex
         && lk != 123186            // '[' 'i64' Complex
         && lk != 135858            // '[' ';' Real
         && lk != 138930            // '[' 'f32' Real
         && lk != 139058            // '[' 'f64' Real
         && lk != 139442            // '[' 'i32' Real
         && lk != 139570            // '[' 'i64' Real
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
         && lk != 607154            // '[' Complex ';'
         && lk != 607282            // '[' Real ';'
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
              lookahead1W(26);      // Identifier | Character | String | Integer | Complex | Real | Comment |
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
         || lk == 7                 // Complex
         || lk == 8                 // Real
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
         || lk == 119474            // '[' ';' Complex
         || lk == 135858            // '[' ';' Real
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
         || lk == 607154            // '[' Complex ';'
         || lk == 607282            // '[' Real ';'
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
        lookahead1W(26);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Element();
    for (;;)
    {
      lookahead1W(18);              // WhiteSpace^token | ',' | '}'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    try_Element();
    for (;;)
    {
      lookahead1W(18);              // WhiteSpace^token | ',' | '}'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(26);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(30);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(30);            // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(38);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(34);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead2W(38);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(34);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(20);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
      lookahead1W(20);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | Comment |
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
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(20);                   // '('
    lookahead1W(23);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' |
                                    // '{' | '~'
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
    case 76:                        // '{'
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
    case 76:                        // '{'
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
  for (var i = 0; i < 82; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 266 + s - 1;
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
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1048, 25, 26, 27, 28,
  /* 29 */ 1053, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 1064, 41, 42, 43, 1068, 1069
];

MaiaScript.TRANSITION =
[
  /*    0 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*   18 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*   36 */ 2208, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316,
  /*   54 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2253, 2253, 2255, 3316, 2271, 3316, 3316, 5712,
  /*   72 */ 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*   90 */ 3316, 3316, 3316, 3316, 3316, 3316, 2253, 2253, 2255, 3316, 3316, 3316, 3316, 5712, 3972, 3316, 5711, 2853,
  /*  108 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  126 */ 3316, 3316, 3316, 5264, 2297, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316,
  /*  144 */ 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2707,
  /*  162 */ 2237, 3316, 2326, 3316, 3316, 3537, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2353, 3316, 3316, 3316,
  /*  180 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 4220, 4953, 2281, 3316, 2271, 3316,
  /*  198 */ 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  216 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 2381, 4164, 4306, 3205, 2363, 3028,
  /*  234 */ 3204, 2365, 3803, 5120, 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  252 */ 3316, 3316, 3316, 3316, 3316, 6038, 2409, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316,
  /*  270 */ 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  288 */ 3316, 2502, 2438, 3316, 2271, 4599, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316,
  /*  306 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2808, 2467, 3316,
  /*  324 */ 5543, 3316, 3316, 3757, 3972, 3316, 5311, 2496, 3316, 4794, 3316, 3316, 2518, 3316, 3316, 3316, 3316, 3316,
  /*  342 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 6081, 2566, 2554, 3316, 2271, 3316, 3316, 5712,
  /*  360 */ 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  378 */ 3316, 3316, 3316, 3316, 3316, 3316, 4439, 2582, 6110, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853,
  /*  396 */ 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  414 */ 3316, 3316, 3316, 3572, 2610, 3316, 2639, 4410, 3971, 5712, 3133, 3316, 5711, 3566, 3316, 3530, 2871, 5581,
  /*  432 */ 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5554, 2835,
  /*  450 */ 2667, 5190, 2696, 5192, 5765, 5712, 3972, 3316, 5711, 3495, 3316, 3963, 5008, 2212, 2228, 3316, 3316, 3316,
  /*  468 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2723, 2739, 3316, 2271, 3316,
  /*  486 */ 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  504 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3750, 4036, 2768, 4223, 2797, 4225, 4062, 5712, 3972, 3316,
  /*  522 */ 5711, 3495, 3316, 3963, 5008, 2212, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  540 */ 3316, 3316, 3316, 3316, 3317, 3316, 5859, 3316, 2824, 3316, 3316, 5712, 2851, 3316, 5711, 2853, 3316, 4403,
  /*  558 */ 3316, 4798, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  576 */ 2869, 3278, 2887, 3316, 2922, 3316, 4590, 5712, 3972, 3316, 5806, 2900, 3316, 3316, 3316, 3316, 2228, 3316,
  /*  594 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2752, 2950, 3806,
  /*  612 */ 2991, 4164, 3019, 3229, 3053, 3028, 3700, 3077, 4009, 3099, 5677, 5882, 3123, 3316, 3316, 3316, 3316, 3316,
  /*  630 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2781, 3157, 3806, 2991, 4164, 3019, 3229,
  /*  648 */ 3053, 3028, 3641, 3198, 6017, 3221, 4888, 5882, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  666 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2781, 3157, 3806, 2991, 4164, 4933, 3229, 3245, 3028, 3641, 3198,
  /*  684 */ 6017, 3221, 4888, 5882, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  702 */ 3316, 3316, 3316, 2781, 3157, 3171, 3294, 3310, 3019, 3229, 3053, 3028, 3641, 3198, 6017, 3221, 4888, 5882,
  /*  720 */ 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2781,
  /*  738 */ 3157, 3806, 2991, 4164, 3333, 3229, 3360, 3028, 3641, 3198, 6017, 3221, 4888, 5882, 3375, 3316, 3316, 3316,
  /*  756 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2781, 3157, 3806, 2991, 4164,
  /*  774 */ 3019, 3229, 3053, 3028, 3641, 3198, 6017, 3221, 5289, 4252, 4571, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  792 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2781, 3157, 3259, 3401, 3417, 3019, 3229, 3053, 3028,
  /*  810 */ 3641, 3198, 6017, 3221, 4888, 5882, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  828 */ 3316, 3316, 3316, 3316, 3316, 2781, 3157, 3806, 2991, 4164, 3019, 3061, 3053, 3028, 3779, 3198, 6017, 3221,
  /*  846 */ 4888, 5882, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  864 */ 4581, 4444, 3439, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316,
  /*  882 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3141, 3468, 3482, 3316,
  /*  900 */ 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316,
  /*  918 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5560, 3517, 3316, 2271, 4751, 3316, 5712,
  /*  936 */ 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  954 */ 3316, 3316, 3316, 3316, 3316, 3316, 4377, 3501, 3553, 5638, 2271, 5375, 3588, 5712, 3972, 3269, 5711, 2853,
  /*  972 */ 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /*  990 */ 3316, 3316, 3316, 2906, 3622, 3316, 2271, 4341, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316,
  /* 1008 */ 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5460, 3423,
  /* 1026 */ 3657, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316,
  /* 1044 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 2271, 3316,
  /* 1062 */ 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1080 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 2381, 4164, 4306, 3205, 4500, 3028,
  /* 1098 */ 3779, 3694, 6017, 3716, 4988, 2538, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1116 */ 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 2381, 4164, 4306, 3205, 4500, 3028, 3779, 3694, 6017, 3716,
  /* 1134 */ 4988, 4295, 3740, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1152 */ 3315, 3182, 3180, 3806, 2381, 4164, 4306, 3205, 4500, 3028, 3779, 3773, 6017, 3795, 4988, 2538, 3375, 3316,
  /* 1170 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806,
  /* 1188 */ 3825, 4164, 4306, 3205, 4001, 3028, 3779, 3694, 6017, 3716, 4988, 2538, 3375, 3316, 3316, 3316, 3316, 3316,
  /* 1206 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 3853, 4164, 4306, 3205,
  /* 1224 */ 6009, 3028, 3204, 2365, 3803, 5120, 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1242 */ 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 2381, 4164, 4306, 3205, 2363, 3028, 3204, 3635,
  /* 1260 */ 3803, 3670, 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1278 */ 3316, 3316, 3315, 3182, 3180, 3806, 3892, 4164, 4306, 4508, 2363, 3028, 3204, 3931, 3803, 5120, 3809, 5226,
  /* 1296 */ 3953, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3452,
  /* 1314 */ 3988, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316,
  /* 1332 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 4025, 3316,
  /* 1350 */ 3316, 5772, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 4052, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1368 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 4094, 4086, 3316, 2271, 3316, 3316, 5712, 3972, 3316,
  /* 1386 */ 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1404 */ 3316, 3316, 3316, 3316, 3316, 5617, 4110, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316,
  /* 1422 */ 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1440 */ 3315, 3182, 3180, 4160, 4147, 4164, 4180, 3205, 4500, 3037, 4205, 4241, 4268, 4284, 4988, 2538, 3375, 3316,
  /* 1458 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 4340, 2594, 4357, 3806,
  /* 1476 */ 2381, 4164, 4306, 3107, 4500, 3028, 3779, 3694, 6017, 3716, 4988, 2538, 4393, 3316, 3316, 3316, 3316, 3316,
  /* 1494 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 4426, 2651, 4460, 3806, 2381, 4164, 4306, 4490,
  /* 1512 */ 4837, 4524, 3779, 3694, 4540, 4556, 4988, 4624, 3740, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1530 */ 3316, 3316, 3316, 3316, 3316, 3316, 4651, 2934, 4669, 3806, 2381, 4164, 4306, 3205, 4500, 3028, 3779, 3694,
  /* 1548 */ 6017, 3716, 3837, 4721, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1566 */ 3316, 3316, 4748, 5952, 4767, 4827, 4814, 5611, 4853, 3205, 4979, 4315, 5912, 4879, 4904, 3795, 4920, 4863,
  /* 1584 */ 4969, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5004, 2310,
  /* 1602 */ 5024, 4943, 3825, 5054, 4635, 3107, 4001, 3606, 3779, 3694, 6017, 3716, 4988, 2538, 4393, 3316, 3316, 3316,
  /* 1620 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 4131, 5076, 5705,
  /* 1638 */ 4306, 3205, 2363, 3028, 3204, 2365, 4324, 5120, 5113, 5170, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1656 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5136, 2422, 5156, 3806, 2381, 4164, 4306, 5940, 2363, 5668,
  /* 1674 */ 3204, 2365, 2393, 5872, 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1692 */ 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 2381, 4164, 4306, 3205, 2363, 3028, 3204, 2365, 3344, 3597,
  /* 1710 */ 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1728 */ 5186, 2451, 5208, 5222, 5242, 4164, 5280, 3205, 4123, 3028, 4781, 5739, 3083, 4070, 5505, 2964, 3375, 3316,
  /* 1746 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 5254,
  /* 1764 */ 2381, 5305, 4732, 3107, 2528, 3028, 3204, 2365, 3803, 5120, 5038, 5327, 4393, 3316, 3316, 3316, 3316, 3316,
  /* 1782 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 5365, 5391, 5407, 5430, 3205,
  /* 1800 */ 2363, 3028, 4705, 3876, 3803, 5120, 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1818 */ 3316, 3316, 3316, 3316, 3316, 3316, 5455, 2480, 5476, 5439, 5492, 5800, 4306, 5528, 3385, 4696, 3204, 2365,
  /* 1836 */ 3678, 5829, 3809, 5226, 4393, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1854 */ 3316, 3316, 5576, 6123, 5597, 3806, 2381, 4164, 2975, 3865, 2363, 4683, 3204, 2365, 3803, 5120, 3809, 5226,
  /* 1872 */ 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5633, 2623,
  /* 1890 */ 5654, 3806, 2381, 4164, 5338, 4474, 2363, 5693, 5728, 3915, 3803, 5120, 3809, 5226, 5755, 3316, 3316, 3316,
  /* 1908 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 3892, 4164,
  /* 1926 */ 4306, 4508, 2363, 3028, 3904, 5788, 5349, 4608, 5822, 3003, 3953, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1944 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5845, 2680, 5898, 5097, 2381, 4371, 4306, 3205, 2363, 3028,
  /* 1962 */ 3204, 2365, 3937, 5512, 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 1980 */ 3316, 3316, 3316, 3316, 3315, 3182, 3180, 3806, 5928, 4164, 4306, 3724, 2363, 3028, 3204, 2365, 3803, 5120,
  /* 1998 */ 3809, 5226, 3375, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 2016 */ 3315, 3182, 3180, 3806, 2381, 4164, 4306, 4189, 2363, 5088, 3204, 2365, 3803, 5120, 3809, 5226, 3375, 3316,
  /* 2034 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 4653, 5980, 5968, 5711,
  /* 2052 */ 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316,
  /* 2070 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5060, 5996, 3316, 2271, 3316, 6033, 5712,
  /* 2088 */ 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 2106 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 6054, 6068, 3316, 2271, 3316, 3316, 5414, 3972, 3316, 5413, 2853,
  /* 2124 */ 3316, 3316, 3316, 3316, 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 2142 */ 3316, 3316, 3316, 2337, 6097, 3316, 2271, 3316, 3316, 5712, 3972, 3316, 5711, 2853, 3316, 3316, 3316, 3316,
  /* 2160 */ 2228, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 5140,
  /* 2178 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316,
  /* 2196 */ 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 3316, 0, 0, 67, 126, 0, 0, 0, 0, 0, 0, 0,
  /* 2219 */ 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 67, 0, 0, 0, 67, 67, 67, 67, 67, 0, 0, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67,
  /* 2250 */ 0, 0, 0, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 6190, 0,
  /* 2270 */ 0, 0, 0, 67, 126, 0, 0, 0, 0, 0, 0, 5195, 0, 0, 0, 0, 0, 0, 5195, 5195, 5195, 5195, 5195, 5195, 0, 0, 0,
  /* 2297 */ 6656, 87, 87, 87, 87, 87, 87, 6656, 6743, 6743, 6743, 6743, 6743, 0, 0, 0, 0, 0, 2100, 2100, 2128, 2128,
  /* 2319 */ 2128, 2128, 0, 2128, 2128, 2128, 0, 0, 0, 3072, 126, 0, 0, 0, 0, 0, 0, 5195, 0, 0, 0, 0, 0, 0, 41984,
  /* 2344 */ 41984, 41984, 41984, 41984, 0, 41984, 41984, 41984, 0, 0, 3139, 126, 0, 0, 3139, 3072, 3072, 3072, 3072, 0,
  /* 2364 */ 0, 0, 0, 0, 0, 0, 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 67, 126, 0, 0, 0,
  /* 2388 */ 0, 0, 0, 5195, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2276, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0,
  /* 2410 */ 8280, 8280, 8280, 8280, 8280, 8280, 0, 8280, 8280, 8280, 8280, 8280, 0, 0, 0, 0, 0, 2101, 2101, 2129, 2129,
  /* 2431 */ 2129, 2129, 0, 2129, 2129, 2129, 0, 0, 9305, 9305, 9305, 9305, 9305, 9305, 0, 9305, 9305, 9305, 9305, 9305,
  /* 2451 */ 0, 0, 0, 0, 0, 2102, 2102, 2130, 2130, 2130, 2130, 0, 2130, 2130, 2130, 0, 68, 0, 0, 0, 0, 0, 0, 68, 68,
  /* 2476 */ 68, 68, 68, 68, 0, 0, 0, 0, 0, 2103, 2103, 2131, 2131, 2131, 2131, 0, 2131, 2131, 2131, 0, 0, 2560, 0, 0,
  /* 2500 */ 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9305, 0, 0, 0, 9305, 0, 67, 2686, 0, 0, 67, 67, 67, 67, 67, 0, 0,
  /* 2530 */ 0, 0, 0, 0, 0, 136, 2095, 2232, 2095, 2095, 2095, 2095, 2095, 2095, 67, 126, 126, 0, 0, 0, 0, 2095, 2095,
  /* 2553 */ 2095, 10752, 0, 0, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 10752, 0, 0, 0, 0, 10752,
  /* 2572 */ 10752, 10752, 10752, 10752, 10752, 0, 10752, 10752, 10752, 0, 0, 11264, 0, 11264, 0, 0, 0, 0, 11264, 0, 0,
  /* 2593 */ 11264, 0, 0, 0, 0, 0, 2096, 2096, 2125, 2125, 2125, 2125, 0, 2125, 2125, 2125, 0, 0, 11866, 11866, 11866,
  /* 2614 */ 11866, 11866, 11866, 0, 11866, 11866, 11866, 11866, 11866, 0, 0, 0, 0, 0, 2105, 2105, 2133, 2133, 2133,
  /* 2633 */ 2133, 0, 2133, 2133, 2133, 0, 0, 0, 67, 126, 0, 0, 0, 0, 0, 0, 5195, 136, 0, 0, 0, 0, 0, 2097, 2097, 2126,
  /* 2659 */ 2126, 2126, 2126, 0, 2126, 2126, 2126, 0, 13385, 13403, 13403, 13403, 13403, 13403, 13403, 13385, 13415,
  /* 2676 */ 13415, 13415, 13415, 13415, 0, 0, 0, 0, 0, 2106, 2106, 2134, 2134, 2134, 2134, 0, 2134, 2134, 2134, 0, 0,
  /* 2697 */ 0, 67, 126, 0, 0, 0, 0, 13824, 0, 5195, 0, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 0, 67, 67, 67, 0, 0, 0,
  /* 2725 */ 14848, 14848, 14848, 0, 0, 0, 0, 0, 0, 0, 0, 14848, 14848, 14848, 0, 14848, 14848, 0, 14848, 14848, 14848,
  /* 2746 */ 14848, 14848, 14848, 14848, 14848, 14848, 0, 0, 0, 0, 0, 3655, 3655, 3655, 3655, 3655, 3655, 0, 3655, 3655,
  /* 2766 */ 3655, 0, 15434, 15452, 15452, 15452, 15452, 15452, 15452, 15434, 15464, 15464, 15464, 15464, 15464, 0, 0,
  /* 2783 */ 0, 0, 0, 3656, 3656, 3656, 3656, 3656, 3656, 0, 3656, 3656, 3656, 0, 0, 0, 67, 126, 128, 128, 0, 0, 128,
  /* 2806 */ 16000, 5195, 0, 0, 0, 0, 0, 68, 68, 68, 68, 68, 68, 0, 68, 68, 68, 0, 0, 0, 67, 126, 0, 0, 131, 131, 0, 0,
  /* 2834 */ 5195, 0, 0, 0, 0, 0, 69, 13385, 13385, 13385, 13385, 13385, 13403, 13385, 13385, 13385, 13403, 180, 131, 0,
  /* 2854 */ 0, 0, 0, 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 0, 76,
  /* 2888 */ 17501, 17501, 17501, 17501, 17501, 17501, 76, 17513, 17513, 17513, 17513, 17513, 0, 0, 0, 0, 0, 5120, 0, 0,
  /* 2908 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 23136, 0, 0, 0, 23136, 0, 0, 67, 126, 0, 0, 0, 0, 0, 0, 5195, 5195, 0, 0, 0, 0,
  /* 2938 */ 0, 2098, 2098, 2127, 2127, 2127, 2127, 0, 2127, 2127, 2127, 0, 3655, 0, 0, 0, 0, 0, 0, 3655, 3655, 3655,
  /* 2960 */ 3655, 3655, 3655, 0, 2095, 2095, 2095, 2095, 2305, 2095, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 0, 0,
  /* 2983 */ 0, 2095, 2207, 2095, 2095, 2207, 2095, 2095, 0, 0, 67, 126, 129, 130, 3656, 3656, 129, 130, 5195, 0, 2095,
  /* 3004 */ 2095, 2095, 2095, 2095, 2207, 0, 0, 0, 0, 0, 0, 0, 2309, 2095, 2095, 0, 0, 2095, 2095, 2095, 2095, 129,
  /* 3026 */ 130, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0,
  /* 3046 */ 2095, 2095, 2095, 2095, 2245, 2095, 2095, 129, 130, 4789, 0, 0, 0, 3719, 136, 2095, 2095, 2095, 2095, 2095,
  /* 3066 */ 2095, 2095, 2095, 2095, 122, 0, 0, 0, 0, 0, 129, 209, 0, 212, 213, 4823, 136, 2095, 2095, 2095, 2095, 2095,
  /* 3088 */ 2095, 2095, 2095, 2095, 2095, 47, 2095, 2095, 0, 0, 0, 234, 235, 236, 212, 213, 0, 4823, 4847, 2095, 2095,
  /* 3109 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 67, 0, 126, 0, 2095, 67, 0, 0, 2095, 67, 264, 265, 67,
  /* 3132 */ 67, 0, 0, 0, 0, 0, 0, 0, 182, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19456, 0, 0, 0, 0, 0, 0, 3656, 0, 0, 0, 0, 0, 0,
  /* 3164 */ 3656, 3656, 3656, 3656, 3656, 3656, 0, 2095, 2095, 2095, 2159, 2159, 2095, 2095, 2095, 2095, 2095, 0, 0, 0,
  /* 3184 */ 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 0, 2095, 2095, 2095, 0, 210, 0, 212, 213, 4823, 136, 2095,
  /* 3205 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 0, 0, 0, 0, 235, 235, 0, 212, 213, 0,
  /* 3227 */ 4823, 4847, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 67, 0, 176, 129, 129, 130,
  /* 3247 */ 4789, 0, 0, 0, 3719, 136, 2095, 2095, 31791, 2095, 2095, 33839, 2095, 2095, 2095, 2160, 2160, 2095, 2095,
  /* 3266 */ 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 20992, 24576, 0, 0, 0, 0, 0, 0, 0, 76, 76, 76, 76, 17501, 76, 76,
  /* 3292 */ 76, 17501, 0, 0, 67, 126, 129, 130, 3656, 3656, 129, 130, 5195, 0, 2095, 2095, 2095, 2187, 2190, 2095,
  /* 3312 */ 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16896, 0, 0, 2095, 2095, 2095,
  /* 3338 */ 2095, 129, 130, 0, 2095, 2095, 2095, 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3357 */ 0, 0, 0, 129, 130, 4789, 0, 0, 0, 3719, 136, 2095, 2095, 2095, 32303, 2095, 2095, 34351, 2095, 67, 0, 0,
  /* 3379 */ 2095, 67, 67, 67, 67, 67, 0, 0, 0, 0, 0, 0, 0, 136, 2095, 2095, 2095, 2095, 32953, 2095, 2095, 2095, 0, 0,
  /* 3403 */ 67, 126, 129, 130, 3656, 3656, 129, 130, 5195, 0, 2095, 2095, 2095, 2188, 2191, 2095, 2095, 2095, 2095,
  /* 3422 */ 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25152, 0, 0, 0, 25152, 0, 18495, 63, 63, 63, 18495, 63, 18432, 63,
  /* 3448 */ 18495, 18495, 18495, 18495, 0, 0, 0, 0, 0, 26112, 26112, 26112, 26112, 26112, 26112, 0, 26112, 26112,
  /* 3466 */ 26112, 0, 0, 19456, 0, 0, 19456, 0, 0, 19456, 19456, 19456, 19456, 0, 19456, 19456, 19456, 0, 19456, 0, 0,
  /* 3487 */ 0, 19456, 19456, 19456, 19456, 19456, 19456, 19456, 0, 0, 0, 0, 69, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3512 */ 22111, 0, 0, 0, 22111, 0, 20062, 20062, 20062, 20062, 20062, 20062, 0, 20062, 20062, 20062, 20062, 20062,
  /* 3530 */ 0, 0, 0, 0, 214, 0, 214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 67, 0, 126, 0, 0, 22111, 22111, 22111,
  /* 3557 */ 22111, 22111, 22111, 0, 22111, 22111, 22111, 22111, 22111, 0, 0, 0, 0, 214, 182, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 3581 */ 0, 0, 11866, 0, 0, 0, 11866, 27648, 40448, 0, 0, 0, 0, 14336, 16384, 17920, 0, 0, 0, 0, 0, 0, 0, 0, 28207,
  /* 3606 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 2095, 2242, 2095, 2095, 2095, 2095, 2095, 0, 23136, 23136,
  /* 3625 */ 23136, 23136, 23136, 23136, 0, 23136, 23136, 23136, 23136, 23136, 0, 0, 0, 0, 216, 136, 2095, 2095, 2095,
  /* 3644 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 208, 67, 176, 0, 25152, 25152, 25152, 25152, 25152,
  /* 3663 */ 25152, 0, 25152, 25152, 25152, 25152, 25152, 0, 0, 0, 0, 237, 0, 216, 0, 2095, 2095, 2095, 2095, 2095,
  /* 3683 */ 2095, 2095, 2095, 2095, 2095, 2095, 2279, 2095, 0, 0, 0, 210, 0, 212, 0, 0, 136, 2095, 2095, 2095, 2095,
  /* 3704 */ 2095, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 207, 67, 176, 235, 235, 0, 212, 0, 0, 0, 0, 2095, 2095,
  /* 3726 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 175, 0, 179, 0, 2095, 67, 0, 126, 2095, 67, 67, 67,
  /* 3748 */ 67, 258, 0, 0, 0, 0, 0, 0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 67, 2560, 126, 0, 210, 0, 212, 0, 216,
  /* 3778 */ 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 208, 67, 0, 235, 235, 0, 212,
  /* 3799 */ 237, 0, 216, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0,
  /* 3820 */ 0, 0, 0, 0, 2095, 0, 0, 67, 126, 0, 0, 3584, 3584, 0, 0, 5195, 0, 2095, 2095, 2095, 2095, 2095, 2207, 2095,
  /* 3844 */ 175, 175, 248, 248, 0, 0, 0, 0, 2095, 0, 0, 67, 126, 0, 0, 3716, 3716, 0, 0, 5195, 0, 2095, 2095, 2095,
  /* 3868 */ 2095, 2095, 2216, 2095, 2095, 2095, 122, 172, 0, 0, 0, 0, 0, 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 3889 */ 2095, 2272, 2095, 0, 0, 67, 126, 0, 0, 3717, 3717, 0, 0, 5195, 0, 2095, 2095, 2095, 2095, 2095, 2252, 2095,
  /* 3911 */ 2095, 2095, 2095, 122, 0, 0, 0, 0, 0, 136, 2095, 2266, 2095, 2095, 2095, 2095, 2271, 37423, 2095, 2095, 0,
  /* 3932 */ 211, 0, 0, 0, 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 47, 0, 0, 0,
  /* 3953 */ 2095, 67, 0, 0, 2095, 263, 67, 67, 67, 67, 0, 0, 0, 0, 0, 0, 69, 238, 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0,
  /* 3983 */ 0, 0, 0, 0, 0, 26112, 0, 0, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 0, 0, 0,
  /* 4004 */ 0, 3584, 0, 3719, 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0,
  /* 4023 */ 232, 233, 0, 0, 125, 127, 0, 0, 0, 0, 0, 0, 5195, 0, 0, 0, 0, 0, 70, 15434, 15434, 15434, 15434, 15434,
  /* 4047 */ 15452, 15434, 15434, 15434, 15452, 0, 262, 178, 0, 0, 262, 125, 125, 125, 125, 0, 0, 0, 0, 0, 0, 128,
  /* 4069 */ 16000, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 35887, 2095, 2095, 2095, 0, 0, 26624, 0, 26624, 0,
  /* 4092 */ 26624, 26624, 0, 0, 0, 26624, 26624, 0, 0, 0, 0, 26624, 0, 0, 0, 26624, 0, 0, 0, 27233, 27233, 27233,
  /* 4114 */ 27233, 27233, 27233, 0, 27233, 27233, 27233, 27233, 27233, 0, 0, 0, 0, 3718, 3584, 0, 136, 2095, 2095,
  /* 4133 */ 2095, 2095, 2095, 2095, 2095, 2095, 2167, 2169, 0, 0, 0, 0, 0, 0, 123, 0, 67, 126, 0, 0, 0, 0, 0, 0, 5195,
  /* 4158 */ 0, 2095, 2155, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4182 */ 2202, 2095, 2204, 2095, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 47, 2095, 122, 0, 0, 0, 0, 0, 0,
  /* 4205 */ 2095, 2248, 2095, 2095, 2251, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 208, 67, 0, 0, 60, 0, 0, 0, 0, 0, 0,
  /* 4229 */ 0, 0, 0, 0, 0, 0, 0, 15872, 0, 0, 0, 0, 210, 0, 212, 0, 0, 136, 2265, 2095, 2095, 2095, 2269, 2095, 2095,
  /* 4254 */ 2095, 2095, 2095, 2095, 67, 126, 126, 260, 252, 252, 4861, 2095, 2095, 2095, 2095, 2274, 2095, 2095, 2095,
  /* 4273 */ 2095, 2095, 2095, 2208, 2095, 2095, 2095, 2095, 0, 233, 233, 235, 235, 0, 212, 0, 0, 0, 0, 2095, 2095,
  /* 4294 */ 2289, 2095, 2095, 2095, 2095, 2095, 2095, 258, 126, 259, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 0, 0, 0, 2095,
  /* 4316 */ 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 2095, 2095, 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095, 2095,
  /* 4335 */ 2095, 2095, 0, 0, 0, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24217, 2125, 0, 0, 0, 0, 0, 0,
  /* 4364 */ 2125, 2125, 2125, 2125, 2125, 2125, 0, 2095, 2095, 2095, 2195, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4387 */ 22016, 0, 0, 0, 0, 0, 2095, 67, 126, 0, 2095, 67, 67, 67, 67, 67, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0,
  /* 4416 */ 0, 0, 0, 12288, 0, 0, 0, 0, 0, 0, 2097, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 11264, 0, 0, 0, 0,
  /* 4448 */ 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 63, 2147, 0, 0, 0, 0, 0, 0, 2149, 2126, 2126, 2126, 2149, 2149, 0, 2095,
  /* 4475 */ 2095, 2095, 2214, 2095, 2095, 2095, 2095, 2095, 122, 0, 0, 67, 0, 126, 0, 2095, 2212, 2213, 2095, 2095,
  /* 4495 */ 2095, 2095, 2095, 2095, 122, 0, 0, 0, 0, 0, 0, 3719, 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 4516 */ 2095, 122, 0, 0, 174, 0, 177, 0, 2235, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0, 2095, 2095, 2095, 2095,
  /* 4537 */ 2095, 2095, 2246, 2095, 2095, 2275, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 233,
  /* 4555 */ 233, 235, 235, 0, 212, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2292, 2095, 67, 0, 0, 2095, 67, 67,
  /* 4578 */ 67, 266, 67, 0, 0, 0, 0, 0, 0, 0, 18432, 63, 0, 0, 0, 0, 0, 0, 0, 0, 5195, 0, 0, 0, 0, 0, 0, 0, 0, 9728, 0,
  /* 4609 */ 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2290, 2095, 2095, 2095, 2095, 2303, 2095, 2095, 2095, 2095, 2095,
  /* 4630 */ 258, 126, 259, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 0, 0, 0, 2095, 2095, 2095, 2210, 2095, 2095, 2095, 2098,
  /* 4652 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39424, 0, 2148, 0, 0, 0, 0, 0, 0, 2148, 2127, 2127, 2127,
  /* 4680 */ 2148, 2148, 0, 2095, 2095, 2095, 2238, 2095, 2095, 2095, 0, 0, 2241, 2095, 2241, 2244, 2095, 2095, 2095,
  /* 4699 */ 2095, 2239, 2095, 2095, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2253, 2095, 122, 0, 0, 0, 0,
  /* 4720 */ 0, 2095, 2304, 2095, 2095, 2095, 2095, 67, 126, 126, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 0, 0, 0, 2095,
  /* 4742 */ 2095, 2209, 2095, 2095, 2095, 2095, 2099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20632, 0, 0, 2099,
  /* 4768 */ 0, 0, 0, 0, 0, 0, 2150, 2099, 2099, 2099, 2150, 2150, 0, 2095, 2095, 2095, 2250, 2095, 2095, 2095, 2095,
  /* 4789 */ 2095, 2207, 122, 0, 206, 0, 0, 0, 2560, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 67, 126, 0,
  /* 4819 */ 0, 0, 0, 0, 0, 5195, 0, 2095, 2095, 2157, 2095, 2095, 2095, 2095, 2164, 2095, 2166, 2095, 0, 0, 0, 0, 0, 0,
  /* 4843 */ 3719, 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2234, 0, 0, 2095, 2203, 2095, 2095, 0, 0, 0, 2206,
  /* 4863 */ 2095, 2095, 2095, 2095, 2095, 2095, 67, 126, 126, 0, 0, 0, 0, 2095, 2095, 35375, 210, 0, 212, 0, 216, 136,
  /* 4885 */ 2095, 2095, 2267, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 175, 175, 248, 248, 0, 252, 4847, 4861, 2095,
  /* 4904 */ 28719, 2095, 2095, 31279, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 38912, 233, 233, 38959,
  /* 4921 */ 2095, 2095, 2095, 2095, 2095, 2095, 175, 175, 248, 248, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 129, 130, 0,
  /* 4942 */ 2095, 2095, 2095, 2095, 2095, 47, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 5195, 5195, 5195,
  /* 4963 */ 5195, 0, 5195, 5195, 5195, 0, 2095, 67, 0, 0, 29743, 67, 67, 67, 67, 67, 0, 0, 0, 0, 0, 0, 3719, 136, 2231,
  /* 4988 */ 2095, 2095, 2095, 2095, 2095, 2095, 2095, 175, 175, 248, 248, 0, 0, 0, 0, 2095, 2100, 0, 0, 0, 0, 0, 0, 0,
  /* 5012 */ 0, 0, 0, 0, 0, 0, 0, 0, 251, 0, 69, 0, 2128, 0, 0, 0, 0, 0, 0, 2128, 2128, 2128, 2128, 2128, 2128, 0, 2095,
  /* 5039 */ 2095, 2095, 2294, 2095, 2095, 47, 0, 0, 0, 0, 0, 0, 0, 0, 2302, 34863, 2095, 2095, 2095, 2095, 2095, 0, 0,
  /* 5062 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 40034, 0, 0, 0, 40034, 0, 124, 67, 126, 0, 0, 0, 0, 0, 0, 5195, 0, 2095, 2095,
  /* 5090 */ 2095, 2095, 2095, 38447, 2095, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2165, 2095, 2095, 0, 0, 0,
  /* 5110 */ 0, 0, 0, 2095, 2095, 29231, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095,
  /* 5133 */ 2095, 2095, 2095, 2101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536, 0, 0, 0, 2129, 0, 0, 0, 0, 0, 0,
  /* 5163 */ 2129, 2129, 2129, 2129, 2129, 2129, 0, 2095, 2095, 2095, 36911, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 2095,
  /* 5184 */ 33327, 2095, 2102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13824, 0, 0, 0, 0, 0, 2130, 0, 0, 0, 0, 0,
  /* 5214 */ 0, 2130, 2130, 2130, 2130, 2130, 2130, 0, 2095, 2095, 2158, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 0, 0,
  /* 5234 */ 0, 0, 0, 0, 0, 2095, 2095, 2095, 0, 0, 67, 126, 0, 0, 3718, 3718, 0, 0, 5195, 0, 2095, 2095, 2095, 2095,
  /* 5258 */ 2162, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 6656, 6656, 6656, 6656, 6656, 87, 6656, 6656, 6656,
  /* 5279 */ 87, 0, 0, 2095, 2095, 2095, 2205, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 247, 175, 249, 248, 0,
  /* 5301 */ 252, 4847, 4861, 2095, 2192, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 0, 0,
  /* 5326 */ 2560, 2095, 2095, 36399, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 0, 0, 0, 2095,
  /* 5348 */ 2208, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2277, 2095, 2278, 2095, 2095, 2095, 0, 0, 0, 2156, 47,
  /* 5367 */ 2095, 2161, 2095, 2163, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 7168, 8704, 10240, 12800, 14336, 16384,
  /* 5387 */ 17920, 21504, 22528, 23552, 0, 0, 67, 126, 0, 0, 0, 0, 0, 0, 5195, 0, 2095, 2186, 30767, 2189, 2095, 2193,
  /* 5409 */ 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 171, 0, 0, 0, 0, 0, 0, 0, 0, 2186, 30767, 2186, 2095,
  /* 5436 */ 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2168, 2095, 0, 0, 0, 0, 0, 0, 2103, 0, 0, 0, 0, 0,
  /* 5461 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 2131, 0, 0, 0, 0, 0, 0, 2131, 2131, 2131, 2131, 2131, 2131,
  /* 5489 */ 0, 2095, 2154, 0, 0, 67, 126, 0, 0, 0, 0, 0, 0, 5195, 0, 2185, 2095, 2095, 2095, 2095, 2216, 2095, 2095, 0,
  /* 5513 */ 0, 0, 0, 0, 0, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 37935, 163, 2095, 2095, 2095, 2095, 2095,
  /* 5534 */ 2217, 2095, 2095, 122, 0, 0, 67, 0, 126, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 5195, 0, 0, 0, 0, 0, 61, 0, 0, 0,
  /* 5563 */ 0, 0, 0, 0, 0, 0, 0, 0, 20062, 0, 0, 0, 20062, 2104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 214,
  /* 5594 */ 0, 0, 0, 2132, 0, 0, 0, 0, 0, 0, 2132, 2132, 2132, 2132, 2132, 2132, 0, 2095, 2095, 2194, 2095, 2196, 2095,
  /* 5617 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27233, 0, 0, 0, 27233, 2105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5649 */ 7680, 0, 0, 18944, 25600, 2133, 0, 0, 0, 0, 0, 0, 2133, 2133, 2133, 2133, 2133, 2133, 0, 2095, 2095, 2237,
  /* 5671 */ 2095, 2095, 2095, 2240, 0, 0, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 175, 175, 248, 248, 250, 252, 4847,
  /* 5691 */ 4861, 2095, 2095, 2236, 2095, 2095, 2095, 2095, 2095, 0, 0, 2208, 2095, 2243, 2095, 2095, 2095, 2095, 2197,
  /* 5710 */ 2199, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 0, 0, 0, 0, 2247, 2095, 2095, 2095, 2095, 2095, 2208, 47,
  /* 5736 */ 2095, 2095, 122, 0, 0, 0, 0, 0, 136, 2095, 2095, 2095, 2268, 2095, 2095, 2095, 2095, 2095, 2273, 30255, 67,
  /* 5757 */ 126, 0, 2095, 67, 67, 67, 67, 67, 0, 0, 0, 0, 0, 0, 13824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 67, 0,
  /* 5786 */ 178, 0, 0, 211, 0, 0, 0, 136, 2095, 2095, 2095, 2095, 2095, 2270, 2095, 2095, 2095, 2095, 2198, 2095, 0, 0,
  /* 5808 */ 0, 0, 0, 0, 0, 0, 0, 0, 5632, 0, 0, 0, 0, 0, 2095, 2293, 2095, 2095, 2095, 2095, 2095, 0, 0, 0, 0, 0, 0, 0,
  /* 5836 */ 0, 2095, 2095, 2095, 2095, 2095, 2291, 2095, 2095, 2106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0,
  /* 5862 */ 16896, 16896, 16896, 16896, 0, 0, 0, 16896, 0, 16896, 0, 0, 0, 0, 0, 4096, 0, 0, 2095, 2288, 2095, 2095,
  /* 5884 */ 2095, 2095, 2095, 2095, 67, 126, 126, 0, 252, 252, 4861, 2095, 2095, 2095, 2134, 0, 0, 0, 0, 0, 0, 2134,
  /* 5906 */ 2134, 2134, 2134, 2134, 2134, 0, 2095, 2095, 2249, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 122, 28672, 0,
  /* 5925 */ 208, 67, 0, 0, 0, 67, 126, 0, 0, 135, 0, 0, 0, 5195, 0, 2095, 2095, 2095, 2095, 2215, 2095, 2095, 2095,
  /* 5948 */ 2218, 122, 0, 173, 0, 0, 0, 0, 0, 2099, 2099, 2099, 2099, 2099, 2099, 0, 2099, 2099, 2099, 0, 39424, 0, 0,
  /* 5971 */ 39424, 39424, 39424, 39424, 39424, 39424, 39424, 39424, 39424, 39424, 0, 0, 0, 0, 39424, 39424, 39424,
  /* 5988 */ 39424, 39424, 39424, 0, 39424, 39424, 39424, 0, 0, 40034, 40034, 40034, 40034, 40034, 40034, 0, 40034,
  /* 6005 */ 40034, 40034, 40034, 40034, 0, 0, 0, 3584, 3716, 0, 0, 136, 2095, 2095, 2095, 2095, 2095, 2095, 2095, 2095,
  /* 6025 */ 2095, 2095, 2095, 2095, 2095, 0, 233, 233, 0, 40960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8280, 0, 0,
  /* 6052 */ 0, 8280, 0, 0, 41472, 0, 0, 0, 0, 0, 0, 0, 41472, 0, 0, 0, 41472, 41472, 0, 0, 0, 41472, 0, 41472, 41472,
  /* 6077 */ 41472, 41472, 41472, 41472, 0, 0, 0, 10752, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10752, 41984, 0, 0, 0, 0, 0,
  /* 6103 */ 0, 41984, 41984, 41984, 41984, 41984, 41984, 0, 0, 0, 11264, 11264, 0, 0, 11264, 0, 0, 0, 11264, 11264, 0,
  /* 6124 */ 0, 0, 0, 0, 2104, 2104, 2132, 2132, 2132, 2132, 0, 2132, 2132, 2132, 0
];

MaiaScript.EXPECTED =
[
  /*   0 */ 200, 207, 210, 211, 203, 215, 222, 226, 218, 230, 234, 237, 395, 395, 302, 244, 346, 250, 254, 395, 395,
  /*  21 */ 264, 268, 381, 393, 272, 284, 395, 395, 395, 240, 348, 276, 279, 395, 395, 395, 396, 394, 395, 395, 395,
  /*  42 */ 239, 296, 290, 283, 395, 395, 395, 395, 395, 295, 289, 470, 395, 395, 395, 285, 288, 471, 395, 286, 291,
  /*  63 */ 300, 287, 306, 308, 381, 317, 314, 260, 372, 375, 321, 325, 329, 333, 337, 381, 381, 381, 381, 439, 381,
  /*  84 */ 381, 389, 344, 381, 381, 310, 458, 352, 246, 381, 381, 381, 381, 380, 381, 381, 389, 356, 381, 381, 340,
  /* 105 */ 366, 381, 381, 381, 379, 381, 381, 391, 381, 432, 387, 381, 381, 381, 381, 389, 381, 444, 400, 381, 381,
  /* 126 */ 421, 445, 381, 419, 445, 420, 381, 381, 381, 381, 461, 463, 359, 362, 405, 407, 411, 415, 418, 381, 381,
  /* 147 */ 381, 381, 442, 381, 381, 382, 425, 430, 381, 381, 369, 381, 381, 381, 381, 381, 401, 381, 381, 381, 381,
  /* 168 */ 436, 426, 257, 381, 381, 381, 381, 381, 443, 381, 381, 449, 455, 381, 381, 381, 442, 381, 381, 383, 451,
  /* 189 */ 443, 381, 381, 381, 467, 381, 381, 383, 381, 381, 381, 2056, 3072, 18432, 1050624, 2099200, 268437504,
  /* 206 */ 270534656, 2099200, 67110912, 1073743872, 2048, 2048, 2048, 2048, 1050624, 268437504, 1051128, 1712331256,
  /* 218 */ 1712331768, -3168256, -3168256, -268457984, 1714428920, 1712331768, 1712331768, -269506560, 1712331772,
  /* 227 */ 1980767224, 1980767224, -3168256, -22528, -2119680, -2119680, 1982864376, -2114568, -2114568, -2114568,
  /* 237 */ -17416, 2048, 8, 8, 1024, 0, 0, 67108864, 1073741824, 0, 0, 4, 0, 128, 384, 448, 448, 67108992, 1073742208,
  /* 256 */ 512, 512, 1024, 2048, 0, 1, 0, 32, 8, 8, 8192, 65536, 786432, 25165824, 201326592, -1073741824, 8, 8,
  /* 274 */ 201326720, -1073741440, 128, 384, 384, 64, 64, 64, 512, 384, 512, 8, 8, 8, 32, 16, 16, 16, 16, 128, 128, 8,
  /* 296 */ 0, 32, 32, 16, 384, 8, 8, 8, 1024, 16384, 8, 32, 32, 32, 0, 0, 4, 896, 1024, 131072, 8388608, 0, 8, 16, 32,
  /* 321 */ -364642272, 3407830, -364642272, -364117984, -364642272, 3407830, -289144800, 3407838, 3932150, 3669975,
  /* 331 */ 4194263, 3669983, 4194295, -3407832, -361234442, -361234434, -361234433, -2, -1, 0, 256, 32768, 8388608,
  /* 344 */ 134217728, -536870912, 0, 0, 32, 16, 16, 128, 41943040, 201326592, 58720256, 268435456, 536870912,
  /* 357 */ 1073741824, 0x80000000, 0, 4096, 135168, 139263, 139263, 204799, 57344, 67108864, 25165824, 268435456, 0,
  /* 370 */ 49152, 0, 0, 524288, 524320, 262144, -364642272, -364642272, -364117984, 0, 8388608, 0, 0, 0, 0, 1, 16,
  /* 387 */ 16777216, 268435456, 0, 0, 4194304, 33554432, 0, 0, 8, 8, 8, 8, 0, 16777216, 0, 0, 0, 2048, 139263, 139263,
  /* 407 */ 204799, 122880, 57344, 61440, 61440, 126976, 61440, 204799, 262143, 262143, 262143, 262143, 0, 0, 0,
  /* 422 */ 33554432, 0, 0, 30, 32, 64, 128, 256, 1792, 2048, 0, 0, 8388608, 67108864, 1, 2, 4, 16, 131072, 8388608, 0,
  /* 443 */ 2048, 0, 0, 0, 67108864, 0, 1, 16, 32, 64, 128, 512, 128, 256, 512, 2048, 57344, 2097152, 0, 2048, 4096, 0,
  /* 465 */ 65536, 0, 1, 16, 64, 128, 128, 384, 384, 8
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

// End
