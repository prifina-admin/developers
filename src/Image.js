import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, layout } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const ImageComponent = styled("img").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        !["alt", "myBorderRadius", "width", "widthProps", "heightProps", "myWidth", "myHeight"].includes(prop),
})`
    border-radius: ${props => props.myBorderRadius || "0%"};
    width: ${props => props.myWidth};
    height: ${props => props.myHeight};
    ${space};
    ${layout};
`;

const Image = ({ src, alt, shape, ...props }) => {
    var borderRadiusProps, widthProps, heightProps;

    if (shape === "circle") {
        borderRadiusProps = "50%";
    } else if (shape === "square") {
        widthProps = "360px";
        heightProps = "360px";
    } else{
        borderRadiusProps = "0%";
    }

    return <ImageComponent src={src} alt={alt}
                           myBorderRadius={borderRadiusProps}
                           myWidth={widthProps}
                           myHeight={heightProps}
                           {...props} />;
};

Image.displayName = "Image";

Image.defaultProps = {
    as: "img",
    src: "",
    alt: "image",
    shape: "rectangle",
    widthProps: "100%",
    heightProps: "100%",
};

Image.propTypes = {
    ...styledProps.space,
    ...styledProps.layout,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;


