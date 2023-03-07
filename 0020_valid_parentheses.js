// 20. Valid Parentheses

// Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

class Stack {
  constructor() {
    this.data = [];
  }
  push(val) {
    this.data.push(val);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let stack = new Stack();
  for (let char of s) {
    if (char === '{' || char === '[' || char === '(') {
      stack.push(char); // Stack { data: [ '(' ] }
    } else if (char === '}' && stack.peek() === '{') {
      stack.pop();
    } else if (char === ')' && stack.peek() === '(') {
      stack.pop(); // Stack { data: [] }
    } else if (char === ']' && stack.peek() === '[') {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.isEmpty()
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid2 = (s) => {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]); // [ '(' ]
    } else {
      let last = stack.pop(); // '('
      if (s[i] !== map[last]) { // ')' !== ')' false
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid2('()'));
