# Guia MaiaScript

MaiaScript é uma linguagem de programação focada na construção de aplicações adaptáveis e inteligentes, com ênfase na facilidade de aprendizagem e alto desempenho. Operações com números complexos e matrizes, criação e análise de redes complexas e sociais, redes neurais artificiais, acesso a bancos de dados SQL, programação paralela com threads e GPU, estatística avançada, computação algébrica, incluindo cálculo diferencial e integral e programação de aplicações desktop e web são suportadas nativamente.

Este manual cobre os fundamentos da programação em MaiaScript, apresentando exemplos práticos para as funcionalidades mais utilizadas e diretrizes gerais sobre o uso desta linguagem.

Para informações detalhadas sobre a gramática da linguagem MaiaScript consulte a descrição em EBNF e os diagramas de sintaxe disponíveis na pasta `docs` da sua distribuição do compilador MaiaScript.

## Tipos de dados

MaiaScript suporta três tipos de dados nativamente: `inteiro`, `real` e `string`. Esses tipos são automáticos, e você não precisa defini-los ao criar variáveis e funções comuns. Para uso exclusivo com funções em **WebAssembly** e **MaiaAssembly** são suportados os tipos `inteiro 32 bits`, `i32`, `inteiro 64 bits`, `i64`, `real 32 bits`, `f32` e `real 64 bits`, `f64`. Funções em **MaiaAssembly** são tratadas no capítulo sobre funções. Funções em **WebAssembly** estão além do escopo deste guia. Para mais informações veja o site oficial do projeto: <https://webassembly.org>.

## Saída de dados

MaiaScript permite a exibição de mensagens na tela do computador, ou na saída padrão, através de várias funções da biblioteca `system`, entre elas as mais utilizadas são `print`, `println`, `printf` e `showMessageDialog`. O exemplo seguinte ilustra o uso dessas funções:

```
system.println("Olá Mundo!")
system.showMessageDialog("Olá Mundo!")
system.printf("%d, %.3f, %s", 1, 1.23456, "Olá Mundo!")
```

## Entrada de dados

Você pode ler dados inseridos pelo usuário usando a função `showInputDialog` da biblioteca `system`. Esta função exibe uma caixa de diálogo com a mensagem passada como parâmetro e um botão de confirmação, que ao ser clicado, retorna o valor inserido na caixa de texto exibida. O exemplo seguinte ilustra o uso desta função:

```
a = system.showInputDialog("Digite um número:")
system.println(a)
```

## Variáveis

Variáveis são contêineres onde armazenamos dados para processamento ou resultados de processamento. Em MaiaScript as variáveis podem armazenar valores de qualquer tipo, e não é necessário especificar o tipo de dado que a variável armazenará no momento de sua criação. No entanto, ao criar funções em **MaiaAssembly** ou **WebAssembly**, você deve especificar o tipo de dado que a variável armazenará e esta variável só poderá armazenar valores deste tipo de dado durante toda a sua existência. Os tipos `inteiro 32 bits`, `i32`, `inteiro 64 bits`, `i64`, `real 32 bits`, `f32`, `real 64 bits`, `f64` são suportados. Funções em **MaiaAssembly** são tratadas no capítulo sobre funções. Funções em **WebAssembly** estão além do escopo deste guia. Para mais informações veja o site oficial do projeto: <https://webassembly.org>. O exemplo seguinte mostra como criar variáveis de vários tipos:

```
a = 1
system.println(a)
b = 2.0
system.println(b)
c = "Olá Mundo!"
system.println(c)
d = [1, 2.0]
system.println(d)
e = []
system.println(e)

// Vetores similares ao JavaScript.
f = [[1, 2],[3, 4]]
system.println(f)

// Matrizes no estilo Matlab.
g = [5, 6; 7, 8]
system.println(g)

// Objetos no estilo JavaScript.
h = {a: 1, b: 2.0, "c": "Olá Mundo!"}
system.println(JSON.stringify(h))
i = {}
system.println(JSON.stringify(i))
```

## Operadores

MaiaScript suporta operadores matemáticos, relacionais, lógicos, operação de deslocamento de bits, operadores de atribuição combinados e operador condicional ternário. A seguir está uma notação EBNF para todos os operadores suportados pela linguagem. A ordem de precedência é de cima para baixo.

```
maiascript               ::= expression*
                           | eof

operation                ::= variableAssignment
variableAssignment       ::= conditionalExpression (('=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|=' | '?=' | ':=') conditionalExpression)*

conditionalExpression    ::= logicalORExpression ('?' expression ':' expression)?

logicalXORExpression     ::= logicalORExpression ('^^' logicalORExpression)*
logicalORExpression      ::= logicalANDExpression ('||' logicalANDExpression)*
logicalANDExpression     ::= bitwiseXORExpression ('&&' bitwiseXORExpression)*
bitwiseXORExpression     ::= bitwiseORExpression ('^' bitwiseORExpression)*
bitwiseORExpression      ::= bitwiseANDExpression ('|' bitwiseANDExpression)*
bitwiseANDExpression     ::= equalityExpression ('&' equalityExpression)*

equalityExpression       ::= relationalExpression (('==' | '!=') relationalExpression)*
relationalExpression     ::= shiftExpression (('<' | '>' | '<=' | '>=') shiftExpression)*
shiftExpression          ::= additiveExpression (('<<' | '>>') additiveExpression)*
additiveExpression       ::= powerExpression (('+' | '-') powerExpression)*
powerExpression          ::= multiplicativeExpression ('**' multiplicativeExpression)*
multiplicativeExpression ::= unaryExpression (('*' | '/' | '%') unaryExpression)*

unaryExpression          ::= '++' primary
                           | '--' primary
                           | primary '++'
                           | primary '--'
                           | '+' primary
                           | '-' primary
                           | '~' primary
                           | '!' primary
                           | primary

primary                  ::= member
                           | value
                           | parenthesizedExpression
                           | type identifier
```

