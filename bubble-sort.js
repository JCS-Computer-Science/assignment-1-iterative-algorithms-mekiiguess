function swap(array, x, y){
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

function bubbleSort(array) {

	for (let i = 0; i < array.length- 1; i++) { 
        for (let j = 0; j < array.length - 1; j++) {  
            if(array[j]> array[j + 1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
     


// if x > y swap if not dont lmao
//
module.exports = bubbleSort;
