/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2
    } else if (l2 == null) {
        return l1
    } else if (l2.val > l1.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};

// 时间复杂度:O(N+M)
// 空间复杂度:O(N+M)

