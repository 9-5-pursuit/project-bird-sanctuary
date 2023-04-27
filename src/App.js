import React from "react";

import birdData from "./data/birds";
import { useState } from "react";
import PageForCards from ".Components/PageForBirdCards";

function App() {
  return (
    <div>
      <Cart cart={cart} setcart={setcart} />
      <PageForBirdCards birds={birdData} setCart={setCart} cart={cart} />
    </div>
  );
}

export default App;
