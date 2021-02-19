import propTypes from 'prop-types';
import BookList from 'components/BookList';
import BookFilter from 'views/Books/BookFilter';

function BooksView({handleFilter, categories, selectedCategory, books}) {

  return(
    <>
      <BookFilter handleFilter={handleFilter} selectedCategory={selectedCategory} categories={categories}/>
      <BookList books={books}/>
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