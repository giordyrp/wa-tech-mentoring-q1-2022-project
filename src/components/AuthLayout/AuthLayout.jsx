import React from 'react';
import Paper from '@mui/material/Paper';
import Styled from './AuthLayout.styled';
import FlexDiv from '../FlexDiv';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const AuthLayout = ({ social = true, children }) => {
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
          )}
        </Styled.Content>
      </Paper>
    </Styled.Layout>
  );
};

export default AuthLayout;
