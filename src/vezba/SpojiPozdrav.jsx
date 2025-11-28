import { useState } from "react";

const SpojiPozdrav = () => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [fullName, setFullName] = useState("");
  const PrikaziPunoIme = (ime, prezime) => {
    setFullName(`Zdravo ${ime} ${prezime}!`);
  };
  return (
    <div>
      <label htmlFor="ime">Ime</label>
      <input
        type="text"
        name="ime"
        id="ime"
        placeholder="Ime"
        value={ime}
        onChange={(e) => {
          setIme(e.target.value); // zaboravila sam da ovde treba setIme da se koristi da bi vrenost ime state varijable bila e.target.value tj da bi se na svaku promenu inputa uzela vrednost iz targeta i stavila u ime
        }}
      />
      <label htmlFor="prezime">Prezime</label>
      <input
        type="text"
        name="prezime"
        id="prezime"
        placeholder="Prezime"
        value={prezime}
        onChange={(e) => {
          setPrezime(e.target.value);
        }}
      />
      <button
        onClick={() => {
          PrikaziPunoIme(ime, prezime);
        }}
      >
        Prikazi puno ime
      </button>
      <p>{fullName}</p>
    </div>
  );
};
export default SpojiPozdrav;
