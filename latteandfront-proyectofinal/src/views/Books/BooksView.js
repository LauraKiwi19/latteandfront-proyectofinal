import propTypes from 'prop-types';
import BookList from 'components/BookList';
import BookFilter from 'views/Books/BookFilter';

function BooksView({handleFilter, categories, selectedCategory, books}) {

  return(
    <>
      <BookFilter books={books}/>
      <BookList books={books} handleFilter={handleFilter} categories={categories} selectedCategory={selectedCategory}/>
    </>
  );

}

export default BooksView;


BooksView.propTypes = {
  handleFilter: propTypes.func,
  categories: propTypes.array,
  selectedCategory: propTypes.any,
  books: propTypes.array
};