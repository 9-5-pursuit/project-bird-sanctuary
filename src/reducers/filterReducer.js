import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
} from "../actions";

const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allBirds: [...action.payload],
        filteredBirds: [...action.payload],
      };
    case SET_GRID_VIEW:
      return {
        ...state,
        gridView: true,
      };
    case SET_LIST_VIEW:
      return {
        ...state,
        gridView: false,
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    default:
      throw new Error(`No Matching action type ${action.type}`);
  }
};

export default filterReducer;
