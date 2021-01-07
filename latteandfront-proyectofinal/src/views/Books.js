import {useState, useEffect} from 'react';
import BookList from 'components/BookList';
import BookFilter from 'components/BookFilter';
import useFetch from 'hooks/useFetch';


function Books() {

  const {data: categories} = useFetch('http://18.130.120.189/api/categories');
  const {data: books} = useFetch('http://18.130.120.189/api/books');
  
  const [selectedCategory, setCategory] = useState({id: "", name: "Todos"});
  const [booksToShow, setBooksToShow] = useState();

  const printBooks = () => {
    if (!books || !selectedCategory){
      <p>Cargando</p>;
    } else {
      const filteredBooks = books.filter(book => book.categories.every(category => category.name === selectedCategory.name));
      setBooksToShow(filteredBooks);
    }
  };

  useEffect(function(){
    setBooksToShow(books);
    printBooks(selectedCategory);
  }, [books, selectedCategory]
  );

  if (!books || !categories || !booksToShow || !selectedCategory){
    return <p>Cargando</p>;
  }

  return (
    <div>
      <BookFilter handleFilter={setCategory} categories={categories} selectedCategory={selectedCategory}/>
      <BookList books={selectedCategory.name === 'Todos' ? books : booksToShow}/>
    </div>
  );
}


export default Books;