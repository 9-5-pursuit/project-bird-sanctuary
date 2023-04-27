import { useEffect, useState } from "react";
import Bonus from "./Bonus";

const Cart = ({ cart, setCart }) => {
  // Calculate the total amount in the chart using the reduce method
  const total = cart.reduce((a, item) => a + item.amount, 0);

  // Remove an item from the cart by filtering the cart state
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Render the Cart component with the list of items in the cart, the total amount, and the bonus items
  // and a button to remove an item from the cart
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
