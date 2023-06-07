import React from "react";
 
export default function BirdCard({handleAddBird, bird}) {
  return (
          <div className="card bird-card">
            <p>{bird.name}</p>
            <br />
            <p>Price ${bird.amount}</p>
            <img src={bird.img} alt={bird.name} />
            <br />
          
              <button onClick={() => handleAddBird(bird) }>Adopt</button>
          </div>
  );
}

