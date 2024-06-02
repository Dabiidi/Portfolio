import React from 'react';
import { Li, Nav, StyledLink, Ul } from './styles/navbar.style';



const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/about">About</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/contact">Contact</StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};
export default Navbar;
