/*
** Write a function called sameFrequency. Given two positive intergers, find out if the two numbers have the same frequency of digits.
** Your solution MUST have the following complexities:
**
** Time: O(N)
**
** Sample Input:
** sameFrequency(182, 281) true
** sameFrequency(34, 14) false
** sameFrequency(3589578, 5879385) true
** sameFrequency(22, 222) false
**
*/

let sameFrequency = (int1, int2) => {
    let integer1 = int1.toString(),
        integer2 = int2.toString();

    let frequencyCounter1 = {},
        frequencyCounter2 = {};
        
    if(integer1.length != integer2.length) {
        return false;
    }

    for(let val of integer1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || false) + 1;
    }
    for(let val of integer2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || false) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key] != frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(
    sameFrequency(182, 281),
    sameFrequency(34, 14),
    sameFrequency(3589578, 5879385),
    sameFrequency(22, 222)
);