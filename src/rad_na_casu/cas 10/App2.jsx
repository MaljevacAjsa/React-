import { useEffect, useState } from "react";

const App2 = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    console.log("Prvi useEffect");
  }, [color]);

  useEffect(() => {
    console.log("Drugi useEffect");
  }, [count, color]);

  useEffect(() => {
    console.log("Treci useEffect");
  });
  const changeColor = () => {
    setColor((prevValue) => (prevValue === "green" ? "red" : "green"));
    // prevValue je referenca za varijablu STATE, ne mora da se izricito pomene ta varijabla
  };

  return (
    <div>
      <p style={{ color: color }}>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <br />
      <button onClick={changeColor}>Promeni Boju</button>
    </div>
  );
};
export default App2;
