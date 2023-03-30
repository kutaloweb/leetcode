// 34. Find First and Last Position of Element in Sorted Array

// Medium

// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const result = [-1, -1];

  // find left
  let left = 0; // 0
  let right = nums.length - 1; // 5
  while (left <= right) { // 0<=5 3<=5 3<=3
    const mid = Math.floor((left + right) / 2); // 2 4 3
    if (nums[mid] === target) { // nums[4](8)==8 nums[3](8)==8
      right = mid - 1; // 4-1==3 3-1==2
    } else if (nums[mid] > target) {
      right = mid - 1; // none (target is 6 case)
    } else if (nums[mid] < target) { // nums[2](7) < 8
      left = mid + 1; // 2+1==3
    }
  }
  if (nums[left] !== target) {
    return result; // none
  } else {
    result[0] = left; // 3
  }

  // find right
  right = nums.length - 1; // 5
  while (left <= right) { // 3<=5 5<=5
    const mid = Math.floor((left + right) / 2); // 4 5
    if (nums[mid] === target) { // nums[4](8)==8
      left = mid + 1; // 5
    } else if (nums[mid] > target) { // nums[5](10) > 8
      right = mid - 1; // 4
    }
  }
  result[1] = right; // 4

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
