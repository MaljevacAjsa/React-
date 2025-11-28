import { useEffect, useRef } from "react";

const FocusInput = () => {
  const imeRef = useRef(null);
  const prezimeRef = useRef(null);
  const focus = () => {
    if (imeRef.current.value.trim() !== "") {
      //mora .current da se koristi kad god se koristi useRef konstanta
      prezimeRef.current.focus();
    } else {
      alert("Unesite ime");
    }
  };

  useEffect(() => {
    imeRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={imeRef} placeholder="Ime" />
      <input type="text" ref={prezimeRef} placeholder="Prezime" />
      <button onClick={focus}>Submit</button>
    </div>
  );
};
export default FocusInput;
