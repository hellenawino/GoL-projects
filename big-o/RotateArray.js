function rotate_left(A, d) {
    let result = []
    for(let i = 0; i < A.length; i++){
        result[(i+d)%A.length] = A[i]
    }
    return result   
}

console.log(rotate_left([3, 2, 1, 10, 15, 3] , 3))