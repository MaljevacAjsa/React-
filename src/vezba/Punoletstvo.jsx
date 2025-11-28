import { useState } from "react";

const Punoletstvo = () => {
  const [godine, setGodine] = useState("");
  const [msg, setMsg] = useState("");
  const proveriPunoletstvo = () => {
    if (godine >= 18) {
      setMsg("Punoletnik");
    } else {
      setMsg("Maloletnik");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Unesi godine"
        value={godine}
        onChange={(e) => {
          setGodine(e.target.value);
        }}
      />
      <button onClick={proveriPunoletstvo}>Proveri Punoletstvo</button>
      <p>{msg}</p>
    </div>
  );
};
export default Punoletstvo;
