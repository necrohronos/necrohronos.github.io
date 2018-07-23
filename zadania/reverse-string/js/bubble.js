//let array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
function bubbleSort(array) {
    let n = array.length;
    do {
        for (let i = 0; i < n - 1; i++) {
            /* if (array[i] > array[i + 1]) {
                array.swap(i, i + 1);
            } */
            if (array[i] > array[i + 1]) {
                let swap = array[i];
                array[i] = array[i + 1];
                array[i + 1] = swap;
            }
        }
        n = n - 1;
    }
    while (n > 1)
    return array;
}

console.log(bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));
