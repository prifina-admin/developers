import React from "react";
import IconButton from "../src/IconButton";
import {tableCogIcon} from "@blend-ui/icons";


export default { title: "IconButton" };
export const iconButton = () => (
    <IconButton iconify={tableCogIcon} />
);

iconButton.story = {
    name: "IconButton",
};