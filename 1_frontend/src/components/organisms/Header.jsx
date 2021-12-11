import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// style
const StyledHeader = styled.header`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 20vw;
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: orangered;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/admin">Admin</Link>
      </ul>
    </StyledHeader>
  );
};

export default Header;
