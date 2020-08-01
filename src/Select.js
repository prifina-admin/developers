import React, {forwardRef} from "react";

import styled from "styled-components";
import Button from "./Button";
import {default as styledProps} from "@styled-system/prop-types";
import PropTypes from "prop-types";

const SelectElement = styled.select`
  width:  ${props => props.width || "50%"};
  height: $${props => props.height || "35px"};
  background: ${props => props.backgroundColor || "gray"};
  color: ${props => props.color || "gray"};
  padding-left: ${props => props.paddingLeft || "15px"};
  font-size: ${props => props.fontSize || "14px"};
  border: ${props => props.border};
  margin-left: ${props => props.marginLeft || "10px"};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};  
    
  option {
    color: ${props => props.optionColor || "black"};
    background: ${props => props.optionBackground || "white"};
    display:  ${props => props.display || "flex"};
    white-space: ${props => props.whiteSpace || "pre"};;
    min-height: ${props => props.minHeight || "20px"};
    padding: ${props => props.padding || "0px 2px 1px"};
  }
`;

export const Select = forwardRef(({headerName, optionNames, ...props }, ref)=> {
    return(
          <SelectElement {...props} ref={ref}>
              <option value="" hidden>
                  {headerName}
              </option>
              {optionNames.map((name, index) => (
                  <option value={index}>{name}</option>
              ))}
          </SelectElement>
  );
});

Select.propTypes = {
    ...styledProps.layout,
    ...styledProps.space,
    ...styledProps.color,
    optionColor: PropTypes.string,
    optionBackground: PropTypes.string,
};

export default Select;