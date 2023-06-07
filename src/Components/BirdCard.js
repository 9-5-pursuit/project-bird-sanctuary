import React, { useState } from "react";

function BirdCard({ bird, handleAddToCart }) {
  return (
    <div className="card bird-card">
      <h2>{bird.name}</h2>
      <p>Price: ${bird.amount}</p>

      <img src={bird.img} alt="bird" width="200" height="200" />
      <br />
      <button onClick={() => handleAddToCart(bird)}>Adopt</button>
    </div>
  );
}

export default BirdCard;
