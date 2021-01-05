import React from 'react';
import BookItem from 'components/BookItem';
import PropTypes from 'prop-types';
import BookListLayout from 'components/UI/BookListLayout';

const BookList = ({books}) => {

  console.log(books);

  if (!books){
    <h1>Loading</h1>;
  };

  return (
    <BookListLayout>
      {books.map(book => 
      <BookItem 
        key={book.id} 
        bookTitle={book.title} 
        id={book.id} 
        categories={book.categories}
        image={book.image ? book.image : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"}
        />)}
    </BookListLayout>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
};


export default BookList;