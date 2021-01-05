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

export const BookImage = styled.img`
    width: 100%;
    border-radius: 1.5rem;
`;

export const BookTitle = styled.h2`
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
   background-color: ${(props) => props.theme.colors.lightPrimary};
   padding: 0.5rem 1rem;
   border-radius: 1.5rem;
   margin-right: 0.25rem;
`;

export const CardTools = styled.div`
  font-size: 20px;

`;