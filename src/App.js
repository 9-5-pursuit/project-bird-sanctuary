import React, { useState } from "react";
import BirdCards from "./components/BirdCards";
import Checkout from "./components/Checkout";

const [info, setInfo] = useState("");
// setInfo("goodbye");

function App() {
  return (
    <div>
      <h1>Bird Sanctuary</h1>
      <BirdCards />
      <Checkout />
    </div>
  );
}

export default App;
