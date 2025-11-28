import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const chageInputValue = (e) => {
    setUser((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
      [e.target.surname]: e.target.value,
      [e.target.email]: e.target.value,
    }));
  };
  const alertHello = () => {
    let validName = user.name.trim() !== "";
    let validSurname = user.surname.trim() !== "";
    let validEmail =
      user.email.includes("@") &&
      user.email.includes(".") &&
      (user.email.endsWith(".com") ||
        user.email.endsWith(".net") ||
        user.email.endsWith(".edu"));
    const valid = validName && validSurname && validEmail;
    if (!valid) {
      alert("Please check your credentials!");
      return;
    }
    alert(`Hello ${user.name} ${user.surname}, your email is ${user.email}`);
    localStorage.setItem(`user${Date.now()}`, JSON.stringify(user));
  };

  return (
    <div>
      <label htmlFor="name">Ime</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={chageInputValue}
        value={user.name}
      />
      <label htmlFor="surname">Prezime</label>
      <input
        type="text"
        id="surname"
        name="surname"
        onChange={chageInputValue}
        value={user.surname}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={chageInputValue}
        value={user.email}
      />
      <button onClick={alertHello}>Submit</button>
    </div>
  );
};

export default Form;
