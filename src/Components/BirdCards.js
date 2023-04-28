import React from "react";

export default function BirdCards({ bird, handleBirdAdopt, key }) {
  //   const [birds, setBirds] = useState(birdData);
  return (
    <li className="card" key={bird.id}>
      <h4>{bird.name}</h4>
      <h5>Price: ${bird.amount}</h5>

      <img src={bird.img} alt={bird.name} />
      <br />
      <button
        className="adoptbutton"
        onClick={() => {
          handleBirdAdopt(bird);
        }}
      >
        ADOPT
      </button>
    </li>
  );
}
