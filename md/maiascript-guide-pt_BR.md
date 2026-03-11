# Guia MaiaScript

MaiaScript é uma linguagem de programação focada na construção de aplicações adaptáveis e inteligentes, com ênfase na facilidade de aprendizado e alto desempenho. Operações com números complexos e matrizes, criação e análise de redes complexas e sociais, redes neurais artificiais, acesso a bancos de dados SQL, programação paralela com threads e GPU, estatística avançada, computação algébrica, incluindo cálculo diferencial e integral, e programação de aplicações desktop e web são suportadas nativamente.

Este manual aborda os fundamentos da programação em MaiaScript, apresentando exemplos práticos para as funcionalidades mais utilizadas e diretrizes gerais sobre o uso desta linguagem.

Para informações detalhadas sobre a gramática da linguagem MaiaScript, consulte a descrição em EBNF e os diagramas de sintaxe disponíveis na pasta `docs` da sua distribuição do compilador MaiaScript.

## Tipos de Dados

MaiaScript suporta três tipos de dados nativamente: `inteiro`, `real` e `string`. Estes tipos são automáticos, e você não precisa defini-los ao criar variáveis e funções comuns. Para uso exclusivo com funções em **WebAssembly** e **MaiaAssembly**, são suportados os tipos `inteiro 32 bits`, `i32`, `inteiro 64 bits`, `i64`, `real 32 bits`, `f32` e `real 64 bits`, `f64`. Funções em **MaiaAssembly** são abordadas no capítulo sobre funções. Programação em **WebAssembly** está além do escopo deste guia. Para mais informações, consulte o site oficial do projeto: <https://webassembly.org>.

## Saída de Dados

MaiaScript permite a exibição de mensagens na tela do computador, ou na saída padrão, através de várias funções da biblioteca `system`, entre as quais as mais usadas são `print`, `println`, `printf` e `showMessageDialog`. O exemplo a seguir ilustra o uso dessas funções:

```typescript
system.println("Olá Mundo!")
system.showMessageDialog("Olá Mundo!")
system.printf("%d, %.3f, %s", 1, 1.23456, "Olá Mundo!")
```

## Entrada de Dados

Você pode ler dados inseridos pelo usuário usando a função `showInputDialog` da biblioteca `system`. Esta função exibe uma caixa de diálogo com a mensagem passada como parâmetro e um botão de confirmação, que, quando clicado, retorna o valor inserido na caixa de texto exibida. O exemplo a seguir ilustra o uso desta função:

```typescript
a = system.showInputDialog("Digite um número:")
system.println(a)
```

## Variáveis

Variáveis são contêineres onde armazenamos dados para processamento ou resultados de processamento. Em MaiaScript, variáveis podem armazenar valores de qualquer tipo, e geralmente não é necessário especificar o tipo de dado que a variável armazenará no momento de sua criação. No entanto, ao criar funções em **MaiaAssembly** ou **WebAssembly**, você deve especificar o tipo de dado que a variável armazenará, e esta variável só poderá armazenar valores deste tipo de dado durante toda a sua existência. Os tipos `inteiro 32 bits`, `i32`, `inteiro 64 bits`, `i64`, `real 32 bits`, `f32`, `real 64 bits`, `f64` são suportados. Funções em **MaiaAssembly** são abordadas no capítulo sobre funções. Funções em **WebAssembly** estão além do escopo deste guia. Para mais informações, consulte o site oficial do projeto: <https://webassembly.org>. O exemplo a seguir mostra como criar variáveis de vários tipos:

```typescript
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

// Vetores semelhantes ao JavaScript.
f = [[1, 2],[3, 4]]
system.println(f)

// Matrizes no estilo Matlab.
g = [5, 6; 7, 8]
system.println(g)

// Objetos semelhantes ao JavaScript.
h = {"a": 1, "b": 2.0, "c": "Olá Mundo!"}
system.println(JSON.stringify(h))
i = {}
system.println(JSON.stringify(i))
```

## Operadores

MaiaScript suporta operadores matemáticos, relacionais, lógicos, de deslocamento de bits, operadores de atribuição combinada e o operador condicional ternário. A seguir é apresentada uma notação EBNF para todos os operadores suportados pela linguagem. A ordem de precedência é de cima para baixo.

