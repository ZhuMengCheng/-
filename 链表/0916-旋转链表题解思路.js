/**
 * https://leetcode-cn.com/problems/rotate-list/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // 如果是空的,返回本身
    if (!head) {
        return head
    }
    let n = 1;
    let cur = head;
    // 计算链表长度
    while (cur.next) {
        cur = cur.next;
        n++;
    }
    // 超过链表长度会重复操作  计算一次移动的最短距离
    let add = n - k % n;
    // 把链表看成一个环
    if (add === n) {
        return head;
    }
    cur.next = head;
    // 开始替换
    while (add) {
        cur = cur.next;
        add--;
    }
    const ret = cur.next;
    cur.next = null;
    // 返回替换的位置后的值
    return ret;
};
// 时间复杂度:O(N)
// 空间复杂度:O(1)
