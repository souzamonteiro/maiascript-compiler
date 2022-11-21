# MaiaScript Guide

MaiaScript é uma linguagem de programação voltada a construção de aplicações adaptáveis e inteligentes, com ênfase na facilidade de aprendizagem e elevada performance. São suportados nativamente, operações com números complexos e matrizes, redes neurais artificiais, criação e análise de redes complexas e sociais, programação paralela com threads e GPU, estatística avançada, computação algébrica, incluindo cálculo diferencial e integral e programação de aplicações desktop e web.

Este manual cobre os fundamentos de programação em MaiaScript, apresentando exemplos práticos para os recursos mais comumento usados e orientações gerais sobre o uso desta linguagem.

Para informações detalhadas sobre a gramática da linguagem MaiaScript consulte a descrição em EBNF e os diagramas de sintaxe disponíveis na pasta `docs` da sua distribução do compilador MaiaScript.

## Tipos de dados

MaiaScript suporta três tipos de dados nativamente: `integer`, `real` e `string`. Esses tipos são automáticos, não sendo necessário defini-los quando da criação de variáveis e funções comuns. Para uso exclusivamente com funções em **WebAssembly** e **MaiaAssembly** são suportados os tipos `integer 32 bits`, `ì32`, `integer 64 bits`, `ì64`, `real 32 bits`, `f32`, `real 64 bits`, `f64`. Funções em **MaiaAssembly** são tratadas no capítulo sobre funções. Funções em **WebAssembly** estão além do escopo deste guia. Para maiores informações consulte o site oficial do projeto: <https://webassembly.org>.

## Saída de dados

MaiaScript permite a exibição de mensagens na tela do computador, ou na saída padrão, através de várias funções da biblioteca `system`, dentre elas as mais usadas são `print`, `println`, `printf` e `showMessageDialog`. O exemplo a seguir ilustra o uso dessas funções:

```
system.println("Hello World!")
system.showMessageDialog("Hello World!")
system.printf("%d, %.3f, %s", 1, 1.23456, "Hello World!")
```

## Entrada de dados

É possível ler dados digitados pelo usuário através da função `showInputDialog` da biblioteca `system`. Esta função esibe uma caixa de diálogo com a mensagem passada como parâmetro e um botão de confirmação, que quando clicado, retorna o valor digitado na caixa de texto apresentada. O exemploca a seguir ilustra o uso desta função:

```
a = system.showInputDialog("Type a number:")
system.println(a)
```

## Variáveis

Variáveis são contêineres onde armazenamos dados para processamento ou resultados de processamentos. Em MaiaScript variáveis podem armazenar valores de qualquer tipo, não sendo normalmente necessário especificar o tipo de dado que a variável ira armazenar, no momento de sua criação. Contudo, quando da criação de funções em **MaiaAssembly** ou **WebAssembly**, deve-se especificar o tipo de dado que a variável ira armazenar e esta variável só poderá armazenar valores deste tipo de dado por toda a sua existência. São suportados os tipos `integer 32 bits`, `ì32`, `integer 64 bits`, `ì64`, `real 32 bits`, `f32`, `real 64 bits`, `f64`. Funções em **MaiaAssembly** são tratadas no capítulo sobre funções. Funções em **WebAssembly** estão além do escopo deste guia. Para maiores informações consulte o site oficial do projeto: <https://webassembly.org>. O exemplo a seguir mostra como criar variáveis de diversos tipos:

```
a = 1
system.println(a)
b = 2.0
system.println(b)
c = "Hello World!"
system.println(c)
d = [1, 2.0]
system.println(d)
e = []
system.println(e)

// Vetores semelhantes ao JavaScript.
f = [[1, 2],[3, 4]]
system.println(f)

// Matrizes semelhantes ao Matlab.
g = [5, 6; 7, 8]
system.println(g)

// Objetos semelhantes ao JavaScript
h = {a: 1, b: 2.0, "c": "Hello World!"}
system.println(JSON.stringify(h))
i = {}
system.println(JSON.stringify(i))
```

## Operadores

MaiaScript suporta operadores matemáticos, relacionais, lógicos, de deslocamento de bits, de operação e atribuição e o perador condicional ternário. A seguir apresentamos em notação EBNF todos os operadores suportados pela linguagem. A órdem de precedência é de cima para baixo.

