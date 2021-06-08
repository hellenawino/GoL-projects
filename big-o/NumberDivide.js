function count_div_2(n) {
    count = 0
    while(n > 1){
        n = n / 2
        count += 1
    }
        
    return count
}

console.log(count_div_2(8))