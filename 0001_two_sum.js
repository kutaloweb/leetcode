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

// Time: O(n^2)
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

// Time: O(n^2)
const twoSumBrute2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
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
    map[nums[i]] = i; // { '3': 0, '2': 1, '4': 2 }
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map && map[complement] !== i) {
      return [i, map[complement]];
    }
  }
}

console.log(twoSumBrute([2,7,11,15], 9));
console.log(twoSumBrute2([2,7,11,15], 9));
console.log(twoSumMap([2,7,11,15], 9));
console.log(twoSumMap2([2, 7, 11, 15], 9));

console.log(twoSumBrute([3, 2, 4], 6));
console.log(twoSumBrute2([3, 2, 4], 6));
console.log(twoSumMap([3, 2, 4], 6));
console.log(twoSumMap2([3, 2, 4], 6));
