function reverseSentence(arr) {
    let reverseArray = []
    let wordArray = []
    for (var i = 0; i < (arr.length); i++) {
        let el = arr[i];
        if(el != ' '){
            wordArray.push(el)
        }else{
            reverseArray = wordArray.concat(reverseArray)
            reverseArray.unshift(" ")
            wordArray = []
        }
    }
    reverseArray = wordArray.concat(reverseArray)
    return reverseArray
}

const arr = ['t', 'h', 'i', 's', ' ', 'i', 's', ' ', 'g', 'o', 'o', 'd']
console.log(reverseSentence(arr))