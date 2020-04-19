/*
**  Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the
**  length of the number passed to the function.
**
**  Note that a subarray must consist of consecutive elements from the origin array. In the first example below, [100, 200, 300] is a 
**  subarray of the origin array, but [200, 300] is not.


**  Sample Input:
**  maxSubarraySum([100, 200, 300, 400], 2) // 700
**  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
**  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
**  maxSubarraySum([3, -1, 7, -4, 1, -1, 4, -2, 1], 2) // 6
**  maxSubarraySum([2,3], 3) // null
*/


let maxSubarraySum = (arrOfIntegers, sumIntQuant) => {
    let windowStart = 0,
        windowEnd = sumIntQuant,
        currentSum = 0,
        highestSum = 0;
    let counter = 1;
    for(let i = windowStart; i < windowEnd; i++) {
        currentSum = currentSum + arrOfIntegers[i];
    }
    highestSum = currentSum;
    while(windowStart <= (arrOfIntegers.length - sumIntQuant)) {
        currentSum = currentSum + arrOfIntegers[windowEnd] - arrOfIntegers[windowStart];
        if(currentSum >= highestSum) {
            highestSum = currentSum;
        }
        windowEnd++
        windowStart++
        counter++
    }
    if(Number.isNaN(highestSum)) {
        return null;
    }    
    return highestSum;
}

console.log(
  maxSubarraySum([100, 200, 300, 400], 2), // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
  maxSubarraySum([3, -1, 7, -4, 1, -1, 4, -2, 1], 2), // 6
  maxSubarraySum([2,3], 3) // null
)
