import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import logo from './images/logo.png';


function App() {
    const [array, setArray] = useState([]);
    const [size, setSize] = useState(100);
    const [speed, setSpeed] = useState(10);
    
    function generateArray() {
      const newArray = Array.from({ length: size }, () => Math.random());
      setArray(newArray);
    }

    function start() {
      generateArray();
    }
    
    function sort() {
        const copy = [...array];
        const moves = bubbleSort(copy);
        animate(moves);
    }
  
    function animate(moves) {
      if (moves.length === 0) return;
  
      const copy = [...array];
      const move = moves[0];
      const [i, j] = move.indices;
  
      if (move.type === "swap") [array[i], array[j]] = [array[j], array[i]];
  
      setTimeout(function () {
        setArray(copy);
        animate(moves.slice(1));
      }, speed);
    }

    const handleSizeChange = (event) => {
      const newSize = parseInt(event.target.value);
      setSize(newSize);
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

    useEffect(() => {
      generateArray();
    }, [size]);

    return (
      <div>
        <header>
          <img src={logo} alt="logo" style={{ width: '240px' }}/>
            
          <div className="dropdown-menu">
            <button className="btn">Bubble</button>
            <button className="btn">Selection</button>
            <button className="btn">Insertion</button>
            <button className="btn">Merge</button>
            <button className="btn">Quick</button>
          </div>
            <i className="fa-solid fa-bars menu-button"></i>
        </header>

        <div id="main">
          <div id="visualizer">
            {array.map((barHeight, index) => (
              <div
                key={index}
                className="bar"
                style={{
                  height: `${barHeight * 100}%`,
                  "--bar-height": barHeight * 100
                }}
              >
                {index.toFixed(0)}
              </div>
            ))}
          </div>
          <div id="settings">
            <button className="btn" onClick={start}>Start</button>
            <button className="btn" onClick={sort}>Sort</button>
            <button className="sliderBtn">Size: <span>{size}</span></button>
            <input
              type="range"
              id="size_slider"
              min="5" max="250"
              value={size}
              onChange={handleSizeChange}
            />
            <button className="sliderBtn">Speed: <span>{speed}</span></button>
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

