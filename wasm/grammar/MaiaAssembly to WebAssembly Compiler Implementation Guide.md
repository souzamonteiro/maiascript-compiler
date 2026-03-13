# MaiaAssembly to WebAssembly Compiler Implementation Guide

## Overview

This document provides structured WebAssembly code fragments for implementing the MaiaAssembly emitter component of the MaiaScript compiler. The emitter translates MaiaAssembly constructs into WebAssembly Text Format (WAT) or binary format.

## Core Concepts

### Data Types Mapping

```wat
;; WebAssembly type mappings
;; i32 -> integer 32 bits
;; i64 -> integer 64 bits  
;; f32 -> real 32 bits
;; f64 -> real 64 bits
```

### Memory Management

```wat
;; Linear memory for complex data structures
(memory $memory 1)
(export "memory" (memory $memory))

;; Data section for static values
(data (i32.const 0) "MaiaScript Runtime")
```

## Expression Emitters

### Primary Expressions

#### Literals
```wat
;; Integer literal
(func $emit_i32_literal (param $value i32) (result i32)
  local.get $value)

;; Float literal
(func $emit_f64_literal (param $value f64) (result f64)
  local.get $value)

;; String literal (returns pointer to memory)
(func $emit_string_literal (param $ptr i32) (result i32)
  local.get $ptr)
```

#### Identifiers
```wat
;; Variable access
(func $emit_variable_access (param $local_index i32) (result i32)
  local.get $local_index)

;; Global variable access
(func $emit_global_access (param $global_index i32) (result i32)
  global.get $global_index)
```

### Unary Operations

```wat
;; Increment (++x)
(func $emit_pre_increment_i32 (param $local_idx i32) (result i32)
  (local.get $local_idx)
  (i32.const 1)
  (i32.add)
  (local.tee $local_idx))

;; Decrement (--x)
(func $emit_pre_decrement_i32 (param $local_idx i32) (result i32)
  (local.get $local_idx)
  (i32.const 1)
  (i32.sub)
  (local.tee $local_idx))

;; Negation (-x)
(func $emit_negate_i32 (param $value i32) (result i32)
  (i32.const 0)
  (local.get $value)
  (i32.sub))

;; Logical NOT (!x)
(func $emit_logical_not_i32 (param $value i32) (result i32)
  (local.get $value)
  (i32.eqz)
  (i32.extend8_s))

;; Bitwise NOT (~x)
(func $emit_bitwise_not_i32 (param $value i32) (result i32)
  (local.get $value)
  (i32.const -1)
  (i32.xor))
```

### Binary Operations

#### Arithmetic Operations

```wat
;; Addition (+)
(func $emit_add_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.add))

(func $emit_add_f64 (param $left f64) (param $right f64) (result f64)
  (local.get $left)
  (local.get $right)
  (f64.add))

;; Subtraction (-)
(func $emit_subtract_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.sub))

;; Multiplication (*)
(func $emit_multiply_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.mul))

;; Division (/)
(func $emit_divide_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.div_s))

;; Modulo (%)
(func $emit_modulo_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.rem_s))

;; Power (**)
(func $emit_power_f64 (param $base f64) (param $exponent f64) (result f64)
  (local.get $base)
  (local.get $exponent)
  (call $math_pow)) ;; External math function
```

#### Comparison Operations

```wat
;; Equality (==)
(func $emit_equal_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.eq)
  (i32.extend8_s))

;; Inequality (!=)
(func $emit_not_equal_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.ne)
  (i32.extend8_s))

;; Less than (<)
(func $emit_less_than_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.lt_s)
  (i32.extend8_s))

;; Greater than (>)
(func $emit_greater_than_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.gt_s)
  (i32.extend8_s))
```

#### Bitwise Operations

```wat
;; Bitwise AND (&)
(func $emit_bitwise_and_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.and))

;; Bitwise OR (|)
(func $emit_bitwise_or_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.or))

;; Bitwise XOR (^)
(func $emit_bitwise_xor_i32 (param $left i32) (param $right i32) (result i32)
  (local.get $left)
  (local.get $right)
  (i32.xor))

;; Left shift (<<)
(func $emit_left_shift_i32 (param $value i32) (param $shift i32) (result i32)
  (local.get $value)
  (local.get $shift)
  (i32.shl))

;; Right shift (>>)
(func $emit_right_shift_i32 (param $value i32) (param $shift i32) (result i32)
  (local.get $value)
  (local.get $shift)
  (i32.shr_s))
```

### Assignment Operations

