import React from "react";
import styled from "styled-components";

// style
const StyledGalleryScreen = styled.main`
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdminScreen = () => {
  return (
    <StyledGalleryScreen>
      <h1>Gallery page</h1>
    </StyledGalleryScreen>
  );
};

export default AdminScreen;
