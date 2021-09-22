/**
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    const map = new Set();
    while (head !== null) {
        if (map.has(head)) {
            return head;
        }
        map.add(head);
        head = head.next;
    }
    return null;
};

// 时间复杂度:O(N)
// 空间复杂度:O(N)