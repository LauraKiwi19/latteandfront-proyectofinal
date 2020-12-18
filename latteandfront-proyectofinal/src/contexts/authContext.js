import {createContext, useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';


AuthContextProvider.propTypes = {
  children: PropTypes.object
};

const MY_AUTH_APP = "MY_AUTH_APP";

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP));

  const login = useCallback(() =>{
      window.localStorage.setItem(MY_AUTH_APP, true);
      setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() =>{
    window.localStorage.removeItem(MY_AUTH_APP, true);
    setIsAuthenticated(false);
}, []);

  const value = useMemo(() => ({
    login,
    logout,
    isAuthenticated
  }), [isAuthenticated, logout, login]);

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}