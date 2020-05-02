/*
**  Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

**  Sample Input:
    // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

let capitalizeFirst = arr => {
    if(arr.length < 1) { return []; }

    let capitalizedString = arr[0].charAt(0).toUpperCase() + arr[0].slice(1),
        result = [];

    result.push(capitalizedString);

    return result.concat(capitalizeFirst(arr.slice(1)));
}

console.log(
    capitalizeFirst(['car','taco','banana'])
)