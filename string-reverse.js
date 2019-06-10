// write a function that will reverse a string

function reverse(str){
    // variable to add letters from string into
    let answer = '';
    // loop for going through the string by each index
    // we go decriment in this in order to reverse the letters
    for(i = str.length -1; i >= 0; i--){
        // add each letter into the reversed variable
        answer += str[i];
    }
    // return or log the answer
    return answer;
}

// can also use built in methods
function reversed(str){
    // if the string does not exist or has only a single character return that character
    if(!str || str.length < 2 ) return str;
    // using the built in methods, split the string at each index (''), use reverse function, and finally use join function to put the string back together at each index or ('') in this case
    return str.split('').reverse().join('')
}