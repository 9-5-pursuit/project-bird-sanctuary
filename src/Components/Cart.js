import bonusItems from "../data/bonusItems";

function Cart({ cart, handleRemoveFromCart }) {
  // function birdTotal(cart){
  //   let totalCost = 0
  //   for (let item of cart){
  //       totalCost += item.amount
  //   }
  //   return totalCost
  // };

  let birdTotal = cart.reduce((accu, currValue) => accu + currValue.amount, 0);

  console.log(birdTotal);
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
      <h5>Total: ${cart.length >= 3 ? birdTotal * 0.9 : birdTotal}</h5>
      {cart.map((bird) => {
        return (
          <ol key={bird.id}>
            {bird.name}: ${bird.amount}
            <button onClick={() => handleRemoveFromCart(bird.id)}>Remove</button>
          </ol>
        );
      })}
  
      {getBonus.length > 0 && (
        <>
          <p>Your donations have qualified you for the following items:</p>
          <ul>
            {getBonus.map((bonus, index) => (
              <li key={index}>{bonus}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );  
}
export default Cart;
