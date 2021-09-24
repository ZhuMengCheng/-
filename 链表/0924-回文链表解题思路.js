
/**
 * https://leetcode-cn.com/problems/aMhZSa/
 * @param {ListNode} head
 * @return {boolean}
 * 放入数组对比前后值是否相同,注意下标越界问题,只剩一个数,无需对比.
 */
var isPalindrome = function (head) {
    let list = []
    while (head) {
        list.push(head.val);
        head = head.next
    }
    let arrLen = list.length
    let len = Math.floor(arrLen / 2)
    for (let i = 0; i < len; i++) {
        if (list[i] !== list[arrLen - 1 - i]) {
            return false
        }
    }
    return true
};
// 第二个方法 反转链表..然后一个一个对比值,如果不相同 不是回文链表
// 时间复杂度:O(N)
// 空间复杂度:O(N)