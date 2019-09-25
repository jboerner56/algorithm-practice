// function comparing ratings in three categories
function compare(a0, a1, a2, b0, b1, b2){
    // comparing the 2 different peoples scores
    // if a0 is greater than b0, add one to a, else keep at zero. same for each of the three rating imputs for both people
    let alice = ( a0 > b0 ? 1 : 0 ) + ( a1 > b1 ? 1 : 0 ) + ( a2 > b2 ? 1 : 0 );
    let bob = ( a0 < b0 ? 1 : 0 ) + ( a1 < b1 ? 1 : 0 ) + ( a2 < b2 ? 1 : 0 );
    
    return [alice, bob];
}