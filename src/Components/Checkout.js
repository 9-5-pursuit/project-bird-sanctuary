import React from "react";
import { useState } from "react";

export default function Checkout({ setCart }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    resetForm();
    setCart([]);
  }

  function handleTextChange(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }

  function resetForm() {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        value={user.firstName}
        onChange={handleTextChange}
        id="firstName"
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        value={user.lastName}
        onChange={handleTextChange}
        id="lastName"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={user.email}
        onChange={handleTextChange}
        id="email"
      />
      <label htmlFor="zip">Zip code:</label>
      <input
        type="number"
        value={user.zip}
        onChange={handleTextChange}
        id="zip"
      />
      <br />
      <input type="submit" />
    </form>
  );
}