import React from "react";
import styled from "styled-components";

// style
const StyledContactScreen = styled.main`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactScreen = () => {
  return (
    <StyledContactScreen>
      <h1>Contact Page</h1>
    </StyledContactScreen>
  );
};

export default ContactScreen;
