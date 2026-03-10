---
marp: true
theme: gaia
paginate: true
html: true
---

# MaiaScript Programming Language
## Complete Course

<!-- _class: lead -->

---

## Table of Contents

1. Introduction to MaiaScript
2. Basic Syntax and Variables
3. Operators and Expressions
4. Control Structures
5. Functions and Modules
6. Advanced Features
7. Real-world Examples

---

## What is MaiaScript?

- **Adaptable and intelligent applications**
- **High performance** with ease of learning
- **Native support** for:
  - Complex numbers and matrices
  - Complex/social networks
  - Artificial neural networks

---

## What is MaiaScript?

- **Native support** for:
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
<!-- _class: two-columns -->
<style>
.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>

## Variables and Data Types

<div>

```typescript
// Basic types
a = 1                    // Integer
b = 2.0                  // Real
c = "Hello World!"       // String
d = [1, 2, 3]            // Array
e = {"key": "value"}     // Associative Array
```

</div>

<div>

```typescript
// Advanced types
i32 x = 10              // 32-bit integer
f64 y = 3.14159         // 64-bit real
comp = 3.0 + 4.0*i      // Complex number
mat = [1,2;3,4]         // Matrix
```

</div>

---

## Mathematical Operators

```typescript
x = 10
y = 3

// Basic operations
x + y    // Addition: 13
x - y    // Subtraction: 7
x * y    // Multiplication: 30
x / y    // Division: 3.333...
x % y    // Modulus: 1
x ** y   // Power: 1000

// Increment/Decrement
x++      // Post-increment
++x      // Pre-increment
```

---

## Relational and Logical Operators

```typescript
// Relational operators
x == y    // Equal
x != y    // Not equal
x < y     // Less than
x <= y    // Less than or equal
x > y     // Greater than
x >= y    // Greater than or equal

// Logical operators
a && b    // AND
a || b    // OR
a ^^ b    // XOR
!a        // NOT
```

---

## Bitwise Operators

```typescript
a = 10      // Decimal 10
b = 12      // Decimal 12

a & b       // Bitwise AND: 8
a | b       // Bitwise OR: 14
a ^ b       // Bitwise XOR: 6
a << 2      // Left shift: 40
a >> 1      // Right shift: 5
~a          // Bitwise NOT
```

---

## Assignment Operators

```typescript
x = 5
x += 3      // x = 8  (add and assign)
x -= 2      // x = 6  (subtract and assign)
x *= 4      // x = 24 (multiply and assign)
x /= 3      // x = 8  (divide and assign)
x %= 5      // x = 3  (modulus and assign)
x **= 2     // x = 9  (power and assign)
x <<= 1     // left shift and assign
x >>= 1     // right shift and assign
x &= 7      // bitwise AND and assign
x ^= 3      // bitwise XOR and assign
x |= 4      // bitwise OR and assign
```

---

## Conditional (Ternary) Operator

```typescript
age = 20
status = age >= 18 ? "Adult" : "Minor"
// Result: "Adult"

// Syntax:
// condition ? value_if_true : value_if_false

// Complex example
grade = 85
result = grade >= 90 ? "A" : 
         grade >= 80 ? "B" : 
         grade >= 70 ? "C" : "F"
```

---

## Complex Numbers

```typescript
// Creating complex numbers
z1 = 3.0 + 4.0*i
z2 = 1.0 - 2.0*i

// Operations
z3 = z1 + z2      // Addition: 4.0 + 2.0*i
z4 = z1 * z2      // Multiplication: 11.0 + 2.0*i
z5 = z1 ** 2      // Power: -7.0 + 24.0*i

// Built-in functions
magnitude = abs(z1)    // Magnitude: 5.0
argument = arg(z1)     // Argument: 0.927 rad
```

---

## Matrices and Arrays

```typescript
// Different matrix notations
matlabStyle = [1, 2; 3, 4]          // Matlab
jsStyle = [[1, 2], [3, 4]]          // JavaScript

// Matrix operations
sum = matlabStyle + jsStyle          // Element-wise addition
product = matlabStyle * jsStyle      // Matrix multiplication
power = matlabStyle ** 2             // Matrix power
```

