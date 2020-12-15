import React from "react";
import Label from "../src/Label";

export default { title: "Label" };

export const label = () => (
  <Label pointer nowrap variation={"block"}>
    Something very long text next line here{" "}
  </Label>
);
label.story = {
  name: "Label",
};

export const colorLabel = () => (
    <Label pointer nowrap variation={"block"} color={"textAccent"}>
        Something very long text next line here{" "}
    </Label>
);
colorLabel.story = {
    name: "Label with color",
};