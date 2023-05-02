import React, { useState } from "react";

export default function Birds({ bird, addToCart }) {
  // const [adoptBird, setAdoptBird] = useState([
  //   { name: "", amount: 0 },
  //   { name: "", amount: 0 },
  // ]);

//   function handleAdopt(e) {
//   //   e.preventDefault();
//   //   const newBird = { name: bird.name, amount: bird.amount };
//   //   setAdoptBird([...adoptBird, newBird]);
//  }

  return (
    <>
      <li key={bird.id} className="card birds">
        <h5>{bird.name}</h5>
        {/** <p>Id:{bird.id}</p> <=testing stuff*/}
        <p>${bird.amount}</p>
        <img src={bird.img} alt={bird.name} height="100px" />
        <br />
        <button onClick={() => addToCart(bird)}>Adopt</button>
      </li>
    </>
  );
}
