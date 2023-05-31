import React from "react";
import "../App.css";
import Visualizer from "./Visualizer";

function Settings({
	array,
	moves,
	start,
	sort,
	size,
	handleSizeChange,
	speed,
	handleSpeedChange,
}) {
	return (
		<div id="main">
			<Visualizer array={array} moves={moves} />
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
					max="300"
					value={size}
					onChange={handleSizeChange}
				/>
				<button className="sliderBtn">
					Speed: <span>{speed}</span>
				</button>
				<input
					type="range"
					id="speed_slider"
					min="-100000"
					max="111"
					value={speed}
					onChange={handleSpeedChange}
				/>
			</div>
		</div>
	);
}

export default Settings;
