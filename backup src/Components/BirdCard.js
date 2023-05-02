import React from "react";

function BirdCard({ birdData, handleBirdData }) {
  const { name, amount, img } = birdData;
  return (
    <>
      <ul className="birdCard" key={birdData.id}>
        <li>
          <h4>{name}</h4>
          <h6>Price: ${amount}</h6>
          <img src={img} alt={name} />
          <button onClick={() => handleBirdData(birdData)}>ADOPT</button>
        </li>
      </ul>
    </>
  );
}

// export { handleBirdData };
export default BirdCard;
