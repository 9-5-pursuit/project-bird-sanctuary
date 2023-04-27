import { useState } from "react";
import birdData from "./data/birds";
import Bird from "./components/Bird";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (bird) => {
    bird = { ...bird, id: Math.random() };
    setCart((prev) => [...prev, bird]);
  };

  return (
    <div className="app">
      <h1>Bird Sanctuary Project</h1>
      <div className="grid">
        <div className="side-bar">
          <Cart cart={cart} setCart={setCart} />
          <Checkout setCart={setCart} />
        </div>
        <div className="cards">
          {birdData.map((bird) => (
            <Bird bird={bird} key={bird.id} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
