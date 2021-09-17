/**
 * https://leetcode-cn.com/problems/delete-and-earn/
 * @param {number[]} nums
 * @return {number}
 * 题目要求 取值项的+1 -1的值被抛弃.所以以索引存储对应数字的和
 */
var deleteAndEarn = function (nums) {
    let maxVal = 0;
    for (const val of nums) {
        maxVal = Math.max(maxVal, val);
    }
    const sum = new Array(maxVal + 1).fill(0);
    for (const val of nums) {
        sum[val] += val;
    }
    return rob(sum);
};
// 以下写法和 打家劫舍 相同,获取非相邻的最大值
const rob = (nums) => {
    if (nums.length == 1) { return nums[0] }
    else if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    let first = nums[0];
    let second = nums[1];
    for (let i = 2; i < nums.length; i++) {
        let temp = second;
        second = Math.max(nums[i] + first, second);
        first = temp;
    }
    return second
}
// 时间复杂度:O(N)
// 空间复杂度:O(1)
console.log(deleteAndEarn([2, 2, 3, 4, 5, 5, 6, 6])) // 20
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4, 5, 5, 6, 6])) // 21
