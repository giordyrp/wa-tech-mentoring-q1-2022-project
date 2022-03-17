import React, { useEffect } from 'react';
import Home from '../Home';
import Products from '../Products';
import Product from '../Product';
import Search from '../Search';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Cart from '../Cart';
import Checkout from '../Checkout';

const routes = [
  {
    path: '/checkout',
    component: Checkout,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/product/:id',
    component: Product,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: ['/', 'home'],
    component: Home,
    exact: true,
  },
];

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('#root').scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
