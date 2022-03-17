import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import ProductList from '../ProductList';
import * as Styled from './ProductSearch.styled';

const ProductSearch = ({ searchTerm, products }) => {
  return (
    <Section>
      <h3>
        Results of the search: <Styled.SearchTerm>{searchTerm}</Styled.SearchTerm>
      </h3>
      <ProductList products={products.data} loading={products.loading} grid={{ xs: 12, sm: 6, md: 3 }} pagination />
    </Section>
  );
};

ProductSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  products: PropTypes.object.isRequired,
};

export default ProductSearch;
