// 1. Two Sum

// Easy

// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumBrute = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        result.push(i, j);
      }
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumMap = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // 7 2
    if (map.has(complement)) { // {2:0}
      return [map.get(complement), i];
    }
    map.set(nums[i], i); // {2:0}
  }
  return [];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumMap2 = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i; // {2:0,7:1,11:2,15:3}
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // 7
    if (complement in map && map[complement] !== i) {
      return [i, map[complement]];
    }
  }
}

console.log(twoSumBrute([2, 7, 11, 15], 9));
console.log(twoSumMap([2, 7, 11, 15], 9));
console.log(twoSumMap2([2, 7, 11, 15], 9));
