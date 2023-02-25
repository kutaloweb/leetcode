// 7. Reverse Integer

// Medium

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const sign = x > 0 ? 1 : -1
  const result = Math.abs(x).toString().split('').reverse().join('')
  return parseInt(result) > 2 ** 31 - 1 ? 0 : sign * parseInt(result)
}

/**
 * @param {number} x
 * @return {number}
 */
const reverse2 = x => {
  let reversedArray = [];
  let xArray = x.toString().split('');
  for (let i = 0; i < xArray.length; i++) {
    reversedArray.unshift(parseInt(xArray[i]));
  }
  let reverse = parseInt(reversedArray.join(''));
  if (reverse > 2 ** 31 - 1) return 0;
  return x > 0 ? reverse : -reverse;
};

console.log(reverse(-123));
console.log(reverse2(-123));