```
maiascript               ::= expressao*
                           | eof

operacao                 ::= atribuicaoVariavel
atribuicaoVariavel       ::= expressaoCondicional (('=' | '*=' | '/=' | '%=' | '**=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|=' | '?=' | ':=') expressaoCondicional)*

expressaoCondicional     ::= expressaoOUlogico ('?' expressao ':' expressao)?

expressaoOUlogico        ::= expressaoXOUlogico ('||' expressaoXOUlogico)*
expressaoXOUlogico       ::= expressaoElogico ('^^' expressaoElogico)*
expressaoElogico         ::= expressaoOUbits ('&&' expressaoOUbits)*
expressaoOUbits          ::= expressaoXOUbits ('|' expressaoXOUbits)*
expressaoXOUbits         ::= expressaoEbits ('^' expressaoEbits)*
expressaoEbits           ::= expressaoIgualdade ('&' expressaoIgualdade)*

expressaoIgualdade       ::= expressaoRelacional (('==' | '!=') expressaoRelacional)*
expressaoRelacional      ::= expressaoDeslocamento (('<' | '>' | '<=' | '>=') expressaoDeslocamento)*
expressaoDeslocamento    ::= expressaoAditiva (('<<' | '>>') expressaoAditiva)*
expressaoAditiva         ::= expressaoPotencia (('+' | '-') expressaoPotencia)*
expressaoPotencia        ::= expressaoMultiplicativa ('**' expressaoMultiplicativa)*
expressaoMultiplicativa  ::= expressaoUnaria (('*' | '/' | '%') expressaoUnaria)*

expressaoUnaria          ::= '++' primario
                           | '--' primario
                           | primario '++'
                           | primario '--'
                           | '+' primario
                           | '-' primario
                           | '~' primario
                           | '!' primario
                           | primario
                           
primario                 ::= membro
                           | valor
                           | expressaoParenteses
                           | tipo identificador
```

Nas próximas seções, abordaremos cada um desses operadores.

### Operadores matemáticos

MaiaScript suporta os seguintes operadores matemáticos: **adição**, `+`, **subtração**, `-`, **potenciação**, `**`, **multiplicação**, `*`, **divisão**, `/` e **resto da divisão**, `%`. Os exemplos a seguir mostram como usar esses operadores:

```typescript
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

MaiaScript suporta os seguintes operadores relacionais: **igual**, `==`, **diferente**, `!=`, **menor**, `<`, **menor ou igual**, `<=`, **maior**, `>` e **maior ou igual**, `>=`. Os exemplos a seguir mostram como usar esses operadores:

```typescript
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

MaiaScript suporta os seguintes operadores lógicos: **OU exclusivo lógico**, `^^`, **OU lógico**, `||`, **E lógico**, `&&`, **E bit a bit**, `&`, **OU exclusivo bit a bit**, `^` e **OU bit a bit**, `|`. Os exemplos a seguir mostram como usar esses operadores:

```typescript
a = 1
b = 0

c = a || b
system.println(c)
c = a ^^ b
system.println(c)
c = a && b
system.println(c)
c = a | b
system.println(c)
c = a ^ b
system.println(c)
c = a & b
system.println(c)
```

### Operadores de deslocamento de bits

MaiaScript suporta os seguintes operadores de deslocamento: **deslocamento à esquerda**, `<<`, e **deslocamento à direita**, `>>`. Os exemplos a seguir mostram como usar esses operadores:

```typescript
a = 3

c = a << 2
system.println(c)
c = a >> 2
system.println(c)
```

### Operadores de atribuição

MaiaScript suporta os seguintes operadores especiais de operação seguida de atribuição: `*=` , `/=` , `%=` , `+=` , `-=` , `<<=` , `>>=` , `&=` , `^=` , `|=`, `?=`, `:=`. Seguem exemplos dos usos mais comuns desses operadores:

```typescript
c = a += b
system.println(c)
c = a -= b
system.println(c)
```

### Operador condicional (ternário)

A linguagem MaiaScript oferece um **operador condicional ternário**. Este operador recebe três operandos: uma `expressão condicional`, uma `expressão que é retornada se a condição for avaliada como verdadeira` e uma `expressão que é retornada se a condição for avaliada como falsa`. No exemplo a seguir, como a variável `a` contém o valor `1`, a condição `a == 1` será avaliada como `verdadeira` e a expressão `Olá` será retornada.

```typescript
a = 1

c = a == 1 ? "Olá" : "Mundo"
system.println(c)
```

### Números complexos

MaiaScript suporta **números complexos** nativamente para os operadores `+`, `-`, `**`, `*` e `/` e para as funções matemáticas `abs`, `arg`, `cos`, `cosh`, `exp`, `log`, `sin`, `sinh`, `sqrt`, `tan` e `tanh`. Várias funções especializadas também estão disponíveis na biblioteca `core`. Para todas as funções MaiaScript que suportam números complexos, consulte a documentação da biblioteca na pasta `docs` da sua distribuição do compilador MaiaScript.

