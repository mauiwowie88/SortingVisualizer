import { useState, useReducer } from "react";
import { changeStructure, INITIAL_STATE } from "../../reducers/navReducer.js";

const ToggleNav = ({ theme }) => {
  const [nav, setNav] = useState(false);
  const [state, dispatch] = useReducer(changeStructure, INITIAL_STATE);

  const handleForward = (key) => dispatch({ type: "FORWARD", key });
  const handleBack = () => dispatch({ type: "BACK" });

  const renderedItems = Object.keys(state.data).map((type) => (
    <li className={`item ${theme}`} key={type}>
      <button onClick={() => handleForward(type)}>{type}</button>
    </li>
  ));

  return (
    <div className="nav">
      <button className={`icon ${theme}`} onClick={() => setNav(!nav)}>
        {nav ? "‹‹" : "☰"}
      </button>
      <ul className={`dropdown ${nav ? "show" : ""}`}>{renderedItems}</ul>
    </div>
  );
};
export default ToggleNav;
