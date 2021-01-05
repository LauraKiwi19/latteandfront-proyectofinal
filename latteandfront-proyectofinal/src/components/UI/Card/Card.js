import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import styled from 'styled-components';
import {BOOKS_ID, BOOK_DEL, BOOK_EDIT} from 'config/routes';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    width: 250px;
    margin: 1rem;
`;

const BookImage = styled.img`
    width: 100%;
    border-radius: 1.5rem;
`;

const BookTitle = styled.h2`
    font-size: 20px;
    margin: 0.5rem 0rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.25rem;
   div{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
`;

const CategoryList = styled.ul`
  display: flex;
`;

const Category = styled.li `
   background-color: ${(props) => props.theme.colors.lightPrimary};
   padding: 0.5rem 1rem;
   border-radius: 1.5rem;
   margin-right: 0.25rem;
`;

const CardTools = styled.div`
  font-size: 20px;

`;


function Card({image, bookTitle, categories, id}){
  return(
    <CardContainer>
        <StyledLink to={generatePath(BOOKS_ID, { id: id })}>
          <div>
            <BookImage src={image} alt={bookTitle}/>
            <BookTitle>{bookTitle}</BookTitle>
            <CategoryList>
              {categories.map((categorie) => <Category key={categorie.id}>{categorie.name}</Category>)}
            </CategoryList>
          </div>
        </StyledLink>
        <CardTools>
          <StyledLink to={generatePath(BOOK_DEL, {id: id})}>
          🗑️
          </StyledLink>
          <StyledLink to={generatePath(BOOK_EDIT, {id: id})}>
          ✏️
          </StyledLink>
        </CardTools>


    </CardContainer>

  );


}

Card.propTypes = {
  bookTitle: PropTypes.string,
  categories: PropTypes.array,
  key: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string
};

export default Card;