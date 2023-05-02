import React, { useState } from "react";
import "../checkout.css";

function Checkout({ resetForm }) {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: ""
  });

  const handleTextChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value
    });
  };

  // function reset() {
  //   setUserInfo({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     zipCode: ""
  //   });
  //   resetForm();
  // }

  function handleOnSubmit(event) {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    resetForm();
  }

  return (
    <div>
      <h4>Checkout</h4>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={userInfo.firstName}
          onChange={handleTextChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={userInfo.lastName}
          onChange={handleTextChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={userInfo.email}
          onChange={handleTextChange}
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          value={userInfo.zipcode}
          onChange={handleTextChange}
        />
        <br />
        <button id="checkout-button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Checkout;
