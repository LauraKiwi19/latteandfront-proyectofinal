import React from 'react';
import {generatePath} from 'react-router-dom';

import {BOOKS_ID, BOOK_DEL, BOOK_EDIT} from 'config/routes';
import PropTypes from 'prop-types';
import {CardContainer, Image, Title, StyledLink, CategoryList, Category, CardTools} from 'components/UI/Card/styledComponents';




function Card({image, title, categories, id}){

  return(
    <CardContainer>
        <StyledLink to={generatePath(BOOKS_ID, { id: id })}>
          <div>
            <Image src={image} alt={title}/>
            <Title>{title}</Title>
            <CategoryList>
              {categories.map((categorie) => <Category key={categorie.id} category={categorie.id}>{categorie.name}</Category>)}
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
  title: PropTypes.string,
  categories: PropTypes.array,
  key: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string
};

Card.defaultProps = {
  image: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
};

export default Card;