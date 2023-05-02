import React, { useState } from "react";
import birdData from "./data/birds";
import BirdCard from "./components/BirdCard";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import "./App.css";

function App() {
  const [selectedBirds, setSelectedBirds] = useState([]);

  const handleAddClick = (bird) => {
    console.log("Adding bird to cart:", bird);
    setSelectedBirds((prevSelectedBirds) => [
      ...prevSelectedBirds,
      { id: bird.id, name: bird.name, amount: bird.amount },
    ]);
  };

  return (
    <div>
      <h1>Adopt A Bird Today!!!!!</h1>
      {birdData.map((bird) => (
        <BirdCard key={bird.id} bird={bird} onAddToCart={handleAddClick} />
      ))}
      <aside>
        <Cart selectedBirds={selectedBirds} />
        <CheckOut />
      </aside>
    </div>
  );
}

export default App;
