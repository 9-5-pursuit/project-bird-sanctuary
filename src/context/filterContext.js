import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import {
  LOAD_BIRDS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_BIRDS,
} from "../actions";

import { useBirdsContext } from "./birdsContext";

const initialState = {
  filteredBirds: [],
  allBirds: [],
  gridView: true,
  sort: "price-lowest",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { birds } = useBirdsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_BIRDS, payload: birds });
  }, [birds]);

  useEffect(() => {
    dispatch({ type: SORT_BIRDS });
  }, [birds, state.sort]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
