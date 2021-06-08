function int_sqrt_bisect(x) {
    low = 0
    high = x
    guess = x / 2
    while(true){
        diff = guess * guess - x
        
        if (diff == 0)
            return guess
        if (diff < 0) {
            low = guess
        }else{
            high = guess
        }
        
        if (high - low <= 1)
            break

        guess = Math.floor((low + high) / 2)
    }
        
    return -1
}

console.log(int_sqrt_bisect(36))