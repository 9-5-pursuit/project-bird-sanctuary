import { useState } from "react";
// import bonusItems from "../data/bonusItems";
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
  const [total, setTotal] = useState();
  const [discount, setDiscount] = useState(0);

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  let newBirdArr;
  let newTotal;

  // this function is updating the information of the useState
  function adopt(name, amount) {
    // setAdoptBird();
    const bird = { name: name, amount: amount };

    newBirdArr = [...adoptBird, bird];

    newTotal = total;

    setAdoptBird(newBirdArr);

    setTotal(totalAmount(newBirdArr));

    discountTotal(newBirdArr);

    bonus(newTotal);
  }
  // console.log(adoptBird);
  function totalAmount(newBirdArr) {
    // console.log(adoptBird);
    let newTotal = 0;

    for (let i = 2; i < newBirdArr.length; i++) {
      const element = newBirdArr[i];

      newTotal += Number(element.amount);
      // console.log(newTotal);
    }

    return newTotal;
  }

  // STARTING HERE

  function discountTotal(param) {
    if (param.length >= 5) {
      setDiscount(10);
    }
  }

  function bonus(newTotal) {
    if (newTotal >= 100 || newTotal > 300) {
      console.log("yes");
      setShowFirst(true);
    }
    if (newTotal >= 300 || newTotal > 500) {
      setShowSecond(true);
    }
    if (newTotal >= 500 || newTotal > 1000) {
      setShowThird(true);
    }
    if (newTotal >= 1000) {
      setShowFourth(true);
    }
  }

  // I COULD TOGGLE

  return (
    <>
      <section>
        <ul>
          {/* map is iterating through the array of objects in order to get all of the information for each individual bird and giving them their own card */}
          {info.map(({ name, amount, img, id }) => (
            <li key={id} className="card">
              <p>{name}</p>
              <p>{amount}</p>
              <img src={img} height="100px"></img>
              <p>
                <button onClick={() => adopt(name, amount)}>Adopt</button>
              </p>
            </li>
          ))}
        </ul>
      </section>
      <Cart
        info={info}
        adoptBird={adoptBird}
        total={total}
        discount={discount}
        showFirst={showFirst}
        showSecond={showSecond}
        showThird={showThird}
        showFourth={showFourth}
        newBirdArr={newBirdArr}
        setAdoptBird={setAdoptBird}
      />
    </>
  );
}

export default BirdCards;
