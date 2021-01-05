import React from 'react';
import PropTypes from 'prop-types';


const BookFilter = ({categories, handleFilter}) =>{

  return(
    <div>
      <label htmlFor="categories">Categorías</label>
      <select onChange={handleFilter} id="categorias">
        <option value="Todos">Todos</option>
        {categories.map(categorie => <option key={categorie.id} value={categorie.name}>{categorie.name}</option>)}
      </select>
    </div>
  );


};

BookFilter.propTypes = {
  categories: PropTypes.array,
  handleFilter: PropTypes.func,
};


export default BookFilter;