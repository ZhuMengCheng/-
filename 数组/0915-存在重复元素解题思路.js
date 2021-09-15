/**
 * https://leetcode-cn.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // 用set map效果是一样的,,存在返回true不存在添加
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 1, 3])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 3, 1])) // true

// 时间复杂度 O(N)
// 空间复杂度 O(N)