import React from 'react';
import { useHistory } from 'react-router-dom';
import FlexDiv from '../FlexDiv';
import * as Styled from './CategoryCard.styled';

interface CategoryCardProps extends Styled.CategoryCardPropsStyled {
  category?: any;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ category, width, margin }) => {
  const { slugs, data } = category;
  const {
    name,
    main_image: { url: coverSrc, alt: coverAlt },
  } = data;

  const history = useHistory();
  return (
    <Styled.CategoryCard
      cover={<Styled.Cover src={coverSrc} alt={coverAlt} />}
      width={width}
      margin={margin}
      onClick={() => history.push(`/products?category=${slugs[0]}`)}
    >
      <FlexDiv justify="center" align="center" width="-webkit-fill-available">
        <p>{name}</p>
      </FlexDiv>
    </Styled.CategoryCard>
  );
};

export default CategoryCard;