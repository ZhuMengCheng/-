/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map();
    // 计算所有字符存在的次数
    for (let str in s) {
        if (map.has(s[str])) {
            let count = Number(map.get(s[str]))
            count = count + 1
            map.set(s[str], count)
        } else {
            map.set(s[str], 1)
        }
    }
    // 取第一个 值为1 的字符,,即为第一个不重复的字符
    let str = ''
    for (let [key, value] of map) {
        if (value == 1) {
            str = key
            break
        }
    }
    // 循环查询第一个字符的下标
    for (let i = 0; i < s.length; i++) {
        if (s[i] == str) {
            return i
        }
    }
    return -1
};
// 时间复杂度:O(N)
// 空间复杂度:O(N)
console.log(firstUniqChar('ledosigolcde')) // 4