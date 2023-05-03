import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals";
const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/gallery" className="link-btn">
          continue shopping
        </Link>
        <button type="button" className="link-btn clear" onClick={clearCart}>
          clear your cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    height: fit-content;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear {
    background: var(--clr-red-light);
    height: fit-content;
  }
`;

export default CartContent;
