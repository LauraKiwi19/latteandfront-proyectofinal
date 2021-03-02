import React from 'react';
import propTypes from 'prop-types';
import {StyledSelect} from 'components/UI/Form/styledComponents';
import {FormContainer, Container, Label, Input, PreviewBookImage} from 'components/UI/Form/styledComponents';
import Button from 'components/UI/Button';

export default function Form({handleSubmit, handleTitle, handleImage, image, imageUrl, categories, selectedCategories, setSelectedCategories, book, buttonText}){

  return(
    <FormContainer>
            <form onSubmit={handleSubmit}>
       <Container>
         <Label htmlFor="title">Título</Label>
         <Input type="text" onChange={handleTitle} value={!book ? '' : book.title} name="title" placeholder={!book ? '' : book.title}/>
       </Container>

       <Container>
          <Label htmlFor="image">Imagen</Label>
          <input type="file" onChange={handleImage} name="image" imageUrl={imageUrl} />
          <div>
            <PreviewBookImage src={!image && book ? book.image : imageUrl}/>
          </div>
        </Container>
       
        <Container>
            <Label htmlFor="categories">Categorías</Label>
            <StyledSelect
              onChange={setSelectedCategories}
              options={categories} 
              getOptionLabel={option => option.name} 
              getOptionValue={option => option.id}
              defaultValue={selectedCategories}
              isMulti
            />
        </Container>

       <Button type="submit">{buttonText}</Button>
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
  book: propTypes.object,
  buttonText: propTypes.string
};