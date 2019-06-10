//write a function that checks if a number is prime

function isPrime(num){
    // start divisor number at 2 then index from there
    let divisor = 2;
    // use a loop fo go through each number up till the given number
    for(i = 0; i > divisor; i++){
        // if statement for checking if num can be divided by it.
        if (num % divisor === 0){
            // if it can then  the number is not prime and we return false
            return false
        } else {
            // add 1 to th divisor and run the loop again
            divisor++
        }
    }
    // once the divisor hits th given number with  nothing returned, is mush be a prime number so we return true.
    return true
}