---

```typescript
// Associative arrays
person = {
    "name": "John", 
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Boston"
    }
}
```

---

## Decision Structures: if/else

```typescript
temperature = 25

if (temperature > 30) {
    system.println("It's hot! 🌞")
} elseif (temperature > 20) {
    system.println("Nice weather! 😊")
} elseif (temperature > 10) {
    system.println("A bit chilly 🧊")
} else {
    system.println("It's cold! ❄️")
}
```

---

## Decision Structures: switch

```typescript
dayOfWeek = 2

switch (dayOfWeek) {
    case 1:
        system.println("Monday - Start of week")
        break
    case 2:
        system.println("Tuesday - Full steam ahead!")
        break
```

---

```typescript
    case 3:
        system.println("Wednesday - Hump day")
        break
    // ... more cases
    default:
        system.println("Weekend! 🎉")
}
```

---

## Loop Structures: while/do-while

```typescript
// While loop - checks condition first
counter = 0
while (counter < 5) {
    system.println("While count: " + counter)
    counter++
}

// Do-while loop - executes at least once
counter = 10
do {
    system.println("Do-while count: " + counter)
    counter++
} while (counter < 5)  // Still runs once!
```

---

## Loop Structures: for loops

```typescript
// Traditional for loop
for (i = 0; i < 5; i++) {
    system.println("Index: " + i)
}

// With typed variables
for (i32 i = 0; i < 10; i += 2) {
    system.println("Even step: " + i)
}

// Reverse iteration
for (i = 10; i > 0; i--) {
    system.println("Countdown: " + i)
}
```

---

## Loop Structures: foreach

```typescript
// Iterating over objects
student = {
    "name": "Alice",
    "age": 22,
    "major": "Computer Science",
    "gpa": 3.8
}

foreach(student; property; value) {
    system.println(property + ": " + value)
}

// Output:
// name: Alice
// age: 22
// major: Computer Science
// gpa: 3.8
```

---

## Function Basics

```typescript
// Simple function declaration
function calculateArea(width, height) {
    return width * height
}

// Inline function (single expression)
square(x) = x ** 2

// Function with multiple parameters
createFullName(firstName, lastName) {
    return firstName + " " + lastName
}

// Usage examples
area = calculateArea(10, 5)
squared = square(4)
name = createFullName("John", "Doe")
```

---

## Advanced Functions

```typescript
// Recursive function (factorial)
factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}

// Function calling another function
greet(firstName, lastName, greeting) {
    name = createFullName(firstName, lastName)
    return greeting + ", " + name + "!"
}

// Usage
message = greet("John", "Doe", "Hello")
```

---

## Function Modifiers

```typescript
// Async function (non-blocking)
async fetchUserData(userId) {
    userData = await database.getUser(userId)
    return processUserData(userData)
}

// Plain function (no special handling)
plain utilityHelper() {
    return "Utility result"
}
```

---

## MaiaAssembly Functions

```typescript
// Strongly typed function (compiles to WebAssembly)
i32 calculateSum(i32 a, i32 b, i32 c) {
    i32 total = a + b + c
    return total
}

// Typed matrix parameter: i32[rows;cols]
f64 dotProduct(f64[3] u, f64[3] v) {
    f64 result = 0.0
    for (i32 i = 0; i < 3; i++) {
        result += u[i] * v[i]
    }
    return result
}

// Usage
sum = calculateSum(1, 2, 3)   // 6
```

---

## Error Handling

```typescript
// Basic try-catch
try {
    riskyOperation()
    system.println("Operation successful!")
} catch (error) {
    system.println("Error: " + error.message)
}
```

---

```typescript
// Custom error throwing
validateInput(input) {
    if (input == null || input == "") {
        throw "Input cannot be empty"
    }
    if (input.length < 3) {
        throw "Input too short (min 3 characters)"
    }
    return input.trim()
}
```

---

## Namespaces

```typescript
namespace MathUtilities {
    // Constants
    pi = 3.14159265359
    e = 2.71828182846
    
    // Functions
    circleArea(radius) {
        return pi * radius ** 2
    }
    
    circleCircumference(radius) {
        return 2 * pi * radius
    }
    
    exponential(x) {
        return e ** x
    }
}
```

