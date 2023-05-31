import "./App.css";
import logo from "./images/logo.png";
import React, { useState, useEffect } from "react";
import Settings from "./Components/Settings";
import { bubbleSort } from "./sortingFunctions";

function App() {
	const [array, setArray] = useState([]);
	const [size, setSize] = useState(88);
	const [speed, setSpeed] = useState(8);
	const [moves, setMoves] = useState([]);
	const [menuOpen, setMenuOpen] = useState(false);

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

		if (move.type === "swap") {
			[array[i], array[j]] = [array[j], array[i]];
			setArray(copy);
		}
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

	const toggleMenu = () => {
		setMenuOpen((prevState) => !prevState);
		console.log("hello");
	};

	useEffect(() => {
		generateArray();
	}, [size]);

	return (
		<div id="app">
			<header>
				<img src={logo} alt="logo" style={{ width: "240px" }} />
				<button id="dropdown-btn" onClick={toggleMenu}>
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

			<Settings
				array={array}
				moves={moves}
				start={start}
				sort={sort}
				size={size}
				handleSizeChange={handleSizeChange}
				speed={speed}
				handleSpeedChange={handleSpeedChange}
			/>
		</div>
	);
}
export default App;
