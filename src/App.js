import { useEffect, useState, useReducer } from "react";

/*  COMPONENTS  */
import Navbar from "./Components/Navbar";
import Visualizer from "./Components/Visualizer";
import Settings from "./Components/Settings";

import dataStructures, {
  trees,
  linkedLists,
  sortingAlgorithms,
} from "./library/algorithms";

/*  HOOKS && REDUCERS  */
import useArrayGenerator from "./hooks/useArrayGenerator";
import useSortingVisualizer from "./hooks/useSorting";
import { INITIAL_STATE, changeStructure } from "./reducers/navReducer";

export default function App() {
  const [speed, setSpeed] = useState(111);
  const [state, dispatch] = useReducer(changeStructure, INITIAL_STATE);
  const [algo, setAlgo] = useState();
  const { array, size, generateArray, updateSize } = useArrayGenerator(11);
  const { sortingArray, startSort, isSorting } = useSortingVisualizer(
    array,
    speed,
    sortingAlgorithms.bubbleSort
  );

  const handleClick = (key) => {
    dispatch({ type: "FORWARD", key });
  };

  const handleBack = () => {
    dispatch({ type: "BACK" });
  };

  const handleSort = () => {
    if (typeof algo === "function") {
      algo(array);
    } else {
      console.error("Algo is not a function, it is:", typeof algo);
    }
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    updateSize(newSize);
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value);
    setSpeed(newSpeed);
  };

  useEffect(() => {
    setAlgo(sortingAlgorithms[state.algo]);
  }, [state.algo]);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  return (
    <>
      <Navbar
        data={state.data}
        title={state.title}
        stack={state.stack}
        algo={state.algo}
        forward={handleClick}
        backward={handleBack}
      />
      <Visualizer array={array} />
      <Settings
        start={generateArray}
        sort={handleSort}
        size={size}
        speed={speed}
        changeSize={handleSizeChange}
        changeSpeed={handleSpeedChange}
      />
    </>
  );
}