A seguir é apresentada em notação EBNF a sintaxe dos números complexos em MaiaScript:

```
complexo                 ::= real? imaginario
real                     ::= '-'? digito+ ('.' digito+)? (('e' | 'E') ('+' | '-')? digito+)?
imaginario               ::= (('+' | '-')? real '*' 'i')
digito                   ::= [0-9]
```

O exemplo a seguir ilustra a operação de soma com dois números complexos:

```typescript
e = 1.0 + 2.0*i
f = 3.0 + 4.0*i
g = e + f
system.println(g)
```

### Matrizes

MaiaScript suporta matrizes nativamente para os operadores `+`, `-`, `**` e `*` e oferece a biblioteca `matrix` para álgebra linear. Várias funções especializadas também estão disponíveis na biblioteca `core`. Para todas as funções MaiaScript que suportam matrizes, consulte a documentação das bibliotecas na pasta `docs` da sua distribuição do compilador MaiaScript.

A seguir é apresentada em notação EBNF a sintaxe de **vetores associativos** e **matrizes** em MaiaScript:

```
array                    ::= '{' elemento (',' elemento)* '}'
matriz                   ::= '[' linha? (';' linha)* ']'

elemento                 ::= (chave ':')? expressao
chave                    ::= string

linha                    ::= coluna (',' coluna)*
coluna                   ::= expressao
```

Em MaiaScript, você pode usar tanto a notação de matrizes do **Matlab** quanto do **JavaScript**. Na notação Matlab, as colunas são separadas por `vírgulas`, `,`, e as linhas por `ponto e vírgulas`, `;`. Na notação JavaScript, cada linha deve ser indicada entre colchetes `[]` e as linhas separadas por `vírgulas`, `,`. O exemplo a seguir apresenta exemplos de operações com matrizes usando as duas notações:

```typescript
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

MaiaScript oferece duas instruções para controle de fluxo: `if... else...` e `switch... case...`. Ambas as estruturas estão disponíveis tanto em MaiaScript quanto em MaiaAssembly. Essas instruções serão apresentadas nas próximas seções, juntamente com exemplos de seus usos.

### Instrução Se... Então...

A instrução `if... else...` permite decidir, avaliando uma `condição`, pela execução ou não de uma sessão de `código do programa`. A `expressão condicional` deve ser escrita imediatamente após a palavra `if` e entre `parênteses`. Se esta expressão for avaliada como `verdadeira`, o `bloco de comandos` imediatamente após os `parênteses` é executado; caso contrário, o `bloco de comandos` imediatamente após a palavra `else` é executado. A cláusula `else` é opcional.

A seguir é apresentada a sintaxe da instrução `if... else...` em notação EBNF:

```
if                       ::= 'if' '(' expressao ')' bloco elseif* else?
elseif                   ::= 'elseif' '(' expressao ')' bloco
else                     ::= 'else' bloco
bloco                    ::= '{' expressao* '}'
```

O exemplo a seguir ilustra o uso da instrução `if... else...`:

```typescript
a = 1
b = 2

// Instrução If semelhante ao C.
if (a < b) {
    system.println("a = " + a)
    system.println("b = " + b)
    system.println("a < b")
    if (a == 1) {
        system.println("a == 1")
    } else {
        system.println("a != 1")
    }
} elseif (a > b) {
    system.println("a = " + a)
    system.println("b = " + b)
    system.println("a > b")
} else {
    system.println("a = " + a)
    system.println("b = " + b)
    system.println("a == b")
}
```

### Instrução Escolha... Caso...

A instrução `switch... case... default...` permite decidir, comparando uma `expressão` com vários `casos` fornecidos, pela execução ou não de uma sessão de `código do programa`. A `expressão condicional` deve ser escrita imediatamente após a palavra `switch` e entre `parênteses`. Esta `expressão` será comparada com cada `caso` fornecido e, se uma **equivalência** for encontrada, a `expressão` ou `bloco de comandos` imediatamente após os `dois pontos` do `case` é executado. Se nenhum dos casos corresponder à `expressão` dada, a `expressão` ou `bloco de comandos` imediatamente após os `dois pontos` do caso `default` é executado. A cláusula `default` é opcional.

A seguir é apresentada a sintaxe da instrução `switch... case... default...` em notação EBNF:

```
switch                   ::= 'switch' '(' expressao ')' '{' case* default? '}'
case                     ::= 'case' expressao ':' (instrucao | expressao)*
default                  ::= 'default' ':' (instrucao | expressao)*
```

O exemplo a seguir ilustra o uso da instrução `switch... case... default...`:

```typescript
a = 1

