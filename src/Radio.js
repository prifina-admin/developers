import React, {forwardRef} from "react";
import styled, { css } from "styled-components";
import { space, layout, compose } from "styled-system";
import PropTypes from "prop-types";

const systemProps = compose(layout, space);

const radioTheme = css`
  appearance: radio;
  cursor: pointer;
  border-radius: 50%;
  margin: 3px 3px 0px 5px;
  padding: initial;
  border: initial;
  
  ${systemProps}
`;

const RadioElement = styled.input`
  ${radioTheme}
`;

const Radio = forwardRef((props, ref) => {
   return <RadioElement {...props} ref={ref} />;
});

Radio.defaultProps = {
    as: "input",
    type: "radio",
    onChange: () => {},
};

Radio.propTypes = {
    onChange: PropTypes.func,
}

Radio.displayName = "Radio";

export default Radio;
