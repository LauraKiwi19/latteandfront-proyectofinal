import styled from 'styled-components';


const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: ${(props) => props.theme.fontSize.regular};
  border: none;
  background-color: ${(props) => props.theme.colors.lightPrimary};
  border-radius: 0.75rem;
  color: ${(props) => props.theme.colors.darkPrimary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  cursor: pointer;
`;

export default Button;