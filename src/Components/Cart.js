// import react from "react";
// import React, { useState } from "react";
import bonusItems from "../data/bonusItems";

function Cart({ item, setItem }) {
  function removeFromCart(e) {
    setItem((item) => item.filter((element) => element.id !== e));
  }

  let total = 0;
  item.map((item) => (total += item.amount));

  //let discount = 0;

  let bonus = [];
  if (total >= 100 && total < 300) bonus = bonusItems.slice(0, 1);
  if (total >= 300 && total < 500) bonus = bonusItems.slice(0, 2);
  if (total >= 500 && total < 1000) bonus = bonusItems.slice(0, 3);
  if (total >= 1000) bonus = bonusItems.slice();

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ol>
        {item.map((e) => {
          return (
            <li key={e.id}>
              {e.name}:${e.amount}
              <button
                onClick={() => {
                  removeFromCart(e.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ol>
      <h4>Total: ${total} </h4>
      Discount: {item.length < 3 ? 0 : 10}%
      <p>Your donation has qualified you for the following items:</p>
      <ul className="bonuses">
        {bonus.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Cart;
