// 35. Search Insert Position

// Easy

// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
//
// You must write an algorithm with O(log n) runtime complexity.
//
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

/*
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }
  return nums.length;
};
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0; // 0
  let right = nums.length - 1; // 3

  while (left <= right) { // 0<=3 2<=3
    // Get middle index
   let mid = Math.floor((left + right) / 2); // 1 2
    // Check if is target, if yes return index
    if (nums[mid] === target) {
      return mid; // 2
    }
    // If target is less, move in right
    if (target < nums[mid]) { // none
      right = mid - 1;
      // Else target must be greater, move in left
    } else {
      left = mid + 1; // 2=1+1
    }
  }
  // Target not in nums, return where it would be.
  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
