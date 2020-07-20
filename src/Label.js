import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, color, typography, textStyle } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const LabelComponent = styled("label").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
      ![].includes(prop),
})`
    ${space};
    ${color};
    ${textStyle};
    ${typography};
`;

const Label = ({ ...props }) => {
    return <LabelComponent {...props} />
};

Label.displayName = "Label";

Label.defaultProps = {
    as: "label",
    color: "black",
    fontSize: "1em",
}

Label.propTypes = {
    ...styledProps.space,
    ...styledProps.color,
    ...styledProps.textStyle,
    ...styledProps.typography,
};

export default Label;
