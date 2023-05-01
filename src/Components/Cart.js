import React from "react";

export default function Cart({ cart, birdData, bonusItems, deleteFromCart }) {
  function totalPrice(cart, birdData) {
    let totalPrice = 0;
    for (let item of cart) {
      const bird = birdData.find((b) => b.id === item.id);
      totalPrice += bird.amount;
    }
  
    // Apply discount if there are 3 or more birds in the cart
    if (cart.length >= 3) {
      totalPrice *= 0.9;
    }
    return totalPrice;
  }

  function calculateBonuses(totalPrice) {
    let bonuses = [];
    if (totalPrice >= 100 && totalPrice <= 299) {
      bonuses.push(bonusItems[0]);
    } else if (totalPrice >= 300 && totalPrice <= 500) {
      bonuses.push(...bonusItems.slice(0, 2));
      return bonuses
    } else if (totalPrice >= 500 && totalPrice <= 1000) {
      bonuses.push(...bonusItems.slice(0, 3));
    } else if (totalPrice > 1000) {
      bonuses.push(...bonusItems);
    }
    return bonuses;
  }

  const total = totalPrice(cart, birdData);
  const bonuses = calculateBonuses(total);

  return (
    <div className="Cart">
      <h3>Cart</h3>
      {cart.length < 3 && <h4>Discount: 0%</h4>}
      {cart.length >= 3 && <h4>Discount: 10%</h4>}
      {cart.length > 0 && <h4>Total: ${total}</h4>}
      <ol>
        {cart.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            {item.name} ${item.amount}
            <button
              className="deleteButton"
              onClick={() => deleteFromCart(index, item)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      <p>Your donations have qualified for you the following items:</p>
      <ul>
        {bonuses.map((bonus, index) => (
          <li key={index}>{bonus}</li>
        ))}
      </ul>
    </div>
  );
}
