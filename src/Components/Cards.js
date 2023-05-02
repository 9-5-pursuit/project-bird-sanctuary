// import react from "react";


export default function Cards({ bird, addToCart }) {
  return (
    <li className="card" id="{key}">
      <p>{bird.name}</p>
      <img src={bird.img} alt={bird.name} />
      <p>Price:{bird.amount}</p>
      <button
        onClick={() => {
          addToCart(bird);
        }}
      >
        Adopt
      </button>
    </li>
  );
}
