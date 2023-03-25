import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
SHOW_PRODUCT_LIST,
ADD_PRODUCT,
UPDATE_PRODUCT,
SEARCH_PRODUCT
} from "./types";
// import useCropGrid from '../hooks/useCropGrid'

// Initial state
const initialState = {
  product_list: {},
  current_product: {}
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

  return (
    <GlobalContext.Provider
      value={{
        product_list: state.product_list,
        current_product: state.current_product,
        getAllProducts,
        addProduct,
        updateProduct,
        search
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};