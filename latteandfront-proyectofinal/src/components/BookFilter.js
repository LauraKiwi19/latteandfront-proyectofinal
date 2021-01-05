import React from 'react';
import PropTypes from 'prop-types';
import {BookFilterContainer} from 'components/UI/BookFilterContainer';


const BookFilter = ({categories, handleFilter}) =>{

  return(
    <BookFilterContainer>
      <label htmlFor="categories">Categorías</label>
      <select onChange={handleFilter} id="categorias">
        <option value="Todos">Todos</option>
        {categories.map(categorie => <option key={categorie.id} value={categorie.name}>{categorie.name}</option>)}
      </select>
    </BookFilterContainer>
  );


};

BookFilter.propTypes = {
  categories: PropTypes.array,
  handleFilter: PropTypes.func,
};


export default BookFilter;