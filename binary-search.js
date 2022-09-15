function binarySearch(array, searchTerm) {

	let start = 0;
	let end = array.length - 1;

	while (start<=end){
		let mid = Math.floor((start + end)/ 2);
		
		if (array[mid]===searchTerm){
			return mid;
		}else if (array[mid] > searchTerm){
			start = mid + 1;
		}else (array[mid] < searchTerm)
			end = mid -1;
	}
}


module.exports = binarySearch;
