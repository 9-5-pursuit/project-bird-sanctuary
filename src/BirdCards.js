import React from "react";

function BirdInfo(props) {
  const { img, name, amount } = props.bird;
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>Amount: ${amount}</p>
      <button
        className="birds button"
        onClick={() => props.onAddToCart(props.bird)}
      >
        Adopt
      </button>
    </div>
  );
}

function BirdCards(props) {
  function handleAddToCart(bird) {
    props.addToCart(bird);
  }

  return (
    <div>
      <div className="card-container">
        {props.birdData.map((bird) => (
          <BirdInfo key={bird.id} bird={bird} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default BirdCards;
