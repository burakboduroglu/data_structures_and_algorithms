# Welcome to Data Structures and Algorithms Repository 👋

This repository contains the implementation of various data structures and algorithms in JavaScript. However, you can implement them in any programming language of your choice. If you find any issues or have any suggestions, feel free to open an issue or create a pull request.

## What is Data Structures and Algorithms?

- `Data Structures` are the way we store, organize, and manage data.
- `Algorithms` are a set of steps to solve a particular problem.

## Why should we use Data Structures and Algorithms?

They are essential tools for solving complex problems in computer science. They help us to write efficient code and improve the performance of our applications.

## What is Big O Notation?

Big O Notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It is used to analyze the performance of an algorithm.
For instance - O(1), O(n), O(log n), O(n^2), etc.

- O(1) - Constant Time
- O(n) - Linear Time
- O(log n) - Logarithmic Time
- O(n^2) - Quadratic Time
- O(2^n) - Exponential Time

Best Case - The minimum time taken by an algorithm to solve a problem. (e.g., O(1))

Worst Case - The maximum time taken by an algorithm to solve a problem. (e.g., O(n^2))

`Example 1`
Here is an O(1) example:

```javascript
function add(a, b) {
  return a + b;
}
```

`Example 2`
Here is an O(n) example:

```javascript
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

Each loop iteration increases the total time complexity by 1. Hence, the time complexity of the above function is O(n). If nested loops are used, the time complexity will be O(n^2).

`Example 3`
O(log n) example is binary search. We will cover this in the algorithms section.

## Arrays

Arrays are a collection of elements stored in contiguous memory locations. They are used to store multiple values in a single variable. The elements in an array can be accessed using an index.

We are covering the following array challenges:

- Reverse String
- Palindromes
- Integer Reversal
- Sentence Capitalization
- FizzBuzz
- Max Profit
- Array Chunk
- Two Sum

Creating custom array:

1. Create an array class.
2. Implement the following methods:
   - constructor
   - push
   - pop
   - get
   - shift
   - deleteByIndex
3. Test the methods.

You can find the implementation of the above challenges in the [Arrays](Arrays/index.js) folder.
In this folder, you will learn how to create custom arrays and implement the above challenges.
