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
    const copy = [...array];
    const moves = copy;
    animate(moves);
  }

  function animate(moves) {
    if (moves.length === 0) return;

    const copy = [...array];
    const move = moves[0];
    const [i, j] = move.indices;
    const bars = document.getElementsByClassName("bar");
    if (move.type === "swap") [array[i], array[j]] = [array[j], array[i]];
    bars[i].style.backgroundColor = "green";

    setTimeout(function () {
      bars[i].style.backgroundColor = "cyan";
      animate(moves.slice(1));
    }, speed);
    setArray(copy);
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
