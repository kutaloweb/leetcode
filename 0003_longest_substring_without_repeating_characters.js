// 3. Longest Substring Without Repeating Characters

// Medium

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstringBrute1 = (s) => {
  if (s.length <= 1) return s.length;
  let maxLength = 0;
  let substring = '';
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    const index = substring.indexOf(s.charAt(i));
    if (index >= 0) {
      substring = substring.slice(index + 1);
      substring += char;
    } else {
      substring += char;
      maxLength = Math.max(substring.length, maxLength);
    }
  }
  return maxLength;
};

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstringBrute2 = (s) => {
  if (s.length <= 1) return s.length;
  let maxLength = 0;
  let substring = '';
  for (let i = 0; i < s.length; i++) {
    if (substring.length > maxLength) {
      maxLength = substring.length;
    }
    substring = s[i];
    for (let j = i + 1; j < s.length; j++) {
      let char = s[j];
      if (substring.includes(char)) {
        break;
      } else {
        substring += char;
      }
    }
  }
  return maxLength;
};

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstringBrute3 = (s) => {
  if (s.length <= 1) return s.length;
  let maxLength = 0;
  let substring = '';
  for (let char of s) {
    if (substring.includes(char)) {
      let index = substring.indexOf(char);
      substring = substring.substring(index + 1);
    }
    substring += char;
    if (substring.length > maxLength) {
      maxLength = substring.length;
    }
  }
  return maxLength;
}

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstringMap1 = (s) => {
  if (s.length <= 1) return s.length;
  const map = {};
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    if (rightChar in map) { // { a: 0, b: 1, c: 2 }
      left = Math.max(left, map[rightChar] + 1);
    }
    map[rightChar] = right;
    const currentWindowSize = right + 1 - left;
    maxLength = Math.max(maxLength, currentWindowSize);
  }
  return maxLength;
}

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstringMap2 = (s) => {
  if (s.length <= 1) return s.length;
  const map = {};
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] >= left) { // { a: 0, b: 1, c: 2 }
      left = map[s[right]] + 1;
    }
    map[s[right]] = right;
    const currentWindowSize = right + 1 - left;
    if (currentWindowSize > maxLength) {
      maxLength = currentWindowSize;
    }
  }
  return maxLength;
}

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstringMap3 = (s) => {
  if (s.length <= 1) return s.length;
  let map = new Map();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    if (map.get(rightChar) >= left) { // { 'a' => 3, 'b' => 6, 'c' => 5 }
      left = map.get(rightChar) + 1;
    }
    map.set(rightChar, right);
    const currentWindowSize = right + 1 - left;
    if (currentWindowSize > maxLength) {
      maxLength = currentWindowSize;
    }
  }
  return maxLength;
}

console.log(longestSubstringBrute1('abcabcbb'));
console.log(longestSubstringBrute2('pwwkew'));
console.log(longestSubstringBrute3('abcabcbb'));
console.log(longestSubstringMap1('abcabcbb'));
console.log(longestSubstringMap2('abcabcbb'));
console.log(longestSubstringMap3('abcabcbb'));
