import { useEffect, useState } from "react";
import Bonus from "./Bonus";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((a, item) => a + item.amount, 0);

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="Cart">
      <h3>Cart</h3>
      <h3>Discount: {cart.length >= 3 ? 10 : 0}%</h3>
      <h4>Total: ${total} </h4>

      <ol>
        {cart.map(({ id, name, amount }) => (
          <li key={id}>
            {name}: ${amount}
            <button onClick={() => removeItem(id)}>
              <span className="x">X</span>
            </button>
          </li>
        ))}
      </ol>

      <p>You donation has qualified you for the following items:</p>
      <ul>
        <Bonus total={total} />
      </ul>
    </div>
  );
};

export default Cart;
