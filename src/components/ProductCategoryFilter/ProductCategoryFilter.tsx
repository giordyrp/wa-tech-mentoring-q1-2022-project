import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as types from 'types/';
import * as Styled from './ProductCategoryFilter.styled';
import { Spinner } from '../Spinner/Spinner.styled';
import Checkbox from '../Checkbox';
import FlexDiv from '../FlexDiv';
import Button from '../Button';

interface ProductCategoryFilterProps {
  categories: types.CategoriesResponse;
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
  const options = categories?.items?.map((category: any) => ({
    label: category.name,
    value: category.slug,
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
