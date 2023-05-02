import { useState } from "react";

function discountPercent() {
  let birdsCarted = [];
  if (birdsCarted.length > 2) {
    return 10;
  } else {
    return 0;
  }
}
let subTotal = 0;
let cart = 0;
const cartTotal = subTotal - (subTotal / 100) * discountPercent;

function Cart() {
  console.log("sorry, I ran out of time");
  return (
    <>
      <div className="cart">
        <h4>Cart</h4>
      </div>
      <h4>Discount: {discountPercent}%</h4>
      <h4>Total: ${cartTotal}</h4>
      <ol></ol>
    </>
  );
}

export default Cart;
