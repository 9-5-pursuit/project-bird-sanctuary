import React, { useState } from "react";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import CheckoutForm from "./Components/CheckoutForm";

function App() {
  const [birdCard, setBirdCard] = useState([]);

  return (
    <div>
      <BirdCards birdCard={birdCard} setBirdCard={setBirdCard} />
      <Cart />
      <CheckoutForm />
    </div>
  );
}

export default App;
