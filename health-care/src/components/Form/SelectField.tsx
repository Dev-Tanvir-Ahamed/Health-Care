import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";

interface BasicSelectProps {
  name: string;
  label: string;
  size: "small" | "medium";
  options: { value: string | number; label: string }[];
}

export default function SelectField({
  name,
  label,
  options,
  size = "small",
}: BasicSelectProps) {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId={`${name}-label`}
              id={`${name}-select`}
              label={label}
              error={isError}
              size={size}
              // helperText={
              //   isError ? (formState.errors[name]?.message as string) : ""
              // }
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
}
