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
      complexity: "O(n^2)",
    },
    quickSort: {
      complexity: "O(n log n)",
    },
  },
};

export default dataStructures;
