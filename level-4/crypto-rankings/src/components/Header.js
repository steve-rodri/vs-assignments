import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const buttonContent = theme === "light" ? "🌙" : "☀️";
  return (
    <header>
      <button onClick={toggleTheme}>{buttonContent}</button>
    </header>
  );
};

export default Header;
