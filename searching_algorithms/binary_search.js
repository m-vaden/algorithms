/*
**  Binary search should only be used on sorted array.
**  Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
    Otherwise return -1. This algorithm should be more efficient than linearSearch.
**  Sample Input:
*/

function binarySearch(arr, val) {
    let left = 0,
        right = arr.length - 1,
        index = Math.round((right - left) / 2) - 1;

    while(left != right) {
        if(arr[index] < val) {
            left = index;
            index = right - Math.floor((right-left) / 2);
        }else if(arr[index] > val) {
            right = index;
            index = Math.round((right - left) / 2) - 1;
        }else if(arr[index] === val) {
            return index;
        }
    }
    return -1;
}


console.log(
    binarySearch([4, 5, 6, 8, 9, 10, 11, 22, 23, 24, 25, 27, 28, 29, 45, 70, 76, 81, 92,98], 28), //12
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10), //2
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100), //-1
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 4), //-1
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 99), 
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 5)
    
);