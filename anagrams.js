// given 2 strings, check to see if they are anagrams of each other (both strings use the same characters in the same quantity)
// spaces, punctuation and capitalization do not count
function anagram (strA, strB) {
    // variables the character maps will be set to. using the simple helper function below
    const aCharMap = charMap(strA);
    const bCharMap = charMap(strB);
    // comparing the amount of keys each character map has.
    // if they are not the same then the strings are not anagrams of each other.
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
    // for loop to go through the character maps
    for (let char in aCharMap){
        // comparing each of the maps to check if they are the same
        if (aCharMap[char] !== bCharMap[char]){
            return false;
        }else{
            return true
        }
    }
}
// helper function to set up a character map for checking the strings against each other
function charMap(str){
    const charMap = {};
    // code inside .replace will get rid of numbers, capitol letters and spaces
    for (let char of str.replace(/[^\w]/, '').toLowerCase()){
        // sets the characters into the charMap and incriments the count of each character or if it didnt exist yet sets the count to 1
        charMap[char]= charMap[char] + 1 || 1;
    }
    return charMap;
}