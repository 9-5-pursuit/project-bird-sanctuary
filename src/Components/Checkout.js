import React, { useState } from "react";

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    //empty the cart once the form is submitted
    const cartItems = document.querySelectorAll(".Cart li");
    cartItems.forEach((item) => item.remove());
  };

  return (
    <div className="Checkout">
      <h1>Checkout</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label" htmlFor="first_name">
          First Name:
        </label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="label" htmlFor="last_name">
          Last Name:
        </label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label" htmlFor="zip_code">
          Zip Code:
        </label>
        <input
          id="zip_code"
          type="number"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Checkout;