---

```typescript
// Usage
area = MathUtilities.circleArea(5)
circumference = MathUtilities.circleCircumference(5)
exp = MathUtilities.exponential(2)
```

---

## Complex Network Analysis

```typescript
// Social network analysis example
analyzeSocialNetwork(networkData) {
    results = {}
    
    // Calculate basic metrics
    results.nodeCount = networkData.nodes.length
    results.edgeCount = networkData.edges.length
    results.density = cna.getDensity(networkData)
    
    // Advanced metrics
    results.centrality = cna.getDegreeCentrality(networkData)
    results.clustering = cna.getClusteringCoefficient(networkData)
    results.communities = cna.detectCommunities(networkData)
    
    return results
}
```

---

```typescript
// Usage
network = loadNetwork("social_network.json")
analysis = analyzeSocialNetwork(network)
```

---

## Artificial Neural Networks

```typescript
// ANN creation and training
createAndTrainANN() {
    // Create multilayer perceptron
    ann = ann.createANN("mlp", 
                        inputNeurons = 2,
                        hiddenLayers = 1,
                        hiddenNeurons = 4,
                        outputNeurons = 1)
    
    // Training data (XOR problem)
    inputs = [[0,0], [0,1], [1,0], [1,1]]
    outputs = [[0], [1], [1], [0]]
    
    // Train the network
    trainedANN = ann.training(ann, inputs, outputs, 
                             learningRate = 0.1,
                             maxEpochs = 1000)
    
    return trainedANN
}
```

---

```typescript
// Test the trained network
ann = createAndTrainANN()
prediction = ann.think(ann, [1,0])  // Should be close to 1
```

---

## Database Operations

```typescript
// Complete database example
setupStudentDatabase() {
    // Open database
    db = core.openSQLDatabase("University", "1.0", 
                             "Student Records", 2048)
    
    // Create tables
    db.executeSql(
        `CREATE TABLE students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE,
            enrollment_date DATE
        )`
    )
```

---

```typescript
    db.executeSql(
        `CREATE TABLE courses (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            credits INTEGER
        )`
    )
    
    return db
}

// Usage
database = setupStudentDatabase()
```

---

## GPU Parallel Programming

```typescript
// Create two 512x512 matrices.
a = core.zero(512, 512)
b = core.zero(512, 512)

// Fill the matrices.
for (i = 0; i < 512; i++) {
    for (j = 0; j < 512; j++) {
        v = i * 512 + j
        a[i, j] = v
        b[i, j] = v
    }
}
```

---

```typescript
// Compute shader.
plain shader(a, b) {
    local sum = 0
    for (local i = 0; i < 512; i++) {
        sum = sum + a[this.thread.y, i] * b[i, this.thread.x]
    }
    return(sum)
}
```

---

```typescript
// Computation function using the GPU.
async useGPU() {
    device = gpu.new()
    multiplyMatrices = device.createKernel(shader)
    multiplyMatrices.setOutput([512, 512])
    
    startTime := Date()
    c = multiplyMatrices(a, b)
    endTime := Date()
    
    elapsedTime = endTime - startTime
    
    system.log("GPU result:")
    system.log("c[511,511]: " + c[511,511])
    system.log("Elapsed time: " + elapsedTime + " ms\n")
}

// Start computation.
useGPU()
```

---

## Advanced Statistics

```typescript
// Comprehensive statistical analysis
analyzeDataset(data) {
    results = {}
    
    // Descriptive statistics
    results.mean = statistics.mean(data)
    results.median = statistics.median(data)
    results.mode = statistics.mode(data)
    results.stdDev = statistics.standardDeviation(data)
    results.variance = statistics.variance(data)
```

---

```typescript
    // Advanced analysis
    results.skewness = statistics.skewness(data)
    results.kurtosis = statistics.kurtosis(data)
    results.confidenceInterval = statistics.confidenceInterval(data, 0.95)
    
    // Correlation if multidimensional
    if (data[0] instanceof Array) {
        results.correlationMatrix = statistics.correlation(data)
    }
    
    return results
}

// Usage
dataset = loadCSV("data.csv")
analysis = analyzeDataset(dataset)
```

