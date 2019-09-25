// function comparing ratings in three categories
function compare(a0, a1, a2, b0, b1, b2){
    // comparing the 2 different peoples scores
    // if a0 is greater than b0, add one to a, else keep at zero. same for each of the three rating imputs for both people
    let alice = ( a0 > b0 ? 1 : 0 ) + ( a1 > b1 ? 1 : 0 ) + ( a2 > b2 ? 1 : 0 );
    let bob = ( a0 < b0 ? 1 : 0 ) + ( a1 < b1 ? 1 : 0 ) + ( a2 < b2 ? 1 : 0 );
    
    return [alice, bob];
}
// using for loop
// set variables
let alice = [1,2,3];
let bob = [3,2,1];
function compare2(a,b){
    // 
    let arr1 = 0;
    let arr2 = 0;
    for (i = 0; i < a.length; i++){
        //if the values are equal dont need to add anything to the count
        if(a[i] === b[i]){
            // if a[i] if greater than b[i], add one the count of the one that it greater
        }else{
            a[i] > b[i] ? arr1++ : arr2++
        }
        return [arr1, arr2];
    }
}