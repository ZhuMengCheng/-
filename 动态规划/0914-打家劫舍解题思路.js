/**
 * https://leetcode-cn.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    } else if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    let first = nums[0] // 定义最大值 奇数值和(下标)
    let second = Math.max(nums[0], nums[1]); // 定义最大值 偶数值和(下标)
    for (let i = 2; i < nums.length; i++) {
        let temp = second;
        // 首先存储当前后一位值,可能是奇数
        // 可能是偶数.交替往前相加判断,判断后的值,一直取最大值.获取到的最大值,可能是跨度超过2的最大值.
        second = Math.max(first + nums[i], second);
        // 保留当前相加比较前的下标的最大值
        first = temp;
    }
    return second;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)

console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([1, 2, 3, 1, 5, 4, 2, 6])) // 15