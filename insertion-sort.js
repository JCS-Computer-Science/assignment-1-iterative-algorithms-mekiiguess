function insertionSort(array) {

	for (let i = 1; i < array.length- 1; i++) { 
        let j = i - 1;
        let current = array[i];

        while (j>=0 && array[j] > current) {
            array[j + 1] = array[j];
            j--; 
        }
        array[j] = current; 
     }
     return array;
}

module.exports = insertionSort;
