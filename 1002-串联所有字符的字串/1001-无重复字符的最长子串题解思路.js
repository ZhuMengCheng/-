const str = "pwwkew"
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Set集合，记录每个字符是否出现过
    const setMap = new Set();
    const strLen = s.length;
    let rightIndex = -1
    let resultLength = 0;
    for (let i = 0; i < strLen; ++i) {
        if (i != 0) {
            // 偏移量右侧指针,如果存在,删除元素,同时移动左侧元素
            setMap.delete(s.charAt(i - 1));
        }
        // 移动右侧的元素
        while (rightIndex + 1 < strLen && !setMap.has(s.charAt(rightIndex + 1))) {
            setMap.add(s.charAt(rightIndex + 1));
            ++rightIndex;
        }
        // 计算每次的无重复字符子串长度即可
        resultLength = Math.max(resultLength, rightIndex - i + 1);
    }
    return [resultLength];
};


console.log(lengthOfLongestSubstring(str))