```wat
;; Simple assignment (=)
(func $emit_assign_i32 (param $local_idx i32) (param $value i32)
  (local.set $local_idx (local.get $value)))

;; Add and assign (+=)
(func $emit_add_assign_i32 (param $local_idx i32) (param $value i32)
  (local.get $local_idx)
  (local.get $value)
  (i32.add)
  (local.set $local_idx))

;; Subtract and assign (-=)
(func $emit_subtract_assign_i32 (param $local_idx i32) (param $value i32)
  (local.get $local_idx)
  (local.get $value)
  (i32.sub)
  (local.set $local_idx))

;; Multiply and assign (*=)
(func $emit_multiply_assign_i32 (param $local_idx i32) (param $value i32)
  (local.get $local_idx)
  (local.get $value)
  (i32.mul)
  (local.set $local_idx))
```

## Control Flow Emitters

### If Statements

```wat
;; Basic if statement
(func $emit_if_statement 
  (param $condition i32)
  (param $then_block i32)
  (param $else_block i32)
  (if (local.get $condition)
    (then (call $execute_then_block))
    (else (call $execute_else_block))))

;; Ternary conditional operator (? :)
(func $emit_ternary_i32 
  (param $condition i32) 
  (param $true_value i32) 
  (param $false_value i32) 
  (result i32)
  (if (result i32) (local.get $condition)
    (then (local.get $true_value))
    (else (local.get $false_value))))
```

### Loop Statements

#### While Loop

```wat
;; While loop implementation
(func $emit_while_loop
  (param $condition_func i32)
  (param $body_func i32)
  (loop $while_loop
    (if (call $condition_func)
      (then
        (call $body_func)
        (br $while_loop)))))
```

#### For Loop

```wat
;; For loop implementation
(func $emit_for_loop
  (param $init_func i32)
  (param $condition_func i32)
  (param $increment_func i32)
  (param $body_func i32)
  (call $init_func)
  (loop $for_loop
    (if (call $condition_func)
      (then
        (call $body_func)
        (call $increment_func)
        (br $for_loop)))))
```

#### Do-While Loop

```wat
;; Do-while loop implementation
(func $emit_do_while_loop
  (param $body_func i32)
  (param $condition_func i32)
  (loop $do_while_loop
    (call $body_func)
    (if (call $condition_func)
      (then (br $do_while_loop)))))
```

### Switch Statement

```wat
;; Switch statement with multiple cases
(func $emit_switch_statement
  (param $value i32)
  (param $case_values i32) ;; Pointer to array of case values
  (param $case_blocks i32) ;; Pointer to array of function pointers
  (param $num_cases i32)
  (param $default_block i32)
  (local $i i32)
  (local $found i32)
  (local.set $i (i32.const 0))
  (local.set $found (i32.const 0))
  (loop $search_loop
    (if (i32.lt_u (local.get $i) (local.get $num_cases))
      (then
        (if (i32.eq 
              (local.get $value)
              (i32.load (i32.add (local.get $case_values) 
                                 (i32.mul (local.get $i) (i32.const 4)))))
          (then
            (call_indirect (type $block_type) 
                          (i32.load (i32.add (local.get $case_blocks)
                                            (i32.mul (local.get $i) (i32.const 4)))))
            (local.set $found (i32.const 1))
            (return))
          (else
            (local.set $i (i32.add (local.get $i) (i32.const 1)))
            (br $search_loop)))
        (br $search_loop))))
  ;; Default case
  (if (i32.eqz (local.get $found))
    (then (call $default_block))))
```

## Function Emitters

### Function Declaration

```wat
;; Function with typed parameters and return value
(func $emit_function_declaration
  (param $func_name i32)
  (param $param_types i32) ;; Pointer to array of type identifiers
  (param $return_type i32)
  (param $body i32) ;; Function body code pointer
  ;; Implementation would generate WAT function signature
  ;; and body based on these parameters
  )

;; Example generated function
(func $example_maia_function (param $a i32) (param $b i32) (result i32)
  (local $c i32)
  ;; Function body: c = a + b; return c;
  (local.set $c (i32.add (local.get $a) (local.get $b)))
  (local.get $c))
```

### Function Call

```wat
;; Direct function call
(func $emit_direct_call
  (param $func_index i32)
  (param $args_ptr i32) ;; Pointer to argument array
  (param $num_args i32)
  (result i32)
  ;; Would dynamically call function based on index with arguments
  (call_indirect (type $function_signature) (local.get $func_index)))

;; Indirect function call through variable
(func $emit_indirect_call
  (param $func_var i32)
  (param $args_ptr i32)
  (result i32)
  (call_indirect (type $generic_function) (local.get $func_var)))
```

## Variable Emitters

### Local Variables

```wat
;; Declare local variable with type
(func $emit_local_variable_declaration
  (param $var_name i32)
  (param $var_type i32) ;; Type identifier (i32=0, i64=1, f32=2, f64=3)
  (param $initial_value i32) ;; Could be pointer to value or immediate
  ;; Implementation adds to local variable table and generates WAT local declaration
  )

;; Access local variable
(func $emit_local_variable_access
  (param $local_index i32)
  (result i32)
  (local.get $local_index))
```

