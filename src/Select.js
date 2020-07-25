import React from "react";
import styled from "styled-components";
import { space, typography } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import { menuDownIcon as ChevronDown, BlendIcon } from "@blend-ui/icons";
import Box from "./Box";
//import PropTypes from "prop-types";

const selectVariation = props => {
  //console.log("VARIATION ", props);
  let selectProps = props.theme.componentStyles.select;

  return selectProps;
};

const SelectElement = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  margin:0;
  ${selectVariation}
  ${space} ${typography}
  ::-ms-expand {
    display: none;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const ClickableIcon = styled(BlendIcon).attrs(props => ({
  color: props.theme.colors.black,
}))`
  pointer-events: none;
  margin-left: -32px;
`;

const Select = styled(props => (
  <StyledBox width={"100%"}>
    <SelectElement {...props} />
    <ClickableIcon iconify={ChevronDown} />
  </StyledBox>
))``;

/*
Select.defaultProps = {
  m: 0,
  pl: 12,
  pr: 32,
  py: 14,
};
*/
Select.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
};
Select.displayName = "Select";
Select.isField = true;

export default Select;
