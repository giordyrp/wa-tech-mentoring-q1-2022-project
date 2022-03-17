import React from 'react';
import { cartProductType, formType } from '../../types';
import Col from '../Col';
import Form from '../Form';
import Row from '../Row';
import Section from '../Section';
import PropTypes from 'prop-types';
import CheckoutProduct from '../CheckoutProduct';
import Spinner from '../Spinner';
import Button from '../Button';
import { useHistory } from 'react-router';
import * as Styled from './CheckoutDetail.styled';

const CheckoutDetail = ({ form, setForm, cart, loading }) => {
  const history = useHistory();

  return (
    <Section title="Checkout">
      <Row gutter={30}>
        <Styled.BillingCol xs={12} md={7}>
          <h3>Billing Details</h3>
          <Form form={form} setForm={setForm} />
          Need to modify something? <Button color="white" onClick={() => history.push('/cart')}>Go Back to Cart</Button>
        </Styled.BillingCol>
        <Styled.OrderCol xs={12} md={5}>
          <h3>Your Order</h3>
          {loading ? (
            <Spinner />
          ) : (
            <Styled.StyledCard>
              {cart.map((product) => (
                <CheckoutProduct key={product.id} product={product} />
              ))}
              <Row>
                <Col xs={9}>
                  <h3>Total</h3>
                </Col>
                <Col xs={3}>
                  <p>
                    $
                    {cart.reduce(
                      (acc, product) => acc + product.count * product.data.data.price,
                      0
                    )}
                  </p>
                </Col>
              </Row>
            </Styled.StyledCard>
          )}
        </Styled.OrderCol>
      </Row>
    </Section>
  );
};

CheckoutDetail.propTypes = {
  form: formType.isRequired,
  setForm: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(cartProductType).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CheckoutDetail;
