import React from "react";
import Bird from "./Bird";
import styled from "styled-components";

const GridView = ({ birds }) => {
  return (
    <Wrapper>
      <div className="birds-container">
        {birds.map((bird) => {
          return <Bird key={bird.id} {...bird} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .birds-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .birds-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .birds-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
