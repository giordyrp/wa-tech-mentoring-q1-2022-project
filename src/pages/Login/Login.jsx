import React, { useState } from 'react';
import Form from '../../components/Form';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import { useAuthContext } from '../../contexts/authContext';

const FORM = {
  inputs: {
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
  },
  grid: { xs: 24 },
  button: {
    text: 'Login',
  },
};

const Login = () => {
  const [form, setForm] = useState(FORM);
  const { login, loading } = useAuthContext();

  return (
    <AuthLayout>
      <Form
        form={form}
        setForm={setForm}
        loading={loading}
        onSubmit={() =>
          login(form.inputs.email.value, form.inputs.password.value)
        }
      />
      <p>
        New to eHome? <Link to="/signup">Create an account</Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
