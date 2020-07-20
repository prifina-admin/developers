import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, typography, textStyle, color, layout } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

// const TextComponent= styled.text`
//     text-transform: ${props => props.textTransform || "none"};
//     text-decoration-line: ${props => props.textDecorationLine || "none"};
//     ${space};
//     ${typography};
//     ${textStyle};
//     ${color};
//     ${layout};
// `;

const TextComponent = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        !["color", "fontSize", "fontStyle", "textAlign", "textTransform", "textDecorationLine", "m", "fontWeight"].includes(prop),
})`
  text-transform: ${props => props.textTransform || "none"};
  text-decoration-line: ${props => props.textDecorationLine || "none"};
  ${space};
  ${textStyle};
  ${typography};
  ${layout};
  ${color};
`;

const Text = ({ textTransform, textDecorationLine, ...props }) => {
    return <TextComponent textTransform={textTransform} textDecorationLine={textDecorationLine} {...props} />;
};

// const Text = props => {
//   console.log("PROPS: ", props);
//   const { textTransform, textDecorationLine, ...other } = props;
//
//   console.log("MyTransform: ", textTransform);
//   console.log("MyDecorationLine: ", textDecorationLine);
//
//   return <TextComponent textTransform={textTransform}  textDecorationLine={textDecorationLine} {...other} />;
// }

Text.displayName = "Text";

Text.defaultProps = {
  as: "div",
  color: "currentColor",
  fontSize: "30px",
  fontStyle: "normal",
  textAlign: "left",
  textTransform: "none",
  textDecorationLine: "none",
};

Text.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
  ...styledProps.textStyle,
  ...styledProps.color,
  ...styledProps.layout,
  color: PropTypes.string,
  textTransform: PropTypes.oneOf(["capitalize", "uppercase", "lowercase", "none"]),
  textDecorationLine: PropTypes.oneOf(["overline", "line-through", "underline", "none"]),
};

export default Text;
