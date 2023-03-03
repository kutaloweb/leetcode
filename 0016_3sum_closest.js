// 16. 3Sum Closest

// Medium

// Given an integer array nums of length n and an integer target,
// find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b); // [ -4, -1, 1, 2 ]
  let result = nums[0] + nums[1] + nums[2]; // -4
  for (let left = 0; left < nums.length - 2; left++) {
    let middle = left + 1; // 1 2
    let right = nums.length - 1; // 3 3
    while (middle < right) {
      let sum = nums[left] + nums[middle] + nums[right]; // -3=-4-1+2 -1=-4+1+2 2=2-1+1+2
      if (sum < target) { // -3<1 -1<1
        middle++; // 2 3
      } else if (sum > target) { // 2>1
        right--; // 2
      } else {
        return target; // none
      }
      if (Math.abs(target - sum) < Math.abs(target - result)) { // 4<5 (1--3)<(1--4) 2<4(1--1)<(1--3) 1<2(1-2)<(1--1)
        result = sum; // -4=-3 -3=-1 -1=2
      }
    }
  }
  return result;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));