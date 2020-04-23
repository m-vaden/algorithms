/*
**  Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single
    value in the array returns true when passed to callback. Otherwise it returns false.


**  Sample Input:
    const isOdd = val => val % 2 !== 0;

    someRecursive([1,2,3,4], isOdd) // true
    someRecursive([4,6,8,9], isOdd) // true
    someRecursive([4,6,8], isOdd) // false
    someRecursive([4,6,8], val => val > 10); // false
*/

function someRecursive(arr, callback) {
    if(callback(arr[0])){return true;}
    if(arr.length === 1) {return false;}
    return someRecursive(arr.slice(1), callback)
}

const isOdd = val => val % 2 !== 0;

console.log(
    someRecursive([1,2,3,4], isOdd), // true
    someRecursive([4,6,8,9], isOdd), // true
    someRecursive([4,6,8], isOdd), // false
    someRecursive([4,6,8], val => val > 10) //false
);

