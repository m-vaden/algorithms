/*
**  Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

**  Sample Input:
    // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    // flatten([[1],[2],[3]]) // [1,2,3]
    // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

const flatten = arr => {
    if (arr.length === 0) { return []; };           
    
    let result = [];
   
    Array.isArray(arr[0])                      
      ? result = flatten(arr[0])       
      : result.push(arr[0]);                  
   
    return result.concat(flatten(arr.slice(1)));  
  }

  console.log(
    flatten([1, 2, 3, [4, 5] ]), // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]), // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
  )

//   result =                                  [1]
//   [1,2,3,[4,5],6]                          concat
//         result =                            [2]
//         [2,3,[4,5],6]                      concat
//             result =                        [3]
//                 [3,[4,5],6]                concat
//                     result =               [4,5]
//                         [[4,5],6]
// result =        [4]
// [4,5]          concat
//     result =    [5]
//         [5]    concat
//         result = []
//             []                             concat
//                             result =        [6]
//                                 [6]        concat
//                                     result = []
//                                         []

