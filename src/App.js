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
     <div className="container">
      <aside className="sidebar">
       <div className="cart-container">
       <Cart
         cart={cart}
         birdData={birdData}
         bonusItems={bonusItems}
         deleteFromCart={deleteFromCart}
       />
       </div>
       <div className="checkout-container">
       {/* Pass setCart helper function to Checkout component so it can reset the cart after closing alert */}
       <Checkout setCart={setCart} />
       </div>
       </aside>
       <div className="bird-container">
         {birdData.map((bird) => {
           return <Birds key={bird.id} bird={bird} addToCart={addToCart} />;
         })}
         </div>
     </div>
   );
};

export default App;
