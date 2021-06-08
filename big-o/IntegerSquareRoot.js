function int_sqrt(x) {
    for(let i = 0; i < x; i++){
        if (i * i == x)
            return i
    }
        
    return -1
}

console.log(int_sqrt(36))