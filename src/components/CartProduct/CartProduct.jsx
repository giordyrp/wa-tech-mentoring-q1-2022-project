import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button';
import CartProductCount from '../CartProductCount';
import Col from '../Col';
import * as Styled from './CartProduct.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';
import { useHistory } from 'react-router';
import { cartProductType } from '../../types';
import _ from 'lodash';

const CartProduct = React.memo(
  ({ product, setProductCount, removeProduct }) => {
    const {
      id,
      data: { name, mainimage, price, stock },
    } = product.data;
    const history = useHistory();

    return (
      <Styled.CartProduct justify="center" align="center">
        <Col xs={2}>
          <FlexDiv justify="center" align="center">
            <Styled.Image src={mainimage.url} alt={mainimage.alt} onClick={() => history.push(`/product/${id}`)} />
          </FlexDiv>
        </Col>
        <Col xs={4}>
          <Styled.Name onClick={() => history.push(`/product/${id}`)}>{name}</Styled.Name>
        </Col>
        <Col xs={3}>
          <CartProductCount count={product.count} setCount={setProductCount} removeProduct={removeProduct} stock={stock} id={id} inCart />
        </Col>
        <Col xs={1}>
          <p>${price}</p>
        </Col>
        <Col xs={1}>
          $<span data-testid="product-subtotal">{price * (!isNaN(parseInt(product.count)) ? product.count : 0)}</span>
        </Col>
        <Col xs={1}>
          <Button icon={<FontAwesomeIcon icon={faTrash} />} color="danger" onClick={() => removeProduct(id)} data-testid="remove-product-button" />
        </Col>
      </Styled.CartProduct>
    );
  },
  (prevProps, nextProps) => _.isEqual(prevProps.product, nextProps.product)
);

CartProduct.propTypes = {
  product: cartProductType.isRequired,
  setProductCount: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default CartProduct;
