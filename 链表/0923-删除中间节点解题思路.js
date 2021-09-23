/**
 * https://leetcode-cn.com/problems/delete-middle-node-lcci/
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
//  直接推论,,当前值等于下一个节点的值.全部往前推一个节点的值