/*
 * A sorting algorithm where the largest values bubble up to the top.
 * Create a function called bubbleSort that accepts an array.
 * Start looping from the end of an array towards the beginning with a variable called i.
 * Start an inner loop with a variable called j from the beginning until i - 1.
 * If arr[j] is greater than arr[j+1], swap those two values.
*/

function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) { break };
    }
    return arr;
}

console.log(
    bubbleSort([37,45,29,8])
);