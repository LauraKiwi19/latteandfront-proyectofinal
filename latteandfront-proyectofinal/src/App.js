import React from 'react';

import {BrowserRouter, Switch} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

import PrivateRoute from 'router/PrivateRoute';
import PublicRoute from 'router/PublicRoute';
import MainLayout from 'layout/MainLayout/MainLayout';

import {HOME, BOOKS, BOOKS_ID, BOOK_CREATE, BOOK_DEL, LOGOUT, BOOK_EDIT} from 'config/routes';

import Home from 'views/Home/Home';
import Books from 'views/Books/Books';
import Logout from 'views/Logout';
import BookDetail from 'views/BookDetail';
import BookCreate from 'views/BookCreate/BookCreate';
import BookDelete from 'views/BookDelete';
import BooksEdit from 'views/BookEdit/BookEdit';


import AuthcontextProvider from 'contexts/authContext';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthcontextProvider>
        <BrowserRouter>
          <MainLayout>
          <Switch>
              <PublicRoute path={HOME} component={Home} exact/>
              <PrivateRoute path={BOOKS} component={Books} exact/>
              <PrivateRoute path={LOGOUT} component={Logout} exact/>
              <PrivateRoute path={BOOKS_ID} component={BookDetail} exact/>
              <PrivateRoute path={BOOK_CREATE} component={BookCreate} exact/>
              <PrivateRoute path={BOOK_DEL} component={BookDelete} exact/>
              <PrivateRoute path={BOOK_EDIT} component={BooksEdit} exact/>
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </AuthcontextProvider>
    </ThemeProvider>
    


  );
}

export default App;