### Global Variables

```wat
;; Global variable declaration
(global $global_var_i32 (mut i32) (i32.const 0))

(func $emit_global_variable_declaration
  (param $global_name i32)
  (param $var_type i32)
  (param $mutable i32) ;; 1 for mutable, 0 for immutable
  (param $initial_value i32)
  ;; Would add to global section and symbol table
  )

;; Access global variable
(func $emit_global_variable_access
  (param $global_index i32)
  (result i32)
  (global.get $global_index))

;; Set global variable
(func $emit_global_variable_set
  (param $global_index i32)
  (param $value i32)
  (global.set $global_index (local.get $value)))
```

## Array and Matrix Emitters

### Array Operations

```wat
;; Create array
(func $emit_array_creation
  (param $size i32)
  (param $element_type i32)
  (result i32) ;; Returns memory pointer to array
  (call $malloc (i32.mul (local.get $size) (i32.const 4))) ;; Assuming 4-byte elements
  )

;; Array element access
(func $emit_array_access
  (param $array_ptr i32)
  (param $index i32)
  (param $element_size i32)
  (result i32)
  (i32.load 
    (i32.add 
      (local.get $array_ptr)
      (i32.mul (local.get $index) (local.get $element_size)))))

;; Array element assignment
(func $emit_array_assignment
  (param $array_ptr i32)
  (param $index i32)
  (param $value i32)
  (param $element_size i32)
  (i32.store 
    (i32.add 
      (local.get $array_ptr)
      (i32.mul (local.get $index) (local.get $element_size)))
    (local.get $value)))
```

### Matrix Operations

```wat
;; Matrix creation
(func $emit_matrix_creation
  (param $rows i32)
  (param $cols i32)
  (param $element_type i32)
  (result i32) ;; Returns memory pointer to matrix
  (call $malloc 
    (i32.mul 
      (i32.mul (local.get $rows) (local.get $cols))
      (i32.const 4))) ;; Assuming 4-byte elements
  )

;; Matrix element access (2D)
(func $emit_matrix_access_2d
  (param $matrix_ptr i32)
  (param $row i32)
  (param $col i32)
  (param $cols i32) ;; Number of columns
  (param $element_size i32)
  (result i32)
  (i32.load 
    (i32.add 
      (local.get $matrix_ptr)
      (i32.mul 
        (i32.add 
          (i32.mul (local.get $row) (local.get $cols))
          (local.get $col))
        (local.get $element_size)))))
```

## Utility Functions

### Type Conversion

```wat
;; Convert i32 to f64
(func $emit_i32_to_f64 (param $value i32) (result f64)
  (f64.convert_i32_s (local.get $value)))

;; Convert f64 to i32
(func $emit_f64_to_i32 (param $value f64) (result i32)
  (i32.trunc_f64_s (local.get $value)))
```

### Memory Management

```wat
;; Simple malloc implementation
(func $malloc (param $size i32) (result i32)
  (global.get $heap_pointer)
  (global.set $heap_pointer 
    (i32.add (global.get $heap_pointer) (local.get $size)))
  )

(global $heap_pointer (mut i32) (i32.const 1024)) ;; Start heap at 1024
```

## Error Handling

```wat
;; Runtime error reporting
(func $emit_runtime_error
  (param $error_code i32)
  (param $message_ptr i32)
  ;; Would interface with JavaScript environment to report error
  unreachable)

;; Bounds checking for arrays
(func $emit_bounds_check
  (param $index i32)
  (param $size i32)
  (if (i32.or 
        (i32.lt_s (local.get $index) (i32.const 0))
        (i32.ge_u (local.get $index) (local.get $size)))
    (then (call $emit_runtime_error 
              (i32.const 1) ;; OUT_OF_BOUNDS error code
              (i32.const 2048))))) ;; Message pointer
```

## Integration Points

### JavaScript Interface

```wat
;; Import JavaScript functions for I/O and system operations
(import "system" "print" (func $js_print (param i32)))
(import "system" "println" (func $js_println (param i32)))
(import "math" "pow" (func $math_pow (param f64 f64) (result f64)))

;; Export compiled functions to JavaScript
(export "main" (func $main_function))
(export "calculate" (func $user_defined_function))
```

## Usage Guidelines

1. **Type Safety**: Always ensure type consistency between MaiaAssembly declarations and WebAssembly operations
2. **Memory Management**: Track allocation and deallocation to prevent memory leaks
3. **Error Handling**: Implement bounds checking and type validation at runtime
4. **Performance**: Optimize frequently used patterns and minimize WebAssembly module size
5. **Debugging**: Include source mapping information for better debugging experience

This structure provides a comprehensive foundation for implementing the MaiaAssembly to WebAssembly compiler emitter component. Each emitter function corresponds to specific MaiaAssembly constructs and generates appropriate WebAssembly instructions.