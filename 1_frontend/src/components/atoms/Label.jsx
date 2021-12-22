import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label``;

const Label = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};

Label.propTypes = {
  text: PropTypes.string,
};

export default Label;
