import React from "react";
import { Hero, Filters, BirdsList, Sort } from "../components";
import styled from "styled-components";

const Gallery = () => {
  return (
    <main>
      <Hero title="birds" />
      <Wrapper className="page">
        <div className="section-center birds">
          <Filters />
          <div>
            <Sort />
            <BirdsList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .birds {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .birds {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Gallery;
