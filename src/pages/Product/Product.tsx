import React from 'react';
import { useParams } from 'react-router-dom';
import useQueryApollo from 'hooks/useQueryApollo';
import { getProductById } from 'queries';
import Spinner from '../../components/Spinner';
import ProductDetail from '../../components/ProductDetail';
import Layout from '../../components/Layout';

const Product = () => {
  const params = useParams<{ id: string }>();

  const product = useQueryApollo('product', getProductById, {
    variables: { id: params.id },
  });

  return (
    <Layout>
      {product.loading ? <Spinner /> : <ProductDetail product={product.data} />}
    </Layout>
  );
};

export default Product;
