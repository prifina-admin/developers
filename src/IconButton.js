import React, {forwardRef} from 'react';
import styled from "styled-components";
import Button from "./Button";
import Text from "./Text";
import {
    BlendIcon,
} from "@blend-ui/icons";

const ClickableIcon = styled(BlendIcon).attrs(props => ({
    color: props.theme.colors.black,
}))`
  pointer-events: none;
`;

const IconButton = forwardRef(( props, ref) => {
    const { iconify, buttonText, ...rest } = props;
    return (
        <Button flexDirection="column">
            <Text>{buttonText}</Text>
            <ClickableIcon {...props} iconify = {iconify}/>
        </Button>
    );
});

IconButton.displayName = "IconButton";

export default IconButton;
