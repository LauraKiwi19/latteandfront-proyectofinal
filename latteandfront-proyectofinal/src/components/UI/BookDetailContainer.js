import styled from 'styled-components';

export const BookDetailContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
    h2{
      padding: 1rem;
      color: ${(props) => props.theme.colors.darkPrimary}
    }
    img{
      width: 250px;
      margin: 0rem 0rem 1rem 0rem;
    }

`;