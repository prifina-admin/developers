import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, layout } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const AvatarComponent = styled("img")`
    border-radius: 50%;
    ${space};
    ${layout};
`;

const Avatar = ({ src, alt, name, size, ...props }) => {
    src = getLetterAvatar(name, size);
    return <AvatarComponent src={src} alt={alt} {...props} />;
};

function getLetterAvatar(name, size) {
    name = name || "";
    size = size || 30;

    var colors = [
        "#5A8770", "#B2B7BB", "#6FA9AB", "#F5AF29",
        "#0088B9", "#F18636", "#D93A37", "#A6B12E",
        "#5C9BBC", "#F5888D", "#9A89B5", "#407887",
        "#9A89B5", "#5A8770", "#D33F33", "#A2B01F",
        "#F0B126", "#0087BF", "#F18636", "#0087BF",
        "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770",
        "#EEB424", "#407887"
    ];
    var nameArray = String(name).toUpperCase().split(' ');
    var initials, charIndex, colorIndex, canvas, context, dataURL;

    if (nameArray.length == 1) {
        initials = nameArray[0] ? nameArray[0].charAt(0) : '?';
    } else {
        initials = nameArray[0].charAt(0) + nameArray[1].charAt(0);
    }

    if (window.devicePixelRatio) {
        size = (size * window.devicePixelRatio);
    }

    charIndex  = (initials == '?' ? 72 : initials.charCodeAt(0)) - 65;
    colorIndex = charIndex % 26;

    canvas  = document.createElement('canvas');
    canvas.width  = size;
    canvas.height = size;
    context = canvas.getContext("2d");

    context.fillStyle = colors[colorIndex];
    context.fillRect (0, 0, canvas.width, canvas.height);
    context.font = Math.round(canvas.width/2)+"px Arial";
    context.textAlign = "center";
    context.fillStyle = "#FFFFFF";
    context.fillText(initials, size / 2, size / 1.5);

    dataURL = canvas.toDataURL();
    canvas  = null;

    return dataURL;
}

Avatar.displayName = "Avatar";

Avatar.defaultProps = {
    as: "img",
    src: "",
    alt: "Avatar Image",
}

Avatar.propTypes = {
    ...styledProps.space,
    ...styledProps.layout,
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default Avatar;