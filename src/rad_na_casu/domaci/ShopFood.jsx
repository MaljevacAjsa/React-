import { useState } from "react";
import "./ShopFood.css";

const ShopFood = () => {
  const foods = [
    { name: "Pizza", price: 5 },
    { name: "Burger", price: 6 },
    { name: "Pasta", price: 7 },
    { name: "Tortila", price: 5 },
    { name: "Chicken with Peanut Sauce", price: 5 },
    { name: "Breakfast Surprise", price: 6 },
    { name: "Rice", price: 3 },
    { name: "Dessert", price: 3 },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const handleCart = (food) => {
    setCart([...cart, food]);
    setTotal(total + food.price);
  };
  return (
    <div className="sub_container">
      {foods.map((food) => (
        <div className="card" key={food.name}>
          <h2>{food.name}</h2>
          <p>{food.price}$</p>
          <button
            onClick={() => {
              handleCart(food);
            }}
          >
            Add To Cart
          </button>
        </div>
      ))}
      <div>
        <h2>Total number of foods in cart: {cart.length}</h2>
        <p>Total price: {total}</p>
      </div>
    </div>
  );
};
export default ShopFood;
