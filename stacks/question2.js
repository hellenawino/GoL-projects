function reverseString(s) {
    let stack = []
    for(let letter of s){
        stack.push(letter)
    }

    let reversedString = ""
    for(let i = s.length-1; i>=0; i--){
        reversedString+=stack.pop()
    }

    return reversedString;
}

console.log(reverseString("something"))