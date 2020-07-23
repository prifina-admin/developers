import React from "react";
import Box from "../src/Box";
import Divider from "../src/Divider";
export default { title: "Box" };

export const box = () => (
    <div>
        <Box bg={"#FAFAFA"} width={"642px"} height={"857px"}/>
        <Divider color={"#00847A"} height={"6px"} width={"642px"}/>
    </div>


);

box.story = {
    name: "Box Component",
};