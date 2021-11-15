/**
 * https://leetcode-cn.com/problems/two-sum/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 定义map存储差值    
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // 计算差值
        const value = target - nums[i];
        if (map.has(value)) {
            // 存在即返回当前存储差值的下标,和当前值的下标
            // 返回第一个符合的答案
            return [map.get(value), i];
        } else {
            // 存储所有差值的下标
            map.set(nums[i], i)
        }
    }
};

// 空间复杂:O(N)
// 时间复杂:O(N)

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([1, 6, 5, 3], 8))
