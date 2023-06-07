import React, { useState } from "react";

// Checkout Component to Keep track of the information entered

export default function CheckOutForm({ reset }) {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zip: "",
    })

//prevent the form to rest the default value
  function handleSubmit() {
    // event.prevetDefault();
     alert("You have adopted birds. Thank you!");

     setUser({
       firstName: "",
       lastName: "",
       email: "",
       zip: "",
     });

     reset();
  }
  function resetFormCart(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={user.firstName}
          onChange={resetFormCart}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={user.lastName}
          onChange={resetFormCart}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          value={user.email}
          onChange={resetFormCart}
          required
        />

        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          name="zipCode"
          id="zipCode"
          value={user.zipcode}
          onChange={resetFormCart}
          required
        />
        <input type="Submit" />
      </form>
    </div>
  );
}
