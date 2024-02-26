import React from "react";
import Visualizer from "./Components/Visualizer";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div id="app">
      <Navbar />
      <Visualizer />
    </div>
  );
}

/*

  function sort() {
    const moves = bubbleSort([...array]);
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

*/
