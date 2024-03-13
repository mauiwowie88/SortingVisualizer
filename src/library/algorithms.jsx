/*** Sorting Functions ***/
export const trees = {};
export const linkedLists = {};

export const sortingAlgorithms = {
  bubbleSort(array) {
    console.log("1");
    if (!array || !array.length) {
      console.error("The input array is null or empty.");
      return [];
    }
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
  },

  insertionSort(array) {
    console.log("2");
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
  },

  mergeSort(array) {
    if (array.length <= 1) {
      return [];
    }

    const mid = Math.floor(array.length / 2);
    const [left, right] = [array.slice(0, mid), array.slice(mid)];
    const [leftSteps, rightSteps] = [
      this.mergeSort(left),
      this.mergeSort(right),
    ];

    let merged = [];
    let [leftIndex, rightIndex] = [0, 0];

    while (leftIndex < left.length && rightIndex < right.length) {
      const [leftValue, rightValue] = [left[leftIndex], right[rightIndex]];

      if (leftValue < rightValue) {
        merged.push({
          indices: [leftIndex, rightIndex + left.length],
          type: "compare",
        });
        leftIndex++;
      } else {
        merged.push({
          indices: [leftIndex, rightIndex + left.length],
          type: "swap",
        });
        merged.push({
          indices: [rightIndex + left.length, leftIndex],
          type: "swap",
        });
        [left[leftIndex], right[rightIndex]] = [
          right[rightIndex],
          left[leftIndex],
        ];
        leftIndex++;
      }
    }

    merged = merged
      .concat(
        left.slice(leftIndex).map((_, i) => ({
          indices: [i + leftIndex, i + leftIndex],
          type: "compare",
        }))
      )
      .concat(
        right.slice(rightIndex).map((_, i) => ({
          indices: [i + left.length + rightIndex, i + left.length + rightIndex],
          type: "compare",
        }))
      );

    return merged.concat(leftSteps, rightSteps);
  },

  quickSort(array) {
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
  },

  selectionSort(array) {
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
  },
};
