import React, { useEffect, useState, useRef } from "react";

export default function Navbar({ title, ds, stack, forward, backward }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef();

  const renderedItems = Object.keys(ds).map((type) => (
    <Item title={type} key={type} onClick={forward} />
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
      <h1>{title}</h1>
      <button
        className={`icon ${isNavOpen ? "hide" : ""}`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        ☰
      </button>
      {isNavOpen && (
        <div className="dropdown" ref={menuRef}>
          {renderedItems}
          {stack.length > 1 && <button onClick={backward}>Back</button>}
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
