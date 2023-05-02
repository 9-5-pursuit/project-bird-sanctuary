import React from "react";

export default function BirdCard({ birdData, addToCart }) {
  const newData = birdData.map((i) => {
    return (
      <div key={i.id} className="card">
        <li>
          <h4>{i.name}</h4>
          <p> Amount: {i.amount}</p>

          <img src={i.img} alt={i.name} />

          <button onClick={() => addToCart(i)}>Adopt me</button>
        </li>
      </div>
    );
  });

  return <ul className="card-container">{newData}</ul>;
}
