function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let swap = arr[j];
                arr[j] = arr[i];
                arr[i] = swap;
            }
        }
    }

    return arr;
}

/**
 * TO-DO LIST
 * Make it according to Adiel's advises!
*/


let example1 = bubbleSort(['how', 'do', 'you', 'define', 'an', 'array', '?']);
let example2 = bubbleSort([5, 8, 9, 6, 3, 2, 4, 5, 7, 8, 5]);

console.log(example1);
console.log(example2);