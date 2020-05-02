/*
**  Write a recursive function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

let collectStrings = (obj) => {
    let strings = [];

    for(let key in obj) {
        if(typeof(obj[key]) === 'string') {
            strings.push(obj[key]);
        }
        if(typeof(obj[key]) === 'object') {
           strings = strings.concat(collectStrings(obj[key]));
        }
    }
    
    return strings;
};

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(
    collectStrings(obj) // ["foo", "bar", "baz"])
)

