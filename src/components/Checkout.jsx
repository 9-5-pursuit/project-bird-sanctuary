import { useState } from "react";

const Checkout = ({ setCart }) => {
  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.id]: e.target.value });
  };

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
