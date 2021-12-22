import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input``;

const Input = ({ type, completeValue }) => {
  return <StyledInput type={type} autoComplete={completeValue}></StyledInput>;
};

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
