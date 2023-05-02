import React from "react";
import { useFilterContext } from "../context/filterContext";
import { FiGrid, FiList } from "react-icons/fi";
import styled from "styled-components";

const Sort = () => {
  const {
    filteredBirds: birds,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <FiGrid
          onClick={setGridView}
          className={`${gridView ? "active" : null}`}
        />

        <FiList
          onClick={setListView}
          className={`${!gridView ? "active" : null}`}
        />
      </div>
      <p>{birds.length} birds found</p>
      <hr />
      <form>
        <label htmlFor="sort">
          sort by:
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={updateSort}
            className="sort-input"
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
          </select>
        </label>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;

    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
