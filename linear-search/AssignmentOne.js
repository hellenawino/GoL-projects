function additionIndices(arr, target){
    const numIndexes = {};
    for(let i = 0; i<arr.length;i++){
        let currentDifference = target - arr[i];
        if(numIndexes[currentDifference] !== undefined && numIndexes[currentDifference] !== i){
            return([numIndexes[currentDifference], i])
        }else{
            numIndexes[arr[i]] = i;
        }
    }
}

console.log(additionIndices([2,7,11,15], 9))
console.log(additionIndices([3,2,4], 6))
console.log(additionIndices([3,3], 6))