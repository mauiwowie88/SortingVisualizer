import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import logo from './images/logo.png';


function App() {
    const [array, setArray] = useState([]);
    const [size, setSize] = useState(22);
    const [speed, setSpeed] = useState(100);
    
    function generateArray() {
      const newArray = Array.from({ length: size }, () => Math.random());
      setArray(newArray);
    }

    function start() {
      generateArray();
      showBars();
    }
    
    function sort() {
        const copy = [...array];
        const moves = bubbleSort(copy);
        animate(moves);
    }
  
    function animate(moves) {
      if (moves.length === 0) {
        showBars();
        return;
      }
  
      const move = moves.shift();
      const [i, j] = move.indices;
  
      if (move.type === "swap") {
        [array[i], array[j]] = [array[j], array[i]];
      }
  
      // playNote(200 + array[i] * 400);
      // playNote(200 + array[j] * 400);
  
      showBars(move);
      setTimeout(function () {
        animate(moves);
      }, speed);
    }

    const handleSizeChange = (event) => {
      const newSize = parseInt(event.target.value);
      setSize(newSize);
      showBars();
    };

    const handleSpeedChange = (event) => {
      const newSpeed = parseInt(event.target.value);
      setSpeed(newSpeed);
    };
  
    function bubbleSort(array) {
      const moves = [];
      let swapped;
      do {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
          if (array[i - 1] > array[i]) {
            swapped = true;
            moves.push({ indices: [i - 1, i], type: "swap" });
            [array[i - 1], array[i]] = [array[i], array[i - 1]];
          }
        }
      } while (swapped);
      return moves;
    }

    function showBars(move) {
      const container = document.getElementById("container");
      container.innerHTML = "";
      const maxWidth = 100 / size;

      for (let i = 0; i < size; i++) {
        const bar = document.createElement("div");
        const barHeight = array[i] * 100;
        const barWidth = maxWidth + "%";

        bar.classList.add("bar");
        bar.style.height = `${barHeight}%`;
        bar.style.width = barWidth;
        bar.innerHTML = barHeight.toFixed(0);
    
        if (move && move.indices.includes(i)) {
          bar.style.backgroundColor =
            move.type === "swap" ? "green" : "red";
        }
        container.appendChild(bar);
      }
    }

    useEffect(() => {
      generateArray();
      showBars();
    }, [size]);

    return (
      <div id="home">
        <nav>
          <img src={logo} alt="logo" style={{ width: '240px' }}/>
          <div>
            <button>Bubble</button>
            <button>Selection</button>
            <button>Insertion</button>
            <button>Merge</button>
            <button>Quick</button>
          </div>
        </nav>
        <div id="main">
          <div id="container"></div>
          <div id="settings">
            <button id="start" onClick={start}>Start</button>
            <button id="play" onClick={sort}>Sort</button>
            <button id="size">Size: <span id="size_value">{size}</span></button>
            <input
              type="range"
              id="size_slider"
              min="4" max="100"
              value={size}
              onChange={handleSizeChange}
            />
            <button id="speed">Speed: <span id="speed_value">{speed}</span></button>
            <input 
              type="range" 
              id="speed_slider" 
              min="1" max="10" 
              value={speed} 
              onChange={handleSpeedChange}
            />
          </div>
        </div>
      </div>
    );
}
export default App;

