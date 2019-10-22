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

function areThereDuplicates1() {
    let frequencyCount = {};

    const createFrequencyCountObject = (args) => {
        for (let key in args) {
            frequencyCount[args[key]] = (frequencyCount[args[key]] || 0) + 1;
        }
    }
    const checkForDuplicates = (frequencyCountObj) => {
        for (let key in frequencyCountObj) {
            if(frequencyCountObj[key] > 1) {
                return true;
            }
        }
        return false;
    }

    const output = () => {
        createFrequencyCountObject(arguments);
        return checkForDuplicates(frequencyCount);
    }

    console.log(output());
}

/*
** Multiple pointers solution
*/

areThereDuplicates1(1, 2, 3); //false
areThereDuplicates1(1, 2, 2); //true
areThereDuplicates1('a', 'b', 'c', 'a'); //true
areThereDuplicates1('a', 'b', 'c'); //false