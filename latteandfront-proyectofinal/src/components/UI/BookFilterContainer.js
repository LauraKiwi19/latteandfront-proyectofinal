import styled from "styled-components";


export const BookFilterContainer = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
      label{
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.darkPrimary};
        padding: 0rem 1.5rem;
      }

      select{
        border: solid px ${(props) => props.theme.colors.darkPrimary};
        border-radius: 0.3rem;
        padding: 0.25rem 0.5rem;
        font-size: 16px;
        font-weight: 100;
      }
`;