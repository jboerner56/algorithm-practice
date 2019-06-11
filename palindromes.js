// given a string, return true if the string is a palindrome, else return false.
// palindrome is a string that is the same if it is reversed.

function palindrome(str) {
    // reverse the given string with built in methods
    const reversed = str.split('').reverse().join('');
    // return the given string and compair with (===) to the reversed string.
    // will return true if they are the same and false if they are not
    return str === reversed
}

// alternate solution
// also uses built in methods
function palindromeAlt(str){
    // split the string at each character
    // use the every() method, takes in 2 arguments (char, i), where char is a character in the string and i is the index of that character 
    return str.split(''). every((char, i) => {
        // compares the character with the opposite character at the end of the string.
        // character to be compared     gives the end of the string, minus the index to go backwards through it. need to subtrack 1 from the index bc js indexes start at 0 
        return char === str[str.length - i - 1]
    })
}