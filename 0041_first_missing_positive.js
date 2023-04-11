// 41. First Missing Positive

// Hard

// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i; // { '0': 2, '1': 0, '2': 1 }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (map[i] === undefined) {
      return i; // 3
    }
  }
  return nums.length + 1; // cover nums = [1], expected 2
};

console.log(firstMissingPositive([7,8,9,11,12]));
