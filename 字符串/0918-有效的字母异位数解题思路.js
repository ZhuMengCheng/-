/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let firstMap = new Map();
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
    for (let i = 0; i < t.length; i++) {
        if (firstMap.has(t[i])) {
            let count = Number(firstMap.get(t[i]))
            if (count < 0) {
                return false
            } else {
                count = count - 1
                firstMap.set(t[i], count);
            }
        } else {
            return false
        }
    }
    for (let [key, value] of firstMap) {
        if (value > 0) {
            return false
        }
    }
    return true;
};

// 时间复杂度:O(N)
// 空间复杂度:O(3N)
console.log(isAnagram('anagrama', 'nagaram')) // true
console.log(isAnagram('anagrama1', 'nagaram')) // false

