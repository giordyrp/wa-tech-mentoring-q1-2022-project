import React from 'react';
import * as Styled from './ProductCategoryFilter.styled';
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner/Spinner.styled';
import Checkbox from '../Checkbox';
import FlexDiv from '../FlexDiv';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductCategoryFilter = ({ categories, loading, selected, onSelect, onClear }) => {
  const options = categories.results?.map((category) => ({ label: category.data.name, value: category.slugs[0] }));

  return (
    <Styled.ProductFilter>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <FlexDiv justify="space-between" align="center">
            <h3>Categories</h3>
            <Button color="primary" shape="circle" icon={<FontAwesomeIcon icon={faTimes} />} onClick={onClear} />
          </FlexDiv>

          <Checkbox.Group options={options} value={selected} onChange={onSelect} dataTestId="category-checkbox" />
        </>
      )}
    </Styled.ProductFilter>
  );
};

ProductCategoryFilter.propTypes = {
  categories: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default ProductCategoryFilter;
