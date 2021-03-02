import React from 'react';
import PropTypes from 'prop-types';
import {BookFilterContainer} from 'components/UI/BookFilterContainer';
import {StyledSelect, Input} from 'components/UI/Form/styledComponents';


const BookFilter = ({selectedCategory, categories, handleSelectFilter, handleBookFilter, handleAuthorFilter}) =>{

  return(
    <BookFilterContainer>
      {/* <Filter label="Libro" htmlFor="libro" onChange={handleFilter}/>
      <Filter label="Autor" htmlFor="autor"/> */}
      <label htmlFor="libro">Libro</label>
      <Input type="text" onChange={handleBookFilter}/>
      <label htmlFor="autor">Autor</label>
      <Input type="text" onChange={handleAuthorFilter}/>
      <label htmlFor="categories">Categorías</label>
      <StyledSelect
            defaultValue={selectedCategory} 
            onChange={handleSelectFilter}
            options={categories} 
            getOptionLabel={option => option.name} 
            getOptionValue={option => option.name}
            />
    </BookFilterContainer>
  );


};

BookFilter.propTypes = {
  categories: PropTypes.array,
  handleSelectFilter: PropTypes.func,
  handleBookFilter: PropTypes.func,
  handleAuthorFilter: PropTypes.func,
  selectedCategory: PropTypes.any
};


export default BookFilter;