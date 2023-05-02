export default function Cart({
  discount,
  total,
  cart,
  subtractToTotal,
  bonusCollection,
  setCart,
  setDiscount,
}) {
  return (
    <div className="Cart container">
      <h4>Cart</h4>
      <p>Discount: {discount}%</p>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((item) => {
          //console.log(item.amount);
          //console.log(cart.length);

          return (
            <li key={item.id}>
              {item.name} ${item.amount}
              <button
                onClick={() => {
                  subtractToTotal(item);
                  setCart(cart.filter((element) => element.id !== item.id));
                  cart.length - 1 >= 3 ? setDiscount(10) : setDiscount(0);
                }}
              >
                &times;
              </button>
            </li>
          );
        })}
      </ol>
      <p>Your Donations have qualified you for the following items:</p>
      <ul>
        {bonusCollection.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