Nas próximas sessões abordaremos cada um desses operadores.

### Operadores matemáticos

MaiaScript suporta os seguintes operadores matemáticos: **adição**, `+`, **subtração**, `-`, **potenciação**, `**`, **multiplicação**, `*`, **divisão**, `/` e **resto da divisão**, `%`. Os exemplos seguintes mostram como usar estes operadores:

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

// Operador de potência similar ao Python.
c = a ** b
system.println(c)

// Operadores de incremento e decremento similares ao C.
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

MaiaScript suporta os seguintes operadores relacionais: **igual**, `==`, **diferente**, `!=`, **menor**, `<`, **menor ou igual**, `<=`, **maior**, `>` e **maior ou igual**, `>=`. Os exemplos seguintes mostram como usar estes operadores:

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

MaiaScript suporta os seguintes operadores lógicos: **XOR lógico**, `^^`, **OR lógico**, `||`, **AND lógico**, `&&`, **AND bit a bit**, `&`, **XOR bit a bit**, `^` e **OR bit a bit**, `|`. Os exemplos seguintes mostram como usar estes operadores:

```
a = 1
b = 0

c = a && b
system.println(c)
c = a || b
system.println(c)
c = a ^^ b
system.println(c)
c = a & b
system.println(c)
c = a | b
system.println(c)
c = a ^ b
system.println(c)
```

### Operadores de deslocamento de bits

MaiaScript suporta os seguintes operadores de deslocamento: **deslocamento à esquerda**, `<<`, e **deslocamento à direita**, `>>`. Os exemplos seguintes mostram como usar estes operadores:

```
a = 3

c = a << 2
system.println(c)
c = a >> 2
system.println(c)
```

### Operadores de atribuição

MaiaScript suporta os seguintes operadores especiais de operação seguida de atribuição: `*=` , `/=` , `%=` , `+=` , `-=` , `<<=` , `>>=` , `&=` , `^=` , `|=`, `?=`, `:=`. A seguir estão exemplos dos usos mais comuns destes operadores:

```
c = a += b
system.println(c)
c = a -= b
system.println(c)
```

### Operador condicional (ternário)

A linguagem MaiaScript oferece um **operador condicional ternário**. Este operador recebe três operandos: uma `expressão condicional`, uma `expressão que é retornada se a condição for avaliada como verdadeira` e uma `expressão que é retornada se a condição for avaliada como falsa`. No exemplo seguinte, como a variável `a` contém o valor `1` a condição `a == 1` será avaliada como `verdadeira` e a expressão `Olá` será retornada.

```
a = 1

c = a == 1 ? "Olá" : "Mundo"
system.println(c)
```

### Números complexos

MaiaScript suporta **números complexos** nativamente para os operadores `+`, `-`, `**`, `*` e `/` e para as funções matemáticas `abs`, `arg`, `cos`, `cosh`, `exp`, `log`, `sin`, `sinh`, `sqrt`, `tan` e `tanh`. Várias funções especializadas também estão disponíveis na biblioteca `core`. Para todas as funções MaiaScript que suportam números complexos, veja a documentação da biblioteca na pasta `docs` na sua distribuição do compilador MaiaScript.

A seguir é apresentada em notação EBNF a sintaxe dos números complexos em MaiaScript:

```
complex                  ::= real? imaginary
real                     ::= '-'? digit+ ('.' digit+)? (('e' | 'E') ('+' | '-')? digit+)?
imaginary                ::= (('+' | '-')? real '*' 'i')
digit                    ::= [0-9]
```

O exemplo seguinte ilustra a operação de soma com dois números complexos:

```
e = 1.0+2.0*i
f = 3.0+4.0*i
g = e + f
system.println(g)
```

### Matrizes

MaiaScript suporta matrizes nativamente para os operadores `+`, `-`, `**`, e `*` e oferece a biblioteca `matrix` para álgebra linear. Várias funções especializadas também estão disponíveis na biblioteca `core`. Para todas as funções MaiaScript que suportam matrizes, veja a documentação das bibliotecas na pasta `docs` na sua distribuição do compilador MaiaScript.

A seguir é apresentada em notação EBNF a sintaxe dos **vetores associativos** e **matrizes** em MaiaScript:

```
array                    ::= '{' element? (',' element)* '}'
matrix                   ::= '[' row? (';' row)* ']'

element                  ::= (key ':')? expression
key                      ::= string

row                      ::= column (',' column)*
column                   ::= expression
```

Em MaiaScript você pode usar tanto a notação de matrizes do **Matlab** quanto do **JavaScript**. Na notação Matlab as colunas são separadas por `vírgulas`, `,`, e as linhas por `ponto e vírgula`, `;`. Na notação javascript cada linha deve ser indicada entre colchetes `[]` e linhas separadas por `vírgulas`, `,`. O exemplo seguinte apresenta exemplos de operações com matrizes usando as duas notações:

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

