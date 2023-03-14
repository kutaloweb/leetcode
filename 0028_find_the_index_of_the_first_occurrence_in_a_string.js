// 28. Find the Index of the First Occurrence in a String

// Easy

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr1 = (haystack, needle) => {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, needle.length) === needle) { // substr(0,3) === 'sad'
      return i; // 0
    }
  }
  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr2 = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) { // i === 0
    let isMatch = true; // true
    for (let j = 0; j < needle.length; j++) {
      // haystack[0+0] === needle[0] haystack[0+1] === needle[1] haystack[0+2] === needle[2]
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return i; // 0
  }
  return -1;
};

console.log(strStr1('sadbutsad', 'sad'));
console.log(strStr2('sadbutsad', 'sad'));