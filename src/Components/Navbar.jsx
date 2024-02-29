import React, { useEffect, useState, useRef } from "react";
import ds from "../dataStructures";
import logo from "../images/logo.png";

const Item = ({ title, onClick }) => {
  return (
    <div className="dropdown-item">
      <button onClick={() => onClick(title)}>{title}</button>
    </div>
  );
};

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [title, setTitle] = useState("Data Structures");
  const menuRef = useRef();

  const handleClick = (key) => {
    setTitle(key);
  };

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsNavOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
      <img src={logo} alt="logo" id="logo" />
      <input
        type="button"
        className={`icon ${isNavOpen ? "hide" : ""}`}
        onClick={() => setIsNavOpen(!isNavOpen)}
        value="☰"
      />
      {isNavOpen && (
        <div className="dropdown" ref={menuRef}>
          <h3>{title}</h3>
          {Object.keys(ds).map((type) => (
            <Item title={type} key={type} onClick={handleClick} />
          ))}
        </div>
      )}
    </nav>
  );
}
