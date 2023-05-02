import React, { useState } from "react";
import bonusItems from "./data/bonusItems";

function Cart(props) {
  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    const newTotal = props.items.reduce((acc, item) => acc + item.amount, 0);
    setTotal(newTotal);
  }, [props.items]);

  function handleRemoveFromCart(index) {
    const newItems = [...props.items];
    const removed = newItems.splice(index, 1);
    props.setItems(newItems);
    setTotal((prevTotal) => prevTotal - removed[0].amount);
  }

  function getBonusItems(discountedTotal) {
    if (discountedTotal >= 100 && discountedTotal < 300) {
      return [bonusItems[0]];
    } else if (discountedTotal >= 300 && discountedTotal < 500) {
      return [bonusItems[0], bonusItems[1]];
    } else if (discountedTotal >= 500 && discountedTotal < 1000) {
      return [bonusItems[0], bonusItems[1], bonusItems[2]];
    } else if (discountedTotal >= 1000) {
      return [bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]];
    } else {
      return [];
    }
  }

  const itemList = props.items.map((bird, index) => (
    <li key={index}>
      {bird.name} - ${bird.amount}
      <button onClick={() => handleRemoveFromCart(index)}>X</button>
    </li>
  ));

  const discount = props.items.length >= 3 ? 0.1 : 0;

  const discountedTotal = total - total * discount;
  const displayTotal = `$${discountedTotal.toFixed(2)}`;
  const bonusList = getBonusItems(discountedTotal).map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Discount: {discount * 100}%</h4>
      <h4>Total: {displayTotal}</h4>
      <ol>{itemList}</ol>
      {bonusList.length > 0 && (
        <>
          <h3>Bonus Items</h3>
          <ul>{bonusList}</ul>
        </>
      )}
    </div>
  );
}

export default Cart;
