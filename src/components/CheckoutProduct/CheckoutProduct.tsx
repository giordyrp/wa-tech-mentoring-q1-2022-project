import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from '../Col';
import * as Styled from './CheckoutProduct.styled';
import FlexDiv from '../FlexDiv';
import { ICartProduct } from '../../types';

interface CartProductProps {
  product: ICartProduct;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
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
      <Col xs={3}>
        ${price * (!Number.isNaN(parseInt(`${product.count}`)) ? product.count : 0)}
      </Col>
    </Styled.CartProduct>
  );
};

export default CartProduct;
