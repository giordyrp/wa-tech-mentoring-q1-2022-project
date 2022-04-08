import React from 'react';
import { useHistory } from 'react-router-dom';
import Section from '../Section';
import Button from '../Button';
import ProductList from '../ProductList';

interface FeaturedProductsProps {
  products: any;
  loading: boolean;
}
const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, loading }) => {
  const history = useHistory();

  const ViewProductsButton = (
    <Button color="primary" onClick={() => history.push('/products')}>
      View All Products
    </Button>
  );

  return (
    <Section title="Featured Products" action={ViewProductsButton}>
      <ProductList
        products={products}
        loading={loading}
        grid={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      />
    </Section>
  );
};

export default FeaturedProducts;
