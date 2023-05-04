import React, { useState } from "react";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import BirdsCard from "./Components/BirdsCard";
import Cart from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const [checkout, setCheckout] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setCart([]);
    alert("You have adopted birds. Thank you!");
    reset();
  }

  function handleTextChange(event) {
    setCheckout({
      ...checkout,
      [event.target.id]: event.target.value,
    });
  }

  function handleAddAdoptCart(newBird) {
    // birdData.filter((bird) => bird.id === cart.id);

    setCart([...cart, newBird]);

    console.log(cart);
  }
  function reset() {
    setCart([]);
  }

  return (
    <div>
      <Cart cart={cart} />
      <BirdsCard birdData={birdData} handleAddAdoptCart={handleAddAdoptCart} />

      <Checkout
        handleSubmit={handleSubmit}
        handleTextChange={handleTextChange}
        checkout={checkout}
      />
    </div>
  );
}

export default App;
