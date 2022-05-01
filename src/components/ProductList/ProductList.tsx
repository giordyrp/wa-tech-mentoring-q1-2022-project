import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IGrid, ProductsResponse } from 'types';
import ProductCard from '../ProductCard/ProductCard';
import Row from '../Row';
import Pagination from '../Pagination';
import Spinner from '../Spinner';
import Empty from '../Empty';
import { setParam } from '../../utils/functions';
import { ProductCartContext } from '../../contexts/productCartContext';

interface ProductListProps {
  products: ProductsResponse;
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
  const { page = 1, pages: totalPages = 0 } = products?.pagination || {};
  const history = useHistory();
  const onChangePage = (page: number) => {
    history.push(setParam('page', page));
  };

  return (
    <>
      <Row wrap="wrap" justify="flex-start" data-testid="product-list">
        {loading ? (
          <Spinner />
        ) : products.count === 0 ? (
          <Empty message="No Results" />
        ) : (
          products.items?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartProduct={cart.find((cartProduct) => cartProduct.id === product.id)!}
              addProductToCart={addProductToCart}
              removeProductFromCart={removeProductFromCart}
              setProductCountFromCart={setProductCountFromCart}
              grid={grid}
            />
          ))
        )}
      </Row>
      {!loading && pagination! && products.count! > 0 && (
        <Pagination page={page!} totalPages={totalPages!} onChange={onChangePage} />
      )}
    </>
  );
};

export default ProductList;
