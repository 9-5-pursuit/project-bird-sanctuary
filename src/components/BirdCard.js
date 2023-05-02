import React from "react";

function BirdCard({ bird, onAddToCart, onRemove }) {
  const handleAddClick = () => {
    console.log("Clicked on Add button", bird);
    if (onAddToCart) {
      onAddToCart({ id: bird.id, name: bird.name, amount: bird.amount });
    }
  };

  const handleRemoveClick = () => {
    if (onRemove) {
      onRemove(bird.id);
    }
  };

  return (
    <div className="card">
      <div key={bird.id}>
        <h2>{bird.name}</h2>
        <img src={bird.img} alt={bird.name} />
        <p>Price: {`$${bird.amount}`}</p>
        {onAddToCart && <button onClick={handleAddClick}>Adopt</button>}
        {onRemove && <button onClick={handleRemoveClick}>Remove</button>}
      </div>
    </div>
  );
}

export default BirdCard;
