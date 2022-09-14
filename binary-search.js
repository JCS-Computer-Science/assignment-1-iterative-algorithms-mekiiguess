function binarySearch(array, searchTerm, start, end) {
		if (start >= end){
		let mid = start + Math.floor((end - start)/ 2);
		
		if (array[mid]== searchTerm){
			return mid
		}if (array[mid] > searchTerm){
			return binarySearch(array, searchTerm, start, mid + 1, end)
		}if(array[mid] < searchTerm){
			return binarySearch(array, searchTerm, start, mid - 1, end)
		}

	}
}

module.exports = binarySearch;
