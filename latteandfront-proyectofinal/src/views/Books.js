import React from 'react';
import {Link} from 'react-router-dom';
import {LOGOUT} from 'config/routes';


function Books() {
  return (
    <div>
      BOOKS
      <Link to={LOGOUT}>Cerrar sesión </Link>
    </div>
  );
}
export default Books;