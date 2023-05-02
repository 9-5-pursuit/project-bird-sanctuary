import React, { useState } from "react";

import Checkout from "./Components/Checkout.js";


import Cart from "./Components/Cart.js";

import BirdsCart from "./Components/BirdsCart.js";
import birdData from "./data/birds.js";
import { v1 as generateUniqueID } from "uuid";


function App() {
  const [item, setItem] = useState([]);

  function addToCart(e) {
    let bird = { ...e, id: generateUniqueID() };
    
    setItem([...item, bird]);
    
  }

  return (
    <div className="app">
      <main>
        <Cart item={item} setItem={setItem} />
        <div className="cards">
          <ul className="birds">
            {" "}
            {birdData.map((bird) => (
              <BirdsCart bird={bird} addToCart={addToCart} key={bird.id} />
            ))}
          </ul>
        </div>
        <Checkout setItem={setItem}/>
      </main>
    </div>
  );
}

export default App;
