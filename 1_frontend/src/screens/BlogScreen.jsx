import React from "react";
import styled from "styled-components";

// style
const StyledBlogScreen = styled.main`
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogScreen = () => {
  return (
    <StyledBlogScreen>
      <h1>Blog Page</h1>
    </StyledBlogScreen>
  );
};

export default BlogScreen;
