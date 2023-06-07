import React, { useState } from "react";
import Cart from "./Components/Cart";
import CheckOutForm from "./Components/CheckOutForm";
import BirdsContainer from "./Components/BirdsContainer";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddBird(bird) {
    setCartItems([...cartItems, bird]);
  }

  function removeFromCart(index) {
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
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        <CheckOutForm reset={reset} />
      </aside>
      <main>
        <BirdsContainer handleAddBird={handleAddBird} />
      </main>
    </div>
  );
}

export default App;
