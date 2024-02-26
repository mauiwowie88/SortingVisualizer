import { useEffect, useState } from "react";
import Settings from "./Settings";

// Bar Component
const Bar = ({ height, highlight }) => {
  const style = {
    height: `${height}%`,
    backgroundColor: highlight ? "green" : "cyan",
  };
  return (
    <div style={style} className="bar">
      {style.height}
    </div>
  );
};

export default function Visualizer() {
  const [size, setSize] = useState(11);
  const [speed, setSpeed] = useState(111);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [array, setArray] = useState(
    Array.from({ length: size }, () => Math.random())
  );

  function generateArray() {
    const newArray = Array.from({ length: size }, () => Math.random());
    setArray(newArray);
  }

  function sort() {
    console.log("sorting");
  }

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value);
    setSpeed(newSpeed);
  };

  useEffect(() => {
    generateArray();
  }, [size]);

  return (
    <>
      <div id="visualizer">
        {array.map((value, index) => (
          <Bar
            key={index}
            height={(value * 100).toFixed(0)}
            highlight={currentIndices.includes(index)}
          />
        ))}
      </div>
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
