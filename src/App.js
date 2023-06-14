import React, { useState } from "react";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import BirdsCard from "./Components/BirdsCard";
import Cart from "./Components/Cart";

import "./App.css";

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

  function handleAddAdoptCart(bird) {
    setCart([...cart, bird]);

    console.log(cart);
  }

  function handleRemoveFromCart(birdId) {
    setCart(cart.filter((bird) => bird.id !== birdId));
  }

  function reset() {
    setCart([]);
    setCheckout({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  }

  return (
    <div className="App">
      <aside>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
        <Checkout
          handleSubmit={handleSubmit}
          handleTextChange={handleTextChange}
          checkout={checkout}
        />
      </aside>

      <main>
        <BirdsCard
          birdData={birdData}
          handleAddAdoptCart={handleAddAdoptCart}
        />
      </main>
    </div>
  );
}

export default App;
