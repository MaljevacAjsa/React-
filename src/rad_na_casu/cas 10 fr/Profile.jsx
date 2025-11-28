import { createContext, useContext, useState } from "react";

const UserContext = createContext(); //pravimo kontekst pomocu createContext, on mora da je globalan da bi vrednosti koje stavimo u njega mogle da se u parent komponenti definisu i proslede u child komponenti
const Profile1 = () => {
  const userName = "ajsa"; //ovo je varijabla koju zelimo da child funkcija nasledi
  return (
    <UserContext.Provider value={userName}>
      {" "}
      {/* sve sto je upakovano u UserContext je ono sto se prosledjuje, value={{}} su one vrednosti koje se prosledjuju, atribut Provider znaci da ce ovo da bude parent funkcija*/}
      <div>
        <Profile2 />{" "}
        {/* Ovo je komponenta koju smo napravili koristeci informacije iz main komponente koje smo prosledili pomocu konteksta, nju stavljamo u UserContext tag u parent komponenti*/}
      </div>
    </UserContext.Provider>
  );
};

const Profile2 = () => {
  const user = useContext(UserContext); //nasledjujemo informacije iz parent komponente pomocu UserContext zato sto je definisan globalno, cuvamo ih u ovom slucaju u varijablu jer u UserContext-u se samo jedna prosta vrednost prosledjuje
  return <h2>{user}</h2>;
};
export default Profile1;