---

## Algebraic Computing

```typescript
// Symbolic mathematics examples
symbolicMathDemo() {
    results = {}
    
    // Equation solving
    results.equation = cas.eval("solve(x**2 - 5*x + 6 = 0, x)")
    // Result: x = 2, x = 3
    
    // Simplification
    results.simplified = cas.eval("simplify((x+1)**3 - x**3 - 3*x**2 - 3*x - 1)")
    // Result: 0
```

---

```typescript
    // Differentiation
    results.derivative = cas.eval("d(sin(x)*cos(x), x)")
    // Result: cos²(x) - sin²(x)
    
    // Integration
    results.integral = cas.eval("integral(x*sin(x))")
    // Result: sin(x) - x*cos(x)
    
    return results
}

mathResults = symbolicMathDemo()
```

---

## Module System and Imports

```typescript
// Library module (mylib.maia)
namespace MyLibrary {
    version = "1.0.0"
    
    formatCurrency(amount, currency) {
        switch (currency) {
            case "USD":
                return "$" + amount
            case "EUR":
                return "\u20ac" + amount
            case "GBP":
                return "\u00a3" + amount
            default:
                return amount + " " + currency
        }
    }
```

---

```typescript
    isValidLength(text, minLen) {
        return text.length >= minLen
    }
}
```

---

```typescript
// Main application
import "./mylib.maia"

// Use the library
price = MyLibrary.formatCurrency(19.99, "USD")
valid = MyLibrary.isValidLength("hello", 3)
```

---

## Real-world Calculator Application

```typescript
namespace ScientificCalculator {
    // Basic operations
    add(a, b) = a + b
    subtract(a, b) = a - b
    multiply(a, b) = a * b
    divide(a, b) {
        if (b == 0) throw "Division by zero error"
        return a / b
    }

```

---

```typescript
    // Scientific functions
    power(base, exponent) = base ** exponent
    squareRoot(x) = x ** 0.5
    logarithm(x, base = 10) = core.log(x) / core.log(base)
    
    // Trigonometric functions (radians)
    sine(x) = core.sin(x)
    cosine(x) = core.cos(x)
    tangent(x) = core.tan(x)
    
    // Memory function
    memory = 0
    memoryStore(value) { this.memory = value }
    memoryRecall() = this.memory
    memoryAdd(value) { this.memory += value }
}
```

---

## Data Processing Pipeline

```typescript
// Complete data processing example
processSalesData(rawData) {
    results = {}
    
    // Step 1: Data cleaning
    cleanedData = rawData.map(item => ({
        date: parseDate(item.date),
        product: item.product.trim(),
        sales: parseFloat(item.sales),
        region: item.region.toUpperCase()
    })).filter(item => item.sales > 0)  // Remove invalid entries
```

---

```typescript
    // Step 2: Group by region
    regionalSales = {}
    foreach(cleanedData; index; sale) {
        if (!regionalSales[sale.region]) {
            regionalSales[sale.region] = []
        }
        regionalSales[sale.region].push(sale)
    }
    
    // Step 3: Calculate statistics
    results.totalSales = cleanedData.reduce((sum, sale) => sum + sale.sales, 0)
    results.averageSale = results.totalSales / cleanedData.length
    results.regionalBreakdown = {}
```

---

```typescript
    foreach(regionalSales; region; sales) {
        results.regionalBreakdown[region] = {
            total: sales.reduce((sum, s) => sum + s.sales, 0),
            count: sales.length,
            average: sales.reduce((sum, s) => sum + s.sales, 0) / sales.length
        }
    }
    
    return results
}
```

---

## Testing Framework

```typescript
system.println("Testing add operator...")
test (10; 4; 0) {
    a = 1
    b = 2
    c = a + b
} catch (v) {
    system.print("TEST: Fail testing add operator.")
    system.print("      Expected result " + core.testResult.expected)
    system.print("      But got " + core.testResult.obtained)
}
```

---

## Best Practices and Patterns

