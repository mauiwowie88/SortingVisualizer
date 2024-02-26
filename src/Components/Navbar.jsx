import React, { useState } from "react";
import logo from "../images/logo.png";

export default function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>Trees</li>
        <li>Linked Lists</li>
        <li>Sorting Algorithms</li>
      </ul>
    </nav>
  );
}

/*
import DropMenu from "./DropMenu";

  return (
    <nav className="navbar" onMouseLeave={hideDropdown}>
      <button
        id="drop-btn"
        onClick={showDropdown}
        onMouseEnter={() => setShowMenu(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {showMenu && <DropMenu changeStyle={changeStyle} />}
    </nav>
  );

  function Item(props) {
  return (
    <li className="item">
      <a href="#" className="icon-btn">
        {props.icon}
      </a>
    </li>
  );
}

  const [showMenu, setShowMenu] = useState(false);

  const showDropdown = () => setShowMenu(true);
  const hideDropdown = () => setShowMenu(false);

  return (
    <nav className="navbar">
      <ul className="list">{props}</ul>
    </nav>
  );
*/
