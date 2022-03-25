import React, { useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Search from './pages/Search';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

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
    path: '/login',
    component: Login,
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
