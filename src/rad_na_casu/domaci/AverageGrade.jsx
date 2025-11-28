import React, { useState } from "react";

const AverageGrade = () => {
  const [inputValue, setInputValue] = useState("");
  const [grades, setGrades] = useState([]);
  const [warning, setWarning] = useState("");

  const handleAddGrade = () => {
    const grade = Number(inputValue); // pretvaramo inputValue u broj
    if (grade < 1 || grade > 5) {
      setWarning("Ocena mora biti u opsegu od 1 do 5");
      setInputValue("");
      return;
    }
    setGrades([...grades, grade]); //prepisujemo u niz grades sve prethodne ocene i dodajemo novu
    setWarning("");
    setInputValue("");
  }; // samo dodajemo ocenu u ocene, sredjujemo warning i resetujemo input

  const averageGrade =
    grades.length > 0
      ? (grades.reduce((acc, curr) => acc + curr, 0) / grades.length).toFixed(2)
      : 0; // racunamo  prosecnu ocenu

  return (
    <div>
      <input
        type="text"
        placeholder="Unesite ocenu"
        value={inputValue} //value={inputValue} omogućava da React kontroliše vrednost inputa, što olakšava upravljanje podacima i interakcijama u tvojoj aplikaciji.
        // Kontrola: React kontroliše šta je prikazano u inputu, pa možeš lako validirati, resetovati ili modifikovati vrednost.
        //Jednosmerni tok podataka: Vrednost inputa dolazi iz state-a, pa je aplikacija predvidljivija.
        //Sinhronizacija: Ako promeniš inputValue iz drugog dela koda, input će se automatski ažurirati.
        //Gotcha
        //Ako dodaš value bez onChange, input postaje read-only jer React ne zna kako da ažurira vrednost.
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p id="obavestenje">{warning}</p>
      <button onClick={handleAddGrade}>Dodaj ocenu</button>
      <p>Prosek ocena je {averageGrade}</p>
    </div>
  );
};
export default AverageGrade;
// Zašto ne možemo acc.boja nego acc[boja]
// Koristimo uglaste zagrade kada ključ dolazi iz promenljive.
// ---acc.boja bi trazilo bukv key koji se zove boja u acc objektu a acc[boja] bi trazilo vrednost
// promenljive boja u acc objektu
