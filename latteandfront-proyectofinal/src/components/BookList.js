import React from 'react';
import BookItem from 'components/BookItem';
import PropTypes from 'prop-types';

const BookList = ({books}) => {
  console.log(books);

  if (!books){
    <h1>Loading</h1>;
  };

  return (
    <ul>
      {books.map(book => 
      <BookItem 
        key={book.id} 
        bookTitle={book.title} 
        id={book.id} 
        categories={book.categories}
        />)}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
};


export default BookList;