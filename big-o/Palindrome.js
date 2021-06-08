function is_palindrome(s) {
    if (s.length == 0) return true

    size = s.length
    midpoint = size / 2

    for (let i = 0; i < midpoint + 1; i++) {
        if (s[i] != s[size - i - 1]) {
            return false
        }
    }

    return true
}

console.log(is_palindrome("madam"))