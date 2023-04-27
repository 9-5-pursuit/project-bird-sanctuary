import React from "react";

import "../App.css";

const BirdCard = ({ name, amount, img, setCart, cart }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>Price: ${amount}</h4>
      <img src={img} alt="" width="200" height="200" />
      <button
        className="birds"
        onClick={() => setCart([...cart, { name, amount }])}
      >
        Adopt
      </button>
    </div>
  );
};
