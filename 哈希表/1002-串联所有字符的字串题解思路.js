/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!words || !words.length) return [];
    let wordLen = words[0].length;
    // 计算所有字串的长度  因为内部字串的长度都相同.直接用一个字串的长度乘以语所有字串的数量
    let allWordsLen = wordLen * words.length;
    let ans = []
    // 统计字符出现的次数
    let wordMap = {};
    for (let w of words) {
        wordMap[w] ? wordMap[w]++ : wordMap[w] = 1
    }

    // 循环次数为总长度减去字符长度+1 因为再往后查找,肯定没有符合的字符
    for (let i = 0; i < s.length - allWordsLen + 1; i++) {

        let wm = Object.assign({}, wordMap);
        for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
            // 拆分字符.查看是否符合要求
            let w = s.slice(j, j + wordLen);
            if (wm[w]) {
                wm[w]--
            } else {
                break;
            }
        }
        if (Object.values(wm).every(n => n === 0)) ans.push(i);
    }
    return ans;
};

const s = "barfoothefoobarman"
const words = ["foo", "bar"]

console.log(findSubstring(s, words))