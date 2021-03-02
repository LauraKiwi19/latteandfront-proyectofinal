import {useState} from 'react';

import {BACKEND} from 'consts/backendUrl';

import useFetch from 'hooks/useFetch';
import BooksView from 'views/Books/BooksView';


function Books() {

  const {data: categories} = useFetch(`${BACKEND}/api/categories`);
  const {data: books} = useFetch(`${BACKEND}/api/books`);

  const [bookSearch, setBookSearch] = useState();
  const [authorSearch, setAuthorSearch] = useState();
  
  const [selectedCategory, setCategory] = useState({id: "", name: "Todos"});

  let booksToShow = books;

  console.log(booksToShow);

  if (bookSearch) {
    booksToShow = booksToShow.filter(book => book.title.toLowerCase().includes(bookSearch.toLowerCase()));
  }

  if (authorSearch) {
    booksToShow = booksToShow.filter(book => book.authors.length > 0)
                              .filter(book => book.authors.every(author => author.name.toLowerCase().includes(authorSearch.toLowerCase())));
  }

  if (selectedCategory.name !== "Todos"){
    booksToShow = booksToShow.filter(book => book.categories.every(category => category.name === selectedCategory.name));
  }

  

  
  // if (books && (bookSearch || selectedCategory.name !== "Todos")){
  //   booksToShow = books.filter(book => book.categories.every(category => category.name === selectedCategory.name))
  //                       .filter(book => book.title.toLowerCase().includes(bookSearch.toLowerCase()));
  // } else {
  //   booksToShow = books;
  // }

  // if (books && selectedCategory || bookSearch){
  //   booksToShow = books.filter(book => book.categories.every(category => category.name === selectedCategory.name))
  //                       .filter(book => book.title.toLowerCase().includes(bookSearch.toLowerCase()));
  // } else {
  //   booksToShow = books;
  // }

  if (!books || !categories || !selectedCategory){
    return <p>Cargando</p>;
  }

  function handleBookFilter(event) {
    setBookSearch(event.target.value);
  }

  function handleAuthorFilter(event) {
    setAuthorSearch(event.target.value);
  }


  return (
    <BooksView 
      handleBookFilter={handleBookFilter}
      handleAuthorFilter={handleAuthorFilter}
      handleSelectFilter={setCategory}
      categories={categories}
      selectedCategory={selectedCategory}
      books={booksToShow}
    />
  );
}


export default Books;