import React from 'react';
import Col from '../Col';
import * as Styled from './CheckoutProduct.styled';
import FlexDiv from '../FlexDiv';
import { useHistory } from 'react-router';
import { cartProductType } from '../../types';

const CartProduct = ({ product }) => {
  const {
    id,
    data: { name, mainimage, price },
  } = product.data;
  const history = useHistory();

  return (
    <Styled.CartProduct justify="center" align="center">
      <Col xs={3}>
        <FlexDiv justify="center" align="center">
          <Styled.Image
            src={mainimage.url}
            alt={mainimage.alt}
            onClick={() => history.push(`/product/${id}`)}
          />
        </FlexDiv>
      </Col>
      <Col xs={5}>
        <Styled.Name onClick={() => history.push(`/product/${id}`)}>{name}</Styled.Name>
      </Col>
      <Col xs={1}>
        <p>{product.count}</p>
      </Col>
      <Col xs={3}>${price * (!isNaN(parseInt(product.count)) ? product.count : 0)}</Col>
    </Styled.CartProduct>
  );
};

CartProduct.propTypes = {
  product: cartProductType.isRequired,
};

export default CartProduct;
