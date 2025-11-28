import { useState } from "react";
import "./PageForm.css";

const PageForm = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [warning, setWarning] = useState("");
  const [card, setCard] = useState(null);

  const handleInputs = () => {
    if (!fullName || !age || !profession) {
      setWarning("Popunite sva polja");
      setCard(null);
      return;
    }
    setWarning("");
    setCard({ fullName, age, profession });
  };

  const reset = () => {
    setFullName("");
    setAge("");
    setProfession("");
    setWarning("");
    setCard(null);
  };

  return (
    <div id="main_container">
      <div id="sub_container">
        <label htmlFor="fullName">Ime i Prezime</label>
        <input
          id="fullName"
          value={fullName}
          placeholder="Ime i prezime"
          name="fullName"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div id="sub_container">
        <label htmlFor="age">Godine</label>
        <input
          id="age"
          value={age}
          placeholder="Godine"
          name="age"
          type="text"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div id="sub_container">
        <label htmlFor="profession">Profesija</label>
        <input
          id="profession"
          value={profession}
          placeholder="Profesija"
          name="profession"
          type="text"
          onChange={(e) => setProfession(e.target.value)}
        />
      </div>
      <p id="warning">{warning}</p>
      <button onClick={handleInputs}>Prikazi profil</button>
      <button onClick={reset}>Reset</button>
      <div id="card">
        {card && (
          <>
            <p>Ime i prezime : {card.fullName}</p>
            <p>Godine : {card.age}</p>
            <p>Profesija : {card.profession}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PageForm;
