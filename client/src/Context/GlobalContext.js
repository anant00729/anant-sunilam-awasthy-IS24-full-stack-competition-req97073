import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
SHOW_PRODUCT_LIST,
ADD_PRODUCT,
UPDATE_PRODUCT,
SEARCH_PRODUCT,
SET_ALERT,
REMOVE_ALERT,
GET_SINGLE_PRODUCT
} from "./types";
import { v4 as uuidv4 } from "uuid";

// import useCropGrid from '../hooks/useCropGrid'

// Initial state
const initialState = {
  productList: [],
  currentProduct: {},
  alerts: [],
  selectedProduct: {}
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const { getCropTypeDetails, getLandElevation, getVanGenuchtenParams } = useCropGrid() 

  // Actions
  const getAllProducts = async () => {
    const url = 'http://localhost:5010/api/getProductList';
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      if (res.status){
        dispatch({
          type: SHOW_PRODUCT_LIST,
          payload: res?.productList,
        });
      }else {
        setAlert(res.message)  
      }
    } catch (err) {
      setAlert(`Error fetching ${url}: ${err}`)
    }
  };

  const addProduct = async (product, navigate) => {
    const url = 'http://localhost:5010/api/addProduct';

    product = {
      ...product,
      productId: uuidv4().split('-')[0]
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const res = await response.json();
  
      if (res.status) {
        navigate('/')
        setAlert('Product added successfully!')
      } else {
        setAlert('Failed to add product:', res.message)
      }
    } catch (err) {
      setAlert(`Error adding product: ${err}`);
    }
  };
  
  const updateProduct = async (product, navigate) => {
    const url = `http://localhost:5010/api/updateProduct`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const res = await response.json();
      if (res.status){
        dispatch({
          type: UPDATE_PRODUCT,
          payload: res.product,
        });
        navigate('/')
        setAlert('Product updated successfully!')
      }else {
        setAlert(res.message)  
      }
    } catch (err) {
      setAlert(`Error fetching product: ${err}`);
      return;
    }
  }

  const search = async () => {
    
  }

  const getSingleProductDetails = async (productId) => {
    const url = `http://localhost:5010/api/product/${productId}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const res = await response.json();
      if (res.status){
        dispatch({
          type: GET_SINGLE_PRODUCT,
          payload: res.product,
        });
      }else {
        setAlert(res.message)  
      }
    } catch (err) {
      setAlert(`Error fetching product: ${err}`);
      return;
    }
  };
  
  
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
        productList: state?.productList,
        currentProduct: state?.currentProduct,
        alerts: state?.alerts,
        selectedProduct: state?.selectedProduct,
        getAllProducts,
        addProduct,
        updateProduct,
        search,
        setAlert,
        getSingleProductDetails
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};