// 1. Two Sum
// Easy

// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.

// Example:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Time: O(n^2)
const twoSumBrute = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] === target - nums[i]) {
        result.push(i, j);
      }
    }
  }
  return result;
}

//Time: O(n)
const twoSumMap = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

//Time: O(n)
const twoSumMap2 = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}

console.log(twoSumBrute([3, 2, 4], 6));
console.log(twoSumMap([3, 2, 4], 6));
console.log(twoSumMap2([3, 2, 4], 6));
