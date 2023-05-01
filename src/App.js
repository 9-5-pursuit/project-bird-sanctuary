import { useState } from "react";
import birdData from "./data/birds.js";
import BirdDetails from "./Components/BirdDetails.js";
import bonusItems from "./data/bonusItems.js";
import Cart from "./Components/Cart";
// import Checkout from "./Components/Checkout";

function App () {
  const [cart, setCart] = useState([]);

  const addToCart = (bird) => {
    setCart([...cart, bird]);
  };

   return (
     <div>
       <Cart cart={cart} birdData={birdData} bonusItems={bonusItems} />
       <ul>
         {birdData.map((bird) => {
           return (
             <BirdDetails key={bird.id} bird={bird} addToCart={addToCart} />
           );
         })}
       </ul>
     </div>
   );
};

export default App;
