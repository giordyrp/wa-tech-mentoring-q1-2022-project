import React, { useEffect, useState } from 'react';
import ReactCodeInput from 'react-code-input';
import { Redirect, useHistory, useLocation } from 'react-router';
import AuthLayout from '../AuthLayout';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuthContext } from '../../contexts/authContext';

const VerificationCode = () => {
  const [code, setCode] = useState('');
  const location = useLocation();
  const history = useHistory();
  const { user, confirmSignup, loading } = useAuthContext();

  const onConfirmSignup = () => {
    if (code.length === 6) {
      confirmSignup(location.state.email, location.state.password, code);
    } else {
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
        Necesitas verificar tu cuenta. Se ha enviado un código a tu correo
        electrónico.
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
