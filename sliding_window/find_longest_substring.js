/*
**  Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
**
**  Sample Input:
**  findLongestSubstring('') // 0
**  findLongestSubstring('rithmschool') // 7
**  findLongestSubstring('thisisawesome') // 6
**  findLongestSubstring('thecatinthehat') // 7
**  findLongestSubstring('bbbbbb') // 1
**  findLongestSubstring('longestsubstring') // 8
**  findLongestSubstring('thisishowwedoit') // 6
**
*/

function findLongestSubstring(str) {
    let start = 0,
        end = 0,
        currentArrLength = 0,
        longestArrLength = 0,
        uniqueChars = new Set(str),
        isDuplicate = false;

        function addChar(char) {
            uniqueChars[str[char]] = (uniqueChars[str[char]] || false) + 1;
            currentArrLength++;
        }
        function subtractChar(char) {
            uniqueChars[str[char]] = (uniqueChars[str[char]] || false) - 1;
        }

        function checkForDuplicate() {
            if(uniqueChars[str[end]] === 2) {
                isDuplicate = true;
            }
        }
        function resolveDuplicate() {
            if(uniqueChars[str[start]] === 2) {
                subtractChar(start);
                start++;
                currentArrLength--;
                isDuplicate = false;
            }else {
                subtractChar(start);
                start++;
                currentArrLength--;
            }
        }
        function updateArray() {
            if((isDuplicate === false) && (currentArrLength > longestArrLength)) {
                longestArrLength = currentArrLength;
            }
        }

        addChar(end);
        while(end <= str.length - 1) {
            isDuplicate === false ? checkForDuplicate() : resolveDuplicate();
            updateArray();
            if(isDuplicate === false){
                end++;
                addChar(end);
            }
        }
        return longestArrLength;
}
console.log(
    findLongestSubstring(''), // 0
    findLongestSubstring('rithmschool'), // 7
    findLongestSubstring('thisisawesome'), // 6
    findLongestSubstring('thecatinthehat'), // 7
    findLongestSubstring('bbbbbb'), // 1
    findLongestSubstring('longestsubstring'), // 8
    findLongestSubstring('thisishowwedoit') // 6
);


/* Simple Solution */

/*

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

*/