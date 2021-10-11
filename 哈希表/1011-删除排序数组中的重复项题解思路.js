const arr = [1, 2, 2, 3, 4, 4, 4, 4, 4, 5, 6, 7, 9, 9]
/**
 * @param {number[]} arr
 * @return {number}
 * 双指针 第一个记录有效数组长度,第二个遍历数组所有长度
 */
function deleteSortNum(arr) {
    let firstIndex = 0; //指向前面的有效数组
    for (let secondIndex = 1; secondIndex < arr.length; secondIndex++) {
        if (arr[firstIndex] != arr[secondIndex]) {
            arr[firstIndex + 1] = arr[secondIndex]
            firstIndex++;
        }
    }
    return firstIndex + 1
}

时间复杂度: O(N)
空间复杂度: O(1)
console.log(deleteSortNum(arr)) // 8
