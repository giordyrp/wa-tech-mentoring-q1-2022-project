import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import Header from '../Header';
import * as Styled from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <Styled.HeaderDiv>
        <Header />
      </Styled.HeaderDiv>
      <Styled.Content>
        <ErrorBoundary>{children}</ErrorBoundary>
      </Styled.Content>
      <div>
        <Footer />
      </div>
    </Styled.Layout>
  );
};

export default Layout;
