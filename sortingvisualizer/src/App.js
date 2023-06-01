import "./App.css";
import logo from "./images/logo.png";
import React, { useState, useEffect } from "react";
import Settings from "./Components/Settings";

function App() {
	const [array, setArray] = useState([]);
	const [size, setSize] = useState(88);
	const [speed, setSpeed] = useState(8);
	const [moves, setMoves] = useState([]);
	const [colorIndices, setColorIndices] = useState([]);

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
		animate(moves);
	}

	function animate(moves) {
		if (moves.length === 0) return;

		const copy = [...array];
		const move = moves[0];
		const [i, j] = move.indices;

		if (move.type === "swap") {
			const bars = document.getElementsByClassName("bar");
			bars[i].style.backgroundColor = "green";
			bars[j].style.backgroundColor = "green";
			[array[i], array[j]] = [array[j], array[i]];
			setArray(copy);

			setTimeout(function () {
				bars[i].style.backgroundColor = "rgba(125, 239, 239, 0.867)";
				bars[j].style.backgroundColor = "rgba(125, 239, 239, 0.867)";
				setArray(copy);
				animate(moves.slice(1));
			}, speed);
		}
		if (move.type === "compare") {
			const bars = document.getElementsByClassName("bar");
			bars[i].style.backgroundColor = "blue";
			bars[j].style.backgroundColor = "blue";
			setArray(copy);

			setTimeout(function () {
				bars[i].style.backgroundColor = "rgba(125, 239, 239, 0.867)";
				bars[j].style.backgroundColor = "rgba(125, 239, 239, 0.867)";
				animate(moves.slice(1));
				setArray(copy);
			}, speed);
		}
	}

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
				} else {
					moves.push({ indices: [i - 1, i], type: "compare" });
				}
			}
		} while (swapped);
		return moves;
	}

	useEffect(() => {
		generateArray();
	}, [size]);

	useEffect(() => {
		const colorIndices = moves.map((move) => move.indices).flat();
		setColorIndices(colorIndices);
	}, [moves]);

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
							className={`bar ${colorIndices.includes(index) ? "swap" : "compare"}`}
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
						max="150"
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
						max="1000"
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
