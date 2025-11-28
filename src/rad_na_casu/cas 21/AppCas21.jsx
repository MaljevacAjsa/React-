import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("button rendered");
  return <button onClick={onClick}>Click</button>;
}); // React.memo //React uzme komponentu button i cuva je i pamti, i sve dok se props ne promeni ne renedera ponovo // ako nema props ne rendera se nista opet jer nema sta da se menja




const Parent = () => {
  console.log("Parent rendered");
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => console.log("klik"), []);
  
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Button onClick={handleClick} />
    </div>
  );
};

export default Parent;
