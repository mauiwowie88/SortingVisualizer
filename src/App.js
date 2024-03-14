import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Visualizer from "./components/Visualizer/Visualizer";
import Settings from "./components/Settings/Settings";
import useTheme from "./hooks/useTheme";
import useArrayGenerator from "./hooks/useArrayGenerator";

export default function App() {
  const [speed, setSpeed] = useState(11);
  const [theme, setTheme] = useTheme();
  const { array, size, generateArray, updateSize } = useArrayGenerator(11);

  const handleSizeChange = (event) => updateSize(parseInt(event.target.value));
  const handleSpeedChange = (event) => setSpeed(parseInt(event.target.value));

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Visualizer array={array} theme={theme} />
      <Settings
        start={generateArray}
        size={size}
        speed={speed}
        changeSize={handleSizeChange}
        changeSpeed={handleSpeedChange}
        theme={theme}
      />
    </div>
  );
}
