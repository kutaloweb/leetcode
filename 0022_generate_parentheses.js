// 22. Generate Parentheses

// Medium

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = [];
  function backtrack(s, left, right) {
    // ('', 1, 1) ((, 0, 1) ((), 0, 0)
    if (right === 0) { // 0
      result.push(s); // push ()
    }
    if (left < right) { // 0<1
      backtrack(s + ')', left, right - 1);
    }
    if (left > 0) { // 1>0
      backtrack(s + '(', left - 1, right);
    }
  }
  backtrack('', n, n);
  return result;
}

console.log(generateParenthesis(1));