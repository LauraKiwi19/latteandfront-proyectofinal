// import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {LOGOUT} from 'config/routes';

import BookList from 'components/BookList';
import BookFilter from 'components/BookFilter';

import useFetch from 'hooks/useFetch';
import {useState} from 'react';
// import useBooks from 'hooks/useBooks';
// import useCategories from 'hooks/useCategories';


function Books() {

  const {data: categories} = useFetch('http://18.130.120.189/api/categories');
  const {data: books} = useFetch('http://18.130.120.189/api/books');
  const {selectedCategory, setCategory} = useState("Todos");
  const {booksToShow, setBooksToShow} = useState(books);

  console.log(categories);
  console.log(books);

  if (!books || !categories){
    return <p>Cargando</p>;
  }

  function handleFilter(event){
    const categoryName = event.target.value;
    setCategory(categoryName);

    const filteredBooks = books.categories.filter(category => category.name === selectedCategory);
    setBooksToShow(filteredBooks);

  }



  return (
    <div>
      BOOK
      <Link to={LOGOUT}>Cerrar sesión </Link>
      <BookFilter handleFilter={handleFilter} categories={categories}/>
      <BookList books={booksToShow}/>
      
    </div>
  );
}


export default Books;