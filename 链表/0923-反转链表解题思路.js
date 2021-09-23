/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null
    let cur = head;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre
};
// 时间复杂度:O(N)
// 空间复杂度:O(1)