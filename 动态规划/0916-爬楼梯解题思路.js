/**
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let dp = Array.from({ length: n + 1 }).fill(0)
    dp[0] = dp[1] = 0;
    let first = 0;
    let second = 0;
    // 每1到两位计算最小值.
    for (let i = 2; i <= cost.length; i++) {
        const tempFirst = dp[i - 1] + cost[i - 1]
        const tempSecond = dp[i - 2] + cost[i - 2];
        dp[i] = Math.min(tempFirst, tempSecond);
        // const value = Math.min(first + cost[i - 1], second + cost[i - 2]);
        // second = first;
        // first = value;
    }
    return dp[n]
    // return second
};
// 时间复杂度:O(N)
// 空间复杂度:O(N)
console.log(minCostClimbingStairs([10, 15, 20])) // 15
console.log(minCostClimbingStairs([2, 3, 4, 5, 7, 8, 11])) // 16

