import React, { useEffect, useState } from 'react';
import ReactCodeInput from 'react-code-input';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import AuthLayout from '../AuthLayout';
import { useAuthContext } from '../../contexts/authContext';

interface ILocationState {
  email: string;
  password: string;
}

const VerificationCode = () => {
  const [code, setCode] = useState('');
  const location = useLocation<ILocationState>();
  const history = useHistory();
  const { user, confirmSignup, loading } = useAuthContext();

  const onConfirmSignup = () => {
    if (code.length === 6) {
      confirmSignup(location.state.email, location.state.password, code);
    }
  };

  useEffect(() => {
    return () => {
      history.replace(location.pathname, null);
      history.push('/');
    };
  }, []);

  return !location.state && !user.data ? (
    <Redirect to="/login" />
  ) : (
    <AuthLayout social={false}>
      <p>
        Necesitas verificar tu cuenta. Se ha enviado un código a tu correo electrónico.
      </p>
      <ReactCodeInput
        value={code}
        onChange={(code) => setCode(code)}
        name="code"
        inputMode="numeric"
        type="number"
        fields={6}
      />
      <LoadingButton
        variant="contained"
        color="primary"
        onClick={onConfirmSignup}
        loading={loading}
        fullWidth
      >
        Confirmar
      </LoadingButton>
    </AuthLayout>
  );
};

export default VerificationCode;
