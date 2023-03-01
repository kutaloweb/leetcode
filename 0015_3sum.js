// 15. 3Sum

// Medium

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const result = [];
  if (nums.length < 3) return result;
  nums = nums.sort((a, b) => a - b); // [ -4, -1, -1, 0, 1, 2 ]
  for (let left = 0; left < nums.length - 2; left++) {
    // Skips duplicates [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1],[-1,0,1]]
    if (left > 0 && nums[left] === nums[left - 1]) {
      continue; // 2>0 && -1 === -1
    }
    let middle = left + 1; // 1=0+1 2=1+1 4=3+1
    let right = nums.length - 1; // 5=6-1 5=6-1 5=6-1
    while (middle < right) {
      let sum = nums[left] + nums[middle] + nums[right]; // -3=-4+-1+2 -3=-4+-1+2 -2=-4+0+2 -1=-4+1+2 0=0+-1+-1+2 0=-1+0+1 3=0+1+2
      if (sum === 0) {
        result.push([nums[left], nums[middle], nums[right]]);
        // Skips duplicates [-2,0,0,2,2] => [[-2,0,2],[-2,0,2]]
        while (nums[middle] === nums[middle + 1]) {
          middle++; // none
        }
        while (nums[right] === nums[right - 1]) {
          right--; // none
        }
        middle++; // 3 4
        right--; // 4 3
      } else if (sum < 0) {
        middle++; // 2 3 4 5
      } else {
        right--; // 4
      }
    }
  }
  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));