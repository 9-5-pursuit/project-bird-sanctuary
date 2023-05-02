import React from "react";

function Cart(props) {
  const { selectedBirds, removeFromCart, calculateDiscount, calculateTotal } =
    props;

  const discount = calculateDiscount();
  const total = calculateTotal();

  const birdList = selectedBirds.map((bird) => {
    return (
      <li key={bird.id}>
        <p>
          {bird.name}: {bird.amount}
        </p>
        <button onClick={() => removeFromCart(bird)}>Delete</button>
      </li>
    );
  });

  return (
    <>
      <div className="Cart">
        <h2>Cart</h2>
        <div>
          <h4>Discount: {discount * 100}</h4>
          <h4>Total: {total}</h4>
        </div>
        <ol>{birdList}</ol>
      </div>
    </>
  );
}

export default Cart;
