import { useState } from "react";
function Cart({ info, adoptBird, totalAmount }) {
  //   console.log(adoptBird);
  //   now that it is an array we can iterate through it and m,,
  //   console.log(info); the array
  //   console.log(birds);

  const [total, setTotal] = useState(totalAmount);

  return (
    <>
      <p>Discount</p>
      <p>Total: ${total}</p>
      <p></p>
      <ul>
        {adoptBird.slice(2).map(({ name, amount }, index) => (
          <p key={index}>
            {name}:{amount}
          </p>
        ))}
      </ul>
      <p>your donations has qualified you for the following items</p>
      <ul>
        <li>stickers</li>
        <li>background</li>
        <li>tag</li>
        <li>invites</li>
      </ul>
    </>
  );
}

export default Cart;
