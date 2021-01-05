import {useState, useEffect} from 'react';

import BookList from 'components/BookList';
import BookFilter from 'components/BookFilter';

import useFetch from 'hooks/useFetch';


function Books() {

  const {data: categories} = useFetch('http://18.130.120.189/api/categories');
  const {data: books} = useFetch('http://18.130.120.189/api/books');
  
  const [selectedCategory, setCategory] = useState("Todos");
  const [booksToShow, setBooksToShow] = useState();

  const printBooks = () => {
    if (!books){
      <p>Cargando</p>;
    } else {
      const filteredBooks = books.filter(book => book.categories.every(category => category.name === selectedCategory));
      setBooksToShow(filteredBooks);
      console.log(booksToShow);
    }
  };

  useEffect(function(){
    setBooksToShow(books);
    printBooks(selectedCategory);
  }, [books, selectedCategory]
  );

  if (!books || !categories || !booksToShow){
    return <p>Cargando</p>;
  }

   const handleFilter = (event) => {
    const categoryName = event.target.value;
    setCategory(categoryName);
  };

  return (
    <div>
      <BookFilter handleFilter={handleFilter} categories={categories}/>
      <BookList books={selectedCategory === 'Todos' ? books : booksToShow}/>
    </div>
  );
}


export default Books;