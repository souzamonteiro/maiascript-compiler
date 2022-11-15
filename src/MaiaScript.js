// This file was generated on Mon Nov 14, 2022 22:25 (UTC) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
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
    lookahead1W(31);                // END | EOF | Identifier | Character | String | Integer | Complex | Real |
                                    // Comment | WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(26);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
      lookahead2W(46);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9859:                    // Identifier '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 77:                        // '{'
      lookahead2W(33);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 461:                     // '{' Identifier
        lookahead3W(44);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' |
                                    // '|=' | '||' | '}' | '~'
        break;
      case 717:                     // '{' String
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 6477:                    // '{' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 10445:                   // '{' '}'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 589:                     // '{' Character
      case 845:                     // '{' Integer
      case 973:                     // '{' Complex
      case 1101:                    // '{' Real
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 7885:                    // '{' 'f32'
      case 8013:                    // '{' 'f64'
      case 8397:                    // '{' 'i32'
      case 8525:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1229:                    // '{' Comment
      case 4813:                    // '{' ';'
      case 6989:                    // '{' 'break'
      case 7373:                    // '{' 'continue'
      case 9933:                    // '{' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1613:                    // '{' '!'
      case 3277:                    // '{' '+'
      case 3405:                    // '{' '++'
      case 3789:                    // '{' '-'
      case 3917:                    // '{' '--'
      case 10573:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8141:                    // '{' 'for'
      case 8269:                    // '{' 'foreach'
      case 8653:                    // '{' 'if'
      case 9293:                    // '{' 'switch'
      case 9421:                    // '{' 'test'
      case 9805:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2637:                    // '{' '('
      case 7629:                    // '{' 'do'
      case 8781:                    // '{' 'import'
      case 8909:                    // '{' 'include'
      case 9037:                    // '{' 'local'
      case 9165:                    // '{' 'return'
      case 9549:                    // '{' 'throw'
      case 9677:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 82                    // '~'
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
     && lk != 3661                  // '{' ','
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
     && lk != 8323                  // Identifier 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8707                  // Identifier 'import'
     && lk != 8835                  // Identifier 'include'
     && lk != 8963                  // Identifier 'local'
     && lk != 9091                  // Identifier 'return'
     && lk != 9219                  // Identifier 'switch'
     && lk != 9347                  // Identifier 'test'
     && lk != 9475                  // Identifier 'throw'
     && lk != 9603                  // Identifier 'try'
     && lk != 9731                  // Identifier 'while'
     && lk != 9987                  // Identifier '|'
     && lk != 10115                 // Identifier '|='
     && lk != 10243                 // Identifier '||'
     && lk != 10371                 // Identifier '}'
     && lk != 10499                 // Identifier '~'
     && lk != 49613                 // '{' Identifier Identifier
     && lk != 49741                 // '{' Character Identifier
     && lk != 49869                 // '{' String Identifier
     && lk != 49997                 // '{' Integer Identifier
     && lk != 50125                 // '{' Complex Identifier
     && lk != 50253                 // '{' Real Identifier
     && lk != 50381                 // '{' Comment Identifier
     && lk != 53965                 // '{' ';' Identifier
     && lk != 56141                 // '{' 'break' Identifier
     && lk != 56525                 // '{' 'continue' Identifier
     && lk != 65997                 // '{' Identifier Character
     && lk != 66125                 // '{' Character Character
     && lk != 66253                 // '{' String Character
     && lk != 66381                 // '{' Integer Character
     && lk != 66509                 // '{' Complex Character
     && lk != 66637                 // '{' Real Character
     && lk != 66765                 // '{' Comment Character
     && lk != 70349                 // '{' ';' Character
     && lk != 72525                 // '{' 'break' Character
     && lk != 72909                 // '{' 'continue' Character
     && lk != 82381                 // '{' Identifier String
     && lk != 82509                 // '{' Character String
     && lk != 82637                 // '{' String String
     && lk != 82765                 // '{' Integer String
     && lk != 82893                 // '{' Complex String
     && lk != 83021                 // '{' Real String
     && lk != 83149                 // '{' Comment String
     && lk != 86733                 // '{' ';' String
     && lk != 88909                 // '{' 'break' String
     && lk != 89293                 // '{' 'continue' String
     && lk != 98765                 // '{' Identifier Integer
     && lk != 98893                 // '{' Character Integer
     && lk != 99021                 // '{' String Integer
     && lk != 99149                 // '{' Integer Integer
     && lk != 99277                 // '{' Complex Integer
     && lk != 99405                 // '{' Real Integer
     && lk != 99533                 // '{' Comment Integer
     && lk != 103117                // '{' ';' Integer
     && lk != 105293                // '{' 'break' Integer
     && lk != 105677                // '{' 'continue' Integer
     && lk != 115149                // '{' Identifier Complex
     && lk != 115277                // '{' Character Complex
     && lk != 115405                // '{' String Complex
     && lk != 115533                // '{' Integer Complex
     && lk != 115661                // '{' Complex Complex
     && lk != 115789                // '{' Real Complex
     && lk != 115917                // '{' Comment Complex
     && lk != 119501                // '{' ';' Complex
     && lk != 121677                // '{' 'break' Complex
     && lk != 122061                // '{' 'continue' Complex
     && lk != 131533                // '{' Identifier Real
     && lk != 131661                // '{' Character Real
     && lk != 131789                // '{' String Real
     && lk != 131917                // '{' Integer Real
     && lk != 132045                // '{' Complex Real
     && lk != 132173                // '{' Real Real
     && lk != 132301                // '{' Comment Real
     && lk != 135885                // '{' ';' Real
     && lk != 138061                // '{' 'break' Real
     && lk != 138445                // '{' 'continue' Real
     && lk != 147917                // '{' Identifier Comment
     && lk != 148045                // '{' Character Comment
     && lk != 148173                // '{' String Comment
     && lk != 148301                // '{' Integer Comment
     && lk != 148429                // '{' Complex Comment
     && lk != 148557                // '{' Real Comment
     && lk != 148685                // '{' Comment Comment
     && lk != 152269                // '{' ';' Comment
     && lk != 154445                // '{' 'break' Comment
     && lk != 154829                // '{' 'continue' Comment
     && lk != 197069                // '{' Identifier '!'
     && lk != 197197                // '{' Character '!'
     && lk != 197325                // '{' String '!'
     && lk != 197453                // '{' Integer '!'
     && lk != 197581                // '{' Complex '!'
     && lk != 197709                // '{' Real '!'
     && lk != 197837                // '{' Comment '!'
     && lk != 201421                // '{' ';' '!'
     && lk != 203597                // '{' 'break' '!'
     && lk != 203981                // '{' 'continue' '!'
     && lk != 223437                // '{' '}' '!='
     && lk != 256205                // '{' '}' '%'
     && lk != 272589                // '{' '}' '%='
     && lk != 288973                // '{' '}' '&'
     && lk != 305357                // '{' '}' '&&'
     && lk != 321741                // '{' '}' '&='
     && lk != 328269                // '{' Character '('
     && lk != 328397                // '{' String '('
     && lk != 328525                // '{' Integer '('
     && lk != 328653                // '{' Complex '('
     && lk != 328781                // '{' Real '('
     && lk != 328909                // '{' Comment '('
     && lk != 332493                // '{' ';' '('
     && lk != 334669                // '{' 'break' '('
     && lk != 335053                // '{' 'continue' '('
     && lk != 370893                // '{' '}' '*'
     && lk != 387277                // '{' '}' '**'
     && lk != 403661                // '{' '}' '*='
     && lk != 410829                // '{' Comment '+'
     && lk != 414413                // '{' ';' '+'
     && lk != 416589                // '{' 'break' '+'
     && lk != 416973                // '{' 'continue' '+'
     && lk != 427213                // '{' Comment '++'
     && lk != 430797                // '{' ';' '++'
     && lk != 432973                // '{' 'break' '++'
     && lk != 433357                // '{' 'continue' '++'
     && lk != 452813                // '{' '}' '+='
     && lk != 459213                // '{' Identifier ','
     && lk != 459341                // '{' Character ','
     && lk != 459469                // '{' String ','
     && lk != 459597                // '{' Integer ','
     && lk != 459725                // '{' Complex ','
     && lk != 459853                // '{' Real ','
     && lk != 459981                // '{' Comment ','
     && lk != 463565                // '{' ';' ','
     && lk != 465741                // '{' 'break' ','
     && lk != 466125                // '{' 'continue' ','
     && lk != 468611                // Identifier '{' ','
     && lk != 476365                // '{' Comment '-'
     && lk != 479949                // '{' ';' '-'
     && lk != 482125                // '{' 'break' '-'
     && lk != 482509                // '{' 'continue' '-'
     && lk != 492749                // '{' Comment '--'
     && lk != 496333                // '{' ';' '--'
     && lk != 498509                // '{' 'break' '--'
     && lk != 498893                // '{' 'continue' '--'
     && lk != 518349                // '{' '}' '-='
     && lk != 551117                // '{' '}' '/'
     && lk != 567501                // '{' '}' '/='
     && lk != 573901                // '{' Identifier ':'
     && lk != 574157                // '{' String ':'
     && lk != 600269                // '{' '}' ':='
     && lk != 606669                // '{' Identifier ';'
     && lk != 606797                // '{' Character ';'
     && lk != 606925                // '{' String ';'
     && lk != 607053                // '{' Integer ';'
     && lk != 607181                // '{' Complex ';'
     && lk != 607309                // '{' Real ';'
     && lk != 607437                // '{' Comment ';'
     && lk != 611021                // '{' ';' ';'
     && lk != 613197                // '{' 'break' ';'
     && lk != 613581                // '{' 'continue' ';'
     && lk != 633037                // '{' '}' '<'
     && lk != 649421                // '{' '}' '<<'
     && lk != 665805                // '{' '}' '<<='
     && lk != 682189                // '{' '}' '<='
     && lk != 698573                // '{' '}' '='
     && lk != 714957                // '{' '}' '=='
     && lk != 731341                // '{' '}' '>'
     && lk != 747725                // '{' '}' '>='
     && lk != 764109                // '{' '}' '>>'
     && lk != 780493                // '{' '}' '>>='
     && lk != 796877                // '{' '}' '?'
     && lk != 813261                // '{' '}' '?='
     && lk != 819789                // '{' Character '['
     && lk != 819917                // '{' String '['
     && lk != 820045                // '{' Integer '['
     && lk != 820173                // '{' Complex '['
     && lk != 820301                // '{' Real '['
     && lk != 820429                // '{' Comment '['
     && lk != 824013                // '{' ';' '['
     && lk != 826189                // '{' 'break' '['
     && lk != 826573                // '{' 'continue' '['
     && lk != 862413                // '{' '}' '^'
     && lk != 878797                // '{' '}' '^='
     && lk != 885197                // '{' Identifier 'break'
     && lk != 885325                // '{' Character 'break'
     && lk != 885453                // '{' String 'break'
     && lk != 885581                // '{' Integer 'break'
     && lk != 885709                // '{' Complex 'break'
     && lk != 885837                // '{' Real 'break'
     && lk != 885965                // '{' Comment 'break'
     && lk != 889549                // '{' ';' 'break'
     && lk != 891725                // '{' 'break' 'break'
     && lk != 892109                // '{' 'continue' 'break'
     && lk != 934349                // '{' Identifier 'continue'
     && lk != 934477                // '{' Character 'continue'
     && lk != 934605                // '{' String 'continue'
     && lk != 934733                // '{' Integer 'continue'
     && lk != 934861                // '{' Complex 'continue'
     && lk != 934989                // '{' Real 'continue'
     && lk != 935117                // '{' Comment 'continue'
     && lk != 938701                // '{' ';' 'continue'
     && lk != 940877                // '{' 'break' 'continue'
     && lk != 941261                // '{' 'continue' 'continue'
     && lk != 967117                // '{' Identifier 'do'
     && lk != 967245                // '{' Character 'do'
     && lk != 967373                // '{' String 'do'
     && lk != 967501                // '{' Integer 'do'
     && lk != 967629                // '{' Complex 'do'
     && lk != 967757                // '{' Real 'do'
     && lk != 967885                // '{' Comment 'do'
     && lk != 971469                // '{' ';' 'do'
     && lk != 973645                // '{' 'break' 'do'
     && lk != 974029                // '{' 'continue' 'do'
     && lk != 999885                // '{' Identifier 'f32'
     && lk != 1000013               // '{' Character 'f32'
     && lk != 1000141               // '{' String 'f32'
     && lk != 1000269               // '{' Integer 'f32'
     && lk != 1000397               // '{' Complex 'f32'
     && lk != 1000525               // '{' Real 'f32'
     && lk != 1000653               // '{' Comment 'f32'
     && lk != 1004237               // '{' ';' 'f32'
     && lk != 1006413               // '{' 'break' 'f32'
     && lk != 1006797               // '{' 'continue' 'f32'
     && lk != 1016269               // '{' Identifier 'f64'
     && lk != 1016397               // '{' Character 'f64'
     && lk != 1016525               // '{' String 'f64'
     && lk != 1016653               // '{' Integer 'f64'
     && lk != 1016781               // '{' Complex 'f64'
     && lk != 1016909               // '{' Real 'f64'
     && lk != 1017037               // '{' Comment 'f64'
     && lk != 1020621               // '{' ';' 'f64'
     && lk != 1022797               // '{' 'break' 'f64'
     && lk != 1023181               // '{' 'continue' 'f64'
     && lk != 1032653               // '{' Identifier 'for'
     && lk != 1032781               // '{' Character 'for'
     && lk != 1032909               // '{' String 'for'
     && lk != 1033037               // '{' Integer 'for'
     && lk != 1033165               // '{' Complex 'for'
     && lk != 1033293               // '{' Real 'for'
     && lk != 1033421               // '{' Comment 'for'
     && lk != 1037005               // '{' ';' 'for'
     && lk != 1039181               // '{' 'break' 'for'
     && lk != 1039565               // '{' 'continue' 'for'
     && lk != 1049037               // '{' Identifier 'foreach'
     && lk != 1049165               // '{' Character 'foreach'
     && lk != 1049293               // '{' String 'foreach'
     && lk != 1049421               // '{' Integer 'foreach'
     && lk != 1049549               // '{' Complex 'foreach'
     && lk != 1049677               // '{' Real 'foreach'
     && lk != 1049805               // '{' Comment 'foreach'
     && lk != 1053389               // '{' ';' 'foreach'
     && lk != 1055565               // '{' 'break' 'foreach'
     && lk != 1055949               // '{' 'continue' 'foreach'
     && lk != 1065421               // '{' Identifier 'i32'
     && lk != 1065549               // '{' Character 'i32'
     && lk != 1065677               // '{' String 'i32'
     && lk != 1065805               // '{' Integer 'i32'
     && lk != 1065933               // '{' Complex 'i32'
     && lk != 1066061               // '{' Real 'i32'
     && lk != 1066189               // '{' Comment 'i32'
     && lk != 1069773               // '{' ';' 'i32'
     && lk != 1071949               // '{' 'break' 'i32'
     && lk != 1072333               // '{' 'continue' 'i32'
     && lk != 1081805               // '{' Identifier 'i64'
     && lk != 1081933               // '{' Character 'i64'
     && lk != 1082061               // '{' String 'i64'
     && lk != 1082189               // '{' Integer 'i64'
     && lk != 1082317               // '{' Complex 'i64'
     && lk != 1082445               // '{' Real 'i64'
     && lk != 1082573               // '{' Comment 'i64'
     && lk != 1086157               // '{' ';' 'i64'
     && lk != 1088333               // '{' 'break' 'i64'
     && lk != 1088717               // '{' 'continue' 'i64'
     && lk != 1098189               // '{' Identifier 'if'
     && lk != 1098317               // '{' Character 'if'
     && lk != 1098445               // '{' String 'if'
     && lk != 1098573               // '{' Integer 'if'
     && lk != 1098701               // '{' Complex 'if'
     && lk != 1098829               // '{' Real 'if'
     && lk != 1098957               // '{' Comment 'if'
     && lk != 1102541               // '{' ';' 'if'
     && lk != 1104717               // '{' 'break' 'if'
     && lk != 1105101               // '{' 'continue' 'if'
     && lk != 1114573               // '{' Identifier 'import'
     && lk != 1114701               // '{' Character 'import'
     && lk != 1114829               // '{' String 'import'
     && lk != 1114957               // '{' Integer 'import'
     && lk != 1115085               // '{' Complex 'import'
     && lk != 1115213               // '{' Real 'import'
     && lk != 1115341               // '{' Comment 'import'
     && lk != 1118925               // '{' ';' 'import'
     && lk != 1121101               // '{' 'break' 'import'
     && lk != 1121485               // '{' 'continue' 'import'
     && lk != 1130957               // '{' Identifier 'include'
     && lk != 1131085               // '{' Character 'include'
     && lk != 1131213               // '{' String 'include'
     && lk != 1131341               // '{' Integer 'include'
     && lk != 1131469               // '{' Complex 'include'
     && lk != 1131597               // '{' Real 'include'
     && lk != 1131725               // '{' Comment 'include'
     && lk != 1135309               // '{' ';' 'include'
     && lk != 1137485               // '{' 'break' 'include'
     && lk != 1137869               // '{' 'continue' 'include'
     && lk != 1147341               // '{' Identifier 'local'
     && lk != 1147469               // '{' Character 'local'
     && lk != 1147597               // '{' String 'local'
     && lk != 1147725               // '{' Integer 'local'
     && lk != 1147853               // '{' Complex 'local'
     && lk != 1147981               // '{' Real 'local'
     && lk != 1148109               // '{' Comment 'local'
     && lk != 1151693               // '{' ';' 'local'
     && lk != 1153869               // '{' 'break' 'local'
     && lk != 1154253               // '{' 'continue' 'local'
     && lk != 1163725               // '{' Identifier 'return'
     && lk != 1163853               // '{' Character 'return'
     && lk != 1163981               // '{' String 'return'
     && lk != 1164109               // '{' Integer 'return'
     && lk != 1164237               // '{' Complex 'return'
     && lk != 1164365               // '{' Real 'return'
     && lk != 1164493               // '{' Comment 'return'
     && lk != 1168077               // '{' ';' 'return'
     && lk != 1170253               // '{' 'break' 'return'
     && lk != 1170637               // '{' 'continue' 'return'
     && lk != 1180109               // '{' Identifier 'switch'
     && lk != 1180237               // '{' Character 'switch'
     && lk != 1180365               // '{' String 'switch'
     && lk != 1180493               // '{' Integer 'switch'
     && lk != 1180621               // '{' Complex 'switch'
     && lk != 1180749               // '{' Real 'switch'
     && lk != 1180877               // '{' Comment 'switch'
     && lk != 1184461               // '{' ';' 'switch'
     && lk != 1186637               // '{' 'break' 'switch'
     && lk != 1187021               // '{' 'continue' 'switch'
     && lk != 1196493               // '{' Identifier 'test'
     && lk != 1196621               // '{' Character 'test'
     && lk != 1196749               // '{' String 'test'
     && lk != 1196877               // '{' Integer 'test'
     && lk != 1197005               // '{' Complex 'test'
     && lk != 1197133               // '{' Real 'test'
     && lk != 1197261               // '{' Comment 'test'
     && lk != 1200845               // '{' ';' 'test'
     && lk != 1203021               // '{' 'break' 'test'
     && lk != 1203405               // '{' 'continue' 'test'
     && lk != 1212877               // '{' Identifier 'throw'
     && lk != 1213005               // '{' Character 'throw'
     && lk != 1213133               // '{' String 'throw'
     && lk != 1213261               // '{' Integer 'throw'
     && lk != 1213389               // '{' Complex 'throw'
     && lk != 1213517               // '{' Real 'throw'
     && lk != 1213645               // '{' Comment 'throw'
     && lk != 1217229               // '{' ';' 'throw'
     && lk != 1219405               // '{' 'break' 'throw'
     && lk != 1219789               // '{' 'continue' 'throw'
     && lk != 1229261               // '{' Identifier 'try'
     && lk != 1229389               // '{' Character 'try'
     && lk != 1229517               // '{' String 'try'
     && lk != 1229645               // '{' Integer 'try'
     && lk != 1229773               // '{' Complex 'try'
     && lk != 1229901               // '{' Real 'try'
     && lk != 1230029               // '{' Comment 'try'
     && lk != 1233613               // '{' ';' 'try'
     && lk != 1235789               // '{' 'break' 'try'
     && lk != 1236173               // '{' 'continue' 'try'
     && lk != 1245645               // '{' Identifier 'while'
     && lk != 1245773               // '{' Character 'while'
     && lk != 1245901               // '{' String 'while'
     && lk != 1246029               // '{' Integer 'while'
     && lk != 1246157               // '{' Complex 'while'
     && lk != 1246285               // '{' Real 'while'
     && lk != 1246413               // '{' Comment 'while'
     && lk != 1249997               // '{' ';' 'while'
     && lk != 1252173               // '{' 'break' 'while'
     && lk != 1252557               // '{' 'continue' 'while'
     && lk != 1262157               // '{' Character '{'
     && lk != 1262285               // '{' String '{'
     && lk != 1262413               // '{' Integer '{'
     && lk != 1262541               // '{' Complex '{'
     && lk != 1262669               // '{' Real '{'
     && lk != 1262797               // '{' Comment '{'
     && lk != 1266381               // '{' ';' '{'
     && lk != 1268557               // '{' 'break' '{'
     && lk != 1268941               // '{' 'continue' '{'
     && lk != 1288397               // '{' '}' '|'
     && lk != 1304781               // '{' '}' '|='
     && lk != 1321165               // '{' '}' '||'
     && lk != 1343949               // '{' Identifier '~'
     && lk != 1344077               // '{' Character '~'
     && lk != 1344205               // '{' String '~'
     && lk != 1344333               // '{' Integer '~'
     && lk != 1344461               // '{' Complex '~'
     && lk != 1344589               // '{' Real '~'
     && lk != 1344717               // '{' Comment '~'
     && lk != 1348301               // '{' ';' '~'
     && lk != 1350477               // '{' 'break' '~'
     && lk != 1350861)              // '{' 'continue' '~'
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
    case 68:                        // 'import'
    case 69:                        // 'include'
    case 70:                        // 'local'
    case 71:                        // 'return'
    case 72:                        // 'switch'
    case 73:                        // 'test'
    case 74:                        // 'throw'
    case 75:                        // 'try'
    case 76:                        // 'while'
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
    case 82:                        // '~'
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
    case 3661:                      // '{' ','
    case 3715:                      // Identifier '-'
    case 3843:                      // Identifier '--'
    case 3971:                      // Identifier '-='
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
    case 8707:                      // Identifier 'import'
    case 8835:                      // Identifier 'include'
    case 8963:                      // Identifier 'local'
    case 9091:                      // Identifier 'return'
    case 9219:                      // Identifier 'switch'
    case 9347:                      // Identifier 'test'
    case 9475:                      // Identifier 'throw'
    case 9603:                      // Identifier 'try'
    case 9731:                      // Identifier 'while'
    case 9987:                      // Identifier '|'
    case 10115:                     // Identifier '|='
    case 10243:                     // Identifier '||'
    case 10371:                     // Identifier '}'
    case 10499:                     // Identifier '~'
    case 223437:                    // '{' '}' '!='
    case 256205:                    // '{' '}' '%'
    case 272589:                    // '{' '}' '%='
    case 288973:                    // '{' '}' '&'
    case 305357:                    // '{' '}' '&&'
    case 321741:                    // '{' '}' '&='
    case 370893:                    // '{' '}' '*'
    case 387277:                    // '{' '}' '**'
    case 403661:                    // '{' '}' '*='
    case 452813:                    // '{' '}' '+='
    case 459213:                    // '{' Identifier ','
    case 459341:                    // '{' Character ','
    case 459469:                    // '{' String ','
    case 459597:                    // '{' Integer ','
    case 459725:                    // '{' Complex ','
    case 459853:                    // '{' Real ','
    case 459981:                    // '{' Comment ','
    case 463565:                    // '{' ';' ','
    case 465741:                    // '{' 'break' ','
    case 466125:                    // '{' 'continue' ','
    case 468611:                    // Identifier '{' ','
    case 518349:                    // '{' '}' '-='
    case 551117:                    // '{' '}' '/'
    case 567501:                    // '{' '}' '/='
    case 573901:                    // '{' Identifier ':'
    case 574157:                    // '{' String ':'
    case 600269:                    // '{' '}' ':='
    case 633037:                    // '{' '}' '<'
    case 649421:                    // '{' '}' '<<'
    case 665805:                    // '{' '}' '<<='
    case 682189:                    // '{' '}' '<='
    case 698573:                    // '{' '}' '='
    case 714957:                    // '{' '}' '=='
    case 731341:                    // '{' '}' '>'
    case 747725:                    // '{' '}' '>='
    case 764109:                    // '{' '}' '>>'
    case 780493:                    // '{' '}' '>>='
    case 796877:                    // '{' '}' '?'
    case 813261:                    // '{' '}' '?='
    case 862413:                    // '{' '}' '^'
    case 878797:                    // '{' '}' '^='
    case 1288397:                   // '{' '}' '|'
    case 1304781:                   // '{' '}' '|='
    case 1321165:                   // '{' '}' '||'
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
      lookahead2W(46);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9859:                    // Identifier '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      }
      break;
    case 77:                        // '{'
      lookahead2W(33);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 461:                     // '{' Identifier
        lookahead3W(44);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' |
                                    // 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' |
                                    // '|=' | '||' | '}' | '~'
        break;
      case 717:                     // '{' String
        lookahead3W(43);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' |
                                    // ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' |
                                    // '?' | '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' |
                                    // 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' |
                                    // 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' |
                                    // '||' | '}' | '~'
        break;
      case 6477:                    // '{' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 10445:                   // '{' '}'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 589:                     // '{' Character
      case 845:                     // '{' Integer
      case 973:                     // '{' Complex
      case 1101:                    // '{' Real
        lookahead3W(42);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' |
                                    // 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' |
                                    // 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' |
                                    // '~'
        break;
      case 7885:                    // '{' 'f32'
      case 8013:                    // '{' 'f64'
      case 8397:                    // '{' 'i32'
      case 8525:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1229:                    // '{' Comment
      case 4813:                    // '{' ';'
      case 6989:                    // '{' 'break'
      case 7373:                    // '{' 'continue'
      case 9933:                    // '{' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1613:                    // '{' '!'
      case 3277:                    // '{' '+'
      case 3405:                    // '{' '++'
      case 3789:                    // '{' '-'
      case 3917:                    // '{' '--'
      case 10573:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8141:                    // '{' 'for'
      case 8269:                    // '{' 'foreach'
      case 8653:                    // '{' 'if'
      case 9293:                    // '{' 'switch'
      case 9421:                    // '{' 'test'
      case 9805:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2637:                    // '{' '('
      case 7629:                    // '{' 'do'
      case 8781:                    // '{' 'import'
      case 8909:                    // '{' 'include'
      case 9037:                    // '{' 'local'
      case 9165:                    // '{' 'return'
      case 9549:                    // '{' 'throw'
      case 9677:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 82                    // '~'
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
     && lk != 3661                  // '{' ','
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
     && lk != 8323                  // Identifier 'i32'
     && lk != 8451                  // Identifier 'i64'
     && lk != 8579                  // Identifier 'if'
     && lk != 8707                  // Identifier 'import'
     && lk != 8835                  // Identifier 'include'
     && lk != 8963                  // Identifier 'local'
     && lk != 9091                  // Identifier 'return'
     && lk != 9219                  // Identifier 'switch'
     && lk != 9347                  // Identifier 'test'
     && lk != 9475                  // Identifier 'throw'
     && lk != 9603                  // Identifier 'try'
     && lk != 9731                  // Identifier 'while'
     && lk != 9987                  // Identifier '|'
     && lk != 10115                 // Identifier '|='
     && lk != 10243                 // Identifier '||'
     && lk != 10371                 // Identifier '}'
     && lk != 10499                 // Identifier '~'
     && lk != 49613                 // '{' Identifier Identifier
     && lk != 49741                 // '{' Character Identifier
     && lk != 49869                 // '{' String Identifier
     && lk != 49997                 // '{' Integer Identifier
     && lk != 50125                 // '{' Complex Identifier
     && lk != 50253                 // '{' Real Identifier
     && lk != 50381                 // '{' Comment Identifier
     && lk != 53965                 // '{' ';' Identifier
     && lk != 56141                 // '{' 'break' Identifier
     && lk != 56525                 // '{' 'continue' Identifier
     && lk != 65997                 // '{' Identifier Character
     && lk != 66125                 // '{' Character Character
     && lk != 66253                 // '{' String Character
     && lk != 66381                 // '{' Integer Character
     && lk != 66509                 // '{' Complex Character
     && lk != 66637                 // '{' Real Character
     && lk != 66765                 // '{' Comment Character
     && lk != 70349                 // '{' ';' Character
     && lk != 72525                 // '{' 'break' Character
     && lk != 72909                 // '{' 'continue' Character
     && lk != 82381                 // '{' Identifier String
     && lk != 82509                 // '{' Character String
     && lk != 82637                 // '{' String String
     && lk != 82765                 // '{' Integer String
     && lk != 82893                 // '{' Complex String
     && lk != 83021                 // '{' Real String
     && lk != 83149                 // '{' Comment String
     && lk != 86733                 // '{' ';' String
     && lk != 88909                 // '{' 'break' String
     && lk != 89293                 // '{' 'continue' String
     && lk != 98765                 // '{' Identifier Integer
     && lk != 98893                 // '{' Character Integer
     && lk != 99021                 // '{' String Integer
     && lk != 99149                 // '{' Integer Integer
     && lk != 99277                 // '{' Complex Integer
     && lk != 99405                 // '{' Real Integer
     && lk != 99533                 // '{' Comment Integer
     && lk != 103117                // '{' ';' Integer
     && lk != 105293                // '{' 'break' Integer
     && lk != 105677                // '{' 'continue' Integer
     && lk != 115149                // '{' Identifier Complex
     && lk != 115277                // '{' Character Complex
     && lk != 115405                // '{' String Complex
     && lk != 115533                // '{' Integer Complex
     && lk != 115661                // '{' Complex Complex
     && lk != 115789                // '{' Real Complex
     && lk != 115917                // '{' Comment Complex
     && lk != 119501                // '{' ';' Complex
     && lk != 121677                // '{' 'break' Complex
     && lk != 122061                // '{' 'continue' Complex
     && lk != 131533                // '{' Identifier Real
     && lk != 131661                // '{' Character Real
     && lk != 131789                // '{' String Real
     && lk != 131917                // '{' Integer Real
     && lk != 132045                // '{' Complex Real
     && lk != 132173                // '{' Real Real
     && lk != 132301                // '{' Comment Real
     && lk != 135885                // '{' ';' Real
     && lk != 138061                // '{' 'break' Real
     && lk != 138445                // '{' 'continue' Real
     && lk != 147917                // '{' Identifier Comment
     && lk != 148045                // '{' Character Comment
     && lk != 148173                // '{' String Comment
     && lk != 148301                // '{' Integer Comment
     && lk != 148429                // '{' Complex Comment
     && lk != 148557                // '{' Real Comment
     && lk != 148685                // '{' Comment Comment
     && lk != 152269                // '{' ';' Comment
     && lk != 154445                // '{' 'break' Comment
     && lk != 154829                // '{' 'continue' Comment
     && lk != 197069                // '{' Identifier '!'
     && lk != 197197                // '{' Character '!'
     && lk != 197325                // '{' String '!'
     && lk != 197453                // '{' Integer '!'
     && lk != 197581                // '{' Complex '!'
     && lk != 197709                // '{' Real '!'
     && lk != 197837                // '{' Comment '!'
     && lk != 201421                // '{' ';' '!'
     && lk != 203597                // '{' 'break' '!'
     && lk != 203981                // '{' 'continue' '!'
     && lk != 223437                // '{' '}' '!='
     && lk != 256205                // '{' '}' '%'
     && lk != 272589                // '{' '}' '%='
     && lk != 288973                // '{' '}' '&'
     && lk != 305357                // '{' '}' '&&'
     && lk != 321741                // '{' '}' '&='
     && lk != 328269                // '{' Character '('
     && lk != 328397                // '{' String '('
     && lk != 328525                // '{' Integer '('
     && lk != 328653                // '{' Complex '('
     && lk != 328781                // '{' Real '('
     && lk != 328909                // '{' Comment '('
     && lk != 332493                // '{' ';' '('
     && lk != 334669                // '{' 'break' '('
     && lk != 335053                // '{' 'continue' '('
     && lk != 370893                // '{' '}' '*'
     && lk != 387277                // '{' '}' '**'
     && lk != 403661                // '{' '}' '*='
     && lk != 410829                // '{' Comment '+'
     && lk != 414413                // '{' ';' '+'
     && lk != 416589                // '{' 'break' '+'
     && lk != 416973                // '{' 'continue' '+'
     && lk != 427213                // '{' Comment '++'
     && lk != 430797                // '{' ';' '++'
     && lk != 432973                // '{' 'break' '++'
     && lk != 433357                // '{' 'continue' '++'
     && lk != 452813                // '{' '}' '+='
     && lk != 459213                // '{' Identifier ','
     && lk != 459341                // '{' Character ','
     && lk != 459469                // '{' String ','
     && lk != 459597                // '{' Integer ','
     && lk != 459725                // '{' Complex ','
     && lk != 459853                // '{' Real ','
     && lk != 459981                // '{' Comment ','
     && lk != 463565                // '{' ';' ','
     && lk != 465741                // '{' 'break' ','
     && lk != 466125                // '{' 'continue' ','
     && lk != 468611                // Identifier '{' ','
     && lk != 476365                // '{' Comment '-'
     && lk != 479949                // '{' ';' '-'
     && lk != 482125                // '{' 'break' '-'
     && lk != 482509                // '{' 'continue' '-'
     && lk != 492749                // '{' Comment '--'
     && lk != 496333                // '{' ';' '--'
     && lk != 498509                // '{' 'break' '--'
     && lk != 498893                // '{' 'continue' '--'
     && lk != 518349                // '{' '}' '-='
     && lk != 551117                // '{' '}' '/'
     && lk != 567501                // '{' '}' '/='
     && lk != 573901                // '{' Identifier ':'
     && lk != 574157                // '{' String ':'
     && lk != 600269                // '{' '}' ':='
     && lk != 606669                // '{' Identifier ';'
     && lk != 606797                // '{' Character ';'
     && lk != 606925                // '{' String ';'
     && lk != 607053                // '{' Integer ';'
     && lk != 607181                // '{' Complex ';'
     && lk != 607309                // '{' Real ';'
     && lk != 607437                // '{' Comment ';'
     && lk != 611021                // '{' ';' ';'
     && lk != 613197                // '{' 'break' ';'
     && lk != 613581                // '{' 'continue' ';'
     && lk != 633037                // '{' '}' '<'
     && lk != 649421                // '{' '}' '<<'
     && lk != 665805                // '{' '}' '<<='
     && lk != 682189                // '{' '}' '<='
     && lk != 698573                // '{' '}' '='
     && lk != 714957                // '{' '}' '=='
     && lk != 731341                // '{' '}' '>'
     && lk != 747725                // '{' '}' '>='
     && lk != 764109                // '{' '}' '>>'
     && lk != 780493                // '{' '}' '>>='
     && lk != 796877                // '{' '}' '?'
     && lk != 813261                // '{' '}' '?='
     && lk != 819789                // '{' Character '['
     && lk != 819917                // '{' String '['
     && lk != 820045                // '{' Integer '['
     && lk != 820173                // '{' Complex '['
     && lk != 820301                // '{' Real '['
     && lk != 820429                // '{' Comment '['
     && lk != 824013                // '{' ';' '['
     && lk != 826189                // '{' 'break' '['
     && lk != 826573                // '{' 'continue' '['
     && lk != 862413                // '{' '}' '^'
     && lk != 878797                // '{' '}' '^='
     && lk != 885197                // '{' Identifier 'break'
     && lk != 885325                // '{' Character 'break'
     && lk != 885453                // '{' String 'break'
     && lk != 885581                // '{' Integer 'break'
     && lk != 885709                // '{' Complex 'break'
     && lk != 885837                // '{' Real 'break'
     && lk != 885965                // '{' Comment 'break'
     && lk != 889549                // '{' ';' 'break'
     && lk != 891725                // '{' 'break' 'break'
     && lk != 892109                // '{' 'continue' 'break'
     && lk != 934349                // '{' Identifier 'continue'
     && lk != 934477                // '{' Character 'continue'
     && lk != 934605                // '{' String 'continue'
     && lk != 934733                // '{' Integer 'continue'
     && lk != 934861                // '{' Complex 'continue'
     && lk != 934989                // '{' Real 'continue'
     && lk != 935117                // '{' Comment 'continue'
     && lk != 938701                // '{' ';' 'continue'
     && lk != 940877                // '{' 'break' 'continue'
     && lk != 941261                // '{' 'continue' 'continue'
     && lk != 967117                // '{' Identifier 'do'
     && lk != 967245                // '{' Character 'do'
     && lk != 967373                // '{' String 'do'
     && lk != 967501                // '{' Integer 'do'
     && lk != 967629                // '{' Complex 'do'
     && lk != 967757                // '{' Real 'do'
     && lk != 967885                // '{' Comment 'do'
     && lk != 971469                // '{' ';' 'do'
     && lk != 973645                // '{' 'break' 'do'
     && lk != 974029                // '{' 'continue' 'do'
     && lk != 999885                // '{' Identifier 'f32'
     && lk != 1000013               // '{' Character 'f32'
     && lk != 1000141               // '{' String 'f32'
     && lk != 1000269               // '{' Integer 'f32'
     && lk != 1000397               // '{' Complex 'f32'
     && lk != 1000525               // '{' Real 'f32'
     && lk != 1000653               // '{' Comment 'f32'
     && lk != 1004237               // '{' ';' 'f32'
     && lk != 1006413               // '{' 'break' 'f32'
     && lk != 1006797               // '{' 'continue' 'f32'
     && lk != 1016269               // '{' Identifier 'f64'
     && lk != 1016397               // '{' Character 'f64'
     && lk != 1016525               // '{' String 'f64'
     && lk != 1016653               // '{' Integer 'f64'
     && lk != 1016781               // '{' Complex 'f64'
     && lk != 1016909               // '{' Real 'f64'
     && lk != 1017037               // '{' Comment 'f64'
     && lk != 1020621               // '{' ';' 'f64'
     && lk != 1022797               // '{' 'break' 'f64'
     && lk != 1023181               // '{' 'continue' 'f64'
     && lk != 1032653               // '{' Identifier 'for'
     && lk != 1032781               // '{' Character 'for'
     && lk != 1032909               // '{' String 'for'
     && lk != 1033037               // '{' Integer 'for'
     && lk != 1033165               // '{' Complex 'for'
     && lk != 1033293               // '{' Real 'for'
     && lk != 1033421               // '{' Comment 'for'
     && lk != 1037005               // '{' ';' 'for'
     && lk != 1039181               // '{' 'break' 'for'
     && lk != 1039565               // '{' 'continue' 'for'
     && lk != 1049037               // '{' Identifier 'foreach'
     && lk != 1049165               // '{' Character 'foreach'
     && lk != 1049293               // '{' String 'foreach'
     && lk != 1049421               // '{' Integer 'foreach'
     && lk != 1049549               // '{' Complex 'foreach'
     && lk != 1049677               // '{' Real 'foreach'
     && lk != 1049805               // '{' Comment 'foreach'
     && lk != 1053389               // '{' ';' 'foreach'
     && lk != 1055565               // '{' 'break' 'foreach'
     && lk != 1055949               // '{' 'continue' 'foreach'
     && lk != 1065421               // '{' Identifier 'i32'
     && lk != 1065549               // '{' Character 'i32'
     && lk != 1065677               // '{' String 'i32'
     && lk != 1065805               // '{' Integer 'i32'
     && lk != 1065933               // '{' Complex 'i32'
     && lk != 1066061               // '{' Real 'i32'
     && lk != 1066189               // '{' Comment 'i32'
     && lk != 1069773               // '{' ';' 'i32'
     && lk != 1071949               // '{' 'break' 'i32'
     && lk != 1072333               // '{' 'continue' 'i32'
     && lk != 1081805               // '{' Identifier 'i64'
     && lk != 1081933               // '{' Character 'i64'
     && lk != 1082061               // '{' String 'i64'
     && lk != 1082189               // '{' Integer 'i64'
     && lk != 1082317               // '{' Complex 'i64'
     && lk != 1082445               // '{' Real 'i64'
     && lk != 1082573               // '{' Comment 'i64'
     && lk != 1086157               // '{' ';' 'i64'
     && lk != 1088333               // '{' 'break' 'i64'
     && lk != 1088717               // '{' 'continue' 'i64'
     && lk != 1098189               // '{' Identifier 'if'
     && lk != 1098317               // '{' Character 'if'
     && lk != 1098445               // '{' String 'if'
     && lk != 1098573               // '{' Integer 'if'
     && lk != 1098701               // '{' Complex 'if'
     && lk != 1098829               // '{' Real 'if'
     && lk != 1098957               // '{' Comment 'if'
     && lk != 1102541               // '{' ';' 'if'
     && lk != 1104717               // '{' 'break' 'if'
     && lk != 1105101               // '{' 'continue' 'if'
     && lk != 1114573               // '{' Identifier 'import'
     && lk != 1114701               // '{' Character 'import'
     && lk != 1114829               // '{' String 'import'
     && lk != 1114957               // '{' Integer 'import'
     && lk != 1115085               // '{' Complex 'import'
     && lk != 1115213               // '{' Real 'import'
     && lk != 1115341               // '{' Comment 'import'
     && lk != 1118925               // '{' ';' 'import'
     && lk != 1121101               // '{' 'break' 'import'
     && lk != 1121485               // '{' 'continue' 'import'
     && lk != 1130957               // '{' Identifier 'include'
     && lk != 1131085               // '{' Character 'include'
     && lk != 1131213               // '{' String 'include'
     && lk != 1131341               // '{' Integer 'include'
     && lk != 1131469               // '{' Complex 'include'
     && lk != 1131597               // '{' Real 'include'
     && lk != 1131725               // '{' Comment 'include'
     && lk != 1135309               // '{' ';' 'include'
     && lk != 1137485               // '{' 'break' 'include'
     && lk != 1137869               // '{' 'continue' 'include'
     && lk != 1147341               // '{' Identifier 'local'
     && lk != 1147469               // '{' Character 'local'
     && lk != 1147597               // '{' String 'local'
     && lk != 1147725               // '{' Integer 'local'
     && lk != 1147853               // '{' Complex 'local'
     && lk != 1147981               // '{' Real 'local'
     && lk != 1148109               // '{' Comment 'local'
     && lk != 1151693               // '{' ';' 'local'
     && lk != 1153869               // '{' 'break' 'local'
     && lk != 1154253               // '{' 'continue' 'local'
     && lk != 1163725               // '{' Identifier 'return'
     && lk != 1163853               // '{' Character 'return'
     && lk != 1163981               // '{' String 'return'
     && lk != 1164109               // '{' Integer 'return'
     && lk != 1164237               // '{' Complex 'return'
     && lk != 1164365               // '{' Real 'return'
     && lk != 1164493               // '{' Comment 'return'
     && lk != 1168077               // '{' ';' 'return'
     && lk != 1170253               // '{' 'break' 'return'
     && lk != 1170637               // '{' 'continue' 'return'
     && lk != 1180109               // '{' Identifier 'switch'
     && lk != 1180237               // '{' Character 'switch'
     && lk != 1180365               // '{' String 'switch'
     && lk != 1180493               // '{' Integer 'switch'
     && lk != 1180621               // '{' Complex 'switch'
     && lk != 1180749               // '{' Real 'switch'
     && lk != 1180877               // '{' Comment 'switch'
     && lk != 1184461               // '{' ';' 'switch'
     && lk != 1186637               // '{' 'break' 'switch'
     && lk != 1187021               // '{' 'continue' 'switch'
     && lk != 1196493               // '{' Identifier 'test'
     && lk != 1196621               // '{' Character 'test'
     && lk != 1196749               // '{' String 'test'
     && lk != 1196877               // '{' Integer 'test'
     && lk != 1197005               // '{' Complex 'test'
     && lk != 1197133               // '{' Real 'test'
     && lk != 1197261               // '{' Comment 'test'
     && lk != 1200845               // '{' ';' 'test'
     && lk != 1203021               // '{' 'break' 'test'
     && lk != 1203405               // '{' 'continue' 'test'
     && lk != 1212877               // '{' Identifier 'throw'
     && lk != 1213005               // '{' Character 'throw'
     && lk != 1213133               // '{' String 'throw'
     && lk != 1213261               // '{' Integer 'throw'
     && lk != 1213389               // '{' Complex 'throw'
     && lk != 1213517               // '{' Real 'throw'
     && lk != 1213645               // '{' Comment 'throw'
     && lk != 1217229               // '{' ';' 'throw'
     && lk != 1219405               // '{' 'break' 'throw'
     && lk != 1219789               // '{' 'continue' 'throw'
     && lk != 1229261               // '{' Identifier 'try'
     && lk != 1229389               // '{' Character 'try'
     && lk != 1229517               // '{' String 'try'
     && lk != 1229645               // '{' Integer 'try'
     && lk != 1229773               // '{' Complex 'try'
     && lk != 1229901               // '{' Real 'try'
     && lk != 1230029               // '{' Comment 'try'
     && lk != 1233613               // '{' ';' 'try'
     && lk != 1235789               // '{' 'break' 'try'
     && lk != 1236173               // '{' 'continue' 'try'
     && lk != 1245645               // '{' Identifier 'while'
     && lk != 1245773               // '{' Character 'while'
     && lk != 1245901               // '{' String 'while'
     && lk != 1246029               // '{' Integer 'while'
     && lk != 1246157               // '{' Complex 'while'
     && lk != 1246285               // '{' Real 'while'
     && lk != 1246413               // '{' Comment 'while'
     && lk != 1249997               // '{' ';' 'while'
     && lk != 1252173               // '{' 'break' 'while'
     && lk != 1252557               // '{' 'continue' 'while'
     && lk != 1262157               // '{' Character '{'
     && lk != 1262285               // '{' String '{'
     && lk != 1262413               // '{' Integer '{'
     && lk != 1262541               // '{' Complex '{'
     && lk != 1262669               // '{' Real '{'
     && lk != 1262797               // '{' Comment '{'
     && lk != 1266381               // '{' ';' '{'
     && lk != 1268557               // '{' 'break' '{'
     && lk != 1268941               // '{' 'continue' '{'
     && lk != 1288397               // '{' '}' '|'
     && lk != 1304781               // '{' '}' '|='
     && lk != 1321165               // '{' '}' '||'
     && lk != 1343949               // '{' Identifier '~'
     && lk != 1344077               // '{' Character '~'
     && lk != 1344205               // '{' String '~'
     && lk != 1344333               // '{' Integer '~'
     && lk != 1344461               // '{' Complex '~'
     && lk != 1344589               // '{' Real '~'
     && lk != 1344717               // '{' Comment '~'
     && lk != 1348301               // '{' ';' '~'
     && lk != 1350477               // '{' 'break' '~'
     && lk != 1350861)              // '{' 'continue' '~'
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
    case 68:                        // 'import'
    case 69:                        // 'include'
    case 70:                        // 'local'
    case 71:                        // 'return'
    case 72:                        // 'switch'
    case 73:                        // 'test'
    case 74:                        // 'throw'
    case 75:                        // 'try'
    case 76:                        // 'while'
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
    case 82:                        // '~'
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
    case 3661:                      // '{' ','
    case 3715:                      // Identifier '-'
    case 3843:                      // Identifier '--'
    case 3971:                      // Identifier '-='
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
    case 8707:                      // Identifier 'import'
    case 8835:                      // Identifier 'include'
    case 8963:                      // Identifier 'local'
    case 9091:                      // Identifier 'return'
    case 9219:                      // Identifier 'switch'
    case 9347:                      // Identifier 'test'
    case 9475:                      // Identifier 'throw'
    case 9603:                      // Identifier 'try'
    case 9731:                      // Identifier 'while'
    case 9987:                      // Identifier '|'
    case 10115:                     // Identifier '|='
    case 10243:                     // Identifier '||'
    case 10371:                     // Identifier '}'
    case 10499:                     // Identifier '~'
    case 223437:                    // '{' '}' '!='
    case 256205:                    // '{' '}' '%'
    case 272589:                    // '{' '}' '%='
    case 288973:                    // '{' '}' '&'
    case 305357:                    // '{' '}' '&&'
    case 321741:                    // '{' '}' '&='
    case 370893:                    // '{' '}' '*'
    case 387277:                    // '{' '}' '**'
    case 403661:                    // '{' '}' '*='
    case 452813:                    // '{' '}' '+='
    case 459213:                    // '{' Identifier ','
    case 459341:                    // '{' Character ','
    case 459469:                    // '{' String ','
    case 459597:                    // '{' Integer ','
    case 459725:                    // '{' Complex ','
    case 459853:                    // '{' Real ','
    case 459981:                    // '{' Comment ','
    case 463565:                    // '{' ';' ','
    case 465741:                    // '{' 'break' ','
    case 466125:                    // '{' 'continue' ','
    case 468611:                    // Identifier '{' ','
    case 518349:                    // '{' '}' '-='
    case 551117:                    // '{' '}' '/'
    case 567501:                    // '{' '}' '/='
    case 573901:                    // '{' Identifier ':'
    case 574157:                    // '{' String ':'
    case 600269:                    // '{' '}' ':='
    case 633037:                    // '{' '}' '<'
    case 649421:                    // '{' '}' '<<'
    case 665805:                    // '{' '}' '<<='
    case 682189:                    // '{' '}' '<='
    case 698573:                    // '{' '}' '='
    case 714957:                    // '{' '}' '=='
    case 731341:                    // '{' '}' '>'
    case 747725:                    // '{' '}' '>='
    case 764109:                    // '{' '}' '>>'
    case 780493:                    // '{' '}' '>>='
    case 796877:                    // '{' '}' '?'
    case 813261:                    // '{' '}' '?='
    case 862413:                    // '{' '}' '^'
    case 878797:                    // '{' '}' '^='
    case 1288397:                   // '{' '}' '|'
    case 1304781:                   // '{' '}' '|='
    case 1321165:                   // '{' '}' '||'
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
    consume(77);                    // '{'
    for (;;)
    {
      lookahead1W(29);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 81)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(81);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(77);                   // '{'
    for (;;)
    {
      lookahead1W(29);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 81)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(81);                   // '}'
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
      case 79:                      // '|='
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        case 463:                   // '|=' Identifier
          lookahead3W(46);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        case 2639:                  // '|=' '('
          lookahead3W(24);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
        case 6479:                  // '|=' '['
          lookahead3W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
          break;
        case 9872:                  // '%=' '{'
        case 9875:                  // '&=' '{'
        case 9880:                  // '*=' '{'
        case 9883:                  // '+=' '{'
        case 9887:                  // '-=' '{'
        case 9890:                  // '/=' '{'
        case 9892:                  // ':=' '{'
        case 9896:                  // '<<=' '{'
        case 9898:                  // '=' '{'
        case 9903:                  // '>>=' '{'
        case 9905:                  // '?=' '{'
        case 9909:                  // '^=' '{'
        case 9935:                  // '|=' '{'
          lookahead3W(33);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
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
        case 591:                   // '|=' Character
        case 719:                   // '|=' String
        case 847:                   // '|=' Integer
        case 975:                   // '|=' Complex
        case 1103:                  // '|=' Real
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10512:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10515:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10520:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10523:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10527:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10530:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10532:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10536:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10538:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10543:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10545:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10549:                 // '^=' '~'
        case 1615:                  // '|=' '!'
        case 3279:                  // '|=' '+'
        case 3407:                  // '|=' '++'
        case 3791:                  // '|=' '-'
        case 3919:                  // '|=' '--'
        case 10575:                 // '|=' '~'
          lookahead3W(22);          // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
       && lk != 68                  // 'import'
       && lk != 69                  // 'include'
       && lk != 70                  // 'local'
       && lk != 71                  // 'return'
       && lk != 72                  // 'switch'
       && lk != 73                  // 'test'
       && lk != 74                  // 'throw'
       && lk != 75                  // 'try'
       && lk != 76                  // 'while'
       && lk != 77                  // '{'
       && lk != 81                  // '}'
       && lk != 82)                 // '~'
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
            case 79:                // '|='
              consumeT(79);         // '|='
              break;
            case 49:                // '?='
              consumeT(49);         // '?='
              break;
            default:
              consumeT(36);         // ':='
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      case 79:                      // '|='
        consume(79);                // '|='
        break;
      case 49:                      // '?='
        consume(49);                // '?='
        break;
      default:
        consume(36);                // ':='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      case 79:                      // '|='
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        case 463:                   // '|=' Identifier
          lookahead3W(46);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        case 2639:                  // '|=' '('
          lookahead3W(24);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
        case 6479:                  // '|=' '['
          lookahead3W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
          break;
        case 9872:                  // '%=' '{'
        case 9875:                  // '&=' '{'
        case 9880:                  // '*=' '{'
        case 9883:                  // '+=' '{'
        case 9887:                  // '-=' '{'
        case 9890:                  // '/=' '{'
        case 9892:                  // ':=' '{'
        case 9896:                  // '<<=' '{'
        case 9898:                  // '=' '{'
        case 9903:                  // '>>=' '{'
        case 9905:                  // '?=' '{'
        case 9909:                  // '^=' '{'
        case 9935:                  // '|=' '{'
          lookahead3W(33);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
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
        case 591:                   // '|=' Character
        case 719:                   // '|=' String
        case 847:                   // '|=' Integer
        case 975:                   // '|=' Complex
        case 1103:                  // '|=' Real
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 1552:                  // '%=' '!'
        case 3216:                  // '%=' '+'
        case 3344:                  // '%=' '++'
        case 3728:                  // '%=' '-'
        case 3856:                  // '%=' '--'
        case 10512:                 // '%=' '~'
        case 1555:                  // '&=' '!'
        case 3219:                  // '&=' '+'
        case 3347:                  // '&=' '++'
        case 3731:                  // '&=' '-'
        case 3859:                  // '&=' '--'
        case 10515:                 // '&=' '~'
        case 1560:                  // '*=' '!'
        case 3224:                  // '*=' '+'
        case 3352:                  // '*=' '++'
        case 3736:                  // '*=' '-'
        case 3864:                  // '*=' '--'
        case 10520:                 // '*=' '~'
        case 1563:                  // '+=' '!'
        case 3227:                  // '+=' '+'
        case 3355:                  // '+=' '++'
        case 3739:                  // '+=' '-'
        case 3867:                  // '+=' '--'
        case 10523:                 // '+=' '~'
        case 1567:                  // '-=' '!'
        case 3231:                  // '-=' '+'
        case 3359:                  // '-=' '++'
        case 3743:                  // '-=' '-'
        case 3871:                  // '-=' '--'
        case 10527:                 // '-=' '~'
        case 1570:                  // '/=' '!'
        case 3234:                  // '/=' '+'
        case 3362:                  // '/=' '++'
        case 3746:                  // '/=' '-'
        case 3874:                  // '/=' '--'
        case 10530:                 // '/=' '~'
        case 1572:                  // ':=' '!'
        case 3236:                  // ':=' '+'
        case 3364:                  // ':=' '++'
        case 3748:                  // ':=' '-'
        case 3876:                  // ':=' '--'
        case 10532:                 // ':=' '~'
        case 1576:                  // '<<=' '!'
        case 3240:                  // '<<=' '+'
        case 3368:                  // '<<=' '++'
        case 3752:                  // '<<=' '-'
        case 3880:                  // '<<=' '--'
        case 10536:                 // '<<=' '~'
        case 1578:                  // '=' '!'
        case 3242:                  // '=' '+'
        case 3370:                  // '=' '++'
        case 3754:                  // '=' '-'
        case 3882:                  // '=' '--'
        case 10538:                 // '=' '~'
        case 1583:                  // '>>=' '!'
        case 3247:                  // '>>=' '+'
        case 3375:                  // '>>=' '++'
        case 3759:                  // '>>=' '-'
        case 3887:                  // '>>=' '--'
        case 10543:                 // '>>=' '~'
        case 1585:                  // '?=' '!'
        case 3249:                  // '?=' '+'
        case 3377:                  // '?=' '++'
        case 3761:                  // '?=' '-'
        case 3889:                  // '?=' '--'
        case 10545:                 // '?=' '~'
        case 1589:                  // '^=' '!'
        case 3253:                  // '^=' '+'
        case 3381:                  // '^=' '++'
        case 3765:                  // '^=' '-'
        case 3893:                  // '^=' '--'
        case 10549:                 // '^=' '~'
        case 1615:                  // '|=' '!'
        case 3279:                  // '|=' '+'
        case 3407:                  // '|=' '++'
        case 3791:                  // '|=' '-'
        case 3919:                  // '|=' '--'
        case 10575:                 // '|=' '~'
          lookahead3W(22);          // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
       && lk != 68                  // 'import'
       && lk != 69                  // 'include'
       && lk != 70                  // 'local'
       && lk != 71                  // 'return'
       && lk != 72                  // 'switch'
       && lk != 73                  // 'test'
       && lk != 74                  // 'throw'
       && lk != 75                  // 'try'
       && lk != 76                  // 'while'
       && lk != 77                  // '{'
       && lk != 81                  // '}'
       && lk != 82)                 // '~'
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
            case 79:                // '|='
              consumeT(79);         // '|='
              break;
            case 49:                // '?='
              consumeT(49);         // '?='
              break;
            default:
              consumeT(36);         // ':='
            }
            lookahead1W(23);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      case 79:                      // '|='
        consumeT(79);               // '|='
        break;
      case 49:                      // '?='
        consumeT(49);               // '?='
        break;
      default:
        consumeT(36);               // ':='
      }
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
      consume(35);                  // ':'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
      try_VariableAssignment();
      consumeT(35);                 // ':'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      if (l1 != 80)                 // '||'
      {
        break;
      }
      consume(80);                  // '||'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      if (l1 != 80)                 // '||'
      {
        break;
      }
      consumeT(80);                 // '||'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      if (l1 != 78)                 // '|'
      {
        break;
      }
      consume(78);                  // '|'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      if (l1 != 78)                 // '|'
      {
        break;
      }
      consumeT(78);                 // '|'
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 409:                   // '+' Identifier
        case 413:                   // '-' Identifier
          lookahead3W(46);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 2585:                  // '+' '('
        case 2589:                  // '-' '('
          lookahead3W(24);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
          break;
        case 9881:                  // '+' '{'
        case 9885:                  // '-' '{'
          lookahead3W(33);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
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
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 68                  // 'import'
       && lk != 69                  // 'include'
       && lk != 70                  // 'local'
       && lk != 71                  // 'return'
       && lk != 72                  // 'switch'
       && lk != 73                  // 'test'
       && lk != 74                  // 'throw'
       && lk != 75                  // 'try'
       && lk != 76                  // 'while'
       && lk != 77                  // '{'
       && lk != 78                  // '|'
       && lk != 79                  // '|='
       && lk != 80                  // '||'
       && lk != 81                  // '}'
       && lk != 82                  // '~'
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
       && lk != 10521               // '+' '~'
       && lk != 10525               // '-' '~'
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
       || lk == 68                  // 'import'
       || lk == 69                  // 'include'
       || lk == 70                  // 'local'
       || lk == 71                  // 'return'
       || lk == 72                  // 'switch'
       || lk == 73                  // 'test'
       || lk == 74                  // 'throw'
       || lk == 75                  // 'try'
       || lk == 76                  // 'while'
       || lk == 77                  // '{'
       || lk == 78                  // '|'
       || lk == 79                  // '|='
       || lk == 80                  // '||'
       || lk == 81                  // '}'
       || lk == 82)                 // '~'
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
        lookahead2W(23);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '!' | '(' | '+' | '++' | '-' | '--' | '[' | '{' | '~'
        switch (lk)
        {
        case 409:                   // '+' Identifier
        case 413:                   // '-' Identifier
          lookahead3W(46);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        case 2585:                  // '+' '('
        case 2589:                  // '-' '('
          lookahead3W(24);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 6425:                  // '+' '['
        case 6429:                  // '-' '['
          lookahead3W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
          break;
        case 9881:                  // '+' '{'
        case 9885:                  // '-' '{'
          lookahead3W(33);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
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
          lookahead3W(45);          // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
       && lk != 68                  // 'import'
       && lk != 69                  // 'include'
       && lk != 70                  // 'local'
       && lk != 71                  // 'return'
       && lk != 72                  // 'switch'
       && lk != 73                  // 'test'
       && lk != 74                  // 'throw'
       && lk != 75                  // 'try'
       && lk != 76                  // 'while'
       && lk != 77                  // '{'
       && lk != 78                  // '|'
       && lk != 79                  // '|='
       && lk != 80                  // '||'
       && lk != 81                  // '}'
       && lk != 82                  // '~'
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
       && lk != 10521               // '+' '~'
       && lk != 10525               // '-' '~'
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
       || lk == 68                  // 'import'
       || lk == 69                  // 'include'
       || lk == 70                  // 'local'
       || lk == 71                  // 'return'
       || lk == 72                  // 'switch'
       || lk == 73                  // 'test'
       || lk == 74                  // 'throw'
       || lk == 75                  // 'try'
       || lk == 76                  // 'while'
       || lk == 77                  // '{'
       || lk == 78                  // '|'
       || lk == 79                  // '|='
       || lk == 80                  // '||'
       || lk == 81                  // '}'
       || lk == 82)                 // '~'
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(23);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead1W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
      lookahead1W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
      lookahead2W(46);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 9876:                    // '(' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
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
        lookahead3W(25);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10516:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8596:                    // '(' 'if'
      case 9236:                    // '(' 'switch'
      case 9364:                    // '(' 'test'
      case 9748:                    // '(' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8724:                    // '(' 'import'
      case 8852:                    // '(' 'include'
      case 8980:                    // '(' 'local'
      case 9108:                    // '(' 'return'
      case 9492:                    // '(' 'throw'
      case 9620:                    // '(' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(40);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(32);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 9906:                    // '[' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
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
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10546:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8626:                    // '[' 'if'
      case 9266:                    // '[' 'switch'
      case 9394:                    // '[' 'test'
      case 9778:                    // '[' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8754:                    // '[' 'import'
      case 8882:                    // '[' 'include'
      case 9010:                    // '[' 'local'
      case 9138:                    // '[' 'return'
      case 9522:                    // '[' 'throw'
      case 9650:                    // '[' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 77:                        // '{'
      lookahead2W(33);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 461:                     // '{' Identifier
        lookahead3W(39);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 717:                     // '{' String
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6477:                    // '{' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 9933:                    // '{' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 10445:                   // '{' '}'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 589:                     // '{' Character
      case 845:                     // '{' Integer
      case 973:                     // '{' Complex
      case 1101:                    // '{' Real
        lookahead3W(30);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1229:                    // '{' Comment
      case 4813:                    // '{' ';'
      case 6989:                    // '{' 'break'
      case 7373:                    // '{' 'continue'
        lookahead3W(17);            // WhiteSpace^token | ',' | '}'
        break;
      case 7885:                    // '{' 'f32'
      case 8013:                    // '{' 'f64'
      case 8397:                    // '{' 'i32'
      case 8525:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1613:                    // '{' '!'
      case 3277:                    // '{' '+'
      case 3405:                    // '{' '++'
      case 3789:                    // '{' '-'
      case 3917:                    // '{' '--'
      case 10573:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8141:                    // '{' 'for'
      case 8269:                    // '{' 'foreach'
      case 8653:                    // '{' 'if'
      case 9293:                    // '{' 'switch'
      case 9421:                    // '{' 'test'
      case 9805:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2637:                    // '{' '('
      case 3661:                    // '{' ','
      case 7629:                    // '{' 'do'
      case 8781:                    // '{' 'import'
      case 8909:                    // '{' 'include'
      case 9037:                    // '{' 'local'
      case 9165:                    // '{' 'return'
      case 9549:                    // '{' 'throw'
      case 9677:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Complex
    case 8:                         // Real
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
     && lk != 82                    // '~'
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
     && lk != 8707                  // Identifier 'import'
     && lk != 8708                  // Character 'import'
     && lk != 8709                  // String 'import'
     && lk != 8710                  // Integer 'import'
     && lk != 8711                  // Complex 'import'
     && lk != 8712                  // Real 'import'
     && lk != 8835                  // Identifier 'include'
     && lk != 8836                  // Character 'include'
     && lk != 8837                  // String 'include'
     && lk != 8838                  // Integer 'include'
     && lk != 8839                  // Complex 'include'
     && lk != 8840                  // Real 'include'
     && lk != 8963                  // Identifier 'local'
     && lk != 8964                  // Character 'local'
     && lk != 8965                  // String 'local'
     && lk != 8966                  // Integer 'local'
     && lk != 8967                  // Complex 'local'
     && lk != 8968                  // Real 'local'
     && lk != 9091                  // Identifier 'return'
     && lk != 9092                  // Character 'return'
     && lk != 9093                  // String 'return'
     && lk != 9094                  // Integer 'return'
     && lk != 9095                  // Complex 'return'
     && lk != 9096                  // Real 'return'
     && lk != 9219                  // Identifier 'switch'
     && lk != 9220                  // Character 'switch'
     && lk != 9221                  // String 'switch'
     && lk != 9222                  // Integer 'switch'
     && lk != 9223                  // Complex 'switch'
     && lk != 9224                  // Real 'switch'
     && lk != 9347                  // Identifier 'test'
     && lk != 9348                  // Character 'test'
     && lk != 9349                  // String 'test'
     && lk != 9350                  // Integer 'test'
     && lk != 9351                  // Complex 'test'
     && lk != 9352                  // Real 'test'
     && lk != 9475                  // Identifier 'throw'
     && lk != 9476                  // Character 'throw'
     && lk != 9477                  // String 'throw'
     && lk != 9478                  // Integer 'throw'
     && lk != 9479                  // Complex 'throw'
     && lk != 9480                  // Real 'throw'
     && lk != 9603                  // Identifier 'try'
     && lk != 9604                  // Character 'try'
     && lk != 9605                  // String 'try'
     && lk != 9606                  // Integer 'try'
     && lk != 9607                  // Complex 'try'
     && lk != 9608                  // Real 'try'
     && lk != 9731                  // Identifier 'while'
     && lk != 9732                  // Character 'while'
     && lk != 9733                  // String 'while'
     && lk != 9734                  // Integer 'while'
     && lk != 9735                  // Complex 'while'
     && lk != 9736                  // Real 'while'
     && lk != 9859                  // Identifier '{'
     && lk != 9860                  // Character '{'
     && lk != 9861                  // String '{'
     && lk != 9862                  // Integer '{'
     && lk != 9863                  // Complex '{'
     && lk != 9864                  // Real '{'
     && lk != 9987                  // Identifier '|'
     && lk != 9988                  // Character '|'
     && lk != 9989                  // String '|'
     && lk != 9990                  // Integer '|'
     && lk != 9991                  // Complex '|'
     && lk != 9992                  // Real '|'
     && lk != 10115                 // Identifier '|='
     && lk != 10116                 // Character '|='
     && lk != 10117                 // String '|='
     && lk != 10118                 // Integer '|='
     && lk != 10119                 // Complex '|='
     && lk != 10120                 // Real '|='
     && lk != 10243                 // Identifier '||'
     && lk != 10244                 // Character '||'
     && lk != 10245                 // String '||'
     && lk != 10246                 // Integer '||'
     && lk != 10247                 // Complex '||'
     && lk != 10248                 // Real '||'
     && lk != 10371                 // Identifier '}'
     && lk != 10372                 // Character '}'
     && lk != 10373                 // String '}'
     && lk != 10374                 // Integer '}'
     && lk != 10375                 // Complex '}'
     && lk != 10376                 // Real '}'
     && lk != 10499                 // Identifier '~'
     && lk != 10500                 // Character '~'
     && lk != 10501                 // String '~'
     && lk != 10502                 // Integer '~'
     && lk != 10503                 // Complex '~'
     && lk != 10504                 // Real '~'
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
     && lk != 26829                 // '{' '}' END
     && lk != 55730                 // '[' ']' Identifier
     && lk != 59597                 // '{' '}' Identifier
     && lk != 72114                 // '[' ']' Character
     && lk != 75981                 // '{' '}' Character
     && lk != 88498                 // '[' ']' String
     && lk != 92365                 // '{' '}' String
     && lk != 104882                // '[' ']' Integer
     && lk != 108749                // '{' '}' Integer
     && lk != 121266                // '[' ']' Complex
     && lk != 125133                // '{' '}' Complex
     && lk != 137650                // '[' ']' Real
     && lk != 141517                // '{' '}' Real
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
     && lk != 157901                // '{' '}' Comment
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
     && lk != 207053                // '{' '}' '!'
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
     && lk != 223437                // '{' '}' '!='
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
     && lk != 256205                // '{' '}' '%'
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
     && lk != 272589                // '{' '}' '%='
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
     && lk != 288973                // '{' '}' '&'
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
     && lk != 305357                // '{' '}' '&&'
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
     && lk != 321741                // '{' '}' '&='
     && lk != 334258                // '[' ']' '('
     && lk != 338125                // '{' '}' '('
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
     && lk != 354509                // '{' '}' ')'
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
     && lk != 370893                // '{' '}' '*'
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
     && lk != 387277                // '{' '}' '**'
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
     && lk != 403661                // '{' '}' '*='
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
     && lk != 420045                // '{' '}' '+'
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
     && lk != 452813                // '{' '}' '+='
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
     && lk != 469197                // '{' '}' ','
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
     && lk != 485581                // '{' '}' '-'
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
     && lk != 518349                // '{' '}' '-='
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
     && lk != 551117                // '{' '}' '/'
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
     && lk != 567501                // '{' '}' '/='
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
     && lk != 583885                // '{' '}' ':'
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
     && lk != 600269                // '{' '}' ':='
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
     && lk != 616653                // '{' '}' ';'
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
     && lk != 633037                // '{' '}' '<'
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
     && lk != 649421                // '{' '}' '<<'
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
     && lk != 665805                // '{' '}' '<<='
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
     && lk != 682189                // '{' '}' '<='
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
     && lk != 698573                // '{' '}' '='
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
     && lk != 714957                // '{' '}' '=='
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
     && lk != 731341                // '{' '}' '>'
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
     && lk != 747725                // '{' '}' '>='
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
     && lk != 764109                // '{' '}' '>>'
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
     && lk != 780493                // '{' '}' '>>='
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
     && lk != 796877                // '{' '}' '?'
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
     && lk != 813261                // '{' '}' '?='
     && lk != 825778                // '[' ']' '['
     && lk != 829645                // '{' '}' '['
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
     && lk != 846029                // '{' '}' ']'
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
     && lk != 862413                // '{' '}' '^'
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
     && lk != 878797                // '{' '}' '^='
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
     && lk != 895181                // '{' '}' 'break'
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
     && lk != 911565                // '{' '}' 'case'
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
     && lk != 927949                // '{' '}' 'catch'
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
     && lk != 944333                // '{' '}' 'continue'
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
     && lk != 960717                // '{' '}' 'default'
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
     && lk != 977101                // '{' '}' 'do'
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
     && lk != 993485                // '{' '}' 'else'
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
     && lk != 1009869               // '{' '}' 'f32'
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
     && lk != 1026253               // '{' '}' 'f64'
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
     && lk != 1042637               // '{' '}' 'for'
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
     && lk != 1059021               // '{' '}' 'foreach'
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
     && lk != 1075405               // '{' '}' 'i32'
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
     && lk != 1091789               // '{' '}' 'i64'
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
     && lk != 1108173               // '{' '}' 'if'
     && lk != 1117443               // Identifier '++' 'import'
     && lk != 1117444               // Character '++' 'import'
     && lk != 1117445               // String '++' 'import'
     && lk != 1117446               // Integer '++' 'import'
     && lk != 1117447               // Complex '++' 'import'
     && lk != 1117448               // Real '++' 'import'
     && lk != 1117955               // Identifier '--' 'import'
     && lk != 1117956               // Character '--' 'import'
     && lk != 1117957               // String '--' 'import'
     && lk != 1117958               // Integer '--' 'import'
     && lk != 1117959               // Complex '--' 'import'
     && lk != 1117960               // Real '--' 'import'
     && lk != 1120690               // '[' ']' 'import'
     && lk != 1124557               // '{' '}' 'import'
     && lk != 1133827               // Identifier '++' 'include'
     && lk != 1133828               // Character '++' 'include'
     && lk != 1133829               // String '++' 'include'
     && lk != 1133830               // Integer '++' 'include'
     && lk != 1133831               // Complex '++' 'include'
     && lk != 1133832               // Real '++' 'include'
     && lk != 1134339               // Identifier '--' 'include'
     && lk != 1134340               // Character '--' 'include'
     && lk != 1134341               // String '--' 'include'
     && lk != 1134342               // Integer '--' 'include'
     && lk != 1134343               // Complex '--' 'include'
     && lk != 1134344               // Real '--' 'include'
     && lk != 1137074               // '[' ']' 'include'
     && lk != 1140941               // '{' '}' 'include'
     && lk != 1150211               // Identifier '++' 'local'
     && lk != 1150212               // Character '++' 'local'
     && lk != 1150213               // String '++' 'local'
     && lk != 1150214               // Integer '++' 'local'
     && lk != 1150215               // Complex '++' 'local'
     && lk != 1150216               // Real '++' 'local'
     && lk != 1150723               // Identifier '--' 'local'
     && lk != 1150724               // Character '--' 'local'
     && lk != 1150725               // String '--' 'local'
     && lk != 1150726               // Integer '--' 'local'
     && lk != 1150727               // Complex '--' 'local'
     && lk != 1150728               // Real '--' 'local'
     && lk != 1153458               // '[' ']' 'local'
     && lk != 1157325               // '{' '}' 'local'
     && lk != 1166595               // Identifier '++' 'return'
     && lk != 1166596               // Character '++' 'return'
     && lk != 1166597               // String '++' 'return'
     && lk != 1166598               // Integer '++' 'return'
     && lk != 1166599               // Complex '++' 'return'
     && lk != 1166600               // Real '++' 'return'
     && lk != 1167107               // Identifier '--' 'return'
     && lk != 1167108               // Character '--' 'return'
     && lk != 1167109               // String '--' 'return'
     && lk != 1167110               // Integer '--' 'return'
     && lk != 1167111               // Complex '--' 'return'
     && lk != 1167112               // Real '--' 'return'
     && lk != 1169842               // '[' ']' 'return'
     && lk != 1173709               // '{' '}' 'return'
     && lk != 1182979               // Identifier '++' 'switch'
     && lk != 1182980               // Character '++' 'switch'
     && lk != 1182981               // String '++' 'switch'
     && lk != 1182982               // Integer '++' 'switch'
     && lk != 1182983               // Complex '++' 'switch'
     && lk != 1182984               // Real '++' 'switch'
     && lk != 1183491               // Identifier '--' 'switch'
     && lk != 1183492               // Character '--' 'switch'
     && lk != 1183493               // String '--' 'switch'
     && lk != 1183494               // Integer '--' 'switch'
     && lk != 1183495               // Complex '--' 'switch'
     && lk != 1183496               // Real '--' 'switch'
     && lk != 1186226               // '[' ']' 'switch'
     && lk != 1190093               // '{' '}' 'switch'
     && lk != 1199363               // Identifier '++' 'test'
     && lk != 1199364               // Character '++' 'test'
     && lk != 1199365               // String '++' 'test'
     && lk != 1199366               // Integer '++' 'test'
     && lk != 1199367               // Complex '++' 'test'
     && lk != 1199368               // Real '++' 'test'
     && lk != 1199875               // Identifier '--' 'test'
     && lk != 1199876               // Character '--' 'test'
     && lk != 1199877               // String '--' 'test'
     && lk != 1199878               // Integer '--' 'test'
     && lk != 1199879               // Complex '--' 'test'
     && lk != 1199880               // Real '--' 'test'
     && lk != 1202610               // '[' ']' 'test'
     && lk != 1206477               // '{' '}' 'test'
     && lk != 1215747               // Identifier '++' 'throw'
     && lk != 1215748               // Character '++' 'throw'
     && lk != 1215749               // String '++' 'throw'
     && lk != 1215750               // Integer '++' 'throw'
     && lk != 1215751               // Complex '++' 'throw'
     && lk != 1215752               // Real '++' 'throw'
     && lk != 1216259               // Identifier '--' 'throw'
     && lk != 1216260               // Character '--' 'throw'
     && lk != 1216261               // String '--' 'throw'
     && lk != 1216262               // Integer '--' 'throw'
     && lk != 1216263               // Complex '--' 'throw'
     && lk != 1216264               // Real '--' 'throw'
     && lk != 1218994               // '[' ']' 'throw'
     && lk != 1222861               // '{' '}' 'throw'
     && lk != 1232131               // Identifier '++' 'try'
     && lk != 1232132               // Character '++' 'try'
     && lk != 1232133               // String '++' 'try'
     && lk != 1232134               // Integer '++' 'try'
     && lk != 1232135               // Complex '++' 'try'
     && lk != 1232136               // Real '++' 'try'
     && lk != 1232643               // Identifier '--' 'try'
     && lk != 1232644               // Character '--' 'try'
     && lk != 1232645               // String '--' 'try'
     && lk != 1232646               // Integer '--' 'try'
     && lk != 1232647               // Complex '--' 'try'
     && lk != 1232648               // Real '--' 'try'
     && lk != 1235378               // '[' ']' 'try'
     && lk != 1239245               // '{' '}' 'try'
     && lk != 1248515               // Identifier '++' 'while'
     && lk != 1248516               // Character '++' 'while'
     && lk != 1248517               // String '++' 'while'
     && lk != 1248518               // Integer '++' 'while'
     && lk != 1248519               // Complex '++' 'while'
     && lk != 1248520               // Real '++' 'while'
     && lk != 1249027               // Identifier '--' 'while'
     && lk != 1249028               // Character '--' 'while'
     && lk != 1249029               // String '--' 'while'
     && lk != 1249030               // Integer '--' 'while'
     && lk != 1249031               // Complex '--' 'while'
     && lk != 1249032               // Real '--' 'while'
     && lk != 1251762               // '[' ']' 'while'
     && lk != 1255629               // '{' '}' 'while'
     && lk != 1268146               // '[' ']' '{'
     && lk != 1272013               // '{' '}' '{'
     && lk != 1281283               // Identifier '++' '|'
     && lk != 1281284               // Character '++' '|'
     && lk != 1281285               // String '++' '|'
     && lk != 1281286               // Integer '++' '|'
     && lk != 1281287               // Complex '++' '|'
     && lk != 1281288               // Real '++' '|'
     && lk != 1281795               // Identifier '--' '|'
     && lk != 1281796               // Character '--' '|'
     && lk != 1281797               // String '--' '|'
     && lk != 1281798               // Integer '--' '|'
     && lk != 1281799               // Complex '--' '|'
     && lk != 1281800               // Real '--' '|'
     && lk != 1284530               // '[' ']' '|'
     && lk != 1288397               // '{' '}' '|'
     && lk != 1297667               // Identifier '++' '|='
     && lk != 1297668               // Character '++' '|='
     && lk != 1297669               // String '++' '|='
     && lk != 1297670               // Integer '++' '|='
     && lk != 1297671               // Complex '++' '|='
     && lk != 1297672               // Real '++' '|='
     && lk != 1298179               // Identifier '--' '|='
     && lk != 1298180               // Character '--' '|='
     && lk != 1298181               // String '--' '|='
     && lk != 1298182               // Integer '--' '|='
     && lk != 1298183               // Complex '--' '|='
     && lk != 1298184               // Real '--' '|='
     && lk != 1300914               // '[' ']' '|='
     && lk != 1304781               // '{' '}' '|='
     && lk != 1314051               // Identifier '++' '||'
     && lk != 1314052               // Character '++' '||'
     && lk != 1314053               // String '++' '||'
     && lk != 1314054               // Integer '++' '||'
     && lk != 1314055               // Complex '++' '||'
     && lk != 1314056               // Real '++' '||'
     && lk != 1314563               // Identifier '--' '||'
     && lk != 1314564               // Character '--' '||'
     && lk != 1314565               // String '--' '||'
     && lk != 1314566               // Integer '--' '||'
     && lk != 1314567               // Complex '--' '||'
     && lk != 1314568               // Real '--' '||'
     && lk != 1317298               // '[' ']' '||'
     && lk != 1321165               // '{' '}' '||'
     && lk != 1330435               // Identifier '++' '}'
     && lk != 1330436               // Character '++' '}'
     && lk != 1330437               // String '++' '}'
     && lk != 1330438               // Integer '++' '}'
     && lk != 1330439               // Complex '++' '}'
     && lk != 1330440               // Real '++' '}'
     && lk != 1330947               // Identifier '--' '}'
     && lk != 1330948               // Character '--' '}'
     && lk != 1330949               // String '--' '}'
     && lk != 1330950               // Integer '--' '}'
     && lk != 1330951               // Complex '--' '}'
     && lk != 1330952               // Real '--' '}'
     && lk != 1333682               // '[' ']' '}'
     && lk != 1337549               // '{' '}' '}'
     && lk != 1346819               // Identifier '++' '~'
     && lk != 1346820               // Character '++' '~'
     && lk != 1346821               // String '++' '~'
     && lk != 1346822               // Integer '++' '~'
     && lk != 1346823               // Complex '++' '~'
     && lk != 1346824               // Real '++' '~'
     && lk != 1347331               // Identifier '--' '~'
     && lk != 1347332               // Character '--' '~'
     && lk != 1347333               // String '--' '~'
     && lk != 1347334               // Integer '--' '~'
     && lk != 1347335               // Complex '--' '~'
     && lk != 1347336               // Real '--' '~'
     && lk != 1350066               // '[' ']' '~'
     && lk != 1353933)              // '{' '}' '~'
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
    case 1117443:                   // Identifier '++' 'import'
    case 1117444:                   // Character '++' 'import'
    case 1117445:                   // String '++' 'import'
    case 1117446:                   // Integer '++' 'import'
    case 1117447:                   // Complex '++' 'import'
    case 1117448:                   // Real '++' 'import'
    case 1133827:                   // Identifier '++' 'include'
    case 1133828:                   // Character '++' 'include'
    case 1133829:                   // String '++' 'include'
    case 1133830:                   // Integer '++' 'include'
    case 1133831:                   // Complex '++' 'include'
    case 1133832:                   // Real '++' 'include'
    case 1150211:                   // Identifier '++' 'local'
    case 1150212:                   // Character '++' 'local'
    case 1150213:                   // String '++' 'local'
    case 1150214:                   // Integer '++' 'local'
    case 1150215:                   // Complex '++' 'local'
    case 1150216:                   // Real '++' 'local'
    case 1166595:                   // Identifier '++' 'return'
    case 1166596:                   // Character '++' 'return'
    case 1166597:                   // String '++' 'return'
    case 1166598:                   // Integer '++' 'return'
    case 1166599:                   // Complex '++' 'return'
    case 1166600:                   // Real '++' 'return'
    case 1182979:                   // Identifier '++' 'switch'
    case 1182980:                   // Character '++' 'switch'
    case 1182981:                   // String '++' 'switch'
    case 1182982:                   // Integer '++' 'switch'
    case 1182983:                   // Complex '++' 'switch'
    case 1182984:                   // Real '++' 'switch'
    case 1199363:                   // Identifier '++' 'test'
    case 1199364:                   // Character '++' 'test'
    case 1199365:                   // String '++' 'test'
    case 1199366:                   // Integer '++' 'test'
    case 1199367:                   // Complex '++' 'test'
    case 1199368:                   // Real '++' 'test'
    case 1215747:                   // Identifier '++' 'throw'
    case 1215748:                   // Character '++' 'throw'
    case 1215749:                   // String '++' 'throw'
    case 1215750:                   // Integer '++' 'throw'
    case 1215751:                   // Complex '++' 'throw'
    case 1215752:                   // Real '++' 'throw'
    case 1232131:                   // Identifier '++' 'try'
    case 1232132:                   // Character '++' 'try'
    case 1232133:                   // String '++' 'try'
    case 1232134:                   // Integer '++' 'try'
    case 1232135:                   // Complex '++' 'try'
    case 1232136:                   // Real '++' 'try'
    case 1248515:                   // Identifier '++' 'while'
    case 1248516:                   // Character '++' 'while'
    case 1248517:                   // String '++' 'while'
    case 1248518:                   // Integer '++' 'while'
    case 1248519:                   // Complex '++' 'while'
    case 1248520:                   // Real '++' 'while'
    case 1281283:                   // Identifier '++' '|'
    case 1281284:                   // Character '++' '|'
    case 1281285:                   // String '++' '|'
    case 1281286:                   // Integer '++' '|'
    case 1281287:                   // Complex '++' '|'
    case 1281288:                   // Real '++' '|'
    case 1297667:                   // Identifier '++' '|='
    case 1297668:                   // Character '++' '|='
    case 1297669:                   // String '++' '|='
    case 1297670:                   // Integer '++' '|='
    case 1297671:                   // Complex '++' '|='
    case 1297672:                   // Real '++' '|='
    case 1314051:                   // Identifier '++' '||'
    case 1314052:                   // Character '++' '||'
    case 1314053:                   // String '++' '||'
    case 1314054:                   // Integer '++' '||'
    case 1314055:                   // Complex '++' '||'
    case 1314056:                   // Real '++' '||'
    case 1330435:                   // Identifier '++' '}'
    case 1330436:                   // Character '++' '}'
    case 1330437:                   // String '++' '}'
    case 1330438:                   // Integer '++' '}'
    case 1330439:                   // Complex '++' '}'
    case 1330440:                   // Real '++' '}'
    case 1346819:                   // Identifier '++' '~'
    case 1346820:                   // Character '++' '~'
    case 1346821:                   // String '++' '~'
    case 1346822:                   // Integer '++' '~'
    case 1346823:                   // Complex '++' '~'
    case 1346824:                   // Real '++' '~'
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
    case 1117955:                   // Identifier '--' 'import'
    case 1117956:                   // Character '--' 'import'
    case 1117957:                   // String '--' 'import'
    case 1117958:                   // Integer '--' 'import'
    case 1117959:                   // Complex '--' 'import'
    case 1117960:                   // Real '--' 'import'
    case 1134339:                   // Identifier '--' 'include'
    case 1134340:                   // Character '--' 'include'
    case 1134341:                   // String '--' 'include'
    case 1134342:                   // Integer '--' 'include'
    case 1134343:                   // Complex '--' 'include'
    case 1134344:                   // Real '--' 'include'
    case 1150723:                   // Identifier '--' 'local'
    case 1150724:                   // Character '--' 'local'
    case 1150725:                   // String '--' 'local'
    case 1150726:                   // Integer '--' 'local'
    case 1150727:                   // Complex '--' 'local'
    case 1150728:                   // Real '--' 'local'
    case 1167107:                   // Identifier '--' 'return'
    case 1167108:                   // Character '--' 'return'
    case 1167109:                   // String '--' 'return'
    case 1167110:                   // Integer '--' 'return'
    case 1167111:                   // Complex '--' 'return'
    case 1167112:                   // Real '--' 'return'
    case 1183491:                   // Identifier '--' 'switch'
    case 1183492:                   // Character '--' 'switch'
    case 1183493:                   // String '--' 'switch'
    case 1183494:                   // Integer '--' 'switch'
    case 1183495:                   // Complex '--' 'switch'
    case 1183496:                   // Real '--' 'switch'
    case 1199875:                   // Identifier '--' 'test'
    case 1199876:                   // Character '--' 'test'
    case 1199877:                   // String '--' 'test'
    case 1199878:                   // Integer '--' 'test'
    case 1199879:                   // Complex '--' 'test'
    case 1199880:                   // Real '--' 'test'
    case 1216259:                   // Identifier '--' 'throw'
    case 1216260:                   // Character '--' 'throw'
    case 1216261:                   // String '--' 'throw'
    case 1216262:                   // Integer '--' 'throw'
    case 1216263:                   // Complex '--' 'throw'
    case 1216264:                   // Real '--' 'throw'
    case 1232643:                   // Identifier '--' 'try'
    case 1232644:                   // Character '--' 'try'
    case 1232645:                   // String '--' 'try'
    case 1232646:                   // Integer '--' 'try'
    case 1232647:                   // Complex '--' 'try'
    case 1232648:                   // Real '--' 'try'
    case 1249027:                   // Identifier '--' 'while'
    case 1249028:                   // Character '--' 'while'
    case 1249029:                   // String '--' 'while'
    case 1249030:                   // Integer '--' 'while'
    case 1249031:                   // Complex '--' 'while'
    case 1249032:                   // Real '--' 'while'
    case 1281795:                   // Identifier '--' '|'
    case 1281796:                   // Character '--' '|'
    case 1281797:                   // String '--' '|'
    case 1281798:                   // Integer '--' '|'
    case 1281799:                   // Complex '--' '|'
    case 1281800:                   // Real '--' '|'
    case 1298179:                   // Identifier '--' '|='
    case 1298180:                   // Character '--' '|='
    case 1298181:                   // String '--' '|='
    case 1298182:                   // Integer '--' '|='
    case 1298183:                   // Complex '--' '|='
    case 1298184:                   // Real '--' '|='
    case 1314563:                   // Identifier '--' '||'
    case 1314564:                   // Character '--' '||'
    case 1314565:                   // String '--' '||'
    case 1314566:                   // Integer '--' '||'
    case 1314567:                   // Complex '--' '||'
    case 1314568:                   // Real '--' '||'
    case 1330947:                   // Identifier '--' '}'
    case 1330948:                   // Character '--' '}'
    case 1330949:                   // String '--' '}'
    case 1330950:                   // Integer '--' '}'
    case 1330951:                   // Complex '--' '}'
    case 1330952:                   // Real '--' '}'
    case 1347331:                   // Identifier '--' '~'
    case 1347332:                   // Character '--' '~'
    case 1347333:                   // String '--' '~'
    case 1347334:                   // Integer '--' '~'
    case 1347335:                   // Complex '--' '~'
    case 1347336:                   // Real '--' '~'
      parse_Primary();
      lookahead1W(6);               // WhiteSpace^token | '--'
      consume(30);                  // '--'
      break;
    case 26:                        // '++'
      consume(26);                  // '++'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 30:                        // '--'
      consume(30);                  // '--'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 25:                        // '+'
      consume(25);                  // '+'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 29:                        // '-'
      consume(29);                  // '-'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 82:                        // '~'
      consume(82);                  // '~'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 12:                        // '!'
      consume(12);                  // '!'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
      lookahead2W(46);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 6403:                    // Identifier '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 3331:                    // Identifier '++'
      case 3843:                    // Identifier '--'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    case 20:                        // '('
      lookahead2W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 404:                     // '(' Identifier
        lookahead3W(37);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '**' | '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' |
                                    // '[' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 6420:                    // '(' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 9876:                    // '(' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
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
        lookahead3W(25);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||'
        break;
      case 1556:                    // '(' '!'
      case 3220:                    // '(' '+'
      case 3348:                    // '(' '++'
      case 3732:                    // '(' '-'
      case 3860:                    // '(' '--'
      case 10516:                   // '(' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8084:                    // '(' 'for'
      case 8212:                    // '(' 'foreach'
      case 8596:                    // '(' 'if'
      case 9236:                    // '(' 'switch'
      case 9364:                    // '(' 'test'
      case 9748:                    // '(' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2580:                    // '(' '('
      case 7572:                    // '(' 'do'
      case 8724:                    // '(' 'import'
      case 8852:                    // '(' 'include'
      case 8980:                    // '(' 'local'
      case 9108:                    // '(' 'return'
      case 9492:                    // '(' 'throw'
      case 9620:                    // '(' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 50:                        // '['
      lookahead2W(28);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 434:                     // '[' Identifier
        lookahead3W(40);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
        break;
      case 4786:                    // '[' ';'
        lookahead3W(32);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 6450:                    // '[' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 6578:                    // '[' ']'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 9906:                    // '[' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1202:                    // '[' Comment
      case 6962:                    // '[' 'break'
      case 7346:                    // '[' 'continue'
        lookahead3W(21);            // WhiteSpace^token | ',' | ';' | ']'
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
      case 1586:                    // '[' '!'
      case 3250:                    // '[' '+'
      case 3378:                    // '[' '++'
      case 3762:                    // '[' '-'
      case 3890:                    // '[' '--'
      case 10546:                   // '[' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8114:                    // '[' 'for'
      case 8242:                    // '[' 'foreach'
      case 8626:                    // '[' 'if'
      case 9266:                    // '[' 'switch'
      case 9394:                    // '[' 'test'
      case 9778:                    // '[' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2610:                    // '[' '('
      case 7602:                    // '[' 'do'
      case 8754:                    // '[' 'import'
      case 8882:                    // '[' 'include'
      case 9010:                    // '[' 'local'
      case 9138:                    // '[' 'return'
      case 9522:                    // '[' 'throw'
      case 9650:                    // '[' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 77:                        // '{'
      lookahead2W(33);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
      switch (lk)
      {
      case 461:                     // '{' Identifier
        lookahead3W(39);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':' |
                                    // ':=' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | '^' | '^=' | '{' | '|' | '|=' | '||' | '}'
        break;
      case 717:                     // '{' String
        lookahead3W(34);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ':=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' |
                                    // '^=' | '|' | '|=' | '||' | '}'
        break;
      case 6477:                    // '{' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 9933:                    // '{' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 10445:                   // '{' '}'
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 589:                     // '{' Character
      case 845:                     // '{' Integer
      case 973:                     // '{' Complex
      case 1101:                    // '{' Real
        lookahead3W(30);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '**' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':=' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '?=' | '^' | '^=' |
                                    // '|' | '|=' | '||' | '}'
        break;
      case 1229:                    // '{' Comment
      case 4813:                    // '{' ';'
      case 6989:                    // '{' 'break'
      case 7373:                    // '{' 'continue'
        lookahead3W(17);            // WhiteSpace^token | ',' | '}'
        break;
      case 7885:                    // '{' 'f32'
      case 8013:                    // '{' 'f64'
      case 8397:                    // '{' 'i32'
      case 8525:                    // '{' 'i64'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 1613:                    // '{' '!'
      case 3277:                    // '{' '+'
      case 3405:                    // '{' '++'
      case 3789:                    // '{' '-'
      case 3917:                    // '{' '--'
      case 10573:                   // '{' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8141:                    // '{' 'for'
      case 8269:                    // '{' 'foreach'
      case 8653:                    // '{' 'if'
      case 9293:                    // '{' 'switch'
      case 9421:                    // '{' 'test'
      case 9805:                    // '{' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2637:                    // '{' '('
      case 3661:                    // '{' ','
      case 7629:                    // '{' 'do'
      case 8781:                    // '{' 'import'
      case 8909:                    // '{' 'include'
      case 9037:                    // '{' 'local'
      case 9165:                    // '{' 'return'
      case 9549:                    // '{' 'throw'
      case 9677:                    // '{' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 4:                         // Character
    case 5:                         // String
    case 6:                         // Integer
    case 7:                         // Complex
    case 8:                         // Real
      lookahead2W(45);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
     && lk != 82                    // '~'
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
     && lk != 8707                  // Identifier 'import'
     && lk != 8708                  // Character 'import'
     && lk != 8709                  // String 'import'
     && lk != 8710                  // Integer 'import'
     && lk != 8711                  // Complex 'import'
     && lk != 8712                  // Real 'import'
     && lk != 8835                  // Identifier 'include'
     && lk != 8836                  // Character 'include'
     && lk != 8837                  // String 'include'
     && lk != 8838                  // Integer 'include'
     && lk != 8839                  // Complex 'include'
     && lk != 8840                  // Real 'include'
     && lk != 8963                  // Identifier 'local'
     && lk != 8964                  // Character 'local'
     && lk != 8965                  // String 'local'
     && lk != 8966                  // Integer 'local'
     && lk != 8967                  // Complex 'local'
     && lk != 8968                  // Real 'local'
     && lk != 9091                  // Identifier 'return'
     && lk != 9092                  // Character 'return'
     && lk != 9093                  // String 'return'
     && lk != 9094                  // Integer 'return'
     && lk != 9095                  // Complex 'return'
     && lk != 9096                  // Real 'return'
     && lk != 9219                  // Identifier 'switch'
     && lk != 9220                  // Character 'switch'
     && lk != 9221                  // String 'switch'
     && lk != 9222                  // Integer 'switch'
     && lk != 9223                  // Complex 'switch'
     && lk != 9224                  // Real 'switch'
     && lk != 9347                  // Identifier 'test'
     && lk != 9348                  // Character 'test'
     && lk != 9349                  // String 'test'
     && lk != 9350                  // Integer 'test'
     && lk != 9351                  // Complex 'test'
     && lk != 9352                  // Real 'test'
     && lk != 9475                  // Identifier 'throw'
     && lk != 9476                  // Character 'throw'
     && lk != 9477                  // String 'throw'
     && lk != 9478                  // Integer 'throw'
     && lk != 9479                  // Complex 'throw'
     && lk != 9480                  // Real 'throw'
     && lk != 9603                  // Identifier 'try'
     && lk != 9604                  // Character 'try'
     && lk != 9605                  // String 'try'
     && lk != 9606                  // Integer 'try'
     && lk != 9607                  // Complex 'try'
     && lk != 9608                  // Real 'try'
     && lk != 9731                  // Identifier 'while'
     && lk != 9732                  // Character 'while'
     && lk != 9733                  // String 'while'
     && lk != 9734                  // Integer 'while'
     && lk != 9735                  // Complex 'while'
     && lk != 9736                  // Real 'while'
     && lk != 9859                  // Identifier '{'
     && lk != 9860                  // Character '{'
     && lk != 9861                  // String '{'
     && lk != 9862                  // Integer '{'
     && lk != 9863                  // Complex '{'
     && lk != 9864                  // Real '{'
     && lk != 9987                  // Identifier '|'
     && lk != 9988                  // Character '|'
     && lk != 9989                  // String '|'
     && lk != 9990                  // Integer '|'
     && lk != 9991                  // Complex '|'
     && lk != 9992                  // Real '|'
     && lk != 10115                 // Identifier '|='
     && lk != 10116                 // Character '|='
     && lk != 10117                 // String '|='
     && lk != 10118                 // Integer '|='
     && lk != 10119                 // Complex '|='
     && lk != 10120                 // Real '|='
     && lk != 10243                 // Identifier '||'
     && lk != 10244                 // Character '||'
     && lk != 10245                 // String '||'
     && lk != 10246                 // Integer '||'
     && lk != 10247                 // Complex '||'
     && lk != 10248                 // Real '||'
     && lk != 10371                 // Identifier '}'
     && lk != 10372                 // Character '}'
     && lk != 10373                 // String '}'
     && lk != 10374                 // Integer '}'
     && lk != 10375                 // Complex '}'
     && lk != 10376                 // Real '}'
     && lk != 10499                 // Identifier '~'
     && lk != 10500                 // Character '~'
     && lk != 10501                 // String '~'
     && lk != 10502                 // Integer '~'
     && lk != 10503                 // Complex '~'
     && lk != 10504                 // Real '~'
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
     && lk != 26829                 // '{' '}' END
     && lk != 55730                 // '[' ']' Identifier
     && lk != 59597                 // '{' '}' Identifier
     && lk != 72114                 // '[' ']' Character
     && lk != 75981                 // '{' '}' Character
     && lk != 88498                 // '[' ']' String
     && lk != 92365                 // '{' '}' String
     && lk != 104882                // '[' ']' Integer
     && lk != 108749                // '{' '}' Integer
     && lk != 121266                // '[' ']' Complex
     && lk != 125133                // '{' '}' Complex
     && lk != 137650                // '[' ']' Real
     && lk != 141517                // '{' '}' Real
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
     && lk != 157901                // '{' '}' Comment
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
     && lk != 207053                // '{' '}' '!'
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
     && lk != 223437                // '{' '}' '!='
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
     && lk != 256205                // '{' '}' '%'
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
     && lk != 272589                // '{' '}' '%='
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
     && lk != 288973                // '{' '}' '&'
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
     && lk != 305357                // '{' '}' '&&'
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
     && lk != 321741                // '{' '}' '&='
     && lk != 334258                // '[' ']' '('
     && lk != 338125                // '{' '}' '('
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
     && lk != 354509                // '{' '}' ')'
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
     && lk != 370893                // '{' '}' '*'
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
     && lk != 387277                // '{' '}' '**'
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
     && lk != 403661                // '{' '}' '*='
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
     && lk != 420045                // '{' '}' '+'
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
     && lk != 452813                // '{' '}' '+='
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
     && lk != 469197                // '{' '}' ','
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
     && lk != 485581                // '{' '}' '-'
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
     && lk != 518349                // '{' '}' '-='
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
     && lk != 551117                // '{' '}' '/'
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
     && lk != 567501                // '{' '}' '/='
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
     && lk != 583885                // '{' '}' ':'
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
     && lk != 600269                // '{' '}' ':='
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
     && lk != 616653                // '{' '}' ';'
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
     && lk != 633037                // '{' '}' '<'
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
     && lk != 649421                // '{' '}' '<<'
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
     && lk != 665805                // '{' '}' '<<='
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
     && lk != 682189                // '{' '}' '<='
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
     && lk != 698573                // '{' '}' '='
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
     && lk != 714957                // '{' '}' '=='
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
     && lk != 731341                // '{' '}' '>'
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
     && lk != 747725                // '{' '}' '>='
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
     && lk != 764109                // '{' '}' '>>'
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
     && lk != 780493                // '{' '}' '>>='
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
     && lk != 796877                // '{' '}' '?'
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
     && lk != 813261                // '{' '}' '?='
     && lk != 825778                // '[' ']' '['
     && lk != 829645                // '{' '}' '['
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
     && lk != 846029                // '{' '}' ']'
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
     && lk != 862413                // '{' '}' '^'
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
     && lk != 878797                // '{' '}' '^='
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
     && lk != 895181                // '{' '}' 'break'
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
     && lk != 911565                // '{' '}' 'case'
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
     && lk != 927949                // '{' '}' 'catch'
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
     && lk != 944333                // '{' '}' 'continue'
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
     && lk != 960717                // '{' '}' 'default'
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
     && lk != 977101                // '{' '}' 'do'
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
     && lk != 993485                // '{' '}' 'else'
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
     && lk != 1009869               // '{' '}' 'f32'
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
     && lk != 1026253               // '{' '}' 'f64'
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
     && lk != 1042637               // '{' '}' 'for'
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
     && lk != 1059021               // '{' '}' 'foreach'
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
     && lk != 1075405               // '{' '}' 'i32'
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
     && lk != 1091789               // '{' '}' 'i64'
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
     && lk != 1108173               // '{' '}' 'if'
     && lk != 1117443               // Identifier '++' 'import'
     && lk != 1117444               // Character '++' 'import'
     && lk != 1117445               // String '++' 'import'
     && lk != 1117446               // Integer '++' 'import'
     && lk != 1117447               // Complex '++' 'import'
     && lk != 1117448               // Real '++' 'import'
     && lk != 1117955               // Identifier '--' 'import'
     && lk != 1117956               // Character '--' 'import'
     && lk != 1117957               // String '--' 'import'
     && lk != 1117958               // Integer '--' 'import'
     && lk != 1117959               // Complex '--' 'import'
     && lk != 1117960               // Real '--' 'import'
     && lk != 1120690               // '[' ']' 'import'
     && lk != 1124557               // '{' '}' 'import'
     && lk != 1133827               // Identifier '++' 'include'
     && lk != 1133828               // Character '++' 'include'
     && lk != 1133829               // String '++' 'include'
     && lk != 1133830               // Integer '++' 'include'
     && lk != 1133831               // Complex '++' 'include'
     && lk != 1133832               // Real '++' 'include'
     && lk != 1134339               // Identifier '--' 'include'
     && lk != 1134340               // Character '--' 'include'
     && lk != 1134341               // String '--' 'include'
     && lk != 1134342               // Integer '--' 'include'
     && lk != 1134343               // Complex '--' 'include'
     && lk != 1134344               // Real '--' 'include'
     && lk != 1137074               // '[' ']' 'include'
     && lk != 1140941               // '{' '}' 'include'
     && lk != 1150211               // Identifier '++' 'local'
     && lk != 1150212               // Character '++' 'local'
     && lk != 1150213               // String '++' 'local'
     && lk != 1150214               // Integer '++' 'local'
     && lk != 1150215               // Complex '++' 'local'
     && lk != 1150216               // Real '++' 'local'
     && lk != 1150723               // Identifier '--' 'local'
     && lk != 1150724               // Character '--' 'local'
     && lk != 1150725               // String '--' 'local'
     && lk != 1150726               // Integer '--' 'local'
     && lk != 1150727               // Complex '--' 'local'
     && lk != 1150728               // Real '--' 'local'
     && lk != 1153458               // '[' ']' 'local'
     && lk != 1157325               // '{' '}' 'local'
     && lk != 1166595               // Identifier '++' 'return'
     && lk != 1166596               // Character '++' 'return'
     && lk != 1166597               // String '++' 'return'
     && lk != 1166598               // Integer '++' 'return'
     && lk != 1166599               // Complex '++' 'return'
     && lk != 1166600               // Real '++' 'return'
     && lk != 1167107               // Identifier '--' 'return'
     && lk != 1167108               // Character '--' 'return'
     && lk != 1167109               // String '--' 'return'
     && lk != 1167110               // Integer '--' 'return'
     && lk != 1167111               // Complex '--' 'return'
     && lk != 1167112               // Real '--' 'return'
     && lk != 1169842               // '[' ']' 'return'
     && lk != 1173709               // '{' '}' 'return'
     && lk != 1182979               // Identifier '++' 'switch'
     && lk != 1182980               // Character '++' 'switch'
     && lk != 1182981               // String '++' 'switch'
     && lk != 1182982               // Integer '++' 'switch'
     && lk != 1182983               // Complex '++' 'switch'
     && lk != 1182984               // Real '++' 'switch'
     && lk != 1183491               // Identifier '--' 'switch'
     && lk != 1183492               // Character '--' 'switch'
     && lk != 1183493               // String '--' 'switch'
     && lk != 1183494               // Integer '--' 'switch'
     && lk != 1183495               // Complex '--' 'switch'
     && lk != 1183496               // Real '--' 'switch'
     && lk != 1186226               // '[' ']' 'switch'
     && lk != 1190093               // '{' '}' 'switch'
     && lk != 1199363               // Identifier '++' 'test'
     && lk != 1199364               // Character '++' 'test'
     && lk != 1199365               // String '++' 'test'
     && lk != 1199366               // Integer '++' 'test'
     && lk != 1199367               // Complex '++' 'test'
     && lk != 1199368               // Real '++' 'test'
     && lk != 1199875               // Identifier '--' 'test'
     && lk != 1199876               // Character '--' 'test'
     && lk != 1199877               // String '--' 'test'
     && lk != 1199878               // Integer '--' 'test'
     && lk != 1199879               // Complex '--' 'test'
     && lk != 1199880               // Real '--' 'test'
     && lk != 1202610               // '[' ']' 'test'
     && lk != 1206477               // '{' '}' 'test'
     && lk != 1215747               // Identifier '++' 'throw'
     && lk != 1215748               // Character '++' 'throw'
     && lk != 1215749               // String '++' 'throw'
     && lk != 1215750               // Integer '++' 'throw'
     && lk != 1215751               // Complex '++' 'throw'
     && lk != 1215752               // Real '++' 'throw'
     && lk != 1216259               // Identifier '--' 'throw'
     && lk != 1216260               // Character '--' 'throw'
     && lk != 1216261               // String '--' 'throw'
     && lk != 1216262               // Integer '--' 'throw'
     && lk != 1216263               // Complex '--' 'throw'
     && lk != 1216264               // Real '--' 'throw'
     && lk != 1218994               // '[' ']' 'throw'
     && lk != 1222861               // '{' '}' 'throw'
     && lk != 1232131               // Identifier '++' 'try'
     && lk != 1232132               // Character '++' 'try'
     && lk != 1232133               // String '++' 'try'
     && lk != 1232134               // Integer '++' 'try'
     && lk != 1232135               // Complex '++' 'try'
     && lk != 1232136               // Real '++' 'try'
     && lk != 1232643               // Identifier '--' 'try'
     && lk != 1232644               // Character '--' 'try'
     && lk != 1232645               // String '--' 'try'
     && lk != 1232646               // Integer '--' 'try'
     && lk != 1232647               // Complex '--' 'try'
     && lk != 1232648               // Real '--' 'try'
     && lk != 1235378               // '[' ']' 'try'
     && lk != 1239245               // '{' '}' 'try'
     && lk != 1248515               // Identifier '++' 'while'
     && lk != 1248516               // Character '++' 'while'
     && lk != 1248517               // String '++' 'while'
     && lk != 1248518               // Integer '++' 'while'
     && lk != 1248519               // Complex '++' 'while'
     && lk != 1248520               // Real '++' 'while'
     && lk != 1249027               // Identifier '--' 'while'
     && lk != 1249028               // Character '--' 'while'
     && lk != 1249029               // String '--' 'while'
     && lk != 1249030               // Integer '--' 'while'
     && lk != 1249031               // Complex '--' 'while'
     && lk != 1249032               // Real '--' 'while'
     && lk != 1251762               // '[' ']' 'while'
     && lk != 1255629               // '{' '}' 'while'
     && lk != 1268146               // '[' ']' '{'
     && lk != 1272013               // '{' '}' '{'
     && lk != 1281283               // Identifier '++' '|'
     && lk != 1281284               // Character '++' '|'
     && lk != 1281285               // String '++' '|'
     && lk != 1281286               // Integer '++' '|'
     && lk != 1281287               // Complex '++' '|'
     && lk != 1281288               // Real '++' '|'
     && lk != 1281795               // Identifier '--' '|'
     && lk != 1281796               // Character '--' '|'
     && lk != 1281797               // String '--' '|'
     && lk != 1281798               // Integer '--' '|'
     && lk != 1281799               // Complex '--' '|'
     && lk != 1281800               // Real '--' '|'
     && lk != 1284530               // '[' ']' '|'
     && lk != 1288397               // '{' '}' '|'
     && lk != 1297667               // Identifier '++' '|='
     && lk != 1297668               // Character '++' '|='
     && lk != 1297669               // String '++' '|='
     && lk != 1297670               // Integer '++' '|='
     && lk != 1297671               // Complex '++' '|='
     && lk != 1297672               // Real '++' '|='
     && lk != 1298179               // Identifier '--' '|='
     && lk != 1298180               // Character '--' '|='
     && lk != 1298181               // String '--' '|='
     && lk != 1298182               // Integer '--' '|='
     && lk != 1298183               // Complex '--' '|='
     && lk != 1298184               // Real '--' '|='
     && lk != 1300914               // '[' ']' '|='
     && lk != 1304781               // '{' '}' '|='
     && lk != 1314051               // Identifier '++' '||'
     && lk != 1314052               // Character '++' '||'
     && lk != 1314053               // String '++' '||'
     && lk != 1314054               // Integer '++' '||'
     && lk != 1314055               // Complex '++' '||'
     && lk != 1314056               // Real '++' '||'
     && lk != 1314563               // Identifier '--' '||'
     && lk != 1314564               // Character '--' '||'
     && lk != 1314565               // String '--' '||'
     && lk != 1314566               // Integer '--' '||'
     && lk != 1314567               // Complex '--' '||'
     && lk != 1314568               // Real '--' '||'
     && lk != 1317298               // '[' ']' '||'
     && lk != 1321165               // '{' '}' '||'
     && lk != 1330435               // Identifier '++' '}'
     && lk != 1330436               // Character '++' '}'
     && lk != 1330437               // String '++' '}'
     && lk != 1330438               // Integer '++' '}'
     && lk != 1330439               // Complex '++' '}'
     && lk != 1330440               // Real '++' '}'
     && lk != 1330947               // Identifier '--' '}'
     && lk != 1330948               // Character '--' '}'
     && lk != 1330949               // String '--' '}'
     && lk != 1330950               // Integer '--' '}'
     && lk != 1330951               // Complex '--' '}'
     && lk != 1330952               // Real '--' '}'
     && lk != 1333682               // '[' ']' '}'
     && lk != 1337549               // '{' '}' '}'
     && lk != 1346819               // Identifier '++' '~'
     && lk != 1346820               // Character '++' '~'
     && lk != 1346821               // String '++' '~'
     && lk != 1346822               // Integer '++' '~'
     && lk != 1346823               // Complex '++' '~'
     && lk != 1346824               // Real '++' '~'
     && lk != 1347331               // Identifier '--' '~'
     && lk != 1347332               // Character '--' '~'
     && lk != 1347333               // String '--' '~'
     && lk != 1347334               // Integer '--' '~'
     && lk != 1347335               // Complex '--' '~'
     && lk != 1347336               // Real '--' '~'
     && lk != 1350066               // '[' ']' '~'
     && lk != 1353933)              // '{' '}' '~'
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
    case 1117443:                   // Identifier '++' 'import'
    case 1117444:                   // Character '++' 'import'
    case 1117445:                   // String '++' 'import'
    case 1117446:                   // Integer '++' 'import'
    case 1117447:                   // Complex '++' 'import'
    case 1117448:                   // Real '++' 'import'
    case 1133827:                   // Identifier '++' 'include'
    case 1133828:                   // Character '++' 'include'
    case 1133829:                   // String '++' 'include'
    case 1133830:                   // Integer '++' 'include'
    case 1133831:                   // Complex '++' 'include'
    case 1133832:                   // Real '++' 'include'
    case 1150211:                   // Identifier '++' 'local'
    case 1150212:                   // Character '++' 'local'
    case 1150213:                   // String '++' 'local'
    case 1150214:                   // Integer '++' 'local'
    case 1150215:                   // Complex '++' 'local'
    case 1150216:                   // Real '++' 'local'
    case 1166595:                   // Identifier '++' 'return'
    case 1166596:                   // Character '++' 'return'
    case 1166597:                   // String '++' 'return'
    case 1166598:                   // Integer '++' 'return'
    case 1166599:                   // Complex '++' 'return'
    case 1166600:                   // Real '++' 'return'
    case 1182979:                   // Identifier '++' 'switch'
    case 1182980:                   // Character '++' 'switch'
    case 1182981:                   // String '++' 'switch'
    case 1182982:                   // Integer '++' 'switch'
    case 1182983:                   // Complex '++' 'switch'
    case 1182984:                   // Real '++' 'switch'
    case 1199363:                   // Identifier '++' 'test'
    case 1199364:                   // Character '++' 'test'
    case 1199365:                   // String '++' 'test'
    case 1199366:                   // Integer '++' 'test'
    case 1199367:                   // Complex '++' 'test'
    case 1199368:                   // Real '++' 'test'
    case 1215747:                   // Identifier '++' 'throw'
    case 1215748:                   // Character '++' 'throw'
    case 1215749:                   // String '++' 'throw'
    case 1215750:                   // Integer '++' 'throw'
    case 1215751:                   // Complex '++' 'throw'
    case 1215752:                   // Real '++' 'throw'
    case 1232131:                   // Identifier '++' 'try'
    case 1232132:                   // Character '++' 'try'
    case 1232133:                   // String '++' 'try'
    case 1232134:                   // Integer '++' 'try'
    case 1232135:                   // Complex '++' 'try'
    case 1232136:                   // Real '++' 'try'
    case 1248515:                   // Identifier '++' 'while'
    case 1248516:                   // Character '++' 'while'
    case 1248517:                   // String '++' 'while'
    case 1248518:                   // Integer '++' 'while'
    case 1248519:                   // Complex '++' 'while'
    case 1248520:                   // Real '++' 'while'
    case 1281283:                   // Identifier '++' '|'
    case 1281284:                   // Character '++' '|'
    case 1281285:                   // String '++' '|'
    case 1281286:                   // Integer '++' '|'
    case 1281287:                   // Complex '++' '|'
    case 1281288:                   // Real '++' '|'
    case 1297667:                   // Identifier '++' '|='
    case 1297668:                   // Character '++' '|='
    case 1297669:                   // String '++' '|='
    case 1297670:                   // Integer '++' '|='
    case 1297671:                   // Complex '++' '|='
    case 1297672:                   // Real '++' '|='
    case 1314051:                   // Identifier '++' '||'
    case 1314052:                   // Character '++' '||'
    case 1314053:                   // String '++' '||'
    case 1314054:                   // Integer '++' '||'
    case 1314055:                   // Complex '++' '||'
    case 1314056:                   // Real '++' '||'
    case 1330435:                   // Identifier '++' '}'
    case 1330436:                   // Character '++' '}'
    case 1330437:                   // String '++' '}'
    case 1330438:                   // Integer '++' '}'
    case 1330439:                   // Complex '++' '}'
    case 1330440:                   // Real '++' '}'
    case 1346819:                   // Identifier '++' '~'
    case 1346820:                   // Character '++' '~'
    case 1346821:                   // String '++' '~'
    case 1346822:                   // Integer '++' '~'
    case 1346823:                   // Complex '++' '~'
    case 1346824:                   // Real '++' '~'
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
    case 1117955:                   // Identifier '--' 'import'
    case 1117956:                   // Character '--' 'import'
    case 1117957:                   // String '--' 'import'
    case 1117958:                   // Integer '--' 'import'
    case 1117959:                   // Complex '--' 'import'
    case 1117960:                   // Real '--' 'import'
    case 1134339:                   // Identifier '--' 'include'
    case 1134340:                   // Character '--' 'include'
    case 1134341:                   // String '--' 'include'
    case 1134342:                   // Integer '--' 'include'
    case 1134343:                   // Complex '--' 'include'
    case 1134344:                   // Real '--' 'include'
    case 1150723:                   // Identifier '--' 'local'
    case 1150724:                   // Character '--' 'local'
    case 1150725:                   // String '--' 'local'
    case 1150726:                   // Integer '--' 'local'
    case 1150727:                   // Complex '--' 'local'
    case 1150728:                   // Real '--' 'local'
    case 1167107:                   // Identifier '--' 'return'
    case 1167108:                   // Character '--' 'return'
    case 1167109:                   // String '--' 'return'
    case 1167110:                   // Integer '--' 'return'
    case 1167111:                   // Complex '--' 'return'
    case 1167112:                   // Real '--' 'return'
    case 1183491:                   // Identifier '--' 'switch'
    case 1183492:                   // Character '--' 'switch'
    case 1183493:                   // String '--' 'switch'
    case 1183494:                   // Integer '--' 'switch'
    case 1183495:                   // Complex '--' 'switch'
    case 1183496:                   // Real '--' 'switch'
    case 1199875:                   // Identifier '--' 'test'
    case 1199876:                   // Character '--' 'test'
    case 1199877:                   // String '--' 'test'
    case 1199878:                   // Integer '--' 'test'
    case 1199879:                   // Complex '--' 'test'
    case 1199880:                   // Real '--' 'test'
    case 1216259:                   // Identifier '--' 'throw'
    case 1216260:                   // Character '--' 'throw'
    case 1216261:                   // String '--' 'throw'
    case 1216262:                   // Integer '--' 'throw'
    case 1216263:                   // Complex '--' 'throw'
    case 1216264:                   // Real '--' 'throw'
    case 1232643:                   // Identifier '--' 'try'
    case 1232644:                   // Character '--' 'try'
    case 1232645:                   // String '--' 'try'
    case 1232646:                   // Integer '--' 'try'
    case 1232647:                   // Complex '--' 'try'
    case 1232648:                   // Real '--' 'try'
    case 1249027:                   // Identifier '--' 'while'
    case 1249028:                   // Character '--' 'while'
    case 1249029:                   // String '--' 'while'
    case 1249030:                   // Integer '--' 'while'
    case 1249031:                   // Complex '--' 'while'
    case 1249032:                   // Real '--' 'while'
    case 1281795:                   // Identifier '--' '|'
    case 1281796:                   // Character '--' '|'
    case 1281797:                   // String '--' '|'
    case 1281798:                   // Integer '--' '|'
    case 1281799:                   // Complex '--' '|'
    case 1281800:                   // Real '--' '|'
    case 1298179:                   // Identifier '--' '|='
    case 1298180:                   // Character '--' '|='
    case 1298181:                   // String '--' '|='
    case 1298182:                   // Integer '--' '|='
    case 1298183:                   // Complex '--' '|='
    case 1298184:                   // Real '--' '|='
    case 1314563:                   // Identifier '--' '||'
    case 1314564:                   // Character '--' '||'
    case 1314565:                   // String '--' '||'
    case 1314566:                   // Integer '--' '||'
    case 1314567:                   // Complex '--' '||'
    case 1314568:                   // Real '--' '||'
    case 1330947:                   // Identifier '--' '}'
    case 1330948:                   // Character '--' '}'
    case 1330949:                   // String '--' '}'
    case 1330950:                   // Integer '--' '}'
    case 1330951:                   // Complex '--' '}'
    case 1330952:                   // Real '--' '}'
    case 1347331:                   // Identifier '--' '~'
    case 1347332:                   // Character '--' '~'
    case 1347333:                   // String '--' '~'
    case 1347334:                   // Integer '--' '~'
    case 1347335:                   // Complex '--' '~'
    case 1347336:                   // Real '--' '~'
      try_Primary();
      lookahead1W(6);               // WhiteSpace^token | '--'
      consumeT(30);                 // '--'
      break;
    case 26:                        // '++'
      consumeT(26);                 // '++'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 30:                        // '--'
      consumeT(30);                 // '--'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 25:                        // '+'
      consumeT(25);                 // '+'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 29:                        // '-'
      consumeT(29);                 // '-'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 82:                        // '~'
      consumeT(82);                 // '~'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 12:                        // '!'
      consumeT(12);                 // '!'
      lookahead1W(22);              // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
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
    case 76:                        // 'while'
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
    case 72:                        // 'switch'
      parse_Switch();
      break;
    case 75:                        // 'try'
      parse_Try();
      break;
    case 73:                        // 'test'
      parse_Test();
      break;
    case -11:
    case 9859:                      // Identifier '{'
      parse_NamespaceDeclaration();
      break;
    case 71:                        // 'return'
      parse_Return();
      break;
    case 68:                        // 'import'
      parse_Import();
      break;
    case 69:                        // 'include'
      parse_Include();
      break;
    case 70:                        // 'local'
      parse_Local();
      break;
    case 74:                        // 'throw'
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
          lk = -19;
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
    case 76:                        // 'while'
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
    case 72:                        // 'switch'
      try_Switch();
      break;
    case 75:                        // 'try'
      try_Try();
      break;
    case 73:                        // 'test'
      try_Test();
      break;
    case -11:
    case 9859:                      // Identifier '{'
      try_NamespaceDeclaration();
      break;
    case 71:                        // 'return'
      try_Return();
      break;
    case 68:                        // 'import'
      try_Import();
      break;
    case 69:                        // 'include'
      try_Include();
      break;
    case 70:                        // 'local'
      try_Local();
      break;
    case 74:                        // 'throw'
      try_Throw();
      break;
    case 37:                        // ';'
      try_EmptyStatement();
      break;
    case -19:
      break;
    default:
      try_FunctionDeclaration();
    }
  }

  function parse_Do()
  {
    eventHandler.startNonterminal("Do", e0);
    consume(59);                    // 'do'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consume(76);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(59);                   // 'do'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(13);                // WhiteSpace^token | 'while'
    consumeT(76);                   // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(76);                    // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(76);                   // 'while'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    eventHandler.startNonterminal("For", e0);
    consume(63);                    // 'for'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("For", e0);
  }

  function try_For()
  {
    consumeT(63);                   // 'for'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_ForEach()
  {
    eventHandler.startNonterminal("ForEach", e0);
    consume(64);                    // 'foreach'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consume(37);                    // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("ForEach", e0);
  }

  function try_ForEach()
  {
    consumeT(64);                   // 'foreach'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(9);                 // WhiteSpace^token | ';'
    consumeT(37);                   // ';'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(46);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 9916:                    // 'else' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(41);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
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
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10556:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8636:                    // 'else' 'if'
      case 9276:                    // 'else' 'switch'
      case 9404:                    // 'else' 'test'
      case 9788:                    // 'else' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8764:                    // 'else' 'import'
      case 8892:                    // 'else' 'include'
      case 9020:                    // 'else' 'local'
      case 9148:                    // 'else' 'return'
      case 9532:                    // 'else' 'throw'
      case 9660:                    // 'else' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 77                    // '{'
     && lk != 81                    // '}'
     && lk != 82)                   // '~'
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
    consumeT(67);                   // 'if'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 60:                        // 'else'
      lookahead2W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 444:                     // 'else' Identifier
        lookahead3W(46);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 6460:                    // 'else' '['
        lookahead3W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 9916:                    // 'else' '{'
        lookahead3W(33);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
        break;
      case 1212:                    // 'else' Comment
      case 4796:                    // 'else' ';'
      case 6972:                    // 'else' 'break'
      case 7356:                    // 'else' 'continue'
        lookahead3W(41);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
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
        lookahead3W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1596:                    // 'else' '!'
      case 3260:                    // 'else' '+'
      case 3388:                    // 'else' '++'
      case 3772:                    // 'else' '-'
      case 3900:                    // 'else' '--'
      case 10556:                   // 'else' '~'
        lookahead3W(22);            // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 8124:                    // 'else' 'for'
      case 8252:                    // 'else' 'foreach'
      case 8636:                    // 'else' 'if'
      case 9276:                    // 'else' 'switch'
      case 9404:                    // 'else' 'test'
      case 9788:                    // 'else' 'while'
        lookahead3W(3);             // WhiteSpace^token | '('
        break;
      case 2620:                    // 'else' '('
      case 7612:                    // 'else' 'do'
      case 8764:                    // 'else' 'import'
      case 8892:                    // 'else' 'include'
      case 9020:                    // 'else' 'local'
      case 9148:                    // 'else' 'return'
      case 9532:                    // 'else' 'throw'
      case 9660:                    // 'else' 'try'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 77                    // '{'
     && lk != 81                    // '}'
     && lk != 82)                   // '~'
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Else", e0);
  }

  function try_Else()
  {
    consumeT(60);                   // 'else'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(72);                    // 'switch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consume(77);                    // '{'
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
    consume(81);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(72);                   // 'switch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(14);                // WhiteSpace^token | '{'
    consumeT(77);                   // '{'
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
    consumeT(81);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(55);                    // 'case'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consume(35);                    // ':'
    for (;;)
    {
      lookahead1W(36);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 81)                 // '}'
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ':'
    consumeT(35);                   // ':'
    for (;;)
    {
      lookahead1W(36);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'case' | 'continue' | 'default' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '}' | '~'
      if (l1 == 55                  // 'case'
       || l1 == 58                  // 'default'
       || l1 == 81)                 // '}'
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
      lookahead1W(29);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 81)                 // '}'
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
      lookahead1W(29);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '}' | '~'
      if (l1 == 81)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Try()
  {
    eventHandler.startNonterminal("Try", e0);
    consume(75);                    // 'try'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'import'
     || lk == 1133112               // 'catch' '(' 'include'
     || lk == 1149496               // 'catch' '(' 'local'
     || lk == 1165880               // 'catch' '(' 'return'
     || lk == 1182264               // 'catch' '(' 'switch'
     || lk == 1198648               // 'catch' '(' 'test'
     || lk == 1215032               // 'catch' '(' 'throw'
     || lk == 1231416               // 'catch' '(' 'try'
     || lk == 1247800               // 'catch' '(' 'while'
     || lk == 1264184               // 'catch' '(' '{'
     || lk == 1346104)              // 'catch' '(' '~'
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
    consumeT(75);                   // 'try'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'import'
     || lk == 1133112               // 'catch' '(' 'include'
     || lk == 1149496               // 'catch' '(' 'local'
     || lk == 1165880               // 'catch' '(' 'return'
     || lk == 1182264               // 'catch' '(' 'switch'
     || lk == 1198648               // 'catch' '(' 'test'
     || lk == 1215032               // 'catch' '(' 'throw'
     || lk == 1231416               // 'catch' '(' 'try'
     || lk == 1247800               // 'catch' '(' 'while'
     || lk == 1264184               // 'catch' '(' '{'
     || lk == 1346104)              // 'catch' '(' '~'
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
    consume(73);                    // 'test'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consume(20);                    // '('
    lookahead1W(27);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 77                    // '{'
     && lk != 82                    // '~'
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
     && lk != 8741                  // ';' 'import'
     && lk != 8869                  // ';' 'include'
     && lk != 8997                  // ';' 'local'
     && lk != 9125                  // ';' 'return'
     && lk != 9253                  // ';' 'switch'
     && lk != 9381                  // ';' 'test'
     && lk != 9509                  // ';' 'throw'
     && lk != 9637                  // ';' 'try'
     && lk != 9765                  // ';' 'while'
     && lk != 9893                  // ';' '{'
     && lk != 10533)                // ';' '~'
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
     || lk == 65                    // 'i32'
     || lk == 66                    // 'i64'
     || lk == 67                    // 'if'
     || lk == 68                    // 'import'
     || lk == 69                    // 'include'
     || lk == 70                    // 'local'
     || lk == 71                    // 'return'
     || lk == 72                    // 'switch'
     || lk == 73                    // 'test'
     || lk == 74                    // 'throw'
     || lk == 75                    // 'try'
     || lk == 76                    // 'while'
     || lk == 77                    // '{'
     || lk == 82)                   // '~'
    {
      whitespace();
      parse_Expression();
    }
    lookahead1W(16);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consume(37);                  // ';'
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(24);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(27);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
       || lk == 1067685             // ';' ')' 'i32'
       || lk == 1084069             // ';' ')' 'i64'
       || lk == 1100453             // ';' ')' 'if'
       || lk == 1116837             // ';' ')' 'import'
       || lk == 1133221             // ';' ')' 'include'
       || lk == 1149605             // ';' ')' 'local'
       || lk == 1165989             // ';' ')' 'return'
       || lk == 1182373             // ';' ')' 'switch'
       || lk == 1198757             // ';' ')' 'test'
       || lk == 1215141             // ';' ')' 'throw'
       || lk == 1231525             // ';' ')' 'try'
       || lk == 1247909             // ';' ')' 'while'
       || lk == 1264293             // ';' ')' '{'
       || lk == 1346213)            // ';' ')' '~'
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
       && lk != 8357                // ';' 'i32'
       && lk != 8485                // ';' 'i64'
       && lk != 8613                // ';' 'if'
       && lk != 8741                // ';' 'import'
       && lk != 8869                // ';' 'include'
       && lk != 8997                // ';' 'local'
       && lk != 9125                // ';' 'return'
       && lk != 9253                // ';' 'switch'
       && lk != 9381                // ';' 'test'
       && lk != 9509                // ';' 'throw'
       && lk != 9637                // ';' 'try'
       && lk != 9765                // ';' 'while'
       && lk != 9893                // ';' '{'
       && lk != 10533)              // ';' '~'
      {
        whitespace();
        parse_Expression();
      }
      lookahead1W(16);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consume(37);                // ';'
        lookahead1W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          whitespace();
          parse_Expression();
        }
      }
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'import'
     || lk == 1133112               // 'catch' '(' 'include'
     || lk == 1149496               // 'catch' '(' 'local'
     || lk == 1165880               // 'catch' '(' 'return'
     || lk == 1182264               // 'catch' '(' 'switch'
     || lk == 1198648               // 'catch' '(' 'test'
     || lk == 1215032               // 'catch' '(' 'throw'
     || lk == 1231416               // 'catch' '(' 'try'
     || lk == 1247800               // 'catch' '(' 'while'
     || lk == 1264184               // 'catch' '(' '{'
     || lk == 1346104)              // 'catch' '(' '~'
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
    consumeT(73);                   // 'test'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(27);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 2725:                    // ';' ')'
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        break;
      case 4773:                    // ';' ';'
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 77                    // '{'
     && lk != 82                    // '~'
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
     && lk != 8741                  // ';' 'import'
     && lk != 8869                  // ';' 'include'
     && lk != 8997                  // ';' 'local'
     && lk != 9125                  // ';' 'return'
     && lk != 9253                  // ';' 'switch'
     && lk != 9381                  // ';' 'test'
     && lk != 9509                  // ';' 'throw'
     && lk != 9637                  // ';' 'try'
     && lk != 9765                  // ';' 'while'
     && lk != 9893                  // ';' '{'
     && lk != 10533)                // ';' '~'
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
     || lk == 65                    // 'i32'
     || lk == 66                    // 'i64'
     || lk == 67                    // 'if'
     || lk == 68                    // 'import'
     || lk == 69                    // 'include'
     || lk == 70                    // 'local'
     || lk == 71                    // 'return'
     || lk == 72                    // 'switch'
     || lk == 73                    // 'test'
     || lk == 74                    // 'throw'
     || lk == 75                    // 'try'
     || lk == 76                    // 'while'
     || lk == 77                    // '{'
     || lk == 82)                   // '~'
    {
      try_Expression();
    }
    lookahead1W(16);                // WhiteSpace^token | ')' | ';'
    if (l1 == 37)                   // ';'
    {
      consumeT(37);                 // ';'
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (l1)
      {
      case 37:                      // ';'
        lookahead2W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        switch (lk)
        {
        case 2725:                  // ';' ')'
          lookahead3W(24);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
          break;
        case 4773:                  // ';' ';'
          lookahead3W(27);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
       || lk == 1067685             // ';' ')' 'i32'
       || lk == 1084069             // ';' ')' 'i64'
       || lk == 1100453             // ';' ')' 'if'
       || lk == 1116837             // ';' ')' 'import'
       || lk == 1133221             // ';' ')' 'include'
       || lk == 1149605             // ';' ')' 'local'
       || lk == 1165989             // ';' ')' 'return'
       || lk == 1182373             // ';' ')' 'switch'
       || lk == 1198757             // ';' ')' 'test'
       || lk == 1215141             // ';' ')' 'throw'
       || lk == 1231525             // ';' ')' 'try'
       || lk == 1247909             // ';' ')' 'while'
       || lk == 1264293             // ';' ')' '{'
       || lk == 1346213)            // ';' ')' '~'
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
       && lk != 8357                // ';' 'i32'
       && lk != 8485                // ';' 'i64'
       && lk != 8613                // ';' 'if'
       && lk != 8741                // ';' 'import'
       && lk != 8869                // ';' 'include'
       && lk != 8997                // ';' 'local'
       && lk != 9125                // ';' 'return'
       && lk != 9253                // ';' 'switch'
       && lk != 9381                // ';' 'test'
       && lk != 9509                // ';' 'throw'
       && lk != 9637                // ';' 'try'
       && lk != 9765                // ';' 'while'
       && lk != 9893                // ';' '{'
       && lk != 10533)              // ';' '~'
      {
        try_Expression();
      }
      lookahead1W(16);              // WhiteSpace^token | ')' | ';'
      if (l1 == 37)                 // ';'
      {
        consumeT(37);               // ';'
        lookahead1W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Expression();
        }
      }
    }
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(41);                // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | ',' | '-' | '--' | ':' | ';' |
                                    // '[' | ']' | 'break' | 'case' | 'catch' | 'continue' | 'default' | 'do' | 'else' |
                                    // 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' | 'import' | 'include' |
                                    // 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' | 'while' | '{' | '}' |
                                    // '~'
    switch (l1)
    {
    case 56:                        // 'catch'
      lookahead2W(3);               // WhiteSpace^token | '('
      switch (lk)
      {
      case 2616:                    // 'catch' '('
        lookahead3W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
     || lk == 1116728               // 'catch' '(' 'import'
     || lk == 1133112               // 'catch' '(' 'include'
     || lk == 1149496               // 'catch' '(' 'local'
     || lk == 1165880               // 'catch' '(' 'return'
     || lk == 1182264               // 'catch' '(' 'switch'
     || lk == 1198648               // 'catch' '(' 'test'
     || lk == 1215032               // 'catch' '(' 'throw'
     || lk == 1231416               // 'catch' '(' 'try'
     || lk == 1247800               // 'catch' '(' 'while'
     || lk == 1264184               // 'catch' '(' '{'
     || lk == 1346104)              // 'catch' '(' '~'
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Catch", e0);
  }

  function try_Catch()
  {
    consumeT(56);                   // 'catch'
    lookahead1W(3);                 // WhiteSpace^token | '('
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consumeT(21);                   // ')'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
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
        lookahead1W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Arguments();
        }
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
          lookahead1W(27);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
            lookahead1W(27);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
              lookahead1W(27);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
                lookahead1W(27);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(21);                  // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consume(42);                  // '='
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      case 4099:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
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
        lookahead1W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        if (l1 != 21)               // ')'
        {
          try_Arguments();
        }
        consumeT(21);               // ')'
        lookahead1W(10);            // WhiteSpace^token | '='
        consumeT(42);               // '='
        lookahead1W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
          lookahead1W(27);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
            lookahead1W(27);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
              lookahead1W(27);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
                lookahead1W(27);    // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      if (l1 != 21)                 // ')'
      {
        try_Arguments();
      }
      consumeT(21);                 // ')'
      lookahead1W(10);              // WhiteSpace^token | '='
      consumeT(42);                 // '='
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
    consume(71);                    // 'return'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(71);                   // 'return'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Import()
  {
    eventHandler.startNonterminal("Import", e0);
    consume(68);                    // 'import'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Import", e0);
  }

  function try_Import()
  {
    consumeT(68);                   // 'import'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Include()
  {
    eventHandler.startNonterminal("Include", e0);
    consume(69);                    // 'include'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Include", e0);
  }

  function try_Include()
  {
    consumeT(69);                   // 'include'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Local()
  {
    eventHandler.startNonterminal("Local", e0);
    consume(70);                    // 'local'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Local", e0);
  }

  function try_Local()
  {
    consumeT(70);                   // 'local'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
  }

  function parse_Throw()
  {
    eventHandler.startNonterminal("Throw", e0);
    consume(74);                    // 'throw'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Throw", e0);
  }

  function try_Throw()
  {
    consumeT(74);                   // 'throw'
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
      lookahead2W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
     || lk == 328130                // 'i64' Identifier '('
     || lk == 524733                // 'f32' Identifier '.'
     || lk == 524734                // 'f64' Identifier '.'
     || lk == 524737                // 'i32' Identifier '.'
     || lk == 524738)               // 'i64' Identifier '.'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 77                    // '{'
     && lk != 82)                   // '~'
    {
      whitespace();
      parse_Type();
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 61:                      // 'f32'
      case 62:                      // 'f64'
      case 65:                      // 'i32'
      case 66:                      // 'i64'
        lookahead2W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 445:                   // 'f32' Identifier
        case 446:                   // 'f64' Identifier
        case 449:                   // 'i32' Identifier
        case 450:                   // 'i64' Identifier
          lookahead3W(38);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
       || lk == 328130              // 'i64' Identifier '('
       || lk == 524733              // 'f32' Identifier '.'
       || lk == 524734              // 'f64' Identifier '.'
       || lk == 524737              // 'i32' Identifier '.'
       || lk == 524738)             // 'i64' Identifier '.'
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
          memoize(12, e0, lk);
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
       && lk != 68                  // 'import'
       && lk != 69                  // 'include'
       && lk != 70                  // 'local'
       && lk != 71                  // 'return'
       && lk != 72                  // 'switch'
       && lk != 73                  // 'test'
       && lk != 74                  // 'throw'
       && lk != 75                  // 'try'
       && lk != 76                  // 'while'
       && lk != 77                  // '{'
       && lk != 82                  // '~'
       && lk != 459197              // 'f32' Identifier ','
       && lk != 459198              // 'f64' Identifier ','
       && lk != 459201              // 'i32' Identifier ','
       && lk != 459202)             // 'i64' Identifier ','
      {
        whitespace();
        parse_Type();
      }
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
    case 61:                        // 'f32'
    case 62:                        // 'f64'
    case 65:                        // 'i32'
    case 66:                        // 'i64'
      lookahead2W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 445:                     // 'f32' Identifier
      case 446:                     // 'f64' Identifier
      case 449:                     // 'i32' Identifier
      case 450:                     // 'i64' Identifier
        lookahead3W(38);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
     || lk == 328130                // 'i64' Identifier '('
     || lk == 524733                // 'f32' Identifier '.'
     || lk == 524734                // 'f64' Identifier '.'
     || lk == 524737                // 'i32' Identifier '.'
     || lk == 524738)               // 'i64' Identifier '.'
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
     && lk != 68                    // 'import'
     && lk != 69                    // 'include'
     && lk != 70                    // 'local'
     && lk != 71                    // 'return'
     && lk != 72                    // 'switch'
     && lk != 73                    // 'test'
     && lk != 74                    // 'throw'
     && lk != 75                    // 'try'
     && lk != 76                    // 'while'
     && lk != 77                    // '{'
     && lk != 82)                   // '~'
    {
      try_Type();
    }
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    try_Expression();
    for (;;)
    {
      lookahead1W(20);              // WhiteSpace^token | ')' | ',' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      switch (l1)
      {
      case 61:                      // 'f32'
      case 62:                      // 'f64'
      case 65:                      // 'i32'
      case 66:                      // 'i64'
        lookahead2W(24);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 445:                   // 'f32' Identifier
        case 446:                   // 'f64' Identifier
        case 449:                   // 'i32' Identifier
        case 450:                   // 'i64' Identifier
          lookahead3W(38);          // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
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
       || lk == 328130              // 'i64' Identifier '('
       || lk == 524733              // 'f32' Identifier '.'
       || lk == 524734              // 'f64' Identifier '.'
       || lk == 524737              // 'i32' Identifier '.'
       || lk == 524738)             // 'i64' Identifier '.'
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
            try_Type();
            memoize(12, e0A, -1);
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(12, e0A, -2);
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
       && lk != 68                  // 'import'
       && lk != 69                  // 'include'
       && lk != 70                  // 'local'
       && lk != 71                  // 'return'
       && lk != 72                  // 'switch'
       && lk != 73                  // 'test'
       && lk != 74                  // 'throw'
       && lk != 75                  // 'try'
       && lk != 76                  // 'while'
       && lk != 77                  // '{'
       && lk != 82                  // '~'
       && lk != 459197              // 'f32' Identifier ','
       && lk != 459198              // 'f64' Identifier ','
       && lk != 459201              // 'i32' Identifier ','
       && lk != 459202)             // 'i64' Identifier ','
      {
        try_Type();
      }
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
      lookahead2W(46);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
     || lk == 1116675               // Identifier '(' 'import'
     || lk == 1133059               // Identifier '(' 'include'
     || lk == 1149443               // Identifier '(' 'local'
     || lk == 1165827               // Identifier '(' 'return'
     || lk == 1182211               // Identifier '(' 'switch'
     || lk == 1198595               // Identifier '(' 'test'
     || lk == 1214979               // Identifier '(' 'throw'
     || lk == 1231363               // Identifier '(' 'try'
     || lk == 1247747               // Identifier '(' 'while'
     || lk == 1264131               // Identifier '(' '{'
     || lk == 1346051)              // Identifier '(' '~'
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
          lookahead1W(27);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
        memoize(13, e0, lk);
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
        lookahead1W(46);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead1W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(40);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(32);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(28);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(45);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 9906:                // '[' '{'
            lookahead3W(33);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
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
          case 10546:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8626:                // '[' 'if'
          case 9266:                // '[' 'switch'
          case 9394:                // '[' 'test'
          case 9778:                // '[' 'while'
            lookahead3W(3);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8370:                // '[' 'i32'
          case 8498:                // '[' 'i64'
          case 8754:                // '[' 'import'
          case 8882:                // '[' 'include'
          case 9010:                // '[' 'local'
          case 9138:                // '[' 'return'
          case 9522:                // '[' 'throw'
          case 9650:                // '[' 'try'
            lookahead3W(24);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
         && lk != 68                // 'import'
         && lk != 69                // 'include'
         && lk != 70                // 'local'
         && lk != 71                // 'return'
         && lk != 72                // 'switch'
         && lk != 73                // 'test'
         && lk != 74                // 'throw'
         && lk != 75                // 'try'
         && lk != 76                // 'while'
         && lk != 77                // '{'
         && lk != 78                // '|'
         && lk != 79                // '|='
         && lk != 80                // '||'
         && lk != 81                // '}'
         && lk != 82                // '~'
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
         && lk != 1118898           // '[' ';' 'import'
         && lk != 1121970           // '[' 'f32' 'import'
         && lk != 1122098           // '[' 'f64' 'import'
         && lk != 1122482           // '[' 'i32' 'import'
         && lk != 1122610           // '[' 'i64' 'import'
         && lk != 1135282           // '[' ';' 'include'
         && lk != 1138354           // '[' 'f32' 'include'
         && lk != 1138482           // '[' 'f64' 'include'
         && lk != 1138866           // '[' 'i32' 'include'
         && lk != 1138994           // '[' 'i64' 'include'
         && lk != 1151666           // '[' ';' 'local'
         && lk != 1154738           // '[' 'f32' 'local'
         && lk != 1154866           // '[' 'f64' 'local'
         && lk != 1155250           // '[' 'i32' 'local'
         && lk != 1155378           // '[' 'i64' 'local'
         && lk != 1168050           // '[' ';' 'return'
         && lk != 1171122           // '[' 'f32' 'return'
         && lk != 1171250           // '[' 'f64' 'return'
         && lk != 1171634           // '[' 'i32' 'return'
         && lk != 1171762           // '[' 'i64' 'return'
         && lk != 1184434           // '[' ';' 'switch'
         && lk != 1187506           // '[' 'f32' 'switch'
         && lk != 1187634           // '[' 'f64' 'switch'
         && lk != 1188018           // '[' 'i32' 'switch'
         && lk != 1188146           // '[' 'i64' 'switch'
         && lk != 1200818           // '[' ';' 'test'
         && lk != 1203890           // '[' 'f32' 'test'
         && lk != 1204018           // '[' 'f64' 'test'
         && lk != 1204402           // '[' 'i32' 'test'
         && lk != 1204530           // '[' 'i64' 'test'
         && lk != 1217202           // '[' ';' 'throw'
         && lk != 1220274           // '[' 'f32' 'throw'
         && lk != 1220402           // '[' 'f64' 'throw'
         && lk != 1220786           // '[' 'i32' 'throw'
         && lk != 1220914           // '[' 'i64' 'throw'
         && lk != 1233586           // '[' ';' 'try'
         && lk != 1236658           // '[' 'f32' 'try'
         && lk != 1236786           // '[' 'f64' 'try'
         && lk != 1237170           // '[' 'i32' 'try'
         && lk != 1237298           // '[' 'i64' 'try'
         && lk != 1249970           // '[' ';' 'while'
         && lk != 1253042           // '[' 'f32' 'while'
         && lk != 1253170           // '[' 'f64' 'while'
         && lk != 1253554           // '[' 'i32' 'while'
         && lk != 1253682           // '[' 'i64' 'while'
         && lk != 1266354           // '[' ';' '{'
         && lk != 1269426           // '[' 'f32' '{'
         && lk != 1269554           // '[' 'f64' '{'
         && lk != 1269938           // '[' 'i32' '{'
         && lk != 1270066           // '[' 'i64' '{'
         && lk != 1348274           // '[' ';' '~'
         && lk != 1351346           // '[' 'f32' '~'
         && lk != 1351474           // '[' 'f64' '~'
         && lk != 1351858           // '[' 'i32' '~'
         && lk != 1351986)          // '[' 'i64' '~'
        {
          lk = memoized(14, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(50);         // '['
              lookahead1W(28);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
            memoize(14, e0, lk);
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
         || lk == 68                // 'import'
         || lk == 69                // 'include'
         || lk == 70                // 'local'
         || lk == 71                // 'return'
         || lk == 72                // 'switch'
         || lk == 73                // 'test'
         || lk == 74                // 'throw'
         || lk == 75                // 'try'
         || lk == 76                // 'while'
         || lk == 77                // '{'
         || lk == 78                // '|'
         || lk == 79                // '|='
         || lk == 80                // '||'
         || lk == 81                // '}'
         || lk == 82                // '~'
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
         || lk == 1118898           // '[' ';' 'import'
         || lk == 1135282           // '[' ';' 'include'
         || lk == 1151666           // '[' ';' 'local'
         || lk == 1168050           // '[' ';' 'return'
         || lk == 1184434           // '[' ';' 'switch'
         || lk == 1200818           // '[' ';' 'test'
         || lk == 1217202           // '[' ';' 'throw'
         || lk == 1233586           // '[' ';' 'try'
         || lk == 1249970           // '[' ';' 'while'
         || lk == 1266354           // '[' ';' '{'
         || lk == 1348274)          // '[' ';' '~'
        {
          break;
        }
        consume(50);                // '['
        lookahead1W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
      lookahead2W(46);              // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 2563:                    // Identifier '('
        lookahead3W(27);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
     || lk == 1116675               // Identifier '(' 'import'
     || lk == 1133059               // Identifier '(' 'include'
     || lk == 1149443               // Identifier '(' 'local'
     || lk == 1165827               // Identifier '(' 'return'
     || lk == 1182211               // Identifier '(' 'switch'
     || lk == 1198595               // Identifier '(' 'test'
     || lk == 1214979               // Identifier '(' 'throw'
     || lk == 1231363               // Identifier '(' 'try'
     || lk == 1247747               // Identifier '(' 'while'
     || lk == 1264131               // Identifier '(' '{'
     || lk == 1346051)              // Identifier '(' '~'
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
          lookahead1W(27);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
          if (l1 != 21)             // ')'
          {
            try_Arguments();
          }
          consumeT(21);             // ')'
          memoize(13, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(13, e0A, -2);
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
      lookahead1W(27);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | ')' | '+' | '++' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
        lookahead1W(46);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' |
                                    // '/=' | ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
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
        lookahead1W(45);            // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 50:                    // '['
          lookahead2W(28);          // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
          switch (lk)
          {
          case 434:                 // '[' Identifier
            lookahead3W(40);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
                                    // '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '.' | '/' | '/=' | ':=' |
                                    // ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' |
                                    // '?=' | '[' | ']' | '^' | '^=' | '{' | '|' | '|=' | '||'
            break;
          case 4786:                // '[' ';'
            lookahead3W(32);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
            break;
          case 6450:                // '[' '['
            lookahead3W(28);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
            break;
          case 6578:                // '[' ']'
            lookahead3W(45);        // END | Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' |
                                    // '*' | '**' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' |
                                    // ':' | ':=' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' |
                                    // '>>=' | '?' | '?=' | '[' | ']' | '^' | '^=' | 'break' | 'case' | 'catch' |
                                    // 'continue' | 'default' | 'do' | 'else' | 'f32' | 'f64' | 'for' | 'foreach' |
                                    // 'i32' | 'i64' | 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' |
                                    // 'test' | 'throw' | 'try' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
            break;
          case 9906:                // '[' '{'
            lookahead3W(33);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
            break;
          case 1202:                // '[' Comment
          case 6962:                // '[' 'break'
          case 7346:                // '[' 'continue'
            lookahead3W(21);        // WhiteSpace^token | ',' | ';' | ']'
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
          case 10546:               // '[' '~'
            lookahead3W(22);        // Identifier | Character | String | Integer | Complex | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 8114:                // '[' 'for'
          case 8242:                // '[' 'foreach'
          case 8626:                // '[' 'if'
          case 9266:                // '[' 'switch'
          case 9394:                // '[' 'test'
          case 9778:                // '[' 'while'
            lookahead3W(3);         // WhiteSpace^token | '('
            break;
          case 2610:                // '[' '('
          case 7602:                // '[' 'do'
          case 7858:                // '[' 'f32'
          case 7986:                // '[' 'f64'
          case 8370:                // '[' 'i32'
          case 8498:                // '[' 'i64'
          case 8754:                // '[' 'import'
          case 8882:                // '[' 'include'
          case 9010:                // '[' 'local'
          case 9138:                // '[' 'return'
          case 9522:                // '[' 'throw'
          case 9650:                // '[' 'try'
            lookahead3W(24);        // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
         && lk != 68                // 'import'
         && lk != 69                // 'include'
         && lk != 70                // 'local'
         && lk != 71                // 'return'
         && lk != 72                // 'switch'
         && lk != 73                // 'test'
         && lk != 74                // 'throw'
         && lk != 75                // 'try'
         && lk != 76                // 'while'
         && lk != 77                // '{'
         && lk != 78                // '|'
         && lk != 79                // '|='
         && lk != 80                // '||'
         && lk != 81                // '}'
         && lk != 82                // '~'
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
         && lk != 1118898           // '[' ';' 'import'
         && lk != 1121970           // '[' 'f32' 'import'
         && lk != 1122098           // '[' 'f64' 'import'
         && lk != 1122482           // '[' 'i32' 'import'
         && lk != 1122610           // '[' 'i64' 'import'
         && lk != 1135282           // '[' ';' 'include'
         && lk != 1138354           // '[' 'f32' 'include'
         && lk != 1138482           // '[' 'f64' 'include'
         && lk != 1138866           // '[' 'i32' 'include'
         && lk != 1138994           // '[' 'i64' 'include'
         && lk != 1151666           // '[' ';' 'local'
         && lk != 1154738           // '[' 'f32' 'local'
         && lk != 1154866           // '[' 'f64' 'local'
         && lk != 1155250           // '[' 'i32' 'local'
         && lk != 1155378           // '[' 'i64' 'local'
         && lk != 1168050           // '[' ';' 'return'
         && lk != 1171122           // '[' 'f32' 'return'
         && lk != 1171250           // '[' 'f64' 'return'
         && lk != 1171634           // '[' 'i32' 'return'
         && lk != 1171762           // '[' 'i64' 'return'
         && lk != 1184434           // '[' ';' 'switch'
         && lk != 1187506           // '[' 'f32' 'switch'
         && lk != 1187634           // '[' 'f64' 'switch'
         && lk != 1188018           // '[' 'i32' 'switch'
         && lk != 1188146           // '[' 'i64' 'switch'
         && lk != 1200818           // '[' ';' 'test'
         && lk != 1203890           // '[' 'f32' 'test'
         && lk != 1204018           // '[' 'f64' 'test'
         && lk != 1204402           // '[' 'i32' 'test'
         && lk != 1204530           // '[' 'i64' 'test'
         && lk != 1217202           // '[' ';' 'throw'
         && lk != 1220274           // '[' 'f32' 'throw'
         && lk != 1220402           // '[' 'f64' 'throw'
         && lk != 1220786           // '[' 'i32' 'throw'
         && lk != 1220914           // '[' 'i64' 'throw'
         && lk != 1233586           // '[' ';' 'try'
         && lk != 1236658           // '[' 'f32' 'try'
         && lk != 1236786           // '[' 'f64' 'try'
         && lk != 1237170           // '[' 'i32' 'try'
         && lk != 1237298           // '[' 'i64' 'try'
         && lk != 1249970           // '[' ';' 'while'
         && lk != 1253042           // '[' 'f32' 'while'
         && lk != 1253170           // '[' 'f64' 'while'
         && lk != 1253554           // '[' 'i32' 'while'
         && lk != 1253682           // '[' 'i64' 'while'
         && lk != 1266354           // '[' ';' '{'
         && lk != 1269426           // '[' 'f32' '{'
         && lk != 1269554           // '[' 'f64' '{'
         && lk != 1269938           // '[' 'i32' '{'
         && lk != 1270066           // '[' 'i64' '{'
         && lk != 1348274           // '[' ';' '~'
         && lk != 1351346           // '[' 'f32' '~'
         && lk != 1351474           // '[' 'f64' '~'
         && lk != 1351858           // '[' 'i32' '~'
         && lk != 1351986)          // '[' 'i64' '~'
        {
          lk = memoized(14, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(50);         // '['
              lookahead1W(28);      // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
              if (l1 != 51)         // ']'
              {
                try_Arguments();
              }
              consumeT(51);         // ']'
              memoize(14, e0B, -1);
              continue;
            }
            catch (p1B)
            {
              b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
              b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
              b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
              b3 = b3B; e3 = e3B; end = e3B; }}}
              memoize(14, e0B, -2);
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
         || lk == 68                // 'import'
         || lk == 69                // 'include'
         || lk == 70                // 'local'
         || lk == 71                // 'return'
         || lk == 72                // 'switch'
         || lk == 73                // 'test'
         || lk == 74                // 'throw'
         || lk == 75                // 'try'
         || lk == 76                // 'while'
         || lk == 77                // '{'
         || lk == 78                // '|'
         || lk == 79                // '|='
         || lk == 80                // '||'
         || lk == 81                // '}'
         || lk == 82                // '~'
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
         || lk == 1118898           // '[' ';' 'import'
         || lk == 1135282           // '[' ';' 'include'
         || lk == 1151666           // '[' ';' 'local'
         || lk == 1168050           // '[' ';' 'return'
         || lk == 1184434           // '[' ';' 'switch'
         || lk == 1200818           // '[' ';' 'test'
         || lk == 1217202           // '[' ';' 'throw'
         || lk == 1233586           // '[' ';' 'try'
         || lk == 1249970           // '[' ';' 'while'
         || lk == 1266354           // '[' ';' '{'
         || lk == 1348274)          // '[' ';' '~'
        {
          break;
        }
        consumeT(50);               // '['
        lookahead1W(28);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
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
    consume(77);                    // '{'
    lookahead1W(33);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
    if (l1 != 28                    // ','
     && l1 != 81)                   // '}'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(81);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(77);                   // '{'
    lookahead1W(33);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '}' | '~'
    if (l1 != 28                    // ','
     && l1 != 81)                   // '}'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      try_Element();
    }
    consumeT(81);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(50);                    // '['
    lookahead1W(28);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(32);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(32);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 610981)               // ';' ';' ';'
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
        memoize(15, e0, lk);
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
     && lk != 8741                  // ';' 'import'
     && lk != 8869                  // ';' 'include'
     && lk != 8997                  // ';' 'local'
     && lk != 9125                  // ';' 'return'
     && lk != 9253                  // ';' 'switch'
     && lk != 9381                  // ';' 'test'
     && lk != 9509                  // ';' 'throw'
     && lk != 9637                  // ';' 'try'
     && lk != 9765                  // ';' 'while'
     && lk != 9893                  // ';' '{'
     && lk != 10533                 // ';' '~'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
      whitespace();
      parse_Row();
    }
    consume(51);                    // ']'
    eventHandler.endNonterminal("Matrix", e0);
  }

  function try_Matrix()
  {
    consumeT(50);                   // '['
    lookahead1W(28);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
    switch (l1)
    {
    case 37:                        // ';'
      lookahead2W(32);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
      switch (lk)
      {
      case 4773:                    // ';' ';'
        lookahead3W(32);            // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | ',' | '-' | '--' | ';' | '[' | ']' |
                                    // 'break' | 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' |
                                    // 'if' | 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' |
                                    // 'try' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 610981)               // ';' ';' ';'
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
          try_Row();
          memoize(15, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(15, e0A, -2);
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
     && lk != 8741                  // ';' 'import'
     && lk != 8869                  // ';' 'include'
     && lk != 8997                  // ';' 'local'
     && lk != 9125                  // ';' 'return'
     && lk != 9253                  // ';' 'switch'
     && lk != 9381                  // ';' 'test'
     && lk != 9509                  // ';' 'throw'
     && lk != 9637                  // ';' 'try'
     && lk != 9765                  // ';' 'while'
     && lk != 9893                  // ';' '{'
     && lk != 10533                 // ';' '~'
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
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
      lookahead2W(39);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
      lookahead2W(39);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '**' |
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
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
      lookahead1W(21);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consume(28);                  // ','
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
      lookahead1W(21);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 28)                 // ','
      {
        break;
      }
      consumeT(28);                 // ','
      lookahead1W(24);              // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
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
    consume(20);                    // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(4);                 // WhiteSpace^token | ')'
    consume(21);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(20);                   // '('
    lookahead1W(24);                // Identifier | Character | String | Integer | Complex | Real | Comment |
                                    // WhiteSpace^token | '!' | '(' | '+' | '++' | '-' | '--' | ';' | '[' | 'break' |
                                    // 'continue' | 'do' | 'f32' | 'f64' | 'for' | 'foreach' | 'i32' | 'i64' | 'if' |
                                    // 'import' | 'include' | 'local' | 'return' | 'switch' | 'test' | 'throw' | 'try' |
                                    // 'while' | '{' | '~'
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
    case 77:                        // '{'
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
    case 77:                        // '{'
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
  for (var i = 0; i < 83; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 274 + s - 1;
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
  /*   0 */ 70, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6,
  /*  36 */ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32,
  /*  64 */ 33, 34, 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44,
  /*  95 */ 7, 33, 45, 46, 47, 48, 49, 50, 7, 51, 52, 7, 53, 54, 55, 56, 57, 58, 7, 59, 60, 61, 62, 7, 63, 64, 65, 7,
  /* 123 */ 66, 67, 68, 69, 33
];

MaiaScript.MAP1 =
[
  /*   0 */ 54, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  27 */ 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  54 */ 90, 122, 216, 154, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185,
  /*  76 */ 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 70, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1,
  /* 102 */ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  /* 136 */ 17, 18, 19, 20, 21, 22, 23, 24, 25, 20, 26, 26, 27, 28, 29, 30, 31, 32, 33, 45, 46, 47, 48, 49, 50, 7, 51,
  /* 163 */ 52, 7, 53, 54, 55, 56, 57, 58, 7, 59, 60, 61, 62, 7, 63, 64, 65, 7, 66, 67, 68, 69, 33, 33, 33, 33, 33, 33,
  /* 191 */ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34,
  /* 218 */ 34, 35, 34, 36, 37, 7, 7, 7, 7, 7, 38, 7, 7, 7, 39, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 41, 42, 43, 44, 7
];

MaiaScript.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 33, 33
];

MaiaScript.INITIAL =
[
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1049, 27, 28,
  /* 29 */ 29, 30, 1055, 32, 33, 34, 35, 36, 37, 38, 39, 40, 1065, 42, 43, 44, 1069, 1070
];

MaiaScript.TRANSITION =
[
  /*    0 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*   18 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*   36 */ 2272, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895,
  /*   54 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2293, 2293, 2294, 3895, 2310, 3895, 3895, 3445,
  /*   72 */ 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*   90 */ 3895, 3895, 3895, 3895, 3895, 3895, 2293, 2293, 2294, 3895, 3895, 3895, 3895, 3445, 5395, 3895, 3634, 5395,
  /*  108 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  126 */ 3895, 3895, 3895, 2322, 2338, 3895, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895,
  /*  144 */ 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4113,
  /*  162 */ 3620, 3895, 2368, 3895, 3895, 5151, 3368, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 6151, 2396, 3895, 3895,
  /*  180 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2414, 5718, 2435, 3895, 2310, 3895,
  /*  198 */ 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  216 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 2465, 6339, 3248, 6188, 5897, 4473,
  /*  234 */ 6185, 5897, 3922, 6343, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  252 */ 3895, 3895, 3895, 3895, 3895, 2604, 2494, 3895, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895,
  /*  270 */ 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  288 */ 3895, 5933, 2524, 3895, 2310, 2870, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632,
  /*  306 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4567, 2554, 3895,
  /*  324 */ 2584, 3895, 3895, 5345, 3368, 3895, 3634, 2620, 3895, 6028, 3895, 3895, 5418, 3632, 3895, 3895, 3895, 3895,
  /*  342 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2656, 2668, 2684, 3895, 2310, 3895, 3895, 3445,
  /*  360 */ 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  378 */ 3895, 3895, 3895, 3895, 3895, 3895, 3440, 3817, 3804, 3895, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395,
  /*  396 */ 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  414 */ 3895, 3895, 3895, 3378, 2714, 3895, 2744, 4225, 5395, 3445, 5859, 3895, 3634, 5234, 3895, 4676, 3895, 4670,
  /*  432 */ 2786, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4219, 5975,
  /*  450 */ 2819, 2417, 2849, 2419, 2596, 3445, 5395, 3895, 3634, 3828, 3895, 3015, 3895, 2886, 6537, 3632, 3895, 3895,
  /*  468 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2908, 2923, 3895, 2310, 3895,
  /*  486 */ 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  504 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3043, 5194, 2953, 4187, 2983, 4189, 5924, 3445, 5395, 3895,
  /*  522 */ 3634, 3828, 3895, 3015, 3895, 2886, 6537, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  540 */ 3895, 3895, 3895, 3895, 3896, 3011, 4773, 3895, 3031, 3895, 3895, 3445, 3066, 3895, 3634, 5395, 3895, 4839,
  /*  558 */ 3895, 3895, 6567, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  576 */ 3092, 4716, 3110, 3895, 3164, 3895, 6467, 3445, 5395, 3895, 3872, 5650, 3895, 3895, 3895, 3895, 5455, 3632,
  /*  594 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3987, 3193, 6335,
  /*  612 */ 3224, 6339, 3274, 5547, 3301, 4473, 6185, 3327, 3922, 2478, 4874, 3353, 3394, 3632, 3895, 3895, 3895, 3895,
  /*  630 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4045, 3410, 6335, 3224, 6339, 3274, 5547,
  /*  648 */ 3301, 4473, 6185, 3461, 3922, 4406, 4874, 3487, 3528, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  666 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4045, 3410, 6335, 3224, 6339, 3544, 5547, 3570, 4473, 6185, 3461,
  /*  684 */ 3922, 4406, 4874, 3487, 3528, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  702 */ 3895, 3895, 3895, 4045, 3410, 5300, 3224, 3586, 3274, 5547, 3301, 4473, 6185, 3461, 3922, 4406, 4874, 3487,
  /*  720 */ 3528, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4045,
  /*  738 */ 3410, 6335, 3224, 6339, 3274, 3606, 3650, 3688, 6185, 3461, 3922, 4406, 4874, 3487, 3528, 3632, 3895, 3895,
  /*  756 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4045, 3410, 6335, 3224, 6339,
  /*  774 */ 3274, 5547, 3301, 4473, 6185, 3461, 3922, 4406, 3471, 3759, 3854, 3870, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  792 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4045, 3410, 5484, 3224, 3888, 3274, 5547, 3301, 4473,
  /*  810 */ 6185, 3461, 3922, 4406, 4874, 3487, 3528, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  828 */ 3895, 3895, 3895, 3895, 3895, 4045, 3410, 6335, 3224, 6339, 3274, 6188, 3912, 4473, 6185, 3940, 3922, 4406,
  /*  846 */ 4874, 3487, 3528, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  864 */ 2861, 3050, 3973, 3895, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632,
  /*  882 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2630, 4003, 4015, 3895,
  /*  900 */ 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895,
  /*  918 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2640, 4031, 3895, 2310, 2803, 3895, 3445,
  /*  936 */ 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  954 */ 3895, 3895, 3895, 3895, 3895, 3895, 5569, 5244, 4061, 5033, 4101, 2380, 4129, 3445, 5395, 2892, 3634, 5395,
  /*  972 */ 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /*  990 */ 3895, 3895, 3895, 3838, 4155, 3895, 2310, 3895, 4185, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895,
  /* 1008 */ 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2277, 3076,
  /* 1026 */ 4205, 3895, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895,
  /* 1044 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2310, 3895,
  /* 1062 */ 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1080 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 2465, 6339, 3248, 6188, 5089, 4473,
  /* 1098 */ 6185, 4241, 3922, 3237, 4874, 4267, 5130, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1116 */ 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 2465, 6339, 3248, 6188, 5089, 4473, 6185, 4241, 3922, 3237,
  /* 1134 */ 4874, 4310, 4351, 2801, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1152 */ 3894, 5742, 2770, 6335, 2465, 6339, 3248, 6188, 5089, 4473, 6185, 4367, 3922, 4435, 4874, 4267, 5130, 3632,
  /* 1170 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335,
  /* 1188 */ 4393, 6339, 3248, 6188, 3138, 4473, 6185, 4241, 3922, 3237, 4874, 4267, 5130, 3632, 3895, 3895, 3895, 3895,
  /* 1206 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 4422, 6339, 3248, 6188,
  /* 1224 */ 6497, 4473, 6185, 5897, 3922, 6343, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1242 */ 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 2465, 6339, 3248, 6188, 5897, 4473, 6185, 3733,
  /* 1260 */ 3922, 5492, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1278 */ 3895, 3895, 3894, 5742, 2770, 6335, 4451, 6339, 3248, 3311, 4489, 4473, 6185, 4529, 3922, 6343, 3924, 6301,
  /* 1296 */ 6005, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4169,
  /* 1314 */ 4515, 3895, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895,
  /* 1332 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4555, 3895,
  /* 1350 */ 3895, 5151, 4583, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 6128, 4609, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1368 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4627, 4640, 3895, 2310, 3895, 3895, 3445, 5395, 3895,
  /* 1386 */ 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1404 */ 3895, 3895, 3895, 3895, 3895, 4139, 4656, 3895, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895,
  /* 1422 */ 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1440 */ 3894, 5742, 2770, 4705, 4692, 6339, 4732, 6188, 5089, 4473, 4758, 4803, 6369, 3237, 4819, 4267, 5130, 3632,
  /* 1458 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4835, 2352, 4855, 6335,
  /* 1476 */ 2465, 6339, 3248, 5547, 4325, 4473, 6185, 4241, 3922, 3237, 4874, 4267, 4890, 3632, 3895, 3895, 3895, 3895,
  /* 1494 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 4906, 2449, 4935, 6335, 2465, 6339, 3248, 5963,
  /* 1512 */ 5089, 5376, 5544, 4241, 5005, 3237, 6216, 4980, 4351, 2801, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1530 */ 3895, 3895, 3895, 3895, 3895, 3895, 5029, 2508, 5049, 6335, 2465, 6339, 3248, 6188, 5089, 4473, 6185, 4241,
  /* 1548 */ 3922, 3237, 5099, 5115, 5130, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1566 */ 3895, 3895, 5146, 2538, 5167, 5223, 5210, 5448, 5260, 6188, 3711, 4473, 3208, 5287, 4464, 5064, 5676, 4267,
  /* 1584 */ 5324, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 5340, 2568,
  /* 1602 */ 5361, 3554, 4393, 5411, 5434, 5547, 4995, 3258, 6185, 4241, 3922, 3237, 4874, 4267, 4890, 3632, 3895, 3895,
  /* 1620 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 3148, 5471, 5388,
  /* 1638 */ 3248, 6188, 5897, 4473, 6185, 5897, 3284, 6343, 3743, 3177, 6414, 3632, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1656 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 5508, 2698, 5529, 6335, 2465, 6339, 3248, 4085, 5897, 6109,
  /* 1674 */ 6185, 5897, 4251, 5308, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1692 */ 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 2465, 6339, 3248, 6188, 5897, 4473, 6185, 5897, 3285, 3590,
  /* 1710 */ 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1728 */ 5563, 2728, 5585, 5078, 5630, 6339, 5666, 6188, 4075, 4473, 4335, 5692, 6330, 5734, 4950, 2757, 4964, 3632,
  /* 1746 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 3722,
  /* 1764 */ 2465, 5890, 3248, 6188, 5897, 4473, 6185, 5897, 3922, 6343, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895,
  /* 1782 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 3700, 2465, 6059, 5758, 5547,
  /* 1800 */ 4282, 4473, 6185, 5897, 3922, 6343, 4377, 3124, 5614, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1818 */ 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 5707, 5787, 5803, 5826, 6188, 5897, 4473, 3512, 6066,
  /* 1836 */ 4870, 6343, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1854 */ 3895, 3895, 3894, 5742, 2770, 6335, 2465, 6339, 3248, 5182, 5897, 6097, 6185, 3733, 3922, 5492, 3924, 6301,
  /* 1872 */ 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 5852, 2833,
  /* 1890 */ 5875, 5913, 5949, 6121, 3248, 3425, 3774, 4742, 6185, 5897, 3950, 6293, 5991, 6301, 5614, 3632, 3895, 3895,
  /* 1908 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 6021, 2937, 6044, 6335, 2465, 6339,
  /* 1926 */ 6082, 3957, 5897, 5836, 6185, 5897, 3922, 6343, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1944 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 6144, 2967, 6167, 6335, 2465, 6339, 6204, 4294, 3502, 5771,
  /* 1962 */ 3789, 5810, 6182, 6343, 3924, 4919, 6262, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 1980 */ 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 4451, 6339, 3248, 3311, 4489, 4473, 6507, 4529, 6232, 6343,
  /* 1998 */ 5600, 3672, 6444, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 2016 */ 6248, 4787, 6278, 4499, 2465, 5643, 3248, 6188, 5897, 4473, 6185, 5897, 3922, 3664, 5271, 6301, 4964, 3632,
  /* 2034 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335,
  /* 2052 */ 6317, 6339, 3248, 3337, 6359, 4473, 6185, 5897, 3922, 6343, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895,
  /* 2070 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3894, 5742, 2770, 6335, 2465, 6339, 3248, 5013,
  /* 2088 */ 5897, 4539, 6185, 5897, 3922, 6343, 3924, 6301, 4964, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 2106 */ 3895, 3895, 3895, 3895, 3895, 3895, 4611, 6385, 6400, 3445, 2310, 3895, 3895, 3445, 5395, 3895, 3634, 5395,
  /* 2124 */ 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 2142 */ 3895, 3895, 3895, 4593, 6430, 3895, 2310, 3895, 6460, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895,
  /* 2160 */ 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 6483,
  /* 2178 */ 6523, 3895, 2310, 3895, 3895, 5513, 5395, 3895, 2398, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895,
  /* 2196 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 2995, 6553, 3895, 2310, 3895,
  /* 2214 */ 3895, 3445, 5395, 3895, 3634, 5395, 3895, 3895, 3895, 3895, 5455, 3632, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 2232 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3094, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 2250 */ 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895, 3895,
  /* 2268 */ 3895, 3895, 3895, 3895, 0, 0, 0, 68, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 6191, 6191,
  /* 2295 */ 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 0, 0, 0, 0, 68, 128, 0,
  /* 2316 */ 0, 0, 0, 0, 0, 5196, 0, 0, 0, 0, 0, 0, 0, 6656, 6656, 88, 6656, 6656, 6656, 88, 6656, 6656, 6656, 88, 88,
  /* 2341 */ 6656, 88, 88, 88, 88, 6656, 6744, 6744, 6744, 6744, 6744, 0, 0, 0, 0, 0, 0, 2097, 2097, 2126, 0, 2126,
  /* 2363 */ 2126, 2126, 0, 2126, 2126, 0, 0, 0, 3072, 128, 0, 0, 0, 0, 0, 0, 5196, 0, 0, 0, 0, 0, 0, 0, 7168, 8704,
  /* 2389 */ 10240, 12800, 14336, 16384, 17920, 21504, 22528, 3072, 3072, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 175,
  /* 2413 */ 0, 0, 0, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13824, 0, 0, 0, 0, 5196, 0, 0, 5196, 0, 0, 0, 0, 5196,
  /* 2444 */ 5196, 5196, 5196, 5196, 5196, 0, 0, 0, 0, 0, 0, 2098, 2098, 2127, 0, 2127, 2127, 2127, 0, 2127, 2127, 0, 0,
  /* 2467 */ 0, 68, 128, 0, 0, 0, 0, 0, 0, 5196, 0, 2096, 2096, 2096, 0, 239, 240, 241, 242, 243, 218, 219, 0, 4829,
  /* 2491 */ 4854, 2096, 2096, 0, 8281, 8281, 0, 8281, 8281, 8281, 8281, 0, 8281, 8281, 8281, 8281, 8281, 0, 0, 0, 0, 0,
  /* 2513 */ 0, 2099, 2099, 2128, 0, 2128, 2128, 2128, 0, 2128, 2128, 0, 9306, 9306, 0, 9306, 9306, 9306, 9306, 0, 9306,
  /* 2534 */ 9306, 9306, 9306, 9306, 0, 0, 0, 0, 0, 0, 2100, 2100, 2100, 0, 2100, 2100, 2100, 0, 2100, 2100, 69, 0, 0,
  /* 2557 */ 69, 0, 0, 0, 0, 69, 69, 69, 69, 69, 69, 0, 0, 0, 0, 0, 0, 2101, 2101, 2129, 0, 2129, 2129, 2129, 0, 2129,
  /* 2583 */ 2129, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 5196, 0, 0, 0, 0, 0, 0, 0, 13824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8281,
  /* 2614 */ 0, 0, 0, 8281, 0, 0, 0, 0, 0, 2560, 0, 2560, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19456, 0, 0, 0, 0, 0,
  /* 2645 */ 0, 0, 0, 0, 20063, 0, 0, 0, 20063, 0, 0, 0, 0, 0, 10752, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10752, 0, 0,
  /* 2674 */ 10752, 10752, 10752, 0, 10752, 10752, 10752, 0, 10752, 10752, 10752, 0, 0, 10752, 10752, 10752, 10752,
  /* 2691 */ 10752, 10752, 10752, 10752, 10752, 10752, 10752, 0, 0, 0, 0, 0, 0, 2102, 2102, 2130, 0, 2130, 2130, 2130,
  /* 2711 */ 0, 2130, 2130, 0, 11867, 11867, 0, 11867, 11867, 11867, 11867, 0, 11867, 11867, 11867, 11867, 11867, 0, 0,
  /* 2730 */ 0, 0, 0, 0, 2103, 2103, 2131, 0, 2131, 2131, 2131, 0, 2131, 2131, 0, 0, 0, 68, 128, 0, 0, 0, 0, 0, 0, 5196,
  /* 2756 */ 138, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2313, 2096, 0, 0, 2096, 0, 0, 0, 0, 2096, 2096,
  /* 2780 */ 2096, 2096, 2096, 2096, 0, 2096, 0, 0, 0, 220, 220, 0, 0, 0, 0, 68, 0, 0, 0, 68, 68, 68, 266, 0, 0, 0, 0,
  /* 2807 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20635, 0, 13386, 13404, 13404, 13386, 13404, 13404, 13404, 13404, 13386,
  /* 2828 */ 13416, 13416, 13416, 13416, 13416, 0, 0, 0, 0, 0, 0, 2104, 2104, 2132, 0, 2132, 2132, 2132, 0, 2132, 2132,
  /* 2849 */ 0, 0, 0, 68, 128, 0, 0, 0, 0, 13824, 0, 5196, 0, 0, 0, 0, 0, 0, 0, 18432, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 2879 */ 9728, 0, 0, 0, 0, 0, 0, 0, 0, 0, 259, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20992, 24576, 0, 0, 0, 0, 0,
  /* 2909 */ 14848, 0, 0, 14848, 14848, 0, 0, 0, 0, 0, 0, 0, 14848, 0, 14848, 14848, 14848, 0, 0, 14848, 14848, 14848,
  /* 2931 */ 14848, 14848, 14848, 14848, 14848, 14848, 0, 0, 0, 0, 0, 0, 2105, 2105, 2133, 0, 2133, 2133, 2133, 0, 2133,
  /* 2952 */ 2133, 15435, 15453, 15453, 15435, 15453, 15453, 15453, 15453, 15435, 15465, 15465, 15465, 15465, 15465, 0,
  /* 2968 */ 0, 0, 0, 0, 0, 2106, 2106, 2134, 0, 2134, 2134, 2134, 0, 2134, 2134, 0, 0, 0, 68, 128, 130, 130, 0, 0, 130,
  /* 2993 */ 16002, 5196, 0, 0, 0, 0, 0, 0, 0, 42496, 42496, 0, 42496, 42496, 42496, 0, 42496, 42496, 0, 0, 16896,
  /* 3014 */ 16896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 245, 0, 0, 0, 0, 0, 68, 128, 0, 0, 133, 133, 0, 0, 5196, 0,
  /* 3044 */ 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 64, 0, 0, 0, 0, 184, 133, 0, 0, 0, 0, 0, 138, 0,
  /* 3077 */ 0, 0, 0, 0, 0, 0, 0, 0, 25153, 0, 0, 0, 25153, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536,
  /* 3109 */ 0, 77, 17502, 17502, 77, 17502, 17502, 17502, 17502, 77, 17514, 17514, 17514, 17514, 17514, 0, 0, 0, 0, 0,
  /* 3129 */ 0, 2310, 2096, 2096, 2096, 36912, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 3584, 0, 3721, 138, 2096, 2096, 2096,
  /* 3151 */ 2096, 2096, 2096, 2096, 2096, 2096, 2169, 2171, 0, 0, 0, 0, 0, 0, 0, 0, 68, 128, 0, 0, 0, 0, 0, 0, 5196,
  /* 3176 */ 5196, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 37424, 2096, 2096, 0, 0, 3656, 0, 0, 3656, 0, 0, 0,
  /* 3200 */ 0, 3656, 3656, 3656, 3656, 3656, 3656, 0, 2096, 48, 2096, 2096, 2096, 2254, 2096, 2096, 2096, 2096, 2096,
  /* 3219 */ 2096, 2096, 2096, 124, 28672, 0, 0, 0, 68, 128, 131, 132, 3657, 3657, 131, 132, 5196, 0, 2096, 2096, 2096,
  /* 3240 */ 0, 240, 240, 242, 242, 0, 218, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 0, 0, 0, 2096, 2096, 2096, 2096, 2096,
  /* 3263 */ 2096, 2096, 2096, 2096, 2096, 0, 0, 2096, 2247, 2096, 2096, 0, 0, 0, 2096, 2096, 2096, 2096, 131, 132, 0,
  /* 3284 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 48, 2096, 2096, 2096, 2096, 2096, 2096, 180,
  /* 3302 */ 131, 131, 132, 4793, 0, 0, 0, 3721, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 3322 */ 124, 0, 0, 178, 0, 0, 213, 68, 180, 215, 0, 218, 219, 4829, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 3344 */ 2096, 2096, 2096, 2096, 124, 0, 0, 179, 0, 256, 256, 258, 260, 4854, 4869, 2096, 2096, 2096, 2096, 2096,
  /* 3364 */ 2096, 2096, 2096, 68, 128, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11867, 0, 0, 0, 11867,
  /* 3392 */ 0, 0, 128, 0, 260, 260, 4869, 2096, 2096, 2096, 2096, 68, 0, 0, 2096, 68, 272, 273, 3657, 0, 0, 3657, 0, 0,
  /* 3416 */ 0, 0, 3657, 3657, 3657, 3657, 3657, 3657, 0, 2096, 166, 2096, 2096, 2096, 2096, 2096, 2096, 2221, 2096,
  /* 3435 */ 2096, 124, 0, 0, 68, 0, 0, 0, 0, 11264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 214, 68, 180,
  /* 3465 */ 216, 0, 218, 219, 4829, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 3484 */ 2096, 255, 179, 256, 256, 0, 260, 4854, 4869, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 68, 128, 0,
  /* 3504 */ 0, 0, 0, 0, 0, 0, 0, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2255, 2096, 2096, 2096, 2096, 2096, 2259,
  /* 3525 */ 2096, 124, 0, 128, 0, 260, 260, 4869, 2096, 2096, 2096, 2096, 68, 0, 0, 2096, 68, 68, 68, 0, 0, 0, 2096,
  /* 3548 */ 2096, 2096, 2096, 131, 132, 0, 2096, 2096, 2096, 2096, 2096, 48, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0,
  /* 3569 */ 0, 180, 131, 131, 132, 4793, 0, 0, 0, 3721, 138, 2096, 2096, 31792, 2096, 2096, 33840, 2189, 2192, 2096,
  /* 3589 */ 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28208, 2096, 48, 2096, 2096, 2096, 2096, 2096,
  /* 3612 */ 2096, 2096, 2096, 2096, 2096, 124, 0, 0, 68, 0, 0, 68, 0, 0, 0, 0, 68, 68, 68, 68, 68, 68, 0, 0, 0, 0, 0,
  /* 3639 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 180, 131, 131, 132, 4793, 0, 0, 0, 3721, 138, 2096, 2096, 2096, 32304,
  /* 3664 */ 2096, 2096, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2210, 0, 0,
  /* 3688 */ 34352, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0, 2096, 2096, 2096, 2096, 2096, 2164,
  /* 3706 */ 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 3721, 138, 2235, 2096, 2096, 2096, 2096, 2096, 2163,
  /* 3728 */ 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 222, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 3750 */ 2096, 2096, 29232, 2096, 2096, 2096, 2096, 0, 0, 257, 256, 0, 260, 4854, 4869, 2096, 2096, 2096, 2096,
  /* 3769 */ 2096, 2096, 2096, 2096, 68, 128, 0, 0, 0, 0, 0, 0, 0, 0, 138, 2096, 2096, 2096, 2096, 32957, 2096, 2096,
  /* 3791 */ 2096, 2252, 2096, 2096, 2096, 2096, 2096, 2096, 2211, 48, 2096, 2096, 124, 0, 0, 0, 0, 11264, 11264, 0, 0,
  /* 3812 */ 11264, 0, 0, 0, 11264, 11264, 0, 0, 0, 11264, 0, 0, 0, 0, 11264, 11264, 0, 0, 0, 0, 0, 0, 0, 0, 70, 138, 0,
  /* 3839 */ 0, 0, 0, 0, 0, 0, 0, 0, 23137, 0, 0, 0, 23137, 0, 0, 128, 268, 260, 260, 4869, 2096, 2096, 2096, 2096, 68,
  /* 3864 */ 0, 0, 2096, 68, 68, 68, 274, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5632, 0, 2190, 2193, 2096, 2096,
  /* 3892 */ 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16896, 0, 131, 131, 132, 4793, 0, 0, 0,
  /* 3920 */ 3721, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 3938 */ 0, 0, 0, 214, 68, 0, 216, 0, 218, 219, 4829, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 3959 */ 2096, 2096, 2096, 2096, 2096, 2220, 2096, 2096, 2096, 124, 176, 0, 0, 0, 0, 18496, 64, 0, 64, 64, 18496,
  /* 3980 */ 64, 18432, 64, 18496, 18496, 18496, 18496, 0, 0, 0, 0, 0, 0, 3656, 3656, 3656, 0, 3656, 3656, 3656, 0,
  /* 4001 */ 3656, 3656, 19456, 0, 0, 0, 0, 19456, 0, 0, 19456, 0, 19456, 19456, 19456, 0, 19456, 19456, 0, 0, 0, 19456,
  /* 4023 */ 19456, 19456, 19456, 19456, 19456, 19456, 0, 0, 0, 20063, 20063, 0, 20063, 20063, 20063, 20063, 0, 20063,
  /* 4041 */ 20063, 20063, 20063, 20063, 0, 0, 0, 0, 0, 0, 3657, 3657, 3657, 0, 3657, 3657, 3657, 0, 3657, 3657, 0,
  /* 4062 */ 22112, 22112, 0, 22112, 22112, 22112, 22112, 0, 22112, 22112, 22112, 22112, 22112, 0, 0, 0, 0, 0, 0, 3720,
  /* 4082 */ 3584, 0, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2219, 2096, 2096, 2096, 2222, 124, 0, 177, 0, 0, 25600,
  /* 4102 */ 0, 0, 68, 128, 0, 0, 0, 0, 0, 0, 5196, 0, 0, 0, 0, 0, 0, 68, 68, 68, 0, 68, 68, 68, 0, 68, 68, 23552,
  /* 4130 */ 27648, 40960, 0, 0, 0, 0, 14336, 16384, 17920, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27234, 0, 0, 0, 27234, 0, 0, 0,
  /* 4156 */ 23137, 23137, 0, 23137, 23137, 23137, 23137, 0, 23137, 23137, 23137, 23137, 23137, 0, 0, 0, 0, 0, 0, 26112,
  /* 4176 */ 26112, 26112, 0, 26112, 26112, 26112, 0, 26112, 26112, 24220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4201 */ 15872, 0, 0, 0, 0, 25153, 25153, 0, 25153, 25153, 25153, 25153, 0, 25153, 25153, 25153, 25153, 25153, 0, 0,
  /* 4221 */ 0, 0, 0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12288, 0, 0, 0, 0, 0, 0, 214, 68, 0, 216, 0, 218, 0, 0, 138,
  /* 4251 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2283, 2096, 2096, 2096, 2096, 256, 256,
  /* 4269 */ 0, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 68, 128, 0, 0, 0, 0, 0, 0, 0, 0, 138, 2096,
  /* 4293 */ 2236, 2096, 2096, 2096, 2096, 2096, 2218, 2096, 2096, 2096, 2096, 2096, 124, 0, 0, 68, 0, 256, 256, 0, 0,
  /* 4314 */ 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 266, 128, 0, 0, 0, 0, 0, 0, 0, 3721, 138, 2096, 2096,
  /* 4337 */ 2096, 2096, 2096, 2096, 2096, 2256, 2096, 2096, 2096, 2096, 2096, 2210, 124, 0, 267, 0, 0, 0, 0, 2096,
  /* 4357 */ 2096, 2096, 2096, 68, 0, 128, 2096, 68, 68, 68, 0, 214, 68, 0, 216, 0, 218, 0, 222, 138, 2096, 2096, 2096,
  /* 4380 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2302, 2096, 2096, 48, 0, 0, 0, 0, 0, 68, 128, 0, 0, 3584, 3584,
  /* 4402 */ 0, 0, 5196, 0, 2096, 2096, 2096, 0, 240, 240, 242, 242, 0, 218, 219, 0, 4829, 4854, 2096, 2096, 0, 0, 0,
  /* 4425 */ 68, 128, 0, 0, 3718, 3718, 0, 0, 5196, 0, 2096, 2096, 2096, 0, 240, 240, 242, 242, 0, 218, 244, 0, 222, 0,
  /* 4449 */ 2096, 2096, 0, 0, 0, 68, 128, 0, 0, 3719, 3719, 0, 0, 5196, 0, 2096, 2096, 2096, 2096, 2096, 28720, 2096,
  /* 4471 */ 2096, 31280, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0, 2096, 2096, 2096, 2096, 181,
  /* 4490 */ 0, 0, 0, 0, 0, 0, 0, 0, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2167, 2096, 2096, 0, 0, 0, 0,
  /* 4514 */ 0, 26112, 0, 0, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 26112, 0, 0, 0, 0, 0,
  /* 4534 */ 217, 0, 0, 0, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 38960, 2096, 0, 0, 2096, 2096, 2096,
  /* 4554 */ 2096, 0, 0, 0, 127, 129, 0, 0, 0, 0, 0, 0, 5196, 0, 0, 0, 0, 0, 0, 69, 69, 69, 0, 69, 69, 69, 0, 69, 69,
  /* 4583 */ 182, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40547, 0, 0, 0, 40547, 0, 0, 127, 127, 0, 0,
  /* 4613 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39936, 0, 0, 0, 0, 0, 26624, 26624, 0, 0, 0, 0, 0, 26624, 0, 0, 0,
  /* 4642 */ 26624, 0, 0, 26624, 0, 26624, 26624, 0, 0, 0, 26624, 26624, 0, 0, 0, 27234, 27234, 0, 27234, 27234, 27234,
  /* 4663 */ 27234, 0, 27234, 27234, 27234, 27234, 27234, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 0, 220,
  /* 4689 */ 0, 0, 0, 0, 125, 0, 68, 128, 0, 0, 0, 0, 0, 0, 5196, 0, 2096, 2156, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 4713 */ 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 77, 17502, 77, 77, 77, 17502, 77, 77, 0, 0, 0, 2205, 2096, 2207,
  /* 4738 */ 2096, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2244, 2096, 2096, 0, 0, 2096, 2096, 2096, 2096,
  /* 4758 */ 2250, 2096, 2096, 2096, 2253, 2096, 2096, 2096, 2257, 2096, 2096, 2096, 2096, 2096, 124, 0, 0, 0, 0, 16896,
  /* 4778 */ 16896, 16896, 16896, 0, 0, 0, 16896, 0, 16896, 0, 0, 0, 0, 0, 0, 2107, 2107, 2135, 0, 2135, 2135, 2135, 0,
  /* 4801 */ 2135, 2135, 0, 214, 68, 0, 216, 0, 218, 0, 0, 138, 2271, 2096, 2096, 2096, 2096, 2276, 2296, 2096, 2096,
  /* 4822 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 179, 179, 2097, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 4844 */ 0, 0, 0, 0, 0, 0, 0, 184, 0, 0, 0, 2126, 0, 0, 2126, 0, 0, 0, 0, 2126, 2126, 2126, 2126, 2126, 2126, 0,
  /* 4870 */ 2096, 2096, 2096, 2279, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 4888 */ 179, 179, 128, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 68, 128, 0, 2096, 68, 68, 68, 2098, 0, 0, 0, 0, 0, 0, 0,
  /* 4914 */ 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 2096, 2096, 35376, 2096, 2096, 2096, 2096, 2096, 0, 0, 2127, 0, 0, 2148,
  /* 4939 */ 0, 0, 0, 0, 2150, 2127, 2127, 2127, 2150, 2150, 0, 2096, 2096, 2096, 36400, 2096, 2096, 2096, 2096, 2096,
  /* 4959 */ 2096, 2096, 2220, 2096, 2096, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 68, 0, 0, 2096, 68, 68, 68, 256, 256,
  /* 4982 */ 0, 0, 0, 0, 2096, 2311, 2096, 2096, 2096, 2096, 2096, 2096, 266, 128, 0, 0, 0, 0, 0, 3584, 0, 3721, 138,
  /* 5005 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2282, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 48,
  /* 5023 */ 2096, 124, 0, 0, 0, 0, 2099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7680, 0, 0, 18944, 2128, 0, 0,
  /* 5052 */ 2149, 0, 0, 0, 0, 2149, 2128, 2128, 2128, 2149, 2149, 0, 2096, 2096, 2096, 39424, 240, 240, 242, 242, 0,
  /* 5073 */ 218, 244, 0, 222, 0, 2096, 2096, 2096, 2159, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0,
  /* 5096 */ 0, 3721, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2210, 2096, 179, 179,
  /* 5115 */ 256, 256, 0, 0, 0, 0, 2096, 2096, 2096, 2312, 2096, 2096, 2096, 2096, 68, 128, 0, 0, 0, 0, 2096, 2096,
  /* 5137 */ 2096, 2096, 68, 0, 0, 2096, 68, 68, 68, 2100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 68,
  /* 5166 */ 0, 2100, 0, 0, 2100, 0, 0, 0, 0, 2151, 2100, 2100, 2100, 2151, 2151, 0, 2096, 2096, 2215, 2096, 2096, 2096,
  /* 5188 */ 2096, 2096, 2096, 2096, 2096, 124, 0, 0, 0, 0, 0, 0, 71, 15435, 15435, 15453, 15435, 15435, 15435, 15453,
  /* 5208 */ 15435, 15435, 0, 0, 0, 68, 128, 0, 0, 0, 0, 0, 0, 5196, 0, 2096, 2096, 2158, 2096, 2096, 2096, 2096, 2166,
  /* 5231 */ 2096, 2168, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 220, 186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22112, 0, 0, 0, 22112, 0, 0,
  /* 5260 */ 0, 0, 0, 2096, 2206, 2096, 2096, 0, 0, 0, 2209, 2096, 2096, 2096, 2096, 2096, 2096, 38448, 2096, 2096,
  /* 5280 */ 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 214, 68, 0, 216, 0, 218, 0, 222, 138, 2096, 2096, 2273, 2096, 2096,
  /* 5302 */ 2096, 2096, 2160, 2160, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 4096, 0, 0, 2096, 2295, 128,
  /* 5325 */ 0, 0, 0, 0, 2096, 2096, 35888, 2096, 68, 0, 0, 29744, 68, 68, 68, 2101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5353 */ 0, 0, 0, 124, 0, 0, 68, 2560, 2129, 0, 0, 2129, 0, 0, 0, 0, 2129, 2129, 2129, 2129, 2129, 2129, 0, 2096,
  /* 5377 */ 2096, 2239, 2240, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0, 2096, 2096, 2096, 2096, 2096, 2200, 2202, 0, 0,
  /* 5397 */ 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 2096, 34864, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0,
  /* 5425 */ 0, 0, 68, 2688, 0, 0, 68, 68, 68, 0, 0, 0, 2096, 2096, 2096, 2096, 0, 0, 0, 2096, 2096, 2096, 2213, 2096,
  /* 5449 */ 2096, 2096, 2197, 2096, 2199, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 68, 68, 68, 0, 0, 126, 68, 128,
  /* 5476 */ 0, 0, 0, 0, 0, 0, 5196, 0, 2096, 2096, 2096, 2096, 2161, 2161, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0,
  /* 5500 */ 0, 0, 244, 0, 222, 0, 2096, 2096, 2102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 175, 0, 0, 0, 0, 2130,
  /* 5530 */ 0, 0, 2130, 0, 0, 0, 0, 2130, 2130, 2130, 2130, 2130, 2130, 0, 2096, 2096, 2251, 2096, 2096, 2096, 2096,
  /* 5551 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 124, 0, 0, 68, 0, 2103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 5578 */ 0, 22016, 0, 0, 0, 0, 0, 2131, 0, 0, 2131, 0, 0, 0, 0, 2131, 2131, 2131, 2131, 2131, 2131, 0, 2096, 2096,
  /* 5602 */ 2298, 2096, 2096, 2096, 2096, 2096, 2301, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 2096, 2096, 2096,
  /* 5622 */ 2096, 68, 128, 0, 2096, 68, 68, 68, 0, 0, 0, 68, 128, 0, 0, 3720, 3720, 0, 0, 5196, 0, 2096, 2096, 2096,
  /* 5646 */ 2096, 2198, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2208,
  /* 5673 */ 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 39472, 2096, 2096, 2096, 2096, 2096, 2096, 179, 179,
  /* 5692 */ 212, 0, 0, 0, 0, 0, 0, 0, 0, 138, 2096, 2096, 2096, 2096, 2275, 2096, 2157, 48, 2096, 2162, 2096, 2165,
  /* 5714 */ 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 5196, 0, 5196, 5196, 5196, 0, 5196, 5196, 48, 2096, 2096,
  /* 5737 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 0, 2096, 2096, 2096, 0, 2096, 2096, 0, 0, 0, 2096, 2096,
  /* 5763 */ 2096, 2096, 0, 0, 0, 2096, 2096, 2212, 2096, 2096, 2096, 2096, 2241, 2096, 2096, 2096, 2096, 2096, 0, 0,
  /* 5783 */ 2211, 2096, 2248, 2096, 0, 0, 0, 68, 128, 0, 0, 0, 0, 0, 0, 5196, 0, 2096, 2188, 30768, 2191, 2096, 2196,
  /* 5806 */ 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 2096, 2272, 2096, 2096, 2096, 2096, 0, 0, 0, 2188,
  /* 5830 */ 30768, 2188, 2096, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2243, 2096, 2096, 2096, 0, 0, 2246, 2096,
  /* 5850 */ 2246, 2249, 2104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 186, 0, 0, 0, 0, 0, 0, 2132, 0, 0, 2132, 0,
  /* 5880 */ 0, 0, 0, 2132, 2132, 2132, 2132, 2132, 2132, 0, 2096, 2194, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0,
  /* 5903 */ 0, 0, 0, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2155, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 5922 */ 2170, 2096, 0, 0, 0, 0, 0, 0, 0, 130, 16002, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9306, 0, 0, 0, 9306, 0, 0, 0, 0, 0,
  /* 5952 */ 68, 128, 0, 0, 0, 0, 0, 0, 5196, 0, 2187, 2096, 2096, 2096, 2216, 2217, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 5974 */ 124, 0, 0, 0, 0, 0, 0, 70, 13386, 13386, 13404, 13386, 13386, 13386, 13404, 13386, 13386, 2096, 2297, 2096,
  /* 5994 */ 2096, 2299, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2096,
  /* 6014 */ 68, 0, 0, 2096, 271, 68, 68, 2105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2560, 0, 0, 0, 0, 0, 0,
  /* 6044 */ 2133, 0, 0, 2133, 0, 0, 0, 0, 2133, 2133, 2133, 2133, 2133, 2133, 0, 2096, 2195, 2096, 2096, 2096, 2096,
  /* 6065 */ 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 2096, 2096, 2096, 2274, 2096, 2096, 0, 0, 0, 2096, 2096, 2096, 2096,
  /* 6089 */ 0, 0, 0, 2096, 2210, 2096, 2096, 2210, 2096, 2238, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0,
  /* 6109 */ 2096, 2096, 2096, 2096, 2096, 2242, 2096, 2096, 2096, 2245, 0, 0, 2096, 2096, 2096, 2096, 2096, 2201, 2096,
  /* 6128 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 182, 0, 0, 270, 127, 127, 2106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 6159 */ 0, 3140, 128, 0, 0, 3140, 3072, 3072, 2134, 0, 0, 2134, 0, 0, 0, 0, 2134, 2134, 2134, 2134, 2134, 2134, 0,
  /* 6182 */ 2096, 2278, 37936, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 124,
  /* 6200 */ 0, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 0, 0, 0, 2096, 2211, 2096, 2096, 2096, 2096, 2096, 2300, 2096,
  /* 6223 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 179, 179, 2277, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 6241 */ 2096, 2096, 2096, 2284, 2096, 2096, 2285, 2107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0,
  /* 6267 */ 2096, 2096, 2096, 30256, 68, 128, 0, 2096, 68, 68, 68, 2135, 0, 0, 2135, 0, 0, 0, 0, 2135, 2135, 2135,
  /* 6289 */ 2135, 2135, 2135, 0, 2096, 2286, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 6313 */ 2096, 2096, 0, 0, 0, 0, 0, 68, 128, 0, 0, 137, 0, 0, 0, 5196, 0, 2096, 2096, 2096, 2096, 2280, 2096, 2096,
  /* 6337 */ 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2096, 2096, 183, 0,
  /* 6361 */ 0, 0, 0, 0, 0, 0, 0, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2281, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 6382 */ 2211, 2096, 2096, 0, 0, 39936, 39936, 0, 0, 39936, 39936, 39936, 0, 39936, 39936, 39936, 0, 39936, 39936,
  /* 6401 */ 0, 0, 39936, 39936, 39936, 39936, 39936, 39936, 39936, 39936, 39936, 39936, 39936, 0, 0, 0, 0, 0, 2096,
  /* 6420 */ 33328, 2096, 2096, 68, 0, 0, 2096, 68, 68, 68, 0, 40547, 40547, 0, 40547, 40547, 40547, 40547, 0, 40547,
  /* 6440 */ 40547, 40547, 40547, 40547, 0, 0, 0, 0, 0, 2317, 2096, 2096, 2096, 68, 0, 0, 2096, 271, 68, 68, 0, 0,
  /* 6462 */ 41472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5196, 0, 0, 0, 0, 0, 0, 0, 41984, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 6494 */ 0, 41984, 41984, 0, 0, 0, 0, 0, 3584, 3718, 0, 0, 138, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 6515 */ 2096, 2258, 2096, 2096, 2096, 2096, 124, 0, 41984, 41984, 0, 41984, 0, 0, 41984, 0, 41984, 41984, 41984,
  /* 6534 */ 41984, 41984, 41984, 0, 0, 0, 0, 70, 0, 0, 0, 0, 68, 0, 0, 0, 68, 68, 68, 42496, 0, 0, 42496, 0, 0, 0, 0,
  /* 6561 */ 42496, 42496, 42496, 42496, 42496, 42496, 0, 0, 0, 0, 184, 0, 0, 0, 0, 68, 0, 0, 0, 68, 68, 68
];

MaiaScript.EXPECTED =
[
  /*   0 */ 206, 210, 213, 214, 218, 222, 226, 229, 232, 236, 240, 244, 280, 280, 314, 252, 330, 260, 263, 279, 280,
  /*  21 */ 291, 267, 271, 410, 308, 278, 280, 280, 280, 314, 331, 302, 286, 289, 280, 280, 280, 282, 280, 280, 280,
  /*  42 */ 280, 315, 295, 300, 306, 280, 280, 280, 280, 280, 281, 296, 301, 312, 280, 280, 280, 319, 300, 312, 280,
  /*  63 */ 247, 301, 313, 248, 320, 324, 272, 465, 335, 339, 343, 347, 351, 355, 359, 363, 367, 272, 272, 272, 272,
  /*  84 */ 371, 272, 272, 451, 375, 272, 272, 395, 382, 386, 404, 272, 272, 272, 272, 480, 272, 272, 272, 390, 394,
  /* 105 */ 272, 272, 399, 403, 272, 272, 272, 481, 272, 272, 408, 272, 479, 425, 272, 272, 272, 272, 272, 408, 272,
  /* 126 */ 423, 272, 272, 272, 409, 417, 272, 255, 417, 256, 272, 272, 272, 272, 414, 429, 378, 439, 436, 433, 443,
  /* 147 */ 447, 449, 272, 272, 272, 272, 327, 272, 272, 272, 455, 462, 272, 272, 420, 272, 272, 272, 272, 272, 272,
  /* 168 */ 328, 272, 272, 272, 274, 473, 469, 477, 272, 272, 272, 272, 272, 329, 272, 272, 485, 469, 329, 272, 272,
  /* 189 */ 326, 272, 272, 272, 485, 458, 272, 272, 272, 273, 467, 272, 272, 338, 272, 272, 272, 2056, 3072, 18432,
  /* 209 */ 1050624, 2099200, 67110912, 1073743872, 2048, 2048, 2048, 2048, 1050624, 2099200, 268437504, 2048, 1050624,
  /* 222 */ 270534656, 268437504, 1051128, 1712331256, 1712331768, -269506560, 1714428920, 1712331768, -3168256,
  /* 231 */ 1712331772, 1980767224, -3168256, -3168256, 1712331768, -268457984, -22528, -2119680, -2119680, 1982864376,
  /* 241 */ -2114568, -2114568, -2114568, -17416, -17416, 2048, 8, 8, 32, 16, 16, 16384, 67108864, 1073741824, 0, 0, 0,
  /* 258 */ 33554432, 0, 16, 128, 384, 448, 67108992, 1073742208, 512, 65536, 786432, 25165824, 201326592, -1073741824,
  /* 272 */ 0, 0, 0, 0, 1, 2, -1073741440, 512, 8, 8, 8, 8, 0, 0, 384, 64, 64, 64, 512, 8, 8, 8, 8192, 0, 32, 32, 16,
  /* 299 */ 16, 16, 16, 16, 128, 128, 384, 384, 512, 8, 8, 8, 201326720, 384, 384, 8, 8, 8, 1024, 0, 8, 8, 32, 32, 32,
  /* 324 */ 32, 32, 0, 0, 0, 4096, 0, 0, 0, 32, 16, 1024, 131072, 8388608, 0, 0, 1, 32, 0, 1, 1, 524288, 524320, 262144,
  /* 348 */ 262144, -364642272, 3407830, -364642272, -364117984, -364642272, 3407830, -364642272, -364117984,
  /* 357 */ -364642272, 3407838, 3932150, -289144800, 3669975, 4194263, 3669983, 4194295, -3407832, -361234442,
  /* 367 */ -361234434, -361234433, -2, -1, 0, 16, 131072, 8388608, 33554432, 134217728, -536870912, 0, 0, 8192, 270336,
  /* 382 */ 896, 2048, 57344, 2097152, 0, 41943040, 201326592, 58720256, 4194304, 33554432, 536870912, 1073741824,
  /* 394 */ 0x80000000, 0, 0, 0, 4, 256, 32768, 8388608, 67108864, 25165824, 268435456, 0, 0, 4, 4194304, 33554432, 0,
  /* 411 */ 0, 0, 8, 0, 4096, 8192, 0, 0, 67108864, 0, 0, 98304, 0, 0, 67108864, 16777216, 268435456, 0, 0, 131072,
  /* 431 */ 8192, 8192, 409599, 245760, 114688, 409599, 245760, 278527, 278527, 114688, 278527, 278527, 122880, 122880,
  /* 445 */ 253952, 122880, 409599, 524287, 524287, 524287, 0, 0, 0, 4194304, 1, 62, 64, 128, 256, 1024, 4096, 256,
  /* 463 */ 3584, 4096, 0, 8, 16, 32, 128, 256, 512, 1024, 4, 16, 32, 64, 2048, 4096, 0, 0, 0, 8388608, 0, 0, 1, 16, 32,
  /* 488 */ 64
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
