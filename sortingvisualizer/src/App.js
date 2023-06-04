import "./App.css";
import logo from "./images/logo.png";
import React, { useState, useEffect } from "react";
import Settings from "./Components/Settings";
import {
	bubbleSort,
	insertionSort,
	mergeSort,
	quickSort,
	selectionSort,
} from "./sortingFunctions";

function App() {
	const [array, setArray] = useState([]);
	const [size, setSize] = useState(11);
	const [speed, setSpeed] = useState(111);

	function generateArray() {
		const newArray = Array.from({ length: size }, () => Math.random());
		setArray(newArray);
	}

	function start() {
		generateArray();
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
		const moves = bubbleSort(copy);
		console.log(moves);
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
			<header>
				<img src={logo} alt="logo" style={{ width: "240px" }} />
				<button id="dropdown-btn">
					<i className="fa-solid fa-bars"></i>
				</button>

				<div className="dropdown-menu">
					<button>Bubble</button>
					<button>Selection</button>
					<button>Insertion</button>
					<button>Merge</button>
					<button>Quick</button>
				</div>
			</header>
			<div id="main">
				<div id="visualizer">
					{array.map((value, index) => (
						<div
							key={index}
							className="bar"
							style={{
								height: `${value * 100}%`,
							}}>
							{(value * 100).toFixed(0)}
						</div>
					))}
				</div>
				{/* <Visualizer array={array} moves={moves} /> */}
				<div id="settings">
					<button onClick={start}>Start</button>
					<button onClick={sort}>Sort</button>
					<button className="sliderBtn">
						Size: <span>{size}</span>
					</button>
					<input
						type="range"
						id="size_slider"
						min="11"
						max="111"
						value={size}
						onChange={handleSizeChange}
					/>
					<button className="sliderBtn">
						Speed: <span>{speed}</span>
					</button>
					<input
						type="range"
						id="speed_slider"
						min="-111"
						max="1111"
						value={speed}
						onChange={handleSpeedChange}
					/>
				</div>
			</div>
			{/* <Settings
				array={array}
				moves={moves}
				start={start}
				sort={sort}
				size={size}
				handleSizeChange={handleSizeChange}
				speed={speed}
				handleSpeedChange={handleSpeedChange}
			/> */}
		</div>
	);
}
export default App;
