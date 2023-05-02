import React, { useState } from "react";
import BirdCards from "./BirdCards";
import Cart from "./Cart";
import Checkout from "./Checkout";
import birdData from "./data/birds";

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  function onCheckout() {
    setItems([]);
    setTotal(0);
  }

  function addToCart(bird) {
    setItems([...items, bird]);
    setTotal(total + bird.amount);
  }

  return (
    <div className="App">
      <BirdCards birdData={birdData} addToCart={addToCart} />
      <div className="cart-container">
        <Cart
          items={items}
          setItems={setItems}
          total={total}
          setTotal={setTotal}
        />
      </div>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <Checkout items={items} onCheckout={onCheckout} />
      </div>
    </div>
  );
}

export default App;
