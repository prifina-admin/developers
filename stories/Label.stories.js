import React from "react";
import Label from "../src/Label";

export default { title: "Label" };

export const label = () => (
  <Label pointer nowrap>
    Something very long text next line here{" "}
  </Label>
);
label.story = {
  name: "Label",
};