MaiaScript oferece duas declarações para controle de fluxo: `if... else...` e `switch`. Ambas as estruturas estão disponíveis tanto em MaiaScript quanto em MaiaAssembly. Estas declarações serão apresentadas nas próximas sessões, bem como exemplos de seus usos.

### Declaração If... Então...

A declaração `if... else...` permite decidir, avaliando uma `condição` executando uma sessão de `código de programa` ou não. A `expressão condicional` deve ser escrita imediatamente após a palavra `if` e entre `parênteses`. Se esta expressão for avaliada como `verdadeira` a `expressão` ou `bloco de comandos` imediatamente após os `parênteses` é executada, caso contrário a `expressão` ou `bloco de comandos` imediatamente após a palavra `else` é executada. A cláusula `else` é opcional.

A seguir está a sintaxe da declaração `if... else...` em notação EBNF:

```
if                       ::= 'if' '(' expression ')' statement elseif* else?
elseif                   ::= 'elseif' '(' expression ')' statement
else                     ::= 'else' statement
```

O exemplo seguinte ilustra o uso da declaração `if... else...`:

```
a = 1
b = 2

// Declaração if similar ao C.
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

### Declaração Switch... Case...

A declaração `switch... case... default...` permite decidir, comparando uma `expressão` com vários `casos` fornecidos, executando uma sessão de `código de programa` ou não. A `expressão condicional` deve ser escrita imediatamente após a palavra `switch` e entre `parênteses`. Esta `expressão` será comparada com cada `caso` fornecido e se uma **equivalência** for encontrada a `expressão` ou `bloco de comandos` imediatamente após o `dois pontos` do `caso` é executada. Se nenhum dos casos corresponder à `expressão` fornecida, a `expressão` ou `bloco de comandos` imediatamente após o `dois pontos` do caso `default` é executada. A cláusula `default` é opcional.

A seguir está a sintaxe da declaração `switch... case... default...` em notação EBNF:

```
switch                   ::= 'switch' '(' expression ')' '{' case* default? '}'
case                     ::= 'case' expression ':' (statement | expression)*
default                  ::= 'default' ':' (statement | expression)*
```

O exemplo seguinte ilustra o uso da declaração `switch... case... default...`:

```
a = 1

// Declaração switch similar ao C.
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
Estruturas de loop permitem executar uma sessão de programa um número de vezes ou até que uma condição seja satisfeita. MaiaScript oferece quatro estruturas de loop: `do... while`, `while...`, `for` e `foreach`. Todas estas declarações estão disponíveis tanto em MaiaScript quanto em MaiaAssembly. Estas declarações serão apresentadas nas próximas sessões, bem como exemplos de seus usos.

### Declaração Do...

A declaração `do... while...` executa uma `expressão` ou `bloco de comandos` `enquanto` uma determinada `condição` for avaliada como `verdadeira`. A diferença desta declaração e da declaração `while...` é que esta declaração **executa a sessão de código pelo menos uma vez**, mesmo se a `condição` já for `falsa` quando o fluxo de execução do programa alcançá-la, enquanto a declaração `while...` **não executará de forma alguma** se a `condição` já for `falsa` quando o fluxo de execução do programa alcançá-la. Se você deseja interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a declaração `break`. Se você quiser parar a execução da iteração atual do **loop** antes que o bloco de comandos tenha sido totalmente executado e pular para a próxima iteração, você pode usar a declaração `continue`.

A seguir está a sintaxe da declaração `do... while...` em notação EBNF:

```
do                       ::= 'do' statement 'while' '(' expression ')'
break                    ::= 'break'
continue                 ::= 'continue'
```

O exemplo seguinte ilustra o uso da declaração `do... while...`:

```
a = 0

do {
    system.println(a)
    a++
} while (a < 10)
```

### Declaração While...

A declaração `while...` executa uma `expressão` ou `bloco de comandos` `enquanto` uma determinada `condição` for avaliada como `verdadeira`. A diferença desta declaração e da declaração `do... while...` é que aquela declaração **executa a sessão de código pelo menos uma vez**, mesmo se a `condição` já for `falsa` quando o fluxo de execução do programa alcançá-la, enquanto a declaração `while...` **não executará de forma alguma** se a `condição` já for `falsa` quando o fluxo de execução do programa alcançá-la. Se você deseja interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a declaração `break`. Se você quiser parar a execução da iteração atual do **loop** antes que o **bloco de comandos** tenha sido totalmente executado e pular para a próxima iteração, você pode usar a declaração `continue`.

A seguir está a sintaxe da declaração `while...` em notação EBNF:

```
while                    ::= 'while' '(' expression ')' statement
```

O exemplo seguinte ilustra o uso da declaração `while...`:

```
a = 0

while (a < 10) {
    if (a % 2 == 0) {
        a++
        continue
    }
    if (a >= 5) {
        system.println("Interrompe o loop.")
        break
    }
    system.println(a)
    a++
}
```

### Declaração For...

A declaração `for...` executa uma `expressão` ou `bloco de comandos` enquanto uma determinada `condição` for avaliada como `verdadeira`. A diferença desta declaração e da declaração `while...` é que aquela declaração requer controle interno da execução para que em algum ponto do fluxo de execução a `condição` se torne falsa e a execução do código seja interrompida. Esta declaração permite passar três argumentos: uma `expressão que será executada antes da primeira interação`, uma `expressão condicional` e uma `expressão que será avaliada ao final de cada iteração`. Você pode usar o `primeiro parâmetro` para **inicializar uma variável de controle**, e o `último parâmetro` para **modificá-la**. Se você deseja interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a declaração `break`. Se você quiser parar a execução da iteração atual do **loop** antes que o **bloco de comandos** tenha sido totalmente executado e pular para a próxima iteração, você pode usar a declaração `continue`.

