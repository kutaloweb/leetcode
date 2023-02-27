// 12. Integer to Roman

// Medium

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

// Given an integer, convert it to a roman numeral.

// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.

// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  let str = "";
  let count = 0;
  if (num >= 1000) {
    count = Math.floor(num / 1000);
    num = num % 1000;
    for (let i = 1; i <= count; i++) {
      str += "M";
    }
  }
  if (num >= 900) {
    num = num % 100;
    str += "C";
    str += "M";
  }
  if (num >= 500) {
    count = Math.floor((num - 500) / 100);
    num = num % 100;
    str += "D";
    for (let i = 1; i <= count; i++) {
      str += "C";
    }
  }
  if (num >= 400) {
    num = num % 100;
    str += "C";
    str += "D";
  }
  if (num >= 100) {
    count = Math.floor(num / 100);
    num = num % 100;
    for (let i = 1; i <= count; i++) {
      str += "C";
    }
  }
  if (num >= 90) {
    num = num % 10;
    str += "X";
    str += "C";
  }
  if (num >= 50) { // 58
    count = Math.floor((num - 50) / 10); // 0;
    num = num % 10; // 8
    str += "L"; // L
    for (let i = 1; i <= count; i++) {
      str += "X";
    }
  }
  if (num >= 40) {
    num = num % 10;
    str += "X";
    str += "L";
  }
  if (num >= 10) {
    count = Math.floor(num / 10);
    num = num % 10;
    for (let i = 1; i <= count; i++) {
      str += "X";
    }
  }
  if (num >= 9) {
    num = 0;
    str += "I";
    str += "X";
  }
  if (num >= 5) { // 8
    count = num - 5; // 3
    num = 0;
    str += "V"; // LV
    for (let i = 1; i <= count; i++) {
      str += "I"; // LVIII
    }
  }
  if (num >= 4) {
    num = 0;
    str += "I";
    str += "V";
  }
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      str += "I";
    }
  }
  return str;
};

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman2 = (num) => {
  let dict = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";
  for (let i = 0; i < val.length; i++) {
    if (num >= val[i]) { // 58>50 8>5 3>1
      let count = parseInt((num / val[i]).toString()); // 1 1 3
      num %= val[i]; // 8 3 0
      for (let j = 0; j < count; j++) {
        result = result + dict[i]; // L LV LVI LVII LVIII
      }
    }
  }
  return result;
};

console.log(intToRoman(58));
console.log(intToRoman2(58));
