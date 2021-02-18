import {useState} from 'react';

import {BACKEND} from 'consts/backendUrl';

import useFetch from 'hooks/useFetch';
import BooksView from 'views/Books/BooksView';


function Books() {

  const {data: categories} = useFetch(`${BACKEND}/api/categories`);
  const {data: books} = useFetch(`${BACKEND}/api/books`);
  
  const [selectedCategory, setCategory] = useState({id: "", name: "Todos"});

  let booksToShow = [];

  if (books && selectedCategory){
    booksToShow = books.filter(book => book.categories.every(category => category.name === selectedCategory.name));
  } else {
    booksToShow = books;
  }

  if (!books || !categories || !booksToShow || !selectedCategory){
    return <p>Cargando</p>;
  }

  return (
    <BooksView 
      handleFilter={setCategory}
      categories={categories}
      selectedCategory={selectedCategory}
      books={selectedCategory.name === 'Todos' ? books : booksToShow}
    />
  );
}


export default Books;