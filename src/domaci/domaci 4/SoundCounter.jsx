import { useState, useEffect } from "react";

const SoundCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      const audio = new Audio(
        "https://www.soundjay.com/buttons/sounds/button-3.mp3"
      );
      audio.play();
    }
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevValue) => prevValue + 1);
        }}
      >
        Klikni me
      </button>
      <div>Count: {count}</div>
    </div>
  );
};

export default SoundCounter;
