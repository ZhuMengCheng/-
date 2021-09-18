/**
 * https://leetcode-cn.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (s, t) {
    let firstMap = new Map();
    // 保存需要用到的字符
    for (let key in s) {
        let count = 0
        if (firstMap.has(s[key])) {
            count = Number(firstMap.get(s[key]))
            count = count + 1;
            firstMap.set(s[key], count);
        } else {
            count = 1
            firstMap.set(s[key], count)
        }
    }
    // 需要用到的字符在map中去掉
    for (let i = 0; i < t.length; i++) {
        if (firstMap.has(t[i])) {
            count = Number(firstMap.get(t[i]))
            count = count - 1
            firstMap.set(t[i], count);
        }
    }
    // 判断是否存在时间
    for (let [key, value] of firstMap) {
        if (value > 0) {
            return false
        }
    }
    return true;
};
// 时间复杂度:O(N)
// 空间复杂度:O(2N)
console.log(canConstruct('ab', 'ba')) // true
