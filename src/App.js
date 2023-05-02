import React, { useState } from "react";
import Cards from "./Components/Cards.js";
import Checkout from "./Components/Checkout.js";
import Cart from "./Components/Cart.js";
import birdData from "./data/birds.js";
import { v1 as generateUniqueID } from "uuid";

function App() {
  const [item, setItem] = useState([]);

  function addToCart(e) {
    let bird = { ...e, id: generateUniqueID() };
    //console.log(bird);
    setItem([...item, bird]);
    //console.log(item)
  }

  return (
    <div className="app">
      <main>
        <Cart item={item} setItem={setItem} />
        <div className="cards">
          <ul className="birds">
            {" "}
            {birdData.map((bird) => (
              <Cards bird={bird} addToCart={addToCart} key={bird.id} />
            ))}
          </ul>
        </div>
        <Checkout setItem={setItem} />
      </main>
    </div>
  );
}

export default App;
