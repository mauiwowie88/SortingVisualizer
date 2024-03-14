import React, { useState, useEffect, useReducer } from "react";
import Navbar from "./components/Navbar/Navbar";
import Visualizer from "./components/Visualizer/Visualizer";
import Settings from "./components/Settings/Settings";
import useTheme from "./hooks/useTheme";
import useSpeed from "./hooks/useSpeed";
import useSorting from "./hooks/useSorting";
import useArrayGenerator from "./hooks/useArrayGenerator";
import { changeStructure, INITIAL_STATE } from "./reducers/navReducer";

export default function App() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useTheme();
  const [speed, setSpeed] = useSpeed();
  const { array, size, generateArray, updateSize } = useArrayGenerator(11);
  const [state, dispatch] = useReducer(changeStructure, INITIAL_STATE);
  const { handleSort } = useSorting(state.algo);

  const handleForward = (key) => dispatch({ type: "FORWARD", key });
  const handleBack = () => dispatch({ type: "BACK" });

  const handleSizeChange = (event) => updateSize(parseInt(event.target.value));
  const handleSpeedChange = (event) => setSpeed(parseInt(event.target.value));

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  return (
    <div className={`container ${theme}`}>
      <Navbar
        data={state}
        forward={handleForward}
        backward={handleBack}
        theme={theme}
        setTheme={setTheme}
        nav={nav}
        setNav={setNav}
      />
      <Visualizer array={array} theme={theme} />
      <Settings
        start={generateArray}
        sort={() => handleSort(array)}
        size={size}
        speed={speed}
        changeSize={handleSizeChange}
        changeSpeed={handleSpeedChange}
        theme={theme}
      />
    </div>
  );
}
