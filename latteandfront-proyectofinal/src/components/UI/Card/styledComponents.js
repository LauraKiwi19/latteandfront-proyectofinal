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

export const Image = styled.img`
    width: 100%;
    border-radius: 1.5rem;
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
      case 1: 
        return props.theme.colors.primary;
      case 2:
        return props.theme.colors.secondary;
      case 3: 
        return props.theme.colors.tertiary;
      case 4: 
        return props.theme.colors.darkSecondary;
      case 5:
        return props.theme.colors.darkPrimary;
     }}};
   padding: 0.5rem 1rem;
   border-radius: 1.5rem;
   margin-right: 0.25rem;
   color: white;
`;

export const CardTools = styled.div`
  font-size: 20px;

`;