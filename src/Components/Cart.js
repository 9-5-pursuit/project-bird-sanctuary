import bonusItems from "../data/bonusItems";

function Cart({ cartItems, handleRemoveFromCart }) {
  const total = cartItems.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.amount),
    0
  );

  let eligibleBonuses = [];

  if (total >= 100 && total < 300) {
    eligibleBonuses = bonusItems.slice(0, 1);
  }

  if (total >= 300 && total < 500) {
    eligibleBonuses = bonusItems.slice(0, 2);
  }

  if (total >= 500 && total <= 1000) {
    eligibleBonuses = bonusItems.slice(0, 3);
  }

  if (total > 1000) {
    eligibleBonuses = bonusItems;
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h3>Discount: {cartItems.length >= 3 ? 10 : 0}%</h3>
      <h4>Total: ${cartItems.length >= 3 ? total * 0.9 : total}</h4>

      {/*// ------- Adopted Birds ---------\\*/}
      <ol>
        {cartItems.map((item, index) => (
          <li key={item.id * Math.random()}>
            {item.name}: ${item.amount}{" "}
            <button onClick={() => handleRemoveFromCart(index)}>x</button>
          </li>
        ))}
      </ol>

      {/* // ---------- Eligible Bonuses --------- \\ */}
      {eligibleBonuses.length > 0 && (
        <>
          <p>Your donations have qualified you for the following items:</p>
          <ul>
            {eligibleBonuses.map((bonus) => (
              <li key={bonus}>{bonus}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Cart;
