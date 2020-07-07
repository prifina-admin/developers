import React from "react";
import Divider from "../src/Divider";

export default { title: "Divider" };

export const divider = () => (
  <Divider foo={"bar"} height={"5px"} color={"red"} />
);
divider.story = {
  name: "Divider",
};

export const divider2 = () => (
  <Divider variation={"div"} color={"green"} height={"5px"} />
);
divider2.story = {
  name: "Divider variation",
};
