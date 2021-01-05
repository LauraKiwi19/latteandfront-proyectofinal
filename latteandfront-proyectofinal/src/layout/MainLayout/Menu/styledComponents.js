import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Nav = styled.nav`
  ul{
    display: flex;
  }

`;

export const StyledNavLink = styled(NavLink)`
  padding: 1rem;
  margin-top: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.darkPrimary};
  &.active{
    font-weight: ${(props)=> props.theme.fontWeight.bold};
  }
`;