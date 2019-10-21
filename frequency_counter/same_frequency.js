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
    let   value1 = '',
          value2 = '',
          object = {},
          object2 = {};
          
    (function output(){
        convertToString(int1, int2);
        checkStringEqualLength(value1,value2);
    })();
          
    function convertToString(num1, num2) {
        value1 = num1.toString();
        value2 = num2.toString();
    }
    function checkStringEqualLength(str1, str2) {
        str1.length === str2.length ? true : false;
    }
    function splitInteger() {
        array = int1.toString().split('');
        array2 = int2.toString().split('');
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