// Instrução Switch semelhante ao C.
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
As estruturas de repetição permitem executar uma sessão de programa um número de vezes ou até que uma condição seja satisfeita. MaiaScript oferece quatro estruturas de repetição: `do... while`, `while...`, `for` e `foreach`. Todas essas instruções estão disponíveis tanto em MaiaScript quanto em MaiaAssembly. Essas instruções serão apresentadas nas próximas seções, juntamente com exemplos de seus usos.

### Instrução Faça... Enquanto...

A instrução `do... while...` executa uma `expressão` ou `bloco de comandos` `enquanto` uma dada `condição` for avaliada como `verdadeira`. A diferença desta instrução para a instrução `while...` é que esta instrução **executa a sessão de código pelo menos uma vez**, mesmo que a `condição` já seja `falsa` quando o fluxo de execução do programa a alcança, enquanto a instrução `while...` **não executará nenhuma vez** se a `condição` já for `falsa` quando o fluxo de execução do programa a alcançar. Se desejar interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a instrução `break`. Se quiser parar a execução da iteração atual do **loop** antes que o bloco de comandos tenha sido totalmente executado e pular para a próxima iteração, você pode usar a instrução `continue`.

A seguir é apresentada a sintaxe da instrução `do... while...` em notação EBNF:

```
do                       ::= 'do' bloco 'while' '(' expressao ')'
break                    ::= 'break'
continue                 ::= 'continue'
```

O exemplo a seguir ilustra o uso da instrução `do... while...`:

```typescript
a = 0

do {
    system.println(a)
    a++
} while (a < 10)
```

### Instrução Enquanto...

A instrução `while...` executa uma `expressão` ou `bloco de comandos` `enquanto` uma dada `condição` for avaliada como `verdadeira`. A diferença desta instrução para a instrução `do... while...` é que aquela instrução **executa a sessão de código pelo menos uma vez**, mesmo que a `condição` já seja `falsa` quando o fluxo de execução do programa a alcança, enquanto a instrução `while...` **não executará nenhuma vez** se a `condição` já for `falsa` quando o fluxo de execução do programa a alcançar. Se desejar interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a instrução `break`. Se quiser parar a execução da iteração atual do **loop** antes que o **bloco de comandos** tenha sido totalmente executado e pular para a próxima iteração, você pode usar a instrução `continue`.

A seguir é apresentada a sintaxe da instrução `while...` em notação EBNF:

```
while                    ::= 'while' '(' expressao ')' bloco
```

O exemplo a seguir ilustra o uso da instrução `while...`:

```typescript
a = 0

while (a < 10) {
    if (a % 2 == 0) {
        a++
        continue
    }
    if (a >= 5) {
        system.println("Interromper o loop.")
        break
    }
    system.println(a)
    a++
}
```

### Instrução Para...

A instrução `for...` executa uma `expressão` ou `bloco de comandos` enquanto uma dada `condição` for avaliada como `verdadeira`. A diferença desta instrução para a instrução `while...` é que aquela instrução requer controle interno da execução para que em algum ponto do fluxo de execução a `condição` se torne falsa e a execução do código seja interrompida. Esta instrução permite passar três argumentos: uma `expressão que será executada antes da primeira interação`, uma `expressão condicional` e uma `expressão que será avaliada ao final de cada iteração`. Você pode usar o `primeiro parâmetro` para **inicializar uma variável de controle**, e o `último parâmetro` para **modificá-la**. Se desejar interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a instrução `break`. Se quiser parar a execução da iteração atual do **loop** antes que o **bloco de comandos** tenha sido totalmente executado e pular para a próxima iteração, você pode usar a instrução `continue`.

A seguir é apresentada a sintaxe da instrução `for...` em notação EBNF:

```
for                      ::= 'for' '(' (expressao? | declaracaoVariavel) ';' expressao? ';' expressao? ')' bloco
declaracaoVariavel       ::= tipo? identificador ('=' expressao)?
```

O exemplo a seguir ilustra o uso da instrução `for...`:

```typescript
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

### Instrução ParaCada...

A instrução `foreach...` executa uma `expressão` ou `bloco de comandos` `para cada` elemento de um `vetor associativo` ou `objeto`. Esta instrução recebe três parâmetros: um `array associativo` ou `objeto`, uma `variável para conter a chave do array` ou `nome da propriedade do objeto` e uma `variável para conter o valor do elemento do array` ou `objeto`. Se desejar interromper a execução do **loop** antes que a `condição` se torne `falsa`, você pode usar a instrução `break`. Se quiser parar a execução da iteração atual do **loop** antes que o **bloco de comandos** tenha sido totalmente executado e pular para a próxima iteração, você pode usar a instrução `continue`.

A seguir é apresentada a sintaxe da instrução `foreach...` em notação EBNF:

```
foreach                  ::= 'foreach' '(' expressao ';' identificador ';' identificador ')' bloco
```

O exemplo a seguir ilustra o uso da instrução `foreach...`:

```typescript
c = {"a": 1, "b": 2}

