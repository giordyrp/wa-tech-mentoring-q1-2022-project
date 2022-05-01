import { useContext } from 'react';
import { getProducts } from '../queries';
import { ProductCartContext } from '../contexts/productCartContext';
import useQueryApollo from './useQueryApollo';

const useCart = () => {
  const productCartContext = useContext(ProductCartContext);
  const { cart } = productCartContext;

  const products = useQueryApollo('products', getProducts, {
    variables: {
      query: {
        _id: cart.map((product) => product.id),
      },
    },
  });

  const cartWithData = cart.map((cartProduct) => ({
    ...cartProduct,
    data: products.data?.items?.find((product) => product.id === cartProduct.id),
  }));

  return {
    ...productCartContext,
    loading: products.loading,
    cart: cartWithData,
  };
};

export default useCart;
