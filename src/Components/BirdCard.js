import React from "react";
import { useState } from "react";
import "../birdCard.css";

function BirdCard({ bird, handleAddBird }) {
  const { name, amount, img } = bird;
  return (
    <>
      <div className="card" key={bird.id}>
        <h5>{name}</h5>
        <p>Price: ${amount}</p>
        <img src={img} alt={name} width="100" height="100" className="image" />
        <br />
        <button onClick={() => handleAddBird(bird)}>ADOPT</button>
      </div>
    </>
  );
}

// export { handleAddBird };
export default BirdCard;
