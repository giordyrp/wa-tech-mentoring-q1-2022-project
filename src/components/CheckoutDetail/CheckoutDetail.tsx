import React from 'react';
import { ICartProduct } from 'types';
import { useHistory } from 'react-router-dom';
import { IForm } from 'components/Form/Form.type';
import Col from '../Col';
import Form from '../Form';
import Row from '../Row';
import Section from '../Section';
import CheckoutProduct from '../CheckoutProduct';
import Spinner from '../Spinner';
import Button from '../Button';
import * as Styled from './CheckoutDetail.styled';

interface CheckoutDetailProps {
  form: IForm;
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
  cart: ICartProduct[];
  loading: boolean;
}

const CheckoutDetail: React.FC<CheckoutDetailProps> = ({
  form,
  setForm,
  cart,
  loading,
}) => {
  const history = useHistory();

  return (
    <Section title="Checkout">
      <Row gutter={30}>
        <Styled.BillingCol xs={12} md={7}>
          <h3>Billing Details</h3>
          <Form form={form} setForm={setForm} />
          Need to modify something?{' '}
          <Button color="white" onClick={() => history.push('/cart')}>
            Go Back to Cart
          </Button>
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
                      (acc, product) => acc + product.count * product.data.price,
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

export default CheckoutDetail;
