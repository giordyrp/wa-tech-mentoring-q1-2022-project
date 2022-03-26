import React, { useState } from 'react';
import Form from '../../components/Form';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import { useAuthContext } from '../../contexts/authContext';
import { PASSWORD_REGEX } from '../../constants';

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
        regex: {
          pattern: PASSWORD_REGEX,
          message: 'Password must contain 8 characters or more',
        },
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
        regex: {
          pattern: PASSWORD_REGEX,
          message: 'Password must contain 8 characters or more',
        },
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
  const { signup, loading } = useAuthContext();
  return (
    <AuthLayout>
      <Form
        form={form}
        setForm={setForm}
        loading={loading}
        onSubmit={() =>
          signup(form.inputs.email.value, form.inputs.password.value)
        }
      />
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
