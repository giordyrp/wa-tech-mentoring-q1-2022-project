import { IForm } from 'components/Form/Form.type';
import React, { useState } from 'react';
import CheckoutDetail from '../../components/CheckoutDetail';
import Layout from '../../components/Layout/Layout';
import useCart from '../../hooks/useCart';

const formStructure: IForm = {
  inputs: {
    fullName: {
      value: '',
      config: {
        component: 'text-field',
        props: {
          id: 'fullName',
        },
        label: 'Full Name',
      },
    },
    email: {
      value: '',
      config: {
        component: 'text-field',
        props: {
          id: 'email',
          type: 'email',
        },
        label: 'Email',
      },
    },
    zipCode: {
      value: '',
      config: {
        component: 'input',
        props: {
          id: 'zipCode',
          type: 'number',
        },

        label: 'Zip Code',
      },
    },
    notes: {
      value: '',
      config: {
        component: 'textarea',
        props: {
          id: 'notes',
          rows: 6,
        },
        label: 'Notes',
      },
    },
  },
  grid: {
    xs: 12,
    md: 6,
  },
  button: {
    text: 'Place Order',
  },
};

const Checkout = () => {
  const [form, setForm] = useState(formStructure);
  const { cart, loading } = useCart();
  return (
    <Layout>
      <CheckoutDetail form={form} setForm={setForm} cart={cart} loading={loading} />
    </Layout>
  );
};

export default Checkout;
