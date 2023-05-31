import React from "react";

function Visualizer({ array, moves }) {
	return (
		<div id="visualizer">
			{array.map((barHeight, index) => (
				<div
					key={index}
					className={`bar ${
						moves.length > 0 &&
						moves[0].indices.includes(index) &&
						moves[0].type === "swap"
							? "green"
							: "red"
					}`}
					style={{
						height: `${barHeight * 100}%`,
						"--bar-height": barHeight * 100,
					}}>
					{(barHeight * 100).toFixed(0)}
				</div>
			))}
		</div>
	);
}

export default Visualizer;
