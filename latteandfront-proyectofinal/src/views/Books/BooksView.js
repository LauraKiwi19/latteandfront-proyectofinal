import propTypes from 'prop-types';
import BookList from 'components/BookList';
import BookFilter from 'views/Books/BookFilter';

function BooksView({handleSelectFilter, handleBookFilter, handleAuthorFilter, categories, selectedCategory, books}) {

  console.log(books);

  return(
    <>
      <BookFilter 
          handleSelectFilter={handleSelectFilter} 
          handleBookFilter={handleBookFilter} 
          handleAuthorFilter={handleAuthorFilter} 
          selectedCategory={selectedCategory} 
          categories={categories}
          />
      <BookList books={books}/>
    </>
  );

}

export default BooksView;


BooksView.propTypes = {
  handleSelectFilter: propTypes.func,
  handleBookFilter: propTypes.func,
  handleAuthorFilter: propTypes.func,
  categories: propTypes.array,
  selectedCategory: propTypes.any,
  books: propTypes.array,
};