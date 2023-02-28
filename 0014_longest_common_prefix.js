// 14. Longest Common Prefix

// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0 || strs[0] === "") return "";
  for (let i = 0; i < strs[0].length; i++) {
    let current = strs[0][i]; // f l o
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== current) { // f==f f==f l==l l==l o==o i!==o
        return strs[0].slice(0, i); // fl
      }
    }
  }
  return strs[0];
}

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix2(strs) {
  if (strs.length === 0 || strs[0] === "") return "";
  return longestCP(strs, 0, strs.length - 1); // ([ 'flower', 'flow', 'flight' ], 0, 2)
}

function longestCP(strs, left, right) {
  if (left === right) { // 0!=2 0!=1 0=0 1=1 2=2
    return strs[left]; // flower flow flight
  } else {
    let mid = Math.floor((left + right) / 2); // 1 0
    let lcpLeft = longestCP(strs, left, mid); // flower flow
    let lcpRight = longestCP(strs, mid + 1, right); // flow flight
    return commonPrefix(lcpLeft, lcpRight);
  }
}

function commonPrefix(left, right) {
  let min = Math.min(left.length, right.length); // 4 4
  for (let i = 0; i < min; i++) {
    if (left[i] !== right[i]) {  // f==f l==l o==o w==w | f==f l==l o!=i
      return left.slice(0, i); // fl (0,2)
    }
  }
  return left.slice(0, min); // flow 4
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
