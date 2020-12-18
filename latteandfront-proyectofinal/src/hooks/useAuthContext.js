import {useContext} from 'react';
import {AuthContext} from 'contexts/authContext';

export default function useAuthContext() {
  const isAuthenticated = useContext(AuthContext);
  return isAuthenticated;

};