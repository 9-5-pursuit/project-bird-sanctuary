import React, { useState } from "react";

function Checkout({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");

    setFirstName("");
    setLastName("");
    setEmail("");
    setZipcode("");
  };

  return (
    <>
      <h1>Checkout</h1>
      <form className="birdForm" onSubmit={handleSubmit}>
        <label className="labels" htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label className="labels" htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <label className="labels" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="labels">Zip Code:</label>
        <input
          type="number"
          pattern="[0-9]{5}"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />

        <button className="birds" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Checkout;
