import React, { forwardRef } from "react";
import styled from "styled-components";
import { width } from "styled-system";

const shape = props => {
  let shapeCss = null;
  if (props.shape) {
    if (props.shape === "circle") shapeCss = { "border-radius": "50%" };
    if (props.shape === "rounded") shapeCss = { "border-radius": "4%" };
  }
  return shapeCss;
};
const ImageElement = styled.img.attrs(props => ({
  height: props.height || "auto",
}))`
  display: block;
  max-width: 100%;
  ${width}
  ${shape}
`;

const Image = forwardRef(({ alt, ...props }, ref) => {
  return <ImageElement {...props} alt={alt} ref={ref} />;
});
Image.displayName = "Image";

export default Image;
