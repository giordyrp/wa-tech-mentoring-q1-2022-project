import { createContext, useContext, useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { useHistory } from 'react-router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const signup = async (email, password) => {
    try {
      setLoading(true);
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });
      setUser(user);
      setLoading(false);
      history.push('/');
    } catch (error) {
      setLoading(false);
      console.log('error signing up:', error);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const user = await Auth.signIn(email, password);
      setUser(user);
      setLoading(false);
      history.push('/');
    } catch (error) {
      setLoading(false);
      console.log('error signing in', error);
    }
  };

  const logout = async () => {
    try {
      await Auth.signOut();
      history.push('/login');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
        default:
      }
    });

    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        setUser(currentUser);
      })
      .catch(() => console.log('Not signed in'))
      .finally(() => {
        setLoading(false);
      });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    signup,
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
