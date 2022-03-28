import { createContext, useContext, useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { useHistory } from 'react-router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ data: null, loading: true });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const loadingHandler =
    (fn) =>
    async (...args) => {
      setLoading(true);
      await fn(...args);
      setLoading(false);
    };

  const signup = loadingHandler(async (name, email, password) => {
    try {
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
    } catch (error) {
      console.log('error signing up:', error);
    }
  });

  const login = loadingHandler(async (email, password) => {
    try {
      await Auth.signIn(email, password);
    } catch (error) {
      console.log('error signing in', error);
    }
  });

  const confirmSignup = loadingHandler(async (email, password, code) => {
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, code);
      await login(email, password);
    } catch (error) {
      setLoading(false);
      console.log('error confirming sign up', error);
    }
  });

  const logout = loadingHandler(async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  });

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'confirmSignUp':
          setUser({ data, loading: false });
          break;
        case 'signOut':
          setUser({ data: null, loading: false });
          break;
        default:
      }
    });

    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        setUser({
          data: currentUser,
          loading: false,
        });
      })
      .catch(() => {
        setUser({ data: null, loading: false });
        console.log('Not signed in');
      });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    signup,
    confirmSignup,
    login,
    logout,
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
