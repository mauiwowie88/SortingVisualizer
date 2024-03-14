import ToggleTheme from "./ToggleTheme.jsx";
import ToggleNav from "./ToggleNav.jsx";
import SearchBox from "./SearchBox.jsx";
import "./Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="navbar">
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <SearchBox theme={theme} />
      <ToggleNav theme={theme} />
    </nav>
  );
};

export default Navbar;
