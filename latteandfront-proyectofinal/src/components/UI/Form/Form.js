import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {StyledSelect} from 'components/UI/Form/styledComponents';
import Button from 'components/UI/Button';


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem 1rem;

  form{
    display: flex;
    flex-direction: column;
  }

  button{
    margin-top: 1.5rem;
  }

`;

const Label = styled.label`
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-right: 1.75rem;
`;

const Input = styled.input`
  min-width: 200px;
  padding: 0.25rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkPrimary};
`;

const PreviewBookImage = styled.img`
  position: absolute;
  padding: 2rem 5rem;
  top: 100px;
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0rem;
`;


export default function Form({handleSubmit, handleTitle, handleImage, title, image, imageUrl, categories, selectedCategories, setSelectedCategories}){

  return(
    <FormContainer>
            <form onSubmit={handleSubmit}>
       <Container>
         <Label htmlFor="title">    Título    </Label>
         <Input type="text" onChange={handleTitle} value={title} name="title"/>
       </Container>

       <Container>
          <Label htmlFor="image">Imagen</Label>
          <input type="file" onChange={handleImage} name="image"/>
          <div>
           {image  && <PreviewBookImage src={imageUrl}/>}
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
  setSelectedCategories: propTypes.func
};