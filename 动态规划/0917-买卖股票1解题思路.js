/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 初始化最大最小值
    let maxValue = 0
    let minValue = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i++) {
        // 计算当前的最小值
        if (prices[i] < minValue) {
            minValue = prices[i]
        } else if (prices[i] - minValue > maxValue) {
            // 计算最小值在最大值之前的最大差值
            maxValue = prices[i] - minValue;
        }
    }
    return maxValue;
};
// 时间复杂度:O(N)
// 时间复杂度:O(1)
console.log(maxProfit([12, 6, 2, 5, 3, 2, 3])) // 3
console.log(maxProfit([1, 6, 2, 5, 3, 12, 3])) // 11
