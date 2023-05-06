// import birdData from "./data/birds";
// // import bonusItems from "./data/bonusItems";
// import Cart from "./Components/Cart";
// import Checkout from "./Components/Checkout";
// import React, { useState } from "react";
// import BirdCards from "./Components/BirdCards";
// console.log(birdData);

// function App() {
//   const [bird, setBird] = (useState = birdData);
//   return (
//     <div>
//       <aside>
//         {/* {Cart} */}
//         <Cart />
//         {/* {Checkout} */}
//         <Checkout />
//       </aside>
//       <BirdCards bird={bird} />
//       <main>{/* {BirdSelection} */}</main>

//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Cart from "./components/Cart";
// import Checkout from "../components/Checkout";
// import BirdsContainer from "./components/BirdsContainer";

// import "./App.css";

// // App component
// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   function handleAddToCart(bird) {
//     setCartItems([...cartItems, bird]);
//   }

//   function handleRemoveFromCart(index) {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems.splice(index, 1);
//     setCartItems(updatedCartItems);
//   }

//   function reset() {
//     setCartItems([]);
//   }

//   return (
//     <div className="container">
//       <aside>
//         <Cart
//           cartItems={cartItems}
//           handleRemoveFromCart={handleRemoveFromCart}
//         />
//         <Checkout reset={reset} />
//       </aside>
//       <main>
//         <BirdsContainer handleAddToCart={handleAddToCart} />
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Cards from "./Components/Card";
import birdData from "./data/birds";




// console.log(birdData)

function App() {

  const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);

  const handleCart = (bird) => {
    if (cart.includes(bird)) {
      alert("You have already added this bird to the cart");
      return;
    }
    setCart([...cart, bird]);
  };

  return (
    <div>
      <aside>
        <Cart birds={birds} cart={cart} setCart={setCart} />
        <Checkout setCart={setCart} />
      </aside>
      <main>
        <Cards birds={birds} cart={cart} handleCart={handleCart} />
      </main>
    </div>
  );
}

export default App;
