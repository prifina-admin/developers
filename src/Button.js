import React, { forwardRef } from "react";

import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { default as styledProps } from "@styled-system/prop-types";
import { space, typography } from "styled-system";
import Box from "./Box";
import { useId } from "@reach/auto-id";

const Flex = styled(Box)`
  display: flex;
`;

/*
const buttonSize = props => {
  //console.log('SIZE ',props);
  //themeGet(`palette.${color}.${shade}`)(props) ||
  //fontSize: themeGet(`fontSizes[1]`)(props),
  switch (props.size) {
    case "small":
      return {
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: "7px 12px",
      };
    case "medium":
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "9.5px 18px",
      };
    case "large":
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: "12px 22px",
      };
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "9.5px 18px",
      };
  }
};
*/
const buttonVariations = ["fill", "outline", "link", "file"];
/*
const variations = {
  fill: css`
    background-color: ${(props) =>
      getPaletteColor(props.disabled ? "light" : "base")(props)};
    color: ${(props) =>
      getTextColorOn(props.disabled ? "light" : "base")(props)};

    &:hover {
      background-color: ${(props) =>
        getPaletteColor(props.disabled ? "light" : "dark")(props)};
      ${(props) =>
        props.disabled ? "" : `color: ${getTextColorOn("dark")(props)};`}
    }
  `,
  outline: css`
    color: ${(props) =>
      getPaletteColor(props.disabled ? "light" : "base")(props)};
    box-shadow: inset 0 0 0 2px
      ${(props) => getPaletteColor(props.disabled ? "light" : "base")(props)};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      ${(props) =>
        props.disabled
          ? ""
          : `
        color: ${getPaletteColor("dark")(props)};
        box-shadow: inset 0 0 0 2px ${getPaletteColor("dark")(props)};
      `}
    }
  `,
  link: css`
    -webkit-font-smoothing: inherit;
    font-weight: 500;
    color: ${getPaletteColor("base")};
    line-height: ${(props) => props.theme.lineHeights.standard};
    vertical-align: inherit;
    padding: 0;
    background-color: transparent;
    &:hover {
      color: ${getPaletteColor("dark")};
      text-decoration: underline;
    }
  `,
};
*/
/*
const fileVariation = {
  file: css`
    background-color: ${(props) =>
      getPaletteColor(props.disabled ? "light" : "base")(props)};
    color: ${(props) =>
      getTextColorOn(props.disabled ? "light" : "base")(props)};

    &:hover {
      background-color: ${(props) =>
        getPaletteColor(props.disabled ? "light" : "dark")(props)};
      ${(props) =>
        props.disabled ? "" : `color: ${getTextColorOn("dark")(props)};`}
    }
  `,
};
*/
/**
- Use the <Button /> component to render a primitive button. Use the `variation` prop to change the look of the button.
**/

const buttonVariation = props => {
  //console.log("VARIATION ", props);
  let buttonProps = props.theme.componentStyles.button[props.variation];
  let hoverVariations = null;
  if (props.variation === "link")
    hoverVariations = css`
      &:hover {
        text-decoration: underline;
      }
    `;
  //console.log(hoverVariations);
  return [buttonProps, hoverVariations];
};
const buttonTheme = css`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  height: auto;
  width: auto;
  min-width: ${props =>
    props.minWidth || props.theme.componentStyles.button[props.size].minWidth};
  line-height: ${props =>
    props.lineHeight ||
    props.theme.componentStyles.button[props.size].lineHeight};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  border-radius: ${props => props.theme.radius};
  border-width: 0;
  border-style: solid;
  font-size: ${props =>
    props.fontSize || props.theme.componentStyles.button[props.size].fontSize};
  padding: 0;
  padding-left: ${props =>
    props.paddingLeft ||
    props.theme.componentStyles.button[props.size].paddingLeft};
  padding-right: ${props =>
    props.paddingRight ||
    props.theme.componentStyles.button[props.size].paddingRight};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }
  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
/*
<Flex>
              <input
                disabled={importDisabled}
                style={{ display: "none" }}
                type="file"
                accept=".json, .graphql"
                id="file_upload"
                name="file_upload"
                onChange={(e) => _importFile(e)}
              />
              <Button
                disabled={importDisabled}
                variation={"file"}
                input="file_upload"
              >
                {I18n.get("Import Data Model")}
              </Button>
            </Flex>
            
*/

const FileInputElement = styled.input.attrs(props => ({
  type: "file",
}))`
  display: none;
`;

const ButtonElement = styled.button`
    /*  */
    ${buttonTheme}
    ${buttonVariation}
    ${space}
    ${typography}
    `;

const Button = forwardRef((props, ref) => {
  console.log("BUTTON ", props);
  if (props.variation === "file" && props.onChange) {
    const inputID = useId(props.id);
    const { id, name, accept, onChange, disabled, ...rest } = props;
    return (
      <Flex>
        <FileInputElement
          id={inputID}
          name={inputID}
          accept={accept}
          disabled={disabled}
          onChange={onChange}
        />
        <ButtonElement
          as={"label"}
          htmlFor={inputID}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
      </Flex>
    );
  } else {
    return <ButtonElement {...props} ref={ref} />;
  }
});

Button.propTypes = {
  /** Fixed width&height */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Styled layout props */
  ...styledProps.layout,
  /** Styled space props */
  ...styledProps.space,

  /** Variations */
  variation: PropTypes.oneOf(buttonVariations),
  /** Button is disabled */
  disabled: PropTypes.bool,
  /** Button is click event */
  onClick: PropTypes.func,
  /** File upload button, htmlFor input element */
  //input: PropTypes.string,
  /** Input file selected event */
  onChange: PropTypes.func,
};

Button.defaultProps = {
  variation: "fill",
  size: "md",
};

Button.displayName = "Button";

export default Button;
