// const arr = [1, 2, 4, 5, 43, 21, 1, 2]
// function getMid(arr) {
//     let firstIndex = 0;
//     let lastIndex = arr.length - 1;
//     while (firstIndex < lastIndex) {
//         firstIndex++
//         lastIndex--
//     }
// }
// getMid(arr)
// function getfastLowIndex(arr) {
//     let firstIndex = 0;
//     let secondIndex = 0;
//     while (secondIndex < arr.length) {
//         firstIndex = firstIndex + 1
//         secondIndex = secondIndex + 2
//         console.log(firstIndex, secondIndex)
//     }
// }
// getfastLowIndex(arr)
// function sortNum(nums) {
//   for (){
// 
//   }
// }
// sortNum(arr)

// const sortArray = (nums, left = 0, right = nums.length - 1) => {
//     if (left >= right) return nums
//     let i = left
//     let j = right - 1
//     while (i <= j) {
//         if (nums[i] > nums[right]) {
//             ;[nums[i], nums[j]] = [nums[j], nums[i]]
//             j--
//         } else {
//             i++
//         }
//     }
//     j++;
//     [nums[j], nums[right]] = [nums[right], nums[j]]
//     sortArray(nums, left, j - 1)
//     sortArray(nums, j + 1, right)
//     return nums
// }


var mySqrt = function (x) {
    let left = 0
    let right = x
    while (left <= right) {
        console.log(left + "------" + right)
        let mid = left + ((right - left) >> 1)
        console.log(mid + "+++++++")
        if (mid * mid <= x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right

};

mySqrt(10)

var mySqrt = function (x) {
    let left = 0
    let right = x
    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (mid * mid <= x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};




