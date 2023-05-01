import { useState } from "react";
import birdData from "./data/birds.js";
import Birds from "./Components/Birds.js";
import bonusItems from "./data/bonusItems.js";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App () {
  const [cart, setCart] = useState([]);

  const addToCart = (bird) => {
    setCart([...cart, bird]);
  };

  const deleteFromCart = (index, item) => {
    setCart(
      cart.filter((cartItem, i) => i !== index || cartItem.id !== item.id)
    );
  };

   return (
     <div>
       <Cart
         cart={cart}
         birdData={birdData}
         bonusItems={bonusItems}
         deleteFromCart={deleteFromCart}
       />
       {/* Pass setCart helper function to Checkout component so it can reset the cart after closing alert */}
       <Checkout setCart={setCart} />
       <ul>
         {birdData.map((bird) => {
           return <Birds key={bird.id} bird={bird} addToCart={addToCart} />;
         })}
       </ul>
     </div>
   );
};

export default App;
