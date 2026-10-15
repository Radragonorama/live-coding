// 🧩 1. Two Sum
//    https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    const complement = target - num;
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(num, i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9), "===", [0, 1]);
console.log(twoSum([3, 2, 4], 6), "===", [1, 2]);
console.log(twoSum([3, 3], 6), "===", [0, 1]);
