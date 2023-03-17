// 29. Divide Two Integers

// Medium

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated
// to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  let count = 0;
  const isNegative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (divisor <= dividend) {
    dividend = dividend - divisor; // 10-3 7-3 4-3
    count++; // 3
  }
  return isNegative ? -count : count;
};

console.log(divide(10, 3));
