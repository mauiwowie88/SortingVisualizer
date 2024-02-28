import React, { useEffect, useState, useRef } from "react";
import dataStructures from "../dataStructures";
import logo from "../images/logo.png";

const Item = ({ title, children, onClick, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    onClick(title);
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown-item">
      <button onClick={handleClick}>{title}</button>
      {isOpen && selected === title && (
        <div>
          {Object.keys(children).map((childKey) => (
            <button key={childKey}>{childKey}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [title, setTitle] = useState("Data Structures");
  const menuRef = useRef();

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

  const handleClick = (title) => {
    setTitle(title);
  };

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
        <div className="dropdown" ref={menuRef}>
          <h3>{title}</h3>
          {Object.keys(dataStructures).map((type) => (
            <Item
              title={type}
              key={type}
              children={dataStructures[type]}
              onClick={handleClick}
              selected={title}
            />
          ))}
        </div>
      )}
    </nav>
  );
}
