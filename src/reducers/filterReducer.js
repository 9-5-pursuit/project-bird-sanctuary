import {
  LOAD_BIRDS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_BIRDS,
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === LOAD_BIRDS) {
    return {
      ...state,
      allBirds: [...action.payload],
      filteredBirds: [...action.payload],
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return {
      ...state,
      gridView: true,
    };
  }
  if (action.type === SET_LIST_VIEW) {
    return {
      ...state,
      gridView: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === SORT_BIRDS) {
    const { sort, filteredBirds } = state;
    let sortedBirds = [...filteredBirds];
    if (sort === "price-lowest") {
      sortedBirds = sortedBirds.sort((a, b) => a.amount - b.amount);
    }
    if (sort === "price-highest") {
      sortedBirds = sortedBirds.sort((a, b) => b.amount - a.amount);
    }
    if (sort === "name-a") {
      sortedBirds = sortedBirds.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      sortedBirds = sortedBirds.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filteredBirds: sortedBirds };
  }
  throw new Error(`No Matching action type ${action.type}`);
};

export default filterReducer;
