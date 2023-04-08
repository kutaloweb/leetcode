// 40. Combination Sum II

// Medium

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in
// candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
//   [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
//   ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
//   [
//     [1,2,2],
//     [5]
//   ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b); // [1, 1, 2, 5, 6, 7, 10]
  const result = [];
  const dfs = (start, tempArray, sum) => { // 0,[],0 -> 1,[1],1 ... 7,[1,1,5,10],17 -> 5,[1,1,6],8 ...
    if (sum > target) { // ... 17 > 8 ...
      return;
    }
    if (sum === target) { // ... 8 == 8 ...
      result.push(tempArray); // push([2,2,3]) -> push([7])
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) { // 1>0 && 1===1
        continue; // avoiding [ 1, 2, 5 ] and [ 1, 7 ] duplicates
      }
      // 1,[[],1],0+1 -> 2,[[1],1],1+1 ... 5,[[1,1],6],2+6 ...
      dfs(i + 1, [...tempArray, candidates[i]], sum + candidates[i]);
    }
  };
  dfs(0, [], 0);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
