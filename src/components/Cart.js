import React from "react";
import BonusItems from "./BonusItems";

const Cart = ({
  birdsInCart,
  totalAmount,
  cancelAdoption,
  firstTier,
  secondTier,
  thirdTier,
  fourthTier,
}) => {
  const discountPercentage = birdsInCart.length >= 3 ? 0.1 : 0;
  const discountedTotal = totalAmount * (1 - discountPercentage);

  return (
    <>
      <h3 className="Cart">Cart</h3>
      <p>Discount: {discountPercentage * 100}%</p>
      <h4>Total: ${discountedTotal}</h4>
      <ol>
        {birdsInCart.map((bird, index) => (
          <li key={index}>
            {bird.name}: ${bird.amount}
            <button
              className="bird-in-cart-delete"
              onClick={() => cancelAdoption(index, Number(bird.amount))}
            >
              X
            </button>
          </li>
        ))}
      </ol>
      <ul className="bonus-list">
        <p>Your donations has qualified you for the following items:</p>
        <BonusItems
          totalAmount={totalAmount}
          firstTier={firstTier}
          secondTier={secondTier}
          thirdTier={thirdTier}
          fourthTier={fourthTier}
        />
      </ul>
    </>
  );
};

export default Cart;
