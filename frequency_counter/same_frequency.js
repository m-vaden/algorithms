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


function sameFrequency(int1, int2) {
    let   array = [],
          array2 = [],
          object = {},
          object2 = {};

    function checkArrayEqualLength(arr1, arr2) {
        arr1.length === arr2.length ? true : false;
    }
    function splitInteger() {
        array = int1.toString().split('');
        array2 = int2.toString().split('');
        // console.log(array);
        // console.log(array2);
    }
    function convertArrayToObject(arr) {
        arr.forEach(function(index) {
            
        });
    }

    splitInteger();
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);