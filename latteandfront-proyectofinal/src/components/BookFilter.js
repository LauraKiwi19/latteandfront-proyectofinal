import React from 'react';
import PropTypes from 'prop-types';
import {BookFilterContainer} from 'components/UI/BookFilterContainer';
import {StyledSelect} from 'components/UI/Form/styledComponents';


const BookFilter = ({selectedCategory, categories, handleFilter}) =>{

  return(
    <BookFilterContainer>
      <label htmlFor="categories">Categorías</label>
      <StyledSelect
            defaultValue={selectedCategory} 
            onChange={handleFilter}
            options={categories} 
            getOptionLabel={option => option.name} 
            getOptionValue={option => option.name}
            />
    </BookFilterContainer>
  );


};

BookFilter.propTypes = {
  categories: PropTypes.array,
  handleFilter: PropTypes.func,
  selectedCategory: PropTypes.any
};


export default BookFilter;