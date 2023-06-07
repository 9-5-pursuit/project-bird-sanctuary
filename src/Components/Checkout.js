import React, { useState } from "react";

function Checkout({ reset }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
    reset();
  }

  function handleTextChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <lebel htmlFor="firstName">First Name</lebel>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleTextChange}
          required
        />
        <br />
        <lebel htmlFor="lastName">Last Name</lebel>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleTextChange}
          required
        />
        <br />
        <lebel htmlFor="email">Email</lebel>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleTextChange}
          required
        />
        <br />
        <lebel htmlFor="zip">Zip Code</lebel>
        <br />
        <input
          type="number"
          id="zip"
          name="zip"
          value={user.zip}
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <button> Submit </button>
      </form>
    </div>
  );
}
export default Checkout;
