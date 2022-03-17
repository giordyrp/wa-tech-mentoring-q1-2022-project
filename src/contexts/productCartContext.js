import _ from 'lodash';
import { createContext, useEffect, useReducer } from 'react';

export const ProductCartContext = createContext();

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const { id, count } = action.payload;
      const productIndex = state.cart.findIndex(product => product.id === id);
      const newCart = _.cloneDeep(state.cart);
      if (productIndex >= 0) {
        newCart[productIndex].count += count;
      } else {
        newCart.push({ id, count });
      }
      return { cart: newCart };
    }
    case 'REMOVE_PRODUCT': {
      const { id } = action.payload;
      const productIndex = state.cart.findIndex(product => product.id === id);
      const newCart = _.cloneDeep(state.cart);
      newCart.splice(productIndex,1);
      return { cart: newCart };
    }
    case 'SET_COUNT': {
      const { id, count } = action.payload;
      const productIndex = state.cart.findIndex(product => product.id === id);
      const newCart = _.cloneDeep(state.cart);
      newCart[productIndex].count = count;
      return { cart: newCart };
    }
    default:
      return state;
  }
};

const ProductCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : initialState);

  const addProductToCart = (id, count) => dispatch({ type: 'ADD_PRODUCT', payload: { id, count } });
  const removeProductFromCart = (id) => dispatch({ type: 'REMOVE_PRODUCT', payload: { id } });
  const setProductCountFromCart  = (id, count) => dispatch({ type: 'SET_COUNT', payload: { id, count } });

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const value = {
    ...state,
    addProductToCart,
    removeProductFromCart,
    setProductCountFromCart,
  };

  return <ProductCartContext.Provider value={value}>{children}</ProductCartContext.Provider>;
};

export default ProductCartProvider;
