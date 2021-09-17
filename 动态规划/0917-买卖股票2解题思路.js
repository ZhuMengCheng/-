/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 * 计算所有出递增区间即可 相加和就是最大利润
 */
var maxProfit = function (prices) {
    if (prices.length == 1) {
        return 0
    }
    let sum = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            sum = prices[i] - prices[i - 1] + sum
        }
    }
    return sum
};
// 时间复杂度:O(N)
// 空间复杂度:O(1)
console.log(maxProfit([7, 6, 4, 3, 2, 1]))  // 0
console.log(maxProfit([7, 6, 4, 3, 6, 1]))  // 3