A seguir está a sintaxe da declaração `for...` em notação EBNF:

```
for                      ::= 'for' '(' (expression? | variableDeclaration) ';' expression? ';' expression? ')' statement
variableDeclaration      ::= type? identifier ('=' expression)?
```

O exemplo seguinte ilustra o uso da declaração `for...`:

```
b = [1, 2, 3]

for (a = 0; a < 10; ++a) {
    system.println(a)
}

for (i = 0; i < b.length; i++) {
    system.println(b[i])
}

// Com declaração de variável
for (i32 i = 0; i < 10; i++) {
    system.println(i)
}
```

### Declaração Foreach...

A declaração `foreach...` executa uma `expressão` ou `bloco de comandos` `para cada` elemento de um `vetor associativo` ou `objeto`. Esta declaração recebe três parâmetros: um `array associativo` ou `objeto`, uma `variável para conter a chave do array` ou `nome da propriedade do objeto` e uma `variável para conter o valor do elemento do array` ou `objeto`. Se você deseja interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a declaração `break`. Se você quiser parar a execução da iteração atual do **loop** antes que o **bloco de comandos** tenha sido totalmente executado e pular para a próxima iteração, você pode usar a declaração `continue`.

A seguir está a sintaxe da declaração `foreach...` em notação EBNF:

```
foreach                  ::= 'foreach' '(' expression ';' identifier ';' identifier ')' statement
```

O exemplo seguinte ilustra o uso da declaração `foreach...`:

```
c = {a: 1, b: 2}

// Declaração foreach similar ao Tcl.
foreach(c; chave; valor) {
    system.println(chave + ": " + valor)
}
```

## Funções

Funções e procedimentos são sub-rotinas de programa que podem ser executadas invocando seus nomes. MaiaScript suporta vários tipos de funções. Nas próximas sessões discutiremos cada uma delas.

A seguir está a sintaxe para os vários tipos de `funções` MaiaScript em notação EBNF:

```
function                 ::= ('async' | 'function' | 'plain')? identifier ('.' identifier)* '(' arguments? ')' ( block | '=' expression )
arguments                ::= expression (',' expression)*
return                   ::= 'return' expression?
```

### Declaração de função

Declaramos uma `função` escrevendo seu `nome`, seguido de `parênteses`, que podem ou não conter `argumentos` separados por `vírgulas`, `,`, e um `bloco de comandos` entre `chaves`, `{}`. Funções em MaiaScript podem usar modificadores como `async`, `function`, ou `plain`, e usar ou não `operadores de atribuição especiais`, `=` em sua declaração.

Se um `tipo de retorno` for indicado na declaração da função, ela é interpretada como sendo uma função em **MaiaAssembly** ou em **WebAssembly**. Em ambos os casos você deve especificar os `tipos de valor` dos argumentos da função se ela tiver `argumentos`. Se as `chaves`, `/{ /}` dos `blocos de comandos` forem precedidas pelo caractere `/` a função é interpretada como sendo em **WebAssembly**, caso contrário é considerada em **MaiaAssembly**. Funções MaiaScript podem ser **recursivas**, isto é, chamar a si mesmas para executar tarefas complexas. O exemplo seguinte ilustra a função `fatorial` implementada usando um algoritmo recursivo:

```
// Uma função recursiva.
fatorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    return n * fatorial(n - 1)
}
system.println(fatorial(5))
```

### Funções inline

Para funções mais simples, que podem ser implementadas em apenas uma linha, você pode usar a forma simplificada de declaração de função. Esta forma permite escrever uma função como normalmente é feito em matemática, usando o `operador de atribuição`, `=`, e omitindo as `chaves` do `bloco de comandos`. O exemplo seguinte mostra a declaração de uma função de segundo grau:

```
// Uma função inline.
f(x) = 2 * x ** 2 + x - 1

system.println(f(2))
```

### Funções assíncronas

Funções podem ser **executadas assincronamente**. Para fazer isso, você deve declarar a função usando o modificador `async`. Para esperar que a **função assíncrona** termine sua execução, bloqueando o **fluxo de execução** do resto do programa, você deve usar a palavra-chave `await`.

```
// Uma função assíncrona.
async f(x) {
    return x
}

// Uma chamada de função assíncrona.
a = await f(2)
```

### Funções paralelas

MaiaScript permite criar funções paralelas usando **threads** ou **núcleos de GPU**. Em ambos os casos as funções precisam ser do tipo `kernel`. Funções `kernel` devem ser criadas usando o operador `#=`. Uma função `kernel` é compilada diferente das outras funções. Elas não suportam operações com números complexos ou cálculos com matrizes. Apenas os tipos de dados básicos e funcionalidades do JavaScript são suportados. O exemplo seguinte mostra como criar uma **thread** em MaiaScript. Para mais detalhes veja a documentação da biblioteca `task` disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```
tarefa1() #= {
    i = 0
    contagemTemporizada() #= {
        i++
        postMessage(i)
        if (i < 10) {
            setTimeout(contagemTemporizada(), 500)
        }
    }
    contagemTemporizada()
}

aoReceberMensagem1(m) {
    system.log("Tarefa 1: " + m.data)
    if (m.data >= 5) {
        t1.terminate()
    }
}

try {
    t1 = task.new(tarefa1)
    t1.onmessage = aoReceberMensagem1
} catch (e) {
    system.log(e.message)
}
```

