// 10. Regular Expression Matching

// Hard

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:
// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  // If both are empty then nothing to match so true
  if (!s && !p) return true;
  // Let's find out if first char is match or if pattern char is '.' (then it can match any alphabet)
  let hasMatching = s.length > 0 && (s[0] === p[0] || p[0] === '.'); // true 2>0 a==a a==. | false 2>0 a!=und | true 1>0 a==a a==. | false 1>0 a!=und | false 0>0
  // Case 1: if we find * after first char match
  if (p[1] === '*') { // * und * und *
    // Match without current pattern char or match with current pattern char for rest of the string
    return (isMatch(s, p.slice(2)) || hasMatching && isMatch(s.slice(1), p)); // true (a,a*) | true (a*) | false ()
  }
  // Case 2: if we don't find * after first char match
  return hasMatching ? isMatch(s.slice(1), p.slice(1)) : false; // false | false
};

console.log(isMatch('aa', 'a*'));
