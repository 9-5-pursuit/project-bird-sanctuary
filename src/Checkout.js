import React from "react";

function Checkout({
  setDiscount,
  setTotal,
  setBirdsAdded,
  birdsAdded,
  setBonus,
}) {
  function handleForm(e) {
    e.preventDefault();
    // let firstName = document.querySelector("#firstName");
    // let lastNname = document.querySelector("#lastName");
    // let email = document.querySelector("#email");
    // let zip = document.querySelector("#zipCode");
    let form = document.querySelector("form");
    if (birdsAdded) {
      alert("You have adopted birds. Thank you!");

      setBirdsAdded([]);
      setTotal(0);
      setDiscount(0);
      setBonus([]);

      form.reset();
    } else {
      alert("Need to add bird(s) to cart.");
    }
  }

  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <form onSubmit={handleForm}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" required></input>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="zipCode">Zip Code</label>
        <input id="zipCode" type="number" pattern="[0-9]{5}" required />
        <div className="checkoutButton">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Checkout;