### Funções em MaiaAssembly

**MaiaAssembly** é uma linguagem de programação otimizada para construção para **WebAssembly**. Ela permite criar algoritmos tão rápidos quanto programas escritos em linguagem C, incorporados em programas de alto nível em MaiaScript. Funções em **MaiaAssembly** são tipadas, o que significa que você deve declarar os tipos de funções e variáveis no momento de suas criações. Os tipos suportados em **MaiaAssembly** são `inteiro 32 bits`, `i32`, `inteiro 64 bits`, `i64`, `real 32 bits`, `f32` e `real 64 bits`, `f64`. Todas as estruturas de decisão e loop do **MaiaScript** são suportadas em **MaiaAssembly**. Além disso, `matrizes` de dimensões arbitrárias dos `tipos` de dados suportados são suportadas. Você não pode passar objetos ou mesmo arrays como argumentos de função **MaiaAssembly**, mas pode importá-los. A declaração `import` é usada para isso. Ela permite importar propriedades de objetos para a função e usá-las como se fossem variáveis locais. Em **MaiaAssembly** é possível criar **variáveis globais** usando a declaração `global`. Variáveis globais são acessíveis de qualquer lugar do programa. O exemplo seguinte mostra como criar uma função para somar dois valores passados a ela como argumentos. A função também cria uma `variável local` para armazenar o resultado da soma. Variáveis locais devem ser declaradas no cabeçalho da função e devem aparecer após os argumentos da função.

```
// Uma função em MaiaAssembly.
i32 f(i32 a, i32 b) {
    i32 c = a + b
    return c
}

// Chamando uma função em MaiaAssembly.
c = f(1, 2)
```

### Funções em WebAssembly

Funções em **WebAssembly** são montadas pelo montador e inseridas em forma binária no código resultante da compilação. Elas são tipadas, o que significa que você precisa declarar os tipos de funções e variáveis no momento de suas criações. Os tipos suportados em **WebAssembly** são `inteiro 32 bits`, `i32`, `inteiro 64 bits`, `i64`, `real 32 bits`, `f32` e `real 64 bits`, `f64`. `Variáveis locais` devem ser declaradas no cabeçalho da função e devem aparecer após os argumentos da função. O exemplo seguinte mostra como criar uma função para somar dois valores passados a ela como argumentos:

```
// Uma função em WebAssembly.
i32 f(i32 a, i32 b) /{
    (i32.add
      (local.get $a)
      (local.get $b)
    )
}/

// Chamando uma função em WebAssembly.
c = f(1, 2)
```

## Criando namespaces e objetos

**Namespaces** são uma maneira de organizar funções e variáveis para construir bibliotecas. O uso de `namespaces` não só torna o código mais organizado e reutilizável, mas também torna o acesso aos recursos da biblioteca mais eficiente. Todo namespace é um `objeto`, mas `namespaces` não são `construtores de objetos`. Para criar `objetos` devemos criar `construtores` para eles. Nas próximas sessões veremos como criar `namespaces` e `construtores de objetos`.

### Criando namespaces

Criamos um namespace definindo um `nome` para ele e um `bloco de código` contendo variáveis e funções.

A seguir está a sintaxe para criar `namespaces` em notação EBNF:

```
namespace                ::= 'namespace' identifier ('.' identifier)* block
```

O exemplo seguinte ilustra como criar um `namespace` contendo uma `variável`, `propriedade` e uma `função`, `método`:

```
// Criando um namespace (um objeto)
namespace a {
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

### Construtores de objetos

**Construtores de objetos** permitem criar `instanciações de classe` definidas por eles. `Classes` são **modelos** para `objetos`. Elas definem suas `propriedades`, características mutáveis em tempo de execução, e seus `métodos`, funcionalidades dos objetos. Para criar um `construtor de objetos` definimos uma função usando o `operador de criação de objeto`, `:=`. Para **instanciar** um `objeto` atribuímos a uma variável o valor de retorno do `construtor de objetos`, usando o `operador de criação de objeto`, `:=`. O exemplo seguinte cria um `objeto` que tem uma propriedade `y` e atribui a essa variável o valor passado ao construtor no momento de sua criação:

```
// Um construtor de objetos.
A(x) := {
    y = x
}

c := A(2)

system.println(c.y)
```

## Redes complexas e sociais

MaiaScript fornece várias funções para criar e **analisar redes complexas e sociais**. Essas funcionalidades estão disponíveis nas bibliotecas `cna` e `snet`. Os exemplos seguintes mostram as aplicações mais comuns para as funções dessas bibliotecas. Para uma referência completa veja a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```
// Cria um arquivo de rede no formato Pajek.
conteudoArquivo = ""
conteudoArquivo = conteudoArquivo + "*Vertices 10" + "\r\n"
conteudoArquivo = conteudoArquivo + "1\"v1\" -13.53320569881955 15.024369378567805 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "2 \"v2\" 138.57890381783866 -149.73844730901712 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "3\"v3\" -195.0525404708813 294.7061191626409 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "4\"v4\" -4.710077309561689 -119.03537285786881 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "5\"v5\" 276.72724773173434 -241.1655959044472 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "6 \"v6\" 218.72444256014836 -294.7061191626409 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "7 \"v7\" 119.53996984903722 -4.504246484231039 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "8 \"v8\" -276.72724773173434 219.58638008091668 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "9 \"v9\" -80.8765683805954 206.98274428233245 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "10 \"v10\" -198.91296298859544 98.42821322326704 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "*Arcs" + "\r\n"
conteudoArquivo = conteudoArquivo + "1 2 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "1 4 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "1 7 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "1 9 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "1 10 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "2 1 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "2 4 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "2 5 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "2 6 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "2 7 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "3 8 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "3 9 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "4 1 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "4 2 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "5 2 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "5 6 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "6 2 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "6 5 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "7 1 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "7 2 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "8 3 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "8 10 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "9 1 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "9 3 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "10 1 1" + "\r\n"
conteudoArquivo = conteudoArquivo + "10 8 1" + "\r\n"

