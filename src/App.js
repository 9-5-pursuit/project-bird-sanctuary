import React, { useState } from "react";
import birdData from "./data/birds";
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  // const [info, setInfo] = useState({
  //   name: "",
  //   amount: "",
  //   img: "",
  // });

  const [info, setInfo] = useState(birdData);

  // to get the information from the data
  // function card(info) {
  //   info.map(
  //     ({ name, amount, img }) => console.log(name, amount, img)
  //   );
  // }

  return (
    <div>
      <h1>Bird Sanctuary</h1>
      <BirdCards info={info} />
      <Checkout />
    </div>
  );
}

export default App;
