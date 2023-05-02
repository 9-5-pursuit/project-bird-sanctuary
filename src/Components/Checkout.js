import React from "react";

function Checkout({ setAdoptBirds }) {
  function handleSubmit(event) {
    event.preventDefault();
    setAdoptBirds([]);
    // console.log("Just checking!!");
    alert("You have adopted birds. Thank you!");
  }

  return (
    <div className="Checkout">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <label htmlFor="FirstName">First Name</label>
        <input id="FirstName" name="firstname" type="text" />

        <label htmlFor="LastName">Last Name</label>
        <input id="LastName" name="lastname" type="text" />

        <label htmlFor="Email">Email</label>
        <input id="Email" name="email" type="email" />

        <label htmlFor="ZipCode">Zip Code</label>
        <input id="ZipCode" name="zipcode" type="number" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Checkout;
