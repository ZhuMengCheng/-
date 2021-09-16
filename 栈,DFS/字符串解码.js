// 题目地址
// https://leetcode-cn.com/problems/decode-string/

// 前置知识
// 栈
// 括号匹配
// 题目描述
// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 示例 1：

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
// 示例 3：

// 输入：s = "2[abc]3[cd]ef"
// 输出："abcabccdcdcdef"
// 示例 4：

// 输入：s = "abc3[cd]xyz"
// 输出："abccdcdcdxyz"


/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let num = 0;
    let numStock = []
    let resultStock = []
    let result = ''
    for (let str in s) {
        if (!isNaN(s[str])) {
            num = num * 10 + Number(s[str])
        } else if (s[str] == '[') {
            resultStock.push(result);
            result = '';
            numStock.push(num)
            num = 0;
        } else if (s[str] == ']') {
            let copyNum = numStock.pop();
            result = resultStock.pop() + result.repeat(copyNum);
        } else {
            result += s[str]
        }
    }
    return result

};

console.log(decodeString('3[a]2[bc]'))