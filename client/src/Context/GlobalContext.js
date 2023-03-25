import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
SHOW_PRODUCT_LIST,
ADD_PRODUCT,
UPDATE_PRODUCT,
SEARCH_PRODUCT,
SET_ALERT,
REMOVE_ALERT
} from "./types";
import { v4 as uuidv4 } from "uuid";
// import useCropGrid from '../hooks/useCropGrid'

// Initial state
const initialState = {
  product_list: {},
  current_product: {},
  alerts: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const { getCropTypeDetails, getLandElevation, getVanGenuchtenParams } = useCropGrid() 

  // Actions
  const getAllProducts = async () => {

  }

  const addProduct = async () => {
    
  }

  const updateProduct = async () => {
    
  }

  const search = async () => {
    
  }
  
  const setAlert = (msg, timeout = 2500) => {
    if (msg) {
      const id = uuidv4();
      dispatch({
        type: SET_ALERT,
        payload: { msg, id },
      });
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        product_list: state?.product_list,
        current_product: state?.current_product,
        alerts: state?.alerts,
        getAllProducts,
        addProduct,
        updateProduct,
        search,
        setAlert
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};