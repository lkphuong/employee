import { Controller } from "react-hook-form";
import React from "react";

import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { InputLabel } from "@mui/material";

export default function CSelectIndicator({
  control,
  name,
  options,
  placeholder,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ..._field } }) => (
        <div className="py-1">
          <InputLabel>{placeholder}</InputLabel>
          <Select
            {..._field}
            onChange={(e, v) => onChange(v)}
            placeholder={placeholder}
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 480,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options.map((item: any) => (
              <Option key={item.key} value={item.key}>
                {item.value}
              </Option>
            ))}
          </Select>
        </div>
      )}
    />
  );
}
