// import {useState} from 'react';
import {useParams} from 'react-router-dom';
import useFetch from 'hooks/useFetch';
// import Categories from 'components/Categories'



function BookDetail() {

  const { id } = useParams();
  const {data: book} = useFetch (`http://18.130.120.189/api/books/${id}`);


  if (!book){
    return <h1>Loading</h1>;
  }

  return(
    <div>
        <h1>{book.title}</h1>
        <ul>
          {book.categories.map(categorie => 
             <li key={categorie.id}>{categorie.name}</li>)}
        </ul>
    </div>
  );


}



export default BookDetail;