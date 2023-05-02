import { useState } from "react";

export default function Checkout({ setCart }) {
  const [checkout, setCheckout] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    setCart([]);
    setCheckout({
      firstName: "",
      lastName: "",
      email: "",
      zipcode: "",
    });
  }

  function handleTextChange(e) {
    setCheckout({ ...checkout, [e.target.id]: e.target.value });
  }
  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First Name</label>
        <input
          type="text"
          id="firstName"
          value={checkout.firstName}
          onChange={handleTextChange}
        />

        <label htmlFor="lastName"> Last Name</label>
        <input
          type="text"
          id="lastName"
          value={checkout.lastName}
          onChange={handleTextChange}
        />

        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          value={checkout.email}
          onChange={handleTextChange}
        />

        <label htmlFor="zipCode"> Zip code</label>
        <input
          type="number"
          id="zipCode"
          value={checkout.zipcode}
          onChange={handleTextChange}
        />
        <br></br>

        <input type="submit" />
      </form>
    </>
  );
}
