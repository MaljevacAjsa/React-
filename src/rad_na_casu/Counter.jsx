import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function Povecaj() {
    setCount(count + 1);
  }
  function Smanji() {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={Povecaj}>
        <p>Povecaj</p>
      </button>
      <button onClick={Smanji}>
        <p>Smanji</p>
      </button>
      <p>{count}</p>
    </div>
  );
}
export default Counter;
