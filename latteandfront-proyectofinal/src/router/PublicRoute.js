import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {BOOKS} from 'config/routes';
import useAuthContext from 'hooks/useAuthContext';



const PublicRoute = (props) => {

  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {

    return <Redirect to={BOOKS}/>;
  }

  return (
    <Route { ...props} />
  );


};

export default PublicRoute;