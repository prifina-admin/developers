import React, {Component, forwardRef} from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {default as styledProps} from "@styled-system/prop-types";
import {
    border,
    layout,
    space,
    compose,
    color,
    background,
    borderColor,
    borderRadius,
} from "styled-system";

const systemProps = compose(
    layout,
    space,
    border,
    color,
    background,
    borderColor,
    borderRadius,
);

const CheckboxElement = styled.input`
    ${systemProps};
`;

const Checkbox =  forwardRef((props, ref) => {
    return <CheckboxElement type="checkbox" {...props} ref={ref} />;
});

Checkbox.propTypes = {
    ...styledProps.space,
    ...styledProps.background,
    ...styledProps.color,
    ...styledProps.layout,
    ...styledProps.border,
    ...styledProps.borderColor,
    ...styledProps.borderRadius,
}

export default Checkbox;