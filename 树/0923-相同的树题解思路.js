/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode-cn.com/problems/same-tree/
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null && q == null) {
        // 判断两个节点是否为空  空相同
        return true;
    } else if (p == null || q == null) {
        return false;
    } else if (p.val != q.val) {
        return false
    } else {
        // 循环判断每个同层级节点是否相同
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)