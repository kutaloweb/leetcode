// 39. Combination Sum

// Medium

// Given an array of distinct integers candidates and a target integer target, return a list of all unique
// combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations
// for the given input.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:
// Input: candidates = [2], target = 1
// Output: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const result = [];
  const dfs = (start, tempArray, sum) => { // 0,[],0 -> 0,[2],2 ... 3,[2,2,2,7],13 -> 1,[2,2,3],7 ... 3,[6,7],13 -> 3,[7],7
    if (sum > target) { // ... 13 > 7 ... 13 > 7
      return;
    }
    if (sum === target) { // ... 7 == 7 ... 7 === 7
      result.push(tempArray); // push([2,2,3]) -> push([7])
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      // 0,[[],2],0+2 -> 0,[[2],2],2+2 ... 3[[6],7],6+7 -> 3[[],7],0+7
      dfs(i, [...tempArray, candidates[i]], sum + candidates[i]);
    }
  };
  dfs(0, [], 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
