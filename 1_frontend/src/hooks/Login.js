import React from "react";
import styled from "styled-components";

// components
import LoginForm from "../components/molecules/LoginForm";

// style
const StyledLogin = styled.main`
  height: 87vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
};

export default Login;
