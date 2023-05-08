import React, { useState } from "react";

function Checkout() {
  const [showAlert, setShowAlert] = useState(false);
function handleShowAlert(){
  
   
  
}
  function handleSubmit(event) {
    event.preventDefault();
    

    // Form is valid, display success alert
    setShowAlert(true);

    // Reset cart and inputs
    event.target.reset();
  }

  function handleAlertClose() {
    setShowAlert(false);
  }

  return (
    <>
      <form>
        <h3>Checkout</h3>

        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" required />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="zipcode">Zip Code</label>
        <input type="number" id="zipcode" required />
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      showAlert && (
      <div className="alert">
        <p>You have adopted birds. Thank you!</p>
        <button onClick={handleAlertClose}>Close</button>
      </div>
      );
    </>
  );
}
export default Checkout;
