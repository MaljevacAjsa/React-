import { useState, useEffect } from "react";

const CharCounter = () => {
  const [str, setStr] = useState("");
  const [numOfChars, setNumOfChars] = useState(0);

  useEffect(() => {
    const count = str.split("").filter((char) => char !== " ").length;
    setNumOfChars(count);
  }, [str]);

  return (
    <div>
      <input
        onChange={(e) => setStr(e.target.value)}
        value={str}
        type="text"
        placeholder="Text"
        name=""
        id=""
      />
      <h2>Number of chars:{numOfChars}</h2>
    </div>
  );
};
export default CharCounter;
