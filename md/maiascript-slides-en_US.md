---
marp: true
---

# Marp Slides: MaiaScript Complete Course

<!-- theme: gaia -->
<!-- class: lead -->

# MaiaScript Programming Language
## Complete Course

---

## What is MaiaScript?

- **Adaptable and intelligent applications**
- **High performance** with ease of learning
- **Native support** for:
  - Complex numbers and matrices
  - Complex/social networks
  - Artificial neural networks
  - SQL databases
  - Parallel programming (threads/GPU)
  - Advanced statistics
  - Algebraic computing

---

## Getting Started

```typescript
system.println("Hello World!")
system.showMessageDialog("Welcome to MaiaScript!")
```

**Basic Syntax:**
- Dynamic typing
- Semicolon optional
- C-like syntax

---

## Variables and Data Types

```typescript
a = 1                    // Integer
b = 2.0                  // Real
c = "Hello World!"       // String
d = [1, 2, 3]           // Array
e = {key: "value"}       // Object

// WebAssembly/MaiaAssembly types
i32 x = 10               // 32-bit integer
f64 y = 3.14159          // 64-bit real
```

---

## Mathematical Operators

```typescript
x = 10
y = 3

x + y    // Addition: 13
x - y    // Subtraction: 7
x * y    // Multiplication: 30
x / y    // Division: 3.333...
x % y    // Modulus: 1
x ** y   // Power: 1000

x++      // Post-increment
++x      // Pre-increment
```

---

## Relational and Logical Operators

```typescript
// Relational
x == y    // Equal
x != y    // Not equal
x < y     // Less than
x <= y    // Less than or equal
x > y     // Greater than
x >= y    // Greater than or equal

// Logical
a && b    // AND
a || b    // OR
a ^^ b    // XOR
!a        // NOT
```

---

## Bitwise Operators

```typescript
a = 0b1010  // Binary 10
b = 0b1100  // Binary 12

a & b       // AND: 0b1000 (8)
a | b       // OR: 0b1110 (14)
a ^ b       // XOR: 0b0110 (6)
a << 2      // Left shift: 0b101000 (40)
a >> 1      // Right shift: 0b0101 (5)
```

---

## Assignment Operators

```typescript
x = 5
x += 3      // x = 8
x -= 2      // x = 6
x *= 4      // x = 24
x /= 3      // x = 8
x %= 5      // x = 3
x **= 2     // x = 9
```

---

## Conditional (Ternary) Operator

```typescript
age = 20
status = age >= 18 ? "Adult" : "Minor"
// Result: "Adult"
```

**Syntax:**
```typescript
condition ? value_if_true : value_if_false
```

---

## Complex Numbers

```typescript
z1 = 3.0 + 4.0*i
z2 = 1.0 - 2.0*i
z3 = z1 + z2  // 4.0 + 2.0*i

// Supported operations: +, -, *, /, **
// Supported functions: abs, arg, cos, exp, log, etc.
```

---

## Matrices and Arrays

```typescript
// Matlab notation
mat1 = [1, 2; 3, 4]

// JavaScript notation
mat2 = [[1, 2], [3, 4]]

// Operations
result = mat1 + mat2
result = mat1 * mat2
result = mat1 ** 2

// Associative arrays
person = {name: "John", age: 30}
```

---

## Decision Structures: if/else

```typescript
temperature = 25

if (temperature > 30) {
    system.println("It's hot!")
} else if (temperature > 20) {
    system.println("Nice weather!")
} else {
    system.println("It's cold!")
}
```

---

## Decision Structures: switch

```typescript
day = 2

switch (day) {
    case 1:
        system.println("Monday")
        break
    case 2:
        system.println("Tuesday")
        break
    default:
        system.println("Other day")
}
```

---

## Loop Structures: while/do-while

```typescript
// While loop
i = 0
while (i < 5) {
    system.println("Count: " + i)
    i++
}

// Do-while loop
j = 0
do {
    system.println("Do-while: " + j)
    j++
} while (j < 3)
```

