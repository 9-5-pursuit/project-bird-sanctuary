import React, { useState } from "react";
import BirdsContainer from "./Components/BirdsContainer";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(bird) {
    setCartItems([...cartItems, bird]);
  }

  function handleRemoveFromCart(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }

  function reset() {
    setCartItems([]);
  }

  return (
    <div className="container">
      <aside>
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
        />
        <Checkout reset={reset} />
      </aside>
      <main>
        <BirdsContainer handleAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}
export default App;
