import React, { createContext, useEffect, useReducer } from 'react';
import _ from 'lodash';
import { ICartProduct } from 'types';

interface ProductCartContextStateInterface {
  cart: ICartProduct[];
}

interface ProductCartContextValueInterface {
  cart: ICartProduct[];
  addProductToCart: (id: string, count: number) => void;
  removeProductFromCart: (id: string) => void;
  setProductCountFromCart: (id: string, count: number) => void;
}

type ActionType =
  | { type: 'ADD_PRODUCT'; payload: { id: string; count: number } }
  | { type: 'REMOVE_PRODUCT'; payload: { id: string } }
  | { type: 'SET_COUNT'; payload: { id: string; count: number } };

const initialState: ProductCartContextStateInterface = {
  cart: [],
};

export const ProductCartContext = createContext<ProductCartContextValueInterface>(null!);

const reducer = (state: ProductCartContextStateInterface, action: ActionType) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const { id, count } = action.payload;
      const productIndex = state.cart.findIndex((product) => product.id === id);
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
      const productIndex = state.cart.findIndex((product) => product.id === id);
      const newCart = _.cloneDeep(state.cart);
      newCart.splice(productIndex, 1);
      return { cart: newCart };
    }
    case 'SET_COUNT': {
      const { id, count } = action.payload;
      const productIndex = state.cart.findIndex((product) => product.id === id);
      const newCart = _.cloneDeep(state.cart);
      newCart[productIndex].count = count;
      return { cart: newCart };
    }
    default:
      return state;
  }
};

interface ProductCartProviderProps {
  children: React.ReactNode;
}
const ProductCartProvider = ({ children }: ProductCartProviderProps) => {
  const [state, dispatch] = useReducer(
    reducer,
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') ?? '{}')
      : initialState
  );

  const addProductToCart = (id: string, count: number) =>
    dispatch({ type: 'ADD_PRODUCT', payload: { id, count } });
  const removeProductFromCart = (id: string) =>
    dispatch({ type: 'REMOVE_PRODUCT', payload: { id } });
  const setProductCountFromCart = (id: string, count: number) =>
    dispatch({ type: 'SET_COUNT', payload: { id, count } });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    ...state,
    addProductToCart,
    removeProductFromCart,
    setProductCountFromCart,
  };

  return (
    <ProductCartContext.Provider value={value}>{children}</ProductCartContext.Provider>
  );
};

export default ProductCartProvider;
