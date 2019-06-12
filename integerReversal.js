// given an SVGAnimatedInteger, return the reverse order of the numbers
// must return a integer not a string
function reversedInt(num) {
    // in order to use the4 built in methods need to turn the integer into a string.
    // use the built in toString() function/method
    const reversed = num.toString().split('').reverse().join('')
    // if the given number is a negative
    // use an if so the number can be multiplied by -1 to keep the result negative
    if (num < 0){
        return parseInt(reversed) * -1
    }
    // if the number is positive then we don't need to do anything to is. simply return it
    return parseInt(reversed)
}