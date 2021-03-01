import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    width: 250px;
    margin: 1rem;
`;

export const Image = styled.div`
    background-image: url(${props => props.image});
    height: 20rem;
    width: 14rem;
    border-radius: 1.5rem;
    background-size: cover;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0.5rem 0rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.25rem;
  color: black;
   div{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
`;

export const CategoryList = styled.ul`
  display: flex;
`;

export const Category = styled.li `
   background-color: ${(props) => {
     switch (props.category) {
      case "Ensayo": 
        return props.theme.colors.primary;
      case "Narrativa":
        return props.theme.colors.secondary;
      case "Histórica": 
        return props.theme.colors.darkTertiary;
      case "Distopía": 
        return props.theme.colors.darkSecondary;
      case "Aventuras":
        return props.theme.colors.darkPrimary;
      case "Ciencia ficción":
        return props.theme.colors.lightTertiary;
      case "Novela Fantástica":
        return props.theme.colors.lightPrimary;
     }}};
   padding: 0.5rem 1rem;
   border-radius: 1.5rem;
   margin-right: 0.25rem;
   color: white;
`;

export const CardTools = styled.div`
  font-size: 20px;

`;