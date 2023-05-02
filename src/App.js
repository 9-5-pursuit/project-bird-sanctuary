import React, { useState } from "react";
//import birdData from "./data/birds.js";
import "./App.css";
import BirdCard from "./Components/BirdCard.js";
import Cart from "./Components/Cart.js";
import Checkout from "./Components/Checkout.js";

function App() {
  const [birdsAdopted, setBirdsAdopted] = useState([]);
  function handleBirdDelete(id) {
    const index = birdsAdopted.findIndex((bird) => bird.id === id);
    if (index !== -1) {
      const newBirdsAdopted = [...birdsAdopted];
      newBirdsAdopted.splice(index, 1);
      setBirdsAdopted(newBirdsAdopted);
    }
  }
  //console.log({ birdsAdopted, setBirdsAdopted });

  return (
    <div id="site-container">
      <div id="side-bar">
        <div id="cart">
          <Cart birdsAdopted={birdsAdopted} onDelete={handleBirdDelete} />
        </div>
        <div id="checkout">
          <Checkout />
        </div>
      </div>
      <div id="cards">
        <BirdCard onAdoptClick={setBirdsAdopted} />
      </div>
    </div>
  );
}

export default App;
