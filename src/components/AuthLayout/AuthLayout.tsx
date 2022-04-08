import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import FlexDiv from '../FlexDiv';
import Styled from './AuthLayout.styled';
import { useAuthContext } from '../../contexts/authContext';

interface AuthLayoutProps {
  social?: boolean;
}

const defaultProps = {
  social: true,
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ social, children }) => {
  const { error, loginProvider } = useAuthContext();
  const [showError, setShowError] = useState(false);

  const closeError = () => setShowError(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  return (
    <Styled.Layout>
      <Paper>
        <Styled.Content>
          <Styled.Logo />
          {children}
          {social && (
            <Styled.Divider>
              <span>or log in with</span>
              <FlexDiv>
                <Styled.GoogleButton
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={() => loginProvider('Google')}
                  fullWidth
                >
                  Google
                </Styled.GoogleButton>
                <Styled.FacebookButton
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  onClick={() => loginProvider('Facebook')}
                  fullWidth
                >
                  Facebook
                </Styled.FacebookButton>
              </FlexDiv>
            </Styled.Divider>
          )}
        </Styled.Content>
      </Paper>
      <Snackbar open={showError} autoHideDuration={7000} onClose={closeError}>
        <Alert severity="error">{error ? error.message : ''}</Alert>
      </Snackbar>
    </Styled.Layout>
  );
};

AuthLayout.defaultProps = defaultProps;

export default AuthLayout;
