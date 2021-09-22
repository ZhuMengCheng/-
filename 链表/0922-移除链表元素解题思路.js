/**
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const list = new ListNode(0)
    list.next = head
    let temp = list;
    while (temp.next != null) {
        if (temp.next.val == val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return list.next
};

// 时间复杂度:O(N)
// 空间复杂度:O(1)