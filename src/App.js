import BirdCards from "./BirdCards";
import birdData from "./data/birds";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useState } from "react";

import "./App.css";

function App() {
  let [total, setTotal] = useState(0);
  const [birdsAdded, setBirdsAdded] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [bonus, setBonus] = useState([]);

  function handleCart(e) {
    setTotal((total += Number(e.target.value)));

    if (birdsAdded.length >= 2) {
      setDiscount(10);
    }

    setBirdsAdded((birdsAdded) => [
      e.target.name + ` $${e.target.value}.00`,
      ...birdsAdded,
    ]);

    console.log(birdsAdded);
  }

  return (
    <div className="App">
      <aside>
        <Cart
          total={total}
          birdsAdded={birdsAdded}
          birdData={birdData}
          discount={discount}
          setBirdsAdded={setBirdsAdded}
          bonus={bonus}
        />
      </aside>

      <aside>
        <Checkout
          setDiscount={setDiscount}
          setBirdsAdded={setBirdsAdded}
          setTotal={setTotal}
          setBonus={setBonus}
          birdsAdded={birdsAdded}
        />
      </aside>

      <main>
        <BirdCards
          birdData={birdData}
          handleCart={handleCart}
          setBirdsAdded={setBirdsAdded}
        />
      </main>
    </div>
  );
}

export default App;
