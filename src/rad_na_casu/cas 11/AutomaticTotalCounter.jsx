import { useState, useEffect } from "react";

const AutomaticTotalCounter = () => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    if (price || quantity < 0) {
      return;
    }
    setTotal(price * quantity);
  }, [price, quantity]);

  return (
    <div>
      <input
        onChange={(e) => setPrice(Number(e.target.value))}
        value={price}
        type="number"
        placeholder="Price"
      />
      <input
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
        type="number"
        placeholder="Quantity"
      />
      {/* komentar se ovako koristi u html delu*/}
      <h2>Total price: {total}</h2>
    </div>
  );
};
export default AutomaticTotalCounter;
