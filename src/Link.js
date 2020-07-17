import React, { forwardRef } from "react";

import styled from "styled-components";

import { space } from "styled-system";

const LinkElement = styled.a.attrs(props => ({
  rel: props.target === "_blank" ? "noopener" : null,
}))`
  cursor: pointer;
  text-decoration: none;
  color: "currentColor";

  &:hover {
    color: "currentColor";
    text-decoration: underline;
  }
  ${space}
`;

const Link = forwardRef((props, ref) => {
  return <LinkElement {...props} ref={ref} />;
});

Link.displayName = "Link";

export default Link;
