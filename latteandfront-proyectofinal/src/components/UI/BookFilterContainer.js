import styled from "styled-components";


export const BookFilterContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
      label{
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.darkPrimary};
        padding: 0rem 1.5rem;
      }
`;