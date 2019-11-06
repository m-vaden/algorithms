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
                console.log('true')
                return true;
            }
        }
        console.log('false')
        return false;
    }

    const output = () => {
        createFrequencyCountObject(arguments);
        return checkForDuplicates(frequencyCount);
    }
    output();
}

/*
** Multiple pointers solution
*/

console.log('---Frequency Counter---');
areThereDuplicates1(1, 2, 3); //false
areThereDuplicates1(1, 2, 2); //true
areThereDuplicates1('a', 'b', 'c', 'a'); //true
areThereDuplicates1('a', 'b', 'c', 'a', 'd', 'f', 'g'); //true
areThereDuplicates1('a', 'b', 'c'); //false


function areThereDuplicates2(...args){
    let pointer1 = 0;
    let pointer2 = 1;
    args.sort((a,b) => {return a > b});
    while(pointer2 < args.length) {
        if(args[pointer1] === args[pointer2]) {
            console.log('true');
            return true;
        }
        pointer1++
        pointer2++
    }
    console.log('false')
    return false;
}
console.log('---Multiple Points---');
areThereDuplicates2(1, 2, 3); //false
areThereDuplicates2(1, 2, 2); //true
areThereDuplicates2('a', 'b', 'c', 'a'); //true
areThereDuplicates2('a', 'b', 'c', 'a', 'd', 'f', 'g'); //true
areThereDuplicates2('a', 'b', 'c'); //false

/*
** One Liner
*/

function areThereDuplicates3() {
    console.log(new Set(arguments).size !== arguments.length);
    return new Set(arguments).size !== arguments.length
}

console.log('---One Liner---');
areThereDuplicates3(1, 2, 3); //false
areThereDuplicates3(1, 2, 2); //true
areThereDuplicates3('a', 'b', 'c', 'a'); //true
areThereDuplicates3('a', 'b', 'c', 'a', 'd', 'f', 'g'); //true
areThereDuplicates3('a', 'b', 'c'); //false