import {
  SHOW_PRODUCT_LIST,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT
} from "./types";

const appReducer = (state, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_LIST: {
      return {
        ...state
      }
    }
    case ADD_PRODUCT: {
      return {
        ...state
      }
    }
    case UPDATE_PRODUCT: {
      return {
        ...state
      }
    }
    case SEARCH_PRODUCT: {
      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }
};

export default appReducer;