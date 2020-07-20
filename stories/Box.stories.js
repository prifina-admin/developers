import React from "react";
import Box from "../src/Box";
import Divider from "../src/Divider";

export default { title: "Box" };

export const registerBox = () => (
    <div>
        <Box
            bg={"#F6F6F6"}
            width={"642px"}
            height={"857px"}
            m={"auto"}
        >
            <Box bg={"white"} width={"420px"} height={"46px"} m={"auto"} mb={"10px"}/>
            <Box bg={"white"} width={"420px"} height={"46px"} m={"auto"} mb={"10px"}/>
            <Box bg={"white"} width={"420px"} height={"46px"} m={"auto"} mb={"10px"}/>

        </Box>

        <Divider
            color={"#00847A"}
            width={"642px"}
            height={"2px"}
            // mt={"0px"}
            m={"auto"}
            ml={"auto"}
            mr={"auto"}
        />
    </div>
);

registerBox.story = {
    name: "Register Box Component",
};

export const loginBox = () => (
    <div>
        <Box
            bg={"#F6F6F6"}
            width={"500px"}
            height={"550px"}
            m={"auto"}
        >

        </Box>

        <Divider
            color={"#00847A"}
            width={"500px"}
            height={"2px"}
            m={"auto"}
            ml={"auto"}
            mr={"auto"}
        />
    </div>
);

loginBox.story = {
    name: "Login Box Component",
};

