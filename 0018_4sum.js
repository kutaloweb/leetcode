// 18. 4Sum

// Medium

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  let result = [];
  nums.sort((a, b) => a - b); // [ -2, -1, 0, 0, 1, 2 ]
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++){
      let middle = j + 1; // 2 3 3 4
      let right = nums.length - 1; // 5
      while (middle < right) { // 2<5 3<5 4<5 3<5 3<5 3<4 4<5
        let sum = nums[i] + nums[j] + nums[middle] + nums[right]; // -1 -1 0 0 1 0 3
        if (sum === target) { // 0 == 0 0 == 0 0 == 0
          result.push([nums[i], nums[j], nums[middle], nums[right]]); // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
          while (nums[middle] === nums[middle + 1]) {
            middle++; // none
          }
          while (nums[right] === nums[right - 1]) {
            right--; // none
          }
          middle++; // 5 4 4
          right--; // 4 4 3
        } else if (sum < target) {
          middle++; // 3 4
        } else {
          right--; // 4 4
        }
      }
      // [2,2,2,2,2], 8 => [[2,2,2,2],[2,2,2,2]] expected [[2,2,2,2]]
      while (nums[j] === nums[j + 1]) {
        j++;
      }
    }
    // [2,2,2,2,2], 8 => [[2,2,2,2],[2,2,2,2]] expected [[2,2,2,2]]
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result;
}

console.log(fourSum([1,0,-1,0,-2,2], 0));