import React, { useState } from "react";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import CheckoutForm from "./Components/CheckoutForm";

function App() {
  const [birdCard, setBirdCard] = useState([]);
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <BirdCards birdCard={birdCard} setBirdCard={setBirdCard} />
      <Cart birdCard={birdCard} setBirdCard={setBirdCard} />
      <CheckoutForm userInput={userInput} setUserInput={setUserInput} />
    </div>
  );
}

export default App;