**Code Organization:**
```typescript
// Use namespaces for logical grouping
namespace DataProcessing {
    namespace Validation {
        validateEmail(email) {
            // email validation logic
        }
        validatePhone(phone) {
            // phone validation logic
        }
    }
```

---

```typescript
    namespace Transformation {
        normalizeData(data) {
            // normalization logic
        }
        filterData(data, criteria) {
            // filtering logic
        }
    }
}
```

---

**Error Handling Pattern:**
```typescript
// Use Result pattern for predictable error handling
processDataSafely(input) {
    try {
        validated = validateInput(input)
        processed = processValidated(validated)
        return {success: true, data: processed}
    } catch (error) {
        return {success: false, error: error.message}
    }
}
```

---

## Performance Optimization

**Memory Management:**
```typescript
// Use streaming for large datasets
processLargeFile(filename) {
    stream = file.openStream(filename)
    results = []
    
    while (!stream.eof()) {
        chunk = stream.readChunk(1024)  // Process in chunks
        processedChunk = processChunk(chunk)
        results.push(processedChunk)
    }
    
    stream.close()
    return results
}
```

**Algorithm Optimization:**
```typescript
// Use efficient algorithms
quickSort(arr) {
    if (arr.length <= 1) return arr
    
    pivot = arr[Math.floor(arr.length / 2)]
    left = arr.filter(x => x < pivot)
    middle = arr.filter(x => x == pivot)
    right = arr.filter(x => x > pivot)
    
    return quickSort(left).concat(middle).concat(quickSort(right))
}
```

---

## Integration Examples

**Web API Integration:**
```typescript
namespace WebIntegration {
    async fetchJSON(url, options = {}) {
        response = await http.request(url, {
            method: options.method || "GET",
            headers: options.headers || {},
            body: options.body
        })
        return JSON.parse(response.body)
    }
```

---

```typescript
    async getWeatherData(city) {
        data = await this.fetchJSON(
            "https://api.weather.com/" + city
        )
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity
        }
    }
}
```

**File System Operations:**
```typescript
namespace FileSystem {
    readTextFile(filename) {
        return file.read(filename)
    }
    
    writeTextFile(filename, content) {
        file.write(filename, content)
    }
```

---

```typescript
    fileExists(filename) {
        return file.exists(filename)
    }
    
    listDirectory(path) {
        return file.list(path)
    }
}
```

---

## Deployment and Distribution

**Application Packaging:**
```typescript
// Main application entry point
namespace MyApplication {
    export version = "1.0.0"
    export author = "Your Name"
    
    main() {
        system.println("MyApplication v" + this.version)
        system.println("Starting...")
        
        // Application logic here
        runApplicationLogic()
        
        system.println("Application finished")
    }
}
```

---

```typescript
// Start the application
if (typeof require == "undefined") {
    // Running as main script
    MyApplication.main()
}
```

**Configuration Management:**
```typescript
namespace Config {
    settings = {
        "app": {
            "name": "MyApp",
            "version": "1.0.0",
            "debug": false
        },
        "database": {
            "host": "localhost",
            "port": 5432,
            "name": "myapp_db"
        },
        "api": {
            "baseUrl": "https://api.example.com",
            "timeout": 5000
        }
    }
```

---

```typescript
    get(key) {
        keys = key.split('.')
        value = this.settings
        foreach(keys; index; k) {
            value = value[k]
        }
        return value
    }
```

---

```typescript
    set(key, value) {
        keys = key.split('.')
        obj = this.settings
        for (i = 0; i < keys.length - 1; i++) {
            if (!obj[keys[i]]) obj[keys[i]] = {}
            obj = obj[keys[i]]
        }
        obj[keys[keys.length - 1]] = value
    }
}
```

---

## Q&A and Next Steps

**Questions?**
- Basic syntax and concepts
- Advanced features
- Specific use cases
- Best practices

**Next Learning Steps:**
1. Practice with small projects
2. Explore the standard library
3. Join the community
4. Contribute to open source projects

**Resources:**
- Official documentation
- Example projects
- Community forums
- GitHub repository

---

# Thank You!

## MaiaScript - Build Intelligent Applications with Ease
