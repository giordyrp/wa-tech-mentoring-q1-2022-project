import React from 'react';
import CartDetail from '../../components/CartDetail';
import Layout from '../../components/Layout/Layout';
import useCart from '../../hooks/useCart';

const Cart = () => {
  const { cart, loading, setProductCountFromCart, removeProductFromCart } = useCart();

  return (
    <Layout>
      <CartDetail loading={loading} cart={cart} setProductCount={setProductCountFromCart} removeProduct={removeProductFromCart} />
    </Layout>
  );
};

export default Cart;
