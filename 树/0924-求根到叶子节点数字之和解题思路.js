const root = {
    val: 4,
    left: {
        val: 9,
        left: {
            val: 5
        },
        right: {
            val: 1
        }
    },
    right: {
        val: 0
    }
}
/**
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * 求根到叶子节点数字之和
 * @param {TreeNode} root
 * @return {number}
 * 深度遍历. 每一级别深度的值 等于本身上一级的层级的10倍数
 */
let sum = 0
function dfs(root, val) {
    if (root == null) {
        return sum
    }
    let temp = val * 10 + root.val
    if (root.left == null && root.right == null) {
        sum += temp;
        return
    } else {
        dfs(root.left, temp)
        dfs(root.right, temp)
    }
}
dfs(root, 0)
console.log(sum)