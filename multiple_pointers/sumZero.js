/*
**  Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
**   where the sum is 0. Return and array that includes both values that sum to zero or undefined if a pair does not exist.
**  


**  Sample Input:
**  sumZero([-3,-2,-1,0,1,2,3]) [-3,3]
**  sumZero([-2,0,1,3]) undefined
**  sumZero([1,2,3]) undefined
*/


let sumZero = (sortedArray) => {
    let left = 0,
        right = sortedArray.length - 1

    while(left < right) {
        let sum = sortedArray[right] + sortedArray[left];
        if(sum === 0 ) {
            return [sortedArray[right],sortedArray[right]];
        }else if(sum > 0) {
            right --;
        }else {
            left++
        }
    }
}
console.log(
    sumZero([-3,-2,-1,0,1,2,3]),
    sumZero([-2,0,1,3]), 
    sumZero([1,2,3]) 
);