/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/submissions/
 * @param {ListNode} cur
 * @return {ListNode}
 */
var deleteDuplicates = function (cur) {
    if (cur == null) {
        return null
    }
    let head = cur
    while (head.next) {
        if (head.val == head.next.val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return cur
};
// 时间复杂度:O(N)
// 空间复杂度:O(1)