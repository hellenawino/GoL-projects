function is_palindrome_rev(s) {
    let reversedString = s.split("").reverse().join("")
    return reversedString === s
}

console.log(is_palindrome_rev("madam"))