/**
 * https://leetcode-cn.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 * 上一个打家劫舍的升级问题.环形问题,头部和尾部 有一个偷了不能偷另一个
 */
var rob = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    } else if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    // 计算两个长度的最大可偷的值
    const firstNum = getNum(nums, 0, nums.length - 2)
    const secondNum = getNum(nums, 1, nums.length - 1)
    return Math.max(firstNum, secondNum)
};
const getNum = (nums, start, end) => {
    let first = nums[start];
    let second = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
        let temp = second;
        // 首先存储当前后一位值,可能是奇数
        // 可能是偶数.交替往前相加判断,判断后的值,一直取最大值.获取到的最大值,可能是跨度超过2的最大值.
        second = Math.max(first + nums[i], second);
        // 保留当前相加比较前的下标的最大值
        first = temp;
    }
    return second
}
// 时间复杂度O(2N)
// 空间复杂度O(1)
console.log(rob([1, 2, 3, 4, 5, 6])) // 12
console.log(rob([1, 2, 3])) // 3
console.log(rob([1, 3, 2])) // 3
