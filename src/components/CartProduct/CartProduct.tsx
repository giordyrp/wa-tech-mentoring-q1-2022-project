import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import _isEqual from 'lodash/isEqual';
import Button from '../Button';
import CartProductCount from '../CartProductCount';
import Col from '../Col';
import * as Styled from './CartProduct.styled';
import FlexDiv from '../FlexDiv';
import { ICartProduct } from '../../types';

interface CartProductProps {
  product: ICartProduct;
  setProductCount: (id: string, count: number) => void;
  removeProduct: (id: string) => void;
}

const CartProduct: React.FC<CartProductProps> = React.memo(
  ({ product, setProductCount, removeProduct }) => {
    const {
      data: {
        id,
        name,
        images: [image],
        price,
        stock,
      },
    } = product;
    const history = useHistory();

    return (
      <Styled.CartProduct justify="center" align="center">
        <Col xs={2}>
          <FlexDiv justify="center" align="center">
            <Styled.Image
              src={image.url}
              alt={image.alt}
              onClick={() => history.push(`/product/${id}`)}
            />
          </FlexDiv>
        </Col>
        <Col xs={4}>
          <Styled.Name onClick={() => history.push(`/product/${id}`)}>{name}</Styled.Name>
        </Col>
        <Col xs={3}>
          <CartProductCount
            count={product.count}
            setCount={setProductCount}
            removeProduct={removeProduct}
            stock={stock}
            id={id}
            inCart
          />
        </Col>
        <Col xs={1}>
          <p>${price}</p>
        </Col>
        <Col xs={1}>
          $
          <span data-testid="product-subtotal">
            {
              /* price * (!isNaN(parseInt(product.count)) ? product.count : 0) */
              price * product.count
            }
          </span>
        </Col>
        <Col xs={1}>
          <Button
            icon={<FontAwesomeIcon icon={faTrash} />}
            color="danger"
            onClick={() => removeProduct(id)}
            data-testid="remove-product-button"
          />
        </Col>
      </Styled.CartProduct>
    );
  },
  (prevProps, nextProps) => _isEqual(prevProps.product, nextProps.product)
);

export default CartProduct;
