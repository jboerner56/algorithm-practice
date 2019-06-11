// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

let uncommonFromSentences = function(A, B) {
    // splits both arrays by the spaces between the words and sets the result to a new array (arr)
    let arr = A.concat(' ',B).split(' ')
    // 
    let objArr = {}
    // array the unique words will be pushed into
    let ans = []
    // for loop to go through each word in the combined array
    for(let word of arr){
        // add +1 count for each new word
        objArr[word] = (objArr[word] || 0) + 1
    }
// for loop checking if the word already has a count associated with it.
    for(let o in objArr){
        // if the word already has a count associated with it then that means it is not unique.
        if(objArr[o] == 1) ans.push(o)
    }
    // return array of unique words.
    return ans
};