import { useContext } from 'react';
import { ProductCartContext } from '../contexts/productCartContext';
import useQueryAPI from './useQueryAPI';

const useCart = () => {
  const productCartContext = useContext(ProductCartContext);
  const { cart } = productCartContext;

  const products = useQueryAPI([
    ['q', ['at', 'document.type', 'product']],
    ['q', ['in', 'document.id', cart.map((product) => product.id)]],
    ['lang', 'en-us'],
    ['pageSize', '20'],
  ]);

  const cartWithData = cart.map((cartProduct) => ({
    ...cartProduct,
    data: products.data.results?.find(
      (product) => product.id === cartProduct.id
    ),
  }));

  return {
    ...productCartContext,
    loading: products.loading,
    cart: cartWithData,
  };
};

export default useCart;
