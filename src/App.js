import { useState } from "react";
import birdData from "./data/birds"; // Importing bird Data from components
import Bird from "./components/Bird"; // Importing Bird component
import "./App.css";
import Cart from "./components/Cart"; // Importing Cart component
import Checkout from "./components/Checkout"; // Importing Checkout component

function App() {
  const [cart, setCart] = useState([]); //Setting a state variable for the cart and function to update the cart
  const addToCart = (bird) => {
    // Function to add bird to cart
    bird = { ...bird, id: Math.random() }; // Creating a new object with a random id
    setCart((prev) => [...prev, bird]); // Updating the cart with the new bird
  };

  return (
    <div className="app">
      <h1>Bird Sanctuary Project</h1>
      <div className="grid">
        <div className="side-bar">
          <Cart cart={cart} setCart={setCart} />{" "}
          {/* Passing cart and setCart as props to Cart component */}
          <Checkout setCart={setCart} />{" "}
          {/* Passing setCart as props to Checkout component */}
        </div>
        <div className="cards">
          {birdData.map(
            (
              bird // Mapping through the birdData array and passing each bird as props to Bird component
            ) => (
              <Bird bird={bird} key={bird.id} addToCart={addToCart} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
