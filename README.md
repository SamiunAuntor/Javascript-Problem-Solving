# JavaScript Problem Solving

A collection of JavaScript solutions for common programming problems and algorithms. Each file contains a standalone function that solves a specific problem.

## Table of Contents

- [String Manipulation](#string-manipulation)
- [Array Operations](#array-operations)
- [Mathematical Operations](#mathematical-operations)
- [Special Challenges](#special-challenges)

## String Manipulation

### 1. Capitalize First Letter of Each Word
**File:** `capitalize_first_letter_of_each_word.js`

Capitalizes the first letter of each word in a string.

**Function:** `capitalizeWords(str)`

**Algorithm:**
1. Split the input string into an array of words using space as the delimiter
2. Initialize an empty result array to store capitalized words
3. Loop through each word in the array
4. For each word, take the first character and convert it to uppercase
5. Concatenate the uppercase first character with the rest of the word (using `slice(1)`)
6. Push the capitalized word to the result array
7. Join all words back together with spaces and return the result

**Example:**
```javascript
console.log(capitalizeWords("hello world")); // "Hello World"
```

---

### 2. Check for Palindrome
**File:** `check_for_palindrome.js`

Checks if a string is a palindrome (reads the same forwards and backwards).

**Function:** `isPalindrome(str)`

**Algorithm:**
1. Initialize an empty string to store the reversed version
2. Loop through the original string from the last character to the first (backwards)
3. For each iteration, append the current character to the reversed string
4. Compare the original string with the reversed string
5. Return `true` if they match, `false` otherwise

**Example:**
```javascript
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false
```

---

### 3. Count Vowels in a String
**File:** `count_vowels_in_a_string.js`

Counts the number of vowels (a, e, i, o, u) in a string (case-insensitive).

**Function:** `countVowels(str)`

**Algorithm:**
1. Initialize a counter variable to 0
2. Create a string containing all vowels (both lowercase and uppercase)
3. Loop through each character in the input string
4. For each character, check if it exists in the vowels string
5. If it's a vowel, increment the counter
6. Return the total count of vowels

**Example:**
```javascript
console.log(countVowels("programming")); // 3
```

---

### 4. Reverse a String
**File:** `reverse_a_string.js`

Reverses a string character by character.

**Function:** `reverseString(str)`

**Algorithm:**
1. Initialize an empty string to store the reversed result
2. Loop through the original string from the last index to the first (backwards)
3. For each iteration, append the current character to the reversed string
4. Return the reversed string

**Example:**
```javascript
console.log(reverseString("hello")); // "olleh"
```

---

## Array Operations

### 5. Find Even Numbers in an Array
**File:** `find_even_numbers_in_an_array.js`

Filters and returns all even numbers from an array.

**Function:** `findEvenNumbers(arr)`

**Algorithm:**
1. Initialize an empty array to store even numbers
2. Loop through each element in the input array
3. For each number, check if it's even by using the modulo operator (`% 2 === 0`)
4. If the number is even, add it to the result array
5. Return the array containing all even numbers

**Example:**
```javascript
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
```

---

### 6. Find the Maximum Number
**File:** `find_the_maximum_number.js`

Finds the maximum number in an array.

**Function:** `findMax(arr)`

**Algorithm:**
1. Assume the first element of the array is the maximum value
2. Loop through the remaining elements of the array (starting from index 1)
3. For each element, compare it with the current maximum
4. If the current element is greater than the maximum, update the maximum to this element
5. Return the maximum value after checking all elements

**Example:**
```javascript
console.log(findMax([5, 1, 9, 3])); // 9
```

---

### 7. Remove Duplicates from an Array
**File:** `remove_duplicates_from_an_array.js`

Removes duplicate values from an array and returns a new array with unique values.

**Function:** `removeDuplicates(arr)`

**Algorithm:**
1. Initialize an empty array to store unique values
2. Loop through each element in the input array
3. For each element, check if it already exists in the unique array using `includes()`
4. If the element is not found in the unique array, add it to the unique array
5. Return the array containing only unique values

**Example:**
```javascript
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
```

---

### 8. Sum of All Numbers in an Array
**File:** `sum_of_all_numbers_in_an_array.js`

Calculates the sum of all numbers in an array.

**Function:** `sumArray(arr)`

**Algorithm:**
1. Initialize a sum variable to 0
2. Loop through each element in the input array
3. For each iteration, add the current element to the sum
4. Return the total sum after processing all elements

**Example:**
```javascript
console.log(sumArray([1, 2, 3, 4])); // 10
```

---

## Mathematical Operations

### 9. Find the Factorial of a Number
**File:** `find_the_factorial_of_a_number.js`

Calculates the factorial of a given number (n! = n × (n-1) × ... × 1).

**Function:** `factorial(num)`

**Algorithm:**
1. Initialize a result variable to 1 (since factorial of 0 is 1)
2. Loop from 1 to the given number (inclusive)
3. For each iteration, multiply the result by the current loop counter
4. Return the final result after completing all multiplications

**Example:**
```javascript
console.log(factorial(5)); // 120 (5! = 5 × 4 × 3 × 2 × 1)
```

---

## Special Challenges

### 10. Ping Pong Challenge
**File:** `pingpong_challenge.js`

A classic FizzBuzz variant that prints numbers from 1 to 20, replacing:
- Multiples of 3 with "Ping"
- Multiples of 5 with "Pong"
- Multiples of both 3 and 5 with "PingPong"

**Function:** `pingPong()`

**Algorithm:**
1. Loop through numbers from 1 to 20 (inclusive)
2. For each number, check the following conditions in order:
   - If the number is divisible by both 3 and 5 (i.e., `i % 3 === 0 && i % 5 === 0`), print "PingPong"
   - Else if the number is divisible by 3 (i.e., `i % 3 === 0`), print "Ping"
   - Else if the number is divisible by 5 (i.e., `i % 5 === 0`), print "Pong"
   - Otherwise, print the number itself
3. Continue until all numbers from 1 to 20 are processed

**Example:**
```javascript
pingPong();
// Output:
// 1
// 2
// Ping
// 4
// Pong
// Ping
// 7
// ...
// PingPong
```

---

## Usage

Each file can be run independently using Node.js:

```bash
node filename.js
```

Or you can import the functions into your own projects:

```javascript
// Example: Using the capitalizeWords function
const { capitalizeWords } = require('./capitalize_first_letter_of_each_word.js');
console.log(capitalizeWords("hello world"));
```

## Requirements

- Node.js (any recent version)

## Notes

- All functions use vanilla JavaScript (no external dependencies)
- Functions are implemented using basic loops and array methods
- Each file includes example usage in the comments
- Solutions are designed to be clear and educational

