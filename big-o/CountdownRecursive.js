//here the space complexity is 0(n) because for every number a call is added to the call stack
function countdownRecursive(n) {
    if(n == 0){
        console.log("Blast off")
    } 
    else{
        console.log(n)
        countdownRecursive(n - 1)
    }   
}

countdownRecursive(5)