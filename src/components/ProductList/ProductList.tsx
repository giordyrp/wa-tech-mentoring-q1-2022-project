import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IGrid } from 'types';
import ProductCard from '../ProductCard/ProductCard';
import Row from '../Row';
import Pagination from '../Pagination';
import Spinner from '../Spinner';
import Empty from '../Empty';
import { setParam } from '../../utils/functions';
import { ProductCartContext } from '../../contexts/productCartContext';

interface ProductListProps {
  products: any;
  loading: boolean;
  pagination?: boolean;
  grid: IGrid;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
  grid,
  pagination,
}) => {
  const { cart, addProductToCart, removeProductFromCart, setProductCountFromCart } =
    useContext(ProductCartContext);
  const { page } = products;
  const totalPages = products.total_pages;
  const history = useHistory();
  const onChangePage = (page: number) => {
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
          products.results?.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
              cartProduct={cart.find((cartProduct: any) => cartProduct.id === product.id)}
              addProductToCart={addProductToCart}
              removeProductFromCart={removeProductFromCart}
              setProductCountFromCart={setProductCountFromCart}
              grid={grid}
            />
          ))
        )}
      </Row>
      {!loading && pagination && products.results_size > 0 && (
        <Pagination page={page} totalPages={totalPages} onChange={onChangePage} />
      )}
    </>
  );
};

export default ProductList;