```
Operation                ::= VariableAssignment
VariableAssignment       ::= ConditionalExpression (('=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|=' | '?=' | ':=') ConditionalExpression)*
ConditionalExpression    ::= LogicalORExpression ('?' VariableAssignment ':' VariableAssignment)?
LogicalORExpression      ::= LogicalANDExpression ('||' LogicalANDExpression)*
LogicalANDExpression     ::= BitwiseORExpression ('&&' BitwiseORExpression)*
BitwiseORExpression      ::= BitwiseXORExpression ('|' BitwiseXORExpression)*
BitwiseXORExpression     ::= BitwiseANDExpression ('^' BitwiseANDExpression)*
BitwiseANDExpression     ::= EqualityExpression ('&' EqualityExpression)*
EqualityExpression       ::= RelationalExpression (('==' | '!=') RelationalExpression)*
RelationalExpression     ::= ShiftExpression (('<' | '>' | '<=' | '>=') ShiftExpression)*
ShiftExpression          ::= AdditiveExpression (('<<' | '>>') AdditiveExpression)*
AdditiveExpression       ::= PowerExpression (('+' | '-') PowerExpression)*
PowerExpression          ::= MultiplicativeExpression ('**' MultiplicativeExpression)*
MultiplicativeExpression ::= UnaryExpression (('*' | '/' | '%') UnaryExpression)*
UnaryExpression          ::= Primary '++'
                           | Primary '--'
                           | '++' Primary
                           | '--' Primary
                           | '+' Primary
                           | '-' Primary
                           | '~' Primary
                           | '!' Primary
                           | Primary

Primary                  ::= Type? Member
                           | Value
                           | ParenthesizedExpression
```

Nas próximas sessões abordaremos cada um desses operadores.

### Operadores matemáticos

MaiaScript suporta os peradores matemáticos **soma**, `+`, **subtração**, `-`, **potenciação**, `**`, **multiplicação**, `*`, **divisão**, `/` e **resto da divisão**, `%`. Os exemplos a seguir mostram como utilizar esses operadores:

```
a = 1
b = 2

c = a + b
system.println(c)

c = a - b
system.println(c)

c = a * b
system.println(c)

c = a / b
system.println(c)

c = a % b
system.println(c)

// Operador de potência semelhante ao Python.
c = a ** b
system.println(c)

// Operadores de incremento e decremento semelhantes ao C.
c = a++
system.println(c)
c = b--
system.println(c)
c = ++a
system.println(c)
c = --b
system.println(c)
```

### Operadores relacionais

MaiaScript suporta os peradores relacionais **igual**, `==`, **diferente**, `!=`, **menor**, `<`, **menor ou igual**, `<=`, **maior**, `>` e **maior ou igual**, `>=`. Os exemplos a seguir mostram como utilizar esses operadores:

```
a = 1
b = 2

c = a == b
system.println(c)
c = a != b
system.println(c)
c = a < b
system.println(c)
c = a <= b
system.println(c)
c = a > b
system.println(c)
c = a >= b
system.println(c)
```

### Operadores lógicos

MaiaScript suporta os peradores lógicos **e**, `&&`, **ou**, `||`, **e bit a bit**, `&`, **ou exclusivo bit a bit**, `^` e **ou bit a bit**, `|`. Os exemplos a seguir mostram como utilizar esses operadores:

```
a = 1
b = 0

c = a && b
system.println(c)
c = a || b
system.println(c)
c = a & b
system.println(c)
c = a | b
system.println(c)
c = a ^ b
system.println(c)
```

### Operadores de deslocamento de bits

MaiaScript suporta os peradores de **deslocalemento a esquerda**, `<<`, e **deslocamento a direita**, `>>`. Os exemplos a seguir mostram como utilizar esses operadores:

```
a = 3

c = a << 2
system.println(c)
c = a >> 2
system.println(c)
```

### Operadores de operação e atribuição

MaiaScript suporta os seguintes operadores especiais de operação seguida de atribuição: `*=` , `/=` , `%=` , `+=` , `-=` , `<<=` , `>>=` , `&=` , `^=` , `|=`. A seguir são apresentados exemplos dos usos mais comuns desses operadores:

```
c = a += b
system.println(c)
c = a -= b
system.println(c)
```

### Operador condicional (ternário)

A linguagem MaiaScript oferece um **operador condicional ternário**. Este operador recebe três operandos: uma `expressão condicional`, uma `expressão que será retornada caso a condição seja avaliada como verdadeira` e uma `expressão que será retornada caso a condição seja avaliada como falsa`. No exemplo a seguir, como a variável `a` contém o valor `1` a condição `a == 1` será avaliada como `verdadeira` e a expressão `"Hello"` será retornada.

```
a = 1

c = a == 1 ? "Hello" : "World"
system.println(c)
```

### Números complexos.

