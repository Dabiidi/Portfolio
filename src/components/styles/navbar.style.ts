import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: linear-gradient(to right, #ff6a00, #ee0979);

  top: 0;

  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin: 0 1.5rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ff6a00;
  }
`;
