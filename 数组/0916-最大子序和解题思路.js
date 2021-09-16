/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        // 滚动计算当前值和前面值的和,取最大值
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    }
    return Math.max(...nums)
};
// 时间复杂度 O(N)
// 空间复杂度 O(1)
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([-2, 1, -3, 4, -11, 2, 1, -5, 4])) // 4