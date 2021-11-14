/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // let sum = 0
    // nums.map((item) => {
    //     sum += item
    // })
    // return sum / 2
    const n = nums.length;
    if (n < 2) {
        return false;
    }
    let sum = 0, maxNum = 0;
    for (const num of nums) {
        sum += num;
        maxNum = maxNum > num ? maxNum : num;
    }
    if (sum % 2 != 0) {
        return false;
    }
    const target = Math.floor(sum / 2);
    if (maxNum > target) {
        return false;
    }








};

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(canPartition(arr))
