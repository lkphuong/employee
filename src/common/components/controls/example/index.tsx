import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function SelectExample() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: any) => {
    const newValue = event.target.value as string;
    setSelectedValue(newValue);
    console.log("Selected value:", newValue);
  };

  return (
    <FormControl sx={{ width: 240 }}>
      <InputLabel>Select an option</InputLabel>
      <Select
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Select an option" }}
        renderValue={(selected) => (selected ? selected : "Select an option")}
        IconComponent={KeyboardArrowDown}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}
