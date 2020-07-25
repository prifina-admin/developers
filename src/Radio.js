import React, { forwardRef } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import {
  radioboxMarkedIcon as RadioChecked,
  radioboxBlankIcon as RadioEmpty,
  BlendIcon,
} from "@blend-ui/icons";

const RadioWrap = styled.div`
  display: inline-block;
  color: black;
  cursor: pointer;
  vertical-align: middle;
  &:hover > svg {
    color: gray;
  }
`;

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;

  & ~ svg {
    border: 1px solid transparent;
    border-radius: 50%;
    padding: 2px;
  }

  &:focus {
    box-shadow: none;
    & ~ svg {
      border: 1px solid black;
      background-color: white;
    }
  }
  &:checked ~ svg {
    color: black;
  }
  &:disabled ~ svg {
    color: black;
  }
`;

const RadioIcon = ({ checked, ...props }) => {
  return checked ? (
    <BlendIcon iconify={RadioChecked} {...props} />
  ) : (
    <BlendIcon iconify={RadioEmpty} {...props} />
  );
};

/*
  const Select = forwardRef((props, ref) => {
    return (
      <StyledBox width={"100%"}>
        <SelectElement {...props} ref={ref} />
        <ClickableIcon iconify={ChevronDown} />
      </StyledBox>
    );
  });
  */

const Radio = forwardRef((props, ref) => {
  const { checked, disabled } = props;

  //const borderAdjustedSize = parseInt(size) + 4;
  const borderAdjustedSize = "1.5rem";

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} ref={ref} />
      <RadioIcon checked={checked} size={borderAdjustedSize} />
    </RadioWrap>
  );
});
/*
Radio.defaultProps = {
  color: "primary",
  size: "24",
};
*/
/*
Radio.propTypes = {
  size: PropTypes.string,
};
*/

Radio.displayName = "Radio";

export default Radio;
