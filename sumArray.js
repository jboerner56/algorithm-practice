// sum an array
// using for loop
const arr = [1,2,3,4];
function sumArray(arr){
    // set variable sum will be added into
    let sum = 0;
    // loop for going through each of the indexes of the array
    for(i = 0; i < arr.length; i++){
        // add each value from the given index to the sum variable
        sum += arr[i];
        // return or console.log to get product
        console.log(sum);
    }
    return sum;
}
sumArray(arr);

// built in methods
function sumArrayBuiltIn(arr){
    return arr.reduce(function(acc, val) {
        return acc + val;
    })
}