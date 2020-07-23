import React from "react";
import Box from "./Box";

import styled from "styled-components";
import { space } from "styled-system";
import PropTypes from "prop-types";
import { useTheme } from "./theme/ThemeProvider";

const StyledBox = styled(Box)`
  display: flex;
  border: ${props =>
    typeof props.borders !== "undefined"
      ? props.borders
      : props.theme.borders.input.base};
  border-radius: ${props =>
    typeof props.borderRadius !== "undefined"
      ? props.borderRadius
      : props.theme.borders.input.borderRadius};
`;

const IconField = props => {
  const isIcon = item => item.type.isIcon || item.type.isIconButton;
  const { sizes } = useTheme();
  let icons = 0;
  let leftIconExists = false;
  let rightIconExists = false;
  const children = React.Children.toArray(props.children).filter((child, i) => {
    icons += isIcon(child) ? 1 : 0;
    if (isIcon(child) && i === 0) {
      leftIconExists = true;
    }
    if (isIcon(child) && i > 0) {
      rightIconExists = true;
    }
    return child.type.isField || isIcon(child);
  });
  //console.log("ICONS ", icons);
  const styledChildren = children.map((child, i) => {
    if (isIcon(child)) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          flex: "none",
          alignSelf: "center",
          pointerEvents: child.type.isIcon ? "none" : "auto",
          marginLeft: i === 0 ? sizes[7] : 0,
          marginRight: i > 0 ? sizes[7] : 0,
          position: "relative",
        },
      });
    }
    return React.cloneElement(child, {
      borders: 0,
      paddingLeft: leftIconExists ? sizes[8] : sizes[7],
      paddingRight: rightIconExists ? sizes[8] : sizes[7],
    });
  });

  return <StyledBox>{styledChildren}</StyledBox>;
};

export default IconField;

/*
return React.cloneElement(child, {
      style: {
        ...child.props.style,
        paddingLeft: i === 0 ? undefined : 40,
        paddingRight: i === children.length - 1 ? undefined : 40,
      },
    });
import {
  folderOutlineIcon as folderIcon,
  dotsHorizontalIcon as settingsIcon,
  viewAgendaOutlineIcon as modelsIcon,
  BlendIcon,
} from "@blend-ui/icons";
import { I18n } from "../amplify/";

const ListItemIconLink = ({ children, icon, onClick, ...props }) => (
  <React.Fragment>
    <BlendIcon iconify={icon} size={"20"} />
    <Text ml={icon ? "14px" : 0} fontSize={"13px"} {...props}>
      {children}
    </Text>
  </React.Fragment>
);

const FieldElement = styled.a.attrs(props => ({
  rel: props.target === "_blank" ? "noopener" : null,
}))`
  cursor: pointer;
  text-decoration: none;
  color: currentColor;

  &:hover {
    color: ${props => props.theme.colors.textLink};
    text-decoration: underline;
  }
  ${space}
`;

const IconField = forwardRef(({ href, ...props }, ref) => {
  return <LinkElement href={href} {...props} ref={ref} />;
});

IconField.displayName = "Link";
IconField.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};
export default IconField;
*/
