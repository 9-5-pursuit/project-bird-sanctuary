import bonusItems from "../data/bonusItems";

function Cart({ cart }) {
  function birdTotal(cart){
    let totalCost = 0
    for (let item of cart){
        totalCost += item.amount
    }
    return totalCost
  };

  let getBonus = [];
  if (birdTotal >= 100 && birdTotal < 300) {
    getBonus = bonusItems.slice(0, 1);
  }

  if (birdTotal >= 300 && birdTotal < 500) {
    getBonus = bonusItems.slice(0, 2);
  }

  if (birdTotal >= 500 && birdTotal <= 1000) {
    getBonus = bonusItems.slice(0, 3);
  }

  if (birdTotal > 1000) {
    getBonus = bonusItems;
  }

  return (
    <div className="cart">
      <h3>Cart</h3>
      <h5>Discount: {cart.length >= 3 ? 10 : 0}%</h5>
      <h5>Total: ${birdTotal || 0}</h5>
      {cart.map((cart) => {
        return (
          <ol key={cart.id}>
            {cart.name}: ${cart.amount}
            <button>Remove</button>
          </ol>
        );
      })}

      {getBonus.length > 0 && (
        <>
          <p>Your donations have qualified you for the following items:</p>
          <ul>
            {getBonus.map((bonus) => (
              <li>{bonus}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default Cart;
