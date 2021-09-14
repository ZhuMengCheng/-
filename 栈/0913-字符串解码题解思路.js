/**
 * https://leetcode-cn.com/problems/decode-string/
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