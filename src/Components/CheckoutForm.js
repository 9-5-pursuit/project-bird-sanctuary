import React, { useState } from "react";

function CheckoutForm() {
  // set state
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
  });
  // user input
  function handleUserInput(event) {
    setUserInput({
      ...userInput,
      [event.target.id]: event.target.value,
    });
  }
  // reset form function
  function resetForm() {
    setUserInput({
      firstName: "",
      lastName: "",
      email: "",
      zipcode: "", // zipcode not clearing
    });
  }

  function completeCheckout(event) {
    // event.preventDefault();
    alert("you have adopted bird(s). Thank you!");
    resetForm();
  }

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={completeCheckout}>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            onChange={handleUserInput}
            value={userInput.firstName}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            onChange={handleUserInput}
            value={userInput.lastName}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            onChange={handleUserInput}
            value={userInput.email}
          />
        </label>
        <label htmlFor="zipcode">
          Zip Code
          <input
            input
            id="zip"
            type="text"
            pattern="[0-9]{5}"
            onChange={handleUserInput}
            value={userInput.zip}
            placeholder="Enter 5-digit zipcode..."
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CheckoutForm;

// need to handle no inputs if input is wrong format
// resetform fn needs to work better