// Objeto para conter propriedades da rede.
propriedade = {
    "adj": [],
    "n": 0,
    "m": 0,
    "direcionada": false,
    "densidade": 0,
    "rotuloRede": [],
    "grauRede": [],
    "grauMedioRede": 0,
    "distribuicaoGrauRede": [],
    "densidadeRede": 0,
    "agrupamentoRede": [],
    "agrupamentoMedioRede": 0,
    "caminhoMaisCurtoRede": [],
    "caminhoMaisCurtoMedioRede": 0,
    "diametroRede": 0,
    "centralidadeRede": [],
    "eficienciaVerticeRede": [],
    "eficienciaGlobalRede": 0
}

// Converte o arquivo em um array de adjacência.
propriedade.adj = cna.parsePajekFile(conteudoArquivo, propriedade)

// Calcula a densidade da rede.
propriedade.densidadeRede = cna.getDensity(propriedade.adj, propriedade.direcionada)

// Calcula os graus dos vértices e o grau médio da rede.
propriedade.grauRede = cna.getDegrees(propriedade.adj, propriedade.direcionada)
propriedade.grauMedioRede = cna.getAverageDegree(propriedade.grauRede)

// Calcula os coeficientes de agrupamento dos vértices e o coeficiente de agrupamento médio da rede.
propriedade.agrupamentoRede = cna.getClustering(propriedade.adj, propriedade.direcionada)
propriedade.agrupamentoMedioRede = cna.getAverageClustering(propriedade.agrupamentoRede)

// Calcula os caminhos mais curtos entre os vértices e o caminho mais curto médio da rede.
propriedade.caminhoMaisCurtoRede = cna.getShortestPath(propriedade.adj)
propriedade.caminhoMaisCurtoMedioRede = cna.getAverageShortestPath(propriedade.caminhoMaisCurtoRede)

// Calcula o diâmetro da rede.
propriedade.diametroRede = cna.getDiameter(propriedade.caminhoMaisCurtoRede)

// Calcula a eficiência global da rede.
propriedade.eficienciaGlobalRede = cna.getGlobalEfficiency(propriedade.eficienciaVerticeRede)
```

## Redes neurais artificiais

MaiaScript fornece funções para criar e treinar **redes neurais artificiais** de várias topologias. Essas funcionalidades estão disponíveis na biblioteca `ann`. Os exemplos seguintes mostram as aplicações mais comuns para as funções desta biblioteca. Para uma referência completa veja a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```
// Callback.
callbackTreinamento(epocas, RSS, correcao, ETL) {
    system.println("Épocas: " + core.toString(epocas) + ", RSS: " + core.toString(RSS) + ", Correção: " + core.toString(correcao) + ", ETL: " + core.toString(ETL))
}

// Dados para treinar.
// O algoritmo de treinamento espera um array com uma linha para cada dado e uma coluna para cada neurônio de entrada ou saída.
dadosX = [[0.00],[0.25],[0.50],[0.75],[1.00],[1.25],[1.50],[1.75],[2.00],[2.25],[2.50],[2.75],[3.00],[3.25],[3.50],[3.75],[4.00],[4.25],[4.50],[4.75],[5.00],[5.25],[5.50],[5.75],[6.00],[6.25],[6.50],[6.75],[7.00],[7.25],[7.50],[7.75],[8.00],[8.25],[8.50],[8.75],[9.00],[9.25],[9.50],[9.75],[10.00]]
dadosY = [[2.0000],[2.2197],[2.3811],[2.5136],[2.7310],[2.7827],[2.8327],[3.0351],[2.9551],[3.3973],[3.5117],[3.5909],[3.7345],[3.8419],[4.0952],[4.2879],[4.4000],[4.8764],[5.2843],[5.9241],[6.3302],[6.9608],[7.3044],[7.6791],[8.2819],[9.0139],[9.3387],[10.0420],[10.4000],[10.6437],[10.4786],[10.4928],[10.7082],[10.6233],[10.8862],[10.6830],[10.8393],[10.9186],[10.8814],[10.9779],[11.0000]]
nDados = core.length(dadosX)

// Cria uma rede neural multilayerperceptron.
rn = ann.createANN("mlp", 0, 0, 0, 0, 1, 1, 1, 3)

// Exibe a rede neural não treinada.
system.println("RNA antes de ser preparada: " + core.toString(rn))
system.println(core.toString(ann.getLabels(rn)))

// Atribui pesos iniciais aleatórios para as sinapses neurais.
rn = ann.prepare(rn, true, true, true)
system.println("RNA depois de ser preparada: " + core.toString(rn))

// Treina a rede neural.
estatisticas = ann.training(rn, dadosX, dadosY, 0.005, "tanh", "linear", "none", [1, 0], 2000, 0.001, callbackTreinamento, 100)

