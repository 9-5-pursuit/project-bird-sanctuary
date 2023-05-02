import React, { useState } from "react";

function CheckOut({ cartItems, onCheckout }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleCheckout = () => {
    const order = {
      firstName,
      lastName,
      email,
      zipCode,
      cartItems,
    };
    onCheckout(order);
    setFirstName("");
    setLastName("");
    setEmail("");
    setZipCode("");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" value={zipCode} onChange={handleZipCodeChange} />
        </label>
        <br />
        <button type="button" onClick={handleCheckout}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
