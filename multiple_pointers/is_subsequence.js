/*
**  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence
**  of characters in the second string. In other words, the function should check whether the characters in the first string
**  appear somewhere in the second string, without their order changing.


**  Sample Input:
**  isSubsequence('hello', 'hello world'); //true
**  isSubsequence('sing', 'sting'); //true
**  isSubsequence('abc', 'abracadabra'); //true
**  isSubsequence('abc', 'acb'); //false (order matters)
*/


let isSubsequence = (string1, string2) => {
    let str1 = string1.split(''),
        str2 = string2.split('');
    let str1Point = 0,
        str2Point = 0;

    while(str1Point < (str1.length)) {
        if(str1[str1Point] != str2[str2Point]) {
            str2Point ++;
        }
        if(str1[str1Point] === str2[str2Point]) {
            str1Point ++
        }
        if((str1Point != str1.length) && (str2Point === str2.length)) {return false;}
    }
    
    return true;
}

console.log(
    isSubsequence('hello', 'hello world'), //true
    isSubsequence('sing', 'sting'), //true
    isSubsequence('abc', 'abracadabra'), //true
    isSubsequence('abc', 'acb') //false (order matters)
);