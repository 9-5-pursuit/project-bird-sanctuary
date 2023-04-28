import React from "react";
import bonusItems from "../data/bonusItems";
import { useState } from "react";

export default function Cart({ adoptBirds, handleRemoveBird }) {
  let totalprice = 0;
  adoptBirds.forEach((bird) => {
    totalprice += bird.amount;
  });
  //   console.log(totalprice);

  let bonus = [];
  if (totalprice >= 100 && totalprice < 300) bonus = bonusItems.slice(0, 1);
  if (totalprice >= 300 && totalprice < 500) bonus = bonusItems.slice(0, 2);
  if (totalprice >= 500 && totalprice < 1000) bonus = bonusItems.slice(0, 3);
  if (totalprice >= 1000) bonus = bonusItems.slice();
  //   console.log(bonus);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h5>Discount: {adoptBirds.length >= 3 ? 10 : 0}%</h5>
      <h4>Total: ${totalprice}</h4>
      <ol>
        {adoptBirds.map((bird, index) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button
                onClick={() => {
                  handleRemoveBird(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
      <p>Your donation has qualified you for the following items:</p>
      <ul className="bonuses">
        {bonus.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
