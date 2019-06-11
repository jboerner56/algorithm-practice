// write function that returns the sum of the three given numbers
// nest 3 functions that take each of the given numbers and adds them together to get the total
function tripleAdd (num){
    return function(num2){
        return function(num3){
            // return the sum of each of the given numbers
            return num + num2 +num3
        }
    }
}