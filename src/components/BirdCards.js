import React, { useState } from "react";
import birdData from "../data/birds";
import Cart from "./Cart";
// import bonusItems from "../data/bonusItems";

function BirdCards() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [birdsInCart, setBirdsInCart] = useState([]);
  const [firstTier, setFirstTier] = useState(false);
  const [secondTier, setSecondTier] = useState(false);
  const [thirdTier, setThirdTier] = useState(false);
  const [fourthTier, setFourthTier] = useState(false);

  function getBonus(updatedTotalAmount) {
    if (updatedTotalAmount >= 100 && updatedTotalAmount > 300) {
      console.log("Dun");
      setFirstTier(true);
    }
    if (updatedTotalAmount >= 300 && updatedTotalAmount > 500) {
      console.log("Dun,Dun");
      setSecondTier(true);
    }
    if (updatedTotalAmount >= 500 && updatedTotalAmount > 1000) {
      setThirdTier(true);
      console.log("Dun,Dun,Dun");
    }
    if (updatedTotalAmount >= 1000) {
      console.log("VOILA!!");
      setFourthTier(true);
    }
  }

  const handleAdoption = ({ name, amount }) => {
    setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);

    setBirdsInCart((prevBirdsInCart) => [...prevBirdsInCart, { name, amount }]);
    let qualifiedTotal = totalAmount;
    getBonus(qualifiedTotal);
    
  };

  const cancelAdoption = (index, amount) => {
    setBirdsInCart((prevBirdsInCart) => {
      const updatedBirdsInCart = [...prevBirdsInCart];
      updatedBirdsInCart.splice(index, 1);

      setTotalAmount((prevTotalAmount) => prevTotalAmount - amount);

      return updatedBirdsInCart;
    });
  };

  return (
    <>
      <div>
        {birdData.map(({ id, amount, name, img }) => (
          <div className="card" key={id}>
            <p className="bird-card-name">{name}</p>
            <p className="bird-card-amount">Price: ${amount}</p>
            <img src={img} alt="bird available for adoption" height="100px" />

            <button
              className="bird-card-adoption"
              onClick={() => handleAdoption({ name, amount })}
            >
              Adopt
            </button>
          </div>
        ))}
      </div>

      <Cart
        birdsInCart={birdsInCart}
        totalAmount={totalAmount}
        cancelAdoption={cancelAdoption}
        firstTier={firstTier}
        secondTier={secondTier}
        thirdTier={thirdTier}
        fourthTier={fourthTier}
      />
    </>
  );
}

export default BirdCards;
