import React, {forwardRef} from 'react';
import styled from "styled-components";
import Button from "./Button";
import {
    BlendIcon,
} from "@blend-ui/icons";

const ClickableIcon = styled(BlendIcon).attrs(props => ({
    color: props.theme.colors.black,
    textAlign: "center",
}))`
  pointer-events: none;
`;

const IconButton = forwardRef(( props, ref) => {
    const { iconify,  ...rest } = props;
    return (
        <Button variation={"link"} textDecoration={"none"}>
            <ClickableIcon iconify = {iconify}/>
        </Button>
    );
});

IconButton.displayName = "IconButton";

export default IconButton;
