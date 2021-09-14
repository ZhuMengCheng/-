/**
 * https://leetcode-cn.com/problems/merge-sorted-array/submissions/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 要求在nums1上面操作  使用逆向双指针 因为数组要求的是 非递减,那就是递增数组,从后往前判断即可
 */
var merge = function (nums1, m, nums2, n) {
    // nums1数组的最后一位有效数字下标
    let firstIndex = m - 1;
    // nums2数组的最后一位有效数字下标
    let secondIndex = n - 1;
    //  合并后的数组最后一位下标,也是nums1的最后一位有效数字的下标.
    let lastIndex = m + n - 1;
    let value = ''
    // 循环条件是 指针大于等于0
    while (firstIndex >= 0 || secondIndex >= 0) {
        if (firstIndex == -1) {
            // 如果第一个数组指针小于0,将另一个数组后面的值全部复制上
            value = nums2[secondIndex--]
        } else if (secondIndex == -1) {
            // 如果第二个数组指针小于0,将另一个数组后面的值全部复制上
            value = nums1[firstIndex--]
        } else if (nums1[firstIndex] < nums2[secondIndex]) {
            // 把值最大的防盗第一个数组最后一个位置
            value = nums2[secondIndex--]
        } else {
            // 否则添加第二个数组最大值到第一个数组最后吗
            value = nums1[firstIndex--]
        }
        // 赋值排序
        nums1[lastIndex--] = value
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))  // [1,2,2,3,5,6]

// 时间复杂度:O(m+n)
// 空间复杂度:O(1)