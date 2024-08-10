import * as React from "react";
import Input from "@mui/joy/Input";
import { Controller } from "react-hook-form";
import { InputLabel } from "@mui/material";

export default function CFocusOutlineInput({
  id,
  control,
  name,
  css,
  placeholder,
  type,
}: any) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="py-1">
          <InputLabel>{placeholder}</InputLabel>
          <Input
            className={css}
            type={type ?? "text"}
            {...field}
            id={id}
            placeholder={placeholder}
            sx={{
              width: 480,
              "&::before": {
                display: "none",
              },
              "&:focus-within": {
                outline: "2px solid var(--Input-focusedHighlight)",
                outlineOffset: "2px",
              },
            }}
          />
        </div>
      )}
    />
  );
}
