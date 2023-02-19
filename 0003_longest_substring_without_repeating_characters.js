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
    let char = s[i]; // a b c a b c b b
    const index = substring.indexOf(s.charAt(i)); // -1 -1 -1 0 0 0 1 1
    if (index >= 0) { // abc bca cab abc cb
      substring = substring.slice(index + 1); // bc ca ab c
      substring += char; // bca cab abc cb b
    } else {
      substring += char; // a ab abc
      maxLength = Math.max(substring.length, maxLength); // (1,0) (2,1) (3,2)
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
  for (let char of s) { // a b c a b c b b
    if (substring.includes(char)) {
      let index = substring.indexOf(char); // 0 0 0 1 1
      substring = substring.slice(index + 1); // bc cd ab c
    }
    substring += char; // a ab abc bca cab abc cb
    if (substring.length > maxLength) { // (1>0) (2>1) (3>2)
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
    const rightChar = s[right]; // a b c a b c b b
    if (rightChar in map) { // {a:0,b:1,c:2} {a:3,b:1,c:2} {a:3,b:4,c:2} {a:3,b:4,c:5} {a:3,b:6,c:5}
      left = Math.max(left, map[rightChar] + 1);  // 1 2 3 5 7
    }
    map[rightChar] = right;
    const currentWindowSize = right + 1 - left; // (0+1-0)=1 (1+1-0)=2 (2+1-0)=3 (3+1-1)=3 (4+1-2)=3 (5+1-3)=3 (6+1-5)=2 (7+1-7)=1
    maxLength = Math.max(maxLength, currentWindowSize); // (1,1) (2,2) (3,3) (3,3) (3,3) (3,3) (3,2) (3,1)

  }
  return maxLength;
}

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstringMap2 = (s) => {
  if (s.length <= 1) return s.length;
  let map = new Map();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right]; // a b c a b c b b
    if (map.get(rightChar) >= left) {  // {a:0,b:1,c:2} {a:3,b:1,c:2} {a:3,b:4,c:2} {a:3,b:4,c:5} {a:3,b:6,c:5}
      left = map.get(rightChar) + 1; // 1 2 3 5 7
    }
    map.set(rightChar, right);
    const currentWindowSize = right + 1 - left; // (0+1-0)=1 (1+1-0)=2 (2+1-0)=3 (3+1-1)=3 (4+1-2)=3 (5+1-3)=3 (6+1-5)=2 (7+1-7)=1
    if (currentWindowSize > maxLength) { console.log(currentWindowSize, '>', maxLength) // (1>0) (2>1) (3>2)
      maxLength = currentWindowSize;
    }
  }
  return maxLength;
}

console.log(longestSubstringBrute1('abcabcbb'));
console.log(longestSubstringBrute2('abcabcbb'));
console.log(longestSubstringMap1('abcabcbb'));
console.log(longestSubstringMap2('abcabcbb'));
