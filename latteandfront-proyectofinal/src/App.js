import React from 'react';
// import data from 'utils/apiClient';
import {BrowserRouter, Switch} from "react-router-dom";

import PrivateRoute from 'router/PrivateRoute';
import PublicRoute from 'router/PublicRoute';

import {HOME, BOOKS, BOOKS_ID, BOOK_CREATE, LOGOUT} from 'config/routes';

import Home from 'views/Home';
import Books from 'views/Books';
import Logout from 'views/Logout';
import BookDetail from 'views/BookDetail';
import BookCreate from 'views/BookCreate';

import AuthcontextProvider from 'contexts/authContext';



function App() {

  return (
    <AuthcontextProvider>
      <BrowserRouter>
        <Switch>
          <PublicRoute path={HOME} component={Home} exact/>
          <PrivateRoute path={BOOKS} component={Books} exact/>
          <PrivateRoute path={LOGOUT} component={Logout} exact/>
          <PrivateRoute path={BOOKS_ID} component={BookDetail} exact/>
          <PrivateRoute path={BOOK_CREATE} component={BookCreate} exact/>
        </Switch>
      </BrowserRouter>
    </AuthcontextProvider>


  );
}

export default App;