// Instrução Foreach semelhante ao Tcl.
foreach(c; chave; valor) {
    system.println(chave + ": " + valor)
}
```

## Funções

Funções e procedimentos são sub-rotinas de programa que podem ser executadas invocando seus nomes. MaiaScript suporta vários tipos de funções. Nas próximas seções, discutiremos cada uma delas.

A seguir é apresentada a sintaxe para os vários tipos de `funções` MaiaScript em notação EBNF:

```
funcao                   ::= 'async' identificador ('.' identificador)* '(' argumentos? ')' bloco
                           | 'function' identificador ('.' identificador)* '(' argumentos? ')' bloco
                           | 'plain' identificador ('.' identificador)* '(' argumentos? ')' bloco
                           | tipo identificador ('.' identificador)* '(' argumentosFormais? ')' bloco
                           | identificador ('.' identificador)* '(' argumentos? ')' bloco
                           | identificador ('.' identificador)* '(' argumentos? ')' '=' expressao
tipo                     ::= ('i32' | 'i64' | 'f32' | 'f64') matriz?
argumentosFormais        ::= tipo? identificador (',' tipo? identificador)*
argumentos               ::= expressao (',' expressao)*
retorna                  ::= 'return' expressao?
```

### Declaração de função

Declaramos uma `função` escrevendo seu `nome`, seguido de `parênteses`, que podem ou não conter `argumentos` separados por `vírgulas`, `,`, e um `bloco de comandos` entre `chaves`, `{}`. Funções em MaiaScript podem usar modificadores como `async`, `function` ou `plain`, e usar ou não `operadores de atribuição especiais`, `=`, em sua declaração.

Se um `tipo de retorno` for indicado na declaração da função, ela é interpretada como sendo uma função em **MaiaAssembly** ou em **WebAssembly**. Em ambos os casos, você deve especificar os `tipos de valor` dos argumentos da função, se ela tiver `argumentos`. Se as `chaves`, `/{ /}` dos `blocos de comandos` forem precedidas pelo caractere `/`, a função é interpretada como sendo em **WebAssembly**; caso contrário, é considerada em **MaiaAssembly**. Funções MaiaScript podem ser **recursivas**, isto é, chamar a si mesmas para realizar tarefas complexas. O exemplo a seguir ilustra a função `fatorial` implementada usando um algoritmo recursivo:

```typescript
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

Para funções mais simples, que podem ser implementadas em apenas uma linha, você pode usar a forma simplificada de declaração de função. Esta forma permite escrever uma função como geralmente é feito em matemática, usando o operador de `atribuição`, `=`, e omitindo as `chaves` do `bloco de comandos`. O exemplo a seguir mostra a declaração de uma função de segundo grau:

```typescript
// Uma função inline.
f(x) = 2 * x ** 2 + x - 1

system.println(f(2))
```

### Funções assíncronas

Funções podem ser **executadas assincronamente**. Para isso, você deve declarar a função usando o modificador `async`. Para aguardar que a **função assíncrona** termine sua execução, bloqueando o **fluxo de execução** do resto do programa, você deve usar a palavra-chave `await`.

```typescript
// Uma função assíncrona.
async f(x) {
    return x
}

// Uma chamada de função assíncrona.
a ?= f(2)
```

### Funções paralelas

MaiaScript permite criar funções paralelas usando **threads** ou **núcleos de GPU**. Em ambos os casos, as funções precisam ser do tipo `kernel`. Funções `kernel` devem ser criadas usando o operador `#=`. Uma função `kernel` é compilada de forma diferente das outras funções. Elas não suportam operações com números complexos ou matrizes. Apenas os tipos de dados básicos e recursos do JavaScript são suportados. O exemplo a seguir mostra como criar uma **thread** em MaiaScript. Para mais detalhes, consulte a documentação da biblioteca `task` disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```typescript
plain tarefa1() {
    i = 0
    plain contagemTemp() {
        i++
        postMessage(i)
        if (i < 10) {
            setTimeout(contagemTemp(), 500)
        }
    }
    contagemTemp()
}

onMessage1(m) {
    system.log("Tarefa 1: " + m.data)
    if (m.data >= 5) {
        t1.terminate()
    }
}

try {
    t1 = task.new(tarefa1)
    t1.onmessage = onMessage1
} catch (e) {
    system.log(e.message)
}
```

