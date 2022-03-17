import React, { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Row from '../Row';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import Spinner from '../Spinner';
import Empty from '../Empty';
import { useHistory } from 'react-router';
import { setParam } from '../../utils/functions';
import { ProductCartContext } from '../../contexts/productCartContext';

const ProductList = ({ products, loading, grid, pagination }) => {
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    setProductCountFromCart,
  } = useContext(ProductCartContext);
  const page = products.page;
  const totalPages = products.total_pages;
  const history = useHistory();
  const onChangePage = (page) => {
    history.push(setParam('page', page));
  };

  return (
    <>
      <Row wrap="wrap" justify="flex-start" data-testid="product-list">
        {loading ? (
          <Spinner />
        ) : products.results_size === 0 ? (
          <Empty message="No Results" />
        ) : (
          products.results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartProduct={cart.find(
                (cartProduct) => cartProduct.id === product.id
              )}
              addProductToCart={addProductToCart}
              removeProductFromCart={removeProductFromCart}
              setProductCountFromCart={setProductCountFromCart}
              grid={grid}
            />
          ))
        )}
      </Row>
      {!loading && pagination && products.results_size > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={onChangePage}
        />
      )}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  pagination: PropTypes.bool,
};

export default ProductList;
