import { createContext, useState, useEffect } from "react";
import { saveState, loadState } from "../helpers/persistState";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const initialTheme = loadState("theme");
  const [theme, setTheme] = useState(initialTheme || "light");
  const toggleTheme = () => setTheme(pT => (pT === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.classList.add(theme);
    if (theme === "dark") document.body.classList.replace("light", "dark");
    if (theme === "light") document.body.classList.replace("dark", "light");
  }, [theme]);

  useEffect(() => {
    saveState(theme, "theme");
  }, [theme]);

  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
