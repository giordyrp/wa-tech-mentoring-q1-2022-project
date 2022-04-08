import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './ProductCategoryFilter.styled';
import { Spinner } from '../Spinner/Spinner.styled';
import Checkbox from '../Checkbox';
import FlexDiv from '../FlexDiv';
import Button from '../Button';

interface ProductCategoryFilterProps {
  categories: any;
  loading: boolean;
  selected: string[];
  onSelect: (option: any) => void;
  onClear: () => void;
}

const ProductCategoryFilter: React.FC<ProductCategoryFilterProps> = ({
  categories,
  loading,
  selected,
  onSelect,
  onClear,
}) => {
  const options = categories.results?.map((category: any) => ({
    label: category.data.name,
    value: category.slugs[0],
  }));

  return (
    <Styled.ProductFilter>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <FlexDiv justify="space-between" align="center">
            <h3>Categories</h3>
            <Button
              color="primary"
              shape="circle"
              icon={<FontAwesomeIcon icon={faTimes} />}
              onClick={onClear}
            />
          </FlexDiv>
          <Checkbox.Group
            options={options}
            value={selected}
            onChange={onSelect}
            dataTestId="category-checkbox"
          />
        </>
      )}
    </Styled.ProductFilter>
  );
};

export default ProductCategoryFilter;