// Exibe estatísticas de treinamento.
system.println("Estatísticas: " + core.toString(estatisticas))

// Exibe rede neural treinada.
system.println("RNA treinada: " + core.toString(rn))

// Usa a rede treinada para estimar o valor da função.

system.println("A saída deve ser f(0.50) = 2.3811")
saida = ann.think(rn, [0.50], 1, 1, "tanh", "linear", "none", [1, 0])
system.println("RNA para f(0.50): " + core.toString(rn))
system.println("f(0.50) = " + saida[0])

system.println("A saída deve ser f(1.25) = 2.7827")
saida = ann.think(rn, [1.25], 1, 1, "tanh", "linear", "none", [1, 0])
system.println("RNA para f(1.25): " + core.toString(rn))
system.println("f(1.25) = " + saida[0])

system.println("A saída deve ser f(5.00) = 6.3302")
saida = ann.think(rn, [5.00], 1, 1, "tanh", "linear", "none", [1, 0])
system.println("RNA para f(5.00): " + core.toString(rn))
system.println("f(5.00) = " + saida[0])

system.println("A saída deve ser f(5.1267) = 6.65671")
saida = ann.think(rn, [5.1267], 1, 1, "tanh", "linear", "none", [1, 0])
system.println("RNA para f(5.1267): " + core.toString(rn))
system.println("f(5.1267) = " + saida[0])
```

## Banco de dados SQL

MaiaScript suporta nativamente o banco de dados **SQLite** mas pode usar qualquer banco de dados suportado pelo **Node.js**. Essas funcionalidades estão disponíveis na biblioteca `core`. O exemplo seguinte cria um banco de dados, uma tabela, e insere dados na tabela criada. Para uma referência completa veja a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```
manipuladorDados(transacao, resultados) {
}

manipuladorErro(transacao, erro) {
}

criarTabela(transacao) {
    esquema = ""
    esquema = esquema + "CREATE TABLE pessoas(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
    esquema = esquema + "nome TEXT NOT NULL DEFAULT `João Silva`,"
    esquema = esquema + "camisa TEXT NOT NULL DEFAULT `Roxo`);"
    transacao.executeSql(esquema, [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`José`, `Verde`);", [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`Marcos`, `Azul`);", [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`Felipe`, `Laranja`);", [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`jsilva`, `Roxo`);", [], manipuladorDados, manipuladorErro)
}

// Abre o banco de dados se ele existe ou cria um novo se não existir.
bd = core.openSQLDatabase("Teste", "1.0", "Teste", 65536)

// Cria uma tabela e insere dados nela.
if (typeof(bd) != "undefined") {
    bd.transaction(criarTabela)
}
```

## Programação paralela usando GPU

Você pode acelerar o processamento em alguns problemas usando **programação paralela**. MaiaScript permite paralelismo real usando **núcleos de GPU** se esta funcionalidade estiver disponível na máquina hospedeira. Caso não esteja, o compilador MaiaScript compilará o programa para execução sequencial. As funções de computação GPU são chamadas de *shaders*. Essas funções são compiladas de forma diferente pelo compilador MaiaScript e não suportam números complexos ou cálculos com matrizes. As funcionalidades de programação GPU estão disponíveis na biblioteca `gpu`. Para uma referência completa veja a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

O exemplo seguinte mostra como criar uma função para multiplicação paralela de duas matrizes. Uma versão sequencial do cálculo para comparação de performance também é implementada.

```
// Cria duas matrizes 512x512.
a = core.zero(512, 512)
b = core.zero(512, 512)

// Preenche as matrizes.
for (i = 0; i < 512; i = i + 1) {
    for (j = 0; j < 512; j = j + 1) {
        v = i * 512 + j
        a[i, j] = v
        b[i, j] = v
    }
}

// Função paralela.
shader #= (a, b) {
    local soma = 0
    for (local i = 0; i < 512; i = i + 1) {
        soma = soma + a[this.thread.y, i] * b[i, this.thread.x]
    }
    return(soma)
}

// Função de computação usando gpu.
usarGPU ?= () {
    dispositivo = gpu.new()
    multiplicarMatrizes = dispositivo.createKernel(shader)
    multiplicarMatrizes.setOutput([512, 512])
    
    tempoInicio := Date()
    c = multiplicarMatrizes(a, b)
    tempoFim := Date()
    
    tempoDecorrido = tempoFim - tempoInicio
    
    system.log("Resultado GPU:")
    system.log("c[511,511]: " + c[511,511])
    system.log("Tempo decorrido: " + tempoDecorrido + " ms\n")
}

// Função de computação usando a CPU.
usarCPU ?= () {
    tempoInicio := Date()
    d = core.zero(512, 512)
    for (i = 0; i < 512; i = i + 1) {
        for (j = 0; j < 512; j = j + 1) {
            s = 0
            for (k = 0; k < 512; k = k + 1) {
                s = s + a[i, k] * b[k, j]
            }
            d[i, j] = s
        }
    }
    tempoFim := Date()
    
    tempoDecorrido = tempoFim - tempoInicio
    
    system.log("Resultado CPU:")
    system.log("d[511,511]: " + d[511,511])
    system.log("Tempo decorrido: " + tempoDecorrido + " ms\n")
}

