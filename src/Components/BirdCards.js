import React from "react";
import birds from "../data/birds";

function BirdCards({ birdCard, setBirdCard }) {
  function displayBirdCard(bird) {
    setBirdCard([...birdCard, bird]);
  }

  return (
    <div className="birds">
      <ul className="eachCard">
        {birds.map((bird) => (
          <li key={bird.id} className="card">
            {bird.name}
            <br />$ {bird.amount}
            <br />
            <img src={bird.img} alt={bird.name} />
            <br />
            <button id="adoptButton" onClick={() => displayBirdCard(bird)}>
              Adopt
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BirdCards;
