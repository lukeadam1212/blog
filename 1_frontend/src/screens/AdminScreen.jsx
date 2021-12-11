import React from "react";
import styled from "styled-components";

// style
const StyledAdminScreen = styled.main`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdminScreen = () => {
  return (
    <StyledAdminScreen>
      <h1>Admin page</h1>
    </StyledAdminScreen>
  );
};

export default AdminScreen;
