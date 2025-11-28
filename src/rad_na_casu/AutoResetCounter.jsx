import React, { useState, useEffect } from "react";

function AutoResetCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 10) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h2>Count {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default AutoResetCounter;
