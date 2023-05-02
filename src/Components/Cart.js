import { useState } from "react";
import bonusItems from "../data/bonusItems";

export default function Cart({ cart, setCart }) {
  //const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  let total = cart.reduce((a, item) => a + item.amount, 0);
  function handleDiscount() {
    if (cart.length >= 3) {
      setDiscount(10);
    }
    total -= (total / discount) * 0.01;
  }

  function removeItem(id) {
    setCart((cart) => cart.filter((item) => item.id !== id));
  }
  //let total = Number(cart.reduce((a, item) => a + item.amount, 0));

  //   let price = cart.filter((item) => item.amount);
  //   console.log(price);
  //let newTotal = price.reduce((a, b) => a + b, 0);
  // setTotal(newTotal)
  return (
    <>
      <h2>Cart</h2>
      <h4>Discount: {cart.length >= 3 ? 10 : 0}%</h4>
      <h4 onChange={handleDiscount}>Total: ${total}</h4>
      <ol>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}, ${item.amount}{" "}
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </li>
        ))}
      </ol>
      <p>Your donation has qualified you for the following items:</p>
      <ul className="Bonus">
        {total <= 299 && cart.length >= 1 && <li>{bonusItems[0]}</li>} 
      </ul>
    </>
  );
}
