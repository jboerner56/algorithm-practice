// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
    // use a variable for each of the diagonal sums to be pushed into
    let dia1 = 0;
    let dia2 = 0
    // use 2 for loops, one for the rows and one for the columns
    for(i = 0; i < arr.length; i++){
        // loop through the array again
        for(j = 0; j < arr.length; j++){
            // using 2 if statements to check is there is an element from either of the diagonals
            if(i === j){
                // if the 2 indexes have something in them, add that number to the first diagonal varibale
                dia1 += arr[i][j]
            }
            // second if to check the other indexes of the arrays
            // need the length -1 because the sum of the indexes for the second diagonal will always be the array length - 1 for any square array
            if(i + j === arr.length - 1) {
                // add the value at the given index to the second diagonal array's variable
                dia2 += [i][j]
            }
        }
    }
    // return the absolute difference using built in math methods
    return Math.abs(dia1 - dia2);
}