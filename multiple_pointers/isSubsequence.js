/*
**  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence
**  of characters in the second string. In other words, the function should check whether the characters in the first string
**  appear somewhere in the second string, without their order changing.


**  Sample Input:
**  isSubseuqence('hello', 'hello world'); //true
**  isSubseuqence('sing', 'sting'); //true
**  isSubseuqence('abc', 'abracadabra'); //true
**  isSubseuqence('abc', 'acb'); //false (order matters)
*/


function isSubseuqence(str1, str2){
    let point1 = 0;
    let point2 = 0;

    while(point1 < (str1.length)) {
        if(str1[point1] === str2[point2]) {
            point1++
            point2++
        }else if(point2 === (str2.length)) {
            return false;
        }
        else {
            point2++
        }
    }
    return true;
}



console.log(isSubseuqence('hello', 'hello world')); //true
console.log(isSubseuqence('sing', 'sting')); //true
console.log(isSubseuqence('abc', 'abracadabra')); //true
console.log(isSubseuqence('abc', 'acb')); //false (order matters)