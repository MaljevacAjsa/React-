import { createContext, useContext, useState } from "react";

const UserContext = createContext(); //kreiramo context

const LoginStatus = () => {
  const [user, setUser] = useState(null); // pocetna vrednost null radi dalje provere ulogovanja
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Status prijave</h2>
        <LoginButton />
        <UserInfo />
      </div>
    </UserContext.Provider> //ne zamenjuje div ali mora da wrapa ceo html
  );
};

const LoginButton = () => {
  const { user, setUser } = useContext(UserContext); // destruktuirali smo data koju smo importovali iz parent komponente pomocu UserContext konteksta u dve varijable, user i setUser
  const handleClick = () => {
    if (user) {
      setUser(null);
    } else {
      setUser("Ajsa"); // toggluje vrednost prijave na klik dugmeta tjt.
    }
  };
  return (
    <button onClick={handleClick}>{user ? "Odjavi se" : "Uloguj se"}</button>
  );
};

const UserInfo = () => {
  const { user } = useContext(UserContext); // samo user smo uzeli jer nam samo user treba, samo ime je user (Ajsa)
  return (
    <p style={{ marginTop: "20px" }}>
      {user ? `Dobrodošla, ${user}!` : "Nisi prijavljena."}
    </p>
  );
};

export default LoginStatus;

// Zadatak – Status prijave
// Kreiraj UserContext pomoću createContext().
// U App komponenti definiši user stanje, npr.
// Prosledi user i setUser kroz UserContext.Provider.
// Napravi komponentu LoginButton:
// Ako korisnik nije ulogovan → prikaži dugme „Uloguj se“
// Ako jeste → prikaži „Odjavi se“
// Klik menja loggedIn stanje.
// Napravi komponentu UserInfo koja prikazuje poruku:
// „Dobrodošla, Džejlana!“ ako je ulogovana
// „Nisi prijavljena“ ako nije.
