import React from "react";
import Text from "../src/Text";

export default { title: "Text" };

export const text = () => (
  <Text bold italic>
    Something{" "}
  </Text>
);
text.story = {
  name: "Divider",
};
