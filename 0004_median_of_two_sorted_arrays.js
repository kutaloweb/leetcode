// 4. Median of Two Sorted Arrays

// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const newSortedArr = [...nums1, ...nums2].sort((a, b) => a - b); // [1, 2, 3, 4]
  const isOdd = newSortedArr.length % 2 === 1; // false
  const mid = newSortedArr.length / 2; // 2
  if (isOdd) {
    return newSortedArr[Math.floor(mid)];
  } else {
    return (newSortedArr[mid] + newSortedArr[mid - 1]) / 2; // (3 + 2) / 2
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))
