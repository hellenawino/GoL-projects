function is_palindrome_recur(s) {
    if (s.length == 0) return true
    if (s.length == 1) return true
    return s[0] == s[s.length-1] && is_palindrome_recur(s.substring(1,s.length-1))
}

console.log(is_palindrome_recur("madam"))