import React from 'react';
import CartProduct from '../CartProduct';
import Col from '../Col';
import Row from '../Row';
import Section from '../Section';
import Empty from '../Empty';
import * as Styled from './CartDetail.styled';
import PropTypes from 'prop-types';
import Button from '../Button';
import FlexDiv from '../FlexDiv';
import { useHistory } from 'react-router';
import Spinner from '../Spinner';
import { cartProductType } from '../../types';

const CartDetail = ({ loading, cart, setProductCount, removeProduct }) => {
  const history = useHistory();
  return (
    <Section title="Cart">
      {loading ? (
        <Spinner />
      ) : cart.length === 0 ? (
        <FlexDiv align="center" direction="column">
          <Empty message="Your cart is empty" />
          <Button color="primary" onClick={() => history.push('/products')}>
            View Products
          </Button>
        </FlexDiv>
      ) : (
        <>
          <Styled.StyledCard>
            <Row>
              <Col xs={6}></Col>
              <Col xs={3}>
                <Styled.ZeroMarginP>Quantity</Styled.ZeroMarginP>
              </Col>
              <Col xs={1}>
                <Styled.ZeroMarginP>Unit Price</Styled.ZeroMarginP>
              </Col>
              <Col xs={1}>
                <Styled.ZeroMarginP>Total Price</Styled.ZeroMarginP>
              </Col>
            </Row>
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} setProductCount={setProductCount} removeProduct={removeProduct} />
            ))}
            <Row>
              <Col xs={10}>
                <h3>Total</h3>
              </Col>
              <Col xs={2}>
                $<span data-testid="cart-total">{cart.reduce((acc, product) => acc + product.count * product.data.data.price, 0)}</span>
              </Col>
            </Row>
          </Styled.StyledCard>
          <FlexDiv justify="flex-end">
            <Button color="primary" size="large" onClick={() => history.push('/checkout')}>
              Proceed to Checkout
            </Button>
          </FlexDiv>
        </>
      )}
    </Section>
  );
};

CartDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(cartProductType).isRequired,
  setProductCount: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default CartDetail;
