import React from 'react';
import PropTypes from 'prop-types';


const BookFilter = ({categories, handleFilter}) =>{
  console.log(categories);


  return(
    <div>
      <label for="categories">Categorías</label>
      <select onChange={handleFilter} id="categorias">
        {categories.map(categorie => <option key={categorie.id} value={categorie.name}>{categorie.name}</option>)}
        <option value="Todos">Todos</option>
      </select>
    </div>
  );


};

BookFilter.propTypes = {
  categories: PropTypes.array,
  handleFilter: PropTypes.func,
};


export default BookFilter;