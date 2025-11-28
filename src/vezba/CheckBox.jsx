import { useState } from "react";

const CheckBox = () => {
  const [msg, setMsg] = useState("");
  const [agreed, setAgreed] = useState(false);
  const check = () => {
    if (!agreed) {
      setMsg("Morate prihvatiti uslove!");
    } else {
      setMsg("Uslovi prihvaćeni!");
    }
  };
  const handleCheckBoxChange = (event) => {
    setAgreed(event.target.checked);
  };
  return (
    <div>
      <label htmlFor="checkbox">Prihvatam uslove</label>
      <input
        id="checkbox"
        type="checkbox"
        checked={agreed}
        onChange={handleCheckBoxChange}
      />
      <button onClick={check}>Register</button>
      <p>{msg}</p>
    </div>
  );
};
export default CheckBox;