// Inicia cálculo.
usarGPU()
usarCPU()
```

## Estatística avançada

MaiaScript oferece várias funções estatísticas para operações com **matrizes** e arquivos **CSV**. Essas funções estão disponíveis nas bibliotecas `matrix`, `statistics` e `dfa`. A biblioteca `statistics` implementa funções para cálculos de **médias**, **desvios** e **erros padrão**, bem como funções envolvendo **números aleatórios** e **distribuição normal**, incluindo o cálculo da **inversa da distribuição normal**. A biblioteca `dfa` implementa cálculos de **DFA**, **DCCA** e **rhoDCCA**. Para uma referência completa veja a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

Os exemplos seguintes mostram aplicações comuns para funções de bibliotecas estatísticas:

```
a = [1.0,0;0,1,0;0,0,1]
b = [1,2,3;4,5,6;7,8,9]
c = [2.3,-1;4,4,-3;2,-3,1]
d = core.matrix(0, 1, 3)
e = core.matrix(0, 3, 3)
media = matrix.avg(b)
system.println("media(b) = " + media.avg + ", desvio(b) = " + media.dev)
system.println("contagem(a) = " + matrix.count(a))
system.println("max(b) = " + matrix.max(b))
system.println("min(b) = " + matrix.min(b))
system.println("trans(b) = " + core.toString(matrix.trans(b)))
system.println("det(c) = " + core.det(c))
system.println("diag(c) = " + core.toString(core.diag(c)))
system.println("triang(c) = " + core.toString(matrix.triang(c)))
system.println("cross([1,2,3], [4,5,6]) = " + core.toString(matrix.cross([1,2,3], [4,5,6])))
system.println("dot([1,2,5], [2,-7,12]) = " + core.toString(matrix.dot([1,2,5], [2,-7,12])))
system.println("dim([1,2,3]) = " + core.toString(core.dim([1,2,3]))
system.println("d = " + core.toString(d))
system.println("e = " + core.toString(e))
```

## Computação algébrica

MaiaScript tem um **CAS (Sistema de Álgebra Computacional)** completo implementado na biblioteca `cas`. Este CAS permite simplificar expressões, resolver equações e realizar operações complexas de álgebra linear e cálculo diferencial e integral. O CAS é baseado na biblioteca *open source* **Algebrite**. Para uma referência completa veja a documentação oficial do projeto Algebrite <http://algebrite.org>. A única exceção é que o Algebrite originalmente usa o operador `ˆ` para potenciação e no MaiaScript o `operador de potência` é `**`. Os exemplos seguintes mostram como realizar as operações de cálculo mais comuns com CAS em MaiaScript:

```
// Resolve uma expressão algébrica.
res = cas.eval("x + x")
system.showMessageDialog("x + x:\n\n" + res)

// Simplifica uma expressão.
res = cas.eval("simplify(cos(x)**2 + sin(x)**2)\n" +
               "simplify(a*b+a*c)\n" +
               "simplify(n!/(n+1)!)")
system.showMessageDialog("simplify(cos(x)**2 + sin(x)**2)\n" +
                         "simplify(a*b+a*c)\n" +
                         "simplify(n!/(n+1)!):\n\n" + res)

// Calcula a integral de uma expressão.
res = cas.eval("integral(x**2)\n" +
               "integral(x*y,x,y)")
system.showMessageDialog("integral(x**2)\n" +
                         "integral(x*y,x,y):\n\n" + res)

// Calcula a derivada de uma expressão.
res = cas.eval("d(x**2)\n" +
               "r=sqrt(x**2+y**2)\n" +
               "d(r,[x,y])")
system.showMessageDialog("d(x**2)\n" +
                         "r=sqrt(x**2+y**2)\n" +
                         "d(r,[x,y])\n\n" + res)
```

## Tratamento de erros

MaiaScript suporta tratamento de erros usando declarações `try... catch...`. Isso permite lidar com exceções que podem ocorrer durante a execução do programa de forma elegante.

A seguir está a sintaxe para tratamento de erros em notação EBNF:

```
try                      ::= 'try' block catch?
catch                    ::= 'catch' '(' expression ')' block
test                     ::= 'test' '(' expression? (';' expression? (';' expression?)?)? ')' block catch?
```

O exemplo seguinte ilustra o uso do tratamento de erros:

```
try {
    // Código que pode lançar uma exceção
    a = 1 / 0
} catch (e) {
    system.println("Erro: " + e.message)
}

// Declaração test para teste unitário
test("Teste de divisão") {
    a = 1 / 1
    system.println("Teste passou")
} catch (e) {
    system.println("Teste falhou: " + e.message)
}
```

## Importação e Exportação

MaiaScript suporta sistema de módulos com declarações `import` e `export` para melhor organização e reutilização de código.

A seguir está a sintaxe para importação e exportação em notação EBNF:

```
import                   ::= 'import' expression
export                   ::= 'export' expression
```

O exemplo seguinte ilustra o uso de importação e exportação:

```
// Exporta uma função
export minhaFuncao(x) {
    return x * 2
}

// Em outro arquivo
import "./meuModulo.ms"
resultado = minhaFuncao(5)
system.println(resultado)
```

## Declarações adicionais

MaiaScript inclui várias declarações adicionais para vários propósitos:

### Variáveis Locais e Globais

```
local                    ::= 'local' expression
global                   ::= 'global' expression
```

### Verificação de tipo

```
typeof                   ::= 'typeof' expression
```

### Declaração vazia

```
empty                    ::= ';'
```

### Declaração Include

```
include                  ::= 'include' '(' expression ')'
```

Estas declarações fornecem funcionalidades adicionais para escopo de variáveis, verificação de tipos e organização de código.
