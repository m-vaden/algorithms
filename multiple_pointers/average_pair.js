/*
**  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array
**  where the average of the pair equals the target average. There may be more than one pair that matches the average target.
**
**  Sample Input:
**  averagePair([1,2,3], 2.5); //true
**  averagePair([1,3,3,5,6,7,10], 8); //true
**  averagePair([-1,0,3,4,5,6], 4.1); //false
**  averagePair([], 4); //false
**
*/

let averagePair = (arr, targetAverage) => {
    let pointer1 = 0,
        pointer2 = arr.length - 1;
    while(pointer1 < pointer2) {
        if(isNaN(arr[pointer1]) || isNaN(arr[pointer2])) {
            return false;
        }
        if(((arr[pointer1] + arr[pointer2]) / 2) > targetAverage)  {
            pointer2 = pointer2 - 1;
        }
        if(((arr[pointer1] + arr[pointer2]) / 2) < targetAverage)  {
            pointer1 = pointer1 + 1;
        }
        if(((arr[pointer1] + arr[pointer2]) / 2) === targetAverage) {
            return true;
        }
    }
    return false;
} 


console.log(
    averagePair([1,2,3], 2.5), //true
    averagePair([1,3,3,5,6,7,10], 8), //true
    averagePair([-1,0,3,4,5,6], 4.1), //false
    averagePair([], 4) //false
);