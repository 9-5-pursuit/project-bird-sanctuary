import React, { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Components/Cart";
import BirdCards from "./Components/BirdCards";
import Checkout from "./Components/Checkout";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [bonus, setBonus] = useState([]);
  const [total, setTotal] = useState(0);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  function adoptABird(birdId, birdName, birdAmount) {
    console.log(birdId, birdName, birdAmount);
    const index = birdData.findIndex((birds) => birdId === birds.id);
    setCartItems([...cartItems, { birdName }]);

    console.log(cartItems.length + 1);
    if (cartItems.length + 1 <= 2) {
      console.log(cartItems.length);

      setTotal(total + birds[index].amount);
    } else {
      setDiscount(10);
      setTotal((total + birds[index].amount) * 0.9);
    }
    console.log(total);
    if (total >= 100 && total < 300) {
      setBonus(bonusItems[0]);
      console.log(bonus);
    }
    if (total >= 300 && total < 500) {
      setBonus(...bonus, bonusItems[1]);
      console.log(bonus);
    }
  }

  function handleTextChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(user);
  //   setUser(user);
  // }

  function handleAlert(e) {
    alert("You have adopted birds. Thank you!");
  }

  function reset(e) {}

  function handleDeletBird(e) {
    console.log("Delete a Bird");
  }

  return (
    <>
      <div>
        <h1>Bird Sanctuary</h1>
      </div>
      {/* // -------- Cart -------- \\ */}
      <div className="Cart">
        <h2>Cart</h2>
        <h4>Discount: {discount}%</h4>
        <h4>Total: ${total}</h4>
        <ol>
          <li></li>
          <li></li>
          <button onClick={() => handleDeletBird()}>delete</button>
        </ol>
        <ul>
          <li>{bonus}</li>
          <li></li>
        </ul>
      </div>

      {/* // ----- Checkout --------- \\ */}

      <div className="App">
        <form onSubmit={handleAlert}>
          {!handleAlert && reset()}
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
          <br />
          <br />
          <button> Submit </button>
        </form>

        {/* // ------- Bird Card ------ \\ */}

        {/* */}
        <div className=".card">
          <section>
            <main>
              <ul>
                {birds.map((bird) => {
                  return (
                    <li key={bird.id}>
                      <h3>{bird.name}</h3>
                      <h5>${bird.amount}</h5>
                      <p></p>
                      <img src={bird.img} alt="bird" width="150" height="150" />
                      <br />
                      <button
                        onClick={() =>
                          adoptABird(bird.id, bird.name, bird.amount)
                        }
                      >
                        ADOPT
                      </button>
                    </li>
                  );
                })}
              </ul>
            </main>
          </section>
        </div>
        {/*  */}

        <Cart />
        <BirdCards />
        <Checkout />
      </div>
    </>
  );
}

export default App;
