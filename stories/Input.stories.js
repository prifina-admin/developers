import React from "react";

export default { title: "Input" };

export const input = () => <input type="text" />;
input.story = {
  name: "Input",
};

export const input2 = () => <input disabled type="text" />;
input2.story = {
  name: "Input disabled",
};
