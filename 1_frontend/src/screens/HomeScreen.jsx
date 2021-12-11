import React from "react";
import styled from "styled-components";

// style
const StyledHomeScreen = styled.main`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HomeScreen = () => {
  return (
    <StyledHomeScreen>
      <h1>Home page</h1>
    </StyledHomeScreen>
  );
};

export default HomeScreen;
