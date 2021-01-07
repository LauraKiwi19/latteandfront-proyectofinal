import styled from "styled-components";

export const BookDeleteContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
   button{
    margin: 1rem;
   }
   p{
     font-size: 20px;
     padding: 1rem;
     color: ${(props) => props.theme.colors.darkPrimary}
   }
   a{
     color: ${(props) => props.theme.colors.lightPrimary}
   }

`;