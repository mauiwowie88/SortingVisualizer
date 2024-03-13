import React, { useEffect, useState, useRef } from "react";

export default function Navbar({ data, title, stack, forward, backward }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef();

  // const renderedItems = Object.keys(data).map((type) => (
  //   <Item title={type} key={type} onClick={forward} />
  // ));

  const renderedItems = Object.keys(data).map((type) => (
    <div className="item" key={type}>
      <button onClick={() => forward(type)}>{type}</button>
    </div>
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

// const Item = ({ title, onClick }) => {
//   return (
//     <div className="item">
//       <button onClick={() => onClick(title)}>{title}</button>
//     </div>
//   );
// };
