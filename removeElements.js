function removeElement(nums, val) {
    for (var i = 0; i < (nums.length); i++) {
        let el = nums[i]; 
        if(el===val){
            nums.splice(i, 1)
            --i
        }
    }
    return nums
}

const nums=[3,2,2,3]
console.log(removeElement(nums, 3))