---

## Loop Structures: for

```typescript
// Traditional for loop
for (i = 0; i < 5; i++) {
    system.println("For loop: " + i)
}

// With variable declaration
for (i32 i = 0; i < 10; i++) {
    system.println("Typed: " + i)
}
```

---

## Loop Structures: foreach

```typescript
person = {name: "John", age: 30, city: "NY"}

foreach(person; key; value) {
    system.println(key + ": " + value)
}
// Output:
// name: John
// age: 30
// city: NY
```

---

## Function Basics

```typescript
// Simple function
greet(name) {
    return "Hello, " + name + "!"
}

// Inline function
square(x) = x ** 2

// Usage
message = greet("Alice")
area = square(5)
```

---

## Advanced Functions

```typescript
// Recursive function
factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}

// Async function
async fetchData(url) {
    return await http.get(url)
}

// Default parameters
power(base, exponent = 2) {
    return base ** exponent
}
```

---

## Function Modifiers

```typescript
// Async function
async processData(data) {
    // Async operations
    return result
}

// Plain function (no special handling)
plain utilityFunction() {
    return "Utility result"
}

// Kernel function (parallel)
processImage() #= {
    // GPU/parallel code
}
```

---

## MaiaAssembly Functions

```typescript
// Typed function (compiles to WebAssembly)
i32 addIntegers(i32 a, i32 b) {
    i32 result = a + b
    return result
}

// With local variables
f64 calculateArea(f64 radius) {
    f64 pi = 3.14159
    f64 area = pi * radius ** 2
    return area
}
```

---

## Error Handling

```typescript
try {
    // Potentially problematic code
    result = 10 / 0
    system.println("Result: " + result)
} catch (error) {
    system.println("Error occurred: " + error.message)
} finally {
    system.println("Cleanup code")
}

// Throwing exceptions
validateAge(age) {
    if (age < 0) {
        throw "Age cannot be negative"
    }
    return age
}
```

---

## Namespaces

```typescript
namespace MathUtils {
    pi = 3.14159
    
    circleArea(radius) {
        return pi * radius ** 2
    }
    
    factorial(n) {
        if (n <= 1) return 1
        return n * factorial(n - 1)
    }
}

// Usage
area = MathUtils.circleArea(5)
fact = MathUtils.factorial(5)
```

---

## Object Constructors

```typescript
// Constructor function
Person(name, age) := {
    this.name = name
    this.age = age
    
    this.introduce() {
        return "I'm " + this.name + ", age " + this.age
    }
}

// Object instantiation
john := Person("John Doe", 30)
message = john.introduce()
```

---

## Complex and Social Networks

```typescript
// Create network analysis
network = {
    nodes: ["A", "B", "C", "D"],
    edges: [["A", "B"], ["B", "C"], ["C", "D"]]
}

// Network analysis functions
density = cna.getDensity(network.adjacencyMatrix)
centrality = cna.getCentrality(network.nodes)
```

---

## Artificial Neural Networks

```typescript
// Create and train ANN
nn = ann.createANN("mlp", 2, 1, 10, 1)

// Training data
inputs = [[0,0], [0,1], [1,0], [1,1]]
outputs = [[0], [1], [1], [0]]

// Train network
trainedNN = ann.training(nn, inputs, outputs, 0.1)

// Use network
prediction = ann.think(trainedNN, [1,0])
```

---

## Database Operations

```typescript
// Open SQLite database
db = core.openSQLDatabase("MyApp", "1.0", "App Data", 1024)

// Create table
db.executeSql(
    "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)"
)

// Insert data
db.executeSql("INSERT INTO users (name) VALUES ('John')")

// Query data
results = db.executeSql("SELECT * FROM users")
```

---

## Parallel Programming with GPU

```typescript
// GPU kernel function
matrixMultiply(a, b) #= {
    local sum = 0
    for (local i = 0; i < 512; i++) {
        sum += a[this.thread.y, i] * b[i, this.thread.x]
    }
    return sum
}

// Execute on GPU
gpu = gpu.new()
kernel = gpu.createKernel(matrixMultiply)
result = kernel(matrixA, matrixB)
```

