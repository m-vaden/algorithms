/*
** Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, 
** or name formed by rearranging the letters of another, such as cinema, formed from iceman.
** Time: O(N)
**
** Sample Input:
** validAnagram('','') true
** validAnagram('aaz','zza') false
** validAnagram('anagram', 'nagaram') true
** validAnagram('rat', 'car') false
** validAnagram('awesome', 'awesom') false
*/

let validAnagram = (str1,str2) => {
    let string1 = str1.replace(/\s/g, '').split(''),
        string2 = str2.replace(/\s/g, '').split('');

    let freqCounter1 = {},
        freqCounter2 = {};
    
    for(let val of string1) {
        freqCounter1[val] = (freqCounter1[val] || false) + 1;
    }

    for(let val of string2) {
        freqCounter2[val] = (freqCounter2[val] || false) + 1;
    }
    for(let key in freqCounter1) {
        if(!(key in freqCounter2)) {
            return false;
        }
        if(freqCounter1[key] != freqCounter2[key]) {
            return false;
        }
    }
    
    return true;
}



console.log(validAnagram('','')); //true
console.log(validAnagram('aaz','zza')); //false
console.log(validAnagram('anagram', 'nagaram')); //true
console.log(validAnagram('rat', 'car')); //false
console.log(validAnagram('awesome', 'awesom')); //false