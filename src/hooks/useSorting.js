// hooks/useAlgorithm.js
import { useState, useEffect } from "react";
import { sortingAlgorithms } from "../library/algorithms";

const useAlgorithm = (initialAlgo) => {
  const [algo, setAlgo] = useState(() => sortingAlgorithms[initialAlgo]);

  const handleSort = (array) => {
    if (typeof algo === "function") {
      algo(array);
    } else {
      console.error("Algo is not a function, it is:", typeof algo);
    }
  };

  useEffect(() => {
    setAlgo(sortingAlgorithms[initialAlgo]);
  }, [initialAlgo]);

  return { algo, handleSort };
};

export default useAlgorithm;

// // hooks/useSortingVisualizer.js
// import { useState, useEffect } from "react";
// // import bubbleSort from "../data/algorithms"; // Make sure to export bubbleSort from where it's defined

// const useSorting = (initialArray, speed, algo) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [steps, setSteps] = useState([]);
//   const [sortingArray, setSortingArray] = useState([...initialArray]);

//   const startSort = () => {
//     const moves = algo([...initialArray]);
//     setSteps(moves);
//     setSortingArray([...initialArray]);
//     setCurrentStep(0);
//   };

//   useEffect(() => {
//     if (currentStep < steps.length) {
//       const timer = setTimeout(() => {
//         applyMove(steps[currentStep]);
//         setCurrentStep(currentStep + 1);
//       }, 1000 / speed);
//       return () => clearTimeout(timer);
//     }
//     // Optional: Add a callback or an effect when sorting is finished
//   }, [currentStep, steps, speed]);

//   const applyMove = (move) => {
//     setSortingArray((prevArray) => {
//       const newArray = [...prevArray];
//       if (move.type === "swap") {
//         [newArray[move.indices[0]], newArray[move.indices[1]]] = [
//           newArray[move.indices[1]],
//           newArray[move.indices[0]],
//         ];
//       }
//       return newArray;
//     });
//   };

//   return {
//     sortingArray,
//     startSort,
//     isSorting: currentStep < steps.length,
//   };
// };

// export default useSorting;
