function sortArray(arr){
    let noSwaps = 0
    function swap(a, b){
        let x = arr[a]
        arr[a] = arr[b]
        arr[b] = x
    }
    for (var i = 0; i < (arr.length); i++) {
        let el = arr[i];
        while(el-1 != i){
            swap(i, el-1)
            el = arr[i];
            ++noSwaps
        }
    }
    return noSwaps
}

const arr=[7,1,3,2,4,5,6]
console.log(sortArray(arr))

const arr1=[4,3,1,2]
console.log(sortArray(arr1))

const arr2=[2,3,4,1,5]
console.log(sortArray(arr2))

const arr3=[1,2,3,4,5,6,7]
console.log(sortArray(arr3))