import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { totalAmount, discount, bonus, updatedTotal } = useCartContext();
  const { loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        {bonus && (
          <>
            <p>
              Congratulations! You've been selected to receive exciting gifts!
              Increase the number of birds to receive even more rewards!
            </p>
            <ul>
              {bonus.map((el, i) => (
                <li style={{ color: "green" }} key={i}>
                  {el}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <article>
        <h5>
          subtotal:<span>${totalAmount}</span>
        </h5>
        <p>
          *discount:<span>{discount}%</span>
        </p>
        <hr />
        {discount ? (
          <h4>
            order total:<span>${updatedTotal}</span>
          </h4>
        ) : (
          <h4>
            order total: <span>${totalAmount}</span>
          </h4>
        )}
        <p>*discount</p>
        <span>add 3 birds to your cart and get 10% discount</span>
        {totalAmount ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button onClick={loginWithRedirect} className="btn">
            login
          </button>
        )}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
  }
`;

export default CartTotals;
