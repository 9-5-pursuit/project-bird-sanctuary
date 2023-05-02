import React, { useState } from "react";
import BirdCard from "../components/BirdCard";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddClick = (bird) => {
    console.log("Adding birdss to cart:", bird);
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { id: bird.id, name: bird.name, amount: bird.amount },
    ]);
  };

  const handleRemoveFromCart = (birdId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((bird) => bird.id !== birdId)
    );
  };

  const cartBirds = cartItems.map((bird) => (
    <BirdCard
      key={bird.id}
      bird={bird}
      onAddToCart={handleAddClick}
      onRemove={handleRemoveFromCart}
    />
  ));

  console.log("Cart birds:", cartBirds);

  const cartTotal = cartItems.reduce((total, bird) => total + bird.amount, 0);
  const discount = cartItems.length >= 3 ? 0.1 : 0;
  const discountedTotal = cartTotal - cartTotal * discount;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div>
        <h4>Discount: {discount * 100}%</h4>
        <h4>Total: ${discountedTotal.toFixed(2)}</h4>
        <ol>
          {cartBirds.map((bird) => (
            <li key={bird.props.bird.id}>{bird}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Cart;
