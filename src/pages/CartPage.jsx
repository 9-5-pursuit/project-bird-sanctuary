import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { CartContent, Hero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100vh">
        <div className="empty">
          <h1>Your cart is empty</h1>
          <Link to="/gallery" className="btn">
            back to the gallery
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <Hero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
