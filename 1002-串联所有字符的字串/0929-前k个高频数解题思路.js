
const nums = [3, 3, 3, 0, 0, 0, 1, 1, 1, 1]
const k = 2


function getK(nums, k) {
    // 定义map存储数据 并统计个数
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    // 获取所有统计值 
    let arr = [...map.values()]
    // 排序统计值后,排序截取k的长度,,即为查找数的出现次数
    arr = arr.sort((a, b) => { return a - b }).reverse().slice(0, k)
    let res = []
    for (const [key, value] of map) {
        // 判断出现次数是否存在 出现次数最多的数组.如果最多的出现了.统计key值
        if (-1 != arr.findIndex(item => { return item == value })) {
            res.push(key)
        }
    }
    return res
}



console.log(getK(nums, k))