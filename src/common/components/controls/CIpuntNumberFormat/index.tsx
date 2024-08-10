import * as React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import Input from "@mui/joy/Input";
import { Controller } from "react-hook-form";
import { InputLabel } from "@mui/material";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatAdapter = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatAdapter(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix=""
      />
    );
  }
);

export default function CInputReactNumberFormat({ name, control, label }) {
  const [value, setValue] = React.useState("");
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="my-1">
          <InputLabel>{label}</InputLabel>
          <Input
            {...field}
            value={value}
            onChange={(event) => {
              const newValue = event.target.value;
              setValue(newValue);
              field.onChange(newValue);
            }}
            placeholder="0"
            slotProps={{
              input: {
                component: NumericFormatAdapter,
              },
            }}
          />
        </div>
      )}
    />
  );
}
