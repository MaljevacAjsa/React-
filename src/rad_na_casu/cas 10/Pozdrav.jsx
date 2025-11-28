import { useEffect, useState } from "react";

const Pozdrav = () => {
  const [ime, setIme] = useState("");
  const [posalji, setPosalji] = useState(false);
  useEffect(() => {
    if (posalji && ime !== "") {
      console.log(`Uneto ime: ${ime}`);
      setPosalji(false);
    }
  }, [ime, posalji]);
  return (
    <div>
      <input
        type="text"
        value={ime}
        onChange={(event) => {
          setIme(event.target.value);
        }}
      />
      <p>Zdravo {ime}!</p>
      <button
        onClick={() => {
          setPosalji(true);
        }}
      >
        Posalji ime
      </button>
    </div>
  );
};
export default Pozdrav;
