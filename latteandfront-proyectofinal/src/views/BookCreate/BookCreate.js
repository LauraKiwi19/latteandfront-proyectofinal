import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {BOOKS} from 'config/routes';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';
import useFetch from 'hooks/useFetch';
import Form from 'components/UI/Form/Form';
import FlexContainer from 'components/UI/FlexContainer';



function BookCreate() {

  const {data: categories} = useFetch('http://18.130.120.189/api/categories');
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
      const response = await apiClient.post('http://18.130.120.189/api/books', data);
      history.push(BOOKS);
      return response;
      
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
    />
   </FlexContainer>

 );

}


export default BookCreate;