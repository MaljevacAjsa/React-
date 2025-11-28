import { useState } from "react";

const Vreme = () => {
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");
  const Prikazi = () => {
    if (city.trim() === "") {
      setMsg("Unesi naziv grada!");
    } else {
      setMsg(`Vreme u ${city} je suncano!`);
    }
  }; // pre je ovde bio useEffect koji je setovao msg varijablu kada se promeni city varijabla a ona je bila on change i dakle svaki put kada se nesto ukuca u city ono se seta msg i zato nije htelo da klik ali to samo funkcijom promenila
  return (
    <div>
      <input
        value={city}
        type="text"
        placeholder="Grad"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={Prikazi}>Prikazi Vreme</button>
      <p>{msg}</p>
    </div>
  );
};
export default Vreme;
