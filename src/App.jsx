import React, { useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Search from './pages/Search';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './contexts/authContext';
import { CircularProgress } from '@mui/material';

const AuthRoutes = [
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
    path: '/signup',
    component: Signup,
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

const NoAuthRoutes = [
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/login',
    component: Login,
  },
];

const App = () => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  console.log({ loading });
  useEffect(() => {
    document.querySelector('#root').scrollTo(0, 0);
  }, [location.pathname]);

  const routes = user ? AuthRoutes : NoAuthRoutes;
  const redirectUrl = user ? '/' : '/login';
  return loading ? (
    <CircularProgress />
  ) : (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={redirectUrl} />
    </Switch>
  );
};

export default App;
