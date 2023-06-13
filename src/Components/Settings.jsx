// import Visualizer from "./Visualizer";

// function Settings({
// 	array,
// 	moves,
// 	start,
// 	sort,
// 	size,
// 	handleSizeChange,
// 	speed,
// 	handleSpeedChange,
// }) {
// 	return (
// 		<div id="main">
// 			<div id="visualizer">
// 				{array.map((value, index) => (
// 					<div
// 						key={index}
// 						className={`bar ${colorIndices.includes(index) ? "swap" : "compare"}`}
// 						style={{
// 							height: `${value * 100}%`,
// 						}}>
// 						{(value * 100).toFixed(0)}
// 					</div>
// 				))}
// 			</div>
// 			{/* <Visualizer array={array} moves={moves} /> */}
// 			<div id="settings">
// 				<button onClick={start}>Start</button>
// 				<button onClick={sort}>Sort</button>
// 				<button className="sliderBtn">
// 					Size: <span>{size}</span>
// 				</button>
// 				<input
// 					type="range"
// 					id="size_slider"
// 					min="11"
// 					max="300"
// 					value={size}
// 					onChange={handleSizeChange}
// 				/>
// 				<button className="sliderBtn">
// 					Speed: <span>{speed}</span>
// 				</button>
// 				<input
// 					type="range"
// 					id="speed_slider"
// 					min="-111"
// 					max="111"
// 					value={speed}
// 					onChange={handleSpeedChange}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// export default Settings;
