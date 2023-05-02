import React from "react";
import birdData from "../data/birds";

function BirdCard(props) {
  return (
    <>
      <div className="birds">
        <h1>Birds</h1>
        {/* map -> loop through the array to get indv bird */}
        {birdData.map((bird) => (
          <div className="card" key={bird.id}>
            <img src={bird.img} alt={bird.name} />
            <h2>{bird.name}</h2>
            <p>Amount: {bird.amount}</p>
            <button
              className="birds button"
              onClick={() => {
                props.onAdoptClick((prevState) => {
                  return [...prevState, bird];
                });
              }}
            >
              Adopt
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BirdCard;
