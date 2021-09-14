/**
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let res = []
    // k > 0 如果遇到合为10需要多一次计算 ,查询条件不能限制为只有num数组的长度
    for (let i = num.length - 1; i >= 0 || k > 0; --i) {
        // 大于0的位数直接相加后取余数进位
        if (i >= 0) {
            k += num[i]
        }
        res.push(k % 10)
        // 计算是否有等于10 或者大于0的情况,在执行下次进位
        k = (k - k % 10) / 10
    }
    return res.reverse()
}

console.log(addToArrayForm([1, 3, 4, 5], 839)) // [ 2, 1, 8, 4 ]
console.log(addToArrayForm([1, 2, 8], 883)) //  [ 1, 0, 1, 1 ]