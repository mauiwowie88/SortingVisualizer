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
			}
		}
	} while (swapped);
	return moves;
};
