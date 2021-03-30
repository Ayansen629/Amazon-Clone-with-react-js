import React, { createContext, useContext, useReducer } from "react";

//prepare the datalayout
export const StateContext = createContext();

//wrap our App provide the Date layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
