import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {BOOKS} from 'config/routes';
import {BACKEND} from 'consts/backendUrl';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';
import useFetch from 'hooks/useFetch';
import Form from 'components/UI/Form/Form';
import FlexContainer from 'components/UI/FlexContainer';



function BookCreate() {

  const {data: categories} = useFetch(`${BACKEND}/api/categories`);
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);


  function handleTitle(event){
    setTitle(event.target.value);
  }

  function handleImage(event){
    setImage(event.target.files[0]);
  }

  async function handleSubmit(event){
    event.preventDefault();
    
    try{
      const base64Image = await blobToBase64(image);
      const data ={
        title: title,
        categories: selectedCategories,
        base64Image: base64Image
      };
      await apiClient.post(`${BACKEND}/api/books`, data);
      history.push(BOOKS);
      
    } catch (error){
      console.log(error);
    }
  }

  const imageUrl = image ? URL.createObjectURL(image) : '';

 return(
   <FlexContainer>
    <Form 
        handleSubmit={handleSubmit}
        handleTitle={handleTitle}
        handleImage={handleImage}
        title={title}
        image={image}
        imageUrl={imageUrl}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        buttonText="Crear Libro"
    />
   </FlexContainer>

 );

}


export default BookCreate;