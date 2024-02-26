import React, { useEffect, useState } from "react";
import dataStructures from "../dataStructures";
import logo from "../images/logo.png";

const DropdownItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(children);
  return (
    <div className="dropdown-item">
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const closeNav = (event) => {
      if (event.target.closest(".navbar") === null) setIsNavOpen(false);
    };
    window.addEventListener("click", closeNav);
    return () => window.removeEventListener("click", closeNav);
  }, []);

  return (
    <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
      <img src={logo} alt="logo" id="logo" />
      <button
        className={`icon ${isNavOpen ? "hide" : ""}`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        ☰{" "}
      </button>
      {isNavOpen && (
        <div className="dropdown">
          {Object.keys(dataStructures).map((type) => (
            <DropdownItem title={type} key={type}></DropdownItem>
          ))}
        </div>
      )}
    </nav>
  );
}
