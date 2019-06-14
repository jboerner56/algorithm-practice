// given a String. write a function that will capitalize the first letter of each word in that string

function capitalize(str) {
    // variable for the capitalized words to be pushed into
    const words = []
    // for loop to go through each of the words in the string. split on the spaces in the string.
    for (let word of str.split(' ')){
        // push the capitalized words, use word.sclice(1), to get every character after the first one. add it to the capitalized first letter.
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    // return the words array, joined by the spaces (' '), space between the quotes
    return words.join(' ');
    
}