### Funções em MaiaAssembly

**MaiaAssembly** é uma linguagem de programação otimizada para compilação para **WebAssembly**. Ela permite criar algoritmos tão rápidos quanto programas escritos em linguagem C, embutidos em programas de alto nível em MaiaScript. Funções em **MaiaAssembly** são tipadas, o que significa que você deve declarar os tipos das funções e variáveis no momento de suas criações. Os tipos suportados em **MaiaAssembly** são `inteiro 32 bits`, `i32`, `inteiro 64 bits`, `i64`, `real 32 bits`, `f32` e `real 64 bits`, `f64`. Todas as estruturas de decisão e repetição do MaiaScript são suportadas em **MaiaAssembly**. Além disso, `matrizes` de dimensões arbitrárias dos `tipos` de dados suportados são permitidas. Você não pode passar objetos ou mesmo arrays como argumentos de função **MaiaAssembly**, mas pode importá-los. A declaração `import` é usada para isso. Ela permite importar propriedades de objetos para dentro da função e usá-las como se fossem variáveis locais. Em **MaiaAssembly**, é possível criar **variáveis globais** usando a declaração `global`. Variáveis globais são acessíveis de qualquer lugar do programa. O exemplo a seguir mostra como criar uma função para somar dois valores passados como argumentos. A função também cria uma `variável local` para armazenar o resultado da soma. Variáveis locais devem ser declaradas no cabeçalho da função e devem aparecer após os argumentos da função.

```typescript
// Uma função em MaiaAssembly.
i32 f(i32 a, i32 b) {
    i32 c = a + b
    return c
}

// Chamando uma função em MaiaAssembly.
c = f(1, 2)
```

## Criando namespaces e objetos

**Namespaces** são uma forma de organizar funções e variáveis para construir bibliotecas. O uso de `namespaces` não só torna o código mais organizado e reutilizável, mas também torna o acesso aos recursos da biblioteca mais eficiente. Todo namespace é um `objeto`, mas `namespaces` não são `construtores de objetos`. Para criar `objetos`, devemos criar `construtores` para eles. Nas próximas seções, veremos como criar `namespaces` e `construtores de objetos`.

### Criando namespaces

Criamos um namespace definindo um `nome` para ele e um `bloco de código` contendo variáveis e funções.

A seguir é apresentada a sintaxe para criação de `namespaces` em notação EBNF:

```
namespace                ::= 'namespace' identificador ('.' identificador)* bloco
```

O exemplo a seguir ilustra como criar um `namespace` contendo uma `variável`, `propriedade` e uma `função`, `método`:

```typescript
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

**Construtores de objetos** permitem criar `instanciações de classe` definidas por eles. `Classes` são **modelos** para `objetos`. Elas definem suas `propriedades`, características modificáveis em tempo de execução, e seus `métodos`, funcionalidades dos objetos. Para criar um `construtor de objeto`, definimos um namespace com a `função de inicialização do objeto`, `init`. Para **instanciar** um `objeto`, atribuímos a uma variável a nova instância do namespace, usando o `operador de criação de objeto`, `:=`. O exemplo a seguir cria um `objeto` que tem uma propriedade `y` e atribui a essa variável o valor passado ao inicializador no momento de sua criação:

```typescript
// Um construtor de objeto.
namespace A {
    y = 0
    init(x) {
        y = x
    }
}

c := A(2)

system.println(c.y)
```

## Redes complexas e sociais

MaiaScript fornece várias funções para criar e **analisar redes complexas e sociais**. Esses recursos estão disponíveis nas bibliotecas `cna` e `snet`. Os exemplos a seguir mostram as aplicações mais comuns para as funções dessas bibliotecas. Para uma referência completa, consulte a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```typescript
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
    "direcionado": false,
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
propriedade.densidadeRede = cna.getDensity(propriedade.adj, propriedade.direcionado)

// Calcula os graus dos vértices e o grau médio da rede.
propriedade.grauRede = cna.getDegrees(propriedade.adj, propriedade.direcionado)
propriedade.grauMedioRede = cna.getAverageDegree(propriedade.grauRede)

// Calcula os coeficientes de agrupamento dos vértices e o coeficiente de aglomeração médio da rede.
propriedade.agrupamentoRede = cna.getClustering(propriedade.adj, propriedade.direcionado)
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

