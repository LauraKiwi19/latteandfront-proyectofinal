import React from 'react';
import {Nav, StyledNavLink} from 'layout/MainLayout/Menu/styledComponents';
import {BOOKS, BOOK_CREATE, CATEGORIES, LOGOUT} from 'config/routes';

function Menu() {

  return(
    <Nav>
      <ul>
        <li>
          <StyledNavLink to={BOOKS} activeClassName='active' exact>Libros</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={CATEGORIES} activeClassName='active' exact>Categorías</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={BOOK_CREATE} activeClassName='active' exact>Crear Libro</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={LOGOUT} activeClassName='active' exact>Logout</StyledNavLink>
        </li>
      </ul>
    </Nav>


  );

}

export default Menu;