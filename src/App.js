import React from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import handleAddBird from "./Components/BirdCard";
import "./App.css";

export default function App({ handleAddBird }) {
  // const [birdsCarted, setBirdsCarted] = useState([]);

  function reset() {
    setBirdsCarted([]);
  }

  function handleBirdAdopt(birdsCarted) {
    setBirdsCarted([...birdsCarted, bird]);
  }
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
        <div className="cart-layout">
          <Cart birdsCarted={birdsCarted} />
        </div>
        <div className="checkout-layout">
          <Checkout />
        </div>
      </footer>
    </body>
  );
}
console.log();
// "I was up all night trying to get this done. I can't even focus my eyes right now and it seems I'm only going backwards. I spent the last hour fixing one error after another and have now removed abunch of the stuff that was sort of working. Now I cna't even view my app.  It's time to throw in the towel.
