import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import {useState} from 'react';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase65';





export default function BookEdit(){

  const {id} = useParams();
  const {data: book} = useFetch (`http://18.130.120.189/api/books/${id}`);

  const {data: categories} = useFetch('http://18.130.120.189/api/categories');

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState();

  function handleTitle(event){
    setTitle(event.target.value);
  }

  async function handleSubmit(event){
    event.preventDefault();
    try{
      const base64Image = await blobToBase64(image);
      const data ={
        title: title,
        categories: {
          '0': {
            "name": category
          }
        },
        base64Image: base64Image
      };
      const response = await apiClient.post('http://18.130.120.189/api/books', data);
      console.log(response);
    } catch (error){
      console.log(error);
    }

  }

  function handleImage(event){
    setImage(event.target.files[0]);
  }

  function handleCategory(event){
    const categoryName = event.target.value;
    setCategory(categoryName);
  }

  const imageUrl = image ? URL.createObjectURL(image) : '';

  return(
    <form onSubmit={handleSubmit}>
       <div>
         <label>Título</label>
         <input type="text" onChange={handleTitle} value={title} placeholder={!book ? '' : book.title} name="title"/>
       </div>

       <div>
          <label>Imagen</label>
          <input type="file" onChange={handleImage} name="image"/>
          <div>
           <img src={ !image && book ? book.image : imageUrl}/>
          </div>
        </div>
       
        <div>
            <label htmlFor="categories">Categorías</label>
            <select onChange={handleCategory} id="categorias">
              {!categories ? '' : categories.map(categorie => <option key={categorie.id} value={categorie.name}>{categorie.name}</option>)}
            </select>
        </div>


       <button type="submit">Editar Libro</button>
     </form>
  );
}