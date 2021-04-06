// BubbleSort Pseudocode

// Start looping from the end of the array towards the beginning with a variable called i
// Start an inner loop with a variable called j from the begining until i - 1
// If arr[j] is greater than arr[j+1], swap those two values
// At the end return the sorted array

const swap = (arr, idx1, idx2) => {
	[ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
};

// Naive solution where we do not account of looping without including the last item which had bubbled to the top
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				// SWAP
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

function bubbleSortBetter(arr) {
	for (let i = arr.length; i > 0; i--) {
		// Now that i is equal to the arr length
		// You can define j based on i
		// This ensures no useless comparissons between values that were already sorted
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// SWAP
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

// Optimized for nearly sorted arrays - it won't continue comparing values if no swaps are done
// If no swaps are done it means the array is already sorted
function bubbleSortBetterOptimized(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// SWAP
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
console.log(bubbleSortBetter([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
console.log(bubbleSortBetterOptimized([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
console.log(bubbleSortBetterOptimized([ 2, 3, 4, 5, 6, 7, 8, 1 ]));
