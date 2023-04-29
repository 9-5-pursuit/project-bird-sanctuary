import React from "react";
import bonusItems from "../data/bonusItems";

function Cart({ birdCard, setBirdCard }) {
  // console.log(birdCard);
  let price = birdCard.reduce((acc, birdCost) => {
    return acc + birdCost.amount;
  }, 0);
  // console.log(price);

  // remove an adopted bird from cart
  function removeBird(i) {
    birdCard.splice(i, 1);
    setBirdCard([...birdCard]);
  }

  // discounts 3 or more birds starts discount
  let discount = "0%";
  if (birdCard.length >= 3) {
    price = (price / 100) * 90;
    discount = "10%";
  }

  // bonus items 100-300 (1st item) 300-500 (1st & 2nd) 500-1000 (1st, 2nd, 3rd) 1000 (all bonuses)
  let bonusGiven = [];
  if (price >= 1000) {
    bonusGiven.push(bonusItems[3], bonusItems[2], bonusItems[1], bonusItems[0]);
  } else if (price >= 500 && price <= 1000) {
    bonusGiven.push(bonusItems[2], bonusItems[1], bonusItems[0]);
  } else if (price >= 300 && price <= 500) {
    bonusGiven.push(bonusItems[1], bonusItems[0]);
  } else if (price >= 100) {
    bonusGiven.push(bonusItems[0]);
  }

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <h3>Discount: {discount}</h3>
      <h4>Total: ${price}</h4>
      <ol>
        {birdCard.map((bird, i) => {
          return (
            <li>
              {bird.name}: ${bird.amount}
              <button onClick={() => removeBird(i)}>Remove</button>
            </li>
          );
        })}
      </ol>
      <p>Your donation has qualified for the following items</p>
      <ul>
        {bonusGiven.map((b) => {
          return <li>{b}</li>;
        })}
      </ul>
    </div>
  );
}

export default Cart;
