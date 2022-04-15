import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductCartProvider from './contexts/productCartContext';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import awsConfig from './aws-exports';
import { AuthProvider } from './contexts/authContext';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const [localRedirectSignIn, productionRedirectSignIn] =
  awsConfig.oauth.redirectSignIn.split(',');

const [localRedirectSignOut, productionRedirectSignOut] =
  awsConfig.oauth.redirectSignOut.split(',');

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  },
};

Amplify.configure(updatedAwsConfig);

const client = new ApolloClient({
  uri: `${awsConfig.aws_cloud_logic_custom[0].endpoint}/graphql`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ProductCartProvider>
      <Theme>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <ApolloProvider client={client}>
              <App />
            </ApolloProvider>
          </AuthProvider>
        </BrowserRouter>
      </Theme>
    </ProductCartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
