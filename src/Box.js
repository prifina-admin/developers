import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, typography, color, layout, flexbox } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const BoxComponent = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        !["color", "m", "bg", "size", "width", "height", "flexDirection", "mb"].includes(prop),
})`
  flex-direction: ${props => props.flexDirection || "row"};
  ${space};
  ${typography}
  ${layout};
  ${color};
  ${flexbox};
`;

const Box = ({ ...props }) => {
    return  <BoxComponent {...props} />;
};

Box.displayName = "Box";

Box.defaultProps = {
    as: "div",
    flexDirection: "column",
};

Box.propTypes = {
    ...styledProps.space,
    ...styledProps.color,
    ...styledProps.layout,
    ...styledProps.typography,
    ...styledProps.flexbox,
}

export default Box;
