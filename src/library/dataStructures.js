import { trees, linkedLists, sortingAlgorithms } from "./algorithms";

const dataStructures = {
  Trees: {
    "Binary Tree": {
      description:
        "A binary tree is a hierarchical data structure in which each node has at most two children.",
      searchingAlgorithms: {
        "Pre-order Traversal": {
          description:
            "Visit the root node, then traverse the left subtree recursively, and finally traverse the right subtree recursively.",
          function: "preOrderTraversal",
          timeComplexity: "O(n)",
        },
        "In-order Traversal": {
          description:
            "Traverse the left subtree recursively, then visit the root node, and finally traverse the right subtree recursively.",
          function: "inOrderTraversal",
          timeComplexity: "O(n)",
        },
        "Post-order Traversal": {
          description:
            "Traverse the left subtree recursively, then traverse the right subtree recursively, and finally visit the root node.",
          function: "postOrderTraversal",
          timeComplexity: "O(n)",
        },
        "Level-order Traversal": {
          description:
            "Visit all nodes at the current level before moving to the next level, starting from the root node.",
          function: "levelOrderTraversal",
          timeComplexity: "O(n)",
        },
      },
      traversalAlgorithms: {
        "Breadth-First Search (BFS)": {
          description:
            "Traverse the tree level by level, visiting all nodes at the current level before moving to the next level.",
          function: "breadthFirstSearch",
          timeComplexity: "O(n)",
        },
        "Depth-First Search (DFS)": {
          description:
            "Explore as far as possible along each branch before backtracking.",
          function: "depthFirstSearch",
          timeComplexity: "O(n)",
        },
      },
      otherFunctions: {
        Insertion: {
          description: "Insert a new node into the binary tree.",
          function: "insertNode",
          timeComplexity:
            "O(log n) on average, O(n) worst case for balanced trees",
        },
        Deletion: {
          description: "Delete a node from the binary tree.",
          function: "deleteNode",
          timeComplexity:
            "O(log n) on average, O(n) worst case for balanced trees",
        },
      },
    },
    "Binary Search Tree": {
      description:
        "A binary search tree is a binary tree in which each node has a value, and the left subtree of a node contains only nodes with values less than the node's value, while the right subtree contains only nodes with values greater than the node's value.",
      searchingAlgorithms: {
        "In-order Traversal": {
          description:
            "Traverse the left subtree recursively, then visit the root node, and finally traverse the right subtree recursively.",
          function: "inOrderTraversal",
          timeComplexity: "O(n)",
        },
        Search: {
          description: "Search for a given value in the binary search tree.",
          function: "searchNode",
          timeComplexity: "O(log n) on average, O(n) worst case",
        },
      },
      traversalAlgorithms: {
        "Breadth-First Search (BFS)": {
          description:
            "Traverse the tree level by level, visiting all nodes at the current level before moving to the next level.",
          function: "breadthFirstSearch",
          timeComplexity: "O(n)",
        },
        "Depth-First Search (DFS)": {
          description:
            "Explore as far as possible along each branch before backtracking.",
          function: "depthFirstSearch",
          timeComplexity: "O(n)",
        },
      },
      otherFunctions: {
        Insertion: {
          description:
            "Insert a new node into the binary search tree while maintaining its properties.",
          function: "insertNode",
          timeComplexity: "O(log n) on average, O(n) worst case",
        },
        Deletion: {
          description:
            "Delete a node from the binary search tree while maintaining its properties.",
          function: "deleteNode",
          timeComplexity: "O(log n) on average, O(n) worst case",
        },
      },
    },
  },

  "Linked Lists": {
    "Singly Linked List": {
      description:
        "A singly linked list is a collection of nodes where each node contains a value and a reference (or pointer) to the next node in the sequence.",
      methods: {
        Insertion: {
          description:
            "Insert a new node at the beginning, end, or at a specific position in the linked list.",
          function: "insertNode",
          timeComplexity:
            "O(1) for insertion at the beginning or end, O(n) for insertion at a specific position",
        },
        Deletion: {
          description:
            "Delete a node from the linked list, either by value or by position.",
          function: "deleteNode",
          timeComplexity:
            "O(1) for deletion at the beginning or end, O(n) for deletion by value or position",
        },
        Reverse: {
          description: "Reverse the order of nodes in the linked list.",
          function: "reverseList",
          timeComplexity: "O(n)",
        },
      },
    },
    "Doubly Linked List": {
      description:
        "A doubly linked list is a linked list in which each node contains a value and two references (or pointers) - one to the previous node and one to the next node in the sequence.",
      methods: {
        Insertion: {
          description:
            "Insert a new node at the beginning, end, or at a specific position in the linked list.",
          function: "insertNode",
          timeComplexity:
            "O(1) for insertion at the beginning or end, O(n) for insertion at a specific position",
        },
        Deletion: {
          description:
            "Delete a node from the linked list, either by value or by position.",
          function: "deleteNode",
          timeComplexity:
            "O(1) for deletion at the beginning or end, O(n) for deletion by value or position",
        },
        Reverse: {
          description: "Reverse the order of nodes in the linked list.",
          function: "reverseList",
          timeComplexity: "O(n)",
        },
      },
    },
  },

  "Sorting Algorithms": {
    "Bubble Sort": {
      description:
        "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
      function: sortingAlgorithms.bubbleSort,
      timeComplexity: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)",
      },
    },
    "Insertion Sort": {
      description:
        "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time, by repeatedly inserting a selected unsorted element into its correct position.",
      function: sortingAlgorithms.insertionSort,
      timeComplexity: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)",
      },
    },
    "Merge Sort": {
      description:
        "Merge sort is a divide and conquer algorithm that divides the input array into two halves, sorts each half separately, and then merges the sorted halves.",
      function: sortingAlgorithms.mergeSort,
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
      },
    },
    "Quick Sort": {
      description:
        "Quick sort is a divide and conquer algorithm that selects a 'pivot' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot.",
      function: sortingAlgorithms.quickSort,
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n^2)",
      },
    },
    "Selection Sort": {
      description:
        "Selection sort is a simple sorting algorithm that repeatedly finds the minimum element from the unsorted portion of the array and swaps it with the first unsorted element.",
      function: sortingAlgorithms.selectionSort,
      timeComplexity: {
        best: "O(n^2)",
        average: "O(n^2)",
        worst: "O(n^2)",
      },
    },
  },
};

export default dataStructures;