MaiaScript fornece funções para criar e treinar **redes neurais artificiais** de várias topologias. Esses recursos estão disponíveis na biblioteca `ann`. Os exemplos a seguir mostram as aplicações mais comuns para as funções desta biblioteca. Para uma referência completa, consulte a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```typescript
// Callback.
callbackTreinamento(epocas, RSS, corretude, ETL) {
    system.println("Épocas: " + core.toString(epocas) + ", RSS: " + core.toString(RSS) + ", Corretude: " + core.toString(corretude) + ", ETL: " + core.toString(ETL))
}

// Dados para treinar.
// O algoritmo de treinamento espera um array com uma linha para cada dado e uma coluna para cada neurônio de entrada ou saída.
dadosX = [[0.00],[0.25],[0.50],[0.75],[1.00],[1.25],[1.50],[1.75],[2.00],[2.25],[2.50],[2.75],[3.00],[3.25],[3.50],[3.75],[4.00],[4.25],[4.50],[4.75],[5.00],[5.25],[5.50],[5.75],[6.00],[6.25],[6.50],[6.75],[7.00],[7.25],[7.50],[7.75],[8.00],[8.25],[8.50],[8.75],[9.00],[9.25],[9.50],[9.75],[10.00]]
dadosY = [[2.0000],[2.2197],[2.3811],[2.5136],[2.7310],[2.7827],[2.8327],[3.0351],[2.9551],[3.3973],[3.5117],[3.5909],[3.7345],[3.8419],[4.0952],[4.2879],[4.4000],[4.8764],[5.2843],[5.9241],[6.3302],[6.9608],[7.3044],[7.6791],[8.2819],[9.0139],[9.3387],[10.0420],[10.4000],[10.6437],[10.4786],[10.4928],[10.7082],[10.6233],[10.8862],[10.6830],[10.8393],[10.9186],[10.8814],[10.9779],[11.0000]]
nDados = core.length(dadosX)

// Cria uma rede neural perceptron multicamadas.
rn = ann.createANN("mlp", 0, 0, 0, 0, 1, 1, 1, 3)

// Exibe a rede neural não treinada.
system.println("RNA antes de ser preparada: " + core.toString(rn))
system.println(core.toString(ann.getLabels(rn)))

// Atribui pesos iniciais aleatórios às sinapses neurais.
rn = ann.prepare(rn, true, true, true)
system.println("RNA depois de ser preparada: " + core.toString(rn))

// Treina a rede neural.
estatisticas = ann.training(rn, dadosX, dadosY, 0.005, "tanh", "linear", "none", [1, 0], 2000, 0.001, callbackTreinamento, 100)

// Exibe estatísticas de treinamento.
system.println("Estatísticas: " + core.toString(estatisticas))

// Exibe a rede neural treinada.
system.println("RNA Treinada: " + core.toString(rn))

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

MaiaScript suporta nativamente o banco de dados **SQLite**, mas pode usar qualquer banco de dados suportado pelo **Node.js**. Esses recursos estão disponíveis na biblioteca `core`. O exemplo a seguir cria um banco de dados, uma tabela e insere dados na tabela criada. Para uma referência completa, consulte a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

```typescript
manipuladorDados(transacao, resultados) {
}

manipuladorErro(transacao, erro) {
}

