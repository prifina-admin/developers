import React from "react";
import Box from "./Box";

import styled from "styled-components";
import { space } from "styled-system";
//import PropTypes from "prop-types";
import { useTheme } from "./theme/ThemeProvider";

const StyledBox = styled(Box)`
  ${space}
  display: flex;
  border: ${props =>
    typeof props.borders !== "undefined"
      ? props.borders
      : props.theme.borders.input.base};
  border-radius: ${props =>
    typeof props.borderRadius !== "undefined"
      ? props.borderRadius
      : props.theme.borders.input.borderRadius};
`;

const IconField = props => {
  const isIcon = item => item.type.isIcon || item.type.isIconButton;
  const { sizes } = useTheme();
  let icons = 0;
  let leftIconExists = false;
  let rightIconExists = false;
  const children = React.Children.toArray(props.children).filter((child, i) => {
    icons += isIcon(child) ? 1 : 0;
    if (isIcon(child) && i === 0) {
      leftIconExists = true;
    }
    if (isIcon(child) && i > 0) {
      rightIconExists = true;
    }
    return child.type.isField || isIcon(child);
  });
  //console.log("ICONS ", icons);
  const styledChildren = children.map((child, i) => {
    if (isIcon(child)) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          flex: "none",
          alignSelf: "center",
          pointerEvents: child.type.isIcon ? "none" : "auto",
          marginLeft: i === 0 ? sizes[7] : 0,
          marginRight: i > 0 ? sizes[7] : 0,
          position: "relative",
        },
      });
    }
    return React.cloneElement(child, {
      borders: 0,
      paddingLeft: leftIconExists ? sizes[8] : sizes[7],
      paddingRight: rightIconExists ? sizes[8] : sizes[7],
    });
  });

  return <StyledBox>{styledChildren}</StyledBox>;
};

export default IconField;
