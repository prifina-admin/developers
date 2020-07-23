import React from "react";
import Button from "../src/Button";
export default { title: "Button" };

export const button = () => (
    <div>
        <Button bg={"#00847A"}>button</Button>
    </div>
);

button.story = {
    name: "Button Component",
};