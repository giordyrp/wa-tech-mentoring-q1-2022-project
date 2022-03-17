import React from 'react';
import Section from '../Section';
import PropTypes from 'prop-types';
import Button from '../Button';
import { useHistory } from 'react-router';
import ProductList from '../ProductList';

const FeaturedProducts = ({ products, loading }) => {
  const history = useHistory();

  const ViewProductsButton = (
    <Button color="primary" onClick={() => history.push('/products')}>
      View All Products
    </Button>
  );

  return (
    <Section title="Featured Products" action={ViewProductsButton}>
      <ProductList products={products} loading={loading} grid={{ xs: 12, sm: 6, md: 4, lg: 3}} />
    </Section>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default FeaturedProducts;
