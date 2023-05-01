function Cart({ info, adoptBird }) {
  console.log(adoptBird);
  //   now that it is an array we can iterate through it and m,,
  //   console.log(info); the array
  //   console.log(birds);

  return (
    <>
      <p>
        {adoptBird.slice(2).map(({ name, amount }) => (
          <p>
            {name}: {amount}
          </p>
        ))}
      </p>
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