---

## Advanced Statistics

```typescript
data = [1.2, 2.5, 3.7, 4.1, 5.8]

// Statistical functions
mean = statistics.mean(data)
stdDev = statistics.standardDeviation(data)
variance = statistics.variance(data)

// Matrix operations
matrix = [[1,2,3], [4,5,6]]
determinant = matrix.det(matrix)
inverse = matrix.inv(matrix)
```

---

## Algebraic Computing

```typescript
// Computer Algebra System
result = cas.eval("expand((x+1)**3)")
// Result: x³ + 3x² + 3x + 1

// Derivative
derivative = cas.eval("d(x**2 + 3*x + 1)")
// Result: 2x + 3

// Integral
integral = cas.eval("integral(x**2)")
// Result: x³/3
```

---

## Module System

```typescript
// Export from module
namespace MyLibrary {
    export usefulFunction() {
        return "Useful result"
    }
    
    export constant = 42
}

// Import and use
import "./mylibrary.ms"
result = MyLibrary.usefulFunction()
value = MyLibrary.constant
```

---

## Local and Global Variables

```typescript
global appName = "MyApplication"

function testScope() {
    local localVar = "I'm local"
    global globalVar = "I'm global"
    
    system.println(localVar)
    system.println(globalVar)
    system.println(appName)  // Access global
}

testScope()
```

---

## Type Checking

```typescript
// Type checking examples
value1 = 42
value2 = "Hello"
value3 = [1, 2, 3]

system.println(typeof(value1))  // "number"
system.println(typeof(value2))  // "string"
system.println(typeof(value3))  // "array"
system.println(typeof(null))    // "null"
```

---

## Real-world Example: Calculator App

```typescript
namespace Calculator {
    add(a, b) = a + b
    subtract(a, b) = a - b
    multiply(a, b) = a * b
    divide(a, b) {
        if (b == 0) throw "Division by zero"
        return a / b
    }
    
    power(base, exp) = base ** exp
    sqrt(x) = x ** 0.5
}

// Usage
result = Calculator.add(10, 5)
area = Calculator.power(5, 2)
```

---

## Real-world Example: Data Processing

```typescript
// Process dataset
processData(dataset) {
    results = {}
    
    foreach(dataset; index; item) {
        // Clean data
        cleaned = cleanData(item)
        
        // Analyze
        analysis = analyzeItem(cleaned)
        
        results[index] = analysis
    }
    
    return results
}

cleanData(item) {
    // Data cleaning logic
    return item.trim().toLowerCase()
}
```

---

## Testing and Debugging

```typescript
// Unit tests
test("Addition test") {
    result = Calculator.add(2, 3)
    assert(result == 5, "Addition failed")
}

test("Division test") {
    try {
        result = Calculator.divide(10, 0)
        assert(false, "Should have thrown error")
    } catch (e) {
        assert(e.contains("zero"), "Wrong error message")
    }
}
```

---

## Performance Optimization

```typescript
// Use MaiaAssembly for performance-critical code
i32 fastCalculation(i32[] data) {
    i32 sum = 0
    for (i32 i = 0; i < data.length; i++) {
        sum += data[i]
    }
    return sum
}

// Parallel processing for large datasets
processLargeDataset(data) #= {
    // GPU-accelerated processing
    return parallelProcess(data)
}
```

---

## Best Practices

1. **Use descriptive variable names**
2. **Modularize code with namespaces**
3. **Handle errors properly**
4. **Use appropriate data types**
5. **Document your code**
6. **Test thoroughly**
7. **Optimize critical sections**

---

## Resources and Next Steps

**Official Resources:**
- MaiaScript documentation
- EBNF grammar specification
- Library references
- Example projects

**Learning Path:**
1. Master basic syntax
2. Practice with small projects
3. Explore advanced features
4. Build complete applications

---

## Q&A Session

**Questions?**