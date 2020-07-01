import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, typography, textStyle } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const Text = (props) => {
  const { children, as, ...rest } = props;

  return <div>This is just test</div>;
};

Text.displayName = "Text";
Text.defaultProps = {
  as: "div",
  color: "currentColor",
};

Text.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
  ...styledProps.textStyle,
};

export default Text;
