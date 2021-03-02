import styled from 'styled-components';
import {Input} from 'components/UI/Form/styledComponents';

export const MainContainer = styled.div`
    //background-color: ${(props) => props.theme.colors.lightPrimary};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

// export const Title = styled.h1`
//     font-size: ${(props) => props.theme.fontSize.largeXl};
//     color: white;
//     letter-spacing: 0.25rem;
//     padding: 2rem;
//     font-weight: ${(props) => props.theme.fontWeight.extraLight};

// `;

// export const Input = styled.input`
//   padding: 0.5rem;
//   border: none;
//   border-bottom: 2px solid grey;
//   margin: 1rem 0rem;
//   font-size: 1.25rem;
//   text-align: center;
//   color: ${(props) => props.theme.colors.darkPrimary};
//     &:focus{
//       outline: none;
//     }
//     &[placeholder]{
//       text-align: center;
      
//     }
// `;

export const HomeInput = styled(Input)`
  margin: 1rem 0rem;
  font-size: 1.25rem;
  text-align: center;
`;

export const Label = styled.label`
  color: white;
`;

export const Error = styled.p`
  position: relative;
  top: -8px;
  right: -8px;
  color: red;
  font-size: ${(props) => props.theme.fontSize.small};
`;


export const FormContainer = styled.div`;
  //background-color: ${(props) => props.theme.colors.darkPrimary};
  border-radius: 0.5rem;
  padding: 5rem;
  
  form{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
