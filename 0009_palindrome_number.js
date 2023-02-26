// 9. Palindrome Number

// Easy

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  let revertedNum = 0;
  let temp = x;
  while (temp > 0) {
    let digit = temp % 10; // 1 2 1
    temp = Math.floor(temp / 10); // 12 1 0
    revertedNum = revertedNum * 10 + digit; // 0*10+1=1 1*10+2=12 12*10+1=121
  }
  return x === revertedNum;
}

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome2 = (x) => {
  if (x < 0) return false
  let str = x.toString()
  let mid = Math.floor(str.length / 2);
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) { // 1 === 1
      return false;
    }
  }
  return true;
}

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome3 = (x) => {
  if (x < 0) return false;
  const revertedNum = x.toString().split('').reverse().join('');
  return x === parseInt(revertedNum);
}

console.log(isPalindrome(121));
console.log(isPalindrome2(121));
console.log(isPalindrome3(121));