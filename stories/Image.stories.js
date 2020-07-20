import React from "react";
import Image from "../src/Image";

export default { title: "Image"};

export const rectangleImage = () => (
    <div>
        <Image
            src={"https://www.w3schools.com/css/paris.jpg"}
            alt={"image"}
            width={"360px"}
            shape={"rectangle"}
        />
    </div>
);

rectangleImage.story = {
    name: "Rectangle Image",
};

export const circleImage = () => (
    <div>
        <Image
            src={"https://www.w3schools.com/css/paris.jpg"}
            alt={"image"}
            size={"360px"}
            shape={"circle"}
        />
    </div>
);

circleImage.story = {
    name: "Circle Image",
};

export const squareImage = () => (
    <div>
        <Image
            src={"https://www.w3schools.com/css/paris.jpg"}
            alt={"image"}
            shape={"square"}
        />
    </div>
);

squareImage.story = {
    name: "Square Image",
};