// given a string, return the character that appears the most

function maxChar(str) {
    // variable to put the characters that are in the string into while looping through
    const charMap = {};
    let max = 0;
    let maxChar = '';
    // use a loop to go through each character in the string
    for(let char of str) {
        // if the character at a given index is in charMap already, add one to the count
        if (charMap[char]){
            charMap[char]++;
        // if the character is not in charMap already, set it equal to one
        } else {
            charMap[char] = 1;
        }
    }
    // run a second loop to go through the characterMap to see which character appears the moth
    // char in this loop is assigned to the keys in the object
    for (let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char
        }
    }
    return maxChar
}