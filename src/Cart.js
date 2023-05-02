import { v1 as generateUniqueID } from "uuid";
import bonusItems from "./data/bonusItems";

function Cart({ total, birdsAdded, discount, setBirdsAdded, bonus }) {
  // I know this is not the correct solution, but it is as far I got for removing the items, I would have to remove from the total, and from bonus items, and have different ids for each card.

  const handleRemove = (deleteItem) => {
    const newBirds = birdsAdded.filter((bird) => bird !== deleteItem);
    setBirdsAdded(newBirds);
  };

  let bonusItemArr = [];
  if (total >= 100 && total < 300) {
    bonusItemArr.push(bonusItems[0]);
  } else if (total >= 300 && total < 500) {
    bonusItemArr.push(bonusItems[0], bonusItems[1]);
  } else if (total >= 500 && total < 1000) {
    bonusItemArr.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (total >= 1000) {
    bonusItemArr.push(
      bonusItems[0],
      bonusItems[1],
      bonusItems[2],
      bonusItems[3]
    );
  }

  return (
    <div className="Cart">
      <h3>Cart</h3>
      <h4>Discount: {discount}%</h4>
      <h4>Total: ${birdsAdded.length >= 3 ? total - total * 0.1 : total}</h4>
      {birdsAdded ? (
        <ol>
          {birdsAdded.map((bird) => {
            return (
              <li key={generateUniqueID()}>
                {bird}
                <button onClick={() => handleRemove(bird)}>Remove</button>
              </li>
            );
          })}
        </ol>
      ) : null}
      <h6>Your adoption has qualified you for the following items:</h6>

      {total ? (
        <ul>
          {bonusItemArr.map((item) => {
            return <li key={generateUniqueID()}>{item}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Cart;
