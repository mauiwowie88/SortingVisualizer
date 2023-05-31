// /*** Animating Functions ***/
// import { bubbleSort } from "./sortingFunctions";

// export function generateArray(size, setArray) {
// 	const newArray = Array.from({ length: size }, () => Math.random());
// 	setArray(newArray);
// }

// export function start(generateArray, size, setArray) {
// 	generateArray(size, setArray);
// }

// export function sort(array, moves, animate) {
// 	const copy = [...array];
// 	const swap = bubbleSort(copy);
// 	animate(copy, swap);
// }

// export function animate(array, moves, speed, setArray) {
// 	if (moves.length === 0) return;

// 	const copy = [...array];
// 	const move = moves[0];
// 	const [i, j] = move.indices;

// 	if (move.type === "swap") {
// 		[copy[i], copy[j]] = [copy[j], copy[i]];
// 		setArray(copy);
// 	}
// 	setTimeout(function () {
// 		setArray(copy);
// 		animate(copy, moves.slice(1), speed, setArray);
// 	}, speed);
// }

// export function handleSizeChange(event, setSize) {
// 	const newSize = parseInt(event.target.value);
// 	setSize(newSize);
// }

// export function handleSpeedChange(event, setSpeed) {
// 	const newSpeed = parseInt(event.target.value);
// 	setSpeed(newSpeed);
// }
