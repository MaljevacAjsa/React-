import { use, useState } from "react";

const MakeCard = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [msg, setMsg] = useState("");
  const [cardData, setCardData] = useState(null);
  const MakeTheCard = () => {
    if (name && age && hobby) {
      setCardData({ name, age, hobby });
      setMsg("");
    } else {
      setCardData(null);
      setMsg("Unesite validne podatke");
    }
  };
  const resetCard = () => {
    setCardData(null);
    setName("");
    setAge("");
    setHobby("");
  };
  return (
    <div>
      <label htmlFor="ime">Ime: </label>
      <input
        type="text"
        name=""
        id="ime"
        placeholder="Ime"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="godine">Godine: </label>
      <input
        type="text"
        name=""
        id="godine"
        placeholder="Godine"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <label htmlFor="hobi">Hobi: </label>
      <input
        type="text"
        name=""
        id="hobi"
        placeholder="Hobi"
        value={hobby}
        onChange={(e) => {
          setHobby(e.target.value);
        }}
      />
      <button
        onClick={() => {
          MakeTheCard(name, age, hobby);
        }}
      >
        Napravi Karticu
      </button>
      <p>{msg}</p>
      {cardData && (
        <div>
          <div
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <p>
              {" "}
              <strong>Ime: </strong> {name}
            </p>
            <p>
              {" "}
              <strong>Godine: </strong> {age}
            </p>
            <p>
              {" "}
              <strong>Hobi: </strong> {hobby}
            </p>
          </div>
          <button onClick={resetCard}>ResetCard</button>
        </div>
      )}
    </div>
  );
};
export default MakeCard;
