import React from 'react';
import BookItem from 'components/BookItem';
import PropTypes from 'prop-types';
import BookListLayout from 'components/UI/BookListLayout';

const BookList = ({books}) => {

  if (!books){
    <h1>Cargando</h1>;
  };

  return (
    <BookListLayout>
      {books.map(book => 
      <BookItem key= {book.id} book={book}/>)}
    </BookListLayout>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
};


export default BookList;