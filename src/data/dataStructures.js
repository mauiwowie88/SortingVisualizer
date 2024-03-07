import { trees, linkedLists, sortingAlgorithms } from "./algorithms";

const dataStructures = {
  Trees: {
    "Binary Tree": {
      searches: ["pre-order", "in-order", "post-order", "level-order"],
      insert: true,
      delete: true,
    },
    "Binary Search Tree": {
      searches: ["in-order", "search"],
      insert: true,
      delete: true,
    },
  },

  "Linked Lists": {
    "Singly Linked List": {
      methods: ["insert", "delete", "reverse"],
    },
    "Doubly Linked List": {
      methods: ["insert", "delete", "reverse"],
    },
  },

  "Sorting Algorithms": {
    "Bubble Sort": {
      algo: sortingAlgorithms.bubbleSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    "Insertion Sort": {
      algo: sortingAlgorithms.insertionSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    "Merge Sort": {
      algo: sortingAlgorithms.mergeSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    "Quick Sort": {
      algo: sortingAlgorithms.quickSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    "Selection Sort": {
      algo: sortingAlgorithms.selectionSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
  },
};

export default dataStructures;
