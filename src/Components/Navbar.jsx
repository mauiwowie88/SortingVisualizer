import React, { useEffect, useState, useRef } from "react";
import ds from "../dataStructures";
import logo from "../images/logo.png";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [title, setTitle] = useState("Data Structures");
  const [dataStructure, setDataStructure] = useState(ds);
  const [stack, setStack] = useState([title]);
  const menuRef = useRef();

  const handleClick = (key) => {
    const nextStructure = dataStructure[key];
    if (typeof nextStructure === "object" && !Array.isArray(nextStructure)) {
      setStack((stack) => [...stack, key]);
      setDataStructure(nextStructure);
      setTitle(key);
    }
  };

  const handleBack = () => {
    setStack((prevStack) => {
      if (prevStack.length <= 1) return prevStack;
      const newStack = prevStack.slice(0, -1);
      let newStructure = ds;
      for (let i = 1; i < newStack.length; i++) {
        newStructure = newStructure[newStack[i]];
      }
      setDataStructure(newStructure);
      setTitle(newStack[newStack.length - 1]);
      return newStack;
    });
  };

  const renderedItems = Object.keys(dataStructure).map((type) => (
    <Item title={type} key={type} onClick={handleClick} />
  ));

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
      <button
        className={`icon ${isNavOpen ? "hide" : ""}`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        ☰
      </button>
      {isNavOpen && (
        <div className="dropdown" ref={menuRef}>
          <h3>{title}</h3>
          {renderedItems}
          {stack.length > 1 && <button onClick={handleBack}>Back</button>}
        </div>
      )}
    </nav>
  );
}

const Item = ({ title, onClick }) => {
  return (
    <div className="item">
      <button onClick={() => onClick(title)}>{title}</button>
    </div>
  );
};
