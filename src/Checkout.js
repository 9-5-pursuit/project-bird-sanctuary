import { useState } from "react";

function Checkout(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (firstName && lastName && email && zipCode) {
          if (props.items.length > 0) {
            alert("You have adopted birds. Thank you!");
            props.onCheckout();
            setFirstName("");
            setLastName("");
            setEmail("");
            setZipCode("");
          } else {
            alert("Please add items to your cart first.");
          }
        }
      }}
    >
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="zipCode">Zip code:</label>
      <input
        type="number"
        id="zipCode"
        value={zipCode}
        onChange={(event) => setZipCode(event.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Checkout;
