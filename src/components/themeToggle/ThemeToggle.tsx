import { useTheme } from "../../context/context";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import "./themeToggle.scss";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? (
        <FaMoon className="theme-moon" />
      ) : (
        <IoSunnySharp className="theme-sun" />
      )}
    </button>
  );
}

export default ThemeToggle;
