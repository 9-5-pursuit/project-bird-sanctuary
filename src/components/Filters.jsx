import React from "react";
import styled from "styled-components";

const Filters = () => {
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input type="text" placeholder="search" className="search-input" />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .search-input {
    ${"" /* padding: 0.5rem; */}
    background: var(--clr-grey-10);
    color: var(--clr-grey-5);
    border-radius: 0.25rem;
    border: 1px solid var(--clr-grey-8);
    letter-spacing: 0.1rem;
    font-size: 1rem;
    width: 90%;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--clr-primary-5);
    }

    &::placeholder {
      text-transform: capitalize;
      color: var(--clr-grey-5);
    }
  }
`;

export default Filters;
