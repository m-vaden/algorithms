/*
**  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array
**  where the average of the pair equals the target average. There may be more than one pair that matches the average target.
**
**  Sample Input:
**  averagePair([1,2,3], 2.5);
**  averagePair([1,3,3,5,6,7,10], 8);
**  averagePair([-1,0,3,4,5,6], 4.1);
**  averagePair([], 4);
**
*/

function averagePair(arr, target) {
    let point1 = 0
    let point2 = arr.length-1;

    function average(num1, num2) {
        return (num1 + num2) / 2;
    } 

    while(point1 < point2) {
        if(average(arr[point1], arr[point2]) === target) {
            return true
        }
        else if(average(arr[point1], arr[point2]) < target) {
            point1++;
        }
        else if(average(arr[point1], arr[point2]) > target) {
            point2--;
        }
    }
    return false;
}



console.log(averagePair([1,2,3], 2.5)); //true
console.log(averagePair([1,3,3,5,6,7,10], 8)); //true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); //false
console.log(averagePair([], 4)); //false