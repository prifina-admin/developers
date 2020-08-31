import React from "react";
import styled from "styled-components";

import { default as styledProps } from "@styled-system/prop-types";
import {
    background,
    border,
    color,
    flexbox,
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
    flexbox,
);

const InputComponent = styled.input`
    ${systemProps};
`;

const Input = props  => {
    const { ...other } = props;
    return <InputComponent {...other}/>;
}

Input.defaultProps = {
    color: "currentColor",
};

Input.defaultProps = {
    width: "420px",
    height: "46px",
    border: "1px solid #1E1D1D",
    borderRadius: "2px",
    textAlign: "left",
};


Input.propTypes = {
    ...styledProps.space,
    ...styledProps.color,
    ...styledProps.layout,
    ...styledProps.background,
    ...styledProps.border,
    ...styledProps.typography,
    ...styledProps.flexbox,
};

export default Input;