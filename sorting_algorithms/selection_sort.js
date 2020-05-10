/*
 * A sorting algorithm where the smallest values are sorted into position first (reverse of bubble sort more or less).
 * 
*/

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]){
                lowest = j;
            } 
            if (i !== lowest) {
                let temp = arr[i]
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]));