import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// style
const StyledButton = styled.button``;
const Button = ({ type, text }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
