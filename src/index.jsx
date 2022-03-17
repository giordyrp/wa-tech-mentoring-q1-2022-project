import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductCartProvider from './contexts/productCartContext';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ProductCartProvider>
      <Theme>
        <GlobalStyle />
        <BrowserRouter>
          <App />
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
