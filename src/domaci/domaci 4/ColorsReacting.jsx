import { useState } from "react";

const ColorsReacting = () => {
  const [colors, setColors] = useState([
    "red",
    "green",
    "blue",
    "pink",
    "purple",
  ]);
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % colors.length);
  };

  return (
    <div>
      <div
        className="square"
        style={{
          width: "100px",
          height: "100px",
          background: colors[current],
          cursor: "pointer",
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default ColorsReacting;
