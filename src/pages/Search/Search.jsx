import _ from 'lodash';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Layout from '../../components/Layout';
import ProductSearch from '../../components/ProductSearch';
import useQueryAPI from '../../hooks/useQueryAPI';

const productsQuery = [
  ['q', ['at', 'document.type', 'product']],
  ['lang', 'en-us'],
  ['pageSize', '20'],
];

const Search = () => {
  const location = useLocation();
  const products = useQueryAPI();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    const newProductsQuery = _.cloneDeep(productsQuery);
    if (params.has('q')) {
      newProductsQuery.push(['q', ['fulltext', 'document', params.get('q')]]);
    }

    if (params.has('page')) {
      const newPage = params.get('page');
      newProductsQuery.push(['page', newPage]);
    }

    products.setQuery(newProductsQuery);
  }, [location.search]);

  return (
    <Layout>
      <ProductSearch searchTerm={params.get('q')} products={products} />
    </Layout>
  );
};

export default Search;
