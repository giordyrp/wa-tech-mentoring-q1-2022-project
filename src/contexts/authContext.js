import { createContext, useContext, useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useHistory } from 'react-router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ data: null, loading: true });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const asyncHandler =
    (fn) =>
    (...args) => {
      setLoading(true);
      setError(null);
      fn(...args)
        .catch(setError)
        .finally(() => {
          setLoading(false);
        });
    };

  const signup = asyncHandler(async (name, email, password) => {
    await Auth.signUp({
      username: email,
      password,
      attributes: {
        name,
        email,
      },
    });
    history.push('/verify-account', {
      email,
      password,
    });
  });

  const login = asyncHandler(async (email, password) => {
    await Auth.signIn(email, password);
  });

  const confirmSignup = asyncHandler(async (email, password, code) => {
    await Auth.confirmSignUp(email, code);
    await login(email, password);
  });

  const logout = asyncHandler(async () => {
    await Auth.signOut();
  });

  const loginProvider = async (provider) => {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider[provider],
    });
  };

  const getUser = () => {
    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        setUser({
          data: currentUser.attributes,
          loading: false,
        });
      })
      .catch(() => {
        setUser({ data: null, loading: false });
      });
  };

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          getUser();
          break;
        case 'signOut':
          setUser({ data: null, loading: false });
          break;
        default:
      }
    });

    getUser();
    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    error,
    signup,
    confirmSignup,
    login,
    logout,
    loginProvider,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuthContext sould be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuthContext };
