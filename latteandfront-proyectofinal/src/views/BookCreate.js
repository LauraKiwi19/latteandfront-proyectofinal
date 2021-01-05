import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {BOOKS} from 'config/routes';
import Select from 'react-select';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';
import useFetch from 'hooks/useFetch';


function BookCreate() {

  const {data: categories} = useFetch('http://18.130.120.189/api/categories');

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);
  // const [category, setCategory] = useState({ id: "1", name: "Magia y fantasía"});
  console.log(selectedCategories);

  const history = useHistory();

  function handleTitle(event){
    setTitle(event.target.value);
  }

  function handleImage(event){
    setImage(event.target.files[0]);
  }

  // function handleCategory(event){
  //   const categoryId = event.target.value;
  //   const categoryName = event.target.options[event.target.selectedIndex].text;

  //   setCategory({
  //     name: categoryName,
  //     id: categoryId
  //   });

  // }

  async function handleSubmit(event){
    event.preventDefault();
    try{
      const base64Image = await blobToBase64(image);
      const data ={
        title: title,
        categories: {
          '0': {
            "id": category.id,
            "name": category.name
          }
        },
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
   <div>
     <form onSubmit={handleSubmit}>
       <div>
         <label>Título</label>
         <input type="text" onChange={handleTitle} value={title} name="title"/>
       </div>

       <div>
          <label>Imagen</label>
          <input type="file" onChange={handleImage} name="image"/>
          <div>
           {image  && <img src={imageUrl}/>}
          </div>
        </div>
       
        <div>
            <label htmlFor="categories">Categorías</label>
            <Select 
            defaultValue={selectedCategories} 
            onChange={setSelectedCategories}
            options={categories} 
            getOptionLabel={option => option.name} 
            getOptionValue={option => option.id}
            isMulti/>
            {/* <select onChange={handleCategory} id="categorias">
              {!categories ? '' : categories.map(category => <option key={category.id} value={category.id} >{category.name}</option>)}
            </select> */}
        </div>

       <button type="submit">Crear Libro</button>
     </form>
   </div>
 );

}


export default BookCreate;