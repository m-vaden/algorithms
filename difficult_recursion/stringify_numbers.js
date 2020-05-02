/*
**  Write a recursive function called stringifyNumbers which takes in an object and finds all the values which are numbers and converts them to strings.

**  Sample Input:
*/

let stringifyNumbers = (obj) => {
    for(let key in obj) {
        if (typeof(obj[key]) === 'object') {
            stringifyNumbers(obj[key]);
        }
        if (typeof(obj[key]) === 'number') {
            obj[key] = obj[key] + '';
        }
    }

    return obj;
};

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(
    stringifyNumbers(obj)
)



/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/