import styled from 'styled-components';
import Select from 'react-select';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem 1rem;

  form{
    display: flex;
    flex-direction: column;
  }

  button{
    margin-top: 1.5rem;
  }

`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-right: 1.75rem;
`;

export const Input = styled.input`
  min-width: 200px;
  padding: 0.25rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkPrimary};
`;

export const StyledSelect = styled(Select)`
    width: 300px;
`;

export const PreviewBookImage = styled.img`
  position: absolute;
  padding: 2rem 5rem;
  top: 100px;
  width: 100px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0rem;
`;
