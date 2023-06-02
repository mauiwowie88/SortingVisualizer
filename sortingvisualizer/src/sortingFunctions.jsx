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
			} else {
				moves.push({ indices: [i - 1, i], type: "compare" });
			}
		}
	} while (swapped);
	return moves;
};

export const insertionSort = (array) => {
	const moves = [];
	for (let i = 1; i < array.length; i++) {
		let j = i;
		while (j > 0 && array[j - 1] > array[j]) {
			moves.push({ indices: [j - 1, j], type: "swap" });
			[array[j - 1], array[j]] = [array[j], array[j - 1]];
			j--;
		}
		moves.push({ indices: [j, j + 1], type: "compare" });
	}
	return moves;
};

export const mergeSort = (array) => {
	const moves = [];

	const merge = (left, right) => {
		const sorted = [];
		while (left.length && right.length) {
			const smaller = left[0] < right[0] ? left : right;
			sorted.push(smaller.shift());
			moves.push({ indices: [left.length, right.length], type: "compare" });
		}
		return sorted.concat(left.length ? left : right);
	};

	const sort = (array) => {
		if (array.length <= 1) return array;
		const mid = Math.floor(array.length / 2);
		return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
	};

	sort(array);
	return moves;
};

export const quickSort = (array) => {
	const moves = [];

	const partition = (array, low, high) => {
		const pivot = array[high];
		let i = low;
		for (let j = low; j < high; j++) {
			if (array[j] < pivot) {
				[array[i], array[j]] = [array[j], array[i]];
				moves.push({ indices: [i, j], type: "swap" });
				i++;
			} else {
				moves.push({ indices: [i, j], type: "compare" });
			}
		}
		[array[i], array[high]] = [array[high], array[i]];
		moves.push({ indices: [i, high], type: "swap" });
		return i;
	};

	const sort = (array, low, high) => {
		if (low < high) {
			const pivotIndex = partition(array, low, high);
			sort(array, low, pivotIndex - 1);
			sort(array, pivotIndex + 1, high);
		}
	};

	sort(array, 0, array.length - 1);
	return moves;
};

export const selectionSort = (array) => {
	const n = array.length;

	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < n; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[array[i], array[minIndex]] = [array[minIndex], array[i]];
		}
	}

	return array;
};
