import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 15rem;
  width: 20rem;
`;

const LoginForm = ({ props }) => {
  // hooks
  // state
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // custom functions

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);

    axios
      .post("http://localhost:8080/users/signin", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong, try again later");
      });
  };

  return (
    <div className="login-wrapper">
      <h1>Please log in</h1>
      <StyledLoginForm onSubmit={handleLogin}>
        <div className="label-input">
          <label>
            <p>Username</p>
            <Input type="text" {...username} complete="new-password" />
          </label>
        </div>
        <div className="label-input">
          <label>
            <p>Password</p>
            <Input type="password" {...password} complete="new-password" />
          </label>
        </div>
        <div>
          <Button
            type="submit"
            text="Submit"
            value={loading ? "Loading..." : "Login"}
            onClick={handleLogin}
            disabled={loading}
          />
        </div>
      </StyledLoginForm>
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default LoginForm;
