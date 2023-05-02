import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { Hero } from "../components";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <Hero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/gallery" className="btn">
              back to our gallery
            </Link>
          </div>
        ) : (
          <CheckoutForm />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
