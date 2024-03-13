import { useEffect, useState, useReducer } from "react";
/*  COMPONENTS  */
import Navbar from "./Components/Navbar";
import Visualizer from "./Components/Visualizer";
import Settings from "./Components/Settings";
/*  HOOKS && REDUCERS  */
import useArrayGenerator from "./hooks/useArrayGenerator";
import { INITIAL_STATE, changeStructure } from "./reducers/navReducer";

export default function App() {
  const { array, size, generateArray, updateSize } = useArrayGenerator(11);
  const [speed, setSpeed] = useState(111);
  const [navigateState, dispatch] = useReducer(changeStructure, INITIAL_STATE);

  const handleClick = (key) => {
    dispatch({ type: "FORWARD", key });
  };

  const handleBack = () => {
    dispatch({ type: "BACK" });
  };

  function sort() {
    console.log("sorting");
  }

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    updateSize(newSize);
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value);
    setSpeed(newSpeed);
  };

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  return (
    <>
      <Navbar
        data={navigateState.data}
        title={navigateState.title}
        stack={navigateState.stack}
        forward={handleClick}
        backward={handleBack}
      />
      <Visualizer array={array} />
      <Settings
        start={generateArray}
        sort={sort}
        size={size}
        speed={speed}
        changeSize={handleSizeChange}
        changeSpeed={handleSpeedChange}
      />
    </>
  );
}
