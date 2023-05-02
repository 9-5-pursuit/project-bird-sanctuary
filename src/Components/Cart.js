import React from "react";
import bonusItems from "../data/bonusItems";

function Cart({ birdsAdopted, onDelete }) {
  // const [birdsInCart, setBirdsInCart] = useState([]);
  // const [totalCost, setTotalCost] = useState(0);
  //const [discount, setDiscount] = useState(0);

  // const handleAddToCart = (bird) => {
  //   setBirdsInCart([...birdsInCart, bird]);
  //   setTotalCost(totalCost + bird.amount);
  // };

  const calculateDiscount = () => {
    if (birdsAdopted.length >= 3) {
      return 10;
    } else {
      return 0;
    }
  };

  let totalCost = 0;

  for (let bird of birdsAdopted) {
    totalCost += bird.amount;
  }

  if (birdsAdopted.length >= 3) {
    const discount = totalCost * 0.1;
    totalCost = totalCost - discount;
  }
  return (
    <div className="Cart">
      <h1>Cart</h1>
      <h2>Discount: {calculateDiscount()}%</h2>
      <h4>Total: ${totalCost}</h4>

      <ul>
        {birdsAdopted.length > 0 ? (
          <ol>
            {birdsAdopted.map((bird, index) => (
              <li key={index}>
                {bird.name}: ${bird.amount}
                <button onClick={() => onDelete(bird.id)}>Remove</button>
              </li>
            ))}
          </ol>
        ) : null}
      </ul>
      <p>Your donations have qualified for the following items:</p>

      {totalCost >= 100 && totalCost <= 300 ? (
        <ul>
          <li>{bonusItems[0]}</li>
        </ul>
      ) : null}

      {totalCost >= 300 && totalCost <= 500 ? (
        <div>
          <ul>
            <li>{bonusItems[0]}</li>

            <li>{bonusItems[1]}</li>
          </ul>
        </div>
      ) : null}
      {totalCost >= 500 && totalCost <= 1000 ? (
        <div>
          <ul>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
          </ul>
        </div>
      ) : null}
      {totalCost > 100 ? (
        <div>
          <ul>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
            <li>{bonusItems[3]}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
