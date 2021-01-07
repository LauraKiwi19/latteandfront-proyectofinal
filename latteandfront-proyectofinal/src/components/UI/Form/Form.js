import React from 'react';
import propTypes from 'prop-types';
import {StyledSelect} from 'components/UI/Form/styledComponents';
import {FormContainer, Container, Label, Input, PreviewBookImage} from 'components/UI/Form/styledComponents';
import Button from 'components/UI/Button';

export default function Form({handleSubmit, handleTitle, handleImage, title, image, imageUrl, categories, selectedCategories, setSelectedCategories, book}){

  return(
    <FormContainer>
            <form onSubmit={handleSubmit}>
       <Container>
         <Label htmlFor="title">Título</Label>
         <Input type="text" onChange={handleTitle} value={title} name="title" placeholder={!book ? '' : book.title}/>
       </Container>

       <Container>
          <Label htmlFor="image">Imagen</Label>
          <input type="file" onChange={handleImage} name="image"/>
          <div>
            <PreviewBookImage src={!image && book ? book.image : imageUrl}/>
          </div>
        </Container>
       
        <Container>
            <Label htmlFor="categories">Categorías</Label>
            <StyledSelect
            defaultValue={selectedCategories} 
            onChange={setSelectedCategories}
            options={categories} 
            getOptionLabel={option => option.name} 
            getOptionValue={option => option.id}
            isMulti/>
        </Container>

       <Button type="submit">Crear Libro</Button>
     </form>
    </FormContainer>


  );

}

Form.propTypes = {
  handleSubmit: propTypes.func,
  handleTitle: propTypes.func,
  handleImage: propTypes.func,
  title: propTypes.string,
  image: propTypes.string, 
  imageUrl: propTypes.string,
  categories: propTypes.array,
  selectedCategories: propTypes.array,
  setSelectedCategories: propTypes.func,
  book: propTypes.object
};