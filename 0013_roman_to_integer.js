// 13. Roman to Integer

// Easy

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let current = map[s[i]]; // 50 5 1 1 1
    let next = map[s[i + 1]]; // 5 1 1 1
    if (current < next) { // 50<5 5<1 1<1 1<1 1<undefined
      result -= current;
    } else {
      result += current; // 50 55 56 57 58
    }
  }
  return result;
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt2 = (s) => {
  let res = 0;
  let last = '';
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {  // L V I I I
      case 'I':
        res += 1; // 56 57 58
        break;
      case 'V':
        last === 'I' ? res += 3 : res += 5; // 55
        break;
      case 'X':
        last === 'I' ? res += 8 : res += 10;
        break;
      case 'L':
        last === 'X' ? res += 30 : res += 50; // 50
        break;
      case 'C':
        last === 'X' ? res += 80 : res += 100;
        break;
      case 'D':
        last === 'C' ? res += 300 : res += 500;
        break;
      case 'M':
        last === 'C' ? res += 800 : res += 1000;
        break;
    }
    last = s[i];
  }
  return res;
};

console.log(romanToInt('LVIII'));
console.log(romanToInt2('LVIII'));
