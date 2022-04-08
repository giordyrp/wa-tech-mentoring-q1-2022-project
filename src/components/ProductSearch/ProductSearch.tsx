import React from 'react';
import Section from '../Section';
import ProductList from '../ProductList';
import * as Styled from './ProductSearch.styled';

interface ProductSearchProps {
  searchTerm: string;
  products: any;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ searchTerm, products }) => {
  return (
    <Section>
      <h3>
        Results of the search: <Styled.SearchTerm>{searchTerm}</Styled.SearchTerm>
      </h3>
      <ProductList
        products={products.data}
        loading={products.loading}
        grid={{ xs: 12, sm: 6, md: 3 }}
        pagination
      />
    </Section>
  );
};

export default ProductSearch;
