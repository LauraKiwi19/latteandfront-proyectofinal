import React from 'react';
import {Nav, StyledNavLink} from 'layout/MainLayout/Menu/styledComponents';
import {BOOKS, BOOK_CREATE, CATEGORIES, LOGOUT} from 'config/routes';

const menuLinks = [
  {
    to: BOOKS, 
    name: 'Libros'
  }, 
  {
    to: CATEGORIES, 
    name: 'Categorías'
  }, 
  {
    to: BOOK_CREATE,
    name: 'Crear Libro'
  }, 
  {
    to: LOGOUT, 
    name: 'Logout'
  }
];

function Menu() {

  return(
    <Nav>
      <ul>
      {menuLinks.map((link) =>(
        <li key={link.to}>
          <StyledNavLink to={link.to} activeClassName='active' exact>
            {link.name} 
          </StyledNavLink>
        </li>
      ))}
      </ul>
    </Nav>
  );

}

export default Menu;