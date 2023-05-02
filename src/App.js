import Cart from "./Cart";
import React, { useState } from "react";
import birdData from "./data/birds";
import BirdCard from "./data/birdCard";
import Checkout from "./Checkout";

function App() {
  const [selectedBirds, setSelectedBirds] = useState([]);

  const addToCart = (bird) => {
    setSelectedBirds([...selectedBirds, bird]);
  };
  const removeFromCart = (bird) => {
    const updatedBirds = selectedBirds.filter((b) => b.id !== bird.id);
    setSelectedBirds(updatedBirds);
  };

  const calculateDiscount = () => {
    return selectedBirds.length >= 3 ? 0.1 : 0;
  };

  const calculateTotal = () => {
    const prices = selectedBirds.map((bird) => bird.amount);
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    const discount = calculateDiscount();
    return (1 - discount) * total;
  };

  const handlePurchase = () => {
    setSelectedBirds([]);
  };

  return (
    <div className="grid-container">
      <div className="aside">
        <Cart
          selectedBirds={selectedBirds}
          removeFromCart={removeFromCart}
          calculateDiscount={calculateDiscount}
          calculateTotal={calculateTotal}
        />
        <br />
        <Checkout onPurchase={handlePurchase} />
      </div>
      <div>
        <BirdCard birdData={birdData} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
