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
    let frequency1 = {},
        frequency2 = {};
          
    return output();

    function output(){
        const value1 = convertToString(int1);
              value2 = convertToString(int2);

        checkStringEqualLength(value1,value2);
        createFrequencyObj(value1, frequency1);
        createFrequencyObj(value2, frequency2);
        return compareFrequencyObj(frequency1, frequency2)
    };
          
    function convertToString(num) {
        return num.toString();
    }
    function checkStringEqualLength(str1, str2) {
        str1.length === str2.length ? true : false;
    }
    function createFrequencyObj(str, obj) {
        for(let char of str) {
            obj[char] = (obj[char] || 0) + 1;
        }
    }
    function compareFrequencyObj(obj1, obj2) {
        for(let key in obj1) {
            if(!(key in obj2)){
                return false
            }
            if(obj1[key] !== obj2[key]){
                return false
            }
        }
        return true;
    }
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));