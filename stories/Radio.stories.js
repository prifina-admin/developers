import React from "react";
import Radio from "../src/Radio";
import Label from "../src/Label";

export default { title: "Radio"};

export const defaultRadio = () => (
    <div>
        <Radio id={"default"} />
        <Label htmlFor={"default"} >Default Radio Btn</Label>
    </div>
);
defaultRadio.story = {
    name: "Default Radio Btn"
};

export const customRadio = () => (
    <div>
        <Radio id={"custom1"} />
        <Label htmlFor={"custom1"} color={"textAccent"} fontSize={"xl"}>Custom1 Radio Btn</Label>
    </div>
);
customRadio.story = {
    name: "Custom Radio Btn"
};

export const disabledRadio = () => (
    <div>
        <Radio id={"disabled1"} disabled/>
        <Label htmlFor={"disabled1"}
               opacity={"0.5"}
               cursor={"not-allowed"}
        >Disabled Radio Btn</Label>
    </div>
);
disabledRadio.story = {
    name: "Disabled Radio Btn"
};
