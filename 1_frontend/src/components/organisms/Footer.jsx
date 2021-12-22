import React from "react";
import styled from "styled-components";
import customData from "../../data.json";

// style
const StyledFooter = styled.section`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #5526c4;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()} {customData.footer.blogName}
      </p>
    </StyledFooter>
  );
};

export default Footer;