MaiaScript suporta **números complexos** nativamente para os operadores `+`, `-`, `**`, `*` e `\` e para as funções matemáticas `abs`, `arg`, `cos`, `cosh`, `exp`, `log`, `sin`, `sinh`, `sqrt`, `tan` e `tanh`. Também estão disponíveis diversas funções especializadas na bliblioteca `core`. Para conhecer todas as funções MaiaScript com suporte a números complexos, consulte a documentação das bibliotecas na pasta `docs` em sua distribuição do compilador MaiaScript.

A seguir é apresentada em notação EBNF a sintaxe de números complexos em MaiaScript:

```
Complex                  ::= Real? Imaginary
Real                     ::= '-'? Digit+ '.' Digit+ (('e' | 'E' | 'p' | 'P') ('+' | '-')? Digit+)?
Imaginary                ::= (('+' | '-')? Real '*' 'i')
```

O exemplo a seguir ilustra a operação de soma com dois números complexos:

```
e = 1.0+2.0*i
f = 3.0+4.0*i
g = e + f
system.println(e)
```

### Matrizes

MaiaScript suporta matrizes nativamente para os operadores `+`, `-`, `**`, e `*` e oferece a biblioteca `matrix` para algebra linear. Também estão disponíveis diversas funções especializadas na bliblioteca `core`. Para conhecer todas as funções MaiaScript com suporte a matrizes, consulte a documentação das bibliotecas na pasta `docs` em sua distribuição do compilador MaiaScript.

A seguir é apresentada em notação EBNF a sintaxe **vetores associativos** e **matrizes** em MaiaScript:

```
Array                    ::= '{' Element? (',' Element)* '}'
Matrix                   ::= '[' Row? (';' Row)* ']'

Element                  ::= (Key ':')? Expression
Key                      ::= Identifier
                           | String

Row                      ::= Column (',' Column)*
Column                   ::= Expression
```

Em MaiaScript pode-se usar tanto a notação de matrizes do **Matlab** quanto do **JavaScript**. Na notação Matlab as colunas são separadas por `vírgulas`, `,`, e as linhas por `pontos-e-vírgulas`, `;`. Na notação JavaScript cada linha deve ser indicada entre colchetes `[]` e as linhas separadas por `vírgulas`, `,`. O exemplo a seguir apresenta exemplos de operações com matrizes usando as duas notações:

```
a = [1, 2; 3, 4]
b = [[5, 6], [7, 8]]

c = a + b
system.println(c)

c = a - b
system.println(c)

c = a ** 2
system.println(c)

c = a * b
system.println(c)

```

## Estruturas de decisão

MaiaScript oferece duas estruturas para controle de fluxo de execução: `if... else...` e `switch`. Ambas as estruturas estão disponíveis tanto no MaiaScript quanto no MaiaAssembly. Nas próximas sessões serão apresentadas essas declarações, assim como exemplos de suas utilizações.

### Declaração Se... Então...

A declaração `if... else...` permite decidir, mediante a avaliação de uma `condição` pela execução de uma sessão de `código de programa` ou não. A `expressão condicional` deve ser apresentada imediatamente após a palavra `if` e entre `parênteses`. Caso essa expressão seja avaliada como `verdadeira` a `expressão` ou `bloco de comandos` imediatamente após os `parênteses` será executada, caso contrário a `expressão` ou `bloco de comandos` imediatamente após a palavra `else` será executada. A cláusula `else` é opcional.

A seguir é apresentada a sintaxe da declaração `if... else...` em notação EBNF:

```
If                       ::= 'if' '(' Expression ')' Expression Else?
Else                     ::= 'else' Expression
```

O exemplo a seguir ilustra o uso da declaração `if... else...`:

```
a = 1
b = 2

// Declaração if semelhante ao C.
if (a < b) {
    system.println("a = " + a)
    system.println("b = " + b)
    system.println("a < b")
    if (a == 1)
        system.println("a == 1")
    else
        system.println("a != 1")
} else if (a > b) {
    system.println("a = " + a)
    system.println("b = " + b)
    system.println("a > b")
} else {
    system.println("a = " + a)
    system.println("b = " + b)
    system.println("a == b")
}
```

### Declaração Selecione... Caso...

A declaração `switch... case... default...` permite decidir, mediante a comparação de uma `expressão` com diversos `casos` fornecidos, pela execução de uma sessão de `código de programa` ou não. A `expressão condicional` deve ser apresentada imediatamente após a palavra `switch` e entre `parênteses`. Essa `expressão` será comparada com cada `caso` fornecido e caso seja encontrada uma **equivalência** a `expressão` ou `bloco de comandos` imediatamente após os `dois pontos` do `caso` será executada. Caso nenhum dos casos corresponda à `expressão` dada, a `expressão` ou `bloco de comandos` imediatamente após os `dois pontos` do caso `default` será executada. A cláusula `default` é opcional.

A seguir é apresentada a sintaxe da declaração `switch... case... default...` em notação EBNF:

```
Switch                   ::= 'switch' '(' Expression ')' '{' Case+ Default? '}'
Case                     ::= 'case' Expression ':' Expression*
Default                  ::= 'default' ':' Expression*
```

O exemplo a seguir ilustra o uso da declaração `switch... case... default...`:

```
a = 1

