// 33. Search in Rotated Sorted Array

// Medium

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,
// or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//BinarySearch time o(log(n))
const search = (nums, target) => {
  let left = 0; // 0
  let right = nums.length - 1; // 6
  while (left <= right) { // 0 <= 6 4 <= 6 4 <= 4
    const mid = left + Math.floor((right - left) / 2); // 3 5 4
    if (nums[mid] === target) return mid; // 4
    if (nums[left] <= nums[mid]) { //4 <= 7 0 <= 1
      if (nums[left] <= target && target < nums[mid]) { // 0 <= 0 && 0 < 1
        right = mid - 1; // 4=5-1
      } else {
        left = mid + 1; // 4=3+1
      }
    } else { // none
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // none
      } else {
        right = mid - 1; // none
      }
    }
  }
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
