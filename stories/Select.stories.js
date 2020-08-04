import React from "react";
import Select from "../src/Select";
import Label from "../src/Label";
import Box from "../src/Box";

export default { title: "Select" };

export const select = () => (
  <Box>
    <Label htmlFor="cabinClass">Cabin Class</Label>
    <Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy">
      <option>Economy</option>
      <option>Premium Economy</option>
      <option>Business</option>
      <option>First Class</option>
      <option>
        With a super long label that doesn't get clobbered by the chevron
      </option>
    </Select>
  </Box>
);
select.story = {
  name: "Select",
};
