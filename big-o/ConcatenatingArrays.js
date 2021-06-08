function concatenate_arrays(A, B) {
    let result = []
    for (x of A)
        result.push(x)
    for (y of B)
        result.push(y)
    return result
}

console.log(concatenate_arrays([1, 2, 3, 4], [5, 6]))