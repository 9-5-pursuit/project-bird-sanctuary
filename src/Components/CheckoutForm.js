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
      zipcode: "",
    });
  }

  function completeCheckout(event) {
    // event.preventDefault();
    alert("You have adopted birds. Thank you!");
    resetForm();
  }

  return (
    <div className="Checkout">
      <h3>Checkout</h3>
      <br />
      <form onSubmit={completeCheckout}>
        <label htmlFor="firstName">
          First Name
          <br />
          <input
            type="text"
            id="firstName"
            onChange={handleUserInput}
            value={userInput.firstName}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <br />
          <input
            type="text"
            id="lastName"
            onChange={handleUserInput}
            value={userInput.lastName}
          />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input
            type="email"
            id="email"
            onChange={handleUserInput}
            value={userInput.email}
          />
        </label>
        <label htmlFor="zip">
          Zip Code
          <br />
          <input
            input
            type="number"
            id="zip"
            pattern="[0-9]{5}"
            onChange={handleUserInput}
            value={userInput.zip}
            placeholder="Enter 5-digit zipcode..."
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CheckoutForm;
