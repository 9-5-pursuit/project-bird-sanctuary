import React, { useState } from "react";
import birdData from "../data/birds";

function Cart({ adopted }) {
  const discountCalc = () => {
    if (adopted.length >= 3) {
      return 10;
    } else {
      return 0;
    }
  };

  let total = 0;

  for (let ele of birdData) {
    total += ele.amount;
  }
  if (birdData.length >= 3) {
    let discount = total * 0.1;
    total = total - discount;
  }

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <h4>Discount: {discountCalc()}%</h4>
      <h4>Total: {total}</h4>
    </div>
  );
}

export default Cart;
