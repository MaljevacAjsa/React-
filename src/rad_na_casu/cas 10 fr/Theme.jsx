import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const Theme = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          backgroundColor: theme == "light" ? "#fff" : "#000",
          color: theme == "light" ? "#000" : "#fff",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h2>Tema</h2>
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        style={{
          marginTop: "20px",
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Theme;
