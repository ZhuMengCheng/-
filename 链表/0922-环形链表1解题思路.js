/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 污染链表方法 添加tag标记
    while (head) {
        if (head.tag) {
            return true;
        }
        head.tag = true;
        head = head.next;
    }
    return false;
    // hash 方法 存储经过的值,如果有相同的,则有环
    // let map = new Map();
    // while (head) {
    //     if (map.has(head)) {
    //         return true;
    //     }
    //     map.set(head, true)
    //     head = head.next;
    // }
    // return false
    // 双指针 
    // if (head == null || head.next == null) {
    //     return false
    // }
    // let slow = head;
    // let fast = head.next;
    // while (slow != fast) {
    //     if (fast == null || fast.next == null) {
    //         return false;
    //     }
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    // return true;
};

// 时间复杂度:O(N)
// 空间复杂度:O(N)