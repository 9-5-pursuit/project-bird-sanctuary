

export default function Cart({ cart, birds }) {

    function totalPrice(cart, birds) {
        let totalPrice = 0;
        for (let item of cart) {
            const bird = birds.find((b) => b.id === item.id);
            totalPrice += bird.amount 
        }
        return totalPrice;
    }
  return (
      <div className="Cart">
        <h2>Cart</h2>
        <h4>Discount</h4>
        <h4>Total: ${totalPrice(cart, birds)}</h4>
        <ol>
            {cart.map((item) => (
          <li key={item.id}>{item.name} ${item.amount}</li>
            ))}
        </ol>
      </div>
  );
}
