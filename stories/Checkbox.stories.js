import React from "react";
import Checkbox from "../src/Checkbox";

export default { title: "Checkbox" };

var state = { checked: false }

var handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
}

export const checkbox = () => (
    <div>
        <label>
            <Checkbox />
            One
        </label>
    </div>
);

checkbox.story = {
    name: "Checkbox",
};

export const checkbox2 = () => (
    <div>
        <label>
            <Checkbox width = {"35px"} height = {"35px"}/>
            Two
        </label>
    </div>
);

checkbox2.story = {
    name: "Checkbox2",
};

export const checkbox3 = () => (
    <div>
        <label>
            <Checkbox width = {"35px"} height = {"35px"} bgColor={"red"} borderColor={"green"} marginLeft={"60px"}/>
            Three
        </label>
    </div>
);

checkbox3.story = {
    name: "Checkbox3",
};