// write function that will return the sum of an array of large numbers
function aVeryBigSum(ar) {
    // use built in reduce method/function
    // reduce takes 2 parameters in this case a and b
    // a is the total 
    // b in the amount being added to the total from the array
    return ar.reduce((a, b) => a + b);

};