import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "Ajsa",
    age: 20,
  });
  const incrementAge = () => {
    setUser((prevValue) => ({
      ...prevValue,
      age: prevValue.age + 1,
    }));
  };
  const decrementAge = () => {
    setUser((prevValue) => ({
      ...prevValue,
      age: prevValue.age - 1,
    }));
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={incrementAge}>Increment age</button>
      <button onClick={decrementAge}>Decrement age</button>
    </div>
  );
}

export default User;
