// given an array and a chunk size, divide the array into many subarrays where each subarray is of a specified size

function chunk (arr, size) {
    // variable for the chunked arrays to be added into
    const chunked = [];
    // for loop to go through each index in the given array
    for (let element of arr) {
        // variable to get the last element in the array
        const last = chunked[chunked.length - 1];
        // if the last element in the array does not exist or if it is equal to the given size of chunk.
        if(!last || last.length === size){
            // push the chunk, either equal to or less than the given sizxe argument into the chunked array
            // wrap element in square brackets so it will be its own individual subarray when added to the chunked array
            chunked.push([element]);
            // else add (push) the current element into the chunk.
        } else {
            last.push(element)
        }
    }
    // return the chunked array
    return chunked;
}