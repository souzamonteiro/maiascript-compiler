# MaiaScript Guide


## Tipos de dados


## Saída de dados

```
system.println("Hello World!")
system.showMessageDialog("Hello World!")
system.printf("%d, %.3f, %s", 1, 1.23456, "Hello World!")
```

## Entrada de dados

```
a = system.showInputDialog("Type a number:")
system.println(a)
```

## Variáveis

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

### Operadores matemáticos

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

```
a = 3

c = a << 2
system.println(c)
c = a >> 2
system.println(c)
```

### Operadores de operação e atribuição

```
c = a += b
system.println(c)
c = a -= b
system.println(c)
```

### Operador condicional (ternário)

```
a = 1

c = a == 1 ? "Hello" : "World"
system.println(c)
```

### Números complexos.

```
Complex                  ::= Real? Imaginary
Real                     ::= '-'? Digit+ '.' Digit+ (('e' | 'E' | 'p' | 'P') ('+' | '-')? Digit+)?
Imaginary                ::= (('+' | '-')? Real '*' 'i')
```

```
e = 1.0+2.0*i
f = 3.0+4.0*i
g = e + f
system.println(e)
```

### Matrizes

```
Array                    ::= '{' Element? (',' Element)* '}'
Matrix                   ::= '[' Row? (';' Row)* ']'

Element                  ::= (Key ':')? Expression
Key                      ::= Identifier
                           | String

Row                      ::= Column (',' Column)*
Column                   ::= Expression
```

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

### Declaração Se... Então...

```
If                       ::= 'if' '(' Expression ')' Expression Else?
Else                     ::= 'else' Expression
```

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

```
Switch                   ::= 'switch' '(' Expression ')' '{' Case+ Default? '}'
Case                     ::= 'case' Expression ':' Expression*
Default                  ::= 'default' ':' Expression*
```

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

### Declaração Faça...

```
Do                       ::= 'do' Expression 'while' '(' Expression ')'
Break                    ::= 'break'
Continue                 ::= 'continue'
```

```
a = 0

do {
    system.println(a)
    a++
} while (a < 10);
```

### Declaração Enquanto...

```
While                    ::= 'while' '(' Expression ')' Expression
```

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

```
For                      ::= 'for' '(' Expression ';' Expression ';' Expression ')' Expression
```

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

```
ForEach                  ::= 'foreach' '(' Expression ';' Expression ';' Expression ')' Expression
```

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