import React from "react";
import styled from "styled-components";

import { default as styledProps } from "@styled-system/prop-types";
import {
    background,
    border,
    color,
    layout,
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
    typography,
);

const ButtonComponent = styled.button`
    ${systemProps}
`;

const Button = ({...props})  => {
    return <ButtonComponent {...props}/>;
}

Button.defaultProps = {
    color: "currentColor",
};

Button.defaultProps = {
    width: "150px",
    height: "48px",
    borderRadius: "4px",
    color: "#FFFFFF",
    fontSize: "16px",
    fontStyle: "normal",
    textAlign: "center",
};

Button.propTypes = {
    ...styledProps.space,
    ...styledProps.color,
    ...styledProps.layout,
    ...styledProps.background,
    ...styledProps.border,
    ...styledProps.typography,
};

export default Button;