// 8. String to Integer (atoi)

// Medium

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.

// Check if the next character (if not already at the end of the string) is '-' or '+'.
// Read this character in if it is either. This determines if the final result is negative or positive respectively.
// Assume the result is positive if neither is present.

// Read in next the characters until the next non-digit character or the end of the input is reached.
// The rest of the string is ignored.

// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
// If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).

// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range.
// Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.

// Return the integer as the final result.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
// ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
// ^
// Step 3: "42" ("42" is read in)
// ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.

// Example 2:
// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
// ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
// ^
// Step 3: "   -42" ("42" is read in)
// ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.

// Example 3:
// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
// ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
// ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
// ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  let neg = false;
  s = s.trim();
  if (s[0] === '-') {
    neg = true;
    s = s.slice(1); // 42 word
  } else if (s[0] === "+") {
    s = s.slice(1);
  }
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number.parseInt(s[i]))) {
      result += s[i]; // 4 42
    } else {
      break; // 42
    }
  }
  if (result === '') return 0;
  result = Number.parseInt(result);
  if (neg === true) result *= -1; // -42
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31)
  } else {
    return result;
  }
}

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi2 = (s) => {
  s = s.trim();
  let result = 0;
  let sign = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "+" || s[i] === "-") {
      if (i !== 0) break; // "+-12" case
      sign = s[i] === "+" ? 1 : -1;
      continue;
    }
    if (s[i] < "0" || s[i] > "9") {
      break; // when i === 3
    }
    result = result * 10 + Number(s[i]); // 0*10+4 4*10+2
  }
  result = result * sign; // -42
  if (result < -(2 ** 31 - 1)) result = (2 ** 31) * (-1);
  if (result >= (2 ** 31)) result = (2 ** 31) - 1;
  return result;
}

console.log(myAtoi(' -42 word'));
console.log(myAtoi2(' -42 word'));