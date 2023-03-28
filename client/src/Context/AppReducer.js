import {
  SHOW_PRODUCT_LIST,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
  SET_ALERT,
  REMOVE_ALERT,
  GET_SINGLE_PRODUCT
} from "./types";

const appReducer = (state, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_LIST: {
      return {
        ...state,
        productList: action?.payload,
        selectedProduct: {}
      }
    }
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        selectedProduct: action?.payload
      }
    }
    case ADD_PRODUCT: {
      return {
        ...state
      }
    }
    case UPDATE_PRODUCT: {
      const index = state.productList.findIndex(p => p?.productId === action?.payload?.productId); 
      let pList = [...state?.productList]
      pList[index] = action?.payload
      return {
        ...state,
        productList: pList
      }
    }
    case SEARCH_PRODUCT: {
      return {
        ...state
      }
    }
    case SET_ALERT: {
      return {
        ...state,
        alerts: [...state.alerts, action?.payload],
      }
    }
    case REMOVE_ALERT: {
      return {
        ...state,
        alerts: state?.alerts?.filter((alert) => alert.id !== action?.payload),
      }
    }
    default: {
      return state;
    }
  }
};

export default appReducer;