import React from "react";
import renderer from "react-test-renderer";
import Text from "../src/Text";

test("Text renders correctly", () => {
    const tree = renderer.create( <Text> Something{" "} </Text> ).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Text renders fontStyle correctly", () => {
    const tree2 = renderer.create( <Text italic> Something </Text> ).toJSON();
    expect(tree2).toMatchSnapshot();
});
