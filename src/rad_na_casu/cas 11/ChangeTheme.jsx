import { useState, useEffect } from "react";

const ChangeTheme = () => {
  const [theme, setTheme] = useState("white");
  useEffect(() => {
    document.body.style.backgroundColor = theme; // na useEffect document.body.style.backgroundColor ce da preuzme vrednost theme varijable
  }, [theme]);
  return (
    <div>
      <button onClick={() => setTheme(theme == "white" ? "black" : "white")}>
        {/*menja se vrednost theme varijable, samo string bukv ili black ili white*/}
        Change Theme
      </button>
    </div>
  );
};
export default ChangeTheme;
//makni funkciju
