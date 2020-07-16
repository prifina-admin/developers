import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, typography } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
//import { themeGet } from "@styled-system/theme-get";

const customPropsList = { bold: "fontWeight", italic: "fontStyle" };

//const theme={"color":"currentColor","fontFamily":"body"};

const customProps = props => {
  let propsList = [];
  Object.keys(props).forEach(p => {
    if (Object.keys(customPropsList).indexOf(p) > -1) {
      let cssProp = {};
      cssProp[customPropsList[p]] = p;
      propsList.push(cssProp);
    }
  });
  return propsList;
};
/*
//https://styled-system.com/how-it-works
const TextElement = styled.div`
  ${textStyle}
  ${typography}
  ${space}
  ${color}
  ${customProps}
  color: ${props => (props.color ? props.color : "currentColor")};
  font-family: ${props => (props.fontFamily ? props.fontFamily : "body")};
`;
*/
/*
//https://styled-components.com/releases
const TextElement = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !["color", "fontFamily"].includes(prop),
})`
  ${textStyle}
  ${typography}
  ${space}
  ${color}
  ${customProps}
`;
*/
const color = props => {
  console.log("PROPS ", props);

  return {
    color: props.color ? props.color : props.theme.colors["textPrimary"],
  };
};
const textStyles = props => {
  return props.textStyle ? props.theme.textStyles[props.textStyle] : null;
};
const colorStyles = props => {
  return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
};
// https://styled-system.com/guides/build-a-box

const TextElement = styled.div(
  typography,
  space,
  color,
  customProps,
  textStyles,
  colorStyles,
);

const Text = ({ as, ...props }) => {
  console.log("PROPS ", props);
  /* color: themeGet("palette.primary.main")(props), */
  return <TextElement as={as} {...props} />;
};

Text.displayName = "Text";
Text.defaultProps = {
  as: "div",
  //color: "currentColor",
  //fontFamily: "body",
};

Text.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
  ...styledProps.textStyle,
  ...styledProps.color,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
};

export default Text;
