import React, { useState } from "react";

export default function Checkout({ reset }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    zipCode: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    resetForm();
    alert(`You have adopted birds. Thank you!`);
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
      id: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        value={user.firstName}
        onChange={handleTextChange}
        required
        id="firstName"
      />
      <label htmlFor="lastName">Last name: </label>
      <input
        type="text"
        value={user.lastName}
        onChange={handleTextChange}
        required
        id="lastName"
      />
      <label htmlFor="zip">Zip code:</label>
      <input
        type="number"
        value={user.zip}
        onChange={handleTextChange}
        required
        id="zip"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={user.email}
        onChange={handleTextChange}
        required
        id="email"
      />
      <input type="submit" />
    </form>
  );
}
