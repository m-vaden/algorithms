/*
** Implemenet a function called, squaredFrequency which accepts two arrays.
** The function should return true if every value in the the first array has it's corresponding value squared in the second array.
** The frequency of values must be the same.
** Time: O(N)
*/

let arrayOne = [1,2,2,3],
    arrayTwo = [1,9,4,4],
    arrayThree = [2,4,5,9],
    arrayFour = [4,4,9,1],
    arrayFive = [4,9,9,1];

squaredFrequency = (arr1, arr2) => {
    let freqCounter1 = {},
        freqCounter2 = {};

    if(arr1.length != arr2.length){
        return false;
    }
    for(val of arr1){
        freqCounter1[val] = (freqCounter1[val] || false) + 1;
    }
    for(val of arr2){
        freqCounter2[val] = (freqCounter2[val] || false) + 1;
    }
    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false;
        }
        if(freqCounter1[key] != freqCounter2[key ** 2]){
            return false;
        }
    }
    return true;
}

console.log(squaredFrequency(arrayOne, arrayTwo)); //true
console.log(squaredFrequency(arrayOne, arrayThree)); //false
console.log(squaredFrequency(arrayOne, arrayFour)); //true
console.log(squaredFrequency(arrayOne, arrayFive)); //true
