/*
**  Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

**  Sample Input:
    var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }
    }
    }

    var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
    };

    nestedEvenSum(obj1); // 6
    nestedEvenSum(obj2); // 10
*/

function nestedEvenSum(obj) {
    
    let result = 0;
    
        for(key in obj) {
            obj[key] % 2 === 0
                ? result += obj[key]
                : result = result

            if(typeof(obj[key]) === 'object') {
                result = result + nestedEvenSum(obj[key]);
            }
        }
    return result;

}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }
    }
    }

    var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
    };

    console.log(
        nestedEvenSum(obj1), // 6
        nestedEvenSum(obj2) // 10
    )
  
    //How to itterate over object without using loop