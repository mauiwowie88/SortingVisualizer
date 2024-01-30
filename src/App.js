import React, { useState, useEffect } from "react";
import Visualizer from "./Components/Visualizer";
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
  const [currentIndices, setCurrentIndices] = useState([]);
  const [array, setArray] = useState(
    Array.from({ length: size }, () => Math.random())
  );

  function generateArray() {
    const newArray = Array.from({ length: size }, () => Math.random());
    setArray(newArray);
  }

  function changeStyle(newStyle) {
    setAlgo(() => newStyle);
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
    const moves = algo([...array]);
    animate(moves, 0);
  }

  function animate(moves, index) {
    if (index >= moves.length) return;
    const move = moves[index];
    const newArray = [...array];

    if (move.type === "swap") {
      [newArray[move.indices[0]], newArray[move.indices[1]]] = [
        newArray[move.indices[1]],
        newArray[move.indices[0]],
      ];
    }
    setCurrentIndices(move.indices);
    setArray(newArray);

    setTimeout(() => animate(moves, index + 1), speed);
  }

  useEffect(() => {
    generateArray();
  }, [size]);

  return (
    <div id="app">
      <Header changeStyle={changeStyle} />
      <Visualizer array={array} currentIndices={currentIndices} />
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
