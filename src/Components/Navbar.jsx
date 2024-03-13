import React, { useEffect, useState, useRef } from "react";

export default function Navbar({ data, title, stack, forward, backward }) {
  const [toggleNav, setToggleNav] = useState(false);
  const menuRef = useRef();

  const renderedItems = Object.keys(data).map((type) => (
    <li className="item" key={type}>
      <button onClick={() => forward(type)}>{type}</button>
    </li>
  ));

  useEffect(() => {
    let handler = (e) => {
      if (
        !e.target.closest(".icon") &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      )
        setToggleNav(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="/">{title}</a>
      {!toggleNav ? (
        <button className="icon" onClick={() => setToggleNav(true)}>
          ☰
        </button>
      ) : (
        <div>
          <button className="icon" onClick={backward}>
            ⬅
          </button>
          <ul className="dropdown" ref={menuRef}>
            {renderedItems}
          </ul>
        </div>
      )}
    </nav>
  );
}
