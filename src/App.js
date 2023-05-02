import React, { useState } from "react";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import BirdCards from "./Components/BirdCards";
import Checkout from "./Components/Checkout";

function App() {
  console.log("Birds data", birdData);

  const [birds, setBirds] = useState(birdData);
  const [cartItems, setCartItems] = useState(null);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < birdData.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };


  function adoptABird(birdId) {
    setBirds(birdData);
    console.log(birds);

    console.log("I am adopting a" + birds.name);
  }

  function handleTextChange(e) {
    e.preventDefault();
    console.log("id: ", e.target.value);
  }

  function handleSubmit(e) {
    alert("You have adopted birds. Thank you!");
    console.log(e.target.name);
  }

  return (
    <>
      <div>
        <h1>Bird Sanctuary</h1>
      </div>
      {/*Cart*/}
      <div className="Cart">
        <h2>Cart</h2>
        <h4>Discount</h4>
        <h4>Total:</h4>
        <ol>
          <li>{birds.name}</li>
          <li>{birds.amount}</li>
          <button>delete</button>
        </ol>
      </div>

      {/*Checkout*/}

      <div className="App">
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <lebel>First Name</lebel>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleTextChange}
          />
          <br />
          <lebel>Last Name</lebel>
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleTextChange}
          />
          <br />
          <lebel>Email</lebel>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleTextChange}
          />
          <br />
          <lebel>Zip Code</lebel>
          <br />
          <input
            type="number"
            id="zip"
            name="zip"
            value={user.zip}
            onChange={handleTextChange}
          />
          <br /> <br />
          <button>Submit</button>
        </form>

        <div className=".card">
          <section>
            <main>
              <ul>
                {birds.map((bird) => {
                  return (
                    <li key={bird.id}>
                      <h3>{bird.name}</h3>
                      <h5>${bird.amount}</h5>
                      <img src={bird.img} alt="bird" width="150" height="150" />
                      <br />
                      <button onClick={() => adoptABird(bird.id)}>ADOPT</button>
                    </li>
                  );
                })}
              </ul>
            </main>
          </section>
        </div>
        

        <Cart />
        <BirdCards />
        <Checkout />
      </div>
    </>
  );
}

export default App;









