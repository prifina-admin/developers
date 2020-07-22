import React, { forwardRef } from "react";

import styled, { css } from "styled-components";
import {
  space,
  layout,
  typography,
  border,
  color,
  compose,
} from "styled-system";
//import PropTypes from "prop-types";

const systemProps = compose(layout, color, space, border, typography);
const inputTheme = css`
  appearance: none;
  display: block;
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes["14"]};
  line-height: ${props => props.theme.sizes["20"]};
  color: inherit;
  background-color: transparent;
  border: ${props =>
    typeof props.borders !== "undefined"
      ? props.borders
      : props.theme.borders.input.base};
  border-radius: ${props =>
    typeof props.borderRadius !== "undefined"
      ? props.borderRadius
      : props.theme.borders.input.borderRadius};
  margin: 0;
  padding-left: ${props => props.theme.sizes[7]};
  padding-right: ${props => props.theme.sizes[7]};
  padding-top: ${props => props.theme.sizes[13]};
  padding-bottom: ${props => props.theme.sizes[13]};
  ::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
  &:disabled {
    opacity: 0.25;
  }
  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  ::-ms-clear {
    display: none;
  }
  ${systemProps}
`;

const themeColorStyles = props => {
  //console.log("custom ", props);
  return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
};
const InputElement = styled.input`
  ${inputTheme}
  ${themeColorStyles}
`;

const Input = forwardRef((props, ref) => {
  console.log("INPUT  ", props);
  return <InputElement {...props} ref={ref} />;
});
Input.defaultProps = {
  type: "text",
  width: "100%",
};

Input.displayName = "Input";
Input.isField = true;
/*
Input.propTypes = {
  type: PropTypes.string.isRequired,
};
*/
export default Input;
