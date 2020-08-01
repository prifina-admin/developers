import React from "react";
import Select from "../src/Select";

export default { title: "Select" };

const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

export const select = () => (
    <Select borderColor={"yellow"} headerName={"type"} optionNames={names} color={"red"} optionColor={"red"} backgroundColor={"white"} optionBackground={"gray"}/>
);

select.story = {
    name: "Select",
};