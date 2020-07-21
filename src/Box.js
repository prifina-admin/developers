import React, { forwardRef } from "react";

import styled from "styled-components";

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from "styled-system";

const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
);
const colorStyles = props => {
  return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
};
/*
.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
      !["color", "m", "bg", "size", "width", "height", "flexDirection", "mb"].includes(prop),
})
*/

const BoxElement = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    let propsList = Object.keys(systemProps);
    propsList.push("colorStyles");
    return !propsList.includes(prop);
  },
})`
  ${systemProps}
  ${colorStyles}
`;

// https://reactjs.org/docs/forwarding-refs.html
const Box = forwardRef((props, ref) => {
  return <BoxElement {...props} ref={ref} />;
});
/*
const Box = styled.div`
  ${layout}
`;
*/
Box.displayName = "Box";

export default Box;
