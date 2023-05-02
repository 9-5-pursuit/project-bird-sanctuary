import React from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import handleAddBird from "./Components/BirdCard";
import "./App.css";

function App() {
  return (
    <body>
      <main>
        <div className="bird-layout">
          {birdData.map((item) => {
            return <BirdCard bird={item} handleAddBird={handleAddBird} />;
          })}
        </div>
      </main>
      <footer>
        <div className="cart">
          <Cart />
        </div>
        <div className="checkout">
          <Checkout />
        </div>
      </footer>
    </body>
  );
}

export default App;
