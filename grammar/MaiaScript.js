// This file was generated on Tue Nov 1, 2022 14:10 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
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
    lookahead1W(21);                // END | EOF | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(17);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
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
    case 65:                        // '{'
      lookahead2W(20);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 449:                     // '{' Identifier
        lookahead3W(35);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '@=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'for' |
                                    // 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 705:                     // '{' String
        lookahead3W(34);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'for' | 'foreach' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6337:                    // '{' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8385:                    // '{' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 577:                     // '{' Character
      case 833:                     // '{' Integer
      case 961:                     // '{' Real
        lookahead3W(33);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'for' | 'foreach' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 2369:                    // '{' '('
      case 7361:                    // '{' 'do'
      case 8001:                    // '{' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 1089:                    // '{' Comment
      case 4545:                    // '{' ';'
      case 6849:                    // '{' 'break'
      case 7105:                    // '{' 'continue'
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 7617:                    // '{' 'for'
      case 7745:                    // '{' 'foreach'
      case 7873:                    // '{' 'if'
      case 8129:                    // '{' 'switch'
      case 8257:                    // '{' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1345:                    // '{' '!'
      case 3009:                    // '{' '+'
      case 3137:                    // '{' '++'
      case 3521:                    // '{' '-'
      case 3649:                    // '{' '--'
      case 9025:                    // '{' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
     && lk != 8                     // Comment
     && lk != 10                    // '!'
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
     && lk != 59                    // 'for'
     && lk != 60                    // 'foreach'
     && lk != 61                    // 'if'
     && lk != 62                    // 'return'
     && lk != 63                    // 'switch'
     && lk != 64                    // 'while'
     && lk != 70                    // '~'
     && lk != 8897                  // '{' '}'
     && lk != 49601                 // '{' Identifier Identifier
     && lk != 49729                 // '{' Character Identifier
     && lk != 49857                 // '{' String Identifier
     && lk != 49985                 // '{' Integer Identifier
     && lk != 50113                 // '{' Real Identifier
     && lk != 50241                 // '{' Comment Identifier
     && lk != 53697                 // '{' ';' Identifier
     && lk != 56001                 // '{' 'break' Identifier
     && lk != 56257                 // '{' 'continue' Identifier
     && lk != 65985                 // '{' Identifier Character
     && lk != 66113                 // '{' Character Character
     && lk != 66241                 // '{' String Character
     && lk != 66369                 // '{' Integer Character
     && lk != 66497                 // '{' Real Character
     && lk != 66625                 // '{' Comment Character
     && lk != 70081                 // '{' ';' Character
     && lk != 72385                 // '{' 'break' Character
     && lk != 72641                 // '{' 'continue' Character
     && lk != 82369                 // '{' Identifier String
     && lk != 82497                 // '{' Character String
     && lk != 82625                 // '{' String String
     && lk != 82753                 // '{' Integer String
     && lk != 82881                 // '{' Real String
     && lk != 83009                 // '{' Comment String
     && lk != 86465                 // '{' ';' String
     && lk != 88769                 // '{' 'break' String
     && lk != 89025                 // '{' 'continue' String
     && lk != 98753                 // '{' Identifier Integer
     && lk != 98881                 // '{' Character Integer
     && lk != 99009                 // '{' String Integer
     && lk != 99137                 // '{' Integer Integer
     && lk != 99265                 // '{' Real Integer
     && lk != 99393                 // '{' Comment Integer
     && lk != 102849                // '{' ';' Integer
     && lk != 105153                // '{' 'break' Integer
     && lk != 105409                // '{' 'continue' Integer
     && lk != 115137                // '{' Identifier Real
     && lk != 115265                // '{' Character Real
     && lk != 115393                // '{' String Real
     && lk != 115521                // '{' Integer Real
     && lk != 115649                // '{' Real Real
     && lk != 115777                // '{' Comment Real
     && lk != 119233                // '{' ';' Real
     && lk != 121537                // '{' 'break' Real
     && lk != 121793                // '{' 'continue' Real
     && lk != 131521                // '{' Identifier Comment
     && lk != 131649                // '{' Character Comment
     && lk != 131777                // '{' String Comment
     && lk != 131905                // '{' Integer Comment
     && lk != 132033                // '{' Real Comment
     && lk != 132161                // '{' Comment Comment
     && lk != 135617                // '{' ';' Comment
     && lk != 137921                // '{' 'break' Comment
     && lk != 138177                // '{' 'continue' Comment
     && lk != 164289                // '{' Identifier '!'
     && lk != 164417                // '{' Character '!'
     && lk != 164545                // '{' String '!'
     && lk != 164673                // '{' Integer '!'
     && lk != 164801                // '{' Real '!'
     && lk != 164929                // '{' Comment '!'
     && lk != 168385                // '{' ';' '!'
     && lk != 170689                // '{' 'break' '!'
     && lk != 170945                // '{' 'continue' '!'
     && lk != 295489                // '{' Character '('
     && lk != 295617                // '{' String '('
     && lk != 295745                // '{' Integer '('
     && lk != 295873                // '{' Real '('
     && lk != 296001                // '{' Comment '('
     && lk != 299457                // '{' ';' '('
     && lk != 301761                // '{' 'break' '('
     && lk != 302017                // '{' 'continue' '('
     && lk != 377921                // '{' Comment '+'
     && lk != 381377                // '{' ';' '+'
     && lk != 383681                // '{' 'break' '+'
     && lk != 383937                // '{' 'continue' '+'
     && lk != 394305                // '{' Comment '++'
     && lk != 397761                // '{' ';' '++'
     && lk != 400065                // '{' 'break' '++'
     && lk != 400321                // '{' 'continue' '++'
     && lk != 426433                // '{' Identifier ','
     && lk != 426561                // '{' Character ','
     && lk != 426689                // '{' String ','
     && lk != 426817                // '{' Integer ','
     && lk != 426945                // '{' Real ','
     && lk != 427073                // '{' Comment ','
     && lk != 430529                // '{' ';' ','
     && lk != 432833                // '{' 'break' ','
     && lk != 433089                // '{' 'continue' ','
     && lk != 443457                // '{' Comment '-'
     && lk != 446913                // '{' ';' '-'
     && lk != 449217                // '{' 'break' '-'
     && lk != 449473                // '{' 'continue' '-'
     && lk != 459841                // '{' Comment '--'
     && lk != 463297                // '{' ';' '--'
     && lk != 465601                // '{' 'break' '--'
     && lk != 465857                // '{' 'continue' '--'
     && lk != 541121                // '{' Identifier ':'
     && lk != 541377                // '{' String ':'
     && lk != 573889                // '{' Identifier ';'
     && lk != 574017                // '{' Character ';'
     && lk != 574145                // '{' String ';'
     && lk != 574273                // '{' Integer ';'
     && lk != 574401                // '{' Real ';'
     && lk != 574529                // '{' Comment ';'
     && lk != 577985                // '{' ';' ';'
     && lk != 580289                // '{' 'break' ';'
     && lk != 580545                // '{' 'continue' ';'
     && lk != 803393                // '{' Character '['
     && lk != 803521                // '{' String '['
     && lk != 803649                // '{' Integer '['
     && lk != 803777                // '{' Real '['
     && lk != 803905                // '{' Comment '['
     && lk != 807361                // '{' ';' '['
     && lk != 809665                // '{' 'break' '['
     && lk != 809921                // '{' 'continue' '['
     && lk != 868801                // '{' Identifier 'break'
     && lk != 868929                // '{' Character 'break'
     && lk != 869057                // '{' String 'break'
     && lk != 869185                // '{' Integer 'break'
     && lk != 869313                // '{' Real 'break'
     && lk != 869441                // '{' Comment 'break'
     && lk != 872897                // '{' ';' 'break'
     && lk != 875201                // '{' 'break' 'break'
     && lk != 875457                // '{' 'continue' 'break'
     && lk != 901569                // '{' Identifier 'continue'
     && lk != 901697                // '{' Character 'continue'
     && lk != 901825                // '{' String 'continue'
     && lk != 901953                // '{' Integer 'continue'
     && lk != 902081                // '{' Real 'continue'
     && lk != 902209                // '{' Comment 'continue'
     && lk != 905665                // '{' ';' 'continue'
     && lk != 907969                // '{' 'break' 'continue'
     && lk != 908225                // '{' 'continue' 'continue'
     && lk != 934337                // '{' Identifier 'do'
     && lk != 934465                // '{' Character 'do'
     && lk != 934593                // '{' String 'do'
     && lk != 934721                // '{' Integer 'do'
     && lk != 934849                // '{' Real 'do'
     && lk != 934977                // '{' Comment 'do'
     && lk != 938433                // '{' ';' 'do'
     && lk != 940737                // '{' 'break' 'do'
     && lk != 940993                // '{' 'continue' 'do'
     && lk != 967105                // '{' Identifier 'for'
     && lk != 967233                // '{' Character 'for'
     && lk != 967361                // '{' String 'for'
     && lk != 967489                // '{' Integer 'for'
     && lk != 967617                // '{' Real 'for'
     && lk != 967745                // '{' Comment 'for'
     && lk != 971201                // '{' ';' 'for'
     && lk != 973505                // '{' 'break' 'for'
     && lk != 973761                // '{' 'continue' 'for'
     && lk != 983489                // '{' Identifier 'foreach'
     && lk != 983617                // '{' Character 'foreach'
     && lk != 983745                // '{' String 'foreach'
     && lk != 983873                // '{' Integer 'foreach'
     && lk != 984001                // '{' Real 'foreach'
     && lk != 984129                // '{' Comment 'foreach'
     && lk != 987585                // '{' ';' 'foreach'
     && lk != 989889                // '{' 'break' 'foreach'
     && lk != 990145                // '{' 'continue' 'foreach'
     && lk != 999873                // '{' Identifier 'if'
     && lk != 1000001               // '{' Character 'if'
     && lk != 1000129               // '{' String 'if'
     && lk != 1000257               // '{' Integer 'if'
     && lk != 1000385               // '{' Real 'if'
     && lk != 1000513               // '{' Comment 'if'
     && lk != 1003969               // '{' ';' 'if'
     && lk != 1006273               // '{' 'break' 'if'
     && lk != 1006529               // '{' 'continue' 'if'
     && lk != 1016257               // '{' Identifier 'return'
     && lk != 1016385               // '{' Character 'return'
     && lk != 1016513               // '{' String 'return'
     && lk != 1016641               // '{' Integer 'return'
     && lk != 1016769               // '{' Real 'return'
     && lk != 1016897               // '{' Comment 'return'
     && lk != 1020353               // '{' ';' 'return'
     && lk != 1022657               // '{' 'break' 'return'
     && lk != 1022913               // '{' 'continue' 'return'
     && lk != 1032641               // '{' Identifier 'switch'
     && lk != 1032769               // '{' Character 'switch'
     && lk != 1032897               // '{' String 'switch'
     && lk != 1033025               // '{' Integer 'switch'
     && lk != 1033153               // '{' Real 'switch'
     && lk != 1033281               // '{' Comment 'switch'
     && lk != 1036737               // '{' ';' 'switch'
     && lk != 1039041               // '{' 'break' 'switch'
     && lk != 1039297               // '{' 'continue' 'switch'
     && lk != 1049025               // '{' Identifier 'while'
     && lk != 1049153               // '{' Character 'while'
     && lk != 1049281               // '{' String 'while'
     && lk != 1049409               // '{' Integer 'while'
     && lk != 1049537               // '{' Real 'while'
     && lk != 1049665               // '{' Comment 'while'
     && lk != 1053121               // '{' ';' 'while'
     && lk != 1055425               // '{' 'break' 'while'
     && lk != 1055681               // '{' 'continue' 'while'
     && lk != 1065409               // '{' Identifier '{'
     && lk != 1065537               // '{' Character '{'
     && lk != 1065665               // '{' String '{'
     && lk != 1065793               // '{' Integer '{'
     && lk != 1065921               // '{' Real '{'
     && lk != 1066049               // '{' Comment '{'
     && lk != 1069505               // '{' ';' '{'
     && lk != 1071809               // '{' 'break' '{'
     && lk != 1072065               // '{' 'continue' '{'
     && lk != 1147329               // '{' Identifier '~'
     && lk != 1147457               // '{' Character '~'
     && lk != 1147585               // '{' String '~'
     && lk != 1147713               // '{' Integer '~'
     && lk != 1147841               // '{' Real '~'
     && lk != 1147969               // '{' Comment '~'
     && lk != 1151425               // '{' ';' '~'
     && lk != 1153729               // '{' 'break' '~'
     && lk != 1153985)              // '{' 'continue' '~'
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
          lk = -3;
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
    case 3:                         // Identifier
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
    case 10:                        // '!'
    case 18:                        // '('
    case 23:                        // '+'
    case 24:                        // '++'
    case 27:                        // '-'
    case 28:                        // '--'
    case 49:                        // '['
    case 70:                        // '~'
    case 426433:                    // '{' Identifier ','
    case 426561:                    // '{' Character ','
    case 426689:                    // '{' String ','
    case 426817:                    // '{' Integer ','
    case 426945:                    // '{' Real ','
    case 427073:                    // '{' Comment ','
    case 430529:                    // '{' ';' ','
    case 432833:                    // '{' 'break' ','
    case 433089:                    // '{' 'continue' ','
    case 541121:                    // '{' Identifier ':'
    case 541377:                    // '{' String ':'
      parse_Operation();
      break;
    case 35:                        // ';'
    case 53:                        // 'break'
    case 55:                        // 'continue'
    case 57:                        // 'do'
    case 59:                        // 'for'
    case 60:                        // 'foreach'
    case 61:                        // 'if'
    case 62:                        // 'return'
    case 63:                        // 'switch'
    case 64:                        // 'while'
      parse_Statement();
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
    case 65:                        // '{'
      lookahead2W(20);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 449:                     // '{' Identifier
        lookahead3W(35);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '@=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'for' |
                                    // 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 705:                     // '{' String
        lookahead3W(34);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'for' | 'foreach' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6337:                    // '{' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8385:                    // '{' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 577:                     // '{' Character
      case 833:                     // '{' Integer
      case 961:                     // '{' Real
        lookahead3W(33);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'for' | 'foreach' |
                                    // 'if' | 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 2369:                    // '{' '('
      case 7361:                    // '{' 'do'
      case 8001:                    // '{' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 1089:                    // '{' Comment
      case 4545:                    // '{' ';'
      case 6849:                    // '{' 'break'
      case 7105:                    // '{' 'continue'
        lookahead3W(23);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 7617:                    // '{' 'for'
      case 7745:                    // '{' 'foreach'
      case 7873:                    // '{' 'if'
      case 8129:                    // '{' 'switch'
      case 8257:                    // '{' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1345:                    // '{' '!'
      case 3009:                    // '{' '+'
      case 3137:                    // '{' '++'
      case 3521:                    // '{' '-'
      case 3649:                    // '{' '--'
      case 9025:                    // '{' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
     && lk != 8                     // Comment
     && lk != 10                    // '!'
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
     && lk != 59                    // 'for'
     && lk != 60                    // 'foreach'
     && lk != 61                    // 'if'
     && lk != 62                    // 'return'
     && lk != 63                    // 'switch'
     && lk != 64                    // 'while'
     && lk != 70                    // '~'
     && lk != 8897                  // '{' '}'
     && lk != 49601                 // '{' Identifier Identifier
     && lk != 49729                 // '{' Character Identifier
     && lk != 49857                 // '{' String Identifier
     && lk != 49985                 // '{' Integer Identifier
     && lk != 50113                 // '{' Real Identifier
     && lk != 50241                 // '{' Comment Identifier
     && lk != 53697                 // '{' ';' Identifier
     && lk != 56001                 // '{' 'break' Identifier
     && lk != 56257                 // '{' 'continue' Identifier
     && lk != 65985                 // '{' Identifier Character
     && lk != 66113                 // '{' Character Character
     && lk != 66241                 // '{' String Character
     && lk != 66369                 // '{' Integer Character
     && lk != 66497                 // '{' Real Character
     && lk != 66625                 // '{' Comment Character
     && lk != 70081                 // '{' ';' Character
     && lk != 72385                 // '{' 'break' Character
     && lk != 72641                 // '{' 'continue' Character
     && lk != 82369                 // '{' Identifier String
     && lk != 82497                 // '{' Character String
     && lk != 82625                 // '{' String String
     && lk != 82753                 // '{' Integer String
     && lk != 82881                 // '{' Real String
     && lk != 83009                 // '{' Comment String
     && lk != 86465                 // '{' ';' String
     && lk != 88769                 // '{' 'break' String
     && lk != 89025                 // '{' 'continue' String
     && lk != 98753                 // '{' Identifier Integer
     && lk != 98881                 // '{' Character Integer
     && lk != 99009                 // '{' String Integer
     && lk != 99137                 // '{' Integer Integer
     && lk != 99265                 // '{' Real Integer
     && lk != 99393                 // '{' Comment Integer
     && lk != 102849                // '{' ';' Integer
     && lk != 105153                // '{' 'break' Integer
     && lk != 105409                // '{' 'continue' Integer
     && lk != 115137                // '{' Identifier Real
     && lk != 115265                // '{' Character Real
     && lk != 115393                // '{' String Real
     && lk != 115521                // '{' Integer Real
     && lk != 115649                // '{' Real Real
     && lk != 115777                // '{' Comment Real
     && lk != 119233                // '{' ';' Real
     && lk != 121537                // '{' 'break' Real
     && lk != 121793                // '{' 'continue' Real
     && lk != 131521                // '{' Identifier Comment
     && lk != 131649                // '{' Character Comment
     && lk != 131777                // '{' String Comment
     && lk != 131905                // '{' Integer Comment
     && lk != 132033                // '{' Real Comment
     && lk != 132161                // '{' Comment Comment
     && lk != 135617                // '{' ';' Comment
     && lk != 137921                // '{' 'break' Comment
     && lk != 138177                // '{' 'continue' Comment
     && lk != 164289                // '{' Identifier '!'
     && lk != 164417                // '{' Character '!'
     && lk != 164545                // '{' String '!'
     && lk != 164673                // '{' Integer '!'
     && lk != 164801                // '{' Real '!'
     && lk != 164929                // '{' Comment '!'
     && lk != 168385                // '{' ';' '!'
     && lk != 170689                // '{' 'break' '!'
     && lk != 170945                // '{' 'continue' '!'
     && lk != 295489                // '{' Character '('
     && lk != 295617                // '{' String '('
     && lk != 295745                // '{' Integer '('
     && lk != 295873                // '{' Real '('
     && lk != 296001                // '{' Comment '('
     && lk != 299457                // '{' ';' '('
     && lk != 301761                // '{' 'break' '('
     && lk != 302017                // '{' 'continue' '('
     && lk != 377921                // '{' Comment '+'
     && lk != 381377                // '{' ';' '+'
     && lk != 383681                // '{' 'break' '+'
     && lk != 383937                // '{' 'continue' '+'
     && lk != 394305                // '{' Comment '++'
     && lk != 397761                // '{' ';' '++'
     && lk != 400065                // '{' 'break' '++'
     && lk != 400321                // '{' 'continue' '++'
     && lk != 426433                // '{' Identifier ','
     && lk != 426561                // '{' Character ','
     && lk != 426689                // '{' String ','
     && lk != 426817                // '{' Integer ','
     && lk != 426945                // '{' Real ','
     && lk != 427073                // '{' Comment ','
     && lk != 430529                // '{' ';' ','
     && lk != 432833                // '{' 'break' ','
     && lk != 433089                // '{' 'continue' ','
     && lk != 443457                // '{' Comment '-'
     && lk != 446913                // '{' ';' '-'
     && lk != 449217                // '{' 'break' '-'
     && lk != 449473                // '{' 'continue' '-'
     && lk != 459841                // '{' Comment '--'
     && lk != 463297                // '{' ';' '--'
     && lk != 465601                // '{' 'break' '--'
     && lk != 465857                // '{' 'continue' '--'
     && lk != 541121                // '{' Identifier ':'
     && lk != 541377                // '{' String ':'
     && lk != 573889                // '{' Identifier ';'
     && lk != 574017                // '{' Character ';'
     && lk != 574145                // '{' String ';'
     && lk != 574273                // '{' Integer ';'
     && lk != 574401                // '{' Real ';'
     && lk != 574529                // '{' Comment ';'
     && lk != 577985                // '{' ';' ';'
     && lk != 580289                // '{' 'break' ';'
     && lk != 580545                // '{' 'continue' ';'
     && lk != 803393                // '{' Character '['
     && lk != 803521                // '{' String '['
     && lk != 803649                // '{' Integer '['
     && lk != 803777                // '{' Real '['
     && lk != 803905                // '{' Comment '['
     && lk != 807361                // '{' ';' '['
     && lk != 809665                // '{' 'break' '['
     && lk != 809921                // '{' 'continue' '['
     && lk != 868801                // '{' Identifier 'break'
     && lk != 868929                // '{' Character 'break'
     && lk != 869057                // '{' String 'break'
     && lk != 869185                // '{' Integer 'break'
     && lk != 869313                // '{' Real 'break'
     && lk != 869441                // '{' Comment 'break'
     && lk != 872897                // '{' ';' 'break'
     && lk != 875201                // '{' 'break' 'break'
     && lk != 875457                // '{' 'continue' 'break'
     && lk != 901569                // '{' Identifier 'continue'
     && lk != 901697                // '{' Character 'continue'
     && lk != 901825                // '{' String 'continue'
     && lk != 901953                // '{' Integer 'continue'
     && lk != 902081                // '{' Real 'continue'
     && lk != 902209                // '{' Comment 'continue'
     && lk != 905665                // '{' ';' 'continue'
     && lk != 907969                // '{' 'break' 'continue'
     && lk != 908225                // '{' 'continue' 'continue'
     && lk != 934337                // '{' Identifier 'do'
     && lk != 934465                // '{' Character 'do'
     && lk != 934593                // '{' String 'do'
     && lk != 934721                // '{' Integer 'do'
     && lk != 934849                // '{' Real 'do'
     && lk != 934977                // '{' Comment 'do'
     && lk != 938433                // '{' ';' 'do'
     && lk != 940737                // '{' 'break' 'do'
     && lk != 940993                // '{' 'continue' 'do'
     && lk != 967105                // '{' Identifier 'for'
     && lk != 967233                // '{' Character 'for'
     && lk != 967361                // '{' String 'for'
     && lk != 967489                // '{' Integer 'for'
     && lk != 967617                // '{' Real 'for'
     && lk != 967745                // '{' Comment 'for'
     && lk != 971201                // '{' ';' 'for'
     && lk != 973505                // '{' 'break' 'for'
     && lk != 973761                // '{' 'continue' 'for'
     && lk != 983489                // '{' Identifier 'foreach'
     && lk != 983617                // '{' Character 'foreach'
     && lk != 983745                // '{' String 'foreach'
     && lk != 983873                // '{' Integer 'foreach'
     && lk != 984001                // '{' Real 'foreach'
     && lk != 984129                // '{' Comment 'foreach'
     && lk != 987585                // '{' ';' 'foreach'
     && lk != 989889                // '{' 'break' 'foreach'
     && lk != 990145                // '{' 'continue' 'foreach'
     && lk != 999873                // '{' Identifier 'if'
     && lk != 1000001               // '{' Character 'if'
     && lk != 1000129               // '{' String 'if'
     && lk != 1000257               // '{' Integer 'if'
     && lk != 1000385               // '{' Real 'if'
     && lk != 1000513               // '{' Comment 'if'
     && lk != 1003969               // '{' ';' 'if'
     && lk != 1006273               // '{' 'break' 'if'
     && lk != 1006529               // '{' 'continue' 'if'
     && lk != 1016257               // '{' Identifier 'return'
     && lk != 1016385               // '{' Character 'return'
     && lk != 1016513               // '{' String 'return'
     && lk != 1016641               // '{' Integer 'return'
     && lk != 1016769               // '{' Real 'return'
     && lk != 1016897               // '{' Comment 'return'
     && lk != 1020353               // '{' ';' 'return'
     && lk != 1022657               // '{' 'break' 'return'
     && lk != 1022913               // '{' 'continue' 'return'
     && lk != 1032641               // '{' Identifier 'switch'
     && lk != 1032769               // '{' Character 'switch'
     && lk != 1032897               // '{' String 'switch'
     && lk != 1033025               // '{' Integer 'switch'
     && lk != 1033153               // '{' Real 'switch'
     && lk != 1033281               // '{' Comment 'switch'
     && lk != 1036737               // '{' ';' 'switch'
     && lk != 1039041               // '{' 'break' 'switch'
     && lk != 1039297               // '{' 'continue' 'switch'
     && lk != 1049025               // '{' Identifier 'while'
     && lk != 1049153               // '{' Character 'while'
     && lk != 1049281               // '{' String 'while'
     && lk != 1049409               // '{' Integer 'while'
     && lk != 1049537               // '{' Real 'while'
     && lk != 1049665               // '{' Comment 'while'
     && lk != 1053121               // '{' ';' 'while'
     && lk != 1055425               // '{' 'break' 'while'
     && lk != 1055681               // '{' 'continue' 'while'
     && lk != 1065409               // '{' Identifier '{'
     && lk != 1065537               // '{' Character '{'
     && lk != 1065665               // '{' String '{'
     && lk != 1065793               // '{' Integer '{'
     && lk != 1065921               // '{' Real '{'
     && lk != 1066049               // '{' Comment '{'
     && lk != 1069505               // '{' ';' '{'
     && lk != 1071809               // '{' 'break' '{'
     && lk != 1072065               // '{' 'continue' '{'
     && lk != 1147329               // '{' Identifier '~'
     && lk != 1147457               // '{' Character '~'
     && lk != 1147585               // '{' String '~'
     && lk != 1147713               // '{' Integer '~'
     && lk != 1147841               // '{' Real '~'
     && lk != 1147969               // '{' Comment '~'
     && lk != 1151425               // '{' ';' '~'
     && lk != 1153729               // '{' 'break' '~'
     && lk != 1153985)              // '{' 'continue' '~'
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
          lk = -3;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(0, e0A, -3);
        }
      }
    }
    switch (lk)
    {
    case 8:                         // Comment
      consumeT(8);                  // Comment
      break;
    case -3:
    case 3:                         // Identifier
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
    case 10:                        // '!'
    case 18:                        // '('
    case 23:                        // '+'
    case 24:                        // '++'
    case 27:                        // '-'
    case 28:                        // '--'
    case 49:                        // '['
    case 70:                        // '~'
    case 426433:                    // '{' Identifier ','
    case 426561:                    // '{' Character ','
    case 426689:                    // '{' String ','
    case 426817:                    // '{' Integer ','
    case 426945:                    // '{' Real ','
    case 427073:                    // '{' Comment ','
    case 430529:                    // '{' ';' ','
    case 432833:                    // '{' 'break' ','
    case 433089:                    // '{' 'continue' ','
    case 541121:                    // '{' Identifier ':'
    case 541377:                    // '{' String ':'
      try_Operation();
      break;
    case 35:                        // ';'
    case 53:                        // 'break'
    case 55:                        // 'continue'
    case 57:                        // 'do'
    case 59:                        // 'for'
    case 60:                        // 'foreach'
    case 61:                        // 'if'
    case 62:                        // 'return'
    case 63:                        // 'switch'
    case 64:                        // 'while'
      try_Statement();
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
    consume(65);                    // '{'
    for (;;)
    {
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
      if (l1 == 69)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(69);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(65);                   // '{'
    for (;;)
    {
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
      if (l1 == 69)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(69);                   // '}'
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
      case 12:                      // '#='
      case 14:                      // '%='
      case 17:                      // '&='
      case 22:                      // '*='
      case 25:                      // '+='
      case 29:                      // '-='
      case 32:                      // '/='
      case 34:                      // ':='
      case 38:                      // '<<='
      case 40:                      // '='
      case 45:                      // '>>='
      case 47:                      // '?='
      case 48:                      // '@='
      case 52:                      // '^='
      case 67:                      // '|='
        lookahead2W(15);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 396:                   // '#=' Identifier
        case 398:                   // '%=' Identifier
        case 401:                   // '&=' Identifier
        case 406:                   // '*=' Identifier
        case 409:                   // '+=' Identifier
        case 413:                   // '-=' Identifier
        case 416:                   // '/=' Identifier
        case 418:                   // ':=' Identifier
        case 422:                   // '<<=' Identifier
        case 424:                   // '=' Identifier
        case 429:                   // '>>=' Identifier
        case 431:                   // '?=' Identifier
        case 432:                   // '@=' Identifier
        case 436:                   // '^=' Identifier
        case 451:                   // '|=' Identifier
          lookahead3W(37);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6284:                  // '#=' '['
        case 6286:                  // '%=' '['
        case 6289:                  // '&=' '['
        case 6294:                  // '*=' '['
        case 6297:                  // '+=' '['
        case 6301:                  // '-=' '['
        case 6304:                  // '/=' '['
        case 6306:                  // ':=' '['
        case 6310:                  // '<<=' '['
        case 6312:                  // '=' '['
        case 6317:                  // '>>=' '['
        case 6319:                  // '?=' '['
        case 6320:                  // '@=' '['
        case 6324:                  // '^=' '['
        case 6339:                  // '|=' '['
          lookahead3W(19);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 2316:                  // '#=' '('
        case 8332:                  // '#=' '{'
        case 2318:                  // '%=' '('
        case 8334:                  // '%=' '{'
        case 2321:                  // '&=' '('
        case 8337:                  // '&=' '{'
        case 2326:                  // '*=' '('
        case 8342:                  // '*=' '{'
        case 2329:                  // '+=' '('
        case 8345:                  // '+=' '{'
        case 2333:                  // '-=' '('
        case 8349:                  // '-=' '{'
        case 2336:                  // '/=' '('
        case 8352:                  // '/=' '{'
        case 2338:                  // ':=' '('
        case 8354:                  // ':=' '{'
        case 2342:                  // '<<=' '('
        case 8358:                  // '<<=' '{'
        case 2344:                  // '=' '('
        case 8360:                  // '=' '{'
        case 2349:                  // '>>=' '('
        case 8365:                  // '>>=' '{'
        case 2351:                  // '?=' '('
        case 8367:                  // '?=' '{'
        case 2352:                  // '@=' '('
        case 8368:                  // '@=' '{'
        case 2356:                  // '^=' '('
        case 8372:                  // '^=' '{'
        case 2371:                  // '|=' '('
        case 8387:                  // '|=' '{'
          lookahead3W(16);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 524:                   // '#=' Character
        case 652:                   // '#=' String
        case 780:                   // '#=' Integer
        case 908:                   // '#=' Real
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
        case 557:                   // '>>=' Character
        case 685:                   // '>>=' String
        case 813:                   // '>>=' Integer
        case 941:                   // '>>=' Real
        case 559:                   // '?=' Character
        case 687:                   // '?=' String
        case 815:                   // '?=' Integer
        case 943:                   // '?=' Real
        case 560:                   // '@=' Character
        case 688:                   // '@=' String
        case 816:                   // '@=' Integer
        case 944:                   // '@=' Real
        case 564:                   // '^=' Character
        case 692:                   // '^=' String
        case 820:                   // '^=' Integer
        case 948:                   // '^=' Real
        case 579:                   // '|=' Character
        case 707:                   // '|=' String
        case 835:                   // '|=' Integer
        case 963:                   // '|=' Real
          lookahead3W(36);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1292:                  // '#=' '!'
        case 2956:                  // '#=' '+'
        case 3084:                  // '#=' '++'
        case 3468:                  // '#=' '-'
        case 3596:                  // '#=' '--'
        case 8972:                  // '#=' '~'
        case 1294:                  // '%=' '!'
        case 2958:                  // '%=' '+'
        case 3086:                  // '%=' '++'
        case 3470:                  // '%=' '-'
        case 3598:                  // '%=' '--'
        case 8974:                  // '%=' '~'
        case 1297:                  // '&=' '!'
        case 2961:                  // '&=' '+'
        case 3089:                  // '&=' '++'
        case 3473:                  // '&=' '-'
        case 3601:                  // '&=' '--'
        case 8977:                  // '&=' '~'
        case 1302:                  // '*=' '!'
        case 2966:                  // '*=' '+'
        case 3094:                  // '*=' '++'
        case 3478:                  // '*=' '-'
        case 3606:                  // '*=' '--'
        case 8982:                  // '*=' '~'
        case 1305:                  // '+=' '!'
        case 2969:                  // '+=' '+'
        case 3097:                  // '+=' '++'
        case 3481:                  // '+=' '-'
        case 3609:                  // '+=' '--'
        case 8985:                  // '+=' '~'
        case 1309:                  // '-=' '!'
        case 2973:                  // '-=' '+'
        case 3101:                  // '-=' '++'
        case 3485:                  // '-=' '-'
        case 3613:                  // '-=' '--'
        case 8989:                  // '-=' '~'
        case 1312:                  // '/=' '!'
        case 2976:                  // '/=' '+'
        case 3104:                  // '/=' '++'
        case 3488:                  // '/=' '-'
        case 3616:                  // '/=' '--'
        case 8992:                  // '/=' '~'
        case 1314:                  // ':=' '!'
        case 2978:                  // ':=' '+'
        case 3106:                  // ':=' '++'
        case 3490:                  // ':=' '-'
        case 3618:                  // ':=' '--'
        case 8994:                  // ':=' '~'
        case 1318:                  // '<<=' '!'
        case 2982:                  // '<<=' '+'
        case 3110:                  // '<<=' '++'
        case 3494:                  // '<<=' '-'
        case 3622:                  // '<<=' '--'
        case 8998:                  // '<<=' '~'
        case 1320:                  // '=' '!'
        case 2984:                  // '=' '+'
        case 3112:                  // '=' '++'
        case 3496:                  // '=' '-'
        case 3624:                  // '=' '--'
        case 9000:                  // '=' '~'
        case 1325:                  // '>>=' '!'
        case 2989:                  // '>>=' '+'
        case 3117:                  // '>>=' '++'
        case 3501:                  // '>>=' '-'
        case 3629:                  // '>>=' '--'
        case 9005:                  // '>>=' '~'
        case 1327:                  // '?=' '!'
        case 2991:                  // '?=' '+'
        case 3119:                  // '?=' '++'
        case 3503:                  // '?=' '-'
        case 3631:                  // '?=' '--'
        case 9007:                  // '?=' '~'
        case 1328:                  // '@=' '!'
        case 2992:                  // '@=' '+'
        case 3120:                  // '@=' '++'
        case 3504:                  // '@=' '-'
        case 3632:                  // '@=' '--'
        case 9008:                  // '@=' '~'
        case 1332:                  // '^=' '!'
        case 2996:                  // '^=' '+'
        case 3124:                  // '^=' '++'
        case 3508:                  // '^=' '-'
        case 3636:                  // '^=' '--'
        case 9012:                  // '^=' '~'
        case 1347:                  // '|=' '!'
        case 3011:                  // '|=' '+'
        case 3139:                  // '|=' '++'
        case 3523:                  // '|=' '-'
        case 3651:                  // '|=' '--'
        case 9027:                  // '|=' '~'
          lookahead3W(14);          // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
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
       && lk != 10                  // '!'
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
       && lk != 59                  // 'for'
       && lk != 60                  // 'foreach'
       && lk != 61                  // 'if'
       && lk != 62                  // 'return'
       && lk != 63                  // 'switch'
       && lk != 64                  // 'while'
       && lk != 65                  // '{'
       && lk != 69                  // '}'
       && lk != 70)                 // '~'
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
            case 45:                // '>>='
              consumeT(45);         // '>>='
              break;
            case 17:                // '&='
              consumeT(17);         // '&='
              break;
            case 52:                // '^='
              consumeT(52);         // '^='
              break;
            case 67:                // '|='
              consumeT(67);         // '|='
              break;
            case 47:                // '?='
              consumeT(47);         // '?='
              break;
            case 34:                // ':='
              consumeT(34);         // ':='
              break;
            case 12:                // '#='
              consumeT(12);         // '#='
              break;
            default:
              consumeT(48);         // '@='
            }
            lookahead1W(15);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      case 45:                      // '>>='
        consume(45);                // '>>='
        break;
      case 17:                      // '&='
        consume(17);                // '&='
        break;
      case 52:                      // '^='
        consume(52);                // '^='
        break;
      case 67:                      // '|='
        consume(67);                // '|='
        break;
      case 47:                      // '?='
        consume(47);                // '?='
        break;
      case 34:                      // ':='
        consume(34);                // ':='
        break;
      case 12:                      // '#='
        consume(12);                // '#='
        break;
      default:
        consume(48);                // '@='
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      case 12:                      // '#='
      case 14:                      // '%='
      case 17:                      // '&='
      case 22:                      // '*='
      case 25:                      // '+='
      case 29:                      // '-='
      case 32:                      // '/='
      case 34:                      // ':='
      case 38:                      // '<<='
      case 40:                      // '='
      case 45:                      // '>>='
      case 47:                      // '?='
      case 48:                      // '@='
      case 52:                      // '^='
      case 67:                      // '|='
        lookahead2W(15);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 396:                   // '#=' Identifier
        case 398:                   // '%=' Identifier
        case 401:                   // '&=' Identifier
        case 406:                   // '*=' Identifier
        case 409:                   // '+=' Identifier
        case 413:                   // '-=' Identifier
        case 416:                   // '/=' Identifier
        case 418:                   // ':=' Identifier
        case 422:                   // '<<=' Identifier
        case 424:                   // '=' Identifier
        case 429:                   // '>>=' Identifier
        case 431:                   // '?=' Identifier
        case 432:                   // '@=' Identifier
        case 436:                   // '^=' Identifier
        case 451:                   // '|=' Identifier
          lookahead3W(37);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6284:                  // '#=' '['
        case 6286:                  // '%=' '['
        case 6289:                  // '&=' '['
        case 6294:                  // '*=' '['
        case 6297:                  // '+=' '['
        case 6301:                  // '-=' '['
        case 6304:                  // '/=' '['
        case 6306:                  // ':=' '['
        case 6310:                  // '<<=' '['
        case 6312:                  // '=' '['
        case 6317:                  // '>>=' '['
        case 6319:                  // '?=' '['
        case 6320:                  // '@=' '['
        case 6324:                  // '^=' '['
        case 6339:                  // '|=' '['
          lookahead3W(19);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 2316:                  // '#=' '('
        case 8332:                  // '#=' '{'
        case 2318:                  // '%=' '('
        case 8334:                  // '%=' '{'
        case 2321:                  // '&=' '('
        case 8337:                  // '&=' '{'
        case 2326:                  // '*=' '('
        case 8342:                  // '*=' '{'
        case 2329:                  // '+=' '('
        case 8345:                  // '+=' '{'
        case 2333:                  // '-=' '('
        case 8349:                  // '-=' '{'
        case 2336:                  // '/=' '('
        case 8352:                  // '/=' '{'
        case 2338:                  // ':=' '('
        case 8354:                  // ':=' '{'
        case 2342:                  // '<<=' '('
        case 8358:                  // '<<=' '{'
        case 2344:                  // '=' '('
        case 8360:                  // '=' '{'
        case 2349:                  // '>>=' '('
        case 8365:                  // '>>=' '{'
        case 2351:                  // '?=' '('
        case 8367:                  // '?=' '{'
        case 2352:                  // '@=' '('
        case 8368:                  // '@=' '{'
        case 2356:                  // '^=' '('
        case 8372:                  // '^=' '{'
        case 2371:                  // '|=' '('
        case 8387:                  // '|=' '{'
          lookahead3W(16);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 524:                   // '#=' Character
        case 652:                   // '#=' String
        case 780:                   // '#=' Integer
        case 908:                   // '#=' Real
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
        case 557:                   // '>>=' Character
        case 685:                   // '>>=' String
        case 813:                   // '>>=' Integer
        case 941:                   // '>>=' Real
        case 559:                   // '?=' Character
        case 687:                   // '?=' String
        case 815:                   // '?=' Integer
        case 943:                   // '?=' Real
        case 560:                   // '@=' Character
        case 688:                   // '@=' String
        case 816:                   // '@=' Integer
        case 944:                   // '@=' Real
        case 564:                   // '^=' Character
        case 692:                   // '^=' String
        case 820:                   // '^=' Integer
        case 948:                   // '^=' Real
        case 579:                   // '|=' Character
        case 707:                   // '|=' String
        case 835:                   // '|=' Integer
        case 963:                   // '|=' Real
          lookahead3W(36);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1292:                  // '#=' '!'
        case 2956:                  // '#=' '+'
        case 3084:                  // '#=' '++'
        case 3468:                  // '#=' '-'
        case 3596:                  // '#=' '--'
        case 8972:                  // '#=' '~'
        case 1294:                  // '%=' '!'
        case 2958:                  // '%=' '+'
        case 3086:                  // '%=' '++'
        case 3470:                  // '%=' '-'
        case 3598:                  // '%=' '--'
        case 8974:                  // '%=' '~'
        case 1297:                  // '&=' '!'
        case 2961:                  // '&=' '+'
        case 3089:                  // '&=' '++'
        case 3473:                  // '&=' '-'
        case 3601:                  // '&=' '--'
        case 8977:                  // '&=' '~'
        case 1302:                  // '*=' '!'
        case 2966:                  // '*=' '+'
        case 3094:                  // '*=' '++'
        case 3478:                  // '*=' '-'
        case 3606:                  // '*=' '--'
        case 8982:                  // '*=' '~'
        case 1305:                  // '+=' '!'
        case 2969:                  // '+=' '+'
        case 3097:                  // '+=' '++'
        case 3481:                  // '+=' '-'
        case 3609:                  // '+=' '--'
        case 8985:                  // '+=' '~'
        case 1309:                  // '-=' '!'
        case 2973:                  // '-=' '+'
        case 3101:                  // '-=' '++'
        case 3485:                  // '-=' '-'
        case 3613:                  // '-=' '--'
        case 8989:                  // '-=' '~'
        case 1312:                  // '/=' '!'
        case 2976:                  // '/=' '+'
        case 3104:                  // '/=' '++'
        case 3488:                  // '/=' '-'
        case 3616:                  // '/=' '--'
        case 8992:                  // '/=' '~'
        case 1314:                  // ':=' '!'
        case 2978:                  // ':=' '+'
        case 3106:                  // ':=' '++'
        case 3490:                  // ':=' '-'
        case 3618:                  // ':=' '--'
        case 8994:                  // ':=' '~'
        case 1318:                  // '<<=' '!'
        case 2982:                  // '<<=' '+'
        case 3110:                  // '<<=' '++'
        case 3494:                  // '<<=' '-'
        case 3622:                  // '<<=' '--'
        case 8998:                  // '<<=' '~'
        case 1320:                  // '=' '!'
        case 2984:                  // '=' '+'
        case 3112:                  // '=' '++'
        case 3496:                  // '=' '-'
        case 3624:                  // '=' '--'
        case 9000:                  // '=' '~'
        case 1325:                  // '>>=' '!'
        case 2989:                  // '>>=' '+'
        case 3117:                  // '>>=' '++'
        case 3501:                  // '>>=' '-'
        case 3629:                  // '>>=' '--'
        case 9005:                  // '>>=' '~'
        case 1327:                  // '?=' '!'
        case 2991:                  // '?=' '+'
        case 3119:                  // '?=' '++'
        case 3503:                  // '?=' '-'
        case 3631:                  // '?=' '--'
        case 9007:                  // '?=' '~'
        case 1328:                  // '@=' '!'
        case 2992:                  // '@=' '+'
        case 3120:                  // '@=' '++'
        case 3504:                  // '@=' '-'
        case 3632:                  // '@=' '--'
        case 9008:                  // '@=' '~'
        case 1332:                  // '^=' '!'
        case 2996:                  // '^=' '+'
        case 3124:                  // '^=' '++'
        case 3508:                  // '^=' '-'
        case 3636:                  // '^=' '--'
        case 9012:                  // '^=' '~'
        case 1347:                  // '|=' '!'
        case 3011:                  // '|=' '+'
        case 3139:                  // '|=' '++'
        case 3523:                  // '|=' '-'
        case 3651:                  // '|=' '--'
        case 9027:                  // '|=' '~'
          lookahead3W(14);          // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
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
       && lk != 10                  // '!'
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
       && lk != 59                  // 'for'
       && lk != 60                  // 'foreach'
       && lk != 61                  // 'if'
       && lk != 62                  // 'return'
       && lk != 63                  // 'switch'
       && lk != 64                  // 'while'
       && lk != 65                  // '{'
       && lk != 69                  // '}'
       && lk != 70)                 // '~'
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
            case 45:                // '>>='
              consumeT(45);         // '>>='
              break;
            case 17:                // '&='
              consumeT(17);         // '&='
              break;
            case 52:                // '^='
              consumeT(52);         // '^='
              break;
            case 67:                // '|='
              consumeT(67);         // '|='
              break;
            case 47:                // '?='
              consumeT(47);         // '?='
              break;
            case 34:                // ':='
              consumeT(34);         // ':='
              break;
            case 12:                // '#='
              consumeT(12);         // '#='
              break;
            default:
              consumeT(48);         // '@='
            }
            lookahead1W(15);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      case 45:                      // '>>='
        consumeT(45);               // '>>='
        break;
      case 17:                      // '&='
        consumeT(17);               // '&='
        break;
      case 52:                      // '^='
        consumeT(52);               // '^='
        break;
      case 67:                      // '|='
        consumeT(67);               // '|='
        break;
      case 47:                      // '?='
        consumeT(47);               // '?='
        break;
      case 34:                      // ':='
        consumeT(34);               // ':='
        break;
      case 12:                      // '#='
        consumeT(12);               // '#='
        break;
      default:
        consumeT(48);               // '@='
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_ConditionalExpression();
    }
  }

  function parse_ConditionalExpression()
  {
    eventHandler.startNonterminal("ConditionalExpression", e0);
    parse_LogicalORExpression();
    if (l1 == 46)                   // '?'
    {
      consume(46);                  // '?'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
      consume(33);                  // ':'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
    }
    eventHandler.endNonterminal("ConditionalExpression", e0);
  }

  function try_ConditionalExpression()
  {
    try_LogicalORExpression();
    if (l1 == 46)                   // '?'
    {
      consumeT(46);                 // '?'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_VariableAssignment();
      consumeT(33);                 // ':'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (l1 != 68)                 // '||'
      {
        break;
      }
      consume(68);                  // '||'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (l1 != 68)                 // '||'
      {
        break;
      }
      consumeT(68);                 // '||'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (l1 != 66)                 // '|'
      {
        break;
      }
      consume(66);                  // '|'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (l1 != 66)                 // '|'
      {
        break;
      }
      consumeT(66);                 // '|'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (l1 != 11                  // '!='
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
        consume(11);                // '!='
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (l1 != 11                  // '!='
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
        consumeT(11);               // '!='
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
       && l1 != 42                  // '>'
       && l1 != 43)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 36:                      // '<'
        consume(36);                // '<'
        break;
      case 42:                      // '>'
        consume(42);                // '>'
        break;
      case 39:                      // '<='
        consume(39);                // '<='
        break;
      default:
        consume(43);                // '>='
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
       && l1 != 42                  // '>'
       && l1 != 43)                 // '>='
      {
        break;
      }
      switch (l1)
      {
      case 36:                      // '<'
        consumeT(36);               // '<'
        break;
      case 42:                      // '>'
        consumeT(42);               // '>'
        break;
      case 39:                      // '<='
        consumeT(39);               // '<='
        break;
      default:
        consumeT(43);               // '>='
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
       && l1 != 44)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 37:                      // '<<'
        consume(37);                // '<<'
        break;
      default:
        consume(44);                // '>>'
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
       && l1 != 44)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 37:                      // '<<'
        consumeT(37);               // '<<'
        break;
      default:
        consumeT(44);               // '>>'
      }
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
        lookahead2W(15);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 407:                   // '+' Identifier
        case 411:                   // '-' Identifier
          lookahead3W(37);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6295:                  // '+' '['
        case 6299:                  // '-' '['
          lookahead3W(19);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 2327:                  // '+' '('
        case 8343:                  // '+' '{'
        case 2331:                  // '-' '('
        case 8347:                  // '-' '{'
          lookahead3W(16);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 535:                   // '+' Character
        case 663:                   // '+' String
        case 791:                   // '+' Integer
        case 919:                   // '+' Real
        case 539:                   // '-' Character
        case 667:                   // '-' String
        case 795:                   // '-' Integer
        case 923:                   // '-' Real
          lookahead3W(36);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 10                  // '!'
       && lk != 11                  // '!='
       && lk != 12                  // '#='
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
       && lk != 42                  // '>'
       && lk != 43                  // '>='
       && lk != 44                  // '>>'
       && lk != 45                  // '>>='
       && lk != 46                  // '?'
       && lk != 47                  // '?='
       && lk != 48                  // '@='
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
       && lk != 59                  // 'for'
       && lk != 60                  // 'foreach'
       && lk != 61                  // 'if'
       && lk != 62                  // 'return'
       && lk != 63                  // 'switch'
       && lk != 64                  // 'while'
       && lk != 65                  // '{'
       && lk != 66                  // '|'
       && lk != 67                  // '|='
       && lk != 68                  // '||'
       && lk != 69                  // '}'
       && lk != 70                  // '~'
       && lk != 1303                // '+' '!'
       && lk != 1307                // '-' '!'
       && lk != 2967                // '+' '+'
       && lk != 2971                // '-' '+'
       && lk != 3095                // '+' '++'
       && lk != 3099                // '-' '++'
       && lk != 3479                // '+' '-'
       && lk != 3483                // '-' '-'
       && lk != 3607                // '+' '--'
       && lk != 3611                // '-' '--'
       && lk != 8983                // '+' '~'
       && lk != 8987                // '-' '~'
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
            lookahead1W(15);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (lk == -2
       || lk == 1                   // END
       || lk == 3                   // Identifier
       || lk == 4                   // Character
       || lk == 5                   // String
       || lk == 6                   // Integer
       || lk == 7                   // Real
       || lk == 8                   // Comment
       || lk == 10                  // '!'
       || lk == 11                  // '!='
       || lk == 12                  // '#='
       || lk == 14                  // '%='
       || lk == 15                  // '&'
       || lk == 16                  // '&&'
       || lk == 17                  // '&='
       || lk == 18                  // '('
       || lk == 19                  // ')'
       || lk == 22                  // '*='
       || lk == 24                  // '++'
       || lk == 25                  // '+='
       || lk == 26                  // ','
       || lk == 28                  // '--'
       || lk == 29                  // '-='
       || lk == 32                  // '/='
       || lk == 33                  // ':'
       || lk == 34                  // ':='
       || lk == 35                  // ';'
       || lk == 36                  // '<'
       || lk == 37                  // '<<'
       || lk == 38                  // '<<='
       || lk == 39                  // '<='
       || lk == 40                  // '='
       || lk == 41                  // '=='
       || lk == 42                  // '>'
       || lk == 43                  // '>='
       || lk == 44                  // '>>'
       || lk == 45                  // '>>='
       || lk == 46                  // '?'
       || lk == 47                  // '?='
       || lk == 48                  // '@='
       || lk == 49                  // '['
       || lk == 50                  // ']'
       || lk == 51                  // '^'
       || lk == 52                  // '^='
       || lk == 53                  // 'break'
       || lk == 54                  // 'case'
       || lk == 55                  // 'continue'
       || lk == 56                  // 'default'
       || lk == 57                  // 'do'
       || lk == 58                  // 'else'
       || lk == 59                  // 'for'
       || lk == 60                  // 'foreach'
       || lk == 61                  // 'if'
       || lk == 62                  // 'return'
       || lk == 63                  // 'switch'
       || lk == 64                  // 'while'
       || lk == 65                  // '{'
       || lk == 66                  // '|'
       || lk == 67                  // '|='
       || lk == 68                  // '||'
       || lk == 69                  // '}'
       || lk == 70)                 // '~'
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
        lookahead2W(15);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
                                    // '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 407:                   // '+' Identifier
        case 411:                   // '-' Identifier
          lookahead3W(37);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 6295:                  // '+' '['
        case 6299:                  // '-' '['
          lookahead3W(19);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 2327:                  // '+' '('
        case 8343:                  // '+' '{'
        case 2331:                  // '-' '('
        case 8347:                  // '-' '{'
          lookahead3W(16);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          break;
        case 535:                   // '+' Character
        case 663:                   // '+' String
        case 791:                   // '+' Integer
        case 919:                   // '+' Real
        case 539:                   // '-' Character
        case 667:                   // '-' String
        case 795:                   // '-' Integer
        case 923:                   // '-' Real
          lookahead3W(36);          // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 10                  // '!'
       && lk != 11                  // '!='
       && lk != 12                  // '#='
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
       && lk != 42                  // '>'
       && lk != 43                  // '>='
       && lk != 44                  // '>>'
       && lk != 45                  // '>>='
       && lk != 46                  // '?'
       && lk != 47                  // '?='
       && lk != 48                  // '@='
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
       && lk != 59                  // 'for'
       && lk != 60                  // 'foreach'
       && lk != 61                  // 'if'
       && lk != 62                  // 'return'
       && lk != 63                  // 'switch'
       && lk != 64                  // 'while'
       && lk != 65                  // '{'
       && lk != 66                  // '|'
       && lk != 67                  // '|='
       && lk != 68                  // '||'
       && lk != 69                  // '}'
       && lk != 70                  // '~'
       && lk != 1303                // '+' '!'
       && lk != 1307                // '-' '!'
       && lk != 2967                // '+' '+'
       && lk != 2971                // '-' '+'
       && lk != 3095                // '+' '++'
       && lk != 3099                // '-' '++'
       && lk != 3479                // '+' '-'
       && lk != 3483                // '-' '-'
       && lk != 3607                // '+' '--'
       && lk != 3611                // '-' '--'
       && lk != 8983                // '+' '~'
       && lk != 8987                // '-' '~'
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
            lookahead1W(15);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      if (lk == -2
       || lk == 1                   // END
       || lk == 3                   // Identifier
       || lk == 4                   // Character
       || lk == 5                   // String
       || lk == 6                   // Integer
       || lk == 7                   // Real
       || lk == 8                   // Comment
       || lk == 10                  // '!'
       || lk == 11                  // '!='
       || lk == 12                  // '#='
       || lk == 14                  // '%='
       || lk == 15                  // '&'
       || lk == 16                  // '&&'
       || lk == 17                  // '&='
       || lk == 18                  // '('
       || lk == 19                  // ')'
       || lk == 22                  // '*='
       || lk == 24                  // '++'
       || lk == 25                  // '+='
       || lk == 26                  // ','
       || lk == 28                  // '--'
       || lk == 29                  // '-='
       || lk == 32                  // '/='
       || lk == 33                  // ':'
       || lk == 34                  // ':='
       || lk == 35                  // ';'
       || lk == 36                  // '<'
       || lk == 37                  // '<<'
       || lk == 38                  // '<<='
       || lk == 39                  // '<='
       || lk == 40                  // '='
       || lk == 41                  // '=='
       || lk == 42                  // '>'
       || lk == 43                  // '>='
       || lk == 44                  // '>>'
       || lk == 45                  // '>>='
       || lk == 46                  // '?'
       || lk == 47                  // '?='
       || lk == 48                  // '@='
       || lk == 49                  // '['
       || lk == 50                  // ']'
       || lk == 51                  // '^'
       || lk == 52                  // '^='
       || lk == 53                  // 'break'
       || lk == 54                  // 'case'
       || lk == 55                  // 'continue'
       || lk == 56                  // 'default'
       || lk == 57                  // 'do'
       || lk == 58                  // 'else'
       || lk == 59                  // 'for'
       || lk == 60                  // 'foreach'
       || lk == 61                  // 'if'
       || lk == 62                  // 'return'
       || lk == 63                  // 'switch'
       || lk == 64                  // 'while'
       || lk == 65                  // '{'
       || lk == 66                  // '|'
       || lk == 67                  // '|='
       || lk == 68                  // '||'
       || lk == 69                  // '}'
       || lk == 70)                 // '~'
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(36);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      if (l1 != 21)                 // '**'
      {
        break;
      }
      consume(21);                  // '**'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead1W(36);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      if (l1 != 21)                 // '**'
      {
        break;
      }
      consumeT(21);                 // '**'
      lookahead1W(15);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '!' | '(' |
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
      lookahead2W(37);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(18);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 3843:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6275:                    // Identifier '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 3075:                    // Identifier '++'
      case 3587:                    // Identifier '--'
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 18:                        // '('
      lookahead2W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 402:                     // '(' Identifier
        lookahead3W(30);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '@=' | '[' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 6290:                    // '(' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8338:                    // '(' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 2322:                    // '(' '('
      case 7314:                    // '(' 'do'
      case 7954:                    // '(' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 530:                     // '(' Character
      case 658:                     // '(' String
      case 786:                     // '(' Integer
      case 914:                     // '(' Real
        lookahead3W(26);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 1042:                    // '(' Comment
      case 4498:                    // '(' ';'
      case 6802:                    // '(' 'break'
      case 7058:                    // '(' 'continue'
        lookahead3W(2);             // WhiteSpace^token | ')'
        break;
      case 7570:                    // '(' 'for'
      case 7698:                    // '(' 'foreach'
      case 7826:                    // '(' 'if'
      case 8082:                    // '(' 'switch'
      case 8210:                    // '(' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1298:                    // '(' '!'
      case 2962:                    // '(' '+'
      case 3090:                    // '(' '++'
      case 3474:                    // '(' '-'
      case 3602:                    // '(' '--'
      case 8978:                    // '(' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 49:                        // '['
      lookahead2W(19);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 433:                     // '[' Identifier
        lookahead3W(32);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 4529:                    // '[' ';'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
        break;
      case 6321:                    // '[' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 6449:                    // '[' ']'
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 8369:                    // '[' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 1073:                    // '[' Comment
      case 6833:                    // '[' 'break'
      case 7089:                    // '[' 'continue'
        lookahead3W(13);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 2353:                    // '[' '('
      case 7345:                    // '[' 'do'
      case 7985:                    // '[' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 561:                     // '[' Character
      case 689:                     // '[' String
      case 817:                     // '[' Integer
      case 945:                     // '[' Real
        lookahead3W(29);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 7601:                    // '[' 'for'
      case 7729:                    // '[' 'foreach'
      case 7857:                    // '[' 'if'
      case 8113:                    // '[' 'switch'
      case 8241:                    // '[' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1329:                    // '[' '!'
      case 2993:                    // '[' '+'
      case 3121:                    // '[' '++'
      case 3505:                    // '[' '-'
      case 3633:                    // '[' '--'
      case 9009:                    // '[' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 65:                        // '{'
      lookahead2W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 449:                     // '{' Identifier
        lookahead3W(31);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 705:                     // '{' String
        lookahead3W(28);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6337:                    // '{' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8385:                    // '{' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 577:                     // '{' Character
      case 833:                     // '{' Integer
      case 961:                     // '{' Real
        lookahead3W(27);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 2369:                    // '{' '('
      case 7361:                    // '{' 'do'
      case 8001:                    // '{' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 1089:                    // '{' Comment
      case 4545:                    // '{' ';'
      case 6849:                    // '{' 'break'
      case 7105:                    // '{' 'continue'
        lookahead3W(11);            // WhiteSpace^token | ',' | '}'
        break;
      case 7617:                    // '{' 'for'
      case 7745:                    // '{' 'foreach'
      case 7873:                    // '{' 'if'
      case 8129:                    // '{' 'switch'
      case 8257:                    // '{' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1345:                    // '{' '!'
      case 3009:                    // '{' '+'
      case 3137:                    // '{' '++'
      case 3521:                    // '{' '-'
      case 3649:                    // '{' '--'
      case 9025:                    // '{' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
      lookahead2W(36);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 10                    // '!'
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 70                    // '~'
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
     && lk != 1283                  // Identifier '!'
     && lk != 1284                  // Character '!'
     && lk != 1285                  // String '!'
     && lk != 1286                  // Integer '!'
     && lk != 1287                  // Real '!'
     && lk != 1411                  // Identifier '!='
     && lk != 1412                  // Character '!='
     && lk != 1413                  // String '!='
     && lk != 1414                  // Integer '!='
     && lk != 1415                  // Real '!='
     && lk != 1539                  // Identifier '#='
     && lk != 1540                  // Character '#='
     && lk != 1541                  // String '#='
     && lk != 1542                  // Integer '#='
     && lk != 1543                  // Real '#='
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
     && lk != 5379                  // Identifier '>'
     && lk != 5380                  // Character '>'
     && lk != 5381                  // String '>'
     && lk != 5382                  // Integer '>'
     && lk != 5383                  // Real '>'
     && lk != 5507                  // Identifier '>='
     && lk != 5508                  // Character '>='
     && lk != 5509                  // String '>='
     && lk != 5510                  // Integer '>='
     && lk != 5511                  // Real '>='
     && lk != 5635                  // Identifier '>>'
     && lk != 5636                  // Character '>>'
     && lk != 5637                  // String '>>'
     && lk != 5638                  // Integer '>>'
     && lk != 5639                  // Real '>>'
     && lk != 5763                  // Identifier '>>='
     && lk != 5764                  // Character '>>='
     && lk != 5765                  // String '>>='
     && lk != 5766                  // Integer '>>='
     && lk != 5767                  // Real '>>='
     && lk != 5891                  // Identifier '?'
     && lk != 5892                  // Character '?'
     && lk != 5893                  // String '?'
     && lk != 5894                  // Integer '?'
     && lk != 5895                  // Real '?'
     && lk != 6019                  // Identifier '?='
     && lk != 6020                  // Character '?='
     && lk != 6021                  // String '?='
     && lk != 6022                  // Integer '?='
     && lk != 6023                  // Real '?='
     && lk != 6147                  // Identifier '@='
     && lk != 6148                  // Character '@='
     && lk != 6149                  // String '@='
     && lk != 6150                  // Integer '@='
     && lk != 6151                  // Real '@='
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
     && lk != 7555                  // Identifier 'for'
     && lk != 7556                  // Character 'for'
     && lk != 7557                  // String 'for'
     && lk != 7558                  // Integer 'for'
     && lk != 7559                  // Real 'for'
     && lk != 7683                  // Identifier 'foreach'
     && lk != 7684                  // Character 'foreach'
     && lk != 7685                  // String 'foreach'
     && lk != 7686                  // Integer 'foreach'
     && lk != 7687                  // Real 'foreach'
     && lk != 7811                  // Identifier 'if'
     && lk != 7812                  // Character 'if'
     && lk != 7813                  // String 'if'
     && lk != 7814                  // Integer 'if'
     && lk != 7815                  // Real 'if'
     && lk != 7939                  // Identifier 'return'
     && lk != 7940                  // Character 'return'
     && lk != 7941                  // String 'return'
     && lk != 7942                  // Integer 'return'
     && lk != 7943                  // Real 'return'
     && lk != 8067                  // Identifier 'switch'
     && lk != 8068                  // Character 'switch'
     && lk != 8069                  // String 'switch'
     && lk != 8070                  // Integer 'switch'
     && lk != 8071                  // Real 'switch'
     && lk != 8195                  // Identifier 'while'
     && lk != 8196                  // Character 'while'
     && lk != 8197                  // String 'while'
     && lk != 8198                  // Integer 'while'
     && lk != 8199                  // Real 'while'
     && lk != 8323                  // Identifier '{'
     && lk != 8324                  // Character '{'
     && lk != 8325                  // String '{'
     && lk != 8326                  // Integer '{'
     && lk != 8327                  // Real '{'
     && lk != 8451                  // Identifier '|'
     && lk != 8452                  // Character '|'
     && lk != 8453                  // String '|'
     && lk != 8454                  // Integer '|'
     && lk != 8455                  // Real '|'
     && lk != 8579                  // Identifier '|='
     && lk != 8580                  // Character '|='
     && lk != 8581                  // String '|='
     && lk != 8582                  // Integer '|='
     && lk != 8583                  // Real '|='
     && lk != 8707                  // Identifier '||'
     && lk != 8708                  // Character '||'
     && lk != 8709                  // String '||'
     && lk != 8710                  // Integer '||'
     && lk != 8711                  // Real '||'
     && lk != 8835                  // Identifier '}'
     && lk != 8836                  // Character '}'
     && lk != 8837                  // String '}'
     && lk != 8838                  // Integer '}'
     && lk != 8839                  // Real '}'
     && lk != 8963                  // Identifier '~'
     && lk != 8964                  // Character '~'
     && lk != 8965                  // String '~'
     && lk != 8966                  // Integer '~'
     && lk != 8967                  // Real '~'
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
     && lk != 166915                // Identifier '++' '!'
     && lk != 166916                // Character '++' '!'
     && lk != 166917                // String '++' '!'
     && lk != 166918                // Integer '++' '!'
     && lk != 166919                // Real '++' '!'
     && lk != 167427                // Identifier '--' '!'
     && lk != 167428                // Character '--' '!'
     && lk != 167429                // String '--' '!'
     && lk != 167430                // Integer '--' '!'
     && lk != 167431                // Real '--' '!'
     && lk != 170289                // '[' ']' '!'
     && lk != 183299                // Identifier '++' '!='
     && lk != 183300                // Character '++' '!='
     && lk != 183301                // String '++' '!='
     && lk != 183302                // Integer '++' '!='
     && lk != 183303                // Real '++' '!='
     && lk != 183811                // Identifier '--' '!='
     && lk != 183812                // Character '--' '!='
     && lk != 183813                // String '--' '!='
     && lk != 183814                // Integer '--' '!='
     && lk != 183815                // Real '--' '!='
     && lk != 186673                // '[' ']' '!='
     && lk != 199683                // Identifier '++' '#='
     && lk != 199684                // Character '++' '#='
     && lk != 199685                // String '++' '#='
     && lk != 199686                // Integer '++' '#='
     && lk != 199687                // Real '++' '#='
     && lk != 200195                // Identifier '--' '#='
     && lk != 200196                // Character '--' '#='
     && lk != 200197                // String '--' '#='
     && lk != 200198                // Integer '--' '#='
     && lk != 200199                // Real '--' '#='
     && lk != 203057                // '[' ']' '#='
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
     && lk != 691203                // Identifier '++' '>'
     && lk != 691204                // Character '++' '>'
     && lk != 691205                // String '++' '>'
     && lk != 691206                // Integer '++' '>'
     && lk != 691207                // Real '++' '>'
     && lk != 691715                // Identifier '--' '>'
     && lk != 691716                // Character '--' '>'
     && lk != 691717                // String '--' '>'
     && lk != 691718                // Integer '--' '>'
     && lk != 691719                // Real '--' '>'
     && lk != 694577                // '[' ']' '>'
     && lk != 707587                // Identifier '++' '>='
     && lk != 707588                // Character '++' '>='
     && lk != 707589                // String '++' '>='
     && lk != 707590                // Integer '++' '>='
     && lk != 707591                // Real '++' '>='
     && lk != 708099                // Identifier '--' '>='
     && lk != 708100                // Character '--' '>='
     && lk != 708101                // String '--' '>='
     && lk != 708102                // Integer '--' '>='
     && lk != 708103                // Real '--' '>='
     && lk != 710961                // '[' ']' '>='
     && lk != 723971                // Identifier '++' '>>'
     && lk != 723972                // Character '++' '>>'
     && lk != 723973                // String '++' '>>'
     && lk != 723974                // Integer '++' '>>'
     && lk != 723975                // Real '++' '>>'
     && lk != 724483                // Identifier '--' '>>'
     && lk != 724484                // Character '--' '>>'
     && lk != 724485                // String '--' '>>'
     && lk != 724486                // Integer '--' '>>'
     && lk != 724487                // Real '--' '>>'
     && lk != 727345                // '[' ']' '>>'
     && lk != 740355                // Identifier '++' '>>='
     && lk != 740356                // Character '++' '>>='
     && lk != 740357                // String '++' '>>='
     && lk != 740358                // Integer '++' '>>='
     && lk != 740359                // Real '++' '>>='
     && lk != 740867                // Identifier '--' '>>='
     && lk != 740868                // Character '--' '>>='
     && lk != 740869                // String '--' '>>='
     && lk != 740870                // Integer '--' '>>='
     && lk != 740871                // Real '--' '>>='
     && lk != 743729                // '[' ']' '>>='
     && lk != 756739                // Identifier '++' '?'
     && lk != 756740                // Character '++' '?'
     && lk != 756741                // String '++' '?'
     && lk != 756742                // Integer '++' '?'
     && lk != 756743                // Real '++' '?'
     && lk != 757251                // Identifier '--' '?'
     && lk != 757252                // Character '--' '?'
     && lk != 757253                // String '--' '?'
     && lk != 757254                // Integer '--' '?'
     && lk != 757255                // Real '--' '?'
     && lk != 760113                // '[' ']' '?'
     && lk != 773123                // Identifier '++' '?='
     && lk != 773124                // Character '++' '?='
     && lk != 773125                // String '++' '?='
     && lk != 773126                // Integer '++' '?='
     && lk != 773127                // Real '++' '?='
     && lk != 773635                // Identifier '--' '?='
     && lk != 773636                // Character '--' '?='
     && lk != 773637                // String '--' '?='
     && lk != 773638                // Integer '--' '?='
     && lk != 773639                // Real '--' '?='
     && lk != 776497                // '[' ']' '?='
     && lk != 789507                // Identifier '++' '@='
     && lk != 789508                // Character '++' '@='
     && lk != 789509                // String '++' '@='
     && lk != 789510                // Integer '++' '@='
     && lk != 789511                // Real '++' '@='
     && lk != 790019                // Identifier '--' '@='
     && lk != 790020                // Character '--' '@='
     && lk != 790021                // String '--' '@='
     && lk != 790022                // Integer '--' '@='
     && lk != 790023                // Real '--' '@='
     && lk != 792881                // '[' ']' '@='
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
     && lk != 969731                // Identifier '++' 'for'
     && lk != 969732                // Character '++' 'for'
     && lk != 969733                // String '++' 'for'
     && lk != 969734                // Integer '++' 'for'
     && lk != 969735                // Real '++' 'for'
     && lk != 970243                // Identifier '--' 'for'
     && lk != 970244                // Character '--' 'for'
     && lk != 970245                // String '--' 'for'
     && lk != 970246                // Integer '--' 'for'
     && lk != 970247                // Real '--' 'for'
     && lk != 973105                // '[' ']' 'for'
     && lk != 986115                // Identifier '++' 'foreach'
     && lk != 986116                // Character '++' 'foreach'
     && lk != 986117                // String '++' 'foreach'
     && lk != 986118                // Integer '++' 'foreach'
     && lk != 986119                // Real '++' 'foreach'
     && lk != 986627                // Identifier '--' 'foreach'
     && lk != 986628                // Character '--' 'foreach'
     && lk != 986629                // String '--' 'foreach'
     && lk != 986630                // Integer '--' 'foreach'
     && lk != 986631                // Real '--' 'foreach'
     && lk != 989489                // '[' ']' 'foreach'
     && lk != 1002499               // Identifier '++' 'if'
     && lk != 1002500               // Character '++' 'if'
     && lk != 1002501               // String '++' 'if'
     && lk != 1002502               // Integer '++' 'if'
     && lk != 1002503               // Real '++' 'if'
     && lk != 1003011               // Identifier '--' 'if'
     && lk != 1003012               // Character '--' 'if'
     && lk != 1003013               // String '--' 'if'
     && lk != 1003014               // Integer '--' 'if'
     && lk != 1003015               // Real '--' 'if'
     && lk != 1005873               // '[' ']' 'if'
     && lk != 1018883               // Identifier '++' 'return'
     && lk != 1018884               // Character '++' 'return'
     && lk != 1018885               // String '++' 'return'
     && lk != 1018886               // Integer '++' 'return'
     && lk != 1018887               // Real '++' 'return'
     && lk != 1019395               // Identifier '--' 'return'
     && lk != 1019396               // Character '--' 'return'
     && lk != 1019397               // String '--' 'return'
     && lk != 1019398               // Integer '--' 'return'
     && lk != 1019399               // Real '--' 'return'
     && lk != 1022257               // '[' ']' 'return'
     && lk != 1035267               // Identifier '++' 'switch'
     && lk != 1035268               // Character '++' 'switch'
     && lk != 1035269               // String '++' 'switch'
     && lk != 1035270               // Integer '++' 'switch'
     && lk != 1035271               // Real '++' 'switch'
     && lk != 1035779               // Identifier '--' 'switch'
     && lk != 1035780               // Character '--' 'switch'
     && lk != 1035781               // String '--' 'switch'
     && lk != 1035782               // Integer '--' 'switch'
     && lk != 1035783               // Real '--' 'switch'
     && lk != 1038641               // '[' ']' 'switch'
     && lk != 1051651               // Identifier '++' 'while'
     && lk != 1051652               // Character '++' 'while'
     && lk != 1051653               // String '++' 'while'
     && lk != 1051654               // Integer '++' 'while'
     && lk != 1051655               // Real '++' 'while'
     && lk != 1052163               // Identifier '--' 'while'
     && lk != 1052164               // Character '--' 'while'
     && lk != 1052165               // String '--' 'while'
     && lk != 1052166               // Integer '--' 'while'
     && lk != 1052167               // Real '--' 'while'
     && lk != 1055025               // '[' ']' 'while'
     && lk != 1071409               // '[' ']' '{'
     && lk != 1084419               // Identifier '++' '|'
     && lk != 1084420               // Character '++' '|'
     && lk != 1084421               // String '++' '|'
     && lk != 1084422               // Integer '++' '|'
     && lk != 1084423               // Real '++' '|'
     && lk != 1084931               // Identifier '--' '|'
     && lk != 1084932               // Character '--' '|'
     && lk != 1084933               // String '--' '|'
     && lk != 1084934               // Integer '--' '|'
     && lk != 1084935               // Real '--' '|'
     && lk != 1087793               // '[' ']' '|'
     && lk != 1100803               // Identifier '++' '|='
     && lk != 1100804               // Character '++' '|='
     && lk != 1100805               // String '++' '|='
     && lk != 1100806               // Integer '++' '|='
     && lk != 1100807               // Real '++' '|='
     && lk != 1101315               // Identifier '--' '|='
     && lk != 1101316               // Character '--' '|='
     && lk != 1101317               // String '--' '|='
     && lk != 1101318               // Integer '--' '|='
     && lk != 1101319               // Real '--' '|='
     && lk != 1104177               // '[' ']' '|='
     && lk != 1117187               // Identifier '++' '||'
     && lk != 1117188               // Character '++' '||'
     && lk != 1117189               // String '++' '||'
     && lk != 1117190               // Integer '++' '||'
     && lk != 1117191               // Real '++' '||'
     && lk != 1117699               // Identifier '--' '||'
     && lk != 1117700               // Character '--' '||'
     && lk != 1117701               // String '--' '||'
     && lk != 1117702               // Integer '--' '||'
     && lk != 1117703               // Real '--' '||'
     && lk != 1120561               // '[' ']' '||'
     && lk != 1133571               // Identifier '++' '}'
     && lk != 1133572               // Character '++' '}'
     && lk != 1133573               // String '++' '}'
     && lk != 1133574               // Integer '++' '}'
     && lk != 1133575               // Real '++' '}'
     && lk != 1134083               // Identifier '--' '}'
     && lk != 1134084               // Character '--' '}'
     && lk != 1134085               // String '--' '}'
     && lk != 1134086               // Integer '--' '}'
     && lk != 1134087               // Real '--' '}'
     && lk != 1136945               // '[' ']' '}'
     && lk != 1149955               // Identifier '++' '~'
     && lk != 1149956               // Character '++' '~'
     && lk != 1149957               // String '++' '~'
     && lk != 1149958               // Integer '++' '~'
     && lk != 1149959               // Real '++' '~'
     && lk != 1150467               // Identifier '--' '~'
     && lk != 1150468               // Character '--' '~'
     && lk != 1150469               // String '--' '~'
     && lk != 1150470               // Integer '--' '~'
     && lk != 1150471               // Real '--' '~'
     && lk != 1153329)              // '[' ']' '~'
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
            lookahead1W(3);         // WhiteSpace^token | '++'
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
    case 166915:                    // Identifier '++' '!'
    case 166916:                    // Character '++' '!'
    case 166917:                    // String '++' '!'
    case 166918:                    // Integer '++' '!'
    case 166919:                    // Real '++' '!'
    case 183299:                    // Identifier '++' '!='
    case 183300:                    // Character '++' '!='
    case 183301:                    // String '++' '!='
    case 183302:                    // Integer '++' '!='
    case 183303:                    // Real '++' '!='
    case 199683:                    // Identifier '++' '#='
    case 199684:                    // Character '++' '#='
    case 199685:                    // String '++' '#='
    case 199686:                    // Integer '++' '#='
    case 199687:                    // Real '++' '#='
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
    case 691203:                    // Identifier '++' '>'
    case 691204:                    // Character '++' '>'
    case 691205:                    // String '++' '>'
    case 691206:                    // Integer '++' '>'
    case 691207:                    // Real '++' '>'
    case 707587:                    // Identifier '++' '>='
    case 707588:                    // Character '++' '>='
    case 707589:                    // String '++' '>='
    case 707590:                    // Integer '++' '>='
    case 707591:                    // Real '++' '>='
    case 723971:                    // Identifier '++' '>>'
    case 723972:                    // Character '++' '>>'
    case 723973:                    // String '++' '>>'
    case 723974:                    // Integer '++' '>>'
    case 723975:                    // Real '++' '>>'
    case 740355:                    // Identifier '++' '>>='
    case 740356:                    // Character '++' '>>='
    case 740357:                    // String '++' '>>='
    case 740358:                    // Integer '++' '>>='
    case 740359:                    // Real '++' '>>='
    case 756739:                    // Identifier '++' '?'
    case 756740:                    // Character '++' '?'
    case 756741:                    // String '++' '?'
    case 756742:                    // Integer '++' '?'
    case 756743:                    // Real '++' '?'
    case 773123:                    // Identifier '++' '?='
    case 773124:                    // Character '++' '?='
    case 773125:                    // String '++' '?='
    case 773126:                    // Integer '++' '?='
    case 773127:                    // Real '++' '?='
    case 789507:                    // Identifier '++' '@='
    case 789508:                    // Character '++' '@='
    case 789509:                    // String '++' '@='
    case 789510:                    // Integer '++' '@='
    case 789511:                    // Real '++' '@='
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
    case 969731:                    // Identifier '++' 'for'
    case 969732:                    // Character '++' 'for'
    case 969733:                    // String '++' 'for'
    case 969734:                    // Integer '++' 'for'
    case 969735:                    // Real '++' 'for'
    case 986115:                    // Identifier '++' 'foreach'
    case 986116:                    // Character '++' 'foreach'
    case 986117:                    // String '++' 'foreach'
    case 986118:                    // Integer '++' 'foreach'
    case 986119:                    // Real '++' 'foreach'
    case 1002499:                   // Identifier '++' 'if'
    case 1002500:                   // Character '++' 'if'
    case 1002501:                   // String '++' 'if'
    case 1002502:                   // Integer '++' 'if'
    case 1002503:                   // Real '++' 'if'
    case 1018883:                   // Identifier '++' 'return'
    case 1018884:                   // Character '++' 'return'
    case 1018885:                   // String '++' 'return'
    case 1018886:                   // Integer '++' 'return'
    case 1018887:                   // Real '++' 'return'
    case 1035267:                   // Identifier '++' 'switch'
    case 1035268:                   // Character '++' 'switch'
    case 1035269:                   // String '++' 'switch'
    case 1035270:                   // Integer '++' 'switch'
    case 1035271:                   // Real '++' 'switch'
    case 1051651:                   // Identifier '++' 'while'
    case 1051652:                   // Character '++' 'while'
    case 1051653:                   // String '++' 'while'
    case 1051654:                   // Integer '++' 'while'
    case 1051655:                   // Real '++' 'while'
    case 1084419:                   // Identifier '++' '|'
    case 1084420:                   // Character '++' '|'
    case 1084421:                   // String '++' '|'
    case 1084422:                   // Integer '++' '|'
    case 1084423:                   // Real '++' '|'
    case 1100803:                   // Identifier '++' '|='
    case 1100804:                   // Character '++' '|='
    case 1100805:                   // String '++' '|='
    case 1100806:                   // Integer '++' '|='
    case 1100807:                   // Real '++' '|='
    case 1117187:                   // Identifier '++' '||'
    case 1117188:                   // Character '++' '||'
    case 1117189:                   // String '++' '||'
    case 1117190:                   // Integer '++' '||'
    case 1117191:                   // Real '++' '||'
    case 1133571:                   // Identifier '++' '}'
    case 1133572:                   // Character '++' '}'
    case 1133573:                   // String '++' '}'
    case 1133574:                   // Integer '++' '}'
    case 1133575:                   // Real '++' '}'
    case 1149955:                   // Identifier '++' '~'
    case 1149956:                   // Character '++' '~'
    case 1149957:                   // String '++' '~'
    case 1149958:                   // Integer '++' '~'
    case 1149959:                   // Real '++' '~'
      parse_Primary();
      lookahead1W(3);               // WhiteSpace^token | '++'
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
    case 167427:                    // Identifier '--' '!'
    case 167428:                    // Character '--' '!'
    case 167429:                    // String '--' '!'
    case 167430:                    // Integer '--' '!'
    case 167431:                    // Real '--' '!'
    case 183811:                    // Identifier '--' '!='
    case 183812:                    // Character '--' '!='
    case 183813:                    // String '--' '!='
    case 183814:                    // Integer '--' '!='
    case 183815:                    // Real '--' '!='
    case 200195:                    // Identifier '--' '#='
    case 200196:                    // Character '--' '#='
    case 200197:                    // String '--' '#='
    case 200198:                    // Integer '--' '#='
    case 200199:                    // Real '--' '#='
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
    case 691715:                    // Identifier '--' '>'
    case 691716:                    // Character '--' '>'
    case 691717:                    // String '--' '>'
    case 691718:                    // Integer '--' '>'
    case 691719:                    // Real '--' '>'
    case 708099:                    // Identifier '--' '>='
    case 708100:                    // Character '--' '>='
    case 708101:                    // String '--' '>='
    case 708102:                    // Integer '--' '>='
    case 708103:                    // Real '--' '>='
    case 724483:                    // Identifier '--' '>>'
    case 724484:                    // Character '--' '>>'
    case 724485:                    // String '--' '>>'
    case 724486:                    // Integer '--' '>>'
    case 724487:                    // Real '--' '>>'
    case 740867:                    // Identifier '--' '>>='
    case 740868:                    // Character '--' '>>='
    case 740869:                    // String '--' '>>='
    case 740870:                    // Integer '--' '>>='
    case 740871:                    // Real '--' '>>='
    case 757251:                    // Identifier '--' '?'
    case 757252:                    // Character '--' '?'
    case 757253:                    // String '--' '?'
    case 757254:                    // Integer '--' '?'
    case 757255:                    // Real '--' '?'
    case 773635:                    // Identifier '--' '?='
    case 773636:                    // Character '--' '?='
    case 773637:                    // String '--' '?='
    case 773638:                    // Integer '--' '?='
    case 773639:                    // Real '--' '?='
    case 790019:                    // Identifier '--' '@='
    case 790020:                    // Character '--' '@='
    case 790021:                    // String '--' '@='
    case 790022:                    // Integer '--' '@='
    case 790023:                    // Real '--' '@='
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
    case 970243:                    // Identifier '--' 'for'
    case 970244:                    // Character '--' 'for'
    case 970245:                    // String '--' 'for'
    case 970246:                    // Integer '--' 'for'
    case 970247:                    // Real '--' 'for'
    case 986627:                    // Identifier '--' 'foreach'
    case 986628:                    // Character '--' 'foreach'
    case 986629:                    // String '--' 'foreach'
    case 986630:                    // Integer '--' 'foreach'
    case 986631:                    // Real '--' 'foreach'
    case 1003011:                   // Identifier '--' 'if'
    case 1003012:                   // Character '--' 'if'
    case 1003013:                   // String '--' 'if'
    case 1003014:                   // Integer '--' 'if'
    case 1003015:                   // Real '--' 'if'
    case 1019395:                   // Identifier '--' 'return'
    case 1019396:                   // Character '--' 'return'
    case 1019397:                   // String '--' 'return'
    case 1019398:                   // Integer '--' 'return'
    case 1019399:                   // Real '--' 'return'
    case 1035779:                   // Identifier '--' 'switch'
    case 1035780:                   // Character '--' 'switch'
    case 1035781:                   // String '--' 'switch'
    case 1035782:                   // Integer '--' 'switch'
    case 1035783:                   // Real '--' 'switch'
    case 1052163:                   // Identifier '--' 'while'
    case 1052164:                   // Character '--' 'while'
    case 1052165:                   // String '--' 'while'
    case 1052166:                   // Integer '--' 'while'
    case 1052167:                   // Real '--' 'while'
    case 1084931:                   // Identifier '--' '|'
    case 1084932:                   // Character '--' '|'
    case 1084933:                   // String '--' '|'
    case 1084934:                   // Integer '--' '|'
    case 1084935:                   // Real '--' '|'
    case 1101315:                   // Identifier '--' '|='
    case 1101316:                   // Character '--' '|='
    case 1101317:                   // String '--' '|='
    case 1101318:                   // Integer '--' '|='
    case 1101319:                   // Real '--' '|='
    case 1117699:                   // Identifier '--' '||'
    case 1117700:                   // Character '--' '||'
    case 1117701:                   // String '--' '||'
    case 1117702:                   // Integer '--' '||'
    case 1117703:                   // Real '--' '||'
    case 1134083:                   // Identifier '--' '}'
    case 1134084:                   // Character '--' '}'
    case 1134085:                   // String '--' '}'
    case 1134086:                   // Integer '--' '}'
    case 1134087:                   // Real '--' '}'
    case 1150467:                   // Identifier '--' '~'
    case 1150468:                   // Character '--' '~'
    case 1150469:                   // String '--' '~'
    case 1150470:                   // Integer '--' '~'
    case 1150471:                   // Real '--' '~'
      parse_Primary();
      lookahead1W(4);               // WhiteSpace^token | '--'
      consume(28);                  // '--'
      break;
    case 24:                        // '++'
      consume(24);                  // '++'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 28:                        // '--'
      consume(28);                  // '--'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 23:                        // '+'
      consume(23);                  // '+'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 27:                        // '-'
      consume(27);                  // '-'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 70:                        // '~'
      consume(70);                  // '~'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      whitespace();
      parse_Primary();
      break;
    case 10:                        // '!'
      consume(10);                  // '!'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
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
      lookahead2W(37);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(18);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 3843:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6275:                    // Identifier '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 3075:                    // Identifier '++'
      case 3587:                    // Identifier '--'
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 18:                        // '('
      lookahead2W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 402:                     // '(' Identifier
        lookahead3W(30);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '@=' | '[' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 6290:                    // '(' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8338:                    // '(' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 2322:                    // '(' '('
      case 7314:                    // '(' 'do'
      case 7954:                    // '(' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 530:                     // '(' Character
      case 658:                     // '(' String
      case 786:                     // '(' Integer
      case 914:                     // '(' Real
        lookahead3W(26);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 1042:                    // '(' Comment
      case 4498:                    // '(' ';'
      case 6802:                    // '(' 'break'
      case 7058:                    // '(' 'continue'
        lookahead3W(2);             // WhiteSpace^token | ')'
        break;
      case 7570:                    // '(' 'for'
      case 7698:                    // '(' 'foreach'
      case 7826:                    // '(' 'if'
      case 8082:                    // '(' 'switch'
      case 8210:                    // '(' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1298:                    // '(' '!'
      case 2962:                    // '(' '+'
      case 3090:                    // '(' '++'
      case 3474:                    // '(' '-'
      case 3602:                    // '(' '--'
      case 8978:                    // '(' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 49:                        // '['
      lookahead2W(19);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 433:                     // '[' Identifier
        lookahead3W(32);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 4529:                    // '[' ';'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
        break;
      case 6321:                    // '[' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 6449:                    // '[' ']'
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 8369:                    // '[' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 1073:                    // '[' Comment
      case 6833:                    // '[' 'break'
      case 7089:                    // '[' 'continue'
        lookahead3W(13);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 2353:                    // '[' '('
      case 7345:                    // '[' 'do'
      case 7985:                    // '[' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 561:                     // '[' Character
      case 689:                     // '[' String
      case 817:                     // '[' Integer
      case 945:                     // '[' Real
        lookahead3W(29);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 7601:                    // '[' 'for'
      case 7729:                    // '[' 'foreach'
      case 7857:                    // '[' 'if'
      case 8113:                    // '[' 'switch'
      case 8241:                    // '[' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1329:                    // '[' '!'
      case 2993:                    // '[' '+'
      case 3121:                    // '[' '++'
      case 3505:                    // '[' '-'
      case 3633:                    // '[' '--'
      case 9009:                    // '[' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 65:                        // '{'
      lookahead2W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 449:                     // '{' Identifier
        lookahead3W(31);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 705:                     // '{' String
        lookahead3W(28);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6337:                    // '{' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8385:                    // '{' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 577:                     // '{' Character
      case 833:                     // '{' Integer
      case 961:                     // '{' Real
        lookahead3W(27);            // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 2369:                    // '{' '('
      case 7361:                    // '{' 'do'
      case 8001:                    // '{' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 1089:                    // '{' Comment
      case 4545:                    // '{' ';'
      case 6849:                    // '{' 'break'
      case 7105:                    // '{' 'continue'
        lookahead3W(11);            // WhiteSpace^token | ',' | '}'
        break;
      case 7617:                    // '{' 'for'
      case 7745:                    // '{' 'foreach'
      case 7873:                    // '{' 'if'
      case 8129:                    // '{' 'switch'
      case 8257:                    // '{' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1345:                    // '{' '!'
      case 3009:                    // '{' '+'
      case 3137:                    // '{' '++'
      case 3521:                    // '{' '-'
      case 3649:                    // '{' '--'
      case 9025:                    // '{' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Real
      lookahead2W(36);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 10                    // '!'
     && lk != 23                    // '+'
     && lk != 24                    // '++'
     && lk != 27                    // '-'
     && lk != 28                    // '--'
     && lk != 70                    // '~'
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
     && lk != 1283                  // Identifier '!'
     && lk != 1284                  // Character '!'
     && lk != 1285                  // String '!'
     && lk != 1286                  // Integer '!'
     && lk != 1287                  // Real '!'
     && lk != 1411                  // Identifier '!='
     && lk != 1412                  // Character '!='
     && lk != 1413                  // String '!='
     && lk != 1414                  // Integer '!='
     && lk != 1415                  // Real '!='
     && lk != 1539                  // Identifier '#='
     && lk != 1540                  // Character '#='
     && lk != 1541                  // String '#='
     && lk != 1542                  // Integer '#='
     && lk != 1543                  // Real '#='
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
     && lk != 5379                  // Identifier '>'
     && lk != 5380                  // Character '>'
     && lk != 5381                  // String '>'
     && lk != 5382                  // Integer '>'
     && lk != 5383                  // Real '>'
     && lk != 5507                  // Identifier '>='
     && lk != 5508                  // Character '>='
     && lk != 5509                  // String '>='
     && lk != 5510                  // Integer '>='
     && lk != 5511                  // Real '>='
     && lk != 5635                  // Identifier '>>'
     && lk != 5636                  // Character '>>'
     && lk != 5637                  // String '>>'
     && lk != 5638                  // Integer '>>'
     && lk != 5639                  // Real '>>'
     && lk != 5763                  // Identifier '>>='
     && lk != 5764                  // Character '>>='
     && lk != 5765                  // String '>>='
     && lk != 5766                  // Integer '>>='
     && lk != 5767                  // Real '>>='
     && lk != 5891                  // Identifier '?'
     && lk != 5892                  // Character '?'
     && lk != 5893                  // String '?'
     && lk != 5894                  // Integer '?'
     && lk != 5895                  // Real '?'
     && lk != 6019                  // Identifier '?='
     && lk != 6020                  // Character '?='
     && lk != 6021                  // String '?='
     && lk != 6022                  // Integer '?='
     && lk != 6023                  // Real '?='
     && lk != 6147                  // Identifier '@='
     && lk != 6148                  // Character '@='
     && lk != 6149                  // String '@='
     && lk != 6150                  // Integer '@='
     && lk != 6151                  // Real '@='
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
     && lk != 7555                  // Identifier 'for'
     && lk != 7556                  // Character 'for'
     && lk != 7557                  // String 'for'
     && lk != 7558                  // Integer 'for'
     && lk != 7559                  // Real 'for'
     && lk != 7683                  // Identifier 'foreach'
     && lk != 7684                  // Character 'foreach'
     && lk != 7685                  // String 'foreach'
     && lk != 7686                  // Integer 'foreach'
     && lk != 7687                  // Real 'foreach'
     && lk != 7811                  // Identifier 'if'
     && lk != 7812                  // Character 'if'
     && lk != 7813                  // String 'if'
     && lk != 7814                  // Integer 'if'
     && lk != 7815                  // Real 'if'
     && lk != 7939                  // Identifier 'return'
     && lk != 7940                  // Character 'return'
     && lk != 7941                  // String 'return'
     && lk != 7942                  // Integer 'return'
     && lk != 7943                  // Real 'return'
     && lk != 8067                  // Identifier 'switch'
     && lk != 8068                  // Character 'switch'
     && lk != 8069                  // String 'switch'
     && lk != 8070                  // Integer 'switch'
     && lk != 8071                  // Real 'switch'
     && lk != 8195                  // Identifier 'while'
     && lk != 8196                  // Character 'while'
     && lk != 8197                  // String 'while'
     && lk != 8198                  // Integer 'while'
     && lk != 8199                  // Real 'while'
     && lk != 8323                  // Identifier '{'
     && lk != 8324                  // Character '{'
     && lk != 8325                  // String '{'
     && lk != 8326                  // Integer '{'
     && lk != 8327                  // Real '{'
     && lk != 8451                  // Identifier '|'
     && lk != 8452                  // Character '|'
     && lk != 8453                  // String '|'
     && lk != 8454                  // Integer '|'
     && lk != 8455                  // Real '|'
     && lk != 8579                  // Identifier '|='
     && lk != 8580                  // Character '|='
     && lk != 8581                  // String '|='
     && lk != 8582                  // Integer '|='
     && lk != 8583                  // Real '|='
     && lk != 8707                  // Identifier '||'
     && lk != 8708                  // Character '||'
     && lk != 8709                  // String '||'
     && lk != 8710                  // Integer '||'
     && lk != 8711                  // Real '||'
     && lk != 8835                  // Identifier '}'
     && lk != 8836                  // Character '}'
     && lk != 8837                  // String '}'
     && lk != 8838                  // Integer '}'
     && lk != 8839                  // Real '}'
     && lk != 8963                  // Identifier '~'
     && lk != 8964                  // Character '~'
     && lk != 8965                  // String '~'
     && lk != 8966                  // Integer '~'
     && lk != 8967                  // Real '~'
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
     && lk != 166915                // Identifier '++' '!'
     && lk != 166916                // Character '++' '!'
     && lk != 166917                // String '++' '!'
     && lk != 166918                // Integer '++' '!'
     && lk != 166919                // Real '++' '!'
     && lk != 167427                // Identifier '--' '!'
     && lk != 167428                // Character '--' '!'
     && lk != 167429                // String '--' '!'
     && lk != 167430                // Integer '--' '!'
     && lk != 167431                // Real '--' '!'
     && lk != 170289                // '[' ']' '!'
     && lk != 183299                // Identifier '++' '!='
     && lk != 183300                // Character '++' '!='
     && lk != 183301                // String '++' '!='
     && lk != 183302                // Integer '++' '!='
     && lk != 183303                // Real '++' '!='
     && lk != 183811                // Identifier '--' '!='
     && lk != 183812                // Character '--' '!='
     && lk != 183813                // String '--' '!='
     && lk != 183814                // Integer '--' '!='
     && lk != 183815                // Real '--' '!='
     && lk != 186673                // '[' ']' '!='
     && lk != 199683                // Identifier '++' '#='
     && lk != 199684                // Character '++' '#='
     && lk != 199685                // String '++' '#='
     && lk != 199686                // Integer '++' '#='
     && lk != 199687                // Real '++' '#='
     && lk != 200195                // Identifier '--' '#='
     && lk != 200196                // Character '--' '#='
     && lk != 200197                // String '--' '#='
     && lk != 200198                // Integer '--' '#='
     && lk != 200199                // Real '--' '#='
     && lk != 203057                // '[' ']' '#='
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
     && lk != 691203                // Identifier '++' '>'
     && lk != 691204                // Character '++' '>'
     && lk != 691205                // String '++' '>'
     && lk != 691206                // Integer '++' '>'
     && lk != 691207                // Real '++' '>'
     && lk != 691715                // Identifier '--' '>'
     && lk != 691716                // Character '--' '>'
     && lk != 691717                // String '--' '>'
     && lk != 691718                // Integer '--' '>'
     && lk != 691719                // Real '--' '>'
     && lk != 694577                // '[' ']' '>'
     && lk != 707587                // Identifier '++' '>='
     && lk != 707588                // Character '++' '>='
     && lk != 707589                // String '++' '>='
     && lk != 707590                // Integer '++' '>='
     && lk != 707591                // Real '++' '>='
     && lk != 708099                // Identifier '--' '>='
     && lk != 708100                // Character '--' '>='
     && lk != 708101                // String '--' '>='
     && lk != 708102                // Integer '--' '>='
     && lk != 708103                // Real '--' '>='
     && lk != 710961                // '[' ']' '>='
     && lk != 723971                // Identifier '++' '>>'
     && lk != 723972                // Character '++' '>>'
     && lk != 723973                // String '++' '>>'
     && lk != 723974                // Integer '++' '>>'
     && lk != 723975                // Real '++' '>>'
     && lk != 724483                // Identifier '--' '>>'
     && lk != 724484                // Character '--' '>>'
     && lk != 724485                // String '--' '>>'
     && lk != 724486                // Integer '--' '>>'
     && lk != 724487                // Real '--' '>>'
     && lk != 727345                // '[' ']' '>>'
     && lk != 740355                // Identifier '++' '>>='
     && lk != 740356                // Character '++' '>>='
     && lk != 740357                // String '++' '>>='
     && lk != 740358                // Integer '++' '>>='
     && lk != 740359                // Real '++' '>>='
     && lk != 740867                // Identifier '--' '>>='
     && lk != 740868                // Character '--' '>>='
     && lk != 740869                // String '--' '>>='
     && lk != 740870                // Integer '--' '>>='
     && lk != 740871                // Real '--' '>>='
     && lk != 743729                // '[' ']' '>>='
     && lk != 756739                // Identifier '++' '?'
     && lk != 756740                // Character '++' '?'
     && lk != 756741                // String '++' '?'
     && lk != 756742                // Integer '++' '?'
     && lk != 756743                // Real '++' '?'
     && lk != 757251                // Identifier '--' '?'
     && lk != 757252                // Character '--' '?'
     && lk != 757253                // String '--' '?'
     && lk != 757254                // Integer '--' '?'
     && lk != 757255                // Real '--' '?'
     && lk != 760113                // '[' ']' '?'
     && lk != 773123                // Identifier '++' '?='
     && lk != 773124                // Character '++' '?='
     && lk != 773125                // String '++' '?='
     && lk != 773126                // Integer '++' '?='
     && lk != 773127                // Real '++' '?='
     && lk != 773635                // Identifier '--' '?='
     && lk != 773636                // Character '--' '?='
     && lk != 773637                // String '--' '?='
     && lk != 773638                // Integer '--' '?='
     && lk != 773639                // Real '--' '?='
     && lk != 776497                // '[' ']' '?='
     && lk != 789507                // Identifier '++' '@='
     && lk != 789508                // Character '++' '@='
     && lk != 789509                // String '++' '@='
     && lk != 789510                // Integer '++' '@='
     && lk != 789511                // Real '++' '@='
     && lk != 790019                // Identifier '--' '@='
     && lk != 790020                // Character '--' '@='
     && lk != 790021                // String '--' '@='
     && lk != 790022                // Integer '--' '@='
     && lk != 790023                // Real '--' '@='
     && lk != 792881                // '[' ']' '@='
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
     && lk != 969731                // Identifier '++' 'for'
     && lk != 969732                // Character '++' 'for'
     && lk != 969733                // String '++' 'for'
     && lk != 969734                // Integer '++' 'for'
     && lk != 969735                // Real '++' 'for'
     && lk != 970243                // Identifier '--' 'for'
     && lk != 970244                // Character '--' 'for'
     && lk != 970245                // String '--' 'for'
     && lk != 970246                // Integer '--' 'for'
     && lk != 970247                // Real '--' 'for'
     && lk != 973105                // '[' ']' 'for'
     && lk != 986115                // Identifier '++' 'foreach'
     && lk != 986116                // Character '++' 'foreach'
     && lk != 986117                // String '++' 'foreach'
     && lk != 986118                // Integer '++' 'foreach'
     && lk != 986119                // Real '++' 'foreach'
     && lk != 986627                // Identifier '--' 'foreach'
     && lk != 986628                // Character '--' 'foreach'
     && lk != 986629                // String '--' 'foreach'
     && lk != 986630                // Integer '--' 'foreach'
     && lk != 986631                // Real '--' 'foreach'
     && lk != 989489                // '[' ']' 'foreach'
     && lk != 1002499               // Identifier '++' 'if'
     && lk != 1002500               // Character '++' 'if'
     && lk != 1002501               // String '++' 'if'
     && lk != 1002502               // Integer '++' 'if'
     && lk != 1002503               // Real '++' 'if'
     && lk != 1003011               // Identifier '--' 'if'
     && lk != 1003012               // Character '--' 'if'
     && lk != 1003013               // String '--' 'if'
     && lk != 1003014               // Integer '--' 'if'
     && lk != 1003015               // Real '--' 'if'
     && lk != 1005873               // '[' ']' 'if'
     && lk != 1018883               // Identifier '++' 'return'
     && lk != 1018884               // Character '++' 'return'
     && lk != 1018885               // String '++' 'return'
     && lk != 1018886               // Integer '++' 'return'
     && lk != 1018887               // Real '++' 'return'
     && lk != 1019395               // Identifier '--' 'return'
     && lk != 1019396               // Character '--' 'return'
     && lk != 1019397               // String '--' 'return'
     && lk != 1019398               // Integer '--' 'return'
     && lk != 1019399               // Real '--' 'return'
     && lk != 1022257               // '[' ']' 'return'
     && lk != 1035267               // Identifier '++' 'switch'
     && lk != 1035268               // Character '++' 'switch'
     && lk != 1035269               // String '++' 'switch'
     && lk != 1035270               // Integer '++' 'switch'
     && lk != 1035271               // Real '++' 'switch'
     && lk != 1035779               // Identifier '--' 'switch'
     && lk != 1035780               // Character '--' 'switch'
     && lk != 1035781               // String '--' 'switch'
     && lk != 1035782               // Integer '--' 'switch'
     && lk != 1035783               // Real '--' 'switch'
     && lk != 1038641               // '[' ']' 'switch'
     && lk != 1051651               // Identifier '++' 'while'
     && lk != 1051652               // Character '++' 'while'
     && lk != 1051653               // String '++' 'while'
     && lk != 1051654               // Integer '++' 'while'
     && lk != 1051655               // Real '++' 'while'
     && lk != 1052163               // Identifier '--' 'while'
     && lk != 1052164               // Character '--' 'while'
     && lk != 1052165               // String '--' 'while'
     && lk != 1052166               // Integer '--' 'while'
     && lk != 1052167               // Real '--' 'while'
     && lk != 1055025               // '[' ']' 'while'
     && lk != 1071409               // '[' ']' '{'
     && lk != 1084419               // Identifier '++' '|'
     && lk != 1084420               // Character '++' '|'
     && lk != 1084421               // String '++' '|'
     && lk != 1084422               // Integer '++' '|'
     && lk != 1084423               // Real '++' '|'
     && lk != 1084931               // Identifier '--' '|'
     && lk != 1084932               // Character '--' '|'
     && lk != 1084933               // String '--' '|'
     && lk != 1084934               // Integer '--' '|'
     && lk != 1084935               // Real '--' '|'
     && lk != 1087793               // '[' ']' '|'
     && lk != 1100803               // Identifier '++' '|='
     && lk != 1100804               // Character '++' '|='
     && lk != 1100805               // String '++' '|='
     && lk != 1100806               // Integer '++' '|='
     && lk != 1100807               // Real '++' '|='
     && lk != 1101315               // Identifier '--' '|='
     && lk != 1101316               // Character '--' '|='
     && lk != 1101317               // String '--' '|='
     && lk != 1101318               // Integer '--' '|='
     && lk != 1101319               // Real '--' '|='
     && lk != 1104177               // '[' ']' '|='
     && lk != 1117187               // Identifier '++' '||'
     && lk != 1117188               // Character '++' '||'
     && lk != 1117189               // String '++' '||'
     && lk != 1117190               // Integer '++' '||'
     && lk != 1117191               // Real '++' '||'
     && lk != 1117699               // Identifier '--' '||'
     && lk != 1117700               // Character '--' '||'
     && lk != 1117701               // String '--' '||'
     && lk != 1117702               // Integer '--' '||'
     && lk != 1117703               // Real '--' '||'
     && lk != 1120561               // '[' ']' '||'
     && lk != 1133571               // Identifier '++' '}'
     && lk != 1133572               // Character '++' '}'
     && lk != 1133573               // String '++' '}'
     && lk != 1133574               // Integer '++' '}'
     && lk != 1133575               // Real '++' '}'
     && lk != 1134083               // Identifier '--' '}'
     && lk != 1134084               // Character '--' '}'
     && lk != 1134085               // String '--' '}'
     && lk != 1134086               // Integer '--' '}'
     && lk != 1134087               // Real '--' '}'
     && lk != 1136945               // '[' ']' '}'
     && lk != 1149955               // Identifier '++' '~'
     && lk != 1149956               // Character '++' '~'
     && lk != 1149957               // String '++' '~'
     && lk != 1149958               // Integer '++' '~'
     && lk != 1149959               // Real '++' '~'
     && lk != 1150467               // Identifier '--' '~'
     && lk != 1150468               // Character '--' '~'
     && lk != 1150469               // String '--' '~'
     && lk != 1150470               // Integer '--' '~'
     && lk != 1150471               // Real '--' '~'
     && lk != 1153329)              // '[' ']' '~'
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
            lookahead1W(3);         // WhiteSpace^token | '++'
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
    case 166915:                    // Identifier '++' '!'
    case 166916:                    // Character '++' '!'
    case 166917:                    // String '++' '!'
    case 166918:                    // Integer '++' '!'
    case 166919:                    // Real '++' '!'
    case 183299:                    // Identifier '++' '!='
    case 183300:                    // Character '++' '!='
    case 183301:                    // String '++' '!='
    case 183302:                    // Integer '++' '!='
    case 183303:                    // Real '++' '!='
    case 199683:                    // Identifier '++' '#='
    case 199684:                    // Character '++' '#='
    case 199685:                    // String '++' '#='
    case 199686:                    // Integer '++' '#='
    case 199687:                    // Real '++' '#='
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
    case 691203:                    // Identifier '++' '>'
    case 691204:                    // Character '++' '>'
    case 691205:                    // String '++' '>'
    case 691206:                    // Integer '++' '>'
    case 691207:                    // Real '++' '>'
    case 707587:                    // Identifier '++' '>='
    case 707588:                    // Character '++' '>='
    case 707589:                    // String '++' '>='
    case 707590:                    // Integer '++' '>='
    case 707591:                    // Real '++' '>='
    case 723971:                    // Identifier '++' '>>'
    case 723972:                    // Character '++' '>>'
    case 723973:                    // String '++' '>>'
    case 723974:                    // Integer '++' '>>'
    case 723975:                    // Real '++' '>>'
    case 740355:                    // Identifier '++' '>>='
    case 740356:                    // Character '++' '>>='
    case 740357:                    // String '++' '>>='
    case 740358:                    // Integer '++' '>>='
    case 740359:                    // Real '++' '>>='
    case 756739:                    // Identifier '++' '?'
    case 756740:                    // Character '++' '?'
    case 756741:                    // String '++' '?'
    case 756742:                    // Integer '++' '?'
    case 756743:                    // Real '++' '?'
    case 773123:                    // Identifier '++' '?='
    case 773124:                    // Character '++' '?='
    case 773125:                    // String '++' '?='
    case 773126:                    // Integer '++' '?='
    case 773127:                    // Real '++' '?='
    case 789507:                    // Identifier '++' '@='
    case 789508:                    // Character '++' '@='
    case 789509:                    // String '++' '@='
    case 789510:                    // Integer '++' '@='
    case 789511:                    // Real '++' '@='
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
    case 969731:                    // Identifier '++' 'for'
    case 969732:                    // Character '++' 'for'
    case 969733:                    // String '++' 'for'
    case 969734:                    // Integer '++' 'for'
    case 969735:                    // Real '++' 'for'
    case 986115:                    // Identifier '++' 'foreach'
    case 986116:                    // Character '++' 'foreach'
    case 986117:                    // String '++' 'foreach'
    case 986118:                    // Integer '++' 'foreach'
    case 986119:                    // Real '++' 'foreach'
    case 1002499:                   // Identifier '++' 'if'
    case 1002500:                   // Character '++' 'if'
    case 1002501:                   // String '++' 'if'
    case 1002502:                   // Integer '++' 'if'
    case 1002503:                   // Real '++' 'if'
    case 1018883:                   // Identifier '++' 'return'
    case 1018884:                   // Character '++' 'return'
    case 1018885:                   // String '++' 'return'
    case 1018886:                   // Integer '++' 'return'
    case 1018887:                   // Real '++' 'return'
    case 1035267:                   // Identifier '++' 'switch'
    case 1035268:                   // Character '++' 'switch'
    case 1035269:                   // String '++' 'switch'
    case 1035270:                   // Integer '++' 'switch'
    case 1035271:                   // Real '++' 'switch'
    case 1051651:                   // Identifier '++' 'while'
    case 1051652:                   // Character '++' 'while'
    case 1051653:                   // String '++' 'while'
    case 1051654:                   // Integer '++' 'while'
    case 1051655:                   // Real '++' 'while'
    case 1084419:                   // Identifier '++' '|'
    case 1084420:                   // Character '++' '|'
    case 1084421:                   // String '++' '|'
    case 1084422:                   // Integer '++' '|'
    case 1084423:                   // Real '++' '|'
    case 1100803:                   // Identifier '++' '|='
    case 1100804:                   // Character '++' '|='
    case 1100805:                   // String '++' '|='
    case 1100806:                   // Integer '++' '|='
    case 1100807:                   // Real '++' '|='
    case 1117187:                   // Identifier '++' '||'
    case 1117188:                   // Character '++' '||'
    case 1117189:                   // String '++' '||'
    case 1117190:                   // Integer '++' '||'
    case 1117191:                   // Real '++' '||'
    case 1133571:                   // Identifier '++' '}'
    case 1133572:                   // Character '++' '}'
    case 1133573:                   // String '++' '}'
    case 1133574:                   // Integer '++' '}'
    case 1133575:                   // Real '++' '}'
    case 1149955:                   // Identifier '++' '~'
    case 1149956:                   // Character '++' '~'
    case 1149957:                   // String '++' '~'
    case 1149958:                   // Integer '++' '~'
    case 1149959:                   // Real '++' '~'
      try_Primary();
      lookahead1W(3);               // WhiteSpace^token | '++'
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
    case 167427:                    // Identifier '--' '!'
    case 167428:                    // Character '--' '!'
    case 167429:                    // String '--' '!'
    case 167430:                    // Integer '--' '!'
    case 167431:                    // Real '--' '!'
    case 183811:                    // Identifier '--' '!='
    case 183812:                    // Character '--' '!='
    case 183813:                    // String '--' '!='
    case 183814:                    // Integer '--' '!='
    case 183815:                    // Real '--' '!='
    case 200195:                    // Identifier '--' '#='
    case 200196:                    // Character '--' '#='
    case 200197:                    // String '--' '#='
    case 200198:                    // Integer '--' '#='
    case 200199:                    // Real '--' '#='
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
    case 691715:                    // Identifier '--' '>'
    case 691716:                    // Character '--' '>'
    case 691717:                    // String '--' '>'
    case 691718:                    // Integer '--' '>'
    case 691719:                    // Real '--' '>'
    case 708099:                    // Identifier '--' '>='
    case 708100:                    // Character '--' '>='
    case 708101:                    // String '--' '>='
    case 708102:                    // Integer '--' '>='
    case 708103:                    // Real '--' '>='
    case 724483:                    // Identifier '--' '>>'
    case 724484:                    // Character '--' '>>'
    case 724485:                    // String '--' '>>'
    case 724486:                    // Integer '--' '>>'
    case 724487:                    // Real '--' '>>'
    case 740867:                    // Identifier '--' '>>='
    case 740868:                    // Character '--' '>>='
    case 740869:                    // String '--' '>>='
    case 740870:                    // Integer '--' '>>='
    case 740871:                    // Real '--' '>>='
    case 757251:                    // Identifier '--' '?'
    case 757252:                    // Character '--' '?'
    case 757253:                    // String '--' '?'
    case 757254:                    // Integer '--' '?'
    case 757255:                    // Real '--' '?'
    case 773635:                    // Identifier '--' '?='
    case 773636:                    // Character '--' '?='
    case 773637:                    // String '--' '?='
    case 773638:                    // Integer '--' '?='
    case 773639:                    // Real '--' '?='
    case 790019:                    // Identifier '--' '@='
    case 790020:                    // Character '--' '@='
    case 790021:                    // String '--' '@='
    case 790022:                    // Integer '--' '@='
    case 790023:                    // Real '--' '@='
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
    case 970243:                    // Identifier '--' 'for'
    case 970244:                    // Character '--' 'for'
    case 970245:                    // String '--' 'for'
    case 970246:                    // Integer '--' 'for'
    case 970247:                    // Real '--' 'for'
    case 986627:                    // Identifier '--' 'foreach'
    case 986628:                    // Character '--' 'foreach'
    case 986629:                    // String '--' 'foreach'
    case 986630:                    // Integer '--' 'foreach'
    case 986631:                    // Real '--' 'foreach'
    case 1003011:                   // Identifier '--' 'if'
    case 1003012:                   // Character '--' 'if'
    case 1003013:                   // String '--' 'if'
    case 1003014:                   // Integer '--' 'if'
    case 1003015:                   // Real '--' 'if'
    case 1019395:                   // Identifier '--' 'return'
    case 1019396:                   // Character '--' 'return'
    case 1019397:                   // String '--' 'return'
    case 1019398:                   // Integer '--' 'return'
    case 1019399:                   // Real '--' 'return'
    case 1035779:                   // Identifier '--' 'switch'
    case 1035780:                   // Character '--' 'switch'
    case 1035781:                   // String '--' 'switch'
    case 1035782:                   // Integer '--' 'switch'
    case 1035783:                   // Real '--' 'switch'
    case 1052163:                   // Identifier '--' 'while'
    case 1052164:                   // Character '--' 'while'
    case 1052165:                   // String '--' 'while'
    case 1052166:                   // Integer '--' 'while'
    case 1052167:                   // Real '--' 'while'
    case 1084931:                   // Identifier '--' '|'
    case 1084932:                   // Character '--' '|'
    case 1084933:                   // String '--' '|'
    case 1084934:                   // Integer '--' '|'
    case 1084935:                   // Real '--' '|'
    case 1101315:                   // Identifier '--' '|='
    case 1101316:                   // Character '--' '|='
    case 1101317:                   // String '--' '|='
    case 1101318:                   // Integer '--' '|='
    case 1101319:                   // Real '--' '|='
    case 1117699:                   // Identifier '--' '||'
    case 1117700:                   // Character '--' '||'
    case 1117701:                   // String '--' '||'
    case 1117702:                   // Integer '--' '||'
    case 1117703:                   // Real '--' '||'
    case 1134083:                   // Identifier '--' '}'
    case 1134084:                   // Character '--' '}'
    case 1134085:                   // String '--' '}'
    case 1134086:                   // Integer '--' '}'
    case 1134087:                   // Real '--' '}'
    case 1150467:                   // Identifier '--' '~'
    case 1150468:                   // Character '--' '~'
    case 1150469:                   // String '--' '~'
    case 1150470:                   // Integer '--' '~'
    case 1150471:                   // Real '--' '~'
      try_Primary();
      lookahead1W(4);               // WhiteSpace^token | '--'
      consumeT(28);                 // '--'
      break;
    case 24:                        // '++'
      consumeT(24);                 // '++'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 28:                        // '--'
      consumeT(28);                 // '--'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 23:                        // '+'
      consumeT(23);                 // '+'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 27:                        // '-'
      consumeT(27);                 // '-'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 70:                        // '~'
      consumeT(70);                 // '~'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
      try_Primary();
      break;
    case 10:                        // '!'
      consumeT(10);                 // '!'
      lookahead1W(14);              // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
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
    case 57:                        // 'do'
      parse_Do();
      break;
    case 64:                        // 'while'
      parse_While();
      break;
    case 59:                        // 'for'
      parse_For();
      break;
    case 60:                        // 'foreach'
      parse_ForEach();
      break;
    case 53:                        // 'break'
      parse_Break();
      break;
    case 55:                        // 'continue'
      parse_Continue();
      break;
    case 61:                        // 'if'
      parse_If();
      break;
    case 63:                        // 'switch'
      parse_Switch();
      break;
    case 62:                        // 'return'
      parse_Return();
      break;
    default:
      parse_EmptyStatement();
    }
    eventHandler.endNonterminal("Statement", e0);
  }

  function try_Statement()
  {
    switch (l1)
    {
    case 57:                        // 'do'
      try_Do();
      break;
    case 64:                        // 'while'
      try_While();
      break;
    case 59:                        // 'for'
      try_For();
      break;
    case 60:                        // 'foreach'
      try_ForEach();
      break;
    case 53:                        // 'break'
      try_Break();
      break;
    case 55:                        // 'continue'
      try_Continue();
      break;
    case 61:                        // 'if'
      try_If();
      break;
    case 63:                        // 'switch'
      try_Switch();
      break;
    case 62:                        // 'return'
      try_Return();
      break;
    default:
      try_EmptyStatement();
    }
  }

  function parse_Do()
  {
    eventHandler.startNonterminal("Do", e0);
    consume(57);                    // 'do'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(8);                 // WhiteSpace^token | 'while'
    consume(64);                    // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(57);                   // 'do'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(8);                 // WhiteSpace^token | 'while'
    consumeT(64);                   // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(64);                    // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(64);                   // 'while'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    eventHandler.startNonterminal("For", e0);
    consume(59);                    // 'for'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("For", e0);
  }

  function try_For()
  {
    consumeT(59);                   // 'for'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_ForEach()
  {
    eventHandler.startNonterminal("ForEach", e0);
    consume(60);                    // 'foreach'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consume(35);                    // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("ForEach", e0);
  }

  function try_ForEach()
  {
    consumeT(60);                   // 'foreach'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ';'
    consumeT(35);                   // ';'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
    consume(61);                    // 'if'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(25);                // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' |
                                    // 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 58:                        // 'else'
      lookahead2W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 442:                     // 'else' Identifier
        lookahead3W(37);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6330:                    // 'else' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8378:                    // 'else' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 2362:                    // 'else' '('
      case 7354:                    // 'else' 'do'
      case 7994:                    // 'else' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 570:                     // 'else' Character
      case 698:                     // 'else' String
      case 826:                     // 'else' Integer
      case 954:                     // 'else' Real
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1082:                    // 'else' Comment
      case 4538:                    // 'else' ';'
      case 6842:                    // 'else' 'break'
      case 7098:                    // 'else' 'continue'
        lookahead3W(25);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' |
                                    // 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 7610:                    // 'else' 'for'
      case 7738:                    // 'else' 'foreach'
      case 7866:                    // 'else' 'if'
      case 8122:                    // 'else' 'switch'
      case 8250:                    // 'else' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1338:                    // 'else' '!'
      case 3002:                    // 'else' '+'
      case 3130:                    // 'else' '++'
      case 3514:                    // 'else' '-'
      case 3642:                    // 'else' '--'
      case 9018:                    // 'else' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
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
     && lk != 10                    // '!'
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
     && lk != 59                    // 'for'
     && lk != 60                    // 'foreach'
     && lk != 61                    // 'if'
     && lk != 62                    // 'return'
     && lk != 63                    // 'switch'
     && lk != 64                    // 'while'
     && lk != 65                    // '{'
     && lk != 69                    // '}'
     && lk != 70)                   // '~'
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
    consumeT(61);                   // 'if'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(25);                // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' |
                                    // 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 58:                        // 'else'
      lookahead2W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      switch (lk)
      {
      case 442:                     // 'else' Identifier
        lookahead3W(37);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6330:                    // 'else' '['
        lookahead3W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 8378:                    // 'else' '{'
        lookahead3W(20);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 2362:                    // 'else' '('
      case 7354:                    // 'else' 'do'
      case 7994:                    // 'else' 'return'
        lookahead3W(16);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
        break;
      case 570:                     // 'else' Character
      case 698:                     // 'else' String
      case 826:                     // 'else' Integer
      case 954:                     // 'else' Real
        lookahead3W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1082:                    // 'else' Comment
      case 4538:                    // 'else' ';'
      case 6842:                    // 'else' 'break'
      case 7098:                    // 'else' 'continue'
        lookahead3W(25);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' |
                                    // 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
        break;
      case 7610:                    // 'else' 'for'
      case 7738:                    // 'else' 'foreach'
      case 7866:                    // 'else' 'if'
      case 8122:                    // 'else' 'switch'
      case 8250:                    // 'else' 'while'
        lookahead3W(1);             // WhiteSpace^token | '('
        break;
      case 1338:                    // 'else' '!'
      case 3002:                    // 'else' '+'
      case 3130:                    // 'else' '++'
      case 3514:                    // 'else' '-'
      case 3642:                    // 'else' '--'
      case 9018:                    // 'else' '~'
        lookahead3W(14);            // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
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
     && lk != 10                    // '!'
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
     && lk != 59                    // 'for'
     && lk != 60                    // 'foreach'
     && lk != 61                    // 'if'
     && lk != 62                    // 'return'
     && lk != 63                    // 'switch'
     && lk != 64                    // 'while'
     && lk != 65                    // '{'
     && lk != 69                    // '}'
     && lk != 70)                   // '~'
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
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Else", e0);
  }

  function try_Else()
  {
    consumeT(58);                   // 'else'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(63);                    // 'switch'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consume(18);                    // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    lookahead1W(9);                 // WhiteSpace^token | '{'
    consume(65);                    // '{'
    for (;;)
    {
      lookahead1W(7);               // WhiteSpace^token | 'case'
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
    consume(69);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(63);                   // 'switch'
    lookahead1W(1);                 // WhiteSpace^token | '('
    consumeT(18);                   // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consumeT(19);                   // ')'
    lookahead1W(9);                 // WhiteSpace^token | '{'
    consumeT(65);                   // '{'
    for (;;)
    {
      lookahead1W(7);               // WhiteSpace^token | 'case'
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
    consumeT(69);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(54);                    // 'case'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consume(33);                    // ':'
    for (;;)
    {
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 54                  // 'case'
       || l1 == 56                  // 'default'
       || l1 == 69)                 // '}'
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
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consumeT(33);                   // ':'
    for (;;)
    {
      lookahead1W(24);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'case' | 'continue' |
                                    // 'default' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 54                  // 'case'
       || l1 == 56                  // 'default'
       || l1 == 69)                 // '}'
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
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consume(33);                    // ':'
    for (;;)
    {
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
      if (l1 == 69)                 // '}'
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
    lookahead1W(5);                 // WhiteSpace^token | ':'
    consumeT(33);                   // ':'
    for (;;)
    {
      lookahead1W(20);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
      if (l1 == 69)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Return()
  {
    eventHandler.startNonterminal("Return", e0);
    consume(62);                    // 'return'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(62);                   // 'return'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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

  function parse_Arguments()
  {
    eventHandler.startNonterminal("Arguments", e0);
    parse_Expression();
    for (;;)
    {
      lookahead1W(12);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consume(26);                  // ','
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
      lookahead1W(12);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consumeT(26);                 // ','
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      try_Expression();
    }
  }

  function parse_Member()
  {
    eventHandler.startNonterminal("Member", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(37);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(18);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
     || lk == 166147                // Identifier '(' '!'
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
     || lk == 968963                // Identifier '(' 'for'
     || lk == 985347                // Identifier '(' 'foreach'
     || lk == 1001731               // Identifier '(' 'if'
     || lk == 1018115               // Identifier '(' 'return'
     || lk == 1034499               // Identifier '(' 'switch'
     || lk == 1050883               // Identifier '(' 'while'
     || lk == 1067267               // Identifier '(' '{'
     || lk == 1149187)              // Identifier '(' '~'
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
          for (;;)
          {
            lookahead1W(10);        // WhiteSpace^token | '(' | '.'
            if (l1 != 30)           // '.'
            {
              break;
            }
            consumeT(30);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(18);             // '('
          lookahead1W(18);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
        memoize(5, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
    case 313603:                    // Identifier '(' ')'
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(10);            // WhiteSpace^token | '(' | '.'
        if (l1 != 30)               // '.'
        {
          break;
        }
        consume(30);                // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(18);                  // '('
      lookahead1W(18);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
        lookahead1W(37);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead1W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 49:                    // '['
          lookahead2W(19);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          switch (lk)
          {
          case 433:                 // '[' Identifier
            lookahead3W(32);        // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 4529:                // '[' ';'
            lookahead3W(22);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
            break;
          case 6321:                // '[' '['
            lookahead3W(19);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
            break;
          case 6449:                // '[' ']'
            lookahead3W(36);        // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 8369:                // '[' '{'
            lookahead3W(20);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
            break;
          case 1073:                // '[' Comment
          case 6833:                // '[' 'break'
          case 7089:                // '[' 'continue'
            lookahead3W(13);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 2353:                // '[' '('
          case 7345:                // '[' 'do'
          case 7985:                // '[' 'return'
            lookahead3W(16);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
            break;
          case 561:                 // '[' Character
          case 689:                 // '[' String
          case 817:                 // '[' Integer
          case 945:                 // '[' Real
            lookahead3W(29);        // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 7601:                // '[' 'for'
          case 7729:                // '[' 'foreach'
          case 7857:                // '[' 'if'
          case 8113:                // '[' 'switch'
          case 8241:                // '[' 'while'
            lookahead3W(1);         // WhiteSpace^token | '('
            break;
          case 1329:                // '[' '!'
          case 2993:                // '[' '+'
          case 3121:                // '[' '++'
          case 3505:                // '[' '-'
          case 3633:                // '[' '--'
          case 9009:                // '[' '~'
            lookahead3W(14);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
         && lk != 10                // '!'
         && lk != 11                // '!='
         && lk != 12                // '#='
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
         && lk != 42                // '>'
         && lk != 43                // '>='
         && lk != 44                // '>>'
         && lk != 45                // '>>='
         && lk != 46                // '?'
         && lk != 47                // '?='
         && lk != 48                // '@='
         && lk != 50                // ']'
         && lk != 51                // '^'
         && lk != 52                // '^='
         && lk != 53                // 'break'
         && lk != 54                // 'case'
         && lk != 55                // 'continue'
         && lk != 56                // 'default'
         && lk != 57                // 'do'
         && lk != 58                // 'else'
         && lk != 59                // 'for'
         && lk != 60                // 'foreach'
         && lk != 61                // 'if'
         && lk != 62                // 'return'
         && lk != 63                // 'switch'
         && lk != 64                // 'while'
         && lk != 65                // '{'
         && lk != 66                // '|'
         && lk != 67                // '|='
         && lk != 68                // '||'
         && lk != 69                // '}'
         && lk != 70                // '~'
         && lk != 53681             // '[' ';' Identifier
         && lk != 70065             // '[' ';' Character
         && lk != 86449             // '[' ';' String
         && lk != 102833            // '[' ';' Integer
         && lk != 119217            // '[' ';' Real
         && lk != 135601            // '[' ';' Comment
         && lk != 168369            // '[' ';' '!'
         && lk != 299441            // '[' ';' '('
         && lk != 317745            // '[' ']' ')'
         && lk != 381361            // '[' ';' '+'
         && lk != 397745            // '[' ';' '++'
         && lk != 432433            // '[' ']' ','
         && lk != 446897            // '[' ';' '-'
         && lk != 463281            // '[' ';' '--'
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
         && lk != 807345            // '[' ';' '['
         && lk != 825649            // '[' ']' ']'
         && lk != 872881            // '[' ';' 'break'
         && lk != 905649            // '[' ';' 'continue'
         && lk != 938417            // '[' ';' 'do'
         && lk != 956721            // '[' ']' 'else'
         && lk != 971185            // '[' ';' 'for'
         && lk != 987569            // '[' ';' 'foreach'
         && lk != 1003953           // '[' ';' 'if'
         && lk != 1020337           // '[' ';' 'return'
         && lk != 1036721           // '[' ';' 'switch'
         && lk != 1053105           // '[' ';' 'while'
         && lk != 1069489           // '[' ';' '{'
         && lk != 1151409)          // '[' ';' '~'
        {
          lk = memoized(6, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(49);         // '['
              lookahead1W(19);      // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
            memoize(6, e0, lk);
          }
        }
        if (lk != -1
         && lk != 317745            // '[' ']' ')'
         && lk != 432433            // '[' ']' ','
         && lk != 547121            // '[' ']' ':'
         && lk != 825649            // '[' ']' ']'
         && lk != 956721)           // '[' ']' 'else'
        {
          break;
        }
        consume(49);                // '['
        lookahead1W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
      lookahead2W(37);              // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2307:                    // Identifier '('
        lookahead3W(18);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
     || lk == 166147                // Identifier '(' '!'
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
     || lk == 968963                // Identifier '(' 'for'
     || lk == 985347                // Identifier '(' 'foreach'
     || lk == 1001731               // Identifier '(' 'if'
     || lk == 1018115               // Identifier '(' 'return'
     || lk == 1034499               // Identifier '(' 'switch'
     || lk == 1050883               // Identifier '(' 'while'
     || lk == 1067267               // Identifier '(' '{'
     || lk == 1149187)              // Identifier '(' '~'
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
          for (;;)
          {
            lookahead1W(10);        // WhiteSpace^token | '(' | '.'
            if (l1 != 30)           // '.'
            {
              break;
            }
            consumeT(30);           // '.'
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(18);             // '('
          lookahead1W(18);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          if (l1 != 19)             // ')'
          {
            try_Arguments();
          }
          consumeT(19);             // ')'
          memoize(5, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(5, e0A, -2);
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
        lookahead1W(10);            // WhiteSpace^token | '(' | '.'
        if (l1 != 30)               // '.'
        {
          break;
        }
        consumeT(30);               // '.'
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(18);                 // '('
      lookahead1W(18);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
        lookahead1W(37);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' |
                                    // '/' | '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' |
                                    // '>=' | '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' |
                                    // 'return' | 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead1W(36);            // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 49:                    // '['
          lookahead2W(19);          // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
          switch (lk)
          {
          case 433:                 // '[' Identifier
            lookahead3W(32);        // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 4529:                // '[' ';'
            lookahead3W(22);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
            break;
          case 6321:                // '[' '['
            lookahead3W(19);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
            break;
          case 6449:                // '[' ']'
            lookahead3W(36);        // END | Identifier | Character | String | Integer | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' |
                                    // ')' | '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '@=' | '[' | ']' | '^' | '^=' | 'break' | 'case' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'for' | 'foreach' | 'if' | 'return' |
                                    // 'switch' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 8369:                // '[' '{'
            lookahead3W(20);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '}' | '~'
            break;
          case 1073:                // '[' Comment
          case 6833:                // '[' 'break'
          case 7089:                // '[' 'continue'
            lookahead3W(13);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 2353:                // '[' '('
          case 7345:                // '[' 'do'
          case 7985:                // '[' 'return'
            lookahead3W(16);        // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
            break;
          case 561:                 // '[' Character
          case 689:                 // '[' String
          case 817:                 // '[' Integer
          case 945:                 // '[' Real
            lookahead3W(29);        // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 7601:                // '[' 'for'
          case 7729:                // '[' 'foreach'
          case 7857:                // '[' 'if'
          case 8113:                // '[' 'switch'
          case 8241:                // '[' 'while'
            lookahead3W(1);         // WhiteSpace^token | '('
            break;
          case 1329:                // '[' '!'
          case 2993:                // '[' '+'
          case 3121:                // '[' '++'
          case 3505:                // '[' '-'
          case 3633:                // '[' '--'
          case 9009:                // '[' '~'
            lookahead3W(14);        // Identifier | Character | String | Integer | Real | WhiteSpace^token | '(' | '[' |
                                    // '{'
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
         && lk != 10                // '!'
         && lk != 11                // '!='
         && lk != 12                // '#='
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
         && lk != 42                // '>'
         && lk != 43                // '>='
         && lk != 44                // '>>'
         && lk != 45                // '>>='
         && lk != 46                // '?'
         && lk != 47                // '?='
         && lk != 48                // '@='
         && lk != 50                // ']'
         && lk != 51                // '^'
         && lk != 52                // '^='
         && lk != 53                // 'break'
         && lk != 54                // 'case'
         && lk != 55                // 'continue'
         && lk != 56                // 'default'
         && lk != 57                // 'do'
         && lk != 58                // 'else'
         && lk != 59                // 'for'
         && lk != 60                // 'foreach'
         && lk != 61                // 'if'
         && lk != 62                // 'return'
         && lk != 63                // 'switch'
         && lk != 64                // 'while'
         && lk != 65                // '{'
         && lk != 66                // '|'
         && lk != 67                // '|='
         && lk != 68                // '||'
         && lk != 69                // '}'
         && lk != 70                // '~'
         && lk != 53681             // '[' ';' Identifier
         && lk != 70065             // '[' ';' Character
         && lk != 86449             // '[' ';' String
         && lk != 102833            // '[' ';' Integer
         && lk != 119217            // '[' ';' Real
         && lk != 135601            // '[' ';' Comment
         && lk != 168369            // '[' ';' '!'
         && lk != 299441            // '[' ';' '('
         && lk != 317745            // '[' ']' ')'
         && lk != 381361            // '[' ';' '+'
         && lk != 397745            // '[' ';' '++'
         && lk != 432433            // '[' ']' ','
         && lk != 446897            // '[' ';' '-'
         && lk != 463281            // '[' ';' '--'
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
         && lk != 807345            // '[' ';' '['
         && lk != 825649            // '[' ']' ']'
         && lk != 872881            // '[' ';' 'break'
         && lk != 905649            // '[' ';' 'continue'
         && lk != 938417            // '[' ';' 'do'
         && lk != 956721            // '[' ']' 'else'
         && lk != 971185            // '[' ';' 'for'
         && lk != 987569            // '[' ';' 'foreach'
         && lk != 1003953           // '[' ';' 'if'
         && lk != 1020337           // '[' ';' 'return'
         && lk != 1036721           // '[' ';' 'switch'
         && lk != 1053105           // '[' ';' 'while'
         && lk != 1069489           // '[' ';' '{'
         && lk != 1151409)          // '[' ';' '~'
        {
          lk = memoized(6, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(49);         // '['
              lookahead1W(19);      // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
              if (l1 != 50)         // ']'
              {
                try_Arguments();
              }
              consumeT(50);         // ']'
              memoize(6, e0B, -1);
              continue;
            }
            catch (p1B)
            {
              b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
              b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
              b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
              b3 = b3B; e3 = e3B; end = e3B; }}}
              memoize(6, e0B, -2);
              break;
            }
          }
        }
        if (lk != -1
         && lk != 317745            // '[' ']' ')'
         && lk != 432433            // '[' ']' ','
         && lk != 547121            // '[' ']' ':'
         && lk != 825649            // '[' ']' ']'
         && lk != 956721)           // '[' ']' 'else'
        {
          break;
        }
        consumeT(49);               // '['
        lookahead1W(19);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
    consume(65);                    // '{'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Element();
    for (;;)
    {
      lookahead1W(11);              // WhiteSpace^token | ',' | '}'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consume(26);                  // ','
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(69);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(65);                   // '{'
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Element();
    for (;;)
    {
      lookahead1W(11);              // WhiteSpace^token | ',' | '}'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consumeT(26);                 // ','
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      try_Element();
    }
    consumeT(69);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(49);                    // '['
    lookahead1W(19);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    switch (l1)
    {
    case 35:                        // ';'
      lookahead2W(22);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 4515:                    // ';' ';'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 577955)               // ';' ';' ';'
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
        memoize(7, e0, lk);
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
     && lk != 1315                  // ';' '!'
     && lk != 2339                  // ';' '('
     && lk != 2979                  // ';' '+'
     && lk != 3107                  // ';' '++'
     && lk != 3491                  // ';' '-'
     && lk != 3619                  // ';' '--'
     && lk != 6307                  // ';' '['
     && lk != 6819                  // ';' 'break'
     && lk != 7075                  // ';' 'continue'
     && lk != 7331                  // ';' 'do'
     && lk != 7587                  // ';' 'for'
     && lk != 7715                  // ';' 'foreach'
     && lk != 7843                  // ';' 'if'
     && lk != 7971                  // ';' 'return'
     && lk != 8099                  // ';' 'switch'
     && lk != 8227                  // ';' 'while'
     && lk != 8355                  // ';' '{'
     && lk != 8995                  // ';' '~'
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
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
      whitespace();
      parse_Row();
    }
    consume(50);                    // ']'
    eventHandler.endNonterminal("Matrix", e0);
  }

  function try_Matrix()
  {
    consumeT(49);                   // '['
    lookahead1W(19);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' | 'break' | 'continue' |
                                    // 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    switch (l1)
    {
    case 35:                        // ';'
      lookahead2W(22);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 4515:                    // ';' ';'
        lookahead3W(22);            // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' | 'break' |
                                    // 'continue' | 'do' | 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' |
                                    // '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 577955)               // ';' ';' ';'
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
          try_Row();
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
     && lk != 50                    // ']'
     && lk != 419                   // ';' Identifier
     && lk != 547                   // ';' Character
     && lk != 675                   // ';' String
     && lk != 803                   // ';' Integer
     && lk != 931                   // ';' Real
     && lk != 1059                  // ';' Comment
     && lk != 1315                  // ';' '!'
     && lk != 2339                  // ';' '('
     && lk != 2979                  // ';' '+'
     && lk != 3107                  // ';' '++'
     && lk != 3491                  // ';' '-'
     && lk != 3619                  // ';' '--'
     && lk != 6307                  // ';' '['
     && lk != 6819                  // ';' 'break'
     && lk != 7075                  // ';' 'continue'
     && lk != 7331                  // ';' 'do'
     && lk != 7587                  // ';' 'for'
     && lk != 7715                  // ';' 'foreach'
     && lk != 7843                  // ';' 'if'
     && lk != 7971                  // ';' 'return'
     && lk != 8099                  // ';' 'switch'
     && lk != 8227                  // ';' 'while'
     && lk != 8355                  // ';' '{'
     && lk != 8995                  // ';' '~'
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
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
      lookahead2W(31);              // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | '^' | '^=' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(28);              // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4227                  // Identifier ':'
     || lk == 4229)                 // String ':'
    {
      whitespace();
      parse_Key();
      lookahead1W(5);               // WhiteSpace^token | ':'
      consume(33);                  // ':'
    }
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Element", e0);
  }

  function try_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(31);              // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '@=' | '[' | '^' | '^=' | '|' | '|=' | '||' | '}'
      break;
    case 5:                         // String
      lookahead2W(28);              // WhiteSpace^token | '!=' | '#=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '@=' | '^' | '^=' | '|' | '|=' | '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 4227                  // Identifier ':'
     || lk == 4229)                 // String ':'
    {
      try_Key();
      lookahead1W(5);               // WhiteSpace^token | ':'
      consumeT(33);                 // ':'
    }
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
      lookahead1W(13);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consume(26);                  // ','
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
      lookahead1W(13);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 26)                 // ','
      {
        break;
      }
      consumeT(26);                 // ','
      lookahead1W(16);              // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
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
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
    consume(19);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(18);                   // '('
    lookahead1W(16);                // Identifier | Character | String | Integer | Real | Comment | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' | 'continue' | 'do' |
                                    // 'for' | 'foreach' | 'if' | 'return' | 'switch' | 'while' | '{' | '~'
    try_Expression();
    lookahead1W(2);                 // WhiteSpace^token | ')'
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
    case 65:                        // '{'
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
    case 65:                        // '{'
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
      if (code != 9)                // WhiteSpace^token
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
    memo[(e << 3) + i] = v;
  }

  function memoized(i, e)
  {
    var v = memo[(e << 3) + i];
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
  for (var i = 0; i < 71; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 199 + s - 1;
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
  /*   0 */ 64, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6,
  /*  36 */ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 21, 20, 20, 22, 22, 23, 24, 25, 26, 27, 28,
  /*  64 */ 29, 30, 30, 31, 30, 32, 33, 34, 34, 34, 34, 34, 35, 34, 34, 34, 36, 34, 34, 34, 34, 37, 34, 34, 34, 34, 34,
  /*  91 */ 38, 39, 40, 41, 34, 7, 42, 43, 44, 45, 46, 47, 34, 48, 49, 34, 50, 51, 34, 52, 53, 36, 34, 54, 55, 56, 57,
  /* 118 */ 34, 58, 59, 34, 34, 60, 61, 62, 63, 7
];

MaiaScript.MAP1 =
[
  /*   0 */ 54, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  27 */ 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  54 */ 90, 122, 154, 186, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217,
  /*  76 */ 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 64, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1,
  /* 102 */ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  /* 136 */ 17, 18, 19, 20, 20, 20, 20, 21, 20, 20, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30, 31, 30, 32, 33, 34, 34,
  /* 163 */ 34, 34, 34, 35, 34, 34, 34, 36, 34, 34, 34, 34, 37, 34, 34, 34, 34, 34, 38, 39, 40, 41, 34, 7, 42, 43, 44,
  /* 190 */ 45, 46, 47, 34, 48, 49, 34, 50, 51, 34, 52, 53, 36, 34, 54, 55, 56, 57, 34, 58, 59, 34, 34, 60, 61, 62, 63,
  /* 217 */ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7
];

MaiaScript.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 7, 7
];

MaiaScript.INITIAL =
[
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 529, 18, 19, 20, 533, 22, 23, 24, 537, 26, 27, 28,
  /* 29 */ 29, 30, 31, 32, 33, 34, 35, 548, 549
];

MaiaScript.TRANSITION =
[
  /*    0 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*   18 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*   36 */ 2398, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*   54 */ 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2090, 2090, 2090, 2090, 2092, 2398, 2236, 2398,
  /*   72 */ 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398,
  /*   90 */ 2398, 2398, 2398, 2398, 2398, 2398, 2090, 2090, 2090, 2090, 2092, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  108 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  126 */ 2398, 2398, 2398, 2561, 2100, 2107, 2115, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398,
  /*  144 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2246,
  /*  162 */ 2128, 2397, 2082, 2398, 3535, 2398, 2398, 2398, 2398, 2398, 3671, 2599, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  180 */ 2398, 2398, 2398, 3557, 2136, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2160, 2163, 2398,
  /*  198 */ 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195,
  /*  216 */ 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2236, 2398, 2398, 2398,
  /*  234 */ 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398,
  /*  252 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2171, 2174, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599,
  /*  270 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  288 */ 2398, 2398, 2398, 2182, 2185, 2398, 2236, 2398, 2398, 2193, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398,
  /*  306 */ 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2705, 2205, 2216,
  /*  324 */ 2208, 2398, 2197, 2398, 2398, 2398, 2398, 2398, 2226, 2599, 2398, 2398, 3050, 2398, 2398, 3895, 2398, 2398,
  /*  342 */ 2398, 2409, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2244, 2254, 2266, 2261, 2269, 2398, 2236, 2398,
  /*  360 */ 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398,
  /*  378 */ 2398, 2398, 2398, 2398, 2398, 2398, 3058, 3056, 3059, 2974, 2971, 2398, 2236, 2398, 2398, 2398, 2398, 2398,
  /*  396 */ 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398,
  /*  414 */ 2398, 2398, 2398, 2398, 2398, 2277, 2280, 2398, 2236, 2398, 2398, 2288, 2398, 2398, 2398, 2599, 2398, 2398,
  /*  432 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3349, 3219,
  /*  450 */ 2299, 2306, 2309, 2398, 2317, 2398, 2398, 3271, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 3150,
  /*  468 */ 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3343, 3353, 2332, 2338, 2398,
  /*  486 */ 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195,
  /*  504 */ 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2231, 3118, 2351, 2358, 2366, 2398, 2379, 2407, 2398, 3642,
  /*  522 */ 3640, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 3150, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398,
  /*  540 */ 2398, 2398, 2398, 2398, 2398, 2417, 2398, 3275, 2428, 2398, 2343, 2441, 2398, 2398, 2398, 2398, 2420, 2599,
  /*  558 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  576 */ 2398, 2398, 2450, 2457, 2465, 2398, 2236, 2600, 2398, 2398, 2490, 2398, 2398, 2599, 2398, 2398, 2398, 2398,
  /*  594 */ 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3578, 2478, 2489,
  /*  612 */ 2481, 3436, 3873, 2498, 3438, 2398, 3140, 3436, 3720, 2509, 3439, 3437, 2526, 3436, 3437, 2534, 3436, 2584,
  /*  630 */ 3450, 3036, 3408, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3599, 2549, 2560, 2552, 3436, 3873, 2498,
  /*  648 */ 3438, 2398, 3140, 3436, 3720, 2509, 3439, 3437, 2569, 3436, 3437, 2577, 3436, 2541, 3450, 3036, 2760, 2398,
  /*  666 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3599, 2549, 2560, 2552, 3436, 3873, 2498, 3438, 2398, 3140, 3436,
  /*  684 */ 3720, 2509, 3439, 3437, 2569, 3436, 3437, 2577, 3436, 2797, 3450, 2592, 3248, 2398, 2398, 2398, 2398, 2398,
  /*  702 */ 2398, 2398, 2398, 3599, 2549, 2560, 2552, 3436, 3873, 2498, 3438, 2398, 3140, 3436, 2291, 2509, 3439, 3437,
  /*  720 */ 2608, 3436, 3437, 2577, 3436, 2541, 3450, 3036, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3427, 2398,
  /*  738 */ 2398, 2616, 2623, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  756 */ 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3755, 3756, 2643, 2636, 2646, 2398,
  /*  774 */ 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195,
  /*  792 */ 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2654, 2657, 2398, 2236, 2398, 2398, 3001,
  /*  810 */ 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398,
  /*  828 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2665, 2668, 2398, 2236, 2398, 3620, 2676, 2684, 2398, 2398, 2599,
  /*  846 */ 2120, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  864 */ 2398, 2398, 2398, 2692, 2695, 2398, 2236, 2398, 2398, 2398, 2703, 2398, 2398, 2599, 2398, 2398, 2398, 2398,
  /*  882 */ 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2713,
  /*  900 */ 2716, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /*  918 */ 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2724, 2727, 2398, 2236, 2398,
  /*  936 */ 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398,
  /*  954 */ 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436, 2236, 2953, 3438, 2398, 2398, 3436,
  /*  972 */ 2398, 2509, 3439, 3437, 2735, 3436, 3437, 2754, 3436, 2912, 3450, 3036, 2760, 2398, 2398, 2398, 2398, 2398,
  /*  990 */ 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436, 2236, 2953, 3438, 2398, 2398, 3436, 2398, 2509, 3439, 3437,
  /* 1008 */ 2735, 3436, 3437, 2754, 3436, 2912, 3200, 2768, 2783, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218,
  /* 1026 */ 3436, 3218, 2501, 3436, 2236, 2953, 3438, 2398, 2398, 3436, 2398, 2509, 3439, 3437, 2805, 3436, 3437, 2754,
  /* 1044 */ 3436, 2912, 3450, 3036, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436,
  /* 1062 */ 2433, 2813, 3438, 2398, 2398, 3436, 2398, 2824, 3439, 3437, 2735, 3436, 3437, 2754, 3436, 2912, 3450, 3036,
  /* 1080 */ 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436, 2236, 2953, 3438, 2398,
  /* 1098 */ 2398, 3436, 2398, 2742, 3439, 3437, 2398, 3436, 3437, 2217, 3436, 3217, 3437, 2391, 2760, 2398, 2398, 2398,
  /* 1116 */ 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436, 2470, 2836, 3438, 2398, 2398, 3436, 2442, 2847,
  /* 1134 */ 3439, 3437, 2398, 3436, 3437, 2217, 3436, 3217, 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /* 1152 */ 3218, 2218, 3436, 3218, 2501, 3436, 2236, 2953, 3438, 2398, 2398, 3436, 2398, 2742, 3439, 3437, 2399, 3436,
  /* 1170 */ 3437, 2217, 3436, 3217, 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218,
  /* 1188 */ 2501, 3436, 2628, 2859, 3438, 2398, 2398, 3436, 2870, 2742, 3439, 3437, 3842, 3436, 3437, 2217, 3436, 3217,
  /* 1206 */ 3437, 2391, 3656, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3777, 2888, 2883, 2891, 2398, 2236, 2398,
  /* 1224 */ 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398,
  /* 1242 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3814, 2398, 2398, 2398, 2398, 2398,
  /* 1260 */ 3868, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3173, 2899, 2398, 2398, 2398, 2398, 2398,
  /* 1278 */ 2398, 2398, 2398, 2323, 2928, 2926, 2324, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398,
  /* 1296 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /* 1314 */ 2398, 2936, 2939, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398,
  /* 1332 */ 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3449,
  /* 1350 */ 2947, 3791, 3213, 2398, 2398, 3436, 2398, 2509, 2518, 2964, 2735, 2982, 3738, 2754, 2990, 2912, 3450, 3036,
  /* 1368 */ 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3000, 3285, 3009, 3020, 3012, 3436, 2236, 2953, 3438, 2398,
  /* 1386 */ 2398, 3436, 3671, 2509, 3439, 3437, 2735, 3436, 3437, 2754, 3436, 2912, 3450, 3029, 2760, 2398, 2398, 2398,
  /* 1404 */ 2398, 2398, 2398, 2398, 3067, 3306, 3075, 3087, 3079, 3436, 2236, 2953, 3438, 2398, 2398, 3436, 2398, 2509,
  /* 1422 */ 3439, 3437, 2735, 3436, 3461, 2754, 3096, 2912, 3108, 2768, 2783, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /* 1440 */ 3116, 2152, 3126, 3138, 3130, 3436, 2236, 2953, 3438, 2398, 2398, 3436, 2398, 2509, 3439, 3437, 2735, 3436,
  /* 1458 */ 3437, 2754, 3436, 2912, 3450, 3036, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3148, 3363, 3158, 3171,
  /* 1476 */ 3163, 3191, 2236, 3187, 3181, 2398, 2398, 3199, 2398, 3208, 3439, 3227, 2805, 3235, 3256, 2754, 3796, 2912,
  /* 1494 */ 3450, 3036, 3264, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3283, 3384, 3293, 3304, 3296, 2513, 2433, 3314,
  /* 1512 */ 3438, 2398, 2398, 3689, 3671, 2824, 3242, 3437, 2735, 3436, 3437, 2754, 3436, 2912, 3450, 3029, 2760, 2398,
  /* 1530 */ 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3630, 2385, 2953, 3322, 2398, 2398, 3436,
  /* 1548 */ 2398, 2742, 3439, 3437, 2398, 3436, 3437, 2217, 3436, 2150, 3336, 3727, 2760, 2398, 2398, 2398, 2398, 2398,
  /* 1566 */ 2398, 2398, 3361, 3394, 3371, 3382, 3374, 3436, 2236, 2953, 3438, 2398, 2398, 2862, 3392, 2742, 3402, 3437,
  /* 1584 */ 2398, 3436, 3416, 2217, 3435, 3217, 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218,
  /* 1602 */ 3436, 3218, 2501, 3436, 2236, 2953, 3438, 2398, 2398, 3436, 2398, 2742, 3439, 3437, 2398, 3436, 2516, 3021,
  /* 1620 */ 3436, 3217, 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3447,
  /* 1638 */ 2875, 3458, 3589, 2398, 2398, 3436, 2398, 3469, 3439, 2839, 3481, 3100, 3437, 2217, 2956, 3217, 3705, 2391,
  /* 1656 */ 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436, 2236, 2953, 3438, 2398,
  /* 1674 */ 2398, 3491, 3671, 2906, 3439, 3437, 2398, 3436, 3437, 2217, 3494, 3502, 3512, 2918, 2760, 2398, 2398, 2398,
  /* 1692 */ 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3543, 2236, 2143, 3801, 2398, 2398, 3436, 2398, 2742,
  /* 1710 */ 3439, 3437, 2398, 3436, 3437, 2217, 3436, 3217, 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /* 1728 */ 3555, 3483, 3565, 3576, 3568, 3436, 2236, 3734, 3438, 2398, 2398, 2828, 3671, 2790, 3439, 3437, 2398, 3436,
  /* 1746 */ 3693, 2217, 3586, 3217, 3437, 2918, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3597, 3504, 3607, 3618,
  /* 1764 */ 3610, 3436, 2236, 2953, 3438, 2398, 2398, 3628, 3638, 2742, 3650, 3437, 2398, 3436, 3437, 2217, 3436, 3217,
  /* 1782 */ 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436, 2236, 2953,
  /* 1800 */ 3438, 2398, 2398, 2851, 3671, 2775, 3439, 3664, 2398, 3684, 3437, 2217, 3436, 3217, 2992, 3328, 2760, 2398,
  /* 1818 */ 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218, 3436, 3218, 2501, 3436, 2628, 2859, 3438, 2398, 2398, 3436,
  /* 1836 */ 2870, 2742, 3439, 3547, 3842, 3701, 3713, 2217, 3473, 3217, 2746, 3043, 3656, 2398, 2398, 2398, 2398, 2398,
  /* 1854 */ 2398, 2398, 3753, 3746, 3764, 3775, 3767, 2816, 2236, 2953, 3785, 2398, 2398, 3436, 2398, 2742, 3439, 3437,
  /* 1872 */ 2398, 3436, 3437, 2217, 3436, 3217, 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3218, 2218,
  /* 1890 */ 3436, 3218, 2501, 3436, 2371, 2953, 3438, 2398, 2398, 3436, 3809, 2742, 3439, 3437, 2398, 3436, 3437, 2217,
  /* 1908 */ 3436, 3217, 3437, 2391, 2760, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3822, 3828, 3839, 3831, 2398,
  /* 1926 */ 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195,
  /* 1944 */ 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3850, 3853, 2398, 2236, 2398, 2398, 2398,
  /* 1962 */ 3676, 2398, 2398, 2599, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398,
  /* 1980 */ 2398, 2398, 2398, 2398, 2398, 3423, 3519, 3861, 3525, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599,
  /* 1998 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /* 2016 */ 2398, 3088, 3881, 3892, 3884, 2398, 2236, 2398, 2398, 2398, 2398, 2398, 2398, 2599, 2398, 2398, 2398, 2398,
  /* 2034 */ 2398, 2398, 2398, 2398, 2398, 2195, 2080, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 3530, 2398,
  /* 2052 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398,
  /* 2070 */ 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 2398, 0, 0, 53, 53, 53, 53, 53, 0, 0, 0, 2598, 2598,
  /* 2092 */ 2598, 2598, 2598, 2598, 2598, 2598, 0, 0, 2816, 2816, 2816, 2816, 2816, 2816, 2816, 2816, 71, 71, 71, 71,
  /* 2112 */ 71, 71, 71, 2887, 2887, 2887, 2887, 2887, 0, 0, 0, 0, 0, 9984, 11776, 0, 53, 53, 53, 53, 53, 53, 53, 53, 0,
  /* 2137 */ 0, 1589, 1536, 1536, 1536, 1536, 0, 0, 0, 1063, 1134, 14887, 1135, 1063, 39, 0, 0, 0, 0, 0, 0, 1066, 1066,
  /* 2160 */ 0, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 3657, 3657, 3657, 3657, 3657, 3657, 3657, 0, 0, 0, 0, 4170,
  /* 2184 */ 4170, 4170, 4170, 4170, 4170, 4170, 0, 0, 0, 0, 4352, 0, 0, 0, 0, 0, 0, 53, 0, 0, 0, 54, 54, 54, 54, 54,
  /* 2210 */ 54, 54, 54, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 1063, 1063, 0, 0, 53, 1280, 100, 0, 0, 0, 0, 50, 0, 0, 0, 0,
  /* 2240 */ 53, 100, 0, 0, 0, 4864, 0, 0, 0, 0, 0, 0, 53, 53, 0, 0, 4864, 0, 0, 0, 4864, 4864, 0, 0, 0, 0, 4864, 4864,
  /* 2268 */ 4864, 4864, 4864, 4864, 4864, 4864, 0, 0, 0, 0, 5451, 5451, 5451, 5451, 5451, 5451, 5451, 0, 0, 0, 0, 0,
  /* 2290 */ 5632, 0, 0, 0, 0, 0, 102, 2184, 0, 6193, 6193, 6193, 6193, 6193, 6193, 6193, 6193, 6220, 6220, 6220, 6220,
  /* 2311 */ 6220, 6220, 6220, 0, 0, 0, 6400, 0, 0, 0, 53, 100, 0, 0, 0, 0, 13056, 13056, 0, 0, 0, 6912, 0, 6912, 6912,
  /* 2336 */ 6912, 0, 6912, 6912, 6912, 6912, 6912, 0, 0, 0, 0, 53, 100, 0, 103, 7226, 7226, 7226, 7226, 7226, 7226,
  /* 2357 */ 7226, 7226, 7245, 7245, 7245, 7245, 7245, 7245, 7245, 7255, 7255, 7255, 7255, 7255, 0, 0, 0, 0, 53, 100, 0,
  /* 2378 */ 107, 0, 7424, 0, 0, 53, 100, 0, 0, 0, 98, 53, 100, 0, 0, 0, 1063, 1063, 1063, 53, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2406 */ 159, 0, 7424, 0, 0, 0, 0, 0, 0, 53, 1380, 0, 0, 7936, 0, 0, 0, 0, 0, 103, 0, 0, 0, 0, 7936, 0, 7936, 0, 0,
  /* 2435 */ 0, 0, 53, 100, 0, 1792, 103, 0, 0, 0, 0, 0, 0, 0, 1792, 59, 59, 59, 59, 59, 59, 59, 59, 8270, 8270, 8270,
  /* 2461 */ 8270, 8270, 8270, 8270, 8280, 8280, 8280, 8280, 8280, 0, 0, 0, 0, 53, 100, 0, 1896, 1848, 1848, 1848, 1848,
  /* 2482 */ 1848, 1848, 1848, 1848, 0, 1063, 1063, 1848, 0, 0, 0, 0, 0, 0, 0, 2412, 1849, 102, 0, 1063, 1063, 1063,
  /* 2504 */ 1063, 1063, 0, 1063, 1063, 0, 0, 1899, 2412, 1063, 1063, 1063, 1063, 39, 1063, 1063, 1063, 1063, 1063, 0,
  /* 2524 */ 0, 1170, 0, 153, 53, 132, 155, 0, 158, 2184, 171, 172, 173, 174, 175, 158, 2224, 1063, 1063, 131, 131, 185,
  /* 2546 */ 185, 0, 2224, 1849, 1849, 1849, 1849, 1849, 1849, 1849, 1849, 0, 1063, 1063, 1849, 0, 0, 0, 0, 0, 0, 0,
  /* 2568 */ 2816, 0, 154, 53, 132, 156, 0, 158, 2184, 172, 172, 174, 174, 0, 158, 2224, 1063, 1063, 131, 131, 185, 185,
  /* 2590 */ 187, 2224, 100, 100, 193, 1063, 1063, 1063, 53, 0, 0, 0, 2412, 0, 0, 0, 0, 0, 0, 154, 53, 0, 156, 0, 158,
  /* 2615 */ 2184, 8704, 79, 79, 8783, 79, 79, 8783, 79, 8783, 8783, 8783, 8783, 0, 0, 0, 0, 53, 100, 0, 1897, 9216, 0,
  /* 2638 */ 0, 0, 9216, 0, 0, 9216, 9216, 9216, 9216, 9216, 9216, 9216, 9216, 0, 0, 0, 0, 9552, 9552, 9552, 9552, 9552,
  /* 2660 */ 9552, 9552, 0, 0, 0, 0, 10577, 10577, 10577, 10577, 10577, 10577, 10577, 0, 0, 0, 3840, 4608, 5888, 6656,
  /* 2680 */ 7680, 8448, 8960, 10240, 10752, 11264, 12288, 12544, 13568, 17408, 7680, 8448, 0, 11090, 11090, 11090,
  /* 2696 */ 11090, 11090, 11090, 11090, 0, 0, 0, 0, 11639, 0, 0, 0, 0, 0, 0, 54, 54, 0, 12115, 12115, 12115, 12115,
  /* 2718 */ 12115, 12115, 12115, 0, 0, 0, 0, 84, 84, 84, 84, 84, 84, 84, 0, 0, 0, 0, 154, 53, 0, 156, 0, 158, 0, 0, 0,
  /* 2745 */ 2412, 1063, 1063, 1063, 1063, 1063, 1145, 1063, 0, 172, 172, 174, 174, 0, 158, 0, 1063, 53, 53, 53, 53, 53,
  /* 2767 */ 0, 100, 192, 0, 1063, 1063, 1063, 53, 0, 0, 0, 2412, 1063, 1063, 1063, 1164, 100, 1063, 53, 53, 53, 53,
  /* 2789 */ 191, 0, 0, 0, 2412, 1063, 1063, 15499, 1063, 1063, 184, 131, 186, 185, 0, 2224, 0, 154, 53, 0, 156, 0, 158,
  /* 2812 */ 159, 1792, 0, 0, 1063, 1063, 1063, 1063, 1063, 1063, 1119, 1063, 1792, 0, 1899, 2412, 1063, 1063, 1063,
  /* 2831 */ 1063, 124, 1063, 1063, 1063, 1896, 0, 0, 1063, 1063, 1063, 1063, 1063, 1063, 1145, 0, 1896, 0, 0, 2412,
  /* 2851 */ 1063, 1063, 1063, 1063, 1063, 1149, 1063, 1063, 1897, 0, 0, 1063, 1063, 1063, 1063, 1063, 1063, 1150, 1151,
  /* 2870 */ 0, 0, 130, 0, 133, 0, 0, 0, 0, 53, 100, 0, 1898, 12800, 0, 0, 0, 0, 12800, 12800, 12800, 12800, 12800,
  /* 2893 */ 12800, 12800, 12800, 0, 0, 0, 0, 0, 195, 99, 99, 99, 99, 0, 0, 0, 2412, 1063, 1162, 1063, 1063, 131, 131,
  /* 2916 */ 185, 185, 0, 0, 0, 1063, 1063, 1063, 53, 100, 13056, 0, 0, 0, 13056, 0, 0, 13056, 0, 0, 0, 13397, 13397,
  /* 2939 */ 13397, 13397, 13397, 13397, 13397, 0, 0, 0, 0, 0, 97, 0, 53, 100, 0, 0, 0, 1063, 1063, 1063, 1063, 1063,
  /* 2961 */ 1063, 1063, 1207, 1063, 1063, 1172, 1063, 1063, 1063, 1063, 0, 0, 0, 5120, 5120, 0, 0, 0, 5120, 0, 0, 1184,
  /* 2983 */ 1063, 1063, 1063, 1063, 1063, 1063, 1190, 1063, 1202, 1063, 1063, 1063, 1063, 1063, 1063, 39, 0, 1064, 0,
  /* 3002 */ 0, 0, 0, 0, 0, 0, 9846, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 0, 1063, 1063, 1084, 0, 0, 0, 0, 0,
  /* 3026 */ 0, 0, 13863, 100, 100, 0, 1063, 1063, 1063, 53, 100, 100, 0, 1063, 1063, 1063, 53, 0, 0, 0, 1218, 1063,
  /* 3048 */ 1063, 53, 0, 0, 0, 1280, 0, 1280, 0, 0, 0, 0, 5120, 0, 0, 0, 0, 0, 0, 1065, 0, 0, 0, 0, 0, 0, 51, 1085,
  /* 3076 */ 1085, 1085, 1085, 1085, 1085, 1085, 1092, 1092, 0, 1063, 1063, 1092, 0, 0, 0, 0, 0, 0, 0, 18176, 1063,
  /* 3097 */ 1063, 1063, 1204, 1063, 1063, 1063, 1063, 1063, 1189, 1063, 1063, 1063, 1213, 1063, 1063, 1063, 1063, 1063,
  /* 3115 */ 191, 1066, 0, 0, 0, 0, 0, 0, 0, 55, 7226, 1086, 1086, 1086, 1086, 1086, 1086, 1086, 1093, 1093, 0, 1063,
  /* 3137 */ 1063, 1093, 0, 0, 0, 0, 0, 0, 0, 102, 0, 1067, 0, 0, 0, 0, 0, 0, 0, 176, 0, 1067, 1067, 1067, 1067, 1067,
  /* 3163 */ 1067, 1067, 1067, 1094, 1094, 0, 1063, 1063, 1094, 0, 0, 0, 0, 0, 0, 0, 195, 134, 1136, 1063, 1063, 1063,
  /* 3185 */ 1140, 1063, 0, 0, 0, 1063, 1063, 1116, 1063, 1063, 1063, 1118, 1063, 1063, 1144, 1063, 1063, 1063, 1063,
  /* 3204 */ 1063, 1063, 1063, 191, 0, 0, 1899, 2412, 1161, 1063, 1063, 1063, 1139, 1063, 1063, 0, 0, 0, 0, 0, 0, 0,
  /* 3226 */ 6193, 39, 1063, 1063, 1173, 1063, 1063, 1063, 14080, 1063, 1063, 1186, 1063, 1063, 1063, 14119, 1063, 1063,
  /* 3244 */ 1063, 1168, 1063, 0, 0, 1063, 53, 53, 53, 199, 53, 0, 15143, 1063, 1063, 1063, 1063, 1063, 1063, 16640, 0,
  /* 3265 */ 14375, 53, 53, 53, 53, 53, 0, 0, 0, 6400, 0, 0, 0, 0, 0, 7936, 7936, 7936, 1068, 0, 0, 0, 0, 0, 0, 0, 1064,
  /* 3292 */ 1064, 1087, 1087, 1087, 1087, 1087, 1087, 1087, 1087, 0, 1063, 1063, 1087, 0, 0, 0, 0, 0, 0, 0, 1065, 1065,
  /* 3314 */ 1792, 0, 0, 1063, 1063, 1063, 1063, 15911, 1063, 1063, 1138, 1063, 1063, 1063, 0, 0, 0, 1063, 1063, 14631,
  /* 3334 */ 53, 100, 1063, 1063, 1063, 16423, 1063, 1063, 1063, 0, 0, 0, 6912, 6912, 6912, 0, 0, 0, 49, 0, 0, 0, 0, 0,
  /* 3358 */ 6912, 6912, 0, 1069, 0, 0, 0, 0, 0, 0, 0, 1067, 1067, 1088, 1088, 1088, 1088, 1088, 1088, 1088, 1088, 0,
  /* 3380 */ 1063, 1063, 1088, 0, 0, 0, 0, 0, 0, 0, 1068, 1068, 0, 129, 0, 0, 0, 0, 0, 0, 1069, 1069, 1165, 1166, 1063,
  /* 3405 */ 1063, 1063, 0, 0, 1063, 53, 197, 198, 53, 53, 0, 1063, 1063, 1191, 1063, 1063, 1063, 1063, 0, 0, 0, 17920,
  /* 3427 */ 0, 0, 0, 0, 0, 8704, 0, 0, 1201, 1063, 1063, 1063, 1063, 1063, 1063, 1063, 1063, 0, 0, 1063, 1063, 1063,
  /* 3449 */ 1114, 1063, 1063, 1063, 1063, 1063, 1063, 1063, 53, 1898, 0, 0, 1063, 1063, 1063, 1063, 1063, 1063, 1194,
  /* 3468 */ 0, 1898, 1792, 0, 2412, 1063, 1063, 1063, 1063, 1063, 1205, 1063, 1063, 152, 0, 0, 0, 0, 0, 0, 0, 1070,
  /* 3490 */ 1070, 1063, 1063, 1146, 1063, 1063, 1063, 1063, 1063, 1063, 1206, 1063, 39, 1063, 0, 0, 0, 0, 0, 0, 1071,
  /* 3511 */ 1071, 1212, 1063, 16167, 1063, 1063, 1063, 1063, 0, 0, 0, 17920, 0, 0, 17920, 17920, 17920, 17920, 17920,
  /* 3530 */ 0, 0, 0, 0, 768, 0, 0, 0, 0, 1536, 100, 0, 0, 1115, 39, 1063, 1117, 1063, 1063, 1063, 1063, 1174, 1063,
  /* 3553 */ 1063, 0, 1070, 0, 0, 0, 0, 0, 0, 0, 1589, 100, 1089, 1089, 1089, 1089, 1089, 1089, 1089, 1089, 0, 1063,
  /* 3575 */ 1113, 1089, 0, 0, 0, 0, 0, 0, 0, 1848, 1848, 1063, 1063, 1203, 1063, 1063, 1063, 1063, 1063, 1141, 0, 0,
  /* 3597 */ 1071, 0, 0, 0, 0, 0, 0, 0, 1849, 1849, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 0, 1063, 1063, 1090,
  /* 3619 */ 0, 0, 0, 0, 0, 0, 0, 3072, 3328, 1063, 1145, 1063, 1063, 1063, 1063, 1063, 1063, 1063, 1120, 128, 0, 0, 0,
  /* 3642 */ 0, 0, 0, 0, 7424, 0, 0, 0, 1063, 1063, 1167, 1063, 1169, 0, 0, 1063, 196, 53, 53, 53, 53, 0, 1063, 1171,
  /* 3666 */ 1063, 1063, 1063, 1175, 1063, 0, 0, 53, 0, 100, 0, 0, 0, 0, 0, 17664, 0, 0, 1063, 1185, 1063, 1063, 1188,
  /* 3689 */ 1063, 1063, 1063, 1147, 1063, 1063, 1063, 1063, 1063, 1193, 1063, 0, 1063, 1063, 1063, 1187, 1063, 1063,
  /* 3707 */ 1063, 1063, 1214, 1063, 1063, 0, 1063, 1063, 1063, 1192, 1063, 1063, 1063, 0, 0, 53, 0, 132, 102, 2184, 0,
  /* 3728 */ 0, 0, 1063, 15655, 1063, 53, 0, 0, 0, 1133, 1063, 1063, 1063, 1063, 1175, 1063, 1063, 0, 52, 0, 0, 0, 0, 0,
  /* 3752 */ 1072, 1072, 0, 0, 0, 0, 0, 0, 0, 9216, 0, 0, 1091, 1091, 1091, 1091, 1091, 1091, 1091, 1091, 0, 1063, 1063,
  /* 3775 */ 1091, 0, 0, 0, 0, 0, 0, 0, 12800, 12800, 1063, 1137, 1063, 1063, 1063, 1063, 0, 0, 0, 1063, 1114, 1063,
  /* 3797 */ 1063, 1063, 1063, 16679, 1063, 1063, 1063, 1134, 14887, 1063, 0, 0, 0, 0, 131, 0, 135, 0, 0, 0, 0, 99, 101,
  /* 3820 */ 0, 0, 0, 16896, 0, 0, 0, 0, 16896, 16896, 16896, 16896, 16896, 16896, 16896, 16896, 0, 0, 0, 16896, 0, 0,
  /* 3842 */ 0, 0, 0, 0, 0, 157, 0, 0, 0, 17238, 17238, 17238, 17238, 17238, 17238, 17238, 0, 0, 0, 17920, 0, 17920,
  /* 3864 */ 17920, 0, 0, 17920, 0, 0, 53, 0, 134, 0, 0, 0, 0, 53, 100, 102, 1849, 18176, 18176, 18176, 18176, 18176,
  /* 3886 */ 18176, 18176, 18176, 0, 0, 0, 18176, 0, 0, 0, 0, 0, 0, 0, 1280, 0, 0
];

MaiaScript.EXPECTED =
[
  /*   0 */ 150, 154, 156, 160, 167, 164, 171, 174, 178, 182, 184, 184, 189, 342, 196, 184, 184, 207, 211, 215, 216,
  /*  21 */ 257, 184, 184, 340, 225, 228, 184, 184, 199, 184, 185, 232, 237, 184, 184, 184, 185, 233, 238, 184, 184,
  /*  42 */ 242, 237, 184, 202, 248, 203, 250, 244, 216, 254, 307, 261, 264, 268, 272, 276, 280, 216, 216, 216, 334,
  /*  63 */ 216, 327, 284, 299, 306, 216, 288, 292, 218, 216, 332, 216, 216, 326, 296, 303, 311, 216, 333, 216, 326,
  /*  84 */ 317, 303, 216, 216, 216, 327, 318, 325, 216, 191, 322, 216, 192, 325, 331, 216, 216, 313, 338, 346, 349,
  /* 105 */ 353, 357, 361, 363, 216, 216, 216, 219, 216, 216, 216, 220, 216, 216, 216, 221, 216, 216, 217, 216, 216,
  /* 126 */ 216, 217, 216, 216, 216, 218, 216, 216, 217, 216, 216, 219, 216, 216, 218, 216, 216, 216, 216, 216, 216,
  /* 147 */ 216, 216, 216, 520, 262656, 524800, 16777728, 268435968, 512, 512, 512, 1074004480, 67109376, 67633664,
  /* 161 */ 67109376, 262904, 428082936, 428083196, 495192056, 495192056, 428083192, 428607480, 428083192, 428083192,
  /* 171 */ 495716344, -1141114368, -1074529792, -1074529792, -67110400, -525824, -525824, -1074266120, -1074266120,
  /* 180 */ -524296, -1073741832, -8, 512, 8, 8, 8, 8, 0, 16777216, 268435456, 0, 0, 0, 8388608, 268435456, 192,
  /* 197 */ 268435584, 256, 8, 0, 0, 8, 8, 8, 32, 16, 8, 8, 2048, 4096, 16384, 196608, 6291456, 50331648, 805306368, 0,
  /* 217 */ 0, 0, 0, 1, 0, 0, 0, 24, 16, 128, 128, 64, 64, 64, 256, 0, 32, 32, 16, 16, 16, 16, 16, 128, 8, 8, 8, 32, 32,
  /* 246 */ 32, 0, 16, 16, 16, 8, 32, 32, 2, 8, 4194304, 0, 0, 805306496, 256, 262152, 131072, 131072, -90046456,
  /* 265 */ -89784312, -90046456, -90046456, -89784312, -90046456, -69074936, -1703926, 1703925, 1703925, 1703927,
  /* 275 */ 1966077, 1834997, 1834999, 2097149, -88342531, -88342529, -88342529, -1, -1, 33554432, 402653184, 536870912,
  /* 287 */ 1073741824, 1, 4, 224, 512, 14336, 32768, 65536, 1048576, 8388608, 402653184, 1073741824, 0x80000000, 0,
  /* 301 */ 12582912, 50331648, 0, 4194304, 16777216, 67108864, 0, 0, 0, 262144, 64, 8192, 0, 0, 1, 2, 8388608,
  /* 318 */ 268435456, 1073741824, 0x80000000, 0, 268435456, 1073741824, 0x80000000, 16777216, 0, 0, 0, 2097152,
  /* 330 */ 8388608, 8388608, 0, 0, 0, 4194304, 0, 0, 0, 32, 0, 0, 32, 16, 128, 192, 2, 66, 67, 67, 99, 67, 67, 99, 99,
  /* 355 */ 99, 28, 60, 60, 28, 28, 60, 28, 127, 127, 127, 0
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
  "'@='",
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
  "'for'",
  "'foreach'",
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
