import { useState } from "react";
import "../cart.css";
import birdsCarted from "../App.js";

function discountPercent() {
  if (birdsCarted.length > 2) {
    return 10;
  } else {
    return 0;
  }
}
let subTotal = 0;

const cartTotal = subTotal - (subTotal / 100) * discountPercent;

function Cart({ setAddBird }) {
  function handleAddBird(event) {
    event.preventDefault();
    setAddBird([]);
  }

  return (
    <>
      <div className="cart">
        <h4>Cart</h4>
      </div>
      <div className="discount-total">
        <p className="increase">Discount: {discountPercent}%</p>
        <p className="increase">Total: ${cartTotal}</p>
      </div>
      <ol></ol>
    </>
  );
}

export default Cart;
