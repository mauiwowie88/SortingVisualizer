import ToggleTheme from "./ToggleButton.jsx";
import SearchBox from "./SearchBox.jsx";

import "./Navbar.css";

const dummyObject = {
  title: "Dummy Object",
  description: "This is a dummy object for testing purposes.",
  value: 42,
  nestedObject: {
    key: "nestedValue",
    nestedArray: [1, 2, 3, 4, 5],
  },
  booleanValue: true,
  arrayValue: ["a", "b", "c"],
};

const Navbar = ({ data, forward, backward, theme, setTheme, nav, setNav }) => {
  const renderedItems = Object.keys(dummyObject).map((type) => (
    <li className="item" key={type}>
      <button onClick={() => forward(type)}>{type}</button>
    </li>
  ));

  return (
    <nav className="navbar">
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <SearchBox theme={theme} />
      <div className="nav-container">
        <button className={`icon ${theme}`} onClick={() => setNav(!nav)}>
          {nav ? "‹‹" : "☰"}
        </button>
        <ul className={`dropdown ${nav ? "show" : ""}`}>{renderedItems}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
