// 11. Container With Most Water

// Medium

// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Example 2:
// Input: height = [1,1]
// Output: 1

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1; // 3
  let maxArea = 0;
  while (left < right) { // 0<3 1<3 1<2
    // area = length * height using shorter height since water overflows the short side first.
    const area = (right - left) * Math.min(height[left], height[right]); // 3-0*min(1,2)=3 (3-1)*min(8,2)=4 2-1*min(8,6)=6
    area > maxArea && (maxArea = area);
    // Increment the idx that points to the shorter wall to find a taller wall.
    height[left] < height[right] ? left++ : right--; // 0:3 1:3 1:2 1:1
  }
  return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea2 = (height) => {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // x-axis
      const length = j - i; // 1=1-0 2=2-0 3=3-0 1=2-1 2=3-1 1=3-2
      // y-axis limited by shorter wall since water overflows the short side.
      const minHeight = Math.min(height[i], height[j]); // 1=min(1,8) 1=min(1,6) 1=min(1,2) 6=min(8,6) 2=min(8,2) 2=min(6,2)
      // const minHeight = height[i] < height[j] ? height[i] : height[j];
      const area = length * minHeight; // 1=1*1 2=2*1 3=3*1 6=1*6 4=2*2 2=1*2
      if (area > maxArea) maxArea = area;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2]));
console.log(maxArea2([1, 8, 6, 2]));