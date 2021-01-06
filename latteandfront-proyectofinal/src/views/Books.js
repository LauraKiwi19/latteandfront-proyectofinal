import {useState, useEffect} from 'react';

import BookList from 'components/BookList';
import BookFilter from 'components/BookFilter';

import useFetch from 'hooks/useFetch';


function Books() {

  const {data: categories} = useFetch('http://18.130.120.189/api/categories');
  const {data: books} = useFetch('http://18.130.120.189/api/books');
  
  const [selectedCategory, setCategory] = useState({id: "", name: "Todos"});
  const [booksToShow, setBooksToShow] = useState();

  console.log(books);
  console.log(selectedCategory);
  // const categoriesComplete = !categories ? [] : categories.push({id:"none", name: "Todos"});
  // console.log(categoriesComplete);

  const printBooks = () => {
    if (!books || !selectedCategory){
      console.log("cargando 2");
      <p>Cargando 2</p>;
    } else {
      const filteredBooks = books.filter(book => book.categories.every(category => category.name === selectedCategory.name));
      setBooksToShow(filteredBooks);
      console.log("soy printbooks");
    }
  };

  useEffect(function(){
    console.log("soy el efecto");
    setBooksToShow(books);
    printBooks(selectedCategory);
  }, [books, selectedCategory]
  );

  function handleEraseCategory(){
    setCategory({id: "", name: "Todos"});
  }

  if (!books || !categories || !booksToShow || !selectedCategory){
    console.log("cargando 1");
    return <p>Cargando 1</p>;
  }

  //  const handleFilter = () => {
  //   const categoryName = event.target.value;
  //   console.log(categoryName);
  //   setCategory(categoryName);
  // };

  return (
    <div>
      <BookFilter handleFilter={setCategory} categories={categories} selectedCategory={selectedCategory}/>
      <button onClick={handleEraseCategory}>X</button>
      <BookList books={selectedCategory.name === 'Todos' ? books : booksToShow}/>
    </div>
  );
}


export default Books;