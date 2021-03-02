import React from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router';
import useFetch from 'hooks/useFetch';
import {BOOKS} from 'config/routes';
import {useState} from 'react';
import {BACKEND} from 'consts/backendUrl';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';
import prepareCategories from 'utils/prepareCategories';
import BookEditView from 'views/BookEdit/BookEditView';





export default function BookEdit(){

  const {id} = useParams();
  const history = useHistory();

  const {data: book} = useFetch (`${BACKEND}/api/books/${id}`);
  const {data: categories} = useFetch(`${BACKEND}/api/categories`);

  const [title, setTitle] = useState(book?.title);
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(book?.categories);

  console.log(selectedCategories);


  function handleTitle(event){
    setTitle(event.target.value);
  }

  async function handleSubmit(event){
    event.preventDefault();
    try{
      const base64Image = await blobToBase64(image);
      const data ={
        title: title,
        base64image: base64Image,
        categories: prepareCategories(book ? book.categories : [], selectedCategories)
      };
      const url = book ? `${BACKEND}/api/books/${book.id}` : `${BACKEND}/api/books`; //esto en realidad sería si fuera mismo componente para Create/Edit
      console.log(data);
      await apiClient.post(url, data);
      history.push(BOOKS);
    } catch (error){
      console.log(error);
    }

  }

  function handleImage(event){
    setImage(event.target.files[0]);
  }

  // function handleCategories(event){
  //   const categoryName = event.target.value;
  //   console.log(categoryName);
  //   setCategories(categoryName);
  // }

  // const imageUrl = image ? URL.createObjectURL(image) : '';

  let imageUrl = null;
  if (image) {
    imageUrl = URL.createObjectURL(image);
  } else if (book) {
    imageUrl = book.image;
  } else {
    imageUrl = null;
  } // Creo que en este caso igual, sería si fuera genérico, me da que valdría mi terciario

  return(
    <BookEditView
      handleSubmit={handleSubmit}
      handleTitle={handleTitle}
      handleImage={handleImage}
      title={title}
      image={image}
      imageUrl={imageUrl}
      categories={categories}
      selectedCategories={selectedCategories}   
      book={book}
      setSelectedCategories={setSelectedCategories}
    />
  );
}