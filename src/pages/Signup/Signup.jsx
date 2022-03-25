import React, { useState } from 'react';
import Form from '../../components/Form';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';

const FORM = {
  inputs: {
    name: {
      value: '',
      config: {
        component: 'text-field',
        props: {
          id: 'name',
          required: true,
        },
        label: 'Name',
      },
    },
    email: {
      value: '',
      config: {
        component: 'text-field',
        props: {
          id: 'email',
          required: true,
          type: 'email',
        },
        label: 'Email',
      },
    },
    password: {
      value: '',
      config: {
        component: 'text-field',
        props: {
          id: 'password',
          required: true,
          type: 'password',
        },
        label: 'Password',
      },
    },
    confirmPassword: {
      value: '',
      config: {
        component: 'text-field',
        props: {
          id: 'confirmPassword',
          required: true,
          type: 'password',
        },
        label: 'Confirm Password',
        dependency: {
          input: 'password',
          type: 'password',
          message: 'Passwords do not match',
        },
      },
    },
  },
  grid: { xs: 24 },
  button: {
    text: 'Sign up',
  },
};

const Signup = () => {
  const [form, setForm] = useState(FORM);
  return (
    <AuthLayout>
      <Form form={form} setForm={setForm} onSubmit={() => 'Signup'} />
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
