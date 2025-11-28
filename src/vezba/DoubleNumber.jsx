import { useState } from "react";

const DoubleNumber = () => {
  // inputStr čuva tačno šta je korisnik uneo (string)
  // n čuva poslednju validnu numeričku vrednost (number)
  const [inputStr, setInputStr] = useState("");
  const [n, setN] = useState(1);

  // kada korisnik kuca, sačuvamo string i ako je validan broj
  // ažuriramo i numerički state (n) radi prikaza/računanja
  const handleChange = (e) => {
    const s = e.target.value;
    setInputStr(s);

    const parsed = parseFloat(s);
    if (!Number.isNaN(parsed)) {
      setN(parsed);
    }
    // ako nije broj (npr. prazan string), ne menjamo n ovde
  };

  // dupliraj — prvo pokušamo parsirati inputStr; ako nije validan,
  // koristimo poslednju poznatu validnu numeru (n)
  const doubleN = () => {
    const parsed = parseFloat(inputStr);
    const base = Number.isNaN(parsed) ? n : parsed;
    const doubled = base * 2;

    // osvežimo i prikaz (input) i numerički state
    setInputStr(String(doubled));
    setN(doubled);
  };

  const reset = () => {
    setInputStr("0");
    setN(1);
  };

  return (
    <div
      style={{ maxWidth: 420, padding: 12, fontFamily: "Arial, sans-serif" }}
    >
      <label htmlFor="input">Unesi broj (N): </label>
      <input
        id="input"
        type="number"
        inputMode="decimal"
        placeholder="N"
        value={inputStr}
        onChange={handleChange}
        style={{ marginLeft: 8, marginRight: 8, padding: 6 }}
      />
      <button onClick={doubleN} style={{ padding: "6px 10px" }}>
        Double
      </button>
      <button onClick={reset} style={{ marginLeft: 8, padding: "6px 10px" }}>
        Reset
      </button>

      <p style={{ marginTop: 12 }}>
        Trenutna (numerička) vrednost: <strong>{n}</strong>
      </p>
      <p style={{ marginTop: 4, color: "#555" }}>
        (Input sadrži: <code>{inputStr === "" ? "(prazno)" : inputStr}</code>)
      </p>
    </div>
  );
};

export default DoubleNumber;
