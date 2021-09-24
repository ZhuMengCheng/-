/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/7WHec2/
 * @param {ListNode} head
 * @return {ListNode}
 * 数组转换后,在转换回成链表结构..
 */
var sortList = function (head) {
    let list = new ListNode(0, head)
    let result = list
    let arr = [];
    // 获取链表值
    while (head) {
        arr.push(head.val)
        head = head.next;
    }
    // 排序链表值
    arr = arr.sort((a, b) => { return a - b })
    // 重新创建链表
    for (let i = 0; i < arr.length; i++) {
        result.next.val = arr[i]
        result = result.next
    }
    return list.next
};
// 时间复杂度: O(N+M)
// 空间复杂度L:O(N+M)