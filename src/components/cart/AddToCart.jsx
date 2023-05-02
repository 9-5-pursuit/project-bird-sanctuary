import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import AmountButtons from "../AmountButtons";

const AddToCart = ({ bird }) => {
  const [number, setNumber] = useState(1);
  const { addToCart } = useCartContext();

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number <= 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };
  //   console.log(number);
  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          number={number}
        />

        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(bird.id, number, bird)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
