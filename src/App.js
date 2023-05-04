import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import React, { useState } from "react";
import BirdCards from "./Components/BirdCards";
console.log(birdData);

function App() {
  const [bird, setBird] = (useState = birdData);
  return (
    <div>
      <aside>
        {/* {Cart} */}
        <Cart />
        {/* {Checkout} */}
        <Checkout />
      </aside>
      <BirdCards bird={bird} />
      <main>{/* {BirdSelection} */}</main>
    </div>
  );
}

export default App;
