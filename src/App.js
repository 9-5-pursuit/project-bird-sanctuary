import { useState } from "react";
import birdData from "./data/birds.js";
import BirdDetails from "./Components/BirdDetails.js";

// import Cart from "./Components/Cart";
// import Checkout from "./Components/Checkout";

function App () {
  const [birds, setBirds] = useState(birdData);

  return (
    <div>
    <ul>
      {birds.map((bird) => {
         return (
          <BirdDetails
            key={bird.id}
            bird={bird}
          />
        );
      })}
    </ul>
    </div>
  );
};

export default App;
