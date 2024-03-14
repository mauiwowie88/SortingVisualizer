import toggle_light from "../../library/images/night.png";
import toggle_dark from "../../library/images/day.png";

const ToggleTheme = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <img
      src={theme === "light" ? toggle_light : toggle_dark}
      alt={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`toggle-icon ${
        theme === "light" ? "light-theme" : "dark-theme"
      }`}
      onClick={toggle_mode}
    />
  );
};

export default ToggleTheme;
