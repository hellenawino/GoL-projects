function reverseArrayInPlace(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
}
const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(reverseArrayInPlace(arr))