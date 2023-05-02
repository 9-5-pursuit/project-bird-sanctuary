import React from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import handleBirdData from "./Components/BirdCard";
// const listItems = birdData.map(birdData =>
//   return (
//     <birdDataItem
//     name={birdData.name}
//     amount={birdData.amount}
//     }
//   )

function App() {
  return (
    <div>
      <div>
        <Cart />
      </div>
      <div className="birdCard">
        <ul>
          {birdData.map((item) => {
            return <BirdCard birdData={item} handleBirdData={handleBirdData} />;
          })}
        </ul>
      </div>
      <div>
        <Checkout />
      </div>
    </div>
  );
}

export default App;
