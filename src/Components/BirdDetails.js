import { useState } from "react";

export default function BirdDetails({ bird }) {
  return (
        <div className="card">
          <p>{bird.name}</p>
          <p>Price ${bird.amount}</p>
          <img
            style={{ height: "200px", width: "200px" }}
            src={bird.img}
            alt={bird.name}
          />
          <div>
            <button>Adopt</button>
          </div>
        </div>
  );
}


