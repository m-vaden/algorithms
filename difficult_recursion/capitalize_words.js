/*
**  Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

**  Sample Input:
    let words = ['i', 'am', 'learning', 'recursion'];
    capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

let capitalizeWords = (arr) => {
    let base = 1,
        output = [arr[0].toUpperCase()];

    if(arr.length === base) {
        return output;
    }

    return output.concat(capitalizeWords(arr.slice(1)));
};


let words = ['i', 'am', 'learning', 'recursion'];
console.log(
    capitalizeWords(words) // ['I', 'AM', 'LEARNING', 'RECURSION']
)

