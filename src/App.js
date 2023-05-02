import birdData from "./data/birds";
//import bonusItems from "./data/bonusItems";
import React, { useState } from "react";
import Birds from "./Components/Birds";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  
  function addToCart(bird) {
    setCart([...cart, bird]);
  }
  return (
    <div>
      <h1>Bird Sanctuary</h1>
      <div className="card birds">
        <ul>
          {birdData.map((bird) => {
            return <Birds key={bird.id} bird={bird} addToCart={addToCart} />;
          })}
        </ul>
      </div>
      <div className="Cart">
        <Cart cart={cart} setCart={setCart} />
      </div>
      <div className="Checkout">
        <Checkout  setCart={setCart}/>
      </div>
    </div>
  );
}

export default App;

/**
   


<div className="Cards">
<h3>Bird Name<h3/>
<img/>
<p>Amount<p/>
<button>Adopt<button/>
<div/>

<div className="Cart">
<h2>Cart<h2/>
<h4>Discount:0% or 10%<h4/> // (> 3) = 0% (=<3) = 10%
<h4>Total: $0<h4/>
<ol>
<li>
Bird adoption info
<li/>
<ol/>
<p><p/>
<ul>
<li><li/> 1 bonus bonusItems[0] 100-299
<li><li/> 2 bonus bonusItems[1] 300-499
<li><li/> 3 bonus bonusItems[2] 500- 999
<li><li/> 4 bonus bonusItems[3] 1000+



<ul/>
<div/>


<div className="Checkout">
<h2> Checkout <h2/>
<form>
<label>
<input><input/>

<label>
<input><input/>

<label>
<input><input/>

<label>
<input><input/>

<button>Submit<button/> or <input>
// You have adopted birds.Thank you! Alert
// ^^
<form/>

<div/>


*/
