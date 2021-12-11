import React from "react";
import styled from "styled-components";

// style
const StyledFooter = styled.section`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} My Blog</p>
    </StyledFooter>
  );
};

export default Footer;