criarTabela(transacao) {
    esquema = ""
    esquema = esquema + "CREATE TABLE pessoas(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
    esquema = esquema + "nome TEXT NOT NULL DEFAULT `João Silva`,"
    esquema = esquema + "camisa TEXT NOT NULL DEFAULT `Roxa`);"
    transacao.executeSql(esquema, [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`José`, `Verde`);", [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`Marcos`, `Azul`);", [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`Felipe`, `Laranja`);", [], manipuladorDados, manipuladorErro)
    transacao.executeSql("insert into pessoas (nome, camisa) VALUES (`jsilva`, `Roxa`);", [], manipuladorDados, manipuladorErro)
}

// Abre o banco de dados se existir ou cria um novo se não existir.
bd = core.openSQLDatabase("Teste", "1.0", "Teste", 65536)

// Cria uma tabela e insere dados nela.
if (typeof(bd) != "undefined") {
    bd.transaction(criarTabela)
}
```

## Programação paralela usando GPU

Você pode acelerar o processamento em alguns problemas usando **programação paralela**. MaiaScript permite paralelismo real usando **núcleos de GPU** se este recurso estiver disponível na máquina hospedeira. Caso contrário, o compilador MaiaScript compilará o programa para execução sequencial. As funções de computação em GPU são chamadas de *shaders*. Estas funções são compiladas de forma diferente pelo compilador MaiaScript e não suportam números complexos ou cálculos com matrizes. Os recursos de programação em GPU estão disponíveis na biblioteca `gpu`. Para uma referência completa, consulte a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

O exemplo a seguir mostra como criar uma função para multiplicação paralela de duas matrizes. Uma versão sequencial do cálculo para comparação de desempenho também é implementada.

```typescript
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
plain shader(a, b) {
    local soma = 0
    for (local i = 0; i < 512; i = i + 1) {
        soma = soma + a[this.thread.y, i] * b[i, this.thread.x]
    }
    return(soma)
}

// Função de computação usando GPU.
async usarGPU() {
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

// Função de computação usando CPU.
async usarCPU() {
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

// Inicia o cálculo.
usarGPU()
usarCPU()
```

## Estatística avançada

MaiaScript oferece várias funções estatísticas para operações com **matrizes** e arquivos **CSV**. Essas funções estão disponíveis nas bibliotecas `matrix`, `statistics` e `dfa`. A biblioteca `statistics` implementa funções para cálculos de **médias**, **desvios** e **erros padrão**, bem como funções envolvendo **números aleatórios** e **distribuição normal**, incluindo o cálculo da **inversa da distribuição normal**. A biblioteca `dfa` implementa cálculos de **DFA**, **DCCA** e **rhoDCCA**. Para uma referência completa, consulte a documentação disponível na pasta `docs` da sua distribuição do compilador MaiaScript.

Os exemplos a seguir mostram aplicações comuns para as funções da biblioteca estatística:

```typescript
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
system.println("transposta(b) = " + core.toString(matrix.trans(b)))
system.println("det(c) = " + core.det(c))
system.println("diag(c) = " + core.toString(core.diag(c)))
system.println("triang(c) = " + core.toString(matrix.triang(c)))
system.println("produtoVetorial([1,2,3], [4,5,6]) = " + core.toString(matrix.cross([1,2,3], [4,5,6])))
system.println("produtoEscalar([1,2,5], [2,-7,12]) = " + core.toString(matrix.dot([1,2,5], [2,-7,12])))
system.println("dim([1,2,3]) = " + core.toString(core.dim([1,2,3])))
system.println("d = " + core.toString(d))
system.println("e = " + core.toString(e))
```

## Computação algébrica

MaiaScript possui um **Sistema de Computação Algébrica (CAS)** completo implementado na biblioteca `cas`. Este CAS permite simplificar expressões, resolver equações e realizar operações complexas de álgebra linear e cálculo diferencial e integral. O CAS é baseado na biblioteca *open source* **Algebrite**. Para uma referência completa, consulte a documentação oficial do projeto Algebrite <http://algebrite.org>. A única exceção é que o Algebrite originalmente usa o operador `ˆ` para potenciação, e no MaiaScript o `operador de potência` é `**`. Os exemplos a seguir mostram como realizar as operações de cálculo mais comuns com o CAS em MaiaScript:

```typescript
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

MaiaScript suporta tratamento de erros usando instruções `try... catch...`. Isso permite que você lide com exceções que podem ocorrer durante a execução do programa de forma elegante.

A seguir é apresentada a sintaxe para tratamento de erros em notação EBNF:

```
try                      ::= 'try' bloco catch?
teste                    ::= 'test' '(' expressao? (';' expressao? (';' expressao?)?)? ')' bloco catch?
catch                    ::= 'catch' '(' expressao ')' bloco
```

O exemplo a seguir ilustra o uso do tratamento de erros:

```typescript
try {
    // Código que pode lançar uma exceção
    a = 1 / 0
} catch (e) {
    system.println("Erro: " + e.message)
}

// Instrução test para testes unitários
teste ("Teste de divisão") {
    a = 1 / 1
    system.println("Teste passou")
} catch (e) {
    system.println("Teste falhou: " + e.message)
}
```

## Importação e Exportação

MaiaScript suporta um sistema de módulos com instruções `import` e `export` para melhor organização e reutilização de código.

A seguir é apresentada a sintaxe para importação e exportação em notação EBNF:

```
export                   ::= 'export' expressao
import                   ::= 'import' expressao
```

O exemplo a seguir ilustra o uso de import e export:

```typescript
// Exporta uma função MaiaAssembly
export f64 minhaFuncao(f64 x) {
    return x * 2
}

// Em outro arquivo
import "./meuModulo.maia"
resultado = minhaFuncao(5)
system.println(resultado)
```

## Instruções adicionais

MaiaScript inclui várias instruções adicionais para diversos fins:

### Variáveis locais e globais

```
global                   ::= 'global' expressao
local                    ::= 'local' expressao
```

### Verificação de tipo

```
typeof                   ::= 'typeof' expressao
```

### Instrução vazia

```
vazio                    ::= ';'
```

### Instrução de inclusão

```
include                  ::= 'include' '(' expressao ')'
```

Estas instruções fornecem funcionalidade adicional para escopo de variáveis, verificação de tipos e organização de código.