import React from "react";
import styled from "styled-components";
import { Checkbox, Box, Label } from "../src";
import { action } from "@storybook/addon-actions";

export default { title: "Checkbox" };

const StyledLabel = styled(Label)`
  cursor: pointer;
  font-size: 12px;
  vertical-align: middle;
`;

const Wrapper = (props) => (
  <Box p="12px" my="6px" fontSize="12px">
    {props.title ? <Heading.h6 mb="12px">{props.title}</Heading.h6> : null}
    {props.children}
  </Box>
);

const checkAction = (e) => {
  action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
};

export const checkbox = () => (
  <div>
    <Wrapper>
      <StyledLabel htmlFor="unchecked_box">
        <Checkbox id="unchecked_box" onChange={checkAction} />
        Unchecked by default
      </StyledLabel>
    </Wrapper>
  </div>
);
