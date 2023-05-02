import react from "react";

export default function BirdCards({ handleAdoptedBird, bird, key }) {
  return (
    <li className="card" id={key}>
      <h4>{bird.name}</h4>
      <h4>{bird.amount}</h4>
      <img src={bird.img} alt={bird.name} />
      <button onClick={() => handleAdoptedBird(bird)}>ADOPT</button>
    </li>
  );
}
