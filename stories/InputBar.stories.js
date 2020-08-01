import React from "react";
import Input from "../src/InputBar";
export default { title: "Input" };

export const input = () => (
    <div>
        <Input bg={"#FFFFFF"} borderColor={"#D1D6DB"} placeholder={"Password"}/>
    </div>


);

input.story = {
    name: "Input Component",
};