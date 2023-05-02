import { useState } from "react";
// import birdData from "../data/birds";

import Cart from "./Cart";
// import Checkout from "./Checkout";

function BirdCards({ info }) {
  // this is holding the information of the card that is clicked in order to put it into the Cart

  // let birds = ;
  const [adoptBird, setAdoptBird] = useState([
    { name: "1", amount: "0" },
    { name: "2", amount: "0" },
  ]);

  // this function is updating the information of the useState
  function adopt(name, amount) {
    // setAdoptBird();
    const bird = { name: name, amount: amount };

    let newBirdArr = [...adoptBird, bird];
    setAdoptBird(newBirdArr);
    totalAmount(newBirdArr);
  }
  // console.log(adoptBird);
  function totalAmount(adoptBird) {
    // console.log(adoptBird);
    let newTotal = 0;

    for (let i = 2; i < adoptBird.length; i++) {
      const element = adoptBird[i];

      newTotal += Number(element.amount);
      console.log(newTotal);
    }

    return newTotal;
  }

  return (
    <>
      <section>
        <ul>
          {/* map is iterating through the array of objects in order to get all of the information for each individual bird and giving them their own card */}
          {info.map(({ name, amount, img, id }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{amount}</p>
              <img src={img} height="100"></img>
              <p>
                <button onClick={() => adopt(name, amount)}>ADOPT</button>
              </p>
            </li>
          ))}
        </ul>
      </section>
      <Cart info={info} adoptBird={adoptBird} totalAmount={totalAmount} />
    </>
  );
}

export default BirdCards;