// Declaração switch semelhante ao C.
switch (a) {
    case 0:
    case 1:
        system.println("a == 0 || a == 1 || a == 2")
    case 2:
        system.println("a == 2")
        break
    default:
        system.println("a = " + a)
        system.println("a != 1 && a != 2")
}
```

## Estruturas de repetição

Estruturas de repetição permitem executar uma sessão de programa um número de vezes ou até que uma condição seja satisfeita. MaiaScript oferece quatro estruturas de repetição: `do... while`, `while...`, `for` e `foreach`. Todas essas estruturas estão disponíveis tanto no MaiaScript quanto no MaiaAssembly. Nas próximas sessões serão apresentadas essas declarações, assim como exemplos de suas utilizações.

### Declaração Faça...

A declaração `do... while...` executa uma `expressão` ou `bloco de comandos` `enquanto` uma dada `condição` for avaliada como `verdadeira`. A diferença desta declaração e da declaração `while...` é que esta declaração **executa pelo menos uma vez** a sessão de código, mesmo que a `condição` já seja `falsa` quando o fluxo de execução do programa chegar a ela, enquanto a declaração `while...` **não executará nenhuma vez** caso a `condição` já seja `falsa` quando o fluxo de execução do programa chegar a ela. Caso se deseje interromper a execução do **laço** antes que a `condição` se torne `falsa`, pode-se utilizar a declaração `break`. Caso se deseje interromper a execução da iteração atual do **laço** antes que o bloco de comandos tenha sido completamente executado e saltar para a próxima iteração, pode-se utilizar a declaração `continue`.

A seguir é apresentada a sintaxe da declaração `do... while...` em notação EBNF:

```
Do                       ::= 'do' Expression 'while' '(' Expression ')'
Break                    ::= 'break'
Continue                 ::= 'continue'
```

O exemplo a seguir ilustra o uso da declaração `do... while...`:

```
a = 0

do {
    system.println(a)
    a++
} while (a < 10);
```

### Declaração Enquanto...

A declaração `while...` executa uma `expressão` ou `bloco de comandos` `enquanto` uma dada `condição` for avaliada como `verdadeira`. A diferença desta declaração e da declaração `do... while...` é que aquela declaração **executa pelo menos uma vez** a sessão de código, mesmo que a `condição` já seja `falsa` quando o fluxo de execução do programa chegar a ela, enquanto a declaração `while...` **não executará nenhuma vez** caso a `condição` já seja `falsa` quando o fluxo de execução do programa chegar a ela.Caso se deseje interromper a execução do **laço** antes que a `condição` se torne `falsa`, pode-se utilizar a declaração `break`. Caso se deseje interromper a execução da iteração atual do **laço** antes que o bloco de comandos tenha sido completamente executado e saltar para a próxima iteração, pode-se utilizar a declaração `continue`.

A seguir é apresentada a sintaxe da declaração `while...` em notação EBNF:

```
While                    ::= 'while' '(' Expression ')' Expression
```

O exemplo a seguir ilustra o uso da declaração `while...`:

```
a = 0

while (a < 10) {
    if (a % 2 == 0) {
        continue
    }
    if (a >= 5) {
        system.println("Break the loop.")
        break
    }
    system.println(a)
    a++
}
```

### Declaração Para...

A declaração `for...` executa uma `expressão` ou `bloco de comandos` `enquanto` uma dada `condição` for avaliada como `verdadeira`. A diferença desta declaração e da declaração `while...` é que aquela declaração requer um controle interno da `condição` de execução para que em algum momento a `condição` se torne falsa e a execução do código seja interrompida. Esta declaração permite passar três argumentos: uma `expressão que será executado antes da primeira interação`, uma `expressão condicional` e uma `expressão que será avaliada ao final de cada iteração`. Pode-se usar o `primeiro parâmetro` para **inicializar uma variável de controle**, e o `último parâmetro` para **modificá-lo**. Caso se deseje interromper a execução do **laço** antes que a `condição` se torne `falsa`, pode-se utilizar a declaração `break`. Caso se deseje interromper a execução da iteração atual do **laço** antes que o bloco de comandos tenha sido completamente executado e saltar para a próxima iteração, pode-se utilizar a declaração `continue`.

A seguir é apresentada a sintaxe da declaração `for...` em notação EBNF:

```
For                      ::= 'for' '(' Expression ';' Expression ';' Expression ')' Expression
```

O exemplo a seguir ilustra o uso da declaração `for...`:

```
b = [1, 2, 3]

