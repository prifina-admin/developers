import React from "react";
import IconField from "../src/IconField";
import Input from "../src/Input";
import { accountIcon, eyeIcon, BlendIcon } from "@blend-ui/icons";

export default { title: "Icon Field" };

export const iconfieldinput = () => (
  <IconField>
    <BlendIcon iconify={accountIcon} />
    <Input placeholder={"Enter value here"} />
  </IconField>
);
iconfieldinput.story = {
  name: "Icon Left Field Input ",
};

export const iconfieldinput2 = () => (
  <IconField>
    <Input placeholder={"Enter value here"} />
    <BlendIcon iconify={eyeIcon} />
  </IconField>
);
iconfieldinput2.story = {
  name: "Icon Right Field Input ",
};

export const iconfieldinput3 = () => (
  <IconField>
    <BlendIcon iconify={accountIcon} />
    <Input placeholder={"Enter value here"} />
    <BlendIcon iconify={eyeIcon} />
  </IconField>
);
iconfieldinput3.story = {
  name: "Icon Both Field Input ",
};
