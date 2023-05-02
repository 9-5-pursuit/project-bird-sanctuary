import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/birdsReducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_BIRDS,
  GET_BIRDS_ERROR,
  GET_BIRDS_SUCCESS,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  birdsLoaded: false,
  birdsError: false,
  birds: [],
  singleBirdLoaded: false,
  singleBirdError: false,
  singleBird: {},
};

const BirdsContext = React.createContext();

export const BirdsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchBirds = async () => {
    dispatch({ type: GET_BIRDS });
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      dispatch({ type: GET_BIRDS_SUCCESS, payload: data });
      // console.log(data);
    } catch (error) {
      dispatch({ type: GET_BIRDS_ERROR });
    }
  };

  useEffect(() => {
    fetchBirds();
  }, []);

  return (
    <BirdsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </BirdsContext.Provider>
  );
};

export const useBirdsContext = () => {
  return useContext(BirdsContext);
};
