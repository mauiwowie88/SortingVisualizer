/*** Sorting Functions ***/

export const bubbleSort = (array) => {
	const moves = [];
	let swapped;
	do {
		swapped = false;
		for (let i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				swapped = true;
				moves.push({ indices: [i - 1, i], type: "swap" });
				[array[i - 1], array[i]] = [array[i], array[i - 1]];
				console.log("yes", moves[i]);
			} else {
				console.log("noo", moves[moves.length - 1]?.type);
			}
		}
	} while (swapped);
	return moves;
};

export const insertionSort = (array) => {};

export const mergeSort = (array) => {};

export const quickSort = (array) => {};

export const selectionSort = (array) => {};
