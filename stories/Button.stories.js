import React from "react";
import Button from "../src/Button";

export default { title: "Button" };

export const button = () => <Button>Something</Button>;
button.story = {
  name: "Button",
};

export const button2 = () => <Button variation={"outline"}>Something</Button>;
button2.story = {
  name: "Button outline",
};

export const button3 = () => <Button disabled>Something</Button>;
button3.story = {
  name: "Button disabled",
};

export const button4 = () => <Button variation={"link"}>Something</Button>;
button4.story = {
  name: "Button link",
};

export const button5 = () => (
  <Button
    variation={"file"}
    input={""}
    onChange={e => {
      console.log(e);
    }}
  >
    Something
  </Button>
);
button5.story = {
  name: "Button file",
};
export const button6 = () => <input type="file" />;
button6.story = {
  name: "Input file",
};
