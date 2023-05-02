import React, { useState } from "react";

function Checkout({ setItem }) {
  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.id]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setItem([]);
    setOrder({
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
    });
  }
  return (
    <form className="Checkout" onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={order.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={order.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          id="email"
          name="email"
          type="email"
          value={order.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Zip Code
        <input
          id="zipCode"
          name="zipCode"
          type="number"
          value={order.zipCode}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Checkout;
