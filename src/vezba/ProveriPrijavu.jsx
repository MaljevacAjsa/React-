import { useState } from "react";

const ProveriPrijavu = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMessage] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const Validiraj = () => {
    if (email.includes("@") && password.length >= 6) {
      setMessage("Uspesna prijava");
      setEmailErrorMsg("");
      setPasswordErrorMsg("");
    } else {
      setEmailErrorMsg("Email mora da zadrzi @");
      setPasswordErrorMsg("Sifra mora da ima bar 6 karaktera");
    }
  };
  return (
    <div>
      <label htmlFor="email"></label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <p>{emailErrorMsg}</p>
      <label htmlFor="password"></label>
      <input
        type="text"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{passwordErrorMsg}</p>
      <button onClick={() => Validiraj(email, password)}>Validiraj</button>
      <p>{msg}</p>
    </div>
  );
};
export default ProveriPrijavu;
