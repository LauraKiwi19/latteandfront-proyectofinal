import {createContext, useState, useMemo, useCallback} from 'react';


export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => setIsAuthenticated(true), []);

  const value = useMemo(() => (
    login,
    isAuthenticated
  ), [isAuthenticated, login]);

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}