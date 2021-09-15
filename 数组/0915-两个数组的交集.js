/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = new Map();
    // 计算每个数字出现的次数用map存储
    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            let num = Number(map.get(nums1[i]))
            num = num + 1
            map.set(nums1[i], num)
        } else {
            map.set(nums1[i], 1)
        }
    }
    // 保存重复交集
    let result = []
    for (let i = 0; i < nums2.length; i++) {
        // 判断当前值是否在map中出现
        if (map.has(nums2[i])) {
            let num = Number(map.get(nums2[i]))
            // 如果当前值剩余值大于1,执行添加操作
            if (num > 0) {
                num = num - 1
                result.push(nums2[i])
                map.set(nums2[i], num)
            } else {
                // 当前小于0 删除map中的当前元素,因为第二个数组中的当前存在元素超过第一个数组中的元素个数
                map.delete(nums2[i])
            }
        }
    }
    return result
};

const nums1 = [4, 9, 5, 4, 5]
const nums2 = [1, 4, 5, 9, 4, 4]
intersect(nums1, nums2) // [ 4, 5, 9, 4 ]

// 空间复杂度:O(M+N)
// 时间复杂度:O(M+N)
