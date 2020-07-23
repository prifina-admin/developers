import React from "react";
import styled from "styled-components";

import { space, color, layout } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const BoxComponent = styled.div`
     ${space};
     ${color};
     ${layout};
`;

const Box = ({...props})  => {
    return <BoxComponent {...props} />;
}


Box.displayName = "Box";

Box.defaultProps = {
    color: "currentColor",
};

Box.propTypes = {
    ...styledProps.space,
    ...styledProps.color,
    ...styledProps.layout,
};

export default Box;