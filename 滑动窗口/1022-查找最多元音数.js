const str = 'wiaeakdlfii';
const targetStr = 'aeiou';

const keyLen = 4;
const getMaxY = (arr, target) => {
    let map = new Map();
    map.set('a', 0)
    map.set('e', 0)
    map.set('i', 0)
    map.set('o', 0)
    map.set('u', 0)
    let resNum = 0
    for (let i = 0; i < target; i++) {
        if (map.has(arr[i])) {
            resNum++
        }
    }
    let temp = resNum
    for (let i = 0, k = target; k < arr.length; i++, k++) {
        console.log(arr[i], arr[k], map.has(arr[i]), map.has(arr[k]))
        if (map.has(arr[k])) {
            temp++
        }
        if (map.has(arr[i])) {
            temp--
        }
        resNum = Math.max(resNum, temp)
    }

    console.log(resNum)
}


console.log(getMaxY(str, keyLen))