import React from 'react';
import { useParams } from 'react-router';
import useQueryAPI from '../../hooks/useQueryAPI';
import Spinner from '../../components/Spinner';
import ProductDetail from '../../components/ProductDetail';
import Layout from '../../components/Layout';

const Product = () => {
  const params = useParams();
  const product = useQueryAPI([
    ['q', ['at', 'document.type', 'product']],
    ['q', ['at', 'document.id', params.id]],
    ['lang', 'en-us'],
  ]);

  return <Layout>{product.loading ? <Spinner /> : <ProductDetail product={product.data.results[0]} />}</Layout>;
};

export default Product;
