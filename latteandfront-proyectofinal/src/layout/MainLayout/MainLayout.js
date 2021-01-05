import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function MainLayout({children}) {
  
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};
