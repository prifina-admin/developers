import React from "react";
import Label from "../src/Label";

export default { title: "Label"};

export const emailAddrLabel = () => (
    <div>
        <Label
            fontFamily={"Montserrat"}
            fontStyle={"normal"}
            fontWeight={"bold"}
            fontSize={"14px"}
            lineHeight={"21px"}
            color={"#1E1D1D"}
        >
            Your email address
        </Label>
    </div>
);

emailAddrLabel.story = {
    name: "Email Address Label",
};