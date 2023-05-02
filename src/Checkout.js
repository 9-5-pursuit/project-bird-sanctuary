import React, { useState } from "react";

function Checkout({ onPurchase }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert("Please fill out all fields.");
      return;
    }
    onPurchase();
    setName("");
    setEmail("");
    alert("You have adopted birds. Thank you!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Zip:
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Checkout;