for (a = 0; a < 10; ++a) {
    system.println(a)
}

for (i = 0; i < b.length; i++) {
    system.println(b[i])
}
```

### Declaração Para cada...

A declaração `foreach...` executa uma `expressão` ou `bloco de comandos` `para cada` elemento de um `vetor associativo` ou `objeto`. Esta declação recebe três parâmetros: um `vetor associativo` ou `objeto`, uma `variável para conter a chave do vetor` ou `nome da propriedade do objeto` e uma `variável para conter o valor do elemento do vetor` ou objeto. Caso se deseje interromper a execução do **laço** antes que a `condição` se torne `falsa`, pode-se utilizar a declaração `break`. Caso se deseje interromper a execução da iteração atual do **laço** antes que o bloco de comandos tenha sido completamente executado e saltar para a próxima iteração, pode-se utilizar a declaração `continue`.

A seguir é apresentada a sintaxe da declaração `foreach...` em notação EBNF:

```
ForEach                  ::= 'foreach' '(' Expression ';' Expression ';' Expression ')' Expression
```

O exemplo a seguir ilustra o uso da declaração `foreach...`:

```
c = {a: 1, b: 2}

// Declaração foreach semelhante ao Tcl.
foreach(c; key; value) {
    system.println(key + ": " + value)
}
```

## Funções

```
FunctionDeclaration      ::= Identifier ('.' Identifier)* '(' Arguments? ')' '=' Expression
                           | Identifier ('.' Identifier)* '(' Arguments? ')' '?=' Block
                           | Identifier ('.' Identifier)* '(' Arguments? ')' '#=' Block
                           | Identifier ('.' Identifier)* '(' Arguments? ')' ':=' Block
                           | Type? Identifier ('.' Identifier)* '(' Arguments? ')' Block
                           | Type? Identifier ('.' Identifier)* '(' Arguments? ')' Script
Return                   ::= 'return' Expression
```

### Declaração de uma função

```
// Uma função recursiva.
factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}

system.println(factorial(5));
```

### Funções em linha

```
// Uma função em linha.
f(x) = 2 * x ** 2 + x - 1

system.println(f(2));
```

### Funções assíncronas

```
// Uma função assíncrona.
f(x) ?= {
    return x
}

// Uma chamada de função assíncrona.
a ?= f(2)
```

### Funções paralelas

```
// Uma função paralela.
task1(x) #= {
    i = 0
    timedCount #= () {
        i = i + 1
        postMessage(i)
        if (i < 10) {
            setTimeout(timedCount(), 500)
        }
    }
    timedCount()
}

onMessage1(m) {
    system.log("Task 1: " + m.data)
    if (m.data >= 5) {
        t1.terminate()
    }
}

try {
    t1 = task.new(task1)
    t1.onmessage = onMessage1
} catch (e) {
    system.log(e.message)
}
```

### Funções em MaiaAssembly

```
// Uma função em MaiaAssembly.
i32 f4(i32 a, i32 b, local i32 c) {
    c = a + b;
    return c;
}

// Chamando uma função em MaiaAssembly.
c = f(1, 2)
```

### Funções em JavaScript

```
// Uma função em JavaScript.
f(x) /{
    y = x + 1;
    return y;
}/

// Chamando uma função em JavaScript.
c = f(2)
```

### Funções em WebAssembly

```
// Uma função em WebAssembly.
i32 f(i32 a, i32 b) /{
    (i32.add
      (get_local $a)
      (get_local $b)
    )
}/

// Chamando uma função em WebAssembly.
f = f(1, 2)
```

## Criando namespaces e objetos

### Criando Namespaces

```
NamespaceDeclaration     ::= Identifier ('.' Identifier)* Block
```

```
// Criando um namespace (um objeto)
a {
    b = 1
    f(n) {
        if (n == 0 || n == 1) {
            return 1
        }
        return n * this.f(n - 1)
    }
}

system.println(a.b)
system.println(a.f(5))
```

### Construtores de Objetos

```
// Um construtor de objeto.
A(x) := {
    y = x
}

c := A(2)

system.println(c.y);
```