import { useEffect, useState, useCallback } from "react";
import Navbar from "./Components/Navbar";
import Settings from "./Components/Settings";
import data from "./data/dataStructures";

export default function App() {
  const [size, setSize] = useState(11);
  const [speed, setSpeed] = useState(111);
  const [array, setArray] = useState(
    Array.from({ length: size }, () => Math.random())
  );
  const [dataStructure, setDataStructure] = useState(data);
  const [title, setTitle] = useState("Data Structures");
  const [stack, setStack] = useState([title]);

  const handleClick = (key) => {
    const nextStructure = dataStructure[key];
    if (typeof nextStructure === "object" && !Array.isArray(nextStructure)) {
      setStack((stack) => [...stack, key]);
      setDataStructure(nextStructure);
      setTitle(key);
    }
  };

  const handleBack = () => {
    setStack((prevStack) => {
      if (prevStack.length <= 1) return prevStack;
      const newStack = prevStack.slice(0, -1);
      let newStructure = data;
      for (let i = 1; i < newStack.length; i++) {
        newStructure = newStructure[newStack[i]];
      }
      setDataStructure(newStructure);
      setTitle(newStack[newStack.length - 1]);
      return newStack;
    });
  };

  function sort() {
    console.log("sorting");
  }

  const renderBars = array.map((value, index) => (
    <Bar key={index} height={(value * 100).toFixed(0)} />
  ));

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value);
    setSpeed(newSpeed);
  };

  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: size }, () => Math.random());
    setArray(newArray);
  }, [size]);

  useEffect(() => {
    generateArray();
  }, [size, generateArray]);

  return (
    <>
      <Navbar
        title={title}
        ds={dataStructure}
        stack={stack}
        forward={handleClick}
        backward={handleBack}
      />
      <div id="visualizer">{renderBars}</div>

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

// Bar Component
const Bar = ({ height }) => {
  const style = {
    height: `${height}%`,
  };
  return (
    <div style={style} className="bar">
      {height}
    </div>
  );
};
