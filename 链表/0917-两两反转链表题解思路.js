/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    // 当前的链表下一个,替换成上一个.
    const newHead = head.next;
    // 递归替换 每两个一组替换
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};