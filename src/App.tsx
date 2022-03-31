import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './contexts/authContext';
import VerificationCode from './components/VerificationCode';

type TRoute = {
  path: string | string[];
  component: React.FunctionComponent;
  exact?: boolean;
};

const AuthRoutes: TRoute[] = [
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
    path: ['/', '/home'],
    component: Home,
    exact: true,
  },
];

const NoAuthRoutes: TRoute[] = [
  {
    path: '/verify-account',
    component: VerificationCode,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/login',
    component: Login,
  },
];

function App() {
  const { user } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    document.querySelector('#root')?.scrollTo(0, 0);
  }, [location.pathname]);

  const routes = user.data ? AuthRoutes : NoAuthRoutes;
  const redirectUrl = user.data ? '/' : '/login';
  return !user || user.loading ? (
    <CircularProgress />
  ) : (
    <Switch>
      {routes.map((route) => (
        <Route
          key={typeof route.path === 'string' ? route.path : route.path[0]}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect to={redirectUrl} />
    </Switch>
  );
}

export default App;
