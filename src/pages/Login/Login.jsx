import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Styled from './Login.styled';
import Form from '../../components/Form';
import { Link } from 'react-router-dom';
import FlexDiv from '../../components/FlexDiv';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const LOGIN_FORM = {
  inputs: {
    email: {
      value: '',
      config: {
        component: 'text-field',
        props: {
          id: 'email',
          required: true,
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
  const [form, setForm] = useState(LOGIN_FORM);
  return (
    <Styled.Layout>
      <Paper>
        <Styled.Content>
          <Styled.Logo />
          <Form form={form} setForm={setForm} />
          <p>
            New to eHome? <Link to="/signup">Create an account</Link>
          </p>
          <Styled.Divider>
            <span>or login with</span>
            <FlexDiv>
              <Styled.GoogleButton
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
              >
                Google
              </Styled.GoogleButton>
              <Styled.FacebookButton
                variant="outlined"
                startIcon={<FacebookIcon />}
                fullWidth
              >
                Facebook
              </Styled.FacebookButton>
            </FlexDiv>
          </Styled.Divider>
        </Styled.Content>
      </Paper>
    </Styled.Layout>
  );
};

export default Login;
