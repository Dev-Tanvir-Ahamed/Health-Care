import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";

interface MultiChipFieldProps {
  name: string;
  label: string;
  options: { value: string | number; label: string }[];
  size?: "small" | "medium";
}

export default function MultiChipField({
  name,
  label,
  options,
  size = "small",
}: MultiChipFieldProps) {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              labelId={`${name}-label`}
              id={`${name}-select`}
              multiple
              value={field.value || []}
              onChange={(e) => {
                field.onChange(e); // Ensure this triggers form state update
              }}
              input={
                <OutlinedInput id={`${name}-select-multiple`} label={label} />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {(selected as string[]).map((value) => (
                    <Chip
                      key={value}
                      label={
                        options.find((opt) => opt.value === value)?.label ||
                        value
                      }
                    />
                  ))}
                </Box>
              )}
              size={size}
              error={isError}
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
