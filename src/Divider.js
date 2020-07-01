import React from "react";
import styled from "styled-components";
import { space, layout, color } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import PropTypes from "prop-types";

const HRDivider = styled.hr`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${(props) => props.color};
  ${space} ${layout} ${color};
`;

const Divider = (props) => {
  if (props.variation === "hr") return <HRDivider {...props} />;
  //if (props.variation === "div") return <DivDivider {...props} />;
};

Divider.displayName = "Divider";

Divider.defaultProps = {
  color: "black",
  ml: 0,
  mr: 0,
  variation: "hr",
};

Divider.propTypes = {
  ...styledProps.color,
  ...styledProps.space,
  ...styledProps.layout,
  ...styledProps.border,
  variation: PropTypes.oneOf(["hr", "div"]),
};

export default Divider;
