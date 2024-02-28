import { trees, linkedLists, sortingAlgorithms } from "./algorithms";

const dataStructures = {
  trees: {
    binaryTree: {
      searches: ["pre-order", "in-order", "post-order", "level-order"],
      insert: true,
      delete: true,
    },
    binarySearchTree: {
      searches: ["in-order", "search"],
      insert: true,
      delete: true,
    },
  },

  linkedLists: {
    singlyLinkedList: {
      methods: ["insert", "delete", "reverse"],
    },
    doublyLinkedList: {
      methods: ["insert", "delete", "reverse"],
    },
  },

  sortingAlgorithms: {
    bubbleSort: {
      algo: sortingAlgorithms.bubbleSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    insertionSort: {
      algo: sortingAlgorithms.insertionSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    mergeSort: {
      algo: sortingAlgorithms.mergeSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    quickSort: {
      algo: sortingAlgorithms.quickSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
    selectionSort: {
      algo: sortingAlgorithms.selectionSort,
      time: "O(n^2)",
      space: "O(n^2)",
    },
  },
};
console.log(sortingAlgorithms);
export default dataStructures;
