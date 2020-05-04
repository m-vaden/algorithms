/*
**  Write a function which accepts an array and a value. Loop through the array and check if the current array element is equal to the value.
    If it is, return the index at which the element was found. If the value is never found, return -1

**  Sample Input:
*/

function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) { return i; }
    }

    return -1;
}

console.log(
    linearSearch(['b','b','f','s','g','s','t','t','a','d','f','s','g','s','e'], 'a')
)