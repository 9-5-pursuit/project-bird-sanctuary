import { useState } from "react";

export default function Cart({ cart }) {
  return (
      <div className="Cart">
        <p>Cart</p>
        <p>Discount</p>
        <p>Total</p>
        <ol>
            {cart.map((item) => (
          <li key={item.id}>{item.name} ${item.amount}</li>
            ))}
        </ol>
      </div>
  );
}
