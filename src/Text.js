import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, typography, textStyle, color } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const customPropsList = { bold: "fontWeight", italic: "fontStyle" };

//const theme={"color":"currentColor","fontFamily":"body"};

export const customProps = props => {
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

// https://styled-system.com/guides/build-a-box
const TextElement = styled("div")`
  ${textStyle}
  ${typography}
  ${space}
  ${color}
  ${customProps}
`;

const Text = ({ as, ...props }) => {
  return <TextElement as={as} {...props} />;
};

Text.displayName = "Text";
Text.defaultProps = {
  as: "div",
  color: "currentColor",
  fontFamily: "body",
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
