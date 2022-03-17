import React from 'react';
import * as Styled from './ProductCard.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CartProductCount from '../CartProductCount';
import { useHistory } from 'react-router';
import _ from 'lodash';
import { gridType } from '../../types';
import Col from '../Col';

const ProductCard = React.memo(
  ({ product, cartProduct, addProductToCart, removeProductFromCart, setProductCountFromCart, grid }) => {
    const { id, data } = product;
    const {
      name,
      category: { slug: category },
      price,
      mainimage: { url: imageSrc, alt: imageAlt },
      stock,
    } = data;

    const history = useHistory();
    return (
      <Col {...grid}>
        <Styled.ProductCard cover={<Styled.Image src={imageSrc} alt={imageAlt} />} onClick={() => history.push(`/product/${id}`)} data-testid="product-card">
          <Styled.StyledFlexDiv direction="column" align="flex-start" width="100%">
            <Styled.Category data-testid="product-card-category">{category}</Styled.Category>
            <Styled.Name data-testid="product-name">{name}</Styled.Name>
            <FlexDiv justify="space-between" align="center" width="100%" onClick={(e) => e.stopPropagation()}>
              <Styled.Price>${price}</Styled.Price>
              {cartProduct ? (
                <CartProductCount count={cartProduct.count} setCount={setProductCountFromCart} removeProduct={removeProductFromCart} stock={stock} id={id} inCart />
              ) : (
                <Button color="primary" shape="circle" icon={<FontAwesomeIcon icon={faPlus} />} onClick={() => addProductToCart(id, 1)} data-testid="add-to-cart-button" />
              )}
            </FlexDiv>
          </Styled.StyledFlexDiv>
        </Styled.ProductCard>
      </Col>
    );
  },
  (prevProps, nextProps) => _.isEqual(prevProps.cartProduct, nextProps.cartProduct)
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  cartProduct: PropTypes.object,
  addProductToCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  setProductCountFromCart: PropTypes.func.isRequired,
  grid: gridType,
};

export default ProductCard;
