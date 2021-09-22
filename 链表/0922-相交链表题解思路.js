/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 在map中查找到相同的 即可开始返回当前节点
 */
var getIntersectionNode = function (headA, headB) {
    let map = new Map();
    while (headA) {
        map.set(headA, true);
        headA = headA.next
    }
    while (headB) {
        if (map.has(headB)) {
            return headB
        }
        headB = headB.next
    }
    return null
};

// 时间复杂度:O(N)
// 空间复杂度:O(N)