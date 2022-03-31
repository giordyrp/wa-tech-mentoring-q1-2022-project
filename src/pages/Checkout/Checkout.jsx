import React, { useState } from 'react';
import CheckoutDetail from '../../components/CheckoutDetail';
import Layout from '../../components/Layout/Layout';
import useCart from '../../hooks/useCart';

const formStructure = {
  inputs: {
    fullName: {
      value: '',
      config: {
        element: {
          type: 'input',
          config: {
            id: 'fullName',
          }
        },
        label: 'Full Name'
      }
    },
    email: {
      value: '',
      config: {
        element: {
          type: 'input',
          config: {
            id: 'email',
            type: 'email',
          }
        },
        label: 'Email'
      }
    },
    zipCode: {
      value: '',
      config: {
        element: {
          type: 'input',
          config: {
            id: 'zipCode',
            type: 'number',
          }
        },
        label: 'Zip Code'
      }
    },
    notes: {
      value: '',
      config: {
        element: {
          type: 'textarea',
          config: {
            id: 'notes',
            rows: 6
          }
        },
        label: 'Notes'
      }
    }
  },
  grid: {
    xs: 12,
    md: 6
  },
  button: {
    text: 'Place Order',
    config: {
      color: 'primary',
      size: 'large',
    }
  }
};

const Checkout = () => {
  const [form, setForm] = useState(formStructure);
  const { cart, loading } = useCart();
  return (
    <Layout>
      <CheckoutDetail form={form} setForm={setForm} cart={cart} loading={loading}/>
    </Layout>
  );
};

export default Checkout;
