import { useState } from "react";

// Define a functional component named Checkout that accepts two props:
const Checkout = ({ setCart }) => {
  // Define the state hook called order that is initialized to an object with the following properties:
  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  // Define a handleChange function that accepts an event object and updates the order state with the appropriate property and value from the event object.
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.id]: e.target.value });
  };

  // Define a handleSubmit function that accepts an event object and alerts the user that they have adopted birds and resets the cart and order state.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setCart([]);
    setOrder({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  };

  // Return a JSX element that displays a checkout form with labels and input fields for firstName, lastName, email, and zip
  return (
    <div className="Checkout">
      <h4>Checkout</h4>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={order.firstName}
            id="firstName"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            id="lastName"
            value={order.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            id="email"
            value={order.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Zip Code
          <input
            type="text"
            pattern="[0-9]{5}"
            title="Five digit zip code"
            id="zip"
            value={order.zip}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
