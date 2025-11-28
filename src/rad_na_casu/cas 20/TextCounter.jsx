import { useEffect, useMemo, useState } from "react";

const TextCounter = () => {
  const [textCount, setTextCount] = useState(0);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");

  const slowLength = (str) => {
    let str2 = 0;
    for (let i = 0; i < 2000; i++) str2 += i;
    return str.length;
  };

  const calculatedLength = useMemo(() => slowLength(text), [text]);

  useEffect(() => {
    setTextCount(calculatedLength);
  }, [calculatedLength]);

  return (
    <div>
      <h2 style={{ color: textColor }}>Text {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <div>
        <h2>Number of characters in text: {textCount}</h2>
        <button
          onClick={() => setTextColor((c) => (c === "black" ? "red" : "black"))}
        >
          Change text color
        </button>
      </div>
    </div>
  );
};

export default TextCounter;
