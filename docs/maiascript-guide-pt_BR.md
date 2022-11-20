# MaiaScript Guide

## Saída de dados na tela
```
system.println("Hello World!")
system.showMessageDialog("Hello World!")
system.printf("%d, %.3f, %s", 1, 1.23456, "Hello World!")
```

## Variáveis
```
a = 1
b = 2.0
c = "Hello World!"
d = [1, 2.0]
e = []

// Vetores semelhantes ao JavaScript.
f = [[1, 2],[3, 4]]

// Matrizes semelhantes ao Matlab.
g = [5, 6; 7, 8]

// Objetos semelhantes ao JavaScript
h = {a: 1, b: 2.0, "c": "Hello World!"}
i = {}

system.println(a)
system.println(b)
system.println(c)
system.println(d)
system.println(e)
system.println(f)
system.println(g)
system.println(JSON.stringify(h))
system.println(JSON.stringify(i))
```

## Operadores

### Operadores matemáticos

```
a = 1
b = 2.0

d = a + b
system.println(d)

d = a - b
system.println(d)

d = a * b
system.println(d)

d = a / b
system.println(d)

d = a % b
system.println(d)

// Operador de potência semelhante ao Python.
d = a ** b
system.println(d)

// Operadores de incremento e decremento semelhantes ao C.
d = a++
system.println(d)
d = b--
system.println(d)
d = ++a
system.println(d)
d = --b
system.println(d)
d = a += b
system.println(d)
d = a -= b
system.println(d)
```

### Operadores lógicos

```
d = a & b
system.println(d)
d = a | b
system.println(d)
d = a ^ b
system.println(d)
d = a && b
system.println(d)
d = a || b
system.println(d)
```

### Números complexos.

```
e = 1.0+2.0*i
f = 3.0+4.0*i
g = e + f
system.println(e)
```

## Estruturas de decisão

### Operador condicional (ternário)

```
a = 1
b = 2

c = a == 1 ? "Hello" : "World"
system.println(c)
```

### Declaração Se... Então...

```
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
a = 0

do {
    system.println(a)
    a++
} while (a < 10);
```

### Declaração Enquanto...

```
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
c = {a: 1, b: 2}

// Declaração foreach semelhante ao Tcl.
foreach(c; key; value) {
    system.println(key + ": " + value)
}
```

## Funções

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
    t1.onmessage = onMessage
} catch (e) {
    system.log(e.message)
}
```

### Funções em MaiaC

```
// Uma função em MaiaC.
i32 f(i32 a, i32 b) {
    return a + b;
}

// Chamando uma função em MaiaC.
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

### Construtores de objetos

```
// Um construtor de objeto.
Object1(x) := {
    y = x
}

obj1 := Object1(2)

system.println(obj1.y);
```