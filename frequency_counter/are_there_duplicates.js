/*
** Implemenet a function called, areThereDuplicates which accepts a variable number of arguments, and check whether there are any
** duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
** Time: O(N)
**
** Sample Input:
** areThereDuplicates(1, 2, 3) false
** areThereDuplicates(1, 2, 2) true
** areThereDuplicates('a', 'b', 'c', 'a') true
** areThereDuplicates('a', 'b', 'c') false
**
*/


/*
** Frequnecy Counter pattern solution
*/

function areThereDuplicates(...args) {
    let argsObject = {};

    for(val of arguments) {
        argsObject[val] = (argsObject[val] || false) + 1
    }
    for(key in argsObject) {
        if(argsObject[key] > 1) {
            return true
        }
    }
    return false;
}
console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), //true
  areThereDuplicates('a', 'b', 'c', 'a'), //true
  areThereDuplicates('a', 'b', 'c') //false
);

// /*
// ** Speedy solution
// */

// function areThereDuplicates(...args) {
//     return new Set(arguments).size !== arguments.length
// }