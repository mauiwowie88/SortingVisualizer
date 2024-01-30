import React, { useState, useEffect } from "react";
import Settings from "./Components/Settings";
import Header from "./Components/Header";
import {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "./algorithms";

export default function App() {
  const [size, setSize] = useState(11);
  const [speed, setSpeed] = useState(111);
  const [algo, setAlgo] = useState(null);
  const [highlightedBars, setHighlightedBars] = useState([]);
  const [array, setArray] = useState(
    Array.from({ length: size }, () => Math.random())
  );

  function generateArray() {
    const newArray = Array.from({ length: size }, () => Math.random());
    setArray(newArray);
  }

  function changeStyle(newStyle) {
    setAlgo(newStyle);
  }

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value);
    setSpeed(newSpeed);
  };

  function sort() {
    const moves = [...array];
    animate(moves);
  }

  function animate(moves) {
    console.log(moves);
    // if (moves.length === 0) return;

    // const move = moves[0];
    // const [i, j] = move.indices;

    // if (move.type === "swap") {
    //   const newBarArray = [...array];
    //   [newBarArray[i], newBarArray[j]] = [newBarArray[j], newBarArray[i]];
    //   setArray(newBarArray);
    // }

    // // Highlight the bar at index i
    // setHighlightedBars((prev) => {
    //   const newHighlighted = new Array(array.length).fill(false);
    //   newHighlighted[i] = true;
    //   return newHighlighted;
    // });

    // // Schedule the next animation step
    // setTimeout(() => animate(moves.slice(1)), speed);
  }

  useEffect(() => {
    generateArray();
  }, [size]);

  return (
    <div id="app">
      <Header newStyle={changeStyle} />
      <div id="main">
        <div id="visualizer">
          {array.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{
                height: `${value * 100}%`,
                backgroundColor: highlightedBars[index] ? "green" : "cyan",
              }}
            >
              {(value * 100).toFixed(0)}
            </div>
          ))}
        </div>
      </div>
      <Settings
        start={generateArray}
        sort={sort}
        size={size}
        speed={speed}
        changeSize={handleSizeChange}
        changeSpeed={handleSpeedChange}
      />
    </div>
  );
}
