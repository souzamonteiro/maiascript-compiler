// This file was generated on Tue Nov 1, 2022 20:14 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
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
    lookahead1W(26);                // END | EOF | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(22);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
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
      lookahead2W(43);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8835:                    // Identifier '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 69:                        // '{'
      lookahead2W(25);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 453:                     // '{' Identifier
        lookahead3W(41);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' |
                                    // '|=' | '||' | '}' | '~'
        break;
      case 709:                     // '{' String
        lookahead3W(40);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' |
                                    // '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 6341:                    // '{' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8901:                    // '{' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 581:                     // '{' Character
      case 837:                     // '{' Integer
      case 965:                     // '{' Real
        lookahead3W(39);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | '^' |
                                    // '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' |
                                    // 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 2373:                    // '{' '('
      case 7365:                    // '{' 'do'
      case 8517:                    // '{' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 1093:                    // '{' Comment
      case 4549:                    // '{' ';'
      case 6853:                    // '{' 'break'
      case 7109:                    // '{' 'continue'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 7621:                    // '{' 'f32'
      case 7749:                    // '{' 'f64'
      case 8133:                    // '{' 'i32'
      case 8261:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7877:                    // '{' 'for'
      case 8005:                    // '{' 'foreach'
      case 8389:                    // '{' 'if'
      case 8645:                    // '{' 'switch'
      case 8773:                    // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1477:                    // '{' '!'
      case 3013:                    // '{' '+'
      case 3141:                    // '{' '++'
      case 3525:                    // '{' '-'
      case 3653:                    // '{' '--'
      case 9541:                    // '{' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
     && lk != 8                     // Comment
     && lk != 11                    // '!'
     && lk != 18                    // '('
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 35                    // ';'
     && lk != 49                    // '['
     && lk != 53                    // 'break'
     && lk != 55                    // 'continue'
     && lk != 57                    // 'do'
     && lk != 59                    // 'f32'
     && lk != 60                    // 'f64'
     && lk != 61                    // 'for'
     && lk != 62                    // 'foreach'
     && lk != 63                    // 'i32'
     && lk != 64                    // 'i64'
     && lk != 65                    // 'if'
     && lk != 66                    // 'return'
     && lk != 67                    // 'switch'
     && lk != 68                    // 'while'
     && lk != 74                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Character
     && lk != 643                   // Identifier String
     && lk != 771                   // Identifier Integer
     && lk != 899                   // Identifier Real
     && lk != 1027                  // Identifier Comment
     && lk != 1411                  // Identifier '!'
     && lk != 1539                  // Identifier '!='
     && lk != 1667                  // Identifier '%'
     && lk != 1795                  // Identifier '%='
     && lk != 1923                  // Identifier '&'
     && lk != 2051                  // Identifier '&&'
     && lk != 2179                  // Identifier '&='
     && lk != 2435                  // Identifier ')'
     && lk != 2563                  // Identifier '*'
     && lk != 2691                  // Identifier '**'
     && lk != 2819                  // Identifier '*='
     && lk != 2947                  // Identifier '+'
     && lk != 3075                  // Identifier '++'
     && lk != 3203                  // Identifier '+='
     && lk != 3331                  // Identifier ','
     && lk != 3459                  // Identifier '-'
     && lk != 3587                  // Identifier '--'
     && lk != 3715                  // Identifier '-='
     && lk != 3843                  // Identifier '.'
     && lk != 3971                  // Identifier '/'
     && lk != 4099                  // Identifier '/='
     && lk != 4227                  // Identifier ':'
     && lk != 4355                  // Identifier ':='
     && lk != 4483                  // Identifier ';'
     && lk != 4611                  // Identifier '<'
     && lk != 4739                  // Identifier '<<'
     && lk != 4867                  // Identifier '<<='
     && lk != 4995                  // Identifier '<='
     && lk != 5123                  // Identifier '='
     && lk != 5251                  // Identifier '=='
     && lk != 5507                  // Identifier '>'
     && lk != 5635                  // Identifier '>='
     && lk != 5763                  // Identifier '>>'
     && lk != 5891                  // Identifier '>>='
     && lk != 6019                  // Identifier '?'
     && lk != 6147                  // Identifier '?='
     && lk != 6275                  // Identifier '['
     && lk != 6403                  // Identifier ']'
     && lk != 6531                  // Identifier '^'
     && lk != 6659                  // Identifier '^='
     && lk != 6787                  // Identifier 'break'
     && lk != 6915                  // Identifier 'case'
     && lk != 7043                  // Identifier 'continue'
     && lk != 7171                  // Identifier 'default'
     && lk != 7299                  // Identifier 'do'
     && lk != 7427                  // Identifier 'else'
     && lk != 7555                  // Identifier 'f32'
     && lk != 7683                  // Identifier 'f64'
     && lk != 7811                  // Identifier 'for'
     && lk != 7939                  // Identifier 'foreach'
     && lk != 8067                  // Identifier 'i32'
     && lk != 8195                  // Identifier 'i64'
     && lk != 8323                  // Identifier 'if'
     && lk != 8451                  // Identifier 'return'
     && lk != 8579                  // Identifier 'switch'
     && lk != 8707                  // Identifier 'while'
     && lk != 8963                  // Identifier '|'
     && lk != 9091                  // Identifier '|='
     && lk != 9219                  // Identifier '||'
     && lk != 9347                  // Identifier '}'
     && lk != 9413                  // '{' '}'
     && lk != 9475                  // Identifier '~'
     && lk != 49605                 // '{' Identifier Identifier
     && lk != 49733                 // '{' Character Identifier
     && lk != 49861                 // '{' String Identifier
     && lk != 49989                 // '{' Integer Identifier
     && lk != 50117                 // '{' Real Identifier
     && lk != 50245                 // '{' Comment Identifier
     && lk != 53701                 // '{' ';' Identifier
     && lk != 56005                 // '{' 'break' Identifier
     && lk != 56261                 // '{' 'continue' Identifier
     && lk != 65989                 // '{' Identifier Character
     && lk != 66117                 // '{' Character Character
     && lk != 66245                 // '{' String Character
     && lk != 66373                 // '{' Integer Character
     && lk != 66501                 // '{' Real Character
     && lk != 66629                 // '{' Comment Character
     && lk != 70085                 // '{' ';' Character
     && lk != 72389                 // '{' 'break' Character
     && lk != 72645                 // '{' 'continue' Character
     && lk != 82373                 // '{' Identifier String
     && lk != 82501                 // '{' Character String
     && lk != 82629                 // '{' String String
     && lk != 82757                 // '{' Integer String
     && lk != 82885                 // '{' Real String
     && lk != 83013                 // '{' Comment String
     && lk != 86469                 // '{' ';' String
     && lk != 88773                 // '{' 'break' String
     && lk != 89029                 // '{' 'continue' String
     && lk != 98757                 // '{' Identifier Integer
     && lk != 98885                 // '{' Character Integer
     && lk != 99013                 // '{' String Integer
     && lk != 99141                 // '{' Integer Integer
     && lk != 99269                 // '{' Real Integer
     && lk != 99397                 // '{' Comment Integer
     && lk != 102853                // '{' ';' Integer
     && lk != 105157                // '{' 'break' Integer
     && lk != 105413                // '{' 'continue' Integer
     && lk != 115141                // '{' Identifier Real
     && lk != 115269                // '{' Character Real
     && lk != 115397                // '{' String Real
     && lk != 115525                // '{' Integer Real
     && lk != 115653                // '{' Real Real
     && lk != 115781                // '{' Comment Real
     && lk != 119237                // '{' ';' Real
     && lk != 121541                // '{' 'break' Real
     && lk != 121797                // '{' 'continue' Real
     && lk != 131525                // '{' Identifier Comment
     && lk != 131653                // '{' Character Comment
     && lk != 131781                // '{' String Comment
     && lk != 131909                // '{' Integer Comment
     && lk != 132037                // '{' Real Comment
     && lk != 132165                // '{' Comment Comment
     && lk != 135621                // '{' ';' Comment
     && lk != 137925                // '{' 'break' Comment
     && lk != 138181                // '{' 'continue' Comment
     && lk != 180677                // '{' Identifier '!'
     && lk != 180805                // '{' Character '!'
     && lk != 180933                // '{' String '!'
     && lk != 181061                // '{' Integer '!'
     && lk != 181189                // '{' Real '!'
     && lk != 181317                // '{' Comment '!'
     && lk != 184773                // '{' ';' '!'
     && lk != 187077                // '{' 'break' '!'
     && lk != 187333                // '{' 'continue' '!'
     && lk != 295493                // '{' Character '('
     && lk != 295621                // '{' String '('
     && lk != 295749                // '{' Integer '('
     && lk != 295877                // '{' Real '('
     && lk != 296005                // '{' Comment '('
     && lk != 299461                // '{' ';' '('
     && lk != 301765                // '{' 'break' '('
     && lk != 302021                // '{' 'continue' '('
     && lk != 313603                // Identifier '(' ')'
     && lk != 377925                // '{' Comment '+'
     && lk != 381381                // '{' ';' '+'
     && lk != 383685                // '{' 'break' '+'
     && lk != 383941                // '{' 'continue' '+'
     && lk != 394309                // '{' Comment '++'
     && lk != 397765                // '{' ';' '++'
     && lk != 400069                // '{' 'break' '++'
     && lk != 400325                // '{' 'continue' '++'
     && lk != 426437                // '{' Identifier ','
     && lk != 426565                // '{' Character ','
     && lk != 426693                // '{' String ','
     && lk != 426821                // '{' Integer ','
     && lk != 426949                // '{' Real ','
     && lk != 427077                // '{' Comment ','
     && lk != 430533                // '{' ';' ','
     && lk != 432837                // '{' 'break' ','
     && lk != 433093                // '{' 'continue' ','
     && lk != 443461                // '{' Comment '-'
     && lk != 446917                // '{' ';' '-'
     && lk != 449221                // '{' 'break' '-'
     && lk != 449477                // '{' 'continue' '-'
     && lk != 459845                // '{' Comment '--'
     && lk != 463301                // '{' ';' '--'
     && lk != 465605                // '{' 'break' '--'
     && lk != 465861                // '{' 'continue' '--'
     && lk != 541125                // '{' Identifier ':'
     && lk != 541381                // '{' String ':'
     && lk != 573893                // '{' Identifier ';'
     && lk != 574021                // '{' Character ';'
     && lk != 574149                // '{' String ';'
     && lk != 574277                // '{' Integer ';'
     && lk != 574405                // '{' Real ';'
     && lk != 574533                // '{' Comment ';'
     && lk != 577989                // '{' ';' ';'
     && lk != 580293                // '{' 'break' ';'
     && lk != 580549                // '{' 'continue' ';'
     && lk != 803397                // '{' Character '['
     && lk != 803525                // '{' String '['
     && lk != 803653                // '{' Integer '['
     && lk != 803781                // '{' Real '['
     && lk != 803909                // '{' Comment '['
     && lk != 807365                // '{' ';' '['
     && lk != 809669                // '{' 'break' '['
     && lk != 809925                // '{' 'continue' '['
     && lk != 868805                // '{' Identifier 'break'
     && lk != 868933                // '{' Character 'break'
     && lk != 869061                // '{' String 'break'
     && lk != 869189                // '{' Integer 'break'
     && lk != 869317                // '{' Real 'break'
     && lk != 869445                // '{' Comment 'break'
     && lk != 872901                // '{' ';' 'break'
     && lk != 875205                // '{' 'break' 'break'
     && lk != 875461                // '{' 'continue' 'break'
     && lk != 901573                // '{' Identifier 'continue'
     && lk != 901701                // '{' Character 'continue'
     && lk != 901829                // '{' String 'continue'
     && lk != 901957                // '{' Integer 'continue'
     && lk != 902085                // '{' Real 'continue'
     && lk != 902213                // '{' Comment 'continue'
     && lk != 905669                // '{' ';' 'continue'
     && lk != 907973                // '{' 'break' 'continue'
     && lk != 908229                // '{' 'continue' 'continue'
     && lk != 934341                // '{' Identifier 'do'
     && lk != 934469                // '{' Character 'do'
     && lk != 934597                // '{' String 'do'
     && lk != 934725                // '{' Integer 'do'
     && lk != 934853                // '{' Real 'do'
     && lk != 934981                // '{' Comment 'do'
     && lk != 938437                // '{' ';' 'do'
     && lk != 940741                // '{' 'break' 'do'
     && lk != 940997                // '{' 'continue' 'do'
     && lk != 967109                // '{' Identifier 'f32'
     && lk != 967237                // '{' Character 'f32'
     && lk != 967365                // '{' String 'f32'
     && lk != 967493                // '{' Integer 'f32'
     && lk != 967621                // '{' Real 'f32'
     && lk != 967749                // '{' Comment 'f32'
     && lk != 971205                // '{' ';' 'f32'
     && lk != 973509                // '{' 'break' 'f32'
     && lk != 973765                // '{' 'continue' 'f32'
     && lk != 983493                // '{' Identifier 'f64'
     && lk != 983621                // '{' Character 'f64'
     && lk != 983749                // '{' String 'f64'
     && lk != 983877                // '{' Integer 'f64'
     && lk != 984005                // '{' Real 'f64'
     && lk != 984133                // '{' Comment 'f64'
     && lk != 987589                // '{' ';' 'f64'
     && lk != 989893                // '{' 'break' 'f64'
     && lk != 990149                // '{' 'continue' 'f64'
     && lk != 999877                // '{' Identifier 'for'
     && lk != 1000005               // '{' Character 'for'
     && lk != 1000133               // '{' String 'for'
     && lk != 1000261               // '{' Integer 'for'
     && lk != 1000389               // '{' Real 'for'
     && lk != 1000517               // '{' Comment 'for'
     && lk != 1003973               // '{' ';' 'for'
     && lk != 1006277               // '{' 'break' 'for'
     && lk != 1006533               // '{' 'continue' 'for'
     && lk != 1016261               // '{' Identifier 'foreach'
     && lk != 1016389               // '{' Character 'foreach'
     && lk != 1016517               // '{' String 'foreach'
     && lk != 1016645               // '{' Integer 'foreach'
     && lk != 1016773               // '{' Real 'foreach'
     && lk != 1016901               // '{' Comment 'foreach'
     && lk != 1020357               // '{' ';' 'foreach'
     && lk != 1022661               // '{' 'break' 'foreach'
     && lk != 1022917               // '{' 'continue' 'foreach'
     && lk != 1032645               // '{' Identifier 'i32'
     && lk != 1032773               // '{' Character 'i32'
     && lk != 1032901               // '{' String 'i32'
     && lk != 1033029               // '{' Integer 'i32'
     && lk != 1033157               // '{' Real 'i32'
     && lk != 1033285               // '{' Comment 'i32'
     && lk != 1036741               // '{' ';' 'i32'
     && lk != 1039045               // '{' 'break' 'i32'
     && lk != 1039301               // '{' 'continue' 'i32'
     && lk != 1049029               // '{' Identifier 'i64'
     && lk != 1049157               // '{' Character 'i64'
     && lk != 1049285               // '{' String 'i64'
     && lk != 1049413               // '{' Integer 'i64'
     && lk != 1049541               // '{' Real 'i64'
     && lk != 1049669               // '{' Comment 'i64'
     && lk != 1053125               // '{' ';' 'i64'
     && lk != 1055429               // '{' 'break' 'i64'
     && lk != 1055685               // '{' 'continue' 'i64'
     && lk != 1065413               // '{' Identifier 'if'
     && lk != 1065541               // '{' Character 'if'
     && lk != 1065669               // '{' String 'if'
     && lk != 1065797               // '{' Integer 'if'
     && lk != 1065925               // '{' Real 'if'
     && lk != 1066053               // '{' Comment 'if'
     && lk != 1069509               // '{' ';' 'if'
     && lk != 1071813               // '{' 'break' 'if'
     && lk != 1072069               // '{' 'continue' 'if'
     && lk != 1081797               // '{' Identifier 'return'
     && lk != 1081925               // '{' Character 'return'
     && lk != 1082053               // '{' String 'return'
     && lk != 1082181               // '{' Integer 'return'
     && lk != 1082309               // '{' Real 'return'
     && lk != 1082437               // '{' Comment 'return'
     && lk != 1085893               // '{' ';' 'return'
     && lk != 1088197               // '{' 'break' 'return'
     && lk != 1088453               // '{' 'continue' 'return'
     && lk != 1098181               // '{' Identifier 'switch'
     && lk != 1098309               // '{' Character 'switch'
     && lk != 1098437               // '{' String 'switch'
     && lk != 1098565               // '{' Integer 'switch'
     && lk != 1098693               // '{' Real 'switch'
     && lk != 1098821               // '{' Comment 'switch'
     && lk != 1102277               // '{' ';' 'switch'
     && lk != 1104581               // '{' 'break' 'switch'
     && lk != 1104837               // '{' 'continue' 'switch'
     && lk != 1114565               // '{' Identifier 'while'
     && lk != 1114693               // '{' Character 'while'
     && lk != 1114821               // '{' String 'while'
     && lk != 1114949               // '{' Integer 'while'
     && lk != 1115077               // '{' Real 'while'
     && lk != 1115205               // '{' Comment 'while'
     && lk != 1118661               // '{' ';' 'while'
     && lk != 1120965               // '{' 'break' 'while'
     && lk != 1121221               // '{' 'continue' 'while'
     && lk != 1131077               // '{' Character '{'
     && lk != 1131205               // '{' String '{'
     && lk != 1131333               // '{' Integer '{'
     && lk != 1131461               // '{' Real '{'
     && lk != 1131589               // '{' Comment '{'
     && lk != 1135045               // '{' ';' '{'
     && lk != 1137349               // '{' 'break' '{'
     && lk != 1137605               // '{' 'continue' '{'
     && lk != 1212869               // '{' Identifier '~'
     && lk != 1212997               // '{' Character '~'
     && lk != 1213125               // '{' String '~'
     && lk != 1213253               // '{' Integer '~'
     && lk != 1213381               // '{' Real '~'
     && lk != 1213509               // '{' Comment '~'
     && lk != 1216965               // '{' ';' '~'
     && lk != 1219269               // '{' 'break' '~'
     && lk != 1219525)              // '{' 'continue' '~'
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
    case 8:                         // Comment
      consume(8);                   // Comment
      break;
    case -3:
    case 35:                        // ';'
    case 53:                        // 'break'
    case 55:                        // 'continue'
    case 57:                        // 'do'
    case 59:                        // 'f32'
    case 60:                        // 'f64'
    case 61:                        // 'for'
    case 62:                        // 'foreach'
    case 63:                        // 'i32'
    case 64:                        // 'i64'
    case 65:                        // 'if'
    case 66:                        // 'return'
    case 67:                        // 'switch'
    case 68:                        // 'while'
      parse_Statement();
      break;
    case -4:
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
    case 11:                        // '!'
    case 18:                        // '('
    case 23:                        // '+'
    case 24:                        // '++'
    case 27:                        // '-'
    case 28:                        // '--'
    case 49:                        // '['
    case 74:                        // '~'
    case 131:                       // Identifier END
    case 387:                       // Identifier Identifier
    case 515:                       // Identifier Character
    case 643:                       // Identifier String
    case 771:                       // Identifier Integer
    case 899:                       // Identifier Real
    case 1027:                      // Identifier Comment
    case 1411:                      // Identifier '!'
    case 1539:                      // Identifier '!='
    case 1667:                      // Identifier '%'
    case 1795:                      // Identifier '%='
    case 1923:                      // Identifier '&'
    case 2051:                      // Identifier '&&'
    case 2179:                      // Identifier '&='
    case 2435:                      // Identifier ')'
    case 2563:                      // Identifier '*'
    case 2691:                      // Identifier '**'
    case 2819:                      // Identifier '*='
    case 2947:                      // Identifier '+'
    case 3075:                      // Identifier '++'
    case 3203:                      // Identifier '+='
    case 3331:                      // Identifier ','
    case 3459:                      // Identifier '-'
    case 3587:                      // Identifier '--'
    case 3715:                      // Identifier '-='
    case 3843:                      // Identifier '.'
    case 3971:                      // Identifier '/'
    case 4099:                      // Identifier '/='
    case 4227:                      // Identifier ':'
    case 4355:                      // Identifier ':='
    case 4483:                      // Identifier ';'
    case 4611:                      // Identifier '<'
    case 4739:                      // Identifier '<<'
    case 4867:                      // Identifier '<<='
    case 4995:                      // Identifier '<='
    case 5123:                      // Identifier '='
    case 5251:                      // Identifier '=='
    case 5507:                      // Identifier '>'
    case 5635:                      // Identifier '>='
    case 5763:                      // Identifier '>>'
    case 5891:                      // Identifier '>>='
    case 6019:                      // Identifier '?'
    case 6147:                      // Identifier '?='
    case 6275:                      // Identifier '['
    case 6403:                      // Identifier ']'
    case 6531:                      // Identifier '^'
    case 6659:                      // Identifier '^='
    case 6787:                      // Identifier 'break'
    case 6915:                      // Identifier 'case'
    case 7043:                      // Identifier 'continue'
    case 7171:                      // Identifier 'default'
    case 7299:                      // Identifier 'do'
    case 7427:                      // Identifier 'else'
    case 7555:                      // Identifier 'f32'
    case 7683:                      // Identifier 'f64'
    case 7811:                      // Identifier 'for'
    case 7939:                      // Identifier 'foreach'
    case 8067:                      // Identifier 'i32'
    case 8195:                      // Identifier 'i64'
    case 8323:                      // Identifier 'if'
    case 8451:                      // Identifier 'return'
    case 8579:                      // Identifier 'switch'
    case 8707:                      // Identifier 'while'
    case 8963:                      // Identifier '|'
    case 9091:                      // Identifier '|='
    case 9219:                      // Identifier '||'
    case 9347:                      // Identifier '}'
    case 9475:                      // Identifier '~'
    case 313603:                    // Identifier '(' ')'
    case 426437:                    // '{' Identifier ','
    case 426565:                    // '{' Character ','
    case 426693:                    // '{' String ','
    case 426821:                    // '{' Integer ','
    case 426949:                    // '{' Real ','
    case 427077:                    // '{' Comment ','
    case 430533:                    // '{' ';' ','
    case 432837:                    // '{' 'break' ','
    case 433093:                    // '{' 'continue' ','
    case 541125:                    // '{' Identifier ':'
    case 541381:                    // '{' String ':'
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
      lookahead2W(43);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8835:                    // Identifier '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 69:                        // '{'
      lookahead2W(25);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 453:                     // '{' Identifier
        lookahead3W(41);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' |
                                    // '|=' | '||' | '}' | '~'
        break;
      case 709:                     // '{' String
        lookahead3W(40);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' |
                                    // '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 6341:                    // '{' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8901:                    // '{' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 581:                     // '{' Character
      case 837:                     // '{' Integer
      case 965:                     // '{' Real
        lookahead3W(39);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '[' | '^' |
                                    // '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' |
                                    // 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 2373:                    // '{' '('
      case 7365:                    // '{' 'do'
      case 8517:                    // '{' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 1093:                    // '{' Comment
      case 4549:                    // '{' ';'
      case 6853:                    // '{' 'break'
      case 7109:                    // '{' 'continue'
        lookahead3W(28);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 7621:                    // '{' 'f32'
      case 7749:                    // '{' 'f64'
      case 8133:                    // '{' 'i32'
      case 8261:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7877:                    // '{' 'for'
      case 8005:                    // '{' 'foreach'
      case 8389:                    // '{' 'if'
      case 8645:                    // '{' 'switch'
      case 8773:                    // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1477:                    // '{' '!'
      case 3013:                    // '{' '+'
      case 3141:                    // '{' '++'
      case 3525:                    // '{' '-'
      case 3653:                    // '{' '--'
      case 9541:                    // '{' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
     && lk != 8                     // Comment
     && lk != 11                    // '!'
     && lk != 18                    // '('
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 35                    // ';'
     && lk != 49                    // '['
     && lk != 53                    // 'break'
     && lk != 55                    // 'continue'
     && lk != 57                    // 'do'
     && lk != 59                    // 'f32'
     && lk != 60                    // 'f64'
     && lk != 61                    // 'for'
     && lk != 62                    // 'foreach'
     && lk != 63                    // 'i32'
     && lk != 64                    // 'i64'
     && lk != 65                    // 'if'
     && lk != 66                    // 'return'
     && lk != 67                    // 'switch'
     && lk != 68                    // 'while'
     && lk != 74                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Character
     && lk != 643                   // Identifier String
     && lk != 771                   // Identifier Integer
     && lk != 899                   // Identifier Real
     && lk != 1027                  // Identifier Comment
     && lk != 1411                  // Identifier '!'
     && lk != 1539                  // Identifier '!='
     && lk != 1667                  // Identifier '%'
     && lk != 1795                  // Identifier '%='
     && lk != 1923                  // Identifier '&'
     && lk != 2051                  // Identifier '&&'
     && lk != 2179                  // Identifier '&='
     && lk != 2435                  // Identifier ')'
     && lk != 2563                  // Identifier '*'
     && lk != 2691                  // Identifier '**'
     && lk != 2819                  // Identifier '*='
     && lk != 2947                  // Identifier '+'
     && lk != 3075                  // Identifier '++'
     && lk != 3203                  // Identifier '+='
     && lk != 3331                  // Identifier ','
     && lk != 3459                  // Identifier '-'
     && lk != 3587                  // Identifier '--'
     && lk != 3715                  // Identifier '-='
     && lk != 3843                  // Identifier '.'
     && lk != 3971                  // Identifier '/'
     && lk != 4099                  // Identifier '/='
     && lk != 4227                  // Identifier ':'
     && lk != 4355                  // Identifier ':='
     && lk != 4483                  // Identifier ';'
     && lk != 4611                  // Identifier '<'
     && lk != 4739                  // Identifier '<<'
     && lk != 4867                  // Identifier '<<='
     && lk != 4995                  // Identifier '<='
     && lk != 5123                  // Identifier '='
     && lk != 5251                  // Identifier '=='
     && lk != 5507                  // Identifier '>'
     && lk != 5635                  // Identifier '>='
     && lk != 5763                  // Identifier '>>'
     && lk != 5891                  // Identifier '>>='
     && lk != 6019                  // Identifier '?'
     && lk != 6147                  // Identifier '?='
     && lk != 6275                  // Identifier '['
     && lk != 6403                  // Identifier ']'
     && lk != 6531                  // Identifier '^'
     && lk != 6659                  // Identifier '^='
     && lk != 6787                  // Identifier 'break'
     && lk != 6915                  // Identifier 'case'
     && lk != 7043                  // Identifier 'continue'
     && lk != 7171                  // Identifier 'default'
     && lk != 7299                  // Identifier 'do'
     && lk != 7427                  // Identifier 'else'
     && lk != 7555                  // Identifier 'f32'
     && lk != 7683                  // Identifier 'f64'
     && lk != 7811                  // Identifier 'for'
     && lk != 7939                  // Identifier 'foreach'
     && lk != 8067                  // Identifier 'i32'
     && lk != 8195                  // Identifier 'i64'
     && lk != 8323                  // Identifier 'if'
     && lk != 8451                  // Identifier 'return'
     && lk != 8579                  // Identifier 'switch'
     && lk != 8707                  // Identifier 'while'
     && lk != 8963                  // Identifier '|'
     && lk != 9091                  // Identifier '|='
     && lk != 9219                  // Identifier '||'
     && lk != 9347                  // Identifier '}'
     && lk != 9413                  // '{' '}'
     && lk != 9475                  // Identifier '~'
     && lk != 49605                 // '{' Identifier Identifier
     && lk != 49733                 // '{' Character Identifier
     && lk != 49861                 // '{' String Identifier
     && lk != 49989                 // '{' Integer Identifier
     && lk != 50117                 // '{' Real Identifier
     && lk != 50245                 // '{' Comment Identifier
     && lk != 53701                 // '{' ';' Identifier
     && lk != 56005                 // '{' 'break' Identifier
     && lk != 56261                 // '{' 'continue' Identifier
     && lk != 65989                 // '{' Identifier Character
     && lk != 66117                 // '{' Character Character
     && lk != 66245                 // '{' String Character
     && lk != 66373                 // '{' Integer Character
     && lk != 66501                 // '{' Real Character
     && lk != 66629                 // '{' Comment Character
     && lk != 70085                 // '{' ';' Character
     && lk != 72389                 // '{' 'break' Character
     && lk != 72645                 // '{' 'continue' Character
     && lk != 82373                 // '{' Identifier String
     && lk != 82501                 // '{' Character String
     && lk != 82629                 // '{' String String
     && lk != 82757                 // '{' Integer String
     && lk != 82885                 // '{' Real String
     && lk != 83013                 // '{' Comment String
     && lk != 86469                 // '{' ';' String
     && lk != 88773                 // '{' 'break' String
     && lk != 89029                 // '{' 'continue' String
     && lk != 98757                 // '{' Identifier Integer
     && lk != 98885                 // '{' Character Integer
     && lk != 99013                 // '{' String Integer
     && lk != 99141                 // '{' Integer Integer
     && lk != 99269                 // '{' Real Integer
     && lk != 99397                 // '{' Comment Integer
     && lk != 102853                // '{' ';' Integer
     && lk != 105157                // '{' 'break' Integer
     && lk != 105413                // '{' 'continue' Integer
     && lk != 115141                // '{' Identifier Real
     && lk != 115269                // '{' Character Real
     && lk != 115397                // '{' String Real
     && lk != 115525                // '{' Integer Real
     && lk != 115653                // '{' Real Real
     && lk != 115781                // '{' Comment Real
     && lk != 119237                // '{' ';' Real
     && lk != 121541                // '{' 'break' Real
     && lk != 121797                // '{' 'continue' Real
     && lk != 131525                // '{' Identifier Comment
     && lk != 131653                // '{' Character Comment
     && lk != 131781                // '{' String Comment
     && lk != 131909                // '{' Integer Comment
     && lk != 132037                // '{' Real Comment
     && lk != 132165                // '{' Comment Comment
     && lk != 135621                // '{' ';' Comment
     && lk != 137925                // '{' 'break' Comment
     && lk != 138181                // '{' 'continue' Comment
     && lk != 180677                // '{' Identifier '!'
     && lk != 180805                // '{' Character '!'
     && lk != 180933                // '{' String '!'
     && lk != 181061                // '{' Integer '!'
     && lk != 181189                // '{' Real '!'
     && lk != 181317                // '{' Comment '!'
     && lk != 184773                // '{' ';' '!'
     && lk != 187077                // '{' 'break' '!'
     && lk != 187333                // '{' 'continue' '!'
     && lk != 295493                // '{' Character '('
     && lk != 295621                // '{' String '('
     && lk != 295749                // '{' Integer '('
     && lk != 295877                // '{' Real '('
     && lk != 296005                // '{' Comment '('
     && lk != 299461                // '{' ';' '('
     && lk != 301765                // '{' 'break' '('
     && lk != 302021                // '{' 'continue' '('
     && lk != 313603                // Identifier '(' ')'
     && lk != 377925                // '{' Comment '+'
     && lk != 381381                // '{' ';' '+'
     && lk != 383685                // '{' 'break' '+'
     && lk != 383941                // '{' 'continue' '+'
     && lk != 394309                // '{' Comment '++'
     && lk != 397765                // '{' ';' '++'
     && lk != 400069                // '{' 'break' '++'
     && lk != 400325                // '{' 'continue' '++'
     && lk != 426437                // '{' Identifier ','
     && lk != 426565                // '{' Character ','
     && lk != 426693                // '{' String ','
     && lk != 426821                // '{' Integer ','
     && lk != 426949                // '{' Real ','
     && lk != 427077                // '{' Comment ','
     && lk != 430533                // '{' ';' ','
     && lk != 432837                // '{' 'break' ','
     && lk != 433093                // '{' 'continue' ','
     && lk != 443461                // '{' Comment '-'
     && lk != 446917                // '{' ';' '-'
     && lk != 449221                // '{' 'break' '-'
     && lk != 449477                // '{' 'continue' '-'
     && lk != 459845                // '{' Comment '--'
     && lk != 463301                // '{' ';' '--'
     && lk != 465605                // '{' 'break' '--'
     && lk != 465861                // '{' 'continue' '--'
     && lk != 541125                // '{' Identifier ':'
     && lk != 541381                // '{' String ':'
     && lk != 573893                // '{' Identifier ';'
     && lk != 574021                // '{' Character ';'
     && lk != 574149                // '{' String ';'
     && lk != 574277                // '{' Integer ';'
     && lk != 574405                // '{' Real ';'
     && lk != 574533                // '{' Comment ';'
     && lk != 577989                // '{' ';' ';'
     && lk != 580293                // '{' 'break' ';'
     && lk != 580549                // '{' 'continue' ';'
     && lk != 803397                // '{' Character '['
     && lk != 803525                // '{' String '['
     && lk != 803653                // '{' Integer '['
     && lk != 803781                // '{' Real '['
     && lk != 803909                // '{' Comment '['
     && lk != 807365                // '{' ';' '['
     && lk != 809669                // '{' 'break' '['
     && lk != 809925                // '{' 'continue' '['
     && lk != 868805                // '{' Identifier 'break'
     && lk != 868933                // '{' Character 'break'
     && lk != 869061                // '{' String 'break'
     && lk != 869189                // '{' Integer 'break'
     && lk != 869317                // '{' Real 'break'
     && lk != 869445                // '{' Comment 'break'
     && lk != 872901                // '{' ';' 'break'
     && lk != 875205                // '{' 'break' 'break'
     && lk != 875461                // '{' 'continue' 'break'
     && lk != 901573                // '{' Identifier 'continue'
     && lk != 901701                // '{' Character 'continue'
     && lk != 901829                // '{' String 'continue'
     && lk != 901957                // '{' Integer 'continue'
     && lk != 902085                // '{' Real 'continue'
     && lk != 902213                // '{' Comment 'continue'
     && lk != 905669                // '{' ';' 'continue'
     && lk != 907973                // '{' 'break' 'continue'
     && lk != 908229                // '{' 'continue' 'continue'
     && lk != 934341                // '{' Identifier 'do'
     && lk != 934469                // '{' Character 'do'
     && lk != 934597                // '{' String 'do'
     && lk != 934725                // '{' Integer 'do'
     && lk != 934853                // '{' Real 'do'
     && lk != 934981                // '{' Comment 'do'
     && lk != 938437                // '{' ';' 'do'
     && lk != 940741                // '{' 'break' 'do'
     && lk != 940997                // '{' 'continue' 'do'
     && lk != 967109                // '{' Identifier 'f32'
     && lk != 967237                // '{' Character 'f32'
     && lk != 967365                // '{' String 'f32'
     && lk != 967493                // '{' Integer 'f32'
     && lk != 967621                // '{' Real 'f32'
     && lk != 967749                // '{' Comment 'f32'
     && lk != 971205                // '{' ';' 'f32'
     && lk != 973509                // '{' 'break' 'f32'
     && lk != 973765                // '{' 'continue' 'f32'
     && lk != 983493                // '{' Identifier 'f64'
     && lk != 983621                // '{' Character 'f64'
     && lk != 983749                // '{' String 'f64'
     && lk != 983877                // '{' Integer 'f64'
     && lk != 984005                // '{' Real 'f64'
     && lk != 984133                // '{' Comment 'f64'
     && lk != 987589                // '{' ';' 'f64'
     && lk != 989893                // '{' 'break' 'f64'
     && lk != 990149                // '{' 'continue' 'f64'
     && lk != 999877                // '{' Identifier 'for'
     && lk != 1000005               // '{' Character 'for'
     && lk != 1000133               // '{' String 'for'
     && lk != 1000261               // '{' Integer 'for'
     && lk != 1000389               // '{' Real 'for'
     && lk != 1000517               // '{' Comment 'for'
     && lk != 1003973               // '{' ';' 'for'
     && lk != 1006277               // '{' 'break' 'for'
     && lk != 1006533               // '{' 'continue' 'for'
     && lk != 1016261               // '{' Identifier 'foreach'
     && lk != 1016389               // '{' Character 'foreach'
     && lk != 1016517               // '{' String 'foreach'
     && lk != 1016645               // '{' Integer 'foreach'
     && lk != 1016773               // '{' Real 'foreach'
     && lk != 1016901               // '{' Comment 'foreach'
     && lk != 1020357               // '{' ';' 'foreach'
     && lk != 1022661               // '{' 'break' 'foreach'
     && lk != 1022917               // '{' 'continue' 'foreach'
     && lk != 1032645               // '{' Identifier 'i32'
     && lk != 1032773               // '{' Character 'i32'
     && lk != 1032901               // '{' String 'i32'
     && lk != 1033029               // '{' Integer 'i32'
     && lk != 1033157               // '{' Real 'i32'
     && lk != 1033285               // '{' Comment 'i32'
     && lk != 1036741               // '{' ';' 'i32'
     && lk != 1039045               // '{' 'break' 'i32'
     && lk != 1039301               // '{' 'continue' 'i32'
     && lk != 1049029               // '{' Identifier 'i64'
     && lk != 1049157               // '{' Character 'i64'
     && lk != 1049285               // '{' String 'i64'
     && lk != 1049413               // '{' Integer 'i64'
     && lk != 1049541               // '{' Real 'i64'
     && lk != 1049669               // '{' Comment 'i64'
     && lk != 1053125               // '{' ';' 'i64'
     && lk != 1055429               // '{' 'break' 'i64'
     && lk != 1055685               // '{' 'continue' 'i64'
     && lk != 1065413               // '{' Identifier 'if'
     && lk != 1065541               // '{' Character 'if'
     && lk != 1065669               // '{' String 'if'
     && lk != 1065797               // '{' Integer 'if'
     && lk != 1065925               // '{' Real 'if'
     && lk != 1066053               // '{' Comment 'if'
     && lk != 1069509               // '{' ';' 'if'
     && lk != 1071813               // '{' 'break' 'if'
     && lk != 1072069               // '{' 'continue' 'if'
     && lk != 1081797               // '{' Identifier 'return'
     && lk != 1081925               // '{' Character 'return'
     && lk != 1082053               // '{' String 'return'
     && lk != 1082181               // '{' Integer 'return'
     && lk != 1082309               // '{' Real 'return'
     && lk != 1082437               // '{' Comment 'return'
     && lk != 1085893               // '{' ';' 'return'
     && lk != 1088197               // '{' 'break' 'return'
     && lk != 1088453               // '{' 'continue' 'return'
     && lk != 1098181               // '{' Identifier 'switch'
     && lk != 1098309               // '{' Character 'switch'
     && lk != 1098437               // '{' String 'switch'
     && lk != 1098565               // '{' Integer 'switch'
     && lk != 1098693               // '{' Real 'switch'
     && lk != 1098821               // '{' Comment 'switch'
     && lk != 1102277               // '{' ';' 'switch'
     && lk != 1104581               // '{' 'break' 'switch'
     && lk != 1104837               // '{' 'continue' 'switch'
     && lk != 1114565               // '{' Identifier 'while'
     && lk != 1114693               // '{' Character 'while'
     && lk != 1114821               // '{' String 'while'
     && lk != 1114949               // '{' Integer 'while'
     && lk != 1115077               // '{' Real 'while'
     && lk != 1115205               // '{' Comment 'while'
     && lk != 1118661               // '{' ';' 'while'
     && lk != 1120965               // '{' 'break' 'while'
     && lk != 1121221               // '{' 'continue' 'while'
     && lk != 1131077               // '{' Character '{'
     && lk != 1131205               // '{' String '{'
     && lk != 1131333               // '{' Integer '{'
     && lk != 1131461               // '{' Real '{'
     && lk != 1131589               // '{' Comment '{'
     && lk != 1135045               // '{' ';' '{'
     && lk != 1137349               // '{' 'break' '{'
     && lk != 1137605               // '{' 'continue' '{'
     && lk != 1212869               // '{' Identifier '~'
     && lk != 1212997               // '{' Character '~'
     && lk != 1213125               // '{' String '~'
     && lk != 1213253               // '{' Integer '~'
     && lk != 1213381               // '{' Real '~'
     && lk != 1213509               // '{' Comment '~'
     && lk != 1216965               // '{' ';' '~'
     && lk != 1219269               // '{' 'break' '~'
     && lk != 1219525)              // '{' 'continue' '~'
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
    case 8:                         // Comment
      consumeT(8);                  // Comment
      break;
    case -3:
    case 35:                        // ';'
    case 53:                        // 'break'
    case 55:                        // 'continue'
    case 57:                        // 'do'
    case 59:                        // 'f32'
    case 60:                        // 'f64'
    case 61:                        // 'for'
    case 62:                        // 'foreach'
    case 63:                        // 'i32'
    case 64:                        // 'i64'
    case 65:                        // 'if'
    case 66:                        // 'return'
    case 67:                        // 'switch'
    case 68:                        // 'while'
      try_Statement();
      break;
    case -4:
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
    case 11:                        // '!'
    case 18:                        // '('
    case 23:                        // '+'
    case 24:                        // '++'
    case 27:                        // '-'
    case 28:                        // '--'
    case 49:                        // '['
    case 74:                        // '~'
    case 131:                       // Identifier END
    case 387:                       // Identifier Identifier
    case 515:                       // Identifier Character
    case 643:                       // Identifier String
    case 771:                       // Identifier Integer
    case 899:                       // Identifier Real
    case 1027:                      // Identifier Comment
    case 1411:                      // Identifier '!'
    case 1539:                      // Identifier '!='
    case 1667:                      // Identifier '%'
    case 1795:                      // Identifier '%='
    case 1923:                      // Identifier '&'
    case 2051:                      // Identifier '&&'
    case 2179:                      // Identifier '&='
    case 2435:                      // Identifier ')'
    case 2563:                      // Identifier '*'
    case 2691:                      // Identifier '**'
    case 2819:                      // Identifier '*='
    case 2947:                      // Identifier '+'
    case 3075:                      // Identifier '++'
    case 3203:                      // Identifier '+='
    case 3331:                      // Identifier ','
    case 3459:                      // Identifier '-'
    case 3587:                      // Identifier '--'
    case 3715:                      // Identifier '-='
    case 3843:                      // Identifier '.'
    case 3971:                      // Identifier '/'
    case 4099:                      // Identifier '/='
    case 4227:                      // Identifier ':'
    case 4355:                      // Identifier ':='
    case 4483:                      // Identifier ';'
    case 4611:                      // Identifier '<'
    case 4739:                      // Identifier '<<'
    case 4867:                      // Identifier '<<='
    case 4995:                      // Identifier '<='
    case 5123:                      // Identifier '='
    case 5251:                      // Identifier '=='
    case 5507:                      // Identifier '>'
    case 5635:                      // Identifier '>='
    case 5763:                      // Identifier '>>'
    case 5891:                      // Identifier '>>='
    case 6019:                      // Identifier '?'
    case 6147:                      // Identifier '?='
    case 6275:                      // Identifier '['
    case 6403:                      // Identifier ']'
    case 6531:                      // Identifier '^'
    case 6659:                      // Identifier '^='
    case 6787:                      // Identifier 'break'
    case 6915:                      // Identifier 'case'
    case 7043:                      // Identifier 'continue'
    case 7171:                      // Identifier 'default'
    case 7299:                      // Identifier 'do'
    case 7427:                      // Identifier 'else'
    case 7555:                      // Identifier 'f32'
    case 7683:                      // Identifier 'f64'
    case 7811:                      // Identifier 'for'
    case 7939:                      // Identifier 'foreach'
    case 8067:                      // Identifier 'i32'
    case 8195:                      // Identifier 'i64'
    case 8323:                      // Identifier 'if'
    case 8451:                      // Identifier 'return'
    case 8579:                      // Identifier 'switch'
    case 8707:                      // Identifier 'while'
    case 8963:                      // Identifier '|'
    case 9091:                      // Identifier '|='
    case 9219:                      // Identifier '||'
    case 9347:                      // Identifier '}'
    case 9475:                      // Identifier '~'
    case 313603:                    // Identifier '(' ')'
    case 426437:                    // '{' Identifier ','
    case 426565:                    // '{' Character ','
    case 426693:                    // '{' String ','
    case 426821:                    // '{' Integer ','
    case 426949:                    // '{' Real ','
    case 427077:                    // '{' Comment ','
    case 430533:                    // '{' ';' ','
    case 432837:                    // '{' 'break' ','
    case 433093:                    // '{' 'continue' ','
    case 541125:                    // '{' Identifier ':'
    case 541381:                    // '{' String ':'
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
    consume(69);                    // '{'
    for (;;)
    {
      lookahead1W(25);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 73)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(73);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(69);                   // '{'
    for (;;)
    {
      lookahead1W(25);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 73)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(73);                   // '}'
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
      case 14:                      // '%='
      case 17:                      // '&='
      case 22:                      // '*='
      case 25:                      // '+='
      case 29:                      // '-='
      case 32:                      // '/='
      case 34:                      // ':='
      case 38:                      // '<<='
      case 40:                      // '='
      case 46:                      // '>>='
      case 48:                      // '?='
      case 52:                      // '^='
      case 71:                      // '|='
        lookahead2W(20);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 398:                   // '%=' Identifier
        case 401:                   // '&=' Identifier
        case 406:                   // '*=' Identifier
        case 409:                   // '+=' Identifier
        case 413:                   // '-=' Identifier
        case 416:                   // '/=' Identifier
        case 418:                   // ':=' Identifier
        case 422:                   // '<<=' Identifier
        case 424:                   // '=' Identifier
        case 430:                   // '>>=' Identifier
        case 432:                   // '?=' Identifier
        case 436:                   // '^=' Identifier
        case 455:                   // '|=' Identifier
          lookahead3W(43);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 6286:                  // '%=' '['
        case 6289:                  // '&=' '['
        case 6294:                  // '*=' '['
        case 6297:                  // '+=' '['
        case 6301:                  // '-=' '['
        case 6304:                  // '/=' '['
        case 6306:                  // ':=' '['
        case 6310:                  // '<<=' '['
        case 6312:                  // '=' '['
        case 6318:                  // '>>=' '['
        case 6320:                  // '?=' '['
        case 6324:                  // '^=' '['
        case 6343:                  // '|=' '['
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          break;
        case 2318:                  // '%=' '('
        case 8846:                  // '%=' '{'
        case 2321:                  // '&=' '('
        case 8849:                  // '&=' '{'
        case 2326:                  // '*=' '('
        case 8854:                  // '*=' '{'
        case 2329:                  // '+=' '('
        case 8857:                  // '+=' '{'
        case 2333:                  // '-=' '('
        case 8861:                  // '-=' '{'
        case 2336:                  // '/=' '('
        case 8864:                  // '/=' '{'
        case 2338:                  // ':=' '('
        case 8866:                  // ':=' '{'
        case 2342:                  // '<<=' '('
        case 8870:                  // '<<=' '{'
        case 2344:                  // '=' '('
        case 8872:                  // '=' '{'
        case 2350:                  // '>>=' '('
        case 8878:                  // '>>=' '{'
        case 2352:                  // '?=' '('
        case 8880:                  // '?=' '{'
        case 2356:                  // '^=' '('
        case 8884:                  // '^=' '{'
        case 2375:                  // '|=' '('
        case 8903:                  // '|=' '{'
          lookahead3W(21);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
          break;
        case 526:                   // '%=' Character
        case 654:                   // '%=' String
        case 782:                   // '%=' Integer
        case 910:                   // '%=' Real
        case 529:                   // '&=' Character
        case 657:                   // '&=' String
        case 785:                   // '&=' Integer
        case 913:                   // '&=' Real
        case 534:                   // '*=' Character
        case 662:                   // '*=' String
        case 790:                   // '*=' Integer
        case 918:                   // '*=' Real
        case 537:                   // '+=' Character
        case 665:                   // '+=' String
        case 793:                   // '+=' Integer
        case 921:                   // '+=' Real
        case 541:                   // '-=' Character
        case 669:                   // '-=' String
        case 797:                   // '-=' Integer
        case 925:                   // '-=' Real
        case 544:                   // '/=' Character
        case 672:                   // '/=' String
        case 800:                   // '/=' Integer
        case 928:                   // '/=' Real
        case 546:                   // ':=' Character
        case 674:                   // ':=' String
        case 802:                   // ':=' Integer
        case 930:                   // ':=' Real
        case 550:                   // '<<=' Character
        case 678:                   // '<<=' String
        case 806:                   // '<<=' Integer
        case 934:                   // '<<=' Real
        case 552:                   // '=' Character
        case 680:                   // '=' String
        case 808:                   // '=' Integer
        case 936:                   // '=' Real
        case 558:                   // '>>=' Character
        case 686:                   // '>>=' String
        case 814:                   // '>>=' Integer
        case 942:                   // '>>=' Real
        case 560:                   // '?=' Character
        case 688:                   // '?=' String
        case 816:                   // '?=' Integer
        case 944:                   // '?=' Real
        case 564:                   // '^=' Character
        case 692:                   // '^=' String
        case 820:                   // '^=' Integer
        case 948:                   // '^=' Real
        case 583:                   // '|=' Character
        case 711:                   // '|=' String
        case 839:                   // '|=' Integer
        case 967:                   // '|=' Real
          lookahead3W(42);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1422:                  // '%=' '!'
        case 2958:                  // '%=' '+'
        case 3086:                  // '%=' '++'
        case 3470:                  // '%=' '-'
        case 3598:                  // '%=' '--'
        case 9486:                  // '%=' '~'
        case 1425:                  // '&=' '!'
        case 2961:                  // '&=' '+'
        case 3089:                  // '&=' '++'
        case 3473:                  // '&=' '-'
        case 3601:                  // '&=' '--'
        case 9489:                  // '&=' '~'
        case 1430:                  // '*=' '!'
        case 2966:                  // '*=' '+'
        case 3094:                  // '*=' '++'
        case 3478:                  // '*=' '-'
        case 3606:                  // '*=' '--'
        case 9494:                  // '*=' '~'
        case 1433:                  // '+=' '!'
        case 2969:                  // '+=' '+'
        case 3097:                  // '+=' '++'
        case 3481:                  // '+=' '-'
        case 3609:                  // '+=' '--'
        case 9497:                  // '+=' '~'
        case 1437:                  // '-=' '!'
        case 2973:                  // '-=' '+'
        case 3101:                  // '-=' '++'
        case 3485:                  // '-=' '-'
        case 3613:                  // '-=' '--'
        case 9501:                  // '-=' '~'
        case 1440:                  // '/=' '!'
        case 2976:                  // '/=' '+'
        case 3104:                  // '/=' '++'
        case 3488:                  // '/=' '-'
        case 3616:                  // '/=' '--'
        case 9504:                  // '/=' '~'
        case 1442:                  // ':=' '!'
        case 2978:                  // ':=' '+'
        case 3106:                  // ':=' '++'
        case 3490:                  // ':=' '-'
        case 3618:                  // ':=' '--'
        case 9506:                  // ':=' '~'
        case 1446:                  // '<<=' '!'
        case 2982:                  // '<<=' '+'
        case 3110:                  // '<<=' '++'
        case 3494:                  // '<<=' '-'
        case 3622:                  // '<<=' '--'
        case 9510:                  // '<<=' '~'
        case 1448:                  // '=' '!'
        case 2984:                  // '=' '+'
        case 3112:                  // '=' '++'
        case 3496:                  // '=' '-'
        case 3624:                  // '=' '--'
        case 9512:                  // '=' '~'
        case 1454:                  // '>>=' '!'
        case 2990:                  // '>>=' '+'
        case 3118:                  // '>>=' '++'
        case 3502:                  // '>>=' '-'
        case 3630:                  // '>>=' '--'
        case 9518:                  // '>>=' '~'
        case 1456:                  // '?=' '!'
        case 2992:                  // '?=' '+'
        case 3120:                  // '?=' '++'
        case 3504:                  // '?=' '-'
        case 3632:                  // '?=' '--'
        case 9520:                  // '?=' '~'
        case 1460:                  // '^=' '!'
        case 2996:                  // '^=' '+'
        case 3124:                  // '^=' '++'
        case 3508:                  // '^=' '-'
        case 3636:                  // '^=' '--'
        case 9524:                  // '^=' '~'
        case 1479:                  // '|=' '!'
        case 3015:                  // '|=' '+'
        case 3143:                  // '|=' '++'
        case 3527:                  // '|=' '-'
        case 3655:                  // '|=' '--'
        case 9543:                  // '|=' '~'
          lookahead3W(19);          // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
       && lk != 8                   // Comment
       && lk != 11                  // '!'
       && lk != 18                  // '('
       && lk != 19                  // ')'
       && lk != 23                  // '+'
       && lk != 24                  // '++'
       && lk != 26                  // ','
       && lk != 27                  // '-'
       && lk != 28                  // '--'
       && lk != 33                  // ':'
       && lk != 35                  // ';'
       && lk != 49                  // '['
       && lk != 50                  // ']'
       && lk != 53                  // 'break'
       && lk != 54                  // 'case'
       && lk != 55                  // 'continue'
       && lk != 56                  // 'default'
       && lk != 57                  // 'do'
       && lk != 58                  // 'else'
       && lk != 59                  // 'f32'
       && lk != 60                  // 'f64'
       && lk != 61                  // 'for'
       && lk != 62                  // 'foreach'
       && lk != 63                  // 'i32'
       && lk != 64                  // 'i64'
       && lk != 65                  // 'if'
       && lk != 66                  // 'return'
       && lk != 67                  // 'switch'
       && lk != 68                  // 'while'
       && lk != 69                  // '{'
       && lk != 73                  // '}'
       && lk != 74)                 // '~'
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
            case 40:                // '='
              consumeT(40);         // '='
              break;
            case 22:                // '*='
              consumeT(22);         // '*='
              break;
            case 32:                // '/='
              consumeT(32);         // '/='
              break;
            case 14:                // '%='
              consumeT(14);         // '%='
              break;
            case 25:                // '+='
              consumeT(25);         // '+='
              break;
            case 29:                // '-='
              consumeT(29);         // '-='
              break;
            case 38:                // '<<='
              consumeT(38);         // '<<='
              break;
            case 46:                // '>>='
              consumeT(46);         // '>>='
              break;
            case 17:                // '&='
              consumeT(17);         // '&='
              break;
            case 52:                // '^='
              consumeT(52);         // '^='
              break;
            case 71:                // '|='
              consumeT(71);         // '|='
              break;
            case 48:                // '?='
              consumeT(48);         // '?='
              break;
            default:
              consumeT(34);         // ':='
            }
            lookahead1W(20);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      case 40:                      // '='
        consume(40);                // '='
        break;
      case 22:                      // '*='
        consume(22);                // '*='
        break;
      case 32:                      // '/='
        consume(32);                // '/='
        break;
      case 14:                      // '%='
        consume(14);                // '%='
        break;
      case 25:                      // '+='
        consume(25);                // '+='
        break;
      case 29:                      // '-='
        consume(29);                // '-='
        break;
      case 38:                      // '<<='
        consume(38);                // '<<='
        break;
      case 46:                      // '>>='
        consume(46);                // '>>='
        break;
      case 17:                      // '&='
        consume(17);                // '&='
        break;
      case 52:                      // '^='
        consume(52);                // '^='
        break;
      case 71:                      // '|='
        consume(71);                // '|='
        break;
      case 48:                      // '?='
        consume(48);                // '?='
        break;
      default:
        consume(34);                // ':='
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      case 14:                      // '%='
      case 17:                      // '&='
      case 22:                      // '*='
      case 25:                      // '+='
      case 29:                      // '-='
      case 32:                      // '/='
      case 34:                      // ':='
      case 38:                      // '<<='
      case 40:                      // '='
      case 46:                      // '>>='
      case 48:                      // '?='
      case 52:                      // '^='
      case 71:                      // '|='
        lookahead2W(20);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 398:                   // '%=' Identifier
        case 401:                   // '&=' Identifier
        case 406:                   // '*=' Identifier
        case 409:                   // '+=' Identifier
        case 413:                   // '-=' Identifier
        case 416:                   // '/=' Identifier
        case 418:                   // ':=' Identifier
        case 422:                   // '<<=' Identifier
        case 424:                   // '=' Identifier
        case 430:                   // '>>=' Identifier
        case 432:                   // '?=' Identifier
        case 436:                   // '^=' Identifier
        case 455:                   // '|=' Identifier
          lookahead3W(43);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 6286:                  // '%=' '['
        case 6289:                  // '&=' '['
        case 6294:                  // '*=' '['
        case 6297:                  // '+=' '['
        case 6301:                  // '-=' '['
        case 6304:                  // '/=' '['
        case 6306:                  // ':=' '['
        case 6310:                  // '<<=' '['
        case 6312:                  // '=' '['
        case 6318:                  // '>>=' '['
        case 6320:                  // '?=' '['
        case 6324:                  // '^=' '['
        case 6343:                  // '|=' '['
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          break;
        case 2318:                  // '%=' '('
        case 8846:                  // '%=' '{'
        case 2321:                  // '&=' '('
        case 8849:                  // '&=' '{'
        case 2326:                  // '*=' '('
        case 8854:                  // '*=' '{'
        case 2329:                  // '+=' '('
        case 8857:                  // '+=' '{'
        case 2333:                  // '-=' '('
        case 8861:                  // '-=' '{'
        case 2336:                  // '/=' '('
        case 8864:                  // '/=' '{'
        case 2338:                  // ':=' '('
        case 8866:                  // ':=' '{'
        case 2342:                  // '<<=' '('
        case 8870:                  // '<<=' '{'
        case 2344:                  // '=' '('
        case 8872:                  // '=' '{'
        case 2350:                  // '>>=' '('
        case 8878:                  // '>>=' '{'
        case 2352:                  // '?=' '('
        case 8880:                  // '?=' '{'
        case 2356:                  // '^=' '('
        case 8884:                  // '^=' '{'
        case 2375:                  // '|=' '('
        case 8903:                  // '|=' '{'
          lookahead3W(21);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
          break;
        case 526:                   // '%=' Character
        case 654:                   // '%=' String
        case 782:                   // '%=' Integer
        case 910:                   // '%=' Real
        case 529:                   // '&=' Character
        case 657:                   // '&=' String
        case 785:                   // '&=' Integer
        case 913:                   // '&=' Real
        case 534:                   // '*=' Character
        case 662:                   // '*=' String
        case 790:                   // '*=' Integer
        case 918:                   // '*=' Real
        case 537:                   // '+=' Character
        case 665:                   // '+=' String
        case 793:                   // '+=' Integer
        case 921:                   // '+=' Real
        case 541:                   // '-=' Character
        case 669:                   // '-=' String
        case 797:                   // '-=' Integer
        case 925:                   // '-=' Real
        case 544:                   // '/=' Character
        case 672:                   // '/=' String
        case 800:                   // '/=' Integer
        case 928:                   // '/=' Real
        case 546:                   // ':=' Character
        case 674:                   // ':=' String
        case 802:                   // ':=' Integer
        case 930:                   // ':=' Real
        case 550:                   // '<<=' Character
        case 678:                   // '<<=' String
        case 806:                   // '<<=' Integer
        case 934:                   // '<<=' Real
        case 552:                   // '=' Character
        case 680:                   // '=' String
        case 808:                   // '=' Integer
        case 936:                   // '=' Real
        case 558:                   // '>>=' Character
        case 686:                   // '>>=' String
        case 814:                   // '>>=' Integer
        case 942:                   // '>>=' Real
        case 560:                   // '?=' Character
        case 688:                   // '?=' String
        case 816:                   // '?=' Integer
        case 944:                   // '?=' Real
        case 564:                   // '^=' Character
        case 692:                   // '^=' String
        case 820:                   // '^=' Integer
        case 948:                   // '^=' Real
        case 583:                   // '|=' Character
        case 711:                   // '|=' String
        case 839:                   // '|=' Integer
        case 967:                   // '|=' Real
          lookahead3W(42);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1422:                  // '%=' '!'
        case 2958:                  // '%=' '+'
        case 3086:                  // '%=' '++'
        case 3470:                  // '%=' '-'
        case 3598:                  // '%=' '--'
        case 9486:                  // '%=' '~'
        case 1425:                  // '&=' '!'
        case 2961:                  // '&=' '+'
        case 3089:                  // '&=' '++'
        case 3473:                  // '&=' '-'
        case 3601:                  // '&=' '--'
        case 9489:                  // '&=' '~'
        case 1430:                  // '*=' '!'
        case 2966:                  // '*=' '+'
        case 3094:                  // '*=' '++'
        case 3478:                  // '*=' '-'
        case 3606:                  // '*=' '--'
        case 9494:                  // '*=' '~'
        case 1433:                  // '+=' '!'
        case 2969:                  // '+=' '+'
        case 3097:                  // '+=' '++'
        case 3481:                  // '+=' '-'
        case 3609:                  // '+=' '--'
        case 9497:                  // '+=' '~'
        case 1437:                  // '-=' '!'
        case 2973:                  // '-=' '+'
        case 3101:                  // '-=' '++'
        case 3485:                  // '-=' '-'
        case 3613:                  // '-=' '--'
        case 9501:                  // '-=' '~'
        case 1440:                  // '/=' '!'
        case 2976:                  // '/=' '+'
        case 3104:                  // '/=' '++'
        case 3488:                  // '/=' '-'
        case 3616:                  // '/=' '--'
        case 9504:                  // '/=' '~'
        case 1442:                  // ':=' '!'
        case 2978:                  // ':=' '+'
        case 3106:                  // ':=' '++'
        case 3490:                  // ':=' '-'
        case 3618:                  // ':=' '--'
        case 9506:                  // ':=' '~'
        case 1446:                  // '<<=' '!'
        case 2982:                  // '<<=' '+'
        case 3110:                  // '<<=' '++'
        case 3494:                  // '<<=' '-'
        case 3622:                  // '<<=' '--'
        case 9510:                  // '<<=' '~'
        case 1448:                  // '=' '!'
        case 2984:                  // '=' '+'
        case 3112:                  // '=' '++'
        case 3496:                  // '=' '-'
        case 3624:                  // '=' '--'
        case 9512:                  // '=' '~'
        case 1454:                  // '>>=' '!'
        case 2990:                  // '>>=' '+'
        case 3118:                  // '>>=' '++'
        case 3502:                  // '>>=' '-'
        case 3630:                  // '>>=' '--'
        case 9518:                  // '>>=' '~'
        case 1456:                  // '?=' '!'
        case 2992:                  // '?=' '+'
        case 3120:                  // '?=' '++'
        case 3504:                  // '?=' '-'
        case 3632:                  // '?=' '--'
        case 9520:                  // '?=' '~'
        case 1460:                  // '^=' '!'
        case 2996:                  // '^=' '+'
        case 3124:                  // '^=' '++'
        case 3508:                  // '^=' '-'
        case 3636:                  // '^=' '--'
        case 9524:                  // '^=' '~'
        case 1479:                  // '|=' '!'
        case 3015:                  // '|=' '+'
        case 3143:                  // '|=' '++'
        case 3527:                  // '|=' '-'
        case 3655:                  // '|=' '--'
        case 9543:                  // '|=' '~'
          lookahead3W(19);          // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
       && lk != 8                   // Comment
       && lk != 11                  // '!'
       && lk != 18                  // '('
       && lk != 19                  // ')'
       && lk != 23                  // '+'
       && lk != 24                  // '++'
       && lk != 26                  // ','
       && lk != 27                  // '-'
       && lk != 28                  // '--'
       && lk != 33                  // ':'
       && lk != 35                  // ';'
       && lk != 49                  // '['
       && lk != 50                  // ']'
       && lk != 53                  // 'break'
       && lk != 54                  // 'case'
       && lk != 55                  // 'continue'
       && lk != 56                  // 'default'
       && lk != 57                  // 'do'
       && lk != 58                  // 'else'
       && lk != 59                  // 'f32'
       && lk != 60                  // 'f64'
       && lk != 61                  // 'for'
       && lk != 62                  // 'foreach'
       && lk != 63                  // 'i32'
       && lk != 64                  // 'i64'
       && lk != 65                  // 'if'
       && lk != 66                  // 'return'
       && lk != 67                  // 'switch'
       && lk != 68                  // 'while'
       && lk != 69                  // '{'
       && lk != 73                  // '}'
       && lk != 74)                 // '~'
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
            case 40:                // '='
              consumeT(40);         // '='
              break;
            case 22:                // '*='
              consumeT(22);         // '*='
              break;
            case 32:                // '/='
              consumeT(32);         // '/='
              break;
            case 14:                // '%='
              consumeT(14);         // '%='
              break;
            case 25:                // '+='
              consumeT(25);         // '+='
              break;
            case 29:                // '-='
              consumeT(29);         // '-='
              break;
            case 38:                // '<<='
              consumeT(38);         // '<<='
              break;
            case 46:                // '>>='
              consumeT(46);         // '>>='
              break;
            case 17:                // '&='
              consumeT(17);         // '&='
              break;
            case 52:                // '^='
              consumeT(52);         // '^='
              break;
            case 71:                // '|='
              consumeT(71);         // '|='
              break;
            case 48:                // '?='
              consumeT(48);         // '?='
              break;
            default:
              consumeT(34);         // ':='
            }
            lookahead1W(20);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      case 40:                      // '='
        consumeT(40);               // '='
        break;
      case 22:                      // '*='
        consumeT(22);               // '*='
        break;
      case 32:                      // '/='
        consumeT(32);               // '/='
        break;
      case 14:                      // '%='
        consumeT(14);               // '%='
        break;
      case 25:                      // '+='
        consumeT(25);               // '+='
        break;
      case 29:                      // '-='
        consumeT(29);               // '-='
        break;
      case 38:                      // '<<='
        consumeT(38);               // '<<='
        break;
      case 46:                      // '>>='
        consumeT(46);               // '>>='
        break;
      case 17:                      // '&='
        consumeT(17);               // '&='
        break;
      case 52:                      // '^='
        consumeT(52);               // '^='
        break;
      case 71:                      // '|='
        consumeT(71);               // '|='
        break;
      case 48:                      // '?='
        consumeT(48);               // '?='
        break;
      default:
        consumeT(34);               // ':='
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_ConditionalExpression();
    }
  }

  function parse_ConditionalExpression()
  {
    eventHandler.startNonterminal("ConditionalExpression", e0);
    parse_LogicalORExpression();
    if (l1 == 47)                   // '?'
    {
      consume(47);                  // '?'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
      consume(33);                  // ':'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
    }
    eventHandler.endNonterminal("ConditionalExpression", e0);
  }

  function try_ConditionalExpression()
  {
    try_LogicalORExpression();
    if (l1 == 47)                   // '?'
    {
      consumeT(47);                 // '?'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_VariableAssignment();
      consumeT(33);                 // ':'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_VariableAssignment();
    }
  }

  function parse_LogicalORExpression()
  {
    eventHandler.startNonterminal("LogicalORExpression", e0);
    parse_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 72)                 // '||'
      {
        break;
      }
      consume(72);                  // '||'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 72)                 // '||'
      {
        break;
      }
      consumeT(72);                 // '||'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_LogicalANDExpression();
    }
  }

  function parse_LogicalANDExpression()
  {
    eventHandler.startNonterminal("LogicalANDExpression", e0);
    parse_BitwiseORExpression();
    for (;;)
    {
      if (l1 != 16)                 // '&&'
      {
        break;
      }
      consume(16);                  // '&&'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 16)                 // '&&'
      {
        break;
      }
      consumeT(16);                 // '&&'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_BitwiseORExpression();
    }
  }

  function parse_BitwiseORExpression()
  {
    eventHandler.startNonterminal("BitwiseORExpression", e0);
    parse_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 70)                 // '|'
      {
        break;
      }
      consume(70);                  // '|'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 70)                 // '|'
      {
        break;
      }
      consumeT(70);                 // '|'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_BitwiseXORExpression();
    }
  }

  function parse_BitwiseXORExpression()
  {
    eventHandler.startNonterminal("BitwiseXORExpression", e0);
    parse_BitwiseANDExpression();
    for (;;)
    {
      if (l1 != 51)                 // '^'
      {
        break;
      }
      consume(51);                  // '^'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 51)                 // '^'
      {
        break;
      }
      consumeT(51);                 // '^'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_BitwiseANDExpression();
    }
  }

  function parse_BitwiseANDExpression()
  {
    eventHandler.startNonterminal("BitwiseANDExpression", e0);
    parse_EqualityExpression();
    for (;;)
    {
      if (l1 != 15)                 // '&'
      {
        break;
      }
      consume(15);                  // '&'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 15)                 // '&'
      {
        break;
      }
      consumeT(15);                 // '&'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_EqualityExpression();
    }
  }

  function parse_EqualityExpression()
  {
    eventHandler.startNonterminal("EqualityExpression", e0);
    parse_RelationalExpression();
    for (;;)
    {
      if (l1 != 12                  // '!='
       && l1 != 41)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 41:                      // '=='
        consume(41);                // '=='
        break;
      default:
        consume(12);                // '!='
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 12                  // '!='
       && l1 != 41)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 41:                      // '=='
        consumeT(41);               // '=='
        break;
      default:
        consumeT(12);               // '!='
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_RelationalExpression();
    }
  }

  function parse_RelationalExpression()
  {
    eventHandler.startNonterminal("RelationalExpression", e0);
    parse_ShiftExpression();
    for (;;)
    {
      if (l1 != 36                  // '<'
       && l1 != 39                  // '<='
       && l1 != 43                  // '>'
       && l1 != 44)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 36:                      // '<'
        consume(36);                // '<'
        break;
      case 43:                      // '>'
        consume(43);                // '>'
        break;
      case 39:                      // '<='
        consume(39);                // '<='
        break;
      default:
        consume(44);                // '>='
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 36                  // '<'
       && l1 != 39                  // '<='
       && l1 != 43                  // '>'
       && l1 != 44)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 36:                      // '<'
        consumeT(36);               // '<'
        break;
      case 43:                      // '>'
        consumeT(43);               // '>'
        break;
      case 39:                      // '<='
        consumeT(39);               // '<='
        break;
      default:
        consumeT(44);               // '>='
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_ShiftExpression();
    }
  }

  function parse_ShiftExpression()
  {
    eventHandler.startNonterminal("ShiftExpression", e0);
    parse_AdditiveExpression();
    for (;;)
    {
      if (l1 != 37                  // '<<'
       && l1 != 45)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 37:                      // '<<'
        consume(37);                // '<<'
        break;
      default:
        consume(45);                // '>>'
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
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
      if (l1 != 37                  // '<<'
       && l1 != 45)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 37:                      // '<<'
        consumeT(37);               // '<<'
        break;
      default:
        consumeT(45);               // '>>'
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_AdditiveExpression();
    }
  }

  function parse_AdditiveExpression()
  {
    eventHandler.startNonterminal("AdditiveExpression", e0);
    parse_MultiplicativeExpression();
    for (;;)
    {
      switch (l1)
      {
      case 23:                      // '+'
      case 27:                      // '-'
        lookahead2W(20);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 407:                   // '+' Identifier
        case 411:                   // '-' Identifier
          lookahead3W(43);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 6295:                  // '+' '['
        case 6299:                  // '-' '['
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          break;
        case 2327:                  // '+' '('
        case 8855:                  // '+' '{'
        case 2331:                  // '-' '('
        case 8859:                  // '-' '{'
          lookahead3W(21);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
          break;
        case 535:                   // '+' Character
        case 663:                   // '+' String
        case 791:                   // '+' Integer
        case 919:                   // '+' Real
        case 539:                   // '-' Character
        case 667:                   // '-' String
        case 795:                   // '-' Integer
        case 923:                   // '-' Real
          lookahead3W(42);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 8                   // Comment
       && lk != 11                  // '!'
       && lk != 12                  // '!='
       && lk != 14                  // '%='
       && lk != 15                  // '&'
       && lk != 16                  // '&&'
       && lk != 17                  // '&='
       && lk != 18                  // '('
       && lk != 19                  // ')'
       && lk != 22                  // '*='
       && lk != 24                  // '++'
       && lk != 25                  // '+='
       && lk != 26                  // ','
       && lk != 28                  // '--'
       && lk != 29                  // '-='
       && lk != 32                  // '/='
       && lk != 33                  // ':'
       && lk != 34                  // ':='
       && lk != 35                  // ';'
       && lk != 36                  // '<'
       && lk != 37                  // '<<'
       && lk != 38                  // '<<='
       && lk != 39                  // '<='
       && lk != 40                  // '='
       && lk != 41                  // '=='
       && lk != 43                  // '>'
       && lk != 44                  // '>='
       && lk != 45                  // '>>'
       && lk != 46                  // '>>='
       && lk != 47                  // '?'
       && lk != 48                  // '?='
       && lk != 49                  // '['
       && lk != 50                  // ']'
       && lk != 51                  // '^'
       && lk != 52                  // '^='
       && lk != 53                  // 'break'
       && lk != 54                  // 'case'
       && lk != 55                  // 'continue'
       && lk != 56                  // 'default'
       && lk != 57                  // 'do'
       && lk != 58                  // 'else'
       && lk != 59                  // 'f32'
       && lk != 60                  // 'f64'
       && lk != 61                  // 'for'
       && lk != 62                  // 'foreach'
       && lk != 63                  // 'i32'
       && lk != 64                  // 'i64'
       && lk != 65                  // 'if'
       && lk != 66                  // 'return'
       && lk != 67                  // 'switch'
       && lk != 68                  // 'while'
       && lk != 69                  // '{'
       && lk != 70                  // '|'
       && lk != 71                  // '|='
       && lk != 72                  // '||'
       && lk != 73                  // '}'
       && lk != 74                  // '~'
       && lk != 1431                // '+' '!'
       && lk != 1435                // '-' '!'
       && lk != 2967                // '+' '+'
       && lk != 2971                // '-' '+'
       && lk != 3095                // '+' '++'
       && lk != 3099                // '-' '++'
       && lk != 3479                // '+' '-'
       && lk != 3483                // '-' '-'
       && lk != 3607                // '+' '--'
       && lk != 3611                // '-' '--'
       && lk != 9495                // '+' '~'
       && lk != 9499                // '-' '~'
       && lk != 311703              // '+' Identifier ')'
       && lk != 311707              // '-' Identifier ')'
       && lk != 311831              // '+' Character ')'
       && lk != 311835              // '-' Character ')'
       && lk != 311959              // '+' String ')'
       && lk != 311963              // '-' String ')'
       && lk != 312087              // '+' Integer ')'
       && lk != 312091              // '-' Integer ')'
       && lk != 312215              // '+' Real ')'
       && lk != 312219              // '-' Real ')'
       && lk != 426391              // '+' Identifier ','
       && lk != 426395              // '-' Identifier ','
       && lk != 426519              // '+' Character ','
       && lk != 426523              // '-' Character ','
       && lk != 426647              // '+' String ','
       && lk != 426651              // '-' String ','
       && lk != 426775              // '+' Integer ','
       && lk != 426779              // '-' Integer ','
       && lk != 426903              // '+' Real ','
       && lk != 426907              // '-' Real ','
       && lk != 541079              // '+' Identifier ':'
       && lk != 541083              // '-' Identifier ':'
       && lk != 541207              // '+' Character ':'
       && lk != 541211              // '-' Character ':'
       && lk != 541335              // '+' String ':'
       && lk != 541339              // '-' String ':'
       && lk != 541463              // '+' Integer ':'
       && lk != 541467              // '-' Integer ':'
       && lk != 541591              // '+' Real ':'
       && lk != 541595              // '-' Real ':'
       && lk != 819607              // '+' Identifier ']'
       && lk != 819611              // '-' Identifier ']'
       && lk != 819735              // '+' Character ']'
       && lk != 819739              // '-' Character ']'
       && lk != 819863              // '+' String ']'
       && lk != 819867              // '-' String ']'
       && lk != 819991              // '+' Integer ']'
       && lk != 819995              // '-' Integer ']'
       && lk != 820119              // '+' Real ']'
       && lk != 820123              // '-' Real ']'
       && lk != 950679              // '+' Identifier 'else'
       && lk != 950683              // '-' Identifier 'else'
       && lk != 950807              // '+' Character 'else'
       && lk != 950811              // '-' Character 'else'
       && lk != 950935              // '+' String 'else'
       && lk != 950939              // '-' String 'else'
       && lk != 951063              // '+' Integer 'else'
       && lk != 951067              // '-' Integer 'else'
       && lk != 951191              // '+' Real 'else'
       && lk != 951195)             // '-' Real 'else'
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
            case 23:                // '+'
              consumeT(23);         // '+'
              break;
            default:
              consumeT(27);         // '-'
            }
            lookahead1W(20);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
            try_MultiplicativeExpression();
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
      if (lk != -1
       && lk != 1431                // '+' '!'
       && lk != 1435                // '-' '!'
       && lk != 2967                // '+' '+'
       && lk != 2971                // '-' '+'
       && lk != 3095                // '+' '++'
       && lk != 3099                // '-' '++'
       && lk != 3479                // '+' '-'
       && lk != 3483                // '-' '-'
       && lk != 3607                // '+' '--'
       && lk != 3611                // '-' '--'
       && lk != 9495                // '+' '~'
       && lk != 9499                // '-' '~'
       && lk != 311703              // '+' Identifier ')'
       && lk != 311707              // '-' Identifier ')'
       && lk != 311831              // '+' Character ')'
       && lk != 311835              // '-' Character ')'
       && lk != 311959              // '+' String ')'
       && lk != 311963              // '-' String ')'
       && lk != 312087              // '+' Integer ')'
       && lk != 312091              // '-' Integer ')'
       && lk != 312215              // '+' Real ')'
       && lk != 312219              // '-' Real ')'
       && lk != 426391              // '+' Identifier ','
       && lk != 426395              // '-' Identifier ','
       && lk != 426519              // '+' Character ','
       && lk != 426523              // '-' Character ','
       && lk != 426647              // '+' String ','
       && lk != 426651              // '-' String ','
       && lk != 426775              // '+' Integer ','
       && lk != 426779              // '-' Integer ','
       && lk != 426903              // '+' Real ','
       && lk != 426907              // '-' Real ','
       && lk != 541079              // '+' Identifier ':'
       && lk != 541083              // '-' Identifier ':'
       && lk != 541207              // '+' Character ':'
       && lk != 541211              // '-' Character ':'
       && lk != 541335              // '+' String ':'
       && lk != 541339              // '-' String ':'
       && lk != 541463              // '+' Integer ':'
       && lk != 541467              // '-' Integer ':'
       && lk != 541591              // '+' Real ':'
       && lk != 541595              // '-' Real ':'
       && lk != 819607              // '+' Identifier ']'
       && lk != 819611              // '-' Identifier ']'
       && lk != 819735              // '+' Character ']'
       && lk != 819739              // '-' Character ']'
       && lk != 819863              // '+' String ']'
       && lk != 819867              // '-' String ']'
       && lk != 819991              // '+' Integer ']'
       && lk != 819995              // '-' Integer ']'
       && lk != 820119              // '+' Real ']'
       && lk != 820123              // '-' Real ']'
       && lk != 950679              // '+' Identifier 'else'
       && lk != 950683              // '-' Identifier 'else'
       && lk != 950807              // '+' Character 'else'
       && lk != 950811              // '-' Character 'else'
       && lk != 950935              // '+' String 'else'
       && lk != 950939              // '-' String 'else'
       && lk != 951063              // '+' Integer 'else'
       && lk != 951067              // '-' Integer 'else'
       && lk != 951191              // '+' Real 'else'
       && lk != 951195)             // '-' Real 'else'
      {
        break;
      }
      switch (l1)
      {
      case 23:                      // '+'
        consume(23);                // '+'
        break;
      default:
        consume(27);                // '-'
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_MultiplicativeExpression();
    }
    eventHandler.endNonterminal("AdditiveExpression", e0);
  }

  function try_AdditiveExpression()
  {
    try_MultiplicativeExpression();
    for (;;)
    {
      switch (l1)
      {
      case 23:                      // '+'
      case 27:                      // '-'
        lookahead2W(20);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 407:                   // '+' Identifier
        case 411:                   // '-' Identifier
          lookahead3W(43);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 6295:                  // '+' '['
        case 6299:                  // '-' '['
          lookahead3W(24);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          break;
        case 2327:                  // '+' '('
        case 8855:                  // '+' '{'
        case 2331:                  // '-' '('
        case 8859:                  // '-' '{'
          lookahead3W(21);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
          break;
        case 535:                   // '+' Character
        case 663:                   // '+' String
        case 791:                   // '+' Integer
        case 919:                   // '+' Real
        case 539:                   // '-' Character
        case 667:                   // '-' String
        case 795:                   // '-' Integer
        case 923:                   // '-' Real
          lookahead3W(42);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 8                   // Comment
       && lk != 11                  // '!'
       && lk != 12                  // '!='
       && lk != 14                  // '%='
       && lk != 15                  // '&'
       && lk != 16                  // '&&'
       && lk != 17                  // '&='
       && lk != 18                  // '('
       && lk != 19                  // ')'
       && lk != 22                  // '*='
       && lk != 24                  // '++'
       && lk != 25                  // '+='
       && lk != 26                  // ','
       && lk != 28                  // '--'
       && lk != 29                  // '-='
       && lk != 32                  // '/='
       && lk != 33                  // ':'
       && lk != 34                  // ':='
       && lk != 35                  // ';'
       && lk != 36                  // '<'
       && lk != 37                  // '<<'
       && lk != 38                  // '<<='
       && lk != 39                  // '<='
       && lk != 40                  // '='
       && lk != 41                  // '=='
       && lk != 43                  // '>'
       && lk != 44                  // '>='
       && lk != 45                  // '>>'
       && lk != 46                  // '>>='
       && lk != 47                  // '?'
       && lk != 48                  // '?='
       && lk != 49                  // '['
       && lk != 50                  // ']'
       && lk != 51                  // '^'
       && lk != 52                  // '^='
       && lk != 53                  // 'break'
       && lk != 54                  // 'case'
       && lk != 55                  // 'continue'
       && lk != 56                  // 'default'
       && lk != 57                  // 'do'
       && lk != 58                  // 'else'
       && lk != 59                  // 'f32'
       && lk != 60                  // 'f64'
       && lk != 61                  // 'for'
       && lk != 62                  // 'foreach'
       && lk != 63                  // 'i32'
       && lk != 64                  // 'i64'
       && lk != 65                  // 'if'
       && lk != 66                  // 'return'
       && lk != 67                  // 'switch'
       && lk != 68                  // 'while'
       && lk != 69                  // '{'
       && lk != 70                  // '|'
       && lk != 71                  // '|='
       && lk != 72                  // '||'
       && lk != 73                  // '}'
       && lk != 74                  // '~'
       && lk != 1431                // '+' '!'
       && lk != 1435                // '-' '!'
       && lk != 2967                // '+' '+'
       && lk != 2971                // '-' '+'
       && lk != 3095                // '+' '++'
       && lk != 3099                // '-' '++'
       && lk != 3479                // '+' '-'
       && lk != 3483                // '-' '-'
       && lk != 3607                // '+' '--'
       && lk != 3611                // '-' '--'
       && lk != 9495                // '+' '~'
       && lk != 9499                // '-' '~'
       && lk != 311703              // '+' Identifier ')'
       && lk != 311707              // '-' Identifier ')'
       && lk != 311831              // '+' Character ')'
       && lk != 311835              // '-' Character ')'
       && lk != 311959              // '+' String ')'
       && lk != 311963              // '-' String ')'
       && lk != 312087              // '+' Integer ')'
       && lk != 312091              // '-' Integer ')'
       && lk != 312215              // '+' Real ')'
       && lk != 312219              // '-' Real ')'
       && lk != 426391              // '+' Identifier ','
       && lk != 426395              // '-' Identifier ','
       && lk != 426519              // '+' Character ','
       && lk != 426523              // '-' Character ','
       && lk != 426647              // '+' String ','
       && lk != 426651              // '-' String ','
       && lk != 426775              // '+' Integer ','
       && lk != 426779              // '-' Integer ','
       && lk != 426903              // '+' Real ','
       && lk != 426907              // '-' Real ','
       && lk != 541079              // '+' Identifier ':'
       && lk != 541083              // '-' Identifier ':'
       && lk != 541207              // '+' Character ':'
       && lk != 541211              // '-' Character ':'
       && lk != 541335              // '+' String ':'
       && lk != 541339              // '-' String ':'
       && lk != 541463              // '+' Integer ':'
       && lk != 541467              // '-' Integer ':'
       && lk != 541591              // '+' Real ':'
       && lk != 541595              // '-' Real ':'
       && lk != 819607              // '+' Identifier ']'
       && lk != 819611              // '-' Identifier ']'
       && lk != 819735              // '+' Character ']'
       && lk != 819739              // '-' Character ']'
       && lk != 819863              // '+' String ']'
       && lk != 819867              // '-' String ']'
       && lk != 819991              // '+' Integer ']'
       && lk != 819995              // '-' Integer ']'
       && lk != 820119              // '+' Real ']'
       && lk != 820123              // '-' Real ']'
       && lk != 950679              // '+' Identifier 'else'
       && lk != 950683              // '-' Identifier 'else'
       && lk != 950807              // '+' Character 'else'
       && lk != 950811              // '-' Character 'else'
       && lk != 950935              // '+' String 'else'
       && lk != 950939              // '-' String 'else'
       && lk != 951063              // '+' Integer 'else'
       && lk != 951067              // '-' Integer 'else'
       && lk != 951191              // '+' Real 'else'
       && lk != 951195)             // '-' Real 'else'
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
            case 23:                // '+'
              consumeT(23);         // '+'
              break;
            default:
              consumeT(27);         // '-'
            }
            lookahead1W(20);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
            try_MultiplicativeExpression();
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
      if (lk != -1
       && lk != 1431                // '+' '!'
       && lk != 1435                // '-' '!'
       && lk != 2967                // '+' '+'
       && lk != 2971                // '-' '+'
       && lk != 3095                // '+' '++'
       && lk != 3099                // '-' '++'
       && lk != 3479                // '+' '-'
       && lk != 3483                // '-' '-'
       && lk != 3607                // '+' '--'
       && lk != 3611                // '-' '--'
       && lk != 9495                // '+' '~'
       && lk != 9499                // '-' '~'
       && lk != 311703              // '+' Identifier ')'
       && lk != 311707              // '-' Identifier ')'
       && lk != 311831              // '+' Character ')'
       && lk != 311835              // '-' Character ')'
       && lk != 311959              // '+' String ')'
       && lk != 311963              // '-' String ')'
       && lk != 312087              // '+' Integer ')'
       && lk != 312091              // '-' Integer ')'
       && lk != 312215              // '+' Real ')'
       && lk != 312219              // '-' Real ')'
       && lk != 426391              // '+' Identifier ','
       && lk != 426395              // '-' Identifier ','
       && lk != 426519              // '+' Character ','
       && lk != 426523              // '-' Character ','
       && lk != 426647              // '+' String ','
       && lk != 426651              // '-' String ','
       && lk != 426775              // '+' Integer ','
       && lk != 426779              // '-' Integer ','
       && lk != 426903              // '+' Real ','
       && lk != 426907              // '-' Real ','
       && lk != 541079              // '+' Identifier ':'
       && lk != 541083              // '-' Identifier ':'
       && lk != 541207              // '+' Character ':'
       && lk != 541211              // '-' Character ':'
       && lk != 541335              // '+' String ':'
       && lk != 541339              // '-' String ':'
       && lk != 541463              // '+' Integer ':'
       && lk != 541467              // '-' Integer ':'
       && lk != 541591              // '+' Real ':'
       && lk != 541595              // '-' Real ':'
       && lk != 819607              // '+' Identifier ']'
       && lk != 819611              // '-' Identifier ']'
       && lk != 819735              // '+' Character ']'
       && lk != 819739              // '-' Character ']'
       && lk != 819863              // '+' String ']'
       && lk != 819867              // '-' String ']'
       && lk != 819991              // '+' Integer ']'
       && lk != 819995              // '-' Integer ']'
       && lk != 820119              // '+' Real ']'
       && lk != 820123              // '-' Real ']'
       && lk != 950679              // '+' Identifier 'else'
       && lk != 950683              // '-' Identifier 'else'
       && lk != 950807              // '+' Character 'else'
       && lk != 950811              // '-' Character 'else'
       && lk != 950935              // '+' String 'else'
       && lk != 950939              // '-' String 'else'
       && lk != 951063              // '+' Integer 'else'
       && lk != 951067              // '-' Integer 'else'
       && lk != 951191              // '+' Real 'else'
       && lk != 951195)             // '-' Real 'else'
      {
        break;
      }
      switch (l1)
      {
      case 23:                      // '+'
        consumeT(23);               // '+'
        break;
      default:
        consumeT(27);               // '-'
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_MultiplicativeExpression();
    }
  }

  function parse_MultiplicativeExpression()
  {
    eventHandler.startNonterminal("MultiplicativeExpression", e0);
    parse_PowerExpression();
    for (;;)
    {
      if (l1 != 13                  // '%'
       && l1 != 20                  // '*'
       && l1 != 31)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 20:                      // '*'
        consume(20);                // '*'
        break;
      case 31:                      // '/'
        consume(31);                // '/'
        break;
      default:
        consume(13);                // '%'
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_PowerExpression();
    }
    eventHandler.endNonterminal("MultiplicativeExpression", e0);
  }

  function try_MultiplicativeExpression()
  {
    try_PowerExpression();
    for (;;)
    {
      if (l1 != 13                  // '%'
       && l1 != 20                  // '*'
       && l1 != 31)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 20:                      // '*'
        consumeT(20);               // '*'
        break;
      case 31:                      // '/'
        consumeT(31);               // '/'
        break;
      default:
        consumeT(13);               // '%'
      }
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_PowerExpression();
    }
  }

  function parse_PowerExpression()
  {
    eventHandler.startNonterminal("PowerExpression", e0);
    parse_UnaryExpression();
    for (;;)
    {
      lookahead1W(42);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      if (l1 != 21)                 // '**'
      {
        break;
      }
      consume(21);                  // '**'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_UnaryExpression();
    }
    eventHandler.endNonterminal("PowerExpression", e0);
  }

  function try_PowerExpression()
  {
    try_UnaryExpression();
    for (;;)
    {
      lookahead1W(42);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      if (l1 != 21)                 // '**'
      {
        break;
      }
      consumeT(21);                 // '**'
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_UnaryExpression();
    }
  }

  function parse_UnaryExpression()
  {
    eventHandler.startNonterminal("UnaryExpression", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(43);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 3843:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6275:                    // Identifier '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 3075:                    // Identifier '++'
      case 3587:                    // Identifier '--'
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 18:                        // '('
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 402:                     // '(' Identifier
        lookahead3W(35);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6290:                    // '(' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8850:                    // '(' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 2322:                    // '(' '('
      case 7314:                    // '(' 'do'
      case 8466:                    // '(' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 530:                     // '(' Character
      case 658:                     // '(' String
      case 786:                     // '(' Integer
      case 914:                     // '(' Real
        lookahead3W(30);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1042:                    // '(' Comment
      case 4498:                    // '(' ';'
      case 6802:                    // '(' 'break'
      case 7058:                    // '(' 'continue'
        lookahead3W(3);             // WhiteSpace^token | ')'
        break;
      case 7570:                    // '(' 'f32'
      case 7698:                    // '(' 'f64'
      case 8082:                    // '(' 'i32'
      case 8210:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7826:                    // '(' 'for'
      case 7954:                    // '(' 'foreach'
      case 8338:                    // '(' 'if'
      case 8594:                    // '(' 'switch'
      case 8722:                    // '(' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1426:                    // '(' '!'
      case 2962:                    // '(' '+'
      case 3090:                    // '(' '++'
      case 3474:                    // '(' '-'
      case 3602:                    // '(' '--'
      case 9490:                    // '(' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 49:                        // '['
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 433:                     // '[' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4529:                    // '[' ';'
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 6321:                    // '[' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 6449:                    // '[' ']'
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 8881:                    // '[' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 1073:                    // '[' Comment
      case 6833:                    // '[' 'break'
      case 7089:                    // '[' 'continue'
        lookahead3W(18);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 2353:                    // '[' '('
      case 7345:                    // '[' 'do'
      case 8497:                    // '[' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 561:                     // '[' Character
      case 689:                     // '[' String
      case 817:                     // '[' Integer
      case 945:                     // '[' Real
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 7601:                    // '[' 'f32'
      case 7729:                    // '[' 'f64'
      case 8113:                    // '[' 'i32'
      case 8241:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7857:                    // '[' 'for'
      case 7985:                    // '[' 'foreach'
      case 8369:                    // '[' 'if'
      case 8625:                    // '[' 'switch'
      case 8753:                    // '[' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1457:                    // '[' '!'
      case 2993:                    // '[' '+'
      case 3121:                    // '[' '++'
      case 3505:                    // '[' '-'
      case 3633:                    // '[' '--'
      case 9521:                    // '[' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 69:                        // '{'
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 453:                     // '{' Identifier
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 709:                     // '{' String
        lookahead3W(33);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6341:                    // '{' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8901:                    // '{' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 581:                     // '{' Character
      case 837:                     // '{' Integer
      case 965:                     // '{' Real
        lookahead3W(31);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 2373:                    // '{' '('
      case 7365:                    // '{' 'do'
      case 8517:                    // '{' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 1093:                    // '{' Comment
      case 4549:                    // '{' ';'
      case 6853:                    // '{' 'break'
      case 7109:                    // '{' 'continue'
        lookahead3W(16);            // WhiteSpace^token | ',' | '}'
        break;
      case 7621:                    // '{' 'f32'
      case 7749:                    // '{' 'f64'
      case 8133:                    // '{' 'i32'
      case 8261:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7877:                    // '{' 'for'
      case 8005:                    // '{' 'foreach'
      case 8389:                    // '{' 'if'
      case 8645:                    // '{' 'switch'
      case 8773:                    // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1477:                    // '{' '!'
      case 3013:                    // '{' '+'
      case 3141:                    // '{' '++'
      case 3525:                    // '{' '-'
      case 3653:                    // '{' '--'
      case 9541:                    // '{' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
      lookahead2W(42);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 3076:                    // Character '++'
      case 3588:                    // Character '--'
      case 3077:                    // String '++'
      case 3589:                    // String '--'
      case 3078:                    // Integer '++'
      case 3590:                    // Integer '--'
      case 3079:                    // Real '++'
      case 3591:                    // Real '--'
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 11                    // '!'
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 74                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Character END
     && lk != 133                   // String END
     && lk != 134                   // Integer END
     && lk != 135                   // Real END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Character Identifier
     && lk != 389                   // String Identifier
     && lk != 390                   // Integer Identifier
     && lk != 391                   // Real Identifier
     && lk != 515                   // Identifier Character
     && lk != 516                   // Character Character
     && lk != 517                   // String Character
     && lk != 518                   // Integer Character
     && lk != 519                   // Real Character
     && lk != 643                   // Identifier String
     && lk != 644                   // Character String
     && lk != 645                   // String String
     && lk != 646                   // Integer String
     && lk != 647                   // Real String
     && lk != 771                   // Identifier Integer
     && lk != 772                   // Character Integer
     && lk != 773                   // String Integer
     && lk != 774                   // Integer Integer
     && lk != 775                   // Real Integer
     && lk != 899                   // Identifier Real
     && lk != 900                   // Character Real
     && lk != 901                   // String Real
     && lk != 902                   // Integer Real
     && lk != 903                   // Real Real
     && lk != 1027                  // Identifier Comment
     && lk != 1028                  // Character Comment
     && lk != 1029                  // String Comment
     && lk != 1030                  // Integer Comment
     && lk != 1031                  // Real Comment
     && lk != 1411                  // Identifier '!'
     && lk != 1412                  // Character '!'
     && lk != 1413                  // String '!'
     && lk != 1414                  // Integer '!'
     && lk != 1415                  // Real '!'
     && lk != 1539                  // Identifier '!='
     && lk != 1540                  // Character '!='
     && lk != 1541                  // String '!='
     && lk != 1542                  // Integer '!='
     && lk != 1543                  // Real '!='
     && lk != 1667                  // Identifier '%'
     && lk != 1668                  // Character '%'
     && lk != 1669                  // String '%'
     && lk != 1670                  // Integer '%'
     && lk != 1671                  // Real '%'
     && lk != 1795                  // Identifier '%='
     && lk != 1796                  // Character '%='
     && lk != 1797                  // String '%='
     && lk != 1798                  // Integer '%='
     && lk != 1799                  // Real '%='
     && lk != 1923                  // Identifier '&'
     && lk != 1924                  // Character '&'
     && lk != 1925                  // String '&'
     && lk != 1926                  // Integer '&'
     && lk != 1927                  // Real '&'
     && lk != 2051                  // Identifier '&&'
     && lk != 2052                  // Character '&&'
     && lk != 2053                  // String '&&'
     && lk != 2054                  // Integer '&&'
     && lk != 2055                  // Real '&&'
     && lk != 2179                  // Identifier '&='
     && lk != 2180                  // Character '&='
     && lk != 2181                  // String '&='
     && lk != 2182                  // Integer '&='
     && lk != 2183                  // Real '&='
     && lk != 2308                  // Character '('
     && lk != 2309                  // String '('
     && lk != 2310                  // Integer '('
     && lk != 2311                  // Real '('
     && lk != 2435                  // Identifier ')'
     && lk != 2436                  // Character ')'
     && lk != 2437                  // String ')'
     && lk != 2438                  // Integer ')'
     && lk != 2439                  // Real ')'
     && lk != 2563                  // Identifier '*'
     && lk != 2564                  // Character '*'
     && lk != 2565                  // String '*'
     && lk != 2566                  // Integer '*'
     && lk != 2567                  // Real '*'
     && lk != 2691                  // Identifier '**'
     && lk != 2692                  // Character '**'
     && lk != 2693                  // String '**'
     && lk != 2694                  // Integer '**'
     && lk != 2695                  // Real '**'
     && lk != 2819                  // Identifier '*='
     && lk != 2820                  // Character '*='
     && lk != 2821                  // String '*='
     && lk != 2822                  // Integer '*='
     && lk != 2823                  // Real '*='
     && lk != 2947                  // Identifier '+'
     && lk != 2948                  // Character '+'
     && lk != 2949                  // String '+'
     && lk != 2950                  // Integer '+'
     && lk != 2951                  // Real '+'
     && lk != 3203                  // Identifier '+='
     && lk != 3204                  // Character '+='
     && lk != 3205                  // String '+='
     && lk != 3206                  // Integer '+='
     && lk != 3207                  // Real '+='
     && lk != 3331                  // Identifier ','
     && lk != 3332                  // Character ','
     && lk != 3333                  // String ','
     && lk != 3334                  // Integer ','
     && lk != 3335                  // Real ','
     && lk != 3459                  // Identifier '-'
     && lk != 3460                  // Character '-'
     && lk != 3461                  // String '-'
     && lk != 3462                  // Integer '-'
     && lk != 3463                  // Real '-'
     && lk != 3715                  // Identifier '-='
     && lk != 3716                  // Character '-='
     && lk != 3717                  // String '-='
     && lk != 3718                  // Integer '-='
     && lk != 3719                  // Real '-='
     && lk != 3971                  // Identifier '/'
     && lk != 3972                  // Character '/'
     && lk != 3973                  // String '/'
     && lk != 3974                  // Integer '/'
     && lk != 3975                  // Real '/'
     && lk != 4099                  // Identifier '/='
     && lk != 4100                  // Character '/='
     && lk != 4101                  // String '/='
     && lk != 4102                  // Integer '/='
     && lk != 4103                  // Real '/='
     && lk != 4227                  // Identifier ':'
     && lk != 4228                  // Character ':'
     && lk != 4229                  // String ':'
     && lk != 4230                  // Integer ':'
     && lk != 4231                  // Real ':'
     && lk != 4355                  // Identifier ':='
     && lk != 4356                  // Character ':='
     && lk != 4357                  // String ':='
     && lk != 4358                  // Integer ':='
     && lk != 4359                  // Real ':='
     && lk != 4483                  // Identifier ';'
     && lk != 4484                  // Character ';'
     && lk != 4485                  // String ';'
     && lk != 4486                  // Integer ';'
     && lk != 4487                  // Real ';'
     && lk != 4611                  // Identifier '<'
     && lk != 4612                  // Character '<'
     && lk != 4613                  // String '<'
     && lk != 4614                  // Integer '<'
     && lk != 4615                  // Real '<'
     && lk != 4739                  // Identifier '<<'
     && lk != 4740                  // Character '<<'
     && lk != 4741                  // String '<<'
     && lk != 4742                  // Integer '<<'
     && lk != 4743                  // Real '<<'
     && lk != 4867                  // Identifier '<<='
     && lk != 4868                  // Character '<<='
     && lk != 4869                  // String '<<='
     && lk != 4870                  // Integer '<<='
     && lk != 4871                  // Real '<<='
     && lk != 4995                  // Identifier '<='
     && lk != 4996                  // Character '<='
     && lk != 4997                  // String '<='
     && lk != 4998                  // Integer '<='
     && lk != 4999                  // Real '<='
     && lk != 5123                  // Identifier '='
     && lk != 5124                  // Character '='
     && lk != 5125                  // String '='
     && lk != 5126                  // Integer '='
     && lk != 5127                  // Real '='
     && lk != 5251                  // Identifier '=='
     && lk != 5252                  // Character '=='
     && lk != 5253                  // String '=='
     && lk != 5254                  // Integer '=='
     && lk != 5255                  // Real '=='
     && lk != 5507                  // Identifier '>'
     && lk != 5508                  // Character '>'
     && lk != 5509                  // String '>'
     && lk != 5510                  // Integer '>'
     && lk != 5511                  // Real '>'
     && lk != 5635                  // Identifier '>='
     && lk != 5636                  // Character '>='
     && lk != 5637                  // String '>='
     && lk != 5638                  // Integer '>='
     && lk != 5639                  // Real '>='
     && lk != 5763                  // Identifier '>>'
     && lk != 5764                  // Character '>>'
     && lk != 5765                  // String '>>'
     && lk != 5766                  // Integer '>>'
     && lk != 5767                  // Real '>>'
     && lk != 5891                  // Identifier '>>='
     && lk != 5892                  // Character '>>='
     && lk != 5893                  // String '>>='
     && lk != 5894                  // Integer '>>='
     && lk != 5895                  // Real '>>='
     && lk != 6019                  // Identifier '?'
     && lk != 6020                  // Character '?'
     && lk != 6021                  // String '?'
     && lk != 6022                  // Integer '?'
     && lk != 6023                  // Real '?'
     && lk != 6147                  // Identifier '?='
     && lk != 6148                  // Character '?='
     && lk != 6149                  // String '?='
     && lk != 6150                  // Integer '?='
     && lk != 6151                  // Real '?='
     && lk != 6276                  // Character '['
     && lk != 6277                  // String '['
     && lk != 6278                  // Integer '['
     && lk != 6279                  // Real '['
     && lk != 6403                  // Identifier ']'
     && lk != 6404                  // Character ']'
     && lk != 6405                  // String ']'
     && lk != 6406                  // Integer ']'
     && lk != 6407                  // Real ']'
     && lk != 6531                  // Identifier '^'
     && lk != 6532                  // Character '^'
     && lk != 6533                  // String '^'
     && lk != 6534                  // Integer '^'
     && lk != 6535                  // Real '^'
     && lk != 6659                  // Identifier '^='
     && lk != 6660                  // Character '^='
     && lk != 6661                  // String '^='
     && lk != 6662                  // Integer '^='
     && lk != 6663                  // Real '^='
     && lk != 6787                  // Identifier 'break'
     && lk != 6788                  // Character 'break'
     && lk != 6789                  // String 'break'
     && lk != 6790                  // Integer 'break'
     && lk != 6791                  // Real 'break'
     && lk != 6915                  // Identifier 'case'
     && lk != 6916                  // Character 'case'
     && lk != 6917                  // String 'case'
     && lk != 6918                  // Integer 'case'
     && lk != 6919                  // Real 'case'
     && lk != 7043                  // Identifier 'continue'
     && lk != 7044                  // Character 'continue'
     && lk != 7045                  // String 'continue'
     && lk != 7046                  // Integer 'continue'
     && lk != 7047                  // Real 'continue'
     && lk != 7171                  // Identifier 'default'
     && lk != 7172                  // Character 'default'
     && lk != 7173                  // String 'default'
     && lk != 7174                  // Integer 'default'
     && lk != 7175                  // Real 'default'
     && lk != 7299                  // Identifier 'do'
     && lk != 7300                  // Character 'do'
     && lk != 7301                  // String 'do'
     && lk != 7302                  // Integer 'do'
     && lk != 7303                  // Real 'do'
     && lk != 7427                  // Identifier 'else'
     && lk != 7428                  // Character 'else'
     && lk != 7429                  // String 'else'
     && lk != 7430                  // Integer 'else'
     && lk != 7431                  // Real 'else'
     && lk != 7555                  // Identifier 'f32'
     && lk != 7556                  // Character 'f32'
     && lk != 7557                  // String 'f32'
     && lk != 7558                  // Integer 'f32'
     && lk != 7559                  // Real 'f32'
     && lk != 7683                  // Identifier 'f64'
     && lk != 7684                  // Character 'f64'
     && lk != 7685                  // String 'f64'
     && lk != 7686                  // Integer 'f64'
     && lk != 7687                  // Real 'f64'
     && lk != 7811                  // Identifier 'for'
     && lk != 7812                  // Character 'for'
     && lk != 7813                  // String 'for'
     && lk != 7814                  // Integer 'for'
     && lk != 7815                  // Real 'for'
     && lk != 7939                  // Identifier 'foreach'
     && lk != 7940                  // Character 'foreach'
     && lk != 7941                  // String 'foreach'
     && lk != 7942                  // Integer 'foreach'
     && lk != 7943                  // Real 'foreach'
     && lk != 8067                  // Identifier 'i32'
     && lk != 8068                  // Character 'i32'
     && lk != 8069                  // String 'i32'
     && lk != 8070                  // Integer 'i32'
     && lk != 8071                  // Real 'i32'
     && lk != 8195                  // Identifier 'i64'
     && lk != 8196                  // Character 'i64'
     && lk != 8197                  // String 'i64'
     && lk != 8198                  // Integer 'i64'
     && lk != 8199                  // Real 'i64'
     && lk != 8323                  // Identifier 'if'
     && lk != 8324                  // Character 'if'
     && lk != 8325                  // String 'if'
     && lk != 8326                  // Integer 'if'
     && lk != 8327                  // Real 'if'
     && lk != 8451                  // Identifier 'return'
     && lk != 8452                  // Character 'return'
     && lk != 8453                  // String 'return'
     && lk != 8454                  // Integer 'return'
     && lk != 8455                  // Real 'return'
     && lk != 8579                  // Identifier 'switch'
     && lk != 8580                  // Character 'switch'
     && lk != 8581                  // String 'switch'
     && lk != 8582                  // Integer 'switch'
     && lk != 8583                  // Real 'switch'
     && lk != 8707                  // Identifier 'while'
     && lk != 8708                  // Character 'while'
     && lk != 8709                  // String 'while'
     && lk != 8710                  // Integer 'while'
     && lk != 8711                  // Real 'while'
     && lk != 8835                  // Identifier '{'
     && lk != 8836                  // Character '{'
     && lk != 8837                  // String '{'
     && lk != 8838                  // Integer '{'
     && lk != 8839                  // Real '{'
     && lk != 8963                  // Identifier '|'
     && lk != 8964                  // Character '|'
     && lk != 8965                  // String '|'
     && lk != 8966                  // Integer '|'
     && lk != 8967                  // Real '|'
     && lk != 9091                  // Identifier '|='
     && lk != 9092                  // Character '|='
     && lk != 9093                  // String '|='
     && lk != 9094                  // Integer '|='
     && lk != 9095                  // Real '|='
     && lk != 9219                  // Identifier '||'
     && lk != 9220                  // Character '||'
     && lk != 9221                  // String '||'
     && lk != 9222                  // Integer '||'
     && lk != 9223                  // Real '||'
     && lk != 9347                  // Identifier '}'
     && lk != 9348                  // Character '}'
     && lk != 9349                  // String '}'
     && lk != 9350                  // Integer '}'
     && lk != 9351                  // Real '}'
     && lk != 9475                  // Identifier '~'
     && lk != 9476                  // Character '~'
     && lk != 9477                  // String '~'
     && lk != 9478                  // Integer '~'
     && lk != 9479                  // Real '~'
     && lk != 19459                 // Identifier '++' END
     && lk != 19460                 // Character '++' END
     && lk != 19461                 // String '++' END
     && lk != 19462                 // Integer '++' END
     && lk != 19463                 // Real '++' END
     && lk != 19971                 // Identifier '--' END
     && lk != 19972                 // Character '--' END
     && lk != 19973                 // String '--' END
     && lk != 19974                 // Integer '--' END
     && lk != 19975                 // Real '--' END
     && lk != 22833                 // '[' ']' END
     && lk != 55601                 // '[' ']' Identifier
     && lk != 71985                 // '[' ']' Character
     && lk != 88369                 // '[' ']' String
     && lk != 104753                // '[' ']' Integer
     && lk != 121137                // '[' ']' Real
     && lk != 134147                // Identifier '++' Comment
     && lk != 134148                // Character '++' Comment
     && lk != 134149                // String '++' Comment
     && lk != 134150                // Integer '++' Comment
     && lk != 134151                // Real '++' Comment
     && lk != 134659                // Identifier '--' Comment
     && lk != 134660                // Character '--' Comment
     && lk != 134661                // String '--' Comment
     && lk != 134662                // Integer '--' Comment
     && lk != 134663                // Real '--' Comment
     && lk != 137521                // '[' ']' Comment
     && lk != 183299                // Identifier '++' '!'
     && lk != 183300                // Character '++' '!'
     && lk != 183301                // String '++' '!'
     && lk != 183302                // Integer '++' '!'
     && lk != 183303                // Real '++' '!'
     && lk != 183811                // Identifier '--' '!'
     && lk != 183812                // Character '--' '!'
     && lk != 183813                // String '--' '!'
     && lk != 183814                // Integer '--' '!'
     && lk != 183815                // Real '--' '!'
     && lk != 186673                // '[' ']' '!'
     && lk != 199683                // Identifier '++' '!='
     && lk != 199684                // Character '++' '!='
     && lk != 199685                // String '++' '!='
     && lk != 199686                // Integer '++' '!='
     && lk != 199687                // Real '++' '!='
     && lk != 200195                // Identifier '--' '!='
     && lk != 200196                // Character '--' '!='
     && lk != 200197                // String '--' '!='
     && lk != 200198                // Integer '--' '!='
     && lk != 200199                // Real '--' '!='
     && lk != 203057                // '[' ']' '!='
     && lk != 216067                // Identifier '++' '%'
     && lk != 216068                // Character '++' '%'
     && lk != 216069                // String '++' '%'
     && lk != 216070                // Integer '++' '%'
     && lk != 216071                // Real '++' '%'
     && lk != 216579                // Identifier '--' '%'
     && lk != 216580                // Character '--' '%'
     && lk != 216581                // String '--' '%'
     && lk != 216582                // Integer '--' '%'
     && lk != 216583                // Real '--' '%'
     && lk != 219441                // '[' ']' '%'
     && lk != 232451                // Identifier '++' '%='
     && lk != 232452                // Character '++' '%='
     && lk != 232453                // String '++' '%='
     && lk != 232454                // Integer '++' '%='
     && lk != 232455                // Real '++' '%='
     && lk != 232963                // Identifier '--' '%='
     && lk != 232964                // Character '--' '%='
     && lk != 232965                // String '--' '%='
     && lk != 232966                // Integer '--' '%='
     && lk != 232967                // Real '--' '%='
     && lk != 235825                // '[' ']' '%='
     && lk != 248835                // Identifier '++' '&'
     && lk != 248836                // Character '++' '&'
     && lk != 248837                // String '++' '&'
     && lk != 248838                // Integer '++' '&'
     && lk != 248839                // Real '++' '&'
     && lk != 249347                // Identifier '--' '&'
     && lk != 249348                // Character '--' '&'
     && lk != 249349                // String '--' '&'
     && lk != 249350                // Integer '--' '&'
     && lk != 249351                // Real '--' '&'
     && lk != 252209                // '[' ']' '&'
     && lk != 265219                // Identifier '++' '&&'
     && lk != 265220                // Character '++' '&&'
     && lk != 265221                // String '++' '&&'
     && lk != 265222                // Integer '++' '&&'
     && lk != 265223                // Real '++' '&&'
     && lk != 265731                // Identifier '--' '&&'
     && lk != 265732                // Character '--' '&&'
     && lk != 265733                // String '--' '&&'
     && lk != 265734                // Integer '--' '&&'
     && lk != 265735                // Real '--' '&&'
     && lk != 268593                // '[' ']' '&&'
     && lk != 281603                // Identifier '++' '&='
     && lk != 281604                // Character '++' '&='
     && lk != 281605                // String '++' '&='
     && lk != 281606                // Integer '++' '&='
     && lk != 281607                // Real '++' '&='
     && lk != 282115                // Identifier '--' '&='
     && lk != 282116                // Character '--' '&='
     && lk != 282117                // String '--' '&='
     && lk != 282118                // Integer '--' '&='
     && lk != 282119                // Real '--' '&='
     && lk != 284977                // '[' ']' '&='
     && lk != 301361                // '[' ']' '('
     && lk != 314371                // Identifier '++' ')'
     && lk != 314372                // Character '++' ')'
     && lk != 314373                // String '++' ')'
     && lk != 314374                // Integer '++' ')'
     && lk != 314375                // Real '++' ')'
     && lk != 314883                // Identifier '--' ')'
     && lk != 314884                // Character '--' ')'
     && lk != 314885                // String '--' ')'
     && lk != 314886                // Integer '--' ')'
     && lk != 314887                // Real '--' ')'
     && lk != 317745                // '[' ']' ')'
     && lk != 330755                // Identifier '++' '*'
     && lk != 330756                // Character '++' '*'
     && lk != 330757                // String '++' '*'
     && lk != 330758                // Integer '++' '*'
     && lk != 330759                // Real '++' '*'
     && lk != 331267                // Identifier '--' '*'
     && lk != 331268                // Character '--' '*'
     && lk != 331269                // String '--' '*'
     && lk != 331270                // Integer '--' '*'
     && lk != 331271                // Real '--' '*'
     && lk != 334129                // '[' ']' '*'
     && lk != 347139                // Identifier '++' '**'
     && lk != 347140                // Character '++' '**'
     && lk != 347141                // String '++' '**'
     && lk != 347142                // Integer '++' '**'
     && lk != 347143                // Real '++' '**'
     && lk != 347651                // Identifier '--' '**'
     && lk != 347652                // Character '--' '**'
     && lk != 347653                // String '--' '**'
     && lk != 347654                // Integer '--' '**'
     && lk != 347655                // Real '--' '**'
     && lk != 350513                // '[' ']' '**'
     && lk != 363523                // Identifier '++' '*='
     && lk != 363524                // Character '++' '*='
     && lk != 363525                // String '++' '*='
     && lk != 363526                // Integer '++' '*='
     && lk != 363527                // Real '++' '*='
     && lk != 364035                // Identifier '--' '*='
     && lk != 364036                // Character '--' '*='
     && lk != 364037                // String '--' '*='
     && lk != 364038                // Integer '--' '*='
     && lk != 364039                // Real '--' '*='
     && lk != 366897                // '[' ']' '*='
     && lk != 379907                // Identifier '++' '+'
     && lk != 379908                // Character '++' '+'
     && lk != 379909                // String '++' '+'
     && lk != 379910                // Integer '++' '+'
     && lk != 379911                // Real '++' '+'
     && lk != 380419                // Identifier '--' '+'
     && lk != 380420                // Character '--' '+'
     && lk != 380421                // String '--' '+'
     && lk != 380422                // Integer '--' '+'
     && lk != 380423                // Real '--' '+'
     && lk != 383281                // '[' ']' '+'
     && lk != 396291                // Identifier '++' '++'
     && lk != 396292                // Character '++' '++'
     && lk != 396293                // String '++' '++'
     && lk != 396294                // Integer '++' '++'
     && lk != 396295                // Real '++' '++'
     && lk != 396803                // Identifier '--' '++'
     && lk != 396804                // Character '--' '++'
     && lk != 396805                // String '--' '++'
     && lk != 396806                // Integer '--' '++'
     && lk != 396807                // Real '--' '++'
     && lk != 412675                // Identifier '++' '+='
     && lk != 412676                // Character '++' '+='
     && lk != 412677                // String '++' '+='
     && lk != 412678                // Integer '++' '+='
     && lk != 412679                // Real '++' '+='
     && lk != 413187                // Identifier '--' '+='
     && lk != 413188                // Character '--' '+='
     && lk != 413189                // String '--' '+='
     && lk != 413190                // Integer '--' '+='
     && lk != 413191                // Real '--' '+='
     && lk != 416049                // '[' ']' '+='
     && lk != 429059                // Identifier '++' ','
     && lk != 429060                // Character '++' ','
     && lk != 429061                // String '++' ','
     && lk != 429062                // Integer '++' ','
     && lk != 429063                // Real '++' ','
     && lk != 429571                // Identifier '--' ','
     && lk != 429572                // Character '--' ','
     && lk != 429573                // String '--' ','
     && lk != 429574                // Integer '--' ','
     && lk != 429575                // Real '--' ','
     && lk != 432433                // '[' ']' ','
     && lk != 445443                // Identifier '++' '-'
     && lk != 445444                // Character '++' '-'
     && lk != 445445                // String '++' '-'
     && lk != 445446                // Integer '++' '-'
     && lk != 445447                // Real '++' '-'
     && lk != 445955                // Identifier '--' '-'
     && lk != 445956                // Character '--' '-'
     && lk != 445957                // String '--' '-'
     && lk != 445958                // Integer '--' '-'
     && lk != 445959                // Real '--' '-'
     && lk != 448817                // '[' ']' '-'
     && lk != 461827                // Identifier '++' '--'
     && lk != 461828                // Character '++' '--'
     && lk != 461829                // String '++' '--'
     && lk != 461830                // Integer '++' '--'
     && lk != 461831                // Real '++' '--'
     && lk != 462339                // Identifier '--' '--'
     && lk != 462340                // Character '--' '--'
     && lk != 462341                // String '--' '--'
     && lk != 462342                // Integer '--' '--'
     && lk != 462343                // Real '--' '--'
     && lk != 478211                // Identifier '++' '-='
     && lk != 478212                // Character '++' '-='
     && lk != 478213                // String '++' '-='
     && lk != 478214                // Integer '++' '-='
     && lk != 478215                // Real '++' '-='
     && lk != 478723                // Identifier '--' '-='
     && lk != 478724                // Character '--' '-='
     && lk != 478725                // String '--' '-='
     && lk != 478726                // Integer '--' '-='
     && lk != 478727                // Real '--' '-='
     && lk != 481585                // '[' ']' '-='
     && lk != 510979                // Identifier '++' '/'
     && lk != 510980                // Character '++' '/'
     && lk != 510981                // String '++' '/'
     && lk != 510982                // Integer '++' '/'
     && lk != 510983                // Real '++' '/'
     && lk != 511491                // Identifier '--' '/'
     && lk != 511492                // Character '--' '/'
     && lk != 511493                // String '--' '/'
     && lk != 511494                // Integer '--' '/'
     && lk != 511495                // Real '--' '/'
     && lk != 514353                // '[' ']' '/'
     && lk != 527363                // Identifier '++' '/='
     && lk != 527364                // Character '++' '/='
     && lk != 527365                // String '++' '/='
     && lk != 527366                // Integer '++' '/='
     && lk != 527367                // Real '++' '/='
     && lk != 527875                // Identifier '--' '/='
     && lk != 527876                // Character '--' '/='
     && lk != 527877                // String '--' '/='
     && lk != 527878                // Integer '--' '/='
     && lk != 527879                // Real '--' '/='
     && lk != 530737                // '[' ']' '/='
     && lk != 543747                // Identifier '++' ':'
     && lk != 543748                // Character '++' ':'
     && lk != 543749                // String '++' ':'
     && lk != 543750                // Integer '++' ':'
     && lk != 543751                // Real '++' ':'
     && lk != 544259                // Identifier '--' ':'
     && lk != 544260                // Character '--' ':'
     && lk != 544261                // String '--' ':'
     && lk != 544262                // Integer '--' ':'
     && lk != 544263                // Real '--' ':'
     && lk != 547121                // '[' ']' ':'
     && lk != 560131                // Identifier '++' ':='
     && lk != 560132                // Character '++' ':='
     && lk != 560133                // String '++' ':='
     && lk != 560134                // Integer '++' ':='
     && lk != 560135                // Real '++' ':='
     && lk != 560643                // Identifier '--' ':='
     && lk != 560644                // Character '--' ':='
     && lk != 560645                // String '--' ':='
     && lk != 560646                // Integer '--' ':='
     && lk != 560647                // Real '--' ':='
     && lk != 563505                // '[' ']' ':='
     && lk != 576515                // Identifier '++' ';'
     && lk != 576516                // Character '++' ';'
     && lk != 576517                // String '++' ';'
     && lk != 576518                // Integer '++' ';'
     && lk != 576519                // Real '++' ';'
     && lk != 577027                // Identifier '--' ';'
     && lk != 577028                // Character '--' ';'
     && lk != 577029                // String '--' ';'
     && lk != 577030                // Integer '--' ';'
     && lk != 577031                // Real '--' ';'
     && lk != 579889                // '[' ']' ';'
     && lk != 592899                // Identifier '++' '<'
     && lk != 592900                // Character '++' '<'
     && lk != 592901                // String '++' '<'
     && lk != 592902                // Integer '++' '<'
     && lk != 592903                // Real '++' '<'
     && lk != 593411                // Identifier '--' '<'
     && lk != 593412                // Character '--' '<'
     && lk != 593413                // String '--' '<'
     && lk != 593414                // Integer '--' '<'
     && lk != 593415                // Real '--' '<'
     && lk != 596273                // '[' ']' '<'
     && lk != 609283                // Identifier '++' '<<'
     && lk != 609284                // Character '++' '<<'
     && lk != 609285                // String '++' '<<'
     && lk != 609286                // Integer '++' '<<'
     && lk != 609287                // Real '++' '<<'
     && lk != 609795                // Identifier '--' '<<'
     && lk != 609796                // Character '--' '<<'
     && lk != 609797                // String '--' '<<'
     && lk != 609798                // Integer '--' '<<'
     && lk != 609799                // Real '--' '<<'
     && lk != 612657                // '[' ']' '<<'
     && lk != 625667                // Identifier '++' '<<='
     && lk != 625668                // Character '++' '<<='
     && lk != 625669                // String '++' '<<='
     && lk != 625670                // Integer '++' '<<='
     && lk != 625671                // Real '++' '<<='
     && lk != 626179                // Identifier '--' '<<='
     && lk != 626180                // Character '--' '<<='
     && lk != 626181                // String '--' '<<='
     && lk != 626182                // Integer '--' '<<='
     && lk != 626183                // Real '--' '<<='
     && lk != 629041                // '[' ']' '<<='
     && lk != 642051                // Identifier '++' '<='
     && lk != 642052                // Character '++' '<='
     && lk != 642053                // String '++' '<='
     && lk != 642054                // Integer '++' '<='
     && lk != 642055                // Real '++' '<='
     && lk != 642563                // Identifier '--' '<='
     && lk != 642564                // Character '--' '<='
     && lk != 642565                // String '--' '<='
     && lk != 642566                // Integer '--' '<='
     && lk != 642567                // Real '--' '<='
     && lk != 645425                // '[' ']' '<='
     && lk != 658435                // Identifier '++' '='
     && lk != 658436                // Character '++' '='
     && lk != 658437                // String '++' '='
     && lk != 658438                // Integer '++' '='
     && lk != 658439                // Real '++' '='
     && lk != 658947                // Identifier '--' '='
     && lk != 658948                // Character '--' '='
     && lk != 658949                // String '--' '='
     && lk != 658950                // Integer '--' '='
     && lk != 658951                // Real '--' '='
     && lk != 661809                // '[' ']' '='
     && lk != 674819                // Identifier '++' '=='
     && lk != 674820                // Character '++' '=='
     && lk != 674821                // String '++' '=='
     && lk != 674822                // Integer '++' '=='
     && lk != 674823                // Real '++' '=='
     && lk != 675331                // Identifier '--' '=='
     && lk != 675332                // Character '--' '=='
     && lk != 675333                // String '--' '=='
     && lk != 675334                // Integer '--' '=='
     && lk != 675335                // Real '--' '=='
     && lk != 678193                // '[' ']' '=='
     && lk != 707587                // Identifier '++' '>'
     && lk != 707588                // Character '++' '>'
     && lk != 707589                // String '++' '>'
     && lk != 707590                // Integer '++' '>'
     && lk != 707591                // Real '++' '>'
     && lk != 708099                // Identifier '--' '>'
     && lk != 708100                // Character '--' '>'
     && lk != 708101                // String '--' '>'
     && lk != 708102                // Integer '--' '>'
     && lk != 708103                // Real '--' '>'
     && lk != 710961                // '[' ']' '>'
     && lk != 723971                // Identifier '++' '>='
     && lk != 723972                // Character '++' '>='
     && lk != 723973                // String '++' '>='
     && lk != 723974                // Integer '++' '>='
     && lk != 723975                // Real '++' '>='
     && lk != 724483                // Identifier '--' '>='
     && lk != 724484                // Character '--' '>='
     && lk != 724485                // String '--' '>='
     && lk != 724486                // Integer '--' '>='
     && lk != 724487                // Real '--' '>='
     && lk != 727345                // '[' ']' '>='
     && lk != 740355                // Identifier '++' '>>'
     && lk != 740356                // Character '++' '>>'
     && lk != 740357                // String '++' '>>'
     && lk != 740358                // Integer '++' '>>'
     && lk != 740359                // Real '++' '>>'
     && lk != 740867                // Identifier '--' '>>'
     && lk != 740868                // Character '--' '>>'
     && lk != 740869                // String '--' '>>'
     && lk != 740870                // Integer '--' '>>'
     && lk != 740871                // Real '--' '>>'
     && lk != 743729                // '[' ']' '>>'
     && lk != 756739                // Identifier '++' '>>='
     && lk != 756740                // Character '++' '>>='
     && lk != 756741                // String '++' '>>='
     && lk != 756742                // Integer '++' '>>='
     && lk != 756743                // Real '++' '>>='
     && lk != 757251                // Identifier '--' '>>='
     && lk != 757252                // Character '--' '>>='
     && lk != 757253                // String '--' '>>='
     && lk != 757254                // Integer '--' '>>='
     && lk != 757255                // Real '--' '>>='
     && lk != 760113                // '[' ']' '>>='
     && lk != 773123                // Identifier '++' '?'
     && lk != 773124                // Character '++' '?'
     && lk != 773125                // String '++' '?'
     && lk != 773126                // Integer '++' '?'
     && lk != 773127                // Real '++' '?'
     && lk != 773635                // Identifier '--' '?'
     && lk != 773636                // Character '--' '?'
     && lk != 773637                // String '--' '?'
     && lk != 773638                // Integer '--' '?'
     && lk != 773639                // Real '--' '?'
     && lk != 776497                // '[' ']' '?'
     && lk != 789507                // Identifier '++' '?='
     && lk != 789508                // Character '++' '?='
     && lk != 789509                // String '++' '?='
     && lk != 789510                // Integer '++' '?='
     && lk != 789511                // Real '++' '?='
     && lk != 790019                // Identifier '--' '?='
     && lk != 790020                // Character '--' '?='
     && lk != 790021                // String '--' '?='
     && lk != 790022                // Integer '--' '?='
     && lk != 790023                // Real '--' '?='
     && lk != 792881                // '[' ']' '?='
     && lk != 809265                // '[' ']' '['
     && lk != 822275                // Identifier '++' ']'
     && lk != 822276                // Character '++' ']'
     && lk != 822277                // String '++' ']'
     && lk != 822278                // Integer '++' ']'
     && lk != 822279                // Real '++' ']'
     && lk != 822787                // Identifier '--' ']'
     && lk != 822788                // Character '--' ']'
     && lk != 822789                // String '--' ']'
     && lk != 822790                // Integer '--' ']'
     && lk != 822791                // Real '--' ']'
     && lk != 825649                // '[' ']' ']'
     && lk != 838659                // Identifier '++' '^'
     && lk != 838660                // Character '++' '^'
     && lk != 838661                // String '++' '^'
     && lk != 838662                // Integer '++' '^'
     && lk != 838663                // Real '++' '^'
     && lk != 839171                // Identifier '--' '^'
     && lk != 839172                // Character '--' '^'
     && lk != 839173                // String '--' '^'
     && lk != 839174                // Integer '--' '^'
     && lk != 839175                // Real '--' '^'
     && lk != 842033                // '[' ']' '^'
     && lk != 855043                // Identifier '++' '^='
     && lk != 855044                // Character '++' '^='
     && lk != 855045                // String '++' '^='
     && lk != 855046                // Integer '++' '^='
     && lk != 855047                // Real '++' '^='
     && lk != 855555                // Identifier '--' '^='
     && lk != 855556                // Character '--' '^='
     && lk != 855557                // String '--' '^='
     && lk != 855558                // Integer '--' '^='
     && lk != 855559                // Real '--' '^='
     && lk != 858417                // '[' ']' '^='
     && lk != 871427                // Identifier '++' 'break'
     && lk != 871428                // Character '++' 'break'
     && lk != 871429                // String '++' 'break'
     && lk != 871430                // Integer '++' 'break'
     && lk != 871431                // Real '++' 'break'
     && lk != 871939                // Identifier '--' 'break'
     && lk != 871940                // Character '--' 'break'
     && lk != 871941                // String '--' 'break'
     && lk != 871942                // Integer '--' 'break'
     && lk != 871943                // Real '--' 'break'
     && lk != 874801                // '[' ']' 'break'
     && lk != 887811                // Identifier '++' 'case'
     && lk != 887812                // Character '++' 'case'
     && lk != 887813                // String '++' 'case'
     && lk != 887814                // Integer '++' 'case'
     && lk != 887815                // Real '++' 'case'
     && lk != 888323                // Identifier '--' 'case'
     && lk != 888324                // Character '--' 'case'
     && lk != 888325                // String '--' 'case'
     && lk != 888326                // Integer '--' 'case'
     && lk != 888327                // Real '--' 'case'
     && lk != 891185                // '[' ']' 'case'
     && lk != 904195                // Identifier '++' 'continue'
     && lk != 904196                // Character '++' 'continue'
     && lk != 904197                // String '++' 'continue'
     && lk != 904198                // Integer '++' 'continue'
     && lk != 904199                // Real '++' 'continue'
     && lk != 904707                // Identifier '--' 'continue'
     && lk != 904708                // Character '--' 'continue'
     && lk != 904709                // String '--' 'continue'
     && lk != 904710                // Integer '--' 'continue'
     && lk != 904711                // Real '--' 'continue'
     && lk != 907569                // '[' ']' 'continue'
     && lk != 920579                // Identifier '++' 'default'
     && lk != 920580                // Character '++' 'default'
     && lk != 920581                // String '++' 'default'
     && lk != 920582                // Integer '++' 'default'
     && lk != 920583                // Real '++' 'default'
     && lk != 921091                // Identifier '--' 'default'
     && lk != 921092                // Character '--' 'default'
     && lk != 921093                // String '--' 'default'
     && lk != 921094                // Integer '--' 'default'
     && lk != 921095                // Real '--' 'default'
     && lk != 923953                // '[' ']' 'default'
     && lk != 936963                // Identifier '++' 'do'
     && lk != 936964                // Character '++' 'do'
     && lk != 936965                // String '++' 'do'
     && lk != 936966                // Integer '++' 'do'
     && lk != 936967                // Real '++' 'do'
     && lk != 937475                // Identifier '--' 'do'
     && lk != 937476                // Character '--' 'do'
     && lk != 937477                // String '--' 'do'
     && lk != 937478                // Integer '--' 'do'
     && lk != 937479                // Real '--' 'do'
     && lk != 940337                // '[' ']' 'do'
     && lk != 953347                // Identifier '++' 'else'
     && lk != 953348                // Character '++' 'else'
     && lk != 953349                // String '++' 'else'
     && lk != 953350                // Integer '++' 'else'
     && lk != 953351                // Real '++' 'else'
     && lk != 953859                // Identifier '--' 'else'
     && lk != 953860                // Character '--' 'else'
     && lk != 953861                // String '--' 'else'
     && lk != 953862                // Integer '--' 'else'
     && lk != 953863                // Real '--' 'else'
     && lk != 956721                // '[' ']' 'else'
     && lk != 969731                // Identifier '++' 'f32'
     && lk != 969732                // Character '++' 'f32'
     && lk != 969733                // String '++' 'f32'
     && lk != 969734                // Integer '++' 'f32'
     && lk != 969735                // Real '++' 'f32'
     && lk != 970243                // Identifier '--' 'f32'
     && lk != 970244                // Character '--' 'f32'
     && lk != 970245                // String '--' 'f32'
     && lk != 970246                // Integer '--' 'f32'
     && lk != 970247                // Real '--' 'f32'
     && lk != 973105                // '[' ']' 'f32'
     && lk != 986115                // Identifier '++' 'f64'
     && lk != 986116                // Character '++' 'f64'
     && lk != 986117                // String '++' 'f64'
     && lk != 986118                // Integer '++' 'f64'
     && lk != 986119                // Real '++' 'f64'
     && lk != 986627                // Identifier '--' 'f64'
     && lk != 986628                // Character '--' 'f64'
     && lk != 986629                // String '--' 'f64'
     && lk != 986630                // Integer '--' 'f64'
     && lk != 986631                // Real '--' 'f64'
     && lk != 989489                // '[' ']' 'f64'
     && lk != 1002499               // Identifier '++' 'for'
     && lk != 1002500               // Character '++' 'for'
     && lk != 1002501               // String '++' 'for'
     && lk != 1002502               // Integer '++' 'for'
     && lk != 1002503               // Real '++' 'for'
     && lk != 1003011               // Identifier '--' 'for'
     && lk != 1003012               // Character '--' 'for'
     && lk != 1003013               // String '--' 'for'
     && lk != 1003014               // Integer '--' 'for'
     && lk != 1003015               // Real '--' 'for'
     && lk != 1005873               // '[' ']' 'for'
     && lk != 1018883               // Identifier '++' 'foreach'
     && lk != 1018884               // Character '++' 'foreach'
     && lk != 1018885               // String '++' 'foreach'
     && lk != 1018886               // Integer '++' 'foreach'
     && lk != 1018887               // Real '++' 'foreach'
     && lk != 1019395               // Identifier '--' 'foreach'
     && lk != 1019396               // Character '--' 'foreach'
     && lk != 1019397               // String '--' 'foreach'
     && lk != 1019398               // Integer '--' 'foreach'
     && lk != 1019399               // Real '--' 'foreach'
     && lk != 1022257               // '[' ']' 'foreach'
     && lk != 1035267               // Identifier '++' 'i32'
     && lk != 1035268               // Character '++' 'i32'
     && lk != 1035269               // String '++' 'i32'
     && lk != 1035270               // Integer '++' 'i32'
     && lk != 1035271               // Real '++' 'i32'
     && lk != 1035779               // Identifier '--' 'i32'
     && lk != 1035780               // Character '--' 'i32'
     && lk != 1035781               // String '--' 'i32'
     && lk != 1035782               // Integer '--' 'i32'
     && lk != 1035783               // Real '--' 'i32'
     && lk != 1038641               // '[' ']' 'i32'
     && lk != 1051651               // Identifier '++' 'i64'
     && lk != 1051652               // Character '++' 'i64'
     && lk != 1051653               // String '++' 'i64'
     && lk != 1051654               // Integer '++' 'i64'
     && lk != 1051655               // Real '++' 'i64'
     && lk != 1052163               // Identifier '--' 'i64'
     && lk != 1052164               // Character '--' 'i64'
     && lk != 1052165               // String '--' 'i64'
     && lk != 1052166               // Integer '--' 'i64'
     && lk != 1052167               // Real '--' 'i64'
     && lk != 1055025               // '[' ']' 'i64'
     && lk != 1068035               // Identifier '++' 'if'
     && lk != 1068036               // Character '++' 'if'
     && lk != 1068037               // String '++' 'if'
     && lk != 1068038               // Integer '++' 'if'
     && lk != 1068039               // Real '++' 'if'
     && lk != 1068547               // Identifier '--' 'if'
     && lk != 1068548               // Character '--' 'if'
     && lk != 1068549               // String '--' 'if'
     && lk != 1068550               // Integer '--' 'if'
     && lk != 1068551               // Real '--' 'if'
     && lk != 1071409               // '[' ']' 'if'
     && lk != 1084419               // Identifier '++' 'return'
     && lk != 1084420               // Character '++' 'return'
     && lk != 1084421               // String '++' 'return'
     && lk != 1084422               // Integer '++' 'return'
     && lk != 1084423               // Real '++' 'return'
     && lk != 1084931               // Identifier '--' 'return'
     && lk != 1084932               // Character '--' 'return'
     && lk != 1084933               // String '--' 'return'
     && lk != 1084934               // Integer '--' 'return'
     && lk != 1084935               // Real '--' 'return'
     && lk != 1087793               // '[' ']' 'return'
     && lk != 1100803               // Identifier '++' 'switch'
     && lk != 1100804               // Character '++' 'switch'
     && lk != 1100805               // String '++' 'switch'
     && lk != 1100806               // Integer '++' 'switch'
     && lk != 1100807               // Real '++' 'switch'
     && lk != 1101315               // Identifier '--' 'switch'
     && lk != 1101316               // Character '--' 'switch'
     && lk != 1101317               // String '--' 'switch'
     && lk != 1101318               // Integer '--' 'switch'
     && lk != 1101319               // Real '--' 'switch'
     && lk != 1104177               // '[' ']' 'switch'
     && lk != 1117187               // Identifier '++' 'while'
     && lk != 1117188               // Character '++' 'while'
     && lk != 1117189               // String '++' 'while'
     && lk != 1117190               // Integer '++' 'while'
     && lk != 1117191               // Real '++' 'while'
     && lk != 1117699               // Identifier '--' 'while'
     && lk != 1117700               // Character '--' 'while'
     && lk != 1117701               // String '--' 'while'
     && lk != 1117702               // Integer '--' 'while'
     && lk != 1117703               // Real '--' 'while'
     && lk != 1120561               // '[' ']' 'while'
     && lk != 1136945               // '[' ']' '{'
     && lk != 1149955               // Identifier '++' '|'
     && lk != 1149956               // Character '++' '|'
     && lk != 1149957               // String '++' '|'
     && lk != 1149958               // Integer '++' '|'
     && lk != 1149959               // Real '++' '|'
     && lk != 1150467               // Identifier '--' '|'
     && lk != 1150468               // Character '--' '|'
     && lk != 1150469               // String '--' '|'
     && lk != 1150470               // Integer '--' '|'
     && lk != 1150471               // Real '--' '|'
     && lk != 1153329               // '[' ']' '|'
     && lk != 1166339               // Identifier '++' '|='
     && lk != 1166340               // Character '++' '|='
     && lk != 1166341               // String '++' '|='
     && lk != 1166342               // Integer '++' '|='
     && lk != 1166343               // Real '++' '|='
     && lk != 1166851               // Identifier '--' '|='
     && lk != 1166852               // Character '--' '|='
     && lk != 1166853               // String '--' '|='
     && lk != 1166854               // Integer '--' '|='
     && lk != 1166855               // Real '--' '|='
     && lk != 1169713               // '[' ']' '|='
     && lk != 1182723               // Identifier '++' '||'
     && lk != 1182724               // Character '++' '||'
     && lk != 1182725               // String '++' '||'
     && lk != 1182726               // Integer '++' '||'
     && lk != 1182727               // Real '++' '||'
     && lk != 1183235               // Identifier '--' '||'
     && lk != 1183236               // Character '--' '||'
     && lk != 1183237               // String '--' '||'
     && lk != 1183238               // Integer '--' '||'
     && lk != 1183239               // Real '--' '||'
     && lk != 1186097               // '[' ']' '||'
     && lk != 1199107               // Identifier '++' '}'
     && lk != 1199108               // Character '++' '}'
     && lk != 1199109               // String '++' '}'
     && lk != 1199110               // Integer '++' '}'
     && lk != 1199111               // Real '++' '}'
     && lk != 1199619               // Identifier '--' '}'
     && lk != 1199620               // Character '--' '}'
     && lk != 1199621               // String '--' '}'
     && lk != 1199622               // Integer '--' '}'
     && lk != 1199623               // Real '--' '}'
     && lk != 1202481               // '[' ']' '}'
     && lk != 1215491               // Identifier '++' '~'
     && lk != 1215492               // Character '++' '~'
     && lk != 1215493               // String '++' '~'
     && lk != 1215494               // Integer '++' '~'
     && lk != 1215495               // Real '++' '~'
     && lk != 1216003               // Identifier '--' '~'
     && lk != 1216004               // Character '--' '~'
     && lk != 1216005               // String '--' '~'
     && lk != 1216006               // Integer '--' '~'
     && lk != 1216007               // Real '--' '~'
     && lk != 1218865)              // '[' ']' '~'
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
            lookahead1W(4);         // WhiteSpace^token | '++'
            consumeT(24);           // '++'
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
    case 19459:                     // Identifier '++' END
    case 19460:                     // Character '++' END
    case 19461:                     // String '++' END
    case 19462:                     // Integer '++' END
    case 19463:                     // Real '++' END
    case 134147:                    // Identifier '++' Comment
    case 134148:                    // Character '++' Comment
    case 134149:                    // String '++' Comment
    case 134150:                    // Integer '++' Comment
    case 134151:                    // Real '++' Comment
    case 183299:                    // Identifier '++' '!'
    case 183300:                    // Character '++' '!'
    case 183301:                    // String '++' '!'
    case 183302:                    // Integer '++' '!'
    case 183303:                    // Real '++' '!'
    case 199683:                    // Identifier '++' '!='
    case 199684:                    // Character '++' '!='
    case 199685:                    // String '++' '!='
    case 199686:                    // Integer '++' '!='
    case 199687:                    // Real '++' '!='
    case 216067:                    // Identifier '++' '%'
    case 216068:                    // Character '++' '%'
    case 216069:                    // String '++' '%'
    case 216070:                    // Integer '++' '%'
    case 216071:                    // Real '++' '%'
    case 232451:                    // Identifier '++' '%='
    case 232452:                    // Character '++' '%='
    case 232453:                    // String '++' '%='
    case 232454:                    // Integer '++' '%='
    case 232455:                    // Real '++' '%='
    case 248835:                    // Identifier '++' '&'
    case 248836:                    // Character '++' '&'
    case 248837:                    // String '++' '&'
    case 248838:                    // Integer '++' '&'
    case 248839:                    // Real '++' '&'
    case 265219:                    // Identifier '++' '&&'
    case 265220:                    // Character '++' '&&'
    case 265221:                    // String '++' '&&'
    case 265222:                    // Integer '++' '&&'
    case 265223:                    // Real '++' '&&'
    case 281603:                    // Identifier '++' '&='
    case 281604:                    // Character '++' '&='
    case 281605:                    // String '++' '&='
    case 281606:                    // Integer '++' '&='
    case 281607:                    // Real '++' '&='
    case 314371:                    // Identifier '++' ')'
    case 314372:                    // Character '++' ')'
    case 314373:                    // String '++' ')'
    case 314374:                    // Integer '++' ')'
    case 314375:                    // Real '++' ')'
    case 330755:                    // Identifier '++' '*'
    case 330756:                    // Character '++' '*'
    case 330757:                    // String '++' '*'
    case 330758:                    // Integer '++' '*'
    case 330759:                    // Real '++' '*'
    case 347139:                    // Identifier '++' '**'
    case 347140:                    // Character '++' '**'
    case 347141:                    // String '++' '**'
    case 347142:                    // Integer '++' '**'
    case 347143:                    // Real '++' '**'
    case 363523:                    // Identifier '++' '*='
    case 363524:                    // Character '++' '*='
    case 363525:                    // String '++' '*='
    case 363526:                    // Integer '++' '*='
    case 363527:                    // Real '++' '*='
    case 379907:                    // Identifier '++' '+'
    case 379908:                    // Character '++' '+'
    case 379909:                    // String '++' '+'
    case 379910:                    // Integer '++' '+'
    case 379911:                    // Real '++' '+'
    case 396291:                    // Identifier '++' '++'
    case 396292:                    // Character '++' '++'
    case 396293:                    // String '++' '++'
    case 396294:                    // Integer '++' '++'
    case 396295:                    // Real '++' '++'
    case 412675:                    // Identifier '++' '+='
    case 412676:                    // Character '++' '+='
    case 412677:                    // String '++' '+='
    case 412678:                    // Integer '++' '+='
    case 412679:                    // Real '++' '+='
    case 429059:                    // Identifier '++' ','
    case 429060:                    // Character '++' ','
    case 429061:                    // String '++' ','
    case 429062:                    // Integer '++' ','
    case 429063:                    // Real '++' ','
    case 445443:                    // Identifier '++' '-'
    case 445444:                    // Character '++' '-'
    case 445445:                    // String '++' '-'
    case 445446:                    // Integer '++' '-'
    case 445447:                    // Real '++' '-'
    case 461827:                    // Identifier '++' '--'
    case 461828:                    // Character '++' '--'
    case 461829:                    // String '++' '--'
    case 461830:                    // Integer '++' '--'
    case 461831:                    // Real '++' '--'
    case 478211:                    // Identifier '++' '-='
    case 478212:                    // Character '++' '-='
    case 478213:                    // String '++' '-='
    case 478214:                    // Integer '++' '-='
    case 478215:                    // Real '++' '-='
    case 510979:                    // Identifier '++' '/'
    case 510980:                    // Character '++' '/'
    case 510981:                    // String '++' '/'
    case 510982:                    // Integer '++' '/'
    case 510983:                    // Real '++' '/'
    case 527363:                    // Identifier '++' '/='
    case 527364:                    // Character '++' '/='
    case 527365:                    // String '++' '/='
    case 527366:                    // Integer '++' '/='
    case 527367:                    // Real '++' '/='
    case 543747:                    // Identifier '++' ':'
    case 543748:                    // Character '++' ':'
    case 543749:                    // String '++' ':'
    case 543750:                    // Integer '++' ':'
    case 543751:                    // Real '++' ':'
    case 560131:                    // Identifier '++' ':='
    case 560132:                    // Character '++' ':='
    case 560133:                    // String '++' ':='
    case 560134:                    // Integer '++' ':='
    case 560135:                    // Real '++' ':='
    case 576515:                    // Identifier '++' ';'
    case 576516:                    // Character '++' ';'
    case 576517:                    // String '++' ';'
    case 576518:                    // Integer '++' ';'
    case 576519:                    // Real '++' ';'
    case 592899:                    // Identifier '++' '<'
    case 592900:                    // Character '++' '<'
    case 592901:                    // String '++' '<'
    case 592902:                    // Integer '++' '<'
    case 592903:                    // Real '++' '<'
    case 609283:                    // Identifier '++' '<<'
    case 609284:                    // Character '++' '<<'
    case 609285:                    // String '++' '<<'
    case 609286:                    // Integer '++' '<<'
    case 609287:                    // Real '++' '<<'
    case 625667:                    // Identifier '++' '<<='
    case 625668:                    // Character '++' '<<='
    case 625669:                    // String '++' '<<='
    case 625670:                    // Integer '++' '<<='
    case 625671:                    // Real '++' '<<='
    case 642051:                    // Identifier '++' '<='
    case 642052:                    // Character '++' '<='
    case 642053:                    // String '++' '<='
    case 642054:                    // Integer '++' '<='
    case 642055:                    // Real '++' '<='
    case 658435:                    // Identifier '++' '='
    case 658436:                    // Character '++' '='
    case 658437:                    // String '++' '='
    case 658438:                    // Integer '++' '='
    case 658439:                    // Real '++' '='
    case 674819:                    // Identifier '++' '=='
    case 674820:                    // Character '++' '=='
    case 674821:                    // String '++' '=='
    case 674822:                    // Integer '++' '=='
    case 674823:                    // Real '++' '=='
    case 707587:                    // Identifier '++' '>'
    case 707588:                    // Character '++' '>'
    case 707589:                    // String '++' '>'
    case 707590:                    // Integer '++' '>'
    case 707591:                    // Real '++' '>'
    case 723971:                    // Identifier '++' '>='
    case 723972:                    // Character '++' '>='
    case 723973:                    // String '++' '>='
    case 723974:                    // Integer '++' '>='
    case 723975:                    // Real '++' '>='
    case 740355:                    // Identifier '++' '>>'
    case 740356:                    // Character '++' '>>'
    case 740357:                    // String '++' '>>'
    case 740358:                    // Integer '++' '>>'
    case 740359:                    // Real '++' '>>'
    case 756739:                    // Identifier '++' '>>='
    case 756740:                    // Character '++' '>>='
    case 756741:                    // String '++' '>>='
    case 756742:                    // Integer '++' '>>='
    case 756743:                    // Real '++' '>>='
    case 773123:                    // Identifier '++' '?'
    case 773124:                    // Character '++' '?'
    case 773125:                    // String '++' '?'
    case 773126:                    // Integer '++' '?'
    case 773127:                    // Real '++' '?'
    case 789507:                    // Identifier '++' '?='
    case 789508:                    // Character '++' '?='
    case 789509:                    // String '++' '?='
    case 789510:                    // Integer '++' '?='
    case 789511:                    // Real '++' '?='
    case 822275:                    // Identifier '++' ']'
    case 822276:                    // Character '++' ']'
    case 822277:                    // String '++' ']'
    case 822278:                    // Integer '++' ']'
    case 822279:                    // Real '++' ']'
    case 838659:                    // Identifier '++' '^'
    case 838660:                    // Character '++' '^'
    case 838661:                    // String '++' '^'
    case 838662:                    // Integer '++' '^'
    case 838663:                    // Real '++' '^'
    case 855043:                    // Identifier '++' '^='
    case 855044:                    // Character '++' '^='
    case 855045:                    // String '++' '^='
    case 855046:                    // Integer '++' '^='
    case 855047:                    // Real '++' '^='
    case 871427:                    // Identifier '++' 'break'
    case 871428:                    // Character '++' 'break'
    case 871429:                    // String '++' 'break'
    case 871430:                    // Integer '++' 'break'
    case 871431:                    // Real '++' 'break'
    case 887811:                    // Identifier '++' 'case'
    case 887812:                    // Character '++' 'case'
    case 887813:                    // String '++' 'case'
    case 887814:                    // Integer '++' 'case'
    case 887815:                    // Real '++' 'case'
    case 904195:                    // Identifier '++' 'continue'
    case 904196:                    // Character '++' 'continue'
    case 904197:                    // String '++' 'continue'
    case 904198:                    // Integer '++' 'continue'
    case 904199:                    // Real '++' 'continue'
    case 920579:                    // Identifier '++' 'default'
    case 920580:                    // Character '++' 'default'
    case 920581:                    // String '++' 'default'
    case 920582:                    // Integer '++' 'default'
    case 920583:                    // Real '++' 'default'
    case 936963:                    // Identifier '++' 'do'
    case 936964:                    // Character '++' 'do'
    case 936965:                    // String '++' 'do'
    case 936966:                    // Integer '++' 'do'
    case 936967:                    // Real '++' 'do'
    case 953347:                    // Identifier '++' 'else'
    case 953348:                    // Character '++' 'else'
    case 953349:                    // String '++' 'else'
    case 953350:                    // Integer '++' 'else'
    case 953351:                    // Real '++' 'else'
    case 969731:                    // Identifier '++' 'f32'
    case 969732:                    // Character '++' 'f32'
    case 969733:                    // String '++' 'f32'
    case 969734:                    // Integer '++' 'f32'
    case 969735:                    // Real '++' 'f32'
    case 986115:                    // Identifier '++' 'f64'
    case 986116:                    // Character '++' 'f64'
    case 986117:                    // String '++' 'f64'
    case 986118:                    // Integer '++' 'f64'
    case 986119:                    // Real '++' 'f64'
    case 1002499:                   // Identifier '++' 'for'
    case 1002500:                   // Character '++' 'for'
    case 1002501:                   // String '++' 'for'
    case 1002502:                   // Integer '++' 'for'
    case 1002503:                   // Real '++' 'for'
    case 1018883:                   // Identifier '++' 'foreach'
    case 1018884:                   // Character '++' 'foreach'
    case 1018885:                   // String '++' 'foreach'
    case 1018886:                   // Integer '++' 'foreach'
    case 1018887:                   // Real '++' 'foreach'
    case 1035267:                   // Identifier '++' 'i32'
    case 1035268:                   // Character '++' 'i32'
    case 1035269:                   // String '++' 'i32'
    case 1035270:                   // Integer '++' 'i32'
    case 1035271:                   // Real '++' 'i32'
    case 1051651:                   // Identifier '++' 'i64'
    case 1051652:                   // Character '++' 'i64'
    case 1051653:                   // String '++' 'i64'
    case 1051654:                   // Integer '++' 'i64'
    case 1051655:                   // Real '++' 'i64'
    case 1068035:                   // Identifier '++' 'if'
    case 1068036:                   // Character '++' 'if'
    case 1068037:                   // String '++' 'if'
    case 1068038:                   // Integer '++' 'if'
    case 1068039:                   // Real '++' 'if'
    case 1084419:                   // Identifier '++' 'return'
    case 1084420:                   // Character '++' 'return'
    case 1084421:                   // String '++' 'return'
    case 1084422:                   // Integer '++' 'return'
    case 1084423:                   // Real '++' 'return'
    case 1100803:                   // Identifier '++' 'switch'
    case 1100804:                   // Character '++' 'switch'
    case 1100805:                   // String '++' 'switch'
    case 1100806:                   // Integer '++' 'switch'
    case 1100807:                   // Real '++' 'switch'
    case 1117187:                   // Identifier '++' 'while'
    case 1117188:                   // Character '++' 'while'
    case 1117189:                   // String '++' 'while'
    case 1117190:                   // Integer '++' 'while'
    case 1117191:                   // Real '++' 'while'
    case 1149955:                   // Identifier '++' '|'
    case 1149956:                   // Character '++' '|'
    case 1149957:                   // String '++' '|'
    case 1149958:                   // Integer '++' '|'
    case 1149959:                   // Real '++' '|'
    case 1166339:                   // Identifier '++' '|='
    case 1166340:                   // Character '++' '|='
    case 1166341:                   // String '++' '|='
    case 1166342:                   // Integer '++' '|='
    case 1166343:                   // Real '++' '|='
    case 1182723:                   // Identifier '++' '||'
    case 1182724:                   // Character '++' '||'
    case 1182725:                   // String '++' '||'
    case 1182726:                   // Integer '++' '||'
    case 1182727:                   // Real '++' '||'
    case 1199107:                   // Identifier '++' '}'
    case 1199108:                   // Character '++' '}'
    case 1199109:                   // String '++' '}'
    case 1199110:                   // Integer '++' '}'
    case 1199111:                   // Real '++' '}'
    case 1215491:                   // Identifier '++' '~'
    case 1215492:                   // Character '++' '~'
    case 1215493:                   // String '++' '~'
    case 1215494:                   // Integer '++' '~'
    case 1215495:                   // Real '++' '~'
      parse_Primary();
      lookahead1W(4);               // WhiteSpace^token | '++'
      consume(24);                  // '++'
      break;
    case -3:
    case 19971:                     // Identifier '--' END
    case 19972:                     // Character '--' END
    case 19973:                     // String '--' END
    case 19974:                     // Integer '--' END
    case 19975:                     // Real '--' END
    case 134659:                    // Identifier '--' Comment
    case 134660:                    // Character '--' Comment
    case 134661:                    // String '--' Comment
    case 134662:                    // Integer '--' Comment
    case 134663:                    // Real '--' Comment
    case 183811:                    // Identifier '--' '!'
    case 183812:                    // Character '--' '!'
    case 183813:                    // String '--' '!'
    case 183814:                    // Integer '--' '!'
    case 183815:                    // Real '--' '!'
    case 200195:                    // Identifier '--' '!='
    case 200196:                    // Character '--' '!='
    case 200197:                    // String '--' '!='
    case 200198:                    // Integer '--' '!='
    case 200199:                    // Real '--' '!='
    case 216579:                    // Identifier '--' '%'
    case 216580:                    // Character '--' '%'
    case 216581:                    // String '--' '%'
    case 216582:                    // Integer '--' '%'
    case 216583:                    // Real '--' '%'
    case 232963:                    // Identifier '--' '%='
    case 232964:                    // Character '--' '%='
    case 232965:                    // String '--' '%='
    case 232966:                    // Integer '--' '%='
    case 232967:                    // Real '--' '%='
    case 249347:                    // Identifier '--' '&'
    case 249348:                    // Character '--' '&'
    case 249349:                    // String '--' '&'
    case 249350:                    // Integer '--' '&'
    case 249351:                    // Real '--' '&'
    case 265731:                    // Identifier '--' '&&'
    case 265732:                    // Character '--' '&&'
    case 265733:                    // String '--' '&&'
    case 265734:                    // Integer '--' '&&'
    case 265735:                    // Real '--' '&&'
    case 282115:                    // Identifier '--' '&='
    case 282116:                    // Character '--' '&='
    case 282117:                    // String '--' '&='
    case 282118:                    // Integer '--' '&='
    case 282119:                    // Real '--' '&='
    case 314883:                    // Identifier '--' ')'
    case 314884:                    // Character '--' ')'
    case 314885:                    // String '--' ')'
    case 314886:                    // Integer '--' ')'
    case 314887:                    // Real '--' ')'
    case 331267:                    // Identifier '--' '*'
    case 331268:                    // Character '--' '*'
    case 331269:                    // String '--' '*'
    case 331270:                    // Integer '--' '*'
    case 331271:                    // Real '--' '*'
    case 347651:                    // Identifier '--' '**'
    case 347652:                    // Character '--' '**'
    case 347653:                    // String '--' '**'
    case 347654:                    // Integer '--' '**'
    case 347655:                    // Real '--' '**'
    case 364035:                    // Identifier '--' '*='
    case 364036:                    // Character '--' '*='
    case 364037:                    // String '--' '*='
    case 364038:                    // Integer '--' '*='
    case 364039:                    // Real '--' '*='
    case 380419:                    // Identifier '--' '+'
    case 380420:                    // Character '--' '+'
    case 380421:                    // String '--' '+'
    case 380422:                    // Integer '--' '+'
    case 380423:                    // Real '--' '+'
    case 396803:                    // Identifier '--' '++'
    case 396804:                    // Character '--' '++'
    case 396805:                    // String '--' '++'
    case 396806:                    // Integer '--' '++'
    case 396807:                    // Real '--' '++'
    case 413187:                    // Identifier '--' '+='
    case 413188:                    // Character '--' '+='
    case 413189:                    // String '--' '+='
    case 413190:                    // Integer '--' '+='
    case 413191:                    // Real '--' '+='
    case 429571:                    // Identifier '--' ','
    case 429572:                    // Character '--' ','
    case 429573:                    // String '--' ','
    case 429574:                    // Integer '--' ','
    case 429575:                    // Real '--' ','
    case 445955:                    // Identifier '--' '-'
    case 445956:                    // Character '--' '-'
    case 445957:                    // String '--' '-'
    case 445958:                    // Integer '--' '-'
    case 445959:                    // Real '--' '-'
    case 462339:                    // Identifier '--' '--'
    case 462340:                    // Character '--' '--'
    case 462341:                    // String '--' '--'
    case 462342:                    // Integer '--' '--'
    case 462343:                    // Real '--' '--'
    case 478723:                    // Identifier '--' '-='
    case 478724:                    // Character '--' '-='
    case 478725:                    // String '--' '-='
    case 478726:                    // Integer '--' '-='
    case 478727:                    // Real '--' '-='
    case 511491:                    // Identifier '--' '/'
    case 511492:                    // Character '--' '/'
    case 511493:                    // String '--' '/'
    case 511494:                    // Integer '--' '/'
    case 511495:                    // Real '--' '/'
    case 527875:                    // Identifier '--' '/='
    case 527876:                    // Character '--' '/='
    case 527877:                    // String '--' '/='
    case 527878:                    // Integer '--' '/='
    case 527879:                    // Real '--' '/='
    case 544259:                    // Identifier '--' ':'
    case 544260:                    // Character '--' ':'
    case 544261:                    // String '--' ':'
    case 544262:                    // Integer '--' ':'
    case 544263:                    // Real '--' ':'
    case 560643:                    // Identifier '--' ':='
    case 560644:                    // Character '--' ':='
    case 560645:                    // String '--' ':='
    case 560646:                    // Integer '--' ':='
    case 560647:                    // Real '--' ':='
    case 577027:                    // Identifier '--' ';'
    case 577028:                    // Character '--' ';'
    case 577029:                    // String '--' ';'
    case 577030:                    // Integer '--' ';'
    case 577031:                    // Real '--' ';'
    case 593411:                    // Identifier '--' '<'
    case 593412:                    // Character '--' '<'
    case 593413:                    // String '--' '<'
    case 593414:                    // Integer '--' '<'
    case 593415:                    // Real '--' '<'
    case 609795:                    // Identifier '--' '<<'
    case 609796:                    // Character '--' '<<'
    case 609797:                    // String '--' '<<'
    case 609798:                    // Integer '--' '<<'
    case 609799:                    // Real '--' '<<'
    case 626179:                    // Identifier '--' '<<='
    case 626180:                    // Character '--' '<<='
    case 626181:                    // String '--' '<<='
    case 626182:                    // Integer '--' '<<='
    case 626183:                    // Real '--' '<<='
    case 642563:                    // Identifier '--' '<='
    case 642564:                    // Character '--' '<='
    case 642565:                    // String '--' '<='
    case 642566:                    // Integer '--' '<='
    case 642567:                    // Real '--' '<='
    case 658947:                    // Identifier '--' '='
    case 658948:                    // Character '--' '='
    case 658949:                    // String '--' '='
    case 658950:                    // Integer '--' '='
    case 658951:                    // Real '--' '='
    case 675331:                    // Identifier '--' '=='
    case 675332:                    // Character '--' '=='
    case 675333:                    // String '--' '=='
    case 675334:                    // Integer '--' '=='
    case 675335:                    // Real '--' '=='
    case 708099:                    // Identifier '--' '>'
    case 708100:                    // Character '--' '>'
    case 708101:                    // String '--' '>'
    case 708102:                    // Integer '--' '>'
    case 708103:                    // Real '--' '>'
    case 724483:                    // Identifier '--' '>='
    case 724484:                    // Character '--' '>='
    case 724485:                    // String '--' '>='
    case 724486:                    // Integer '--' '>='
    case 724487:                    // Real '--' '>='
    case 740867:                    // Identifier '--' '>>'
    case 740868:                    // Character '--' '>>'
    case 740869:                    // String '--' '>>'
    case 740870:                    // Integer '--' '>>'
    case 740871:                    // Real '--' '>>'
    case 757251:                    // Identifier '--' '>>='
    case 757252:                    // Character '--' '>>='
    case 757253:                    // String '--' '>>='
    case 757254:                    // Integer '--' '>>='
    case 757255:                    // Real '--' '>>='
    case 773635:                    // Identifier '--' '?'
    case 773636:                    // Character '--' '?'
    case 773637:                    // String '--' '?'
    case 773638:                    // Integer '--' '?'
    case 773639:                    // Real '--' '?'
    case 790019:                    // Identifier '--' '?='
    case 790020:                    // Character '--' '?='
    case 790021:                    // String '--' '?='
    case 790022:                    // Integer '--' '?='
    case 790023:                    // Real '--' '?='
    case 822787:                    // Identifier '--' ']'
    case 822788:                    // Character '--' ']'
    case 822789:                    // String '--' ']'
    case 822790:                    // Integer '--' ']'
    case 822791:                    // Real '--' ']'
    case 839171:                    // Identifier '--' '^'
    case 839172:                    // Character '--' '^'
    case 839173:                    // String '--' '^'
    case 839174:                    // Integer '--' '^'
    case 839175:                    // Real '--' '^'
    case 855555:                    // Identifier '--' '^='
    case 855556:                    // Character '--' '^='
    case 855557:                    // String '--' '^='
    case 855558:                    // Integer '--' '^='
    case 855559:                    // Real '--' '^='
    case 871939:                    // Identifier '--' 'break'
    case 871940:                    // Character '--' 'break'
    case 871941:                    // String '--' 'break'
    case 871942:                    // Integer '--' 'break'
    case 871943:                    // Real '--' 'break'
    case 888323:                    // Identifier '--' 'case'
    case 888324:                    // Character '--' 'case'
    case 888325:                    // String '--' 'case'
    case 888326:                    // Integer '--' 'case'
    case 888327:                    // Real '--' 'case'
    case 904707:                    // Identifier '--' 'continue'
    case 904708:                    // Character '--' 'continue'
    case 904709:                    // String '--' 'continue'
    case 904710:                    // Integer '--' 'continue'
    case 904711:                    // Real '--' 'continue'
    case 921091:                    // Identifier '--' 'default'
    case 921092:                    // Character '--' 'default'
    case 921093:                    // String '--' 'default'
    case 921094:                    // Integer '--' 'default'
    case 921095:                    // Real '--' 'default'
    case 937475:                    // Identifier '--' 'do'
    case 937476:                    // Character '--' 'do'
    case 937477:                    // String '--' 'do'
    case 937478:                    // Integer '--' 'do'
    case 937479:                    // Real '--' 'do'
    case 953859:                    // Identifier '--' 'else'
    case 953860:                    // Character '--' 'else'
    case 953861:                    // String '--' 'else'
    case 953862:                    // Integer '--' 'else'
    case 953863:                    // Real '--' 'else'
    case 970243:                    // Identifier '--' 'f32'
    case 970244:                    // Character '--' 'f32'
    case 970245:                    // String '--' 'f32'
    case 970246:                    // Integer '--' 'f32'
    case 970247:                    // Real '--' 'f32'
    case 986627:                    // Identifier '--' 'f64'
    case 986628:                    // Character '--' 'f64'
    case 986629:                    // String '--' 'f64'
    case 986630:                    // Integer '--' 'f64'
    case 986631:                    // Real '--' 'f64'
    case 1003011:                   // Identifier '--' 'for'
    case 1003012:                   // Character '--' 'for'
    case 1003013:                   // String '--' 'for'
    case 1003014:                   // Integer '--' 'for'
    case 1003015:                   // Real '--' 'for'
    case 1019395:                   // Identifier '--' 'foreach'
    case 1019396:                   // Character '--' 'foreach'
    case 1019397:                   // String '--' 'foreach'
    case 1019398:                   // Integer '--' 'foreach'
    case 1019399:                   // Real '--' 'foreach'
    case 1035779:                   // Identifier '--' 'i32'
    case 1035780:                   // Character '--' 'i32'
    case 1035781:                   // String '--' 'i32'
    case 1035782:                   // Integer '--' 'i32'
    case 1035783:                   // Real '--' 'i32'
    case 1052163:                   // Identifier '--' 'i64'
    case 1052164:                   // Character '--' 'i64'
    case 1052165:                   // String '--' 'i64'
    case 1052166:                   // Integer '--' 'i64'
    case 1052167:                   // Real '--' 'i64'
    case 1068547:                   // Identifier '--' 'if'
    case 1068548:                   // Character '--' 'if'
    case 1068549:                   // String '--' 'if'
    case 1068550:                   // Integer '--' 'if'
    case 1068551:                   // Real '--' 'if'
    case 1084931:                   // Identifier '--' 'return'
    case 1084932:                   // Character '--' 'return'
    case 1084933:                   // String '--' 'return'
    case 1084934:                   // Integer '--' 'return'
    case 1084935:                   // Real '--' 'return'
    case 1101315:                   // Identifier '--' 'switch'
    case 1101316:                   // Character '--' 'switch'
    case 1101317:                   // String '--' 'switch'
    case 1101318:                   // Integer '--' 'switch'
    case 1101319:                   // Real '--' 'switch'
    case 1117699:                   // Identifier '--' 'while'
    case 1117700:                   // Character '--' 'while'
    case 1117701:                   // String '--' 'while'
    case 1117702:                   // Integer '--' 'while'
    case 1117703:                   // Real '--' 'while'
    case 1150467:                   // Identifier '--' '|'
    case 1150468:                   // Character '--' '|'
    case 1150469:                   // String '--' '|'
    case 1150470:                   // Integer '--' '|'
    case 1150471:                   // Real '--' '|'
    case 1166851:                   // Identifier '--' '|='
    case 1166852:                   // Character '--' '|='
    case 1166853:                   // String '--' '|='
    case 1166854:                   // Integer '--' '|='
    case 1166855:                   // Real '--' '|='
    case 1183235:                   // Identifier '--' '||'
    case 1183236:                   // Character '--' '||'
    case 1183237:                   // String '--' '||'
    case 1183238:                   // Integer '--' '||'
    case 1183239:                   // Real '--' '||'
    case 1199619:                   // Identifier '--' '}'
    case 1199620:                   // Character '--' '}'
    case 1199621:                   // String '--' '}'
    case 1199622:                   // Integer '--' '}'
    case 1199623:                   // Real '--' '}'
    case 1216003:                   // Identifier '--' '~'
    case 1216004:                   // Character '--' '~'
    case 1216005:                   // String '--' '~'
    case 1216006:                   // Integer '--' '~'
    case 1216007:                   // Real '--' '~'
      parse_Primary();
      lookahead1W(5);               // WhiteSpace^token | '--'
      consume(28);                  // '--'
      break;
    case 24:                        // '++'
      consume(24);                  // '++'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 28:                        // '--'
      consume(28);                  // '--'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 23:                        // '+'
      consume(23);                  // '+'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 27:                        // '-'
      consume(27);                  // '-'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 74:                        // '~'
      consume(74);                  // '~'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 11:                        // '!'
      consume(11);                  // '!'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
      lookahead2W(43);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 3843:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6275:                    // Identifier '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 3075:                    // Identifier '++'
      case 3587:                    // Identifier '--'
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 18:                        // '('
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 402:                     // '(' Identifier
        lookahead3W(35);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6290:                    // '(' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8850:                    // '(' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 2322:                    // '(' '('
      case 7314:                    // '(' 'do'
      case 8466:                    // '(' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 530:                     // '(' Character
      case 658:                     // '(' String
      case 786:                     // '(' Integer
      case 914:                     // '(' Real
        lookahead3W(30);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1042:                    // '(' Comment
      case 4498:                    // '(' ';'
      case 6802:                    // '(' 'break'
      case 7058:                    // '(' 'continue'
        lookahead3W(3);             // WhiteSpace^token | ')'
        break;
      case 7570:                    // '(' 'f32'
      case 7698:                    // '(' 'f64'
      case 8082:                    // '(' 'i32'
      case 8210:                    // '(' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7826:                    // '(' 'for'
      case 7954:                    // '(' 'foreach'
      case 8338:                    // '(' 'if'
      case 8594:                    // '(' 'switch'
      case 8722:                    // '(' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1426:                    // '(' '!'
      case 2962:                    // '(' '+'
      case 3090:                    // '(' '++'
      case 3474:                    // '(' '-'
      case 3602:                    // '(' '--'
      case 9490:                    // '(' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 49:                        // '['
      lookahead2W(24);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 433:                     // '[' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4529:                    // '[' ';'
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 6321:                    // '[' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 6449:                    // '[' ']'
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 8881:                    // '[' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 1073:                    // '[' Comment
      case 6833:                    // '[' 'break'
      case 7089:                    // '[' 'continue'
        lookahead3W(18);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 2353:                    // '[' '('
      case 7345:                    // '[' 'do'
      case 8497:                    // '[' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 561:                     // '[' Character
      case 689:                     // '[' String
      case 817:                     // '[' Integer
      case 945:                     // '[' Real
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
        break;
      case 7601:                    // '[' 'f32'
      case 7729:                    // '[' 'f64'
      case 8113:                    // '[' 'i32'
      case 8241:                    // '[' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7857:                    // '[' 'for'
      case 7985:                    // '[' 'foreach'
      case 8369:                    // '[' 'if'
      case 8625:                    // '[' 'switch'
      case 8753:                    // '[' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1457:                    // '[' '!'
      case 2993:                    // '[' '+'
      case 3121:                    // '[' '++'
      case 3505:                    // '[' '-'
      case 3633:                    // '[' '--'
      case 9521:                    // '[' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 69:                        // '{'
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 453:                     // '{' Identifier
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 709:                     // '{' String
        lookahead3W(33);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6341:                    // '{' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8901:                    // '{' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 581:                     // '{' Character
      case 837:                     // '{' Integer
      case 965:                     // '{' Real
        lookahead3W(31);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 2373:                    // '{' '('
      case 7365:                    // '{' 'do'
      case 8517:                    // '{' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 1093:                    // '{' Comment
      case 4549:                    // '{' ';'
      case 6853:                    // '{' 'break'
      case 7109:                    // '{' 'continue'
        lookahead3W(16);            // WhiteSpace^token | ',' | '}'
        break;
      case 7621:                    // '{' 'f32'
      case 7749:                    // '{' 'f64'
      case 8133:                    // '{' 'i32'
      case 8261:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7877:                    // '{' 'for'
      case 8005:                    // '{' 'foreach'
      case 8389:                    // '{' 'if'
      case 8645:                    // '{' 'switch'
      case 8773:                    // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1477:                    // '{' '!'
      case 3013:                    // '{' '+'
      case 3141:                    // '{' '++'
      case 3525:                    // '{' '-'
      case 3653:                    // '{' '--'
      case 9541:                    // '{' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
      lookahead2W(42);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 3076:                    // Character '++'
      case 3588:                    // Character '--'
      case 3077:                    // String '++'
      case 3589:                    // String '--'
      case 3078:                    // Integer '++'
      case 3590:                    // Integer '--'
      case 3079:                    // Real '++'
      case 3591:                    // Real '--'
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 11                    // '!'
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 74                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Character END
     && lk != 133                   // String END
     && lk != 134                   // Integer END
     && lk != 135                   // Real END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Character Identifier
     && lk != 389                   // String Identifier
     && lk != 390                   // Integer Identifier
     && lk != 391                   // Real Identifier
     && lk != 515                   // Identifier Character
     && lk != 516                   // Character Character
     && lk != 517                   // String Character
     && lk != 518                   // Integer Character
     && lk != 519                   // Real Character
     && lk != 643                   // Identifier String
     && lk != 644                   // Character String
     && lk != 645                   // String String
     && lk != 646                   // Integer String
     && lk != 647                   // Real String
     && lk != 771                   // Identifier Integer
     && lk != 772                   // Character Integer
     && lk != 773                   // String Integer
     && lk != 774                   // Integer Integer
     && lk != 775                   // Real Integer
     && lk != 899                   // Identifier Real
     && lk != 900                   // Character Real
     && lk != 901                   // String Real
     && lk != 902                   // Integer Real
     && lk != 903                   // Real Real
     && lk != 1027                  // Identifier Comment
     && lk != 1028                  // Character Comment
     && lk != 1029                  // String Comment
     && lk != 1030                  // Integer Comment
     && lk != 1031                  // Real Comment
     && lk != 1411                  // Identifier '!'
     && lk != 1412                  // Character '!'
     && lk != 1413                  // String '!'
     && lk != 1414                  // Integer '!'
     && lk != 1415                  // Real '!'
     && lk != 1539                  // Identifier '!='
     && lk != 1540                  // Character '!='
     && lk != 1541                  // String '!='
     && lk != 1542                  // Integer '!='
     && lk != 1543                  // Real '!='
     && lk != 1667                  // Identifier '%'
     && lk != 1668                  // Character '%'
     && lk != 1669                  // String '%'
     && lk != 1670                  // Integer '%'
     && lk != 1671                  // Real '%'
     && lk != 1795                  // Identifier '%='
     && lk != 1796                  // Character '%='
     && lk != 1797                  // String '%='
     && lk != 1798                  // Integer '%='
     && lk != 1799                  // Real '%='
     && lk != 1923                  // Identifier '&'
     && lk != 1924                  // Character '&'
     && lk != 1925                  // String '&'
     && lk != 1926                  // Integer '&'
     && lk != 1927                  // Real '&'
     && lk != 2051                  // Identifier '&&'
     && lk != 2052                  // Character '&&'
     && lk != 2053                  // String '&&'
     && lk != 2054                  // Integer '&&'
     && lk != 2055                  // Real '&&'
     && lk != 2179                  // Identifier '&='
     && lk != 2180                  // Character '&='
     && lk != 2181                  // String '&='
     && lk != 2182                  // Integer '&='
     && lk != 2183                  // Real '&='
     && lk != 2308                  // Character '('
     && lk != 2309                  // String '('
     && lk != 2310                  // Integer '('
     && lk != 2311                  // Real '('
     && lk != 2435                  // Identifier ')'
     && lk != 2436                  // Character ')'
     && lk != 2437                  // String ')'
     && lk != 2438                  // Integer ')'
     && lk != 2439                  // Real ')'
     && lk != 2563                  // Identifier '*'
     && lk != 2564                  // Character '*'
     && lk != 2565                  // String '*'
     && lk != 2566                  // Integer '*'
     && lk != 2567                  // Real '*'
     && lk != 2691                  // Identifier '**'
     && lk != 2692                  // Character '**'
     && lk != 2693                  // String '**'
     && lk != 2694                  // Integer '**'
     && lk != 2695                  // Real '**'
     && lk != 2819                  // Identifier '*='
     && lk != 2820                  // Character '*='
     && lk != 2821                  // String '*='
     && lk != 2822                  // Integer '*='
     && lk != 2823                  // Real '*='
     && lk != 2947                  // Identifier '+'
     && lk != 2948                  // Character '+'
     && lk != 2949                  // String '+'
     && lk != 2950                  // Integer '+'
     && lk != 2951                  // Real '+'
     && lk != 3203                  // Identifier '+='
     && lk != 3204                  // Character '+='
     && lk != 3205                  // String '+='
     && lk != 3206                  // Integer '+='
     && lk != 3207                  // Real '+='
     && lk != 3331                  // Identifier ','
     && lk != 3332                  // Character ','
     && lk != 3333                  // String ','
     && lk != 3334                  // Integer ','
     && lk != 3335                  // Real ','
     && lk != 3459                  // Identifier '-'
     && lk != 3460                  // Character '-'
     && lk != 3461                  // String '-'
     && lk != 3462                  // Integer '-'
     && lk != 3463                  // Real '-'
     && lk != 3715                  // Identifier '-='
     && lk != 3716                  // Character '-='
     && lk != 3717                  // String '-='
     && lk != 3718                  // Integer '-='
     && lk != 3719                  // Real '-='
     && lk != 3971                  // Identifier '/'
     && lk != 3972                  // Character '/'
     && lk != 3973                  // String '/'
     && lk != 3974                  // Integer '/'
     && lk != 3975                  // Real '/'
     && lk != 4099                  // Identifier '/='
     && lk != 4100                  // Character '/='
     && lk != 4101                  // String '/='
     && lk != 4102                  // Integer '/='
     && lk != 4103                  // Real '/='
     && lk != 4227                  // Identifier ':'
     && lk != 4228                  // Character ':'
     && lk != 4229                  // String ':'
     && lk != 4230                  // Integer ':'
     && lk != 4231                  // Real ':'
     && lk != 4355                  // Identifier ':='
     && lk != 4356                  // Character ':='
     && lk != 4357                  // String ':='
     && lk != 4358                  // Integer ':='
     && lk != 4359                  // Real ':='
     && lk != 4483                  // Identifier ';'
     && lk != 4484                  // Character ';'
     && lk != 4485                  // String ';'
     && lk != 4486                  // Integer ';'
     && lk != 4487                  // Real ';'
     && lk != 4611                  // Identifier '<'
     && lk != 4612                  // Character '<'
     && lk != 4613                  // String '<'
     && lk != 4614                  // Integer '<'
     && lk != 4615                  // Real '<'
     && lk != 4739                  // Identifier '<<'
     && lk != 4740                  // Character '<<'
     && lk != 4741                  // String '<<'
     && lk != 4742                  // Integer '<<'
     && lk != 4743                  // Real '<<'
     && lk != 4867                  // Identifier '<<='
     && lk != 4868                  // Character '<<='
     && lk != 4869                  // String '<<='
     && lk != 4870                  // Integer '<<='
     && lk != 4871                  // Real '<<='
     && lk != 4995                  // Identifier '<='
     && lk != 4996                  // Character '<='
     && lk != 4997                  // String '<='
     && lk != 4998                  // Integer '<='
     && lk != 4999                  // Real '<='
     && lk != 5123                  // Identifier '='
     && lk != 5124                  // Character '='
     && lk != 5125                  // String '='
     && lk != 5126                  // Integer '='
     && lk != 5127                  // Real '='
     && lk != 5251                  // Identifier '=='
     && lk != 5252                  // Character '=='
     && lk != 5253                  // String '=='
     && lk != 5254                  // Integer '=='
     && lk != 5255                  // Real '=='
     && lk != 5507                  // Identifier '>'
     && lk != 5508                  // Character '>'
     && lk != 5509                  // String '>'
     && lk != 5510                  // Integer '>'
     && lk != 5511                  // Real '>'
     && lk != 5635                  // Identifier '>='
     && lk != 5636                  // Character '>='
     && lk != 5637                  // String '>='
     && lk != 5638                  // Integer '>='
     && lk != 5639                  // Real '>='
     && lk != 5763                  // Identifier '>>'
     && lk != 5764                  // Character '>>'
     && lk != 5765                  // String '>>'
     && lk != 5766                  // Integer '>>'
     && lk != 5767                  // Real '>>'
     && lk != 5891                  // Identifier '>>='
     && lk != 5892                  // Character '>>='
     && lk != 5893                  // String '>>='
     && lk != 5894                  // Integer '>>='
     && lk != 5895                  // Real '>>='
     && lk != 6019                  // Identifier '?'
     && lk != 6020                  // Character '?'
     && lk != 6021                  // String '?'
     && lk != 6022                  // Integer '?'
     && lk != 6023                  // Real '?'
     && lk != 6147                  // Identifier '?='
     && lk != 6148                  // Character '?='
     && lk != 6149                  // String '?='
     && lk != 6150                  // Integer '?='
     && lk != 6151                  // Real '?='
     && lk != 6276                  // Character '['
     && lk != 6277                  // String '['
     && lk != 6278                  // Integer '['
     && lk != 6279                  // Real '['
     && lk != 6403                  // Identifier ']'
     && lk != 6404                  // Character ']'
     && lk != 6405                  // String ']'
     && lk != 6406                  // Integer ']'
     && lk != 6407                  // Real ']'
     && lk != 6531                  // Identifier '^'
     && lk != 6532                  // Character '^'
     && lk != 6533                  // String '^'
     && lk != 6534                  // Integer '^'
     && lk != 6535                  // Real '^'
     && lk != 6659                  // Identifier '^='
     && lk != 6660                  // Character '^='
     && lk != 6661                  // String '^='
     && lk != 6662                  // Integer '^='
     && lk != 6663                  // Real '^='
     && lk != 6787                  // Identifier 'break'
     && lk != 6788                  // Character 'break'
     && lk != 6789                  // String 'break'
     && lk != 6790                  // Integer 'break'
     && lk != 6791                  // Real 'break'
     && lk != 6915                  // Identifier 'case'
     && lk != 6916                  // Character 'case'
     && lk != 6917                  // String 'case'
     && lk != 6918                  // Integer 'case'
     && lk != 6919                  // Real 'case'
     && lk != 7043                  // Identifier 'continue'
     && lk != 7044                  // Character 'continue'
     && lk != 7045                  // String 'continue'
     && lk != 7046                  // Integer 'continue'
     && lk != 7047                  // Real 'continue'
     && lk != 7171                  // Identifier 'default'
     && lk != 7172                  // Character 'default'
     && lk != 7173                  // String 'default'
     && lk != 7174                  // Integer 'default'
     && lk != 7175                  // Real 'default'
     && lk != 7299                  // Identifier 'do'
     && lk != 7300                  // Character 'do'
     && lk != 7301                  // String 'do'
     && lk != 7302                  // Integer 'do'
     && lk != 7303                  // Real 'do'
     && lk != 7427                  // Identifier 'else'
     && lk != 7428                  // Character 'else'
     && lk != 7429                  // String 'else'
     && lk != 7430                  // Integer 'else'
     && lk != 7431                  // Real 'else'
     && lk != 7555                  // Identifier 'f32'
     && lk != 7556                  // Character 'f32'
     && lk != 7557                  // String 'f32'
     && lk != 7558                  // Integer 'f32'
     && lk != 7559                  // Real 'f32'
     && lk != 7683                  // Identifier 'f64'
     && lk != 7684                  // Character 'f64'
     && lk != 7685                  // String 'f64'
     && lk != 7686                  // Integer 'f64'
     && lk != 7687                  // Real 'f64'
     && lk != 7811                  // Identifier 'for'
     && lk != 7812                  // Character 'for'
     && lk != 7813                  // String 'for'
     && lk != 7814                  // Integer 'for'
     && lk != 7815                  // Real 'for'
     && lk != 7939                  // Identifier 'foreach'
     && lk != 7940                  // Character 'foreach'
     && lk != 7941                  // String 'foreach'
     && lk != 7942                  // Integer 'foreach'
     && lk != 7943                  // Real 'foreach'
     && lk != 8067                  // Identifier 'i32'
     && lk != 8068                  // Character 'i32'
     && lk != 8069                  // String 'i32'
     && lk != 8070                  // Integer 'i32'
     && lk != 8071                  // Real 'i32'
     && lk != 8195                  // Identifier 'i64'
     && lk != 8196                  // Character 'i64'
     && lk != 8197                  // String 'i64'
     && lk != 8198                  // Integer 'i64'
     && lk != 8199                  // Real 'i64'
     && lk != 8323                  // Identifier 'if'
     && lk != 8324                  // Character 'if'
     && lk != 8325                  // String 'if'
     && lk != 8326                  // Integer 'if'
     && lk != 8327                  // Real 'if'
     && lk != 8451                  // Identifier 'return'
     && lk != 8452                  // Character 'return'
     && lk != 8453                  // String 'return'
     && lk != 8454                  // Integer 'return'
     && lk != 8455                  // Real 'return'
     && lk != 8579                  // Identifier 'switch'
     && lk != 8580                  // Character 'switch'
     && lk != 8581                  // String 'switch'
     && lk != 8582                  // Integer 'switch'
     && lk != 8583                  // Real 'switch'
     && lk != 8707                  // Identifier 'while'
     && lk != 8708                  // Character 'while'
     && lk != 8709                  // String 'while'
     && lk != 8710                  // Integer 'while'
     && lk != 8711                  // Real 'while'
     && lk != 8835                  // Identifier '{'
     && lk != 8836                  // Character '{'
     && lk != 8837                  // String '{'
     && lk != 8838                  // Integer '{'
     && lk != 8839                  // Real '{'
     && lk != 8963                  // Identifier '|'
     && lk != 8964                  // Character '|'
     && lk != 8965                  // String '|'
     && lk != 8966                  // Integer '|'
     && lk != 8967                  // Real '|'
     && lk != 9091                  // Identifier '|='
     && lk != 9092                  // Character '|='
     && lk != 9093                  // String '|='
     && lk != 9094                  // Integer '|='
     && lk != 9095                  // Real '|='
     && lk != 9219                  // Identifier '||'
     && lk != 9220                  // Character '||'
     && lk != 9221                  // String '||'
     && lk != 9222                  // Integer '||'
     && lk != 9223                  // Real '||'
     && lk != 9347                  // Identifier '}'
     && lk != 9348                  // Character '}'
     && lk != 9349                  // String '}'
     && lk != 9350                  // Integer '}'
     && lk != 9351                  // Real '}'
     && lk != 9475                  // Identifier '~'
     && lk != 9476                  // Character '~'
     && lk != 9477                  // String '~'
     && lk != 9478                  // Integer '~'
     && lk != 9479                  // Real '~'
     && lk != 19459                 // Identifier '++' END
     && lk != 19460                 // Character '++' END
     && lk != 19461                 // String '++' END
     && lk != 19462                 // Integer '++' END
     && lk != 19463                 // Real '++' END
     && lk != 19971                 // Identifier '--' END
     && lk != 19972                 // Character '--' END
     && lk != 19973                 // String '--' END
     && lk != 19974                 // Integer '--' END
     && lk != 19975                 // Real '--' END
     && lk != 22833                 // '[' ']' END
     && lk != 55601                 // '[' ']' Identifier
     && lk != 71985                 // '[' ']' Character
     && lk != 88369                 // '[' ']' String
     && lk != 104753                // '[' ']' Integer
     && lk != 121137                // '[' ']' Real
     && lk != 134147                // Identifier '++' Comment
     && lk != 134148                // Character '++' Comment
     && lk != 134149                // String '++' Comment
     && lk != 134150                // Integer '++' Comment
     && lk != 134151                // Real '++' Comment
     && lk != 134659                // Identifier '--' Comment
     && lk != 134660                // Character '--' Comment
     && lk != 134661                // String '--' Comment
     && lk != 134662                // Integer '--' Comment
     && lk != 134663                // Real '--' Comment
     && lk != 137521                // '[' ']' Comment
     && lk != 183299                // Identifier '++' '!'
     && lk != 183300                // Character '++' '!'
     && lk != 183301                // String '++' '!'
     && lk != 183302                // Integer '++' '!'
     && lk != 183303                // Real '++' '!'
     && lk != 183811                // Identifier '--' '!'
     && lk != 183812                // Character '--' '!'
     && lk != 183813                // String '--' '!'
     && lk != 183814                // Integer '--' '!'
     && lk != 183815                // Real '--' '!'
     && lk != 186673                // '[' ']' '!'
     && lk != 199683                // Identifier '++' '!='
     && lk != 199684                // Character '++' '!='
     && lk != 199685                // String '++' '!='
     && lk != 199686                // Integer '++' '!='
     && lk != 199687                // Real '++' '!='
     && lk != 200195                // Identifier '--' '!='
     && lk != 200196                // Character '--' '!='
     && lk != 200197                // String '--' '!='
     && lk != 200198                // Integer '--' '!='
     && lk != 200199                // Real '--' '!='
     && lk != 203057                // '[' ']' '!='
     && lk != 216067                // Identifier '++' '%'
     && lk != 216068                // Character '++' '%'
     && lk != 216069                // String '++' '%'
     && lk != 216070                // Integer '++' '%'
     && lk != 216071                // Real '++' '%'
     && lk != 216579                // Identifier '--' '%'
     && lk != 216580                // Character '--' '%'
     && lk != 216581                // String '--' '%'
     && lk != 216582                // Integer '--' '%'
     && lk != 216583                // Real '--' '%'
     && lk != 219441                // '[' ']' '%'
     && lk != 232451                // Identifier '++' '%='
     && lk != 232452                // Character '++' '%='
     && lk != 232453                // String '++' '%='
     && lk != 232454                // Integer '++' '%='
     && lk != 232455                // Real '++' '%='
     && lk != 232963                // Identifier '--' '%='
     && lk != 232964                // Character '--' '%='
     && lk != 232965                // String '--' '%='
     && lk != 232966                // Integer '--' '%='
     && lk != 232967                // Real '--' '%='
     && lk != 235825                // '[' ']' '%='
     && lk != 248835                // Identifier '++' '&'
     && lk != 248836                // Character '++' '&'
     && lk != 248837                // String '++' '&'
     && lk != 248838                // Integer '++' '&'
     && lk != 248839                // Real '++' '&'
     && lk != 249347                // Identifier '--' '&'
     && lk != 249348                // Character '--' '&'
     && lk != 249349                // String '--' '&'
     && lk != 249350                // Integer '--' '&'
     && lk != 249351                // Real '--' '&'
     && lk != 252209                // '[' ']' '&'
     && lk != 265219                // Identifier '++' '&&'
     && lk != 265220                // Character '++' '&&'
     && lk != 265221                // String '++' '&&'
     && lk != 265222                // Integer '++' '&&'
     && lk != 265223                // Real '++' '&&'
     && lk != 265731                // Identifier '--' '&&'
     && lk != 265732                // Character '--' '&&'
     && lk != 265733                // String '--' '&&'
     && lk != 265734                // Integer '--' '&&'
     && lk != 265735                // Real '--' '&&'
     && lk != 268593                // '[' ']' '&&'
     && lk != 281603                // Identifier '++' '&='
     && lk != 281604                // Character '++' '&='
     && lk != 281605                // String '++' '&='
     && lk != 281606                // Integer '++' '&='
     && lk != 281607                // Real '++' '&='
     && lk != 282115                // Identifier '--' '&='
     && lk != 282116                // Character '--' '&='
     && lk != 282117                // String '--' '&='
     && lk != 282118                // Integer '--' '&='
     && lk != 282119                // Real '--' '&='
     && lk != 284977                // '[' ']' '&='
     && lk != 301361                // '[' ']' '('
     && lk != 314371                // Identifier '++' ')'
     && lk != 314372                // Character '++' ')'
     && lk != 314373                // String '++' ')'
     && lk != 314374                // Integer '++' ')'
     && lk != 314375                // Real '++' ')'
     && lk != 314883                // Identifier '--' ')'
     && lk != 314884                // Character '--' ')'
     && lk != 314885                // String '--' ')'
     && lk != 314886                // Integer '--' ')'
     && lk != 314887                // Real '--' ')'
     && lk != 317745                // '[' ']' ')'
     && lk != 330755                // Identifier '++' '*'
     && lk != 330756                // Character '++' '*'
     && lk != 330757                // String '++' '*'
     && lk != 330758                // Integer '++' '*'
     && lk != 330759                // Real '++' '*'
     && lk != 331267                // Identifier '--' '*'
     && lk != 331268                // Character '--' '*'
     && lk != 331269                // String '--' '*'
     && lk != 331270                // Integer '--' '*'
     && lk != 331271                // Real '--' '*'
     && lk != 334129                // '[' ']' '*'
     && lk != 347139                // Identifier '++' '**'
     && lk != 347140                // Character '++' '**'
     && lk != 347141                // String '++' '**'
     && lk != 347142                // Integer '++' '**'
     && lk != 347143                // Real '++' '**'
     && lk != 347651                // Identifier '--' '**'
     && lk != 347652                // Character '--' '**'
     && lk != 347653                // String '--' '**'
     && lk != 347654                // Integer '--' '**'
     && lk != 347655                // Real '--' '**'
     && lk != 350513                // '[' ']' '**'
     && lk != 363523                // Identifier '++' '*='
     && lk != 363524                // Character '++' '*='
     && lk != 363525                // String '++' '*='
     && lk != 363526                // Integer '++' '*='
     && lk != 363527                // Real '++' '*='
     && lk != 364035                // Identifier '--' '*='
     && lk != 364036                // Character '--' '*='
     && lk != 364037                // String '--' '*='
     && lk != 364038                // Integer '--' '*='
     && lk != 364039                // Real '--' '*='
     && lk != 366897                // '[' ']' '*='
     && lk != 379907                // Identifier '++' '+'
     && lk != 379908                // Character '++' '+'
     && lk != 379909                // String '++' '+'
     && lk != 379910                // Integer '++' '+'
     && lk != 379911                // Real '++' '+'
     && lk != 380419                // Identifier '--' '+'
     && lk != 380420                // Character '--' '+'
     && lk != 380421                // String '--' '+'
     && lk != 380422                // Integer '--' '+'
     && lk != 380423                // Real '--' '+'
     && lk != 383281                // '[' ']' '+'
     && lk != 396291                // Identifier '++' '++'
     && lk != 396292                // Character '++' '++'
     && lk != 396293                // String '++' '++'
     && lk != 396294                // Integer '++' '++'
     && lk != 396295                // Real '++' '++'
     && lk != 396803                // Identifier '--' '++'
     && lk != 396804                // Character '--' '++'
     && lk != 396805                // String '--' '++'
     && lk != 396806                // Integer '--' '++'
     && lk != 396807                // Real '--' '++'
     && lk != 412675                // Identifier '++' '+='
     && lk != 412676                // Character '++' '+='
     && lk != 412677                // String '++' '+='
     && lk != 412678                // Integer '++' '+='
     && lk != 412679                // Real '++' '+='
     && lk != 413187                // Identifier '--' '+='
     && lk != 413188                // Character '--' '+='
     && lk != 413189                // String '--' '+='
     && lk != 413190                // Integer '--' '+='
     && lk != 413191                // Real '--' '+='
     && lk != 416049                // '[' ']' '+='
     && lk != 429059                // Identifier '++' ','
     && lk != 429060                // Character '++' ','
     && lk != 429061                // String '++' ','
     && lk != 429062                // Integer '++' ','
     && lk != 429063                // Real '++' ','
     && lk != 429571                // Identifier '--' ','
     && lk != 429572                // Character '--' ','
     && lk != 429573                // String '--' ','
     && lk != 429574                // Integer '--' ','
     && lk != 429575                // Real '--' ','
     && lk != 432433                // '[' ']' ','
     && lk != 445443                // Identifier '++' '-'
     && lk != 445444                // Character '++' '-'
     && lk != 445445                // String '++' '-'
     && lk != 445446                // Integer '++' '-'
     && lk != 445447                // Real '++' '-'
     && lk != 445955                // Identifier '--' '-'
     && lk != 445956                // Character '--' '-'
     && lk != 445957                // String '--' '-'
     && lk != 445958                // Integer '--' '-'
     && lk != 445959                // Real '--' '-'
     && lk != 448817                // '[' ']' '-'
     && lk != 461827                // Identifier '++' '--'
     && lk != 461828                // Character '++' '--'
     && lk != 461829                // String '++' '--'
     && lk != 461830                // Integer '++' '--'
     && lk != 461831                // Real '++' '--'
     && lk != 462339                // Identifier '--' '--'
     && lk != 462340                // Character '--' '--'
     && lk != 462341                // String '--' '--'
     && lk != 462342                // Integer '--' '--'
     && lk != 462343                // Real '--' '--'
     && lk != 478211                // Identifier '++' '-='
     && lk != 478212                // Character '++' '-='
     && lk != 478213                // String '++' '-='
     && lk != 478214                // Integer '++' '-='
     && lk != 478215                // Real '++' '-='
     && lk != 478723                // Identifier '--' '-='
     && lk != 478724                // Character '--' '-='
     && lk != 478725                // String '--' '-='
     && lk != 478726                // Integer '--' '-='
     && lk != 478727                // Real '--' '-='
     && lk != 481585                // '[' ']' '-='
     && lk != 510979                // Identifier '++' '/'
     && lk != 510980                // Character '++' '/'
     && lk != 510981                // String '++' '/'
     && lk != 510982                // Integer '++' '/'
     && lk != 510983                // Real '++' '/'
     && lk != 511491                // Identifier '--' '/'
     && lk != 511492                // Character '--' '/'
     && lk != 511493                // String '--' '/'
     && lk != 511494                // Integer '--' '/'
     && lk != 511495                // Real '--' '/'
     && lk != 514353                // '[' ']' '/'
     && lk != 527363                // Identifier '++' '/='
     && lk != 527364                // Character '++' '/='
     && lk != 527365                // String '++' '/='
     && lk != 527366                // Integer '++' '/='
     && lk != 527367                // Real '++' '/='
     && lk != 527875                // Identifier '--' '/='
     && lk != 527876                // Character '--' '/='
     && lk != 527877                // String '--' '/='
     && lk != 527878                // Integer '--' '/='
     && lk != 527879                // Real '--' '/='
     && lk != 530737                // '[' ']' '/='
     && lk != 543747                // Identifier '++' ':'
     && lk != 543748                // Character '++' ':'
     && lk != 543749                // String '++' ':'
     && lk != 543750                // Integer '++' ':'
     && lk != 543751                // Real '++' ':'
     && lk != 544259                // Identifier '--' ':'
     && lk != 544260                // Character '--' ':'
     && lk != 544261                // String '--' ':'
     && lk != 544262                // Integer '--' ':'
     && lk != 544263                // Real '--' ':'
     && lk != 547121                // '[' ']' ':'
     && lk != 560131                // Identifier '++' ':='
     && lk != 560132                // Character '++' ':='
     && lk != 560133                // String '++' ':='
     && lk != 560134                // Integer '++' ':='
     && lk != 560135                // Real '++' ':='
     && lk != 560643                // Identifier '--' ':='
     && lk != 560644                // Character '--' ':='
     && lk != 560645                // String '--' ':='
     && lk != 560646                // Integer '--' ':='
     && lk != 560647                // Real '--' ':='
     && lk != 563505                // '[' ']' ':='
     && lk != 576515                // Identifier '++' ';'
     && lk != 576516                // Character '++' ';'
     && lk != 576517                // String '++' ';'
     && lk != 576518                // Integer '++' ';'
     && lk != 576519                // Real '++' ';'
     && lk != 577027                // Identifier '--' ';'
     && lk != 577028                // Character '--' ';'
     && lk != 577029                // String '--' ';'
     && lk != 577030                // Integer '--' ';'
     && lk != 577031                // Real '--' ';'
     && lk != 579889                // '[' ']' ';'
     && lk != 592899                // Identifier '++' '<'
     && lk != 592900                // Character '++' '<'
     && lk != 592901                // String '++' '<'
     && lk != 592902                // Integer '++' '<'
     && lk != 592903                // Real '++' '<'
     && lk != 593411                // Identifier '--' '<'
     && lk != 593412                // Character '--' '<'
     && lk != 593413                // String '--' '<'
     && lk != 593414                // Integer '--' '<'
     && lk != 593415                // Real '--' '<'
     && lk != 596273                // '[' ']' '<'
     && lk != 609283                // Identifier '++' '<<'
     && lk != 609284                // Character '++' '<<'
     && lk != 609285                // String '++' '<<'
     && lk != 609286                // Integer '++' '<<'
     && lk != 609287                // Real '++' '<<'
     && lk != 609795                // Identifier '--' '<<'
     && lk != 609796                // Character '--' '<<'
     && lk != 609797                // String '--' '<<'
     && lk != 609798                // Integer '--' '<<'
     && lk != 609799                // Real '--' '<<'
     && lk != 612657                // '[' ']' '<<'
     && lk != 625667                // Identifier '++' '<<='
     && lk != 625668                // Character '++' '<<='
     && lk != 625669                // String '++' '<<='
     && lk != 625670                // Integer '++' '<<='
     && lk != 625671                // Real '++' '<<='
     && lk != 626179                // Identifier '--' '<<='
     && lk != 626180                // Character '--' '<<='
     && lk != 626181                // String '--' '<<='
     && lk != 626182                // Integer '--' '<<='
     && lk != 626183                // Real '--' '<<='
     && lk != 629041                // '[' ']' '<<='
     && lk != 642051                // Identifier '++' '<='
     && lk != 642052                // Character '++' '<='
     && lk != 642053                // String '++' '<='
     && lk != 642054                // Integer '++' '<='
     && lk != 642055                // Real '++' '<='
     && lk != 642563                // Identifier '--' '<='
     && lk != 642564                // Character '--' '<='
     && lk != 642565                // String '--' '<='
     && lk != 642566                // Integer '--' '<='
     && lk != 642567                // Real '--' '<='
     && lk != 645425                // '[' ']' '<='
     && lk != 658435                // Identifier '++' '='
     && lk != 658436                // Character '++' '='
     && lk != 658437                // String '++' '='
     && lk != 658438                // Integer '++' '='
     && lk != 658439                // Real '++' '='
     && lk != 658947                // Identifier '--' '='
     && lk != 658948                // Character '--' '='
     && lk != 658949                // String '--' '='
     && lk != 658950                // Integer '--' '='
     && lk != 658951                // Real '--' '='
     && lk != 661809                // '[' ']' '='
     && lk != 674819                // Identifier '++' '=='
     && lk != 674820                // Character '++' '=='
     && lk != 674821                // String '++' '=='
     && lk != 674822                // Integer '++' '=='
     && lk != 674823                // Real '++' '=='
     && lk != 675331                // Identifier '--' '=='
     && lk != 675332                // Character '--' '=='
     && lk != 675333                // String '--' '=='
     && lk != 675334                // Integer '--' '=='
     && lk != 675335                // Real '--' '=='
     && lk != 678193                // '[' ']' '=='
     && lk != 707587                // Identifier '++' '>'
     && lk != 707588                // Character '++' '>'
     && lk != 707589                // String '++' '>'
     && lk != 707590                // Integer '++' '>'
     && lk != 707591                // Real '++' '>'
     && lk != 708099                // Identifier '--' '>'
     && lk != 708100                // Character '--' '>'
     && lk != 708101                // String '--' '>'
     && lk != 708102                // Integer '--' '>'
     && lk != 708103                // Real '--' '>'
     && lk != 710961                // '[' ']' '>'
     && lk != 723971                // Identifier '++' '>='
     && lk != 723972                // Character '++' '>='
     && lk != 723973                // String '++' '>='
     && lk != 723974                // Integer '++' '>='
     && lk != 723975                // Real '++' '>='
     && lk != 724483                // Identifier '--' '>='
     && lk != 724484                // Character '--' '>='
     && lk != 724485                // String '--' '>='
     && lk != 724486                // Integer '--' '>='
     && lk != 724487                // Real '--' '>='
     && lk != 727345                // '[' ']' '>='
     && lk != 740355                // Identifier '++' '>>'
     && lk != 740356                // Character '++' '>>'
     && lk != 740357                // String '++' '>>'
     && lk != 740358                // Integer '++' '>>'
     && lk != 740359                // Real '++' '>>'
     && lk != 740867                // Identifier '--' '>>'
     && lk != 740868                // Character '--' '>>'
     && lk != 740869                // String '--' '>>'
     && lk != 740870                // Integer '--' '>>'
     && lk != 740871                // Real '--' '>>'
     && lk != 743729                // '[' ']' '>>'
     && lk != 756739                // Identifier '++' '>>='
     && lk != 756740                // Character '++' '>>='
     && lk != 756741                // String '++' '>>='
     && lk != 756742                // Integer '++' '>>='
     && lk != 756743                // Real '++' '>>='
     && lk != 757251                // Identifier '--' '>>='
     && lk != 757252                // Character '--' '>>='
     && lk != 757253                // String '--' '>>='
     && lk != 757254                // Integer '--' '>>='
     && lk != 757255                // Real '--' '>>='
     && lk != 760113                // '[' ']' '>>='
     && lk != 773123                // Identifier '++' '?'
     && lk != 773124                // Character '++' '?'
     && lk != 773125                // String '++' '?'
     && lk != 773126                // Integer '++' '?'
     && lk != 773127                // Real '++' '?'
     && lk != 773635                // Identifier '--' '?'
     && lk != 773636                // Character '--' '?'
     && lk != 773637                // String '--' '?'
     && lk != 773638                // Integer '--' '?'
     && lk != 773639                // Real '--' '?'
     && lk != 776497                // '[' ']' '?'
     && lk != 789507                // Identifier '++' '?='
     && lk != 789508                // Character '++' '?='
     && lk != 789509                // String '++' '?='
     && lk != 789510                // Integer '++' '?='
     && lk != 789511                // Real '++' '?='
     && lk != 790019                // Identifier '--' '?='
     && lk != 790020                // Character '--' '?='
     && lk != 790021                // String '--' '?='
     && lk != 790022                // Integer '--' '?='
     && lk != 790023                // Real '--' '?='
     && lk != 792881                // '[' ']' '?='
     && lk != 809265                // '[' ']' '['
     && lk != 822275                // Identifier '++' ']'
     && lk != 822276                // Character '++' ']'
     && lk != 822277                // String '++' ']'
     && lk != 822278                // Integer '++' ']'
     && lk != 822279                // Real '++' ']'
     && lk != 822787                // Identifier '--' ']'
     && lk != 822788                // Character '--' ']'
     && lk != 822789                // String '--' ']'
     && lk != 822790                // Integer '--' ']'
     && lk != 822791                // Real '--' ']'
     && lk != 825649                // '[' ']' ']'
     && lk != 838659                // Identifier '++' '^'
     && lk != 838660                // Character '++' '^'
     && lk != 838661                // String '++' '^'
     && lk != 838662                // Integer '++' '^'
     && lk != 838663                // Real '++' '^'
     && lk != 839171                // Identifier '--' '^'
     && lk != 839172                // Character '--' '^'
     && lk != 839173                // String '--' '^'
     && lk != 839174                // Integer '--' '^'
     && lk != 839175                // Real '--' '^'
     && lk != 842033                // '[' ']' '^'
     && lk != 855043                // Identifier '++' '^='
     && lk != 855044                // Character '++' '^='
     && lk != 855045                // String '++' '^='
     && lk != 855046                // Integer '++' '^='
     && lk != 855047                // Real '++' '^='
     && lk != 855555                // Identifier '--' '^='
     && lk != 855556                // Character '--' '^='
     && lk != 855557                // String '--' '^='
     && lk != 855558                // Integer '--' '^='
     && lk != 855559                // Real '--' '^='
     && lk != 858417                // '[' ']' '^='
     && lk != 871427                // Identifier '++' 'break'
     && lk != 871428                // Character '++' 'break'
     && lk != 871429                // String '++' 'break'
     && lk != 871430                // Integer '++' 'break'
     && lk != 871431                // Real '++' 'break'
     && lk != 871939                // Identifier '--' 'break'
     && lk != 871940                // Character '--' 'break'
     && lk != 871941                // String '--' 'break'
     && lk != 871942                // Integer '--' 'break'
     && lk != 871943                // Real '--' 'break'
     && lk != 874801                // '[' ']' 'break'
     && lk != 887811                // Identifier '++' 'case'
     && lk != 887812                // Character '++' 'case'
     && lk != 887813                // String '++' 'case'
     && lk != 887814                // Integer '++' 'case'
     && lk != 887815                // Real '++' 'case'
     && lk != 888323                // Identifier '--' 'case'
     && lk != 888324                // Character '--' 'case'
     && lk != 888325                // String '--' 'case'
     && lk != 888326                // Integer '--' 'case'
     && lk != 888327                // Real '--' 'case'
     && lk != 891185                // '[' ']' 'case'
     && lk != 904195                // Identifier '++' 'continue'
     && lk != 904196                // Character '++' 'continue'
     && lk != 904197                // String '++' 'continue'
     && lk != 904198                // Integer '++' 'continue'
     && lk != 904199                // Real '++' 'continue'
     && lk != 904707                // Identifier '--' 'continue'
     && lk != 904708                // Character '--' 'continue'
     && lk != 904709                // String '--' 'continue'
     && lk != 904710                // Integer '--' 'continue'
     && lk != 904711                // Real '--' 'continue'
     && lk != 907569                // '[' ']' 'continue'
     && lk != 920579                // Identifier '++' 'default'
     && lk != 920580                // Character '++' 'default'
     && lk != 920581                // String '++' 'default'
     && lk != 920582                // Integer '++' 'default'
     && lk != 920583                // Real '++' 'default'
     && lk != 921091                // Identifier '--' 'default'
     && lk != 921092                // Character '--' 'default'
     && lk != 921093                // String '--' 'default'
     && lk != 921094                // Integer '--' 'default'
     && lk != 921095                // Real '--' 'default'
     && lk != 923953                // '[' ']' 'default'
     && lk != 936963                // Identifier '++' 'do'
     && lk != 936964                // Character '++' 'do'
     && lk != 936965                // String '++' 'do'
     && lk != 936966                // Integer '++' 'do'
     && lk != 936967                // Real '++' 'do'
     && lk != 937475                // Identifier '--' 'do'
     && lk != 937476                // Character '--' 'do'
     && lk != 937477                // String '--' 'do'
     && lk != 937478                // Integer '--' 'do'
     && lk != 937479                // Real '--' 'do'
     && lk != 940337                // '[' ']' 'do'
     && lk != 953347                // Identifier '++' 'else'
     && lk != 953348                // Character '++' 'else'
     && lk != 953349                // String '++' 'else'
     && lk != 953350                // Integer '++' 'else'
     && lk != 953351                // Real '++' 'else'
     && lk != 953859                // Identifier '--' 'else'
     && lk != 953860                // Character '--' 'else'
     && lk != 953861                // String '--' 'else'
     && lk != 953862                // Integer '--' 'else'
     && lk != 953863                // Real '--' 'else'
     && lk != 956721                // '[' ']' 'else'
     && lk != 969731                // Identifier '++' 'f32'
     && lk != 969732                // Character '++' 'f32'
     && lk != 969733                // String '++' 'f32'
     && lk != 969734                // Integer '++' 'f32'
     && lk != 969735                // Real '++' 'f32'
     && lk != 970243                // Identifier '--' 'f32'
     && lk != 970244                // Character '--' 'f32'
     && lk != 970245                // String '--' 'f32'
     && lk != 970246                // Integer '--' 'f32'
     && lk != 970247                // Real '--' 'f32'
     && lk != 973105                // '[' ']' 'f32'
     && lk != 986115                // Identifier '++' 'f64'
     && lk != 986116                // Character '++' 'f64'
     && lk != 986117                // String '++' 'f64'
     && lk != 986118                // Integer '++' 'f64'
     && lk != 986119                // Real '++' 'f64'
     && lk != 986627                // Identifier '--' 'f64'
     && lk != 986628                // Character '--' 'f64'
     && lk != 986629                // String '--' 'f64'
     && lk != 986630                // Integer '--' 'f64'
     && lk != 986631                // Real '--' 'f64'
     && lk != 989489                // '[' ']' 'f64'
     && lk != 1002499               // Identifier '++' 'for'
     && lk != 1002500               // Character '++' 'for'
     && lk != 1002501               // String '++' 'for'
     && lk != 1002502               // Integer '++' 'for'
     && lk != 1002503               // Real '++' 'for'
     && lk != 1003011               // Identifier '--' 'for'
     && lk != 1003012               // Character '--' 'for'
     && lk != 1003013               // String '--' 'for'
     && lk != 1003014               // Integer '--' 'for'
     && lk != 1003015               // Real '--' 'for'
     && lk != 1005873               // '[' ']' 'for'
     && lk != 1018883               // Identifier '++' 'foreach'
     && lk != 1018884               // Character '++' 'foreach'
     && lk != 1018885               // String '++' 'foreach'
     && lk != 1018886               // Integer '++' 'foreach'
     && lk != 1018887               // Real '++' 'foreach'
     && lk != 1019395               // Identifier '--' 'foreach'
     && lk != 1019396               // Character '--' 'foreach'
     && lk != 1019397               // String '--' 'foreach'
     && lk != 1019398               // Integer '--' 'foreach'
     && lk != 1019399               // Real '--' 'foreach'
     && lk != 1022257               // '[' ']' 'foreach'
     && lk != 1035267               // Identifier '++' 'i32'
     && lk != 1035268               // Character '++' 'i32'
     && lk != 1035269               // String '++' 'i32'
     && lk != 1035270               // Integer '++' 'i32'
     && lk != 1035271               // Real '++' 'i32'
     && lk != 1035779               // Identifier '--' 'i32'
     && lk != 1035780               // Character '--' 'i32'
     && lk != 1035781               // String '--' 'i32'
     && lk != 1035782               // Integer '--' 'i32'
     && lk != 1035783               // Real '--' 'i32'
     && lk != 1038641               // '[' ']' 'i32'
     && lk != 1051651               // Identifier '++' 'i64'
     && lk != 1051652               // Character '++' 'i64'
     && lk != 1051653               // String '++' 'i64'
     && lk != 1051654               // Integer '++' 'i64'
     && lk != 1051655               // Real '++' 'i64'
     && lk != 1052163               // Identifier '--' 'i64'
     && lk != 1052164               // Character '--' 'i64'
     && lk != 1052165               // String '--' 'i64'
     && lk != 1052166               // Integer '--' 'i64'
     && lk != 1052167               // Real '--' 'i64'
     && lk != 1055025               // '[' ']' 'i64'
     && lk != 1068035               // Identifier '++' 'if'
     && lk != 1068036               // Character '++' 'if'
     && lk != 1068037               // String '++' 'if'
     && lk != 1068038               // Integer '++' 'if'
     && lk != 1068039               // Real '++' 'if'
     && lk != 1068547               // Identifier '--' 'if'
     && lk != 1068548               // Character '--' 'if'
     && lk != 1068549               // String '--' 'if'
     && lk != 1068550               // Integer '--' 'if'
     && lk != 1068551               // Real '--' 'if'
     && lk != 1071409               // '[' ']' 'if'
     && lk != 1084419               // Identifier '++' 'return'
     && lk != 1084420               // Character '++' 'return'
     && lk != 1084421               // String '++' 'return'
     && lk != 1084422               // Integer '++' 'return'
     && lk != 1084423               // Real '++' 'return'
     && lk != 1084931               // Identifier '--' 'return'
     && lk != 1084932               // Character '--' 'return'
     && lk != 1084933               // String '--' 'return'
     && lk != 1084934               // Integer '--' 'return'
     && lk != 1084935               // Real '--' 'return'
     && lk != 1087793               // '[' ']' 'return'
     && lk != 1100803               // Identifier '++' 'switch'
     && lk != 1100804               // Character '++' 'switch'
     && lk != 1100805               // String '++' 'switch'
     && lk != 1100806               // Integer '++' 'switch'
     && lk != 1100807               // Real '++' 'switch'
     && lk != 1101315               // Identifier '--' 'switch'
     && lk != 1101316               // Character '--' 'switch'
     && lk != 1101317               // String '--' 'switch'
     && lk != 1101318               // Integer '--' 'switch'
     && lk != 1101319               // Real '--' 'switch'
     && lk != 1104177               // '[' ']' 'switch'
     && lk != 1117187               // Identifier '++' 'while'
     && lk != 1117188               // Character '++' 'while'
     && lk != 1117189               // String '++' 'while'
     && lk != 1117190               // Integer '++' 'while'
     && lk != 1117191               // Real '++' 'while'
     && lk != 1117699               // Identifier '--' 'while'
     && lk != 1117700               // Character '--' 'while'
     && lk != 1117701               // String '--' 'while'
     && lk != 1117702               // Integer '--' 'while'
     && lk != 1117703               // Real '--' 'while'
     && lk != 1120561               // '[' ']' 'while'
     && lk != 1136945               // '[' ']' '{'
     && lk != 1149955               // Identifier '++' '|'
     && lk != 1149956               // Character '++' '|'
     && lk != 1149957               // String '++' '|'
     && lk != 1149958               // Integer '++' '|'
     && lk != 1149959               // Real '++' '|'
     && lk != 1150467               // Identifier '--' '|'
     && lk != 1150468               // Character '--' '|'
     && lk != 1150469               // String '--' '|'
     && lk != 1150470               // Integer '--' '|'
     && lk != 1150471               // Real '--' '|'
     && lk != 1153329               // '[' ']' '|'
     && lk != 1166339               // Identifier '++' '|='
     && lk != 1166340               // Character '++' '|='
     && lk != 1166341               // String '++' '|='
     && lk != 1166342               // Integer '++' '|='
     && lk != 1166343               // Real '++' '|='
     && lk != 1166851               // Identifier '--' '|='
     && lk != 1166852               // Character '--' '|='
     && lk != 1166853               // String '--' '|='
     && lk != 1166854               // Integer '--' '|='
     && lk != 1166855               // Real '--' '|='
     && lk != 1169713               // '[' ']' '|='
     && lk != 1182723               // Identifier '++' '||'
     && lk != 1182724               // Character '++' '||'
     && lk != 1182725               // String '++' '||'
     && lk != 1182726               // Integer '++' '||'
     && lk != 1182727               // Real '++' '||'
     && lk != 1183235               // Identifier '--' '||'
     && lk != 1183236               // Character '--' '||'
     && lk != 1183237               // String '--' '||'
     && lk != 1183238               // Integer '--' '||'
     && lk != 1183239               // Real '--' '||'
     && lk != 1186097               // '[' ']' '||'
     && lk != 1199107               // Identifier '++' '}'
     && lk != 1199108               // Character '++' '}'
     && lk != 1199109               // String '++' '}'
     && lk != 1199110               // Integer '++' '}'
     && lk != 1199111               // Real '++' '}'
     && lk != 1199619               // Identifier '--' '}'
     && lk != 1199620               // Character '--' '}'
     && lk != 1199621               // String '--' '}'
     && lk != 1199622               // Integer '--' '}'
     && lk != 1199623               // Real '--' '}'
     && lk != 1202481               // '[' ']' '}'
     && lk != 1215491               // Identifier '++' '~'
     && lk != 1215492               // Character '++' '~'
     && lk != 1215493               // String '++' '~'
     && lk != 1215494               // Integer '++' '~'
     && lk != 1215495               // Real '++' '~'
     && lk != 1216003               // Identifier '--' '~'
     && lk != 1216004               // Character '--' '~'
     && lk != 1216005               // String '--' '~'
     && lk != 1216006               // Integer '--' '~'
     && lk != 1216007               // Real '--' '~'
     && lk != 1218865)              // '[' ']' '~'
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
            lookahead1W(4);         // WhiteSpace^token | '++'
            consumeT(24);           // '++'
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
    case 19459:                     // Identifier '++' END
    case 19460:                     // Character '++' END
    case 19461:                     // String '++' END
    case 19462:                     // Integer '++' END
    case 19463:                     // Real '++' END
    case 134147:                    // Identifier '++' Comment
    case 134148:                    // Character '++' Comment
    case 134149:                    // String '++' Comment
    case 134150:                    // Integer '++' Comment
    case 134151:                    // Real '++' Comment
    case 183299:                    // Identifier '++' '!'
    case 183300:                    // Character '++' '!'
    case 183301:                    // String '++' '!'
    case 183302:                    // Integer '++' '!'
    case 183303:                    // Real '++' '!'
    case 199683:                    // Identifier '++' '!='
    case 199684:                    // Character '++' '!='
    case 199685:                    // String '++' '!='
    case 199686:                    // Integer '++' '!='
    case 199687:                    // Real '++' '!='
    case 216067:                    // Identifier '++' '%'
    case 216068:                    // Character '++' '%'
    case 216069:                    // String '++' '%'
    case 216070:                    // Integer '++' '%'
    case 216071:                    // Real '++' '%'
    case 232451:                    // Identifier '++' '%='
    case 232452:                    // Character '++' '%='
    case 232453:                    // String '++' '%='
    case 232454:                    // Integer '++' '%='
    case 232455:                    // Real '++' '%='
    case 248835:                    // Identifier '++' '&'
    case 248836:                    // Character '++' '&'
    case 248837:                    // String '++' '&'
    case 248838:                    // Integer '++' '&'
    case 248839:                    // Real '++' '&'
    case 265219:                    // Identifier '++' '&&'
    case 265220:                    // Character '++' '&&'
    case 265221:                    // String '++' '&&'
    case 265222:                    // Integer '++' '&&'
    case 265223:                    // Real '++' '&&'
    case 281603:                    // Identifier '++' '&='
    case 281604:                    // Character '++' '&='
    case 281605:                    // String '++' '&='
    case 281606:                    // Integer '++' '&='
    case 281607:                    // Real '++' '&='
    case 314371:                    // Identifier '++' ')'
    case 314372:                    // Character '++' ')'
    case 314373:                    // String '++' ')'
    case 314374:                    // Integer '++' ')'
    case 314375:                    // Real '++' ')'
    case 330755:                    // Identifier '++' '*'
    case 330756:                    // Character '++' '*'
    case 330757:                    // String '++' '*'
    case 330758:                    // Integer '++' '*'
    case 330759:                    // Real '++' '*'
    case 347139:                    // Identifier '++' '**'
    case 347140:                    // Character '++' '**'
    case 347141:                    // String '++' '**'
    case 347142:                    // Integer '++' '**'
    case 347143:                    // Real '++' '**'
    case 363523:                    // Identifier '++' '*='
    case 363524:                    // Character '++' '*='
    case 363525:                    // String '++' '*='
    case 363526:                    // Integer '++' '*='
    case 363527:                    // Real '++' '*='
    case 379907:                    // Identifier '++' '+'
    case 379908:                    // Character '++' '+'
    case 379909:                    // String '++' '+'
    case 379910:                    // Integer '++' '+'
    case 379911:                    // Real '++' '+'
    case 396291:                    // Identifier '++' '++'
    case 396292:                    // Character '++' '++'
    case 396293:                    // String '++' '++'
    case 396294:                    // Integer '++' '++'
    case 396295:                    // Real '++' '++'
    case 412675:                    // Identifier '++' '+='
    case 412676:                    // Character '++' '+='
    case 412677:                    // String '++' '+='
    case 412678:                    // Integer '++' '+='
    case 412679:                    // Real '++' '+='
    case 429059:                    // Identifier '++' ','
    case 429060:                    // Character '++' ','
    case 429061:                    // String '++' ','
    case 429062:                    // Integer '++' ','
    case 429063:                    // Real '++' ','
    case 445443:                    // Identifier '++' '-'
    case 445444:                    // Character '++' '-'
    case 445445:                    // String '++' '-'
    case 445446:                    // Integer '++' '-'
    case 445447:                    // Real '++' '-'
    case 461827:                    // Identifier '++' '--'
    case 461828:                    // Character '++' '--'
    case 461829:                    // String '++' '--'
    case 461830:                    // Integer '++' '--'
    case 461831:                    // Real '++' '--'
    case 478211:                    // Identifier '++' '-='
    case 478212:                    // Character '++' '-='
    case 478213:                    // String '++' '-='
    case 478214:                    // Integer '++' '-='
    case 478215:                    // Real '++' '-='
    case 510979:                    // Identifier '++' '/'
    case 510980:                    // Character '++' '/'
    case 510981:                    // String '++' '/'
    case 510982:                    // Integer '++' '/'
    case 510983:                    // Real '++' '/'
    case 527363:                    // Identifier '++' '/='
    case 527364:                    // Character '++' '/='
    case 527365:                    // String '++' '/='
    case 527366:                    // Integer '++' '/='
    case 527367:                    // Real '++' '/='
    case 543747:                    // Identifier '++' ':'
    case 543748:                    // Character '++' ':'
    case 543749:                    // String '++' ':'
    case 543750:                    // Integer '++' ':'
    case 543751:                    // Real '++' ':'
    case 560131:                    // Identifier '++' ':='
    case 560132:                    // Character '++' ':='
    case 560133:                    // String '++' ':='
    case 560134:                    // Integer '++' ':='
    case 560135:                    // Real '++' ':='
    case 576515:                    // Identifier '++' ';'
    case 576516:                    // Character '++' ';'
    case 576517:                    // String '++' ';'
    case 576518:                    // Integer '++' ';'
    case 576519:                    // Real '++' ';'
    case 592899:                    // Identifier '++' '<'
    case 592900:                    // Character '++' '<'
    case 592901:                    // String '++' '<'
    case 592902:                    // Integer '++' '<'
    case 592903:                    // Real '++' '<'
    case 609283:                    // Identifier '++' '<<'
    case 609284:                    // Character '++' '<<'
    case 609285:                    // String '++' '<<'
    case 609286:                    // Integer '++' '<<'
    case 609287:                    // Real '++' '<<'
    case 625667:                    // Identifier '++' '<<='
    case 625668:                    // Character '++' '<<='
    case 625669:                    // String '++' '<<='
    case 625670:                    // Integer '++' '<<='
    case 625671:                    // Real '++' '<<='
    case 642051:                    // Identifier '++' '<='
    case 642052:                    // Character '++' '<='
    case 642053:                    // String '++' '<='
    case 642054:                    // Integer '++' '<='
    case 642055:                    // Real '++' '<='
    case 658435:                    // Identifier '++' '='
    case 658436:                    // Character '++' '='
    case 658437:                    // String '++' '='
    case 658438:                    // Integer '++' '='
    case 658439:                    // Real '++' '='
    case 674819:                    // Identifier '++' '=='
    case 674820:                    // Character '++' '=='
    case 674821:                    // String '++' '=='
    case 674822:                    // Integer '++' '=='
    case 674823:                    // Real '++' '=='
    case 707587:                    // Identifier '++' '>'
    case 707588:                    // Character '++' '>'
    case 707589:                    // String '++' '>'
    case 707590:                    // Integer '++' '>'
    case 707591:                    // Real '++' '>'
    case 723971:                    // Identifier '++' '>='
    case 723972:                    // Character '++' '>='
    case 723973:                    // String '++' '>='
    case 723974:                    // Integer '++' '>='
    case 723975:                    // Real '++' '>='
    case 740355:                    // Identifier '++' '>>'
    case 740356:                    // Character '++' '>>'
    case 740357:                    // String '++' '>>'
    case 740358:                    // Integer '++' '>>'
    case 740359:                    // Real '++' '>>'
    case 756739:                    // Identifier '++' '>>='
    case 756740:                    // Character '++' '>>='
    case 756741:                    // String '++' '>>='
    case 756742:                    // Integer '++' '>>='
    case 756743:                    // Real '++' '>>='
    case 773123:                    // Identifier '++' '?'
    case 773124:                    // Character '++' '?'
    case 773125:                    // String '++' '?'
    case 773126:                    // Integer '++' '?'
    case 773127:                    // Real '++' '?'
    case 789507:                    // Identifier '++' '?='
    case 789508:                    // Character '++' '?='
    case 789509:                    // String '++' '?='
    case 789510:                    // Integer '++' '?='
    case 789511:                    // Real '++' '?='
    case 822275:                    // Identifier '++' ']'
    case 822276:                    // Character '++' ']'
    case 822277:                    // String '++' ']'
    case 822278:                    // Integer '++' ']'
    case 822279:                    // Real '++' ']'
    case 838659:                    // Identifier '++' '^'
    case 838660:                    // Character '++' '^'
    case 838661:                    // String '++' '^'
    case 838662:                    // Integer '++' '^'
    case 838663:                    // Real '++' '^'
    case 855043:                    // Identifier '++' '^='
    case 855044:                    // Character '++' '^='
    case 855045:                    // String '++' '^='
    case 855046:                    // Integer '++' '^='
    case 855047:                    // Real '++' '^='
    case 871427:                    // Identifier '++' 'break'
    case 871428:                    // Character '++' 'break'
    case 871429:                    // String '++' 'break'
    case 871430:                    // Integer '++' 'break'
    case 871431:                    // Real '++' 'break'
    case 887811:                    // Identifier '++' 'case'
    case 887812:                    // Character '++' 'case'
    case 887813:                    // String '++' 'case'
    case 887814:                    // Integer '++' 'case'
    case 887815:                    // Real '++' 'case'
    case 904195:                    // Identifier '++' 'continue'
    case 904196:                    // Character '++' 'continue'
    case 904197:                    // String '++' 'continue'
    case 904198:                    // Integer '++' 'continue'
    case 904199:                    // Real '++' 'continue'
    case 920579:                    // Identifier '++' 'default'
    case 920580:                    // Character '++' 'default'
    case 920581:                    // String '++' 'default'
    case 920582:                    // Integer '++' 'default'
    case 920583:                    // Real '++' 'default'
    case 936963:                    // Identifier '++' 'do'
    case 936964:                    // Character '++' 'do'
    case 936965:                    // String '++' 'do'
    case 936966:                    // Integer '++' 'do'
    case 936967:                    // Real '++' 'do'
    case 953347:                    // Identifier '++' 'else'
    case 953348:                    // Character '++' 'else'
    case 953349:                    // String '++' 'else'
    case 953350:                    // Integer '++' 'else'
    case 953351:                    // Real '++' 'else'
    case 969731:                    // Identifier '++' 'f32'
    case 969732:                    // Character '++' 'f32'
    case 969733:                    // String '++' 'f32'
    case 969734:                    // Integer '++' 'f32'
    case 969735:                    // Real '++' 'f32'
    case 986115:                    // Identifier '++' 'f64'
    case 986116:                    // Character '++' 'f64'
    case 986117:                    // String '++' 'f64'
    case 986118:                    // Integer '++' 'f64'
    case 986119:                    // Real '++' 'f64'
    case 1002499:                   // Identifier '++' 'for'
    case 1002500:                   // Character '++' 'for'
    case 1002501:                   // String '++' 'for'
    case 1002502:                   // Integer '++' 'for'
    case 1002503:                   // Real '++' 'for'
    case 1018883:                   // Identifier '++' 'foreach'
    case 1018884:                   // Character '++' 'foreach'
    case 1018885:                   // String '++' 'foreach'
    case 1018886:                   // Integer '++' 'foreach'
    case 1018887:                   // Real '++' 'foreach'
    case 1035267:                   // Identifier '++' 'i32'
    case 1035268:                   // Character '++' 'i32'
    case 1035269:                   // String '++' 'i32'
    case 1035270:                   // Integer '++' 'i32'
    case 1035271:                   // Real '++' 'i32'
    case 1051651:                   // Identifier '++' 'i64'
    case 1051652:                   // Character '++' 'i64'
    case 1051653:                   // String '++' 'i64'
    case 1051654:                   // Integer '++' 'i64'
    case 1051655:                   // Real '++' 'i64'
    case 1068035:                   // Identifier '++' 'if'
    case 1068036:                   // Character '++' 'if'
    case 1068037:                   // String '++' 'if'
    case 1068038:                   // Integer '++' 'if'
    case 1068039:                   // Real '++' 'if'
    case 1084419:                   // Identifier '++' 'return'
    case 1084420:                   // Character '++' 'return'
    case 1084421:                   // String '++' 'return'
    case 1084422:                   // Integer '++' 'return'
    case 1084423:                   // Real '++' 'return'
    case 1100803:                   // Identifier '++' 'switch'
    case 1100804:                   // Character '++' 'switch'
    case 1100805:                   // String '++' 'switch'
    case 1100806:                   // Integer '++' 'switch'
    case 1100807:                   // Real '++' 'switch'
    case 1117187:                   // Identifier '++' 'while'
    case 1117188:                   // Character '++' 'while'
    case 1117189:                   // String '++' 'while'
    case 1117190:                   // Integer '++' 'while'
    case 1117191:                   // Real '++' 'while'
    case 1149955:                   // Identifier '++' '|'
    case 1149956:                   // Character '++' '|'
    case 1149957:                   // String '++' '|'
    case 1149958:                   // Integer '++' '|'
    case 1149959:                   // Real '++' '|'
    case 1166339:                   // Identifier '++' '|='
    case 1166340:                   // Character '++' '|='
    case 1166341:                   // String '++' '|='
    case 1166342:                   // Integer '++' '|='
    case 1166343:                   // Real '++' '|='
    case 1182723:                   // Identifier '++' '||'
    case 1182724:                   // Character '++' '||'
    case 1182725:                   // String '++' '||'
    case 1182726:                   // Integer '++' '||'
    case 1182727:                   // Real '++' '||'
    case 1199107:                   // Identifier '++' '}'
    case 1199108:                   // Character '++' '}'
    case 1199109:                   // String '++' '}'
    case 1199110:                   // Integer '++' '}'
    case 1199111:                   // Real '++' '}'
    case 1215491:                   // Identifier '++' '~'
    case 1215492:                   // Character '++' '~'
    case 1215493:                   // String '++' '~'
    case 1215494:                   // Integer '++' '~'
    case 1215495:                   // Real '++' '~'
      try_Primary();
      lookahead1W(4);               // WhiteSpace^token | '++'
      consumeT(24);                 // '++'
      break;
    case -3:
    case 19971:                     // Identifier '--' END
    case 19972:                     // Character '--' END
    case 19973:                     // String '--' END
    case 19974:                     // Integer '--' END
    case 19975:                     // Real '--' END
    case 134659:                    // Identifier '--' Comment
    case 134660:                    // Character '--' Comment
    case 134661:                    // String '--' Comment
    case 134662:                    // Integer '--' Comment
    case 134663:                    // Real '--' Comment
    case 183811:                    // Identifier '--' '!'
    case 183812:                    // Character '--' '!'
    case 183813:                    // String '--' '!'
    case 183814:                    // Integer '--' '!'
    case 183815:                    // Real '--' '!'
    case 200195:                    // Identifier '--' '!='
    case 200196:                    // Character '--' '!='
    case 200197:                    // String '--' '!='
    case 200198:                    // Integer '--' '!='
    case 200199:                    // Real '--' '!='
    case 216579:                    // Identifier '--' '%'
    case 216580:                    // Character '--' '%'
    case 216581:                    // String '--' '%'
    case 216582:                    // Integer '--' '%'
    case 216583:                    // Real '--' '%'
    case 232963:                    // Identifier '--' '%='
    case 232964:                    // Character '--' '%='
    case 232965:                    // String '--' '%='
    case 232966:                    // Integer '--' '%='
    case 232967:                    // Real '--' '%='
    case 249347:                    // Identifier '--' '&'
    case 249348:                    // Character '--' '&'
    case 249349:                    // String '--' '&'
    case 249350:                    // Integer '--' '&'
    case 249351:                    // Real '--' '&'
    case 265731:                    // Identifier '--' '&&'
    case 265732:                    // Character '--' '&&'
    case 265733:                    // String '--' '&&'
    case 265734:                    // Integer '--' '&&'
    case 265735:                    // Real '--' '&&'
    case 282115:                    // Identifier '--' '&='
    case 282116:                    // Character '--' '&='
    case 282117:                    // String '--' '&='
    case 282118:                    // Integer '--' '&='
    case 282119:                    // Real '--' '&='
    case 314883:                    // Identifier '--' ')'
    case 314884:                    // Character '--' ')'
    case 314885:                    // String '--' ')'
    case 314886:                    // Integer '--' ')'
    case 314887:                    // Real '--' ')'
    case 331267:                    // Identifier '--' '*'
    case 331268:                    // Character '--' '*'
    case 331269:                    // String '--' '*'
    case 331270:                    // Integer '--' '*'
    case 331271:                    // Real '--' '*'
    case 347651:                    // Identifier '--' '**'
    case 347652:                    // Character '--' '**'
    case 347653:                    // String '--' '**'
    case 347654:                    // Integer '--' '**'
    case 347655:                    // Real '--' '**'
    case 364035:                    // Identifier '--' '*='
    case 364036:                    // Character '--' '*='
    case 364037:                    // String '--' '*='
    case 364038:                    // Integer '--' '*='
    case 364039:                    // Real '--' '*='
    case 380419:                    // Identifier '--' '+'
    case 380420:                    // Character '--' '+'
    case 380421:                    // String '--' '+'
    case 380422:                    // Integer '--' '+'
    case 380423:                    // Real '--' '+'
    case 396803:                    // Identifier '--' '++'
    case 396804:                    // Character '--' '++'
    case 396805:                    // String '--' '++'
    case 396806:                    // Integer '--' '++'
    case 396807:                    // Real '--' '++'
    case 413187:                    // Identifier '--' '+='
    case 413188:                    // Character '--' '+='
    case 413189:                    // String '--' '+='
    case 413190:                    // Integer '--' '+='
    case 413191:                    // Real '--' '+='
    case 429571:                    // Identifier '--' ','
    case 429572:                    // Character '--' ','
    case 429573:                    // String '--' ','
    case 429574:                    // Integer '--' ','
    case 429575:                    // Real '--' ','
    case 445955:                    // Identifier '--' '-'
    case 445956:                    // Character '--' '-'
    case 445957:                    // String '--' '-'
    case 445958:                    // Integer '--' '-'
    case 445959:                    // Real '--' '-'
    case 462339:                    // Identifier '--' '--'
    case 462340:                    // Character '--' '--'
    case 462341:                    // String '--' '--'
    case 462342:                    // Integer '--' '--'
    case 462343:                    // Real '--' '--'
    case 478723:                    // Identifier '--' '-='
    case 478724:                    // Character '--' '-='
    case 478725:                    // String '--' '-='
    case 478726:                    // Integer '--' '-='
    case 478727:                    // Real '--' '-='
    case 511491:                    // Identifier '--' '/'
    case 511492:                    // Character '--' '/'
    case 511493:                    // String '--' '/'
    case 511494:                    // Integer '--' '/'
    case 511495:                    // Real '--' '/'
    case 527875:                    // Identifier '--' '/='
    case 527876:                    // Character '--' '/='
    case 527877:                    // String '--' '/='
    case 527878:                    // Integer '--' '/='
    case 527879:                    // Real '--' '/='
    case 544259:                    // Identifier '--' ':'
    case 544260:                    // Character '--' ':'
    case 544261:                    // String '--' ':'
    case 544262:                    // Integer '--' ':'
    case 544263:                    // Real '--' ':'
    case 560643:                    // Identifier '--' ':='
    case 560644:                    // Character '--' ':='
    case 560645:                    // String '--' ':='
    case 560646:                    // Integer '--' ':='
    case 560647:                    // Real '--' ':='
    case 577027:                    // Identifier '--' ';'
    case 577028:                    // Character '--' ';'
    case 577029:                    // String '--' ';'
    case 577030:                    // Integer '--' ';'
    case 577031:                    // Real '--' ';'
    case 593411:                    // Identifier '--' '<'
    case 593412:                    // Character '--' '<'
    case 593413:                    // String '--' '<'
    case 593414:                    // Integer '--' '<'
    case 593415:                    // Real '--' '<'
    case 609795:                    // Identifier '--' '<<'
    case 609796:                    // Character '--' '<<'
    case 609797:                    // String '--' '<<'
    case 609798:                    // Integer '--' '<<'
    case 609799:                    // Real '--' '<<'
    case 626179:                    // Identifier '--' '<<='
    case 626180:                    // Character '--' '<<='
    case 626181:                    // String '--' '<<='
    case 626182:                    // Integer '--' '<<='
    case 626183:                    // Real '--' '<<='
    case 642563:                    // Identifier '--' '<='
    case 642564:                    // Character '--' '<='
    case 642565:                    // String '--' '<='
    case 642566:                    // Integer '--' '<='
    case 642567:                    // Real '--' '<='
    case 658947:                    // Identifier '--' '='
    case 658948:                    // Character '--' '='
    case 658949:                    // String '--' '='
    case 658950:                    // Integer '--' '='
    case 658951:                    // Real '--' '='
    case 675331:                    // Identifier '--' '=='
    case 675332:                    // Character '--' '=='
    case 675333:                    // String '--' '=='
    case 675334:                    // Integer '--' '=='
    case 675335:                    // Real '--' '=='
    case 708099:                    // Identifier '--' '>'
    case 708100:                    // Character '--' '>'
    case 708101:                    // String '--' '>'
    case 708102:                    // Integer '--' '>'
    case 708103:                    // Real '--' '>'
    case 724483:                    // Identifier '--' '>='
    case 724484:                    // Character '--' '>='
    case 724485:                    // String '--' '>='
    case 724486:                    // Integer '--' '>='
    case 724487:                    // Real '--' '>='
    case 740867:                    // Identifier '--' '>>'
    case 740868:                    // Character '--' '>>'
    case 740869:                    // String '--' '>>'
    case 740870:                    // Integer '--' '>>'
    case 740871:                    // Real '--' '>>'
    case 757251:                    // Identifier '--' '>>='
    case 757252:                    // Character '--' '>>='
    case 757253:                    // String '--' '>>='
    case 757254:                    // Integer '--' '>>='
    case 757255:                    // Real '--' '>>='
    case 773635:                    // Identifier '--' '?'
    case 773636:                    // Character '--' '?'
    case 773637:                    // String '--' '?'
    case 773638:                    // Integer '--' '?'
    case 773639:                    // Real '--' '?'
    case 790019:                    // Identifier '--' '?='
    case 790020:                    // Character '--' '?='
    case 790021:                    // String '--' '?='
    case 790022:                    // Integer '--' '?='
    case 790023:                    // Real '--' '?='
    case 822787:                    // Identifier '--' ']'
    case 822788:                    // Character '--' ']'
    case 822789:                    // String '--' ']'
    case 822790:                    // Integer '--' ']'
    case 822791:                    // Real '--' ']'
    case 839171:                    // Identifier '--' '^'
    case 839172:                    // Character '--' '^'
    case 839173:                    // String '--' '^'
    case 839174:                    // Integer '--' '^'
    case 839175:                    // Real '--' '^'
    case 855555:                    // Identifier '--' '^='
    case 855556:                    // Character '--' '^='
    case 855557:                    // String '--' '^='
    case 855558:                    // Integer '--' '^='
    case 855559:                    // Real '--' '^='
    case 871939:                    // Identifier '--' 'break'
    case 871940:                    // Character '--' 'break'
    case 871941:                    // String '--' 'break'
    case 871942:                    // Integer '--' 'break'
    case 871943:                    // Real '--' 'break'
    case 888323:                    // Identifier '--' 'case'
    case 888324:                    // Character '--' 'case'
    case 888325:                    // String '--' 'case'
    case 888326:                    // Integer '--' 'case'
    case 888327:                    // Real '--' 'case'
    case 904707:                    // Identifier '--' 'continue'
    case 904708:                    // Character '--' 'continue'
    case 904709:                    // String '--' 'continue'
    case 904710:                    // Integer '--' 'continue'
    case 904711:                    // Real '--' 'continue'
    case 921091:                    // Identifier '--' 'default'
    case 921092:                    // Character '--' 'default'
    case 921093:                    // String '--' 'default'
    case 921094:                    // Integer '--' 'default'
    case 921095:                    // Real '--' 'default'
    case 937475:                    // Identifier '--' 'do'
    case 937476:                    // Character '--' 'do'
    case 937477:                    // String '--' 'do'
    case 937478:                    // Integer '--' 'do'
    case 937479:                    // Real '--' 'do'
    case 953859:                    // Identifier '--' 'else'
    case 953860:                    // Character '--' 'else'
    case 953861:                    // String '--' 'else'
    case 953862:                    // Integer '--' 'else'
    case 953863:                    // Real '--' 'else'
    case 970243:                    // Identifier '--' 'f32'
    case 970244:                    // Character '--' 'f32'
    case 970245:                    // String '--' 'f32'
    case 970246:                    // Integer '--' 'f32'
    case 970247:                    // Real '--' 'f32'
    case 986627:                    // Identifier '--' 'f64'
    case 986628:                    // Character '--' 'f64'
    case 986629:                    // String '--' 'f64'
    case 986630:                    // Integer '--' 'f64'
    case 986631:                    // Real '--' 'f64'
    case 1003011:                   // Identifier '--' 'for'
    case 1003012:                   // Character '--' 'for'
    case 1003013:                   // String '--' 'for'
    case 1003014:                   // Integer '--' 'for'
    case 1003015:                   // Real '--' 'for'
    case 1019395:                   // Identifier '--' 'foreach'
    case 1019396:                   // Character '--' 'foreach'
    case 1019397:                   // String '--' 'foreach'
    case 1019398:                   // Integer '--' 'foreach'
    case 1019399:                   // Real '--' 'foreach'
    case 1035779:                   // Identifier '--' 'i32'
    case 1035780:                   // Character '--' 'i32'
    case 1035781:                   // String '--' 'i32'
    case 1035782:                   // Integer '--' 'i32'
    case 1035783:                   // Real '--' 'i32'
    case 1052163:                   // Identifier '--' 'i64'
    case 1052164:                   // Character '--' 'i64'
    case 1052165:                   // String '--' 'i64'
    case 1052166:                   // Integer '--' 'i64'
    case 1052167:                   // Real '--' 'i64'
    case 1068547:                   // Identifier '--' 'if'
    case 1068548:                   // Character '--' 'if'
    case 1068549:                   // String '--' 'if'
    case 1068550:                   // Integer '--' 'if'
    case 1068551:                   // Real '--' 'if'
    case 1084931:                   // Identifier '--' 'return'
    case 1084932:                   // Character '--' 'return'
    case 1084933:                   // String '--' 'return'
    case 1084934:                   // Integer '--' 'return'
    case 1084935:                   // Real '--' 'return'
    case 1101315:                   // Identifier '--' 'switch'
    case 1101316:                   // Character '--' 'switch'
    case 1101317:                   // String '--' 'switch'
    case 1101318:                   // Integer '--' 'switch'
    case 1101319:                   // Real '--' 'switch'
    case 1117699:                   // Identifier '--' 'while'
    case 1117700:                   // Character '--' 'while'
    case 1117701:                   // String '--' 'while'
    case 1117702:                   // Integer '--' 'while'
    case 1117703:                   // Real '--' 'while'
    case 1150467:                   // Identifier '--' '|'
    case 1150468:                   // Character '--' '|'
    case 1150469:                   // String '--' '|'
    case 1150470:                   // Integer '--' '|'
    case 1150471:                   // Real '--' '|'
    case 1166851:                   // Identifier '--' '|='
    case 1166852:                   // Character '--' '|='
    case 1166853:                   // String '--' '|='
    case 1166854:                   // Integer '--' '|='
    case 1166855:                   // Real '--' '|='
    case 1183235:                   // Identifier '--' '||'
    case 1183236:                   // Character '--' '||'
    case 1183237:                   // String '--' '||'
    case 1183238:                   // Integer '--' '||'
    case 1183239:                   // Real '--' '||'
    case 1199619:                   // Identifier '--' '}'
    case 1199620:                   // Character '--' '}'
    case 1199621:                   // String '--' '}'
    case 1199622:                   // Integer '--' '}'
    case 1199623:                   // Real '--' '}'
    case 1216003:                   // Identifier '--' '~'
    case 1216004:                   // Character '--' '~'
    case 1216005:                   // String '--' '~'
    case 1216006:                   // Integer '--' '~'
    case 1216007:                   // Real '--' '~'
      try_Primary();
      lookahead1W(5);               // WhiteSpace^token | '--'
      consumeT(28);                 // '--'
      break;
    case 24:                        // '++'
      consumeT(24);                 // '++'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 28:                        // '--'
      consumeT(28);                 // '--'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 23:                        // '+'
      consumeT(23);                 // '+'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 27:                        // '-'
      consumeT(27);                 // '-'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 74:                        // '~'
      consumeT(74);                 // '~'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 11:                        // '!'
      consumeT(11);                 // '!'
      lookahead1W(19);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
    case 18:                        // '('
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
    case 18:                        // '('
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
      lookahead2W(15);              // WhiteSpace^token | '(' | '{'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 57:                        // 'do'
      parse_Do();
      break;
    case 68:                        // 'while'
      parse_While();
      break;
    case 61:                        // 'for'
      parse_For();
      break;
    case 62:                        // 'foreach'
      parse_ForEach();
      break;
    case 53:                        // 'break'
      parse_Break();
      break;
    case 55:                        // 'continue'
      parse_Continue();
      break;
    case 65:                        // 'if'
      parse_If();
      break;
    case 67:                        // 'switch'
      parse_Switch();
      break;
    case 8835:                      // Identifier '{'
      parse_NamespaceDeclaration();
      break;
    case 66:                        // 'return'
      parse_Return();
      break;
    case 35:                        // ';'
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
      lookahead2W(15);              // WhiteSpace^token | '(' | '{'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 57:                        // 'do'
      try_Do();
      break;
    case 68:                        // 'while'
      try_While();
      break;
    case 61:                        // 'for'
      try_For();
      break;
    case 62:                        // 'foreach'
      try_ForEach();
      break;
    case 53:                        // 'break'
      try_Break();
      break;
    case 55:                        // 'continue'
      try_Continue();
      break;
    case 65:                        // 'if'
      try_If();
      break;
    case 67:                        // 'switch'
      try_Switch();
      break;
    case 8835:                      // Identifier '{'
      try_NamespaceDeclaration();
      break;
    case 66:                        // 'return'
      try_Return();
      break;
    case 35:                        // ';'
      try_EmptyStatement();
      break;
    default:
      try_FunctionDeclaration();
    }
  }

  function parse_Do()
  {
    eventHandler.startNonterminal("Do", e0);
    consume(57);                    // 'do'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(12);                // WhiteSpace^token | 'while'
    consume(68);                    // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(57);                   // 'do'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(12);                // WhiteSpace^token | 'while'
    consumeT(68);                   // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(68);                    // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(68);                   // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    eventHandler.startNonterminal("For", e0);
    consume(61);                    // 'for'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("For", e0);
  }

  function try_For()
  {
    consumeT(61);                   // 'for'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_ForEach()
  {
    eventHandler.startNonterminal("ForEach", e0);
    consume(62);                    // 'foreach'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("ForEach", e0);
  }

  function try_ForEach()
  {
    consumeT(62);                   // 'foreach'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(8);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Break()
  {
    eventHandler.startNonterminal("Break", e0);
    consume(53);                    // 'break'
    eventHandler.endNonterminal("Break", e0);
  }

  function try_Break()
  {
    consumeT(53);                   // 'break'
  }

  function parse_Continue()
  {
    eventHandler.startNonterminal("Continue", e0);
    consume(55);                    // 'continue'
    eventHandler.endNonterminal("Continue", e0);
  }

  function try_Continue()
  {
    consumeT(55);                   // 'continue'
  }

  function parse_If()
  {
    eventHandler.startNonterminal("If", e0);
    consume(65);                    // 'if'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(32);                // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 58:                        // 'else'
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 442:                     // 'else' Identifier
        lookahead3W(43);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 6330:                    // 'else' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8890:                    // 'else' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 2362:                    // 'else' '('
      case 7354:                    // 'else' 'do'
      case 8506:                    // 'else' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 570:                     // 'else' Character
      case 698:                     // 'else' String
      case 826:                     // 'else' Integer
      case 954:                     // 'else' Real
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1082:                    // 'else' Comment
      case 4538:                    // 'else' ';'
      case 6842:                    // 'else' 'break'
      case 7098:                    // 'else' 'continue'
        lookahead3W(32);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 7610:                    // 'else' 'f32'
      case 7738:                    // 'else' 'f64'
      case 8122:                    // 'else' 'i32'
      case 8250:                    // 'else' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7866:                    // 'else' 'for'
      case 7994:                    // 'else' 'foreach'
      case 8378:                    // 'else' 'if'
      case 8634:                    // 'else' 'switch'
      case 8762:                    // 'else' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1466:                    // 'else' '!'
      case 3002:                    // 'else' '+'
      case 3130:                    // 'else' '++'
      case 3514:                    // 'else' '-'
      case 3642:                    // 'else' '--'
      case 9530:                    // 'else' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
     && lk != 8                     // Comment
     && lk != 11                    // '!'
     && lk != 18                    // '('
     && lk != 19                    // ')'
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 26                    // ','
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 33                    // ':'
     && lk != 35                    // ';'
     && lk != 49                    // '['
     && lk != 50                    // ']'
     && lk != 53                    // 'break'
     && lk != 54                    // 'case'
     && lk != 55                    // 'continue'
     && lk != 56                    // 'default'
     && lk != 57                    // 'do'
     && lk != 59                    // 'f32'
     && lk != 60                    // 'f64'
     && lk != 61                    // 'for'
     && lk != 62                    // 'foreach'
     && lk != 63                    // 'i32'
     && lk != 64                    // 'i64'
     && lk != 65                    // 'if'
     && lk != 66                    // 'return'
     && lk != 67                    // 'switch'
     && lk != 68                    // 'while'
     && lk != 69                    // '{'
     && lk != 73                    // '}'
     && lk != 74)                   // '~'
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
    consumeT(65);                   // 'if'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(32);                // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 58:                        // 'else'
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 442:                     // 'else' Identifier
        lookahead3W(43);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 6330:                    // 'else' '['
        lookahead3W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 8890:                    // 'else' '{'
        lookahead3W(25);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 2362:                    // 'else' '('
      case 7354:                    // 'else' 'do'
      case 8506:                    // 'else' 'return'
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      case 570:                     // 'else' Character
      case 698:                     // 'else' String
      case 826:                     // 'else' Integer
      case 954:                     // 'else' Real
        lookahead3W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1082:                    // 'else' Comment
      case 4538:                    // 'else' ';'
      case 6842:                    // 'else' 'break'
      case 7098:                    // 'else' 'continue'
        lookahead3W(32);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 7610:                    // 'else' 'f32'
      case 7738:                    // 'else' 'f64'
      case 8122:                    // 'else' 'i32'
      case 8250:                    // 'else' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 7866:                    // 'else' 'for'
      case 7994:                    // 'else' 'foreach'
      case 8378:                    // 'else' 'if'
      case 8634:                    // 'else' 'switch'
      case 8762:                    // 'else' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1466:                    // 'else' '!'
      case 3002:                    // 'else' '+'
      case 3130:                    // 'else' '++'
      case 3514:                    // 'else' '-'
      case 3642:                    // 'else' '--'
      case 9530:                    // 'else' '~'
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
     && lk != 8                     // Comment
     && lk != 11                    // '!'
     && lk != 18                    // '('
     && lk != 19                    // ')'
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 26                    // ','
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 33                    // ':'
     && lk != 35                    // ';'
     && lk != 49                    // '['
     && lk != 50                    // ']'
     && lk != 53                    // 'break'
     && lk != 54                    // 'case'
     && lk != 55                    // 'continue'
     && lk != 56                    // 'default'
     && lk != 57                    // 'do'
     && lk != 59                    // 'f32'
     && lk != 60                    // 'f64'
     && lk != 61                    // 'for'
     && lk != 62                    // 'foreach'
     && lk != 63                    // 'i32'
     && lk != 64                    // 'i64'
     && lk != 65                    // 'if'
     && lk != 66                    // 'return'
     && lk != 67                    // 'switch'
     && lk != 68                    // 'while'
     && lk != 69                    // '{'
     && lk != 73                    // '}'
     && lk != 74)                   // '~'
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
    consume(58);                    // 'else'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Else", e0);
  }

  function try_Else()
  {
    consumeT(58);                   // 'else'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(67);                    // 'switch'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(13);                // WhiteSpace^token | '{'
    consume(69);                    // '{'
    for (;;)
    {
      lookahead1W(11);              // WhiteSpace^token | 'case'
      whitespace();
      parse_Case();
      if (l1 != 54)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 56)                   // 'default'
    {
      whitespace();
      parse_Default();
    }
    consume(73);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(67);                   // 'switch'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(13);                // WhiteSpace^token | '{'
    consumeT(69);                   // '{'
    for (;;)
    {
      lookahead1W(11);              // WhiteSpace^token | 'case'
      try_Case();
      if (l1 != 54)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 56)                   // 'default'
    {
      try_Default();
    }
    consumeT(73);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(54);                    // 'case'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consume(33);                    // ':'
    for (;;)
    {
      lookahead1W(29);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '}' | '~'
      if (l1 == 54                  // 'case'
       || l1 == 56                  // 'default'
       || l1 == 73)                 // '}'
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
    consumeT(54);                   // 'case'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consumeT(33);                   // ':'
    for (;;)
    {
      lookahead1W(29);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '}' | '~'
      if (l1 == 54                  // 'case'
       || l1 == 56                  // 'default'
       || l1 == 73)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Default()
  {
    eventHandler.startNonterminal("Default", e0);
    consume(56);                    // 'default'
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consume(33);                    // ':'
    for (;;)
    {
      lookahead1W(25);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 73)                 // '}'
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
    consumeT(56);                   // 'default'
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consumeT(33);                   // ':'
    for (;;)
    {
      lookahead1W(25);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 73)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_NamespaceDeclaration()
  {
    eventHandler.startNonterminal("NamespaceDeclaration", e0);
    consume(3);                     // Identifier
    lookahead1W(13);                // WhiteSpace^token | '{'
    whitespace();
    parse_Block();
    eventHandler.endNonterminal("NamespaceDeclaration", e0);
  }

  function try_NamespaceDeclaration()
  {
    consumeT(3);                    // Identifier
    lookahead1W(13);                // WhiteSpace^token | '{'
    try_Block();
  }

  function parse_FunctionDeclaration()
  {
    eventHandler.startNonterminal("FunctionDeclaration", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(2);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 59                    // 'f32'
     && lk != 60                    // 'f64'
     && lk != 63                    // 'i32'
     && lk != 64)                   // 'i64'
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
          consumeT(3);              // Identifier
          lookahead1W(2);           // WhiteSpace^token | '('
          consumeT(18);             // '('
          lookahead1W(21);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
          try_Arguments();
          consumeT(19);             // ')'
          lookahead1W(13);          // WhiteSpace^token | '{'
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
            lookahead1W(2);         // WhiteSpace^token | '('
            consumeT(18);           // '('
            lookahead1W(21);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
            try_Arguments();
            consumeT(19);           // ')'
            lookahead1W(7);         // WhiteSpace^token | ':='
            consumeT(34);           // ':='
            lookahead1W(13);        // WhiteSpace^token | '{'
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
              consumeT(3);          // Identifier
              lookahead1W(2);       // WhiteSpace^token | '('
              consumeT(18);         // '('
              lookahead1W(21);      // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
              try_Arguments();
              consumeT(19);         // ')'
              lookahead1W(10);      // WhiteSpace^token | '?='
              consumeT(48);         // '?='
              lookahead1W(13);      // WhiteSpace^token | '{'
              try_Block();
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
        memoize(5, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
      consume(3);                   // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consume(18);                  // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(19);                  // ')'
      lookahead1W(13);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -2:
      consume(3);                   // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consume(18);                  // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(19);                  // ')'
      lookahead1W(7);               // WhiteSpace^token | ':='
      consume(34);                  // ':='
      lookahead1W(13);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -3:
      consume(3);                   // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consume(18);                  // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(19);                  // ')'
      lookahead1W(10);              // WhiteSpace^token | '?='
      consume(48);                  // '?='
      lookahead1W(13);              // WhiteSpace^token | '{'
      whitespace();
      parse_Block();
      break;
    case -4:
      consume(3);                   // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consume(18);                  // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(19);                  // ')'
      lookahead1W(9);               // WhiteSpace^token | '=>'
      consume(42);                  // '=>'
      lookahead1W(1);               // Script | WhiteSpace^token
      consume(9);                   // Script
      break;
    default:
      parse_Type();
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consume(18);                  // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Arguments();
      consume(19);                  // ')'
      lookahead1W(1);               // Script | WhiteSpace^token
      consume(9);                   // Script
    }
    eventHandler.endNonterminal("FunctionDeclaration", e0);
  }

  function try_FunctionDeclaration()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(2);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 59                    // 'f32'
     && lk != 60                    // 'f64'
     && lk != 63                    // 'i32'
     && lk != 64)                   // 'i64'
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
          consumeT(3);              // Identifier
          lookahead1W(2);           // WhiteSpace^token | '('
          consumeT(18);             // '('
          lookahead1W(21);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
          try_Arguments();
          consumeT(19);             // ')'
          lookahead1W(13);          // WhiteSpace^token | '{'
          try_Block();
          memoize(5, e0A, -1);
          lk = -6;
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
            lookahead1W(2);         // WhiteSpace^token | '('
            consumeT(18);           // '('
            lookahead1W(21);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
            try_Arguments();
            consumeT(19);           // ')'
            lookahead1W(7);         // WhiteSpace^token | ':='
            consumeT(34);           // ':='
            lookahead1W(13);        // WhiteSpace^token | '{'
            try_Block();
            memoize(5, e0A, -2);
            lk = -6;
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
              lookahead1W(2);       // WhiteSpace^token | '('
              consumeT(18);         // '('
              lookahead1W(21);      // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
              try_Arguments();
              consumeT(19);         // ')'
              lookahead1W(10);      // WhiteSpace^token | '?='
              consumeT(48);         // '?='
              lookahead1W(13);      // WhiteSpace^token | '{'
              try_Block();
              memoize(5, e0A, -3);
              lk = -6;
            }
            catch (p3A)
            {
              lk = -4;
              b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
              b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
              b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
              b3 = b3A; e3 = e3A; end = e3A; }}}
              memoize(5, e0A, -4);
            }
          }
        }
      }
    }
    switch (lk)
    {
    case -1:
      consumeT(3);                  // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consumeT(18);                 // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Arguments();
      consumeT(19);                 // ')'
      lookahead1W(13);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -2:
      consumeT(3);                  // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consumeT(18);                 // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Arguments();
      consumeT(19);                 // ')'
      lookahead1W(7);               // WhiteSpace^token | ':='
      consumeT(34);                 // ':='
      lookahead1W(13);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -3:
      consumeT(3);                  // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consumeT(18);                 // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Arguments();
      consumeT(19);                 // ')'
      lookahead1W(10);              // WhiteSpace^token | '?='
      consumeT(48);                 // '?='
      lookahead1W(13);              // WhiteSpace^token | '{'
      try_Block();
      break;
    case -4:
      consumeT(3);                  // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consumeT(18);                 // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Arguments();
      consumeT(19);                 // ')'
      lookahead1W(9);               // WhiteSpace^token | '=>'
      consumeT(42);                 // '=>'
      lookahead1W(1);               // Script | WhiteSpace^token
      consumeT(9);                  // Script
      break;
    case -6:
      break;
    default:
      try_Type();
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consumeT(3);                  // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consumeT(18);                 // '('
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Arguments();
      consumeT(19);                 // ')'
      lookahead1W(1);               // Script | WhiteSpace^token
      consumeT(9);                  // Script
    }
  }

  function parse_Return()
  {
    eventHandler.startNonterminal("Return", e0);
    consume(66);                    // 'return'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(66);                   // 'return'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_EmptyStatement()
  {
    eventHandler.startNonterminal("EmptyStatement", e0);
    consume(35);                    // ';'
    eventHandler.endNonterminal("EmptyStatement", e0);
  }

  function try_EmptyStatement()
  {
    consumeT(35);                   // ';'
  }

  function parse_Type()
  {
    eventHandler.startNonterminal("Type", e0);
    switch (l1)
    {
    case 63:                        // 'i32'
      consume(63);                  // 'i32'
      break;
    case 64:                        // 'i64'
      consume(64);                  // 'i64'
      break;
    case 59:                        // 'f32'
      consume(59);                  // 'f32'
      break;
    default:
      consume(60);                  // 'f64'
    }
    eventHandler.endNonterminal("Type", e0);
  }

  function try_Type()
  {
    switch (l1)
    {
    case 63:                        // 'i32'
      consumeT(63);                 // 'i32'
      break;
    case 64:                        // 'i64'
      consumeT(64);                 // 'i64'
      break;
    case 59:                        // 'f32'
      consumeT(59);                 // 'f32'
      break;
    default:
      consumeT(60);                 // 'f64'
    }
  }

  function parse_Arguments()
  {
    eventHandler.startNonterminal("Arguments", e0);
    switch (l1)
    {
    case 59:                        // 'f32'
    case 60:                        // 'f64'
    case 63:                        // 'i32'
    case 64:                        // 'i64'
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 443:                     // 'f32' Identifier
      case 444:                     // 'f64' Identifier
      case 447:                     // 'i32' Identifier
      case 448:                     // 'i64' Identifier
        lookahead3W(36);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 295355                // 'f32' Identifier '('
     || lk == 295356                // 'f64' Identifier '('
     || lk == 295359                // 'i32' Identifier '('
     || lk == 295360)               // 'i64' Identifier '('
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
        memoize(6, e0, lk);
      }
    }
    if (lk != -2
     && lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Real
     && lk != 8                     // Comment
     && lk != 11                    // '!'
     && lk != 18                    // '('
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 35                    // ';'
     && lk != 49                    // '['
     && lk != 53                    // 'break'
     && lk != 55                    // 'continue'
     && lk != 57                    // 'do'
     && lk != 61                    // 'for'
     && lk != 62                    // 'foreach'
     && lk != 65                    // 'if'
     && lk != 66                    // 'return'
     && lk != 67                    // 'switch'
     && lk != 68                    // 'while'
     && lk != 69                    // '{'
     && lk != 74)                   // '~'
    {
      whitespace();
      parse_Type();
    }
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    for (;;)
    {
      lookahead1W(17);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consume(26);                  // ','
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 59:                      // 'f32'
      case 60:                      // 'f64'
      case 63:                      // 'i32'
      case 64:                      // 'i64'
        lookahead2W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 443:                   // 'f32' Identifier
        case 444:                   // 'f64' Identifier
        case 447:                   // 'i32' Identifier
        case 448:                   // 'i64' Identifier
          lookahead3W(36);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 295355              // 'f32' Identifier '('
       || lk == 295356              // 'f64' Identifier '('
       || lk == 295359              // 'i32' Identifier '('
       || lk == 295360)             // 'i64' Identifier '('
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
          memoize(7, e0, lk);
        }
      }
      if (lk != -2
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Real
       && lk != 8                   // Comment
       && lk != 11                  // '!'
       && lk != 18                  // '('
       && lk != 23                  // '+'
       && lk != 24                  // '++'
       && lk != 27                  // '-'
       && lk != 28                  // '--'
       && lk != 35                  // ';'
       && lk != 49                  // '['
       && lk != 53                  // 'break'
       && lk != 55                  // 'continue'
       && lk != 57                  // 'do'
       && lk != 61                  // 'for'
       && lk != 62                  // 'foreach'
       && lk != 65                  // 'if'
       && lk != 66                  // 'return'
       && lk != 67                  // 'switch'
       && lk != 68                  // 'while'
       && lk != 69                  // '{'
       && lk != 74                  // '~'
       && lk != 426427              // 'f32' Identifier ','
       && lk != 426428              // 'f64' Identifier ','
       && lk != 426431              // 'i32' Identifier ','
       && lk != 426432)             // 'i64' Identifier ','
      {
        whitespace();
        parse_Type();
      }
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Arguments", e0);
  }

  function try_Arguments()
  {
    switch (l1)
    {
    case 59:                        // 'f32'
    case 60:                        // 'f64'
    case 63:                        // 'i32'
    case 64:                        // 'i64'
      lookahead2W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 443:                     // 'f32' Identifier
      case 444:                     // 'f64' Identifier
      case 447:                     // 'i32' Identifier
      case 448:                     // 'i64' Identifier
        lookahead3W(36);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 295355                // 'f32' Identifier '('
     || lk == 295356                // 'f64' Identifier '('
     || lk == 295359                // 'i32' Identifier '('
     || lk == 295360)               // 'i64' Identifier '('
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
          try_Type();
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
    if (lk != -2
     && lk != 3                     // Identifier
     && lk != 4                     // Character
     && lk != 5                     // String
     && lk != 6                     // Integer
     && lk != 7                     // Real
     && lk != 8                     // Comment
     && lk != 11                    // '!'
     && lk != 18                    // '('
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 35                    // ';'
     && lk != 49                    // '['
     && lk != 53                    // 'break'
     && lk != 55                    // 'continue'
     && lk != 57                    // 'do'
     && lk != 61                    // 'for'
     && lk != 62                    // 'foreach'
     && lk != 65                    // 'if'
     && lk != 66                    // 'return'
     && lk != 67                    // 'switch'
     && lk != 68                    // 'while'
     && lk != 69                    // '{'
     && lk != 74)                   // '~'
    {
      try_Type();
    }
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    for (;;)
    {
      lookahead1W(17);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consumeT(26);                 // ','
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 59:                      // 'f32'
      case 60:                      // 'f64'
      case 63:                      // 'i32'
      case 64:                      // 'i64'
        lookahead2W(21);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 443:                   // 'f32' Identifier
        case 444:                   // 'f64' Identifier
        case 447:                   // 'i32' Identifier
        case 448:                   // 'i64' Identifier
          lookahead3W(36);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk == 295355              // 'f32' Identifier '('
       || lk == 295356              // 'f64' Identifier '('
       || lk == 295359              // 'i32' Identifier '('
       || lk == 295360)             // 'i64' Identifier '('
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
            try_Type();
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
       && lk != 3                   // Identifier
       && lk != 4                   // Character
       && lk != 5                   // String
       && lk != 6                   // Integer
       && lk != 7                   // Real
       && lk != 8                   // Comment
       && lk != 11                  // '!'
       && lk != 18                  // '('
       && lk != 23                  // '+'
       && lk != 24                  // '++'
       && lk != 27                  // '-'
       && lk != 28                  // '--'
       && lk != 35                  // ';'
       && lk != 49                  // '['
       && lk != 53                  // 'break'
       && lk != 55                  // 'continue'
       && lk != 57                  // 'do'
       && lk != 61                  // 'for'
       && lk != 62                  // 'foreach'
       && lk != 65                  // 'if'
       && lk != 66                  // 'return'
       && lk != 67                  // 'switch'
       && lk != 68                  // 'while'
       && lk != 69                  // '{'
       && lk != 74                  // '~'
       && lk != 426427              // 'f32' Identifier ','
       && lk != 426428              // 'f64' Identifier ','
       && lk != 426431              // 'i32' Identifier ','
       && lk != 426432)             // 'i64' Identifier ','
      {
        try_Type();
      }
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Expression();
    }
  }

  function parse_Member()
  {
    eventHandler.startNonterminal("Member", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(43);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 3843:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51459                 // Identifier '(' Identifier
     || lk == 52995                 // Identifier '.' Identifier
     || lk == 67843                 // Identifier '(' Character
     || lk == 84227                 // Identifier '(' String
     || lk == 100611                // Identifier '(' Integer
     || lk == 116995                // Identifier '(' Real
     || lk == 133379                // Identifier '(' Comment
     || lk == 182531                // Identifier '(' '!'
     || lk == 297219                // Identifier '(' '('
     || lk == 379139                // Identifier '(' '+'
     || lk == 395523                // Identifier '(' '++'
     || lk == 444675                // Identifier '(' '-'
     || lk == 461059                // Identifier '(' '--'
     || lk == 575747                // Identifier '(' ';'
     || lk == 805123                // Identifier '(' '['
     || lk == 870659                // Identifier '(' 'break'
     || lk == 903427                // Identifier '(' 'continue'
     || lk == 936195                // Identifier '(' 'do'
     || lk == 968963                // Identifier '(' 'f32'
     || lk == 985347                // Identifier '(' 'f64'
     || lk == 1001731               // Identifier '(' 'for'
     || lk == 1018115               // Identifier '(' 'foreach'
     || lk == 1034499               // Identifier '(' 'i32'
     || lk == 1050883               // Identifier '(' 'i64'
     || lk == 1067267               // Identifier '(' 'if'
     || lk == 1083651               // Identifier '(' 'return'
     || lk == 1100035               // Identifier '(' 'switch'
     || lk == 1116419               // Identifier '(' 'while'
     || lk == 1132803               // Identifier '(' '{'
     || lk == 1214723)              // Identifier '(' '~'
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
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(14);        // WhiteSpace^token | '(' | '.'
            if (l1 != 30)           // '.'
            {
              break;
            }
            consumeT(30);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(18);             // '('
          lookahead1W(23);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          if (l1 != 19)             // ')'
          {
            try_Arguments();
          }
          consumeT(19);             // ')'
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
    switch (lk)
    {
    case -1:
    case 313603:                    // Identifier '(' ')'
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(14);            // WhiteSpace^token | '(' | '.'
        if (l1 != 30)               // '.'
        {
          break;
        }
        consume(30);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(18);                  // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
      if (l1 != 19)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(19);                  // ')'
      break;
    default:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(43);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        if (l1 != 30)               // '.'
        {
          break;
        }
        consume(30);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      for (;;)
      {
        lookahead1W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 49:                    // '['
          lookahead2W(24);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          switch (lk)
          {
          case 433:                 // '[' Identifier
            lookahead3W(38);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4529:                // '[' ';'
            lookahead3W(27);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
            break;
          case 6321:                // '[' '['
            lookahead3W(24);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
            break;
          case 6449:                // '[' ']'
            lookahead3W(42);        // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 8881:                // '[' '{'
            lookahead3W(25);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
            break;
          case 1073:                // '[' Comment
          case 6833:                // '[' 'break'
          case 7089:                // '[' 'continue'
            lookahead3W(18);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 561:                 // '[' Character
          case 689:                 // '[' String
          case 817:                 // '[' Integer
          case 945:                 // '[' Real
            lookahead3W(34);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 7857:                // '[' 'for'
          case 7985:                // '[' 'foreach'
          case 8369:                // '[' 'if'
          case 8625:                // '[' 'switch'
          case 8753:                // '[' 'while'
            lookahead3W(2);         // WhiteSpace^token | '('
            break;
          case 1457:                // '[' '!'
          case 2993:                // '[' '+'
          case 3121:                // '[' '++'
          case 3505:                // '[' '-'
          case 3633:                // '[' '--'
          case 9521:                // '[' '~'
            lookahead3W(19);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
            break;
          case 2353:                // '[' '('
          case 7345:                // '[' 'do'
          case 7601:                // '[' 'f32'
          case 7729:                // '[' 'f64'
          case 8113:                // '[' 'i32'
          case 8241:                // '[' 'i64'
          case 8497:                // '[' 'return'
            lookahead3W(21);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
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
         && lk != 8                 // Comment
         && lk != 11                // '!'
         && lk != 12                // '!='
         && lk != 13                // '%'
         && lk != 14                // '%='
         && lk != 15                // '&'
         && lk != 16                // '&&'
         && lk != 17                // '&='
         && lk != 18                // '('
         && lk != 19                // ')'
         && lk != 20                // '*'
         && lk != 21                // '**'
         && lk != 22                // '*='
         && lk != 23                // '+'
         && lk != 24                // '++'
         && lk != 25                // '+='
         && lk != 26                // ','
         && lk != 27                // '-'
         && lk != 28                // '--'
         && lk != 29                // '-='
         && lk != 31                // '/'
         && lk != 32                // '/='
         && lk != 33                // ':'
         && lk != 34                // ':='
         && lk != 35                // ';'
         && lk != 36                // '<'
         && lk != 37                // '<<'
         && lk != 38                // '<<='
         && lk != 39                // '<='
         && lk != 40                // '='
         && lk != 41                // '=='
         && lk != 43                // '>'
         && lk != 44                // '>='
         && lk != 45                // '>>'
         && lk != 46                // '>>='
         && lk != 47                // '?'
         && lk != 48                // '?='
         && lk != 50                // ']'
         && lk != 51                // '^'
         && lk != 52                // '^='
         && lk != 53                // 'break'
         && lk != 54                // 'case'
         && lk != 55                // 'continue'
         && lk != 56                // 'default'
         && lk != 57                // 'do'
         && lk != 58                // 'else'
         && lk != 59                // 'f32'
         && lk != 60                // 'f64'
         && lk != 61                // 'for'
         && lk != 62                // 'foreach'
         && lk != 63                // 'i32'
         && lk != 64                // 'i64'
         && lk != 65                // 'if'
         && lk != 66                // 'return'
         && lk != 67                // 'switch'
         && lk != 68                // 'while'
         && lk != 69                // '{'
         && lk != 70                // '|'
         && lk != 71                // '|='
         && lk != 72                // '||'
         && lk != 73                // '}'
         && lk != 74                // '~'
         && lk != 53681             // '[' ';' Identifier
         && lk != 70065             // '[' ';' Character
         && lk != 73137             // '[' 'f32' Character
         && lk != 73265             // '[' 'f64' Character
         && lk != 73649             // '[' 'i32' Character
         && lk != 73777             // '[' 'i64' Character
         && lk != 86449             // '[' ';' String
         && lk != 89521             // '[' 'f32' String
         && lk != 89649             // '[' 'f64' String
         && lk != 90033             // '[' 'i32' String
         && lk != 90161             // '[' 'i64' String
         && lk != 102833            // '[' ';' Integer
         && lk != 105905            // '[' 'f32' Integer
         && lk != 106033            // '[' 'f64' Integer
         && lk != 106417            // '[' 'i32' Integer
         && lk != 106545            // '[' 'i64' Integer
         && lk != 119217            // '[' ';' Real
         && lk != 122289            // '[' 'f32' Real
         && lk != 122417            // '[' 'f64' Real
         && lk != 122801            // '[' 'i32' Real
         && lk != 122929            // '[' 'i64' Real
         && lk != 135601            // '[' ';' Comment
         && lk != 138673            // '[' 'f32' Comment
         && lk != 138801            // '[' 'f64' Comment
         && lk != 139185            // '[' 'i32' Comment
         && lk != 139313            // '[' 'i64' Comment
         && lk != 184753            // '[' ';' '!'
         && lk != 187825            // '[' 'f32' '!'
         && lk != 187953            // '[' 'f64' '!'
         && lk != 188337            // '[' 'i32' '!'
         && lk != 188465            // '[' 'i64' '!'
         && lk != 299441            // '[' ';' '('
         && lk != 302513            // '[' 'f32' '('
         && lk != 302641            // '[' 'f64' '('
         && lk != 303025            // '[' 'i32' '('
         && lk != 303153            // '[' 'i64' '('
         && lk != 317745            // '[' ']' ')'
         && lk != 381361            // '[' ';' '+'
         && lk != 384433            // '[' 'f32' '+'
         && lk != 384561            // '[' 'f64' '+'
         && lk != 384945            // '[' 'i32' '+'
         && lk != 385073            // '[' 'i64' '+'
         && lk != 397745            // '[' ';' '++'
         && lk != 400817            // '[' 'f32' '++'
         && lk != 400945            // '[' 'f64' '++'
         && lk != 401329            // '[' 'i32' '++'
         && lk != 401457            // '[' 'i64' '++'
         && lk != 432433            // '[' ']' ','
         && lk != 446897            // '[' ';' '-'
         && lk != 449969            // '[' 'f32' '-'
         && lk != 450097            // '[' 'f64' '-'
         && lk != 450481            // '[' 'i32' '-'
         && lk != 450609            // '[' 'i64' '-'
         && lk != 463281            // '[' ';' '--'
         && lk != 466353            // '[' 'f32' '--'
         && lk != 466481            // '[' 'f64' '--'
         && lk != 466865            // '[' 'i32' '--'
         && lk != 466993            // '[' 'i64' '--'
         && lk != 547121            // '[' ']' ':'
         && lk != 573873            // '[' Identifier ';'
         && lk != 574001            // '[' Character ';'
         && lk != 574129            // '[' String ';'
         && lk != 574257            // '[' Integer ';'
         && lk != 574385            // '[' Real ';'
         && lk != 574513            // '[' Comment ';'
         && lk != 577969            // '[' ';' ';'
         && lk != 580273            // '[' 'break' ';'
         && lk != 580529            // '[' 'continue' ';'
         && lk != 581041            // '[' 'f32' ';'
         && lk != 581169            // '[' 'f64' ';'
         && lk != 581553            // '[' 'i32' ';'
         && lk != 581681            // '[' 'i64' ';'
         && lk != 807345            // '[' ';' '['
         && lk != 810417            // '[' 'f32' '['
         && lk != 810545            // '[' 'f64' '['
         && lk != 810929            // '[' 'i32' '['
         && lk != 811057            // '[' 'i64' '['
         && lk != 825649            // '[' ']' ']'
         && lk != 872881            // '[' ';' 'break'
         && lk != 875953            // '[' 'f32' 'break'
         && lk != 876081            // '[' 'f64' 'break'
         && lk != 876465            // '[' 'i32' 'break'
         && lk != 876593            // '[' 'i64' 'break'
         && lk != 905649            // '[' ';' 'continue'
         && lk != 908721            // '[' 'f32' 'continue'
         && lk != 908849            // '[' 'f64' 'continue'
         && lk != 909233            // '[' 'i32' 'continue'
         && lk != 909361            // '[' 'i64' 'continue'
         && lk != 938417            // '[' ';' 'do'
         && lk != 941489            // '[' 'f32' 'do'
         && lk != 941617            // '[' 'f64' 'do'
         && lk != 942001            // '[' 'i32' 'do'
         && lk != 942129            // '[' 'i64' 'do'
         && lk != 956721            // '[' ']' 'else'
         && lk != 971185            // '[' ';' 'f32'
         && lk != 974257            // '[' 'f32' 'f32'
         && lk != 974385            // '[' 'f64' 'f32'
         && lk != 974769            // '[' 'i32' 'f32'
         && lk != 974897            // '[' 'i64' 'f32'
         && lk != 987569            // '[' ';' 'f64'
         && lk != 990641            // '[' 'f32' 'f64'
         && lk != 990769            // '[' 'f64' 'f64'
         && lk != 991153            // '[' 'i32' 'f64'
         && lk != 991281            // '[' 'i64' 'f64'
         && lk != 1003953           // '[' ';' 'for'
         && lk != 1007025           // '[' 'f32' 'for'
         && lk != 1007153           // '[' 'f64' 'for'
         && lk != 1007537           // '[' 'i32' 'for'
         && lk != 1007665           // '[' 'i64' 'for'
         && lk != 1020337           // '[' ';' 'foreach'
         && lk != 1023409           // '[' 'f32' 'foreach'
         && lk != 1023537           // '[' 'f64' 'foreach'
         && lk != 1023921           // '[' 'i32' 'foreach'
         && lk != 1024049           // '[' 'i64' 'foreach'
         && lk != 1036721           // '[' ';' 'i32'
         && lk != 1039793           // '[' 'f32' 'i32'
         && lk != 1039921           // '[' 'f64' 'i32'
         && lk != 1040305           // '[' 'i32' 'i32'
         && lk != 1040433           // '[' 'i64' 'i32'
         && lk != 1053105           // '[' ';' 'i64'
         && lk != 1056177           // '[' 'f32' 'i64'
         && lk != 1056305           // '[' 'f64' 'i64'
         && lk != 1056689           // '[' 'i32' 'i64'
         && lk != 1056817           // '[' 'i64' 'i64'
         && lk != 1069489           // '[' ';' 'if'
         && lk != 1072561           // '[' 'f32' 'if'
         && lk != 1072689           // '[' 'f64' 'if'
         && lk != 1073073           // '[' 'i32' 'if'
         && lk != 1073201           // '[' 'i64' 'if'
         && lk != 1085873           // '[' ';' 'return'
         && lk != 1088945           // '[' 'f32' 'return'
         && lk != 1089073           // '[' 'f64' 'return'
         && lk != 1089457           // '[' 'i32' 'return'
         && lk != 1089585           // '[' 'i64' 'return'
         && lk != 1102257           // '[' ';' 'switch'
         && lk != 1105329           // '[' 'f32' 'switch'
         && lk != 1105457           // '[' 'f64' 'switch'
         && lk != 1105841           // '[' 'i32' 'switch'
         && lk != 1105969           // '[' 'i64' 'switch'
         && lk != 1118641           // '[' ';' 'while'
         && lk != 1121713           // '[' 'f32' 'while'
         && lk != 1121841           // '[' 'f64' 'while'
         && lk != 1122225           // '[' 'i32' 'while'
         && lk != 1122353           // '[' 'i64' 'while'
         && lk != 1135025           // '[' ';' '{'
         && lk != 1138097           // '[' 'f32' '{'
         && lk != 1138225           // '[' 'f64' '{'
         && lk != 1138609           // '[' 'i32' '{'
         && lk != 1138737           // '[' 'i64' '{'
         && lk != 1216945           // '[' ';' '~'
         && lk != 1220017           // '[' 'f32' '~'
         && lk != 1220145           // '[' 'f64' '~'
         && lk != 1220529           // '[' 'i32' '~'
         && lk != 1220657)          // '[' 'i64' '~'
        {
          lk = memoized(9, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(49);         // '['
              lookahead1W(24);      // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
              if (l1 != 50)         // ']'
              {
                try_Arguments();
              }
              consumeT(50);         // ']'
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
            memoize(9, e0, lk);
          }
        }
        if (lk == -2
         || lk == 1                 // END
         || lk == 3                 // Identifier
         || lk == 4                 // Character
         || lk == 5                 // String
         || lk == 6                 // Integer
         || lk == 7                 // Real
         || lk == 8                 // Comment
         || lk == 11                // '!'
         || lk == 12                // '!='
         || lk == 13                // '%'
         || lk == 14                // '%='
         || lk == 15                // '&'
         || lk == 16                // '&&'
         || lk == 17                // '&='
         || lk == 18                // '('
         || lk == 19                // ')'
         || lk == 20                // '*'
         || lk == 21                // '**'
         || lk == 22                // '*='
         || lk == 23                // '+'
         || lk == 24                // '++'
         || lk == 25                // '+='
         || lk == 26                // ','
         || lk == 27                // '-'
         || lk == 28                // '--'
         || lk == 29                // '-='
         || lk == 31                // '/'
         || lk == 32                // '/='
         || lk == 33                // ':'
         || lk == 34                // ':='
         || lk == 35                // ';'
         || lk == 36                // '<'
         || lk == 37                // '<<'
         || lk == 38                // '<<='
         || lk == 39                // '<='
         || lk == 40                // '='
         || lk == 41                // '=='
         || lk == 43                // '>'
         || lk == 44                // '>='
         || lk == 45                // '>>'
         || lk == 46                // '>>='
         || lk == 47                // '?'
         || lk == 48                // '?='
         || lk == 50                // ']'
         || lk == 51                // '^'
         || lk == 52                // '^='
         || lk == 53                // 'break'
         || lk == 54                // 'case'
         || lk == 55                // 'continue'
         || lk == 56                // 'default'
         || lk == 57                // 'do'
         || lk == 58                // 'else'
         || lk == 59                // 'f32'
         || lk == 60                // 'f64'
         || lk == 61                // 'for'
         || lk == 62                // 'foreach'
         || lk == 63                // 'i32'
         || lk == 64                // 'i64'
         || lk == 65                // 'if'
         || lk == 66                // 'return'
         || lk == 67                // 'switch'
         || lk == 68                // 'while'
         || lk == 69                // '{'
         || lk == 70                // '|'
         || lk == 71                // '|='
         || lk == 72                // '||'
         || lk == 73                // '}'
         || lk == 74                // '~'
         || lk == 53681             // '[' ';' Identifier
         || lk == 70065             // '[' ';' Character
         || lk == 86449             // '[' ';' String
         || lk == 102833            // '[' ';' Integer
         || lk == 119217            // '[' ';' Real
         || lk == 135601            // '[' ';' Comment
         || lk == 184753            // '[' ';' '!'
         || lk == 299441            // '[' ';' '('
         || lk == 381361            // '[' ';' '+'
         || lk == 397745            // '[' ';' '++'
         || lk == 446897            // '[' ';' '-'
         || lk == 463281            // '[' ';' '--'
         || lk == 573873            // '[' Identifier ';'
         || lk == 574001            // '[' Character ';'
         || lk == 574129            // '[' String ';'
         || lk == 574257            // '[' Integer ';'
         || lk == 574385            // '[' Real ';'
         || lk == 574513            // '[' Comment ';'
         || lk == 577969            // '[' ';' ';'
         || lk == 580273            // '[' 'break' ';'
         || lk == 580529            // '[' 'continue' ';'
         || lk == 807345            // '[' ';' '['
         || lk == 872881            // '[' ';' 'break'
         || lk == 905649            // '[' ';' 'continue'
         || lk == 938417            // '[' ';' 'do'
         || lk == 971185            // '[' ';' 'f32'
         || lk == 987569            // '[' ';' 'f64'
         || lk == 1003953           // '[' ';' 'for'
         || lk == 1020337           // '[' ';' 'foreach'
         || lk == 1036721           // '[' ';' 'i32'
         || lk == 1053105           // '[' ';' 'i64'
         || lk == 1069489           // '[' ';' 'if'
         || lk == 1085873           // '[' ';' 'return'
         || lk == 1102257           // '[' ';' 'switch'
         || lk == 1118641           // '[' ';' 'while'
         || lk == 1135025           // '[' ';' '{'
         || lk == 1216945)          // '[' ';' '~'
        {
          break;
        }
        consume(49);                // '['
        lookahead1W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        if (l1 != 50)               // ']'
        {
          whitespace();
          parse_Arguments();
        }
        consume(50);                // ']'
      }
    }
    eventHandler.endNonterminal("Member", e0);
  }

  function try_Member()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(43);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        break;
      case 3843:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 51459                 // Identifier '(' Identifier
     || lk == 52995                 // Identifier '.' Identifier
     || lk == 67843                 // Identifier '(' Character
     || lk == 84227                 // Identifier '(' String
     || lk == 100611                // Identifier '(' Integer
     || lk == 116995                // Identifier '(' Real
     || lk == 133379                // Identifier '(' Comment
     || lk == 182531                // Identifier '(' '!'
     || lk == 297219                // Identifier '(' '('
     || lk == 379139                // Identifier '(' '+'
     || lk == 395523                // Identifier '(' '++'
     || lk == 444675                // Identifier '(' '-'
     || lk == 461059                // Identifier '(' '--'
     || lk == 575747                // Identifier '(' ';'
     || lk == 805123                // Identifier '(' '['
     || lk == 870659                // Identifier '(' 'break'
     || lk == 903427                // Identifier '(' 'continue'
     || lk == 936195                // Identifier '(' 'do'
     || lk == 968963                // Identifier '(' 'f32'
     || lk == 985347                // Identifier '(' 'f64'
     || lk == 1001731               // Identifier '(' 'for'
     || lk == 1018115               // Identifier '(' 'foreach'
     || lk == 1034499               // Identifier '(' 'i32'
     || lk == 1050883               // Identifier '(' 'i64'
     || lk == 1067267               // Identifier '(' 'if'
     || lk == 1083651               // Identifier '(' 'return'
     || lk == 1100035               // Identifier '(' 'switch'
     || lk == 1116419               // Identifier '(' 'while'
     || lk == 1132803               // Identifier '(' '{'
     || lk == 1214723)              // Identifier '(' '~'
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
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(14);        // WhiteSpace^token | '(' | '.'
            if (l1 != 30)           // '.'
            {
              break;
            }
            consumeT(30);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(18);             // '('
          lookahead1W(23);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          if (l1 != 19)             // ')'
          {
            try_Arguments();
          }
          consumeT(19);             // ')'
          memoize(8, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(8, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
    case 313603:                    // Identifier '(' ')'
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(14);            // WhiteSpace^token | '(' | '.'
        if (l1 != 30)               // '.'
        {
          break;
        }
        consumeT(30);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(18);                 // '('
      lookahead1W(23);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
      if (l1 != 19)                 // ')'
      {
        try_Arguments();
      }
      consumeT(19);                 // ')'
      break;
    case -3:
      break;
    default:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(43);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        if (l1 != 30)               // '.'
        {
          break;
        }
        consumeT(30);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      for (;;)
      {
        lookahead1W(42);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 49:                    // '['
          lookahead2W(24);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
          switch (lk)
          {
          case 433:                 // '[' Identifier
            lookahead3W(38);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4529:                // '[' ';'
            lookahead3W(27);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
            break;
          case 6321:                // '[' '['
            lookahead3W(24);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
            break;
          case 6449:                // '[' ']'
            lookahead3W(42);        // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 8881:                // '[' '{'
            lookahead3W(25);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '}' | '~'
            break;
          case 1073:                // '[' Comment
          case 6833:                // '[' 'break'
          case 7089:                // '[' 'continue'
            lookahead3W(18);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 561:                 // '[' Character
          case 689:                 // '[' String
          case 817:                 // '[' Integer
          case 945:                 // '[' Real
            lookahead3W(34);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | ']' |
                                    // '^' | '^=' | '|' | '|=' | '||'
            break;
          case 7857:                // '[' 'for'
          case 7985:                // '[' 'foreach'
          case 8369:                // '[' 'if'
          case 8625:                // '[' 'switch'
          case 8753:                // '[' 'while'
            lookahead3W(2);         // WhiteSpace^token | '('
            break;
          case 1457:                // '[' '!'
          case 2993:                // '[' '+'
          case 3121:                // '[' '++'
          case 3505:                // '[' '-'
          case 3633:                // '[' '--'
          case 9521:                // '[' '~'
            lookahead3W(19);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
            break;
          case 2353:                // '[' '('
          case 7345:                // '[' 'do'
          case 7601:                // '[' 'f32'
          case 7729:                // '[' 'f64'
          case 8113:                // '[' 'i32'
          case 8241:                // '[' 'i64'
          case 8497:                // '[' 'return'
            lookahead3W(21);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
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
         && lk != 8                 // Comment
         && lk != 11                // '!'
         && lk != 12                // '!='
         && lk != 13                // '%'
         && lk != 14                // '%='
         && lk != 15                // '&'
         && lk != 16                // '&&'
         && lk != 17                // '&='
         && lk != 18                // '('
         && lk != 19                // ')'
         && lk != 20                // '*'
         && lk != 21                // '**'
         && lk != 22                // '*='
         && lk != 23                // '+'
         && lk != 24                // '++'
         && lk != 25                // '+='
         && lk != 26                // ','
         && lk != 27                // '-'
         && lk != 28                // '--'
         && lk != 29                // '-='
         && lk != 31                // '/'
         && lk != 32                // '/='
         && lk != 33                // ':'
         && lk != 34                // ':='
         && lk != 35                // ';'
         && lk != 36                // '<'
         && lk != 37                // '<<'
         && lk != 38                // '<<='
         && lk != 39                // '<='
         && lk != 40                // '='
         && lk != 41                // '=='
         && lk != 43                // '>'
         && lk != 44                // '>='
         && lk != 45                // '>>'
         && lk != 46                // '>>='
         && lk != 47                // '?'
         && lk != 48                // '?='
         && lk != 50                // ']'
         && lk != 51                // '^'
         && lk != 52                // '^='
         && lk != 53                // 'break'
         && lk != 54                // 'case'
         && lk != 55                // 'continue'
         && lk != 56                // 'default'
         && lk != 57                // 'do'
         && lk != 58                // 'else'
         && lk != 59                // 'f32'
         && lk != 60                // 'f64'
         && lk != 61                // 'for'
         && lk != 62                // 'foreach'
         && lk != 63                // 'i32'
         && lk != 64                // 'i64'
         && lk != 65                // 'if'
         && lk != 66                // 'return'
         && lk != 67                // 'switch'
         && lk != 68                // 'while'
         && lk != 69                // '{'
         && lk != 70                // '|'
         && lk != 71                // '|='
         && lk != 72                // '||'
         && lk != 73                // '}'
         && lk != 74                // '~'
         && lk != 53681             // '[' ';' Identifier
         && lk != 70065             // '[' ';' Character
         && lk != 73137             // '[' 'f32' Character
         && lk != 73265             // '[' 'f64' Character
         && lk != 73649             // '[' 'i32' Character
         && lk != 73777             // '[' 'i64' Character
         && lk != 86449             // '[' ';' String
         && lk != 89521             // '[' 'f32' String
         && lk != 89649             // '[' 'f64' String
         && lk != 90033             // '[' 'i32' String
         && lk != 90161             // '[' 'i64' String
         && lk != 102833            // '[' ';' Integer
         && lk != 105905            // '[' 'f32' Integer
         && lk != 106033            // '[' 'f64' Integer
         && lk != 106417            // '[' 'i32' Integer
         && lk != 106545            // '[' 'i64' Integer
         && lk != 119217            // '[' ';' Real
         && lk != 122289            // '[' 'f32' Real
         && lk != 122417            // '[' 'f64' Real
         && lk != 122801            // '[' 'i32' Real
         && lk != 122929            // '[' 'i64' Real
         && lk != 135601            // '[' ';' Comment
         && lk != 138673            // '[' 'f32' Comment
         && lk != 138801            // '[' 'f64' Comment
         && lk != 139185            // '[' 'i32' Comment
         && lk != 139313            // '[' 'i64' Comment
         && lk != 184753            // '[' ';' '!'
         && lk != 187825            // '[' 'f32' '!'
         && lk != 187953            // '[' 'f64' '!'
         && lk != 188337            // '[' 'i32' '!'
         && lk != 188465            // '[' 'i64' '!'
         && lk != 299441            // '[' ';' '('
         && lk != 302513            // '[' 'f32' '('
         && lk != 302641            // '[' 'f64' '('
         && lk != 303025            // '[' 'i32' '('
         && lk != 303153            // '[' 'i64' '('
         && lk != 317745            // '[' ']' ')'
         && lk != 381361            // '[' ';' '+'
         && lk != 384433            // '[' 'f32' '+'
         && lk != 384561            // '[' 'f64' '+'
         && lk != 384945            // '[' 'i32' '+'
         && lk != 385073            // '[' 'i64' '+'
         && lk != 397745            // '[' ';' '++'
         && lk != 400817            // '[' 'f32' '++'
         && lk != 400945            // '[' 'f64' '++'
         && lk != 401329            // '[' 'i32' '++'
         && lk != 401457            // '[' 'i64' '++'
         && lk != 432433            // '[' ']' ','
         && lk != 446897            // '[' ';' '-'
         && lk != 449969            // '[' 'f32' '-'
         && lk != 450097            // '[' 'f64' '-'
         && lk != 450481            // '[' 'i32' '-'
         && lk != 450609            // '[' 'i64' '-'
         && lk != 463281            // '[' ';' '--'
         && lk != 466353            // '[' 'f32' '--'
         && lk != 466481            // '[' 'f64' '--'
         && lk != 466865            // '[' 'i32' '--'
         && lk != 466993            // '[' 'i64' '--'
         && lk != 547121            // '[' ']' ':'
         && lk != 573873            // '[' Identifier ';'
         && lk != 574001            // '[' Character ';'
         && lk != 574129            // '[' String ';'
         && lk != 574257            // '[' Integer ';'
         && lk != 574385            // '[' Real ';'
         && lk != 574513            // '[' Comment ';'
         && lk != 577969            // '[' ';' ';'
         && lk != 580273            // '[' 'break' ';'
         && lk != 580529            // '[' 'continue' ';'
         && lk != 581041            // '[' 'f32' ';'
         && lk != 581169            // '[' 'f64' ';'
         && lk != 581553            // '[' 'i32' ';'
         && lk != 581681            // '[' 'i64' ';'
         && lk != 807345            // '[' ';' '['
         && lk != 810417            // '[' 'f32' '['
         && lk != 810545            // '[' 'f64' '['
         && lk != 810929            // '[' 'i32' '['
         && lk != 811057            // '[' 'i64' '['
         && lk != 825649            // '[' ']' ']'
         && lk != 872881            // '[' ';' 'break'
         && lk != 875953            // '[' 'f32' 'break'
         && lk != 876081            // '[' 'f64' 'break'
         && lk != 876465            // '[' 'i32' 'break'
         && lk != 876593            // '[' 'i64' 'break'
         && lk != 905649            // '[' ';' 'continue'
         && lk != 908721            // '[' 'f32' 'continue'
         && lk != 908849            // '[' 'f64' 'continue'
         && lk != 909233            // '[' 'i32' 'continue'
         && lk != 909361            // '[' 'i64' 'continue'
         && lk != 938417            // '[' ';' 'do'
         && lk != 941489            // '[' 'f32' 'do'
         && lk != 941617            // '[' 'f64' 'do'
         && lk != 942001            // '[' 'i32' 'do'
         && lk != 942129            // '[' 'i64' 'do'
         && lk != 956721            // '[' ']' 'else'
         && lk != 971185            // '[' ';' 'f32'
         && lk != 974257            // '[' 'f32' 'f32'
         && lk != 974385            // '[' 'f64' 'f32'
         && lk != 974769            // '[' 'i32' 'f32'
         && lk != 974897            // '[' 'i64' 'f32'
         && lk != 987569            // '[' ';' 'f64'
         && lk != 990641            // '[' 'f32' 'f64'
         && lk != 990769            // '[' 'f64' 'f64'
         && lk != 991153            // '[' 'i32' 'f64'
         && lk != 991281            // '[' 'i64' 'f64'
         && lk != 1003953           // '[' ';' 'for'
         && lk != 1007025           // '[' 'f32' 'for'
         && lk != 1007153           // '[' 'f64' 'for'
         && lk != 1007537           // '[' 'i32' 'for'
         && lk != 1007665           // '[' 'i64' 'for'
         && lk != 1020337           // '[' ';' 'foreach'
         && lk != 1023409           // '[' 'f32' 'foreach'
         && lk != 1023537           // '[' 'f64' 'foreach'
         && lk != 1023921           // '[' 'i32' 'foreach'
         && lk != 1024049           // '[' 'i64' 'foreach'
         && lk != 1036721           // '[' ';' 'i32'
         && lk != 1039793           // '[' 'f32' 'i32'
         && lk != 1039921           // '[' 'f64' 'i32'
         && lk != 1040305           // '[' 'i32' 'i32'
         && lk != 1040433           // '[' 'i64' 'i32'
         && lk != 1053105           // '[' ';' 'i64'
         && lk != 1056177           // '[' 'f32' 'i64'
         && lk != 1056305           // '[' 'f64' 'i64'
         && lk != 1056689           // '[' 'i32' 'i64'
         && lk != 1056817           // '[' 'i64' 'i64'
         && lk != 1069489           // '[' ';' 'if'
         && lk != 1072561           // '[' 'f32' 'if'
         && lk != 1072689           // '[' 'f64' 'if'
         && lk != 1073073           // '[' 'i32' 'if'
         && lk != 1073201           // '[' 'i64' 'if'
         && lk != 1085873           // '[' ';' 'return'
         && lk != 1088945           // '[' 'f32' 'return'
         && lk != 1089073           // '[' 'f64' 'return'
         && lk != 1089457           // '[' 'i32' 'return'
         && lk != 1089585           // '[' 'i64' 'return'
         && lk != 1102257           // '[' ';' 'switch'
         && lk != 1105329           // '[' 'f32' 'switch'
         && lk != 1105457           // '[' 'f64' 'switch'
         && lk != 1105841           // '[' 'i32' 'switch'
         && lk != 1105969           // '[' 'i64' 'switch'
         && lk != 1118641           // '[' ';' 'while'
         && lk != 1121713           // '[' 'f32' 'while'
         && lk != 1121841           // '[' 'f64' 'while'
         && lk != 1122225           // '[' 'i32' 'while'
         && lk != 1122353           // '[' 'i64' 'while'
         && lk != 1135025           // '[' ';' '{'
         && lk != 1138097           // '[' 'f32' '{'
         && lk != 1138225           // '[' 'f64' '{'
         && lk != 1138609           // '[' 'i32' '{'
         && lk != 1138737           // '[' 'i64' '{'
         && lk != 1216945           // '[' ';' '~'
         && lk != 1220017           // '[' 'f32' '~'
         && lk != 1220145           // '[' 'f64' '~'
         && lk != 1220529           // '[' 'i32' '~'
         && lk != 1220657)          // '[' 'i64' '~'
        {
          lk = memoized(9, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(49);         // '['
              lookahead1W(24);      // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
              if (l1 != 50)         // ']'
              {
                try_Arguments();
              }
              consumeT(50);         // ']'
              memoize(9, e0B, -1);
              continue;
            }
            catch (p1B)
            {
              b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
              b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
              b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
              b3 = b3B; e3 = e3B; end = e3B; }}}
              memoize(9, e0B, -2);
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
         || lk == 8                 // Comment
         || lk == 11                // '!'
         || lk == 12                // '!='
         || lk == 13                // '%'
         || lk == 14                // '%='
         || lk == 15                // '&'
         || lk == 16                // '&&'
         || lk == 17                // '&='
         || lk == 18                // '('
         || lk == 19                // ')'
         || lk == 20                // '*'
         || lk == 21                // '**'
         || lk == 22                // '*='
         || lk == 23                // '+'
         || lk == 24                // '++'
         || lk == 25                // '+='
         || lk == 26                // ','
         || lk == 27                // '-'
         || lk == 28                // '--'
         || lk == 29                // '-='
         || lk == 31                // '/'
         || lk == 32                // '/='
         || lk == 33                // ':'
         || lk == 34                // ':='
         || lk == 35                // ';'
         || lk == 36                // '<'
         || lk == 37                // '<<'
         || lk == 38                // '<<='
         || lk == 39                // '<='
         || lk == 40                // '='
         || lk == 41                // '=='
         || lk == 43                // '>'
         || lk == 44                // '>='
         || lk == 45                // '>>'
         || lk == 46                // '>>='
         || lk == 47                // '?'
         || lk == 48                // '?='
         || lk == 50                // ']'
         || lk == 51                // '^'
         || lk == 52                // '^='
         || lk == 53                // 'break'
         || lk == 54                // 'case'
         || lk == 55                // 'continue'
         || lk == 56                // 'default'
         || lk == 57                // 'do'
         || lk == 58                // 'else'
         || lk == 59                // 'f32'
         || lk == 60                // 'f64'
         || lk == 61                // 'for'
         || lk == 62                // 'foreach'
         || lk == 63                // 'i32'
         || lk == 64                // 'i64'
         || lk == 65                // 'if'
         || lk == 66                // 'return'
         || lk == 67                // 'switch'
         || lk == 68                // 'while'
         || lk == 69                // '{'
         || lk == 70                // '|'
         || lk == 71                // '|='
         || lk == 72                // '||'
         || lk == 73                // '}'
         || lk == 74                // '~'
         || lk == 53681             // '[' ';' Identifier
         || lk == 70065             // '[' ';' Character
         || lk == 86449             // '[' ';' String
         || lk == 102833            // '[' ';' Integer
         || lk == 119217            // '[' ';' Real
         || lk == 135601            // '[' ';' Comment
         || lk == 184753            // '[' ';' '!'
         || lk == 299441            // '[' ';' '('
         || lk == 381361            // '[' ';' '+'
         || lk == 397745            // '[' ';' '++'
         || lk == 446897            // '[' ';' '-'
         || lk == 463281            // '[' ';' '--'
         || lk == 573873            // '[' Identifier ';'
         || lk == 574001            // '[' Character ';'
         || lk == 574129            // '[' String ';'
         || lk == 574257            // '[' Integer ';'
         || lk == 574385            // '[' Real ';'
         || lk == 574513            // '[' Comment ';'
         || lk == 577969            // '[' ';' ';'
         || lk == 580273            // '[' 'break' ';'
         || lk == 580529            // '[' 'continue' ';'
         || lk == 807345            // '[' ';' '['
         || lk == 872881            // '[' ';' 'break'
         || lk == 905649            // '[' ';' 'continue'
         || lk == 938417            // '[' ';' 'do'
         || lk == 971185            // '[' ';' 'f32'
         || lk == 987569            // '[' ';' 'f64'
         || lk == 1003953           // '[' ';' 'for'
         || lk == 1020337           // '[' ';' 'foreach'
         || lk == 1036721           // '[' ';' 'i32'
         || lk == 1053105           // '[' ';' 'i64'
         || lk == 1069489           // '[' ';' 'if'
         || lk == 1085873           // '[' ';' 'return'
         || lk == 1102257           // '[' ';' 'switch'
         || lk == 1118641           // '[' ';' 'while'
         || lk == 1135025           // '[' ';' '{'
         || lk == 1216945)          // '[' ';' '~'
        {
          break;
        }
        consumeT(49);               // '['
        lookahead1W(24);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
        if (l1 != 50)               // ']'
        {
          try_Arguments();
        }
        consumeT(50);               // ']'
      }
    }
  }

  function parse_Array()
  {
    eventHandler.startNonterminal("Array", e0);
    consume(69);                    // '{'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Element();
    for (;;)
    {
      lookahead1W(16);              // WhiteSpace^token | ',' | '}'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consume(26);                  // ','
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(73);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(69);                   // '{'
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Element();
    for (;;)
    {
      lookahead1W(16);              // WhiteSpace^token | ',' | '}'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consumeT(26);                 // ','
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Element();
    }
    consumeT(73);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(49);                    // '['
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
    switch (l1)
    {
    case 35:                        // ';'
      lookahead2W(27);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4515:                    // ';' ';'
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 577955)               // ';' ';' ';'
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
        memoize(10, e0, lk);
      }
    }
    if (lk != -2
     && lk != 50                    // ']'
     && lk != 419                   // ';' Identifier
     && lk != 547                   // ';' Character
     && lk != 675                   // ';' String
     && lk != 803                   // ';' Integer
     && lk != 931                   // ';' Real
     && lk != 1059                  // ';' Comment
     && lk != 1443                  // ';' '!'
     && lk != 2339                  // ';' '('
     && lk != 2979                  // ';' '+'
     && lk != 3107                  // ';' '++'
     && lk != 3491                  // ';' '-'
     && lk != 3619                  // ';' '--'
     && lk != 6307                  // ';' '['
     && lk != 6819                  // ';' 'break'
     && lk != 7075                  // ';' 'continue'
     && lk != 7331                  // ';' 'do'
     && lk != 7587                  // ';' 'f32'
     && lk != 7715                  // ';' 'f64'
     && lk != 7843                  // ';' 'for'
     && lk != 7971                  // ';' 'foreach'
     && lk != 8099                  // ';' 'i32'
     && lk != 8227                  // ';' 'i64'
     && lk != 8355                  // ';' 'if'
     && lk != 8483                  // ';' 'return'
     && lk != 8611                  // ';' 'switch'
     && lk != 8739                  // ';' 'while'
     && lk != 8867                  // ';' '{'
     && lk != 9507                  // ';' '~'
     && lk != 430499                // ';' ';' ','
     && lk != 823715)               // ';' ';' ']'
    {
      whitespace();
      parse_Row();
    }
    for (;;)
    {
      if (l1 != 35)                 // ';'
      {
        break;
      }
      consume(35);                  // ';'
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Row();
    }
    consume(50);                    // ']'
    eventHandler.endNonterminal("Matrix", e0);
  }

  function try_Matrix()
  {
    consumeT(49);                   // '['
    lookahead1W(24);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '~'
    switch (l1)
    {
    case 35:                        // ';'
      lookahead2W(27);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4515:                    // ';' ';'
        lookahead3W(27);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 577955)               // ';' ';' ';'
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
          try_Row();
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
     && lk != 50                    // ']'
     && lk != 419                   // ';' Identifier
     && lk != 547                   // ';' Character
     && lk != 675                   // ';' String
     && lk != 803                   // ';' Integer
     && lk != 931                   // ';' Real
     && lk != 1059                  // ';' Comment
     && lk != 1443                  // ';' '!'
     && lk != 2339                  // ';' '('
     && lk != 2979                  // ';' '+'
     && lk != 3107                  // ';' '++'
     && lk != 3491                  // ';' '-'
     && lk != 3619                  // ';' '--'
     && lk != 6307                  // ';' '['
     && lk != 6819                  // ';' 'break'
     && lk != 7075                  // ';' 'continue'
     && lk != 7331                  // ';' 'do'
     && lk != 7587                  // ';' 'f32'
     && lk != 7715                  // ';' 'f64'
     && lk != 7843                  // ';' 'for'
     && lk != 7971                  // ';' 'foreach'
     && lk != 8099                  // ';' 'i32'
     && lk != 8227                  // ';' 'i64'
     && lk != 8355                  // ';' 'if'
     && lk != 8483                  // ';' 'return'
     && lk != 8611                  // ';' 'switch'
     && lk != 8739                  // ';' 'while'
     && lk != 8867                  // ';' '{'
     && lk != 9507                  // ';' '~'
     && lk != 430499                // ';' ';' ','
     && lk != 823715)               // ';' ';' ']'
    {
      try_Row();
    }
    for (;;)
    {
      if (l1 != 35)                 // ';'
      {
        break;
      }
      consumeT(35);                 // ';'
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
      try_Row();
    }
    consumeT(50);                   // ']'
  }

  function parse_Element()
  {
    eventHandler.startNonterminal("Element", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(37);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(33);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4227                  // Identifier ':'
     || lk == 4229)                 // String ':'
    {
      whitespace();
      parse_Key();
      lookahead1W(6);               // WhiteSpace^token | ':'
      consume(33);                  // ':'
    }
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Element", e0);
  }

  function try_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(37);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(33);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4227                  // Identifier ':'
     || lk == 4229)                 // String ':'
    {
      try_Key();
      lookahead1W(6);               // WhiteSpace^token | ':'
      consumeT(33);                 // ':'
    }
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
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
      lookahead1W(18);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consume(26);                  // ','
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
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
      lookahead1W(18);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consumeT(26);                 // ','
      lookahead1W(21);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
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
    consume(18);                    // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(18);                   // '('
    lookahead1W(21);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'return' | 'switch' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
  }

  function parse_Value()
  {
    eventHandler.startNonterminal("Value", e0);
    switch (l1)
    {
    case 6:                         // Integer
      consume(6);                   // Integer
      break;
    case 7:                         // Real
      consume(7);                   // Real
      break;
    case 4:                         // Character
      consume(4);                   // Character
      break;
    case 5:                         // String
      consume(5);                   // String
      break;
    case 69:                        // '{'
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
    case 7:                         // Real
      consumeT(7);                  // Real
      break;
    case 4:                         // Character
      consumeT(4);                  // Character
      break;
    case 5:                         // String
      consumeT(5);                  // String
      break;
    case 69:                        // '{'
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
      if (code != 10)               // WhiteSpace^token
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
  for (var i = 0; i < 75; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 215 + s - 1;
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
  /*   0 */ 67, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6,
  /*  36 */ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32,
  /*  64 */ 33, 34, 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44,
  /*  95 */ 7, 33, 45, 46, 47, 48, 49, 50, 7, 51, 52, 7, 53, 54, 7, 55, 56, 39, 7, 57, 58, 59, 60, 7, 61, 62, 7, 7, 63,
  /* 124 */ 64, 65, 66, 33
];

MaiaScript.MAP1 =
[
  /*   0 */ 54, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  27 */ 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  54 */ 90, 122, 216, 154, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185,
  /*  76 */ 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 67, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1,
  /* 102 */ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  /* 136 */ 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32, 33, 45, 46, 47, 48, 49, 50, 7, 51,
  /* 163 */ 52, 7, 53, 54, 7, 55, 56, 39, 7, 57, 58, 59, 60, 7, 61, 62, 7, 7, 63, 64, 65, 66, 33, 33, 33, 33, 33, 33,
  /* 191 */ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34,
  /* 218 */ 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44, 7
];

MaiaScript.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 33, 33
];

MaiaScript.INITIAL =
[
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 534, 23, 24, 25, 538, 27, 28,
  /* 29 */ 29, 30, 31, 544, 33, 34, 35, 36, 37, 38, 39, 40, 41, 554, 555
];

MaiaScript.TRANSITION =
[
  /*    0 */ 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /*   18 */ 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /*   36 */ 2767, 2767, 2767, 2613, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /*   54 */ 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2176, 2176, 2176, 2176, 2176, 2180, 2767, 2613,
  /*   72 */ 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194,
  /*   90 */ 3541, 2767, 2767, 2767, 2767, 2767, 2176, 2176, 2176, 2176, 2176, 2180, 2767, 2767, 2767, 2767, 2767, 2767,
  /*  108 */ 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /*  126 */ 2767, 2767, 2767, 2767, 3060, 3064, 2202, 2208, 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767,
  /*  144 */ 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /*  162 */ 3540, 2568, 3361, 3817, 2767, 2318, 2439, 2767, 2767, 2767, 2767, 2219, 2770, 2767, 2767, 2257, 2768, 2767,
  /*  180 */ 2767, 2767, 2767, 2767, 2767, 2329, 2240, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2468, 2265, 2467, 2272,
  /*  198 */ 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767,
  /*  216 */ 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 3776, 3741,
  /*  234 */ 2767, 2560, 3741, 3359, 3085, 3741, 2823, 4070, 2768, 3741, 3742, 3388, 3741, 2765, 3742, 3769, 2566, 2767,
  /*  252 */ 2767, 2767, 2767, 2767, 2767, 2767, 2767, 4097, 2283, 2288, 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192,
  /*  270 */ 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767,
  /*  288 */ 2767, 2767, 2767, 4113, 2299, 2304, 2767, 2613, 2439, 2767, 2315, 2767, 2767, 2192, 2770, 2767, 2767, 2257,
  /*  306 */ 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 3564, 3567,
  /*  324 */ 3074, 2326, 2767, 2194, 2439, 2767, 2767, 2767, 2767, 2337, 2770, 2767, 2767, 2257, 2363, 2767, 2767, 3347,
  /*  342 */ 2767, 2767, 2767, 2916, 3541, 2767, 2767, 2767, 2767, 2767, 2376, 2490, 2493, 2371, 2494, 2393, 2767, 2613,
  /*  360 */ 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194,
  /*  378 */ 3541, 2767, 2767, 2767, 2767, 2767, 2410, 2767, 2412, 4178, 2420, 2421, 2767, 2613, 2439, 2767, 2767, 2767,
  /*  396 */ 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767,
  /*  414 */ 2767, 2767, 2767, 2767, 2767, 2184, 2429, 2434, 2767, 2613, 2975, 2767, 2447, 2769, 2767, 2192, 3331, 2767,
  /*  432 */ 2767, 2257, 2890, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2598, 2767,
  /*  450 */ 3996, 4000, 2459, 2464, 3465, 2613, 2439, 2767, 3263, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767,
  /*  468 */ 2767, 3838, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2487, 2476, 2482, 2487,
  /*  486 */ 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767,
  /*  504 */ 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2864, 2767, 3639, 3643, 2502, 2508, 2767, 2519, 2541, 2767,
  /*  522 */ 2451, 2451, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 3838, 2767, 2767, 2767, 2194, 3541, 2767,
  /*  540 */ 2767, 2767, 2767, 2767, 2767, 2511, 2767, 2767, 2554, 2576, 2767, 2613, 2593, 2767, 2767, 2767, 2767, 2587,
  /*  558 */ 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767,
  /*  576 */ 2611, 2767, 2932, 2621, 2629, 2635, 2767, 2613, 3004, 2767, 2767, 2437, 2767, 2192, 2770, 2767, 2767, 3925,
  /*  594 */ 3423, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2382, 2385,
  /*  612 */ 2379, 2648, 3743, 2613, 2735, 3741, 2767, 3314, 3741, 2728, 2660, 3741, 2823, 4070, 2674, 3741, 3742, 2682,
  /*  630 */ 3741, 2666, 3699, 2526, 3123, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2399, 2402, 2396, 2701, 3743, 2613,
  /*  648 */ 2735, 3741, 2767, 3314, 3741, 2728, 2660, 3741, 2823, 4070, 2713, 3741, 3742, 2721, 3741, 2741, 3699, 2526,
  /*  666 */ 2566, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2399, 2402, 2396, 2701, 3743, 2613, 2735, 3741, 2767, 3314,
  /*  684 */ 3186, 2728, 2660, 2749, 2823, 4070, 2713, 3741, 3742, 2721, 3741, 2741, 3699, 2526, 2566, 2767, 2767, 2767,
  /*  702 */ 2767, 2767, 2767, 2767, 2399, 2402, 2396, 2701, 2761, 2613, 2735, 2778, 2767, 3314, 3741, 2728, 2660, 3741,
  /*  720 */ 2823, 4070, 2713, 3741, 3742, 2721, 3741, 2741, 3699, 2526, 2566, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /*  738 */ 2399, 2402, 2396, 2701, 3743, 2613, 2735, 3741, 2767, 3314, 3185, 2728, 2660, 2789, 2823, 4070, 2713, 3741,
  /*  756 */ 3742, 2721, 3741, 2741, 3699, 2526, 2566, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2399, 2402, 2396, 2701,
  /*  774 */ 3743, 2613, 2735, 3741, 2767, 3314, 3741, 2728, 2660, 3741, 2823, 4070, 2713, 3741, 3742, 2721, 3741, 2232,
  /*  792 */ 3699, 2954, 3320, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2399, 2402, 2396, 2701, 2811, 2613, 2735, 2835,
  /*  810 */ 2767, 3314, 3741, 2728, 2660, 3741, 2823, 4070, 2713, 3741, 3742, 2721, 3741, 2741, 3699, 2526, 2566, 2767,
  /*  828 */ 2767, 2767, 2767, 2767, 2767, 2767, 2399, 2402, 2396, 2701, 3743, 2613, 2735, 3741, 2767, 3314, 3741, 3942,
  /*  846 */ 2660, 3741, 2823, 4070, 2846, 3741, 3742, 2721, 3741, 2741, 3699, 2526, 2566, 2767, 2767, 2767, 2767, 2767,
  /*  864 */ 2579, 2767, 2767, 2906, 2854, 2861, 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257,
  /*  882 */ 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2889, 2882, 2877,
  /*  900 */ 2872, 2887, 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767,
  /*  918 */ 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 3022, 2898, 2903, 2767, 2613,
  /*  936 */ 2439, 2767, 3499, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194,
  /*  954 */ 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2914, 2767, 3287, 2924, 2929, 2767, 2940, 2439, 2767, 2989, 2997,
  /*  972 */ 2767, 2192, 2770, 2767, 3018, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767,
  /*  990 */ 2767, 2767, 2767, 2767, 2767, 3690, 3030, 3035, 2767, 3046, 2439, 2767, 2767, 3072, 2767, 2192, 2770, 2767,
  /* 1008 */ 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 3082,
  /* 1026 */ 2767, 4125, 3093, 3098, 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767,
  /* 1044 */ 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /* 1062 */ 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767,
  /* 1080 */ 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 3776, 3741,
  /* 1098 */ 2767, 2560, 3741, 3359, 2226, 3741, 2823, 4070, 3109, 3741, 3742, 3117, 3741, 3782, 3699, 2526, 2566, 2767,
  /* 1116 */ 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 3776, 3741, 2767, 2560, 3741, 3359,
  /* 1134 */ 2226, 3741, 2823, 4070, 3109, 3741, 3742, 3117, 3741, 3782, 3914, 3053, 3989, 2767, 2767, 2767, 2767, 2767,
  /* 1152 */ 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 3776, 3741, 2767, 2560, 3741, 3359, 2226, 3741, 2823, 4070,
  /* 1170 */ 3131, 3741, 3742, 3117, 3741, 3782, 3699, 2526, 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744,
  /* 1188 */ 3389, 3181, 3743, 2613, 3139, 3741, 2767, 2560, 3741, 3359, 3153, 3741, 2823, 4070, 3109, 3741, 3742, 3117,
  /* 1206 */ 3741, 3782, 3699, 2526, 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613,
  /* 1224 */ 3171, 3741, 2767, 2560, 3741, 3359, 3194, 3741, 2823, 4070, 2768, 3741, 3742, 3388, 3741, 2765, 3742, 3769,
  /* 1242 */ 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 3776, 3741, 2767, 2560,
  /* 1260 */ 3741, 3359, 3085, 3741, 2823, 4070, 3754, 3741, 3742, 3388, 3741, 2765, 3742, 3769, 2566, 2767, 2767, 2767,
  /* 1278 */ 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 3211, 3741, 2767, 2560, 3741, 2968, 3085, 3741,
  /* 1296 */ 2823, 4070, 2981, 3741, 3742, 3388, 3741, 2765, 3742, 3769, 3813, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /* 1314 */ 3229, 3238, 3230, 3245, 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767,
  /* 1332 */ 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /* 1350 */ 2767, 3653, 2439, 2767, 2767, 2767, 2767, 3256, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767,
  /* 1368 */ 2767, 3880, 3276, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 3295, 3300, 3308, 3328, 2767, 2613, 2439, 2767,
  /* 1386 */ 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767,
  /* 1404 */ 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2603, 3339, 3344, 2767, 2613, 2439, 2767, 2767, 2767, 2767, 2192,
  /* 1422 */ 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767,
  /* 1440 */ 2766, 2767, 4067, 3744, 3389, 3731, 3743, 3793, 2344, 3203, 2767, 2560, 3741, 3359, 2226, 3741, 2355, 3355,
  /* 1458 */ 3109, 3369, 3959, 3117, 3377, 3782, 3699, 2526, 2566, 2767, 2767, 2767, 2767, 2767, 3387, 2767, 3397, 3414,
  /* 1476 */ 4150, 3402, 3743, 2613, 3776, 3741, 2767, 2560, 3741, 3221, 2226, 3741, 2823, 4070, 3109, 3741, 3742, 3117,
  /* 1494 */ 3741, 3782, 3699, 2947, 2566, 2767, 2767, 2767, 2767, 2767, 3422, 3283, 3431, 3436, 4160, 3444, 3743, 2613,
  /* 1512 */ 3776, 3741, 2767, 2560, 3741, 3359, 2226, 3741, 2823, 4070, 3109, 3741, 2827, 3117, 3159, 3782, 3456, 3053,
  /* 1530 */ 3989, 2767, 2767, 2767, 2767, 2767, 3464, 2767, 3473, 3478, 4188, 3486, 3743, 2613, 3776, 3741, 2767, 2560,
  /* 1548 */ 3741, 3359, 2226, 3741, 2823, 4070, 3109, 3741, 3742, 3117, 3741, 3782, 3699, 2526, 2566, 2767, 2767, 2767,
  /* 1566 */ 2767, 2767, 3498, 2767, 3507, 3510, 4010, 3518, 2799, 2613, 3776, 3525, 2767, 3010, 3741, 3359, 2247, 3741,
  /* 1584 */ 2815, 3533, 3131, 3713, 3549, 3117, 2794, 3782, 3699, 2526, 3557, 2767, 2767, 2767, 2767, 2767, 3575, 2767,
  /* 1602 */ 3584, 3601, 2211, 3589, 2819, 2613, 3139, 3609, 2767, 2560, 3200, 3221, 3153, 3741, 3620, 4070, 3109, 3741,
  /* 1620 */ 3742, 3117, 3741, 3782, 3699, 2947, 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181,
  /* 1638 */ 2705, 3038, 3776, 2753, 2767, 2560, 3741, 3359, 3085, 3741, 2823, 4070, 2768, 3741, 3742, 3388, 3741, 2254,
  /* 1656 */ 3177, 3632, 2566, 2767, 2767, 2767, 2767, 2767, 3651, 2767, 3661, 3678, 3820, 3666, 3743, 2613, 3776, 3741,
  /* 1674 */ 2767, 2560, 2838, 3686, 3085, 4052, 2823, 4070, 2768, 3741, 3727, 3388, 3698, 2765, 3742, 3769, 2566, 2767,
  /* 1692 */ 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 3776, 3741, 2767, 2560, 3741, 3359,
  /* 1710 */ 3085, 3741, 2823, 4070, 2768, 3741, 2689, 3576, 3741, 2765, 3742, 3769, 2566, 2767, 2767, 2767, 2767, 2767,
  /* 1728 */ 2766, 2767, 4067, 3744, 3389, 3181, 2351, 2613, 3707, 3741, 2767, 3807, 3741, 3359, 3721, 3741, 2823, 3897,
  /* 1746 */ 2768, 3163, 3742, 3388, 3612, 2765, 4027, 3769, 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744,
  /* 1764 */ 3389, 3181, 3743, 2613, 3776, 3741, 2767, 2560, 3739, 3221, 3101, 3741, 2823, 4070, 2768, 3741, 3742, 3388,
  /* 1782 */ 2652, 3752, 3762, 3982, 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 2693, 3801, 2613,
  /* 1800 */ 2533, 3828, 2767, 2560, 3741, 3359, 3085, 3741, 2823, 4070, 2768, 3741, 3742, 3388, 3741, 2765, 3742, 3769,
  /* 1818 */ 2566, 2767, 2767, 2767, 2767, 2767, 3836, 2767, 3846, 3859, 2275, 3851, 3743, 2613, 2961, 3741, 2767, 2560,
  /* 1836 */ 2781, 3221, 3085, 3867, 2823, 4070, 2768, 3741, 3490, 3388, 4049, 2765, 3742, 3982, 2566, 2767, 2767, 2767,
  /* 1854 */ 2767, 2767, 3878, 2767, 3888, 3905, 2291, 3893, 3743, 2613, 3776, 3741, 2767, 2560, 3913, 3922, 3085, 3741,
  /* 1872 */ 3933, 4070, 2768, 3741, 3742, 3388, 3741, 2765, 3742, 3769, 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767,
  /* 1890 */ 4067, 3744, 3389, 3181, 3743, 2613, 3776, 3741, 2767, 2560, 3870, 3221, 3085, 3448, 2803, 3938, 2768, 3950,
  /* 1908 */ 3742, 3388, 3741, 2765, 3379, 3967, 2566, 2767, 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181,
  /* 1926 */ 3743, 2613, 3211, 3741, 2767, 2560, 3741, 2968, 3085, 3741, 2823, 3217, 2981, 3955, 3145, 3388, 3593, 2765,
  /* 1944 */ 3406, 3975, 3813, 2767, 2767, 2767, 2767, 2767, 4008, 3788, 4018, 4035, 2307, 4023, 3624, 2613, 3776, 3670,
  /* 1962 */ 2767, 2560, 3741, 3359, 3085, 3741, 2823, 4070, 2768, 3741, 3742, 3388, 3741, 2765, 3742, 3769, 2566, 2767,
  /* 1980 */ 2767, 2767, 2767, 2767, 2766, 2767, 4067, 3744, 3389, 3181, 3743, 2613, 4043, 3741, 2767, 2560, 3741, 4060,
  /* 1998 */ 3085, 3741, 2823, 4070, 2768, 3741, 3742, 3388, 3741, 2765, 3742, 3769, 2566, 2767, 2767, 2767, 2767, 2767,
  /* 2016 */ 2767, 3268, 4078, 4087, 4079, 4094, 2256, 2613, 2439, 2767, 2767, 2767, 2767, 2192, 2770, 2767, 2767, 2257,
  /* 2034 */ 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2546,
  /* 2052 */ 4105, 4110, 2767, 2613, 2439, 2767, 2767, 4121, 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767,
  /* 2070 */ 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 4148, 4140, 4133, 4146, 2767, 2613,
  /* 2088 */ 2439, 2767, 2767, 2767, 2767, 4158, 2770, 2767, 2767, 3248, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194,
  /* 2106 */ 3541, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2640, 4168, 2638, 4175, 2767, 2613, 2439, 2767, 2767, 2767,
  /* 2124 */ 2767, 2192, 2770, 2767, 2767, 2257, 2768, 2767, 2767, 2767, 2767, 2767, 2767, 2194, 3541, 2767, 2767, 2767,
  /* 2142 */ 2767, 2767, 2767, 2767, 2767, 4186, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767,
  /* 2160 */ 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2767, 2860, 2860,
  /* 2178 */ 2860, 2860, 2860, 2860, 2860, 2860, 0, 0, 0, 0, 0, 5460, 5460, 0, 0, 106, 0, 0, 0, 0, 0, 0, 63, 0, 81, 81,
  /* 2204 */ 81, 81, 81, 81, 3153, 3153, 3153, 0, 0, 0, 0, 0, 0, 1098, 1098, 0, 106, 0, 0, 63, 0, 110, 0, 0, 0, 0, 1909,
  /* 2231 */ 118, 1069, 1069, 200, 146, 202, 201, 0, 2240, 0, 0, 1599, 1536, 1536, 1536, 1536, 0, 0, 0, 0, 1909, 118,
  /* 2253 */ 1177, 1069, 45, 0, 0, 0, 0, 0, 0, 106, 0, 0, 2373, 2373, 2373, 2373, 2373, 0, 0, 2373, 2373, 2373, 0, 0, 0,
  /* 2278 */ 0, 0, 0, 1100, 1100, 3666, 3666, 3666, 3666, 3666, 3666, 3666, 3666, 0, 0, 0, 0, 0, 0, 1101, 1101, 4179,
  /* 2300 */ 4179, 4179, 4179, 4179, 4179, 4179, 4179, 0, 0, 0, 0, 0, 0, 1102, 1102, 0, 0, 4352, 0, 0, 0, 0, 0, 0, 1536,
  /* 2325 */ 110, 64, 64, 64, 0, 0, 0, 0, 0, 0, 1599, 110, 0, 106, 0, 0, 63, 1280, 110, 0, 0, 0, 0, 2373, 0, 1069, 1121,
  /* 2352 */ 1069, 1069, 1069, 1069, 1069, 0, 0, 1069, 1186, 1069, 1069, 0, 0, 1280, 0, 1280, 0, 0, 118, 4864, 4864,
  /* 2373 */ 4864, 4864, 4864, 0, 0, 4864, 0, 0, 0, 0, 0, 0, 1858, 1858, 1858, 1858, 1858, 0, 0, 1858, 4864, 4864, 4864,
  /* 2396 */ 0, 0, 0, 0, 0, 0, 1859, 1859, 1859, 1859, 1859, 0, 0, 1859, 0, 0, 0, 5120, 0, 0, 0, 0, 5120, 0, 0, 0, 5120,
  /* 2423 */ 5120, 0, 0, 0, 0, 0, 5460, 5460, 5460, 5460, 5460, 5460, 5460, 5460, 0, 0, 0, 0, 0, 0, 2373, 0, 0, 0, 0, 0,
  /* 2449 */ 0, 5632, 0, 0, 0, 0, 0, 7424, 0, 0, 6229, 6229, 6229, 6229, 6229, 6229, 6229, 6229, 0, 0, 0, 0, 0, 0, 2373,
  /* 2474 */ 2373, 2373, 0, 0, 6912, 6912, 0, 0, 6912, 6912, 0, 6912, 6912, 6912, 6912, 6912, 0, 0, 0, 0, 0, 0, 4864,
  /* 2497 */ 4864, 4864, 4864, 4864, 4864, 7254, 7254, 7254, 7254, 7254, 7254, 7262, 7262, 7262, 0, 0, 0, 0, 0, 0, 7936,
  /* 2518 */ 0, 7424, 0, 0, 0, 0, 0, 63, 110, 110, 0, 1069, 1069, 1069, 63, 0, 0, 0, 0, 2373, 0, 1069, 1144, 0, 0, 0,
  /* 2544 */ 7424, 2373, 0, 0, 0, 0, 0, 18268, 18268, 0, 0, 0, 7936, 7936, 7936, 7936, 0, 0, 0, 0, 1069, 0, 0, 1069, 63,
  /* 2569 */ 63, 63, 63, 63, 0, 0, 63, 7936, 0, 7936, 0, 0, 0, 0, 0, 0, 8704, 58, 0, 106, 0, 0, 0, 0, 0, 113, 113, 0,
  /* 2597 */ 2373, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 13403, 13403, 0, 0, 55, 0, 0, 0, 0, 0, 0, 63, 110, 70, 70, 70, 70, 70,
  /* 2626 */ 8279, 8279, 70, 8279, 8279, 8279, 8279, 8279, 8279, 8287, 8287, 8287, 0, 0, 0, 0, 0, 0, 19200, 19200,
  /* 2646 */ 19200, 19200, 1858, 1858, 1858, 0, 1069, 1069, 1069, 1069, 1069, 1069, 1222, 1069, 2199, 0, 0, 0, 1909,
  /* 2665 */ 118, 1069, 1069, 146, 146, 201, 201, 203, 2240, 169, 63, 147, 171, 0, 174, 2199, 118, 187, 188, 189, 190,
  /* 2686 */ 191, 174, 2240, 1069, 45, 1069, 1069, 1069, 1069, 1069, 0, 1069, 1069, 1122, 45, 1859, 1859, 1859, 0, 1069,
  /* 2706 */ 1069, 1069, 1069, 1069, 1129, 0, 0, 170, 63, 147, 172, 0, 174, 2199, 118, 188, 188, 190, 190, 0, 174, 2240,
  /* 2728 */ 1069, 106, 0, 0, 63, 0, 147, 112, 1859, 1859, 112, 2373, 0, 1069, 1069, 146, 146, 201, 201, 0, 2240, 15405,
  /* 2750 */ 1069, 1069, 16429, 1069, 1069, 1069, 1069, 1069, 1152, 1069, 1069, 1069, 1124, 1124, 1069, 1069, 1069, 0,
  /* 2768 */ 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 1069, 1145, 1148, 1069, 1069, 1069, 1069, 1069, 138, 1069, 1069, 1069,
  /* 2790 */ 15661, 1069, 1069, 16685, 1069, 1069, 1069, 1069, 17709, 1069, 1069, 1069, 1127, 1069, 1069, 0, 0, 1069,
  /* 2808 */ 1069, 1069, 1187, 1069, 1125, 1125, 1069, 1069, 1069, 0, 0, 1069, 1069, 45, 1069, 1069, 1069, 0, 0, 1069,
  /* 2828 */ 1069, 1069, 1069, 1069, 1069, 1210, 0, 1069, 1146, 1149, 1069, 1069, 1069, 1069, 1069, 1069, 1069, 1164,
  /* 2846 */ 170, 63, 0, 172, 0, 174, 2199, 118, 8762, 58, 58, 58, 8762, 58, 58, 8762, 8762, 8762, 0, 0, 0, 0, 0, 57, 0,
  /* 2871 */ 0, 0, 9216, 0, 0, 0, 9216, 9216, 9216, 9216, 9216, 0, 0, 9216, 0, 0, 9216, 9216, 9216, 0, 0, 0, 0, 0, 0, 0,
  /* 2897 */ 152, 9560, 9560, 9560, 9560, 9560, 9560, 9560, 9560, 0, 0, 0, 0, 0, 58, 58, 8704, 0, 59, 0, 0, 0, 0, 0, 0,
  /* 2922 */ 63, 1390, 10585, 10585, 10585, 10585, 10585, 10585, 10585, 10585, 0, 0, 0, 0, 0, 70, 70, 70, 0, 8960, 0,
  /* 2943 */ 12544, 0, 0, 63, 110, 110, 0, 1069, 1069, 1069, 63, 110, 110, 209, 1069, 1069, 1069, 63, 0, 0, 0, 0, 2373,
  /* 2966 */ 0, 1143, 1069, 106, 0, 0, 145, 0, 148, 0, 0, 0, 0, 2373, 118, 0, 0, 0, 0, 173, 0, 0, 118, 3328, 3840, 4608,
  /* 2992 */ 5888, 6656, 7680, 8448, 10240, 10752, 11520, 13568, 18432, 0, 7680, 8448, 0, 0, 0, 0, 2373, 2373, 0, 0, 0,
  /* 3013 */ 0, 1069, 0, 0, 1158, 0, 0, 9984, 12032, 0, 0, 0, 0, 0, 9560, 9560, 0, 11354, 11354, 11354, 11354, 11354,
  /* 3035 */ 11354, 11354, 11354, 0, 0, 0, 0, 0, 108, 63, 110, 0, 0, 11008, 0, 0, 0, 63, 110, 208, 0, 1069, 1069, 1069,
  /* 3059 */ 63, 0, 0, 0, 0, 3072, 3072, 3072, 3072, 3072, 81, 81, 3072, 0, 11908, 0, 0, 0, 0, 0, 0, 64, 64, 0, 0, 60,
  /* 3085 */ 0, 0, 0, 0, 0, 118, 1069, 1069, 12348, 12348, 12348, 12348, 12348, 12348, 12348, 12348, 0, 0, 0, 0, 0, 118,
  /* 3107 */ 1069, 1178, 170, 63, 0, 172, 0, 174, 0, 118, 188, 188, 190, 190, 0, 174, 0, 1069, 63, 213, 214, 63, 63, 0,
  /* 3131 */ 170, 63, 0, 172, 0, 174, 175, 118, 0, 1792, 1792, 0, 2373, 0, 1069, 1069, 1069, 1208, 1069, 1069, 1069, 0,
  /* 3153 */ 0, 0, 1792, 0, 1909, 118, 1069, 1069, 1069, 1220, 1069, 1069, 1069, 1069, 1069, 1205, 1069, 1069, 0, 1906,
  /* 3173 */ 1906, 0, 2373, 0, 1069, 1069, 1069, 17453, 1069, 1069, 1069, 0, 1069, 1069, 1069, 1069, 45, 1069, 1069,
  /* 3192 */ 1069, 1069, 0, 1792, 1906, 0, 0, 118, 1069, 1069, 1161, 1069, 1069, 1069, 1069, 1069, 1069, 1153, 1069, 0,
  /* 3212 */ 1907, 1907, 0, 2373, 0, 1069, 1069, 1190, 1069, 1069, 106, 0, 0, 63, 0, 110, 0, 0, 0, 0, 12800, 12800,
  /* 3234 */ 12800, 12800, 12800, 12800, 12800, 12800, 12800, 12800, 12800, 0, 0, 12800, 12800, 12800, 0, 0, 0, 0, 0,
  /* 3253 */ 142, 0, 0, 0, 106, 0, 0, 63, 0, 149, 0, 0, 0, 0, 6400, 0, 0, 0, 0, 0, 17920, 0, 17920, 0, 0, 211, 109, 109,
  /* 3281 */ 109, 109, 0, 0, 0, 61, 0, 0, 0, 0, 0, 10585, 10585, 0, 0, 13056, 13056, 0, 0, 0, 0, 13056, 0, 0, 0, 0,
  /* 3307 */ 13056, 0, 13056, 0, 13056, 0, 13056, 0, 0, 0, 0, 1069, 112, 0, 1069, 63, 63, 63, 215, 63, 0, 0, 13056,
  /* 3330 */ 13056, 0, 0, 0, 0, 0, 152, 0, 0, 13403, 13403, 13403, 13403, 13403, 13403, 13403, 13403, 0, 0, 0, 0, 0,
  /* 3352 */ 1280, 0, 0, 1188, 1069, 1069, 1069, 1069, 106, 0, 0, 0, 0, 0, 0, 63, 63, 1200, 1069, 1069, 1069, 1069,
  /* 3374 */ 1069, 1069, 1206, 1069, 1218, 1069, 1069, 1069, 1069, 1069, 1069, 45, 0, 1070, 0, 0, 0, 0, 0, 0, 0, 1069,
  /* 3396 */ 1069, 0, 0, 0, 1070, 1070, 1095, 1095, 1095, 0, 1069, 1069, 1069, 1069, 1069, 1159, 1069, 0, 1095, 1095,
  /* 3416 */ 1095, 1095, 1095, 0, 0, 1095, 1071, 0, 0, 0, 0, 0, 0, 0, 2304, 0, 0, 0, 1071, 1071, 1096, 1096, 1096, 1096,
  /* 3440 */ 1103, 0, 0, 1103, 1096, 1103, 1103, 0, 1069, 1069, 1069, 1069, 1069, 1180, 1069, 1069, 1069, 1229, 1069,
  /* 3459 */ 1069, 1069, 1069, 1069, 207, 1072, 0, 0, 0, 0, 0, 0, 0, 6400, 0, 0, 0, 1072, 1072, 1097, 1097, 1097, 1097,
  /* 3482 */ 1104, 0, 0, 1104, 1097, 1104, 1104, 0, 1069, 1069, 1069, 1069, 1069, 1209, 1069, 0, 1073, 0, 0, 0, 0, 0, 0,
  /* 3505 */ 0, 9859, 0, 0, 0, 1073, 1073, 1073, 1073, 1073, 0, 0, 1117, 1073, 1117, 1117, 0, 1069, 1069, 1069, 1123,
  /* 3526 */ 1069, 1069, 1150, 1069, 1069, 1069, 1154, 1069, 1189, 1069, 1069, 1069, 106, 14080, 0, 0, 0, 63, 63, 63,
  /* 3546 */ 63, 63, 0, 15149, 1069, 1069, 1069, 1069, 1069, 1069, 17664, 0, 14381, 63, 63, 63, 63, 63, 0, 0, 0, 64, 64,
  /* 3569 */ 64, 64, 64, 0, 0, 64, 1074, 0, 0, 0, 0, 0, 0, 0, 13869, 0, 0, 0, 1074, 1074, 1098, 1098, 1098, 0, 1069,
  /* 3594 */ 1069, 1069, 1069, 1069, 1221, 1069, 1069, 1098, 1098, 1098, 1098, 1098, 0, 0, 1098, 1069, 1069, 16941,
  /* 3612 */ 1069, 1069, 1069, 1069, 1069, 1069, 1069, 1223, 1069, 1184, 0, 0, 1069, 1069, 1069, 1069, 1128, 1069, 0, 0,
  /* 3632 */ 0, 0, 0, 1069, 16173, 1069, 63, 0, 0, 0, 65, 7236, 7236, 7236, 7236, 7236, 7254, 7254, 7236, 1075, 0, 0, 0,
  /* 3655 */ 0, 0, 0, 0, 109, 111, 0, 0, 0, 1075, 1075, 1099, 1099, 1099, 0, 1069, 1069, 1069, 1069, 1151, 1069, 1069,
  /* 3677 */ 1069, 1099, 1099, 1099, 1099, 1099, 0, 0, 1099, 1165, 106, 0, 144, 0, 0, 0, 0, 0, 11354, 11354, 0, 1217,
  /* 3699 */ 1069, 1069, 1069, 1069, 1069, 1069, 1069, 63, 0, 1908, 1908, 0, 2373, 0, 1069, 1069, 1202, 1069, 1069,
  /* 3718 */ 1069, 14125, 1069, 0, 0, 1908, 1792, 0, 118, 1069, 1069, 1207, 1069, 1069, 1069, 1069, 0, 1069, 1069, 1121,
  /* 3738 */ 1069, 1069, 1160, 1069, 1069, 1069, 1069, 1069, 1069, 1069, 1069, 0, 0, 1069, 45, 1069, 0, 0, 0, 0, 0, 0,
  /* 3760 */ 175, 118, 1228, 1069, 17197, 1069, 1069, 1069, 1069, 0, 0, 0, 1069, 1069, 1069, 63, 0, 0, 0, 0, 2373, 0,
  /* 3782 */ 1069, 1069, 146, 146, 201, 201, 0, 0, 0, 0, 62, 0, 0, 0, 0, 107, 0, 63, 110, 1069, 1126, 1069, 1069, 1069,
  /* 3806 */ 1069, 0, 0, 0, 0, 1157, 0, 0, 1069, 212, 63, 63, 63, 63, 0, 0, 0, 0, 0, 0, 1099, 1099, 14893, 1147, 1069,
  /* 3831 */ 1069, 1069, 1069, 1144, 14893, 1076, 0, 0, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 1076, 1076, 1100, 1100, 1100, 0,
  /* 3855 */ 1069, 1120, 1069, 1069, 1100, 1100, 1100, 1100, 1100, 0, 0, 1100, 1069, 1069, 16027, 1069, 1069, 1069,
  /* 3873 */ 1069, 1069, 1069, 1163, 1069, 1077, 0, 0, 0, 0, 0, 0, 0, 211, 149, 0, 0, 0, 1077, 1077, 1101, 1101, 1101,
  /* 3896 */ 0, 1069, 1069, 1069, 1069, 1159, 106, 0, 168, 1101, 1101, 1101, 1101, 1101, 0, 0, 1101, 1159, 1069, 1069,
  /* 3916 */ 1069, 1069, 1069, 1069, 1069, 207, 1069, 106, 143, 0, 0, 0, 0, 0, 2560, 0, 0, 1183, 1069, 0, 0, 1185, 1069,
  /* 3939 */ 1069, 1069, 1191, 1069, 106, 0, 0, 0, 0, 0, 112, 1069, 1201, 1069, 1069, 1204, 1069, 1069, 1069, 1203,
  /* 3959 */ 1069, 1069, 1069, 1069, 1191, 1069, 1069, 0, 0, 0, 0, 1069, 1069, 14637, 63, 110, 0, 0, 0, 1234, 1069,
  /* 3980 */ 1069, 63, 0, 0, 0, 1069, 1069, 1069, 63, 110, 1069, 63, 63, 63, 63, 207, 0, 0, 0, 0, 6200, 6200, 6200,
  /* 4003 */ 6200, 6200, 6229, 6229, 6200, 1078, 0, 0, 0, 0, 0, 0, 0, 1073, 1073, 0, 0, 0, 1078, 1078, 1102, 1102, 1102,
  /* 4026 */ 0, 1069, 1069, 1069, 1069, 1230, 1069, 1069, 0, 1102, 1102, 1102, 1102, 1102, 0, 0, 1102, 0, 117, 0, 0,
  /* 4047 */ 2373, 0, 1069, 1069, 1219, 1069, 1069, 1069, 1069, 1069, 1069, 1181, 1182, 1069, 106, 0, 0, 146, 0, 150, 0,
  /* 4068 */ 0, 0, 1069, 1069, 1069, 1069, 1069, 106, 0, 0, 0, 0, 0, 17920, 17920, 17920, 17920, 17920, 17920, 17920,
  /* 4088 */ 17920, 17920, 17920, 17920, 0, 0, 17920, 17920, 17920, 0, 0, 0, 0, 0, 3666, 3666, 0, 18268, 18268, 18268,
  /* 4108 */ 18268, 18268, 18268, 18268, 18268, 0, 0, 0, 0, 0, 4179, 4179, 0, 0, 0, 0, 18688, 0, 0, 0, 0, 0, 12348,
  /* 4131 */ 12348, 0, 18944, 0, 0, 0, 18944, 0, 18944, 18944, 0, 0, 18944, 18944, 0, 18944, 18944, 18944, 0, 0, 0, 0,
  /* 4153 */ 0, 0, 0, 1095, 1095, 0, 142, 0, 0, 0, 0, 0, 0, 1096, 1096, 19200, 19200, 19200, 19200, 19200, 0, 0, 19200,
  /* 4176 */ 19200, 19200, 0, 0, 0, 0, 0, 5120, 0, 5120, 0, 768, 0, 0, 0, 0, 0, 0, 1097, 1097
];

MaiaScript.EXPECTED =
[
  /*   0 */ 162, 166, 168, 170, 174, 178, 185, 181, 189, 193, 197, 222, 222, 201, 209, 251, 216, 220, 222, 222, 228,
  /*  21 */ 232, 210, 238, 222, 222, 249, 244, 255, 258, 222, 222, 224, 222, 222, 249, 243, 266, 222, 222, 222, 223,
  /*  42 */ 243, 245, 222, 222, 241, 265, 222, 260, 321, 261, 323, 325, 210, 309, 302, 210, 270, 274, 275, 279, 283,
  /*  63 */ 287, 291, 210, 210, 210, 301, 210, 210, 347, 306, 315, 210, 297, 329, 294, 210, 210, 382, 210, 210, 339,
  /*  84 */ 333, 205, 358, 210, 210, 382, 210, 345, 343, 351, 210, 210, 210, 346, 344, 204, 210, 363, 355, 210, 364,
  /* 105 */ 204, 362, 210, 210, 210, 212, 388, 391, 394, 397, 368, 372, 376, 379, 210, 210, 210, 211, 210, 210, 210,
  /* 126 */ 401, 210, 210, 210, 336, 210, 210, 210, 385, 210, 210, 210, 234, 403, 210, 210, 210, 385, 210, 210, 318,
  /* 147 */ 210, 210, 385, 210, 210, 402, 210, 210, 210, 311, 210, 210, 210, 210, 210, 1032, 1536, 263168, 525312,
  /* 166 */ 16778240, 268436480, 1024, 1024, 1024, 1024, 1074004992, 263168, 67109888, 67634176, 67109888, 263416,
  /* 178 */ 428084472, 428084728, 428609016, 428084728, -1141115904, -1074531328, 495717880, 428084728, 428084732,
  /* 187 */ 495193592, 495193592, -1074531328, -1074531328, -67111936, -3072, -527360, -527360, -1074266632,
  /* 196 */ -1074266632, -524808, -1073742344, -520, 1024, 8, 8, 512, 16777216, 0, 0, 0, 4194304, 268435456, 0, 0, 0, 0,
  /* 214 */ 16, 32, 128, 192, 192, 268435584, 256, 256, 8, 8, 8, 8, 0, 0, 4096, 16384, 196608, 6291456, 50331648,
  /* 233 */ 805306368, 0, 0, 1, 4, 8, 805306496, 256, 8, 8, 32, 32, 16, 16, 128, 8, 8, 512, 0, 0, 32, 16, 128, 64, 64,
  /* 258 */ 64, 256, 8, 8, 8, 32, 16, 16, 16, 16, 128, 256, 262144, 262152, 131072, 131072, -90046456, -90046456,
  /* 276 */ -89784312, -90046456, -69074936, 1702901, 1702901, -1703926, 1702903, 1965053, 1833973, 2096117, 1833975,
  /* 287 */ 2096125, -88343555, -88343553, -88343553, -1025, -1025, 0, 0, 1, 0, 0, 1, 224, 512, 4, 1024, 65536, 4194304,
  /* 305 */ 0, 2013265920, 0x80000000, 0, 0, 2, 4, 8, 0, 0, 0, 12582912, 50331648, 0, 4, 8, 16, 16, 16, 8, 32, 32, 32,
  /* 328 */ 0, 28672, 1048576, 0, 67108864, 268435456, 1610612736, 0x80000000, 0, 384, 0, 0, 2097152, 8388608,
  /* 342 */ 134217728, 8388608, 1073741824, 0, 0, 0, 2097152, 8388608, 33554432, 0, 4194304, 16777216, 67108864,
  /* 355 */ 1073741824, 0, 0, 16777216, 64, 16384, 67108864, 8388608, 0, 0, 0, 8388608, 1073741824, 960, 1599, 960, 448,
  /* 372 */ 480, 480, 992, 480, 2047, 2047, 2047, 2047, 0, 0, 0, 4194304, 0, 0, 16, 0, 0, 32, 512, 0, 32, 1056, 1087,
  /* 395 */ 1087, 1599, 1087, 1599, 1599, 448, 3, 4, 8, 16, 0, 0
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
  "Comment",
  "Script",
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
  "'=>'",
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
