import React from "react";
import logo from "../images/logo.png";

export default function Header({ newStyle }) {
  // console.log(newStyle);
  return (
    <header>
      <img src={logo} alt="logo" style={{ width: "240px" }} />
      <button id="dropdown-btn">
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav>
        <li>
          <button onClick={() => newStyle("bubbleSort")}>Bubble Sort</button>
        </li>
        <li>
          <button>Selection Sort</button>
        </li>
        <li>
          <button>Insertion Sort</button>
        </li>
        <li>
          <button>Merge Sort</button>
        </li>
        <li>
          <button>Quick Sort</button>
        </li>
      </nav>
    </header>
  );
}
