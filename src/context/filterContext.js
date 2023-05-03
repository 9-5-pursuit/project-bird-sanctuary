import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import {
  LOAD_BIRDS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_BIRDS,
  UPDATE_FILTER,
} from "../actions";

import { useBirdsContext } from "./birdsContext";

const initialState = {
  filteredBirds: [],
  allBirds: [],
  gridView: true,
  sort: "price-lowest",
  text: "",
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
  }, [birds, state.sort, state.text]);

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

  const updateFilter = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log(name, value);
    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  const clearFilter = () => {
    dispatch({ type: UPDATE_FILTER, payload: { name: "text", value: "" } });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
