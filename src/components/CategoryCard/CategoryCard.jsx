import React from 'react';
import FlexDiv from '../FlexDiv';
import * as Styled from './CategoryCard.styled';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const CategoryCard = ({ category, width, margin }) => {
  const { slugs, data } = category;
  const {
    name,
    main_image: { url: coverSrc, alt: coverAlt },
  } =  data;

  const history = useHistory();
  return (
    <Styled.CategoryCard cover={<Styled.Cover src={coverSrc} alt={coverAlt} />} width={width} margin={margin} onClick={() => history.push(`/products?category=${slugs[0]}`)}>
      <FlexDiv justify="center" align="center" width="-webkit-fill-available">
        <p>{name}</p>
      </FlexDiv>
    </Styled.CategoryCard>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
};

export default CategoryCard;
