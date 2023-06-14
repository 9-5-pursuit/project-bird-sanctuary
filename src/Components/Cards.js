import React from "react";

function Birdcards({ bird, addToCart }) {
    const { name, amount, img } = bird;
    return (
        <li className="card">
            <h2>{name}</h2>
            <h5>${amount}</h5>
            <img src={img} alt={name} />
            <button onClick={() => addToCart(bird)}>Adopt</button>
        </li>
    );
}

export default Birdcards;