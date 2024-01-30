import React from "react";
import logo from "../images/logo.png";
import {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "../algorithms";

export default function Header({ newStyle }) {
  return (
    <header>
      <img src={logo} alt="logo" style={{ width: "240px" }} />
      <button id="dropdown-btn">
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav>
        <li>
          <button onClick={() => changeStyle(bubbleSort)}>Bubble Sort</button>
        </li>
        <li>
          <button onClick={() => changeStyle(selectionSort)}>
            Selection Sort
          </button>
        </li>
        <li>
          <button onClick={() => changeStyle(insertionSort)}>
            Insertion Sort
          </button>
        </li>
        <li>
          <button onClick={() => changeStyle(mergeSort)}>Merge Sort</button>
        </li>
        <li>
          <button onClick={() => changeStyle(quickSort)}>Quick Sort</button>
        </li>
      </nav>
    </header>
  );
}
