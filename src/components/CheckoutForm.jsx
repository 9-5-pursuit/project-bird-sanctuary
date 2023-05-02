import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
// import { useBirdsContext } from "../context/birdsContext";

const CheckoutForm = () => {
  const { clearCart } = useCartContext();
  // const { birds } = useBirdsContext();

  function handleSubmit(e) {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    clearCart();
    e.target.reset();
  }

  return (
    <Wrapper>
      <form className="order-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input id="firstName" type="text" placeholder="First Name" required />
        </label>
        <label htmlFor="lastName">
          <input id="lastName" type="text" placeholder="Last Name" required />
        </label>
        <label htmlFor="email">
          <input id="email" type="text" placeholder="Email" required />
        </label>
        <label htmlFor="zipCode">
          <input
            id="zip"
            name="zip"
            type="text"
            pattern="[0-9]*"
            placeholder="Zip Code"
            required
          />
        </label>
        <button type="submit" className="btn btn-form">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;

  .order-form {
    text-align: center;
    margin-bottom: 5rem;
    margin-top: 1rem;

    .btn-form {
      width: 25%;
      margin: 0 auto;
      text-align: center;
    }
  }

  .order-form input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    width: 25%;
    border: 2px solid var(--clr-primary-5);
  }

  @media screen and (max-width: 600px) {
    .section-order {
      margin: 2rem 0;
    }
    .btn-form {
      letter-spacing: 0;
      text-transform: capitalize;
    }
  }
`;

export default CheckoutForm;
