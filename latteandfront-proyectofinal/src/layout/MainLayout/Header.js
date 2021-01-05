import React from 'react';
import useAuthContext from 'hooks/useAuthContext';
import Menu from 'layout/MainLayout/Menu/Menu';


export default function Header() {
  const {isAuthenticated} = useAuthContext();

  return(
    <div>
        {isAuthenticated && <Menu/>}
    </div>

  );


}