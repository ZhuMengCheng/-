
const arr = [1, 5, 4, 3, 8, 9, 5, 3, 2]
const target = 3
function getMaxValue(arr, target) {
    let result = []
    for (let i = target - 1; i < arr.length; i++) {
        let tempValue = Number.MIN_SAFE_INTEGER
        for (let k = 0; k < target; k++) {
            tempValue = tempValue > arr[i - k] ? tempValue : arr[i - k]
        }
        result.push(tempValue)
    }
    return result
}
console.log(getMaxValue(arr, target))

// 暴力解法..数据量大,会超时
