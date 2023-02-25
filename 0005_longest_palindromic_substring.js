// 5. Longest Palindromic Substring

// Medium

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let palindrome = "";
  for (let i = 0; i < s.length; i++) { // babad
    let subStr = "";
    for (let j = i; j < s.length; j++) {
      subStr += s[j];  // b ba bab baba babad > a ab aba adad > b ba bad > a ad
      if (subStr.length > palindrome.length && isPalindrome(subStr)) {
        palindrome = subStr;  // b bab
      }
    }
  }
  return palindrome;
}

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome2 = (s) => {
  let palindrome = s[0];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let subStr = s.slice(i, j);  // b ba bab baba babad > a ab aba adad > b ba bad > a ad d
      if (subStr.length > palindrome.length && isPalindrome2(subStr)) {
        palindrome = subStr; //bab
      }
    }
  }
  return palindrome;
}

function isPalindrome2(str) {
  let reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome2('babad'));